// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reviews = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Reviews = StripeResource_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reviews/{review}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reviews',
        methodType: 'list',
    }),
    approve: stripeMethod({
        method: 'POST',
        fullPath: '/v1/reviews/{review}/approve',
    }),
});
