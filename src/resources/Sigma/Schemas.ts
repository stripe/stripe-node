// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Schemas = StripeResource.extend({
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/sigma/schemas',
    methodType: 'list',
  }),
});
