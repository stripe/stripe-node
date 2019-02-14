'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;
var utils = require('../utils');

module.exports = StripeResource.extend({

  path: 'invoices',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'del'],

  finalizeInvoice: stripeMethod({
    method: 'POST',
    path: '{invoiceId}/finalize',
    urlParams: ['invoiceId'],
  }),

  markUncollectible: stripeMethod({
    method: 'POST',
    path: '{invoiceId}/mark_uncollectible',
    urlParams: ['invoiceId'],
  }),

  pay: stripeMethod({
    method: 'POST',
    path: '{invoiceId}/pay',
    urlParams: ['invoiceId'],
  }),

  retrieveLines: stripeMethod({
    method: 'GET',
    path: '{invoiceId}/lines',
    urlParams: ['invoiceId'],
  }),

  retrieveUpcoming: stripeMethod({
    method: 'GET',
    path: function(urlData) {
      var url = 'upcoming?customer=' + urlData.customerId;
      // Legacy support where second argument is the subscription id
      if (urlData.invoiceOptions && typeof urlData.invoiceOptions === 'string') {
        return url + '&subscription=' + urlData.invoiceOptions;
      } else if (urlData.invoiceOptions && typeof urlData.invoiceOptions === 'object') {
        return url + '&' + utils.stringifyRequestData(urlData.invoiceOptions);
      }
      return url;
    },
    urlParams: ['customerId', 'optional!invoiceOptions'],
  }),

  sendInvoice: stripeMethod({
    method: 'POST',
    path: '{invoiceId}/send',
    urlParams: ['invoiceId'],
  }),

  voidInvoice: stripeMethod({
    method: 'POST',
    path: '{invoiceId}/void',
    urlParams: ['invoiceId'],
  }),
});
