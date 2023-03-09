// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secrets = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Secrets = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/apps/secrets',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/apps/secrets',
        methodType: 'list',
    }),
    deleteWhere: stripeMethod({
        method: 'POST',
        fullPath: '/v1/apps/secrets/delete',
    }),
    find: stripeMethod({
        method: 'GET',
        fullPath: '/v1/apps/secrets/find',
    }),
});
