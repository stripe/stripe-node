'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'reviews',

  includeBasic: ['list', 'retrieve'],

  approve: stripeMethod({
    method: 'POST',
    path: '/{id}/approve',
  }),
});
