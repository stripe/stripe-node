// File generated from our OpenAPI spec

///<reference path='./lib.d.ts' />
///<reference path='./crypto/crypto.d.ts' />
///<reference path='./net/net.d.ts' />
///<reference path='./shared.d.ts' />
///<reference path='./Errors.d.ts' />
///<reference path='./OAuth.d.ts' />
///<reference path='./Webhooks.d.ts' />
///<reference path='./AccountResource.d.ts' />
///<reference path='./AccountLinkResource.d.ts' />
///<reference path='./ApplePayDomainResource.d.ts' />
///<reference path='./ApplicationFeeResource.d.ts' />
///<reference path='./Apps/SecretResource.d.ts' />
///<reference path='./BalanceResource.d.ts' />
///<reference path='./BalanceTransactionResource.d.ts' />
///<reference path='./BankAccountResource.d.ts' />
///<reference path='./BillingPortal/ConfigurationResource.d.ts' />
///<reference path='./BillingPortal/SessionResource.d.ts' />
///<reference path='./CapabilityResource.d.ts' />
///<reference path='./CardResource.d.ts' />
///<reference path='./CashBalanceResource.d.ts' />
///<reference path='./ChargeResource.d.ts' />
///<reference path='./Checkout/SessionResource.d.ts' />
///<reference path='./CountrySpecResource.d.ts' />
///<reference path='./CouponResource.d.ts' />
///<reference path='./CreditNoteResource.d.ts' />
///<reference path='./CreditNoteLineItemResource.d.ts' />
///<reference path='./CustomerResource.d.ts' />
///<reference path='./CustomerBalanceTransactionResource.d.ts' />
///<reference path='./CustomerCashBalanceTransactionResource.d.ts' />
///<reference path='./DisputeResource.d.ts' />
///<reference path='./EphemeralKeyResource.d.ts' />
///<reference path='./EventResource.d.ts' />
///<reference path='./ExchangeRateResource.d.ts' />
///<reference path='./ExternalAccountResource.d.ts' />
///<reference path='./FeeRefundResource.d.ts' />
///<reference path='./FileResource.d.ts' />
///<reference path='./FileLinkResource.d.ts' />
///<reference path='./FinancialConnections/AccountResource.d.ts' />
///<reference path='./FinancialConnections/SessionResource.d.ts' />
///<reference path='./Identity/VerificationReportResource.d.ts' />
///<reference path='./Identity/VerificationSessionResource.d.ts' />
///<reference path='./InvoiceResource.d.ts' />
///<reference path='./InvoiceItemResource.d.ts' />
///<reference path='./Issuing/AuthorizationResource.d.ts' />
///<reference path='./Issuing/CardResource.d.ts' />
///<reference path='./Issuing/CardholderResource.d.ts' />
///<reference path='./Issuing/DisputeResource.d.ts' />
///<reference path='./Issuing/TransactionResource.d.ts' />
///<reference path='./InvoiceLineItemResource.d.ts' />
///<reference path='./LoginLinkResource.d.ts' />
///<reference path='./MandateResource.d.ts' />
///<reference path='./PaymentIntentResource.d.ts' />
///<reference path='./PaymentLinkResource.d.ts' />
///<reference path='./PaymentMethodResource.d.ts' />
///<reference path='./CustomerSourceResource.d.ts' />
///<reference path='./PayoutResource.d.ts' />
///<reference path='./PersonResource.d.ts' />
///<reference path='./PlanResource.d.ts' />
///<reference path='./PriceResource.d.ts' />
///<reference path='./ProductResource.d.ts' />
///<reference path='./PromotionCodeResource.d.ts' />
///<reference path='./QuoteResource.d.ts' />
///<reference path='./Radar/EarlyFraudWarningResource.d.ts' />
///<reference path='./Radar/ValueListResource.d.ts' />
///<reference path='./Radar/ValueListItemResource.d.ts' />
///<reference path='./RefundResource.d.ts' />
///<reference path='./Reporting/ReportRunResource.d.ts' />
///<reference path='./Reporting/ReportTypeResource.d.ts' />
///<reference path='./ReviewResource.d.ts' />
///<reference path='./Sigma/ScheduledQueryRunResource.d.ts' />
///<reference path='./SetupAttemptResource.d.ts' />
///<reference path='./SetupIntentResource.d.ts' />
///<reference path='./ShippingRateResource.d.ts' />
///<reference path='./SourceResource.d.ts' />
///<reference path='./SubscriptionResource.d.ts' />
///<reference path='./SubscriptionItemResource.d.ts' />
///<reference path='./SubscriptionScheduleResource.d.ts' />
///<reference path='./TaxCodeResource.d.ts' />
///<reference path='./TaxIdResource.d.ts' />
///<reference path='./TaxRateResource.d.ts' />
///<reference path='./Terminal/ConfigurationResource.d.ts' />
///<reference path='./Terminal/ConnectionTokenResource.d.ts' />
///<reference path='./Terminal/LocationResource.d.ts' />
///<reference path='./Terminal/ReaderResource.d.ts' />
///<reference path='./TestHelpers/TestClockResource.d.ts' />
///<reference path='./TokenResource.d.ts' />
///<reference path='./TopupResource.d.ts' />
///<reference path='./TransferResource.d.ts' />
///<reference path='./TransferReversalResource.d.ts' />
///<reference path='./Treasury/CreditReversalResource.d.ts' />
///<reference path='./Treasury/DebitReversalResource.d.ts' />
///<reference path='./Treasury/FinancialAccountResource.d.ts' />
///<reference path='./Treasury/InboundTransferResource.d.ts' />
///<reference path='./Treasury/OutboundPaymentResource.d.ts' />
///<reference path='./Treasury/OutboundTransferResource.d.ts' />
///<reference path='./Treasury/ReceivedCreditResource.d.ts' />
///<reference path='./Treasury/ReceivedDebitResource.d.ts' />
///<reference path='./Treasury/TransactionResource.d.ts' />
///<reference path='./Treasury/TransactionEntryResource.d.ts' />
///<reference path='./UsageRecordResource.d.ts' />
///<reference path='./UsageRecordSummaryResource.d.ts' />
///<reference path='./WebhookEndpointResource.d.ts' />
///<reference path='./TestHelpers/CustomerResource.d.ts' />
///<reference path='./TestHelpers/Issuing/CardResource.d.ts' />
///<reference path='./TestHelpers/RefundResource.d.ts' />
///<reference path='./TestHelpers/Terminal/ReaderResource.d.ts' />
///<reference path='./TestHelpers/Treasury/InboundTransferResource.d.ts' />
///<reference path='./TestHelpers/Treasury/OutboundPaymentResource.d.ts' />
///<reference path='./TestHelpers/Treasury/OutboundTransferResource.d.ts' />
///<reference path='./TestHelpers/Treasury/ReceivedCreditResource.d.ts' />
///<reference path='./TestHelpers/Treasury/ReceivedDebitResource.d.ts' />
///<reference path='./Account.d.ts' />
///<reference path='./AccountLink.d.ts' />
///<reference path='./ApplePayDomain.d.ts' />
///<reference path='./Application.d.ts' />
///<reference path='./ApplicationFee.d.ts' />
///<reference path='./Apps/Secret.d.ts' />
///<reference path='./Balance.d.ts' />
///<reference path='./BalanceTransaction.d.ts' />
///<reference path='./BankAccount.d.ts' />
///<reference path='./BillingPortal/Configuration.d.ts' />
///<reference path='./BillingPortal/Session.d.ts' />
///<reference path='./Capability.d.ts' />
///<reference path='./Card.d.ts' />
///<reference path='./CashBalance.d.ts' />
///<reference path='./Charge.d.ts' />
///<reference path='./Checkout/Session.d.ts' />
///<reference path='./ConnectCollectionTransfer.d.ts' />
///<reference path='./CountrySpec.d.ts' />
///<reference path='./Coupon.d.ts' />
///<reference path='./CreditNote.d.ts' />
///<reference path='./CreditNoteLineItem.d.ts' />
///<reference path='./Customer.d.ts' />
///<reference path='./CustomerBalanceTransaction.d.ts' />
///<reference path='./CustomerCashBalanceTransaction.d.ts' />
///<reference path='./Discount.d.ts' />
///<reference path='./Dispute.d.ts' />
///<reference path='./EphemeralKey.d.ts' />
///<reference path='./Event.d.ts' />
///<reference path='./ExchangeRate.d.ts' />
///<reference path='./FeeRefund.d.ts' />
///<reference path='./File.d.ts' />
///<reference path='./FileLink.d.ts' />
///<reference path='./FinancialConnections/Account.d.ts' />
///<reference path='./FinancialConnections/AccountOwner.d.ts' />
///<reference path='./FinancialConnections/AccountOwnership.d.ts' />
///<reference path='./FinancialConnections/Session.d.ts' />
///<reference path='./FundingInstructions.d.ts' />
///<reference path='./Identity/VerificationReport.d.ts' />
///<reference path='./Identity/VerificationSession.d.ts' />
///<reference path='./Invoice.d.ts' />
///<reference path='./InvoiceItem.d.ts' />
///<reference path='./InvoiceLineItem.d.ts' />
///<reference path='./Issuing/Authorization.d.ts' />
///<reference path='./Issuing/Card.d.ts' />
///<reference path='./Issuing/Cardholder.d.ts' />
///<reference path='./Issuing/Dispute.d.ts' />
///<reference path='./Issuing/Transaction.d.ts' />
///<reference path='./LineItem.d.ts' />
///<reference path='./LoginLink.d.ts' />
///<reference path='./Mandate.d.ts' />
///<reference path='./PaymentIntent.d.ts' />
///<reference path='./PaymentLink.d.ts' />
///<reference path='./PaymentMethod.d.ts' />
///<reference path='./Payout.d.ts' />
///<reference path='./Person.d.ts' />
///<reference path='./Plan.d.ts' />
///<reference path='./PlatformTaxFee.d.ts' />
///<reference path='./Price.d.ts' />
///<reference path='./Product.d.ts' />
///<reference path='./PromotionCode.d.ts' />
///<reference path='./Quote.d.ts' />
///<reference path='./Radar/EarlyFraudWarning.d.ts' />
///<reference path='./Radar/ValueList.d.ts' />
///<reference path='./Radar/ValueListItem.d.ts' />
///<reference path='./Refund.d.ts' />
///<reference path='./Reporting/ReportRun.d.ts' />
///<reference path='./Reporting/ReportType.d.ts' />
///<reference path='./ReserveTransaction.d.ts' />
///<reference path='./Review.d.ts' />
///<reference path='./SetupAttempt.d.ts' />
///<reference path='./SetupIntent.d.ts' />
///<reference path='./ShippingRate.d.ts' />
///<reference path='./Sigma/ScheduledQueryRun.d.ts' />
///<reference path='./Source.d.ts' />
///<reference path='./SourceMandateNotification.d.ts' />
///<reference path='./SourceTransaction.d.ts' />
///<reference path='./Subscription.d.ts' />
///<reference path='./SubscriptionItem.d.ts' />
///<reference path='./SubscriptionSchedule.d.ts' />
///<reference path='./TaxCode.d.ts' />
///<reference path='./TaxDeductedAtSource.d.ts' />
///<reference path='./TaxId.d.ts' />
///<reference path='./TaxRate.d.ts' />
///<reference path='./Terminal/Configuration.d.ts' />
///<reference path='./Terminal/ConnectionToken.d.ts' />
///<reference path='./Terminal/Location.d.ts' />
///<reference path='./Terminal/Reader.d.ts' />
///<reference path='./TestHelpers/TestClock.d.ts' />
///<reference path='./Token.d.ts' />
///<reference path='./Topup.d.ts' />
///<reference path='./Transfer.d.ts' />
///<reference path='./TransferReversal.d.ts' />
///<reference path='./Treasury/CreditReversal.d.ts' />
///<reference path='./Treasury/DebitReversal.d.ts' />
///<reference path='./Treasury/FinancialAccount.d.ts' />
///<reference path='./Treasury/FinancialAccountFeatures.d.ts' />
///<reference path='./Treasury/InboundTransfer.d.ts' />
///<reference path='./Treasury/OutboundPayment.d.ts' />
///<reference path='./Treasury/OutboundTransfer.d.ts' />
///<reference path='./Treasury/ReceivedCredit.d.ts' />
///<reference path='./Treasury/ReceivedDebit.d.ts' />
///<reference path='./Treasury/Transaction.d.ts' />
///<reference path='./Treasury/TransactionEntry.d.ts' />
///<reference path='./UsageRecord.d.ts' />
///<reference path='./UsageRecordSummary.d.ts' />
///<reference path='./WebhookEndpoint.d.ts' />

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
      testClocks: Stripe.TestHelpers.TestClocksResource;
      customers: Stripe.TestHelpers.CustomersResource;
      refunds: Stripe.TestHelpers.RefundsResource;
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
