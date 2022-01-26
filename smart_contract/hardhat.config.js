// https://eth-ropsten.alchemyapi.io/v2/cbtDFFYUISXbXyciezXV6kZjUCRVlZA4
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/cbtDFFYUISXbXyciezXV6kZjUCRVlZA4",
      accounts: [
        "8b4409304d32c7257660986bc78dda8a953324bb1c4118617895df714c8ca615",
      ],
    },
  },
};
