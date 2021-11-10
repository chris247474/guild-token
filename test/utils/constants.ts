import { parseUnits } from 'ethers/lib/utils'
import { BigNumber } from 'ethers'

/**
 * Guard against breaking the peg. The threshold of
 * increasing/decreasing the reserve (on one sided liquidity
 * and/or multiple weights?) to prevent breaking the peg
 */
export const ALPHA = parseUnits('0.5')
/**
 * Depth of liqudity.
 * If the actual weight is {BETA}% away from the ideal weight,
 * transaction will being to incur slippage.
 */
export const BETA = parseUnits('0.35')
/**
 * The rate at which price slippage increases
 * once past BETA. The higher the value of DELTA/MAX
 * the more rapidly slippage will increase.
 *
 * If DELTA/MAX = 0, there will be no slippage
 * but the pool will drain faster. Thus, price slippage
 * will not make the pool less liquid.
 */
export const MAX = parseUnits('0.15')

export const EPSILON = parseUnits('0.0004')
export const LAMBDA = parseUnits('0.3')

export const ORACLE_DATA = {
  EURS_USDC_ORACLE: {
    roundId_: '73786976294838206758',
    answer_: '118655000',
    startedAt_: '1628098811',
    updatedAt_: '1628098811',
    answeredInRound_: '73786976294838206758'
  },
  CAD_USDC_ORACLE: {
    roundId_: '36893488147419103625',
    answer_: '79523500',
    startedAt_: '1628098811',
    updatedAt_: '1628098811',
    answeredInRound_: '36893488147419103625'
  },
  USD_USDC_ORACLE: {
    roundId_: '36893488147419103376',
    answer_: '100000000',
    startedAt_: '1628098811',
    updatedAt_: '1628098811',
    answeredInRound_: '36893488147419103376'
  }
}
