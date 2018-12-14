var rskjs = require('rskjs-util')

// https://github.com/rsksmart/RSKIPs/blob/master/IPs/RSKIP60.md

module.exports = {
    isValidAddress: function (address, currencyNameOrSymbol, networkType) {
      let chainId = 30;
      if (networkType && networkType === 'testnet') chainId = 31;
      return rskjs.isValidChecksumAddress(address, chainId);
    }
};
