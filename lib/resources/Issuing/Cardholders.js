// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cardholders = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Cardholders = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cardholders',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cardholders/{cardholder}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cardholders/{cardholder}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cardholders',
        methodType: 'list',
    }),
});
