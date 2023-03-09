// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceivedDebits = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.ReceivedDebits = StripeResource_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/received_debits/{id}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/received_debits',
        methodType: 'list',
    }),
});
