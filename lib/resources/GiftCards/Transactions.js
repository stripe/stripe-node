// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Transactions = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/gift_cards/transactions',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/gift_cards/transactions/{id}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/gift_cards/transactions/{id}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/gift_cards/transactions',
        methodType: 'list',
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/gift_cards/transactions/{id}/cancel',
    }),
    confirm: stripeMethod({
        method: 'POST',
        fullPath: '/v1/gift_cards/transactions/{id}/confirm',
    }),
});
