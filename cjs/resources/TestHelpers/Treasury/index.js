"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Treasury = void 0;
const InboundTransfers_js_1 = require("./InboundTransfers.js");
const OutboundPayments_js_1 = require("./OutboundPayments.js");
const OutboundTransfers_js_1 = require("./OutboundTransfers.js");
const ReceivedCredits_js_1 = require("./ReceivedCredits.js");
const ReceivedDebits_js_1 = require("./ReceivedDebits.js");
class Treasury {
    constructor(stripe) {
        this.stripe = stripe;
        this.inboundTransfers = new InboundTransfers_js_1.InboundTransferResource(stripe);
        this.outboundPayments = new OutboundPayments_js_1.OutboundPaymentResource(stripe);
        this.outboundTransfers = new OutboundTransfers_js_1.OutboundTransferResource(stripe);
        this.receivedCredits = new ReceivedCredits_js_1.ReceivedCreditResource(stripe);
        this.receivedDebits = new ReceivedDebits_js_1.ReceivedDebitResource(stripe);
    }
}
exports.Treasury = Treasury;
//# sourceMappingURL=index.js.map