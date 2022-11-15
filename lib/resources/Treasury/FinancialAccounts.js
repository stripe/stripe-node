// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/treasury/financial_accounts',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/financial_accounts/{financial_account}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/treasury/financial_accounts/{financial_account}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/financial_accounts',
    methodType: 'list',
  }),
  retrieveFeatures: stripeMethod({
    method: 'GET',
    fullPath: '/v1/treasury/financial_accounts/{financial_account}/features',
  }),
  updateFeatures: stripeMethod({
    method: 'POST',
    fullPath: '/v1/treasury/financial_accounts/{financial_account}/features',
  }),
});
