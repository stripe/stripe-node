// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Disputes = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/disputes',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/disputes/{dispute}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/disputes/{dispute}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/disputes',
    methodType: 'list',
  }),

  submit: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/disputes/{dispute}/submit',
  }),
});
