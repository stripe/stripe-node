'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'charges',

  includeBasic: ['create', 'list', 'retrieve'],

  capture: stripeMethod({
    method: 'POST',
    path: '/{id}/capture',
    urlParams: ['id']
  }),

  refund: stripeMethod({
    method: 'POST',
    path: '/{id}/refund',
    urlParams: ['id']
  })

});
