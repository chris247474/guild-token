import { ethers } from 'hardhat'
import { formatEther, parseEther } from 'ethers/lib/utils'
import { REWARDS_TO_DEPLOY } from '../constants'
import {
  HALO_TOKEN_ADDRESS,
  REWARDS_MANAGER_CONTRACT_ADDRESS
} from '../constants/addresses'

const triggerEpochRewards = async () => {
  // We get the contract to deploy
  const [deployer] = await ethers.getSigners()

  // Deployer information
  console.log('Deployer Address:', deployer.address)
  console.log('Deployer balance:', formatEther(await deployer.getBalance()))

  const haloTokenContract = await ethers.getContractAt(
    'HaloToken',
    HALO_TOKEN_ADDRESS
  )

  const currentHaloBalance = await haloTokenContract.balanceOf(deployer.address)

  console.log(`Current Balance:  ${formatEther(currentHaloBalance)}`)

  if (+formatEther(currentHaloBalance) < REWARDS_TO_DEPLOY) {
    const mintTxn = await haloTokenContract.mint(
      deployer.address,
      parseEther(`${REWARDS_TO_DEPLOY}`)
    )

    console.log(await mintTxn.wait())
    console.log('Minted!')
  }

  // Rewards Manager
  await haloTokenContract.approve(
    REWARDS_MANAGER_CONTRACT_ADDRESS,
    ethers.constants.MaxUint256
  )
  console.log('Approved!')

  // Rewards constants
  const rewardsManager = await ethers.getContractAt(
    'RewardsManager',
    REWARDS_MANAGER_CONTRACT_ADDRESS
  )

  const txn = await rewardsManager.releaseEpochRewards(
    parseEther(`${REWARDS_TO_DEPLOY}`),
    {
      gasLimit: 1000000
    }
  )

  console.log(await txn.wait())
  console.log('Released current epoch!')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
triggerEpochRewards()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
