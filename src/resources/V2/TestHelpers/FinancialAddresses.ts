// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const FinancialAddresses = StripeResource.extend({
  credit: stripeMethod({
    method: 'POST',
    fullPath: '/v2/test_helpers/financial_addresses/{id}/credit',
  }),
  generateMicrodeposits: stripeMethod({
    method: 'POST',
    fullPath:
      '/v2/test_helpers/financial_addresses/{id}/generate_microdeposits',
  }),
});
