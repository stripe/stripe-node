// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  Adjustment,
  AdjustmentResource,
} from './Adjustments.js';
import {
  V2 as V2Namespace1,
  CurrencyConversion,
  CurrencyConversionResource,
} from './CurrencyConversions.js';
import {
  V2 as V2Namespace2,
  DebitDispute,
  DebitDisputeResource,
} from './DebitDisputes.js';
import {
  V2 as V2Namespace3,
  FinancialAccount,
  FinancialAccountResource,
} from './FinancialAccounts.js';
import {
  V2 as V2Namespace4,
  FinancialAddress,
  FinancialAddressResource,
} from './FinancialAddresses.js';
import {
  V2 as V2Namespace5,
  InboundTransfer,
  InboundTransferResource,
} from './InboundTransfers.js';
import {
  V2 as V2Namespace6,
  OutboundPayment,
  OutboundPaymentResource,
} from './OutboundPayments.js';
import {
  V2 as V2Namespace7,
  OutboundPaymentQuote,
  OutboundPaymentQuoteResource,
} from './OutboundPaymentQuotes.js';
import {
  V2 as V2Namespace8,
  OutboundSetupIntent,
  OutboundSetupIntentResource,
} from './OutboundSetupIntents.js';
import {
  V2 as V2Namespace9,
  OutboundTransfer,
  OutboundTransferResource,
} from './OutboundTransfers.js';
import {
  V2 as V2Namespace10,
  PayoutMethod,
  PayoutMethodResource,
} from './PayoutMethods.js';
import {
  V2 as V2Namespace11,
  PayoutMethodsBankAccountSpec,
  PayoutMethodsBankAccountSpecResource,
} from './PayoutMethodsBankAccountSpec.js';
import {
  V2 as V2Namespace12,
  ReceivedCredit,
  ReceivedCreditResource,
} from './ReceivedCredits.js';
import {
  V2 as V2Namespace13,
  ReceivedDebit,
  ReceivedDebitResource,
} from './ReceivedDebits.js';
import {
  V2 as V2Namespace14,
  RecipientVerification,
  RecipientVerificationResource,
} from './RecipientVerifications.js';
import {
  V2 as V2Namespace15,
  Transaction,
  TransactionResource,
} from './Transactions.js';
import {
  V2 as V2Namespace16,
  TransactionEntry,
  TransactionEntryResource,
} from './TransactionEntries.js';
import {FinancialAccountStatement} from './FinancialAccountStatements.js';

export {Adjustment} from './Adjustments.js';
export {CurrencyConversion} from './CurrencyConversions.js';
export {DebitDispute} from './DebitDisputes.js';
export {FinancialAccount} from './FinancialAccounts.js';
export {FinancialAddress} from './FinancialAddresses.js';
export {InboundTransfer} from './InboundTransfers.js';
export {OutboundPayment} from './OutboundPayments.js';
export {OutboundPaymentQuote} from './OutboundPaymentQuotes.js';
export {OutboundSetupIntent} from './OutboundSetupIntents.js';
export {OutboundTransfer} from './OutboundTransfers.js';
export {PayoutMethod} from './PayoutMethods.js';
export {PayoutMethodsBankAccountSpec} from './PayoutMethodsBankAccountSpec.js';
export {ReceivedCredit} from './ReceivedCredits.js';
export {ReceivedDebit} from './ReceivedDebits.js';
export {RecipientVerification} from './RecipientVerifications.js';
export {Transaction} from './Transactions.js';
export {TransactionEntry} from './TransactionEntries.js';
export {FinancialAccountStatement} from './FinancialAccountStatements.js';

export class MoneyManagement {
  adjustments: AdjustmentResource;
  currencyConversions: CurrencyConversionResource;
  debitDisputes: DebitDisputeResource;
  financialAccounts: FinancialAccountResource;
  financialAddresses: FinancialAddressResource;
  inboundTransfers: InboundTransferResource;
  outboundPayments: OutboundPaymentResource;
  outboundPaymentQuotes: OutboundPaymentQuoteResource;
  outboundSetupIntents: OutboundSetupIntentResource;
  outboundTransfers: OutboundTransferResource;
  payoutMethods: PayoutMethodResource;
  payoutMethodsBankAccountSpecs: PayoutMethodsBankAccountSpecResource;
  receivedCredits: ReceivedCreditResource;
  receivedDebits: ReceivedDebitResource;
  recipientVerifications: RecipientVerificationResource;
  transactions: TransactionResource;
  transactionEntries: TransactionEntryResource;

