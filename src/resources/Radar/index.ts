// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Radar as RadarNamespace0,
  AccountEvaluation,
  AccountEvaluationResource,
} from './AccountEvaluations.js';
import {
  Radar as RadarNamespace1,
  CustomerEvaluation,
  CustomerEvaluationResource,
} from './CustomerEvaluations.js';
import {
  Radar as RadarNamespace2,
  EarlyFraudWarning,
  EarlyFraudWarningResource,
} from './EarlyFraudWarnings.js';
import {
  Radar as RadarNamespace3,
  IssuingAuthorizationEvaluation,
  IssuingAuthorizationEvaluationResource,
} from './IssuingAuthorizationEvaluations.js';
import {
  Radar as RadarNamespace4,
  PaymentEvaluation,
  PaymentEvaluationResource,
} from './PaymentEvaluations.js';
import {
  Radar as RadarNamespace5,
  ValueList,
  ValueListResource,
} from './ValueLists.js';
import {
  Radar as RadarNamespace6,
  ValueListItem,
  ValueListItemResource,
} from './ValueListItems.js';

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
  export type AccountEvaluationRetrieveParams = RadarNamespace0.AccountEvaluationRetrieveParams;
  export type AccountEvaluationCreateParams = RadarNamespace0.AccountEvaluationCreateParams;
  export type AccountEvaluationUpdateParams = RadarNamespace0.AccountEvaluationUpdateParams;
  export {AccountEvaluation};
  export type CustomerEvaluationCreateParams = RadarNamespace1.CustomerEvaluationCreateParams;
  export type CustomerEvaluationUpdateParams = RadarNamespace1.CustomerEvaluationUpdateParams;
  export {CustomerEvaluation};
  export type EarlyFraudWarningListParams = RadarNamespace2.EarlyFraudWarningListParams;
  export type EarlyFraudWarningRetrieveParams = RadarNamespace2.EarlyFraudWarningRetrieveParams;
  export {EarlyFraudWarning};
  export type IssuingAuthorizationEvaluationCreateParams = RadarNamespace3.IssuingAuthorizationEvaluationCreateParams;
  export {IssuingAuthorizationEvaluation};
  export type PaymentEvaluationCreateParams = RadarNamespace4.PaymentEvaluationCreateParams;
  export {PaymentEvaluation};
  export type ValueListDeleteParams = RadarNamespace5.ValueListDeleteParams;
  export type ValueListRetrieveParams = RadarNamespace5.ValueListRetrieveParams;
  export type ValueListUpdateParams = RadarNamespace5.ValueListUpdateParams;
  export type ValueListListParams = RadarNamespace5.ValueListListParams;
  export type ValueListCreateParams = RadarNamespace5.ValueListCreateParams;
  export {ValueList};
  export type ValueListItemDeleteParams = RadarNamespace6.ValueListItemDeleteParams;
  export type ValueListItemRetrieveParams = RadarNamespace6.ValueListItemRetrieveParams;
  export type ValueListItemListParams = RadarNamespace6.ValueListItemListParams;
  export type ValueListItemCreateParams = RadarNamespace6.ValueListItemCreateParams;
  export {ValueListItem};
}
