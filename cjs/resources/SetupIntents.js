"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupIntentResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class SetupIntentResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/setup_intents',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/setup_intents',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/setup_intents/{intent}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/setup_intents/{intent}',
        }).call(this, ...args);
    }
    cancel(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/setup_intents/{intent}/cancel',
        }).call(this, ...args);
    }
    confirm(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/setup_intents/{intent}/confirm',
        }).call(this, ...args);
    }
    verifyMicrodeposits(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/setup_intents/{intent}/verify_microdeposits',
        }).call(this, ...args);
    }
}
exports.SetupIntentResource = SetupIntentResource;
//# sourceMappingURL=SetupIntents.js.map