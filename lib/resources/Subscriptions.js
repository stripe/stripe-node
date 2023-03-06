// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriptions = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Subscriptions = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscriptions',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscriptions',
        methodType: 'list',
    }),
    cancel: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}',
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}',
    }),
    deleteDiscount: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/subscriptions/{subscription_exposed_id}/discount',
    }),
    resume: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscriptions/{subscription}/resume',
    }),
    search: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscriptions/search',
        methodType: 'search',
    }),
});
