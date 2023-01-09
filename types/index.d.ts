// File generated from our OpenAPI spec

///<reference path='./lib.d.ts' />
///<reference path='./crypto/crypto.d.ts' />
///<reference path='./net/net.d.ts' />
///<reference path='./shared.d.ts' />
///<reference path='./Errors.d.ts' />
///<reference path='./OAuth.d.ts' />
///<reference path='./Webhooks.d.ts' />
///<reference path='./UpcomingInvoices.d.ts' />
///<reference path='./AccountLinksResource.d.ts' />
///<reference path='./AccountsResource.d.ts' />
///<reference path='./ApplePayDomainsResource.d.ts' />
///<reference path='./ApplicationFeesResource.d.ts' />
///<reference path='./Apps/SecretsResource.d.ts' />
///<reference path='./BalanceResource.d.ts' />
///<reference path='./BalanceTransactionsResource.d.ts' />
///<reference path='./BillingPortal/ConfigurationsResource.d.ts' />
///<reference path='./BillingPortal/SessionsResource.d.ts' />
///<reference path='./ChargesResource.d.ts' />
///<reference path='./Checkout/SessionsResource.d.ts' />
///<reference path='./CountrySpecsResource.d.ts' />
///<reference path='./CouponsResource.d.ts' />
///<reference path='./CreditNotesResource.d.ts' />
///<reference path='./CustomersResource.d.ts' />
///<reference path='./DisputesResource.d.ts' />
///<reference path='./EphemeralKeysResource.d.ts' />
///<reference path='./EventsResource.d.ts' />
///<reference path='./ExchangeRatesResource.d.ts' />
///<reference path='./FileLinksResource.d.ts' />
///<reference path='./FilesResource.d.ts' />
///<reference path='./FinancialConnections/AccountsResource.d.ts' />
///<reference path='./FinancialConnections/SessionsResource.d.ts' />
///<reference path='./Identity/VerificationReportsResource.d.ts' />
///<reference path='./Identity/VerificationSessionsResource.d.ts' />
///<reference path='./InvoiceItemsResource.d.ts' />
///<reference path='./InvoicesResource.d.ts' />
///<reference path='./Issuing/AuthorizationsResource.d.ts' />
///<reference path='./Issuing/CardholdersResource.d.ts' />
///<reference path='./Issuing/CardsResource.d.ts' />
///<reference path='./Issuing/DisputesResource.d.ts' />
///<reference path='./Issuing/TransactionsResource.d.ts' />
///<reference path='./MandatesResource.d.ts' />
///<reference path='./PaymentIntentsResource.d.ts' />
///<reference path='./PaymentLinksResource.d.ts' />
///<reference path='./PaymentMethodsResource.d.ts' />
///<reference path='./PayoutsResource.d.ts' />
///<reference path='./PlansResource.d.ts' />
///<reference path='./PricesResource.d.ts' />
///<reference path='./ProductsResource.d.ts' />
///<reference path='./PromotionCodesResource.d.ts' />
///<reference path='./QuotesResource.d.ts' />
///<reference path='./Radar/EarlyFraudWarningsResource.d.ts' />
///<reference path='./Radar/ValueListItemsResource.d.ts' />
///<reference path='./Radar/ValueListsResource.d.ts' />
///<reference path='./RefundsResource.d.ts' />
///<reference path='./Reporting/ReportRunsResource.d.ts' />
///<reference path='./Reporting/ReportTypesResource.d.ts' />
///<reference path='./ReviewsResource.d.ts' />
///<reference path='./SetupAttemptsResource.d.ts' />
///<reference path='./SetupIntentsResource.d.ts' />
///<reference path='./ShippingRatesResource.d.ts' />
///<reference path='./Sigma/ScheduledQueryRunsResource.d.ts' />
///<reference path='./SourcesResource.d.ts' />
///<reference path='./SubscriptionItemsResource.d.ts' />
///<reference path='./SubscriptionSchedulesResource.d.ts' />
///<reference path='./SubscriptionsResource.d.ts' />
///<reference path='./TaxCodesResource.d.ts' />
///<reference path='./TaxRatesResource.d.ts' />
///<reference path='./Terminal/ConfigurationsResource.d.ts' />
///<reference path='./Terminal/ConnectionTokensResource.d.ts' />
///<reference path='./Terminal/LocationsResource.d.ts' />
///<reference path='./Terminal/ReadersResource.d.ts' />
///<reference path='./TestHelpers/CustomersResource.d.ts' />
///<reference path='./TestHelpers/Issuing/CardsResource.d.ts' />
///<reference path='./TestHelpers/RefundsResource.d.ts' />
///<reference path='./TestHelpers/Terminal/ReadersResource.d.ts' />
///<reference path='./TestHelpers/TestClocksResource.d.ts' />
///<reference path='./TestHelpers/Treasury/InboundTransfersResource.d.ts' />
///<reference path='./TestHelpers/Treasury/OutboundPaymentsResource.d.ts' />
///<reference path='./TestHelpers/Treasury/OutboundTransfersResource.d.ts' />
///<reference path='./TestHelpers/Treasury/ReceivedCreditsResource.d.ts' />
///<reference path='./TestHelpers/Treasury/ReceivedDebitsResource.d.ts' />
///<reference path='./TokensResource.d.ts' />
///<reference path='./TopupsResource.d.ts' />
///<reference path='./TransfersResource.d.ts' />
///<reference path='./Treasury/CreditReversalsResource.d.ts' />
///<reference path='./Treasury/DebitReversalsResource.d.ts' />
///<reference path='./Treasury/FinancialAccountsResource.d.ts' />
///<reference path='./Treasury/InboundTransfersResource.d.ts' />
///<reference path='./Treasury/OutboundPaymentsResource.d.ts' />
///<reference path='./Treasury/OutboundTransfersResource.d.ts' />
///<reference path='./Treasury/ReceivedCreditsResource.d.ts' />
///<reference path='./Treasury/ReceivedDebitsResource.d.ts' />
///<reference path='./Treasury/TransactionEntriesResource.d.ts' />
///<reference path='./Treasury/TransactionsResource.d.ts' />
///<reference path='./WebhookEndpointsResource.d.ts' />
///<reference path='./AccountLinks.d.ts' />
///<reference path='./Accounts.d.ts' />
///<reference path='./ApplePayDomains.d.ts' />
///<reference path='./ApplicationFees.d.ts' />
///<reference path='./Applications.d.ts' />
///<reference path='./Apps/Secrets.d.ts' />
///<reference path='./Balance.d.ts' />
///<reference path='./BalanceTransactions.d.ts' />
///<reference path='./BankAccounts.d.ts' />
///<reference path='./BillingPortal/Configurations.d.ts' />
///<reference path='./BillingPortal/Sessions.d.ts' />
///<reference path='./Capabilities.d.ts' />
///<reference path='./Cards.d.ts' />
///<reference path='./CashBalances.d.ts' />
///<reference path='./Charges.d.ts' />
///<reference path='./Checkout/Sessions.d.ts' />
///<reference path='./ConnectCollectionTransfers.d.ts' />
///<reference path='./CountrySpecs.d.ts' />
///<reference path='./Coupons.d.ts' />
///<reference path='./CreditNoteLineItems.d.ts' />
///<reference path='./CreditNotes.d.ts' />
///<reference path='./CustomerBalanceTransactions.d.ts' />
///<reference path='./CustomerCashBalanceTransactions.d.ts' />
///<reference path='./Customers.d.ts' />
///<reference path='./Discounts.d.ts' />
///<reference path='./Disputes.d.ts' />
///<reference path='./EphemeralKeys.d.ts' />
///<reference path='./Events.d.ts' />
///<reference path='./ExchangeRates.d.ts' />
///<reference path='./FeeRefunds.d.ts' />
///<reference path='./FileLinks.d.ts' />
///<reference path='./Files.d.ts' />
///<reference path='./FinancialConnections/AccountOwners.d.ts' />
///<reference path='./FinancialConnections/AccountOwnerships.d.ts' />
///<reference path='./FinancialConnections/Accounts.d.ts' />
///<reference path='./FinancialConnections/Sessions.d.ts' />
///<reference path='./FundingInstructions.d.ts' />
///<reference path='./Identity/VerificationReports.d.ts' />
///<reference path='./Identity/VerificationSessions.d.ts' />
///<reference path='./InvoiceItems.d.ts' />
///<reference path='./InvoiceLineItems.d.ts' />
///<reference path='./Invoices.d.ts' />
///<reference path='./Issuing/Authorizations.d.ts' />
///<reference path='./Issuing/Cardholders.d.ts' />
///<reference path='./Issuing/Cards.d.ts' />
///<reference path='./Issuing/Disputes.d.ts' />
///<reference path='./Issuing/Transactions.d.ts' />
///<reference path='./LineItems.d.ts' />
///<reference path='./LoginLinks.d.ts' />
///<reference path='./Mandates.d.ts' />
///<reference path='./PaymentIntents.d.ts' />
///<reference path='./PaymentLinks.d.ts' />
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
///<reference path='./Refunds.d.ts' />
///<reference path='./Reporting/ReportRuns.d.ts' />
///<reference path='./Reporting/ReportTypes.d.ts' />
///<reference path='./ReserveTransactions.d.ts' />
///<reference path='./Reviews.d.ts' />
///<reference path='./SetupAttempts.d.ts' />
///<reference path='./SetupIntents.d.ts' />
///<reference path='./ShippingRates.d.ts' />
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
///<reference path='./Terminal/Configurations.d.ts' />
///<reference path='./Terminal/ConnectionTokens.d.ts' />
///<reference path='./Terminal/Locations.d.ts' />
///<reference path='./Terminal/Readers.d.ts' />
///<reference path='./TestHelpers/TestClocks.d.ts' />
///<reference path='./Tokens.d.ts' />
///<reference path='./Topups.d.ts' />
///<reference path='./TransferReversals.d.ts' />
///<reference path='./Transfers.d.ts' />
///<reference path='./Treasury/CreditReversals.d.ts' />
///<reference path='./Treasury/DebitReversals.d.ts' />
///<reference path='./Treasury/FinancialAccountFeatures.d.ts' />
///<reference path='./Treasury/FinancialAccounts.d.ts' />
///<reference path='./Treasury/InboundTransfers.d.ts' />
///<reference path='./Treasury/OutboundPayments.d.ts' />
///<reference path='./Treasury/OutboundTransfers.d.ts' />
///<reference path='./Treasury/ReceivedCredits.d.ts' />
///<reference path='./Treasury/ReceivedDebits.d.ts' />
///<reference path='./Treasury/TransactionEntries.d.ts' />
///<reference path='./Treasury/Transactions.d.ts' />
///<reference path='./UsageRecordSummaries.d.ts' />
///<reference path='./UsageRecords.d.ts' />
///<reference path='./WebhookEndpoints.d.ts' />

