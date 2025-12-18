"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identity = void 0;
const VerificationReports_js_1 = require("./VerificationReports.js");
const VerificationSessions_js_1 = require("./VerificationSessions.js");
class Identity {
    constructor(stripe) {
        this.stripe = stripe;
        this.verificationReports = new VerificationReports_js_1.VerificationReportResource(stripe);
        this.verificationSessions = new VerificationSessions_js_1.VerificationSessionResource(stripe);
    }
}
exports.Identity = Identity;
