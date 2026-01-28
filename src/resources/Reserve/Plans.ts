// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Plans = StripeResource.extend({
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/reserve/plans/{id}'}),
});
