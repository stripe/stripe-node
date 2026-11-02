// @ts-nocheck

import http = require('http');
import {expect} from 'chai';
import {FAKE_API_KEY} from './testUtils.js';
import {StripeResource} from '../src/StripeResource.js';
import {
  HttpClient,
  HttpClientResponse,
  HttpClientRuntimeError,
} from '../src/net/HttpClient.js';
let testServer = null;

const createTestServer = (
  handlerFunc: (
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) => Promise<void>
) => {
  const host = '127.0.0.1';
  testServer = http.createServer(async (req, res) => {
    try {
      await handlerFunc(req, res);
    } catch (e) {
      res.writeHead(400, {'Content-Type': 'application/json'});
      res.end(
        JSON.stringify({
          error: {type: 'invalid_request_error', message: e.message},
        })
      );
    }
  });
  return new Promise((resolve) => {
    testServer.listen(0, host, () => {
      const port = testServer.address().port;
      resolve({host, port});
    });
  });
};

describe('Client Telemetry', () => {
  const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  const createClient = (options = {}) =>
    require('../src/stripe.cjs.node.js')(FAKE_API_KEY, {
      maxNetworkRetries: 0,
      ...options,
    });

  const expectSample = (sample, expected) => {
    expect(sample).to.include(expected);
    expect(sample.telemetry_id).to.match(UUID);
    expect(sample.request_duration_ms).to.be.a('number');
    expect(Number.isFinite(sample.request_duration_ms)).to.equal(true);
    expect(sample.request_duration_ms).to.be.at.least(0);
  };

  for (const transport of ['node', 'fetch']) {
    describe(`outcomes with ${transport}`, () => {
      const transportOptions = () =>
        transport === 'fetch'
          ? {
              httpClient: require('../src/stripe.cjs.node.js').createFetchHttpClient(),
            }
          : {};

      for (const scenario of [
        {status: 200, body: '{}'},
        {status: 201, body: '{}', requestId: 'req_example'},
        {
          status: 502,
          body: '<html>example-private-body</html>',
          error: 'invalid_response',
          publicError: 'StripeAPIError',
        },
        {
          status: 200,
          body: 'invalid',
          error: 'invalid_response',
          publicError: 'StripeAPIError',
        },
        {
          status: 400,
          body: JSON.stringify({
            error: {
              type: 'invalid_request_error',
              message: 'example-private-message',
            },
          }),
          error: 'api_error',
          publicError: 'StripeInvalidRequestError',
          requestId: 'req_example',
        },
        {
          status: 400,
          body: JSON.stringify({
            error: 'invalid_grant',
            error_description: 'example-private-message',
          }),
          error: 'api_error',
          publicError: 'StripeInvalidGrantError',
        },
      ]) {
        it(`delivers HTTP ${scenario.status} with ${scenario.error ||
          'success'}`, async () => {
          const received = [];
          const {host, port} = await createTestServer((req, res) => {
            received.push(req.headers['x-stripe-client-telemetry']);
            if (received.length === 1) {
              if (scenario.requestId)
                res.setHeader('Request-Id', scenario.requestId);
              res.writeHead(scenario.status);
              res.end(scenario.body);
            } else {
              res.end('{}');
            }
          });
          const client = createClient({
            host,
            port,
            protocol: 'http',
            ...transportOptions(),
          });
          if (scenario.error) {
            await client.balance.retrieve().then(
              () => expect.fail('Expected an error'),
              (error) => expect(error.type).to.equal(scenario.publicError)
            );
          } else {
            await client.balance.retrieve();
          }
          expect(client._prevRequestMetrics).to.have.length(1);
          await client.balance.retrieve();
          expect(received[0]).to.equal(undefined);
          const sample = JSON.parse(received[1]).last_request_metrics;
          expectSample(sample, {http_status: scenario.status});
          expect(sample.error).to.equal(scenario.error);
          expect(sample.request_id).to.equal(scenario.requestId);
          expect(received[1]).not.to.include('example-private');
          expect(sample).to.have.all.keys([
            'http_status',
            'request_duration_ms',
            'telemetry_id',
            ...(scenario.error ? ['error'] : []),
            ...(scenario.requestId ? ['request_id'] : []),
          ]);
        });
      }

      for (const failure of ['timeout', 'connection_error']) {
        for (const afterHeaders of [false, true]) {
          it(`delivers ${failure} ${
            afterHeaders ? 'after' : 'before'
          } headers`, async () => {
            const received = [];
            let failing = true;
            const {host, port} = await createTestServer((req, res) => {
              received.push(req.headers['x-stripe-client-telemetry']);
              if (failing) {
                if (afterHeaders) {
                  res.writeHead(200, {'Content-Length': '100'});
                  res.write('{');
                }
                if (failure === 'connection_error') {
                  setTimeout(() => res.destroy(), 20);
                }
              } else {
                res.end('{}');
              }
            });
            const client = createClient({
              host,
              port,
              protocol: 'http',
              timeout: 100,
              ...transportOptions(),
            });
            client._requestSender._getSleepTimeInMS = () => 0;
            await client.balance.retrieve().then(
              () => expect.fail('Expected a connection error'),
              (error) => expect(error.type).to.equal('StripeConnectionError')
            );
            expect(client._prevRequestMetrics).to.have.length(1);
            const sample = client._prevRequestMetrics[0];
            expectSample(sample, {error: failure});
            expect(sample.request_id).to.equal(undefined);
            expect(sample.http_status).to.equal(afterHeaders ? 200 : undefined);
            failing = false;
            await client.balance.retrieve();
            expect(
              JSON.parse(received[received.length - 1]).last_request_metrics
            ).to.deep.equal(sample);
          });
        }
      }
    });
  }

  for (const transport of ['node', 'fetch']) {
    it(`preserves successful ${transport} stream timing and records status without an ID`, async () => {
      let finishResponse;
      const {host, port} = await createTestServer((req, res) => {
        res.writeHead(200);
        res.write('first');
        finishResponse = () => res.end('last');
      });
      const client = createClient({
        host,
        port,
        protocol: 'http',
        ...(transport === 'fetch'
          ? {
              httpClient: require('../src/stripe.cjs.node.js').createFetchHttpClient(),
            }
          : {}),
      });
      const stream = await client.rawRequest(
        'GET',
        '/v1/example',
        {},
        {streaming: true}
      );
      expect(client._prevRequestMetrics).to.have.length(
        transport === 'node' ? 0 : 1
      );
      finishResponse();
      let body = '';
      if (transport === 'node') {
        expect(stream).to.be.instanceOf(http.IncomingMessage);
        for await (const chunk of stream) body += chunk;
      } else {
        expect(stream).to.be.instanceOf(ReadableStream);
        body = await new Response(stream).text();
      }
      expect(body).to.equal('firstlast');
      expect(client._prevRequestMetrics).to.have.length(1);
      expectSample(client._prevRequestMetrics[0], {http_status: 200});
      expect(client._prevRequestMetrics[0].request_id).to.equal(undefined);
      expect(client._prevRequestMetrics[0].error).to.equal(undefined);
    });
  }

  for (const recovered of [false, true]) {
    it(`records only the final HTTP outcome when retries ${
      recovered ? 'recover' : 'are exhausted'
    }`, async () => {
      let attempts = 0;
      const {host, port} = await createTestServer((req, res) => {
        attempts += 1;
        res.setHeader('Request-Id', `req_attempt_${attempts}`);
        res.writeHead(recovered && attempts === 2 ? 201 : 502);
        res.end(recovered && attempts === 2 ? '{}' : '<html>example</html>');
      });
      const client = createClient({
        host,
        port,
        protocol: 'http',
        maxNetworkRetries: 1,
      });
      client._requestSender._getSleepTimeInMS = () => 0;
      await client.balance.retrieve().then(
        () => expect(recovered).to.equal(true),
        (error) => {
          expect(recovered).to.equal(false);
          expect(error.type).to.equal('StripeAPIError');
        }
      );
      expect(attempts).to.equal(2);
      expect(client._prevRequestMetrics).to.have.length(1);
      expectSample(client._prevRequestMetrics[0], {
        http_status: recovered ? 201 : 502,
        request_id: 'req_attempt_2',
      });
      expect(client._prevRequestMetrics[0].error).to.equal(
        recovered ? undefined : 'invalid_response'
      );
    });
  }

  for (const recovered of [false, true]) {
    it(`preserves an ID-less failure across the mandatory closed-connection retry (${
      recovered ? 'recovered' : 'exhausted'
    })`, async () => {
      const transmitted = [];
      const client = createClient({
        httpClient: {
          getClientName: () => 'test',
          makeRequest: (...args) => {
            transmitted.push(args[4]['X-Stripe-Client-Telemetry']);
            if (!recovered || transmitted.length === 1) {
              return Promise.reject(
                Object.assign(new Error('connection closed'), {
                  code: 'ECONNRESET',
                })
              );
            }
            const response = new HttpClientResponse(200, {});
            response.toJSON = () => Promise.resolve({});
            response.getRawResponse = () => ({});
            return Promise.resolve(response);
          },
        },
      });
      const sender = client._requestSender;
      sender._getSleepTimeInMS = () => 0;
      sender._recordRequestMetrics({error: 'timeout'}, 5, []);
      const previous = client._prevRequestMetrics[0];
      await client.balance.retrieve().then(
        () => expect(recovered).to.equal(true),
        (error) => {
          expect(recovered).to.equal(false);
          expect(error.type).to.equal('StripeConnectionError');
        }
      );
      expect(transmitted).to.have.length(2);
      expect(transmitted[0]).to.equal(transmitted[1]);
      expect(JSON.parse(transmitted[0]).last_request_metrics).to.deep.equal(
        previous
      );
      expect(client._prevRequestMetrics).to.have.length(1);
      expectSample(
        client._prevRequestMetrics[0],
        recovered ? {http_status: 200} : {error: 'connection_error'}
      );
    });
  }

  for (const synchronous of [false, true]) {
    it(`records generic ${
      synchronous ? 'synchronous' : 'asynchronous'
    } transport failures`, async () => {
      const client = createClient({
        httpClient: {
          getClientName: () => 'test',
          makeRequest: () => {
            const error = new Error('example-private-message');
            if (synchronous) throw error;
            return Promise.reject(error);
          },
        },
      });
      await client.balance.retrieve().then(
        () => expect.fail('Expected an error'),
        (error) => expect(error.type).to.equal('StripeConnectionError')
      );
      expectSample(client._prevRequestMetrics[0], {error: 'connection_error'});
      expect(client._requestSender._getTelemetryHeader()).not.to.include(
        'example-private-message'
      );
    });
  }

  for (const failed of [false, true]) {
    it(`preserves carried telemetry and final-attempt duration on ${
      failed ? 'failure' : 'success'
    }`, async () => {
      const originalNow = Date.now;
      let now = 100;
      const transmitted = [];
      let attempts = 0;
      const client = createClient({
        maxNetworkRetries: 1,
        httpClient: {
          getClientName: () => 'test',
          makeRequest: (...args) => {
            transmitted.push(args[4]['X-Stripe-Client-Telemetry']);
            attempts += 1;
            now += attempts === 1 ? 50 : 7;
            if (attempts === 1 || failed)
              return Promise.reject(HttpClient.makeTimeoutError());
            const response = new HttpClientResponse(200, {});
            response.toJSON = () => Promise.resolve({});
            response.getRawResponse = () => ({});
            return Promise.resolve(response);
          },
        },
      });
      client._requestSender._recordRequestMetrics({http_status: 200}, 5, []);
      const previous = client._prevRequestMetrics[0];
      client._requestSender._getSleepTimeInMS = () => {
        now += 1000;
        return 0;
      };
      Date.now = () => now;
      try {
        await client.balance.retrieve().then(
          () => expect(failed).to.equal(false),
          (error) => {
            expect(failed).to.equal(true);
            expect(error.type).to.equal('StripeConnectionError');
          }
        );
        expect(attempts).to.equal(2);
        expect(client._prevRequestMetrics).to.have.length(1);
        expect(client._prevRequestMetrics[0].request_duration_ms).to.equal(7);
        expectSample(
          client._prevRequestMetrics[0],
          failed ? {error: 'timeout'} : {http_status: 200}
        );
        expect(client._prevRequestMetrics[0].error).to.equal(
          failed ? 'timeout' : undefined
        );
        expect(transmitted[0]).to.equal(transmitted[1]);
        expect(JSON.parse(transmitted[0]).last_request_metrics).to.deep.equal(
          previous
        );
      } finally {
        Date.now = originalNow;
      }
    });
  }

  it('does not record runtime errors', async () => {
    const error = new HttpClientRuntimeError('unsupported operation');
    const client = createClient({
      httpClient: {
        getClientName: () => 'test',
        makeRequest: () => Promise.reject(error),
      },
    });
    await client.balance.retrieve().then(
      () => expect.fail('Expected a runtime error'),
      (actual) => expect(actual).to.equal(error)
    );
    expect(client._prevRequestMetrics).to.have.length(0);
  });

  it('keeps distinct sample identities and drops samples when UUID generation fails', async () => {
    const client = createClient();
    const sender = client._requestSender;
    sender._recordRequestMetrics({error: 'timeout'}, 1, []);
    sender._recordRequestMetrics({error: 'timeout'}, 1, []);
    expect(client._prevRequestMetrics[0].telemetry_id).not.to.equal(
      client._prevRequestMetrics[1].telemetry_id
    );
    const original = client._platformFunctions.uuid4;
    client._platformFunctions.uuid4 = () => {
      throw new Error('random unavailable');
    };
    try {
      const response = new HttpClientResponse(200, {});
      response.toJSON = () => Promise.resolve({});
      response.getRawResponse = () => ({});
      client._setApiField('httpClient', {
        getClientName: () => 'test',
        makeRequest: () => Promise.resolve(response),
      });
      await client.balance.retrieve();
      expect(client._prevRequestMetrics).to.have.length(1);
    } finally {
      client._platformFunctions.uuid4 = original;
    }
  });

  it('keeps failures silent when telemetry is disabled', async () => {
    const client = createClient({
      telemetry: false,
      httpClient: {
        getClientName: () => 'test',
        makeRequest: () => Promise.reject(HttpClient.makeTimeoutError()),
      },
    });
    await client.balance.retrieve().catch(() => {});
    expect(client._prevRequestMetrics).to.have.length(0);
    expect(client._requestSender._getTelemetryHeader()).to.equal(undefined);
  });

  afterEach(() => {
    if (testServer) {
      testServer.close();
      testServer = null;
    }
  });

  it('Does not send telemetry when disabled', async () => {
    let numRequests = 0;

    const handle = (req, res) => {
      numRequests += 1;

      const telemetry = req.headers['x-stripe-client-telemetry'];

      switch (numRequests) {
        case 1:
        case 2:
          expect(telemetry).to.not.exist;
          break;
        default:
          expect.fail(`Should not have reached request ${numRequests}`);
      }

      res.setHeader('Request-Id', `req_${numRequests}`);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end('{}');
    };

    const {host, port} = await createTestServer(handle);
    const stripe = require('../src/stripe.cjs.node.js')(FAKE_API_KEY, {
      telemetry: false,
      host,
      port,
      protocol: 'http',
    });

    await stripe.balance.retrieve();
    await stripe.balance.retrieve();
    expect(numRequests).to.equal(2);
  });

  it('Sends client telemetry on the second request when enabled', async () => {
    let numRequests = 0;
    const handle = (req, res) => {
      numRequests += 1;

      const telemetry = req.headers['x-stripe-client-telemetry'];

      switch (numRequests) {
        case 1:
          expect(telemetry).to.not.exist;
          break;
        case 2:
          expect(telemetry).to.exist;
          expect(
            JSON.parse(telemetry).last_request_metrics.request_id
          ).to.equal('req_1');
          break;
        default:
          expect.fail(`Should not have reached request ${numRequests}`);
      }

      res.setHeader('Request-Id', `req_${numRequests}`);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end('{}');
    };
    const {host, port} = await createTestServer(handle);
    const stripe = require('../src/stripe.cjs.node.js')(
      'sk_test_FEiILxKZwnmmocJDUjUNO6pa',
      {
        telemetry: true,
        host,
        port,
        protocol: 'http',
      }
    );

    await stripe.balance.retrieve();
    await stripe.balance.retrieve();
    expect(numRequests).to.equal(2);
  });
  it('Sends usage telemetry when registered', async () => {
    let numRequests = 0;

    const handle = (req, res) => {
      numRequests += 1;

      const telemetry = req.headers['x-stripe-client-telemetry'];

      switch (numRequests) {
        case 1:
          expect(telemetry).to.not.exist;
          break;
        case 2:
          expect(telemetry).to.exist;
          expect(
            JSON.parse(telemetry).last_request_metrics.request_id
          ).to.equal('req_1');
          expect(
            JSON.parse(telemetry).last_request_metrics.usage
          ).to.deep.equal(['llama', 'bufo']);
          expectSample(JSON.parse(telemetry).last_request_metrics, {
            http_status: 200,
          });
          expect(JSON.parse(telemetry).last_request_metrics.error).to.equal(
            undefined
          );
          break;
        default:
          expect.fail(`Should not have reached request ${numRequests}`);
      }

      res.setHeader('Request-Id', `req_${numRequests}`);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end('{}');
    };

    const {host, port} = await createTestServer(handle);
    const stripe = require('../src/stripe.cjs.node.js')(
      'sk_test_FEiILxKZwnmmocJDUjUNO6pa',
      {
        telemetry: true,
        host,
        port,
        protocol: 'http',
      }
    );

    const resource = new StripeResource(stripe);

    await resource._makeRequest(
      'POST',
      '/v1/widgets/w_123/boop',
      undefined,
      undefined,
      {
        usage: ['llama', 'bufo'],
      }
    );
    await resource._makeRequest(
      'POST',
      '/v1/widgets/w_123/boop',
      undefined,
      undefined,
      {
        usage: ['llama', 'bufo'],
      }
    );
    expect(numRequests).to.equal(2);
  });

  it('Buffers metrics on concurrent requests', async () => {
    let numRequests = 0;

    const handle = (req, res) => {
      numRequests += 1;

      const telemetry = req.headers['x-stripe-client-telemetry'];

      switch (numRequests) {
        case 1:
        case 2:
          expect(telemetry).to.not.exist;
          break;
        case 3:
        case 4:
          expect(telemetry).to.exist;
          expect(
            JSON.parse(telemetry).last_request_metrics.request_id
          ).to.be.oneOf(['req_1', 'req_2']);
          break;
        default:
          expect.fail(`Should not have reached request ${numRequests}`);
      }

      res.setHeader('Request-Id', `req_${numRequests}`);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end('{}');
    };
    const {host, port} = await createTestServer(handle);
    const stripe = require('../src/stripe.cjs.node.js')(
      'sk_test_FEiILxKZwnmmocJDUjUNO6pa',
      {
        telemetry: true,
        host,
        port,
        protocol: 'http',
      }
    );

    await Promise.all([stripe.balance.retrieve(), stripe.balance.retrieve()]);
    await Promise.all([stripe.balance.retrieve(), stripe.balance.retrieve()]);
    expect(numRequests).to.equal(4);
  });
});
