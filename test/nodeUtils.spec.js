'use strict';

require('../testUtils');

const nodeUtils = require('../lib/nodeUtils');
const expect = require('chai').expect;

describe('nodeUtils', () => {
  describe('safeExec', () => {
    let origExec;
    beforeEach(() => {
      origExec = nodeUtils._exec;
    });
    afterEach(() => {
      nodeUtils._exec = origExec;
    });

    it('runs exec', () => {
      const calls = [];
      nodeUtils._exec = (cmd, cb) => {
        calls.push([cmd, cb]);
      };

      function myCb() {}
      nodeUtils.safeExec('hello', myCb);
      expect(calls).to.deep.equal([['hello', myCb]]);
    });

    it('passes along normal errors', () => {
      const myErr = Error('hi');
      nodeUtils._exec = (cmd, cb) => {
        cb(myErr, null);
      };

      const calls = [];
      function myCb(err, x) {
        calls.push([err, x]);
      }
      nodeUtils.safeExec('hello', myCb);
      expect(calls).to.deep.equal([[myErr, null]]);
    });

    it('passes along thrown errors as normal callback errors', () => {
      const myErr = Error('hi');
      nodeUtils._exec = (cmd, cb) => {
        throw myErr;
      };

      const calls = [];
      function myCb(err, x) {
        calls.push([err, x]);
      }
      nodeUtils.safeExec('hello', myCb);
      expect(calls).to.deep.equal([[myErr, null]]);
    });

    it('handles being unable to require `child_process`', () => {
      nodeUtils._exec = null;

      let actualErr = null;
      let actualRes = null;
      function myCb(err, res) {
        actualErr = err;
        actualRes = res;
      }
      nodeUtils.safeExec('hello', myCb);
      expect(actualErr.toString()).to.equal(
        new Error('exec not available').toString()
      );
      expect(actualRes).to.equal(null);
    });
  });
});
