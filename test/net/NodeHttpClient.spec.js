'use strict';

const {Readable} = require('stream');

const http = require('http');
const nock = require('nock');
const expect = require('chai').expect;
// const {fail} = require('chai').assert;

const {createNodeHttpClient} = require('../../lib/Stripe');
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

describe('NodeHttpClient', () => {
  const setupNock = () => {
    return nock('http://stripe.com').get('/test');
  };

  const sendRequest = (options) => {
    options = options || {};
    return createNodeHttpClient().makeRequest(
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
        expect(e.message).to.be.equal('sample error');
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

      it('getRawResponse()', async () => {
        setupNock().reply(200);

        const response = await sendRequest();

        expect(response.getRawResponse()).to.be.an.instanceOf(
          http.IncomingMessage
        );
      });

      it('toStream returns a readable stream', async () => {
        setupNock().reply(200, () => new ArrayReadable(['hello, world!']));

        const response = await sendRequest();

        return new Promise((resolve) => {
          const stream = response.toStream(() => true);

          let streamedContent = '';
          stream.on('data', (chunk) => {
            streamedContent += chunk;
          });
          stream.on('end', () => {
            expect(streamedContent).to.equal('hello, world!');
            resolve();
          });
        });
      });

      it('toStream invokes the streamCompleteCallback', async () => {
        setupNock().reply(200, () => new ArrayReadable(['hello, world!']));

        const response = await sendRequest();

        return new Promise((resolve) => {
          let streamedContent = '';

          const stream = response.toStream(() => {
            expect(streamedContent).to.equal('hello, world!');
            resolve();
          });

          stream.on('data', (chunk) => {
            streamedContent += chunk;
          });
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
          expect(e.message).to.be.equal('Unexpected end of JSON input');
        }
      });
    });
  });
});
