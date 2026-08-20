import {RequestData, RequestHeaders, ResponseHeaders} from '../Types.js';

type TimeoutError = TypeError & {code?: string};

export interface HttpClientInterface {
  getClientName: () => string;
  makeRequest: (
    host: string,
    port: string,
    path: string,
    method: string,
    headers: RequestHeaders,
    requestData: string,
    protocol: string,
    timeout: number
  ) => Promise<HttpClientResponseInterface>;
}

export interface HttpClientResponseInterface {
  getStatusCode: () => number;
  getHeaders: () => ResponseHeaders;
  getRawResponse: () => unknown;
  toStream: (streamCompleteCallback: () => void) => unknown;
  toJSON: () => Promise<any>;
}

/**
 * Interface for Node HTTP client with Node-specific stream types.
 */
export interface NodeHttpClientInterface extends HttpClientInterface {
  makeRequest: (
    host: string,
    port: string,
    path: string,
    method: string,
    headers: RequestHeaders,
    requestData: string,
    protocol: string,
    timeout: number
  ) => Promise<NodeHttpClientResponseInterface>;
}

export interface NodeHttpClientResponseInterface
  extends HttpClientResponseInterface {
  // TODO(DEVSDK-3112): Replace with WHATWG ReadableStream in next major version.
  // eslint-disable-next-line wintertc-compat
  toStream: (streamCompleteCallback: () => void) => NodeJS.ReadableStream;
}

/**
 * Interface for Fetch HTTP client with Web Streams API types.
 */
export interface FetchHttpClientInterface extends HttpClientInterface {
  makeRequest: (
    host: string,
    port: string,
    path: string,
    method: string,
    headers: RequestHeaders,
    requestData: string,
    protocol: string,
    timeout: number
  ) => Promise<FetchHttpClientResponseInterface>;
}

export interface FetchHttpClientResponseInterface
  extends HttpClientResponseInterface {
  toStream: (
    streamCompleteCallback: () => void
  ) => ReadableStream<Uint8Array> | null;
}

/**
 * Encapsulates the logic for issuing a request to the Stripe API.
 *
 * A custom HTTP client should should implement:
 * 1. A response class which extends HttpClientResponse and wraps around their
 *    own internal representation of a response.
 * 2. A client class which extends HttpClient and implements all methods,
 *    returning their own response class when making requests.
 */
export class HttpClient implements HttpClientInterface {
  static CONNECTION_CLOSED_ERROR_CODES: string[];
  static TIMEOUT_ERROR_CODE: string;

  /** The client name used for diagnostics. */
  getClientName(): string {
    throw new Error('getClientName not implemented.');
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
    throw new Error('makeRequest not implemented.');
  }

  /** Helper to make a consistent timeout error across implementations. */
  static makeTimeoutError(): TimeoutError {
    const timeoutErr: TimeoutError = new TypeError(
      HttpClient.TIMEOUT_ERROR_CODE
    );
    timeoutErr.code = HttpClient.TIMEOUT_ERROR_CODE;
    return timeoutErr;
  }

  /**
   * Helper to wrap a failure that occurred while reading a response body, so
   * that implementations can report one consistently.
   */
  static makeResponseBodyError(
    exception: unknown
  ): HttpClientResponseBodyError {
    const error = new HttpClientResponseBodyError(
      'Failed to read the response body'
    );
    error.exception = exception;
    if (exception && typeof (exception as {code?: unknown}).code === 'string') {
      error.code = (exception as {code: string}).code;
    }
    return error;
  }
}

// Public API accessible via Stripe.HttpClient
HttpClient.CONNECTION_CLOSED_ERROR_CODES = ['ECONNRESET', 'EPIPE'];
HttpClient.TIMEOUT_ERROR_CODE = 'ETIMEDOUT';

export class HttpClientResponse implements HttpClientResponseInterface {
  _statusCode: number;
  _headers: ResponseHeaders;

  constructor(statusCode: number, headers: ResponseHeaders) {
    this._statusCode = statusCode;
    this._headers = headers;
  }

  getStatusCode(): number {
    return this._statusCode;
  }

  getHeaders(): ResponseHeaders {
    return this._headers;
  }

  getRawResponse(): unknown {
    throw new Error('getRawResponse not implemented.');
  }

  toStream(streamCompleteCallback: () => void): unknown {
    throw new Error('toStream not implemented.');
  }

  toJSON(): any {
    throw new Error('toJSON not implemented.');
  }

  protected _parseResponseBody(body: string): any {
    try {
      return JSON.parse(body);
    } catch (e) {
      if (e instanceof Error) {
        (e as any).rawBody = body;
      }
      throw e;
    }
  }
}

export class HttpClientRuntimeError extends Error {}

/**
 * Raised when the response body could not be read to completion, e.g. because
 * the connection stalled or was severed after the headers arrived. This is
 * distinct from a body that was received in full but is not valid JSON, so that
 * a transport failure can be surfaced as a connection error rather than as a
 * parsing error.
 */
export class HttpClientResponseBodyError extends Error {
  /** The error code of the underlying failure, when the runtime supplies one. */
  code?: string;
  /** The underlying failure, when the runtime supplies one. */
  exception?: unknown;
}
