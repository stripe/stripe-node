// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configurations = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Configurations = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing_portal/configurations',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing_portal/configurations/{configuration}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing_portal/configurations/{configuration}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing_portal/configurations',
        methodType: 'list',
    }),
});
