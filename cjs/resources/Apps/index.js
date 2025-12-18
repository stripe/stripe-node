"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apps = void 0;
const Secrets_js_1 = require("./Secrets.js");
class Apps {
    constructor(stripe) {
        this.stripe = stripe;
        this.secrets = new Secrets_js_1.SecretResource(stripe);
    }
}
exports.Apps = Apps;
