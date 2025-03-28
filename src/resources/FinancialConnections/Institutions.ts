// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Institutions = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/financial_connections/institutions/{institution}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/financial_connections/institutions',
    methodType: 'list',
  }),
});
