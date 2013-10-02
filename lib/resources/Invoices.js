'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'invoices',
  includeBasic: ['create', 'list', 'retrieve', 'update'],

  getLines: stripeMethod({
    method: 'GET',
    path: '{invoiceId}/lines',
    urlParams: ['invoiceId']
  }),

  pay: stripeMethod({
    method: 'POST',
    path: '{invoiceId}',
    urlParams: ['invoiceId']
  }),

  retrieveUpcoming: stripeMethod({
    method: 'GET',
    path: 'upcoming'
  })

});
