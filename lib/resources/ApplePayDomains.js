// File generated from our OpenAPI spec
'use strict';
const { StripeResource } = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/apple_pay/domains',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/apple_pay/domains/{domain}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/apple_pay/domains',
        methodType: 'list',
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/apple_pay/domains/{domain}',
    }),
});
