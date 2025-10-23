// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Components} from './PricingPlanSubscriptions/Components.js';
const stripeMethod = StripeResource.method;
export const PricingPlanSubscriptions = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
    this.components = new Components(...args);
  },
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/pricing_plan_subscriptions/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/pricing_plan_subscriptions/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/pricing_plan_subscriptions',
    methodType: 'list',
  }),
});
