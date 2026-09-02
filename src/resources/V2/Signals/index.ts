// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  AccountActivity,
  AccountActivityResource,
} from './AccountActivity.js';
import {
  V2 as V2Namespace1,
  AccountEvaluation,
  AccountEvaluationResource,
} from './AccountEvaluations.js';
import {
  V2 as V2Namespace2,
  AccountSignal,
  AccountSignalResource,
} from './AccountSignals.js';
import {
  V2 as V2Namespace3,
  PaymentRetryEvaluation,
  PaymentRetryEvaluationResource,
} from './PaymentRetryEvaluations.js';
import {
  V2 as V2Namespace4,
  PaymentRetrySignal,
  PaymentRetrySignalResource,
} from './PaymentRetrySignals.js';

export {AccountActivity} from './AccountActivity.js';
export {AccountEvaluation} from './AccountEvaluations.js';
export {AccountSignal} from './AccountSignals.js';
export {PaymentRetryEvaluation} from './PaymentRetryEvaluations.js';
export {PaymentRetrySignal} from './PaymentRetrySignals.js';

export class Signals {
  accountActivities: AccountActivityResource;
  accountEvaluations: AccountEvaluationResource;
  accountSignals: AccountSignalResource;
  paymentRetryEvaluations: PaymentRetryEvaluationResource;
  paymentRetrySignals: PaymentRetrySignalResource;

  constructor(private readonly stripe: Stripe) {
    this.accountActivities = new AccountActivityResource(stripe);
    this.accountEvaluations = new AccountEvaluationResource(stripe);
    this.accountSignals = new AccountSignalResource(stripe);
    this.paymentRetryEvaluations = new PaymentRetryEvaluationResource(stripe);
    this.paymentRetrySignals = new PaymentRetrySignalResource(stripe);
  }
}

export declare namespace Signals {
  export import AccountActivityCreateParams = V2Namespace0.Signals.AccountActivityCreateParams;
  export import AccountActivityDeleteParams = V2Namespace0.Signals.AccountActivityDeleteParams;
  export import AccountActivityRetrieveParams = V2Namespace0.Signals.AccountActivityRetrieveParams;
  export {AccountActivity, AccountActivityResource};
  export import AccountEvaluationCreateParams = V2Namespace1.Signals.AccountEvaluationCreateParams;
  export import AccountEvaluationRetrieveParams = V2Namespace1.Signals.AccountEvaluationRetrieveParams;
  export {AccountEvaluation, AccountEvaluationResource};
  export import AccountSignalListParams = V2Namespace2.Signals.AccountSignalListParams;
  export import AccountSignalRetrieveParams = V2Namespace2.Signals.AccountSignalRetrieveParams;
  export {AccountSignal, AccountSignalResource};
  export import PaymentRetryEvaluationCreateParams = V2Namespace3.Signals.PaymentRetryEvaluationCreateParams;
  export import PaymentRetryEvaluationRetrieveParams = V2Namespace3.Signals.PaymentRetryEvaluationRetrieveParams;
  export import PaymentRetryEvaluationUpdateParams = V2Namespace3.Signals.PaymentRetryEvaluationUpdateParams;
  export import PaymentRetryEvaluationCancelParams = V2Namespace3.Signals.PaymentRetryEvaluationCancelParams;
  export {PaymentRetryEvaluation, PaymentRetryEvaluationResource};
  export import PaymentRetrySignalRetrieveParams = V2Namespace4.Signals.PaymentRetrySignalRetrieveParams;
  export {PaymentRetrySignal, PaymentRetrySignalResource};
}
