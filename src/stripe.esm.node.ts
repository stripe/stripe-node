import {NodePlatformFunctions} from './platform/NodePlatformFunctions.js';

import * as _Error from './Error.js';
import {RequestSender} from './RequestSender.js';
import {StripeResource} from './StripeResource.js';
import {StripeContext} from './StripeContext.js';
import {
  RequestAuthenticator,
  UserProvidedConfig,
  RequestData,
  StripeRawError,
} from './Types.js';
import {createWebhooks} from './Webhooks.js';
import {ApiVersion} from './apiVersion.js';
import {CryptoProvider} from './crypto/CryptoProvider.js';
import {HttpClient, HttpClientResponse} from './net/HttpClient.js';
import {PlatformFunctions} from './platform/PlatformFunctions.js';
import * as resources from './resources.js';
import {
  createApiKeyAuthenticator,
  determineProcessUserAgentProperties,
  pascalToCamelCase,
  validateInteger,
} from './utils.js';
import {
  Response,
  RequestOptions,
  RawRequestOptions,
  ApiList,
  ApiListPromise,
  ApiSearchResultPromise,
  ApiSearchResult,
  StripeStreamResponse,
  RequestEvent,
  ResponseEvent,
  AppInfo,
  FileData,
} from './lib.js';
import {
  Metadata,
  MetadataParam,
  Address,
  JapanAddress,
  AddressParam,
  ShippingAddressParam,
  JapanAddressParam,
  RangeQueryParam,
  PaginationParams,
  Emptyable,
} from './shared.js';

