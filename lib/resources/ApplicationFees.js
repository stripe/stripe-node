// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/application_fees/{id}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/application_fees',
        methodType: 'list',
    }),
    createRefund: stripeMethod({
        method: 'POST',
        fullPath: '/v1/application_fees/{id}/refunds',
    }),
    retrieveRefund: stripeMethod({
        method: 'GET',
        fullPath: '/v1/application_fees/{fee}/refunds/{id}',
    }),
    updateRefund: stripeMethod({
        method: 'POST',
        fullPath: '/v1/application_fees/{fee}/refunds/{id}',
    }),
    listRefunds: stripeMethod({
        method: 'GET',
        fullPath: '/v1/application_fees/{id}/refunds',
        methodType: 'list',
    }),
});
