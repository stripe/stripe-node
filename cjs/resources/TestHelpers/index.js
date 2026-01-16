"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestHelpers = void 0;
const ConfirmationTokens_js_1 = require("./ConfirmationTokens.js");
const Customers_js_1 = require("./Customers.js");
const Refunds_js_1 = require("./Refunds.js");
const TestClocks_js_1 = require("./TestClocks.js");
const index_js_1 = require("./Issuing/index.js");
const index_js_2 = require("./Terminal/index.js");
const index_js_3 = require("./Treasury/index.js");
class TestHelpers {
    constructor(stripe) {
        this.stripe = stripe;
        this.confirmationTokens = new ConfirmationTokens_js_1.ConfirmationTokenResource(stripe);
        this.customers = new Customers_js_1.CustomerResource(stripe);
        this.refunds = new Refunds_js_1.RefundResource(stripe);
        this.testClocks = new TestClocks_js_1.TestClockResource(stripe);
        this.issuing = new index_js_1.Issuing(stripe);
        this.terminal = new index_js_2.Terminal(stripe);
        this.treasury = new index_js_3.Treasury(stripe);
    }
}
exports.TestHelpers = TestHelpers;
//# sourceMappingURL=index.js.map