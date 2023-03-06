// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarlyFraudWarnings = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.EarlyFraudWarnings = StripeResource_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/radar/early_fraud_warnings/{early_fraud_warning}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/radar/early_fraud_warnings',
        methodType: 'list',
    }),
});
