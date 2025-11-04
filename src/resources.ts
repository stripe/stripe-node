// File generated from our OpenAPI spec

import {resourceNamespace} from './ResourceNamespace.js';
import {AccountsResource as FinancialConnectionsAccounts} from './resources/FinancialConnections/Accounts.js';
import {ActiveEntitlementsResource as EntitlementsActiveEntitlements} from './resources/Entitlements/ActiveEntitlements.js';
import {AlertsResource as BillingAlerts} from './resources/Billing/Alerts.js';
import {AuthorizationsResource as IssuingAuthorizations} from './resources/Issuing/Authorizations.js';
import {AuthorizationsResource as TestHelpersIssuingAuthorizations} from './resources/TestHelpers/Issuing/Authorizations.js';
import {CalculationsResource as TaxCalculations} from './resources/Tax/Calculations.js';
import {CardholdersResource as IssuingCardholders} from './resources/Issuing/Cardholders.js';
import {CardsResource as IssuingCards} from './resources/Issuing/Cards.js';
import {CardsResource as TestHelpersIssuingCards} from './resources/TestHelpers/Issuing/Cards.js';
import {ConfigurationsResource as BillingPortalConfigurations} from './resources/BillingPortal/Configurations.js';
import {ConfigurationsResource as TerminalConfigurations} from './resources/Terminal/Configurations.js';
import {ConfirmationTokensResource as TestHelpersConfirmationTokens} from './resources/TestHelpers/ConfirmationTokens.js';
import {ConnectionTokensResource as TerminalConnectionTokens} from './resources/Terminal/ConnectionTokens.js';
import {CreditBalanceSummaryResource as BillingCreditBalanceSummary} from './resources/Billing/CreditBalanceSummary.js';
import {CreditBalanceTransactionsResource as BillingCreditBalanceTransactions} from './resources/Billing/CreditBalanceTransactions.js';
import {CreditGrantsResource as BillingCreditGrants} from './resources/Billing/CreditGrants.js';
import {CreditReversalsResource as TreasuryCreditReversals} from './resources/Treasury/CreditReversals.js';
import {CustomersResource as TestHelpersCustomers} from './resources/TestHelpers/Customers.js';
import {DebitReversalsResource as TreasuryDebitReversals} from './resources/Treasury/DebitReversals.js';
import {DisputesResource as IssuingDisputes} from './resources/Issuing/Disputes.js';
import {EarlyFraudWarningsResource as RadarEarlyFraudWarnings} from './resources/Radar/EarlyFraudWarnings.js';
import {EventDestinationsResource as V2CoreEventDestinations} from './resources/V2/Core/EventDestinations.js';
import {EventsResource as V2CoreEvents} from './resources/V2/Core/Events.js';
import {FeaturesResource as EntitlementsFeatures} from './resources/Entitlements/Features.js';
import {FinancialAccountsResource as TreasuryFinancialAccounts} from './resources/Treasury/FinancialAccounts.js';
import {InboundTransfersResource as TestHelpersTreasuryInboundTransfers} from './resources/TestHelpers/Treasury/InboundTransfers.js';
import {InboundTransfersResource as TreasuryInboundTransfers} from './resources/Treasury/InboundTransfers.js';
import {LocationsResource as TerminalLocations} from './resources/Terminal/Locations.js';
import {MeterEventAdjustmentsResource as BillingMeterEventAdjustments} from './resources/Billing/MeterEventAdjustments.js';
import {MeterEventAdjustmentsResource as V2BillingMeterEventAdjustments} from './resources/V2/Billing/MeterEventAdjustments.js';
import {MeterEventSessionResource as V2BillingMeterEventSession} from './resources/V2/Billing/MeterEventSession.js';
import {MeterEventStreamResource as V2BillingMeterEventStream} from './resources/V2/Billing/MeterEventStream.js';
import {MeterEventsResource as BillingMeterEvents} from './resources/Billing/MeterEvents.js';
import {MeterEventsResource as V2BillingMeterEvents} from './resources/V2/Billing/MeterEvents.js';
import {MetersResource as BillingMeters} from './resources/Billing/Meters.js';
import {OrdersResource as ClimateOrders} from './resources/Climate/Orders.js';
import {OutboundPaymentsResource as TestHelpersTreasuryOutboundPayments} from './resources/TestHelpers/Treasury/OutboundPayments.js';
import {OutboundPaymentsResource as TreasuryOutboundPayments} from './resources/Treasury/OutboundPayments.js';
import {OutboundTransfersResource as TestHelpersTreasuryOutboundTransfers} from './resources/TestHelpers/Treasury/OutboundTransfers.js';
import {OutboundTransfersResource as TreasuryOutboundTransfers} from './resources/Treasury/OutboundTransfers.js';
import {PersonalizationDesignsResource as IssuingPersonalizationDesigns} from './resources/Issuing/PersonalizationDesigns.js';
import {PersonalizationDesignsResource as TestHelpersIssuingPersonalizationDesigns} from './resources/TestHelpers/Issuing/PersonalizationDesigns.js';
import {PhysicalBundlesResource as IssuingPhysicalBundles} from './resources/Issuing/PhysicalBundles.js';
import {ProductsResource as ClimateProducts} from './resources/Climate/Products.js';
import {ReadersResource as TerminalReaders} from './resources/Terminal/Readers.js';
import {ReadersResource as TestHelpersTerminalReaders} from './resources/TestHelpers/Terminal/Readers.js';
import {ReceivedCreditsResource as TestHelpersTreasuryReceivedCredits} from './resources/TestHelpers/Treasury/ReceivedCredits.js';
import {ReceivedCreditsResource as TreasuryReceivedCredits} from './resources/Treasury/ReceivedCredits.js';
import {ReceivedDebitsResource as TestHelpersTreasuryReceivedDebits} from './resources/TestHelpers/Treasury/ReceivedDebits.js';
import {ReceivedDebitsResource as TreasuryReceivedDebits} from './resources/Treasury/ReceivedDebits.js';
import {RefundsResource as TestHelpersRefunds} from './resources/TestHelpers/Refunds.js';
import {RegistrationsResource as TaxRegistrations} from './resources/Tax/Registrations.js';
import {ReportRunsResource as ReportingReportRuns} from './resources/Reporting/ReportRuns.js';
import {ReportTypesResource as ReportingReportTypes} from './resources/Reporting/ReportTypes.js';
import {RequestsResource as ForwardingRequests} from './resources/Forwarding/Requests.js';
import {ScheduledQueryRunsResource as SigmaScheduledQueryRuns} from './resources/Sigma/ScheduledQueryRuns.js';
import {SecretsResource as AppsSecrets} from './resources/Apps/Secrets.js';
import {SessionsResource as BillingPortalSessions} from './resources/BillingPortal/Sessions.js';
import {SessionsResource as CheckoutSessions} from './resources/Checkout/Sessions.js';
import {SessionsResource as FinancialConnectionsSessions} from './resources/FinancialConnections/Sessions.js';
import {SettingsResource as TaxSettings} from './resources/Tax/Settings.js';
import {SuppliersResource as ClimateSuppliers} from './resources/Climate/Suppliers.js';
import {TestClocksResource as TestHelpersTestClocks} from './resources/TestHelpers/TestClocks.js';
import {TokensResource as IssuingTokens} from './resources/Issuing/Tokens.js';
import {TransactionEntriesResource as TreasuryTransactionEntries} from './resources/Treasury/TransactionEntries.js';
import {TransactionsResource as FinancialConnectionsTransactions} from './resources/FinancialConnections/Transactions.js';
import {TransactionsResource as IssuingTransactions} from './resources/Issuing/Transactions.js';
import {TransactionsResource as TaxTransactions} from './resources/Tax/Transactions.js';
import {TransactionsResource as TestHelpersIssuingTransactions} from './resources/TestHelpers/Issuing/Transactions.js';
import {TransactionsResource as TreasuryTransactions} from './resources/Treasury/Transactions.js';
import {ValueListItemsResource as RadarValueListItems} from './resources/Radar/ValueListItems.js';
import {ValueListsResource as RadarValueLists} from './resources/Radar/ValueLists.js';
import {VerificationReportsResource as IdentityVerificationReports} from './resources/Identity/VerificationReports.js';
import {VerificationSessionsResource as IdentityVerificationSessions} from './resources/Identity/VerificationSessions.js';
export {Accounts as Account} from './resources/Accounts.js';
export {AccountLinks} from './resources/AccountLinks.js';
export {AccountSessions} from './resources/AccountSessions.js';
export {Accounts} from './resources/Accounts.js';
export {ApplePayDomains} from './resources/ApplePayDomains.js';
export {ApplicationFees} from './resources/ApplicationFees.js';
export {Balance} from './resources/Balance.js';
export {BalanceSettings} from './resources/BalanceSettings.js';
export {BalanceTransactions} from './resources/BalanceTransactions.js';
export {Charges} from './resources/Charges.js';
export {ConfirmationTokens} from './resources/ConfirmationTokens.js';
export {CountrySpecs} from './resources/CountrySpecs.js';
export {Coupons} from './resources/Coupons.js';
export {CreditNotes} from './resources/CreditNotes.js';
export {CustomerSessions} from './resources/CustomerSessions.js';
export {Customers} from './resources/Customers.js';
export {Disputes} from './resources/Disputes.js';
export {EphemeralKeys} from './resources/EphemeralKeys.js';
export {Events} from './resources/Events.js';
export {ExchangeRates} from './resources/ExchangeRates.js';
export {FileLinks} from './resources/FileLinks.js';
export {Files} from './resources/Files.js';
export {InvoiceItems} from './resources/InvoiceItems.js';
export {InvoicePayments} from './resources/InvoicePayments.js';
export {InvoiceRenderingTemplates} from './resources/InvoiceRenderingTemplates.js';
export {Invoices} from './resources/Invoices.js';
export {Mandates} from './resources/Mandates.js';
export {OAuth} from './resources/OAuth.js';
export {PaymentAttemptRecords} from './resources/PaymentAttemptRecords.js';
export {PaymentIntents} from './resources/PaymentIntents.js';
export {PaymentLinks} from './resources/PaymentLinks.js';
export {PaymentMethodConfigurations} from './resources/PaymentMethodConfigurations.js';
export {PaymentMethodDomains} from './resources/PaymentMethodDomains.js';
export {PaymentMethods} from './resources/PaymentMethods.js';
export {PaymentRecords} from './resources/PaymentRecords.js';
export {Payouts} from './resources/Payouts.js';
export {Plans} from './resources/Plans.js';
export {Prices} from './resources/Prices.js';
export {Products} from './resources/Products.js';
export {PromotionCodes} from './resources/PromotionCodes.js';
export {Quotes} from './resources/Quotes.js';
export {Refunds} from './resources/Refunds.js';
export {Reviews} from './resources/Reviews.js';
export {SetupAttempts} from './resources/SetupAttempts.js';
export {SetupIntents} from './resources/SetupIntents.js';
export {ShippingRates} from './resources/ShippingRates.js';
export {Sources} from './resources/Sources.js';
export {SubscriptionItems} from './resources/SubscriptionItems.js';
export {SubscriptionSchedules} from './resources/SubscriptionSchedules.js';
export {Subscriptions} from './resources/Subscriptions.js';
export {TaxCodes} from './resources/TaxCodes.js';
export {TaxIds} from './resources/TaxIds.js';
export {TaxRates} from './resources/TaxRates.js';
export {Tokens} from './resources/Tokens.js';
export {Topups} from './resources/Topups.js';
export {Transfers} from './resources/Transfers.js';
export {WebhookEndpoints} from './resources/WebhookEndpoints.js';
export const Apps = resourceNamespace('apps', {Secrets: AppsSecrets});
export const Billing = resourceNamespace('billing', {
  Alerts: BillingAlerts,
  CreditBalanceSummary: BillingCreditBalanceSummary,
  CreditBalanceTransactions: BillingCreditBalanceTransactions,
  CreditGrants: BillingCreditGrants,
  MeterEventAdjustments: BillingMeterEventAdjustments,
  MeterEvents: BillingMeterEvents,
  Meters: BillingMeters,
});
export const BillingPortal = resourceNamespace('billingPortal', {
  Configurations: BillingPortalConfigurations,
  Sessions: BillingPortalSessions,
});
export const Checkout = resourceNamespace('checkout', {
  Sessions: CheckoutSessions,
});
export const Climate = resourceNamespace('climate', {
  Orders: ClimateOrders,
  Products: ClimateProducts,
  Suppliers: ClimateSuppliers,
});
export const Entitlements = resourceNamespace('entitlements', {
  ActiveEntitlements: EntitlementsActiveEntitlements,
  Features: EntitlementsFeatures,
});
export const FinancialConnections = resourceNamespace('financialConnections', {
  Accounts: FinancialConnectionsAccounts,
  Sessions: FinancialConnectionsSessions,
  Transactions: FinancialConnectionsTransactions,
});
export const Forwarding = resourceNamespace('forwarding', {
  Requests: ForwardingRequests,
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
  PersonalizationDesigns: IssuingPersonalizationDesigns,
  PhysicalBundles: IssuingPhysicalBundles,
  Tokens: IssuingTokens,
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
export const Tax = resourceNamespace('tax', {
  Calculations: TaxCalculations,
  Registrations: TaxRegistrations,
  Settings: TaxSettings,
  Transactions: TaxTransactions,
});
export const Terminal = resourceNamespace('terminal', {
  Configurations: TerminalConfigurations,
  ConnectionTokens: TerminalConnectionTokens,
  Locations: TerminalLocations,
  Readers: TerminalReaders,
});
export const TestHelpers = resourceNamespace('testHelpers', {
  ConfirmationTokens: TestHelpersConfirmationTokens,
  Customers: TestHelpersCustomers,
  Refunds: TestHelpersRefunds,
  TestClocks: TestHelpersTestClocks,
  Issuing: resourceNamespace('issuing', {
    Authorizations: TestHelpersIssuingAuthorizations,
    Cards: TestHelpersIssuingCards,
    PersonalizationDesigns: TestHelpersIssuingPersonalizationDesigns,
    Transactions: TestHelpersIssuingTransactions,
  }),
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
export const V2 = resourceNamespace('v2', {
  Billing: resourceNamespace('billing', {
    MeterEventAdjustments: V2BillingMeterEventAdjustments,
    MeterEventSession: V2BillingMeterEventSession,
    MeterEventStream: V2BillingMeterEventStream,
    MeterEvents: V2BillingMeterEvents,
  }),
  Core: resourceNamespace('core', {
    EventDestinations: V2CoreEventDestinations,
    Events: V2CoreEvents,
  }),
});
