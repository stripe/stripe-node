import * as http_ from 'http';
import * as https_ from 'https';
import {RequestHeaders, RequestData} from '../Types.js';
import {
  HttpClient,
  HttpClientResponse,
  HttpClientResponseInterface,
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
export class NodeHttpClient extends HttpClient {
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
  ): Promise<HttpClientResponseInterface> {
    const isInsecureConnection = protocol === 'http';

    let agent = this._agent;
    if (!agent) {
      agent = isInsecureConnection ? defaultHttpAgent : defaultHttpsAgent;
    }

    const requestPromise = new Promise<HttpClientResponseInterface>(
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

        req.setTimeout(timeout, () => {
          req.destroy(HttpClient.makeTimeoutError());
        });

        req.on('response', (res) => {
          resolve(new NodeHttpClientResponse(res));
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
  implements HttpClientResponseInterface {
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
      this._res.once('end', () => {
        try {
          resolve(JSON.parse(response));
        } catch (e) {
          reject(e);
        }
      });
    });
  }
}
