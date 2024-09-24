// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {Billing} from './V2/Billing.js';
import {Core} from './V2/Core.js';
export const V2 = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
    this.billing = new Billing(...args);
    this.core = new Core(...args);
  },
});
