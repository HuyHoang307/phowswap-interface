import { CurrencyAmount, Token } from 'phoswap-sdk'

type TokenAddress = string

export type TokenBalancesMap = Record<TokenAddress, CurrencyAmount<Token>>
