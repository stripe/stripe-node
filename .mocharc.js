'use strict';

// Configuration for our Mocha test suite.
const config = {
  color: true,
  // Run tests in parallel.
  parallel: true,
  // Recurse through all tests in the test directory.
  recursive: true,
  extension: ["js", "ts"],
  require: "ts-node/register/transpile-only,./test/setup",
};

if (process.argv.find(a => a.includes('WebStorm'))) {
  // Parallel doesn't work correctly when running from JetBrains WebStorm
  config.parallel = false;
}

// Ensure we are using the 'as promised' libs before any tests are run:
require('chai').use(require('chai-as-promised'));

module.exports = config;
