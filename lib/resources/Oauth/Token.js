'use strict';

var StripeResource = require('../../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'oauth',
  basePath: '/',

  create: stripeMethod({
    method: 'POST',
    path: 'token',
    host: 'connect.stripe.com',
  }),
});
