import { RNBW_TOKEN_ADDRESS } from './constants/addresses'
import deployAllAmmRewards from './deployAllAmmRewards'

deployAllAmmRewards('Moonbase', false, RNBW_TOKEN_ADDRESS['moonbase'])
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
