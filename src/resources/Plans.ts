// File generated from our OpenAPI spec

import * as PlanParams from '../params/PlanParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PlanResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/plans'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/plans/{plan}'}),
  update: stripeMethod({method: 'POST', fullPath: '/v1/plans/{plan}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/plans',
    methodType: 'list',
  }),
  del: stripeMethod({method: 'DELETE', fullPath: '/v1/plans/{plan}'}),
});
export class Plan {}
