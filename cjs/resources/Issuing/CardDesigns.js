"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardDesigns = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.CardDesigns = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/card_designs/{card_design}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/card_designs/{card_design}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/card_designs',
        methodType: 'list',
    }),
});
