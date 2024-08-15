// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const DisputeSettlementDetails = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath:
      '/v1/issuing/dispute_settlement_details/{dispute_settlement_detail}',
  }),
});
