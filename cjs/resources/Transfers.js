"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class TransferResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/transfers',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/transfers',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/transfers/{transfer}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/transfers/{transfer}',
        }).call(this, ...args);
    }
    listReversals(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/transfers/{id}/reversals',
            methodType: 'list',
        }).call(this, ...args);
    }
    createReversal(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/transfers/{id}/reversals',
        }).call(this, ...args);
    }
    retrieveReversal(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/transfers/{transfer}/reversals/{id}',
        }).call(this, ...args);
    }
    updateReversal(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/transfers/{transfer}/reversals/{id}',
        }).call(this, ...args);
    }
}
exports.TransferResource = TransferResource;
//# sourceMappingURL=Transfers.js.map