// File generated from our OpenAPI spec

import * as ConfirmationTokenParams from '../params/ConfirmationTokenParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ConfirmationTokenResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/confirmation_tokens/{confirmation_token}',
  }),
});
export class ConfirmationToken {}
