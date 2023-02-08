// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_schedules',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscription_schedules/{schedule}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_schedules/{schedule}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/subscription_schedules',
        methodType: 'list',
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_schedules/{schedule}/cancel',
    }),
    release: stripeMethod({
        method: 'POST',
        fullPath: '/v1/subscription_schedules/{schedule}/release',
    }),
});
