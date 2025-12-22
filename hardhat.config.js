require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    base: {
      url: "https://mainnet.base.org",
      accounts: ["782bf057dd2533388627a3fb84d9984d9f9dce00531c0a4eb0724288758369cf"]
    }
  }
};
