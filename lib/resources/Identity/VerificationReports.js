// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationReports = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.VerificationReports = StripeResource_1.StripeResource.extend({
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
