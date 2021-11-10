import { doDeployAmmRewards } from './doDeployAmmRewards'

doDeployAmmRewards(process.env.HALOHALO_ADDRESS, true)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
