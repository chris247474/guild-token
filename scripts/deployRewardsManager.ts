import {
  AMM_REWARDS_CONTRACT_ADDRESS,
  HALO_TOKEN_ADDRESS,
  VESTING_ADDRESS
} from './constants/addresses'
import doDeployRewardsManager from './doDeployRewardsManager'

doDeployRewardsManager(
  HALO_TOKEN_ADDRESS,
  AMM_REWARDS_CONTRACT_ADDRESS,
  VESTING_ADDRESS,
  true
)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
