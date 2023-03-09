// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculations = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Calculations = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/calculations',
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/calculations/{calculation}/line_items',
        methodType: 'list',
    }),
});
