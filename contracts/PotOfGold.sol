// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;
import {IERC20} from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import {SafeMath} from '@openzeppelin/contracts/math/SafeMath.sol';
import {SafeERC20} from '@openzeppelin/contracts/token/ERC20/SafeERC20.sol';
import {Ownable} from '@openzeppelin/contracts/access/Ownable.sol';

import {Curve} from './amm/Curve.sol';
import {CurveFactory} from './amm/CurveFactory.sol';
import {IUniswapV2ERC20} from './uniswapv2/interfaces/IUniswapV2ERC20.sol';
import {IUniswapV2Pair} from './uniswapv2/interfaces/IUniswapV2Pair.sol';
import {IUniswapV2Factory} from './uniswapv2/interfaces/IUniswapV2Factory.sol';

// There's a pot of gold at the end of the RNBW
contract PotOfGold is Ownable {
  using SafeMath for uint256;
  using SafeERC20 for IERC20;

  IUniswapV2Factory public immutable factory;
  CurveFactory public immutable curveFactory;

  address public immutable rainbowPool;
  address public immutable rnbw;
  address public immutable usdc;

  event LogConvert(
    address indexed server,
    address indexed token0,
    address indexed token1,
    uint256 amount0,
    uint256 amount1,
    uint256 amountRNBW
  );

  constructor(
    address _factory,
    address _curveFactory,
    address _rainbowPool,
    address _rnbw,
    address _usdc
  ) public {
    factory = IUniswapV2Factory(_factory);
    curveFactory = CurveFactory(_curveFactory);
    rainbowPool = _rainbowPool;
    rnbw = _rnbw;
    usdc = _usdc;
  }

  function convert(address token, uint256 minRNBWAmount, uint256 deadline) external onlyOwner {
    _convert(token, minRNBWAmount, deadline);
  }

  function convertMultiple(address[] calldata token, uint256[] calldata minRNBWAmount, uint256 deadline)
    external
    onlyOwner
  {
    // TODO: This can be optimized a fair bit, but this is safer and simpler for now
    uint256 len = token.length;
    for (uint256 i = 0; i < len; i++) {
      _convert(token[i], minRNBWAmount[i], deadline);
    }
  }

  function _convert(address token, uint256 minRNBWAmount, uint256 deadline) internal {
    // 1 - get curve returns address
    Curve curve = Curve(curveFactory.getCurve(token, usdc));
    // 2 - check if curve exist
    require(address(curve) != address(0), 'PotOfGold: Invalid curve');

    // 3 - check if PotOfGold has this curve lp token
    uint256 balance = curve.balanceOf(address(this));
    require(balance > 0, 'PotOfGold: No curves in contract');

    // 4 - withdraw curves to get usdc and token
    curve.withdraw(balance, deadline);
    uint256 usdcTokenBalanceBeforeSwap = IERC20(usdc).balanceOf(address(this));
    uint256 nonUsdcTokenBalance = IERC20(token).balanceOf(address(this));

    // 5 - approve token spend before swap
    IERC20(token).safeApprove(address(curve), nonUsdcTokenBalance);

    // 4 - swap non usdc to usdc using our AMM
    // check for the minimum amount
    uint256 minOriginSwap = curve.viewOriginSwap(token, usdc, nonUsdcTokenBalance);
    curve.originSwap(token, usdc, nonUsdcTokenBalance, minOriginSwap, deadline);

    // 5 - convert usdc to RNBW using sushiswap

    uint256 rnbwAmount =  _swap(usdc, rnbw, IERC20(usdc).balanceOf(address(this)), rainbowPool); // returns RNBWOut after converting
    require(rnbwAmount >= minRNBWAmount, "PotOfGold: rnbwAmount is less than minRNBWAmount");
    
    emit LogConvert(
      msg.sender,
      usdc,
      token,
      usdcTokenBalanceBeforeSwap,
      nonUsdcTokenBalance,
      rnbwAmount
    );
  }

  function _swap(
    address fromToken,
    address toToken,
    uint256 amountIn,
    address to
  ) internal returns (uint256 amountOut) {
    IUniswapV2Pair pair = IUniswapV2Pair(factory.getPair(fromToken, toToken));

    require(address(pair) != address(0), 'PotOfGold: Cannot convert');
    (uint256 reserve0, uint256 reserve1, ) = pair.getReserves();
    uint256 amountInWithFee = amountIn.mul(997);

    if (fromToken == pair.token0()) {
      amountOut = amountInWithFee.mul(reserve1).div(
        reserve0.mul(1000).add(amountInWithFee)
      );

      IERC20(fromToken).safeTransfer(address(pair), amountIn);
      pair.swap(0, amountOut, to, new bytes(0));
    } else {
      amountOut = amountInWithFee.mul(reserve0).div(
        reserve1.mul(1000).add(amountInWithFee)
      );

      IERC20(fromToken).safeTransfer(address(pair), amountIn);
      pair.swap(amountOut, 0, to, new bytes(0));
    }
  }

}
