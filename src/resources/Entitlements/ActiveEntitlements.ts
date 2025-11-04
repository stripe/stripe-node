// File generated from our OpenAPI spec

import * as ActiveEntitlementParams from '../params/ActiveEntitlementParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ActiveEntitlementResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/entitlements/active_entitlements/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/entitlements/active_entitlements',
    methodType: 'list',
  }),
});
export class ActiveEntitlement {}
