// File generated from our OpenAPI spec

import * as PersonalizationDesignParams from '../params/PersonalizationDesignParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PersonalizationDesignResource = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/personalization_designs',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/personalization_designs/{personalization_design}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/personalization_designs/{personalization_design}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/personalization_designs',
    methodType: 'list',
  }),
});
export class PersonalizationDesign {}
