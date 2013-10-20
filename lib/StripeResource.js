'use strict';

var http = require('http');
var https = require('https');
var path = require('path');
var when = require('when');

var utils = require('./utils');
var Error = require('./Error');

var hasOwn = {}.hasOwnProperty;

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

  this.basePath = utils.makeInterpolator(stripe.getApiField('basePath'));
  this.path = utils.makeInterpolator(this.path);

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
    );
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

  _request: function(method, path, data, callback) {

    var requestData = utils.stringifyRequestData(data || {});
    var self = this;

    var apiVersion = this._stripe.getApiField('version');
    var headers = {
      'Authorization': this._stripe.getApiField('auth'),
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': requestData.length
    };

    if (apiVersion) {
      headers['Stripe-Version'] = apiVersion;
    }

    var req = (
      this._stripe.getApiField('protocol') == 'http' ? http : https
    ).request({
      host: this._stripe.getApiField('host'),
      port: this._stripe.getApiField('port'),
      path: path,
      method: method,
      headers: headers
    });

    req.on('response', function(res) {
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
              message: 'Invalid JSON received from the Stripe API'
            }),
            null
          );
        }
        callback.call(self, null, response);
      });
    });

    req.on('error', function(error) {
      callback.call(
        self,
        new Error.StripeConnectionError({
          message: 'An error occurred with our connection to Stripe',
          detail: error
        }),
        null
      );
    });

    req.write(requestData);
    req.end();

  }

};

module.exports = StripeResource;
