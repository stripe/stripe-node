'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'issuer_fraud_records',
  includeBasic: ['list', 'retrieve'],

  retrieveFromCharge: stripeMethod({
    method: 'GET',
    path: function(urlData) {
      return '?charge=' + urlData.chargeId;
    },
    urlParams: ['chargeId'],
  }),
});
