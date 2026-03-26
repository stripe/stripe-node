// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {Alert, AlertResource} from './Alerts.js';
import {
  CreditBalanceSummary,
  CreditBalanceSummaryResource,
} from './CreditBalanceSummary.js';
import {
  CreditBalanceTransaction,
  CreditBalanceTransactionResource,
} from './CreditBalanceTransactions.js';
import {CreditGrant, CreditGrantResource} from './CreditGrants.js';
import {Meter, MeterResource} from './Meters.js';
import {MeterEvent, MeterEventResource} from './MeterEvents.js';
import {
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
  export {Alert};
  export {CreditBalanceSummary};
  export {CreditBalanceTransaction};
  export {CreditGrant};
  export {Meter};
  export {MeterEvent};
  export {MeterEventAdjustment};
  export {AlertTriggered};
  export {MeterEventSummary};
}
