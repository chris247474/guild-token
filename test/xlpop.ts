import { parseEther, formatEther } from 'ethers/lib/utils'
import { expect } from 'chai'
import { ethers } from 'hardhat'

let haloTokenContract
let halohaloContract

// Number constants
const INITIAL_MINT = 10 ** 6
const EXPECTED_HALOHALOPRICE_WITHOUT_VESTING = 1
const EXPECTED_HALOHALOPRICE_AFTER_VESTING = 1.0000029593094943

// String constants
const INITIAL_USER_HALO_MINT = '550000000000000002000000' // got from the previous contract
const INITIAL_HALO_FOR_USERS = '100'
const SIMULATED_VESTED_REWARDS = '120'

let owner
let addrs
let actualHaloHaloPrice

describe('xLPOP Contract', async () => {
  before(async () => {
    ;[owner, ...addrs] = await ethers.getSigners()
    console.log('===================Deploying Contracts=====================')

    const HaloTokenContract = await ethers.getContractFactory('LPOP')
    haloTokenContract = await HaloTokenContract.deploy('Lollipop Token', 'LPOP')
    await haloTokenContract.deployed()
    console.log('LPOP token deployed')

    await haloTokenContract.mint(
      owner.address,
      ethers.utils.parseEther((40 * INITIAL_MINT).toString())
    )
    console.log(
      (40 * INITIAL_MINT).toString() + ' LPOP minted to ' + owner.address
    )
    console.log()

    const HalohaloContract = await ethers.getContractFactory('LollipopPool')
    halohaloContract = await HalohaloContract.deploy(haloTokenContract.address)
    await halohaloContract.deployed()
    console.log('xLPOP deployed')

    // Mint halo for owner
    await haloTokenContract.mint(owner.address, INITIAL_USER_HALO_MINT)

    console.log(
      '==========================================================\n\n'
    )
  })

  describe('Check Contract Deployments', () => {
    it('HaloToken should be deployed', async () => {
      expect(await haloTokenContract.symbol()).to.equal('LPOP')
      expect(await haloTokenContract.name()).to.equal('Lollipop Token')
    })

    it('Halohalo should be deployed', async () => {
      expect(await halohaloContract.symbol()).to.equal('xLPOP')
      expect(await halohaloContract.name()).to.equal('Lollipop Pool')
    })
  })

  describe('Earn vesting rewards by staking HALO inside halohalo', () => {
    let ownerHaloBal

    it('Genesis is zero', async () => {
      expect(
        await halohaloContract.genesisTimestamp(),
        'Genesis is not equal to zero.'
      ).to.equal(0)
    })

    it('Deposit LPOP tokens to Lollipop Pool contract to receive xLPOP', async () => {
      ownerHaloBal = await haloTokenContract.balanceOf(owner.address)
      await haloTokenContract.approve(halohaloContract.address, ownerHaloBal)
      await expect(
        halohaloContract.enter(ownerHaloBal),
        'Enter transaction is reverted'
      ).to.not.be.reverted

      expect(
        Number(await halohaloContract.balanceOf(owner.address)),
        'Halohalo balance and entered Halo is not equal'
      ).to.equal(Number(ownerHaloBal))

      expect(
        Number(await halohaloContract.genesisTimestamp()),
        'Genesis timestamp is zero after entering HALO.'
      ).to.be.greaterThan(0)
    })

    it('Calculates current value of xLPOP in terms of LPOP without vesting', async () => {
      // Before vesting, current halohalo price must be 1:1
      actualHaloHaloPrice = +formatEther(
        await halohaloContract.getCurrentHaloHaloPrice()
      )
      expect(
        actualHaloHaloPrice,
        `HALOHALO is not equal to ${EXPECTED_HALOHALOPRICE_WITHOUT_VESTING}`
      ).to.equal(EXPECTED_HALOHALOPRICE_WITHOUT_VESTING)
    })

    it('Calculates current value of xLPOP in terms of LPOP after vesting', async () => {
      // Simulate sending 20% of released rewards
      await haloTokenContract.mint(
        halohaloContract.address,
        parseEther(SIMULATED_VESTED_REWARDS)
      )

      const halohaloPriceAfterVesting = +formatEther(
        await halohaloContract.getCurrentHaloHaloPrice()
      )
      // Expect price to be greater than 1
      expect(
        actualHaloHaloPrice,
        `Current HALOHALO price at ${actualHaloHaloPrice} HALO is not less than previous HALOHALO price at ${halohaloPriceAfterVesting} HALO)  `
      ).to.be.lessThan(halohaloPriceAfterVesting)

      // Check the exact price
      expect(
        halohaloPriceAfterVesting,
        `${halohaloPriceAfterVesting} is not equal to ${EXPECTED_HALOHALOPRICE_AFTER_VESTING}`
      ).to.be.equal(EXPECTED_HALOHALOPRICE_AFTER_VESTING)
    })

    it('Claim staked LPOP + bonus rewards from Lollipop Pool and burn xLPOP', async () => {
      const haloInHalohalo = await haloTokenContract.balanceOf(
        halohaloContract.address
      )

      const ownerHaloHalo = await halohaloContract.balanceOf(owner.address)
      await halohaloContract.leave(ownerHaloHalo)

      expect(await haloTokenContract.balanceOf(owner.address)).to.equal(
        haloInHalohalo
      )
    })

    it('LPOP earned by User A > LPOP earned by User B > LPOP earned by User C', async () => {
      console.log('Minting LPOP to be entered in the halohalo contract..')
      console.log()
      console.log(`Minting ${INITIAL_HALO_FOR_USERS} HALO to User A...`)
      await haloTokenContract.mint(
        addrs[0].address,
        parseEther(INITIAL_HALO_FOR_USERS)
      )
      console.log(`Minting ${INITIAL_HALO_FOR_USERS} HALO to User B...`)
      await haloTokenContract.mint(
        addrs[1].address,
        parseEther(INITIAL_HALO_FOR_USERS)
      )
      console.log(`Minting ${INITIAL_HALO_FOR_USERS} HALO to User C...`)
      await haloTokenContract.mint(
        addrs[2].address,
        parseEther(INITIAL_HALO_FOR_USERS)
      )

      console.log(
        `${INITIAL_HALO_FOR_USERS} HALO deposited by User A to halohalo`
      )
      await haloTokenContract
        .connect(addrs[0])
        .approve(halohaloContract.address, parseEther(INITIAL_HALO_FOR_USERS))

      await halohaloContract
        .connect(addrs[0])
        .enter(parseEther(INITIAL_HALO_FOR_USERS))

      console.log(
        'Simulate releasing vested bonus tokens to Lollipop Pool from Rewards contract #1'
      )

      // Simulated 20% vesting by minting additional HALO to halohalo contract # 1
      await haloTokenContract.mint(
        halohaloContract.address,
        parseEther(SIMULATED_VESTED_REWARDS)
      )

      console.log(
        `${INITIAL_HALO_FOR_USERS} HALO deposited by User B to halohalo`
      )
      await haloTokenContract
        .connect(addrs[1])
        .approve(halohaloContract.address, parseEther(INITIAL_HALO_FOR_USERS))
      await halohaloContract
        .connect(addrs[1])
        .enter(parseEther(INITIAL_HALO_FOR_USERS))

      console.log(
        'Simulate releasing vested bonus tokens to Lollipop Pool from Rewards contract #2'
      )

      // Simulated 20% vesting by minting additional HALO to halohalo contract #2
      await haloTokenContract.mint(
        halohaloContract.address,
        parseEther(SIMULATED_VESTED_REWARDS)
      )

      console.log('100 LPOP deposited by User C to Lollipop Pool')
      await haloTokenContract
        .connect(addrs[2])
        .approve(halohaloContract.address, parseEther(INITIAL_HALO_FOR_USERS))
      console.log(`Transfer to ${addrs[2].address} approved`)
      await halohaloContract
        .connect(addrs[2])
        .enter(parseEther(INITIAL_HALO_FOR_USERS))

      console.log('All users leave Lollipop Pool')

      await halohaloContract
        .connect(addrs[0])
        .leave(await halohaloContract.balanceOf(addrs[0].address))
      console.log('Address 0 left')
      await halohaloContract
        .connect(addrs[1])
        .leave(await halohaloContract.balanceOf(addrs[1].address))
      console.log('Address 1 left')
      await halohaloContract
        .connect(addrs[2])
        .leave(await halohaloContract.balanceOf(addrs[2].address))
      console.log('Address 2 left')

      // Check if User A > User B and User C
      expect(
        Number(await haloTokenContract.balanceOf(addrs[0].address)),
        'User A is not greater than B and C'
      )
        .to.be.greaterThan(
          Number(await haloTokenContract.balanceOf(addrs[1].address))
        )
        .and.to.be.greaterThan(
          Number(await haloTokenContract.balanceOf(addrs[2].address))
        )
      // Check if User B  > User C
      expect(
        Number(await haloTokenContract.balanceOf(addrs[1].address)),
        'User B is not greater than C'
      ).and.to.be.greaterThan(
        Number(await haloTokenContract.balanceOf(addrs[2].address))
      )
    })
  })
})
