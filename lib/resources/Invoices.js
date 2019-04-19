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
      var url = 'upcoming?';
      var hasParam = false;

      // If you pass just a hash with the relevant parameters, including customer id inside.
      if (urlData.invoiceOptionsOrCustomerId && typeof urlData.invoiceOptionsOrCustomerId === 'object') {
        return url + utils.stringifyRequestData(urlData.invoiceOptionsOrCustomerId);
      }

      // Legacy implementation where the first parameter is a customer id as a string
      if (urlData.invoiceOptionsOrCustomerId && typeof urlData.invoiceOptionsOrCustomerId === 'string') {
        url = url + 'customer=' + urlData.invoiceOptionsOrCustomerId;
        hasParam = true;
      }

      // Legacy support where second argument is the subscription id
      if (urlData.invoiceOptionsOrSubscriptionId && typeof urlData.invoiceOptionsOrSubscriptionId === 'string') {
        return url + (hasParam ? '&' : '') + 'subscription=' + urlData.invoiceOptionsOrSubscriptionId;
      } else if (urlData.invoiceOptionsOrSubscriptionId && typeof urlData.invoiceOptionsOrSubscriptionId === 'object') {
        return url + (hasParam ? '&' : '') + utils.stringifyRequestData(urlData.invoiceOptionsOrSubscriptionId);
      }
      return url;
    },
    urlParams: ['optional!invoiceOptionsOrCustomerId', 'optional!invoiceOptionsOrSubscriptionId'],
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
