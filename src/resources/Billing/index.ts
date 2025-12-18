// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {AlertResource} from './Alerts.js';
import {CreditBalanceSummaryResource} from './CreditBalanceSummary.js';
import {CreditBalanceTransactionResource} from './CreditBalanceTransactions.js';
import {CreditGrantResource} from './CreditGrants.js';
import {MeterResource} from './Meters.js';
import {MeterEventResource} from './MeterEvents.js';
import {MeterEventAdjustmentResource} from './MeterEventAdjustments.js';

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
