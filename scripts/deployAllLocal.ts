import { RNBW_TOKEN_ADDRESS } from './constants/addresses'
import deployAllAmmRewards from './deployAllAmmRewards'

deployAllAmmRewards('Local', false, RNBW_TOKEN_ADDRESS['local'])
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
