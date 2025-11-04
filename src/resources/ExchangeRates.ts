// File generated from our OpenAPI spec

import * as ExchangeRateParams from '../params/ExchangeRateParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ExchangeRateResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/exchange_rates/{rate_id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/exchange_rates',
    methodType: 'list',
  }),
});
export class ExchangeRate {}
