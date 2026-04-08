// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  TestHelpers as TestHelpersNamespace0,
  InboundTransferResource,
} from './InboundTransfers.js';
import {
  TestHelpers as TestHelpersNamespace1,
  OutboundPaymentResource,
} from './OutboundPayments.js';
import {
  TestHelpers as TestHelpersNamespace2,
  OutboundTransferResource,
} from './OutboundTransfers.js';
import {
  TestHelpers as TestHelpersNamespace3,
  ReceivedCreditResource,
} from './ReceivedCredits.js';
import {
  TestHelpers as TestHelpersNamespace4,
  ReceivedDebitResource,
} from './ReceivedDebits.js';

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

export declare namespace Treasury {}
