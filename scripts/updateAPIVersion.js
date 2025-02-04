#!/usr/bin/env node

/**
 * Reads the current API version from src/apiVersion.ts and updates all
 * references to it in the types/ directory.
 */

/* eslint-disable no-sync,no-nested-ternary */
const fs = require('fs');
const path = require('path');

const read = (file) => fs.readFileSync(path.resolve(file)).toString();
const write = (file, str) => fs.writeFileSync(path.resolve(file), str);
const edit = (file, cb) => write(file, cb(read(file)));

const API_VERSION = '2[0-9][2-9][0-9]-[0-9]{2}-[0-9]{2}.[a-z]+';

const main = () => {
  const matches = [
    ...read('src/apiVersion.ts').matchAll(/ApiVersion = '([^']*)'/g),
  ];
  if (matches.length !== 1) {
    throw new Error(
      `Expected src/apiVersion.ts to include 1 match for ApiVersion = '...' but found ${matches.length}`
    );
  }
  const apiVersion = matches[0][1];

  const replaceAPIVersion = (file, pattern) =>
    edit(file, (text) => {
      const parts = pattern.split('API_VERSION');
      return text.replace(
        new RegExp(parts.map((x) => `(${x})`).join(API_VERSION), 'g'),
        parts.length === 0
          ? apiVersion
          : parts.length === 1
          ? `$1${apiVersion}`
          : parts.length === 2
          ? `$1${apiVersion}$2`
          : 'UNEXPECTED'
      );
    });

  replaceAPIVersion(
    'types/lib.d.ts',
    'export type LatestApiVersion = [\'"]API_VERSION[\'"]'
  );
  replaceAPIVersion(
    'types/test/typescriptTest.ts',
    '///<reference types=["\']\\.\\./API_VERSION[\'"]'
  );
  replaceAPIVersion(
    'types/test/typescriptTest.ts',
    'apiVersion: [\'"]API_VERSION[\'"]'
  );
};

if (require.main === module) {
  main();
}
