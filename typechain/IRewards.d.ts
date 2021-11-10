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

interface IRewardsInterface extends ethers.utils.Interface {
  functions: {
    "addAmmLp(address,uint256)": FunctionFragment;
    "addMinterCollateralType(address,uint256)": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "depositEpochRewardAmount(uint256)": FunctionFragment;
    "depositMinter(address,address,uint256)": FunctionFragment;
    "getPendingPoolRewardsByUserByPool(address,address)": FunctionFragment;
    "getTotalMinterLpAllocationPoints()": FunctionFragment;
    "getTotalPoolAllocationPoints()": FunctionFragment;
    "getUnclaimedMinterLpRewardsByUser(address,address)": FunctionFragment;
    "isValidAmmLp(address)": FunctionFragment;
    "isValidMinterLp(address)": FunctionFragment;
    "removeLp(address)": FunctionFragment;
    "removeMinterCollateralType(address)": FunctionFragment;
    "setAmmLpAllocationPoints(address,uint256)": FunctionFragment;
    "setMinter(address)": FunctionFragment;
    "setMinterLpAllocationPoints(address,uint256)": FunctionFragment;
    "updateAmmRewardPool(address)": FunctionFragment;
    "updateMinterRewardPool(address)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
    "withdrawMinter(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addAmmLp",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addMinterCollateralType",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositEpochRewardAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositMinter",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingPoolRewardsByUserByPool",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalMinterLpAllocationPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalPoolAllocationPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUnclaimedMinterLpRewardsByUser",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidAmmLp",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidMinterLp",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "removeLp", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeMinterCollateralType",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAmmLpAllocationPoints",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setMinter", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setMinterLpAllocationPoints",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAmmRewardPool",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMinterRewardPool",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawMinter",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addAmmLp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addMinterCollateralType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositEpochRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositMinter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingPoolRewardsByUserByPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalMinterLpAllocationPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalPoolAllocationPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnclaimedMinterLpRewardsByUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidAmmLp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidMinterLp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "removeLp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeMinterCollateralType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAmmLpAllocationPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setMinter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMinterLpAllocationPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAmmRewardPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMinterRewardPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawMinter",
    data: BytesLike
  ): Result;

  events: {};
}

export class IRewards extends Contract {
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

  interface: IRewardsInterface;

