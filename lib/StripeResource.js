'use strict';

var http = require('http');
var https = require('https');
var path = require('path');
var when = require('when');

var utils = require('./utils');
var Error = require('./Error');

var hasOwn = {}.hasOwnProperty;

var BLACKLISTED_FINGERPRINTS = require('fs').readFileSync(
  path.join(__dirname, '../data/blacklisted_fingerprints'), 'utf8'
).replace(/^\s+|\s+$/g, '').split('\n');

// Provide extension mechanism for Stripe Resource Sub-Classes
StripeResource.extend = utils.protoExtend;

// Expose method-creator & prepared (basic) methods
StripeResource.method = require('./StripeMethod');
StripeResource.BASIC_METHODS = require('./StripeMethod.basic');

/**
 * Encapsulates request logic for a Stripe Resource
 */
function StripeResource(stripe, urlData) {

  this._stripe = stripe;
  this._urlData = urlData || {};

  this.basePath = utils.makeURLInterpolator(stripe.getApiField('basePath'));
  this.path = utils.makeURLInterpolator(this.path);

  if (this.includeBasic) {
    this.includeBasic.forEach(function(methodName) {
      this[methodName] = StripeResource.BASIC_METHODS[methodName];
    }, this);
  }

  this.initialize.apply(this, arguments);

}

StripeResource.prototype = {

  path: '',

  initialize: function() {},

  createFullPath: function(commandPath, urlData) {
    return path.join(
      this.basePath(urlData),
      this.path(urlData),
      typeof commandPath == 'function' ?
        commandPath(urlData) : commandPath
    ).replace(/\\/g, '/'); // ugly workaround for Windows
  },

  createUrlData: function() {
    var urlData = {};
    // Merge in baseData
    for (var i in this._urlData) {
      if (hasOwn.call(this._urlData, i)) {
        urlData[i] = this._urlData[i];
      }
    }
    return urlData;
  },

  createDeferred: function(callback) {
      var deferred = when.defer();

      if (callback) {
        // Callback, if provided, is a simply translated to Promise'esque:
        // (Ensure callback is called outside of promise stack)
        deferred.promise.then(function(res) {
          setTimeout(function(){ callback(null, res) }, 0);
        }, function(err) {
          setTimeout(function(){ callback(err, null); }, 0);
        });
      }

      return deferred;
  },

  _timeoutHandler: function(timeout, req, callback) {
    var self = this;
    return function() {
      var timeoutErr = new Error('ETIMEDOUT');
      timeoutErr.code = 'ETIMEDOUT';

      req._isAborted = true;
      req.abort();

      callback.call(
        self,
        new Error.StripeConnectionError({
          message: 'Request aborted due to timeout being reached (' + timeout + 'ms)',
          detail: timeoutErr
        }),
        null
      );
    }
  },

  _responseHandler: function(req, callback) {
    var self = this;
    return function(res) {
      var response = '';

      res.setEncoding('utf8');
      res.on('data', function(chunk) {
        response += chunk;
      });
      res.on('end', function() {
        try {
          response = JSON.parse(response);
          if (response.error) {
            var err;
            if (res.statusCode === 401) {
              err = new Error.StripeAuthenticationError(response.error);
            } else {
              err = Error.StripeError.generate(response.error);
            }
            return callback.call(self, err, null);
          }
        } catch (e) {
          return callback.call(
            self,
            new Error.StripeAPIError({
              message: 'Invalid JSON received from the Stripe API',
              response: response,
              exception: e
            }),
            null
          );
        }
        callback.call(self, null, response);
      });
    };
  },

  _errorHandler: function(req, callback) {
    var self = this;
    return function(error) {
      if (req._isAborted) return; // already handled
      callback.call(
        self,
        new Error.StripeConnectionError({
          message: 'An error occurred with our connection to Stripe',
          detail: error
        }),
        null
      );
    }
  },

  _request: function(method, path, data, auth, callback) {

    var requestData = utils.stringifyRequestData(data || {});
    var self = this;

    var apiVersion = this._stripe.getApiField('version');
    var headers = {
      // Use specified auth token or use default from this stripe instance:
      'Authorization': auth ?
        'Basic ' + new Buffer(auth + ':').toString('base64') :
        this._stripe.getApiField('auth'),
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': requestData.length,
      'User-Agent': 'Stripe/v1 NodeBindings/' + this._stripe.getConstant('PACKAGE_VERSION')
    };

    if (apiVersion) {
      headers['Stripe-Version'] = apiVersion;
    }

    // Grab client-user-agent before making the request:
    this._stripe.getClientUserAgent(function(cua) {
      headers['X-Stripe-Client-User-Agent'] = cua;
      makeRequest();
    });

    function makeRequest() {

      var timeout = self._stripe.getApiField('timeout');
      var isInsecureConnection = self._stripe.getApiField('protocol') == 'http';

      var req = (
        isInsecureConnection ? http : https
      ).request({
        host: self._stripe.getApiField('host'),
        port: self._stripe.getApiField('port'),
        path: path,
        method: method,
        agent: self._stripe.getApiField('agent'),
        headers: headers,
        ciphers: "DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5"
      });

      req.setTimeout(timeout, self._timeoutHandler(timeout, req, callback));
      req.on('response', self._responseHandler(req, callback));
      req.on('error', self._errorHandler(req, callback));

      req.on('socket', function(socket) {
        socket.on((isInsecureConnection ? 'connect' : 'secureConnect'), function() {
          if (!isInsecureConnection && 
            BLACKLISTED_FINGERPRINTS.indexOf(socket.getPeerCertificate().fingerprint) > -1) {
            
            req.abort();
            return callback.call(self,
              new Error.StripeError({
                message: 'Revoked SSL Certificate',
                detail: 'Invalid server certificate. You tried to connect to a server that has a revoked SSL certificate, which means we cannot securely send data to that server. Please email support@stripe.com if you need help connecting to the correct API server.'
              })
            );
          }
          // Send payload; we're safe:
          req.write(requestData);
          req.end();
        });
      });

    }

  }

};

module.exports = StripeResource;
