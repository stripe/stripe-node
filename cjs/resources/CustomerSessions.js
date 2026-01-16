"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSessionResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class CustomerSessionResource extends StripeResource_js_1.StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/customer_sessions',
        }).call(this, ...args);
    }
}
exports.CustomerSessionResource = CustomerSessionResource;
//# sourceMappingURL=CustomerSessions.js.map