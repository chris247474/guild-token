import { INITIAL_MINT } from './constants'
import doDeployHalo from './doDeployHalo'

doDeployHalo(INITIAL_MINT, true)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
