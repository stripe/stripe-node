// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'quote_phases',
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{quotePhase}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  listLineItems: stripeMethod({
    method: 'GET',
    path: '/{quotePhase}/line_items',
    methodType: 'list',
  }),
});
