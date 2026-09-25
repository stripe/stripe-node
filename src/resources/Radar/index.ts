// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Radar as RadarNamespace0,
  BillingEvaluation,
  BillingEvaluationResource,
} from './BillingEvaluations.js';
import {
  Radar as RadarNamespace1,
  EarlyFraudWarning,
  EarlyFraudWarningResource,
} from './EarlyFraudWarnings.js';
import {
  Radar as RadarNamespace2,
  PaymentEvaluation,
  PaymentEvaluationResource,
} from './PaymentEvaluations.js';
import {
  Radar as RadarNamespace3,
  ValueList,
  DeletedValueList,
  ValueListResource,
} from './ValueLists.js';
import {
  Radar as RadarNamespace4,
  ValueListItem,
  DeletedValueListItem,
  ValueListItemResource,
} from './ValueListItems.js';

export {BillingEvaluation} from './BillingEvaluations.js';
export {EarlyFraudWarning} from './EarlyFraudWarnings.js';
export {PaymentEvaluation} from './PaymentEvaluations.js';
export {ValueList} from './ValueLists.js';
export {ValueListItem} from './ValueListItems.js';

export class Radar {
  billingEvaluations: BillingEvaluationResource;
  earlyFraudWarnings: EarlyFraudWarningResource;
  paymentEvaluations: PaymentEvaluationResource;
  valueLists: ValueListResource;
  valueListItems: ValueListItemResource;

  constructor(private readonly stripe: Stripe) {
    this.billingEvaluations = new BillingEvaluationResource(stripe);
    this.earlyFraudWarnings = new EarlyFraudWarningResource(stripe);
    this.paymentEvaluations = new PaymentEvaluationResource(stripe);
    this.valueLists = new ValueListResource(stripe);
    this.valueListItems = new ValueListItemResource(stripe);
  }
}

export declare namespace Radar {
  export import BillingEvaluationCreateParams = RadarNamespace0.BillingEvaluationCreateParams;
  export {BillingEvaluation, BillingEvaluationResource};
  export import EarlyFraudWarningListParams = RadarNamespace1.EarlyFraudWarningListParams;
  export import EarlyFraudWarningRetrieveParams = RadarNamespace1.EarlyFraudWarningRetrieveParams;
  export {EarlyFraudWarning, EarlyFraudWarningResource};
  export import PaymentEvaluationCreateParams = RadarNamespace2.PaymentEvaluationCreateParams;
  export {PaymentEvaluation, PaymentEvaluationResource};
  export import ValueListDeleteParams = RadarNamespace3.ValueListDeleteParams;
  export import ValueListRetrieveParams = RadarNamespace3.ValueListRetrieveParams;
  export import ValueListUpdateParams = RadarNamespace3.ValueListUpdateParams;
  export import ValueListListParams = RadarNamespace3.ValueListListParams;
  export import ValueListCreateParams = RadarNamespace3.ValueListCreateParams;
  export {DeletedValueList};
  export {ValueList, ValueListResource};
  export import ValueListItemDeleteParams = RadarNamespace4.ValueListItemDeleteParams;
  export import ValueListItemRetrieveParams = RadarNamespace4.ValueListItemRetrieveParams;
  export import ValueListItemListParams = RadarNamespace4.ValueListItemListParams;
  export import ValueListItemCreateParams = RadarNamespace4.ValueListItemCreateParams;
  export {DeletedValueListItem};
  export {ValueListItem, ValueListItemResource};
}
