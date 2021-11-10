import { Provider } from '@ethersproject/abstract-provider'
import { BigNumberish } from 'ethers'
import { formatUnits, parseUnits } from 'ethers/lib/utils'

export enum TOKEN_DECIMAL {
  XSGD = 6,
  EURS = 2,
  CADC = 18,
  USDC = 6,
  DEFAULT = ''
}

export enum TOKEN_NAME {
  XSGD = 'XSGD',
  EURS = 'EURS',
  CADC = 'CADC',
  USDC = 'USDC',
  DEFAULT = ''
}

export const parseCurrency = (
  tokenName: TOKEN_NAME,
  tokenDecimal: TOKEN_DECIMAL,
  amountInEther: string
) => {
  let convertedValue

  switch (tokenName) {
    case TOKEN_NAME.XSGD:
      convertedValue = parseUnits(amountInEther, TOKEN_DECIMAL.XSGD)
      break
    case TOKEN_NAME.EURS:
      convertedValue = parseUnits(amountInEther, TOKEN_DECIMAL.EURS)
      break
    case TOKEN_NAME.CADC:
      convertedValue = parseUnits(amountInEther, TOKEN_DECIMAL.CADC)
      break
    case TOKEN_NAME.USDC:
      convertedValue = parseUnits(amountInEther, TOKEN_DECIMAL.USDC)
      break
    default:
      convertedValue = parseUnits(amountInEther) // 18 decimals
      break
  }

  return convertedValue
}

export const formatCurrency = (
  tokenName: TOKEN_NAME,
  tokenDecimal: TOKEN_DECIMAL,
  amountInEther: BigNumberish
) => {
  let convertedValue

  switch (tokenName) {
    case TOKEN_NAME.XSGD:
      convertedValue = formatUnits(amountInEther, TOKEN_DECIMAL.XSGD)
      break
    case TOKEN_NAME.EURS:
      convertedValue = formatUnits(amountInEther, TOKEN_DECIMAL.EURS)
      break
    case TOKEN_NAME.CADC:
      convertedValue = formatUnits(amountInEther, TOKEN_DECIMAL.CADC)
      break
    case TOKEN_NAME.USDC:
      convertedValue = formatUnits(amountInEther, TOKEN_DECIMAL.USDC)
      break
    default:
      convertedValue = formatUnits(amountInEther) // 18 decimals
      break
  }

  return convertedValue
}

export const getLatestBlockTime = async (
  provider: Provider
): Promise<number> => {
  const blockNumber = await provider.getBlockNumber()
  const block = await provider.getBlock(blockNumber)

  if (block) {
    return block.timestamp
  }

  return new Date().getTime()
}

export const getFutureTime = async (provider: Provider): Promise<number> => {
  const t = await getLatestBlockTime(provider)
  return t + 60
}