// StripeInstanceImports: The beginning of the section generated from our OpenAPI spec
import {
  Account,
  DeletedAccount,
  AccountCreateParams,
  AccountRetrieveParams,
  AccountUpdateParams,
  AccountListParams,
  AccountDeleteParams,
  AccountCreateExternalAccountParams,
  AccountCreateLoginLinkParams,
  AccountCreatePersonParams,
  AccountDeleteExternalAccountParams,
  AccountDeletePersonParams,
  AccountListCapabilitiesParams,
  AccountListExternalAccountsParams,
  AccountListPersonsParams,
  AccountRejectParams,
  AccountRetrieveCurrentParams,
  AccountRetrieveCapabilityParams,
  AccountRetrieveExternalAccountParams,
  AccountRetrievePersonParams,
  AccountUpdateCapabilityParams,
  AccountUpdateExternalAccountParams,
  AccountUpdatePersonParams,
  AccountResource,
} from './resources/Accounts.js';
import {
  AccountLink,
  AccountLinkCreateParams,
  AccountLinkResource,
} from './resources/AccountLinks.js';
import {
  AccountSession,
  AccountSessionCreateParams,
  AccountSessionResource,
} from './resources/AccountSessions.js';
import {
  ApplePayDomain,
  DeletedApplePayDomain,
  ApplePayDomainCreateParams,
  ApplePayDomainRetrieveParams,
  ApplePayDomainListParams,
  ApplePayDomainDeleteParams,
  ApplePayDomainResource,
} from './resources/ApplePayDomains.js';
import {
  ApplicationFee,
  ApplicationFeeRetrieveParams,
  ApplicationFeeListParams,
  ApplicationFeeCreateRefundParams,
  ApplicationFeeListRefundsParams,
  ApplicationFeeRetrieveRefundParams,
  ApplicationFeeUpdateRefundParams,
  ApplicationFeeResource,
} from './resources/ApplicationFees.js';
import {
  Balance,
  BalanceRetrieveParams,
  BalanceResource,
} from './resources/Balance.js';
import {
  BalanceSettings,
  BalanceSettingsRetrieveParams,
  BalanceSettingsUpdateParams,
  BalanceSettingResource,
} from './resources/BalanceSettings.js';
import {
  BalanceTransaction,
  BalanceTransactionRetrieveParams,
  BalanceTransactionListParams,
  BalanceTransactionResource,
} from './resources/BalanceTransactions.js';
import {
  Charge,
  ChargeCreateParams,
  ChargeRetrieveParams,
  ChargeUpdateParams,
  ChargeListParams,
  ChargeCaptureParams,
  ChargeSearchParams,
  ChargeResource,
} from './resources/Charges.js';
import {
  ConfirmationToken,
  ConfirmationTokenRetrieveParams,
  ConfirmationTokenResource,
} from './resources/ConfirmationTokens.js';
import {
  CountrySpec,
  CountrySpecRetrieveParams,
  CountrySpecListParams,
  CountrySpecResource,
} from './resources/CountrySpecs.js';
import {
  Coupon,
  DeletedCoupon,
  CouponCreateParams,
  CouponRetrieveParams,
  CouponUpdateParams,
  CouponListParams,
  CouponDeleteParams,
  CouponResource,
} from './resources/Coupons.js';
import {
  CreditNote,
  CreditNoteCreateParams,
  CreditNoteRetrieveParams,
  CreditNoteUpdateParams,
  CreditNoteListParams,
  CreditNoteListLineItemsParams,
  CreditNoteListPreviewLineItemsParams,
  CreditNotePreviewParams,
  CreditNoteVoidCreditNoteParams,
  CreditNoteResource,
} from './resources/CreditNotes.js';
import {
  Customer,
  DeletedCustomer,
  CustomerCreateParams,
  CustomerRetrieveParams,
  CustomerUpdateParams,
  CustomerListParams,
  CustomerDeleteParams,
  CustomerCreateBalanceTransactionParams,
  CustomerCreateFundingInstructionsParams,
  CustomerCreateSourceParams,
  CustomerCreateTaxIdParams,
  CustomerDeleteDiscountParams,
  CustomerDeleteSourceParams,
  CustomerDeleteTaxIdParams,
  CustomerListBalanceTransactionsParams,
  CustomerListCashBalanceTransactionsParams,
  CustomerListPaymentMethodsParams,
  CustomerListSourcesParams,
  CustomerListTaxIdsParams,
  CustomerRetrieveBalanceTransactionParams,
  CustomerRetrieveCashBalanceParams,
  CustomerRetrieveCashBalanceTransactionParams,
  CustomerRetrievePaymentMethodParams,
  CustomerRetrieveSourceParams,
  CustomerRetrieveTaxIdParams,
  CustomerSearchParams,
  CustomerUpdateBalanceTransactionParams,
  CustomerUpdateCashBalanceParams,
  CustomerUpdateSourceParams,
  CustomerVerifySourceParams,
  CustomerResource,
} from './resources/Customers.js';
import {
  CustomerSession,
  CustomerSessionCreateParams,
  CustomerSessionResource,
} from './resources/CustomerSessions.js';
import {
  Dispute,
  DisputeRetrieveParams,
  DisputeUpdateParams,
  DisputeListParams,
  DisputeCloseParams,
  DisputeResource,
} from './resources/Disputes.js';
import {
  EphemeralKey,
  EphemeralKeyCreateParams,
  EphemeralKeyDeleteParams,
  EphemeralKeyResource,
} from './resources/EphemeralKeys.js';
import {
  ExchangeRate,
  ExchangeRateRetrieveParams,
  ExchangeRateListParams,
  ExchangeRateResource,
} from './resources/ExchangeRates.js';
import {
  File,
  FileCreateParams,
  FileRetrieveParams,
  FileListParams,
  FileResource,
} from './resources/Files.js';
import {
  FileLink,
  FileLinkCreateParams,
  FileLinkRetrieveParams,
  FileLinkUpdateParams,
  FileLinkListParams,
  FileLinkResource,
} from './resources/FileLinks.js';
import {
  Invoice,
  DeletedInvoice,
  InvoiceCreateParams,
  InvoiceRetrieveParams,
  InvoiceUpdateParams,
  InvoiceListParams,
  InvoiceDeleteParams,
  InvoiceAddLinesParams,
  InvoiceAttachPaymentParams,
  InvoiceCreatePreviewParams,
  InvoiceFinalizeInvoiceParams,
  InvoiceListLineItemsParams,
  InvoiceMarkUncollectibleParams,
  InvoicePayParams,
  InvoiceRemoveLinesParams,
  InvoiceSearchParams,
  InvoiceSendInvoiceParams,
  InvoiceUpdateLinesParams,
  InvoiceUpdateLineItemParams,
  InvoiceVoidInvoiceParams,
  InvoiceResource,
} from './resources/Invoices.js';
import {
  InvoiceItem,
  DeletedInvoiceItem,
  InvoiceItemCreateParams,
  InvoiceItemRetrieveParams,
  InvoiceItemUpdateParams,
  InvoiceItemListParams,
  InvoiceItemDeleteParams,
  InvoiceItemResource,
} from './resources/InvoiceItems.js';
import {
  InvoicePayment,
  InvoicePaymentRetrieveParams,
  InvoicePaymentListParams,
  InvoicePaymentResource,
} from './resources/InvoicePayments.js';
import {
  InvoiceRenderingTemplate,
  InvoiceRenderingTemplateRetrieveParams,
  InvoiceRenderingTemplateListParams,
  InvoiceRenderingTemplateArchiveParams,
  InvoiceRenderingTemplateUnarchiveParams,
  InvoiceRenderingTemplateResource,
} from './resources/InvoiceRenderingTemplates.js';
import {
  Mandate,
  MandateRetrieveParams,
  MandateResource,
} from './resources/Mandates.js';
import {
  PaymentAttemptRecord,
  PaymentAttemptRecordRetrieveParams,
  PaymentAttemptRecordListParams,
  PaymentAttemptRecordResource,
} from './resources/PaymentAttemptRecords.js';
import {
  PaymentIntent,
  PaymentIntentCreateParams,
  PaymentIntentRetrieveParams,
  PaymentIntentUpdateParams,
  PaymentIntentListParams,
  PaymentIntentApplyCustomerBalanceParams,
  PaymentIntentCancelParams,
  PaymentIntentCaptureParams,
  PaymentIntentConfirmParams,
  PaymentIntentIncrementAuthorizationParams,
  PaymentIntentListAmountDetailsLineItemsParams,
  PaymentIntentSearchParams,
  PaymentIntentVerifyMicrodepositsParams,
  PaymentIntentResource,
} from './resources/PaymentIntents.js';
import {
  PaymentLink,
  PaymentLinkCreateParams,
  PaymentLinkRetrieveParams,
  PaymentLinkUpdateParams,
  PaymentLinkListParams,
  PaymentLinkListLineItemsParams,
  PaymentLinkResource,
} from './resources/PaymentLinks.js';
import {
  PaymentMethod,
  PaymentMethodCreateParams,
  PaymentMethodRetrieveParams,
  PaymentMethodUpdateParams,
  PaymentMethodListParams,
  PaymentMethodAttachParams,
  PaymentMethodDetachParams,
  PaymentMethodResource,
} from './resources/PaymentMethods.js';
import {
  PaymentMethodConfiguration,
  PaymentMethodConfigurationCreateParams,
  PaymentMethodConfigurationRetrieveParams,
  PaymentMethodConfigurationUpdateParams,
  PaymentMethodConfigurationListParams,
  PaymentMethodConfigurationResource,
} from './resources/PaymentMethodConfigurations.js';
import {
  PaymentMethodDomain,
  PaymentMethodDomainCreateParams,
  PaymentMethodDomainRetrieveParams,
  PaymentMethodDomainUpdateParams,
  PaymentMethodDomainListParams,
  PaymentMethodDomainValidateParams,
  PaymentMethodDomainResource,
} from './resources/PaymentMethodDomains.js';
import {
  PaymentRecord,
  PaymentRecordRetrieveParams,
  PaymentRecordReportPaymentParams,
  PaymentRecordReportPaymentAttemptParams,
  PaymentRecordReportPaymentAttemptCanceledParams,
  PaymentRecordReportPaymentAttemptFailedParams,
  PaymentRecordReportPaymentAttemptGuaranteedParams,
  PaymentRecordReportPaymentAttemptInformationalParams,
  PaymentRecordReportRefundParams,
  PaymentRecordResource,
} from './resources/PaymentRecords.js';
import {
  Payout,
  PayoutCreateParams,
  PayoutRetrieveParams,
  PayoutUpdateParams,
  PayoutListParams,
  PayoutCancelParams,
  PayoutReverseParams,
  PayoutResource,
} from './resources/Payouts.js';
import {
  Plan,
  DeletedPlan,
  PlanCreateParams,
  PlanRetrieveParams,
  PlanUpdateParams,
  PlanListParams,
  PlanDeleteParams,
  PlanResource,
} from './resources/Plans.js';
import {
  Price,
  DeletedPrice,
  PriceCreateParams,
  PriceRetrieveParams,
  PriceUpdateParams,
  PriceListParams,
  PriceSearchParams,
  PriceResource,
} from './resources/Prices.js';
import {
  Product,
  DeletedProduct,
  ProductCreateParams,
  ProductRetrieveParams,
  ProductUpdateParams,
  ProductListParams,
  ProductDeleteParams,
  ProductCreateFeatureParams,
  ProductDeleteFeatureParams,
  ProductListFeaturesParams,
  ProductRetrieveFeatureParams,
  ProductSearchParams,
  ProductResource,
} from './resources/Products.js';
import {
  PromotionCode,
  PromotionCodeCreateParams,
  PromotionCodeRetrieveParams,
  PromotionCodeUpdateParams,
  PromotionCodeListParams,
  PromotionCodeResource,
} from './resources/PromotionCodes.js';
import {
  Quote,
  QuoteCreateParams,
  QuoteRetrieveParams,
  QuoteUpdateParams,
  QuoteListParams,
  QuoteAcceptParams,
  QuoteCancelParams,
  QuoteFinalizeQuoteParams,
  QuoteListComputedUpfrontLineItemsParams,
  QuoteListLineItemsParams,
  QuotePdfParams,
  QuoteResource,
} from './resources/Quotes.js';
import {
  Refund,
  RefundCreateParams,
  RefundRetrieveParams,
  RefundUpdateParams,
  RefundListParams,
  RefundCancelParams,
  RefundResource,
} from './resources/Refunds.js';
import {
  Review,
  ReviewRetrieveParams,
  ReviewListParams,
  ReviewApproveParams,
  ReviewResource,
} from './resources/Reviews.js';
import {
  SetupAttempt,
  SetupAttemptListParams,
  SetupAttemptResource,
} from './resources/SetupAttempts.js';
import {
  SetupIntent,
  SetupIntentCreateParams,
  SetupIntentRetrieveParams,
  SetupIntentUpdateParams,
  SetupIntentListParams,
  SetupIntentCancelParams,
  SetupIntentConfirmParams,
  SetupIntentVerifyMicrodepositsParams,
  SetupIntentResource,
} from './resources/SetupIntents.js';
import {
  ShippingRate,
  ShippingRateCreateParams,
  ShippingRateRetrieveParams,
  ShippingRateUpdateParams,
  ShippingRateListParams,
  ShippingRateResource,
} from './resources/ShippingRates.js';
import {
  Source,
  SourceCreateParams,
  SourceRetrieveParams,
  SourceUpdateParams,
  SourceListSourceTransactionsParams,
  SourceVerifyParams,
  SourceResource,
} from './resources/Sources.js';
import {
  Subscription,
  SubscriptionCreateParams,
  SubscriptionRetrieveParams,
  SubscriptionUpdateParams,
  SubscriptionListParams,
  SubscriptionCancelParams,
  SubscriptionDeleteDiscountParams,
  SubscriptionMigrateParams,
  SubscriptionResumeParams,
  SubscriptionSearchParams,
  SubscriptionResource,
} from './resources/Subscriptions.js';
import {
  SubscriptionItem,
  DeletedSubscriptionItem,
  SubscriptionItemCreateParams,
  SubscriptionItemRetrieveParams,
  SubscriptionItemUpdateParams,
  SubscriptionItemListParams,
  SubscriptionItemDeleteParams,
  SubscriptionItemResource,
} from './resources/SubscriptionItems.js';
import {
  SubscriptionSchedule,
  SubscriptionScheduleCreateParams,
  SubscriptionScheduleRetrieveParams,
  SubscriptionScheduleUpdateParams,
  SubscriptionScheduleListParams,
  SubscriptionScheduleCancelParams,
  SubscriptionScheduleReleaseParams,
  SubscriptionScheduleResource,
} from './resources/SubscriptionSchedules.js';
import {
  TaxCode,
  TaxCodeRetrieveParams,
  TaxCodeListParams,
  TaxCodeResource,
} from './resources/TaxCodes.js';
import {
  TaxId,
  DeletedTaxId,
  TaxIdCreateParams,
  TaxIdRetrieveParams,
  TaxIdListParams,
  TaxIdDeleteParams,
  TaxIdResource,
} from './resources/TaxIds.js';
import {
  TaxRate,
  TaxRateCreateParams,
  TaxRateRetrieveParams,
  TaxRateUpdateParams,
  TaxRateListParams,
  TaxRateResource,
} from './resources/TaxRates.js';
import {
  Token,
  TokenCreateParams,
  TokenRetrieveParams,
  TokenResource,
} from './resources/Tokens.js';
import {
  Topup,
  TopupCreateParams,
  TopupRetrieveParams,
  TopupUpdateParams,
  TopupListParams,
  TopupCancelParams,
  TopupResource,
} from './resources/Topups.js';
import {
  Transfer,
  TransferCreateParams,
  TransferRetrieveParams,
  TransferUpdateParams,
  TransferListParams,
  TransferCreateReversalParams,
  TransferListReversalsParams,
  TransferRetrieveReversalParams,
  TransferUpdateReversalParams,
  TransferResource,
} from './resources/Transfers.js';
import {
  WebhookEndpoint,
  DeletedWebhookEndpoint,
  WebhookEndpointCreateParams,
  WebhookEndpointRetrieveParams,
  WebhookEndpointUpdateParams,
  WebhookEndpointListParams,
  WebhookEndpointDeleteParams,
  WebhookEndpointResource,
} from './resources/WebhookEndpoints.js';
import {Application, DeletedApplication} from './resources/Applications.js';
import {BalanceTransactionSource} from './resources/BalanceTransactionSources.js';
import {BankAccount, DeletedBankAccount} from './resources/BankAccounts.js';
import {Card, DeletedCard} from './resources/Cards.js';
import {ConnectCollectionTransfer} from './resources/ConnectCollectionTransfers.js';
import {Discount, DeletedDiscount} from './resources/Discounts.js';
import {FundingInstructions} from './resources/FundingInstructions.js';
import {LineItem} from './resources/LineItems.js';
import {ReserveTransaction} from './resources/ReserveTransactions.js';
import {SourceMandateNotification} from './resources/SourceMandateNotifications.js';
import {SourceTransaction} from './resources/SourceTransactions.js';
import {TaxDeductedAtSource} from './resources/TaxDeductedAtSources.js';
import {Capability} from './resources/Capabilities.js';
import {
  ExternalAccount,
  DeletedExternalAccount,
} from './resources/ExternalAccounts.js';
import {LoginLink} from './resources/LoginLinks.js';
import {Person, DeletedPerson} from './resources/Persons.js';
import {FeeRefund} from './resources/FeeRefunds.js';
import {CreditNoteLineItem} from './resources/CreditNoteLineItems.js';
import {CustomerBalanceTransaction} from './resources/CustomerBalanceTransactions.js';
import {CashBalance} from './resources/CashBalances.js';
import {CustomerCashBalanceTransaction} from './resources/CustomerCashBalanceTransactions.js';
import {
  CustomerSource,
  DeletedCustomerSource,
} from './resources/CustomerSources.js';
import {InvoiceLineItem} from './resources/InvoiceLineItems.js';
import {PaymentIntentAmountDetailsLineItem} from './resources/PaymentIntentAmountDetailsLineItems.js';
import {
  ProductFeature,
  DeletedProductFeature,
} from './resources/ProductFeatures.js';
import {TransferReversal} from './resources/TransferReversals.js';
import {Apps} from './resources/Apps/index.js';
import {Billing} from './resources/Billing/index.js';
import {BillingPortal} from './resources/BillingPortal/index.js';
import {Checkout} from './resources/Checkout/index.js';
import {Climate} from './resources/Climate/index.js';
import {Entitlements} from './resources/Entitlements/index.js';
import {FinancialConnections} from './resources/FinancialConnections/index.js';
import {Forwarding} from './resources/Forwarding/index.js';
import {Identity} from './resources/Identity/index.js';
import {Issuing} from './resources/Issuing/index.js';
import {Radar} from './resources/Radar/index.js';
import {Reporting} from './resources/Reporting/index.js';
import {Sigma} from './resources/Sigma/index.js';
import {Tax} from './resources/Tax/index.js';
import {Terminal} from './resources/Terminal/index.js';
import {TestHelpers} from './resources/TestHelpers/index.js';
import {Treasury} from './resources/Treasury/index.js';
import {V2} from './resources/V2/index.js';
// StripeInstanceImports: The end of the section generated from our OpenAPI spec
// V1EventImports: The beginning of the section generated from our OpenAPI spec
import {
  AccountApplicationAuthorizedEvent,
  AccountApplicationDeauthorizedEvent,
  AccountExternalAccountCreatedEvent,
  AccountExternalAccountDeletedEvent,
  AccountExternalAccountUpdatedEvent,
  AccountUpdatedEvent,
  ApplicationFeeCreatedEvent,
  ApplicationFeeRefundUpdatedEvent,
  ApplicationFeeRefundedEvent,
  BalanceAvailableEvent,
  BalanceSettingsUpdatedEvent,
  BillingAlertTriggeredEvent,
  BillingCreditBalanceTransactionCreatedEvent,
  BillingCreditGrantCreatedEvent,
  BillingCreditGrantUpdatedEvent,
  BillingMeterCreatedEvent,
  BillingMeterDeactivatedEvent,
  BillingMeterReactivatedEvent,
  BillingMeterUpdatedEvent,
  BillingPortalConfigurationCreatedEvent,
  BillingPortalConfigurationUpdatedEvent,
  BillingPortalSessionCreatedEvent,
  CapabilityUpdatedEvent,
  CashBalanceFundsAvailableEvent,
  ChargeCapturedEvent,
  ChargeDisputeClosedEvent,
  ChargeDisputeCreatedEvent,
  ChargeDisputeFundsReinstatedEvent,
  ChargeDisputeFundsWithdrawnEvent,
  ChargeDisputeUpdatedEvent,
  ChargeExpiredEvent,
  ChargeFailedEvent,
  ChargePendingEvent,
  ChargeRefundUpdatedEvent,
  ChargeRefundedEvent,
  ChargeSucceededEvent,
  ChargeUpdatedEvent,
  CheckoutSessionAsyncPaymentFailedEvent,
  CheckoutSessionAsyncPaymentSucceededEvent,
  CheckoutSessionCompletedEvent,
  CheckoutSessionExpiredEvent,
  ClimateOrderCanceledEvent,
  ClimateOrderCreatedEvent,
  ClimateOrderDelayedEvent,
  ClimateOrderDeliveredEvent,
  ClimateOrderProductSubstitutedEvent,
  ClimateProductCreatedEvent,
  ClimateProductPricingUpdatedEvent,
  CouponCreatedEvent,
  CouponDeletedEvent,
  CouponUpdatedEvent,
  CreditNoteCreatedEvent,
  CreditNoteUpdatedEvent,
  CreditNoteVoidedEvent,
  CustomerCreatedEvent,
  CustomerDeletedEvent,
  CustomerDiscountCreatedEvent,
  CustomerDiscountDeletedEvent,
  CustomerDiscountUpdatedEvent,
  CustomerSourceCreatedEvent,
  CustomerSourceDeletedEvent,
  CustomerSourceExpiringEvent,
  CustomerSourceUpdatedEvent,
  CustomerSubscriptionCreatedEvent,
  CustomerSubscriptionDeletedEvent,
  CustomerSubscriptionPausedEvent,
  CustomerSubscriptionPendingUpdateAppliedEvent,
  CustomerSubscriptionPendingUpdateExpiredEvent,
  CustomerSubscriptionResumedEvent,
  CustomerSubscriptionTrialWillEndEvent,
  CustomerSubscriptionUpdatedEvent,
  CustomerTaxIdCreatedEvent,
  CustomerTaxIdDeletedEvent,
  CustomerTaxIdUpdatedEvent,
  CustomerUpdatedEvent,
  CustomerCashBalanceTransactionCreatedEvent,
  EntitlementsActiveEntitlementSummaryUpdatedEvent,
  FileCreatedEvent,
  FinancialConnectionsAccountAccountNumbersUpdatedEvent,
  FinancialConnectionsAccountCreatedEvent,
  FinancialConnectionsAccountDeactivatedEvent,
  FinancialConnectionsAccountDisconnectedEvent,
  FinancialConnectionsAccountReactivatedEvent,
  FinancialConnectionsAccountRefreshedBalanceEvent,
  FinancialConnectionsAccountRefreshedOwnershipEvent,
  FinancialConnectionsAccountRefreshedTransactionsEvent,
  FinancialConnectionsAccountUpcomingAccountNumberExpiryEvent,
  IdentityVerificationSessionCanceledEvent,
  IdentityVerificationSessionCreatedEvent,
  IdentityVerificationSessionProcessingEvent,
  IdentityVerificationSessionRedactedEvent,
  IdentityVerificationSessionRequiresInputEvent,
  IdentityVerificationSessionVerifiedEvent,
  InvoiceCreatedEvent,
  InvoiceDeletedEvent,
  InvoiceFinalizationFailedEvent,
  InvoiceFinalizedEvent,
  InvoiceMarkedUncollectibleEvent,
  InvoiceOverdueEvent,
  InvoiceOverpaidEvent,
  InvoicePaidEvent,
  InvoicePaymentActionRequiredEvent,
  InvoicePaymentAttemptRequiredEvent,
  InvoicePaymentFailedEvent,
  InvoicePaymentSucceededEvent,
  InvoiceSentEvent,
  InvoiceUpcomingEvent,
  InvoiceUpdatedEvent,
  InvoiceVoidedEvent,
  InvoiceWillBeDueEvent,
  InvoicePaymentPaidEvent,
  InvoiceItemCreatedEvent,
  InvoiceItemDeletedEvent,
  IssuingAuthorizationCreatedEvent,
  IssuingAuthorizationRequestEvent,
  IssuingAuthorizationUpdatedEvent,
  IssuingCardCreatedEvent,
  IssuingCardUpdatedEvent,
  IssuingCardholderCreatedEvent,
  IssuingCardholderUpdatedEvent,
  IssuingDisputeClosedEvent,
  IssuingDisputeCreatedEvent,
  IssuingDisputeFundsReinstatedEvent,
  IssuingDisputeFundsRescindedEvent,
  IssuingDisputeSubmittedEvent,
  IssuingDisputeUpdatedEvent,
  IssuingPersonalizationDesignActivatedEvent,
  IssuingPersonalizationDesignDeactivatedEvent,
  IssuingPersonalizationDesignRejectedEvent,
  IssuingPersonalizationDesignUpdatedEvent,
  IssuingTokenCreatedEvent,
  IssuingTokenUpdatedEvent,
  IssuingTransactionCreatedEvent,
  IssuingTransactionPurchaseDetailsReceiptUpdatedEvent,
  IssuingTransactionUpdatedEvent,
  MandateUpdatedEvent,
  PaymentIntentAmountCapturableUpdatedEvent,
  PaymentIntentCanceledEvent,
  PaymentIntentCreatedEvent,
  PaymentIntentPartiallyFundedEvent,
  PaymentIntentPaymentFailedEvent,
  PaymentIntentProcessingEvent,
  PaymentIntentRequiresActionEvent,
  PaymentIntentSucceededEvent,
  PaymentLinkCreatedEvent,
  PaymentLinkUpdatedEvent,
  PaymentMethodAttachedEvent,
  PaymentMethodAutomaticallyUpdatedEvent,
  PaymentMethodDetachedEvent,
  PaymentMethodUpdatedEvent,
  PayoutCanceledEvent,
  PayoutCreatedEvent,
  PayoutFailedEvent,
  PayoutPaidEvent,
  PayoutReconciliationCompletedEvent,
  PayoutUpdatedEvent,
  PersonCreatedEvent,
  PersonDeletedEvent,
  PersonUpdatedEvent,
  PlanCreatedEvent,
  PlanDeletedEvent,
  PlanUpdatedEvent,
  PriceCreatedEvent,
  PriceDeletedEvent,
  PriceUpdatedEvent,
  ProductCreatedEvent,
  ProductDeletedEvent,
  ProductUpdatedEvent,
  PromotionCodeCreatedEvent,
  PromotionCodeUpdatedEvent,
  QuoteAcceptedEvent,
  QuoteCanceledEvent,
  QuoteCreatedEvent,
  QuoteFinalizedEvent,
  RadarEarlyFraudWarningCreatedEvent,
  RadarEarlyFraudWarningUpdatedEvent,
  RefundCreatedEvent,
  RefundFailedEvent,
  RefundUpdatedEvent,
  ReportingReportRunFailedEvent,
  ReportingReportRunSucceededEvent,
  ReportingReportTypeUpdatedEvent,
  ReviewClosedEvent,
  ReviewOpenedEvent,
  SetupIntentCanceledEvent,
  SetupIntentCreatedEvent,
  SetupIntentRequiresActionEvent,
  SetupIntentSetupFailedEvent,
  SetupIntentSucceededEvent,
  SigmaScheduledQueryRunCreatedEvent,
  SourceCanceledEvent,
  SourceChargeableEvent,
  SourceFailedEvent,
  SourceMandateNotificationEvent,
  SourceRefundAttributesRequiredEvent,
  SourceTransactionCreatedEvent,
  SourceTransactionUpdatedEvent,
  SubscriptionScheduleAbortedEvent,
  SubscriptionScheduleCanceledEvent,
  SubscriptionScheduleCompletedEvent,
  SubscriptionScheduleCreatedEvent,
  SubscriptionScheduleExpiringEvent,
  SubscriptionScheduleReleasedEvent,
  SubscriptionScheduleUpdatedEvent,
  TaxSettingsUpdatedEvent,
  TaxRateCreatedEvent,
  TaxRateUpdatedEvent,
  TerminalReaderActionFailedEvent,
  TerminalReaderActionSucceededEvent,
  TerminalReaderActionUpdatedEvent,
  TestHelpersTestClockAdvancingEvent,
  TestHelpersTestClockCreatedEvent,
  TestHelpersTestClockDeletedEvent,
  TestHelpersTestClockInternalFailureEvent,
  TestHelpersTestClockReadyEvent,
  TopupCanceledEvent,
  TopupCreatedEvent,
  TopupFailedEvent,
  TopupReversedEvent,
  TopupSucceededEvent,
  TransferCreatedEvent,
  TransferReversedEvent,
  TransferUpdatedEvent,
  TreasuryCreditReversalCreatedEvent,
  TreasuryCreditReversalPostedEvent,
  TreasuryDebitReversalCompletedEvent,
  TreasuryDebitReversalCreatedEvent,
  TreasuryDebitReversalInitialCreditGrantedEvent,
  TreasuryFinancialAccountClosedEvent,
  TreasuryFinancialAccountCreatedEvent,
  TreasuryFinancialAccountFeaturesStatusUpdatedEvent,
  TreasuryInboundTransferCanceledEvent,
  TreasuryInboundTransferCreatedEvent,
  TreasuryInboundTransferFailedEvent,
  TreasuryInboundTransferSucceededEvent,
  TreasuryOutboundPaymentCanceledEvent,
  TreasuryOutboundPaymentCreatedEvent,
  TreasuryOutboundPaymentExpectedArrivalDateUpdatedEvent,
  TreasuryOutboundPaymentFailedEvent,
  TreasuryOutboundPaymentPostedEvent,
  TreasuryOutboundPaymentReturnedEvent,
  TreasuryOutboundPaymentTrackingDetailsUpdatedEvent,
  TreasuryOutboundTransferCanceledEvent,
  TreasuryOutboundTransferCreatedEvent,
  TreasuryOutboundTransferExpectedArrivalDateUpdatedEvent,
  TreasuryOutboundTransferFailedEvent,
  TreasuryOutboundTransferPostedEvent,
  TreasuryOutboundTransferReturnedEvent,
  TreasuryOutboundTransferTrackingDetailsUpdatedEvent,
  TreasuryReceivedCreditCreatedEvent,
  TreasuryReceivedCreditFailedEvent,
  TreasuryReceivedCreditSucceededEvent,
  TreasuryReceivedDebitCreatedEvent,
  Event,
  EventBase,
  EventRetrieveParams,
  EventListParams,
  EventResource,
} from './resources/Events.js';
// V1EventImports: The end of the section generated from our OpenAPI spec
import {OAuthResource} from './resources.js';

