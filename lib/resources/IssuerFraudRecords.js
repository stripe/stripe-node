'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: '',

  list: stripeMethod({
    method: 'GET',
    path: 'issuer_fraud_records',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: function(urlData) {
      return 'issuer_fraud_records/' + urlData.issfrId;
    },
    urlParams: ['issfrId'],
  }),

  listFromCharge: stripeMethod({
    method: 'GET',
    path: function(urlData) {
      return 'issuer_fraud_records?charge=' + urlData.chargeId;
    },
    urlParams: ['chargeId'],
  }),
});
