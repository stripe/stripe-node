// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Components} from './PricingPlans/Components.js';
import {Versions} from './PricingPlans/Versions.js';
const stripeMethod = StripeResource.method;
export const PricingPlans = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
    this.components = new Components(...args);
    this.versions = new Versions(...args);
  },
  create: stripeMethod({method: 'POST', fullPath: '/v2/billing/pricing_plans'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/pricing_plans/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/pricing_plans/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/pricing_plans',
    methodType: 'list',
  }),
});
