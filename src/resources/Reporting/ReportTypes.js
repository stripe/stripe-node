// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../../StripeResource');

module.exports = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/reporting/report_types/{report_type}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/reporting/report_types',
    methodType: 'list',
  }),
});