const DEFAULT_HOST = 'api.stripe.`com';
const DEFAULT_PORT = '443';
const DEFAULT_BASE_PATH = '/v1/';
const DEFAULT_API_VERSION = ApiVersion;

const DEFAULT_TIMEOUT = 80000;

const MAX_NETWORK_RETRY_DELAY_SEC = 5;
const INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;

const APP_INFO_PROPERTIES: (keyof AppInfo)[] = [
  'name',
  'version',
  'url',
  'partner_id',
];
const ALLOWED_CONFIG_PROPERTIES = [
  'authenticator',
  'apiVersion',
  'typescript',
  'maxNetworkRetries',
  'httpAgent',
  'httpClient',
  'timeout',
  'host',
  'port',
  'protocol',
  'telemetry',
  'appInfo',
  'stripeAccount',
  'stripeContext',
];

type RequestSenderFactory = (stripe: Stripe) => RequestSender;

const defaultRequestSenderFactory: RequestSenderFactory = (stripe) =>
  new RequestSender(stripe, StripeResource.MAX_BUFFERED_REQUEST_METRICS);

export class Stripe {
  static PACKAGE_VERSION = '19.1.0';
  static API_VERSION = ApiVersion;
  static USER_AGENT = {
    bindings_version: Stripe.PACKAGE_VERSION,
    lang: 'node',
    publisher: 'stripe',
    uname: null,
    typescript: false,
    ...determineProcessUserAgentProperties(),
  };
  static StripeResource = StripeResource;
  static resources = resources;
  static HttpClient = HttpClient;
  static HttpClientResponse = HttpClientResponse;
  static CryptoProvider = CryptoProvider;

