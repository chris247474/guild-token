### Guild Token Repo

This repo includes a few simple deploy, transfer tests for a vanilla ERC20 OpenZeppelin style token (1B total supply, capped). On deploy, it auto verifies the code on etherscan for convenience.

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
- nvm use
- yarn run node
- Open new terminal
- nvm use
- yarn run test
```

### Verifying smart contracts in bscscan and etherscan

Change the apiKey in hardhat config to ETHERSCAN_API_KEY if etherscan and BSCSCAN_API_KEY if bscscan.

### Using dev scripts

### Development and Debug Scripts

- `npm/yarn run test` : for running test scripts using hardhat
- `npm/yarn run node` : deploys all contracts in a local node (hardhat node or ganache node). current local node is pointed to 8545 (hardhat)
- `npm/yarn run deploy:guild`: deploys guild token to local node. The [deploy script](./scripts/doDeployGuild.ts) will auto verify on etherscan upon deploy (be sure to put an etherscan api key in your `.env`)
- `npm/yarn run deploy:guild --network <any network obj from hardhat.config.ts>`: deploys guild token to network specified in [hardhat config](./hardhat.config.ts). The [deploy script](./scripts/doDeployGuild.ts) will auto verify on etherscan upon deploy (be sure to put an etherscan api key in your `.env`)
