// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {Billing as BillingNamespace0, Alert, AlertResource} from './Alerts.js';
import {
  Billing as BillingNamespace1,
  CreditBalanceSummary,
  CreditBalanceSummaryResource,
} from './CreditBalanceSummary.js';
import {
  Billing as BillingNamespace2,
  CreditBalanceTransaction,
  CreditBalanceTransactionResource,
} from './CreditBalanceTransactions.js';
import {
  Billing as BillingNamespace3,
  CreditGrant,
  CreditGrantResource,
} from './CreditGrants.js';
import {Billing as BillingNamespace4, Meter, MeterResource} from './Meters.js';
import {
  Billing as BillingNamespace5,
  MeterEvent,
  MeterEventResource,
} from './MeterEvents.js';
import {
  Billing as BillingNamespace6,
  MeterEventAdjustment,
  MeterEventAdjustmentResource,
} from './MeterEventAdjustments.js';
import {AlertTriggered} from './AlertTriggereds.js';
import {MeterEventSummary} from './MeterEventSummaries.js';

export {Alert} from './Alerts.js';
export {CreditBalanceSummary} from './CreditBalanceSummary.js';
export {CreditBalanceTransaction} from './CreditBalanceTransactions.js';
export {CreditGrant} from './CreditGrants.js';
export {Meter} from './Meters.js';
export {MeterEvent} from './MeterEvents.js';
export {MeterEventAdjustment} from './MeterEventAdjustments.js';
export {AlertTriggered} from './AlertTriggereds.js';
export {MeterEventSummary} from './MeterEventSummaries.js';

export class Billing {
  alerts: AlertResource;
  creditBalanceSummaries: CreditBalanceSummaryResource;
  creditBalanceTransactions: CreditBalanceTransactionResource;
  creditGrants: CreditGrantResource;
  meters: MeterResource;
  meterEvents: MeterEventResource;
  meterEventAdjustments: MeterEventAdjustmentResource;

  constructor(private readonly stripe: Stripe) {
    this.alerts = new AlertResource(stripe);
    this.creditBalanceSummaries = new CreditBalanceSummaryResource(stripe);
    this.creditBalanceTransactions = new CreditBalanceTransactionResource(
      stripe
    );
    this.creditGrants = new CreditGrantResource(stripe);
    this.meters = new MeterResource(stripe);
    this.meterEvents = new MeterEventResource(stripe);
    this.meterEventAdjustments = new MeterEventAdjustmentResource(stripe);
  }
}

export declare namespace Billing {
  export import AlertListParams = BillingNamespace0.AlertListParams;
  export import AlertCreateParams = BillingNamespace0.AlertCreateParams;
  export import AlertRetrieveParams = BillingNamespace0.AlertRetrieveParams;
  export import AlertActivateParams = BillingNamespace0.AlertActivateParams;
  export import AlertArchiveParams = BillingNamespace0.AlertArchiveParams;
  export import AlertDeactivateParams = BillingNamespace0.AlertDeactivateParams;
  export {Alert};
  export import CreditBalanceSummaryRetrieveParams = BillingNamespace1.CreditBalanceSummaryRetrieveParams;
  export {CreditBalanceSummary};
  export import CreditBalanceTransactionListParams = BillingNamespace2.CreditBalanceTransactionListParams;
  export import CreditBalanceTransactionRetrieveParams = BillingNamespace2.CreditBalanceTransactionRetrieveParams;
  export {CreditBalanceTransaction};
  export import CreditGrantListParams = BillingNamespace3.CreditGrantListParams;
  export import CreditGrantCreateParams = BillingNamespace3.CreditGrantCreateParams;
  export import CreditGrantRetrieveParams = BillingNamespace3.CreditGrantRetrieveParams;
  export import CreditGrantUpdateParams = BillingNamespace3.CreditGrantUpdateParams;
  export import CreditGrantExpireParams = BillingNamespace3.CreditGrantExpireParams;
  export import CreditGrantVoidGrantParams = BillingNamespace3.CreditGrantVoidGrantParams;
  export {CreditGrant};
  export import MeterListParams = BillingNamespace4.MeterListParams;
  export import MeterCreateParams = BillingNamespace4.MeterCreateParams;
  export import MeterRetrieveParams = BillingNamespace4.MeterRetrieveParams;
  export import MeterUpdateParams = BillingNamespace4.MeterUpdateParams;
  export import MeterDeactivateParams = BillingNamespace4.MeterDeactivateParams;
  export import MeterReactivateParams = BillingNamespace4.MeterReactivateParams;
  export import MeterListEventSummariesParams = BillingNamespace4.MeterListEventSummariesParams;
  export {Meter};
  export import MeterEventCreateParams = BillingNamespace5.MeterEventCreateParams;
  export {MeterEvent};
  export import MeterEventAdjustmentCreateParams = BillingNamespace6.MeterEventAdjustmentCreateParams;
  export {MeterEventAdjustment};
  export {AlertTriggered};
  export {MeterEventSummary};
}
