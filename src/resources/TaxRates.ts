// File generated from our OpenAPI spec

import * as TaxRateParams from '../params/TaxRateParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const TaxRateResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/tax_rates'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/tax_rates/{tax_rate}'}),
  update: stripeMethod({method: 'POST', fullPath: '/v1/tax_rates/{tax_rate}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax_rates',
    methodType: 'list',
  }),
});
export class TaxRate {}
