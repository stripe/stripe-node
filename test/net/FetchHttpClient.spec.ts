// @ts-nocheck

const expect = require('chai').expect;
const fetch = require('node-fetch');
const nock = require('nock');
const {Readable} = require('stream');
const {FetchHttpClient} = require('../../src/net/FetchHttpClient.js');

const createFetchHttpClient = () => {
  return new FetchHttpClient(fetch);
};

const {createHttpClientTestSuite, ArrayReadable} = require('./helpers.js');

describe('FetchHttpClient', () => {
  createHttpClientTestSuite(createFetchHttpClient, (setupNock, sendRequest) => {
    describe('raw stream', () => {
      it('getRawResponse()', async () => {
        setupNock().reply(200);
        const response = await sendRequest();
        expect(response.getRawResponse()).to.be.an.instanceOf(fetch.Response);
      });

      it('toStream returns the body as a stream', async () => {
        setupNock().reply(200, () => new ArrayReadable(['hello, world!']));

        const response = await sendRequest();

        return new Promise((resolve) => {
          const stream = response.toStream(() => true);

          // node-fetch returns a Node Readable here. In a Web API context, this
          // would be a Web ReadableStream.
          expect(stream).to.be.an.instanceOf(Readable);

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
          response.toStream(() => {
            resolve();
          });
        });
      });
    });
  });

  describe('it sets a body value for empty POST requests', () => {
    let capturedBody;

    const patchedFetch = (url, params) => {
      capturedBody = params.body;
      return fetch(url, params);
    };

    nock('http://stripe.com')
      .post('/test', '')
      .reply(200);

    const client = new FetchHttpClient(patchedFetch);
    client.makeRequest(
      'stripe.com',
      80,
      '/test',
      'POST',
      {},
      '', // requestData
      'http',
      1000
    );

    expect(capturedBody).to.equal('');
  });

  describe('makeRequest path validation', () => {
    it('throws when path is an absolute URL', async () => {
      const client = createFetchHttpClient();
      try {
        await client.makeRequest(
          'api.stripe.com',
          443,
          'https://example.com/steal',
          'GET',
          {},
          '',
          'https',
          1000
        );
        throw new Error('Expected an error to be thrown');
      } catch (e) {
        expect(e.message).to.match(/Only relative paths are supported/);
      }
    });

    it('sends request to the correct host when given a relative path', async () => {
      nock('https://api.stripe.com')
        .get('/v1/charges')
        .reply(200, '{}');

      const client = createFetchHttpClient();
      const response = await client.makeRequest(
        'api.stripe.com',
        443,
        '/v1/charges',
        'GET',
        {},
        '',
        'https',
        1000
      );
      expect(response.getStatusCode()).to.equal(200);
    });
  });

  describe('it does not set a body value for empty GET requests', () => {
    let capturedBody;

    const patchedFetch = (url, params) => {
      capturedBody = params.body;
      return fetch(url, params);
    };

    nock('http://stripe.com')
      .get('/test')
      .reply(200);

    const client = new FetchHttpClient(patchedFetch);
    client.makeRequest(
      'stripe.com',
      80,
      '/test',
      'GET',
      {},
      '', // requestData
      'http',
      1000
    );

    expect(capturedBody).to.be.undefined;
  });

  // The timeout has to cover reading the body, not just the time to headers.
  // See https://github.com/stripe/stripe-node/issues/2814
  describe('response body timeout', () => {
    /** A body which sends a partial payload and then stalls forever. */
    const stalledBody = (): Readable => {
      let sentPartialBody = false;
      return new Readable({
        read() {
          if (!sentPartialBody) {
            sentPartialBody = true;
            this.push('{"ab');
          }
          // Never push again and never end, so the read stalls.
        },
      });
    };

    const sendRequest = (client) =>
      client.makeRequest(
        'stripe.com',
        80,
        '/test',
        'GET',
        {},
        undefined,
        'http',
        50
      );

    afterEach(() => {
      nock.cleanAll();
    });

    it('times out reading the body when aborting', async () => {
      nock('http://stripe.com')
        .get('/test')
        .reply(200, stalledBody);

      const response = await sendRequest(createFetchHttpClient());

      try {
        await response.toJSON();
        throw new Error('Expected an error to be thrown');
      } catch (e) {
        expect(e.code).to.equal('ETIMEDOUT');
      }
    });

    it('times out reading the body when racing', async () => {
      nock('http://stripe.com')
        .get('/test')
        .reply(200, stalledBody);

      // Runtimes without AbortController fall back to racing a timer, which
      // cannot cancel the read but still has to stop the request from hanging.
      const {AbortController} = globalThis;
      delete globalThis.AbortController;
      let client;
      try {
        client = new FetchHttpClient(fetch);
      } finally {
        globalThis.AbortController = AbortController;
      }

      const response = await sendRequest(client);

      try {
        await response.toJSON();
        throw new Error('Expected an error to be thrown');
      } catch (e) {
        expect(e.code).to.equal('ETIMEDOUT');
      }
    });
  });
});

export {};
