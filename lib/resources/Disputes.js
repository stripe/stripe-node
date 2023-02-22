// File generated from our OpenAPI spec
'use strict';
const { stripeMethod, StripeResource } = require('../StripeResource');
module.exports = StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/disputes/{dispute}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/disputes/{dispute}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/disputes',
        methodType: 'list',
    }),
    close: stripeMethod({
        method: 'POST',
        fullPath: '/v1/disputes/{dispute}/close',
    }),
});
