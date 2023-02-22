// File generated from our OpenAPI spec
'use strict';
const { stripeMethod, StripeResource } = require('../../StripeResource');
module.exports = StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/identity/verification_reports/{report}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/identity/verification_reports',
        methodType: 'list',
    }),
});
