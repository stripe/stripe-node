// File generated from our OpenAPI spec

import * as CustomerSessionParams from '../params/CustomerSessionParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CustomerSessionResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/customer_sessions'}),
});
export class CustomerSession {}
