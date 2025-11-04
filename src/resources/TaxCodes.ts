// File generated from our OpenAPI spec

import * as TaxCodeParams from '../params/TaxCodeParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const TaxCodeResource = StripeResource.extend({
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/tax_codes/{id}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax_codes',
    methodType: 'list',
  }),
});
export class TaxCode {}
