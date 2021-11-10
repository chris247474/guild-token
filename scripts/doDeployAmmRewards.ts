//========================================================
// To deploy AmmRewards (Minichef Fork) specific contracts
//========================================================

import { ethers } from 'hardhat'
const hre = require('hardhat')

const INITIAL_MINT = 10 ** 6
const sleep = (ms) => new Promise((res) => setTimeout(res, ms))

export const doDeployAmmRewards = async (haloHaloAddress, verify) => {
  const [deployer] = await ethers.getSigners()
  console.log('Deploying with account: ', deployer.address)

  // let ammLpPools = []

  // switch (network) {
  //   case 'Mainnet':
  //     // Current LP Supported
  //     ammLpPools = [
  //       ['0x3e8e036ddfd310b0838d3cc881a9fa827778845d', 10], // Uniswap RNBW:ETH Pool
  //       ['0x309411c77cf68d5662c0d4df68fb60f7e2df3b65', 10] // Balancer - THKD:USDC
  //     ]
  //     break
  //   case 'BSCTestnet':
  //     // Hardcode Sushi LP Token
  //     ammLpPools = [
  //       ['0x71e3c96C21D734bFA64D652EA99611Aa64F7D9F6', 10],
  //       ['0x9A0eeceDA5c0203924484F5467cEE4321cf6A189', 10]
  //     ]
  //     break
  //   case 'Kovan':
  //     // Hardcode kovan balancer pools
  //     ammLpPools = [
  //       ['0x37f80ac90235ce0d3911952d0ce49071a0ffdb1e', 10],
  //       ['0x65850ecd767e7ef71e4b78a348bb605343bd87c3', 10]
  //     ]
  //     break
  //   case 'Goerli':
  //     ammLpPools = [
  //       ['0xBea012aaF56949a95759B9CE0B494A97edf389e6', 10],
  //       ['0x9C303C18397cB5Fa62D9e68a0C7f2Cc6e00F0066', 10]
  //     ]
  //     break
  //   case 'Matic': {
  //     // break // ammLpPools = [['0xc4e595acDD7d12feC385E5dA5D43160e8A0bAC0E', 10]] // Sushi LP Token
  //     const LpToken = await ethers.getContractFactory('LpToken')
  //     const lpTokenContract = await LpToken.deploy('SUSHI/xSGD', 'SLP')
  //     await lpTokenContract.deployed()
  //     console.log('lptoken deployed at ', lpTokenContract.address)
  //     await lpTokenContract.mint(
  //       deployer.address,
  //       ethers.utils.parseEther((100 * INITIAL_MINT).toString())
  //     )
  //     ammLpPools = [[lpTokenContract.address, 10]]
  //     break
  //   }
  //   case 'Moonbase':
  //   case 'Local': {
  //     const LpToken = await ethers.getContractFactory('LpToken')
  //     const lpTokenContract = await LpToken.deploy('LpToken', 'LPT')
  //     await lpTokenContract.deployed()
  //     console.log('lptoken deployed at ', lpTokenContract.address)
  //     await lpTokenContract.mint(
  //       deployer.address,
  //       ethers.utils.parseEther((100 * INITIAL_MINT).toString())
  //     )
  //     ammLpPools = [[lpTokenContract.address, 10]]
  //     break
  //   }
  //   default:
  //     ammLpPools = [
  //       ['0x37f80ac90235ce0d3911952d0ce49071a0ffdb1e', 10],
  //       ['0x65850ecd767e7ef71e4b78a348bb605343bd87c3', 10]
  //     ]
  //     break
  // }

  const AmmRewards = await ethers.getContractFactory('AmmRewards')
  const ammRewardsContract = await AmmRewards.deploy(haloHaloAddress)
  await ammRewardsContract.deployed()
  console.log(
    'rewardsContract deployed at contract address ',
    ammRewardsContract.address
  )
  console.log('with xRNBW address ', ammRewardsContract.REWARD_TOKEN)

  if (verify === true) {
    console.log(
      'waiting 1 minute for etherscan to cache newly deployed contract bytecode'
    )
    await sleep(60000)
    console.log('done waiting')

    // auto verify vesting token
    console.log('verifying amm contract')
    await hre.run('verify:verify', {
      address: ammRewardsContract.address,
      constructorArguments: [haloHaloAddress]
    })
  }
}
