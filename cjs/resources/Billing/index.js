"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Billing = void 0;
const Alerts_js_1 = require("./Alerts.js");
const CreditBalanceSummary_js_1 = require("./CreditBalanceSummary.js");
const CreditBalanceTransactions_js_1 = require("./CreditBalanceTransactions.js");
const CreditGrants_js_1 = require("./CreditGrants.js");
const Meters_js_1 = require("./Meters.js");
const MeterEvents_js_1 = require("./MeterEvents.js");
const MeterEventAdjustments_js_1 = require("./MeterEventAdjustments.js");
class Billing {
    constructor(stripe) {
        this.stripe = stripe;
        this.alerts = new Alerts_js_1.AlertResource(stripe);
        this.creditBalanceSummaries = new CreditBalanceSummary_js_1.CreditBalanceSummaryResource(stripe);
        this.creditBalanceTransactions = new CreditBalanceTransactions_js_1.CreditBalanceTransactionResource(stripe);
        this.creditGrants = new CreditGrants_js_1.CreditGrantResource(stripe);
        this.meters = new Meters_js_1.MeterResource(stripe);
        this.meterEvents = new MeterEvents_js_1.MeterEventResource(stripe);
        this.meterEventAdjustments = new MeterEventAdjustments_js_1.MeterEventAdjustmentResource(stripe);
    }
}
exports.Billing = Billing;
