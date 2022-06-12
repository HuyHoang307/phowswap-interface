import { ChainId } from 'phoswap-sdk'
import { MASTER_CHEF, MASTER_CHEF_V2 } from '../addresses'
import { FarmTypeEnum } from '../farm-type'
import { useWeb3React } from '@web3-react/core'

const farmsRinkeby = [
  {
    pid: 0,
    network: 4,
    startDate: 0,
    endDate: 0,
    isActive: true,
    singleFarm: true,
    phoEarning: true,
    lpTokenAddress: {
      decimals: 18,
      4: '0x39396D5351E238aD973A964d63581e8Ed3983A21',
    },

    farmAddress: {
      4: MASTER_CHEF_V2[4],
    },
    pair: {
      id: '0x39396D5351E238aD973A964d63581e8Ed3983A21',
      token: {
        symbol: 'PHO',
        id: '0x39396D5351E238aD973A964d63581e8Ed3983A21',
        decimals: 18,
        earning: false,
        // amountPerMonth: 20: unlimited token
      },

      quoteToken: {
        symbol: 'PHO',
        id: '0x39396D5351E238aD973A964d63581e8Ed3983A21',
        decimals: 18,
        earning: false,
      },
    },
    type: FarmTypeEnum.TOKEN,
  },
  {
    pid: 1,
    network: 4,
    startDate: 0,
    endDate: 0,
    isActive: true,
    singleFarm: true,
    phoEarning: true,
    lpTokenAddress: {
      decimals: 18,
      4: '0x2Ef4BC83c501f125708A30e306A83c9bc540Fbef',
    },

    lpAddressPhoVsQuote: {
      4: '0x2Ef4BC83c501f125708A30e306A83c9bc540Fbef',
      decimals: 18,
    },
    farmAddress: {
      4: MASTER_CHEF_V2[4],
    },
    pair: {
      id: '0x2Ef4BC83c501f125708A30e306A83c9bc540Fbef',
      token: {
        symbol: 'PHO',
        id: '0x39396D5351E238aD973A964d63581e8Ed3983A21',
        decimals: 18,
        earning: false,
        // amountPerMonth: 20: unlimited token
      },

      quoteToken: {
        symbol: 'USDT',
        id: '0xB7C9061A208A03cFBa1DeDEdFE0917066603ab4e',
        decimals: 18,
        earning: false,
      },
    },
    type: FarmTypeEnum.LP,
  },
  // {
  //   pid: 2,
  //   network: 4,
  //   startDate: 0,
  //   endDate: 0,
  //   isActive: true,
  //   singleFarm: true,
  //   phoEarning: true,
  //   lpTokenAddress: {
  //     decimals: 18,
  //     4: '0x3b71d05307401b969decf882818bbe242a3841b0',
  //   },

  //   lpAddressPhoVsQuote: {
  //     4: '0x3b71d05307401b969decf882818bbe242a3841b0',
  //     decimals: 18,
  //   },
  //   farmAddress: {
  //     4: MASTER_CHEF_V2[4],
  //   },
  //   pair: {
  //     id: '0x3b71d05307401b969decf882818bbe242a3841b0',
  //     token: {
  //       symbol: 'PHO',
  //       id: '0x39396D5351E238aD973A964d63581e8Ed3983A21',
  //       decimals: 18,
  //       earning: false,
  //       // amountPerMonth: 20: unlimited token
  //     },

  //     quoteToken: {
  //       symbol: 'DAI',
  //       id: '0xDFEe9D9e9aC61980f4F43dD12B8F62Ade3D0B28B',
  //       decimals: 18,
  //       earning: false,
  //     },
  //   },
  //   type: FarmTypeEnum.LP,
  // },
  // {
  //   pid: 3,
  //   network: 4,
  //   startDate: 0,
  //   endDate: 0,
  //   isActive: true,
  //   singleFarm: true,
  //   phoEarning: true,
  //   lpTokenAddress: {
  //     decimals: 18,
  //     4: '0x8a1105b51a99bdd9e94c73fa96f8794563cdd122',
  //   },

  //   lpAddressPhoVsQuote: {
  //     4: '0x8a1105b51a99bdd9e94c73fa96f8794563cdd122',
  //     decimals: 18,
  //   },
  //   farmAddress: {
  //     4: MASTER_CHEF_V2[4],
  //   },
  //   pair: {
  //     id: '0x8a1105b51a99bdd9e94c73fa96f8794563cdd122',
  //     token: {
  //       symbol: 'PHO',
  //       id: '0x39396D5351E238aD973A964d63581e8Ed3983A21',
  //       decimals: 18,
  //       earning: false,
  //       // amountPerMonth: 20: unlimited token
  //     },

  //     quoteToken: {
  //       symbol: 'USDC',
  //       id: '0x248E7Fa5fB6De623d339c837299692fFB4ea5971',
  //       decimals: 6,
  //       earning: false,
  //     },
  //   },
  //   type: FarmTypeEnum.LP,
  // },
]

let farms

const FarmsList = () => {
  const { chainId } = useWeb3React()

  switch (chainId) {
    case ChainId.MAINNET:
      farms = []
      break
    case ChainId.RINKEBY:
      farms = farmsRinkeby
      break
    case ChainId.BSC:
      farms = []
      break
    case ChainId.BSC_TESTNET:
      farms = []
      break
    default:
      farms = []
  }
  return farms
}

export default FarmsList
