"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonTokenResource = void 0;
const StripeResource_js_1 = require("../../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class PersonTokenResource extends StripeResource_js_1.StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/accounts/{account_id}/person_tokens',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/accounts/{account_id}/person_tokens/{id}',
        }).call(this, ...args);
    }
}
exports.PersonTokenResource = PersonTokenResource;
//# sourceMappingURL=PersonTokens.js.map