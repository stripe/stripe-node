'use strict';

// prettier-ignore
if (typeof USE_NODE_HTTP_LIBRARIES === 'undefined' || USE_NODE_HTTP_LIBRARIES) {

const http = require('http');
const https = require('https');

const HttpClient = require('./HttpClient');

const defaultHttpAgent = new http.Agent({keepAlive: true});
const defaultHttpsAgent = new https.Agent({keepAlive: true});

class NodeHttpClient extends HttpClient {
  makeRequest(
    host,
    port,
    path,
    method,
    headers,
    requestData,
    isInsecureConnection,
    agent,
    timeout) {
    if (agent == null) {
      agent = isInsecureConnection ? defaultHttpAgent : defaultHttpsAgent;
    }

    const requestPromise = new Promise((resolve, reject) => {
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
        req.destroy(HttpClient.makeTimeoutError())
      });

      req.on('response', (res) => {
        resolve(new NodeHttpResponse(res));
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
    });

    return requestPromise;
  }

}

class NodeHttpResponse extends HttpClient.Response {
  constructor(res) {
    super(res.statusCode, res.headers || {});
    this.res = res;
  }

  getRawResponse() {
    return this.res;
  }

  toJSON() {
    return new Promise((resolve, reject) => {
      let response = '';

      this.res.setEncoding('utf8');
      this.res.on('data', (chunk) => {
        response += chunk;
      });
      this.res.once('end', () => {
        try {
          resolve(JSON.parse(response));
        } catch (e) {
          reject(e);
        }
      });
    });
  }
};

module.exports = NodeHttpClient;

// prettier-ignore
}
