// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplePayDomains = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.ApplePayDomains = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/apple_pay/domains',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/apple_pay/domains/{domain}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/apple_pay/domains',
        methodType: 'list',
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/apple_pay/domains/{domain}',
    }),
});
