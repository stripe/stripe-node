// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.InboundTransfers = void 0;
const StripeResource_1 = require("../../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.InboundTransfers = StripeResource_1.StripeResource.extend({
    fail: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/fail',
    }),
    returnInboundTransfer: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/return',
    }),
    succeed: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/inbound_transfers/{id}/succeed',
    }),
});
