import { useEffect, useState } from 'react'

import { BigNumber } from '@ethersproject/bignumber'
import { XPHO } from '../config/tokens'
import { useBentoBoxContract } from './useContract'

export default function useMeowshiPerXPho() {
  const bentoboxContract = useBentoBoxContract()
  const [state, setState] = useState<[BigNumber, BigNumber]>([BigNumber.from('0'), BigNumber.from('0')])

  useEffect(() => {
    if (!bentoboxContract) return
    ;(async () => {
      const toShare = await bentoboxContract.toShare(XPHO.address, '1'.toBigNumber(XPHO.decimals), false)
      const toAmount = await bentoboxContract.toAmount(XPHO.address, '1'.toBigNumber(XPHO.decimals), false)
      setState([toShare, toAmount])
    })()
  }, [bentoboxContract])

  return state
}
