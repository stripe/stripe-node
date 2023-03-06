// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialConnections = exports.Checkout = exports.BillingPortal = exports.Apps = exports.WebhookEndpoints = exports.Transfers = exports.Topups = exports.Tokens = exports.TaxRates = exports.TaxCodes = exports.SubscriptionSchedules = exports.SubscriptionItems = exports.Subscriptions = exports.Sources = exports.ShippingRates = exports.SetupIntents = exports.SetupAttempts = exports.Reviews = exports.Refunds = exports.Quotes = exports.PromotionCodes = exports.Products = exports.Prices = exports.Plans = exports.Payouts = exports.PaymentMethods = exports.PaymentLinks = exports.PaymentIntents = exports.Mandates = exports.InvoiceItems = exports.Invoices = exports.FileLinks = exports.Files = exports.ExchangeRates = exports.Events = exports.EphemeralKeys = exports.Disputes = exports.Customers = exports.CreditNotes = exports.Coupons = exports.CountrySpecs = exports.Charges = exports.BalanceTransactions = exports.Balance = exports.ApplicationFees = exports.ApplePayDomains = exports.AccountLinks = exports.Accounts = exports.OAuth = exports.Account = void 0;
exports.Treasury = exports.TestHelpers = exports.Terminal = exports.Sigma = exports.Reporting = exports.Radar = exports.Issuing = exports.Identity = void 0;
const ResourceNamespace_1 = require("./ResourceNamespace");
const Accounts_1 = require("./resources/FinancialConnections/Accounts");
const Authorizations_1 = require("./resources/Issuing/Authorizations");
const Cardholders_1 = require("./resources/Issuing/Cardholders");
const Cards_1 = require("./resources/TestHelpers/Issuing/Cards");
const Cards_2 = require("./resources/Issuing/Cards");
const Configurations_1 = require("./resources/BillingPortal/Configurations");
const Configurations_2 = require("./resources/Terminal/Configurations");
const ConnectionTokens_1 = require("./resources/Terminal/ConnectionTokens");
const CreditReversals_1 = require("./resources/Treasury/CreditReversals");
const Customers_1 = require("./resources/TestHelpers/Customers");
const DebitReversals_1 = require("./resources/Treasury/DebitReversals");
const Disputes_1 = require("./resources/Issuing/Disputes");
const EarlyFraudWarnings_1 = require("./resources/Radar/EarlyFraudWarnings");
const FinancialAccounts_1 = require("./resources/Treasury/FinancialAccounts");
const InboundTransfers_1 = require("./resources/TestHelpers/Treasury/InboundTransfers");
const InboundTransfers_2 = require("./resources/Treasury/InboundTransfers");
const Locations_1 = require("./resources/Terminal/Locations");
const OutboundPayments_1 = require("./resources/TestHelpers/Treasury/OutboundPayments");
const OutboundPayments_2 = require("./resources/Treasury/OutboundPayments");
const OutboundTransfers_1 = require("./resources/TestHelpers/Treasury/OutboundTransfers");
const OutboundTransfers_2 = require("./resources/Treasury/OutboundTransfers");
const Readers_1 = require("./resources/TestHelpers/Terminal/Readers");
const Readers_2 = require("./resources/Terminal/Readers");
const ReceivedCredits_1 = require("./resources/TestHelpers/Treasury/ReceivedCredits");
const ReceivedCredits_2 = require("./resources/Treasury/ReceivedCredits");
const ReceivedDebits_1 = require("./resources/TestHelpers/Treasury/ReceivedDebits");
const ReceivedDebits_2 = require("./resources/Treasury/ReceivedDebits");
const Refunds_1 = require("./resources/TestHelpers/Refunds");
const ReportRuns_1 = require("./resources/Reporting/ReportRuns");
const ReportTypes_1 = require("./resources/Reporting/ReportTypes");
const ScheduledQueryRuns_1 = require("./resources/Sigma/ScheduledQueryRuns");
const Secrets_1 = require("./resources/Apps/Secrets");
const Sessions_1 = require("./resources/BillingPortal/Sessions");
const Sessions_2 = require("./resources/Checkout/Sessions");
const Sessions_3 = require("./resources/FinancialConnections/Sessions");
const TestClocks_1 = require("./resources/TestHelpers/TestClocks");
const TransactionEntries_1 = require("./resources/Treasury/TransactionEntries");
const Transactions_1 = require("./resources/Issuing/Transactions");
const Transactions_2 = require("./resources/Treasury/Transactions");
const ValueListItems_1 = require("./resources/Radar/ValueListItems");
const ValueLists_1 = require("./resources/Radar/ValueLists");
const VerificationReports_1 = require("./resources/Identity/VerificationReports");
const VerificationSessions_1 = require("./resources/Identity/VerificationSessions");
var Accounts_2 = require("./resources/Accounts");
Object.defineProperty(exports, "Account", { enumerable: true, get: function () { return Accounts_2.Accounts; } });
var OAuth_1 = require("./resources/OAuth");
Object.defineProperty(exports, "OAuth", { enumerable: true, get: function () { return OAuth_1.OAuth; } });
var Accounts_3 = require("./resources/Accounts");
Object.defineProperty(exports, "Accounts", { enumerable: true, get: function () { return Accounts_3.Accounts; } });
var AccountLinks_1 = require("./resources/AccountLinks");
Object.defineProperty(exports, "AccountLinks", { enumerable: true, get: function () { return AccountLinks_1.AccountLinks; } });
var ApplePayDomains_1 = require("./resources/ApplePayDomains");
Object.defineProperty(exports, "ApplePayDomains", { enumerable: true, get: function () { return ApplePayDomains_1.ApplePayDomains; } });
var ApplicationFees_1 = require("./resources/ApplicationFees");
Object.defineProperty(exports, "ApplicationFees", { enumerable: true, get: function () { return ApplicationFees_1.ApplicationFees; } });
var Balance_1 = require("./resources/Balance");
Object.defineProperty(exports, "Balance", { enumerable: true, get: function () { return Balance_1.Balance; } });
var BalanceTransactions_1 = require("./resources/BalanceTransactions");
Object.defineProperty(exports, "BalanceTransactions", { enumerable: true, get: function () { return BalanceTransactions_1.BalanceTransactions; } });
var Charges_1 = require("./resources/Charges");
Object.defineProperty(exports, "Charges", { enumerable: true, get: function () { return Charges_1.Charges; } });
var CountrySpecs_1 = require("./resources/CountrySpecs");
Object.defineProperty(exports, "CountrySpecs", { enumerable: true, get: function () { return CountrySpecs_1.CountrySpecs; } });
var Coupons_1 = require("./resources/Coupons");
Object.defineProperty(exports, "Coupons", { enumerable: true, get: function () { return Coupons_1.Coupons; } });
var CreditNotes_1 = require("./resources/CreditNotes");
Object.defineProperty(exports, "CreditNotes", { enumerable: true, get: function () { return CreditNotes_1.CreditNotes; } });
var Customers_2 = require("./resources/Customers");
Object.defineProperty(exports, "Customers", { enumerable: true, get: function () { return Customers_2.Customers; } });
var Disputes_2 = require("./resources/Disputes");
Object.defineProperty(exports, "Disputes", { enumerable: true, get: function () { return Disputes_2.Disputes; } });
var EphemeralKeys_1 = require("./resources/EphemeralKeys");
Object.defineProperty(exports, "EphemeralKeys", { enumerable: true, get: function () { return EphemeralKeys_1.EphemeralKeys; } });
var Events_1 = require("./resources/Events");
Object.defineProperty(exports, "Events", { enumerable: true, get: function () { return Events_1.Events; } });
var ExchangeRates_1 = require("./resources/ExchangeRates");
Object.defineProperty(exports, "ExchangeRates", { enumerable: true, get: function () { return ExchangeRates_1.ExchangeRates; } });
var Files_1 = require("./resources/Files");
Object.defineProperty(exports, "Files", { enumerable: true, get: function () { return Files_1.Files; } });
var FileLinks_1 = require("./resources/FileLinks");
Object.defineProperty(exports, "FileLinks", { enumerable: true, get: function () { return FileLinks_1.FileLinks; } });
var Invoices_1 = require("./resources/Invoices");
Object.defineProperty(exports, "Invoices", { enumerable: true, get: function () { return Invoices_1.Invoices; } });
var InvoiceItems_1 = require("./resources/InvoiceItems");
Object.defineProperty(exports, "InvoiceItems", { enumerable: true, get: function () { return InvoiceItems_1.InvoiceItems; } });
var Mandates_1 = require("./resources/Mandates");
Object.defineProperty(exports, "Mandates", { enumerable: true, get: function () { return Mandates_1.Mandates; } });
var PaymentIntents_1 = require("./resources/PaymentIntents");
Object.defineProperty(exports, "PaymentIntents", { enumerable: true, get: function () { return PaymentIntents_1.PaymentIntents; } });
var PaymentLinks_1 = require("./resources/PaymentLinks");
Object.defineProperty(exports, "PaymentLinks", { enumerable: true, get: function () { return PaymentLinks_1.PaymentLinks; } });
var PaymentMethods_1 = require("./resources/PaymentMethods");
Object.defineProperty(exports, "PaymentMethods", { enumerable: true, get: function () { return PaymentMethods_1.PaymentMethods; } });
var Payouts_1 = require("./resources/Payouts");
Object.defineProperty(exports, "Payouts", { enumerable: true, get: function () { return Payouts_1.Payouts; } });
var Plans_1 = require("./resources/Plans");
Object.defineProperty(exports, "Plans", { enumerable: true, get: function () { return Plans_1.Plans; } });
var Prices_1 = require("./resources/Prices");
Object.defineProperty(exports, "Prices", { enumerable: true, get: function () { return Prices_1.Prices; } });
var Products_1 = require("./resources/Products");
Object.defineProperty(exports, "Products", { enumerable: true, get: function () { return Products_1.Products; } });
var PromotionCodes_1 = require("./resources/PromotionCodes");
Object.defineProperty(exports, "PromotionCodes", { enumerable: true, get: function () { return PromotionCodes_1.PromotionCodes; } });
var Quotes_1 = require("./resources/Quotes");
Object.defineProperty(exports, "Quotes", { enumerable: true, get: function () { return Quotes_1.Quotes; } });
var Refunds_2 = require("./resources/Refunds");
Object.defineProperty(exports, "Refunds", { enumerable: true, get: function () { return Refunds_2.Refunds; } });
var Reviews_1 = require("./resources/Reviews");
Object.defineProperty(exports, "Reviews", { enumerable: true, get: function () { return Reviews_1.Reviews; } });
var SetupAttempts_1 = require("./resources/SetupAttempts");
Object.defineProperty(exports, "SetupAttempts", { enumerable: true, get: function () { return SetupAttempts_1.SetupAttempts; } });
var SetupIntents_1 = require("./resources/SetupIntents");
Object.defineProperty(exports, "SetupIntents", { enumerable: true, get: function () { return SetupIntents_1.SetupIntents; } });
var ShippingRates_1 = require("./resources/ShippingRates");
Object.defineProperty(exports, "ShippingRates", { enumerable: true, get: function () { return ShippingRates_1.ShippingRates; } });
var Sources_1 = require("./resources/Sources");
Object.defineProperty(exports, "Sources", { enumerable: true, get: function () { return Sources_1.Sources; } });
var Subscriptions_1 = require("./resources/Subscriptions");
Object.defineProperty(exports, "Subscriptions", { enumerable: true, get: function () { return Subscriptions_1.Subscriptions; } });
var SubscriptionItems_1 = require("./resources/SubscriptionItems");
Object.defineProperty(exports, "SubscriptionItems", { enumerable: true, get: function () { return SubscriptionItems_1.SubscriptionItems; } });
var SubscriptionSchedules_1 = require("./resources/SubscriptionSchedules");
Object.defineProperty(exports, "SubscriptionSchedules", { enumerable: true, get: function () { return SubscriptionSchedules_1.SubscriptionSchedules; } });
var TaxCodes_1 = require("./resources/TaxCodes");
Object.defineProperty(exports, "TaxCodes", { enumerable: true, get: function () { return TaxCodes_1.TaxCodes; } });
var TaxRates_1 = require("./resources/TaxRates");
Object.defineProperty(exports, "TaxRates", { enumerable: true, get: function () { return TaxRates_1.TaxRates; } });
var Tokens_1 = require("./resources/Tokens");
Object.defineProperty(exports, "Tokens", { enumerable: true, get: function () { return Tokens_1.Tokens; } });
var Topups_1 = require("./resources/Topups");
Object.defineProperty(exports, "Topups", { enumerable: true, get: function () { return Topups_1.Topups; } });
var Transfers_1 = require("./resources/Transfers");
Object.defineProperty(exports, "Transfers", { enumerable: true, get: function () { return Transfers_1.Transfers; } });
var WebhookEndpoints_1 = require("./resources/WebhookEndpoints");
Object.defineProperty(exports, "WebhookEndpoints", { enumerable: true, get: function () { return WebhookEndpoints_1.WebhookEndpoints; } });
exports.Apps = (0, ResourceNamespace_1.resourceNamespace)('apps', { Secrets: Secrets_1.Secrets });
exports.BillingPortal = (0, ResourceNamespace_1.resourceNamespace)('billingPortal', {
    Configurations: Configurations_1.Configurations,
    Sessions: Sessions_1.Sessions,
});
exports.Checkout = (0, ResourceNamespace_1.resourceNamespace)('checkout', {
    Sessions: Sessions_2.Sessions,
});
exports.FinancialConnections = (0, ResourceNamespace_1.resourceNamespace)('financialConnections', {
    Accounts: Accounts_1.Accounts,
    Sessions: Sessions_3.Sessions,
});
exports.Identity = (0, ResourceNamespace_1.resourceNamespace)('identity', {
    VerificationReports: VerificationReports_1.VerificationReports,
    VerificationSessions: VerificationSessions_1.VerificationSessions,
});
exports.Issuing = (0, ResourceNamespace_1.resourceNamespace)('issuing', {
    Authorizations: Authorizations_1.Authorizations,
    Cardholders: Cardholders_1.Cardholders,
    Cards: Cards_2.Cards,
    Disputes: Disputes_1.Disputes,
    Transactions: Transactions_1.Transactions,
});
exports.Radar = (0, ResourceNamespace_1.resourceNamespace)('radar', {
    EarlyFraudWarnings: EarlyFraudWarnings_1.EarlyFraudWarnings,
    ValueListItems: ValueListItems_1.ValueListItems,
    ValueLists: ValueLists_1.ValueLists,
});
exports.Reporting = (0, ResourceNamespace_1.resourceNamespace)('reporting', {
    ReportRuns: ReportRuns_1.ReportRuns,
    ReportTypes: ReportTypes_1.ReportTypes,
});
exports.Sigma = (0, ResourceNamespace_1.resourceNamespace)('sigma', {
    ScheduledQueryRuns: ScheduledQueryRuns_1.ScheduledQueryRuns,
});
exports.Terminal = (0, ResourceNamespace_1.resourceNamespace)('terminal', {
    Configurations: Configurations_2.Configurations,
    ConnectionTokens: ConnectionTokens_1.ConnectionTokens,
    Locations: Locations_1.Locations,
    Readers: Readers_2.Readers,
});
exports.TestHelpers = (0, ResourceNamespace_1.resourceNamespace)('testHelpers', {
    Customers: Customers_1.Customers,
    Refunds: Refunds_1.Refunds,
    TestClocks: TestClocks_1.TestClocks,
    Issuing: (0, ResourceNamespace_1.resourceNamespace)('issuing', { Cards: Cards_1.Cards }),
    Terminal: (0, ResourceNamespace_1.resourceNamespace)('terminal', {
        Readers: Readers_1.Readers,
    }),
    Treasury: (0, ResourceNamespace_1.resourceNamespace)('treasury', {
        InboundTransfers: InboundTransfers_1.InboundTransfers,
        OutboundPayments: OutboundPayments_1.OutboundPayments,
        OutboundTransfers: OutboundTransfers_1.OutboundTransfers,
        ReceivedCredits: ReceivedCredits_1.ReceivedCredits,
        ReceivedDebits: ReceivedDebits_1.ReceivedDebits,
    }),
});
exports.Treasury = (0, ResourceNamespace_1.resourceNamespace)('treasury', {
    CreditReversals: CreditReversals_1.CreditReversals,
    DebitReversals: DebitReversals_1.DebitReversals,
    FinancialAccounts: FinancialAccounts_1.FinancialAccounts,
    InboundTransfers: InboundTransfers_2.InboundTransfers,
    OutboundPayments: OutboundPayments_2.OutboundPayments,
    OutboundTransfers: OutboundTransfers_2.OutboundTransfers,
    ReceivedCredits: ReceivedCredits_2.ReceivedCredits,
    ReceivedDebits: ReceivedDebits_2.ReceivedDebits,
    TransactionEntries: TransactionEntries_1.TransactionEntries,
    Transactions: Transactions_2.Transactions,
});
