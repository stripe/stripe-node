// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboundTransfers = void 0;
const StripeResource_1 = require("../../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.OutboundTransfers = StripeResource_1.StripeResource.extend({
    fail: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail',
    }),
    post: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post',
    }),
    returnOutboundTransfer: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return',
    }),
});
