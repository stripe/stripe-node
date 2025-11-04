// File generated from our OpenAPI spec

import * as FeatureParams from '../params/FeatureParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const FeatureResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/entitlements/features'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/entitlements/features/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/entitlements/features/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/entitlements/features',
    methodType: 'list',
  }),
});
export class Feature {}
