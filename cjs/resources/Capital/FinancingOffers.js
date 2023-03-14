"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancingOffers = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.FinancingOffers = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/capital/financing_offers/{financing_offer}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/capital/financing_offers',
        methodType: 'list',
    }),
    markDelivered: stripeMethod({
        method: 'POST',
        fullPath: '/v1/capital/financing_offers/{financing_offer}/mark_delivered',
    }),
});
