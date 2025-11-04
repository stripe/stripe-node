// File generated from our OpenAPI spec

import * as ReceivedCreditParams from '../params/ReceivedCreditParams.js';
import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ReceivedCreditResource = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/treasury/received_credits',
  }),
});
export class ReceivedCredit {}
