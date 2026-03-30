// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {Adjustment, AdjustmentResource} from './Adjustments.js';
import {
  CurrencyConversion,
  CurrencyConversionResource,
} from './CurrencyConversions.js';
import {
  FinancialAccount,
  FinancialAccountResource,
} from './FinancialAccounts.js';
import {
  FinancialAddress,
  FinancialAddressResource,
} from './FinancialAddresses.js';
import {InboundTransfer, InboundTransferResource} from './InboundTransfers.js';
import {OutboundPayment, OutboundPaymentResource} from './OutboundPayments.js';
import {
  OutboundPaymentQuote,
  OutboundPaymentQuoteResource,
} from './OutboundPaymentQuotes.js';
import {
  OutboundSetupIntent,
  OutboundSetupIntentResource,
} from './OutboundSetupIntents.js';
import {
  OutboundTransfer,
  OutboundTransferResource,
} from './OutboundTransfers.js';
import {PayoutMethod, PayoutMethodResource} from './PayoutMethods.js';
import {
  PayoutMethodsBankAccountSpec,
  PayoutMethodsBankAccountSpecResource,
} from './PayoutMethodsBankAccountSpec.js';
import {ReceivedCredit, ReceivedCreditResource} from './ReceivedCredits.js';
import {ReceivedDebit, ReceivedDebitResource} from './ReceivedDebits.js';
import {
  RecipientVerification,
  RecipientVerificationResource,
} from './RecipientVerifications.js';
import {Transaction, TransactionResource} from './Transactions.js';
import {
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
  export {Adjustment};
  export {CurrencyConversion};
  export {FinancialAccount};
  export {FinancialAddress};
  export {InboundTransfer};
  export {OutboundPayment};
  export {OutboundPaymentQuote};
  export {OutboundSetupIntent};
  export {OutboundTransfer};
  export {PayoutMethod};
  export {PayoutMethodsBankAccountSpec};
  export {ReceivedCredit};
  export {ReceivedDebit};
  export {RecipientVerification};
  export {Transaction};
  export {TransactionEntry};
}
