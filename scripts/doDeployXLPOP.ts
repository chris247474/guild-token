import { ethers } from 'hardhat'
const hre = require('hardhat')
import sleep from './util/sleep'

const doDeployXLPOP = async (haloTokenAddress, verify) => {
  const [deployer] = await ethers.getSigners()
  console.log('------------- DEPLOY LollipopPool.sol -------------')
  console.log('Deploying Vesting contract with account: ', deployer.address)
  console.log('Passing LPOP ERC20 address to ctor: ', haloTokenAddress)

  /**
   * Deploy Vesting contract
   */
  const VestingContractFactory = await ethers.getContractFactory('LollipopPool')
  const VestingContract = await VestingContractFactory.deploy(haloTokenAddress)
  await VestingContract.deployed()
  console.log('Vesting contract deployed at: ', VestingContract.address)

  if (verify === true) {
    console.log(
      'waiting 1 minute for etherscan to cache newly deployed contract bytecode'
    )
    await sleep(60000)
    console.log('done waiting')

    // auto verify vesting token
    console.log('verifying vesting contract')
    await hre.run('verify:verify', {
      address: VestingContract.address,
      constructorArguments: [haloTokenAddress]
    })
  }

  console.log(
    '------------- DONE DEPLOYING LollipopPool Contract -------------'
  )

  return VestingContract.address
}

export default doDeployXLPOP
