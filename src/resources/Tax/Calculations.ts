// File generated from our OpenAPI spec

import * as CalculationParams from '../params/CalculationParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CalculationResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/tax/calculations'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/calculations/{calculation}',
  }),
  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/calculations/{calculation}/line_items',
    methodType: 'list',
  }),
});
export class Calculation {}
