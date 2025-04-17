// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const FxQuotes = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/fx_quotes'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/fx_quotes/{id}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/fx_quotes',
    methodType: 'list',
  }),
});
