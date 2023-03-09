// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Calculations = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/tax/calculations',
  }),

  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/calculations/{calculation}/line_items',
    methodType: 'list',
  }),
});
