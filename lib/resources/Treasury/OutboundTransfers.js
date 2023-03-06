// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboundTransfers = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.OutboundTransfers = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/outbound_transfers',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/outbound_transfers/{outbound_transfer}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/outbound_transfers',
        methodType: 'list',
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/outbound_transfers/{outbound_transfer}/cancel',
    }),
});
