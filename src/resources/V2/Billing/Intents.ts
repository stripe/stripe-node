// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Actions} from './Intents/Actions.js';
const stripeMethod = StripeResource.method;
export const Intents = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
    this.actions = new Actions(...args);
  },
  create: stripeMethod({method: 'POST', fullPath: '/v2/billing/intents'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v2/billing/intents/{id}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/intents',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/intents/{id}/cancel',
  }),
  commit: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/intents/{id}/commit',
  }),
  releaseReservation: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/intents/{id}/release_reservation',
  }),
  reserve: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/intents/{id}/reserve',
  }),
});
