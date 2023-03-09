// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardBundles = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.CardBundles = StripeResource_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/card_bundles/{card_bundle}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/card_bundles',
        methodType: 'list',
    }),
});
