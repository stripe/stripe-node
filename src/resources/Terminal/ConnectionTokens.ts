// File generated from our OpenAPI spec

import * as ConnectionTokenParams from '../params/ConnectionTokenParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ConnectionTokenResource = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/connection_tokens',
  }),
});
export class ConnectionToken {}
