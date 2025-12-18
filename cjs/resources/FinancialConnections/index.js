"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialConnections = void 0;
const Accounts_js_1 = require("./Accounts.js");
const Sessions_js_1 = require("./Sessions.js");
const Transactions_js_1 = require("./Transactions.js");
class FinancialConnections {
    constructor(stripe) {
        this.stripe = stripe;
        this.accounts = new Accounts_js_1.AccountResource(stripe);
        this.sessions = new Sessions_js_1.SessionResource(stripe);
        this.transactions = new Transactions_js_1.TransactionResource(stripe);
    }
}
exports.FinancialConnections = FinancialConnections;
