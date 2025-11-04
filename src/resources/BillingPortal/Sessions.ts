// File generated from our OpenAPI spec

import * as SessionParams from '../params/SessionParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const SessionResource = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing_portal/sessions',
  }),
});
export class Session {}
