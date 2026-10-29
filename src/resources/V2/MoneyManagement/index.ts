// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  Adjustment,
  AdjustmentResource,
} from './Adjustments.js';
import {
  V2 as V2Namespace1,
  FinancialAccount,
  FinancialAccountResource,
} from './FinancialAccounts.js';
import {
  V2 as V2Namespace2,
  FinancialAddress,
  FinancialAddressResource,
} from './FinancialAddresses.js';
import {
  V2 as V2Namespace3,
  InboundTransfer,
  InboundTransferResource,
} from './InboundTransfers.js';
import {
  V2 as V2Namespace4,
  OutboundPayment,
  OutboundPaymentResource,
} from './OutboundPayments.js';
import {
  V2 as V2Namespace5,
  OutboundPaymentQuote,
  OutboundPaymentQuoteResource,
} from './OutboundPaymentQuotes.js';
import {
  V2 as V2Namespace6,
  OutboundSetupIntent,
  OutboundSetupIntentResource,
} from './OutboundSetupIntents.js';
import {
  V2 as V2Namespace7,
  OutboundTransfer,
  OutboundTransferResource,
} from './OutboundTransfers.js';
import {
  V2 as V2Namespace8,
  PayoutIntent,
  PayoutIntentResource,
} from './PayoutIntents.js';
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
import {FinancialAddressCreditSimulation} from './FinancialAddressCreditSimulations.js';
import {FinancialAddressGeneratedMicrodeposits} from './FinancialAddressGeneratedMicrodeposits.js';
import {TestHelpers} from './TestHelpers/index.js';

export {Adjustment} from './Adjustments.js';
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
export {RecipientVerification} from './RecipientVerifications.js';
export {Transaction} from './Transactions.js';
export {TransactionEntry} from './TransactionEntries.js';
export {FinancialAddressCreditSimulation} from './FinancialAddressCreditSimulations.js';
export {FinancialAddressGeneratedMicrodeposits} from './FinancialAddressGeneratedMicrodeposits.js';

export class MoneyManagement {
  adjustments: AdjustmentResource;
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
  recipientVerifications: RecipientVerificationResource;
  transactions: TransactionResource;
  transactionEntries: TransactionEntryResource;
  testHelpers: TestHelpers;

  constructor(private readonly stripe: Stripe) {
    this.adjustments = new AdjustmentResource(stripe);
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
    this.recipientVerifications = new RecipientVerificationResource(stripe);
    this.transactions = new TransactionResource(stripe);
    this.transactionEntries = new TransactionEntryResource(stripe);
    this.testHelpers = new TestHelpers(stripe);
  }
}

