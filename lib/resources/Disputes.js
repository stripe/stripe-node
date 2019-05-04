'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'disputes',

  includeBasic: ['list', 'retrieve', 'update', 'setMetadata', 'getMetadata'],

  close: stripeMethod({
    method: 'POST',
    path: '/{id}/close',
    urlParams: ['id'],
  }),
});
