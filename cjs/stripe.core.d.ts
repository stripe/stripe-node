import * as _Error from './Error.js';
import { RequestSender } from './RequestSender.js';
import { StripeResource } from './StripeResource.js';
import { StripeContext } from './StripeContext.js';
import { RequestAuthenticator, UserProvidedConfig, RequestData, StripeRawError } from './Types.js';
import { createWebhooks } from './Webhooks.js';
import { CryptoProvider } from './crypto/CryptoProvider.js';
import { HttpClient, HttpClientResponse } from './net/HttpClient.js';
import { PlatformFunctions } from './platform/PlatformFunctions.js';
import * as resources from './resources.js';
import { Response, RequestOptions, RawRequestOptions, ApiList, ApiListPromise, ApiSearchResultPromise, ApiSearchResult, StripeStreamResponse, RequestEvent, ResponseEvent, AppInfo, FileData } from './lib.js';
import { Metadata, MetadataParam, Address, JapanAddress, AddressParam, ShippingAddressParam, JapanAddressParam, RangeQueryParam, PaginationParams, Emptyable } from './shared.js';
import { EventNotification as V2EventNotification } from './resources/V2/Core/Events.js';
import { Account, DeletedAccount, AccountCreateParams, AccountRetrieveParams, AccountUpdateParams, AccountListParams, AccountDeleteParams, AccountCreateExternalAccountParams, AccountCreateLoginLinkParams, AccountCreatePersonParams, AccountDeleteExternalAccountParams, AccountDeletePersonParams, AccountListCapabilitiesParams, AccountListExternalAccountsParams, AccountListPersonsParams, AccountRejectParams, AccountRetrieveCurrentParams, AccountRetrieveCapabilityParams, AccountRetrieveExternalAccountParams, AccountRetrievePersonParams, AccountUpdateCapabilityParams, AccountUpdateExternalAccountParams, AccountUpdatePersonParams, AccountResource } from './resources/Accounts.js';
import { AccountLink, AccountLinkCreateParams, AccountLinkResource } from './resources/AccountLinks.js';
import { AccountSession, AccountSessionCreateParams, AccountSessionResource } from './resources/AccountSessions.js';
import { ApplePayDomain, DeletedApplePayDomain, ApplePayDomainCreateParams, ApplePayDomainRetrieveParams, ApplePayDomainListParams, ApplePayDomainDeleteParams, ApplePayDomainResource } from './resources/ApplePayDomains.js';
import { ApplicationFee, ApplicationFeeRetrieveParams, ApplicationFeeListParams, ApplicationFeeCreateRefundParams, ApplicationFeeListRefundsParams, ApplicationFeeRetrieveRefundParams, ApplicationFeeUpdateRefundParams, ApplicationFeeResource } from './resources/ApplicationFees.js';
import { Balance, BalanceRetrieveParams, BalanceResource } from './resources/Balance.js';
import { BalanceSettings, BalanceSettingsRetrieveParams, BalanceSettingsUpdateParams, BalanceSettingResource } from './resources/BalanceSettings.js';
import { BalanceTransaction, BalanceTransactionRetrieveParams, BalanceTransactionListParams, BalanceTransactionResource } from './resources/BalanceTransactions.js';
import { Charge, ChargeCreateParams, ChargeRetrieveParams, ChargeUpdateParams, ChargeListParams, ChargeCaptureParams, ChargeSearchParams, ChargeResource } from './resources/Charges.js';
import { ConfirmationToken, ConfirmationTokenRetrieveParams, ConfirmationTokenResource } from './resources/ConfirmationTokens.js';
import { CountrySpec, CountrySpecRetrieveParams, CountrySpecListParams, CountrySpecResource } from './resources/CountrySpecs.js';
import { Coupon, DeletedCoupon, CouponCreateParams, CouponRetrieveParams, CouponUpdateParams, CouponListParams, CouponDeleteParams, CouponResource } from './resources/Coupons.js';
import { CreditNote, CreditNoteCreateParams, CreditNoteRetrieveParams, CreditNoteUpdateParams, CreditNoteListParams, CreditNoteListLineItemsParams, CreditNoteListPreviewLineItemsParams, CreditNotePreviewParams, CreditNoteVoidCreditNoteParams, CreditNoteResource } from './resources/CreditNotes.js';
import { Customer, DeletedCustomer, CustomerCreateParams, CustomerRetrieveParams, CustomerUpdateParams, CustomerListParams, CustomerDeleteParams, CustomerCreateBalanceTransactionParams, CustomerCreateFundingInstructionsParams, CustomerCreateSourceParams, CustomerCreateTaxIdParams, CustomerDeleteDiscountParams, CustomerDeleteSourceParams, CustomerDeleteTaxIdParams, CustomerListBalanceTransactionsParams, CustomerListCashBalanceTransactionsParams, CustomerListPaymentMethodsParams, CustomerListSourcesParams, CustomerListTaxIdsParams, CustomerRetrieveBalanceTransactionParams, CustomerRetrieveCashBalanceParams, CustomerRetrieveCashBalanceTransactionParams, CustomerRetrievePaymentMethodParams, CustomerRetrieveSourceParams, CustomerRetrieveTaxIdParams, CustomerSearchParams, CustomerUpdateBalanceTransactionParams, CustomerUpdateCashBalanceParams, CustomerUpdateSourceParams, CustomerVerifySourceParams, CustomerResource } from './resources/Customers.js';
import { CustomerSession, CustomerSessionCreateParams, CustomerSessionResource } from './resources/CustomerSessions.js';
import { Dispute, DisputeRetrieveParams, DisputeUpdateParams, DisputeListParams, DisputeCloseParams, DisputeResource } from './resources/Disputes.js';
import { EphemeralKey, EphemeralKeyCreateParams, EphemeralKeyDeleteParams, EphemeralKeyResource } from './resources/EphemeralKeys.js';
import { ExchangeRate, ExchangeRateRetrieveParams, ExchangeRateListParams, ExchangeRateResource } from './resources/ExchangeRates.js';
import { File, FileCreateParams, FileRetrieveParams, FileListParams, FileResource } from './resources/Files.js';
import { FileLink, FileLinkCreateParams, FileLinkRetrieveParams, FileLinkUpdateParams, FileLinkListParams, FileLinkResource } from './resources/FileLinks.js';
import { Invoice, DeletedInvoice, InvoiceCreateParams, InvoiceRetrieveParams, InvoiceUpdateParams, InvoiceListParams, InvoiceDeleteParams, InvoiceAddLinesParams, InvoiceAttachPaymentParams, InvoiceCreatePreviewParams, InvoiceFinalizeInvoiceParams, InvoiceListLineItemsParams, InvoiceMarkUncollectibleParams, InvoicePayParams, InvoiceRemoveLinesParams, InvoiceSearchParams, InvoiceSendInvoiceParams, InvoiceUpdateLinesParams, InvoiceUpdateLineItemParams, InvoiceVoidInvoiceParams, InvoiceResource } from './resources/Invoices.js';
import { InvoiceItem, DeletedInvoiceItem, InvoiceItemCreateParams, InvoiceItemRetrieveParams, InvoiceItemUpdateParams, InvoiceItemListParams, InvoiceItemDeleteParams, InvoiceItemResource } from './resources/InvoiceItems.js';
import { InvoicePayment, InvoicePaymentRetrieveParams, InvoicePaymentListParams, InvoicePaymentResource } from './resources/InvoicePayments.js';
import { InvoiceRenderingTemplate, InvoiceRenderingTemplateRetrieveParams, InvoiceRenderingTemplateListParams, InvoiceRenderingTemplateArchiveParams, InvoiceRenderingTemplateUnarchiveParams, InvoiceRenderingTemplateResource } from './resources/InvoiceRenderingTemplates.js';
import { Mandate, MandateRetrieveParams, MandateResource } from './resources/Mandates.js';
import { PaymentAttemptRecord, PaymentAttemptRecordRetrieveParams, PaymentAttemptRecordListParams, PaymentAttemptRecordResource } from './resources/PaymentAttemptRecords.js';
import { PaymentIntent, PaymentIntentCreateParams, PaymentIntentRetrieveParams, PaymentIntentUpdateParams, PaymentIntentListParams, PaymentIntentApplyCustomerBalanceParams, PaymentIntentCancelParams, PaymentIntentCaptureParams, PaymentIntentConfirmParams, PaymentIntentIncrementAuthorizationParams, PaymentIntentListAmountDetailsLineItemsParams, PaymentIntentSearchParams, PaymentIntentVerifyMicrodepositsParams, PaymentIntentResource } from './resources/PaymentIntents.js';
import { PaymentLink, PaymentLinkCreateParams, PaymentLinkRetrieveParams, PaymentLinkUpdateParams, PaymentLinkListParams, PaymentLinkListLineItemsParams, PaymentLinkResource } from './resources/PaymentLinks.js';
import { PaymentMethod, PaymentMethodCreateParams, PaymentMethodRetrieveParams, PaymentMethodUpdateParams, PaymentMethodListParams, PaymentMethodAttachParams, PaymentMethodDetachParams, PaymentMethodResource } from './resources/PaymentMethods.js';
import { PaymentMethodConfiguration, PaymentMethodConfigurationCreateParams, PaymentMethodConfigurationRetrieveParams, PaymentMethodConfigurationUpdateParams, PaymentMethodConfigurationListParams, PaymentMethodConfigurationResource } from './resources/PaymentMethodConfigurations.js';
import { PaymentMethodDomain, PaymentMethodDomainCreateParams, PaymentMethodDomainRetrieveParams, PaymentMethodDomainUpdateParams, PaymentMethodDomainListParams, PaymentMethodDomainValidateParams, PaymentMethodDomainResource } from './resources/PaymentMethodDomains.js';
import { PaymentRecord, PaymentRecordRetrieveParams, PaymentRecordReportPaymentParams, PaymentRecordReportPaymentAttemptParams, PaymentRecordReportPaymentAttemptCanceledParams, PaymentRecordReportPaymentAttemptFailedParams, PaymentRecordReportPaymentAttemptGuaranteedParams, PaymentRecordReportPaymentAttemptInformationalParams, PaymentRecordReportRefundParams, PaymentRecordResource } from './resources/PaymentRecords.js';
import { Payout, PayoutCreateParams, PayoutRetrieveParams, PayoutUpdateParams, PayoutListParams, PayoutCancelParams, PayoutReverseParams, PayoutResource } from './resources/Payouts.js';
import { Plan, DeletedPlan, PlanCreateParams, PlanRetrieveParams, PlanUpdateParams, PlanListParams, PlanDeleteParams, PlanResource } from './resources/Plans.js';
import { Price, DeletedPrice, PriceCreateParams, PriceRetrieveParams, PriceUpdateParams, PriceListParams, PriceSearchParams, PriceResource } from './resources/Prices.js';
import { Product, DeletedProduct, ProductCreateParams, ProductRetrieveParams, ProductUpdateParams, ProductListParams, ProductDeleteParams, ProductCreateFeatureParams, ProductDeleteFeatureParams, ProductListFeaturesParams, ProductRetrieveFeatureParams, ProductSearchParams, ProductResource } from './resources/Products.js';
import { PromotionCode, PromotionCodeCreateParams, PromotionCodeRetrieveParams, PromotionCodeUpdateParams, PromotionCodeListParams, PromotionCodeResource } from './resources/PromotionCodes.js';
import { Quote, QuoteCreateParams, QuoteRetrieveParams, QuoteUpdateParams, QuoteListParams, QuoteAcceptParams, QuoteCancelParams, QuoteFinalizeQuoteParams, QuoteListComputedUpfrontLineItemsParams, QuoteListLineItemsParams, QuotePdfParams, QuoteResource } from './resources/Quotes.js';
import { Refund, RefundCreateParams, RefundRetrieveParams, RefundUpdateParams, RefundListParams, RefundCancelParams, RefundResource } from './resources/Refunds.js';
import { Review, ReviewRetrieveParams, ReviewListParams, ReviewApproveParams, ReviewResource } from './resources/Reviews.js';
import { SetupAttempt, SetupAttemptListParams, SetupAttemptResource } from './resources/SetupAttempts.js';
import { SetupIntent, SetupIntentCreateParams, SetupIntentRetrieveParams, SetupIntentUpdateParams, SetupIntentListParams, SetupIntentCancelParams, SetupIntentConfirmParams, SetupIntentVerifyMicrodepositsParams, SetupIntentResource } from './resources/SetupIntents.js';
import { ShippingRate, ShippingRateCreateParams, ShippingRateRetrieveParams, ShippingRateUpdateParams, ShippingRateListParams, ShippingRateResource } from './resources/ShippingRates.js';
import { Source, SourceCreateParams, SourceRetrieveParams, SourceUpdateParams, SourceListSourceTransactionsParams, SourceVerifyParams, SourceResource } from './resources/Sources.js';
import { Subscription, SubscriptionCreateParams, SubscriptionRetrieveParams, SubscriptionUpdateParams, SubscriptionListParams, SubscriptionCancelParams, SubscriptionDeleteDiscountParams, SubscriptionMigrateParams, SubscriptionResumeParams, SubscriptionSearchParams, SubscriptionResource } from './resources/Subscriptions.js';
import { SubscriptionItem, DeletedSubscriptionItem, SubscriptionItemCreateParams, SubscriptionItemRetrieveParams, SubscriptionItemUpdateParams, SubscriptionItemListParams, SubscriptionItemDeleteParams, SubscriptionItemResource } from './resources/SubscriptionItems.js';
import { SubscriptionSchedule, SubscriptionScheduleCreateParams, SubscriptionScheduleRetrieveParams, SubscriptionScheduleUpdateParams, SubscriptionScheduleListParams, SubscriptionScheduleCancelParams, SubscriptionScheduleReleaseParams, SubscriptionScheduleResource } from './resources/SubscriptionSchedules.js';
import { TaxCode, TaxCodeRetrieveParams, TaxCodeListParams, TaxCodeResource } from './resources/TaxCodes.js';
import { TaxId, DeletedTaxId, TaxIdCreateParams, TaxIdRetrieveParams, TaxIdListParams, TaxIdDeleteParams, TaxIdResource } from './resources/TaxIds.js';
import { TaxRate, TaxRateCreateParams, TaxRateRetrieveParams, TaxRateUpdateParams, TaxRateListParams, TaxRateResource } from './resources/TaxRates.js';
import { Token, TokenCreateParams, TokenRetrieveParams, TokenResource } from './resources/Tokens.js';
import { Topup, TopupCreateParams, TopupRetrieveParams, TopupUpdateParams, TopupListParams, TopupCancelParams, TopupResource } from './resources/Topups.js';
import { Transfer, TransferCreateParams, TransferRetrieveParams, TransferUpdateParams, TransferListParams, TransferCreateReversalParams, TransferListReversalsParams, TransferRetrieveReversalParams, TransferUpdateReversalParams, TransferResource } from './resources/Transfers.js';
import { WebhookEndpoint, DeletedWebhookEndpoint, WebhookEndpointCreateParams, WebhookEndpointRetrieveParams, WebhookEndpointUpdateParams, WebhookEndpointListParams, WebhookEndpointDeleteParams, WebhookEndpointResource } from './resources/WebhookEndpoints.js';
import { Application, DeletedApplication } from './resources/Applications.js';
import { BalanceTransactionSource } from './resources/BalanceTransactionSources.js';
import { BankAccount, DeletedBankAccount } from './resources/BankAccounts.js';
import { Card, DeletedCard } from './resources/Cards.js';
import { ConnectCollectionTransfer } from './resources/ConnectCollectionTransfers.js';
import { Discount, DeletedDiscount } from './resources/Discounts.js';
import { FundingInstructions } from './resources/FundingInstructions.js';
import { LineItem } from './resources/LineItems.js';
import { ReserveTransaction } from './resources/ReserveTransactions.js';
import { SourceMandateNotification } from './resources/SourceMandateNotifications.js';
import { SourceTransaction } from './resources/SourceTransactions.js';
import { TaxDeductedAtSource } from './resources/TaxDeductedAtSources.js';
import { Capability } from './resources/Capabilities.js';
import { ExternalAccount, DeletedExternalAccount } from './resources/ExternalAccounts.js';
import { LoginLink } from './resources/LoginLinks.js';
import { Person, DeletedPerson } from './resources/Persons.js';
import { FeeRefund } from './resources/FeeRefunds.js';
import { CreditNoteLineItem } from './resources/CreditNoteLineItems.js';
import { CustomerBalanceTransaction } from './resources/CustomerBalanceTransactions.js';
import { CashBalance } from './resources/CashBalances.js';
import { CustomerCashBalanceTransaction } from './resources/CustomerCashBalanceTransactions.js';
import { CustomerSource, DeletedCustomerSource } from './resources/CustomerSources.js';
import { InvoiceLineItem } from './resources/InvoiceLineItems.js';
import { PaymentIntentAmountDetailsLineItem } from './resources/PaymentIntentAmountDetailsLineItems.js';
import { ProductFeature, DeletedProductFeature } from './resources/ProductFeatures.js';
import { TransferReversal } from './resources/TransferReversals.js';
import { Apps } from './resources/Apps/index.js';
import { Billing } from './resources/Billing/index.js';
import { BillingPortal } from './resources/BillingPortal/index.js';
import { Checkout } from './resources/Checkout/index.js';
import { Climate } from './resources/Climate/index.js';
import { Entitlements } from './resources/Entitlements/index.js';
import { FinancialConnections } from './resources/FinancialConnections/index.js';
import { Forwarding } from './resources/Forwarding/index.js';
import { Identity } from './resources/Identity/index.js';
import { Issuing } from './resources/Issuing/index.js';
import { Radar } from './resources/Radar/index.js';
import { Reporting } from './resources/Reporting/index.js';
import { Sigma } from './resources/Sigma/index.js';
import { Tax } from './resources/Tax/index.js';
import { Terminal } from './resources/Terminal/index.js';
import { TestHelpers } from './resources/TestHelpers/index.js';
import { Treasury } from './resources/Treasury/index.js';
import { V2 } from './resources/V2/index.js';
import { AccountApplicationAuthorizedEvent, AccountApplicationDeauthorizedEvent, AccountExternalAccountCreatedEvent, AccountExternalAccountDeletedEvent, AccountExternalAccountUpdatedEvent, AccountUpdatedEvent, ApplicationFeeCreatedEvent, ApplicationFeeRefundUpdatedEvent, ApplicationFeeRefundedEvent, BalanceAvailableEvent, BalanceSettingsUpdatedEvent, BillingAlertTriggeredEvent, BillingCreditBalanceTransactionCreatedEvent, BillingCreditGrantCreatedEvent, BillingCreditGrantUpdatedEvent, BillingMeterCreatedEvent, BillingMeterDeactivatedEvent, BillingMeterReactivatedEvent, BillingMeterUpdatedEvent, BillingPortalConfigurationCreatedEvent, BillingPortalConfigurationUpdatedEvent, BillingPortalSessionCreatedEvent, CapabilityUpdatedEvent, CashBalanceFundsAvailableEvent, ChargeCapturedEvent, ChargeDisputeClosedEvent, ChargeDisputeCreatedEvent, ChargeDisputeFundsReinstatedEvent, ChargeDisputeFundsWithdrawnEvent, ChargeDisputeUpdatedEvent, ChargeExpiredEvent, ChargeFailedEvent, ChargePendingEvent, ChargeRefundUpdatedEvent, ChargeRefundedEvent, ChargeSucceededEvent, ChargeUpdatedEvent, CheckoutSessionAsyncPaymentFailedEvent, CheckoutSessionAsyncPaymentSucceededEvent, CheckoutSessionCompletedEvent, CheckoutSessionExpiredEvent, ClimateOrderCanceledEvent, ClimateOrderCreatedEvent, ClimateOrderDelayedEvent, ClimateOrderDeliveredEvent, ClimateOrderProductSubstitutedEvent, ClimateProductCreatedEvent, ClimateProductPricingUpdatedEvent, CouponCreatedEvent, CouponDeletedEvent, CouponUpdatedEvent, CreditNoteCreatedEvent, CreditNoteUpdatedEvent, CreditNoteVoidedEvent, CustomerCreatedEvent, CustomerDeletedEvent, CustomerDiscountCreatedEvent, CustomerDiscountDeletedEvent, CustomerDiscountUpdatedEvent, CustomerSourceCreatedEvent, CustomerSourceDeletedEvent, CustomerSourceExpiringEvent, CustomerSourceUpdatedEvent, CustomerSubscriptionCreatedEvent, CustomerSubscriptionDeletedEvent, CustomerSubscriptionPausedEvent, CustomerSubscriptionPendingUpdateAppliedEvent, CustomerSubscriptionPendingUpdateExpiredEvent, CustomerSubscriptionResumedEvent, CustomerSubscriptionTrialWillEndEvent, CustomerSubscriptionUpdatedEvent, CustomerTaxIdCreatedEvent, CustomerTaxIdDeletedEvent, CustomerTaxIdUpdatedEvent, CustomerUpdatedEvent, CustomerCashBalanceTransactionCreatedEvent, EntitlementsActiveEntitlementSummaryUpdatedEvent, FileCreatedEvent, FinancialConnectionsAccountAccountNumbersUpdatedEvent, FinancialConnectionsAccountCreatedEvent, FinancialConnectionsAccountDeactivatedEvent, FinancialConnectionsAccountDisconnectedEvent, FinancialConnectionsAccountReactivatedEvent, FinancialConnectionsAccountRefreshedBalanceEvent, FinancialConnectionsAccountRefreshedOwnershipEvent, FinancialConnectionsAccountRefreshedTransactionsEvent, FinancialConnectionsAccountUpcomingAccountNumberExpiryEvent, IdentityVerificationSessionCanceledEvent, IdentityVerificationSessionCreatedEvent, IdentityVerificationSessionProcessingEvent, IdentityVerificationSessionRedactedEvent, IdentityVerificationSessionRequiresInputEvent, IdentityVerificationSessionVerifiedEvent, InvoiceCreatedEvent, InvoiceDeletedEvent, InvoiceFinalizationFailedEvent, InvoiceFinalizedEvent, InvoiceMarkedUncollectibleEvent, InvoiceOverdueEvent, InvoiceOverpaidEvent, InvoicePaidEvent, InvoicePaymentActionRequiredEvent, InvoicePaymentAttemptRequiredEvent, InvoicePaymentFailedEvent, InvoicePaymentSucceededEvent, InvoiceSentEvent, InvoiceUpcomingEvent, InvoiceUpdatedEvent, InvoiceVoidedEvent, InvoiceWillBeDueEvent, InvoicePaymentPaidEvent, InvoiceItemCreatedEvent, InvoiceItemDeletedEvent, IssuingAuthorizationCreatedEvent, IssuingAuthorizationRequestEvent, IssuingAuthorizationUpdatedEvent, IssuingCardCreatedEvent, IssuingCardUpdatedEvent, IssuingCardholderCreatedEvent, IssuingCardholderUpdatedEvent, IssuingDisputeClosedEvent, IssuingDisputeCreatedEvent, IssuingDisputeFundsReinstatedEvent, IssuingDisputeFundsRescindedEvent, IssuingDisputeSubmittedEvent, IssuingDisputeUpdatedEvent, IssuingPersonalizationDesignActivatedEvent, IssuingPersonalizationDesignDeactivatedEvent, IssuingPersonalizationDesignRejectedEvent, IssuingPersonalizationDesignUpdatedEvent, IssuingTokenCreatedEvent, IssuingTokenUpdatedEvent, IssuingTransactionCreatedEvent, IssuingTransactionPurchaseDetailsReceiptUpdatedEvent, IssuingTransactionUpdatedEvent, MandateUpdatedEvent, PaymentIntentAmountCapturableUpdatedEvent, PaymentIntentCanceledEvent, PaymentIntentCreatedEvent, PaymentIntentPartiallyFundedEvent, PaymentIntentPaymentFailedEvent, PaymentIntentProcessingEvent, PaymentIntentRequiresActionEvent, PaymentIntentSucceededEvent, PaymentLinkCreatedEvent, PaymentLinkUpdatedEvent, PaymentMethodAttachedEvent, PaymentMethodAutomaticallyUpdatedEvent, PaymentMethodDetachedEvent, PaymentMethodUpdatedEvent, PayoutCanceledEvent, PayoutCreatedEvent, PayoutFailedEvent, PayoutPaidEvent, PayoutReconciliationCompletedEvent, PayoutUpdatedEvent, PersonCreatedEvent, PersonDeletedEvent, PersonUpdatedEvent, PlanCreatedEvent, PlanDeletedEvent, PlanUpdatedEvent, PriceCreatedEvent, PriceDeletedEvent, PriceUpdatedEvent, ProductCreatedEvent, ProductDeletedEvent, ProductUpdatedEvent, PromotionCodeCreatedEvent, PromotionCodeUpdatedEvent, QuoteAcceptedEvent, QuoteCanceledEvent, QuoteCreatedEvent, QuoteFinalizedEvent, RadarEarlyFraudWarningCreatedEvent, RadarEarlyFraudWarningUpdatedEvent, RefundCreatedEvent, RefundFailedEvent, RefundUpdatedEvent, ReportingReportRunFailedEvent, ReportingReportRunSucceededEvent, ReportingReportTypeUpdatedEvent, ReviewClosedEvent, ReviewOpenedEvent, SetupIntentCanceledEvent, SetupIntentCreatedEvent, SetupIntentRequiresActionEvent, SetupIntentSetupFailedEvent, SetupIntentSucceededEvent, SigmaScheduledQueryRunCreatedEvent, SourceCanceledEvent, SourceChargeableEvent, SourceFailedEvent, SourceMandateNotificationEvent, SourceRefundAttributesRequiredEvent, SourceTransactionCreatedEvent, SourceTransactionUpdatedEvent, SubscriptionScheduleAbortedEvent, SubscriptionScheduleCanceledEvent, SubscriptionScheduleCompletedEvent, SubscriptionScheduleCreatedEvent, SubscriptionScheduleExpiringEvent, SubscriptionScheduleReleasedEvent, SubscriptionScheduleUpdatedEvent, TaxSettingsUpdatedEvent, TaxRateCreatedEvent, TaxRateUpdatedEvent, TerminalReaderActionFailedEvent, TerminalReaderActionSucceededEvent, TerminalReaderActionUpdatedEvent, TestHelpersTestClockAdvancingEvent, TestHelpersTestClockCreatedEvent, TestHelpersTestClockDeletedEvent, TestHelpersTestClockInternalFailureEvent, TestHelpersTestClockReadyEvent, TopupCanceledEvent, TopupCreatedEvent, TopupFailedEvent, TopupReversedEvent, TopupSucceededEvent, TransferCreatedEvent, TransferReversedEvent, TransferUpdatedEvent, TreasuryCreditReversalCreatedEvent, TreasuryCreditReversalPostedEvent, TreasuryDebitReversalCompletedEvent, TreasuryDebitReversalCreatedEvent, TreasuryDebitReversalInitialCreditGrantedEvent, TreasuryFinancialAccountClosedEvent, TreasuryFinancialAccountCreatedEvent, TreasuryFinancialAccountFeaturesStatusUpdatedEvent, TreasuryInboundTransferCanceledEvent, TreasuryInboundTransferCreatedEvent, TreasuryInboundTransferFailedEvent, TreasuryInboundTransferSucceededEvent, TreasuryOutboundPaymentCanceledEvent, TreasuryOutboundPaymentCreatedEvent, TreasuryOutboundPaymentExpectedArrivalDateUpdatedEvent, TreasuryOutboundPaymentFailedEvent, TreasuryOutboundPaymentPostedEvent, TreasuryOutboundPaymentReturnedEvent, TreasuryOutboundPaymentTrackingDetailsUpdatedEvent, TreasuryOutboundTransferCanceledEvent, TreasuryOutboundTransferCreatedEvent, TreasuryOutboundTransferExpectedArrivalDateUpdatedEvent, TreasuryOutboundTransferFailedEvent, TreasuryOutboundTransferPostedEvent, TreasuryOutboundTransferReturnedEvent, TreasuryOutboundTransferTrackingDetailsUpdatedEvent, TreasuryReceivedCreditCreatedEvent, TreasuryReceivedCreditFailedEvent, TreasuryReceivedCreditSucceededEvent, TreasuryReceivedDebitCreatedEvent, Event, EventBase, EventRetrieveParams, EventListParams, EventResource } from './resources/Events.js';
import { OAuthResource } from './resources.js';
type RequestSenderFactory = (stripe: Stripe) => RequestSender;
export declare class Stripe {
    static PACKAGE_VERSION: string;
    static API_VERSION: string;
    static USER_AGENT: {
        bindings_version: string;
        lang: string;
        publisher: string;
        uname: null;
        typescript: boolean;
    };
    static StripeResource: typeof StripeResource;
    static resources: typeof resources;
    static HttpClient: typeof HttpClient;
    static HttpClientResponse: typeof HttpClientResponse;
    static CryptoProvider: typeof CryptoProvider;
    private static _platformFunctions;
    private static _requestSenderFactory;
    static webhooks: ReturnType<typeof createWebhooks>;
    static createNodeHttpClient: PlatformFunctions['createNodeHttpClient'];
    static createFetchHttpClient: PlatformFunctions['createFetchHttpClient'];
    static createNodeCryptoProvider: PlatformFunctions['createNodeCryptoProvider'];
    static createSubtleCryptoProvider: PlatformFunctions['createSubtleCryptoProvider'];
    _appInfo: any;
    on: any;
    off: any;
    once: any;
    VERSION: string;
    webhooks: ReturnType<typeof createWebhooks>;
    errors: typeof _Error;
    _api: any;
    _prevRequestMetrics: any;
    _emitter: any;
    _enableTelemetry: boolean;
    _requestSender: RequestSender;
    _platformFunctions: PlatformFunctions;
    _authenticator: RequestAuthenticator | null;
    _clientId?: string;
    accountLinks: AccountLinkResource;
    accountSessions: AccountSessionResource;
    accounts: AccountResource;
    applePayDomains: ApplePayDomainResource;
    applicationFees: ApplicationFeeResource;
    balance: BalanceResource;
    balanceSettings: BalanceSettingResource;
    balanceTransactions: BalanceTransactionResource;
    charges: ChargeResource;
    confirmationTokens: ConfirmationTokenResource;
    countrySpecs: CountrySpecResource;
    coupons: CouponResource;
    creditNotes: CreditNoteResource;
    customerSessions: CustomerSessionResource;
    customers: CustomerResource;
    disputes: DisputeResource;
    ephemeralKeys: EphemeralKeyResource;
    events: EventResource;
    exchangeRates: ExchangeRateResource;
    fileLinks: FileLinkResource;
    files: FileResource;
    invoiceItems: InvoiceItemResource;
    invoicePayments: InvoicePaymentResource;
    invoiceRenderingTemplates: InvoiceRenderingTemplateResource;
    invoices: InvoiceResource;
    mandates: MandateResource;
    paymentAttemptRecords: PaymentAttemptRecordResource;
    paymentIntents: PaymentIntentResource;
    paymentLinks: PaymentLinkResource;
    paymentMethodConfigurations: PaymentMethodConfigurationResource;
    paymentMethodDomains: PaymentMethodDomainResource;
    paymentMethods: PaymentMethodResource;
    paymentRecords: PaymentRecordResource;
    payouts: PayoutResource;
    plans: PlanResource;
    prices: PriceResource;
    products: ProductResource;
    promotionCodes: PromotionCodeResource;
    quotes: QuoteResource;
    refunds: RefundResource;
    reviews: ReviewResource;
    setupAttempts: SetupAttemptResource;
    setupIntents: SetupIntentResource;
    shippingRates: ShippingRateResource;
    sources: SourceResource;
    subscriptionItems: SubscriptionItemResource;
    subscriptionSchedules: SubscriptionScheduleResource;
    subscriptions: SubscriptionResource;
    taxCodes: TaxCodeResource;
    taxIds: TaxIdResource;
    taxRates: TaxRateResource;
    tokens: TokenResource;
    topups: TopupResource;
    transfers: TransferResource;
    webhookEndpoints: WebhookEndpointResource;
    apps: Apps;
    billing: Billing;
    billingPortal: BillingPortal;
    checkout: Checkout;
    climate: Climate;
    entitlements: Entitlements;
    financialConnections: FinancialConnections;
    forwarding: Forwarding;
    identity: Identity;
    issuing: Issuing;
    radar: Radar;
    reporting: Reporting;
    sigma: Sigma;
    tax: Tax;
    terminal: Terminal;
    testHelpers: TestHelpers;
    treasury: Treasury;
    v2: V2;
    account: AccountResource;
    oauth: OAuthResource;
    static initialize(platformFunctions: PlatformFunctions, requestSenderFactory?: RequestSenderFactory): void;
    constructor(key: string, config?: Record<string, unknown>);
    /**
     * Allows for sending "raw" requests to the Stripe API, which can be used for
     * testing new API endpoints or performing requests that the library does
     * not support yet.
     *
     * @param method - HTTP request method, 'GET', 'POST', or 'DELETE'
     * @param path - The path of the request, e.g. '/v1/beta_endpoint'
     * @param params - The parameters to include in the request body.
     * @param options - Additional request options.
     */
    rawRequest(method: string, path: string, params?: RequestData, options?: RawRequestOptions): Promise<any>;
    /**
     * @private
     */
    _setAuthenticator(key: string, authenticator: RequestAuthenticator | null): void;
    /**
     * @private
     * This may be removed in the future.
     */
    _setAppInfo(info: AppInfo): void;
    setClientId(clientId: string): void;
    getClientId(): string | undefined;
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     */
    getConstant(c: string): unknown;
    getMaxNetworkRetries(): number;
    /**
     * @private
     * This may be removed in the future.
     */
    _setApiNumberField(prop: keyof Stripe['_api'], n: number, defaultVal?: number): void;
    getMaxNetworkRetryDelay(): number;
    getInitialNetworkRetryDelay(): number;
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     *
     * Gets a JSON version of a User-Agent and uses a cached version for a slight
     * speed advantage.
     */
    getClientUserAgent(cb: (userAgent: string) => void): void;
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     *
     * Gets a JSON version of a User-Agent by encoding a seeded object and
     * fetching a uname from the system.
     */
    getClientUserAgentSeeded(seed: Record<string, string | boolean | null>, cb: (userAgent: string) => void): void;
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     */
    getAppInfoAsString(): string;
    getTelemetryEnabled(): boolean;
    /**
     * @private
     * This may be removed in the future.
     */
    _prepResources(): void;
    /**
     * @private
     * This may be removed in the future.
     */
    _getPropsFromConfig(config: Record<string, unknown>): UserProvidedConfig;
    /**
     * @private
     * This may be removed in the future.
     */
    _setApiField<K extends keyof Stripe['_api']>(key: K, value: Stripe['_api'][K]): void;
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     */
    getApiField<K extends keyof Stripe['_api']>(key: K): Stripe['_api'][K];
    parseEventNotification(payload: string | Uint8Array, header: string | Uint8Array, secret: string, tolerance?: number, cryptoProvider?: CryptoProvider, receivedAt?: number): V2EventNotification;
}
export declare function createStripe(platformFunctions: PlatformFunctions, requestSender?: RequestSenderFactory): typeof Stripe;
export declare namespace Stripe {
    export { Account, DeletedAccount, AccountCreateParams, AccountRetrieveParams, AccountUpdateParams, AccountListParams, AccountDeleteParams, AccountCreateExternalAccountParams, AccountCreateLoginLinkParams, AccountCreatePersonParams, AccountDeleteExternalAccountParams, AccountDeletePersonParams, AccountListCapabilitiesParams, AccountListExternalAccountsParams, AccountListPersonsParams, AccountRejectParams, AccountRetrieveCurrentParams, AccountRetrieveCapabilityParams, AccountRetrieveExternalAccountParams, AccountRetrievePersonParams, AccountUpdateCapabilityParams, AccountUpdateExternalAccountParams, AccountUpdatePersonParams, AccountResource, };
    export { AccountLink, AccountLinkCreateParams, AccountLinkResource };
    export { AccountSession, AccountSessionCreateParams, AccountSessionResource };
    export { ApplePayDomain, DeletedApplePayDomain, ApplePayDomainCreateParams, ApplePayDomainRetrieveParams, ApplePayDomainListParams, ApplePayDomainDeleteParams, ApplePayDomainResource, };
    export { ApplicationFee, ApplicationFeeRetrieveParams, ApplicationFeeListParams, ApplicationFeeCreateRefundParams, ApplicationFeeListRefundsParams, ApplicationFeeRetrieveRefundParams, ApplicationFeeUpdateRefundParams, ApplicationFeeResource, };
    export { Balance, BalanceRetrieveParams, BalanceResource };
    export { BalanceSettings, BalanceSettingsRetrieveParams, BalanceSettingsUpdateParams, BalanceSettingResource, };
    export { BalanceTransaction, BalanceTransactionRetrieveParams, BalanceTransactionListParams, BalanceTransactionResource, };
    export { Charge, ChargeCreateParams, ChargeRetrieveParams, ChargeUpdateParams, ChargeListParams, ChargeCaptureParams, ChargeSearchParams, ChargeResource, };
    export { ConfirmationToken, ConfirmationTokenRetrieveParams, ConfirmationTokenResource, };
    export { CountrySpec, CountrySpecRetrieveParams, CountrySpecListParams, CountrySpecResource, };
    export { Coupon, DeletedCoupon, CouponCreateParams, CouponRetrieveParams, CouponUpdateParams, CouponListParams, CouponDeleteParams, CouponResource, };
    export { CreditNote, CreditNoteCreateParams, CreditNoteRetrieveParams, CreditNoteUpdateParams, CreditNoteListParams, CreditNoteListLineItemsParams, CreditNoteListPreviewLineItemsParams, CreditNotePreviewParams, CreditNoteVoidCreditNoteParams, CreditNoteResource, };
    export { Customer, DeletedCustomer, CustomerCreateParams, CustomerRetrieveParams, CustomerUpdateParams, CustomerListParams, CustomerDeleteParams, CustomerCreateBalanceTransactionParams, CustomerCreateFundingInstructionsParams, CustomerCreateSourceParams, CustomerCreateTaxIdParams, CustomerDeleteDiscountParams, CustomerDeleteSourceParams, CustomerDeleteTaxIdParams, CustomerListBalanceTransactionsParams, CustomerListCashBalanceTransactionsParams, CustomerListPaymentMethodsParams, CustomerListSourcesParams, CustomerListTaxIdsParams, CustomerRetrieveBalanceTransactionParams, CustomerRetrieveCashBalanceParams, CustomerRetrieveCashBalanceTransactionParams, CustomerRetrievePaymentMethodParams, CustomerRetrieveSourceParams, CustomerRetrieveTaxIdParams, CustomerSearchParams, CustomerUpdateBalanceTransactionParams, CustomerUpdateCashBalanceParams, CustomerUpdateSourceParams, CustomerVerifySourceParams, CustomerResource, };
    export { CustomerSession, CustomerSessionCreateParams, CustomerSessionResource, };
    export { Dispute, DisputeRetrieveParams, DisputeUpdateParams, DisputeListParams, DisputeCloseParams, DisputeResource, };
    export { EphemeralKey, EphemeralKeyCreateParams, EphemeralKeyDeleteParams, EphemeralKeyResource, };
    export { Event, EventBase, EventRetrieveParams, EventListParams, EventResource, };
    export { ExchangeRate, ExchangeRateRetrieveParams, ExchangeRateListParams, ExchangeRateResource, };
    export { File, FileCreateParams, FileRetrieveParams, FileListParams, FileResource, };
    export { FileLink, FileLinkCreateParams, FileLinkRetrieveParams, FileLinkUpdateParams, FileLinkListParams, FileLinkResource, };
    export { Invoice, DeletedInvoice, InvoiceCreateParams, InvoiceRetrieveParams, InvoiceUpdateParams, InvoiceListParams, InvoiceDeleteParams, InvoiceAddLinesParams, InvoiceAttachPaymentParams, InvoiceCreatePreviewParams, InvoiceFinalizeInvoiceParams, InvoiceListLineItemsParams, InvoiceMarkUncollectibleParams, InvoicePayParams, InvoiceRemoveLinesParams, InvoiceSearchParams, InvoiceSendInvoiceParams, InvoiceUpdateLinesParams, InvoiceUpdateLineItemParams, InvoiceVoidInvoiceParams, InvoiceResource, };
    export { InvoiceItem, DeletedInvoiceItem, InvoiceItemCreateParams, InvoiceItemRetrieveParams, InvoiceItemUpdateParams, InvoiceItemListParams, InvoiceItemDeleteParams, InvoiceItemResource, };
    export { InvoicePayment, InvoicePaymentRetrieveParams, InvoicePaymentListParams, InvoicePaymentResource, };
    export { InvoiceRenderingTemplate, InvoiceRenderingTemplateRetrieveParams, InvoiceRenderingTemplateListParams, InvoiceRenderingTemplateArchiveParams, InvoiceRenderingTemplateUnarchiveParams, InvoiceRenderingTemplateResource, };
    export { Mandate, MandateRetrieveParams, MandateResource };
    export { PaymentAttemptRecord, PaymentAttemptRecordRetrieveParams, PaymentAttemptRecordListParams, PaymentAttemptRecordResource, };
    export { PaymentIntent, PaymentIntentCreateParams, PaymentIntentRetrieveParams, PaymentIntentUpdateParams, PaymentIntentListParams, PaymentIntentApplyCustomerBalanceParams, PaymentIntentCancelParams, PaymentIntentCaptureParams, PaymentIntentConfirmParams, PaymentIntentIncrementAuthorizationParams, PaymentIntentListAmountDetailsLineItemsParams, PaymentIntentSearchParams, PaymentIntentVerifyMicrodepositsParams, PaymentIntentResource, };
    export { PaymentLink, PaymentLinkCreateParams, PaymentLinkRetrieveParams, PaymentLinkUpdateParams, PaymentLinkListParams, PaymentLinkListLineItemsParams, PaymentLinkResource, };
    export { PaymentMethod, PaymentMethodCreateParams, PaymentMethodRetrieveParams, PaymentMethodUpdateParams, PaymentMethodListParams, PaymentMethodAttachParams, PaymentMethodDetachParams, PaymentMethodResource, };
    export { PaymentMethodConfiguration, PaymentMethodConfigurationCreateParams, PaymentMethodConfigurationRetrieveParams, PaymentMethodConfigurationUpdateParams, PaymentMethodConfigurationListParams, PaymentMethodConfigurationResource, };
    export { PaymentMethodDomain, PaymentMethodDomainCreateParams, PaymentMethodDomainRetrieveParams, PaymentMethodDomainUpdateParams, PaymentMethodDomainListParams, PaymentMethodDomainValidateParams, PaymentMethodDomainResource, };
    export { PaymentRecord, PaymentRecordRetrieveParams, PaymentRecordReportPaymentParams, PaymentRecordReportPaymentAttemptParams, PaymentRecordReportPaymentAttemptCanceledParams, PaymentRecordReportPaymentAttemptFailedParams, PaymentRecordReportPaymentAttemptGuaranteedParams, PaymentRecordReportPaymentAttemptInformationalParams, PaymentRecordReportRefundParams, PaymentRecordResource, };
    export { Payout, PayoutCreateParams, PayoutRetrieveParams, PayoutUpdateParams, PayoutListParams, PayoutCancelParams, PayoutReverseParams, PayoutResource, };
    export { Plan, DeletedPlan, PlanCreateParams, PlanRetrieveParams, PlanUpdateParams, PlanListParams, PlanDeleteParams, PlanResource, };
    export { Price, DeletedPrice, PriceCreateParams, PriceRetrieveParams, PriceUpdateParams, PriceListParams, PriceSearchParams, PriceResource, };
    export { Product, DeletedProduct, ProductCreateParams, ProductRetrieveParams, ProductUpdateParams, ProductListParams, ProductDeleteParams, ProductCreateFeatureParams, ProductDeleteFeatureParams, ProductListFeaturesParams, ProductRetrieveFeatureParams, ProductSearchParams, ProductResource, };
    export { PromotionCode, PromotionCodeCreateParams, PromotionCodeRetrieveParams, PromotionCodeUpdateParams, PromotionCodeListParams, PromotionCodeResource, };
    export { Quote, QuoteCreateParams, QuoteRetrieveParams, QuoteUpdateParams, QuoteListParams, QuoteAcceptParams, QuoteCancelParams, QuoteFinalizeQuoteParams, QuoteListComputedUpfrontLineItemsParams, QuoteListLineItemsParams, QuotePdfParams, QuoteResource, };
    export { Refund, RefundCreateParams, RefundRetrieveParams, RefundUpdateParams, RefundListParams, RefundCancelParams, RefundResource, };
    export { Review, ReviewRetrieveParams, ReviewListParams, ReviewApproveParams, ReviewResource, };
    export { SetupAttempt, SetupAttemptListParams, SetupAttemptResource };
    export { SetupIntent, SetupIntentCreateParams, SetupIntentRetrieveParams, SetupIntentUpdateParams, SetupIntentListParams, SetupIntentCancelParams, SetupIntentConfirmParams, SetupIntentVerifyMicrodepositsParams, SetupIntentResource, };
    export { ShippingRate, ShippingRateCreateParams, ShippingRateRetrieveParams, ShippingRateUpdateParams, ShippingRateListParams, ShippingRateResource, };
    export { Source, SourceCreateParams, SourceRetrieveParams, SourceUpdateParams, SourceListSourceTransactionsParams, SourceVerifyParams, SourceResource, };
    export { Subscription, SubscriptionCreateParams, SubscriptionRetrieveParams, SubscriptionUpdateParams, SubscriptionListParams, SubscriptionCancelParams, SubscriptionDeleteDiscountParams, SubscriptionMigrateParams, SubscriptionResumeParams, SubscriptionSearchParams, SubscriptionResource, };
    export { SubscriptionItem, DeletedSubscriptionItem, SubscriptionItemCreateParams, SubscriptionItemRetrieveParams, SubscriptionItemUpdateParams, SubscriptionItemListParams, SubscriptionItemDeleteParams, SubscriptionItemResource, };
    export { SubscriptionSchedule, SubscriptionScheduleCreateParams, SubscriptionScheduleRetrieveParams, SubscriptionScheduleUpdateParams, SubscriptionScheduleListParams, SubscriptionScheduleCancelParams, SubscriptionScheduleReleaseParams, SubscriptionScheduleResource, };
    export { TaxCode, TaxCodeRetrieveParams, TaxCodeListParams, TaxCodeResource };
    export { TaxId, DeletedTaxId, TaxIdCreateParams, TaxIdRetrieveParams, TaxIdListParams, TaxIdDeleteParams, TaxIdResource, };
    export { TaxRate, TaxRateCreateParams, TaxRateRetrieveParams, TaxRateUpdateParams, TaxRateListParams, TaxRateResource, };
    export { Token, TokenCreateParams, TokenRetrieveParams, TokenResource };
    export { Topup, TopupCreateParams, TopupRetrieveParams, TopupUpdateParams, TopupListParams, TopupCancelParams, TopupResource, };
    export { Transfer, TransferCreateParams, TransferRetrieveParams, TransferUpdateParams, TransferListParams, TransferCreateReversalParams, TransferListReversalsParams, TransferRetrieveReversalParams, TransferUpdateReversalParams, TransferResource, };
    export { WebhookEndpoint, DeletedWebhookEndpoint, WebhookEndpointCreateParams, WebhookEndpointRetrieveParams, WebhookEndpointUpdateParams, WebhookEndpointListParams, WebhookEndpointDeleteParams, WebhookEndpointResource, };
    export { Application, DeletedApplication };
    export { BalanceTransactionSource };
    export { BankAccount, DeletedBankAccount };
    export { Card, DeletedCard };
    export { ConnectCollectionTransfer };
    export { Discount, DeletedDiscount };
    export { FundingInstructions };
    export { LineItem };
    export { ReserveTransaction };
    export { SourceMandateNotification };
    export { SourceTransaction };
    export { TaxDeductedAtSource };
    export { Capability };
    export { ExternalAccount, DeletedExternalAccount };
    export { LoginLink };
    export { Person, DeletedPerson };
    export { FeeRefund };
    export { CreditNoteLineItem };
    export { CustomerBalanceTransaction };
    export { CashBalance };
    export { CustomerCashBalanceTransaction };
    export { CustomerSource, DeletedCustomerSource };
    export { InvoiceLineItem };
    export { PaymentIntentAmountDetailsLineItem };
    export { ProductFeature, DeletedProductFeature };
    export { TransferReversal };
    export { Apps };
    export { Billing };
    export { BillingPortal };
    export { Checkout };
    export { Climate };
    export { Entitlements };
    export { FinancialConnections };
    export { Forwarding };
    export { Identity };
    export { Issuing };
    export { Radar };
    export { Reporting };
    export { Sigma };
    export { Tax };
    export { Terminal };
    export { TestHelpers };
    export { Treasury };
    export { V2 };
    export { AccountApplicationAuthorizedEvent, AccountApplicationDeauthorizedEvent, AccountExternalAccountCreatedEvent, AccountExternalAccountDeletedEvent, AccountExternalAccountUpdatedEvent, AccountUpdatedEvent, ApplicationFeeCreatedEvent, ApplicationFeeRefundUpdatedEvent, ApplicationFeeRefundedEvent, BalanceAvailableEvent, BalanceSettingsUpdatedEvent, BillingAlertTriggeredEvent, BillingCreditBalanceTransactionCreatedEvent, BillingCreditGrantCreatedEvent, BillingCreditGrantUpdatedEvent, BillingMeterCreatedEvent, BillingMeterDeactivatedEvent, BillingMeterReactivatedEvent, BillingMeterUpdatedEvent, BillingPortalConfigurationCreatedEvent, BillingPortalConfigurationUpdatedEvent, BillingPortalSessionCreatedEvent, CapabilityUpdatedEvent, CashBalanceFundsAvailableEvent, ChargeCapturedEvent, ChargeDisputeClosedEvent, ChargeDisputeCreatedEvent, ChargeDisputeFundsReinstatedEvent, ChargeDisputeFundsWithdrawnEvent, ChargeDisputeUpdatedEvent, ChargeExpiredEvent, ChargeFailedEvent, ChargePendingEvent, ChargeRefundUpdatedEvent, ChargeRefundedEvent, ChargeSucceededEvent, ChargeUpdatedEvent, CheckoutSessionAsyncPaymentFailedEvent, CheckoutSessionAsyncPaymentSucceededEvent, CheckoutSessionCompletedEvent, CheckoutSessionExpiredEvent, ClimateOrderCanceledEvent, ClimateOrderCreatedEvent, ClimateOrderDelayedEvent, ClimateOrderDeliveredEvent, ClimateOrderProductSubstitutedEvent, ClimateProductCreatedEvent, ClimateProductPricingUpdatedEvent, CouponCreatedEvent, CouponDeletedEvent, CouponUpdatedEvent, CreditNoteCreatedEvent, CreditNoteUpdatedEvent, CreditNoteVoidedEvent, CustomerCreatedEvent, CustomerDeletedEvent, CustomerDiscountCreatedEvent, CustomerDiscountDeletedEvent, CustomerDiscountUpdatedEvent, CustomerSourceCreatedEvent, CustomerSourceDeletedEvent, CustomerSourceExpiringEvent, CustomerSourceUpdatedEvent, CustomerSubscriptionCreatedEvent, CustomerSubscriptionDeletedEvent, CustomerSubscriptionPausedEvent, CustomerSubscriptionPendingUpdateAppliedEvent, CustomerSubscriptionPendingUpdateExpiredEvent, CustomerSubscriptionResumedEvent, CustomerSubscriptionTrialWillEndEvent, CustomerSubscriptionUpdatedEvent, CustomerTaxIdCreatedEvent, CustomerTaxIdDeletedEvent, CustomerTaxIdUpdatedEvent, CustomerUpdatedEvent, CustomerCashBalanceTransactionCreatedEvent, EntitlementsActiveEntitlementSummaryUpdatedEvent, FileCreatedEvent, FinancialConnectionsAccountAccountNumbersUpdatedEvent, FinancialConnectionsAccountCreatedEvent, FinancialConnectionsAccountDeactivatedEvent, FinancialConnectionsAccountDisconnectedEvent, FinancialConnectionsAccountReactivatedEvent, FinancialConnectionsAccountRefreshedBalanceEvent, FinancialConnectionsAccountRefreshedOwnershipEvent, FinancialConnectionsAccountRefreshedTransactionsEvent, FinancialConnectionsAccountUpcomingAccountNumberExpiryEvent, IdentityVerificationSessionCanceledEvent, IdentityVerificationSessionCreatedEvent, IdentityVerificationSessionProcessingEvent, IdentityVerificationSessionRedactedEvent, IdentityVerificationSessionRequiresInputEvent, IdentityVerificationSessionVerifiedEvent, InvoiceCreatedEvent, InvoiceDeletedEvent, InvoiceFinalizationFailedEvent, InvoiceFinalizedEvent, InvoiceMarkedUncollectibleEvent, InvoiceOverdueEvent, InvoiceOverpaidEvent, InvoicePaidEvent, InvoicePaymentActionRequiredEvent, InvoicePaymentAttemptRequiredEvent, InvoicePaymentFailedEvent, InvoicePaymentSucceededEvent, InvoiceSentEvent, InvoiceUpcomingEvent, InvoiceUpdatedEvent, InvoiceVoidedEvent, InvoiceWillBeDueEvent, InvoicePaymentPaidEvent, InvoiceItemCreatedEvent, InvoiceItemDeletedEvent, IssuingAuthorizationCreatedEvent, IssuingAuthorizationRequestEvent, IssuingAuthorizationUpdatedEvent, IssuingCardCreatedEvent, IssuingCardUpdatedEvent, IssuingCardholderCreatedEvent, IssuingCardholderUpdatedEvent, IssuingDisputeClosedEvent, IssuingDisputeCreatedEvent, IssuingDisputeFundsReinstatedEvent, IssuingDisputeFundsRescindedEvent, IssuingDisputeSubmittedEvent, IssuingDisputeUpdatedEvent, IssuingPersonalizationDesignActivatedEvent, IssuingPersonalizationDesignDeactivatedEvent, IssuingPersonalizationDesignRejectedEvent, IssuingPersonalizationDesignUpdatedEvent, IssuingTokenCreatedEvent, IssuingTokenUpdatedEvent, IssuingTransactionCreatedEvent, IssuingTransactionPurchaseDetailsReceiptUpdatedEvent, IssuingTransactionUpdatedEvent, MandateUpdatedEvent, PaymentIntentAmountCapturableUpdatedEvent, PaymentIntentCanceledEvent, PaymentIntentCreatedEvent, PaymentIntentPartiallyFundedEvent, PaymentIntentPaymentFailedEvent, PaymentIntentProcessingEvent, PaymentIntentRequiresActionEvent, PaymentIntentSucceededEvent, PaymentLinkCreatedEvent, PaymentLinkUpdatedEvent, PaymentMethodAttachedEvent, PaymentMethodAutomaticallyUpdatedEvent, PaymentMethodDetachedEvent, PaymentMethodUpdatedEvent, PayoutCanceledEvent, PayoutCreatedEvent, PayoutFailedEvent, PayoutPaidEvent, PayoutReconciliationCompletedEvent, PayoutUpdatedEvent, PersonCreatedEvent, PersonDeletedEvent, PersonUpdatedEvent, PlanCreatedEvent, PlanDeletedEvent, PlanUpdatedEvent, PriceCreatedEvent, PriceDeletedEvent, PriceUpdatedEvent, ProductCreatedEvent, ProductDeletedEvent, ProductUpdatedEvent, PromotionCodeCreatedEvent, PromotionCodeUpdatedEvent, QuoteAcceptedEvent, QuoteCanceledEvent, QuoteCreatedEvent, QuoteFinalizedEvent, RadarEarlyFraudWarningCreatedEvent, RadarEarlyFraudWarningUpdatedEvent, RefundCreatedEvent, RefundFailedEvent, RefundUpdatedEvent, ReportingReportRunFailedEvent, ReportingReportRunSucceededEvent, ReportingReportTypeUpdatedEvent, ReviewClosedEvent, ReviewOpenedEvent, SetupIntentCanceledEvent, SetupIntentCreatedEvent, SetupIntentRequiresActionEvent, SetupIntentSetupFailedEvent, SetupIntentSucceededEvent, SigmaScheduledQueryRunCreatedEvent, SourceCanceledEvent, SourceChargeableEvent, SourceFailedEvent, SourceMandateNotificationEvent, SourceRefundAttributesRequiredEvent, SourceTransactionCreatedEvent, SourceTransactionUpdatedEvent, SubscriptionScheduleAbortedEvent, SubscriptionScheduleCanceledEvent, SubscriptionScheduleCompletedEvent, SubscriptionScheduleCreatedEvent, SubscriptionScheduleExpiringEvent, SubscriptionScheduleReleasedEvent, SubscriptionScheduleUpdatedEvent, TaxSettingsUpdatedEvent, TaxRateCreatedEvent, TaxRateUpdatedEvent, TerminalReaderActionFailedEvent, TerminalReaderActionSucceededEvent, TerminalReaderActionUpdatedEvent, TestHelpersTestClockAdvancingEvent, TestHelpersTestClockCreatedEvent, TestHelpersTestClockDeletedEvent, TestHelpersTestClockInternalFailureEvent, TestHelpersTestClockReadyEvent, TopupCanceledEvent, TopupCreatedEvent, TopupFailedEvent, TopupReversedEvent, TopupSucceededEvent, TransferCreatedEvent, TransferReversedEvent, TransferUpdatedEvent, TreasuryCreditReversalCreatedEvent, TreasuryCreditReversalPostedEvent, TreasuryDebitReversalCompletedEvent, TreasuryDebitReversalCreatedEvent, TreasuryDebitReversalInitialCreditGrantedEvent, TreasuryFinancialAccountClosedEvent, TreasuryFinancialAccountCreatedEvent, TreasuryFinancialAccountFeaturesStatusUpdatedEvent, TreasuryInboundTransferCanceledEvent, TreasuryInboundTransferCreatedEvent, TreasuryInboundTransferFailedEvent, TreasuryInboundTransferSucceededEvent, TreasuryOutboundPaymentCanceledEvent, TreasuryOutboundPaymentCreatedEvent, TreasuryOutboundPaymentExpectedArrivalDateUpdatedEvent, TreasuryOutboundPaymentFailedEvent, TreasuryOutboundPaymentPostedEvent, TreasuryOutboundPaymentReturnedEvent, TreasuryOutboundPaymentTrackingDetailsUpdatedEvent, TreasuryOutboundTransferCanceledEvent, TreasuryOutboundTransferCreatedEvent, TreasuryOutboundTransferExpectedArrivalDateUpdatedEvent, TreasuryOutboundTransferFailedEvent, TreasuryOutboundTransferPostedEvent, TreasuryOutboundTransferReturnedEvent, TreasuryOutboundTransferTrackingDetailsUpdatedEvent, TreasuryReceivedCreditCreatedEvent, TreasuryReceivedCreditFailedEvent, TreasuryReceivedCreditSucceededEvent, TreasuryReceivedDebitCreatedEvent, };
    export { Response, RequestOptions, RawRequestOptions, ApiList, ApiListPromise, ApiSearchResultPromise, ApiSearchResult, StripeStreamResponse, RequestEvent, ResponseEvent, AppInfo, FileData, };
    export { Metadata, MetadataParam, Address, JapanAddress, AddressParam, ShippingAddressParam, JapanAddressParam, RangeQueryParam, PaginationParams, Emptyable, };
    export { StripeContext };
    export { StripeRawError };
    export import errors = _Error;
}
export {};
