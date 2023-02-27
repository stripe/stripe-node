// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionItems = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.SubscriptionItems = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_items',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscription_items/{item}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_items/{item}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscription_items',
        methodType: 'list',
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/subscription_items/{item}',
    }),
    createUsageRecord: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_items/{subscription_item}/usage_records',
    }),
    listUsageRecordSummaries: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscription_items/{subscription_item}/usage_record_summaries',
        methodType: 'list',
    }),
});
