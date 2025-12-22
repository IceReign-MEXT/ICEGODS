const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey = "782bf057dd2533388627a3fb84d9984d9f9dce00531c0a4eb0724288758369cf";

module.exports = {
  networks: {
    base: {
      provider: () => new HDWalletProvider(privateKey, "https://mainnet.base.org"),
      network_id: 8453,
      gas: 2000000,
      gasPrice: 100000000, // 0.1 gwei
    }
  },
  compilers: {
    solc: {
      version: "0.8.20"
    }
  }
};
