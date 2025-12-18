"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entitlements = void 0;
const ActiveEntitlements_js_1 = require("./ActiveEntitlements.js");
const Features_js_1 = require("./Features.js");
class Entitlements {
    constructor(stripe) {
        this.stripe = stripe;
        this.activeEntitlements = new ActiveEntitlements_js_1.ActiveEntitlementResource(stripe);
        this.features = new Features_js_1.FeatureResource(stripe);
    }
}
exports.Entitlements = Entitlements;
