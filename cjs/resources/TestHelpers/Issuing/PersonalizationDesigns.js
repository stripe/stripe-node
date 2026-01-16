"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalizationDesignResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class PersonalizationDesignResource extends StripeResource_js_1.StripeResource {
    activate(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate',
        }).call(this, ...args);
    }
    deactivate(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate',
        }).call(this, ...args);
    }
    reject(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject',
        }).call(this, ...args);
    }
}
exports.PersonalizationDesignResource = PersonalizationDesignResource;
//# sourceMappingURL=PersonalizationDesigns.js.map