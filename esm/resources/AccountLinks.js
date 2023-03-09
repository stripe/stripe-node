// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const AccountLinks = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/account_links',
  }),
});
