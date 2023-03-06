// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionCodes = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.PromotionCodes = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/promotion_codes',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/promotion_codes/{promotion_code}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/promotion_codes/{promotion_code}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/promotion_codes',
        methodType: 'list',
    }),
});
