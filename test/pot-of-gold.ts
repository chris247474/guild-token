import { expect } from 'chai'
import {
  prepare,
  deploy,
  getBigNumber,
  createSLP,
  prepareWithLib,
  createAndInitializeCurve,
  checkSushiUSDCToRNBW
} from './utils'
import { ethers } from 'hardhat'
import { parseUnits } from 'ethers/lib/utils'
import { ORACLE_DATA } from './utils/constants'
import { getFutureTime } from './utils/utils'
import { BigNumber } from 'ethers'

const amountToTransfer = parseUnits('100')
const simulateOracleMultiplier = 2

describe('PotOfGold', function () {
  before(async function () {
    await prepare(this, [
      'PotOfGold',
      'HaloHalo',
      'PotOfGoldExploitMock',
      'ERC20Mock',
      'UniswapV2Factory',
      'UniswapV2Pair',
      'Curves',
      'Orchestrator',
      'ProportionalLiquidity',
      'Swaps',
      'ViewLiquidity',
      'MockAssimilator',
      'MockUsdUsdcAssimilator',
      'MockOracle'
    ])
  })

  beforeEach(async function () {
    // deploy dfx mock environment
    await deploy(this, [
      ['orchestratorLib', this.Orchestrator, []],
      ['curvesLib', this.Curves, []],
      ['proportionalLiquidity', this.ProportionalLiquidity, []],
      ['viewLiquidityLib', this.ViewLiquidity, []],
      ['swapsLib', this.Swaps, []],
      [
        'mockOracleEURSUSDC',
        this.MockOracle,
        [
          ORACLE_DATA.EURS_USDC_ORACLE.roundId_,
          ORACLE_DATA.EURS_USDC_ORACLE.answer_,
          ORACLE_DATA.EURS_USDC_ORACLE.startedAt_,
          ORACLE_DATA.EURS_USDC_ORACLE.updatedAt_,
          ORACLE_DATA.EURS_USDC_ORACLE.answeredInRound_
        ]
      ],
      [
        'mockOracleUSDUSDC',
        this.MockOracle,
        [
          ORACLE_DATA.USD_USDC_ORACLE.roundId_,
          ORACLE_DATA.USD_USDC_ORACLE.answer_,
          ORACLE_DATA.USD_USDC_ORACLE.startedAt_,
          ORACLE_DATA.USD_USDC_ORACLE.updatedAt_,
          ORACLE_DATA.USD_USDC_ORACLE.answeredInRound_
        ]
      ],
      [
        'mockOracleCADCUSDC',
        this.MockOracle,
        [
          ORACLE_DATA.CAD_USDC_ORACLE.roundId_,
          ORACLE_DATA.CAD_USDC_ORACLE.answer_,
          ORACLE_DATA.CAD_USDC_ORACLE.startedAt_,
          ORACLE_DATA.CAD_USDC_ORACLE.updatedAt_,
          ORACLE_DATA.CAD_USDC_ORACLE.answeredInRound_
        ]
      ]
    ])

    await prepareWithLib(this, 'CurveFactory', {
      libraries: {
        Curves: this.curvesLib.address,
        Orchestrator: this.orchestratorLib.address,
        ProportionalLiquidity: this.proportionalLiquidity.address,
        Swaps: this.swapsLib.address,
        ViewLiquidity: this.viewLiquidityLib.address
      }
    })

    await deploy(this, [['curveFactory', this.CurveFactory, []]])

    // deploy mock tokens
    await deploy(this, [
      ['rnbw', this.ERC20Mock, ['RNBW', 'RNBW', getBigNumber('10000000')]],
      ['usdc', this.ERC20Mock, ['USDC', 'USDC', getBigNumber('10000000')]],
      ['eurs', this.ERC20Mock, ['EURS', 'EURS', getBigNumber('10000000')]],
      ['cadc', this.ERC20Mock, ['CADC', 'CADC', getBigNumber('10000000')]],
      ['weth', this.ERC20Mock, ['WETH', 'ETH', getBigNumber('10000000')]],
      ['strudel', this.ERC20Mock, ['$TRDL', '$TRDL', getBigNumber('10000000')]],
      ['factory', this.UniswapV2Factory, [this.alice.address]]
    ])

    // deploy assimilator after deploying erc tokens and mock oracle
    await deploy(this, [
      [
        'baseAssimilatorMock',
        this.MockAssimilator,
        [this.mockOracleEURSUSDC.address, this.usdc.address, this.eurs.address]
      ],
      [
        'baseAssimilatorMock2',
        this.MockAssimilator,
        [this.mockOracleCADCUSDC.address, this.usdc.address, this.cadc.address]
      ],
      [
        'quoteAssimilatorMock',
        this.MockUsdUsdcAssimilator,
        [this.mockOracleUSDUSDC.address, this.usdc.address]
      ]
    ])

    await deploy(this, [['halohalo', this.HaloHalo, [this.rnbw.address]]])

    await deploy(this, [
      [
        'potOfGold',
        this.PotOfGold,
        [
          this.factory.address,
          this.curveFactory.address,
          this.halohalo.address,
          this.rnbw.address,
          this.usdc.address
        ]
      ]
    ])

    await deploy(this, [
      ['exploiter', this.PotOfGoldExploitMock, [this.potOfGold.address]]
    ])

    await createSLP(this, 'rnbwEth', this.rnbw, this.weth, getBigNumber(10))
    await createSLP(this, 'rnbwUSDC', this.rnbw, this.usdc, getBigNumber(10))

    // Create curves and setup
    await createAndInitializeCurve(
      this,
      'eursUsdcCurve',
      'HALODAO-V1-EURS-USDC',
      'HALO-V1',
      this.eurs,
      this.usdc,
      parseUnits('0.5'),
      parseUnits('0.5'),
      this.baseAssimilatorMock,
      this.quoteAssimilatorMock,
      this.alice.provider
    )
  })

  describe('convert', function () {
    it('should convert minted Curve LP fees to RNBW ', async function () {
      // Transfer to pot of gold for processing
      await this.eursUsdcCurve.transfer(
        this.potOfGold.address,
        amountToTransfer
      )

      expect(await this.rnbw.balanceOf(this.halohalo.address)).to.equal(0)

      expect(
        await this.eursUsdcCurve.balanceOf(this.potOfGold.address)
      ).to.equal(amountToTransfer)

      // Calculating expected RNBW values
      const viewWithdraw = await this.eursUsdcCurve.viewWithdraw(
        amountToTransfer
      )
      const expectedEURSValue = viewWithdraw[0]
      const expectedUSDCValue = viewWithdraw[1]

      const viewOriginSwapAmount = await this.eursUsdcCurve.viewOriginSwap(
        this.eurs.address,
        this.usdc.address,
        expectedEURSValue
      )

      await checkSushiUSDCToRNBW(
        this,
        'rnbwAfterSingleConvert',
        viewOriginSwapAmount.add(expectedUSDCValue)
      )

      await expect(
        this.potOfGold.convert(
          this.eurs.address,
          this.rnbwAfterSingleConvert,
          await getFutureTime(this.alice.provider)
        )
      )
        .to.emit(this.potOfGold, 'LogConvert')
        .withArgs(
          this.alice.address,
          this.usdc.address,
          this.eurs.address,
          expectedUSDCValue,
          expectedEURSValue,
          this.rnbwAfterSingleConvert
        )

      expect(
        await this.eursUsdcCurve.balanceOf(this.potOfGold.address),
        'Curves are not converted'
      ).to.equal(0)

      expect(
        await this.usdc.balanceOf(this.potOfGold.address),
        'USDC is not converted or not fully converted to RNBW'
      ).to.equal(0)

      expect(
        await this.eurs.balanceOf(this.potOfGold.address),
        'EURS is not converted or not fully converted to RNBW'
      ).to.equal(0)

      expect(
        BigNumber.from(await this.rnbw.balanceOf(this.halohalo.address)),
        'No RNBW is sent to the RNBW pool'
      ).to.equal(this.rnbwAfterSingleConvert)
    })

    it('should allow to convert multiple Curves LP fees using convertMultiple', async function () {
      await createAndInitializeCurve(
        this,
        'cadcUsdcCurve',
        'HALODAO-V1-CADC-USDC',
        'HALO-V1',
        this.cadc,
        this.usdc,
        parseUnits('0.5'),
        parseUnits('0.5'),
        this.baseAssimilatorMock2,
        this.quoteAssimilatorMock,
        this.alice.provider
      )

      // Calculating expected RNBW values
      const viewWithdrawConvertMultipleEURS =
        await this.eursUsdcCurve.viewWithdraw(amountToTransfer)
      const expectedEURSValueConvertMultipleEURS =
        viewWithdrawConvertMultipleEURS[0]
      const expectedUSDCValueConvertMultipleEURS =
        viewWithdrawConvertMultipleEURS[1]

      const viewOriginSwapAmountEURS = await this.eursUsdcCurve.viewOriginSwap(
        this.eurs.address,
        this.usdc.address,
        expectedEURSValueConvertMultipleEURS
      )

      await checkSushiUSDCToRNBW(
        this,
        'rnbwAfterMultipleConvertEURS',
        viewOriginSwapAmountEURS.add(expectedUSDCValueConvertMultipleEURS)
      )

      const viewWithdrawConvertMultipleCADC =
        await this.cadcUsdcCurve.viewWithdraw(amountToTransfer)
      const expectedCADCValueConvertMultipleCADC =
        viewWithdrawConvertMultipleCADC[0]
      const expectedUSDCValueConvertMultipleCADC =
        viewWithdrawConvertMultipleCADC[1]

      const viewOriginSwapAmountCADC = await this.cadcUsdcCurve.viewOriginSwap(
        this.cadc.address,
        this.usdc.address,
        expectedCADCValueConvertMultipleCADC
      )

      await checkSushiUSDCToRNBW(
        this,
        'rnbwAfterMultipleConvertCADC',
        viewOriginSwapAmountCADC.add(expectedUSDCValueConvertMultipleCADC)
      )

      await this.eursUsdcCurve.transfer(
        this.potOfGold.address,
        amountToTransfer
      )
      await this.cadcUsdcCurve.transfer(
        this.potOfGold.address,
        amountToTransfer
      )

      expect(await this.rnbw.balanceOf(this.halohalo.address)).to.equal(0)
      expect(
        await this.eursUsdcCurve.balanceOf(this.potOfGold.address)
      ).to.equal(amountToTransfer)
      expect(
        await this.cadcUsdcCurve.balanceOf(this.potOfGold.address)
      ).to.equal(amountToTransfer)

      await expect(
        this.potOfGold.convertMultiple(
          [this.eurs.address, this.cadc.address],
          [
            this.rnbwAfterMultipleConvertEURS,
            this.rnbwAfterMultipleConvertCADC
          ],
          await getFutureTime(this.alice.provider)
        )
      ).to.not.be.reverted

      expect(
        await this.eursUsdcCurve.balanceOf(this.potOfGold.address),
        'Curves are not converted'
      ).to.equal(0)

      expect(
        await this.cadcUsdcCurve.balanceOf(this.potOfGold.address),
        'Curves are not converted'
      ).to.equal(0)

      expect(
        await this.usdc.balanceOf(this.potOfGold.address),
        'USDC is not converted or not fully converted to RNBW'
      ).to.equal(0)

      expect(
        await this.eurs.balanceOf(this.potOfGold.address),
        'EURS is not converted or not fully converted to RNBW'
      ).to.equal(0)

      expect(
        await this.cadc.balanceOf(this.potOfGold.address),
        'CADC is not converted or not fully converted to RNBW'
      ).to.equal(0)

      expect(
        await this.rnbw.balanceOf(this.halohalo.address),
        'No RNBW is sent to the RNBW pool'
      ).to.equal(
        this.rnbwAfterMultipleConvertEURS + this.rnbwAfterMultipleConvertCADC
      )
    })

    it('reverts if converted value is less than minRNBWAmount for convert()', async function () {
      await this.eursUsdcCurve.transfer(
        this.potOfGold.address,
        amountToTransfer
      )

      await expect(
        this.potOfGold.convert(
          this.eurs.address,
          this.rnbwAfterSingleConvert * simulateOracleMultiplier,
          await getFutureTime(this.alice.provider)
        )
      ).to.be.revertedWith('PotOfGold: rnbwAmount is less than minRNBWAmount')

      expect(
        await this.eursUsdcCurve.balanceOf(this.potOfGold.address),
        'Swap txn was executed'
      ).to.equal(amountToTransfer)
    })

    it('reverts if converted value is less than minRNBWAmount for convertMultiple()', async function () {
      await this.eursUsdcCurve.transfer(
        this.potOfGold.address,
        amountToTransfer
      )
      await this.cadcUsdcCurve.transfer(
        this.potOfGold.address,
        amountToTransfer
      )

      await expect(
        this.potOfGold.convertMultiple(
          [this.eurs.address, this.cadc.address],
          [
            this.rnbwAfterMultipleConvertEURS * simulateOracleMultiplier,
            this.rnbwAfterMultipleConvertCADC * simulateOracleMultiplier
          ],
          await getFutureTime(this.alice.provider)
        )
      ).to.be.revertedWith('PotOfGold: rnbwAmount is less than minRNBWAmount')

      expect(
        await this.eursUsdcCurve.balanceOf(this.potOfGold.address),
        'Swap txn was executed for EURS'
      ).to.equal(amountToTransfer)

      expect(
        await this.cadcUsdcCurve.balanceOf(this.potOfGold.address),
        'Swap txn was executed for CADC'
      ).to.equal(amountToTransfer)
    })

    it('reverts if caller is not owner for convert()', async function () {
      await expect(
        this.exploiter.convert(
          this.eurs.address,
          this.rnbwAfterSingleConvert,
          await getFutureTime(this.alice.provider)
        )
      ).to.be.revertedWith('Ownable: caller is not the owner')
    })

    it('reverts if caller is not owner for convertMultiple()', async function () {
      await expect(
        this.exploiter.convertMultiple(
          [this.eurs.address, this.cadc.address],
          [
            this.rnbwAfterMultipleConvertEURS,
            this.rnbwAfterMultipleConvertCADC
          ],
          await getFutureTime(this.alice.provider)
        )
      ).to.be.revertedWith('Ownable: caller is not the owner')
    })

    it('should revert when there are no curve on the given tokens', async function () {
      // Test if curve is valid
      await expect(
        this.potOfGold.convert(
          this.strudel.address,

          this.rnbwAfterMultipleConvertEURS,
          await getFutureTime(this.alice.provider)
        )
      ).to.be.revertedWith('PotOfGold: Invalid curve')
    })

    it('should revert if swap in our AMM failed', async function () {
      const testValue = parseUnits('9000000')
      await this.eursUsdcCurve.transfer(this.potOfGold.address, testValue)

      // Trigger Curve/upper-halt revert
      // Reference: https://github.com/HaloDAO/dfx-protocol-clone/blob/d52269d65585670df2aae1262e6fb47184d44c73/contracts/CurveMath.sol#L242
      await expect(
        this.potOfGold.convert(
          this.eurs.address,
          this.rnbwAfterMultipleConvertEURS,
          await getFutureTime(this.alice.provider)
        )
      ).to.be.reverted

      expect(
        await this.eursUsdcCurve.balanceOf(this.potOfGold.address),
        'Curves withdrawal was successful'
      ).to.equal(testValue)
    })

    it('should revert if we do not send curves in the contract', async function () {
      expect(
        await this.eursUsdcCurve.balanceOf(this.potOfGold.address)
      ).to.equal(0)

      await expect(
        this.potOfGold.convert(
          this.eurs.address,
          this.rnbwAfterMultipleConvertEURS,
          await getFutureTime(this.alice.provider)
        )
      ).to.be.revertedWith('PotOfGold: No curves in contract')
    })
  })
})
