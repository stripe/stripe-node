// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'subscription_items',

  includeBasic: ['create', 'retrieve', 'update', 'list', 'del'],

  createUsageRecord: stripeMethod({
    method: 'POST',
    path: '/{subscriptionItem}/usage_records',
  }),

  listUsageRecordSummaries: stripeMethod({
    method: 'GET',
    path: '/{subscriptionItem}/usage_record_summaries',
    methodType: 'list',
  }),
});
