"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountTokenResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class AccountTokenResource extends StripeResource_js_1.StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/account_tokens',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/account_tokens/{id}',
        }).call(this, ...args);
    }
}
exports.AccountTokenResource = AccountTokenResource;
//# sourceMappingURL=AccountTokens.js.map