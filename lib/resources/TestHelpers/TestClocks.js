// File generated from our OpenAPI spec
'use strict';
const { stripeMethod, StripeResource } = require('../../StripeResource');
module.exports = StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/test_clocks',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/test_helpers/test_clocks/{test_clock}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/test_helpers/test_clocks',
        methodType: 'list',
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/test_helpers/test_clocks/{test_clock}',
    }),
    advance: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/test_clocks/{test_clock}/advance',
    }),
});