export declare namespace MoneyManagement {
  export import AdjustmentListParams = V2Namespace0.MoneyManagement.AdjustmentListParams;
  export import AdjustmentRetrieveParams = V2Namespace0.MoneyManagement.AdjustmentRetrieveParams;
  export {Adjustment, AdjustmentResource};
  export import FinancialAccountListParams = V2Namespace1.MoneyManagement.FinancialAccountListParams;
  export import FinancialAccountCreateParams = V2Namespace1.MoneyManagement.FinancialAccountCreateParams;
  export import FinancialAccountRetrieveParams = V2Namespace1.MoneyManagement.FinancialAccountRetrieveParams;
  export import FinancialAccountUpdateParams = V2Namespace1.MoneyManagement.FinancialAccountUpdateParams;
  export import FinancialAccountCloseParams = V2Namespace1.MoneyManagement.FinancialAccountCloseParams;
  export {FinancialAccount, FinancialAccountResource};
  export import FinancialAddressListParams = V2Namespace2.MoneyManagement.FinancialAddressListParams;
  export import FinancialAddressCreateParams = V2Namespace2.MoneyManagement.FinancialAddressCreateParams;
  export import FinancialAddressRetrieveParams = V2Namespace2.MoneyManagement.FinancialAddressRetrieveParams;
  export {FinancialAddress, FinancialAddressResource};
  export import InboundTransferListParams = V2Namespace3.MoneyManagement.InboundTransferListParams;
  export import InboundTransferCreateParams = V2Namespace3.MoneyManagement.InboundTransferCreateParams;
  export import InboundTransferRetrieveParams = V2Namespace3.MoneyManagement.InboundTransferRetrieveParams;
  export {InboundTransfer, InboundTransferResource};
  export import OutboundPaymentListParams = V2Namespace4.MoneyManagement.OutboundPaymentListParams;
  export import OutboundPaymentCreateParams = V2Namespace4.MoneyManagement.OutboundPaymentCreateParams;
  export import OutboundPaymentRetrieveParams = V2Namespace4.MoneyManagement.OutboundPaymentRetrieveParams;
  export import OutboundPaymentCancelParams = V2Namespace4.MoneyManagement.OutboundPaymentCancelParams;
  export {OutboundPayment, OutboundPaymentResource};
  export import OutboundPaymentQuoteCreateParams = V2Namespace5.MoneyManagement.OutboundPaymentQuoteCreateParams;
  export import OutboundPaymentQuoteRetrieveParams = V2Namespace5.MoneyManagement.OutboundPaymentQuoteRetrieveParams;
  export {OutboundPaymentQuote, OutboundPaymentQuoteResource};
  export import OutboundSetupIntentListParams = V2Namespace6.MoneyManagement.OutboundSetupIntentListParams;
  export import OutboundSetupIntentCreateParams = V2Namespace6.MoneyManagement.OutboundSetupIntentCreateParams;
  export import OutboundSetupIntentRetrieveParams = V2Namespace6.MoneyManagement.OutboundSetupIntentRetrieveParams;
  export import OutboundSetupIntentUpdateParams = V2Namespace6.MoneyManagement.OutboundSetupIntentUpdateParams;
  export import OutboundSetupIntentCancelParams = V2Namespace6.MoneyManagement.OutboundSetupIntentCancelParams;
  export {OutboundSetupIntent, OutboundSetupIntentResource};
  export import OutboundTransferListParams = V2Namespace7.MoneyManagement.OutboundTransferListParams;
  export import OutboundTransferCreateParams = V2Namespace7.MoneyManagement.OutboundTransferCreateParams;
  export import OutboundTransferRetrieveParams = V2Namespace7.MoneyManagement.OutboundTransferRetrieveParams;
  export import OutboundTransferCancelParams = V2Namespace7.MoneyManagement.OutboundTransferCancelParams;
  export {OutboundTransfer, OutboundTransferResource};
  export import PayoutIntentListParams = V2Namespace8.MoneyManagement.PayoutIntentListParams;
  export import PayoutIntentCreateParams = V2Namespace8.MoneyManagement.PayoutIntentCreateParams;
  export import PayoutIntentRetrieveParams = V2Namespace8.MoneyManagement.PayoutIntentRetrieveParams;
  export import PayoutIntentUpdateParams = V2Namespace8.MoneyManagement.PayoutIntentUpdateParams;
  export import PayoutIntentCancelParams = V2Namespace8.MoneyManagement.PayoutIntentCancelParams;
  export import PayoutIntentConfirmParams = V2Namespace8.MoneyManagement.PayoutIntentConfirmParams;
  export import PayoutIntentRefreshFxQuoteParams = V2Namespace8.MoneyManagement.PayoutIntentRefreshFxQuoteParams;
  export import PayoutIntentRefreshRecipientVerificationParams = V2Namespace8.MoneyManagement.PayoutIntentRefreshRecipientVerificationParams;
  export {PayoutIntent, PayoutIntentResource};
  export import PayoutMethodListParams = V2Namespace9.MoneyManagement.PayoutMethodListParams;
  export import PayoutMethodRetrieveParams = V2Namespace9.MoneyManagement.PayoutMethodRetrieveParams;
  export import PayoutMethodArchiveParams = V2Namespace9.MoneyManagement.PayoutMethodArchiveParams;
  export import PayoutMethodDisableParams = V2Namespace9.MoneyManagement.PayoutMethodDisableParams;
  export import PayoutMethodUnarchiveParams = V2Namespace9.MoneyManagement.PayoutMethodUnarchiveParams;
  export {PayoutMethod, PayoutMethodResource};
  export import PayoutMethodsBankAccountSpecRetrieveParams = V2Namespace10.MoneyManagement.PayoutMethodsBankAccountSpecRetrieveParams;
  export {PayoutMethodsBankAccountSpec, PayoutMethodsBankAccountSpecResource};
  export import ReceivedCreditListParams = V2Namespace11.MoneyManagement.ReceivedCreditListParams;
  export import ReceivedCreditRetrieveParams = V2Namespace11.MoneyManagement.ReceivedCreditRetrieveParams;
  export {ReceivedCredit, ReceivedCreditResource};
  export import ReceivedDebitListParams = V2Namespace12.MoneyManagement.ReceivedDebitListParams;
  export import ReceivedDebitRetrieveParams = V2Namespace12.MoneyManagement.ReceivedDebitRetrieveParams;
  export {ReceivedDebit, ReceivedDebitResource};
  export import RecipientVerificationCreateParams = V2Namespace13.MoneyManagement.RecipientVerificationCreateParams;
  export import RecipientVerificationRetrieveParams = V2Namespace13.MoneyManagement.RecipientVerificationRetrieveParams;
  export import RecipientVerificationAcknowledgeParams = V2Namespace13.MoneyManagement.RecipientVerificationAcknowledgeParams;
  export {RecipientVerification, RecipientVerificationResource};
  export import TransactionListParams = V2Namespace14.MoneyManagement.TransactionListParams;
  export import TransactionRetrieveParams = V2Namespace14.MoneyManagement.TransactionRetrieveParams;
  export import TransactionUpdateParams = V2Namespace14.MoneyManagement.TransactionUpdateParams;
  export import TransactionRefreshRegulatoryReceiptParams = V2Namespace14.MoneyManagement.TransactionRefreshRegulatoryReceiptParams;
  export {Transaction, TransactionResource};
  export import TransactionEntryListParams = V2Namespace15.MoneyManagement.TransactionEntryListParams;
  export import TransactionEntryRetrieveParams = V2Namespace15.MoneyManagement.TransactionEntryRetrieveParams;
  export {TransactionEntry, TransactionEntryResource};
  export {FinancialAddressCreditSimulation};
  export {FinancialAddressGeneratedMicrodeposits};
  export {TestHelpers};
}
