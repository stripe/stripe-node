'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;
var utils = require('../utils');

module.exports = StripeResource.extend({

  path: 'invoices',
  includeBasic: ['create', 'list', 'retrieve', 'update'],

  retrieveLines: stripeMethod({
    method: 'GET',
    path: '{invoiceId}/lines',
    urlParams: ['invoiceId'],
  }),

  pay: stripeMethod({
    method: 'POST',
    path: '{invoiceId}/pay',
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
        if (urlData.invoiceOptions.subscription_items !== undefined) {
          urlData.invoiceOptions.subscription_items = utils.arrayToObject(urlData.invoiceOptions.subscription_items);
        }
        return url + '&' + utils.stringifyRequestData(urlData.invoiceOptions);
      }
      return url;
    },
    urlParams: ['customerId', 'optional!invoiceOptions'],
    encode: utils.encodeParamWithIntegerIndexes.bind(null, 'subscription_items'),
  }),

});
