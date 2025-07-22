// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const GbBankAccounts = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/vault/gb_bank_accounts',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/core/vault/gb_bank_accounts/{id}',
  }),
  acknowledgeConfirmationOfPayee: stripeMethod({
    method: 'POST',
    fullPath:
      '/v2/core/vault/gb_bank_accounts/{id}/acknowledge_confirmation_of_payee',
  }),
  archive: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/vault/gb_bank_accounts/{id}/archive',
  }),
  initiateConfirmationOfPayee: stripeMethod({
    method: 'POST',
    fullPath:
      '/v2/core/vault/gb_bank_accounts/{id}/initiate_confirmation_of_payee',
  }),
});
