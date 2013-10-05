'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({

  path: 'recipients',
  includeBasic: [
    'create', 'list', 'retrieve', 'update', 'del',
    'setMetadata', 'getMetadata'
  ],

  cancel: stripeMethod({
    method: 'POST',
    path: '{transferId}/cancel',
    urlParams: ['transferId']
  })

});

