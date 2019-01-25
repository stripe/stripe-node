'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;
var utils = require('../utils');

var oAuthHost = 'connect.stripe.com';

module.exports = StripeResource.extend({
  basePath: '/',

  authorizeUrl: function(params, options) {
    params = params || {};
    options = options || {};

    var path = 'oauth/authorize';

    // For Express accounts, the path changes
    if (options.express) {
      path = 'express/' + path;
    }

    if (!params.response_type) {
      params.response_type = 'code';
    }

    if (!params.client_id) {
      params.client_id = this._stripe.getClientId();
    }

    if (!params.scope) {
      params.scope = 'read_write';
    }

    return 'https://' + oAuthHost + '/' + path + '?' + utils.stringifyRequestData(params);
  },

  token: stripeMethod({
    method: 'POST',
    path: 'oauth/token',
    host: oAuthHost,
  }),

  deauthorize: function(spec) {
    if (!spec.client_id) {
      spec.client_id = this._stripe.getClientId();
    }

    return stripeMethod({
      method: 'POST',
      path: 'oauth/deauthorize',
      host: oAuthHost,
    }).apply(this, arguments);
  },
});
