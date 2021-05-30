/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Voting, VotingInterface } from "../Voting";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_proposals",
        type: "bytes32[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x75fb0e59",
        type: "bytes32",
      },
    ],
    name: "c_0x75fb0e59",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "chairperson",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "giveRightToVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "voters",
    outputs: [
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "voted",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "vote",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200155c3803806200155c833981810160405281019062000037919062000605565b6000620000496200054160201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3506200011b7f7a55e0da004a98803dd4acbb39000ced27d18ec183bda0e41752b6d6034117ae60001b6200054960201b60201c565b6200014f7f03ba402bce6dc0c85a25e5daf203098975fa1c937dedb660a9a0ae160e76475e60001b6200054960201b60201c565b620001837f7c04d57e2b7c9ec54e02a5b7c5a96b540d72bd64a293211977d5c2855d5520c960001b6200054960201b60201c565b620001b77f5deb19d9a9956fbdf10fa49651740b9555149d7b45a66de4efc1ebc09d25fcd460001b6200054960201b60201c565b6000815111620001fe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001f59062000671565b60405180910390fd5b620002327f1342ebb59ee92954e5e2aa1b81cf9f1f13bc483cdd7260fe828a1bf6fcd1110760001b6200054960201b60201c565b620002667f7a0dfe4a4a9e35525d21f860eb5a3ac8302d9183499cb1224cf3deb28859bba660001b6200054960201b60201c565b6200029a7f090105c08485af42efdc1875b6663e80454393f6634de2445f02652bf3eb66ff60001b6200054960201b60201c565b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200030f7f61b3a7f15b5bc33dbaca98147bba6e354888badc59d506a9fb2ecc96b30111f160001b6200054960201b60201c565b620003437f8bd62011215a58a7851f871a73b70911cff843b483ff35475f95026ee0fb706b60001b6200054960201b60201c565b600160026000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181905550620003e17f5e6c18a16a82a9d4cfbc0b3bdf1618a9c01ec17fdb6af42681e7b470c119a98f60001b6200054960201b60201c565b620004157f90b7dcd4377daf594886677f2862ed54cf87e4eb1f01e5e0771cb90cd36a676c60001b6200054960201b60201c565b60005b81518110156200053957620004567fcdc21cf6d163c7bd05da259a38003813dcf58000eddbad20c7a044ae3381af3c60001b6200054960201b60201c565b6200048a7fe060132bfada6fe68564f38b498d931937abaef73ffdbc9311f3fdbbfdfb526660001b6200054960201b60201c565b60036040518060400160405280848481518110620004d1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015181526020016000815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600181620005319190620006fc565b905062000418565b505062000855565b600033905090565b50565b6000620005636200055d84620006bc565b62000693565b905080838252602082019050828560208602820111156200058357600080fd5b60005b85811015620005b757816200059c8882620005ee565b84526020840193506020830192505060018101905062000586565b5050509392505050565b600082601f830112620005d357600080fd5b8151620005e58482602086016200054c565b91505092915050565b600081519050620005ff816200083b565b92915050565b6000602082840312156200061857600080fd5b600082015167ffffffffffffffff8111156200063357600080fd5b6200064184828501620005c1565b91505092915050565b600062000659600f83620006eb565b9150620006668262000812565b602082019050919050565b600060208201905081810360008301526200068c816200064a565b9050919050565b60006200069f620006b2565b9050620006ad82826200076d565b919050565b6000604051905090565b600067ffffffffffffffff821115620006da57620006d9620007d2565b5b602082029050602081019050919050565b600082825260208201905092915050565b6000620007098262000763565b9150620007168362000763565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200074e576200074d620007a3565b5b828201905092915050565b6000819050919050565b6000819050919050565b620007788262000801565b810181811067ffffffffffffffff821117156200079a5762000799620007d2565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f456d7074792070726f706f73616c730000000000000000000000000000000000600082015250565b620008468162000759565b81146200085257600080fd5b50565b610cf780620008656000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146101025780639e7b8d6114610120578063a3ec138d1461013c578063f2fde38b1461016e57610088565b8063013cf08b1461008d5780632e4176cf146100be5780634853b66e146100dc578063715018a6146100f8575b600080fd5b6100a760048036038101906100a29190610963565b61018a565b6040516100b5929190610a6f565b60405180910390f35b6100c66101be565b6040516100d39190610a54565b60405180910390f35b6100f660048036038101906100f1919061093a565b6101e4565b005b6101006101e7565b005b61010a610321565b6040516101179190610a54565b60405180910390f35b61013a60048036038101906101359190610911565b61034a565b005b61015660048036038101906101519190610911565b6106ea565b60405161016593929190610b18565b60405180910390f35b61018860048036038101906101839190610911565b610721565b005b6003818154811061019a57600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b6101ef6108ca565b73ffffffffffffffffffffffffffffffffffffffff1661020d610321565b73ffffffffffffffffffffffffffffffffffffffff1614610263576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025a90610af8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6103526108ca565b73ffffffffffffffffffffffffffffffffffffffff16610370610321565b73ffffffffffffffffffffffffffffffffffffffff16146103c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103bd90610af8565b60405180910390fd5b6103f27f181209dbe21f33732b1c3f5dfd083caa5cbec7dccd58ac8c19b12fb1f4c485ca60001b6101e4565b61041e7fedb892d179d6bd600c039a2d13c06792575790fcc600aeaba8a738c0f843fa6d60001b6101e4565b61044a7f696a637ad2c8d3c074020bacfad322c70d4ff2fd8f9b98ff59f3bc14ac205f0460001b6101e4565b6104767fdfb6a918ecfb4bb243f6739e6a570e9da8086e58468b1ad56393698f4a2980a160001b6101e4565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156104e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104dd90610a98565b60405180910390fd5b6105127fff0adbe924cb99333be96c84d79a785e0e2ddd734b7df31f88177cd39caa348360001b6101e4565b61053e7f348c32af72f1b88ef5179843678327299869ba4fa5a92c30bc551dcfab56a55960001b6101e4565b61056a7f41d38a12f5850b9eec2657a469eccc04be185e4c1efbaee2bae719352ec2a51260001b6101e4565b6105967fae8dbb1a2305c4d4a3a08114397d66ec8e32229996a2161079816646d1f6fbc260001b6101e4565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541461061b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061290610ad8565b60405180910390fd5b6106477ff2593a1755a3fcdcfcf859f5677ebe721320e1d708ad59b83c762e20ef5b72a560001b6101e4565b6106737f6742eb3919b09a45ef18af2c43d7eedbcc382e9bb50f0fc1560b8a545208c41360001b6101e4565b61069f7fe2a8c5f5c4bf5cecc5f90b7ece27738ebced7fad8299ee4c7ba1d70bfc3c1c4d60001b6101e4565b6001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555050565b60026020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060020154905083565b6107296108ca565b73ffffffffffffffffffffffffffffffffffffffff16610747610321565b73ffffffffffffffffffffffffffffffffffffffff161461079d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079490610af8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561080d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080490610ab8565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b6000813590506108e181610c7c565b92915050565b6000813590506108f681610c93565b92915050565b60008135905061090b81610caa565b92915050565b60006020828403121561092357600080fd5b6000610931848285016108d2565b91505092915050565b60006020828403121561094c57600080fd5b600061095a848285016108e7565b91505092915050565b60006020828403121561097557600080fd5b6000610983848285016108fc565b91505092915050565b61099581610b60565b82525050565b6109a481610b72565b82525050565b6109b381610b7e565b82525050565b60006109c6601b83610b4f565b91506109d182610bb2565b602082019050919050565b60006109e9602683610b4f565b91506109f482610bdb565b604082019050919050565b6000610a0c602083610b4f565b9150610a1782610c2a565b602082019050919050565b6000610a2f602083610b4f565b9150610a3a82610c53565b602082019050919050565b610a4e81610ba8565b82525050565b6000602082019050610a69600083018461098c565b92915050565b6000604082019050610a8460008301856109aa565b610a916020830184610a45565b9392505050565b60006020820190508181036000830152610ab1816109b9565b9050919050565b60006020820190508181036000830152610ad1816109dc565b9050919050565b60006020820190508181036000830152610af1816109ff565b9050919050565b60006020820190508181036000830152610b1181610a22565b9050919050565b6000606082019050610b2d6000830186610a45565b610b3a602083018561099b565b610b476040830184610a45565b949350505050565b600082825260208201905092915050565b6000610b6b82610b88565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f5a65726f2061646472657373206973206e6f7420616c6c6f7765640000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f54686520766f7465722068617320616c7265616479206265656e206164646564600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b610c8581610b60565b8114610c9057600080fd5b50565b610c9c81610b7e565b8114610ca757600080fd5b50565b610cb381610ba8565b8114610cbe57600080fd5b5056fea26469706673582212205da03b2cca416bf5399ebb1e61e040ec8a4d762dd572ae375b4e6832581c6ffa64736f6c63430008040033";

export class Voting__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _proposals: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Voting> {
    return super.deploy(_proposals, overrides || {}) as Promise<Voting>;
  }
  getDeployTransaction(
    _proposals: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_proposals, overrides || {});
  }
  attach(address: string): Voting {
    return super.attach(address) as Voting;
  }
  connect(signer: Signer): Voting__factory {
    return super.connect(signer) as Voting__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VotingInterface {
    return new utils.Interface(_abi) as VotingInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Voting {
    return new Contract(address, _abi, signerOrProvider) as Voting;
  }
}
