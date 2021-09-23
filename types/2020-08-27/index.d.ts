// File generated from our OpenAPI spec

///<reference path='../lib.d.ts' />
///<reference path='../crypto/crypto.d.ts' />
///<reference path='../net/net.d.ts' />
///<reference path='../shared.d.ts' />
///<reference path='../Errors.d.ts' />
///<reference path='../OAuth.d.ts' />
///<reference path='../Webhooks.d.ts' />
///<reference path='./AccountLinks.d.ts' />
///<reference path='./Accounts.d.ts' />
///<reference path='./AlipayAccounts.d.ts' />
///<reference path='./ApplePayDomains.d.ts' />
///<reference path='./ApplicationFees.d.ts' />
///<reference path='./Applications.d.ts' />
///<reference path='./Balance.d.ts' />
///<reference path='./BalanceTransactions.d.ts' />
///<reference path='./BankAccounts.d.ts' />
///<reference path='./BillingPortal/Configurations.d.ts' />
///<reference path='./BillingPortal/Sessions.d.ts' />
///<reference path='./BitcoinReceivers.d.ts' />
///<reference path='./BitcoinTransactions.d.ts' />
///<reference path='./Capabilities.d.ts' />
///<reference path='./Cards.d.ts' />
///<reference path='./Charges.d.ts' />
///<reference path='./Checkout/Sessions.d.ts' />
///<reference path='./ConnectCollectionTransfers.d.ts' />
///<reference path='./CountrySpecs.d.ts' />
///<reference path='./Coupons.d.ts' />
///<reference path='./CreditNoteLineItems.d.ts' />
///<reference path='./CreditNotes.d.ts' />
///<reference path='./CustomerBalanceTransactions.d.ts' />
///<reference path='./CustomerSources.d.ts' />
///<reference path='./Customers.d.ts' />
///<reference path='./Discounts.d.ts' />
///<reference path='./Disputes.d.ts' />
///<reference path='./EphemeralKeys.d.ts' />
///<reference path='./Events.d.ts' />
///<reference path='./ExchangeRates.d.ts' />
///<reference path='./ExternalAccounts.d.ts' />
///<reference path='./FeeRefunds.d.ts' />
///<reference path='./FileLinks.d.ts' />
///<reference path='./Files.d.ts' />
///<reference path='./Identity/VerificationReports.d.ts' />
///<reference path='./Identity/VerificationSessions.d.ts' />
///<reference path='./InvoiceItems.d.ts' />
///<reference path='./InvoiceLineItems.d.ts' />
///<reference path='./Invoices.d.ts' />
///<reference path='./IssuerFraudRecords.d.ts' />
///<reference path='./Issuing/Authorizations.d.ts' />
///<reference path='./Issuing/CardDetails.d.ts' />
///<reference path='./Issuing/Cardholders.d.ts' />
///<reference path='./Issuing/Cards.d.ts' />
///<reference path='./Issuing/Disputes.d.ts' />
///<reference path='./Issuing/Transactions.d.ts' />
///<reference path='./LineItems.d.ts' />
///<reference path='./LoginLinks.d.ts' />
///<reference path='./Mandates.d.ts' />
///<reference path='./OrderItems.d.ts' />
///<reference path='./OrderReturns.d.ts' />
///<reference path='./Orders.d.ts' />
///<reference path='./PaymentIntents.d.ts' />
///<reference path='./PaymentMethods.d.ts' />
///<reference path='./Payouts.d.ts' />
///<reference path='./Persons.d.ts' />
///<reference path='./Plans.d.ts' />
///<reference path='./PlatformTaxFees.d.ts' />
///<reference path='./Prices.d.ts' />
///<reference path='./Products.d.ts' />
///<reference path='./PromotionCodes.d.ts' />
///<reference path='./Quotes.d.ts' />
///<reference path='./Radar/EarlyFraudWarnings.d.ts' />
///<reference path='./Radar/ValueListItems.d.ts' />
///<reference path='./Radar/ValueLists.d.ts' />
///<reference path='./Recipients.d.ts' />
///<reference path='./Refunds.d.ts' />
///<reference path='./Reporting/ReportRuns.d.ts' />
///<reference path='./Reporting/ReportTypes.d.ts' />
///<reference path='./ReserveTransactions.d.ts' />
///<reference path='./Reviews.d.ts' />
///<reference path='./SKUs.d.ts' />
///<reference path='./SetupAttempts.d.ts' />
///<reference path='./SetupIntents.d.ts' />
///<reference path='./Sigma/ScheduledQueryRuns.d.ts' />
///<reference path='./SourceMandateNotifications.d.ts' />
///<reference path='./SourceTransactions.d.ts' />
///<reference path='./Sources.d.ts' />
///<reference path='./SubscriptionItems.d.ts' />
///<reference path='./SubscriptionSchedules.d.ts' />
///<reference path='./Subscriptions.d.ts' />
///<reference path='./TaxCodes.d.ts' />
///<reference path='./TaxDeductedAtSources.d.ts' />
///<reference path='./TaxIds.d.ts' />
///<reference path='./TaxRates.d.ts' />
///<reference path='./Terminal/ConnectionTokens.d.ts' />
///<reference path='./Terminal/Locations.d.ts' />
///<reference path='./Terminal/Readers.d.ts' />
///<reference path='./Tokens.d.ts' />
///<reference path='./Topups.d.ts' />
///<reference path='./TransferReversals.d.ts' />
///<reference path='./Transfers.d.ts' />
///<reference path='./UsageRecordSummaries.d.ts' />
///<reference path='./UsageRecords.d.ts' />
///<reference path='./WebhookEndpoints.d.ts' />

