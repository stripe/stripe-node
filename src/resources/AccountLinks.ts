// File generated from our OpenAPI spec

import * as AccountLinkParams from '../params/AccountLinkParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const AccountLinkResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/account_links'}),
});
export class AccountLink {}
