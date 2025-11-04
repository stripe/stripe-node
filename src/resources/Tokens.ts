// File generated from our OpenAPI spec

import * as TokenParams from '../params/TokenParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const TokenResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/tokens'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/tokens/{token}'}),
});
export class Token {}
