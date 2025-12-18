"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sigma = void 0;
const ScheduledQueryRuns_js_1 = require("./ScheduledQueryRuns.js");
class Sigma {
    constructor(stripe) {
        this.stripe = stripe;
        this.scheduledQueryRuns = new ScheduledQueryRuns_js_1.ScheduledQueryRunResource(stripe);
    }
}
exports.Sigma = Sigma;
