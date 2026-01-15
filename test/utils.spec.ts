// @ts-nocheck
import * as utils from '../src/utils.js';
import {expect} from 'chai';

describe('utils', () => {
  describe('makeURLInterpolator', () => {
    it('Interpolates values into a prepared template', () => {
      const template = utils.makeURLInterpolator('/some/url/{foo}/{baz}?ok=1');

      expect(template({foo: 1, baz: 2})).to.equal('/some/url/1/2?ok=1');

      expect(template({foo: '', baz: ''})).to.equal('/some/url//?ok=1');

      expect(template({foo: 0, baz: 't'})).to.equal('/some/url/0/t?ok=1');

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

  describe('queryStringifyRequestData', () => {
    it('Handles basic types', () => {
      expect(
        utils.queryStringifyRequestData({
          a: 1,
          b: 'foo',
        })
      ).to.equal('a=1&b=foo');
    });

    it('Handles Dates', () => {
      expect(
        utils.queryStringifyRequestData({
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
        utils.queryStringifyRequestData({
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
        utils.queryStringifyRequestData({
          a: [{b: 'c'}, {b: 'd'}],
        })
      ).to.equal('a[0][b]=c&a[1][b]=d');
    });

    it('Handles indexed arrays', () => {
      expect(
        utils.queryStringifyRequestData({
          a: {
            0: {b: 'c'},
            1: {b: 'd'},
          },
        })
      ).to.equal('a[0][b]=c&a[1][b]=d');
    });

    it('Creates a string from an object, handling shallow nested objects', () => {
      expect(
        utils.queryStringifyRequestData({
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

    it('Handles v2 arrays', () => {
      expect(
        utils.queryStringifyRequestData(
          {
            include: ['a', 'b'],
          },
          'v2'
        )
      ).to.equal('include[0]=a&include[1]=b');
    });

    // Additional comprehensive tests for edge cases
    it('Handles empty object', () => {
      expect(utils.queryStringifyRequestData({})).to.equal('');
    });

    it('Handles empty string value', () => {
      expect(utils.queryStringifyRequestData({a: ''})).to.equal('a=');
    });

    it('Handles boolean values', () => {
      expect(
        utils.queryStringifyRequestData({
          t: true,
          f: false,
        })
      ).to.equal('t=true&f=false');
    });

    it('Handles zero and negative numbers', () => {
      expect(
        utils.queryStringifyRequestData({
          zero: 0,
          negative: -42,
          float: 3.14,
        })
      ).to.equal('zero=0&negative=-42&float=3.14');
    });

    it('Handles undefined values by omitting them', () => {
      expect(
        utils.queryStringifyRequestData({
          a: 1,
          b: undefined,
          c: 3,
        })
      ).to.equal('a=1&c=3');
    });

    it('Handles null values as empty string', () => {
      expect(
        utils.queryStringifyRequestData({
          a: null,
        })
      ).to.equal('a=');
    });

    it('Handles arrays of primitives', () => {
      expect(
        utils.queryStringifyRequestData({
          arr: [1, 2, 3],
        })
      ).to.equal('arr[0]=1&arr[1]=2&arr[2]=3');
    });

    it('Handles empty arrays', () => {
      expect(
        utils.queryStringifyRequestData({
          arr: [],
        })
      ).to.equal('');
    });

    it('Handles arrays with mixed types', () => {
      expect(
        utils.queryStringifyRequestData({
          arr: ['a', 1, true],
        })
      ).to.equal('arr[0]=a&arr[1]=1&arr[2]=true');
    });

    it('Handles special characters in values', () => {
      expect(
        utils.queryStringifyRequestData({
          special: '!@#$%^&*()+=',
        })
      ).to.equal('special=%21%40%23%24%25%5E%26%2A%28%29%2B%3D');
    });

    it('Handles unicode characters', () => {
      expect(
        utils.queryStringifyRequestData({
          emoji: '\u{1F600}',
          chinese: '\u4E2D\u6587',
        })
      ).to.equal('emoji=%F0%9F%98%80&chinese=%E4%B8%AD%E6%96%87');
    });

    it('Handles keys with special characters', () => {
      expect(
        utils.queryStringifyRequestData({
          'key with spaces': 'value',
        })
      ).to.equal('key%20with%20spaces=value');
    });

    it('Handles nested arrays of objects', () => {
      expect(
        utils.queryStringifyRequestData({
          items: [
            {name: 'a', qty: 1},
            {name: 'b', qty: 2},
          ],
        })
      ).to.equal(
        'items[0][name]=a&items[0][qty]=1&items[1][name]=b&items[1][qty]=2'
      );
    });

    it('Handles deeply nested arrays', () => {
      expect(
        utils.queryStringifyRequestData({
          a: {
            b: [{c: 1}, {c: 2}],
          },
        })
      ).to.equal('a[b][0][c]=1&a[b][1][c]=2');
    });

    it('Handles Date at midnight UTC', () => {
      expect(
        utils.queryStringifyRequestData({
          date: new Date('2000-01-01T00:00:00Z'),
        })
      ).to.equal('date=946684800');
    });

    it('Handles nested empty objects', () => {
      expect(
        utils.queryStringifyRequestData({
          a: {},
        })
      ).to.equal('');
    });

    it('Handles mixed nested structures', () => {
      expect(
        utils.queryStringifyRequestData({
          user: {
            name: 'John',
            emails: ['a@b.com', 'c@d.com'],
            address: {
              city: 'NYC',
            },
          },
        })
      ).to.equal(
        'user[name]=John&user[emails][0]=a%40b.com&user[emails][1]=c%40d.com&user[address][city]=NYC'
      );
    });

    it('Handles sparse arrays by including indices', () => {
      const sparseArray: (number | undefined)[] = [];
      sparseArray[0] = 1;
      sparseArray[2] = 3;
      expect(
        utils.queryStringifyRequestData({
          arr: sparseArray,
        })
      ).to.equal('arr[0]=1&arr[2]=3');
    });

    it('Handles objects with numeric string keys', () => {
      expect(
        utils.queryStringifyRequestData({
          obj: {
            '0': 'zero',
            '1': 'one',
          },
        })
      ).to.equal('obj[0]=zero&obj[1]=one');
    });

    it('Preserves order of object keys', () => {
      expect(
        utils.queryStringifyRequestData({
          z: 1,
          a: 2,
          m: 3,
        })
      ).to.equal('z=1&a=2&m=3');
    });

    it('Handles URL-like values', () => {
      expect(
        utils.queryStringifyRequestData({
          url: 'https://example.com/path?query=1',
        })
      ).to.equal('url=https%3A%2F%2Fexample.com%2Fpath%3Fquery%3D1');
    });

    it('Handles newlines and tabs in values', () => {
      expect(
        utils.queryStringifyRequestData({
          text: 'line1\nline2\ttab',
        })
      ).to.equal('text=line1%0Aline2%09tab');
    });
  });

  describe('protoExtend', () => {
    it('Provides an extension mechanism', () => {
      function A(): any {}
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
        host: null,
        headers: {},
        streaming: false,
        settings: {},
      });
    });

    it('handles an list with no object', () => {
      const args = [1, 3];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        host: null,
        headers: {},
        streaming: false,
        settings: {},
      });
      expect(args.length).to.equal(2);
    });

    it('ignores a non-options object', () => {
      const args = [{foo: 'bar'}];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        host: null,
        headers: {},
        streaming: false,
        settings: {},
      });
      expect(args.length).to.equal(1);
    });

    it('parses an api key', () => {
      const args = ['sk_test_iiiiiiiiiiiiiiiiiiiiiiii'];
      const options = utils.getOptionsFromArgs(args);
      expect(options).to.deep.contain({
        host: null,
        headers: {},
        streaming: false,
        settings: {},
      });
      expect(args.length).to.equal(0);
      expect(options.authenticator._apiKey).to.equal(
        'sk_test_iiiiiiiiiiiiiiiiiiiiiiii'
      );
    });

    it('assumes any string is an api key', () => {
      const args = ['yolo'];
      const options = utils.getOptionsFromArgs(args);
      expect(options).to.deep.contain({
        host: null,
        headers: {},
        streaming: false,
        settings: {},
      });
      expect(args.length).to.equal(0);
      expect(options.authenticator._apiKey).to.equal('yolo');
    });

    it('parses an idempotency key', () => {
      const args = [{foo: 'bar'}, {idempotencyKey: 'foo'}];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        host: null,
        headers: {'Idempotency-Key': 'foo'},
        streaming: false,
        settings: {},
      });
      expect(args.length).to.equal(1);
    });

    it('parses an api version', () => {
      const args = [{foo: 'bar'}, {apiVersion: '2003-03-30'}];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        host: null,
        headers: {'Stripe-Version': '2003-03-30'},
        streaming: false,
        settings: {},
      });
      expect(args.length).to.equal(1);
    });

    it('parses streaming', () => {
      const args = [{foo: 'bar'}, {streaming: true}];
      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        host: null,
        headers: {},
        streaming: true,
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
      const options = utils.getOptionsFromArgs(args);
      expect(options).to.deep.contains({
        host: null,
        headers: {
          'Idempotency-Key': 'foo',
          'Stripe-Version': '2010-01-10',
        },
        streaming: false,
        settings: {},
      });
      expect(args.length).to.equal(1);
      expect(options.authenticator._apiKey).to.equal(
        'sk_test_iiiiiiiiiiiiiiiiiiiiiiii'
      );
    });

    it('parses an idempotency key and api key and api version', () => {
      const args = [
        {
          apiKey: 'sk_test_iiiiiiiiiiiiiiiiiiiiiiii',
          idempotencyKey: 'foo',
          apiVersion: 'hunter2',
        },
      ];
      const options = utils.getOptionsFromArgs(args);
      expect(options).to.deep.contains({
        host: null,
        headers: {
          'Idempotency-Key': 'foo',
          'Stripe-Version': 'hunter2',
        },
        streaming: false,
        settings: {},
      });
      expect(args.length).to.equal(0);
      expect(options.authenticator._apiKey).to.equal(
        'sk_test_iiiiiiiiiiiiiiiiiiiiiiii'
      );
    });

    it('parses additional per-request settings', () => {
      const args = [
        {
          maxNetworkRetries: 5,
          timeout: 1000,
        },
      ];

      expect(utils.getOptionsFromArgs(args)).to.deep.equal({
        host: null,
        headers: {},
        streaming: false,
        settings: {
          maxNetworkRetries: 5,
          timeout: 1000,
        },
      });
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

  describe('concat', () => {
    it('should return a joined Uint8Array', () => {
      const arr1 = new Uint8Array([1, 2, 3]);
      const arr2 = new Uint8Array([4, 5]);
      const arrs = [arr1, arr2];
      expect(utils.concat(arrs)).to.eql(new Uint8Array([1, 2, 3, 4, 5]));
    });

    it('should return an empty Uint8Array given an empty array', () => {
      expect(utils.concat([])).to.eql(new Uint8Array(0));
    });

    it('should work with Buffers', () => {
      const buf1 = Buffer.from('foo');
      const buf2 = Buffer.from('bar');
      const mergedBufToString = new TextDecoder('utf8').decode(
        utils.concat([buf1, buf2])
      );
      expect(mergedBufToString).to.equal('foobar');
    });
  });
});

function handleWarnings(doWithShimmedConsoleWarn, onWarn): void {
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
    function onProcessWarn(warning): any {
      onWarn(`${warning.name}: ${warning.message}`);
    }

    process.on('warning', onProcessWarn);

    doWithShimmedConsoleWarn();

    process.nextTick(() => {
      process.removeListener('warning', onProcessWarn);
    });
  }
}
