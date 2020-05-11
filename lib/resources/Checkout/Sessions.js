'use strict';

const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'checkout/sessions',

  includeBasic: ['create', 'list', 'retrieve'],

  listLineItems: stripeMethod({
    method: 'GET',
    path: '/{session}/line_items',
    methodType: 'list',
  }),
});
