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
  OutboundSetupIntent,
  OutboundSetupIntentResource,
} from './OutboundSetupIntents.js';
import {
  V2 as V2Namespace6,
  PayoutIntent,
  PayoutIntentResource,
} from './PayoutIntents.js';
import {
  V2 as V2Namespace7,
  PayoutMethod,
  PayoutMethodResource,
} from './PayoutMethods.js';
import {
  V2 as V2Namespace8,
  PayoutMethodsBankAccountSpec,
  PayoutMethodsBankAccountSpecResource,
} from './PayoutMethodsBankAccountSpec.js';
import {
  V2 as V2Namespace9,
  ReceivedCredit,
  ReceivedCreditResource,
} from './ReceivedCredits.js';
import {
  V2 as V2Namespace10,
  RecipientVerification,
  RecipientVerificationResource,
} from './RecipientVerifications.js';
import {
  V2 as V2Namespace11,
  Transaction,
  TransactionResource,
} from './Transactions.js';
import {
  V2 as V2Namespace12,
  TransactionEntry,
  TransactionEntryResource,
} from './TransactionEntries.js';
import {FinancialAddressCreditSimulation} from './FinancialAddressCreditSimulations.js';
import {TestHelpers} from './TestHelpers/index.js';

export {Adjustment} from './Adjustments.js';
export {FinancialAccount} from './FinancialAccounts.js';
export {FinancialAddress} from './FinancialAddresses.js';
export {InboundTransfer} from './InboundTransfers.js';
export {OutboundPayment} from './OutboundPayments.js';
export {OutboundSetupIntent} from './OutboundSetupIntents.js';
export {PayoutIntent} from './PayoutIntents.js';
export {PayoutMethod} from './PayoutMethods.js';
export {PayoutMethodsBankAccountSpec} from './PayoutMethodsBankAccountSpec.js';
export {ReceivedCredit} from './ReceivedCredits.js';
export {RecipientVerification} from './RecipientVerifications.js';
export {Transaction} from './Transactions.js';
export {TransactionEntry} from './TransactionEntries.js';
export {FinancialAddressCreditSimulation} from './FinancialAddressCreditSimulations.js';

export class MoneyManagement {
  adjustments: AdjustmentResource;
  financialAccounts: FinancialAccountResource;
  financialAddresses: FinancialAddressResource;
  inboundTransfers: InboundTransferResource;
  outboundPayments: OutboundPaymentResource;
  outboundSetupIntents: OutboundSetupIntentResource;
  payoutIntents: PayoutIntentResource;
  payoutMethods: PayoutMethodResource;
  payoutMethodsBankAccountSpecs: PayoutMethodsBankAccountSpecResource;
  receivedCredits: ReceivedCreditResource;
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
    this.outboundSetupIntents = new OutboundSetupIntentResource(stripe);
    this.payoutIntents = new PayoutIntentResource(stripe);
    this.payoutMethods = new PayoutMethodResource(stripe);
    this.payoutMethodsBankAccountSpecs = new PayoutMethodsBankAccountSpecResource(
      stripe
    );
    this.receivedCredits = new ReceivedCreditResource(stripe);
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
  export import FinancialAccountRetrieveParams = V2Namespace1.MoneyManagement.FinancialAccountRetrieveParams;
  export import FinancialAccountUpdateParams = V2Namespace1.MoneyManagement.FinancialAccountUpdateParams;
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
  export import OutboundSetupIntentListParams = V2Namespace5.MoneyManagement.OutboundSetupIntentListParams;
  export import OutboundSetupIntentCreateParams = V2Namespace5.MoneyManagement.OutboundSetupIntentCreateParams;
  export import OutboundSetupIntentRetrieveParams = V2Namespace5.MoneyManagement.OutboundSetupIntentRetrieveParams;
  export import OutboundSetupIntentUpdateParams = V2Namespace5.MoneyManagement.OutboundSetupIntentUpdateParams;
  export import OutboundSetupIntentCancelParams = V2Namespace5.MoneyManagement.OutboundSetupIntentCancelParams;
  export {OutboundSetupIntent, OutboundSetupIntentResource};
  export import PayoutIntentListParams = V2Namespace6.MoneyManagement.PayoutIntentListParams;
  export import PayoutIntentCreateParams = V2Namespace6.MoneyManagement.PayoutIntentCreateParams;
  export import PayoutIntentRetrieveParams = V2Namespace6.MoneyManagement.PayoutIntentRetrieveParams;
  export import PayoutIntentUpdateParams = V2Namespace6.MoneyManagement.PayoutIntentUpdateParams;
  export import PayoutIntentCancelParams = V2Namespace6.MoneyManagement.PayoutIntentCancelParams;
  export import PayoutIntentConfirmParams = V2Namespace6.MoneyManagement.PayoutIntentConfirmParams;
  export import PayoutIntentRefreshFxQuoteParams = V2Namespace6.MoneyManagement.PayoutIntentRefreshFxQuoteParams;
  export import PayoutIntentRefreshRecipientVerificationParams = V2Namespace6.MoneyManagement.PayoutIntentRefreshRecipientVerificationParams;
  export {PayoutIntent, PayoutIntentResource};
  export import PayoutMethodListParams = V2Namespace7.MoneyManagement.PayoutMethodListParams;
  export import PayoutMethodRetrieveParams = V2Namespace7.MoneyManagement.PayoutMethodRetrieveParams;
  export import PayoutMethodArchiveParams = V2Namespace7.MoneyManagement.PayoutMethodArchiveParams;
  export import PayoutMethodUnarchiveParams = V2Namespace7.MoneyManagement.PayoutMethodUnarchiveParams;
  export {PayoutMethod, PayoutMethodResource};
  export import PayoutMethodsBankAccountSpecRetrieveParams = V2Namespace8.MoneyManagement.PayoutMethodsBankAccountSpecRetrieveParams;
  export {PayoutMethodsBankAccountSpec, PayoutMethodsBankAccountSpecResource};
  export import ReceivedCreditListParams = V2Namespace9.MoneyManagement.ReceivedCreditListParams;
  export import ReceivedCreditRetrieveParams = V2Namespace9.MoneyManagement.ReceivedCreditRetrieveParams;
  export {ReceivedCredit, ReceivedCreditResource};
  export import RecipientVerificationCreateParams = V2Namespace10.MoneyManagement.RecipientVerificationCreateParams;
  export import RecipientVerificationRetrieveParams = V2Namespace10.MoneyManagement.RecipientVerificationRetrieveParams;
  export import RecipientVerificationAcknowledgeParams = V2Namespace10.MoneyManagement.RecipientVerificationAcknowledgeParams;
  export {RecipientVerification, RecipientVerificationResource};
  export import TransactionListParams = V2Namespace11.MoneyManagement.TransactionListParams;
  export import TransactionRetrieveParams = V2Namespace11.MoneyManagement.TransactionRetrieveParams;
  export import TransactionUpdateParams = V2Namespace11.MoneyManagement.TransactionUpdateParams;
  export import TransactionRefreshRegulatoryReceiptParams = V2Namespace11.MoneyManagement.TransactionRefreshRegulatoryReceiptParams;
  export {Transaction, TransactionResource};
  export import TransactionEntryListParams = V2Namespace12.MoneyManagement.TransactionEntryListParams;
  export import TransactionEntryRetrieveParams = V2Namespace12.MoneyManagement.TransactionEntryRetrieveParams;
  export {TransactionEntry, TransactionEntryResource};
  export {FinancialAddressCreditSimulation};
  export {TestHelpers};
}
