// File generated from our OpenAPI spec
'use strict';
const { StripeResource } = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/card_designs/{card_design}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/card_designs/{card_design}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/card_designs',
        methodType: 'list',
    }),
});
