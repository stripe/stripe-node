// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Registrations = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/tax/registrations',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/tax/registrations/{id}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/registrations',
    methodType: 'list',
  }),
});
