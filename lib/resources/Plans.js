// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plans = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Plans = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/plans',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/plans/{plan}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/plans/{plan}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/plans',
        methodType: 'list',
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/plans/{plan}',
    }),
});
