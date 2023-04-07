const {NodeCryptoProvider} = require('../../src/crypto/NodeCryptoProvider.js');

const {createCryptoProviderTestSuite} = require('./helpers.js');

describe('NodeCryptoProvider', () => {
  createCryptoProviderTestSuite(new NodeCryptoProvider());
});
