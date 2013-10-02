'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'transfers',
  includeBasic: ['create', 'list', 'retrieve'],

  cancel: stripeMethod({
    method: 'POST',
    path: '{transferId}/cancel',
    urlParams: ['transferId']
  })

});

