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
  DeletedValueList,
  ValueListResource,
} from './ValueLists.js';
import {
  Radar as RadarNamespace6,
  ValueListItem,
  DeletedValueListItem,
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
  export import AccountEvaluationRetrieveParams = RadarNamespace0.AccountEvaluationRetrieveParams;
  export import AccountEvaluationCreateParams = RadarNamespace0.AccountEvaluationCreateParams;
  export import AccountEvaluationUpdateParams = RadarNamespace0.AccountEvaluationUpdateParams;
  export {AccountEvaluation, AccountEvaluationResource};
  export import CustomerEvaluationRetrieveParams = RadarNamespace1.CustomerEvaluationRetrieveParams;
  export import CustomerEvaluationCreateParams = RadarNamespace1.CustomerEvaluationCreateParams;
  export import CustomerEvaluationUpdateParams = RadarNamespace1.CustomerEvaluationUpdateParams;
  export {CustomerEvaluation, CustomerEvaluationResource};
  export import EarlyFraudWarningListParams = RadarNamespace2.EarlyFraudWarningListParams;
  export import EarlyFraudWarningRetrieveParams = RadarNamespace2.EarlyFraudWarningRetrieveParams;
  export {EarlyFraudWarning, EarlyFraudWarningResource};
  export import IssuingAuthorizationEvaluationCreateParams = RadarNamespace3.IssuingAuthorizationEvaluationCreateParams;
  export {
    IssuingAuthorizationEvaluation,
    IssuingAuthorizationEvaluationResource,
  };
  export import PaymentEvaluationCreateParams = RadarNamespace4.PaymentEvaluationCreateParams;
  export {PaymentEvaluation, PaymentEvaluationResource};
  export import ValueListDeleteParams = RadarNamespace5.ValueListDeleteParams;
  export import ValueListRetrieveParams = RadarNamespace5.ValueListRetrieveParams;
  export import ValueListUpdateParams = RadarNamespace5.ValueListUpdateParams;
  export import ValueListListParams = RadarNamespace5.ValueListListParams;
  export import ValueListCreateParams = RadarNamespace5.ValueListCreateParams;
  export import DeletedValueList = RadarNamespace5.DeletedValueList;
  export {ValueList, ValueListResource};
  export import ValueListItemDeleteParams = RadarNamespace6.ValueListItemDeleteParams;
  export import ValueListItemRetrieveParams = RadarNamespace6.ValueListItemRetrieveParams;
  export import ValueListItemListParams = RadarNamespace6.ValueListItemListParams;
  export import ValueListItemCreateParams = RadarNamespace6.ValueListItemCreateParams;
  export import ValueListItemSerializeBatchCreateParams = RadarNamespace6.ValueListItemSerializeBatchCreateParams;
  export import DeletedValueListItem = RadarNamespace6.DeletedValueListItem;
  export {ValueListItem, ValueListItemResource};
}
