// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {CreditReversalResource} from './CreditReversals.js';
import {DebitReversalResource} from './DebitReversals.js';
import {FinancialAccountResource} from './FinancialAccounts.js';
import {InboundTransferResource} from './InboundTransfers.js';
import {OutboundPaymentResource} from './OutboundPayments.js';
import {OutboundTransferResource} from './OutboundTransfers.js';
import {ReceivedCreditResource} from './ReceivedCredits.js';
import {ReceivedDebitResource} from './ReceivedDebits.js';
import {TransactionResource} from './Transactions.js';
import {TransactionEntryResource} from './TransactionEntries.js';

export {CreditReversal} from './CreditReversals.js';
export {DebitReversal} from './DebitReversals.js';
export {FinancialAccount} from './FinancialAccounts.js';
export {InboundTransfer} from './InboundTransfers.js';
export {OutboundPayment} from './OutboundPayments.js';
export {OutboundTransfer} from './OutboundTransfers.js';
export {ReceivedCredit} from './ReceivedCredits.js';
export {ReceivedDebit} from './ReceivedDebits.js';
export {Transaction} from './Transactions.js';
export {TransactionEntry} from './TransactionEntries.js';

export class Treasury {
  creditReversals: CreditReversalResource;
  debitReversals: DebitReversalResource;
  financialAccounts: FinancialAccountResource;
  inboundTransfers: InboundTransferResource;
  outboundPayments: OutboundPaymentResource;
  outboundTransfers: OutboundTransferResource;
  receivedCredits: ReceivedCreditResource;
  receivedDebits: ReceivedDebitResource;
  transactions: TransactionResource;
  transactionEntries: TransactionEntryResource;

  constructor(private readonly stripe: Stripe) {
    this.creditReversals = new CreditReversalResource(stripe);
    this.debitReversals = new DebitReversalResource(stripe);
    this.financialAccounts = new FinancialAccountResource(stripe);
    this.inboundTransfers = new InboundTransferResource(stripe);
    this.outboundPayments = new OutboundPaymentResource(stripe);
    this.outboundTransfers = new OutboundTransferResource(stripe);
    this.receivedCredits = new ReceivedCreditResource(stripe);
    this.receivedDebits = new ReceivedDebitResource(stripe);
    this.transactions = new TransactionResource(stripe);
    this.transactionEntries = new TransactionEntryResource(stripe);
  }
}
