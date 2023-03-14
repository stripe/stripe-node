// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Transactions = StripeResource.extend({
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
