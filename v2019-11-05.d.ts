///<resource path="./types/Accounts.d.ts" />
///<resource path="./types/AccountLinks.d.ts" />
///<resource path="./types/AlipayAccounts.d.ts" />
///<resource path="./types/ApplePayDomains.d.ts" />
///<resource path="./types/Applications.d.ts" />
///<resource path="./types/ApplicationFees.d.ts" />
///<resource path="./types/Balance.d.ts" />
///<resource path="./types/BalanceTransactions.d.ts" />
///<resource path="./types/BitcoinReceivers.d.ts" />
///<resource path="./types/BitcoinTransactions.d.ts" />
///<resource path="./types/Capabilities.d.ts" />
///<resource path="./types/Charges.d.ts" />
///<resource path="./types/ConnectCollectionTransfers.d.ts" />
///<resource path="./types/CountrySpecs.d.ts" />
///<resource path="./types/Coupons.d.ts" />
///<resource path="./types/CreditNotes.d.ts" />
///<resource path="./types/Customers.d.ts" />
///<resource path="./types/CustomerBalanceTransactions.d.ts" />
///<resource path="./types/Discounts.d.ts" />
///<resource path="./types/Disputes.d.ts" />
///<resource path="./types/EphemeralKeys.d.ts" />
///<resource path="./types/Events.d.ts" />
///<resource path="./types/ExchangeRates.d.ts" />
///<resource path="./types/FeeRefunds.d.ts" />
///<resource path="./types/Files.d.ts" />
///<resource path="./types/FileLinks.d.ts" />
///<resource path="./types/Invoices.d.ts" />
///<resource path="./types/InvoiceItems.d.ts" />
///<resource path="./types/InvoiceLineItems.d.ts" />
///<resource path="./types/IssuerFraudRecords.d.ts" />
///<resource path="./types/LoginLinks.d.ts" />
///<resource path="./types/Mandates.d.ts" />
///<resource path="./types/Orders.d.ts" />
///<resource path="./types/OrderItems.d.ts" />
///<resource path="./types/OrderReturns.d.ts" />
///<resource path="./types/PaymentIntents.d.ts" />
///<resource path="./types/PaymentMethods.d.ts" />
///<resource path="./types/Payouts.d.ts" />
///<resource path="./types/Persons.d.ts" />
///<resource path="./types/Plans.d.ts" />
///<resource path="./types/PlatformTaxFees.d.ts" />
///<resource path="./types/Products.d.ts" />
///<resource path="./types/Recipients.d.ts" />
///<resource path="./types/Refunds.d.ts" />
///<resource path="./types/ReserveTransactions.d.ts" />
///<resource path="./types/Reviews.d.ts" />
///<resource path="./types/SetupIntents.d.ts" />
///<resource path="./types/SKUs.d.ts" />
///<resource path="./types/Sources.d.ts" />
///<resource path="./types/SourceMandateNotifications.d.ts" />
///<resource path="./types/SourceTransactions.d.ts" />
///<resource path="./types/Subscriptions.d.ts" />
///<resource path="./types/SubscriptionItems.d.ts" />
///<resource path="./types/SubscriptionSchedules.d.ts" />
///<resource path="./types/TaxDeductedAtSources.d.ts" />
///<resource path="./types/TaxIds.d.ts" />
///<resource path="./types/TaxRates.d.ts" />
///<resource path="./types/ThreeDSecure.d.ts" />
///<resource path="./types/Tokens.d.ts" />
///<resource path="./types/Topups.d.ts" />
///<resource path="./types/Transfers.d.ts" />
///<resource path="./types/TransferReversals.d.ts" />
///<resource path="./types/UsageRecords.d.ts" />
///<resource path="./types/UsageRecordSummaries.d.ts" />
///<resource path="./types/WebhookEndpoints.d.ts" />

