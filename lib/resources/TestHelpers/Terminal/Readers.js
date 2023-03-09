// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Readers = void 0;
const StripeResource_1 = require("../../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Readers = StripeResource_1.StripeResource.extend({
    presentPaymentMethod: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/terminal/readers/{reader}/present_payment_method',
    }),
});
