import { Stripe } from '../../../stripe.core.js';
import { InboundTransferResource } from './InboundTransfers.js';
import { OutboundPaymentResource } from './OutboundPayments.js';
import { OutboundTransferResource } from './OutboundTransfers.js';
import { ReceivedCreditResource } from './ReceivedCredits.js';
import { ReceivedDebitResource } from './ReceivedDebits.js';
export declare class Treasury {
    private readonly stripe;
    inboundTransfers: InboundTransferResource;
    outboundPayments: OutboundPaymentResource;
    outboundTransfers: OutboundTransferResource;
    receivedCredits: ReceivedCreditResource;
    receivedDebits: ReceivedDebitResource;
    constructor(stripe: Stripe);
}
export declare namespace Treasury { }
