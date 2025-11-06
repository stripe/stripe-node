// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const FinancingOffers = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/capital/financing_offers',
  }),
  refill: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/capital/financing_offers/{financing_offer}/refill',
  }),
});
