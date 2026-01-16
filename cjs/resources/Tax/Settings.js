"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class SettingResource extends StripeResource_js_1.StripeResource {
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/tax/settings',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/tax/settings',
        }).call(this, ...args);
    }
}
exports.SettingResource = SettingResource;
//# sourceMappingURL=Settings.js.map