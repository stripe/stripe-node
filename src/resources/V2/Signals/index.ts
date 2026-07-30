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

export {AccountActivity} from './AccountActivity.js';
export {AccountEvaluation} from './AccountEvaluations.js';
export {AccountSignal} from './AccountSignals.js';

export class Signals {
  accountActivities: AccountActivityResource;
  accountEvaluations: AccountEvaluationResource;
  accountSignals: AccountSignalResource;

  constructor(private readonly stripe: Stripe) {
    this.accountActivities = new AccountActivityResource(stripe);
    this.accountEvaluations = new AccountEvaluationResource(stripe);
    this.accountSignals = new AccountSignalResource(stripe);
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
}
