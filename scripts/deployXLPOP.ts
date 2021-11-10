import doDeployXLPOP from './doDeployXLPOP'

doDeployXLPOP(process.env.LPOP_TOKEN_ADDRESS, true)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
