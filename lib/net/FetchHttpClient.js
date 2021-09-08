'use strict';

const {HttpClient, HttpClientResponse} = require('./HttpClient');

/**
 * HTTP client which uses a `fetch` function to issue requests. This fetch
 * function is expected to be the Web Fetch API function or an equivalent, such
 * as the function provided by the node-fetch package (https://github.com/node-fetch/node-fetch).
 */
class FetchHttpClient extends HttpClient {
  constructor(fetchFn) {
    super();
    this._fetchFn = fetchFn;
  }

  /** @override. */
  getClientName() {
    return 'fetch';
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
    const isInsecureConnection = protocol === 'http';

    const url = new URL(
      path,
      `${isInsecureConnection ? 'http' : 'https'}://${host}`
    );
    url.port = port;

    const fetchPromise = this._fetchFn(url.toString(), {
      method,
      headers,
      body: requestData || undefined,
    });

    // The Fetch API does not support passing in a timeout natively, so a
    // timeout promise is constructed to race against the fetch and preempt the
    // request, simulating a timeout.
    //
    // This timeout behavior differs from Node:
    // - Fetch uses a single timeout for the entire length of the request.
    // - Node is more fine-grained and resets the timeout after each stage of
    //   the request.
    //
    // As an example, if the timeout is set to 30s and the connection takes 20s
    // to be established followed by 20s for the body, Fetch would timeout but
    // Node would not. The more fine-grained timeout cannot be implemented with
    // fetch.
    let pendingTimeoutId;
    const timeoutPromise = new Promise((_, reject) => {
      pendingTimeoutId = setTimeout(() => {
        pendingTimeoutId = null;
        reject(HttpClient.makeTimeoutError());
      }, timeout);
    });

    return Promise.race([fetchPromise, timeoutPromise])
      .then((res) => {
        return new FetchHttpClientResponse(res);
      })
      .finally(() => {
        if (pendingTimeoutId) {
          clearTimeout(pendingTimeoutId);
        }
      });
  }
}

class FetchHttpClientResponse extends HttpClientResponse {
  constructor(res) {
    super(
      res.status,
      FetchHttpClientResponse._transformHeadersToObject(res.headers)
    );
    this._res = res;
  }

  getRawResponse() {
    return this._res;
  }

  toStream(streamCompleteCallback) {
    // Unfortunately `fetch` does not have event handlers for when the stream is
    // completely read. We therefore invoke the streamCompleteCallback right
    // away. This callback emits a response event with metadata and completes
    // metrics, so it's ok to do this without waiting for the stream to be
    // completely read.
    streamCompleteCallback();

    // Fetch's `body` property is expected to be a readable stream of the body.
    return this._res.body;
  }

  toJSON() {
    return this._res.json();
  }

  static _transformHeadersToObject(headers) {
    // Fetch uses a Headers instance so this must be converted to a barebones
    // JS object to meet the HttpClient interface.
    const headersObj = {};

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

module.exports = {FetchHttpClient, FetchHttpClientResponse};
