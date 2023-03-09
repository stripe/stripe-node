// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cards = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Cards = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/gift_cards/cards',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/gift_cards/cards/{id}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/gift_cards/cards/{id}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/gift_cards/cards',
        methodType: 'list',
    }),
    validate: stripeMethod({
        method: 'POST',
        fullPath: '/v1/gift_cards/cards/validate',
    }),
});
