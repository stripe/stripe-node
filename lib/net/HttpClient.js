'use strict';

/**
 * Encapsulates the logic for issuing a request to the Stripe API. This is an
 * experimental interface and is not yet stable.
 */
class HttpClient {
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
    const timeoutErr = new TypeError(HttpClient.TIMEOUT_ERROR_CODE);
    timeoutErr.code = HttpClient.TIMEOUT_ERROR_CODE;
    return timeoutErr;
  }
}

HttpClient.TIMEOUT_ERROR_CODE = 'ETIMEDOUT';

class HttpClientResponse {
  constructor(statusCode, headers) {
    this._statusCode = statusCode;
    this._headers = headers;
  }

  getStatusCode() {
    return this._statusCode;
  }

  getHeaders() {
    return this._headers;
  }

  getRawResponse() {
    throw new Error('getRawResponse not implemented.');
  }

  toStream(streamCompleteCallback) {
    throw new Error('toStream not implemented.');
  }

  toJSON() {
    throw new Error('toJSON not implemented.');
  }
}

module.exports = {HttpClient, HttpClientResponse};
