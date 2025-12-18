"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestHelpers = void 0;
const ConfirmationTokens_js_1 = require("./ConfirmationTokens.js");
const Customers_js_1 = require("./Customers.js");
const Refunds_js_1 = require("./Refunds.js");
const TestClocks_js_1 = require("./TestClocks.js");
class TestHelpers {
    constructor(stripe) {
        this.stripe = stripe;
        this.confirmationTokens = new ConfirmationTokens_js_1.ConfirmationTokenResource(stripe);
        this.customers = new Customers_js_1.CustomerResource(stripe);
        this.refunds = new Refunds_js_1.RefundResource(stripe);
        this.testClocks = new TestClocks_js_1.TestClockResource(stripe);
    }
}
exports.TestHelpers = TestHelpers;
