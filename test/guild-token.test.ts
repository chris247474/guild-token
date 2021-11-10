import { expect } from "chai";
import { ethers } from "hardhat";

let haloTokenContract;
let owner;
let addr1;
let addr2;
let addrs;
const INITIAL_MINT = 10 ** 9;

describe("Guild Token", function () {
  before(async () => {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    console.log("===================Deploying Contracts=====================");
    const HaloTokenContract = await ethers.getContractFactory(
      "BlockchainSpaceToken"
    );
    haloTokenContract = await HaloTokenContract.deploy(
      "BlockchainSpace",
      "GUILD",
      INITIAL_MINT
    );
    await haloTokenContract.deployed();
  });

  it("HaloToken should be deployed", async () => {
    const expectedTotalSupply = await haloTokenContract.balanceOf(
      owner.address
    );
    expect(await haloTokenContract.symbol()).to.equal("GUILD");
    expect(await haloTokenContract.name()).to.equal("BlockchainSpace");
    expect(await haloTokenContract.totalSupply()).to.equal(expectedTotalSupply);
  });

  it("Allow transfer", async () => {
    const balanceOfOwnerAddress = await haloTokenContract.balanceOf(
      owner.address
    );
    await expect(
      haloTokenContract
        .connect(owner)
        .transfer(addr1.address, balanceOfOwnerAddress)
    ).to.be.not.reverted;
  });
});
