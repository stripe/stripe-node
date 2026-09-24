'use strict';

module.exports = {
  color: true,
  recursive: true,
  extension: ['js', 'ts'],
  require: 'ts-node/register/transpile-only',
  spec: ['test/**/*.spec.ts'],
};

require('chai').use(require('chai-as-promised'));
