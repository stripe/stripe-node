// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Versions} from './LicenseFees/Versions.js';
const stripeMethod = StripeResource.method;
export const LicenseFees = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
    this.versions = new Versions(...args);
  },
  create: stripeMethod({method: 'POST', fullPath: '/v2/billing/license_fees'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/license_fees/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/license_fees/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/license_fees',
    methodType: 'list',
  }),
});
