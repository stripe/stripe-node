// File generated from our OpenAPI spec
'use strict';
const { stripeMethod, StripeResource } = require('../../StripeResource');
module.exports = StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/terminal/connection_tokens',
    }),
});
