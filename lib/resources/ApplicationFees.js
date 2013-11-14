'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'application_fees',

  includeBasic: [
    'list', 'retrieve'
  ],

  refund: stripeMethod({
    method: 'POST',
    path: '/{id}/refund', urlParams: ['id']
  })
});
