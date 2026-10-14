import {RequestHeaders, RequestData, ResponseHeaders} from '../Types.js';
import {parseHeadersForFetch} from '../utils.js';
import {
  HttpClient,
  HttpClientResponse,
  FetchHttpClientInterface,
  FetchHttpClientResponseInterface,
} from './HttpClient.js';

/**
 * Keeps the request timeout applicable to work that happens after the response
 * headers arrive, so that `timeout` bounds the whole request rather than just
 * the time to headers.
 */
type RequestTimeout = {
  /** Applies the remaining timeout to reading the response body. */
  guard: <T>(promise: Promise<T>) => Promise<T>;
  /** Disarms the timeout; call once the body is read or handed off. */
  release: () => void;
};

const NOOP_REQUEST_TIMEOUT: RequestTimeout = {
  guard: (promise) => promise,
  release: (): void => {},
};

type TimedFetchResponse = {
  res: Response;
  requestTimeout: RequestTimeout;
};

type FetchWithTimeout = (
  url: string,
  init: RequestInit,
  timeout: number
) => Promise<TimedFetchResponse>;

/**
 * HTTP client which uses a `fetch` function to issue requests.
 *
 * By default relies on the global `fetch` function, but an optional function
 * can be passed in. If passing in a function, it is expected to match the Web
 * Fetch API. As an example, this could be the function provided by the
 * node-fetch package (https://github.com/node-fetch/node-fetch).
 */
export class FetchHttpClient extends HttpClient
  implements FetchHttpClientInterface {
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
    return async (url, init, timeout): Promise<TimedFetchResponse> => {
      let pendingTimeoutId: ReturnType<typeof setTimeout> | null;
      const timeoutPromise = new Promise<never>((_, reject) => {
        pendingTimeoutId = setTimeout(() => {
          pendingTimeoutId = null;
          reject(HttpClient.makeTimeoutError());
        }, timeout);
      });
      // The timeout keeps racing against the body read below, so make sure its
      // rejection is always observed even if nothing is racing it any more.
      timeoutPromise.catch(() => {});

      const release = (): void => {
        if (pendingTimeoutId) {
          clearTimeout(pendingTimeoutId);
          pendingTimeoutId = null;
        }
      };

      const requestTimeout: RequestTimeout = {
        // Racing cannot cancel the underlying read, but it does stop the
        // request from hanging past the timeout.
        guard: (promise) => Promise.race([promise, timeoutPromise]),
        release,
      };

      try {
        const res = await Promise.race([fetchFn(url, init), timeoutPromise]);
        return {res, requestTimeout};
      } catch (err) {
        release();
        throw err;
      }
    };
  }

  private static makeFetchWithAbortTimeout(
    fetchFn: typeof fetch
  ): FetchWithTimeout {
    return async (url, init, timeout): Promise<TimedFetchResponse> => {
      // Use AbortController because AbortSignal.timeout() was added later in Node v17.3.0, v16.14.0
      const abort = new AbortController();
      let timeoutId: ReturnType<typeof setTimeout> | null = setTimeout(() => {
        timeoutId = null;
        abort.abort(HttpClient.makeTimeoutError());
      }, timeout);

      const release = (): void => {
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
      };

      // Some implementations, like node-fetch, do not respect the reason passed to AbortController.abort()
      // and instead it always throws an AbortError
      // We catch this case to normalise all timeout errors
      const normalizeAbortError = (err: unknown): never => {
        if ((err as any)?.name === 'AbortError') {
          throw HttpClient.makeTimeoutError();
        }
        throw err;
      };

      const requestTimeout: RequestTimeout = {
        // The signal stays armed after the headers arrive, so aborting it also
        // interrupts the body read.
        guard: (promise) => promise.catch(normalizeAbortError),
        release,
      };

      try {
        const res = await fetchFn(url, {
          ...init,
          signal: abort.signal,
        });
        return {res, requestTimeout};
      } catch (err) {
        // Only release on failure; a successful response still needs the
        // timeout armed while its body is read.
        release();
        return normalizeAbortError(err);
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
    requestData: string,
    protocol: string,
    timeout: number
  ): Promise<FetchHttpClientResponseInterface> {
    const isInsecureConnection = protocol === 'http';

    if (!path.startsWith('/')) {
      throw new Error(`Only relative paths are supported, got: "${path}"`);
    }
    const url = new URL(
      `${isInsecureConnection ? 'http' : 'https'}://${host}${path}`
    );
    url.port = port;

    // For methods which expect payloads, we should always pass a body value
    // even when it is empty. Without this, some JS runtimes (eg. Deno) will
    // inject a second Content-Length header. See https://github.com/stripe/stripe-node/issues/1519
    // for more details.
    const methodHasPayload =
      method == 'POST' || method == 'PUT' || method == 'PATCH';
    const body = requestData || (methodHasPayload ? '' : undefined);

    const {res, requestTimeout} = await this._fetchFn(
      url.toString(),
      {
        method,
        headers: parseHeadersForFetch(headers),
        body: body,
      },
      timeout
    );
    return new FetchHttpClientResponse(res, requestTimeout);
  }
}

export class FetchHttpClientResponse extends HttpClientResponse
  implements FetchHttpClientResponseInterface {
  _res: Response;
  _requestTimeout: RequestTimeout;

  constructor(res: Response, requestTimeout?: RequestTimeout) {
    super(
      res.status,
      FetchHttpClientResponse._transformHeadersToObject(res.headers)
    );
    this._res = res;
    this._requestTimeout = requestTimeout ?? NOOP_REQUEST_TIMEOUT;
  }

  getRawResponse(): Response {
    return this._res;
  }

  toStream(
    streamCompleteCallback: () => void
  ): ReadableStream<Uint8Array> | null {
    // The caller consumes this stream on its own schedule, and a legitimate
    // download may well outlast `timeout`, so hand ownership of the body over
    // rather than aborting it.
    this._requestTimeout.release();

    // Unfortunately `fetch` does not have event handlers for when the stream is
    // completely read. We therefore invoke the streamCompleteCallback right
    // away. This callback emits a response event with metadata and completes
    // metrics, so it's ok to do this without waiting for the stream to be
    // completely read.
    streamCompleteCallback();

    // Fetch's `body` property is expected to be a readable stream of the body.
    return this._res.body;
  }

  async toJSON(): Promise<any> {
    let text: string;
    try {
      // `timeout` is meant to cover the entire request, so it has to stay armed
      // while the body is read. Otherwise a connection that stalls or drops
      // after the headers arrive hangs forever.
      // See https://github.com/stripe/stripe-node/issues/2814.
      text = await this._requestTimeout.guard(this._res.text());
    } catch (e) {
      throw HttpClient.makeResponseBodyError(e);
    } finally {
      this._requestTimeout.release();
    }

    return this._parseResponseBody(text);
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
