require("dotenv").config();

import { task, HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-ethers";
import "solidity-coverage";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-typechain";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID || "";
const MNEMONIC_SEED = process.env.MNEMONIC_SEED || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

export default {
  solidity: "0.6.12",
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
      chainId: 1,
      accounts: {
        mnemonic: MNEMONIC_SEED,
      },
    },
    hardhat: {
      chainId: 1337,
      accounts: {
        mnemonic: MNEMONIC_SEED,
      },
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: {
        mnemonic: MNEMONIC_SEED,
      },
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: {
        mnemonic: MNEMONIC_SEED,
      },
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: {
        mnemonic: MNEMONIC_SEED,
      },
    },

    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_PROJECT_ID}`,
      gasPrice: 200000000000,
      accounts: {
        mnemonic: MNEMONIC_SEED,
      },
    },
    localhost: {
      chainId: 1337,
      url: "http://127.0.0.1:8545/",
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s2.binance.org:8545/",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {
        mnemonic: MNEMONIC_SEED,
      },
    },
    maticTestnet: {
      url: "https://rpc-mumbai.matic.today",
      chainId: 80001,
      accounts: {
        mnemonic: MNEMONIC_SEED,
      },
    },
    matic: {
      url: `https://polygon-mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: {
        mnemonic: MNEMONIC_SEED,
      },
      minGasPrice: 10000000000000,
    },
    moonbase: {
      url: "https://rpc.testnet.moonbeam.network",
      chainId: 1287,
      accounts: {
        mnemonic: MNEMONIC_SEED,
      },
    },
  },
  etherscan: {
    // change to BSCSCAN_API_KEY if BSC, ETHERSCAN_API_KEY if Eth networks
    apiKey: ETHERSCAN_API_KEY,
  },
};
