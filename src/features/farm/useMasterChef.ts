import { useActiveWeb3React, usePhoContract } from '../../hooks'

import { BigNumber } from '@ethersproject/bignumber'
import { Chef } from './enum'
import { Zero } from '@ethersproject/constants'
import { useCallback } from 'react'
import { useChefContract } from './hooks'

export default function useMasterChef(chef: Chef) {
  const { account } = useActiveWeb3React()

  const pho = usePhoContract()

  const contract = useChefContract(chef)

  // Deposit
  const deposit = useCallback(
    async (pid: number, amount: BigNumber) => {
      try {
        let tx

        if (chef === Chef.MASTERCHEF) {
          tx = await contract?.deposit(pid, amount)
        } else {
          tx = await contract?.deposit(pid, amount, account)
        }

        return tx
      } catch (e) {
        console.error(e)
        return e
      }
    },
    [account, contract]
  )

  // Withdraw
  const withdraw = useCallback(
    async (pid: number, amount: BigNumber) => {
      try {
        let tx

        if (chef === Chef.MASTERCHEF) {
          tx = await contract?.withdraw(pid, amount)
        } else {
          tx = await contract?.withdraw(pid, amount, account)
        }

        return tx
      } catch (e) {
        console.error(e)
        return e
      }
    },
    [account, contract]
  )

  const harvest = useCallback(
    async (pid: number) => {
      try {
        let tx

        if (chef === Chef.MASTERCHEF) {
          tx = await contract?.deposit(pid, Zero)
        } else if (chef === Chef.MASTERCHEF_V2) {
          const pendignPho = await contract?.pendignPho(pid, account)

          const balanceOf = await pho?.balanceOf(contract?.address)

          // If MasterChefV2 doesn't have enough pho to harvest, batch in a harvest.
          if (pendignPho.gt(balanceOf)) {
            tx = await contract?.batch(
              [
                contract?.interface?.encodeFunctionData('harvestFromMasterChef'),
                contract?.interface?.encodeFunctionData('harvest', [pid, account]),
              ],
              true
            )
          } else {
            tx = await contract?.harvest(pid, account)
          }
        } else if (chef === Chef.MINICHEF) {
          tx = await contract?.harvest(pid, account)
        }

        return tx
      } catch (e) {
        console.error(e)
        return e
      }
    },
    [account, contract, pho]
  )

  return { deposit, withdraw, harvest }
}
