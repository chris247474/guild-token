import { ethers } from 'hardhat'
const hre = require('hardhat')

const BASIS_POINTS = 10 ** 4

const vestingRewardsRatio = 0.2 * BASIS_POINTS
const sleep = (ms) => new Promise((res) => setTimeout(res, ms))

const doDeployRewardsManager = async (
  rnbwAddress,
  ammRewardsContractAddress,
  haloHaloAddress,
  verify
) => {
  const [deployer] = await ethers.getSigners()
  console.log(`Deploying with account: ${deployer.address}`)

  const ammRewardsContract = await ethers.getContractAt(
    'AmmRewards',
    ammRewardsContractAddress
  )

  const RewardsManager = await ethers.getContractFactory('RewardsManager')
  const rewardsManager = await RewardsManager.deploy(
    vestingRewardsRatio,
    ammRewardsContractAddress,
    haloHaloAddress,
    rnbwAddress
  )
  console.log(
    'rewardsManager deployed at contract address ',
    rewardsManager.address
  )

  await ammRewardsContract.setRewardsManager(rewardsManager.address)
  console.log('Rewards manager is set.')

  if (verify === true) {
    console.log(
      'waiting 1 minute for etherscan to cache newly deployed contract bytecode'
    )
    await sleep(60000)
    console.log('done waiting')

    // auto verify RewardsManager contract
    console.log('verifying rewardsManagerContract')
    await hre.run('verify:verify', {
      address: rewardsManager.address,
      constructorArguments: [
        vestingRewardsRatio,
        ammRewardsContractAddress,
        haloHaloAddress,
        rnbwAddress
      ]
    })
  }
}

export default doDeployRewardsManager
function formatEther(arg0: any): any {
  throw new Error('Function not implemented.')
}
