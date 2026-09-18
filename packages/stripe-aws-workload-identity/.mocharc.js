'use strict';

// Configuration for the adapter's Mocha suite. Mirrors the root config, scoped
// to this package.
module.exports = {
  color: true,
  recursive: true,
  extension: ['js', 'ts'],
  require: 'ts-node/register/transpile-only',
  spec: ['test/**/*.spec.ts'],
};

require('chai').use(require('chai-as-promised'));
