"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reporting = void 0;
const ReportRuns_js_1 = require("./ReportRuns.js");
const ReportTypes_js_1 = require("./ReportTypes.js");
class Reporting {
    constructor(stripe) {
        this.stripe = stripe;
        this.reportRuns = new ReportRuns_js_1.ReportRunResource(stripe);
        this.reportTypes = new ReportTypes_js_1.ReportTypeResource(stripe);
    }
}
exports.Reporting = Reporting;
