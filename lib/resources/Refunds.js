// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refunds = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Refunds = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/refunds',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/refunds/{refund}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/refunds/{refund}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/refunds',
        methodType: 'list',
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/refunds/{refund}/cancel',
    }),
});
