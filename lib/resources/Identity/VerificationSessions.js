// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationSessions = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.VerificationSessions = StripeResource_1.StripeResource.extend({
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
