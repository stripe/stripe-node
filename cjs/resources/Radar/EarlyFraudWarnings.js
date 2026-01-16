"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarlyFraudWarningResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class EarlyFraudWarningResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/radar/early_fraud_warnings',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/radar/early_fraud_warnings/{early_fraud_warning}',
        }).call(this, ...args);
    }
}
exports.EarlyFraudWarningResource = EarlyFraudWarningResource;
//# sourceMappingURL=EarlyFraudWarnings.js.map