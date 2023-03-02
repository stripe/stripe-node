// File generated from our OpenAPI spec

'use strict';

const {StripeResource} = require('../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/card_bundles/{card_bundle}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/card_bundles',
    methodType: 'list',
  }),
});
