// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

contract MockOracle {
  uint80 roundId;
  int256 answer;
  uint256 startedAt;
  uint256 updatedAt;
  uint80 answeredInRound;

  constructor(
    uint80 _roundId,
    int256 _answer,
    uint256 _startedAt,
    uint256 _updatedAt,
    uint80 _answeredInRound
  ) public {
    roundId = _roundId;
    answer = _answer;
    startedAt = _startedAt;
    updatedAt = _updatedAt;
    answeredInRound = _answeredInRound;
  }

  function latestAnswer() external view returns (int256) {
    return answer;
  }

  // check pure
  function latestRoundData()
    external
    view
    returns (
      uint80 roundId_,
      int256 answer_,
      uint256 startedAt_,
      uint256 updatedAt_,
      uint80 answeredInRound_
    )
  {
    return (roundId, answer, startedAt, updatedAt, answeredInRound);
  }
}
