// File generated from our OpenAPI spec
import { resourceNamespace } from './ResourceNamespace.js';
import { Accounts as FinancialConnectionsAccounts } from './resources/FinancialConnections/Accounts.js';
import { Authorizations as IssuingAuthorizations } from './resources/Issuing/Authorizations.js';
import { Cardholders as IssuingCardholders } from './resources/Issuing/Cardholders.js';
import { Cards as TestHelpersIssuingCards } from './resources/TestHelpers/Issuing/Cards.js';
import { Cards as IssuingCards } from './resources/Issuing/Cards.js';
import { Configurations as BillingPortalConfigurations } from './resources/BillingPortal/Configurations.js';
import { Configurations as TerminalConfigurations } from './resources/Terminal/Configurations.js';
import { ConnectionTokens as TerminalConnectionTokens } from './resources/Terminal/ConnectionTokens.js';
import { CreditReversals as TreasuryCreditReversals } from './resources/Treasury/CreditReversals.js';
import { Customers as TestHelpersCustomers } from './resources/TestHelpers/Customers.js';
import { DebitReversals as TreasuryDebitReversals } from './resources/Treasury/DebitReversals.js';
import { Disputes as IssuingDisputes } from './resources/Issuing/Disputes.js';
import { EarlyFraudWarnings as RadarEarlyFraudWarnings } from './resources/Radar/EarlyFraudWarnings.js';
import { FinancialAccounts as TreasuryFinancialAccounts } from './resources/Treasury/FinancialAccounts.js';
import { InboundTransfers as TestHelpersTreasuryInboundTransfers } from './resources/TestHelpers/Treasury/InboundTransfers.js';
import { InboundTransfers as TreasuryInboundTransfers } from './resources/Treasury/InboundTransfers.js';
import { Locations as TerminalLocations } from './resources/Terminal/Locations.js';
import { OutboundPayments as TestHelpersTreasuryOutboundPayments } from './resources/TestHelpers/Treasury/OutboundPayments.js';
import { OutboundPayments as TreasuryOutboundPayments } from './resources/Treasury/OutboundPayments.js';
import { OutboundTransfers as TestHelpersTreasuryOutboundTransfers } from './resources/TestHelpers/Treasury/OutboundTransfers.js';
import { OutboundTransfers as TreasuryOutboundTransfers } from './resources/Treasury/OutboundTransfers.js';
import { Readers as TestHelpersTerminalReaders } from './resources/TestHelpers/Terminal/Readers.js';
import { Readers as TerminalReaders } from './resources/Terminal/Readers.js';
import { ReceivedCredits as TestHelpersTreasuryReceivedCredits } from './resources/TestHelpers/Treasury/ReceivedCredits.js';
import { ReceivedCredits as TreasuryReceivedCredits } from './resources/Treasury/ReceivedCredits.js';
import { ReceivedDebits as TestHelpersTreasuryReceivedDebits } from './resources/TestHelpers/Treasury/ReceivedDebits.js';
import { ReceivedDebits as TreasuryReceivedDebits } from './resources/Treasury/ReceivedDebits.js';
import { Refunds as TestHelpersRefunds } from './resources/TestHelpers/Refunds.js';
import { ReportRuns as ReportingReportRuns } from './resources/Reporting/ReportRuns.js';
import { ReportTypes as ReportingReportTypes } from './resources/Reporting/ReportTypes.js';
import { ScheduledQueryRuns as SigmaScheduledQueryRuns } from './resources/Sigma/ScheduledQueryRuns.js';
import { Secrets as AppsSecrets } from './resources/Apps/Secrets.js';
import { Sessions as BillingPortalSessions } from './resources/BillingPortal/Sessions.js';
import { Sessions as CheckoutSessions } from './resources/Checkout/Sessions.js';
import { Sessions as FinancialConnectionsSessions } from './resources/FinancialConnections/Sessions.js';
import { TestClocks as TestHelpersTestClocks } from './resources/TestHelpers/TestClocks.js';
import { TransactionEntries as TreasuryTransactionEntries } from './resources/Treasury/TransactionEntries.js';
import { Transactions as IssuingTransactions } from './resources/Issuing/Transactions.js';
import { Transactions as TreasuryTransactions } from './resources/Treasury/Transactions.js';
import { ValueListItems as RadarValueListItems } from './resources/Radar/ValueListItems.js';
import { ValueLists as RadarValueLists } from './resources/Radar/ValueLists.js';
import { VerificationReports as IdentityVerificationReports } from './resources/Identity/VerificationReports.js';
import { VerificationSessions as IdentityVerificationSessions } from './resources/Identity/VerificationSessions.js';
export { Accounts as Account } from './resources/Accounts.js';
export { OAuth } from './resources/OAuth.js';
export { Accounts } from './resources/Accounts.js';
export { AccountLinks } from './resources/AccountLinks.js';
export { ApplePayDomains } from './resources/ApplePayDomains.js';
export { ApplicationFees } from './resources/ApplicationFees.js';
export { Balance } from './resources/Balance.js';
export { BalanceTransactions } from './resources/BalanceTransactions.js';
export { Charges } from './resources/Charges.js';
export { CountrySpecs } from './resources/CountrySpecs.js';
export { Coupons } from './resources/Coupons.js';
export { CreditNotes } from './resources/CreditNotes.js';
export { Customers } from './resources/Customers.js';
export { Disputes } from './resources/Disputes.js';
export { EphemeralKeys } from './resources/EphemeralKeys.js';
export { Events } from './resources/Events.js';
export { ExchangeRates } from './resources/ExchangeRates.js';
export { Files } from './resources/Files.js';
export { FileLinks } from './resources/FileLinks.js';
export { Invoices } from './resources/Invoices.js';
export { InvoiceItems } from './resources/InvoiceItems.js';
export { Mandates } from './resources/Mandates.js';
export { PaymentIntents } from './resources/PaymentIntents.js';
export { PaymentLinks } from './resources/PaymentLinks.js';
export { PaymentMethods } from './resources/PaymentMethods.js';
export { Payouts } from './resources/Payouts.js';
export { Plans } from './resources/Plans.js';
export { Prices } from './resources/Prices.js';
export { Products } from './resources/Products.js';
export { PromotionCodes } from './resources/PromotionCodes.js';
export { Quotes } from './resources/Quotes.js';
export { Refunds } from './resources/Refunds.js';
export { Reviews } from './resources/Reviews.js';
export { SetupAttempts } from './resources/SetupAttempts.js';
export { SetupIntents } from './resources/SetupIntents.js';
export { ShippingRates } from './resources/ShippingRates.js';
export { Sources } from './resources/Sources.js';
export { Subscriptions } from './resources/Subscriptions.js';
export { SubscriptionItems } from './resources/SubscriptionItems.js';
export { SubscriptionSchedules } from './resources/SubscriptionSchedules.js';
export { TaxCodes } from './resources/TaxCodes.js';
export { TaxRates } from './resources/TaxRates.js';
export { Tokens } from './resources/Tokens.js';
export { Topups } from './resources/Topups.js';
export { Transfers } from './resources/Transfers.js';
export { WebhookEndpoints } from './resources/WebhookEndpoints.js';
export const Apps = resourceNamespace('apps', { Secrets: AppsSecrets });
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
    Issuing: resourceNamespace('issuing', { Cards: TestHelpersIssuingCards }),
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
