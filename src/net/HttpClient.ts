type TimeoutError = TypeError & {code?: string};

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
    requestData: RequestData,
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
}

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
}
