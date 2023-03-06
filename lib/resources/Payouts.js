// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payouts = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Payouts = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payouts',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payouts/{payout}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payouts/{payout}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/payouts',
        methodType: 'list',
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payouts/{payout}/cancel',
    }),
    reverse: stripeMethod({
        method: 'POST',
        fullPath: '/v1/payouts/{payout}/reverse',
    }),
});
