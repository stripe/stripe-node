'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'credit_notes',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  voidCreditNote: stripeMethod({
    method: 'POST',
    path: '/{id}/void',
  }),
});
