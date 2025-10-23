// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const UsBankAccounts = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/vault/us_bank_accounts',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/core/vault/us_bank_accounts/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/vault/us_bank_accounts/{id}',
  }),
  archive: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/vault/us_bank_accounts/{id}/archive',
  }),
});
