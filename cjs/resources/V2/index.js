"use strict";
// eslint-disable-next-line no-warning-comments
// TODO(prathmesh): Generate this with codegen
Object.defineProperty(exports, "__esModule", { value: true });
exports.V2 = void 0;
const index_js_1 = require("./Billing/index.js");
const index_js_2 = require("./Core/index.js");
class V2 {
    constructor(stripe) {
        this.stripe = stripe;
        this.billing = new index_js_1.Billing(stripe);
        this.core = new index_js_2.Core(stripe);
    }
}
exports.V2 = V2;
//# sourceMappingURL=index.js.map