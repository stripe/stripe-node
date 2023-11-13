import {RequestHeaders, RequestData, ResponseHeaders} from '../Types.js';
import {
  HttpClient,
  HttpClientInterface,
  HttpClientResponse,
  HttpClientResponseInterface,
} from './HttpClient.js';

type FetchWithTimeout = (
  url: string,
  init: RequestInit,
  timeout: number
) => Promise<Response>;

/**
 * HTTP client which uses a `fetch` function to issue requests.
 *
 * By default relies on the global `fetch` function, but an optional function
 * can be passed in. If passing in a function, it is expected to match the Web
 * Fetch API. As an example, this could be the function provided by the
 * node-fetch package (https://github.com/node-fetch/node-fetch).
 */
export class FetchHttpClient extends HttpClient implements HttpClientInterface {
  private readonly _fetchFn: FetchWithTimeout;

  constructor(fetchFn?: typeof fetch) {
    super();

    // Default to global fetch if available
    if (!fetchFn) {
      if (!globalThis.fetch) {
        throw new Error(
          'fetch() function not provided and is not defined in the global scope. ' +
            'You must provide a fetch implementation.'
        );
      }
      fetchFn = globalThis.fetch;
    }

    // Both timeout behaviors differs from Node:
    // - Fetch uses a single timeout for the entire length of the request.
    // - Node is more fine-grained and resets the timeout after each stage of the request.
    if (globalThis.AbortController) {
      // Utilise native AbortController if available
      // AbortController was added in Node v15.0.0, v14.17.0
      this._fetchFn = FetchHttpClient.makeFetchWithAbortTimeout(fetchFn);
    } else {
      // Fall back to racing against a timeout promise if not available in the runtime
      // This does not actually cancel the underlying fetch operation or resources
      this._fetchFn = FetchHttpClient.makeFetchWithRaceTimeout(fetchFn);
    }
  }

  private static makeFetchWithRaceTimeout(
    fetchFn: typeof fetch
  ): FetchWithTimeout {
    return (url, init, timeout): Promise<Response> => {
      let pendingTimeoutId: NodeJS.Timeout | null;
      const timeoutPromise = new Promise<never>((_, reject) => {
        pendingTimeoutId = setTimeout(() => {
          pendingTimeoutId = null;
          reject(HttpClient.makeTimeoutError());
        }, timeout);
      });

      const fetchPromise = fetchFn(url, init);
      return Promise.race([fetchPromise, timeoutPromise]).finally(() => {
        if (pendingTimeoutId) {
          clearTimeout(pendingTimeoutId);
        }
      });
    };
  }

  private static makeFetchWithAbortTimeout(
    fetchFn: typeof fetch
  ): FetchWithTimeout {
    return async (url, init, timeout): Promise<Response> => {
      // Use AbortController because AbortSignal.timeout() was added later in Node v17.3.0, v16.14.0
      const abort = new AbortController();
      let timeoutId: NodeJS.Timeout | null = setTimeout(() => {
        timeoutId = null;
        abort.abort(HttpClient.makeTimeoutError());
      }, timeout);
      try {
        return await fetchFn(url, {
          ...init,
          signal: abort.signal,
        });
      } catch (err) {
        // Some implementations, like node-fetch, do not respect the reason passed to AbortController.abort()
        // and instead it always throws an AbortError
        // We catch this case to normalise all timeout errors
        if ((err as any).name === 'AbortError') {
          throw HttpClient.makeTimeoutError();
        } else {
          throw err;
        }
      } finally {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      }
    };
  }

  /** @override. */
  getClientName(): string {
    return 'fetch';
  }

  async makeRequest(
    host: string,
    port: string,
    path: string,
    method: string,
    headers: RequestHeaders,
    requestData: RequestData,
    protocol: string,
    timeout: number
  ): Promise<HttpClientResponseInterface> {
    const isInsecureConnection = protocol === 'http';

    const url = new URL(
      path,
      `${isInsecureConnection ? 'http' : 'https'}://${host}`
    );
    url.port = port;

    // For methods which expect payloads, we should always pass a body value
    // even when it is empty. Without this, some JS runtimes (eg. Deno) will
    // inject a second Content-Length header. See https://github.com/stripe/stripe-node/issues/1519
    // for more details.
    const methodHasPayload =
      method == 'POST' || method == 'PUT' || method == 'PATCH';
    const body = requestData || (methodHasPayload ? '' : undefined);

    const res = await this._fetchFn(
      url.toString(),
      {
        method,
        // @ts-ignore
        headers,
        // @ts-ignore
        body,
      },
      timeout
    );
    return new FetchHttpClientResponse(res);
  }
}

export class FetchHttpClientResponse extends HttpClientResponse
  implements HttpClientResponseInterface {
  _res: Response;

  constructor(res: Response) {
    super(
      res.status,
      FetchHttpClientResponse._transformHeadersToObject(res.headers)
    );
    this._res = res;
  }

  getRawResponse(): Response {
    return this._res;
  }

  toStream(
    streamCompleteCallback: () => void
  ): ReadableStream<Uint8Array> | null {
    // Unfortunately `fetch` does not have event handlers for when the stream is
    // completely read. We therefore invoke the streamCompleteCallback right
    // away. This callback emits a response event with metadata and completes
    // metrics, so it's ok to do this without waiting for the stream to be
    // completely read.
    streamCompleteCallback();

    // Fetch's `body` property is expected to be a readable stream of the body.
    return this._res.body;
  }

  toJSON(): Promise<any> {
    return this._res.json();
  }

  static _transformHeadersToObject(headers: Headers): ResponseHeaders {
    // Fetch uses a Headers instance so this must be converted to a barebones
    // JS object to meet the HttpClient interface.
    const headersObj: ResponseHeaders = {};
    for (const entry of headers) {
      if (!Array.isArray(entry) || entry.length != 2) {
        throw new Error(
          'Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object.'
        );
      }

      headersObj[entry[0]] = entry[1];
    }

    return headersObj;
  }
}
