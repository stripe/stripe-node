"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radar = void 0;
const EarlyFraudWarnings_js_1 = require("./EarlyFraudWarnings.js");
const ValueLists_js_1 = require("./ValueLists.js");
const ValueListItems_js_1 = require("./ValueListItems.js");
class Radar {
    constructor(stripe) {
        this.stripe = stripe;
        this.earlyFraudWarnings = new EarlyFraudWarnings_js_1.EarlyFraudWarningResource(stripe);
        this.valueLists = new ValueLists_js_1.ValueListResource(stripe);
        this.valueListItems = new ValueListItems_js_1.ValueListItemResource(stripe);
    }
}
exports.Radar = Radar;
