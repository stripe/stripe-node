// File generated from our OpenAPI spec

import * as AlertParams from '../params/AlertParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const AlertResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/billing/alerts'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/billing/alerts/{id}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/alerts',
    methodType: 'list',
  }),
  activate: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/alerts/{id}/activate',
  }),
  archive: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/alerts/{id}/archive',
  }),
  deactivate: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/alerts/{id}/deactivate',
  }),
});
export class Alert {}
