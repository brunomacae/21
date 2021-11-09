import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'Groot',
    tokenAddress: '0xC4cCB2422B2EcaAB9B0ebCD93Ef015E618c76fb8',   // token address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0xC4cCB2422B2EcaAB9B0ebCD93Ef015E618c76fb8',  // token address
    contractAddress: {
      97: '',
      56: '0xF0aaa61044BdcC3732293aF8652f564D8CFE6B01',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 
]

export default pools
