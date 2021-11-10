import doDeployGuild from './doDeployGuild'

doDeployGuild(true)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
