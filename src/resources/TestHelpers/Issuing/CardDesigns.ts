// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CardDesigns = StripeResource.extend({
  activateTestmode: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/issuing/card_designs/{card_design}/status/activate',
  }),
  deactivateTestmode: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/issuing/card_designs/{card_design}/status/deactivate',
  }),
});
