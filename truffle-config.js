const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  plugins: [
      "solidity-coverage"
  ],
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
  //  development: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  },
  //  test: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  }
  development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 6721975,
      networkCheckTimeout: 10000,
      fork: "https://eth-kovan.alchemyapi.io/v2/DjLaJSg4gNXdWfDmSufgzuFeRBs-2eRw",
      mnemonic: "change me to preferred mnenomic"
  }
},
  db: {
    enabled: false
  },
  // Configure your compilers
  compilers: {
      solc: {
          version: "0.7.4"
      }
  },
};
