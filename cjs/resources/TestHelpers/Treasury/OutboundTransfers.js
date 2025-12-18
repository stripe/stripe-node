"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboundTransferResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class OutboundTransferResource extends StripeResource_js_1.StripeResource {
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}',
        }).call(this, ...args);
    }
    fail(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail',
        }).call(this, ...args);
    }
    post(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post',
        }).call(this, ...args);
    }
    returnOutboundTransfer(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return',
        }).call(this, ...args);
    }
}
exports.OutboundTransferResource = OutboundTransferResource;
