require('@nomiclabs/hardhat-waffle');
require("dotenv").config({ path: ".env" });

const ALCHEMY_HTTP_URL = process.env.ALCHEMY_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: ALCHEMY_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

//Transactions are deployed to  0x3FC045c4D6B65371596B4cb3E028C0507C9BE2EC