declare namespace Stripe {
  class Resources {
    account: Stripe.AccountResource;
    accountLink: Stripe.AccountLinkResource;
    alipayAccount: Stripe.AlipayAccountResource;
    applePayDomain: Stripe.ApplePayDomainResource;
    application: Stripe.ApplicationResource;
    applicationFee: Stripe.ApplicationFeeResource;
    balance: Stripe.BalanceResource;
    balanceTransaction: Stripe.BalanceTransactionResource;
    bitcoinReceiver: Stripe.BitcoinReceiverResource;
    bitcoinTransaction: Stripe.BitcoinTransactionResource;
    capability: Stripe.CapabilityResource;
    charge: Stripe.ChargeResource;
    session: Stripe.SessionResource;
    connectCollectionTransfer: Stripe.ConnectCollectionTransferResource;
    countrySpec: Stripe.CountrySpecResource;
    coupon: Stripe.CouponResource;
    creditNote: Stripe.CreditNoteResource;
    customer: Stripe.CustomerResource;
    customerBalanceTransaction: Stripe.CustomerBalanceTransactionResource;
    discount: Stripe.DiscountResource;
    dispute: Stripe.DisputeResource;
    ephemeralKey: Stripe.EphemeralKeyResource;
    event: Stripe.EventResource;
    exchangeRate: Stripe.ExchangeRateResource;
    feeRefund: Stripe.FeeRefundResource;
    file: Stripe.FileResource;
    fileLink: Stripe.FileLinkResource;
    invoice: Stripe.InvoiceResource;
    invoiceItem: Stripe.InvoiceItemResource;
    issuerFraudRecord: Stripe.IssuerFraudRecordResource;
    authorization: Stripe.AuthorizationResource;
    card: Stripe.CardResource;
    cardDetails: Stripe.CardDetailsResource;
    cardholder: Stripe.CardholderResource;
    dispute: Stripe.DisputeResource;
    transaction: Stripe.TransactionResource;
    invoiceLineItem: Stripe.InvoiceLineItemResource;
    loginLink: Stripe.LoginLinkResource;
    mandate: Stripe.MandateResource;
    order: Stripe.OrderResource;
    orderItem: Stripe.OrderItemResource;
    orderReturn: Stripe.OrderReturnResource;
    paymentIntent: Stripe.PaymentIntentResource;
    paymentMethod: Stripe.PaymentMethodResource;
    payout: Stripe.PayoutResource;
    person: Stripe.PersonResource;
    plan: Stripe.PlanResource;
    platformTaxFee: Stripe.PlatformTaxFeeResource;
    product: Stripe.ProductResource;
    earlyFraudWarning: Stripe.EarlyFraudWarningResource;
    valueList: Stripe.ValueListResource;
    valueListItem: Stripe.ValueListItemResource;
    recipient: Stripe.RecipientResource;
    refund: Stripe.RefundResource;
    reportRun: Stripe.ReportRunResource;
    reportType: Stripe.ReportTypeResource;
    reserveTransaction: Stripe.ReserveTransactionResource;
    review: Stripe.ReviewResource;
    scheduledQueryRun: Stripe.ScheduledQueryRunResource;
    setupIntent: Stripe.SetupIntentResource;
    sku: Stripe.SkuResource;
    source: Stripe.SourceResource;
    sourceMandateNotification: Stripe.SourceMandateNotificationResource;
    sourceTransaction: Stripe.SourceTransactionResource;
    subscription: Stripe.SubscriptionResource;
    subscriptionItem: Stripe.SubscriptionItemResource;
    subscriptionSchedule: Stripe.SubscriptionScheduleResource;
    taxDeductedAtSource: Stripe.TaxDeductedAtSourceResource;
    taxId: Stripe.TaxIdResource;
    taxRate: Stripe.TaxRateResource;
    connectionToken: Stripe.ConnectionTokenResource;
    location: Stripe.LocationResource;
    reader: Stripe.ReaderResource;
    threeDSecure: Stripe.ThreeDSecureResource;
    token: Stripe.TokenResource;
    topup: Stripe.TopupResource;
    transfer: Stripe.TransferResource;
    transferReversal: Stripe.TransferReversalResource;
    usageRecord: Stripe.UsageRecordResource;
    usageRecordSummary: Stripe.UsageRecordSummaryResource;
    webhookEndpoint: Stripe.WebhookEndpointResource;
  }
}