// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountrySpecs = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.CountrySpecs = StripeResource_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/country_specs/{country}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/country_specs',
        methodType: 'list',
    }),
});
