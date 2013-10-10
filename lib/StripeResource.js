'use strict';

var http = require('http');
var https = require('https');

var utils = require('./utils');
var Error = require('./Error');

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
              Error.StripeError.generate(response.error)
            }
            return callback(err, null);
          }
        } catch (e) {
          return callback(
            new Error.StripeAPIError({
              message: 'Invalid JSON received from the Stripe API'
            }),
            null
          );
        }
        callback(null, response);
      });
    });

    req.on('error', function(error) {
      callback(
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
