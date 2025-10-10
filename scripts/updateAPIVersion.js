#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const specPath = path.join(__dirname, '..', 'openapi');

// Load current version from openapi.json
const openapi = require(path.join(specPath, 'openapi.json'));
const version = openapi.info.version;

const newVersion = process.argv[2];

if (!newVersion) {
  console.error('Please provide a version');
  process.exit(1);
}

// Sanitize version input to prevent path traversal
// Only allow alphanumeric characters, dots, hyphens, and underscores
const versionPattern = /^[a-zA-Z0-9._-]+$/;
if (!versionPattern.test(newVersion)) {
  console.error(
    `Invalid version "${newVersion}". Version must only contain alphanumeric characters, dots, hyphens, and underscores.`
  );
  process.exit(1);
}

// Additional check to prevent directory traversal patterns
if (newVersion.includes('..') || newVersion.includes('/') || newVersion.includes('\\')) {
  console.error(
    `Invalid version "${newVersion}". Version must not contain path separators or directory traversal patterns.`
  );
  process.exit(1);
}

const newVersionPath = path.join(specPath, `openapi/${newVersion}.json`);

if (!fs.existsSync(newVersionPath)) {
  console.error(`Version ${newVersion} not found at ${newVersionPath}`);
  process.exit(1);
}

// Update openapi.json
openapi.info.version = newVersion;
fs.writeFileSync(
  path.join(specPath, 'openapi.json'),
  JSON.stringify(openapi, null, 2)
);

// Update lib/apiVersion.js
const apiVersionPath = path.join(__dirname, '..', 'lib', 'apiVersion.js');
const apiVersionContent = `// File generated from our OpenAPI spec

'use strict';

module.exports = '${newVersion}';
`;
fs.writeFileSync(apiVersionPath, apiVersionContent);

console.log(`Updated API version to ${newVersion}`);
