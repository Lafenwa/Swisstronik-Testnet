require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0xd5..."], //978a2bc76b725588e3ab440ff02706f1e9ed4e41462cf9f47b114d94265095e6 "0x"
    },
  },
};