  private static _platformFunctions: PlatformFunctions;
  private static _requestSenderFactory: RequestSenderFactory = defaultRequestSenderFactory;
  static webhooks: ReturnType<typeof createWebhooks>;

  static createNodeHttpClient: PlatformFunctions['createNodeHttpClient'];
  static createFetchHttpClient: PlatformFunctions['createFetchHttpClient'];
  static createNodeCryptoProvider: PlatformFunctions['createNodeCryptoProvider'];
  static createSubtleCryptoProvider: PlatformFunctions['createSubtleCryptoProvider'];

  // Instance properties
  _appInfo: any;
  on: any;
  off: any;
  once: any;
  VERSION: string;
  // StripeResource: typeof StripeResource;
  webhooks: ReturnType<typeof createWebhooks>;
  errors: typeof _Error;
  _api: any;
  _prevRequestMetrics: any;
  _emitter: any;
  _enableTelemetry: boolean;
  _requestSender: RequestSender;
  _platformFunctions: PlatformFunctions;
  _authenticator: RequestAuthenticator | null = null;
  _clientId?: string;

  // StripeInstanceVariables: The beginning of the section generated from our OpenAPI spec
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
  // StripeInstanceVariables: The end of the section generated from our OpenAPI spec
  // webhooks: WebhookEndpointResource;
  account: AccountResource;
  oauth: OAuthResource;

  static initialize(
    platformFunctions: PlatformFunctions,
    requestSenderFactory: RequestSenderFactory = defaultRequestSenderFactory
  ): void {
    Stripe._platformFunctions = platformFunctions;
    Stripe._requestSenderFactory = requestSenderFactory;
    Stripe.webhooks = createWebhooks(platformFunctions);
    Stripe.createNodeHttpClient = platformFunctions.createNodeHttpClient;
    Stripe.createFetchHttpClient = platformFunctions.createFetchHttpClient;
    Stripe.createNodeCryptoProvider =
      platformFunctions.createNodeCryptoProvider;
    Stripe.createSubtleCryptoProvider =
      platformFunctions.createSubtleCryptoProvider;
  }

  constructor(key: string, config: Record<string, unknown> = {}) {
    const props = this._getPropsFromConfig(config);

    this._platformFunctions = Stripe._platformFunctions;

    Object.defineProperty(this, '_emitter', {
      value: this._platformFunctions.createEmitter(),
      enumerable: false,
      configurable: false,
      writable: false,
    });

    this.VERSION = Stripe.PACKAGE_VERSION;

    this.on = this._emitter.on.bind(this._emitter);
    this.once = this._emitter.once.bind(this._emitter);
    this.off = this._emitter.removeListener.bind(this._emitter);

    const agent = props.httpAgent || null;

    this._api = {
      host: props.host || DEFAULT_HOST,
      port: props.port || DEFAULT_PORT,
      protocol: props.protocol || 'https',
      basePath: DEFAULT_BASE_PATH,
      version: props.apiVersion || DEFAULT_API_VERSION,
      timeout: validateInteger('timeout', props.timeout, DEFAULT_TIMEOUT),
      maxNetworkRetries: validateInteger(
        'maxNetworkRetries',
        props.maxNetworkRetries,
        2
      ),
      agent: agent,
      httpClient:
        props.httpClient ||
        (agent
          ? this._platformFunctions.createNodeHttpClient(agent)
          : this._platformFunctions.createDefaultHttpClient()),
      dev: false,
      stripeAccount: props.stripeAccount || null,
      stripeContext: props.stripeContext || null,
    };

    const typescript = props.typescript || false;
    if (typescript !== Stripe.USER_AGENT.typescript) {
      // The mutation here is uncomfortable, but likely fastest;
      // serializing the user agent involves shelling out to the system,
      // and given some users may instantiate the library many times without switching between TS and non-TS,
      // we only want to incur the performance hit when that actually happens.
      Stripe.USER_AGENT.typescript = typescript;
    }

    if (props.appInfo) {
      this._setAppInfo(props.appInfo);
    }

    this._setAuthenticator(key, props.authenticator || null);

    this.errors = _Error;

    this.webhooks = Stripe.webhooks;

    this._prevRequestMetrics = [];
    this._enableTelemetry = props.telemetry !== false;

    this._requestSender = Stripe._requestSenderFactory(this as any);

    // // Expose StripeResource on the instance too
    // // @ts-ignore
    // this.StripeResource = Stripe.StripeResource;

    // StripeInitInstanceVariables: The beginning of the section generated from our OpenAPI spec
    this.accountLinks = new AccountLinkResource(this);
    this.accountSessions = new AccountSessionResource(this);
    this.accounts = new AccountResource(this);
    this.applePayDomains = new ApplePayDomainResource(this);
    this.applicationFees = new ApplicationFeeResource(this);
    this.balance = new BalanceResource(this);
    this.balanceSettings = new BalanceSettingResource(this);
    this.balanceTransactions = new BalanceTransactionResource(this);
    this.charges = new ChargeResource(this);
    this.confirmationTokens = new ConfirmationTokenResource(this);
    this.countrySpecs = new CountrySpecResource(this);
    this.coupons = new CouponResource(this);
    this.creditNotes = new CreditNoteResource(this);
    this.customerSessions = new CustomerSessionResource(this);
    this.customers = new CustomerResource(this);
    this.disputes = new DisputeResource(this);
    this.ephemeralKeys = new EphemeralKeyResource(this);
    this.events = new EventResource(this);
    this.exchangeRates = new ExchangeRateResource(this);
    this.fileLinks = new FileLinkResource(this);
    this.files = new FileResource(this);
    this.invoiceItems = new InvoiceItemResource(this);
    this.invoicePayments = new InvoicePaymentResource(this);
    this.invoiceRenderingTemplates = new InvoiceRenderingTemplateResource(this);
    this.invoices = new InvoiceResource(this);
    this.mandates = new MandateResource(this);
    this.paymentAttemptRecords = new PaymentAttemptRecordResource(this);
    this.paymentIntents = new PaymentIntentResource(this);
    this.paymentLinks = new PaymentLinkResource(this);
    this.paymentMethodConfigurations = new PaymentMethodConfigurationResource(
      this
    );
    this.paymentMethodDomains = new PaymentMethodDomainResource(this);
    this.paymentMethods = new PaymentMethodResource(this);
    this.paymentRecords = new PaymentRecordResource(this);
    this.payouts = new PayoutResource(this);
    this.plans = new PlanResource(this);
    this.prices = new PriceResource(this);
    this.products = new ProductResource(this);
    this.promotionCodes = new PromotionCodeResource(this);
    this.quotes = new QuoteResource(this);
    this.refunds = new RefundResource(this);
    this.reviews = new ReviewResource(this);
    this.setupAttempts = new SetupAttemptResource(this);
    this.setupIntents = new SetupIntentResource(this);
    this.shippingRates = new ShippingRateResource(this);
    this.sources = new SourceResource(this);
    this.subscriptionItems = new SubscriptionItemResource(this);
    this.subscriptionSchedules = new SubscriptionScheduleResource(this);
    this.subscriptions = new SubscriptionResource(this);
    this.taxCodes = new TaxCodeResource(this);
    this.taxIds = new TaxIdResource(this);
    this.taxRates = new TaxRateResource(this);
    this.tokens = new TokenResource(this);
    this.topups = new TopupResource(this);
    this.transfers = new TransferResource(this);
    this.webhookEndpoints = new WebhookEndpointResource(this);
    this.apps = new Apps(this);
    this.billing = new Billing(this);
    this.billingPortal = new BillingPortal(this);
    this.checkout = new Checkout(this);
    this.climate = new Climate(this);
    this.entitlements = new Entitlements(this);
    this.financialConnections = new FinancialConnections(this);
    this.forwarding = new Forwarding(this);
    this.identity = new Identity(this);
    this.issuing = new Issuing(this);
    this.radar = new Radar(this);
    this.reporting = new Reporting(this);
    this.sigma = new Sigma(this);
    this.tax = new Tax(this);
    this.terminal = new Terminal(this);
    this.testHelpers = new TestHelpers(this);
    this.treasury = new Treasury(this);
    this.v2 = new V2(this);
    // StripeInitInstanceVariables: The end of the section generated from our OpenAPI spec

    // hardcoded properties and resources
    // account property is added for backward compatibility
    this.account = this.accounts;
    this.oauth = new OAuthResource(this);

    // this._prepResources();
  }

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
  rawRequest(
    method: string,
    path: string,
    params?: RequestData,
    options?: RawRequestOptions
  ): Promise<any> {
    return this._requestSender._rawRequest(method, path, params, options);
  }

