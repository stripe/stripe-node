"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceivedCreditResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class ReceivedCreditResource extends StripeResource_js_1.StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/received_credits',
        }).call(this, ...args);
    }
}
exports.ReceivedCreditResource = ReceivedCreditResource;
//# sourceMappingURL=ReceivedCredits.js.map