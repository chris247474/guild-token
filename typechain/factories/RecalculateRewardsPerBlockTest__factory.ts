/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { RecalculateRewardsPerBlockTest } from "../RecalculateRewardsPerBlockTest";

export class RecalculateRewardsPerBlockTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RecalculateRewardsPerBlockTest> {
    return super.deploy(
      overrides || {}
    ) as Promise<RecalculateRewardsPerBlockTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RecalculateRewardsPerBlockTest {
    return super.attach(address) as RecalculateRewardsPerBlockTest;
  }
  connect(signer: Signer): RecalculateRewardsPerBlockTest__factory {
    return super.connect(signer) as RecalculateRewardsPerBlockTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RecalculateRewardsPerBlockTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RecalculateRewardsPerBlockTest;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_epochRewardAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_blocksPerMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_epochLengthInDays",
        type: "uint256",
      },
    ],
    name: "recalculateRewardPerBlockTest",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_epochRewardAmount",
        type: "uint256",
      },
    ],
    name: "recalculateRewardUsingEpochRewardAmountTest",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061055e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063645a0bd61461003b578063c3c8c6651461006b575b600080fd5b610055600480360381019061005091906102b1565b61009b565b60405161006291906104db565b60405180910390f35b61008560048036038101906100809190610288565b6100b1565b60405161009291906104db565b60405180910390f35b60006100a88484846100c3565b90509392505050565b60006100bc82610192565b9050919050565b6000808311610107576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100fe9061049b565b60405180910390fd5b6000821161014a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610141906104bb565b60405180910390fd5b60006101856101766105a061016886886101ad90919063ffffffff16565b6101ad90919063ffffffff16565b8661021d90919063ffffffff16565b9050809150509392505050565b6000806101a2836005601e6100c3565b905080915050919050565b6000808314156101c05760009050610217565b60008284029050828482816101d157fe5b0414610212576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102099061047b565b60405180910390fd5b809150505b92915050565b6000808211610261576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102589061045b565b60405180910390fd5b81838161026a57fe5b04905092915050565b60008135905061028281610511565b92915050565b60006020828403121561029a57600080fd5b60006102a884828501610273565b91505092915050565b6000806000606084860312156102c657600080fd5b60006102d486828701610273565b93505060206102e586828701610273565b92505060406102f686828701610273565b9150509250925092565b600061030d601a836104f6565b91507f536166654d6174683a206469766973696f6e206279207a65726f0000000000006000830152602082019050919050565b600061034d6021836104f6565b91507f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60008301527f77000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006103b3601c836104f6565b91507f626c6f636b735065724d696e2063616e206e6f74206265207a65726f000000006000830152602082019050919050565b60006103f36021836104f6565b91507f65706f63684c656e677468496e446179732063616e206e6f74206265207a657260008301527f6f000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b61045581610507565b82525050565b6000602082019050818103600083015261047481610300565b9050919050565b6000602082019050818103600083015261049481610340565b9050919050565b600060208201905081810360008301526104b4816103a6565b9050919050565b600060208201905081810360008301526104d4816103e6565b9050919050565b60006020820190506104f0600083018461044c565b92915050565b600082825260208201905092915050565b6000819050919050565b61051a81610507565b811461052557600080fd5b5056fea2646970667358221220e3a30f3b2664e880aaecb410d497e6c51a31318d490b3c66925324292d8836be64736f6c634300060c0033";
