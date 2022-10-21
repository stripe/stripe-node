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
class HttpClient {
  static CONNECTION_CLOSED_ERROR_CODES: string[];
  static TIMEOUT_ERROR_CODE: string;

  /** The client name used for diagnostics. */
  getClientName() {
    throw new Error('getClientName not implemented.');
  }

  makeRequest(
    host,
    port,
    path,
    method,
    headers,
    requestData,
    protocol,
    timeout
  ) {
    throw new Error('makeRequest not implemented.');
  }

  /** Helper to make a consistent timeout error across implementations. */
  static makeTimeoutError() {
    const timeoutErr: TimeoutError = new TypeError(
      HttpClient.TIMEOUT_ERROR_CODE
    );
    timeoutErr.code = HttpClient.TIMEOUT_ERROR_CODE;
    return timeoutErr;
  }
}

HttpClient.CONNECTION_CLOSED_ERROR_CODES = ['ECONNRESET', 'EPIPE'];
HttpClient.TIMEOUT_ERROR_CODE = 'ETIMEDOUT';

class HttpClientResponse {
  _statusCode: number;
  _headers: Record<string, string>;

  constructor(statusCode, headers) {
    this._statusCode = statusCode;
    this._headers = headers;
  }

  getStatusCode(): number {
    return this._statusCode;
  }

  getHeaders(): Record<string, string> {
    return this._headers;
  }

  getRawResponse() {
    throw new Error('getRawResponse not implemented.');
  }

  toStream(streamCompleteCallback) {
    throw new Error('toStream not implemented.');
  }

  toJSON(): any {
    throw new Error('toJSON not implemented.');
  }
}

export = {HttpClient, HttpClientResponse};
