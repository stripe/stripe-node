// File generated from our OpenAPI spec
'use strict';
const { stripeMethod, StripeResource } = require('../../StripeResource');
module.exports = StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cards',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cards/{card}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cards/{card}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cards',
        methodType: 'list',
    }),
});
