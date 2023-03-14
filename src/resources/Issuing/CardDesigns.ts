// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;

export const CardDesigns = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/card_designs/{card_design}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/card_designs/{card_design}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/card_designs',
    methodType: 'list',
  }),
});
