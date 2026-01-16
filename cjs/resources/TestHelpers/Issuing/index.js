"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Issuing = void 0;
const Authorizations_js_1 = require("./Authorizations.js");
const Cards_js_1 = require("./Cards.js");
const PersonalizationDesigns_js_1 = require("./PersonalizationDesigns.js");
const Transactions_js_1 = require("./Transactions.js");
class Issuing {
    constructor(stripe) {
        this.stripe = stripe;
        this.authorizations = new Authorizations_js_1.AuthorizationResource(stripe);
        this.cards = new Cards_js_1.CardResource(stripe);
        this.personalizationDesigns = new PersonalizationDesigns_js_1.PersonalizationDesignResource(stripe);
        this.transactions = new Transactions_js_1.TransactionResource(stripe);
    }
}
exports.Issuing = Issuing;
//# sourceMappingURL=index.js.map