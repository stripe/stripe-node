// File generated from our OpenAPI spec
'use strict';
const { stripeMethod, StripeResource } = require('../../StripeResource');
module.exports = StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/outbound_transfers',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/outbound_transfers/{outbound_transfer}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/treasury/outbound_transfers',
        methodType: 'list',
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/treasury/outbound_transfers/{outbound_transfer}/cancel',
    }),
});
