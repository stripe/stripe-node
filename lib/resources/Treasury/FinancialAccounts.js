// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'treasury/financial_accounts',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{financialAccount}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{financialAccount}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  retrieveFeatures: stripeMethod({
    method: 'GET',
    path: '/{financialAccount}/features',
  }),
  updateFeatures: stripeMethod({
    method: 'POST',
    path: '/{financialAccount}/features',
  }),
});
