import { parseUnits } from 'ethers/lib/utils'
import { ethers } from 'hardhat'
const { BigNumber } = require('ethers')
import { ALPHA, BETA, EPSILON, LAMBDA, MAX } from './constants'
import { getFutureTime } from './utils'

export const BASE_TEN = 10
export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
const tokensToMint = parseUnits('10000000')

export function encodeParameters(types, values) {
  const abi = new ethers.utils.AbiCoder()
  return abi.encode(types, values)
}

export async function prepare(thisObject, contracts) {
  for (let i in contracts) {
    let contract = contracts[i]
    thisObject[contract] = await ethers.getContractFactory(contract)
  }
  thisObject.signers = await ethers.getSigners()
  thisObject.alice = thisObject.signers[0]
  thisObject.bob = thisObject.signers[1]
  thisObject.carol = thisObject.signers[2]
  thisObject.dev = thisObject.signers[3]
  thisObject.alicePrivateKey =
    '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
  thisObject.bobPrivateKey =
    '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d'
  thisObject.carolPrivateKey =
    '0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a'
}

// TODO: Improve to handle contracts in array
export async function prepareWithLib(thisObject, contract, libraries) {
  thisObject[contract] = await ethers.getContractFactory(
    `${contract}`,
    libraries
  )
  thisObject.signers = await ethers.getSigners()
  thisObject.alice = thisObject.signers[0]
  thisObject.bob = thisObject.signers[1]
  thisObject.carol = thisObject.signers[2]
  thisObject.dev = thisObject.signers[3]
  thisObject.alicePrivateKey =
    '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
  thisObject.bobPrivateKey =
    '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d'
  thisObject.carolPrivateKey =
    '0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a'
}

export async function deploy(thisObject, contracts) {
  for (let i in contracts) {
    let contract = contracts[i]
    thisObject[contract[0]] = await contract[1].deploy(...(contract[2] || []))
    await thisObject[contract[0]].deployed()
  }
}

export async function createSLP(thisObject, name, tokenA, tokenB, amount) {
  const createPairTx = await thisObject.factory.createPair(
    tokenA.address,
    tokenB.address
  )

  const _pair = (await createPairTx.wait()).events[0].args.pair

  thisObject[name] = await thisObject.UniswapV2Pair.attach(_pair)

  await tokenA.transfer(thisObject[name].address, amount)
  await tokenB.transfer(thisObject[name].address, amount)

  await thisObject[name].mint(thisObject.alice.address)
}

export async function checkSushiUSDCToRNBW(thisObject, name, amountIn) {
  // calculated from _swap()
  const pairAddress = await thisObject.factory.getPair(
    thisObject.usdc.address,
    thisObject.rnbw.address
  )
  const pair = await thisObject.UniswapV2Pair.attach(pairAddress)

  const reserves = await pair.getReserves()
  const amountInWithFee = amountIn.mul(997)

  const amountOut =
    amountInWithFee.mul(reserves[1]) /
    reserves[0].mul(1000).add(amountInWithFee)

  thisObject[name] = parseInt(amountOut.toString())
  return amountOut
}

export async function createAndInitializeCurve(
  thisObject,
  curveInstance,
  curveName,
  curveSymbol,
  base,
  quote,
  baseWeight,
  quoteWeight,
  baseAssim,
  quoteAssim,
  provider
) {
  const newCurveTxn = await thisObject.curveFactory.newCurve(
    curveName,
    curveSymbol,
    base.address,
    quote.address,
    baseWeight,
    quoteWeight,
    baseAssim.address,
    quoteAssim.address
  )

  await newCurveTxn.wait()

  const curveAddress = await thisObject.curveFactory.getCurve(
    base.address,
    quote.address
  )

  // const curve = (await ethers.getContractAt('Curve', curveAddress)) as Curve
  thisObject[curveInstance] = await ethers.getContractAt('Curve', curveAddress)

  await thisObject[curveInstance].turnOffWhitelisting()

  await thisObject[curveInstance].setParams(ALPHA, BETA, MAX, EPSILON, LAMBDA)

  await base.approve(curveAddress, ethers.constants.MaxUint256)

  const txn4 = await quote.approve(curveAddress, ethers.constants.MaxUint256)

  const depositTxn = await thisObject[curveInstance].deposit(
    tokensToMint,
    await getFutureTime(provider)
  )

  await depositTxn.wait()

  // swapping for initial balance
  await thisObject[curveInstance].originSwap(
    base.address,
    quote.address,
    parseUnits('10000'),
    0,
    await getFutureTime(provider)
  )
}
// Defaults to e18 using amount * 10^18
export function getBigNumber(amount, decimals = 18) {
  return BigNumber.from(amount).mul(BigNumber.from(BASE_TEN).pow(decimals))
}

export function checkAproximate(a, b, message) {
  // check a is withing 5% of b
  a = BigNumber.from(a.toString())
  b = BigNumber.from(b.toString())
  let _check
  if (b.eq(BigNumber.from('0'))) {
    _check = a.eq(b)
  } else {
    _check =
      b.mul('999999999').lte(a.mul('1000000000')) &&
      a.mul('1000000000').lte(b.mul('1000000001'))
  }

  let [icon, symbol] = _check ? ['✔️', '~='] : ['🚨🚨🚨', '!~=']
  console.log(
    `${icon}  `,
    a.toString(),
    symbol,
    b.toString(),
    message ? message : ''
  )
}

export * from './time'
