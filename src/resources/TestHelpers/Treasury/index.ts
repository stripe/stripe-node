// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {InboundTransferResource} from './InboundTransfers.js';
import {OutboundPaymentResource} from './OutboundPayments.js';
import {OutboundTransferResource} from './OutboundTransfers.js';
import {ReceivedCreditResource} from './ReceivedCredits.js';
import {ReceivedDebitResource} from './ReceivedDebits.js';

export class Treasury {
  inboundTransfers: InboundTransferResource;
  outboundPayments: OutboundPaymentResource;
  outboundTransfers: OutboundTransferResource;
  receivedCredits: ReceivedCreditResource;
  receivedDebits: ReceivedDebitResource;

  constructor(private readonly stripe: Stripe) {
    this.inboundTransfers = new InboundTransferResource(stripe);
    this.outboundPayments = new OutboundPaymentResource(stripe);
    this.outboundTransfers = new OutboundTransferResource(stripe);
    this.receivedCredits = new ReceivedCreditResource(stripe);
    this.receivedDebits = new ReceivedDebitResource(stripe);
  }
}
