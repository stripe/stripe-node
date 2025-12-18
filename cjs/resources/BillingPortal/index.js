"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingPortal = void 0;
const Configurations_js_1 = require("./Configurations.js");
const Sessions_js_1 = require("./Sessions.js");
class BillingPortal {
    constructor(stripe) {
        this.stripe = stripe;
        this.configurations = new Configurations_js_1.ConfigurationResource(stripe);
        this.sessions = new Sessions_js_1.SessionResource(stripe);
    }
}
exports.BillingPortal = BillingPortal;
