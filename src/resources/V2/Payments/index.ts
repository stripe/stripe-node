// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  OffSessionPayment,
  OffSessionPaymentResource,
} from './OffSessionPayments.js';
import {
  SettlementAllocationIntent,
  SettlementAllocationIntentResource,
} from './SettlementAllocationIntents.js';
import {SettlementAllocationIntentSplit} from './SettlementAllocationIntentSplits.js';

export {OffSessionPayment} from './OffSessionPayments.js';
export {SettlementAllocationIntent} from './SettlementAllocationIntents.js';
export {SettlementAllocationIntentSplit} from './SettlementAllocationIntentSplits.js';

export class Payments {
  offSessionPayments: OffSessionPaymentResource;
  settlementAllocationIntents: SettlementAllocationIntentResource;

  constructor(private readonly stripe: Stripe) {
    this.offSessionPayments = new OffSessionPaymentResource(stripe);
    this.settlementAllocationIntents = new SettlementAllocationIntentResource(
      stripe
    );
  }
}

export declare namespace Payments {
  export {OffSessionPayment};
  export {SettlementAllocationIntent};
  export {SettlementAllocationIntentSplit};
}
