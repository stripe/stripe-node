// File generated from our OpenAPI spec

import * as ReviewParams from '../params/ReviewParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ReviewResource = StripeResource.extend({
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/reviews/{review}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/reviews',
    methodType: 'list',
  }),
  approve: stripeMethod({
    method: 'POST',
    fullPath: '/v1/reviews/{review}/approve',
  }),
});
export class Review {}