  /**
   * @private
   */
  _setAuthenticator(
    key: string,
    authenticator: RequestAuthenticator | null
  ): void {
    if (key && authenticator) {
      throw new Error("Can't specify both apiKey and authenticator");
    }

    if (!key && !authenticator) {
      throw new Error('Neither apiKey nor config.authenticator provided');
    }

    this._authenticator = key ? createApiKeyAuthenticator(key) : authenticator;
  }

  /**
   * @private
   * This may be removed in the future.
   */
  _setAppInfo(info: AppInfo): void {
    if (info && typeof info !== 'object') {
      throw new Error('AppInfo must be an object.');
    }

    if (info && !info.name) {
      throw new Error('AppInfo.name is required');
    }

    info = info || {};

    this._appInfo = APP_INFO_PROPERTIES.reduce<Record<string, any>>(
      (accum: Record<string, any>, prop) => {
        if (typeof info[prop] == 'string') {
          accum = accum || {};

          accum[prop] = info[prop];
        }

        return accum;
      },
      {}
    );
  }

  setClientId(clientId: string): void {
    this._clientId = clientId;
  }

  getClientId(): string | undefined {
    return this._clientId;
  }

  /**
   * @private
   * Please open or upvote an issue at github.com/stripe/stripe-node
   * if you use this, detailing your use-case.
   *
   * It may be deprecated and removed in the future.
   */
  getConstant(c: string): unknown {
    switch (c) {
      case 'DEFAULT_HOST':
        return DEFAULT_HOST;
      case 'DEFAULT_PORT':
        return DEFAULT_PORT;
      case 'DEFAULT_BASE_PATH':
        return DEFAULT_BASE_PATH;
      case 'DEFAULT_API_VERSION':
        return DEFAULT_API_VERSION;
      case 'DEFAULT_TIMEOUT':
        return DEFAULT_TIMEOUT;
      case 'MAX_NETWORK_RETRY_DELAY_SEC':
        return MAX_NETWORK_RETRY_DELAY_SEC;
      case 'INITIAL_NETWORK_RETRY_DELAY_SEC':
        return INITIAL_NETWORK_RETRY_DELAY_SEC;
    }
    return ((Stripe as unknown) as Record<string, unknown>)[c];
  }

  getMaxNetworkRetries(): number {
    return this.getApiField('maxNetworkRetries');
  }

  /**
   * @private
   * This may be removed in the future.
   */
  _setApiNumberField(
    prop: keyof Stripe['_api'],
    n: number,
    defaultVal?: number
  ): void {
    // @ts-ignore
    const val = validateInteger(prop, n, defaultVal);

    this._setApiField(prop, val);
  }

  getMaxNetworkRetryDelay(): number {
    return MAX_NETWORK_RETRY_DELAY_SEC;
  }

  getInitialNetworkRetryDelay(): number {
    return INITIAL_NETWORK_RETRY_DELAY_SEC;
  }

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
  getClientUserAgent(cb: (userAgent: string) => void): void {
    return this.getClientUserAgentSeeded(Stripe.USER_AGENT, cb);
  }

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
  getClientUserAgentSeeded(
    seed: Record<string, string | boolean | null>,
    cb: (userAgent: string) => void
  ): void {
    this._platformFunctions.getUname().then((uname: string | null) => {
      const userAgent: Record<string, string> = {};
      for (const field in seed) {
        if (!Object.prototype.hasOwnProperty.call(seed, field)) {
          continue;
        }
        userAgent[field] = encodeURIComponent(seed[field] ?? 'null');
      }

      // URI-encode in case there are unusual characters in the system's uname.
      userAgent.uname = encodeURIComponent(uname || 'UNKNOWN');

      const client = this.getApiField('httpClient');
      if (client) {
        userAgent.httplib = encodeURIComponent(client.getClientName());
      }

      if (this._appInfo) {
        userAgent.application = this._appInfo;
      }

      cb(JSON.stringify(userAgent));
    });
  }

  /**
   * @private
   * Please open or upvote an issue at github.com/stripe/stripe-node
   * if you use this, detailing your use-case.
   *
   * It may be deprecated and removed in the future.
   */
  getAppInfoAsString(): string {
    if (!this._appInfo) {
      return '';
    }

    let formatted = this._appInfo.name;

    if (this._appInfo.version) {
      formatted += `/${this._appInfo.version}`;
    }

    if (this._appInfo.url) {
      formatted += ` (${this._appInfo.url})`;
    }

    return formatted;
  }

  getTelemetryEnabled(): boolean {
    return this._enableTelemetry;
  }

  /**
   * @private
   * This may be removed in the future.
   */
  _prepResources(): void {
    for (const name in resources) {
      if (!Object.prototype.hasOwnProperty.call(resources, name)) {
        continue;
      }

      // @ts-ignore
      this[pascalToCamelCase(name.replace('Resource', ''))] = new resources[
        name
      ](this);
    }
  }

  /**
   * @private
   * This may be removed in the future.
   */
  _getPropsFromConfig(config: Record<string, unknown>): UserProvidedConfig {
    // If config is null or undefined, just bail early with no props
    if (!config) {
      return {};
    }

    // config can be an object or a string
    const isString = typeof config === 'string';
    const isObject = config === Object(config) && !Array.isArray(config);

    if (!isObject && !isString) {
      throw new Error('Config must either be an object or a string');
    }

    // If config is a string, we assume the old behavior of passing in a string representation of the api version
    if (isString) {
      return {
        apiVersion: config,
      };
    }

    // If config is an object, we assume the new behavior and make sure it doesn't contain any unexpected values
    const values = Object.keys(config).filter(
      (value) => !ALLOWED_CONFIG_PROPERTIES.includes(value)
    );

    if (values.length > 0) {
      throw new Error(
        `Config object may only contain the following: ${ALLOWED_CONFIG_PROPERTIES.join(
          ', '
        )}`
      );
    }

    return config;
  }

  /**
   * @private
   * This may be removed in the future.
   */
  _setApiField<K extends keyof Stripe['_api']>(
    key: K,
    value: Stripe['_api'][K]
  ): void {
    this._api[key] = value;
  }

  /**
   * @private
   * Please open or upvote an issue at github.com/stripe/stripe-node
   * if you use this, detailing your use-case.
   *
   * It may be deprecated and removed in the future.
   */
  getApiField<K extends keyof Stripe['_api']>(key: K): Stripe['_api'][K] {
    return this._api[key];
  }

