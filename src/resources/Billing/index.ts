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
import {Analytics} from './Analytics/index.js';

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
  analytics: Analytics;

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
    this.analytics = new Analytics(stripe);
  }
}

export declare namespace Billing {
  export type AlertListParams = BillingNamespace0.AlertListParams;
  export type AlertCreateParams = BillingNamespace0.AlertCreateParams;
  export type AlertRetrieveParams = BillingNamespace0.AlertRetrieveParams;
  export type AlertActivateParams = BillingNamespace0.AlertActivateParams;
  export type AlertArchiveParams = BillingNamespace0.AlertArchiveParams;
  export type AlertDeactivateParams = BillingNamespace0.AlertDeactivateParams;
  export {Alert};
  export type CreditBalanceSummaryRetrieveParams = BillingNamespace1.CreditBalanceSummaryRetrieveParams;
  export {CreditBalanceSummary};
  export type CreditBalanceTransactionListParams = BillingNamespace2.CreditBalanceTransactionListParams;
  export type CreditBalanceTransactionRetrieveParams = BillingNamespace2.CreditBalanceTransactionRetrieveParams;
  export {CreditBalanceTransaction};
  export type CreditGrantListParams = BillingNamespace3.CreditGrantListParams;
  export type CreditGrantCreateParams = BillingNamespace3.CreditGrantCreateParams;
  export type CreditGrantRetrieveParams = BillingNamespace3.CreditGrantRetrieveParams;
  export type CreditGrantUpdateParams = BillingNamespace3.CreditGrantUpdateParams;
  export type CreditGrantExpireParams = BillingNamespace3.CreditGrantExpireParams;
  export type CreditGrantVoidGrantParams = BillingNamespace3.CreditGrantVoidGrantParams;
  export {CreditGrant};
  export type MeterListParams = BillingNamespace4.MeterListParams;
  export type MeterCreateParams = BillingNamespace4.MeterCreateParams;
  export type MeterRetrieveParams = BillingNamespace4.MeterRetrieveParams;
  export type MeterUpdateParams = BillingNamespace4.MeterUpdateParams;
  export type MeterDeactivateParams = BillingNamespace4.MeterDeactivateParams;
  export type MeterReactivateParams = BillingNamespace4.MeterReactivateParams;
  export type MeterListEventSummariesParams = BillingNamespace4.MeterListEventSummariesParams;
  export {Meter};
  export type MeterEventCreateParams = BillingNamespace5.MeterEventCreateParams;
  export {MeterEvent};
  export type MeterEventAdjustmentCreateParams = BillingNamespace6.MeterEventAdjustmentCreateParams;
  export {MeterEventAdjustment};
  export {AlertTriggered};
  export {MeterEventSummary};
  export {Analytics};
}
