// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ActiveEntitlements = StripeResource.extend({
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/entitlements/active_entitlements',
    methodType: 'list',
  }),
});
