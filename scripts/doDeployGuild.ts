import { ethers } from 'hardhat'
const hre = require('hardhat')
import sleep from './util/sleep'

const doDeployGuild = async (
  //   initialSupply: number,
  verify: boolean
): Promise<string> => {
  // Get signer
  const [deployer] = await ethers.getSigners()

  // calculate initial supply
  //   const initSupply = ethers.utils.parseEther(initialSupply.toString())

  console.log('------------- DEPLOY GuildToken.sol -------------')

  // Signer details
  console.log('Deployer Address:', deployer.address)
  console.log(
    'Deployer balance:',
    ethers.utils.formatEther(await deployer.getBalance())
  )

  /**
   * Deploy HeloToken contract
   */
  const HaloToken = await ethers.getContractFactory('GuildToken')
  const haloTokenContract = await HaloToken.deploy(
    'Alpha Guild Token',
    'HUB',
    '1000000000000000000000000000'
  )
  await haloTokenContract.deployed()
  console.log('Guild Token deployed at: ', haloTokenContract.address)

  if (verify === true) {
    console.log(
      'waiting 1 minute for etherscan to cache newly deployed contract bytecode'
    )
    await sleep(60000)
    console.log('done waiting')

    // auto verify halo token
    console.log('verifying token')
    await hre.run('verify:verify', {
      address: haloTokenContract.address,
      constructorArguments: ['Guild Token Alpha', 'GUILDALPHA']
    })
  }

  console.log('------------- DONE DEPLOYING GuildToken.sol -------------')

  return haloTokenContract.address
}

export default doDeployGuild
