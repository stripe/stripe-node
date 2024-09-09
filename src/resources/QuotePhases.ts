// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const QuotePhases = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quote_phases/{quote_phase}',
  }),
  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/quote_phases/{quote_phase}/line_items',
    methodType: 'list',
  }),
});
