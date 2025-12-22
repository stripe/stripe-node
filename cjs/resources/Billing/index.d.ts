import { StripeClient } from '../../stripe.core.js';
import { AlertResource } from './Alerts.js';
import { CreditBalanceSummaryResource } from './CreditBalanceSummary.js';
import { CreditBalanceTransactionResource } from './CreditBalanceTransactions.js';
import { CreditGrantResource } from './CreditGrants.js';
import { MeterResource } from './Meters.js';
import { MeterEventResource } from './MeterEvents.js';
import { MeterEventAdjustmentResource } from './MeterEventAdjustments.js';
export { Alert } from './Alerts.js';
export { CreditBalanceSummary } from './CreditBalanceSummary.js';
export { CreditBalanceTransaction } from './CreditBalanceTransactions.js';
export { CreditGrant } from './CreditGrants.js';
export { Meter } from './Meters.js';
export { MeterEvent } from './MeterEvents.js';
export { MeterEventAdjustment } from './MeterEventAdjustments.js';
export declare class Billing {
    private readonly stripe;
    alerts: AlertResource;
    creditBalanceSummaries: CreditBalanceSummaryResource;
    creditBalanceTransactions: CreditBalanceTransactionResource;
    creditGrants: CreditGrantResource;
    meters: MeterResource;
    meterEvents: MeterEventResource;
    meterEventAdjustments: MeterEventAdjustmentResource;
    constructor(stripe: StripeClient);
}
