// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const OutboundPaymentQuotes = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/money_management/outbound_payment_quotes',
  }),
});
