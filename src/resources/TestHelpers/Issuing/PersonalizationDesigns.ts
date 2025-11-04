// File generated from our OpenAPI spec

import * as PersonalizationDesignParams from '../params/PersonalizationDesignParams.js';
import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PersonalizationDesignResource = StripeResource.extend({
  activate: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate',
  }),
  deactivate: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate',
  }),
  reject: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject',
  }),
});
export class PersonalizationDesign {}
