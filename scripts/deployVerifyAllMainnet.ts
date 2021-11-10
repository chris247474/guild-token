import { RNBW_TOKEN_ADDRESS } from './constants/addresses'
import deployAllAmmRewards from './deployAllAmmRewards'

deployAllAmmRewards('Mainnet', true, RNBW_TOKEN_ADDRESS['mainnet'])
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
