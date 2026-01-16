// File generated from our OpenAPI spec
import { CreditReversalResource } from './CreditReversals.js';
import { DebitReversalResource } from './DebitReversals.js';
import { FinancialAccountResource, } from './FinancialAccounts.js';
import { InboundTransferResource } from './InboundTransfers.js';
import { OutboundPaymentResource } from './OutboundPayments.js';
import { OutboundTransferResource, } from './OutboundTransfers.js';
import { ReceivedCreditResource } from './ReceivedCredits.js';
import { ReceivedDebitResource } from './ReceivedDebits.js';
import { TransactionResource } from './Transactions.js';
import { TransactionEntryResource, } from './TransactionEntries.js';
export class Treasury {
    constructor(stripe) {
        this.stripe = stripe;
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
//# sourceMappingURL=index.js.map