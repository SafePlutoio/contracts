const HDWalletProvider = require('@truffle/hdwallet-provider');
const keys = require('./key.json');

module.exports = {
  networks: {
    test: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider(
          keys['mainnet'],
          'https://bsc-dataseed.binance.org/',
        ),
      network_id: 56,
      skipDryRun: true,
    },
    testnet: {
      provider: () =>
        new HDWalletProvider(
          keys['kovan'],
          'https://data-seed-prebsc-1-s1.binance.org:8545/',
        ),
      network_id: 97,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: '0.6.12',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: keys['api'],
  },
};
