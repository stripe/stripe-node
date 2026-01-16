"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class CardResource extends StripeResource_js_1.StripeResource {
    deliverCard(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/deliver',
        }).call(this, ...args);
    }
    failCard(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/fail',
        }).call(this, ...args);
    }
    returnCard(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/return',
        }).call(this, ...args);
    }
    shipCard(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/ship',
        }).call(this, ...args);
    }
    submitCard(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/submit',
        }).call(this, ...args);
    }
}
exports.CardResource = CardResource;
//# sourceMappingURL=Cards.js.map