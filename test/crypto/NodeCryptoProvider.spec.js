'use strict';

const {NodeCryptoProvider} = require('../../cjs/crypto/NodeCryptoProvider');

const {createCryptoProviderTestSuite} = require('./helpers');

describe('NodeCryptoProvider', () => {
  createCryptoProviderTestSuite(new NodeCryptoProvider());
});
