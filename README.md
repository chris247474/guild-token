### Halo Rewards Smart Contract

### Quick Start

Install hardhat

```bash
cd halo-rewards
yarn install
```

### Environment Variables

Refer to our [env example](./.env.example) file in project root.

### Running Tests

```bash
yarn install
yarn run test
```

### Verifying smart contracts in bscscan and etherscan

Change the apiKey in hardhat config to ETHERSCAN_API_KEY if etherscan and BSCSCAN_API_KEY if bscscan.

### Using dev scripts

### Development and Debug Scripts

- `npm/yarn run test` : for running test scripts using hardhat
- `npm/yarn run deploy:hardhat` : deploy all contracts in a hardhat environment node. this goes away after executing the script
- `npm/yarn run deploy:local` : deploys all contracts in a local node (hardhat node or ganache node). current local node is pointed to 8545 (hardhat)

### Testnet Deployment scripts

- `npm/yarn run deploy`: deploys all contracts to kovan testnet
- `npm/yarn run deploy-verify:kovan`: deploys all contracts and auto verifies on kovan testnet
- `npm/yarn run deploy:halo-kovan`: use to mint dummy HALO to your wallet. you can change the receiver, HALO token address and number of tokens to mint in ether units. this script only works on kovan
- `npm/yarn run deploy:onlyrewards-kovan` : use to deploy only the rewards contract. change the constructor parameters when necessary

### Rewards and Rewards Management Calling

If chain is not able to support verification like etherscan, you can use `triggerEpochRewards.ts` and `updateAMMPoolRewards.ts`. Make sure to change the contract addresses deployed on your target network. As of writing, only matic testnet scripts are added in `package.json`. Please use the same command format should you add one.

- `npm/yarn run call:triggerEpochRewards-maticTestnet` : trigger an epoch in the rewards manager contract
- `npm/yarn run updateAMMPoolRewards-maticTestnet` : update AMM Pool rewards, usually you do need to trigger this as this is also triggered when staking and unstaking
