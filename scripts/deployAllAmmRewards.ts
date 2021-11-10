//========================================================
// To deploy AmmRewards (Minichef Fork) specific contracts
//========================================================

import { ethers } from 'hardhat'
const hre = require('hardhat')

const BASIS_POINTS = 10 ** 4
const INITIAL_MINT = 10 ** 6
const zeroAddress = '0x0000000000000000000000000000000000000000'
const sleep = (ms) => new Promise((res) => setTimeout(res, ms))

const deployAllAmmRewards = async (network, verify, rnbwTokenAddress) => {
  const [deployer] = await ethers.getSigners()
  console.log('Deploying with account: ', deployer.address)

  /**
   * Deploy HeloToken contract
   */
  //const HaloToken = await ethers.getContractFactory('HaloToken')
  //const haloTokenContract = await HaloToken.deploy('HALO Rewards Token', 'HALO')
  //await haloTokenContract.deployed()
  //console.log('haloTokenContract deployed at: ', haloTokenContract.address)

  /**
   * Deploy HeloChest contract
   */
  const HaloHalo = await ethers.getContractFactory('HaloHalo')
  const HaloHaloContract = await HaloHalo.deploy(rnbwTokenAddress)
  await HaloHaloContract.deployed()
  console.log('halohaloContract deployed at: ', HaloHaloContract.address)

  /**
   * Deploy dummy contracts (required by Rewards contract)
   * - collateral token
   * - LP token contract
   * - minter
   */
  // const CollateralERC20 = await ethers.getContractFactory('CollateralERC20')
  // const collateralERC20Contract = await CollateralERC20.deploy('Dai', 'DAI')
  // await collateralERC20Contract.deployed()

  /**
   * Deploy Rewards contract
   */
  const ammLpRewardsRatio = 0.4 * BASIS_POINTS
  const vestingRewardsRatio = 0.2 * BASIS_POINTS
  const genesisBlock = await ethers.provider.getBlockNumber()

  let ammLpPools = []

  switch (network) {
    case 'Mainnet':
      // Current LP Supported
      ammLpPools = [
        ['0x3e8e036ddfd310b0838d3cc881a9fa827778845d', 10], // Uniswap RNBW:ETH Pool
        ['0x309411c77cf68d5662c0d4df68fb60f7e2df3b65', 10] // Balancer - THKD:USDC
      ]
      break
    case 'BSCTestnet':
      // Hardcode Sushi LP Token
      ammLpPools = [
        ['0x71e3c96C21D734bFA64D652EA99611Aa64F7D9F6', 10],
        ['0x9A0eeceDA5c0203924484F5467cEE4321cf6A189', 10]
      ]
      break
    case 'Kovan':
      // Hardcode kovan balancer pools
      ammLpPools = [
        ['0x37f80ac90235ce0d3911952d0ce49071a0ffdb1e', 10],
        ['0x65850ecd767e7ef71e4b78a348bb605343bd87c3', 10]
      ]
      break
    case 'Goerli':
      ammLpPools = [
        ['0xBea012aaF56949a95759B9CE0B494A97edf389e6', 10],
        ['0x9C303C18397cB5Fa62D9e68a0C7f2Cc6e00F0066', 10]
      ]
      break
    case 'Matic': {
      const LpToken = await ethers.getContractFactory('LpToken')
      const lpTokenContract = await LpToken.deploy('SUSHI/xSGD', 'SLP')
      await lpTokenContract.deployed()
      console.log(`lptoken deployed at ${lpTokenContract.address}`)
      await lpTokenContract.mint(
        deployer.address,
        ethers.utils.parseEther((100 * INITIAL_MINT).toString())
      )
      ammLpPools = [[lpTokenContract.address, 10]]
      break
    }
    case 'Moonbase':
    case 'Local': {
      const LpToken = await ethers.getContractFactory('LpToken')
      const lpTokenContract = await LpToken.deploy('LpToken', 'LPT')
      await lpTokenContract.deployed()
      console.log('lptoken deployed at ', lpTokenContract.address)
      await lpTokenContract.mint(
        deployer.address,
        ethers.utils.parseEther((100 * INITIAL_MINT).toString())
      )
      ammLpPools = [[lpTokenContract.address, 10]]
      break
    }
    default:
      ammLpPools = [
        ['0x37f80ac90235ce0d3911952d0ce49071a0ffdb1e', 10],
        ['0x65850ecd767e7ef71e4b78a348bb605343bd87c3', 10]
      ]
      break
  }

  const AmmRewards = await ethers.getContractFactory('AmmRewards')
  const ammRewardsContract = await AmmRewards.deploy(HaloHaloContract.address)
  await ammRewardsContract.deployed()
  console.log(
    'rewardsContract deployed at contract address ',
    ammRewardsContract.address
  )

  const RewardsManager = await ethers.getContractFactory('RewardsManager')
  const rewardsManager = await RewardsManager.deploy(
    vestingRewardsRatio,
    ammRewardsContract.address,
    HaloHaloContract.address,
    rnbwTokenAddress
  )
  console.log(
    'rewardsManager deployed at contract address ',
    rewardsManager.address
  )

  await ammRewardsContract.setRewardsManager(rewardsManager.address)
  console.log('Rewards manager is set.')

  for (var pool of ammLpPools) {
    await ammRewardsContract.add(pool[1], pool[0], zeroAddress)
  }

  if (verify === true) {
    console.log(
      'waiting 1 minute for etherscan to cache newly deployed contract bytecode'
    )
    await sleep(60000)
    console.log('done waiting')

    // auto verify halo token
    // console.log('verifying haloToken')
    // await hre.run('verify:verify', {
    //   address: haloTokenContract.address,
    //   constructorArguments: ['HALO Rewards Token', 'HALO']
    // })
    //
    // auto verify rewards contract
    console.log('verifying rewardsContract')
    await hre.run('verify:verify', {
      address: ammRewardsContract.address,
      constructorArguments: [HaloHaloContract.address]
    })

    // auto verify halohalo contract
    console.log('verifying halohaloContract')
    await hre.run('verify:verify', {
      address: HaloHaloContract.address,
      constructorArguments: [rnbwTokenAddress]
    })

    // auto verify RewardsManager contract
    console.log('verifying rewardsManagerContract')
    await hre.run('verify:verify', {
      address: rewardsManager.address,
      constructorArguments: [
        vestingRewardsRatio,
        ammRewardsContract.address,
        HaloHaloContract.address,
        rnbwTokenAddress
      ]
    })
  }
  // Mint initial Halo tokens
  //await haloTokenContract.mint(
  //  deployer.address,
  //  ethers.utils.parseEther((100 * INITIAL_MINT).toString())
  //)
  //console.log('Minted initial HALO for deployer account', deployer.address)
}

export default deployAllAmmRewards
function formatEther(arg0: any): any {
  throw new Error('Function not implemented.')
}
