// File generated from our OpenAPI spec

import * as BalanceParams from '../params/BalanceParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const BalanceResource = StripeResource.extend({
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/balance'}),
});
export class Balance {}
