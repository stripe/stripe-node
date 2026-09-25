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
  EarnedCredit,
  EarnedCreditResource,
} from './EarnedCredits.js';
import {
  V2 as V2Namespace4,
  FinancialAccount,
  FinancialAccountResource,
} from './FinancialAccounts.js';
import {
  V2 as V2Namespace5,
  FinancialAddress,
  FinancialAddressResource,
} from './FinancialAddresses.js';
import {
  V2 as V2Namespace6,
  InboundTransfer,
  InboundTransferResource,
} from './InboundTransfers.js';
import {
  V2 as V2Namespace7,
  OutboundPayment,
  OutboundPaymentResource,
} from './OutboundPayments.js';
import {
  V2 as V2Namespace8,
  OutboundPaymentQuote,
  OutboundPaymentQuoteResource,
} from './OutboundPaymentQuotes.js';
import {
  V2 as V2Namespace9,
  OutboundSetupIntent,
  OutboundSetupIntentResource,
} from './OutboundSetupIntents.js';
import {
  V2 as V2Namespace10,
  OutboundTransfer,
  OutboundTransferResource,
} from './OutboundTransfers.js';
import {
  V2 as V2Namespace11,
  PayoutIntent,
  PayoutIntentResource,
} from './PayoutIntents.js';
import {
  V2 as V2Namespace12,
  PayoutMethod,
  PayoutMethodResource,
} from './PayoutMethods.js';
import {
  V2 as V2Namespace13,
  PayoutMethodsBankAccountSpec,
  PayoutMethodsBankAccountSpecResource,
} from './PayoutMethodsBankAccountSpec.js';
import {
  V2 as V2Namespace14,
  ReceivedCredit,
  ReceivedCreditResource,
} from './ReceivedCredits.js';
import {
  V2 as V2Namespace15,
  ReceivedDebit,
  ReceivedDebitResource,
} from './ReceivedDebits.js';
import {
  V2 as V2Namespace16,
  ReceivedDebitMandate,
  ReceivedDebitMandateResource,
} from './ReceivedDebitMandates.js';
import {
  V2 as V2Namespace17,
  RecipientVerification,
  RecipientVerificationResource,
} from './RecipientVerifications.js';
import {V2 as V2Namespace18, TestHelperResource} from './TestHelpers.js';
import {
  V2 as V2Namespace19,
  Transaction,
  TransactionResource,
} from './Transactions.js';
import {
  V2 as V2Namespace20,
  TransactionEntry,
  TransactionEntryResource,
} from './TransactionEntries.js';
import {EarnedCreditSimulation} from './EarnedCreditSimulations.js';
import {FinancialAccountWalletExportCredentials} from './FinancialAccountWalletExportCredentials.js';
import {FinancialAddressCreditSimulation} from './FinancialAddressCreditSimulations.js';
import {FinancialAddressDebitSimulation} from './FinancialAddressDebitSimulations.js';
import {FinancialAddressGeneratedMicrodeposits} from './FinancialAddressGeneratedMicrodeposits.js';
import {FinancialAccountStatement} from './FinancialAccountStatements.js';
import {FinancialAccountWalletExport} from './FinancialAccountWalletExports.js';

export {Adjustment} from './Adjustments.js';
export {CurrencyConversion} from './CurrencyConversions.js';
export {DebitDispute} from './DebitDisputes.js';
export {EarnedCredit} from './EarnedCredits.js';
export {FinancialAccount} from './FinancialAccounts.js';
export {FinancialAddress} from './FinancialAddresses.js';
export {InboundTransfer} from './InboundTransfers.js';
export {OutboundPayment} from './OutboundPayments.js';
export {OutboundPaymentQuote} from './OutboundPaymentQuotes.js';
export {OutboundSetupIntent} from './OutboundSetupIntents.js';
export {OutboundTransfer} from './OutboundTransfers.js';
export {PayoutIntent} from './PayoutIntents.js';
export {PayoutMethod} from './PayoutMethods.js';
export {PayoutMethodsBankAccountSpec} from './PayoutMethodsBankAccountSpec.js';
export {ReceivedCredit} from './ReceivedCredits.js';
export {ReceivedDebit} from './ReceivedDebits.js';
export {ReceivedDebitMandate} from './ReceivedDebitMandates.js';
export {RecipientVerification} from './RecipientVerifications.js';
export {Transaction} from './Transactions.js';
export {TransactionEntry} from './TransactionEntries.js';
export {EarnedCreditSimulation} from './EarnedCreditSimulations.js';
export {FinancialAccountWalletExportCredentials} from './FinancialAccountWalletExportCredentials.js';
export {FinancialAddressCreditSimulation} from './FinancialAddressCreditSimulations.js';
export {FinancialAddressDebitSimulation} from './FinancialAddressDebitSimulations.js';
export {FinancialAddressGeneratedMicrodeposits} from './FinancialAddressGeneratedMicrodeposits.js';
export {FinancialAccountStatement} from './FinancialAccountStatements.js';
export {FinancialAccountWalletExport} from './FinancialAccountWalletExports.js';

