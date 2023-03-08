'use strict';

// Configuration for our Mocha test suite.
const config = {
  color: true,
  // Recurse through all tests in the test directory.
  recursive: true,
  extension: ["js", "ts"],
  loader: "ts-node/esm"
};

module.exports = config;
