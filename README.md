### Halo Rewards Smart Contract

### Quick Start

Install hardhat

```bash
cd guild-token
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
- `npm/yarn run node` : deploys all contracts in a local node (hardhat node or ganache node). current local node is pointed to 8545 (hardhat)
