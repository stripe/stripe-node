// File generated from our OpenAPI spec
'use strict';
const { StripeResource } = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing_portal/configurations',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing_portal/configurations/{configuration}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/billing_portal/configurations/{configuration}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/billing_portal/configurations',
        methodType: 'list',
    }),
});
