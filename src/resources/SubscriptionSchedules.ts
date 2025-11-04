// File generated from our OpenAPI spec

import * as SubscriptionScheduleParams from '../params/SubscriptionScheduleParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const SubscriptionScheduleResource = StripeResource.extend({
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
export class SubscriptionSchedule {}
