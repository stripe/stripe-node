// File generated from our OpenAPI spec

import * as EventParams from '../params/EventParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const EventResource = StripeResource.extend({
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/events/{id}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/events',
    methodType: 'list',
  }),
});
export class Event {}
