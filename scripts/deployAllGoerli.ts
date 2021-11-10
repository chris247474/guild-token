import { RNBW_TOKEN_ADDRESS } from './constants/addresses'
import deployAllAmmRewards from './deployAllAmmRewards'

deployAllAmmRewards('Goerli', true, RNBW_TOKEN_ADDRESS['goerli'])
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
