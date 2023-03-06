// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.InboundTransfers = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.InboundTransfers = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/inbound_transfers',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/inbound_transfers/{id}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/inbound_transfers',
        methodType: 'list',
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/inbound_transfers/{inbound_transfer}/cancel',
    }),
});
