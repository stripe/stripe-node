// File generated from our OpenAPI spec

'use strict';

import {resourceNamespace} from './ResourceNamespace';

import {Accounts as FinancialConnectionsAccounts} from './resources/FinancialConnections/Accounts';
import {Authorizations as IssuingAuthorizations} from './resources/Issuing/Authorizations';
import {Cardholders as IssuingCardholders} from './resources/Issuing/Cardholders';
import {Cards as TestHelpersIssuingCards} from './resources/TestHelpers/Issuing/Cards';
import {Cards as IssuingCards} from './resources/Issuing/Cards';
import {Configurations as BillingPortalConfigurations} from './resources/BillingPortal/Configurations';
import {Configurations as TerminalConfigurations} from './resources/Terminal/Configurations';
import {ConnectionTokens as TerminalConnectionTokens} from './resources/Terminal/ConnectionTokens';
import {CreditReversals as TreasuryCreditReversals} from './resources/Treasury/CreditReversals';
import {Customers as TestHelpersCustomers} from './resources/TestHelpers/Customers';
import {DebitReversals as TreasuryDebitReversals} from './resources/Treasury/DebitReversals';
import {Disputes as IssuingDisputes} from './resources/Issuing/Disputes';
import {EarlyFraudWarnings as RadarEarlyFraudWarnings} from './resources/Radar/EarlyFraudWarnings';
import {FinancialAccounts as TreasuryFinancialAccounts} from './resources/Treasury/FinancialAccounts';
import {InboundTransfers as TestHelpersTreasuryInboundTransfers} from './resources/TestHelpers/Treasury/InboundTransfers';
import {InboundTransfers as TreasuryInboundTransfers} from './resources/Treasury/InboundTransfers';
import {Locations as TerminalLocations} from './resources/Terminal/Locations';
import {OutboundPayments as TestHelpersTreasuryOutboundPayments} from './resources/TestHelpers/Treasury/OutboundPayments';
import {OutboundPayments as TreasuryOutboundPayments} from './resources/Treasury/OutboundPayments';
import {OutboundTransfers as TestHelpersTreasuryOutboundTransfers} from './resources/TestHelpers/Treasury/OutboundTransfers';
import {OutboundTransfers as TreasuryOutboundTransfers} from './resources/Treasury/OutboundTransfers';
import {Readers as TestHelpersTerminalReaders} from './resources/TestHelpers/Terminal/Readers';
import {Readers as TerminalReaders} from './resources/Terminal/Readers';
import {ReceivedCredits as TestHelpersTreasuryReceivedCredits} from './resources/TestHelpers/Treasury/ReceivedCredits';
import {ReceivedCredits as TreasuryReceivedCredits} from './resources/Treasury/ReceivedCredits';
import {ReceivedDebits as TestHelpersTreasuryReceivedDebits} from './resources/TestHelpers/Treasury/ReceivedDebits';
import {ReceivedDebits as TreasuryReceivedDebits} from './resources/Treasury/ReceivedDebits';
import {Refunds as TestHelpersRefunds} from './resources/TestHelpers/Refunds';
import {ReportRuns as ReportingReportRuns} from './resources/Reporting/ReportRuns';
import {ReportTypes as ReportingReportTypes} from './resources/Reporting/ReportTypes';
import {ScheduledQueryRuns as SigmaScheduledQueryRuns} from './resources/Sigma/ScheduledQueryRuns';
import {Secrets as AppsSecrets} from './resources/Apps/Secrets';
import {Sessions as BillingPortalSessions} from './resources/BillingPortal/Sessions';
import {Sessions as CheckoutSessions} from './resources/Checkout/Sessions';
import {Sessions as FinancialConnectionsSessions} from './resources/FinancialConnections/Sessions';
import {TestClocks as TestHelpersTestClocks} from './resources/TestHelpers/TestClocks';
import {TransactionEntries as TreasuryTransactionEntries} from './resources/Treasury/TransactionEntries';
import {Transactions as IssuingTransactions} from './resources/Issuing/Transactions';
import {Transactions as TreasuryTransactions} from './resources/Treasury/Transactions';
import {ValueListItems as RadarValueListItems} from './resources/Radar/ValueListItems';
import {ValueLists as RadarValueLists} from './resources/Radar/ValueLists';
import {VerificationReports as IdentityVerificationReports} from './resources/Identity/VerificationReports';
import {VerificationSessions as IdentityVerificationSessions} from './resources/Identity/VerificationSessions';

