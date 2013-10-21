'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'charges',

  includeBasic: [
    'create', 'list', 'retrieve', 'update',
    'setMetadata', 'getMetadata'
  ],

  capture: stripeMethod({
    method: 'POST',
    path: '/{id}/capture',
    urlParams: ['id']
  }),

  refund: stripeMethod({
    method: 'POST',
    path: '/{id}/refund',
    urlParams: ['id']
  }),

  updateDispute: stripeMethod({
    method: 'POST',
    path: '/{id}/dispute',
    urlParams: ['id']
  }),

  closeDispute: stripeMethod({
    method: 'POST',
    path: '/{id}/dispute/close',
    urlParams: ['id']
  })

});
