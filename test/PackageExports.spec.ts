import * as childProcess from 'child_process';
import * as path from 'path';
import {expect} from 'chai';

describe('package exports', () => {
  it('prefers extensibility over browser when both conditions are present', () => {
    const resolved = childProcess
      .execFileSync(
        process.execPath,
        [
          '--conditions=browser',
          '--conditions=extensibility',
          '-p',
          "require.resolve('stripe')",
        ],
        {cwd: process.cwd()}
      )
      .toString()
      .trim();

    expect(path.basename(path.dirname(resolved))).to.equal('cjs');
    expect(path.basename(resolved)).to.equal('stripe.cjs.extensibility.js');
  });

  it('does not load the AWS SDK', () => {
    // Workload identity support lives entirely behind a structural contract, so
    // the core package must not reach for a cloud provider SDK -- directly or
    // transitively -- just by being imported and used.
    const loaded = childProcess
      .execFileSync(
        process.execPath,
        [
          '-e',
          `const Stripe = require('stripe');
           new Stripe('sk_test_123');
           typeof Stripe.forWorkloadIdentity === 'function' || process.exit(2);
           console.log(
             Object.keys(require.cache)
               .filter((p) => p.includes('@aws-sdk') || p.includes('aws-sdk'))
               .join(',')
           );`,
        ],
        {cwd: process.cwd()}
      )
      .toString()
      .trim();

    expect(loaded).to.equal('');
  });

  it('declares no runtime dependencies', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const pkg = require('../package.json');
    expect(pkg.dependencies).to.deep.equal({});
  });
});
