// File generated from our OpenAPI spec

import * as SupplierParams from '../params/SupplierParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const SupplierResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/climate/suppliers/{supplier}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/climate/suppliers',
    methodType: 'list',
  }),
});
export class Supplier {}
