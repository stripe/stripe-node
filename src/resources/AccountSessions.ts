// File generated from our OpenAPI spec

import * as AccountSessionParams from '../params/AccountSessionParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const AccountSessionResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/account_sessions'}),
});
export class AccountSession {}