  functions: {
    addAmmLp(
      _lpAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addAmmLp(address,uint256)"(
      _lpAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addMinterCollateralType(
      _collateralAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addMinterCollateralType(address,uint256)"(
      _collateralAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      _lpAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "deposit(address,uint256)"(
      _lpAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositEpochRewardAmount(
      _epochRewardAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "depositEpochRewardAmount(uint256)"(
      _epochRewardAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositMinter(
      _collateralAddress: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "depositMinter(address,address,uint256)"(
      _collateralAddress: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPendingPoolRewardsByUserByPool(
      _lpAddress: string,
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getPendingPoolRewardsByUserByPool(address,address)"(
      _lpAddress: string,
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalMinterLpAllocationPoints(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getTotalMinterLpAllocationPoints()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalPoolAllocationPoints(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getTotalPoolAllocationPoints()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUnclaimedMinterLpRewardsByUser(
      _collateralAddress: string,
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getUnclaimedMinterLpRewardsByUser(address,address)"(
      _collateralAddress: string,
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isValidAmmLp(
      _lpAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isValidAmmLp(address)"(
      _lpAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isValidMinterLp(
      _collateralAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isValidMinterLp(address)"(
      _collateralAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removeLp(
      _lpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeLp(address)"(
      _lpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeMinterCollateralType(
      _collateralAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeMinterCollateralType(address)"(
      _collateralAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAmmLpAllocationPoints(
      _lpAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setAmmLpAllocationPoints(address,uint256)"(
      _lpAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinter(
      _minter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setMinter(address)"(
      _minter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinterLpAllocationPoints(
      _collateralAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setMinterLpAllocationPoints(address,uint256)"(
      _collateralAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateAmmRewardPool(
      _lpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateAmmRewardPool(address)"(
      _lpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateMinterRewardPool(
      _collateralAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateMinterRewardPool(address)"(
      _collateralAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _lpAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdraw(address,uint256)"(
      _lpAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawMinter(
      _collateralAddress: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdrawMinter(address,address,uint256)"(
      _collateralAddress: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addAmmLp(
    _lpAddress: string,
    _allocPoint: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addAmmLp(address,uint256)"(
    _lpAddress: string,
    _allocPoint: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addMinterCollateralType(
    _collateralAddress: string,
    _allocPoint: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addMinterCollateralType(address,uint256)"(
    _collateralAddress: string,
    _allocPoint: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    _lpAddress: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "deposit(address,uint256)"(
    _lpAddress: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositEpochRewardAmount(
    _epochRewardAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "depositEpochRewardAmount(uint256)"(
    _epochRewardAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositMinter(
    _collateralAddress: string,
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "depositMinter(address,address,uint256)"(
    _collateralAddress: string,
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPendingPoolRewardsByUserByPool(
    _lpAddress: string,
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getPendingPoolRewardsByUserByPool(address,address)"(
    _lpAddress: string,
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalMinterLpAllocationPoints(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getTotalMinterLpAllocationPoints()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalPoolAllocationPoints(overrides?: CallOverrides): Promise<BigNumber>;

  "getTotalPoolAllocationPoints()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUnclaimedMinterLpRewardsByUser(
    _collateralAddress: string,
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getUnclaimedMinterLpRewardsByUser(address,address)"(
    _collateralAddress: string,
    _account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isValidAmmLp(_lpAddress: string, overrides?: CallOverrides): Promise<boolean>;

  "isValidAmmLp(address)"(
    _lpAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isValidMinterLp(
    _collateralAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isValidMinterLp(address)"(
    _collateralAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  removeLp(
    _lpAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeLp(address)"(
    _lpAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeMinterCollateralType(
    _collateralAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeMinterCollateralType(address)"(
    _collateralAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAmmLpAllocationPoints(
    _lpAddress: string,
    _allocPoint: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setAmmLpAllocationPoints(address,uint256)"(
    _lpAddress: string,
    _allocPoint: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinter(
    _minter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setMinter(address)"(
    _minter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinterLpAllocationPoints(
    _collateralAddress: string,
    _allocPoint: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setMinterLpAllocationPoints(address,uint256)"(
    _collateralAddress: string,
    _allocPoint: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateAmmRewardPool(
    _lpAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateAmmRewardPool(address)"(
    _lpAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateMinterRewardPool(
    _collateralAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateMinterRewardPool(address)"(
    _collateralAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _lpAddress: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdraw(address,uint256)"(
    _lpAddress: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawMinter(
    _collateralAddress: string,
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdrawMinter(address,address,uint256)"(
    _collateralAddress: string,
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addAmmLp(
      _lpAddress: string,
      _allocPoint: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addAmmLp(address,uint256)"(
      _lpAddress: string,
      _allocPoint: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addMinterCollateralType(
      _collateralAddress: string,
      _allocPoint: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addMinterCollateralType(address,uint256)"(
      _collateralAddress: string,
      _allocPoint: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      _lpAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "deposit(address,uint256)"(
      _lpAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositEpochRewardAmount(
      _epochRewardAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "depositEpochRewardAmount(uint256)"(
      _epochRewardAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositMinter(
      _collateralAddress: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "depositMinter(address,address,uint256)"(
      _collateralAddress: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getPendingPoolRewardsByUserByPool(
      _lpAddress: string,
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPendingPoolRewardsByUserByPool(address,address)"(
      _lpAddress: string,
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalMinterLpAllocationPoints(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTotalMinterLpAllocationPoints()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalPoolAllocationPoints(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalPoolAllocationPoints()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnclaimedMinterLpRewardsByUser(
      _collateralAddress: string,
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUnclaimedMinterLpRewardsByUser(address,address)"(
      _collateralAddress: string,
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidAmmLp(
      _lpAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isValidAmmLp(address)"(
      _lpAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isValidMinterLp(
      _collateralAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isValidMinterLp(address)"(
      _collateralAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeLp(_lpAddress: string, overrides?: CallOverrides): Promise<void>;

    "removeLp(address)"(
      _lpAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeMinterCollateralType(
      _collateralAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeMinterCollateralType(address)"(
      _collateralAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setAmmLpAllocationPoints(
      _lpAddress: string,
      _allocPoint: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAmmLpAllocationPoints(address,uint256)"(
      _lpAddress: string,
      _allocPoint: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinter(_minter: string, overrides?: CallOverrides): Promise<void>;

    "setMinter(address)"(
      _minter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinterLpAllocationPoints(
      _collateralAddress: string,
      _allocPoint: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMinterLpAllocationPoints(address,uint256)"(
      _collateralAddress: string,
      _allocPoint: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAmmRewardPool(
      _lpAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateAmmRewardPool(address)"(
      _lpAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateMinterRewardPool(
      _collateralAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateMinterRewardPool(address)"(
      _collateralAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      _lpAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(address,uint256)"(
      _lpAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawMinter(
      _collateralAddress: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawMinter(address,address,uint256)"(
      _collateralAddress: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addAmmLp(
      _lpAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addAmmLp(address,uint256)"(
      _lpAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addMinterCollateralType(
      _collateralAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addMinterCollateralType(address,uint256)"(
      _collateralAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      _lpAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "deposit(address,uint256)"(
      _lpAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositEpochRewardAmount(
      _epochRewardAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "depositEpochRewardAmount(uint256)"(
      _epochRewardAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositMinter(
      _collateralAddress: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "depositMinter(address,address,uint256)"(
      _collateralAddress: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPendingPoolRewardsByUserByPool(
      _lpAddress: string,
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPendingPoolRewardsByUserByPool(address,address)"(
      _lpAddress: string,
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalMinterLpAllocationPoints(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTotalMinterLpAllocationPoints()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalPoolAllocationPoints(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalPoolAllocationPoints()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnclaimedMinterLpRewardsByUser(
      _collateralAddress: string,
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUnclaimedMinterLpRewardsByUser(address,address)"(
      _collateralAddress: string,
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidAmmLp(
      _lpAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isValidAmmLp(address)"(
      _lpAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidMinterLp(
      _collateralAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isValidMinterLp(address)"(
      _collateralAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLp(
      _lpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeLp(address)"(
      _lpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeMinterCollateralType(
      _collateralAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeMinterCollateralType(address)"(
      _collateralAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAmmLpAllocationPoints(
      _lpAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setAmmLpAllocationPoints(address,uint256)"(
      _lpAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinter(
      _minter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setMinter(address)"(
      _minter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinterLpAllocationPoints(
      _collateralAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setMinterLpAllocationPoints(address,uint256)"(
      _collateralAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateAmmRewardPool(
      _lpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateAmmRewardPool(address)"(
      _lpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateMinterRewardPool(
      _collateralAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateMinterRewardPool(address)"(
      _collateralAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      _lpAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdraw(address,uint256)"(
      _lpAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawMinter(
      _collateralAddress: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdrawMinter(address,address,uint256)"(
      _collateralAddress: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAmmLp(
      _lpAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addAmmLp(address,uint256)"(
      _lpAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addMinterCollateralType(
      _collateralAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addMinterCollateralType(address,uint256)"(
      _collateralAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      _lpAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "deposit(address,uint256)"(
      _lpAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositEpochRewardAmount(
      _epochRewardAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "depositEpochRewardAmount(uint256)"(
      _epochRewardAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositMinter(
      _collateralAddress: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "depositMinter(address,address,uint256)"(
      _collateralAddress: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPendingPoolRewardsByUserByPool(
      _lpAddress: string,
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPendingPoolRewardsByUserByPool(address,address)"(
      _lpAddress: string,
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalMinterLpAllocationPoints(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTotalMinterLpAllocationPoints()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalPoolAllocationPoints(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTotalPoolAllocationPoints()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnclaimedMinterLpRewardsByUser(
      _collateralAddress: string,
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUnclaimedMinterLpRewardsByUser(address,address)"(
      _collateralAddress: string,
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidAmmLp(
      _lpAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isValidAmmLp(address)"(
      _lpAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidMinterLp(
      _collateralAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isValidMinterLp(address)"(
      _collateralAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeLp(
      _lpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeLp(address)"(
      _lpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeMinterCollateralType(
      _collateralAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeMinterCollateralType(address)"(
      _collateralAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAmmLpAllocationPoints(
      _lpAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setAmmLpAllocationPoints(address,uint256)"(
      _lpAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinter(
      _minter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setMinter(address)"(
      _minter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinterLpAllocationPoints(
      _collateralAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setMinterLpAllocationPoints(address,uint256)"(
      _collateralAddress: string,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateAmmRewardPool(
      _lpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateAmmRewardPool(address)"(
      _lpAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateMinterRewardPool(
      _collateralAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateMinterRewardPool(address)"(
      _collateralAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _lpAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw(address,uint256)"(
      _lpAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawMinter(
      _collateralAddress: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawMinter(address,address,uint256)"(
      _collateralAddress: string,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}