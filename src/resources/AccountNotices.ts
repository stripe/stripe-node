// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const AccountNotices = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/account_notices/{account_notice}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/account_notices/{account_notice}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/account_notices',
    methodType: 'list',
  }),
});
