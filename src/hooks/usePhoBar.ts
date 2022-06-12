import { Currency, CurrencyAmount, Token } from 'phoswap-sdk'

import { useCallback } from 'react'
import { usePhoBarContract } from './useContract'
import { useTransactionAdder } from '../state/transactions/hooks'

const usePhoBar = () => {
  const addTransaction = useTransactionAdder()
  const barContract = usePhoBarContract()

  const enter = useCallback(
    async (amount: CurrencyAmount<Token> | undefined) => {
      if (amount?.quotient) {
        try {
          const tx = await barContract?.enter(amount?.quotient.toString())
          return addTransaction(tx, { summary: 'Enter PhoBar' })
        } catch (e) {
          return e
        }
      }
    },
    [addTransaction, barContract]
  )

  const leave = useCallback(
    async (amount: CurrencyAmount<Token> | undefined) => {
      if (amount?.quotient) {
        try {
          const tx = await barContract?.leave(amount?.quotient.toString())
          return addTransaction(tx, { summary: 'Leave PhoBar' })
        } catch (e) {
          return e
        }
      }
    },
    [addTransaction, barContract]
  )

  return { enter, leave }
}

export default usePhoBar
