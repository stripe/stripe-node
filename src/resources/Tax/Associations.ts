// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Associations = StripeResource.extend({
  find: stripeMethod({method: 'GET', fullPath: '/v1/tax/associations/find'}),
});
