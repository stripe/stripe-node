// File generated from our OpenAPI spec

import * as ConfirmationTokenParams from '../params/ConfirmationTokenParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ConfirmationTokenResource = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/confirmation_tokens',
  }),
});
export class ConfirmationToken {}
