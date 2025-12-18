"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkout = void 0;
const Sessions_js_1 = require("./Sessions.js");
class Checkout {
    constructor(stripe) {
        this.stripe = stripe;
        this.sessions = new Sessions_js_1.SessionResource(stripe);
    }
}
exports.Checkout = Checkout;
