// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Radar as RadarNamespace0,
  AccountEvaluation,
  AccountEvaluationResource,
} from './AccountEvaluations.js';
import {
  Radar as RadarNamespace1,
  BillingEvaluation,
  BillingEvaluationResource,
} from './BillingEvaluations.js';
import {
  Radar as RadarNamespace2,
  CustomerEvaluation,
  CustomerEvaluationResource,
} from './CustomerEvaluations.js';
import {
  Radar as RadarNamespace3,
  EarlyFraudWarning,
  EarlyFraudWarningResource,
} from './EarlyFraudWarnings.js';
import {
  Radar as RadarNamespace4,
  IssuingAuthorizationEvaluation,
  IssuingAuthorizationEvaluationResource,
} from './IssuingAuthorizationEvaluations.js';
import {
  Radar as RadarNamespace5,
  PaymentEvaluation,
  PaymentEvaluationResource,
} from './PaymentEvaluations.js';
import {
  Radar as RadarNamespace6,
  ValueList,
  DeletedValueList,
  ValueListResource,
} from './ValueLists.js';
import {
  Radar as RadarNamespace7,
  ValueListItem,
  DeletedValueListItem,
  ValueListItemResource,
} from './ValueListItems.js';

export {AccountEvaluation} from './AccountEvaluations.js';
export {BillingEvaluation} from './BillingEvaluations.js';
export {CustomerEvaluation} from './CustomerEvaluations.js';
export {EarlyFraudWarning} from './EarlyFraudWarnings.js';
export {IssuingAuthorizationEvaluation} from './IssuingAuthorizationEvaluations.js';
export {PaymentEvaluation} from './PaymentEvaluations.js';
export {ValueList} from './ValueLists.js';
export {ValueListItem} from './ValueListItems.js';

export class Radar {
  accountEvaluations: AccountEvaluationResource;
  billingEvaluations: BillingEvaluationResource;
  customerEvaluations: CustomerEvaluationResource;
  earlyFraudWarnings: EarlyFraudWarningResource;
  issuingAuthorizationEvaluations: IssuingAuthorizationEvaluationResource;
  paymentEvaluations: PaymentEvaluationResource;
  valueLists: ValueListResource;
  valueListItems: ValueListItemResource;

  constructor(private readonly stripe: Stripe) {
    this.accountEvaluations = new AccountEvaluationResource(stripe);
    this.billingEvaluations = new BillingEvaluationResource(stripe);
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
  export import AccountEvaluationRetrieveParams = RadarNamespace0.AccountEvaluationRetrieveParams;
  export import AccountEvaluationCreateParams = RadarNamespace0.AccountEvaluationCreateParams;
  export import AccountEvaluationUpdateParams = RadarNamespace0.AccountEvaluationUpdateParams;
  export {AccountEvaluation, AccountEvaluationResource};
  export import BillingEvaluationCreateParams = RadarNamespace1.BillingEvaluationCreateParams;
  export {BillingEvaluation, BillingEvaluationResource};
  export import CustomerEvaluationRetrieveParams = RadarNamespace2.CustomerEvaluationRetrieveParams;
  export import CustomerEvaluationCreateParams = RadarNamespace2.CustomerEvaluationCreateParams;
  export import CustomerEvaluationUpdateParams = RadarNamespace2.CustomerEvaluationUpdateParams;
  export {CustomerEvaluation, CustomerEvaluationResource};
  export import EarlyFraudWarningListParams = RadarNamespace3.EarlyFraudWarningListParams;
  export import EarlyFraudWarningRetrieveParams = RadarNamespace3.EarlyFraudWarningRetrieveParams;
  export {EarlyFraudWarning, EarlyFraudWarningResource};
  export import IssuingAuthorizationEvaluationCreateParams = RadarNamespace4.IssuingAuthorizationEvaluationCreateParams;
  export {
    IssuingAuthorizationEvaluation,
    IssuingAuthorizationEvaluationResource,
  };
  export import PaymentEvaluationCreateParams = RadarNamespace5.PaymentEvaluationCreateParams;
  export {PaymentEvaluation, PaymentEvaluationResource};
  export import ValueListDeleteParams = RadarNamespace6.ValueListDeleteParams;
  export import ValueListRetrieveParams = RadarNamespace6.ValueListRetrieveParams;
  export import ValueListUpdateParams = RadarNamespace6.ValueListUpdateParams;
  export import ValueListListParams = RadarNamespace6.ValueListListParams;
  export import ValueListCreateParams = RadarNamespace6.ValueListCreateParams;
  export {DeletedValueList};
  export {ValueList, ValueListResource};
  export import ValueListItemDeleteParams = RadarNamespace7.ValueListItemDeleteParams;
  export import ValueListItemRetrieveParams = RadarNamespace7.ValueListItemRetrieveParams;
  export import ValueListItemListParams = RadarNamespace7.ValueListItemListParams;
  export import ValueListItemCreateParams = RadarNamespace7.ValueListItemCreateParams;
  export import ValueListItemSerializeBatchCreateParams = RadarNamespace7.ValueListItemSerializeBatchCreateParams;
  export {DeletedValueListItem};
  export {ValueListItem, ValueListItemResource};
}