  constructor(private readonly stripe: Stripe) {
    this.adjustments = new AdjustmentResource(stripe);
    this.currencyConversions = new CurrencyConversionResource(stripe);
    this.debitDisputes = new DebitDisputeResource(stripe);
    this.financialAccounts = new FinancialAccountResource(stripe);
    this.financialAddresses = new FinancialAddressResource(stripe);
    this.inboundTransfers = new InboundTransferResource(stripe);
    this.outboundPayments = new OutboundPaymentResource(stripe);
    this.outboundPaymentQuotes = new OutboundPaymentQuoteResource(stripe);
    this.outboundSetupIntents = new OutboundSetupIntentResource(stripe);
    this.outboundTransfers = new OutboundTransferResource(stripe);
    this.payoutMethods = new PayoutMethodResource(stripe);
    this.payoutMethodsBankAccountSpecs = new PayoutMethodsBankAccountSpecResource(
      stripe
    );
    this.receivedCredits = new ReceivedCreditResource(stripe);
    this.receivedDebits = new ReceivedDebitResource(stripe);
    this.recipientVerifications = new RecipientVerificationResource(stripe);
    this.transactions = new TransactionResource(stripe);
    this.transactionEntries = new TransactionEntryResource(stripe);
  }
}

export declare namespace MoneyManagement {
  export import AdjustmentListParams = V2Namespace0.MoneyManagement.AdjustmentListParams;
  export import AdjustmentRetrieveParams = V2Namespace0.MoneyManagement.AdjustmentRetrieveParams;
  export {Adjustment};
  export import CurrencyConversionListParams = V2Namespace1.MoneyManagement.CurrencyConversionListParams;
  export import CurrencyConversionCreateParams = V2Namespace1.MoneyManagement.CurrencyConversionCreateParams;
  export import CurrencyConversionRetrieveParams = V2Namespace1.MoneyManagement.CurrencyConversionRetrieveParams;
  export {CurrencyConversion};
  export import DebitDisputeListParams = V2Namespace2.MoneyManagement.DebitDisputeListParams;
  export import DebitDisputeCreateParams = V2Namespace2.MoneyManagement.DebitDisputeCreateParams;
  export import DebitDisputeRetrieveParams = V2Namespace2.MoneyManagement.DebitDisputeRetrieveParams;
  export {DebitDispute};
  export import FinancialAccountListParams = V2Namespace3.MoneyManagement.FinancialAccountListParams;
  export import FinancialAccountCreateParams = V2Namespace3.MoneyManagement.FinancialAccountCreateParams;
  export import FinancialAccountRetrieveParams = V2Namespace3.MoneyManagement.FinancialAccountRetrieveParams;
  export import FinancialAccountUpdateParams = V2Namespace3.MoneyManagement.FinancialAccountUpdateParams;
  export import FinancialAccountCloseParams = V2Namespace3.MoneyManagement.FinancialAccountCloseParams;
  export {FinancialAccount};
  export import FinancialAddressListParams = V2Namespace4.MoneyManagement.FinancialAddressListParams;
  export import FinancialAddressCreateParams = V2Namespace4.MoneyManagement.FinancialAddressCreateParams;
  export import FinancialAddressRetrieveParams = V2Namespace4.MoneyManagement.FinancialAddressRetrieveParams;
  export {FinancialAddress};
  export import InboundTransferListParams = V2Namespace5.MoneyManagement.InboundTransferListParams;
  export import InboundTransferCreateParams = V2Namespace5.MoneyManagement.InboundTransferCreateParams;
  export import InboundTransferRetrieveParams = V2Namespace5.MoneyManagement.InboundTransferRetrieveParams;
  export {InboundTransfer};
  export import OutboundPaymentListParams = V2Namespace6.MoneyManagement.OutboundPaymentListParams;
  export import OutboundPaymentCreateParams = V2Namespace6.MoneyManagement.OutboundPaymentCreateParams;
  export import OutboundPaymentRetrieveParams = V2Namespace6.MoneyManagement.OutboundPaymentRetrieveParams;
  export import OutboundPaymentCancelParams = V2Namespace6.MoneyManagement.OutboundPaymentCancelParams;
  export {OutboundPayment};
  export import OutboundPaymentQuoteCreateParams = V2Namespace7.MoneyManagement.OutboundPaymentQuoteCreateParams;
  export import OutboundPaymentQuoteRetrieveParams = V2Namespace7.MoneyManagement.OutboundPaymentQuoteRetrieveParams;
  export {OutboundPaymentQuote};
  export import OutboundSetupIntentListParams = V2Namespace8.MoneyManagement.OutboundSetupIntentListParams;
  export import OutboundSetupIntentCreateParams = V2Namespace8.MoneyManagement.OutboundSetupIntentCreateParams;
  export import OutboundSetupIntentRetrieveParams = V2Namespace8.MoneyManagement.OutboundSetupIntentRetrieveParams;
  export import OutboundSetupIntentUpdateParams = V2Namespace8.MoneyManagement.OutboundSetupIntentUpdateParams;
  export import OutboundSetupIntentCancelParams = V2Namespace8.MoneyManagement.OutboundSetupIntentCancelParams;
  export {OutboundSetupIntent};
  export import OutboundTransferListParams = V2Namespace9.MoneyManagement.OutboundTransferListParams;
  export import OutboundTransferCreateParams = V2Namespace9.MoneyManagement.OutboundTransferCreateParams;
  export import OutboundTransferRetrieveParams = V2Namespace9.MoneyManagement.OutboundTransferRetrieveParams;
  export import OutboundTransferCancelParams = V2Namespace9.MoneyManagement.OutboundTransferCancelParams;
  export {OutboundTransfer};
  export import PayoutMethodListParams = V2Namespace10.MoneyManagement.PayoutMethodListParams;
  export import PayoutMethodRetrieveParams = V2Namespace10.MoneyManagement.PayoutMethodRetrieveParams;
  export import PayoutMethodArchiveParams = V2Namespace10.MoneyManagement.PayoutMethodArchiveParams;
  export import PayoutMethodUnarchiveParams = V2Namespace10.MoneyManagement.PayoutMethodUnarchiveParams;
  export {PayoutMethod};
  export import PayoutMethodsBankAccountSpecRetrieveParams = V2Namespace11.MoneyManagement.PayoutMethodsBankAccountSpecRetrieveParams;
  export {PayoutMethodsBankAccountSpec};
  export import ReceivedCreditListParams = V2Namespace12.MoneyManagement.ReceivedCreditListParams;
  export import ReceivedCreditRetrieveParams = V2Namespace12.MoneyManagement.ReceivedCreditRetrieveParams;
  export {ReceivedCredit};
  export import ReceivedDebitListParams = V2Namespace13.MoneyManagement.ReceivedDebitListParams;
  export import ReceivedDebitRetrieveParams = V2Namespace13.MoneyManagement.ReceivedDebitRetrieveParams;
  export {ReceivedDebit};
  export import RecipientVerificationCreateParams = V2Namespace14.MoneyManagement.RecipientVerificationCreateParams;
  export import RecipientVerificationRetrieveParams = V2Namespace14.MoneyManagement.RecipientVerificationRetrieveParams;
  export import RecipientVerificationAcknowledgeParams = V2Namespace14.MoneyManagement.RecipientVerificationAcknowledgeParams;
  export {RecipientVerification};
  export import TransactionListParams = V2Namespace15.MoneyManagement.TransactionListParams;
  export import TransactionRetrieveParams = V2Namespace15.MoneyManagement.TransactionRetrieveParams;
  export {Transaction};
  export import TransactionEntryListParams = V2Namespace16.MoneyManagement.TransactionEntryListParams;
  export import TransactionEntryRetrieveParams = V2Namespace16.MoneyManagement.TransactionEntryRetrieveParams;
  export {TransactionEntry};
  export {FinancialAccountStatement};
}
