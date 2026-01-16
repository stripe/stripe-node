"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisputeResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class DisputeResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/disputes',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/disputes/{dispute}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/disputes/{dispute}',
        }).call(this, ...args);
    }
    close(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/disputes/{dispute}/close',
        }).call(this, ...args);
    }
}
exports.DisputeResource = DisputeResource;
//# sourceMappingURL=Disputes.js.map