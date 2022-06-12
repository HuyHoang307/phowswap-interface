import gql from 'graphql-tag'

export const barQuery = gql`
  query barQuery($id: String! = "0x8798249c2e607446efb7ad49ec89dd1865ff4272", $block: Block_height) {
    bar(id: $id, block: $block) {
      id
      totalSupply
      ratio
      xPhoMinted
      xPhoBurned
      phoStaked
      phoStakedUSD
      phoHarvested
      phoHarvestedUSD
      xPhoAge
      xPhoAgeDestroyed
      # histories(first: 1000) {
      #   id
      #   date
      #   timeframe
      #   phoStaked
      #   phoStakedUSD
      #   phoHarvested
      #   phoHarvestedUSD
      #   xPhoAge
      #   xPhoAgeDestroyed
      #   xPhoMinted
      #   xPhoBurned
      #   xPhoSupply
      #   ratio
      # }
    }
  }
`

export const barHistoriesQuery = gql`
  query barHistoriesQuery {
    histories(first: 1000) {
      id
      date
      timeframe
      phoStaked
      phoStakedUSD
      phoHarvested
      phoHarvestedUSD
      xPhoAge
      xPhoAgeDestroyed
      xPhoMinted
      xPhoBurned
      xPhoSupply
      ratio
    }
  }
`

export const barUserQuery = gql`
  query barUserQuery($id: String!) {
    user(id: $id) {
      id
      bar {
        totalSupply
        phoStaked
      }
      xPho
      phoStaked
      phoStakedUSD
      phoHarvested
      phoHarvestedUSD
      xPhoIn
      xPhoOut
      xPhoOffset
      xPhoMinted
      xPhoBurned
      phoIn
      phoOut
      usdIn
      usdOut
      createdAt
      createdAtBlock
    }
  }
`
