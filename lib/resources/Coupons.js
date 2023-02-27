// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupons = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Coupons = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/coupons',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/coupons/{coupon}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/coupons/{coupon}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/coupons',
        methodType: 'list',
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/coupons/{coupon}',
    }),
});
