//https://eth-goerli.g.alchemy.com/v2/PtOW84EIMyfAaX93sYECGs_QLonqicN8

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/PtOW84EIMyfAaX93sYECGs_QLonqicN8',
      accounts: ['488c6a13165c268673f429bbe019a8aff1ff324d2d7082193ea65e8a93821f53'],
    },
  },
};