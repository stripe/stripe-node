// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/identity/verification_sessions',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/identity/verification_sessions/{session}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/identity/verification_sessions/{session}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/identity/verification_sessions',
        methodType: 'list',
    }),
    cancel: stripeMethod({
        method: 'POST',
        fullPath: '/v1/identity/verification_sessions/{session}/cancel',
    }),
    redact: stripeMethod({
        method: 'POST',
        fullPath: '/v1/identity/verification_sessions/{session}/redact',
    }),
});