export class MoneyManagement {
  adjustments: AdjustmentResource;
  currencyConversions: CurrencyConversionResource;
  debitDisputes: DebitDisputeResource;
  earnedCredits: EarnedCreditResource;
  financialAccounts: FinancialAccountResource;
  financialAddresses: FinancialAddressResource;
  inboundTransfers: InboundTransferResource;
  outboundPayments: OutboundPaymentResource;
  outboundPaymentQuotes: OutboundPaymentQuoteResource;
  outboundSetupIntents: OutboundSetupIntentResource;
  outboundTransfers: OutboundTransferResource;
  payoutIntents: PayoutIntentResource;
  payoutMethods: PayoutMethodResource;
  payoutMethodsBankAccountSpecs: PayoutMethodsBankAccountSpecResource;
  receivedCredits: ReceivedCreditResource;
  receivedDebits: ReceivedDebitResource;
  receivedDebitMandates: ReceivedDebitMandateResource;
  recipientVerifications: RecipientVerificationResource;
  testHelpers: TestHelperResource;
  transactions: TransactionResource;
  transactionEntries: TransactionEntryResource;

  constructor(private readonly stripe: Stripe) {
    this.adjustments = new AdjustmentResource(stripe);
    this.currencyConversions = new CurrencyConversionResource(stripe);
    this.debitDisputes = new DebitDisputeResource(stripe);
    this.earnedCredits = new EarnedCreditResource(stripe);
    this.financialAccounts = new FinancialAccountResource(stripe);
    this.financialAddresses = new FinancialAddressResource(stripe);
    this.inboundTransfers = new InboundTransferResource(stripe);
    this.outboundPayments = new OutboundPaymentResource(stripe);
    this.outboundPaymentQuotes = new OutboundPaymentQuoteResource(stripe);
    this.outboundSetupIntents = new OutboundSetupIntentResource(stripe);
    this.outboundTransfers = new OutboundTransferResource(stripe);
    this.payoutIntents = new PayoutIntentResource(stripe);
    this.payoutMethods = new PayoutMethodResource(stripe);
    this.payoutMethodsBankAccountSpecs = new PayoutMethodsBankAccountSpecResource(
      stripe
    );
    this.receivedCredits = new ReceivedCreditResource(stripe);
    this.receivedDebits = new ReceivedDebitResource(stripe);
    this.receivedDebitMandates = new ReceivedDebitMandateResource(stripe);
    this.recipientVerifications = new RecipientVerificationResource(stripe);
    this.testHelpers = new TestHelperResource(stripe);
    this.transactions = new TransactionResource(stripe);
    this.transactionEntries = new TransactionEntryResource(stripe);
  }
}

