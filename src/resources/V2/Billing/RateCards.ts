// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Rates} from './RateCards/Rates.js';
import {Versions} from './RateCards/Versions.js';
const stripeMethod = StripeResource.method;
export const RateCards = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
    this.rates = new Rates(...args);
    this.versions = new Versions(...args);
  },
  create: stripeMethod({method: 'POST', fullPath: '/v2/billing/rate_cards'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/rate_cards/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/rate_cards/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/rate_cards',
    methodType: 'list',
  }),
});
