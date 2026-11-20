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
import {V2 as V2Namespace3, Dispute, DisputeResource} from './Disputes.js';
import {
  V2 as V2Namespace4,
  DisputeAdjustment,
  DisputeAdjustmentResource,
} from './DisputeAdjustments.js';
import {
  V2 as V2Namespace5,
  EarnedCredit,
  EarnedCreditResource,
} from './EarnedCredits.js';
import {
  V2 as V2Namespace6,
  FinancialAccount,
  FinancialAccountResource,
} from './FinancialAccounts.js';
import {
  V2 as V2Namespace7,
  FinancialAddress,
  FinancialAddressResource,
} from './FinancialAddresses.js';
import {
  V2 as V2Namespace8,
  FundingIntent,
  FundingIntentResource,
} from './FundingIntents.js';
import {
  V2 as V2Namespace9,
  FundingSession,
  FundingSessionResource,
} from './FundingSessions.js';
import {
  V2 as V2Namespace10,
  InboundFunding,
  InboundFundingResource,
} from './InboundFundings.js';
import {
  V2 as V2Namespace11,
  InboundTransfer,
  InboundTransferResource,
} from './InboundTransfers.js';
import {
  V2 as V2Namespace12,
  InboundTransferMandate,
  InboundTransferMandateResource,
} from './InboundTransferMandates.js';
import {
  V2 as V2Namespace13,
  OutboundPayment,
  OutboundPaymentResource,
} from './OutboundPayments.js';
import {
  V2 as V2Namespace14,
  OutboundPaymentQuote,
  OutboundPaymentQuoteResource,
} from './OutboundPaymentQuotes.js';
import {
  V2 as V2Namespace15,
  OutboundSetupIntent,
  OutboundSetupIntentResource,
} from './OutboundSetupIntents.js';
import {
  V2 as V2Namespace16,
  OutboundTransfer,
  OutboundTransferResource,
} from './OutboundTransfers.js';
import {
  V2 as V2Namespace17,
  PayoutIntent,
  PayoutIntentResource,
} from './PayoutIntents.js';
import {
  V2 as V2Namespace18,
  PayoutMethod,
  PayoutMethodResource,
} from './PayoutMethods.js';
import {
  V2 as V2Namespace19,
  PayoutMethodsBankAccountSpec,
  PayoutMethodsBankAccountSpecResource,
} from './PayoutMethodsBankAccountSpec.js';
import {
  V2 as V2Namespace20,
  ReceivedCredit,
  ReceivedCreditResource,
} from './ReceivedCredits.js';
import {
  V2 as V2Namespace21,
  ReceivedDebit,
  ReceivedDebitResource,
} from './ReceivedDebits.js';
import {
  V2 as V2Namespace22,
  ReceivedDebitMandate,
  ReceivedDebitMandateResource,
} from './ReceivedDebitMandates.js';
import {
  V2 as V2Namespace23,
  RecipientVerification,
  RecipientVerificationResource,
} from './RecipientVerifications.js';
import {
  V2 as V2Namespace24,
  RewardProgram,
  RewardProgramResource,
} from './RewardPrograms.js';
import {
  V2 as V2Namespace25,
  RewardProgramEnrollment,
  RewardProgramEnrollmentResource,
} from './RewardProgramEnrollments.js';
import {
  V2 as V2Namespace26,
  SpendingMandate,
  SpendingMandateResource,
} from './SpendingMandates.js';
import {V2 as V2Namespace27, TestHelperResource} from './TestHelpers.js';
import {
  V2 as V2Namespace28,
  Transaction,
  TransactionResource,
} from './Transactions.js';
import {
  V2 as V2Namespace29,
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
import {RewardProgramRule} from './RewardProgramRules.js';

export {Adjustment} from './Adjustments.js';
export {CurrencyConversion} from './CurrencyConversions.js';
export {DebitDispute} from './DebitDisputes.js';
export {Dispute} from './Disputes.js';
export {DisputeAdjustment} from './DisputeAdjustments.js';
export {EarnedCredit} from './EarnedCredits.js';
export {FinancialAccount} from './FinancialAccounts.js';
export {FinancialAddress} from './FinancialAddresses.js';
export {FundingIntent} from './FundingIntents.js';
export {FundingSession} from './FundingSessions.js';
export {InboundFunding} from './InboundFundings.js';
export {InboundTransfer} from './InboundTransfers.js';
export {InboundTransferMandate} from './InboundTransferMandates.js';
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
export {RewardProgram} from './RewardPrograms.js';
export {RewardProgramEnrollment} from './RewardProgramEnrollments.js';
export {SpendingMandate} from './SpendingMandates.js';
export {Transaction} from './Transactions.js';
export {TransactionEntry} from './TransactionEntries.js';
export {EarnedCreditSimulation} from './EarnedCreditSimulations.js';
export {FinancialAccountWalletExportCredentials} from './FinancialAccountWalletExportCredentials.js';
export {FinancialAddressCreditSimulation} from './FinancialAddressCreditSimulations.js';
export {FinancialAddressDebitSimulation} from './FinancialAddressDebitSimulations.js';
export {FinancialAddressGeneratedMicrodeposits} from './FinancialAddressGeneratedMicrodeposits.js';
export {FinancialAccountStatement} from './FinancialAccountStatements.js';
export {FinancialAccountWalletExport} from './FinancialAccountWalletExports.js';
export {RewardProgramRule} from './RewardProgramRules.js';

export class MoneyManagement {
  adjustments: AdjustmentResource;
  currencyConversions: CurrencyConversionResource;
  debitDisputes: DebitDisputeResource;
  disputes: DisputeResource;
  disputeAdjustments: DisputeAdjustmentResource;
  earnedCredits: EarnedCreditResource;
  financialAccounts: FinancialAccountResource;
  financialAddresses: FinancialAddressResource;
  fundingIntents: FundingIntentResource;
  fundingSessions: FundingSessionResource;
  inboundFundings: InboundFundingResource;
  inboundTransfers: InboundTransferResource;
  inboundTransferMandates: InboundTransferMandateResource;
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
  rewardPrograms: RewardProgramResource;
  rewardProgramEnrollments: RewardProgramEnrollmentResource;
  spendingMandates: SpendingMandateResource;
  testHelpers: TestHelperResource;
  transactions: TransactionResource;
  transactionEntries: TransactionEntryResource;

  constructor(private readonly stripe: Stripe) {
    this.adjustments = new AdjustmentResource(stripe);
    this.currencyConversions = new CurrencyConversionResource(stripe);
    this.debitDisputes = new DebitDisputeResource(stripe);
    this.disputes = new DisputeResource(stripe);
    this.disputeAdjustments = new DisputeAdjustmentResource(stripe);
    this.earnedCredits = new EarnedCreditResource(stripe);
    this.financialAccounts = new FinancialAccountResource(stripe);
    this.financialAddresses = new FinancialAddressResource(stripe);
    this.fundingIntents = new FundingIntentResource(stripe);
    this.fundingSessions = new FundingSessionResource(stripe);
    this.inboundFundings = new InboundFundingResource(stripe);
    this.inboundTransfers = new InboundTransferResource(stripe);
    this.inboundTransferMandates = new InboundTransferMandateResource(stripe);
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
    this.rewardPrograms = new RewardProgramResource(stripe);
    this.rewardProgramEnrollments = new RewardProgramEnrollmentResource(stripe);
    this.spendingMandates = new SpendingMandateResource(stripe);
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
  export import DisputeListParams = V2Namespace3.MoneyManagement.DisputeListParams;
  export import DisputeCreateParams = V2Namespace3.MoneyManagement.DisputeCreateParams;
  export import DisputeRetrieveParams = V2Namespace3.MoneyManagement.DisputeRetrieveParams;
  export {Dispute, DisputeResource};
  export import DisputeAdjustmentListParams = V2Namespace4.MoneyManagement.DisputeAdjustmentListParams;
  export import DisputeAdjustmentRetrieveParams = V2Namespace4.MoneyManagement.DisputeAdjustmentRetrieveParams;
  export {DisputeAdjustment, DisputeAdjustmentResource};
  export import EarnedCreditListParams = V2Namespace5.MoneyManagement.EarnedCreditListParams;
  export import EarnedCreditRetrieveParams = V2Namespace5.MoneyManagement.EarnedCreditRetrieveParams;
  export {EarnedCredit, EarnedCreditResource};
  export import FinancialAccountListParams = V2Namespace6.MoneyManagement.FinancialAccountListParams;
  export import FinancialAccountCreateParams = V2Namespace6.MoneyManagement.FinancialAccountCreateParams;
  export import FinancialAccountRetrieveParams = V2Namespace6.MoneyManagement.FinancialAccountRetrieveParams;
  export import FinancialAccountUpdateParams = V2Namespace6.MoneyManagement.FinancialAccountUpdateParams;
  export import FinancialAccountCloseParams = V2Namespace6.MoneyManagement.FinancialAccountCloseParams;
  export {FinancialAccount, FinancialAccountResource};
  export import FinancialAddressListParams = V2Namespace7.MoneyManagement.FinancialAddressListParams;
  export import FinancialAddressCreateParams = V2Namespace7.MoneyManagement.FinancialAddressCreateParams;
  export import FinancialAddressRetrieveParams = V2Namespace7.MoneyManagement.FinancialAddressRetrieveParams;
  export {FinancialAddress, FinancialAddressResource};
  export import FundingIntentListParams = V2Namespace8.MoneyManagement.FundingIntentListParams;
  export import FundingIntentCreateParams = V2Namespace8.MoneyManagement.FundingIntentCreateParams;
  export import FundingIntentRetrieveParams = V2Namespace8.MoneyManagement.FundingIntentRetrieveParams;
  export import FundingIntentUpdateParams = V2Namespace8.MoneyManagement.FundingIntentUpdateParams;
  export import FundingIntentCancelParams = V2Namespace8.MoneyManagement.FundingIntentCancelParams;
  export import FundingIntentConfirmParams = V2Namespace8.MoneyManagement.FundingIntentConfirmParams;
  export {FundingIntent, FundingIntentResource};
  export import FundingSessionCreateParams = V2Namespace9.MoneyManagement.FundingSessionCreateParams;
  export {FundingSession, FundingSessionResource};
  export import InboundFundingListParams = V2Namespace10.MoneyManagement.InboundFundingListParams;
  export import InboundFundingRetrieveParams = V2Namespace10.MoneyManagement.InboundFundingRetrieveParams;
  export {InboundFunding, InboundFundingResource};
  export import InboundTransferListParams = V2Namespace11.MoneyManagement.InboundTransferListParams;
  export import InboundTransferCreateParams = V2Namespace11.MoneyManagement.InboundTransferCreateParams;
  export import InboundTransferRetrieveParams = V2Namespace11.MoneyManagement.InboundTransferRetrieveParams;
  export {InboundTransfer, InboundTransferResource};
  export import InboundTransferMandateListParams = V2Namespace12.MoneyManagement.InboundTransferMandateListParams;
  export import InboundTransferMandateCreateParams = V2Namespace12.MoneyManagement.InboundTransferMandateCreateParams;
  export import InboundTransferMandateRetrieveParams = V2Namespace12.MoneyManagement.InboundTransferMandateRetrieveParams;
  export import InboundTransferMandateCancelParams = V2Namespace12.MoneyManagement.InboundTransferMandateCancelParams;
  export {InboundTransferMandate, InboundTransferMandateResource};
  export import OutboundPaymentListParams = V2Namespace13.MoneyManagement.OutboundPaymentListParams;
  export import OutboundPaymentCreateParams = V2Namespace13.MoneyManagement.OutboundPaymentCreateParams;
  export import OutboundPaymentRetrieveParams = V2Namespace13.MoneyManagement.OutboundPaymentRetrieveParams;
  export import OutboundPaymentCancelParams = V2Namespace13.MoneyManagement.OutboundPaymentCancelParams;
  export {OutboundPayment, OutboundPaymentResource};
  export import OutboundPaymentQuoteCreateParams = V2Namespace14.MoneyManagement.OutboundPaymentQuoteCreateParams;
  export import OutboundPaymentQuoteRetrieveParams = V2Namespace14.MoneyManagement.OutboundPaymentQuoteRetrieveParams;
  export {OutboundPaymentQuote, OutboundPaymentQuoteResource};
  export import OutboundSetupIntentListParams = V2Namespace15.MoneyManagement.OutboundSetupIntentListParams;
  export import OutboundSetupIntentCreateParams = V2Namespace15.MoneyManagement.OutboundSetupIntentCreateParams;
  export import OutboundSetupIntentRetrieveParams = V2Namespace15.MoneyManagement.OutboundSetupIntentRetrieveParams;
  export import OutboundSetupIntentUpdateParams = V2Namespace15.MoneyManagement.OutboundSetupIntentUpdateParams;
  export import OutboundSetupIntentCancelParams = V2Namespace15.MoneyManagement.OutboundSetupIntentCancelParams;
  export {OutboundSetupIntent, OutboundSetupIntentResource};
  export import OutboundTransferListParams = V2Namespace16.MoneyManagement.OutboundTransferListParams;
  export import OutboundTransferCreateParams = V2Namespace16.MoneyManagement.OutboundTransferCreateParams;
  export import OutboundTransferRetrieveParams = V2Namespace16.MoneyManagement.OutboundTransferRetrieveParams;
  export import OutboundTransferCancelParams = V2Namespace16.MoneyManagement.OutboundTransferCancelParams;
  export {OutboundTransfer, OutboundTransferResource};
  export import PayoutIntentListParams = V2Namespace17.MoneyManagement.PayoutIntentListParams;
  export import PayoutIntentCreateParams = V2Namespace17.MoneyManagement.PayoutIntentCreateParams;
  export import PayoutIntentRetrieveParams = V2Namespace17.MoneyManagement.PayoutIntentRetrieveParams;
  export import PayoutIntentUpdateParams = V2Namespace17.MoneyManagement.PayoutIntentUpdateParams;
  export import PayoutIntentCancelParams = V2Namespace17.MoneyManagement.PayoutIntentCancelParams;
  export import PayoutIntentConfirmParams = V2Namespace17.MoneyManagement.PayoutIntentConfirmParams;
  export import PayoutIntentRefreshFxQuoteParams = V2Namespace17.MoneyManagement.PayoutIntentRefreshFxQuoteParams;
  export import PayoutIntentRefreshRecipientVerificationParams = V2Namespace17.MoneyManagement.PayoutIntentRefreshRecipientVerificationParams;
  export {PayoutIntent, PayoutIntentResource};
  export import PayoutMethodListParams = V2Namespace18.MoneyManagement.PayoutMethodListParams;
  export import PayoutMethodRetrieveParams = V2Namespace18.MoneyManagement.PayoutMethodRetrieveParams;
  export import PayoutMethodArchiveParams = V2Namespace18.MoneyManagement.PayoutMethodArchiveParams;
  export import PayoutMethodDisableParams = V2Namespace18.MoneyManagement.PayoutMethodDisableParams;
  export import PayoutMethodUnarchiveParams = V2Namespace18.MoneyManagement.PayoutMethodUnarchiveParams;
  export {PayoutMethod, PayoutMethodResource};
  export import PayoutMethodsBankAccountSpecRetrieveParams = V2Namespace19.MoneyManagement.PayoutMethodsBankAccountSpecRetrieveParams;
  export {PayoutMethodsBankAccountSpec, PayoutMethodsBankAccountSpecResource};
  export import ReceivedCreditListParams = V2Namespace20.MoneyManagement.ReceivedCreditListParams;
  export import ReceivedCreditRetrieveParams = V2Namespace20.MoneyManagement.ReceivedCreditRetrieveParams;
  export {ReceivedCredit, ReceivedCreditResource};
  export import ReceivedDebitListParams = V2Namespace21.MoneyManagement.ReceivedDebitListParams;
  export import ReceivedDebitRetrieveParams = V2Namespace21.MoneyManagement.ReceivedDebitRetrieveParams;
  export {ReceivedDebit, ReceivedDebitResource};
  export import ReceivedDebitMandateListParams = V2Namespace22.MoneyManagement.ReceivedDebitMandateListParams;
  export import ReceivedDebitMandateRetrieveParams = V2Namespace22.MoneyManagement.ReceivedDebitMandateRetrieveParams;
  export import ReceivedDebitMandateCancelParams = V2Namespace22.MoneyManagement.ReceivedDebitMandateCancelParams;
  export {ReceivedDebitMandate, ReceivedDebitMandateResource};
  export import RecipientVerificationCreateParams = V2Namespace23.MoneyManagement.RecipientVerificationCreateParams;
  export import RecipientVerificationRetrieveParams = V2Namespace23.MoneyManagement.RecipientVerificationRetrieveParams;
  export import RecipientVerificationAcknowledgeParams = V2Namespace23.MoneyManagement.RecipientVerificationAcknowledgeParams;
  export {RecipientVerification, RecipientVerificationResource};
  export import RewardProgramListParams = V2Namespace24.MoneyManagement.RewardProgramListParams;
  export import RewardProgramCreateParams = V2Namespace24.MoneyManagement.RewardProgramCreateParams;
  export import RewardProgramRetrieveParams = V2Namespace24.MoneyManagement.RewardProgramRetrieveParams;
  export import RewardProgramUpdateParams = V2Namespace24.MoneyManagement.RewardProgramUpdateParams;
  export import RewardProgramActivateParams = V2Namespace24.MoneyManagement.RewardProgramActivateParams;
  export import RewardProgramDeactivateParams = V2Namespace24.MoneyManagement.RewardProgramDeactivateParams;
  export {RewardProgram, RewardProgramResource};
  export import RewardProgramEnrollmentListParams = V2Namespace25.MoneyManagement.RewardProgramEnrollmentListParams;
  export import RewardProgramEnrollmentCreateParams = V2Namespace25.MoneyManagement.RewardProgramEnrollmentCreateParams;
  export import RewardProgramEnrollmentRetrieveParams = V2Namespace25.MoneyManagement.RewardProgramEnrollmentRetrieveParams;
  export import RewardProgramEnrollmentActivateParams = V2Namespace25.MoneyManagement.RewardProgramEnrollmentActivateParams;
  export import RewardProgramEnrollmentDeactivateParams = V2Namespace25.MoneyManagement.RewardProgramEnrollmentDeactivateParams;
  export {RewardProgramEnrollment, RewardProgramEnrollmentResource};
  export import SpendingMandateListParams = V2Namespace26.MoneyManagement.SpendingMandateListParams;
  export import SpendingMandateCreateParams = V2Namespace26.MoneyManagement.SpendingMandateCreateParams;
  export import SpendingMandateRetrieveParams = V2Namespace26.MoneyManagement.SpendingMandateRetrieveParams;
  export import SpendingMandateUpdateParams = V2Namespace26.MoneyManagement.SpendingMandateUpdateParams;
  export import SpendingMandateCancelParams = V2Namespace26.MoneyManagement.SpendingMandateCancelParams;
  export {SpendingMandate, SpendingMandateResource};
  export import TransactionListParams = V2Namespace28.MoneyManagement.TransactionListParams;
  export import TransactionRetrieveParams = V2Namespace28.MoneyManagement.TransactionRetrieveParams;
  export import TransactionUpdateParams = V2Namespace28.MoneyManagement.TransactionUpdateParams;
  export import TransactionRefreshRegulatoryReceiptParams = V2Namespace28.MoneyManagement.TransactionRefreshRegulatoryReceiptParams;
  export {Transaction, TransactionResource};
  export import TransactionEntryListParams = V2Namespace29.MoneyManagement.TransactionEntryListParams;
  export import TransactionEntryRetrieveParams = V2Namespace29.MoneyManagement.TransactionEntryRetrieveParams;
  export {TransactionEntry, TransactionEntryResource};
  export {EarnedCreditSimulation};
  export {FinancialAccountWalletExportCredentials};
  export {FinancialAddressCreditSimulation};
  export {FinancialAddressDebitSimulation};
  export {FinancialAddressGeneratedMicrodeposits};
  export {FinancialAccountStatement};
  export {FinancialAccountWalletExport};
  export {RewardProgramRule};
}
