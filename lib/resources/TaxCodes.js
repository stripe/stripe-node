// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxCodes = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.TaxCodes = StripeResource_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_codes/{id}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_codes',
        methodType: 'list',
    }),
});
