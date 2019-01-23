'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;
var utils = require('../utils');

var oAuthHost = 'connect.stripe.com';

module.exports = StripeResource.extend({
  basePath: '/',

  authorizeUrl: function(params = {}, options = {}) {
    var path = 'oauth/authorize';

    // For Express accounts, the path changes
    if (options.express) {
      path = 'express/' + path;
    }

    if (!params.response_type) {
      params.response_type = 'code';
    }

    if (!params.client_id) {
      var clientId = this._stripe.clientId;

      if (!clientId) {
        throw Error(
          'Please set stripe.clientId or pass it as a parameter when calling this method. ' +
          'You can find your clientId at https://dashboard.stripe.com/account/applications/settings.'
        );
      }

      params.client_id = clientId;
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
});
