'use strict';

const HttpClient = require('./HttpClient');

class FetchHttpClient extends HttpClient {
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
    if (agent) {
      throw new Error('Agents are not supported in `FetchHttpClient`.');
    }

    const url = new URL(
      path,
      `${isInsecureConnection ? 'http' : 'https'}://${host}`
    );
    url.port = port;

    const fetchPromise = fetch(url.toString(), {
      method,
      headers,
      body: requestData || undefined,
    });

    let timeoutId;
    const timeoutPromise = new Promise((_, reject) => {
      timeoutId = setTimeout(() => {
        timeoutId = null;
        reject(HttpClient.makeTimeoutError());
      }, timeout);
    });

    return Promise.race([fetchPromise, timeoutPromise])
      .then((res) => {
        return new FetchHttpResponse(res);
      })
      .finally(() => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      });
  }
}

class FetchHttpResponse extends HttpClient.Response {
  constructor(res) {
    super(
      res.statusCode,
      FetchHttpResponse._transformHeadersToObject(res.headers)
    );
    this.res = res;
  }

  getRawResponse() {
    return this.res;
  }

  toJSON() {
    return this.res.json();
  }

  static _transformHeadersToObject(headers) {
    const headersObj = {};

    for (const entry of headers) {
      headersObj[entry[0]] = headers[entry[1]];
    }

    return headersObj;
  }
}

module.exports = FetchHttpClient;