declare module 'stripe' {
  // Added to in other modules, referenced above.
  export namespace Stripe {}

  export class Stripe {
    static Stripe: typeof Stripe;

    constructor(apiKey: string, config: Stripe.StripeConfig);

    setAppInfo(info: Stripe.AppInfo): void;

    StripeResource: Stripe.StripeResource;

    /**
     * Top Level Resources
     */
    accounts: Stripe.AccountsResource;
    accountLinks: Stripe.AccountLinksResource;
    applePayDomains: Stripe.ApplePayDomainsResource;
    applicationFees: Stripe.ApplicationFeesResource;
    balance: Stripe.BalanceResource;
    balanceTransactions: Stripe.BalanceTransactionsResource;
    charges: Stripe.ChargesResource;
    countrySpecs: Stripe.CountrySpecsResource;
    coupons: Stripe.CouponsResource;
    creditNotes: Stripe.CreditNotesResource;
    customers: Stripe.CustomersResource;
    disputes: Stripe.DisputesResource;
    ephemeralKeys: Stripe.EphemeralKeysResource;
    events: Stripe.EventsResource;
    exchangeRates: Stripe.ExchangeRatesResource;
    files: Stripe.FilesResource;
    fileLinks: Stripe.FileLinksResource;
    invoices: Stripe.InvoicesResource;
    invoiceItems: Stripe.InvoiceItemsResource;
    issuerFraudRecords: Stripe.IssuerFraudRecordsResource;
    mandates: Stripe.MandatesResource;
    orders: Stripe.OrdersResource;
    orderReturns: Stripe.OrderReturnsResource;
    paymentIntents: Stripe.PaymentIntentsResource;
    paymentMethods: Stripe.PaymentMethodsResource;
    payouts: Stripe.PayoutsResource;
    plans: Stripe.PlansResource;
    prices: Stripe.PricesResource;
    products: Stripe.ProductsResource;
    promotionCodes: Stripe.PromotionCodesResource;
    quotes: Stripe.QuotesResource;
    refunds: Stripe.RefundsResource;
    reviews: Stripe.ReviewsResource;
    setupAttempts: Stripe.SetupAttemptsResource;
    setupIntents: Stripe.SetupIntentsResource;
    skus: Stripe.SkusResource;
    sources: Stripe.SourcesResource;
    subscriptions: Stripe.SubscriptionsResource;
    subscriptionItems: Stripe.SubscriptionItemsResource;
    subscriptionSchedules: Stripe.SubscriptionSchedulesResource;
    taxCodes: Stripe.TaxCodesResource;
    taxRates: Stripe.TaxRatesResource;
    tokens: Stripe.TokensResource;
    topups: Stripe.TopupsResource;
    transfers: Stripe.TransfersResource;
    webhookEndpoints: Stripe.WebhookEndpointsResource;
    webhooks: Stripe.Webhooks;
    oauth: Stripe.OAuthResource;

