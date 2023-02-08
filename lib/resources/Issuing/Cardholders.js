// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cardholders',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cardholders/{cardholder}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/cardholders/{cardholder}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/cardholders',
        methodType: 'list',
    }),
});
