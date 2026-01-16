// File generated from our OpenAPI spec
import { AlertResource } from './Alerts.js';
import { CreditBalanceSummaryResource, } from './CreditBalanceSummary.js';
import { CreditBalanceTransactionResource, } from './CreditBalanceTransactions.js';
import { CreditGrantResource } from './CreditGrants.js';
import { MeterResource } from './Meters.js';
import { MeterEventResource } from './MeterEvents.js';
import { MeterEventAdjustmentResource, } from './MeterEventAdjustments.js';
export class Billing {
    constructor(stripe) {
        this.stripe = stripe;
        this.alerts = new AlertResource(stripe);
        this.creditBalanceSummaries = new CreditBalanceSummaryResource(stripe);
        this.creditBalanceTransactions = new CreditBalanceTransactionResource(stripe);
        this.creditGrants = new CreditGrantResource(stripe);
        this.meters = new MeterResource(stripe);
        this.meterEvents = new MeterEventResource(stripe);
        this.meterEventAdjustments = new MeterEventAdjustmentResource(stripe);
    }
}
//# sourceMappingURL=index.js.map