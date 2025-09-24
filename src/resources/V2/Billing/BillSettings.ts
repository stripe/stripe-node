// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Versions} from './BillSettings/Versions.js';
const stripeMethod = StripeResource.method;
export const BillSettings = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
    this.versions = new Versions(...args);
  },
  create: stripeMethod({method: 'POST', fullPath: '/v2/billing/bill_settings'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/bill_settings/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/bill_settings/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/bill_settings',
    methodType: 'list',
  }),
});
