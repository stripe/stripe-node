// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const SubscriptionSchedules = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscription_schedules',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscription_schedules/{schedule}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscription_schedules/{schedule}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscription_schedules',
    methodType: 'list',
  }),

  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscription_schedules/{schedule}/cancel',
  }),

  release: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscription_schedules/{schedule}/release',
  }),
});
