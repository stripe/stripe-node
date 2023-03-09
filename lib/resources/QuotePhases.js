// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotePhases = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.QuotePhases = StripeResource_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/quote_phases/{quote_phase}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/quote_phases',
        methodType: 'list',
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/quote_phases/{quote_phase}/line_items',
        methodType: 'list',
    }),
});
