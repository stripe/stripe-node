import * as childProcess from 'child_process';
import {FAKE_API_KEY} from './testUtils.js';

const nodeVersion = parseInt(process.versions.node.split('.')[0], 10);

describe('Integration test', function() {
  this.timeout(50000);
  const testExec = (cmd: string): Promise<void> => {
    const child = childProcess.exec(cmd);

    let out = '';
    child.stdout?.on('data', (chunk) => {
      out += chunk;
    });
    child.stderr?.on('data', (chunk) => {
      out += chunk;
    });

    return new Promise((resolve, reject) => {
      child.on('exit', (code) => {
        if (code == 0) {
          resolve();
        } else {
          reject(new Error('Test failed: ' + out));
        }
      });
    });
  };
  const runTestProject = (projectName: string): Promise<void> => {
    return testExec(`
      cd testProjects/${projectName} && rm -rf node_modules &&
      npm install &&
      npm run lint &&
      npm run runtestproject -- ${FAKE_API_KEY}
    `);
  };

  it('should work with CommonJS imports', () => runTestProject('cjs'));

  it('should work with ESModule imports', async function() {
    // Node supports ES Modules starting at v12
    if (nodeVersion <= 12) {
      this.skip();
    }

    await runTestProject('mjs');
  });

  it('should work with Typescript ESModule imports', async function() {
    // Node supports ES Modules starting at v12
    if (nodeVersion <= 12) {
      this.skip();
    }

    await runTestProject('mjs-ts');
  });

  describe('esbuild', () => {
    it('should not change error.type when minified', async function() {
      // Node supports ES Modules starting at v12
      if (nodeVersion <= 12) {
        this.skip();
      }

      await testExec(`
        cd testProjects/esbuild && rm -rf node_modules && rm -rf dist
        npm install &&
        npm run build &&
        npm run start
      `);
    });
  });

  const runTestCloudflareProject = (projectName: string): Promise<void> => {
    if (process.versions.node < '16.13') {
      console.log('Wrangler requires at least node.js v16.13.0, skipping test');
      return Promise.resolve();
    }
    const script = `
      cd testProjects/${projectName} &&
      npm install &&
      npm run build
    `;
    return testExec(script);
  };

  it('should build successfully in Cloudflare Workers', function() {
    runTestCloudflareProject('cloudflare-worker');
  });

  it('should build successfully in Cloudflare Pages Functions', function() {
    runTestCloudflareProject('cloudflare-pages');
  });

  const runWebhookTest = (projectName: string): Promise<void> => {
    if (nodeVersion < 14) {
      console.log('Webhook test requires at least node.js v14, skipping test');
      return Promise.resolve();
    }

    const script = `
      (cd examples/webhook-signing/${projectName} &&
        rm -rf node_modules &&
        npm install) &&
      cd examples/webhook-signing/test && rm -rf node_modules &&
      npm install &&
      ./main.ts ../${projectName}
    `;
    return testExec(script);
  };

  it('Webhook sample express', () => runWebhookTest('express'));

  it('Webhook sample koa', () => runWebhookTest('koa'));

  it('Webhook sample nextjs', function() {
    // Next.js supports Node.js >=16
    if (nodeVersion < 16) {
      this.skip();
    }

    runWebhookTest('nextjs');
  });

  it('Webhook sample deno', () => runWebhookTest('deno'));

  it('Webhook sample nestjs', function() {
    // Next.js supports Node.js >=16
    if (nodeVersion < 16) {
      this.skip();
    }

    runWebhookTest('nestjs');
  });
});
