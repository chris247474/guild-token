/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface RewardsManagerInterface extends ethers.utils.Interface {
  functions: {
    "BASIS_POINTS()": FunctionFragment;
    "getHaloHaloContract()": FunctionFragment;
    "getRewardsContract()": FunctionFragment;
    "getVestingRatio()": FunctionFragment;
    "halo()": FunctionFragment;
    "owner()": FunctionFragment;
    "releaseEpochRewards(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setHaloHaloContract(address)": FunctionFragment;
    "setRewardsContract(address)": FunctionFragment;
    "setVestingRatio(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BASIS_POINTS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getHaloHaloContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardsContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVestingRatio",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "halo", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "releaseEpochRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setHaloHaloContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardsContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setVestingRatio",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "BASIS_POINTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getHaloHaloContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardsContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVestingRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "halo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releaseEpochRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setHaloHaloContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardsContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVestingRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "ReleasedRewardsToRewardsContractEvent(uint256)": EventFragment;
    "SentVestedRewardsEvent(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ReleasedRewardsToRewardsContractEvent"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SentVestedRewardsEvent"): EventFragment;
}

export class RewardsManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: RewardsManagerInterface;

  functions: {
    BASIS_POINTS(overrides?: CallOverrides): Promise<[BigNumber]>;

    "BASIS_POINTS()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getHaloHaloContract(overrides?: CallOverrides): Promise<[string]>;

    "getHaloHaloContract()"(overrides?: CallOverrides): Promise<[string]>;

    getRewardsContract(overrides?: CallOverrides): Promise<[string]>;

    "getRewardsContract()"(overrides?: CallOverrides): Promise<[string]>;

    getVestingRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getVestingRatio()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    halo(overrides?: CallOverrides): Promise<[string]>;

    "halo()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    releaseEpochRewards(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "releaseEpochRewards(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setHaloHaloContract(
      _haloHaloContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setHaloHaloContract(address)"(
      _haloHaloContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRewardsContract(
      _rewardsContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setRewardsContract(address)"(
      _rewardsContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVestingRatio(
      _newVestingRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setVestingRatio(uint256)"(
      _newVestingRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;

  "BASIS_POINTS()"(overrides?: CallOverrides): Promise<BigNumber>;

  getHaloHaloContract(overrides?: CallOverrides): Promise<string>;

  "getHaloHaloContract()"(overrides?: CallOverrides): Promise<string>;

  getRewardsContract(overrides?: CallOverrides): Promise<string>;

  "getRewardsContract()"(overrides?: CallOverrides): Promise<string>;

  getVestingRatio(overrides?: CallOverrides): Promise<BigNumber>;

  "getVestingRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

  halo(overrides?: CallOverrides): Promise<string>;

  "halo()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  releaseEpochRewards(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "releaseEpochRewards(uint256)"(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setHaloHaloContract(
    _haloHaloContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setHaloHaloContract(address)"(
    _haloHaloContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRewardsContract(
    _rewardsContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setRewardsContract(address)"(
    _rewardsContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVestingRatio(
    _newVestingRatio: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setVestingRatio(uint256)"(
    _newVestingRatio: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;

    "BASIS_POINTS()"(overrides?: CallOverrides): Promise<BigNumber>;

    getHaloHaloContract(overrides?: CallOverrides): Promise<string>;

    "getHaloHaloContract()"(overrides?: CallOverrides): Promise<string>;

    getRewardsContract(overrides?: CallOverrides): Promise<string>;

    "getRewardsContract()"(overrides?: CallOverrides): Promise<string>;

    getVestingRatio(overrides?: CallOverrides): Promise<BigNumber>;

    "getVestingRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

    halo(overrides?: CallOverrides): Promise<string>;

    "halo()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    releaseEpochRewards(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "releaseEpochRewards(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setHaloHaloContract(
      _haloHaloContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setHaloHaloContract(address)"(
      _haloHaloContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRewardsContract(
      _rewardsContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRewardsContract(address)"(
      _rewardsContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setVestingRatio(
      _newVestingRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setVestingRatio(uint256)"(
      _newVestingRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    ReleasedRewardsToRewardsContractEvent(
      currentReleasedRewards: null
    ): TypedEventFilter<[BigNumber], { currentReleasedRewards: BigNumber }>;

    SentVestedRewardsEvent(
      currentVestedRewards: null
    ): TypedEventFilter<[BigNumber], { currentVestedRewards: BigNumber }>;
  };

  estimateGas: {
    BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;

    "BASIS_POINTS()"(overrides?: CallOverrides): Promise<BigNumber>;

    getHaloHaloContract(overrides?: CallOverrides): Promise<BigNumber>;

    "getHaloHaloContract()"(overrides?: CallOverrides): Promise<BigNumber>;

    getRewardsContract(overrides?: CallOverrides): Promise<BigNumber>;

    "getRewardsContract()"(overrides?: CallOverrides): Promise<BigNumber>;

    getVestingRatio(overrides?: CallOverrides): Promise<BigNumber>;

    "getVestingRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

    halo(overrides?: CallOverrides): Promise<BigNumber>;

    "halo()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    releaseEpochRewards(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "releaseEpochRewards(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setHaloHaloContract(
      _haloHaloContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setHaloHaloContract(address)"(
      _haloHaloContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRewardsContract(
      _rewardsContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setRewardsContract(address)"(
      _rewardsContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVestingRatio(
      _newVestingRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setVestingRatio(uint256)"(
      _newVestingRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BASIS_POINTS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "BASIS_POINTS()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getHaloHaloContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getHaloHaloContract()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardsContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRewardsContract()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVestingRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getVestingRatio()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    halo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "halo()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    releaseEpochRewards(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "releaseEpochRewards(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setHaloHaloContract(
      _haloHaloContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setHaloHaloContract(address)"(
      _haloHaloContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRewardsContract(
      _rewardsContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setRewardsContract(address)"(
      _rewardsContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVestingRatio(
      _newVestingRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setVestingRatio(uint256)"(
      _newVestingRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
