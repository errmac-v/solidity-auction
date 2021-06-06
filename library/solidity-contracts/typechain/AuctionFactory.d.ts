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
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface AuctionFactoryInterface extends ethers.utils.Interface {
  functions: {
    "c_0xdbffb962(bytes32)": FunctionFragment;
    "createAuction(tuple)": FunctionFragment;
    "getAuctions(address)": FunctionFragment;
    "ownerAuctions(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_0xdbffb962",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createAuction",
    values: [
      {
        startDate: BigNumberish;
        endDate: BigNumberish;
        auctionType: BigNumberish;
        good: {
          name: string;
          description: string;
          startPrice: BigNumberish;
          category: BigNumberish;
        };
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "getAuctions", values: [string]): string;
  encodeFunctionData(
    functionFragment: "ownerAuctions",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "c_0xdbffb962",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAuctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerAuctions",
    data: BytesLike
  ): Result;

  events: {
    "AuctionCreated(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionCreated"): EventFragment;
}

export class AuctionFactory extends BaseContract {
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

  interface: AuctionFactoryInterface;

  functions: {
    c_0xdbffb962(
      c__0xdbffb962: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    createAuction(
      newAuction: {
        startDate: BigNumberish;
        endDate: BigNumberish;
        auctionType: BigNumberish;
        good: {
          name: string;
          description: string;
          startPrice: BigNumberish;
          category: BigNumberish;
        };
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAuctions(owner: string, overrides?: CallOverrides): Promise<[string[]]>;

    ownerAuctions(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  c_0xdbffb962(
    c__0xdbffb962: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  createAuction(
    newAuction: {
      startDate: BigNumberish;
      endDate: BigNumberish;
      auctionType: BigNumberish;
      good: {
        name: string;
        description: string;
        startPrice: BigNumberish;
        category: BigNumberish;
      };
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAuctions(owner: string, overrides?: CallOverrides): Promise<string[]>;

  ownerAuctions(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    c_0xdbffb962(
      c__0xdbffb962: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    createAuction(
      newAuction: {
        startDate: BigNumberish;
        endDate: BigNumberish;
        auctionType: BigNumberish;
        good: {
          name: string;
          description: string;
          startPrice: BigNumberish;
          category: BigNumberish;
        };
      },
      overrides?: CallOverrides
    ): Promise<string>;

    getAuctions(owner: string, overrides?: CallOverrides): Promise<string[]>;

    ownerAuctions(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    AuctionCreated(
      owner?: string | null,
      contractAddress?: null
    ): TypedEventFilter<
      [string, string],
      { owner: string; contractAddress: string }
    >;
  };

  estimateGas: {
    c_0xdbffb962(
      c__0xdbffb962: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createAuction(
      newAuction: {
        startDate: BigNumberish;
        endDate: BigNumberish;
        auctionType: BigNumberish;
        good: {
          name: string;
          description: string;
          startPrice: BigNumberish;
          category: BigNumberish;
        };
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAuctions(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    ownerAuctions(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    c_0xdbffb962(
      c__0xdbffb962: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createAuction(
      newAuction: {
        startDate: BigNumberish;
        endDate: BigNumberish;
        auctionType: BigNumberish;
        good: {
          name: string;
          description: string;
          startPrice: BigNumberish;
          category: BigNumberish;
        };
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAuctions(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownerAuctions(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
