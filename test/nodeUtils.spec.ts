'use strict';

require('../testUtils');

import {expect} from 'chai';
import nodeUtils = require('../lib/nodeUtils');

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
      const calls: any[] = [];
      nodeUtils._exec = (cmd: string, cb: any): void => {
        calls.push([cmd, cb]);
      };

      function myCb(): void {}
      nodeUtils.safeExec('hello', myCb);
      expect(calls).to.deep.equal([['hello', myCb]]);
    });

    it('passes along normal errors', () => {
      const myErr = Error('hi');
      nodeUtils._exec = (cmd: string, cb: any): void => {
        cb(myErr, null);
      };

      const calls: any[] = [];
      function myCb(err, x): void {
        calls.push([err, x]);
      }
      nodeUtils.safeExec('hello', myCb);
      expect(calls).to.deep.equal([[myErr, null]]);
    });

    it('passes along thrown errors as normal callback errors', () => {
      const myErr = Error('hi');
      nodeUtils._exec = (cmd: string, cb: any): void => {
        throw myErr;
      };

      const calls: any[] = [];
      function myCb(err, x): void {
        calls.push([err, x]);
      }
      nodeUtils.safeExec('hello', myCb);
      expect(calls).to.deep.equal([[myErr, null]]);
    });
  });
});
