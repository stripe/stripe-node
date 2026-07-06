import {NodePlatformFunctions} from './platform/NodePlatformFunctions.js';
import {Stripe as Stripe_} from './stripe.core.js';
import {StripeConfig} from './lib.js';

// Initialize the Stripe class with Node platform functions
Stripe_.initialize(new NodePlatformFunctions());

// Callable constructor: supports both `new Stripe()` and `Stripe()` for CJS consumers.
// typeof Stripe provides the construct signature and static members; the intersection
// adds a call signature for backward compatibility.
type StripeCallableConstructor = typeof Stripe_ & {
  (key: string, config?: StripeConfig): Stripe_;
};

// Function declaration merges with the ambient namespace below (CJS `import type` / nested types).
// eslint-disable-next-line func-style
const StripeConstructor: StripeCallableConstructor = (function(
  this: any,
  key: string,
  config?: StripeConfig
): Stripe_ {
  // Support calling without `new`
  if (!(this instanceof StripeConstructor)) {
    return new Stripe_(key, config);
  }
  return new Stripe_(key, config);
} as unknown) as StripeCallableConstructor;

// Copy all static properties from Stripe to the wrapper
Object.setPrototypeOf(StripeConstructor, Stripe_);
Object.setPrototypeOf(StripeConstructor.prototype, Stripe_.prototype);

// Copy static properties explicitly
for (const key of Object.getOwnPropertyNames(Stripe_)) {
  if (key !== 'length' && key !== 'prototype' && key !== 'name') {
    Object.defineProperty(StripeConstructor, key, {
      value: (Stripe_ as any)[key],
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }
}

// `new Stripe()` plus `Stripe()` call compat: the implementation is a function, so we merge
// callable + construct signatures here (see https://github.com/stripe/stripe-node/issues/2683).

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StripeConstructor extends Stripe_ {}
declare namespace StripeConstructor {
  export type Stripe = import('./stripe.core.js').Stripe;
  // StripeInterfaceCJSExports: The beginning of the section generated from our OpenAPI spec
  export type Account = Stripe_.Account;
  export type DeletedAccount = Stripe_.DeletedAccount;
  export type AccountCreateParams = Stripe_.AccountCreateParams;
  export type AccountRetrieveParams = Stripe_.AccountRetrieveParams;
  export type AccountUpdateParams = Stripe_.AccountUpdateParams;
  export type AccountListParams = Stripe_.AccountListParams;
  export type AccountDeleteParams = Stripe_.AccountDeleteParams;
  export type AccountCreateExternalAccountParams = Stripe_.AccountCreateExternalAccountParams;
  export type AccountCreateLoginLinkParams = Stripe_.AccountCreateLoginLinkParams;
  export type AccountCreatePersonParams = Stripe_.AccountCreatePersonParams;
  export type AccountDeleteExternalAccountParams = Stripe_.AccountDeleteExternalAccountParams;
  export type AccountDeletePersonParams = Stripe_.AccountDeletePersonParams;
  export type AccountListCapabilitiesParams = Stripe_.AccountListCapabilitiesParams;
  export type AccountListExternalAccountsParams = Stripe_.AccountListExternalAccountsParams;
  export type AccountListPersonsParams = Stripe_.AccountListPersonsParams;
  export type AccountRejectParams = Stripe_.AccountRejectParams;
  export type AccountRetrieveCurrentParams = Stripe_.AccountRetrieveCurrentParams;
  export type AccountRetrieveCapabilityParams = Stripe_.AccountRetrieveCapabilityParams;
  export type AccountRetrieveExternalAccountParams = Stripe_.AccountRetrieveExternalAccountParams;
  export type AccountRetrievePersonParams = Stripe_.AccountRetrievePersonParams;
  export type AccountUpdateCapabilityParams = Stripe_.AccountUpdateCapabilityParams;
  export type AccountUpdateExternalAccountParams = Stripe_.AccountUpdateExternalAccountParams;
  export type AccountUpdatePersonParams = Stripe_.AccountUpdatePersonParams;
  export type AccountResource = Stripe_.AccountResource;
  export type AccountLink = Stripe_.AccountLink;
  export type AccountLinkCreateParams = Stripe_.AccountLinkCreateParams;
  export type AccountLinkResource = Stripe_.AccountLinkResource;
  export type AccountSession = Stripe_.AccountSession;
  export type AccountSessionCreateParams = Stripe_.AccountSessionCreateParams;
  export type AccountSessionResource = Stripe_.AccountSessionResource;
  export type ApplePayDomain = Stripe_.ApplePayDomain;
  export type DeletedApplePayDomain = Stripe_.DeletedApplePayDomain;
  export type ApplePayDomainCreateParams = Stripe_.ApplePayDomainCreateParams;
  export type ApplePayDomainRetrieveParams = Stripe_.ApplePayDomainRetrieveParams;
  export type ApplePayDomainListParams = Stripe_.ApplePayDomainListParams;
  export type ApplePayDomainDeleteParams = Stripe_.ApplePayDomainDeleteParams;
  export type ApplePayDomainResource = Stripe_.ApplePayDomainResource;
  export type ApplicationFee = Stripe_.ApplicationFee;
  export type ApplicationFeeRetrieveParams = Stripe_.ApplicationFeeRetrieveParams;
  export type ApplicationFeeListParams = Stripe_.ApplicationFeeListParams;
  export type ApplicationFeeCreateRefundParams = Stripe_.ApplicationFeeCreateRefundParams;
  export type ApplicationFeeListRefundsParams = Stripe_.ApplicationFeeListRefundsParams;
  export type ApplicationFeeRetrieveRefundParams = Stripe_.ApplicationFeeRetrieveRefundParams;
  export type ApplicationFeeUpdateRefundParams = Stripe_.ApplicationFeeUpdateRefundParams;
  export type ApplicationFeeResource = Stripe_.ApplicationFeeResource;
  export type Balance = Stripe_.Balance;
  export type BalanceRetrieveParams = Stripe_.BalanceRetrieveParams;
  export type BalanceResource = Stripe_.BalanceResource;
  export type BalanceSettings = Stripe_.BalanceSettings;
  export type BalanceSettingsRetrieveParams = Stripe_.BalanceSettingsRetrieveParams;
  export type BalanceSettingsUpdateParams = Stripe_.BalanceSettingsUpdateParams;
  export type BalanceSettingResource = Stripe_.BalanceSettingResource;
  export type BalanceTransaction = Stripe_.BalanceTransaction;
  export type BalanceTransactionRetrieveParams = Stripe_.BalanceTransactionRetrieveParams;
  export type BalanceTransactionListParams = Stripe_.BalanceTransactionListParams;
  export type BalanceTransactionResource = Stripe_.BalanceTransactionResource;
  export type Charge = Stripe_.Charge;
  export type ChargeCreateParams = Stripe_.ChargeCreateParams;
  export type ChargeRetrieveParams = Stripe_.ChargeRetrieveParams;
  export type ChargeUpdateParams = Stripe_.ChargeUpdateParams;
  export type ChargeListParams = Stripe_.ChargeListParams;
  export type ChargeCaptureParams = Stripe_.ChargeCaptureParams;
  export type ChargeSearchParams = Stripe_.ChargeSearchParams;
  export type ChargeResource = Stripe_.ChargeResource;
  export type ConfirmationToken = Stripe_.ConfirmationToken;
  export type ConfirmationTokenRetrieveParams = Stripe_.ConfirmationTokenRetrieveParams;
  export type ConfirmationTokenResource = Stripe_.ConfirmationTokenResource;
  export type CountrySpec = Stripe_.CountrySpec;
  export type CountrySpecRetrieveParams = Stripe_.CountrySpecRetrieveParams;
  export type CountrySpecListParams = Stripe_.CountrySpecListParams;
  export type CountrySpecResource = Stripe_.CountrySpecResource;
  export type Coupon = Stripe_.Coupon;
  export type DeletedCoupon = Stripe_.DeletedCoupon;
  export type CouponCreateParams = Stripe_.CouponCreateParams;
  export type CouponRetrieveParams = Stripe_.CouponRetrieveParams;
  export type CouponUpdateParams = Stripe_.CouponUpdateParams;
  export type CouponListParams = Stripe_.CouponListParams;
  export type CouponDeleteParams = Stripe_.CouponDeleteParams;
  export type CouponResource = Stripe_.CouponResource;
  export type CreditNote = Stripe_.CreditNote;
  export type CreditNoteCreateParams = Stripe_.CreditNoteCreateParams;
  export type CreditNoteRetrieveParams = Stripe_.CreditNoteRetrieveParams;
  export type CreditNoteUpdateParams = Stripe_.CreditNoteUpdateParams;
  export type CreditNoteListParams = Stripe_.CreditNoteListParams;
  export type CreditNoteListLineItemsParams = Stripe_.CreditNoteListLineItemsParams;
  export type CreditNoteListPreviewLineItemsParams = Stripe_.CreditNoteListPreviewLineItemsParams;
  export type CreditNotePreviewParams = Stripe_.CreditNotePreviewParams;
  export type CreditNoteVoidCreditNoteParams = Stripe_.CreditNoteVoidCreditNoteParams;
  export type CreditNoteResource = Stripe_.CreditNoteResource;
  export type Customer = Stripe_.Customer;
  export type DeletedCustomer = Stripe_.DeletedCustomer;
  export type CustomerCreateParams = Stripe_.CustomerCreateParams;
  export type CustomerRetrieveParams = Stripe_.CustomerRetrieveParams;
  export type CustomerUpdateParams = Stripe_.CustomerUpdateParams;
  export type CustomerListParams = Stripe_.CustomerListParams;
  export type CustomerDeleteParams = Stripe_.CustomerDeleteParams;
  export type CustomerCreateBalanceTransactionParams = Stripe_.CustomerCreateBalanceTransactionParams;
  export type CustomerCreateFundingInstructionsParams = Stripe_.CustomerCreateFundingInstructionsParams;
  export type CustomerCreateSourceParams = Stripe_.CustomerCreateSourceParams;
  export type CustomerCreateTaxIdParams = Stripe_.CustomerCreateTaxIdParams;
  export type CustomerDeleteDiscountParams = Stripe_.CustomerDeleteDiscountParams;
  export type CustomerDeleteSourceParams = Stripe_.CustomerDeleteSourceParams;
  export type CustomerDeleteTaxIdParams = Stripe_.CustomerDeleteTaxIdParams;
  export type CustomerListBalanceTransactionsParams = Stripe_.CustomerListBalanceTransactionsParams;
  export type CustomerListCashBalanceTransactionsParams = Stripe_.CustomerListCashBalanceTransactionsParams;
  export type CustomerListPaymentMethodsParams = Stripe_.CustomerListPaymentMethodsParams;
  export type CustomerListSourcesParams = Stripe_.CustomerListSourcesParams;
  export type CustomerListTaxIdsParams = Stripe_.CustomerListTaxIdsParams;
  export type CustomerRetrieveBalanceTransactionParams = Stripe_.CustomerRetrieveBalanceTransactionParams;
  export type CustomerRetrieveCashBalanceParams = Stripe_.CustomerRetrieveCashBalanceParams;
  export type CustomerRetrieveCashBalanceTransactionParams = Stripe_.CustomerRetrieveCashBalanceTransactionParams;
  export type CustomerRetrievePaymentMethodParams = Stripe_.CustomerRetrievePaymentMethodParams;
  export type CustomerRetrieveSourceParams = Stripe_.CustomerRetrieveSourceParams;
  export type CustomerRetrieveTaxIdParams = Stripe_.CustomerRetrieveTaxIdParams;
  export type CustomerSearchParams = Stripe_.CustomerSearchParams;
  export type CustomerUpdateBalanceTransactionParams = Stripe_.CustomerUpdateBalanceTransactionParams;
  export type CustomerUpdateCashBalanceParams = Stripe_.CustomerUpdateCashBalanceParams;
  export type CustomerUpdateSourceParams = Stripe_.CustomerUpdateSourceParams;
  export type CustomerVerifySourceParams = Stripe_.CustomerVerifySourceParams;
  export type CustomerResource = Stripe_.CustomerResource;
  export type CustomerSession = Stripe_.CustomerSession;
  export type CustomerSessionCreateParams = Stripe_.CustomerSessionCreateParams;
  export type CustomerSessionResource = Stripe_.CustomerSessionResource;
  export type Dispute = Stripe_.Dispute;
  export type DisputeRetrieveParams = Stripe_.DisputeRetrieveParams;
  export type DisputeUpdateParams = Stripe_.DisputeUpdateParams;
  export type DisputeListParams = Stripe_.DisputeListParams;
  export type DisputeCloseParams = Stripe_.DisputeCloseParams;
  export type DisputeResource = Stripe_.DisputeResource;
  export type EphemeralKey = Stripe_.EphemeralKey;
  export type EphemeralKeyCreateParams = Stripe_.EphemeralKeyCreateParams;
  export type EphemeralKeyDeleteParams = Stripe_.EphemeralKeyDeleteParams;
  export type EphemeralKeyResource = Stripe_.EphemeralKeyResource;
  export type Event = Stripe_.Event;
  export type EventBase = Stripe_.EventBase;
  export type EventRetrieveParams = Stripe_.EventRetrieveParams;
  export type EventListParams = Stripe_.EventListParams;
  export type EventResource = Stripe_.EventResource;
  export type ExchangeRate = Stripe_.ExchangeRate;
  export type ExchangeRateRetrieveParams = Stripe_.ExchangeRateRetrieveParams;
  export type ExchangeRateListParams = Stripe_.ExchangeRateListParams;
  export type ExchangeRateResource = Stripe_.ExchangeRateResource;
  export type File = Stripe_.File;
  export type FileCreateParams = Stripe_.FileCreateParams;
  export type FileRetrieveParams = Stripe_.FileRetrieveParams;
  export type FileListParams = Stripe_.FileListParams;
  export type FileResource = Stripe_.FileResource;
  export type FileLink = Stripe_.FileLink;
  export type FileLinkCreateParams = Stripe_.FileLinkCreateParams;
  export type FileLinkRetrieveParams = Stripe_.FileLinkRetrieveParams;
  export type FileLinkUpdateParams = Stripe_.FileLinkUpdateParams;
  export type FileLinkListParams = Stripe_.FileLinkListParams;
  export type FileLinkResource = Stripe_.FileLinkResource;
  export type Invoice = Stripe_.Invoice;
  export type DeletedInvoice = Stripe_.DeletedInvoice;
  export type InvoiceCreateParams = Stripe_.InvoiceCreateParams;
  export type InvoiceRetrieveParams = Stripe_.InvoiceRetrieveParams;
  export type InvoiceUpdateParams = Stripe_.InvoiceUpdateParams;
  export type InvoiceListParams = Stripe_.InvoiceListParams;
  export type InvoiceDeleteParams = Stripe_.InvoiceDeleteParams;
  export type InvoiceAddLinesParams = Stripe_.InvoiceAddLinesParams;
  export type InvoiceAttachPaymentParams = Stripe_.InvoiceAttachPaymentParams;
  export type InvoiceCreatePreviewParams = Stripe_.InvoiceCreatePreviewParams;
  export type InvoiceFinalizeInvoiceParams = Stripe_.InvoiceFinalizeInvoiceParams;
  export type InvoiceListLineItemsParams = Stripe_.InvoiceListLineItemsParams;
  export type InvoiceMarkUncollectibleParams = Stripe_.InvoiceMarkUncollectibleParams;
  export type InvoicePayParams = Stripe_.InvoicePayParams;
  export type InvoiceRemoveLinesParams = Stripe_.InvoiceRemoveLinesParams;
  export type InvoiceSearchParams = Stripe_.InvoiceSearchParams;
  export type InvoiceSendInvoiceParams = Stripe_.InvoiceSendInvoiceParams;
  export type InvoiceUpdateLinesParams = Stripe_.InvoiceUpdateLinesParams;
  export type InvoiceUpdateLineItemParams = Stripe_.InvoiceUpdateLineItemParams;
  export type InvoiceVoidInvoiceParams = Stripe_.InvoiceVoidInvoiceParams;
  export type InvoiceResource = Stripe_.InvoiceResource;
  export type InvoiceItem = Stripe_.InvoiceItem;
  export type DeletedInvoiceItem = Stripe_.DeletedInvoiceItem;
  export type InvoiceItemCreateParams = Stripe_.InvoiceItemCreateParams;
  export type InvoiceItemRetrieveParams = Stripe_.InvoiceItemRetrieveParams;
  export type InvoiceItemUpdateParams = Stripe_.InvoiceItemUpdateParams;
  export type InvoiceItemListParams = Stripe_.InvoiceItemListParams;
  export type InvoiceItemDeleteParams = Stripe_.InvoiceItemDeleteParams;
  export type InvoiceItemResource = Stripe_.InvoiceItemResource;
  export type InvoicePayment = Stripe_.InvoicePayment;
  export type InvoicePaymentRetrieveParams = Stripe_.InvoicePaymentRetrieveParams;
  export type InvoicePaymentListParams = Stripe_.InvoicePaymentListParams;
  export type InvoicePaymentResource = Stripe_.InvoicePaymentResource;
  export type InvoiceRenderingTemplate = Stripe_.InvoiceRenderingTemplate;
  export type InvoiceRenderingTemplateRetrieveParams = Stripe_.InvoiceRenderingTemplateRetrieveParams;
  export type InvoiceRenderingTemplateListParams = Stripe_.InvoiceRenderingTemplateListParams;
  export type InvoiceRenderingTemplateArchiveParams = Stripe_.InvoiceRenderingTemplateArchiveParams;
  export type InvoiceRenderingTemplateUnarchiveParams = Stripe_.InvoiceRenderingTemplateUnarchiveParams;
  export type InvoiceRenderingTemplateResource = Stripe_.InvoiceRenderingTemplateResource;
  export type Mandate = Stripe_.Mandate;
  export type MandateRetrieveParams = Stripe_.MandateRetrieveParams;
  export type MandateResource = Stripe_.MandateResource;
  export type PaymentAttemptRecord = Stripe_.PaymentAttemptRecord;
  export type PaymentAttemptRecordRetrieveParams = Stripe_.PaymentAttemptRecordRetrieveParams;
  export type PaymentAttemptRecordListParams = Stripe_.PaymentAttemptRecordListParams;
  export type PaymentAttemptRecordResource = Stripe_.PaymentAttemptRecordResource;
  export type PaymentIntent = Stripe_.PaymentIntent;
  export type PaymentIntentCreateParams = Stripe_.PaymentIntentCreateParams;
  export type PaymentIntentRetrieveParams = Stripe_.PaymentIntentRetrieveParams;
  export type PaymentIntentUpdateParams = Stripe_.PaymentIntentUpdateParams;
  export type PaymentIntentListParams = Stripe_.PaymentIntentListParams;
  export type PaymentIntentApplyCustomerBalanceParams = Stripe_.PaymentIntentApplyCustomerBalanceParams;
  export type PaymentIntentCancelParams = Stripe_.PaymentIntentCancelParams;
  export type PaymentIntentCaptureParams = Stripe_.PaymentIntentCaptureParams;
  export type PaymentIntentConfirmParams = Stripe_.PaymentIntentConfirmParams;
  export type PaymentIntentIncrementAuthorizationParams = Stripe_.PaymentIntentIncrementAuthorizationParams;
  export type PaymentIntentListAmountDetailsLineItemsParams = Stripe_.PaymentIntentListAmountDetailsLineItemsParams;
  export type PaymentIntentSearchParams = Stripe_.PaymentIntentSearchParams;
  export type PaymentIntentVerifyMicrodepositsParams = Stripe_.PaymentIntentVerifyMicrodepositsParams;
  export type PaymentIntentResource = Stripe_.PaymentIntentResource;
  export type PaymentLink = Stripe_.PaymentLink;
  export type PaymentLinkCreateParams = Stripe_.PaymentLinkCreateParams;
  export type PaymentLinkRetrieveParams = Stripe_.PaymentLinkRetrieveParams;
  export type PaymentLinkUpdateParams = Stripe_.PaymentLinkUpdateParams;
  export type PaymentLinkListParams = Stripe_.PaymentLinkListParams;
  export type PaymentLinkListLineItemsParams = Stripe_.PaymentLinkListLineItemsParams;
  export type PaymentLinkResource = Stripe_.PaymentLinkResource;
  export type PaymentMethod = Stripe_.PaymentMethod;
  export type PaymentMethodCreateParams = Stripe_.PaymentMethodCreateParams;
  export type PaymentMethodRetrieveParams = Stripe_.PaymentMethodRetrieveParams;
  export type PaymentMethodUpdateParams = Stripe_.PaymentMethodUpdateParams;
  export type PaymentMethodListParams = Stripe_.PaymentMethodListParams;
  export type PaymentMethodAttachParams = Stripe_.PaymentMethodAttachParams;
  export type PaymentMethodDetachParams = Stripe_.PaymentMethodDetachParams;
  export type PaymentMethodResource = Stripe_.PaymentMethodResource;
  export type PaymentMethodConfiguration = Stripe_.PaymentMethodConfiguration;
  export type PaymentMethodConfigurationCreateParams = Stripe_.PaymentMethodConfigurationCreateParams;
  export type PaymentMethodConfigurationRetrieveParams = Stripe_.PaymentMethodConfigurationRetrieveParams;
  export type PaymentMethodConfigurationUpdateParams = Stripe_.PaymentMethodConfigurationUpdateParams;
  export type PaymentMethodConfigurationListParams = Stripe_.PaymentMethodConfigurationListParams;
  export type PaymentMethodConfigurationResource = Stripe_.PaymentMethodConfigurationResource;
  export type PaymentMethodDomain = Stripe_.PaymentMethodDomain;
  export type PaymentMethodDomainCreateParams = Stripe_.PaymentMethodDomainCreateParams;
  export type PaymentMethodDomainRetrieveParams = Stripe_.PaymentMethodDomainRetrieveParams;
  export type PaymentMethodDomainUpdateParams = Stripe_.PaymentMethodDomainUpdateParams;
  export type PaymentMethodDomainListParams = Stripe_.PaymentMethodDomainListParams;
  export type PaymentMethodDomainValidateParams = Stripe_.PaymentMethodDomainValidateParams;
  export type PaymentMethodDomainResource = Stripe_.PaymentMethodDomainResource;
  export type PaymentRecord = Stripe_.PaymentRecord;
  export type PaymentRecordRetrieveParams = Stripe_.PaymentRecordRetrieveParams;
  export type PaymentRecordReportPaymentParams = Stripe_.PaymentRecordReportPaymentParams;
  export type PaymentRecordReportPaymentAttemptParams = Stripe_.PaymentRecordReportPaymentAttemptParams;
  export type PaymentRecordReportPaymentAttemptCanceledParams = Stripe_.PaymentRecordReportPaymentAttemptCanceledParams;
  export type PaymentRecordReportPaymentAttemptFailedParams = Stripe_.PaymentRecordReportPaymentAttemptFailedParams;
  export type PaymentRecordReportPaymentAttemptGuaranteedParams = Stripe_.PaymentRecordReportPaymentAttemptGuaranteedParams;
  export type PaymentRecordReportPaymentAttemptInformationalParams = Stripe_.PaymentRecordReportPaymentAttemptInformationalParams;
  export type PaymentRecordReportRefundParams = Stripe_.PaymentRecordReportRefundParams;
  export type PaymentRecordResource = Stripe_.PaymentRecordResource;
  export type Payout = Stripe_.Payout;
  export type PayoutCreateParams = Stripe_.PayoutCreateParams;
  export type PayoutRetrieveParams = Stripe_.PayoutRetrieveParams;
  export type PayoutUpdateParams = Stripe_.PayoutUpdateParams;
  export type PayoutListParams = Stripe_.PayoutListParams;
  export type PayoutCancelParams = Stripe_.PayoutCancelParams;
  export type PayoutReverseParams = Stripe_.PayoutReverseParams;
  export type PayoutResource = Stripe_.PayoutResource;
  export type Plan = Stripe_.Plan;
  export type DeletedPlan = Stripe_.DeletedPlan;
  export type PlanCreateParams = Stripe_.PlanCreateParams;
  export type PlanRetrieveParams = Stripe_.PlanRetrieveParams;
  export type PlanUpdateParams = Stripe_.PlanUpdateParams;
  export type PlanListParams = Stripe_.PlanListParams;
  export type PlanDeleteParams = Stripe_.PlanDeleteParams;
  export type PlanResource = Stripe_.PlanResource;
  export type Price = Stripe_.Price;
  export type DeletedPrice = Stripe_.DeletedPrice;
  export type PriceCreateParams = Stripe_.PriceCreateParams;
  export type PriceRetrieveParams = Stripe_.PriceRetrieveParams;
  export type PriceUpdateParams = Stripe_.PriceUpdateParams;
  export type PriceListParams = Stripe_.PriceListParams;
  export type PriceSearchParams = Stripe_.PriceSearchParams;
  export type PriceResource = Stripe_.PriceResource;
  export type Product = Stripe_.Product;
  export type DeletedProduct = Stripe_.DeletedProduct;
  export type ProductCreateParams = Stripe_.ProductCreateParams;
  export type ProductRetrieveParams = Stripe_.ProductRetrieveParams;
  export type ProductUpdateParams = Stripe_.ProductUpdateParams;
  export type ProductListParams = Stripe_.ProductListParams;
  export type ProductDeleteParams = Stripe_.ProductDeleteParams;
  export type ProductCreateFeatureParams = Stripe_.ProductCreateFeatureParams;
  export type ProductDeleteFeatureParams = Stripe_.ProductDeleteFeatureParams;
  export type ProductListFeaturesParams = Stripe_.ProductListFeaturesParams;
  export type ProductRetrieveFeatureParams = Stripe_.ProductRetrieveFeatureParams;
  export type ProductSearchParams = Stripe_.ProductSearchParams;
  export type ProductResource = Stripe_.ProductResource;
  export type PromotionCode = Stripe_.PromotionCode;
  export type PromotionCodeCreateParams = Stripe_.PromotionCodeCreateParams;
  export type PromotionCodeRetrieveParams = Stripe_.PromotionCodeRetrieveParams;
  export type PromotionCodeUpdateParams = Stripe_.PromotionCodeUpdateParams;
  export type PromotionCodeListParams = Stripe_.PromotionCodeListParams;
  export type PromotionCodeResource = Stripe_.PromotionCodeResource;
  export type Quote = Stripe_.Quote;
  export type QuoteCreateParams = Stripe_.QuoteCreateParams;
  export type QuoteRetrieveParams = Stripe_.QuoteRetrieveParams;
  export type QuoteUpdateParams = Stripe_.QuoteUpdateParams;
  export type QuoteListParams = Stripe_.QuoteListParams;
  export type QuoteAcceptParams = Stripe_.QuoteAcceptParams;
  export type QuoteCancelParams = Stripe_.QuoteCancelParams;
  export type QuoteFinalizeQuoteParams = Stripe_.QuoteFinalizeQuoteParams;
  export type QuoteListComputedUpfrontLineItemsParams = Stripe_.QuoteListComputedUpfrontLineItemsParams;
  export type QuoteListLineItemsParams = Stripe_.QuoteListLineItemsParams;
  export type QuotePdfParams = Stripe_.QuotePdfParams;
  export type QuoteResource = Stripe_.QuoteResource;
  export type Refund = Stripe_.Refund;
  export type RefundCreateParams = Stripe_.RefundCreateParams;
  export type RefundRetrieveParams = Stripe_.RefundRetrieveParams;
  export type RefundUpdateParams = Stripe_.RefundUpdateParams;
  export type RefundListParams = Stripe_.RefundListParams;
  export type RefundCancelParams = Stripe_.RefundCancelParams;
  export type RefundResource = Stripe_.RefundResource;
  export type Review = Stripe_.Review;
  export type ReviewRetrieveParams = Stripe_.ReviewRetrieveParams;
  export type ReviewListParams = Stripe_.ReviewListParams;
  export type ReviewApproveParams = Stripe_.ReviewApproveParams;
  export type ReviewResource = Stripe_.ReviewResource;
  export type SetupAttempt = Stripe_.SetupAttempt;
  export type SetupAttemptListParams = Stripe_.SetupAttemptListParams;
  export type SetupAttemptResource = Stripe_.SetupAttemptResource;
  export type SetupIntent = Stripe_.SetupIntent;
  export type SetupIntentCreateParams = Stripe_.SetupIntentCreateParams;
  export type SetupIntentRetrieveParams = Stripe_.SetupIntentRetrieveParams;
  export type SetupIntentUpdateParams = Stripe_.SetupIntentUpdateParams;
  export type SetupIntentListParams = Stripe_.SetupIntentListParams;
  export type SetupIntentCancelParams = Stripe_.SetupIntentCancelParams;
  export type SetupIntentConfirmParams = Stripe_.SetupIntentConfirmParams;
  export type SetupIntentVerifyMicrodepositsParams = Stripe_.SetupIntentVerifyMicrodepositsParams;
  export type SetupIntentResource = Stripe_.SetupIntentResource;
  export type ShippingRate = Stripe_.ShippingRate;
  export type ShippingRateCreateParams = Stripe_.ShippingRateCreateParams;
  export type ShippingRateRetrieveParams = Stripe_.ShippingRateRetrieveParams;
  export type ShippingRateUpdateParams = Stripe_.ShippingRateUpdateParams;
  export type ShippingRateListParams = Stripe_.ShippingRateListParams;
  export type ShippingRateResource = Stripe_.ShippingRateResource;
  export type Source = Stripe_.Source;
  export type SourceCreateParams = Stripe_.SourceCreateParams;
  export type SourceRetrieveParams = Stripe_.SourceRetrieveParams;
  export type SourceUpdateParams = Stripe_.SourceUpdateParams;
  export type SourceListSourceTransactionsParams = Stripe_.SourceListSourceTransactionsParams;
  export type SourceVerifyParams = Stripe_.SourceVerifyParams;
  export type SourceResource = Stripe_.SourceResource;
  export type Subscription = Stripe_.Subscription;
  export type SubscriptionCreateParams = Stripe_.SubscriptionCreateParams;
  export type SubscriptionRetrieveParams = Stripe_.SubscriptionRetrieveParams;
  export type SubscriptionUpdateParams = Stripe_.SubscriptionUpdateParams;
  export type SubscriptionListParams = Stripe_.SubscriptionListParams;
  export type SubscriptionCancelParams = Stripe_.SubscriptionCancelParams;
  export type SubscriptionDeleteDiscountParams = Stripe_.SubscriptionDeleteDiscountParams;
  export type SubscriptionMigrateParams = Stripe_.SubscriptionMigrateParams;
  export type SubscriptionResumeParams = Stripe_.SubscriptionResumeParams;
  export type SubscriptionSearchParams = Stripe_.SubscriptionSearchParams;
  export type SubscriptionResource = Stripe_.SubscriptionResource;
  export type SubscriptionItem = Stripe_.SubscriptionItem;
  export type DeletedSubscriptionItem = Stripe_.DeletedSubscriptionItem;
  export type SubscriptionItemCreateParams = Stripe_.SubscriptionItemCreateParams;
  export type SubscriptionItemRetrieveParams = Stripe_.SubscriptionItemRetrieveParams;
  export type SubscriptionItemUpdateParams = Stripe_.SubscriptionItemUpdateParams;
  export type SubscriptionItemListParams = Stripe_.SubscriptionItemListParams;
  export type SubscriptionItemDeleteParams = Stripe_.SubscriptionItemDeleteParams;
  export type SubscriptionItemResource = Stripe_.SubscriptionItemResource;
  export type SubscriptionSchedule = Stripe_.SubscriptionSchedule;
  export type SubscriptionScheduleCreateParams = Stripe_.SubscriptionScheduleCreateParams;
  export type SubscriptionScheduleRetrieveParams = Stripe_.SubscriptionScheduleRetrieveParams;
  export type SubscriptionScheduleUpdateParams = Stripe_.SubscriptionScheduleUpdateParams;
  export type SubscriptionScheduleListParams = Stripe_.SubscriptionScheduleListParams;
  export type SubscriptionScheduleCancelParams = Stripe_.SubscriptionScheduleCancelParams;
  export type SubscriptionScheduleReleaseParams = Stripe_.SubscriptionScheduleReleaseParams;
  export type SubscriptionScheduleResource = Stripe_.SubscriptionScheduleResource;
  export type TaxCode = Stripe_.TaxCode;
  export type TaxCodeRetrieveParams = Stripe_.TaxCodeRetrieveParams;
  export type TaxCodeListParams = Stripe_.TaxCodeListParams;
  export type TaxCodeResource = Stripe_.TaxCodeResource;
  export type TaxId = Stripe_.TaxId;
  export type DeletedTaxId = Stripe_.DeletedTaxId;
  export type TaxIdCreateParams = Stripe_.TaxIdCreateParams;
  export type TaxIdRetrieveParams = Stripe_.TaxIdRetrieveParams;
  export type TaxIdListParams = Stripe_.TaxIdListParams;
  export type TaxIdDeleteParams = Stripe_.TaxIdDeleteParams;
  export type TaxIdResource = Stripe_.TaxIdResource;
  export type TaxRate = Stripe_.TaxRate;
  export type TaxRateCreateParams = Stripe_.TaxRateCreateParams;
  export type TaxRateRetrieveParams = Stripe_.TaxRateRetrieveParams;
  export type TaxRateUpdateParams = Stripe_.TaxRateUpdateParams;
  export type TaxRateListParams = Stripe_.TaxRateListParams;
  export type TaxRateResource = Stripe_.TaxRateResource;
  export type Token = Stripe_.Token;
  export type TokenCreateParams = Stripe_.TokenCreateParams;
  export type TokenRetrieveParams = Stripe_.TokenRetrieveParams;
  export type TokenResource = Stripe_.TokenResource;
  export type Topup = Stripe_.Topup;
  export type TopupCreateParams = Stripe_.TopupCreateParams;
  export type TopupRetrieveParams = Stripe_.TopupRetrieveParams;
  export type TopupUpdateParams = Stripe_.TopupUpdateParams;
  export type TopupListParams = Stripe_.TopupListParams;
  export type TopupCancelParams = Stripe_.TopupCancelParams;
  export type TopupResource = Stripe_.TopupResource;
  export type Transfer = Stripe_.Transfer;
  export type TransferCreateParams = Stripe_.TransferCreateParams;
  export type TransferRetrieveParams = Stripe_.TransferRetrieveParams;
  export type TransferUpdateParams = Stripe_.TransferUpdateParams;
  export type TransferListParams = Stripe_.TransferListParams;
  export type TransferCreateReversalParams = Stripe_.TransferCreateReversalParams;
  export type TransferListReversalsParams = Stripe_.TransferListReversalsParams;
  export type TransferRetrieveReversalParams = Stripe_.TransferRetrieveReversalParams;
  export type TransferUpdateReversalParams = Stripe_.TransferUpdateReversalParams;
  export type TransferResource = Stripe_.TransferResource;
  export type WebhookEndpoint = Stripe_.WebhookEndpoint;
  export type DeletedWebhookEndpoint = Stripe_.DeletedWebhookEndpoint;
  export type WebhookEndpointCreateParams = Stripe_.WebhookEndpointCreateParams;
  export type WebhookEndpointRetrieveParams = Stripe_.WebhookEndpointRetrieveParams;
  export type WebhookEndpointUpdateParams = Stripe_.WebhookEndpointUpdateParams;
  export type WebhookEndpointListParams = Stripe_.WebhookEndpointListParams;
  export type WebhookEndpointDeleteParams = Stripe_.WebhookEndpointDeleteParams;
  export type WebhookEndpointResource = Stripe_.WebhookEndpointResource;
  export type Application = Stripe_.Application;
  export type DeletedApplication = Stripe_.DeletedApplication;
  export type BalanceTransactionSource = Stripe_.BalanceTransactionSource;
  export type BankAccount = Stripe_.BankAccount;
  export type DeletedBankAccount = Stripe_.DeletedBankAccount;
  export type Card = Stripe_.Card;
  export type DeletedCard = Stripe_.DeletedCard;
  export type ConnectCollectionTransfer = Stripe_.ConnectCollectionTransfer;
  export type Discount = Stripe_.Discount;
  export type DeletedDiscount = Stripe_.DeletedDiscount;
  export type FundingInstructions = Stripe_.FundingInstructions;
  export type LineItem = Stripe_.LineItem;
  export type ReserveTransaction = Stripe_.ReserveTransaction;
  export type SourceMandateNotification = Stripe_.SourceMandateNotification;
  export type SourceTransaction = Stripe_.SourceTransaction;
  export type TaxDeductedAtSource = Stripe_.TaxDeductedAtSource;
  export type Capability = Stripe_.Capability;
  export type ExternalAccount = Stripe_.ExternalAccount;
  export type DeletedExternalAccount = Stripe_.DeletedExternalAccount;
  export type LoginLink = Stripe_.LoginLink;
  export type Person = Stripe_.Person;
  export type DeletedPerson = Stripe_.DeletedPerson;
  export type FeeRefund = Stripe_.FeeRefund;
  export type CreditNoteLineItem = Stripe_.CreditNoteLineItem;
  export type CustomerBalanceTransaction = Stripe_.CustomerBalanceTransaction;
  export type CashBalance = Stripe_.CashBalance;
  export type CustomerCashBalanceTransaction = Stripe_.CustomerCashBalanceTransaction;
  export type CustomerSource = Stripe_.CustomerSource;
  export type DeletedCustomerSource = Stripe_.DeletedCustomerSource;
  export type InvoiceLineItem = Stripe_.InvoiceLineItem;
  export type PaymentIntentAmountDetailsLineItem = Stripe_.PaymentIntentAmountDetailsLineItem;
  export type ProductFeature = Stripe_.ProductFeature;
  export type DeletedProductFeature = Stripe_.DeletedProductFeature;
  export type TransferReversal = Stripe_.TransferReversal;
  export namespace AccountCreateParams {
    export type BusinessProfile = Stripe_.AccountCreateParams.BusinessProfile;
    export type BusinessType = Stripe_.AccountCreateParams.BusinessType;
    export type Capabilities = Stripe_.AccountCreateParams.Capabilities;
    export type Company = Stripe_.AccountCreateParams.Company;
    export type Controller = Stripe_.AccountCreateParams.Controller;
    export type Documents = Stripe_.AccountCreateParams.Documents;
    export type ExternalAccount = Stripe_.AccountCreateParams.ExternalAccount;
    export type Groups = Stripe_.AccountCreateParams.Groups;
    export type Individual = Stripe_.AccountCreateParams.Individual;
    export type Settings = Stripe_.AccountCreateParams.Settings;
    export type TosAcceptance = Stripe_.AccountCreateParams.TosAcceptance;
    export type Type = Stripe_.AccountCreateParams.Type;
    export namespace BusinessProfile {
      export type AnnualRevenue = Stripe_.AccountCreateParams.BusinessProfile.AnnualRevenue;
      export type MinorityOwnedBusinessDesignation = Stripe_.AccountCreateParams.BusinessProfile.MinorityOwnedBusinessDesignation;
      export type MonthlyEstimatedRevenue = Stripe_.AccountCreateParams.BusinessProfile.MonthlyEstimatedRevenue;
    }
    export namespace Capabilities {
      export type AcssDebitPayments = Stripe_.AccountCreateParams.Capabilities.AcssDebitPayments;
      export type AffirmPayments = Stripe_.AccountCreateParams.Capabilities.AffirmPayments;
      export type AfterpayClearpayPayments = Stripe_.AccountCreateParams.Capabilities.AfterpayClearpayPayments;
      export type AlmaPayments = Stripe_.AccountCreateParams.Capabilities.AlmaPayments;
      export type AmazonPayPayments = Stripe_.AccountCreateParams.Capabilities.AmazonPayPayments;
      export type AppDistribution = Stripe_.AccountCreateParams.Capabilities.AppDistribution;
      export type AuBecsDebitPayments = Stripe_.AccountCreateParams.Capabilities.AuBecsDebitPayments;
      export type BacsDebitPayments = Stripe_.AccountCreateParams.Capabilities.BacsDebitPayments;
      export type BancontactPayments = Stripe_.AccountCreateParams.Capabilities.BancontactPayments;
      export type BankTransferPayments = Stripe_.AccountCreateParams.Capabilities.BankTransferPayments;
      export type BilliePayments = Stripe_.AccountCreateParams.Capabilities.BilliePayments;
      export type BizumPayments = Stripe_.AccountCreateParams.Capabilities.BizumPayments;
      export type BlikPayments = Stripe_.AccountCreateParams.Capabilities.BlikPayments;
      export type BoletoPayments = Stripe_.AccountCreateParams.Capabilities.BoletoPayments;
      export type CardIssuing = Stripe_.AccountCreateParams.Capabilities.CardIssuing;
      export type CardPayments = Stripe_.AccountCreateParams.Capabilities.CardPayments;
      export type CartesBancairesPayments = Stripe_.AccountCreateParams.Capabilities.CartesBancairesPayments;
      export type CashappPayments = Stripe_.AccountCreateParams.Capabilities.CashappPayments;
      export type CryptoPayments = Stripe_.AccountCreateParams.Capabilities.CryptoPayments;
      export type EpsPayments = Stripe_.AccountCreateParams.Capabilities.EpsPayments;
      export type FpxPayments = Stripe_.AccountCreateParams.Capabilities.FpxPayments;
      export type GbBankTransferPayments = Stripe_.AccountCreateParams.Capabilities.GbBankTransferPayments;
      export type GiropayPayments = Stripe_.AccountCreateParams.Capabilities.GiropayPayments;
      export type GrabpayPayments = Stripe_.AccountCreateParams.Capabilities.GrabpayPayments;
      export type IdealPayments = Stripe_.AccountCreateParams.Capabilities.IdealPayments;
      export type IndiaInternationalPayments = Stripe_.AccountCreateParams.Capabilities.IndiaInternationalPayments;
      export type JcbPayments = Stripe_.AccountCreateParams.Capabilities.JcbPayments;
      export type JpBankTransferPayments = Stripe_.AccountCreateParams.Capabilities.JpBankTransferPayments;
      export type KakaoPayPayments = Stripe_.AccountCreateParams.Capabilities.KakaoPayPayments;
      export type KlarnaPayments = Stripe_.AccountCreateParams.Capabilities.KlarnaPayments;
      export type KonbiniPayments = Stripe_.AccountCreateParams.Capabilities.KonbiniPayments;
      export type KrCardPayments = Stripe_.AccountCreateParams.Capabilities.KrCardPayments;
      export type LegacyPayments = Stripe_.AccountCreateParams.Capabilities.LegacyPayments;
      export type LinkPayments = Stripe_.AccountCreateParams.Capabilities.LinkPayments;
      export type MbWayPayments = Stripe_.AccountCreateParams.Capabilities.MbWayPayments;
      export type MobilepayPayments = Stripe_.AccountCreateParams.Capabilities.MobilepayPayments;
      export type MultibancoPayments = Stripe_.AccountCreateParams.Capabilities.MultibancoPayments;
      export type MxBankTransferPayments = Stripe_.AccountCreateParams.Capabilities.MxBankTransferPayments;
      export type NaverPayPayments = Stripe_.AccountCreateParams.Capabilities.NaverPayPayments;
      export type NzBankAccountBecsDebitPayments = Stripe_.AccountCreateParams.Capabilities.NzBankAccountBecsDebitPayments;
      export type OxxoPayments = Stripe_.AccountCreateParams.Capabilities.OxxoPayments;
      export type P24Payments = Stripe_.AccountCreateParams.Capabilities.P24Payments;
      export type PayByBankPayments = Stripe_.AccountCreateParams.Capabilities.PayByBankPayments;
      export type PaycoPayments = Stripe_.AccountCreateParams.Capabilities.PaycoPayments;
      export type PaynowPayments = Stripe_.AccountCreateParams.Capabilities.PaynowPayments;
      export type PaytoPayments = Stripe_.AccountCreateParams.Capabilities.PaytoPayments;
      export type PixPayments = Stripe_.AccountCreateParams.Capabilities.PixPayments;
      export type PromptpayPayments = Stripe_.AccountCreateParams.Capabilities.PromptpayPayments;
      export type RevolutPayPayments = Stripe_.AccountCreateParams.Capabilities.RevolutPayPayments;
      export type SamsungPayPayments = Stripe_.AccountCreateParams.Capabilities.SamsungPayPayments;
      export type SatispayPayments = Stripe_.AccountCreateParams.Capabilities.SatispayPayments;
      export type ScalapayPayments = Stripe_.AccountCreateParams.Capabilities.ScalapayPayments;
      export type SepaBankTransferPayments = Stripe_.AccountCreateParams.Capabilities.SepaBankTransferPayments;
      export type SepaDebitPayments = Stripe_.AccountCreateParams.Capabilities.SepaDebitPayments;
      export type SofortPayments = Stripe_.AccountCreateParams.Capabilities.SofortPayments;
      export type SunbitPayments = Stripe_.AccountCreateParams.Capabilities.SunbitPayments;
      export type SwishPayments = Stripe_.AccountCreateParams.Capabilities.SwishPayments;
      export type TaxReportingUs1099K = Stripe_.AccountCreateParams.Capabilities.TaxReportingUs1099K;
      export type TaxReportingUs1099Misc = Stripe_.AccountCreateParams.Capabilities.TaxReportingUs1099Misc;
      export type Transfers = Stripe_.AccountCreateParams.Capabilities.Transfers;
      export type Treasury = Stripe_.AccountCreateParams.Capabilities.Treasury;
      export type TwintPayments = Stripe_.AccountCreateParams.Capabilities.TwintPayments;
      export type UpiPayments = Stripe_.AccountCreateParams.Capabilities.UpiPayments;
      export type UsBankAccountAchPayments = Stripe_.AccountCreateParams.Capabilities.UsBankAccountAchPayments;
      export type UsBankTransferPayments = Stripe_.AccountCreateParams.Capabilities.UsBankTransferPayments;
      export type ZipPayments = Stripe_.AccountCreateParams.Capabilities.ZipPayments;
    }
    export namespace Company {
      export type DirectorshipDeclaration = Stripe_.AccountCreateParams.Company.DirectorshipDeclaration;
      export type OwnershipDeclaration = Stripe_.AccountCreateParams.Company.OwnershipDeclaration;
      export type OwnershipExemptionReason = Stripe_.AccountCreateParams.Company.OwnershipExemptionReason;
      export type RegistrationDate = Stripe_.AccountCreateParams.Company.RegistrationDate;
      export type RepresentativeDeclaration = Stripe_.AccountCreateParams.Company.RepresentativeDeclaration;
      export type Structure = Stripe_.AccountCreateParams.Company.Structure;
      export type Verification = Stripe_.AccountCreateParams.Company.Verification;
      export namespace Verification {
        export type Document = Stripe_.AccountCreateParams.Company.Verification.Document;
      }
    }
    export namespace Controller {
      export type Fees = Stripe_.AccountCreateParams.Controller.Fees;
      export type Losses = Stripe_.AccountCreateParams.Controller.Losses;
      export type RequirementCollection = Stripe_.AccountCreateParams.Controller.RequirementCollection;
      export type StripeDashboard = Stripe_.AccountCreateParams.Controller.StripeDashboard;
      export namespace Fees {
        export type Payer = Stripe_.AccountCreateParams.Controller.Fees.Payer;
      }
      export namespace Losses {
        export type Payments = Stripe_.AccountCreateParams.Controller.Losses.Payments;
      }
      export namespace StripeDashboard {
        export type Type = Stripe_.AccountCreateParams.Controller.StripeDashboard.Type;
      }
    }
    export namespace Documents {
      export type BankAccountOwnershipVerification = Stripe_.AccountCreateParams.Documents.BankAccountOwnershipVerification;
      export type CompanyLicense = Stripe_.AccountCreateParams.Documents.CompanyLicense;
      export type CompanyMemorandumOfAssociation = Stripe_.AccountCreateParams.Documents.CompanyMemorandumOfAssociation;
      export type CompanyMinisterialDecree = Stripe_.AccountCreateParams.Documents.CompanyMinisterialDecree;
      export type CompanyRegistrationVerification = Stripe_.AccountCreateParams.Documents.CompanyRegistrationVerification;
      export type CompanyTaxIdVerification = Stripe_.AccountCreateParams.Documents.CompanyTaxIdVerification;
      export type ProofOfAddress = Stripe_.AccountCreateParams.Documents.ProofOfAddress;
      export type ProofOfRegistration = Stripe_.AccountCreateParams.Documents.ProofOfRegistration;
      export type ProofOfUltimateBeneficialOwnership = Stripe_.AccountCreateParams.Documents.ProofOfUltimateBeneficialOwnership;
      export namespace ProofOfRegistration {
        export type Signer = Stripe_.AccountCreateParams.Documents.ProofOfRegistration.Signer;
      }
      export namespace ProofOfUltimateBeneficialOwnership {
        export type Signer = Stripe_.AccountCreateParams.Documents.ProofOfUltimateBeneficialOwnership.Signer;
      }
    }
    export namespace Individual {
      export type Dob = Stripe_.AccountCreateParams.Individual.Dob;
      export type PoliticalExposure = Stripe_.AccountCreateParams.Individual.PoliticalExposure;
      export type Relationship = Stripe_.AccountCreateParams.Individual.Relationship;
      export type Verification = Stripe_.AccountCreateParams.Individual.Verification;
      export namespace Verification {
        export type AdditionalDocument = Stripe_.AccountCreateParams.Individual.Verification.AdditionalDocument;
        export type Document = Stripe_.AccountCreateParams.Individual.Verification.Document;
      }
    }
    export namespace Settings {
      export type BacsDebitPayments = Stripe_.AccountCreateParams.Settings.BacsDebitPayments;
      export type Branding = Stripe_.AccountCreateParams.Settings.Branding;
      export type CardIssuing = Stripe_.AccountCreateParams.Settings.CardIssuing;
      export type CardPayments = Stripe_.AccountCreateParams.Settings.CardPayments;
      export type Invoices = Stripe_.AccountCreateParams.Settings.Invoices;
      export type Payments = Stripe_.AccountCreateParams.Settings.Payments;
      export type Payouts = Stripe_.AccountCreateParams.Settings.Payouts;
      export type Treasury = Stripe_.AccountCreateParams.Settings.Treasury;
      export namespace CardIssuing {
        export type TosAcceptance = Stripe_.AccountCreateParams.Settings.CardIssuing.TosAcceptance;
      }
      export namespace CardPayments {
        export type DeclineOn = Stripe_.AccountCreateParams.Settings.CardPayments.DeclineOn;
      }
      export namespace Invoices {
        export type HostedPaymentMethodSave = Stripe_.AccountCreateParams.Settings.Invoices.HostedPaymentMethodSave;
      }
      export namespace Payouts {
        export type Schedule = Stripe_.AccountCreateParams.Settings.Payouts.Schedule;
        export namespace Schedule {
          export type Interval = Stripe_.AccountCreateParams.Settings.Payouts.Schedule.Interval;
          export type WeeklyAnchor = Stripe_.AccountCreateParams.Settings.Payouts.Schedule.WeeklyAnchor;
          export type WeeklyPayoutDay = Stripe_.AccountCreateParams.Settings.Payouts.Schedule.WeeklyPayoutDay;
        }
      }
      export namespace Treasury {
        export type TosAcceptance = Stripe_.AccountCreateParams.Settings.Treasury.TosAcceptance;
      }
    }
  }
  export namespace AccountUpdateParams {
    export type BusinessProfile = Stripe_.AccountUpdateParams.BusinessProfile;
    export type BusinessType = Stripe_.AccountUpdateParams.BusinessType;
    export type Capabilities = Stripe_.AccountUpdateParams.Capabilities;
    export type Company = Stripe_.AccountUpdateParams.Company;
    export type Documents = Stripe_.AccountUpdateParams.Documents;
    export type BankAccount = Stripe_.AccountUpdateParams.BankAccount;
    export type Card = Stripe_.AccountUpdateParams.Card;
    export type CardToken = Stripe_.AccountUpdateParams.CardToken;
    export type Groups = Stripe_.AccountUpdateParams.Groups;
    export type Individual = Stripe_.AccountUpdateParams.Individual;
    export type Settings = Stripe_.AccountUpdateParams.Settings;
    export type TosAcceptance = Stripe_.AccountUpdateParams.TosAcceptance;
    export namespace BankAccount {
      export type AccountHolderType = Stripe_.AccountUpdateParams.BankAccount.AccountHolderType;
    }
    export namespace BusinessProfile {
      export type AnnualRevenue = Stripe_.AccountUpdateParams.BusinessProfile.AnnualRevenue;
      export type MinorityOwnedBusinessDesignation = Stripe_.AccountUpdateParams.BusinessProfile.MinorityOwnedBusinessDesignation;
      export type MonthlyEstimatedRevenue = Stripe_.AccountUpdateParams.BusinessProfile.MonthlyEstimatedRevenue;
    }
    export namespace Capabilities {
      export type AcssDebitPayments = Stripe_.AccountUpdateParams.Capabilities.AcssDebitPayments;
      export type AffirmPayments = Stripe_.AccountUpdateParams.Capabilities.AffirmPayments;
      export type AfterpayClearpayPayments = Stripe_.AccountUpdateParams.Capabilities.AfterpayClearpayPayments;
      export type AlmaPayments = Stripe_.AccountUpdateParams.Capabilities.AlmaPayments;
      export type AmazonPayPayments = Stripe_.AccountUpdateParams.Capabilities.AmazonPayPayments;
      export type AppDistribution = Stripe_.AccountUpdateParams.Capabilities.AppDistribution;
      export type AuBecsDebitPayments = Stripe_.AccountUpdateParams.Capabilities.AuBecsDebitPayments;
      export type BacsDebitPayments = Stripe_.AccountUpdateParams.Capabilities.BacsDebitPayments;
      export type BancontactPayments = Stripe_.AccountUpdateParams.Capabilities.BancontactPayments;
      export type BankTransferPayments = Stripe_.AccountUpdateParams.Capabilities.BankTransferPayments;
      export type BilliePayments = Stripe_.AccountUpdateParams.Capabilities.BilliePayments;
      export type BizumPayments = Stripe_.AccountUpdateParams.Capabilities.BizumPayments;
      export type BlikPayments = Stripe_.AccountUpdateParams.Capabilities.BlikPayments;
      export type BoletoPayments = Stripe_.AccountUpdateParams.Capabilities.BoletoPayments;
      export type CardIssuing = Stripe_.AccountUpdateParams.Capabilities.CardIssuing;
      export type CardPayments = Stripe_.AccountUpdateParams.Capabilities.CardPayments;
      export type CartesBancairesPayments = Stripe_.AccountUpdateParams.Capabilities.CartesBancairesPayments;
      export type CashappPayments = Stripe_.AccountUpdateParams.Capabilities.CashappPayments;
      export type CryptoPayments = Stripe_.AccountUpdateParams.Capabilities.CryptoPayments;
      export type EpsPayments = Stripe_.AccountUpdateParams.Capabilities.EpsPayments;
      export type FpxPayments = Stripe_.AccountUpdateParams.Capabilities.FpxPayments;
      export type GbBankTransferPayments = Stripe_.AccountUpdateParams.Capabilities.GbBankTransferPayments;
      export type GiropayPayments = Stripe_.AccountUpdateParams.Capabilities.GiropayPayments;
      export type GrabpayPayments = Stripe_.AccountUpdateParams.Capabilities.GrabpayPayments;
      export type IdealPayments = Stripe_.AccountUpdateParams.Capabilities.IdealPayments;
      export type IndiaInternationalPayments = Stripe_.AccountUpdateParams.Capabilities.IndiaInternationalPayments;
      export type JcbPayments = Stripe_.AccountUpdateParams.Capabilities.JcbPayments;
      export type JpBankTransferPayments = Stripe_.AccountUpdateParams.Capabilities.JpBankTransferPayments;
      export type KakaoPayPayments = Stripe_.AccountUpdateParams.Capabilities.KakaoPayPayments;
      export type KlarnaPayments = Stripe_.AccountUpdateParams.Capabilities.KlarnaPayments;
      export type KonbiniPayments = Stripe_.AccountUpdateParams.Capabilities.KonbiniPayments;
      export type KrCardPayments = Stripe_.AccountUpdateParams.Capabilities.KrCardPayments;
      export type LegacyPayments = Stripe_.AccountUpdateParams.Capabilities.LegacyPayments;
      export type LinkPayments = Stripe_.AccountUpdateParams.Capabilities.LinkPayments;
      export type MbWayPayments = Stripe_.AccountUpdateParams.Capabilities.MbWayPayments;
      export type MobilepayPayments = Stripe_.AccountUpdateParams.Capabilities.MobilepayPayments;
      export type MultibancoPayments = Stripe_.AccountUpdateParams.Capabilities.MultibancoPayments;
      export type MxBankTransferPayments = Stripe_.AccountUpdateParams.Capabilities.MxBankTransferPayments;
      export type NaverPayPayments = Stripe_.AccountUpdateParams.Capabilities.NaverPayPayments;
      export type NzBankAccountBecsDebitPayments = Stripe_.AccountUpdateParams.Capabilities.NzBankAccountBecsDebitPayments;
      export type OxxoPayments = Stripe_.AccountUpdateParams.Capabilities.OxxoPayments;
      export type P24Payments = Stripe_.AccountUpdateParams.Capabilities.P24Payments;
      export type PayByBankPayments = Stripe_.AccountUpdateParams.Capabilities.PayByBankPayments;
      export type PaycoPayments = Stripe_.AccountUpdateParams.Capabilities.PaycoPayments;
      export type PaynowPayments = Stripe_.AccountUpdateParams.Capabilities.PaynowPayments;
      export type PaytoPayments = Stripe_.AccountUpdateParams.Capabilities.PaytoPayments;
      export type PixPayments = Stripe_.AccountUpdateParams.Capabilities.PixPayments;
      export type PromptpayPayments = Stripe_.AccountUpdateParams.Capabilities.PromptpayPayments;
      export type RevolutPayPayments = Stripe_.AccountUpdateParams.Capabilities.RevolutPayPayments;
      export type SamsungPayPayments = Stripe_.AccountUpdateParams.Capabilities.SamsungPayPayments;
      export type SatispayPayments = Stripe_.AccountUpdateParams.Capabilities.SatispayPayments;
      export type ScalapayPayments = Stripe_.AccountUpdateParams.Capabilities.ScalapayPayments;
      export type SepaBankTransferPayments = Stripe_.AccountUpdateParams.Capabilities.SepaBankTransferPayments;
      export type SepaDebitPayments = Stripe_.AccountUpdateParams.Capabilities.SepaDebitPayments;
      export type SofortPayments = Stripe_.AccountUpdateParams.Capabilities.SofortPayments;
      export type SunbitPayments = Stripe_.AccountUpdateParams.Capabilities.SunbitPayments;
      export type SwishPayments = Stripe_.AccountUpdateParams.Capabilities.SwishPayments;
      export type TaxReportingUs1099K = Stripe_.AccountUpdateParams.Capabilities.TaxReportingUs1099K;
      export type TaxReportingUs1099Misc = Stripe_.AccountUpdateParams.Capabilities.TaxReportingUs1099Misc;
      export type Transfers = Stripe_.AccountUpdateParams.Capabilities.Transfers;
      export type Treasury = Stripe_.AccountUpdateParams.Capabilities.Treasury;
      export type TwintPayments = Stripe_.AccountUpdateParams.Capabilities.TwintPayments;
      export type UpiPayments = Stripe_.AccountUpdateParams.Capabilities.UpiPayments;
      export type UsBankAccountAchPayments = Stripe_.AccountUpdateParams.Capabilities.UsBankAccountAchPayments;
      export type UsBankTransferPayments = Stripe_.AccountUpdateParams.Capabilities.UsBankTransferPayments;
      export type ZipPayments = Stripe_.AccountUpdateParams.Capabilities.ZipPayments;
    }
    export namespace Company {
      export type DirectorshipDeclaration = Stripe_.AccountUpdateParams.Company.DirectorshipDeclaration;
      export type OwnershipDeclaration = Stripe_.AccountUpdateParams.Company.OwnershipDeclaration;
      export type OwnershipExemptionReason = Stripe_.AccountUpdateParams.Company.OwnershipExemptionReason;
      export type RegistrationDate = Stripe_.AccountUpdateParams.Company.RegistrationDate;
      export type RepresentativeDeclaration = Stripe_.AccountUpdateParams.Company.RepresentativeDeclaration;
      export type Structure = Stripe_.AccountUpdateParams.Company.Structure;
      export type Verification = Stripe_.AccountUpdateParams.Company.Verification;
      export namespace Verification {
        export type Document = Stripe_.AccountUpdateParams.Company.Verification.Document;
      }
    }
    export namespace Documents {
      export type BankAccountOwnershipVerification = Stripe_.AccountUpdateParams.Documents.BankAccountOwnershipVerification;
      export type CompanyLicense = Stripe_.AccountUpdateParams.Documents.CompanyLicense;
      export type CompanyMemorandumOfAssociation = Stripe_.AccountUpdateParams.Documents.CompanyMemorandumOfAssociation;
      export type CompanyMinisterialDecree = Stripe_.AccountUpdateParams.Documents.CompanyMinisterialDecree;
      export type CompanyRegistrationVerification = Stripe_.AccountUpdateParams.Documents.CompanyRegistrationVerification;
      export type CompanyTaxIdVerification = Stripe_.AccountUpdateParams.Documents.CompanyTaxIdVerification;
      export type ProofOfAddress = Stripe_.AccountUpdateParams.Documents.ProofOfAddress;
      export type ProofOfRegistration = Stripe_.AccountUpdateParams.Documents.ProofOfRegistration;
      export type ProofOfUltimateBeneficialOwnership = Stripe_.AccountUpdateParams.Documents.ProofOfUltimateBeneficialOwnership;
      export namespace ProofOfRegistration {
        export type Signer = Stripe_.AccountUpdateParams.Documents.ProofOfRegistration.Signer;
      }
      export namespace ProofOfUltimateBeneficialOwnership {
        export type Signer = Stripe_.AccountUpdateParams.Documents.ProofOfUltimateBeneficialOwnership.Signer;
      }
    }
    export namespace Individual {
      export type Dob = Stripe_.AccountUpdateParams.Individual.Dob;
      export type PoliticalExposure = Stripe_.AccountUpdateParams.Individual.PoliticalExposure;
      export type Relationship = Stripe_.AccountUpdateParams.Individual.Relationship;
      export type Verification = Stripe_.AccountUpdateParams.Individual.Verification;
      export namespace Verification {
        export type AdditionalDocument = Stripe_.AccountUpdateParams.Individual.Verification.AdditionalDocument;
        export type Document = Stripe_.AccountUpdateParams.Individual.Verification.Document;
      }
    }
    export namespace Settings {
      export type BacsDebitPayments = Stripe_.AccountUpdateParams.Settings.BacsDebitPayments;
      export type Branding = Stripe_.AccountUpdateParams.Settings.Branding;
      export type CardIssuing = Stripe_.AccountUpdateParams.Settings.CardIssuing;
      export type CardPayments = Stripe_.AccountUpdateParams.Settings.CardPayments;
      export type Invoices = Stripe_.AccountUpdateParams.Settings.Invoices;
      export type Payments = Stripe_.AccountUpdateParams.Settings.Payments;
      export type Payouts = Stripe_.AccountUpdateParams.Settings.Payouts;
      export type Treasury = Stripe_.AccountUpdateParams.Settings.Treasury;
      export namespace CardIssuing {
        export type TosAcceptance = Stripe_.AccountUpdateParams.Settings.CardIssuing.TosAcceptance;
      }
      export namespace CardPayments {
        export type DeclineOn = Stripe_.AccountUpdateParams.Settings.CardPayments.DeclineOn;
      }
      export namespace Invoices {
        export type HostedPaymentMethodSave = Stripe_.AccountUpdateParams.Settings.Invoices.HostedPaymentMethodSave;
      }
      export namespace Payouts {
        export type Schedule = Stripe_.AccountUpdateParams.Settings.Payouts.Schedule;
        export namespace Schedule {
          export type Interval = Stripe_.AccountUpdateParams.Settings.Payouts.Schedule.Interval;
          export type WeeklyAnchor = Stripe_.AccountUpdateParams.Settings.Payouts.Schedule.WeeklyAnchor;
          export type WeeklyPayoutDay = Stripe_.AccountUpdateParams.Settings.Payouts.Schedule.WeeklyPayoutDay;
        }
      }
      export namespace Treasury {
        export type TosAcceptance = Stripe_.AccountUpdateParams.Settings.Treasury.TosAcceptance;
      }
    }
  }
  export namespace AccountCreateExternalAccountParams {
    export type Card = Stripe_.AccountCreateExternalAccountParams.Card;
    export type BankAccount = Stripe_.AccountCreateExternalAccountParams.BankAccount;
    export type CardToken = Stripe_.AccountCreateExternalAccountParams.CardToken;
    export namespace BankAccount {
      export type AccountHolderType = Stripe_.AccountCreateExternalAccountParams.BankAccount.AccountHolderType;
    }
  }
  export namespace AccountCreatePersonParams {
    export type AdditionalTosAcceptances = Stripe_.AccountCreatePersonParams.AdditionalTosAcceptances;
    export type Dob = Stripe_.AccountCreatePersonParams.Dob;
    export type Documents = Stripe_.AccountCreatePersonParams.Documents;
    export type PoliticalExposure = Stripe_.AccountCreatePersonParams.PoliticalExposure;
    export type Relationship = Stripe_.AccountCreatePersonParams.Relationship;
    export type UsCfpbData = Stripe_.AccountCreatePersonParams.UsCfpbData;
    export type Verification = Stripe_.AccountCreatePersonParams.Verification;
    export namespace AdditionalTosAcceptances {
      export type Account = Stripe_.AccountCreatePersonParams.AdditionalTosAcceptances.Account;
    }
    export namespace Documents {
      export type CompanyAuthorization = Stripe_.AccountCreatePersonParams.Documents.CompanyAuthorization;
      export type Passport = Stripe_.AccountCreatePersonParams.Documents.Passport;
      export type Visa = Stripe_.AccountCreatePersonParams.Documents.Visa;
    }
    export namespace UsCfpbData {
      export type EthnicityDetails = Stripe_.AccountCreatePersonParams.UsCfpbData.EthnicityDetails;
      export type RaceDetails = Stripe_.AccountCreatePersonParams.UsCfpbData.RaceDetails;
      export namespace EthnicityDetails {
        export type Ethnicity = Stripe_.AccountCreatePersonParams.UsCfpbData.EthnicityDetails.Ethnicity;
      }
      export namespace RaceDetails {
        export type Race = Stripe_.AccountCreatePersonParams.UsCfpbData.RaceDetails.Race;
      }
    }
    export namespace Verification {
      export type AdditionalDocument = Stripe_.AccountCreatePersonParams.Verification.AdditionalDocument;
      export type Document = Stripe_.AccountCreatePersonParams.Verification.Document;
    }
  }
  export namespace AccountListExternalAccountsParams {
    export type Object = Stripe_.AccountListExternalAccountsParams.Object;
  }
  export namespace AccountListPersonsParams {
    export type Relationship = Stripe_.AccountListPersonsParams.Relationship;
  }
  export namespace AccountUpdateExternalAccountParams {
    export type AccountHolderType = Stripe_.AccountUpdateExternalAccountParams.AccountHolderType;
    export type AccountType = Stripe_.AccountUpdateExternalAccountParams.AccountType;
    export type Documents = Stripe_.AccountUpdateExternalAccountParams.Documents;
    export namespace Documents {
      export type BankAccountOwnershipVerification = Stripe_.AccountUpdateExternalAccountParams.Documents.BankAccountOwnershipVerification;
    }
  }
  export namespace AccountUpdatePersonParams {
    export type AdditionalTosAcceptances = Stripe_.AccountUpdatePersonParams.AdditionalTosAcceptances;
    export type Dob = Stripe_.AccountUpdatePersonParams.Dob;
    export type Documents = Stripe_.AccountUpdatePersonParams.Documents;
    export type PoliticalExposure = Stripe_.AccountUpdatePersonParams.PoliticalExposure;
    export type Relationship = Stripe_.AccountUpdatePersonParams.Relationship;
    export type UsCfpbData = Stripe_.AccountUpdatePersonParams.UsCfpbData;
    export type Verification = Stripe_.AccountUpdatePersonParams.Verification;
    export namespace AdditionalTosAcceptances {
      export type Account = Stripe_.AccountUpdatePersonParams.AdditionalTosAcceptances.Account;
    }
    export namespace Documents {
      export type CompanyAuthorization = Stripe_.AccountUpdatePersonParams.Documents.CompanyAuthorization;
      export type Passport = Stripe_.AccountUpdatePersonParams.Documents.Passport;
      export type Visa = Stripe_.AccountUpdatePersonParams.Documents.Visa;
    }
    export namespace UsCfpbData {
      export type EthnicityDetails = Stripe_.AccountUpdatePersonParams.UsCfpbData.EthnicityDetails;
      export type RaceDetails = Stripe_.AccountUpdatePersonParams.UsCfpbData.RaceDetails;
      export namespace EthnicityDetails {
        export type Ethnicity = Stripe_.AccountUpdatePersonParams.UsCfpbData.EthnicityDetails.Ethnicity;
      }
      export namespace RaceDetails {
        export type Race = Stripe_.AccountUpdatePersonParams.UsCfpbData.RaceDetails.Race;
      }
    }
    export namespace Verification {
      export type AdditionalDocument = Stripe_.AccountUpdatePersonParams.Verification.AdditionalDocument;
      export type Document = Stripe_.AccountUpdatePersonParams.Verification.Document;
    }
  }
  export namespace Account {
    export type BusinessProfile = Stripe_.Account.BusinessProfile;
    export type BusinessType = Stripe_.Account.BusinessType;
    export type Capabilities = Stripe_.Account.Capabilities;
    export type Company = Stripe_.Account.Company;
    export type Controller = Stripe_.Account.Controller;
    export type FutureRequirements = Stripe_.Account.FutureRequirements;
    export type Groups = Stripe_.Account.Groups;
    export type Requirements = Stripe_.Account.Requirements;
    export type Settings = Stripe_.Account.Settings;
    export type TosAcceptance = Stripe_.Account.TosAcceptance;
    export type Type = Stripe_.Account.Type;
    export namespace BusinessProfile {
      export type AnnualRevenue = Stripe_.Account.BusinessProfile.AnnualRevenue;
      export type MinorityOwnedBusinessDesignation = Stripe_.Account.BusinessProfile.MinorityOwnedBusinessDesignation;
      export type MonthlyEstimatedRevenue = Stripe_.Account.BusinessProfile.MonthlyEstimatedRevenue;
    }
    export namespace Capabilities {
      export type AcssDebitPayments = Stripe_.Account.Capabilities.AcssDebitPayments;
      export type AffirmPayments = Stripe_.Account.Capabilities.AffirmPayments;
      export type AfterpayClearpayPayments = Stripe_.Account.Capabilities.AfterpayClearpayPayments;
      export type AlmaPayments = Stripe_.Account.Capabilities.AlmaPayments;
      export type AmazonPayPayments = Stripe_.Account.Capabilities.AmazonPayPayments;
      export type AppDistribution = Stripe_.Account.Capabilities.AppDistribution;
      export type AuBecsDebitPayments = Stripe_.Account.Capabilities.AuBecsDebitPayments;
      export type BacsDebitPayments = Stripe_.Account.Capabilities.BacsDebitPayments;
      export type BancontactPayments = Stripe_.Account.Capabilities.BancontactPayments;
      export type BankTransferPayments = Stripe_.Account.Capabilities.BankTransferPayments;
      export type BilliePayments = Stripe_.Account.Capabilities.BilliePayments;
      export type BizumPayments = Stripe_.Account.Capabilities.BizumPayments;
      export type BlikPayments = Stripe_.Account.Capabilities.BlikPayments;
      export type BoletoPayments = Stripe_.Account.Capabilities.BoletoPayments;
      export type CardIssuing = Stripe_.Account.Capabilities.CardIssuing;
      export type CardPayments = Stripe_.Account.Capabilities.CardPayments;
      export type CartesBancairesPayments = Stripe_.Account.Capabilities.CartesBancairesPayments;
      export type CashappPayments = Stripe_.Account.Capabilities.CashappPayments;
      export type CryptoPayments = Stripe_.Account.Capabilities.CryptoPayments;
      export type EpsPayments = Stripe_.Account.Capabilities.EpsPayments;
      export type FpxPayments = Stripe_.Account.Capabilities.FpxPayments;
      export type GbBankTransferPayments = Stripe_.Account.Capabilities.GbBankTransferPayments;
      export type GiropayPayments = Stripe_.Account.Capabilities.GiropayPayments;
      export type GrabpayPayments = Stripe_.Account.Capabilities.GrabpayPayments;
      export type IdealPayments = Stripe_.Account.Capabilities.IdealPayments;
      export type IndiaInternationalPayments = Stripe_.Account.Capabilities.IndiaInternationalPayments;
      export type JcbPayments = Stripe_.Account.Capabilities.JcbPayments;
      export type JpBankTransferPayments = Stripe_.Account.Capabilities.JpBankTransferPayments;
      export type KakaoPayPayments = Stripe_.Account.Capabilities.KakaoPayPayments;
      export type KlarnaPayments = Stripe_.Account.Capabilities.KlarnaPayments;
      export type KonbiniPayments = Stripe_.Account.Capabilities.KonbiniPayments;
      export type KrCardPayments = Stripe_.Account.Capabilities.KrCardPayments;
      export type LegacyPayments = Stripe_.Account.Capabilities.LegacyPayments;
      export type LinkPayments = Stripe_.Account.Capabilities.LinkPayments;
      export type MbWayPayments = Stripe_.Account.Capabilities.MbWayPayments;
      export type MobilepayPayments = Stripe_.Account.Capabilities.MobilepayPayments;
      export type MultibancoPayments = Stripe_.Account.Capabilities.MultibancoPayments;
      export type MxBankTransferPayments = Stripe_.Account.Capabilities.MxBankTransferPayments;
      export type NaverPayPayments = Stripe_.Account.Capabilities.NaverPayPayments;
      export type NzBankAccountBecsDebitPayments = Stripe_.Account.Capabilities.NzBankAccountBecsDebitPayments;
      export type OxxoPayments = Stripe_.Account.Capabilities.OxxoPayments;
      export type P24Payments = Stripe_.Account.Capabilities.P24Payments;
      export type PayByBankPayments = Stripe_.Account.Capabilities.PayByBankPayments;
      export type PaycoPayments = Stripe_.Account.Capabilities.PaycoPayments;
      export type PaynowPayments = Stripe_.Account.Capabilities.PaynowPayments;
      export type PaytoPayments = Stripe_.Account.Capabilities.PaytoPayments;
      export type PixPayments = Stripe_.Account.Capabilities.PixPayments;
      export type PromptpayPayments = Stripe_.Account.Capabilities.PromptpayPayments;
      export type RevolutPayPayments = Stripe_.Account.Capabilities.RevolutPayPayments;
      export type SamsungPayPayments = Stripe_.Account.Capabilities.SamsungPayPayments;
      export type SatispayPayments = Stripe_.Account.Capabilities.SatispayPayments;
      export type ScalapayPayments = Stripe_.Account.Capabilities.ScalapayPayments;
      export type SepaBankTransferPayments = Stripe_.Account.Capabilities.SepaBankTransferPayments;
      export type SepaDebitPayments = Stripe_.Account.Capabilities.SepaDebitPayments;
      export type SofortPayments = Stripe_.Account.Capabilities.SofortPayments;
      export type SunbitPayments = Stripe_.Account.Capabilities.SunbitPayments;
      export type SwishPayments = Stripe_.Account.Capabilities.SwishPayments;
      export type TaxReportingUs1099K = Stripe_.Account.Capabilities.TaxReportingUs1099K;
      export type TaxReportingUs1099Misc = Stripe_.Account.Capabilities.TaxReportingUs1099Misc;
      export type Transfers = Stripe_.Account.Capabilities.Transfers;
      export type Treasury = Stripe_.Account.Capabilities.Treasury;
      export type TwintPayments = Stripe_.Account.Capabilities.TwintPayments;
      export type UpiPayments = Stripe_.Account.Capabilities.UpiPayments;
      export type UsBankAccountAchPayments = Stripe_.Account.Capabilities.UsBankAccountAchPayments;
      export type UsBankTransferPayments = Stripe_.Account.Capabilities.UsBankTransferPayments;
      export type ZipPayments = Stripe_.Account.Capabilities.ZipPayments;
    }
    export namespace Company {
      export type AddressKana = Stripe_.Account.Company.AddressKana;
      export type AddressKanji = Stripe_.Account.Company.AddressKanji;
      export type DirectorshipDeclaration = Stripe_.Account.Company.DirectorshipDeclaration;
      export type OwnershipDeclaration = Stripe_.Account.Company.OwnershipDeclaration;
      export type OwnershipExemptionReason = Stripe_.Account.Company.OwnershipExemptionReason;
      export type RegistrationDate = Stripe_.Account.Company.RegistrationDate;
      export type RepresentativeDeclaration = Stripe_.Account.Company.RepresentativeDeclaration;
      export type Structure = Stripe_.Account.Company.Structure;
      export type Verification = Stripe_.Account.Company.Verification;
      export namespace Verification {
        export type Document = Stripe_.Account.Company.Verification.Document;
      }
    }
    export namespace Controller {
      export type Fees = Stripe_.Account.Controller.Fees;
      export type Losses = Stripe_.Account.Controller.Losses;
      export type RequirementCollection = Stripe_.Account.Controller.RequirementCollection;
      export type StripeDashboard = Stripe_.Account.Controller.StripeDashboard;
      export type Type = Stripe_.Account.Controller.Type;
      export namespace Fees {
        export type Payer = Stripe_.Account.Controller.Fees.Payer;
      }
      export namespace Losses {
        export type Payments = Stripe_.Account.Controller.Losses.Payments;
      }
      export namespace StripeDashboard {
        export type Type = Stripe_.Account.Controller.StripeDashboard.Type;
      }
    }
    export namespace FutureRequirements {
      export type Alternative = Stripe_.Account.FutureRequirements.Alternative;
      export type DisabledReason = Stripe_.Account.FutureRequirements.DisabledReason;
      export type Error = Stripe_.Account.FutureRequirements.Error;
      export namespace Error {
        export type Code = Stripe_.Account.FutureRequirements.Error.Code;
      }
    }
    export namespace Requirements {
      export type Alternative = Stripe_.Account.Requirements.Alternative;
      export type DisabledReason = Stripe_.Account.Requirements.DisabledReason;
      export type Error = Stripe_.Account.Requirements.Error;
      export namespace Error {
        export type Code = Stripe_.Account.Requirements.Error.Code;
      }
    }
    export namespace Settings {
      export type BacsDebitPayments = Stripe_.Account.Settings.BacsDebitPayments;
      export type Branding = Stripe_.Account.Settings.Branding;
      export type CardIssuing = Stripe_.Account.Settings.CardIssuing;
      export type CardPayments = Stripe_.Account.Settings.CardPayments;
      export type Dashboard = Stripe_.Account.Settings.Dashboard;
      export type Invoices = Stripe_.Account.Settings.Invoices;
      export type Payments = Stripe_.Account.Settings.Payments;
      export type Payouts = Stripe_.Account.Settings.Payouts;
      export type SepaDebitPayments = Stripe_.Account.Settings.SepaDebitPayments;
      export type Treasury = Stripe_.Account.Settings.Treasury;
      export namespace CardIssuing {
        export type TosAcceptance = Stripe_.Account.Settings.CardIssuing.TosAcceptance;
      }
      export namespace CardPayments {
        export type DeclineOn = Stripe_.Account.Settings.CardPayments.DeclineOn;
      }
      export namespace Invoices {
        export type HostedPaymentMethodSave = Stripe_.Account.Settings.Invoices.HostedPaymentMethodSave;
      }
      export namespace Payouts {
        export type Schedule = Stripe_.Account.Settings.Payouts.Schedule;
        export namespace Schedule {
          export type WeeklyPayoutDay = Stripe_.Account.Settings.Payouts.Schedule.WeeklyPayoutDay;
        }
      }
      export namespace Treasury {
        export type TosAcceptance = Stripe_.Account.Settings.Treasury.TosAcceptance;
      }
    }
  }
  export namespace AccountLinkCreateParams {
    export type Type = Stripe_.AccountLinkCreateParams.Type;
    export type Collect = Stripe_.AccountLinkCreateParams.Collect;
    export type CollectionOptions = Stripe_.AccountLinkCreateParams.CollectionOptions;
    export namespace CollectionOptions {
      export type Fields = Stripe_.AccountLinkCreateParams.CollectionOptions.Fields;
      export type FutureRequirements = Stripe_.AccountLinkCreateParams.CollectionOptions.FutureRequirements;
    }
  }
  export namespace AccountSessionCreateParams {
    export type Components = Stripe_.AccountSessionCreateParams.Components;
    export namespace Components {
      export type AccountManagement = Stripe_.AccountSessionCreateParams.Components.AccountManagement;
      export type AccountOnboarding = Stripe_.AccountSessionCreateParams.Components.AccountOnboarding;
      export type BalanceReport = Stripe_.AccountSessionCreateParams.Components.BalanceReport;
      export type Balances = Stripe_.AccountSessionCreateParams.Components.Balances;
      export type DisputesList = Stripe_.AccountSessionCreateParams.Components.DisputesList;
      export type Documents = Stripe_.AccountSessionCreateParams.Components.Documents;
      export type FinancialAccount = Stripe_.AccountSessionCreateParams.Components.FinancialAccount;
      export type FinancialAccountTransactions = Stripe_.AccountSessionCreateParams.Components.FinancialAccountTransactions;
      export type InstantPayoutsPromotion = Stripe_.AccountSessionCreateParams.Components.InstantPayoutsPromotion;
      export type IssuingCard = Stripe_.AccountSessionCreateParams.Components.IssuingCard;
      export type IssuingCardsList = Stripe_.AccountSessionCreateParams.Components.IssuingCardsList;
      export type NotificationBanner = Stripe_.AccountSessionCreateParams.Components.NotificationBanner;
      export type PaymentDetails = Stripe_.AccountSessionCreateParams.Components.PaymentDetails;
      export type PaymentDisputes = Stripe_.AccountSessionCreateParams.Components.PaymentDisputes;
      export type Payments = Stripe_.AccountSessionCreateParams.Components.Payments;
      export type PayoutDetails = Stripe_.AccountSessionCreateParams.Components.PayoutDetails;
      export type PayoutReconciliationReport = Stripe_.AccountSessionCreateParams.Components.PayoutReconciliationReport;
      export type Payouts = Stripe_.AccountSessionCreateParams.Components.Payouts;
      export type PayoutsList = Stripe_.AccountSessionCreateParams.Components.PayoutsList;
      export type TaxRegistrations = Stripe_.AccountSessionCreateParams.Components.TaxRegistrations;
      export type TaxSettings = Stripe_.AccountSessionCreateParams.Components.TaxSettings;
      export namespace AccountManagement {
        export type Features = Stripe_.AccountSessionCreateParams.Components.AccountManagement.Features;
      }
      export namespace AccountOnboarding {
        export type Features = Stripe_.AccountSessionCreateParams.Components.AccountOnboarding.Features;
      }
      export namespace BalanceReport {
        export type Features = Stripe_.AccountSessionCreateParams.Components.BalanceReport.Features;
      }
      export namespace Balances {
        export type Features = Stripe_.AccountSessionCreateParams.Components.Balances.Features;
      }
      export namespace DisputesList {
        export type Features = Stripe_.AccountSessionCreateParams.Components.DisputesList.Features;
      }
      export namespace Documents {
        export type Features = Stripe_.AccountSessionCreateParams.Components.Documents.Features;
      }
      export namespace FinancialAccount {
        export type Features = Stripe_.AccountSessionCreateParams.Components.FinancialAccount.Features;
      }
      export namespace FinancialAccountTransactions {
        export type Features = Stripe_.AccountSessionCreateParams.Components.FinancialAccountTransactions.Features;
      }
      export namespace InstantPayoutsPromotion {
        export type Features = Stripe_.AccountSessionCreateParams.Components.InstantPayoutsPromotion.Features;
      }
      export namespace IssuingCard {
        export type Features = Stripe_.AccountSessionCreateParams.Components.IssuingCard.Features;
      }
      export namespace IssuingCardsList {
        export type Features = Stripe_.AccountSessionCreateParams.Components.IssuingCardsList.Features;
      }
      export namespace NotificationBanner {
        export type Features = Stripe_.AccountSessionCreateParams.Components.NotificationBanner.Features;
      }
      export namespace PaymentDetails {
        export type Features = Stripe_.AccountSessionCreateParams.Components.PaymentDetails.Features;
      }
      export namespace PaymentDisputes {
        export type Features = Stripe_.AccountSessionCreateParams.Components.PaymentDisputes.Features;
      }
      export namespace Payments {
        export type Features = Stripe_.AccountSessionCreateParams.Components.Payments.Features;
      }
      export namespace PayoutDetails {
        export type Features = Stripe_.AccountSessionCreateParams.Components.PayoutDetails.Features;
      }
      export namespace PayoutReconciliationReport {
        export type Features = Stripe_.AccountSessionCreateParams.Components.PayoutReconciliationReport.Features;
      }
      export namespace Payouts {
        export type Features = Stripe_.AccountSessionCreateParams.Components.Payouts.Features;
      }
      export namespace PayoutsList {
        export type Features = Stripe_.AccountSessionCreateParams.Components.PayoutsList.Features;
      }
      export namespace TaxRegistrations {
        export type Features = Stripe_.AccountSessionCreateParams.Components.TaxRegistrations.Features;
      }
      export namespace TaxSettings {
        export type Features = Stripe_.AccountSessionCreateParams.Components.TaxSettings.Features;
      }
    }
  }
  export namespace AccountSession {
    export type Components = Stripe_.AccountSession.Components;
    export namespace Components {
      export type AccountManagement = Stripe_.AccountSession.Components.AccountManagement;
      export type AccountOnboarding = Stripe_.AccountSession.Components.AccountOnboarding;
      export type BalanceReport = Stripe_.AccountSession.Components.BalanceReport;
      export type Balances = Stripe_.AccountSession.Components.Balances;
      export type DisputesList = Stripe_.AccountSession.Components.DisputesList;
      export type Documents = Stripe_.AccountSession.Components.Documents;
      export type FinancialAccount = Stripe_.AccountSession.Components.FinancialAccount;
      export type FinancialAccountTransactions = Stripe_.AccountSession.Components.FinancialAccountTransactions;
      export type InstantPayoutsPromotion = Stripe_.AccountSession.Components.InstantPayoutsPromotion;
      export type IssuingCard = Stripe_.AccountSession.Components.IssuingCard;
      export type IssuingCardsList = Stripe_.AccountSession.Components.IssuingCardsList;
      export type NotificationBanner = Stripe_.AccountSession.Components.NotificationBanner;
      export type PaymentDetails = Stripe_.AccountSession.Components.PaymentDetails;
      export type PaymentDisputes = Stripe_.AccountSession.Components.PaymentDisputes;
      export type Payments = Stripe_.AccountSession.Components.Payments;
      export type PayoutDetails = Stripe_.AccountSession.Components.PayoutDetails;
      export type PayoutReconciliationReport = Stripe_.AccountSession.Components.PayoutReconciliationReport;
      export type Payouts = Stripe_.AccountSession.Components.Payouts;
      export type PayoutsList = Stripe_.AccountSession.Components.PayoutsList;
      export type TaxRegistrations = Stripe_.AccountSession.Components.TaxRegistrations;
      export type TaxSettings = Stripe_.AccountSession.Components.TaxSettings;
      export namespace AccountManagement {
        export type Features = Stripe_.AccountSession.Components.AccountManagement.Features;
      }
      export namespace AccountOnboarding {
        export type Features = Stripe_.AccountSession.Components.AccountOnboarding.Features;
      }
      export namespace BalanceReport {
        export type Features = Stripe_.AccountSession.Components.BalanceReport.Features;
      }
      export namespace Balances {
        export type Features = Stripe_.AccountSession.Components.Balances.Features;
      }
      export namespace DisputesList {
        export type Features = Stripe_.AccountSession.Components.DisputesList.Features;
      }
      export namespace Documents {
        export type Features = Stripe_.AccountSession.Components.Documents.Features;
      }
      export namespace FinancialAccount {
        export type Features = Stripe_.AccountSession.Components.FinancialAccount.Features;
      }
      export namespace FinancialAccountTransactions {
        export type Features = Stripe_.AccountSession.Components.FinancialAccountTransactions.Features;
      }
      export namespace InstantPayoutsPromotion {
        export type Features = Stripe_.AccountSession.Components.InstantPayoutsPromotion.Features;
      }
      export namespace IssuingCard {
        export type Features = Stripe_.AccountSession.Components.IssuingCard.Features;
      }
      export namespace IssuingCardsList {
        export type Features = Stripe_.AccountSession.Components.IssuingCardsList.Features;
      }
      export namespace NotificationBanner {
        export type Features = Stripe_.AccountSession.Components.NotificationBanner.Features;
      }
      export namespace PaymentDetails {
        export type Features = Stripe_.AccountSession.Components.PaymentDetails.Features;
      }
      export namespace PaymentDisputes {
        export type Features = Stripe_.AccountSession.Components.PaymentDisputes.Features;
      }
      export namespace Payments {
        export type Features = Stripe_.AccountSession.Components.Payments.Features;
      }
      export namespace PayoutDetails {
        export type Features = Stripe_.AccountSession.Components.PayoutDetails.Features;
      }
      export namespace PayoutReconciliationReport {
        export type Features = Stripe_.AccountSession.Components.PayoutReconciliationReport.Features;
      }
      export namespace Payouts {
        export type Features = Stripe_.AccountSession.Components.Payouts.Features;
      }
      export namespace PayoutsList {
        export type Features = Stripe_.AccountSession.Components.PayoutsList.Features;
      }
      export namespace TaxRegistrations {
        export type Features = Stripe_.AccountSession.Components.TaxRegistrations.Features;
      }
      export namespace TaxSettings {
        export type Features = Stripe_.AccountSession.Components.TaxSettings.Features;
      }
    }
  }
  export namespace ApplicationFee {
    export type FeeSource = Stripe_.ApplicationFee.FeeSource;
    export namespace FeeSource {
      export type Type = Stripe_.ApplicationFee.FeeSource.Type;
    }
  }
  export namespace Balance {
    export type Available = Stripe_.Balance.Available;
    export type ConnectReserved = Stripe_.Balance.ConnectReserved;
    export type InstantAvailable = Stripe_.Balance.InstantAvailable;
    export type Issuing = Stripe_.Balance.Issuing;
    export type Pending = Stripe_.Balance.Pending;
    export type RefundAndDisputePrefunding = Stripe_.Balance.RefundAndDisputePrefunding;
    export namespace Available {
      export type SourceTypes = Stripe_.Balance.Available.SourceTypes;
    }
    export namespace ConnectReserved {
      export type SourceTypes = Stripe_.Balance.ConnectReserved.SourceTypes;
    }
    export namespace InstantAvailable {
      export type NetAvailable = Stripe_.Balance.InstantAvailable.NetAvailable;
      export type SourceTypes = Stripe_.Balance.InstantAvailable.SourceTypes;
      export namespace NetAvailable {
        export type SourceTypes = Stripe_.Balance.InstantAvailable.NetAvailable.SourceTypes;
      }
    }
    export namespace Issuing {
      export type Available = Stripe_.Balance.Issuing.Available;
      export namespace Available {
        export type SourceTypes = Stripe_.Balance.Issuing.Available.SourceTypes;
      }
    }
    export namespace Pending {
      export type SourceTypes = Stripe_.Balance.Pending.SourceTypes;
    }
    export namespace RefundAndDisputePrefunding {
      export type Available = Stripe_.Balance.RefundAndDisputePrefunding.Available;
      export type Pending = Stripe_.Balance.RefundAndDisputePrefunding.Pending;
      export namespace Available {
        export type SourceTypes = Stripe_.Balance.RefundAndDisputePrefunding.Available.SourceTypes;
      }
      export namespace Pending {
        export type SourceTypes = Stripe_.Balance.RefundAndDisputePrefunding.Pending.SourceTypes;
      }
    }
  }
  export namespace BalanceSettingsUpdateParams {
    export type Payments = Stripe_.BalanceSettingsUpdateParams.Payments;
    export namespace Payments {
      export type Payouts = Stripe_.BalanceSettingsUpdateParams.Payments.Payouts;
      export type SettlementTiming = Stripe_.BalanceSettingsUpdateParams.Payments.SettlementTiming;
      export namespace Payouts {
        export type AutomaticTransferRulesByCurrency = Stripe_.BalanceSettingsUpdateParams.Payments.Payouts.AutomaticTransferRulesByCurrency;
        export type Schedule = Stripe_.BalanceSettingsUpdateParams.Payments.Payouts.Schedule;
        export namespace AutomaticTransferRulesByCurrency {
          export type Type = Stripe_.BalanceSettingsUpdateParams.Payments.Payouts.AutomaticTransferRulesByCurrency.Type;
        }
        export namespace Schedule {
          export type Interval = Stripe_.BalanceSettingsUpdateParams.Payments.Payouts.Schedule.Interval;
          export type WeeklyPayoutDay = Stripe_.BalanceSettingsUpdateParams.Payments.Payouts.Schedule.WeeklyPayoutDay;
        }
      }
      export namespace SettlementTiming {
        export type StartOfDay = Stripe_.BalanceSettingsUpdateParams.Payments.SettlementTiming.StartOfDay;
      }
    }
  }
  export namespace BalanceSettings {
    export type Payments = Stripe_.BalanceSettings.Payments;
    export namespace Payments {
      export type Payouts = Stripe_.BalanceSettings.Payments.Payouts;
      export type SettlementTiming = Stripe_.BalanceSettings.Payments.SettlementTiming;
      export namespace Payouts {
        export type AutomaticTransferRulesByCurrency = Stripe_.BalanceSettings.Payments.Payouts.AutomaticTransferRulesByCurrency;
        export type Schedule = Stripe_.BalanceSettings.Payments.Payouts.Schedule;
        export type Status = Stripe_.BalanceSettings.Payments.Payouts.Status;
        export namespace AutomaticTransferRulesByCurrency {
          export type Type = Stripe_.BalanceSettings.Payments.Payouts.AutomaticTransferRulesByCurrency.Type;
        }
        export namespace Schedule {
          export type Interval = Stripe_.BalanceSettings.Payments.Payouts.Schedule.Interval;
          export type WeeklyPayoutDay = Stripe_.BalanceSettings.Payments.Payouts.Schedule.WeeklyPayoutDay;
        }
      }
      export namespace SettlementTiming {
        export type StartOfDay = Stripe_.BalanceSettings.Payments.SettlementTiming.StartOfDay;
      }
    }
  }
  export namespace BalanceTransaction {
    export type BalanceType = Stripe_.BalanceTransaction.BalanceType;
    export type FeeDetail = Stripe_.BalanceTransaction.FeeDetail;
    export type Type = Stripe_.BalanceTransaction.Type;
  }
  export namespace ChargeCreateParams {
    export type Destination = Stripe_.ChargeCreateParams.Destination;
    export type RadarOptions = Stripe_.ChargeCreateParams.RadarOptions;
    export type Shipping = Stripe_.ChargeCreateParams.Shipping;
    export type TransferData = Stripe_.ChargeCreateParams.TransferData;
  }
  export namespace ChargeUpdateParams {
    export type FraudDetails = Stripe_.ChargeUpdateParams.FraudDetails;
    export type Shipping = Stripe_.ChargeUpdateParams.Shipping;
    export namespace FraudDetails {
      export type UserReport = Stripe_.ChargeUpdateParams.FraudDetails.UserReport;
    }
  }
  export namespace ChargeCaptureParams {
    export type TransferData = Stripe_.ChargeCaptureParams.TransferData;
  }
  export namespace Charge {
    export type BillingDetails = Stripe_.Charge.BillingDetails;
    export type FraudDetails = Stripe_.Charge.FraudDetails;
    export type Level3 = Stripe_.Charge.Level3;
    export type Outcome = Stripe_.Charge.Outcome;
    export type PaymentMethodDetails = Stripe_.Charge.PaymentMethodDetails;
    export type PresentmentDetails = Stripe_.Charge.PresentmentDetails;
    export type RadarOptions = Stripe_.Charge.RadarOptions;
    export type Shipping = Stripe_.Charge.Shipping;
    export type Status = Stripe_.Charge.Status;
    export type TransferData = Stripe_.Charge.TransferData;
    export namespace Level3 {
      export type LineItem = Stripe_.Charge.Level3.LineItem;
    }
    export namespace Outcome {
      export type AdviceCode = Stripe_.Charge.Outcome.AdviceCode;
      export type Rule = Stripe_.Charge.Outcome.Rule;
    }
    export namespace PaymentMethodDetails {
      export type AchCreditTransfer = Stripe_.Charge.PaymentMethodDetails.AchCreditTransfer;
      export type AchDebit = Stripe_.Charge.PaymentMethodDetails.AchDebit;
      export type AcssDebit = Stripe_.Charge.PaymentMethodDetails.AcssDebit;
      export type Affirm = Stripe_.Charge.PaymentMethodDetails.Affirm;
      export type AfterpayClearpay = Stripe_.Charge.PaymentMethodDetails.AfterpayClearpay;
      export type Alipay = Stripe_.Charge.PaymentMethodDetails.Alipay;
      export type Alma = Stripe_.Charge.PaymentMethodDetails.Alma;
      export type AmazonPay = Stripe_.Charge.PaymentMethodDetails.AmazonPay;
      export type AuBecsDebit = Stripe_.Charge.PaymentMethodDetails.AuBecsDebit;
      export type BacsDebit = Stripe_.Charge.PaymentMethodDetails.BacsDebit;
      export type Bancontact = Stripe_.Charge.PaymentMethodDetails.Bancontact;
      export type Billie = Stripe_.Charge.PaymentMethodDetails.Billie;
      export type Bizum = Stripe_.Charge.PaymentMethodDetails.Bizum;
      export type Blik = Stripe_.Charge.PaymentMethodDetails.Blik;
      export type Boleto = Stripe_.Charge.PaymentMethodDetails.Boleto;
      export type Card = Stripe_.Charge.PaymentMethodDetails.Card;
      export type CardPresent = Stripe_.Charge.PaymentMethodDetails.CardPresent;
      export type Cashapp = Stripe_.Charge.PaymentMethodDetails.Cashapp;
      export type Crypto = Stripe_.Charge.PaymentMethodDetails.Crypto;
      export type CustomerBalance = Stripe_.Charge.PaymentMethodDetails.CustomerBalance;
      export type Eps = Stripe_.Charge.PaymentMethodDetails.Eps;
      export type Fpx = Stripe_.Charge.PaymentMethodDetails.Fpx;
      export type Giropay = Stripe_.Charge.PaymentMethodDetails.Giropay;
      export type Grabpay = Stripe_.Charge.PaymentMethodDetails.Grabpay;
      export type Ideal = Stripe_.Charge.PaymentMethodDetails.Ideal;
      export type InteracPresent = Stripe_.Charge.PaymentMethodDetails.InteracPresent;
      export type KakaoPay = Stripe_.Charge.PaymentMethodDetails.KakaoPay;
      export type Klarna = Stripe_.Charge.PaymentMethodDetails.Klarna;
      export type Konbini = Stripe_.Charge.PaymentMethodDetails.Konbini;
      export type KrCard = Stripe_.Charge.PaymentMethodDetails.KrCard;
      export type Link = Stripe_.Charge.PaymentMethodDetails.Link;
      export type MbWay = Stripe_.Charge.PaymentMethodDetails.MbWay;
      export type Mobilepay = Stripe_.Charge.PaymentMethodDetails.Mobilepay;
      export type Multibanco = Stripe_.Charge.PaymentMethodDetails.Multibanco;
      export type NaverPay = Stripe_.Charge.PaymentMethodDetails.NaverPay;
      export type NzBankAccount = Stripe_.Charge.PaymentMethodDetails.NzBankAccount;
      export type Oxxo = Stripe_.Charge.PaymentMethodDetails.Oxxo;
      export type P24 = Stripe_.Charge.PaymentMethodDetails.P24;
      export type PayByBank = Stripe_.Charge.PaymentMethodDetails.PayByBank;
      export type Payco = Stripe_.Charge.PaymentMethodDetails.Payco;
      export type Paynow = Stripe_.Charge.PaymentMethodDetails.Paynow;
      export type Paypal = Stripe_.Charge.PaymentMethodDetails.Paypal;
      export type Payto = Stripe_.Charge.PaymentMethodDetails.Payto;
      export type Pix = Stripe_.Charge.PaymentMethodDetails.Pix;
      export type Promptpay = Stripe_.Charge.PaymentMethodDetails.Promptpay;
      export type RevolutPay = Stripe_.Charge.PaymentMethodDetails.RevolutPay;
      export type SamsungPay = Stripe_.Charge.PaymentMethodDetails.SamsungPay;
      export type Satispay = Stripe_.Charge.PaymentMethodDetails.Satispay;
      export type Scalapay = Stripe_.Charge.PaymentMethodDetails.Scalapay;
      export type SepaCreditTransfer = Stripe_.Charge.PaymentMethodDetails.SepaCreditTransfer;
      export type SepaDebit = Stripe_.Charge.PaymentMethodDetails.SepaDebit;
      export type Sofort = Stripe_.Charge.PaymentMethodDetails.Sofort;
      export type StripeAccount = Stripe_.Charge.PaymentMethodDetails.StripeAccount;
      export type Sunbit = Stripe_.Charge.PaymentMethodDetails.Sunbit;
      export type Swish = Stripe_.Charge.PaymentMethodDetails.Swish;
      export type Twint = Stripe_.Charge.PaymentMethodDetails.Twint;
      export type Upi = Stripe_.Charge.PaymentMethodDetails.Upi;
      export type UsBankAccount = Stripe_.Charge.PaymentMethodDetails.UsBankAccount;
      export type Wechat = Stripe_.Charge.PaymentMethodDetails.Wechat;
      export type WechatPay = Stripe_.Charge.PaymentMethodDetails.WechatPay;
      export type Zip = Stripe_.Charge.PaymentMethodDetails.Zip;
      export namespace AchDebit {
        export type AccountHolderType = Stripe_.Charge.PaymentMethodDetails.AchDebit.AccountHolderType;
      }
      export namespace Alma {
        export type Installments = Stripe_.Charge.PaymentMethodDetails.Alma.Installments;
      }
      export namespace AmazonPay {
        export type Funding = Stripe_.Charge.PaymentMethodDetails.AmazonPay.Funding;
        export namespace Funding {
          export type Card = Stripe_.Charge.PaymentMethodDetails.AmazonPay.Funding.Card;
        }
      }
      export namespace Bancontact {
        export type PreferredLanguage = Stripe_.Charge.PaymentMethodDetails.Bancontact.PreferredLanguage;
      }
      export namespace Card {
        export type Checks = Stripe_.Charge.PaymentMethodDetails.Card.Checks;
        export type ExtendedAuthorization = Stripe_.Charge.PaymentMethodDetails.Card.ExtendedAuthorization;
        export type IncrementalAuthorization = Stripe_.Charge.PaymentMethodDetails.Card.IncrementalAuthorization;
        export type Installments = Stripe_.Charge.PaymentMethodDetails.Card.Installments;
        export type Multicapture = Stripe_.Charge.PaymentMethodDetails.Card.Multicapture;
        export type NetworkToken = Stripe_.Charge.PaymentMethodDetails.Card.NetworkToken;
        export type Overcapture = Stripe_.Charge.PaymentMethodDetails.Card.Overcapture;
        export type RegulatedStatus = Stripe_.Charge.PaymentMethodDetails.Card.RegulatedStatus;
        export type ThreeDSecure = Stripe_.Charge.PaymentMethodDetails.Card.ThreeDSecure;
        export type Wallet = Stripe_.Charge.PaymentMethodDetails.Card.Wallet;
        export namespace ExtendedAuthorization {
          export type Status = Stripe_.Charge.PaymentMethodDetails.Card.ExtendedAuthorization.Status;
        }
        export namespace IncrementalAuthorization {
          export type Status = Stripe_.Charge.PaymentMethodDetails.Card.IncrementalAuthorization.Status;
        }
        export namespace Installments {
          export type Plan = Stripe_.Charge.PaymentMethodDetails.Card.Installments.Plan;
          export namespace Plan {
            export type Type = Stripe_.Charge.PaymentMethodDetails.Card.Installments.Plan.Type;
          }
        }
        export namespace Multicapture {
          export type Status = Stripe_.Charge.PaymentMethodDetails.Card.Multicapture.Status;
        }
        export namespace Overcapture {
          export type Status = Stripe_.Charge.PaymentMethodDetails.Card.Overcapture.Status;
        }
        export namespace ThreeDSecure {
          export type AuthenticationFlow = Stripe_.Charge.PaymentMethodDetails.Card.ThreeDSecure.AuthenticationFlow;
          export type ElectronicCommerceIndicator = Stripe_.Charge.PaymentMethodDetails.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type ExemptionIndicator = Stripe_.Charge.PaymentMethodDetails.Card.ThreeDSecure.ExemptionIndicator;
          export type Result = Stripe_.Charge.PaymentMethodDetails.Card.ThreeDSecure.Result;
          export type ResultReason = Stripe_.Charge.PaymentMethodDetails.Card.ThreeDSecure.ResultReason;
          export type Version = Stripe_.Charge.PaymentMethodDetails.Card.ThreeDSecure.Version;
        }
        export namespace Wallet {
          export type AmexExpressCheckout = Stripe_.Charge.PaymentMethodDetails.Card.Wallet.AmexExpressCheckout;
          export type ApplePay = Stripe_.Charge.PaymentMethodDetails.Card.Wallet.ApplePay;
          export type GooglePay = Stripe_.Charge.PaymentMethodDetails.Card.Wallet.GooglePay;
          export type Link = Stripe_.Charge.PaymentMethodDetails.Card.Wallet.Link;
          export type Masterpass = Stripe_.Charge.PaymentMethodDetails.Card.Wallet.Masterpass;
          export type SamsungPay = Stripe_.Charge.PaymentMethodDetails.Card.Wallet.SamsungPay;
          export type Type = Stripe_.Charge.PaymentMethodDetails.Card.Wallet.Type;
          export type VisaCheckout = Stripe_.Charge.PaymentMethodDetails.Card.Wallet.VisaCheckout;
        }
      }
      export namespace CardPresent {
        export type Offline = Stripe_.Charge.PaymentMethodDetails.CardPresent.Offline;
        export type ReadMethod = Stripe_.Charge.PaymentMethodDetails.CardPresent.ReadMethod;
        export type Receipt = Stripe_.Charge.PaymentMethodDetails.CardPresent.Receipt;
        export type Wallet = Stripe_.Charge.PaymentMethodDetails.CardPresent.Wallet;
        export namespace Receipt {
          export type AccountType = Stripe_.Charge.PaymentMethodDetails.CardPresent.Receipt.AccountType;
        }
        export namespace Wallet {
          export type Type = Stripe_.Charge.PaymentMethodDetails.CardPresent.Wallet.Type;
        }
      }
      export namespace Crypto {
        export type Network = Stripe_.Charge.PaymentMethodDetails.Crypto.Network;
        export type TokenCurrency = Stripe_.Charge.PaymentMethodDetails.Crypto.TokenCurrency;
      }
      export namespace Eps {
        export type Bank = Stripe_.Charge.PaymentMethodDetails.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe_.Charge.PaymentMethodDetails.Fpx.AccountHolderType;
        export type Bank = Stripe_.Charge.PaymentMethodDetails.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe_.Charge.PaymentMethodDetails.Ideal.Bank;
        export type Bic = Stripe_.Charge.PaymentMethodDetails.Ideal.Bic;
      }
      export namespace InteracPresent {
        export type ReadMethod = Stripe_.Charge.PaymentMethodDetails.InteracPresent.ReadMethod;
        export type Receipt = Stripe_.Charge.PaymentMethodDetails.InteracPresent.Receipt;
        export namespace Receipt {
          export type AccountType = Stripe_.Charge.PaymentMethodDetails.InteracPresent.Receipt.AccountType;
        }
      }
      export namespace Klarna {
        export type PayerDetails = Stripe_.Charge.PaymentMethodDetails.Klarna.PayerDetails;
        export namespace PayerDetails {
          export type Address = Stripe_.Charge.PaymentMethodDetails.Klarna.PayerDetails.Address;
        }
      }
      export namespace Konbini {
        export type Store = Stripe_.Charge.PaymentMethodDetails.Konbini.Store;
        export namespace Store {
          export type Chain = Stripe_.Charge.PaymentMethodDetails.Konbini.Store.Chain;
        }
      }
      export namespace KrCard {
        export type Brand = Stripe_.Charge.PaymentMethodDetails.KrCard.Brand;
      }
      export namespace Mobilepay {
        export type Card = Stripe_.Charge.PaymentMethodDetails.Mobilepay.Card;
      }
      export namespace P24 {
        export type Bank = Stripe_.Charge.PaymentMethodDetails.P24.Bank;
      }
      export namespace Paypal {
        export type SellerProtection = Stripe_.Charge.PaymentMethodDetails.Paypal.SellerProtection;
        export namespace SellerProtection {
          export type DisputeCategory = Stripe_.Charge.PaymentMethodDetails.Paypal.SellerProtection.DisputeCategory;
          export type Status = Stripe_.Charge.PaymentMethodDetails.Paypal.SellerProtection.Status;
        }
      }
      export namespace RevolutPay {
        export type Funding = Stripe_.Charge.PaymentMethodDetails.RevolutPay.Funding;
        export namespace Funding {
          export type Card = Stripe_.Charge.PaymentMethodDetails.RevolutPay.Funding.Card;
        }
      }
      export namespace Sofort {
        export type PreferredLanguage = Stripe_.Charge.PaymentMethodDetails.Sofort.PreferredLanguage;
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe_.Charge.PaymentMethodDetails.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe_.Charge.PaymentMethodDetails.UsBankAccount.AccountType;
      }
    }
  }
  export namespace ConfirmationToken {
    export type MandateData = Stripe_.ConfirmationToken.MandateData;
    export type PaymentMethodOptions = Stripe_.ConfirmationToken.PaymentMethodOptions;
    export type PaymentMethodPreview = Stripe_.ConfirmationToken.PaymentMethodPreview;
    export type SetupFutureUsage = Stripe_.ConfirmationToken.SetupFutureUsage;
    export type Shipping = Stripe_.ConfirmationToken.Shipping;
    export namespace MandateData {
      export type CustomerAcceptance = Stripe_.ConfirmationToken.MandateData.CustomerAcceptance;
      export namespace CustomerAcceptance {
        export type Online = Stripe_.ConfirmationToken.MandateData.CustomerAcceptance.Online;
      }
    }
    export namespace PaymentMethodOptions {
      export type Card = Stripe_.ConfirmationToken.PaymentMethodOptions.Card;
      export namespace Card {
        export type Installments = Stripe_.ConfirmationToken.PaymentMethodOptions.Card.Installments;
        export namespace Installments {
          export type Plan = Stripe_.ConfirmationToken.PaymentMethodOptions.Card.Installments.Plan;
          export namespace Plan {
            export type Type = Stripe_.ConfirmationToken.PaymentMethodOptions.Card.Installments.Plan.Type;
          }
        }
      }
    }
    export namespace PaymentMethodPreview {
      export type AcssDebit = Stripe_.ConfirmationToken.PaymentMethodPreview.AcssDebit;
      export type Affirm = Stripe_.ConfirmationToken.PaymentMethodPreview.Affirm;
      export type AfterpayClearpay = Stripe_.ConfirmationToken.PaymentMethodPreview.AfterpayClearpay;
      export type Alipay = Stripe_.ConfirmationToken.PaymentMethodPreview.Alipay;
      export type AllowRedisplay = Stripe_.ConfirmationToken.PaymentMethodPreview.AllowRedisplay;
      export type Alma = Stripe_.ConfirmationToken.PaymentMethodPreview.Alma;
      export type AmazonPay = Stripe_.ConfirmationToken.PaymentMethodPreview.AmazonPay;
      export type AuBecsDebit = Stripe_.ConfirmationToken.PaymentMethodPreview.AuBecsDebit;
      export type BacsDebit = Stripe_.ConfirmationToken.PaymentMethodPreview.BacsDebit;
      export type Bancontact = Stripe_.ConfirmationToken.PaymentMethodPreview.Bancontact;
      export type Billie = Stripe_.ConfirmationToken.PaymentMethodPreview.Billie;
      export type BillingDetails = Stripe_.ConfirmationToken.PaymentMethodPreview.BillingDetails;
      export type Bizum = Stripe_.ConfirmationToken.PaymentMethodPreview.Bizum;
      export type Blik = Stripe_.ConfirmationToken.PaymentMethodPreview.Blik;
      export type Boleto = Stripe_.ConfirmationToken.PaymentMethodPreview.Boleto;
      export type Card = Stripe_.ConfirmationToken.PaymentMethodPreview.Card;
      export type CardPresent = Stripe_.ConfirmationToken.PaymentMethodPreview.CardPresent;
      export type Cashapp = Stripe_.ConfirmationToken.PaymentMethodPreview.Cashapp;
      export type Crypto = Stripe_.ConfirmationToken.PaymentMethodPreview.Crypto;
      export type CustomerBalance = Stripe_.ConfirmationToken.PaymentMethodPreview.CustomerBalance;
      export type Eps = Stripe_.ConfirmationToken.PaymentMethodPreview.Eps;
      export type Fpx = Stripe_.ConfirmationToken.PaymentMethodPreview.Fpx;
      export type Giropay = Stripe_.ConfirmationToken.PaymentMethodPreview.Giropay;
      export type Grabpay = Stripe_.ConfirmationToken.PaymentMethodPreview.Grabpay;
      export type Ideal = Stripe_.ConfirmationToken.PaymentMethodPreview.Ideal;
      export type InteracPresent = Stripe_.ConfirmationToken.PaymentMethodPreview.InteracPresent;
      export type KakaoPay = Stripe_.ConfirmationToken.PaymentMethodPreview.KakaoPay;
      export type Klarna = Stripe_.ConfirmationToken.PaymentMethodPreview.Klarna;
      export type Konbini = Stripe_.ConfirmationToken.PaymentMethodPreview.Konbini;
      export type KrCard = Stripe_.ConfirmationToken.PaymentMethodPreview.KrCard;
      export type Link = Stripe_.ConfirmationToken.PaymentMethodPreview.Link;
      export type MbWay = Stripe_.ConfirmationToken.PaymentMethodPreview.MbWay;
      export type Mobilepay = Stripe_.ConfirmationToken.PaymentMethodPreview.Mobilepay;
      export type Multibanco = Stripe_.ConfirmationToken.PaymentMethodPreview.Multibanco;
      export type NaverPay = Stripe_.ConfirmationToken.PaymentMethodPreview.NaverPay;
      export type NzBankAccount = Stripe_.ConfirmationToken.PaymentMethodPreview.NzBankAccount;
      export type Oxxo = Stripe_.ConfirmationToken.PaymentMethodPreview.Oxxo;
      export type P24 = Stripe_.ConfirmationToken.PaymentMethodPreview.P24;
      export type PayByBank = Stripe_.ConfirmationToken.PaymentMethodPreview.PayByBank;
      export type Payco = Stripe_.ConfirmationToken.PaymentMethodPreview.Payco;
      export type Paynow = Stripe_.ConfirmationToken.PaymentMethodPreview.Paynow;
      export type Paypal = Stripe_.ConfirmationToken.PaymentMethodPreview.Paypal;
      export type Payto = Stripe_.ConfirmationToken.PaymentMethodPreview.Payto;
      export type Pix = Stripe_.ConfirmationToken.PaymentMethodPreview.Pix;
      export type Promptpay = Stripe_.ConfirmationToken.PaymentMethodPreview.Promptpay;
      export type RevolutPay = Stripe_.ConfirmationToken.PaymentMethodPreview.RevolutPay;
      export type SamsungPay = Stripe_.ConfirmationToken.PaymentMethodPreview.SamsungPay;
      export type Satispay = Stripe_.ConfirmationToken.PaymentMethodPreview.Satispay;
      export type Scalapay = Stripe_.ConfirmationToken.PaymentMethodPreview.Scalapay;
      export type SepaDebit = Stripe_.ConfirmationToken.PaymentMethodPreview.SepaDebit;
      export type Sofort = Stripe_.ConfirmationToken.PaymentMethodPreview.Sofort;
      export type Sunbit = Stripe_.ConfirmationToken.PaymentMethodPreview.Sunbit;
      export type Swish = Stripe_.ConfirmationToken.PaymentMethodPreview.Swish;
      export type Twint = Stripe_.ConfirmationToken.PaymentMethodPreview.Twint;
      export type Type = Stripe_.ConfirmationToken.PaymentMethodPreview.Type;
      export type Upi = Stripe_.ConfirmationToken.PaymentMethodPreview.Upi;
      export type UsBankAccount = Stripe_.ConfirmationToken.PaymentMethodPreview.UsBankAccount;
      export type WechatPay = Stripe_.ConfirmationToken.PaymentMethodPreview.WechatPay;
      export type Zip = Stripe_.ConfirmationToken.PaymentMethodPreview.Zip;
      export namespace Card {
        export type Checks = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.Checks;
        export type GeneratedFrom = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom;
        export type Networks = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.Networks;
        export type RegulatedStatus = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.RegulatedStatus;
        export type ThreeDSecureUsage = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.ThreeDSecureUsage;
        export type Wallet = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.Wallet;
        export namespace GeneratedFrom {
          export type PaymentMethodDetails = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom.PaymentMethodDetails;
          export namespace PaymentMethodDetails {
            export type CardPresent = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom.PaymentMethodDetails.CardPresent;
            export namespace CardPresent {
              export type Offline = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Offline;
              export type ReadMethod = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.ReadMethod;
              export type Receipt = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Receipt;
              export type Wallet = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Wallet;
              export namespace Receipt {
                export type AccountType = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Receipt.AccountType;
              }
              export namespace Wallet {
                export type Type = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Wallet.Type;
              }
            }
          }
        }
        export namespace Wallet {
          export type AmexExpressCheckout = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.Wallet.AmexExpressCheckout;
          export type ApplePay = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.Wallet.ApplePay;
          export type GooglePay = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.Wallet.GooglePay;
          export type Link = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.Wallet.Link;
          export type Masterpass = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.Wallet.Masterpass;
          export type SamsungPay = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.Wallet.SamsungPay;
          export type Type = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.Wallet.Type;
          export type VisaCheckout = Stripe_.ConfirmationToken.PaymentMethodPreview.Card.Wallet.VisaCheckout;
        }
      }
      export namespace CardPresent {
        export type Networks = Stripe_.ConfirmationToken.PaymentMethodPreview.CardPresent.Networks;
        export type Offline = Stripe_.ConfirmationToken.PaymentMethodPreview.CardPresent.Offline;
        export type ReadMethod = Stripe_.ConfirmationToken.PaymentMethodPreview.CardPresent.ReadMethod;
        export type Wallet = Stripe_.ConfirmationToken.PaymentMethodPreview.CardPresent.Wallet;
        export namespace Wallet {
          export type Type = Stripe_.ConfirmationToken.PaymentMethodPreview.CardPresent.Wallet.Type;
        }
      }
      export namespace Eps {
        export type Bank = Stripe_.ConfirmationToken.PaymentMethodPreview.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe_.ConfirmationToken.PaymentMethodPreview.Fpx.AccountHolderType;
        export type Bank = Stripe_.ConfirmationToken.PaymentMethodPreview.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe_.ConfirmationToken.PaymentMethodPreview.Ideal.Bank;
        export type Bic = Stripe_.ConfirmationToken.PaymentMethodPreview.Ideal.Bic;
      }
      export namespace InteracPresent {
        export type Networks = Stripe_.ConfirmationToken.PaymentMethodPreview.InteracPresent.Networks;
        export type ReadMethod = Stripe_.ConfirmationToken.PaymentMethodPreview.InteracPresent.ReadMethod;
      }
      export namespace Klarna {
        export type Dob = Stripe_.ConfirmationToken.PaymentMethodPreview.Klarna.Dob;
      }
      export namespace KrCard {
        export type Brand = Stripe_.ConfirmationToken.PaymentMethodPreview.KrCard.Brand;
      }
      export namespace NaverPay {
        export type Funding = Stripe_.ConfirmationToken.PaymentMethodPreview.NaverPay.Funding;
      }
      export namespace P24 {
        export type Bank = Stripe_.ConfirmationToken.PaymentMethodPreview.P24.Bank;
      }
      export namespace SepaDebit {
        export type GeneratedFrom = Stripe_.ConfirmationToken.PaymentMethodPreview.SepaDebit.GeneratedFrom;
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe_.ConfirmationToken.PaymentMethodPreview.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe_.ConfirmationToken.PaymentMethodPreview.UsBankAccount.AccountType;
        export type Networks = Stripe_.ConfirmationToken.PaymentMethodPreview.UsBankAccount.Networks;
        export type StatusDetails = Stripe_.ConfirmationToken.PaymentMethodPreview.UsBankAccount.StatusDetails;
        export namespace Networks {
          export type Supported = Stripe_.ConfirmationToken.PaymentMethodPreview.UsBankAccount.Networks.Supported;
        }
        export namespace StatusDetails {
          export type Blocked = Stripe_.ConfirmationToken.PaymentMethodPreview.UsBankAccount.StatusDetails.Blocked;
          export namespace Blocked {
            export type NetworkCode = Stripe_.ConfirmationToken.PaymentMethodPreview.UsBankAccount.StatusDetails.Blocked.NetworkCode;
            export type Reason = Stripe_.ConfirmationToken.PaymentMethodPreview.UsBankAccount.StatusDetails.Blocked.Reason;
          }
        }
      }
    }
  }
  export namespace CountrySpec {
    export type VerificationFields = Stripe_.CountrySpec.VerificationFields;
    export namespace VerificationFields {
      export type Company = Stripe_.CountrySpec.VerificationFields.Company;
      export type Individual = Stripe_.CountrySpec.VerificationFields.Individual;
    }
  }
  export namespace CouponCreateParams {
    export type AppliesTo = Stripe_.CouponCreateParams.AppliesTo;
    export type CurrencyOptions = Stripe_.CouponCreateParams.CurrencyOptions;
    export type Duration = Stripe_.CouponCreateParams.Duration;
  }
  export namespace CouponUpdateParams {
    export type CurrencyOptions = Stripe_.CouponUpdateParams.CurrencyOptions;
  }
  export namespace Coupon {
    export type AppliesTo = Stripe_.Coupon.AppliesTo;
    export type CurrencyOptions = Stripe_.Coupon.CurrencyOptions;
    export type Duration = Stripe_.Coupon.Duration;
  }
  export namespace CreditNoteCreateParams {
    export type EmailType = Stripe_.CreditNoteCreateParams.EmailType;
    export type Line = Stripe_.CreditNoteCreateParams.Line;
    export type Reason = Stripe_.CreditNoteCreateParams.Reason;
    export type Refund = Stripe_.CreditNoteCreateParams.Refund;
    export type ShippingCost = Stripe_.CreditNoteCreateParams.ShippingCost;
    export namespace Line {
      export type TaxAmount = Stripe_.CreditNoteCreateParams.Line.TaxAmount;
      export type Type = Stripe_.CreditNoteCreateParams.Line.Type;
    }
    export namespace Refund {
      export type PaymentRecordRefund = Stripe_.CreditNoteCreateParams.Refund.PaymentRecordRefund;
      export type Type = Stripe_.CreditNoteCreateParams.Refund.Type;
    }
  }
  export namespace CreditNoteListPreviewLineItemsParams {
    export type EmailType = Stripe_.CreditNoteListPreviewLineItemsParams.EmailType;
    export type Line = Stripe_.CreditNoteListPreviewLineItemsParams.Line;
    export type Reason = Stripe_.CreditNoteListPreviewLineItemsParams.Reason;
    export type Refund = Stripe_.CreditNoteListPreviewLineItemsParams.Refund;
    export type ShippingCost = Stripe_.CreditNoteListPreviewLineItemsParams.ShippingCost;
    export namespace Line {
      export type TaxAmount = Stripe_.CreditNoteListPreviewLineItemsParams.Line.TaxAmount;
      export type Type = Stripe_.CreditNoteListPreviewLineItemsParams.Line.Type;
    }
    export namespace Refund {
      export type PaymentRecordRefund = Stripe_.CreditNoteListPreviewLineItemsParams.Refund.PaymentRecordRefund;
      export type Type = Stripe_.CreditNoteListPreviewLineItemsParams.Refund.Type;
    }
  }
  export namespace CreditNotePreviewParams {
    export type EmailType = Stripe_.CreditNotePreviewParams.EmailType;
    export type Line = Stripe_.CreditNotePreviewParams.Line;
    export type Reason = Stripe_.CreditNotePreviewParams.Reason;
    export type Refund = Stripe_.CreditNotePreviewParams.Refund;
    export type ShippingCost = Stripe_.CreditNotePreviewParams.ShippingCost;
    export namespace Line {
      export type TaxAmount = Stripe_.CreditNotePreviewParams.Line.TaxAmount;
      export type Type = Stripe_.CreditNotePreviewParams.Line.Type;
    }
    export namespace Refund {
      export type PaymentRecordRefund = Stripe_.CreditNotePreviewParams.Refund.PaymentRecordRefund;
      export type Type = Stripe_.CreditNotePreviewParams.Refund.Type;
    }
  }
  export namespace CreditNote {
    export type DiscountAmount = Stripe_.CreditNote.DiscountAmount;
    export type PretaxCreditAmount = Stripe_.CreditNote.PretaxCreditAmount;
    export type Reason = Stripe_.CreditNote.Reason;
    export type Refund = Stripe_.CreditNote.Refund;
    export type ShippingCost = Stripe_.CreditNote.ShippingCost;
    export type Status = Stripe_.CreditNote.Status;
    export type TotalTax = Stripe_.CreditNote.TotalTax;
    export type Type = Stripe_.CreditNote.Type;
    export namespace PretaxCreditAmount {
      export type Type = Stripe_.CreditNote.PretaxCreditAmount.Type;
    }
    export namespace Refund {
      export type PaymentRecordRefund = Stripe_.CreditNote.Refund.PaymentRecordRefund;
      export type Type = Stripe_.CreditNote.Refund.Type;
    }
    export namespace ShippingCost {
      export type Tax = Stripe_.CreditNote.ShippingCost.Tax;
      export namespace Tax {
        export type TaxabilityReason = Stripe_.CreditNote.ShippingCost.Tax.TaxabilityReason;
      }
    }
    export namespace TotalTax {
      export type TaxBehavior = Stripe_.CreditNote.TotalTax.TaxBehavior;
      export type TaxRateDetails = Stripe_.CreditNote.TotalTax.TaxRateDetails;
      export type TaxabilityReason = Stripe_.CreditNote.TotalTax.TaxabilityReason;
    }
  }
  export namespace CustomerCreateParams {
    export type CashBalance = Stripe_.CustomerCreateParams.CashBalance;
    export type InvoiceSettings = Stripe_.CustomerCreateParams.InvoiceSettings;
    export type Shipping = Stripe_.CustomerCreateParams.Shipping;
    export type Tax = Stripe_.CustomerCreateParams.Tax;
    export type TaxExempt = Stripe_.CustomerCreateParams.TaxExempt;
    export type TaxIdDatum = Stripe_.CustomerCreateParams.TaxIdDatum;
    export namespace CashBalance {
      export type Settings = Stripe_.CustomerCreateParams.CashBalance.Settings;
      export namespace Settings {
        export type ReconciliationMode = Stripe_.CustomerCreateParams.CashBalance.Settings.ReconciliationMode;
      }
    }
    export namespace InvoiceSettings {
      export type CustomField = Stripe_.CustomerCreateParams.InvoiceSettings.CustomField;
      export type RenderingOptions = Stripe_.CustomerCreateParams.InvoiceSettings.RenderingOptions;
      export namespace RenderingOptions {
        export type AmountTaxDisplay = Stripe_.CustomerCreateParams.InvoiceSettings.RenderingOptions.AmountTaxDisplay;
      }
    }
    export namespace Tax {
      export type ValidateLocation = Stripe_.CustomerCreateParams.Tax.ValidateLocation;
    }
    export namespace TaxIdDatum {
      export type Type = Stripe_.CustomerCreateParams.TaxIdDatum.Type;
    }
  }
  export namespace CustomerUpdateParams {
    export type CashBalance = Stripe_.CustomerUpdateParams.CashBalance;
    export type InvoiceSettings = Stripe_.CustomerUpdateParams.InvoiceSettings;
    export type Shipping = Stripe_.CustomerUpdateParams.Shipping;
    export type Tax = Stripe_.CustomerUpdateParams.Tax;
    export type TaxExempt = Stripe_.CustomerUpdateParams.TaxExempt;
    export namespace CashBalance {
      export type Settings = Stripe_.CustomerUpdateParams.CashBalance.Settings;
      export namespace Settings {
        export type ReconciliationMode = Stripe_.CustomerUpdateParams.CashBalance.Settings.ReconciliationMode;
      }
    }
    export namespace InvoiceSettings {
      export type CustomField = Stripe_.CustomerUpdateParams.InvoiceSettings.CustomField;
      export type RenderingOptions = Stripe_.CustomerUpdateParams.InvoiceSettings.RenderingOptions;
      export namespace RenderingOptions {
        export type AmountTaxDisplay = Stripe_.CustomerUpdateParams.InvoiceSettings.RenderingOptions.AmountTaxDisplay;
      }
    }
    export namespace Tax {
      export type ValidateLocation = Stripe_.CustomerUpdateParams.Tax.ValidateLocation;
    }
  }
  export namespace CustomerCreateFundingInstructionsParams {
    export type BankTransfer = Stripe_.CustomerCreateFundingInstructionsParams.BankTransfer;
    export namespace BankTransfer {
      export type EuBankTransfer = Stripe_.CustomerCreateFundingInstructionsParams.BankTransfer.EuBankTransfer;
      export type RequestedAddressType = Stripe_.CustomerCreateFundingInstructionsParams.BankTransfer.RequestedAddressType;
      export type Type = Stripe_.CustomerCreateFundingInstructionsParams.BankTransfer.Type;
    }
  }
  export namespace CustomerCreateTaxIdParams {
    export type Type = Stripe_.CustomerCreateTaxIdParams.Type;
  }
  export namespace CustomerListPaymentMethodsParams {
    export type AllowRedisplay = Stripe_.CustomerListPaymentMethodsParams.AllowRedisplay;
    export type Type = Stripe_.CustomerListPaymentMethodsParams.Type;
  }
  export namespace CustomerUpdateCashBalanceParams {
    export type Settings = Stripe_.CustomerUpdateCashBalanceParams.Settings;
    export namespace Settings {
      export type ReconciliationMode = Stripe_.CustomerUpdateCashBalanceParams.Settings.ReconciliationMode;
    }
  }
  export namespace CustomerUpdateSourceParams {
    export type AccountHolderType = Stripe_.CustomerUpdateSourceParams.AccountHolderType;
    export type Owner = Stripe_.CustomerUpdateSourceParams.Owner;
  }
  export namespace Customer {
    export type InvoiceSettings = Stripe_.Customer.InvoiceSettings;
    export type Shipping = Stripe_.Customer.Shipping;
    export type Tax = Stripe_.Customer.Tax;
    export type TaxExempt = Stripe_.Customer.TaxExempt;
    export namespace InvoiceSettings {
      export type CustomField = Stripe_.Customer.InvoiceSettings.CustomField;
      export type RenderingOptions = Stripe_.Customer.InvoiceSettings.RenderingOptions;
    }
    export namespace Tax {
      export type AutomaticTax = Stripe_.Customer.Tax.AutomaticTax;
      export type Location = Stripe_.Customer.Tax.Location;
      export type Provider = Stripe_.Customer.Tax.Provider;
      export namespace Location {
        export type Source = Stripe_.Customer.Tax.Location.Source;
      }
    }
  }
  export namespace CustomerSessionCreateParams {
    export type Components = Stripe_.CustomerSessionCreateParams.Components;
    export namespace Components {
      export type BuyButton = Stripe_.CustomerSessionCreateParams.Components.BuyButton;
      export type CustomerSheet = Stripe_.CustomerSessionCreateParams.Components.CustomerSheet;
      export type MobilePaymentElement = Stripe_.CustomerSessionCreateParams.Components.MobilePaymentElement;
      export type PaymentElement = Stripe_.CustomerSessionCreateParams.Components.PaymentElement;
      export type PricingTable = Stripe_.CustomerSessionCreateParams.Components.PricingTable;
      export namespace CustomerSheet {
        export type Features = Stripe_.CustomerSessionCreateParams.Components.CustomerSheet.Features;
        export namespace Features {
          export type PaymentMethodAllowRedisplayFilter = Stripe_.CustomerSessionCreateParams.Components.CustomerSheet.Features.PaymentMethodAllowRedisplayFilter;
          export type PaymentMethodRemove = Stripe_.CustomerSessionCreateParams.Components.CustomerSheet.Features.PaymentMethodRemove;
        }
      }
      export namespace MobilePaymentElement {
        export type Features = Stripe_.CustomerSessionCreateParams.Components.MobilePaymentElement.Features;
        export namespace Features {
          export type PaymentMethodAllowRedisplayFilter = Stripe_.CustomerSessionCreateParams.Components.MobilePaymentElement.Features.PaymentMethodAllowRedisplayFilter;
          export type PaymentMethodRedisplay = Stripe_.CustomerSessionCreateParams.Components.MobilePaymentElement.Features.PaymentMethodRedisplay;
          export type PaymentMethodRemove = Stripe_.CustomerSessionCreateParams.Components.MobilePaymentElement.Features.PaymentMethodRemove;
          export type PaymentMethodSave = Stripe_.CustomerSessionCreateParams.Components.MobilePaymentElement.Features.PaymentMethodSave;
          export type PaymentMethodSaveAllowRedisplayOverride = Stripe_.CustomerSessionCreateParams.Components.MobilePaymentElement.Features.PaymentMethodSaveAllowRedisplayOverride;
        }
      }
      export namespace PaymentElement {
        export type Features = Stripe_.CustomerSessionCreateParams.Components.PaymentElement.Features;
        export namespace Features {
          export type PaymentMethodAllowRedisplayFilter = Stripe_.CustomerSessionCreateParams.Components.PaymentElement.Features.PaymentMethodAllowRedisplayFilter;
          export type PaymentMethodRedisplay = Stripe_.CustomerSessionCreateParams.Components.PaymentElement.Features.PaymentMethodRedisplay;
          export type PaymentMethodRemove = Stripe_.CustomerSessionCreateParams.Components.PaymentElement.Features.PaymentMethodRemove;
          export type PaymentMethodSave = Stripe_.CustomerSessionCreateParams.Components.PaymentElement.Features.PaymentMethodSave;
          export type PaymentMethodSaveUsage = Stripe_.CustomerSessionCreateParams.Components.PaymentElement.Features.PaymentMethodSaveUsage;
        }
      }
    }
  }
  export namespace CustomerSession {
    export type Components = Stripe_.CustomerSession.Components;
    export namespace Components {
      export type BuyButton = Stripe_.CustomerSession.Components.BuyButton;
      export type CustomerSheet = Stripe_.CustomerSession.Components.CustomerSheet;
      export type MobilePaymentElement = Stripe_.CustomerSession.Components.MobilePaymentElement;
      export type PaymentElement = Stripe_.CustomerSession.Components.PaymentElement;
      export type PricingTable = Stripe_.CustomerSession.Components.PricingTable;
      export namespace CustomerSheet {
        export type Features = Stripe_.CustomerSession.Components.CustomerSheet.Features;
        export namespace Features {
          export type PaymentMethodAllowRedisplayFilter = Stripe_.CustomerSession.Components.CustomerSheet.Features.PaymentMethodAllowRedisplayFilter;
          export type PaymentMethodRemove = Stripe_.CustomerSession.Components.CustomerSheet.Features.PaymentMethodRemove;
        }
      }
      export namespace MobilePaymentElement {
        export type Features = Stripe_.CustomerSession.Components.MobilePaymentElement.Features;
        export namespace Features {
          export type PaymentMethodAllowRedisplayFilter = Stripe_.CustomerSession.Components.MobilePaymentElement.Features.PaymentMethodAllowRedisplayFilter;
          export type PaymentMethodRedisplay = Stripe_.CustomerSession.Components.MobilePaymentElement.Features.PaymentMethodRedisplay;
          export type PaymentMethodRemove = Stripe_.CustomerSession.Components.MobilePaymentElement.Features.PaymentMethodRemove;
          export type PaymentMethodSave = Stripe_.CustomerSession.Components.MobilePaymentElement.Features.PaymentMethodSave;
          export type PaymentMethodSaveAllowRedisplayOverride = Stripe_.CustomerSession.Components.MobilePaymentElement.Features.PaymentMethodSaveAllowRedisplayOverride;
        }
      }
      export namespace PaymentElement {
        export type Features = Stripe_.CustomerSession.Components.PaymentElement.Features;
        export namespace Features {
          export type PaymentMethodAllowRedisplayFilter = Stripe_.CustomerSession.Components.PaymentElement.Features.PaymentMethodAllowRedisplayFilter;
          export type PaymentMethodRedisplay = Stripe_.CustomerSession.Components.PaymentElement.Features.PaymentMethodRedisplay;
          export type PaymentMethodRemove = Stripe_.CustomerSession.Components.PaymentElement.Features.PaymentMethodRemove;
          export type PaymentMethodSave = Stripe_.CustomerSession.Components.PaymentElement.Features.PaymentMethodSave;
          export type PaymentMethodSaveUsage = Stripe_.CustomerSession.Components.PaymentElement.Features.PaymentMethodSaveUsage;
        }
      }
    }
  }
  export namespace DisputeUpdateParams {
    export type Evidence = Stripe_.DisputeUpdateParams.Evidence;
    export namespace Evidence {
      export type EnhancedEvidence = Stripe_.DisputeUpdateParams.Evidence.EnhancedEvidence;
      export namespace EnhancedEvidence {
        export type MastercardCompliance = Stripe_.DisputeUpdateParams.Evidence.EnhancedEvidence.MastercardCompliance;
        export type VisaCompellingEvidence3 = Stripe_.DisputeUpdateParams.Evidence.EnhancedEvidence.VisaCompellingEvidence3;
        export type VisaCompliance = Stripe_.DisputeUpdateParams.Evidence.EnhancedEvidence.VisaCompliance;
        export namespace VisaCompellingEvidence3 {
          export type DisputedTransaction = Stripe_.DisputeUpdateParams.Evidence.EnhancedEvidence.VisaCompellingEvidence3.DisputedTransaction;
          export type PriorUndisputedTransaction = Stripe_.DisputeUpdateParams.Evidence.EnhancedEvidence.VisaCompellingEvidence3.PriorUndisputedTransaction;
          export namespace DisputedTransaction {
            export type MerchandiseOrServices = Stripe_.DisputeUpdateParams.Evidence.EnhancedEvidence.VisaCompellingEvidence3.DisputedTransaction.MerchandiseOrServices;
          }
        }
      }
    }
  }
  export namespace Dispute {
    export type EnhancedEligibilityType = Stripe_.Dispute.EnhancedEligibilityType;
    export type Evidence = Stripe_.Dispute.Evidence;
    export type EvidenceDetails = Stripe_.Dispute.EvidenceDetails;
    export type PaymentMethodDetails = Stripe_.Dispute.PaymentMethodDetails;
    export type Status = Stripe_.Dispute.Status;
    export namespace Evidence {
      export type EnhancedEvidence = Stripe_.Dispute.Evidence.EnhancedEvidence;
      export namespace EnhancedEvidence {
        export type MastercardCompliance = Stripe_.Dispute.Evidence.EnhancedEvidence.MastercardCompliance;
        export type VisaCompellingEvidence3 = Stripe_.Dispute.Evidence.EnhancedEvidence.VisaCompellingEvidence3;
        export type VisaCompliance = Stripe_.Dispute.Evidence.EnhancedEvidence.VisaCompliance;
        export namespace VisaCompellingEvidence3 {
          export type DisputedTransaction = Stripe_.Dispute.Evidence.EnhancedEvidence.VisaCompellingEvidence3.DisputedTransaction;
          export type PriorUndisputedTransaction = Stripe_.Dispute.Evidence.EnhancedEvidence.VisaCompellingEvidence3.PriorUndisputedTransaction;
          export namespace DisputedTransaction {
            export type MerchandiseOrServices = Stripe_.Dispute.Evidence.EnhancedEvidence.VisaCompellingEvidence3.DisputedTransaction.MerchandiseOrServices;
          }
        }
      }
    }
    export namespace EvidenceDetails {
      export type EnhancedEligibility = Stripe_.Dispute.EvidenceDetails.EnhancedEligibility;
      export namespace EnhancedEligibility {
        export type MastercardCompliance = Stripe_.Dispute.EvidenceDetails.EnhancedEligibility.MastercardCompliance;
        export type VisaCompellingEvidence3 = Stripe_.Dispute.EvidenceDetails.EnhancedEligibility.VisaCompellingEvidence3;
        export type VisaCompliance = Stripe_.Dispute.EvidenceDetails.EnhancedEligibility.VisaCompliance;
        export namespace MastercardCompliance {
          export type Status = Stripe_.Dispute.EvidenceDetails.EnhancedEligibility.MastercardCompliance.Status;
        }
        export namespace VisaCompellingEvidence3 {
          export type RequiredAction = Stripe_.Dispute.EvidenceDetails.EnhancedEligibility.VisaCompellingEvidence3.RequiredAction;
          export type Status = Stripe_.Dispute.EvidenceDetails.EnhancedEligibility.VisaCompellingEvidence3.Status;
        }
        export namespace VisaCompliance {
          export type Status = Stripe_.Dispute.EvidenceDetails.EnhancedEligibility.VisaCompliance.Status;
        }
      }
    }
    export namespace PaymentMethodDetails {
      export type AmazonPay = Stripe_.Dispute.PaymentMethodDetails.AmazonPay;
      export type Card = Stripe_.Dispute.PaymentMethodDetails.Card;
      export type Klarna = Stripe_.Dispute.PaymentMethodDetails.Klarna;
      export type Paypal = Stripe_.Dispute.PaymentMethodDetails.Paypal;
      export type Type = Stripe_.Dispute.PaymentMethodDetails.Type;
      export namespace AmazonPay {
        export type DisputeType = Stripe_.Dispute.PaymentMethodDetails.AmazonPay.DisputeType;
      }
      export namespace Card {
        export type CaseType = Stripe_.Dispute.PaymentMethodDetails.Card.CaseType;
      }
    }
  }
  export namespace Event {
    export type Data = Stripe_.Event.Data;
    export type Request = Stripe_.Event.Request;
    export type Type = Stripe_.Event.Type;
    export namespace Data {
      export type Object = Stripe_.Event.Data.Object;
      export type PreviousAttributes = Stripe_.Event.Data.PreviousAttributes;
    }
  }
  export namespace FileCreateParams {
    export type Purpose = Stripe_.FileCreateParams.Purpose;
    export type FileLinkData = Stripe_.FileCreateParams.FileLinkData;
  }
  export namespace FileListParams {
    export type Purpose = Stripe_.FileListParams.Purpose;
  }
  export namespace File {
    export type Purpose = Stripe_.File.Purpose;
  }
  export namespace InvoiceCreateParams {
    export type AutomaticTax = Stripe_.InvoiceCreateParams.AutomaticTax;
    export type CollectionMethod = Stripe_.InvoiceCreateParams.CollectionMethod;
    export type CustomField = Stripe_.InvoiceCreateParams.CustomField;
    export type Discount = Stripe_.InvoiceCreateParams.Discount;
    export type FromInvoice = Stripe_.InvoiceCreateParams.FromInvoice;
    export type Issuer = Stripe_.InvoiceCreateParams.Issuer;
    export type PaymentSettings = Stripe_.InvoiceCreateParams.PaymentSettings;
    export type PendingInvoiceItemsBehavior = Stripe_.InvoiceCreateParams.PendingInvoiceItemsBehavior;
    export type Rendering = Stripe_.InvoiceCreateParams.Rendering;
    export type ShippingCost = Stripe_.InvoiceCreateParams.ShippingCost;
    export type ShippingDetails = Stripe_.InvoiceCreateParams.ShippingDetails;
    export type TransferData = Stripe_.InvoiceCreateParams.TransferData;
    export namespace AutomaticTax {
      export type Liability = Stripe_.InvoiceCreateParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe_.InvoiceCreateParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace Issuer {
      export type Type = Stripe_.InvoiceCreateParams.Issuer.Type;
    }
    export namespace PaymentSettings {
      export type PaymentMethodOptions = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions;
      export type PaymentMethodType = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodType;
      export namespace PaymentMethodOptions {
        export type AcssDebit = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.AcssDebit;
        export type Bancontact = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Bancontact;
        export type Card = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Card;
        export type CustomerBalance = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance;
        export type Konbini = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Konbini;
        export type Payto = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Payto;
        export type Pix = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Pix;
        export type SepaDebit = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.SepaDebit;
        export type Upi = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Upi;
        export type UsBankAccount = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount;
        export namespace AcssDebit {
          export type MandateOptions = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions;
          export type VerificationMethod = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.VerificationMethod;
          export namespace MandateOptions {
            export type TransactionType = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
          }
        }
        export namespace Bancontact {
          export type PreferredLanguage = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Bancontact.PreferredLanguage;
        }
        export namespace Card {
          export type Installments = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Card.Installments;
          export type RequestThreeDSecure = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Card.RequestThreeDSecure;
          export namespace Installments {
            export type Plan = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Card.Installments.Plan;
            export namespace Plan {
              export type Type = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Card.Installments.Plan.Type;
            }
          }
        }
        export namespace CustomerBalance {
          export type BankTransfer = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer;
          export namespace BankTransfer {
            export type EuBankTransfer = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
          }
        }
        export namespace Payto {
          export type MandateOptions = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions;
          export namespace MandateOptions {
            export type Purpose = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions.Purpose;
          }
        }
        export namespace Pix {
          export type AmountIncludesIof = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Pix.AmountIncludesIof;
        }
        export namespace Upi {
          export type MandateOptions = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions;
          export namespace MandateOptions {
            export type AmountType = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions.AmountType;
          }
        }
        export namespace UsBankAccount {
          export type FinancialConnections = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections;
          export type VerificationMethod = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.VerificationMethod;
          export namespace FinancialConnections {
            export type Filters = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
            export type Permission = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
            export type Prefetch = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
            export namespace Filters {
              export type AccountSubcategory = Stripe_.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
            }
          }
        }
      }
    }
    export namespace Rendering {
      export type AmountTaxDisplay = Stripe_.InvoiceCreateParams.Rendering.AmountTaxDisplay;
      export type Pdf = Stripe_.InvoiceCreateParams.Rendering.Pdf;
      export namespace Pdf {
        export type PageSize = Stripe_.InvoiceCreateParams.Rendering.Pdf.PageSize;
      }
    }
    export namespace ShippingCost {
      export type ShippingRateData = Stripe_.InvoiceCreateParams.ShippingCost.ShippingRateData;
      export namespace ShippingRateData {
        export type DeliveryEstimate = Stripe_.InvoiceCreateParams.ShippingCost.ShippingRateData.DeliveryEstimate;
        export type FixedAmount = Stripe_.InvoiceCreateParams.ShippingCost.ShippingRateData.FixedAmount;
        export type TaxBehavior = Stripe_.InvoiceCreateParams.ShippingCost.ShippingRateData.TaxBehavior;
        export namespace DeliveryEstimate {
          export type Maximum = Stripe_.InvoiceCreateParams.ShippingCost.ShippingRateData.DeliveryEstimate.Maximum;
          export type Minimum = Stripe_.InvoiceCreateParams.ShippingCost.ShippingRateData.DeliveryEstimate.Minimum;
          export namespace Maximum {
            export type Unit = Stripe_.InvoiceCreateParams.ShippingCost.ShippingRateData.DeliveryEstimate.Maximum.Unit;
          }
          export namespace Minimum {
            export type Unit = Stripe_.InvoiceCreateParams.ShippingCost.ShippingRateData.DeliveryEstimate.Minimum.Unit;
          }
        }
        export namespace FixedAmount {
          export type CurrencyOptions = Stripe_.InvoiceCreateParams.ShippingCost.ShippingRateData.FixedAmount.CurrencyOptions;
          export namespace CurrencyOptions {
            export type TaxBehavior = Stripe_.InvoiceCreateParams.ShippingCost.ShippingRateData.FixedAmount.CurrencyOptions.TaxBehavior;
          }
        }
      }
    }
  }
  export namespace InvoiceUpdateParams {
    export type AutomaticTax = Stripe_.InvoiceUpdateParams.AutomaticTax;
    export type CollectionMethod = Stripe_.InvoiceUpdateParams.CollectionMethod;
    export type CustomField = Stripe_.InvoiceUpdateParams.CustomField;
    export type Discount = Stripe_.InvoiceUpdateParams.Discount;
    export type Issuer = Stripe_.InvoiceUpdateParams.Issuer;
    export type PaymentSettings = Stripe_.InvoiceUpdateParams.PaymentSettings;
    export type Rendering = Stripe_.InvoiceUpdateParams.Rendering;
    export type ShippingCost = Stripe_.InvoiceUpdateParams.ShippingCost;
    export type ShippingDetails = Stripe_.InvoiceUpdateParams.ShippingDetails;
    export type TransferData = Stripe_.InvoiceUpdateParams.TransferData;
    export namespace AutomaticTax {
      export type Liability = Stripe_.InvoiceUpdateParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe_.InvoiceUpdateParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace Issuer {
      export type Type = Stripe_.InvoiceUpdateParams.Issuer.Type;
    }
    export namespace PaymentSettings {
      export type PaymentMethodOptions = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions;
      export type PaymentMethodType = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodType;
      export namespace PaymentMethodOptions {
        export type AcssDebit = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.AcssDebit;
        export type Bancontact = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Bancontact;
        export type Card = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Card;
        export type CustomerBalance = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance;
        export type Konbini = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Konbini;
        export type Payto = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Payto;
        export type Pix = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Pix;
        export type SepaDebit = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.SepaDebit;
        export type Upi = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Upi;
        export type UsBankAccount = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount;
        export namespace AcssDebit {
          export type MandateOptions = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions;
          export type VerificationMethod = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.VerificationMethod;
          export namespace MandateOptions {
            export type TransactionType = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
          }
        }
        export namespace Bancontact {
          export type PreferredLanguage = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Bancontact.PreferredLanguage;
        }
        export namespace Card {
          export type Installments = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Card.Installments;
          export type RequestThreeDSecure = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Card.RequestThreeDSecure;
          export namespace Installments {
            export type Plan = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Card.Installments.Plan;
            export namespace Plan {
              export type Type = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Card.Installments.Plan.Type;
            }
          }
        }
        export namespace CustomerBalance {
          export type BankTransfer = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer;
          export namespace BankTransfer {
            export type EuBankTransfer = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
          }
        }
        export namespace Payto {
          export type MandateOptions = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions;
          export namespace MandateOptions {
            export type Purpose = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions.Purpose;
          }
        }
        export namespace Pix {
          export type AmountIncludesIof = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Pix.AmountIncludesIof;
        }
        export namespace Upi {
          export type MandateOptions = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions;
          export namespace MandateOptions {
            export type AmountType = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions.AmountType;
          }
        }
        export namespace UsBankAccount {
          export type FinancialConnections = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections;
          export type VerificationMethod = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.VerificationMethod;
          export namespace FinancialConnections {
            export type Filters = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
            export type Permission = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
            export type Prefetch = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
            export namespace Filters {
              export type AccountSubcategory = Stripe_.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
            }
          }
        }
      }
    }
    export namespace Rendering {
      export type AmountTaxDisplay = Stripe_.InvoiceUpdateParams.Rendering.AmountTaxDisplay;
      export type Pdf = Stripe_.InvoiceUpdateParams.Rendering.Pdf;
      export namespace Pdf {
        export type PageSize = Stripe_.InvoiceUpdateParams.Rendering.Pdf.PageSize;
      }
    }
    export namespace ShippingCost {
      export type ShippingRateData = Stripe_.InvoiceUpdateParams.ShippingCost.ShippingRateData;
      export namespace ShippingRateData {
        export type DeliveryEstimate = Stripe_.InvoiceUpdateParams.ShippingCost.ShippingRateData.DeliveryEstimate;
        export type FixedAmount = Stripe_.InvoiceUpdateParams.ShippingCost.ShippingRateData.FixedAmount;
        export type TaxBehavior = Stripe_.InvoiceUpdateParams.ShippingCost.ShippingRateData.TaxBehavior;
        export namespace DeliveryEstimate {
          export type Maximum = Stripe_.InvoiceUpdateParams.ShippingCost.ShippingRateData.DeliveryEstimate.Maximum;
          export type Minimum = Stripe_.InvoiceUpdateParams.ShippingCost.ShippingRateData.DeliveryEstimate.Minimum;
          export namespace Maximum {
            export type Unit = Stripe_.InvoiceUpdateParams.ShippingCost.ShippingRateData.DeliveryEstimate.Maximum.Unit;
          }
          export namespace Minimum {
            export type Unit = Stripe_.InvoiceUpdateParams.ShippingCost.ShippingRateData.DeliveryEstimate.Minimum.Unit;
          }
        }
        export namespace FixedAmount {
          export type CurrencyOptions = Stripe_.InvoiceUpdateParams.ShippingCost.ShippingRateData.FixedAmount.CurrencyOptions;
          export namespace CurrencyOptions {
            export type TaxBehavior = Stripe_.InvoiceUpdateParams.ShippingCost.ShippingRateData.FixedAmount.CurrencyOptions.TaxBehavior;
          }
        }
      }
    }
  }
  export namespace InvoiceListParams {
    export type CollectionMethod = Stripe_.InvoiceListParams.CollectionMethod;
    export type Status = Stripe_.InvoiceListParams.Status;
  }
  export namespace InvoiceAddLinesParams {
    export type Line = Stripe_.InvoiceAddLinesParams.Line;
    export namespace Line {
      export type Discount = Stripe_.InvoiceAddLinesParams.Line.Discount;
      export type Period = Stripe_.InvoiceAddLinesParams.Line.Period;
      export type PriceData = Stripe_.InvoiceAddLinesParams.Line.PriceData;
      export type Pricing = Stripe_.InvoiceAddLinesParams.Line.Pricing;
      export type TaxAmount = Stripe_.InvoiceAddLinesParams.Line.TaxAmount;
      export namespace PriceData {
        export type ProductData = Stripe_.InvoiceAddLinesParams.Line.PriceData.ProductData;
        export type TaxBehavior = Stripe_.InvoiceAddLinesParams.Line.PriceData.TaxBehavior;
      }
      export namespace TaxAmount {
        export type TaxRateData = Stripe_.InvoiceAddLinesParams.Line.TaxAmount.TaxRateData;
        export type TaxabilityReason = Stripe_.InvoiceAddLinesParams.Line.TaxAmount.TaxabilityReason;
        export namespace TaxRateData {
          export type JurisdictionLevel = Stripe_.InvoiceAddLinesParams.Line.TaxAmount.TaxRateData.JurisdictionLevel;
          export type TaxType = Stripe_.InvoiceAddLinesParams.Line.TaxAmount.TaxRateData.TaxType;
        }
      }
    }
  }
  export namespace InvoiceCreatePreviewParams {
    export type AutomaticTax = Stripe_.InvoiceCreatePreviewParams.AutomaticTax;
    export type CustomerDetails = Stripe_.InvoiceCreatePreviewParams.CustomerDetails;
    export type Discount = Stripe_.InvoiceCreatePreviewParams.Discount;
    export type InvoiceItem = Stripe_.InvoiceCreatePreviewParams.InvoiceItem;
    export type Issuer = Stripe_.InvoiceCreatePreviewParams.Issuer;
    export type PreviewMode = Stripe_.InvoiceCreatePreviewParams.PreviewMode;
    export type ScheduleDetails = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails;
    export type SubscriptionDetails = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails;
    export namespace AutomaticTax {
      export type Liability = Stripe_.InvoiceCreatePreviewParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe_.InvoiceCreatePreviewParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace CustomerDetails {
      export type Shipping = Stripe_.InvoiceCreatePreviewParams.CustomerDetails.Shipping;
      export type Tax = Stripe_.InvoiceCreatePreviewParams.CustomerDetails.Tax;
      export type TaxExempt = Stripe_.InvoiceCreatePreviewParams.CustomerDetails.TaxExempt;
      export type TaxId = Stripe_.InvoiceCreatePreviewParams.CustomerDetails.TaxId;
      export namespace TaxId {
        export type Type = Stripe_.InvoiceCreatePreviewParams.CustomerDetails.TaxId.Type;
      }
    }
    export namespace InvoiceItem {
      export type Discount = Stripe_.InvoiceCreatePreviewParams.InvoiceItem.Discount;
      export type Period = Stripe_.InvoiceCreatePreviewParams.InvoiceItem.Period;
      export type PriceData = Stripe_.InvoiceCreatePreviewParams.InvoiceItem.PriceData;
      export type TaxBehavior = Stripe_.InvoiceCreatePreviewParams.InvoiceItem.TaxBehavior;
      export namespace PriceData {
        export type TaxBehavior = Stripe_.InvoiceCreatePreviewParams.InvoiceItem.PriceData.TaxBehavior;
      }
    }
    export namespace Issuer {
      export type Type = Stripe_.InvoiceCreatePreviewParams.Issuer.Type;
    }
    export namespace ScheduleDetails {
      export type BillingMode = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.BillingMode;
      export type EndBehavior = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.EndBehavior;
      export type Phase = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase;
      export type ProrationBehavior = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.ProrationBehavior;
      export namespace BillingMode {
        export type Flexible = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.BillingMode.Flexible;
        export type Type = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.BillingMode.Type;
        export namespace Flexible {
          export type ProrationDiscounts = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.BillingMode.Flexible.ProrationDiscounts;
        }
      }
      export namespace Phase {
        export type AddInvoiceItem = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem;
        export type AutomaticTax = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AutomaticTax;
        export type BillingCycleAnchor = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.BillingCycleAnchor;
        export type BillingThresholds = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.BillingThresholds;
        export type CollectionMethod = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.CollectionMethod;
        export type Discount = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Discount;
        export type Duration = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Duration;
        export type InvoiceSettings = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.InvoiceSettings;
        export type Item = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Item;
        export type ProrationBehavior = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.ProrationBehavior;
        export type TransferData = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.TransferData;
        export namespace AddInvoiceItem {
          export type Discount = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem.Discount;
          export type Period = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem.Period;
          export type PriceData = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem.PriceData;
          export namespace Period {
            export type End = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem.Period.End;
            export type Start = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem.Period.Start;
            export namespace End {
              export type Type = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem.Period.End.Type;
            }
            export namespace Start {
              export type Type = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem.Period.Start.Type;
            }
          }
          export namespace PriceData {
            export type TaxBehavior = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem.PriceData.TaxBehavior;
          }
        }
        export namespace AutomaticTax {
          export type Liability = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AutomaticTax.Liability;
          export namespace Liability {
            export type Type = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AutomaticTax.Liability.Type;
          }
        }
        export namespace Duration {
          export type Interval = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Duration.Interval;
        }
        export namespace InvoiceSettings {
          export type Issuer = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.InvoiceSettings.Issuer;
          export namespace Issuer {
            export type Type = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.InvoiceSettings.Issuer.Type;
          }
        }
        export namespace Item {
          export type BillingThresholds = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Item.BillingThresholds;
          export type Discount = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Item.Discount;
          export type PriceData = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Item.PriceData;
          export namespace PriceData {
            export type Recurring = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Item.PriceData.Recurring;
            export type TaxBehavior = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Item.PriceData.TaxBehavior;
            export namespace Recurring {
              export type Interval = Stripe_.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Item.PriceData.Recurring.Interval;
            }
          }
        }
      }
    }
    export namespace SubscriptionDetails {
      export type BillingCycleAnchor = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.BillingCycleAnchor;
      export type BillingMode = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.BillingMode;
      export type BillingSchedule = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.BillingSchedule;
      export type CancelAt = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.CancelAt;
      export type Item = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.Item;
      export type ProrationBehavior = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.ProrationBehavior;
      export namespace BillingMode {
        export type Flexible = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.BillingMode.Flexible;
        export type Type = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.BillingMode.Type;
        export namespace Flexible {
          export type ProrationDiscounts = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.BillingMode.Flexible.ProrationDiscounts;
        }
      }
      export namespace BillingSchedule {
        export type AppliesTo = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.BillingSchedule.AppliesTo;
        export type BillUntil = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.BillingSchedule.BillUntil;
        export namespace BillUntil {
          export type Duration = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.BillingSchedule.BillUntil.Duration;
          export type Type = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.BillingSchedule.BillUntil.Type;
          export namespace Duration {
            export type Interval = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.BillingSchedule.BillUntil.Duration.Interval;
          }
        }
      }
      export namespace Item {
        export type BillingThresholds = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.Item.BillingThresholds;
        export type Discount = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.Item.Discount;
        export type PriceData = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.Item.PriceData;
        export namespace PriceData {
          export type Recurring = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.Item.PriceData.Recurring;
          export type TaxBehavior = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.Item.PriceData.TaxBehavior;
          export namespace Recurring {
            export type Interval = Stripe_.InvoiceCreatePreviewParams.SubscriptionDetails.Item.PriceData.Recurring.Interval;
          }
        }
      }
    }
  }
  export namespace InvoiceRemoveLinesParams {
    export type Line = Stripe_.InvoiceRemoveLinesParams.Line;
    export namespace Line {
      export type Behavior = Stripe_.InvoiceRemoveLinesParams.Line.Behavior;
    }
  }
  export namespace InvoiceUpdateLinesParams {
    export type Line = Stripe_.InvoiceUpdateLinesParams.Line;
    export namespace Line {
      export type Discount = Stripe_.InvoiceUpdateLinesParams.Line.Discount;
      export type Period = Stripe_.InvoiceUpdateLinesParams.Line.Period;
      export type PriceData = Stripe_.InvoiceUpdateLinesParams.Line.PriceData;
      export type Pricing = Stripe_.InvoiceUpdateLinesParams.Line.Pricing;
      export type TaxAmount = Stripe_.InvoiceUpdateLinesParams.Line.TaxAmount;
      export namespace PriceData {
        export type ProductData = Stripe_.InvoiceUpdateLinesParams.Line.PriceData.ProductData;
        export type TaxBehavior = Stripe_.InvoiceUpdateLinesParams.Line.PriceData.TaxBehavior;
      }
      export namespace TaxAmount {
        export type TaxRateData = Stripe_.InvoiceUpdateLinesParams.Line.TaxAmount.TaxRateData;
        export type TaxabilityReason = Stripe_.InvoiceUpdateLinesParams.Line.TaxAmount.TaxabilityReason;
        export namespace TaxRateData {
          export type JurisdictionLevel = Stripe_.InvoiceUpdateLinesParams.Line.TaxAmount.TaxRateData.JurisdictionLevel;
          export type TaxType = Stripe_.InvoiceUpdateLinesParams.Line.TaxAmount.TaxRateData.TaxType;
        }
      }
    }
  }
  export namespace InvoiceUpdateLineItemParams {
    export type Discount = Stripe_.InvoiceUpdateLineItemParams.Discount;
    export type Period = Stripe_.InvoiceUpdateLineItemParams.Period;
    export type PriceData = Stripe_.InvoiceUpdateLineItemParams.PriceData;
    export type Pricing = Stripe_.InvoiceUpdateLineItemParams.Pricing;
    export type TaxAmount = Stripe_.InvoiceUpdateLineItemParams.TaxAmount;
    export namespace PriceData {
      export type ProductData = Stripe_.InvoiceUpdateLineItemParams.PriceData.ProductData;
      export type TaxBehavior = Stripe_.InvoiceUpdateLineItemParams.PriceData.TaxBehavior;
    }
    export namespace TaxAmount {
      export type TaxRateData = Stripe_.InvoiceUpdateLineItemParams.TaxAmount.TaxRateData;
      export type TaxabilityReason = Stripe_.InvoiceUpdateLineItemParams.TaxAmount.TaxabilityReason;
      export namespace TaxRateData {
        export type JurisdictionLevel = Stripe_.InvoiceUpdateLineItemParams.TaxAmount.TaxRateData.JurisdictionLevel;
        export type TaxType = Stripe_.InvoiceUpdateLineItemParams.TaxAmount.TaxRateData.TaxType;
      }
    }
  }
  export namespace Invoice {
    export type AutomaticTax = Stripe_.Invoice.AutomaticTax;
    export type BillingReason = Stripe_.Invoice.BillingReason;
    export type CollectionMethod = Stripe_.Invoice.CollectionMethod;
    export type ConfirmationSecret = Stripe_.Invoice.ConfirmationSecret;
    export type CustomField = Stripe_.Invoice.CustomField;
    export type CustomerShipping = Stripe_.Invoice.CustomerShipping;
    export type CustomerTaxExempt = Stripe_.Invoice.CustomerTaxExempt;
    export type CustomerTaxId = Stripe_.Invoice.CustomerTaxId;
    export type FromInvoice = Stripe_.Invoice.FromInvoice;
    export type Issuer = Stripe_.Invoice.Issuer;
    export type LastFinalizationError = Stripe_.Invoice.LastFinalizationError;
    export type Parent = Stripe_.Invoice.Parent;
    export type PaymentSettings = Stripe_.Invoice.PaymentSettings;
    export type Rendering = Stripe_.Invoice.Rendering;
    export type ShippingCost = Stripe_.Invoice.ShippingCost;
    export type ShippingDetails = Stripe_.Invoice.ShippingDetails;
    export type Status = Stripe_.Invoice.Status;
    export type StatusTransitions = Stripe_.Invoice.StatusTransitions;
    export type ThresholdReason = Stripe_.Invoice.ThresholdReason;
    export type TotalDiscountAmount = Stripe_.Invoice.TotalDiscountAmount;
    export type TotalPretaxCreditAmount = Stripe_.Invoice.TotalPretaxCreditAmount;
    export type TotalTax = Stripe_.Invoice.TotalTax;
    export namespace AutomaticTax {
      export type DisabledReason = Stripe_.Invoice.AutomaticTax.DisabledReason;
      export type Liability = Stripe_.Invoice.AutomaticTax.Liability;
      export type Status = Stripe_.Invoice.AutomaticTax.Status;
      export namespace Liability {
        export type Type = Stripe_.Invoice.AutomaticTax.Liability.Type;
      }
    }
    export namespace CustomerTaxId {
      export type Type = Stripe_.Invoice.CustomerTaxId.Type;
    }
    export namespace Issuer {
      export type Type = Stripe_.Invoice.Issuer.Type;
    }
    export namespace LastFinalizationError {
      export type Code = Stripe_.Invoice.LastFinalizationError.Code;
      export type Type = Stripe_.Invoice.LastFinalizationError.Type;
    }
    export namespace Parent {
      export type QuoteDetails = Stripe_.Invoice.Parent.QuoteDetails;
      export type SubscriptionDetails = Stripe_.Invoice.Parent.SubscriptionDetails;
      export type Type = Stripe_.Invoice.Parent.Type;
    }
    export namespace PaymentSettings {
      export type PaymentMethodOptions = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions;
      export type PaymentMethodType = Stripe_.Invoice.PaymentSettings.PaymentMethodType;
      export namespace PaymentMethodOptions {
        export type AcssDebit = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.AcssDebit;
        export type Bancontact = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.Bancontact;
        export type Card = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.Card;
        export type CustomerBalance = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.CustomerBalance;
        export type Konbini = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.Konbini;
        export type Payto = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.Payto;
        export type Pix = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.Pix;
        export type SepaDebit = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.SepaDebit;
        export type Upi = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.Upi;
        export type UsBankAccount = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.UsBankAccount;
        export namespace AcssDebit {
          export type MandateOptions = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions;
          export type VerificationMethod = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.AcssDebit.VerificationMethod;
          export namespace MandateOptions {
            export type TransactionType = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
          }
        }
        export namespace Bancontact {
          export type PreferredLanguage = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.Bancontact.PreferredLanguage;
        }
        export namespace Card {
          export type Installments = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.Card.Installments;
          export type RequestThreeDSecure = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.Card.RequestThreeDSecure;
        }
        export namespace CustomerBalance {
          export type BankTransfer = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer;
          export namespace BankTransfer {
            export type EuBankTransfer = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
            export namespace EuBankTransfer {
              export type Country = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer.Country;
            }
          }
        }
        export namespace Payto {
          export type MandateOptions = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions;
          export namespace MandateOptions {
            export type AmountType = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions.AmountType;
            export type Purpose = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions.Purpose;
          }
        }
        export namespace Pix {
          export type AmountIncludesIof = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.Pix.AmountIncludesIof;
        }
        export namespace Upi {
          export type MandateOptions = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions;
          export namespace MandateOptions {
            export type AmountType = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions.AmountType;
          }
        }
        export namespace UsBankAccount {
          export type FinancialConnections = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections;
          export type VerificationMethod = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.UsBankAccount.VerificationMethod;
          export namespace FinancialConnections {
            export type Filters = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
            export type Permission = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
            export type Prefetch = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
            export namespace Filters {
              export type AccountSubcategory = Stripe_.Invoice.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
            }
          }
        }
      }
    }
    export namespace Rendering {
      export type Pdf = Stripe_.Invoice.Rendering.Pdf;
      export namespace Pdf {
        export type PageSize = Stripe_.Invoice.Rendering.Pdf.PageSize;
      }
    }
    export namespace ShippingCost {
      export type Tax = Stripe_.Invoice.ShippingCost.Tax;
      export namespace Tax {
        export type TaxabilityReason = Stripe_.Invoice.ShippingCost.Tax.TaxabilityReason;
      }
    }
    export namespace ThresholdReason {
      export type ItemReason = Stripe_.Invoice.ThresholdReason.ItemReason;
    }
    export namespace TotalPretaxCreditAmount {
      export type Type = Stripe_.Invoice.TotalPretaxCreditAmount.Type;
    }
    export namespace TotalTax {
      export type TaxBehavior = Stripe_.Invoice.TotalTax.TaxBehavior;
      export type TaxRateDetails = Stripe_.Invoice.TotalTax.TaxRateDetails;
      export type TaxabilityReason = Stripe_.Invoice.TotalTax.TaxabilityReason;
    }
  }
  export namespace InvoiceItemCreateParams {
    export type Discount = Stripe_.InvoiceItemCreateParams.Discount;
    export type Period = Stripe_.InvoiceItemCreateParams.Period;
    export type PriceData = Stripe_.InvoiceItemCreateParams.PriceData;
    export type Pricing = Stripe_.InvoiceItemCreateParams.Pricing;
    export type TaxBehavior = Stripe_.InvoiceItemCreateParams.TaxBehavior;
    export namespace PriceData {
      export type TaxBehavior = Stripe_.InvoiceItemCreateParams.PriceData.TaxBehavior;
    }
  }
  export namespace InvoiceItemUpdateParams {
    export type Discount = Stripe_.InvoiceItemUpdateParams.Discount;
    export type Period = Stripe_.InvoiceItemUpdateParams.Period;
    export type PriceData = Stripe_.InvoiceItemUpdateParams.PriceData;
    export type Pricing = Stripe_.InvoiceItemUpdateParams.Pricing;
    export type TaxBehavior = Stripe_.InvoiceItemUpdateParams.TaxBehavior;
    export namespace PriceData {
      export type TaxBehavior = Stripe_.InvoiceItemUpdateParams.PriceData.TaxBehavior;
    }
  }
  export namespace InvoiceItem {
    export type Parent = Stripe_.InvoiceItem.Parent;
    export type Period = Stripe_.InvoiceItem.Period;
    export type Pricing = Stripe_.InvoiceItem.Pricing;
    export type ProrationDetails = Stripe_.InvoiceItem.ProrationDetails;
    export namespace Parent {
      export type SubscriptionDetails = Stripe_.InvoiceItem.Parent.SubscriptionDetails;
    }
    export namespace Pricing {
      export type PriceDetails = Stripe_.InvoiceItem.Pricing.PriceDetails;
    }
    export namespace ProrationDetails {
      export type CreditedItems = Stripe_.InvoiceItem.ProrationDetails.CreditedItems;
      export type DiscountAmount = Stripe_.InvoiceItem.ProrationDetails.DiscountAmount;
      export namespace CreditedItems {
        export type InvoiceLineItemDetails = Stripe_.InvoiceItem.ProrationDetails.CreditedItems.InvoiceLineItemDetails;
        export type Type = Stripe_.InvoiceItem.ProrationDetails.CreditedItems.Type;
      }
    }
  }
  export namespace InvoicePaymentListParams {
    export type Payment = Stripe_.InvoicePaymentListParams.Payment;
    export type Status = Stripe_.InvoicePaymentListParams.Status;
    export namespace Payment {
      export type Type = Stripe_.InvoicePaymentListParams.Payment.Type;
    }
  }
  export namespace InvoicePayment {
    export type Payment = Stripe_.InvoicePayment.Payment;
    export type StatusTransitions = Stripe_.InvoicePayment.StatusTransitions;
    export namespace Payment {
      export type Type = Stripe_.InvoicePayment.Payment.Type;
    }
  }
  export namespace InvoiceRenderingTemplateListParams {
    export type Status = Stripe_.InvoiceRenderingTemplateListParams.Status;
  }
  export namespace InvoiceRenderingTemplate {
    export type Status = Stripe_.InvoiceRenderingTemplate.Status;
  }
  export namespace Mandate {
    export type CustomerAcceptance = Stripe_.Mandate.CustomerAcceptance;
    export type MultiUse = Stripe_.Mandate.MultiUse;
    export type PaymentMethodDetails = Stripe_.Mandate.PaymentMethodDetails;
    export type SingleUse = Stripe_.Mandate.SingleUse;
    export type Status = Stripe_.Mandate.Status;
    export type Type = Stripe_.Mandate.Type;
    export namespace CustomerAcceptance {
      export type Offline = Stripe_.Mandate.CustomerAcceptance.Offline;
      export type Online = Stripe_.Mandate.CustomerAcceptance.Online;
      export type Type = Stripe_.Mandate.CustomerAcceptance.Type;
    }
    export namespace PaymentMethodDetails {
      export type AcssDebit = Stripe_.Mandate.PaymentMethodDetails.AcssDebit;
      export type AmazonPay = Stripe_.Mandate.PaymentMethodDetails.AmazonPay;
      export type AuBecsDebit = Stripe_.Mandate.PaymentMethodDetails.AuBecsDebit;
      export type BacsDebit = Stripe_.Mandate.PaymentMethodDetails.BacsDebit;
      export type Card = Stripe_.Mandate.PaymentMethodDetails.Card;
      export type Cashapp = Stripe_.Mandate.PaymentMethodDetails.Cashapp;
      export type KakaoPay = Stripe_.Mandate.PaymentMethodDetails.KakaoPay;
      export type Klarna = Stripe_.Mandate.PaymentMethodDetails.Klarna;
      export type KrCard = Stripe_.Mandate.PaymentMethodDetails.KrCard;
      export type Link = Stripe_.Mandate.PaymentMethodDetails.Link;
      export type NaverPay = Stripe_.Mandate.PaymentMethodDetails.NaverPay;
      export type NzBankAccount = Stripe_.Mandate.PaymentMethodDetails.NzBankAccount;
      export type Paypal = Stripe_.Mandate.PaymentMethodDetails.Paypal;
      export type Payto = Stripe_.Mandate.PaymentMethodDetails.Payto;
      export type Pix = Stripe_.Mandate.PaymentMethodDetails.Pix;
      export type RevolutPay = Stripe_.Mandate.PaymentMethodDetails.RevolutPay;
      export type SepaDebit = Stripe_.Mandate.PaymentMethodDetails.SepaDebit;
      export type Twint = Stripe_.Mandate.PaymentMethodDetails.Twint;
      export type Upi = Stripe_.Mandate.PaymentMethodDetails.Upi;
      export type UsBankAccount = Stripe_.Mandate.PaymentMethodDetails.UsBankAccount;
      export namespace AcssDebit {
        export type DefaultFor = Stripe_.Mandate.PaymentMethodDetails.AcssDebit.DefaultFor;
        export type PaymentSchedule = Stripe_.Mandate.PaymentMethodDetails.AcssDebit.PaymentSchedule;
        export type TransactionType = Stripe_.Mandate.PaymentMethodDetails.AcssDebit.TransactionType;
      }
      export namespace BacsDebit {
        export type NetworkStatus = Stripe_.Mandate.PaymentMethodDetails.BacsDebit.NetworkStatus;
        export type RevocationReason = Stripe_.Mandate.PaymentMethodDetails.BacsDebit.RevocationReason;
      }
      export namespace Payto {
        export type AmountType = Stripe_.Mandate.PaymentMethodDetails.Payto.AmountType;
        export type PaymentSchedule = Stripe_.Mandate.PaymentMethodDetails.Payto.PaymentSchedule;
        export type Purpose = Stripe_.Mandate.PaymentMethodDetails.Payto.Purpose;
      }
      export namespace Pix {
        export type AmountIncludesIof = Stripe_.Mandate.PaymentMethodDetails.Pix.AmountIncludesIof;
        export type AmountType = Stripe_.Mandate.PaymentMethodDetails.Pix.AmountType;
        export type PaymentSchedule = Stripe_.Mandate.PaymentMethodDetails.Pix.PaymentSchedule;
      }
      export namespace Upi {
        export type AmountType = Stripe_.Mandate.PaymentMethodDetails.Upi.AmountType;
      }
    }
  }
  export namespace PaymentAttemptRecord {
    export type Amount = Stripe_.PaymentAttemptRecord.Amount;
    export type AmountAuthorized = Stripe_.PaymentAttemptRecord.AmountAuthorized;
    export type AmountCanceled = Stripe_.PaymentAttemptRecord.AmountCanceled;
    export type AmountFailed = Stripe_.PaymentAttemptRecord.AmountFailed;
    export type AmountGuaranteed = Stripe_.PaymentAttemptRecord.AmountGuaranteed;
    export type AmountRefunded = Stripe_.PaymentAttemptRecord.AmountRefunded;
    export type AmountRequested = Stripe_.PaymentAttemptRecord.AmountRequested;
    export type CustomerDetails = Stripe_.PaymentAttemptRecord.CustomerDetails;
    export type CustomerPresence = Stripe_.PaymentAttemptRecord.CustomerPresence;
    export type PaymentMethodDetails = Stripe_.PaymentAttemptRecord.PaymentMethodDetails;
    export type ProcessorDetails = Stripe_.PaymentAttemptRecord.ProcessorDetails;
    export type ReportedBy = Stripe_.PaymentAttemptRecord.ReportedBy;
    export type ShippingDetails = Stripe_.PaymentAttemptRecord.ShippingDetails;
    export namespace PaymentMethodDetails {
      export type AchCreditTransfer = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.AchCreditTransfer;
      export type AchDebit = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.AchDebit;
      export type AcssDebit = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.AcssDebit;
      export type Affirm = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Affirm;
      export type AfterpayClearpay = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.AfterpayClearpay;
      export type Alipay = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Alipay;
      export type Alma = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Alma;
      export type AmazonPay = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.AmazonPay;
      export type AuBecsDebit = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.AuBecsDebit;
      export type BacsDebit = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.BacsDebit;
      export type Bancontact = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Bancontact;
      export type Billie = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Billie;
      export type BillingDetails = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.BillingDetails;
      export type Bizum = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Bizum;
      export type Blik = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Blik;
      export type Boleto = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Boleto;
      export type Card = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card;
      export type CardPresent = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.CardPresent;
      export type Cashapp = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Cashapp;
      export type Crypto = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Crypto;
      export type Custom = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Custom;
      export type CustomerBalance = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.CustomerBalance;
      export type Eps = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Eps;
      export type Fpx = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Fpx;
      export type Giropay = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Giropay;
      export type Grabpay = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Grabpay;
      export type Ideal = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Ideal;
      export type InteracPresent = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.InteracPresent;
      export type KakaoPay = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.KakaoPay;
      export type Klarna = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Klarna;
      export type Konbini = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Konbini;
      export type KrCard = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.KrCard;
      export type Link = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Link;
      export type MbWay = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.MbWay;
      export type Mobilepay = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Mobilepay;
      export type Multibanco = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Multibanco;
      export type NaverPay = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.NaverPay;
      export type NzBankAccount = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.NzBankAccount;
      export type Oxxo = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Oxxo;
      export type P24 = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.P24;
      export type PayByBank = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.PayByBank;
      export type Payco = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Payco;
      export type Paynow = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Paynow;
      export type Paypal = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Paypal;
      export type Payto = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Payto;
      export type Pix = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Pix;
      export type Promptpay = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Promptpay;
      export type RevolutPay = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.RevolutPay;
      export type SamsungPay = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.SamsungPay;
      export type Satispay = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Satispay;
      export type Scalapay = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Scalapay;
      export type SepaCreditTransfer = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.SepaCreditTransfer;
      export type SepaDebit = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.SepaDebit;
      export type Sofort = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Sofort;
      export type StripeAccount = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.StripeAccount;
      export type Sunbit = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Sunbit;
      export type Swish = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Swish;
      export type Twint = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Twint;
      export type Upi = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Upi;
      export type UsBankAccount = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.UsBankAccount;
      export type Wechat = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Wechat;
      export type WechatPay = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.WechatPay;
      export type Zip = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Zip;
      export namespace AchDebit {
        export type AccountHolderType = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.AchDebit.AccountHolderType;
      }
      export namespace Alma {
        export type Installments = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Alma.Installments;
      }
      export namespace AmazonPay {
        export type Funding = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.AmazonPay.Funding;
        export namespace Funding {
          export type Card = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.AmazonPay.Funding.Card;
        }
      }
      export namespace Bancontact {
        export type PreferredLanguage = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Bancontact.PreferredLanguage;
      }
      export namespace Card {
        export type Brand = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.Brand;
        export type Checks = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.Checks;
        export type Funding = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.Funding;
        export type Installments = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.Installments;
        export type Network = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.Network;
        export type NetworkToken = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.NetworkToken;
        export type ThreeDSecure = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.ThreeDSecure;
        export type Wallet = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.Wallet;
        export namespace Checks {
          export type AddressLine1Check = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.Checks.AddressLine1Check;
          export type AddressPostalCodeCheck = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.Checks.AddressPostalCodeCheck;
          export type CvcCheck = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.Checks.CvcCheck;
        }
        export namespace Installments {
          export type Plan = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.Installments.Plan;
          export namespace Plan {
            export type Type = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.Installments.Plan.Type;
          }
        }
        export namespace ThreeDSecure {
          export type AuthenticationFlow = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.ThreeDSecure.AuthenticationFlow;
          export type ElectronicCommerceIndicator = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type ExemptionIndicator = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.ThreeDSecure.ExemptionIndicator;
          export type Result = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.ThreeDSecure.Result;
          export type ResultReason = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.ThreeDSecure.ResultReason;
          export type Version = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.ThreeDSecure.Version;
        }
        export namespace Wallet {
          export type ApplePay = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.Wallet.ApplePay;
          export type GooglePay = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.Wallet.GooglePay;
        }
      }
      export namespace CardPresent {
        export type Offline = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.CardPresent.Offline;
        export type ReadMethod = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.CardPresent.ReadMethod;
        export type Receipt = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.CardPresent.Receipt;
        export type Wallet = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.CardPresent.Wallet;
        export namespace Receipt {
          export type AccountType = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.CardPresent.Receipt.AccountType;
        }
        export namespace Wallet {
          export type Type = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.CardPresent.Wallet.Type;
        }
      }
      export namespace Crypto {
        export type Network = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Crypto.Network;
        export type TokenCurrency = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Crypto.TokenCurrency;
      }
      export namespace Eps {
        export type Bank = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Fpx.AccountHolderType;
        export type Bank = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Ideal.Bank;
        export type Bic = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Ideal.Bic;
      }
      export namespace InteracPresent {
        export type ReadMethod = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.InteracPresent.ReadMethod;
        export type Receipt = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.InteracPresent.Receipt;
        export namespace Receipt {
          export type AccountType = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.InteracPresent.Receipt.AccountType;
        }
      }
      export namespace Klarna {
        export type PayerDetails = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Klarna.PayerDetails;
        export namespace PayerDetails {
          export type Address = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Klarna.PayerDetails.Address;
        }
      }
      export namespace Konbini {
        export type Store = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Konbini.Store;
        export namespace Store {
          export type Chain = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Konbini.Store.Chain;
        }
      }
      export namespace KrCard {
        export type Brand = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.KrCard.Brand;
      }
      export namespace Mobilepay {
        export type Card = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Mobilepay.Card;
      }
      export namespace P24 {
        export type Bank = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.P24.Bank;
      }
      export namespace Paypal {
        export type SellerProtection = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Paypal.SellerProtection;
        export namespace SellerProtection {
          export type DisputeCategory = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Paypal.SellerProtection.DisputeCategory;
          export type Status = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Paypal.SellerProtection.Status;
        }
      }
      export namespace RevolutPay {
        export type Funding = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.RevolutPay.Funding;
        export namespace Funding {
          export type Card = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.RevolutPay.Funding.Card;
        }
      }
      export namespace Sofort {
        export type PreferredLanguage = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Sofort.PreferredLanguage;
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.UsBankAccount.AccountType;
      }
    }
    export namespace ProcessorDetails {
      export type Custom = Stripe_.PaymentAttemptRecord.ProcessorDetails.Custom;
    }
  }
  export namespace PaymentIntentCreateParams {
    export type AmountDetails = Stripe_.PaymentIntentCreateParams.AmountDetails;
    export type AutomaticPaymentMethods = Stripe_.PaymentIntentCreateParams.AutomaticPaymentMethods;
    export type CaptureMethod = Stripe_.PaymentIntentCreateParams.CaptureMethod;
    export type ConfirmationMethod = Stripe_.PaymentIntentCreateParams.ConfirmationMethod;
    export type ExcludedPaymentMethodType = Stripe_.PaymentIntentCreateParams.ExcludedPaymentMethodType;
    export type Hooks = Stripe_.PaymentIntentCreateParams.Hooks;
    export type MandateData = Stripe_.PaymentIntentCreateParams.MandateData;
    export type OffSession = Stripe_.PaymentIntentCreateParams.OffSession;
    export type PaymentDetails = Stripe_.PaymentIntentCreateParams.PaymentDetails;
    export type PaymentMethodData = Stripe_.PaymentIntentCreateParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions;
    export type RadarOptions = Stripe_.PaymentIntentCreateParams.RadarOptions;
    export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.SetupFutureUsage;
    export type Shipping = Stripe_.PaymentIntentCreateParams.Shipping;
    export type TransferData = Stripe_.PaymentIntentCreateParams.TransferData;
    export namespace AmountDetails {
      export type LineItem = Stripe_.PaymentIntentCreateParams.AmountDetails.LineItem;
      export type Shipping = Stripe_.PaymentIntentCreateParams.AmountDetails.Shipping;
      export type Tax = Stripe_.PaymentIntentCreateParams.AmountDetails.Tax;
      export namespace LineItem {
        export type PaymentMethodOptions = Stripe_.PaymentIntentCreateParams.AmountDetails.LineItem.PaymentMethodOptions;
        export type Tax = Stripe_.PaymentIntentCreateParams.AmountDetails.LineItem.Tax;
        export namespace PaymentMethodOptions {
          export type Card = Stripe_.PaymentIntentCreateParams.AmountDetails.LineItem.PaymentMethodOptions.Card;
          export type CardPresent = Stripe_.PaymentIntentCreateParams.AmountDetails.LineItem.PaymentMethodOptions.CardPresent;
          export type Klarna = Stripe_.PaymentIntentCreateParams.AmountDetails.LineItem.PaymentMethodOptions.Klarna;
          export type Paypal = Stripe_.PaymentIntentCreateParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal;
          export namespace Paypal {
            export type Category = Stripe_.PaymentIntentCreateParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal.Category;
          }
        }
      }
    }
    export namespace AutomaticPaymentMethods {
      export type AllowRedirects = Stripe_.PaymentIntentCreateParams.AutomaticPaymentMethods.AllowRedirects;
    }
    export namespace Hooks {
      export type Inputs = Stripe_.PaymentIntentCreateParams.Hooks.Inputs;
      export namespace Inputs {
        export type Tax = Stripe_.PaymentIntentCreateParams.Hooks.Inputs.Tax;
      }
    }
    export namespace MandateData {
      export type CustomerAcceptance = Stripe_.PaymentIntentCreateParams.MandateData.CustomerAcceptance;
      export namespace CustomerAcceptance {
        export type Offline = Stripe_.PaymentIntentCreateParams.MandateData.CustomerAcceptance.Offline;
        export type Online = Stripe_.PaymentIntentCreateParams.MandateData.CustomerAcceptance.Online;
        export type Type = Stripe_.PaymentIntentCreateParams.MandateData.CustomerAcceptance.Type;
      }
    }
    export namespace PaymentMethodData {
      export type AcssDebit = Stripe_.PaymentIntentCreateParams.PaymentMethodData.AcssDebit;
      export type Affirm = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Affirm;
      export type AfterpayClearpay = Stripe_.PaymentIntentCreateParams.PaymentMethodData.AfterpayClearpay;
      export type Alipay = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Alipay;
      export type AllowRedisplay = Stripe_.PaymentIntentCreateParams.PaymentMethodData.AllowRedisplay;
      export type Alma = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Alma;
      export type AmazonPay = Stripe_.PaymentIntentCreateParams.PaymentMethodData.AmazonPay;
      export type AuBecsDebit = Stripe_.PaymentIntentCreateParams.PaymentMethodData.AuBecsDebit;
      export type BacsDebit = Stripe_.PaymentIntentCreateParams.PaymentMethodData.BacsDebit;
      export type Bancontact = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Bancontact;
      export type Billie = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Billie;
      export type BillingDetails = Stripe_.PaymentIntentCreateParams.PaymentMethodData.BillingDetails;
      export type Bizum = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Bizum;
      export type Blik = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Blik;
      export type Boleto = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Boleto;
      export type Cashapp = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Cashapp;
      export type Crypto = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Crypto;
      export type CustomerBalance = Stripe_.PaymentIntentCreateParams.PaymentMethodData.CustomerBalance;
      export type Eps = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Eps;
      export type Fpx = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Fpx;
      export type Giropay = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Giropay;
      export type Grabpay = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Grabpay;
      export type Ideal = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Ideal;
      export type InteracPresent = Stripe_.PaymentIntentCreateParams.PaymentMethodData.InteracPresent;
      export type KakaoPay = Stripe_.PaymentIntentCreateParams.PaymentMethodData.KakaoPay;
      export type Klarna = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Klarna;
      export type Konbini = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Konbini;
      export type KrCard = Stripe_.PaymentIntentCreateParams.PaymentMethodData.KrCard;
      export type Link = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Link;
      export type MbWay = Stripe_.PaymentIntentCreateParams.PaymentMethodData.MbWay;
      export type Mobilepay = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Mobilepay;
      export type Multibanco = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Multibanco;
      export type NaverPay = Stripe_.PaymentIntentCreateParams.PaymentMethodData.NaverPay;
      export type NzBankAccount = Stripe_.PaymentIntentCreateParams.PaymentMethodData.NzBankAccount;
      export type Oxxo = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Oxxo;
      export type P24 = Stripe_.PaymentIntentCreateParams.PaymentMethodData.P24;
      export type PayByBank = Stripe_.PaymentIntentCreateParams.PaymentMethodData.PayByBank;
      export type Payco = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Payco;
      export type Paynow = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Paynow;
      export type Paypal = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Paypal;
      export type Payto = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Payto;
      export type Pix = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Pix;
      export type Promptpay = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Promptpay;
      export type RadarOptions = Stripe_.PaymentIntentCreateParams.PaymentMethodData.RadarOptions;
      export type RevolutPay = Stripe_.PaymentIntentCreateParams.PaymentMethodData.RevolutPay;
      export type SamsungPay = Stripe_.PaymentIntentCreateParams.PaymentMethodData.SamsungPay;
      export type Satispay = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Satispay;
      export type Scalapay = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Scalapay;
      export type SepaDebit = Stripe_.PaymentIntentCreateParams.PaymentMethodData.SepaDebit;
      export type Sofort = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Sofort;
      export type Sunbit = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Sunbit;
      export type Swish = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Swish;
      export type Twint = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Twint;
      export type Type = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Type;
      export type Upi = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Upi;
      export type UsBankAccount = Stripe_.PaymentIntentCreateParams.PaymentMethodData.UsBankAccount;
      export type WechatPay = Stripe_.PaymentIntentCreateParams.PaymentMethodData.WechatPay;
      export type Zip = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Zip;
      export namespace Eps {
        export type Bank = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Fpx.AccountHolderType;
        export type Bank = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Ideal.Bank;
      }
      export namespace Klarna {
        export type Dob = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Klarna.Dob;
      }
      export namespace NaverPay {
        export type Funding = Stripe_.PaymentIntentCreateParams.PaymentMethodData.NaverPay.Funding;
      }
      export namespace P24 {
        export type Bank = Stripe_.PaymentIntentCreateParams.PaymentMethodData.P24.Bank;
      }
      export namespace Sofort {
        export type Country = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Sofort.Country;
      }
      export namespace Upi {
        export type MandateOptions = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Upi.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe_.PaymentIntentCreateParams.PaymentMethodData.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe_.PaymentIntentCreateParams.PaymentMethodData.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe_.PaymentIntentCreateParams.PaymentMethodData.UsBankAccount.AccountType;
      }
    }
    export namespace PaymentMethodOptions {
      export type AcssDebit = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.AcssDebit;
      export type Affirm = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Affirm;
      export type AfterpayClearpay = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.AfterpayClearpay;
      export type Alipay = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Alipay;
      export type Alma = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Alma;
      export type AmazonPay = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.AmazonPay;
      export type AuBecsDebit = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.AuBecsDebit;
      export type BacsDebit = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.BacsDebit;
      export type Bancontact = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Bancontact;
      export type Billie = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Billie;
      export type Bizum = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Bizum;
      export type Blik = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Blik;
      export type Boleto = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Boleto;
      export type Card = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card;
      export type CardPresent = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.CardPresent;
      export type Cashapp = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Cashapp;
      export type Crypto = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Crypto;
      export type CustomerBalance = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.CustomerBalance;
      export type Eps = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Eps;
      export type Fpx = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Fpx;
      export type Giropay = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Giropay;
      export type Grabpay = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Grabpay;
      export type Ideal = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Ideal;
      export type InteracPresent = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.InteracPresent;
      export type KakaoPay = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.KakaoPay;
      export type Klarna = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Klarna;
      export type Konbini = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Konbini;
      export type KrCard = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.KrCard;
      export type Link = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Link;
      export type MbWay = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.MbWay;
      export type Mobilepay = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Mobilepay;
      export type Multibanco = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Multibanco;
      export type NaverPay = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.NaverPay;
      export type NzBankAccount = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.NzBankAccount;
      export type Oxxo = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Oxxo;
      export type P24 = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.P24;
      export type PayByBank = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.PayByBank;
      export type Payco = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Payco;
      export type Paynow = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Paynow;
      export type Paypal = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Paypal;
      export type Payto = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Payto;
      export type Pix = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Pix;
      export type Promptpay = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Promptpay;
      export type RevolutPay = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.RevolutPay;
      export type SamsungPay = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.SamsungPay;
      export type Satispay = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Satispay;
      export type Scalapay = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Scalapay;
      export type SepaDebit = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.SepaDebit;
      export type Sofort = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Sofort;
      export type Sunbit = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Sunbit;
      export type Swish = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Swish;
      export type Twint = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Twint;
      export type Upi = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Upi;
      export type UsBankAccount = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount;
      export type WechatPay = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.WechatPay;
      export type Zip = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Zip;
      export namespace AcssDebit {
        export type MandateOptions = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.AcssDebit.SetupFutureUsage;
        export type VerificationMethod = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.AcssDebit.VerificationMethod;
        export namespace MandateOptions {
          export type PaymentSchedule = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
          export type TransactionType = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
        }
      }
      export namespace Alipay {
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Alipay.SetupFutureUsage;
      }
      export namespace AmazonPay {
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.AmazonPay.SetupFutureUsage;
      }
      export namespace AuBecsDebit {
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.AuBecsDebit.SetupFutureUsage;
      }
      export namespace BacsDebit {
        export type MandateOptions = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.BacsDebit.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.BacsDebit.SetupFutureUsage;
      }
      export namespace Bancontact {
        export type PreferredLanguage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Bancontact.PreferredLanguage;
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Bancontact.SetupFutureUsage;
      }
      export namespace Boleto {
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Boleto.SetupFutureUsage;
      }
      export namespace Card {
        export type Installments = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.Installments;
        export type MandateOptions = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.MandateOptions;
        export type Network = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.Network;
        export type RequestExtendedAuthorization = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.RequestExtendedAuthorization;
        export type RequestIncrementalAuthorization = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.RequestIncrementalAuthorization;
        export type RequestMulticapture = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.RequestMulticapture;
        export type RequestOvercapture = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.RequestOvercapture;
        export type RequestThreeDSecure = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.RequestThreeDSecure;
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.SetupFutureUsage;
        export type ThreeDSecure = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure;
        export namespace Installments {
          export type Plan = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.Installments.Plan;
          export namespace Plan {
            export type Type = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.Installments.Plan.Type;
          }
        }
        export namespace MandateOptions {
          export type AmountType = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.MandateOptions.AmountType;
          export type Interval = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.MandateOptions.Interval;
        }
        export namespace ThreeDSecure {
          export type AresTransStatus = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.AresTransStatus;
          export type ElectronicCommerceIndicator = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type ExemptionIndicator = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.ExemptionIndicator;
          export type NetworkOptions = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions;
          export type Version = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.Version;
          export namespace NetworkOptions {
            export type CartesBancaires = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires;
            export namespace CartesBancaires {
              export type CbAvalgo = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires.CbAvalgo;
            }
          }
        }
      }
      export namespace CardPresent {
        export type CaptureMethod = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.CardPresent.CaptureMethod;
        export type Routing = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.CardPresent.Routing;
        export namespace Routing {
          export type RequestedPriority = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.CardPresent.Routing.RequestedPriority;
        }
      }
      export namespace Cashapp {
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Cashapp.SetupFutureUsage;
      }
      export namespace CustomerBalance {
        export type BankTransfer = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.CustomerBalance.BankTransfer;
        export namespace BankTransfer {
          export type EuBankTransfer = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
          export type RequestedAddressType = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.RequestedAddressType;
          export type Type = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.Type;
        }
      }
      export namespace Ideal {
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Ideal.SetupFutureUsage;
      }
      export namespace KakaoPay {
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.KakaoPay.SetupFutureUsage;
      }
      export namespace Klarna {
        export type OnDemand = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Klarna.OnDemand;
        export type PreferredLocale = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Klarna.PreferredLocale;
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Klarna.SetupFutureUsage;
        export type Subscription = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Klarna.Subscription;
        export namespace OnDemand {
          export type PurchaseInterval = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Klarna.OnDemand.PurchaseInterval;
        }
        export namespace Subscription {
          export type Interval = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Klarna.Subscription.Interval;
          export type NextBilling = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Klarna.Subscription.NextBilling;
        }
      }
      export namespace KrCard {
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.KrCard.SetupFutureUsage;
      }
      export namespace Link {
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Link.SetupFutureUsage;
      }
      export namespace NaverPay {
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.NaverPay.SetupFutureUsage;
      }
      export namespace NzBankAccount {
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.NzBankAccount.SetupFutureUsage;
      }
      export namespace Paypal {
        export type PreferredLocale = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Paypal.PreferredLocale;
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Paypal.SetupFutureUsage;
      }
      export namespace Payto {
        export type MandateOptions = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Payto.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Payto.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Payto.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
          export type Purpose = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Payto.MandateOptions.Purpose;
        }
      }
      export namespace Pix {
        export type AmountIncludesIof = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Pix.AmountIncludesIof;
        export type MandateOptions = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Pix.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Pix.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountIncludesIof = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
          export type AmountType = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Pix.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
        }
      }
      export namespace RevolutPay {
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.RevolutPay.SetupFutureUsage;
      }
      export namespace Satispay {
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Satispay.SetupFutureUsage;
      }
      export namespace SepaDebit {
        export type MandateOptions = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.SepaDebit.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.SepaDebit.SetupFutureUsage;
      }
      export namespace Sofort {
        export type PreferredLanguage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Sofort.PreferredLanguage;
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Sofort.SetupFutureUsage;
      }
      export namespace Twint {
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Twint.SetupFutureUsage;
      }
      export namespace Upi {
        export type MandateOptions = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Upi.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Upi.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type FinancialConnections = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections;
        export type MandateOptions = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.MandateOptions;
        export type Networks = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.Networks;
        export type SetupFutureUsage = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.SetupFutureUsage;
        export type TransactionPurpose = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.TransactionPurpose;
        export type VerificationMethod = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.VerificationMethod;
        export namespace FinancialConnections {
          export type Filters = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
          export type Permission = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
          export type Prefetch = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          export namespace Filters {
            export type AccountSubcategory = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
          }
        }
        export namespace Networks {
          export type Requested = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.Networks.Requested;
        }
      }
      export namespace WechatPay {
        export type Client = Stripe_.PaymentIntentCreateParams.PaymentMethodOptions.WechatPay.Client;
      }
    }
    export namespace TransferData {
      export type PaymentData = Stripe_.PaymentIntentCreateParams.TransferData.PaymentData;
    }
  }
  export namespace PaymentIntentUpdateParams {
    export type AmountDetails = Stripe_.PaymentIntentUpdateParams.AmountDetails;
    export type CaptureMethod = Stripe_.PaymentIntentUpdateParams.CaptureMethod;
    export type ExcludedPaymentMethodType = Stripe_.PaymentIntentUpdateParams.ExcludedPaymentMethodType;
    export type Hooks = Stripe_.PaymentIntentUpdateParams.Hooks;
    export type PaymentDetails = Stripe_.PaymentIntentUpdateParams.PaymentDetails;
    export type PaymentMethodData = Stripe_.PaymentIntentUpdateParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions;
    export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.SetupFutureUsage;
    export type Shipping = Stripe_.PaymentIntentUpdateParams.Shipping;
    export type TransferData = Stripe_.PaymentIntentUpdateParams.TransferData;
    export namespace AmountDetails {
      export type LineItem = Stripe_.PaymentIntentUpdateParams.AmountDetails.LineItem;
      export type Shipping = Stripe_.PaymentIntentUpdateParams.AmountDetails.Shipping;
      export type Tax = Stripe_.PaymentIntentUpdateParams.AmountDetails.Tax;
      export namespace LineItem {
        export type PaymentMethodOptions = Stripe_.PaymentIntentUpdateParams.AmountDetails.LineItem.PaymentMethodOptions;
        export type Tax = Stripe_.PaymentIntentUpdateParams.AmountDetails.LineItem.Tax;
        export namespace PaymentMethodOptions {
          export type Card = Stripe_.PaymentIntentUpdateParams.AmountDetails.LineItem.PaymentMethodOptions.Card;
          export type CardPresent = Stripe_.PaymentIntentUpdateParams.AmountDetails.LineItem.PaymentMethodOptions.CardPresent;
          export type Klarna = Stripe_.PaymentIntentUpdateParams.AmountDetails.LineItem.PaymentMethodOptions.Klarna;
          export type Paypal = Stripe_.PaymentIntentUpdateParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal;
          export namespace Paypal {
            export type Category = Stripe_.PaymentIntentUpdateParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal.Category;
          }
        }
      }
    }
    export namespace Hooks {
      export type Inputs = Stripe_.PaymentIntentUpdateParams.Hooks.Inputs;
      export namespace Inputs {
        export type Tax = Stripe_.PaymentIntentUpdateParams.Hooks.Inputs.Tax;
      }
    }
    export namespace PaymentMethodData {
      export type AcssDebit = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.AcssDebit;
      export type Affirm = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Affirm;
      export type AfterpayClearpay = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.AfterpayClearpay;
      export type Alipay = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Alipay;
      export type AllowRedisplay = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.AllowRedisplay;
      export type Alma = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Alma;
      export type AmazonPay = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.AmazonPay;
      export type AuBecsDebit = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.AuBecsDebit;
      export type BacsDebit = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.BacsDebit;
      export type Bancontact = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Bancontact;
      export type Billie = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Billie;
      export type BillingDetails = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.BillingDetails;
      export type Bizum = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Bizum;
      export type Blik = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Blik;
      export type Boleto = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Boleto;
      export type Cashapp = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Cashapp;
      export type Crypto = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Crypto;
      export type CustomerBalance = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.CustomerBalance;
      export type Eps = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Eps;
      export type Fpx = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Fpx;
      export type Giropay = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Giropay;
      export type Grabpay = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Grabpay;
      export type Ideal = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Ideal;
      export type InteracPresent = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.InteracPresent;
      export type KakaoPay = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.KakaoPay;
      export type Klarna = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Klarna;
      export type Konbini = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Konbini;
      export type KrCard = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.KrCard;
      export type Link = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Link;
      export type MbWay = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.MbWay;
      export type Mobilepay = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Mobilepay;
      export type Multibanco = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Multibanco;
      export type NaverPay = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.NaverPay;
      export type NzBankAccount = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.NzBankAccount;
      export type Oxxo = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Oxxo;
      export type P24 = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.P24;
      export type PayByBank = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.PayByBank;
      export type Payco = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Payco;
      export type Paynow = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Paynow;
      export type Paypal = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Paypal;
      export type Payto = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Payto;
      export type Pix = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Pix;
      export type Promptpay = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Promptpay;
      export type RadarOptions = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.RadarOptions;
      export type RevolutPay = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.RevolutPay;
      export type SamsungPay = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.SamsungPay;
      export type Satispay = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Satispay;
      export type Scalapay = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Scalapay;
      export type SepaDebit = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.SepaDebit;
      export type Sofort = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Sofort;
      export type Sunbit = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Sunbit;
      export type Swish = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Swish;
      export type Twint = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Twint;
      export type Type = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Type;
      export type Upi = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Upi;
      export type UsBankAccount = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.UsBankAccount;
      export type WechatPay = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.WechatPay;
      export type Zip = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Zip;
      export namespace Eps {
        export type Bank = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Fpx.AccountHolderType;
        export type Bank = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Ideal.Bank;
      }
      export namespace Klarna {
        export type Dob = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Klarna.Dob;
      }
      export namespace NaverPay {
        export type Funding = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.NaverPay.Funding;
      }
      export namespace P24 {
        export type Bank = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.P24.Bank;
      }
      export namespace Sofort {
        export type Country = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Sofort.Country;
      }
      export namespace Upi {
        export type MandateOptions = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Upi.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe_.PaymentIntentUpdateParams.PaymentMethodData.UsBankAccount.AccountType;
      }
    }
    export namespace PaymentMethodOptions {
      export type AcssDebit = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.AcssDebit;
      export type Affirm = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Affirm;
      export type AfterpayClearpay = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.AfterpayClearpay;
      export type Alipay = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Alipay;
      export type Alma = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Alma;
      export type AmazonPay = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.AmazonPay;
      export type AuBecsDebit = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.AuBecsDebit;
      export type BacsDebit = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.BacsDebit;
      export type Bancontact = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Bancontact;
      export type Billie = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Billie;
      export type Bizum = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Bizum;
      export type Blik = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Blik;
      export type Boleto = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Boleto;
      export type Card = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card;
      export type CardPresent = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.CardPresent;
      export type Cashapp = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Cashapp;
      export type Crypto = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Crypto;
      export type CustomerBalance = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.CustomerBalance;
      export type Eps = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Eps;
      export type Fpx = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Fpx;
      export type Giropay = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Giropay;
      export type Grabpay = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Grabpay;
      export type Ideal = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Ideal;
      export type InteracPresent = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.InteracPresent;
      export type KakaoPay = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.KakaoPay;
      export type Klarna = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Klarna;
      export type Konbini = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Konbini;
      export type KrCard = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.KrCard;
      export type Link = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Link;
      export type MbWay = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.MbWay;
      export type Mobilepay = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Mobilepay;
      export type Multibanco = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Multibanco;
      export type NaverPay = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.NaverPay;
      export type NzBankAccount = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.NzBankAccount;
      export type Oxxo = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Oxxo;
      export type P24 = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.P24;
      export type PayByBank = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.PayByBank;
      export type Payco = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Payco;
      export type Paynow = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Paynow;
      export type Paypal = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Paypal;
      export type Payto = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Payto;
      export type Pix = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Pix;
      export type Promptpay = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Promptpay;
      export type RevolutPay = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.RevolutPay;
      export type SamsungPay = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.SamsungPay;
      export type Satispay = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Satispay;
      export type Scalapay = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Scalapay;
      export type SepaDebit = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.SepaDebit;
      export type Sofort = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Sofort;
      export type Sunbit = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Sunbit;
      export type Swish = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Swish;
      export type Twint = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Twint;
      export type Upi = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Upi;
      export type UsBankAccount = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount;
      export type WechatPay = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.WechatPay;
      export type Zip = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Zip;
      export namespace AcssDebit {
        export type MandateOptions = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.AcssDebit.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.AcssDebit.SetupFutureUsage;
        export type VerificationMethod = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.AcssDebit.VerificationMethod;
        export namespace MandateOptions {
          export type PaymentSchedule = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
          export type TransactionType = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
        }
      }
      export namespace Alipay {
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Alipay.SetupFutureUsage;
      }
      export namespace AmazonPay {
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.AmazonPay.SetupFutureUsage;
      }
      export namespace AuBecsDebit {
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.AuBecsDebit.SetupFutureUsage;
      }
      export namespace BacsDebit {
        export type MandateOptions = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.BacsDebit.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.BacsDebit.SetupFutureUsage;
      }
      export namespace Bancontact {
        export type PreferredLanguage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Bancontact.PreferredLanguage;
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Bancontact.SetupFutureUsage;
      }
      export namespace Boleto {
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Boleto.SetupFutureUsage;
      }
      export namespace Card {
        export type Installments = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.Installments;
        export type MandateOptions = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.MandateOptions;
        export type Network = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.Network;
        export type RequestExtendedAuthorization = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.RequestExtendedAuthorization;
        export type RequestIncrementalAuthorization = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.RequestIncrementalAuthorization;
        export type RequestMulticapture = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.RequestMulticapture;
        export type RequestOvercapture = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.RequestOvercapture;
        export type RequestThreeDSecure = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.RequestThreeDSecure;
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.SetupFutureUsage;
        export type ThreeDSecure = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure;
        export namespace Installments {
          export type Plan = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.Installments.Plan;
          export namespace Plan {
            export type Type = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.Installments.Plan.Type;
          }
        }
        export namespace MandateOptions {
          export type AmountType = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.MandateOptions.AmountType;
          export type Interval = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.MandateOptions.Interval;
        }
        export namespace ThreeDSecure {
          export type AresTransStatus = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.AresTransStatus;
          export type ElectronicCommerceIndicator = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type ExemptionIndicator = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.ExemptionIndicator;
          export type NetworkOptions = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions;
          export type Version = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.Version;
          export namespace NetworkOptions {
            export type CartesBancaires = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires;
            export namespace CartesBancaires {
              export type CbAvalgo = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires.CbAvalgo;
            }
          }
        }
      }
      export namespace CardPresent {
        export type CaptureMethod = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.CardPresent.CaptureMethod;
        export type Routing = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.CardPresent.Routing;
        export namespace Routing {
          export type RequestedPriority = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.CardPresent.Routing.RequestedPriority;
        }
      }
      export namespace Cashapp {
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Cashapp.SetupFutureUsage;
      }
      export namespace CustomerBalance {
        export type BankTransfer = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.CustomerBalance.BankTransfer;
        export namespace BankTransfer {
          export type EuBankTransfer = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
          export type RequestedAddressType = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.RequestedAddressType;
          export type Type = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.Type;
        }
      }
      export namespace Ideal {
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Ideal.SetupFutureUsage;
      }
      export namespace KakaoPay {
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.KakaoPay.SetupFutureUsage;
      }
      export namespace Klarna {
        export type OnDemand = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Klarna.OnDemand;
        export type PreferredLocale = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Klarna.PreferredLocale;
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Klarna.SetupFutureUsage;
        export type Subscription = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Klarna.Subscription;
        export namespace OnDemand {
          export type PurchaseInterval = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Klarna.OnDemand.PurchaseInterval;
        }
        export namespace Subscription {
          export type Interval = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Klarna.Subscription.Interval;
          export type NextBilling = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Klarna.Subscription.NextBilling;
        }
      }
      export namespace KrCard {
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.KrCard.SetupFutureUsage;
      }
      export namespace Link {
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Link.SetupFutureUsage;
      }
      export namespace NaverPay {
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.NaverPay.SetupFutureUsage;
      }
      export namespace NzBankAccount {
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.NzBankAccount.SetupFutureUsage;
      }
      export namespace Paypal {
        export type PreferredLocale = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Paypal.PreferredLocale;
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Paypal.SetupFutureUsage;
      }
      export namespace Payto {
        export type MandateOptions = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Payto.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Payto.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Payto.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
          export type Purpose = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Payto.MandateOptions.Purpose;
        }
      }
      export namespace Pix {
        export type AmountIncludesIof = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Pix.AmountIncludesIof;
        export type MandateOptions = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Pix.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Pix.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountIncludesIof = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
          export type AmountType = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Pix.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
        }
      }
      export namespace RevolutPay {
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.RevolutPay.SetupFutureUsage;
      }
      export namespace Satispay {
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Satispay.SetupFutureUsage;
      }
      export namespace SepaDebit {
        export type MandateOptions = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.SepaDebit.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.SepaDebit.SetupFutureUsage;
      }
      export namespace Sofort {
        export type PreferredLanguage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Sofort.PreferredLanguage;
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Sofort.SetupFutureUsage;
      }
      export namespace Twint {
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Twint.SetupFutureUsage;
      }
      export namespace Upi {
        export type MandateOptions = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Upi.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Upi.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type FinancialConnections = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections;
        export type MandateOptions = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.MandateOptions;
        export type Networks = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.Networks;
        export type SetupFutureUsage = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.SetupFutureUsage;
        export type TransactionPurpose = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.TransactionPurpose;
        export type VerificationMethod = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.VerificationMethod;
        export namespace FinancialConnections {
          export type Filters = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
          export type Permission = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
          export type Prefetch = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          export namespace Filters {
            export type AccountSubcategory = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
          }
        }
        export namespace Networks {
          export type Requested = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.Networks.Requested;
        }
      }
      export namespace WechatPay {
        export type Client = Stripe_.PaymentIntentUpdateParams.PaymentMethodOptions.WechatPay.Client;
      }
    }
    export namespace TransferData {
      export type PaymentData = Stripe_.PaymentIntentUpdateParams.TransferData.PaymentData;
    }
  }
  export namespace PaymentIntentCancelParams {
    export type CancellationReason = Stripe_.PaymentIntentCancelParams.CancellationReason;
  }
  export namespace PaymentIntentCaptureParams {
    export type AmountDetails = Stripe_.PaymentIntentCaptureParams.AmountDetails;
    export type Hooks = Stripe_.PaymentIntentCaptureParams.Hooks;
    export type PaymentDetails = Stripe_.PaymentIntentCaptureParams.PaymentDetails;
    export type TransferData = Stripe_.PaymentIntentCaptureParams.TransferData;
    export namespace AmountDetails {
      export type LineItem = Stripe_.PaymentIntentCaptureParams.AmountDetails.LineItem;
      export type Shipping = Stripe_.PaymentIntentCaptureParams.AmountDetails.Shipping;
      export type Tax = Stripe_.PaymentIntentCaptureParams.AmountDetails.Tax;
      export namespace LineItem {
        export type PaymentMethodOptions = Stripe_.PaymentIntentCaptureParams.AmountDetails.LineItem.PaymentMethodOptions;
        export type Tax = Stripe_.PaymentIntentCaptureParams.AmountDetails.LineItem.Tax;
        export namespace PaymentMethodOptions {
          export type Card = Stripe_.PaymentIntentCaptureParams.AmountDetails.LineItem.PaymentMethodOptions.Card;
          export type CardPresent = Stripe_.PaymentIntentCaptureParams.AmountDetails.LineItem.PaymentMethodOptions.CardPresent;
          export type Klarna = Stripe_.PaymentIntentCaptureParams.AmountDetails.LineItem.PaymentMethodOptions.Klarna;
          export type Paypal = Stripe_.PaymentIntentCaptureParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal;
          export namespace Paypal {
            export type Category = Stripe_.PaymentIntentCaptureParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal.Category;
          }
        }
      }
    }
    export namespace Hooks {
      export type Inputs = Stripe_.PaymentIntentCaptureParams.Hooks.Inputs;
      export namespace Inputs {
        export type Tax = Stripe_.PaymentIntentCaptureParams.Hooks.Inputs.Tax;
      }
    }
  }
  export namespace PaymentIntentConfirmParams {
    export type AmountDetails = Stripe_.PaymentIntentConfirmParams.AmountDetails;
    export type CaptureMethod = Stripe_.PaymentIntentConfirmParams.CaptureMethod;
    export type ExcludedPaymentMethodType = Stripe_.PaymentIntentConfirmParams.ExcludedPaymentMethodType;
    export type Hooks = Stripe_.PaymentIntentConfirmParams.Hooks;
    export type MandateData = Stripe_.PaymentIntentConfirmParams.MandateData;
    export type OffSession = Stripe_.PaymentIntentConfirmParams.OffSession;
    export type PaymentDetails = Stripe_.PaymentIntentConfirmParams.PaymentDetails;
    export type PaymentMethodData = Stripe_.PaymentIntentConfirmParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions;
    export type RadarOptions = Stripe_.PaymentIntentConfirmParams.RadarOptions;
    export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.SetupFutureUsage;
    export type Shipping = Stripe_.PaymentIntentConfirmParams.Shipping;
    export namespace AmountDetails {
      export type LineItem = Stripe_.PaymentIntentConfirmParams.AmountDetails.LineItem;
      export type Shipping = Stripe_.PaymentIntentConfirmParams.AmountDetails.Shipping;
      export type Tax = Stripe_.PaymentIntentConfirmParams.AmountDetails.Tax;
      export namespace LineItem {
        export type PaymentMethodOptions = Stripe_.PaymentIntentConfirmParams.AmountDetails.LineItem.PaymentMethodOptions;
        export type Tax = Stripe_.PaymentIntentConfirmParams.AmountDetails.LineItem.Tax;
        export namespace PaymentMethodOptions {
          export type Card = Stripe_.PaymentIntentConfirmParams.AmountDetails.LineItem.PaymentMethodOptions.Card;
          export type CardPresent = Stripe_.PaymentIntentConfirmParams.AmountDetails.LineItem.PaymentMethodOptions.CardPresent;
          export type Klarna = Stripe_.PaymentIntentConfirmParams.AmountDetails.LineItem.PaymentMethodOptions.Klarna;
          export type Paypal = Stripe_.PaymentIntentConfirmParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal;
          export namespace Paypal {
            export type Category = Stripe_.PaymentIntentConfirmParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal.Category;
          }
        }
      }
    }
    export namespace Hooks {
      export type Inputs = Stripe_.PaymentIntentConfirmParams.Hooks.Inputs;
      export namespace Inputs {
        export type Tax = Stripe_.PaymentIntentConfirmParams.Hooks.Inputs.Tax;
      }
    }
    export namespace MandateData {
      export type CustomerAcceptance = Stripe_.PaymentIntentConfirmParams.MandateData.CustomerAcceptance;
      export namespace CustomerAcceptance {
        export type Offline = Stripe_.PaymentIntentConfirmParams.MandateData.CustomerAcceptance.Offline;
        export type Online = Stripe_.PaymentIntentConfirmParams.MandateData.CustomerAcceptance.Online;
        export type Type = Stripe_.PaymentIntentConfirmParams.MandateData.CustomerAcceptance.Type;
      }
    }
    export namespace PaymentMethodData {
      export type AcssDebit = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.AcssDebit;
      export type Affirm = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Affirm;
      export type AfterpayClearpay = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.AfterpayClearpay;
      export type Alipay = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Alipay;
      export type AllowRedisplay = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.AllowRedisplay;
      export type Alma = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Alma;
      export type AmazonPay = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.AmazonPay;
      export type AuBecsDebit = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.AuBecsDebit;
      export type BacsDebit = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.BacsDebit;
      export type Bancontact = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Bancontact;
      export type Billie = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Billie;
      export type BillingDetails = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.BillingDetails;
      export type Bizum = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Bizum;
      export type Blik = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Blik;
      export type Boleto = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Boleto;
      export type Cashapp = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Cashapp;
      export type Crypto = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Crypto;
      export type CustomerBalance = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.CustomerBalance;
      export type Eps = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Eps;
      export type Fpx = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Fpx;
      export type Giropay = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Giropay;
      export type Grabpay = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Grabpay;
      export type Ideal = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Ideal;
      export type InteracPresent = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.InteracPresent;
      export type KakaoPay = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.KakaoPay;
      export type Klarna = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Klarna;
      export type Konbini = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Konbini;
      export type KrCard = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.KrCard;
      export type Link = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Link;
      export type MbWay = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.MbWay;
      export type Mobilepay = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Mobilepay;
      export type Multibanco = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Multibanco;
      export type NaverPay = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.NaverPay;
      export type NzBankAccount = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.NzBankAccount;
      export type Oxxo = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Oxxo;
      export type P24 = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.P24;
      export type PayByBank = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.PayByBank;
      export type Payco = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Payco;
      export type Paynow = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Paynow;
      export type Paypal = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Paypal;
      export type Payto = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Payto;
      export type Pix = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Pix;
      export type Promptpay = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Promptpay;
      export type RadarOptions = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.RadarOptions;
      export type RevolutPay = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.RevolutPay;
      export type SamsungPay = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.SamsungPay;
      export type Satispay = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Satispay;
      export type Scalapay = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Scalapay;
      export type SepaDebit = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.SepaDebit;
      export type Sofort = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Sofort;
      export type Sunbit = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Sunbit;
      export type Swish = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Swish;
      export type Twint = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Twint;
      export type Type = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Type;
      export type Upi = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Upi;
      export type UsBankAccount = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.UsBankAccount;
      export type WechatPay = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.WechatPay;
      export type Zip = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Zip;
      export namespace Eps {
        export type Bank = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Fpx.AccountHolderType;
        export type Bank = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Ideal.Bank;
      }
      export namespace Klarna {
        export type Dob = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Klarna.Dob;
      }
      export namespace NaverPay {
        export type Funding = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.NaverPay.Funding;
      }
      export namespace P24 {
        export type Bank = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.P24.Bank;
      }
      export namespace Sofort {
        export type Country = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Sofort.Country;
      }
      export namespace Upi {
        export type MandateOptions = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Upi.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe_.PaymentIntentConfirmParams.PaymentMethodData.UsBankAccount.AccountType;
      }
    }
    export namespace PaymentMethodOptions {
      export type AcssDebit = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.AcssDebit;
      export type Affirm = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Affirm;
      export type AfterpayClearpay = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.AfterpayClearpay;
      export type Alipay = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Alipay;
      export type Alma = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Alma;
      export type AmazonPay = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.AmazonPay;
      export type AuBecsDebit = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.AuBecsDebit;
      export type BacsDebit = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.BacsDebit;
      export type Bancontact = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Bancontact;
      export type Billie = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Billie;
      export type Bizum = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Bizum;
      export type Blik = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Blik;
      export type Boleto = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Boleto;
      export type Card = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card;
      export type CardPresent = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.CardPresent;
      export type Cashapp = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Cashapp;
      export type Crypto = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Crypto;
      export type CustomerBalance = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.CustomerBalance;
      export type Eps = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Eps;
      export type Fpx = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Fpx;
      export type Giropay = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Giropay;
      export type Grabpay = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Grabpay;
      export type Ideal = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Ideal;
      export type InteracPresent = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.InteracPresent;
      export type KakaoPay = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.KakaoPay;
      export type Klarna = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Klarna;
      export type Konbini = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Konbini;
      export type KrCard = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.KrCard;
      export type Link = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Link;
      export type MbWay = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.MbWay;
      export type Mobilepay = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Mobilepay;
      export type Multibanco = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Multibanco;
      export type NaverPay = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.NaverPay;
      export type NzBankAccount = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.NzBankAccount;
      export type Oxxo = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Oxxo;
      export type P24 = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.P24;
      export type PayByBank = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.PayByBank;
      export type Payco = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Payco;
      export type Paynow = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Paynow;
      export type Paypal = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Paypal;
      export type Payto = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Payto;
      export type Pix = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Pix;
      export type Promptpay = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Promptpay;
      export type RevolutPay = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.RevolutPay;
      export type SamsungPay = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.SamsungPay;
      export type Satispay = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Satispay;
      export type Scalapay = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Scalapay;
      export type SepaDebit = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.SepaDebit;
      export type Sofort = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Sofort;
      export type Sunbit = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Sunbit;
      export type Swish = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Swish;
      export type Twint = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Twint;
      export type Upi = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Upi;
      export type UsBankAccount = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount;
      export type WechatPay = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.WechatPay;
      export type Zip = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Zip;
      export namespace AcssDebit {
        export type MandateOptions = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.AcssDebit.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.AcssDebit.SetupFutureUsage;
        export type VerificationMethod = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.AcssDebit.VerificationMethod;
        export namespace MandateOptions {
          export type PaymentSchedule = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
          export type TransactionType = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
        }
      }
      export namespace Alipay {
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Alipay.SetupFutureUsage;
      }
      export namespace AmazonPay {
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.AmazonPay.SetupFutureUsage;
      }
      export namespace AuBecsDebit {
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.AuBecsDebit.SetupFutureUsage;
      }
      export namespace BacsDebit {
        export type MandateOptions = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.BacsDebit.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.BacsDebit.SetupFutureUsage;
      }
      export namespace Bancontact {
        export type PreferredLanguage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Bancontact.PreferredLanguage;
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Bancontact.SetupFutureUsage;
      }
      export namespace Boleto {
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Boleto.SetupFutureUsage;
      }
      export namespace Card {
        export type Installments = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.Installments;
        export type MandateOptions = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.MandateOptions;
        export type Network = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.Network;
        export type RequestExtendedAuthorization = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.RequestExtendedAuthorization;
        export type RequestIncrementalAuthorization = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.RequestIncrementalAuthorization;
        export type RequestMulticapture = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.RequestMulticapture;
        export type RequestOvercapture = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.RequestOvercapture;
        export type RequestThreeDSecure = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.RequestThreeDSecure;
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.SetupFutureUsage;
        export type ThreeDSecure = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure;
        export namespace Installments {
          export type Plan = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.Installments.Plan;
          export namespace Plan {
            export type Type = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.Installments.Plan.Type;
          }
        }
        export namespace MandateOptions {
          export type AmountType = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.MandateOptions.AmountType;
          export type Interval = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.MandateOptions.Interval;
        }
        export namespace ThreeDSecure {
          export type AresTransStatus = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.AresTransStatus;
          export type ElectronicCommerceIndicator = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type ExemptionIndicator = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.ExemptionIndicator;
          export type NetworkOptions = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions;
          export type Version = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.Version;
          export namespace NetworkOptions {
            export type CartesBancaires = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires;
            export namespace CartesBancaires {
              export type CbAvalgo = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires.CbAvalgo;
            }
          }
        }
      }
      export namespace CardPresent {
        export type CaptureMethod = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.CardPresent.CaptureMethod;
        export type Routing = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.CardPresent.Routing;
        export namespace Routing {
          export type RequestedPriority = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.CardPresent.Routing.RequestedPriority;
        }
      }
      export namespace Cashapp {
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Cashapp.SetupFutureUsage;
      }
      export namespace CustomerBalance {
        export type BankTransfer = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.CustomerBalance.BankTransfer;
        export namespace BankTransfer {
          export type EuBankTransfer = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
          export type RequestedAddressType = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.CustomerBalance.BankTransfer.RequestedAddressType;
          export type Type = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.CustomerBalance.BankTransfer.Type;
        }
      }
      export namespace Ideal {
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Ideal.SetupFutureUsage;
      }
      export namespace KakaoPay {
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.KakaoPay.SetupFutureUsage;
      }
      export namespace Klarna {
        export type OnDemand = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Klarna.OnDemand;
        export type PreferredLocale = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Klarna.PreferredLocale;
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Klarna.SetupFutureUsage;
        export type Subscription = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Klarna.Subscription;
        export namespace OnDemand {
          export type PurchaseInterval = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Klarna.OnDemand.PurchaseInterval;
        }
        export namespace Subscription {
          export type Interval = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Klarna.Subscription.Interval;
          export type NextBilling = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Klarna.Subscription.NextBilling;
        }
      }
      export namespace KrCard {
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.KrCard.SetupFutureUsage;
      }
      export namespace Link {
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Link.SetupFutureUsage;
      }
      export namespace NaverPay {
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.NaverPay.SetupFutureUsage;
      }
      export namespace NzBankAccount {
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.NzBankAccount.SetupFutureUsage;
      }
      export namespace Paypal {
        export type PreferredLocale = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Paypal.PreferredLocale;
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Paypal.SetupFutureUsage;
      }
      export namespace Payto {
        export type MandateOptions = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Payto.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Payto.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Payto.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
          export type Purpose = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Payto.MandateOptions.Purpose;
        }
      }
      export namespace Pix {
        export type AmountIncludesIof = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Pix.AmountIncludesIof;
        export type MandateOptions = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Pix.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Pix.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountIncludesIof = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
          export type AmountType = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Pix.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
        }
      }
      export namespace RevolutPay {
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.RevolutPay.SetupFutureUsage;
      }
      export namespace Satispay {
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Satispay.SetupFutureUsage;
      }
      export namespace SepaDebit {
        export type MandateOptions = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.SepaDebit.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.SepaDebit.SetupFutureUsage;
      }
      export namespace Sofort {
        export type PreferredLanguage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Sofort.PreferredLanguage;
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Sofort.SetupFutureUsage;
      }
      export namespace Twint {
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Twint.SetupFutureUsage;
      }
      export namespace Upi {
        export type MandateOptions = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Upi.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Upi.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type FinancialConnections = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections;
        export type MandateOptions = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.MandateOptions;
        export type Networks = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.Networks;
        export type SetupFutureUsage = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.SetupFutureUsage;
        export type TransactionPurpose = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.TransactionPurpose;
        export type VerificationMethod = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.VerificationMethod;
        export namespace FinancialConnections {
          export type Filters = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
          export type Permission = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
          export type Prefetch = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          export namespace Filters {
            export type AccountSubcategory = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
          }
        }
        export namespace Networks {
          export type Requested = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.Networks.Requested;
        }
      }
      export namespace WechatPay {
        export type Client = Stripe_.PaymentIntentConfirmParams.PaymentMethodOptions.WechatPay.Client;
      }
    }
  }
  export namespace PaymentIntentIncrementAuthorizationParams {
    export type AmountDetails = Stripe_.PaymentIntentIncrementAuthorizationParams.AmountDetails;
    export type Hooks = Stripe_.PaymentIntentIncrementAuthorizationParams.Hooks;
    export type PaymentDetails = Stripe_.PaymentIntentIncrementAuthorizationParams.PaymentDetails;
    export type TransferData = Stripe_.PaymentIntentIncrementAuthorizationParams.TransferData;
    export namespace AmountDetails {
      export type LineItem = Stripe_.PaymentIntentIncrementAuthorizationParams.AmountDetails.LineItem;
      export type Shipping = Stripe_.PaymentIntentIncrementAuthorizationParams.AmountDetails.Shipping;
      export type Tax = Stripe_.PaymentIntentIncrementAuthorizationParams.AmountDetails.Tax;
      export namespace LineItem {
        export type PaymentMethodOptions = Stripe_.PaymentIntentIncrementAuthorizationParams.AmountDetails.LineItem.PaymentMethodOptions;
        export type Tax = Stripe_.PaymentIntentIncrementAuthorizationParams.AmountDetails.LineItem.Tax;
        export namespace PaymentMethodOptions {
          export type Card = Stripe_.PaymentIntentIncrementAuthorizationParams.AmountDetails.LineItem.PaymentMethodOptions.Card;
          export type CardPresent = Stripe_.PaymentIntentIncrementAuthorizationParams.AmountDetails.LineItem.PaymentMethodOptions.CardPresent;
          export type Klarna = Stripe_.PaymentIntentIncrementAuthorizationParams.AmountDetails.LineItem.PaymentMethodOptions.Klarna;
          export type Paypal = Stripe_.PaymentIntentIncrementAuthorizationParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal;
          export namespace Paypal {
            export type Category = Stripe_.PaymentIntentIncrementAuthorizationParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal.Category;
          }
        }
      }
    }
    export namespace Hooks {
      export type Inputs = Stripe_.PaymentIntentIncrementAuthorizationParams.Hooks.Inputs;
      export namespace Inputs {
        export type Tax = Stripe_.PaymentIntentIncrementAuthorizationParams.Hooks.Inputs.Tax;
      }
    }
  }
  export namespace PaymentIntent {
    export type AmountDetails = Stripe_.PaymentIntent.AmountDetails;
    export type AutomaticPaymentMethods = Stripe_.PaymentIntent.AutomaticPaymentMethods;
    export type CancellationReason = Stripe_.PaymentIntent.CancellationReason;
    export type CaptureMethod = Stripe_.PaymentIntent.CaptureMethod;
    export type ConfirmationMethod = Stripe_.PaymentIntent.ConfirmationMethod;
    export type ExcludedPaymentMethodType = Stripe_.PaymentIntent.ExcludedPaymentMethodType;
    export type Hooks = Stripe_.PaymentIntent.Hooks;
    export type LastPaymentError = Stripe_.PaymentIntent.LastPaymentError;
    export type ManagedPayments = Stripe_.PaymentIntent.ManagedPayments;
    export type NextAction = Stripe_.PaymentIntent.NextAction;
    export type PaymentDetails = Stripe_.PaymentIntent.PaymentDetails;
    export type PaymentMethodConfigurationDetails = Stripe_.PaymentIntent.PaymentMethodConfigurationDetails;
    export type PaymentMethodOptions = Stripe_.PaymentIntent.PaymentMethodOptions;
    export type PresentmentDetails = Stripe_.PaymentIntent.PresentmentDetails;
    export type Processing = Stripe_.PaymentIntent.Processing;
    export type SetupFutureUsage = Stripe_.PaymentIntent.SetupFutureUsage;
    export type Shipping = Stripe_.PaymentIntent.Shipping;
    export type Status = Stripe_.PaymentIntent.Status;
    export type TransferData = Stripe_.PaymentIntent.TransferData;
    export namespace AmountDetails {
      export type Error = Stripe_.PaymentIntent.AmountDetails.Error;
      export type Shipping = Stripe_.PaymentIntent.AmountDetails.Shipping;
      export type Tax = Stripe_.PaymentIntent.AmountDetails.Tax;
      export type Tip = Stripe_.PaymentIntent.AmountDetails.Tip;
      export namespace Error {
        export type Code = Stripe_.PaymentIntent.AmountDetails.Error.Code;
      }
    }
    export namespace AutomaticPaymentMethods {
      export type AllowRedirects = Stripe_.PaymentIntent.AutomaticPaymentMethods.AllowRedirects;
    }
    export namespace Hooks {
      export type Inputs = Stripe_.PaymentIntent.Hooks.Inputs;
      export namespace Inputs {
        export type Tax = Stripe_.PaymentIntent.Hooks.Inputs.Tax;
      }
    }
    export namespace LastPaymentError {
      export type Code = Stripe_.PaymentIntent.LastPaymentError.Code;
      export type Type = Stripe_.PaymentIntent.LastPaymentError.Type;
    }
    export namespace NextAction {
      export type AlipayHandleRedirect = Stripe_.PaymentIntent.NextAction.AlipayHandleRedirect;
      export type BlikAuthorize = Stripe_.PaymentIntent.NextAction.BlikAuthorize;
      export type BoletoDisplayDetails = Stripe_.PaymentIntent.NextAction.BoletoDisplayDetails;
      export type CardAwaitNotification = Stripe_.PaymentIntent.NextAction.CardAwaitNotification;
      export type CashappHandleRedirectOrDisplayQrCode = Stripe_.PaymentIntent.NextAction.CashappHandleRedirectOrDisplayQrCode;
      export type DisplayBankTransferInstructions = Stripe_.PaymentIntent.NextAction.DisplayBankTransferInstructions;
      export type KlarnaDisplayQrCode = Stripe_.PaymentIntent.NextAction.KlarnaDisplayQrCode;
      export type KonbiniDisplayDetails = Stripe_.PaymentIntent.NextAction.KonbiniDisplayDetails;
      export type MultibancoDisplayDetails = Stripe_.PaymentIntent.NextAction.MultibancoDisplayDetails;
      export type OxxoDisplayDetails = Stripe_.PaymentIntent.NextAction.OxxoDisplayDetails;
      export type PaynowDisplayQrCode = Stripe_.PaymentIntent.NextAction.PaynowDisplayQrCode;
      export type PixDisplayQrCode = Stripe_.PaymentIntent.NextAction.PixDisplayQrCode;
      export type PromptpayDisplayQrCode = Stripe_.PaymentIntent.NextAction.PromptpayDisplayQrCode;
      export type RedirectToUrl = Stripe_.PaymentIntent.NextAction.RedirectToUrl;
      export type SwishHandleRedirectOrDisplayQrCode = Stripe_.PaymentIntent.NextAction.SwishHandleRedirectOrDisplayQrCode;
      export type UpiHandleRedirectOrDisplayQrCode = Stripe_.PaymentIntent.NextAction.UpiHandleRedirectOrDisplayQrCode;
      export type UseStripeSdk = Stripe_.PaymentIntent.NextAction.UseStripeSdk;
      export type VerifyWithMicrodeposits = Stripe_.PaymentIntent.NextAction.VerifyWithMicrodeposits;
      export type WechatPayDisplayQrCode = Stripe_.PaymentIntent.NextAction.WechatPayDisplayQrCode;
      export type WechatPayRedirectToAndroidApp = Stripe_.PaymentIntent.NextAction.WechatPayRedirectToAndroidApp;
      export type WechatPayRedirectToIosApp = Stripe_.PaymentIntent.NextAction.WechatPayRedirectToIosApp;
      export namespace CashappHandleRedirectOrDisplayQrCode {
        export type QrCode = Stripe_.PaymentIntent.NextAction.CashappHandleRedirectOrDisplayQrCode.QrCode;
      }
      export namespace DisplayBankTransferInstructions {
        export type FinancialAddress = Stripe_.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress;
        export type Type = Stripe_.PaymentIntent.NextAction.DisplayBankTransferInstructions.Type;
        export namespace FinancialAddress {
          export type Aba = Stripe_.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress.Aba;
          export type Iban = Stripe_.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress.Iban;
          export type SortCode = Stripe_.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress.SortCode;
          export type Spei = Stripe_.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress.Spei;
          export type SupportedNetwork = Stripe_.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress.SupportedNetwork;
          export type Swift = Stripe_.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress.Swift;
          export type Type = Stripe_.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress.Type;
          export type Zengin = Stripe_.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress.Zengin;
        }
      }
      export namespace KonbiniDisplayDetails {
        export type Stores = Stripe_.PaymentIntent.NextAction.KonbiniDisplayDetails.Stores;
        export namespace Stores {
          export type Familymart = Stripe_.PaymentIntent.NextAction.KonbiniDisplayDetails.Stores.Familymart;
          export type Lawson = Stripe_.PaymentIntent.NextAction.KonbiniDisplayDetails.Stores.Lawson;
          export type Ministop = Stripe_.PaymentIntent.NextAction.KonbiniDisplayDetails.Stores.Ministop;
          export type Seicomart = Stripe_.PaymentIntent.NextAction.KonbiniDisplayDetails.Stores.Seicomart;
        }
      }
      export namespace SwishHandleRedirectOrDisplayQrCode {
        export type QrCode = Stripe_.PaymentIntent.NextAction.SwishHandleRedirectOrDisplayQrCode.QrCode;
      }
      export namespace UpiHandleRedirectOrDisplayQrCode {
        export type QrCode = Stripe_.PaymentIntent.NextAction.UpiHandleRedirectOrDisplayQrCode.QrCode;
      }
      export namespace VerifyWithMicrodeposits {
        export type MicrodepositType = Stripe_.PaymentIntent.NextAction.VerifyWithMicrodeposits.MicrodepositType;
      }
    }
    export namespace PaymentMethodOptions {
      export type AcssDebit = Stripe_.PaymentIntent.PaymentMethodOptions.AcssDebit;
      export type Affirm = Stripe_.PaymentIntent.PaymentMethodOptions.Affirm;
      export type AfterpayClearpay = Stripe_.PaymentIntent.PaymentMethodOptions.AfterpayClearpay;
      export type Alipay = Stripe_.PaymentIntent.PaymentMethodOptions.Alipay;
      export type Alma = Stripe_.PaymentIntent.PaymentMethodOptions.Alma;
      export type AmazonPay = Stripe_.PaymentIntent.PaymentMethodOptions.AmazonPay;
      export type AuBecsDebit = Stripe_.PaymentIntent.PaymentMethodOptions.AuBecsDebit;
      export type BacsDebit = Stripe_.PaymentIntent.PaymentMethodOptions.BacsDebit;
      export type Bancontact = Stripe_.PaymentIntent.PaymentMethodOptions.Bancontact;
      export type Billie = Stripe_.PaymentIntent.PaymentMethodOptions.Billie;
      export type Bizum = Stripe_.PaymentIntent.PaymentMethodOptions.Bizum;
      export type Blik = Stripe_.PaymentIntent.PaymentMethodOptions.Blik;
      export type Boleto = Stripe_.PaymentIntent.PaymentMethodOptions.Boleto;
      export type Card = Stripe_.PaymentIntent.PaymentMethodOptions.Card;
      export type CardPresent = Stripe_.PaymentIntent.PaymentMethodOptions.CardPresent;
      export type Cashapp = Stripe_.PaymentIntent.PaymentMethodOptions.Cashapp;
      export type Crypto = Stripe_.PaymentIntent.PaymentMethodOptions.Crypto;
      export type CustomerBalance = Stripe_.PaymentIntent.PaymentMethodOptions.CustomerBalance;
      export type Eps = Stripe_.PaymentIntent.PaymentMethodOptions.Eps;
      export type Fpx = Stripe_.PaymentIntent.PaymentMethodOptions.Fpx;
      export type Giropay = Stripe_.PaymentIntent.PaymentMethodOptions.Giropay;
      export type Grabpay = Stripe_.PaymentIntent.PaymentMethodOptions.Grabpay;
      export type Ideal = Stripe_.PaymentIntent.PaymentMethodOptions.Ideal;
      export type InteracPresent = Stripe_.PaymentIntent.PaymentMethodOptions.InteracPresent;
      export type KakaoPay = Stripe_.PaymentIntent.PaymentMethodOptions.KakaoPay;
      export type Klarna = Stripe_.PaymentIntent.PaymentMethodOptions.Klarna;
      export type Konbini = Stripe_.PaymentIntent.PaymentMethodOptions.Konbini;
      export type KrCard = Stripe_.PaymentIntent.PaymentMethodOptions.KrCard;
      export type Link = Stripe_.PaymentIntent.PaymentMethodOptions.Link;
      export type MbWay = Stripe_.PaymentIntent.PaymentMethodOptions.MbWay;
      export type Mobilepay = Stripe_.PaymentIntent.PaymentMethodOptions.Mobilepay;
      export type Multibanco = Stripe_.PaymentIntent.PaymentMethodOptions.Multibanco;
      export type NaverPay = Stripe_.PaymentIntent.PaymentMethodOptions.NaverPay;
      export type NzBankAccount = Stripe_.PaymentIntent.PaymentMethodOptions.NzBankAccount;
      export type Oxxo = Stripe_.PaymentIntent.PaymentMethodOptions.Oxxo;
      export type P24 = Stripe_.PaymentIntent.PaymentMethodOptions.P24;
      export type PayByBank = Stripe_.PaymentIntent.PaymentMethodOptions.PayByBank;
      export type Payco = Stripe_.PaymentIntent.PaymentMethodOptions.Payco;
      export type Paynow = Stripe_.PaymentIntent.PaymentMethodOptions.Paynow;
      export type Paypal = Stripe_.PaymentIntent.PaymentMethodOptions.Paypal;
      export type Payto = Stripe_.PaymentIntent.PaymentMethodOptions.Payto;
      export type Pix = Stripe_.PaymentIntent.PaymentMethodOptions.Pix;
      export type Promptpay = Stripe_.PaymentIntent.PaymentMethodOptions.Promptpay;
      export type RevolutPay = Stripe_.PaymentIntent.PaymentMethodOptions.RevolutPay;
      export type SamsungPay = Stripe_.PaymentIntent.PaymentMethodOptions.SamsungPay;
      export type Satispay = Stripe_.PaymentIntent.PaymentMethodOptions.Satispay;
      export type Scalapay = Stripe_.PaymentIntent.PaymentMethodOptions.Scalapay;
      export type SepaDebit = Stripe_.PaymentIntent.PaymentMethodOptions.SepaDebit;
      export type Sofort = Stripe_.PaymentIntent.PaymentMethodOptions.Sofort;
      export type Sunbit = Stripe_.PaymentIntent.PaymentMethodOptions.Sunbit;
      export type Swish = Stripe_.PaymentIntent.PaymentMethodOptions.Swish;
      export type Twint = Stripe_.PaymentIntent.PaymentMethodOptions.Twint;
      export type Upi = Stripe_.PaymentIntent.PaymentMethodOptions.Upi;
      export type UsBankAccount = Stripe_.PaymentIntent.PaymentMethodOptions.UsBankAccount;
      export type WechatPay = Stripe_.PaymentIntent.PaymentMethodOptions.WechatPay;
      export type Zip = Stripe_.PaymentIntent.PaymentMethodOptions.Zip;
      export namespace AcssDebit {
        export type MandateOptions = Stripe_.PaymentIntent.PaymentMethodOptions.AcssDebit.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.AcssDebit.SetupFutureUsage;
        export type VerificationMethod = Stripe_.PaymentIntent.PaymentMethodOptions.AcssDebit.VerificationMethod;
        export namespace MandateOptions {
          export type PaymentSchedule = Stripe_.PaymentIntent.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
          export type TransactionType = Stripe_.PaymentIntent.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
        }
      }
      export namespace Alipay {
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.Alipay.SetupFutureUsage;
      }
      export namespace AmazonPay {
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.AmazonPay.SetupFutureUsage;
      }
      export namespace AuBecsDebit {
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.AuBecsDebit.SetupFutureUsage;
      }
      export namespace BacsDebit {
        export type MandateOptions = Stripe_.PaymentIntent.PaymentMethodOptions.BacsDebit.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.BacsDebit.SetupFutureUsage;
      }
      export namespace Bancontact {
        export type PreferredLanguage = Stripe_.PaymentIntent.PaymentMethodOptions.Bancontact.PreferredLanguage;
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.Bancontact.SetupFutureUsage;
      }
      export namespace Boleto {
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.Boleto.SetupFutureUsage;
      }
      export namespace Card {
        export type Installments = Stripe_.PaymentIntent.PaymentMethodOptions.Card.Installments;
        export type MandateOptions = Stripe_.PaymentIntent.PaymentMethodOptions.Card.MandateOptions;
        export type Network = Stripe_.PaymentIntent.PaymentMethodOptions.Card.Network;
        export type RequestExtendedAuthorization = Stripe_.PaymentIntent.PaymentMethodOptions.Card.RequestExtendedAuthorization;
        export type RequestIncrementalAuthorization = Stripe_.PaymentIntent.PaymentMethodOptions.Card.RequestIncrementalAuthorization;
        export type RequestMulticapture = Stripe_.PaymentIntent.PaymentMethodOptions.Card.RequestMulticapture;
        export type RequestOvercapture = Stripe_.PaymentIntent.PaymentMethodOptions.Card.RequestOvercapture;
        export type RequestThreeDSecure = Stripe_.PaymentIntent.PaymentMethodOptions.Card.RequestThreeDSecure;
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.Card.SetupFutureUsage;
        export namespace Installments {
          export type AvailablePlan = Stripe_.PaymentIntent.PaymentMethodOptions.Card.Installments.AvailablePlan;
          export type Plan = Stripe_.PaymentIntent.PaymentMethodOptions.Card.Installments.Plan;
          export namespace AvailablePlan {
            export type Type = Stripe_.PaymentIntent.PaymentMethodOptions.Card.Installments.AvailablePlan.Type;
          }
          export namespace Plan {
            export type Type = Stripe_.PaymentIntent.PaymentMethodOptions.Card.Installments.Plan.Type;
          }
        }
        export namespace MandateOptions {
          export type AmountType = Stripe_.PaymentIntent.PaymentMethodOptions.Card.MandateOptions.AmountType;
          export type Interval = Stripe_.PaymentIntent.PaymentMethodOptions.Card.MandateOptions.Interval;
        }
      }
      export namespace CardPresent {
        export type CaptureMethod = Stripe_.PaymentIntent.PaymentMethodOptions.CardPresent.CaptureMethod;
        export type Routing = Stripe_.PaymentIntent.PaymentMethodOptions.CardPresent.Routing;
        export namespace Routing {
          export type RequestedPriority = Stripe_.PaymentIntent.PaymentMethodOptions.CardPresent.Routing.RequestedPriority;
        }
      }
      export namespace Cashapp {
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.Cashapp.SetupFutureUsage;
      }
      export namespace CustomerBalance {
        export type BankTransfer = Stripe_.PaymentIntent.PaymentMethodOptions.CustomerBalance.BankTransfer;
        export namespace BankTransfer {
          export type EuBankTransfer = Stripe_.PaymentIntent.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
          export type RequestedAddressType = Stripe_.PaymentIntent.PaymentMethodOptions.CustomerBalance.BankTransfer.RequestedAddressType;
          export type Type = Stripe_.PaymentIntent.PaymentMethodOptions.CustomerBalance.BankTransfer.Type;
          export namespace EuBankTransfer {
            export type Country = Stripe_.PaymentIntent.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer.Country;
          }
        }
      }
      export namespace Ideal {
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.Ideal.SetupFutureUsage;
      }
      export namespace KakaoPay {
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.KakaoPay.SetupFutureUsage;
      }
      export namespace Klarna {
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.Klarna.SetupFutureUsage;
      }
      export namespace KrCard {
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.KrCard.SetupFutureUsage;
      }
      export namespace Link {
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.Link.SetupFutureUsage;
      }
      export namespace NaverPay {
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.NaverPay.SetupFutureUsage;
      }
      export namespace NzBankAccount {
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.NzBankAccount.SetupFutureUsage;
      }
      export namespace Paypal {
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.Paypal.SetupFutureUsage;
      }
      export namespace Payto {
        export type MandateOptions = Stripe_.PaymentIntent.PaymentMethodOptions.Payto.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.Payto.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe_.PaymentIntent.PaymentMethodOptions.Payto.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe_.PaymentIntent.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
          export type Purpose = Stripe_.PaymentIntent.PaymentMethodOptions.Payto.MandateOptions.Purpose;
        }
      }
      export namespace Pix {
        export type AmountIncludesIof = Stripe_.PaymentIntent.PaymentMethodOptions.Pix.AmountIncludesIof;
        export type MandateOptions = Stripe_.PaymentIntent.PaymentMethodOptions.Pix.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.Pix.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountIncludesIof = Stripe_.PaymentIntent.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
          export type AmountType = Stripe_.PaymentIntent.PaymentMethodOptions.Pix.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe_.PaymentIntent.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
        }
      }
      export namespace RevolutPay {
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.RevolutPay.SetupFutureUsage;
      }
      export namespace Satispay {
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.Satispay.SetupFutureUsage;
      }
      export namespace SepaDebit {
        export type MandateOptions = Stripe_.PaymentIntent.PaymentMethodOptions.SepaDebit.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.SepaDebit.SetupFutureUsage;
      }
      export namespace Sofort {
        export type PreferredLanguage = Stripe_.PaymentIntent.PaymentMethodOptions.Sofort.PreferredLanguage;
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.Sofort.SetupFutureUsage;
      }
      export namespace Twint {
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.Twint.SetupFutureUsage;
      }
      export namespace Upi {
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.Upi.SetupFutureUsage;
      }
      export namespace UsBankAccount {
        export type FinancialConnections = Stripe_.PaymentIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections;
        export type MandateOptions = Stripe_.PaymentIntent.PaymentMethodOptions.UsBankAccount.MandateOptions;
        export type SetupFutureUsage = Stripe_.PaymentIntent.PaymentMethodOptions.UsBankAccount.SetupFutureUsage;
        export type TransactionPurpose = Stripe_.PaymentIntent.PaymentMethodOptions.UsBankAccount.TransactionPurpose;
        export type VerificationMethod = Stripe_.PaymentIntent.PaymentMethodOptions.UsBankAccount.VerificationMethod;
        export namespace FinancialConnections {
          export type Filters = Stripe_.PaymentIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
          export type Permission = Stripe_.PaymentIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
          export type Prefetch = Stripe_.PaymentIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          export namespace Filters {
            export type AccountSubcategory = Stripe_.PaymentIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
          }
        }
      }
      export namespace WechatPay {
        export type Client = Stripe_.PaymentIntent.PaymentMethodOptions.WechatPay.Client;
      }
    }
    export namespace Processing {
      export type Card = Stripe_.PaymentIntent.Processing.Card;
      export namespace Card {
        export type CustomerNotification = Stripe_.PaymentIntent.Processing.Card.CustomerNotification;
      }
    }
    export namespace TransferData {
      export type PaymentData = Stripe_.PaymentIntent.TransferData.PaymentData;
    }
  }
  export namespace PaymentLinkCreateParams {
    export type LineItem = Stripe_.PaymentLinkCreateParams.LineItem;
    export type AfterCompletion = Stripe_.PaymentLinkCreateParams.AfterCompletion;
    export type AutomaticTax = Stripe_.PaymentLinkCreateParams.AutomaticTax;
    export type BillingAddressCollection = Stripe_.PaymentLinkCreateParams.BillingAddressCollection;
    export type ConsentCollection = Stripe_.PaymentLinkCreateParams.ConsentCollection;
    export type CustomField = Stripe_.PaymentLinkCreateParams.CustomField;
    export type CustomText = Stripe_.PaymentLinkCreateParams.CustomText;
    export type CustomerCreation = Stripe_.PaymentLinkCreateParams.CustomerCreation;
    export type InvoiceCreation = Stripe_.PaymentLinkCreateParams.InvoiceCreation;
    export type ManagedPayments = Stripe_.PaymentLinkCreateParams.ManagedPayments;
    export type NameCollection = Stripe_.PaymentLinkCreateParams.NameCollection;
    export type OptionalItem = Stripe_.PaymentLinkCreateParams.OptionalItem;
    export type PaymentIntentData = Stripe_.PaymentLinkCreateParams.PaymentIntentData;
    export type PaymentMethodCollection = Stripe_.PaymentLinkCreateParams.PaymentMethodCollection;
    export type PaymentMethodOptions = Stripe_.PaymentLinkCreateParams.PaymentMethodOptions;
    export type PaymentMethodType = Stripe_.PaymentLinkCreateParams.PaymentMethodType;
    export type PhoneNumberCollection = Stripe_.PaymentLinkCreateParams.PhoneNumberCollection;
    export type Restrictions = Stripe_.PaymentLinkCreateParams.Restrictions;
    export type ShippingAddressCollection = Stripe_.PaymentLinkCreateParams.ShippingAddressCollection;
    export type ShippingOption = Stripe_.PaymentLinkCreateParams.ShippingOption;
    export type SubmitType = Stripe_.PaymentLinkCreateParams.SubmitType;
    export type SubscriptionData = Stripe_.PaymentLinkCreateParams.SubscriptionData;
    export type TaxIdCollection = Stripe_.PaymentLinkCreateParams.TaxIdCollection;
    export type TransferData = Stripe_.PaymentLinkCreateParams.TransferData;
    export namespace AfterCompletion {
      export type HostedConfirmation = Stripe_.PaymentLinkCreateParams.AfterCompletion.HostedConfirmation;
      export type Redirect = Stripe_.PaymentLinkCreateParams.AfterCompletion.Redirect;
      export type Type = Stripe_.PaymentLinkCreateParams.AfterCompletion.Type;
    }
    export namespace AutomaticTax {
      export type Liability = Stripe_.PaymentLinkCreateParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe_.PaymentLinkCreateParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace ConsentCollection {
      export type PaymentMethodReuseAgreement = Stripe_.PaymentLinkCreateParams.ConsentCollection.PaymentMethodReuseAgreement;
      export type Promotions = Stripe_.PaymentLinkCreateParams.ConsentCollection.Promotions;
      export type TermsOfService = Stripe_.PaymentLinkCreateParams.ConsentCollection.TermsOfService;
      export namespace PaymentMethodReuseAgreement {
        export type Position = Stripe_.PaymentLinkCreateParams.ConsentCollection.PaymentMethodReuseAgreement.Position;
      }
    }
    export namespace CustomField {
      export type Dropdown = Stripe_.PaymentLinkCreateParams.CustomField.Dropdown;
      export type Label = Stripe_.PaymentLinkCreateParams.CustomField.Label;
      export type Numeric = Stripe_.PaymentLinkCreateParams.CustomField.Numeric;
      export type Text = Stripe_.PaymentLinkCreateParams.CustomField.Text;
      export type Type = Stripe_.PaymentLinkCreateParams.CustomField.Type;
      export namespace Dropdown {
        export type Option = Stripe_.PaymentLinkCreateParams.CustomField.Dropdown.Option;
      }
    }
    export namespace CustomText {
      export type AfterSubmit = Stripe_.PaymentLinkCreateParams.CustomText.AfterSubmit;
      export type ShippingAddress = Stripe_.PaymentLinkCreateParams.CustomText.ShippingAddress;
      export type Submit = Stripe_.PaymentLinkCreateParams.CustomText.Submit;
      export type TermsOfServiceAcceptance = Stripe_.PaymentLinkCreateParams.CustomText.TermsOfServiceAcceptance;
    }
    export namespace InvoiceCreation {
      export type InvoiceData = Stripe_.PaymentLinkCreateParams.InvoiceCreation.InvoiceData;
      export namespace InvoiceData {
        export type CustomField = Stripe_.PaymentLinkCreateParams.InvoiceCreation.InvoiceData.CustomField;
        export type Issuer = Stripe_.PaymentLinkCreateParams.InvoiceCreation.InvoiceData.Issuer;
        export type RenderingOptions = Stripe_.PaymentLinkCreateParams.InvoiceCreation.InvoiceData.RenderingOptions;
        export namespace Issuer {
          export type Type = Stripe_.PaymentLinkCreateParams.InvoiceCreation.InvoiceData.Issuer.Type;
        }
        export namespace RenderingOptions {
          export type AmountTaxDisplay = Stripe_.PaymentLinkCreateParams.InvoiceCreation.InvoiceData.RenderingOptions.AmountTaxDisplay;
        }
      }
    }
    export namespace LineItem {
      export type AdjustableQuantity = Stripe_.PaymentLinkCreateParams.LineItem.AdjustableQuantity;
      export type PriceData = Stripe_.PaymentLinkCreateParams.LineItem.PriceData;
      export namespace PriceData {
        export type ProductData = Stripe_.PaymentLinkCreateParams.LineItem.PriceData.ProductData;
        export type Recurring = Stripe_.PaymentLinkCreateParams.LineItem.PriceData.Recurring;
        export type TaxBehavior = Stripe_.PaymentLinkCreateParams.LineItem.PriceData.TaxBehavior;
        export namespace Recurring {
          export type Interval = Stripe_.PaymentLinkCreateParams.LineItem.PriceData.Recurring.Interval;
        }
      }
    }
    export namespace NameCollection {
      export type Business = Stripe_.PaymentLinkCreateParams.NameCollection.Business;
      export type Individual = Stripe_.PaymentLinkCreateParams.NameCollection.Individual;
    }
    export namespace OptionalItem {
      export type AdjustableQuantity = Stripe_.PaymentLinkCreateParams.OptionalItem.AdjustableQuantity;
    }
    export namespace PaymentIntentData {
      export type CaptureMethod = Stripe_.PaymentLinkCreateParams.PaymentIntentData.CaptureMethod;
      export type SetupFutureUsage = Stripe_.PaymentLinkCreateParams.PaymentIntentData.SetupFutureUsage;
    }
    export namespace PaymentMethodOptions {
      export type Card = Stripe_.PaymentLinkCreateParams.PaymentMethodOptions.Card;
      export namespace Card {
        export type Restrictions = Stripe_.PaymentLinkCreateParams.PaymentMethodOptions.Card.Restrictions;
        export namespace Restrictions {
          export type BrandsBlocked = Stripe_.PaymentLinkCreateParams.PaymentMethodOptions.Card.Restrictions.BrandsBlocked;
        }
      }
    }
    export namespace Restrictions {
      export type CompletedSessions = Stripe_.PaymentLinkCreateParams.Restrictions.CompletedSessions;
    }
    export namespace ShippingAddressCollection {
      export type AllowedCountry = Stripe_.PaymentLinkCreateParams.ShippingAddressCollection.AllowedCountry;
    }
    export namespace SubscriptionData {
      export type InvoiceSettings = Stripe_.PaymentLinkCreateParams.SubscriptionData.InvoiceSettings;
      export type TrialSettings = Stripe_.PaymentLinkCreateParams.SubscriptionData.TrialSettings;
      export namespace InvoiceSettings {
        export type Issuer = Stripe_.PaymentLinkCreateParams.SubscriptionData.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe_.PaymentLinkCreateParams.SubscriptionData.InvoiceSettings.Issuer.Type;
        }
      }
      export namespace TrialSettings {
        export type EndBehavior = Stripe_.PaymentLinkCreateParams.SubscriptionData.TrialSettings.EndBehavior;
        export namespace EndBehavior {
          export type MissingPaymentMethod = Stripe_.PaymentLinkCreateParams.SubscriptionData.TrialSettings.EndBehavior.MissingPaymentMethod;
        }
      }
    }
    export namespace TaxIdCollection {
      export type Required = Stripe_.PaymentLinkCreateParams.TaxIdCollection.Required;
    }
  }
  export namespace PaymentLinkUpdateParams {
    export type AfterCompletion = Stripe_.PaymentLinkUpdateParams.AfterCompletion;
    export type AutomaticTax = Stripe_.PaymentLinkUpdateParams.AutomaticTax;
    export type BillingAddressCollection = Stripe_.PaymentLinkUpdateParams.BillingAddressCollection;
    export type CustomField = Stripe_.PaymentLinkUpdateParams.CustomField;
    export type CustomText = Stripe_.PaymentLinkUpdateParams.CustomText;
    export type CustomerCreation = Stripe_.PaymentLinkUpdateParams.CustomerCreation;
    export type InvoiceCreation = Stripe_.PaymentLinkUpdateParams.InvoiceCreation;
    export type LineItem = Stripe_.PaymentLinkUpdateParams.LineItem;
    export type NameCollection = Stripe_.PaymentLinkUpdateParams.NameCollection;
    export type OptionalItem = Stripe_.PaymentLinkUpdateParams.OptionalItem;
    export type PaymentIntentData = Stripe_.PaymentLinkUpdateParams.PaymentIntentData;
    export type PaymentMethodCollection = Stripe_.PaymentLinkUpdateParams.PaymentMethodCollection;
    export type PaymentMethodOptions = Stripe_.PaymentLinkUpdateParams.PaymentMethodOptions;
    export type PaymentMethodType = Stripe_.PaymentLinkUpdateParams.PaymentMethodType;
    export type PhoneNumberCollection = Stripe_.PaymentLinkUpdateParams.PhoneNumberCollection;
    export type Restrictions = Stripe_.PaymentLinkUpdateParams.Restrictions;
    export type ShippingAddressCollection = Stripe_.PaymentLinkUpdateParams.ShippingAddressCollection;
    export type SubmitType = Stripe_.PaymentLinkUpdateParams.SubmitType;
    export type SubscriptionData = Stripe_.PaymentLinkUpdateParams.SubscriptionData;
    export type TaxIdCollection = Stripe_.PaymentLinkUpdateParams.TaxIdCollection;
    export namespace AfterCompletion {
      export type HostedConfirmation = Stripe_.PaymentLinkUpdateParams.AfterCompletion.HostedConfirmation;
      export type Redirect = Stripe_.PaymentLinkUpdateParams.AfterCompletion.Redirect;
      export type Type = Stripe_.PaymentLinkUpdateParams.AfterCompletion.Type;
    }
    export namespace AutomaticTax {
      export type Liability = Stripe_.PaymentLinkUpdateParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe_.PaymentLinkUpdateParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace CustomField {
      export type Dropdown = Stripe_.PaymentLinkUpdateParams.CustomField.Dropdown;
      export type Label = Stripe_.PaymentLinkUpdateParams.CustomField.Label;
      export type Numeric = Stripe_.PaymentLinkUpdateParams.CustomField.Numeric;
      export type Text = Stripe_.PaymentLinkUpdateParams.CustomField.Text;
      export type Type = Stripe_.PaymentLinkUpdateParams.CustomField.Type;
      export namespace Dropdown {
        export type Option = Stripe_.PaymentLinkUpdateParams.CustomField.Dropdown.Option;
      }
    }
    export namespace CustomText {
      export type AfterSubmit = Stripe_.PaymentLinkUpdateParams.CustomText.AfterSubmit;
      export type ShippingAddress = Stripe_.PaymentLinkUpdateParams.CustomText.ShippingAddress;
      export type Submit = Stripe_.PaymentLinkUpdateParams.CustomText.Submit;
      export type TermsOfServiceAcceptance = Stripe_.PaymentLinkUpdateParams.CustomText.TermsOfServiceAcceptance;
    }
    export namespace InvoiceCreation {
      export type InvoiceData = Stripe_.PaymentLinkUpdateParams.InvoiceCreation.InvoiceData;
      export namespace InvoiceData {
        export type CustomField = Stripe_.PaymentLinkUpdateParams.InvoiceCreation.InvoiceData.CustomField;
        export type Issuer = Stripe_.PaymentLinkUpdateParams.InvoiceCreation.InvoiceData.Issuer;
        export type RenderingOptions = Stripe_.PaymentLinkUpdateParams.InvoiceCreation.InvoiceData.RenderingOptions;
        export namespace Issuer {
          export type Type = Stripe_.PaymentLinkUpdateParams.InvoiceCreation.InvoiceData.Issuer.Type;
        }
        export namespace RenderingOptions {
          export type AmountTaxDisplay = Stripe_.PaymentLinkUpdateParams.InvoiceCreation.InvoiceData.RenderingOptions.AmountTaxDisplay;
        }
      }
    }
    export namespace LineItem {
      export type AdjustableQuantity = Stripe_.PaymentLinkUpdateParams.LineItem.AdjustableQuantity;
    }
    export namespace NameCollection {
      export type Business = Stripe_.PaymentLinkUpdateParams.NameCollection.Business;
      export type Individual = Stripe_.PaymentLinkUpdateParams.NameCollection.Individual;
    }
    export namespace OptionalItem {
      export type AdjustableQuantity = Stripe_.PaymentLinkUpdateParams.OptionalItem.AdjustableQuantity;
    }
    export namespace PaymentMethodOptions {
      export type Card = Stripe_.PaymentLinkUpdateParams.PaymentMethodOptions.Card;
      export namespace Card {
        export type Restrictions = Stripe_.PaymentLinkUpdateParams.PaymentMethodOptions.Card.Restrictions;
        export namespace Restrictions {
          export type BrandsBlocked = Stripe_.PaymentLinkUpdateParams.PaymentMethodOptions.Card.Restrictions.BrandsBlocked;
        }
      }
    }
    export namespace Restrictions {
      export type CompletedSessions = Stripe_.PaymentLinkUpdateParams.Restrictions.CompletedSessions;
    }
    export namespace ShippingAddressCollection {
      export type AllowedCountry = Stripe_.PaymentLinkUpdateParams.ShippingAddressCollection.AllowedCountry;
    }
    export namespace SubscriptionData {
      export type InvoiceSettings = Stripe_.PaymentLinkUpdateParams.SubscriptionData.InvoiceSettings;
      export type TrialSettings = Stripe_.PaymentLinkUpdateParams.SubscriptionData.TrialSettings;
      export namespace InvoiceSettings {
        export type Issuer = Stripe_.PaymentLinkUpdateParams.SubscriptionData.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe_.PaymentLinkUpdateParams.SubscriptionData.InvoiceSettings.Issuer.Type;
        }
      }
      export namespace TrialSettings {
        export type EndBehavior = Stripe_.PaymentLinkUpdateParams.SubscriptionData.TrialSettings.EndBehavior;
        export namespace EndBehavior {
          export type MissingPaymentMethod = Stripe_.PaymentLinkUpdateParams.SubscriptionData.TrialSettings.EndBehavior.MissingPaymentMethod;
        }
      }
    }
    export namespace TaxIdCollection {
      export type Required = Stripe_.PaymentLinkUpdateParams.TaxIdCollection.Required;
    }
  }
  export namespace PaymentLink {
    export type AfterCompletion = Stripe_.PaymentLink.AfterCompletion;
    export type AutomaticTax = Stripe_.PaymentLink.AutomaticTax;
    export type BillingAddressCollection = Stripe_.PaymentLink.BillingAddressCollection;
    export type ConsentCollection = Stripe_.PaymentLink.ConsentCollection;
    export type CustomField = Stripe_.PaymentLink.CustomField;
    export type CustomText = Stripe_.PaymentLink.CustomText;
    export type CustomerCreation = Stripe_.PaymentLink.CustomerCreation;
    export type InvoiceCreation = Stripe_.PaymentLink.InvoiceCreation;
    export type ManagedPayments = Stripe_.PaymentLink.ManagedPayments;
    export type NameCollection = Stripe_.PaymentLink.NameCollection;
    export type OptionalItem = Stripe_.PaymentLink.OptionalItem;
    export type PaymentIntentData = Stripe_.PaymentLink.PaymentIntentData;
    export type PaymentMethodCollection = Stripe_.PaymentLink.PaymentMethodCollection;
    export type PaymentMethodOptions = Stripe_.PaymentLink.PaymentMethodOptions;
    export type PaymentMethodType = Stripe_.PaymentLink.PaymentMethodType;
    export type PhoneNumberCollection = Stripe_.PaymentLink.PhoneNumberCollection;
    export type Restrictions = Stripe_.PaymentLink.Restrictions;
    export type ShippingAddressCollection = Stripe_.PaymentLink.ShippingAddressCollection;
    export type ShippingOption = Stripe_.PaymentLink.ShippingOption;
    export type SubmitType = Stripe_.PaymentLink.SubmitType;
    export type SubscriptionData = Stripe_.PaymentLink.SubscriptionData;
    export type TaxIdCollection = Stripe_.PaymentLink.TaxIdCollection;
    export type TransferData = Stripe_.PaymentLink.TransferData;
    export namespace AfterCompletion {
      export type HostedConfirmation = Stripe_.PaymentLink.AfterCompletion.HostedConfirmation;
      export type Redirect = Stripe_.PaymentLink.AfterCompletion.Redirect;
      export type Type = Stripe_.PaymentLink.AfterCompletion.Type;
    }
    export namespace AutomaticTax {
      export type Liability = Stripe_.PaymentLink.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe_.PaymentLink.AutomaticTax.Liability.Type;
      }
    }
    export namespace ConsentCollection {
      export type PaymentMethodReuseAgreement = Stripe_.PaymentLink.ConsentCollection.PaymentMethodReuseAgreement;
      export type Promotions = Stripe_.PaymentLink.ConsentCollection.Promotions;
      export type TermsOfService = Stripe_.PaymentLink.ConsentCollection.TermsOfService;
      export namespace PaymentMethodReuseAgreement {
        export type Position = Stripe_.PaymentLink.ConsentCollection.PaymentMethodReuseAgreement.Position;
      }
    }
    export namespace CustomField {
      export type Dropdown = Stripe_.PaymentLink.CustomField.Dropdown;
      export type Label = Stripe_.PaymentLink.CustomField.Label;
      export type Numeric = Stripe_.PaymentLink.CustomField.Numeric;
      export type Text = Stripe_.PaymentLink.CustomField.Text;
      export type Type = Stripe_.PaymentLink.CustomField.Type;
      export namespace Dropdown {
        export type Option = Stripe_.PaymentLink.CustomField.Dropdown.Option;
      }
    }
    export namespace CustomText {
      export type AfterSubmit = Stripe_.PaymentLink.CustomText.AfterSubmit;
      export type ShippingAddress = Stripe_.PaymentLink.CustomText.ShippingAddress;
      export type Submit = Stripe_.PaymentLink.CustomText.Submit;
      export type TermsOfServiceAcceptance = Stripe_.PaymentLink.CustomText.TermsOfServiceAcceptance;
    }
    export namespace InvoiceCreation {
      export type InvoiceData = Stripe_.PaymentLink.InvoiceCreation.InvoiceData;
      export namespace InvoiceData {
        export type CustomField = Stripe_.PaymentLink.InvoiceCreation.InvoiceData.CustomField;
        export type Issuer = Stripe_.PaymentLink.InvoiceCreation.InvoiceData.Issuer;
        export type RenderingOptions = Stripe_.PaymentLink.InvoiceCreation.InvoiceData.RenderingOptions;
        export namespace Issuer {
          export type Type = Stripe_.PaymentLink.InvoiceCreation.InvoiceData.Issuer.Type;
        }
      }
    }
    export namespace NameCollection {
      export type Business = Stripe_.PaymentLink.NameCollection.Business;
      export type Individual = Stripe_.PaymentLink.NameCollection.Individual;
    }
    export namespace OptionalItem {
      export type AdjustableQuantity = Stripe_.PaymentLink.OptionalItem.AdjustableQuantity;
    }
    export namespace PaymentIntentData {
      export type CaptureMethod = Stripe_.PaymentLink.PaymentIntentData.CaptureMethod;
      export type SetupFutureUsage = Stripe_.PaymentLink.PaymentIntentData.SetupFutureUsage;
    }
    export namespace PaymentMethodOptions {
      export type Card = Stripe_.PaymentLink.PaymentMethodOptions.Card;
      export namespace Card {
        export type Restrictions = Stripe_.PaymentLink.PaymentMethodOptions.Card.Restrictions;
        export namespace Restrictions {
          export type BrandsBlocked = Stripe_.PaymentLink.PaymentMethodOptions.Card.Restrictions.BrandsBlocked;
        }
      }
    }
    export namespace Restrictions {
      export type CompletedSessions = Stripe_.PaymentLink.Restrictions.CompletedSessions;
    }
    export namespace ShippingAddressCollection {
      export type AllowedCountry = Stripe_.PaymentLink.ShippingAddressCollection.AllowedCountry;
    }
    export namespace SubscriptionData {
      export type InvoiceSettings = Stripe_.PaymentLink.SubscriptionData.InvoiceSettings;
      export type TrialSettings = Stripe_.PaymentLink.SubscriptionData.TrialSettings;
      export namespace InvoiceSettings {
        export type Issuer = Stripe_.PaymentLink.SubscriptionData.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe_.PaymentLink.SubscriptionData.InvoiceSettings.Issuer.Type;
        }
      }
      export namespace TrialSettings {
        export type EndBehavior = Stripe_.PaymentLink.SubscriptionData.TrialSettings.EndBehavior;
        export namespace EndBehavior {
          export type MissingPaymentMethod = Stripe_.PaymentLink.SubscriptionData.TrialSettings.EndBehavior.MissingPaymentMethod;
        }
      }
    }
    export namespace TaxIdCollection {
      export type Required = Stripe_.PaymentLink.TaxIdCollection.Required;
    }
  }
  export namespace PaymentMethodCreateParams {
    export type AcssDebit = Stripe_.PaymentMethodCreateParams.AcssDebit;
    export type Affirm = Stripe_.PaymentMethodCreateParams.Affirm;
    export type AfterpayClearpay = Stripe_.PaymentMethodCreateParams.AfterpayClearpay;
    export type Alipay = Stripe_.PaymentMethodCreateParams.Alipay;
    export type AllowRedisplay = Stripe_.PaymentMethodCreateParams.AllowRedisplay;
    export type Alma = Stripe_.PaymentMethodCreateParams.Alma;
    export type AmazonPay = Stripe_.PaymentMethodCreateParams.AmazonPay;
    export type AuBecsDebit = Stripe_.PaymentMethodCreateParams.AuBecsDebit;
    export type BacsDebit = Stripe_.PaymentMethodCreateParams.BacsDebit;
    export type Bancontact = Stripe_.PaymentMethodCreateParams.Bancontact;
    export type Billie = Stripe_.PaymentMethodCreateParams.Billie;
    export type BillingDetails = Stripe_.PaymentMethodCreateParams.BillingDetails;
    export type Bizum = Stripe_.PaymentMethodCreateParams.Bizum;
    export type Blik = Stripe_.PaymentMethodCreateParams.Blik;
    export type Boleto = Stripe_.PaymentMethodCreateParams.Boleto;
    export type Card = Stripe_.PaymentMethodCreateParams.Card;
    export type Cashapp = Stripe_.PaymentMethodCreateParams.Cashapp;
    export type Crypto = Stripe_.PaymentMethodCreateParams.Crypto;
    export type Custom = Stripe_.PaymentMethodCreateParams.Custom;
    export type CustomerBalance = Stripe_.PaymentMethodCreateParams.CustomerBalance;
    export type Eps = Stripe_.PaymentMethodCreateParams.Eps;
    export type Fpx = Stripe_.PaymentMethodCreateParams.Fpx;
    export type Giropay = Stripe_.PaymentMethodCreateParams.Giropay;
    export type Grabpay = Stripe_.PaymentMethodCreateParams.Grabpay;
    export type Ideal = Stripe_.PaymentMethodCreateParams.Ideal;
    export type InteracPresent = Stripe_.PaymentMethodCreateParams.InteracPresent;
    export type KakaoPay = Stripe_.PaymentMethodCreateParams.KakaoPay;
    export type Klarna = Stripe_.PaymentMethodCreateParams.Klarna;
    export type Konbini = Stripe_.PaymentMethodCreateParams.Konbini;
    export type KrCard = Stripe_.PaymentMethodCreateParams.KrCard;
    export type Link = Stripe_.PaymentMethodCreateParams.Link;
    export type MbWay = Stripe_.PaymentMethodCreateParams.MbWay;
    export type Mobilepay = Stripe_.PaymentMethodCreateParams.Mobilepay;
    export type Multibanco = Stripe_.PaymentMethodCreateParams.Multibanco;
    export type NaverPay = Stripe_.PaymentMethodCreateParams.NaverPay;
    export type NzBankAccount = Stripe_.PaymentMethodCreateParams.NzBankAccount;
    export type Oxxo = Stripe_.PaymentMethodCreateParams.Oxxo;
    export type P24 = Stripe_.PaymentMethodCreateParams.P24;
    export type PayByBank = Stripe_.PaymentMethodCreateParams.PayByBank;
    export type Payco = Stripe_.PaymentMethodCreateParams.Payco;
    export type Paynow = Stripe_.PaymentMethodCreateParams.Paynow;
    export type Paypal = Stripe_.PaymentMethodCreateParams.Paypal;
    export type Payto = Stripe_.PaymentMethodCreateParams.Payto;
    export type Pix = Stripe_.PaymentMethodCreateParams.Pix;
    export type Promptpay = Stripe_.PaymentMethodCreateParams.Promptpay;
    export type RadarOptions = Stripe_.PaymentMethodCreateParams.RadarOptions;
    export type RevolutPay = Stripe_.PaymentMethodCreateParams.RevolutPay;
    export type SamsungPay = Stripe_.PaymentMethodCreateParams.SamsungPay;
    export type Satispay = Stripe_.PaymentMethodCreateParams.Satispay;
    export type Scalapay = Stripe_.PaymentMethodCreateParams.Scalapay;
    export type SepaDebit = Stripe_.PaymentMethodCreateParams.SepaDebit;
    export type Sofort = Stripe_.PaymentMethodCreateParams.Sofort;
    export type Sunbit = Stripe_.PaymentMethodCreateParams.Sunbit;
    export type Swish = Stripe_.PaymentMethodCreateParams.Swish;
    export type Twint = Stripe_.PaymentMethodCreateParams.Twint;
    export type Type = Stripe_.PaymentMethodCreateParams.Type;
    export type Upi = Stripe_.PaymentMethodCreateParams.Upi;
    export type UsBankAccount = Stripe_.PaymentMethodCreateParams.UsBankAccount;
    export type WechatPay = Stripe_.PaymentMethodCreateParams.WechatPay;
    export type Zip = Stripe_.PaymentMethodCreateParams.Zip;
    export namespace Card {
      export type Networks = Stripe_.PaymentMethodCreateParams.Card.Networks;
      export namespace Networks {
        export type Preferred = Stripe_.PaymentMethodCreateParams.Card.Networks.Preferred;
      }
    }
    export namespace Eps {
      export type Bank = Stripe_.PaymentMethodCreateParams.Eps.Bank;
    }
    export namespace Fpx {
      export type AccountHolderType = Stripe_.PaymentMethodCreateParams.Fpx.AccountHolderType;
      export type Bank = Stripe_.PaymentMethodCreateParams.Fpx.Bank;
    }
    export namespace Ideal {
      export type Bank = Stripe_.PaymentMethodCreateParams.Ideal.Bank;
    }
    export namespace Klarna {
      export type Dob = Stripe_.PaymentMethodCreateParams.Klarna.Dob;
    }
    export namespace NaverPay {
      export type Funding = Stripe_.PaymentMethodCreateParams.NaverPay.Funding;
    }
    export namespace P24 {
      export type Bank = Stripe_.PaymentMethodCreateParams.P24.Bank;
    }
    export namespace Sofort {
      export type Country = Stripe_.PaymentMethodCreateParams.Sofort.Country;
    }
    export namespace Upi {
      export type MandateOptions = Stripe_.PaymentMethodCreateParams.Upi.MandateOptions;
      export namespace MandateOptions {
        export type AmountType = Stripe_.PaymentMethodCreateParams.Upi.MandateOptions.AmountType;
      }
    }
    export namespace UsBankAccount {
      export type AccountHolderType = Stripe_.PaymentMethodCreateParams.UsBankAccount.AccountHolderType;
      export type AccountType = Stripe_.PaymentMethodCreateParams.UsBankAccount.AccountType;
    }
  }
  export namespace PaymentMethodUpdateParams {
    export type AllowRedisplay = Stripe_.PaymentMethodUpdateParams.AllowRedisplay;
    export type BillingDetails = Stripe_.PaymentMethodUpdateParams.BillingDetails;
    export type Card = Stripe_.PaymentMethodUpdateParams.Card;
    export type Payto = Stripe_.PaymentMethodUpdateParams.Payto;
    export type UsBankAccount = Stripe_.PaymentMethodUpdateParams.UsBankAccount;
    export namespace Card {
      export type Networks = Stripe_.PaymentMethodUpdateParams.Card.Networks;
      export namespace Networks {
        export type Preferred = Stripe_.PaymentMethodUpdateParams.Card.Networks.Preferred;
      }
    }
    export namespace UsBankAccount {
      export type AccountHolderType = Stripe_.PaymentMethodUpdateParams.UsBankAccount.AccountHolderType;
      export type AccountType = Stripe_.PaymentMethodUpdateParams.UsBankAccount.AccountType;
    }
  }
  export namespace PaymentMethodListParams {
    export type AllowRedisplay = Stripe_.PaymentMethodListParams.AllowRedisplay;
    export type Type = Stripe_.PaymentMethodListParams.Type;
  }
  export namespace PaymentMethod {
    export type AcssDebit = Stripe_.PaymentMethod.AcssDebit;
    export type Affirm = Stripe_.PaymentMethod.Affirm;
    export type AfterpayClearpay = Stripe_.PaymentMethod.AfterpayClearpay;
    export type Alipay = Stripe_.PaymentMethod.Alipay;
    export type AllowRedisplay = Stripe_.PaymentMethod.AllowRedisplay;
    export type Alma = Stripe_.PaymentMethod.Alma;
    export type AmazonPay = Stripe_.PaymentMethod.AmazonPay;
    export type AuBecsDebit = Stripe_.PaymentMethod.AuBecsDebit;
    export type BacsDebit = Stripe_.PaymentMethod.BacsDebit;
    export type Bancontact = Stripe_.PaymentMethod.Bancontact;
    export type Billie = Stripe_.PaymentMethod.Billie;
    export type BillingDetails = Stripe_.PaymentMethod.BillingDetails;
    export type Bizum = Stripe_.PaymentMethod.Bizum;
    export type Blik = Stripe_.PaymentMethod.Blik;
    export type Boleto = Stripe_.PaymentMethod.Boleto;
    export type Card = Stripe_.PaymentMethod.Card;
    export type CardPresent = Stripe_.PaymentMethod.CardPresent;
    export type Cashapp = Stripe_.PaymentMethod.Cashapp;
    export type Crypto = Stripe_.PaymentMethod.Crypto;
    export type Custom = Stripe_.PaymentMethod.Custom;
    export type CustomerBalance = Stripe_.PaymentMethod.CustomerBalance;
    export type Eps = Stripe_.PaymentMethod.Eps;
    export type Fpx = Stripe_.PaymentMethod.Fpx;
    export type Giropay = Stripe_.PaymentMethod.Giropay;
    export type Grabpay = Stripe_.PaymentMethod.Grabpay;
    export type Ideal = Stripe_.PaymentMethod.Ideal;
    export type InteracPresent = Stripe_.PaymentMethod.InteracPresent;
    export type KakaoPay = Stripe_.PaymentMethod.KakaoPay;
    export type Klarna = Stripe_.PaymentMethod.Klarna;
    export type Konbini = Stripe_.PaymentMethod.Konbini;
    export type KrCard = Stripe_.PaymentMethod.KrCard;
    export type Link = Stripe_.PaymentMethod.Link;
    export type MbWay = Stripe_.PaymentMethod.MbWay;
    export type Mobilepay = Stripe_.PaymentMethod.Mobilepay;
    export type Multibanco = Stripe_.PaymentMethod.Multibanco;
    export type NaverPay = Stripe_.PaymentMethod.NaverPay;
    export type NzBankAccount = Stripe_.PaymentMethod.NzBankAccount;
    export type Oxxo = Stripe_.PaymentMethod.Oxxo;
    export type P24 = Stripe_.PaymentMethod.P24;
    export type PayByBank = Stripe_.PaymentMethod.PayByBank;
    export type Payco = Stripe_.PaymentMethod.Payco;
    export type Paynow = Stripe_.PaymentMethod.Paynow;
    export type Paypal = Stripe_.PaymentMethod.Paypal;
    export type Payto = Stripe_.PaymentMethod.Payto;
    export type Pix = Stripe_.PaymentMethod.Pix;
    export type Promptpay = Stripe_.PaymentMethod.Promptpay;
    export type RadarOptions = Stripe_.PaymentMethod.RadarOptions;
    export type RevolutPay = Stripe_.PaymentMethod.RevolutPay;
    export type SamsungPay = Stripe_.PaymentMethod.SamsungPay;
    export type Satispay = Stripe_.PaymentMethod.Satispay;
    export type Scalapay = Stripe_.PaymentMethod.Scalapay;
    export type SepaDebit = Stripe_.PaymentMethod.SepaDebit;
    export type Sofort = Stripe_.PaymentMethod.Sofort;
    export type Sunbit = Stripe_.PaymentMethod.Sunbit;
    export type Swish = Stripe_.PaymentMethod.Swish;
    export type Twint = Stripe_.PaymentMethod.Twint;
    export type Type = Stripe_.PaymentMethod.Type;
    export type Upi = Stripe_.PaymentMethod.Upi;
    export type UsBankAccount = Stripe_.PaymentMethod.UsBankAccount;
    export type WechatPay = Stripe_.PaymentMethod.WechatPay;
    export type Zip = Stripe_.PaymentMethod.Zip;
    export namespace Card {
      export type Checks = Stripe_.PaymentMethod.Card.Checks;
      export type GeneratedFrom = Stripe_.PaymentMethod.Card.GeneratedFrom;
      export type Networks = Stripe_.PaymentMethod.Card.Networks;
      export type RegulatedStatus = Stripe_.PaymentMethod.Card.RegulatedStatus;
      export type ThreeDSecureUsage = Stripe_.PaymentMethod.Card.ThreeDSecureUsage;
      export type Wallet = Stripe_.PaymentMethod.Card.Wallet;
      export namespace GeneratedFrom {
        export type PaymentMethodDetails = Stripe_.PaymentMethod.Card.GeneratedFrom.PaymentMethodDetails;
        export namespace PaymentMethodDetails {
          export type CardPresent = Stripe_.PaymentMethod.Card.GeneratedFrom.PaymentMethodDetails.CardPresent;
          export namespace CardPresent {
            export type Offline = Stripe_.PaymentMethod.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Offline;
            export type ReadMethod = Stripe_.PaymentMethod.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.ReadMethod;
            export type Receipt = Stripe_.PaymentMethod.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Receipt;
            export type Wallet = Stripe_.PaymentMethod.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Wallet;
            export namespace Receipt {
              export type AccountType = Stripe_.PaymentMethod.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Receipt.AccountType;
            }
            export namespace Wallet {
              export type Type = Stripe_.PaymentMethod.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Wallet.Type;
            }
          }
        }
      }
      export namespace Wallet {
        export type AmexExpressCheckout = Stripe_.PaymentMethod.Card.Wallet.AmexExpressCheckout;
        export type ApplePay = Stripe_.PaymentMethod.Card.Wallet.ApplePay;
        export type GooglePay = Stripe_.PaymentMethod.Card.Wallet.GooglePay;
        export type Link = Stripe_.PaymentMethod.Card.Wallet.Link;
        export type Masterpass = Stripe_.PaymentMethod.Card.Wallet.Masterpass;
        export type SamsungPay = Stripe_.PaymentMethod.Card.Wallet.SamsungPay;
        export type Type = Stripe_.PaymentMethod.Card.Wallet.Type;
        export type VisaCheckout = Stripe_.PaymentMethod.Card.Wallet.VisaCheckout;
      }
    }
    export namespace CardPresent {
      export type Networks = Stripe_.PaymentMethod.CardPresent.Networks;
      export type Offline = Stripe_.PaymentMethod.CardPresent.Offline;
      export type ReadMethod = Stripe_.PaymentMethod.CardPresent.ReadMethod;
      export type Wallet = Stripe_.PaymentMethod.CardPresent.Wallet;
      export namespace Wallet {
        export type Type = Stripe_.PaymentMethod.CardPresent.Wallet.Type;
      }
    }
    export namespace Custom {
      export type Logo = Stripe_.PaymentMethod.Custom.Logo;
    }
    export namespace Eps {
      export type Bank = Stripe_.PaymentMethod.Eps.Bank;
    }
    export namespace Fpx {
      export type AccountHolderType = Stripe_.PaymentMethod.Fpx.AccountHolderType;
      export type Bank = Stripe_.PaymentMethod.Fpx.Bank;
    }
    export namespace Ideal {
      export type Bank = Stripe_.PaymentMethod.Ideal.Bank;
      export type Bic = Stripe_.PaymentMethod.Ideal.Bic;
    }
    export namespace InteracPresent {
      export type Networks = Stripe_.PaymentMethod.InteracPresent.Networks;
      export type ReadMethod = Stripe_.PaymentMethod.InteracPresent.ReadMethod;
    }
    export namespace Klarna {
      export type Dob = Stripe_.PaymentMethod.Klarna.Dob;
    }
    export namespace KrCard {
      export type Brand = Stripe_.PaymentMethod.KrCard.Brand;
    }
    export namespace NaverPay {
      export type Funding = Stripe_.PaymentMethod.NaverPay.Funding;
    }
    export namespace P24 {
      export type Bank = Stripe_.PaymentMethod.P24.Bank;
    }
    export namespace SepaDebit {
      export type GeneratedFrom = Stripe_.PaymentMethod.SepaDebit.GeneratedFrom;
    }
    export namespace UsBankAccount {
      export type AccountHolderType = Stripe_.PaymentMethod.UsBankAccount.AccountHolderType;
      export type AccountType = Stripe_.PaymentMethod.UsBankAccount.AccountType;
      export type Networks = Stripe_.PaymentMethod.UsBankAccount.Networks;
      export type StatusDetails = Stripe_.PaymentMethod.UsBankAccount.StatusDetails;
      export namespace Networks {
        export type Supported = Stripe_.PaymentMethod.UsBankAccount.Networks.Supported;
      }
      export namespace StatusDetails {
        export type Blocked = Stripe_.PaymentMethod.UsBankAccount.StatusDetails.Blocked;
        export namespace Blocked {
          export type NetworkCode = Stripe_.PaymentMethod.UsBankAccount.StatusDetails.Blocked.NetworkCode;
          export type Reason = Stripe_.PaymentMethod.UsBankAccount.StatusDetails.Blocked.Reason;
        }
      }
    }
  }
  export namespace PaymentMethodConfigurationCreateParams {
    export type AcssDebit = Stripe_.PaymentMethodConfigurationCreateParams.AcssDebit;
    export type Affirm = Stripe_.PaymentMethodConfigurationCreateParams.Affirm;
    export type AfterpayClearpay = Stripe_.PaymentMethodConfigurationCreateParams.AfterpayClearpay;
    export type Alipay = Stripe_.PaymentMethodConfigurationCreateParams.Alipay;
    export type Alma = Stripe_.PaymentMethodConfigurationCreateParams.Alma;
    export type AmazonPay = Stripe_.PaymentMethodConfigurationCreateParams.AmazonPay;
    export type ApplePay = Stripe_.PaymentMethodConfigurationCreateParams.ApplePay;
    export type ApplePayLater = Stripe_.PaymentMethodConfigurationCreateParams.ApplePayLater;
    export type AuBecsDebit = Stripe_.PaymentMethodConfigurationCreateParams.AuBecsDebit;
    export type BacsDebit = Stripe_.PaymentMethodConfigurationCreateParams.BacsDebit;
    export type Bancontact = Stripe_.PaymentMethodConfigurationCreateParams.Bancontact;
    export type Billie = Stripe_.PaymentMethodConfigurationCreateParams.Billie;
    export type Bizum = Stripe_.PaymentMethodConfigurationCreateParams.Bizum;
    export type Blik = Stripe_.PaymentMethodConfigurationCreateParams.Blik;
    export type Boleto = Stripe_.PaymentMethodConfigurationCreateParams.Boleto;
    export type Card = Stripe_.PaymentMethodConfigurationCreateParams.Card;
    export type CartesBancaires = Stripe_.PaymentMethodConfigurationCreateParams.CartesBancaires;
    export type Cashapp = Stripe_.PaymentMethodConfigurationCreateParams.Cashapp;
    export type Crypto = Stripe_.PaymentMethodConfigurationCreateParams.Crypto;
    export type CustomerBalance = Stripe_.PaymentMethodConfigurationCreateParams.CustomerBalance;
    export type Eps = Stripe_.PaymentMethodConfigurationCreateParams.Eps;
    export type Fpx = Stripe_.PaymentMethodConfigurationCreateParams.Fpx;
    export type FrMealVoucherConecs = Stripe_.PaymentMethodConfigurationCreateParams.FrMealVoucherConecs;
    export type Giropay = Stripe_.PaymentMethodConfigurationCreateParams.Giropay;
    export type GooglePay = Stripe_.PaymentMethodConfigurationCreateParams.GooglePay;
    export type Grabpay = Stripe_.PaymentMethodConfigurationCreateParams.Grabpay;
    export type Ideal = Stripe_.PaymentMethodConfigurationCreateParams.Ideal;
    export type Jcb = Stripe_.PaymentMethodConfigurationCreateParams.Jcb;
    export type KakaoPay = Stripe_.PaymentMethodConfigurationCreateParams.KakaoPay;
    export type Klarna = Stripe_.PaymentMethodConfigurationCreateParams.Klarna;
    export type Konbini = Stripe_.PaymentMethodConfigurationCreateParams.Konbini;
    export type KrCard = Stripe_.PaymentMethodConfigurationCreateParams.KrCard;
    export type Link = Stripe_.PaymentMethodConfigurationCreateParams.Link;
    export type MbWay = Stripe_.PaymentMethodConfigurationCreateParams.MbWay;
    export type Mobilepay = Stripe_.PaymentMethodConfigurationCreateParams.Mobilepay;
    export type Multibanco = Stripe_.PaymentMethodConfigurationCreateParams.Multibanco;
    export type NaverPay = Stripe_.PaymentMethodConfigurationCreateParams.NaverPay;
    export type NzBankAccount = Stripe_.PaymentMethodConfigurationCreateParams.NzBankAccount;
    export type Oxxo = Stripe_.PaymentMethodConfigurationCreateParams.Oxxo;
    export type P24 = Stripe_.PaymentMethodConfigurationCreateParams.P24;
    export type PayByBank = Stripe_.PaymentMethodConfigurationCreateParams.PayByBank;
    export type Payco = Stripe_.PaymentMethodConfigurationCreateParams.Payco;
    export type Paynow = Stripe_.PaymentMethodConfigurationCreateParams.Paynow;
    export type Paypal = Stripe_.PaymentMethodConfigurationCreateParams.Paypal;
    export type Payto = Stripe_.PaymentMethodConfigurationCreateParams.Payto;
    export type Pix = Stripe_.PaymentMethodConfigurationCreateParams.Pix;
    export type Promptpay = Stripe_.PaymentMethodConfigurationCreateParams.Promptpay;
    export type RevolutPay = Stripe_.PaymentMethodConfigurationCreateParams.RevolutPay;
    export type SamsungPay = Stripe_.PaymentMethodConfigurationCreateParams.SamsungPay;
    export type Satispay = Stripe_.PaymentMethodConfigurationCreateParams.Satispay;
    export type Scalapay = Stripe_.PaymentMethodConfigurationCreateParams.Scalapay;
    export type SepaDebit = Stripe_.PaymentMethodConfigurationCreateParams.SepaDebit;
    export type Sofort = Stripe_.PaymentMethodConfigurationCreateParams.Sofort;
    export type Sunbit = Stripe_.PaymentMethodConfigurationCreateParams.Sunbit;
    export type Swish = Stripe_.PaymentMethodConfigurationCreateParams.Swish;
    export type Twint = Stripe_.PaymentMethodConfigurationCreateParams.Twint;
    export type Upi = Stripe_.PaymentMethodConfigurationCreateParams.Upi;
    export type UsBankAccount = Stripe_.PaymentMethodConfigurationCreateParams.UsBankAccount;
    export type WechatPay = Stripe_.PaymentMethodConfigurationCreateParams.WechatPay;
    export type Zip = Stripe_.PaymentMethodConfigurationCreateParams.Zip;
    export namespace AcssDebit {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.AcssDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.AcssDebit.DisplayPreference.Preference;
      }
    }
    export namespace Affirm {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Affirm.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Affirm.DisplayPreference.Preference;
      }
    }
    export namespace AfterpayClearpay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.AfterpayClearpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.AfterpayClearpay.DisplayPreference.Preference;
      }
    }
    export namespace Alipay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Alipay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Alipay.DisplayPreference.Preference;
      }
    }
    export namespace Alma {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Alma.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Alma.DisplayPreference.Preference;
      }
    }
    export namespace AmazonPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.AmazonPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.AmazonPay.DisplayPreference.Preference;
      }
    }
    export namespace ApplePay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.ApplePay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.ApplePay.DisplayPreference.Preference;
      }
    }
    export namespace ApplePayLater {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.ApplePayLater.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.ApplePayLater.DisplayPreference.Preference;
      }
    }
    export namespace AuBecsDebit {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.AuBecsDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.AuBecsDebit.DisplayPreference.Preference;
      }
    }
    export namespace BacsDebit {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.BacsDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.BacsDebit.DisplayPreference.Preference;
      }
    }
    export namespace Bancontact {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Bancontact.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Bancontact.DisplayPreference.Preference;
      }
    }
    export namespace Billie {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Billie.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Billie.DisplayPreference.Preference;
      }
    }
    export namespace Bizum {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Bizum.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Bizum.DisplayPreference.Preference;
      }
    }
    export namespace Blik {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Blik.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Blik.DisplayPreference.Preference;
      }
    }
    export namespace Boleto {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Boleto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Boleto.DisplayPreference.Preference;
      }
    }
    export namespace Card {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Card.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Card.DisplayPreference.Preference;
      }
    }
    export namespace CartesBancaires {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.CartesBancaires.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.CartesBancaires.DisplayPreference.Preference;
      }
    }
    export namespace Cashapp {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Cashapp.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Cashapp.DisplayPreference.Preference;
      }
    }
    export namespace Crypto {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Crypto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Crypto.DisplayPreference.Preference;
      }
    }
    export namespace CustomerBalance {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.CustomerBalance.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.CustomerBalance.DisplayPreference.Preference;
      }
    }
    export namespace Eps {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Eps.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Eps.DisplayPreference.Preference;
      }
    }
    export namespace Fpx {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Fpx.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Fpx.DisplayPreference.Preference;
      }
    }
    export namespace FrMealVoucherConecs {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.FrMealVoucherConecs.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.FrMealVoucherConecs.DisplayPreference.Preference;
      }
    }
    export namespace Giropay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Giropay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Giropay.DisplayPreference.Preference;
      }
    }
    export namespace GooglePay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.GooglePay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.GooglePay.DisplayPreference.Preference;
      }
    }
    export namespace Grabpay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Grabpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Grabpay.DisplayPreference.Preference;
      }
    }
    export namespace Ideal {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Ideal.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Ideal.DisplayPreference.Preference;
      }
    }
    export namespace Jcb {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Jcb.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Jcb.DisplayPreference.Preference;
      }
    }
    export namespace KakaoPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.KakaoPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.KakaoPay.DisplayPreference.Preference;
      }
    }
    export namespace Klarna {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Klarna.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Klarna.DisplayPreference.Preference;
      }
    }
    export namespace Konbini {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Konbini.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Konbini.DisplayPreference.Preference;
      }
    }
    export namespace KrCard {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.KrCard.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.KrCard.DisplayPreference.Preference;
      }
    }
    export namespace Link {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Link.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Link.DisplayPreference.Preference;
      }
    }
    export namespace MbWay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.MbWay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.MbWay.DisplayPreference.Preference;
      }
    }
    export namespace Mobilepay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Mobilepay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Mobilepay.DisplayPreference.Preference;
      }
    }
    export namespace Multibanco {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Multibanco.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Multibanco.DisplayPreference.Preference;
      }
    }
    export namespace NaverPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.NaverPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.NaverPay.DisplayPreference.Preference;
      }
    }
    export namespace NzBankAccount {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.NzBankAccount.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.NzBankAccount.DisplayPreference.Preference;
      }
    }
    export namespace Oxxo {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Oxxo.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Oxxo.DisplayPreference.Preference;
      }
    }
    export namespace P24 {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.P24.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.P24.DisplayPreference.Preference;
      }
    }
    export namespace PayByBank {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.PayByBank.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.PayByBank.DisplayPreference.Preference;
      }
    }
    export namespace Payco {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Payco.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Payco.DisplayPreference.Preference;
      }
    }
    export namespace Paynow {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Paynow.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Paynow.DisplayPreference.Preference;
      }
    }
    export namespace Paypal {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Paypal.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Paypal.DisplayPreference.Preference;
      }
    }
    export namespace Payto {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Payto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Payto.DisplayPreference.Preference;
      }
    }
    export namespace Pix {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Pix.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Pix.DisplayPreference.Preference;
      }
    }
    export namespace Promptpay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Promptpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Promptpay.DisplayPreference.Preference;
      }
    }
    export namespace RevolutPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.RevolutPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.RevolutPay.DisplayPreference.Preference;
      }
    }
    export namespace SamsungPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.SamsungPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.SamsungPay.DisplayPreference.Preference;
      }
    }
    export namespace Satispay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Satispay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Satispay.DisplayPreference.Preference;
      }
    }
    export namespace Scalapay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Scalapay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Scalapay.DisplayPreference.Preference;
      }
    }
    export namespace SepaDebit {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.SepaDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.SepaDebit.DisplayPreference.Preference;
      }
    }
    export namespace Sofort {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Sofort.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Sofort.DisplayPreference.Preference;
      }
    }
    export namespace Sunbit {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Sunbit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Sunbit.DisplayPreference.Preference;
      }
    }
    export namespace Swish {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Swish.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Swish.DisplayPreference.Preference;
      }
    }
    export namespace Twint {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Twint.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Twint.DisplayPreference.Preference;
      }
    }
    export namespace Upi {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Upi.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Upi.DisplayPreference.Preference;
      }
    }
    export namespace UsBankAccount {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.UsBankAccount.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.UsBankAccount.DisplayPreference.Preference;
      }
    }
    export namespace WechatPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.WechatPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.WechatPay.DisplayPreference.Preference;
      }
    }
    export namespace Zip {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationCreateParams.Zip.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationCreateParams.Zip.DisplayPreference.Preference;
      }
    }
  }
  export namespace PaymentMethodConfigurationUpdateParams {
    export type AcssDebit = Stripe_.PaymentMethodConfigurationUpdateParams.AcssDebit;
    export type Affirm = Stripe_.PaymentMethodConfigurationUpdateParams.Affirm;
    export type AfterpayClearpay = Stripe_.PaymentMethodConfigurationUpdateParams.AfterpayClearpay;
    export type Alipay = Stripe_.PaymentMethodConfigurationUpdateParams.Alipay;
    export type Alma = Stripe_.PaymentMethodConfigurationUpdateParams.Alma;
    export type AmazonPay = Stripe_.PaymentMethodConfigurationUpdateParams.AmazonPay;
    export type ApplePay = Stripe_.PaymentMethodConfigurationUpdateParams.ApplePay;
    export type ApplePayLater = Stripe_.PaymentMethodConfigurationUpdateParams.ApplePayLater;
    export type AuBecsDebit = Stripe_.PaymentMethodConfigurationUpdateParams.AuBecsDebit;
    export type BacsDebit = Stripe_.PaymentMethodConfigurationUpdateParams.BacsDebit;
    export type Bancontact = Stripe_.PaymentMethodConfigurationUpdateParams.Bancontact;
    export type Billie = Stripe_.PaymentMethodConfigurationUpdateParams.Billie;
    export type Bizum = Stripe_.PaymentMethodConfigurationUpdateParams.Bizum;
    export type Blik = Stripe_.PaymentMethodConfigurationUpdateParams.Blik;
    export type Boleto = Stripe_.PaymentMethodConfigurationUpdateParams.Boleto;
    export type Card = Stripe_.PaymentMethodConfigurationUpdateParams.Card;
    export type CartesBancaires = Stripe_.PaymentMethodConfigurationUpdateParams.CartesBancaires;
    export type Cashapp = Stripe_.PaymentMethodConfigurationUpdateParams.Cashapp;
    export type Crypto = Stripe_.PaymentMethodConfigurationUpdateParams.Crypto;
    export type CustomerBalance = Stripe_.PaymentMethodConfigurationUpdateParams.CustomerBalance;
    export type Eps = Stripe_.PaymentMethodConfigurationUpdateParams.Eps;
    export type Fpx = Stripe_.PaymentMethodConfigurationUpdateParams.Fpx;
    export type FrMealVoucherConecs = Stripe_.PaymentMethodConfigurationUpdateParams.FrMealVoucherConecs;
    export type Giropay = Stripe_.PaymentMethodConfigurationUpdateParams.Giropay;
    export type GooglePay = Stripe_.PaymentMethodConfigurationUpdateParams.GooglePay;
    export type Grabpay = Stripe_.PaymentMethodConfigurationUpdateParams.Grabpay;
    export type Ideal = Stripe_.PaymentMethodConfigurationUpdateParams.Ideal;
    export type Jcb = Stripe_.PaymentMethodConfigurationUpdateParams.Jcb;
    export type KakaoPay = Stripe_.PaymentMethodConfigurationUpdateParams.KakaoPay;
    export type Klarna = Stripe_.PaymentMethodConfigurationUpdateParams.Klarna;
    export type Konbini = Stripe_.PaymentMethodConfigurationUpdateParams.Konbini;
    export type KrCard = Stripe_.PaymentMethodConfigurationUpdateParams.KrCard;
    export type Link = Stripe_.PaymentMethodConfigurationUpdateParams.Link;
    export type MbWay = Stripe_.PaymentMethodConfigurationUpdateParams.MbWay;
    export type Mobilepay = Stripe_.PaymentMethodConfigurationUpdateParams.Mobilepay;
    export type Multibanco = Stripe_.PaymentMethodConfigurationUpdateParams.Multibanco;
    export type NaverPay = Stripe_.PaymentMethodConfigurationUpdateParams.NaverPay;
    export type NzBankAccount = Stripe_.PaymentMethodConfigurationUpdateParams.NzBankAccount;
    export type Oxxo = Stripe_.PaymentMethodConfigurationUpdateParams.Oxxo;
    export type P24 = Stripe_.PaymentMethodConfigurationUpdateParams.P24;
    export type PayByBank = Stripe_.PaymentMethodConfigurationUpdateParams.PayByBank;
    export type Payco = Stripe_.PaymentMethodConfigurationUpdateParams.Payco;
    export type Paynow = Stripe_.PaymentMethodConfigurationUpdateParams.Paynow;
    export type Paypal = Stripe_.PaymentMethodConfigurationUpdateParams.Paypal;
    export type Payto = Stripe_.PaymentMethodConfigurationUpdateParams.Payto;
    export type Pix = Stripe_.PaymentMethodConfigurationUpdateParams.Pix;
    export type Promptpay = Stripe_.PaymentMethodConfigurationUpdateParams.Promptpay;
    export type RevolutPay = Stripe_.PaymentMethodConfigurationUpdateParams.RevolutPay;
    export type SamsungPay = Stripe_.PaymentMethodConfigurationUpdateParams.SamsungPay;
    export type Satispay = Stripe_.PaymentMethodConfigurationUpdateParams.Satispay;
    export type Scalapay = Stripe_.PaymentMethodConfigurationUpdateParams.Scalapay;
    export type SepaDebit = Stripe_.PaymentMethodConfigurationUpdateParams.SepaDebit;
    export type Sofort = Stripe_.PaymentMethodConfigurationUpdateParams.Sofort;
    export type Sunbit = Stripe_.PaymentMethodConfigurationUpdateParams.Sunbit;
    export type Swish = Stripe_.PaymentMethodConfigurationUpdateParams.Swish;
    export type Twint = Stripe_.PaymentMethodConfigurationUpdateParams.Twint;
    export type Upi = Stripe_.PaymentMethodConfigurationUpdateParams.Upi;
    export type UsBankAccount = Stripe_.PaymentMethodConfigurationUpdateParams.UsBankAccount;
    export type WechatPay = Stripe_.PaymentMethodConfigurationUpdateParams.WechatPay;
    export type Zip = Stripe_.PaymentMethodConfigurationUpdateParams.Zip;
    export namespace AcssDebit {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.AcssDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.AcssDebit.DisplayPreference.Preference;
      }
    }
    export namespace Affirm {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Affirm.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Affirm.DisplayPreference.Preference;
      }
    }
    export namespace AfterpayClearpay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.AfterpayClearpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.AfterpayClearpay.DisplayPreference.Preference;
      }
    }
    export namespace Alipay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Alipay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Alipay.DisplayPreference.Preference;
      }
    }
    export namespace Alma {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Alma.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Alma.DisplayPreference.Preference;
      }
    }
    export namespace AmazonPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.AmazonPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.AmazonPay.DisplayPreference.Preference;
      }
    }
    export namespace ApplePay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.ApplePay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.ApplePay.DisplayPreference.Preference;
      }
    }
    export namespace ApplePayLater {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.ApplePayLater.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.ApplePayLater.DisplayPreference.Preference;
      }
    }
    export namespace AuBecsDebit {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.AuBecsDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.AuBecsDebit.DisplayPreference.Preference;
      }
    }
    export namespace BacsDebit {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.BacsDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.BacsDebit.DisplayPreference.Preference;
      }
    }
    export namespace Bancontact {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Bancontact.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Bancontact.DisplayPreference.Preference;
      }
    }
    export namespace Billie {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Billie.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Billie.DisplayPreference.Preference;
      }
    }
    export namespace Bizum {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Bizum.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Bizum.DisplayPreference.Preference;
      }
    }
    export namespace Blik {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Blik.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Blik.DisplayPreference.Preference;
      }
    }
    export namespace Boleto {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Boleto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Boleto.DisplayPreference.Preference;
      }
    }
    export namespace Card {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Card.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Card.DisplayPreference.Preference;
      }
    }
    export namespace CartesBancaires {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.CartesBancaires.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.CartesBancaires.DisplayPreference.Preference;
      }
    }
    export namespace Cashapp {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Cashapp.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Cashapp.DisplayPreference.Preference;
      }
    }
    export namespace Crypto {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Crypto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Crypto.DisplayPreference.Preference;
      }
    }
    export namespace CustomerBalance {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.CustomerBalance.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.CustomerBalance.DisplayPreference.Preference;
      }
    }
    export namespace Eps {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Eps.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Eps.DisplayPreference.Preference;
      }
    }
    export namespace Fpx {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Fpx.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Fpx.DisplayPreference.Preference;
      }
    }
    export namespace FrMealVoucherConecs {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.FrMealVoucherConecs.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.FrMealVoucherConecs.DisplayPreference.Preference;
      }
    }
    export namespace Giropay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Giropay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Giropay.DisplayPreference.Preference;
      }
    }
    export namespace GooglePay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.GooglePay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.GooglePay.DisplayPreference.Preference;
      }
    }
    export namespace Grabpay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Grabpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Grabpay.DisplayPreference.Preference;
      }
    }
    export namespace Ideal {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Ideal.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Ideal.DisplayPreference.Preference;
      }
    }
    export namespace Jcb {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Jcb.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Jcb.DisplayPreference.Preference;
      }
    }
    export namespace KakaoPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.KakaoPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.KakaoPay.DisplayPreference.Preference;
      }
    }
    export namespace Klarna {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Klarna.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Klarna.DisplayPreference.Preference;
      }
    }
    export namespace Konbini {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Konbini.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Konbini.DisplayPreference.Preference;
      }
    }
    export namespace KrCard {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.KrCard.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.KrCard.DisplayPreference.Preference;
      }
    }
    export namespace Link {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Link.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Link.DisplayPreference.Preference;
      }
    }
    export namespace MbWay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.MbWay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.MbWay.DisplayPreference.Preference;
      }
    }
    export namespace Mobilepay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Mobilepay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Mobilepay.DisplayPreference.Preference;
      }
    }
    export namespace Multibanco {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Multibanco.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Multibanco.DisplayPreference.Preference;
      }
    }
    export namespace NaverPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.NaverPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.NaverPay.DisplayPreference.Preference;
      }
    }
    export namespace NzBankAccount {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.NzBankAccount.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.NzBankAccount.DisplayPreference.Preference;
      }
    }
    export namespace Oxxo {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Oxxo.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Oxxo.DisplayPreference.Preference;
      }
    }
    export namespace P24 {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.P24.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.P24.DisplayPreference.Preference;
      }
    }
    export namespace PayByBank {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.PayByBank.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.PayByBank.DisplayPreference.Preference;
      }
    }
    export namespace Payco {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Payco.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Payco.DisplayPreference.Preference;
      }
    }
    export namespace Paynow {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Paynow.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Paynow.DisplayPreference.Preference;
      }
    }
    export namespace Paypal {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Paypal.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Paypal.DisplayPreference.Preference;
      }
    }
    export namespace Payto {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Payto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Payto.DisplayPreference.Preference;
      }
    }
    export namespace Pix {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Pix.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Pix.DisplayPreference.Preference;
      }
    }
    export namespace Promptpay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Promptpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Promptpay.DisplayPreference.Preference;
      }
    }
    export namespace RevolutPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.RevolutPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.RevolutPay.DisplayPreference.Preference;
      }
    }
    export namespace SamsungPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.SamsungPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.SamsungPay.DisplayPreference.Preference;
      }
    }
    export namespace Satispay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Satispay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Satispay.DisplayPreference.Preference;
      }
    }
    export namespace Scalapay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Scalapay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Scalapay.DisplayPreference.Preference;
      }
    }
    export namespace SepaDebit {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.SepaDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.SepaDebit.DisplayPreference.Preference;
      }
    }
    export namespace Sofort {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Sofort.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Sofort.DisplayPreference.Preference;
      }
    }
    export namespace Sunbit {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Sunbit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Sunbit.DisplayPreference.Preference;
      }
    }
    export namespace Swish {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Swish.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Swish.DisplayPreference.Preference;
      }
    }
    export namespace Twint {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Twint.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Twint.DisplayPreference.Preference;
      }
    }
    export namespace Upi {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Upi.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Upi.DisplayPreference.Preference;
      }
    }
    export namespace UsBankAccount {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.UsBankAccount.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.UsBankAccount.DisplayPreference.Preference;
      }
    }
    export namespace WechatPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.WechatPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.WechatPay.DisplayPreference.Preference;
      }
    }
    export namespace Zip {
      export type DisplayPreference = Stripe_.PaymentMethodConfigurationUpdateParams.Zip.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfigurationUpdateParams.Zip.DisplayPreference.Preference;
      }
    }
  }
  export namespace PaymentMethodConfiguration {
    export type AcssDebit = Stripe_.PaymentMethodConfiguration.AcssDebit;
    export type Affirm = Stripe_.PaymentMethodConfiguration.Affirm;
    export type AfterpayClearpay = Stripe_.PaymentMethodConfiguration.AfterpayClearpay;
    export type Alipay = Stripe_.PaymentMethodConfiguration.Alipay;
    export type Alma = Stripe_.PaymentMethodConfiguration.Alma;
    export type AmazonPay = Stripe_.PaymentMethodConfiguration.AmazonPay;
    export type ApplePay = Stripe_.PaymentMethodConfiguration.ApplePay;
    export type AuBecsDebit = Stripe_.PaymentMethodConfiguration.AuBecsDebit;
    export type BacsDebit = Stripe_.PaymentMethodConfiguration.BacsDebit;
    export type Bancontact = Stripe_.PaymentMethodConfiguration.Bancontact;
    export type Billie = Stripe_.PaymentMethodConfiguration.Billie;
    export type Bizum = Stripe_.PaymentMethodConfiguration.Bizum;
    export type Blik = Stripe_.PaymentMethodConfiguration.Blik;
    export type Boleto = Stripe_.PaymentMethodConfiguration.Boleto;
    export type Card = Stripe_.PaymentMethodConfiguration.Card;
    export type CartesBancaires = Stripe_.PaymentMethodConfiguration.CartesBancaires;
    export type Cashapp = Stripe_.PaymentMethodConfiguration.Cashapp;
    export type Crypto = Stripe_.PaymentMethodConfiguration.Crypto;
    export type CustomerBalance = Stripe_.PaymentMethodConfiguration.CustomerBalance;
    export type Eps = Stripe_.PaymentMethodConfiguration.Eps;
    export type Fpx = Stripe_.PaymentMethodConfiguration.Fpx;
    export type Giropay = Stripe_.PaymentMethodConfiguration.Giropay;
    export type GooglePay = Stripe_.PaymentMethodConfiguration.GooglePay;
    export type Grabpay = Stripe_.PaymentMethodConfiguration.Grabpay;
    export type Ideal = Stripe_.PaymentMethodConfiguration.Ideal;
    export type Jcb = Stripe_.PaymentMethodConfiguration.Jcb;
    export type KakaoPay = Stripe_.PaymentMethodConfiguration.KakaoPay;
    export type Klarna = Stripe_.PaymentMethodConfiguration.Klarna;
    export type Konbini = Stripe_.PaymentMethodConfiguration.Konbini;
    export type KrCard = Stripe_.PaymentMethodConfiguration.KrCard;
    export type Link = Stripe_.PaymentMethodConfiguration.Link;
    export type MbWay = Stripe_.PaymentMethodConfiguration.MbWay;
    export type Mobilepay = Stripe_.PaymentMethodConfiguration.Mobilepay;
    export type Multibanco = Stripe_.PaymentMethodConfiguration.Multibanco;
    export type NaverPay = Stripe_.PaymentMethodConfiguration.NaverPay;
    export type NzBankAccount = Stripe_.PaymentMethodConfiguration.NzBankAccount;
    export type Oxxo = Stripe_.PaymentMethodConfiguration.Oxxo;
    export type P24 = Stripe_.PaymentMethodConfiguration.P24;
    export type PayByBank = Stripe_.PaymentMethodConfiguration.PayByBank;
    export type Payco = Stripe_.PaymentMethodConfiguration.Payco;
    export type Paynow = Stripe_.PaymentMethodConfiguration.Paynow;
    export type Paypal = Stripe_.PaymentMethodConfiguration.Paypal;
    export type Payto = Stripe_.PaymentMethodConfiguration.Payto;
    export type Pix = Stripe_.PaymentMethodConfiguration.Pix;
    export type Promptpay = Stripe_.PaymentMethodConfiguration.Promptpay;
    export type RevolutPay = Stripe_.PaymentMethodConfiguration.RevolutPay;
    export type SamsungPay = Stripe_.PaymentMethodConfiguration.SamsungPay;
    export type Satispay = Stripe_.PaymentMethodConfiguration.Satispay;
    export type Scalapay = Stripe_.PaymentMethodConfiguration.Scalapay;
    export type SepaDebit = Stripe_.PaymentMethodConfiguration.SepaDebit;
    export type Sofort = Stripe_.PaymentMethodConfiguration.Sofort;
    export type Sunbit = Stripe_.PaymentMethodConfiguration.Sunbit;
    export type Swish = Stripe_.PaymentMethodConfiguration.Swish;
    export type Twint = Stripe_.PaymentMethodConfiguration.Twint;
    export type Upi = Stripe_.PaymentMethodConfiguration.Upi;
    export type UsBankAccount = Stripe_.PaymentMethodConfiguration.UsBankAccount;
    export type WechatPay = Stripe_.PaymentMethodConfiguration.WechatPay;
    export type Zip = Stripe_.PaymentMethodConfiguration.Zip;
    export namespace AcssDebit {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.AcssDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.AcssDebit.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.AcssDebit.DisplayPreference.Value;
      }
    }
    export namespace Affirm {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Affirm.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Affirm.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Affirm.DisplayPreference.Value;
      }
    }
    export namespace AfterpayClearpay {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.AfterpayClearpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.AfterpayClearpay.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.AfterpayClearpay.DisplayPreference.Value;
      }
    }
    export namespace Alipay {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Alipay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Alipay.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Alipay.DisplayPreference.Value;
      }
    }
    export namespace Alma {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Alma.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Alma.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Alma.DisplayPreference.Value;
      }
    }
    export namespace AmazonPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.AmazonPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.AmazonPay.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.AmazonPay.DisplayPreference.Value;
      }
    }
    export namespace ApplePay {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.ApplePay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.ApplePay.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.ApplePay.DisplayPreference.Value;
      }
    }
    export namespace AuBecsDebit {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.AuBecsDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.AuBecsDebit.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.AuBecsDebit.DisplayPreference.Value;
      }
    }
    export namespace BacsDebit {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.BacsDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.BacsDebit.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.BacsDebit.DisplayPreference.Value;
      }
    }
    export namespace Bancontact {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Bancontact.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Bancontact.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Bancontact.DisplayPreference.Value;
      }
    }
    export namespace Billie {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Billie.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Billie.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Billie.DisplayPreference.Value;
      }
    }
    export namespace Bizum {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Bizum.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Bizum.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Bizum.DisplayPreference.Value;
      }
    }
    export namespace Blik {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Blik.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Blik.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Blik.DisplayPreference.Value;
      }
    }
    export namespace Boleto {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Boleto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Boleto.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Boleto.DisplayPreference.Value;
      }
    }
    export namespace Card {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Card.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Card.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Card.DisplayPreference.Value;
      }
    }
    export namespace CartesBancaires {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.CartesBancaires.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.CartesBancaires.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.CartesBancaires.DisplayPreference.Value;
      }
    }
    export namespace Cashapp {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Cashapp.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Cashapp.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Cashapp.DisplayPreference.Value;
      }
    }
    export namespace Crypto {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Crypto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Crypto.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Crypto.DisplayPreference.Value;
      }
    }
    export namespace CustomerBalance {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.CustomerBalance.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.CustomerBalance.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.CustomerBalance.DisplayPreference.Value;
      }
    }
    export namespace Eps {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Eps.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Eps.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Eps.DisplayPreference.Value;
      }
    }
    export namespace Fpx {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Fpx.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Fpx.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Fpx.DisplayPreference.Value;
      }
    }
    export namespace Giropay {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Giropay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Giropay.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Giropay.DisplayPreference.Value;
      }
    }
    export namespace GooglePay {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.GooglePay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.GooglePay.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.GooglePay.DisplayPreference.Value;
      }
    }
    export namespace Grabpay {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Grabpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Grabpay.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Grabpay.DisplayPreference.Value;
      }
    }
    export namespace Ideal {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Ideal.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Ideal.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Ideal.DisplayPreference.Value;
      }
    }
    export namespace Jcb {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Jcb.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Jcb.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Jcb.DisplayPreference.Value;
      }
    }
    export namespace KakaoPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.KakaoPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.KakaoPay.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.KakaoPay.DisplayPreference.Value;
      }
    }
    export namespace Klarna {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Klarna.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Klarna.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Klarna.DisplayPreference.Value;
      }
    }
    export namespace Konbini {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Konbini.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Konbini.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Konbini.DisplayPreference.Value;
      }
    }
    export namespace KrCard {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.KrCard.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.KrCard.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.KrCard.DisplayPreference.Value;
      }
    }
    export namespace Link {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Link.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Link.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Link.DisplayPreference.Value;
      }
    }
    export namespace MbWay {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.MbWay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.MbWay.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.MbWay.DisplayPreference.Value;
      }
    }
    export namespace Mobilepay {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Mobilepay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Mobilepay.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Mobilepay.DisplayPreference.Value;
      }
    }
    export namespace Multibanco {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Multibanco.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Multibanco.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Multibanco.DisplayPreference.Value;
      }
    }
    export namespace NaverPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.NaverPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.NaverPay.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.NaverPay.DisplayPreference.Value;
      }
    }
    export namespace NzBankAccount {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.NzBankAccount.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.NzBankAccount.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.NzBankAccount.DisplayPreference.Value;
      }
    }
    export namespace Oxxo {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Oxxo.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Oxxo.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Oxxo.DisplayPreference.Value;
      }
    }
    export namespace P24 {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.P24.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.P24.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.P24.DisplayPreference.Value;
      }
    }
    export namespace PayByBank {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.PayByBank.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.PayByBank.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.PayByBank.DisplayPreference.Value;
      }
    }
    export namespace Payco {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Payco.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Payco.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Payco.DisplayPreference.Value;
      }
    }
    export namespace Paynow {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Paynow.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Paynow.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Paynow.DisplayPreference.Value;
      }
    }
    export namespace Paypal {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Paypal.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Paypal.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Paypal.DisplayPreference.Value;
      }
    }
    export namespace Payto {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Payto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Payto.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Payto.DisplayPreference.Value;
      }
    }
    export namespace Pix {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Pix.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Pix.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Pix.DisplayPreference.Value;
      }
    }
    export namespace Promptpay {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Promptpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Promptpay.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Promptpay.DisplayPreference.Value;
      }
    }
    export namespace RevolutPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.RevolutPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.RevolutPay.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.RevolutPay.DisplayPreference.Value;
      }
    }
    export namespace SamsungPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.SamsungPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.SamsungPay.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.SamsungPay.DisplayPreference.Value;
      }
    }
    export namespace Satispay {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Satispay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Satispay.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Satispay.DisplayPreference.Value;
      }
    }
    export namespace Scalapay {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Scalapay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Scalapay.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Scalapay.DisplayPreference.Value;
      }
    }
    export namespace SepaDebit {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.SepaDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.SepaDebit.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.SepaDebit.DisplayPreference.Value;
      }
    }
    export namespace Sofort {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Sofort.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Sofort.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Sofort.DisplayPreference.Value;
      }
    }
    export namespace Sunbit {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Sunbit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Sunbit.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Sunbit.DisplayPreference.Value;
      }
    }
    export namespace Swish {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Swish.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Swish.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Swish.DisplayPreference.Value;
      }
    }
    export namespace Twint {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Twint.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Twint.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Twint.DisplayPreference.Value;
      }
    }
    export namespace Upi {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Upi.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Upi.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Upi.DisplayPreference.Value;
      }
    }
    export namespace UsBankAccount {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.UsBankAccount.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.UsBankAccount.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.UsBankAccount.DisplayPreference.Value;
      }
    }
    export namespace WechatPay {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.WechatPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.WechatPay.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.WechatPay.DisplayPreference.Value;
      }
    }
    export namespace Zip {
      export type DisplayPreference = Stripe_.PaymentMethodConfiguration.Zip.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe_.PaymentMethodConfiguration.Zip.DisplayPreference.Preference;
        export type Value = Stripe_.PaymentMethodConfiguration.Zip.DisplayPreference.Value;
      }
    }
  }
  export namespace PaymentMethodDomain {
    export type AmazonPay = Stripe_.PaymentMethodDomain.AmazonPay;
    export type ApplePay = Stripe_.PaymentMethodDomain.ApplePay;
    export type GooglePay = Stripe_.PaymentMethodDomain.GooglePay;
    export type Klarna = Stripe_.PaymentMethodDomain.Klarna;
    export type Link = Stripe_.PaymentMethodDomain.Link;
    export type Paypal = Stripe_.PaymentMethodDomain.Paypal;
    export namespace AmazonPay {
      export type Status = Stripe_.PaymentMethodDomain.AmazonPay.Status;
      export type StatusDetails = Stripe_.PaymentMethodDomain.AmazonPay.StatusDetails;
    }
    export namespace ApplePay {
      export type Status = Stripe_.PaymentMethodDomain.ApplePay.Status;
      export type StatusDetails = Stripe_.PaymentMethodDomain.ApplePay.StatusDetails;
    }
    export namespace GooglePay {
      export type Status = Stripe_.PaymentMethodDomain.GooglePay.Status;
      export type StatusDetails = Stripe_.PaymentMethodDomain.GooglePay.StatusDetails;
    }
    export namespace Klarna {
      export type Status = Stripe_.PaymentMethodDomain.Klarna.Status;
      export type StatusDetails = Stripe_.PaymentMethodDomain.Klarna.StatusDetails;
    }
    export namespace Link {
      export type Status = Stripe_.PaymentMethodDomain.Link.Status;
      export type StatusDetails = Stripe_.PaymentMethodDomain.Link.StatusDetails;
    }
    export namespace Paypal {
      export type Status = Stripe_.PaymentMethodDomain.Paypal.Status;
      export type StatusDetails = Stripe_.PaymentMethodDomain.Paypal.StatusDetails;
    }
  }
  export namespace PaymentRecordReportPaymentParams {
    export type AmountRequested = Stripe_.PaymentRecordReportPaymentParams.AmountRequested;
    export type PaymentMethodDetails = Stripe_.PaymentRecordReportPaymentParams.PaymentMethodDetails;
    export type CustomerDetails = Stripe_.PaymentRecordReportPaymentParams.CustomerDetails;
    export type CustomerPresence = Stripe_.PaymentRecordReportPaymentParams.CustomerPresence;
    export type Failed = Stripe_.PaymentRecordReportPaymentParams.Failed;
    export type Guaranteed = Stripe_.PaymentRecordReportPaymentParams.Guaranteed;
    export type Outcome = Stripe_.PaymentRecordReportPaymentParams.Outcome;
    export type ProcessorDetails = Stripe_.PaymentRecordReportPaymentParams.ProcessorDetails;
    export type ShippingDetails = Stripe_.PaymentRecordReportPaymentParams.ShippingDetails;
    export namespace PaymentMethodDetails {
      export type BillingDetails = Stripe_.PaymentRecordReportPaymentParams.PaymentMethodDetails.BillingDetails;
      export type Custom = Stripe_.PaymentRecordReportPaymentParams.PaymentMethodDetails.Custom;
    }
    export namespace ProcessorDetails {
      export type Custom = Stripe_.PaymentRecordReportPaymentParams.ProcessorDetails.Custom;
    }
  }
  export namespace PaymentRecordReportPaymentAttemptParams {
    export type Failed = Stripe_.PaymentRecordReportPaymentAttemptParams.Failed;
    export type Guaranteed = Stripe_.PaymentRecordReportPaymentAttemptParams.Guaranteed;
    export type Outcome = Stripe_.PaymentRecordReportPaymentAttemptParams.Outcome;
    export type PaymentMethodDetails = Stripe_.PaymentRecordReportPaymentAttemptParams.PaymentMethodDetails;
    export type ShippingDetails = Stripe_.PaymentRecordReportPaymentAttemptParams.ShippingDetails;
    export namespace PaymentMethodDetails {
      export type BillingDetails = Stripe_.PaymentRecordReportPaymentAttemptParams.PaymentMethodDetails.BillingDetails;
      export type Custom = Stripe_.PaymentRecordReportPaymentAttemptParams.PaymentMethodDetails.Custom;
    }
  }
  export namespace PaymentRecordReportPaymentAttemptInformationalParams {
    export type CustomerDetails = Stripe_.PaymentRecordReportPaymentAttemptInformationalParams.CustomerDetails;
    export type ShippingDetails = Stripe_.PaymentRecordReportPaymentAttemptInformationalParams.ShippingDetails;
  }
  export namespace PaymentRecordReportRefundParams {
    export type ProcessorDetails = Stripe_.PaymentRecordReportRefundParams.ProcessorDetails;
    export type Amount = Stripe_.PaymentRecordReportRefundParams.Amount;
    export type Refunded = Stripe_.PaymentRecordReportRefundParams.Refunded;
    export namespace ProcessorDetails {
      export type Custom = Stripe_.PaymentRecordReportRefundParams.ProcessorDetails.Custom;
    }
  }
  export namespace PaymentRecord {
    export type Amount = Stripe_.PaymentRecord.Amount;
    export type AmountAuthorized = Stripe_.PaymentRecord.AmountAuthorized;
    export type AmountCanceled = Stripe_.PaymentRecord.AmountCanceled;
    export type AmountFailed = Stripe_.PaymentRecord.AmountFailed;
    export type AmountGuaranteed = Stripe_.PaymentRecord.AmountGuaranteed;
    export type AmountRefunded = Stripe_.PaymentRecord.AmountRefunded;
    export type AmountRequested = Stripe_.PaymentRecord.AmountRequested;
    export type CustomerDetails = Stripe_.PaymentRecord.CustomerDetails;
    export type CustomerPresence = Stripe_.PaymentRecord.CustomerPresence;
    export type PaymentMethodDetails = Stripe_.PaymentRecord.PaymentMethodDetails;
    export type ProcessorDetails = Stripe_.PaymentRecord.ProcessorDetails;
    export type ReportedBy = Stripe_.PaymentRecord.ReportedBy;
    export type ShippingDetails = Stripe_.PaymentRecord.ShippingDetails;
    export namespace PaymentMethodDetails {
      export type AchCreditTransfer = Stripe_.PaymentRecord.PaymentMethodDetails.AchCreditTransfer;
      export type AchDebit = Stripe_.PaymentRecord.PaymentMethodDetails.AchDebit;
      export type AcssDebit = Stripe_.PaymentRecord.PaymentMethodDetails.AcssDebit;
      export type Affirm = Stripe_.PaymentRecord.PaymentMethodDetails.Affirm;
      export type AfterpayClearpay = Stripe_.PaymentRecord.PaymentMethodDetails.AfterpayClearpay;
      export type Alipay = Stripe_.PaymentRecord.PaymentMethodDetails.Alipay;
      export type Alma = Stripe_.PaymentRecord.PaymentMethodDetails.Alma;
      export type AmazonPay = Stripe_.PaymentRecord.PaymentMethodDetails.AmazonPay;
      export type AuBecsDebit = Stripe_.PaymentRecord.PaymentMethodDetails.AuBecsDebit;
      export type BacsDebit = Stripe_.PaymentRecord.PaymentMethodDetails.BacsDebit;
      export type Bancontact = Stripe_.PaymentRecord.PaymentMethodDetails.Bancontact;
      export type Billie = Stripe_.PaymentRecord.PaymentMethodDetails.Billie;
      export type BillingDetails = Stripe_.PaymentRecord.PaymentMethodDetails.BillingDetails;
      export type Bizum = Stripe_.PaymentRecord.PaymentMethodDetails.Bizum;
      export type Blik = Stripe_.PaymentRecord.PaymentMethodDetails.Blik;
      export type Boleto = Stripe_.PaymentRecord.PaymentMethodDetails.Boleto;
      export type Card = Stripe_.PaymentRecord.PaymentMethodDetails.Card;
      export type CardPresent = Stripe_.PaymentRecord.PaymentMethodDetails.CardPresent;
      export type Cashapp = Stripe_.PaymentRecord.PaymentMethodDetails.Cashapp;
      export type Crypto = Stripe_.PaymentRecord.PaymentMethodDetails.Crypto;
      export type Custom = Stripe_.PaymentRecord.PaymentMethodDetails.Custom;
      export type CustomerBalance = Stripe_.PaymentRecord.PaymentMethodDetails.CustomerBalance;
      export type Eps = Stripe_.PaymentRecord.PaymentMethodDetails.Eps;
      export type Fpx = Stripe_.PaymentRecord.PaymentMethodDetails.Fpx;
      export type Giropay = Stripe_.PaymentRecord.PaymentMethodDetails.Giropay;
      export type Grabpay = Stripe_.PaymentRecord.PaymentMethodDetails.Grabpay;
      export type Ideal = Stripe_.PaymentRecord.PaymentMethodDetails.Ideal;
      export type InteracPresent = Stripe_.PaymentRecord.PaymentMethodDetails.InteracPresent;
      export type KakaoPay = Stripe_.PaymentRecord.PaymentMethodDetails.KakaoPay;
      export type Klarna = Stripe_.PaymentRecord.PaymentMethodDetails.Klarna;
      export type Konbini = Stripe_.PaymentRecord.PaymentMethodDetails.Konbini;
      export type KrCard = Stripe_.PaymentRecord.PaymentMethodDetails.KrCard;
      export type Link = Stripe_.PaymentRecord.PaymentMethodDetails.Link;
      export type MbWay = Stripe_.PaymentRecord.PaymentMethodDetails.MbWay;
      export type Mobilepay = Stripe_.PaymentRecord.PaymentMethodDetails.Mobilepay;
      export type Multibanco = Stripe_.PaymentRecord.PaymentMethodDetails.Multibanco;
      export type NaverPay = Stripe_.PaymentRecord.PaymentMethodDetails.NaverPay;
      export type NzBankAccount = Stripe_.PaymentRecord.PaymentMethodDetails.NzBankAccount;
      export type Oxxo = Stripe_.PaymentRecord.PaymentMethodDetails.Oxxo;
      export type P24 = Stripe_.PaymentRecord.PaymentMethodDetails.P24;
      export type PayByBank = Stripe_.PaymentRecord.PaymentMethodDetails.PayByBank;
      export type Payco = Stripe_.PaymentRecord.PaymentMethodDetails.Payco;
      export type Paynow = Stripe_.PaymentRecord.PaymentMethodDetails.Paynow;
      export type Paypal = Stripe_.PaymentRecord.PaymentMethodDetails.Paypal;
      export type Payto = Stripe_.PaymentRecord.PaymentMethodDetails.Payto;
      export type Pix = Stripe_.PaymentRecord.PaymentMethodDetails.Pix;
      export type Promptpay = Stripe_.PaymentRecord.PaymentMethodDetails.Promptpay;
      export type RevolutPay = Stripe_.PaymentRecord.PaymentMethodDetails.RevolutPay;
      export type SamsungPay = Stripe_.PaymentRecord.PaymentMethodDetails.SamsungPay;
      export type Satispay = Stripe_.PaymentRecord.PaymentMethodDetails.Satispay;
      export type Scalapay = Stripe_.PaymentRecord.PaymentMethodDetails.Scalapay;
      export type SepaCreditTransfer = Stripe_.PaymentRecord.PaymentMethodDetails.SepaCreditTransfer;
      export type SepaDebit = Stripe_.PaymentRecord.PaymentMethodDetails.SepaDebit;
      export type Sofort = Stripe_.PaymentRecord.PaymentMethodDetails.Sofort;
      export type StripeAccount = Stripe_.PaymentRecord.PaymentMethodDetails.StripeAccount;
      export type Sunbit = Stripe_.PaymentRecord.PaymentMethodDetails.Sunbit;
      export type Swish = Stripe_.PaymentRecord.PaymentMethodDetails.Swish;
      export type Twint = Stripe_.PaymentRecord.PaymentMethodDetails.Twint;
      export type Upi = Stripe_.PaymentRecord.PaymentMethodDetails.Upi;
      export type UsBankAccount = Stripe_.PaymentRecord.PaymentMethodDetails.UsBankAccount;
      export type Wechat = Stripe_.PaymentRecord.PaymentMethodDetails.Wechat;
      export type WechatPay = Stripe_.PaymentRecord.PaymentMethodDetails.WechatPay;
      export type Zip = Stripe_.PaymentRecord.PaymentMethodDetails.Zip;
      export namespace AchDebit {
        export type AccountHolderType = Stripe_.PaymentRecord.PaymentMethodDetails.AchDebit.AccountHolderType;
      }
      export namespace Alma {
        export type Installments = Stripe_.PaymentRecord.PaymentMethodDetails.Alma.Installments;
      }
      export namespace AmazonPay {
        export type Funding = Stripe_.PaymentRecord.PaymentMethodDetails.AmazonPay.Funding;
        export namespace Funding {
          export type Card = Stripe_.PaymentRecord.PaymentMethodDetails.AmazonPay.Funding.Card;
        }
      }
      export namespace Bancontact {
        export type PreferredLanguage = Stripe_.PaymentRecord.PaymentMethodDetails.Bancontact.PreferredLanguage;
      }
      export namespace Card {
        export type Brand = Stripe_.PaymentRecord.PaymentMethodDetails.Card.Brand;
        export type Checks = Stripe_.PaymentRecord.PaymentMethodDetails.Card.Checks;
        export type Funding = Stripe_.PaymentRecord.PaymentMethodDetails.Card.Funding;
        export type Installments = Stripe_.PaymentRecord.PaymentMethodDetails.Card.Installments;
        export type Network = Stripe_.PaymentRecord.PaymentMethodDetails.Card.Network;
        export type NetworkToken = Stripe_.PaymentRecord.PaymentMethodDetails.Card.NetworkToken;
        export type ThreeDSecure = Stripe_.PaymentRecord.PaymentMethodDetails.Card.ThreeDSecure;
        export type Wallet = Stripe_.PaymentRecord.PaymentMethodDetails.Card.Wallet;
        export namespace Checks {
          export type AddressLine1Check = Stripe_.PaymentRecord.PaymentMethodDetails.Card.Checks.AddressLine1Check;
          export type AddressPostalCodeCheck = Stripe_.PaymentRecord.PaymentMethodDetails.Card.Checks.AddressPostalCodeCheck;
          export type CvcCheck = Stripe_.PaymentRecord.PaymentMethodDetails.Card.Checks.CvcCheck;
        }
        export namespace Installments {
          export type Plan = Stripe_.PaymentRecord.PaymentMethodDetails.Card.Installments.Plan;
          export namespace Plan {
            export type Type = Stripe_.PaymentRecord.PaymentMethodDetails.Card.Installments.Plan.Type;
          }
        }
        export namespace ThreeDSecure {
          export type AuthenticationFlow = Stripe_.PaymentRecord.PaymentMethodDetails.Card.ThreeDSecure.AuthenticationFlow;
          export type ElectronicCommerceIndicator = Stripe_.PaymentRecord.PaymentMethodDetails.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type ExemptionIndicator = Stripe_.PaymentRecord.PaymentMethodDetails.Card.ThreeDSecure.ExemptionIndicator;
          export type Result = Stripe_.PaymentRecord.PaymentMethodDetails.Card.ThreeDSecure.Result;
          export type ResultReason = Stripe_.PaymentRecord.PaymentMethodDetails.Card.ThreeDSecure.ResultReason;
          export type Version = Stripe_.PaymentRecord.PaymentMethodDetails.Card.ThreeDSecure.Version;
        }
        export namespace Wallet {
          export type ApplePay = Stripe_.PaymentRecord.PaymentMethodDetails.Card.Wallet.ApplePay;
          export type GooglePay = Stripe_.PaymentRecord.PaymentMethodDetails.Card.Wallet.GooglePay;
        }
      }
      export namespace CardPresent {
        export type Offline = Stripe_.PaymentRecord.PaymentMethodDetails.CardPresent.Offline;
        export type ReadMethod = Stripe_.PaymentRecord.PaymentMethodDetails.CardPresent.ReadMethod;
        export type Receipt = Stripe_.PaymentRecord.PaymentMethodDetails.CardPresent.Receipt;
        export type Wallet = Stripe_.PaymentRecord.PaymentMethodDetails.CardPresent.Wallet;
        export namespace Receipt {
          export type AccountType = Stripe_.PaymentRecord.PaymentMethodDetails.CardPresent.Receipt.AccountType;
        }
        export namespace Wallet {
          export type Type = Stripe_.PaymentRecord.PaymentMethodDetails.CardPresent.Wallet.Type;
        }
      }
      export namespace Crypto {
        export type Network = Stripe_.PaymentRecord.PaymentMethodDetails.Crypto.Network;
        export type TokenCurrency = Stripe_.PaymentRecord.PaymentMethodDetails.Crypto.TokenCurrency;
      }
      export namespace Eps {
        export type Bank = Stripe_.PaymentRecord.PaymentMethodDetails.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe_.PaymentRecord.PaymentMethodDetails.Fpx.AccountHolderType;
        export type Bank = Stripe_.PaymentRecord.PaymentMethodDetails.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe_.PaymentRecord.PaymentMethodDetails.Ideal.Bank;
        export type Bic = Stripe_.PaymentRecord.PaymentMethodDetails.Ideal.Bic;
      }
      export namespace InteracPresent {
        export type ReadMethod = Stripe_.PaymentRecord.PaymentMethodDetails.InteracPresent.ReadMethod;
        export type Receipt = Stripe_.PaymentRecord.PaymentMethodDetails.InteracPresent.Receipt;
        export namespace Receipt {
          export type AccountType = Stripe_.PaymentRecord.PaymentMethodDetails.InteracPresent.Receipt.AccountType;
        }
      }
      export namespace Klarna {
        export type PayerDetails = Stripe_.PaymentRecord.PaymentMethodDetails.Klarna.PayerDetails;
        export namespace PayerDetails {
          export type Address = Stripe_.PaymentRecord.PaymentMethodDetails.Klarna.PayerDetails.Address;
        }
      }
      export namespace Konbini {
        export type Store = Stripe_.PaymentRecord.PaymentMethodDetails.Konbini.Store;
        export namespace Store {
          export type Chain = Stripe_.PaymentRecord.PaymentMethodDetails.Konbini.Store.Chain;
        }
      }
      export namespace KrCard {
        export type Brand = Stripe_.PaymentRecord.PaymentMethodDetails.KrCard.Brand;
      }
      export namespace Mobilepay {
        export type Card = Stripe_.PaymentRecord.PaymentMethodDetails.Mobilepay.Card;
      }
      export namespace P24 {
        export type Bank = Stripe_.PaymentRecord.PaymentMethodDetails.P24.Bank;
      }
      export namespace Paypal {
        export type SellerProtection = Stripe_.PaymentRecord.PaymentMethodDetails.Paypal.SellerProtection;
        export namespace SellerProtection {
          export type DisputeCategory = Stripe_.PaymentRecord.PaymentMethodDetails.Paypal.SellerProtection.DisputeCategory;
          export type Status = Stripe_.PaymentRecord.PaymentMethodDetails.Paypal.SellerProtection.Status;
        }
      }
      export namespace RevolutPay {
        export type Funding = Stripe_.PaymentRecord.PaymentMethodDetails.RevolutPay.Funding;
        export namespace Funding {
          export type Card = Stripe_.PaymentRecord.PaymentMethodDetails.RevolutPay.Funding.Card;
        }
      }
      export namespace Sofort {
        export type PreferredLanguage = Stripe_.PaymentRecord.PaymentMethodDetails.Sofort.PreferredLanguage;
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe_.PaymentRecord.PaymentMethodDetails.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe_.PaymentRecord.PaymentMethodDetails.UsBankAccount.AccountType;
      }
    }
    export namespace ProcessorDetails {
      export type Custom = Stripe_.PaymentRecord.ProcessorDetails.Custom;
    }
  }
  export namespace PayoutCreateParams {
    export type Method = Stripe_.PayoutCreateParams.Method;
    export type SourceType = Stripe_.PayoutCreateParams.SourceType;
  }
  export namespace Payout {
    export type ReconciliationStatus = Stripe_.Payout.ReconciliationStatus;
    export type TraceId = Stripe_.Payout.TraceId;
    export type Type = Stripe_.Payout.Type;
  }
  export namespace PlanCreateParams {
    export type Interval = Stripe_.PlanCreateParams.Interval;
    export type BillingScheme = Stripe_.PlanCreateParams.BillingScheme;
    export type Product = Stripe_.PlanCreateParams.Product;
    export type Tier = Stripe_.PlanCreateParams.Tier;
    export type TiersMode = Stripe_.PlanCreateParams.TiersMode;
    export type TransformUsage = Stripe_.PlanCreateParams.TransformUsage;
    export type UsageType = Stripe_.PlanCreateParams.UsageType;
    export namespace TransformUsage {
      export type Round = Stripe_.PlanCreateParams.TransformUsage.Round;
    }
  }
  export namespace Plan {
    export type BillingScheme = Stripe_.Plan.BillingScheme;
    export type Interval = Stripe_.Plan.Interval;
    export type Tier = Stripe_.Plan.Tier;
    export type TiersMode = Stripe_.Plan.TiersMode;
    export type TransformUsage = Stripe_.Plan.TransformUsage;
    export type UsageType = Stripe_.Plan.UsageType;
    export namespace TransformUsage {
      export type Round = Stripe_.Plan.TransformUsage.Round;
    }
  }
  export namespace PriceCreateParams {
    export type BillingScheme = Stripe_.PriceCreateParams.BillingScheme;
    export type CurrencyOptions = Stripe_.PriceCreateParams.CurrencyOptions;
    export type CustomUnitAmount = Stripe_.PriceCreateParams.CustomUnitAmount;
    export type ProductData = Stripe_.PriceCreateParams.ProductData;
    export type Recurring = Stripe_.PriceCreateParams.Recurring;
    export type TaxBehavior = Stripe_.PriceCreateParams.TaxBehavior;
    export type Tier = Stripe_.PriceCreateParams.Tier;
    export type TiersMode = Stripe_.PriceCreateParams.TiersMode;
    export type TransformQuantity = Stripe_.PriceCreateParams.TransformQuantity;
    export namespace CurrencyOptions {
      export type CustomUnitAmount = Stripe_.PriceCreateParams.CurrencyOptions.CustomUnitAmount;
      export type TaxBehavior = Stripe_.PriceCreateParams.CurrencyOptions.TaxBehavior;
      export type Tier = Stripe_.PriceCreateParams.CurrencyOptions.Tier;
    }
    export namespace Recurring {
      export type Interval = Stripe_.PriceCreateParams.Recurring.Interval;
      export type UsageType = Stripe_.PriceCreateParams.Recurring.UsageType;
    }
    export namespace TransformQuantity {
      export type Round = Stripe_.PriceCreateParams.TransformQuantity.Round;
    }
  }
  export namespace PriceUpdateParams {
    export type CurrencyOptions = Stripe_.PriceUpdateParams.CurrencyOptions;
    export type TaxBehavior = Stripe_.PriceUpdateParams.TaxBehavior;
    export namespace CurrencyOptions {
      export type CustomUnitAmount = Stripe_.PriceUpdateParams.CurrencyOptions.CustomUnitAmount;
      export type TaxBehavior = Stripe_.PriceUpdateParams.CurrencyOptions.TaxBehavior;
      export type Tier = Stripe_.PriceUpdateParams.CurrencyOptions.Tier;
    }
  }
  export namespace PriceListParams {
    export type Recurring = Stripe_.PriceListParams.Recurring;
    export type Type = Stripe_.PriceListParams.Type;
    export namespace Recurring {
      export type Interval = Stripe_.PriceListParams.Recurring.Interval;
      export type UsageType = Stripe_.PriceListParams.Recurring.UsageType;
    }
  }
  export namespace Price {
    export type BillingScheme = Stripe_.Price.BillingScheme;
    export type CurrencyOptions = Stripe_.Price.CurrencyOptions;
    export type CustomUnitAmount = Stripe_.Price.CustomUnitAmount;
    export type Recurring = Stripe_.Price.Recurring;
    export type TaxBehavior = Stripe_.Price.TaxBehavior;
    export type Tier = Stripe_.Price.Tier;
    export type TiersMode = Stripe_.Price.TiersMode;
    export type TransformQuantity = Stripe_.Price.TransformQuantity;
    export type Type = Stripe_.Price.Type;
    export namespace CurrencyOptions {
      export type CustomUnitAmount = Stripe_.Price.CurrencyOptions.CustomUnitAmount;
      export type TaxBehavior = Stripe_.Price.CurrencyOptions.TaxBehavior;
      export type Tier = Stripe_.Price.CurrencyOptions.Tier;
    }
    export namespace Recurring {
      export type Interval = Stripe_.Price.Recurring.Interval;
      export type UsageType = Stripe_.Price.Recurring.UsageType;
    }
    export namespace TransformQuantity {
      export type Round = Stripe_.Price.TransformQuantity.Round;
    }
  }
  export namespace ProductCreateParams {
    export type DefaultPriceData = Stripe_.ProductCreateParams.DefaultPriceData;
    export type MarketingFeature = Stripe_.ProductCreateParams.MarketingFeature;
    export type PackageDimensions = Stripe_.ProductCreateParams.PackageDimensions;
    export type Type = Stripe_.ProductCreateParams.Type;
    export namespace DefaultPriceData {
      export type CurrencyOptions = Stripe_.ProductCreateParams.DefaultPriceData.CurrencyOptions;
      export type CustomUnitAmount = Stripe_.ProductCreateParams.DefaultPriceData.CustomUnitAmount;
      export type Recurring = Stripe_.ProductCreateParams.DefaultPriceData.Recurring;
      export type TaxBehavior = Stripe_.ProductCreateParams.DefaultPriceData.TaxBehavior;
      export namespace CurrencyOptions {
        export type CustomUnitAmount = Stripe_.ProductCreateParams.DefaultPriceData.CurrencyOptions.CustomUnitAmount;
        export type TaxBehavior = Stripe_.ProductCreateParams.DefaultPriceData.CurrencyOptions.TaxBehavior;
        export type Tier = Stripe_.ProductCreateParams.DefaultPriceData.CurrencyOptions.Tier;
      }
      export namespace Recurring {
        export type Interval = Stripe_.ProductCreateParams.DefaultPriceData.Recurring.Interval;
      }
    }
  }
  export namespace ProductUpdateParams {
    export type MarketingFeature = Stripe_.ProductUpdateParams.MarketingFeature;
    export type PackageDimensions = Stripe_.ProductUpdateParams.PackageDimensions;
  }
  export namespace ProductListParams {
    export type Type = Stripe_.ProductListParams.Type;
  }
  export namespace Product {
    export type MarketingFeature = Stripe_.Product.MarketingFeature;
    export type PackageDimensions = Stripe_.Product.PackageDimensions;
    export type Type = Stripe_.Product.Type;
  }
  export namespace PromotionCodeCreateParams {
    export type Promotion = Stripe_.PromotionCodeCreateParams.Promotion;
    export type Restrictions = Stripe_.PromotionCodeCreateParams.Restrictions;
    export namespace Restrictions {
      export type CurrencyOptions = Stripe_.PromotionCodeCreateParams.Restrictions.CurrencyOptions;
    }
  }
  export namespace PromotionCodeUpdateParams {
    export type Restrictions = Stripe_.PromotionCodeUpdateParams.Restrictions;
    export namespace Restrictions {
      export type CurrencyOptions = Stripe_.PromotionCodeUpdateParams.Restrictions.CurrencyOptions;
    }
  }
  export namespace PromotionCode {
    export type Promotion = Stripe_.PromotionCode.Promotion;
    export type Restrictions = Stripe_.PromotionCode.Restrictions;
    export namespace Restrictions {
      export type CurrencyOptions = Stripe_.PromotionCode.Restrictions.CurrencyOptions;
    }
  }
  export namespace QuoteCreateParams {
    export type AutomaticTax = Stripe_.QuoteCreateParams.AutomaticTax;
    export type CollectionMethod = Stripe_.QuoteCreateParams.CollectionMethod;
    export type Discount = Stripe_.QuoteCreateParams.Discount;
    export type FromQuote = Stripe_.QuoteCreateParams.FromQuote;
    export type InvoiceSettings = Stripe_.QuoteCreateParams.InvoiceSettings;
    export type LineItem = Stripe_.QuoteCreateParams.LineItem;
    export type SubscriptionData = Stripe_.QuoteCreateParams.SubscriptionData;
    export type TransferData = Stripe_.QuoteCreateParams.TransferData;
    export namespace AutomaticTax {
      export type Liability = Stripe_.QuoteCreateParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe_.QuoteCreateParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace InvoiceSettings {
      export type Issuer = Stripe_.QuoteCreateParams.InvoiceSettings.Issuer;
      export namespace Issuer {
        export type Type = Stripe_.QuoteCreateParams.InvoiceSettings.Issuer.Type;
      }
    }
    export namespace LineItem {
      export type Discount = Stripe_.QuoteCreateParams.LineItem.Discount;
      export type PriceData = Stripe_.QuoteCreateParams.LineItem.PriceData;
      export namespace PriceData {
        export type Recurring = Stripe_.QuoteCreateParams.LineItem.PriceData.Recurring;
        export type TaxBehavior = Stripe_.QuoteCreateParams.LineItem.PriceData.TaxBehavior;
        export namespace Recurring {
          export type Interval = Stripe_.QuoteCreateParams.LineItem.PriceData.Recurring.Interval;
        }
      }
    }
    export namespace SubscriptionData {
      export type BillingMode = Stripe_.QuoteCreateParams.SubscriptionData.BillingMode;
      export namespace BillingMode {
        export type Flexible = Stripe_.QuoteCreateParams.SubscriptionData.BillingMode.Flexible;
        export type Type = Stripe_.QuoteCreateParams.SubscriptionData.BillingMode.Type;
        export namespace Flexible {
          export type ProrationDiscounts = Stripe_.QuoteCreateParams.SubscriptionData.BillingMode.Flexible.ProrationDiscounts;
        }
      }
    }
  }
  export namespace QuoteUpdateParams {
    export type AutomaticTax = Stripe_.QuoteUpdateParams.AutomaticTax;
    export type CollectionMethod = Stripe_.QuoteUpdateParams.CollectionMethod;
    export type Discount = Stripe_.QuoteUpdateParams.Discount;
    export type InvoiceSettings = Stripe_.QuoteUpdateParams.InvoiceSettings;
    export type LineItem = Stripe_.QuoteUpdateParams.LineItem;
    export type SubscriptionData = Stripe_.QuoteUpdateParams.SubscriptionData;
    export type TransferData = Stripe_.QuoteUpdateParams.TransferData;
    export namespace AutomaticTax {
      export type Liability = Stripe_.QuoteUpdateParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe_.QuoteUpdateParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace InvoiceSettings {
      export type Issuer = Stripe_.QuoteUpdateParams.InvoiceSettings.Issuer;
      export namespace Issuer {
        export type Type = Stripe_.QuoteUpdateParams.InvoiceSettings.Issuer.Type;
      }
    }
    export namespace LineItem {
      export type Discount = Stripe_.QuoteUpdateParams.LineItem.Discount;
      export type PriceData = Stripe_.QuoteUpdateParams.LineItem.PriceData;
      export namespace PriceData {
        export type Recurring = Stripe_.QuoteUpdateParams.LineItem.PriceData.Recurring;
        export type TaxBehavior = Stripe_.QuoteUpdateParams.LineItem.PriceData.TaxBehavior;
        export namespace Recurring {
          export type Interval = Stripe_.QuoteUpdateParams.LineItem.PriceData.Recurring.Interval;
        }
      }
    }
  }
  export namespace QuoteListParams {
    export type Status = Stripe_.QuoteListParams.Status;
  }
  export namespace Quote {
    export type AutomaticTax = Stripe_.Quote.AutomaticTax;
    export type CollectionMethod = Stripe_.Quote.CollectionMethod;
    export type Computed = Stripe_.Quote.Computed;
    export type FromQuote = Stripe_.Quote.FromQuote;
    export type InvoiceSettings = Stripe_.Quote.InvoiceSettings;
    export type Status = Stripe_.Quote.Status;
    export type StatusTransitions = Stripe_.Quote.StatusTransitions;
    export type SubscriptionData = Stripe_.Quote.SubscriptionData;
    export type TotalDetails = Stripe_.Quote.TotalDetails;
    export type TransferData = Stripe_.Quote.TransferData;
    export namespace AutomaticTax {
      export type Liability = Stripe_.Quote.AutomaticTax.Liability;
      export type Status = Stripe_.Quote.AutomaticTax.Status;
      export namespace Liability {
        export type Type = Stripe_.Quote.AutomaticTax.Liability.Type;
      }
    }
    export namespace Computed {
      export type Recurring = Stripe_.Quote.Computed.Recurring;
      export type Upfront = Stripe_.Quote.Computed.Upfront;
      export namespace Recurring {
        export type Interval = Stripe_.Quote.Computed.Recurring.Interval;
        export type TotalDetails = Stripe_.Quote.Computed.Recurring.TotalDetails;
        export namespace TotalDetails {
          export type Breakdown = Stripe_.Quote.Computed.Recurring.TotalDetails.Breakdown;
          export namespace Breakdown {
            export type Discount = Stripe_.Quote.Computed.Recurring.TotalDetails.Breakdown.Discount;
            export type Tax = Stripe_.Quote.Computed.Recurring.TotalDetails.Breakdown.Tax;
            export namespace Tax {
              export type TaxabilityReason = Stripe_.Quote.Computed.Recurring.TotalDetails.Breakdown.Tax.TaxabilityReason;
            }
          }
        }
      }
      export namespace Upfront {
        export type TotalDetails = Stripe_.Quote.Computed.Upfront.TotalDetails;
        export namespace TotalDetails {
          export type Breakdown = Stripe_.Quote.Computed.Upfront.TotalDetails.Breakdown;
          export namespace Breakdown {
            export type Discount = Stripe_.Quote.Computed.Upfront.TotalDetails.Breakdown.Discount;
            export type Tax = Stripe_.Quote.Computed.Upfront.TotalDetails.Breakdown.Tax;
            export namespace Tax {
              export type TaxabilityReason = Stripe_.Quote.Computed.Upfront.TotalDetails.Breakdown.Tax.TaxabilityReason;
            }
          }
        }
      }
    }
    export namespace InvoiceSettings {
      export type Issuer = Stripe_.Quote.InvoiceSettings.Issuer;
      export namespace Issuer {
        export type Type = Stripe_.Quote.InvoiceSettings.Issuer.Type;
      }
    }
    export namespace SubscriptionData {
      export type BillingMode = Stripe_.Quote.SubscriptionData.BillingMode;
      export namespace BillingMode {
        export type Flexible = Stripe_.Quote.SubscriptionData.BillingMode.Flexible;
        export type Type = Stripe_.Quote.SubscriptionData.BillingMode.Type;
        export namespace Flexible {
          export type ProrationDiscounts = Stripe_.Quote.SubscriptionData.BillingMode.Flexible.ProrationDiscounts;
        }
      }
    }
    export namespace TotalDetails {
      export type Breakdown = Stripe_.Quote.TotalDetails.Breakdown;
      export namespace Breakdown {
        export type Discount = Stripe_.Quote.TotalDetails.Breakdown.Discount;
        export type Tax = Stripe_.Quote.TotalDetails.Breakdown.Tax;
        export namespace Tax {
          export type TaxabilityReason = Stripe_.Quote.TotalDetails.Breakdown.Tax.TaxabilityReason;
        }
      }
    }
  }
  export namespace RefundCreateParams {
    export type Reason = Stripe_.RefundCreateParams.Reason;
  }
  export namespace Refund {
    export type DestinationDetails = Stripe_.Refund.DestinationDetails;
    export type NextAction = Stripe_.Refund.NextAction;
    export type PendingReason = Stripe_.Refund.PendingReason;
    export type PresentmentDetails = Stripe_.Refund.PresentmentDetails;
    export type Reason = Stripe_.Refund.Reason;
    export namespace DestinationDetails {
      export type Affirm = Stripe_.Refund.DestinationDetails.Affirm;
      export type AfterpayClearpay = Stripe_.Refund.DestinationDetails.AfterpayClearpay;
      export type Alipay = Stripe_.Refund.DestinationDetails.Alipay;
      export type Alma = Stripe_.Refund.DestinationDetails.Alma;
      export type AmazonPay = Stripe_.Refund.DestinationDetails.AmazonPay;
      export type AuBankTransfer = Stripe_.Refund.DestinationDetails.AuBankTransfer;
      export type Blik = Stripe_.Refund.DestinationDetails.Blik;
      export type BrBankTransfer = Stripe_.Refund.DestinationDetails.BrBankTransfer;
      export type Card = Stripe_.Refund.DestinationDetails.Card;
      export type Cashapp = Stripe_.Refund.DestinationDetails.Cashapp;
      export type Crypto = Stripe_.Refund.DestinationDetails.Crypto;
      export type CustomerCashBalance = Stripe_.Refund.DestinationDetails.CustomerCashBalance;
      export type Eps = Stripe_.Refund.DestinationDetails.Eps;
      export type EuBankTransfer = Stripe_.Refund.DestinationDetails.EuBankTransfer;
      export type GbBankTransfer = Stripe_.Refund.DestinationDetails.GbBankTransfer;
      export type Giropay = Stripe_.Refund.DestinationDetails.Giropay;
      export type Grabpay = Stripe_.Refund.DestinationDetails.Grabpay;
      export type JpBankTransfer = Stripe_.Refund.DestinationDetails.JpBankTransfer;
      export type Klarna = Stripe_.Refund.DestinationDetails.Klarna;
      export type MbWay = Stripe_.Refund.DestinationDetails.MbWay;
      export type Multibanco = Stripe_.Refund.DestinationDetails.Multibanco;
      export type MxBankTransfer = Stripe_.Refund.DestinationDetails.MxBankTransfer;
      export type NzBankTransfer = Stripe_.Refund.DestinationDetails.NzBankTransfer;
      export type P24 = Stripe_.Refund.DestinationDetails.P24;
      export type Paynow = Stripe_.Refund.DestinationDetails.Paynow;
      export type Paypal = Stripe_.Refund.DestinationDetails.Paypal;
      export type Pix = Stripe_.Refund.DestinationDetails.Pix;
      export type Revolut = Stripe_.Refund.DestinationDetails.Revolut;
      export type Scalapay = Stripe_.Refund.DestinationDetails.Scalapay;
      export type Sofort = Stripe_.Refund.DestinationDetails.Sofort;
      export type Swish = Stripe_.Refund.DestinationDetails.Swish;
      export type ThBankTransfer = Stripe_.Refund.DestinationDetails.ThBankTransfer;
      export type Twint = Stripe_.Refund.DestinationDetails.Twint;
      export type UsBankTransfer = Stripe_.Refund.DestinationDetails.UsBankTransfer;
      export type WechatPay = Stripe_.Refund.DestinationDetails.WechatPay;
      export type Zip = Stripe_.Refund.DestinationDetails.Zip;
      export namespace Card {
        export type Type = Stripe_.Refund.DestinationDetails.Card.Type;
      }
    }
    export namespace NextAction {
      export type DisplayDetails = Stripe_.Refund.NextAction.DisplayDetails;
      export namespace DisplayDetails {
        export type EmailSent = Stripe_.Refund.NextAction.DisplayDetails.EmailSent;
      }
    }
  }
  export namespace Review {
    export type ClosedReason = Stripe_.Review.ClosedReason;
    export type IpAddressLocation = Stripe_.Review.IpAddressLocation;
    export type OpenedReason = Stripe_.Review.OpenedReason;
    export type Session = Stripe_.Review.Session;
  }
  export namespace SetupAttempt {
    export type FlowDirection = Stripe_.SetupAttempt.FlowDirection;
    export type PaymentMethodDetails = Stripe_.SetupAttempt.PaymentMethodDetails;
    export type SetupError = Stripe_.SetupAttempt.SetupError;
    export namespace PaymentMethodDetails {
      export type AcssDebit = Stripe_.SetupAttempt.PaymentMethodDetails.AcssDebit;
      export type AmazonPay = Stripe_.SetupAttempt.PaymentMethodDetails.AmazonPay;
      export type AuBecsDebit = Stripe_.SetupAttempt.PaymentMethodDetails.AuBecsDebit;
      export type BacsDebit = Stripe_.SetupAttempt.PaymentMethodDetails.BacsDebit;
      export type Bancontact = Stripe_.SetupAttempt.PaymentMethodDetails.Bancontact;
      export type Boleto = Stripe_.SetupAttempt.PaymentMethodDetails.Boleto;
      export type Card = Stripe_.SetupAttempt.PaymentMethodDetails.Card;
      export type CardPresent = Stripe_.SetupAttempt.PaymentMethodDetails.CardPresent;
      export type Cashapp = Stripe_.SetupAttempt.PaymentMethodDetails.Cashapp;
      export type Ideal = Stripe_.SetupAttempt.PaymentMethodDetails.Ideal;
      export type KakaoPay = Stripe_.SetupAttempt.PaymentMethodDetails.KakaoPay;
      export type Klarna = Stripe_.SetupAttempt.PaymentMethodDetails.Klarna;
      export type KrCard = Stripe_.SetupAttempt.PaymentMethodDetails.KrCard;
      export type Link = Stripe_.SetupAttempt.PaymentMethodDetails.Link;
      export type NaverPay = Stripe_.SetupAttempt.PaymentMethodDetails.NaverPay;
      export type NzBankAccount = Stripe_.SetupAttempt.PaymentMethodDetails.NzBankAccount;
      export type Paypal = Stripe_.SetupAttempt.PaymentMethodDetails.Paypal;
      export type Payto = Stripe_.SetupAttempt.PaymentMethodDetails.Payto;
      export type Pix = Stripe_.SetupAttempt.PaymentMethodDetails.Pix;
      export type RevolutPay = Stripe_.SetupAttempt.PaymentMethodDetails.RevolutPay;
      export type Satispay = Stripe_.SetupAttempt.PaymentMethodDetails.Satispay;
      export type SepaDebit = Stripe_.SetupAttempt.PaymentMethodDetails.SepaDebit;
      export type Sofort = Stripe_.SetupAttempt.PaymentMethodDetails.Sofort;
      export type Twint = Stripe_.SetupAttempt.PaymentMethodDetails.Twint;
      export type Upi = Stripe_.SetupAttempt.PaymentMethodDetails.Upi;
      export type UsBankAccount = Stripe_.SetupAttempt.PaymentMethodDetails.UsBankAccount;
      export namespace Bancontact {
        export type PreferredLanguage = Stripe_.SetupAttempt.PaymentMethodDetails.Bancontact.PreferredLanguage;
      }
      export namespace Card {
        export type Checks = Stripe_.SetupAttempt.PaymentMethodDetails.Card.Checks;
        export type ThreeDSecure = Stripe_.SetupAttempt.PaymentMethodDetails.Card.ThreeDSecure;
        export type Wallet = Stripe_.SetupAttempt.PaymentMethodDetails.Card.Wallet;
        export namespace ThreeDSecure {
          export type AuthenticationFlow = Stripe_.SetupAttempt.PaymentMethodDetails.Card.ThreeDSecure.AuthenticationFlow;
          export type ElectronicCommerceIndicator = Stripe_.SetupAttempt.PaymentMethodDetails.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type Result = Stripe_.SetupAttempt.PaymentMethodDetails.Card.ThreeDSecure.Result;
          export type ResultReason = Stripe_.SetupAttempt.PaymentMethodDetails.Card.ThreeDSecure.ResultReason;
          export type Version = Stripe_.SetupAttempt.PaymentMethodDetails.Card.ThreeDSecure.Version;
        }
        export namespace Wallet {
          export type ApplePay = Stripe_.SetupAttempt.PaymentMethodDetails.Card.Wallet.ApplePay;
          export type GooglePay = Stripe_.SetupAttempt.PaymentMethodDetails.Card.Wallet.GooglePay;
          export type Type = Stripe_.SetupAttempt.PaymentMethodDetails.Card.Wallet.Type;
        }
      }
      export namespace CardPresent {
        export type Offline = Stripe_.SetupAttempt.PaymentMethodDetails.CardPresent.Offline;
      }
      export namespace Ideal {
        export type Bank = Stripe_.SetupAttempt.PaymentMethodDetails.Ideal.Bank;
        export type Bic = Stripe_.SetupAttempt.PaymentMethodDetails.Ideal.Bic;
      }
      export namespace Sofort {
        export type PreferredLanguage = Stripe_.SetupAttempt.PaymentMethodDetails.Sofort.PreferredLanguage;
      }
    }
    export namespace SetupError {
      export type Code = Stripe_.SetupAttempt.SetupError.Code;
      export type Type = Stripe_.SetupAttempt.SetupError.Type;
    }
  }
  export namespace SetupIntentCreateParams {
    export type AutomaticPaymentMethods = Stripe_.SetupIntentCreateParams.AutomaticPaymentMethods;
    export type ExcludedPaymentMethodType = Stripe_.SetupIntentCreateParams.ExcludedPaymentMethodType;
    export type FlowDirection = Stripe_.SetupIntentCreateParams.FlowDirection;
    export type MandateData = Stripe_.SetupIntentCreateParams.MandateData;
    export type PaymentMethodData = Stripe_.SetupIntentCreateParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe_.SetupIntentCreateParams.PaymentMethodOptions;
    export type SingleUse = Stripe_.SetupIntentCreateParams.SingleUse;
    export type Usage = Stripe_.SetupIntentCreateParams.Usage;
    export namespace AutomaticPaymentMethods {
      export type AllowRedirects = Stripe_.SetupIntentCreateParams.AutomaticPaymentMethods.AllowRedirects;
    }
    export namespace MandateData {
      export type CustomerAcceptance = Stripe_.SetupIntentCreateParams.MandateData.CustomerAcceptance;
      export namespace CustomerAcceptance {
        export type Offline = Stripe_.SetupIntentCreateParams.MandateData.CustomerAcceptance.Offline;
        export type Online = Stripe_.SetupIntentCreateParams.MandateData.CustomerAcceptance.Online;
        export type Type = Stripe_.SetupIntentCreateParams.MandateData.CustomerAcceptance.Type;
      }
    }
    export namespace PaymentMethodData {
      export type AcssDebit = Stripe_.SetupIntentCreateParams.PaymentMethodData.AcssDebit;
      export type Affirm = Stripe_.SetupIntentCreateParams.PaymentMethodData.Affirm;
      export type AfterpayClearpay = Stripe_.SetupIntentCreateParams.PaymentMethodData.AfterpayClearpay;
      export type Alipay = Stripe_.SetupIntentCreateParams.PaymentMethodData.Alipay;
      export type AllowRedisplay = Stripe_.SetupIntentCreateParams.PaymentMethodData.AllowRedisplay;
      export type Alma = Stripe_.SetupIntentCreateParams.PaymentMethodData.Alma;
      export type AmazonPay = Stripe_.SetupIntentCreateParams.PaymentMethodData.AmazonPay;
      export type AuBecsDebit = Stripe_.SetupIntentCreateParams.PaymentMethodData.AuBecsDebit;
      export type BacsDebit = Stripe_.SetupIntentCreateParams.PaymentMethodData.BacsDebit;
      export type Bancontact = Stripe_.SetupIntentCreateParams.PaymentMethodData.Bancontact;
      export type Billie = Stripe_.SetupIntentCreateParams.PaymentMethodData.Billie;
      export type BillingDetails = Stripe_.SetupIntentCreateParams.PaymentMethodData.BillingDetails;
      export type Bizum = Stripe_.SetupIntentCreateParams.PaymentMethodData.Bizum;
      export type Blik = Stripe_.SetupIntentCreateParams.PaymentMethodData.Blik;
      export type Boleto = Stripe_.SetupIntentCreateParams.PaymentMethodData.Boleto;
      export type Cashapp = Stripe_.SetupIntentCreateParams.PaymentMethodData.Cashapp;
      export type Crypto = Stripe_.SetupIntentCreateParams.PaymentMethodData.Crypto;
      export type CustomerBalance = Stripe_.SetupIntentCreateParams.PaymentMethodData.CustomerBalance;
      export type Eps = Stripe_.SetupIntentCreateParams.PaymentMethodData.Eps;
      export type Fpx = Stripe_.SetupIntentCreateParams.PaymentMethodData.Fpx;
      export type Giropay = Stripe_.SetupIntentCreateParams.PaymentMethodData.Giropay;
      export type Grabpay = Stripe_.SetupIntentCreateParams.PaymentMethodData.Grabpay;
      export type Ideal = Stripe_.SetupIntentCreateParams.PaymentMethodData.Ideal;
      export type InteracPresent = Stripe_.SetupIntentCreateParams.PaymentMethodData.InteracPresent;
      export type KakaoPay = Stripe_.SetupIntentCreateParams.PaymentMethodData.KakaoPay;
      export type Klarna = Stripe_.SetupIntentCreateParams.PaymentMethodData.Klarna;
      export type Konbini = Stripe_.SetupIntentCreateParams.PaymentMethodData.Konbini;
      export type KrCard = Stripe_.SetupIntentCreateParams.PaymentMethodData.KrCard;
      export type Link = Stripe_.SetupIntentCreateParams.PaymentMethodData.Link;
      export type MbWay = Stripe_.SetupIntentCreateParams.PaymentMethodData.MbWay;
      export type Mobilepay = Stripe_.SetupIntentCreateParams.PaymentMethodData.Mobilepay;
      export type Multibanco = Stripe_.SetupIntentCreateParams.PaymentMethodData.Multibanco;
      export type NaverPay = Stripe_.SetupIntentCreateParams.PaymentMethodData.NaverPay;
      export type NzBankAccount = Stripe_.SetupIntentCreateParams.PaymentMethodData.NzBankAccount;
      export type Oxxo = Stripe_.SetupIntentCreateParams.PaymentMethodData.Oxxo;
      export type P24 = Stripe_.SetupIntentCreateParams.PaymentMethodData.P24;
      export type PayByBank = Stripe_.SetupIntentCreateParams.PaymentMethodData.PayByBank;
      export type Payco = Stripe_.SetupIntentCreateParams.PaymentMethodData.Payco;
      export type Paynow = Stripe_.SetupIntentCreateParams.PaymentMethodData.Paynow;
      export type Paypal = Stripe_.SetupIntentCreateParams.PaymentMethodData.Paypal;
      export type Payto = Stripe_.SetupIntentCreateParams.PaymentMethodData.Payto;
      export type Pix = Stripe_.SetupIntentCreateParams.PaymentMethodData.Pix;
      export type Promptpay = Stripe_.SetupIntentCreateParams.PaymentMethodData.Promptpay;
      export type RadarOptions = Stripe_.SetupIntentCreateParams.PaymentMethodData.RadarOptions;
      export type RevolutPay = Stripe_.SetupIntentCreateParams.PaymentMethodData.RevolutPay;
      export type SamsungPay = Stripe_.SetupIntentCreateParams.PaymentMethodData.SamsungPay;
      export type Satispay = Stripe_.SetupIntentCreateParams.PaymentMethodData.Satispay;
      export type Scalapay = Stripe_.SetupIntentCreateParams.PaymentMethodData.Scalapay;
      export type SepaDebit = Stripe_.SetupIntentCreateParams.PaymentMethodData.SepaDebit;
      export type Sofort = Stripe_.SetupIntentCreateParams.PaymentMethodData.Sofort;
      export type Sunbit = Stripe_.SetupIntentCreateParams.PaymentMethodData.Sunbit;
      export type Swish = Stripe_.SetupIntentCreateParams.PaymentMethodData.Swish;
      export type Twint = Stripe_.SetupIntentCreateParams.PaymentMethodData.Twint;
      export type Type = Stripe_.SetupIntentCreateParams.PaymentMethodData.Type;
      export type Upi = Stripe_.SetupIntentCreateParams.PaymentMethodData.Upi;
      export type UsBankAccount = Stripe_.SetupIntentCreateParams.PaymentMethodData.UsBankAccount;
      export type WechatPay = Stripe_.SetupIntentCreateParams.PaymentMethodData.WechatPay;
      export type Zip = Stripe_.SetupIntentCreateParams.PaymentMethodData.Zip;
      export namespace Eps {
        export type Bank = Stripe_.SetupIntentCreateParams.PaymentMethodData.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe_.SetupIntentCreateParams.PaymentMethodData.Fpx.AccountHolderType;
        export type Bank = Stripe_.SetupIntentCreateParams.PaymentMethodData.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe_.SetupIntentCreateParams.PaymentMethodData.Ideal.Bank;
      }
      export namespace Klarna {
        export type Dob = Stripe_.SetupIntentCreateParams.PaymentMethodData.Klarna.Dob;
      }
      export namespace NaverPay {
        export type Funding = Stripe_.SetupIntentCreateParams.PaymentMethodData.NaverPay.Funding;
      }
      export namespace P24 {
        export type Bank = Stripe_.SetupIntentCreateParams.PaymentMethodData.P24.Bank;
      }
      export namespace Sofort {
        export type Country = Stripe_.SetupIntentCreateParams.PaymentMethodData.Sofort.Country;
      }
      export namespace Upi {
        export type MandateOptions = Stripe_.SetupIntentCreateParams.PaymentMethodData.Upi.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe_.SetupIntentCreateParams.PaymentMethodData.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe_.SetupIntentCreateParams.PaymentMethodData.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe_.SetupIntentCreateParams.PaymentMethodData.UsBankAccount.AccountType;
      }
    }
    export namespace PaymentMethodOptions {
      export type AcssDebit = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.AcssDebit;
      export type AmazonPay = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.AmazonPay;
      export type BacsDebit = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.BacsDebit;
      export type Bizum = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Bizum;
      export type Card = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Card;
      export type CardPresent = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.CardPresent;
      export type Klarna = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Klarna;
      export type Link = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Link;
      export type Paypal = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Paypal;
      export type Payto = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Payto;
      export type Pix = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Pix;
      export type SepaDebit = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.SepaDebit;
      export type Upi = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Upi;
      export type UsBankAccount = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount;
      export namespace AcssDebit {
        export type Currency = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.AcssDebit.Currency;
        export type MandateOptions = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions;
        export type VerificationMethod = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.AcssDebit.VerificationMethod;
        export namespace MandateOptions {
          export type DefaultFor = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions.DefaultFor;
          export type PaymentSchedule = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
          export type TransactionType = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
        }
      }
      export namespace BacsDebit {
        export type MandateOptions = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.BacsDebit.MandateOptions;
      }
      export namespace Card {
        export type MandateOptions = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Card.MandateOptions;
        export type Network = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Card.Network;
        export type RequestThreeDSecure = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Card.RequestThreeDSecure;
        export type ThreeDSecure = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure;
        export namespace MandateOptions {
          export type AmountType = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Card.MandateOptions.AmountType;
          export type Interval = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Card.MandateOptions.Interval;
        }
        export namespace ThreeDSecure {
          export type AresTransStatus = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.AresTransStatus;
          export type ElectronicCommerceIndicator = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type NetworkOptions = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions;
          export type Version = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.Version;
          export namespace NetworkOptions {
            export type CartesBancaires = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires;
            export namespace CartesBancaires {
              export type CbAvalgo = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires.CbAvalgo;
            }
          }
        }
      }
      export namespace Klarna {
        export type OnDemand = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Klarna.OnDemand;
        export type PreferredLocale = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Klarna.PreferredLocale;
        export type Subscription = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Klarna.Subscription;
        export namespace OnDemand {
          export type PurchaseInterval = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Klarna.OnDemand.PurchaseInterval;
        }
        export namespace Subscription {
          export type Interval = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Klarna.Subscription.Interval;
          export type NextBilling = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Klarna.Subscription.NextBilling;
        }
      }
      export namespace Payto {
        export type MandateOptions = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Payto.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Payto.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
          export type Purpose = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Payto.MandateOptions.Purpose;
        }
      }
      export namespace Pix {
        export type MandateOptions = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Pix.MandateOptions;
        export namespace MandateOptions {
          export type AmountIncludesIof = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
          export type AmountType = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Pix.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
        }
      }
      export namespace SepaDebit {
        export type MandateOptions = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.SepaDebit.MandateOptions;
      }
      export namespace Upi {
        export type MandateOptions = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Upi.MandateOptions;
        export type SetupFutureUsage = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Upi.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type FinancialConnections = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections;
        export type MandateOptions = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.MandateOptions;
        export type Networks = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.Networks;
        export type VerificationMethod = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.VerificationMethod;
        export namespace FinancialConnections {
          export type Filters = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
          export type Permission = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
          export type Prefetch = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          export namespace Filters {
            export type AccountSubcategory = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
          }
        }
        export namespace Networks {
          export type Requested = Stripe_.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.Networks.Requested;
        }
      }
    }
  }
  export namespace SetupIntentUpdateParams {
    export type ExcludedPaymentMethodType = Stripe_.SetupIntentUpdateParams.ExcludedPaymentMethodType;
    export type FlowDirection = Stripe_.SetupIntentUpdateParams.FlowDirection;
    export type PaymentMethodData = Stripe_.SetupIntentUpdateParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions;
    export namespace PaymentMethodData {
      export type AcssDebit = Stripe_.SetupIntentUpdateParams.PaymentMethodData.AcssDebit;
      export type Affirm = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Affirm;
      export type AfterpayClearpay = Stripe_.SetupIntentUpdateParams.PaymentMethodData.AfterpayClearpay;
      export type Alipay = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Alipay;
      export type AllowRedisplay = Stripe_.SetupIntentUpdateParams.PaymentMethodData.AllowRedisplay;
      export type Alma = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Alma;
      export type AmazonPay = Stripe_.SetupIntentUpdateParams.PaymentMethodData.AmazonPay;
      export type AuBecsDebit = Stripe_.SetupIntentUpdateParams.PaymentMethodData.AuBecsDebit;
      export type BacsDebit = Stripe_.SetupIntentUpdateParams.PaymentMethodData.BacsDebit;
      export type Bancontact = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Bancontact;
      export type Billie = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Billie;
      export type BillingDetails = Stripe_.SetupIntentUpdateParams.PaymentMethodData.BillingDetails;
      export type Bizum = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Bizum;
      export type Blik = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Blik;
      export type Boleto = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Boleto;
      export type Cashapp = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Cashapp;
      export type Crypto = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Crypto;
      export type CustomerBalance = Stripe_.SetupIntentUpdateParams.PaymentMethodData.CustomerBalance;
      export type Eps = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Eps;
      export type Fpx = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Fpx;
      export type Giropay = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Giropay;
      export type Grabpay = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Grabpay;
      export type Ideal = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Ideal;
      export type InteracPresent = Stripe_.SetupIntentUpdateParams.PaymentMethodData.InteracPresent;
      export type KakaoPay = Stripe_.SetupIntentUpdateParams.PaymentMethodData.KakaoPay;
      export type Klarna = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Klarna;
      export type Konbini = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Konbini;
      export type KrCard = Stripe_.SetupIntentUpdateParams.PaymentMethodData.KrCard;
      export type Link = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Link;
      export type MbWay = Stripe_.SetupIntentUpdateParams.PaymentMethodData.MbWay;
      export type Mobilepay = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Mobilepay;
      export type Multibanco = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Multibanco;
      export type NaverPay = Stripe_.SetupIntentUpdateParams.PaymentMethodData.NaverPay;
      export type NzBankAccount = Stripe_.SetupIntentUpdateParams.PaymentMethodData.NzBankAccount;
      export type Oxxo = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Oxxo;
      export type P24 = Stripe_.SetupIntentUpdateParams.PaymentMethodData.P24;
      export type PayByBank = Stripe_.SetupIntentUpdateParams.PaymentMethodData.PayByBank;
      export type Payco = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Payco;
      export type Paynow = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Paynow;
      export type Paypal = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Paypal;
      export type Payto = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Payto;
      export type Pix = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Pix;
      export type Promptpay = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Promptpay;
      export type RadarOptions = Stripe_.SetupIntentUpdateParams.PaymentMethodData.RadarOptions;
      export type RevolutPay = Stripe_.SetupIntentUpdateParams.PaymentMethodData.RevolutPay;
      export type SamsungPay = Stripe_.SetupIntentUpdateParams.PaymentMethodData.SamsungPay;
      export type Satispay = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Satispay;
      export type Scalapay = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Scalapay;
      export type SepaDebit = Stripe_.SetupIntentUpdateParams.PaymentMethodData.SepaDebit;
      export type Sofort = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Sofort;
      export type Sunbit = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Sunbit;
      export type Swish = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Swish;
      export type Twint = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Twint;
      export type Type = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Type;
      export type Upi = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Upi;
      export type UsBankAccount = Stripe_.SetupIntentUpdateParams.PaymentMethodData.UsBankAccount;
      export type WechatPay = Stripe_.SetupIntentUpdateParams.PaymentMethodData.WechatPay;
      export type Zip = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Zip;
      export namespace Eps {
        export type Bank = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Fpx.AccountHolderType;
        export type Bank = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Ideal.Bank;
      }
      export namespace Klarna {
        export type Dob = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Klarna.Dob;
      }
      export namespace NaverPay {
        export type Funding = Stripe_.SetupIntentUpdateParams.PaymentMethodData.NaverPay.Funding;
      }
      export namespace P24 {
        export type Bank = Stripe_.SetupIntentUpdateParams.PaymentMethodData.P24.Bank;
      }
      export namespace Sofort {
        export type Country = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Sofort.Country;
      }
      export namespace Upi {
        export type MandateOptions = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Upi.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe_.SetupIntentUpdateParams.PaymentMethodData.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe_.SetupIntentUpdateParams.PaymentMethodData.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe_.SetupIntentUpdateParams.PaymentMethodData.UsBankAccount.AccountType;
      }
    }
    export namespace PaymentMethodOptions {
      export type AcssDebit = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.AcssDebit;
      export type AmazonPay = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.AmazonPay;
      export type BacsDebit = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.BacsDebit;
      export type Bizum = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Bizum;
      export type Card = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Card;
      export type CardPresent = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.CardPresent;
      export type Klarna = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Klarna;
      export type Link = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Link;
      export type Paypal = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Paypal;
      export type Payto = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Payto;
      export type Pix = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Pix;
      export type SepaDebit = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.SepaDebit;
      export type Upi = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Upi;
      export type UsBankAccount = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount;
      export namespace AcssDebit {
        export type Currency = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.AcssDebit.Currency;
        export type MandateOptions = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.AcssDebit.MandateOptions;
        export type VerificationMethod = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.AcssDebit.VerificationMethod;
        export namespace MandateOptions {
          export type DefaultFor = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.AcssDebit.MandateOptions.DefaultFor;
          export type PaymentSchedule = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
          export type TransactionType = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
        }
      }
      export namespace BacsDebit {
        export type MandateOptions = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.BacsDebit.MandateOptions;
      }
      export namespace Card {
        export type MandateOptions = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Card.MandateOptions;
        export type Network = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Card.Network;
        export type RequestThreeDSecure = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Card.RequestThreeDSecure;
        export type ThreeDSecure = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure;
        export namespace MandateOptions {
          export type AmountType = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Card.MandateOptions.AmountType;
          export type Interval = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Card.MandateOptions.Interval;
        }
        export namespace ThreeDSecure {
          export type AresTransStatus = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.AresTransStatus;
          export type ElectronicCommerceIndicator = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type NetworkOptions = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions;
          export type Version = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.Version;
          export namespace NetworkOptions {
            export type CartesBancaires = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires;
            export namespace CartesBancaires {
              export type CbAvalgo = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires.CbAvalgo;
            }
          }
        }
      }
      export namespace Klarna {
        export type OnDemand = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Klarna.OnDemand;
        export type PreferredLocale = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Klarna.PreferredLocale;
        export type Subscription = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Klarna.Subscription;
        export namespace OnDemand {
          export type PurchaseInterval = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Klarna.OnDemand.PurchaseInterval;
        }
        export namespace Subscription {
          export type Interval = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Klarna.Subscription.Interval;
          export type NextBilling = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Klarna.Subscription.NextBilling;
        }
      }
      export namespace Payto {
        export type MandateOptions = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Payto.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Payto.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
          export type Purpose = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Payto.MandateOptions.Purpose;
        }
      }
      export namespace Pix {
        export type MandateOptions = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Pix.MandateOptions;
        export namespace MandateOptions {
          export type AmountIncludesIof = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
          export type AmountType = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Pix.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
        }
      }
      export namespace SepaDebit {
        export type MandateOptions = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.SepaDebit.MandateOptions;
      }
      export namespace Upi {
        export type MandateOptions = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Upi.MandateOptions;
        export type SetupFutureUsage = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Upi.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type FinancialConnections = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections;
        export type MandateOptions = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.MandateOptions;
        export type Networks = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.Networks;
        export type VerificationMethod = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.VerificationMethod;
        export namespace FinancialConnections {
          export type Filters = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
          export type Permission = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
          export type Prefetch = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          export namespace Filters {
            export type AccountSubcategory = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
          }
        }
        export namespace Networks {
          export type Requested = Stripe_.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.Networks.Requested;
        }
      }
    }
  }
  export namespace SetupIntentCancelParams {
    export type CancellationReason = Stripe_.SetupIntentCancelParams.CancellationReason;
  }
  export namespace SetupIntentConfirmParams {
    export type MandateData = Stripe_.SetupIntentConfirmParams.MandateData;
    export type PaymentMethodData = Stripe_.SetupIntentConfirmParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions;
    export namespace MandateData {
      export type CustomerAcceptance = Stripe_.SetupIntentConfirmParams.MandateData.CustomerAcceptance;
      export namespace CustomerAcceptance {
        export type Offline = Stripe_.SetupIntentConfirmParams.MandateData.CustomerAcceptance.Offline;
        export type Online = Stripe_.SetupIntentConfirmParams.MandateData.CustomerAcceptance.Online;
        export type Type = Stripe_.SetupIntentConfirmParams.MandateData.CustomerAcceptance.Type;
      }
    }
    export namespace PaymentMethodData {
      export type AcssDebit = Stripe_.SetupIntentConfirmParams.PaymentMethodData.AcssDebit;
      export type Affirm = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Affirm;
      export type AfterpayClearpay = Stripe_.SetupIntentConfirmParams.PaymentMethodData.AfterpayClearpay;
      export type Alipay = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Alipay;
      export type AllowRedisplay = Stripe_.SetupIntentConfirmParams.PaymentMethodData.AllowRedisplay;
      export type Alma = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Alma;
      export type AmazonPay = Stripe_.SetupIntentConfirmParams.PaymentMethodData.AmazonPay;
      export type AuBecsDebit = Stripe_.SetupIntentConfirmParams.PaymentMethodData.AuBecsDebit;
      export type BacsDebit = Stripe_.SetupIntentConfirmParams.PaymentMethodData.BacsDebit;
      export type Bancontact = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Bancontact;
      export type Billie = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Billie;
      export type BillingDetails = Stripe_.SetupIntentConfirmParams.PaymentMethodData.BillingDetails;
      export type Bizum = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Bizum;
      export type Blik = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Blik;
      export type Boleto = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Boleto;
      export type Cashapp = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Cashapp;
      export type Crypto = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Crypto;
      export type CustomerBalance = Stripe_.SetupIntentConfirmParams.PaymentMethodData.CustomerBalance;
      export type Eps = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Eps;
      export type Fpx = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Fpx;
      export type Giropay = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Giropay;
      export type Grabpay = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Grabpay;
      export type Ideal = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Ideal;
      export type InteracPresent = Stripe_.SetupIntentConfirmParams.PaymentMethodData.InteracPresent;
      export type KakaoPay = Stripe_.SetupIntentConfirmParams.PaymentMethodData.KakaoPay;
      export type Klarna = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Klarna;
      export type Konbini = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Konbini;
      export type KrCard = Stripe_.SetupIntentConfirmParams.PaymentMethodData.KrCard;
      export type Link = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Link;
      export type MbWay = Stripe_.SetupIntentConfirmParams.PaymentMethodData.MbWay;
      export type Mobilepay = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Mobilepay;
      export type Multibanco = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Multibanco;
      export type NaverPay = Stripe_.SetupIntentConfirmParams.PaymentMethodData.NaverPay;
      export type NzBankAccount = Stripe_.SetupIntentConfirmParams.PaymentMethodData.NzBankAccount;
      export type Oxxo = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Oxxo;
      export type P24 = Stripe_.SetupIntentConfirmParams.PaymentMethodData.P24;
      export type PayByBank = Stripe_.SetupIntentConfirmParams.PaymentMethodData.PayByBank;
      export type Payco = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Payco;
      export type Paynow = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Paynow;
      export type Paypal = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Paypal;
      export type Payto = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Payto;
      export type Pix = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Pix;
      export type Promptpay = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Promptpay;
      export type RadarOptions = Stripe_.SetupIntentConfirmParams.PaymentMethodData.RadarOptions;
      export type RevolutPay = Stripe_.SetupIntentConfirmParams.PaymentMethodData.RevolutPay;
      export type SamsungPay = Stripe_.SetupIntentConfirmParams.PaymentMethodData.SamsungPay;
      export type Satispay = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Satispay;
      export type Scalapay = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Scalapay;
      export type SepaDebit = Stripe_.SetupIntentConfirmParams.PaymentMethodData.SepaDebit;
      export type Sofort = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Sofort;
      export type Sunbit = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Sunbit;
      export type Swish = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Swish;
      export type Twint = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Twint;
      export type Type = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Type;
      export type Upi = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Upi;
      export type UsBankAccount = Stripe_.SetupIntentConfirmParams.PaymentMethodData.UsBankAccount;
      export type WechatPay = Stripe_.SetupIntentConfirmParams.PaymentMethodData.WechatPay;
      export type Zip = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Zip;
      export namespace Eps {
        export type Bank = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Fpx.AccountHolderType;
        export type Bank = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Ideal.Bank;
      }
      export namespace Klarna {
        export type Dob = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Klarna.Dob;
      }
      export namespace NaverPay {
        export type Funding = Stripe_.SetupIntentConfirmParams.PaymentMethodData.NaverPay.Funding;
      }
      export namespace P24 {
        export type Bank = Stripe_.SetupIntentConfirmParams.PaymentMethodData.P24.Bank;
      }
      export namespace Sofort {
        export type Country = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Sofort.Country;
      }
      export namespace Upi {
        export type MandateOptions = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Upi.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe_.SetupIntentConfirmParams.PaymentMethodData.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe_.SetupIntentConfirmParams.PaymentMethodData.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe_.SetupIntentConfirmParams.PaymentMethodData.UsBankAccount.AccountType;
      }
    }
    export namespace PaymentMethodOptions {
      export type AcssDebit = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.AcssDebit;
      export type AmazonPay = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.AmazonPay;
      export type BacsDebit = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.BacsDebit;
      export type Bizum = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Bizum;
      export type Card = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Card;
      export type CardPresent = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.CardPresent;
      export type Klarna = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Klarna;
      export type Link = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Link;
      export type Paypal = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Paypal;
      export type Payto = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Payto;
      export type Pix = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Pix;
      export type SepaDebit = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.SepaDebit;
      export type Upi = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Upi;
      export type UsBankAccount = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount;
      export namespace AcssDebit {
        export type Currency = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.AcssDebit.Currency;
        export type MandateOptions = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.AcssDebit.MandateOptions;
        export type VerificationMethod = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.AcssDebit.VerificationMethod;
        export namespace MandateOptions {
          export type DefaultFor = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.AcssDebit.MandateOptions.DefaultFor;
          export type PaymentSchedule = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
          export type TransactionType = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
        }
      }
      export namespace BacsDebit {
        export type MandateOptions = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.BacsDebit.MandateOptions;
      }
      export namespace Card {
        export type MandateOptions = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Card.MandateOptions;
        export type Network = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Card.Network;
        export type RequestThreeDSecure = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Card.RequestThreeDSecure;
        export type ThreeDSecure = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure;
        export namespace MandateOptions {
          export type AmountType = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Card.MandateOptions.AmountType;
          export type Interval = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Card.MandateOptions.Interval;
        }
        export namespace ThreeDSecure {
          export type AresTransStatus = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.AresTransStatus;
          export type ElectronicCommerceIndicator = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type NetworkOptions = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions;
          export type Version = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.Version;
          export namespace NetworkOptions {
            export type CartesBancaires = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires;
            export namespace CartesBancaires {
              export type CbAvalgo = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires.CbAvalgo;
            }
          }
        }
      }
      export namespace Klarna {
        export type OnDemand = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Klarna.OnDemand;
        export type PreferredLocale = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Klarna.PreferredLocale;
        export type Subscription = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Klarna.Subscription;
        export namespace OnDemand {
          export type PurchaseInterval = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Klarna.OnDemand.PurchaseInterval;
        }
        export namespace Subscription {
          export type Interval = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Klarna.Subscription.Interval;
          export type NextBilling = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Klarna.Subscription.NextBilling;
        }
      }
      export namespace Payto {
        export type MandateOptions = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Payto.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Payto.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
          export type Purpose = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Payto.MandateOptions.Purpose;
        }
      }
      export namespace Pix {
        export type MandateOptions = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Pix.MandateOptions;
        export namespace MandateOptions {
          export type AmountIncludesIof = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
          export type AmountType = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Pix.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
        }
      }
      export namespace SepaDebit {
        export type MandateOptions = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.SepaDebit.MandateOptions;
      }
      export namespace Upi {
        export type MandateOptions = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Upi.MandateOptions;
        export type SetupFutureUsage = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Upi.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type FinancialConnections = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections;
        export type MandateOptions = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.MandateOptions;
        export type Networks = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.Networks;
        export type VerificationMethod = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.VerificationMethod;
        export namespace FinancialConnections {
          export type Filters = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
          export type Permission = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
          export type Prefetch = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          export namespace Filters {
            export type AccountSubcategory = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
          }
        }
        export namespace Networks {
          export type Requested = Stripe_.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.Networks.Requested;
        }
      }
    }
  }
  export namespace SetupIntent {
    export type AutomaticPaymentMethods = Stripe_.SetupIntent.AutomaticPaymentMethods;
    export type CancellationReason = Stripe_.SetupIntent.CancellationReason;
    export type ExcludedPaymentMethodType = Stripe_.SetupIntent.ExcludedPaymentMethodType;
    export type FlowDirection = Stripe_.SetupIntent.FlowDirection;
    export type LastSetupError = Stripe_.SetupIntent.LastSetupError;
    export type ManagedPayments = Stripe_.SetupIntent.ManagedPayments;
    export type NextAction = Stripe_.SetupIntent.NextAction;
    export type PaymentMethodConfigurationDetails = Stripe_.SetupIntent.PaymentMethodConfigurationDetails;
    export type PaymentMethodOptions = Stripe_.SetupIntent.PaymentMethodOptions;
    export type Status = Stripe_.SetupIntent.Status;
    export namespace AutomaticPaymentMethods {
      export type AllowRedirects = Stripe_.SetupIntent.AutomaticPaymentMethods.AllowRedirects;
    }
    export namespace LastSetupError {
      export type Code = Stripe_.SetupIntent.LastSetupError.Code;
      export type Type = Stripe_.SetupIntent.LastSetupError.Type;
    }
    export namespace NextAction {
      export type BlikAuthorize = Stripe_.SetupIntent.NextAction.BlikAuthorize;
      export type CashappHandleRedirectOrDisplayQrCode = Stripe_.SetupIntent.NextAction.CashappHandleRedirectOrDisplayQrCode;
      export type PixDisplayQrCode = Stripe_.SetupIntent.NextAction.PixDisplayQrCode;
      export type RedirectToUrl = Stripe_.SetupIntent.NextAction.RedirectToUrl;
      export type UpiHandleRedirectOrDisplayQrCode = Stripe_.SetupIntent.NextAction.UpiHandleRedirectOrDisplayQrCode;
      export type UseStripeSdk = Stripe_.SetupIntent.NextAction.UseStripeSdk;
      export type VerifyWithMicrodeposits = Stripe_.SetupIntent.NextAction.VerifyWithMicrodeposits;
      export namespace CashappHandleRedirectOrDisplayQrCode {
        export type QrCode = Stripe_.SetupIntent.NextAction.CashappHandleRedirectOrDisplayQrCode.QrCode;
      }
      export namespace UpiHandleRedirectOrDisplayQrCode {
        export type QrCode = Stripe_.SetupIntent.NextAction.UpiHandleRedirectOrDisplayQrCode.QrCode;
      }
      export namespace VerifyWithMicrodeposits {
        export type MicrodepositType = Stripe_.SetupIntent.NextAction.VerifyWithMicrodeposits.MicrodepositType;
      }
    }
    export namespace PaymentMethodOptions {
      export type AcssDebit = Stripe_.SetupIntent.PaymentMethodOptions.AcssDebit;
      export type AmazonPay = Stripe_.SetupIntent.PaymentMethodOptions.AmazonPay;
      export type BacsDebit = Stripe_.SetupIntent.PaymentMethodOptions.BacsDebit;
      export type Bizum = Stripe_.SetupIntent.PaymentMethodOptions.Bizum;
      export type Card = Stripe_.SetupIntent.PaymentMethodOptions.Card;
      export type CardPresent = Stripe_.SetupIntent.PaymentMethodOptions.CardPresent;
      export type Klarna = Stripe_.SetupIntent.PaymentMethodOptions.Klarna;
      export type Link = Stripe_.SetupIntent.PaymentMethodOptions.Link;
      export type Paypal = Stripe_.SetupIntent.PaymentMethodOptions.Paypal;
      export type Payto = Stripe_.SetupIntent.PaymentMethodOptions.Payto;
      export type Pix = Stripe_.SetupIntent.PaymentMethodOptions.Pix;
      export type SepaDebit = Stripe_.SetupIntent.PaymentMethodOptions.SepaDebit;
      export type Upi = Stripe_.SetupIntent.PaymentMethodOptions.Upi;
      export type UsBankAccount = Stripe_.SetupIntent.PaymentMethodOptions.UsBankAccount;
      export namespace AcssDebit {
        export type Currency = Stripe_.SetupIntent.PaymentMethodOptions.AcssDebit.Currency;
        export type MandateOptions = Stripe_.SetupIntent.PaymentMethodOptions.AcssDebit.MandateOptions;
        export type VerificationMethod = Stripe_.SetupIntent.PaymentMethodOptions.AcssDebit.VerificationMethod;
        export namespace MandateOptions {
          export type DefaultFor = Stripe_.SetupIntent.PaymentMethodOptions.AcssDebit.MandateOptions.DefaultFor;
          export type PaymentSchedule = Stripe_.SetupIntent.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
          export type TransactionType = Stripe_.SetupIntent.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
        }
      }
      export namespace BacsDebit {
        export type MandateOptions = Stripe_.SetupIntent.PaymentMethodOptions.BacsDebit.MandateOptions;
      }
      export namespace Card {
        export type MandateOptions = Stripe_.SetupIntent.PaymentMethodOptions.Card.MandateOptions;
        export type Network = Stripe_.SetupIntent.PaymentMethodOptions.Card.Network;
        export type RequestThreeDSecure = Stripe_.SetupIntent.PaymentMethodOptions.Card.RequestThreeDSecure;
        export namespace MandateOptions {
          export type AmountType = Stripe_.SetupIntent.PaymentMethodOptions.Card.MandateOptions.AmountType;
          export type Interval = Stripe_.SetupIntent.PaymentMethodOptions.Card.MandateOptions.Interval;
        }
      }
      export namespace Payto {
        export type MandateOptions = Stripe_.SetupIntent.PaymentMethodOptions.Payto.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe_.SetupIntent.PaymentMethodOptions.Payto.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe_.SetupIntent.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
          export type Purpose = Stripe_.SetupIntent.PaymentMethodOptions.Payto.MandateOptions.Purpose;
        }
      }
      export namespace Pix {
        export type MandateOptions = Stripe_.SetupIntent.PaymentMethodOptions.Pix.MandateOptions;
        export namespace MandateOptions {
          export type AmountIncludesIof = Stripe_.SetupIntent.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
          export type AmountType = Stripe_.SetupIntent.PaymentMethodOptions.Pix.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe_.SetupIntent.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
        }
      }
      export namespace SepaDebit {
        export type MandateOptions = Stripe_.SetupIntent.PaymentMethodOptions.SepaDebit.MandateOptions;
      }
      export namespace Upi {
        export type MandateOptions = Stripe_.SetupIntent.PaymentMethodOptions.Upi.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe_.SetupIntent.PaymentMethodOptions.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type FinancialConnections = Stripe_.SetupIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections;
        export type MandateOptions = Stripe_.SetupIntent.PaymentMethodOptions.UsBankAccount.MandateOptions;
        export type VerificationMethod = Stripe_.SetupIntent.PaymentMethodOptions.UsBankAccount.VerificationMethod;
        export namespace FinancialConnections {
          export type Filters = Stripe_.SetupIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
          export type Permission = Stripe_.SetupIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
          export type Prefetch = Stripe_.SetupIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          export namespace Filters {
            export type AccountSubcategory = Stripe_.SetupIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
          }
        }
      }
    }
  }
  export namespace ShippingRateCreateParams {
    export type DeliveryEstimate = Stripe_.ShippingRateCreateParams.DeliveryEstimate;
    export type FixedAmount = Stripe_.ShippingRateCreateParams.FixedAmount;
    export type TaxBehavior = Stripe_.ShippingRateCreateParams.TaxBehavior;
    export namespace DeliveryEstimate {
      export type Maximum = Stripe_.ShippingRateCreateParams.DeliveryEstimate.Maximum;
      export type Minimum = Stripe_.ShippingRateCreateParams.DeliveryEstimate.Minimum;
      export namespace Maximum {
        export type Unit = Stripe_.ShippingRateCreateParams.DeliveryEstimate.Maximum.Unit;
      }
      export namespace Minimum {
        export type Unit = Stripe_.ShippingRateCreateParams.DeliveryEstimate.Minimum.Unit;
      }
    }
    export namespace FixedAmount {
      export type CurrencyOptions = Stripe_.ShippingRateCreateParams.FixedAmount.CurrencyOptions;
      export namespace CurrencyOptions {
        export type TaxBehavior = Stripe_.ShippingRateCreateParams.FixedAmount.CurrencyOptions.TaxBehavior;
      }
    }
  }
  export namespace ShippingRateUpdateParams {
    export type FixedAmount = Stripe_.ShippingRateUpdateParams.FixedAmount;
    export type TaxBehavior = Stripe_.ShippingRateUpdateParams.TaxBehavior;
    export namespace FixedAmount {
      export type CurrencyOptions = Stripe_.ShippingRateUpdateParams.FixedAmount.CurrencyOptions;
      export namespace CurrencyOptions {
        export type TaxBehavior = Stripe_.ShippingRateUpdateParams.FixedAmount.CurrencyOptions.TaxBehavior;
      }
    }
  }
  export namespace ShippingRate {
    export type DeliveryEstimate = Stripe_.ShippingRate.DeliveryEstimate;
    export type FixedAmount = Stripe_.ShippingRate.FixedAmount;
    export type TaxBehavior = Stripe_.ShippingRate.TaxBehavior;
    export namespace DeliveryEstimate {
      export type Maximum = Stripe_.ShippingRate.DeliveryEstimate.Maximum;
      export type Minimum = Stripe_.ShippingRate.DeliveryEstimate.Minimum;
      export namespace Maximum {
        export type Unit = Stripe_.ShippingRate.DeliveryEstimate.Maximum.Unit;
      }
      export namespace Minimum {
        export type Unit = Stripe_.ShippingRate.DeliveryEstimate.Minimum.Unit;
      }
    }
    export namespace FixedAmount {
      export type CurrencyOptions = Stripe_.ShippingRate.FixedAmount.CurrencyOptions;
      export namespace CurrencyOptions {
        export type TaxBehavior = Stripe_.ShippingRate.FixedAmount.CurrencyOptions.TaxBehavior;
      }
    }
  }
  export namespace SourceCreateParams {
    export type Flow = Stripe_.SourceCreateParams.Flow;
    export type Mandate = Stripe_.SourceCreateParams.Mandate;
    export type Owner = Stripe_.SourceCreateParams.Owner;
    export type Receiver = Stripe_.SourceCreateParams.Receiver;
    export type Redirect = Stripe_.SourceCreateParams.Redirect;
    export type SourceOrder = Stripe_.SourceCreateParams.SourceOrder;
    export type Usage = Stripe_.SourceCreateParams.Usage;
    export namespace Mandate {
      export type Acceptance = Stripe_.SourceCreateParams.Mandate.Acceptance;
      export type Interval = Stripe_.SourceCreateParams.Mandate.Interval;
      export type NotificationMethod = Stripe_.SourceCreateParams.Mandate.NotificationMethod;
      export namespace Acceptance {
        export type Offline = Stripe_.SourceCreateParams.Mandate.Acceptance.Offline;
        export type Online = Stripe_.SourceCreateParams.Mandate.Acceptance.Online;
        export type Status = Stripe_.SourceCreateParams.Mandate.Acceptance.Status;
        export type Type = Stripe_.SourceCreateParams.Mandate.Acceptance.Type;
      }
    }
    export namespace Receiver {
      export type RefundAttributesMethod = Stripe_.SourceCreateParams.Receiver.RefundAttributesMethod;
    }
    export namespace SourceOrder {
      export type Item = Stripe_.SourceCreateParams.SourceOrder.Item;
      export type Shipping = Stripe_.SourceCreateParams.SourceOrder.Shipping;
      export namespace Item {
        export type Type = Stripe_.SourceCreateParams.SourceOrder.Item.Type;
      }
    }
  }
  export namespace SourceUpdateParams {
    export type Mandate = Stripe_.SourceUpdateParams.Mandate;
    export type Owner = Stripe_.SourceUpdateParams.Owner;
    export type SourceOrder = Stripe_.SourceUpdateParams.SourceOrder;
    export namespace Mandate {
      export type Acceptance = Stripe_.SourceUpdateParams.Mandate.Acceptance;
      export type Interval = Stripe_.SourceUpdateParams.Mandate.Interval;
      export type NotificationMethod = Stripe_.SourceUpdateParams.Mandate.NotificationMethod;
      export namespace Acceptance {
        export type Offline = Stripe_.SourceUpdateParams.Mandate.Acceptance.Offline;
        export type Online = Stripe_.SourceUpdateParams.Mandate.Acceptance.Online;
        export type Status = Stripe_.SourceUpdateParams.Mandate.Acceptance.Status;
        export type Type = Stripe_.SourceUpdateParams.Mandate.Acceptance.Type;
      }
    }
    export namespace SourceOrder {
      export type Item = Stripe_.SourceUpdateParams.SourceOrder.Item;
      export type Shipping = Stripe_.SourceUpdateParams.SourceOrder.Shipping;
      export namespace Item {
        export type Type = Stripe_.SourceUpdateParams.SourceOrder.Item.Type;
      }
    }
  }
  export namespace Source {
    export type AchCreditTransfer = Stripe_.Source.AchCreditTransfer;
    export type AchDebit = Stripe_.Source.AchDebit;
    export type AcssDebit = Stripe_.Source.AcssDebit;
    export type Alipay = Stripe_.Source.Alipay;
    export type AllowRedisplay = Stripe_.Source.AllowRedisplay;
    export type AuBecsDebit = Stripe_.Source.AuBecsDebit;
    export type Bancontact = Stripe_.Source.Bancontact;
    export type Card = Stripe_.Source.Card;
    export type CardPresent = Stripe_.Source.CardPresent;
    export type CodeVerification = Stripe_.Source.CodeVerification;
    export type Eps = Stripe_.Source.Eps;
    export type Giropay = Stripe_.Source.Giropay;
    export type Ideal = Stripe_.Source.Ideal;
    export type Klarna = Stripe_.Source.Klarna;
    export type Multibanco = Stripe_.Source.Multibanco;
    export type Owner = Stripe_.Source.Owner;
    export type P24 = Stripe_.Source.P24;
    export type Receiver = Stripe_.Source.Receiver;
    export type Redirect = Stripe_.Source.Redirect;
    export type SepaCreditTransfer = Stripe_.Source.SepaCreditTransfer;
    export type SepaDebit = Stripe_.Source.SepaDebit;
    export type Sofort = Stripe_.Source.Sofort;
    export type SourceOrder = Stripe_.Source.SourceOrder;
    export type ThreeDSecure = Stripe_.Source.ThreeDSecure;
    export type Type = Stripe_.Source.Type;
    export type Wechat = Stripe_.Source.Wechat;
    export namespace SourceOrder {
      export type Item = Stripe_.Source.SourceOrder.Item;
      export type Shipping = Stripe_.Source.SourceOrder.Shipping;
    }
  }
  export namespace SubscriptionCreateParams {
    export type AddInvoiceItem = Stripe_.SubscriptionCreateParams.AddInvoiceItem;
    export type AutomaticTax = Stripe_.SubscriptionCreateParams.AutomaticTax;
    export type BillingCycleAnchorConfig = Stripe_.SubscriptionCreateParams.BillingCycleAnchorConfig;
    export type BillingMode = Stripe_.SubscriptionCreateParams.BillingMode;
    export type BillingSchedule = Stripe_.SubscriptionCreateParams.BillingSchedule;
    export type BillingThresholds = Stripe_.SubscriptionCreateParams.BillingThresholds;
    export type CancelAt = Stripe_.SubscriptionCreateParams.CancelAt;
    export type CollectionMethod = Stripe_.SubscriptionCreateParams.CollectionMethod;
    export type Discount = Stripe_.SubscriptionCreateParams.Discount;
    export type InvoiceSettings = Stripe_.SubscriptionCreateParams.InvoiceSettings;
    export type Item = Stripe_.SubscriptionCreateParams.Item;
    export type PaymentBehavior = Stripe_.SubscriptionCreateParams.PaymentBehavior;
    export type PaymentSettings = Stripe_.SubscriptionCreateParams.PaymentSettings;
    export type PendingInvoiceItemInterval = Stripe_.SubscriptionCreateParams.PendingInvoiceItemInterval;
    export type ProrationBehavior = Stripe_.SubscriptionCreateParams.ProrationBehavior;
    export type TransferData = Stripe_.SubscriptionCreateParams.TransferData;
    export type TrialSettings = Stripe_.SubscriptionCreateParams.TrialSettings;
    export namespace AddInvoiceItem {
      export type Discount = Stripe_.SubscriptionCreateParams.AddInvoiceItem.Discount;
      export type Period = Stripe_.SubscriptionCreateParams.AddInvoiceItem.Period;
      export type PriceData = Stripe_.SubscriptionCreateParams.AddInvoiceItem.PriceData;
      export namespace Period {
        export type End = Stripe_.SubscriptionCreateParams.AddInvoiceItem.Period.End;
        export type Start = Stripe_.SubscriptionCreateParams.AddInvoiceItem.Period.Start;
        export namespace End {
          export type Type = Stripe_.SubscriptionCreateParams.AddInvoiceItem.Period.End.Type;
        }
        export namespace Start {
          export type Type = Stripe_.SubscriptionCreateParams.AddInvoiceItem.Period.Start.Type;
        }
      }
      export namespace PriceData {
        export type TaxBehavior = Stripe_.SubscriptionCreateParams.AddInvoiceItem.PriceData.TaxBehavior;
      }
    }
    export namespace AutomaticTax {
      export type Liability = Stripe_.SubscriptionCreateParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe_.SubscriptionCreateParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace BillingMode {
      export type Flexible = Stripe_.SubscriptionCreateParams.BillingMode.Flexible;
      export type Type = Stripe_.SubscriptionCreateParams.BillingMode.Type;
      export namespace Flexible {
        export type ProrationDiscounts = Stripe_.SubscriptionCreateParams.BillingMode.Flexible.ProrationDiscounts;
      }
    }
    export namespace BillingSchedule {
      export type AppliesTo = Stripe_.SubscriptionCreateParams.BillingSchedule.AppliesTo;
      export type BillUntil = Stripe_.SubscriptionCreateParams.BillingSchedule.BillUntil;
      export namespace BillUntil {
        export type Duration = Stripe_.SubscriptionCreateParams.BillingSchedule.BillUntil.Duration;
        export type Type = Stripe_.SubscriptionCreateParams.BillingSchedule.BillUntil.Type;
        export namespace Duration {
          export type Interval = Stripe_.SubscriptionCreateParams.BillingSchedule.BillUntil.Duration.Interval;
        }
      }
    }
    export namespace InvoiceSettings {
      export type CustomField = Stripe_.SubscriptionCreateParams.InvoiceSettings.CustomField;
      export type Issuer = Stripe_.SubscriptionCreateParams.InvoiceSettings.Issuer;
      export namespace Issuer {
        export type Type = Stripe_.SubscriptionCreateParams.InvoiceSettings.Issuer.Type;
      }
    }
    export namespace Item {
      export type BillingThresholds = Stripe_.SubscriptionCreateParams.Item.BillingThresholds;
      export type Discount = Stripe_.SubscriptionCreateParams.Item.Discount;
      export type PriceData = Stripe_.SubscriptionCreateParams.Item.PriceData;
      export namespace PriceData {
        export type Recurring = Stripe_.SubscriptionCreateParams.Item.PriceData.Recurring;
        export type TaxBehavior = Stripe_.SubscriptionCreateParams.Item.PriceData.TaxBehavior;
        export namespace Recurring {
          export type Interval = Stripe_.SubscriptionCreateParams.Item.PriceData.Recurring.Interval;
        }
      }
    }
    export namespace PaymentSettings {
      export type PaymentMethodOptions = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions;
      export type PaymentMethodType = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodType;
      export type SaveDefaultPaymentMethod = Stripe_.SubscriptionCreateParams.PaymentSettings.SaveDefaultPaymentMethod;
      export namespace PaymentMethodOptions {
        export type AcssDebit = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.AcssDebit;
        export type Bancontact = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Bancontact;
        export type Card = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Card;
        export type CustomerBalance = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance;
        export type Konbini = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Konbini;
        export type Payto = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Payto;
        export type Pix = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Pix;
        export type SepaDebit = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.SepaDebit;
        export type Upi = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Upi;
        export type UsBankAccount = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount;
        export namespace AcssDebit {
          export type MandateOptions = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions;
          export type VerificationMethod = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.VerificationMethod;
          export namespace MandateOptions {
            export type TransactionType = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
          }
        }
        export namespace Bancontact {
          export type PreferredLanguage = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Bancontact.PreferredLanguage;
        }
        export namespace Card {
          export type MandateOptions = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Card.MandateOptions;
          export type Network = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Card.Network;
          export type RequestThreeDSecure = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Card.RequestThreeDSecure;
          export namespace MandateOptions {
            export type AmountType = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Card.MandateOptions.AmountType;
          }
        }
        export namespace CustomerBalance {
          export type BankTransfer = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer;
          export namespace BankTransfer {
            export type EuBankTransfer = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
          }
        }
        export namespace Payto {
          export type MandateOptions = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions;
          export namespace MandateOptions {
            export type Purpose = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions.Purpose;
          }
        }
        export namespace Pix {
          export type MandateOptions = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions;
          export namespace MandateOptions {
            export type AmountIncludesIof = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
            export type PaymentSchedule = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
          }
        }
        export namespace Upi {
          export type MandateOptions = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions;
          export namespace MandateOptions {
            export type AmountType = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions.AmountType;
          }
        }
        export namespace UsBankAccount {
          export type FinancialConnections = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections;
          export type VerificationMethod = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.VerificationMethod;
          export namespace FinancialConnections {
            export type Filters = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
            export type Permission = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
            export type Prefetch = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
            export namespace Filters {
              export type AccountSubcategory = Stripe_.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
            }
          }
        }
      }
    }
    export namespace PendingInvoiceItemInterval {
      export type Interval = Stripe_.SubscriptionCreateParams.PendingInvoiceItemInterval.Interval;
    }
    export namespace TrialSettings {
      export type EndBehavior = Stripe_.SubscriptionCreateParams.TrialSettings.EndBehavior;
      export namespace EndBehavior {
        export type MissingPaymentMethod = Stripe_.SubscriptionCreateParams.TrialSettings.EndBehavior.MissingPaymentMethod;
      }
    }
  }
  export namespace SubscriptionUpdateParams {
    export type AddInvoiceItem = Stripe_.SubscriptionUpdateParams.AddInvoiceItem;
    export type AutomaticTax = Stripe_.SubscriptionUpdateParams.AutomaticTax;
    export type BillingCycleAnchor = Stripe_.SubscriptionUpdateParams.BillingCycleAnchor;
    export type BillingSchedule = Stripe_.SubscriptionUpdateParams.BillingSchedule;
    export type BillingThresholds = Stripe_.SubscriptionUpdateParams.BillingThresholds;
    export type CancelAt = Stripe_.SubscriptionUpdateParams.CancelAt;
    export type CancellationDetails = Stripe_.SubscriptionUpdateParams.CancellationDetails;
    export type CollectionMethod = Stripe_.SubscriptionUpdateParams.CollectionMethod;
    export type Discount = Stripe_.SubscriptionUpdateParams.Discount;
    export type InvoiceSettings = Stripe_.SubscriptionUpdateParams.InvoiceSettings;
    export type Item = Stripe_.SubscriptionUpdateParams.Item;
    export type PauseCollection = Stripe_.SubscriptionUpdateParams.PauseCollection;
    export type PaymentBehavior = Stripe_.SubscriptionUpdateParams.PaymentBehavior;
    export type PaymentSettings = Stripe_.SubscriptionUpdateParams.PaymentSettings;
    export type PendingInvoiceItemInterval = Stripe_.SubscriptionUpdateParams.PendingInvoiceItemInterval;
    export type ProrationBehavior = Stripe_.SubscriptionUpdateParams.ProrationBehavior;
    export type TransferData = Stripe_.SubscriptionUpdateParams.TransferData;
    export type TrialSettings = Stripe_.SubscriptionUpdateParams.TrialSettings;
    export namespace AddInvoiceItem {
      export type Discount = Stripe_.SubscriptionUpdateParams.AddInvoiceItem.Discount;
      export type Period = Stripe_.SubscriptionUpdateParams.AddInvoiceItem.Period;
      export type PriceData = Stripe_.SubscriptionUpdateParams.AddInvoiceItem.PriceData;
      export namespace Period {
        export type End = Stripe_.SubscriptionUpdateParams.AddInvoiceItem.Period.End;
        export type Start = Stripe_.SubscriptionUpdateParams.AddInvoiceItem.Period.Start;
        export namespace End {
          export type Type = Stripe_.SubscriptionUpdateParams.AddInvoiceItem.Period.End.Type;
        }
        export namespace Start {
          export type Type = Stripe_.SubscriptionUpdateParams.AddInvoiceItem.Period.Start.Type;
        }
      }
      export namespace PriceData {
        export type TaxBehavior = Stripe_.SubscriptionUpdateParams.AddInvoiceItem.PriceData.TaxBehavior;
      }
    }
    export namespace AutomaticTax {
      export type Liability = Stripe_.SubscriptionUpdateParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe_.SubscriptionUpdateParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace BillingSchedule {
      export type AppliesTo = Stripe_.SubscriptionUpdateParams.BillingSchedule.AppliesTo;
      export type BillUntil = Stripe_.SubscriptionUpdateParams.BillingSchedule.BillUntil;
      export namespace BillUntil {
        export type Duration = Stripe_.SubscriptionUpdateParams.BillingSchedule.BillUntil.Duration;
        export type Type = Stripe_.SubscriptionUpdateParams.BillingSchedule.BillUntil.Type;
        export namespace Duration {
          export type Interval = Stripe_.SubscriptionUpdateParams.BillingSchedule.BillUntil.Duration.Interval;
        }
      }
    }
    export namespace CancellationDetails {
      export type Feedback = Stripe_.SubscriptionUpdateParams.CancellationDetails.Feedback;
    }
    export namespace InvoiceSettings {
      export type CustomField = Stripe_.SubscriptionUpdateParams.InvoiceSettings.CustomField;
      export type Issuer = Stripe_.SubscriptionUpdateParams.InvoiceSettings.Issuer;
      export namespace Issuer {
        export type Type = Stripe_.SubscriptionUpdateParams.InvoiceSettings.Issuer.Type;
      }
    }
    export namespace Item {
      export type BillingThresholds = Stripe_.SubscriptionUpdateParams.Item.BillingThresholds;
      export type Discount = Stripe_.SubscriptionUpdateParams.Item.Discount;
      export type PriceData = Stripe_.SubscriptionUpdateParams.Item.PriceData;
      export namespace PriceData {
        export type Recurring = Stripe_.SubscriptionUpdateParams.Item.PriceData.Recurring;
        export type TaxBehavior = Stripe_.SubscriptionUpdateParams.Item.PriceData.TaxBehavior;
        export namespace Recurring {
          export type Interval = Stripe_.SubscriptionUpdateParams.Item.PriceData.Recurring.Interval;
        }
      }
    }
    export namespace PauseCollection {
      export type Behavior = Stripe_.SubscriptionUpdateParams.PauseCollection.Behavior;
    }
    export namespace PaymentSettings {
      export type PaymentMethodOptions = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions;
      export type PaymentMethodType = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodType;
      export type SaveDefaultPaymentMethod = Stripe_.SubscriptionUpdateParams.PaymentSettings.SaveDefaultPaymentMethod;
      export namespace PaymentMethodOptions {
        export type AcssDebit = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.AcssDebit;
        export type Bancontact = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Bancontact;
        export type Card = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Card;
        export type CustomerBalance = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance;
        export type Konbini = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Konbini;
        export type Payto = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Payto;
        export type Pix = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Pix;
        export type SepaDebit = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.SepaDebit;
        export type Upi = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Upi;
        export type UsBankAccount = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount;
        export namespace AcssDebit {
          export type MandateOptions = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions;
          export type VerificationMethod = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.VerificationMethod;
          export namespace MandateOptions {
            export type TransactionType = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
          }
        }
        export namespace Bancontact {
          export type PreferredLanguage = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Bancontact.PreferredLanguage;
        }
        export namespace Card {
          export type MandateOptions = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Card.MandateOptions;
          export type Network = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Card.Network;
          export type RequestThreeDSecure = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Card.RequestThreeDSecure;
          export namespace MandateOptions {
            export type AmountType = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Card.MandateOptions.AmountType;
          }
        }
        export namespace CustomerBalance {
          export type BankTransfer = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer;
          export namespace BankTransfer {
            export type EuBankTransfer = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
          }
        }
        export namespace Payto {
          export type MandateOptions = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions;
          export namespace MandateOptions {
            export type Purpose = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions.Purpose;
          }
        }
        export namespace Pix {
          export type MandateOptions = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions;
          export namespace MandateOptions {
            export type AmountIncludesIof = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
            export type PaymentSchedule = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
          }
        }
        export namespace Upi {
          export type MandateOptions = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions;
          export namespace MandateOptions {
            export type AmountType = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions.AmountType;
          }
        }
        export namespace UsBankAccount {
          export type FinancialConnections = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections;
          export type VerificationMethod = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.VerificationMethod;
          export namespace FinancialConnections {
            export type Filters = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
            export type Permission = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
            export type Prefetch = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
            export namespace Filters {
              export type AccountSubcategory = Stripe_.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
            }
          }
        }
      }
    }
    export namespace PendingInvoiceItemInterval {
      export type Interval = Stripe_.SubscriptionUpdateParams.PendingInvoiceItemInterval.Interval;
    }
    export namespace TrialSettings {
      export type EndBehavior = Stripe_.SubscriptionUpdateParams.TrialSettings.EndBehavior;
      export namespace EndBehavior {
        export type MissingPaymentMethod = Stripe_.SubscriptionUpdateParams.TrialSettings.EndBehavior.MissingPaymentMethod;
      }
    }
  }
  export namespace SubscriptionListParams {
    export type AutomaticTax = Stripe_.SubscriptionListParams.AutomaticTax;
    export type CollectionMethod = Stripe_.SubscriptionListParams.CollectionMethod;
    export type Status = Stripe_.SubscriptionListParams.Status;
  }
  export namespace SubscriptionCancelParams {
    export type CancellationDetails = Stripe_.SubscriptionCancelParams.CancellationDetails;
    export namespace CancellationDetails {
      export type Feedback = Stripe_.SubscriptionCancelParams.CancellationDetails.Feedback;
    }
  }
  export namespace SubscriptionMigrateParams {
    export type BillingMode = Stripe_.SubscriptionMigrateParams.BillingMode;
    export namespace BillingMode {
      export type Flexible = Stripe_.SubscriptionMigrateParams.BillingMode.Flexible;
      export namespace Flexible {
        export type ProrationDiscounts = Stripe_.SubscriptionMigrateParams.BillingMode.Flexible.ProrationDiscounts;
      }
    }
  }
  export namespace SubscriptionResumeParams {
    export type BillingCycleAnchor = Stripe_.SubscriptionResumeParams.BillingCycleAnchor;
    export type ProrationBehavior = Stripe_.SubscriptionResumeParams.ProrationBehavior;
  }
  export namespace Subscription {
    export type AutomaticTax = Stripe_.Subscription.AutomaticTax;
    export type BillingCycleAnchorConfig = Stripe_.Subscription.BillingCycleAnchorConfig;
    export type BillingMode = Stripe_.Subscription.BillingMode;
    export type BillingSchedule = Stripe_.Subscription.BillingSchedule;
    export type BillingThresholds = Stripe_.Subscription.BillingThresholds;
    export type CancellationDetails = Stripe_.Subscription.CancellationDetails;
    export type CollectionMethod = Stripe_.Subscription.CollectionMethod;
    export type InvoiceSettings = Stripe_.Subscription.InvoiceSettings;
    export type ManagedPayments = Stripe_.Subscription.ManagedPayments;
    export type PauseCollection = Stripe_.Subscription.PauseCollection;
    export type PaymentSettings = Stripe_.Subscription.PaymentSettings;
    export type PendingInvoiceItemInterval = Stripe_.Subscription.PendingInvoiceItemInterval;
    export type PendingUpdate = Stripe_.Subscription.PendingUpdate;
    export type PresentmentDetails = Stripe_.Subscription.PresentmentDetails;
    export type Status = Stripe_.Subscription.Status;
    export type TransferData = Stripe_.Subscription.TransferData;
    export type TrialSettings = Stripe_.Subscription.TrialSettings;
    export namespace AutomaticTax {
      export type Liability = Stripe_.Subscription.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe_.Subscription.AutomaticTax.Liability.Type;
      }
    }
    export namespace BillingMode {
      export type Flexible = Stripe_.Subscription.BillingMode.Flexible;
      export type Type = Stripe_.Subscription.BillingMode.Type;
      export namespace Flexible {
        export type ProrationDiscounts = Stripe_.Subscription.BillingMode.Flexible.ProrationDiscounts;
      }
    }
    export namespace BillingSchedule {
      export type AppliesTo = Stripe_.Subscription.BillingSchedule.AppliesTo;
      export type BillUntil = Stripe_.Subscription.BillingSchedule.BillUntil;
      export namespace BillUntil {
        export type Duration = Stripe_.Subscription.BillingSchedule.BillUntil.Duration;
        export type Type = Stripe_.Subscription.BillingSchedule.BillUntil.Type;
        export namespace Duration {
          export type Interval = Stripe_.Subscription.BillingSchedule.BillUntil.Duration.Interval;
        }
      }
    }
    export namespace CancellationDetails {
      export type Feedback = Stripe_.Subscription.CancellationDetails.Feedback;
      export type Reason = Stripe_.Subscription.CancellationDetails.Reason;
    }
    export namespace InvoiceSettings {
      export type CustomField = Stripe_.Subscription.InvoiceSettings.CustomField;
      export type Issuer = Stripe_.Subscription.InvoiceSettings.Issuer;
      export namespace Issuer {
        export type Type = Stripe_.Subscription.InvoiceSettings.Issuer.Type;
      }
    }
    export namespace PauseCollection {
      export type Behavior = Stripe_.Subscription.PauseCollection.Behavior;
    }
    export namespace PaymentSettings {
      export type PaymentMethodOptions = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions;
      export type PaymentMethodType = Stripe_.Subscription.PaymentSettings.PaymentMethodType;
      export type SaveDefaultPaymentMethod = Stripe_.Subscription.PaymentSettings.SaveDefaultPaymentMethod;
      export namespace PaymentMethodOptions {
        export type AcssDebit = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.AcssDebit;
        export type Bancontact = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Bancontact;
        export type Card = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Card;
        export type CustomerBalance = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.CustomerBalance;
        export type Konbini = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Konbini;
        export type Payto = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Payto;
        export type Pix = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Pix;
        export type SepaDebit = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.SepaDebit;
        export type Upi = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Upi;
        export type UsBankAccount = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.UsBankAccount;
        export namespace AcssDebit {
          export type MandateOptions = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions;
          export type VerificationMethod = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.AcssDebit.VerificationMethod;
          export namespace MandateOptions {
            export type TransactionType = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
          }
        }
        export namespace Bancontact {
          export type PreferredLanguage = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Bancontact.PreferredLanguage;
        }
        export namespace Card {
          export type MandateOptions = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Card.MandateOptions;
          export type Network = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Card.Network;
          export type RequestThreeDSecure = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Card.RequestThreeDSecure;
          export namespace MandateOptions {
            export type AmountType = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Card.MandateOptions.AmountType;
          }
        }
        export namespace CustomerBalance {
          export type BankTransfer = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer;
          export namespace BankTransfer {
            export type EuBankTransfer = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
            export namespace EuBankTransfer {
              export type Country = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer.Country;
            }
          }
        }
        export namespace Payto {
          export type MandateOptions = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions;
          export namespace MandateOptions {
            export type AmountType = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions.AmountType;
            export type Purpose = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions.Purpose;
          }
        }
        export namespace Pix {
          export type MandateOptions = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions;
          export namespace MandateOptions {
            export type AmountIncludesIof = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
            export type PaymentSchedule = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
          }
        }
        export namespace Upi {
          export type MandateOptions = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions;
          export namespace MandateOptions {
            export type AmountType = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions.AmountType;
          }
        }
        export namespace UsBankAccount {
          export type FinancialConnections = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections;
          export type VerificationMethod = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.UsBankAccount.VerificationMethod;
          export namespace FinancialConnections {
            export type Filters = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
            export type Permission = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
            export type Prefetch = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
            export namespace Filters {
              export type AccountSubcategory = Stripe_.Subscription.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
            }
          }
        }
      }
    }
    export namespace PendingInvoiceItemInterval {
      export type Interval = Stripe_.Subscription.PendingInvoiceItemInterval.Interval;
    }
    export namespace TrialSettings {
      export type EndBehavior = Stripe_.Subscription.TrialSettings.EndBehavior;
      export namespace EndBehavior {
        export type MissingPaymentMethod = Stripe_.Subscription.TrialSettings.EndBehavior.MissingPaymentMethod;
      }
    }
  }
  export namespace SubscriptionItemCreateParams {
    export type BillingThresholds = Stripe_.SubscriptionItemCreateParams.BillingThresholds;
    export type Discount = Stripe_.SubscriptionItemCreateParams.Discount;
    export type PaymentBehavior = Stripe_.SubscriptionItemCreateParams.PaymentBehavior;
    export type PriceData = Stripe_.SubscriptionItemCreateParams.PriceData;
    export type ProrationBehavior = Stripe_.SubscriptionItemCreateParams.ProrationBehavior;
    export namespace PriceData {
      export type Recurring = Stripe_.SubscriptionItemCreateParams.PriceData.Recurring;
      export type TaxBehavior = Stripe_.SubscriptionItemCreateParams.PriceData.TaxBehavior;
      export namespace Recurring {
        export type Interval = Stripe_.SubscriptionItemCreateParams.PriceData.Recurring.Interval;
      }
    }
  }
  export namespace SubscriptionItemUpdateParams {
    export type BillingThresholds = Stripe_.SubscriptionItemUpdateParams.BillingThresholds;
    export type Discount = Stripe_.SubscriptionItemUpdateParams.Discount;
    export type PaymentBehavior = Stripe_.SubscriptionItemUpdateParams.PaymentBehavior;
    export type PriceData = Stripe_.SubscriptionItemUpdateParams.PriceData;
    export type ProrationBehavior = Stripe_.SubscriptionItemUpdateParams.ProrationBehavior;
    export namespace PriceData {
      export type Recurring = Stripe_.SubscriptionItemUpdateParams.PriceData.Recurring;
      export type TaxBehavior = Stripe_.SubscriptionItemUpdateParams.PriceData.TaxBehavior;
      export namespace Recurring {
        export type Interval = Stripe_.SubscriptionItemUpdateParams.PriceData.Recurring.Interval;
      }
    }
  }
  export namespace SubscriptionItemDeleteParams {
    export type PaymentBehavior = Stripe_.SubscriptionItemDeleteParams.PaymentBehavior;
    export type ProrationBehavior = Stripe_.SubscriptionItemDeleteParams.ProrationBehavior;
  }
  export namespace SubscriptionItem {
    export type BillingThresholds = Stripe_.SubscriptionItem.BillingThresholds;
  }
  export namespace SubscriptionScheduleCreateParams {
    export type BillingMode = Stripe_.SubscriptionScheduleCreateParams.BillingMode;
    export type DefaultSettings = Stripe_.SubscriptionScheduleCreateParams.DefaultSettings;
    export type EndBehavior = Stripe_.SubscriptionScheduleCreateParams.EndBehavior;
    export type Phase = Stripe_.SubscriptionScheduleCreateParams.Phase;
    export namespace BillingMode {
      export type Flexible = Stripe_.SubscriptionScheduleCreateParams.BillingMode.Flexible;
      export type Type = Stripe_.SubscriptionScheduleCreateParams.BillingMode.Type;
      export namespace Flexible {
        export type ProrationDiscounts = Stripe_.SubscriptionScheduleCreateParams.BillingMode.Flexible.ProrationDiscounts;
      }
    }
    export namespace DefaultSettings {
      export type AutomaticTax = Stripe_.SubscriptionScheduleCreateParams.DefaultSettings.AutomaticTax;
      export type BillingCycleAnchor = Stripe_.SubscriptionScheduleCreateParams.DefaultSettings.BillingCycleAnchor;
      export type BillingThresholds = Stripe_.SubscriptionScheduleCreateParams.DefaultSettings.BillingThresholds;
      export type CollectionMethod = Stripe_.SubscriptionScheduleCreateParams.DefaultSettings.CollectionMethod;
      export type InvoiceSettings = Stripe_.SubscriptionScheduleCreateParams.DefaultSettings.InvoiceSettings;
      export type TransferData = Stripe_.SubscriptionScheduleCreateParams.DefaultSettings.TransferData;
      export namespace AutomaticTax {
        export type Liability = Stripe_.SubscriptionScheduleCreateParams.DefaultSettings.AutomaticTax.Liability;
        export namespace Liability {
          export type Type = Stripe_.SubscriptionScheduleCreateParams.DefaultSettings.AutomaticTax.Liability.Type;
        }
      }
      export namespace InvoiceSettings {
        export type Issuer = Stripe_.SubscriptionScheduleCreateParams.DefaultSettings.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe_.SubscriptionScheduleCreateParams.DefaultSettings.InvoiceSettings.Issuer.Type;
        }
      }
    }
    export namespace Phase {
      export type AddInvoiceItem = Stripe_.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem;
      export type AutomaticTax = Stripe_.SubscriptionScheduleCreateParams.Phase.AutomaticTax;
      export type BillingCycleAnchor = Stripe_.SubscriptionScheduleCreateParams.Phase.BillingCycleAnchor;
      export type BillingThresholds = Stripe_.SubscriptionScheduleCreateParams.Phase.BillingThresholds;
      export type CollectionMethod = Stripe_.SubscriptionScheduleCreateParams.Phase.CollectionMethod;
      export type Discount = Stripe_.SubscriptionScheduleCreateParams.Phase.Discount;
      export type Duration = Stripe_.SubscriptionScheduleCreateParams.Phase.Duration;
      export type InvoiceSettings = Stripe_.SubscriptionScheduleCreateParams.Phase.InvoiceSettings;
      export type Item = Stripe_.SubscriptionScheduleCreateParams.Phase.Item;
      export type ProrationBehavior = Stripe_.SubscriptionScheduleCreateParams.Phase.ProrationBehavior;
      export type TransferData = Stripe_.SubscriptionScheduleCreateParams.Phase.TransferData;
      export namespace AddInvoiceItem {
        export type Discount = Stripe_.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem.Discount;
        export type Period = Stripe_.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem.Period;
        export type PriceData = Stripe_.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem.PriceData;
        export namespace Period {
          export type End = Stripe_.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem.Period.End;
          export type Start = Stripe_.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem.Period.Start;
          export namespace End {
            export type Type = Stripe_.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem.Period.End.Type;
          }
          export namespace Start {
            export type Type = Stripe_.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem.Period.Start.Type;
          }
        }
        export namespace PriceData {
          export type TaxBehavior = Stripe_.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem.PriceData.TaxBehavior;
        }
      }
      export namespace AutomaticTax {
        export type Liability = Stripe_.SubscriptionScheduleCreateParams.Phase.AutomaticTax.Liability;
        export namespace Liability {
          export type Type = Stripe_.SubscriptionScheduleCreateParams.Phase.AutomaticTax.Liability.Type;
        }
      }
      export namespace Duration {
        export type Interval = Stripe_.SubscriptionScheduleCreateParams.Phase.Duration.Interval;
      }
      export namespace InvoiceSettings {
        export type Issuer = Stripe_.SubscriptionScheduleCreateParams.Phase.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe_.SubscriptionScheduleCreateParams.Phase.InvoiceSettings.Issuer.Type;
        }
      }
      export namespace Item {
        export type BillingThresholds = Stripe_.SubscriptionScheduleCreateParams.Phase.Item.BillingThresholds;
        export type Discount = Stripe_.SubscriptionScheduleCreateParams.Phase.Item.Discount;
        export type PriceData = Stripe_.SubscriptionScheduleCreateParams.Phase.Item.PriceData;
        export namespace PriceData {
          export type Recurring = Stripe_.SubscriptionScheduleCreateParams.Phase.Item.PriceData.Recurring;
          export type TaxBehavior = Stripe_.SubscriptionScheduleCreateParams.Phase.Item.PriceData.TaxBehavior;
          export namespace Recurring {
            export type Interval = Stripe_.SubscriptionScheduleCreateParams.Phase.Item.PriceData.Recurring.Interval;
          }
        }
      }
    }
  }
  export namespace SubscriptionScheduleUpdateParams {
    export type DefaultSettings = Stripe_.SubscriptionScheduleUpdateParams.DefaultSettings;
    export type EndBehavior = Stripe_.SubscriptionScheduleUpdateParams.EndBehavior;
    export type Phase = Stripe_.SubscriptionScheduleUpdateParams.Phase;
    export type ProrationBehavior = Stripe_.SubscriptionScheduleUpdateParams.ProrationBehavior;
    export namespace DefaultSettings {
      export type AutomaticTax = Stripe_.SubscriptionScheduleUpdateParams.DefaultSettings.AutomaticTax;
      export type BillingCycleAnchor = Stripe_.SubscriptionScheduleUpdateParams.DefaultSettings.BillingCycleAnchor;
      export type BillingThresholds = Stripe_.SubscriptionScheduleUpdateParams.DefaultSettings.BillingThresholds;
      export type CollectionMethod = Stripe_.SubscriptionScheduleUpdateParams.DefaultSettings.CollectionMethod;
      export type InvoiceSettings = Stripe_.SubscriptionScheduleUpdateParams.DefaultSettings.InvoiceSettings;
      export type TransferData = Stripe_.SubscriptionScheduleUpdateParams.DefaultSettings.TransferData;
      export namespace AutomaticTax {
        export type Liability = Stripe_.SubscriptionScheduleUpdateParams.DefaultSettings.AutomaticTax.Liability;
        export namespace Liability {
          export type Type = Stripe_.SubscriptionScheduleUpdateParams.DefaultSettings.AutomaticTax.Liability.Type;
        }
      }
      export namespace InvoiceSettings {
        export type Issuer = Stripe_.SubscriptionScheduleUpdateParams.DefaultSettings.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe_.SubscriptionScheduleUpdateParams.DefaultSettings.InvoiceSettings.Issuer.Type;
        }
      }
    }
    export namespace Phase {
      export type AddInvoiceItem = Stripe_.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem;
      export type AutomaticTax = Stripe_.SubscriptionScheduleUpdateParams.Phase.AutomaticTax;
      export type BillingCycleAnchor = Stripe_.SubscriptionScheduleUpdateParams.Phase.BillingCycleAnchor;
      export type BillingThresholds = Stripe_.SubscriptionScheduleUpdateParams.Phase.BillingThresholds;
      export type CollectionMethod = Stripe_.SubscriptionScheduleUpdateParams.Phase.CollectionMethod;
      export type Discount = Stripe_.SubscriptionScheduleUpdateParams.Phase.Discount;
      export type Duration = Stripe_.SubscriptionScheduleUpdateParams.Phase.Duration;
      export type InvoiceSettings = Stripe_.SubscriptionScheduleUpdateParams.Phase.InvoiceSettings;
      export type Item = Stripe_.SubscriptionScheduleUpdateParams.Phase.Item;
      export type ProrationBehavior = Stripe_.SubscriptionScheduleUpdateParams.Phase.ProrationBehavior;
      export type TransferData = Stripe_.SubscriptionScheduleUpdateParams.Phase.TransferData;
      export namespace AddInvoiceItem {
        export type Discount = Stripe_.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem.Discount;
        export type Period = Stripe_.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem.Period;
        export type PriceData = Stripe_.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem.PriceData;
        export namespace Period {
          export type End = Stripe_.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem.Period.End;
          export type Start = Stripe_.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem.Period.Start;
          export namespace End {
            export type Type = Stripe_.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem.Period.End.Type;
          }
          export namespace Start {
            export type Type = Stripe_.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem.Period.Start.Type;
          }
        }
        export namespace PriceData {
          export type TaxBehavior = Stripe_.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem.PriceData.TaxBehavior;
        }
      }
      export namespace AutomaticTax {
        export type Liability = Stripe_.SubscriptionScheduleUpdateParams.Phase.AutomaticTax.Liability;
        export namespace Liability {
          export type Type = Stripe_.SubscriptionScheduleUpdateParams.Phase.AutomaticTax.Liability.Type;
        }
      }
      export namespace Duration {
        export type Interval = Stripe_.SubscriptionScheduleUpdateParams.Phase.Duration.Interval;
      }
      export namespace InvoiceSettings {
        export type Issuer = Stripe_.SubscriptionScheduleUpdateParams.Phase.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe_.SubscriptionScheduleUpdateParams.Phase.InvoiceSettings.Issuer.Type;
        }
      }
      export namespace Item {
        export type BillingThresholds = Stripe_.SubscriptionScheduleUpdateParams.Phase.Item.BillingThresholds;
        export type Discount = Stripe_.SubscriptionScheduleUpdateParams.Phase.Item.Discount;
        export type PriceData = Stripe_.SubscriptionScheduleUpdateParams.Phase.Item.PriceData;
        export namespace PriceData {
          export type Recurring = Stripe_.SubscriptionScheduleUpdateParams.Phase.Item.PriceData.Recurring;
          export type TaxBehavior = Stripe_.SubscriptionScheduleUpdateParams.Phase.Item.PriceData.TaxBehavior;
          export namespace Recurring {
            export type Interval = Stripe_.SubscriptionScheduleUpdateParams.Phase.Item.PriceData.Recurring.Interval;
          }
        }
      }
    }
  }
  export namespace SubscriptionSchedule {
    export type BillingMode = Stripe_.SubscriptionSchedule.BillingMode;
    export type CurrentPhase = Stripe_.SubscriptionSchedule.CurrentPhase;
    export type DefaultSettings = Stripe_.SubscriptionSchedule.DefaultSettings;
    export type EndBehavior = Stripe_.SubscriptionSchedule.EndBehavior;
    export type Phase = Stripe_.SubscriptionSchedule.Phase;
    export type Status = Stripe_.SubscriptionSchedule.Status;
    export namespace BillingMode {
      export type Flexible = Stripe_.SubscriptionSchedule.BillingMode.Flexible;
      export type Type = Stripe_.SubscriptionSchedule.BillingMode.Type;
      export namespace Flexible {
        export type ProrationDiscounts = Stripe_.SubscriptionSchedule.BillingMode.Flexible.ProrationDiscounts;
      }
    }
    export namespace DefaultSettings {
      export type AutomaticTax = Stripe_.SubscriptionSchedule.DefaultSettings.AutomaticTax;
      export type BillingCycleAnchor = Stripe_.SubscriptionSchedule.DefaultSettings.BillingCycleAnchor;
      export type BillingThresholds = Stripe_.SubscriptionSchedule.DefaultSettings.BillingThresholds;
      export type CollectionMethod = Stripe_.SubscriptionSchedule.DefaultSettings.CollectionMethod;
      export type InvoiceSettings = Stripe_.SubscriptionSchedule.DefaultSettings.InvoiceSettings;
      export type TransferData = Stripe_.SubscriptionSchedule.DefaultSettings.TransferData;
      export namespace AutomaticTax {
        export type Liability = Stripe_.SubscriptionSchedule.DefaultSettings.AutomaticTax.Liability;
        export namespace Liability {
          export type Type = Stripe_.SubscriptionSchedule.DefaultSettings.AutomaticTax.Liability.Type;
        }
      }
      export namespace InvoiceSettings {
        export type Issuer = Stripe_.SubscriptionSchedule.DefaultSettings.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe_.SubscriptionSchedule.DefaultSettings.InvoiceSettings.Issuer.Type;
        }
      }
    }
    export namespace Phase {
      export type AddInvoiceItem = Stripe_.SubscriptionSchedule.Phase.AddInvoiceItem;
      export type AutomaticTax = Stripe_.SubscriptionSchedule.Phase.AutomaticTax;
      export type BillingCycleAnchor = Stripe_.SubscriptionSchedule.Phase.BillingCycleAnchor;
      export type BillingThresholds = Stripe_.SubscriptionSchedule.Phase.BillingThresholds;
      export type CollectionMethod = Stripe_.SubscriptionSchedule.Phase.CollectionMethod;
      export type Discount = Stripe_.SubscriptionSchedule.Phase.Discount;
      export type InvoiceSettings = Stripe_.SubscriptionSchedule.Phase.InvoiceSettings;
      export type Item = Stripe_.SubscriptionSchedule.Phase.Item;
      export type ProrationBehavior = Stripe_.SubscriptionSchedule.Phase.ProrationBehavior;
      export type TransferData = Stripe_.SubscriptionSchedule.Phase.TransferData;
      export namespace AddInvoiceItem {
        export type Discount = Stripe_.SubscriptionSchedule.Phase.AddInvoiceItem.Discount;
        export type Period = Stripe_.SubscriptionSchedule.Phase.AddInvoiceItem.Period;
        export namespace Period {
          export type End = Stripe_.SubscriptionSchedule.Phase.AddInvoiceItem.Period.End;
          export type Start = Stripe_.SubscriptionSchedule.Phase.AddInvoiceItem.Period.Start;
          export namespace End {
            export type Type = Stripe_.SubscriptionSchedule.Phase.AddInvoiceItem.Period.End.Type;
          }
          export namespace Start {
            export type Type = Stripe_.SubscriptionSchedule.Phase.AddInvoiceItem.Period.Start.Type;
          }
        }
      }
      export namespace AutomaticTax {
        export type Liability = Stripe_.SubscriptionSchedule.Phase.AutomaticTax.Liability;
        export namespace Liability {
          export type Type = Stripe_.SubscriptionSchedule.Phase.AutomaticTax.Liability.Type;
        }
      }
      export namespace InvoiceSettings {
        export type Issuer = Stripe_.SubscriptionSchedule.Phase.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe_.SubscriptionSchedule.Phase.InvoiceSettings.Issuer.Type;
        }
      }
      export namespace Item {
        export type BillingThresholds = Stripe_.SubscriptionSchedule.Phase.Item.BillingThresholds;
        export type Discount = Stripe_.SubscriptionSchedule.Phase.Item.Discount;
      }
    }
  }
  export namespace TaxIdCreateParams {
    export type Type = Stripe_.TaxIdCreateParams.Type;
    export type Owner = Stripe_.TaxIdCreateParams.Owner;
    export namespace Owner {
      export type Type = Stripe_.TaxIdCreateParams.Owner.Type;
    }
  }
  export namespace TaxIdListParams {
    export type Owner = Stripe_.TaxIdListParams.Owner;
    export namespace Owner {
      export type Type = Stripe_.TaxIdListParams.Owner.Type;
    }
  }
  export namespace TaxId {
    export type Owner = Stripe_.TaxId.Owner;
    export type Type = Stripe_.TaxId.Type;
    export type Verification = Stripe_.TaxId.Verification;
    export namespace Owner {
      export type Type = Stripe_.TaxId.Owner.Type;
    }
    export namespace Verification {
      export type Status = Stripe_.TaxId.Verification.Status;
    }
  }
  export namespace TaxRateCreateParams {
    export type TaxType = Stripe_.TaxRateCreateParams.TaxType;
  }
  export namespace TaxRateUpdateParams {
    export type TaxType = Stripe_.TaxRateUpdateParams.TaxType;
  }
  export namespace TaxRate {
    export type FlatAmount = Stripe_.TaxRate.FlatAmount;
    export type JurisdictionLevel = Stripe_.TaxRate.JurisdictionLevel;
    export type RateType = Stripe_.TaxRate.RateType;
    export type TaxType = Stripe_.TaxRate.TaxType;
  }
  export namespace TokenCreateParams {
    export type Account = Stripe_.TokenCreateParams.Account;
    export type BankAccount = Stripe_.TokenCreateParams.BankAccount;
    export type Card = Stripe_.TokenCreateParams.Card;
    export type CvcUpdate = Stripe_.TokenCreateParams.CvcUpdate;
    export type Person = Stripe_.TokenCreateParams.Person;
    export type Pii = Stripe_.TokenCreateParams.Pii;
    export namespace Account {
      export type BusinessType = Stripe_.TokenCreateParams.Account.BusinessType;
      export type Company = Stripe_.TokenCreateParams.Account.Company;
      export type Individual = Stripe_.TokenCreateParams.Account.Individual;
      export namespace Company {
        export type DirectorshipDeclaration = Stripe_.TokenCreateParams.Account.Company.DirectorshipDeclaration;
        export type OwnershipDeclaration = Stripe_.TokenCreateParams.Account.Company.OwnershipDeclaration;
        export type OwnershipExemptionReason = Stripe_.TokenCreateParams.Account.Company.OwnershipExemptionReason;
        export type RegistrationDate = Stripe_.TokenCreateParams.Account.Company.RegistrationDate;
        export type RepresentativeDeclaration = Stripe_.TokenCreateParams.Account.Company.RepresentativeDeclaration;
        export type Structure = Stripe_.TokenCreateParams.Account.Company.Structure;
        export type Verification = Stripe_.TokenCreateParams.Account.Company.Verification;
        export namespace Verification {
          export type Document = Stripe_.TokenCreateParams.Account.Company.Verification.Document;
        }
      }
      export namespace Individual {
        export type Dob = Stripe_.TokenCreateParams.Account.Individual.Dob;
        export type PoliticalExposure = Stripe_.TokenCreateParams.Account.Individual.PoliticalExposure;
        export type Relationship = Stripe_.TokenCreateParams.Account.Individual.Relationship;
        export type Verification = Stripe_.TokenCreateParams.Account.Individual.Verification;
        export namespace Verification {
          export type AdditionalDocument = Stripe_.TokenCreateParams.Account.Individual.Verification.AdditionalDocument;
          export type Document = Stripe_.TokenCreateParams.Account.Individual.Verification.Document;
        }
      }
    }
    export namespace BankAccount {
      export type AccountHolderType = Stripe_.TokenCreateParams.BankAccount.AccountHolderType;
      export type AccountType = Stripe_.TokenCreateParams.BankAccount.AccountType;
    }
    export namespace Card {
      export type Networks = Stripe_.TokenCreateParams.Card.Networks;
      export namespace Networks {
        export type Preferred = Stripe_.TokenCreateParams.Card.Networks.Preferred;
      }
    }
    export namespace Person {
      export type AdditionalTosAcceptances = Stripe_.TokenCreateParams.Person.AdditionalTosAcceptances;
      export type Dob = Stripe_.TokenCreateParams.Person.Dob;
      export type Documents = Stripe_.TokenCreateParams.Person.Documents;
      export type PoliticalExposure = Stripe_.TokenCreateParams.Person.PoliticalExposure;
      export type Relationship = Stripe_.TokenCreateParams.Person.Relationship;
      export type UsCfpbData = Stripe_.TokenCreateParams.Person.UsCfpbData;
      export type Verification = Stripe_.TokenCreateParams.Person.Verification;
      export namespace AdditionalTosAcceptances {
        export type Account = Stripe_.TokenCreateParams.Person.AdditionalTosAcceptances.Account;
      }
      export namespace Documents {
        export type CompanyAuthorization = Stripe_.TokenCreateParams.Person.Documents.CompanyAuthorization;
        export type Passport = Stripe_.TokenCreateParams.Person.Documents.Passport;
        export type Visa = Stripe_.TokenCreateParams.Person.Documents.Visa;
      }
      export namespace UsCfpbData {
        export type EthnicityDetails = Stripe_.TokenCreateParams.Person.UsCfpbData.EthnicityDetails;
        export type RaceDetails = Stripe_.TokenCreateParams.Person.UsCfpbData.RaceDetails;
        export namespace EthnicityDetails {
          export type Ethnicity = Stripe_.TokenCreateParams.Person.UsCfpbData.EthnicityDetails.Ethnicity;
        }
        export namespace RaceDetails {
          export type Race = Stripe_.TokenCreateParams.Person.UsCfpbData.RaceDetails.Race;
        }
      }
      export namespace Verification {
        export type AdditionalDocument = Stripe_.TokenCreateParams.Person.Verification.AdditionalDocument;
        export type Document = Stripe_.TokenCreateParams.Person.Verification.Document;
      }
    }
  }
  export namespace TopupCreateParams {
    export type PaymentMethodOptions = Stripe_.TopupCreateParams.PaymentMethodOptions;
    export namespace PaymentMethodOptions {
      export type UsBankAccount = Stripe_.TopupCreateParams.PaymentMethodOptions.UsBankAccount;
    }
  }
  export namespace TopupListParams {
    export type Status = Stripe_.TopupListParams.Status;
  }
  export namespace Topup {
    export type Status = Stripe_.Topup.Status;
  }
  export namespace TransferCreateParams {
    export type SourceType = Stripe_.TransferCreateParams.SourceType;
  }
  export namespace WebhookEndpointCreateParams {
    export type EnabledEvent = Stripe_.WebhookEndpointCreateParams.EnabledEvent;
    export type ApiVersion = Stripe_.WebhookEndpointCreateParams.ApiVersion;
  }
  export namespace WebhookEndpointUpdateParams {
    export type EnabledEvent = Stripe_.WebhookEndpointUpdateParams.EnabledEvent;
  }
  export namespace BankAccount {
    export type AvailablePayoutMethod = Stripe_.BankAccount.AvailablePayoutMethod;
    export type FutureRequirements = Stripe_.BankAccount.FutureRequirements;
    export type Requirements = Stripe_.BankAccount.Requirements;
    export namespace FutureRequirements {
      export type Error = Stripe_.BankAccount.FutureRequirements.Error;
      export namespace Error {
        export type Code = Stripe_.BankAccount.FutureRequirements.Error.Code;
      }
    }
    export namespace Requirements {
      export type Error = Stripe_.BankAccount.Requirements.Error;
      export namespace Error {
        export type Code = Stripe_.BankAccount.Requirements.Error.Code;
      }
    }
  }
  export namespace Card {
    export type AllowRedisplay = Stripe_.Card.AllowRedisplay;
    export type AvailablePayoutMethod = Stripe_.Card.AvailablePayoutMethod;
    export type Networks = Stripe_.Card.Networks;
    export type RegulatedStatus = Stripe_.Card.RegulatedStatus;
  }
  export namespace DeletedDiscount {
    export type Source = Stripe_.DeletedDiscount.Source;
  }
  export namespace Discount {
    export type Source = Stripe_.Discount.Source;
  }
  export namespace FundingInstructions {
    export type BankTransfer = Stripe_.FundingInstructions.BankTransfer;
    export namespace BankTransfer {
      export type FinancialAddress = Stripe_.FundingInstructions.BankTransfer.FinancialAddress;
      export type Type = Stripe_.FundingInstructions.BankTransfer.Type;
      export namespace FinancialAddress {
        export type Aba = Stripe_.FundingInstructions.BankTransfer.FinancialAddress.Aba;
        export type Iban = Stripe_.FundingInstructions.BankTransfer.FinancialAddress.Iban;
        export type SortCode = Stripe_.FundingInstructions.BankTransfer.FinancialAddress.SortCode;
        export type Spei = Stripe_.FundingInstructions.BankTransfer.FinancialAddress.Spei;
        export type SupportedNetwork = Stripe_.FundingInstructions.BankTransfer.FinancialAddress.SupportedNetwork;
        export type Swift = Stripe_.FundingInstructions.BankTransfer.FinancialAddress.Swift;
        export type Type = Stripe_.FundingInstructions.BankTransfer.FinancialAddress.Type;
        export type Zengin = Stripe_.FundingInstructions.BankTransfer.FinancialAddress.Zengin;
      }
    }
  }
  export namespace LineItem {
    export type AdjustableQuantity = Stripe_.LineItem.AdjustableQuantity;
    export type Discount = Stripe_.LineItem.Discount;
    export type Tax = Stripe_.LineItem.Tax;
    export namespace Tax {
      export type TaxabilityReason = Stripe_.LineItem.Tax.TaxabilityReason;
    }
  }
  export namespace SourceMandateNotification {
    export type AcssDebit = Stripe_.SourceMandateNotification.AcssDebit;
    export type BacsDebit = Stripe_.SourceMandateNotification.BacsDebit;
    export type SepaDebit = Stripe_.SourceMandateNotification.SepaDebit;
  }
  export namespace SourceTransaction {
    export type AchCreditTransfer = Stripe_.SourceTransaction.AchCreditTransfer;
    export type ChfCreditTransfer = Stripe_.SourceTransaction.ChfCreditTransfer;
    export type GbpCreditTransfer = Stripe_.SourceTransaction.GbpCreditTransfer;
    export type PaperCheck = Stripe_.SourceTransaction.PaperCheck;
    export type SepaCreditTransfer = Stripe_.SourceTransaction.SepaCreditTransfer;
    export type Type = Stripe_.SourceTransaction.Type;
  }
  export namespace Capability {
    export type FutureRequirements = Stripe_.Capability.FutureRequirements;
    export type Requirements = Stripe_.Capability.Requirements;
    export type Status = Stripe_.Capability.Status;
    export namespace FutureRequirements {
      export type Alternative = Stripe_.Capability.FutureRequirements.Alternative;
      export type DisabledReason = Stripe_.Capability.FutureRequirements.DisabledReason;
      export type Error = Stripe_.Capability.FutureRequirements.Error;
      export namespace Error {
        export type Code = Stripe_.Capability.FutureRequirements.Error.Code;
      }
    }
    export namespace Requirements {
      export type Alternative = Stripe_.Capability.Requirements.Alternative;
      export type DisabledReason = Stripe_.Capability.Requirements.DisabledReason;
      export type Error = Stripe_.Capability.Requirements.Error;
      export namespace Error {
        export type Code = Stripe_.Capability.Requirements.Error.Code;
      }
    }
  }
  export namespace Person {
    export type AdditionalTosAcceptances = Stripe_.Person.AdditionalTosAcceptances;
    export type AddressKana = Stripe_.Person.AddressKana;
    export type AddressKanji = Stripe_.Person.AddressKanji;
    export type Dob = Stripe_.Person.Dob;
    export type FutureRequirements = Stripe_.Person.FutureRequirements;
    export type PoliticalExposure = Stripe_.Person.PoliticalExposure;
    export type Relationship = Stripe_.Person.Relationship;
    export type Requirements = Stripe_.Person.Requirements;
    export type UsCfpbData = Stripe_.Person.UsCfpbData;
    export type Verification = Stripe_.Person.Verification;
    export namespace AdditionalTosAcceptances {
      export type Account = Stripe_.Person.AdditionalTosAcceptances.Account;
    }
    export namespace FutureRequirements {
      export type Alternative = Stripe_.Person.FutureRequirements.Alternative;
      export type Error = Stripe_.Person.FutureRequirements.Error;
      export namespace Error {
        export type Code = Stripe_.Person.FutureRequirements.Error.Code;
      }
    }
    export namespace Requirements {
      export type Alternative = Stripe_.Person.Requirements.Alternative;
      export type Error = Stripe_.Person.Requirements.Error;
      export namespace Error {
        export type Code = Stripe_.Person.Requirements.Error.Code;
      }
    }
    export namespace UsCfpbData {
      export type EthnicityDetails = Stripe_.Person.UsCfpbData.EthnicityDetails;
      export type RaceDetails = Stripe_.Person.UsCfpbData.RaceDetails;
      export namespace EthnicityDetails {
        export type Ethnicity = Stripe_.Person.UsCfpbData.EthnicityDetails.Ethnicity;
      }
      export namespace RaceDetails {
        export type Race = Stripe_.Person.UsCfpbData.RaceDetails.Race;
      }
    }
    export namespace Verification {
      export type AdditionalDocument = Stripe_.Person.Verification.AdditionalDocument;
      export type Document = Stripe_.Person.Verification.Document;
    }
  }
  export namespace CreditNoteLineItem {
    export type DiscountAmount = Stripe_.CreditNoteLineItem.DiscountAmount;
    export type PretaxCreditAmount = Stripe_.CreditNoteLineItem.PretaxCreditAmount;
    export type Tax = Stripe_.CreditNoteLineItem.Tax;
    export type Type = Stripe_.CreditNoteLineItem.Type;
    export namespace PretaxCreditAmount {
      export type Type = Stripe_.CreditNoteLineItem.PretaxCreditAmount.Type;
    }
    export namespace Tax {
      export type TaxBehavior = Stripe_.CreditNoteLineItem.Tax.TaxBehavior;
      export type TaxRateDetails = Stripe_.CreditNoteLineItem.Tax.TaxRateDetails;
      export type TaxabilityReason = Stripe_.CreditNoteLineItem.Tax.TaxabilityReason;
    }
  }
  export namespace CustomerBalanceTransaction {
    export type Type = Stripe_.CustomerBalanceTransaction.Type;
  }
  export namespace CashBalance {
    export type Settings = Stripe_.CashBalance.Settings;
    export namespace Settings {
      export type ReconciliationMode = Stripe_.CashBalance.Settings.ReconciliationMode;
    }
  }
  export namespace CustomerCashBalanceTransaction {
    export type AdjustedForOverdraft = Stripe_.CustomerCashBalanceTransaction.AdjustedForOverdraft;
    export type AppliedToPayment = Stripe_.CustomerCashBalanceTransaction.AppliedToPayment;
    export type Funded = Stripe_.CustomerCashBalanceTransaction.Funded;
    export type RefundedFromPayment = Stripe_.CustomerCashBalanceTransaction.RefundedFromPayment;
    export type TransferredToBalance = Stripe_.CustomerCashBalanceTransaction.TransferredToBalance;
    export type Type = Stripe_.CustomerCashBalanceTransaction.Type;
    export type UnappliedFromPayment = Stripe_.CustomerCashBalanceTransaction.UnappliedFromPayment;
    export namespace Funded {
      export type BankTransfer = Stripe_.CustomerCashBalanceTransaction.Funded.BankTransfer;
      export namespace BankTransfer {
        export type EuBankTransfer = Stripe_.CustomerCashBalanceTransaction.Funded.BankTransfer.EuBankTransfer;
        export type GbBankTransfer = Stripe_.CustomerCashBalanceTransaction.Funded.BankTransfer.GbBankTransfer;
        export type JpBankTransfer = Stripe_.CustomerCashBalanceTransaction.Funded.BankTransfer.JpBankTransfer;
        export type Type = Stripe_.CustomerCashBalanceTransaction.Funded.BankTransfer.Type;
        export type UsBankTransfer = Stripe_.CustomerCashBalanceTransaction.Funded.BankTransfer.UsBankTransfer;
        export namespace UsBankTransfer {
          export type Network = Stripe_.CustomerCashBalanceTransaction.Funded.BankTransfer.UsBankTransfer.Network;
        }
      }
    }
  }
  export namespace InvoiceLineItem {
    export type DiscountAmount = Stripe_.InvoiceLineItem.DiscountAmount;
    export type Parent = Stripe_.InvoiceLineItem.Parent;
    export type Period = Stripe_.InvoiceLineItem.Period;
    export type PretaxCreditAmount = Stripe_.InvoiceLineItem.PretaxCreditAmount;
    export type Pricing = Stripe_.InvoiceLineItem.Pricing;
    export type Tax = Stripe_.InvoiceLineItem.Tax;
    export namespace Parent {
      export type InvoiceItemDetails = Stripe_.InvoiceLineItem.Parent.InvoiceItemDetails;
      export type SubscriptionItemDetails = Stripe_.InvoiceLineItem.Parent.SubscriptionItemDetails;
      export type Type = Stripe_.InvoiceLineItem.Parent.Type;
      export namespace InvoiceItemDetails {
        export type ProrationDetails = Stripe_.InvoiceLineItem.Parent.InvoiceItemDetails.ProrationDetails;
        export namespace ProrationDetails {
          export type CreditedItems = Stripe_.InvoiceLineItem.Parent.InvoiceItemDetails.ProrationDetails.CreditedItems;
        }
      }
      export namespace SubscriptionItemDetails {
        export type ProrationDetails = Stripe_.InvoiceLineItem.Parent.SubscriptionItemDetails.ProrationDetails;
        export namespace ProrationDetails {
          export type CreditedItems = Stripe_.InvoiceLineItem.Parent.SubscriptionItemDetails.ProrationDetails.CreditedItems;
        }
      }
    }
    export namespace PretaxCreditAmount {
      export type Type = Stripe_.InvoiceLineItem.PretaxCreditAmount.Type;
    }
    export namespace Pricing {
      export type PriceDetails = Stripe_.InvoiceLineItem.Pricing.PriceDetails;
    }
    export namespace Tax {
      export type TaxBehavior = Stripe_.InvoiceLineItem.Tax.TaxBehavior;
      export type TaxRateDetails = Stripe_.InvoiceLineItem.Tax.TaxRateDetails;
      export type TaxabilityReason = Stripe_.InvoiceLineItem.Tax.TaxabilityReason;
    }
  }
  export namespace PaymentIntentAmountDetailsLineItem {
    export type PaymentMethodOptions = Stripe_.PaymentIntentAmountDetailsLineItem.PaymentMethodOptions;
    export type Tax = Stripe_.PaymentIntentAmountDetailsLineItem.Tax;
    export namespace PaymentMethodOptions {
      export type Card = Stripe_.PaymentIntentAmountDetailsLineItem.PaymentMethodOptions.Card;
      export type CardPresent = Stripe_.PaymentIntentAmountDetailsLineItem.PaymentMethodOptions.CardPresent;
      export type Klarna = Stripe_.PaymentIntentAmountDetailsLineItem.PaymentMethodOptions.Klarna;
      export type Paypal = Stripe_.PaymentIntentAmountDetailsLineItem.PaymentMethodOptions.Paypal;
      export namespace Paypal {
        export type Category = Stripe_.PaymentIntentAmountDetailsLineItem.PaymentMethodOptions.Paypal.Category;
      }
    }
  }
  export type Apps = Stripe_.Apps;
  export type Billing = Stripe_.Billing;
  export type BillingPortal = Stripe_.BillingPortal;
  export type Checkout = Stripe_.Checkout;
  export type Climate = Stripe_.Climate;
  export type Entitlements = Stripe_.Entitlements;
  export type FinancialConnections = Stripe_.FinancialConnections;
  export type Forwarding = Stripe_.Forwarding;
  export type Identity = Stripe_.Identity;
  export type Issuing = Stripe_.Issuing;
  export type Radar = Stripe_.Radar;
  export type Reporting = Stripe_.Reporting;
  export type Sigma = Stripe_.Sigma;
  export type Tax = Stripe_.Tax;
  export type Terminal = Stripe_.Terminal;
  export type TestHelpers = Stripe_.TestHelpers;
  export type Treasury = Stripe_.Treasury;
  export type V2 = Stripe_.V2;
  export type Reserve = Stripe_.Reserve;
  export namespace Apps {
    export type Secret = Stripe_.Apps.Secret;
    export type SecretCreateParams = Stripe_.Apps.SecretCreateParams;
    export type SecretListParams = Stripe_.Apps.SecretListParams;
    export type SecretDeleteWhereParams = Stripe_.Apps.SecretDeleteWhereParams;
    export type SecretFindParams = Stripe_.Apps.SecretFindParams;
    export type SecretResource = Stripe_.Apps.SecretResource;
    export namespace SecretCreateParams {
      export type Scope = Stripe_.Apps.SecretCreateParams.Scope;
      export namespace Scope {
        export type Type = Stripe_.Apps.SecretCreateParams.Scope.Type;
      }
    }
    export namespace Secret {
      export type Scope = Stripe_.Apps.Secret.Scope;
      export namespace Scope {
        export type Type = Stripe_.Apps.Secret.Scope.Type;
      }
    }
  }
  export namespace Billing {
    export type Alert = Stripe_.Billing.Alert;
    export type AlertCreateParams = Stripe_.Billing.AlertCreateParams;
    export type AlertRetrieveParams = Stripe_.Billing.AlertRetrieveParams;
    export type AlertListParams = Stripe_.Billing.AlertListParams;
    export type AlertActivateParams = Stripe_.Billing.AlertActivateParams;
    export type AlertArchiveParams = Stripe_.Billing.AlertArchiveParams;
    export type AlertDeactivateParams = Stripe_.Billing.AlertDeactivateParams;
    export type AlertResource = Stripe_.Billing.AlertResource;
    export type CreditBalanceSummary = Stripe_.Billing.CreditBalanceSummary;
    export type CreditBalanceSummaryRetrieveParams = Stripe_.Billing.CreditBalanceSummaryRetrieveParams;
    export type CreditBalanceSummaryResource = Stripe_.Billing.CreditBalanceSummaryResource;
    export type CreditBalanceTransaction = Stripe_.Billing.CreditBalanceTransaction;
    export type CreditBalanceTransactionRetrieveParams = Stripe_.Billing.CreditBalanceTransactionRetrieveParams;
    export type CreditBalanceTransactionListParams = Stripe_.Billing.CreditBalanceTransactionListParams;
    export type CreditBalanceTransactionResource = Stripe_.Billing.CreditBalanceTransactionResource;
    export type CreditGrant = Stripe_.Billing.CreditGrant;
    export type CreditGrantCreateParams = Stripe_.Billing.CreditGrantCreateParams;
    export type CreditGrantRetrieveParams = Stripe_.Billing.CreditGrantRetrieveParams;
    export type CreditGrantUpdateParams = Stripe_.Billing.CreditGrantUpdateParams;
    export type CreditGrantListParams = Stripe_.Billing.CreditGrantListParams;
    export type CreditGrantExpireParams = Stripe_.Billing.CreditGrantExpireParams;
    export type CreditGrantVoidGrantParams = Stripe_.Billing.CreditGrantVoidGrantParams;
    export type CreditGrantResource = Stripe_.Billing.CreditGrantResource;
    export type Meter = Stripe_.Billing.Meter;
    export type MeterCreateParams = Stripe_.Billing.MeterCreateParams;
    export type MeterRetrieveParams = Stripe_.Billing.MeterRetrieveParams;
    export type MeterUpdateParams = Stripe_.Billing.MeterUpdateParams;
    export type MeterListParams = Stripe_.Billing.MeterListParams;
    export type MeterDeactivateParams = Stripe_.Billing.MeterDeactivateParams;
    export type MeterListEventSummariesParams = Stripe_.Billing.MeterListEventSummariesParams;
    export type MeterReactivateParams = Stripe_.Billing.MeterReactivateParams;
    export type MeterResource = Stripe_.Billing.MeterResource;
    export type MeterEvent = Stripe_.Billing.MeterEvent;
    export type MeterEventCreateParams = Stripe_.Billing.MeterEventCreateParams;
    export type MeterEventResource = Stripe_.Billing.MeterEventResource;
    export type MeterEventAdjustment = Stripe_.Billing.MeterEventAdjustment;
    export type MeterEventAdjustmentCreateParams = Stripe_.Billing.MeterEventAdjustmentCreateParams;
    export type MeterEventAdjustmentResource = Stripe_.Billing.MeterEventAdjustmentResource;
    export type AlertTriggered = Stripe_.Billing.AlertTriggered;
    export type MeterEventSummary = Stripe_.Billing.MeterEventSummary;
    export namespace AlertCreateParams {
      export type UsageThreshold = Stripe_.Billing.AlertCreateParams.UsageThreshold;
      export namespace UsageThreshold {
        export type Filter = Stripe_.Billing.AlertCreateParams.UsageThreshold.Filter;
      }
    }
    export namespace Alert {
      export type Status = Stripe_.Billing.Alert.Status;
      export type UsageThreshold = Stripe_.Billing.Alert.UsageThreshold;
      export namespace UsageThreshold {
        export type Filter = Stripe_.Billing.Alert.UsageThreshold.Filter;
      }
    }
    export namespace CreditBalanceSummaryRetrieveParams {
      export type Filter = Stripe_.Billing.CreditBalanceSummaryRetrieveParams.Filter;
      export namespace Filter {
        export type ApplicabilityScope = Stripe_.Billing.CreditBalanceSummaryRetrieveParams.Filter.ApplicabilityScope;
        export type Type = Stripe_.Billing.CreditBalanceSummaryRetrieveParams.Filter.Type;
        export namespace ApplicabilityScope {
          export type Price = Stripe_.Billing.CreditBalanceSummaryRetrieveParams.Filter.ApplicabilityScope.Price;
        }
      }
    }
    export namespace CreditBalanceSummary {
      export type Balance = Stripe_.Billing.CreditBalanceSummary.Balance;
      export namespace Balance {
        export type AvailableBalance = Stripe_.Billing.CreditBalanceSummary.Balance.AvailableBalance;
        export type LedgerBalance = Stripe_.Billing.CreditBalanceSummary.Balance.LedgerBalance;
        export namespace AvailableBalance {
          export type Monetary = Stripe_.Billing.CreditBalanceSummary.Balance.AvailableBalance.Monetary;
        }
        export namespace LedgerBalance {
          export type Monetary = Stripe_.Billing.CreditBalanceSummary.Balance.LedgerBalance.Monetary;
        }
      }
    }
    export namespace CreditBalanceTransaction {
      export type Credit = Stripe_.Billing.CreditBalanceTransaction.Credit;
      export type Debit = Stripe_.Billing.CreditBalanceTransaction.Debit;
      export type Type = Stripe_.Billing.CreditBalanceTransaction.Type;
      export namespace Credit {
        export type Amount = Stripe_.Billing.CreditBalanceTransaction.Credit.Amount;
        export type CreditsApplicationInvoiceVoided = Stripe_.Billing.CreditBalanceTransaction.Credit.CreditsApplicationInvoiceVoided;
        export type Type = Stripe_.Billing.CreditBalanceTransaction.Credit.Type;
        export namespace Amount {
          export type Monetary = Stripe_.Billing.CreditBalanceTransaction.Credit.Amount.Monetary;
        }
      }
      export namespace Debit {
        export type Amount = Stripe_.Billing.CreditBalanceTransaction.Debit.Amount;
        export type CreditsApplied = Stripe_.Billing.CreditBalanceTransaction.Debit.CreditsApplied;
        export type Type = Stripe_.Billing.CreditBalanceTransaction.Debit.Type;
        export namespace Amount {
          export type Monetary = Stripe_.Billing.CreditBalanceTransaction.Debit.Amount.Monetary;
        }
      }
    }
    export namespace CreditGrantCreateParams {
      export type Amount = Stripe_.Billing.CreditGrantCreateParams.Amount;
      export type ApplicabilityConfig = Stripe_.Billing.CreditGrantCreateParams.ApplicabilityConfig;
      export type Category = Stripe_.Billing.CreditGrantCreateParams.Category;
      export namespace Amount {
        export type Monetary = Stripe_.Billing.CreditGrantCreateParams.Amount.Monetary;
      }
      export namespace ApplicabilityConfig {
        export type Scope = Stripe_.Billing.CreditGrantCreateParams.ApplicabilityConfig.Scope;
        export namespace Scope {
          export type Price = Stripe_.Billing.CreditGrantCreateParams.ApplicabilityConfig.Scope.Price;
        }
      }
    }
    export namespace CreditGrant {
      export type Amount = Stripe_.Billing.CreditGrant.Amount;
      export type ApplicabilityConfig = Stripe_.Billing.CreditGrant.ApplicabilityConfig;
      export type Category = Stripe_.Billing.CreditGrant.Category;
      export namespace Amount {
        export type Monetary = Stripe_.Billing.CreditGrant.Amount.Monetary;
      }
      export namespace ApplicabilityConfig {
        export type Scope = Stripe_.Billing.CreditGrant.ApplicabilityConfig.Scope;
        export namespace Scope {
          export type Price = Stripe_.Billing.CreditGrant.ApplicabilityConfig.Scope.Price;
        }
      }
    }
    export namespace MeterCreateParams {
      export type DefaultAggregation = Stripe_.Billing.MeterCreateParams.DefaultAggregation;
      export type CustomerMapping = Stripe_.Billing.MeterCreateParams.CustomerMapping;
      export type EventTimeWindow = Stripe_.Billing.MeterCreateParams.EventTimeWindow;
      export type ValueSettings = Stripe_.Billing.MeterCreateParams.ValueSettings;
      export namespace DefaultAggregation {
        export type Formula = Stripe_.Billing.MeterCreateParams.DefaultAggregation.Formula;
      }
    }
    export namespace Meter {
      export type CustomerMapping = Stripe_.Billing.Meter.CustomerMapping;
      export type DefaultAggregation = Stripe_.Billing.Meter.DefaultAggregation;
      export type EventTimeWindow = Stripe_.Billing.Meter.EventTimeWindow;
      export type Status = Stripe_.Billing.Meter.Status;
      export type StatusTransitions = Stripe_.Billing.Meter.StatusTransitions;
      export type ValueSettings = Stripe_.Billing.Meter.ValueSettings;
      export namespace DefaultAggregation {
        export type Formula = Stripe_.Billing.Meter.DefaultAggregation.Formula;
      }
    }
    export namespace MeterEventAdjustmentCreateParams {
      export type Cancel = Stripe_.Billing.MeterEventAdjustmentCreateParams.Cancel;
    }
    export namespace MeterEventAdjustment {
      export type Cancel = Stripe_.Billing.MeterEventAdjustment.Cancel;
      export type Status = Stripe_.Billing.MeterEventAdjustment.Status;
    }
  }
  export namespace BillingPortal {
    export type Configuration = Stripe_.BillingPortal.Configuration;
    export type ConfigurationCreateParams = Stripe_.BillingPortal.ConfigurationCreateParams;
    export type ConfigurationRetrieveParams = Stripe_.BillingPortal.ConfigurationRetrieveParams;
    export type ConfigurationUpdateParams = Stripe_.BillingPortal.ConfigurationUpdateParams;
    export type ConfigurationListParams = Stripe_.BillingPortal.ConfigurationListParams;
    export type ConfigurationResource = Stripe_.BillingPortal.ConfigurationResource;
    export type Session = Stripe_.BillingPortal.Session;
    export type SessionCreateParams = Stripe_.BillingPortal.SessionCreateParams;
    export type SessionResource = Stripe_.BillingPortal.SessionResource;
    export namespace ConfigurationCreateParams {
      export type Features = Stripe_.BillingPortal.ConfigurationCreateParams.Features;
      export type BusinessProfile = Stripe_.BillingPortal.ConfigurationCreateParams.BusinessProfile;
      export type LoginPage = Stripe_.BillingPortal.ConfigurationCreateParams.LoginPage;
      export namespace Features {
        export type CustomerUpdate = Stripe_.BillingPortal.ConfigurationCreateParams.Features.CustomerUpdate;
        export type InvoiceHistory = Stripe_.BillingPortal.ConfigurationCreateParams.Features.InvoiceHistory;
        export type PaymentMethodUpdate = Stripe_.BillingPortal.ConfigurationCreateParams.Features.PaymentMethodUpdate;
        export type SubscriptionCancel = Stripe_.BillingPortal.ConfigurationCreateParams.Features.SubscriptionCancel;
        export type SubscriptionUpdate = Stripe_.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate;
        export namespace CustomerUpdate {
          export type AllowedUpdate = Stripe_.BillingPortal.ConfigurationCreateParams.Features.CustomerUpdate.AllowedUpdate;
        }
        export namespace SubscriptionCancel {
          export type CancellationReason = Stripe_.BillingPortal.ConfigurationCreateParams.Features.SubscriptionCancel.CancellationReason;
          export type Mode = Stripe_.BillingPortal.ConfigurationCreateParams.Features.SubscriptionCancel.Mode;
          export type ProrationBehavior = Stripe_.BillingPortal.ConfigurationCreateParams.Features.SubscriptionCancel.ProrationBehavior;
          export namespace CancellationReason {
            export type Option = Stripe_.BillingPortal.ConfigurationCreateParams.Features.SubscriptionCancel.CancellationReason.Option;
          }
        }
        export namespace SubscriptionUpdate {
          export type BillingCycleAnchor = Stripe_.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.BillingCycleAnchor;
          export type DefaultAllowedUpdate = Stripe_.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.DefaultAllowedUpdate;
          export type Product = Stripe_.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.Product;
          export type ProrationBehavior = Stripe_.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.ProrationBehavior;
          export type ScheduleAtPeriodEnd = Stripe_.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.ScheduleAtPeriodEnd;
          export type TrialUpdateBehavior = Stripe_.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.TrialUpdateBehavior;
          export namespace Product {
            export type AdjustableQuantity = Stripe_.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.Product.AdjustableQuantity;
          }
          export namespace ScheduleAtPeriodEnd {
            export type Condition = Stripe_.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.ScheduleAtPeriodEnd.Condition;
            export namespace Condition {
              export type Type = Stripe_.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.ScheduleAtPeriodEnd.Condition.Type;
            }
          }
        }
      }
    }
    export namespace Configuration {
      export type BusinessProfile = Stripe_.BillingPortal.Configuration.BusinessProfile;
      export type Features = Stripe_.BillingPortal.Configuration.Features;
      export type LoginPage = Stripe_.BillingPortal.Configuration.LoginPage;
      export namespace Features {
        export type CustomerUpdate = Stripe_.BillingPortal.Configuration.Features.CustomerUpdate;
        export type InvoiceHistory = Stripe_.BillingPortal.Configuration.Features.InvoiceHistory;
        export type PaymentMethodUpdate = Stripe_.BillingPortal.Configuration.Features.PaymentMethodUpdate;
        export type SubscriptionCancel = Stripe_.BillingPortal.Configuration.Features.SubscriptionCancel;
        export type SubscriptionUpdate = Stripe_.BillingPortal.Configuration.Features.SubscriptionUpdate;
        export namespace CustomerUpdate {
          export type AllowedUpdate = Stripe_.BillingPortal.Configuration.Features.CustomerUpdate.AllowedUpdate;
        }
        export namespace SubscriptionCancel {
          export type CancellationReason = Stripe_.BillingPortal.Configuration.Features.SubscriptionCancel.CancellationReason;
          export type Mode = Stripe_.BillingPortal.Configuration.Features.SubscriptionCancel.Mode;
          export type ProrationBehavior = Stripe_.BillingPortal.Configuration.Features.SubscriptionCancel.ProrationBehavior;
          export namespace CancellationReason {
            export type Option = Stripe_.BillingPortal.Configuration.Features.SubscriptionCancel.CancellationReason.Option;
          }
        }
        export namespace SubscriptionUpdate {
          export type BillingCycleAnchor = Stripe_.BillingPortal.Configuration.Features.SubscriptionUpdate.BillingCycleAnchor;
          export type DefaultAllowedUpdate = Stripe_.BillingPortal.Configuration.Features.SubscriptionUpdate.DefaultAllowedUpdate;
          export type Product = Stripe_.BillingPortal.Configuration.Features.SubscriptionUpdate.Product;
          export type ProrationBehavior = Stripe_.BillingPortal.Configuration.Features.SubscriptionUpdate.ProrationBehavior;
          export type ScheduleAtPeriodEnd = Stripe_.BillingPortal.Configuration.Features.SubscriptionUpdate.ScheduleAtPeriodEnd;
          export type TrialUpdateBehavior = Stripe_.BillingPortal.Configuration.Features.SubscriptionUpdate.TrialUpdateBehavior;
          export namespace Product {
            export type AdjustableQuantity = Stripe_.BillingPortal.Configuration.Features.SubscriptionUpdate.Product.AdjustableQuantity;
          }
          export namespace ScheduleAtPeriodEnd {
            export type Condition = Stripe_.BillingPortal.Configuration.Features.SubscriptionUpdate.ScheduleAtPeriodEnd.Condition;
            export namespace Condition {
              export type Type = Stripe_.BillingPortal.Configuration.Features.SubscriptionUpdate.ScheduleAtPeriodEnd.Condition.Type;
            }
          }
        }
      }
    }
    export namespace SessionCreateParams {
      export type FlowData = Stripe_.BillingPortal.SessionCreateParams.FlowData;
      export type Locale = Stripe_.BillingPortal.SessionCreateParams.Locale;
      export namespace FlowData {
        export type AfterCompletion = Stripe_.BillingPortal.SessionCreateParams.FlowData.AfterCompletion;
        export type SubscriptionCancel = Stripe_.BillingPortal.SessionCreateParams.FlowData.SubscriptionCancel;
        export type SubscriptionUpdate = Stripe_.BillingPortal.SessionCreateParams.FlowData.SubscriptionUpdate;
        export type SubscriptionUpdateConfirm = Stripe_.BillingPortal.SessionCreateParams.FlowData.SubscriptionUpdateConfirm;
        export type Type = Stripe_.BillingPortal.SessionCreateParams.FlowData.Type;
        export namespace AfterCompletion {
          export type HostedConfirmation = Stripe_.BillingPortal.SessionCreateParams.FlowData.AfterCompletion.HostedConfirmation;
          export type Redirect = Stripe_.BillingPortal.SessionCreateParams.FlowData.AfterCompletion.Redirect;
          export type Type = Stripe_.BillingPortal.SessionCreateParams.FlowData.AfterCompletion.Type;
        }
        export namespace SubscriptionCancel {
          export type Retention = Stripe_.BillingPortal.SessionCreateParams.FlowData.SubscriptionCancel.Retention;
          export namespace Retention {
            export type CouponOffer = Stripe_.BillingPortal.SessionCreateParams.FlowData.SubscriptionCancel.Retention.CouponOffer;
          }
        }
        export namespace SubscriptionUpdateConfirm {
          export type Discount = Stripe_.BillingPortal.SessionCreateParams.FlowData.SubscriptionUpdateConfirm.Discount;
          export type Item = Stripe_.BillingPortal.SessionCreateParams.FlowData.SubscriptionUpdateConfirm.Item;
        }
      }
    }
    export namespace Session {
      export type Flow = Stripe_.BillingPortal.Session.Flow;
      export type Locale = Stripe_.BillingPortal.Session.Locale;
      export namespace Flow {
        export type AfterCompletion = Stripe_.BillingPortal.Session.Flow.AfterCompletion;
        export type SubscriptionCancel = Stripe_.BillingPortal.Session.Flow.SubscriptionCancel;
        export type SubscriptionUpdate = Stripe_.BillingPortal.Session.Flow.SubscriptionUpdate;
        export type SubscriptionUpdateConfirm = Stripe_.BillingPortal.Session.Flow.SubscriptionUpdateConfirm;
        export type Type = Stripe_.BillingPortal.Session.Flow.Type;
        export namespace AfterCompletion {
          export type HostedConfirmation = Stripe_.BillingPortal.Session.Flow.AfterCompletion.HostedConfirmation;
          export type Redirect = Stripe_.BillingPortal.Session.Flow.AfterCompletion.Redirect;
          export type Type = Stripe_.BillingPortal.Session.Flow.AfterCompletion.Type;
        }
        export namespace SubscriptionCancel {
          export type Retention = Stripe_.BillingPortal.Session.Flow.SubscriptionCancel.Retention;
          export namespace Retention {
            export type CouponOffer = Stripe_.BillingPortal.Session.Flow.SubscriptionCancel.Retention.CouponOffer;
          }
        }
        export namespace SubscriptionUpdateConfirm {
          export type Discount = Stripe_.BillingPortal.Session.Flow.SubscriptionUpdateConfirm.Discount;
          export type Item = Stripe_.BillingPortal.Session.Flow.SubscriptionUpdateConfirm.Item;
        }
      }
    }
  }
  export namespace Checkout {
    export type Session = Stripe_.Checkout.Session;
    export type SessionCreateParams = Stripe_.Checkout.SessionCreateParams;
    export type SessionRetrieveParams = Stripe_.Checkout.SessionRetrieveParams;
    export type SessionUpdateParams = Stripe_.Checkout.SessionUpdateParams;
    export type SessionListParams = Stripe_.Checkout.SessionListParams;
    export type SessionExpireParams = Stripe_.Checkout.SessionExpireParams;
    export type SessionListLineItemsParams = Stripe_.Checkout.SessionListLineItemsParams;
    export type SessionResource = Stripe_.Checkout.SessionResource;
    export namespace SessionCreateParams {
      export type AdaptivePricing = Stripe_.Checkout.SessionCreateParams.AdaptivePricing;
      export type AfterExpiration = Stripe_.Checkout.SessionCreateParams.AfterExpiration;
      export type AutomaticTax = Stripe_.Checkout.SessionCreateParams.AutomaticTax;
      export type BillingAddressCollection = Stripe_.Checkout.SessionCreateParams.BillingAddressCollection;
      export type BrandingSettings = Stripe_.Checkout.SessionCreateParams.BrandingSettings;
      export type ConsentCollection = Stripe_.Checkout.SessionCreateParams.ConsentCollection;
      export type CustomField = Stripe_.Checkout.SessionCreateParams.CustomField;
      export type CustomText = Stripe_.Checkout.SessionCreateParams.CustomText;
      export type CustomerCreation = Stripe_.Checkout.SessionCreateParams.CustomerCreation;
      export type CustomerUpdate = Stripe_.Checkout.SessionCreateParams.CustomerUpdate;
      export type Discount = Stripe_.Checkout.SessionCreateParams.Discount;
      export type ExcludedPaymentMethodType = Stripe_.Checkout.SessionCreateParams.ExcludedPaymentMethodType;
      export type InvoiceCreation = Stripe_.Checkout.SessionCreateParams.InvoiceCreation;
      export type LineItem = Stripe_.Checkout.SessionCreateParams.LineItem;
      export type Locale = Stripe_.Checkout.SessionCreateParams.Locale;
      export type ManagedPayments = Stripe_.Checkout.SessionCreateParams.ManagedPayments;
      export type Mode = Stripe_.Checkout.SessionCreateParams.Mode;
      export type NameCollection = Stripe_.Checkout.SessionCreateParams.NameCollection;
      export type OptionalItem = Stripe_.Checkout.SessionCreateParams.OptionalItem;
      export type OriginContext = Stripe_.Checkout.SessionCreateParams.OriginContext;
      export type PaymentIntentData = Stripe_.Checkout.SessionCreateParams.PaymentIntentData;
      export type PaymentMethodCollection = Stripe_.Checkout.SessionCreateParams.PaymentMethodCollection;
      export type PaymentMethodData = Stripe_.Checkout.SessionCreateParams.PaymentMethodData;
      export type PaymentMethodOptions = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions;
      export type PaymentMethodType = Stripe_.Checkout.SessionCreateParams.PaymentMethodType;
      export type Permissions = Stripe_.Checkout.SessionCreateParams.Permissions;
      export type PhoneNumberCollection = Stripe_.Checkout.SessionCreateParams.PhoneNumberCollection;
      export type RedirectOnCompletion = Stripe_.Checkout.SessionCreateParams.RedirectOnCompletion;
      export type SavedPaymentMethodOptions = Stripe_.Checkout.SessionCreateParams.SavedPaymentMethodOptions;
      export type SetupIntentData = Stripe_.Checkout.SessionCreateParams.SetupIntentData;
      export type ShippingAddressCollection = Stripe_.Checkout.SessionCreateParams.ShippingAddressCollection;
      export type ShippingOption = Stripe_.Checkout.SessionCreateParams.ShippingOption;
      export type SubmitType = Stripe_.Checkout.SessionCreateParams.SubmitType;
      export type SubscriptionData = Stripe_.Checkout.SessionCreateParams.SubscriptionData;
      export type TaxIdCollection = Stripe_.Checkout.SessionCreateParams.TaxIdCollection;
      export type UiMode = Stripe_.Checkout.SessionCreateParams.UiMode;
      export type WalletOptions = Stripe_.Checkout.SessionCreateParams.WalletOptions;
      export namespace AfterExpiration {
        export type Recovery = Stripe_.Checkout.SessionCreateParams.AfterExpiration.Recovery;
      }
      export namespace AutomaticTax {
        export type Liability = Stripe_.Checkout.SessionCreateParams.AutomaticTax.Liability;
        export namespace Liability {
          export type Type = Stripe_.Checkout.SessionCreateParams.AutomaticTax.Liability.Type;
        }
      }
      export namespace BrandingSettings {
        export type BorderStyle = Stripe_.Checkout.SessionCreateParams.BrandingSettings.BorderStyle;
        export type FontFamily = Stripe_.Checkout.SessionCreateParams.BrandingSettings.FontFamily;
        export type Icon = Stripe_.Checkout.SessionCreateParams.BrandingSettings.Icon;
        export type Logo = Stripe_.Checkout.SessionCreateParams.BrandingSettings.Logo;
        export namespace Icon {
          export type Type = Stripe_.Checkout.SessionCreateParams.BrandingSettings.Icon.Type;
        }
        export namespace Logo {
          export type Type = Stripe_.Checkout.SessionCreateParams.BrandingSettings.Logo.Type;
        }
      }
      export namespace ConsentCollection {
        export type PaymentMethodReuseAgreement = Stripe_.Checkout.SessionCreateParams.ConsentCollection.PaymentMethodReuseAgreement;
        export type Promotions = Stripe_.Checkout.SessionCreateParams.ConsentCollection.Promotions;
        export type TermsOfService = Stripe_.Checkout.SessionCreateParams.ConsentCollection.TermsOfService;
        export namespace PaymentMethodReuseAgreement {
          export type Position = Stripe_.Checkout.SessionCreateParams.ConsentCollection.PaymentMethodReuseAgreement.Position;
        }
      }
      export namespace CustomerUpdate {
        export type Address = Stripe_.Checkout.SessionCreateParams.CustomerUpdate.Address;
        export type Name = Stripe_.Checkout.SessionCreateParams.CustomerUpdate.Name;
        export type Shipping = Stripe_.Checkout.SessionCreateParams.CustomerUpdate.Shipping;
      }
      export namespace CustomField {
        export type Dropdown = Stripe_.Checkout.SessionCreateParams.CustomField.Dropdown;
        export type Label = Stripe_.Checkout.SessionCreateParams.CustomField.Label;
        export type Numeric = Stripe_.Checkout.SessionCreateParams.CustomField.Numeric;
        export type Text = Stripe_.Checkout.SessionCreateParams.CustomField.Text;
        export type Type = Stripe_.Checkout.SessionCreateParams.CustomField.Type;
        export namespace Dropdown {
          export type Option = Stripe_.Checkout.SessionCreateParams.CustomField.Dropdown.Option;
        }
      }
      export namespace CustomText {
        export type AfterSubmit = Stripe_.Checkout.SessionCreateParams.CustomText.AfterSubmit;
        export type ShippingAddress = Stripe_.Checkout.SessionCreateParams.CustomText.ShippingAddress;
        export type Submit = Stripe_.Checkout.SessionCreateParams.CustomText.Submit;
        export type TermsOfServiceAcceptance = Stripe_.Checkout.SessionCreateParams.CustomText.TermsOfServiceAcceptance;
      }
      export namespace InvoiceCreation {
        export type InvoiceData = Stripe_.Checkout.SessionCreateParams.InvoiceCreation.InvoiceData;
        export namespace InvoiceData {
          export type CustomField = Stripe_.Checkout.SessionCreateParams.InvoiceCreation.InvoiceData.CustomField;
          export type Issuer = Stripe_.Checkout.SessionCreateParams.InvoiceCreation.InvoiceData.Issuer;
          export type RenderingOptions = Stripe_.Checkout.SessionCreateParams.InvoiceCreation.InvoiceData.RenderingOptions;
          export namespace Issuer {
            export type Type = Stripe_.Checkout.SessionCreateParams.InvoiceCreation.InvoiceData.Issuer.Type;
          }
          export namespace RenderingOptions {
            export type AmountTaxDisplay = Stripe_.Checkout.SessionCreateParams.InvoiceCreation.InvoiceData.RenderingOptions.AmountTaxDisplay;
          }
        }
      }
      export namespace LineItem {
        export type AdjustableQuantity = Stripe_.Checkout.SessionCreateParams.LineItem.AdjustableQuantity;
        export type PriceData = Stripe_.Checkout.SessionCreateParams.LineItem.PriceData;
        export namespace PriceData {
          export type ProductData = Stripe_.Checkout.SessionCreateParams.LineItem.PriceData.ProductData;
          export type Recurring = Stripe_.Checkout.SessionCreateParams.LineItem.PriceData.Recurring;
          export type TaxBehavior = Stripe_.Checkout.SessionCreateParams.LineItem.PriceData.TaxBehavior;
          export namespace Recurring {
            export type Interval = Stripe_.Checkout.SessionCreateParams.LineItem.PriceData.Recurring.Interval;
          }
        }
      }
      export namespace NameCollection {
        export type Business = Stripe_.Checkout.SessionCreateParams.NameCollection.Business;
        export type Individual = Stripe_.Checkout.SessionCreateParams.NameCollection.Individual;
      }
      export namespace OptionalItem {
        export type AdjustableQuantity = Stripe_.Checkout.SessionCreateParams.OptionalItem.AdjustableQuantity;
      }
      export namespace PaymentIntentData {
        export type CaptureMethod = Stripe_.Checkout.SessionCreateParams.PaymentIntentData.CaptureMethod;
        export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentIntentData.SetupFutureUsage;
        export type Shipping = Stripe_.Checkout.SessionCreateParams.PaymentIntentData.Shipping;
        export type TransferData = Stripe_.Checkout.SessionCreateParams.PaymentIntentData.TransferData;
      }
      export namespace PaymentMethodData {
        export type AllowRedisplay = Stripe_.Checkout.SessionCreateParams.PaymentMethodData.AllowRedisplay;
      }
      export namespace PaymentMethodOptions {
        export type AcssDebit = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.AcssDebit;
        export type Affirm = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Affirm;
        export type AfterpayClearpay = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.AfterpayClearpay;
        export type Alipay = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Alipay;
        export type Alma = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Alma;
        export type AmazonPay = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.AmazonPay;
        export type AuBecsDebit = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.AuBecsDebit;
        export type BacsDebit = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.BacsDebit;
        export type Bancontact = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Bancontact;
        export type Billie = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Billie;
        export type Boleto = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Boleto;
        export type Card = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Card;
        export type Cashapp = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Cashapp;
        export type Crypto = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Crypto;
        export type CustomerBalance = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.CustomerBalance;
        export type DemoPay = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.DemoPay;
        export type Eps = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Eps;
        export type Fpx = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Fpx;
        export type Giropay = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Giropay;
        export type Grabpay = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Grabpay;
        export type Ideal = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Ideal;
        export type KakaoPay = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.KakaoPay;
        export type Klarna = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Klarna;
        export type Konbini = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Konbini;
        export type KrCard = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.KrCard;
        export type Link = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Link;
        export type Mobilepay = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Mobilepay;
        export type Multibanco = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Multibanco;
        export type NaverPay = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.NaverPay;
        export type Oxxo = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Oxxo;
        export type P24 = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.P24;
        export type PayByBank = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.PayByBank;
        export type Payco = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Payco;
        export type Paynow = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Paynow;
        export type Paypal = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Paypal;
        export type Payto = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Payto;
        export type Pix = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Pix;
        export type RevolutPay = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.RevolutPay;
        export type SamsungPay = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.SamsungPay;
        export type Satispay = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Satispay;
        export type Scalapay = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Scalapay;
        export type SepaDebit = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.SepaDebit;
        export type Sofort = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Sofort;
        export type Sunbit = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Sunbit;
        export type Swish = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Swish;
        export type Twint = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Twint;
        export type Upi = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Upi;
        export type UsBankAccount = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.UsBankAccount;
        export type WechatPay = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.WechatPay;
        export namespace AcssDebit {
          export type Currency = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.AcssDebit.Currency;
          export type MandateOptions = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions;
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.AcssDebit.SetupFutureUsage;
          export type VerificationMethod = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.AcssDebit.VerificationMethod;
          export namespace MandateOptions {
            export type DefaultFor = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions.DefaultFor;
            export type PaymentSchedule = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
            export type TransactionType = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
          }
        }
        export namespace AmazonPay {
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.AmazonPay.SetupFutureUsage;
        }
        export namespace BacsDebit {
          export type MandateOptions = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.BacsDebit.MandateOptions;
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.BacsDebit.SetupFutureUsage;
        }
        export namespace Boleto {
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Boleto.SetupFutureUsage;
        }
        export namespace Card {
          export type Installments = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Card.Installments;
          export type RequestExtendedAuthorization = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Card.RequestExtendedAuthorization;
          export type RequestIncrementalAuthorization = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Card.RequestIncrementalAuthorization;
          export type RequestMulticapture = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Card.RequestMulticapture;
          export type RequestOvercapture = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Card.RequestOvercapture;
          export type RequestThreeDSecure = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Card.RequestThreeDSecure;
          export type Restrictions = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Card.Restrictions;
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Card.SetupFutureUsage;
          export namespace Restrictions {
            export type BrandsBlocked = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Card.Restrictions.BrandsBlocked;
          }
        }
        export namespace Cashapp {
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Cashapp.SetupFutureUsage;
        }
        export namespace CustomerBalance {
          export type BankTransfer = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.CustomerBalance.BankTransfer;
          export namespace BankTransfer {
            export type EuBankTransfer = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
            export type RequestedAddressType = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.RequestedAddressType;
            export type Type = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.Type;
          }
        }
        export namespace DemoPay {
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.DemoPay.SetupFutureUsage;
        }
        export namespace KakaoPay {
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.KakaoPay.SetupFutureUsage;
        }
        export namespace Klarna {
          export type Subscription = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Klarna.Subscription;
          export namespace Subscription {
            export type Interval = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Klarna.Subscription.Interval;
            export type NextBilling = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Klarna.Subscription.NextBilling;
          }
        }
        export namespace KrCard {
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.KrCard.SetupFutureUsage;
        }
        export namespace Link {
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Link.SetupFutureUsage;
        }
        export namespace NaverPay {
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.NaverPay.SetupFutureUsage;
        }
        export namespace Paypal {
          export type PreferredLocale = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Paypal.PreferredLocale;
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Paypal.SetupFutureUsage;
        }
        export namespace Payto {
          export type MandateOptions = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Payto.MandateOptions;
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Payto.SetupFutureUsage;
          export namespace MandateOptions {
            export type AmountType = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Payto.MandateOptions.AmountType;
            export type PaymentSchedule = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
            export type Purpose = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Payto.MandateOptions.Purpose;
          }
        }
        export namespace Pix {
          export type AmountIncludesIof = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Pix.AmountIncludesIof;
          export type MandateOptions = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Pix.MandateOptions;
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Pix.SetupFutureUsage;
          export namespace MandateOptions {
            export type AmountIncludesIof = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
            export type AmountType = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Pix.MandateOptions.AmountType;
            export type PaymentSchedule = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
          }
        }
        export namespace RevolutPay {
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.RevolutPay.SetupFutureUsage;
        }
        export namespace SepaDebit {
          export type MandateOptions = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.SepaDebit.MandateOptions;
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.SepaDebit.SetupFutureUsage;
        }
        export namespace Twint {
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Twint.SetupFutureUsage;
        }
        export namespace Upi {
          export type MandateOptions = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Upi.MandateOptions;
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Upi.SetupFutureUsage;
          export namespace MandateOptions {
            export type AmountType = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.Upi.MandateOptions.AmountType;
          }
        }
        export namespace UsBankAccount {
          export type FinancialConnections = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections;
          export type SetupFutureUsage = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.UsBankAccount.SetupFutureUsage;
          export type VerificationMethod = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.UsBankAccount.VerificationMethod;
          export namespace FinancialConnections {
            export type Permission = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
            export type Prefetch = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          }
        }
        export namespace WechatPay {
          export type Client = Stripe_.Checkout.SessionCreateParams.PaymentMethodOptions.WechatPay.Client;
        }
      }
      export namespace Permissions {
        export type UpdateShippingDetails = Stripe_.Checkout.SessionCreateParams.Permissions.UpdateShippingDetails;
      }
      export namespace SavedPaymentMethodOptions {
        export type AllowRedisplayFilter = Stripe_.Checkout.SessionCreateParams.SavedPaymentMethodOptions.AllowRedisplayFilter;
        export type PaymentMethodRemove = Stripe_.Checkout.SessionCreateParams.SavedPaymentMethodOptions.PaymentMethodRemove;
        export type PaymentMethodSave = Stripe_.Checkout.SessionCreateParams.SavedPaymentMethodOptions.PaymentMethodSave;
      }
      export namespace ShippingAddressCollection {
        export type AllowedCountry = Stripe_.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry;
      }
      export namespace ShippingOption {
        export type ShippingRateData = Stripe_.Checkout.SessionCreateParams.ShippingOption.ShippingRateData;
        export namespace ShippingRateData {
          export type DeliveryEstimate = Stripe_.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.DeliveryEstimate;
          export type FixedAmount = Stripe_.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.FixedAmount;
          export type TaxBehavior = Stripe_.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.TaxBehavior;
          export namespace DeliveryEstimate {
            export type Maximum = Stripe_.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.DeliveryEstimate.Maximum;
            export type Minimum = Stripe_.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.DeliveryEstimate.Minimum;
            export namespace Maximum {
              export type Unit = Stripe_.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.DeliveryEstimate.Maximum.Unit;
            }
            export namespace Minimum {
              export type Unit = Stripe_.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.DeliveryEstimate.Minimum.Unit;
            }
          }
          export namespace FixedAmount {
            export type CurrencyOptions = Stripe_.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.FixedAmount.CurrencyOptions;
            export namespace CurrencyOptions {
              export type TaxBehavior = Stripe_.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.FixedAmount.CurrencyOptions.TaxBehavior;
            }
          }
        }
      }
      export namespace SubscriptionData {
        export type BillingCycleAnchorConfig = Stripe_.Checkout.SessionCreateParams.SubscriptionData.BillingCycleAnchorConfig;
        export type BillingMode = Stripe_.Checkout.SessionCreateParams.SubscriptionData.BillingMode;
        export type InvoiceSettings = Stripe_.Checkout.SessionCreateParams.SubscriptionData.InvoiceSettings;
        export type PendingInvoiceItemInterval = Stripe_.Checkout.SessionCreateParams.SubscriptionData.PendingInvoiceItemInterval;
        export type ProrationBehavior = Stripe_.Checkout.SessionCreateParams.SubscriptionData.ProrationBehavior;
        export type TransferData = Stripe_.Checkout.SessionCreateParams.SubscriptionData.TransferData;
        export type TrialSettings = Stripe_.Checkout.SessionCreateParams.SubscriptionData.TrialSettings;
        export namespace BillingMode {
          export type Flexible = Stripe_.Checkout.SessionCreateParams.SubscriptionData.BillingMode.Flexible;
          export type Type = Stripe_.Checkout.SessionCreateParams.SubscriptionData.BillingMode.Type;
          export namespace Flexible {
            export type ProrationDiscounts = Stripe_.Checkout.SessionCreateParams.SubscriptionData.BillingMode.Flexible.ProrationDiscounts;
          }
        }
        export namespace InvoiceSettings {
          export type Issuer = Stripe_.Checkout.SessionCreateParams.SubscriptionData.InvoiceSettings.Issuer;
          export namespace Issuer {
            export type Type = Stripe_.Checkout.SessionCreateParams.SubscriptionData.InvoiceSettings.Issuer.Type;
          }
        }
        export namespace PendingInvoiceItemInterval {
          export type Interval = Stripe_.Checkout.SessionCreateParams.SubscriptionData.PendingInvoiceItemInterval.Interval;
        }
        export namespace TrialSettings {
          export type EndBehavior = Stripe_.Checkout.SessionCreateParams.SubscriptionData.TrialSettings.EndBehavior;
          export namespace EndBehavior {
            export type MissingPaymentMethod = Stripe_.Checkout.SessionCreateParams.SubscriptionData.TrialSettings.EndBehavior.MissingPaymentMethod;
          }
        }
      }
      export namespace TaxIdCollection {
        export type Required = Stripe_.Checkout.SessionCreateParams.TaxIdCollection.Required;
      }
      export namespace WalletOptions {
        export type Link = Stripe_.Checkout.SessionCreateParams.WalletOptions.Link;
        export namespace Link {
          export type Display = Stripe_.Checkout.SessionCreateParams.WalletOptions.Link.Display;
        }
      }
    }
    export namespace Session {
      export type AdaptivePricing = Stripe_.Checkout.Session.AdaptivePricing;
      export type AfterExpiration = Stripe_.Checkout.Session.AfterExpiration;
      export type AutomaticTax = Stripe_.Checkout.Session.AutomaticTax;
      export type BillingAddressCollection = Stripe_.Checkout.Session.BillingAddressCollection;
      export type BrandingSettings = Stripe_.Checkout.Session.BrandingSettings;
      export type CollectedInformation = Stripe_.Checkout.Session.CollectedInformation;
      export type Consent = Stripe_.Checkout.Session.Consent;
      export type ConsentCollection = Stripe_.Checkout.Session.ConsentCollection;
      export type CurrencyConversion = Stripe_.Checkout.Session.CurrencyConversion;
      export type CustomField = Stripe_.Checkout.Session.CustomField;
      export type CustomText = Stripe_.Checkout.Session.CustomText;
      export type CustomerCreation = Stripe_.Checkout.Session.CustomerCreation;
      export type CustomerDetails = Stripe_.Checkout.Session.CustomerDetails;
      export type Discount = Stripe_.Checkout.Session.Discount;
      export type InvoiceCreation = Stripe_.Checkout.Session.InvoiceCreation;
      export type Locale = Stripe_.Checkout.Session.Locale;
      export type ManagedPayments = Stripe_.Checkout.Session.ManagedPayments;
      export type Mode = Stripe_.Checkout.Session.Mode;
      export type NameCollection = Stripe_.Checkout.Session.NameCollection;
      export type OptionalItem = Stripe_.Checkout.Session.OptionalItem;
      export type OriginContext = Stripe_.Checkout.Session.OriginContext;
      export type PaymentMethodCollection = Stripe_.Checkout.Session.PaymentMethodCollection;
      export type PaymentMethodConfigurationDetails = Stripe_.Checkout.Session.PaymentMethodConfigurationDetails;
      export type PaymentMethodOptions = Stripe_.Checkout.Session.PaymentMethodOptions;
      export type PaymentStatus = Stripe_.Checkout.Session.PaymentStatus;
      export type Permissions = Stripe_.Checkout.Session.Permissions;
      export type PhoneNumberCollection = Stripe_.Checkout.Session.PhoneNumberCollection;
      export type PresentmentDetails = Stripe_.Checkout.Session.PresentmentDetails;
      export type RedirectOnCompletion = Stripe_.Checkout.Session.RedirectOnCompletion;
      export type SavedPaymentMethodOptions = Stripe_.Checkout.Session.SavedPaymentMethodOptions;
      export type ShippingAddressCollection = Stripe_.Checkout.Session.ShippingAddressCollection;
      export type ShippingCost = Stripe_.Checkout.Session.ShippingCost;
      export type ShippingOption = Stripe_.Checkout.Session.ShippingOption;
      export type Status = Stripe_.Checkout.Session.Status;
      export type SubmitType = Stripe_.Checkout.Session.SubmitType;
      export type TaxIdCollection = Stripe_.Checkout.Session.TaxIdCollection;
      export type TotalDetails = Stripe_.Checkout.Session.TotalDetails;
      export type UiMode = Stripe_.Checkout.Session.UiMode;
      export type WalletOptions = Stripe_.Checkout.Session.WalletOptions;
      export namespace AfterExpiration {
        export type Recovery = Stripe_.Checkout.Session.AfterExpiration.Recovery;
      }
      export namespace AutomaticTax {
        export type Liability = Stripe_.Checkout.Session.AutomaticTax.Liability;
        export type Status = Stripe_.Checkout.Session.AutomaticTax.Status;
        export namespace Liability {
          export type Type = Stripe_.Checkout.Session.AutomaticTax.Liability.Type;
        }
      }
      export namespace BrandingSettings {
        export type BorderStyle = Stripe_.Checkout.Session.BrandingSettings.BorderStyle;
        export type Icon = Stripe_.Checkout.Session.BrandingSettings.Icon;
        export type Logo = Stripe_.Checkout.Session.BrandingSettings.Logo;
        export namespace Icon {
          export type Type = Stripe_.Checkout.Session.BrandingSettings.Icon.Type;
        }
        export namespace Logo {
          export type Type = Stripe_.Checkout.Session.BrandingSettings.Logo.Type;
        }
      }
      export namespace CollectedInformation {
        export type ShippingDetails = Stripe_.Checkout.Session.CollectedInformation.ShippingDetails;
      }
      export namespace Consent {
        export type Promotions = Stripe_.Checkout.Session.Consent.Promotions;
      }
      export namespace ConsentCollection {
        export type PaymentMethodReuseAgreement = Stripe_.Checkout.Session.ConsentCollection.PaymentMethodReuseAgreement;
        export type Promotions = Stripe_.Checkout.Session.ConsentCollection.Promotions;
        export type TermsOfService = Stripe_.Checkout.Session.ConsentCollection.TermsOfService;
        export namespace PaymentMethodReuseAgreement {
          export type Position = Stripe_.Checkout.Session.ConsentCollection.PaymentMethodReuseAgreement.Position;
        }
      }
      export namespace CustomerDetails {
        export type TaxExempt = Stripe_.Checkout.Session.CustomerDetails.TaxExempt;
        export type TaxId = Stripe_.Checkout.Session.CustomerDetails.TaxId;
        export namespace TaxId {
          export type Type = Stripe_.Checkout.Session.CustomerDetails.TaxId.Type;
        }
      }
      export namespace CustomField {
        export type Dropdown = Stripe_.Checkout.Session.CustomField.Dropdown;
        export type Label = Stripe_.Checkout.Session.CustomField.Label;
        export type Numeric = Stripe_.Checkout.Session.CustomField.Numeric;
        export type Text = Stripe_.Checkout.Session.CustomField.Text;
        export type Type = Stripe_.Checkout.Session.CustomField.Type;
        export namespace Dropdown {
          export type Option = Stripe_.Checkout.Session.CustomField.Dropdown.Option;
        }
      }
      export namespace CustomText {
        export type AfterSubmit = Stripe_.Checkout.Session.CustomText.AfterSubmit;
        export type ShippingAddress = Stripe_.Checkout.Session.CustomText.ShippingAddress;
        export type Submit = Stripe_.Checkout.Session.CustomText.Submit;
        export type TermsOfServiceAcceptance = Stripe_.Checkout.Session.CustomText.TermsOfServiceAcceptance;
      }
      export namespace InvoiceCreation {
        export type InvoiceData = Stripe_.Checkout.Session.InvoiceCreation.InvoiceData;
        export namespace InvoiceData {
          export type CustomField = Stripe_.Checkout.Session.InvoiceCreation.InvoiceData.CustomField;
          export type Issuer = Stripe_.Checkout.Session.InvoiceCreation.InvoiceData.Issuer;
          export type RenderingOptions = Stripe_.Checkout.Session.InvoiceCreation.InvoiceData.RenderingOptions;
          export namespace Issuer {
            export type Type = Stripe_.Checkout.Session.InvoiceCreation.InvoiceData.Issuer.Type;
          }
        }
      }
      export namespace NameCollection {
        export type Business = Stripe_.Checkout.Session.NameCollection.Business;
        export type Individual = Stripe_.Checkout.Session.NameCollection.Individual;
      }
      export namespace OptionalItem {
        export type AdjustableQuantity = Stripe_.Checkout.Session.OptionalItem.AdjustableQuantity;
      }
      export namespace PaymentMethodOptions {
        export type AcssDebit = Stripe_.Checkout.Session.PaymentMethodOptions.AcssDebit;
        export type Affirm = Stripe_.Checkout.Session.PaymentMethodOptions.Affirm;
        export type AfterpayClearpay = Stripe_.Checkout.Session.PaymentMethodOptions.AfterpayClearpay;
        export type Alipay = Stripe_.Checkout.Session.PaymentMethodOptions.Alipay;
        export type Alma = Stripe_.Checkout.Session.PaymentMethodOptions.Alma;
        export type AmazonPay = Stripe_.Checkout.Session.PaymentMethodOptions.AmazonPay;
        export type AuBecsDebit = Stripe_.Checkout.Session.PaymentMethodOptions.AuBecsDebit;
        export type BacsDebit = Stripe_.Checkout.Session.PaymentMethodOptions.BacsDebit;
        export type Bancontact = Stripe_.Checkout.Session.PaymentMethodOptions.Bancontact;
        export type Billie = Stripe_.Checkout.Session.PaymentMethodOptions.Billie;
        export type Boleto = Stripe_.Checkout.Session.PaymentMethodOptions.Boleto;
        export type Card = Stripe_.Checkout.Session.PaymentMethodOptions.Card;
        export type Cashapp = Stripe_.Checkout.Session.PaymentMethodOptions.Cashapp;
        export type CustomerBalance = Stripe_.Checkout.Session.PaymentMethodOptions.CustomerBalance;
        export type Eps = Stripe_.Checkout.Session.PaymentMethodOptions.Eps;
        export type Fpx = Stripe_.Checkout.Session.PaymentMethodOptions.Fpx;
        export type Giropay = Stripe_.Checkout.Session.PaymentMethodOptions.Giropay;
        export type Grabpay = Stripe_.Checkout.Session.PaymentMethodOptions.Grabpay;
        export type Ideal = Stripe_.Checkout.Session.PaymentMethodOptions.Ideal;
        export type KakaoPay = Stripe_.Checkout.Session.PaymentMethodOptions.KakaoPay;
        export type Klarna = Stripe_.Checkout.Session.PaymentMethodOptions.Klarna;
        export type Konbini = Stripe_.Checkout.Session.PaymentMethodOptions.Konbini;
        export type KrCard = Stripe_.Checkout.Session.PaymentMethodOptions.KrCard;
        export type Link = Stripe_.Checkout.Session.PaymentMethodOptions.Link;
        export type Mobilepay = Stripe_.Checkout.Session.PaymentMethodOptions.Mobilepay;
        export type Multibanco = Stripe_.Checkout.Session.PaymentMethodOptions.Multibanco;
        export type NaverPay = Stripe_.Checkout.Session.PaymentMethodOptions.NaverPay;
        export type Oxxo = Stripe_.Checkout.Session.PaymentMethodOptions.Oxxo;
        export type P24 = Stripe_.Checkout.Session.PaymentMethodOptions.P24;
        export type Payco = Stripe_.Checkout.Session.PaymentMethodOptions.Payco;
        export type Paynow = Stripe_.Checkout.Session.PaymentMethodOptions.Paynow;
        export type Paypal = Stripe_.Checkout.Session.PaymentMethodOptions.Paypal;
        export type Payto = Stripe_.Checkout.Session.PaymentMethodOptions.Payto;
        export type Pix = Stripe_.Checkout.Session.PaymentMethodOptions.Pix;
        export type RevolutPay = Stripe_.Checkout.Session.PaymentMethodOptions.RevolutPay;
        export type SamsungPay = Stripe_.Checkout.Session.PaymentMethodOptions.SamsungPay;
        export type Satispay = Stripe_.Checkout.Session.PaymentMethodOptions.Satispay;
        export type Scalapay = Stripe_.Checkout.Session.PaymentMethodOptions.Scalapay;
        export type SepaDebit = Stripe_.Checkout.Session.PaymentMethodOptions.SepaDebit;
        export type Sofort = Stripe_.Checkout.Session.PaymentMethodOptions.Sofort;
        export type Sunbit = Stripe_.Checkout.Session.PaymentMethodOptions.Sunbit;
        export type Swish = Stripe_.Checkout.Session.PaymentMethodOptions.Swish;
        export type Twint = Stripe_.Checkout.Session.PaymentMethodOptions.Twint;
        export type Upi = Stripe_.Checkout.Session.PaymentMethodOptions.Upi;
        export type UsBankAccount = Stripe_.Checkout.Session.PaymentMethodOptions.UsBankAccount;
        export type WechatPay = Stripe_.Checkout.Session.PaymentMethodOptions.WechatPay;
        export namespace AcssDebit {
          export type Currency = Stripe_.Checkout.Session.PaymentMethodOptions.AcssDebit.Currency;
          export type MandateOptions = Stripe_.Checkout.Session.PaymentMethodOptions.AcssDebit.MandateOptions;
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.AcssDebit.SetupFutureUsage;
          export type VerificationMethod = Stripe_.Checkout.Session.PaymentMethodOptions.AcssDebit.VerificationMethod;
          export namespace MandateOptions {
            export type DefaultFor = Stripe_.Checkout.Session.PaymentMethodOptions.AcssDebit.MandateOptions.DefaultFor;
            export type PaymentSchedule = Stripe_.Checkout.Session.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
            export type TransactionType = Stripe_.Checkout.Session.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
          }
        }
        export namespace AmazonPay {
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.AmazonPay.SetupFutureUsage;
        }
        export namespace BacsDebit {
          export type MandateOptions = Stripe_.Checkout.Session.PaymentMethodOptions.BacsDebit.MandateOptions;
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.BacsDebit.SetupFutureUsage;
        }
        export namespace Boleto {
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.Boleto.SetupFutureUsage;
        }
        export namespace Card {
          export type Installments = Stripe_.Checkout.Session.PaymentMethodOptions.Card.Installments;
          export type RequestExtendedAuthorization = Stripe_.Checkout.Session.PaymentMethodOptions.Card.RequestExtendedAuthorization;
          export type RequestIncrementalAuthorization = Stripe_.Checkout.Session.PaymentMethodOptions.Card.RequestIncrementalAuthorization;
          export type RequestMulticapture = Stripe_.Checkout.Session.PaymentMethodOptions.Card.RequestMulticapture;
          export type RequestOvercapture = Stripe_.Checkout.Session.PaymentMethodOptions.Card.RequestOvercapture;
          export type RequestThreeDSecure = Stripe_.Checkout.Session.PaymentMethodOptions.Card.RequestThreeDSecure;
          export type Restrictions = Stripe_.Checkout.Session.PaymentMethodOptions.Card.Restrictions;
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.Card.SetupFutureUsage;
          export namespace Restrictions {
            export type BrandsBlocked = Stripe_.Checkout.Session.PaymentMethodOptions.Card.Restrictions.BrandsBlocked;
          }
        }
        export namespace CustomerBalance {
          export type BankTransfer = Stripe_.Checkout.Session.PaymentMethodOptions.CustomerBalance.BankTransfer;
          export namespace BankTransfer {
            export type EuBankTransfer = Stripe_.Checkout.Session.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
            export type RequestedAddressType = Stripe_.Checkout.Session.PaymentMethodOptions.CustomerBalance.BankTransfer.RequestedAddressType;
            export type Type = Stripe_.Checkout.Session.PaymentMethodOptions.CustomerBalance.BankTransfer.Type;
            export namespace EuBankTransfer {
              export type Country = Stripe_.Checkout.Session.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer.Country;
            }
          }
        }
        export namespace KakaoPay {
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.KakaoPay.SetupFutureUsage;
        }
        export namespace Klarna {
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.Klarna.SetupFutureUsage;
        }
        export namespace KrCard {
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.KrCard.SetupFutureUsage;
        }
        export namespace Link {
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.Link.SetupFutureUsage;
        }
        export namespace NaverPay {
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.NaverPay.SetupFutureUsage;
        }
        export namespace Paypal {
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.Paypal.SetupFutureUsage;
        }
        export namespace Payto {
          export type MandateOptions = Stripe_.Checkout.Session.PaymentMethodOptions.Payto.MandateOptions;
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.Payto.SetupFutureUsage;
          export namespace MandateOptions {
            export type AmountType = Stripe_.Checkout.Session.PaymentMethodOptions.Payto.MandateOptions.AmountType;
            export type PaymentSchedule = Stripe_.Checkout.Session.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
            export type Purpose = Stripe_.Checkout.Session.PaymentMethodOptions.Payto.MandateOptions.Purpose;
          }
        }
        export namespace Pix {
          export type AmountIncludesIof = Stripe_.Checkout.Session.PaymentMethodOptions.Pix.AmountIncludesIof;
          export type MandateOptions = Stripe_.Checkout.Session.PaymentMethodOptions.Pix.MandateOptions;
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.Pix.SetupFutureUsage;
          export namespace MandateOptions {
            export type AmountIncludesIof = Stripe_.Checkout.Session.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
            export type AmountType = Stripe_.Checkout.Session.PaymentMethodOptions.Pix.MandateOptions.AmountType;
            export type PaymentSchedule = Stripe_.Checkout.Session.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
          }
        }
        export namespace RevolutPay {
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.RevolutPay.SetupFutureUsage;
        }
        export namespace SepaDebit {
          export type MandateOptions = Stripe_.Checkout.Session.PaymentMethodOptions.SepaDebit.MandateOptions;
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.SepaDebit.SetupFutureUsage;
        }
        export namespace Twint {
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.Twint.SetupFutureUsage;
        }
        export namespace Upi {
          export type MandateOptions = Stripe_.Checkout.Session.PaymentMethodOptions.Upi.MandateOptions;
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.Upi.SetupFutureUsage;
          export namespace MandateOptions {
            export type AmountType = Stripe_.Checkout.Session.PaymentMethodOptions.Upi.MandateOptions.AmountType;
          }
        }
        export namespace UsBankAccount {
          export type FinancialConnections = Stripe_.Checkout.Session.PaymentMethodOptions.UsBankAccount.FinancialConnections;
          export type SetupFutureUsage = Stripe_.Checkout.Session.PaymentMethodOptions.UsBankAccount.SetupFutureUsage;
          export type VerificationMethod = Stripe_.Checkout.Session.PaymentMethodOptions.UsBankAccount.VerificationMethod;
          export namespace FinancialConnections {
            export type Filters = Stripe_.Checkout.Session.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
            export type Permission = Stripe_.Checkout.Session.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
            export type Prefetch = Stripe_.Checkout.Session.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
            export namespace Filters {
              export type AccountSubcategory = Stripe_.Checkout.Session.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
            }
          }
        }
        export namespace WechatPay {
          export type Client = Stripe_.Checkout.Session.PaymentMethodOptions.WechatPay.Client;
        }
      }
      export namespace Permissions {
        export type UpdateShippingDetails = Stripe_.Checkout.Session.Permissions.UpdateShippingDetails;
      }
      export namespace SavedPaymentMethodOptions {
        export type AllowRedisplayFilter = Stripe_.Checkout.Session.SavedPaymentMethodOptions.AllowRedisplayFilter;
        export type PaymentMethodRemove = Stripe_.Checkout.Session.SavedPaymentMethodOptions.PaymentMethodRemove;
        export type PaymentMethodSave = Stripe_.Checkout.Session.SavedPaymentMethodOptions.PaymentMethodSave;
      }
      export namespace ShippingAddressCollection {
        export type AllowedCountry = Stripe_.Checkout.Session.ShippingAddressCollection.AllowedCountry;
      }
      export namespace ShippingCost {
        export type Tax = Stripe_.Checkout.Session.ShippingCost.Tax;
        export namespace Tax {
          export type TaxabilityReason = Stripe_.Checkout.Session.ShippingCost.Tax.TaxabilityReason;
        }
      }
      export namespace TaxIdCollection {
        export type Required = Stripe_.Checkout.Session.TaxIdCollection.Required;
      }
      export namespace TotalDetails {
        export type Breakdown = Stripe_.Checkout.Session.TotalDetails.Breakdown;
        export namespace Breakdown {
          export type Discount = Stripe_.Checkout.Session.TotalDetails.Breakdown.Discount;
          export type Tax = Stripe_.Checkout.Session.TotalDetails.Breakdown.Tax;
          export namespace Tax {
            export type TaxabilityReason = Stripe_.Checkout.Session.TotalDetails.Breakdown.Tax.TaxabilityReason;
          }
        }
      }
      export namespace WalletOptions {
        export type Link = Stripe_.Checkout.Session.WalletOptions.Link;
        export namespace Link {
          export type Display = Stripe_.Checkout.Session.WalletOptions.Link.Display;
        }
      }
    }
  }
  export namespace Climate {
    export type Order = Stripe_.Climate.Order;
    export type OrderCreateParams = Stripe_.Climate.OrderCreateParams;
    export type OrderRetrieveParams = Stripe_.Climate.OrderRetrieveParams;
    export type OrderUpdateParams = Stripe_.Climate.OrderUpdateParams;
    export type OrderListParams = Stripe_.Climate.OrderListParams;
    export type OrderCancelParams = Stripe_.Climate.OrderCancelParams;
    export type OrderResource = Stripe_.Climate.OrderResource;
    export type Product = Stripe_.Climate.Product;
    export type ProductRetrieveParams = Stripe_.Climate.ProductRetrieveParams;
    export type ProductListParams = Stripe_.Climate.ProductListParams;
    export type ProductResource = Stripe_.Climate.ProductResource;
    export type Supplier = Stripe_.Climate.Supplier;
    export type SupplierRetrieveParams = Stripe_.Climate.SupplierRetrieveParams;
    export type SupplierListParams = Stripe_.Climate.SupplierListParams;
    export type SupplierResource = Stripe_.Climate.SupplierResource;
    export namespace OrderCreateParams {
      export type Beneficiary = Stripe_.Climate.OrderCreateParams.Beneficiary;
    }
    export namespace Order {
      export type Beneficiary = Stripe_.Climate.Order.Beneficiary;
      export type CancellationReason = Stripe_.Climate.Order.CancellationReason;
      export type DeliveryDetail = Stripe_.Climate.Order.DeliveryDetail;
      export type Status = Stripe_.Climate.Order.Status;
      export namespace DeliveryDetail {
        export type Location = Stripe_.Climate.Order.DeliveryDetail.Location;
      }
    }
    export namespace Product {
      export type CurrentPricesPerMetricTon = Stripe_.Climate.Product.CurrentPricesPerMetricTon;
    }
    export namespace Supplier {
      export type Location = Stripe_.Climate.Supplier.Location;
      export type RemovalPathway = Stripe_.Climate.Supplier.RemovalPathway;
    }
  }
  export namespace Entitlements {
    export type ActiveEntitlement = Stripe_.Entitlements.ActiveEntitlement;
    export type ActiveEntitlementRetrieveParams = Stripe_.Entitlements.ActiveEntitlementRetrieveParams;
    export type ActiveEntitlementListParams = Stripe_.Entitlements.ActiveEntitlementListParams;
    export type ActiveEntitlementResource = Stripe_.Entitlements.ActiveEntitlementResource;
    export type Feature = Stripe_.Entitlements.Feature;
    export type FeatureCreateParams = Stripe_.Entitlements.FeatureCreateParams;
    export type FeatureRetrieveParams = Stripe_.Entitlements.FeatureRetrieveParams;
    export type FeatureUpdateParams = Stripe_.Entitlements.FeatureUpdateParams;
    export type FeatureListParams = Stripe_.Entitlements.FeatureListParams;
    export type FeatureResource = Stripe_.Entitlements.FeatureResource;
    export type ActiveEntitlementSummary = Stripe_.Entitlements.ActiveEntitlementSummary;
  }
  export namespace FinancialConnections {
    export type Account = Stripe_.FinancialConnections.Account;
    export type AccountRetrieveParams = Stripe_.FinancialConnections.AccountRetrieveParams;
    export type AccountListParams = Stripe_.FinancialConnections.AccountListParams;
    export type AccountDisconnectParams = Stripe_.FinancialConnections.AccountDisconnectParams;
    export type AccountListOwnersParams = Stripe_.FinancialConnections.AccountListOwnersParams;
    export type AccountRefreshParams = Stripe_.FinancialConnections.AccountRefreshParams;
    export type AccountSubscribeParams = Stripe_.FinancialConnections.AccountSubscribeParams;
    export type AccountUnsubscribeParams = Stripe_.FinancialConnections.AccountUnsubscribeParams;
    export type AccountResource = Stripe_.FinancialConnections.AccountResource;
    export type Session = Stripe_.FinancialConnections.Session;
    export type SessionCreateParams = Stripe_.FinancialConnections.SessionCreateParams;
    export type SessionRetrieveParams = Stripe_.FinancialConnections.SessionRetrieveParams;
    export type SessionResource = Stripe_.FinancialConnections.SessionResource;
    export type Transaction = Stripe_.FinancialConnections.Transaction;
    export type TransactionRetrieveParams = Stripe_.FinancialConnections.TransactionRetrieveParams;
    export type TransactionListParams = Stripe_.FinancialConnections.TransactionListParams;
    export type TransactionResource = Stripe_.FinancialConnections.TransactionResource;
    export type AccountOwner = Stripe_.FinancialConnections.AccountOwner;
    export type AccountOwnership = Stripe_.FinancialConnections.AccountOwnership;
    export namespace Account {
      export type AccountHolder = Stripe_.FinancialConnections.Account.AccountHolder;
      export type AccountNumber = Stripe_.FinancialConnections.Account.AccountNumber;
      export type Balance = Stripe_.FinancialConnections.Account.Balance;
      export type BalanceRefresh = Stripe_.FinancialConnections.Account.BalanceRefresh;
      export type Category = Stripe_.FinancialConnections.Account.Category;
      export type OwnershipRefresh = Stripe_.FinancialConnections.Account.OwnershipRefresh;
      export type Permission = Stripe_.FinancialConnections.Account.Permission;
      export type Status = Stripe_.FinancialConnections.Account.Status;
      export type StatusDetails = Stripe_.FinancialConnections.Account.StatusDetails;
      export type Subcategory = Stripe_.FinancialConnections.Account.Subcategory;
      export type SupportedPaymentMethodType = Stripe_.FinancialConnections.Account.SupportedPaymentMethodType;
      export type TransactionRefresh = Stripe_.FinancialConnections.Account.TransactionRefresh;
      export namespace AccountHolder {
        export type Type = Stripe_.FinancialConnections.Account.AccountHolder.Type;
      }
      export namespace AccountNumber {
        export type IdentifierType = Stripe_.FinancialConnections.Account.AccountNumber.IdentifierType;
        export type Status = Stripe_.FinancialConnections.Account.AccountNumber.Status;
      }
      export namespace Balance {
        export type Cash = Stripe_.FinancialConnections.Account.Balance.Cash;
        export type Credit = Stripe_.FinancialConnections.Account.Balance.Credit;
        export type Type = Stripe_.FinancialConnections.Account.Balance.Type;
      }
      export namespace BalanceRefresh {
        export type Status = Stripe_.FinancialConnections.Account.BalanceRefresh.Status;
      }
      export namespace OwnershipRefresh {
        export type Status = Stripe_.FinancialConnections.Account.OwnershipRefresh.Status;
      }
      export namespace StatusDetails {
        export type Active = Stripe_.FinancialConnections.Account.StatusDetails.Active;
        export namespace Active {
          export type Action = Stripe_.FinancialConnections.Account.StatusDetails.Active.Action;
          export type Cause = Stripe_.FinancialConnections.Account.StatusDetails.Active.Cause;
        }
      }
      export namespace TransactionRefresh {
        export type Status = Stripe_.FinancialConnections.Account.TransactionRefresh.Status;
      }
    }
    export namespace SessionCreateParams {
      export type AccountHolder = Stripe_.FinancialConnections.SessionCreateParams.AccountHolder;
      export type Permission = Stripe_.FinancialConnections.SessionCreateParams.Permission;
      export type Filters = Stripe_.FinancialConnections.SessionCreateParams.Filters;
      export type Prefetch = Stripe_.FinancialConnections.SessionCreateParams.Prefetch;
      export namespace AccountHolder {
        export type Type = Stripe_.FinancialConnections.SessionCreateParams.AccountHolder.Type;
      }
      export namespace Filters {
        export type AccountSubcategory = Stripe_.FinancialConnections.SessionCreateParams.Filters.AccountSubcategory;
      }
    }
    export namespace Session {
      export type AccountHolder = Stripe_.FinancialConnections.Session.AccountHolder;
      export type Filters = Stripe_.FinancialConnections.Session.Filters;
      export type Permission = Stripe_.FinancialConnections.Session.Permission;
      export type Prefetch = Stripe_.FinancialConnections.Session.Prefetch;
      export namespace AccountHolder {
        export type Type = Stripe_.FinancialConnections.Session.AccountHolder.Type;
      }
      export namespace Filters {
        export type AccountSubcategory = Stripe_.FinancialConnections.Session.Filters.AccountSubcategory;
      }
    }
    export namespace Transaction {
      export type Status = Stripe_.FinancialConnections.Transaction.Status;
      export type StatusTransitions = Stripe_.FinancialConnections.Transaction.StatusTransitions;
    }
  }
  export namespace Forwarding {
    export type Request = Stripe_.Forwarding.Request;
    export type RequestCreateParams = Stripe_.Forwarding.RequestCreateParams;
    export type RequestRetrieveParams = Stripe_.Forwarding.RequestRetrieveParams;
    export type RequestListParams = Stripe_.Forwarding.RequestListParams;
    export type RequestResource = Stripe_.Forwarding.RequestResource;
    export namespace RequestCreateParams {
      export type Replacement = Stripe_.Forwarding.RequestCreateParams.Replacement;
      export type Request = Stripe_.Forwarding.RequestCreateParams.Request;
      export namespace Request {
        export type Header = Stripe_.Forwarding.RequestCreateParams.Request.Header;
      }
    }
    export namespace Request {
      export type Replacement = Stripe_.Forwarding.Request.Replacement;
      export type RequestContext = Stripe_.Forwarding.Request.RequestContext;
      export type RequestDetails = Stripe_.Forwarding.Request.RequestDetails;
      export type ResponseDetails = Stripe_.Forwarding.Request.ResponseDetails;
      export namespace RequestDetails {
        export type Header = Stripe_.Forwarding.Request.RequestDetails.Header;
      }
      export namespace ResponseDetails {
        export type Header = Stripe_.Forwarding.Request.ResponseDetails.Header;
      }
    }
  }
  export namespace Identity {
    export type VerificationReport = Stripe_.Identity.VerificationReport;
    export type VerificationReportRetrieveParams = Stripe_.Identity.VerificationReportRetrieveParams;
    export type VerificationReportListParams = Stripe_.Identity.VerificationReportListParams;
    export type VerificationReportResource = Stripe_.Identity.VerificationReportResource;
    export type VerificationSession = Stripe_.Identity.VerificationSession;
    export type VerificationSessionCreateParams = Stripe_.Identity.VerificationSessionCreateParams;
    export type VerificationSessionRetrieveParams = Stripe_.Identity.VerificationSessionRetrieveParams;
    export type VerificationSessionUpdateParams = Stripe_.Identity.VerificationSessionUpdateParams;
    export type VerificationSessionListParams = Stripe_.Identity.VerificationSessionListParams;
    export type VerificationSessionCancelParams = Stripe_.Identity.VerificationSessionCancelParams;
    export type VerificationSessionRedactParams = Stripe_.Identity.VerificationSessionRedactParams;
    export type VerificationSessionResource = Stripe_.Identity.VerificationSessionResource;
    export namespace VerificationReport {
      export type Document = Stripe_.Identity.VerificationReport.Document;
      export type Email = Stripe_.Identity.VerificationReport.Email;
      export type IdNumber = Stripe_.Identity.VerificationReport.IdNumber;
      export type Options = Stripe_.Identity.VerificationReport.Options;
      export type Phone = Stripe_.Identity.VerificationReport.Phone;
      export type Selfie = Stripe_.Identity.VerificationReport.Selfie;
      export type Type = Stripe_.Identity.VerificationReport.Type;
      export namespace Document {
        export type Dob = Stripe_.Identity.VerificationReport.Document.Dob;
        export type Error = Stripe_.Identity.VerificationReport.Document.Error;
        export type ExpirationDate = Stripe_.Identity.VerificationReport.Document.ExpirationDate;
        export type IssuedDate = Stripe_.Identity.VerificationReport.Document.IssuedDate;
        export type Sex = Stripe_.Identity.VerificationReport.Document.Sex;
        export type Status = Stripe_.Identity.VerificationReport.Document.Status;
        export type Type = Stripe_.Identity.VerificationReport.Document.Type;
        export namespace Error {
          export type Code = Stripe_.Identity.VerificationReport.Document.Error.Code;
        }
      }
      export namespace Email {
        export type Error = Stripe_.Identity.VerificationReport.Email.Error;
        export type Status = Stripe_.Identity.VerificationReport.Email.Status;
        export namespace Error {
          export type Code = Stripe_.Identity.VerificationReport.Email.Error.Code;
        }
      }
      export namespace IdNumber {
        export type Dob = Stripe_.Identity.VerificationReport.IdNumber.Dob;
        export type Error = Stripe_.Identity.VerificationReport.IdNumber.Error;
        export type IdNumberType = Stripe_.Identity.VerificationReport.IdNumber.IdNumberType;
        export type Status = Stripe_.Identity.VerificationReport.IdNumber.Status;
        export namespace Error {
          export type Code = Stripe_.Identity.VerificationReport.IdNumber.Error.Code;
        }
      }
      export namespace Options {
        export type Document = Stripe_.Identity.VerificationReport.Options.Document;
        export type IdNumber = Stripe_.Identity.VerificationReport.Options.IdNumber;
        export namespace Document {
          export type AllowedType = Stripe_.Identity.VerificationReport.Options.Document.AllowedType;
        }
      }
      export namespace Phone {
        export type Error = Stripe_.Identity.VerificationReport.Phone.Error;
        export type Status = Stripe_.Identity.VerificationReport.Phone.Status;
        export namespace Error {
          export type Code = Stripe_.Identity.VerificationReport.Phone.Error.Code;
        }
      }
      export namespace Selfie {
        export type Error = Stripe_.Identity.VerificationReport.Selfie.Error;
        export type Status = Stripe_.Identity.VerificationReport.Selfie.Status;
        export namespace Error {
          export type Code = Stripe_.Identity.VerificationReport.Selfie.Error.Code;
        }
      }
    }
    export namespace VerificationSessionCreateParams {
      export type Options = Stripe_.Identity.VerificationSessionCreateParams.Options;
      export type ProvidedDetails = Stripe_.Identity.VerificationSessionCreateParams.ProvidedDetails;
      export type RelatedPerson = Stripe_.Identity.VerificationSessionCreateParams.RelatedPerson;
      export type Type = Stripe_.Identity.VerificationSessionCreateParams.Type;
      export namespace Options {
        export type Document = Stripe_.Identity.VerificationSessionCreateParams.Options.Document;
        export namespace Document {
          export type AllowedType = Stripe_.Identity.VerificationSessionCreateParams.Options.Document.AllowedType;
        }
      }
    }
    export namespace VerificationSession {
      export type LastError = Stripe_.Identity.VerificationSession.LastError;
      export type Options = Stripe_.Identity.VerificationSession.Options;
      export type ProvidedDetails = Stripe_.Identity.VerificationSession.ProvidedDetails;
      export type Redaction = Stripe_.Identity.VerificationSession.Redaction;
      export type RelatedPerson = Stripe_.Identity.VerificationSession.RelatedPerson;
      export type Status = Stripe_.Identity.VerificationSession.Status;
      export type Type = Stripe_.Identity.VerificationSession.Type;
      export type VerifiedOutputs = Stripe_.Identity.VerificationSession.VerifiedOutputs;
      export namespace LastError {
        export type Code = Stripe_.Identity.VerificationSession.LastError.Code;
      }
      export namespace Options {
        export type Document = Stripe_.Identity.VerificationSession.Options.Document;
        export type Email = Stripe_.Identity.VerificationSession.Options.Email;
        export type IdNumber = Stripe_.Identity.VerificationSession.Options.IdNumber;
        export type Matching = Stripe_.Identity.VerificationSession.Options.Matching;
        export type Phone = Stripe_.Identity.VerificationSession.Options.Phone;
        export namespace Document {
          export type AllowedType = Stripe_.Identity.VerificationSession.Options.Document.AllowedType;
        }
        export namespace Matching {
          export type Dob = Stripe_.Identity.VerificationSession.Options.Matching.Dob;
          export type Name = Stripe_.Identity.VerificationSession.Options.Matching.Name;
        }
      }
      export namespace Redaction {
        export type Status = Stripe_.Identity.VerificationSession.Redaction.Status;
      }
      export namespace VerifiedOutputs {
        export type Dob = Stripe_.Identity.VerificationSession.VerifiedOutputs.Dob;
        export type IdNumberType = Stripe_.Identity.VerificationSession.VerifiedOutputs.IdNumberType;
        export type Sex = Stripe_.Identity.VerificationSession.VerifiedOutputs.Sex;
      }
    }
  }
  export namespace Issuing {
    export type Authorization = Stripe_.Issuing.Authorization;
    export type AuthorizationRetrieveParams = Stripe_.Issuing.AuthorizationRetrieveParams;
    export type AuthorizationUpdateParams = Stripe_.Issuing.AuthorizationUpdateParams;
    export type AuthorizationListParams = Stripe_.Issuing.AuthorizationListParams;
    export type AuthorizationApproveParams = Stripe_.Issuing.AuthorizationApproveParams;
    export type AuthorizationDeclineParams = Stripe_.Issuing.AuthorizationDeclineParams;
    export type AuthorizationResource = Stripe_.Issuing.AuthorizationResource;
    export type Card = Stripe_.Issuing.Card;
    export type CardCreateParams = Stripe_.Issuing.CardCreateParams;
    export type CardRetrieveParams = Stripe_.Issuing.CardRetrieveParams;
    export type CardUpdateParams = Stripe_.Issuing.CardUpdateParams;
    export type CardListParams = Stripe_.Issuing.CardListParams;
    export type CardResource = Stripe_.Issuing.CardResource;
    export type Cardholder = Stripe_.Issuing.Cardholder;
    export type CardholderCreateParams = Stripe_.Issuing.CardholderCreateParams;
    export type CardholderRetrieveParams = Stripe_.Issuing.CardholderRetrieveParams;
    export type CardholderUpdateParams = Stripe_.Issuing.CardholderUpdateParams;
    export type CardholderListParams = Stripe_.Issuing.CardholderListParams;
    export type CardholderResource = Stripe_.Issuing.CardholderResource;
    export type Dispute = Stripe_.Issuing.Dispute;
    export type DisputeCreateParams = Stripe_.Issuing.DisputeCreateParams;
    export type DisputeRetrieveParams = Stripe_.Issuing.DisputeRetrieveParams;
    export type DisputeUpdateParams = Stripe_.Issuing.DisputeUpdateParams;
    export type DisputeListParams = Stripe_.Issuing.DisputeListParams;
    export type DisputeSubmitParams = Stripe_.Issuing.DisputeSubmitParams;
    export type DisputeResource = Stripe_.Issuing.DisputeResource;
    export type PersonalizationDesign = Stripe_.Issuing.PersonalizationDesign;
    export type PersonalizationDesignCreateParams = Stripe_.Issuing.PersonalizationDesignCreateParams;
    export type PersonalizationDesignRetrieveParams = Stripe_.Issuing.PersonalizationDesignRetrieveParams;
    export type PersonalizationDesignUpdateParams = Stripe_.Issuing.PersonalizationDesignUpdateParams;
    export type PersonalizationDesignListParams = Stripe_.Issuing.PersonalizationDesignListParams;
    export type PersonalizationDesignResource = Stripe_.Issuing.PersonalizationDesignResource;
    export type PhysicalBundle = Stripe_.Issuing.PhysicalBundle;
    export type PhysicalBundleRetrieveParams = Stripe_.Issuing.PhysicalBundleRetrieveParams;
    export type PhysicalBundleListParams = Stripe_.Issuing.PhysicalBundleListParams;
    export type PhysicalBundleResource = Stripe_.Issuing.PhysicalBundleResource;
    export type Token = Stripe_.Issuing.Token;
    export type TokenRetrieveParams = Stripe_.Issuing.TokenRetrieveParams;
    export type TokenUpdateParams = Stripe_.Issuing.TokenUpdateParams;
    export type TokenListParams = Stripe_.Issuing.TokenListParams;
    export type TokenResource = Stripe_.Issuing.TokenResource;
    export type Transaction = Stripe_.Issuing.Transaction;
    export type TransactionRetrieveParams = Stripe_.Issuing.TransactionRetrieveParams;
    export type TransactionUpdateParams = Stripe_.Issuing.TransactionUpdateParams;
    export type TransactionListParams = Stripe_.Issuing.TransactionListParams;
    export type TransactionResource = Stripe_.Issuing.TransactionResource;
    export namespace Authorization {
      export type AmountDetails = Stripe_.Issuing.Authorization.AmountDetails;
      export type AuthorizationMethod = Stripe_.Issuing.Authorization.AuthorizationMethod;
      export type CardPresence = Stripe_.Issuing.Authorization.CardPresence;
      export type Fleet = Stripe_.Issuing.Authorization.Fleet;
      export type FraudChallenge = Stripe_.Issuing.Authorization.FraudChallenge;
      export type Fuel = Stripe_.Issuing.Authorization.Fuel;
      export type MerchantData = Stripe_.Issuing.Authorization.MerchantData;
      export type NetworkData = Stripe_.Issuing.Authorization.NetworkData;
      export type PendingRequest = Stripe_.Issuing.Authorization.PendingRequest;
      export type RequestHistory = Stripe_.Issuing.Authorization.RequestHistory;
      export type Status = Stripe_.Issuing.Authorization.Status;
      export type Treasury = Stripe_.Issuing.Authorization.Treasury;
      export type VerificationData = Stripe_.Issuing.Authorization.VerificationData;
      export namespace Fleet {
        export type CardholderPromptData = Stripe_.Issuing.Authorization.Fleet.CardholderPromptData;
        export type PurchaseType = Stripe_.Issuing.Authorization.Fleet.PurchaseType;
        export type ReportedBreakdown = Stripe_.Issuing.Authorization.Fleet.ReportedBreakdown;
        export type ServiceType = Stripe_.Issuing.Authorization.Fleet.ServiceType;
        export namespace ReportedBreakdown {
          export type Fuel = Stripe_.Issuing.Authorization.Fleet.ReportedBreakdown.Fuel;
          export type NonFuel = Stripe_.Issuing.Authorization.Fleet.ReportedBreakdown.NonFuel;
          export type Tax = Stripe_.Issuing.Authorization.Fleet.ReportedBreakdown.Tax;
        }
      }
      export namespace FraudChallenge {
        export type Status = Stripe_.Issuing.Authorization.FraudChallenge.Status;
        export type UndeliverableReason = Stripe_.Issuing.Authorization.FraudChallenge.UndeliverableReason;
      }
      export namespace Fuel {
        export type Type = Stripe_.Issuing.Authorization.Fuel.Type;
        export type Unit = Stripe_.Issuing.Authorization.Fuel.Unit;
      }
      export namespace PendingRequest {
        export type AmountDetails = Stripe_.Issuing.Authorization.PendingRequest.AmountDetails;
      }
      export namespace RequestHistory {
        export type AmountDetails = Stripe_.Issuing.Authorization.RequestHistory.AmountDetails;
        export type Reason = Stripe_.Issuing.Authorization.RequestHistory.Reason;
      }
      export namespace VerificationData {
        export type AddressLine1Check = Stripe_.Issuing.Authorization.VerificationData.AddressLine1Check;
        export type AddressPostalCodeCheck = Stripe_.Issuing.Authorization.VerificationData.AddressPostalCodeCheck;
        export type AuthenticationExemption = Stripe_.Issuing.Authorization.VerificationData.AuthenticationExemption;
        export type CvcCheck = Stripe_.Issuing.Authorization.VerificationData.CvcCheck;
        export type ExpiryCheck = Stripe_.Issuing.Authorization.VerificationData.ExpiryCheck;
        export type ThreeDSecure = Stripe_.Issuing.Authorization.VerificationData.ThreeDSecure;
        export namespace AuthenticationExemption {
          export type ClaimedBy = Stripe_.Issuing.Authorization.VerificationData.AuthenticationExemption.ClaimedBy;
          export type Type = Stripe_.Issuing.Authorization.VerificationData.AuthenticationExemption.Type;
        }
        export namespace ThreeDSecure {
          export type Result = Stripe_.Issuing.Authorization.VerificationData.ThreeDSecure.Result;
        }
      }
    }
    export namespace CardCreateParams {
      export type Type = Stripe_.Issuing.CardCreateParams.Type;
      export type LifecycleControls = Stripe_.Issuing.CardCreateParams.LifecycleControls;
      export type Pin = Stripe_.Issuing.CardCreateParams.Pin;
      export type ReplacementReason = Stripe_.Issuing.CardCreateParams.ReplacementReason;
      export type Shipping = Stripe_.Issuing.CardCreateParams.Shipping;
      export type SpendingControls = Stripe_.Issuing.CardCreateParams.SpendingControls;
      export type Status = Stripe_.Issuing.CardCreateParams.Status;
      export namespace LifecycleControls {
        export type CancelAfter = Stripe_.Issuing.CardCreateParams.LifecycleControls.CancelAfter;
      }
      export namespace Shipping {
        export type Address = Stripe_.Issuing.CardCreateParams.Shipping.Address;
        export type AddressValidation = Stripe_.Issuing.CardCreateParams.Shipping.AddressValidation;
        export type Customs = Stripe_.Issuing.CardCreateParams.Shipping.Customs;
        export type Service = Stripe_.Issuing.CardCreateParams.Shipping.Service;
        export type Type = Stripe_.Issuing.CardCreateParams.Shipping.Type;
        export namespace AddressValidation {
          export type Mode = Stripe_.Issuing.CardCreateParams.Shipping.AddressValidation.Mode;
        }
      }
      export namespace SpendingControls {
        export type AllowedCardPresence = Stripe_.Issuing.CardCreateParams.SpendingControls.AllowedCardPresence;
        export type AllowedCategory = Stripe_.Issuing.CardCreateParams.SpendingControls.AllowedCategory;
        export type BlockedCardPresence = Stripe_.Issuing.CardCreateParams.SpendingControls.BlockedCardPresence;
        export type BlockedCategory = Stripe_.Issuing.CardCreateParams.SpendingControls.BlockedCategory;
        export type SpendingLimit = Stripe_.Issuing.CardCreateParams.SpendingControls.SpendingLimit;
        export namespace SpendingLimit {
          export type Category = Stripe_.Issuing.CardCreateParams.SpendingControls.SpendingLimit.Category;
          export type Interval = Stripe_.Issuing.CardCreateParams.SpendingControls.SpendingLimit.Interval;
        }
      }
    }
    export namespace Card {
      export type CancellationReason = Stripe_.Issuing.Card.CancellationReason;
      export type LatestFraudWarning = Stripe_.Issuing.Card.LatestFraudWarning;
      export type LifecycleControls = Stripe_.Issuing.Card.LifecycleControls;
      export type ReplacementReason = Stripe_.Issuing.Card.ReplacementReason;
      export type Shipping = Stripe_.Issuing.Card.Shipping;
      export type SpendingControls = Stripe_.Issuing.Card.SpendingControls;
      export type Status = Stripe_.Issuing.Card.Status;
      export type Type = Stripe_.Issuing.Card.Type;
      export type Wallets = Stripe_.Issuing.Card.Wallets;
      export namespace LatestFraudWarning {
        export type Type = Stripe_.Issuing.Card.LatestFraudWarning.Type;
      }
      export namespace LifecycleControls {
        export type CancelAfter = Stripe_.Issuing.Card.LifecycleControls.CancelAfter;
      }
      export namespace Shipping {
        export type AddressValidation = Stripe_.Issuing.Card.Shipping.AddressValidation;
        export type Carrier = Stripe_.Issuing.Card.Shipping.Carrier;
        export type Customs = Stripe_.Issuing.Card.Shipping.Customs;
        export type Service = Stripe_.Issuing.Card.Shipping.Service;
        export type Status = Stripe_.Issuing.Card.Shipping.Status;
        export type Type = Stripe_.Issuing.Card.Shipping.Type;
        export namespace AddressValidation {
          export type Mode = Stripe_.Issuing.Card.Shipping.AddressValidation.Mode;
          export type Result = Stripe_.Issuing.Card.Shipping.AddressValidation.Result;
        }
      }
      export namespace SpendingControls {
        export type AllowedCardPresence = Stripe_.Issuing.Card.SpendingControls.AllowedCardPresence;
        export type AllowedCategory = Stripe_.Issuing.Card.SpendingControls.AllowedCategory;
        export type BlockedCardPresence = Stripe_.Issuing.Card.SpendingControls.BlockedCardPresence;
        export type BlockedCategory = Stripe_.Issuing.Card.SpendingControls.BlockedCategory;
        export type SpendingLimit = Stripe_.Issuing.Card.SpendingControls.SpendingLimit;
        export namespace SpendingLimit {
          export type Category = Stripe_.Issuing.Card.SpendingControls.SpendingLimit.Category;
          export type Interval = Stripe_.Issuing.Card.SpendingControls.SpendingLimit.Interval;
        }
      }
      export namespace Wallets {
        export type ApplePay = Stripe_.Issuing.Card.Wallets.ApplePay;
        export type GooglePay = Stripe_.Issuing.Card.Wallets.GooglePay;
        export namespace ApplePay {
          export type IneligibleReason = Stripe_.Issuing.Card.Wallets.ApplePay.IneligibleReason;
        }
        export namespace GooglePay {
          export type IneligibleReason = Stripe_.Issuing.Card.Wallets.GooglePay.IneligibleReason;
        }
      }
    }
    export namespace CardholderCreateParams {
      export type Billing = Stripe_.Issuing.CardholderCreateParams.Billing;
      export type Company = Stripe_.Issuing.CardholderCreateParams.Company;
      export type Individual = Stripe_.Issuing.CardholderCreateParams.Individual;
      export type PreferredLocale = Stripe_.Issuing.CardholderCreateParams.PreferredLocale;
      export type SpendingControls = Stripe_.Issuing.CardholderCreateParams.SpendingControls;
      export type Status = Stripe_.Issuing.CardholderCreateParams.Status;
      export type Type = Stripe_.Issuing.CardholderCreateParams.Type;
      export namespace Billing {
        export type Address = Stripe_.Issuing.CardholderCreateParams.Billing.Address;
      }
      export namespace Individual {
        export type CardIssuing = Stripe_.Issuing.CardholderCreateParams.Individual.CardIssuing;
        export type Dob = Stripe_.Issuing.CardholderCreateParams.Individual.Dob;
        export type Verification = Stripe_.Issuing.CardholderCreateParams.Individual.Verification;
        export namespace CardIssuing {
          export type UserTermsAcceptance = Stripe_.Issuing.CardholderCreateParams.Individual.CardIssuing.UserTermsAcceptance;
        }
        export namespace Verification {
          export type Document = Stripe_.Issuing.CardholderCreateParams.Individual.Verification.Document;
        }
      }
      export namespace SpendingControls {
        export type AllowedCardPresence = Stripe_.Issuing.CardholderCreateParams.SpendingControls.AllowedCardPresence;
        export type AllowedCategory = Stripe_.Issuing.CardholderCreateParams.SpendingControls.AllowedCategory;
        export type BlockedCardPresence = Stripe_.Issuing.CardholderCreateParams.SpendingControls.BlockedCardPresence;
        export type BlockedCategory = Stripe_.Issuing.CardholderCreateParams.SpendingControls.BlockedCategory;
        export type SpendingLimit = Stripe_.Issuing.CardholderCreateParams.SpendingControls.SpendingLimit;
        export namespace SpendingLimit {
          export type Category = Stripe_.Issuing.CardholderCreateParams.SpendingControls.SpendingLimit.Category;
          export type Interval = Stripe_.Issuing.CardholderCreateParams.SpendingControls.SpendingLimit.Interval;
        }
      }
    }
    export namespace Cardholder {
      export type Billing = Stripe_.Issuing.Cardholder.Billing;
      export type Company = Stripe_.Issuing.Cardholder.Company;
      export type Individual = Stripe_.Issuing.Cardholder.Individual;
      export type PreferredLocale = Stripe_.Issuing.Cardholder.PreferredLocale;
      export type Requirements = Stripe_.Issuing.Cardholder.Requirements;
      export type SpendingControls = Stripe_.Issuing.Cardholder.SpendingControls;
      export type Status = Stripe_.Issuing.Cardholder.Status;
      export type Type = Stripe_.Issuing.Cardholder.Type;
      export namespace Individual {
        export type CardIssuing = Stripe_.Issuing.Cardholder.Individual.CardIssuing;
        export type Dob = Stripe_.Issuing.Cardholder.Individual.Dob;
        export type Verification = Stripe_.Issuing.Cardholder.Individual.Verification;
        export namespace CardIssuing {
          export type UserTermsAcceptance = Stripe_.Issuing.Cardholder.Individual.CardIssuing.UserTermsAcceptance;
        }
        export namespace Verification {
          export type Document = Stripe_.Issuing.Cardholder.Individual.Verification.Document;
        }
      }
      export namespace Requirements {
        export type DisabledReason = Stripe_.Issuing.Cardholder.Requirements.DisabledReason;
        export type PastDue = Stripe_.Issuing.Cardholder.Requirements.PastDue;
      }
      export namespace SpendingControls {
        export type AllowedCardPresence = Stripe_.Issuing.Cardholder.SpendingControls.AllowedCardPresence;
        export type AllowedCategory = Stripe_.Issuing.Cardholder.SpendingControls.AllowedCategory;
        export type BlockedCardPresence = Stripe_.Issuing.Cardholder.SpendingControls.BlockedCardPresence;
        export type BlockedCategory = Stripe_.Issuing.Cardholder.SpendingControls.BlockedCategory;
        export type SpendingLimit = Stripe_.Issuing.Cardholder.SpendingControls.SpendingLimit;
        export namespace SpendingLimit {
          export type Category = Stripe_.Issuing.Cardholder.SpendingControls.SpendingLimit.Category;
          export type Interval = Stripe_.Issuing.Cardholder.SpendingControls.SpendingLimit.Interval;
        }
      }
    }
    export namespace DisputeCreateParams {
      export type Evidence = Stripe_.Issuing.DisputeCreateParams.Evidence;
      export type Treasury = Stripe_.Issuing.DisputeCreateParams.Treasury;
      export namespace Evidence {
        export type Canceled = Stripe_.Issuing.DisputeCreateParams.Evidence.Canceled;
        export type Duplicate = Stripe_.Issuing.DisputeCreateParams.Evidence.Duplicate;
        export type Fraudulent = Stripe_.Issuing.DisputeCreateParams.Evidence.Fraudulent;
        export type MerchandiseNotAsDescribed = Stripe_.Issuing.DisputeCreateParams.Evidence.MerchandiseNotAsDescribed;
        export type NoValidAuthorization = Stripe_.Issuing.DisputeCreateParams.Evidence.NoValidAuthorization;
        export type NotReceived = Stripe_.Issuing.DisputeCreateParams.Evidence.NotReceived;
        export type Other = Stripe_.Issuing.DisputeCreateParams.Evidence.Other;
        export type Reason = Stripe_.Issuing.DisputeCreateParams.Evidence.Reason;
        export type ServiceNotAsDescribed = Stripe_.Issuing.DisputeCreateParams.Evidence.ServiceNotAsDescribed;
        export namespace Canceled {
          export type ProductType = Stripe_.Issuing.DisputeCreateParams.Evidence.Canceled.ProductType;
          export type ReturnStatus = Stripe_.Issuing.DisputeCreateParams.Evidence.Canceled.ReturnStatus;
        }
        export namespace MerchandiseNotAsDescribed {
          export type ReturnStatus = Stripe_.Issuing.DisputeCreateParams.Evidence.MerchandiseNotAsDescribed.ReturnStatus;
        }
        export namespace NotReceived {
          export type ProductType = Stripe_.Issuing.DisputeCreateParams.Evidence.NotReceived.ProductType;
        }
        export namespace Other {
          export type ProductType = Stripe_.Issuing.DisputeCreateParams.Evidence.Other.ProductType;
        }
      }
    }
    export namespace Dispute {
      export type Evidence = Stripe_.Issuing.Dispute.Evidence;
      export type LossReason = Stripe_.Issuing.Dispute.LossReason;
      export type Status = Stripe_.Issuing.Dispute.Status;
      export type Treasury = Stripe_.Issuing.Dispute.Treasury;
      export namespace Evidence {
        export type Canceled = Stripe_.Issuing.Dispute.Evidence.Canceled;
        export type Duplicate = Stripe_.Issuing.Dispute.Evidence.Duplicate;
        export type Fraudulent = Stripe_.Issuing.Dispute.Evidence.Fraudulent;
        export type MerchandiseNotAsDescribed = Stripe_.Issuing.Dispute.Evidence.MerchandiseNotAsDescribed;
        export type NoValidAuthorization = Stripe_.Issuing.Dispute.Evidence.NoValidAuthorization;
        export type NotReceived = Stripe_.Issuing.Dispute.Evidence.NotReceived;
        export type Other = Stripe_.Issuing.Dispute.Evidence.Other;
        export type Reason = Stripe_.Issuing.Dispute.Evidence.Reason;
        export type ServiceNotAsDescribed = Stripe_.Issuing.Dispute.Evidence.ServiceNotAsDescribed;
        export namespace Canceled {
          export type ProductType = Stripe_.Issuing.Dispute.Evidence.Canceled.ProductType;
          export type ReturnStatus = Stripe_.Issuing.Dispute.Evidence.Canceled.ReturnStatus;
        }
        export namespace MerchandiseNotAsDescribed {
          export type ReturnStatus = Stripe_.Issuing.Dispute.Evidence.MerchandiseNotAsDescribed.ReturnStatus;
        }
        export namespace NotReceived {
          export type ProductType = Stripe_.Issuing.Dispute.Evidence.NotReceived.ProductType;
        }
        export namespace Other {
          export type ProductType = Stripe_.Issuing.Dispute.Evidence.Other.ProductType;
        }
      }
    }
    export namespace PersonalizationDesignCreateParams {
      export type CarrierText = Stripe_.Issuing.PersonalizationDesignCreateParams.CarrierText;
      export type Preferences = Stripe_.Issuing.PersonalizationDesignCreateParams.Preferences;
    }
    export namespace PersonalizationDesign {
      export type CarrierText = Stripe_.Issuing.PersonalizationDesign.CarrierText;
      export type Preferences = Stripe_.Issuing.PersonalizationDesign.Preferences;
      export type RejectionReasons = Stripe_.Issuing.PersonalizationDesign.RejectionReasons;
      export type Status = Stripe_.Issuing.PersonalizationDesign.Status;
      export namespace RejectionReasons {
        export type CardLogo = Stripe_.Issuing.PersonalizationDesign.RejectionReasons.CardLogo;
        export type CarrierText = Stripe_.Issuing.PersonalizationDesign.RejectionReasons.CarrierText;
      }
    }
    export namespace PhysicalBundle {
      export type Features = Stripe_.Issuing.PhysicalBundle.Features;
      export type Status = Stripe_.Issuing.PhysicalBundle.Status;
      export type Type = Stripe_.Issuing.PhysicalBundle.Type;
      export namespace Features {
        export type CardLogo = Stripe_.Issuing.PhysicalBundle.Features.CardLogo;
        export type CarrierText = Stripe_.Issuing.PhysicalBundle.Features.CarrierText;
        export type SecondLine = Stripe_.Issuing.PhysicalBundle.Features.SecondLine;
      }
    }
    export namespace Token {
      export type Network = Stripe_.Issuing.Token.Network;
      export type NetworkData = Stripe_.Issuing.Token.NetworkData;
      export type Status = Stripe_.Issuing.Token.Status;
      export type WalletProvider = Stripe_.Issuing.Token.WalletProvider;
      export namespace NetworkData {
        export type Device = Stripe_.Issuing.Token.NetworkData.Device;
        export type Mastercard = Stripe_.Issuing.Token.NetworkData.Mastercard;
        export type Type = Stripe_.Issuing.Token.NetworkData.Type;
        export type Visa = Stripe_.Issuing.Token.NetworkData.Visa;
        export type WalletProvider = Stripe_.Issuing.Token.NetworkData.WalletProvider;
        export namespace Device {
          export type Type = Stripe_.Issuing.Token.NetworkData.Device.Type;
        }
        export namespace WalletProvider {
          export type CardNumberSource = Stripe_.Issuing.Token.NetworkData.WalletProvider.CardNumberSource;
          export type CardholderAddress = Stripe_.Issuing.Token.NetworkData.WalletProvider.CardholderAddress;
          export type ReasonCode = Stripe_.Issuing.Token.NetworkData.WalletProvider.ReasonCode;
          export type SuggestedDecision = Stripe_.Issuing.Token.NetworkData.WalletProvider.SuggestedDecision;
        }
      }
    }
    export namespace Transaction {
      export type AmountDetails = Stripe_.Issuing.Transaction.AmountDetails;
      export type MerchantData = Stripe_.Issuing.Transaction.MerchantData;
      export type NetworkData = Stripe_.Issuing.Transaction.NetworkData;
      export type PurchaseDetails = Stripe_.Issuing.Transaction.PurchaseDetails;
      export type Treasury = Stripe_.Issuing.Transaction.Treasury;
      export type Type = Stripe_.Issuing.Transaction.Type;
      export type Wallet = Stripe_.Issuing.Transaction.Wallet;
      export namespace PurchaseDetails {
        export type Fleet = Stripe_.Issuing.Transaction.PurchaseDetails.Fleet;
        export type Flight = Stripe_.Issuing.Transaction.PurchaseDetails.Flight;
        export type Fuel = Stripe_.Issuing.Transaction.PurchaseDetails.Fuel;
        export type Lodging = Stripe_.Issuing.Transaction.PurchaseDetails.Lodging;
        export type Receipt = Stripe_.Issuing.Transaction.PurchaseDetails.Receipt;
        export namespace Fleet {
          export type CardholderPromptData = Stripe_.Issuing.Transaction.PurchaseDetails.Fleet.CardholderPromptData;
          export type ReportedBreakdown = Stripe_.Issuing.Transaction.PurchaseDetails.Fleet.ReportedBreakdown;
          export namespace ReportedBreakdown {
            export type Fuel = Stripe_.Issuing.Transaction.PurchaseDetails.Fleet.ReportedBreakdown.Fuel;
            export type NonFuel = Stripe_.Issuing.Transaction.PurchaseDetails.Fleet.ReportedBreakdown.NonFuel;
            export type Tax = Stripe_.Issuing.Transaction.PurchaseDetails.Fleet.ReportedBreakdown.Tax;
          }
        }
        export namespace Flight {
          export type Segment = Stripe_.Issuing.Transaction.PurchaseDetails.Flight.Segment;
        }
      }
    }
  }
  export namespace Radar {
    export type EarlyFraudWarning = Stripe_.Radar.EarlyFraudWarning;
    export type EarlyFraudWarningRetrieveParams = Stripe_.Radar.EarlyFraudWarningRetrieveParams;
    export type EarlyFraudWarningListParams = Stripe_.Radar.EarlyFraudWarningListParams;
    export type EarlyFraudWarningResource = Stripe_.Radar.EarlyFraudWarningResource;
    export type PaymentEvaluation = Stripe_.Radar.PaymentEvaluation;
    export type PaymentEvaluationCreateParams = Stripe_.Radar.PaymentEvaluationCreateParams;
    export type PaymentEvaluationResource = Stripe_.Radar.PaymentEvaluationResource;
    export type ValueList = Stripe_.Radar.ValueList;
    export type DeletedValueList = Stripe_.Radar.DeletedValueList;
    export type ValueListCreateParams = Stripe_.Radar.ValueListCreateParams;
    export type ValueListRetrieveParams = Stripe_.Radar.ValueListRetrieveParams;
    export type ValueListUpdateParams = Stripe_.Radar.ValueListUpdateParams;
    export type ValueListListParams = Stripe_.Radar.ValueListListParams;
    export type ValueListDeleteParams = Stripe_.Radar.ValueListDeleteParams;
    export type ValueListResource = Stripe_.Radar.ValueListResource;
    export type ValueListItem = Stripe_.Radar.ValueListItem;
    export type DeletedValueListItem = Stripe_.Radar.DeletedValueListItem;
    export type ValueListItemCreateParams = Stripe_.Radar.ValueListItemCreateParams;
    export type ValueListItemRetrieveParams = Stripe_.Radar.ValueListItemRetrieveParams;
    export type ValueListItemListParams = Stripe_.Radar.ValueListItemListParams;
    export type ValueListItemDeleteParams = Stripe_.Radar.ValueListItemDeleteParams;
    export type ValueListItemResource = Stripe_.Radar.ValueListItemResource;
    export namespace PaymentEvaluationCreateParams {
      export type CustomerDetails = Stripe_.Radar.PaymentEvaluationCreateParams.CustomerDetails;
      export type PaymentDetails = Stripe_.Radar.PaymentEvaluationCreateParams.PaymentDetails;
      export type ClientDeviceMetadataDetails = Stripe_.Radar.PaymentEvaluationCreateParams.ClientDeviceMetadataDetails;
      export namespace PaymentDetails {
        export type MoneyMovementDetails = Stripe_.Radar.PaymentEvaluationCreateParams.PaymentDetails.MoneyMovementDetails;
        export type PaymentMethodDetails = Stripe_.Radar.PaymentEvaluationCreateParams.PaymentDetails.PaymentMethodDetails;
        export type ShippingDetails = Stripe_.Radar.PaymentEvaluationCreateParams.PaymentDetails.ShippingDetails;
        export namespace MoneyMovementDetails {
          export type Card = Stripe_.Radar.PaymentEvaluationCreateParams.PaymentDetails.MoneyMovementDetails.Card;
          export namespace Card {
            export type CustomerPresence = Stripe_.Radar.PaymentEvaluationCreateParams.PaymentDetails.MoneyMovementDetails.Card.CustomerPresence;
            export type PaymentType = Stripe_.Radar.PaymentEvaluationCreateParams.PaymentDetails.MoneyMovementDetails.Card.PaymentType;
          }
        }
        export namespace PaymentMethodDetails {
          export type BillingDetails = Stripe_.Radar.PaymentEvaluationCreateParams.PaymentDetails.PaymentMethodDetails.BillingDetails;
        }
      }
    }
    export namespace PaymentEvaluation {
      export type ClientDeviceMetadataDetails = Stripe_.Radar.PaymentEvaluation.ClientDeviceMetadataDetails;
      export type CustomerDetails = Stripe_.Radar.PaymentEvaluation.CustomerDetails;
      export type Event = Stripe_.Radar.PaymentEvaluation.Event;
      export type Outcome = Stripe_.Radar.PaymentEvaluation.Outcome;
      export type PaymentDetails = Stripe_.Radar.PaymentEvaluation.PaymentDetails;
      export type RecommendedAction = Stripe_.Radar.PaymentEvaluation.RecommendedAction;
      export type Signals = Stripe_.Radar.PaymentEvaluation.Signals;
      export namespace Event {
        export type DisputeOpened = Stripe_.Radar.PaymentEvaluation.Event.DisputeOpened;
        export type EarlyFraudWarningReceived = Stripe_.Radar.PaymentEvaluation.Event.EarlyFraudWarningReceived;
        export type Refunded = Stripe_.Radar.PaymentEvaluation.Event.Refunded;
        export type Type = Stripe_.Radar.PaymentEvaluation.Event.Type;
        export type UserInterventionRaised = Stripe_.Radar.PaymentEvaluation.Event.UserInterventionRaised;
        export type UserInterventionResolved = Stripe_.Radar.PaymentEvaluation.Event.UserInterventionResolved;
        export namespace DisputeOpened {
          export type Reason = Stripe_.Radar.PaymentEvaluation.Event.DisputeOpened.Reason;
        }
        export namespace EarlyFraudWarningReceived {
          export type FraudType = Stripe_.Radar.PaymentEvaluation.Event.EarlyFraudWarningReceived.FraudType;
        }
        export namespace Refunded {
          export type Reason = Stripe_.Radar.PaymentEvaluation.Event.Refunded.Reason;
        }
        export namespace UserInterventionRaised {
          export type Custom = Stripe_.Radar.PaymentEvaluation.Event.UserInterventionRaised.Custom;
          export type Type = Stripe_.Radar.PaymentEvaluation.Event.UserInterventionRaised.Type;
        }
        export namespace UserInterventionResolved {
          export type Outcome = Stripe_.Radar.PaymentEvaluation.Event.UserInterventionResolved.Outcome;
        }
      }
      export namespace Outcome {
        export type MerchantBlocked = Stripe_.Radar.PaymentEvaluation.Outcome.MerchantBlocked;
        export type Rejected = Stripe_.Radar.PaymentEvaluation.Outcome.Rejected;
        export type Succeeded = Stripe_.Radar.PaymentEvaluation.Outcome.Succeeded;
        export type Type = Stripe_.Radar.PaymentEvaluation.Outcome.Type;
        export namespace MerchantBlocked {
          export type Reason = Stripe_.Radar.PaymentEvaluation.Outcome.MerchantBlocked.Reason;
        }
        export namespace Rejected {
          export type Card = Stripe_.Radar.PaymentEvaluation.Outcome.Rejected.Card;
          export namespace Card {
            export type AddressLine1Check = Stripe_.Radar.PaymentEvaluation.Outcome.Rejected.Card.AddressLine1Check;
            export type AddressPostalCodeCheck = Stripe_.Radar.PaymentEvaluation.Outcome.Rejected.Card.AddressPostalCodeCheck;
            export type CvcCheck = Stripe_.Radar.PaymentEvaluation.Outcome.Rejected.Card.CvcCheck;
            export type Reason = Stripe_.Radar.PaymentEvaluation.Outcome.Rejected.Card.Reason;
          }
        }
        export namespace Succeeded {
          export type Card = Stripe_.Radar.PaymentEvaluation.Outcome.Succeeded.Card;
          export namespace Card {
            export type AddressLine1Check = Stripe_.Radar.PaymentEvaluation.Outcome.Succeeded.Card.AddressLine1Check;
            export type AddressPostalCodeCheck = Stripe_.Radar.PaymentEvaluation.Outcome.Succeeded.Card.AddressPostalCodeCheck;
            export type CvcCheck = Stripe_.Radar.PaymentEvaluation.Outcome.Succeeded.Card.CvcCheck;
          }
        }
      }
      export namespace PaymentDetails {
        export type MoneyMovementDetails = Stripe_.Radar.PaymentEvaluation.PaymentDetails.MoneyMovementDetails;
        export type PaymentMethodDetails = Stripe_.Radar.PaymentEvaluation.PaymentDetails.PaymentMethodDetails;
        export type ShippingDetails = Stripe_.Radar.PaymentEvaluation.PaymentDetails.ShippingDetails;
        export namespace MoneyMovementDetails {
          export type Card = Stripe_.Radar.PaymentEvaluation.PaymentDetails.MoneyMovementDetails.Card;
          export namespace Card {
            export type CustomerPresence = Stripe_.Radar.PaymentEvaluation.PaymentDetails.MoneyMovementDetails.Card.CustomerPresence;
            export type PaymentType = Stripe_.Radar.PaymentEvaluation.PaymentDetails.MoneyMovementDetails.Card.PaymentType;
          }
        }
        export namespace PaymentMethodDetails {
          export type BillingDetails = Stripe_.Radar.PaymentEvaluation.PaymentDetails.PaymentMethodDetails.BillingDetails;
        }
      }
      export namespace Signals {
        export type FraudulentPayment = Stripe_.Radar.PaymentEvaluation.Signals.FraudulentPayment;
        export namespace FraudulentPayment {
          export type RiskLevel = Stripe_.Radar.PaymentEvaluation.Signals.FraudulentPayment.RiskLevel;
        }
      }
    }
    export namespace ValueListCreateParams {
      export type ItemType = Stripe_.Radar.ValueListCreateParams.ItemType;
    }
    export namespace ValueList {
      export type ItemType = Stripe_.Radar.ValueList.ItemType;
    }
  }
  export namespace Reporting {
    export type ReportRun = Stripe_.Reporting.ReportRun;
    export type ReportRunCreateParams = Stripe_.Reporting.ReportRunCreateParams;
    export type ReportRunRetrieveParams = Stripe_.Reporting.ReportRunRetrieveParams;
    export type ReportRunListParams = Stripe_.Reporting.ReportRunListParams;
    export type ReportRunResource = Stripe_.Reporting.ReportRunResource;
    export type ReportType = Stripe_.Reporting.ReportType;
    export type ReportTypeRetrieveParams = Stripe_.Reporting.ReportTypeRetrieveParams;
    export type ReportTypeListParams = Stripe_.Reporting.ReportTypeListParams;
    export type ReportTypeResource = Stripe_.Reporting.ReportTypeResource;
    export namespace ReportRunCreateParams {
      export type Parameters = Stripe_.Reporting.ReportRunCreateParams.Parameters;
      export namespace Parameters {
        export type ReportingCategory = Stripe_.Reporting.ReportRunCreateParams.Parameters.ReportingCategory;
        export type Timezone = Stripe_.Reporting.ReportRunCreateParams.Parameters.Timezone;
      }
    }
    export namespace ReportRun {
      export type Parameters = Stripe_.Reporting.ReportRun.Parameters;
    }
  }
  export namespace Sigma {
    export type ScheduledQueryRun = Stripe_.Sigma.ScheduledQueryRun;
    export type ScheduledQueryRunRetrieveParams = Stripe_.Sigma.ScheduledQueryRunRetrieveParams;
    export type ScheduledQueryRunListParams = Stripe_.Sigma.ScheduledQueryRunListParams;
    export type ScheduledQueryRunResource = Stripe_.Sigma.ScheduledQueryRunResource;
    export namespace ScheduledQueryRun {
      export type Error = Stripe_.Sigma.ScheduledQueryRun.Error;
    }
  }
  export namespace Tax {
    export type Association = Stripe_.Tax.Association;
    export type AssociationFindParams = Stripe_.Tax.AssociationFindParams;
    export type AssociationResource = Stripe_.Tax.AssociationResource;
    export type Calculation = Stripe_.Tax.Calculation;
    export type CalculationCreateParams = Stripe_.Tax.CalculationCreateParams;
    export type CalculationRetrieveParams = Stripe_.Tax.CalculationRetrieveParams;
    export type CalculationListLineItemsParams = Stripe_.Tax.CalculationListLineItemsParams;
    export type CalculationResource = Stripe_.Tax.CalculationResource;
    export type Registration = Stripe_.Tax.Registration;
    export type RegistrationCreateParams = Stripe_.Tax.RegistrationCreateParams;
    export type RegistrationRetrieveParams = Stripe_.Tax.RegistrationRetrieveParams;
    export type RegistrationUpdateParams = Stripe_.Tax.RegistrationUpdateParams;
    export type RegistrationListParams = Stripe_.Tax.RegistrationListParams;
    export type RegistrationResource = Stripe_.Tax.RegistrationResource;
    export type Settings = Stripe_.Tax.Settings;
    export type SettingsRetrieveParams = Stripe_.Tax.SettingsRetrieveParams;
    export type SettingsUpdateParams = Stripe_.Tax.SettingsUpdateParams;
    export type SettingResource = Stripe_.Tax.SettingResource;
    export type Transaction = Stripe_.Tax.Transaction;
    export type TransactionRetrieveParams = Stripe_.Tax.TransactionRetrieveParams;
    export type TransactionCreateFromCalculationParams = Stripe_.Tax.TransactionCreateFromCalculationParams;
    export type TransactionCreateReversalParams = Stripe_.Tax.TransactionCreateReversalParams;
    export type TransactionListLineItemsParams = Stripe_.Tax.TransactionListLineItemsParams;
    export type TransactionResource = Stripe_.Tax.TransactionResource;
    export type CalculationLineItem = Stripe_.Tax.CalculationLineItem;
    export type TransactionLineItem = Stripe_.Tax.TransactionLineItem;
    export namespace Association {
      export type TaxTransactionAttempt = Stripe_.Tax.Association.TaxTransactionAttempt;
      export namespace TaxTransactionAttempt {
        export type Committed = Stripe_.Tax.Association.TaxTransactionAttempt.Committed;
        export type Errored = Stripe_.Tax.Association.TaxTransactionAttempt.Errored;
        export namespace Errored {
          export type Reason = Stripe_.Tax.Association.TaxTransactionAttempt.Errored.Reason;
        }
      }
    }
    export namespace CalculationCreateParams {
      export type LineItem = Stripe_.Tax.CalculationCreateParams.LineItem;
      export type CustomerDetails = Stripe_.Tax.CalculationCreateParams.CustomerDetails;
      export type ShipFromDetails = Stripe_.Tax.CalculationCreateParams.ShipFromDetails;
      export type ShippingCost = Stripe_.Tax.CalculationCreateParams.ShippingCost;
      export namespace CustomerDetails {
        export type Address = Stripe_.Tax.CalculationCreateParams.CustomerDetails.Address;
        export type AddressSource = Stripe_.Tax.CalculationCreateParams.CustomerDetails.AddressSource;
        export type TaxId = Stripe_.Tax.CalculationCreateParams.CustomerDetails.TaxId;
        export type TaxabilityOverride = Stripe_.Tax.CalculationCreateParams.CustomerDetails.TaxabilityOverride;
        export namespace TaxId {
          export type Type = Stripe_.Tax.CalculationCreateParams.CustomerDetails.TaxId.Type;
        }
      }
      export namespace LineItem {
        export type TaxBehavior = Stripe_.Tax.CalculationCreateParams.LineItem.TaxBehavior;
      }
      export namespace ShipFromDetails {
        export type Address = Stripe_.Tax.CalculationCreateParams.ShipFromDetails.Address;
      }
      export namespace ShippingCost {
        export type TaxBehavior = Stripe_.Tax.CalculationCreateParams.ShippingCost.TaxBehavior;
      }
    }
    export namespace Calculation {
      export type CustomerDetails = Stripe_.Tax.Calculation.CustomerDetails;
      export type ShipFromDetails = Stripe_.Tax.Calculation.ShipFromDetails;
      export type ShippingCost = Stripe_.Tax.Calculation.ShippingCost;
      export type TaxBreakdown = Stripe_.Tax.Calculation.TaxBreakdown;
      export namespace CustomerDetails {
        export type AddressSource = Stripe_.Tax.Calculation.CustomerDetails.AddressSource;
        export type TaxId = Stripe_.Tax.Calculation.CustomerDetails.TaxId;
        export type TaxabilityOverride = Stripe_.Tax.Calculation.CustomerDetails.TaxabilityOverride;
        export namespace TaxId {
          export type Type = Stripe_.Tax.Calculation.CustomerDetails.TaxId.Type;
        }
      }
      export namespace ShippingCost {
        export type TaxBehavior = Stripe_.Tax.Calculation.ShippingCost.TaxBehavior;
        export type TaxBreakdown = Stripe_.Tax.Calculation.ShippingCost.TaxBreakdown;
        export namespace TaxBreakdown {
          export type Jurisdiction = Stripe_.Tax.Calculation.ShippingCost.TaxBreakdown.Jurisdiction;
          export type Sourcing = Stripe_.Tax.Calculation.ShippingCost.TaxBreakdown.Sourcing;
          export type TaxRateDetails = Stripe_.Tax.Calculation.ShippingCost.TaxBreakdown.TaxRateDetails;
          export type TaxabilityReason = Stripe_.Tax.Calculation.ShippingCost.TaxBreakdown.TaxabilityReason;
          export namespace Jurisdiction {
            export type Level = Stripe_.Tax.Calculation.ShippingCost.TaxBreakdown.Jurisdiction.Level;
          }
          export namespace TaxRateDetails {
            export type TaxType = Stripe_.Tax.Calculation.ShippingCost.TaxBreakdown.TaxRateDetails.TaxType;
          }
        }
      }
      export namespace TaxBreakdown {
        export type TaxRateDetails = Stripe_.Tax.Calculation.TaxBreakdown.TaxRateDetails;
        export type TaxabilityReason = Stripe_.Tax.Calculation.TaxBreakdown.TaxabilityReason;
        export namespace TaxRateDetails {
          export type FlatAmount = Stripe_.Tax.Calculation.TaxBreakdown.TaxRateDetails.FlatAmount;
          export type RateType = Stripe_.Tax.Calculation.TaxBreakdown.TaxRateDetails.RateType;
          export type TaxType = Stripe_.Tax.Calculation.TaxBreakdown.TaxRateDetails.TaxType;
        }
      }
    }
    export namespace RegistrationCreateParams {
      export type CountryOptions = Stripe_.Tax.RegistrationCreateParams.CountryOptions;
      export namespace CountryOptions {
        export type Ae = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ae;
        export type Al = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Al;
        export type Am = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Am;
        export type Ao = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ao;
        export type At = Stripe_.Tax.RegistrationCreateParams.CountryOptions.At;
        export type Au = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Au;
        export type Aw = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Aw;
        export type Az = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Az;
        export type Ba = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ba;
        export type Bb = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bb;
        export type Bd = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bd;
        export type Be = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Be;
        export type Bf = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bf;
        export type Bg = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bg;
        export type Bh = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bh;
        export type Bj = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bj;
        export type Bs = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bs;
        export type By = Stripe_.Tax.RegistrationCreateParams.CountryOptions.By;
        export type Ca = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ca;
        export type Cd = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Cd;
        export type Ch = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ch;
        export type Cl = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Cl;
        export type Cm = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Cm;
        export type Co = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Co;
        export type Cr = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Cr;
        export type Cv = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Cv;
        export type Cy = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Cy;
        export type Cz = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Cz;
        export type De = Stripe_.Tax.RegistrationCreateParams.CountryOptions.De;
        export type Dk = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Dk;
        export type Ec = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ec;
        export type Ee = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ee;
        export type Eg = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Eg;
        export type Es = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Es;
        export type Et = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Et;
        export type Fi = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Fi;
        export type Fr = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Fr;
        export type Gb = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Gb;
        export type Ge = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ge;
        export type Gn = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Gn;
        export type Gr = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Gr;
        export type Hr = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Hr;
        export type Hu = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Hu;
        export type Id = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Id;
        export type Ie = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ie;
        export type In = Stripe_.Tax.RegistrationCreateParams.CountryOptions.In;
        export type Is = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Is;
        export type It = Stripe_.Tax.RegistrationCreateParams.CountryOptions.It;
        export type Jp = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Jp;
        export type Ke = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ke;
        export type Kg = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Kg;
        export type Kh = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Kh;
        export type Kr = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Kr;
        export type Kz = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Kz;
        export type La = Stripe_.Tax.RegistrationCreateParams.CountryOptions.La;
        export type Lk = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Lk;
        export type Lt = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Lt;
        export type Lu = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Lu;
        export type Lv = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Lv;
        export type Ma = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ma;
        export type Md = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Md;
        export type Me = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Me;
        export type Mk = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Mk;
        export type Mr = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Mr;
        export type Mt = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Mt;
        export type Mx = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Mx;
        export type My = Stripe_.Tax.RegistrationCreateParams.CountryOptions.My;
        export type Ng = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ng;
        export type Nl = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Nl;
        export type No = Stripe_.Tax.RegistrationCreateParams.CountryOptions.No;
        export type Np = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Np;
        export type Nz = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Nz;
        export type Om = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Om;
        export type Pe = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Pe;
        export type Ph = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ph;
        export type Pl = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Pl;
        export type Pt = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Pt;
        export type Ro = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ro;
        export type Rs = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Rs;
        export type Ru = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ru;
        export type Sa = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Sa;
        export type Se = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Se;
        export type Sg = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Sg;
        export type Si = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Si;
        export type Sk = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Sk;
        export type Sn = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Sn;
        export type Sr = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Sr;
        export type Th = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Th;
        export type Tj = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Tj;
        export type Tr = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Tr;
        export type Tw = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Tw;
        export type Tz = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Tz;
        export type Ua = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ua;
        export type Ug = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ug;
        export type Us = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Us;
        export type Uy = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Uy;
        export type Uz = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Uz;
        export type Vn = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Vn;
        export type Za = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Za;
        export type Zm = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Zm;
        export type Zw = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Zw;
        export namespace Ae {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ae.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ae.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Al {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Al.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Al.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ao {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ao.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ao.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace At {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.At.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.At.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.At.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Au {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Au.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Au.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Aw {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Aw.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Aw.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ba {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ba.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ba.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Bb {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bb.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bb.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Bd {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bd.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bd.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Be {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Be.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Be.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Be.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Bf {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bf.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bf.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Bg {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bg.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bg.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bg.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Bh {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bh.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bh.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Bs {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bs.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Bs.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ca {
          export type ProvinceStandard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ca.ProvinceStandard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ca.Type;
        }
        export namespace Cd {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Cd.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Cd.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ch {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ch.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ch.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Cy {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Cy.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Cy.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Cy.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Cz {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Cz.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Cz.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Cz.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace De {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.De.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.De.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.De.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Dk {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Dk.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Dk.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Dk.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ee {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ee.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ee.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ee.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Es {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Es.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Es.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Es.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Et {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Et.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Et.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Fi {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Fi.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Fi.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Fi.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Fr {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Fr.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Fr.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Fr.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Gb {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Gb.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Gb.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Gn {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Gn.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Gn.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Gr {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Gr.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Gr.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Gr.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Hr {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Hr.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Hr.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Hr.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Hu {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Hu.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Hu.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Hu.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ie {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ie.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ie.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ie.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Is {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Is.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Is.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace It {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.It.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.It.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.It.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Jp {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Jp.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Jp.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Lt {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Lt.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Lt.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Lt.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Lu {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Lu.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Lu.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Lu.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Lv {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Lv.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Lv.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Lv.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Me {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Me.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Me.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Mk {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Mk.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Mk.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Mr {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Mr.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Mr.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Mt {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Mt.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Mt.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Mt.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Nl {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Nl.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Nl.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Nl.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace No {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.No.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.No.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Nz {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Nz.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Nz.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Om {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Om.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Om.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Pl {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Pl.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Pl.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Pl.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Pt {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Pt.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Pt.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Pt.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ro {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ro.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ro.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Ro.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Rs {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Rs.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Rs.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Se {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Se.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Se.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Se.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Sg {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Sg.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Sg.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Si {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Si.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Si.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Si.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Sk {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Sk.Standard;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Sk.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Sk.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Sr {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Sr.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Sr.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Us {
          export type LocalAmusementTax = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Us.LocalAmusementTax;
          export type LocalLeaseTax = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Us.LocalLeaseTax;
          export type StateSalesTax = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Us.StateSalesTax;
          export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Us.Type;
          export namespace StateSalesTax {
            export type Election = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Us.StateSalesTax.Election;
            export namespace Election {
              export type Type = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Us.StateSalesTax.Election.Type;
            }
          }
        }
        export namespace Uy {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Uy.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Uy.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Za {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Za.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Za.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Zw {
          export type Standard = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Zw.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.RegistrationCreateParams.CountryOptions.Zw.Standard.PlaceOfSupplyScheme;
          }
        }
      }
    }
    export namespace Registration {
      export type CountryOptions = Stripe_.Tax.Registration.CountryOptions;
      export type Status = Stripe_.Tax.Registration.Status;
      export namespace CountryOptions {
        export type Ae = Stripe_.Tax.Registration.CountryOptions.Ae;
        export type Al = Stripe_.Tax.Registration.CountryOptions.Al;
        export type Am = Stripe_.Tax.Registration.CountryOptions.Am;
        export type Ao = Stripe_.Tax.Registration.CountryOptions.Ao;
        export type At = Stripe_.Tax.Registration.CountryOptions.At;
        export type Au = Stripe_.Tax.Registration.CountryOptions.Au;
        export type Aw = Stripe_.Tax.Registration.CountryOptions.Aw;
        export type Az = Stripe_.Tax.Registration.CountryOptions.Az;
        export type Ba = Stripe_.Tax.Registration.CountryOptions.Ba;
        export type Bb = Stripe_.Tax.Registration.CountryOptions.Bb;
        export type Bd = Stripe_.Tax.Registration.CountryOptions.Bd;
        export type Be = Stripe_.Tax.Registration.CountryOptions.Be;
        export type Bf = Stripe_.Tax.Registration.CountryOptions.Bf;
        export type Bg = Stripe_.Tax.Registration.CountryOptions.Bg;
        export type Bh = Stripe_.Tax.Registration.CountryOptions.Bh;
        export type Bj = Stripe_.Tax.Registration.CountryOptions.Bj;
        export type Bs = Stripe_.Tax.Registration.CountryOptions.Bs;
        export type By = Stripe_.Tax.Registration.CountryOptions.By;
        export type Ca = Stripe_.Tax.Registration.CountryOptions.Ca;
        export type Cd = Stripe_.Tax.Registration.CountryOptions.Cd;
        export type Ch = Stripe_.Tax.Registration.CountryOptions.Ch;
        export type Cl = Stripe_.Tax.Registration.CountryOptions.Cl;
        export type Cm = Stripe_.Tax.Registration.CountryOptions.Cm;
        export type Co = Stripe_.Tax.Registration.CountryOptions.Co;
        export type Cr = Stripe_.Tax.Registration.CountryOptions.Cr;
        export type Cv = Stripe_.Tax.Registration.CountryOptions.Cv;
        export type Cy = Stripe_.Tax.Registration.CountryOptions.Cy;
        export type Cz = Stripe_.Tax.Registration.CountryOptions.Cz;
        export type De = Stripe_.Tax.Registration.CountryOptions.De;
        export type Dk = Stripe_.Tax.Registration.CountryOptions.Dk;
        export type Ec = Stripe_.Tax.Registration.CountryOptions.Ec;
        export type Ee = Stripe_.Tax.Registration.CountryOptions.Ee;
        export type Eg = Stripe_.Tax.Registration.CountryOptions.Eg;
        export type Es = Stripe_.Tax.Registration.CountryOptions.Es;
        export type Et = Stripe_.Tax.Registration.CountryOptions.Et;
        export type Fi = Stripe_.Tax.Registration.CountryOptions.Fi;
        export type Fr = Stripe_.Tax.Registration.CountryOptions.Fr;
        export type Gb = Stripe_.Tax.Registration.CountryOptions.Gb;
        export type Ge = Stripe_.Tax.Registration.CountryOptions.Ge;
        export type Gn = Stripe_.Tax.Registration.CountryOptions.Gn;
        export type Gr = Stripe_.Tax.Registration.CountryOptions.Gr;
        export type Hr = Stripe_.Tax.Registration.CountryOptions.Hr;
        export type Hu = Stripe_.Tax.Registration.CountryOptions.Hu;
        export type Id = Stripe_.Tax.Registration.CountryOptions.Id;
        export type Ie = Stripe_.Tax.Registration.CountryOptions.Ie;
        export type In = Stripe_.Tax.Registration.CountryOptions.In;
        export type Is = Stripe_.Tax.Registration.CountryOptions.Is;
        export type It = Stripe_.Tax.Registration.CountryOptions.It;
        export type Jp = Stripe_.Tax.Registration.CountryOptions.Jp;
        export type Ke = Stripe_.Tax.Registration.CountryOptions.Ke;
        export type Kg = Stripe_.Tax.Registration.CountryOptions.Kg;
        export type Kh = Stripe_.Tax.Registration.CountryOptions.Kh;
        export type Kr = Stripe_.Tax.Registration.CountryOptions.Kr;
        export type Kz = Stripe_.Tax.Registration.CountryOptions.Kz;
        export type La = Stripe_.Tax.Registration.CountryOptions.La;
        export type Lk = Stripe_.Tax.Registration.CountryOptions.Lk;
        export type Lt = Stripe_.Tax.Registration.CountryOptions.Lt;
        export type Lu = Stripe_.Tax.Registration.CountryOptions.Lu;
        export type Lv = Stripe_.Tax.Registration.CountryOptions.Lv;
        export type Ma = Stripe_.Tax.Registration.CountryOptions.Ma;
        export type Md = Stripe_.Tax.Registration.CountryOptions.Md;
        export type Me = Stripe_.Tax.Registration.CountryOptions.Me;
        export type Mk = Stripe_.Tax.Registration.CountryOptions.Mk;
        export type Mr = Stripe_.Tax.Registration.CountryOptions.Mr;
        export type Mt = Stripe_.Tax.Registration.CountryOptions.Mt;
        export type Mx = Stripe_.Tax.Registration.CountryOptions.Mx;
        export type My = Stripe_.Tax.Registration.CountryOptions.My;
        export type Ng = Stripe_.Tax.Registration.CountryOptions.Ng;
        export type Nl = Stripe_.Tax.Registration.CountryOptions.Nl;
        export type No = Stripe_.Tax.Registration.CountryOptions.No;
        export type Np = Stripe_.Tax.Registration.CountryOptions.Np;
        export type Nz = Stripe_.Tax.Registration.CountryOptions.Nz;
        export type Om = Stripe_.Tax.Registration.CountryOptions.Om;
        export type Pe = Stripe_.Tax.Registration.CountryOptions.Pe;
        export type Ph = Stripe_.Tax.Registration.CountryOptions.Ph;
        export type Pl = Stripe_.Tax.Registration.CountryOptions.Pl;
        export type Pt = Stripe_.Tax.Registration.CountryOptions.Pt;
        export type Ro = Stripe_.Tax.Registration.CountryOptions.Ro;
        export type Rs = Stripe_.Tax.Registration.CountryOptions.Rs;
        export type Ru = Stripe_.Tax.Registration.CountryOptions.Ru;
        export type Sa = Stripe_.Tax.Registration.CountryOptions.Sa;
        export type Se = Stripe_.Tax.Registration.CountryOptions.Se;
        export type Sg = Stripe_.Tax.Registration.CountryOptions.Sg;
        export type Si = Stripe_.Tax.Registration.CountryOptions.Si;
        export type Sk = Stripe_.Tax.Registration.CountryOptions.Sk;
        export type Sn = Stripe_.Tax.Registration.CountryOptions.Sn;
        export type Sr = Stripe_.Tax.Registration.CountryOptions.Sr;
        export type Th = Stripe_.Tax.Registration.CountryOptions.Th;
        export type Tj = Stripe_.Tax.Registration.CountryOptions.Tj;
        export type Tr = Stripe_.Tax.Registration.CountryOptions.Tr;
        export type Tw = Stripe_.Tax.Registration.CountryOptions.Tw;
        export type Tz = Stripe_.Tax.Registration.CountryOptions.Tz;
        export type Ua = Stripe_.Tax.Registration.CountryOptions.Ua;
        export type Ug = Stripe_.Tax.Registration.CountryOptions.Ug;
        export type Us = Stripe_.Tax.Registration.CountryOptions.Us;
        export type Uy = Stripe_.Tax.Registration.CountryOptions.Uy;
        export type Uz = Stripe_.Tax.Registration.CountryOptions.Uz;
        export type Vn = Stripe_.Tax.Registration.CountryOptions.Vn;
        export type Za = Stripe_.Tax.Registration.CountryOptions.Za;
        export type Zm = Stripe_.Tax.Registration.CountryOptions.Zm;
        export type Zw = Stripe_.Tax.Registration.CountryOptions.Zw;
        export namespace Ae {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Ae.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Ae.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace At {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.At.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.At.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.At.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Au {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Au.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Au.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Be {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Be.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Be.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Be.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Bg {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Bg.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Bg.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Bg.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ca {
          export type ProvinceStandard = Stripe_.Tax.Registration.CountryOptions.Ca.ProvinceStandard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Ca.Type;
        }
        export namespace Ch {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Ch.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Ch.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Cy {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Cy.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Cy.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Cy.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Cz {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Cz.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Cz.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Cz.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace De {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.De.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.De.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.De.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Dk {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Dk.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Dk.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Dk.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ee {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Ee.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Ee.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Ee.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Es {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Es.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Es.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Es.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Fi {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Fi.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Fi.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Fi.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Fr {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Fr.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Fr.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Fr.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Gb {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Gb.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Gb.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Gr {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Gr.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Gr.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Gr.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Hr {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Hr.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Hr.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Hr.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Hu {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Hu.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Hu.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Hu.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ie {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Ie.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Ie.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Ie.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace It {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.It.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.It.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.It.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Jp {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Jp.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Jp.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Lt {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Lt.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Lt.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Lt.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Lu {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Lu.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Lu.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Lu.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Lv {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Lv.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Lv.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Lv.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Mt {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Mt.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Mt.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Mt.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Nl {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Nl.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Nl.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Nl.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace No {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.No.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.No.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Nz {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Nz.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Nz.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Pl {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Pl.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Pl.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Pl.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Pt {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Pt.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Pt.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Pt.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ro {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Ro.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Ro.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Ro.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Se {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Se.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Se.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Se.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Sg {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Sg.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Sg.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Si {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Si.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Si.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Si.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Sk {
          export type Standard = Stripe_.Tax.Registration.CountryOptions.Sk.Standard;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Sk.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe_.Tax.Registration.CountryOptions.Sk.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Us {
          export type LocalAmusementTax = Stripe_.Tax.Registration.CountryOptions.Us.LocalAmusementTax;
          export type LocalLeaseTax = Stripe_.Tax.Registration.CountryOptions.Us.LocalLeaseTax;
          export type StateSalesTax = Stripe_.Tax.Registration.CountryOptions.Us.StateSalesTax;
          export type Type = Stripe_.Tax.Registration.CountryOptions.Us.Type;
          export namespace StateSalesTax {
            export type Election = Stripe_.Tax.Registration.CountryOptions.Us.StateSalesTax.Election;
            export namespace Election {
              export type Type = Stripe_.Tax.Registration.CountryOptions.Us.StateSalesTax.Election.Type;
            }
          }
        }
      }
    }
    export namespace Settings {
      export type Defaults = Stripe_.Tax.Settings.Defaults;
      export type HeadOffice = Stripe_.Tax.Settings.HeadOffice;
      export type Status = Stripe_.Tax.Settings.Status;
      export type StatusDetails = Stripe_.Tax.Settings.StatusDetails;
      export namespace Defaults {
        export type Provider = Stripe_.Tax.Settings.Defaults.Provider;
        export type TaxBehavior = Stripe_.Tax.Settings.Defaults.TaxBehavior;
      }
      export namespace StatusDetails {
        export type Active = Stripe_.Tax.Settings.StatusDetails.Active;
        export type Pending = Stripe_.Tax.Settings.StatusDetails.Pending;
      }
    }
    export namespace Transaction {
      export type CustomerDetails = Stripe_.Tax.Transaction.CustomerDetails;
      export type Reversal = Stripe_.Tax.Transaction.Reversal;
      export type ShipFromDetails = Stripe_.Tax.Transaction.ShipFromDetails;
      export type ShippingCost = Stripe_.Tax.Transaction.ShippingCost;
      export type Type = Stripe_.Tax.Transaction.Type;
      export namespace CustomerDetails {
        export type AddressSource = Stripe_.Tax.Transaction.CustomerDetails.AddressSource;
        export type TaxId = Stripe_.Tax.Transaction.CustomerDetails.TaxId;
        export type TaxabilityOverride = Stripe_.Tax.Transaction.CustomerDetails.TaxabilityOverride;
        export namespace TaxId {
          export type Type = Stripe_.Tax.Transaction.CustomerDetails.TaxId.Type;
        }
      }
      export namespace ShippingCost {
        export type TaxBehavior = Stripe_.Tax.Transaction.ShippingCost.TaxBehavior;
        export type TaxBreakdown = Stripe_.Tax.Transaction.ShippingCost.TaxBreakdown;
        export namespace TaxBreakdown {
          export type Jurisdiction = Stripe_.Tax.Transaction.ShippingCost.TaxBreakdown.Jurisdiction;
          export type Sourcing = Stripe_.Tax.Transaction.ShippingCost.TaxBreakdown.Sourcing;
          export type TaxRateDetails = Stripe_.Tax.Transaction.ShippingCost.TaxBreakdown.TaxRateDetails;
          export type TaxabilityReason = Stripe_.Tax.Transaction.ShippingCost.TaxBreakdown.TaxabilityReason;
          export namespace Jurisdiction {
            export type Level = Stripe_.Tax.Transaction.ShippingCost.TaxBreakdown.Jurisdiction.Level;
          }
          export namespace TaxRateDetails {
            export type TaxType = Stripe_.Tax.Transaction.ShippingCost.TaxBreakdown.TaxRateDetails.TaxType;
          }
        }
      }
    }
    export namespace CalculationLineItem {
      export type TaxBehavior = Stripe_.Tax.CalculationLineItem.TaxBehavior;
      export type TaxBreakdown = Stripe_.Tax.CalculationLineItem.TaxBreakdown;
      export namespace TaxBreakdown {
        export type Jurisdiction = Stripe_.Tax.CalculationLineItem.TaxBreakdown.Jurisdiction;
        export type Sourcing = Stripe_.Tax.CalculationLineItem.TaxBreakdown.Sourcing;
        export type TaxRateDetails = Stripe_.Tax.CalculationLineItem.TaxBreakdown.TaxRateDetails;
        export type TaxabilityReason = Stripe_.Tax.CalculationLineItem.TaxBreakdown.TaxabilityReason;
        export namespace Jurisdiction {
          export type Level = Stripe_.Tax.CalculationLineItem.TaxBreakdown.Jurisdiction.Level;
        }
        export namespace TaxRateDetails {
          export type TaxType = Stripe_.Tax.CalculationLineItem.TaxBreakdown.TaxRateDetails.TaxType;
        }
      }
    }
    export namespace TransactionLineItem {
      export type Reversal = Stripe_.Tax.TransactionLineItem.Reversal;
      export type TaxBehavior = Stripe_.Tax.TransactionLineItem.TaxBehavior;
      export type Type = Stripe_.Tax.TransactionLineItem.Type;
    }
  }
  export namespace Terminal {
    export type Configuration = Stripe_.Terminal.Configuration;
    export type DeletedConfiguration = Stripe_.Terminal.DeletedConfiguration;
    export type ConfigurationCreateParams = Stripe_.Terminal.ConfigurationCreateParams;
    export type ConfigurationRetrieveParams = Stripe_.Terminal.ConfigurationRetrieveParams;
    export type ConfigurationUpdateParams = Stripe_.Terminal.ConfigurationUpdateParams;
    export type ConfigurationListParams = Stripe_.Terminal.ConfigurationListParams;
    export type ConfigurationDeleteParams = Stripe_.Terminal.ConfigurationDeleteParams;
    export type ConfigurationResource = Stripe_.Terminal.ConfigurationResource;
    export type ConnectionToken = Stripe_.Terminal.ConnectionToken;
    export type ConnectionTokenCreateParams = Stripe_.Terminal.ConnectionTokenCreateParams;
    export type ConnectionTokenResource = Stripe_.Terminal.ConnectionTokenResource;
    export type Location = Stripe_.Terminal.Location;
    export type DeletedLocation = Stripe_.Terminal.DeletedLocation;
    export type LocationCreateParams = Stripe_.Terminal.LocationCreateParams;
    export type LocationRetrieveParams = Stripe_.Terminal.LocationRetrieveParams;
    export type LocationUpdateParams = Stripe_.Terminal.LocationUpdateParams;
    export type LocationListParams = Stripe_.Terminal.LocationListParams;
    export type LocationDeleteParams = Stripe_.Terminal.LocationDeleteParams;
    export type LocationResource = Stripe_.Terminal.LocationResource;
    export type OnboardingLink = Stripe_.Terminal.OnboardingLink;
    export type OnboardingLinkCreateParams = Stripe_.Terminal.OnboardingLinkCreateParams;
    export type OnboardingLinkResource = Stripe_.Terminal.OnboardingLinkResource;
    export type Reader = Stripe_.Terminal.Reader;
    export type DeletedReader = Stripe_.Terminal.DeletedReader;
    export type ReaderCreateParams = Stripe_.Terminal.ReaderCreateParams;
    export type ReaderRetrieveParams = Stripe_.Terminal.ReaderRetrieveParams;
    export type ReaderUpdateParams = Stripe_.Terminal.ReaderUpdateParams;
    export type ReaderListParams = Stripe_.Terminal.ReaderListParams;
    export type ReaderDeleteParams = Stripe_.Terminal.ReaderDeleteParams;
    export type ReaderCancelActionParams = Stripe_.Terminal.ReaderCancelActionParams;
    export type ReaderCollectInputsParams = Stripe_.Terminal.ReaderCollectInputsParams;
    export type ReaderCollectPaymentMethodParams = Stripe_.Terminal.ReaderCollectPaymentMethodParams;
    export type ReaderConfirmPaymentIntentParams = Stripe_.Terminal.ReaderConfirmPaymentIntentParams;
    export type ReaderProcessPaymentIntentParams = Stripe_.Terminal.ReaderProcessPaymentIntentParams;
    export type ReaderProcessSetupIntentParams = Stripe_.Terminal.ReaderProcessSetupIntentParams;
    export type ReaderRefundPaymentParams = Stripe_.Terminal.ReaderRefundPaymentParams;
    export type ReaderSetReaderDisplayParams = Stripe_.Terminal.ReaderSetReaderDisplayParams;
    export type ReaderResource = Stripe_.Terminal.ReaderResource;
    export namespace ConfigurationCreateParams {
      export type BbposWisepad3 = Stripe_.Terminal.ConfigurationCreateParams.BbposWisepad3;
      export type BbposWiseposE = Stripe_.Terminal.ConfigurationCreateParams.BbposWiseposE;
      export type Cellular = Stripe_.Terminal.ConfigurationCreateParams.Cellular;
      export type Offline = Stripe_.Terminal.ConfigurationCreateParams.Offline;
      export type RebootWindow = Stripe_.Terminal.ConfigurationCreateParams.RebootWindow;
      export type StripeS700 = Stripe_.Terminal.ConfigurationCreateParams.StripeS700;
      export type StripeS710 = Stripe_.Terminal.ConfigurationCreateParams.StripeS710;
      export type Tipping = Stripe_.Terminal.ConfigurationCreateParams.Tipping;
      export type VerifoneM425 = Stripe_.Terminal.ConfigurationCreateParams.VerifoneM425;
      export type VerifoneP400 = Stripe_.Terminal.ConfigurationCreateParams.VerifoneP400;
      export type VerifoneP630 = Stripe_.Terminal.ConfigurationCreateParams.VerifoneP630;
      export type VerifoneUx700 = Stripe_.Terminal.ConfigurationCreateParams.VerifoneUx700;
      export type VerifoneV660p = Stripe_.Terminal.ConfigurationCreateParams.VerifoneV660p;
      export type Wifi = Stripe_.Terminal.ConfigurationCreateParams.Wifi;
      export namespace Tipping {
        export type Aed = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Aed;
        export type Aud = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Aud;
        export type Cad = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Cad;
        export type Chf = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Chf;
        export type Czk = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Czk;
        export type Dkk = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Dkk;
        export type Eur = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Eur;
        export type Gbp = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Gbp;
        export type Gip = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Gip;
        export type Hkd = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Hkd;
        export type Huf = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Huf;
        export type Jpy = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Jpy;
        export type Mxn = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Mxn;
        export type Myr = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Myr;
        export type Nok = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Nok;
        export type Nzd = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Nzd;
        export type Pln = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Pln;
        export type Ron = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Ron;
        export type Sek = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Sek;
        export type Sgd = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Sgd;
        export type Usd = Stripe_.Terminal.ConfigurationCreateParams.Tipping.Usd;
      }
      export namespace Wifi {
        export type EnterpriseEapPeap = Stripe_.Terminal.ConfigurationCreateParams.Wifi.EnterpriseEapPeap;
        export type EnterpriseEapTls = Stripe_.Terminal.ConfigurationCreateParams.Wifi.EnterpriseEapTls;
        export type PersonalPsk = Stripe_.Terminal.ConfigurationCreateParams.Wifi.PersonalPsk;
        export type Type = Stripe_.Terminal.ConfigurationCreateParams.Wifi.Type;
      }
    }
    export namespace Configuration {
      export type BbposWisepad3 = Stripe_.Terminal.Configuration.BbposWisepad3;
      export type BbposWiseposE = Stripe_.Terminal.Configuration.BbposWiseposE;
      export type Cellular = Stripe_.Terminal.Configuration.Cellular;
      export type Offline = Stripe_.Terminal.Configuration.Offline;
      export type RebootWindow = Stripe_.Terminal.Configuration.RebootWindow;
      export type StripeS700 = Stripe_.Terminal.Configuration.StripeS700;
      export type StripeS710 = Stripe_.Terminal.Configuration.StripeS710;
      export type Tipping = Stripe_.Terminal.Configuration.Tipping;
      export type VerifoneM425 = Stripe_.Terminal.Configuration.VerifoneM425;
      export type VerifoneP400 = Stripe_.Terminal.Configuration.VerifoneP400;
      export type VerifoneP630 = Stripe_.Terminal.Configuration.VerifoneP630;
      export type VerifoneUx700 = Stripe_.Terminal.Configuration.VerifoneUx700;
      export type VerifoneV660p = Stripe_.Terminal.Configuration.VerifoneV660p;
      export type Wifi = Stripe_.Terminal.Configuration.Wifi;
      export namespace Tipping {
        export type Aed = Stripe_.Terminal.Configuration.Tipping.Aed;
        export type Aud = Stripe_.Terminal.Configuration.Tipping.Aud;
        export type Cad = Stripe_.Terminal.Configuration.Tipping.Cad;
        export type Chf = Stripe_.Terminal.Configuration.Tipping.Chf;
        export type Czk = Stripe_.Terminal.Configuration.Tipping.Czk;
        export type Dkk = Stripe_.Terminal.Configuration.Tipping.Dkk;
        export type Eur = Stripe_.Terminal.Configuration.Tipping.Eur;
        export type Gbp = Stripe_.Terminal.Configuration.Tipping.Gbp;
        export type Gip = Stripe_.Terminal.Configuration.Tipping.Gip;
        export type Hkd = Stripe_.Terminal.Configuration.Tipping.Hkd;
        export type Huf = Stripe_.Terminal.Configuration.Tipping.Huf;
        export type Jpy = Stripe_.Terminal.Configuration.Tipping.Jpy;
        export type Mxn = Stripe_.Terminal.Configuration.Tipping.Mxn;
        export type Myr = Stripe_.Terminal.Configuration.Tipping.Myr;
        export type Nok = Stripe_.Terminal.Configuration.Tipping.Nok;
        export type Nzd = Stripe_.Terminal.Configuration.Tipping.Nzd;
        export type Pln = Stripe_.Terminal.Configuration.Tipping.Pln;
        export type Ron = Stripe_.Terminal.Configuration.Tipping.Ron;
        export type Sek = Stripe_.Terminal.Configuration.Tipping.Sek;
        export type Sgd = Stripe_.Terminal.Configuration.Tipping.Sgd;
        export type Usd = Stripe_.Terminal.Configuration.Tipping.Usd;
      }
      export namespace Wifi {
        export type EnterpriseEapPeap = Stripe_.Terminal.Configuration.Wifi.EnterpriseEapPeap;
        export type EnterpriseEapTls = Stripe_.Terminal.Configuration.Wifi.EnterpriseEapTls;
        export type PersonalPsk = Stripe_.Terminal.Configuration.Wifi.PersonalPsk;
        export type Type = Stripe_.Terminal.Configuration.Wifi.Type;
      }
    }
    export namespace LocationCreateParams {
      export type Address = Stripe_.Terminal.LocationCreateParams.Address;
    }
    export namespace Location {
      export type AddressKana = Stripe_.Terminal.Location.AddressKana;
      export type AddressKanji = Stripe_.Terminal.Location.AddressKanji;
    }
    export namespace OnboardingLinkCreateParams {
      export type LinkOptions = Stripe_.Terminal.OnboardingLinkCreateParams.LinkOptions;
      export namespace LinkOptions {
        export type AppleTermsAndConditions = Stripe_.Terminal.OnboardingLinkCreateParams.LinkOptions.AppleTermsAndConditions;
      }
    }
    export namespace OnboardingLink {
      export type LinkOptions = Stripe_.Terminal.OnboardingLink.LinkOptions;
      export namespace LinkOptions {
        export type AppleTermsAndConditions = Stripe_.Terminal.OnboardingLink.LinkOptions.AppleTermsAndConditions;
      }
    }
    export namespace DeletedReader {
      export type DeviceType = Stripe_.Terminal.DeletedReader.DeviceType;
    }
    export namespace Reader {
      export type Action = Stripe_.Terminal.Reader.Action;
      export type DeviceType = Stripe_.Terminal.Reader.DeviceType;
      export type Status = Stripe_.Terminal.Reader.Status;
      export namespace Action {
        export type ApiError = Stripe_.Terminal.Reader.Action.ApiError;
        export type CollectInputs = Stripe_.Terminal.Reader.Action.CollectInputs;
        export type CollectPaymentMethod = Stripe_.Terminal.Reader.Action.CollectPaymentMethod;
        export type ConfirmPaymentIntent = Stripe_.Terminal.Reader.Action.ConfirmPaymentIntent;
        export type PrintContent = Stripe_.Terminal.Reader.Action.PrintContent;
        export type ProcessPaymentIntent = Stripe_.Terminal.Reader.Action.ProcessPaymentIntent;
        export type ProcessSetupIntent = Stripe_.Terminal.Reader.Action.ProcessSetupIntent;
        export type RefundPayment = Stripe_.Terminal.Reader.Action.RefundPayment;
        export type SetReaderDisplay = Stripe_.Terminal.Reader.Action.SetReaderDisplay;
        export type Status = Stripe_.Terminal.Reader.Action.Status;
        export type Type = Stripe_.Terminal.Reader.Action.Type;
        export namespace ApiError {
          export type Code = Stripe_.Terminal.Reader.Action.ApiError.Code;
          export type Type = Stripe_.Terminal.Reader.Action.ApiError.Type;
        }
        export namespace CollectInputs {
          export type Input = Stripe_.Terminal.Reader.Action.CollectInputs.Input;
          export namespace Input {
            export type CustomText = Stripe_.Terminal.Reader.Action.CollectInputs.Input.CustomText;
            export type Email = Stripe_.Terminal.Reader.Action.CollectInputs.Input.Email;
            export type Numeric = Stripe_.Terminal.Reader.Action.CollectInputs.Input.Numeric;
            export type Phone = Stripe_.Terminal.Reader.Action.CollectInputs.Input.Phone;
            export type Selection = Stripe_.Terminal.Reader.Action.CollectInputs.Input.Selection;
            export type Signature = Stripe_.Terminal.Reader.Action.CollectInputs.Input.Signature;
            export type Text = Stripe_.Terminal.Reader.Action.CollectInputs.Input.Text;
            export type Toggle = Stripe_.Terminal.Reader.Action.CollectInputs.Input.Toggle;
            export type Type = Stripe_.Terminal.Reader.Action.CollectInputs.Input.Type;
            export namespace Selection {
              export type Choice = Stripe_.Terminal.Reader.Action.CollectInputs.Input.Selection.Choice;
              export namespace Choice {
                export type Style = Stripe_.Terminal.Reader.Action.CollectInputs.Input.Selection.Choice.Style;
              }
            }
            export namespace Toggle {
              export type DefaultValue = Stripe_.Terminal.Reader.Action.CollectInputs.Input.Toggle.DefaultValue;
              export type Value = Stripe_.Terminal.Reader.Action.CollectInputs.Input.Toggle.Value;
            }
          }
        }
        export namespace CollectPaymentMethod {
          export type CollectConfig = Stripe_.Terminal.Reader.Action.CollectPaymentMethod.CollectConfig;
          export namespace CollectConfig {
            export type Tipping = Stripe_.Terminal.Reader.Action.CollectPaymentMethod.CollectConfig.Tipping;
          }
        }
        export namespace ConfirmPaymentIntent {
          export type ConfirmConfig = Stripe_.Terminal.Reader.Action.ConfirmPaymentIntent.ConfirmConfig;
        }
        export namespace PrintContent {
          export type Image = Stripe_.Terminal.Reader.Action.PrintContent.Image;
        }
        export namespace ProcessPaymentIntent {
          export type ProcessConfig = Stripe_.Terminal.Reader.Action.ProcessPaymentIntent.ProcessConfig;
          export namespace ProcessConfig {
            export type Tipping = Stripe_.Terminal.Reader.Action.ProcessPaymentIntent.ProcessConfig.Tipping;
          }
        }
        export namespace ProcessSetupIntent {
          export type ProcessConfig = Stripe_.Terminal.Reader.Action.ProcessSetupIntent.ProcessConfig;
        }
        export namespace RefundPayment {
          export type Reason = Stripe_.Terminal.Reader.Action.RefundPayment.Reason;
          export type RefundPaymentConfig = Stripe_.Terminal.Reader.Action.RefundPayment.RefundPaymentConfig;
        }
        export namespace SetReaderDisplay {
          export type Cart = Stripe_.Terminal.Reader.Action.SetReaderDisplay.Cart;
          export namespace Cart {
            export type LineItem = Stripe_.Terminal.Reader.Action.SetReaderDisplay.Cart.LineItem;
          }
        }
      }
    }
  }
  export namespace TestHelpers {
    export type TestClock = Stripe_.TestHelpers.TestClock;
    export type DeletedTestClock = Stripe_.TestHelpers.DeletedTestClock;
    export type TestClockCreateParams = Stripe_.TestHelpers.TestClockCreateParams;
    export type TestClockRetrieveParams = Stripe_.TestHelpers.TestClockRetrieveParams;
    export type TestClockListParams = Stripe_.TestHelpers.TestClockListParams;
    export type TestClockDeleteParams = Stripe_.TestHelpers.TestClockDeleteParams;
    export type TestClockAdvanceParams = Stripe_.TestHelpers.TestClockAdvanceParams;
    export type TestClockResource = Stripe_.TestHelpers.TestClockResource;
    export namespace TestClock {
      export type Status = Stripe_.TestHelpers.TestClock.Status;
      export type StatusDetails = Stripe_.TestHelpers.TestClock.StatusDetails;
      export namespace StatusDetails {
        export type Advancing = Stripe_.TestHelpers.TestClock.StatusDetails.Advancing;
      }
    }
  }
  export namespace Treasury {
    export type CreditReversal = Stripe_.Treasury.CreditReversal;
    export type CreditReversalCreateParams = Stripe_.Treasury.CreditReversalCreateParams;
    export type CreditReversalRetrieveParams = Stripe_.Treasury.CreditReversalRetrieveParams;
    export type CreditReversalListParams = Stripe_.Treasury.CreditReversalListParams;
    export type CreditReversalResource = Stripe_.Treasury.CreditReversalResource;
    export type DebitReversal = Stripe_.Treasury.DebitReversal;
    export type DebitReversalCreateParams = Stripe_.Treasury.DebitReversalCreateParams;
    export type DebitReversalRetrieveParams = Stripe_.Treasury.DebitReversalRetrieveParams;
    export type DebitReversalListParams = Stripe_.Treasury.DebitReversalListParams;
    export type DebitReversalResource = Stripe_.Treasury.DebitReversalResource;
    export type FinancialAccount = Stripe_.Treasury.FinancialAccount;
    export type FinancialAccountCreateParams = Stripe_.Treasury.FinancialAccountCreateParams;
    export type FinancialAccountRetrieveParams = Stripe_.Treasury.FinancialAccountRetrieveParams;
    export type FinancialAccountUpdateParams = Stripe_.Treasury.FinancialAccountUpdateParams;
    export type FinancialAccountListParams = Stripe_.Treasury.FinancialAccountListParams;
    export type FinancialAccountCloseParams = Stripe_.Treasury.FinancialAccountCloseParams;
    export type FinancialAccountRetrieveFeaturesParams = Stripe_.Treasury.FinancialAccountRetrieveFeaturesParams;
    export type FinancialAccountUpdateFeaturesParams = Stripe_.Treasury.FinancialAccountUpdateFeaturesParams;
    export type FinancialAccountResource = Stripe_.Treasury.FinancialAccountResource;
    export type InboundTransfer = Stripe_.Treasury.InboundTransfer;
    export type InboundTransferCreateParams = Stripe_.Treasury.InboundTransferCreateParams;
    export type InboundTransferRetrieveParams = Stripe_.Treasury.InboundTransferRetrieveParams;
    export type InboundTransferListParams = Stripe_.Treasury.InboundTransferListParams;
    export type InboundTransferCancelParams = Stripe_.Treasury.InboundTransferCancelParams;
    export type InboundTransferResource = Stripe_.Treasury.InboundTransferResource;
    export type OutboundPayment = Stripe_.Treasury.OutboundPayment;
    export type OutboundPaymentCreateParams = Stripe_.Treasury.OutboundPaymentCreateParams;
    export type OutboundPaymentRetrieveParams = Stripe_.Treasury.OutboundPaymentRetrieveParams;
    export type OutboundPaymentListParams = Stripe_.Treasury.OutboundPaymentListParams;
    export type OutboundPaymentCancelParams = Stripe_.Treasury.OutboundPaymentCancelParams;
    export type OutboundPaymentResource = Stripe_.Treasury.OutboundPaymentResource;
    export type OutboundTransfer = Stripe_.Treasury.OutboundTransfer;
    export type OutboundTransferCreateParams = Stripe_.Treasury.OutboundTransferCreateParams;
    export type OutboundTransferRetrieveParams = Stripe_.Treasury.OutboundTransferRetrieveParams;
    export type OutboundTransferListParams = Stripe_.Treasury.OutboundTransferListParams;
    export type OutboundTransferCancelParams = Stripe_.Treasury.OutboundTransferCancelParams;
    export type OutboundTransferResource = Stripe_.Treasury.OutboundTransferResource;
    export type ReceivedCredit = Stripe_.Treasury.ReceivedCredit;
    export type ReceivedCreditRetrieveParams = Stripe_.Treasury.ReceivedCreditRetrieveParams;
    export type ReceivedCreditListParams = Stripe_.Treasury.ReceivedCreditListParams;
    export type ReceivedCreditResource = Stripe_.Treasury.ReceivedCreditResource;
    export type ReceivedDebit = Stripe_.Treasury.ReceivedDebit;
    export type ReceivedDebitRetrieveParams = Stripe_.Treasury.ReceivedDebitRetrieveParams;
    export type ReceivedDebitListParams = Stripe_.Treasury.ReceivedDebitListParams;
    export type ReceivedDebitResource = Stripe_.Treasury.ReceivedDebitResource;
    export type Transaction = Stripe_.Treasury.Transaction;
    export type TransactionRetrieveParams = Stripe_.Treasury.TransactionRetrieveParams;
    export type TransactionListParams = Stripe_.Treasury.TransactionListParams;
    export type TransactionResource = Stripe_.Treasury.TransactionResource;
    export type TransactionEntry = Stripe_.Treasury.TransactionEntry;
    export type TransactionEntryRetrieveParams = Stripe_.Treasury.TransactionEntryRetrieveParams;
    export type TransactionEntryListParams = Stripe_.Treasury.TransactionEntryListParams;
    export type TransactionEntryResource = Stripe_.Treasury.TransactionEntryResource;
    export type FinancialAccountFeatures = Stripe_.Treasury.FinancialAccountFeatures;
    export namespace CreditReversal {
      export type Network = Stripe_.Treasury.CreditReversal.Network;
      export type Status = Stripe_.Treasury.CreditReversal.Status;
      export type StatusTransitions = Stripe_.Treasury.CreditReversal.StatusTransitions;
    }
    export namespace DebitReversal {
      export type LinkedFlows = Stripe_.Treasury.DebitReversal.LinkedFlows;
      export type Network = Stripe_.Treasury.DebitReversal.Network;
      export type Status = Stripe_.Treasury.DebitReversal.Status;
      export type StatusTransitions = Stripe_.Treasury.DebitReversal.StatusTransitions;
    }
    export namespace FinancialAccountCreateParams {
      export type Features = Stripe_.Treasury.FinancialAccountCreateParams.Features;
      export type PlatformRestrictions = Stripe_.Treasury.FinancialAccountCreateParams.PlatformRestrictions;
      export namespace Features {
        export type CardIssuing = Stripe_.Treasury.FinancialAccountCreateParams.Features.CardIssuing;
        export type DepositInsurance = Stripe_.Treasury.FinancialAccountCreateParams.Features.DepositInsurance;
        export type FinancialAddresses = Stripe_.Treasury.FinancialAccountCreateParams.Features.FinancialAddresses;
        export type InboundTransfers = Stripe_.Treasury.FinancialAccountCreateParams.Features.InboundTransfers;
        export type IntraStripeFlows = Stripe_.Treasury.FinancialAccountCreateParams.Features.IntraStripeFlows;
        export type OutboundPayments = Stripe_.Treasury.FinancialAccountCreateParams.Features.OutboundPayments;
        export type OutboundTransfers = Stripe_.Treasury.FinancialAccountCreateParams.Features.OutboundTransfers;
        export namespace FinancialAddresses {
          export type Aba = Stripe_.Treasury.FinancialAccountCreateParams.Features.FinancialAddresses.Aba;
        }
        export namespace InboundTransfers {
          export type Ach = Stripe_.Treasury.FinancialAccountCreateParams.Features.InboundTransfers.Ach;
        }
        export namespace OutboundPayments {
          export type Ach = Stripe_.Treasury.FinancialAccountCreateParams.Features.OutboundPayments.Ach;
          export type UsDomesticWire = Stripe_.Treasury.FinancialAccountCreateParams.Features.OutboundPayments.UsDomesticWire;
        }
        export namespace OutboundTransfers {
          export type Ach = Stripe_.Treasury.FinancialAccountCreateParams.Features.OutboundTransfers.Ach;
          export type UsDomesticWire = Stripe_.Treasury.FinancialAccountCreateParams.Features.OutboundTransfers.UsDomesticWire;
        }
      }
      export namespace PlatformRestrictions {
        export type InboundFlows = Stripe_.Treasury.FinancialAccountCreateParams.PlatformRestrictions.InboundFlows;
        export type OutboundFlows = Stripe_.Treasury.FinancialAccountCreateParams.PlatformRestrictions.OutboundFlows;
      }
    }
    export namespace FinancialAccount {
      export type ActiveFeature = Stripe_.Treasury.FinancialAccount.ActiveFeature;
      export type Balance = Stripe_.Treasury.FinancialAccount.Balance;
      export type FinancialAddress = Stripe_.Treasury.FinancialAccount.FinancialAddress;
      export type PendingFeature = Stripe_.Treasury.FinancialAccount.PendingFeature;
      export type PlatformRestrictions = Stripe_.Treasury.FinancialAccount.PlatformRestrictions;
      export type RestrictedFeature = Stripe_.Treasury.FinancialAccount.RestrictedFeature;
      export type Status = Stripe_.Treasury.FinancialAccount.Status;
      export type StatusDetails = Stripe_.Treasury.FinancialAccount.StatusDetails;
      export namespace FinancialAddress {
        export type Aba = Stripe_.Treasury.FinancialAccount.FinancialAddress.Aba;
        export type SupportedNetwork = Stripe_.Treasury.FinancialAccount.FinancialAddress.SupportedNetwork;
      }
      export namespace PlatformRestrictions {
        export type InboundFlows = Stripe_.Treasury.FinancialAccount.PlatformRestrictions.InboundFlows;
        export type OutboundFlows = Stripe_.Treasury.FinancialAccount.PlatformRestrictions.OutboundFlows;
      }
      export namespace StatusDetails {
        export type Closed = Stripe_.Treasury.FinancialAccount.StatusDetails.Closed;
        export namespace Closed {
          export type Reason = Stripe_.Treasury.FinancialAccount.StatusDetails.Closed.Reason;
        }
      }
    }
    export namespace InboundTransfer {
      export type FailureDetails = Stripe_.Treasury.InboundTransfer.FailureDetails;
      export type LinkedFlows = Stripe_.Treasury.InboundTransfer.LinkedFlows;
      export type OriginPaymentMethodDetails = Stripe_.Treasury.InboundTransfer.OriginPaymentMethodDetails;
      export type Status = Stripe_.Treasury.InboundTransfer.Status;
      export type StatusTransitions = Stripe_.Treasury.InboundTransfer.StatusTransitions;
      export namespace FailureDetails {
        export type Code = Stripe_.Treasury.InboundTransfer.FailureDetails.Code;
      }
      export namespace OriginPaymentMethodDetails {
        export type BillingDetails = Stripe_.Treasury.InboundTransfer.OriginPaymentMethodDetails.BillingDetails;
        export type UsBankAccount = Stripe_.Treasury.InboundTransfer.OriginPaymentMethodDetails.UsBankAccount;
        export namespace UsBankAccount {
          export type AccountHolderType = Stripe_.Treasury.InboundTransfer.OriginPaymentMethodDetails.UsBankAccount.AccountHolderType;
          export type AccountType = Stripe_.Treasury.InboundTransfer.OriginPaymentMethodDetails.UsBankAccount.AccountType;
        }
      }
    }
    export namespace OutboundPaymentCreateParams {
      export type DestinationPaymentMethodData = Stripe_.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodData;
      export type DestinationPaymentMethodOptions = Stripe_.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodOptions;
      export type EndUserDetails = Stripe_.Treasury.OutboundPaymentCreateParams.EndUserDetails;
      export namespace DestinationPaymentMethodData {
        export type BillingDetails = Stripe_.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodData.BillingDetails;
        export type Type = Stripe_.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodData.Type;
        export type UsBankAccount = Stripe_.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodData.UsBankAccount;
        export namespace UsBankAccount {
          export type AccountHolderType = Stripe_.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodData.UsBankAccount.AccountHolderType;
          export type AccountType = Stripe_.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodData.UsBankAccount.AccountType;
        }
      }
      export namespace DestinationPaymentMethodOptions {
        export type UsBankAccount = Stripe_.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodOptions.UsBankAccount;
        export namespace UsBankAccount {
          export type Network = Stripe_.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodOptions.UsBankAccount.Network;
        }
      }
    }
    export namespace OutboundPayment {
      export type DestinationPaymentMethodDetails = Stripe_.Treasury.OutboundPayment.DestinationPaymentMethodDetails;
      export type EndUserDetails = Stripe_.Treasury.OutboundPayment.EndUserDetails;
      export type ReturnedDetails = Stripe_.Treasury.OutboundPayment.ReturnedDetails;
      export type Status = Stripe_.Treasury.OutboundPayment.Status;
      export type StatusTransitions = Stripe_.Treasury.OutboundPayment.StatusTransitions;
      export type TrackingDetails = Stripe_.Treasury.OutboundPayment.TrackingDetails;
      export namespace DestinationPaymentMethodDetails {
        export type BillingDetails = Stripe_.Treasury.OutboundPayment.DestinationPaymentMethodDetails.BillingDetails;
        export type FinancialAccount = Stripe_.Treasury.OutboundPayment.DestinationPaymentMethodDetails.FinancialAccount;
        export type Type = Stripe_.Treasury.OutboundPayment.DestinationPaymentMethodDetails.Type;
        export type UsBankAccount = Stripe_.Treasury.OutboundPayment.DestinationPaymentMethodDetails.UsBankAccount;
        export namespace UsBankAccount {
          export type AccountHolderType = Stripe_.Treasury.OutboundPayment.DestinationPaymentMethodDetails.UsBankAccount.AccountHolderType;
          export type AccountType = Stripe_.Treasury.OutboundPayment.DestinationPaymentMethodDetails.UsBankAccount.AccountType;
          export type Network = Stripe_.Treasury.OutboundPayment.DestinationPaymentMethodDetails.UsBankAccount.Network;
        }
      }
      export namespace ReturnedDetails {
        export type Code = Stripe_.Treasury.OutboundPayment.ReturnedDetails.Code;
      }
      export namespace TrackingDetails {
        export type Ach = Stripe_.Treasury.OutboundPayment.TrackingDetails.Ach;
        export type Type = Stripe_.Treasury.OutboundPayment.TrackingDetails.Type;
        export type UsDomesticWire = Stripe_.Treasury.OutboundPayment.TrackingDetails.UsDomesticWire;
      }
    }
    export namespace OutboundTransferCreateParams {
      export type DestinationPaymentMethodData = Stripe_.Treasury.OutboundTransferCreateParams.DestinationPaymentMethodData;
      export type DestinationPaymentMethodOptions = Stripe_.Treasury.OutboundTransferCreateParams.DestinationPaymentMethodOptions;
      export namespace DestinationPaymentMethodOptions {
        export type UsBankAccount = Stripe_.Treasury.OutboundTransferCreateParams.DestinationPaymentMethodOptions.UsBankAccount;
        export namespace UsBankAccount {
          export type Network = Stripe_.Treasury.OutboundTransferCreateParams.DestinationPaymentMethodOptions.UsBankAccount.Network;
        }
      }
    }
    export namespace OutboundTransfer {
      export type DestinationPaymentMethodDetails = Stripe_.Treasury.OutboundTransfer.DestinationPaymentMethodDetails;
      export type ReturnedDetails = Stripe_.Treasury.OutboundTransfer.ReturnedDetails;
      export type Status = Stripe_.Treasury.OutboundTransfer.Status;
      export type StatusTransitions = Stripe_.Treasury.OutboundTransfer.StatusTransitions;
      export type TrackingDetails = Stripe_.Treasury.OutboundTransfer.TrackingDetails;
      export namespace DestinationPaymentMethodDetails {
        export type BillingDetails = Stripe_.Treasury.OutboundTransfer.DestinationPaymentMethodDetails.BillingDetails;
        export type FinancialAccount = Stripe_.Treasury.OutboundTransfer.DestinationPaymentMethodDetails.FinancialAccount;
        export type Type = Stripe_.Treasury.OutboundTransfer.DestinationPaymentMethodDetails.Type;
        export type UsBankAccount = Stripe_.Treasury.OutboundTransfer.DestinationPaymentMethodDetails.UsBankAccount;
        export namespace UsBankAccount {
          export type AccountHolderType = Stripe_.Treasury.OutboundTransfer.DestinationPaymentMethodDetails.UsBankAccount.AccountHolderType;
          export type AccountType = Stripe_.Treasury.OutboundTransfer.DestinationPaymentMethodDetails.UsBankAccount.AccountType;
          export type Network = Stripe_.Treasury.OutboundTransfer.DestinationPaymentMethodDetails.UsBankAccount.Network;
        }
      }
      export namespace ReturnedDetails {
        export type Code = Stripe_.Treasury.OutboundTransfer.ReturnedDetails.Code;
      }
      export namespace TrackingDetails {
        export type Ach = Stripe_.Treasury.OutboundTransfer.TrackingDetails.Ach;
        export type Type = Stripe_.Treasury.OutboundTransfer.TrackingDetails.Type;
        export type UsDomesticWire = Stripe_.Treasury.OutboundTransfer.TrackingDetails.UsDomesticWire;
      }
    }
    export namespace ReceivedCredit {
      export type FailureCode = Stripe_.Treasury.ReceivedCredit.FailureCode;
      export type InitiatingPaymentMethodDetails = Stripe_.Treasury.ReceivedCredit.InitiatingPaymentMethodDetails;
      export type LinkedFlows = Stripe_.Treasury.ReceivedCredit.LinkedFlows;
      export type Network = Stripe_.Treasury.ReceivedCredit.Network;
      export type ReversalDetails = Stripe_.Treasury.ReceivedCredit.ReversalDetails;
      export type Status = Stripe_.Treasury.ReceivedCredit.Status;
      export namespace InitiatingPaymentMethodDetails {
        export type BillingDetails = Stripe_.Treasury.ReceivedCredit.InitiatingPaymentMethodDetails.BillingDetails;
        export type FinancialAccount = Stripe_.Treasury.ReceivedCredit.InitiatingPaymentMethodDetails.FinancialAccount;
        export type Type = Stripe_.Treasury.ReceivedCredit.InitiatingPaymentMethodDetails.Type;
        export type UsBankAccount = Stripe_.Treasury.ReceivedCredit.InitiatingPaymentMethodDetails.UsBankAccount;
      }
      export namespace LinkedFlows {
        export type SourceFlowDetails = Stripe_.Treasury.ReceivedCredit.LinkedFlows.SourceFlowDetails;
        export namespace SourceFlowDetails {
          export type Type = Stripe_.Treasury.ReceivedCredit.LinkedFlows.SourceFlowDetails.Type;
        }
      }
      export namespace ReversalDetails {
        export type RestrictedReason = Stripe_.Treasury.ReceivedCredit.ReversalDetails.RestrictedReason;
      }
    }
    export namespace ReceivedDebit {
      export type FailureCode = Stripe_.Treasury.ReceivedDebit.FailureCode;
      export type InitiatingPaymentMethodDetails = Stripe_.Treasury.ReceivedDebit.InitiatingPaymentMethodDetails;
      export type LinkedFlows = Stripe_.Treasury.ReceivedDebit.LinkedFlows;
      export type Network = Stripe_.Treasury.ReceivedDebit.Network;
      export type ReversalDetails = Stripe_.Treasury.ReceivedDebit.ReversalDetails;
      export type Status = Stripe_.Treasury.ReceivedDebit.Status;
      export namespace InitiatingPaymentMethodDetails {
        export type BillingDetails = Stripe_.Treasury.ReceivedDebit.InitiatingPaymentMethodDetails.BillingDetails;
        export type FinancialAccount = Stripe_.Treasury.ReceivedDebit.InitiatingPaymentMethodDetails.FinancialAccount;
        export type Type = Stripe_.Treasury.ReceivedDebit.InitiatingPaymentMethodDetails.Type;
        export type UsBankAccount = Stripe_.Treasury.ReceivedDebit.InitiatingPaymentMethodDetails.UsBankAccount;
      }
      export namespace ReversalDetails {
        export type RestrictedReason = Stripe_.Treasury.ReceivedDebit.ReversalDetails.RestrictedReason;
      }
    }
    export namespace Transaction {
      export type BalanceImpact = Stripe_.Treasury.Transaction.BalanceImpact;
      export type FlowDetails = Stripe_.Treasury.Transaction.FlowDetails;
      export type FlowType = Stripe_.Treasury.Transaction.FlowType;
      export type Status = Stripe_.Treasury.Transaction.Status;
      export type StatusTransitions = Stripe_.Treasury.Transaction.StatusTransitions;
      export namespace FlowDetails {
        export type Type = Stripe_.Treasury.Transaction.FlowDetails.Type;
      }
    }
    export namespace TransactionEntry {
      export type BalanceImpact = Stripe_.Treasury.TransactionEntry.BalanceImpact;
      export type FlowDetails = Stripe_.Treasury.TransactionEntry.FlowDetails;
      export type FlowType = Stripe_.Treasury.TransactionEntry.FlowType;
      export type Type = Stripe_.Treasury.TransactionEntry.Type;
      export namespace FlowDetails {
        export type Type = Stripe_.Treasury.TransactionEntry.FlowDetails.Type;
      }
    }
    export namespace FinancialAccountFeatures {
      export type CardIssuing = Stripe_.Treasury.FinancialAccountFeatures.CardIssuing;
      export type DepositInsurance = Stripe_.Treasury.FinancialAccountFeatures.DepositInsurance;
      export type FinancialAddresses = Stripe_.Treasury.FinancialAccountFeatures.FinancialAddresses;
      export type InboundTransfers = Stripe_.Treasury.FinancialAccountFeatures.InboundTransfers;
      export type IntraStripeFlows = Stripe_.Treasury.FinancialAccountFeatures.IntraStripeFlows;
      export type OutboundPayments = Stripe_.Treasury.FinancialAccountFeatures.OutboundPayments;
      export type OutboundTransfers = Stripe_.Treasury.FinancialAccountFeatures.OutboundTransfers;
      export namespace CardIssuing {
        export type Status = Stripe_.Treasury.FinancialAccountFeatures.CardIssuing.Status;
        export type StatusDetail = Stripe_.Treasury.FinancialAccountFeatures.CardIssuing.StatusDetail;
        export namespace StatusDetail {
          export type Code = Stripe_.Treasury.FinancialAccountFeatures.CardIssuing.StatusDetail.Code;
          export type Resolution = Stripe_.Treasury.FinancialAccountFeatures.CardIssuing.StatusDetail.Resolution;
          export type Restriction = Stripe_.Treasury.FinancialAccountFeatures.CardIssuing.StatusDetail.Restriction;
        }
      }
      export namespace DepositInsurance {
        export type Status = Stripe_.Treasury.FinancialAccountFeatures.DepositInsurance.Status;
        export type StatusDetail = Stripe_.Treasury.FinancialAccountFeatures.DepositInsurance.StatusDetail;
        export namespace StatusDetail {
          export type Code = Stripe_.Treasury.FinancialAccountFeatures.DepositInsurance.StatusDetail.Code;
          export type Resolution = Stripe_.Treasury.FinancialAccountFeatures.DepositInsurance.StatusDetail.Resolution;
          export type Restriction = Stripe_.Treasury.FinancialAccountFeatures.DepositInsurance.StatusDetail.Restriction;
        }
      }
      export namespace FinancialAddresses {
        export type Aba = Stripe_.Treasury.FinancialAccountFeatures.FinancialAddresses.Aba;
        export namespace Aba {
          export type Status = Stripe_.Treasury.FinancialAccountFeatures.FinancialAddresses.Aba.Status;
          export type StatusDetail = Stripe_.Treasury.FinancialAccountFeatures.FinancialAddresses.Aba.StatusDetail;
          export namespace StatusDetail {
            export type Code = Stripe_.Treasury.FinancialAccountFeatures.FinancialAddresses.Aba.StatusDetail.Code;
            export type Resolution = Stripe_.Treasury.FinancialAccountFeatures.FinancialAddresses.Aba.StatusDetail.Resolution;
            export type Restriction = Stripe_.Treasury.FinancialAccountFeatures.FinancialAddresses.Aba.StatusDetail.Restriction;
          }
        }
      }
      export namespace InboundTransfers {
        export type Ach = Stripe_.Treasury.FinancialAccountFeatures.InboundTransfers.Ach;
        export namespace Ach {
          export type Status = Stripe_.Treasury.FinancialAccountFeatures.InboundTransfers.Ach.Status;
          export type StatusDetail = Stripe_.Treasury.FinancialAccountFeatures.InboundTransfers.Ach.StatusDetail;
          export namespace StatusDetail {
            export type Code = Stripe_.Treasury.FinancialAccountFeatures.InboundTransfers.Ach.StatusDetail.Code;
            export type Resolution = Stripe_.Treasury.FinancialAccountFeatures.InboundTransfers.Ach.StatusDetail.Resolution;
            export type Restriction = Stripe_.Treasury.FinancialAccountFeatures.InboundTransfers.Ach.StatusDetail.Restriction;
          }
        }
      }
      export namespace IntraStripeFlows {
        export type Status = Stripe_.Treasury.FinancialAccountFeatures.IntraStripeFlows.Status;
        export type StatusDetail = Stripe_.Treasury.FinancialAccountFeatures.IntraStripeFlows.StatusDetail;
        export namespace StatusDetail {
          export type Code = Stripe_.Treasury.FinancialAccountFeatures.IntraStripeFlows.StatusDetail.Code;
          export type Resolution = Stripe_.Treasury.FinancialAccountFeatures.IntraStripeFlows.StatusDetail.Resolution;
          export type Restriction = Stripe_.Treasury.FinancialAccountFeatures.IntraStripeFlows.StatusDetail.Restriction;
        }
      }
      export namespace OutboundPayments {
        export type Ach = Stripe_.Treasury.FinancialAccountFeatures.OutboundPayments.Ach;
        export type UsDomesticWire = Stripe_.Treasury.FinancialAccountFeatures.OutboundPayments.UsDomesticWire;
        export namespace Ach {
          export type Status = Stripe_.Treasury.FinancialAccountFeatures.OutboundPayments.Ach.Status;
          export type StatusDetail = Stripe_.Treasury.FinancialAccountFeatures.OutboundPayments.Ach.StatusDetail;
          export namespace StatusDetail {
            export type Code = Stripe_.Treasury.FinancialAccountFeatures.OutboundPayments.Ach.StatusDetail.Code;
            export type Resolution = Stripe_.Treasury.FinancialAccountFeatures.OutboundPayments.Ach.StatusDetail.Resolution;
            export type Restriction = Stripe_.Treasury.FinancialAccountFeatures.OutboundPayments.Ach.StatusDetail.Restriction;
          }
        }
        export namespace UsDomesticWire {
          export type Status = Stripe_.Treasury.FinancialAccountFeatures.OutboundPayments.UsDomesticWire.Status;
          export type StatusDetail = Stripe_.Treasury.FinancialAccountFeatures.OutboundPayments.UsDomesticWire.StatusDetail;
          export namespace StatusDetail {
            export type Code = Stripe_.Treasury.FinancialAccountFeatures.OutboundPayments.UsDomesticWire.StatusDetail.Code;
            export type Resolution = Stripe_.Treasury.FinancialAccountFeatures.OutboundPayments.UsDomesticWire.StatusDetail.Resolution;
            export type Restriction = Stripe_.Treasury.FinancialAccountFeatures.OutboundPayments.UsDomesticWire.StatusDetail.Restriction;
          }
        }
      }
      export namespace OutboundTransfers {
        export type Ach = Stripe_.Treasury.FinancialAccountFeatures.OutboundTransfers.Ach;
        export type UsDomesticWire = Stripe_.Treasury.FinancialAccountFeatures.OutboundTransfers.UsDomesticWire;
        export namespace Ach {
          export type Status = Stripe_.Treasury.FinancialAccountFeatures.OutboundTransfers.Ach.Status;
          export type StatusDetail = Stripe_.Treasury.FinancialAccountFeatures.OutboundTransfers.Ach.StatusDetail;
          export namespace StatusDetail {
            export type Code = Stripe_.Treasury.FinancialAccountFeatures.OutboundTransfers.Ach.StatusDetail.Code;
            export type Resolution = Stripe_.Treasury.FinancialAccountFeatures.OutboundTransfers.Ach.StatusDetail.Resolution;
            export type Restriction = Stripe_.Treasury.FinancialAccountFeatures.OutboundTransfers.Ach.StatusDetail.Restriction;
          }
        }
        export namespace UsDomesticWire {
          export type Status = Stripe_.Treasury.FinancialAccountFeatures.OutboundTransfers.UsDomesticWire.Status;
          export type StatusDetail = Stripe_.Treasury.FinancialAccountFeatures.OutboundTransfers.UsDomesticWire.StatusDetail;
          export namespace StatusDetail {
            export type Code = Stripe_.Treasury.FinancialAccountFeatures.OutboundTransfers.UsDomesticWire.StatusDetail.Code;
            export type Resolution = Stripe_.Treasury.FinancialAccountFeatures.OutboundTransfers.UsDomesticWire.StatusDetail.Resolution;
            export type Restriction = Stripe_.Treasury.FinancialAccountFeatures.OutboundTransfers.UsDomesticWire.StatusDetail.Restriction;
          }
        }
      }
    }
  }
  export namespace V2 {
    export type DeletedObject = Stripe_.V2.DeletedObject;
    export namespace Billing {
      export type MeterEvent = Stripe_.V2.Billing.MeterEvent;
      export type MeterEventCreateParams = Stripe_.V2.Billing.MeterEventCreateParams;
      export type MeterEventResource = Stripe_.V2.Billing.MeterEventResource;
      export type MeterEventAdjustment = Stripe_.V2.Billing.MeterEventAdjustment;
      export type MeterEventAdjustmentCreateParams = Stripe_.V2.Billing.MeterEventAdjustmentCreateParams;
      export type MeterEventAdjustmentResource = Stripe_.V2.Billing.MeterEventAdjustmentResource;
      export type MeterEventSession = Stripe_.V2.Billing.MeterEventSession;
      export type MeterEventSessionCreateParams = Stripe_.V2.Billing.MeterEventSessionCreateParams;
      export type MeterEventSessionResource = Stripe_.V2.Billing.MeterEventSessionResource;
      export namespace MeterEventAdjustmentCreateParams {
        export type Cancel = Stripe_.V2.Billing.MeterEventAdjustmentCreateParams.Cancel;
      }
      export namespace MeterEventAdjustment {
        export type Cancel = Stripe_.V2.Billing.MeterEventAdjustment.Cancel;
        export type Status = Stripe_.V2.Billing.MeterEventAdjustment.Status;
      }
    }
    export namespace Core {
      export type Account = Stripe_.V2.Core.Account;
      export type AccountCreateParams = Stripe_.V2.Core.AccountCreateParams;
      export type AccountRetrieveParams = Stripe_.V2.Core.AccountRetrieveParams;
      export type AccountUpdateParams = Stripe_.V2.Core.AccountUpdateParams;
      export type AccountListParams = Stripe_.V2.Core.AccountListParams;
      export type AccountCloseParams = Stripe_.V2.Core.AccountCloseParams;
      export type AccountResource = Stripe_.V2.Core.AccountResource;
      export type AccountLink = Stripe_.V2.Core.AccountLink;
      export type AccountLinkCreateParams = Stripe_.V2.Core.AccountLinkCreateParams;
      export type AccountLinkResource = Stripe_.V2.Core.AccountLinkResource;
      export type AccountToken = Stripe_.V2.Core.AccountToken;
      export type AccountTokenCreateParams = Stripe_.V2.Core.AccountTokenCreateParams;
      export type AccountTokenRetrieveParams = Stripe_.V2.Core.AccountTokenRetrieveParams;
      export type AccountTokenResource = Stripe_.V2.Core.AccountTokenResource;
      export type Event = Stripe_.V2.Core.Event;
      export type EventBase = Stripe_.V2.Core.EventBase;
      export type EventNotification = Stripe_.V2.Core.EventNotification;
      export type EventRetrieveParams = Stripe_.V2.Core.EventRetrieveParams;
      export type EventListParams = Stripe_.V2.Core.EventListParams;
      export type EventResource = Stripe_.V2.Core.EventResource;
      export type EventDestination = Stripe_.V2.Core.EventDestination;
      export type EventDestinationCreateParams = Stripe_.V2.Core.EventDestinationCreateParams;
      export type EventDestinationRetrieveParams = Stripe_.V2.Core.EventDestinationRetrieveParams;
      export type EventDestinationUpdateParams = Stripe_.V2.Core.EventDestinationUpdateParams;
      export type EventDestinationListParams = Stripe_.V2.Core.EventDestinationListParams;
      export type EventDestinationDeleteParams = Stripe_.V2.Core.EventDestinationDeleteParams;
      export type EventDestinationDisableParams = Stripe_.V2.Core.EventDestinationDisableParams;
      export type EventDestinationEnableParams = Stripe_.V2.Core.EventDestinationEnableParams;
      export type EventDestinationPingParams = Stripe_.V2.Core.EventDestinationPingParams;
      export type EventDestinationResource = Stripe_.V2.Core.EventDestinationResource;
      export type AccountPersonToken = Stripe_.V2.Core.AccountPersonToken;
      export type AccountPerson = Stripe_.V2.Core.AccountPerson;
      export namespace AccountCreateParams {
        export type Configuration = Stripe_.V2.Core.AccountCreateParams.Configuration;
        export type Dashboard = Stripe_.V2.Core.AccountCreateParams.Dashboard;
        export type Defaults = Stripe_.V2.Core.AccountCreateParams.Defaults;
        export type Identity = Stripe_.V2.Core.AccountCreateParams.Identity;
        export type Include = Stripe_.V2.Core.AccountCreateParams.Include;
        export namespace Configuration {
          export type Customer = Stripe_.V2.Core.AccountCreateParams.Configuration.Customer;
          export type Merchant = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant;
          export type Recipient = Stripe_.V2.Core.AccountCreateParams.Configuration.Recipient;
          export namespace Customer {
            export type AutomaticIndirectTax = Stripe_.V2.Core.AccountCreateParams.Configuration.Customer.AutomaticIndirectTax;
            export type Billing = Stripe_.V2.Core.AccountCreateParams.Configuration.Customer.Billing;
            export type Capabilities = Stripe_.V2.Core.AccountCreateParams.Configuration.Customer.Capabilities;
            export type Shipping = Stripe_.V2.Core.AccountCreateParams.Configuration.Customer.Shipping;
            export namespace AutomaticIndirectTax {
              export type Exempt = Stripe_.V2.Core.AccountCreateParams.Configuration.Customer.AutomaticIndirectTax.Exempt;
            }
            export namespace Billing {
              export type Invoice = Stripe_.V2.Core.AccountCreateParams.Configuration.Customer.Billing.Invoice;
              export namespace Invoice {
                export type CustomField = Stripe_.V2.Core.AccountCreateParams.Configuration.Customer.Billing.Invoice.CustomField;
                export type Rendering = Stripe_.V2.Core.AccountCreateParams.Configuration.Customer.Billing.Invoice.Rendering;
                export namespace Rendering {
                  export type AmountTaxDisplay = Stripe_.V2.Core.AccountCreateParams.Configuration.Customer.Billing.Invoice.Rendering.AmountTaxDisplay;
                }
              }
            }
            export namespace Capabilities {
              export type AutomaticIndirectTax = Stripe_.V2.Core.AccountCreateParams.Configuration.Customer.Capabilities.AutomaticIndirectTax;
            }
          }
          export namespace Merchant {
            export type BacsDebitPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.BacsDebitPayments;
            export type Branding = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Branding;
            export type Capabilities = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities;
            export type CardPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.CardPayments;
            export type KonbiniPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.KonbiniPayments;
            export type ScriptStatementDescriptor = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.ScriptStatementDescriptor;
            export type StatementDescriptor = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.StatementDescriptor;
            export type Support = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Support;
            export namespace Capabilities {
              export type AchDebitPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.AchDebitPayments;
              export type AcssDebitPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.AcssDebitPayments;
              export type AffirmPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.AffirmPayments;
              export type AfterpayClearpayPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.AfterpayClearpayPayments;
              export type AlmaPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.AlmaPayments;
              export type AmazonPayPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.AmazonPayPayments;
              export type AuBecsDebitPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.AuBecsDebitPayments;
              export type BacsDebitPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.BacsDebitPayments;
              export type BancontactPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.BancontactPayments;
              export type BlikPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.BlikPayments;
              export type BoletoPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.BoletoPayments;
              export type CardPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.CardPayments;
              export type CartesBancairesPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.CartesBancairesPayments;
              export type CashappPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.CashappPayments;
              export type EpsPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.EpsPayments;
              export type FpxPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.FpxPayments;
              export type GbBankTransferPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.GbBankTransferPayments;
              export type GrabpayPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.GrabpayPayments;
              export type IdealPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.IdealPayments;
              export type JcbPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.JcbPayments;
              export type JpBankTransferPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.JpBankTransferPayments;
              export type KakaoPayPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.KakaoPayPayments;
              export type KlarnaPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.KlarnaPayments;
              export type KonbiniPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.KonbiniPayments;
              export type KrCardPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.KrCardPayments;
              export type LinkPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.LinkPayments;
              export type MobilepayPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.MobilepayPayments;
              export type MultibancoPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.MultibancoPayments;
              export type MxBankTransferPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.MxBankTransferPayments;
              export type NaverPayPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.NaverPayPayments;
              export type OxxoPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.OxxoPayments;
              export type P24Payments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.P24Payments;
              export type PayByBankPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.PayByBankPayments;
              export type PaycoPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.PaycoPayments;
              export type PaynowPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.PaynowPayments;
              export type PromptpayPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.PromptpayPayments;
              export type RevolutPayPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.RevolutPayPayments;
              export type SamsungPayPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.SamsungPayPayments;
              export type SepaBankTransferPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.SepaBankTransferPayments;
              export type SepaDebitPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.SepaDebitPayments;
              export type SunbitPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.SunbitPayments;
              export type SwishPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.SwishPayments;
              export type TwintPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.TwintPayments;
              export type UsBankTransferPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.UsBankTransferPayments;
              export type ZipPayments = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.ZipPayments;
            }
            export namespace CardPayments {
              export type DeclineOn = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.CardPayments.DeclineOn;
            }
            export namespace KonbiniPayments {
              export type Support = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.KonbiniPayments.Support;
              export namespace Support {
                export type Hours = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.KonbiniPayments.Support.Hours;
              }
            }
            export namespace ScriptStatementDescriptor {
              export type Kana = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.ScriptStatementDescriptor.Kana;
              export type Kanji = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.ScriptStatementDescriptor.Kanji;
            }
            export namespace Support {
              export type Address = Stripe_.V2.Core.AccountCreateParams.Configuration.Merchant.Support.Address;
            }
          }
          export namespace Recipient {
            export type Capabilities = Stripe_.V2.Core.AccountCreateParams.Configuration.Recipient.Capabilities;
            export namespace Capabilities {
              export type StripeBalance = Stripe_.V2.Core.AccountCreateParams.Configuration.Recipient.Capabilities.StripeBalance;
              export namespace StripeBalance {
                export type StripeTransfers = Stripe_.V2.Core.AccountCreateParams.Configuration.Recipient.Capabilities.StripeBalance.StripeTransfers;
              }
            }
          }
        }
        export namespace Defaults {
          export type Locale = Stripe_.V2.Core.AccountCreateParams.Defaults.Locale;
          export type Profile = Stripe_.V2.Core.AccountCreateParams.Defaults.Profile;
          export type Responsibilities = Stripe_.V2.Core.AccountCreateParams.Defaults.Responsibilities;
          export namespace Responsibilities {
            export type FeesCollector = Stripe_.V2.Core.AccountCreateParams.Defaults.Responsibilities.FeesCollector;
            export type LossesCollector = Stripe_.V2.Core.AccountCreateParams.Defaults.Responsibilities.LossesCollector;
          }
        }
        export namespace Identity {
          export type Attestations = Stripe_.V2.Core.AccountCreateParams.Identity.Attestations;
          export type BusinessDetails = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails;
          export type EntityType = Stripe_.V2.Core.AccountCreateParams.Identity.EntityType;
          export type Individual = Stripe_.V2.Core.AccountCreateParams.Identity.Individual;
          export namespace Attestations {
            export type DirectorshipDeclaration = Stripe_.V2.Core.AccountCreateParams.Identity.Attestations.DirectorshipDeclaration;
            export type OwnershipDeclaration = Stripe_.V2.Core.AccountCreateParams.Identity.Attestations.OwnershipDeclaration;
            export type PersonsProvided = Stripe_.V2.Core.AccountCreateParams.Identity.Attestations.PersonsProvided;
            export type RepresentativeDeclaration = Stripe_.V2.Core.AccountCreateParams.Identity.Attestations.RepresentativeDeclaration;
            export type TermsOfService = Stripe_.V2.Core.AccountCreateParams.Identity.Attestations.TermsOfService;
            export namespace PersonsProvided {
              export type OwnershipExemptionReason = Stripe_.V2.Core.AccountCreateParams.Identity.Attestations.PersonsProvided.OwnershipExemptionReason;
            }
            export namespace TermsOfService {
              export type Account = Stripe_.V2.Core.AccountCreateParams.Identity.Attestations.TermsOfService.Account;
            }
          }
          export namespace BusinessDetails {
            export type Address = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.Address;
            export type AnnualRevenue = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.AnnualRevenue;
            export type Documents = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents;
            export type IdNumber = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.IdNumber;
            export type MonthlyEstimatedRevenue = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.MonthlyEstimatedRevenue;
            export type RegistrationDate = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.RegistrationDate;
            export type ScriptAddresses = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.ScriptAddresses;
            export type ScriptNames = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.ScriptNames;
            export type Structure = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.Structure;
            export namespace Documents {
              export type BankAccountOwnershipVerification = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.BankAccountOwnershipVerification;
              export type CompanyLicense = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.CompanyLicense;
              export type CompanyMemorandumOfAssociation = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.CompanyMemorandumOfAssociation;
              export type CompanyMinisterialDecree = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.CompanyMinisterialDecree;
              export type CompanyRegistrationVerification = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.CompanyRegistrationVerification;
              export type CompanyTaxIdVerification = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.CompanyTaxIdVerification;
              export type PrimaryVerification = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.PrimaryVerification;
              export type ProofOfAddress = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.ProofOfAddress;
              export type ProofOfRegistration = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.ProofOfRegistration;
              export type ProofOfUltimateBeneficialOwnership = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.ProofOfUltimateBeneficialOwnership;
              export namespace PrimaryVerification {
                export type FrontBack = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.PrimaryVerification.FrontBack;
              }
              export namespace ProofOfRegistration {
                export type Signer = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.ProofOfRegistration.Signer;
              }
              export namespace ProofOfUltimateBeneficialOwnership {
                export type Signer = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.ProofOfUltimateBeneficialOwnership.Signer;
              }
            }
            export namespace IdNumber {
              export type Type = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.IdNumber.Type;
            }
            export namespace ScriptAddresses {
              export type Kana = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.ScriptAddresses.Kana;
              export type Kanji = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.ScriptAddresses.Kanji;
            }
            export namespace ScriptNames {
              export type Kana = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.ScriptNames.Kana;
              export type Kanji = Stripe_.V2.Core.AccountCreateParams.Identity.BusinessDetails.ScriptNames.Kanji;
            }
          }
          export namespace Individual {
            export type AdditionalAddress = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.AdditionalAddress;
            export type AdditionalName = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.AdditionalName;
            export type Address = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.Address;
            export type DateOfBirth = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.DateOfBirth;
            export type Documents = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.Documents;
            export type IdNumber = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.IdNumber;
            export type LegalGender = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.LegalGender;
            export type PoliticalExposure = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.PoliticalExposure;
            export type Relationship = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.Relationship;
            export type ScriptAddresses = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.ScriptAddresses;
            export type ScriptNames = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.ScriptNames;
            export namespace AdditionalName {
              export type Purpose = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.AdditionalName.Purpose;
            }
            export namespace Documents {
              export type CompanyAuthorization = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.Documents.CompanyAuthorization;
              export type Passport = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.Documents.Passport;
              export type PrimaryVerification = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.Documents.PrimaryVerification;
              export type SecondaryVerification = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.Documents.SecondaryVerification;
              export type Visa = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.Documents.Visa;
              export namespace PrimaryVerification {
                export type FrontBack = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.Documents.PrimaryVerification.FrontBack;
              }
              export namespace SecondaryVerification {
                export type FrontBack = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.Documents.SecondaryVerification.FrontBack;
              }
            }
            export namespace IdNumber {
              export type Type = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.IdNumber.Type;
            }
            export namespace ScriptAddresses {
              export type Kana = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.ScriptAddresses.Kana;
              export type Kanji = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.ScriptAddresses.Kanji;
            }
            export namespace ScriptNames {
              export type Kana = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.ScriptNames.Kana;
              export type Kanji = Stripe_.V2.Core.AccountCreateParams.Identity.Individual.ScriptNames.Kanji;
            }
          }
        }
      }
      export namespace Account {
        export type AppliedConfiguration = Stripe_.V2.Core.Account.AppliedConfiguration;
        export type Configuration = Stripe_.V2.Core.Account.Configuration;
        export type Dashboard = Stripe_.V2.Core.Account.Dashboard;
        export type Defaults = Stripe_.V2.Core.Account.Defaults;
        export type FutureRequirements = Stripe_.V2.Core.Account.FutureRequirements;
        export type Identity = Stripe_.V2.Core.Account.Identity;
        export type Requirements = Stripe_.V2.Core.Account.Requirements;
        export namespace Configuration {
          export type Customer = Stripe_.V2.Core.Account.Configuration.Customer;
          export type Merchant = Stripe_.V2.Core.Account.Configuration.Merchant;
          export type Recipient = Stripe_.V2.Core.Account.Configuration.Recipient;
          export namespace Customer {
            export type AutomaticIndirectTax = Stripe_.V2.Core.Account.Configuration.Customer.AutomaticIndirectTax;
            export type Billing = Stripe_.V2.Core.Account.Configuration.Customer.Billing;
            export type Capabilities = Stripe_.V2.Core.Account.Configuration.Customer.Capabilities;
            export type Shipping = Stripe_.V2.Core.Account.Configuration.Customer.Shipping;
            export namespace AutomaticIndirectTax {
              export type Exempt = Stripe_.V2.Core.Account.Configuration.Customer.AutomaticIndirectTax.Exempt;
              export type Location = Stripe_.V2.Core.Account.Configuration.Customer.AutomaticIndirectTax.Location;
              export type LocationSource = Stripe_.V2.Core.Account.Configuration.Customer.AutomaticIndirectTax.LocationSource;
            }
            export namespace Billing {
              export type Invoice = Stripe_.V2.Core.Account.Configuration.Customer.Billing.Invoice;
              export namespace Invoice {
                export type CustomField = Stripe_.V2.Core.Account.Configuration.Customer.Billing.Invoice.CustomField;
                export type Rendering = Stripe_.V2.Core.Account.Configuration.Customer.Billing.Invoice.Rendering;
                export namespace Rendering {
                  export type AmountTaxDisplay = Stripe_.V2.Core.Account.Configuration.Customer.Billing.Invoice.Rendering.AmountTaxDisplay;
                }
              }
            }
            export namespace Capabilities {
              export type AutomaticIndirectTax = Stripe_.V2.Core.Account.Configuration.Customer.Capabilities.AutomaticIndirectTax;
              export namespace AutomaticIndirectTax {
                export type Status = Stripe_.V2.Core.Account.Configuration.Customer.Capabilities.AutomaticIndirectTax.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Customer.Capabilities.AutomaticIndirectTax.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Customer.Capabilities.AutomaticIndirectTax.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Customer.Capabilities.AutomaticIndirectTax.StatusDetail.Resolution;
                }
              }
            }
            export namespace Shipping {
              export type Address = Stripe_.V2.Core.Account.Configuration.Customer.Shipping.Address;
            }
          }
          export namespace Merchant {
            export type BacsDebitPayments = Stripe_.V2.Core.Account.Configuration.Merchant.BacsDebitPayments;
            export type Branding = Stripe_.V2.Core.Account.Configuration.Merchant.Branding;
            export type Capabilities = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities;
            export type CardPayments = Stripe_.V2.Core.Account.Configuration.Merchant.CardPayments;
            export type KonbiniPayments = Stripe_.V2.Core.Account.Configuration.Merchant.KonbiniPayments;
            export type ScriptStatementDescriptor = Stripe_.V2.Core.Account.Configuration.Merchant.ScriptStatementDescriptor;
            export type SepaDebitPayments = Stripe_.V2.Core.Account.Configuration.Merchant.SepaDebitPayments;
            export type StatementDescriptor = Stripe_.V2.Core.Account.Configuration.Merchant.StatementDescriptor;
            export type Support = Stripe_.V2.Core.Account.Configuration.Merchant.Support;
            export namespace Capabilities {
              export type AchDebitPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AchDebitPayments;
              export type AcssDebitPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AcssDebitPayments;
              export type AffirmPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AffirmPayments;
              export type AfterpayClearpayPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AfterpayClearpayPayments;
              export type AlmaPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AlmaPayments;
              export type AmazonPayPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AmazonPayPayments;
              export type AuBecsDebitPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AuBecsDebitPayments;
              export type BacsDebitPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BacsDebitPayments;
              export type BancontactPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BancontactPayments;
              export type BlikPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BlikPayments;
              export type BoletoPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BoletoPayments;
              export type CardPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.CardPayments;
              export type CartesBancairesPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.CartesBancairesPayments;
              export type CashappPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.CashappPayments;
              export type EpsPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.EpsPayments;
              export type FpxPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.FpxPayments;
              export type GbBankTransferPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.GbBankTransferPayments;
              export type GrabpayPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.GrabpayPayments;
              export type IdealPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.IdealPayments;
              export type JcbPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.JcbPayments;
              export type JpBankTransferPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.JpBankTransferPayments;
              export type KakaoPayPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KakaoPayPayments;
              export type KlarnaPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KlarnaPayments;
              export type KonbiniPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KonbiniPayments;
              export type KrCardPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KrCardPayments;
              export type LinkPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.LinkPayments;
              export type MobilepayPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.MobilepayPayments;
              export type MultibancoPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.MultibancoPayments;
              export type MxBankTransferPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.MxBankTransferPayments;
              export type NaverPayPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.NaverPayPayments;
              export type OxxoPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.OxxoPayments;
              export type P24Payments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.P24Payments;
              export type PayByBankPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PayByBankPayments;
              export type PaycoPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PaycoPayments;
              export type PaynowPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PaynowPayments;
              export type PromptpayPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PromptpayPayments;
              export type RevolutPayPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.RevolutPayPayments;
              export type SamsungPayPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SamsungPayPayments;
              export type SepaBankTransferPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SepaBankTransferPayments;
              export type SepaDebitPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SepaDebitPayments;
              export type StripeBalance = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.StripeBalance;
              export type SunbitPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SunbitPayments;
              export type SwishPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SwishPayments;
              export type TwintPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.TwintPayments;
              export type UsBankTransferPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.UsBankTransferPayments;
              export type ZipPayments = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.ZipPayments;
              export namespace AchDebitPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AchDebitPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AchDebitPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AchDebitPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AchDebitPayments.StatusDetail.Resolution;
                }
              }
              export namespace AcssDebitPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AcssDebitPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AcssDebitPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AcssDebitPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AcssDebitPayments.StatusDetail.Resolution;
                }
              }
              export namespace AffirmPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AffirmPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AffirmPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AffirmPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AffirmPayments.StatusDetail.Resolution;
                }
              }
              export namespace AfterpayClearpayPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AfterpayClearpayPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AfterpayClearpayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AfterpayClearpayPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AfterpayClearpayPayments.StatusDetail.Resolution;
                }
              }
              export namespace AlmaPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AlmaPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AlmaPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AlmaPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AlmaPayments.StatusDetail.Resolution;
                }
              }
              export namespace AmazonPayPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AmazonPayPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AmazonPayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AmazonPayPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AmazonPayPayments.StatusDetail.Resolution;
                }
              }
              export namespace AuBecsDebitPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AuBecsDebitPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AuBecsDebitPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AuBecsDebitPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.AuBecsDebitPayments.StatusDetail.Resolution;
                }
              }
              export namespace BacsDebitPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BacsDebitPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BacsDebitPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BacsDebitPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BacsDebitPayments.StatusDetail.Resolution;
                }
              }
              export namespace BancontactPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BancontactPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BancontactPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BancontactPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BancontactPayments.StatusDetail.Resolution;
                }
              }
              export namespace BlikPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BlikPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BlikPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BlikPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BlikPayments.StatusDetail.Resolution;
                }
              }
              export namespace BoletoPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BoletoPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BoletoPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BoletoPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.BoletoPayments.StatusDetail.Resolution;
                }
              }
              export namespace CardPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.CardPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.CardPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.CardPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.CardPayments.StatusDetail.Resolution;
                }
              }
              export namespace CartesBancairesPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.CartesBancairesPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.CartesBancairesPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.CartesBancairesPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.CartesBancairesPayments.StatusDetail.Resolution;
                }
              }
              export namespace CashappPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.CashappPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.CashappPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.CashappPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.CashappPayments.StatusDetail.Resolution;
                }
              }
              export namespace EpsPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.EpsPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.EpsPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.EpsPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.EpsPayments.StatusDetail.Resolution;
                }
              }
              export namespace FpxPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.FpxPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.FpxPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.FpxPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.FpxPayments.StatusDetail.Resolution;
                }
              }
              export namespace GbBankTransferPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.GbBankTransferPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.GbBankTransferPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.GbBankTransferPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.GbBankTransferPayments.StatusDetail.Resolution;
                }
              }
              export namespace GrabpayPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.GrabpayPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.GrabpayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.GrabpayPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.GrabpayPayments.StatusDetail.Resolution;
                }
              }
              export namespace IdealPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.IdealPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.IdealPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.IdealPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.IdealPayments.StatusDetail.Resolution;
                }
              }
              export namespace JcbPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.JcbPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.JcbPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.JcbPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.JcbPayments.StatusDetail.Resolution;
                }
              }
              export namespace JpBankTransferPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.JpBankTransferPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.JpBankTransferPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.JpBankTransferPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.JpBankTransferPayments.StatusDetail.Resolution;
                }
              }
              export namespace KakaoPayPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KakaoPayPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KakaoPayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KakaoPayPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KakaoPayPayments.StatusDetail.Resolution;
                }
              }
              export namespace KlarnaPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KlarnaPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KlarnaPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KlarnaPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KlarnaPayments.StatusDetail.Resolution;
                }
              }
              export namespace KonbiniPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KonbiniPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KonbiniPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KonbiniPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KonbiniPayments.StatusDetail.Resolution;
                }
              }
              export namespace KrCardPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KrCardPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KrCardPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KrCardPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.KrCardPayments.StatusDetail.Resolution;
                }
              }
              export namespace LinkPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.LinkPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.LinkPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.LinkPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.LinkPayments.StatusDetail.Resolution;
                }
              }
              export namespace MobilepayPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.MobilepayPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.MobilepayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.MobilepayPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.MobilepayPayments.StatusDetail.Resolution;
                }
              }
              export namespace MultibancoPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.MultibancoPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.MultibancoPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.MultibancoPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.MultibancoPayments.StatusDetail.Resolution;
                }
              }
              export namespace MxBankTransferPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.MxBankTransferPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.MxBankTransferPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.MxBankTransferPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.MxBankTransferPayments.StatusDetail.Resolution;
                }
              }
              export namespace NaverPayPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.NaverPayPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.NaverPayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.NaverPayPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.NaverPayPayments.StatusDetail.Resolution;
                }
              }
              export namespace OxxoPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.OxxoPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.OxxoPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.OxxoPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.OxxoPayments.StatusDetail.Resolution;
                }
              }
              export namespace P24Payments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.P24Payments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.P24Payments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.P24Payments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.P24Payments.StatusDetail.Resolution;
                }
              }
              export namespace PayByBankPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PayByBankPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PayByBankPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PayByBankPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PayByBankPayments.StatusDetail.Resolution;
                }
              }
              export namespace PaycoPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PaycoPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PaycoPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PaycoPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PaycoPayments.StatusDetail.Resolution;
                }
              }
              export namespace PaynowPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PaynowPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PaynowPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PaynowPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PaynowPayments.StatusDetail.Resolution;
                }
              }
              export namespace PromptpayPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PromptpayPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PromptpayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PromptpayPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.PromptpayPayments.StatusDetail.Resolution;
                }
              }
              export namespace RevolutPayPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.RevolutPayPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.RevolutPayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.RevolutPayPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.RevolutPayPayments.StatusDetail.Resolution;
                }
              }
              export namespace SamsungPayPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SamsungPayPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SamsungPayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SamsungPayPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SamsungPayPayments.StatusDetail.Resolution;
                }
              }
              export namespace SepaBankTransferPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SepaBankTransferPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SepaBankTransferPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SepaBankTransferPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SepaBankTransferPayments.StatusDetail.Resolution;
                }
              }
              export namespace SepaDebitPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SepaDebitPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SepaDebitPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SepaDebitPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SepaDebitPayments.StatusDetail.Resolution;
                }
              }
              export namespace StripeBalance {
                export type Payouts = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.StripeBalance.Payouts;
                export namespace Payouts {
                  export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.StripeBalance.Payouts.Status;
                  export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.StripeBalance.Payouts.StatusDetail;
                  export namespace StatusDetail {
                    export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.StripeBalance.Payouts.StatusDetail.Code;
                    export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.StripeBalance.Payouts.StatusDetail.Resolution;
                  }
                }
              }
              export namespace SunbitPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SunbitPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SunbitPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SunbitPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SunbitPayments.StatusDetail.Resolution;
                }
              }
              export namespace SwishPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SwishPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SwishPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SwishPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.SwishPayments.StatusDetail.Resolution;
                }
              }
              export namespace TwintPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.TwintPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.TwintPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.TwintPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.TwintPayments.StatusDetail.Resolution;
                }
              }
              export namespace UsBankTransferPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.UsBankTransferPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.UsBankTransferPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.UsBankTransferPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.UsBankTransferPayments.StatusDetail.Resolution;
                }
              }
              export namespace ZipPayments {
                export type Status = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.ZipPayments.Status;
                export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.ZipPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.ZipPayments.StatusDetail.Code;
                  export type Resolution = Stripe_.V2.Core.Account.Configuration.Merchant.Capabilities.ZipPayments.StatusDetail.Resolution;
                }
              }
            }
            export namespace CardPayments {
              export type DeclineOn = Stripe_.V2.Core.Account.Configuration.Merchant.CardPayments.DeclineOn;
            }
            export namespace KonbiniPayments {
              export type Support = Stripe_.V2.Core.Account.Configuration.Merchant.KonbiniPayments.Support;
              export namespace Support {
                export type Hours = Stripe_.V2.Core.Account.Configuration.Merchant.KonbiniPayments.Support.Hours;
              }
            }
            export namespace ScriptStatementDescriptor {
              export type Kana = Stripe_.V2.Core.Account.Configuration.Merchant.ScriptStatementDescriptor.Kana;
              export type Kanji = Stripe_.V2.Core.Account.Configuration.Merchant.ScriptStatementDescriptor.Kanji;
            }
            export namespace Support {
              export type Address = Stripe_.V2.Core.Account.Configuration.Merchant.Support.Address;
            }
          }
          export namespace Recipient {
            export type Capabilities = Stripe_.V2.Core.Account.Configuration.Recipient.Capabilities;
            export namespace Capabilities {
              export type StripeBalance = Stripe_.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance;
              export namespace StripeBalance {
                export type Payouts = Stripe_.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.Payouts;
                export type StripeTransfers = Stripe_.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.StripeTransfers;
                export namespace Payouts {
                  export type Status = Stripe_.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.Payouts.Status;
                  export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.Payouts.StatusDetail;
                  export namespace StatusDetail {
                    export type Code = Stripe_.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.Payouts.StatusDetail.Code;
                    export type Resolution = Stripe_.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.Payouts.StatusDetail.Resolution;
                  }
                }
                export namespace StripeTransfers {
                  export type Status = Stripe_.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.StripeTransfers.Status;
                  export type StatusDetail = Stripe_.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.StripeTransfers.StatusDetail;
                  export namespace StatusDetail {
                    export type Code = Stripe_.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.StripeTransfers.StatusDetail.Code;
                    export type Resolution = Stripe_.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.StripeTransfers.StatusDetail.Resolution;
                  }
                }
              }
            }
          }
        }
        export namespace Defaults {
          export type Locale = Stripe_.V2.Core.Account.Defaults.Locale;
          export type Profile = Stripe_.V2.Core.Account.Defaults.Profile;
          export type Responsibilities = Stripe_.V2.Core.Account.Defaults.Responsibilities;
          export namespace Responsibilities {
            export type FeesCollector = Stripe_.V2.Core.Account.Defaults.Responsibilities.FeesCollector;
            export type LossesCollector = Stripe_.V2.Core.Account.Defaults.Responsibilities.LossesCollector;
            export type RequirementsCollector = Stripe_.V2.Core.Account.Defaults.Responsibilities.RequirementsCollector;
          }
        }
        export namespace FutureRequirements {
          export type Entry = Stripe_.V2.Core.Account.FutureRequirements.Entry;
          export type Summary = Stripe_.V2.Core.Account.FutureRequirements.Summary;
          export namespace Entry {
            export type AwaitingActionFrom = Stripe_.V2.Core.Account.FutureRequirements.Entry.AwaitingActionFrom;
            export type Error = Stripe_.V2.Core.Account.FutureRequirements.Entry.Error;
            export type Impact = Stripe_.V2.Core.Account.FutureRequirements.Entry.Impact;
            export type MinimumDeadline = Stripe_.V2.Core.Account.FutureRequirements.Entry.MinimumDeadline;
            export type Reference = Stripe_.V2.Core.Account.FutureRequirements.Entry.Reference;
            export type RequestedReason = Stripe_.V2.Core.Account.FutureRequirements.Entry.RequestedReason;
            export namespace Error {
              export type Code = Stripe_.V2.Core.Account.FutureRequirements.Entry.Error.Code;
            }
            export namespace Impact {
              export type RestrictsCapability = Stripe_.V2.Core.Account.FutureRequirements.Entry.Impact.RestrictsCapability;
              export namespace RestrictsCapability {
                export type Capability = Stripe_.V2.Core.Account.FutureRequirements.Entry.Impact.RestrictsCapability.Capability;
                export type Configuration = Stripe_.V2.Core.Account.FutureRequirements.Entry.Impact.RestrictsCapability.Configuration;
                export type Deadline = Stripe_.V2.Core.Account.FutureRequirements.Entry.Impact.RestrictsCapability.Deadline;
                export namespace Deadline {
                  export type Status = Stripe_.V2.Core.Account.FutureRequirements.Entry.Impact.RestrictsCapability.Deadline.Status;
                }
              }
            }
            export namespace MinimumDeadline {
              export type Status = Stripe_.V2.Core.Account.FutureRequirements.Entry.MinimumDeadline.Status;
            }
            export namespace Reference {
              export type Type = Stripe_.V2.Core.Account.FutureRequirements.Entry.Reference.Type;
            }
            export namespace RequestedReason {
              export type Code = Stripe_.V2.Core.Account.FutureRequirements.Entry.RequestedReason.Code;
            }
          }
          export namespace Summary {
            export type MinimumDeadline = Stripe_.V2.Core.Account.FutureRequirements.Summary.MinimumDeadline;
            export namespace MinimumDeadline {
              export type Status = Stripe_.V2.Core.Account.FutureRequirements.Summary.MinimumDeadline.Status;
            }
          }
        }
        export namespace Identity {
          export type Attestations = Stripe_.V2.Core.Account.Identity.Attestations;
          export type BusinessDetails = Stripe_.V2.Core.Account.Identity.BusinessDetails;
          export type EntityType = Stripe_.V2.Core.Account.Identity.EntityType;
          export type Individual = Stripe_.V2.Core.Account.Identity.Individual;
          export namespace Attestations {
            export type DirectorshipDeclaration = Stripe_.V2.Core.Account.Identity.Attestations.DirectorshipDeclaration;
            export type OwnershipDeclaration = Stripe_.V2.Core.Account.Identity.Attestations.OwnershipDeclaration;
            export type PersonsProvided = Stripe_.V2.Core.Account.Identity.Attestations.PersonsProvided;
            export type RepresentativeDeclaration = Stripe_.V2.Core.Account.Identity.Attestations.RepresentativeDeclaration;
            export type TermsOfService = Stripe_.V2.Core.Account.Identity.Attestations.TermsOfService;
            export namespace PersonsProvided {
              export type OwnershipExemptionReason = Stripe_.V2.Core.Account.Identity.Attestations.PersonsProvided.OwnershipExemptionReason;
            }
            export namespace TermsOfService {
              export type Account = Stripe_.V2.Core.Account.Identity.Attestations.TermsOfService.Account;
            }
          }
          export namespace BusinessDetails {
            export type Address = Stripe_.V2.Core.Account.Identity.BusinessDetails.Address;
            export type AnnualRevenue = Stripe_.V2.Core.Account.Identity.BusinessDetails.AnnualRevenue;
            export type Documents = Stripe_.V2.Core.Account.Identity.BusinessDetails.Documents;
            export type IdNumber = Stripe_.V2.Core.Account.Identity.BusinessDetails.IdNumber;
            export type MonthlyEstimatedRevenue = Stripe_.V2.Core.Account.Identity.BusinessDetails.MonthlyEstimatedRevenue;
            export type RegistrationDate = Stripe_.V2.Core.Account.Identity.BusinessDetails.RegistrationDate;
            export type ScriptAddresses = Stripe_.V2.Core.Account.Identity.BusinessDetails.ScriptAddresses;
            export type ScriptNames = Stripe_.V2.Core.Account.Identity.BusinessDetails.ScriptNames;
            export type Structure = Stripe_.V2.Core.Account.Identity.BusinessDetails.Structure;
            export namespace Documents {
              export type BankAccountOwnershipVerification = Stripe_.V2.Core.Account.Identity.BusinessDetails.Documents.BankAccountOwnershipVerification;
              export type CompanyLicense = Stripe_.V2.Core.Account.Identity.BusinessDetails.Documents.CompanyLicense;
              export type CompanyMemorandumOfAssociation = Stripe_.V2.Core.Account.Identity.BusinessDetails.Documents.CompanyMemorandumOfAssociation;
              export type CompanyMinisterialDecree = Stripe_.V2.Core.Account.Identity.BusinessDetails.Documents.CompanyMinisterialDecree;
              export type CompanyRegistrationVerification = Stripe_.V2.Core.Account.Identity.BusinessDetails.Documents.CompanyRegistrationVerification;
              export type CompanyTaxIdVerification = Stripe_.V2.Core.Account.Identity.BusinessDetails.Documents.CompanyTaxIdVerification;
              export type PrimaryVerification = Stripe_.V2.Core.Account.Identity.BusinessDetails.Documents.PrimaryVerification;
              export type ProofOfAddress = Stripe_.V2.Core.Account.Identity.BusinessDetails.Documents.ProofOfAddress;
              export type ProofOfRegistration = Stripe_.V2.Core.Account.Identity.BusinessDetails.Documents.ProofOfRegistration;
              export type ProofOfUltimateBeneficialOwnership = Stripe_.V2.Core.Account.Identity.BusinessDetails.Documents.ProofOfUltimateBeneficialOwnership;
              export namespace PrimaryVerification {
                export type FrontBack = Stripe_.V2.Core.Account.Identity.BusinessDetails.Documents.PrimaryVerification.FrontBack;
              }
              export namespace ProofOfRegistration {
                export type Signer = Stripe_.V2.Core.Account.Identity.BusinessDetails.Documents.ProofOfRegistration.Signer;
              }
              export namespace ProofOfUltimateBeneficialOwnership {
                export type Signer = Stripe_.V2.Core.Account.Identity.BusinessDetails.Documents.ProofOfUltimateBeneficialOwnership.Signer;
              }
            }
            export namespace IdNumber {
              export type Type = Stripe_.V2.Core.Account.Identity.BusinessDetails.IdNumber.Type;
            }
            export namespace ScriptAddresses {
              export type Kana = Stripe_.V2.Core.Account.Identity.BusinessDetails.ScriptAddresses.Kana;
              export type Kanji = Stripe_.V2.Core.Account.Identity.BusinessDetails.ScriptAddresses.Kanji;
            }
            export namespace ScriptNames {
              export type Kana = Stripe_.V2.Core.Account.Identity.BusinessDetails.ScriptNames.Kana;
              export type Kanji = Stripe_.V2.Core.Account.Identity.BusinessDetails.ScriptNames.Kanji;
            }
          }
          export namespace Individual {
            export type AdditionalAddress = Stripe_.V2.Core.Account.Identity.Individual.AdditionalAddress;
            export type AdditionalName = Stripe_.V2.Core.Account.Identity.Individual.AdditionalName;
            export type AdditionalTermsOfService = Stripe_.V2.Core.Account.Identity.Individual.AdditionalTermsOfService;
            export type Address = Stripe_.V2.Core.Account.Identity.Individual.Address;
            export type DateOfBirth = Stripe_.V2.Core.Account.Identity.Individual.DateOfBirth;
            export type Documents = Stripe_.V2.Core.Account.Identity.Individual.Documents;
            export type IdNumber = Stripe_.V2.Core.Account.Identity.Individual.IdNumber;
            export type LegalGender = Stripe_.V2.Core.Account.Identity.Individual.LegalGender;
            export type PoliticalExposure = Stripe_.V2.Core.Account.Identity.Individual.PoliticalExposure;
            export type Relationship = Stripe_.V2.Core.Account.Identity.Individual.Relationship;
            export type ScriptAddresses = Stripe_.V2.Core.Account.Identity.Individual.ScriptAddresses;
            export type ScriptNames = Stripe_.V2.Core.Account.Identity.Individual.ScriptNames;
            export namespace AdditionalName {
              export type Purpose = Stripe_.V2.Core.Account.Identity.Individual.AdditionalName.Purpose;
            }
            export namespace AdditionalTermsOfService {
              export type Account = Stripe_.V2.Core.Account.Identity.Individual.AdditionalTermsOfService.Account;
            }
            export namespace Documents {
              export type CompanyAuthorization = Stripe_.V2.Core.Account.Identity.Individual.Documents.CompanyAuthorization;
              export type Passport = Stripe_.V2.Core.Account.Identity.Individual.Documents.Passport;
              export type PrimaryVerification = Stripe_.V2.Core.Account.Identity.Individual.Documents.PrimaryVerification;
              export type SecondaryVerification = Stripe_.V2.Core.Account.Identity.Individual.Documents.SecondaryVerification;
              export type Visa = Stripe_.V2.Core.Account.Identity.Individual.Documents.Visa;
              export namespace PrimaryVerification {
                export type FrontBack = Stripe_.V2.Core.Account.Identity.Individual.Documents.PrimaryVerification.FrontBack;
              }
              export namespace SecondaryVerification {
                export type FrontBack = Stripe_.V2.Core.Account.Identity.Individual.Documents.SecondaryVerification.FrontBack;
              }
            }
            export namespace IdNumber {
              export type Type = Stripe_.V2.Core.Account.Identity.Individual.IdNumber.Type;
            }
            export namespace ScriptAddresses {
              export type Kana = Stripe_.V2.Core.Account.Identity.Individual.ScriptAddresses.Kana;
              export type Kanji = Stripe_.V2.Core.Account.Identity.Individual.ScriptAddresses.Kanji;
            }
            export namespace ScriptNames {
              export type Kana = Stripe_.V2.Core.Account.Identity.Individual.ScriptNames.Kana;
              export type Kanji = Stripe_.V2.Core.Account.Identity.Individual.ScriptNames.Kanji;
            }
          }
        }
        export namespace Requirements {
          export type Entry = Stripe_.V2.Core.Account.Requirements.Entry;
          export type Summary = Stripe_.V2.Core.Account.Requirements.Summary;
          export namespace Entry {
            export type AwaitingActionFrom = Stripe_.V2.Core.Account.Requirements.Entry.AwaitingActionFrom;
            export type Error = Stripe_.V2.Core.Account.Requirements.Entry.Error;
            export type Impact = Stripe_.V2.Core.Account.Requirements.Entry.Impact;
            export type MinimumDeadline = Stripe_.V2.Core.Account.Requirements.Entry.MinimumDeadline;
            export type Reference = Stripe_.V2.Core.Account.Requirements.Entry.Reference;
            export type RequestedReason = Stripe_.V2.Core.Account.Requirements.Entry.RequestedReason;
            export namespace Error {
              export type Code = Stripe_.V2.Core.Account.Requirements.Entry.Error.Code;
            }
            export namespace Impact {
              export type RestrictsCapability = Stripe_.V2.Core.Account.Requirements.Entry.Impact.RestrictsCapability;
              export namespace RestrictsCapability {
                export type Capability = Stripe_.V2.Core.Account.Requirements.Entry.Impact.RestrictsCapability.Capability;
                export type Configuration = Stripe_.V2.Core.Account.Requirements.Entry.Impact.RestrictsCapability.Configuration;
                export type Deadline = Stripe_.V2.Core.Account.Requirements.Entry.Impact.RestrictsCapability.Deadline;
                export namespace Deadline {
                  export type Status = Stripe_.V2.Core.Account.Requirements.Entry.Impact.RestrictsCapability.Deadline.Status;
                }
              }
            }
            export namespace MinimumDeadline {
              export type Status = Stripe_.V2.Core.Account.Requirements.Entry.MinimumDeadline.Status;
            }
            export namespace Reference {
              export type Type = Stripe_.V2.Core.Account.Requirements.Entry.Reference.Type;
            }
            export namespace RequestedReason {
              export type Code = Stripe_.V2.Core.Account.Requirements.Entry.RequestedReason.Code;
            }
          }
          export namespace Summary {
            export type MinimumDeadline = Stripe_.V2.Core.Account.Requirements.Summary.MinimumDeadline;
            export namespace MinimumDeadline {
              export type Status = Stripe_.V2.Core.Account.Requirements.Summary.MinimumDeadline.Status;
            }
          }
        }
      }
      export namespace AccountLinkCreateParams {
        export type UseCase = Stripe_.V2.Core.AccountLinkCreateParams.UseCase;
        export namespace UseCase {
          export type AccountOnboarding = Stripe_.V2.Core.AccountLinkCreateParams.UseCase.AccountOnboarding;
          export type AccountUpdate = Stripe_.V2.Core.AccountLinkCreateParams.UseCase.AccountUpdate;
          export type Type = Stripe_.V2.Core.AccountLinkCreateParams.UseCase.Type;
          export namespace AccountOnboarding {
            export type CollectionOptions = Stripe_.V2.Core.AccountLinkCreateParams.UseCase.AccountOnboarding.CollectionOptions;
            export type Configuration = Stripe_.V2.Core.AccountLinkCreateParams.UseCase.AccountOnboarding.Configuration;
            export namespace CollectionOptions {
              export type Fields = Stripe_.V2.Core.AccountLinkCreateParams.UseCase.AccountOnboarding.CollectionOptions.Fields;
              export type FutureRequirements = Stripe_.V2.Core.AccountLinkCreateParams.UseCase.AccountOnboarding.CollectionOptions.FutureRequirements;
            }
          }
          export namespace AccountUpdate {
            export type CollectionOptions = Stripe_.V2.Core.AccountLinkCreateParams.UseCase.AccountUpdate.CollectionOptions;
            export type Configuration = Stripe_.V2.Core.AccountLinkCreateParams.UseCase.AccountUpdate.Configuration;
            export namespace CollectionOptions {
              export type Fields = Stripe_.V2.Core.AccountLinkCreateParams.UseCase.AccountUpdate.CollectionOptions.Fields;
              export type FutureRequirements = Stripe_.V2.Core.AccountLinkCreateParams.UseCase.AccountUpdate.CollectionOptions.FutureRequirements;
            }
          }
        }
      }
      export namespace AccountLink {
        export type UseCase = Stripe_.V2.Core.AccountLink.UseCase;
        export namespace UseCase {
          export type AccountOnboarding = Stripe_.V2.Core.AccountLink.UseCase.AccountOnboarding;
          export type AccountUpdate = Stripe_.V2.Core.AccountLink.UseCase.AccountUpdate;
          export type Type = Stripe_.V2.Core.AccountLink.UseCase.Type;
          export namespace AccountOnboarding {
            export type CollectionOptions = Stripe_.V2.Core.AccountLink.UseCase.AccountOnboarding.CollectionOptions;
            export type Configuration = Stripe_.V2.Core.AccountLink.UseCase.AccountOnboarding.Configuration;
            export namespace CollectionOptions {
              export type Fields = Stripe_.V2.Core.AccountLink.UseCase.AccountOnboarding.CollectionOptions.Fields;
              export type FutureRequirements = Stripe_.V2.Core.AccountLink.UseCase.AccountOnboarding.CollectionOptions.FutureRequirements;
            }
          }
          export namespace AccountUpdate {
            export type CollectionOptions = Stripe_.V2.Core.AccountLink.UseCase.AccountUpdate.CollectionOptions;
            export type Configuration = Stripe_.V2.Core.AccountLink.UseCase.AccountUpdate.Configuration;
            export namespace CollectionOptions {
              export type Fields = Stripe_.V2.Core.AccountLink.UseCase.AccountUpdate.CollectionOptions.Fields;
              export type FutureRequirements = Stripe_.V2.Core.AccountLink.UseCase.AccountUpdate.CollectionOptions.FutureRequirements;
            }
          }
        }
      }
      export namespace AccountTokenCreateParams {
        export type Identity = Stripe_.V2.Core.AccountTokenCreateParams.Identity;
        export namespace Identity {
          export type Attestations = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Attestations;
          export type BusinessDetails = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails;
          export type EntityType = Stripe_.V2.Core.AccountTokenCreateParams.Identity.EntityType;
          export type Individual = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual;
          export namespace Attestations {
            export type DirectorshipDeclaration = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Attestations.DirectorshipDeclaration;
            export type OwnershipDeclaration = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Attestations.OwnershipDeclaration;
            export type PersonsProvided = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Attestations.PersonsProvided;
            export type RepresentativeDeclaration = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Attestations.RepresentativeDeclaration;
            export type TermsOfService = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Attestations.TermsOfService;
            export namespace PersonsProvided {
              export type OwnershipExemptionReason = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Attestations.PersonsProvided.OwnershipExemptionReason;
            }
            export namespace TermsOfService {
              export type Account = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Attestations.TermsOfService.Account;
            }
          }
          export namespace BusinessDetails {
            export type AnnualRevenue = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.AnnualRevenue;
            export type Documents = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents;
            export type IdNumber = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.IdNumber;
            export type MonthlyEstimatedRevenue = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.MonthlyEstimatedRevenue;
            export type RegistrationDate = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.RegistrationDate;
            export type ScriptAddresses = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.ScriptAddresses;
            export type ScriptNames = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.ScriptNames;
            export type Structure = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Structure;
            export namespace Documents {
              export type BankAccountOwnershipVerification = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.BankAccountOwnershipVerification;
              export type CompanyLicense = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.CompanyLicense;
              export type CompanyMemorandumOfAssociation = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.CompanyMemorandumOfAssociation;
              export type CompanyMinisterialDecree = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.CompanyMinisterialDecree;
              export type CompanyRegistrationVerification = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.CompanyRegistrationVerification;
              export type CompanyTaxIdVerification = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.CompanyTaxIdVerification;
              export type PrimaryVerification = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.PrimaryVerification;
              export type ProofOfAddress = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.ProofOfAddress;
              export type ProofOfRegistration = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.ProofOfRegistration;
              export type ProofOfUltimateBeneficialOwnership = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.ProofOfUltimateBeneficialOwnership;
              export namespace PrimaryVerification {
                export type FrontBack = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.PrimaryVerification.FrontBack;
              }
              export namespace ProofOfRegistration {
                export type Signer = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.ProofOfRegistration.Signer;
              }
              export namespace ProofOfUltimateBeneficialOwnership {
                export type Signer = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.ProofOfUltimateBeneficialOwnership.Signer;
              }
            }
            export namespace IdNumber {
              export type Type = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.IdNumber.Type;
            }
            export namespace ScriptNames {
              export type Kana = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.ScriptNames.Kana;
              export type Kanji = Stripe_.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.ScriptNames.Kanji;
            }
          }
          export namespace Individual {
            export type AdditionalAddress = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.AdditionalAddress;
            export type AdditionalName = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.AdditionalName;
            export type DateOfBirth = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.DateOfBirth;
            export type Documents = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.Documents;
            export type IdNumber = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.IdNumber;
            export type LegalGender = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.LegalGender;
            export type PoliticalExposure = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.PoliticalExposure;
            export type Relationship = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.Relationship;
            export type ScriptAddresses = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.ScriptAddresses;
            export type ScriptNames = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.ScriptNames;
            export namespace AdditionalName {
              export type Purpose = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.AdditionalName.Purpose;
            }
            export namespace Documents {
              export type CompanyAuthorization = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.Documents.CompanyAuthorization;
              export type Passport = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.Documents.Passport;
              export type PrimaryVerification = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.Documents.PrimaryVerification;
              export type SecondaryVerification = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.Documents.SecondaryVerification;
              export type Visa = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.Documents.Visa;
              export namespace PrimaryVerification {
                export type FrontBack = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.Documents.PrimaryVerification.FrontBack;
              }
              export namespace SecondaryVerification {
                export type FrontBack = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.Documents.SecondaryVerification.FrontBack;
              }
            }
            export namespace IdNumber {
              export type Type = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.IdNumber.Type;
            }
            export namespace ScriptNames {
              export type Kana = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.ScriptNames.Kana;
              export type Kanji = Stripe_.V2.Core.AccountTokenCreateParams.Identity.Individual.ScriptNames.Kanji;
            }
          }
        }
      }
      export namespace Event {
        export type Changes = Stripe_.V2.Core.Event.Changes;
        export type Reason = Stripe_.V2.Core.Event.Reason;
        export namespace Reason {
          export type Request = Stripe_.V2.Core.Event.Reason.Request;
        }
      }
      export namespace EventDestinationCreateParams {
        export type EventPayload = Stripe_.V2.Core.EventDestinationCreateParams.EventPayload;
        export type Type = Stripe_.V2.Core.EventDestinationCreateParams.Type;
        export type AmazonEventbridge = Stripe_.V2.Core.EventDestinationCreateParams.AmazonEventbridge;
        export type AzureEventGrid = Stripe_.V2.Core.EventDestinationCreateParams.AzureEventGrid;
        export type Include = Stripe_.V2.Core.EventDestinationCreateParams.Include;
        export type WebhookEndpoint = Stripe_.V2.Core.EventDestinationCreateParams.WebhookEndpoint;
      }
      export namespace EventDestination {
        export type AmazonEventbridge = Stripe_.V2.Core.EventDestination.AmazonEventbridge;
        export type AzureEventGrid = Stripe_.V2.Core.EventDestination.AzureEventGrid;
        export type EventPayload = Stripe_.V2.Core.EventDestination.EventPayload;
        export type Status = Stripe_.V2.Core.EventDestination.Status;
        export type StatusDetails = Stripe_.V2.Core.EventDestination.StatusDetails;
        export type Type = Stripe_.V2.Core.EventDestination.Type;
        export type WebhookEndpoint = Stripe_.V2.Core.EventDestination.WebhookEndpoint;
        export namespace AmazonEventbridge {
          export type AwsEventSourceStatus = Stripe_.V2.Core.EventDestination.AmazonEventbridge.AwsEventSourceStatus;
        }
        export namespace AzureEventGrid {
          export type AzurePartnerTopicStatus = Stripe_.V2.Core.EventDestination.AzureEventGrid.AzurePartnerTopicStatus;
        }
        export namespace StatusDetails {
          export type Disabled = Stripe_.V2.Core.EventDestination.StatusDetails.Disabled;
          export namespace Disabled {
            export type Reason = Stripe_.V2.Core.EventDestination.StatusDetails.Disabled.Reason;
          }
        }
      }
      export namespace AccountPerson {
        export type AdditionalAddress = Stripe_.V2.Core.AccountPerson.AdditionalAddress;
        export type AdditionalName = Stripe_.V2.Core.AccountPerson.AdditionalName;
        export type AdditionalTermsOfService = Stripe_.V2.Core.AccountPerson.AdditionalTermsOfService;
        export type Address = Stripe_.V2.Core.AccountPerson.Address;
        export type DateOfBirth = Stripe_.V2.Core.AccountPerson.DateOfBirth;
        export type Documents = Stripe_.V2.Core.AccountPerson.Documents;
        export type IdNumber = Stripe_.V2.Core.AccountPerson.IdNumber;
        export type LegalGender = Stripe_.V2.Core.AccountPerson.LegalGender;
        export type PoliticalExposure = Stripe_.V2.Core.AccountPerson.PoliticalExposure;
        export type Relationship = Stripe_.V2.Core.AccountPerson.Relationship;
        export type ScriptAddresses = Stripe_.V2.Core.AccountPerson.ScriptAddresses;
        export type ScriptNames = Stripe_.V2.Core.AccountPerson.ScriptNames;
        export namespace AdditionalName {
          export type Purpose = Stripe_.V2.Core.AccountPerson.AdditionalName.Purpose;
        }
        export namespace AdditionalTermsOfService {
          export type Account = Stripe_.V2.Core.AccountPerson.AdditionalTermsOfService.Account;
        }
        export namespace Documents {
          export type CompanyAuthorization = Stripe_.V2.Core.AccountPerson.Documents.CompanyAuthorization;
          export type Passport = Stripe_.V2.Core.AccountPerson.Documents.Passport;
          export type PrimaryVerification = Stripe_.V2.Core.AccountPerson.Documents.PrimaryVerification;
          export type SecondaryVerification = Stripe_.V2.Core.AccountPerson.Documents.SecondaryVerification;
          export type Visa = Stripe_.V2.Core.AccountPerson.Documents.Visa;
          export namespace PrimaryVerification {
            export type FrontBack = Stripe_.V2.Core.AccountPerson.Documents.PrimaryVerification.FrontBack;
          }
          export namespace SecondaryVerification {
            export type FrontBack = Stripe_.V2.Core.AccountPerson.Documents.SecondaryVerification.FrontBack;
          }
        }
        export namespace IdNumber {
          export type Type = Stripe_.V2.Core.AccountPerson.IdNumber.Type;
        }
        export namespace ScriptAddresses {
          export type Kana = Stripe_.V2.Core.AccountPerson.ScriptAddresses.Kana;
          export type Kanji = Stripe_.V2.Core.AccountPerson.ScriptAddresses.Kanji;
        }
        export namespace ScriptNames {
          export type Kana = Stripe_.V2.Core.AccountPerson.ScriptNames.Kana;
          export type Kanji = Stripe_.V2.Core.AccountPerson.ScriptNames.Kanji;
        }
      }
    }
    export namespace Commerce {
      export type ProductCatalogImport = Stripe_.V2.Commerce.ProductCatalogImport;
      export namespace ProductCatalogImport {
        export type FeedType = Stripe_.V2.Commerce.ProductCatalogImport.FeedType;
        export type Mode = Stripe_.V2.Commerce.ProductCatalogImport.Mode;
        export type Status = Stripe_.V2.Commerce.ProductCatalogImport.Status;
        export type StatusDetails = Stripe_.V2.Commerce.ProductCatalogImport.StatusDetails;
        export namespace StatusDetails {
          export type AwaitingUpload = Stripe_.V2.Commerce.ProductCatalogImport.StatusDetails.AwaitingUpload;
          export type Failed = Stripe_.V2.Commerce.ProductCatalogImport.StatusDetails.Failed;
          export type Processing = Stripe_.V2.Commerce.ProductCatalogImport.StatusDetails.Processing;
          export type Succeeded = Stripe_.V2.Commerce.ProductCatalogImport.StatusDetails.Succeeded;
          export type SucceededWithErrors = Stripe_.V2.Commerce.ProductCatalogImport.StatusDetails.SucceededWithErrors;
          export namespace AwaitingUpload {
            export type UploadUrl = Stripe_.V2.Commerce.ProductCatalogImport.StatusDetails.AwaitingUpload.UploadUrl;
          }
          export namespace Failed {
            export type Code = Stripe_.V2.Commerce.ProductCatalogImport.StatusDetails.Failed.Code;
            export type Type = Stripe_.V2.Commerce.ProductCatalogImport.StatusDetails.Failed.Type;
          }
          export namespace SucceededWithErrors {
            export type ErrorFile = Stripe_.V2.Commerce.ProductCatalogImport.StatusDetails.SucceededWithErrors.ErrorFile;
            export type Sample = Stripe_.V2.Commerce.ProductCatalogImport.StatusDetails.SucceededWithErrors.Sample;
            export namespace ErrorFile {
              export type DownloadUrl = Stripe_.V2.Commerce.ProductCatalogImport.StatusDetails.SucceededWithErrors.ErrorFile.DownloadUrl;
            }
          }
        }
      }
    }
  }
  export namespace Reserve {
    export type Hold = Stripe_.Reserve.Hold;
    export type Plan = Stripe_.Reserve.Plan;
    export type Release = Stripe_.Reserve.Release;
    export namespace Hold {
      export type CreatedBy = Stripe_.Reserve.Hold.CreatedBy;
      export type Reason = Stripe_.Reserve.Hold.Reason;
      export type ReleaseDetail = Stripe_.Reserve.Hold.ReleaseDetail;
      export type ReleaseSchedule = Stripe_.Reserve.Hold.ReleaseSchedule;
      export type SourceType = Stripe_.Reserve.Hold.SourceType;
    }
    export namespace Plan {
      export type CreatedBy = Stripe_.Reserve.Plan.CreatedBy;
      export type FixedRelease = Stripe_.Reserve.Plan.FixedRelease;
      export type RollingRelease = Stripe_.Reserve.Plan.RollingRelease;
      export type Status = Stripe_.Reserve.Plan.Status;
      export type Type = Stripe_.Reserve.Plan.Type;
    }
    export namespace Release {
      export type CreatedBy = Stripe_.Reserve.Release.CreatedBy;
      export type Reason = Stripe_.Reserve.Release.Reason;
      export type SourceTransaction = Stripe_.Reserve.Release.SourceTransaction;
      export namespace SourceTransaction {
        export type Type = Stripe_.Reserve.Release.SourceTransaction.Type;
      }
    }
  }
  export namespace Events {
    export type UnknownEventNotification = Stripe_.V2.Core.Events.UnknownEventNotification;
    export type V1BillingMeterErrorReportTriggeredEvent = Stripe_.V2.Core.Events.V1BillingMeterErrorReportTriggeredEvent;
    export type V1BillingMeterErrorReportTriggeredEventNotification = Stripe_.V2.Core.Events.V1BillingMeterErrorReportTriggeredEventNotification;
    export type V1BillingMeterNoMeterFoundEvent = Stripe_.V2.Core.Events.V1BillingMeterNoMeterFoundEvent;
    export type V1BillingMeterNoMeterFoundEventNotification = Stripe_.V2.Core.Events.V1BillingMeterNoMeterFoundEventNotification;
    export type V2CommerceProductCatalogImportsFailedEvent = Stripe_.V2.Core.Events.V2CommerceProductCatalogImportsFailedEvent;
    export type V2CommerceProductCatalogImportsFailedEventNotification = Stripe_.V2.Core.Events.V2CommerceProductCatalogImportsFailedEventNotification;
    export type V2CommerceProductCatalogImportsProcessingEvent = Stripe_.V2.Core.Events.V2CommerceProductCatalogImportsProcessingEvent;
    export type V2CommerceProductCatalogImportsProcessingEventNotification = Stripe_.V2.Core.Events.V2CommerceProductCatalogImportsProcessingEventNotification;
    export type V2CommerceProductCatalogImportsSucceededEvent = Stripe_.V2.Core.Events.V2CommerceProductCatalogImportsSucceededEvent;
    export type V2CommerceProductCatalogImportsSucceededEventNotification = Stripe_.V2.Core.Events.V2CommerceProductCatalogImportsSucceededEventNotification;
    export type V2CommerceProductCatalogImportsSucceededWithErrorsEvent = Stripe_.V2.Core.Events.V2CommerceProductCatalogImportsSucceededWithErrorsEvent;
    export type V2CommerceProductCatalogImportsSucceededWithErrorsEventNotification = Stripe_.V2.Core.Events.V2CommerceProductCatalogImportsSucceededWithErrorsEventNotification;
    export type V2CoreAccountClosedEvent = Stripe_.V2.Core.Events.V2CoreAccountClosedEvent;
    export type V2CoreAccountClosedEventNotification = Stripe_.V2.Core.Events.V2CoreAccountClosedEventNotification;
    export type V2CoreAccountCreatedEvent = Stripe_.V2.Core.Events.V2CoreAccountCreatedEvent;
    export type V2CoreAccountCreatedEventNotification = Stripe_.V2.Core.Events.V2CoreAccountCreatedEventNotification;
    export type V2CoreAccountUpdatedEvent = Stripe_.V2.Core.Events.V2CoreAccountUpdatedEvent;
    export type V2CoreAccountUpdatedEventNotification = Stripe_.V2.Core.Events.V2CoreAccountUpdatedEventNotification;
    export type V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent = Stripe_.V2.Core.Events.V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEventNotification = Stripe_.V2.Core.Events.V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEventNotification;
    export type V2CoreAccountIncludingConfigurationCustomerUpdatedEvent = Stripe_.V2.Core.Events.V2CoreAccountIncludingConfigurationCustomerUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationCustomerUpdatedEventNotification = Stripe_.V2.Core.Events.V2CoreAccountIncludingConfigurationCustomerUpdatedEventNotification;
    export type V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent = Stripe_.V2.Core.Events.V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEventNotification = Stripe_.V2.Core.Events.V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEventNotification;
    export type V2CoreAccountIncludingConfigurationMerchantUpdatedEvent = Stripe_.V2.Core.Events.V2CoreAccountIncludingConfigurationMerchantUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationMerchantUpdatedEventNotification = Stripe_.V2.Core.Events.V2CoreAccountIncludingConfigurationMerchantUpdatedEventNotification;
    export type V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent = Stripe_.V2.Core.Events.V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEventNotification = Stripe_.V2.Core.Events.V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEventNotification;
    export type V2CoreAccountIncludingConfigurationRecipientUpdatedEvent = Stripe_.V2.Core.Events.V2CoreAccountIncludingConfigurationRecipientUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationRecipientUpdatedEventNotification = Stripe_.V2.Core.Events.V2CoreAccountIncludingConfigurationRecipientUpdatedEventNotification;
    export type V2CoreAccountIncludingDefaultsUpdatedEvent = Stripe_.V2.Core.Events.V2CoreAccountIncludingDefaultsUpdatedEvent;
    export type V2CoreAccountIncludingDefaultsUpdatedEventNotification = Stripe_.V2.Core.Events.V2CoreAccountIncludingDefaultsUpdatedEventNotification;
    export type V2CoreAccountIncludingFutureRequirementsUpdatedEvent = Stripe_.V2.Core.Events.V2CoreAccountIncludingFutureRequirementsUpdatedEvent;
    export type V2CoreAccountIncludingFutureRequirementsUpdatedEventNotification = Stripe_.V2.Core.Events.V2CoreAccountIncludingFutureRequirementsUpdatedEventNotification;
    export type V2CoreAccountIncludingIdentityUpdatedEvent = Stripe_.V2.Core.Events.V2CoreAccountIncludingIdentityUpdatedEvent;
    export type V2CoreAccountIncludingIdentityUpdatedEventNotification = Stripe_.V2.Core.Events.V2CoreAccountIncludingIdentityUpdatedEventNotification;
    export type V2CoreAccountIncludingRequirementsUpdatedEvent = Stripe_.V2.Core.Events.V2CoreAccountIncludingRequirementsUpdatedEvent;
    export type V2CoreAccountIncludingRequirementsUpdatedEventNotification = Stripe_.V2.Core.Events.V2CoreAccountIncludingRequirementsUpdatedEventNotification;
    export type V2CoreAccountLinkReturnedEvent = Stripe_.V2.Core.Events.V2CoreAccountLinkReturnedEvent;
    export type V2CoreAccountLinkReturnedEventNotification = Stripe_.V2.Core.Events.V2CoreAccountLinkReturnedEventNotification;
    export type V2CoreAccountPersonCreatedEvent = Stripe_.V2.Core.Events.V2CoreAccountPersonCreatedEvent;
    export type V2CoreAccountPersonCreatedEventNotification = Stripe_.V2.Core.Events.V2CoreAccountPersonCreatedEventNotification;
    export type V2CoreAccountPersonDeletedEvent = Stripe_.V2.Core.Events.V2CoreAccountPersonDeletedEvent;
    export type V2CoreAccountPersonDeletedEventNotification = Stripe_.V2.Core.Events.V2CoreAccountPersonDeletedEventNotification;
    export type V2CoreAccountPersonUpdatedEvent = Stripe_.V2.Core.Events.V2CoreAccountPersonUpdatedEvent;
    export type V2CoreAccountPersonUpdatedEventNotification = Stripe_.V2.Core.Events.V2CoreAccountPersonUpdatedEventNotification;
    export type V2CoreEventDestinationPingEvent = Stripe_.V2.Core.Events.V2CoreEventDestinationPingEvent;
    export type V2CoreEventDestinationPingEventNotification = Stripe_.V2.Core.Events.V2CoreEventDestinationPingEventNotification;
    export namespace V1BillingMeterErrorReportTriggeredEvent {
      export type Data = Stripe_.V2.Core.Events.V1BillingMeterErrorReportTriggeredEvent.Data;
    }
    export namespace V1BillingMeterNoMeterFoundEvent {
      export type Data = Stripe_.V2.Core.Events.V1BillingMeterNoMeterFoundEvent.Data;
    }
    export namespace V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent {
      export type Data = Stripe_.V2.Core.Events.V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent.Data;
    }
    export namespace V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent {
      export type Data = Stripe_.V2.Core.Events.V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent.Data;
    }
    export namespace V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent {
      export type Data = Stripe_.V2.Core.Events.V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent.Data;
    }
    export namespace V2CoreAccountLinkReturnedEvent {
      export type Data = Stripe_.V2.Core.Events.V2CoreAccountLinkReturnedEvent.Data;
    }
    export namespace V2CoreAccountPersonCreatedEvent {
      export type Data = Stripe_.V2.Core.Events.V2CoreAccountPersonCreatedEvent.Data;
    }
    export namespace V2CoreAccountPersonDeletedEvent {
      export type Data = Stripe_.V2.Core.Events.V2CoreAccountPersonDeletedEvent.Data;
    }
    export namespace V2CoreAccountPersonUpdatedEvent {
      export type Data = Stripe_.V2.Core.Events.V2CoreAccountPersonUpdatedEvent.Data;
    }
  }
  export type AccountApplicationAuthorizedEvent = Stripe_.AccountApplicationAuthorizedEvent;
  export type AccountApplicationDeauthorizedEvent = Stripe_.AccountApplicationDeauthorizedEvent;
  export type AccountExternalAccountCreatedEvent = Stripe_.AccountExternalAccountCreatedEvent;
  export type AccountExternalAccountDeletedEvent = Stripe_.AccountExternalAccountDeletedEvent;
  export type AccountExternalAccountUpdatedEvent = Stripe_.AccountExternalAccountUpdatedEvent;
  export type AccountUpdatedEvent = Stripe_.AccountUpdatedEvent;
  export type ApplicationFeeCreatedEvent = Stripe_.ApplicationFeeCreatedEvent;
  export type ApplicationFeeRefundUpdatedEvent = Stripe_.ApplicationFeeRefundUpdatedEvent;
  export type ApplicationFeeRefundedEvent = Stripe_.ApplicationFeeRefundedEvent;
  export type BalanceAvailableEvent = Stripe_.BalanceAvailableEvent;
  export type BalanceSettingsUpdatedEvent = Stripe_.BalanceSettingsUpdatedEvent;
  export type BillingAlertTriggeredEvent = Stripe_.BillingAlertTriggeredEvent;
  export type BillingCreditBalanceTransactionCreatedEvent = Stripe_.BillingCreditBalanceTransactionCreatedEvent;
  export type BillingCreditGrantCreatedEvent = Stripe_.BillingCreditGrantCreatedEvent;
  export type BillingCreditGrantUpdatedEvent = Stripe_.BillingCreditGrantUpdatedEvent;
  export type BillingMeterCreatedEvent = Stripe_.BillingMeterCreatedEvent;
  export type BillingMeterDeactivatedEvent = Stripe_.BillingMeterDeactivatedEvent;
  export type BillingMeterReactivatedEvent = Stripe_.BillingMeterReactivatedEvent;
  export type BillingMeterUpdatedEvent = Stripe_.BillingMeterUpdatedEvent;
  export type BillingPortalConfigurationCreatedEvent = Stripe_.BillingPortalConfigurationCreatedEvent;
  export type BillingPortalConfigurationUpdatedEvent = Stripe_.BillingPortalConfigurationUpdatedEvent;
  export type BillingPortalSessionCreatedEvent = Stripe_.BillingPortalSessionCreatedEvent;
  export type CapabilityUpdatedEvent = Stripe_.CapabilityUpdatedEvent;
  export type CashBalanceFundsAvailableEvent = Stripe_.CashBalanceFundsAvailableEvent;
  export type ChargeCapturedEvent = Stripe_.ChargeCapturedEvent;
  export type ChargeDisputeClosedEvent = Stripe_.ChargeDisputeClosedEvent;
  export type ChargeDisputeCreatedEvent = Stripe_.ChargeDisputeCreatedEvent;
  export type ChargeDisputeFundsReinstatedEvent = Stripe_.ChargeDisputeFundsReinstatedEvent;
  export type ChargeDisputeFundsWithdrawnEvent = Stripe_.ChargeDisputeFundsWithdrawnEvent;
  export type ChargeDisputeUpdatedEvent = Stripe_.ChargeDisputeUpdatedEvent;
  export type ChargeExpiredEvent = Stripe_.ChargeExpiredEvent;
  export type ChargeFailedEvent = Stripe_.ChargeFailedEvent;
  export type ChargePendingEvent = Stripe_.ChargePendingEvent;
  export type ChargeRefundUpdatedEvent = Stripe_.ChargeRefundUpdatedEvent;
  export type ChargeRefundedEvent = Stripe_.ChargeRefundedEvent;
  export type ChargeSucceededEvent = Stripe_.ChargeSucceededEvent;
  export type ChargeUpdatedEvent = Stripe_.ChargeUpdatedEvent;
  export type CheckoutSessionAsyncPaymentFailedEvent = Stripe_.CheckoutSessionAsyncPaymentFailedEvent;
  export type CheckoutSessionAsyncPaymentSucceededEvent = Stripe_.CheckoutSessionAsyncPaymentSucceededEvent;
  export type CheckoutSessionCompletedEvent = Stripe_.CheckoutSessionCompletedEvent;
  export type CheckoutSessionExpiredEvent = Stripe_.CheckoutSessionExpiredEvent;
  export type ClimateOrderCanceledEvent = Stripe_.ClimateOrderCanceledEvent;
  export type ClimateOrderCreatedEvent = Stripe_.ClimateOrderCreatedEvent;
  export type ClimateOrderDelayedEvent = Stripe_.ClimateOrderDelayedEvent;
  export type ClimateOrderDeliveredEvent = Stripe_.ClimateOrderDeliveredEvent;
  export type ClimateOrderProductSubstitutedEvent = Stripe_.ClimateOrderProductSubstitutedEvent;
  export type ClimateProductCreatedEvent = Stripe_.ClimateProductCreatedEvent;
  export type ClimateProductPricingUpdatedEvent = Stripe_.ClimateProductPricingUpdatedEvent;
  export type CouponCreatedEvent = Stripe_.CouponCreatedEvent;
  export type CouponDeletedEvent = Stripe_.CouponDeletedEvent;
  export type CouponUpdatedEvent = Stripe_.CouponUpdatedEvent;
  export type CreditNoteCreatedEvent = Stripe_.CreditNoteCreatedEvent;
  export type CreditNoteUpdatedEvent = Stripe_.CreditNoteUpdatedEvent;
  export type CreditNoteVoidedEvent = Stripe_.CreditNoteVoidedEvent;
  export type CustomerCreatedEvent = Stripe_.CustomerCreatedEvent;
  export type CustomerDeletedEvent = Stripe_.CustomerDeletedEvent;
  export type CustomerDiscountCreatedEvent = Stripe_.CustomerDiscountCreatedEvent;
  export type CustomerDiscountDeletedEvent = Stripe_.CustomerDiscountDeletedEvent;
  export type CustomerDiscountUpdatedEvent = Stripe_.CustomerDiscountUpdatedEvent;
  export type CustomerSourceCreatedEvent = Stripe_.CustomerSourceCreatedEvent;
  export type CustomerSourceDeletedEvent = Stripe_.CustomerSourceDeletedEvent;
  export type CustomerSourceExpiringEvent = Stripe_.CustomerSourceExpiringEvent;
  export type CustomerSourceUpdatedEvent = Stripe_.CustomerSourceUpdatedEvent;
  export type CustomerSubscriptionCreatedEvent = Stripe_.CustomerSubscriptionCreatedEvent;
  export type CustomerSubscriptionDeletedEvent = Stripe_.CustomerSubscriptionDeletedEvent;
  export type CustomerSubscriptionPausedEvent = Stripe_.CustomerSubscriptionPausedEvent;
  export type CustomerSubscriptionPendingUpdateAppliedEvent = Stripe_.CustomerSubscriptionPendingUpdateAppliedEvent;
  export type CustomerSubscriptionPendingUpdateExpiredEvent = Stripe_.CustomerSubscriptionPendingUpdateExpiredEvent;
  export type CustomerSubscriptionResumedEvent = Stripe_.CustomerSubscriptionResumedEvent;
  export type CustomerSubscriptionTrialWillEndEvent = Stripe_.CustomerSubscriptionTrialWillEndEvent;
  export type CustomerSubscriptionUpdatedEvent = Stripe_.CustomerSubscriptionUpdatedEvent;
  export type CustomerTaxIdCreatedEvent = Stripe_.CustomerTaxIdCreatedEvent;
  export type CustomerTaxIdDeletedEvent = Stripe_.CustomerTaxIdDeletedEvent;
  export type CustomerTaxIdUpdatedEvent = Stripe_.CustomerTaxIdUpdatedEvent;
  export type CustomerUpdatedEvent = Stripe_.CustomerUpdatedEvent;
  export type CustomerCashBalanceTransactionCreatedEvent = Stripe_.CustomerCashBalanceTransactionCreatedEvent;
  export type EntitlementsActiveEntitlementSummaryUpdatedEvent = Stripe_.EntitlementsActiveEntitlementSummaryUpdatedEvent;
  export type FileCreatedEvent = Stripe_.FileCreatedEvent;
  export type FinancialConnectionsAccountAccountNumbersUpdatedEvent = Stripe_.FinancialConnectionsAccountAccountNumbersUpdatedEvent;
  export type FinancialConnectionsAccountCreatedEvent = Stripe_.FinancialConnectionsAccountCreatedEvent;
  export type FinancialConnectionsAccountDeactivatedEvent = Stripe_.FinancialConnectionsAccountDeactivatedEvent;
  export type FinancialConnectionsAccountDisconnectedEvent = Stripe_.FinancialConnectionsAccountDisconnectedEvent;
  export type FinancialConnectionsAccountReactivatedEvent = Stripe_.FinancialConnectionsAccountReactivatedEvent;
  export type FinancialConnectionsAccountRefreshedBalanceEvent = Stripe_.FinancialConnectionsAccountRefreshedBalanceEvent;
  export type FinancialConnectionsAccountRefreshedOwnershipEvent = Stripe_.FinancialConnectionsAccountRefreshedOwnershipEvent;
  export type FinancialConnectionsAccountRefreshedTransactionsEvent = Stripe_.FinancialConnectionsAccountRefreshedTransactionsEvent;
  export type FinancialConnectionsAccountUpcomingAccountNumberExpiryEvent = Stripe_.FinancialConnectionsAccountUpcomingAccountNumberExpiryEvent;
  export type IdentityVerificationSessionCanceledEvent = Stripe_.IdentityVerificationSessionCanceledEvent;
  export type IdentityVerificationSessionCreatedEvent = Stripe_.IdentityVerificationSessionCreatedEvent;
  export type IdentityVerificationSessionProcessingEvent = Stripe_.IdentityVerificationSessionProcessingEvent;
  export type IdentityVerificationSessionRedactedEvent = Stripe_.IdentityVerificationSessionRedactedEvent;
  export type IdentityVerificationSessionRequiresInputEvent = Stripe_.IdentityVerificationSessionRequiresInputEvent;
  export type IdentityVerificationSessionVerifiedEvent = Stripe_.IdentityVerificationSessionVerifiedEvent;
  export type InvoiceCreatedEvent = Stripe_.InvoiceCreatedEvent;
  export type InvoiceDeletedEvent = Stripe_.InvoiceDeletedEvent;
  export type InvoiceFinalizationFailedEvent = Stripe_.InvoiceFinalizationFailedEvent;
  export type InvoiceFinalizedEvent = Stripe_.InvoiceFinalizedEvent;
  export type InvoiceMarkedUncollectibleEvent = Stripe_.InvoiceMarkedUncollectibleEvent;
  export type InvoiceOverdueEvent = Stripe_.InvoiceOverdueEvent;
  export type InvoiceOverpaidEvent = Stripe_.InvoiceOverpaidEvent;
  export type InvoicePaidEvent = Stripe_.InvoicePaidEvent;
  export type InvoicePaymentActionRequiredEvent = Stripe_.InvoicePaymentActionRequiredEvent;
  export type InvoicePaymentAttemptRequiredEvent = Stripe_.InvoicePaymentAttemptRequiredEvent;
  export type InvoicePaymentFailedEvent = Stripe_.InvoicePaymentFailedEvent;
  export type InvoicePaymentSucceededEvent = Stripe_.InvoicePaymentSucceededEvent;
  export type InvoiceSentEvent = Stripe_.InvoiceSentEvent;
  export type InvoiceUpcomingEvent = Stripe_.InvoiceUpcomingEvent;
  export type InvoiceUpdatedEvent = Stripe_.InvoiceUpdatedEvent;
  export type InvoiceVoidedEvent = Stripe_.InvoiceVoidedEvent;
  export type InvoiceWillBeDueEvent = Stripe_.InvoiceWillBeDueEvent;
  export type InvoicePaymentPaidEvent = Stripe_.InvoicePaymentPaidEvent;
  export type InvoiceItemCreatedEvent = Stripe_.InvoiceItemCreatedEvent;
  export type InvoiceItemDeletedEvent = Stripe_.InvoiceItemDeletedEvent;
  export type IssuingAuthorizationCreatedEvent = Stripe_.IssuingAuthorizationCreatedEvent;
  export type IssuingAuthorizationRequestEvent = Stripe_.IssuingAuthorizationRequestEvent;
  export type IssuingAuthorizationUpdatedEvent = Stripe_.IssuingAuthorizationUpdatedEvent;
  export type IssuingCardCreatedEvent = Stripe_.IssuingCardCreatedEvent;
  export type IssuingCardUpdatedEvent = Stripe_.IssuingCardUpdatedEvent;
  export type IssuingCardholderCreatedEvent = Stripe_.IssuingCardholderCreatedEvent;
  export type IssuingCardholderUpdatedEvent = Stripe_.IssuingCardholderUpdatedEvent;
  export type IssuingDisputeClosedEvent = Stripe_.IssuingDisputeClosedEvent;
  export type IssuingDisputeCreatedEvent = Stripe_.IssuingDisputeCreatedEvent;
  export type IssuingDisputeFundsReinstatedEvent = Stripe_.IssuingDisputeFundsReinstatedEvent;
  export type IssuingDisputeFundsRescindedEvent = Stripe_.IssuingDisputeFundsRescindedEvent;
  export type IssuingDisputeSubmittedEvent = Stripe_.IssuingDisputeSubmittedEvent;
  export type IssuingDisputeUpdatedEvent = Stripe_.IssuingDisputeUpdatedEvent;
  export type IssuingPersonalizationDesignActivatedEvent = Stripe_.IssuingPersonalizationDesignActivatedEvent;
  export type IssuingPersonalizationDesignDeactivatedEvent = Stripe_.IssuingPersonalizationDesignDeactivatedEvent;
  export type IssuingPersonalizationDesignRejectedEvent = Stripe_.IssuingPersonalizationDesignRejectedEvent;
  export type IssuingPersonalizationDesignUpdatedEvent = Stripe_.IssuingPersonalizationDesignUpdatedEvent;
  export type IssuingTokenCreatedEvent = Stripe_.IssuingTokenCreatedEvent;
  export type IssuingTokenUpdatedEvent = Stripe_.IssuingTokenUpdatedEvent;
  export type IssuingTransactionCreatedEvent = Stripe_.IssuingTransactionCreatedEvent;
  export type IssuingTransactionPurchaseDetailsReceiptUpdatedEvent = Stripe_.IssuingTransactionPurchaseDetailsReceiptUpdatedEvent;
  export type IssuingTransactionUpdatedEvent = Stripe_.IssuingTransactionUpdatedEvent;
  export type MandateUpdatedEvent = Stripe_.MandateUpdatedEvent;
  export type PaymentIntentAmountCapturableUpdatedEvent = Stripe_.PaymentIntentAmountCapturableUpdatedEvent;
  export type PaymentIntentCanceledEvent = Stripe_.PaymentIntentCanceledEvent;
  export type PaymentIntentCreatedEvent = Stripe_.PaymentIntentCreatedEvent;
  export type PaymentIntentPartiallyFundedEvent = Stripe_.PaymentIntentPartiallyFundedEvent;
  export type PaymentIntentPaymentFailedEvent = Stripe_.PaymentIntentPaymentFailedEvent;
  export type PaymentIntentProcessingEvent = Stripe_.PaymentIntentProcessingEvent;
  export type PaymentIntentRequiresActionEvent = Stripe_.PaymentIntentRequiresActionEvent;
  export type PaymentIntentSucceededEvent = Stripe_.PaymentIntentSucceededEvent;
  export type PaymentLinkCreatedEvent = Stripe_.PaymentLinkCreatedEvent;
  export type PaymentLinkUpdatedEvent = Stripe_.PaymentLinkUpdatedEvent;
  export type PaymentMethodAttachedEvent = Stripe_.PaymentMethodAttachedEvent;
  export type PaymentMethodAutomaticallyUpdatedEvent = Stripe_.PaymentMethodAutomaticallyUpdatedEvent;
  export type PaymentMethodDetachedEvent = Stripe_.PaymentMethodDetachedEvent;
  export type PaymentMethodUpdatedEvent = Stripe_.PaymentMethodUpdatedEvent;
  export type PayoutCanceledEvent = Stripe_.PayoutCanceledEvent;
  export type PayoutCreatedEvent = Stripe_.PayoutCreatedEvent;
  export type PayoutFailedEvent = Stripe_.PayoutFailedEvent;
  export type PayoutPaidEvent = Stripe_.PayoutPaidEvent;
  export type PayoutReconciliationCompletedEvent = Stripe_.PayoutReconciliationCompletedEvent;
  export type PayoutUpdatedEvent = Stripe_.PayoutUpdatedEvent;
  export type PersonCreatedEvent = Stripe_.PersonCreatedEvent;
  export type PersonDeletedEvent = Stripe_.PersonDeletedEvent;
  export type PersonUpdatedEvent = Stripe_.PersonUpdatedEvent;
  export type PlanCreatedEvent = Stripe_.PlanCreatedEvent;
  export type PlanDeletedEvent = Stripe_.PlanDeletedEvent;
  export type PlanUpdatedEvent = Stripe_.PlanUpdatedEvent;
  export type PriceCreatedEvent = Stripe_.PriceCreatedEvent;
  export type PriceDeletedEvent = Stripe_.PriceDeletedEvent;
  export type PriceUpdatedEvent = Stripe_.PriceUpdatedEvent;
  export type ProductCreatedEvent = Stripe_.ProductCreatedEvent;
  export type ProductDeletedEvent = Stripe_.ProductDeletedEvent;
  export type ProductUpdatedEvent = Stripe_.ProductUpdatedEvent;
  export type PromotionCodeCreatedEvent = Stripe_.PromotionCodeCreatedEvent;
  export type PromotionCodeUpdatedEvent = Stripe_.PromotionCodeUpdatedEvent;
  export type QuoteAcceptedEvent = Stripe_.QuoteAcceptedEvent;
  export type QuoteCanceledEvent = Stripe_.QuoteCanceledEvent;
  export type QuoteCreatedEvent = Stripe_.QuoteCreatedEvent;
  export type QuoteFinalizedEvent = Stripe_.QuoteFinalizedEvent;
  export type RadarEarlyFraudWarningCreatedEvent = Stripe_.RadarEarlyFraudWarningCreatedEvent;
  export type RadarEarlyFraudWarningUpdatedEvent = Stripe_.RadarEarlyFraudWarningUpdatedEvent;
  export type RefundCreatedEvent = Stripe_.RefundCreatedEvent;
  export type RefundFailedEvent = Stripe_.RefundFailedEvent;
  export type RefundUpdatedEvent = Stripe_.RefundUpdatedEvent;
  export type ReportingReportRunFailedEvent = Stripe_.ReportingReportRunFailedEvent;
  export type ReportingReportRunSucceededEvent = Stripe_.ReportingReportRunSucceededEvent;
  export type ReportingReportTypeUpdatedEvent = Stripe_.ReportingReportTypeUpdatedEvent;
  export type ReserveHoldCreatedEvent = Stripe_.ReserveHoldCreatedEvent;
  export type ReserveHoldUpdatedEvent = Stripe_.ReserveHoldUpdatedEvent;
  export type ReservePlanCreatedEvent = Stripe_.ReservePlanCreatedEvent;
  export type ReservePlanDisabledEvent = Stripe_.ReservePlanDisabledEvent;
  export type ReservePlanExpiredEvent = Stripe_.ReservePlanExpiredEvent;
  export type ReservePlanUpdatedEvent = Stripe_.ReservePlanUpdatedEvent;
  export type ReserveReleaseCreatedEvent = Stripe_.ReserveReleaseCreatedEvent;
  export type ReviewClosedEvent = Stripe_.ReviewClosedEvent;
  export type ReviewOpenedEvent = Stripe_.ReviewOpenedEvent;
  export type SetupIntentCanceledEvent = Stripe_.SetupIntentCanceledEvent;
  export type SetupIntentCreatedEvent = Stripe_.SetupIntentCreatedEvent;
  export type SetupIntentRequiresActionEvent = Stripe_.SetupIntentRequiresActionEvent;
  export type SetupIntentSetupFailedEvent = Stripe_.SetupIntentSetupFailedEvent;
  export type SetupIntentSucceededEvent = Stripe_.SetupIntentSucceededEvent;
  export type SigmaScheduledQueryRunCreatedEvent = Stripe_.SigmaScheduledQueryRunCreatedEvent;
  export type SourceCanceledEvent = Stripe_.SourceCanceledEvent;
  export type SourceChargeableEvent = Stripe_.SourceChargeableEvent;
  export type SourceFailedEvent = Stripe_.SourceFailedEvent;
  export type SourceMandateNotificationEvent = Stripe_.SourceMandateNotificationEvent;
  export type SourceRefundAttributesRequiredEvent = Stripe_.SourceRefundAttributesRequiredEvent;
  export type SourceTransactionCreatedEvent = Stripe_.SourceTransactionCreatedEvent;
  export type SourceTransactionUpdatedEvent = Stripe_.SourceTransactionUpdatedEvent;
  export type SubscriptionScheduleAbortedEvent = Stripe_.SubscriptionScheduleAbortedEvent;
  export type SubscriptionScheduleCanceledEvent = Stripe_.SubscriptionScheduleCanceledEvent;
  export type SubscriptionScheduleCompletedEvent = Stripe_.SubscriptionScheduleCompletedEvent;
  export type SubscriptionScheduleCreatedEvent = Stripe_.SubscriptionScheduleCreatedEvent;
  export type SubscriptionScheduleExpiringEvent = Stripe_.SubscriptionScheduleExpiringEvent;
  export type SubscriptionScheduleReleasedEvent = Stripe_.SubscriptionScheduleReleasedEvent;
  export type SubscriptionScheduleUpdatedEvent = Stripe_.SubscriptionScheduleUpdatedEvent;
  export type TaxSettingsUpdatedEvent = Stripe_.TaxSettingsUpdatedEvent;
  export type TaxRateCreatedEvent = Stripe_.TaxRateCreatedEvent;
  export type TaxRateUpdatedEvent = Stripe_.TaxRateUpdatedEvent;
  export type TerminalReaderActionFailedEvent = Stripe_.TerminalReaderActionFailedEvent;
  export type TerminalReaderActionSucceededEvent = Stripe_.TerminalReaderActionSucceededEvent;
  export type TerminalReaderActionUpdatedEvent = Stripe_.TerminalReaderActionUpdatedEvent;
  export type TestHelpersTestClockAdvancingEvent = Stripe_.TestHelpersTestClockAdvancingEvent;
  export type TestHelpersTestClockCreatedEvent = Stripe_.TestHelpersTestClockCreatedEvent;
  export type TestHelpersTestClockDeletedEvent = Stripe_.TestHelpersTestClockDeletedEvent;
  export type TestHelpersTestClockInternalFailureEvent = Stripe_.TestHelpersTestClockInternalFailureEvent;
  export type TestHelpersTestClockReadyEvent = Stripe_.TestHelpersTestClockReadyEvent;
  export type TopupCanceledEvent = Stripe_.TopupCanceledEvent;
  export type TopupCreatedEvent = Stripe_.TopupCreatedEvent;
  export type TopupFailedEvent = Stripe_.TopupFailedEvent;
  export type TopupReversedEvent = Stripe_.TopupReversedEvent;
  export type TopupSucceededEvent = Stripe_.TopupSucceededEvent;
  export type TransferCreatedEvent = Stripe_.TransferCreatedEvent;
  export type TransferReversedEvent = Stripe_.TransferReversedEvent;
  export type TransferUpdatedEvent = Stripe_.TransferUpdatedEvent;
  export type TreasuryCreditReversalCreatedEvent = Stripe_.TreasuryCreditReversalCreatedEvent;
  export type TreasuryCreditReversalPostedEvent = Stripe_.TreasuryCreditReversalPostedEvent;
  export type TreasuryDebitReversalCompletedEvent = Stripe_.TreasuryDebitReversalCompletedEvent;
  export type TreasuryDebitReversalCreatedEvent = Stripe_.TreasuryDebitReversalCreatedEvent;
  export type TreasuryDebitReversalInitialCreditGrantedEvent = Stripe_.TreasuryDebitReversalInitialCreditGrantedEvent;
  export type TreasuryFinancialAccountClosedEvent = Stripe_.TreasuryFinancialAccountClosedEvent;
  export type TreasuryFinancialAccountCreatedEvent = Stripe_.TreasuryFinancialAccountCreatedEvent;
  export type TreasuryFinancialAccountFeaturesStatusUpdatedEvent = Stripe_.TreasuryFinancialAccountFeaturesStatusUpdatedEvent;
  export type TreasuryInboundTransferCanceledEvent = Stripe_.TreasuryInboundTransferCanceledEvent;
  export type TreasuryInboundTransferCreatedEvent = Stripe_.TreasuryInboundTransferCreatedEvent;
  export type TreasuryInboundTransferFailedEvent = Stripe_.TreasuryInboundTransferFailedEvent;
  export type TreasuryInboundTransferSucceededEvent = Stripe_.TreasuryInboundTransferSucceededEvent;
  export type TreasuryOutboundPaymentCanceledEvent = Stripe_.TreasuryOutboundPaymentCanceledEvent;
  export type TreasuryOutboundPaymentCreatedEvent = Stripe_.TreasuryOutboundPaymentCreatedEvent;
  export type TreasuryOutboundPaymentExpectedArrivalDateUpdatedEvent = Stripe_.TreasuryOutboundPaymentExpectedArrivalDateUpdatedEvent;
  export type TreasuryOutboundPaymentFailedEvent = Stripe_.TreasuryOutboundPaymentFailedEvent;
  export type TreasuryOutboundPaymentPostedEvent = Stripe_.TreasuryOutboundPaymentPostedEvent;
  export type TreasuryOutboundPaymentReturnedEvent = Stripe_.TreasuryOutboundPaymentReturnedEvent;
  export type TreasuryOutboundPaymentTrackingDetailsUpdatedEvent = Stripe_.TreasuryOutboundPaymentTrackingDetailsUpdatedEvent;
  export type TreasuryOutboundTransferCanceledEvent = Stripe_.TreasuryOutboundTransferCanceledEvent;
  export type TreasuryOutboundTransferCreatedEvent = Stripe_.TreasuryOutboundTransferCreatedEvent;
  export type TreasuryOutboundTransferExpectedArrivalDateUpdatedEvent = Stripe_.TreasuryOutboundTransferExpectedArrivalDateUpdatedEvent;
  export type TreasuryOutboundTransferFailedEvent = Stripe_.TreasuryOutboundTransferFailedEvent;
  export type TreasuryOutboundTransferPostedEvent = Stripe_.TreasuryOutboundTransferPostedEvent;
  export type TreasuryOutboundTransferReturnedEvent = Stripe_.TreasuryOutboundTransferReturnedEvent;
  export type TreasuryOutboundTransferTrackingDetailsUpdatedEvent = Stripe_.TreasuryOutboundTransferTrackingDetailsUpdatedEvent;
  export type TreasuryReceivedCreditCreatedEvent = Stripe_.TreasuryReceivedCreditCreatedEvent;
  export type TreasuryReceivedCreditFailedEvent = Stripe_.TreasuryReceivedCreditFailedEvent;
  export type TreasuryReceivedCreditSucceededEvent = Stripe_.TreasuryReceivedCreditSucceededEvent;
  export type TreasuryReceivedDebitCreatedEvent = Stripe_.TreasuryReceivedDebitCreatedEvent;
  export type V2List<T> = Stripe_.V2List<T>;
  export type V2ListPromise<T> = Stripe_.V2ListPromise<T>;
  // StripeInterfaceCJSExports: The end of the section generated from our OpenAPI spec

  export type Response<T> = Stripe_.Response<T>;
  export type RequestOptions = Stripe_.RequestOptions;
  export type RawRequestOptions = Stripe_.RawRequestOptions;
  export type ApiList<T> = Stripe_.ApiList<T>;
  export type ApiListPromise<T> = Stripe_.ApiListPromise<T>;
  export type ApiSearchResultPromise<T> = Stripe_.ApiSearchResultPromise<T>;
  export type ApiSearchResult<T> = Stripe_.ApiSearchResult<T>;
  export type StripeStreamResponse = Stripe_.StripeStreamResponse;
  export type RequestEvent = Stripe_.RequestEvent;
  export type ResponseEvent = Stripe_.ResponseEvent;
  export type AppInfo = Stripe_.AppInfo;
  export type FileData = Stripe_.FileData;
  export type Metadata = Stripe_.Metadata;
  export type MetadataParam = Stripe_.MetadataParam;
  export type Address = Stripe_.Address;
  export type JapanAddress = Stripe_.JapanAddress;
  export type AddressParam = Stripe_.AddressParam;
  export type ShippingAddressParam = Stripe_.ShippingAddressParam;
  export type JapanAddressParam = Stripe_.JapanAddressParam;
  export type RangeQueryParam = Stripe_.RangeQueryParam;
  export type PaginationParams = Stripe_.PaginationParams;
  export type Emptyable<T> = Stripe_.Emptyable<T>;
  export type OAuthResource = Stripe_.OAuthResource;
  export type OAuthToken = Stripe_.OAuthToken;
  export type OAuthTokenParams = Stripe_.OAuthTokenParams;
  export type OAuthAuthorizeUrlOptions = Stripe_.OAuthAuthorizeUrlOptions;
  export type OAuthAuthorizeUrlParams = Stripe_.OAuthAuthorizeUrlParams;
  export type OAuthDeauthorization = Stripe_.OAuthDeauthorization;
  export type OAuthDeauthorizeParams = Stripe_.OAuthDeauthorizeParams;
  export type StripeConfig = Stripe_.StripeConfig;
  export type LatestApiVersion = Stripe_.LatestApiVersion;
  export type HttpAgent = Stripe_.HttpAgent;
  export type HttpProtocol = Stripe_.HttpProtocol;
  export type StripeResource = Stripe_.StripeResource;
  export type CryptoProvider = Stripe_.CryptoProvider;
  export type HttpClient = Stripe_.HttpClient;
  export type HttpClientResponse = Stripe_.HttpClientResponse;
  export type RawErrorType = Stripe_.RawErrorType;
  export type Webhooks = Stripe_.Webhooks;
  export type WebhookTestHeaderOptions = Stripe_.WebhookTestHeaderOptions;
  export type Signature = Stripe_.Signature;
  export type StripeContextType = Stripe_.StripeContextType;
  export type StripeRawError = Stripe_.StripeRawError;
  export type Decimal = Stripe_.Decimal;
  export namespace errors {
    export type StripeError = InstanceType<typeof Stripe_.errors.StripeError>;
    export type StripeCardError = InstanceType<
      typeof Stripe_.errors.StripeCardError
    >;
    export type StripeInvalidRequestError = InstanceType<
      typeof Stripe_.errors.StripeInvalidRequestError
    >;
    export type StripeAPIError = InstanceType<
      typeof Stripe_.errors.StripeAPIError
    >;
    export type StripeAuthenticationError = InstanceType<
      typeof Stripe_.errors.StripeAuthenticationError
    >;
    export type StripePermissionError = InstanceType<
      typeof Stripe_.errors.StripePermissionError
    >;
    export type StripeRateLimitError = InstanceType<
      typeof Stripe_.errors.StripeRateLimitError
    >;
    export type StripeConnectionError = InstanceType<
      typeof Stripe_.errors.StripeConnectionError
    >;
    export type StripeSignatureVerificationError = InstanceType<
      typeof Stripe_.errors.StripeSignatureVerificationError
    >;
    export type StripeIdempotencyError = InstanceType<
      typeof Stripe_.errors.StripeIdempotencyError
    >;
    export type StripeInvalidGrantError = InstanceType<
      typeof Stripe_.errors.StripeInvalidGrantError
    >;
  }
}
export = StripeConstructor;
