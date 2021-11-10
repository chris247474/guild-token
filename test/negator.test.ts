import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('negator test', function () {
  it('negator test', async function () {
    const [deployer] = await ethers.getSigners()
    console.log('Deploying with account: ', deployer.address)

    const negatorFactory = await ethers.getContractFactory('Negator')
    const negatorContract = await negatorFactory.deploy()
    // await expect(negatorContract.connect(deployer).negates())
    //   .to.emit(negatorContract.address, 'Negated')
    //   .withArgs('-1')

    await expect(negatorContract.check1e18IsUint256())
      .to.emit(negatorContract.address, 'SameType')
      .withArgs('true').to.not.be.reverted
  })
})