  parseEventNotification(
    payload: string | Uint8Array,
    header: string | Uint8Array,
    secret: string,
    tolerance?: number,
    cryptoProvider?: CryptoProvider,
    receivedAt?: number
    // this return type is ignored?? picks up types from `types/index.d.ts` instead
  ): any {
    // parses and validates the event payload all in one go
    const eventNotification: any = (this.webhooks.constructEvent as any)(
      payload,
      header,
      secret,
      tolerance,
      cryptoProvider,
      receivedAt
    );

    // Parse string context into StripeContext object if present
    if (eventNotification.context) {
      eventNotification.context = StripeContext.parse(
        eventNotification.context
      );
    }

    eventNotification.fetchEvent = (): Promise<unknown> => {
      return this._requestSender._rawRequest(
        'GET',
        `/v2/core/events/${eventNotification.id}`,
        undefined,
        {
          stripeContext: eventNotification.context as any,
        },
        ['fetch_event']
      );
    };

    eventNotification.fetchRelatedObject = (): Promise<unknown> => {
      if (!eventNotification.related_object) {
        return Promise.resolve(null);
      }

      return this._requestSender._rawRequest(
        'GET',
        eventNotification.related_object.url,
        undefined,
        {
          stripeContext: eventNotification.context as any,
        },
        ['fetch_related_object']
      );
    };

    return eventNotification;
  }
}

// For backward compatibility, export createStripe as a factory function
export function createStripe(
  platformFunctions: PlatformFunctions,
  requestSender: RequestSenderFactory = defaultRequestSenderFactory
): typeof Stripe {
  // Initialize static properties
  Stripe.initialize(platformFunctions, requestSender);

  return Stripe;
}

export declare namespace Stripe {
  // StripeInterfaceExports: The beginning of the section generated from our OpenAPI spec
  export {
    Account,
    DeletedAccount,
    AccountCreateParams,
    AccountRetrieveParams,
    AccountUpdateParams,
    AccountListParams,
    AccountDeleteParams,
    AccountCreateExternalAccountParams,
    AccountCreateLoginLinkParams,
    AccountCreatePersonParams,
    AccountDeleteExternalAccountParams,
    AccountDeletePersonParams,
    AccountListCapabilitiesParams,
    AccountListExternalAccountsParams,
    AccountListPersonsParams,
    AccountRejectParams,
    AccountRetrieveCurrentParams,
    AccountRetrieveCapabilityParams,
    AccountRetrieveExternalAccountParams,
    AccountRetrievePersonParams,
    AccountUpdateCapabilityParams,
    AccountUpdateExternalAccountParams,
    AccountUpdatePersonParams,
    AccountResource,
  };
  export {AccountLink, AccountLinkCreateParams, AccountLinkResource};
  export {AccountSession, AccountSessionCreateParams, AccountSessionResource};
  export {
    ApplePayDomain,
    DeletedApplePayDomain,
    ApplePayDomainCreateParams,
    ApplePayDomainRetrieveParams,
    ApplePayDomainListParams,
    ApplePayDomainDeleteParams,
    ApplePayDomainResource,
  };
  export {
    ApplicationFee,
    ApplicationFeeRetrieveParams,
    ApplicationFeeListParams,
    ApplicationFeeCreateRefundParams,
    ApplicationFeeListRefundsParams,
    ApplicationFeeRetrieveRefundParams,
    ApplicationFeeUpdateRefundParams,
    ApplicationFeeResource,
  };
  export {Balance, BalanceRetrieveParams, BalanceResource};
  export {
    BalanceSettings,
    BalanceSettingsRetrieveParams,
    BalanceSettingsUpdateParams,
    BalanceSettingResource,
  };
  export {
    BalanceTransaction,
    BalanceTransactionRetrieveParams,
    BalanceTransactionListParams,
    BalanceTransactionResource,
  };
  export {
    Charge,
    ChargeCreateParams,
    ChargeRetrieveParams,
    ChargeUpdateParams,
    ChargeListParams,
    ChargeCaptureParams,
    ChargeSearchParams,
    ChargeResource,
  };
  export {
    ConfirmationToken,
    ConfirmationTokenRetrieveParams,
    ConfirmationTokenResource,
  };
  export {
    CountrySpec,
    CountrySpecRetrieveParams,
    CountrySpecListParams,
    CountrySpecResource,
  };
  export {
    Coupon,
    DeletedCoupon,
    CouponCreateParams,
    CouponRetrieveParams,
    CouponUpdateParams,
    CouponListParams,
    CouponDeleteParams,
    CouponResource,
  };
  export {
    CreditNote,
    CreditNoteCreateParams,
    CreditNoteRetrieveParams,
    CreditNoteUpdateParams,
    CreditNoteListParams,
    CreditNoteListLineItemsParams,
    CreditNoteListPreviewLineItemsParams,
    CreditNotePreviewParams,
    CreditNoteVoidCreditNoteParams,
    CreditNoteResource,
  };
  export {
    Customer,
    DeletedCustomer,
    CustomerCreateParams,
    CustomerRetrieveParams,
    CustomerUpdateParams,
    CustomerListParams,
    CustomerDeleteParams,
    CustomerCreateBalanceTransactionParams,
    CustomerCreateFundingInstructionsParams,
    CustomerCreateSourceParams,
    CustomerCreateTaxIdParams,
    CustomerDeleteDiscountParams,
    CustomerDeleteSourceParams,
    CustomerDeleteTaxIdParams,
    CustomerListBalanceTransactionsParams,
    CustomerListCashBalanceTransactionsParams,
    CustomerListPaymentMethodsParams,
    CustomerListSourcesParams,
    CustomerListTaxIdsParams,
    CustomerRetrieveBalanceTransactionParams,
    CustomerRetrieveCashBalanceParams,
    CustomerRetrieveCashBalanceTransactionParams,
    CustomerRetrievePaymentMethodParams,
    CustomerRetrieveSourceParams,
    CustomerRetrieveTaxIdParams,
    CustomerSearchParams,
    CustomerUpdateBalanceTransactionParams,
    CustomerUpdateCashBalanceParams,
    CustomerUpdateSourceParams,
    CustomerVerifySourceParams,
    CustomerResource,
  };
  export {
    CustomerSession,
    CustomerSessionCreateParams,
    CustomerSessionResource,
  };
  export {
    Dispute,
    DisputeRetrieveParams,
    DisputeUpdateParams,
    DisputeListParams,
    DisputeCloseParams,
    DisputeResource,
  };
  export {
    EphemeralKey,
    EphemeralKeyCreateParams,
    EphemeralKeyDeleteParams,
    EphemeralKeyResource,
  };
  export {
    Event,
    EventBase,
    EventRetrieveParams,
    EventListParams,
    EventResource,
  };
  export {
    ExchangeRate,
    ExchangeRateRetrieveParams,
    ExchangeRateListParams,
    ExchangeRateResource,
  };
  export {
    File,
    FileCreateParams,
    FileRetrieveParams,
    FileListParams,
    FileResource,
  };
  export {
    FileLink,
    FileLinkCreateParams,
    FileLinkRetrieveParams,
    FileLinkUpdateParams,
    FileLinkListParams,
    FileLinkResource,
  };
  export {
    Invoice,
    DeletedInvoice,
    InvoiceCreateParams,
    InvoiceRetrieveParams,
    InvoiceUpdateParams,
    InvoiceListParams,
    InvoiceDeleteParams,
    InvoiceAddLinesParams,
    InvoiceAttachPaymentParams,
    InvoiceCreatePreviewParams,
    InvoiceFinalizeInvoiceParams,
    InvoiceListLineItemsParams,
    InvoiceMarkUncollectibleParams,
    InvoicePayParams,
    InvoiceRemoveLinesParams,
    InvoiceSearchParams,
    InvoiceSendInvoiceParams,
    InvoiceUpdateLinesParams,
    InvoiceUpdateLineItemParams,
    InvoiceVoidInvoiceParams,
    InvoiceResource,
  };
  export {
    InvoiceItem,
    DeletedInvoiceItem,
    InvoiceItemCreateParams,
    InvoiceItemRetrieveParams,
    InvoiceItemUpdateParams,
    InvoiceItemListParams,
    InvoiceItemDeleteParams,
    InvoiceItemResource,
  };
  export {
    InvoicePayment,
    InvoicePaymentRetrieveParams,
    InvoicePaymentListParams,
    InvoicePaymentResource,
  };
  export {
    InvoiceRenderingTemplate,
    InvoiceRenderingTemplateRetrieveParams,
    InvoiceRenderingTemplateListParams,
    InvoiceRenderingTemplateArchiveParams,
    InvoiceRenderingTemplateUnarchiveParams,
    InvoiceRenderingTemplateResource,
  };
  export {Mandate, MandateRetrieveParams, MandateResource};
  export {
    PaymentAttemptRecord,
    PaymentAttemptRecordRetrieveParams,
    PaymentAttemptRecordListParams,
    PaymentAttemptRecordResource,
  };
  export {
    PaymentIntent,
    PaymentIntentCreateParams,
    PaymentIntentRetrieveParams,
    PaymentIntentUpdateParams,
    PaymentIntentListParams,
    PaymentIntentApplyCustomerBalanceParams,
    PaymentIntentCancelParams,
    PaymentIntentCaptureParams,
    PaymentIntentConfirmParams,
    PaymentIntentIncrementAuthorizationParams,
    PaymentIntentListAmountDetailsLineItemsParams,
    PaymentIntentSearchParams,
    PaymentIntentVerifyMicrodepositsParams,
    PaymentIntentResource,
  };
  export {
    PaymentLink,
    PaymentLinkCreateParams,
    PaymentLinkRetrieveParams,
    PaymentLinkUpdateParams,
    PaymentLinkListParams,
    PaymentLinkListLineItemsParams,
    PaymentLinkResource,
  };
  export {
    PaymentMethod,
    PaymentMethodCreateParams,
    PaymentMethodRetrieveParams,
    PaymentMethodUpdateParams,
    PaymentMethodListParams,
    PaymentMethodAttachParams,
    PaymentMethodDetachParams,
    PaymentMethodResource,
  };
  export {
    PaymentMethodConfiguration,
    PaymentMethodConfigurationCreateParams,
    PaymentMethodConfigurationRetrieveParams,
    PaymentMethodConfigurationUpdateParams,
    PaymentMethodConfigurationListParams,
    PaymentMethodConfigurationResource,
  };
  export {
    PaymentMethodDomain,
    PaymentMethodDomainCreateParams,
    PaymentMethodDomainRetrieveParams,
    PaymentMethodDomainUpdateParams,
    PaymentMethodDomainListParams,
    PaymentMethodDomainValidateParams,
    PaymentMethodDomainResource,
  };
  export {
    PaymentRecord,
    PaymentRecordRetrieveParams,
    PaymentRecordReportPaymentParams,
    PaymentRecordReportPaymentAttemptParams,
    PaymentRecordReportPaymentAttemptCanceledParams,
    PaymentRecordReportPaymentAttemptFailedParams,
    PaymentRecordReportPaymentAttemptGuaranteedParams,
    PaymentRecordReportPaymentAttemptInformationalParams,
    PaymentRecordReportRefundParams,
    PaymentRecordResource,
  };
  export {
    Payout,
    PayoutCreateParams,
    PayoutRetrieveParams,
    PayoutUpdateParams,
    PayoutListParams,
    PayoutCancelParams,
    PayoutReverseParams,
    PayoutResource,
  };
  export {
    Plan,
    DeletedPlan,
    PlanCreateParams,
    PlanRetrieveParams,
    PlanUpdateParams,
    PlanListParams,
    PlanDeleteParams,
    PlanResource,
  };
  export {
    Price,
    DeletedPrice,
    PriceCreateParams,
    PriceRetrieveParams,
    PriceUpdateParams,
    PriceListParams,
    PriceSearchParams,
    PriceResource,
  };
  export {
    Product,
    DeletedProduct,
    ProductCreateParams,
    ProductRetrieveParams,
    ProductUpdateParams,
    ProductListParams,
    ProductDeleteParams,
    ProductCreateFeatureParams,
    ProductDeleteFeatureParams,
    ProductListFeaturesParams,
    ProductRetrieveFeatureParams,
    ProductSearchParams,
    ProductResource,
  };
  export {
    PromotionCode,
    PromotionCodeCreateParams,
    PromotionCodeRetrieveParams,
    PromotionCodeUpdateParams,
    PromotionCodeListParams,
    PromotionCodeResource,
  };
  export {
    Quote,
    QuoteCreateParams,
    QuoteRetrieveParams,
    QuoteUpdateParams,
    QuoteListParams,
    QuoteAcceptParams,
    QuoteCancelParams,
    QuoteFinalizeQuoteParams,
    QuoteListComputedUpfrontLineItemsParams,
    QuoteListLineItemsParams,
    QuotePdfParams,
    QuoteResource,
  };
  export {
    Refund,
    RefundCreateParams,
    RefundRetrieveParams,
    RefundUpdateParams,
    RefundListParams,
    RefundCancelParams,
    RefundResource,
  };
  export {
    Review,
    ReviewRetrieveParams,
    ReviewListParams,
    ReviewApproveParams,
    ReviewResource,
  };
  export {SetupAttempt, SetupAttemptListParams, SetupAttemptResource};
  export {
    SetupIntent,
    SetupIntentCreateParams,
    SetupIntentRetrieveParams,
    SetupIntentUpdateParams,
    SetupIntentListParams,
    SetupIntentCancelParams,
    SetupIntentConfirmParams,
    SetupIntentVerifyMicrodepositsParams,
    SetupIntentResource,
  };
  export {
    ShippingRate,
    ShippingRateCreateParams,
    ShippingRateRetrieveParams,
    ShippingRateUpdateParams,
    ShippingRateListParams,
    ShippingRateResource,
  };
  export {
    Source,
    SourceCreateParams,
    SourceRetrieveParams,
    SourceUpdateParams,
    SourceListSourceTransactionsParams,
    SourceVerifyParams,
    SourceResource,
  };
  export {
    Subscription,
    SubscriptionCreateParams,
    SubscriptionRetrieveParams,
    SubscriptionUpdateParams,
    SubscriptionListParams,
    SubscriptionCancelParams,
    SubscriptionDeleteDiscountParams,
    SubscriptionMigrateParams,
    SubscriptionResumeParams,
    SubscriptionSearchParams,
    SubscriptionResource,
  };
  export {
    SubscriptionItem,
    DeletedSubscriptionItem,
    SubscriptionItemCreateParams,
    SubscriptionItemRetrieveParams,
    SubscriptionItemUpdateParams,
    SubscriptionItemListParams,
    SubscriptionItemDeleteParams,
    SubscriptionItemResource,
  };
  export {
    SubscriptionSchedule,
    SubscriptionScheduleCreateParams,
    SubscriptionScheduleRetrieveParams,
    SubscriptionScheduleUpdateParams,
    SubscriptionScheduleListParams,
    SubscriptionScheduleCancelParams,
    SubscriptionScheduleReleaseParams,
    SubscriptionScheduleResource,
  };
  export {TaxCode, TaxCodeRetrieveParams, TaxCodeListParams, TaxCodeResource};
  export {
    TaxId,
    DeletedTaxId,
    TaxIdCreateParams,
    TaxIdRetrieveParams,
    TaxIdListParams,
    TaxIdDeleteParams,
    TaxIdResource,
  };
  export {
    TaxRate,
    TaxRateCreateParams,
    TaxRateRetrieveParams,
    TaxRateUpdateParams,
    TaxRateListParams,
    TaxRateResource,
  };
  export {Token, TokenCreateParams, TokenRetrieveParams, TokenResource};
  export {
    Topup,
    TopupCreateParams,
    TopupRetrieveParams,
    TopupUpdateParams,
    TopupListParams,
    TopupCancelParams,
    TopupResource,
  };
  export {
    Transfer,
    TransferCreateParams,
    TransferRetrieveParams,
    TransferUpdateParams,
    TransferListParams,
    TransferCreateReversalParams,
    TransferListReversalsParams,
    TransferRetrieveReversalParams,
    TransferUpdateReversalParams,
    TransferResource,
  };
  export {
    WebhookEndpoint,
    DeletedWebhookEndpoint,
    WebhookEndpointCreateParams,
    WebhookEndpointRetrieveParams,
    WebhookEndpointUpdateParams,
    WebhookEndpointListParams,
    WebhookEndpointDeleteParams,
    WebhookEndpointResource,
  };
  export {Application, DeletedApplication};
  export {BalanceTransactionSource};
  export {BankAccount, DeletedBankAccount};
  export {Card, DeletedCard};
  export {ConnectCollectionTransfer};
  export {Discount, DeletedDiscount};
  export {FundingInstructions};
  export {LineItem};
  export {ReserveTransaction};
  export {SourceMandateNotification};
  export {SourceTransaction};
  export {TaxDeductedAtSource};
  export {Capability};
  export {ExternalAccount, DeletedExternalAccount};
  export {LoginLink};
  export {Person, DeletedPerson};
  export {FeeRefund};
  export {CreditNoteLineItem};
  export {CustomerBalanceTransaction};
  export {CashBalance};
  export {CustomerCashBalanceTransaction};
  export {CustomerSource, DeletedCustomerSource};
  export {InvoiceLineItem};
  export {PaymentIntentAmountDetailsLineItem};
  export {ProductFeature, DeletedProductFeature};
  export {TransferReversal};
  export {Apps};
  export {Billing};
  export {BillingPortal};
  export {Checkout};
  export {Climate};
  export {Entitlements};
  export {FinancialConnections};
  export {Forwarding};
  export {Identity};
  export {Issuing};
  export {Radar};
  export {Reporting};
  export {Sigma};
  export {Tax};
  export {Terminal};
  export {TestHelpers};
  export {Treasury};
  export {V2};
  // StripeInterfaceExports: The end of the section generated from our OpenAPI spec

