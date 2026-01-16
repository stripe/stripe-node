"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReaderResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class ReaderResource extends StripeResource_js_1.StripeResource {
    presentPaymentMethod(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/terminal/readers/{reader}/present_payment_method',
        }).call(this, ...args);
    }
    succeedInputCollection(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/terminal/readers/{reader}/succeed_input_collection',
        }).call(this, ...args);
    }
    timeoutInputCollection(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/terminal/readers/{reader}/timeout_input_collection',
        }).call(this, ...args);
    }
}
exports.ReaderResource = ReaderResource;
//# sourceMappingURL=Readers.js.map