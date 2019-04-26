'use strict';

require('../testUtils');

var utils = require('../lib/utils');
var expect = require('chai').expect;
var Buffer = require('safe-buffer').Buffer;

describe('utils', function() {
  describe('makeURLInterpolator', function() {
    it('Interpolates values into a prepared template', function() {
      var template = utils.makeURLInterpolator('/some/url/{foo}/{baz}?ok=1');

      expect(
        template({foo: 1, baz: 2})
      ).to.equal('/some/url/1/2?ok=1');

      expect(
        template({foo: '', baz: ''})
      ).to.equal('/some/url//?ok=1');

      expect(
        // Test encoding:
        template({foo: 'FOO', baz: '__::baz::__'})
      ).to.equal('/some/url/FOO/__%3A%3Abaz%3A%3A__?ok=1');
    });
  });

  describe('stringifyRequestData', function() {
    it('Handles basic types', function() {
      expect(utils.stringifyRequestData({
        a: 1,
        b: 'foo',
      })).to.equal('a=1&b=foo');
    });

    it('Handles Dates', function() {
      expect(utils.stringifyRequestData({
        date: new Date('2009-02-13T23:31:30Z'),
        created: {
          gte: new Date('2009-02-13T23:31:30Z'),
          lt: new Date('2044-05-01T01:28:21Z'),
        },
      })).to.equal([
        'date=1234567890',
        'created[gte]=1234567890',
        'created[lt]=2345678901'
      ].join('&'));
    });

    it('Handles deeply nested object', function() {
      expect(utils.stringifyRequestData({
        a: {
          b: {
            c: {
              d: 2,
            },
          },
        },
      })).to.equal('a[b][c][d]=2');
    });

    it('Handles arrays of objects', function() {
      expect(utils.stringifyRequestData({
        a: [
          {b: 'c'},
          {b: 'd'},
        ],
      })).to.equal('a[0][b]=c&a[1][b]=d');
    })

    it('Handles indexed arrays', function() {
      expect(utils.stringifyRequestData({
        a: {
          0: {b: 'c'},
          1: {b: 'd'},
        },
      })).to.equal('a[0][b]=c&a[1][b]=d');
    })

    it('Creates a string from an object, handling shallow nested objects', function() {
      expect(utils.stringifyRequestData({
        test: 1,
        foo: 'baz',
        somethingElse: '::""%&',
        nested: {
          1: 2,
          'a n o t h e r': null,
        },
      })).to.equal([
        'test=1',
        'foo=baz',
        'somethingElse=%3A%3A%22%22%25%26',
        'nested[1]=2',
        'nested[a%20n%20o%20t%20h%20e%20r]=',
      ].join('&'));
    });
  });

  describe('protoExtend', function() {
    it('Provides an extension mechanism', function() {
      function A() {}
      A.extend = utils.protoExtend;
      var B = A.extend({
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

  describe('getDataFromArgs', function() {
    it('handles an empty list', function() {
      expect(utils.getDataFromArgs([])).to.deep.equal({});
    });
    it('handles a list with no object', function() {
      var args = [1, 3];
      expect(utils.getDataFromArgs(args)).to.deep.equal({});
      expect(args.length).to.equal(2);
    });
    it('ignores a hash with only options', function(done) {
      var args = [{api_key: 'foo'}];

      handleWarnings(function() {
        expect(utils.getDataFromArgs(args)).to.deep.equal({});
        expect(args.length).to.equal(1);

        done();
      }, function(message) {
        throw new Error('Should not have warned, but did: ' + message);
      });
    });
    it('warns if the hash contains both data and options', function(done) {
      var args = [{foo: 'bar', api_key: 'foo', idempotency_key: 'baz'}];

      handleWarnings(function() {
        utils.getDataFromArgs(args);
      }, function(message) {
        expect(message).to.equal(
          'Stripe: Options found in arguments (api_key, idempotency_key).' +
            ' Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.'
        );

        done();
      });
    });
    it('finds the data', function() {
      var args = [{foo: 'bar'}, {api_key: 'foo'}];
      expect(utils.getDataFromArgs(args)).to.deep.equal({foo: 'bar'});
      expect(args.length).to.equal(1);
    });
  });

  describe('getOptsFromArgs', function() {
    it('handles an empty list', function() {
      expect(utils.getOptionsFromArgs([])).to.deep.equal({
        auth: null,
        headers: {},
      });
    });
    it('handles an list with no object', function() {
      var args = [1, 3];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        headers: {},
      });
      expect(args.length).to.equal(2);
    });
    it('ignores a non-options object', function() {
      var args = [{foo: 'bar'}];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        headers: {},
      });
      expect(args.length).to.equal(1);
    });
    it('parses an api key', function() {
      var args = ['sk_test_iiiiiiiiiiiiiiiiiiiiiiii'];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
        headers: {},
      });
      expect(args.length).to.equal(0);
    });
    it('parses an idempotency key', function() {
      var args = [{foo: 'bar'}, {idempotency_key: 'foo'}];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        headers: {'Idempotency-Key': 'foo'},
      });
      expect(args.length).to.equal(1);
    });
    it('parses an api version', function() {
      var args = [{foo: 'bar'}, {stripe_version: '2003-03-30'}];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: null,
        headers: {'Stripe-Version': '2003-03-30'},
      });
      expect(args.length).to.equal(1);
    });
    it('parses an idempotency key and api key and api version (with data)', function() {
      var args = [{foo: 'bar'}, {
        api_key: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
        idempotency_key: 'foo',
        stripe_version: '2010-01-10',
      },];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
        headers: {
          'Idempotency-Key': 'foo',
          'Stripe-Version': '2010-01-10',
        },
      });
      expect(args.length).to.equal(1);
    });
    it('parses an idempotency key and api key and api version', function() {
      var args = [{
        api_key: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
        idempotency_key: 'foo',
        stripe_version: 'hunter2',
      },];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        auth: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
        headers: {
          'Idempotency-Key': 'foo',
          'Stripe-Version': 'hunter2',
        },
      });
      expect(args.length).to.equal(0);
    });
    it('warns if the hash contains something that does not belong', function(done) {
      var args = [{foo: 'bar'}, {
        api_key: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
        idempotency_key: 'foo',
        stripe_version: '2010-01-10',
        fishsticks: true,
        custard: true,
      },];

      handleWarnings(function() {
        utils.getOptionsFromArgs(args);
      }, function(message) {
        expect(message).to.equal(
          'Stripe: Invalid options found (fishsticks, custard); ignoring.'
        );

        done();
      });
    });
  });

  describe('secureCompare', function() {
    it('returns true given two equal things', function() {
      expect(utils.secureCompare('potato', 'potato')).to.equal(true);
    });

    it('returns false given two unequal things', function() {
      expect(utils.secureCompare('potato', 'tomato')).to.equal(false);
    });

    it('throws an error if not given two things to compare', function() {
      expect(function() { utils.secureCompare('potato'); }).to.throw();
    });
  });

  describe('removeEmpty', function() {
    it('removes empty properties and leaves non-empty ones', function() {
      expect(utils.removeEmpty({
        cat: 3,
        dog: false,
        rabbit: undefined,
        pointer: null,
      })).to.eql({
        cat: 3,
        dog: false,
      });
    });

    it('throws an error if not given two things to compare', function() {
      expect(function() { utils.removeEmpty('potato'); }).to.throw();
    });
  });

  describe('safeExec', function() {
    var origExec;
    beforeEach(function() {
      origExec = utils._exec;
    });
    afterEach(function() {
      utils._exec = origExec;
    });

    it('runs exec', function() {
      var calls = [];
      utils._exec = function(cmd, cb) {
        calls.push([cmd, cb]);
      }

      function myCb() {}
      utils.safeExec('hello', myCb);
      expect(calls).to.deep.equal([
        ['hello', myCb],
      ]);
    });

    it('passes along normal errors', function() {
      var myErr = Error('hi');
      utils._exec = function(cmd, cb) {
        cb(myErr, null)
      }

      var calls = [];
      function myCb(err, x) {
        calls.push([err, x]);
      }
      utils.safeExec('hello', myCb);
      expect(calls).to.deep.equal([
        [myErr, null],
      ]);
    });

    it('passes along thrown errors as normal callback errors', function() {
      var myErr = Error('hi');
      utils._exec = function(cmd, cb) {
        throw myErr;
      }

      var calls = [];
      function myCb(err, x) {
        calls.push([err, x]);
      }
      utils.safeExec('hello', myCb);
      expect(calls).to.deep.equal([
        [myErr, null],
      ]);
    });
  })

  describe('flattenAndStringify', function() {
    it('Stringifies primitive types', function() {
      expect(utils.flattenAndStringify({
        a: 1,
        b: 'foo',
        c: true,
        d: null,
      })).to.eql({'a': '1', 'b': 'foo', 'c': 'true', 'd': 'null'});
    });

    it('Flattens nested values', function() {
      expect(utils.flattenAndStringify({
        x: {
          a: 1,
          b: 'foo',
        },
      })).to.eql({'x[a]': '1', 'x[b]': 'foo'});
    });

    it('Does not flatten File objects', function() {
      expect(utils.flattenAndStringify({
        file: {
          data: 'foo'
        },
        x: {
          a: 1,
        },
      })).to.eql({'file': {data: 'foo'}, 'x[a]': '1'});
    });

    it('Does not flatten Buffer objects', function() {
      var buf = Buffer.from('Hi!');
      var flattened = utils.flattenAndStringify({
        buf: buf,
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
});

function handleWarnings(doWithShimmedConsoleWarn, onWarn) {
  if (typeof process.emitWarning !== 'function') {
    /* eslint-disable no-console */

    // Shim `console.warn`
    var _warn = console.warn;
    console.warn = onWarn;

    doWithShimmedConsoleWarn();

    // Un-shim `console.warn`,
    console.warn = _warn;

    /* eslint-enable no-console */
  } else {
    function onProcessWarn(warning) { /* eslint-disable-line no-inner-declarations */
      onWarn(warning.name + ': ' + warning.message);
    }

    process.on('warning', onProcessWarn);

    doWithShimmedConsoleWarn();

    process.nextTick(function() {
      process.removeListener('warning', onProcessWarn);
    })
  }
}
