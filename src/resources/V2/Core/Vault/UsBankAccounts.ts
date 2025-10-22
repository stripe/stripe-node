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
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/core/vault/us_bank_accounts',
    methodType: 'list',
  }),
  archive: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/vault/us_bank_accounts/{id}/archive',
  }),
  confirmMicrodeposits: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/vault/us_bank_accounts/{id}/confirm_microdeposits',
  }),
  sendMicrodeposits: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/vault/us_bank_accounts/{id}/send_microdeposits',
  }),
});
