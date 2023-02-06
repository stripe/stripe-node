/* eslint-disable new-cap */

'use strict';

const expect = require('chai').expect;
import child_process = require('child_process').expect;
const testUtils = require('../testUtils');

describe('Integration test', function() {
  this.timeout(30000);
  const runTestProject = (projectName: string): void => {
    const script = `
      cd testProjects/${projectName} &&
      npm install &&
      npm run lint &&
      npm run runtestproject -- ${testUtils.getUserStripeKey()}
    `;
    child_process.execSync(script);
  };

  it('should work with CommonJS imports', () => {
    runTestProject('cjs');
  });

  it('should work with ESModule imports', function() {
    // Node supports ES Modules starting at v12
    if (parseInt(process.versions.node.split('.')[0], 10) <= 12) {
      this.skip();
    }

    runTestProject('mjs');
    runTestProject('mjs-ts');
  });

  const runTestCloudflareProject = (projectName: string): void => {
    if (process.versions.node < '16.13') {
      console.log('Wrangler requires at least node.js v16.13.0, skipping test');
      return;
    }
    const script = `
      cd testProjects/${projectName} &&
      npm install &&
      npm run build
    `;
    child_process.execSync(script);
  };

  it('should build successfully in Cloudflare Workers', function() {
    runTestCloudflareProject('cloudflare-worker');
  });

  it('should build successfully in Cloudflare Pages Functions', function() {
    runTestCloudflareProject('cloudflare-pages');
  });

  const runWebhookTest = (projectName: string): void => {
    const script = `
      cd examples/webhook-signing/test &&
      npm install &&
      ./main.ts ../${projectName}
    `;
    console.log(child_process.execSync(script).toString());
  };

  it('Webhook sample express', function() {
    runWebhookTest('express');
  });

  it('Webhook sample koa', function() {
    runWebhookTest('koa');
  });
});
