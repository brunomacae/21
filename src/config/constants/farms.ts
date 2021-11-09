import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'Groot',
    lpAddresses: {
      97: '',
      56: '0xC4cCB2422B2EcaAB9B0ebCD93Ef015E618c76fb8',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '',
      56: '0xC4cCB2422B2EcaAB9B0ebCD93Ef015E618c76fb8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'Groot-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xD578f7Ee2840232004726320d6AA32c9005D8312',   // lp address token-bnb
    },
    tokenSymbol: 'Groot',
    tokenAddresses: {
      97: '',
      56: '0xC4cCB2422B2EcaAB9B0ebCD93Ef015E618c76fb8', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms
