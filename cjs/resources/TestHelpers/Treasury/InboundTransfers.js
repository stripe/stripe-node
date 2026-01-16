"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.InboundTransferResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class InboundTransferResource extends StripeResource_js_1.StripeResource {
    fail(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/fail',
        }).call(this, ...args);
    }
    returnInboundTransfer(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/return',
        }).call(this, ...args);
    }
    succeed(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/succeed',
        }).call(this, ...args);
    }
}
exports.InboundTransferResource = InboundTransferResource;
//# sourceMappingURL=InboundTransfers.js.map