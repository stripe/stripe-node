'use strict';

import {NodeCryptoProvider} from '../../lib/crypto/NodeCryptoProvider.js';

import {createCryptoProviderTestSuite} from './helpers.js';

describe('NodeCryptoProvider', () => {
  createCryptoProviderTestSuite(new NodeCryptoProvider());
});
