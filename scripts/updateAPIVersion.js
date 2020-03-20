#!/usr/bin/env node

/* eslint-disable no-sync,no-nested-ternary */
const fs = require('fs');
const path = require('path');

const read = (file) => fs.readFileSync(path.resolve(file)).toString();
const write = (file, str) => fs.writeFileSync(path.resolve(file), str);
const edit = (file, cb) => write(file, cb(read(file)));

const API_VERSION = '2[0-9][2-9][0-9]-[0-9]{2}-[0-9]{2}';

const main = () => {
  const apiVersion = read('API_VERSION').trim();

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

  replaceAPIVersion('README.md', 'apiVersion: [\'"]API_VERSION[\'"]');
  replaceAPIVersion('package.json', '"types": "types/API_VERSION/index.d.ts');
  replaceAPIVersion(
    'examples/webhook-signing/typescript-node-express/express-ts.ts',
    'apiVersion: [\'"]API_VERSION[\'"]'
  );
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
