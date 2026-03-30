// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {MeterUsage, MeterUsageResource} from './MeterUsage.js';
import {MeterUsageRow} from './MeterUsageRows.js';

export {MeterUsage} from './MeterUsage.js';

export class Analytics {
  meterUsages: MeterUsageResource;

  constructor(private readonly stripe: Stripe) {
    this.meterUsages = new MeterUsageResource(stripe);
  }
}

export declare namespace Analytics {
  export {MeterUsage};
  export {MeterUsageRow};
}
