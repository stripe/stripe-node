// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Events} from './Core/Events.js';
export const Core = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
    this.events = new Events(...args);
  },
});
