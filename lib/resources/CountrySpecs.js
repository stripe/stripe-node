// File generated from our OpenAPI spec
'use strict';
const { stripeMethod, StripeResource } = require('../StripeResource');
module.exports = StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/country_specs/{country}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/country_specs',
        methodType: 'list',
    }),
});
