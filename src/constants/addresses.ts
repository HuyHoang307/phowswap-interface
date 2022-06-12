import { ChainId, PHO_ADDRESS, Token } from 'phoswap-sdk'
type ChainTokenMap = {
  readonly [chainId in ChainId]?: Token
}

export const FULL_NODE: { [chainId in ChainId]?: string } = {
  [ChainId.RINKEBY]: process.env.NEXT_PUBLIC_FULLNODE_RINKENY,
  [ChainId.BSC_TESTNET]: process.env.NEXT_PUBLIC_FULLNODE_BSCTESTNET,
}

export const MASTER_CHEF: { [chainId in ChainId]?: string } = {
  [ChainId.RINKEBY]: '0x8d1f6DA6eB9AA76D4886640730558E3222e68CfE',
}

export const MASTER_CHEF_V2: { [chainId in ChainId]?: string } = {
  [ChainId.RINKEBY]: '0x8d1f6DA6eB9AA76D4886640730558E3222e68CfE',
}

export const MINICHEF_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.RINKEBY]: '0x8d1f6DA6eB9AA76D4886640730558E3222e68CfE',
}

export const PHO_TOKEN = {
  [ChainId.RINKEBY]: '0x39396D5351E238aD973A964d63581e8Ed3983A21',
}

export const NATIVE_TOKEN_ADDRESS = '0x0000000000000000000000000000000000000000'
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const UNSUPPORTED_LIST_URLS: string[] = []
// PHO

export const PHO: ChainTokenMap = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, PHO_ADDRESS[ChainId.MAINNET], 18, 'PHO', 'PhoToken'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, PHO_ADDRESS[ChainId.RINKEBY], 18, 'PHO', 'PhoToken')
}
