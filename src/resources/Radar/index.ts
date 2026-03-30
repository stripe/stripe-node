// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  AccountEvaluation,
  AccountEvaluationResource,
} from './AccountEvaluations.js';
import {
  CustomerEvaluation,
  CustomerEvaluationResource,
} from './CustomerEvaluations.js';
import {
  EarlyFraudWarning,
  EarlyFraudWarningResource,
} from './EarlyFraudWarnings.js';
import {
  IssuingAuthorizationEvaluation,
  IssuingAuthorizationEvaluationResource,
} from './IssuingAuthorizationEvaluations.js';
import {
  PaymentEvaluation,
  PaymentEvaluationResource,
} from './PaymentEvaluations.js';
import {ValueList, ValueListResource} from './ValueLists.js';
import {ValueListItem, ValueListItemResource} from './ValueListItems.js';

export {AccountEvaluation} from './AccountEvaluations.js';
export {CustomerEvaluation} from './CustomerEvaluations.js';
export {EarlyFraudWarning} from './EarlyFraudWarnings.js';
export {IssuingAuthorizationEvaluation} from './IssuingAuthorizationEvaluations.js';
export {PaymentEvaluation} from './PaymentEvaluations.js';
export {ValueList} from './ValueLists.js';
export {ValueListItem} from './ValueListItems.js';

export class Radar {
  accountEvaluations: AccountEvaluationResource;
  customerEvaluations: CustomerEvaluationResource;
  earlyFraudWarnings: EarlyFraudWarningResource;
  issuingAuthorizationEvaluations: IssuingAuthorizationEvaluationResource;
  paymentEvaluations: PaymentEvaluationResource;
  valueLists: ValueListResource;
  valueListItems: ValueListItemResource;

  constructor(private readonly stripe: Stripe) {
    this.accountEvaluations = new AccountEvaluationResource(stripe);
    this.customerEvaluations = new CustomerEvaluationResource(stripe);
    this.earlyFraudWarnings = new EarlyFraudWarningResource(stripe);
    this.issuingAuthorizationEvaluations = new IssuingAuthorizationEvaluationResource(
      stripe
    );
    this.paymentEvaluations = new PaymentEvaluationResource(stripe);
    this.valueLists = new ValueListResource(stripe);
    this.valueListItems = new ValueListItemResource(stripe);
  }
}

export declare namespace Radar {
  export {AccountEvaluation};
  export {CustomerEvaluation};
  export {EarlyFraudWarning};
  export {IssuingAuthorizationEvaluation};
  export {PaymentEvaluation};
  export {ValueList};
  export {ValueListItem};
}
