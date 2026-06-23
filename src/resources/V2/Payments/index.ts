// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  OffSessionPayment,
  OffSessionPaymentResource,
} from './OffSessionPayments.js';
import {
  V2 as V2Namespace1,
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
  export import OffSessionPaymentListParams = V2Namespace0.Payments.OffSessionPaymentListParams;
  export import OffSessionPaymentCreateParams = V2Namespace0.Payments.OffSessionPaymentCreateParams;
  export import OffSessionPaymentRetrieveParams = V2Namespace0.Payments.OffSessionPaymentRetrieveParams;
  export import OffSessionPaymentCancelParams = V2Namespace0.Payments.OffSessionPaymentCancelParams;
  export import OffSessionPaymentCaptureParams = V2Namespace0.Payments.OffSessionPaymentCaptureParams;
  export import OffSessionPaymentPauseParams = V2Namespace0.Payments.OffSessionPaymentPauseParams;
  export import OffSessionPaymentResumeParams = V2Namespace0.Payments.OffSessionPaymentResumeParams;
  export {OffSessionPayment, OffSessionPaymentResource};
  export import SettlementAllocationIntentListParams = V2Namespace1.Payments.SettlementAllocationIntentListParams;
  export import SettlementAllocationIntentCreateParams = V2Namespace1.Payments.SettlementAllocationIntentCreateParams;
  export import SettlementAllocationIntentRetrieveParams = V2Namespace1.Payments.SettlementAllocationIntentRetrieveParams;
  export import SettlementAllocationIntentUpdateParams = V2Namespace1.Payments.SettlementAllocationIntentUpdateParams;
  export import SettlementAllocationIntentCancelParams = V2Namespace1.Payments.SettlementAllocationIntentCancelParams;
  export import SettlementAllocationIntentSubmitParams = V2Namespace1.Payments.SettlementAllocationIntentSubmitParams;
  export {SettlementAllocationIntent, SettlementAllocationIntentResource};
  export {SettlementAllocationIntentSplit};
}
