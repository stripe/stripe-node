// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Configurations = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing_portal/configurations',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing_portal/configurations/{configuration}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing_portal/configurations/{configuration}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing_portal/configurations',
    methodType: 'list',
  }),
});