export declare namespace MoneyManagement {
  export import AdjustmentListParams = V2Namespace0.MoneyManagement.AdjustmentListParams;
  export import AdjustmentRetrieveParams = V2Namespace0.MoneyManagement.AdjustmentRetrieveParams;
  export {Adjustment, AdjustmentResource};
  export import CurrencyConversionListParams = V2Namespace1.MoneyManagement.CurrencyConversionListParams;
  export import CurrencyConversionCreateParams = V2Namespace1.MoneyManagement.CurrencyConversionCreateParams;
  export import CurrencyConversionRetrieveParams = V2Namespace1.MoneyManagement.CurrencyConversionRetrieveParams;
  export {CurrencyConversion, CurrencyConversionResource};
  export import DebitDisputeListParams = V2Namespace2.MoneyManagement.DebitDisputeListParams;
  export import DebitDisputeCreateParams = V2Namespace2.MoneyManagement.DebitDisputeCreateParams;
  export import DebitDisputeRetrieveParams = V2Namespace2.MoneyManagement.DebitDisputeRetrieveParams;
  export {DebitDispute, DebitDisputeResource};
  export import EarnedCreditListParams = V2Namespace3.MoneyManagement.EarnedCreditListParams;
  export import EarnedCreditRetrieveParams = V2Namespace3.MoneyManagement.EarnedCreditRetrieveParams;
  export {EarnedCredit, EarnedCreditResource};
  export import FinancialAccountListParams = V2Namespace4.MoneyManagement.FinancialAccountListParams;
  export import FinancialAccountCreateParams = V2Namespace4.MoneyManagement.FinancialAccountCreateParams;
  export import FinancialAccountRetrieveParams = V2Namespace4.MoneyManagement.FinancialAccountRetrieveParams;
  export import FinancialAccountUpdateParams = V2Namespace4.MoneyManagement.FinancialAccountUpdateParams;
  export import FinancialAccountCloseParams = V2Namespace4.MoneyManagement.FinancialAccountCloseParams;
  export {FinancialAccount, FinancialAccountResource};
  export import FinancialAddressListParams = V2Namespace5.MoneyManagement.FinancialAddressListParams;
  export import FinancialAddressCreateParams = V2Namespace5.MoneyManagement.FinancialAddressCreateParams;
  export import FinancialAddressRetrieveParams = V2Namespace5.MoneyManagement.FinancialAddressRetrieveParams;
  export {FinancialAddress, FinancialAddressResource};
  export import InboundTransferListParams = V2Namespace6.MoneyManagement.InboundTransferListParams;
  export import InboundTransferCreateParams = V2Namespace6.MoneyManagement.InboundTransferCreateParams;
  export import InboundTransferRetrieveParams = V2Namespace6.MoneyManagement.InboundTransferRetrieveParams;
  export {InboundTransfer, InboundTransferResource};
  export import OutboundPaymentListParams = V2Namespace7.MoneyManagement.OutboundPaymentListParams;
  export import OutboundPaymentCreateParams = V2Namespace7.MoneyManagement.OutboundPaymentCreateParams;
  export import OutboundPaymentRetrieveParams = V2Namespace7.MoneyManagement.OutboundPaymentRetrieveParams;
  export import OutboundPaymentCancelParams = V2Namespace7.MoneyManagement.OutboundPaymentCancelParams;
  export {OutboundPayment, OutboundPaymentResource};
  export import OutboundPaymentQuoteCreateParams = V2Namespace8.MoneyManagement.OutboundPaymentQuoteCreateParams;
  export import OutboundPaymentQuoteRetrieveParams = V2Namespace8.MoneyManagement.OutboundPaymentQuoteRetrieveParams;
  export {OutboundPaymentQuote, OutboundPaymentQuoteResource};
  export import OutboundSetupIntentListParams = V2Namespace9.MoneyManagement.OutboundSetupIntentListParams;
  export import OutboundSetupIntentCreateParams = V2Namespace9.MoneyManagement.OutboundSetupIntentCreateParams;
  export import OutboundSetupIntentRetrieveParams = V2Namespace9.MoneyManagement.OutboundSetupIntentRetrieveParams;
  export import OutboundSetupIntentUpdateParams = V2Namespace9.MoneyManagement.OutboundSetupIntentUpdateParams;
  export import OutboundSetupIntentCancelParams = V2Namespace9.MoneyManagement.OutboundSetupIntentCancelParams;
  export {OutboundSetupIntent, OutboundSetupIntentResource};
  export import OutboundTransferListParams = V2Namespace10.MoneyManagement.OutboundTransferListParams;
  export import OutboundTransferCreateParams = V2Namespace10.MoneyManagement.OutboundTransferCreateParams;
  export import OutboundTransferRetrieveParams = V2Namespace10.MoneyManagement.OutboundTransferRetrieveParams;
  export import OutboundTransferCancelParams = V2Namespace10.MoneyManagement.OutboundTransferCancelParams;
  export {OutboundTransfer, OutboundTransferResource};
  export import PayoutIntentListParams = V2Namespace11.MoneyManagement.PayoutIntentListParams;
  export import PayoutIntentCreateParams = V2Namespace11.MoneyManagement.PayoutIntentCreateParams;
  export import PayoutIntentRetrieveParams = V2Namespace11.MoneyManagement.PayoutIntentRetrieveParams;
  export import PayoutIntentUpdateParams = V2Namespace11.MoneyManagement.PayoutIntentUpdateParams;
  export import PayoutIntentCancelParams = V2Namespace11.MoneyManagement.PayoutIntentCancelParams;
  export import PayoutIntentConfirmParams = V2Namespace11.MoneyManagement.PayoutIntentConfirmParams;
  export import PayoutIntentFxQuoteParams = V2Namespace11.MoneyManagement.PayoutIntentFxQuoteParams;
  export {PayoutIntent, PayoutIntentResource};
  export import PayoutMethodListParams = V2Namespace12.MoneyManagement.PayoutMethodListParams;
  export import PayoutMethodRetrieveParams = V2Namespace12.MoneyManagement.PayoutMethodRetrieveParams;
  export import PayoutMethodArchiveParams = V2Namespace12.MoneyManagement.PayoutMethodArchiveParams;
  export import PayoutMethodDisableParams = V2Namespace12.MoneyManagement.PayoutMethodDisableParams;
  export import PayoutMethodUnarchiveParams = V2Namespace12.MoneyManagement.PayoutMethodUnarchiveParams;
  export {PayoutMethod, PayoutMethodResource};
  export import PayoutMethodsBankAccountSpecRetrieveParams = V2Namespace13.MoneyManagement.PayoutMethodsBankAccountSpecRetrieveParams;
  export {PayoutMethodsBankAccountSpec, PayoutMethodsBankAccountSpecResource};
  export import ReceivedCreditListParams = V2Namespace14.MoneyManagement.ReceivedCreditListParams;
  export import ReceivedCreditRetrieveParams = V2Namespace14.MoneyManagement.ReceivedCreditRetrieveParams;
  export {ReceivedCredit, ReceivedCreditResource};
  export import ReceivedDebitListParams = V2Namespace15.MoneyManagement.ReceivedDebitListParams;
  export import ReceivedDebitRetrieveParams = V2Namespace15.MoneyManagement.ReceivedDebitRetrieveParams;
  export {ReceivedDebit, ReceivedDebitResource};
  export import ReceivedDebitMandateListParams = V2Namespace16.MoneyManagement.ReceivedDebitMandateListParams;
  export import ReceivedDebitMandateRetrieveParams = V2Namespace16.MoneyManagement.ReceivedDebitMandateRetrieveParams;
  export import ReceivedDebitMandateCancelParams = V2Namespace16.MoneyManagement.ReceivedDebitMandateCancelParams;
  export {ReceivedDebitMandate, ReceivedDebitMandateResource};
  export import RecipientVerificationCreateParams = V2Namespace17.MoneyManagement.RecipientVerificationCreateParams;
  export import RecipientVerificationRetrieveParams = V2Namespace17.MoneyManagement.RecipientVerificationRetrieveParams;
  export import RecipientVerificationAcknowledgeParams = V2Namespace17.MoneyManagement.RecipientVerificationAcknowledgeParams;
  export {RecipientVerification, RecipientVerificationResource};
  export import TransactionListParams = V2Namespace19.MoneyManagement.TransactionListParams;
  export import TransactionRetrieveParams = V2Namespace19.MoneyManagement.TransactionRetrieveParams;
  export import TransactionUpdateParams = V2Namespace19.MoneyManagement.TransactionUpdateParams;
  export {Transaction, TransactionResource};
  export import TransactionEntryListParams = V2Namespace20.MoneyManagement.TransactionEntryListParams;
  export import TransactionEntryRetrieveParams = V2Namespace20.MoneyManagement.TransactionEntryRetrieveParams;
  export {TransactionEntry, TransactionEntryResource};
  export {EarnedCreditSimulation};
  export {FinancialAccountWalletExportCredentials};
  export {FinancialAddressCreditSimulation};
  export {FinancialAddressDebitSimulation};
  export {FinancialAddressGeneratedMicrodeposits};
  export {FinancialAccountStatement};
  export {FinancialAccountWalletExport};
}
