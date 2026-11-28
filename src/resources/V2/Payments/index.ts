// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  OffSessionPayment,
  OffSessionPaymentResource,
} from './OffSessionPayments.js';

export {OffSessionPayment} from './OffSessionPayments.js';

export class Payments {
  offSessionPayments: OffSessionPaymentResource;

  constructor(private readonly stripe: Stripe) {
    this.offSessionPayments = new OffSessionPaymentResource(stripe);
  }
}

export declare namespace Payments {
  export import OffSessionPaymentListParams = V2Namespace0.Payments.OffSessionPaymentListParams;
  export import OffSessionPaymentCreateParams = V2Namespace0.Payments.OffSessionPaymentCreateParams;
  export import OffSessionPaymentRetrieveParams = V2Namespace0.Payments.OffSessionPaymentRetrieveParams;
  export import OffSessionPaymentUpdateParams = V2Namespace0.Payments.OffSessionPaymentUpdateParams;
  export import OffSessionPaymentCancelParams = V2Namespace0.Payments.OffSessionPaymentCancelParams;
  export import OffSessionPaymentPauseParams = V2Namespace0.Payments.OffSessionPaymentPauseParams;
  export import OffSessionPaymentResumeParams = V2Namespace0.Payments.OffSessionPaymentResumeParams;
  export {OffSessionPayment, OffSessionPaymentResource};
}
