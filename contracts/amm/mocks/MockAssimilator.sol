// SPDX-License-Identifier: MIT

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

pragma solidity ^0.6.12;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/math/SafeMath.sol';

import '../lib/ABDKMath64x64.sol';
import '../interfaces/IAssimilator.sol';
import '../interfaces/IOracle.sol';

contract MockAssimilator is IAssimilator {
  using ABDKMath64x64 for int128;
  using ABDKMath64x64 for uint256;

  using SafeMath for uint256;

  IOracle private immutable oracle;
  IERC20 private immutable token0;
  IERC20 private immutable token1;

  /**
   * token0 - usdc (base)
   * token1 - any other coin (quote)
   */
  constructor(
    address _oracle,
    address _token0,
    address _token1
  ) public {
    oracle = IOracle(_oracle);
    token0 = IERC20(_token0);
    token1 = IERC20(_token1);
  }

  function getRate() public view override returns (uint256) {
    (, int256 price, , , ) = oracle.latestRoundData();
    return uint256(price);
  }

  // takes raw token1 amount, transfers it in, calculates corresponding numeraire amount and returns it
  function intakeRawAndGetBalance(uint256 _amount)
    external
    override
    returns (int128 amount_, int128 balance_)
  {
    bool _transferSuccess = token1.transferFrom(
      msg.sender,
      address(this),
      _amount
    );

    require(_transferSuccess, 'Curve/token1-transfer-from-failed');

    uint256 _balance = token1.balanceOf(address(this));

    uint256 _rate = getRate();

    balance_ = ((_balance * _rate) / 1e8).divu(1e18);

    amount_ = ((_amount * _rate) / 1e8).divu(1e18);
  }

  // takes raw token1 amount, transfers it in, calculates corresponding numeraire amount and returns it
  function intakeRaw(uint256 _amount)
    external
    override
    returns (int128 amount_)
  {
    bool _transferSuccess = token1.transferFrom(
      msg.sender,
      address(this),
      _amount
    );

    require(_transferSuccess, 'Curve/token1-transfer-from-failed');

    uint256 _rate = getRate();

    amount_ = ((_amount * _rate) / 1e8).divu(1e18);
  }

  // takes a numeraire amount, calculates the raw amount of token1, transfers it in and returns the corresponding raw amount
  function intakeNumeraire(int128 _amount)
    external
    override
    returns (uint256 amount_)
  {
    uint256 _rate = getRate();

    amount_ = (_amount.mulu(1e18) * 1e8) / _rate;

    bool _transferSuccess = token1.transferFrom(
      msg.sender,
      address(this),
      amount_
    );

    require(_transferSuccess, 'Curve/token1-transfer-from-failed');
  }

  // takes a numeraire account, calculates the raw amount of token1, transfers it in and returns the corresponding raw amount
  function intakeNumeraireLPRatio(
    uint256 _baseWeight,
    uint256 _quoteWeight,
    address _addr,
    int128 _amount
  ) external override returns (uint256 amount_) {
    uint256 _token1Bal = token1.balanceOf(_addr);

    if (_token1Bal <= 0) return 0;

    // _token1Bal = _token1Bal.mul(1e18).div(_baseWeight);

    uint256 _token0Bal = token0.balanceOf(_addr).mul(1e18).div(_quoteWeight);

    // Rate is in 1e6
    uint256 _rate = _token0Bal.mul(1e18).div(_token1Bal);

    amount_ = (_amount.mulu(1e18) * 1e6) / _rate;

    bool _transferSuccess = token1.transferFrom(
      msg.sender,
      address(this),
      amount_
    );

    require(_transferSuccess, 'Curve/token1-transfer-from-failed');
  }

  // takes a raw amount of token1 and transfers it out, returns numeraire value of the raw amount
  function outputRawAndGetBalance(address _dst, uint256 _amount)
    external
    override
    returns (int128 amount_, int128 balance_)
  {
    uint256 _rate = getRate();

    uint256 _token1Amount = ((_amount) * _rate) / 1e8;

    bool _transferSuccess = token1.transfer(_dst, _token1Amount);

    require(_transferSuccess, 'Curve/token1-transfer-failed');

    uint256 _balance = token1.balanceOf(address(this));

    amount_ = _token1Amount.divu(1e18);

    balance_ = ((_balance * _rate) / 1e8).divu(1e18);
  }

  // takes a raw amount of token1 and transfers it out, returns numeraire value of the raw amount
  function outputRaw(address _dst, uint256 _amount)
    external
    override
    returns (int128 amount_)
  {
    uint256 _rate = getRate();

    uint256 _token1Amount = (_amount * _rate) / 1e8;

    bool _transferSuccess = token1.transfer(_dst, _token1Amount);

    require(_transferSuccess, 'Curve/token1-transfer-failed');

    amount_ = _token1Amount.divu(1e18);
  }

  // takes a numeraire value of token1, figures out the raw amount, transfers raw amount out, and returns raw amount
  function outputNumeraire(address _dst, int128 _amount)
    external
    override
    returns (uint256 amount_)
  {
    uint256 _rate = getRate();

    amount_ = (_amount.mulu(1e18) * 1e8) / _rate;

    bool _transferSuccess = token1.transfer(_dst, amount_);

    require(_transferSuccess, 'Curve/token1-transfer-failed');
  }

  // takes a numeraire amount and returns the raw amount
  function viewRawAmount(int128 _amount)
    external
    view
    override
    returns (uint256 amount_)
  {
    uint256 _rate = getRate();

    amount_ = (_amount.mulu(1e18) * 1e8) / _rate;
  }

  // takes a numeraire amount and returns the raw amount without the rate
  function viewRawAmountLPRatio(
    uint256 _baseWeight,
    uint256 _quoteWeight,
    address _addr,
    int128 _amount
  ) external view override returns (uint256 amount_) {
    uint256 _token1Bal = token1.balanceOf(_addr);

    if (_token1Bal <= 0) return 0;

    // _token1Bal = _token1Bal.mul(1e18).div(_baseWeight);

    uint256 _token0Bal = token0.balanceOf(_addr).mul(1e18).div(_quoteWeight);

    // Rate is in 1e6
    uint256 _rate = _token0Bal.mul(1e18).div(
      _token1Bal.mul(1e18).div(_baseWeight)
    );

    amount_ = (_amount.mulu(1e18) * 1e6) / _rate;
  }

  // takes a raw amount and returns the numeraire amount
  function viewNumeraireAmount(uint256 _amount)
    external
    view
    override
    returns (int128 amount_)
  {
    uint256 _rate = getRate();

    amount_ = ((_amount * _rate) / 1e8).divu(1e18);
  }

  // views the numeraire value of the current balance of the reserve, in this case token1
  function viewNumeraireBalance(address _addr)
    external
    view
    override
    returns (int128 balance_)
  {
    uint256 _rate = getRate();

    uint256 _balance = token1.balanceOf(_addr);

    if (_balance <= 0) return ABDKMath64x64.fromUInt(0);

    balance_ = ((_balance * _rate) / 1e8).divu(1e18);
  }

  // views the numeraire value of the current balance of the reserve, in this case token1
  function viewNumeraireAmountAndBalance(address _addr, uint256 _amount)
    external
    view
    override
    returns (int128 amount_, int128 balance_)
  {
    uint256 _rate = getRate();

    amount_ = ((_amount * _rate) / 1e8).divu(1e18);

    uint256 _balance = token1.balanceOf(_addr);

    balance_ = ((_balance * _rate) / 1e8).divu(1e18);
  }

  // views the numeraire value of the current balance of the reserve, in this case token1
  // instead of calculating with chainlink's "rate" it'll be determined by the existing
  // token ratio. This is in here to prevent LPs from losing out on future oracle price updates
  function viewNumeraireBalanceLPRatio(
    uint256 _baseWeight,
    uint256 _quoteWeight,
    address _addr
  ) external view override returns (int128 balance_) {
    uint256 _token1Bal = token1.balanceOf(_addr);

    if (_token1Bal <= 0) return ABDKMath64x64.fromUInt(0);

    uint256 _token0Bal = token0.balanceOf(_addr).mul(1e18).div(_quoteWeight);

    // Rate is in 1e6
    uint256 _rate = _token0Bal.mul(1e18).div(
      _token1Bal.mul(1e18).div(_baseWeight)
    );

    balance_ = ((_token1Bal * _rate) / 1e6).divu(1e18);
  }
}
