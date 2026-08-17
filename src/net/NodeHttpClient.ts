import * as http_ from 'http';
import * as https_ from 'https';
import {RequestHeaders, RequestData} from '../Types.js';
import {
  HttpClient,
  HttpClientResponse,
  NodeHttpClientInterface,
  NodeHttpClientResponseInterface,
} from './HttpClient.js';

// `import * as http_ from 'http'` creates a "Module Namespace Exotic Object"
// which is immune to monkey-patching, whereas http_.default (in an ES Module context)
// will resolve to the same thing as require('http'), which is
// monkey-patchable. We care about this because users in their test
// suites might be using a library like "nock" which relies on the ability
// to monkey-patch and intercept calls to http.request.
const http = ((http_ as unknown) as {default: typeof http_}).default || http_;
const https =
  ((https_ as unknown) as {default: typeof https_}).default || https_;

const defaultHttpAgent = new http.Agent({keepAlive: true});
const defaultHttpsAgent = new https.Agent({keepAlive: true});

/**
 * HTTP client which uses the Node `http` and `https` packages to issue
 * requests.`
 */
export class NodeHttpClient extends HttpClient
  implements NodeHttpClientInterface {
  _agent?: http_.Agent | https_.Agent | undefined;

  constructor(agent?: http_.Agent | https_.Agent) {
    super();
    this._agent = agent;
  }

  /** @override. */
  getClientName(): string {
    return 'node';
  }

  makeRequest(
    host: string,
    port: string,
    path: string,
    method: string,
    headers: RequestHeaders,
    requestData: string,
    protocol: string,
    timeout: number
  ): Promise<NodeHttpClientResponseInterface> {
    const isInsecureConnection = protocol === 'http';

    let agent = this._agent;
    if (!agent) {
      agent = isInsecureConnection ? defaultHttpAgent : defaultHttpsAgent;
    }

    const requestPromise = new Promise<NodeHttpClientResponseInterface>(
      (resolve, reject) => {
        const req = (isInsecureConnection ? http : https).request({
          host: host,
          port: port,
          path,
          method,
          agent,
          headers,
          ciphers: 'DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5',
        });

        let res: http_.IncomingMessage | null = null;

        req.setTimeout(timeout, () => {
          const timeoutError = HttpClient.makeTimeoutError();
          // The socket timeout stays armed while the body is being read, but
          // tearing down the request alone surfaces on the response as a
          // generic ECONNRESET. Destroying the response with the timeout error
          // first lets a stalled body be reported as the timeout it is.
          if (res && !res.complete) {
            res.destroy(timeoutError);
          }
          req.destroy(timeoutError);
        });

        req.on('response', (response) => {
          res = response;
          resolve(new NodeHttpClientResponse(response));
        });

        req.on('error', (error) => {
          reject(error);
        });

        req.once('socket', (socket) => {
          if (socket.connecting) {
            socket.once(
              isInsecureConnection ? 'connect' : 'secureConnect',
              () => {
                // Send payload; we're safe:
                req.write(requestData);
                req.end();
              }
            );
          } else {
            // we're already connected
            req.write(requestData);
            req.end();
          }
        });
      }
    );

    return requestPromise;
  }
}

export class NodeHttpClientResponse extends HttpClientResponse
  implements NodeHttpClientResponseInterface {
  _res: http_.IncomingMessage;

  constructor(res: http_.IncomingMessage) {
    // @ts-ignore
    super(res.statusCode, res.headers || {});
    this._res = res;
  }

  getRawResponse(): http_.IncomingMessage {
    return this._res;
  }

  toStream(streamCompleteCallback: () => void): http_.IncomingMessage {
    // The raw response is itself the stream, so we just return that. To be
    // backwards compatible, we should invoke the streamCompleteCallback only
    // once the stream has been fully consumed.
    this._res.once('end', () => streamCompleteCallback());
    return this._res;
  }

  toJSON(): any {
    return new Promise((resolve, reject) => {
      let response = '';

      this._res.setEncoding('utf8');
      this._res.on('data', (chunk) => {
        response += chunk;
      });
      // Node only emits 'error' on an IncomingMessage when a listener is
      // attached; without one, a connection that stalls or drops after the
      // headers arrive never emits 'end' either, and this promise would hang
      // forever. See https://github.com/stripe/stripe-node/issues/2814.
      this._res.once('error', (error) => {
        reject(HttpClient.makeResponseBodyError(error));
      });
      // Not every truncated response emits an 'error', so treat closing before
      // the body is complete as a failure too.
      this._res.once('close', () => {
        if (!this._res.complete) {
          reject(HttpClient.makeResponseBodyError(null));
        }
      });
      this._res.once('end', () => {
        try {
          resolve(this._parseResponseBody(response));
        } catch (e) {
          reject(e);
        }
      });
    });
  }
}
