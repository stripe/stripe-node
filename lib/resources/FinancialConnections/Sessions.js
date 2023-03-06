// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sessions = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Sessions = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/financial_connections/sessions',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/financial_connections/sessions/{session}',
    }),
});
