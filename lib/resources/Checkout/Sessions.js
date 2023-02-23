// File generated from our OpenAPI spec
'use strict';
const { StripeResource } = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/checkout/sessions',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/checkout/sessions/{session}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/checkout/sessions',
        methodType: 'list',
    }),
    expire: stripeMethod({
        method: 'POST',
        fullPath: '/v1/checkout/sessions/{session}/expire',
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/checkout/sessions/{session}/line_items',
        methodType: 'list',
    }),
});
