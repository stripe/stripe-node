// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cards = void 0;
const StripeResource_1 = require("../../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Cards = StripeResource_1.StripeResource.extend({
    deliverCard: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/deliver',
    }),
    failCard: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/fail',
    }),
    returnCard: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/return',
    }),
    shipCard: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/ship',
    }),
});
