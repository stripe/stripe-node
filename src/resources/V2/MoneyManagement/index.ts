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
  FinancialAccount,
  FinancialAccountResource,
} from './FinancialAccounts.js';
import {
  V2 as V2Namespace3,
  FinancialAddress,
  FinancialAddressResource,
} from './FinancialAddresses.js';
import {
  V2 as V2Namespace4,
  InboundTransfer,
  InboundTransferResource,
} from './InboundTransfers.js';
import {
  V2 as V2Namespace5,
  OutboundPayment,
  OutboundPaymentResource,
} from './OutboundPayments.js';
import {
  V2 as V2Namespace6,
  OutboundPaymentQuote,
  OutboundPaymentQuoteResource,
} from './OutboundPaymentQuotes.js';
import {
  V2 as V2Namespace7,
  OutboundSetupIntent,
  OutboundSetupIntentResource,
} from './OutboundSetupIntents.js';
import {
  V2 as V2Namespace8,
  OutboundTransfer,
  OutboundTransferResource,
} from './OutboundTransfers.js';
import {
  V2 as V2Namespace9,
  PayoutMethod,
  PayoutMethodResource,
} from './PayoutMethods.js';
import {
  V2 as V2Namespace10,
  PayoutMethodsBankAccountSpec,
  PayoutMethodsBankAccountSpecResource,
} from './PayoutMethodsBankAccountSpec.js';
import {
  V2 as V2Namespace11,
  ReceivedCredit,
  ReceivedCreditResource,
} from './ReceivedCredits.js';
import {
  V2 as V2Namespace12,
  ReceivedDebit,
  ReceivedDebitResource,
} from './ReceivedDebits.js';
import {
  V2 as V2Namespace13,
  RecipientVerification,
  RecipientVerificationResource,
} from './RecipientVerifications.js';
import {
  V2 as V2Namespace14,
  Transaction,
  TransactionResource,
} from './Transactions.js';
import {
  V2 as V2Namespace15,
  TransactionEntry,
  TransactionEntryResource,
} from './TransactionEntries.js';

export {Adjustment} from './Adjustments.js';
export {CurrencyConversion} from './CurrencyConversions.js';
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

