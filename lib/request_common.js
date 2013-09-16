'use strict';

var https = require('https');
var querystring = require('querystring');

// Need to fill in this._type and this.auth when inheriting.
function RequestCommon(type, endpoint) {
  this._type = type;
  this._endpoint = endpoint || type + 's';
  this._auth = '';
}

RequestCommon.stripeOptions = {
  host: 'api.stripe.com',
  port: '443'
};

RequestCommon.prototype._request = function(method, path, data, callback) {
  // Check for data/callback.
  if (typeof data === 'function') {
    callback = data;
    data = {};
  }

  // Convert first level of nexted data structures to `foo[bar]=baz` syntax.
  data = data || {};
  var keys = Object.keys(data);
  for (var i = 0, ii = keys.length; i < ii; i += 1) {
    var key = keys[i];
    if (data[key] !== null && typeof data[key] === 'string') {
      var nested = data[key];
      var nestedKeys = Object.keys(nested);
      delete data[key];

      for (var j = nestedKeys, jj = nestedKeys.length; j < jj; j += 1) {
        var nestedKey = nestedKeys[j];
        data[key + '[' + k + ']'] = nested[nestedKey];
      }
    }
  }

  var requestData = querystring.stringify(data);
  var requestOptions = {
    host: RequestCommon.stripeOptions.host,
    port: RequestCommon.stripeOptions.port,
    path: path,
    method: method,
    headers: {
      'Authorization': this._auth,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': requestData.length
    }
  };

  var req = https.request(requestOptions);
  RequestCommon.setupResponseHandler(req, callback);
  req.write(requestData);
  req.end();
}

RequestCommon.prototype._post = function(path, data, callback) {
  this._request('POST', path, data, callback);
}

RequestCommon.prototype._get = function(path, data, callback) {
  this._request('GET', path, data, callback);
}

RequestCommon.prototype._del = function(path, data, callback) {
  this._request('DELETE', path, data, callback);
}

RequestCommon.prototype._requireId = function(id, cb) {
  return this._require(this._type, id, cb);
}

RequestCommon.prototype._require = function(type, id, cb) {
  if (!id || typeof id !== 'string') {
    if (id) {
      cb = id;
    }

    if (cb && typeof cb !== 'string') {
      cb(new Error(type + '_id required.'));
    } else {
      throw new Error("You didn't pass in a callback. See https://stripe.com/docs/api/node for code examples.");
    }
    return false;
  }
  return true;
}

/** Set up HTTPS response and error handlers. */
RequestCommon.setupResponseHandler = function(req, callback) {
  if (!callback || typeof callback !== 'function') {
    throw new Error("You didn't pass in a callback. See https://stripe.com/docs/api/node for code examples.");
    return;
  }
  req.on('response', function(res) {
    var response = '';

    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      response += chunk;
    });
    res.on('end', function() {
      var err;
      try {
        response = JSON.parse(response);
        if (200 != res.statusCode) {
          err = new Error(response.error.message);
          err.name = response.error.type;
          err.code = response.error.code;
          err.param = response.error.param;
          response = null;
        }
      } catch (e) {
        err = new Error('Invalid JSON from stripe.com');
        response = null;
      }
      callback(err, response);
    });
  });

  req.on('error', function(error) {
    callback(error);
  });
}

module.exports = RequestCommon;