  // V1EventExports: The beginning of the section generated from our OpenAPI spec
  export {
    AccountApplicationAuthorizedEvent,
    AccountApplicationDeauthorizedEvent,
    AccountExternalAccountCreatedEvent,
    AccountExternalAccountDeletedEvent,
    AccountExternalAccountUpdatedEvent,
    AccountUpdatedEvent,
    ApplicationFeeCreatedEvent,
    ApplicationFeeRefundUpdatedEvent,
    ApplicationFeeRefundedEvent,
    BalanceAvailableEvent,
    BalanceSettingsUpdatedEvent,
    BillingAlertTriggeredEvent,
    BillingCreditBalanceTransactionCreatedEvent,
    BillingCreditGrantCreatedEvent,
    BillingCreditGrantUpdatedEvent,
    BillingMeterCreatedEvent,
    BillingMeterDeactivatedEvent,
    BillingMeterReactivatedEvent,
    BillingMeterUpdatedEvent,
    BillingPortalConfigurationCreatedEvent,
    BillingPortalConfigurationUpdatedEvent,
    BillingPortalSessionCreatedEvent,
    CapabilityUpdatedEvent,
    CashBalanceFundsAvailableEvent,
    ChargeCapturedEvent,
    ChargeDisputeClosedEvent,
    ChargeDisputeCreatedEvent,
    ChargeDisputeFundsReinstatedEvent,
    ChargeDisputeFundsWithdrawnEvent,
    ChargeDisputeUpdatedEvent,
    ChargeExpiredEvent,
    ChargeFailedEvent,
    ChargePendingEvent,
    ChargeRefundUpdatedEvent,
    ChargeRefundedEvent,
    ChargeSucceededEvent,
    ChargeUpdatedEvent,
    CheckoutSessionAsyncPaymentFailedEvent,
    CheckoutSessionAsyncPaymentSucceededEvent,
    CheckoutSessionCompletedEvent,
    CheckoutSessionExpiredEvent,
    ClimateOrderCanceledEvent,
    ClimateOrderCreatedEvent,
    ClimateOrderDelayedEvent,
    ClimateOrderDeliveredEvent,
    ClimateOrderProductSubstitutedEvent,
    ClimateProductCreatedEvent,
    ClimateProductPricingUpdatedEvent,
    CouponCreatedEvent,
    CouponDeletedEvent,
    CouponUpdatedEvent,
    CreditNoteCreatedEvent,
    CreditNoteUpdatedEvent,
    CreditNoteVoidedEvent,
    CustomerCreatedEvent,
    CustomerDeletedEvent,
    CustomerDiscountCreatedEvent,
    CustomerDiscountDeletedEvent,
    CustomerDiscountUpdatedEvent,
    CustomerSourceCreatedEvent,
    CustomerSourceDeletedEvent,
    CustomerSourceExpiringEvent,
    CustomerSourceUpdatedEvent,
    CustomerSubscriptionCreatedEvent,
    CustomerSubscriptionDeletedEvent,
    CustomerSubscriptionPausedEvent,
    CustomerSubscriptionPendingUpdateAppliedEvent,
    CustomerSubscriptionPendingUpdateExpiredEvent,
    CustomerSubscriptionResumedEvent,
    CustomerSubscriptionTrialWillEndEvent,
    CustomerSubscriptionUpdatedEvent,
    CustomerTaxIdCreatedEvent,
    CustomerTaxIdDeletedEvent,
    CustomerTaxIdUpdatedEvent,
    CustomerUpdatedEvent,
    CustomerCashBalanceTransactionCreatedEvent,
    EntitlementsActiveEntitlementSummaryUpdatedEvent,
    FileCreatedEvent,
    FinancialConnectionsAccountAccountNumbersUpdatedEvent,
    FinancialConnectionsAccountCreatedEvent,
    FinancialConnectionsAccountDeactivatedEvent,
    FinancialConnectionsAccountDisconnectedEvent,
    FinancialConnectionsAccountReactivatedEvent,
    FinancialConnectionsAccountRefreshedBalanceEvent,
    FinancialConnectionsAccountRefreshedOwnershipEvent,
    FinancialConnectionsAccountRefreshedTransactionsEvent,
    FinancialConnectionsAccountUpcomingAccountNumberExpiryEvent,
    IdentityVerificationSessionCanceledEvent,
    IdentityVerificationSessionCreatedEvent,
    IdentityVerificationSessionProcessingEvent,
    IdentityVerificationSessionRedactedEvent,
    IdentityVerificationSessionRequiresInputEvent,
    IdentityVerificationSessionVerifiedEvent,
    InvoiceCreatedEvent,
    InvoiceDeletedEvent,
    InvoiceFinalizationFailedEvent,
    InvoiceFinalizedEvent,
    InvoiceMarkedUncollectibleEvent,
    InvoiceOverdueEvent,
    InvoiceOverpaidEvent,
    InvoicePaidEvent,
    InvoicePaymentActionRequiredEvent,
    InvoicePaymentAttemptRequiredEvent,
    InvoicePaymentFailedEvent,
    InvoicePaymentSucceededEvent,
    InvoiceSentEvent,
    InvoiceUpcomingEvent,
    InvoiceUpdatedEvent,
    InvoiceVoidedEvent,
    InvoiceWillBeDueEvent,
    InvoicePaymentPaidEvent,
    InvoiceItemCreatedEvent,
    InvoiceItemDeletedEvent,
    IssuingAuthorizationCreatedEvent,
    IssuingAuthorizationRequestEvent,
    IssuingAuthorizationUpdatedEvent,
    IssuingCardCreatedEvent,
    IssuingCardUpdatedEvent,
    IssuingCardholderCreatedEvent,
    IssuingCardholderUpdatedEvent,
    IssuingDisputeClosedEvent,
    IssuingDisputeCreatedEvent,
    IssuingDisputeFundsReinstatedEvent,
    IssuingDisputeFundsRescindedEvent,
    IssuingDisputeSubmittedEvent,
    IssuingDisputeUpdatedEvent,
    IssuingPersonalizationDesignActivatedEvent,
    IssuingPersonalizationDesignDeactivatedEvent,
    IssuingPersonalizationDesignRejectedEvent,
    IssuingPersonalizationDesignUpdatedEvent,
    IssuingTokenCreatedEvent,
    IssuingTokenUpdatedEvent,
    IssuingTransactionCreatedEvent,
    IssuingTransactionPurchaseDetailsReceiptUpdatedEvent,
    IssuingTransactionUpdatedEvent,
    MandateUpdatedEvent,
    PaymentIntentAmountCapturableUpdatedEvent,
    PaymentIntentCanceledEvent,
    PaymentIntentCreatedEvent,
    PaymentIntentPartiallyFundedEvent,
    PaymentIntentPaymentFailedEvent,
    PaymentIntentProcessingEvent,
    PaymentIntentRequiresActionEvent,
    PaymentIntentSucceededEvent,
    PaymentLinkCreatedEvent,
    PaymentLinkUpdatedEvent,
    PaymentMethodAttachedEvent,
    PaymentMethodAutomaticallyUpdatedEvent,
    PaymentMethodDetachedEvent,
    PaymentMethodUpdatedEvent,
    PayoutCanceledEvent,
    PayoutCreatedEvent,
    PayoutFailedEvent,
    PayoutPaidEvent,
    PayoutReconciliationCompletedEvent,
    PayoutUpdatedEvent,
    PersonCreatedEvent,
    PersonDeletedEvent,
    PersonUpdatedEvent,
    PlanCreatedEvent,
    PlanDeletedEvent,
    PlanUpdatedEvent,
    PriceCreatedEvent,
    PriceDeletedEvent,
    PriceUpdatedEvent,
    ProductCreatedEvent,
    ProductDeletedEvent,
    ProductUpdatedEvent,
    PromotionCodeCreatedEvent,
    PromotionCodeUpdatedEvent,
    QuoteAcceptedEvent,
    QuoteCanceledEvent,
    QuoteCreatedEvent,
    QuoteFinalizedEvent,
    RadarEarlyFraudWarningCreatedEvent,
    RadarEarlyFraudWarningUpdatedEvent,
    RefundCreatedEvent,
    RefundFailedEvent,
    RefundUpdatedEvent,
    ReportingReportRunFailedEvent,
    ReportingReportRunSucceededEvent,
    ReportingReportTypeUpdatedEvent,
    ReviewClosedEvent,
    ReviewOpenedEvent,
    SetupIntentCanceledEvent,
    SetupIntentCreatedEvent,
    SetupIntentRequiresActionEvent,
    SetupIntentSetupFailedEvent,
    SetupIntentSucceededEvent,
    SigmaScheduledQueryRunCreatedEvent,
    SourceCanceledEvent,
    SourceChargeableEvent,
    SourceFailedEvent,
    SourceMandateNotificationEvent,
    SourceRefundAttributesRequiredEvent,
    SourceTransactionCreatedEvent,
    SourceTransactionUpdatedEvent,
    SubscriptionScheduleAbortedEvent,
    SubscriptionScheduleCanceledEvent,
    SubscriptionScheduleCompletedEvent,
    SubscriptionScheduleCreatedEvent,
    SubscriptionScheduleExpiringEvent,
    SubscriptionScheduleReleasedEvent,
    SubscriptionScheduleUpdatedEvent,
    TaxSettingsUpdatedEvent,
    TaxRateCreatedEvent,
    TaxRateUpdatedEvent,
    TerminalReaderActionFailedEvent,
    TerminalReaderActionSucceededEvent,
    TerminalReaderActionUpdatedEvent,
    TestHelpersTestClockAdvancingEvent,
    TestHelpersTestClockCreatedEvent,
    TestHelpersTestClockDeletedEvent,
    TestHelpersTestClockInternalFailureEvent,
    TestHelpersTestClockReadyEvent,
    TopupCanceledEvent,
    TopupCreatedEvent,
    TopupFailedEvent,
    TopupReversedEvent,
    TopupSucceededEvent,
    TransferCreatedEvent,
    TransferReversedEvent,
    TransferUpdatedEvent,
    TreasuryCreditReversalCreatedEvent,
    TreasuryCreditReversalPostedEvent,
    TreasuryDebitReversalCompletedEvent,
    TreasuryDebitReversalCreatedEvent,
    TreasuryDebitReversalInitialCreditGrantedEvent,
    TreasuryFinancialAccountClosedEvent,
    TreasuryFinancialAccountCreatedEvent,
    TreasuryFinancialAccountFeaturesStatusUpdatedEvent,
    TreasuryInboundTransferCanceledEvent,
    TreasuryInboundTransferCreatedEvent,
    TreasuryInboundTransferFailedEvent,
    TreasuryInboundTransferSucceededEvent,
    TreasuryOutboundPaymentCanceledEvent,
    TreasuryOutboundPaymentCreatedEvent,
    TreasuryOutboundPaymentExpectedArrivalDateUpdatedEvent,
    TreasuryOutboundPaymentFailedEvent,
    TreasuryOutboundPaymentPostedEvent,
    TreasuryOutboundPaymentReturnedEvent,
    TreasuryOutboundPaymentTrackingDetailsUpdatedEvent,
    TreasuryOutboundTransferCanceledEvent,
    TreasuryOutboundTransferCreatedEvent,
    TreasuryOutboundTransferExpectedArrivalDateUpdatedEvent,
    TreasuryOutboundTransferFailedEvent,
    TreasuryOutboundTransferPostedEvent,
    TreasuryOutboundTransferReturnedEvent,
    TreasuryOutboundTransferTrackingDetailsUpdatedEvent,
    TreasuryReceivedCreditCreatedEvent,
    TreasuryReceivedCreditFailedEvent,
    TreasuryReceivedCreditSucceededEvent,
    TreasuryReceivedDebitCreatedEvent,
  };
  // V1EventExports: The end of the section generated from our OpenAPI spec

  // Export Response and other shared classes
  export {
    Response,
    RequestOptions,
    RawRequestOptions,
    ApiList,
    ApiListPromise,
    ApiSearchResultPromise,
    ApiSearchResult,
    StripeStreamResponse,
    RequestEvent,
    ResponseEvent,
    AppInfo,
    FileData,
  };

  export {
    Metadata,
    MetadataParam,
    Address,
    JapanAddress,
    AddressParam,
    ShippingAddressParam,
    JapanAddressParam,
    RangeQueryParam,
    PaginationParams,
    Emptyable,
  };

  export {StripeContext};
  export {StripeRawError};
  export import errors = _Error;
  export import Events = V2.Core.Events;
}

// Initialize the StripeClient class with Node platform functions
Stripe.initialize(new NodePlatformFunctions());

export default Stripe;
