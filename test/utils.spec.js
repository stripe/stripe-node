'use strict';

require('../testUtils');

const utils = require('../lib/utils');
const expect = require('chai').expect;

describe('utils', () => {
  describe('makeURLInterpolator', () => {
    it('Interpolates values into a prepared template', () => {
      const template = utils.makeURLInterpolator('/some/url/{foo}/{baz}?ok=1');

      expect(template({foo: 1, baz: 2})).to.equal('/some/url/1/2?ok=1');

      expect(template({foo: '', baz: ''})).to.equal('/some/url//?ok=1');

      expect(
        // Test encoding:
        template({foo: 'FOO', baz: '__::baz::__'})
      ).to.equal('/some/url/FOO/__%3A%3Abaz%3A%3A__?ok=1');
    });
  });

  describe('extractUrlParams', () => {
    it('works with multiple params', () => {
      expect(
        utils.extractUrlParams(
          'accounts/{accountId}/external_accounts/{externalAccountId}'
        )
      ).to.deep.equal(['accountId', 'externalAccountId']);
    });
  });

  describe('stringifyRequestData', () => {
    it('Handles basic types', () => {
      expect(
        utils.stringifyRequestData({
          a: 1,
          b: 'foo',
        })
      ).to.equal('a=1&b=foo');
    });

    it('Handles Dates', () => {
      expect(
        utils.stringifyRequestData({
          date: new Date('2009-02-13T23:31:30Z'),
          created: {
            gte: new Date('2009-02-13T23:31:30Z'),
            lt: new Date('2044-05-01T01:28:21Z'),
          },
        })
      ).to.equal(
        [
          'date=1234567890',
          'created[gte]=1234567890',
          'created[lt]=2345678901',
        ].join('&')
      );
    });

    it('Handles deeply nested object', () => {
      expect(
        utils.stringifyRequestData({
          a: {
            b: {
              c: {
                d: 2,
              },
            },
          },
        })
      ).to.equal('a[b][c][d]=2');
    });

    it('Handles arrays of objects', () => {
      expect(
        utils.stringifyRequestData({
          a: [{b: 'c'}, {b: 'd'}],
        })
      ).to.equal('a[0][b]=c&a[1][b]=d');
    });

    it('Handles indexed arrays', () => {
      expect(
        utils.stringifyRequestData({
          a: {
            0: {b: 'c'},
            1: {b: 'd'},
          },
        })
      ).to.equal('a[0][b]=c&a[1][b]=d');
    });

    it('Creates a string from an object, handling shallow nested objects', () => {
      expect(
        utils.stringifyRequestData({
          test: 1,
          foo: 'baz',
          somethingElse: '::""%&',
          nested: {
            1: 2,
            'a n o t h e r': null,
          },
        })
      ).to.equal(
        [
          'test=1',
          'foo=baz',
          'somethingElse=%3A%3A%22%22%25%26',
          'nested[1]=2',
          'nested[a%20n%20o%20t%20h%20e%20r]=',
        ].join('&')
      );
    });
  });

  describe('protoExtend', () => {
    it('Provides an extension mechanism', () => {
      function A() {}
      A.extend = utils.protoExtend;
      const B = A.extend({
        constructor: function() {
          this.called = true;
        },
      });
      expect(new B()).to.be.an.instanceof(A);
      expect(new B()).to.be.an.instanceof(B);
      expect(new B().called).to.equal(true);
      expect(B.extend === utils.protoExtend).to.equal(true);
    });
  });

  describe('getDataFromArgs', () => {
    it('handles an empty list', () => {
      expect(utils.getDataFromArgs([])).to.deep.equal({});
    });

    it('handles a list with no object', () => {
      const args = [1, 3];
      expect(utils.getDataFromArgs(args)).to.deep.equal({});
      expect(args.length).to.equal(2);
    });

    it('ignores a hash with only options', (done) => {
      const args = [{apiKey: 'foo'}];

      handleWarnings(
        () => {
          expect(utils.getDataFromArgs(args)).to.deep.equal({});
          expect(args.length).to.equal(1);

          done();
        },
        (message) => {
          throw new Error(`Should not have warned, but did: ${message}`);
        }
      );
    });

    it('warns if the hash contains both data and options', (done) => {
      const args = [{foo: 'bar', apiKey: 'foo', idempotencyKey: 'baz'}];

      handleWarnings(
        () => {
          utils.getDataFromArgs(args);
        },
        (message) => {
          expect(message).to.equal(
            'Stripe: Options found in arguments (apiKey, idempotencyKey).' +
              ' Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.'
          );

          done();
        }
      );
    });

    it('finds the data', () => {
      const args = [{foo: 'bar'}, {apiKey: 'foo'}];
      expect(utils.getDataFromArgs(args)).to.deep.equal({foo: 'bar'});
      expect(args.length).to.equal(1);
    });
  });

  describe('getOptsFromArgs', () => {
    it('handles an empty list', () => {
      expect(utils.getOptionsFromArgs([])).to.deep.equal({
        auth: null,
        headers: {},
        settings: {},
      });
    });

    it('handles an list with no object', () => {
      const args = [1, 3];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        headers: {},
        settings: {},
      });
      expect(args.length).to.equal(2);
    });

    it('ignores a non-options object', () => {
      const args = [{foo: 'bar'}];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        headers: {},
        settings: {},
      });
      expect(args.length).to.equal(1);
    });

    it('parses an api key', () => {
      const args = ['sk_test_iiiiiiiiiiiiiiiiiiiiiiii'];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
        headers: {},
        settings: {},
      });
      expect(args.length).to.equal(0);
    });

    it('assumes any string is an api key', () => {
      const args = ['yolo'];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: 'yolo',
        headers: {},
        settings: {},
      });
      expect(args.length).to.equal(0);
    });

    it('parses an idempotency key', () => {
      const args = [{foo: 'bar'}, {idempotencyKey: 'foo'}];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        headers: {'Idempotency-Key': 'foo'},
        settings: {},
      });
      expect(args.length).to.equal(1);
    });

    it('parses an api version', () => {
      const args = [{foo: 'bar'}, {apiVersion: '2003-03-30'}];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        headers: {'Stripe-Version': '2003-03-30'},
        settings: {},
      });
      expect(args.length).to.equal(1);
    });

    it('parses an idempotency key and api key and api version (with data)', () => {
      const args = [
        {foo: 'bar'},
        {
          apiKey: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
          idempotencyKey: 'foo',
          apiVersion: '2010-01-10',
        },
      ];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
        headers: {
          'Idempotency-Key': 'foo',
          'Stripe-Version': '2010-01-10',
        },
        settings: {},
      });
      expect(args.length).to.equal(1);
    });

    it('parses an idempotency key and api key and api version', () => {
      const args = [
        {
          apiKey: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
          idempotencyKey: 'foo',
          apiVersion: 'hunter2',
        },
      ];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
        headers: {
          'Idempotency-Key': 'foo',
          'Stripe-Version': 'hunter2',
        },
        settings: {},
      });
      expect(args.length).to.equal(0);
    });

    it('parses additional per-request settings', () => {
      const args = [
        {
          maxNetworkRetries: 5,
          timeout: 1000,
        },
      ];

      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        headers: {},
        settings: {
          maxNetworkRetries: 5,
          timeout: 1000,
        },
      });
    });

    it('parses snake case for backwards compatibility', () => {
      return new Promise((resolve, reject) => {
        const args = [
          {
            api_key: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
            idempotency_key: 'key',
            stripe_account: 'acct_123',
            stripe_version: '2019-08-08',
          },
        ];
        const desiredWarnings = [
          "Stripe: 'api_key' is deprecated; use 'apiKey' instead.",
          "Stripe: 'idempotency_key' is deprecated; use 'idempotencyKey' instead.",
          "Stripe: 'stripe_account' is deprecated; use 'stripeAccount' instead.",
          "Stripe: 'stripe_version' is deprecated; use 'apiVersion' instead.",
        ];

        const warnings = [];
        const onWarn = (message) => {
          warnings.push(message);
          if (warnings.length === desiredWarnings.length) {
            expect(warnings).to.deep.equal(desiredWarnings);
            resolve();
          }
        };
        handleWarnings(() => {
          expect(utils.getOptionsFromArgs(args)).to.deep.equal({
            auth: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
            headers: {
              'Idempotency-Key': 'key',
              'Stripe-Version': '2019-08-08',
              'Stripe-Account': 'acct_123',
            },
            settings: {},
          });
        }, onWarn);
      });
    });

    it('parses stripeVersion for backwards compatibility', () => {
      return new Promise((resolve, reject) => {
        const args = [
          {
            apiKey: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
            stripeVersion: '2019-08-08',
          },
        ];
        const desiredWarnings = [
          "Stripe: 'stripeVersion' is deprecated; use 'apiVersion' instead.",
        ];

        const warnings = [];
        const onWarn = (message) => {
          warnings.push(message);
          if (warnings.length === desiredWarnings.length) {
            expect(warnings).to.deep.equal(desiredWarnings);
            resolve();
          }
        };
        handleWarnings(() => {
          expect(utils.getOptionsFromArgs(args)).to.deep.equal({
            auth: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
            headers: {
              'Stripe-Version': '2019-08-08',
            },
            settings: {},
          });
        }, onWarn);
      });
    });

    it('errors if you pass both a deprecated and non-deprecated version of the same param', () => {
      const args = [
        {
          stripeVersion: 'bad',
          apiVersion: 'good',
        },
      ];
      expect(() => {
        utils.getOptionsFromArgs(args);
      }).to.throw(
        "Both 'apiVersion' and 'stripeVersion' were provided; please remove 'stripeVersion', which is deprecated."
      );
    });

    it('warns if the hash contains something that does not belong', (done) => {
      const args = [
        {foo: 'bar'},
        {
          apiKey: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
          idempotencyKey: 'foo',
          apiVersion: '2010-01-10',
          fishsticks: true,
          custard: true,
        },
      ];

      handleWarnings(
        () => {
          utils.getOptionsFromArgs(args);
        },
        (message) => {
          expect(message).to.equal(
            'Stripe: Invalid options found (fishsticks, custard); ignoring.'
          );

          done();
        }
      );
    });
  });

  describe('secureCompare', () => {
    it('returns true given two equal things', () => {
      expect(utils.secureCompare('potato', 'potato')).to.equal(true);
    });

    it('returns false given two unequal things', () => {
      expect(utils.secureCompare('potato', 'tomato')).to.equal(false);
    });

    it('throws an error if not given two things to compare', () => {
      expect(() => {
        utils.secureCompare('potato');
      }).to.throw();
    });
  });

  describe('removeNullish', () => {
    it('removes empty properties and leaves non-empty ones', () => {
      expect(
        utils.removeNullish({
          cat: 3,
          dog: false,
          rabbit: undefined,
          pointer: null,
        })
      ).to.eql({
        cat: 3,
        dog: false,
      });
    });

    it('throws an error if not given an object', () => {
      expect(() => {
        utils.removeNullish('potato');
      }).to.throw();
    });
  });

  describe('safeExec', () => {
    let origExec;
    beforeEach(() => {
      origExec = utils._exec;
    });
    afterEach(() => {
      utils._exec = origExec;
    });

    it('runs exec', () => {
      const calls = [];
      utils._exec = (cmd, cb) => {
        calls.push([cmd, cb]);
      };

      function myCb() {}
      utils.safeExec('hello', myCb);
      expect(calls).to.deep.equal([['hello', myCb]]);
    });

    it('passes along normal errors', () => {
      const myErr = Error('hi');
      utils._exec = (cmd, cb) => {
        cb(myErr, null);
      };

      const calls = [];
      function myCb(err, x) {
        calls.push([err, x]);
      }
      utils.safeExec('hello', myCb);
      expect(calls).to.deep.equal([[myErr, null]]);
    });

    it('passes along thrown errors as normal callback errors', () => {
      const myErr = Error('hi');
      utils._exec = (cmd, cb) => {
        throw myErr;
      };

      const calls = [];
      function myCb(err, x) {
        calls.push([err, x]);
      }
      utils.safeExec('hello', myCb);
      expect(calls).to.deep.equal([[myErr, null]]);
    });

    it('handles being unable to require `child_process`', () => {
      utils._exec = null;

      var actualErr = null;
      var actualRes = null;
      function myCb(err, res) {
        actualErr = err;
        actualRes = res;
      }
      utils.safeExec('hello', myCb);
      expect(actualErr.toString()).to.equal(
        new Error('exec not available').toString()
      );
      expect(actualRes).to.equal(null);
    });
  });

  describe('flattenAndStringify', () => {
    it('Stringifies primitive types', () => {
      expect(
        utils.flattenAndStringify({
          a: 1,
          b: 'foo',
          c: true,
          d: null,
        })
      ).to.eql({a: '1', b: 'foo', c: 'true', d: 'null'});
    });

    it('Flattens nested values', () => {
      expect(
        utils.flattenAndStringify({
          x: {
            a: 1,
            b: 'foo',
          },
        })
      ).to.eql({'x[a]': '1', 'x[b]': 'foo'});
    });

    it('Does not flatten File objects', () => {
      expect(
        utils.flattenAndStringify({
          file: {
            data: 'foo',
          },
          x: {
            a: 1,
          },
        })
      ).to.eql({file: {data: 'foo'}, 'x[a]': '1'});
    });

    it('Does not flatten Buffer objects', () => {
      const buf = Buffer.from('Hi!');
      const flattened = utils.flattenAndStringify({
        buf,
        x: {
          a: 1,
        },
      });
      expect(flattened).to.have.property('buf');
      expect(flattened.buf).to.deep.equal(buf);
      expect(flattened).to.have.property('x[a]');
      expect(flattened['x[a]']).to.equal('1');
    });
  });

  describe('validateInteger', () => {
    it("Returns the given value if it's a valid integer", () => {
      const cases = [1, 0x123, 1e3, Number.MAX_SAFE_INTEGER];

      cases.forEach((int) => {
        expect(utils.validateInteger('magicNumber', int)).to.equal(int);
      });
    });

    it('Throws an error if the value is not an integer', () => {
      const cases = ['foo', 1.2, Number.POSITIVE_INFINITY];

      cases.forEach((val) => {
        expect(() => {
          utils.validateInteger('magicNumber', val);
        }).to.throw();
      });
    });

    it('Returns a default value if n is not provided', () => {
      const expected = 1000;
      [null, undefined].forEach((t) => {
        expect(utils.validateInteger('magicNumber', t, expected)).to.equal(
          expected
        );
      });
    });

    it('Throws if neither value nor default is set', () => {
      expect(() => {
        utils.validateInteger('magicNumber');
      }).to.throw();
    });
  });
});

function handleWarnings(doWithShimmedConsoleWarn, onWarn) {
  if (typeof process.emitWarning !== 'function') {
    /* eslint-disable no-console */

    // Shim `console.warn`
    const _warn = console.warn;
    console.warn = onWarn;

    doWithShimmedConsoleWarn();

    // Un-shim `console.warn`,
    console.warn = _warn;

    /* eslint-enable no-console */
  } else {
    /* eslint-disable-next-line no-inner-declarations */
    function onProcessWarn(warning) {
      onWarn(`${warning.name}: ${warning.message}`);
    }

    process.on('warning', onProcessWarn);

    doWithShimmedConsoleWarn();

    process.nextTick(() => {
      process.removeListener('warning', onProcessWarn);
    });
  }
}
