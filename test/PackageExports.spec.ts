import * as childProcess from 'child_process';
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

    expect(resolved).to.match(/cjs\/stripe\.cjs\.extensibility\.js$/);
  });
});
