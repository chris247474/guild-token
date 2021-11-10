export const RNBW_TOKEN_ADDRESS = {
  mainnet: '0xe94b97b6b43639e238c851a7e693f50033efd75c',
  kovan: '0x16D185d025bF592114D1A68f83085F36159f6CdA',
  kovan_test: '0x134C899E4794F02Bbaf4a3CC68E6032d8f12B41C',
  kovan_dev: '0x16D185d025bF592114D1A68f83085F36159f6CdA',
  kovan_alpha: '',
  goerli: '0x83eA0ECac2F3d3C18F4a43774A146ED1097acC57',
  bsc_testnet: '0xFc272e03b60a70F1841720ff4FfDDE78f11C9855',
  bsc: '',
  polygon_mumbai: '0x1e92A3d30409ce3FF5d9a125219D0518021DD516',
  polygon_mainnet: '',
  local: '',
  moonbase: ''
}

// Process env addresses
export const REWARDS_MANAGER_CONTRACT_ADDRESS =
  process.env.REWARDS_MANAGER_CONTRACT_ADDRESS

export const HALO_TOKEN_ADDRESS = process.env.HALO_TOKEN_ADDRESS

export const NETWORK = process.env.NETWORK

export const VESTING_ADDRESS = process.env.HALOHALO_ADDRESS

export const AMM_REWARDS_CONTRACT_ADDRESS =
  process.env.AMM_REWARDS_CONTRACT_ADDRESS
