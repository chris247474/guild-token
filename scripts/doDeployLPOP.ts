import { ethers } from 'hardhat'
const hre = require('hardhat')
import sleep from './util/sleep'

const doDeployLPOP = async (
  initialSupply: number,
  verify: boolean
): Promise<string> => {
  // Get signer
  const [deployer] = await ethers.getSigners()

  // calculate initial supply
  const initSupply = ethers.utils.parseEther(initialSupply.toString())

  console.log('------------- DEPLOY LPOP.sol -------------')

  // Signer details
  console.log('Deployer Address:', deployer.address)
  console.log(
    'Deployer balance:',
    ethers.utils.formatEther(await deployer.getBalance())
  )

  /**
   * Deploy HeloToken contract
   */
  const HaloToken = await ethers.getContractFactory('LPOP')
  const haloTokenContract = await HaloToken.deploy('Lollipop Token', 'LPOP')
  await haloTokenContract.deployed()
  console.log('Lollipop Token deployed at: ', haloTokenContract.address)

  // Mint initial Halo tokens
  await haloTokenContract.mint(deployer.address, initSupply)
  console.log(
    'Minted to deployer initial LPOP',
    ethers.utils.formatEther(initSupply)
  )

  if (verify === true) {
    console.log(
      'waiting 1 minute for etherscan to cache newly deployed contract bytecode'
    )
    await sleep(60000)
    console.log('done waiting')

    // auto verify halo token
    console.log('verifying lpop token')
    await hre.run('verify:verify', {
      address: haloTokenContract.address,
      constructorArguments: ['Lollipop Token', 'LPOP']
    })
  }

  console.log('------------- DONE DEPLOYING LPOP.sol -------------')

  return haloTokenContract.address
}

export default doDeployLPOP
