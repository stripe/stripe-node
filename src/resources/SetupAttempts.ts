// File generated from our OpenAPI spec

import * as SetupAttemptParams from '../params/SetupAttemptParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const SetupAttemptResource = StripeResource.extend({
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/setup_attempts',
    methodType: 'list',
  }),
});
export class SetupAttempt {}
