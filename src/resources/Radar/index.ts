// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Radar as RadarNamespace0,
  EarlyFraudWarning,
  EarlyFraudWarningResource,
} from './EarlyFraudWarnings.js';
import {
  Radar as RadarNamespace1,
  PaymentEvaluation,
  PaymentEvaluationResource,
} from './PaymentEvaluations.js';
import {
  Radar as RadarNamespace2,
  ValueList,
  ValueListResource,
} from './ValueLists.js';
import {
  Radar as RadarNamespace3,
  ValueListItem,
  ValueListItemResource,
} from './ValueListItems.js';

export {EarlyFraudWarning} from './EarlyFraudWarnings.js';
export {PaymentEvaluation} from './PaymentEvaluations.js';
export {ValueList} from './ValueLists.js';
export {ValueListItem} from './ValueListItems.js';

export class Radar {
  earlyFraudWarnings: EarlyFraudWarningResource;
  paymentEvaluations: PaymentEvaluationResource;
  valueLists: ValueListResource;
  valueListItems: ValueListItemResource;

  constructor(private readonly stripe: Stripe) {
    this.earlyFraudWarnings = new EarlyFraudWarningResource(stripe);
    this.paymentEvaluations = new PaymentEvaluationResource(stripe);
    this.valueLists = new ValueListResource(stripe);
    this.valueListItems = new ValueListItemResource(stripe);
  }
}

export declare namespace Radar {
  export import EarlyFraudWarningListParams = RadarNamespace0.EarlyFraudWarningListParams;
  export import EarlyFraudWarningRetrieveParams = RadarNamespace0.EarlyFraudWarningRetrieveParams;
  export {EarlyFraudWarning};
  export import PaymentEvaluationCreateParams = RadarNamespace1.PaymentEvaluationCreateParams;
  export {PaymentEvaluation};
  export import ValueListDeleteParams = RadarNamespace2.ValueListDeleteParams;
  export import ValueListRetrieveParams = RadarNamespace2.ValueListRetrieveParams;
  export import ValueListUpdateParams = RadarNamespace2.ValueListUpdateParams;
  export import ValueListListParams = RadarNamespace2.ValueListListParams;
  export import ValueListCreateParams = RadarNamespace2.ValueListCreateParams;
  export {ValueList};
  export import ValueListItemDeleteParams = RadarNamespace3.ValueListItemDeleteParams;
  export import ValueListItemRetrieveParams = RadarNamespace3.ValueListItemRetrieveParams;
  export import ValueListItemListParams = RadarNamespace3.ValueListItemListParams;
  export import ValueListItemCreateParams = RadarNamespace3.ValueListItemCreateParams;
  export {ValueListItem};
}
