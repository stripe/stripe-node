// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/capital/financing_transactions/{financing_transaction}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/capital/financing_transactions',
        methodType: 'list',
    }),
});
