// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../../StripeResource');

module.exports = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/sigma/scheduled_query_runs/{scheduled_query_run}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/sigma/scheduled_query_runs',
    methodType: 'list',
  }),
});
