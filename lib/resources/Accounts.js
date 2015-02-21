'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;
var utils = require('../utils');

module.exports = StripeResource.extend({
  // Since path can either be `account` or `accounts`, support both through stripeMethod path

  create: stripeMethod({
    method: 'POST',
    path: 'accounts'
  }),

  list: stripeMethod({
    method: 'GET',
    path: 'accounts'
  }),

  update: stripeMethod({
    method: 'POST',
    path: 'accounts/{id}',
    urlParams: ['id']
  }),

  retrieve: function(id) {
    // Old bindings supported no-arg / callback access to /v1/account, support that if ID is not passed
    if (id === undefined || typeof id === 'function' || (typeof id === 'string' && utils.isAuthKey(id))) {
      return stripeMethod({
        method: 'GET',
        path: 'account'
      }).apply(this, arguments);
    } else {
      return stripeMethod({
        method: 'GET',
        path: 'accounts/{id}',
        urlParams: ['id']
      }).apply(this, arguments);
    }
  },
});
