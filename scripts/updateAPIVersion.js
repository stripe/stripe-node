#!/usr/bin/env node

/* eslint-disable no-sync */
const fs = require('fs');
const path = require('path');

const read = (file) => fs.readFileSync(path.resolve(file)).toString();
const write = (file, str) => fs.writeFileSync(path.resolve(file), str);
const edit = (file, cb) => write(file, cb(read(file)));

const main = () => {
  const API_VERSION_RE = '2[0-9][2-9][0-9]-[0-9]{2}-[0-9]{2}';
  const apiVersion = read('API_VERSION').trim();

  const replaceAPIVersion = (file, pattern) =>
    edit(file, (text) =>
      text.replace(
        new RegExp(pattern.replace('API_VERSION_RE', API_VERSION_RE), 'g'),
        `$1${apiVersion}$2`
      )
    );

  replaceAPIVersion('README.md', '(apiVersion: [\'"])API_VERSION_RE([\'"])');
  replaceAPIVersion(
    'examples/webhook-signing/typescript-node-express/express-ts.ts',
    '(apiVersion: [\'"])API_VERSION_RE([\'"])'
  );
  replaceAPIVersion(
    'package.json',
    '("types": "types/)API_VERSION_RE(/index.d.ts)'
  );
  replaceAPIVersion(
    'types/test/typescriptTest.ts',
    '(///<reference types=["\']\\.\\./)API_VERSION_RE([\'"])'
  );
  replaceAPIVersion(
    'types/test/typescriptTest.ts',
    '(apiVersion: [\'"])API_VERSION_RE([\'"])'
  );
};

if (require.main === module) {
  main();
}
