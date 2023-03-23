"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialConnections = exports.Checkout = exports.BillingPortal = exports.Apps = exports.WebhookEndpoints = exports.Transfers = exports.Topups = exports.Tokens = exports.TaxRates = exports.TaxCodes = exports.SubscriptionSchedules = exports.SubscriptionItems = exports.Subscriptions = exports.Sources = exports.ShippingRates = exports.SetupIntents = exports.SetupAttempts = exports.Reviews = exports.Refunds = exports.Quotes = exports.PromotionCodes = exports.Products = exports.Prices = exports.Plans = exports.Payouts = exports.PaymentMethods = exports.PaymentLinks = exports.PaymentIntents = exports.Mandates = exports.InvoiceItems = exports.Invoices = exports.FileLinks = exports.Files = exports.ExchangeRates = exports.Events = exports.EphemeralKeys = exports.Disputes = exports.Customers = exports.CreditNotes = exports.Coupons = exports.CountrySpecs = exports.Charges = exports.BalanceTransactions = exports.Balance = exports.ApplicationFees = exports.ApplePayDomains = exports.AccountLinks = exports.Accounts = exports.OAuth = exports.Account = void 0;
exports.Treasury = exports.TestHelpers = exports.Terminal = exports.Tax = exports.Sigma = exports.Reporting = exports.Radar = exports.Issuing = exports.Identity = void 0;
const ResourceNamespace_js_1 = require("./ResourceNamespace.js");
const Accounts_js_1 = require("./resources/FinancialConnections/Accounts.js");
const Authorizations_js_1 = require("./resources/Issuing/Authorizations.js");
const Calculations_js_1 = require("./resources/Tax/Calculations.js");
const Cardholders_js_1 = require("./resources/Issuing/Cardholders.js");
const Cards_js_1 = require("./resources/TestHelpers/Issuing/Cards.js");
const Cards_js_2 = require("./resources/Issuing/Cards.js");
const Configurations_js_1 = require("./resources/BillingPortal/Configurations.js");
const Configurations_js_2 = require("./resources/Terminal/Configurations.js");
const ConnectionTokens_js_1 = require("./resources/Terminal/ConnectionTokens.js");
const CreditReversals_js_1 = require("./resources/Treasury/CreditReversals.js");
const Customers_js_1 = require("./resources/TestHelpers/Customers.js");
const DebitReversals_js_1 = require("./resources/Treasury/DebitReversals.js");
const Disputes_js_1 = require("./resources/Issuing/Disputes.js");
const EarlyFraudWarnings_js_1 = require("./resources/Radar/EarlyFraudWarnings.js");
const FinancialAccounts_js_1 = require("./resources/Treasury/FinancialAccounts.js");
const InboundTransfers_js_1 = require("./resources/TestHelpers/Treasury/InboundTransfers.js");
const InboundTransfers_js_2 = require("./resources/Treasury/InboundTransfers.js");
const Locations_js_1 = require("./resources/Terminal/Locations.js");
const OutboundPayments_js_1 = require("./resources/TestHelpers/Treasury/OutboundPayments.js");
const OutboundPayments_js_2 = require("./resources/Treasury/OutboundPayments.js");
const OutboundTransfers_js_1 = require("./resources/TestHelpers/Treasury/OutboundTransfers.js");
const OutboundTransfers_js_2 = require("./resources/Treasury/OutboundTransfers.js");
const Readers_js_1 = require("./resources/TestHelpers/Terminal/Readers.js");
const Readers_js_2 = require("./resources/Terminal/Readers.js");
const ReceivedCredits_js_1 = require("./resources/TestHelpers/Treasury/ReceivedCredits.js");
const ReceivedCredits_js_2 = require("./resources/Treasury/ReceivedCredits.js");
const ReceivedDebits_js_1 = require("./resources/TestHelpers/Treasury/ReceivedDebits.js");
const ReceivedDebits_js_2 = require("./resources/Treasury/ReceivedDebits.js");
const Refunds_js_1 = require("./resources/TestHelpers/Refunds.js");
const ReportRuns_js_1 = require("./resources/Reporting/ReportRuns.js");
const ReportTypes_js_1 = require("./resources/Reporting/ReportTypes.js");
const ScheduledQueryRuns_js_1 = require("./resources/Sigma/ScheduledQueryRuns.js");
const Secrets_js_1 = require("./resources/Apps/Secrets.js");
const Sessions_js_1 = require("./resources/BillingPortal/Sessions.js");
const Sessions_js_2 = require("./resources/Checkout/Sessions.js");
const Sessions_js_3 = require("./resources/FinancialConnections/Sessions.js");
const TestClocks_js_1 = require("./resources/TestHelpers/TestClocks.js");
const TransactionEntries_js_1 = require("./resources/Treasury/TransactionEntries.js");
const Transactions_js_1 = require("./resources/Issuing/Transactions.js");
const Transactions_js_2 = require("./resources/Tax/Transactions.js");
const Transactions_js_3 = require("./resources/Treasury/Transactions.js");
const ValueListItems_js_1 = require("./resources/Radar/ValueListItems.js");
const ValueLists_js_1 = require("./resources/Radar/ValueLists.js");
const VerificationReports_js_1 = require("./resources/Identity/VerificationReports.js");
const VerificationSessions_js_1 = require("./resources/Identity/VerificationSessions.js");
var Accounts_js_2 = require("./resources/Accounts.js");
Object.defineProperty(exports, "Account", { enumerable: true, get: function () { return Accounts_js_2.Accounts; } });
var OAuth_js_1 = require("./resources/OAuth.js");
Object.defineProperty(exports, "OAuth", { enumerable: true, get: function () { return OAuth_js_1.OAuth; } });
var Accounts_js_3 = require("./resources/Accounts.js");
Object.defineProperty(exports, "Accounts", { enumerable: true, get: function () { return Accounts_js_3.Accounts; } });
var AccountLinks_js_1 = require("./resources/AccountLinks.js");
Object.defineProperty(exports, "AccountLinks", { enumerable: true, get: function () { return AccountLinks_js_1.AccountLinks; } });
var ApplePayDomains_js_1 = require("./resources/ApplePayDomains.js");
Object.defineProperty(exports, "ApplePayDomains", { enumerable: true, get: function () { return ApplePayDomains_js_1.ApplePayDomains; } });
var ApplicationFees_js_1 = require("./resources/ApplicationFees.js");
Object.defineProperty(exports, "ApplicationFees", { enumerable: true, get: function () { return ApplicationFees_js_1.ApplicationFees; } });
var Balance_js_1 = require("./resources/Balance.js");
Object.defineProperty(exports, "Balance", { enumerable: true, get: function () { return Balance_js_1.Balance; } });
var BalanceTransactions_js_1 = require("./resources/BalanceTransactions.js");
Object.defineProperty(exports, "BalanceTransactions", { enumerable: true, get: function () { return BalanceTransactions_js_1.BalanceTransactions; } });
var Charges_js_1 = require("./resources/Charges.js");
Object.defineProperty(exports, "Charges", { enumerable: true, get: function () { return Charges_js_1.Charges; } });
var CountrySpecs_js_1 = require("./resources/CountrySpecs.js");
Object.defineProperty(exports, "CountrySpecs", { enumerable: true, get: function () { return CountrySpecs_js_1.CountrySpecs; } });
var Coupons_js_1 = require("./resources/Coupons.js");
Object.defineProperty(exports, "Coupons", { enumerable: true, get: function () { return Coupons_js_1.Coupons; } });
var CreditNotes_js_1 = require("./resources/CreditNotes.js");
Object.defineProperty(exports, "CreditNotes", { enumerable: true, get: function () { return CreditNotes_js_1.CreditNotes; } });
var Customers_js_2 = require("./resources/Customers.js");
Object.defineProperty(exports, "Customers", { enumerable: true, get: function () { return Customers_js_2.Customers; } });
var Disputes_js_2 = require("./resources/Disputes.js");
Object.defineProperty(exports, "Disputes", { enumerable: true, get: function () { return Disputes_js_2.Disputes; } });
var EphemeralKeys_js_1 = require("./resources/EphemeralKeys.js");
Object.defineProperty(exports, "EphemeralKeys", { enumerable: true, get: function () { return EphemeralKeys_js_1.EphemeralKeys; } });
var Events_js_1 = require("./resources/Events.js");
Object.defineProperty(exports, "Events", { enumerable: true, get: function () { return Events_js_1.Events; } });
var ExchangeRates_js_1 = require("./resources/ExchangeRates.js");
Object.defineProperty(exports, "ExchangeRates", { enumerable: true, get: function () { return ExchangeRates_js_1.ExchangeRates; } });
var Files_js_1 = require("./resources/Files.js");
Object.defineProperty(exports, "Files", { enumerable: true, get: function () { return Files_js_1.Files; } });
var FileLinks_js_1 = require("./resources/FileLinks.js");
Object.defineProperty(exports, "FileLinks", { enumerable: true, get: function () { return FileLinks_js_1.FileLinks; } });
var Invoices_js_1 = require("./resources/Invoices.js");
Object.defineProperty(exports, "Invoices", { enumerable: true, get: function () { return Invoices_js_1.Invoices; } });
var InvoiceItems_js_1 = require("./resources/InvoiceItems.js");
Object.defineProperty(exports, "InvoiceItems", { enumerable: true, get: function () { return InvoiceItems_js_1.InvoiceItems; } });
var Mandates_js_1 = require("./resources/Mandates.js");
Object.defineProperty(exports, "Mandates", { enumerable: true, get: function () { return Mandates_js_1.Mandates; } });
var PaymentIntents_js_1 = require("./resources/PaymentIntents.js");
Object.defineProperty(exports, "PaymentIntents", { enumerable: true, get: function () { return PaymentIntents_js_1.PaymentIntents; } });
var PaymentLinks_js_1 = require("./resources/PaymentLinks.js");
Object.defineProperty(exports, "PaymentLinks", { enumerable: true, get: function () { return PaymentLinks_js_1.PaymentLinks; } });
var PaymentMethods_js_1 = require("./resources/PaymentMethods.js");
Object.defineProperty(exports, "PaymentMethods", { enumerable: true, get: function () { return PaymentMethods_js_1.PaymentMethods; } });
var Payouts_js_1 = require("./resources/Payouts.js");
Object.defineProperty(exports, "Payouts", { enumerable: true, get: function () { return Payouts_js_1.Payouts; } });
var Plans_js_1 = require("./resources/Plans.js");
Object.defineProperty(exports, "Plans", { enumerable: true, get: function () { return Plans_js_1.Plans; } });
var Prices_js_1 = require("./resources/Prices.js");
Object.defineProperty(exports, "Prices", { enumerable: true, get: function () { return Prices_js_1.Prices; } });
var Products_js_1 = require("./resources/Products.js");
Object.defineProperty(exports, "Products", { enumerable: true, get: function () { return Products_js_1.Products; } });
var PromotionCodes_js_1 = require("./resources/PromotionCodes.js");
Object.defineProperty(exports, "PromotionCodes", { enumerable: true, get: function () { return PromotionCodes_js_1.PromotionCodes; } });
var Quotes_js_1 = require("./resources/Quotes.js");
Object.defineProperty(exports, "Quotes", { enumerable: true, get: function () { return Quotes_js_1.Quotes; } });
var Refunds_js_2 = require("./resources/Refunds.js");
Object.defineProperty(exports, "Refunds", { enumerable: true, get: function () { return Refunds_js_2.Refunds; } });
var Reviews_js_1 = require("./resources/Reviews.js");
Object.defineProperty(exports, "Reviews", { enumerable: true, get: function () { return Reviews_js_1.Reviews; } });
var SetupAttempts_js_1 = require("./resources/SetupAttempts.js");
Object.defineProperty(exports, "SetupAttempts", { enumerable: true, get: function () { return SetupAttempts_js_1.SetupAttempts; } });
var SetupIntents_js_1 = require("./resources/SetupIntents.js");
Object.defineProperty(exports, "SetupIntents", { enumerable: true, get: function () { return SetupIntents_js_1.SetupIntents; } });
var ShippingRates_js_1 = require("./resources/ShippingRates.js");
Object.defineProperty(exports, "ShippingRates", { enumerable: true, get: function () { return ShippingRates_js_1.ShippingRates; } });
var Sources_js_1 = require("./resources/Sources.js");
Object.defineProperty(exports, "Sources", { enumerable: true, get: function () { return Sources_js_1.Sources; } });
var Subscriptions_js_1 = require("./resources/Subscriptions.js");
Object.defineProperty(exports, "Subscriptions", { enumerable: true, get: function () { return Subscriptions_js_1.Subscriptions; } });
var SubscriptionItems_js_1 = require("./resources/SubscriptionItems.js");
Object.defineProperty(exports, "SubscriptionItems", { enumerable: true, get: function () { return SubscriptionItems_js_1.SubscriptionItems; } });
var SubscriptionSchedules_js_1 = require("./resources/SubscriptionSchedules.js");
Object.defineProperty(exports, "SubscriptionSchedules", { enumerable: true, get: function () { return SubscriptionSchedules_js_1.SubscriptionSchedules; } });
var TaxCodes_js_1 = require("./resources/TaxCodes.js");
Object.defineProperty(exports, "TaxCodes", { enumerable: true, get: function () { return TaxCodes_js_1.TaxCodes; } });
var TaxRates_js_1 = require("./resources/TaxRates.js");
Object.defineProperty(exports, "TaxRates", { enumerable: true, get: function () { return TaxRates_js_1.TaxRates; } });
var Tokens_js_1 = require("./resources/Tokens.js");
Object.defineProperty(exports, "Tokens", { enumerable: true, get: function () { return Tokens_js_1.Tokens; } });
var Topups_js_1 = require("./resources/Topups.js");
Object.defineProperty(exports, "Topups", { enumerable: true, get: function () { return Topups_js_1.Topups; } });
var Transfers_js_1 = require("./resources/Transfers.js");
Object.defineProperty(exports, "Transfers", { enumerable: true, get: function () { return Transfers_js_1.Transfers; } });
var WebhookEndpoints_js_1 = require("./resources/WebhookEndpoints.js");
Object.defineProperty(exports, "WebhookEndpoints", { enumerable: true, get: function () { return WebhookEndpoints_js_1.WebhookEndpoints; } });
exports.Apps = (0, ResourceNamespace_js_1.resourceNamespace)('apps', { Secrets: Secrets_js_1.Secrets });
exports.BillingPortal = (0, ResourceNamespace_js_1.resourceNamespace)('billingPortal', {
    Configurations: Configurations_js_1.Configurations,
    Sessions: Sessions_js_1.Sessions,
});
exports.Checkout = (0, ResourceNamespace_js_1.resourceNamespace)('checkout', {
    Sessions: Sessions_js_2.Sessions,
});
exports.FinancialConnections = (0, ResourceNamespace_js_1.resourceNamespace)('financialConnections', {
    Accounts: Accounts_js_1.Accounts,
    Sessions: Sessions_js_3.Sessions,
});
exports.Identity = (0, ResourceNamespace_js_1.resourceNamespace)('identity', {
    VerificationReports: VerificationReports_js_1.VerificationReports,
    VerificationSessions: VerificationSessions_js_1.VerificationSessions,
});
exports.Issuing = (0, ResourceNamespace_js_1.resourceNamespace)('issuing', {
    Authorizations: Authorizations_js_1.Authorizations,
    Cardholders: Cardholders_js_1.Cardholders,
    Cards: Cards_js_2.Cards,
    Disputes: Disputes_js_1.Disputes,
    Transactions: Transactions_js_1.Transactions,
});
exports.Radar = (0, ResourceNamespace_js_1.resourceNamespace)('radar', {
    EarlyFraudWarnings: EarlyFraudWarnings_js_1.EarlyFraudWarnings,
    ValueListItems: ValueListItems_js_1.ValueListItems,
    ValueLists: ValueLists_js_1.ValueLists,
});
exports.Reporting = (0, ResourceNamespace_js_1.resourceNamespace)('reporting', {
    ReportRuns: ReportRuns_js_1.ReportRuns,
    ReportTypes: ReportTypes_js_1.ReportTypes,
});
exports.Sigma = (0, ResourceNamespace_js_1.resourceNamespace)('sigma', {
    ScheduledQueryRuns: ScheduledQueryRuns_js_1.ScheduledQueryRuns,
});
exports.Tax = (0, ResourceNamespace_js_1.resourceNamespace)('tax', {
    Calculations: Calculations_js_1.Calculations,
    Transactions: Transactions_js_2.Transactions,
});
exports.Terminal = (0, ResourceNamespace_js_1.resourceNamespace)('terminal', {
    Configurations: Configurations_js_2.Configurations,
    ConnectionTokens: ConnectionTokens_js_1.ConnectionTokens,
    Locations: Locations_js_1.Locations,
    Readers: Readers_js_2.Readers,
});
exports.TestHelpers = (0, ResourceNamespace_js_1.resourceNamespace)('testHelpers', {
    Customers: Customers_js_1.Customers,
    Refunds: Refunds_js_1.Refunds,
    TestClocks: TestClocks_js_1.TestClocks,
    Issuing: (0, ResourceNamespace_js_1.resourceNamespace)('issuing', { Cards: Cards_js_1.Cards }),
    Terminal: (0, ResourceNamespace_js_1.resourceNamespace)('terminal', {
        Readers: Readers_js_1.Readers,
    }),
    Treasury: (0, ResourceNamespace_js_1.resourceNamespace)('treasury', {
        InboundTransfers: InboundTransfers_js_1.InboundTransfers,
        OutboundPayments: OutboundPayments_js_1.OutboundPayments,
        OutboundTransfers: OutboundTransfers_js_1.OutboundTransfers,
        ReceivedCredits: ReceivedCredits_js_1.ReceivedCredits,
        ReceivedDebits: ReceivedDebits_js_1.ReceivedDebits,
    }),
});
exports.Treasury = (0, ResourceNamespace_js_1.resourceNamespace)('treasury', {
    CreditReversals: CreditReversals_js_1.CreditReversals,
    DebitReversals: DebitReversals_js_1.DebitReversals,
    FinancialAccounts: FinancialAccounts_js_1.FinancialAccounts,
    InboundTransfers: InboundTransfers_js_2.InboundTransfers,
    OutboundPayments: OutboundPayments_js_2.OutboundPayments,
    OutboundTransfers: OutboundTransfers_js_2.OutboundTransfers,
    ReceivedCredits: ReceivedCredits_js_2.ReceivedCredits,
    ReceivedDebits: ReceivedDebits_js_2.ReceivedDebits,
    TransactionEntries: TransactionEntries_js_1.TransactionEntries,
    Transactions: Transactions_js_3.Transactions,
});
