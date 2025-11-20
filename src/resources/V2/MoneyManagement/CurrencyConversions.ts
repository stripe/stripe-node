// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CurrencyConversions = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/money_management/currency_conversions',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/money_management/currency_conversions/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/money_management/currency_conversions',
    methodType: 'list',
  }),
});
