// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const TrialOffers = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/product_catalog/trial_offers',
  }),
});
