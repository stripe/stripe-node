'use strict';

const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'issuing/authorizations',

  includeBasic: ['list', 'retrieve', 'update'],

  approve: stripeMethod({
    method: 'POST',
    path: '/{authorization}/approve',
    urlParams: ['authorization'],
  }),

  decline: stripeMethod({
    method: 'POST',
    path: '/{authorization}/decline',
    urlParams: ['authorization'],
  }),
});
