import { ethers } from 'hardhat'
const hre = require('hardhat')
import sleep from './util/sleep'

const doDeployVesting = async (rnbwTokenAddress, verify) => {
  const [deployer] = await ethers.getSigners()
  console.log('------------- DEPLOY HaloHalo.sol -------------')
  console.log('Deploying Vesting contract with account: ', deployer.address)
  console.log('Passing Halo ERC20 address to ctor: ', rnbwTokenAddress)

  /**
   * Deploy Vesting contract
   */
  const VestingContractFactory = await ethers.getContractFactory('HaloHalo')
  const VestingContract = await VestingContractFactory.deploy(rnbwTokenAddress)
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
      constructorArguments: [rnbwTokenAddress]
    })
  }

  console.log('------------- DONE DEPLOYING Vesting Contract -------------')

  return VestingContract.address
}

export default doDeployVesting
