'use strict';

var StripeResource = require('../StripeResource');
var stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'topups',
  includeBasic: ['create', 'list', 'retrieve', 'update', 'setMetadata', 'getMetadata'],

  cancel: stripeMethod({
    method: 'POST',
    path: '{topupId}/cancel',
    urlParams: ['topupId'],
  }),
});
