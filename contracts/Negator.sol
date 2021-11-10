pragma solidity ^0.6.12;

import 'hardhat/console.sol';

contract Negator {
  event Negated(int128 outputAmt);
  event SameType(bool isSameType);

  function negates() external returns (int128 outputAmt) {
    outputAmt = 1;
    emit Negated(outputAmt);
  }

  function check1e18IsUint256() external returns (bool isSameType) {
    uint256 etherUnit = 0;
    etherUnit = 1e18;
    if (etherUnit == 1e18) {
      isSameType = true;
    } else {
      isSameType = false;
    }

    emit SameType(isSameType);
  }
}