export {Accounts as Account} from './resources/Accounts';
export {OAuth} from './resources/OAuth';
export {Accounts} from './resources/Accounts';
export {AccountLinks} from './resources/AccountLinks';
export {ApplePayDomains} from './resources/ApplePayDomains';
export {ApplicationFees} from './resources/ApplicationFees';
export {Balance} from './resources/Balance';
export {BalanceTransactions} from './resources/BalanceTransactions';
export {Charges} from './resources/Charges';
export {CountrySpecs} from './resources/CountrySpecs';
export {Coupons} from './resources/Coupons';
export {CreditNotes} from './resources/CreditNotes';
export {Customers} from './resources/Customers';
export {Disputes} from './resources/Disputes';
export {EphemeralKeys} from './resources/EphemeralKeys';
export {Events} from './resources/Events';
export {ExchangeRates} from './resources/ExchangeRates';
export {Files} from './resources/Files';
export {FileLinks} from './resources/FileLinks';
export {Invoices} from './resources/Invoices';
export {InvoiceItems} from './resources/InvoiceItems';
export {Mandates} from './resources/Mandates';
export {PaymentIntents} from './resources/PaymentIntents';
export {PaymentLinks} from './resources/PaymentLinks';
export {PaymentMethods} from './resources/PaymentMethods';
export {Payouts} from './resources/Payouts';
export {Plans} from './resources/Plans';
export {Prices} from './resources/Prices';
export {Products} from './resources/Products';
export {PromotionCodes} from './resources/PromotionCodes';
export {Quotes} from './resources/Quotes';
export {Refunds} from './resources/Refunds';
export {Reviews} from './resources/Reviews';
export {SetupAttempts} from './resources/SetupAttempts';
export {SetupIntents} from './resources/SetupIntents';
export {ShippingRates} from './resources/ShippingRates';
export {Sources} from './resources/Sources';
export {Subscriptions} from './resources/Subscriptions';
export {SubscriptionItems} from './resources/SubscriptionItems';
export {SubscriptionSchedules} from './resources/SubscriptionSchedules';
export {TaxCodes} from './resources/TaxCodes';
export {TaxRates} from './resources/TaxRates';
export {Tokens} from './resources/Tokens';
export {Topups} from './resources/Topups';
export {Transfers} from './resources/Transfers';
export {WebhookEndpoints} from './resources/WebhookEndpoints';

export const Apps = resourceNamespace('apps', {Secrets: AppsSecrets});
export const BillingPortal = resourceNamespace('billingPortal', {
  Configurations: BillingPortalConfigurations,
  Sessions: BillingPortalSessions,
});
export const Checkout = resourceNamespace('checkout', {
  Sessions: CheckoutSessions,
});
export const FinancialConnections = resourceNamespace('financialConnections', {
  Accounts: FinancialConnectionsAccounts,
  Sessions: FinancialConnectionsSessions,
});
export const Identity = resourceNamespace('identity', {
  VerificationReports: IdentityVerificationReports,
  VerificationSessions: IdentityVerificationSessions,
});
export const Issuing = resourceNamespace('issuing', {
  Authorizations: IssuingAuthorizations,
  Cardholders: IssuingCardholders,
  Cards: IssuingCards,
  Disputes: IssuingDisputes,
  Transactions: IssuingTransactions,
});
export const Radar = resourceNamespace('radar', {
  EarlyFraudWarnings: RadarEarlyFraudWarnings,
  ValueListItems: RadarValueListItems,
  ValueLists: RadarValueLists,
});
export const Reporting = resourceNamespace('reporting', {
  ReportRuns: ReportingReportRuns,
  ReportTypes: ReportingReportTypes,
});
export const Sigma = resourceNamespace('sigma', {
  ScheduledQueryRuns: SigmaScheduledQueryRuns,
});
export const Terminal = resourceNamespace('terminal', {
  Configurations: TerminalConfigurations,
  ConnectionTokens: TerminalConnectionTokens,
  Locations: TerminalLocations,
  Readers: TerminalReaders,
});
export const TestHelpers = resourceNamespace('testHelpers', {
  Customers: TestHelpersCustomers,
  Refunds: TestHelpersRefunds,
  TestClocks: TestHelpersTestClocks,
  Issuing: resourceNamespace('issuing', {Cards: TestHelpersIssuingCards}),
  Terminal: resourceNamespace('terminal', {
    Readers: TestHelpersTerminalReaders,
  }),
  Treasury: resourceNamespace('treasury', {
    InboundTransfers: TestHelpersTreasuryInboundTransfers,
    OutboundPayments: TestHelpersTreasuryOutboundPayments,
    OutboundTransfers: TestHelpersTreasuryOutboundTransfers,
    ReceivedCredits: TestHelpersTreasuryReceivedCredits,
    ReceivedDebits: TestHelpersTreasuryReceivedDebits,
  }),
});
export const Treasury = resourceNamespace('treasury', {
  CreditReversals: TreasuryCreditReversals,
  DebitReversals: TreasuryDebitReversals,
  FinancialAccounts: TreasuryFinancialAccounts,
  InboundTransfers: TreasuryInboundTransfers,
  OutboundPayments: TreasuryOutboundPayments,
  OutboundTransfers: TreasuryOutboundTransfers,
  ReceivedCredits: TreasuryReceivedCredits,
  ReceivedDebits: TreasuryReceivedDebits,
  TransactionEntries: TreasuryTransactionEntries,
  Transactions: TreasuryTransactions,
});
