"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
const Accounts_js_1 = require("./Accounts.js");
const AccountLinks_js_1 = require("./AccountLinks.js");
const AccountTokens_js_1 = require("./AccountTokens.js");
const Events_js_1 = require("./Events.js");
const EventDestinations_js_1 = require("./EventDestinations.js");
class Core {
    constructor(stripe) {
        this.stripe = stripe;
        this.accounts = new Accounts_js_1.AccountResource(stripe);
        this.accountLinks = new AccountLinks_js_1.AccountLinkResource(stripe);
        this.accountTokens = new AccountTokens_js_1.AccountTokenResource(stripe);
        this.events = new Events_js_1.EventResource(stripe);
        this.eventDestinations = new EventDestinations_js_1.EventDestinationResource(stripe);
    }
}
exports.Core = Core;
//# sourceMappingURL=index.js.map