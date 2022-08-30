'use strict';

const NodeCryptoProvider = require('../../build/crypto/NodeCryptoProvider');

const {createCryptoProviderTestSuite} = require('./helpers');

describe('NodeCryptoProvider', () => {
  createCryptoProviderTestSuite(new NodeCryptoProvider());
});