    /**
     * Namespaced Resources
     */
    billingPortal: {
      configurations: Stripe.BillingPortal.ConfigurationsResource;
      sessions: Stripe.BillingPortal.SessionsResource;
    };
    checkout: {
      sessions: Stripe.Checkout.SessionsResource;
    };
    identity: {
      verificationReports: Stripe.Identity.VerificationReportsResource;
      verificationSessions: Stripe.Identity.VerificationSessionsResource;
    };
    issuing: {
      authorizations: Stripe.Issuing.AuthorizationsResource;
      cards: Stripe.Issuing.CardsResource;
      cardholders: Stripe.Issuing.CardholdersResource;
      disputes: Stripe.Issuing.DisputesResource;
      transactions: Stripe.Issuing.TransactionsResource;
    };
    radar: {
      earlyFraudWarnings: Stripe.Radar.EarlyFraudWarningsResource;
      valueLists: Stripe.Radar.ValueListsResource;
      valueListItems: Stripe.Radar.ValueListItemsResource;
    };
    reporting: {
      reportRuns: Stripe.Reporting.ReportRunsResource;
      reportTypes: Stripe.Reporting.ReportTypesResource;
    };
    sigma: {
      scheduledQueryRuns: Stripe.Sigma.ScheduledQueryRunsResource;
    };
    terminal: {
      connectionTokens: Stripe.Terminal.ConnectionTokensResource;
      locations: Stripe.Terminal.LocationsResource;
      readers: Stripe.Terminal.ReadersResource;
    };
    /**
     * API Errors
     */
    static errors: Stripe.Errors;
    errors: Stripe.Errors;

    on(event: 'request', handler: (event: Stripe.RequestEvent) => void): void;
    on(event: 'response', handler: (event: Stripe.ResponseEvent) => void): void;
    once(event: 'request', handler: (event: Stripe.RequestEvent) => void): void;
    once(
      event: 'response',
      handler: (event: Stripe.ResponseEvent) => void
    ): void;
    off(event: 'request', handler: (event: Stripe.RequestEvent) => void): void;
    off(
      event: 'response',
      handler: (event: Stripe.ResponseEvent) => void
    ): void;

    setProtocol(protocol: string): void;

    /** @deprecated Please use the StripeConfig object instead. */
    setHost(host: string, port?: string | number, protocol?: string): void;

    /** @deprecated Please use the StripeConfig object instead. */
    setPort(port: string | number): void;
    /** @deprecated Please use the StripeConfig object instead. */
    setApiVersion(version: Stripe.LatestApiVersion): void;
    /** @deprecated Please use the StripeConfig object instead. */
    setApiKey(key: string): void;

    /** @deprecated Please use the StripeConfig object instead. */
    setTimeout(timeout?: number): void;
    /** @deprecated Please use the StripeConfig object instead. */
    setMaxNetworkRetries(maxNetworkRetries: number): void;
    /** @deprecated Please use the StripeConfig object instead. */
    setTelemetryEnabled(enabled: boolean): void;
    /** @deprecated Please use the StripeConfig object instead. */
    setHttpAgent(agent: Stripe.HttpAgent): void;
  }

  export default Stripe;
}
