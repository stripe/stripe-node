// Usage: node scripts/updateAPIVersion.js 2020-08-27

'use strict';

const fs = require('fs');
const path = require('path');

const specPath = process.argv[2];
if (!specPath) {
  throw new Error('Please provide a path to the spec to update to.');
}

// Prevent path traversal by ensuring the spec path is within the CWD.
// We resolve the path and its real, canonical form to prevent symlink attacks.
const resolvedSpecPath = path.resolve(process.cwd(), specPath);
const realCwd = fs.realpathSync(process.cwd());
let realSpecPath;
try {
  realSpecPath = fs.realpathSync(resolvedSpecPath);
} catch (err) {
  // Re-throw not found errors with a more helpful message.
  if (err.code === 'ENOENT') {
    throw new Error(`Could not find spec file at path: ${specPath}`);
  }
  throw err;
}

if (!realSpecPath.startsWith(realCwd + path.sep) && realSpecPath !== realCwd) {
  throw new Error(
    `Potential path traversal detected. ` +
      `Spec path must be within the current working directory.`
  );
}

const openapi = require(realSpecPath);

const apiVersion = openapi.info.version;
if (!apiVersion) {
  throw new Error('Could not find an API version in the spec.');
}

const packagePath = path.join(__dirname, '/../package.json');
const packageFile = require(packagePath);

packageFile.stripe.apiVersion = apiVersion;

fs.writeFileSync(packagePath, JSON.stringify(packageFile, null, 2) + '\n');

console.log(`Updated API version to ${apiVersion}!`);
