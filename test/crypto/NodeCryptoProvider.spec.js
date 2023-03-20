'use strict';

const {NodeCryptoProvider} = require('../../cjs/crypto/NodeCryptoProvider.js');

const {createCryptoProviderTestSuite} = require('./helpers.js');

describe('NodeCryptoProvider', () => {
  createCryptoProviderTestSuite(new NodeCryptoProvider());
});
