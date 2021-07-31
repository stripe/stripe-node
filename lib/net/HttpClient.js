'use strict';

class HttpClient {
  makeRequest(
    host,
    port,
    path,
    method,
    headers,
    requestData,
    isInsecureConnection,
    agent,
    timeout
  ) {
    throw new Error('makeRequest not implemented.');
  }

  static makeTimeoutError() {
    const timeoutErr = new TypeError('ETIMEDOUT');
    timeoutErr.code = 'ETIMEDOUT';
    return timeoutErr;
  }
}

HttpClient.Response = class {
  constructor(statusCode, headers) {
    this.statusCode = statusCode;
    this.headers = headers;
  }

  getStatusCode() {
    return this.statusCode;
  }

  getHeaders() {
    return this.headers;
  }
};

module.exports = HttpClient;
