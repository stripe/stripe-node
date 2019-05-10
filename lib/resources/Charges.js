'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'charges',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  capture: stripeMethod({
    method: 'POST',
    path: '/{id}/capture',
  }),
});
