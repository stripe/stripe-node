'use strict';

var https = require('https');
var utils = require('./utils');

StripeResource.HOST = 'api.stripe.com';
StripeResource.PORT = '443';
StripeResource.BASE_PATH = '/v{apiVersion}/';
StripeResource.API_VERSION = 1;

/**
 * Provide extension mechanism for Stripe Resource Sub-Classes
 */
StripeResource.extend = utils.protoExtend;

/**
 * Expose method-creator
 */
StripeResource.method = require('./StripeMethod');

/**
 * Encapsulates request logic for a Stripe Resource
 */
function StripeResource(auth, urlData) {

  this._auth = auth;
  this._urlData = urlData || {}; // TODO: -- Needed?

  this.basePath = utils.makeInterpolator(this.basePath);
  this.path = utils.makeInterpolator(this.path);

  if (this.includeBasic) {
    this.includeBasic.forEach(function(methodName) {
      this[methodName] = StripeResource.BASIC_METHODS[methodName];
    }, this);
  }

  this.initialize.apply(this, arguments);

}

StripeResource.prototype = {

  basePath: StripeResource.BASE_PATH,
  apiVersion: StripeResource.API_VERSION,
  path: '',

  initialize: function() {},

  _request: function(method, path, data, callback) {

    var requestData = utils.stringifyRequestData(data);

    var req = https.request({
      host: StripeResource.HOST,
      port: StripeResource.PORT,
      path: path,
      method: method,
      headers: {
        'Authorization': this._auth,
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': requestData.length
      }
    });

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
          if (200 != res.statusCode && response.error) {
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

    req.write(requestData);
    req.end();

  }

};

StripeResource.BASIC_METHODS = {

  create: StripeResource.method({
    method: 'POST'
  }),

  list: StripeResource.method({
    method: 'GET'
  }),

  retrieve: StripeResource.method({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id']
  }),

  update: StripeResource.method({
    method: 'POST',
    path: '{id}',
    urlParams: ['id']
  }),

  // Avoid 'delete' keyword in JS
  del: StripeResource.method({
    method: 'DELETE',
    path: '{id}',
    urlParams: ['id']
  })

};

module.exports = StripeResource;
