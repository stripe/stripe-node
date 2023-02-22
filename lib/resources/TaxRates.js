// File generated from our OpenAPI spec
'use strict';
const { stripeMethod, StripeResource } = require('../StripeResource');
module.exports = StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax_rates',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_rates/{tax_rate}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax_rates/{tax_rate}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax_rates',
        methodType: 'list',
    }),
});
