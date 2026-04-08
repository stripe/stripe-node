// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Treasury as TreasuryNamespace0,
  CreditReversal,
  CreditReversalResource,
} from './CreditReversals.js';
import {
  Treasury as TreasuryNamespace1,
  DebitReversal,
  DebitReversalResource,
} from './DebitReversals.js';
import {
  Treasury as TreasuryNamespace2,
  FinancialAccount,
  FinancialAccountResource,
} from './FinancialAccounts.js';
import {
  Treasury as TreasuryNamespace3,
  InboundTransfer,
  InboundTransferResource,
} from './InboundTransfers.js';
import {
  Treasury as TreasuryNamespace4,
  OutboundPayment,
  OutboundPaymentResource,
} from './OutboundPayments.js';
import {
  Treasury as TreasuryNamespace5,
  OutboundTransfer,
  OutboundTransferResource,
} from './OutboundTransfers.js';
import {
  Treasury as TreasuryNamespace6,
  ReceivedCredit,
  ReceivedCreditResource,
} from './ReceivedCredits.js';
import {
  Treasury as TreasuryNamespace7,
  ReceivedDebit,
  ReceivedDebitResource,
} from './ReceivedDebits.js';
import {
  Treasury as TreasuryNamespace8,
  Transaction,
  TransactionResource,
} from './Transactions.js';
import {
  Treasury as TreasuryNamespace9,
  TransactionEntry,
  TransactionEntryResource,
} from './TransactionEntries.js';
import {FinancialAccountFeatures} from './FinancialAccountFeatures.js';

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
export {FinancialAccountFeatures} from './FinancialAccountFeatures.js';

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

export declare namespace Treasury {
  export type CreditReversalListParams = TreasuryNamespace0.CreditReversalListParams;
  export type CreditReversalCreateParams = TreasuryNamespace0.CreditReversalCreateParams;
  export type CreditReversalRetrieveParams = TreasuryNamespace0.CreditReversalRetrieveParams;
  export {CreditReversal};
  export type DebitReversalListParams = TreasuryNamespace1.DebitReversalListParams;
  export type DebitReversalCreateParams = TreasuryNamespace1.DebitReversalCreateParams;
  export type DebitReversalRetrieveParams = TreasuryNamespace1.DebitReversalRetrieveParams;
  export {DebitReversal};
  export type FinancialAccountListParams = TreasuryNamespace2.FinancialAccountListParams;
  export type FinancialAccountCreateParams = TreasuryNamespace2.FinancialAccountCreateParams;
  export type FinancialAccountRetrieveParams = TreasuryNamespace2.FinancialAccountRetrieveParams;
  export type FinancialAccountUpdateParams = TreasuryNamespace2.FinancialAccountUpdateParams;
  export type FinancialAccountCloseParams = TreasuryNamespace2.FinancialAccountCloseParams;
  export type FinancialAccountUpdateFeaturesParams = TreasuryNamespace2.FinancialAccountUpdateFeaturesParams;
  export type FinancialAccountRetrieveFeaturesParams = TreasuryNamespace2.FinancialAccountRetrieveFeaturesParams;
  export {FinancialAccount};
  export type InboundTransferListParams = TreasuryNamespace3.InboundTransferListParams;
  export type InboundTransferCreateParams = TreasuryNamespace3.InboundTransferCreateParams;
  export type InboundTransferRetrieveParams = TreasuryNamespace3.InboundTransferRetrieveParams;
  export type InboundTransferCancelParams = TreasuryNamespace3.InboundTransferCancelParams;
  export {InboundTransfer};
  export type OutboundPaymentListParams = TreasuryNamespace4.OutboundPaymentListParams;
  export type OutboundPaymentCreateParams = TreasuryNamespace4.OutboundPaymentCreateParams;
  export type OutboundPaymentRetrieveParams = TreasuryNamespace4.OutboundPaymentRetrieveParams;
  export type OutboundPaymentCancelParams = TreasuryNamespace4.OutboundPaymentCancelParams;
  export {OutboundPayment};
  export type OutboundTransferListParams = TreasuryNamespace5.OutboundTransferListParams;
  export type OutboundTransferCreateParams = TreasuryNamespace5.OutboundTransferCreateParams;
  export type OutboundTransferRetrieveParams = TreasuryNamespace5.OutboundTransferRetrieveParams;
  export type OutboundTransferCancelParams = TreasuryNamespace5.OutboundTransferCancelParams;
  export {OutboundTransfer};
  export type ReceivedCreditListParams = TreasuryNamespace6.ReceivedCreditListParams;
  export type ReceivedCreditRetrieveParams = TreasuryNamespace6.ReceivedCreditRetrieveParams;
  export {ReceivedCredit};
  export type ReceivedDebitListParams = TreasuryNamespace7.ReceivedDebitListParams;
  export type ReceivedDebitRetrieveParams = TreasuryNamespace7.ReceivedDebitRetrieveParams;
  export {ReceivedDebit};
  export type TransactionListParams = TreasuryNamespace8.TransactionListParams;
  export type TransactionRetrieveParams = TreasuryNamespace8.TransactionRetrieveParams;
  export {Transaction};
  export type TransactionEntryListParams = TreasuryNamespace9.TransactionEntryListParams;
  export type TransactionEntryRetrieveParams = TreasuryNamespace9.TransactionEntryRetrieveParams;
  export {TransactionEntry};
  export {FinancialAccountFeatures};
}
