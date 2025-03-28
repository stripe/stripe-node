// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ReceivedDebits = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/money_management/received_debits/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/money_management/received_debits',
    methodType: 'list',
  }),
});
