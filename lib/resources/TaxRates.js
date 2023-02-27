// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxRates = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.TaxRates = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax_rates',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_rates/{tax_rate}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax_rates/{tax_rate}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_rates',
        methodType: 'list',
    }),
});
