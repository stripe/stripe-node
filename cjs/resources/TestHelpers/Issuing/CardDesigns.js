"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardDesigns = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.CardDesigns = StripeResource_js_1.StripeResource.extend({
    activateTestmode: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/card_designs/{card_design}/status/activate',
    }),
    deactivateTestmode: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/issuing/card_designs/{card_design}/status/deactivate',
    }),
});
