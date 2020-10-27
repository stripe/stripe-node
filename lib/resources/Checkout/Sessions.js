// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'checkout/sessions',

  includeBasic: ['create', 'retrieve', 'list'],

  listLineItems: stripeMethod({
    method: 'GET',
    path: '/{session}/line_items',
    methodType: 'list',
  }),
});
