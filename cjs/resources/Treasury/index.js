"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Treasury = void 0;
const CreditReversals_js_1 = require("./CreditReversals.js");
const DebitReversals_js_1 = require("./DebitReversals.js");
const FinancialAccounts_js_1 = require("./FinancialAccounts.js");
const InboundTransfers_js_1 = require("./InboundTransfers.js");
const OutboundPayments_js_1 = require("./OutboundPayments.js");
const OutboundTransfers_js_1 = require("./OutboundTransfers.js");
const ReceivedCredits_js_1 = require("./ReceivedCredits.js");
const ReceivedDebits_js_1 = require("./ReceivedDebits.js");
const Transactions_js_1 = require("./Transactions.js");
const TransactionEntries_js_1 = require("./TransactionEntries.js");
class Treasury {
    constructor(stripe) {
        this.stripe = stripe;
        this.creditReversals = new CreditReversals_js_1.CreditReversalResource(stripe);
        this.debitReversals = new DebitReversals_js_1.DebitReversalResource(stripe);
        this.financialAccounts = new FinancialAccounts_js_1.FinancialAccountResource(stripe);
        this.inboundTransfers = new InboundTransfers_js_1.InboundTransferResource(stripe);
        this.outboundPayments = new OutboundPayments_js_1.OutboundPaymentResource(stripe);
        this.outboundTransfers = new OutboundTransfers_js_1.OutboundTransferResource(stripe);
        this.receivedCredits = new ReceivedCredits_js_1.ReceivedCreditResource(stripe);
        this.receivedDebits = new ReceivedDebits_js_1.ReceivedDebitResource(stripe);
        this.transactions = new Transactions_js_1.TransactionResource(stripe);
        this.transactionEntries = new TransactionEntries_js_1.TransactionEntryResource(stripe);
    }
}
exports.Treasury = Treasury;
//# sourceMappingURL=index.js.map