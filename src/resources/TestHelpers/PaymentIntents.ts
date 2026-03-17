// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PaymentIntents = StripeResource.extend({
  simulateCryptoDeposit: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/payment_intents/{intent}/simulate_crypto_deposit',
  }),
});
