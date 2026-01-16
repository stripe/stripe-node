"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationFeeResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class ApplicationFeeResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/application_fees',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/application_fees/{id}',
        }).call(this, ...args);
    }
    retrieveRefund(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/application_fees/{fee}/refunds/{id}',
        }).call(this, ...args);
    }
    updateRefund(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/application_fees/{fee}/refunds/{id}',
        }).call(this, ...args);
    }
    listRefunds(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/application_fees/{id}/refunds',
            methodType: 'list',
        }).call(this, ...args);
    }
    createRefund(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/application_fees/{id}/refunds',
        }).call(this, ...args);
    }
}
exports.ApplicationFeeResource = ApplicationFeeResource;
//# sourceMappingURL=ApplicationFees.js.map