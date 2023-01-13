'use strict';

// Configuration for our Mocha test suite.
module.exports = {
  color: true,
  // Recurse through all tests in the test directory.
  recursive: true,
  extension: ["js", "ts"],
  require: "ts-node/register/transpile-only"
};
