'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'topups',
  includeBasic: [
    'create',
    'list',
    'retrieve',
    'update',
    'setMetadata',
    'getMetadata',
  ],

  cancel: stripeMethod({
    method: 'POST',
    path: '{id}/cancel',
    urlParams: ['id'],
  }),
});
