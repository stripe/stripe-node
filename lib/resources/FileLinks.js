// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileLinks = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.FileLinks = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/file_links',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/file_links/{link}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/file_links/{link}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/file_links',
        methodType: 'list',
    }),
});
