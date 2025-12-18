"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Forwarding = void 0;
const Requests_js_1 = require("./Requests.js");
class Forwarding {
    constructor(stripe) {
        this.stripe = stripe;
        this.requests = new Requests_js_1.RequestResource(stripe);
    }
}
exports.Forwarding = Forwarding;
