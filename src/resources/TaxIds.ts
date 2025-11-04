// File generated from our OpenAPI spec

import * as TaxIdParams from '../params/TaxIdParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const TaxIdResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/tax_ids'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/tax_ids/{id}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax_ids',
    methodType: 'list',
  }),
  del: stripeMethod({method: 'DELETE', fullPath: '/v1/tax_ids/{id}'}),
});
export class TaxId {}
