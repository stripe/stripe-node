// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topups = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Topups = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/topups',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/topups/{topup}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/topups/{topup}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/topups',
        methodType: 'list',
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/topups/{topup}/cancel',
    }),
});
