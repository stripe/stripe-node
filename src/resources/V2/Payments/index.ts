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
  export type OffSessionPaymentListParams = V2Namespace0.Payments.OffSessionPaymentListParams;
  export type OffSessionPaymentCreateParams = V2Namespace0.Payments.OffSessionPaymentCreateParams;
  export type OffSessionPaymentRetrieveParams = V2Namespace0.Payments.OffSessionPaymentRetrieveParams;
  export type OffSessionPaymentCancelParams = V2Namespace0.Payments.OffSessionPaymentCancelParams;
  export type OffSessionPaymentCaptureParams = V2Namespace0.Payments.OffSessionPaymentCaptureParams;
  export type OffSessionPaymentPauseParams = V2Namespace0.Payments.OffSessionPaymentPauseParams;
  export type OffSessionPaymentResumeParams = V2Namespace0.Payments.OffSessionPaymentResumeParams;
  export {OffSessionPayment};
  export type SettlementAllocationIntentListParams = V2Namespace1.Payments.SettlementAllocationIntentListParams;
  export type SettlementAllocationIntentCreateParams = V2Namespace1.Payments.SettlementAllocationIntentCreateParams;
  export type SettlementAllocationIntentRetrieveParams = V2Namespace1.Payments.SettlementAllocationIntentRetrieveParams;
  export type SettlementAllocationIntentUpdateParams = V2Namespace1.Payments.SettlementAllocationIntentUpdateParams;
  export type SettlementAllocationIntentCancelParams = V2Namespace1.Payments.SettlementAllocationIntentCancelParams;
  export type SettlementAllocationIntentSubmitParams = V2Namespace1.Payments.SettlementAllocationIntentSubmitParams;
  export {SettlementAllocationIntent};
  export {SettlementAllocationIntentSplit};
}
