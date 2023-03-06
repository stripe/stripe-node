// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cards = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Cards = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cards',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cards/{card}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cards/{card}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cards',
        methodType: 'list',
    }),
});
