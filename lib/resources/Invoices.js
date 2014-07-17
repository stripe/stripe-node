'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'invoices',
  includeBasic: ['create', 'list', 'retrieve', 'update'],

  retrieveLines: stripeMethod({
    method: 'GET',
    path: '{invoiceId}/lines',
    urlParams: ['invoiceId']
  }),

  pay: stripeMethod({
    method: 'POST',
    path: '{invoiceId}/pay',
    urlParams: ['invoiceId']
  }),

  retrieveUpcoming: stripeMethod({
    method: 'GET',
    path: function(urlData) {
      var url = 'upcoming?customer=' + urlData.customerId;
      if (urlData.subscriptionId) {
        return url + '&subscription=' + urlData.subscriptionId;
      }
      return url;
    },
    urlParams: ['customerId', 'optional!subscriptionId']
  })

});
