// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../../StripeResource');

module.exports = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/authorizations/{authorization}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/authorizations/{authorization}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/authorizations',
    methodType: 'list',
  }),

  approve: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/authorizations/{authorization}/approve',
  }),

  decline: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/authorizations/{authorization}/decline',
  }),
});
