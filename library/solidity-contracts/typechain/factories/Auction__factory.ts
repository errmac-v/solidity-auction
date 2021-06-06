/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Auction, AuctionInterface } from "../Auction";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "startPrice",
            type: "uint256",
          },
          {
            internalType: "enum Types.Category",
            name: "category",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct Types.Good",
        name: "good",
        type: "tuple",
      },
    ],
    name: "AuctionCompleted",
    type: "event",
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
    inputs: [],
    name: "auctionType",
    outputs: [
      {
        internalType: "enum Types.AuctionType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x4c3b74ab",
        type: "bytes32",
      },
    ],
    name: "c_0x4c3b74ab",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "canceledAt",
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
    inputs: [],
    name: "createdAt",
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
    inputs: [],
    name: "endDate",
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
    inputs: [],
    name: "good",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "startPrice",
        type: "uint256",
      },
      {
        internalType: "enum Types.Category",
        name: "category",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "id",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "startDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endDate",
            type: "uint256",
          },
          {
            internalType: "enum Types.AuctionType",
            name: "auctionType",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "startPrice",
                type: "uint256",
              },
              {
                internalType: "enum Types.Category",
                name: "category",
                type: "uint8",
              },
            ],
            internalType: "struct Types.Good",
            name: "good",
            type: "tuple",
          },
        ],
        internalType: "struct Types.NewAuction",
        name: "auction",
        type: "tuple",
      },
    ],
    name: "initialize",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startDate",
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
    inputs: [],
    name: "updatedAt",
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
  "0x608060405234801561001057600080fd5b506119fa806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063aa8fb40b1161008c578063c453e3ee11610066578063c453e3ee146101cf578063cf09e0d0146101eb578063f2fde38b14610209578063f39a645f14610225576100cf565b8063aa8fb40b14610172578063af640d0f14610193578063c24a0f8b146101b1576100cf565b80630b97bc86146100d4578063715018a6146100f25780637519ab50146100fc5780638da5cb5b1461011a5780638e6a068814610138578063994595e114610154575b600080fd5b6100dc610243565b6040516100e99190611576565b60405180910390f35b6100fa610249565b005b610104610386565b6040516101119190611576565b60405180910390f35b61012261038c565b60405161012f9190611450565b60405180910390f35b610152600480360381019061014d91906111ef565b6103b6565b005b61015c610882565b6040516101699190611486565b60405180910390f35b61017a610895565b60405161018a94939291906114a1565b60405180910390f35b61019b6109d0565b6040516101a8919061146b565b60405180910390f35b6101b96109d6565b6040516101c69190611576565b60405180910390f35b6101e960048036038101906101e491906111c6565b6109dc565b005b6101f36109df565b6040516102009190611576565b60405180910390f35b610223600480360381019061021e919061119d565b6109e5565b005b61022d610b91565b60405161023a9190611576565b60405180910390f35b606b5481565b610251610b97565b73ffffffffffffffffffffffffffffffffffffffff1661026f61038c565b73ffffffffffffffffffffffffffffffffffffffff16146102c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102bc90611534565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b606e5481565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600060019054906101000a900460ff16806103dc575060008054906101000a900460ff16155b61041b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041290611514565b60405180910390fd5b60008060019054906101000a900460ff16159050801561046b576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6104977f897e2b4610f104126133f8887c222760c7f1a95806b67858da703f50241e53b460001b6109dc565b6104c37ff67490ab138f9b92c4a73e443f4f09ef73e0a40d18fa1d3e36f16153c9d73ff960001b6109dc565b6104ef7f0a7ba4c2db4c25e9ae226b030bfaefc24dde9cf621ee80fe4ebea5ea72dd16ef60001b6109dc565b6104f7610b9f565b6105237fec2319f594b1875c95cf4ee284096419ae2fa42cb84953ce7053512b582f338860001b6109dc565b61054f7f6757a21021069274ce5b43305664d6b8bf2a6bc32f902b8a654ba965ad7e60f660001b6109dc565b816040516020016105609190611554565b604051602081830303815290604052805190602001206065819055506105a87f1ef49e6eb8155226ee7ea8e29c2c7f637bddfebc9398253bcac383008cefa40760001b6109dc565b6105d47f2d65342978d80b8f0ddeaa88acb1b99929f88dec2fedb2cd175eb1432f47126160001b6109dc565b8160600151606660008201518160000190805190602001906105f7929190610ef9565b506020820151816001019080519060200190610614929190610ef9565b506040820151816002015560608201518160030160006101000a81548160ff02191690836001811115610670577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055509050506106a47ffaaba65ad4a285b74e4f56a74a2b0863465b9aded373bfca8cf8001b86be33ac60001b6109dc565b6106d07fb514af7f8266ba2e94319bb7cef2ce7985e50cc7101d49e0a2a6c3cd4c252d7360001b6109dc565b8160400151606a60006101000a81548160ff0219169083600181111561071f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055506107507ff1f0a5710cf322ae4682ae894d3bdc24edb6eb397842e3acfb1c308d9786166660001b6109dc565b61077c7f434fc3cdd7e683e681cf5c29221df6e27289ab85581b10853ee77be0b32d1f8d60001b6109dc565b8160000151606b819055506107b37ff2c4a690e35e26855623138511bd72d130add3c46d87876a1d7b0cdd1753fae160001b6109dc565b6107df7fd25a819a6e0c9edbf52be60cceb74b938be84b36442dadc3ff041463c05f28bf60001b6109dc565b8160200151606c819055506108167f68d68866ddb435eddf368748d6c2acf62d382e35582f15439cb8e5a0a6eef34760001b6109dc565b6108427f669c3162c38a07a2749d717f97cfee9327e48f85b9f2c318a24adfe69a88e76960001b6109dc565b6108576103e842610c8890919063ffffffff16565b606d81905550801561087e5760008060016101000a81548160ff0219169083151502179055505b5050565b606a60009054906101000a900460ff1681565b60668060000180546108a690611740565b80601f01602080910402602001604051908101604052809291908181526020018280546108d290611740565b801561091f5780601f106108f45761010080835404028352916020019161091f565b820191906000526020600020905b81548152906001019060200180831161090257829003601f168201915b50505050509080600101805461093490611740565b80601f016020809104026020016040519081016040528092919081815260200182805461096090611740565b80156109ad5780601f10610982576101008083540402835291602001916109ad565b820191906000526020600020905b81548152906001019060200180831161099057829003601f168201915b5050505050908060020154908060030160009054906101000a900460ff16905084565b60655481565b606c5481565b50565b606d5481565b6109ed610b97565b73ffffffffffffffffffffffffffffffffffffffff16610a0b61038c565b73ffffffffffffffffffffffffffffffffffffffff1614610a61576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5890611534565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610ad1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac8906114f4565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b606f5481565b600033905090565b600060019054906101000a900460ff1680610bc5575060008054906101000a900460ff16155b610c04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfb90611514565b60405180910390fd5b60008060019054906101000a900460ff161590508015610c54576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b610c5c610c9e565b610c64610d77565b8015610c855760008060016101000a81548160ff0219169083151502179055505b50565b60008183610c969190611614565b905092915050565b600060019054906101000a900460ff1680610cc4575060008054906101000a900460ff16155b610d03576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cfa90611514565b60405180910390fd5b60008060019054906101000a900460ff161590508015610d53576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b8015610d745760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680610d9d575060008054906101000a900460ff16155b610ddc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd390611514565b60405180910390fd5b60008060019054906101000a900460ff161590508015610e2c576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6000610e36610b97565b905080603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3508015610ef65760008060016101000a81548160ff0219169083151502179055505b50565b828054610f0590611740565b90600052602060002090601f016020900481019282610f275760008555610f6e565b82601f10610f4057805160ff1916838001178555610f6e565b82800160010185558215610f6e579182015b82811115610f6d578251825591602001919060010190610f52565b5b509050610f7b9190610f7f565b5090565b5b80821115610f98576000816000905550600101610f80565b5090565b6000610faf610faa846115b6565b611591565b905082815260208101848484011115610fc757600080fd5b610fd28482856116fe565b509392505050565b600081359050610fe98161195f565b92915050565b600081359050610ffe81611976565b92915050565b6000813590506110138161198d565b92915050565b6000813590506110288161199d565b92915050565b600082601f83011261103f57600080fd5b813561104f848260208601610f9c565b91505092915050565b60006080828403121561106a57600080fd5b6110746080611591565b9050600082013567ffffffffffffffff81111561109057600080fd5b61109c8482850161102e565b600083015250602082013567ffffffffffffffff8111156110bc57600080fd5b6110c88482850161102e565b60208301525060406110dc84828501611188565b60408301525060606110f084828501611019565b60608301525092915050565b60006080828403121561110e57600080fd5b6111186080611591565b9050600061112884828501611188565b600083015250602061113c84828501611188565b602083015250604061115084828501611004565b604083015250606082013567ffffffffffffffff81111561117057600080fd5b61117c84828501611058565b60608301525092915050565b600081359050611197816119ad565b92915050565b6000602082840312156111af57600080fd5b60006111bd84828501610fda565b91505092915050565b6000602082840312156111d857600080fd5b60006111e684828501610fef565b91505092915050565b60006020828403121561120157600080fd5b600082013567ffffffffffffffff81111561121b57600080fd5b611227848285016110fc565b91505092915050565b6112398161166e565b82525050565b61124881611680565b82525050565b611257816116da565b82525050565b611266816116da565b82525050565b611275816116ec565b82525050565b611284816116ec565b82525050565b6000611295826115e7565b61129f81856115f2565b93506112af81856020860161170d565b6112b88161185f565b840191505092915050565b60006112ce826115e7565b6112d88185611603565b93506112e881856020860161170d565b6112f18161185f565b840191505092915050565b6000611309602683611603565b915061131482611870565b604082019050919050565b600061132c602e83611603565b9150611337826118bf565b604082019050919050565b600061134f602083611603565b915061135a8261190e565b602082019050919050565b60006080830160008301518482036000860152611382828261128a565b9150506020830151848203602086015261139c828261128a565b91505060408301516113b16040860182611432565b5060608301516113c4606086018261126c565b508091505092915050565b60006080830160008301516113e76000860182611432565b5060208301516113fa6020860182611432565b50604083015161140d604086018261124e565b50606083015184820360608601526114258282611365565b9150508091505092915050565b61143b816116d0565b82525050565b61144a816116d0565b82525050565b60006020820190506114656000830184611230565b92915050565b6000602082019050611480600083018461123f565b92915050565b600060208201905061149b600083018461125d565b92915050565b600060808201905081810360008301526114bb81876112c3565b905081810360208301526114cf81866112c3565b90506114de6040830185611441565b6114eb606083018461127b565b95945050505050565b6000602082019050818103600083015261150d816112fc565b9050919050565b6000602082019050818103600083015261152d8161131f565b9050919050565b6000602082019050818103600083015261154d81611342565b9050919050565b6000602082019050818103600083015261156e81846113cf565b905092915050565b600060208201905061158b6000830184611441565b92915050565b600061159b6115ac565b90506115a78282611772565b919050565b6000604051905090565b600067ffffffffffffffff8211156115d1576115d0611830565b5b6115da8261185f565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061161f826116d0565b915061162a836116d0565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611663576116626117a3565b5b828202905092915050565b6000611679826116b0565b9050919050565b6000819050919050565b600081905061169882611937565b919050565b60008190506116ab8261194b565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006116e58261168a565b9050919050565b60006116f78261169d565b9050919050565b82818337600083830152505050565b60005b8381101561172b578082015181840152602081019050611710565b8381111561173a576000848401525b50505050565b6000600282049050600182168061175857607f821691505b6020821081141561176c5761176b611801565b5b50919050565b61177b8261185f565b810181811067ffffffffffffffff8211171561179a57611799611830565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60028110611948576119476117d2565b5b50565b6002811061195c5761195b6117d2565b5b50565b6119688161166e565b811461197357600080fd5b50565b61197f81611680565b811461198a57600080fd5b50565b6002811061199a57600080fd5b50565b600281106119aa57600080fd5b50565b6119b6816116d0565b81146119c157600080fd5b5056fea264697066735822122001492ae496c2e1cf92a64dbcf23bdc7c6d8a9613076472e73af0d96522b7218564736f6c63430008040033";

export class Auction__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Auction> {
    return super.deploy(overrides || {}) as Promise<Auction>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Auction {
    return super.attach(address) as Auction;
  }
  connect(signer: Signer): Auction__factory {
    return super.connect(signer) as Auction__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AuctionInterface {
    return new utils.Interface(_abi) as AuctionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Auction {
    return new Contract(address, _abi, signerOrProvider) as Auction;
  }
}
