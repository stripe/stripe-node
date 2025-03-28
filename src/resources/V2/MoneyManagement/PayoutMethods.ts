// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PayoutMethods = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/money_management/payout_methods/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/money_management/payout_methods',
    methodType: 'list',
  }),
  archive: stripeMethod({
    method: 'POST',
    fullPath: '/v2/money_management/payout_methods/{id}/archive',
  }),
  unarchive: stripeMethod({
    method: 'POST',
    fullPath: '/v2/money_management/payout_methods/{id}/unarchive',
  }),
});
