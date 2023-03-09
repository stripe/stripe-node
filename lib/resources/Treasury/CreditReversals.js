// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditReversals = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.CreditReversals = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/credit_reversals',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/credit_reversals/{credit_reversal}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/credit_reversals',
        methodType: 'list',
    }),
});
