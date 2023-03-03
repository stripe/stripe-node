// File generated from our OpenAPI spec
'use strict';
const { StripeResource } = require('../../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
    fail: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail',
    }),
    post: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post',
    }),
    returnOutboundTransfer: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return',
    }),
});
