// File generated from our OpenAPI spec

import * as CreditGrantParams from '../params/CreditGrantParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CreditGrantResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/billing/credit_grants'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/credit_grants/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/credit_grants/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/credit_grants',
    methodType: 'list',
  }),
  expire: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/credit_grants/{id}/expire',
  }),
  voidGrant: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/credit_grants/{id}/void',
  }),
});
export class CreditGrant {}
