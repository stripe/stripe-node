// File generated from our OpenAPI spec
import { resourceNamespace } from './ResourceNamespace.js';
import { AccountLinkResource as V2CoreAccountLinks } from './resources/V2/Core/AccountLinks.js';
import { AccountTokenResource as V2CoreAccountTokens } from './resources/V2/Core/AccountTokens.js';
import { AccountResource as FinancialConnectionsAccounts } from './resources/FinancialConnections/Accounts.js';
import { AccountResource as V2CoreAccounts } from './resources/V2/Core/Accounts.js';
import { ActiveEntitlementResource as EntitlementsActiveEntitlements } from './resources/Entitlements/ActiveEntitlements.js';
import { AlertResource as BillingAlerts } from './resources/Billing/Alerts.js';
import { AssociationResource as TaxAssociations } from './resources/Tax/Associations.js';
import { AuthorizationResource as IssuingAuthorizations } from './resources/Issuing/Authorizations.js';
import { AuthorizationResource as TestHelpersIssuingAuthorizations } from './resources/TestHelpers/Issuing/Authorizations.js';
import { CalculationResource as TaxCalculations } from './resources/Tax/Calculations.js';
import { CardholderResource as IssuingCardholders } from './resources/Issuing/Cardholders.js';
import { CardResource as IssuingCards } from './resources/Issuing/Cards.js';
import { CardResource as TestHelpersIssuingCards } from './resources/TestHelpers/Issuing/Cards.js';
import { ConfigurationResource as BillingPortalConfigurations } from './resources/BillingPortal/Configurations.js';
import { ConfigurationResource as TerminalConfigurations } from './resources/Terminal/Configurations.js';
import { ConfirmationTokenResource as TestHelpersConfirmationTokens } from './resources/TestHelpers/ConfirmationTokens.js';
import { ConnectionTokenResource as TerminalConnectionTokens } from './resources/Terminal/ConnectionTokens.js';
import { CreditBalanceSummaryResource as BillingCreditBalanceSummary } from './resources/Billing/CreditBalanceSummary.js';
import { CreditBalanceTransactionResource as BillingCreditBalanceTransactions } from './resources/Billing/CreditBalanceTransactions.js';
import { CreditGrantResource as BillingCreditGrants } from './resources/Billing/CreditGrants.js';
import { CreditReversalResource as TreasuryCreditReversals } from './resources/Treasury/CreditReversals.js';
import { CustomerResource as TestHelpersCustomers } from './resources/TestHelpers/Customers.js';
import { DebitReversalResource as TreasuryDebitReversals } from './resources/Treasury/DebitReversals.js';
import { DisputeResource as IssuingDisputes } from './resources/Issuing/Disputes.js';
import { EarlyFraudWarningResource as RadarEarlyFraudWarnings } from './resources/Radar/EarlyFraudWarnings.js';
import { EventDestinationResource as V2CoreEventDestinations } from './resources/V2/Core/EventDestinations.js';
import { EventResource as V2CoreEvents } from './resources/V2/Core/Events.js';
import { FeatureResource as EntitlementsFeatures } from './resources/Entitlements/Features.js';
import { FinancialAccountResource as TreasuryFinancialAccounts } from './resources/Treasury/FinancialAccounts.js';
import { InboundTransferResource as TestHelpersTreasuryInboundTransfers } from './resources/TestHelpers/Treasury/InboundTransfers.js';
import { InboundTransferResource as TreasuryInboundTransfers } from './resources/Treasury/InboundTransfers.js';
import { LocationResource as TerminalLocations } from './resources/Terminal/Locations.js';
import { MeterEventAdjustmentResource as BillingMeterEventAdjustments } from './resources/Billing/MeterEventAdjustments.js';
import { MeterEventAdjustmentResource as V2BillingMeterEventAdjustments } from './resources/V2/Billing/MeterEventAdjustments.js';
import { MeterEventSessionResource as V2BillingMeterEventSession } from './resources/V2/Billing/MeterEventSession.js';
import { MeterEventStreamResource as V2BillingMeterEventStream } from './resources/V2/Billing/MeterEventStream.js';
import { MeterEventResource as BillingMeterEvents } from './resources/Billing/MeterEvents.js';
import { MeterEventResource as V2BillingMeterEvents } from './resources/V2/Billing/MeterEvents.js';
import { MeterResource as BillingMeters } from './resources/Billing/Meters.js';
import { OnboardingLinkResource as TerminalOnboardingLinks } from './resources/Terminal/OnboardingLinks.js';
import { OrderResource as ClimateOrders } from './resources/Climate/Orders.js';
import { OutboundPaymentResource as TestHelpersTreasuryOutboundPayments } from './resources/TestHelpers/Treasury/OutboundPayments.js';
import { OutboundPaymentResource as TreasuryOutboundPayments } from './resources/Treasury/OutboundPayments.js';
import { OutboundTransferResource as TestHelpersTreasuryOutboundTransfers } from './resources/TestHelpers/Treasury/OutboundTransfers.js';
import { OutboundTransferResource as TreasuryOutboundTransfers } from './resources/Treasury/OutboundTransfers.js';
import { PersonalizationDesignResource as IssuingPersonalizationDesigns } from './resources/Issuing/PersonalizationDesigns.js';
import { PersonalizationDesignResource as TestHelpersIssuingPersonalizationDesigns } from './resources/TestHelpers/Issuing/PersonalizationDesigns.js';
import { PhysicalBundleResource as IssuingPhysicalBundles } from './resources/Issuing/PhysicalBundles.js';
import { ProductResource as ClimateProducts } from './resources/Climate/Products.js';
import { ReaderResource as TerminalReaders } from './resources/Terminal/Readers.js';
import { ReaderResource as TestHelpersTerminalReaders } from './resources/TestHelpers/Terminal/Readers.js';
import { ReceivedCreditResource as TestHelpersTreasuryReceivedCredits } from './resources/TestHelpers/Treasury/ReceivedCredits.js';
import { ReceivedCreditResource as TreasuryReceivedCredits } from './resources/Treasury/ReceivedCredits.js';
import { ReceivedDebitResource as TestHelpersTreasuryReceivedDebits } from './resources/TestHelpers/Treasury/ReceivedDebits.js';
import { ReceivedDebitResource as TreasuryReceivedDebits } from './resources/Treasury/ReceivedDebits.js';
import { RefundResource as TestHelpersRefunds } from './resources/TestHelpers/Refunds.js';
import { RegistrationResource as TaxRegistrations } from './resources/Tax/Registrations.js';
import { ReportRunResource as ReportingReportRuns } from './resources/Reporting/ReportRuns.js';
import { ReportTypeResource as ReportingReportTypes } from './resources/Reporting/ReportTypes.js';
import { RequestResource as ForwardingRequests } from './resources/Forwarding/Requests.js';
import { ScheduledQueryRunResource as SigmaScheduledQueryRuns } from './resources/Sigma/ScheduledQueryRuns.js';
import { SecretResource as AppsSecrets } from './resources/Apps/Secrets.js';
import { SessionResource as BillingPortalSessions } from './resources/BillingPortal/Sessions.js';
import { SessionResource as CheckoutSessions } from './resources/Checkout/Sessions.js';
import { SessionResource as FinancialConnectionsSessions } from './resources/FinancialConnections/Sessions.js';
import { SettingResource as TaxSettings } from './resources/Tax/Settings.js';
import { SupplierResource as ClimateSuppliers } from './resources/Climate/Suppliers.js';
import { TestClockResource as TestHelpersTestClocks } from './resources/TestHelpers/TestClocks.js';
import { TokenResource as IssuingTokens } from './resources/Issuing/Tokens.js';
import { TransactionEntryResource as TreasuryTransactionEntries } from './resources/Treasury/TransactionEntries.js';
import { TransactionResource as FinancialConnectionsTransactions } from './resources/FinancialConnections/Transactions.js';
import { TransactionResource as IssuingTransactions } from './resources/Issuing/Transactions.js';
import { TransactionResource as TaxTransactions } from './resources/Tax/Transactions.js';
import { TransactionResource as TestHelpersIssuingTransactions } from './resources/TestHelpers/Issuing/Transactions.js';
import { TransactionResource as TreasuryTransactions } from './resources/Treasury/Transactions.js';
import { ValueListItemResource as RadarValueListItems } from './resources/Radar/ValueListItems.js';
import { ValueListResource as RadarValueLists } from './resources/Radar/ValueLists.js';
import { VerificationReportResource as IdentityVerificationReports } from './resources/Identity/VerificationReports.js';
import { VerificationSessionResource as IdentityVerificationSessions } from './resources/Identity/VerificationSessions.js';
export { AccountResource as Account } from './resources/Accounts.js';
export { AccountResource as Accounts } from './resources/Accounts.js';
export { AccountLinkResource as AccountLinks } from './resources/AccountLinks.js';
export { AccountSessionResource as AccountSessions } from './resources/AccountSessions.js';
export { ApplePayDomainResource as ApplePayDomains } from './resources/ApplePayDomains.js';
export { ApplicationFeeResource as ApplicationFees } from './resources/ApplicationFees.js';
export { BalanceResource as Balance } from './resources/Balance.js';
export { BalanceResource as Balances } from './resources/Balance.js';
export { BalanceSettingResource as BalanceSettings } from './resources/BalanceSettings.js';
export { BalanceTransactionResource as BalanceTransactions } from './resources/BalanceTransactions.js';
export { ChargeResource as Charges } from './resources/Charges.js';
export { ConfirmationTokenResource as ConfirmationTokens } from './resources/ConfirmationTokens.js';
export { CountrySpecResource as CountrySpecs } from './resources/CountrySpecs.js';
export { CouponResource as Coupons } from './resources/Coupons.js';
export { CreditNoteResource as CreditNotes } from './resources/CreditNotes.js';
export { CustomerResource as Customers } from './resources/Customers.js';
export { CustomerSessionResource as CustomerSessions } from './resources/CustomerSessions.js';
export { DisputeResource as Disputes } from './resources/Disputes.js';
export { EphemeralKeyResource as EphemeralKeys } from './resources/EphemeralKeys.js';
export { EventResource as Events } from './resources/Events.js';
export { ExchangeRateResource as ExchangeRates } from './resources/ExchangeRates.js';
export { FileResource as Files } from './resources/Files.js';
export { FileLinkResource as FileLinks } from './resources/FileLinks.js';
export { InvoiceResource as Invoices } from './resources/Invoices.js';
export { InvoiceItemResource as InvoiceItems } from './resources/InvoiceItems.js';
export { InvoicePaymentResource as InvoicePayments } from './resources/InvoicePayments.js';
export { InvoiceRenderingTemplateResource as InvoiceRenderingTemplates } from './resources/InvoiceRenderingTemplates.js';
export { MandateResource as Mandates } from './resources/Mandates.js';
export { OAuthResource } from './resources/OAuth.js';
export { PaymentAttemptRecordResource as PaymentAttemptRecords } from './resources/PaymentAttemptRecords.js';
export { PaymentIntentResource as PaymentIntents } from './resources/PaymentIntents.js';
export { PaymentLinkResource as PaymentLinks } from './resources/PaymentLinks.js';
export { PaymentMethodResource as PaymentMethods } from './resources/PaymentMethods.js';
export { PaymentMethodConfigurationResource as PaymentMethodConfigurations } from './resources/PaymentMethodConfigurations.js';
export { PaymentMethodDomainResource as PaymentMethodDomains } from './resources/PaymentMethodDomains.js';
export { PaymentRecordResource as PaymentRecords } from './resources/PaymentRecords.js';
export { PayoutResource as Payouts } from './resources/Payouts.js';
export { PlanResource as Plans } from './resources/Plans.js';
export { PriceResource as Prices } from './resources/Prices.js';
export { ProductResource as Products } from './resources/Products.js';
export { PromotionCodeResource as PromotionCodes } from './resources/PromotionCodes.js';
export { QuoteResource as Quotes } from './resources/Quotes.js';
export { RefundResource as Refunds } from './resources/Refunds.js';
export { ReviewResource as Reviews } from './resources/Reviews.js';
export { SetupAttemptResource as SetupAttempts } from './resources/SetupAttempts.js';
export { SetupIntentResource as SetupIntents } from './resources/SetupIntents.js';
export { ShippingRateResource as ShippingRates } from './resources/ShippingRates.js';
export { SourceResource as Sources } from './resources/Sources.js';
export { SubscriptionResource as Subscriptions } from './resources/Subscriptions.js';
export { SubscriptionItemResource as SubscriptionItems } from './resources/SubscriptionItems.js';
export { SubscriptionScheduleResource as SubscriptionSchedules } from './resources/SubscriptionSchedules.js';
export { TaxCodeResource as TaxCodes } from './resources/TaxCodes.js';
export { TaxIdResource as TaxIds } from './resources/TaxIds.js';
export { TaxRateResource as TaxRates } from './resources/TaxRates.js';
export { TokenResource as Tokens } from './resources/Tokens.js';
export { TopupResource as Topups } from './resources/Topups.js';
export { TransferResource as Transfers } from './resources/Transfers.js';
export { WebhookEndpointResource as WebhookEndpoints } from './resources/WebhookEndpoints.js';
export const Apps = resourceNamespace('apps', { Secrets: AppsSecrets });
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
    Associations: TaxAssociations,
    Calculations: TaxCalculations,
    Registrations: TaxRegistrations,
    Settings: TaxSettings,
    Transactions: TaxTransactions,
});
export const Terminal = resourceNamespace('terminal', {
    Configurations: TerminalConfigurations,
    ConnectionTokens: TerminalConnectionTokens,
    Locations: TerminalLocations,
    OnboardingLinks: TerminalOnboardingLinks,
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
        AccountLinks: V2CoreAccountLinks,
        AccountTokens: V2CoreAccountTokens,
        Accounts: V2CoreAccounts,
        EventDestinations: V2CoreEventDestinations,
        Events: V2CoreEvents,
    }),
});
//# sourceMappingURL=resources.js.map