// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboundPayments = void 0;
const StripeResource_1 = require("../../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.OutboundPayments = StripeResource_1.StripeResource.extend({
    fail: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/fail',
    }),
    post: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/post',
    }),
    returnOutboundPayment: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/return',
    }),
});
