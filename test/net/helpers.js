'use strict';

const {Readable} = require('stream');

const nock = require('nock');
const expect = require('chai').expect;

const utils = require('../../lib/utils');
const {fail} = require('assert');

/**
 * Readable stream which will emit a data event for each value in the array
 * passed. Readable.from accomplishes this beyond Node 10.17.
 */
class ArrayReadable extends Readable {
  constructor(values) {
    super();
    this._index = 0;
    this._values = values;
  }

  _read() {
    if (this._index === this._values.length) {
      // Destroy the stream once we've read all values.
      this.push(null);
    } else {
      this.push(Buffer.from(this._values[this._index], 'utf8'));
      this._index += 1;
    }
  }
}

/**
 * Test runner which runs a common set of tests for a given HTTP client to make
 * sure the client meets the interface expectations.
 *
 * This takes in a function to create the client.
 *
 * This can be configured to run extra tests, providing the nock setup function
 * and request function for those tests.
 */
const createHttpClientTestSuite = (createHttpClientFn, extraTestsFn) => {
  describe('HttpClientTestSuite', () => {
    const setupNock = () => {
      return nock('http://stripe.com').get('/test');
    };

    const sendRequest = (options) => {
      options = options || {};
      return createHttpClientFn().makeRequest(
        'stripe.com',
        options.port || 80,
        '/test',
        options.method || 'GET',
        options.headers || {},
        options.requestData,
        'http',
        options.timeout || 1000
      );
    };

    afterEach(() => {
      nock.cleanAll();
    });

    describe('makeRequest', () => {
      it('rejects with a timeout error', async () => {
        setupNock()
          .delayConnection(31)
          .reply(200, 'hello, world!');

        try {
          await sendRequest({timeout: 30});
          fail();
        } catch (e) {
          expect(e.code).to.be.equal('ETIMEDOUT');
        }
      });

      it('forwards any error', async () => {
        setupNock().replyWithError('sample error');

        try {
          await sendRequest();
          fail();
        } catch (e) {
          expect(e.message).to.contain('sample error');
        }
      });

      it('sends request headers', async () => {
        nock('http://stripe.com', {
          reqheaders: {
            sample: 'value',
          },
        })
          .get('/test')
          .reply(200);

        await sendRequest({headers: {sample: 'value'}});
      });

      it('sends request data (POST)', (done) => {
        const expectedData = utils.stringifyRequestData({id: 'test'});

        nock('http://stripe.com')
          .post('/test')
          .reply(200, (uri, requestBody) => {
            expect(requestBody).to.equal(expectedData);
            done();
          });

        sendRequest({method: 'POST', requestData: expectedData});
      });

      it('custom port', async () => {
        nock('http://stripe.com:1234')
          .get('/test')
          .reply(200);
        await sendRequest({port: 1234});
      });

      describe('NodeHttpClientResponse', () => {
        it('getStatusCode()', async () => {
          setupNock().reply(418, 'hello, world!');

          const response = await sendRequest();

          expect(response.getStatusCode()).to.be.equal(418);
        });

        it('getHeaders()', async () => {
          setupNock().reply(200, 'hello, world!', {
            'X-Header-1': '123',
            'X-Header-2': 'test',
          });

          const response = await sendRequest();

          // Headers get transformed into lower case.
          expect(response.getHeaders()).to.be.deep.equal({
            'x-header-1': '123',
            'x-header-2': 'test',
          });
        });

        it('toJSON accumulates all data chunks in utf-8 encoding', async () => {
          setupNock().reply(
            200,
            () => new ArrayReadable(['{"a', 'bc":', '"∑ 123', '"}'])
          );

          const response = await sendRequest();

          const json = await response.toJSON();

          expect(json).to.deep.equal({abc: '∑ 123'});
        });

        it('toJSON throws when JSON parsing fails', async () => {
          setupNock().reply(200, '{"a');

          const response = await sendRequest();

          try {
            await response.toJSON();
            fail();
          } catch (e) {
            expect(e.message).to.contain('Unexpected end of JSON input');
          }
        });
      });
    });

    extraTestsFn(setupNock, sendRequest);
  });
};

module.exports = {createHttpClientTestSuite, ArrayReadable};
