require('@nomiclabs/hardhat-waffle');

// yG3CY5O4D9d3ZIxvD1Q2PoNgJF85A2HZ
// https://eth-mainnet.g.alchemy.com/v2/yG3CY5O4D9d3ZIxvD1Q2PoNgJF85A2HZ
module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/yG3CY5O4D9d3ZIxvD1Q2PoNgJF85A2HZ',
      accounts: ['df207832aceb21a39a6066f6f189f40e9c6961367fd36377c3afcfea1fbf405f'],
    },
  },
};