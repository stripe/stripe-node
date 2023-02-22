// File generated from our OpenAPI spec
'use strict';
const { stripeMethod, StripeResource } = require('../../StripeResource');
module.exports = StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/apps/secrets',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/apps/secrets',
        methodType: 'list',
    }),
    deleteWhere: stripeMethod({
        method: 'POST',
        fullPath: '/v1/apps/secrets/delete',
    }),
    find: stripeMethod({
        method: 'GET',
        fullPath: '/v1/apps/secrets/find',
    }),
});
