// File generated from our OpenAPI spec
'use strict';
const { stripeMethod, StripeResource } = require('../StripeResource');
module.exports = StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/sources',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/sources/{source}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/sources/{source}',
    }),
    listSourceTransactions: stripeMethod({
        method: 'GET',
        fullPath: '/v1/sources/{source}/source_transactions',
        methodType: 'list',
    }),
    verify: stripeMethod({
        method: 'POST',
        fullPath: '/v1/sources/{source}/verify',
    }),
});
