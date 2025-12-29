import { Stripe } from '../../stripe.core.js';
import { CreditReversal, CreditReversalResource } from './CreditReversals.js';
import { DebitReversal, DebitReversalResource } from './DebitReversals.js';
import { FinancialAccount, FinancialAccountResource } from './FinancialAccounts.js';
import { InboundTransfer, InboundTransferResource } from './InboundTransfers.js';
import { OutboundPayment, OutboundPaymentResource } from './OutboundPayments.js';
import { OutboundTransfer, OutboundTransferResource } from './OutboundTransfers.js';
import { ReceivedCredit, ReceivedCreditResource } from './ReceivedCredits.js';
import { ReceivedDebit, ReceivedDebitResource } from './ReceivedDebits.js';
import { Transaction, TransactionResource } from './Transactions.js';
import { TransactionEntry, TransactionEntryResource } from './TransactionEntries.js';
import { FinancialAccountFeatures } from './FinancialAccountFeatures.js';
export { CreditReversal } from './CreditReversals.js';
export { DebitReversal } from './DebitReversals.js';
export { FinancialAccount } from './FinancialAccounts.js';
export { InboundTransfer } from './InboundTransfers.js';
export { OutboundPayment } from './OutboundPayments.js';
export { OutboundTransfer } from './OutboundTransfers.js';
export { ReceivedCredit } from './ReceivedCredits.js';
export { ReceivedDebit } from './ReceivedDebits.js';
export { Transaction } from './Transactions.js';
export { TransactionEntry } from './TransactionEntries.js';
export declare class Treasury {
    private readonly stripe;
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
    constructor(stripe: Stripe);
}
export declare namespace Treasury {
    export { CreditReversal };
    export { DebitReversal };
    export { FinancialAccount };
    export { InboundTransfer };
    export { OutboundPayment };
    export { OutboundTransfer };
    export { ReceivedCredit };
    export { ReceivedDebit };
    export { Transaction };
    export { TransactionEntry };
    export { FinancialAccountFeatures };
}
