// @ts-nocheck

const http = require('http');
const nock = require('nock');
const expect = require('chai').expect;

const {createNodeHttpClient} = require('../../src/stripe.cjs.node.js');

const {createHttpClientTestSuite, ArrayReadable} = require('./helpers.js');

describe('NodeHttpClient', () => {
  createHttpClientTestSuite(createNodeHttpClient, (setupNock, sendRequest) => {
    it('supports intercepting body-bearing requests with Nock', async () => {
      const requestData = 'name=test';
      const interceptor = nock('http://stripe.com')
        .post('/test', requestData)
        .reply(200, {intercepted: true});

      const response = await sendRequest({method: 'POST', requestData});

      expect(await response.toJSON()).to.deep.equal({intercepted: true});
      expect(interceptor.isDone()).to.equal(true);
    });

    describe('custom Agent', () => {
      let agent;
      let server;

      afterEach(async () => {
        if (agent) {
          agent.destroy();
          agent = null;
        }
        if (server) {
          await new Promise((resolve) => server.close(resolve));
          server = null;
        }
        if (!nock.isActive()) {
          nock.activate();
        }
      });

      it('handles queued requests on a reused keep-alive socket', async () => {
        nock.restore();
        agent = new http.Agent({keepAlive: true, maxSockets: 1});

        let requestCount = 0;
        let releaseFirstResponse;
        const firstResponseCanFinish = new Promise((resolve) => {
          releaseFirstResponse = resolve;
        });
        let markFirstRequestReceived;
        const firstRequestReceived = new Promise((resolve) => {
          markFirstRequestReceived = resolve;
        });
        const sockets = new Set();

        server = http.createServer(async (request, response) => {
          requestCount += 1;
          const currentRequest = requestCount;
          sockets.add(request.socket);

          if (currentRequest === 1) {
            markFirstRequestReceived();
            await firstResponseCanFinish;
          }

          response.end(JSON.stringify({request: currentRequest}));
        });

        await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
        const {port} = server.address();
        const client = createNodeHttpClient(agent);

        const firstRequest = client.makeRequest(
          '127.0.0.1',
          port,
          '/first',
          'GET',
          {},
          '',
          'http',
          1000
        );
        const secondRequest = client.makeRequest(
          '127.0.0.1',
          port,
          '/second',
          'GET',
          {},
          '',
          'http',
          1000
        );

        await firstRequestReceived;
        expect(requestCount).to.equal(1);
        releaseFirstResponse();

        const responseBodies = Promise.all([
          firstRequest.then((response) => response.toJSON()),
          secondRequest.then((response) => response.toJSON()),
        ]);
        expect(await responseBodies).to.deep.equal([
          {request: 1},
          {request: 2},
        ]);
        expect(sockets.size).to.equal(1);
      });
    });

    describe('raw stream', () => {
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
          stream.on('data', (chunk: any) => {
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
    });
  });
});

export {};
