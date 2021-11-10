import { RNBW_TOKEN_ADDRESS } from './constants/addresses'
import deployAllAmmRewards from './deployAllAmmRewards'

deployAllAmmRewards('Matic', false, RNBW_TOKEN_ADDRESS['polygon'])
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
