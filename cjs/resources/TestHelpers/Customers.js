"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class CustomerResource extends StripeResource_js_1.StripeResource {
    fundCashBalance(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/customers/{customer}/fund_cash_balance',
        }).call(this, ...args);
    }
}
exports.CustomerResource = CustomerResource;
//# sourceMappingURL=Customers.js.map