// File generated from our OpenAPI spec
import { InboundTransferResource } from './InboundTransfers.js';
import { OutboundPaymentResource } from './OutboundPayments.js';
import { OutboundTransferResource } from './OutboundTransfers.js';
import { ReceivedCreditResource } from './ReceivedCredits.js';
import { ReceivedDebitResource } from './ReceivedDebits.js';
export class Treasury {
    constructor(stripe) {
        this.stripe = stripe;
        this.inboundTransfers = new InboundTransferResource(stripe);
        this.outboundPayments = new OutboundPaymentResource(stripe);
        this.outboundTransfers = new OutboundTransferResource(stripe);
        this.receivedCredits = new ReceivedCreditResource(stripe);
        this.receivedDebits = new ReceivedDebitResource(stripe);
    }
}
//# sourceMappingURL=index.js.map