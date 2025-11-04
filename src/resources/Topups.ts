// File generated from our OpenAPI spec

import * as TopupParams from '../params/TopupParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const TopupResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/topups'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/topups/{topup}'}),
  update: stripeMethod({method: 'POST', fullPath: '/v1/topups/{topup}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/topups',
    methodType: 'list',
  }),
  cancel: stripeMethod({method: 'POST', fullPath: '/v1/topups/{topup}/cancel'}),
});
export class Topup {}
