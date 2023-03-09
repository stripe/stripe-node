// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refunds = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Refunds = StripeResource_1.StripeResource.extend({
    expire: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/refunds/{refund}/expire',
    }),
});
