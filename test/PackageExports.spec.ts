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
});
