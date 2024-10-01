// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {MeterEventSession} from './Billing/MeterEventSession.js';
import {MeterEventAdjustments} from './Billing/MeterEventAdjustments.js';
import {MeterEventStream} from './Billing/MeterEventStream.js';
import {MeterEvents} from './Billing/MeterEvents.js';
export const Billing = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
    this.meterEventSession = new MeterEventSession(...args);
    this.meterEventAdjustments = new MeterEventAdjustments(...args);
    this.meterEventStream = new MeterEventStream(...args);
    this.meterEvents = new MeterEvents(...args);
  },
});
