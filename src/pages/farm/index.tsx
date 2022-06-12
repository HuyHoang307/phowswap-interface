import { i18n } from '@lingui/core'
import { t } from '@lingui/macro'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import styled from 'styled-components'
import Container from '../../components/Container'
import PopupNotice from '../../components/PopupNotice/PopupNotice'
import { networkSupport } from '../../connectors'
import FarmsList from '../../constants/config/farms'
import { FarmTypeEnum } from '../../constants/farm-type'
import FarmList from '../../features/farm/FarmList'
import { usePhoFarmingContract, useFarmingContractWeb3, useChainId } from '../../hooks/useContract'
import { useActiveWeb3React } from '../../services/web3'

const WrapFarm = styled.div`
  > .container {
    margin: 0 auto;
  }
`
export const TabListFarm = styled(TabList)`
  display: flex;
  align-items: center;
  li {
    margin-right: 50px;
  }
  @media screen and (max-width: 768px) {
    li {
      margin-right: 20px;
    }
  }
`
export const TabsFarm = styled(Tabs)`
  color: ${({ theme }) => theme.farmText};
  font-weight: 600;
  font-size: 18px;
  line-height: 126, 5%;
  letter-spacing: 0.015rem;
  // text-transform: capitalize;
  padding-top: 42px;
  @media screen and (max-width: 768px) {
    padding-top: 0;
    font-size: 16px;
  }
  .selected {
    color: ${({ theme }) => theme.tabActive};
    position: relative;
    :before {
      content: '';
      display: inline-block;
      height: 2px;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -5px;
      background: ${({ theme }) => theme.primary1};
    }
  }

  .nft-block {
    margin-top: ${isMobile ? '40px' : '60px'};
  }
`
const TabPanelFarm = styled(TabPanel)`
  padding-top: 15px;
`
const TextFarm = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.015em;
  text-transform: capitalize;
  color: ${({ theme }) => theme.textSubFarm};
  padding-top: 16px;
  padding-bottom: 18px;

  .subText {
    color: ${({ theme }) => theme.spanFarm};
  }
  @media screen and (max-width: 767px) {
    padding: 10px 0;
    font-size: 11px;
  }
`

export default function Farm(): JSX.Element {
  // const { i18n } = useLingui();
  const { account } = useActiveWeb3React()
  const { chainId } = useChainId()
  // const router = useRouter();
  const listFarms = FarmsList()
  const [tabIndex, setTabIndex] = useState(0)
  const [currentFarmType, setCurrentFarmType] = useState(FarmTypeEnum.LP)
  // const useChainIdDisconnected = useChainIdDisconnect(); //rerender when switch network (disconnect)
  const checkTimeActive = (startDate: number, endDate: number) => {
    const now = new Date().getTime()
    return (now >= startDate && now <= endDate) || endDate === 0
  }

  const farmingContractWeb3 = useFarmingContractWeb3()
  const farmingContract = usePhoFarmingContract()

  const getFarmsActive = () => {
    return listFarms
      ?.filter((item) => {
        return item.isActive && item.network == chainId
      })
      .map((item) => {
        return {
          ...item,
          active: true,
        }
      })
  }

  const getFarmsInactive = () => {
    return listFarms
      ?.filter((item) => {
        return !item.isActive && item.network == chainId
      })
      .map((item) => {
        return {
          ...item,
          active: false,
        }
      })
  }

  const handleChangeFarmType = (farmType: FarmTypeEnum) => {
    console.log('====================================')
    console.log(farmType)
    console.log('====================================')
    setCurrentFarmType(farmType)
  }

  const handleTabFarmChange = (index: number) => {
    setTabIndex(index)
  }

  return (
    <Container id="farm-page" className="grid h-full mx-auto gap-9 max-w-full w-full" maxWidth="7xl">
      <Head>
        <title>Farm | Pho</title>
        <meta name="description" content="Farm PHOSWAP" />
      </Head>

      <div className="space-y-6">
        <WrapFarm>
          <TabsFarm
            forceRenderTabPanel
            selectedIndex={tabIndex}
            onSelect={(index: number) => handleTabFarmChange(index)}
            className="flex flex-col flex-grow"
          >
            <TabPanel>
              {tabIndex == 0 && (
                <FarmList
                  farms={getFarmsActive()}
                  currentFarmType={currentFarmType}
                  changeFarmType={handleChangeFarmType}
                  chainId={chainId}
                />
              )}
            </TabPanel>
            <TabPanel>
              {tabIndex == 1 && (
                <FarmList
                  farms={getFarmsInactive()}
                  currentFarmType={currentFarmType}
                  changeFarmType={handleChangeFarmType}
                  chainId={chainId}
                />
              )}
            </TabPanel>
          </TabsFarm>
        </WrapFarm>
      </div>
      {/* {account && <PopupNotice isOpen={isNotice} onDismiss={() => setIsNotice(false)} />} */}
    </Container>
  )
}
