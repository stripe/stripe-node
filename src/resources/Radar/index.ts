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
  export type EarlyFraudWarningListParams = RadarNamespace0.EarlyFraudWarningListParams;
  export type EarlyFraudWarningRetrieveParams = RadarNamespace0.EarlyFraudWarningRetrieveParams;
  export {EarlyFraudWarning};
  export type PaymentEvaluationCreateParams = RadarNamespace1.PaymentEvaluationCreateParams;
  export {PaymentEvaluation};
  export type ValueListDeleteParams = RadarNamespace2.ValueListDeleteParams;
  export type ValueListRetrieveParams = RadarNamespace2.ValueListRetrieveParams;
  export type ValueListUpdateParams = RadarNamespace2.ValueListUpdateParams;
  export type ValueListListParams = RadarNamespace2.ValueListListParams;
  export type ValueListCreateParams = RadarNamespace2.ValueListCreateParams;
  export {ValueList};
  export type ValueListItemDeleteParams = RadarNamespace3.ValueListItemDeleteParams;
  export type ValueListItemRetrieveParams = RadarNamespace3.ValueListItemRetrieveParams;
  export type ValueListItemListParams = RadarNamespace3.ValueListItemListParams;
  export type ValueListItemCreateParams = RadarNamespace3.ValueListItemCreateParams;
  export {ValueListItem};
}