export class MoneyManagement {
  adjustments: AdjustmentResource;
  currencyConversions: CurrencyConversionResource;
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
  export type AdjustmentListParams = V2Namespace0.MoneyManagement.AdjustmentListParams;
  export type AdjustmentRetrieveParams = V2Namespace0.MoneyManagement.AdjustmentRetrieveParams;
  export {Adjustment};
  export type CurrencyConversionListParams = V2Namespace1.MoneyManagement.CurrencyConversionListParams;
  export type CurrencyConversionCreateParams = V2Namespace1.MoneyManagement.CurrencyConversionCreateParams;
  export type CurrencyConversionRetrieveParams = V2Namespace1.MoneyManagement.CurrencyConversionRetrieveParams;
  export {CurrencyConversion};
  export type FinancialAccountListParams = V2Namespace2.MoneyManagement.FinancialAccountListParams;
  export type FinancialAccountCreateParams = V2Namespace2.MoneyManagement.FinancialAccountCreateParams;
  export type FinancialAccountRetrieveParams = V2Namespace2.MoneyManagement.FinancialAccountRetrieveParams;
  export type FinancialAccountUpdateParams = V2Namespace2.MoneyManagement.FinancialAccountUpdateParams;
  export type FinancialAccountCloseParams = V2Namespace2.MoneyManagement.FinancialAccountCloseParams;
  export {FinancialAccount};
  export type FinancialAddressListParams = V2Namespace3.MoneyManagement.FinancialAddressListParams;
  export type FinancialAddressCreateParams = V2Namespace3.MoneyManagement.FinancialAddressCreateParams;
  export type FinancialAddressRetrieveParams = V2Namespace3.MoneyManagement.FinancialAddressRetrieveParams;
  export {FinancialAddress};
  export type InboundTransferListParams = V2Namespace4.MoneyManagement.InboundTransferListParams;
  export type InboundTransferCreateParams = V2Namespace4.MoneyManagement.InboundTransferCreateParams;
  export type InboundTransferRetrieveParams = V2Namespace4.MoneyManagement.InboundTransferRetrieveParams;
  export {InboundTransfer};
  export type OutboundPaymentListParams = V2Namespace5.MoneyManagement.OutboundPaymentListParams;
  export type OutboundPaymentCreateParams = V2Namespace5.MoneyManagement.OutboundPaymentCreateParams;
  export type OutboundPaymentRetrieveParams = V2Namespace5.MoneyManagement.OutboundPaymentRetrieveParams;
  export type OutboundPaymentCancelParams = V2Namespace5.MoneyManagement.OutboundPaymentCancelParams;
  export {OutboundPayment};
  export type OutboundPaymentQuoteCreateParams = V2Namespace6.MoneyManagement.OutboundPaymentQuoteCreateParams;
  export type OutboundPaymentQuoteRetrieveParams = V2Namespace6.MoneyManagement.OutboundPaymentQuoteRetrieveParams;
  export {OutboundPaymentQuote};
  export type OutboundSetupIntentListParams = V2Namespace7.MoneyManagement.OutboundSetupIntentListParams;
  export type OutboundSetupIntentCreateParams = V2Namespace7.MoneyManagement.OutboundSetupIntentCreateParams;
  export type OutboundSetupIntentRetrieveParams = V2Namespace7.MoneyManagement.OutboundSetupIntentRetrieveParams;
  export type OutboundSetupIntentUpdateParams = V2Namespace7.MoneyManagement.OutboundSetupIntentUpdateParams;
  export type OutboundSetupIntentCancelParams = V2Namespace7.MoneyManagement.OutboundSetupIntentCancelParams;
  export {OutboundSetupIntent};
  export type OutboundTransferListParams = V2Namespace8.MoneyManagement.OutboundTransferListParams;
  export type OutboundTransferCreateParams = V2Namespace8.MoneyManagement.OutboundTransferCreateParams;
  export type OutboundTransferRetrieveParams = V2Namespace8.MoneyManagement.OutboundTransferRetrieveParams;
  export type OutboundTransferCancelParams = V2Namespace8.MoneyManagement.OutboundTransferCancelParams;
  export {OutboundTransfer};
  export type PayoutMethodListParams = V2Namespace9.MoneyManagement.PayoutMethodListParams;
  export type PayoutMethodRetrieveParams = V2Namespace9.MoneyManagement.PayoutMethodRetrieveParams;
  export type PayoutMethodArchiveParams = V2Namespace9.MoneyManagement.PayoutMethodArchiveParams;
  export type PayoutMethodUnarchiveParams = V2Namespace9.MoneyManagement.PayoutMethodUnarchiveParams;
  export {PayoutMethod};
  export type PayoutMethodsBankAccountSpecRetrieveParams = V2Namespace10.MoneyManagement.PayoutMethodsBankAccountSpecRetrieveParams;
  export {PayoutMethodsBankAccountSpec};
  export type ReceivedCreditListParams = V2Namespace11.MoneyManagement.ReceivedCreditListParams;
  export type ReceivedCreditRetrieveParams = V2Namespace11.MoneyManagement.ReceivedCreditRetrieveParams;
  export {ReceivedCredit};
  export type ReceivedDebitListParams = V2Namespace12.MoneyManagement.ReceivedDebitListParams;
  export type ReceivedDebitRetrieveParams = V2Namespace12.MoneyManagement.ReceivedDebitRetrieveParams;
  export {ReceivedDebit};
  export type RecipientVerificationCreateParams = V2Namespace13.MoneyManagement.RecipientVerificationCreateParams;
  export type RecipientVerificationRetrieveParams = V2Namespace13.MoneyManagement.RecipientVerificationRetrieveParams;
  export type RecipientVerificationAcknowledgeParams = V2Namespace13.MoneyManagement.RecipientVerificationAcknowledgeParams;
  export {RecipientVerification};
  export type TransactionListParams = V2Namespace14.MoneyManagement.TransactionListParams;
  export type TransactionRetrieveParams = V2Namespace14.MoneyManagement.TransactionRetrieveParams;
  export {Transaction};
  export type TransactionEntryListParams = V2Namespace15.MoneyManagement.TransactionEntryListParams;
  export type TransactionEntryRetrieveParams = V2Namespace15.MoneyManagement.TransactionEntryRetrieveParams;
  export {TransactionEntry};
}
