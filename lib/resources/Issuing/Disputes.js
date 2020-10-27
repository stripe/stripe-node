// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'issuing/disputes',

  includeBasic: ['create', 'retrieve', 'update', 'list'],

  submit: stripeMethod({
    method: 'POST',
    path: '/{dispute}/submit',
  }),
});
