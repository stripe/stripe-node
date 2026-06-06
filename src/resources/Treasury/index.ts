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
  export import CreditReversalListParams = TreasuryNamespace0.CreditReversalListParams;
  export import CreditReversalCreateParams = TreasuryNamespace0.CreditReversalCreateParams;
  export import CreditReversalRetrieveParams = TreasuryNamespace0.CreditReversalRetrieveParams;
  export {CreditReversal};
  export import DebitReversalListParams = TreasuryNamespace1.DebitReversalListParams;
  export import DebitReversalCreateParams = TreasuryNamespace1.DebitReversalCreateParams;
  export import DebitReversalRetrieveParams = TreasuryNamespace1.DebitReversalRetrieveParams;
  export {DebitReversal};
  export import FinancialAccountListParams = TreasuryNamespace2.FinancialAccountListParams;
  export import FinancialAccountCreateParams = TreasuryNamespace2.FinancialAccountCreateParams;
  export import FinancialAccountRetrieveParams = TreasuryNamespace2.FinancialAccountRetrieveParams;
  export import FinancialAccountUpdateParams = TreasuryNamespace2.FinancialAccountUpdateParams;
  export import FinancialAccountCloseParams = TreasuryNamespace2.FinancialAccountCloseParams;
  export import FinancialAccountUpdateFeaturesParams = TreasuryNamespace2.FinancialAccountUpdateFeaturesParams;
  export import FinancialAccountRetrieveFeaturesParams = TreasuryNamespace2.FinancialAccountRetrieveFeaturesParams;
  export {FinancialAccount};
  export import InboundTransferListParams = TreasuryNamespace3.InboundTransferListParams;
  export import InboundTransferCreateParams = TreasuryNamespace3.InboundTransferCreateParams;
  export import InboundTransferRetrieveParams = TreasuryNamespace3.InboundTransferRetrieveParams;
  export import InboundTransferCancelParams = TreasuryNamespace3.InboundTransferCancelParams;
  export {InboundTransfer};
  export import OutboundPaymentListParams = TreasuryNamespace4.OutboundPaymentListParams;
  export import OutboundPaymentCreateParams = TreasuryNamespace4.OutboundPaymentCreateParams;
  export import OutboundPaymentRetrieveParams = TreasuryNamespace4.OutboundPaymentRetrieveParams;
  export import OutboundPaymentCancelParams = TreasuryNamespace4.OutboundPaymentCancelParams;
  export {OutboundPayment};
  export import OutboundTransferListParams = TreasuryNamespace5.OutboundTransferListParams;
  export import OutboundTransferCreateParams = TreasuryNamespace5.OutboundTransferCreateParams;
  export import OutboundTransferRetrieveParams = TreasuryNamespace5.OutboundTransferRetrieveParams;
  export import OutboundTransferCancelParams = TreasuryNamespace5.OutboundTransferCancelParams;
  export {OutboundTransfer};
  export import ReceivedCreditListParams = TreasuryNamespace6.ReceivedCreditListParams;
  export import ReceivedCreditRetrieveParams = TreasuryNamespace6.ReceivedCreditRetrieveParams;
  export {ReceivedCredit};
  export import ReceivedDebitListParams = TreasuryNamespace7.ReceivedDebitListParams;
  export import ReceivedDebitRetrieveParams = TreasuryNamespace7.ReceivedDebitRetrieveParams;
  export {ReceivedDebit};
  export import TransactionListParams = TreasuryNamespace8.TransactionListParams;
  export import TransactionRetrieveParams = TreasuryNamespace8.TransactionRetrieveParams;
  export {Transaction};
  export import TransactionEntryListParams = TreasuryNamespace9.TransactionEntryListParams;
  export import TransactionEntryRetrieveParams = TreasuryNamespace9.TransactionEntryRetrieveParams;
  export {TransactionEntry};
  export {FinancialAccountFeatures};
}
