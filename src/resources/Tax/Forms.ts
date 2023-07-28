// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Forms = StripeResource.extend({
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/tax/forms/{id}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/forms',
    methodType: 'list',
  }),
  pdf: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/forms/{id}/pdf',
    host: 'files.stripe.com',
    streaming: true,
  }),
});
