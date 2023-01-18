'use strict';

require('../testUtils');

import {expect} from 'chai';
import DefaultPlatformFunctions = require('../lib/platform/DefaultPlatformFunctions');
import NodePlatformFunctions = require('../lib/platform/NodePlatformFunctions');

const platforms = {
  default: new DefaultPlatformFunctions(),
  node: new NodePlatformFunctions(),
};

for (const platform in platforms) {
  const platformFunctions = platforms[platform];
  const isNodeEnvironment = platform === 'node';

  describe(`${platform} platform functions`, () => {
    describe('uuid', () => {
      describe('should use crypto.randomUUID if it exists', () => {
        const crypto = require('crypto');
        let randomUUID$;
        let called;
        beforeEach(() => {
          // if it's available, mock it and ensure it's called
          // otherwise, skip this whole operation
          if (isNodeEnvironment && crypto.randomUUID) {
            called = false;
            randomUUID$ = crypto.randomUUID;
            crypto.randomUUID = (): string => {
              called = true;
              return 'no, YOU you id';
            };
          }
        });
        afterEach(() => {
          if (randomUUID$) {
            crypto.randomUUID = randomUUID$;
          }
        });
        it('is called if available', () => {
          if (randomUUID$) {
            expect(platformFunctions.uuid4()).to.equal('no, YOU you id');
            expect(called).to.equal(isNodeEnvironment);
          }
        });

        it('returns a valid v4 UUID without it', () => {
          crypto.randomUUID = null;
          expect(platformFunctions.uuid4()).to.match(
            // regex from https://createuuid.com/validator/, specifically for v4
            /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
          );
        });
      });

      it('should return a well-formatted v4 UUID', () => {
        expect(platformFunctions.uuid4()).to.match(
          // regex from https://createuuid.com/validator/, specifically for v4
          /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
        );
        // further test: could spy on crypto.randomUUID to ensure it's being used, if available
        // whether that's useful is a race between using jest/sinon for these tests and dropping support for node < 14
      });
    });

    describe('secureCompare with crypto.timingSafeEqual', () => {
      it('returns true given two equal things', () => {
        expect(platformFunctions.secureCompare('potato', 'potato')).to.equal(
          true
        );
      });

      it('returns false given two unequal things', () => {
        expect(platformFunctions.secureCompare('potato', 'tomato')).to.equal(
          false
        );
      });

      it('returns false given things of unequal lengths', () => {
        expect(platformFunctions.secureCompare('potat', 'tomato')).to.equal(
          false
        );
      });

      it('throws an error if not given two things to compare', () => {
        expect(() => {
          platformFunctions.secureCompare('potato');
        }).to.throw();
      });
    });

    describe('secureCompare without crypto.timingSafeEqual', () => {
      const crypto = require('crypto');
      let timingSafeEqual$;
      beforeEach(() => {
        // if it's available, mock it and ensure it's called
        // otherwise, skip this whole operation
        if (isNodeEnvironment && crypto.timingSafeEqual) {
          timingSafeEqual$ = crypto.timingSafeEqual;
          crypto.timingSafeEqual = null;
        }
      });

      afterEach(() => {
        if (timingSafeEqual$) {
          crypto.timingSafeEqual = timingSafeEqual$;
        }
      });

      it('returns true given two equal things', () => {
        expect(platformFunctions.secureCompare('potato', 'potato')).to.equal(
          true
        );
      });

      it('returns false given two unequal things', () => {
        expect(platformFunctions.secureCompare('potato', 'tomato')).to.equal(
          false
        );
      });

      it('returns false given two unequal things', () => {
        expect(platformFunctions.secureCompare('potato', 'tomato')).to.equal(
          false
        );
      });

      it('throws an error if not given two things to compare', () => {
        expect(() => {
          platformFunctions.secureCompare('potato');
        }).to.throw();
      });
    });

    describe('safeExec', () => {
      let origExec;
      beforeEach(() => {
        origExec = platformFunctions._exec;
      });
      afterEach(() => {
        platformFunctions._exec = origExec;
      });

      it('throws in non-Node environments', () => {
        expect(platformFunctions.safeExec.bind('hello', () => {})).to.throw();
      });

      if (!isNodeEnvironment) {
        // No need to run further tests on non-Node environments
        return;
      }

      it('runs exec', () => {
        const calls: any[] = [];
        platformFunctions._exec = (cmd: string, cb: any): void => {
          calls.push([cmd, cb]);
        };

        function myCb(): void {}
        platformFunctions.safeExec('hello', myCb);
        expect(calls).to.deep.equal([['hello', myCb]]);
      });

      it('passes along normal errors', () => {
        const myErr = Error('hi');
        platformFunctions._exec = (cmd: string, cb: any): void => {
          cb(myErr, null);
        };

        const calls: any[] = [];
        function myCb(err, x): void {
          calls.push([err, x]);
        }
        platformFunctions.safeExec('hello', myCb);
        expect(calls).to.deep.equal([[myErr, null]]);
      });

      it('passes along thrown errors as normal callback errors', () => {
        const myErr = Error('hi');
        platformFunctions._exec = (cmd: string, cb: any): void => {
          throw myErr;
        };

        const calls: any[] = [];
        function myCb(err, x): void {
          calls.push([err, x]);
        }
        platformFunctions.safeExec('hello', myCb);
        expect(calls).to.deep.equal([[myErr, null]]);
      });
    });
  });
}
