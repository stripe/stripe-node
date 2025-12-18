"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax = void 0;
const Calculations_js_1 = require("./Calculations.js");
const Registrations_js_1 = require("./Registrations.js");
const Settings_js_1 = require("./Settings.js");
const Transactions_js_1 = require("./Transactions.js");
class Tax {
    constructor(stripe) {
        this.stripe = stripe;
        this.calculations = new Calculations_js_1.CalculationResource(stripe);
        this.registrations = new Registrations_js_1.RegistrationResource(stripe);
        this.settings = new Settings_js_1.SettingResource(stripe);
        this.transactions = new Transactions_js_1.TransactionResource(stripe);
    }
}
exports.Tax = Tax;
