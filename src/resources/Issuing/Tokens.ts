// File generated from our OpenAPI spec

import * as TokenParams from '../params/TokenParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const TokenResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/tokens/{token}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/tokens/{token}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/tokens',
    methodType: 'list',
  }),
});
export class Token {}
