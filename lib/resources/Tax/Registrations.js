// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registrations = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Registrations = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/registrations',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/registrations/{id}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/registrations',
        methodType: 'list',
    }),
});
