// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'capital/financing_summary',
  retrieve: stripeMethod({
    method: 'GET',
    path: '',
  }),
});
