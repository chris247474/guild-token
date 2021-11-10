/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MockUsdUsdcAssimilator } from "../MockUsdUsdcAssimilator";

export class MockUsdUsdcAssimilator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _oracle: string,
    _usdc: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockUsdUsdcAssimilator> {
    return super.deploy(
      _oracle,
      _usdc,
      overrides || {}
    ) as Promise<MockUsdUsdcAssimilator>;
  }
  getDeployTransaction(
    _oracle: string,
    _usdc: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_oracle, _usdc, overrides || {});
  }
  attach(address: string): MockUsdUsdcAssimilator {
    return super.attach(address) as MockUsdUsdcAssimilator;
  }
  connect(signer: Signer): MockUsdUsdcAssimilator__factory {
    return super.connect(signer) as MockUsdUsdcAssimilator__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockUsdUsdcAssimilator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockUsdUsdcAssimilator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_usdc",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getRate",
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
        internalType: "int128",
        name: "_amount",
        type: "int128",
      },
    ],
    name: "intakeNumeraire",
    outputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "int128",
        name: "_amount",
        type: "int128",
      },
    ],
    name: "intakeNumeraireLPRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "intakeRaw",
    outputs: [
      {
        internalType: "int128",
        name: "amount_",
        type: "int128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "intakeRawAndGetBalance",
    outputs: [
      {
        internalType: "int128",
        name: "amount_",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "balance_",
        type: "int128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dst",
        type: "address",
      },
      {
        internalType: "int128",
        name: "_amount",
        type: "int128",
      },
    ],
    name: "outputNumeraire",
    outputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "outputRaw",
    outputs: [
      {
        internalType: "int128",
        name: "amount_",
        type: "int128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "outputRawAndGetBalance",
    outputs: [
      {
        internalType: "int128",
        name: "amount_",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "balance_",
        type: "int128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "viewNumeraireAmount",
    outputs: [
      {
        internalType: "int128",
        name: "amount_",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "viewNumeraireAmountAndBalance",
    outputs: [
      {
        internalType: "int128",
        name: "amount_",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "balance_",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "viewNumeraireBalance",
    outputs: [
      {
        internalType: "int128",
        name: "balance_",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "viewNumeraireBalanceLPRatio",
    outputs: [
      {
        internalType: "int128",
        name: "balance_",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "_amount",
        type: "int128",
      },
    ],
    name: "viewRawAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amount_",
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
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "int128",
        name: "_amount",
        type: "int128",
      },
    ],
    name: "viewRawAmountLPRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051611b6e380380611b6e8339818101604052604081101561003357600080fd5b8101908080519060200190929190805190602001909291905050508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b81525050505060805160601c60a05160601c611a5061011e60003980610634528061079d52806108b952806109d25280610b155280610d415280610e8f5280610ff05280611125528061125252806113dd528061157c525080610c255250611a506000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636fc390521161008c578063df4efe4911610066578063df4efe491461046c578063f09a3fc3146104e5578063f5e6c0ca1461054a578063fa00102a1461058f576100ea565b80636fc390521461035d5780637f328ecc146103c2578063ac969a7314610411576100ea565b80631e9b2cba116100c85780631e9b2cba1461021c578063523bf2571461028b578063679aefce146102fa5780636b677a8f14610318576100ea565b8063011847a0146100ef5780630271c3c81461016857806305cf7bb4146101ad575b600080fd5b6101526004803603608081101561010557600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600f0b90602001909291905050506105d4565b6040518082815260200191505060405180910390f35b6101976004803603602081101561017e57600080fd5b810190808035600f0b90602001909291905050506105f9565b6040518082815260200191505060405180910390f35b610203600480360360608110156101c357600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610798565b6040518082600f0b815260200191505060405180910390f35b6102686004803603604081101561023257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061087f565b6040518083600f0b815260200182600f0b81526020019250505060405180910390f35b6102d7600480360360408110156102a157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506109ab565b6040518083600f0b815260200182600f0b81526020019250505060405180910390f35b610302610c21565b6040518082815260200191505060405180910390f35b6103476004803603602081101561032e57600080fd5b810190808035600f0b9060200190929190505050610cc9565b6040518082815260200191505060405180910390f35b6103ac6004803603604081101561037357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600f0b9060200190929190505050610d06565b6040518082815260200191505060405180910390f35b6103ee600480360360208110156103d857600080fd5b8101908080359060200190929190505050610e88565b6040518083600f0b815260200182600f0b81526020019250505060405180910390f35b6104536004803603602081101561042757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611114565b6040518082600f0b815260200191505060405180910390f35b6104cf6004803603608081101561048257600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600f0b9060200190929190505050611231565b6040518082815260200191505060405180910390f35b610531600480360360408110156104fb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506113b8565b6040518082600f0b815260200191505060405180910390f35b6105766004803603602081101561056057600080fd5b810190808035906020019092919050505061153d565b6040518082600f0b815260200191505060405180910390f35b6105bb600480360360208110156105a557600080fd5b8101908080359060200190929190505050611577565b6040518082600f0b815260200191505060405180910390f35b60006105ef620f424083600f0b61171390919063ffffffff16565b9050949350505050565b600080610604610c21565b9050806305f5e100610625620f424086600f0b61171390919063ffffffff16565b028161062d57fe5b04915060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156106e157600080fd5b505af11580156106f5573d6000803e3d6000fd5b505050506040513d602081101561070b57600080fd5b8101908080519060200190929190505050905080610791576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f43757276652f555344432d7472616e736665722d66726f6d2d6661696c65640081525060200191505060405180910390fd5b5050919050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561082257600080fd5b505afa158015610836573d6000803e3d6000fd5b505050506040513d602081101561084c57600080fd5b81019080805190602001909291905050509050610875620f4240826117ce90919063ffffffff16565b9150509392505050565b600080600061088c610c21565b90506108b3620f42406305f5e100838702816108a457fe5b046117ce90919063ffffffff16565b925060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561093e57600080fd5b505afa158015610952573d6000803e3d6000fd5b505050506040513d602081101561096857600080fd5b810190808051906020019092919050505090506109a0620f42406305f5e1008484028161099157fe5b046117ce90919063ffffffff16565b925050509250929050565b60008060006109b8610c21565b905060006305f5e100828602816109cb57fe5b04905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb88846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610a6157600080fd5b505af1158015610a75573d6000803e3d6000fd5b505050506040513d6020811015610a8b57600080fd5b8101908080519060200190929190505050905080610b11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f43757276652f555344432d7472616e736665722d6661696c656400000000000081525060200191505060405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610b9a57600080fd5b505afa158015610bae573d6000803e3d6000fd5b505050506040513d6020811015610bc457600080fd5b81019080805190602001909291905050509050610bed620f4240846117ce90919063ffffffff16565b9550610c14620f42406305f5e10086840281610c0557fe5b046117ce90919063ffffffff16565b9450505050509250929050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610c8957600080fd5b505afa158015610c9d573d6000803e3d6000fd5b505050506040513d6020811015610cb357600080fd5b8101908080519060200190929190505050905090565b600080610cd4610c21565b9050806305f5e100610cf5620f424086600f0b61171390919063ffffffff16565b0281610cfd57fe5b04915050919050565b600080610d11610c21565b9050806305f5e100610d32620f424086600f0b61171390919063ffffffff16565b0281610d3a57fe5b04915060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb86856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610dd057600080fd5b505af1158015610de4573d6000803e3d6000fd5b505050506040513d6020811015610dfa57600080fd5b8101908080519060200190929190505050905080610e80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f43757276652f555344432d7472616e736665722d6661696c656400000000000081525060200191505060405180910390fd5b505092915050565b60008060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015610f3c57600080fd5b505af1158015610f50573d6000803e3d6000fd5b505050506040513d6020811015610f6657600080fd5b8101908080519060200190929190505050905080610fec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f43757276652f555344432d7472616e736665722d66726f6d2d6661696c65640081525060200191505060405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561107557600080fd5b505afa158015611089573d6000803e3d6000fd5b505050506040513d602081101561109f57600080fd5b8101908080519060200190929190505050905060006110bc610c21565b90506110e3620f42406305f5e100838502816110d457fe5b046117ce90919063ffffffff16565b935061110a620f42406305f5e100838902816110fb57fe5b046117ce90919063ffffffff16565b9450505050915091565b60008061111f610c21565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156111aa57600080fd5b505afa1580156111be573d6000803e3d6000fd5b505050506040513d60208110156111d457600080fd5b8101908080519060200190929190505050905060008111611202576111f96000611836565b9250505061122c565b611227620f42406305f5e1008484028161121857fe5b046117ce90919063ffffffff16565b925050505b919050565b600061124c620f424083600f0b61171390919063ffffffff16565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156112ff57600080fd5b505af1158015611313573d6000803e3d6000fd5b505050506040513d602081101561132957600080fd5b81019080805190602001909291905050509050806113af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f43757276652f555344432d7472616e736665722d66726f6d2d6661696c65640081525060200191505060405180910390fd5b50949350505050565b6000806113c3610c21565b905060006305f5e100828502816113d657fe5b04905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb87846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561146c57600080fd5b505af1158015611480573d6000803e3d6000fd5b505050506040513d602081101561149657600080fd5b810190808051906020019092919050505090508061151c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f43757276652f555344432d7472616e736665722d6661696c656400000000000081525060200191505060405180910390fd5b611532620f4240836117ce90919063ffffffff16565b935050505092915050565b600080611548610c21565b905061156f620f42406305f5e1008386028161156057fe5b046117ce90919063ffffffff16565b915050919050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561162957600080fd5b505af115801561163d573d6000803e3d6000fd5b505050506040513d602081101561165357600080fd5b81019080805190602001909291905050509050806116d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f43757276652f555344432d7472616e736665722d66726f6d2d6661696c65640081525060200191505060405180910390fd5b60006116e3610c21565b905061170a620f42406305f5e100838702816116fb57fe5b046117ce90919063ffffffff16565b92505050919050565b60008082141561172657600090506117c8565b600083600f0b121561173757600080fd5b600060406fffffffffffffffffffffffffffffffff841685600f0b02901c90506000608084901c85600f0b02905077ffffffffffffffffffffffffffffffffffffffffffffffff81111561178a57600080fd5b604081901b9050817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038111156117c057600080fd5b818101925050505b92915050565b6000808214156117dd57600080fd5b60006117e98484611859565b90506f7fffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffff16816fffffffffffffffffffffffffffffffff16111561182c57600080fd5b8091505092915050565b6000677fffffffffffffff82111561184d57600080fd5b604082901b9050919050565b60008082141561186857600080fd5b600077ffffffffffffffffffffffffffffffffffffffffffffffff841161189e5782604085901b8161189657fe5b0490506119f3565b600060c09050600060c086901c905064010000000081106118c757602081901c90506020820191505b6201000081106118df57601081901c90506010820191505b61010081106118f657600881901c90506008820191505b6010811061190c57600481901c90506004820191505b6004811061192257600281901c90506002820191505b60028110611931576001820191505b600160bf830360018703901c018260ff0387901b8161194c57fe5b0492506fffffffffffffffffffffffffffffffff83111561196c57600080fd5b6000608086901c8402905060006fffffffffffffffffffffffffffffffff871685029050600060c089901c9050600060408a901b9050828110156119b1576001820391505b8281039050608084901b9250828110156119cc576001820391505b8281039050608084901c82146119de57fe5b8881816119e757fe5b04870196505050505050505b6fffffffffffffffffffffffffffffffff811115611a1057600080fd5b809150509291505056fea26469706673582212208791970ef82ab07bf8070f8cf6300a7cdef7e8767fdd7811d84b0f7caaecdd9864736f6c634300060c0033";