declare module 'stripe' {
  // Added to in other modules, referenced above.
  export namespace Stripe {}

  export class Stripe {
    static Stripe: typeof Stripe;

    constructor(apiKey: string, config: Stripe.StripeConfig);

    StripeResource: Stripe.StripeResource;

    /**
     * Top Level Resources
     */
    accountLinks: Stripe.AccountLinksResource;
    accounts: Stripe.AccountsResource;
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
    fileLinks: Stripe.FileLinksResource;
    files: Stripe.FilesResource;
    invoiceItems: Stripe.InvoiceItemsResource;
    invoices: Stripe.InvoicesResource;
    mandates: Stripe.MandatesResource;
    paymentIntents: Stripe.PaymentIntentsResource;
    paymentLinks: Stripe.PaymentLinksResource;
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
    shippingRates: Stripe.ShippingRatesResource;
    sources: Stripe.SourcesResource;
    subscriptionItems: Stripe.SubscriptionItemsResource;
    subscriptionSchedules: Stripe.SubscriptionSchedulesResource;
    subscriptions: Stripe.SubscriptionsResource;
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
    apps: {
      secrets: Stripe.Apps.SecretsResource;
    };
    billingPortal: {
      configurations: Stripe.BillingPortal.ConfigurationsResource;
      sessions: Stripe.BillingPortal.SessionsResource;
    };
    checkout: {
      sessions: Stripe.Checkout.SessionsResource;
    };
    financialConnections: {
      accounts: Stripe.FinancialConnections.AccountsResource;
      sessions: Stripe.FinancialConnections.SessionsResource;
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
      configurations: Stripe.Terminal.ConfigurationsResource;
      connectionTokens: Stripe.Terminal.ConnectionTokensResource;
      locations: Stripe.Terminal.LocationsResource;
      readers: Stripe.Terminal.ReadersResource;
    };
    testHelpers: {
      customers: Stripe.TestHelpers.CustomersResource;
      refunds: Stripe.TestHelpers.RefundsResource;
      testClocks: Stripe.TestHelpers.TestClocksResource;
      issuing: {
        cards: Stripe.TestHelpers.Issuing.CardsResource;
      };
      terminal: {
        readers: Stripe.TestHelpers.Terminal.ReadersResource;
      };
      treasury: {
        inboundTransfers: Stripe.TestHelpers.Treasury.InboundTransfersResource;
        outboundPayments: Stripe.TestHelpers.Treasury.OutboundPaymentsResource;
        outboundTransfers: Stripe.TestHelpers.Treasury.OutboundTransfersResource;
        receivedCredits: Stripe.TestHelpers.Treasury.ReceivedCreditsResource;
        receivedDebits: Stripe.TestHelpers.Treasury.ReceivedDebitsResource;
      };
    };
    treasury: {
      creditReversals: Stripe.Treasury.CreditReversalsResource;
      debitReversals: Stripe.Treasury.DebitReversalsResource;
      financialAccounts: Stripe.Treasury.FinancialAccountsResource;
      inboundTransfers: Stripe.Treasury.InboundTransfersResource;
      outboundPayments: Stripe.Treasury.OutboundPaymentsResource;
      outboundTransfers: Stripe.Treasury.OutboundTransfersResource;
      receivedCredits: Stripe.Treasury.ReceivedCreditsResource;
      receivedDebits: Stripe.Treasury.ReceivedDebitsResource;
      transactions: Stripe.Treasury.TransactionsResource;
      transactionEntries: Stripe.Treasury.TransactionEntriesResource;
    };
    /**
     * API Errors
     */
    errors: typeof Stripe.errors;

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
  }

  export default Stripe;
}
