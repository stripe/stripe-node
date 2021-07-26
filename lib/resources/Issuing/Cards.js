// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'issuing/cards',

  create: stripeMethod({
    method: 'POST',
    path: '',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    path: '/{card}',
  }),

  update: stripeMethod({
    method: 'POST',
    path: '/{card}',
  }),

  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),

  retrieveDetails: stripeMethod({
    method: 'GET',
    path: '/{card}/details',
  }),
});
