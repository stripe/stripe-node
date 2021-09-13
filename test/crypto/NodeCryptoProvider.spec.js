'use strict';

const NodeCryptoProvider = require('../../lib/crypto/NodeCryptoProvider');

const {createCryptoProviderTestSuite} = require('./helpers');

describe('NodeCryptoProvider', () => {
  createCryptoProviderTestSuite(new NodeCryptoProvider());
});
