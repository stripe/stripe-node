// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const FinancialAccounts = StripeResource.extend({
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
