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
  export type Account = Stripe.Account;
  export type DeletedAccount = Stripe.DeletedAccount;
  export type AccountCreateParams = Stripe.AccountCreateParams;
  export type AccountRetrieveParams = Stripe.AccountRetrieveParams;
  export type AccountUpdateParams = Stripe.AccountUpdateParams;
  export type AccountListParams = Stripe.AccountListParams;
  export type AccountDeleteParams = Stripe.AccountDeleteParams;
  export type AccountCreateExternalAccountParams = Stripe.AccountCreateExternalAccountParams;
  export type AccountCreateLoginLinkParams = Stripe.AccountCreateLoginLinkParams;
  export type AccountCreatePersonParams = Stripe.AccountCreatePersonParams;
  export type AccountDeleteExternalAccountParams = Stripe.AccountDeleteExternalAccountParams;
  export type AccountDeletePersonParams = Stripe.AccountDeletePersonParams;
  export type AccountListCapabilitiesParams = Stripe.AccountListCapabilitiesParams;
  export type AccountListExternalAccountsParams = Stripe.AccountListExternalAccountsParams;
  export type AccountListPersonsParams = Stripe.AccountListPersonsParams;
  export type AccountRejectParams = Stripe.AccountRejectParams;
  export type AccountRetrieveCurrentParams = Stripe.AccountRetrieveCurrentParams;
  export type AccountRetrieveCapabilityParams = Stripe.AccountRetrieveCapabilityParams;
  export type AccountRetrieveExternalAccountParams = Stripe.AccountRetrieveExternalAccountParams;
  export type AccountRetrievePersonParams = Stripe.AccountRetrievePersonParams;
  export type AccountUpdateCapabilityParams = Stripe.AccountUpdateCapabilityParams;
  export type AccountUpdateExternalAccountParams = Stripe.AccountUpdateExternalAccountParams;
  export type AccountUpdatePersonParams = Stripe.AccountUpdatePersonParams;
  export type AccountResource = Stripe.AccountResource;
  export type AccountLink = Stripe.AccountLink;
  export type AccountLinkCreateParams = Stripe.AccountLinkCreateParams;
  export type AccountLinkResource = Stripe.AccountLinkResource;
  export type AccountSession = Stripe.AccountSession;
  export type AccountSessionCreateParams = Stripe.AccountSessionCreateParams;
  export type AccountSessionResource = Stripe.AccountSessionResource;
  export type ApplePayDomain = Stripe.ApplePayDomain;
  export type DeletedApplePayDomain = Stripe.DeletedApplePayDomain;
  export type ApplePayDomainCreateParams = Stripe.ApplePayDomainCreateParams;
  export type ApplePayDomainRetrieveParams = Stripe.ApplePayDomainRetrieveParams;
  export type ApplePayDomainListParams = Stripe.ApplePayDomainListParams;
  export type ApplePayDomainDeleteParams = Stripe.ApplePayDomainDeleteParams;
  export type ApplePayDomainResource = Stripe.ApplePayDomainResource;
  export type ApplicationFee = Stripe.ApplicationFee;
  export type ApplicationFeeRetrieveParams = Stripe.ApplicationFeeRetrieveParams;
  export type ApplicationFeeListParams = Stripe.ApplicationFeeListParams;
  export type ApplicationFeeCreateRefundParams = Stripe.ApplicationFeeCreateRefundParams;
  export type ApplicationFeeListRefundsParams = Stripe.ApplicationFeeListRefundsParams;
  export type ApplicationFeeRetrieveRefundParams = Stripe.ApplicationFeeRetrieveRefundParams;
  export type ApplicationFeeUpdateRefundParams = Stripe.ApplicationFeeUpdateRefundParams;
  export type ApplicationFeeResource = Stripe.ApplicationFeeResource;
  export type Balance = Stripe.Balance;
  export type BalanceRetrieveParams = Stripe.BalanceRetrieveParams;
  export type BalanceResource = Stripe.BalanceResource;
  export type BalanceSettings = Stripe.BalanceSettings;
  export type BalanceSettingsRetrieveParams = Stripe.BalanceSettingsRetrieveParams;
  export type BalanceSettingsUpdateParams = Stripe.BalanceSettingsUpdateParams;
  export type BalanceSettingResource = Stripe.BalanceSettingResource;
  export type BalanceTransaction = Stripe.BalanceTransaction;
  export type BalanceTransactionRetrieveParams = Stripe.BalanceTransactionRetrieveParams;
  export type BalanceTransactionListParams = Stripe.BalanceTransactionListParams;
  export type BalanceTransactionResource = Stripe.BalanceTransactionResource;
  export type Charge = Stripe.Charge;
  export type ChargeCreateParams = Stripe.ChargeCreateParams;
  export type ChargeRetrieveParams = Stripe.ChargeRetrieveParams;
  export type ChargeUpdateParams = Stripe.ChargeUpdateParams;
  export type ChargeListParams = Stripe.ChargeListParams;
  export type ChargeCaptureParams = Stripe.ChargeCaptureParams;
  export type ChargeSearchParams = Stripe.ChargeSearchParams;
  export type ChargeResource = Stripe.ChargeResource;
  export type ConfirmationToken = Stripe.ConfirmationToken;
  export type ConfirmationTokenRetrieveParams = Stripe.ConfirmationTokenRetrieveParams;
  export type ConfirmationTokenResource = Stripe.ConfirmationTokenResource;
  export type CountrySpec = Stripe.CountrySpec;
  export type CountrySpecRetrieveParams = Stripe.CountrySpecRetrieveParams;
  export type CountrySpecListParams = Stripe.CountrySpecListParams;
  export type CountrySpecResource = Stripe.CountrySpecResource;
  export type Coupon = Stripe.Coupon;
  export type DeletedCoupon = Stripe.DeletedCoupon;
  export type CouponCreateParams = Stripe.CouponCreateParams;
  export type CouponRetrieveParams = Stripe.CouponRetrieveParams;
  export type CouponUpdateParams = Stripe.CouponUpdateParams;
  export type CouponListParams = Stripe.CouponListParams;
  export type CouponDeleteParams = Stripe.CouponDeleteParams;
  export type CouponResource = Stripe.CouponResource;
  export type CreditNote = Stripe.CreditNote;
  export type CreditNoteCreateParams = Stripe.CreditNoteCreateParams;
  export type CreditNoteRetrieveParams = Stripe.CreditNoteRetrieveParams;
  export type CreditNoteUpdateParams = Stripe.CreditNoteUpdateParams;
  export type CreditNoteListParams = Stripe.CreditNoteListParams;
  export type CreditNoteListLineItemsParams = Stripe.CreditNoteListLineItemsParams;
  export type CreditNoteListPreviewLineItemsParams = Stripe.CreditNoteListPreviewLineItemsParams;
  export type CreditNotePreviewParams = Stripe.CreditNotePreviewParams;
  export type CreditNoteVoidCreditNoteParams = Stripe.CreditNoteVoidCreditNoteParams;
  export type CreditNoteResource = Stripe.CreditNoteResource;
  export type Customer = Stripe.Customer;
  export type DeletedCustomer = Stripe.DeletedCustomer;
  export type CustomerCreateParams = Stripe.CustomerCreateParams;
  export type CustomerRetrieveParams = Stripe.CustomerRetrieveParams;
  export type CustomerUpdateParams = Stripe.CustomerUpdateParams;
  export type CustomerListParams = Stripe.CustomerListParams;
  export type CustomerDeleteParams = Stripe.CustomerDeleteParams;
  export type CustomerCreateBalanceTransactionParams = Stripe.CustomerCreateBalanceTransactionParams;
  export type CustomerCreateFundingInstructionsParams = Stripe.CustomerCreateFundingInstructionsParams;
  export type CustomerCreateSourceParams = Stripe.CustomerCreateSourceParams;
  export type CustomerCreateTaxIdParams = Stripe.CustomerCreateTaxIdParams;
  export type CustomerDeleteDiscountParams = Stripe.CustomerDeleteDiscountParams;
  export type CustomerDeleteSourceParams = Stripe.CustomerDeleteSourceParams;
  export type CustomerDeleteTaxIdParams = Stripe.CustomerDeleteTaxIdParams;
  export type CustomerListBalanceTransactionsParams = Stripe.CustomerListBalanceTransactionsParams;
  export type CustomerListCashBalanceTransactionsParams = Stripe.CustomerListCashBalanceTransactionsParams;
  export type CustomerListPaymentMethodsParams = Stripe.CustomerListPaymentMethodsParams;
  export type CustomerListSourcesParams = Stripe.CustomerListSourcesParams;
  export type CustomerListTaxIdsParams = Stripe.CustomerListTaxIdsParams;
  export type CustomerRetrieveBalanceTransactionParams = Stripe.CustomerRetrieveBalanceTransactionParams;
  export type CustomerRetrieveCashBalanceParams = Stripe.CustomerRetrieveCashBalanceParams;
  export type CustomerRetrieveCashBalanceTransactionParams = Stripe.CustomerRetrieveCashBalanceTransactionParams;
  export type CustomerRetrievePaymentMethodParams = Stripe.CustomerRetrievePaymentMethodParams;
  export type CustomerRetrieveSourceParams = Stripe.CustomerRetrieveSourceParams;
  export type CustomerRetrieveTaxIdParams = Stripe.CustomerRetrieveTaxIdParams;
  export type CustomerSearchParams = Stripe.CustomerSearchParams;
  export type CustomerUpdateBalanceTransactionParams = Stripe.CustomerUpdateBalanceTransactionParams;
  export type CustomerUpdateCashBalanceParams = Stripe.CustomerUpdateCashBalanceParams;
  export type CustomerUpdateSourceParams = Stripe.CustomerUpdateSourceParams;
  export type CustomerVerifySourceParams = Stripe.CustomerVerifySourceParams;
  export type CustomerResource = Stripe.CustomerResource;
  export type CustomerSession = Stripe.CustomerSession;
  export type CustomerSessionCreateParams = Stripe.CustomerSessionCreateParams;
  export type CustomerSessionResource = Stripe.CustomerSessionResource;
  export type Dispute = Stripe.Dispute;
  export type DisputeRetrieveParams = Stripe.DisputeRetrieveParams;
  export type DisputeUpdateParams = Stripe.DisputeUpdateParams;
  export type DisputeListParams = Stripe.DisputeListParams;
  export type DisputeCloseParams = Stripe.DisputeCloseParams;
  export type DisputeResource = Stripe.DisputeResource;
  export type EphemeralKey = Stripe.EphemeralKey;
  export type EphemeralKeyCreateParams = Stripe.EphemeralKeyCreateParams;
  export type EphemeralKeyDeleteParams = Stripe.EphemeralKeyDeleteParams;
  export type EphemeralKeyResource = Stripe.EphemeralKeyResource;
  export type Event = Stripe.Event;
  export type EventBase = Stripe.EventBase;
  export type EventRetrieveParams = Stripe.EventRetrieveParams;
  export type EventListParams = Stripe.EventListParams;
  export type EventResource = Stripe.EventResource;
  export type ExchangeRate = Stripe.ExchangeRate;
  export type ExchangeRateRetrieveParams = Stripe.ExchangeRateRetrieveParams;
  export type ExchangeRateListParams = Stripe.ExchangeRateListParams;
  export type ExchangeRateResource = Stripe.ExchangeRateResource;
  export type File = Stripe.File;
  export type FileCreateParams = Stripe.FileCreateParams;
  export type FileRetrieveParams = Stripe.FileRetrieveParams;
  export type FileListParams = Stripe.FileListParams;
  export type FileResource = Stripe.FileResource;
  export type FileLink = Stripe.FileLink;
  export type FileLinkCreateParams = Stripe.FileLinkCreateParams;
  export type FileLinkRetrieveParams = Stripe.FileLinkRetrieveParams;
  export type FileLinkUpdateParams = Stripe.FileLinkUpdateParams;
  export type FileLinkListParams = Stripe.FileLinkListParams;
  export type FileLinkResource = Stripe.FileLinkResource;
  export type Invoice = Stripe.Invoice;
  export type DeletedInvoice = Stripe.DeletedInvoice;
  export type InvoiceCreateParams = Stripe.InvoiceCreateParams;
  export type InvoiceRetrieveParams = Stripe.InvoiceRetrieveParams;
  export type InvoiceUpdateParams = Stripe.InvoiceUpdateParams;
  export type InvoiceListParams = Stripe.InvoiceListParams;
  export type InvoiceDeleteParams = Stripe.InvoiceDeleteParams;
  export type InvoiceAddLinesParams = Stripe.InvoiceAddLinesParams;
  export type InvoiceAttachPaymentParams = Stripe.InvoiceAttachPaymentParams;
  export type InvoiceCreatePreviewParams = Stripe.InvoiceCreatePreviewParams;
  export type InvoiceFinalizeInvoiceParams = Stripe.InvoiceFinalizeInvoiceParams;
  export type InvoiceListLineItemsParams = Stripe.InvoiceListLineItemsParams;
  export type InvoiceMarkUncollectibleParams = Stripe.InvoiceMarkUncollectibleParams;
  export type InvoicePayParams = Stripe.InvoicePayParams;
  export type InvoiceRemoveLinesParams = Stripe.InvoiceRemoveLinesParams;
  export type InvoiceSearchParams = Stripe.InvoiceSearchParams;
  export type InvoiceSendInvoiceParams = Stripe.InvoiceSendInvoiceParams;
  export type InvoiceUpdateLinesParams = Stripe.InvoiceUpdateLinesParams;
  export type InvoiceUpdateLineItemParams = Stripe.InvoiceUpdateLineItemParams;
  export type InvoiceVoidInvoiceParams = Stripe.InvoiceVoidInvoiceParams;
  export type InvoiceResource = Stripe.InvoiceResource;
  export type InvoiceItem = Stripe.InvoiceItem;
  export type DeletedInvoiceItem = Stripe.DeletedInvoiceItem;
  export type InvoiceItemCreateParams = Stripe.InvoiceItemCreateParams;
  export type InvoiceItemRetrieveParams = Stripe.InvoiceItemRetrieveParams;
  export type InvoiceItemUpdateParams = Stripe.InvoiceItemUpdateParams;
  export type InvoiceItemListParams = Stripe.InvoiceItemListParams;
  export type InvoiceItemDeleteParams = Stripe.InvoiceItemDeleteParams;
  export type InvoiceItemResource = Stripe.InvoiceItemResource;
  export type InvoicePayment = Stripe.InvoicePayment;
  export type InvoicePaymentRetrieveParams = Stripe.InvoicePaymentRetrieveParams;
  export type InvoicePaymentListParams = Stripe.InvoicePaymentListParams;
  export type InvoicePaymentResource = Stripe.InvoicePaymentResource;
  export type InvoiceRenderingTemplate = Stripe.InvoiceRenderingTemplate;
  export type InvoiceRenderingTemplateRetrieveParams = Stripe.InvoiceRenderingTemplateRetrieveParams;
  export type InvoiceRenderingTemplateListParams = Stripe.InvoiceRenderingTemplateListParams;
  export type InvoiceRenderingTemplateArchiveParams = Stripe.InvoiceRenderingTemplateArchiveParams;
  export type InvoiceRenderingTemplateUnarchiveParams = Stripe.InvoiceRenderingTemplateUnarchiveParams;
  export type InvoiceRenderingTemplateResource = Stripe.InvoiceRenderingTemplateResource;
  export type Mandate = Stripe.Mandate;
  export type MandateRetrieveParams = Stripe.MandateRetrieveParams;
  export type MandateResource = Stripe.MandateResource;
  export type PaymentAttemptRecord = Stripe.PaymentAttemptRecord;
  export type PaymentAttemptRecordRetrieveParams = Stripe.PaymentAttemptRecordRetrieveParams;
  export type PaymentAttemptRecordListParams = Stripe.PaymentAttemptRecordListParams;
  export type PaymentAttemptRecordResource = Stripe.PaymentAttemptRecordResource;
  export type PaymentIntent = Stripe.PaymentIntent;
  export type PaymentIntentCreateParams = Stripe.PaymentIntentCreateParams;
  export type PaymentIntentRetrieveParams = Stripe.PaymentIntentRetrieveParams;
  export type PaymentIntentUpdateParams = Stripe.PaymentIntentUpdateParams;
  export type PaymentIntentListParams = Stripe.PaymentIntentListParams;
  export type PaymentIntentApplyCustomerBalanceParams = Stripe.PaymentIntentApplyCustomerBalanceParams;
  export type PaymentIntentCancelParams = Stripe.PaymentIntentCancelParams;
  export type PaymentIntentCaptureParams = Stripe.PaymentIntentCaptureParams;
  export type PaymentIntentConfirmParams = Stripe.PaymentIntentConfirmParams;
  export type PaymentIntentIncrementAuthorizationParams = Stripe.PaymentIntentIncrementAuthorizationParams;
  export type PaymentIntentListAmountDetailsLineItemsParams = Stripe.PaymentIntentListAmountDetailsLineItemsParams;
  export type PaymentIntentSearchParams = Stripe.PaymentIntentSearchParams;
  export type PaymentIntentVerifyMicrodepositsParams = Stripe.PaymentIntentVerifyMicrodepositsParams;
  export type PaymentIntentResource = Stripe.PaymentIntentResource;
  export type PaymentLink = Stripe.PaymentLink;
  export type PaymentLinkCreateParams = Stripe.PaymentLinkCreateParams;
  export type PaymentLinkRetrieveParams = Stripe.PaymentLinkRetrieveParams;
  export type PaymentLinkUpdateParams = Stripe.PaymentLinkUpdateParams;
  export type PaymentLinkListParams = Stripe.PaymentLinkListParams;
  export type PaymentLinkListLineItemsParams = Stripe.PaymentLinkListLineItemsParams;
  export type PaymentLinkResource = Stripe.PaymentLinkResource;
  export type PaymentMethod = Stripe.PaymentMethod;
  export type PaymentMethodCreateParams = Stripe.PaymentMethodCreateParams;
  export type PaymentMethodRetrieveParams = Stripe.PaymentMethodRetrieveParams;
  export type PaymentMethodUpdateParams = Stripe.PaymentMethodUpdateParams;
  export type PaymentMethodListParams = Stripe.PaymentMethodListParams;
  export type PaymentMethodAttachParams = Stripe.PaymentMethodAttachParams;
  export type PaymentMethodDetachParams = Stripe.PaymentMethodDetachParams;
  export type PaymentMethodResource = Stripe.PaymentMethodResource;
  export type PaymentMethodConfiguration = Stripe.PaymentMethodConfiguration;
  export type PaymentMethodConfigurationCreateParams = Stripe.PaymentMethodConfigurationCreateParams;
  export type PaymentMethodConfigurationRetrieveParams = Stripe.PaymentMethodConfigurationRetrieveParams;
  export type PaymentMethodConfigurationUpdateParams = Stripe.PaymentMethodConfigurationUpdateParams;
  export type PaymentMethodConfigurationListParams = Stripe.PaymentMethodConfigurationListParams;
  export type PaymentMethodConfigurationResource = Stripe.PaymentMethodConfigurationResource;
  export type PaymentMethodDomain = Stripe.PaymentMethodDomain;
  export type PaymentMethodDomainCreateParams = Stripe.PaymentMethodDomainCreateParams;
  export type PaymentMethodDomainRetrieveParams = Stripe.PaymentMethodDomainRetrieveParams;
  export type PaymentMethodDomainUpdateParams = Stripe.PaymentMethodDomainUpdateParams;
  export type PaymentMethodDomainListParams = Stripe.PaymentMethodDomainListParams;
  export type PaymentMethodDomainValidateParams = Stripe.PaymentMethodDomainValidateParams;
  export type PaymentMethodDomainResource = Stripe.PaymentMethodDomainResource;
  export type PaymentRecord = Stripe.PaymentRecord;
  export type PaymentRecordRetrieveParams = Stripe.PaymentRecordRetrieveParams;
  export type PaymentRecordReportPaymentParams = Stripe.PaymentRecordReportPaymentParams;
  export type PaymentRecordReportPaymentAttemptParams = Stripe.PaymentRecordReportPaymentAttemptParams;
  export type PaymentRecordReportPaymentAttemptCanceledParams = Stripe.PaymentRecordReportPaymentAttemptCanceledParams;
  export type PaymentRecordReportPaymentAttemptFailedParams = Stripe.PaymentRecordReportPaymentAttemptFailedParams;
  export type PaymentRecordReportPaymentAttemptGuaranteedParams = Stripe.PaymentRecordReportPaymentAttemptGuaranteedParams;
  export type PaymentRecordReportPaymentAttemptInformationalParams = Stripe.PaymentRecordReportPaymentAttemptInformationalParams;
  export type PaymentRecordReportRefundParams = Stripe.PaymentRecordReportRefundParams;
  export type PaymentRecordResource = Stripe.PaymentRecordResource;
  export type Payout = Stripe.Payout;
  export type PayoutCreateParams = Stripe.PayoutCreateParams;
  export type PayoutRetrieveParams = Stripe.PayoutRetrieveParams;
  export type PayoutUpdateParams = Stripe.PayoutUpdateParams;
  export type PayoutListParams = Stripe.PayoutListParams;
  export type PayoutCancelParams = Stripe.PayoutCancelParams;
  export type PayoutReverseParams = Stripe.PayoutReverseParams;
  export type PayoutResource = Stripe.PayoutResource;
  export type Plan = Stripe.Plan;
  export type DeletedPlan = Stripe.DeletedPlan;
  export type PlanCreateParams = Stripe.PlanCreateParams;
  export type PlanRetrieveParams = Stripe.PlanRetrieveParams;
  export type PlanUpdateParams = Stripe.PlanUpdateParams;
  export type PlanListParams = Stripe.PlanListParams;
  export type PlanDeleteParams = Stripe.PlanDeleteParams;
  export type PlanResource = Stripe.PlanResource;
  export type Price = Stripe.Price;
  export type DeletedPrice = Stripe.DeletedPrice;
  export type PriceCreateParams = Stripe.PriceCreateParams;
  export type PriceRetrieveParams = Stripe.PriceRetrieveParams;
  export type PriceUpdateParams = Stripe.PriceUpdateParams;
  export type PriceListParams = Stripe.PriceListParams;
  export type PriceSearchParams = Stripe.PriceSearchParams;
  export type PriceResource = Stripe.PriceResource;
  export type Product = Stripe.Product;
  export type DeletedProduct = Stripe.DeletedProduct;
  export type ProductCreateParams = Stripe.ProductCreateParams;
  export type ProductRetrieveParams = Stripe.ProductRetrieveParams;
  export type ProductUpdateParams = Stripe.ProductUpdateParams;
  export type ProductListParams = Stripe.ProductListParams;
  export type ProductDeleteParams = Stripe.ProductDeleteParams;
  export type ProductCreateFeatureParams = Stripe.ProductCreateFeatureParams;
  export type ProductDeleteFeatureParams = Stripe.ProductDeleteFeatureParams;
  export type ProductListFeaturesParams = Stripe.ProductListFeaturesParams;
  export type ProductRetrieveFeatureParams = Stripe.ProductRetrieveFeatureParams;
  export type ProductSearchParams = Stripe.ProductSearchParams;
  export type ProductResource = Stripe.ProductResource;
  export type PromotionCode = Stripe.PromotionCode;
  export type PromotionCodeCreateParams = Stripe.PromotionCodeCreateParams;
  export type PromotionCodeRetrieveParams = Stripe.PromotionCodeRetrieveParams;
  export type PromotionCodeUpdateParams = Stripe.PromotionCodeUpdateParams;
  export type PromotionCodeListParams = Stripe.PromotionCodeListParams;
  export type PromotionCodeResource = Stripe.PromotionCodeResource;
  export type Quote = Stripe.Quote;
  export type QuoteCreateParams = Stripe.QuoteCreateParams;
  export type QuoteRetrieveParams = Stripe.QuoteRetrieveParams;
  export type QuoteUpdateParams = Stripe.QuoteUpdateParams;
  export type QuoteListParams = Stripe.QuoteListParams;
  export type QuoteAcceptParams = Stripe.QuoteAcceptParams;
  export type QuoteCancelParams = Stripe.QuoteCancelParams;
  export type QuoteFinalizeQuoteParams = Stripe.QuoteFinalizeQuoteParams;
  export type QuoteListComputedUpfrontLineItemsParams = Stripe.QuoteListComputedUpfrontLineItemsParams;
  export type QuoteListLineItemsParams = Stripe.QuoteListLineItemsParams;
  export type QuotePdfParams = Stripe.QuotePdfParams;
  export type QuoteResource = Stripe.QuoteResource;
  export type Refund = Stripe.Refund;
  export type RefundCreateParams = Stripe.RefundCreateParams;
  export type RefundRetrieveParams = Stripe.RefundRetrieveParams;
  export type RefundUpdateParams = Stripe.RefundUpdateParams;
  export type RefundListParams = Stripe.RefundListParams;
  export type RefundCancelParams = Stripe.RefundCancelParams;
  export type RefundResource = Stripe.RefundResource;
  export type Review = Stripe.Review;
  export type ReviewRetrieveParams = Stripe.ReviewRetrieveParams;
  export type ReviewListParams = Stripe.ReviewListParams;
  export type ReviewApproveParams = Stripe.ReviewApproveParams;
  export type ReviewResource = Stripe.ReviewResource;
  export type SetupAttempt = Stripe.SetupAttempt;
  export type SetupAttemptListParams = Stripe.SetupAttemptListParams;
  export type SetupAttemptResource = Stripe.SetupAttemptResource;
  export type SetupIntent = Stripe.SetupIntent;
  export type SetupIntentCreateParams = Stripe.SetupIntentCreateParams;
  export type SetupIntentRetrieveParams = Stripe.SetupIntentRetrieveParams;
  export type SetupIntentUpdateParams = Stripe.SetupIntentUpdateParams;
  export type SetupIntentListParams = Stripe.SetupIntentListParams;
  export type SetupIntentCancelParams = Stripe.SetupIntentCancelParams;
  export type SetupIntentConfirmParams = Stripe.SetupIntentConfirmParams;
  export type SetupIntentVerifyMicrodepositsParams = Stripe.SetupIntentVerifyMicrodepositsParams;
  export type SetupIntentResource = Stripe.SetupIntentResource;
  export type ShippingRate = Stripe.ShippingRate;
  export type ShippingRateCreateParams = Stripe.ShippingRateCreateParams;
  export type ShippingRateRetrieveParams = Stripe.ShippingRateRetrieveParams;
  export type ShippingRateUpdateParams = Stripe.ShippingRateUpdateParams;
  export type ShippingRateListParams = Stripe.ShippingRateListParams;
  export type ShippingRateResource = Stripe.ShippingRateResource;
  export type Source = Stripe.Source;
  export type SourceCreateParams = Stripe.SourceCreateParams;
  export type SourceRetrieveParams = Stripe.SourceRetrieveParams;
  export type SourceUpdateParams = Stripe.SourceUpdateParams;
  export type SourceListSourceTransactionsParams = Stripe.SourceListSourceTransactionsParams;
  export type SourceVerifyParams = Stripe.SourceVerifyParams;
  export type SourceResource = Stripe.SourceResource;
  export type Subscription = Stripe.Subscription;
  export type SubscriptionCreateParams = Stripe.SubscriptionCreateParams;
  export type SubscriptionRetrieveParams = Stripe.SubscriptionRetrieveParams;
  export type SubscriptionUpdateParams = Stripe.SubscriptionUpdateParams;
  export type SubscriptionListParams = Stripe.SubscriptionListParams;
  export type SubscriptionCancelParams = Stripe.SubscriptionCancelParams;
  export type SubscriptionDeleteDiscountParams = Stripe.SubscriptionDeleteDiscountParams;
  export type SubscriptionMigrateParams = Stripe.SubscriptionMigrateParams;
  export type SubscriptionResumeParams = Stripe.SubscriptionResumeParams;
  export type SubscriptionSearchParams = Stripe.SubscriptionSearchParams;
  export type SubscriptionResource = Stripe.SubscriptionResource;
  export type SubscriptionItem = Stripe.SubscriptionItem;
  export type DeletedSubscriptionItem = Stripe.DeletedSubscriptionItem;
  export type SubscriptionItemCreateParams = Stripe.SubscriptionItemCreateParams;
  export type SubscriptionItemRetrieveParams = Stripe.SubscriptionItemRetrieveParams;
  export type SubscriptionItemUpdateParams = Stripe.SubscriptionItemUpdateParams;
  export type SubscriptionItemListParams = Stripe.SubscriptionItemListParams;
  export type SubscriptionItemDeleteParams = Stripe.SubscriptionItemDeleteParams;
  export type SubscriptionItemResource = Stripe.SubscriptionItemResource;
  export type SubscriptionSchedule = Stripe.SubscriptionSchedule;
  export type SubscriptionScheduleCreateParams = Stripe.SubscriptionScheduleCreateParams;
  export type SubscriptionScheduleRetrieveParams = Stripe.SubscriptionScheduleRetrieveParams;
  export type SubscriptionScheduleUpdateParams = Stripe.SubscriptionScheduleUpdateParams;
  export type SubscriptionScheduleListParams = Stripe.SubscriptionScheduleListParams;
  export type SubscriptionScheduleCancelParams = Stripe.SubscriptionScheduleCancelParams;
  export type SubscriptionScheduleReleaseParams = Stripe.SubscriptionScheduleReleaseParams;
  export type SubscriptionScheduleResource = Stripe.SubscriptionScheduleResource;
  export type TaxCode = Stripe.TaxCode;
  export type TaxCodeRetrieveParams = Stripe.TaxCodeRetrieveParams;
  export type TaxCodeListParams = Stripe.TaxCodeListParams;
  export type TaxCodeResource = Stripe.TaxCodeResource;
  export type TaxId = Stripe.TaxId;
  export type DeletedTaxId = Stripe.DeletedTaxId;
  export type TaxIdCreateParams = Stripe.TaxIdCreateParams;
  export type TaxIdRetrieveParams = Stripe.TaxIdRetrieveParams;
  export type TaxIdListParams = Stripe.TaxIdListParams;
  export type TaxIdDeleteParams = Stripe.TaxIdDeleteParams;
  export type TaxIdResource = Stripe.TaxIdResource;
  export type TaxRate = Stripe.TaxRate;
  export type TaxRateCreateParams = Stripe.TaxRateCreateParams;
  export type TaxRateRetrieveParams = Stripe.TaxRateRetrieveParams;
  export type TaxRateUpdateParams = Stripe.TaxRateUpdateParams;
  export type TaxRateListParams = Stripe.TaxRateListParams;
  export type TaxRateResource = Stripe.TaxRateResource;
  export type Token = Stripe.Token;
  export type TokenCreateParams = Stripe.TokenCreateParams;
  export type TokenRetrieveParams = Stripe.TokenRetrieveParams;
  export type TokenResource = Stripe.TokenResource;
  export type Topup = Stripe.Topup;
  export type TopupCreateParams = Stripe.TopupCreateParams;
  export type TopupRetrieveParams = Stripe.TopupRetrieveParams;
  export type TopupUpdateParams = Stripe.TopupUpdateParams;
  export type TopupListParams = Stripe.TopupListParams;
  export type TopupCancelParams = Stripe.TopupCancelParams;
  export type TopupResource = Stripe.TopupResource;
  export type Transfer = Stripe.Transfer;
  export type TransferCreateParams = Stripe.TransferCreateParams;
  export type TransferRetrieveParams = Stripe.TransferRetrieveParams;
  export type TransferUpdateParams = Stripe.TransferUpdateParams;
  export type TransferListParams = Stripe.TransferListParams;
  export type TransferCreateReversalParams = Stripe.TransferCreateReversalParams;
  export type TransferListReversalsParams = Stripe.TransferListReversalsParams;
  export type TransferRetrieveReversalParams = Stripe.TransferRetrieveReversalParams;
  export type TransferUpdateReversalParams = Stripe.TransferUpdateReversalParams;
  export type TransferResource = Stripe.TransferResource;
  export type WebhookEndpoint = Stripe.WebhookEndpoint;
  export type DeletedWebhookEndpoint = Stripe.DeletedWebhookEndpoint;
  export type WebhookEndpointCreateParams = Stripe.WebhookEndpointCreateParams;
  export type WebhookEndpointRetrieveParams = Stripe.WebhookEndpointRetrieveParams;
  export type WebhookEndpointUpdateParams = Stripe.WebhookEndpointUpdateParams;
  export type WebhookEndpointListParams = Stripe.WebhookEndpointListParams;
  export type WebhookEndpointDeleteParams = Stripe.WebhookEndpointDeleteParams;
  export type WebhookEndpointResource = Stripe.WebhookEndpointResource;
  export type Application = Stripe.Application;
  export type DeletedApplication = Stripe.DeletedApplication;
  export type BalanceTransactionSource = Stripe.BalanceTransactionSource;
  export type BankAccount = Stripe.BankAccount;
  export type DeletedBankAccount = Stripe.DeletedBankAccount;
  export type Card = Stripe.Card;
  export type DeletedCard = Stripe.DeletedCard;
  export type ConnectCollectionTransfer = Stripe.ConnectCollectionTransfer;
  export type Discount = Stripe.Discount;
  export type DeletedDiscount = Stripe.DeletedDiscount;
  export type FundingInstructions = Stripe.FundingInstructions;
  export type LineItem = Stripe.LineItem;
  export type ReserveTransaction = Stripe.ReserveTransaction;
  export type SourceMandateNotification = Stripe.SourceMandateNotification;
  export type SourceTransaction = Stripe.SourceTransaction;
  export type TaxDeductedAtSource = Stripe.TaxDeductedAtSource;
  export type Capability = Stripe.Capability;
  export type ExternalAccount = Stripe.ExternalAccount;
  export type DeletedExternalAccount = Stripe.DeletedExternalAccount;
  export type LoginLink = Stripe.LoginLink;
  export type Person = Stripe.Person;
  export type DeletedPerson = Stripe.DeletedPerson;
  export type FeeRefund = Stripe.FeeRefund;
  export type CreditNoteLineItem = Stripe.CreditNoteLineItem;
  export type CustomerBalanceTransaction = Stripe.CustomerBalanceTransaction;
  export type CashBalance = Stripe.CashBalance;
  export type CustomerCashBalanceTransaction = Stripe.CustomerCashBalanceTransaction;
  export type CustomerSource = Stripe.CustomerSource;
  export type DeletedCustomerSource = Stripe.DeletedCustomerSource;
  export type InvoiceLineItem = Stripe.InvoiceLineItem;
  export type PaymentIntentAmountDetailsLineItem = Stripe.PaymentIntentAmountDetailsLineItem;
  export type ProductFeature = Stripe.ProductFeature;
  export type DeletedProductFeature = Stripe.DeletedProductFeature;
  export type TransferReversal = Stripe.TransferReversal;
  export namespace AccountCreateParams {
    export type BusinessProfile = Stripe.AccountCreateParams.BusinessProfile;
    export type BusinessType = Stripe.AccountCreateParams.BusinessType;
    export type Capabilities = Stripe.AccountCreateParams.Capabilities;
    export type Company = Stripe.AccountCreateParams.Company;
    export type Controller = Stripe.AccountCreateParams.Controller;
    export type Documents = Stripe.AccountCreateParams.Documents;
    export type ExternalAccount = Stripe.AccountCreateParams.ExternalAccount;
    export type Groups = Stripe.AccountCreateParams.Groups;
    export type Individual = Stripe.AccountCreateParams.Individual;
    export type Settings = Stripe.AccountCreateParams.Settings;
    export type TosAcceptance = Stripe.AccountCreateParams.TosAcceptance;
    export type Type = Stripe.AccountCreateParams.Type;
    export namespace BusinessProfile {
      export type AnnualRevenue = Stripe.AccountCreateParams.BusinessProfile.AnnualRevenue;
      export type MinorityOwnedBusinessDesignation = Stripe.AccountCreateParams.BusinessProfile.MinorityOwnedBusinessDesignation;
      export type MonthlyEstimatedRevenue = Stripe.AccountCreateParams.BusinessProfile.MonthlyEstimatedRevenue;
    }
    export namespace Capabilities {
      export type AcssDebitPayments = Stripe.AccountCreateParams.Capabilities.AcssDebitPayments;
      export type AffirmPayments = Stripe.AccountCreateParams.Capabilities.AffirmPayments;
      export type AfterpayClearpayPayments = Stripe.AccountCreateParams.Capabilities.AfterpayClearpayPayments;
      export type AlmaPayments = Stripe.AccountCreateParams.Capabilities.AlmaPayments;
      export type AmazonPayPayments = Stripe.AccountCreateParams.Capabilities.AmazonPayPayments;
      export type AppDistribution = Stripe.AccountCreateParams.Capabilities.AppDistribution;
      export type AuBecsDebitPayments = Stripe.AccountCreateParams.Capabilities.AuBecsDebitPayments;
      export type BacsDebitPayments = Stripe.AccountCreateParams.Capabilities.BacsDebitPayments;
      export type BancontactPayments = Stripe.AccountCreateParams.Capabilities.BancontactPayments;
      export type BankTransferPayments = Stripe.AccountCreateParams.Capabilities.BankTransferPayments;
      export type BilliePayments = Stripe.AccountCreateParams.Capabilities.BilliePayments;
      export type BizumPayments = Stripe.AccountCreateParams.Capabilities.BizumPayments;
      export type BlikPayments = Stripe.AccountCreateParams.Capabilities.BlikPayments;
      export type BoletoPayments = Stripe.AccountCreateParams.Capabilities.BoletoPayments;
      export type CardIssuing = Stripe.AccountCreateParams.Capabilities.CardIssuing;
      export type CardPayments = Stripe.AccountCreateParams.Capabilities.CardPayments;
      export type CartesBancairesPayments = Stripe.AccountCreateParams.Capabilities.CartesBancairesPayments;
      export type CashappPayments = Stripe.AccountCreateParams.Capabilities.CashappPayments;
      export type CryptoPayments = Stripe.AccountCreateParams.Capabilities.CryptoPayments;
      export type EpsPayments = Stripe.AccountCreateParams.Capabilities.EpsPayments;
      export type FpxPayments = Stripe.AccountCreateParams.Capabilities.FpxPayments;
      export type GbBankTransferPayments = Stripe.AccountCreateParams.Capabilities.GbBankTransferPayments;
      export type GiropayPayments = Stripe.AccountCreateParams.Capabilities.GiropayPayments;
      export type GrabpayPayments = Stripe.AccountCreateParams.Capabilities.GrabpayPayments;
      export type IdealPayments = Stripe.AccountCreateParams.Capabilities.IdealPayments;
      export type IndiaInternationalPayments = Stripe.AccountCreateParams.Capabilities.IndiaInternationalPayments;
      export type JcbPayments = Stripe.AccountCreateParams.Capabilities.JcbPayments;
      export type JpBankTransferPayments = Stripe.AccountCreateParams.Capabilities.JpBankTransferPayments;
      export type KakaoPayPayments = Stripe.AccountCreateParams.Capabilities.KakaoPayPayments;
      export type KlarnaPayments = Stripe.AccountCreateParams.Capabilities.KlarnaPayments;
      export type KonbiniPayments = Stripe.AccountCreateParams.Capabilities.KonbiniPayments;
      export type KrCardPayments = Stripe.AccountCreateParams.Capabilities.KrCardPayments;
      export type LegacyPayments = Stripe.AccountCreateParams.Capabilities.LegacyPayments;
      export type LinkPayments = Stripe.AccountCreateParams.Capabilities.LinkPayments;
      export type MbWayPayments = Stripe.AccountCreateParams.Capabilities.MbWayPayments;
      export type MobilepayPayments = Stripe.AccountCreateParams.Capabilities.MobilepayPayments;
      export type MultibancoPayments = Stripe.AccountCreateParams.Capabilities.MultibancoPayments;
      export type MxBankTransferPayments = Stripe.AccountCreateParams.Capabilities.MxBankTransferPayments;
      export type NaverPayPayments = Stripe.AccountCreateParams.Capabilities.NaverPayPayments;
      export type NzBankAccountBecsDebitPayments = Stripe.AccountCreateParams.Capabilities.NzBankAccountBecsDebitPayments;
      export type OxxoPayments = Stripe.AccountCreateParams.Capabilities.OxxoPayments;
      export type P24Payments = Stripe.AccountCreateParams.Capabilities.P24Payments;
      export type PayByBankPayments = Stripe.AccountCreateParams.Capabilities.PayByBankPayments;
      export type PaycoPayments = Stripe.AccountCreateParams.Capabilities.PaycoPayments;
      export type PaynowPayments = Stripe.AccountCreateParams.Capabilities.PaynowPayments;
      export type PaytoPayments = Stripe.AccountCreateParams.Capabilities.PaytoPayments;
      export type PixPayments = Stripe.AccountCreateParams.Capabilities.PixPayments;
      export type PromptpayPayments = Stripe.AccountCreateParams.Capabilities.PromptpayPayments;
      export type RevolutPayPayments = Stripe.AccountCreateParams.Capabilities.RevolutPayPayments;
      export type SamsungPayPayments = Stripe.AccountCreateParams.Capabilities.SamsungPayPayments;
      export type SatispayPayments = Stripe.AccountCreateParams.Capabilities.SatispayPayments;
      export type ScalapayPayments = Stripe.AccountCreateParams.Capabilities.ScalapayPayments;
      export type SepaBankTransferPayments = Stripe.AccountCreateParams.Capabilities.SepaBankTransferPayments;
      export type SepaDebitPayments = Stripe.AccountCreateParams.Capabilities.SepaDebitPayments;
      export type SofortPayments = Stripe.AccountCreateParams.Capabilities.SofortPayments;
      export type SunbitPayments = Stripe.AccountCreateParams.Capabilities.SunbitPayments;
      export type SwishPayments = Stripe.AccountCreateParams.Capabilities.SwishPayments;
      export type TaxReportingUs1099K = Stripe.AccountCreateParams.Capabilities.TaxReportingUs1099K;
      export type TaxReportingUs1099Misc = Stripe.AccountCreateParams.Capabilities.TaxReportingUs1099Misc;
      export type Transfers = Stripe.AccountCreateParams.Capabilities.Transfers;
      export type Treasury = Stripe.AccountCreateParams.Capabilities.Treasury;
      export type TwintPayments = Stripe.AccountCreateParams.Capabilities.TwintPayments;
      export type UpiPayments = Stripe.AccountCreateParams.Capabilities.UpiPayments;
      export type UsBankAccountAchPayments = Stripe.AccountCreateParams.Capabilities.UsBankAccountAchPayments;
      export type UsBankTransferPayments = Stripe.AccountCreateParams.Capabilities.UsBankTransferPayments;
      export type ZipPayments = Stripe.AccountCreateParams.Capabilities.ZipPayments;
    }
    export namespace Company {
      export type DirectorshipDeclaration = Stripe.AccountCreateParams.Company.DirectorshipDeclaration;
      export type OwnershipDeclaration = Stripe.AccountCreateParams.Company.OwnershipDeclaration;
      export type OwnershipExemptionReason = Stripe.AccountCreateParams.Company.OwnershipExemptionReason;
      export type RegistrationDate = Stripe.AccountCreateParams.Company.RegistrationDate;
      export type RepresentativeDeclaration = Stripe.AccountCreateParams.Company.RepresentativeDeclaration;
      export type Structure = Stripe.AccountCreateParams.Company.Structure;
      export type Verification = Stripe.AccountCreateParams.Company.Verification;
      export namespace Verification {
        export type Document = Stripe.AccountCreateParams.Company.Verification.Document;
      }
    }
    export namespace Controller {
      export type Fees = Stripe.AccountCreateParams.Controller.Fees;
      export type Losses = Stripe.AccountCreateParams.Controller.Losses;
      export type RequirementCollection = Stripe.AccountCreateParams.Controller.RequirementCollection;
      export type StripeDashboard = Stripe.AccountCreateParams.Controller.StripeDashboard;
      export namespace Fees {
        export type Payer = Stripe.AccountCreateParams.Controller.Fees.Payer;
      }
      export namespace Losses {
        export type Payments = Stripe.AccountCreateParams.Controller.Losses.Payments;
      }
      export namespace StripeDashboard {
        export type Type = Stripe.AccountCreateParams.Controller.StripeDashboard.Type;
      }
    }
    export namespace Documents {
      export type BankAccountOwnershipVerification = Stripe.AccountCreateParams.Documents.BankAccountOwnershipVerification;
      export type CompanyLicense = Stripe.AccountCreateParams.Documents.CompanyLicense;
      export type CompanyMemorandumOfAssociation = Stripe.AccountCreateParams.Documents.CompanyMemorandumOfAssociation;
      export type CompanyMinisterialDecree = Stripe.AccountCreateParams.Documents.CompanyMinisterialDecree;
      export type CompanyRegistrationVerification = Stripe.AccountCreateParams.Documents.CompanyRegistrationVerification;
      export type CompanyTaxIdVerification = Stripe.AccountCreateParams.Documents.CompanyTaxIdVerification;
      export type ProofOfAddress = Stripe.AccountCreateParams.Documents.ProofOfAddress;
      export type ProofOfRegistration = Stripe.AccountCreateParams.Documents.ProofOfRegistration;
      export type ProofOfUltimateBeneficialOwnership = Stripe.AccountCreateParams.Documents.ProofOfUltimateBeneficialOwnership;
      export namespace ProofOfRegistration {
        export type Signer = Stripe.AccountCreateParams.Documents.ProofOfRegistration.Signer;
      }
      export namespace ProofOfUltimateBeneficialOwnership {
        export type Signer = Stripe.AccountCreateParams.Documents.ProofOfUltimateBeneficialOwnership.Signer;
      }
    }
    export namespace Individual {
      export type Dob = Stripe.AccountCreateParams.Individual.Dob;
      export type PoliticalExposure = Stripe.AccountCreateParams.Individual.PoliticalExposure;
      export type Relationship = Stripe.AccountCreateParams.Individual.Relationship;
      export type Verification = Stripe.AccountCreateParams.Individual.Verification;
      export namespace Verification {
        export type AdditionalDocument = Stripe.AccountCreateParams.Individual.Verification.AdditionalDocument;
        export type Document = Stripe.AccountCreateParams.Individual.Verification.Document;
      }
    }
    export namespace Settings {
      export type BacsDebitPayments = Stripe.AccountCreateParams.Settings.BacsDebitPayments;
      export type Branding = Stripe.AccountCreateParams.Settings.Branding;
      export type CardIssuing = Stripe.AccountCreateParams.Settings.CardIssuing;
      export type CardPayments = Stripe.AccountCreateParams.Settings.CardPayments;
      export type Invoices = Stripe.AccountCreateParams.Settings.Invoices;
      export type Payments = Stripe.AccountCreateParams.Settings.Payments;
      export type Payouts = Stripe.AccountCreateParams.Settings.Payouts;
      export type Treasury = Stripe.AccountCreateParams.Settings.Treasury;
      export namespace CardIssuing {
        export type TosAcceptance = Stripe.AccountCreateParams.Settings.CardIssuing.TosAcceptance;
      }
      export namespace CardPayments {
        export type DeclineOn = Stripe.AccountCreateParams.Settings.CardPayments.DeclineOn;
      }
      export namespace Invoices {
        export type HostedPaymentMethodSave = Stripe.AccountCreateParams.Settings.Invoices.HostedPaymentMethodSave;
      }
      export namespace Payouts {
        export type Schedule = Stripe.AccountCreateParams.Settings.Payouts.Schedule;
        export namespace Schedule {
          export type Interval = Stripe.AccountCreateParams.Settings.Payouts.Schedule.Interval;
          export type WeeklyAnchor = Stripe.AccountCreateParams.Settings.Payouts.Schedule.WeeklyAnchor;
          export type WeeklyPayoutDay = Stripe.AccountCreateParams.Settings.Payouts.Schedule.WeeklyPayoutDay;
        }
      }
      export namespace Treasury {
        export type TosAcceptance = Stripe.AccountCreateParams.Settings.Treasury.TosAcceptance;
      }
    }
  }
  export namespace AccountUpdateParams {
    export type BusinessProfile = Stripe.AccountUpdateParams.BusinessProfile;
    export type BusinessType = Stripe.AccountUpdateParams.BusinessType;
    export type Capabilities = Stripe.AccountUpdateParams.Capabilities;
    export type Company = Stripe.AccountUpdateParams.Company;
    export type Documents = Stripe.AccountUpdateParams.Documents;
    export type BankAccount = Stripe.AccountUpdateParams.BankAccount;
    export type Card = Stripe.AccountUpdateParams.Card;
    export type CardToken = Stripe.AccountUpdateParams.CardToken;
    export type Groups = Stripe.AccountUpdateParams.Groups;
    export type Individual = Stripe.AccountUpdateParams.Individual;
    export type Settings = Stripe.AccountUpdateParams.Settings;
    export type TosAcceptance = Stripe.AccountUpdateParams.TosAcceptance;
    export namespace BankAccount {
      export type AccountHolderType = Stripe.AccountUpdateParams.BankAccount.AccountHolderType;
    }
    export namespace BusinessProfile {
      export type AnnualRevenue = Stripe.AccountUpdateParams.BusinessProfile.AnnualRevenue;
      export type MinorityOwnedBusinessDesignation = Stripe.AccountUpdateParams.BusinessProfile.MinorityOwnedBusinessDesignation;
      export type MonthlyEstimatedRevenue = Stripe.AccountUpdateParams.BusinessProfile.MonthlyEstimatedRevenue;
    }
    export namespace Capabilities {
      export type AcssDebitPayments = Stripe.AccountUpdateParams.Capabilities.AcssDebitPayments;
      export type AffirmPayments = Stripe.AccountUpdateParams.Capabilities.AffirmPayments;
      export type AfterpayClearpayPayments = Stripe.AccountUpdateParams.Capabilities.AfterpayClearpayPayments;
      export type AlmaPayments = Stripe.AccountUpdateParams.Capabilities.AlmaPayments;
      export type AmazonPayPayments = Stripe.AccountUpdateParams.Capabilities.AmazonPayPayments;
      export type AppDistribution = Stripe.AccountUpdateParams.Capabilities.AppDistribution;
      export type AuBecsDebitPayments = Stripe.AccountUpdateParams.Capabilities.AuBecsDebitPayments;
      export type BacsDebitPayments = Stripe.AccountUpdateParams.Capabilities.BacsDebitPayments;
      export type BancontactPayments = Stripe.AccountUpdateParams.Capabilities.BancontactPayments;
      export type BankTransferPayments = Stripe.AccountUpdateParams.Capabilities.BankTransferPayments;
      export type BilliePayments = Stripe.AccountUpdateParams.Capabilities.BilliePayments;
      export type BizumPayments = Stripe.AccountUpdateParams.Capabilities.BizumPayments;
      export type BlikPayments = Stripe.AccountUpdateParams.Capabilities.BlikPayments;
      export type BoletoPayments = Stripe.AccountUpdateParams.Capabilities.BoletoPayments;
      export type CardIssuing = Stripe.AccountUpdateParams.Capabilities.CardIssuing;
      export type CardPayments = Stripe.AccountUpdateParams.Capabilities.CardPayments;
      export type CartesBancairesPayments = Stripe.AccountUpdateParams.Capabilities.CartesBancairesPayments;
      export type CashappPayments = Stripe.AccountUpdateParams.Capabilities.CashappPayments;
      export type CryptoPayments = Stripe.AccountUpdateParams.Capabilities.CryptoPayments;
      export type EpsPayments = Stripe.AccountUpdateParams.Capabilities.EpsPayments;
      export type FpxPayments = Stripe.AccountUpdateParams.Capabilities.FpxPayments;
      export type GbBankTransferPayments = Stripe.AccountUpdateParams.Capabilities.GbBankTransferPayments;
      export type GiropayPayments = Stripe.AccountUpdateParams.Capabilities.GiropayPayments;
      export type GrabpayPayments = Stripe.AccountUpdateParams.Capabilities.GrabpayPayments;
      export type IdealPayments = Stripe.AccountUpdateParams.Capabilities.IdealPayments;
      export type IndiaInternationalPayments = Stripe.AccountUpdateParams.Capabilities.IndiaInternationalPayments;
      export type JcbPayments = Stripe.AccountUpdateParams.Capabilities.JcbPayments;
      export type JpBankTransferPayments = Stripe.AccountUpdateParams.Capabilities.JpBankTransferPayments;
      export type KakaoPayPayments = Stripe.AccountUpdateParams.Capabilities.KakaoPayPayments;
      export type KlarnaPayments = Stripe.AccountUpdateParams.Capabilities.KlarnaPayments;
      export type KonbiniPayments = Stripe.AccountUpdateParams.Capabilities.KonbiniPayments;
      export type KrCardPayments = Stripe.AccountUpdateParams.Capabilities.KrCardPayments;
      export type LegacyPayments = Stripe.AccountUpdateParams.Capabilities.LegacyPayments;
      export type LinkPayments = Stripe.AccountUpdateParams.Capabilities.LinkPayments;
      export type MbWayPayments = Stripe.AccountUpdateParams.Capabilities.MbWayPayments;
      export type MobilepayPayments = Stripe.AccountUpdateParams.Capabilities.MobilepayPayments;
      export type MultibancoPayments = Stripe.AccountUpdateParams.Capabilities.MultibancoPayments;
      export type MxBankTransferPayments = Stripe.AccountUpdateParams.Capabilities.MxBankTransferPayments;
      export type NaverPayPayments = Stripe.AccountUpdateParams.Capabilities.NaverPayPayments;
      export type NzBankAccountBecsDebitPayments = Stripe.AccountUpdateParams.Capabilities.NzBankAccountBecsDebitPayments;
      export type OxxoPayments = Stripe.AccountUpdateParams.Capabilities.OxxoPayments;
      export type P24Payments = Stripe.AccountUpdateParams.Capabilities.P24Payments;
      export type PayByBankPayments = Stripe.AccountUpdateParams.Capabilities.PayByBankPayments;
      export type PaycoPayments = Stripe.AccountUpdateParams.Capabilities.PaycoPayments;
      export type PaynowPayments = Stripe.AccountUpdateParams.Capabilities.PaynowPayments;
      export type PaytoPayments = Stripe.AccountUpdateParams.Capabilities.PaytoPayments;
      export type PixPayments = Stripe.AccountUpdateParams.Capabilities.PixPayments;
      export type PromptpayPayments = Stripe.AccountUpdateParams.Capabilities.PromptpayPayments;
      export type RevolutPayPayments = Stripe.AccountUpdateParams.Capabilities.RevolutPayPayments;
      export type SamsungPayPayments = Stripe.AccountUpdateParams.Capabilities.SamsungPayPayments;
      export type SatispayPayments = Stripe.AccountUpdateParams.Capabilities.SatispayPayments;
      export type ScalapayPayments = Stripe.AccountUpdateParams.Capabilities.ScalapayPayments;
      export type SepaBankTransferPayments = Stripe.AccountUpdateParams.Capabilities.SepaBankTransferPayments;
      export type SepaDebitPayments = Stripe.AccountUpdateParams.Capabilities.SepaDebitPayments;
      export type SofortPayments = Stripe.AccountUpdateParams.Capabilities.SofortPayments;
      export type SunbitPayments = Stripe.AccountUpdateParams.Capabilities.SunbitPayments;
      export type SwishPayments = Stripe.AccountUpdateParams.Capabilities.SwishPayments;
      export type TaxReportingUs1099K = Stripe.AccountUpdateParams.Capabilities.TaxReportingUs1099K;
      export type TaxReportingUs1099Misc = Stripe.AccountUpdateParams.Capabilities.TaxReportingUs1099Misc;
      export type Transfers = Stripe.AccountUpdateParams.Capabilities.Transfers;
      export type Treasury = Stripe.AccountUpdateParams.Capabilities.Treasury;
      export type TwintPayments = Stripe.AccountUpdateParams.Capabilities.TwintPayments;
      export type UpiPayments = Stripe.AccountUpdateParams.Capabilities.UpiPayments;
      export type UsBankAccountAchPayments = Stripe.AccountUpdateParams.Capabilities.UsBankAccountAchPayments;
      export type UsBankTransferPayments = Stripe.AccountUpdateParams.Capabilities.UsBankTransferPayments;
      export type ZipPayments = Stripe.AccountUpdateParams.Capabilities.ZipPayments;
    }
    export namespace Company {
      export type DirectorshipDeclaration = Stripe.AccountUpdateParams.Company.DirectorshipDeclaration;
      export type OwnershipDeclaration = Stripe.AccountUpdateParams.Company.OwnershipDeclaration;
      export type OwnershipExemptionReason = Stripe.AccountUpdateParams.Company.OwnershipExemptionReason;
      export type RegistrationDate = Stripe.AccountUpdateParams.Company.RegistrationDate;
      export type RepresentativeDeclaration = Stripe.AccountUpdateParams.Company.RepresentativeDeclaration;
      export type Structure = Stripe.AccountUpdateParams.Company.Structure;
      export type Verification = Stripe.AccountUpdateParams.Company.Verification;
      export namespace Verification {
        export type Document = Stripe.AccountUpdateParams.Company.Verification.Document;
      }
    }
    export namespace Documents {
      export type BankAccountOwnershipVerification = Stripe.AccountUpdateParams.Documents.BankAccountOwnershipVerification;
      export type CompanyLicense = Stripe.AccountUpdateParams.Documents.CompanyLicense;
      export type CompanyMemorandumOfAssociation = Stripe.AccountUpdateParams.Documents.CompanyMemorandumOfAssociation;
      export type CompanyMinisterialDecree = Stripe.AccountUpdateParams.Documents.CompanyMinisterialDecree;
      export type CompanyRegistrationVerification = Stripe.AccountUpdateParams.Documents.CompanyRegistrationVerification;
      export type CompanyTaxIdVerification = Stripe.AccountUpdateParams.Documents.CompanyTaxIdVerification;
      export type ProofOfAddress = Stripe.AccountUpdateParams.Documents.ProofOfAddress;
      export type ProofOfRegistration = Stripe.AccountUpdateParams.Documents.ProofOfRegistration;
      export type ProofOfUltimateBeneficialOwnership = Stripe.AccountUpdateParams.Documents.ProofOfUltimateBeneficialOwnership;
      export namespace ProofOfRegistration {
        export type Signer = Stripe.AccountUpdateParams.Documents.ProofOfRegistration.Signer;
      }
      export namespace ProofOfUltimateBeneficialOwnership {
        export type Signer = Stripe.AccountUpdateParams.Documents.ProofOfUltimateBeneficialOwnership.Signer;
      }
    }
    export namespace Individual {
      export type Dob = Stripe.AccountUpdateParams.Individual.Dob;
      export type PoliticalExposure = Stripe.AccountUpdateParams.Individual.PoliticalExposure;
      export type Relationship = Stripe.AccountUpdateParams.Individual.Relationship;
      export type Verification = Stripe.AccountUpdateParams.Individual.Verification;
      export namespace Verification {
        export type AdditionalDocument = Stripe.AccountUpdateParams.Individual.Verification.AdditionalDocument;
        export type Document = Stripe.AccountUpdateParams.Individual.Verification.Document;
      }
    }
    export namespace Settings {
      export type BacsDebitPayments = Stripe.AccountUpdateParams.Settings.BacsDebitPayments;
      export type Branding = Stripe.AccountUpdateParams.Settings.Branding;
      export type CardIssuing = Stripe.AccountUpdateParams.Settings.CardIssuing;
      export type CardPayments = Stripe.AccountUpdateParams.Settings.CardPayments;
      export type Invoices = Stripe.AccountUpdateParams.Settings.Invoices;
      export type Payments = Stripe.AccountUpdateParams.Settings.Payments;
      export type Payouts = Stripe.AccountUpdateParams.Settings.Payouts;
      export type Treasury = Stripe.AccountUpdateParams.Settings.Treasury;
      export namespace CardIssuing {
        export type TosAcceptance = Stripe.AccountUpdateParams.Settings.CardIssuing.TosAcceptance;
      }
      export namespace CardPayments {
        export type DeclineOn = Stripe.AccountUpdateParams.Settings.CardPayments.DeclineOn;
      }
      export namespace Invoices {
        export type HostedPaymentMethodSave = Stripe.AccountUpdateParams.Settings.Invoices.HostedPaymentMethodSave;
      }
      export namespace Payouts {
        export type Schedule = Stripe.AccountUpdateParams.Settings.Payouts.Schedule;
        export namespace Schedule {
          export type Interval = Stripe.AccountUpdateParams.Settings.Payouts.Schedule.Interval;
          export type WeeklyAnchor = Stripe.AccountUpdateParams.Settings.Payouts.Schedule.WeeklyAnchor;
          export type WeeklyPayoutDay = Stripe.AccountUpdateParams.Settings.Payouts.Schedule.WeeklyPayoutDay;
        }
      }
      export namespace Treasury {
        export type TosAcceptance = Stripe.AccountUpdateParams.Settings.Treasury.TosAcceptance;
      }
    }
  }
  export namespace AccountCreateExternalAccountParams {
    export type Card = Stripe.AccountCreateExternalAccountParams.Card;
    export type BankAccount = Stripe.AccountCreateExternalAccountParams.BankAccount;
    export type CardToken = Stripe.AccountCreateExternalAccountParams.CardToken;
    export namespace BankAccount {
      export type AccountHolderType = Stripe.AccountCreateExternalAccountParams.BankAccount.AccountHolderType;
    }
  }
  export namespace AccountCreatePersonParams {
    export type AdditionalTosAcceptances = Stripe.AccountCreatePersonParams.AdditionalTosAcceptances;
    export type Dob = Stripe.AccountCreatePersonParams.Dob;
    export type Documents = Stripe.AccountCreatePersonParams.Documents;
    export type PoliticalExposure = Stripe.AccountCreatePersonParams.PoliticalExposure;
    export type Relationship = Stripe.AccountCreatePersonParams.Relationship;
    export type UsCfpbData = Stripe.AccountCreatePersonParams.UsCfpbData;
    export type Verification = Stripe.AccountCreatePersonParams.Verification;
    export namespace AdditionalTosAcceptances {
      export type Account = Stripe.AccountCreatePersonParams.AdditionalTosAcceptances.Account;
    }
    export namespace Documents {
      export type CompanyAuthorization = Stripe.AccountCreatePersonParams.Documents.CompanyAuthorization;
      export type Passport = Stripe.AccountCreatePersonParams.Documents.Passport;
      export type Visa = Stripe.AccountCreatePersonParams.Documents.Visa;
    }
    export namespace UsCfpbData {
      export type EthnicityDetails = Stripe.AccountCreatePersonParams.UsCfpbData.EthnicityDetails;
      export type RaceDetails = Stripe.AccountCreatePersonParams.UsCfpbData.RaceDetails;
      export namespace EthnicityDetails {
        export type Ethnicity = Stripe.AccountCreatePersonParams.UsCfpbData.EthnicityDetails.Ethnicity;
      }
      export namespace RaceDetails {
        export type Race = Stripe.AccountCreatePersonParams.UsCfpbData.RaceDetails.Race;
      }
    }
    export namespace Verification {
      export type AdditionalDocument = Stripe.AccountCreatePersonParams.Verification.AdditionalDocument;
      export type Document = Stripe.AccountCreatePersonParams.Verification.Document;
    }
  }
  export namespace AccountListExternalAccountsParams {
    export type Object = Stripe.AccountListExternalAccountsParams.Object;
  }
  export namespace AccountListPersonsParams {
    export type Relationship = Stripe.AccountListPersonsParams.Relationship;
  }
  export namespace AccountUpdateExternalAccountParams {
    export type AccountHolderType = Stripe.AccountUpdateExternalAccountParams.AccountHolderType;
    export type AccountType = Stripe.AccountUpdateExternalAccountParams.AccountType;
    export type Documents = Stripe.AccountUpdateExternalAccountParams.Documents;
    export namespace Documents {
      export type BankAccountOwnershipVerification = Stripe.AccountUpdateExternalAccountParams.Documents.BankAccountOwnershipVerification;
    }
  }
  export namespace AccountUpdatePersonParams {
    export type AdditionalTosAcceptances = Stripe.AccountUpdatePersonParams.AdditionalTosAcceptances;
    export type Dob = Stripe.AccountUpdatePersonParams.Dob;
    export type Documents = Stripe.AccountUpdatePersonParams.Documents;
    export type PoliticalExposure = Stripe.AccountUpdatePersonParams.PoliticalExposure;
    export type Relationship = Stripe.AccountUpdatePersonParams.Relationship;
    export type UsCfpbData = Stripe.AccountUpdatePersonParams.UsCfpbData;
    export type Verification = Stripe.AccountUpdatePersonParams.Verification;
    export namespace AdditionalTosAcceptances {
      export type Account = Stripe.AccountUpdatePersonParams.AdditionalTosAcceptances.Account;
    }
    export namespace Documents {
      export type CompanyAuthorization = Stripe.AccountUpdatePersonParams.Documents.CompanyAuthorization;
      export type Passport = Stripe.AccountUpdatePersonParams.Documents.Passport;
      export type Visa = Stripe.AccountUpdatePersonParams.Documents.Visa;
    }
    export namespace UsCfpbData {
      export type EthnicityDetails = Stripe.AccountUpdatePersonParams.UsCfpbData.EthnicityDetails;
      export type RaceDetails = Stripe.AccountUpdatePersonParams.UsCfpbData.RaceDetails;
      export namespace EthnicityDetails {
        export type Ethnicity = Stripe.AccountUpdatePersonParams.UsCfpbData.EthnicityDetails.Ethnicity;
      }
      export namespace RaceDetails {
        export type Race = Stripe.AccountUpdatePersonParams.UsCfpbData.RaceDetails.Race;
      }
    }
    export namespace Verification {
      export type AdditionalDocument = Stripe.AccountUpdatePersonParams.Verification.AdditionalDocument;
      export type Document = Stripe.AccountUpdatePersonParams.Verification.Document;
    }
  }
  export namespace Account {
    export type BusinessProfile = Stripe.Account.BusinessProfile;
    export type BusinessType = Stripe.Account.BusinessType;
    export type Capabilities = Stripe.Account.Capabilities;
    export type Company = Stripe.Account.Company;
    export type Controller = Stripe.Account.Controller;
    export type FutureRequirements = Stripe.Account.FutureRequirements;
    export type Groups = Stripe.Account.Groups;
    export type Requirements = Stripe.Account.Requirements;
    export type Settings = Stripe.Account.Settings;
    export type TosAcceptance = Stripe.Account.TosAcceptance;
    export type Type = Stripe.Account.Type;
    export namespace BusinessProfile {
      export type AnnualRevenue = Stripe.Account.BusinessProfile.AnnualRevenue;
      export type MinorityOwnedBusinessDesignation = Stripe.Account.BusinessProfile.MinorityOwnedBusinessDesignation;
      export type MonthlyEstimatedRevenue = Stripe.Account.BusinessProfile.MonthlyEstimatedRevenue;
    }
    export namespace Capabilities {
      export type AcssDebitPayments = Stripe.Account.Capabilities.AcssDebitPayments;
      export type AffirmPayments = Stripe.Account.Capabilities.AffirmPayments;
      export type AfterpayClearpayPayments = Stripe.Account.Capabilities.AfterpayClearpayPayments;
      export type AlmaPayments = Stripe.Account.Capabilities.AlmaPayments;
      export type AmazonPayPayments = Stripe.Account.Capabilities.AmazonPayPayments;
      export type AppDistribution = Stripe.Account.Capabilities.AppDistribution;
      export type AuBecsDebitPayments = Stripe.Account.Capabilities.AuBecsDebitPayments;
      export type BacsDebitPayments = Stripe.Account.Capabilities.BacsDebitPayments;
      export type BancontactPayments = Stripe.Account.Capabilities.BancontactPayments;
      export type BankTransferPayments = Stripe.Account.Capabilities.BankTransferPayments;
      export type BilliePayments = Stripe.Account.Capabilities.BilliePayments;
      export type BizumPayments = Stripe.Account.Capabilities.BizumPayments;
      export type BlikPayments = Stripe.Account.Capabilities.BlikPayments;
      export type BoletoPayments = Stripe.Account.Capabilities.BoletoPayments;
      export type CardIssuing = Stripe.Account.Capabilities.CardIssuing;
      export type CardPayments = Stripe.Account.Capabilities.CardPayments;
      export type CartesBancairesPayments = Stripe.Account.Capabilities.CartesBancairesPayments;
      export type CashappPayments = Stripe.Account.Capabilities.CashappPayments;
      export type CryptoPayments = Stripe.Account.Capabilities.CryptoPayments;
      export type EpsPayments = Stripe.Account.Capabilities.EpsPayments;
      export type FpxPayments = Stripe.Account.Capabilities.FpxPayments;
      export type GbBankTransferPayments = Stripe.Account.Capabilities.GbBankTransferPayments;
      export type GiropayPayments = Stripe.Account.Capabilities.GiropayPayments;
      export type GrabpayPayments = Stripe.Account.Capabilities.GrabpayPayments;
      export type IdealPayments = Stripe.Account.Capabilities.IdealPayments;
      export type IndiaInternationalPayments = Stripe.Account.Capabilities.IndiaInternationalPayments;
      export type JcbPayments = Stripe.Account.Capabilities.JcbPayments;
      export type JpBankTransferPayments = Stripe.Account.Capabilities.JpBankTransferPayments;
      export type KakaoPayPayments = Stripe.Account.Capabilities.KakaoPayPayments;
      export type KlarnaPayments = Stripe.Account.Capabilities.KlarnaPayments;
      export type KonbiniPayments = Stripe.Account.Capabilities.KonbiniPayments;
      export type KrCardPayments = Stripe.Account.Capabilities.KrCardPayments;
      export type LegacyPayments = Stripe.Account.Capabilities.LegacyPayments;
      export type LinkPayments = Stripe.Account.Capabilities.LinkPayments;
      export type MbWayPayments = Stripe.Account.Capabilities.MbWayPayments;
      export type MobilepayPayments = Stripe.Account.Capabilities.MobilepayPayments;
      export type MultibancoPayments = Stripe.Account.Capabilities.MultibancoPayments;
      export type MxBankTransferPayments = Stripe.Account.Capabilities.MxBankTransferPayments;
      export type NaverPayPayments = Stripe.Account.Capabilities.NaverPayPayments;
      export type NzBankAccountBecsDebitPayments = Stripe.Account.Capabilities.NzBankAccountBecsDebitPayments;
      export type OxxoPayments = Stripe.Account.Capabilities.OxxoPayments;
      export type P24Payments = Stripe.Account.Capabilities.P24Payments;
      export type PayByBankPayments = Stripe.Account.Capabilities.PayByBankPayments;
      export type PaycoPayments = Stripe.Account.Capabilities.PaycoPayments;
      export type PaynowPayments = Stripe.Account.Capabilities.PaynowPayments;
      export type PaytoPayments = Stripe.Account.Capabilities.PaytoPayments;
      export type PixPayments = Stripe.Account.Capabilities.PixPayments;
      export type PromptpayPayments = Stripe.Account.Capabilities.PromptpayPayments;
      export type RevolutPayPayments = Stripe.Account.Capabilities.RevolutPayPayments;
      export type SamsungPayPayments = Stripe.Account.Capabilities.SamsungPayPayments;
      export type SatispayPayments = Stripe.Account.Capabilities.SatispayPayments;
      export type ScalapayPayments = Stripe.Account.Capabilities.ScalapayPayments;
      export type SepaBankTransferPayments = Stripe.Account.Capabilities.SepaBankTransferPayments;
      export type SepaDebitPayments = Stripe.Account.Capabilities.SepaDebitPayments;
      export type SofortPayments = Stripe.Account.Capabilities.SofortPayments;
      export type SunbitPayments = Stripe.Account.Capabilities.SunbitPayments;
      export type SwishPayments = Stripe.Account.Capabilities.SwishPayments;
      export type TaxReportingUs1099K = Stripe.Account.Capabilities.TaxReportingUs1099K;
      export type TaxReportingUs1099Misc = Stripe.Account.Capabilities.TaxReportingUs1099Misc;
      export type Transfers = Stripe.Account.Capabilities.Transfers;
      export type Treasury = Stripe.Account.Capabilities.Treasury;
      export type TwintPayments = Stripe.Account.Capabilities.TwintPayments;
      export type UpiPayments = Stripe.Account.Capabilities.UpiPayments;
      export type UsBankAccountAchPayments = Stripe.Account.Capabilities.UsBankAccountAchPayments;
      export type UsBankTransferPayments = Stripe.Account.Capabilities.UsBankTransferPayments;
      export type ZipPayments = Stripe.Account.Capabilities.ZipPayments;
    }
    export namespace Company {
      export type AddressKana = Stripe.Account.Company.AddressKana;
      export type AddressKanji = Stripe.Account.Company.AddressKanji;
      export type DirectorshipDeclaration = Stripe.Account.Company.DirectorshipDeclaration;
      export type OwnershipDeclaration = Stripe.Account.Company.OwnershipDeclaration;
      export type OwnershipExemptionReason = Stripe.Account.Company.OwnershipExemptionReason;
      export type RegistrationDate = Stripe.Account.Company.RegistrationDate;
      export type RepresentativeDeclaration = Stripe.Account.Company.RepresentativeDeclaration;
      export type Structure = Stripe.Account.Company.Structure;
      export type Verification = Stripe.Account.Company.Verification;
      export namespace Verification {
        export type Document = Stripe.Account.Company.Verification.Document;
      }
    }
    export namespace Controller {
      export type Fees = Stripe.Account.Controller.Fees;
      export type Losses = Stripe.Account.Controller.Losses;
      export type RequirementCollection = Stripe.Account.Controller.RequirementCollection;
      export type StripeDashboard = Stripe.Account.Controller.StripeDashboard;
      export type Type = Stripe.Account.Controller.Type;
      export namespace Fees {
        export type Payer = Stripe.Account.Controller.Fees.Payer;
      }
      export namespace Losses {
        export type Payments = Stripe.Account.Controller.Losses.Payments;
      }
      export namespace StripeDashboard {
        export type Type = Stripe.Account.Controller.StripeDashboard.Type;
      }
    }
    export namespace FutureRequirements {
      export type Alternative = Stripe.Account.FutureRequirements.Alternative;
      export type DisabledReason = Stripe.Account.FutureRequirements.DisabledReason;
      export type Error = Stripe.Account.FutureRequirements.Error;
      export namespace Error {
        export type Code = Stripe.Account.FutureRequirements.Error.Code;
      }
    }
    export namespace Requirements {
      export type Alternative = Stripe.Account.Requirements.Alternative;
      export type DisabledReason = Stripe.Account.Requirements.DisabledReason;
      export type Error = Stripe.Account.Requirements.Error;
      export namespace Error {
        export type Code = Stripe.Account.Requirements.Error.Code;
      }
    }
    export namespace Settings {
      export type BacsDebitPayments = Stripe.Account.Settings.BacsDebitPayments;
      export type Branding = Stripe.Account.Settings.Branding;
      export type CardIssuing = Stripe.Account.Settings.CardIssuing;
      export type CardPayments = Stripe.Account.Settings.CardPayments;
      export type Dashboard = Stripe.Account.Settings.Dashboard;
      export type Invoices = Stripe.Account.Settings.Invoices;
      export type Payments = Stripe.Account.Settings.Payments;
      export type Payouts = Stripe.Account.Settings.Payouts;
      export type SepaDebitPayments = Stripe.Account.Settings.SepaDebitPayments;
      export type Treasury = Stripe.Account.Settings.Treasury;
      export namespace CardIssuing {
        export type TosAcceptance = Stripe.Account.Settings.CardIssuing.TosAcceptance;
      }
      export namespace CardPayments {
        export type DeclineOn = Stripe.Account.Settings.CardPayments.DeclineOn;
      }
      export namespace Invoices {
        export type HostedPaymentMethodSave = Stripe.Account.Settings.Invoices.HostedPaymentMethodSave;
      }
      export namespace Payouts {
        export type Schedule = Stripe.Account.Settings.Payouts.Schedule;
        export namespace Schedule {
          export type WeeklyPayoutDay = Stripe.Account.Settings.Payouts.Schedule.WeeklyPayoutDay;
        }
      }
      export namespace Treasury {
        export type TosAcceptance = Stripe.Account.Settings.Treasury.TosAcceptance;
      }
    }
  }
  export namespace AccountLinkCreateParams {
    export type Type = Stripe.AccountLinkCreateParams.Type;
    export type Collect = Stripe.AccountLinkCreateParams.Collect;
    export type CollectionOptions = Stripe.AccountLinkCreateParams.CollectionOptions;
    export namespace CollectionOptions {
      export type Fields = Stripe.AccountLinkCreateParams.CollectionOptions.Fields;
      export type FutureRequirements = Stripe.AccountLinkCreateParams.CollectionOptions.FutureRequirements;
    }
  }
  export namespace AccountSessionCreateParams {
    export type Components = Stripe.AccountSessionCreateParams.Components;
    export namespace Components {
      export type AccountManagement = Stripe.AccountSessionCreateParams.Components.AccountManagement;
      export type AccountOnboarding = Stripe.AccountSessionCreateParams.Components.AccountOnboarding;
      export type BalanceReport = Stripe.AccountSessionCreateParams.Components.BalanceReport;
      export type Balances = Stripe.AccountSessionCreateParams.Components.Balances;
      export type DisputesList = Stripe.AccountSessionCreateParams.Components.DisputesList;
      export type Documents = Stripe.AccountSessionCreateParams.Components.Documents;
      export type FinancialAccount = Stripe.AccountSessionCreateParams.Components.FinancialAccount;
      export type FinancialAccountTransactions = Stripe.AccountSessionCreateParams.Components.FinancialAccountTransactions;
      export type InstantPayoutsPromotion = Stripe.AccountSessionCreateParams.Components.InstantPayoutsPromotion;
      export type IssuingCard = Stripe.AccountSessionCreateParams.Components.IssuingCard;
      export type IssuingCardsList = Stripe.AccountSessionCreateParams.Components.IssuingCardsList;
      export type NotificationBanner = Stripe.AccountSessionCreateParams.Components.NotificationBanner;
      export type PaymentDetails = Stripe.AccountSessionCreateParams.Components.PaymentDetails;
      export type PaymentDisputes = Stripe.AccountSessionCreateParams.Components.PaymentDisputes;
      export type Payments = Stripe.AccountSessionCreateParams.Components.Payments;
      export type PayoutDetails = Stripe.AccountSessionCreateParams.Components.PayoutDetails;
      export type PayoutReconciliationReport = Stripe.AccountSessionCreateParams.Components.PayoutReconciliationReport;
      export type Payouts = Stripe.AccountSessionCreateParams.Components.Payouts;
      export type PayoutsList = Stripe.AccountSessionCreateParams.Components.PayoutsList;
      export type TaxRegistrations = Stripe.AccountSessionCreateParams.Components.TaxRegistrations;
      export type TaxSettings = Stripe.AccountSessionCreateParams.Components.TaxSettings;
      export namespace AccountManagement {
        export type Features = Stripe.AccountSessionCreateParams.Components.AccountManagement.Features;
      }
      export namespace AccountOnboarding {
        export type Features = Stripe.AccountSessionCreateParams.Components.AccountOnboarding.Features;
      }
      export namespace BalanceReport {
        export type Features = Stripe.AccountSessionCreateParams.Components.BalanceReport.Features;
      }
      export namespace Balances {
        export type Features = Stripe.AccountSessionCreateParams.Components.Balances.Features;
      }
      export namespace DisputesList {
        export type Features = Stripe.AccountSessionCreateParams.Components.DisputesList.Features;
      }
      export namespace Documents {
        export type Features = Stripe.AccountSessionCreateParams.Components.Documents.Features;
      }
      export namespace FinancialAccount {
        export type Features = Stripe.AccountSessionCreateParams.Components.FinancialAccount.Features;
      }
      export namespace FinancialAccountTransactions {
        export type Features = Stripe.AccountSessionCreateParams.Components.FinancialAccountTransactions.Features;
      }
      export namespace InstantPayoutsPromotion {
        export type Features = Stripe.AccountSessionCreateParams.Components.InstantPayoutsPromotion.Features;
      }
      export namespace IssuingCard {
        export type Features = Stripe.AccountSessionCreateParams.Components.IssuingCard.Features;
      }
      export namespace IssuingCardsList {
        export type Features = Stripe.AccountSessionCreateParams.Components.IssuingCardsList.Features;
      }
      export namespace NotificationBanner {
        export type Features = Stripe.AccountSessionCreateParams.Components.NotificationBanner.Features;
      }
      export namespace PaymentDetails {
        export type Features = Stripe.AccountSessionCreateParams.Components.PaymentDetails.Features;
      }
      export namespace PaymentDisputes {
        export type Features = Stripe.AccountSessionCreateParams.Components.PaymentDisputes.Features;
      }
      export namespace Payments {
        export type Features = Stripe.AccountSessionCreateParams.Components.Payments.Features;
      }
      export namespace PayoutDetails {
        export type Features = Stripe.AccountSessionCreateParams.Components.PayoutDetails.Features;
      }
      export namespace PayoutReconciliationReport {
        export type Features = Stripe.AccountSessionCreateParams.Components.PayoutReconciliationReport.Features;
      }
      export namespace Payouts {
        export type Features = Stripe.AccountSessionCreateParams.Components.Payouts.Features;
      }
      export namespace PayoutsList {
        export type Features = Stripe.AccountSessionCreateParams.Components.PayoutsList.Features;
      }
      export namespace TaxRegistrations {
        export type Features = Stripe.AccountSessionCreateParams.Components.TaxRegistrations.Features;
      }
      export namespace TaxSettings {
        export type Features = Stripe.AccountSessionCreateParams.Components.TaxSettings.Features;
      }
    }
  }
  export namespace AccountSession {
    export type Components = Stripe.AccountSession.Components;
    export namespace Components {
      export type AccountManagement = Stripe.AccountSession.Components.AccountManagement;
      export type AccountOnboarding = Stripe.AccountSession.Components.AccountOnboarding;
      export type BalanceReport = Stripe.AccountSession.Components.BalanceReport;
      export type Balances = Stripe.AccountSession.Components.Balances;
      export type DisputesList = Stripe.AccountSession.Components.DisputesList;
      export type Documents = Stripe.AccountSession.Components.Documents;
      export type FinancialAccount = Stripe.AccountSession.Components.FinancialAccount;
      export type FinancialAccountTransactions = Stripe.AccountSession.Components.FinancialAccountTransactions;
      export type InstantPayoutsPromotion = Stripe.AccountSession.Components.InstantPayoutsPromotion;
      export type IssuingCard = Stripe.AccountSession.Components.IssuingCard;
      export type IssuingCardsList = Stripe.AccountSession.Components.IssuingCardsList;
      export type NotificationBanner = Stripe.AccountSession.Components.NotificationBanner;
      export type PaymentDetails = Stripe.AccountSession.Components.PaymentDetails;
      export type PaymentDisputes = Stripe.AccountSession.Components.PaymentDisputes;
      export type Payments = Stripe.AccountSession.Components.Payments;
      export type PayoutDetails = Stripe.AccountSession.Components.PayoutDetails;
      export type PayoutReconciliationReport = Stripe.AccountSession.Components.PayoutReconciliationReport;
      export type Payouts = Stripe.AccountSession.Components.Payouts;
      export type PayoutsList = Stripe.AccountSession.Components.PayoutsList;
      export type TaxRegistrations = Stripe.AccountSession.Components.TaxRegistrations;
      export type TaxSettings = Stripe.AccountSession.Components.TaxSettings;
      export namespace AccountManagement {
        export type Features = Stripe.AccountSession.Components.AccountManagement.Features;
      }
      export namespace AccountOnboarding {
        export type Features = Stripe.AccountSession.Components.AccountOnboarding.Features;
      }
      export namespace BalanceReport {
        export type Features = Stripe.AccountSession.Components.BalanceReport.Features;
      }
      export namespace Balances {
        export type Features = Stripe.AccountSession.Components.Balances.Features;
      }
      export namespace DisputesList {
        export type Features = Stripe.AccountSession.Components.DisputesList.Features;
      }
      export namespace Documents {
        export type Features = Stripe.AccountSession.Components.Documents.Features;
      }
      export namespace FinancialAccount {
        export type Features = Stripe.AccountSession.Components.FinancialAccount.Features;
      }
      export namespace FinancialAccountTransactions {
        export type Features = Stripe.AccountSession.Components.FinancialAccountTransactions.Features;
      }
      export namespace InstantPayoutsPromotion {
        export type Features = Stripe.AccountSession.Components.InstantPayoutsPromotion.Features;
      }
      export namespace IssuingCard {
        export type Features = Stripe.AccountSession.Components.IssuingCard.Features;
      }
      export namespace IssuingCardsList {
        export type Features = Stripe.AccountSession.Components.IssuingCardsList.Features;
      }
      export namespace NotificationBanner {
        export type Features = Stripe.AccountSession.Components.NotificationBanner.Features;
      }
      export namespace PaymentDetails {
        export type Features = Stripe.AccountSession.Components.PaymentDetails.Features;
      }
      export namespace PaymentDisputes {
        export type Features = Stripe.AccountSession.Components.PaymentDisputes.Features;
      }
      export namespace Payments {
        export type Features = Stripe.AccountSession.Components.Payments.Features;
      }
      export namespace PayoutDetails {
        export type Features = Stripe.AccountSession.Components.PayoutDetails.Features;
      }
      export namespace PayoutReconciliationReport {
        export type Features = Stripe.AccountSession.Components.PayoutReconciliationReport.Features;
      }
      export namespace Payouts {
        export type Features = Stripe.AccountSession.Components.Payouts.Features;
      }
      export namespace PayoutsList {
        export type Features = Stripe.AccountSession.Components.PayoutsList.Features;
      }
      export namespace TaxRegistrations {
        export type Features = Stripe.AccountSession.Components.TaxRegistrations.Features;
      }
      export namespace TaxSettings {
        export type Features = Stripe.AccountSession.Components.TaxSettings.Features;
      }
    }
  }
  export namespace ApplicationFee {
    export type FeeSource = Stripe.ApplicationFee.FeeSource;
    export namespace FeeSource {
      export type Type = Stripe.ApplicationFee.FeeSource.Type;
    }
  }
  export namespace Balance {
    export type Available = Stripe.Balance.Available;
    export type ConnectReserved = Stripe.Balance.ConnectReserved;
    export type InstantAvailable = Stripe.Balance.InstantAvailable;
    export type Issuing = Stripe.Balance.Issuing;
    export type Pending = Stripe.Balance.Pending;
    export type RefundAndDisputePrefunding = Stripe.Balance.RefundAndDisputePrefunding;
    export namespace Available {
      export type SourceTypes = Stripe.Balance.Available.SourceTypes;
    }
    export namespace ConnectReserved {
      export type SourceTypes = Stripe.Balance.ConnectReserved.SourceTypes;
    }
    export namespace InstantAvailable {
      export type NetAvailable = Stripe.Balance.InstantAvailable.NetAvailable;
      export type SourceTypes = Stripe.Balance.InstantAvailable.SourceTypes;
      export namespace NetAvailable {
        export type SourceTypes = Stripe.Balance.InstantAvailable.NetAvailable.SourceTypes;
      }
    }
    export namespace Issuing {
      export type Available = Stripe.Balance.Issuing.Available;
      export namespace Available {
        export type SourceTypes = Stripe.Balance.Issuing.Available.SourceTypes;
      }
    }
    export namespace Pending {
      export type SourceTypes = Stripe.Balance.Pending.SourceTypes;
    }
    export namespace RefundAndDisputePrefunding {
      export type Available = Stripe.Balance.RefundAndDisputePrefunding.Available;
      export type Pending = Stripe.Balance.RefundAndDisputePrefunding.Pending;
      export namespace Available {
        export type SourceTypes = Stripe.Balance.RefundAndDisputePrefunding.Available.SourceTypes;
      }
      export namespace Pending {
        export type SourceTypes = Stripe.Balance.RefundAndDisputePrefunding.Pending.SourceTypes;
      }
    }
  }
  export namespace BalanceSettingsUpdateParams {
    export type Payments = Stripe.BalanceSettingsUpdateParams.Payments;
    export namespace Payments {
      export type Payouts = Stripe.BalanceSettingsUpdateParams.Payments.Payouts;
      export type SettlementTiming = Stripe.BalanceSettingsUpdateParams.Payments.SettlementTiming;
      export namespace Payouts {
        export type AutomaticTransferRulesByCurrency = Stripe.BalanceSettingsUpdateParams.Payments.Payouts.AutomaticTransferRulesByCurrency;
        export type Schedule = Stripe.BalanceSettingsUpdateParams.Payments.Payouts.Schedule;
        export namespace AutomaticTransferRulesByCurrency {
          export type Type = Stripe.BalanceSettingsUpdateParams.Payments.Payouts.AutomaticTransferRulesByCurrency.Type;
        }
        export namespace Schedule {
          export type Interval = Stripe.BalanceSettingsUpdateParams.Payments.Payouts.Schedule.Interval;
          export type WeeklyPayoutDay = Stripe.BalanceSettingsUpdateParams.Payments.Payouts.Schedule.WeeklyPayoutDay;
        }
      }
      export namespace SettlementTiming {
        export type StartOfDay = Stripe.BalanceSettingsUpdateParams.Payments.SettlementTiming.StartOfDay;
      }
    }
  }
  export namespace BalanceSettings {
    export type Payments = Stripe.BalanceSettings.Payments;
    export namespace Payments {
      export type Payouts = Stripe.BalanceSettings.Payments.Payouts;
      export type SettlementTiming = Stripe.BalanceSettings.Payments.SettlementTiming;
      export namespace Payouts {
        export type AutomaticTransferRulesByCurrency = Stripe.BalanceSettings.Payments.Payouts.AutomaticTransferRulesByCurrency;
        export type Schedule = Stripe.BalanceSettings.Payments.Payouts.Schedule;
        export type Status = Stripe.BalanceSettings.Payments.Payouts.Status;
        export namespace AutomaticTransferRulesByCurrency {
          export type Type = Stripe.BalanceSettings.Payments.Payouts.AutomaticTransferRulesByCurrency.Type;
        }
        export namespace Schedule {
          export type Interval = Stripe.BalanceSettings.Payments.Payouts.Schedule.Interval;
          export type WeeklyPayoutDay = Stripe.BalanceSettings.Payments.Payouts.Schedule.WeeklyPayoutDay;
        }
      }
      export namespace SettlementTiming {
        export type StartOfDay = Stripe.BalanceSettings.Payments.SettlementTiming.StartOfDay;
      }
    }
  }
  export namespace BalanceTransaction {
    export type BalanceType = Stripe.BalanceTransaction.BalanceType;
    export type FeeDetail = Stripe.BalanceTransaction.FeeDetail;
    export type Type = Stripe.BalanceTransaction.Type;
  }
  export namespace ChargeCreateParams {
    export type Destination = Stripe.ChargeCreateParams.Destination;
    export type RadarOptions = Stripe.ChargeCreateParams.RadarOptions;
    export type Shipping = Stripe.ChargeCreateParams.Shipping;
    export type TransferData = Stripe.ChargeCreateParams.TransferData;
  }
  export namespace ChargeUpdateParams {
    export type FraudDetails = Stripe.ChargeUpdateParams.FraudDetails;
    export type Shipping = Stripe.ChargeUpdateParams.Shipping;
    export namespace FraudDetails {
      export type UserReport = Stripe.ChargeUpdateParams.FraudDetails.UserReport;
    }
  }
  export namespace ChargeCaptureParams {
    export type TransferData = Stripe.ChargeCaptureParams.TransferData;
  }
  export namespace Charge {
    export type BillingDetails = Stripe.Charge.BillingDetails;
    export type FraudDetails = Stripe.Charge.FraudDetails;
    export type Level3 = Stripe.Charge.Level3;
    export type Outcome = Stripe.Charge.Outcome;
    export type PaymentMethodDetails = Stripe.Charge.PaymentMethodDetails;
    export type PresentmentDetails = Stripe.Charge.PresentmentDetails;
    export type RadarOptions = Stripe.Charge.RadarOptions;
    export type Shipping = Stripe.Charge.Shipping;
    export type Status = Stripe.Charge.Status;
    export type TransferData = Stripe.Charge.TransferData;
    export namespace Level3 {
      export type LineItem = Stripe.Charge.Level3.LineItem;
    }
    export namespace Outcome {
      export type AdviceCode = Stripe.Charge.Outcome.AdviceCode;
      export type Rule = Stripe.Charge.Outcome.Rule;
    }
    export namespace PaymentMethodDetails {
      export type AchCreditTransfer = Stripe.Charge.PaymentMethodDetails.AchCreditTransfer;
      export type AchDebit = Stripe.Charge.PaymentMethodDetails.AchDebit;
      export type AcssDebit = Stripe.Charge.PaymentMethodDetails.AcssDebit;
      export type Affirm = Stripe.Charge.PaymentMethodDetails.Affirm;
      export type AfterpayClearpay = Stripe.Charge.PaymentMethodDetails.AfterpayClearpay;
      export type Alipay = Stripe.Charge.PaymentMethodDetails.Alipay;
      export type Alma = Stripe.Charge.PaymentMethodDetails.Alma;
      export type AmazonPay = Stripe.Charge.PaymentMethodDetails.AmazonPay;
      export type AuBecsDebit = Stripe.Charge.PaymentMethodDetails.AuBecsDebit;
      export type BacsDebit = Stripe.Charge.PaymentMethodDetails.BacsDebit;
      export type Bancontact = Stripe.Charge.PaymentMethodDetails.Bancontact;
      export type Billie = Stripe.Charge.PaymentMethodDetails.Billie;
      export type Bizum = Stripe.Charge.PaymentMethodDetails.Bizum;
      export type Blik = Stripe.Charge.PaymentMethodDetails.Blik;
      export type Boleto = Stripe.Charge.PaymentMethodDetails.Boleto;
      export type Card = Stripe.Charge.PaymentMethodDetails.Card;
      export type CardPresent = Stripe.Charge.PaymentMethodDetails.CardPresent;
      export type Cashapp = Stripe.Charge.PaymentMethodDetails.Cashapp;
      export type Crypto = Stripe.Charge.PaymentMethodDetails.Crypto;
      export type CustomerBalance = Stripe.Charge.PaymentMethodDetails.CustomerBalance;
      export type Eps = Stripe.Charge.PaymentMethodDetails.Eps;
      export type Fpx = Stripe.Charge.PaymentMethodDetails.Fpx;
      export type Giropay = Stripe.Charge.PaymentMethodDetails.Giropay;
      export type Grabpay = Stripe.Charge.PaymentMethodDetails.Grabpay;
      export type Ideal = Stripe.Charge.PaymentMethodDetails.Ideal;
      export type InteracPresent = Stripe.Charge.PaymentMethodDetails.InteracPresent;
      export type KakaoPay = Stripe.Charge.PaymentMethodDetails.KakaoPay;
      export type Klarna = Stripe.Charge.PaymentMethodDetails.Klarna;
      export type Konbini = Stripe.Charge.PaymentMethodDetails.Konbini;
      export type KrCard = Stripe.Charge.PaymentMethodDetails.KrCard;
      export type Link = Stripe.Charge.PaymentMethodDetails.Link;
      export type MbWay = Stripe.Charge.PaymentMethodDetails.MbWay;
      export type Mobilepay = Stripe.Charge.PaymentMethodDetails.Mobilepay;
      export type Multibanco = Stripe.Charge.PaymentMethodDetails.Multibanco;
      export type NaverPay = Stripe.Charge.PaymentMethodDetails.NaverPay;
      export type NzBankAccount = Stripe.Charge.PaymentMethodDetails.NzBankAccount;
      export type Oxxo = Stripe.Charge.PaymentMethodDetails.Oxxo;
      export type P24 = Stripe.Charge.PaymentMethodDetails.P24;
      export type PayByBank = Stripe.Charge.PaymentMethodDetails.PayByBank;
      export type Payco = Stripe.Charge.PaymentMethodDetails.Payco;
      export type Paynow = Stripe.Charge.PaymentMethodDetails.Paynow;
      export type Paypal = Stripe.Charge.PaymentMethodDetails.Paypal;
      export type Payto = Stripe.Charge.PaymentMethodDetails.Payto;
      export type Pix = Stripe.Charge.PaymentMethodDetails.Pix;
      export type Promptpay = Stripe.Charge.PaymentMethodDetails.Promptpay;
      export type RevolutPay = Stripe.Charge.PaymentMethodDetails.RevolutPay;
      export type SamsungPay = Stripe.Charge.PaymentMethodDetails.SamsungPay;
      export type Satispay = Stripe.Charge.PaymentMethodDetails.Satispay;
      export type Scalapay = Stripe.Charge.PaymentMethodDetails.Scalapay;
      export type SepaCreditTransfer = Stripe.Charge.PaymentMethodDetails.SepaCreditTransfer;
      export type SepaDebit = Stripe.Charge.PaymentMethodDetails.SepaDebit;
      export type Sofort = Stripe.Charge.PaymentMethodDetails.Sofort;
      export type StripeAccount = Stripe.Charge.PaymentMethodDetails.StripeAccount;
      export type Sunbit = Stripe.Charge.PaymentMethodDetails.Sunbit;
      export type Swish = Stripe.Charge.PaymentMethodDetails.Swish;
      export type Twint = Stripe.Charge.PaymentMethodDetails.Twint;
      export type Upi = Stripe.Charge.PaymentMethodDetails.Upi;
      export type UsBankAccount = Stripe.Charge.PaymentMethodDetails.UsBankAccount;
      export type Wechat = Stripe.Charge.PaymentMethodDetails.Wechat;
      export type WechatPay = Stripe.Charge.PaymentMethodDetails.WechatPay;
      export type Zip = Stripe.Charge.PaymentMethodDetails.Zip;
      export namespace AchDebit {
        export type AccountHolderType = Stripe.Charge.PaymentMethodDetails.AchDebit.AccountHolderType;
      }
      export namespace Alma {
        export type Installments = Stripe.Charge.PaymentMethodDetails.Alma.Installments;
      }
      export namespace AmazonPay {
        export type Funding = Stripe.Charge.PaymentMethodDetails.AmazonPay.Funding;
        export namespace Funding {
          export type Card = Stripe.Charge.PaymentMethodDetails.AmazonPay.Funding.Card;
        }
      }
      export namespace Bancontact {
        export type PreferredLanguage = Stripe.Charge.PaymentMethodDetails.Bancontact.PreferredLanguage;
      }
      export namespace Card {
        export type Checks = Stripe.Charge.PaymentMethodDetails.Card.Checks;
        export type ExtendedAuthorization = Stripe.Charge.PaymentMethodDetails.Card.ExtendedAuthorization;
        export type IncrementalAuthorization = Stripe.Charge.PaymentMethodDetails.Card.IncrementalAuthorization;
        export type Installments = Stripe.Charge.PaymentMethodDetails.Card.Installments;
        export type Multicapture = Stripe.Charge.PaymentMethodDetails.Card.Multicapture;
        export type NetworkToken = Stripe.Charge.PaymentMethodDetails.Card.NetworkToken;
        export type Overcapture = Stripe.Charge.PaymentMethodDetails.Card.Overcapture;
        export type RegulatedStatus = Stripe.Charge.PaymentMethodDetails.Card.RegulatedStatus;
        export type ThreeDSecure = Stripe.Charge.PaymentMethodDetails.Card.ThreeDSecure;
        export type Wallet = Stripe.Charge.PaymentMethodDetails.Card.Wallet;
        export namespace ExtendedAuthorization {
          export type Status = Stripe.Charge.PaymentMethodDetails.Card.ExtendedAuthorization.Status;
        }
        export namespace IncrementalAuthorization {
          export type Status = Stripe.Charge.PaymentMethodDetails.Card.IncrementalAuthorization.Status;
        }
        export namespace Installments {
          export type Plan = Stripe.Charge.PaymentMethodDetails.Card.Installments.Plan;
          export namespace Plan {
            export type Type = Stripe.Charge.PaymentMethodDetails.Card.Installments.Plan.Type;
          }
        }
        export namespace Multicapture {
          export type Status = Stripe.Charge.PaymentMethodDetails.Card.Multicapture.Status;
        }
        export namespace Overcapture {
          export type Status = Stripe.Charge.PaymentMethodDetails.Card.Overcapture.Status;
        }
        export namespace ThreeDSecure {
          export type AuthenticationFlow = Stripe.Charge.PaymentMethodDetails.Card.ThreeDSecure.AuthenticationFlow;
          export type ElectronicCommerceIndicator = Stripe.Charge.PaymentMethodDetails.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type ExemptionIndicator = Stripe.Charge.PaymentMethodDetails.Card.ThreeDSecure.ExemptionIndicator;
          export type Result = Stripe.Charge.PaymentMethodDetails.Card.ThreeDSecure.Result;
          export type ResultReason = Stripe.Charge.PaymentMethodDetails.Card.ThreeDSecure.ResultReason;
          export type Version = Stripe.Charge.PaymentMethodDetails.Card.ThreeDSecure.Version;
        }
        export namespace Wallet {
          export type AmexExpressCheckout = Stripe.Charge.PaymentMethodDetails.Card.Wallet.AmexExpressCheckout;
          export type ApplePay = Stripe.Charge.PaymentMethodDetails.Card.Wallet.ApplePay;
          export type GooglePay = Stripe.Charge.PaymentMethodDetails.Card.Wallet.GooglePay;
          export type Link = Stripe.Charge.PaymentMethodDetails.Card.Wallet.Link;
          export type Masterpass = Stripe.Charge.PaymentMethodDetails.Card.Wallet.Masterpass;
          export type SamsungPay = Stripe.Charge.PaymentMethodDetails.Card.Wallet.SamsungPay;
          export type Type = Stripe.Charge.PaymentMethodDetails.Card.Wallet.Type;
          export type VisaCheckout = Stripe.Charge.PaymentMethodDetails.Card.Wallet.VisaCheckout;
        }
      }
      export namespace CardPresent {
        export type Offline = Stripe.Charge.PaymentMethodDetails.CardPresent.Offline;
        export type ReadMethod = Stripe.Charge.PaymentMethodDetails.CardPresent.ReadMethod;
        export type Receipt = Stripe.Charge.PaymentMethodDetails.CardPresent.Receipt;
        export type Wallet = Stripe.Charge.PaymentMethodDetails.CardPresent.Wallet;
        export namespace Receipt {
          export type AccountType = Stripe.Charge.PaymentMethodDetails.CardPresent.Receipt.AccountType;
        }
        export namespace Wallet {
          export type Type = Stripe.Charge.PaymentMethodDetails.CardPresent.Wallet.Type;
        }
      }
      export namespace Crypto {
        export type Network = Stripe.Charge.PaymentMethodDetails.Crypto.Network;
        export type TokenCurrency = Stripe.Charge.PaymentMethodDetails.Crypto.TokenCurrency;
      }
      export namespace Eps {
        export type Bank = Stripe.Charge.PaymentMethodDetails.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe.Charge.PaymentMethodDetails.Fpx.AccountHolderType;
        export type Bank = Stripe.Charge.PaymentMethodDetails.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe.Charge.PaymentMethodDetails.Ideal.Bank;
        export type Bic = Stripe.Charge.PaymentMethodDetails.Ideal.Bic;
      }
      export namespace InteracPresent {
        export type ReadMethod = Stripe.Charge.PaymentMethodDetails.InteracPresent.ReadMethod;
        export type Receipt = Stripe.Charge.PaymentMethodDetails.InteracPresent.Receipt;
        export namespace Receipt {
          export type AccountType = Stripe.Charge.PaymentMethodDetails.InteracPresent.Receipt.AccountType;
        }
      }
      export namespace Klarna {
        export type PayerDetails = Stripe.Charge.PaymentMethodDetails.Klarna.PayerDetails;
        export namespace PayerDetails {
          export type Address = Stripe.Charge.PaymentMethodDetails.Klarna.PayerDetails.Address;
        }
      }
      export namespace Konbini {
        export type Store = Stripe.Charge.PaymentMethodDetails.Konbini.Store;
        export namespace Store {
          export type Chain = Stripe.Charge.PaymentMethodDetails.Konbini.Store.Chain;
        }
      }
      export namespace KrCard {
        export type Brand = Stripe.Charge.PaymentMethodDetails.KrCard.Brand;
      }
      export namespace Mobilepay {
        export type Card = Stripe.Charge.PaymentMethodDetails.Mobilepay.Card;
      }
      export namespace P24 {
        export type Bank = Stripe.Charge.PaymentMethodDetails.P24.Bank;
      }
      export namespace Paypal {
        export type SellerProtection = Stripe.Charge.PaymentMethodDetails.Paypal.SellerProtection;
        export namespace SellerProtection {
          export type DisputeCategory = Stripe.Charge.PaymentMethodDetails.Paypal.SellerProtection.DisputeCategory;
          export type Status = Stripe.Charge.PaymentMethodDetails.Paypal.SellerProtection.Status;
        }
      }
      export namespace RevolutPay {
        export type Funding = Stripe.Charge.PaymentMethodDetails.RevolutPay.Funding;
        export namespace Funding {
          export type Card = Stripe.Charge.PaymentMethodDetails.RevolutPay.Funding.Card;
        }
      }
      export namespace Sofort {
        export type PreferredLanguage = Stripe.Charge.PaymentMethodDetails.Sofort.PreferredLanguage;
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe.Charge.PaymentMethodDetails.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe.Charge.PaymentMethodDetails.UsBankAccount.AccountType;
      }
    }
  }
  export namespace ConfirmationToken {
    export type MandateData = Stripe.ConfirmationToken.MandateData;
    export type PaymentMethodOptions = Stripe.ConfirmationToken.PaymentMethodOptions;
    export type PaymentMethodPreview = Stripe.ConfirmationToken.PaymentMethodPreview;
    export type SetupFutureUsage = Stripe.ConfirmationToken.SetupFutureUsage;
    export type Shipping = Stripe.ConfirmationToken.Shipping;
    export namespace MandateData {
      export type CustomerAcceptance = Stripe.ConfirmationToken.MandateData.CustomerAcceptance;
      export namespace CustomerAcceptance {
        export type Online = Stripe.ConfirmationToken.MandateData.CustomerAcceptance.Online;
      }
    }
    export namespace PaymentMethodOptions {
      export type Card = Stripe.ConfirmationToken.PaymentMethodOptions.Card;
      export namespace Card {
        export type Installments = Stripe.ConfirmationToken.PaymentMethodOptions.Card.Installments;
        export namespace Installments {
          export type Plan = Stripe.ConfirmationToken.PaymentMethodOptions.Card.Installments.Plan;
          export namespace Plan {
            export type Type = Stripe.ConfirmationToken.PaymentMethodOptions.Card.Installments.Plan.Type;
          }
        }
      }
    }
    export namespace PaymentMethodPreview {
      export type AcssDebit = Stripe.ConfirmationToken.PaymentMethodPreview.AcssDebit;
      export type Affirm = Stripe.ConfirmationToken.PaymentMethodPreview.Affirm;
      export type AfterpayClearpay = Stripe.ConfirmationToken.PaymentMethodPreview.AfterpayClearpay;
      export type Alipay = Stripe.ConfirmationToken.PaymentMethodPreview.Alipay;
      export type AllowRedisplay = Stripe.ConfirmationToken.PaymentMethodPreview.AllowRedisplay;
      export type Alma = Stripe.ConfirmationToken.PaymentMethodPreview.Alma;
      export type AmazonPay = Stripe.ConfirmationToken.PaymentMethodPreview.AmazonPay;
      export type AuBecsDebit = Stripe.ConfirmationToken.PaymentMethodPreview.AuBecsDebit;
      export type BacsDebit = Stripe.ConfirmationToken.PaymentMethodPreview.BacsDebit;
      export type Bancontact = Stripe.ConfirmationToken.PaymentMethodPreview.Bancontact;
      export type Billie = Stripe.ConfirmationToken.PaymentMethodPreview.Billie;
      export type BillingDetails = Stripe.ConfirmationToken.PaymentMethodPreview.BillingDetails;
      export type Bizum = Stripe.ConfirmationToken.PaymentMethodPreview.Bizum;
      export type Blik = Stripe.ConfirmationToken.PaymentMethodPreview.Blik;
      export type Boleto = Stripe.ConfirmationToken.PaymentMethodPreview.Boleto;
      export type Card = Stripe.ConfirmationToken.PaymentMethodPreview.Card;
      export type CardPresent = Stripe.ConfirmationToken.PaymentMethodPreview.CardPresent;
      export type Cashapp = Stripe.ConfirmationToken.PaymentMethodPreview.Cashapp;
      export type Crypto = Stripe.ConfirmationToken.PaymentMethodPreview.Crypto;
      export type CustomerBalance = Stripe.ConfirmationToken.PaymentMethodPreview.CustomerBalance;
      export type Eps = Stripe.ConfirmationToken.PaymentMethodPreview.Eps;
      export type Fpx = Stripe.ConfirmationToken.PaymentMethodPreview.Fpx;
      export type Giropay = Stripe.ConfirmationToken.PaymentMethodPreview.Giropay;
      export type Grabpay = Stripe.ConfirmationToken.PaymentMethodPreview.Grabpay;
      export type Ideal = Stripe.ConfirmationToken.PaymentMethodPreview.Ideal;
      export type InteracPresent = Stripe.ConfirmationToken.PaymentMethodPreview.InteracPresent;
      export type KakaoPay = Stripe.ConfirmationToken.PaymentMethodPreview.KakaoPay;
      export type Klarna = Stripe.ConfirmationToken.PaymentMethodPreview.Klarna;
      export type Konbini = Stripe.ConfirmationToken.PaymentMethodPreview.Konbini;
      export type KrCard = Stripe.ConfirmationToken.PaymentMethodPreview.KrCard;
      export type Link = Stripe.ConfirmationToken.PaymentMethodPreview.Link;
      export type MbWay = Stripe.ConfirmationToken.PaymentMethodPreview.MbWay;
      export type Mobilepay = Stripe.ConfirmationToken.PaymentMethodPreview.Mobilepay;
      export type Multibanco = Stripe.ConfirmationToken.PaymentMethodPreview.Multibanco;
      export type NaverPay = Stripe.ConfirmationToken.PaymentMethodPreview.NaverPay;
      export type NzBankAccount = Stripe.ConfirmationToken.PaymentMethodPreview.NzBankAccount;
      export type Oxxo = Stripe.ConfirmationToken.PaymentMethodPreview.Oxxo;
      export type P24 = Stripe.ConfirmationToken.PaymentMethodPreview.P24;
      export type PayByBank = Stripe.ConfirmationToken.PaymentMethodPreview.PayByBank;
      export type Payco = Stripe.ConfirmationToken.PaymentMethodPreview.Payco;
      export type Paynow = Stripe.ConfirmationToken.PaymentMethodPreview.Paynow;
      export type Paypal = Stripe.ConfirmationToken.PaymentMethodPreview.Paypal;
      export type Payto = Stripe.ConfirmationToken.PaymentMethodPreview.Payto;
      export type Pix = Stripe.ConfirmationToken.PaymentMethodPreview.Pix;
      export type Promptpay = Stripe.ConfirmationToken.PaymentMethodPreview.Promptpay;
      export type RevolutPay = Stripe.ConfirmationToken.PaymentMethodPreview.RevolutPay;
      export type SamsungPay = Stripe.ConfirmationToken.PaymentMethodPreview.SamsungPay;
      export type Satispay = Stripe.ConfirmationToken.PaymentMethodPreview.Satispay;
      export type Scalapay = Stripe.ConfirmationToken.PaymentMethodPreview.Scalapay;
      export type SepaDebit = Stripe.ConfirmationToken.PaymentMethodPreview.SepaDebit;
      export type Sofort = Stripe.ConfirmationToken.PaymentMethodPreview.Sofort;
      export type Sunbit = Stripe.ConfirmationToken.PaymentMethodPreview.Sunbit;
      export type Swish = Stripe.ConfirmationToken.PaymentMethodPreview.Swish;
      export type Twint = Stripe.ConfirmationToken.PaymentMethodPreview.Twint;
      export type Type = Stripe.ConfirmationToken.PaymentMethodPreview.Type;
      export type Upi = Stripe.ConfirmationToken.PaymentMethodPreview.Upi;
      export type UsBankAccount = Stripe.ConfirmationToken.PaymentMethodPreview.UsBankAccount;
      export type WechatPay = Stripe.ConfirmationToken.PaymentMethodPreview.WechatPay;
      export type Zip = Stripe.ConfirmationToken.PaymentMethodPreview.Zip;
      export namespace Card {
        export type Checks = Stripe.ConfirmationToken.PaymentMethodPreview.Card.Checks;
        export type GeneratedFrom = Stripe.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom;
        export type Networks = Stripe.ConfirmationToken.PaymentMethodPreview.Card.Networks;
        export type RegulatedStatus = Stripe.ConfirmationToken.PaymentMethodPreview.Card.RegulatedStatus;
        export type ThreeDSecureUsage = Stripe.ConfirmationToken.PaymentMethodPreview.Card.ThreeDSecureUsage;
        export type Wallet = Stripe.ConfirmationToken.PaymentMethodPreview.Card.Wallet;
        export namespace GeneratedFrom {
          export type PaymentMethodDetails = Stripe.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom.PaymentMethodDetails;
          export namespace PaymentMethodDetails {
            export type CardPresent = Stripe.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom.PaymentMethodDetails.CardPresent;
            export namespace CardPresent {
              export type Offline = Stripe.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Offline;
              export type ReadMethod = Stripe.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.ReadMethod;
              export type Receipt = Stripe.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Receipt;
              export type Wallet = Stripe.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Wallet;
              export namespace Receipt {
                export type AccountType = Stripe.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Receipt.AccountType;
              }
              export namespace Wallet {
                export type Type = Stripe.ConfirmationToken.PaymentMethodPreview.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Wallet.Type;
              }
            }
          }
        }
        export namespace Wallet {
          export type AmexExpressCheckout = Stripe.ConfirmationToken.PaymentMethodPreview.Card.Wallet.AmexExpressCheckout;
          export type ApplePay = Stripe.ConfirmationToken.PaymentMethodPreview.Card.Wallet.ApplePay;
          export type GooglePay = Stripe.ConfirmationToken.PaymentMethodPreview.Card.Wallet.GooglePay;
          export type Link = Stripe.ConfirmationToken.PaymentMethodPreview.Card.Wallet.Link;
          export type Masterpass = Stripe.ConfirmationToken.PaymentMethodPreview.Card.Wallet.Masterpass;
          export type SamsungPay = Stripe.ConfirmationToken.PaymentMethodPreview.Card.Wallet.SamsungPay;
          export type Type = Stripe.ConfirmationToken.PaymentMethodPreview.Card.Wallet.Type;
          export type VisaCheckout = Stripe.ConfirmationToken.PaymentMethodPreview.Card.Wallet.VisaCheckout;
        }
      }
      export namespace CardPresent {
        export type Networks = Stripe.ConfirmationToken.PaymentMethodPreview.CardPresent.Networks;
        export type Offline = Stripe.ConfirmationToken.PaymentMethodPreview.CardPresent.Offline;
        export type ReadMethod = Stripe.ConfirmationToken.PaymentMethodPreview.CardPresent.ReadMethod;
        export type Wallet = Stripe.ConfirmationToken.PaymentMethodPreview.CardPresent.Wallet;
        export namespace Wallet {
          export type Type = Stripe.ConfirmationToken.PaymentMethodPreview.CardPresent.Wallet.Type;
        }
      }
      export namespace Eps {
        export type Bank = Stripe.ConfirmationToken.PaymentMethodPreview.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe.ConfirmationToken.PaymentMethodPreview.Fpx.AccountHolderType;
        export type Bank = Stripe.ConfirmationToken.PaymentMethodPreview.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe.ConfirmationToken.PaymentMethodPreview.Ideal.Bank;
        export type Bic = Stripe.ConfirmationToken.PaymentMethodPreview.Ideal.Bic;
      }
      export namespace InteracPresent {
        export type Networks = Stripe.ConfirmationToken.PaymentMethodPreview.InteracPresent.Networks;
        export type ReadMethod = Stripe.ConfirmationToken.PaymentMethodPreview.InteracPresent.ReadMethod;
      }
      export namespace Klarna {
        export type Dob = Stripe.ConfirmationToken.PaymentMethodPreview.Klarna.Dob;
      }
      export namespace KrCard {
        export type Brand = Stripe.ConfirmationToken.PaymentMethodPreview.KrCard.Brand;
      }
      export namespace NaverPay {
        export type Funding = Stripe.ConfirmationToken.PaymentMethodPreview.NaverPay.Funding;
      }
      export namespace P24 {
        export type Bank = Stripe.ConfirmationToken.PaymentMethodPreview.P24.Bank;
      }
      export namespace SepaDebit {
        export type GeneratedFrom = Stripe.ConfirmationToken.PaymentMethodPreview.SepaDebit.GeneratedFrom;
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe.ConfirmationToken.PaymentMethodPreview.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe.ConfirmationToken.PaymentMethodPreview.UsBankAccount.AccountType;
        export type Networks = Stripe.ConfirmationToken.PaymentMethodPreview.UsBankAccount.Networks;
        export type StatusDetails = Stripe.ConfirmationToken.PaymentMethodPreview.UsBankAccount.StatusDetails;
        export namespace Networks {
          export type Supported = Stripe.ConfirmationToken.PaymentMethodPreview.UsBankAccount.Networks.Supported;
        }
        export namespace StatusDetails {
          export type Blocked = Stripe.ConfirmationToken.PaymentMethodPreview.UsBankAccount.StatusDetails.Blocked;
          export namespace Blocked {
            export type NetworkCode = Stripe.ConfirmationToken.PaymentMethodPreview.UsBankAccount.StatusDetails.Blocked.NetworkCode;
            export type Reason = Stripe.ConfirmationToken.PaymentMethodPreview.UsBankAccount.StatusDetails.Blocked.Reason;
          }
        }
      }
    }
  }
  export namespace CountrySpec {
    export type VerificationFields = Stripe.CountrySpec.VerificationFields;
    export namespace VerificationFields {
      export type Company = Stripe.CountrySpec.VerificationFields.Company;
      export type Individual = Stripe.CountrySpec.VerificationFields.Individual;
    }
  }
  export namespace CouponCreateParams {
    export type AppliesTo = Stripe.CouponCreateParams.AppliesTo;
    export type CurrencyOptions = Stripe.CouponCreateParams.CurrencyOptions;
    export type Duration = Stripe.CouponCreateParams.Duration;
  }
  export namespace CouponUpdateParams {
    export type CurrencyOptions = Stripe.CouponUpdateParams.CurrencyOptions;
  }
  export namespace Coupon {
    export type AppliesTo = Stripe.Coupon.AppliesTo;
    export type CurrencyOptions = Stripe.Coupon.CurrencyOptions;
    export type Duration = Stripe.Coupon.Duration;
  }
  export namespace CreditNoteCreateParams {
    export type EmailType = Stripe.CreditNoteCreateParams.EmailType;
    export type Line = Stripe.CreditNoteCreateParams.Line;
    export type Reason = Stripe.CreditNoteCreateParams.Reason;
    export type Refund = Stripe.CreditNoteCreateParams.Refund;
    export type ShippingCost = Stripe.CreditNoteCreateParams.ShippingCost;
    export namespace Line {
      export type TaxAmount = Stripe.CreditNoteCreateParams.Line.TaxAmount;
      export type Type = Stripe.CreditNoteCreateParams.Line.Type;
    }
    export namespace Refund {
      export type PaymentRecordRefund = Stripe.CreditNoteCreateParams.Refund.PaymentRecordRefund;
      export type Type = Stripe.CreditNoteCreateParams.Refund.Type;
    }
  }
  export namespace CreditNoteListPreviewLineItemsParams {
    export type EmailType = Stripe.CreditNoteListPreviewLineItemsParams.EmailType;
    export type Line = Stripe.CreditNoteListPreviewLineItemsParams.Line;
    export type Reason = Stripe.CreditNoteListPreviewLineItemsParams.Reason;
    export type Refund = Stripe.CreditNoteListPreviewLineItemsParams.Refund;
    export type ShippingCost = Stripe.CreditNoteListPreviewLineItemsParams.ShippingCost;
    export namespace Line {
      export type TaxAmount = Stripe.CreditNoteListPreviewLineItemsParams.Line.TaxAmount;
      export type Type = Stripe.CreditNoteListPreviewLineItemsParams.Line.Type;
    }
    export namespace Refund {
      export type PaymentRecordRefund = Stripe.CreditNoteListPreviewLineItemsParams.Refund.PaymentRecordRefund;
      export type Type = Stripe.CreditNoteListPreviewLineItemsParams.Refund.Type;
    }
  }
  export namespace CreditNotePreviewParams {
    export type EmailType = Stripe.CreditNotePreviewParams.EmailType;
    export type Line = Stripe.CreditNotePreviewParams.Line;
    export type Reason = Stripe.CreditNotePreviewParams.Reason;
    export type Refund = Stripe.CreditNotePreviewParams.Refund;
    export type ShippingCost = Stripe.CreditNotePreviewParams.ShippingCost;
    export namespace Line {
      export type TaxAmount = Stripe.CreditNotePreviewParams.Line.TaxAmount;
      export type Type = Stripe.CreditNotePreviewParams.Line.Type;
    }
    export namespace Refund {
      export type PaymentRecordRefund = Stripe.CreditNotePreviewParams.Refund.PaymentRecordRefund;
      export type Type = Stripe.CreditNotePreviewParams.Refund.Type;
    }
  }
  export namespace CreditNote {
    export type DiscountAmount = Stripe.CreditNote.DiscountAmount;
    export type PretaxCreditAmount = Stripe.CreditNote.PretaxCreditAmount;
    export type Reason = Stripe.CreditNote.Reason;
    export type Refund = Stripe.CreditNote.Refund;
    export type ShippingCost = Stripe.CreditNote.ShippingCost;
    export type Status = Stripe.CreditNote.Status;
    export type TotalTax = Stripe.CreditNote.TotalTax;
    export type Type = Stripe.CreditNote.Type;
    export namespace PretaxCreditAmount {
      export type Type = Stripe.CreditNote.PretaxCreditAmount.Type;
    }
    export namespace Refund {
      export type PaymentRecordRefund = Stripe.CreditNote.Refund.PaymentRecordRefund;
      export type Type = Stripe.CreditNote.Refund.Type;
    }
    export namespace ShippingCost {
      export type Tax = Stripe.CreditNote.ShippingCost.Tax;
      export namespace Tax {
        export type TaxabilityReason = Stripe.CreditNote.ShippingCost.Tax.TaxabilityReason;
      }
    }
    export namespace TotalTax {
      export type TaxBehavior = Stripe.CreditNote.TotalTax.TaxBehavior;
      export type TaxRateDetails = Stripe.CreditNote.TotalTax.TaxRateDetails;
      export type TaxabilityReason = Stripe.CreditNote.TotalTax.TaxabilityReason;
    }
  }
  export namespace CustomerCreateParams {
    export type CashBalance = Stripe.CustomerCreateParams.CashBalance;
    export type InvoiceSettings = Stripe.CustomerCreateParams.InvoiceSettings;
    export type Shipping = Stripe.CustomerCreateParams.Shipping;
    export type Tax = Stripe.CustomerCreateParams.Tax;
    export type TaxExempt = Stripe.CustomerCreateParams.TaxExempt;
    export type TaxIdDatum = Stripe.CustomerCreateParams.TaxIdDatum;
    export namespace CashBalance {
      export type Settings = Stripe.CustomerCreateParams.CashBalance.Settings;
      export namespace Settings {
        export type ReconciliationMode = Stripe.CustomerCreateParams.CashBalance.Settings.ReconciliationMode;
      }
    }
    export namespace InvoiceSettings {
      export type CustomField = Stripe.CustomerCreateParams.InvoiceSettings.CustomField;
      export type RenderingOptions = Stripe.CustomerCreateParams.InvoiceSettings.RenderingOptions;
      export namespace RenderingOptions {
        export type AmountTaxDisplay = Stripe.CustomerCreateParams.InvoiceSettings.RenderingOptions.AmountTaxDisplay;
      }
    }
    export namespace Tax {
      export type ValidateLocation = Stripe.CustomerCreateParams.Tax.ValidateLocation;
    }
    export namespace TaxIdDatum {
      export type Type = Stripe.CustomerCreateParams.TaxIdDatum.Type;
    }
  }
  export namespace CustomerUpdateParams {
    export type CashBalance = Stripe.CustomerUpdateParams.CashBalance;
    export type InvoiceSettings = Stripe.CustomerUpdateParams.InvoiceSettings;
    export type Shipping = Stripe.CustomerUpdateParams.Shipping;
    export type Tax = Stripe.CustomerUpdateParams.Tax;
    export type TaxExempt = Stripe.CustomerUpdateParams.TaxExempt;
    export namespace CashBalance {
      export type Settings = Stripe.CustomerUpdateParams.CashBalance.Settings;
      export namespace Settings {
        export type ReconciliationMode = Stripe.CustomerUpdateParams.CashBalance.Settings.ReconciliationMode;
      }
    }
    export namespace InvoiceSettings {
      export type CustomField = Stripe.CustomerUpdateParams.InvoiceSettings.CustomField;
      export type RenderingOptions = Stripe.CustomerUpdateParams.InvoiceSettings.RenderingOptions;
      export namespace RenderingOptions {
        export type AmountTaxDisplay = Stripe.CustomerUpdateParams.InvoiceSettings.RenderingOptions.AmountTaxDisplay;
      }
    }
    export namespace Tax {
      export type ValidateLocation = Stripe.CustomerUpdateParams.Tax.ValidateLocation;
    }
  }
  export namespace CustomerCreateFundingInstructionsParams {
    export type BankTransfer = Stripe.CustomerCreateFundingInstructionsParams.BankTransfer;
    export namespace BankTransfer {
      export type EuBankTransfer = Stripe.CustomerCreateFundingInstructionsParams.BankTransfer.EuBankTransfer;
      export type RequestedAddressType = Stripe.CustomerCreateFundingInstructionsParams.BankTransfer.RequestedAddressType;
      export type Type = Stripe.CustomerCreateFundingInstructionsParams.BankTransfer.Type;
    }
  }
  export namespace CustomerCreateTaxIdParams {
    export type Type = Stripe.CustomerCreateTaxIdParams.Type;
  }
  export namespace CustomerListPaymentMethodsParams {
    export type AllowRedisplay = Stripe.CustomerListPaymentMethodsParams.AllowRedisplay;
    export type Type = Stripe.CustomerListPaymentMethodsParams.Type;
  }
  export namespace CustomerUpdateCashBalanceParams {
    export type Settings = Stripe.CustomerUpdateCashBalanceParams.Settings;
    export namespace Settings {
      export type ReconciliationMode = Stripe.CustomerUpdateCashBalanceParams.Settings.ReconciliationMode;
    }
  }
  export namespace CustomerUpdateSourceParams {
    export type AccountHolderType = Stripe.CustomerUpdateSourceParams.AccountHolderType;
    export type Owner = Stripe.CustomerUpdateSourceParams.Owner;
  }
  export namespace Customer {
    export type InvoiceSettings = Stripe.Customer.InvoiceSettings;
    export type Shipping = Stripe.Customer.Shipping;
    export type Tax = Stripe.Customer.Tax;
    export type TaxExempt = Stripe.Customer.TaxExempt;
    export namespace InvoiceSettings {
      export type CustomField = Stripe.Customer.InvoiceSettings.CustomField;
      export type RenderingOptions = Stripe.Customer.InvoiceSettings.RenderingOptions;
    }
    export namespace Tax {
      export type AutomaticTax = Stripe.Customer.Tax.AutomaticTax;
      export type Location = Stripe.Customer.Tax.Location;
      export type Provider = Stripe.Customer.Tax.Provider;
      export namespace Location {
        export type Source = Stripe.Customer.Tax.Location.Source;
      }
    }
  }
  export namespace CustomerSessionCreateParams {
    export type Components = Stripe.CustomerSessionCreateParams.Components;
    export namespace Components {
      export type BuyButton = Stripe.CustomerSessionCreateParams.Components.BuyButton;
      export type CustomerSheet = Stripe.CustomerSessionCreateParams.Components.CustomerSheet;
      export type MobilePaymentElement = Stripe.CustomerSessionCreateParams.Components.MobilePaymentElement;
      export type PaymentElement = Stripe.CustomerSessionCreateParams.Components.PaymentElement;
      export type PricingTable = Stripe.CustomerSessionCreateParams.Components.PricingTable;
      export namespace CustomerSheet {
        export type Features = Stripe.CustomerSessionCreateParams.Components.CustomerSheet.Features;
        export namespace Features {
          export type PaymentMethodAllowRedisplayFilter = Stripe.CustomerSessionCreateParams.Components.CustomerSheet.Features.PaymentMethodAllowRedisplayFilter;
          export type PaymentMethodRemove = Stripe.CustomerSessionCreateParams.Components.CustomerSheet.Features.PaymentMethodRemove;
        }
      }
      export namespace MobilePaymentElement {
        export type Features = Stripe.CustomerSessionCreateParams.Components.MobilePaymentElement.Features;
        export namespace Features {
          export type PaymentMethodAllowRedisplayFilter = Stripe.CustomerSessionCreateParams.Components.MobilePaymentElement.Features.PaymentMethodAllowRedisplayFilter;
          export type PaymentMethodRedisplay = Stripe.CustomerSessionCreateParams.Components.MobilePaymentElement.Features.PaymentMethodRedisplay;
          export type PaymentMethodRemove = Stripe.CustomerSessionCreateParams.Components.MobilePaymentElement.Features.PaymentMethodRemove;
          export type PaymentMethodSave = Stripe.CustomerSessionCreateParams.Components.MobilePaymentElement.Features.PaymentMethodSave;
          export type PaymentMethodSaveAllowRedisplayOverride = Stripe.CustomerSessionCreateParams.Components.MobilePaymentElement.Features.PaymentMethodSaveAllowRedisplayOverride;
        }
      }
      export namespace PaymentElement {
        export type Features = Stripe.CustomerSessionCreateParams.Components.PaymentElement.Features;
        export namespace Features {
          export type PaymentMethodAllowRedisplayFilter = Stripe.CustomerSessionCreateParams.Components.PaymentElement.Features.PaymentMethodAllowRedisplayFilter;
          export type PaymentMethodRedisplay = Stripe.CustomerSessionCreateParams.Components.PaymentElement.Features.PaymentMethodRedisplay;
          export type PaymentMethodRemove = Stripe.CustomerSessionCreateParams.Components.PaymentElement.Features.PaymentMethodRemove;
          export type PaymentMethodSave = Stripe.CustomerSessionCreateParams.Components.PaymentElement.Features.PaymentMethodSave;
          export type PaymentMethodSaveUsage = Stripe.CustomerSessionCreateParams.Components.PaymentElement.Features.PaymentMethodSaveUsage;
        }
      }
    }
  }
  export namespace CustomerSession {
    export type Components = Stripe.CustomerSession.Components;
    export namespace Components {
      export type BuyButton = Stripe.CustomerSession.Components.BuyButton;
      export type CustomerSheet = Stripe.CustomerSession.Components.CustomerSheet;
      export type MobilePaymentElement = Stripe.CustomerSession.Components.MobilePaymentElement;
      export type PaymentElement = Stripe.CustomerSession.Components.PaymentElement;
      export type PricingTable = Stripe.CustomerSession.Components.PricingTable;
      export namespace CustomerSheet {
        export type Features = Stripe.CustomerSession.Components.CustomerSheet.Features;
        export namespace Features {
          export type PaymentMethodAllowRedisplayFilter = Stripe.CustomerSession.Components.CustomerSheet.Features.PaymentMethodAllowRedisplayFilter;
          export type PaymentMethodRemove = Stripe.CustomerSession.Components.CustomerSheet.Features.PaymentMethodRemove;
        }
      }
      export namespace MobilePaymentElement {
        export type Features = Stripe.CustomerSession.Components.MobilePaymentElement.Features;
        export namespace Features {
          export type PaymentMethodAllowRedisplayFilter = Stripe.CustomerSession.Components.MobilePaymentElement.Features.PaymentMethodAllowRedisplayFilter;
          export type PaymentMethodRedisplay = Stripe.CustomerSession.Components.MobilePaymentElement.Features.PaymentMethodRedisplay;
          export type PaymentMethodRemove = Stripe.CustomerSession.Components.MobilePaymentElement.Features.PaymentMethodRemove;
          export type PaymentMethodSave = Stripe.CustomerSession.Components.MobilePaymentElement.Features.PaymentMethodSave;
          export type PaymentMethodSaveAllowRedisplayOverride = Stripe.CustomerSession.Components.MobilePaymentElement.Features.PaymentMethodSaveAllowRedisplayOverride;
        }
      }
      export namespace PaymentElement {
        export type Features = Stripe.CustomerSession.Components.PaymentElement.Features;
        export namespace Features {
          export type PaymentMethodAllowRedisplayFilter = Stripe.CustomerSession.Components.PaymentElement.Features.PaymentMethodAllowRedisplayFilter;
          export type PaymentMethodRedisplay = Stripe.CustomerSession.Components.PaymentElement.Features.PaymentMethodRedisplay;
          export type PaymentMethodRemove = Stripe.CustomerSession.Components.PaymentElement.Features.PaymentMethodRemove;
          export type PaymentMethodSave = Stripe.CustomerSession.Components.PaymentElement.Features.PaymentMethodSave;
          export type PaymentMethodSaveUsage = Stripe.CustomerSession.Components.PaymentElement.Features.PaymentMethodSaveUsage;
        }
      }
    }
  }
  export namespace DisputeUpdateParams {
    export type Evidence = Stripe.DisputeUpdateParams.Evidence;
    export namespace Evidence {
      export type EnhancedEvidence = Stripe.DisputeUpdateParams.Evidence.EnhancedEvidence;
      export namespace EnhancedEvidence {
        export type MastercardCompliance = Stripe.DisputeUpdateParams.Evidence.EnhancedEvidence.MastercardCompliance;
        export type VisaCompellingEvidence3 = Stripe.DisputeUpdateParams.Evidence.EnhancedEvidence.VisaCompellingEvidence3;
        export type VisaCompliance = Stripe.DisputeUpdateParams.Evidence.EnhancedEvidence.VisaCompliance;
        export namespace VisaCompellingEvidence3 {
          export type DisputedTransaction = Stripe.DisputeUpdateParams.Evidence.EnhancedEvidence.VisaCompellingEvidence3.DisputedTransaction;
          export type PriorUndisputedTransaction = Stripe.DisputeUpdateParams.Evidence.EnhancedEvidence.VisaCompellingEvidence3.PriorUndisputedTransaction;
          export namespace DisputedTransaction {
            export type MerchandiseOrServices = Stripe.DisputeUpdateParams.Evidence.EnhancedEvidence.VisaCompellingEvidence3.DisputedTransaction.MerchandiseOrServices;
          }
        }
      }
    }
  }
  export namespace Dispute {
    export type EnhancedEligibilityType = Stripe.Dispute.EnhancedEligibilityType;
    export type Evidence = Stripe.Dispute.Evidence;
    export type EvidenceDetails = Stripe.Dispute.EvidenceDetails;
    export type PaymentMethodDetails = Stripe.Dispute.PaymentMethodDetails;
    export type Status = Stripe.Dispute.Status;
    export namespace Evidence {
      export type EnhancedEvidence = Stripe.Dispute.Evidence.EnhancedEvidence;
      export namespace EnhancedEvidence {
        export type MastercardCompliance = Stripe.Dispute.Evidence.EnhancedEvidence.MastercardCompliance;
        export type VisaCompellingEvidence3 = Stripe.Dispute.Evidence.EnhancedEvidence.VisaCompellingEvidence3;
        export type VisaCompliance = Stripe.Dispute.Evidence.EnhancedEvidence.VisaCompliance;
        export namespace VisaCompellingEvidence3 {
          export type DisputedTransaction = Stripe.Dispute.Evidence.EnhancedEvidence.VisaCompellingEvidence3.DisputedTransaction;
          export type PriorUndisputedTransaction = Stripe.Dispute.Evidence.EnhancedEvidence.VisaCompellingEvidence3.PriorUndisputedTransaction;
          export namespace DisputedTransaction {
            export type MerchandiseOrServices = Stripe.Dispute.Evidence.EnhancedEvidence.VisaCompellingEvidence3.DisputedTransaction.MerchandiseOrServices;
          }
        }
      }
    }
    export namespace EvidenceDetails {
      export type EnhancedEligibility = Stripe.Dispute.EvidenceDetails.EnhancedEligibility;
      export namespace EnhancedEligibility {
        export type MastercardCompliance = Stripe.Dispute.EvidenceDetails.EnhancedEligibility.MastercardCompliance;
        export type VisaCompellingEvidence3 = Stripe.Dispute.EvidenceDetails.EnhancedEligibility.VisaCompellingEvidence3;
        export type VisaCompliance = Stripe.Dispute.EvidenceDetails.EnhancedEligibility.VisaCompliance;
        export namespace MastercardCompliance {
          export type Status = Stripe.Dispute.EvidenceDetails.EnhancedEligibility.MastercardCompliance.Status;
        }
        export namespace VisaCompellingEvidence3 {
          export type RequiredAction = Stripe.Dispute.EvidenceDetails.EnhancedEligibility.VisaCompellingEvidence3.RequiredAction;
          export type Status = Stripe.Dispute.EvidenceDetails.EnhancedEligibility.VisaCompellingEvidence3.Status;
        }
        export namespace VisaCompliance {
          export type Status = Stripe.Dispute.EvidenceDetails.EnhancedEligibility.VisaCompliance.Status;
        }
      }
    }
    export namespace PaymentMethodDetails {
      export type AmazonPay = Stripe.Dispute.PaymentMethodDetails.AmazonPay;
      export type Card = Stripe.Dispute.PaymentMethodDetails.Card;
      export type Klarna = Stripe.Dispute.PaymentMethodDetails.Klarna;
      export type Paypal = Stripe.Dispute.PaymentMethodDetails.Paypal;
      export type Type = Stripe.Dispute.PaymentMethodDetails.Type;
      export namespace AmazonPay {
        export type DisputeType = Stripe.Dispute.PaymentMethodDetails.AmazonPay.DisputeType;
      }
      export namespace Card {
        export type CaseType = Stripe.Dispute.PaymentMethodDetails.Card.CaseType;
      }
    }
  }
  export namespace Event {
    export type Data = Stripe.Event.Data;
    export type Request = Stripe.Event.Request;
    export type Type = Stripe.Event.Type;
    export namespace Data {
      export type Object = Stripe.Event.Data.Object;
      export type PreviousAttributes = Stripe.Event.Data.PreviousAttributes;
    }
  }
  export namespace FileCreateParams {
    export type Purpose = Stripe.FileCreateParams.Purpose;
    export type FileLinkData = Stripe.FileCreateParams.FileLinkData;
  }
  export namespace FileListParams {
    export type Purpose = Stripe.FileListParams.Purpose;
  }
  export namespace File {
    export type Purpose = Stripe.File.Purpose;
  }
  export namespace InvoiceCreateParams {
    export type AutomaticTax = Stripe.InvoiceCreateParams.AutomaticTax;
    export type CollectionMethod = Stripe.InvoiceCreateParams.CollectionMethod;
    export type CustomField = Stripe.InvoiceCreateParams.CustomField;
    export type Discount = Stripe.InvoiceCreateParams.Discount;
    export type FromInvoice = Stripe.InvoiceCreateParams.FromInvoice;
    export type Issuer = Stripe.InvoiceCreateParams.Issuer;
    export type PaymentSettings = Stripe.InvoiceCreateParams.PaymentSettings;
    export type PendingInvoiceItemsBehavior = Stripe.InvoiceCreateParams.PendingInvoiceItemsBehavior;
    export type Rendering = Stripe.InvoiceCreateParams.Rendering;
    export type ShippingCost = Stripe.InvoiceCreateParams.ShippingCost;
    export type ShippingDetails = Stripe.InvoiceCreateParams.ShippingDetails;
    export type TransferData = Stripe.InvoiceCreateParams.TransferData;
    export namespace AutomaticTax {
      export type Liability = Stripe.InvoiceCreateParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe.InvoiceCreateParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace Issuer {
      export type Type = Stripe.InvoiceCreateParams.Issuer.Type;
    }
    export namespace PaymentSettings {
      export type PaymentMethodOptions = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions;
      export type PaymentMethodType = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodType;
      export namespace PaymentMethodOptions {
        export type AcssDebit = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.AcssDebit;
        export type Bancontact = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Bancontact;
        export type Card = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Card;
        export type CustomerBalance = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance;
        export type Konbini = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Konbini;
        export type Payto = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Payto;
        export type Pix = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Pix;
        export type SepaDebit = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.SepaDebit;
        export type Upi = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Upi;
        export type UsBankAccount = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount;
        export namespace AcssDebit {
          export type MandateOptions = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions;
          export type VerificationMethod = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.VerificationMethod;
          export namespace MandateOptions {
            export type TransactionType = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
          }
        }
        export namespace Bancontact {
          export type PreferredLanguage = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Bancontact.PreferredLanguage;
        }
        export namespace Card {
          export type Installments = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Card.Installments;
          export type RequestThreeDSecure = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Card.RequestThreeDSecure;
          export namespace Installments {
            export type Plan = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Card.Installments.Plan;
            export namespace Plan {
              export type Type = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Card.Installments.Plan.Type;
            }
          }
        }
        export namespace CustomerBalance {
          export type BankTransfer = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer;
          export namespace BankTransfer {
            export type EuBankTransfer = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
          }
        }
        export namespace Payto {
          export type MandateOptions = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions;
          export namespace MandateOptions {
            export type Purpose = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions.Purpose;
          }
        }
        export namespace Pix {
          export type AmountIncludesIof = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Pix.AmountIncludesIof;
        }
        export namespace Upi {
          export type MandateOptions = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions;
          export namespace MandateOptions {
            export type AmountType = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions.AmountType;
          }
        }
        export namespace UsBankAccount {
          export type FinancialConnections = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections;
          export type VerificationMethod = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.VerificationMethod;
          export namespace FinancialConnections {
            export type Filters = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
            export type Permission = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
            export type Prefetch = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
            export namespace Filters {
              export type AccountSubcategory = Stripe.InvoiceCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
            }
          }
        }
      }
    }
    export namespace Rendering {
      export type AmountTaxDisplay = Stripe.InvoiceCreateParams.Rendering.AmountTaxDisplay;
      export type Pdf = Stripe.InvoiceCreateParams.Rendering.Pdf;
      export namespace Pdf {
        export type PageSize = Stripe.InvoiceCreateParams.Rendering.Pdf.PageSize;
      }
    }
    export namespace ShippingCost {
      export type ShippingRateData = Stripe.InvoiceCreateParams.ShippingCost.ShippingRateData;
      export namespace ShippingRateData {
        export type DeliveryEstimate = Stripe.InvoiceCreateParams.ShippingCost.ShippingRateData.DeliveryEstimate;
        export type FixedAmount = Stripe.InvoiceCreateParams.ShippingCost.ShippingRateData.FixedAmount;
        export type TaxBehavior = Stripe.InvoiceCreateParams.ShippingCost.ShippingRateData.TaxBehavior;
        export namespace DeliveryEstimate {
          export type Maximum = Stripe.InvoiceCreateParams.ShippingCost.ShippingRateData.DeliveryEstimate.Maximum;
          export type Minimum = Stripe.InvoiceCreateParams.ShippingCost.ShippingRateData.DeliveryEstimate.Minimum;
          export namespace Maximum {
            export type Unit = Stripe.InvoiceCreateParams.ShippingCost.ShippingRateData.DeliveryEstimate.Maximum.Unit;
          }
          export namespace Minimum {
            export type Unit = Stripe.InvoiceCreateParams.ShippingCost.ShippingRateData.DeliveryEstimate.Minimum.Unit;
          }
        }
        export namespace FixedAmount {
          export type CurrencyOptions = Stripe.InvoiceCreateParams.ShippingCost.ShippingRateData.FixedAmount.CurrencyOptions;
          export namespace CurrencyOptions {
            export type TaxBehavior = Stripe.InvoiceCreateParams.ShippingCost.ShippingRateData.FixedAmount.CurrencyOptions.TaxBehavior;
          }
        }
      }
    }
  }
  export namespace InvoiceUpdateParams {
    export type AutomaticTax = Stripe.InvoiceUpdateParams.AutomaticTax;
    export type CollectionMethod = Stripe.InvoiceUpdateParams.CollectionMethod;
    export type CustomField = Stripe.InvoiceUpdateParams.CustomField;
    export type Discount = Stripe.InvoiceUpdateParams.Discount;
    export type Issuer = Stripe.InvoiceUpdateParams.Issuer;
    export type PaymentSettings = Stripe.InvoiceUpdateParams.PaymentSettings;
    export type Rendering = Stripe.InvoiceUpdateParams.Rendering;
    export type ShippingCost = Stripe.InvoiceUpdateParams.ShippingCost;
    export type ShippingDetails = Stripe.InvoiceUpdateParams.ShippingDetails;
    export type TransferData = Stripe.InvoiceUpdateParams.TransferData;
    export namespace AutomaticTax {
      export type Liability = Stripe.InvoiceUpdateParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe.InvoiceUpdateParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace Issuer {
      export type Type = Stripe.InvoiceUpdateParams.Issuer.Type;
    }
    export namespace PaymentSettings {
      export type PaymentMethodOptions = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions;
      export type PaymentMethodType = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodType;
      export namespace PaymentMethodOptions {
        export type AcssDebit = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.AcssDebit;
        export type Bancontact = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Bancontact;
        export type Card = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Card;
        export type CustomerBalance = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance;
        export type Konbini = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Konbini;
        export type Payto = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Payto;
        export type Pix = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Pix;
        export type SepaDebit = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.SepaDebit;
        export type Upi = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Upi;
        export type UsBankAccount = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount;
        export namespace AcssDebit {
          export type MandateOptions = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions;
          export type VerificationMethod = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.VerificationMethod;
          export namespace MandateOptions {
            export type TransactionType = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
          }
        }
        export namespace Bancontact {
          export type PreferredLanguage = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Bancontact.PreferredLanguage;
        }
        export namespace Card {
          export type Installments = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Card.Installments;
          export type RequestThreeDSecure = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Card.RequestThreeDSecure;
          export namespace Installments {
            export type Plan = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Card.Installments.Plan;
            export namespace Plan {
              export type Type = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Card.Installments.Plan.Type;
            }
          }
        }
        export namespace CustomerBalance {
          export type BankTransfer = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer;
          export namespace BankTransfer {
            export type EuBankTransfer = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
          }
        }
        export namespace Payto {
          export type MandateOptions = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions;
          export namespace MandateOptions {
            export type Purpose = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions.Purpose;
          }
        }
        export namespace Pix {
          export type AmountIncludesIof = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Pix.AmountIncludesIof;
        }
        export namespace Upi {
          export type MandateOptions = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions;
          export namespace MandateOptions {
            export type AmountType = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions.AmountType;
          }
        }
        export namespace UsBankAccount {
          export type FinancialConnections = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections;
          export type VerificationMethod = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.VerificationMethod;
          export namespace FinancialConnections {
            export type Filters = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
            export type Permission = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
            export type Prefetch = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
            export namespace Filters {
              export type AccountSubcategory = Stripe.InvoiceUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
            }
          }
        }
      }
    }
    export namespace Rendering {
      export type AmountTaxDisplay = Stripe.InvoiceUpdateParams.Rendering.AmountTaxDisplay;
      export type Pdf = Stripe.InvoiceUpdateParams.Rendering.Pdf;
      export namespace Pdf {
        export type PageSize = Stripe.InvoiceUpdateParams.Rendering.Pdf.PageSize;
      }
    }
    export namespace ShippingCost {
      export type ShippingRateData = Stripe.InvoiceUpdateParams.ShippingCost.ShippingRateData;
      export namespace ShippingRateData {
        export type DeliveryEstimate = Stripe.InvoiceUpdateParams.ShippingCost.ShippingRateData.DeliveryEstimate;
        export type FixedAmount = Stripe.InvoiceUpdateParams.ShippingCost.ShippingRateData.FixedAmount;
        export type TaxBehavior = Stripe.InvoiceUpdateParams.ShippingCost.ShippingRateData.TaxBehavior;
        export namespace DeliveryEstimate {
          export type Maximum = Stripe.InvoiceUpdateParams.ShippingCost.ShippingRateData.DeliveryEstimate.Maximum;
          export type Minimum = Stripe.InvoiceUpdateParams.ShippingCost.ShippingRateData.DeliveryEstimate.Minimum;
          export namespace Maximum {
            export type Unit = Stripe.InvoiceUpdateParams.ShippingCost.ShippingRateData.DeliveryEstimate.Maximum.Unit;
          }
          export namespace Minimum {
            export type Unit = Stripe.InvoiceUpdateParams.ShippingCost.ShippingRateData.DeliveryEstimate.Minimum.Unit;
          }
        }
        export namespace FixedAmount {
          export type CurrencyOptions = Stripe.InvoiceUpdateParams.ShippingCost.ShippingRateData.FixedAmount.CurrencyOptions;
          export namespace CurrencyOptions {
            export type TaxBehavior = Stripe.InvoiceUpdateParams.ShippingCost.ShippingRateData.FixedAmount.CurrencyOptions.TaxBehavior;
          }
        }
      }
    }
  }
  export namespace InvoiceListParams {
    export type CollectionMethod = Stripe.InvoiceListParams.CollectionMethod;
    export type Status = Stripe.InvoiceListParams.Status;
  }
  export namespace InvoiceAddLinesParams {
    export type Line = Stripe.InvoiceAddLinesParams.Line;
    export namespace Line {
      export type Discount = Stripe.InvoiceAddLinesParams.Line.Discount;
      export type Period = Stripe.InvoiceAddLinesParams.Line.Period;
      export type PriceData = Stripe.InvoiceAddLinesParams.Line.PriceData;
      export type Pricing = Stripe.InvoiceAddLinesParams.Line.Pricing;
      export type TaxAmount = Stripe.InvoiceAddLinesParams.Line.TaxAmount;
      export namespace PriceData {
        export type ProductData = Stripe.InvoiceAddLinesParams.Line.PriceData.ProductData;
        export type TaxBehavior = Stripe.InvoiceAddLinesParams.Line.PriceData.TaxBehavior;
      }
      export namespace TaxAmount {
        export type TaxRateData = Stripe.InvoiceAddLinesParams.Line.TaxAmount.TaxRateData;
        export type TaxabilityReason = Stripe.InvoiceAddLinesParams.Line.TaxAmount.TaxabilityReason;
        export namespace TaxRateData {
          export type JurisdictionLevel = Stripe.InvoiceAddLinesParams.Line.TaxAmount.TaxRateData.JurisdictionLevel;
          export type TaxType = Stripe.InvoiceAddLinesParams.Line.TaxAmount.TaxRateData.TaxType;
        }
      }
    }
  }
  export namespace InvoiceCreatePreviewParams {
    export type AutomaticTax = Stripe.InvoiceCreatePreviewParams.AutomaticTax;
    export type CustomerDetails = Stripe.InvoiceCreatePreviewParams.CustomerDetails;
    export type Discount = Stripe.InvoiceCreatePreviewParams.Discount;
    export type InvoiceItem = Stripe.InvoiceCreatePreviewParams.InvoiceItem;
    export type Issuer = Stripe.InvoiceCreatePreviewParams.Issuer;
    export type PreviewMode = Stripe.InvoiceCreatePreviewParams.PreviewMode;
    export type ScheduleDetails = Stripe.InvoiceCreatePreviewParams.ScheduleDetails;
    export type SubscriptionDetails = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails;
    export namespace AutomaticTax {
      export type Liability = Stripe.InvoiceCreatePreviewParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe.InvoiceCreatePreviewParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace CustomerDetails {
      export type Shipping = Stripe.InvoiceCreatePreviewParams.CustomerDetails.Shipping;
      export type Tax = Stripe.InvoiceCreatePreviewParams.CustomerDetails.Tax;
      export type TaxExempt = Stripe.InvoiceCreatePreviewParams.CustomerDetails.TaxExempt;
      export type TaxId = Stripe.InvoiceCreatePreviewParams.CustomerDetails.TaxId;
      export namespace TaxId {
        export type Type = Stripe.InvoiceCreatePreviewParams.CustomerDetails.TaxId.Type;
      }
    }
    export namespace InvoiceItem {
      export type Discount = Stripe.InvoiceCreatePreviewParams.InvoiceItem.Discount;
      export type Period = Stripe.InvoiceCreatePreviewParams.InvoiceItem.Period;
      export type PriceData = Stripe.InvoiceCreatePreviewParams.InvoiceItem.PriceData;
      export type TaxBehavior = Stripe.InvoiceCreatePreviewParams.InvoiceItem.TaxBehavior;
      export namespace PriceData {
        export type TaxBehavior = Stripe.InvoiceCreatePreviewParams.InvoiceItem.PriceData.TaxBehavior;
      }
    }
    export namespace Issuer {
      export type Type = Stripe.InvoiceCreatePreviewParams.Issuer.Type;
    }
    export namespace ScheduleDetails {
      export type BillingMode = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.BillingMode;
      export type EndBehavior = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.EndBehavior;
      export type Phase = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase;
      export type ProrationBehavior = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.ProrationBehavior;
      export namespace BillingMode {
        export type Flexible = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.BillingMode.Flexible;
        export type Type = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.BillingMode.Type;
        export namespace Flexible {
          export type ProrationDiscounts = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.BillingMode.Flexible.ProrationDiscounts;
        }
      }
      export namespace Phase {
        export type AddInvoiceItem = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem;
        export type AutomaticTax = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AutomaticTax;
        export type BillingCycleAnchor = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.BillingCycleAnchor;
        export type BillingThresholds = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.BillingThresholds;
        export type CollectionMethod = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.CollectionMethod;
        export type Discount = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Discount;
        export type Duration = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Duration;
        export type InvoiceSettings = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.InvoiceSettings;
        export type Item = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Item;
        export type ProrationBehavior = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.ProrationBehavior;
        export type TransferData = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.TransferData;
        export namespace AddInvoiceItem {
          export type Discount = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem.Discount;
          export type Period = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem.Period;
          export type PriceData = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem.PriceData;
          export namespace Period {
            export type End = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem.Period.End;
            export type Start = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem.Period.Start;
            export namespace End {
              export type Type = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem.Period.End.Type;
            }
            export namespace Start {
              export type Type = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem.Period.Start.Type;
            }
          }
          export namespace PriceData {
            export type TaxBehavior = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AddInvoiceItem.PriceData.TaxBehavior;
          }
        }
        export namespace AutomaticTax {
          export type Liability = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AutomaticTax.Liability;
          export namespace Liability {
            export type Type = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.AutomaticTax.Liability.Type;
          }
        }
        export namespace Duration {
          export type Interval = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Duration.Interval;
        }
        export namespace InvoiceSettings {
          export type Issuer = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.InvoiceSettings.Issuer;
          export namespace Issuer {
            export type Type = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.InvoiceSettings.Issuer.Type;
          }
        }
        export namespace Item {
          export type BillingThresholds = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Item.BillingThresholds;
          export type Discount = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Item.Discount;
          export type PriceData = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Item.PriceData;
          export namespace PriceData {
            export type Recurring = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Item.PriceData.Recurring;
            export type TaxBehavior = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Item.PriceData.TaxBehavior;
            export namespace Recurring {
              export type Interval = Stripe.InvoiceCreatePreviewParams.ScheduleDetails.Phase.Item.PriceData.Recurring.Interval;
            }
          }
        }
      }
    }
    export namespace SubscriptionDetails {
      export type BillingCycleAnchor = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.BillingCycleAnchor;
      export type BillingMode = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.BillingMode;
      export type BillingSchedule = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.BillingSchedule;
      export type CancelAt = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.CancelAt;
      export type Item = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.Item;
      export type ProrationBehavior = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.ProrationBehavior;
      export namespace BillingMode {
        export type Flexible = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.BillingMode.Flexible;
        export type Type = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.BillingMode.Type;
        export namespace Flexible {
          export type ProrationDiscounts = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.BillingMode.Flexible.ProrationDiscounts;
        }
      }
      export namespace BillingSchedule {
        export type AppliesTo = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.BillingSchedule.AppliesTo;
        export type BillUntil = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.BillingSchedule.BillUntil;
        export namespace BillUntil {
          export type Duration = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.BillingSchedule.BillUntil.Duration;
          export type Type = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.BillingSchedule.BillUntil.Type;
          export namespace Duration {
            export type Interval = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.BillingSchedule.BillUntil.Duration.Interval;
          }
        }
      }
      export namespace Item {
        export type BillingThresholds = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.Item.BillingThresholds;
        export type Discount = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.Item.Discount;
        export type PriceData = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.Item.PriceData;
        export namespace PriceData {
          export type Recurring = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.Item.PriceData.Recurring;
          export type TaxBehavior = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.Item.PriceData.TaxBehavior;
          export namespace Recurring {
            export type Interval = Stripe.InvoiceCreatePreviewParams.SubscriptionDetails.Item.PriceData.Recurring.Interval;
          }
        }
      }
    }
  }
  export namespace InvoiceRemoveLinesParams {
    export type Line = Stripe.InvoiceRemoveLinesParams.Line;
    export namespace Line {
      export type Behavior = Stripe.InvoiceRemoveLinesParams.Line.Behavior;
    }
  }
  export namespace InvoiceUpdateLinesParams {
    export type Line = Stripe.InvoiceUpdateLinesParams.Line;
    export namespace Line {
      export type Discount = Stripe.InvoiceUpdateLinesParams.Line.Discount;
      export type Period = Stripe.InvoiceUpdateLinesParams.Line.Period;
      export type PriceData = Stripe.InvoiceUpdateLinesParams.Line.PriceData;
      export type Pricing = Stripe.InvoiceUpdateLinesParams.Line.Pricing;
      export type TaxAmount = Stripe.InvoiceUpdateLinesParams.Line.TaxAmount;
      export namespace PriceData {
        export type ProductData = Stripe.InvoiceUpdateLinesParams.Line.PriceData.ProductData;
        export type TaxBehavior = Stripe.InvoiceUpdateLinesParams.Line.PriceData.TaxBehavior;
      }
      export namespace TaxAmount {
        export type TaxRateData = Stripe.InvoiceUpdateLinesParams.Line.TaxAmount.TaxRateData;
        export type TaxabilityReason = Stripe.InvoiceUpdateLinesParams.Line.TaxAmount.TaxabilityReason;
        export namespace TaxRateData {
          export type JurisdictionLevel = Stripe.InvoiceUpdateLinesParams.Line.TaxAmount.TaxRateData.JurisdictionLevel;
          export type TaxType = Stripe.InvoiceUpdateLinesParams.Line.TaxAmount.TaxRateData.TaxType;
        }
      }
    }
  }
  export namespace InvoiceUpdateLineItemParams {
    export type Discount = Stripe.InvoiceUpdateLineItemParams.Discount;
    export type Period = Stripe.InvoiceUpdateLineItemParams.Period;
    export type PriceData = Stripe.InvoiceUpdateLineItemParams.PriceData;
    export type Pricing = Stripe.InvoiceUpdateLineItemParams.Pricing;
    export type TaxAmount = Stripe.InvoiceUpdateLineItemParams.TaxAmount;
    export namespace PriceData {
      export type ProductData = Stripe.InvoiceUpdateLineItemParams.PriceData.ProductData;
      export type TaxBehavior = Stripe.InvoiceUpdateLineItemParams.PriceData.TaxBehavior;
    }
    export namespace TaxAmount {
      export type TaxRateData = Stripe.InvoiceUpdateLineItemParams.TaxAmount.TaxRateData;
      export type TaxabilityReason = Stripe.InvoiceUpdateLineItemParams.TaxAmount.TaxabilityReason;
      export namespace TaxRateData {
        export type JurisdictionLevel = Stripe.InvoiceUpdateLineItemParams.TaxAmount.TaxRateData.JurisdictionLevel;
        export type TaxType = Stripe.InvoiceUpdateLineItemParams.TaxAmount.TaxRateData.TaxType;
      }
    }
  }
  export namespace Invoice {
    export type AutomaticTax = Stripe.Invoice.AutomaticTax;
    export type BillingReason = Stripe.Invoice.BillingReason;
    export type CollectionMethod = Stripe.Invoice.CollectionMethod;
    export type ConfirmationSecret = Stripe.Invoice.ConfirmationSecret;
    export type CustomField = Stripe.Invoice.CustomField;
    export type CustomerShipping = Stripe.Invoice.CustomerShipping;
    export type CustomerTaxExempt = Stripe.Invoice.CustomerTaxExempt;
    export type CustomerTaxId = Stripe.Invoice.CustomerTaxId;
    export type FromInvoice = Stripe.Invoice.FromInvoice;
    export type Issuer = Stripe.Invoice.Issuer;
    export type LastFinalizationError = Stripe.Invoice.LastFinalizationError;
    export type Parent = Stripe.Invoice.Parent;
    export type PaymentSettings = Stripe.Invoice.PaymentSettings;
    export type Rendering = Stripe.Invoice.Rendering;
    export type ShippingCost = Stripe.Invoice.ShippingCost;
    export type ShippingDetails = Stripe.Invoice.ShippingDetails;
    export type Status = Stripe.Invoice.Status;
    export type StatusTransitions = Stripe.Invoice.StatusTransitions;
    export type ThresholdReason = Stripe.Invoice.ThresholdReason;
    export type TotalDiscountAmount = Stripe.Invoice.TotalDiscountAmount;
    export type TotalPretaxCreditAmount = Stripe.Invoice.TotalPretaxCreditAmount;
    export type TotalTax = Stripe.Invoice.TotalTax;
    export namespace AutomaticTax {
      export type DisabledReason = Stripe.Invoice.AutomaticTax.DisabledReason;
      export type Liability = Stripe.Invoice.AutomaticTax.Liability;
      export type Status = Stripe.Invoice.AutomaticTax.Status;
      export namespace Liability {
        export type Type = Stripe.Invoice.AutomaticTax.Liability.Type;
      }
    }
    export namespace CustomerTaxId {
      export type Type = Stripe.Invoice.CustomerTaxId.Type;
    }
    export namespace Issuer {
      export type Type = Stripe.Invoice.Issuer.Type;
    }
    export namespace LastFinalizationError {
      export type Code = Stripe.Invoice.LastFinalizationError.Code;
      export type Type = Stripe.Invoice.LastFinalizationError.Type;
    }
    export namespace Parent {
      export type QuoteDetails = Stripe.Invoice.Parent.QuoteDetails;
      export type SubscriptionDetails = Stripe.Invoice.Parent.SubscriptionDetails;
      export type Type = Stripe.Invoice.Parent.Type;
    }
    export namespace PaymentSettings {
      export type PaymentMethodOptions = Stripe.Invoice.PaymentSettings.PaymentMethodOptions;
      export type PaymentMethodType = Stripe.Invoice.PaymentSettings.PaymentMethodType;
      export namespace PaymentMethodOptions {
        export type AcssDebit = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.AcssDebit;
        export type Bancontact = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.Bancontact;
        export type Card = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.Card;
        export type CustomerBalance = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.CustomerBalance;
        export type Konbini = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.Konbini;
        export type Payto = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.Payto;
        export type Pix = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.Pix;
        export type SepaDebit = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.SepaDebit;
        export type Upi = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.Upi;
        export type UsBankAccount = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.UsBankAccount;
        export namespace AcssDebit {
          export type MandateOptions = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions;
          export type VerificationMethod = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.AcssDebit.VerificationMethod;
          export namespace MandateOptions {
            export type TransactionType = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
          }
        }
        export namespace Bancontact {
          export type PreferredLanguage = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.Bancontact.PreferredLanguage;
        }
        export namespace Card {
          export type Installments = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.Card.Installments;
          export type RequestThreeDSecure = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.Card.RequestThreeDSecure;
        }
        export namespace CustomerBalance {
          export type BankTransfer = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer;
          export namespace BankTransfer {
            export type EuBankTransfer = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
            export namespace EuBankTransfer {
              export type Country = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer.Country;
            }
          }
        }
        export namespace Payto {
          export type MandateOptions = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions;
          export namespace MandateOptions {
            export type AmountType = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions.AmountType;
            export type Purpose = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions.Purpose;
          }
        }
        export namespace Pix {
          export type AmountIncludesIof = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.Pix.AmountIncludesIof;
        }
        export namespace Upi {
          export type MandateOptions = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions;
          export namespace MandateOptions {
            export type AmountType = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions.AmountType;
          }
        }
        export namespace UsBankAccount {
          export type FinancialConnections = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections;
          export type VerificationMethod = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.UsBankAccount.VerificationMethod;
          export namespace FinancialConnections {
            export type Filters = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
            export type Permission = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
            export type Prefetch = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
            export namespace Filters {
              export type AccountSubcategory = Stripe.Invoice.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
            }
          }
        }
      }
    }
    export namespace Rendering {
      export type Pdf = Stripe.Invoice.Rendering.Pdf;
      export namespace Pdf {
        export type PageSize = Stripe.Invoice.Rendering.Pdf.PageSize;
      }
    }
    export namespace ShippingCost {
      export type Tax = Stripe.Invoice.ShippingCost.Tax;
      export namespace Tax {
        export type TaxabilityReason = Stripe.Invoice.ShippingCost.Tax.TaxabilityReason;
      }
    }
    export namespace ThresholdReason {
      export type ItemReason = Stripe.Invoice.ThresholdReason.ItemReason;
    }
    export namespace TotalPretaxCreditAmount {
      export type Type = Stripe.Invoice.TotalPretaxCreditAmount.Type;
    }
    export namespace TotalTax {
      export type TaxBehavior = Stripe.Invoice.TotalTax.TaxBehavior;
      export type TaxRateDetails = Stripe.Invoice.TotalTax.TaxRateDetails;
      export type TaxabilityReason = Stripe.Invoice.TotalTax.TaxabilityReason;
    }
  }
  export namespace InvoiceItemCreateParams {
    export type Discount = Stripe.InvoiceItemCreateParams.Discount;
    export type Period = Stripe.InvoiceItemCreateParams.Period;
    export type PriceData = Stripe.InvoiceItemCreateParams.PriceData;
    export type Pricing = Stripe.InvoiceItemCreateParams.Pricing;
    export type TaxBehavior = Stripe.InvoiceItemCreateParams.TaxBehavior;
    export namespace PriceData {
      export type TaxBehavior = Stripe.InvoiceItemCreateParams.PriceData.TaxBehavior;
    }
  }
  export namespace InvoiceItemUpdateParams {
    export type Discount = Stripe.InvoiceItemUpdateParams.Discount;
    export type Period = Stripe.InvoiceItemUpdateParams.Period;
    export type PriceData = Stripe.InvoiceItemUpdateParams.PriceData;
    export type Pricing = Stripe.InvoiceItemUpdateParams.Pricing;
    export type TaxBehavior = Stripe.InvoiceItemUpdateParams.TaxBehavior;
    export namespace PriceData {
      export type TaxBehavior = Stripe.InvoiceItemUpdateParams.PriceData.TaxBehavior;
    }
  }
  export namespace InvoiceItem {
    export type Parent = Stripe.InvoiceItem.Parent;
    export type Period = Stripe.InvoiceItem.Period;
    export type Pricing = Stripe.InvoiceItem.Pricing;
    export type ProrationDetails = Stripe.InvoiceItem.ProrationDetails;
    export namespace Parent {
      export type SubscriptionDetails = Stripe.InvoiceItem.Parent.SubscriptionDetails;
    }
    export namespace Pricing {
      export type PriceDetails = Stripe.InvoiceItem.Pricing.PriceDetails;
    }
    export namespace ProrationDetails {
      export type CreditedItems = Stripe.InvoiceItem.ProrationDetails.CreditedItems;
      export type DiscountAmount = Stripe.InvoiceItem.ProrationDetails.DiscountAmount;
      export namespace CreditedItems {
        export type InvoiceLineItemDetails = Stripe.InvoiceItem.ProrationDetails.CreditedItems.InvoiceLineItemDetails;
        export type Type = Stripe.InvoiceItem.ProrationDetails.CreditedItems.Type;
      }
    }
  }
  export namespace InvoicePaymentListParams {
    export type Payment = Stripe.InvoicePaymentListParams.Payment;
    export type Status = Stripe.InvoicePaymentListParams.Status;
    export namespace Payment {
      export type Type = Stripe.InvoicePaymentListParams.Payment.Type;
    }
  }
  export namespace InvoicePayment {
    export type Payment = Stripe.InvoicePayment.Payment;
    export type StatusTransitions = Stripe.InvoicePayment.StatusTransitions;
    export namespace Payment {
      export type Type = Stripe.InvoicePayment.Payment.Type;
    }
  }
  export namespace InvoiceRenderingTemplateListParams {
    export type Status = Stripe.InvoiceRenderingTemplateListParams.Status;
  }
  export namespace InvoiceRenderingTemplate {
    export type Status = Stripe.InvoiceRenderingTemplate.Status;
  }
  export namespace Mandate {
    export type CustomerAcceptance = Stripe.Mandate.CustomerAcceptance;
    export type MultiUse = Stripe.Mandate.MultiUse;
    export type PaymentMethodDetails = Stripe.Mandate.PaymentMethodDetails;
    export type SingleUse = Stripe.Mandate.SingleUse;
    export type Status = Stripe.Mandate.Status;
    export type Type = Stripe.Mandate.Type;
    export namespace CustomerAcceptance {
      export type Offline = Stripe.Mandate.CustomerAcceptance.Offline;
      export type Online = Stripe.Mandate.CustomerAcceptance.Online;
      export type Type = Stripe.Mandate.CustomerAcceptance.Type;
    }
    export namespace PaymentMethodDetails {
      export type AcssDebit = Stripe.Mandate.PaymentMethodDetails.AcssDebit;
      export type AmazonPay = Stripe.Mandate.PaymentMethodDetails.AmazonPay;
      export type AuBecsDebit = Stripe.Mandate.PaymentMethodDetails.AuBecsDebit;
      export type BacsDebit = Stripe.Mandate.PaymentMethodDetails.BacsDebit;
      export type Card = Stripe.Mandate.PaymentMethodDetails.Card;
      export type Cashapp = Stripe.Mandate.PaymentMethodDetails.Cashapp;
      export type KakaoPay = Stripe.Mandate.PaymentMethodDetails.KakaoPay;
      export type Klarna = Stripe.Mandate.PaymentMethodDetails.Klarna;
      export type KrCard = Stripe.Mandate.PaymentMethodDetails.KrCard;
      export type Link = Stripe.Mandate.PaymentMethodDetails.Link;
      export type NaverPay = Stripe.Mandate.PaymentMethodDetails.NaverPay;
      export type NzBankAccount = Stripe.Mandate.PaymentMethodDetails.NzBankAccount;
      export type Paypal = Stripe.Mandate.PaymentMethodDetails.Paypal;
      export type Payto = Stripe.Mandate.PaymentMethodDetails.Payto;
      export type Pix = Stripe.Mandate.PaymentMethodDetails.Pix;
      export type RevolutPay = Stripe.Mandate.PaymentMethodDetails.RevolutPay;
      export type SepaDebit = Stripe.Mandate.PaymentMethodDetails.SepaDebit;
      export type Twint = Stripe.Mandate.PaymentMethodDetails.Twint;
      export type Upi = Stripe.Mandate.PaymentMethodDetails.Upi;
      export type UsBankAccount = Stripe.Mandate.PaymentMethodDetails.UsBankAccount;
      export namespace AcssDebit {
        export type DefaultFor = Stripe.Mandate.PaymentMethodDetails.AcssDebit.DefaultFor;
        export type PaymentSchedule = Stripe.Mandate.PaymentMethodDetails.AcssDebit.PaymentSchedule;
        export type TransactionType = Stripe.Mandate.PaymentMethodDetails.AcssDebit.TransactionType;
      }
      export namespace BacsDebit {
        export type NetworkStatus = Stripe.Mandate.PaymentMethodDetails.BacsDebit.NetworkStatus;
        export type RevocationReason = Stripe.Mandate.PaymentMethodDetails.BacsDebit.RevocationReason;
      }
      export namespace Payto {
        export type AmountType = Stripe.Mandate.PaymentMethodDetails.Payto.AmountType;
        export type PaymentSchedule = Stripe.Mandate.PaymentMethodDetails.Payto.PaymentSchedule;
        export type Purpose = Stripe.Mandate.PaymentMethodDetails.Payto.Purpose;
      }
      export namespace Pix {
        export type AmountIncludesIof = Stripe.Mandate.PaymentMethodDetails.Pix.AmountIncludesIof;
        export type AmountType = Stripe.Mandate.PaymentMethodDetails.Pix.AmountType;
        export type PaymentSchedule = Stripe.Mandate.PaymentMethodDetails.Pix.PaymentSchedule;
      }
      export namespace Upi {
        export type AmountType = Stripe.Mandate.PaymentMethodDetails.Upi.AmountType;
      }
    }
  }
  export namespace PaymentAttemptRecord {
    export type Amount = Stripe.PaymentAttemptRecord.Amount;
    export type AmountAuthorized = Stripe.PaymentAttemptRecord.AmountAuthorized;
    export type AmountCanceled = Stripe.PaymentAttemptRecord.AmountCanceled;
    export type AmountFailed = Stripe.PaymentAttemptRecord.AmountFailed;
    export type AmountGuaranteed = Stripe.PaymentAttemptRecord.AmountGuaranteed;
    export type AmountRefunded = Stripe.PaymentAttemptRecord.AmountRefunded;
    export type AmountRequested = Stripe.PaymentAttemptRecord.AmountRequested;
    export type CustomerDetails = Stripe.PaymentAttemptRecord.CustomerDetails;
    export type CustomerPresence = Stripe.PaymentAttemptRecord.CustomerPresence;
    export type PaymentMethodDetails = Stripe.PaymentAttemptRecord.PaymentMethodDetails;
    export type ProcessorDetails = Stripe.PaymentAttemptRecord.ProcessorDetails;
    export type ReportedBy = Stripe.PaymentAttemptRecord.ReportedBy;
    export type ShippingDetails = Stripe.PaymentAttemptRecord.ShippingDetails;
    export namespace PaymentMethodDetails {
      export type AchCreditTransfer = Stripe.PaymentAttemptRecord.PaymentMethodDetails.AchCreditTransfer;
      export type AchDebit = Stripe.PaymentAttemptRecord.PaymentMethodDetails.AchDebit;
      export type AcssDebit = Stripe.PaymentAttemptRecord.PaymentMethodDetails.AcssDebit;
      export type Affirm = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Affirm;
      export type AfterpayClearpay = Stripe.PaymentAttemptRecord.PaymentMethodDetails.AfterpayClearpay;
      export type Alipay = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Alipay;
      export type Alma = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Alma;
      export type AmazonPay = Stripe.PaymentAttemptRecord.PaymentMethodDetails.AmazonPay;
      export type AuBecsDebit = Stripe.PaymentAttemptRecord.PaymentMethodDetails.AuBecsDebit;
      export type BacsDebit = Stripe.PaymentAttemptRecord.PaymentMethodDetails.BacsDebit;
      export type Bancontact = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Bancontact;
      export type Billie = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Billie;
      export type BillingDetails = Stripe.PaymentAttemptRecord.PaymentMethodDetails.BillingDetails;
      export type Bizum = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Bizum;
      export type Blik = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Blik;
      export type Boleto = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Boleto;
      export type Card = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card;
      export type CardPresent = Stripe.PaymentAttemptRecord.PaymentMethodDetails.CardPresent;
      export type Cashapp = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Cashapp;
      export type Crypto = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Crypto;
      export type Custom = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Custom;
      export type CustomerBalance = Stripe.PaymentAttemptRecord.PaymentMethodDetails.CustomerBalance;
      export type Eps = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Eps;
      export type Fpx = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Fpx;
      export type Giropay = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Giropay;
      export type Grabpay = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Grabpay;
      export type Ideal = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Ideal;
      export type InteracPresent = Stripe.PaymentAttemptRecord.PaymentMethodDetails.InteracPresent;
      export type KakaoPay = Stripe.PaymentAttemptRecord.PaymentMethodDetails.KakaoPay;
      export type Klarna = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Klarna;
      export type Konbini = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Konbini;
      export type KrCard = Stripe.PaymentAttemptRecord.PaymentMethodDetails.KrCard;
      export type Link = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Link;
      export type MbWay = Stripe.PaymentAttemptRecord.PaymentMethodDetails.MbWay;
      export type Mobilepay = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Mobilepay;
      export type Multibanco = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Multibanco;
      export type NaverPay = Stripe.PaymentAttemptRecord.PaymentMethodDetails.NaverPay;
      export type NzBankAccount = Stripe.PaymentAttemptRecord.PaymentMethodDetails.NzBankAccount;
      export type Oxxo = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Oxxo;
      export type P24 = Stripe.PaymentAttemptRecord.PaymentMethodDetails.P24;
      export type PayByBank = Stripe.PaymentAttemptRecord.PaymentMethodDetails.PayByBank;
      export type Payco = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Payco;
      export type Paynow = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Paynow;
      export type Paypal = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Paypal;
      export type Payto = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Payto;
      export type Pix = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Pix;
      export type Promptpay = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Promptpay;
      export type RevolutPay = Stripe.PaymentAttemptRecord.PaymentMethodDetails.RevolutPay;
      export type SamsungPay = Stripe.PaymentAttemptRecord.PaymentMethodDetails.SamsungPay;
      export type Satispay = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Satispay;
      export type Scalapay = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Scalapay;
      export type SepaCreditTransfer = Stripe.PaymentAttemptRecord.PaymentMethodDetails.SepaCreditTransfer;
      export type SepaDebit = Stripe.PaymentAttemptRecord.PaymentMethodDetails.SepaDebit;
      export type Sofort = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Sofort;
      export type StripeAccount = Stripe.PaymentAttemptRecord.PaymentMethodDetails.StripeAccount;
      export type Sunbit = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Sunbit;
      export type Swish = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Swish;
      export type Twint = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Twint;
      export type Upi = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Upi;
      export type UsBankAccount = Stripe.PaymentAttemptRecord.PaymentMethodDetails.UsBankAccount;
      export type Wechat = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Wechat;
      export type WechatPay = Stripe.PaymentAttemptRecord.PaymentMethodDetails.WechatPay;
      export type Zip = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Zip;
      export namespace AchDebit {
        export type AccountHolderType = Stripe.PaymentAttemptRecord.PaymentMethodDetails.AchDebit.AccountHolderType;
      }
      export namespace Alma {
        export type Installments = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Alma.Installments;
      }
      export namespace AmazonPay {
        export type Funding = Stripe.PaymentAttemptRecord.PaymentMethodDetails.AmazonPay.Funding;
        export namespace Funding {
          export type Card = Stripe.PaymentAttemptRecord.PaymentMethodDetails.AmazonPay.Funding.Card;
        }
      }
      export namespace Bancontact {
        export type PreferredLanguage = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Bancontact.PreferredLanguage;
      }
      export namespace Card {
        export type Brand = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.Brand;
        export type Checks = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.Checks;
        export type Funding = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.Funding;
        export type Installments = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.Installments;
        export type Network = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.Network;
        export type NetworkToken = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.NetworkToken;
        export type ThreeDSecure = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.ThreeDSecure;
        export type Wallet = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.Wallet;
        export namespace Checks {
          export type AddressLine1Check = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.Checks.AddressLine1Check;
          export type AddressPostalCodeCheck = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.Checks.AddressPostalCodeCheck;
          export type CvcCheck = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.Checks.CvcCheck;
        }
        export namespace Installments {
          export type Plan = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.Installments.Plan;
          export namespace Plan {
            export type Type = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.Installments.Plan.Type;
          }
        }
        export namespace ThreeDSecure {
          export type AuthenticationFlow = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.ThreeDSecure.AuthenticationFlow;
          export type ElectronicCommerceIndicator = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type ExemptionIndicator = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.ThreeDSecure.ExemptionIndicator;
          export type Result = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.ThreeDSecure.Result;
          export type ResultReason = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.ThreeDSecure.ResultReason;
          export type Version = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.ThreeDSecure.Version;
        }
        export namespace Wallet {
          export type ApplePay = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.Wallet.ApplePay;
          export type GooglePay = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Card.Wallet.GooglePay;
        }
      }
      export namespace CardPresent {
        export type Offline = Stripe.PaymentAttemptRecord.PaymentMethodDetails.CardPresent.Offline;
        export type ReadMethod = Stripe.PaymentAttemptRecord.PaymentMethodDetails.CardPresent.ReadMethod;
        export type Receipt = Stripe.PaymentAttemptRecord.PaymentMethodDetails.CardPresent.Receipt;
        export type Wallet = Stripe.PaymentAttemptRecord.PaymentMethodDetails.CardPresent.Wallet;
        export namespace Receipt {
          export type AccountType = Stripe.PaymentAttemptRecord.PaymentMethodDetails.CardPresent.Receipt.AccountType;
        }
        export namespace Wallet {
          export type Type = Stripe.PaymentAttemptRecord.PaymentMethodDetails.CardPresent.Wallet.Type;
        }
      }
      export namespace Crypto {
        export type Network = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Crypto.Network;
        export type TokenCurrency = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Crypto.TokenCurrency;
      }
      export namespace Eps {
        export type Bank = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Fpx.AccountHolderType;
        export type Bank = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Ideal.Bank;
        export type Bic = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Ideal.Bic;
      }
      export namespace InteracPresent {
        export type ReadMethod = Stripe.PaymentAttemptRecord.PaymentMethodDetails.InteracPresent.ReadMethod;
        export type Receipt = Stripe.PaymentAttemptRecord.PaymentMethodDetails.InteracPresent.Receipt;
        export namespace Receipt {
          export type AccountType = Stripe.PaymentAttemptRecord.PaymentMethodDetails.InteracPresent.Receipt.AccountType;
        }
      }
      export namespace Klarna {
        export type PayerDetails = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Klarna.PayerDetails;
        export namespace PayerDetails {
          export type Address = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Klarna.PayerDetails.Address;
        }
      }
      export namespace Konbini {
        export type Store = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Konbini.Store;
        export namespace Store {
          export type Chain = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Konbini.Store.Chain;
        }
      }
      export namespace KrCard {
        export type Brand = Stripe.PaymentAttemptRecord.PaymentMethodDetails.KrCard.Brand;
      }
      export namespace Mobilepay {
        export type Card = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Mobilepay.Card;
      }
      export namespace P24 {
        export type Bank = Stripe.PaymentAttemptRecord.PaymentMethodDetails.P24.Bank;
      }
      export namespace Paypal {
        export type SellerProtection = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Paypal.SellerProtection;
        export namespace SellerProtection {
          export type DisputeCategory = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Paypal.SellerProtection.DisputeCategory;
          export type Status = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Paypal.SellerProtection.Status;
        }
      }
      export namespace RevolutPay {
        export type Funding = Stripe.PaymentAttemptRecord.PaymentMethodDetails.RevolutPay.Funding;
        export namespace Funding {
          export type Card = Stripe.PaymentAttemptRecord.PaymentMethodDetails.RevolutPay.Funding.Card;
        }
      }
      export namespace Sofort {
        export type PreferredLanguage = Stripe.PaymentAttemptRecord.PaymentMethodDetails.Sofort.PreferredLanguage;
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe.PaymentAttemptRecord.PaymentMethodDetails.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe.PaymentAttemptRecord.PaymentMethodDetails.UsBankAccount.AccountType;
      }
    }
    export namespace ProcessorDetails {
      export type Custom = Stripe.PaymentAttemptRecord.ProcessorDetails.Custom;
    }
  }
  export namespace PaymentIntentCreateParams {
    export type AmountDetails = Stripe.PaymentIntentCreateParams.AmountDetails;
    export type AutomaticPaymentMethods = Stripe.PaymentIntentCreateParams.AutomaticPaymentMethods;
    export type CaptureMethod = Stripe.PaymentIntentCreateParams.CaptureMethod;
    export type ConfirmationMethod = Stripe.PaymentIntentCreateParams.ConfirmationMethod;
    export type ExcludedPaymentMethodType = Stripe.PaymentIntentCreateParams.ExcludedPaymentMethodType;
    export type Hooks = Stripe.PaymentIntentCreateParams.Hooks;
    export type MandateData = Stripe.PaymentIntentCreateParams.MandateData;
    export type OffSession = Stripe.PaymentIntentCreateParams.OffSession;
    export type PaymentDetails = Stripe.PaymentIntentCreateParams.PaymentDetails;
    export type PaymentMethodData = Stripe.PaymentIntentCreateParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe.PaymentIntentCreateParams.PaymentMethodOptions;
    export type RadarOptions = Stripe.PaymentIntentCreateParams.RadarOptions;
    export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.SetupFutureUsage;
    export type Shipping = Stripe.PaymentIntentCreateParams.Shipping;
    export type TransferData = Stripe.PaymentIntentCreateParams.TransferData;
    export namespace AmountDetails {
      export type LineItem = Stripe.PaymentIntentCreateParams.AmountDetails.LineItem;
      export type Shipping = Stripe.PaymentIntentCreateParams.AmountDetails.Shipping;
      export type Tax = Stripe.PaymentIntentCreateParams.AmountDetails.Tax;
      export namespace LineItem {
        export type PaymentMethodOptions = Stripe.PaymentIntentCreateParams.AmountDetails.LineItem.PaymentMethodOptions;
        export type Tax = Stripe.PaymentIntentCreateParams.AmountDetails.LineItem.Tax;
        export namespace PaymentMethodOptions {
          export type Card = Stripe.PaymentIntentCreateParams.AmountDetails.LineItem.PaymentMethodOptions.Card;
          export type CardPresent = Stripe.PaymentIntentCreateParams.AmountDetails.LineItem.PaymentMethodOptions.CardPresent;
          export type Klarna = Stripe.PaymentIntentCreateParams.AmountDetails.LineItem.PaymentMethodOptions.Klarna;
          export type Paypal = Stripe.PaymentIntentCreateParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal;
          export namespace Paypal {
            export type Category = Stripe.PaymentIntentCreateParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal.Category;
          }
        }
      }
    }
    export namespace AutomaticPaymentMethods {
      export type AllowRedirects = Stripe.PaymentIntentCreateParams.AutomaticPaymentMethods.AllowRedirects;
    }
    export namespace Hooks {
      export type Inputs = Stripe.PaymentIntentCreateParams.Hooks.Inputs;
      export namespace Inputs {
        export type Tax = Stripe.PaymentIntentCreateParams.Hooks.Inputs.Tax;
      }
    }
    export namespace MandateData {
      export type CustomerAcceptance = Stripe.PaymentIntentCreateParams.MandateData.CustomerAcceptance;
      export namespace CustomerAcceptance {
        export type Offline = Stripe.PaymentIntentCreateParams.MandateData.CustomerAcceptance.Offline;
        export type Online = Stripe.PaymentIntentCreateParams.MandateData.CustomerAcceptance.Online;
        export type Type = Stripe.PaymentIntentCreateParams.MandateData.CustomerAcceptance.Type;
      }
    }
    export namespace PaymentMethodData {
      export type AcssDebit = Stripe.PaymentIntentCreateParams.PaymentMethodData.AcssDebit;
      export type Affirm = Stripe.PaymentIntentCreateParams.PaymentMethodData.Affirm;
      export type AfterpayClearpay = Stripe.PaymentIntentCreateParams.PaymentMethodData.AfterpayClearpay;
      export type Alipay = Stripe.PaymentIntentCreateParams.PaymentMethodData.Alipay;
      export type AllowRedisplay = Stripe.PaymentIntentCreateParams.PaymentMethodData.AllowRedisplay;
      export type Alma = Stripe.PaymentIntentCreateParams.PaymentMethodData.Alma;
      export type AmazonPay = Stripe.PaymentIntentCreateParams.PaymentMethodData.AmazonPay;
      export type AuBecsDebit = Stripe.PaymentIntentCreateParams.PaymentMethodData.AuBecsDebit;
      export type BacsDebit = Stripe.PaymentIntentCreateParams.PaymentMethodData.BacsDebit;
      export type Bancontact = Stripe.PaymentIntentCreateParams.PaymentMethodData.Bancontact;
      export type Billie = Stripe.PaymentIntentCreateParams.PaymentMethodData.Billie;
      export type BillingDetails = Stripe.PaymentIntentCreateParams.PaymentMethodData.BillingDetails;
      export type Bizum = Stripe.PaymentIntentCreateParams.PaymentMethodData.Bizum;
      export type Blik = Stripe.PaymentIntentCreateParams.PaymentMethodData.Blik;
      export type Boleto = Stripe.PaymentIntentCreateParams.PaymentMethodData.Boleto;
      export type Cashapp = Stripe.PaymentIntentCreateParams.PaymentMethodData.Cashapp;
      export type Crypto = Stripe.PaymentIntentCreateParams.PaymentMethodData.Crypto;
      export type CustomerBalance = Stripe.PaymentIntentCreateParams.PaymentMethodData.CustomerBalance;
      export type Eps = Stripe.PaymentIntentCreateParams.PaymentMethodData.Eps;
      export type Fpx = Stripe.PaymentIntentCreateParams.PaymentMethodData.Fpx;
      export type Giropay = Stripe.PaymentIntentCreateParams.PaymentMethodData.Giropay;
      export type Grabpay = Stripe.PaymentIntentCreateParams.PaymentMethodData.Grabpay;
      export type Ideal = Stripe.PaymentIntentCreateParams.PaymentMethodData.Ideal;
      export type InteracPresent = Stripe.PaymentIntentCreateParams.PaymentMethodData.InteracPresent;
      export type KakaoPay = Stripe.PaymentIntentCreateParams.PaymentMethodData.KakaoPay;
      export type Klarna = Stripe.PaymentIntentCreateParams.PaymentMethodData.Klarna;
      export type Konbini = Stripe.PaymentIntentCreateParams.PaymentMethodData.Konbini;
      export type KrCard = Stripe.PaymentIntentCreateParams.PaymentMethodData.KrCard;
      export type Link = Stripe.PaymentIntentCreateParams.PaymentMethodData.Link;
      export type MbWay = Stripe.PaymentIntentCreateParams.PaymentMethodData.MbWay;
      export type Mobilepay = Stripe.PaymentIntentCreateParams.PaymentMethodData.Mobilepay;
      export type Multibanco = Stripe.PaymentIntentCreateParams.PaymentMethodData.Multibanco;
      export type NaverPay = Stripe.PaymentIntentCreateParams.PaymentMethodData.NaverPay;
      export type NzBankAccount = Stripe.PaymentIntentCreateParams.PaymentMethodData.NzBankAccount;
      export type Oxxo = Stripe.PaymentIntentCreateParams.PaymentMethodData.Oxxo;
      export type P24 = Stripe.PaymentIntentCreateParams.PaymentMethodData.P24;
      export type PayByBank = Stripe.PaymentIntentCreateParams.PaymentMethodData.PayByBank;
      export type Payco = Stripe.PaymentIntentCreateParams.PaymentMethodData.Payco;
      export type Paynow = Stripe.PaymentIntentCreateParams.PaymentMethodData.Paynow;
      export type Paypal = Stripe.PaymentIntentCreateParams.PaymentMethodData.Paypal;
      export type Payto = Stripe.PaymentIntentCreateParams.PaymentMethodData.Payto;
      export type Pix = Stripe.PaymentIntentCreateParams.PaymentMethodData.Pix;
      export type Promptpay = Stripe.PaymentIntentCreateParams.PaymentMethodData.Promptpay;
      export type RadarOptions = Stripe.PaymentIntentCreateParams.PaymentMethodData.RadarOptions;
      export type RevolutPay = Stripe.PaymentIntentCreateParams.PaymentMethodData.RevolutPay;
      export type SamsungPay = Stripe.PaymentIntentCreateParams.PaymentMethodData.SamsungPay;
      export type Satispay = Stripe.PaymentIntentCreateParams.PaymentMethodData.Satispay;
      export type Scalapay = Stripe.PaymentIntentCreateParams.PaymentMethodData.Scalapay;
      export type SepaDebit = Stripe.PaymentIntentCreateParams.PaymentMethodData.SepaDebit;
      export type Sofort = Stripe.PaymentIntentCreateParams.PaymentMethodData.Sofort;
      export type Sunbit = Stripe.PaymentIntentCreateParams.PaymentMethodData.Sunbit;
      export type Swish = Stripe.PaymentIntentCreateParams.PaymentMethodData.Swish;
      export type Twint = Stripe.PaymentIntentCreateParams.PaymentMethodData.Twint;
      export type Type = Stripe.PaymentIntentCreateParams.PaymentMethodData.Type;
      export type Upi = Stripe.PaymentIntentCreateParams.PaymentMethodData.Upi;
      export type UsBankAccount = Stripe.PaymentIntentCreateParams.PaymentMethodData.UsBankAccount;
      export type WechatPay = Stripe.PaymentIntentCreateParams.PaymentMethodData.WechatPay;
      export type Zip = Stripe.PaymentIntentCreateParams.PaymentMethodData.Zip;
      export namespace Eps {
        export type Bank = Stripe.PaymentIntentCreateParams.PaymentMethodData.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe.PaymentIntentCreateParams.PaymentMethodData.Fpx.AccountHolderType;
        export type Bank = Stripe.PaymentIntentCreateParams.PaymentMethodData.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe.PaymentIntentCreateParams.PaymentMethodData.Ideal.Bank;
      }
      export namespace Klarna {
        export type Dob = Stripe.PaymentIntentCreateParams.PaymentMethodData.Klarna.Dob;
      }
      export namespace NaverPay {
        export type Funding = Stripe.PaymentIntentCreateParams.PaymentMethodData.NaverPay.Funding;
      }
      export namespace P24 {
        export type Bank = Stripe.PaymentIntentCreateParams.PaymentMethodData.P24.Bank;
      }
      export namespace Sofort {
        export type Country = Stripe.PaymentIntentCreateParams.PaymentMethodData.Sofort.Country;
      }
      export namespace Upi {
        export type MandateOptions = Stripe.PaymentIntentCreateParams.PaymentMethodData.Upi.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe.PaymentIntentCreateParams.PaymentMethodData.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe.PaymentIntentCreateParams.PaymentMethodData.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe.PaymentIntentCreateParams.PaymentMethodData.UsBankAccount.AccountType;
      }
    }
    export namespace PaymentMethodOptions {
      export type AcssDebit = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.AcssDebit;
      export type Affirm = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Affirm;
      export type AfterpayClearpay = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.AfterpayClearpay;
      export type Alipay = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Alipay;
      export type Alma = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Alma;
      export type AmazonPay = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.AmazonPay;
      export type AuBecsDebit = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.AuBecsDebit;
      export type BacsDebit = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.BacsDebit;
      export type Bancontact = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Bancontact;
      export type Billie = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Billie;
      export type Bizum = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Bizum;
      export type Blik = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Blik;
      export type Boleto = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Boleto;
      export type Card = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card;
      export type CardPresent = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.CardPresent;
      export type Cashapp = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Cashapp;
      export type Crypto = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Crypto;
      export type CustomerBalance = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.CustomerBalance;
      export type Eps = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Eps;
      export type Fpx = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Fpx;
      export type Giropay = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Giropay;
      export type Grabpay = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Grabpay;
      export type Ideal = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Ideal;
      export type InteracPresent = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.InteracPresent;
      export type KakaoPay = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.KakaoPay;
      export type Klarna = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Klarna;
      export type Konbini = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Konbini;
      export type KrCard = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.KrCard;
      export type Link = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Link;
      export type MbWay = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.MbWay;
      export type Mobilepay = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Mobilepay;
      export type Multibanco = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Multibanco;
      export type NaverPay = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.NaverPay;
      export type NzBankAccount = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.NzBankAccount;
      export type Oxxo = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Oxxo;
      export type P24 = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.P24;
      export type PayByBank = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.PayByBank;
      export type Payco = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Payco;
      export type Paynow = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Paynow;
      export type Paypal = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Paypal;
      export type Payto = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Payto;
      export type Pix = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Pix;
      export type Promptpay = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Promptpay;
      export type RevolutPay = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.RevolutPay;
      export type SamsungPay = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.SamsungPay;
      export type Satispay = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Satispay;
      export type Scalapay = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Scalapay;
      export type SepaDebit = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.SepaDebit;
      export type Sofort = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Sofort;
      export type Sunbit = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Sunbit;
      export type Swish = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Swish;
      export type Twint = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Twint;
      export type Upi = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Upi;
      export type UsBankAccount = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount;
      export type WechatPay = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.WechatPay;
      export type Zip = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Zip;
      export namespace AcssDebit {
        export type MandateOptions = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.AcssDebit.SetupFutureUsage;
        export type VerificationMethod = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.AcssDebit.VerificationMethod;
        export namespace MandateOptions {
          export type PaymentSchedule = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
          export type TransactionType = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
        }
      }
      export namespace Alipay {
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Alipay.SetupFutureUsage;
      }
      export namespace AmazonPay {
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.AmazonPay.SetupFutureUsage;
      }
      export namespace AuBecsDebit {
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.AuBecsDebit.SetupFutureUsage;
      }
      export namespace BacsDebit {
        export type MandateOptions = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.BacsDebit.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.BacsDebit.SetupFutureUsage;
      }
      export namespace Bancontact {
        export type PreferredLanguage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Bancontact.PreferredLanguage;
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Bancontact.SetupFutureUsage;
      }
      export namespace Boleto {
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Boleto.SetupFutureUsage;
      }
      export namespace Card {
        export type Installments = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.Installments;
        export type MandateOptions = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.MandateOptions;
        export type Network = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.Network;
        export type RequestExtendedAuthorization = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.RequestExtendedAuthorization;
        export type RequestIncrementalAuthorization = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.RequestIncrementalAuthorization;
        export type RequestMulticapture = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.RequestMulticapture;
        export type RequestOvercapture = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.RequestOvercapture;
        export type RequestThreeDSecure = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.RequestThreeDSecure;
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.SetupFutureUsage;
        export type ThreeDSecure = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure;
        export namespace Installments {
          export type Plan = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.Installments.Plan;
          export namespace Plan {
            export type Type = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.Installments.Plan.Type;
          }
        }
        export namespace MandateOptions {
          export type AmountType = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.MandateOptions.AmountType;
          export type Interval = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.MandateOptions.Interval;
        }
        export namespace ThreeDSecure {
          export type AresTransStatus = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.AresTransStatus;
          export type ElectronicCommerceIndicator = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type ExemptionIndicator = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.ExemptionIndicator;
          export type NetworkOptions = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions;
          export type Version = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.Version;
          export namespace NetworkOptions {
            export type CartesBancaires = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires;
            export namespace CartesBancaires {
              export type CbAvalgo = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires.CbAvalgo;
            }
          }
        }
      }
      export namespace CardPresent {
        export type CaptureMethod = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.CardPresent.CaptureMethod;
        export type Routing = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.CardPresent.Routing;
        export namespace Routing {
          export type RequestedPriority = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.CardPresent.Routing.RequestedPriority;
        }
      }
      export namespace Cashapp {
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Cashapp.SetupFutureUsage;
      }
      export namespace CustomerBalance {
        export type BankTransfer = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.CustomerBalance.BankTransfer;
        export namespace BankTransfer {
          export type EuBankTransfer = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
          export type RequestedAddressType = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.RequestedAddressType;
          export type Type = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.Type;
        }
      }
      export namespace Ideal {
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Ideal.SetupFutureUsage;
      }
      export namespace KakaoPay {
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.KakaoPay.SetupFutureUsage;
      }
      export namespace Klarna {
        export type OnDemand = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Klarna.OnDemand;
        export type PreferredLocale = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Klarna.PreferredLocale;
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Klarna.SetupFutureUsage;
        export type Subscription = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Klarna.Subscription;
        export namespace OnDemand {
          export type PurchaseInterval = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Klarna.OnDemand.PurchaseInterval;
        }
        export namespace Subscription {
          export type Interval = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Klarna.Subscription.Interval;
          export type NextBilling = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Klarna.Subscription.NextBilling;
        }
      }
      export namespace KrCard {
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.KrCard.SetupFutureUsage;
      }
      export namespace Link {
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Link.SetupFutureUsage;
      }
      export namespace NaverPay {
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.NaverPay.SetupFutureUsage;
      }
      export namespace NzBankAccount {
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.NzBankAccount.SetupFutureUsage;
      }
      export namespace Paypal {
        export type PreferredLocale = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Paypal.PreferredLocale;
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Paypal.SetupFutureUsage;
      }
      export namespace Payto {
        export type MandateOptions = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Payto.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Payto.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Payto.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
          export type Purpose = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Payto.MandateOptions.Purpose;
        }
      }
      export namespace Pix {
        export type AmountIncludesIof = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Pix.AmountIncludesIof;
        export type MandateOptions = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Pix.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Pix.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountIncludesIof = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
          export type AmountType = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Pix.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
        }
      }
      export namespace RevolutPay {
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.RevolutPay.SetupFutureUsage;
      }
      export namespace Satispay {
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Satispay.SetupFutureUsage;
      }
      export namespace SepaDebit {
        export type MandateOptions = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.SepaDebit.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.SepaDebit.SetupFutureUsage;
      }
      export namespace Sofort {
        export type PreferredLanguage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Sofort.PreferredLanguage;
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Sofort.SetupFutureUsage;
      }
      export namespace Twint {
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Twint.SetupFutureUsage;
      }
      export namespace Upi {
        export type MandateOptions = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Upi.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Upi.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type FinancialConnections = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections;
        export type MandateOptions = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.MandateOptions;
        export type Networks = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.Networks;
        export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.SetupFutureUsage;
        export type TransactionPurpose = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.TransactionPurpose;
        export type VerificationMethod = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.VerificationMethod;
        export namespace FinancialConnections {
          export type Filters = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
          export type Permission = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
          export type Prefetch = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          export namespace Filters {
            export type AccountSubcategory = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
          }
        }
        export namespace Networks {
          export type Requested = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.UsBankAccount.Networks.Requested;
        }
      }
      export namespace WechatPay {
        export type Client = Stripe.PaymentIntentCreateParams.PaymentMethodOptions.WechatPay.Client;
      }
    }
    export namespace TransferData {
      export type PaymentData = Stripe.PaymentIntentCreateParams.TransferData.PaymentData;
    }
  }
  export namespace PaymentIntentUpdateParams {
    export type AmountDetails = Stripe.PaymentIntentUpdateParams.AmountDetails;
    export type CaptureMethod = Stripe.PaymentIntentUpdateParams.CaptureMethod;
    export type ExcludedPaymentMethodType = Stripe.PaymentIntentUpdateParams.ExcludedPaymentMethodType;
    export type Hooks = Stripe.PaymentIntentUpdateParams.Hooks;
    export type PaymentDetails = Stripe.PaymentIntentUpdateParams.PaymentDetails;
    export type PaymentMethodData = Stripe.PaymentIntentUpdateParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions;
    export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.SetupFutureUsage;
    export type Shipping = Stripe.PaymentIntentUpdateParams.Shipping;
    export type TransferData = Stripe.PaymentIntentUpdateParams.TransferData;
    export namespace AmountDetails {
      export type LineItem = Stripe.PaymentIntentUpdateParams.AmountDetails.LineItem;
      export type Shipping = Stripe.PaymentIntentUpdateParams.AmountDetails.Shipping;
      export type Tax = Stripe.PaymentIntentUpdateParams.AmountDetails.Tax;
      export namespace LineItem {
        export type PaymentMethodOptions = Stripe.PaymentIntentUpdateParams.AmountDetails.LineItem.PaymentMethodOptions;
        export type Tax = Stripe.PaymentIntentUpdateParams.AmountDetails.LineItem.Tax;
        export namespace PaymentMethodOptions {
          export type Card = Stripe.PaymentIntentUpdateParams.AmountDetails.LineItem.PaymentMethodOptions.Card;
          export type CardPresent = Stripe.PaymentIntentUpdateParams.AmountDetails.LineItem.PaymentMethodOptions.CardPresent;
          export type Klarna = Stripe.PaymentIntentUpdateParams.AmountDetails.LineItem.PaymentMethodOptions.Klarna;
          export type Paypal = Stripe.PaymentIntentUpdateParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal;
          export namespace Paypal {
            export type Category = Stripe.PaymentIntentUpdateParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal.Category;
          }
        }
      }
    }
    export namespace Hooks {
      export type Inputs = Stripe.PaymentIntentUpdateParams.Hooks.Inputs;
      export namespace Inputs {
        export type Tax = Stripe.PaymentIntentUpdateParams.Hooks.Inputs.Tax;
      }
    }
    export namespace PaymentMethodData {
      export type AcssDebit = Stripe.PaymentIntentUpdateParams.PaymentMethodData.AcssDebit;
      export type Affirm = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Affirm;
      export type AfterpayClearpay = Stripe.PaymentIntentUpdateParams.PaymentMethodData.AfterpayClearpay;
      export type Alipay = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Alipay;
      export type AllowRedisplay = Stripe.PaymentIntentUpdateParams.PaymentMethodData.AllowRedisplay;
      export type Alma = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Alma;
      export type AmazonPay = Stripe.PaymentIntentUpdateParams.PaymentMethodData.AmazonPay;
      export type AuBecsDebit = Stripe.PaymentIntentUpdateParams.PaymentMethodData.AuBecsDebit;
      export type BacsDebit = Stripe.PaymentIntentUpdateParams.PaymentMethodData.BacsDebit;
      export type Bancontact = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Bancontact;
      export type Billie = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Billie;
      export type BillingDetails = Stripe.PaymentIntentUpdateParams.PaymentMethodData.BillingDetails;
      export type Bizum = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Bizum;
      export type Blik = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Blik;
      export type Boleto = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Boleto;
      export type Cashapp = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Cashapp;
      export type Crypto = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Crypto;
      export type CustomerBalance = Stripe.PaymentIntentUpdateParams.PaymentMethodData.CustomerBalance;
      export type Eps = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Eps;
      export type Fpx = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Fpx;
      export type Giropay = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Giropay;
      export type Grabpay = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Grabpay;
      export type Ideal = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Ideal;
      export type InteracPresent = Stripe.PaymentIntentUpdateParams.PaymentMethodData.InteracPresent;
      export type KakaoPay = Stripe.PaymentIntentUpdateParams.PaymentMethodData.KakaoPay;
      export type Klarna = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Klarna;
      export type Konbini = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Konbini;
      export type KrCard = Stripe.PaymentIntentUpdateParams.PaymentMethodData.KrCard;
      export type Link = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Link;
      export type MbWay = Stripe.PaymentIntentUpdateParams.PaymentMethodData.MbWay;
      export type Mobilepay = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Mobilepay;
      export type Multibanco = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Multibanco;
      export type NaverPay = Stripe.PaymentIntentUpdateParams.PaymentMethodData.NaverPay;
      export type NzBankAccount = Stripe.PaymentIntentUpdateParams.PaymentMethodData.NzBankAccount;
      export type Oxxo = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Oxxo;
      export type P24 = Stripe.PaymentIntentUpdateParams.PaymentMethodData.P24;
      export type PayByBank = Stripe.PaymentIntentUpdateParams.PaymentMethodData.PayByBank;
      export type Payco = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Payco;
      export type Paynow = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Paynow;
      export type Paypal = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Paypal;
      export type Payto = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Payto;
      export type Pix = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Pix;
      export type Promptpay = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Promptpay;
      export type RadarOptions = Stripe.PaymentIntentUpdateParams.PaymentMethodData.RadarOptions;
      export type RevolutPay = Stripe.PaymentIntentUpdateParams.PaymentMethodData.RevolutPay;
      export type SamsungPay = Stripe.PaymentIntentUpdateParams.PaymentMethodData.SamsungPay;
      export type Satispay = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Satispay;
      export type Scalapay = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Scalapay;
      export type SepaDebit = Stripe.PaymentIntentUpdateParams.PaymentMethodData.SepaDebit;
      export type Sofort = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Sofort;
      export type Sunbit = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Sunbit;
      export type Swish = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Swish;
      export type Twint = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Twint;
      export type Type = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Type;
      export type Upi = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Upi;
      export type UsBankAccount = Stripe.PaymentIntentUpdateParams.PaymentMethodData.UsBankAccount;
      export type WechatPay = Stripe.PaymentIntentUpdateParams.PaymentMethodData.WechatPay;
      export type Zip = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Zip;
      export namespace Eps {
        export type Bank = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Fpx.AccountHolderType;
        export type Bank = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Ideal.Bank;
      }
      export namespace Klarna {
        export type Dob = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Klarna.Dob;
      }
      export namespace NaverPay {
        export type Funding = Stripe.PaymentIntentUpdateParams.PaymentMethodData.NaverPay.Funding;
      }
      export namespace P24 {
        export type Bank = Stripe.PaymentIntentUpdateParams.PaymentMethodData.P24.Bank;
      }
      export namespace Sofort {
        export type Country = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Sofort.Country;
      }
      export namespace Upi {
        export type MandateOptions = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Upi.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe.PaymentIntentUpdateParams.PaymentMethodData.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe.PaymentIntentUpdateParams.PaymentMethodData.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe.PaymentIntentUpdateParams.PaymentMethodData.UsBankAccount.AccountType;
      }
    }
    export namespace PaymentMethodOptions {
      export type AcssDebit = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.AcssDebit;
      export type Affirm = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Affirm;
      export type AfterpayClearpay = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.AfterpayClearpay;
      export type Alipay = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Alipay;
      export type Alma = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Alma;
      export type AmazonPay = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.AmazonPay;
      export type AuBecsDebit = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.AuBecsDebit;
      export type BacsDebit = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.BacsDebit;
      export type Bancontact = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Bancontact;
      export type Billie = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Billie;
      export type Bizum = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Bizum;
      export type Blik = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Blik;
      export type Boleto = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Boleto;
      export type Card = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card;
      export type CardPresent = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.CardPresent;
      export type Cashapp = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Cashapp;
      export type Crypto = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Crypto;
      export type CustomerBalance = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.CustomerBalance;
      export type Eps = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Eps;
      export type Fpx = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Fpx;
      export type Giropay = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Giropay;
      export type Grabpay = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Grabpay;
      export type Ideal = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Ideal;
      export type InteracPresent = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.InteracPresent;
      export type KakaoPay = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.KakaoPay;
      export type Klarna = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Klarna;
      export type Konbini = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Konbini;
      export type KrCard = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.KrCard;
      export type Link = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Link;
      export type MbWay = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.MbWay;
      export type Mobilepay = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Mobilepay;
      export type Multibanco = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Multibanco;
      export type NaverPay = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.NaverPay;
      export type NzBankAccount = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.NzBankAccount;
      export type Oxxo = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Oxxo;
      export type P24 = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.P24;
      export type PayByBank = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.PayByBank;
      export type Payco = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Payco;
      export type Paynow = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Paynow;
      export type Paypal = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Paypal;
      export type Payto = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Payto;
      export type Pix = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Pix;
      export type Promptpay = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Promptpay;
      export type RevolutPay = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.RevolutPay;
      export type SamsungPay = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.SamsungPay;
      export type Satispay = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Satispay;
      export type Scalapay = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Scalapay;
      export type SepaDebit = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.SepaDebit;
      export type Sofort = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Sofort;
      export type Sunbit = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Sunbit;
      export type Swish = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Swish;
      export type Twint = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Twint;
      export type Upi = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Upi;
      export type UsBankAccount = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount;
      export type WechatPay = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.WechatPay;
      export type Zip = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Zip;
      export namespace AcssDebit {
        export type MandateOptions = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.AcssDebit.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.AcssDebit.SetupFutureUsage;
        export type VerificationMethod = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.AcssDebit.VerificationMethod;
        export namespace MandateOptions {
          export type PaymentSchedule = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
          export type TransactionType = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
        }
      }
      export namespace Alipay {
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Alipay.SetupFutureUsage;
      }
      export namespace AmazonPay {
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.AmazonPay.SetupFutureUsage;
      }
      export namespace AuBecsDebit {
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.AuBecsDebit.SetupFutureUsage;
      }
      export namespace BacsDebit {
        export type MandateOptions = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.BacsDebit.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.BacsDebit.SetupFutureUsage;
      }
      export namespace Bancontact {
        export type PreferredLanguage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Bancontact.PreferredLanguage;
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Bancontact.SetupFutureUsage;
      }
      export namespace Boleto {
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Boleto.SetupFutureUsage;
      }
      export namespace Card {
        export type Installments = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.Installments;
        export type MandateOptions = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.MandateOptions;
        export type Network = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.Network;
        export type RequestExtendedAuthorization = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.RequestExtendedAuthorization;
        export type RequestIncrementalAuthorization = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.RequestIncrementalAuthorization;
        export type RequestMulticapture = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.RequestMulticapture;
        export type RequestOvercapture = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.RequestOvercapture;
        export type RequestThreeDSecure = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.RequestThreeDSecure;
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.SetupFutureUsage;
        export type ThreeDSecure = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure;
        export namespace Installments {
          export type Plan = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.Installments.Plan;
          export namespace Plan {
            export type Type = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.Installments.Plan.Type;
          }
        }
        export namespace MandateOptions {
          export type AmountType = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.MandateOptions.AmountType;
          export type Interval = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.MandateOptions.Interval;
        }
        export namespace ThreeDSecure {
          export type AresTransStatus = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.AresTransStatus;
          export type ElectronicCommerceIndicator = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type ExemptionIndicator = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.ExemptionIndicator;
          export type NetworkOptions = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions;
          export type Version = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.Version;
          export namespace NetworkOptions {
            export type CartesBancaires = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires;
            export namespace CartesBancaires {
              export type CbAvalgo = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires.CbAvalgo;
            }
          }
        }
      }
      export namespace CardPresent {
        export type CaptureMethod = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.CardPresent.CaptureMethod;
        export type Routing = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.CardPresent.Routing;
        export namespace Routing {
          export type RequestedPriority = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.CardPresent.Routing.RequestedPriority;
        }
      }
      export namespace Cashapp {
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Cashapp.SetupFutureUsage;
      }
      export namespace CustomerBalance {
        export type BankTransfer = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.CustomerBalance.BankTransfer;
        export namespace BankTransfer {
          export type EuBankTransfer = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
          export type RequestedAddressType = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.RequestedAddressType;
          export type Type = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.Type;
        }
      }
      export namespace Ideal {
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Ideal.SetupFutureUsage;
      }
      export namespace KakaoPay {
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.KakaoPay.SetupFutureUsage;
      }
      export namespace Klarna {
        export type OnDemand = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Klarna.OnDemand;
        export type PreferredLocale = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Klarna.PreferredLocale;
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Klarna.SetupFutureUsage;
        export type Subscription = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Klarna.Subscription;
        export namespace OnDemand {
          export type PurchaseInterval = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Klarna.OnDemand.PurchaseInterval;
        }
        export namespace Subscription {
          export type Interval = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Klarna.Subscription.Interval;
          export type NextBilling = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Klarna.Subscription.NextBilling;
        }
      }
      export namespace KrCard {
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.KrCard.SetupFutureUsage;
      }
      export namespace Link {
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Link.SetupFutureUsage;
      }
      export namespace NaverPay {
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.NaverPay.SetupFutureUsage;
      }
      export namespace NzBankAccount {
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.NzBankAccount.SetupFutureUsage;
      }
      export namespace Paypal {
        export type PreferredLocale = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Paypal.PreferredLocale;
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Paypal.SetupFutureUsage;
      }
      export namespace Payto {
        export type MandateOptions = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Payto.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Payto.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Payto.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
          export type Purpose = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Payto.MandateOptions.Purpose;
        }
      }
      export namespace Pix {
        export type AmountIncludesIof = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Pix.AmountIncludesIof;
        export type MandateOptions = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Pix.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Pix.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountIncludesIof = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
          export type AmountType = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Pix.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
        }
      }
      export namespace RevolutPay {
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.RevolutPay.SetupFutureUsage;
      }
      export namespace Satispay {
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Satispay.SetupFutureUsage;
      }
      export namespace SepaDebit {
        export type MandateOptions = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.SepaDebit.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.SepaDebit.SetupFutureUsage;
      }
      export namespace Sofort {
        export type PreferredLanguage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Sofort.PreferredLanguage;
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Sofort.SetupFutureUsage;
      }
      export namespace Twint {
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Twint.SetupFutureUsage;
      }
      export namespace Upi {
        export type MandateOptions = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Upi.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Upi.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type FinancialConnections = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections;
        export type MandateOptions = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.MandateOptions;
        export type Networks = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.Networks;
        export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.SetupFutureUsage;
        export type TransactionPurpose = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.TransactionPurpose;
        export type VerificationMethod = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.VerificationMethod;
        export namespace FinancialConnections {
          export type Filters = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
          export type Permission = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
          export type Prefetch = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          export namespace Filters {
            export type AccountSubcategory = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
          }
        }
        export namespace Networks {
          export type Requested = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.UsBankAccount.Networks.Requested;
        }
      }
      export namespace WechatPay {
        export type Client = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions.WechatPay.Client;
      }
    }
    export namespace TransferData {
      export type PaymentData = Stripe.PaymentIntentUpdateParams.TransferData.PaymentData;
    }
  }
  export namespace PaymentIntentCancelParams {
    export type CancellationReason = Stripe.PaymentIntentCancelParams.CancellationReason;
  }
  export namespace PaymentIntentCaptureParams {
    export type AmountDetails = Stripe.PaymentIntentCaptureParams.AmountDetails;
    export type Hooks = Stripe.PaymentIntentCaptureParams.Hooks;
    export type PaymentDetails = Stripe.PaymentIntentCaptureParams.PaymentDetails;
    export type TransferData = Stripe.PaymentIntentCaptureParams.TransferData;
    export namespace AmountDetails {
      export type LineItem = Stripe.PaymentIntentCaptureParams.AmountDetails.LineItem;
      export type Shipping = Stripe.PaymentIntentCaptureParams.AmountDetails.Shipping;
      export type Tax = Stripe.PaymentIntentCaptureParams.AmountDetails.Tax;
      export namespace LineItem {
        export type PaymentMethodOptions = Stripe.PaymentIntentCaptureParams.AmountDetails.LineItem.PaymentMethodOptions;
        export type Tax = Stripe.PaymentIntentCaptureParams.AmountDetails.LineItem.Tax;
        export namespace PaymentMethodOptions {
          export type Card = Stripe.PaymentIntentCaptureParams.AmountDetails.LineItem.PaymentMethodOptions.Card;
          export type CardPresent = Stripe.PaymentIntentCaptureParams.AmountDetails.LineItem.PaymentMethodOptions.CardPresent;
          export type Klarna = Stripe.PaymentIntentCaptureParams.AmountDetails.LineItem.PaymentMethodOptions.Klarna;
          export type Paypal = Stripe.PaymentIntentCaptureParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal;
          export namespace Paypal {
            export type Category = Stripe.PaymentIntentCaptureParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal.Category;
          }
        }
      }
    }
    export namespace Hooks {
      export type Inputs = Stripe.PaymentIntentCaptureParams.Hooks.Inputs;
      export namespace Inputs {
        export type Tax = Stripe.PaymentIntentCaptureParams.Hooks.Inputs.Tax;
      }
    }
  }
  export namespace PaymentIntentConfirmParams {
    export type AmountDetails = Stripe.PaymentIntentConfirmParams.AmountDetails;
    export type CaptureMethod = Stripe.PaymentIntentConfirmParams.CaptureMethod;
    export type ExcludedPaymentMethodType = Stripe.PaymentIntentConfirmParams.ExcludedPaymentMethodType;
    export type Hooks = Stripe.PaymentIntentConfirmParams.Hooks;
    export type MandateData = Stripe.PaymentIntentConfirmParams.MandateData;
    export type OffSession = Stripe.PaymentIntentConfirmParams.OffSession;
    export type PaymentDetails = Stripe.PaymentIntentConfirmParams.PaymentDetails;
    export type PaymentMethodData = Stripe.PaymentIntentConfirmParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions;
    export type RadarOptions = Stripe.PaymentIntentConfirmParams.RadarOptions;
    export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.SetupFutureUsage;
    export type Shipping = Stripe.PaymentIntentConfirmParams.Shipping;
    export namespace AmountDetails {
      export type LineItem = Stripe.PaymentIntentConfirmParams.AmountDetails.LineItem;
      export type Shipping = Stripe.PaymentIntentConfirmParams.AmountDetails.Shipping;
      export type Tax = Stripe.PaymentIntentConfirmParams.AmountDetails.Tax;
      export namespace LineItem {
        export type PaymentMethodOptions = Stripe.PaymentIntentConfirmParams.AmountDetails.LineItem.PaymentMethodOptions;
        export type Tax = Stripe.PaymentIntentConfirmParams.AmountDetails.LineItem.Tax;
        export namespace PaymentMethodOptions {
          export type Card = Stripe.PaymentIntentConfirmParams.AmountDetails.LineItem.PaymentMethodOptions.Card;
          export type CardPresent = Stripe.PaymentIntentConfirmParams.AmountDetails.LineItem.PaymentMethodOptions.CardPresent;
          export type Klarna = Stripe.PaymentIntentConfirmParams.AmountDetails.LineItem.PaymentMethodOptions.Klarna;
          export type Paypal = Stripe.PaymentIntentConfirmParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal;
          export namespace Paypal {
            export type Category = Stripe.PaymentIntentConfirmParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal.Category;
          }
        }
      }
    }
    export namespace Hooks {
      export type Inputs = Stripe.PaymentIntentConfirmParams.Hooks.Inputs;
      export namespace Inputs {
        export type Tax = Stripe.PaymentIntentConfirmParams.Hooks.Inputs.Tax;
      }
    }
    export namespace MandateData {
      export type CustomerAcceptance = Stripe.PaymentIntentConfirmParams.MandateData.CustomerAcceptance;
      export namespace CustomerAcceptance {
        export type Offline = Stripe.PaymentIntentConfirmParams.MandateData.CustomerAcceptance.Offline;
        export type Online = Stripe.PaymentIntentConfirmParams.MandateData.CustomerAcceptance.Online;
        export type Type = Stripe.PaymentIntentConfirmParams.MandateData.CustomerAcceptance.Type;
      }
    }
    export namespace PaymentMethodData {
      export type AcssDebit = Stripe.PaymentIntentConfirmParams.PaymentMethodData.AcssDebit;
      export type Affirm = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Affirm;
      export type AfterpayClearpay = Stripe.PaymentIntentConfirmParams.PaymentMethodData.AfterpayClearpay;
      export type Alipay = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Alipay;
      export type AllowRedisplay = Stripe.PaymentIntentConfirmParams.PaymentMethodData.AllowRedisplay;
      export type Alma = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Alma;
      export type AmazonPay = Stripe.PaymentIntentConfirmParams.PaymentMethodData.AmazonPay;
      export type AuBecsDebit = Stripe.PaymentIntentConfirmParams.PaymentMethodData.AuBecsDebit;
      export type BacsDebit = Stripe.PaymentIntentConfirmParams.PaymentMethodData.BacsDebit;
      export type Bancontact = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Bancontact;
      export type Billie = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Billie;
      export type BillingDetails = Stripe.PaymentIntentConfirmParams.PaymentMethodData.BillingDetails;
      export type Bizum = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Bizum;
      export type Blik = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Blik;
      export type Boleto = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Boleto;
      export type Cashapp = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Cashapp;
      export type Crypto = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Crypto;
      export type CustomerBalance = Stripe.PaymentIntentConfirmParams.PaymentMethodData.CustomerBalance;
      export type Eps = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Eps;
      export type Fpx = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Fpx;
      export type Giropay = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Giropay;
      export type Grabpay = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Grabpay;
      export type Ideal = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Ideal;
      export type InteracPresent = Stripe.PaymentIntentConfirmParams.PaymentMethodData.InteracPresent;
      export type KakaoPay = Stripe.PaymentIntentConfirmParams.PaymentMethodData.KakaoPay;
      export type Klarna = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Klarna;
      export type Konbini = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Konbini;
      export type KrCard = Stripe.PaymentIntentConfirmParams.PaymentMethodData.KrCard;
      export type Link = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Link;
      export type MbWay = Stripe.PaymentIntentConfirmParams.PaymentMethodData.MbWay;
      export type Mobilepay = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Mobilepay;
      export type Multibanco = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Multibanco;
      export type NaverPay = Stripe.PaymentIntentConfirmParams.PaymentMethodData.NaverPay;
      export type NzBankAccount = Stripe.PaymentIntentConfirmParams.PaymentMethodData.NzBankAccount;
      export type Oxxo = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Oxxo;
      export type P24 = Stripe.PaymentIntentConfirmParams.PaymentMethodData.P24;
      export type PayByBank = Stripe.PaymentIntentConfirmParams.PaymentMethodData.PayByBank;
      export type Payco = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Payco;
      export type Paynow = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Paynow;
      export type Paypal = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Paypal;
      export type Payto = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Payto;
      export type Pix = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Pix;
      export type Promptpay = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Promptpay;
      export type RadarOptions = Stripe.PaymentIntentConfirmParams.PaymentMethodData.RadarOptions;
      export type RevolutPay = Stripe.PaymentIntentConfirmParams.PaymentMethodData.RevolutPay;
      export type SamsungPay = Stripe.PaymentIntentConfirmParams.PaymentMethodData.SamsungPay;
      export type Satispay = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Satispay;
      export type Scalapay = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Scalapay;
      export type SepaDebit = Stripe.PaymentIntentConfirmParams.PaymentMethodData.SepaDebit;
      export type Sofort = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Sofort;
      export type Sunbit = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Sunbit;
      export type Swish = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Swish;
      export type Twint = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Twint;
      export type Type = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Type;
      export type Upi = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Upi;
      export type UsBankAccount = Stripe.PaymentIntentConfirmParams.PaymentMethodData.UsBankAccount;
      export type WechatPay = Stripe.PaymentIntentConfirmParams.PaymentMethodData.WechatPay;
      export type Zip = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Zip;
      export namespace Eps {
        export type Bank = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Fpx.AccountHolderType;
        export type Bank = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Ideal.Bank;
      }
      export namespace Klarna {
        export type Dob = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Klarna.Dob;
      }
      export namespace NaverPay {
        export type Funding = Stripe.PaymentIntentConfirmParams.PaymentMethodData.NaverPay.Funding;
      }
      export namespace P24 {
        export type Bank = Stripe.PaymentIntentConfirmParams.PaymentMethodData.P24.Bank;
      }
      export namespace Sofort {
        export type Country = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Sofort.Country;
      }
      export namespace Upi {
        export type MandateOptions = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Upi.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe.PaymentIntentConfirmParams.PaymentMethodData.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe.PaymentIntentConfirmParams.PaymentMethodData.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe.PaymentIntentConfirmParams.PaymentMethodData.UsBankAccount.AccountType;
      }
    }
    export namespace PaymentMethodOptions {
      export type AcssDebit = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.AcssDebit;
      export type Affirm = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Affirm;
      export type AfterpayClearpay = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.AfterpayClearpay;
      export type Alipay = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Alipay;
      export type Alma = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Alma;
      export type AmazonPay = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.AmazonPay;
      export type AuBecsDebit = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.AuBecsDebit;
      export type BacsDebit = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.BacsDebit;
      export type Bancontact = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Bancontact;
      export type Billie = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Billie;
      export type Bizum = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Bizum;
      export type Blik = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Blik;
      export type Boleto = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Boleto;
      export type Card = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card;
      export type CardPresent = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.CardPresent;
      export type Cashapp = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Cashapp;
      export type Crypto = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Crypto;
      export type CustomerBalance = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.CustomerBalance;
      export type Eps = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Eps;
      export type Fpx = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Fpx;
      export type Giropay = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Giropay;
      export type Grabpay = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Grabpay;
      export type Ideal = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Ideal;
      export type InteracPresent = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.InteracPresent;
      export type KakaoPay = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.KakaoPay;
      export type Klarna = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Klarna;
      export type Konbini = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Konbini;
      export type KrCard = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.KrCard;
      export type Link = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Link;
      export type MbWay = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.MbWay;
      export type Mobilepay = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Mobilepay;
      export type Multibanco = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Multibanco;
      export type NaverPay = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.NaverPay;
      export type NzBankAccount = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.NzBankAccount;
      export type Oxxo = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Oxxo;
      export type P24 = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.P24;
      export type PayByBank = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.PayByBank;
      export type Payco = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Payco;
      export type Paynow = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Paynow;
      export type Paypal = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Paypal;
      export type Payto = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Payto;
      export type Pix = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Pix;
      export type Promptpay = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Promptpay;
      export type RevolutPay = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.RevolutPay;
      export type SamsungPay = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.SamsungPay;
      export type Satispay = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Satispay;
      export type Scalapay = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Scalapay;
      export type SepaDebit = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.SepaDebit;
      export type Sofort = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Sofort;
      export type Sunbit = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Sunbit;
      export type Swish = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Swish;
      export type Twint = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Twint;
      export type Upi = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Upi;
      export type UsBankAccount = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount;
      export type WechatPay = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.WechatPay;
      export type Zip = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Zip;
      export namespace AcssDebit {
        export type MandateOptions = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.AcssDebit.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.AcssDebit.SetupFutureUsage;
        export type VerificationMethod = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.AcssDebit.VerificationMethod;
        export namespace MandateOptions {
          export type PaymentSchedule = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
          export type TransactionType = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
        }
      }
      export namespace Alipay {
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Alipay.SetupFutureUsage;
      }
      export namespace AmazonPay {
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.AmazonPay.SetupFutureUsage;
      }
      export namespace AuBecsDebit {
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.AuBecsDebit.SetupFutureUsage;
      }
      export namespace BacsDebit {
        export type MandateOptions = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.BacsDebit.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.BacsDebit.SetupFutureUsage;
      }
      export namespace Bancontact {
        export type PreferredLanguage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Bancontact.PreferredLanguage;
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Bancontact.SetupFutureUsage;
      }
      export namespace Boleto {
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Boleto.SetupFutureUsage;
      }
      export namespace Card {
        export type Installments = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.Installments;
        export type MandateOptions = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.MandateOptions;
        export type Network = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.Network;
        export type RequestExtendedAuthorization = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.RequestExtendedAuthorization;
        export type RequestIncrementalAuthorization = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.RequestIncrementalAuthorization;
        export type RequestMulticapture = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.RequestMulticapture;
        export type RequestOvercapture = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.RequestOvercapture;
        export type RequestThreeDSecure = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.RequestThreeDSecure;
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.SetupFutureUsage;
        export type ThreeDSecure = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure;
        export namespace Installments {
          export type Plan = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.Installments.Plan;
          export namespace Plan {
            export type Type = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.Installments.Plan.Type;
          }
        }
        export namespace MandateOptions {
          export type AmountType = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.MandateOptions.AmountType;
          export type Interval = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.MandateOptions.Interval;
        }
        export namespace ThreeDSecure {
          export type AresTransStatus = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.AresTransStatus;
          export type ElectronicCommerceIndicator = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type ExemptionIndicator = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.ExemptionIndicator;
          export type NetworkOptions = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions;
          export type Version = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.Version;
          export namespace NetworkOptions {
            export type CartesBancaires = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires;
            export namespace CartesBancaires {
              export type CbAvalgo = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires.CbAvalgo;
            }
          }
        }
      }
      export namespace CardPresent {
        export type CaptureMethod = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.CardPresent.CaptureMethod;
        export type Routing = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.CardPresent.Routing;
        export namespace Routing {
          export type RequestedPriority = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.CardPresent.Routing.RequestedPriority;
        }
      }
      export namespace Cashapp {
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Cashapp.SetupFutureUsage;
      }
      export namespace CustomerBalance {
        export type BankTransfer = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.CustomerBalance.BankTransfer;
        export namespace BankTransfer {
          export type EuBankTransfer = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
          export type RequestedAddressType = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.CustomerBalance.BankTransfer.RequestedAddressType;
          export type Type = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.CustomerBalance.BankTransfer.Type;
        }
      }
      export namespace Ideal {
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Ideal.SetupFutureUsage;
      }
      export namespace KakaoPay {
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.KakaoPay.SetupFutureUsage;
      }
      export namespace Klarna {
        export type OnDemand = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Klarna.OnDemand;
        export type PreferredLocale = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Klarna.PreferredLocale;
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Klarna.SetupFutureUsage;
        export type Subscription = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Klarna.Subscription;
        export namespace OnDemand {
          export type PurchaseInterval = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Klarna.OnDemand.PurchaseInterval;
        }
        export namespace Subscription {
          export type Interval = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Klarna.Subscription.Interval;
          export type NextBilling = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Klarna.Subscription.NextBilling;
        }
      }
      export namespace KrCard {
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.KrCard.SetupFutureUsage;
      }
      export namespace Link {
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Link.SetupFutureUsage;
      }
      export namespace NaverPay {
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.NaverPay.SetupFutureUsage;
      }
      export namespace NzBankAccount {
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.NzBankAccount.SetupFutureUsage;
      }
      export namespace Paypal {
        export type PreferredLocale = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Paypal.PreferredLocale;
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Paypal.SetupFutureUsage;
      }
      export namespace Payto {
        export type MandateOptions = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Payto.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Payto.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Payto.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
          export type Purpose = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Payto.MandateOptions.Purpose;
        }
      }
      export namespace Pix {
        export type AmountIncludesIof = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Pix.AmountIncludesIof;
        export type MandateOptions = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Pix.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Pix.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountIncludesIof = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
          export type AmountType = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Pix.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
        }
      }
      export namespace RevolutPay {
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.RevolutPay.SetupFutureUsage;
      }
      export namespace Satispay {
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Satispay.SetupFutureUsage;
      }
      export namespace SepaDebit {
        export type MandateOptions = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.SepaDebit.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.SepaDebit.SetupFutureUsage;
      }
      export namespace Sofort {
        export type PreferredLanguage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Sofort.PreferredLanguage;
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Sofort.SetupFutureUsage;
      }
      export namespace Twint {
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Twint.SetupFutureUsage;
      }
      export namespace Upi {
        export type MandateOptions = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Upi.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Upi.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type FinancialConnections = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections;
        export type MandateOptions = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.MandateOptions;
        export type Networks = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.Networks;
        export type SetupFutureUsage = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.SetupFutureUsage;
        export type TransactionPurpose = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.TransactionPurpose;
        export type VerificationMethod = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.VerificationMethod;
        export namespace FinancialConnections {
          export type Filters = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
          export type Permission = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
          export type Prefetch = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          export namespace Filters {
            export type AccountSubcategory = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
          }
        }
        export namespace Networks {
          export type Requested = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.UsBankAccount.Networks.Requested;
        }
      }
      export namespace WechatPay {
        export type Client = Stripe.PaymentIntentConfirmParams.PaymentMethodOptions.WechatPay.Client;
      }
    }
  }
  export namespace PaymentIntentIncrementAuthorizationParams {
    export type AmountDetails = Stripe.PaymentIntentIncrementAuthorizationParams.AmountDetails;
    export type Hooks = Stripe.PaymentIntentIncrementAuthorizationParams.Hooks;
    export type PaymentDetails = Stripe.PaymentIntentIncrementAuthorizationParams.PaymentDetails;
    export type TransferData = Stripe.PaymentIntentIncrementAuthorizationParams.TransferData;
    export namespace AmountDetails {
      export type LineItem = Stripe.PaymentIntentIncrementAuthorizationParams.AmountDetails.LineItem;
      export type Shipping = Stripe.PaymentIntentIncrementAuthorizationParams.AmountDetails.Shipping;
      export type Tax = Stripe.PaymentIntentIncrementAuthorizationParams.AmountDetails.Tax;
      export namespace LineItem {
        export type PaymentMethodOptions = Stripe.PaymentIntentIncrementAuthorizationParams.AmountDetails.LineItem.PaymentMethodOptions;
        export type Tax = Stripe.PaymentIntentIncrementAuthorizationParams.AmountDetails.LineItem.Tax;
        export namespace PaymentMethodOptions {
          export type Card = Stripe.PaymentIntentIncrementAuthorizationParams.AmountDetails.LineItem.PaymentMethodOptions.Card;
          export type CardPresent = Stripe.PaymentIntentIncrementAuthorizationParams.AmountDetails.LineItem.PaymentMethodOptions.CardPresent;
          export type Klarna = Stripe.PaymentIntentIncrementAuthorizationParams.AmountDetails.LineItem.PaymentMethodOptions.Klarna;
          export type Paypal = Stripe.PaymentIntentIncrementAuthorizationParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal;
          export namespace Paypal {
            export type Category = Stripe.PaymentIntentIncrementAuthorizationParams.AmountDetails.LineItem.PaymentMethodOptions.Paypal.Category;
          }
        }
      }
    }
    export namespace Hooks {
      export type Inputs = Stripe.PaymentIntentIncrementAuthorizationParams.Hooks.Inputs;
      export namespace Inputs {
        export type Tax = Stripe.PaymentIntentIncrementAuthorizationParams.Hooks.Inputs.Tax;
      }
    }
  }
  export namespace PaymentIntent {
    export type AmountDetails = Stripe.PaymentIntent.AmountDetails;
    export type AutomaticPaymentMethods = Stripe.PaymentIntent.AutomaticPaymentMethods;
    export type CancellationReason = Stripe.PaymentIntent.CancellationReason;
    export type CaptureMethod = Stripe.PaymentIntent.CaptureMethod;
    export type ConfirmationMethod = Stripe.PaymentIntent.ConfirmationMethod;
    export type ExcludedPaymentMethodType = Stripe.PaymentIntent.ExcludedPaymentMethodType;
    export type Hooks = Stripe.PaymentIntent.Hooks;
    export type LastPaymentError = Stripe.PaymentIntent.LastPaymentError;
    export type ManagedPayments = Stripe.PaymentIntent.ManagedPayments;
    export type NextAction = Stripe.PaymentIntent.NextAction;
    export type PaymentDetails = Stripe.PaymentIntent.PaymentDetails;
    export type PaymentMethodConfigurationDetails = Stripe.PaymentIntent.PaymentMethodConfigurationDetails;
    export type PaymentMethodOptions = Stripe.PaymentIntent.PaymentMethodOptions;
    export type PresentmentDetails = Stripe.PaymentIntent.PresentmentDetails;
    export type Processing = Stripe.PaymentIntent.Processing;
    export type SetupFutureUsage = Stripe.PaymentIntent.SetupFutureUsage;
    export type Shipping = Stripe.PaymentIntent.Shipping;
    export type Status = Stripe.PaymentIntent.Status;
    export type TransferData = Stripe.PaymentIntent.TransferData;
    export namespace AmountDetails {
      export type Error = Stripe.PaymentIntent.AmountDetails.Error;
      export type Shipping = Stripe.PaymentIntent.AmountDetails.Shipping;
      export type Tax = Stripe.PaymentIntent.AmountDetails.Tax;
      export type Tip = Stripe.PaymentIntent.AmountDetails.Tip;
      export namespace Error {
        export type Code = Stripe.PaymentIntent.AmountDetails.Error.Code;
      }
    }
    export namespace AutomaticPaymentMethods {
      export type AllowRedirects = Stripe.PaymentIntent.AutomaticPaymentMethods.AllowRedirects;
    }
    export namespace Hooks {
      export type Inputs = Stripe.PaymentIntent.Hooks.Inputs;
      export namespace Inputs {
        export type Tax = Stripe.PaymentIntent.Hooks.Inputs.Tax;
      }
    }
    export namespace LastPaymentError {
      export type Code = Stripe.PaymentIntent.LastPaymentError.Code;
      export type Type = Stripe.PaymentIntent.LastPaymentError.Type;
    }
    export namespace NextAction {
      export type AlipayHandleRedirect = Stripe.PaymentIntent.NextAction.AlipayHandleRedirect;
      export type BlikAuthorize = Stripe.PaymentIntent.NextAction.BlikAuthorize;
      export type BoletoDisplayDetails = Stripe.PaymentIntent.NextAction.BoletoDisplayDetails;
      export type CardAwaitNotification = Stripe.PaymentIntent.NextAction.CardAwaitNotification;
      export type CashappHandleRedirectOrDisplayQrCode = Stripe.PaymentIntent.NextAction.CashappHandleRedirectOrDisplayQrCode;
      export type DisplayBankTransferInstructions = Stripe.PaymentIntent.NextAction.DisplayBankTransferInstructions;
      export type KlarnaDisplayQrCode = Stripe.PaymentIntent.NextAction.KlarnaDisplayQrCode;
      export type KonbiniDisplayDetails = Stripe.PaymentIntent.NextAction.KonbiniDisplayDetails;
      export type MultibancoDisplayDetails = Stripe.PaymentIntent.NextAction.MultibancoDisplayDetails;
      export type OxxoDisplayDetails = Stripe.PaymentIntent.NextAction.OxxoDisplayDetails;
      export type PaynowDisplayQrCode = Stripe.PaymentIntent.NextAction.PaynowDisplayQrCode;
      export type PixDisplayQrCode = Stripe.PaymentIntent.NextAction.PixDisplayQrCode;
      export type PromptpayDisplayQrCode = Stripe.PaymentIntent.NextAction.PromptpayDisplayQrCode;
      export type RedirectToUrl = Stripe.PaymentIntent.NextAction.RedirectToUrl;
      export type SwishHandleRedirectOrDisplayQrCode = Stripe.PaymentIntent.NextAction.SwishHandleRedirectOrDisplayQrCode;
      export type UpiHandleRedirectOrDisplayQrCode = Stripe.PaymentIntent.NextAction.UpiHandleRedirectOrDisplayQrCode;
      export type UseStripeSdk = Stripe.PaymentIntent.NextAction.UseStripeSdk;
      export type VerifyWithMicrodeposits = Stripe.PaymentIntent.NextAction.VerifyWithMicrodeposits;
      export type WechatPayDisplayQrCode = Stripe.PaymentIntent.NextAction.WechatPayDisplayQrCode;
      export type WechatPayRedirectToAndroidApp = Stripe.PaymentIntent.NextAction.WechatPayRedirectToAndroidApp;
      export type WechatPayRedirectToIosApp = Stripe.PaymentIntent.NextAction.WechatPayRedirectToIosApp;
      export namespace CashappHandleRedirectOrDisplayQrCode {
        export type QrCode = Stripe.PaymentIntent.NextAction.CashappHandleRedirectOrDisplayQrCode.QrCode;
      }
      export namespace DisplayBankTransferInstructions {
        export type FinancialAddress = Stripe.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress;
        export type Type = Stripe.PaymentIntent.NextAction.DisplayBankTransferInstructions.Type;
        export namespace FinancialAddress {
          export type Aba = Stripe.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress.Aba;
          export type Iban = Stripe.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress.Iban;
          export type SortCode = Stripe.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress.SortCode;
          export type Spei = Stripe.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress.Spei;
          export type SupportedNetwork = Stripe.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress.SupportedNetwork;
          export type Swift = Stripe.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress.Swift;
          export type Type = Stripe.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress.Type;
          export type Zengin = Stripe.PaymentIntent.NextAction.DisplayBankTransferInstructions.FinancialAddress.Zengin;
        }
      }
      export namespace KonbiniDisplayDetails {
        export type Stores = Stripe.PaymentIntent.NextAction.KonbiniDisplayDetails.Stores;
        export namespace Stores {
          export type Familymart = Stripe.PaymentIntent.NextAction.KonbiniDisplayDetails.Stores.Familymart;
          export type Lawson = Stripe.PaymentIntent.NextAction.KonbiniDisplayDetails.Stores.Lawson;
          export type Ministop = Stripe.PaymentIntent.NextAction.KonbiniDisplayDetails.Stores.Ministop;
          export type Seicomart = Stripe.PaymentIntent.NextAction.KonbiniDisplayDetails.Stores.Seicomart;
        }
      }
      export namespace SwishHandleRedirectOrDisplayQrCode {
        export type QrCode = Stripe.PaymentIntent.NextAction.SwishHandleRedirectOrDisplayQrCode.QrCode;
      }
      export namespace UpiHandleRedirectOrDisplayQrCode {
        export type QrCode = Stripe.PaymentIntent.NextAction.UpiHandleRedirectOrDisplayQrCode.QrCode;
      }
      export namespace VerifyWithMicrodeposits {
        export type MicrodepositType = Stripe.PaymentIntent.NextAction.VerifyWithMicrodeposits.MicrodepositType;
      }
    }
    export namespace PaymentMethodOptions {
      export type AcssDebit = Stripe.PaymentIntent.PaymentMethodOptions.AcssDebit;
      export type Affirm = Stripe.PaymentIntent.PaymentMethodOptions.Affirm;
      export type AfterpayClearpay = Stripe.PaymentIntent.PaymentMethodOptions.AfterpayClearpay;
      export type Alipay = Stripe.PaymentIntent.PaymentMethodOptions.Alipay;
      export type Alma = Stripe.PaymentIntent.PaymentMethodOptions.Alma;
      export type AmazonPay = Stripe.PaymentIntent.PaymentMethodOptions.AmazonPay;
      export type AuBecsDebit = Stripe.PaymentIntent.PaymentMethodOptions.AuBecsDebit;
      export type BacsDebit = Stripe.PaymentIntent.PaymentMethodOptions.BacsDebit;
      export type Bancontact = Stripe.PaymentIntent.PaymentMethodOptions.Bancontact;
      export type Billie = Stripe.PaymentIntent.PaymentMethodOptions.Billie;
      export type Bizum = Stripe.PaymentIntent.PaymentMethodOptions.Bizum;
      export type Blik = Stripe.PaymentIntent.PaymentMethodOptions.Blik;
      export type Boleto = Stripe.PaymentIntent.PaymentMethodOptions.Boleto;
      export type Card = Stripe.PaymentIntent.PaymentMethodOptions.Card;
      export type CardPresent = Stripe.PaymentIntent.PaymentMethodOptions.CardPresent;
      export type Cashapp = Stripe.PaymentIntent.PaymentMethodOptions.Cashapp;
      export type Crypto = Stripe.PaymentIntent.PaymentMethodOptions.Crypto;
      export type CustomerBalance = Stripe.PaymentIntent.PaymentMethodOptions.CustomerBalance;
      export type Eps = Stripe.PaymentIntent.PaymentMethodOptions.Eps;
      export type Fpx = Stripe.PaymentIntent.PaymentMethodOptions.Fpx;
      export type Giropay = Stripe.PaymentIntent.PaymentMethodOptions.Giropay;
      export type Grabpay = Stripe.PaymentIntent.PaymentMethodOptions.Grabpay;
      export type Ideal = Stripe.PaymentIntent.PaymentMethodOptions.Ideal;
      export type InteracPresent = Stripe.PaymentIntent.PaymentMethodOptions.InteracPresent;
      export type KakaoPay = Stripe.PaymentIntent.PaymentMethodOptions.KakaoPay;
      export type Klarna = Stripe.PaymentIntent.PaymentMethodOptions.Klarna;
      export type Konbini = Stripe.PaymentIntent.PaymentMethodOptions.Konbini;
      export type KrCard = Stripe.PaymentIntent.PaymentMethodOptions.KrCard;
      export type Link = Stripe.PaymentIntent.PaymentMethodOptions.Link;
      export type MbWay = Stripe.PaymentIntent.PaymentMethodOptions.MbWay;
      export type Mobilepay = Stripe.PaymentIntent.PaymentMethodOptions.Mobilepay;
      export type Multibanco = Stripe.PaymentIntent.PaymentMethodOptions.Multibanco;
      export type NaverPay = Stripe.PaymentIntent.PaymentMethodOptions.NaverPay;
      export type NzBankAccount = Stripe.PaymentIntent.PaymentMethodOptions.NzBankAccount;
      export type Oxxo = Stripe.PaymentIntent.PaymentMethodOptions.Oxxo;
      export type P24 = Stripe.PaymentIntent.PaymentMethodOptions.P24;
      export type PayByBank = Stripe.PaymentIntent.PaymentMethodOptions.PayByBank;
      export type Payco = Stripe.PaymentIntent.PaymentMethodOptions.Payco;
      export type Paynow = Stripe.PaymentIntent.PaymentMethodOptions.Paynow;
      export type Paypal = Stripe.PaymentIntent.PaymentMethodOptions.Paypal;
      export type Payto = Stripe.PaymentIntent.PaymentMethodOptions.Payto;
      export type Pix = Stripe.PaymentIntent.PaymentMethodOptions.Pix;
      export type Promptpay = Stripe.PaymentIntent.PaymentMethodOptions.Promptpay;
      export type RevolutPay = Stripe.PaymentIntent.PaymentMethodOptions.RevolutPay;
      export type SamsungPay = Stripe.PaymentIntent.PaymentMethodOptions.SamsungPay;
      export type Satispay = Stripe.PaymentIntent.PaymentMethodOptions.Satispay;
      export type Scalapay = Stripe.PaymentIntent.PaymentMethodOptions.Scalapay;
      export type SepaDebit = Stripe.PaymentIntent.PaymentMethodOptions.SepaDebit;
      export type Sofort = Stripe.PaymentIntent.PaymentMethodOptions.Sofort;
      export type Sunbit = Stripe.PaymentIntent.PaymentMethodOptions.Sunbit;
      export type Swish = Stripe.PaymentIntent.PaymentMethodOptions.Swish;
      export type Twint = Stripe.PaymentIntent.PaymentMethodOptions.Twint;
      export type Upi = Stripe.PaymentIntent.PaymentMethodOptions.Upi;
      export type UsBankAccount = Stripe.PaymentIntent.PaymentMethodOptions.UsBankAccount;
      export type WechatPay = Stripe.PaymentIntent.PaymentMethodOptions.WechatPay;
      export type Zip = Stripe.PaymentIntent.PaymentMethodOptions.Zip;
      export namespace AcssDebit {
        export type MandateOptions = Stripe.PaymentIntent.PaymentMethodOptions.AcssDebit.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.AcssDebit.SetupFutureUsage;
        export type VerificationMethod = Stripe.PaymentIntent.PaymentMethodOptions.AcssDebit.VerificationMethod;
        export namespace MandateOptions {
          export type PaymentSchedule = Stripe.PaymentIntent.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
          export type TransactionType = Stripe.PaymentIntent.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
        }
      }
      export namespace Alipay {
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.Alipay.SetupFutureUsage;
      }
      export namespace AmazonPay {
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.AmazonPay.SetupFutureUsage;
      }
      export namespace AuBecsDebit {
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.AuBecsDebit.SetupFutureUsage;
      }
      export namespace BacsDebit {
        export type MandateOptions = Stripe.PaymentIntent.PaymentMethodOptions.BacsDebit.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.BacsDebit.SetupFutureUsage;
      }
      export namespace Bancontact {
        export type PreferredLanguage = Stripe.PaymentIntent.PaymentMethodOptions.Bancontact.PreferredLanguage;
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.Bancontact.SetupFutureUsage;
      }
      export namespace Boleto {
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.Boleto.SetupFutureUsage;
      }
      export namespace Card {
        export type Installments = Stripe.PaymentIntent.PaymentMethodOptions.Card.Installments;
        export type MandateOptions = Stripe.PaymentIntent.PaymentMethodOptions.Card.MandateOptions;
        export type Network = Stripe.PaymentIntent.PaymentMethodOptions.Card.Network;
        export type RequestExtendedAuthorization = Stripe.PaymentIntent.PaymentMethodOptions.Card.RequestExtendedAuthorization;
        export type RequestIncrementalAuthorization = Stripe.PaymentIntent.PaymentMethodOptions.Card.RequestIncrementalAuthorization;
        export type RequestMulticapture = Stripe.PaymentIntent.PaymentMethodOptions.Card.RequestMulticapture;
        export type RequestOvercapture = Stripe.PaymentIntent.PaymentMethodOptions.Card.RequestOvercapture;
        export type RequestThreeDSecure = Stripe.PaymentIntent.PaymentMethodOptions.Card.RequestThreeDSecure;
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.Card.SetupFutureUsage;
        export namespace Installments {
          export type AvailablePlan = Stripe.PaymentIntent.PaymentMethodOptions.Card.Installments.AvailablePlan;
          export type Plan = Stripe.PaymentIntent.PaymentMethodOptions.Card.Installments.Plan;
          export namespace AvailablePlan {
            export type Type = Stripe.PaymentIntent.PaymentMethodOptions.Card.Installments.AvailablePlan.Type;
          }
          export namespace Plan {
            export type Type = Stripe.PaymentIntent.PaymentMethodOptions.Card.Installments.Plan.Type;
          }
        }
        export namespace MandateOptions {
          export type AmountType = Stripe.PaymentIntent.PaymentMethodOptions.Card.MandateOptions.AmountType;
          export type Interval = Stripe.PaymentIntent.PaymentMethodOptions.Card.MandateOptions.Interval;
        }
      }
      export namespace CardPresent {
        export type CaptureMethod = Stripe.PaymentIntent.PaymentMethodOptions.CardPresent.CaptureMethod;
        export type Routing = Stripe.PaymentIntent.PaymentMethodOptions.CardPresent.Routing;
        export namespace Routing {
          export type RequestedPriority = Stripe.PaymentIntent.PaymentMethodOptions.CardPresent.Routing.RequestedPriority;
        }
      }
      export namespace Cashapp {
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.Cashapp.SetupFutureUsage;
      }
      export namespace CustomerBalance {
        export type BankTransfer = Stripe.PaymentIntent.PaymentMethodOptions.CustomerBalance.BankTransfer;
        export namespace BankTransfer {
          export type EuBankTransfer = Stripe.PaymentIntent.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
          export type RequestedAddressType = Stripe.PaymentIntent.PaymentMethodOptions.CustomerBalance.BankTransfer.RequestedAddressType;
          export type Type = Stripe.PaymentIntent.PaymentMethodOptions.CustomerBalance.BankTransfer.Type;
          export namespace EuBankTransfer {
            export type Country = Stripe.PaymentIntent.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer.Country;
          }
        }
      }
      export namespace Ideal {
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.Ideal.SetupFutureUsage;
      }
      export namespace KakaoPay {
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.KakaoPay.SetupFutureUsage;
      }
      export namespace Klarna {
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.Klarna.SetupFutureUsage;
      }
      export namespace KrCard {
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.KrCard.SetupFutureUsage;
      }
      export namespace Link {
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.Link.SetupFutureUsage;
      }
      export namespace NaverPay {
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.NaverPay.SetupFutureUsage;
      }
      export namespace NzBankAccount {
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.NzBankAccount.SetupFutureUsage;
      }
      export namespace Paypal {
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.Paypal.SetupFutureUsage;
      }
      export namespace Payto {
        export type MandateOptions = Stripe.PaymentIntent.PaymentMethodOptions.Payto.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.Payto.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe.PaymentIntent.PaymentMethodOptions.Payto.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe.PaymentIntent.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
          export type Purpose = Stripe.PaymentIntent.PaymentMethodOptions.Payto.MandateOptions.Purpose;
        }
      }
      export namespace Pix {
        export type AmountIncludesIof = Stripe.PaymentIntent.PaymentMethodOptions.Pix.AmountIncludesIof;
        export type MandateOptions = Stripe.PaymentIntent.PaymentMethodOptions.Pix.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.Pix.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountIncludesIof = Stripe.PaymentIntent.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
          export type AmountType = Stripe.PaymentIntent.PaymentMethodOptions.Pix.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe.PaymentIntent.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
        }
      }
      export namespace RevolutPay {
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.RevolutPay.SetupFutureUsage;
      }
      export namespace Satispay {
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.Satispay.SetupFutureUsage;
      }
      export namespace SepaDebit {
        export type MandateOptions = Stripe.PaymentIntent.PaymentMethodOptions.SepaDebit.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.SepaDebit.SetupFutureUsage;
      }
      export namespace Sofort {
        export type PreferredLanguage = Stripe.PaymentIntent.PaymentMethodOptions.Sofort.PreferredLanguage;
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.Sofort.SetupFutureUsage;
      }
      export namespace Twint {
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.Twint.SetupFutureUsage;
      }
      export namespace Upi {
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.Upi.SetupFutureUsage;
      }
      export namespace UsBankAccount {
        export type FinancialConnections = Stripe.PaymentIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections;
        export type MandateOptions = Stripe.PaymentIntent.PaymentMethodOptions.UsBankAccount.MandateOptions;
        export type SetupFutureUsage = Stripe.PaymentIntent.PaymentMethodOptions.UsBankAccount.SetupFutureUsage;
        export type TransactionPurpose = Stripe.PaymentIntent.PaymentMethodOptions.UsBankAccount.TransactionPurpose;
        export type VerificationMethod = Stripe.PaymentIntent.PaymentMethodOptions.UsBankAccount.VerificationMethod;
        export namespace FinancialConnections {
          export type Filters = Stripe.PaymentIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
          export type Permission = Stripe.PaymentIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
          export type Prefetch = Stripe.PaymentIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          export namespace Filters {
            export type AccountSubcategory = Stripe.PaymentIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
          }
        }
      }
      export namespace WechatPay {
        export type Client = Stripe.PaymentIntent.PaymentMethodOptions.WechatPay.Client;
      }
    }
    export namespace Processing {
      export type Card = Stripe.PaymentIntent.Processing.Card;
      export namespace Card {
        export type CustomerNotification = Stripe.PaymentIntent.Processing.Card.CustomerNotification;
      }
    }
    export namespace TransferData {
      export type PaymentData = Stripe.PaymentIntent.TransferData.PaymentData;
    }
  }
  export namespace PaymentLinkCreateParams {
    export type LineItem = Stripe.PaymentLinkCreateParams.LineItem;
    export type AfterCompletion = Stripe.PaymentLinkCreateParams.AfterCompletion;
    export type AutomaticTax = Stripe.PaymentLinkCreateParams.AutomaticTax;
    export type BillingAddressCollection = Stripe.PaymentLinkCreateParams.BillingAddressCollection;
    export type ConsentCollection = Stripe.PaymentLinkCreateParams.ConsentCollection;
    export type CustomField = Stripe.PaymentLinkCreateParams.CustomField;
    export type CustomText = Stripe.PaymentLinkCreateParams.CustomText;
    export type CustomerCreation = Stripe.PaymentLinkCreateParams.CustomerCreation;
    export type InvoiceCreation = Stripe.PaymentLinkCreateParams.InvoiceCreation;
    export type ManagedPayments = Stripe.PaymentLinkCreateParams.ManagedPayments;
    export type NameCollection = Stripe.PaymentLinkCreateParams.NameCollection;
    export type OptionalItem = Stripe.PaymentLinkCreateParams.OptionalItem;
    export type PaymentIntentData = Stripe.PaymentLinkCreateParams.PaymentIntentData;
    export type PaymentMethodCollection = Stripe.PaymentLinkCreateParams.PaymentMethodCollection;
    export type PaymentMethodOptions = Stripe.PaymentLinkCreateParams.PaymentMethodOptions;
    export type PaymentMethodType = Stripe.PaymentLinkCreateParams.PaymentMethodType;
    export type PhoneNumberCollection = Stripe.PaymentLinkCreateParams.PhoneNumberCollection;
    export type Restrictions = Stripe.PaymentLinkCreateParams.Restrictions;
    export type ShippingAddressCollection = Stripe.PaymentLinkCreateParams.ShippingAddressCollection;
    export type ShippingOption = Stripe.PaymentLinkCreateParams.ShippingOption;
    export type SubmitType = Stripe.PaymentLinkCreateParams.SubmitType;
    export type SubscriptionData = Stripe.PaymentLinkCreateParams.SubscriptionData;
    export type TaxIdCollection = Stripe.PaymentLinkCreateParams.TaxIdCollection;
    export type TransferData = Stripe.PaymentLinkCreateParams.TransferData;
    export namespace AfterCompletion {
      export type HostedConfirmation = Stripe.PaymentLinkCreateParams.AfterCompletion.HostedConfirmation;
      export type Redirect = Stripe.PaymentLinkCreateParams.AfterCompletion.Redirect;
      export type Type = Stripe.PaymentLinkCreateParams.AfterCompletion.Type;
    }
    export namespace AutomaticTax {
      export type Liability = Stripe.PaymentLinkCreateParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe.PaymentLinkCreateParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace ConsentCollection {
      export type PaymentMethodReuseAgreement = Stripe.PaymentLinkCreateParams.ConsentCollection.PaymentMethodReuseAgreement;
      export type Promotions = Stripe.PaymentLinkCreateParams.ConsentCollection.Promotions;
      export type TermsOfService = Stripe.PaymentLinkCreateParams.ConsentCollection.TermsOfService;
      export namespace PaymentMethodReuseAgreement {
        export type Position = Stripe.PaymentLinkCreateParams.ConsentCollection.PaymentMethodReuseAgreement.Position;
      }
    }
    export namespace CustomField {
      export type Dropdown = Stripe.PaymentLinkCreateParams.CustomField.Dropdown;
      export type Label = Stripe.PaymentLinkCreateParams.CustomField.Label;
      export type Numeric = Stripe.PaymentLinkCreateParams.CustomField.Numeric;
      export type Text = Stripe.PaymentLinkCreateParams.CustomField.Text;
      export type Type = Stripe.PaymentLinkCreateParams.CustomField.Type;
      export namespace Dropdown {
        export type Option = Stripe.PaymentLinkCreateParams.CustomField.Dropdown.Option;
      }
    }
    export namespace CustomText {
      export type AfterSubmit = Stripe.PaymentLinkCreateParams.CustomText.AfterSubmit;
      export type ShippingAddress = Stripe.PaymentLinkCreateParams.CustomText.ShippingAddress;
      export type Submit = Stripe.PaymentLinkCreateParams.CustomText.Submit;
      export type TermsOfServiceAcceptance = Stripe.PaymentLinkCreateParams.CustomText.TermsOfServiceAcceptance;
    }
    export namespace InvoiceCreation {
      export type InvoiceData = Stripe.PaymentLinkCreateParams.InvoiceCreation.InvoiceData;
      export namespace InvoiceData {
        export type CustomField = Stripe.PaymentLinkCreateParams.InvoiceCreation.InvoiceData.CustomField;
        export type Issuer = Stripe.PaymentLinkCreateParams.InvoiceCreation.InvoiceData.Issuer;
        export type RenderingOptions = Stripe.PaymentLinkCreateParams.InvoiceCreation.InvoiceData.RenderingOptions;
        export namespace Issuer {
          export type Type = Stripe.PaymentLinkCreateParams.InvoiceCreation.InvoiceData.Issuer.Type;
        }
        export namespace RenderingOptions {
          export type AmountTaxDisplay = Stripe.PaymentLinkCreateParams.InvoiceCreation.InvoiceData.RenderingOptions.AmountTaxDisplay;
        }
      }
    }
    export namespace LineItem {
      export type AdjustableQuantity = Stripe.PaymentLinkCreateParams.LineItem.AdjustableQuantity;
      export type PriceData = Stripe.PaymentLinkCreateParams.LineItem.PriceData;
      export namespace PriceData {
        export type ProductData = Stripe.PaymentLinkCreateParams.LineItem.PriceData.ProductData;
        export type Recurring = Stripe.PaymentLinkCreateParams.LineItem.PriceData.Recurring;
        export type TaxBehavior = Stripe.PaymentLinkCreateParams.LineItem.PriceData.TaxBehavior;
        export namespace Recurring {
          export type Interval = Stripe.PaymentLinkCreateParams.LineItem.PriceData.Recurring.Interval;
        }
      }
    }
    export namespace NameCollection {
      export type Business = Stripe.PaymentLinkCreateParams.NameCollection.Business;
      export type Individual = Stripe.PaymentLinkCreateParams.NameCollection.Individual;
    }
    export namespace OptionalItem {
      export type AdjustableQuantity = Stripe.PaymentLinkCreateParams.OptionalItem.AdjustableQuantity;
    }
    export namespace PaymentIntentData {
      export type CaptureMethod = Stripe.PaymentLinkCreateParams.PaymentIntentData.CaptureMethod;
      export type SetupFutureUsage = Stripe.PaymentLinkCreateParams.PaymentIntentData.SetupFutureUsage;
    }
    export namespace PaymentMethodOptions {
      export type Card = Stripe.PaymentLinkCreateParams.PaymentMethodOptions.Card;
      export namespace Card {
        export type Restrictions = Stripe.PaymentLinkCreateParams.PaymentMethodOptions.Card.Restrictions;
        export namespace Restrictions {
          export type BrandsBlocked = Stripe.PaymentLinkCreateParams.PaymentMethodOptions.Card.Restrictions.BrandsBlocked;
        }
      }
    }
    export namespace Restrictions {
      export type CompletedSessions = Stripe.PaymentLinkCreateParams.Restrictions.CompletedSessions;
    }
    export namespace ShippingAddressCollection {
      export type AllowedCountry = Stripe.PaymentLinkCreateParams.ShippingAddressCollection.AllowedCountry;
    }
    export namespace SubscriptionData {
      export type InvoiceSettings = Stripe.PaymentLinkCreateParams.SubscriptionData.InvoiceSettings;
      export type TrialSettings = Stripe.PaymentLinkCreateParams.SubscriptionData.TrialSettings;
      export namespace InvoiceSettings {
        export type Issuer = Stripe.PaymentLinkCreateParams.SubscriptionData.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe.PaymentLinkCreateParams.SubscriptionData.InvoiceSettings.Issuer.Type;
        }
      }
      export namespace TrialSettings {
        export type EndBehavior = Stripe.PaymentLinkCreateParams.SubscriptionData.TrialSettings.EndBehavior;
        export namespace EndBehavior {
          export type MissingPaymentMethod = Stripe.PaymentLinkCreateParams.SubscriptionData.TrialSettings.EndBehavior.MissingPaymentMethod;
        }
      }
    }
    export namespace TaxIdCollection {
      export type Required = Stripe.PaymentLinkCreateParams.TaxIdCollection.Required;
    }
  }
  export namespace PaymentLinkUpdateParams {
    export type AfterCompletion = Stripe.PaymentLinkUpdateParams.AfterCompletion;
    export type AutomaticTax = Stripe.PaymentLinkUpdateParams.AutomaticTax;
    export type BillingAddressCollection = Stripe.PaymentLinkUpdateParams.BillingAddressCollection;
    export type CustomField = Stripe.PaymentLinkUpdateParams.CustomField;
    export type CustomText = Stripe.PaymentLinkUpdateParams.CustomText;
    export type CustomerCreation = Stripe.PaymentLinkUpdateParams.CustomerCreation;
    export type InvoiceCreation = Stripe.PaymentLinkUpdateParams.InvoiceCreation;
    export type LineItem = Stripe.PaymentLinkUpdateParams.LineItem;
    export type NameCollection = Stripe.PaymentLinkUpdateParams.NameCollection;
    export type OptionalItem = Stripe.PaymentLinkUpdateParams.OptionalItem;
    export type PaymentIntentData = Stripe.PaymentLinkUpdateParams.PaymentIntentData;
    export type PaymentMethodCollection = Stripe.PaymentLinkUpdateParams.PaymentMethodCollection;
    export type PaymentMethodOptions = Stripe.PaymentLinkUpdateParams.PaymentMethodOptions;
    export type PaymentMethodType = Stripe.PaymentLinkUpdateParams.PaymentMethodType;
    export type PhoneNumberCollection = Stripe.PaymentLinkUpdateParams.PhoneNumberCollection;
    export type Restrictions = Stripe.PaymentLinkUpdateParams.Restrictions;
    export type ShippingAddressCollection = Stripe.PaymentLinkUpdateParams.ShippingAddressCollection;
    export type SubmitType = Stripe.PaymentLinkUpdateParams.SubmitType;
    export type SubscriptionData = Stripe.PaymentLinkUpdateParams.SubscriptionData;
    export type TaxIdCollection = Stripe.PaymentLinkUpdateParams.TaxIdCollection;
    export namespace AfterCompletion {
      export type HostedConfirmation = Stripe.PaymentLinkUpdateParams.AfterCompletion.HostedConfirmation;
      export type Redirect = Stripe.PaymentLinkUpdateParams.AfterCompletion.Redirect;
      export type Type = Stripe.PaymentLinkUpdateParams.AfterCompletion.Type;
    }
    export namespace AutomaticTax {
      export type Liability = Stripe.PaymentLinkUpdateParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe.PaymentLinkUpdateParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace CustomField {
      export type Dropdown = Stripe.PaymentLinkUpdateParams.CustomField.Dropdown;
      export type Label = Stripe.PaymentLinkUpdateParams.CustomField.Label;
      export type Numeric = Stripe.PaymentLinkUpdateParams.CustomField.Numeric;
      export type Text = Stripe.PaymentLinkUpdateParams.CustomField.Text;
      export type Type = Stripe.PaymentLinkUpdateParams.CustomField.Type;
      export namespace Dropdown {
        export type Option = Stripe.PaymentLinkUpdateParams.CustomField.Dropdown.Option;
      }
    }
    export namespace CustomText {
      export type AfterSubmit = Stripe.PaymentLinkUpdateParams.CustomText.AfterSubmit;
      export type ShippingAddress = Stripe.PaymentLinkUpdateParams.CustomText.ShippingAddress;
      export type Submit = Stripe.PaymentLinkUpdateParams.CustomText.Submit;
      export type TermsOfServiceAcceptance = Stripe.PaymentLinkUpdateParams.CustomText.TermsOfServiceAcceptance;
    }
    export namespace InvoiceCreation {
      export type InvoiceData = Stripe.PaymentLinkUpdateParams.InvoiceCreation.InvoiceData;
      export namespace InvoiceData {
        export type CustomField = Stripe.PaymentLinkUpdateParams.InvoiceCreation.InvoiceData.CustomField;
        export type Issuer = Stripe.PaymentLinkUpdateParams.InvoiceCreation.InvoiceData.Issuer;
        export type RenderingOptions = Stripe.PaymentLinkUpdateParams.InvoiceCreation.InvoiceData.RenderingOptions;
        export namespace Issuer {
          export type Type = Stripe.PaymentLinkUpdateParams.InvoiceCreation.InvoiceData.Issuer.Type;
        }
        export namespace RenderingOptions {
          export type AmountTaxDisplay = Stripe.PaymentLinkUpdateParams.InvoiceCreation.InvoiceData.RenderingOptions.AmountTaxDisplay;
        }
      }
    }
    export namespace LineItem {
      export type AdjustableQuantity = Stripe.PaymentLinkUpdateParams.LineItem.AdjustableQuantity;
    }
    export namespace NameCollection {
      export type Business = Stripe.PaymentLinkUpdateParams.NameCollection.Business;
      export type Individual = Stripe.PaymentLinkUpdateParams.NameCollection.Individual;
    }
    export namespace OptionalItem {
      export type AdjustableQuantity = Stripe.PaymentLinkUpdateParams.OptionalItem.AdjustableQuantity;
    }
    export namespace PaymentMethodOptions {
      export type Card = Stripe.PaymentLinkUpdateParams.PaymentMethodOptions.Card;
      export namespace Card {
        export type Restrictions = Stripe.PaymentLinkUpdateParams.PaymentMethodOptions.Card.Restrictions;
        export namespace Restrictions {
          export type BrandsBlocked = Stripe.PaymentLinkUpdateParams.PaymentMethodOptions.Card.Restrictions.BrandsBlocked;
        }
      }
    }
    export namespace Restrictions {
      export type CompletedSessions = Stripe.PaymentLinkUpdateParams.Restrictions.CompletedSessions;
    }
    export namespace ShippingAddressCollection {
      export type AllowedCountry = Stripe.PaymentLinkUpdateParams.ShippingAddressCollection.AllowedCountry;
    }
    export namespace SubscriptionData {
      export type InvoiceSettings = Stripe.PaymentLinkUpdateParams.SubscriptionData.InvoiceSettings;
      export type TrialSettings = Stripe.PaymentLinkUpdateParams.SubscriptionData.TrialSettings;
      export namespace InvoiceSettings {
        export type Issuer = Stripe.PaymentLinkUpdateParams.SubscriptionData.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe.PaymentLinkUpdateParams.SubscriptionData.InvoiceSettings.Issuer.Type;
        }
      }
      export namespace TrialSettings {
        export type EndBehavior = Stripe.PaymentLinkUpdateParams.SubscriptionData.TrialSettings.EndBehavior;
        export namespace EndBehavior {
          export type MissingPaymentMethod = Stripe.PaymentLinkUpdateParams.SubscriptionData.TrialSettings.EndBehavior.MissingPaymentMethod;
        }
      }
    }
    export namespace TaxIdCollection {
      export type Required = Stripe.PaymentLinkUpdateParams.TaxIdCollection.Required;
    }
  }
  export namespace PaymentLink {
    export type AfterCompletion = Stripe.PaymentLink.AfterCompletion;
    export type AutomaticTax = Stripe.PaymentLink.AutomaticTax;
    export type BillingAddressCollection = Stripe.PaymentLink.BillingAddressCollection;
    export type ConsentCollection = Stripe.PaymentLink.ConsentCollection;
    export type CustomField = Stripe.PaymentLink.CustomField;
    export type CustomText = Stripe.PaymentLink.CustomText;
    export type CustomerCreation = Stripe.PaymentLink.CustomerCreation;
    export type InvoiceCreation = Stripe.PaymentLink.InvoiceCreation;
    export type ManagedPayments = Stripe.PaymentLink.ManagedPayments;
    export type NameCollection = Stripe.PaymentLink.NameCollection;
    export type OptionalItem = Stripe.PaymentLink.OptionalItem;
    export type PaymentIntentData = Stripe.PaymentLink.PaymentIntentData;
    export type PaymentMethodCollection = Stripe.PaymentLink.PaymentMethodCollection;
    export type PaymentMethodOptions = Stripe.PaymentLink.PaymentMethodOptions;
    export type PaymentMethodType = Stripe.PaymentLink.PaymentMethodType;
    export type PhoneNumberCollection = Stripe.PaymentLink.PhoneNumberCollection;
    export type Restrictions = Stripe.PaymentLink.Restrictions;
    export type ShippingAddressCollection = Stripe.PaymentLink.ShippingAddressCollection;
    export type ShippingOption = Stripe.PaymentLink.ShippingOption;
    export type SubmitType = Stripe.PaymentLink.SubmitType;
    export type SubscriptionData = Stripe.PaymentLink.SubscriptionData;
    export type TaxIdCollection = Stripe.PaymentLink.TaxIdCollection;
    export type TransferData = Stripe.PaymentLink.TransferData;
    export namespace AfterCompletion {
      export type HostedConfirmation = Stripe.PaymentLink.AfterCompletion.HostedConfirmation;
      export type Redirect = Stripe.PaymentLink.AfterCompletion.Redirect;
      export type Type = Stripe.PaymentLink.AfterCompletion.Type;
    }
    export namespace AutomaticTax {
      export type Liability = Stripe.PaymentLink.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe.PaymentLink.AutomaticTax.Liability.Type;
      }
    }
    export namespace ConsentCollection {
      export type PaymentMethodReuseAgreement = Stripe.PaymentLink.ConsentCollection.PaymentMethodReuseAgreement;
      export type Promotions = Stripe.PaymentLink.ConsentCollection.Promotions;
      export type TermsOfService = Stripe.PaymentLink.ConsentCollection.TermsOfService;
      export namespace PaymentMethodReuseAgreement {
        export type Position = Stripe.PaymentLink.ConsentCollection.PaymentMethodReuseAgreement.Position;
      }
    }
    export namespace CustomField {
      export type Dropdown = Stripe.PaymentLink.CustomField.Dropdown;
      export type Label = Stripe.PaymentLink.CustomField.Label;
      export type Numeric = Stripe.PaymentLink.CustomField.Numeric;
      export type Text = Stripe.PaymentLink.CustomField.Text;
      export type Type = Stripe.PaymentLink.CustomField.Type;
      export namespace Dropdown {
        export type Option = Stripe.PaymentLink.CustomField.Dropdown.Option;
      }
    }
    export namespace CustomText {
      export type AfterSubmit = Stripe.PaymentLink.CustomText.AfterSubmit;
      export type ShippingAddress = Stripe.PaymentLink.CustomText.ShippingAddress;
      export type Submit = Stripe.PaymentLink.CustomText.Submit;
      export type TermsOfServiceAcceptance = Stripe.PaymentLink.CustomText.TermsOfServiceAcceptance;
    }
    export namespace InvoiceCreation {
      export type InvoiceData = Stripe.PaymentLink.InvoiceCreation.InvoiceData;
      export namespace InvoiceData {
        export type CustomField = Stripe.PaymentLink.InvoiceCreation.InvoiceData.CustomField;
        export type Issuer = Stripe.PaymentLink.InvoiceCreation.InvoiceData.Issuer;
        export type RenderingOptions = Stripe.PaymentLink.InvoiceCreation.InvoiceData.RenderingOptions;
        export namespace Issuer {
          export type Type = Stripe.PaymentLink.InvoiceCreation.InvoiceData.Issuer.Type;
        }
      }
    }
    export namespace NameCollection {
      export type Business = Stripe.PaymentLink.NameCollection.Business;
      export type Individual = Stripe.PaymentLink.NameCollection.Individual;
    }
    export namespace OptionalItem {
      export type AdjustableQuantity = Stripe.PaymentLink.OptionalItem.AdjustableQuantity;
    }
    export namespace PaymentIntentData {
      export type CaptureMethod = Stripe.PaymentLink.PaymentIntentData.CaptureMethod;
      export type SetupFutureUsage = Stripe.PaymentLink.PaymentIntentData.SetupFutureUsage;
    }
    export namespace PaymentMethodOptions {
      export type Card = Stripe.PaymentLink.PaymentMethodOptions.Card;
      export namespace Card {
        export type Restrictions = Stripe.PaymentLink.PaymentMethodOptions.Card.Restrictions;
        export namespace Restrictions {
          export type BrandsBlocked = Stripe.PaymentLink.PaymentMethodOptions.Card.Restrictions.BrandsBlocked;
        }
      }
    }
    export namespace Restrictions {
      export type CompletedSessions = Stripe.PaymentLink.Restrictions.CompletedSessions;
    }
    export namespace ShippingAddressCollection {
      export type AllowedCountry = Stripe.PaymentLink.ShippingAddressCollection.AllowedCountry;
    }
    export namespace SubscriptionData {
      export type InvoiceSettings = Stripe.PaymentLink.SubscriptionData.InvoiceSettings;
      export type TrialSettings = Stripe.PaymentLink.SubscriptionData.TrialSettings;
      export namespace InvoiceSettings {
        export type Issuer = Stripe.PaymentLink.SubscriptionData.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe.PaymentLink.SubscriptionData.InvoiceSettings.Issuer.Type;
        }
      }
      export namespace TrialSettings {
        export type EndBehavior = Stripe.PaymentLink.SubscriptionData.TrialSettings.EndBehavior;
        export namespace EndBehavior {
          export type MissingPaymentMethod = Stripe.PaymentLink.SubscriptionData.TrialSettings.EndBehavior.MissingPaymentMethod;
        }
      }
    }
    export namespace TaxIdCollection {
      export type Required = Stripe.PaymentLink.TaxIdCollection.Required;
    }
  }
  export namespace PaymentMethodCreateParams {
    export type AcssDebit = Stripe.PaymentMethodCreateParams.AcssDebit;
    export type Affirm = Stripe.PaymentMethodCreateParams.Affirm;
    export type AfterpayClearpay = Stripe.PaymentMethodCreateParams.AfterpayClearpay;
    export type Alipay = Stripe.PaymentMethodCreateParams.Alipay;
    export type AllowRedisplay = Stripe.PaymentMethodCreateParams.AllowRedisplay;
    export type Alma = Stripe.PaymentMethodCreateParams.Alma;
    export type AmazonPay = Stripe.PaymentMethodCreateParams.AmazonPay;
    export type AuBecsDebit = Stripe.PaymentMethodCreateParams.AuBecsDebit;
    export type BacsDebit = Stripe.PaymentMethodCreateParams.BacsDebit;
    export type Bancontact = Stripe.PaymentMethodCreateParams.Bancontact;
    export type Billie = Stripe.PaymentMethodCreateParams.Billie;
    export type BillingDetails = Stripe.PaymentMethodCreateParams.BillingDetails;
    export type Bizum = Stripe.PaymentMethodCreateParams.Bizum;
    export type Blik = Stripe.PaymentMethodCreateParams.Blik;
    export type Boleto = Stripe.PaymentMethodCreateParams.Boleto;
    export type Card = Stripe.PaymentMethodCreateParams.Card;
    export type Cashapp = Stripe.PaymentMethodCreateParams.Cashapp;
    export type Crypto = Stripe.PaymentMethodCreateParams.Crypto;
    export type Custom = Stripe.PaymentMethodCreateParams.Custom;
    export type CustomerBalance = Stripe.PaymentMethodCreateParams.CustomerBalance;
    export type Eps = Stripe.PaymentMethodCreateParams.Eps;
    export type Fpx = Stripe.PaymentMethodCreateParams.Fpx;
    export type Giropay = Stripe.PaymentMethodCreateParams.Giropay;
    export type Grabpay = Stripe.PaymentMethodCreateParams.Grabpay;
    export type Ideal = Stripe.PaymentMethodCreateParams.Ideal;
    export type InteracPresent = Stripe.PaymentMethodCreateParams.InteracPresent;
    export type KakaoPay = Stripe.PaymentMethodCreateParams.KakaoPay;
    export type Klarna = Stripe.PaymentMethodCreateParams.Klarna;
    export type Konbini = Stripe.PaymentMethodCreateParams.Konbini;
    export type KrCard = Stripe.PaymentMethodCreateParams.KrCard;
    export type Link = Stripe.PaymentMethodCreateParams.Link;
    export type MbWay = Stripe.PaymentMethodCreateParams.MbWay;
    export type Mobilepay = Stripe.PaymentMethodCreateParams.Mobilepay;
    export type Multibanco = Stripe.PaymentMethodCreateParams.Multibanco;
    export type NaverPay = Stripe.PaymentMethodCreateParams.NaverPay;
    export type NzBankAccount = Stripe.PaymentMethodCreateParams.NzBankAccount;
    export type Oxxo = Stripe.PaymentMethodCreateParams.Oxxo;
    export type P24 = Stripe.PaymentMethodCreateParams.P24;
    export type PayByBank = Stripe.PaymentMethodCreateParams.PayByBank;
    export type Payco = Stripe.PaymentMethodCreateParams.Payco;
    export type Paynow = Stripe.PaymentMethodCreateParams.Paynow;
    export type Paypal = Stripe.PaymentMethodCreateParams.Paypal;
    export type Payto = Stripe.PaymentMethodCreateParams.Payto;
    export type Pix = Stripe.PaymentMethodCreateParams.Pix;
    export type Promptpay = Stripe.PaymentMethodCreateParams.Promptpay;
    export type RadarOptions = Stripe.PaymentMethodCreateParams.RadarOptions;
    export type RevolutPay = Stripe.PaymentMethodCreateParams.RevolutPay;
    export type SamsungPay = Stripe.PaymentMethodCreateParams.SamsungPay;
    export type Satispay = Stripe.PaymentMethodCreateParams.Satispay;
    export type Scalapay = Stripe.PaymentMethodCreateParams.Scalapay;
    export type SepaDebit = Stripe.PaymentMethodCreateParams.SepaDebit;
    export type Sofort = Stripe.PaymentMethodCreateParams.Sofort;
    export type Sunbit = Stripe.PaymentMethodCreateParams.Sunbit;
    export type Swish = Stripe.PaymentMethodCreateParams.Swish;
    export type Twint = Stripe.PaymentMethodCreateParams.Twint;
    export type Type = Stripe.PaymentMethodCreateParams.Type;
    export type Upi = Stripe.PaymentMethodCreateParams.Upi;
    export type UsBankAccount = Stripe.PaymentMethodCreateParams.UsBankAccount;
    export type WechatPay = Stripe.PaymentMethodCreateParams.WechatPay;
    export type Zip = Stripe.PaymentMethodCreateParams.Zip;
    export namespace Card {
      export type Networks = Stripe.PaymentMethodCreateParams.Card.Networks;
      export namespace Networks {
        export type Preferred = Stripe.PaymentMethodCreateParams.Card.Networks.Preferred;
      }
    }
    export namespace Eps {
      export type Bank = Stripe.PaymentMethodCreateParams.Eps.Bank;
    }
    export namespace Fpx {
      export type AccountHolderType = Stripe.PaymentMethodCreateParams.Fpx.AccountHolderType;
      export type Bank = Stripe.PaymentMethodCreateParams.Fpx.Bank;
    }
    export namespace Ideal {
      export type Bank = Stripe.PaymentMethodCreateParams.Ideal.Bank;
    }
    export namespace Klarna {
      export type Dob = Stripe.PaymentMethodCreateParams.Klarna.Dob;
    }
    export namespace NaverPay {
      export type Funding = Stripe.PaymentMethodCreateParams.NaverPay.Funding;
    }
    export namespace P24 {
      export type Bank = Stripe.PaymentMethodCreateParams.P24.Bank;
    }
    export namespace Sofort {
      export type Country = Stripe.PaymentMethodCreateParams.Sofort.Country;
    }
    export namespace Upi {
      export type MandateOptions = Stripe.PaymentMethodCreateParams.Upi.MandateOptions;
      export namespace MandateOptions {
        export type AmountType = Stripe.PaymentMethodCreateParams.Upi.MandateOptions.AmountType;
      }
    }
    export namespace UsBankAccount {
      export type AccountHolderType = Stripe.PaymentMethodCreateParams.UsBankAccount.AccountHolderType;
      export type AccountType = Stripe.PaymentMethodCreateParams.UsBankAccount.AccountType;
    }
  }
  export namespace PaymentMethodUpdateParams {
    export type AllowRedisplay = Stripe.PaymentMethodUpdateParams.AllowRedisplay;
    export type BillingDetails = Stripe.PaymentMethodUpdateParams.BillingDetails;
    export type Card = Stripe.PaymentMethodUpdateParams.Card;
    export type Payto = Stripe.PaymentMethodUpdateParams.Payto;
    export type UsBankAccount = Stripe.PaymentMethodUpdateParams.UsBankAccount;
    export namespace Card {
      export type Networks = Stripe.PaymentMethodUpdateParams.Card.Networks;
      export namespace Networks {
        export type Preferred = Stripe.PaymentMethodUpdateParams.Card.Networks.Preferred;
      }
    }
    export namespace UsBankAccount {
      export type AccountHolderType = Stripe.PaymentMethodUpdateParams.UsBankAccount.AccountHolderType;
      export type AccountType = Stripe.PaymentMethodUpdateParams.UsBankAccount.AccountType;
    }
  }
  export namespace PaymentMethodListParams {
    export type AllowRedisplay = Stripe.PaymentMethodListParams.AllowRedisplay;
    export type Type = Stripe.PaymentMethodListParams.Type;
  }
  export namespace PaymentMethod {
    export type AcssDebit = Stripe.PaymentMethod.AcssDebit;
    export type Affirm = Stripe.PaymentMethod.Affirm;
    export type AfterpayClearpay = Stripe.PaymentMethod.AfterpayClearpay;
    export type Alipay = Stripe.PaymentMethod.Alipay;
    export type AllowRedisplay = Stripe.PaymentMethod.AllowRedisplay;
    export type Alma = Stripe.PaymentMethod.Alma;
    export type AmazonPay = Stripe.PaymentMethod.AmazonPay;
    export type AuBecsDebit = Stripe.PaymentMethod.AuBecsDebit;
    export type BacsDebit = Stripe.PaymentMethod.BacsDebit;
    export type Bancontact = Stripe.PaymentMethod.Bancontact;
    export type Billie = Stripe.PaymentMethod.Billie;
    export type BillingDetails = Stripe.PaymentMethod.BillingDetails;
    export type Bizum = Stripe.PaymentMethod.Bizum;
    export type Blik = Stripe.PaymentMethod.Blik;
    export type Boleto = Stripe.PaymentMethod.Boleto;
    export type Card = Stripe.PaymentMethod.Card;
    export type CardPresent = Stripe.PaymentMethod.CardPresent;
    export type Cashapp = Stripe.PaymentMethod.Cashapp;
    export type Crypto = Stripe.PaymentMethod.Crypto;
    export type Custom = Stripe.PaymentMethod.Custom;
    export type CustomerBalance = Stripe.PaymentMethod.CustomerBalance;
    export type Eps = Stripe.PaymentMethod.Eps;
    export type Fpx = Stripe.PaymentMethod.Fpx;
    export type Giropay = Stripe.PaymentMethod.Giropay;
    export type Grabpay = Stripe.PaymentMethod.Grabpay;
    export type Ideal = Stripe.PaymentMethod.Ideal;
    export type InteracPresent = Stripe.PaymentMethod.InteracPresent;
    export type KakaoPay = Stripe.PaymentMethod.KakaoPay;
    export type Klarna = Stripe.PaymentMethod.Klarna;
    export type Konbini = Stripe.PaymentMethod.Konbini;
    export type KrCard = Stripe.PaymentMethod.KrCard;
    export type Link = Stripe.PaymentMethod.Link;
    export type MbWay = Stripe.PaymentMethod.MbWay;
    export type Mobilepay = Stripe.PaymentMethod.Mobilepay;
    export type Multibanco = Stripe.PaymentMethod.Multibanco;
    export type NaverPay = Stripe.PaymentMethod.NaverPay;
    export type NzBankAccount = Stripe.PaymentMethod.NzBankAccount;
    export type Oxxo = Stripe.PaymentMethod.Oxxo;
    export type P24 = Stripe.PaymentMethod.P24;
    export type PayByBank = Stripe.PaymentMethod.PayByBank;
    export type Payco = Stripe.PaymentMethod.Payco;
    export type Paynow = Stripe.PaymentMethod.Paynow;
    export type Paypal = Stripe.PaymentMethod.Paypal;
    export type Payto = Stripe.PaymentMethod.Payto;
    export type Pix = Stripe.PaymentMethod.Pix;
    export type Promptpay = Stripe.PaymentMethod.Promptpay;
    export type RadarOptions = Stripe.PaymentMethod.RadarOptions;
    export type RevolutPay = Stripe.PaymentMethod.RevolutPay;
    export type SamsungPay = Stripe.PaymentMethod.SamsungPay;
    export type Satispay = Stripe.PaymentMethod.Satispay;
    export type Scalapay = Stripe.PaymentMethod.Scalapay;
    export type SepaDebit = Stripe.PaymentMethod.SepaDebit;
    export type Sofort = Stripe.PaymentMethod.Sofort;
    export type Sunbit = Stripe.PaymentMethod.Sunbit;
    export type Swish = Stripe.PaymentMethod.Swish;
    export type Twint = Stripe.PaymentMethod.Twint;
    export type Type = Stripe.PaymentMethod.Type;
    export type Upi = Stripe.PaymentMethod.Upi;
    export type UsBankAccount = Stripe.PaymentMethod.UsBankAccount;
    export type WechatPay = Stripe.PaymentMethod.WechatPay;
    export type Zip = Stripe.PaymentMethod.Zip;
    export namespace Card {
      export type Checks = Stripe.PaymentMethod.Card.Checks;
      export type GeneratedFrom = Stripe.PaymentMethod.Card.GeneratedFrom;
      export type Networks = Stripe.PaymentMethod.Card.Networks;
      export type RegulatedStatus = Stripe.PaymentMethod.Card.RegulatedStatus;
      export type ThreeDSecureUsage = Stripe.PaymentMethod.Card.ThreeDSecureUsage;
      export type Wallet = Stripe.PaymentMethod.Card.Wallet;
      export namespace GeneratedFrom {
        export type PaymentMethodDetails = Stripe.PaymentMethod.Card.GeneratedFrom.PaymentMethodDetails;
        export namespace PaymentMethodDetails {
          export type CardPresent = Stripe.PaymentMethod.Card.GeneratedFrom.PaymentMethodDetails.CardPresent;
          export namespace CardPresent {
            export type Offline = Stripe.PaymentMethod.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Offline;
            export type ReadMethod = Stripe.PaymentMethod.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.ReadMethod;
            export type Receipt = Stripe.PaymentMethod.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Receipt;
            export type Wallet = Stripe.PaymentMethod.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Wallet;
            export namespace Receipt {
              export type AccountType = Stripe.PaymentMethod.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Receipt.AccountType;
            }
            export namespace Wallet {
              export type Type = Stripe.PaymentMethod.Card.GeneratedFrom.PaymentMethodDetails.CardPresent.Wallet.Type;
            }
          }
        }
      }
      export namespace Wallet {
        export type AmexExpressCheckout = Stripe.PaymentMethod.Card.Wallet.AmexExpressCheckout;
        export type ApplePay = Stripe.PaymentMethod.Card.Wallet.ApplePay;
        export type GooglePay = Stripe.PaymentMethod.Card.Wallet.GooglePay;
        export type Link = Stripe.PaymentMethod.Card.Wallet.Link;
        export type Masterpass = Stripe.PaymentMethod.Card.Wallet.Masterpass;
        export type SamsungPay = Stripe.PaymentMethod.Card.Wallet.SamsungPay;
        export type Type = Stripe.PaymentMethod.Card.Wallet.Type;
        export type VisaCheckout = Stripe.PaymentMethod.Card.Wallet.VisaCheckout;
      }
    }
    export namespace CardPresent {
      export type Networks = Stripe.PaymentMethod.CardPresent.Networks;
      export type Offline = Stripe.PaymentMethod.CardPresent.Offline;
      export type ReadMethod = Stripe.PaymentMethod.CardPresent.ReadMethod;
      export type Wallet = Stripe.PaymentMethod.CardPresent.Wallet;
      export namespace Wallet {
        export type Type = Stripe.PaymentMethod.CardPresent.Wallet.Type;
      }
    }
    export namespace Custom {
      export type Logo = Stripe.PaymentMethod.Custom.Logo;
    }
    export namespace Eps {
      export type Bank = Stripe.PaymentMethod.Eps.Bank;
    }
    export namespace Fpx {
      export type AccountHolderType = Stripe.PaymentMethod.Fpx.AccountHolderType;
      export type Bank = Stripe.PaymentMethod.Fpx.Bank;
    }
    export namespace Ideal {
      export type Bank = Stripe.PaymentMethod.Ideal.Bank;
      export type Bic = Stripe.PaymentMethod.Ideal.Bic;
    }
    export namespace InteracPresent {
      export type Networks = Stripe.PaymentMethod.InteracPresent.Networks;
      export type ReadMethod = Stripe.PaymentMethod.InteracPresent.ReadMethod;
    }
    export namespace Klarna {
      export type Dob = Stripe.PaymentMethod.Klarna.Dob;
    }
    export namespace KrCard {
      export type Brand = Stripe.PaymentMethod.KrCard.Brand;
    }
    export namespace NaverPay {
      export type Funding = Stripe.PaymentMethod.NaverPay.Funding;
    }
    export namespace P24 {
      export type Bank = Stripe.PaymentMethod.P24.Bank;
    }
    export namespace SepaDebit {
      export type GeneratedFrom = Stripe.PaymentMethod.SepaDebit.GeneratedFrom;
    }
    export namespace UsBankAccount {
      export type AccountHolderType = Stripe.PaymentMethod.UsBankAccount.AccountHolderType;
      export type AccountType = Stripe.PaymentMethod.UsBankAccount.AccountType;
      export type Networks = Stripe.PaymentMethod.UsBankAccount.Networks;
      export type StatusDetails = Stripe.PaymentMethod.UsBankAccount.StatusDetails;
      export namespace Networks {
        export type Supported = Stripe.PaymentMethod.UsBankAccount.Networks.Supported;
      }
      export namespace StatusDetails {
        export type Blocked = Stripe.PaymentMethod.UsBankAccount.StatusDetails.Blocked;
        export namespace Blocked {
          export type NetworkCode = Stripe.PaymentMethod.UsBankAccount.StatusDetails.Blocked.NetworkCode;
          export type Reason = Stripe.PaymentMethod.UsBankAccount.StatusDetails.Blocked.Reason;
        }
      }
    }
  }
  export namespace PaymentMethodConfigurationCreateParams {
    export type AcssDebit = Stripe.PaymentMethodConfigurationCreateParams.AcssDebit;
    export type Affirm = Stripe.PaymentMethodConfigurationCreateParams.Affirm;
    export type AfterpayClearpay = Stripe.PaymentMethodConfigurationCreateParams.AfterpayClearpay;
    export type Alipay = Stripe.PaymentMethodConfigurationCreateParams.Alipay;
    export type Alma = Stripe.PaymentMethodConfigurationCreateParams.Alma;
    export type AmazonPay = Stripe.PaymentMethodConfigurationCreateParams.AmazonPay;
    export type ApplePay = Stripe.PaymentMethodConfigurationCreateParams.ApplePay;
    export type ApplePayLater = Stripe.PaymentMethodConfigurationCreateParams.ApplePayLater;
    export type AuBecsDebit = Stripe.PaymentMethodConfigurationCreateParams.AuBecsDebit;
    export type BacsDebit = Stripe.PaymentMethodConfigurationCreateParams.BacsDebit;
    export type Bancontact = Stripe.PaymentMethodConfigurationCreateParams.Bancontact;
    export type Billie = Stripe.PaymentMethodConfigurationCreateParams.Billie;
    export type Bizum = Stripe.PaymentMethodConfigurationCreateParams.Bizum;
    export type Blik = Stripe.PaymentMethodConfigurationCreateParams.Blik;
    export type Boleto = Stripe.PaymentMethodConfigurationCreateParams.Boleto;
    export type Card = Stripe.PaymentMethodConfigurationCreateParams.Card;
    export type CartesBancaires = Stripe.PaymentMethodConfigurationCreateParams.CartesBancaires;
    export type Cashapp = Stripe.PaymentMethodConfigurationCreateParams.Cashapp;
    export type Crypto = Stripe.PaymentMethodConfigurationCreateParams.Crypto;
    export type CustomerBalance = Stripe.PaymentMethodConfigurationCreateParams.CustomerBalance;
    export type Eps = Stripe.PaymentMethodConfigurationCreateParams.Eps;
    export type Fpx = Stripe.PaymentMethodConfigurationCreateParams.Fpx;
    export type FrMealVoucherConecs = Stripe.PaymentMethodConfigurationCreateParams.FrMealVoucherConecs;
    export type Giropay = Stripe.PaymentMethodConfigurationCreateParams.Giropay;
    export type GooglePay = Stripe.PaymentMethodConfigurationCreateParams.GooglePay;
    export type Grabpay = Stripe.PaymentMethodConfigurationCreateParams.Grabpay;
    export type Ideal = Stripe.PaymentMethodConfigurationCreateParams.Ideal;
    export type Jcb = Stripe.PaymentMethodConfigurationCreateParams.Jcb;
    export type KakaoPay = Stripe.PaymentMethodConfigurationCreateParams.KakaoPay;
    export type Klarna = Stripe.PaymentMethodConfigurationCreateParams.Klarna;
    export type Konbini = Stripe.PaymentMethodConfigurationCreateParams.Konbini;
    export type KrCard = Stripe.PaymentMethodConfigurationCreateParams.KrCard;
    export type Link = Stripe.PaymentMethodConfigurationCreateParams.Link;
    export type MbWay = Stripe.PaymentMethodConfigurationCreateParams.MbWay;
    export type Mobilepay = Stripe.PaymentMethodConfigurationCreateParams.Mobilepay;
    export type Multibanco = Stripe.PaymentMethodConfigurationCreateParams.Multibanco;
    export type NaverPay = Stripe.PaymentMethodConfigurationCreateParams.NaverPay;
    export type NzBankAccount = Stripe.PaymentMethodConfigurationCreateParams.NzBankAccount;
    export type Oxxo = Stripe.PaymentMethodConfigurationCreateParams.Oxxo;
    export type P24 = Stripe.PaymentMethodConfigurationCreateParams.P24;
    export type PayByBank = Stripe.PaymentMethodConfigurationCreateParams.PayByBank;
    export type Payco = Stripe.PaymentMethodConfigurationCreateParams.Payco;
    export type Paynow = Stripe.PaymentMethodConfigurationCreateParams.Paynow;
    export type Paypal = Stripe.PaymentMethodConfigurationCreateParams.Paypal;
    export type Payto = Stripe.PaymentMethodConfigurationCreateParams.Payto;
    export type Pix = Stripe.PaymentMethodConfigurationCreateParams.Pix;
    export type Promptpay = Stripe.PaymentMethodConfigurationCreateParams.Promptpay;
    export type RevolutPay = Stripe.PaymentMethodConfigurationCreateParams.RevolutPay;
    export type SamsungPay = Stripe.PaymentMethodConfigurationCreateParams.SamsungPay;
    export type Satispay = Stripe.PaymentMethodConfigurationCreateParams.Satispay;
    export type Scalapay = Stripe.PaymentMethodConfigurationCreateParams.Scalapay;
    export type SepaDebit = Stripe.PaymentMethodConfigurationCreateParams.SepaDebit;
    export type Sofort = Stripe.PaymentMethodConfigurationCreateParams.Sofort;
    export type Sunbit = Stripe.PaymentMethodConfigurationCreateParams.Sunbit;
    export type Swish = Stripe.PaymentMethodConfigurationCreateParams.Swish;
    export type Twint = Stripe.PaymentMethodConfigurationCreateParams.Twint;
    export type Upi = Stripe.PaymentMethodConfigurationCreateParams.Upi;
    export type UsBankAccount = Stripe.PaymentMethodConfigurationCreateParams.UsBankAccount;
    export type WechatPay = Stripe.PaymentMethodConfigurationCreateParams.WechatPay;
    export type Zip = Stripe.PaymentMethodConfigurationCreateParams.Zip;
    export namespace AcssDebit {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.AcssDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.AcssDebit.DisplayPreference.Preference;
      }
    }
    export namespace Affirm {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Affirm.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Affirm.DisplayPreference.Preference;
      }
    }
    export namespace AfterpayClearpay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.AfterpayClearpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.AfterpayClearpay.DisplayPreference.Preference;
      }
    }
    export namespace Alipay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Alipay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Alipay.DisplayPreference.Preference;
      }
    }
    export namespace Alma {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Alma.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Alma.DisplayPreference.Preference;
      }
    }
    export namespace AmazonPay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.AmazonPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.AmazonPay.DisplayPreference.Preference;
      }
    }
    export namespace ApplePay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.ApplePay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.ApplePay.DisplayPreference.Preference;
      }
    }
    export namespace ApplePayLater {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.ApplePayLater.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.ApplePayLater.DisplayPreference.Preference;
      }
    }
    export namespace AuBecsDebit {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.AuBecsDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.AuBecsDebit.DisplayPreference.Preference;
      }
    }
    export namespace BacsDebit {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.BacsDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.BacsDebit.DisplayPreference.Preference;
      }
    }
    export namespace Bancontact {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Bancontact.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Bancontact.DisplayPreference.Preference;
      }
    }
    export namespace Billie {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Billie.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Billie.DisplayPreference.Preference;
      }
    }
    export namespace Bizum {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Bizum.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Bizum.DisplayPreference.Preference;
      }
    }
    export namespace Blik {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Blik.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Blik.DisplayPreference.Preference;
      }
    }
    export namespace Boleto {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Boleto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Boleto.DisplayPreference.Preference;
      }
    }
    export namespace Card {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Card.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Card.DisplayPreference.Preference;
      }
    }
    export namespace CartesBancaires {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.CartesBancaires.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.CartesBancaires.DisplayPreference.Preference;
      }
    }
    export namespace Cashapp {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Cashapp.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Cashapp.DisplayPreference.Preference;
      }
    }
    export namespace Crypto {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Crypto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Crypto.DisplayPreference.Preference;
      }
    }
    export namespace CustomerBalance {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.CustomerBalance.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.CustomerBalance.DisplayPreference.Preference;
      }
    }
    export namespace Eps {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Eps.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Eps.DisplayPreference.Preference;
      }
    }
    export namespace Fpx {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Fpx.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Fpx.DisplayPreference.Preference;
      }
    }
    export namespace FrMealVoucherConecs {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.FrMealVoucherConecs.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.FrMealVoucherConecs.DisplayPreference.Preference;
      }
    }
    export namespace Giropay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Giropay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Giropay.DisplayPreference.Preference;
      }
    }
    export namespace GooglePay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.GooglePay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.GooglePay.DisplayPreference.Preference;
      }
    }
    export namespace Grabpay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Grabpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Grabpay.DisplayPreference.Preference;
      }
    }
    export namespace Ideal {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Ideal.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Ideal.DisplayPreference.Preference;
      }
    }
    export namespace Jcb {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Jcb.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Jcb.DisplayPreference.Preference;
      }
    }
    export namespace KakaoPay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.KakaoPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.KakaoPay.DisplayPreference.Preference;
      }
    }
    export namespace Klarna {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Klarna.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Klarna.DisplayPreference.Preference;
      }
    }
    export namespace Konbini {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Konbini.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Konbini.DisplayPreference.Preference;
      }
    }
    export namespace KrCard {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.KrCard.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.KrCard.DisplayPreference.Preference;
      }
    }
    export namespace Link {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Link.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Link.DisplayPreference.Preference;
      }
    }
    export namespace MbWay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.MbWay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.MbWay.DisplayPreference.Preference;
      }
    }
    export namespace Mobilepay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Mobilepay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Mobilepay.DisplayPreference.Preference;
      }
    }
    export namespace Multibanco {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Multibanco.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Multibanco.DisplayPreference.Preference;
      }
    }
    export namespace NaverPay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.NaverPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.NaverPay.DisplayPreference.Preference;
      }
    }
    export namespace NzBankAccount {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.NzBankAccount.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.NzBankAccount.DisplayPreference.Preference;
      }
    }
    export namespace Oxxo {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Oxxo.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Oxxo.DisplayPreference.Preference;
      }
    }
    export namespace P24 {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.P24.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.P24.DisplayPreference.Preference;
      }
    }
    export namespace PayByBank {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.PayByBank.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.PayByBank.DisplayPreference.Preference;
      }
    }
    export namespace Payco {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Payco.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Payco.DisplayPreference.Preference;
      }
    }
    export namespace Paynow {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Paynow.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Paynow.DisplayPreference.Preference;
      }
    }
    export namespace Paypal {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Paypal.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Paypal.DisplayPreference.Preference;
      }
    }
    export namespace Payto {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Payto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Payto.DisplayPreference.Preference;
      }
    }
    export namespace Pix {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Pix.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Pix.DisplayPreference.Preference;
      }
    }
    export namespace Promptpay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Promptpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Promptpay.DisplayPreference.Preference;
      }
    }
    export namespace RevolutPay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.RevolutPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.RevolutPay.DisplayPreference.Preference;
      }
    }
    export namespace SamsungPay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.SamsungPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.SamsungPay.DisplayPreference.Preference;
      }
    }
    export namespace Satispay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Satispay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Satispay.DisplayPreference.Preference;
      }
    }
    export namespace Scalapay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Scalapay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Scalapay.DisplayPreference.Preference;
      }
    }
    export namespace SepaDebit {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.SepaDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.SepaDebit.DisplayPreference.Preference;
      }
    }
    export namespace Sofort {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Sofort.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Sofort.DisplayPreference.Preference;
      }
    }
    export namespace Sunbit {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Sunbit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Sunbit.DisplayPreference.Preference;
      }
    }
    export namespace Swish {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Swish.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Swish.DisplayPreference.Preference;
      }
    }
    export namespace Twint {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Twint.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Twint.DisplayPreference.Preference;
      }
    }
    export namespace Upi {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Upi.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Upi.DisplayPreference.Preference;
      }
    }
    export namespace UsBankAccount {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.UsBankAccount.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.UsBankAccount.DisplayPreference.Preference;
      }
    }
    export namespace WechatPay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.WechatPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.WechatPay.DisplayPreference.Preference;
      }
    }
    export namespace Zip {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationCreateParams.Zip.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationCreateParams.Zip.DisplayPreference.Preference;
      }
    }
  }
  export namespace PaymentMethodConfigurationUpdateParams {
    export type AcssDebit = Stripe.PaymentMethodConfigurationUpdateParams.AcssDebit;
    export type Affirm = Stripe.PaymentMethodConfigurationUpdateParams.Affirm;
    export type AfterpayClearpay = Stripe.PaymentMethodConfigurationUpdateParams.AfterpayClearpay;
    export type Alipay = Stripe.PaymentMethodConfigurationUpdateParams.Alipay;
    export type Alma = Stripe.PaymentMethodConfigurationUpdateParams.Alma;
    export type AmazonPay = Stripe.PaymentMethodConfigurationUpdateParams.AmazonPay;
    export type ApplePay = Stripe.PaymentMethodConfigurationUpdateParams.ApplePay;
    export type ApplePayLater = Stripe.PaymentMethodConfigurationUpdateParams.ApplePayLater;
    export type AuBecsDebit = Stripe.PaymentMethodConfigurationUpdateParams.AuBecsDebit;
    export type BacsDebit = Stripe.PaymentMethodConfigurationUpdateParams.BacsDebit;
    export type Bancontact = Stripe.PaymentMethodConfigurationUpdateParams.Bancontact;
    export type Billie = Stripe.PaymentMethodConfigurationUpdateParams.Billie;
    export type Bizum = Stripe.PaymentMethodConfigurationUpdateParams.Bizum;
    export type Blik = Stripe.PaymentMethodConfigurationUpdateParams.Blik;
    export type Boleto = Stripe.PaymentMethodConfigurationUpdateParams.Boleto;
    export type Card = Stripe.PaymentMethodConfigurationUpdateParams.Card;
    export type CartesBancaires = Stripe.PaymentMethodConfigurationUpdateParams.CartesBancaires;
    export type Cashapp = Stripe.PaymentMethodConfigurationUpdateParams.Cashapp;
    export type Crypto = Stripe.PaymentMethodConfigurationUpdateParams.Crypto;
    export type CustomerBalance = Stripe.PaymentMethodConfigurationUpdateParams.CustomerBalance;
    export type Eps = Stripe.PaymentMethodConfigurationUpdateParams.Eps;
    export type Fpx = Stripe.PaymentMethodConfigurationUpdateParams.Fpx;
    export type FrMealVoucherConecs = Stripe.PaymentMethodConfigurationUpdateParams.FrMealVoucherConecs;
    export type Giropay = Stripe.PaymentMethodConfigurationUpdateParams.Giropay;
    export type GooglePay = Stripe.PaymentMethodConfigurationUpdateParams.GooglePay;
    export type Grabpay = Stripe.PaymentMethodConfigurationUpdateParams.Grabpay;
    export type Ideal = Stripe.PaymentMethodConfigurationUpdateParams.Ideal;
    export type Jcb = Stripe.PaymentMethodConfigurationUpdateParams.Jcb;
    export type KakaoPay = Stripe.PaymentMethodConfigurationUpdateParams.KakaoPay;
    export type Klarna = Stripe.PaymentMethodConfigurationUpdateParams.Klarna;
    export type Konbini = Stripe.PaymentMethodConfigurationUpdateParams.Konbini;
    export type KrCard = Stripe.PaymentMethodConfigurationUpdateParams.KrCard;
    export type Link = Stripe.PaymentMethodConfigurationUpdateParams.Link;
    export type MbWay = Stripe.PaymentMethodConfigurationUpdateParams.MbWay;
    export type Mobilepay = Stripe.PaymentMethodConfigurationUpdateParams.Mobilepay;
    export type Multibanco = Stripe.PaymentMethodConfigurationUpdateParams.Multibanco;
    export type NaverPay = Stripe.PaymentMethodConfigurationUpdateParams.NaverPay;
    export type NzBankAccount = Stripe.PaymentMethodConfigurationUpdateParams.NzBankAccount;
    export type Oxxo = Stripe.PaymentMethodConfigurationUpdateParams.Oxxo;
    export type P24 = Stripe.PaymentMethodConfigurationUpdateParams.P24;
    export type PayByBank = Stripe.PaymentMethodConfigurationUpdateParams.PayByBank;
    export type Payco = Stripe.PaymentMethodConfigurationUpdateParams.Payco;
    export type Paynow = Stripe.PaymentMethodConfigurationUpdateParams.Paynow;
    export type Paypal = Stripe.PaymentMethodConfigurationUpdateParams.Paypal;
    export type Payto = Stripe.PaymentMethodConfigurationUpdateParams.Payto;
    export type Pix = Stripe.PaymentMethodConfigurationUpdateParams.Pix;
    export type Promptpay = Stripe.PaymentMethodConfigurationUpdateParams.Promptpay;
    export type RevolutPay = Stripe.PaymentMethodConfigurationUpdateParams.RevolutPay;
    export type SamsungPay = Stripe.PaymentMethodConfigurationUpdateParams.SamsungPay;
    export type Satispay = Stripe.PaymentMethodConfigurationUpdateParams.Satispay;
    export type Scalapay = Stripe.PaymentMethodConfigurationUpdateParams.Scalapay;
    export type SepaDebit = Stripe.PaymentMethodConfigurationUpdateParams.SepaDebit;
    export type Sofort = Stripe.PaymentMethodConfigurationUpdateParams.Sofort;
    export type Sunbit = Stripe.PaymentMethodConfigurationUpdateParams.Sunbit;
    export type Swish = Stripe.PaymentMethodConfigurationUpdateParams.Swish;
    export type Twint = Stripe.PaymentMethodConfigurationUpdateParams.Twint;
    export type Upi = Stripe.PaymentMethodConfigurationUpdateParams.Upi;
    export type UsBankAccount = Stripe.PaymentMethodConfigurationUpdateParams.UsBankAccount;
    export type WechatPay = Stripe.PaymentMethodConfigurationUpdateParams.WechatPay;
    export type Zip = Stripe.PaymentMethodConfigurationUpdateParams.Zip;
    export namespace AcssDebit {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.AcssDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.AcssDebit.DisplayPreference.Preference;
      }
    }
    export namespace Affirm {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Affirm.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Affirm.DisplayPreference.Preference;
      }
    }
    export namespace AfterpayClearpay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.AfterpayClearpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.AfterpayClearpay.DisplayPreference.Preference;
      }
    }
    export namespace Alipay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Alipay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Alipay.DisplayPreference.Preference;
      }
    }
    export namespace Alma {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Alma.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Alma.DisplayPreference.Preference;
      }
    }
    export namespace AmazonPay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.AmazonPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.AmazonPay.DisplayPreference.Preference;
      }
    }
    export namespace ApplePay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.ApplePay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.ApplePay.DisplayPreference.Preference;
      }
    }
    export namespace ApplePayLater {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.ApplePayLater.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.ApplePayLater.DisplayPreference.Preference;
      }
    }
    export namespace AuBecsDebit {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.AuBecsDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.AuBecsDebit.DisplayPreference.Preference;
      }
    }
    export namespace BacsDebit {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.BacsDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.BacsDebit.DisplayPreference.Preference;
      }
    }
    export namespace Bancontact {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Bancontact.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Bancontact.DisplayPreference.Preference;
      }
    }
    export namespace Billie {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Billie.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Billie.DisplayPreference.Preference;
      }
    }
    export namespace Bizum {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Bizum.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Bizum.DisplayPreference.Preference;
      }
    }
    export namespace Blik {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Blik.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Blik.DisplayPreference.Preference;
      }
    }
    export namespace Boleto {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Boleto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Boleto.DisplayPreference.Preference;
      }
    }
    export namespace Card {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Card.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Card.DisplayPreference.Preference;
      }
    }
    export namespace CartesBancaires {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.CartesBancaires.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.CartesBancaires.DisplayPreference.Preference;
      }
    }
    export namespace Cashapp {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Cashapp.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Cashapp.DisplayPreference.Preference;
      }
    }
    export namespace Crypto {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Crypto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Crypto.DisplayPreference.Preference;
      }
    }
    export namespace CustomerBalance {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.CustomerBalance.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.CustomerBalance.DisplayPreference.Preference;
      }
    }
    export namespace Eps {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Eps.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Eps.DisplayPreference.Preference;
      }
    }
    export namespace Fpx {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Fpx.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Fpx.DisplayPreference.Preference;
      }
    }
    export namespace FrMealVoucherConecs {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.FrMealVoucherConecs.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.FrMealVoucherConecs.DisplayPreference.Preference;
      }
    }
    export namespace Giropay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Giropay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Giropay.DisplayPreference.Preference;
      }
    }
    export namespace GooglePay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.GooglePay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.GooglePay.DisplayPreference.Preference;
      }
    }
    export namespace Grabpay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Grabpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Grabpay.DisplayPreference.Preference;
      }
    }
    export namespace Ideal {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Ideal.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Ideal.DisplayPreference.Preference;
      }
    }
    export namespace Jcb {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Jcb.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Jcb.DisplayPreference.Preference;
      }
    }
    export namespace KakaoPay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.KakaoPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.KakaoPay.DisplayPreference.Preference;
      }
    }
    export namespace Klarna {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Klarna.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Klarna.DisplayPreference.Preference;
      }
    }
    export namespace Konbini {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Konbini.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Konbini.DisplayPreference.Preference;
      }
    }
    export namespace KrCard {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.KrCard.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.KrCard.DisplayPreference.Preference;
      }
    }
    export namespace Link {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Link.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Link.DisplayPreference.Preference;
      }
    }
    export namespace MbWay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.MbWay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.MbWay.DisplayPreference.Preference;
      }
    }
    export namespace Mobilepay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Mobilepay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Mobilepay.DisplayPreference.Preference;
      }
    }
    export namespace Multibanco {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Multibanco.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Multibanco.DisplayPreference.Preference;
      }
    }
    export namespace NaverPay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.NaverPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.NaverPay.DisplayPreference.Preference;
      }
    }
    export namespace NzBankAccount {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.NzBankAccount.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.NzBankAccount.DisplayPreference.Preference;
      }
    }
    export namespace Oxxo {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Oxxo.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Oxxo.DisplayPreference.Preference;
      }
    }
    export namespace P24 {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.P24.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.P24.DisplayPreference.Preference;
      }
    }
    export namespace PayByBank {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.PayByBank.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.PayByBank.DisplayPreference.Preference;
      }
    }
    export namespace Payco {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Payco.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Payco.DisplayPreference.Preference;
      }
    }
    export namespace Paynow {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Paynow.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Paynow.DisplayPreference.Preference;
      }
    }
    export namespace Paypal {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Paypal.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Paypal.DisplayPreference.Preference;
      }
    }
    export namespace Payto {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Payto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Payto.DisplayPreference.Preference;
      }
    }
    export namespace Pix {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Pix.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Pix.DisplayPreference.Preference;
      }
    }
    export namespace Promptpay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Promptpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Promptpay.DisplayPreference.Preference;
      }
    }
    export namespace RevolutPay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.RevolutPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.RevolutPay.DisplayPreference.Preference;
      }
    }
    export namespace SamsungPay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.SamsungPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.SamsungPay.DisplayPreference.Preference;
      }
    }
    export namespace Satispay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Satispay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Satispay.DisplayPreference.Preference;
      }
    }
    export namespace Scalapay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Scalapay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Scalapay.DisplayPreference.Preference;
      }
    }
    export namespace SepaDebit {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.SepaDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.SepaDebit.DisplayPreference.Preference;
      }
    }
    export namespace Sofort {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Sofort.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Sofort.DisplayPreference.Preference;
      }
    }
    export namespace Sunbit {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Sunbit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Sunbit.DisplayPreference.Preference;
      }
    }
    export namespace Swish {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Swish.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Swish.DisplayPreference.Preference;
      }
    }
    export namespace Twint {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Twint.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Twint.DisplayPreference.Preference;
      }
    }
    export namespace Upi {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Upi.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Upi.DisplayPreference.Preference;
      }
    }
    export namespace UsBankAccount {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.UsBankAccount.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.UsBankAccount.DisplayPreference.Preference;
      }
    }
    export namespace WechatPay {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.WechatPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.WechatPay.DisplayPreference.Preference;
      }
    }
    export namespace Zip {
      export type DisplayPreference = Stripe.PaymentMethodConfigurationUpdateParams.Zip.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfigurationUpdateParams.Zip.DisplayPreference.Preference;
      }
    }
  }
  export namespace PaymentMethodConfiguration {
    export type AcssDebit = Stripe.PaymentMethodConfiguration.AcssDebit;
    export type Affirm = Stripe.PaymentMethodConfiguration.Affirm;
    export type AfterpayClearpay = Stripe.PaymentMethodConfiguration.AfterpayClearpay;
    export type Alipay = Stripe.PaymentMethodConfiguration.Alipay;
    export type Alma = Stripe.PaymentMethodConfiguration.Alma;
    export type AmazonPay = Stripe.PaymentMethodConfiguration.AmazonPay;
    export type ApplePay = Stripe.PaymentMethodConfiguration.ApplePay;
    export type AuBecsDebit = Stripe.PaymentMethodConfiguration.AuBecsDebit;
    export type BacsDebit = Stripe.PaymentMethodConfiguration.BacsDebit;
    export type Bancontact = Stripe.PaymentMethodConfiguration.Bancontact;
    export type Billie = Stripe.PaymentMethodConfiguration.Billie;
    export type Bizum = Stripe.PaymentMethodConfiguration.Bizum;
    export type Blik = Stripe.PaymentMethodConfiguration.Blik;
    export type Boleto = Stripe.PaymentMethodConfiguration.Boleto;
    export type Card = Stripe.PaymentMethodConfiguration.Card;
    export type CartesBancaires = Stripe.PaymentMethodConfiguration.CartesBancaires;
    export type Cashapp = Stripe.PaymentMethodConfiguration.Cashapp;
    export type Crypto = Stripe.PaymentMethodConfiguration.Crypto;
    export type CustomerBalance = Stripe.PaymentMethodConfiguration.CustomerBalance;
    export type Eps = Stripe.PaymentMethodConfiguration.Eps;
    export type Fpx = Stripe.PaymentMethodConfiguration.Fpx;
    export type Giropay = Stripe.PaymentMethodConfiguration.Giropay;
    export type GooglePay = Stripe.PaymentMethodConfiguration.GooglePay;
    export type Grabpay = Stripe.PaymentMethodConfiguration.Grabpay;
    export type Ideal = Stripe.PaymentMethodConfiguration.Ideal;
    export type Jcb = Stripe.PaymentMethodConfiguration.Jcb;
    export type KakaoPay = Stripe.PaymentMethodConfiguration.KakaoPay;
    export type Klarna = Stripe.PaymentMethodConfiguration.Klarna;
    export type Konbini = Stripe.PaymentMethodConfiguration.Konbini;
    export type KrCard = Stripe.PaymentMethodConfiguration.KrCard;
    export type Link = Stripe.PaymentMethodConfiguration.Link;
    export type MbWay = Stripe.PaymentMethodConfiguration.MbWay;
    export type Mobilepay = Stripe.PaymentMethodConfiguration.Mobilepay;
    export type Multibanco = Stripe.PaymentMethodConfiguration.Multibanco;
    export type NaverPay = Stripe.PaymentMethodConfiguration.NaverPay;
    export type NzBankAccount = Stripe.PaymentMethodConfiguration.NzBankAccount;
    export type Oxxo = Stripe.PaymentMethodConfiguration.Oxxo;
    export type P24 = Stripe.PaymentMethodConfiguration.P24;
    export type PayByBank = Stripe.PaymentMethodConfiguration.PayByBank;
    export type Payco = Stripe.PaymentMethodConfiguration.Payco;
    export type Paynow = Stripe.PaymentMethodConfiguration.Paynow;
    export type Paypal = Stripe.PaymentMethodConfiguration.Paypal;
    export type Payto = Stripe.PaymentMethodConfiguration.Payto;
    export type Pix = Stripe.PaymentMethodConfiguration.Pix;
    export type Promptpay = Stripe.PaymentMethodConfiguration.Promptpay;
    export type RevolutPay = Stripe.PaymentMethodConfiguration.RevolutPay;
    export type SamsungPay = Stripe.PaymentMethodConfiguration.SamsungPay;
    export type Satispay = Stripe.PaymentMethodConfiguration.Satispay;
    export type Scalapay = Stripe.PaymentMethodConfiguration.Scalapay;
    export type SepaDebit = Stripe.PaymentMethodConfiguration.SepaDebit;
    export type Sofort = Stripe.PaymentMethodConfiguration.Sofort;
    export type Sunbit = Stripe.PaymentMethodConfiguration.Sunbit;
    export type Swish = Stripe.PaymentMethodConfiguration.Swish;
    export type Twint = Stripe.PaymentMethodConfiguration.Twint;
    export type Upi = Stripe.PaymentMethodConfiguration.Upi;
    export type UsBankAccount = Stripe.PaymentMethodConfiguration.UsBankAccount;
    export type WechatPay = Stripe.PaymentMethodConfiguration.WechatPay;
    export type Zip = Stripe.PaymentMethodConfiguration.Zip;
    export namespace AcssDebit {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.AcssDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.AcssDebit.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.AcssDebit.DisplayPreference.Value;
      }
    }
    export namespace Affirm {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Affirm.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Affirm.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Affirm.DisplayPreference.Value;
      }
    }
    export namespace AfterpayClearpay {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.AfterpayClearpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.AfterpayClearpay.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.AfterpayClearpay.DisplayPreference.Value;
      }
    }
    export namespace Alipay {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Alipay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Alipay.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Alipay.DisplayPreference.Value;
      }
    }
    export namespace Alma {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Alma.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Alma.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Alma.DisplayPreference.Value;
      }
    }
    export namespace AmazonPay {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.AmazonPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.AmazonPay.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.AmazonPay.DisplayPreference.Value;
      }
    }
    export namespace ApplePay {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.ApplePay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.ApplePay.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.ApplePay.DisplayPreference.Value;
      }
    }
    export namespace AuBecsDebit {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.AuBecsDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.AuBecsDebit.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.AuBecsDebit.DisplayPreference.Value;
      }
    }
    export namespace BacsDebit {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.BacsDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.BacsDebit.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.BacsDebit.DisplayPreference.Value;
      }
    }
    export namespace Bancontact {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Bancontact.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Bancontact.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Bancontact.DisplayPreference.Value;
      }
    }
    export namespace Billie {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Billie.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Billie.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Billie.DisplayPreference.Value;
      }
    }
    export namespace Bizum {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Bizum.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Bizum.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Bizum.DisplayPreference.Value;
      }
    }
    export namespace Blik {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Blik.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Blik.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Blik.DisplayPreference.Value;
      }
    }
    export namespace Boleto {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Boleto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Boleto.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Boleto.DisplayPreference.Value;
      }
    }
    export namespace Card {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Card.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Card.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Card.DisplayPreference.Value;
      }
    }
    export namespace CartesBancaires {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.CartesBancaires.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.CartesBancaires.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.CartesBancaires.DisplayPreference.Value;
      }
    }
    export namespace Cashapp {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Cashapp.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Cashapp.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Cashapp.DisplayPreference.Value;
      }
    }
    export namespace Crypto {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Crypto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Crypto.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Crypto.DisplayPreference.Value;
      }
    }
    export namespace CustomerBalance {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.CustomerBalance.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.CustomerBalance.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.CustomerBalance.DisplayPreference.Value;
      }
    }
    export namespace Eps {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Eps.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Eps.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Eps.DisplayPreference.Value;
      }
    }
    export namespace Fpx {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Fpx.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Fpx.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Fpx.DisplayPreference.Value;
      }
    }
    export namespace Giropay {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Giropay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Giropay.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Giropay.DisplayPreference.Value;
      }
    }
    export namespace GooglePay {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.GooglePay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.GooglePay.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.GooglePay.DisplayPreference.Value;
      }
    }
    export namespace Grabpay {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Grabpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Grabpay.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Grabpay.DisplayPreference.Value;
      }
    }
    export namespace Ideal {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Ideal.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Ideal.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Ideal.DisplayPreference.Value;
      }
    }
    export namespace Jcb {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Jcb.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Jcb.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Jcb.DisplayPreference.Value;
      }
    }
    export namespace KakaoPay {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.KakaoPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.KakaoPay.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.KakaoPay.DisplayPreference.Value;
      }
    }
    export namespace Klarna {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Klarna.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Klarna.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Klarna.DisplayPreference.Value;
      }
    }
    export namespace Konbini {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Konbini.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Konbini.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Konbini.DisplayPreference.Value;
      }
    }
    export namespace KrCard {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.KrCard.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.KrCard.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.KrCard.DisplayPreference.Value;
      }
    }
    export namespace Link {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Link.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Link.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Link.DisplayPreference.Value;
      }
    }
    export namespace MbWay {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.MbWay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.MbWay.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.MbWay.DisplayPreference.Value;
      }
    }
    export namespace Mobilepay {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Mobilepay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Mobilepay.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Mobilepay.DisplayPreference.Value;
      }
    }
    export namespace Multibanco {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Multibanco.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Multibanco.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Multibanco.DisplayPreference.Value;
      }
    }
    export namespace NaverPay {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.NaverPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.NaverPay.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.NaverPay.DisplayPreference.Value;
      }
    }
    export namespace NzBankAccount {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.NzBankAccount.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.NzBankAccount.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.NzBankAccount.DisplayPreference.Value;
      }
    }
    export namespace Oxxo {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Oxxo.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Oxxo.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Oxxo.DisplayPreference.Value;
      }
    }
    export namespace P24 {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.P24.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.P24.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.P24.DisplayPreference.Value;
      }
    }
    export namespace PayByBank {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.PayByBank.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.PayByBank.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.PayByBank.DisplayPreference.Value;
      }
    }
    export namespace Payco {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Payco.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Payco.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Payco.DisplayPreference.Value;
      }
    }
    export namespace Paynow {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Paynow.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Paynow.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Paynow.DisplayPreference.Value;
      }
    }
    export namespace Paypal {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Paypal.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Paypal.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Paypal.DisplayPreference.Value;
      }
    }
    export namespace Payto {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Payto.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Payto.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Payto.DisplayPreference.Value;
      }
    }
    export namespace Pix {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Pix.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Pix.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Pix.DisplayPreference.Value;
      }
    }
    export namespace Promptpay {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Promptpay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Promptpay.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Promptpay.DisplayPreference.Value;
      }
    }
    export namespace RevolutPay {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.RevolutPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.RevolutPay.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.RevolutPay.DisplayPreference.Value;
      }
    }
    export namespace SamsungPay {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.SamsungPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.SamsungPay.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.SamsungPay.DisplayPreference.Value;
      }
    }
    export namespace Satispay {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Satispay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Satispay.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Satispay.DisplayPreference.Value;
      }
    }
    export namespace Scalapay {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Scalapay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Scalapay.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Scalapay.DisplayPreference.Value;
      }
    }
    export namespace SepaDebit {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.SepaDebit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.SepaDebit.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.SepaDebit.DisplayPreference.Value;
      }
    }
    export namespace Sofort {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Sofort.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Sofort.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Sofort.DisplayPreference.Value;
      }
    }
    export namespace Sunbit {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Sunbit.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Sunbit.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Sunbit.DisplayPreference.Value;
      }
    }
    export namespace Swish {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Swish.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Swish.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Swish.DisplayPreference.Value;
      }
    }
    export namespace Twint {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Twint.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Twint.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Twint.DisplayPreference.Value;
      }
    }
    export namespace Upi {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Upi.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Upi.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Upi.DisplayPreference.Value;
      }
    }
    export namespace UsBankAccount {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.UsBankAccount.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.UsBankAccount.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.UsBankAccount.DisplayPreference.Value;
      }
    }
    export namespace WechatPay {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.WechatPay.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.WechatPay.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.WechatPay.DisplayPreference.Value;
      }
    }
    export namespace Zip {
      export type DisplayPreference = Stripe.PaymentMethodConfiguration.Zip.DisplayPreference;
      export namespace DisplayPreference {
        export type Preference = Stripe.PaymentMethodConfiguration.Zip.DisplayPreference.Preference;
        export type Value = Stripe.PaymentMethodConfiguration.Zip.DisplayPreference.Value;
      }
    }
  }
  export namespace PaymentMethodDomain {
    export type AmazonPay = Stripe.PaymentMethodDomain.AmazonPay;
    export type ApplePay = Stripe.PaymentMethodDomain.ApplePay;
    export type GooglePay = Stripe.PaymentMethodDomain.GooglePay;
    export type Klarna = Stripe.PaymentMethodDomain.Klarna;
    export type Link = Stripe.PaymentMethodDomain.Link;
    export type Paypal = Stripe.PaymentMethodDomain.Paypal;
    export namespace AmazonPay {
      export type Status = Stripe.PaymentMethodDomain.AmazonPay.Status;
      export type StatusDetails = Stripe.PaymentMethodDomain.AmazonPay.StatusDetails;
    }
    export namespace ApplePay {
      export type Status = Stripe.PaymentMethodDomain.ApplePay.Status;
      export type StatusDetails = Stripe.PaymentMethodDomain.ApplePay.StatusDetails;
    }
    export namespace GooglePay {
      export type Status = Stripe.PaymentMethodDomain.GooglePay.Status;
      export type StatusDetails = Stripe.PaymentMethodDomain.GooglePay.StatusDetails;
    }
    export namespace Klarna {
      export type Status = Stripe.PaymentMethodDomain.Klarna.Status;
      export type StatusDetails = Stripe.PaymentMethodDomain.Klarna.StatusDetails;
    }
    export namespace Link {
      export type Status = Stripe.PaymentMethodDomain.Link.Status;
      export type StatusDetails = Stripe.PaymentMethodDomain.Link.StatusDetails;
    }
    export namespace Paypal {
      export type Status = Stripe.PaymentMethodDomain.Paypal.Status;
      export type StatusDetails = Stripe.PaymentMethodDomain.Paypal.StatusDetails;
    }
  }
  export namespace PaymentRecordReportPaymentParams {
    export type AmountRequested = Stripe.PaymentRecordReportPaymentParams.AmountRequested;
    export type PaymentMethodDetails = Stripe.PaymentRecordReportPaymentParams.PaymentMethodDetails;
    export type CustomerDetails = Stripe.PaymentRecordReportPaymentParams.CustomerDetails;
    export type CustomerPresence = Stripe.PaymentRecordReportPaymentParams.CustomerPresence;
    export type Failed = Stripe.PaymentRecordReportPaymentParams.Failed;
    export type Guaranteed = Stripe.PaymentRecordReportPaymentParams.Guaranteed;
    export type Outcome = Stripe.PaymentRecordReportPaymentParams.Outcome;
    export type ProcessorDetails = Stripe.PaymentRecordReportPaymentParams.ProcessorDetails;
    export type ShippingDetails = Stripe.PaymentRecordReportPaymentParams.ShippingDetails;
    export namespace PaymentMethodDetails {
      export type BillingDetails = Stripe.PaymentRecordReportPaymentParams.PaymentMethodDetails.BillingDetails;
      export type Custom = Stripe.PaymentRecordReportPaymentParams.PaymentMethodDetails.Custom;
    }
    export namespace ProcessorDetails {
      export type Custom = Stripe.PaymentRecordReportPaymentParams.ProcessorDetails.Custom;
    }
  }
  export namespace PaymentRecordReportPaymentAttemptParams {
    export type Failed = Stripe.PaymentRecordReportPaymentAttemptParams.Failed;
    export type Guaranteed = Stripe.PaymentRecordReportPaymentAttemptParams.Guaranteed;
    export type Outcome = Stripe.PaymentRecordReportPaymentAttemptParams.Outcome;
    export type PaymentMethodDetails = Stripe.PaymentRecordReportPaymentAttemptParams.PaymentMethodDetails;
    export type ShippingDetails = Stripe.PaymentRecordReportPaymentAttemptParams.ShippingDetails;
    export namespace PaymentMethodDetails {
      export type BillingDetails = Stripe.PaymentRecordReportPaymentAttemptParams.PaymentMethodDetails.BillingDetails;
      export type Custom = Stripe.PaymentRecordReportPaymentAttemptParams.PaymentMethodDetails.Custom;
    }
  }
  export namespace PaymentRecordReportPaymentAttemptInformationalParams {
    export type CustomerDetails = Stripe.PaymentRecordReportPaymentAttemptInformationalParams.CustomerDetails;
    export type ShippingDetails = Stripe.PaymentRecordReportPaymentAttemptInformationalParams.ShippingDetails;
  }
  export namespace PaymentRecordReportRefundParams {
    export type ProcessorDetails = Stripe.PaymentRecordReportRefundParams.ProcessorDetails;
    export type Amount = Stripe.PaymentRecordReportRefundParams.Amount;
    export type Refunded = Stripe.PaymentRecordReportRefundParams.Refunded;
    export namespace ProcessorDetails {
      export type Custom = Stripe.PaymentRecordReportRefundParams.ProcessorDetails.Custom;
    }
  }
  export namespace PaymentRecord {
    export type Amount = Stripe.PaymentRecord.Amount;
    export type AmountAuthorized = Stripe.PaymentRecord.AmountAuthorized;
    export type AmountCanceled = Stripe.PaymentRecord.AmountCanceled;
    export type AmountFailed = Stripe.PaymentRecord.AmountFailed;
    export type AmountGuaranteed = Stripe.PaymentRecord.AmountGuaranteed;
    export type AmountRefunded = Stripe.PaymentRecord.AmountRefunded;
    export type AmountRequested = Stripe.PaymentRecord.AmountRequested;
    export type CustomerDetails = Stripe.PaymentRecord.CustomerDetails;
    export type CustomerPresence = Stripe.PaymentRecord.CustomerPresence;
    export type PaymentMethodDetails = Stripe.PaymentRecord.PaymentMethodDetails;
    export type ProcessorDetails = Stripe.PaymentRecord.ProcessorDetails;
    export type ReportedBy = Stripe.PaymentRecord.ReportedBy;
    export type ShippingDetails = Stripe.PaymentRecord.ShippingDetails;
    export namespace PaymentMethodDetails {
      export type AchCreditTransfer = Stripe.PaymentRecord.PaymentMethodDetails.AchCreditTransfer;
      export type AchDebit = Stripe.PaymentRecord.PaymentMethodDetails.AchDebit;
      export type AcssDebit = Stripe.PaymentRecord.PaymentMethodDetails.AcssDebit;
      export type Affirm = Stripe.PaymentRecord.PaymentMethodDetails.Affirm;
      export type AfterpayClearpay = Stripe.PaymentRecord.PaymentMethodDetails.AfterpayClearpay;
      export type Alipay = Stripe.PaymentRecord.PaymentMethodDetails.Alipay;
      export type Alma = Stripe.PaymentRecord.PaymentMethodDetails.Alma;
      export type AmazonPay = Stripe.PaymentRecord.PaymentMethodDetails.AmazonPay;
      export type AuBecsDebit = Stripe.PaymentRecord.PaymentMethodDetails.AuBecsDebit;
      export type BacsDebit = Stripe.PaymentRecord.PaymentMethodDetails.BacsDebit;
      export type Bancontact = Stripe.PaymentRecord.PaymentMethodDetails.Bancontact;
      export type Billie = Stripe.PaymentRecord.PaymentMethodDetails.Billie;
      export type BillingDetails = Stripe.PaymentRecord.PaymentMethodDetails.BillingDetails;
      export type Bizum = Stripe.PaymentRecord.PaymentMethodDetails.Bizum;
      export type Blik = Stripe.PaymentRecord.PaymentMethodDetails.Blik;
      export type Boleto = Stripe.PaymentRecord.PaymentMethodDetails.Boleto;
      export type Card = Stripe.PaymentRecord.PaymentMethodDetails.Card;
      export type CardPresent = Stripe.PaymentRecord.PaymentMethodDetails.CardPresent;
      export type Cashapp = Stripe.PaymentRecord.PaymentMethodDetails.Cashapp;
      export type Crypto = Stripe.PaymentRecord.PaymentMethodDetails.Crypto;
      export type Custom = Stripe.PaymentRecord.PaymentMethodDetails.Custom;
      export type CustomerBalance = Stripe.PaymentRecord.PaymentMethodDetails.CustomerBalance;
      export type Eps = Stripe.PaymentRecord.PaymentMethodDetails.Eps;
      export type Fpx = Stripe.PaymentRecord.PaymentMethodDetails.Fpx;
      export type Giropay = Stripe.PaymentRecord.PaymentMethodDetails.Giropay;
      export type Grabpay = Stripe.PaymentRecord.PaymentMethodDetails.Grabpay;
      export type Ideal = Stripe.PaymentRecord.PaymentMethodDetails.Ideal;
      export type InteracPresent = Stripe.PaymentRecord.PaymentMethodDetails.InteracPresent;
      export type KakaoPay = Stripe.PaymentRecord.PaymentMethodDetails.KakaoPay;
      export type Klarna = Stripe.PaymentRecord.PaymentMethodDetails.Klarna;
      export type Konbini = Stripe.PaymentRecord.PaymentMethodDetails.Konbini;
      export type KrCard = Stripe.PaymentRecord.PaymentMethodDetails.KrCard;
      export type Link = Stripe.PaymentRecord.PaymentMethodDetails.Link;
      export type MbWay = Stripe.PaymentRecord.PaymentMethodDetails.MbWay;
      export type Mobilepay = Stripe.PaymentRecord.PaymentMethodDetails.Mobilepay;
      export type Multibanco = Stripe.PaymentRecord.PaymentMethodDetails.Multibanco;
      export type NaverPay = Stripe.PaymentRecord.PaymentMethodDetails.NaverPay;
      export type NzBankAccount = Stripe.PaymentRecord.PaymentMethodDetails.NzBankAccount;
      export type Oxxo = Stripe.PaymentRecord.PaymentMethodDetails.Oxxo;
      export type P24 = Stripe.PaymentRecord.PaymentMethodDetails.P24;
      export type PayByBank = Stripe.PaymentRecord.PaymentMethodDetails.PayByBank;
      export type Payco = Stripe.PaymentRecord.PaymentMethodDetails.Payco;
      export type Paynow = Stripe.PaymentRecord.PaymentMethodDetails.Paynow;
      export type Paypal = Stripe.PaymentRecord.PaymentMethodDetails.Paypal;
      export type Payto = Stripe.PaymentRecord.PaymentMethodDetails.Payto;
      export type Pix = Stripe.PaymentRecord.PaymentMethodDetails.Pix;
      export type Promptpay = Stripe.PaymentRecord.PaymentMethodDetails.Promptpay;
      export type RevolutPay = Stripe.PaymentRecord.PaymentMethodDetails.RevolutPay;
      export type SamsungPay = Stripe.PaymentRecord.PaymentMethodDetails.SamsungPay;
      export type Satispay = Stripe.PaymentRecord.PaymentMethodDetails.Satispay;
      export type Scalapay = Stripe.PaymentRecord.PaymentMethodDetails.Scalapay;
      export type SepaCreditTransfer = Stripe.PaymentRecord.PaymentMethodDetails.SepaCreditTransfer;
      export type SepaDebit = Stripe.PaymentRecord.PaymentMethodDetails.SepaDebit;
      export type Sofort = Stripe.PaymentRecord.PaymentMethodDetails.Sofort;
      export type StripeAccount = Stripe.PaymentRecord.PaymentMethodDetails.StripeAccount;
      export type Sunbit = Stripe.PaymentRecord.PaymentMethodDetails.Sunbit;
      export type Swish = Stripe.PaymentRecord.PaymentMethodDetails.Swish;
      export type Twint = Stripe.PaymentRecord.PaymentMethodDetails.Twint;
      export type Upi = Stripe.PaymentRecord.PaymentMethodDetails.Upi;
      export type UsBankAccount = Stripe.PaymentRecord.PaymentMethodDetails.UsBankAccount;
      export type Wechat = Stripe.PaymentRecord.PaymentMethodDetails.Wechat;
      export type WechatPay = Stripe.PaymentRecord.PaymentMethodDetails.WechatPay;
      export type Zip = Stripe.PaymentRecord.PaymentMethodDetails.Zip;
      export namespace AchDebit {
        export type AccountHolderType = Stripe.PaymentRecord.PaymentMethodDetails.AchDebit.AccountHolderType;
      }
      export namespace Alma {
        export type Installments = Stripe.PaymentRecord.PaymentMethodDetails.Alma.Installments;
      }
      export namespace AmazonPay {
        export type Funding = Stripe.PaymentRecord.PaymentMethodDetails.AmazonPay.Funding;
        export namespace Funding {
          export type Card = Stripe.PaymentRecord.PaymentMethodDetails.AmazonPay.Funding.Card;
        }
      }
      export namespace Bancontact {
        export type PreferredLanguage = Stripe.PaymentRecord.PaymentMethodDetails.Bancontact.PreferredLanguage;
      }
      export namespace Card {
        export type Brand = Stripe.PaymentRecord.PaymentMethodDetails.Card.Brand;
        export type Checks = Stripe.PaymentRecord.PaymentMethodDetails.Card.Checks;
        export type Funding = Stripe.PaymentRecord.PaymentMethodDetails.Card.Funding;
        export type Installments = Stripe.PaymentRecord.PaymentMethodDetails.Card.Installments;
        export type Network = Stripe.PaymentRecord.PaymentMethodDetails.Card.Network;
        export type NetworkToken = Stripe.PaymentRecord.PaymentMethodDetails.Card.NetworkToken;
        export type ThreeDSecure = Stripe.PaymentRecord.PaymentMethodDetails.Card.ThreeDSecure;
        export type Wallet = Stripe.PaymentRecord.PaymentMethodDetails.Card.Wallet;
        export namespace Checks {
          export type AddressLine1Check = Stripe.PaymentRecord.PaymentMethodDetails.Card.Checks.AddressLine1Check;
          export type AddressPostalCodeCheck = Stripe.PaymentRecord.PaymentMethodDetails.Card.Checks.AddressPostalCodeCheck;
          export type CvcCheck = Stripe.PaymentRecord.PaymentMethodDetails.Card.Checks.CvcCheck;
        }
        export namespace Installments {
          export type Plan = Stripe.PaymentRecord.PaymentMethodDetails.Card.Installments.Plan;
          export namespace Plan {
            export type Type = Stripe.PaymentRecord.PaymentMethodDetails.Card.Installments.Plan.Type;
          }
        }
        export namespace ThreeDSecure {
          export type AuthenticationFlow = Stripe.PaymentRecord.PaymentMethodDetails.Card.ThreeDSecure.AuthenticationFlow;
          export type ElectronicCommerceIndicator = Stripe.PaymentRecord.PaymentMethodDetails.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type ExemptionIndicator = Stripe.PaymentRecord.PaymentMethodDetails.Card.ThreeDSecure.ExemptionIndicator;
          export type Result = Stripe.PaymentRecord.PaymentMethodDetails.Card.ThreeDSecure.Result;
          export type ResultReason = Stripe.PaymentRecord.PaymentMethodDetails.Card.ThreeDSecure.ResultReason;
          export type Version = Stripe.PaymentRecord.PaymentMethodDetails.Card.ThreeDSecure.Version;
        }
        export namespace Wallet {
          export type ApplePay = Stripe.PaymentRecord.PaymentMethodDetails.Card.Wallet.ApplePay;
          export type GooglePay = Stripe.PaymentRecord.PaymentMethodDetails.Card.Wallet.GooglePay;
        }
      }
      export namespace CardPresent {
        export type Offline = Stripe.PaymentRecord.PaymentMethodDetails.CardPresent.Offline;
        export type ReadMethod = Stripe.PaymentRecord.PaymentMethodDetails.CardPresent.ReadMethod;
        export type Receipt = Stripe.PaymentRecord.PaymentMethodDetails.CardPresent.Receipt;
        export type Wallet = Stripe.PaymentRecord.PaymentMethodDetails.CardPresent.Wallet;
        export namespace Receipt {
          export type AccountType = Stripe.PaymentRecord.PaymentMethodDetails.CardPresent.Receipt.AccountType;
        }
        export namespace Wallet {
          export type Type = Stripe.PaymentRecord.PaymentMethodDetails.CardPresent.Wallet.Type;
        }
      }
      export namespace Crypto {
        export type Network = Stripe.PaymentRecord.PaymentMethodDetails.Crypto.Network;
        export type TokenCurrency = Stripe.PaymentRecord.PaymentMethodDetails.Crypto.TokenCurrency;
      }
      export namespace Eps {
        export type Bank = Stripe.PaymentRecord.PaymentMethodDetails.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe.PaymentRecord.PaymentMethodDetails.Fpx.AccountHolderType;
        export type Bank = Stripe.PaymentRecord.PaymentMethodDetails.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe.PaymentRecord.PaymentMethodDetails.Ideal.Bank;
        export type Bic = Stripe.PaymentRecord.PaymentMethodDetails.Ideal.Bic;
      }
      export namespace InteracPresent {
        export type ReadMethod = Stripe.PaymentRecord.PaymentMethodDetails.InteracPresent.ReadMethod;
        export type Receipt = Stripe.PaymentRecord.PaymentMethodDetails.InteracPresent.Receipt;
        export namespace Receipt {
          export type AccountType = Stripe.PaymentRecord.PaymentMethodDetails.InteracPresent.Receipt.AccountType;
        }
      }
      export namespace Klarna {
        export type PayerDetails = Stripe.PaymentRecord.PaymentMethodDetails.Klarna.PayerDetails;
        export namespace PayerDetails {
          export type Address = Stripe.PaymentRecord.PaymentMethodDetails.Klarna.PayerDetails.Address;
        }
      }
      export namespace Konbini {
        export type Store = Stripe.PaymentRecord.PaymentMethodDetails.Konbini.Store;
        export namespace Store {
          export type Chain = Stripe.PaymentRecord.PaymentMethodDetails.Konbini.Store.Chain;
        }
      }
      export namespace KrCard {
        export type Brand = Stripe.PaymentRecord.PaymentMethodDetails.KrCard.Brand;
      }
      export namespace Mobilepay {
        export type Card = Stripe.PaymentRecord.PaymentMethodDetails.Mobilepay.Card;
      }
      export namespace P24 {
        export type Bank = Stripe.PaymentRecord.PaymentMethodDetails.P24.Bank;
      }
      export namespace Paypal {
        export type SellerProtection = Stripe.PaymentRecord.PaymentMethodDetails.Paypal.SellerProtection;
        export namespace SellerProtection {
          export type DisputeCategory = Stripe.PaymentRecord.PaymentMethodDetails.Paypal.SellerProtection.DisputeCategory;
          export type Status = Stripe.PaymentRecord.PaymentMethodDetails.Paypal.SellerProtection.Status;
        }
      }
      export namespace RevolutPay {
        export type Funding = Stripe.PaymentRecord.PaymentMethodDetails.RevolutPay.Funding;
        export namespace Funding {
          export type Card = Stripe.PaymentRecord.PaymentMethodDetails.RevolutPay.Funding.Card;
        }
      }
      export namespace Sofort {
        export type PreferredLanguage = Stripe.PaymentRecord.PaymentMethodDetails.Sofort.PreferredLanguage;
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe.PaymentRecord.PaymentMethodDetails.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe.PaymentRecord.PaymentMethodDetails.UsBankAccount.AccountType;
      }
    }
    export namespace ProcessorDetails {
      export type Custom = Stripe.PaymentRecord.ProcessorDetails.Custom;
    }
  }
  export namespace PayoutCreateParams {
    export type Method = Stripe.PayoutCreateParams.Method;
    export type SourceType = Stripe.PayoutCreateParams.SourceType;
  }
  export namespace Payout {
    export type ReconciliationStatus = Stripe.Payout.ReconciliationStatus;
    export type TraceId = Stripe.Payout.TraceId;
    export type Type = Stripe.Payout.Type;
  }
  export namespace PlanCreateParams {
    export type Interval = Stripe.PlanCreateParams.Interval;
    export type BillingScheme = Stripe.PlanCreateParams.BillingScheme;
    export type Product = Stripe.PlanCreateParams.Product;
    export type Tier = Stripe.PlanCreateParams.Tier;
    export type TiersMode = Stripe.PlanCreateParams.TiersMode;
    export type TransformUsage = Stripe.PlanCreateParams.TransformUsage;
    export type UsageType = Stripe.PlanCreateParams.UsageType;
    export namespace TransformUsage {
      export type Round = Stripe.PlanCreateParams.TransformUsage.Round;
    }
  }
  export namespace Plan {
    export type BillingScheme = Stripe.Plan.BillingScheme;
    export type Interval = Stripe.Plan.Interval;
    export type Tier = Stripe.Plan.Tier;
    export type TiersMode = Stripe.Plan.TiersMode;
    export type TransformUsage = Stripe.Plan.TransformUsage;
    export type UsageType = Stripe.Plan.UsageType;
    export namespace TransformUsage {
      export type Round = Stripe.Plan.TransformUsage.Round;
    }
  }
  export namespace PriceCreateParams {
    export type BillingScheme = Stripe.PriceCreateParams.BillingScheme;
    export type CurrencyOptions = Stripe.PriceCreateParams.CurrencyOptions;
    export type CustomUnitAmount = Stripe.PriceCreateParams.CustomUnitAmount;
    export type ProductData = Stripe.PriceCreateParams.ProductData;
    export type Recurring = Stripe.PriceCreateParams.Recurring;
    export type TaxBehavior = Stripe.PriceCreateParams.TaxBehavior;
    export type Tier = Stripe.PriceCreateParams.Tier;
    export type TiersMode = Stripe.PriceCreateParams.TiersMode;
    export type TransformQuantity = Stripe.PriceCreateParams.TransformQuantity;
    export namespace CurrencyOptions {
      export type CustomUnitAmount = Stripe.PriceCreateParams.CurrencyOptions.CustomUnitAmount;
      export type TaxBehavior = Stripe.PriceCreateParams.CurrencyOptions.TaxBehavior;
      export type Tier = Stripe.PriceCreateParams.CurrencyOptions.Tier;
    }
    export namespace Recurring {
      export type Interval = Stripe.PriceCreateParams.Recurring.Interval;
      export type UsageType = Stripe.PriceCreateParams.Recurring.UsageType;
    }
    export namespace TransformQuantity {
      export type Round = Stripe.PriceCreateParams.TransformQuantity.Round;
    }
  }
  export namespace PriceUpdateParams {
    export type CurrencyOptions = Stripe.PriceUpdateParams.CurrencyOptions;
    export type TaxBehavior = Stripe.PriceUpdateParams.TaxBehavior;
    export namespace CurrencyOptions {
      export type CustomUnitAmount = Stripe.PriceUpdateParams.CurrencyOptions.CustomUnitAmount;
      export type TaxBehavior = Stripe.PriceUpdateParams.CurrencyOptions.TaxBehavior;
      export type Tier = Stripe.PriceUpdateParams.CurrencyOptions.Tier;
    }
  }
  export namespace PriceListParams {
    export type Recurring = Stripe.PriceListParams.Recurring;
    export type Type = Stripe.PriceListParams.Type;
    export namespace Recurring {
      export type Interval = Stripe.PriceListParams.Recurring.Interval;
      export type UsageType = Stripe.PriceListParams.Recurring.UsageType;
    }
  }
  export namespace Price {
    export type BillingScheme = Stripe.Price.BillingScheme;
    export type CurrencyOptions = Stripe.Price.CurrencyOptions;
    export type CustomUnitAmount = Stripe.Price.CustomUnitAmount;
    export type Recurring = Stripe.Price.Recurring;
    export type TaxBehavior = Stripe.Price.TaxBehavior;
    export type Tier = Stripe.Price.Tier;
    export type TiersMode = Stripe.Price.TiersMode;
    export type TransformQuantity = Stripe.Price.TransformQuantity;
    export type Type = Stripe.Price.Type;
    export namespace CurrencyOptions {
      export type CustomUnitAmount = Stripe.Price.CurrencyOptions.CustomUnitAmount;
      export type TaxBehavior = Stripe.Price.CurrencyOptions.TaxBehavior;
      export type Tier = Stripe.Price.CurrencyOptions.Tier;
    }
    export namespace Recurring {
      export type Interval = Stripe.Price.Recurring.Interval;
      export type UsageType = Stripe.Price.Recurring.UsageType;
    }
    export namespace TransformQuantity {
      export type Round = Stripe.Price.TransformQuantity.Round;
    }
  }
  export namespace ProductCreateParams {
    export type DefaultPriceData = Stripe.ProductCreateParams.DefaultPriceData;
    export type MarketingFeature = Stripe.ProductCreateParams.MarketingFeature;
    export type PackageDimensions = Stripe.ProductCreateParams.PackageDimensions;
    export type Type = Stripe.ProductCreateParams.Type;
    export namespace DefaultPriceData {
      export type CurrencyOptions = Stripe.ProductCreateParams.DefaultPriceData.CurrencyOptions;
      export type CustomUnitAmount = Stripe.ProductCreateParams.DefaultPriceData.CustomUnitAmount;
      export type Recurring = Stripe.ProductCreateParams.DefaultPriceData.Recurring;
      export type TaxBehavior = Stripe.ProductCreateParams.DefaultPriceData.TaxBehavior;
      export namespace CurrencyOptions {
        export type CustomUnitAmount = Stripe.ProductCreateParams.DefaultPriceData.CurrencyOptions.CustomUnitAmount;
        export type TaxBehavior = Stripe.ProductCreateParams.DefaultPriceData.CurrencyOptions.TaxBehavior;
        export type Tier = Stripe.ProductCreateParams.DefaultPriceData.CurrencyOptions.Tier;
      }
      export namespace Recurring {
        export type Interval = Stripe.ProductCreateParams.DefaultPriceData.Recurring.Interval;
      }
    }
  }
  export namespace ProductUpdateParams {
    export type MarketingFeature = Stripe.ProductUpdateParams.MarketingFeature;
    export type PackageDimensions = Stripe.ProductUpdateParams.PackageDimensions;
  }
  export namespace ProductListParams {
    export type Type = Stripe.ProductListParams.Type;
  }
  export namespace Product {
    export type MarketingFeature = Stripe.Product.MarketingFeature;
    export type PackageDimensions = Stripe.Product.PackageDimensions;
    export type Type = Stripe.Product.Type;
  }
  export namespace PromotionCodeCreateParams {
    export type Promotion = Stripe.PromotionCodeCreateParams.Promotion;
    export type Restrictions = Stripe.PromotionCodeCreateParams.Restrictions;
    export namespace Restrictions {
      export type CurrencyOptions = Stripe.PromotionCodeCreateParams.Restrictions.CurrencyOptions;
    }
  }
  export namespace PromotionCodeUpdateParams {
    export type Restrictions = Stripe.PromotionCodeUpdateParams.Restrictions;
    export namespace Restrictions {
      export type CurrencyOptions = Stripe.PromotionCodeUpdateParams.Restrictions.CurrencyOptions;
    }
  }
  export namespace PromotionCode {
    export type Promotion = Stripe.PromotionCode.Promotion;
    export type Restrictions = Stripe.PromotionCode.Restrictions;
    export namespace Restrictions {
      export type CurrencyOptions = Stripe.PromotionCode.Restrictions.CurrencyOptions;
    }
  }
  export namespace QuoteCreateParams {
    export type AutomaticTax = Stripe.QuoteCreateParams.AutomaticTax;
    export type CollectionMethod = Stripe.QuoteCreateParams.CollectionMethod;
    export type Discount = Stripe.QuoteCreateParams.Discount;
    export type FromQuote = Stripe.QuoteCreateParams.FromQuote;
    export type InvoiceSettings = Stripe.QuoteCreateParams.InvoiceSettings;
    export type LineItem = Stripe.QuoteCreateParams.LineItem;
    export type SubscriptionData = Stripe.QuoteCreateParams.SubscriptionData;
    export type TransferData = Stripe.QuoteCreateParams.TransferData;
    export namespace AutomaticTax {
      export type Liability = Stripe.QuoteCreateParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe.QuoteCreateParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace InvoiceSettings {
      export type Issuer = Stripe.QuoteCreateParams.InvoiceSettings.Issuer;
      export namespace Issuer {
        export type Type = Stripe.QuoteCreateParams.InvoiceSettings.Issuer.Type;
      }
    }
    export namespace LineItem {
      export type Discount = Stripe.QuoteCreateParams.LineItem.Discount;
      export type PriceData = Stripe.QuoteCreateParams.LineItem.PriceData;
      export namespace PriceData {
        export type Recurring = Stripe.QuoteCreateParams.LineItem.PriceData.Recurring;
        export type TaxBehavior = Stripe.QuoteCreateParams.LineItem.PriceData.TaxBehavior;
        export namespace Recurring {
          export type Interval = Stripe.QuoteCreateParams.LineItem.PriceData.Recurring.Interval;
        }
      }
    }
    export namespace SubscriptionData {
      export type BillingMode = Stripe.QuoteCreateParams.SubscriptionData.BillingMode;
      export namespace BillingMode {
        export type Flexible = Stripe.QuoteCreateParams.SubscriptionData.BillingMode.Flexible;
        export type Type = Stripe.QuoteCreateParams.SubscriptionData.BillingMode.Type;
        export namespace Flexible {
          export type ProrationDiscounts = Stripe.QuoteCreateParams.SubscriptionData.BillingMode.Flexible.ProrationDiscounts;
        }
      }
    }
  }
  export namespace QuoteUpdateParams {
    export type AutomaticTax = Stripe.QuoteUpdateParams.AutomaticTax;
    export type CollectionMethod = Stripe.QuoteUpdateParams.CollectionMethod;
    export type Discount = Stripe.QuoteUpdateParams.Discount;
    export type InvoiceSettings = Stripe.QuoteUpdateParams.InvoiceSettings;
    export type LineItem = Stripe.QuoteUpdateParams.LineItem;
    export type SubscriptionData = Stripe.QuoteUpdateParams.SubscriptionData;
    export type TransferData = Stripe.QuoteUpdateParams.TransferData;
    export namespace AutomaticTax {
      export type Liability = Stripe.QuoteUpdateParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe.QuoteUpdateParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace InvoiceSettings {
      export type Issuer = Stripe.QuoteUpdateParams.InvoiceSettings.Issuer;
      export namespace Issuer {
        export type Type = Stripe.QuoteUpdateParams.InvoiceSettings.Issuer.Type;
      }
    }
    export namespace LineItem {
      export type Discount = Stripe.QuoteUpdateParams.LineItem.Discount;
      export type PriceData = Stripe.QuoteUpdateParams.LineItem.PriceData;
      export namespace PriceData {
        export type Recurring = Stripe.QuoteUpdateParams.LineItem.PriceData.Recurring;
        export type TaxBehavior = Stripe.QuoteUpdateParams.LineItem.PriceData.TaxBehavior;
        export namespace Recurring {
          export type Interval = Stripe.QuoteUpdateParams.LineItem.PriceData.Recurring.Interval;
        }
      }
    }
  }
  export namespace QuoteListParams {
    export type Status = Stripe.QuoteListParams.Status;
  }
  export namespace Quote {
    export type AutomaticTax = Stripe.Quote.AutomaticTax;
    export type CollectionMethod = Stripe.Quote.CollectionMethod;
    export type Computed = Stripe.Quote.Computed;
    export type FromQuote = Stripe.Quote.FromQuote;
    export type InvoiceSettings = Stripe.Quote.InvoiceSettings;
    export type Status = Stripe.Quote.Status;
    export type StatusTransitions = Stripe.Quote.StatusTransitions;
    export type SubscriptionData = Stripe.Quote.SubscriptionData;
    export type TotalDetails = Stripe.Quote.TotalDetails;
    export type TransferData = Stripe.Quote.TransferData;
    export namespace AutomaticTax {
      export type Liability = Stripe.Quote.AutomaticTax.Liability;
      export type Status = Stripe.Quote.AutomaticTax.Status;
      export namespace Liability {
        export type Type = Stripe.Quote.AutomaticTax.Liability.Type;
      }
    }
    export namespace Computed {
      export type Recurring = Stripe.Quote.Computed.Recurring;
      export type Upfront = Stripe.Quote.Computed.Upfront;
      export namespace Recurring {
        export type Interval = Stripe.Quote.Computed.Recurring.Interval;
        export type TotalDetails = Stripe.Quote.Computed.Recurring.TotalDetails;
        export namespace TotalDetails {
          export type Breakdown = Stripe.Quote.Computed.Recurring.TotalDetails.Breakdown;
          export namespace Breakdown {
            export type Discount = Stripe.Quote.Computed.Recurring.TotalDetails.Breakdown.Discount;
            export type Tax = Stripe.Quote.Computed.Recurring.TotalDetails.Breakdown.Tax;
            export namespace Tax {
              export type TaxabilityReason = Stripe.Quote.Computed.Recurring.TotalDetails.Breakdown.Tax.TaxabilityReason;
            }
          }
        }
      }
      export namespace Upfront {
        export type TotalDetails = Stripe.Quote.Computed.Upfront.TotalDetails;
        export namespace TotalDetails {
          export type Breakdown = Stripe.Quote.Computed.Upfront.TotalDetails.Breakdown;
          export namespace Breakdown {
            export type Discount = Stripe.Quote.Computed.Upfront.TotalDetails.Breakdown.Discount;
            export type Tax = Stripe.Quote.Computed.Upfront.TotalDetails.Breakdown.Tax;
            export namespace Tax {
              export type TaxabilityReason = Stripe.Quote.Computed.Upfront.TotalDetails.Breakdown.Tax.TaxabilityReason;
            }
          }
        }
      }
    }
    export namespace InvoiceSettings {
      export type Issuer = Stripe.Quote.InvoiceSettings.Issuer;
      export namespace Issuer {
        export type Type = Stripe.Quote.InvoiceSettings.Issuer.Type;
      }
    }
    export namespace SubscriptionData {
      export type BillingMode = Stripe.Quote.SubscriptionData.BillingMode;
      export namespace BillingMode {
        export type Flexible = Stripe.Quote.SubscriptionData.BillingMode.Flexible;
        export type Type = Stripe.Quote.SubscriptionData.BillingMode.Type;
        export namespace Flexible {
          export type ProrationDiscounts = Stripe.Quote.SubscriptionData.BillingMode.Flexible.ProrationDiscounts;
        }
      }
    }
    export namespace TotalDetails {
      export type Breakdown = Stripe.Quote.TotalDetails.Breakdown;
      export namespace Breakdown {
        export type Discount = Stripe.Quote.TotalDetails.Breakdown.Discount;
        export type Tax = Stripe.Quote.TotalDetails.Breakdown.Tax;
        export namespace Tax {
          export type TaxabilityReason = Stripe.Quote.TotalDetails.Breakdown.Tax.TaxabilityReason;
        }
      }
    }
  }
  export namespace RefundCreateParams {
    export type Reason = Stripe.RefundCreateParams.Reason;
  }
  export namespace Refund {
    export type DestinationDetails = Stripe.Refund.DestinationDetails;
    export type NextAction = Stripe.Refund.NextAction;
    export type PendingReason = Stripe.Refund.PendingReason;
    export type PresentmentDetails = Stripe.Refund.PresentmentDetails;
    export type Reason = Stripe.Refund.Reason;
    export namespace DestinationDetails {
      export type Affirm = Stripe.Refund.DestinationDetails.Affirm;
      export type AfterpayClearpay = Stripe.Refund.DestinationDetails.AfterpayClearpay;
      export type Alipay = Stripe.Refund.DestinationDetails.Alipay;
      export type Alma = Stripe.Refund.DestinationDetails.Alma;
      export type AmazonPay = Stripe.Refund.DestinationDetails.AmazonPay;
      export type AuBankTransfer = Stripe.Refund.DestinationDetails.AuBankTransfer;
      export type Blik = Stripe.Refund.DestinationDetails.Blik;
      export type BrBankTransfer = Stripe.Refund.DestinationDetails.BrBankTransfer;
      export type Card = Stripe.Refund.DestinationDetails.Card;
      export type Cashapp = Stripe.Refund.DestinationDetails.Cashapp;
      export type Crypto = Stripe.Refund.DestinationDetails.Crypto;
      export type CustomerCashBalance = Stripe.Refund.DestinationDetails.CustomerCashBalance;
      export type Eps = Stripe.Refund.DestinationDetails.Eps;
      export type EuBankTransfer = Stripe.Refund.DestinationDetails.EuBankTransfer;
      export type GbBankTransfer = Stripe.Refund.DestinationDetails.GbBankTransfer;
      export type Giropay = Stripe.Refund.DestinationDetails.Giropay;
      export type Grabpay = Stripe.Refund.DestinationDetails.Grabpay;
      export type JpBankTransfer = Stripe.Refund.DestinationDetails.JpBankTransfer;
      export type Klarna = Stripe.Refund.DestinationDetails.Klarna;
      export type MbWay = Stripe.Refund.DestinationDetails.MbWay;
      export type Multibanco = Stripe.Refund.DestinationDetails.Multibanco;
      export type MxBankTransfer = Stripe.Refund.DestinationDetails.MxBankTransfer;
      export type NzBankTransfer = Stripe.Refund.DestinationDetails.NzBankTransfer;
      export type P24 = Stripe.Refund.DestinationDetails.P24;
      export type Paynow = Stripe.Refund.DestinationDetails.Paynow;
      export type Paypal = Stripe.Refund.DestinationDetails.Paypal;
      export type Pix = Stripe.Refund.DestinationDetails.Pix;
      export type Revolut = Stripe.Refund.DestinationDetails.Revolut;
      export type Scalapay = Stripe.Refund.DestinationDetails.Scalapay;
      export type Sofort = Stripe.Refund.DestinationDetails.Sofort;
      export type Swish = Stripe.Refund.DestinationDetails.Swish;
      export type ThBankTransfer = Stripe.Refund.DestinationDetails.ThBankTransfer;
      export type Twint = Stripe.Refund.DestinationDetails.Twint;
      export type UsBankTransfer = Stripe.Refund.DestinationDetails.UsBankTransfer;
      export type WechatPay = Stripe.Refund.DestinationDetails.WechatPay;
      export type Zip = Stripe.Refund.DestinationDetails.Zip;
      export namespace Card {
        export type Type = Stripe.Refund.DestinationDetails.Card.Type;
      }
    }
    export namespace NextAction {
      export type DisplayDetails = Stripe.Refund.NextAction.DisplayDetails;
      export namespace DisplayDetails {
        export type EmailSent = Stripe.Refund.NextAction.DisplayDetails.EmailSent;
      }
    }
  }
  export namespace Review {
    export type ClosedReason = Stripe.Review.ClosedReason;
    export type IpAddressLocation = Stripe.Review.IpAddressLocation;
    export type OpenedReason = Stripe.Review.OpenedReason;
    export type Session = Stripe.Review.Session;
  }
  export namespace SetupAttempt {
    export type FlowDirection = Stripe.SetupAttempt.FlowDirection;
    export type PaymentMethodDetails = Stripe.SetupAttempt.PaymentMethodDetails;
    export type SetupError = Stripe.SetupAttempt.SetupError;
    export namespace PaymentMethodDetails {
      export type AcssDebit = Stripe.SetupAttempt.PaymentMethodDetails.AcssDebit;
      export type AmazonPay = Stripe.SetupAttempt.PaymentMethodDetails.AmazonPay;
      export type AuBecsDebit = Stripe.SetupAttempt.PaymentMethodDetails.AuBecsDebit;
      export type BacsDebit = Stripe.SetupAttempt.PaymentMethodDetails.BacsDebit;
      export type Bancontact = Stripe.SetupAttempt.PaymentMethodDetails.Bancontact;
      export type Boleto = Stripe.SetupAttempt.PaymentMethodDetails.Boleto;
      export type Card = Stripe.SetupAttempt.PaymentMethodDetails.Card;
      export type CardPresent = Stripe.SetupAttempt.PaymentMethodDetails.CardPresent;
      export type Cashapp = Stripe.SetupAttempt.PaymentMethodDetails.Cashapp;
      export type Ideal = Stripe.SetupAttempt.PaymentMethodDetails.Ideal;
      export type KakaoPay = Stripe.SetupAttempt.PaymentMethodDetails.KakaoPay;
      export type Klarna = Stripe.SetupAttempt.PaymentMethodDetails.Klarna;
      export type KrCard = Stripe.SetupAttempt.PaymentMethodDetails.KrCard;
      export type Link = Stripe.SetupAttempt.PaymentMethodDetails.Link;
      export type NaverPay = Stripe.SetupAttempt.PaymentMethodDetails.NaverPay;
      export type NzBankAccount = Stripe.SetupAttempt.PaymentMethodDetails.NzBankAccount;
      export type Paypal = Stripe.SetupAttempt.PaymentMethodDetails.Paypal;
      export type Payto = Stripe.SetupAttempt.PaymentMethodDetails.Payto;
      export type Pix = Stripe.SetupAttempt.PaymentMethodDetails.Pix;
      export type RevolutPay = Stripe.SetupAttempt.PaymentMethodDetails.RevolutPay;
      export type Satispay = Stripe.SetupAttempt.PaymentMethodDetails.Satispay;
      export type SepaDebit = Stripe.SetupAttempt.PaymentMethodDetails.SepaDebit;
      export type Sofort = Stripe.SetupAttempt.PaymentMethodDetails.Sofort;
      export type Twint = Stripe.SetupAttempt.PaymentMethodDetails.Twint;
      export type Upi = Stripe.SetupAttempt.PaymentMethodDetails.Upi;
      export type UsBankAccount = Stripe.SetupAttempt.PaymentMethodDetails.UsBankAccount;
      export namespace Bancontact {
        export type PreferredLanguage = Stripe.SetupAttempt.PaymentMethodDetails.Bancontact.PreferredLanguage;
      }
      export namespace Card {
        export type Checks = Stripe.SetupAttempt.PaymentMethodDetails.Card.Checks;
        export type ThreeDSecure = Stripe.SetupAttempt.PaymentMethodDetails.Card.ThreeDSecure;
        export type Wallet = Stripe.SetupAttempt.PaymentMethodDetails.Card.Wallet;
        export namespace ThreeDSecure {
          export type AuthenticationFlow = Stripe.SetupAttempt.PaymentMethodDetails.Card.ThreeDSecure.AuthenticationFlow;
          export type ElectronicCommerceIndicator = Stripe.SetupAttempt.PaymentMethodDetails.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type Result = Stripe.SetupAttempt.PaymentMethodDetails.Card.ThreeDSecure.Result;
          export type ResultReason = Stripe.SetupAttempt.PaymentMethodDetails.Card.ThreeDSecure.ResultReason;
          export type Version = Stripe.SetupAttempt.PaymentMethodDetails.Card.ThreeDSecure.Version;
        }
        export namespace Wallet {
          export type ApplePay = Stripe.SetupAttempt.PaymentMethodDetails.Card.Wallet.ApplePay;
          export type GooglePay = Stripe.SetupAttempt.PaymentMethodDetails.Card.Wallet.GooglePay;
          export type Type = Stripe.SetupAttempt.PaymentMethodDetails.Card.Wallet.Type;
        }
      }
      export namespace CardPresent {
        export type Offline = Stripe.SetupAttempt.PaymentMethodDetails.CardPresent.Offline;
      }
      export namespace Ideal {
        export type Bank = Stripe.SetupAttempt.PaymentMethodDetails.Ideal.Bank;
        export type Bic = Stripe.SetupAttempt.PaymentMethodDetails.Ideal.Bic;
      }
      export namespace Sofort {
        export type PreferredLanguage = Stripe.SetupAttempt.PaymentMethodDetails.Sofort.PreferredLanguage;
      }
    }
    export namespace SetupError {
      export type Code = Stripe.SetupAttempt.SetupError.Code;
      export type Type = Stripe.SetupAttempt.SetupError.Type;
    }
  }
  export namespace SetupIntentCreateParams {
    export type AutomaticPaymentMethods = Stripe.SetupIntentCreateParams.AutomaticPaymentMethods;
    export type ExcludedPaymentMethodType = Stripe.SetupIntentCreateParams.ExcludedPaymentMethodType;
    export type FlowDirection = Stripe.SetupIntentCreateParams.FlowDirection;
    export type MandateData = Stripe.SetupIntentCreateParams.MandateData;
    export type PaymentMethodData = Stripe.SetupIntentCreateParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe.SetupIntentCreateParams.PaymentMethodOptions;
    export type SingleUse = Stripe.SetupIntentCreateParams.SingleUse;
    export type Usage = Stripe.SetupIntentCreateParams.Usage;
    export namespace AutomaticPaymentMethods {
      export type AllowRedirects = Stripe.SetupIntentCreateParams.AutomaticPaymentMethods.AllowRedirects;
    }
    export namespace MandateData {
      export type CustomerAcceptance = Stripe.SetupIntentCreateParams.MandateData.CustomerAcceptance;
      export namespace CustomerAcceptance {
        export type Offline = Stripe.SetupIntentCreateParams.MandateData.CustomerAcceptance.Offline;
        export type Online = Stripe.SetupIntentCreateParams.MandateData.CustomerAcceptance.Online;
        export type Type = Stripe.SetupIntentCreateParams.MandateData.CustomerAcceptance.Type;
      }
    }
    export namespace PaymentMethodData {
      export type AcssDebit = Stripe.SetupIntentCreateParams.PaymentMethodData.AcssDebit;
      export type Affirm = Stripe.SetupIntentCreateParams.PaymentMethodData.Affirm;
      export type AfterpayClearpay = Stripe.SetupIntentCreateParams.PaymentMethodData.AfterpayClearpay;
      export type Alipay = Stripe.SetupIntentCreateParams.PaymentMethodData.Alipay;
      export type AllowRedisplay = Stripe.SetupIntentCreateParams.PaymentMethodData.AllowRedisplay;
      export type Alma = Stripe.SetupIntentCreateParams.PaymentMethodData.Alma;
      export type AmazonPay = Stripe.SetupIntentCreateParams.PaymentMethodData.AmazonPay;
      export type AuBecsDebit = Stripe.SetupIntentCreateParams.PaymentMethodData.AuBecsDebit;
      export type BacsDebit = Stripe.SetupIntentCreateParams.PaymentMethodData.BacsDebit;
      export type Bancontact = Stripe.SetupIntentCreateParams.PaymentMethodData.Bancontact;
      export type Billie = Stripe.SetupIntentCreateParams.PaymentMethodData.Billie;
      export type BillingDetails = Stripe.SetupIntentCreateParams.PaymentMethodData.BillingDetails;
      export type Bizum = Stripe.SetupIntentCreateParams.PaymentMethodData.Bizum;
      export type Blik = Stripe.SetupIntentCreateParams.PaymentMethodData.Blik;
      export type Boleto = Stripe.SetupIntentCreateParams.PaymentMethodData.Boleto;
      export type Cashapp = Stripe.SetupIntentCreateParams.PaymentMethodData.Cashapp;
      export type Crypto = Stripe.SetupIntentCreateParams.PaymentMethodData.Crypto;
      export type CustomerBalance = Stripe.SetupIntentCreateParams.PaymentMethodData.CustomerBalance;
      export type Eps = Stripe.SetupIntentCreateParams.PaymentMethodData.Eps;
      export type Fpx = Stripe.SetupIntentCreateParams.PaymentMethodData.Fpx;
      export type Giropay = Stripe.SetupIntentCreateParams.PaymentMethodData.Giropay;
      export type Grabpay = Stripe.SetupIntentCreateParams.PaymentMethodData.Grabpay;
      export type Ideal = Stripe.SetupIntentCreateParams.PaymentMethodData.Ideal;
      export type InteracPresent = Stripe.SetupIntentCreateParams.PaymentMethodData.InteracPresent;
      export type KakaoPay = Stripe.SetupIntentCreateParams.PaymentMethodData.KakaoPay;
      export type Klarna = Stripe.SetupIntentCreateParams.PaymentMethodData.Klarna;
      export type Konbini = Stripe.SetupIntentCreateParams.PaymentMethodData.Konbini;
      export type KrCard = Stripe.SetupIntentCreateParams.PaymentMethodData.KrCard;
      export type Link = Stripe.SetupIntentCreateParams.PaymentMethodData.Link;
      export type MbWay = Stripe.SetupIntentCreateParams.PaymentMethodData.MbWay;
      export type Mobilepay = Stripe.SetupIntentCreateParams.PaymentMethodData.Mobilepay;
      export type Multibanco = Stripe.SetupIntentCreateParams.PaymentMethodData.Multibanco;
      export type NaverPay = Stripe.SetupIntentCreateParams.PaymentMethodData.NaverPay;
      export type NzBankAccount = Stripe.SetupIntentCreateParams.PaymentMethodData.NzBankAccount;
      export type Oxxo = Stripe.SetupIntentCreateParams.PaymentMethodData.Oxxo;
      export type P24 = Stripe.SetupIntentCreateParams.PaymentMethodData.P24;
      export type PayByBank = Stripe.SetupIntentCreateParams.PaymentMethodData.PayByBank;
      export type Payco = Stripe.SetupIntentCreateParams.PaymentMethodData.Payco;
      export type Paynow = Stripe.SetupIntentCreateParams.PaymentMethodData.Paynow;
      export type Paypal = Stripe.SetupIntentCreateParams.PaymentMethodData.Paypal;
      export type Payto = Stripe.SetupIntentCreateParams.PaymentMethodData.Payto;
      export type Pix = Stripe.SetupIntentCreateParams.PaymentMethodData.Pix;
      export type Promptpay = Stripe.SetupIntentCreateParams.PaymentMethodData.Promptpay;
      export type RadarOptions = Stripe.SetupIntentCreateParams.PaymentMethodData.RadarOptions;
      export type RevolutPay = Stripe.SetupIntentCreateParams.PaymentMethodData.RevolutPay;
      export type SamsungPay = Stripe.SetupIntentCreateParams.PaymentMethodData.SamsungPay;
      export type Satispay = Stripe.SetupIntentCreateParams.PaymentMethodData.Satispay;
      export type Scalapay = Stripe.SetupIntentCreateParams.PaymentMethodData.Scalapay;
      export type SepaDebit = Stripe.SetupIntentCreateParams.PaymentMethodData.SepaDebit;
      export type Sofort = Stripe.SetupIntentCreateParams.PaymentMethodData.Sofort;
      export type Sunbit = Stripe.SetupIntentCreateParams.PaymentMethodData.Sunbit;
      export type Swish = Stripe.SetupIntentCreateParams.PaymentMethodData.Swish;
      export type Twint = Stripe.SetupIntentCreateParams.PaymentMethodData.Twint;
      export type Type = Stripe.SetupIntentCreateParams.PaymentMethodData.Type;
      export type Upi = Stripe.SetupIntentCreateParams.PaymentMethodData.Upi;
      export type UsBankAccount = Stripe.SetupIntentCreateParams.PaymentMethodData.UsBankAccount;
      export type WechatPay = Stripe.SetupIntentCreateParams.PaymentMethodData.WechatPay;
      export type Zip = Stripe.SetupIntentCreateParams.PaymentMethodData.Zip;
      export namespace Eps {
        export type Bank = Stripe.SetupIntentCreateParams.PaymentMethodData.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe.SetupIntentCreateParams.PaymentMethodData.Fpx.AccountHolderType;
        export type Bank = Stripe.SetupIntentCreateParams.PaymentMethodData.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe.SetupIntentCreateParams.PaymentMethodData.Ideal.Bank;
      }
      export namespace Klarna {
        export type Dob = Stripe.SetupIntentCreateParams.PaymentMethodData.Klarna.Dob;
      }
      export namespace NaverPay {
        export type Funding = Stripe.SetupIntentCreateParams.PaymentMethodData.NaverPay.Funding;
      }
      export namespace P24 {
        export type Bank = Stripe.SetupIntentCreateParams.PaymentMethodData.P24.Bank;
      }
      export namespace Sofort {
        export type Country = Stripe.SetupIntentCreateParams.PaymentMethodData.Sofort.Country;
      }
      export namespace Upi {
        export type MandateOptions = Stripe.SetupIntentCreateParams.PaymentMethodData.Upi.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe.SetupIntentCreateParams.PaymentMethodData.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe.SetupIntentCreateParams.PaymentMethodData.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe.SetupIntentCreateParams.PaymentMethodData.UsBankAccount.AccountType;
      }
    }
    export namespace PaymentMethodOptions {
      export type AcssDebit = Stripe.SetupIntentCreateParams.PaymentMethodOptions.AcssDebit;
      export type AmazonPay = Stripe.SetupIntentCreateParams.PaymentMethodOptions.AmazonPay;
      export type BacsDebit = Stripe.SetupIntentCreateParams.PaymentMethodOptions.BacsDebit;
      export type Bizum = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Bizum;
      export type Card = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Card;
      export type CardPresent = Stripe.SetupIntentCreateParams.PaymentMethodOptions.CardPresent;
      export type Klarna = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Klarna;
      export type Link = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Link;
      export type Paypal = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Paypal;
      export type Payto = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Payto;
      export type Pix = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Pix;
      export type SepaDebit = Stripe.SetupIntentCreateParams.PaymentMethodOptions.SepaDebit;
      export type Upi = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Upi;
      export type UsBankAccount = Stripe.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount;
      export namespace AcssDebit {
        export type Currency = Stripe.SetupIntentCreateParams.PaymentMethodOptions.AcssDebit.Currency;
        export type MandateOptions = Stripe.SetupIntentCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions;
        export type VerificationMethod = Stripe.SetupIntentCreateParams.PaymentMethodOptions.AcssDebit.VerificationMethod;
        export namespace MandateOptions {
          export type DefaultFor = Stripe.SetupIntentCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions.DefaultFor;
          export type PaymentSchedule = Stripe.SetupIntentCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
          export type TransactionType = Stripe.SetupIntentCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
        }
      }
      export namespace BacsDebit {
        export type MandateOptions = Stripe.SetupIntentCreateParams.PaymentMethodOptions.BacsDebit.MandateOptions;
      }
      export namespace Card {
        export type MandateOptions = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Card.MandateOptions;
        export type Network = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Card.Network;
        export type RequestThreeDSecure = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Card.RequestThreeDSecure;
        export type ThreeDSecure = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure;
        export namespace MandateOptions {
          export type AmountType = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Card.MandateOptions.AmountType;
          export type Interval = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Card.MandateOptions.Interval;
        }
        export namespace ThreeDSecure {
          export type AresTransStatus = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.AresTransStatus;
          export type ElectronicCommerceIndicator = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type NetworkOptions = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions;
          export type Version = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.Version;
          export namespace NetworkOptions {
            export type CartesBancaires = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires;
            export namespace CartesBancaires {
              export type CbAvalgo = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires.CbAvalgo;
            }
          }
        }
      }
      export namespace Klarna {
        export type OnDemand = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Klarna.OnDemand;
        export type PreferredLocale = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Klarna.PreferredLocale;
        export type Subscription = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Klarna.Subscription;
        export namespace OnDemand {
          export type PurchaseInterval = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Klarna.OnDemand.PurchaseInterval;
        }
        export namespace Subscription {
          export type Interval = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Klarna.Subscription.Interval;
          export type NextBilling = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Klarna.Subscription.NextBilling;
        }
      }
      export namespace Payto {
        export type MandateOptions = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Payto.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Payto.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
          export type Purpose = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Payto.MandateOptions.Purpose;
        }
      }
      export namespace Pix {
        export type MandateOptions = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Pix.MandateOptions;
        export namespace MandateOptions {
          export type AmountIncludesIof = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
          export type AmountType = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Pix.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
        }
      }
      export namespace SepaDebit {
        export type MandateOptions = Stripe.SetupIntentCreateParams.PaymentMethodOptions.SepaDebit.MandateOptions;
      }
      export namespace Upi {
        export type MandateOptions = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Upi.MandateOptions;
        export type SetupFutureUsage = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Upi.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe.SetupIntentCreateParams.PaymentMethodOptions.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type FinancialConnections = Stripe.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections;
        export type MandateOptions = Stripe.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.MandateOptions;
        export type Networks = Stripe.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.Networks;
        export type VerificationMethod = Stripe.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.VerificationMethod;
        export namespace FinancialConnections {
          export type Filters = Stripe.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
          export type Permission = Stripe.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
          export type Prefetch = Stripe.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          export namespace Filters {
            export type AccountSubcategory = Stripe.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
          }
        }
        export namespace Networks {
          export type Requested = Stripe.SetupIntentCreateParams.PaymentMethodOptions.UsBankAccount.Networks.Requested;
        }
      }
    }
  }
  export namespace SetupIntentUpdateParams {
    export type ExcludedPaymentMethodType = Stripe.SetupIntentUpdateParams.ExcludedPaymentMethodType;
    export type FlowDirection = Stripe.SetupIntentUpdateParams.FlowDirection;
    export type PaymentMethodData = Stripe.SetupIntentUpdateParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe.SetupIntentUpdateParams.PaymentMethodOptions;
    export namespace PaymentMethodData {
      export type AcssDebit = Stripe.SetupIntentUpdateParams.PaymentMethodData.AcssDebit;
      export type Affirm = Stripe.SetupIntentUpdateParams.PaymentMethodData.Affirm;
      export type AfterpayClearpay = Stripe.SetupIntentUpdateParams.PaymentMethodData.AfterpayClearpay;
      export type Alipay = Stripe.SetupIntentUpdateParams.PaymentMethodData.Alipay;
      export type AllowRedisplay = Stripe.SetupIntentUpdateParams.PaymentMethodData.AllowRedisplay;
      export type Alma = Stripe.SetupIntentUpdateParams.PaymentMethodData.Alma;
      export type AmazonPay = Stripe.SetupIntentUpdateParams.PaymentMethodData.AmazonPay;
      export type AuBecsDebit = Stripe.SetupIntentUpdateParams.PaymentMethodData.AuBecsDebit;
      export type BacsDebit = Stripe.SetupIntentUpdateParams.PaymentMethodData.BacsDebit;
      export type Bancontact = Stripe.SetupIntentUpdateParams.PaymentMethodData.Bancontact;
      export type Billie = Stripe.SetupIntentUpdateParams.PaymentMethodData.Billie;
      export type BillingDetails = Stripe.SetupIntentUpdateParams.PaymentMethodData.BillingDetails;
      export type Bizum = Stripe.SetupIntentUpdateParams.PaymentMethodData.Bizum;
      export type Blik = Stripe.SetupIntentUpdateParams.PaymentMethodData.Blik;
      export type Boleto = Stripe.SetupIntentUpdateParams.PaymentMethodData.Boleto;
      export type Cashapp = Stripe.SetupIntentUpdateParams.PaymentMethodData.Cashapp;
      export type Crypto = Stripe.SetupIntentUpdateParams.PaymentMethodData.Crypto;
      export type CustomerBalance = Stripe.SetupIntentUpdateParams.PaymentMethodData.CustomerBalance;
      export type Eps = Stripe.SetupIntentUpdateParams.PaymentMethodData.Eps;
      export type Fpx = Stripe.SetupIntentUpdateParams.PaymentMethodData.Fpx;
      export type Giropay = Stripe.SetupIntentUpdateParams.PaymentMethodData.Giropay;
      export type Grabpay = Stripe.SetupIntentUpdateParams.PaymentMethodData.Grabpay;
      export type Ideal = Stripe.SetupIntentUpdateParams.PaymentMethodData.Ideal;
      export type InteracPresent = Stripe.SetupIntentUpdateParams.PaymentMethodData.InteracPresent;
      export type KakaoPay = Stripe.SetupIntentUpdateParams.PaymentMethodData.KakaoPay;
      export type Klarna = Stripe.SetupIntentUpdateParams.PaymentMethodData.Klarna;
      export type Konbini = Stripe.SetupIntentUpdateParams.PaymentMethodData.Konbini;
      export type KrCard = Stripe.SetupIntentUpdateParams.PaymentMethodData.KrCard;
      export type Link = Stripe.SetupIntentUpdateParams.PaymentMethodData.Link;
      export type MbWay = Stripe.SetupIntentUpdateParams.PaymentMethodData.MbWay;
      export type Mobilepay = Stripe.SetupIntentUpdateParams.PaymentMethodData.Mobilepay;
      export type Multibanco = Stripe.SetupIntentUpdateParams.PaymentMethodData.Multibanco;
      export type NaverPay = Stripe.SetupIntentUpdateParams.PaymentMethodData.NaverPay;
      export type NzBankAccount = Stripe.SetupIntentUpdateParams.PaymentMethodData.NzBankAccount;
      export type Oxxo = Stripe.SetupIntentUpdateParams.PaymentMethodData.Oxxo;
      export type P24 = Stripe.SetupIntentUpdateParams.PaymentMethodData.P24;
      export type PayByBank = Stripe.SetupIntentUpdateParams.PaymentMethodData.PayByBank;
      export type Payco = Stripe.SetupIntentUpdateParams.PaymentMethodData.Payco;
      export type Paynow = Stripe.SetupIntentUpdateParams.PaymentMethodData.Paynow;
      export type Paypal = Stripe.SetupIntentUpdateParams.PaymentMethodData.Paypal;
      export type Payto = Stripe.SetupIntentUpdateParams.PaymentMethodData.Payto;
      export type Pix = Stripe.SetupIntentUpdateParams.PaymentMethodData.Pix;
      export type Promptpay = Stripe.SetupIntentUpdateParams.PaymentMethodData.Promptpay;
      export type RadarOptions = Stripe.SetupIntentUpdateParams.PaymentMethodData.RadarOptions;
      export type RevolutPay = Stripe.SetupIntentUpdateParams.PaymentMethodData.RevolutPay;
      export type SamsungPay = Stripe.SetupIntentUpdateParams.PaymentMethodData.SamsungPay;
      export type Satispay = Stripe.SetupIntentUpdateParams.PaymentMethodData.Satispay;
      export type Scalapay = Stripe.SetupIntentUpdateParams.PaymentMethodData.Scalapay;
      export type SepaDebit = Stripe.SetupIntentUpdateParams.PaymentMethodData.SepaDebit;
      export type Sofort = Stripe.SetupIntentUpdateParams.PaymentMethodData.Sofort;
      export type Sunbit = Stripe.SetupIntentUpdateParams.PaymentMethodData.Sunbit;
      export type Swish = Stripe.SetupIntentUpdateParams.PaymentMethodData.Swish;
      export type Twint = Stripe.SetupIntentUpdateParams.PaymentMethodData.Twint;
      export type Type = Stripe.SetupIntentUpdateParams.PaymentMethodData.Type;
      export type Upi = Stripe.SetupIntentUpdateParams.PaymentMethodData.Upi;
      export type UsBankAccount = Stripe.SetupIntentUpdateParams.PaymentMethodData.UsBankAccount;
      export type WechatPay = Stripe.SetupIntentUpdateParams.PaymentMethodData.WechatPay;
      export type Zip = Stripe.SetupIntentUpdateParams.PaymentMethodData.Zip;
      export namespace Eps {
        export type Bank = Stripe.SetupIntentUpdateParams.PaymentMethodData.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe.SetupIntentUpdateParams.PaymentMethodData.Fpx.AccountHolderType;
        export type Bank = Stripe.SetupIntentUpdateParams.PaymentMethodData.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe.SetupIntentUpdateParams.PaymentMethodData.Ideal.Bank;
      }
      export namespace Klarna {
        export type Dob = Stripe.SetupIntentUpdateParams.PaymentMethodData.Klarna.Dob;
      }
      export namespace NaverPay {
        export type Funding = Stripe.SetupIntentUpdateParams.PaymentMethodData.NaverPay.Funding;
      }
      export namespace P24 {
        export type Bank = Stripe.SetupIntentUpdateParams.PaymentMethodData.P24.Bank;
      }
      export namespace Sofort {
        export type Country = Stripe.SetupIntentUpdateParams.PaymentMethodData.Sofort.Country;
      }
      export namespace Upi {
        export type MandateOptions = Stripe.SetupIntentUpdateParams.PaymentMethodData.Upi.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe.SetupIntentUpdateParams.PaymentMethodData.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe.SetupIntentUpdateParams.PaymentMethodData.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe.SetupIntentUpdateParams.PaymentMethodData.UsBankAccount.AccountType;
      }
    }
    export namespace PaymentMethodOptions {
      export type AcssDebit = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.AcssDebit;
      export type AmazonPay = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.AmazonPay;
      export type BacsDebit = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.BacsDebit;
      export type Bizum = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Bizum;
      export type Card = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Card;
      export type CardPresent = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.CardPresent;
      export type Klarna = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Klarna;
      export type Link = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Link;
      export type Paypal = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Paypal;
      export type Payto = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Payto;
      export type Pix = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Pix;
      export type SepaDebit = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.SepaDebit;
      export type Upi = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Upi;
      export type UsBankAccount = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount;
      export namespace AcssDebit {
        export type Currency = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.AcssDebit.Currency;
        export type MandateOptions = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.AcssDebit.MandateOptions;
        export type VerificationMethod = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.AcssDebit.VerificationMethod;
        export namespace MandateOptions {
          export type DefaultFor = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.AcssDebit.MandateOptions.DefaultFor;
          export type PaymentSchedule = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
          export type TransactionType = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
        }
      }
      export namespace BacsDebit {
        export type MandateOptions = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.BacsDebit.MandateOptions;
      }
      export namespace Card {
        export type MandateOptions = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Card.MandateOptions;
        export type Network = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Card.Network;
        export type RequestThreeDSecure = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Card.RequestThreeDSecure;
        export type ThreeDSecure = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure;
        export namespace MandateOptions {
          export type AmountType = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Card.MandateOptions.AmountType;
          export type Interval = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Card.MandateOptions.Interval;
        }
        export namespace ThreeDSecure {
          export type AresTransStatus = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.AresTransStatus;
          export type ElectronicCommerceIndicator = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type NetworkOptions = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions;
          export type Version = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.Version;
          export namespace NetworkOptions {
            export type CartesBancaires = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires;
            export namespace CartesBancaires {
              export type CbAvalgo = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires.CbAvalgo;
            }
          }
        }
      }
      export namespace Klarna {
        export type OnDemand = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Klarna.OnDemand;
        export type PreferredLocale = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Klarna.PreferredLocale;
        export type Subscription = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Klarna.Subscription;
        export namespace OnDemand {
          export type PurchaseInterval = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Klarna.OnDemand.PurchaseInterval;
        }
        export namespace Subscription {
          export type Interval = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Klarna.Subscription.Interval;
          export type NextBilling = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Klarna.Subscription.NextBilling;
        }
      }
      export namespace Payto {
        export type MandateOptions = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Payto.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Payto.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
          export type Purpose = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Payto.MandateOptions.Purpose;
        }
      }
      export namespace Pix {
        export type MandateOptions = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Pix.MandateOptions;
        export namespace MandateOptions {
          export type AmountIncludesIof = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
          export type AmountType = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Pix.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
        }
      }
      export namespace SepaDebit {
        export type MandateOptions = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.SepaDebit.MandateOptions;
      }
      export namespace Upi {
        export type MandateOptions = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Upi.MandateOptions;
        export type SetupFutureUsage = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Upi.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type FinancialConnections = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections;
        export type MandateOptions = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.MandateOptions;
        export type Networks = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.Networks;
        export type VerificationMethod = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.VerificationMethod;
        export namespace FinancialConnections {
          export type Filters = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
          export type Permission = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
          export type Prefetch = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          export namespace Filters {
            export type AccountSubcategory = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
          }
        }
        export namespace Networks {
          export type Requested = Stripe.SetupIntentUpdateParams.PaymentMethodOptions.UsBankAccount.Networks.Requested;
        }
      }
    }
  }
  export namespace SetupIntentCancelParams {
    export type CancellationReason = Stripe.SetupIntentCancelParams.CancellationReason;
  }
  export namespace SetupIntentConfirmParams {
    export type MandateData = Stripe.SetupIntentConfirmParams.MandateData;
    export type PaymentMethodData = Stripe.SetupIntentConfirmParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe.SetupIntentConfirmParams.PaymentMethodOptions;
    export namespace MandateData {
      export type CustomerAcceptance = Stripe.SetupIntentConfirmParams.MandateData.CustomerAcceptance;
      export namespace CustomerAcceptance {
        export type Offline = Stripe.SetupIntentConfirmParams.MandateData.CustomerAcceptance.Offline;
        export type Online = Stripe.SetupIntentConfirmParams.MandateData.CustomerAcceptance.Online;
        export type Type = Stripe.SetupIntentConfirmParams.MandateData.CustomerAcceptance.Type;
      }
    }
    export namespace PaymentMethodData {
      export type AcssDebit = Stripe.SetupIntentConfirmParams.PaymentMethodData.AcssDebit;
      export type Affirm = Stripe.SetupIntentConfirmParams.PaymentMethodData.Affirm;
      export type AfterpayClearpay = Stripe.SetupIntentConfirmParams.PaymentMethodData.AfterpayClearpay;
      export type Alipay = Stripe.SetupIntentConfirmParams.PaymentMethodData.Alipay;
      export type AllowRedisplay = Stripe.SetupIntentConfirmParams.PaymentMethodData.AllowRedisplay;
      export type Alma = Stripe.SetupIntentConfirmParams.PaymentMethodData.Alma;
      export type AmazonPay = Stripe.SetupIntentConfirmParams.PaymentMethodData.AmazonPay;
      export type AuBecsDebit = Stripe.SetupIntentConfirmParams.PaymentMethodData.AuBecsDebit;
      export type BacsDebit = Stripe.SetupIntentConfirmParams.PaymentMethodData.BacsDebit;
      export type Bancontact = Stripe.SetupIntentConfirmParams.PaymentMethodData.Bancontact;
      export type Billie = Stripe.SetupIntentConfirmParams.PaymentMethodData.Billie;
      export type BillingDetails = Stripe.SetupIntentConfirmParams.PaymentMethodData.BillingDetails;
      export type Bizum = Stripe.SetupIntentConfirmParams.PaymentMethodData.Bizum;
      export type Blik = Stripe.SetupIntentConfirmParams.PaymentMethodData.Blik;
      export type Boleto = Stripe.SetupIntentConfirmParams.PaymentMethodData.Boleto;
      export type Cashapp = Stripe.SetupIntentConfirmParams.PaymentMethodData.Cashapp;
      export type Crypto = Stripe.SetupIntentConfirmParams.PaymentMethodData.Crypto;
      export type CustomerBalance = Stripe.SetupIntentConfirmParams.PaymentMethodData.CustomerBalance;
      export type Eps = Stripe.SetupIntentConfirmParams.PaymentMethodData.Eps;
      export type Fpx = Stripe.SetupIntentConfirmParams.PaymentMethodData.Fpx;
      export type Giropay = Stripe.SetupIntentConfirmParams.PaymentMethodData.Giropay;
      export type Grabpay = Stripe.SetupIntentConfirmParams.PaymentMethodData.Grabpay;
      export type Ideal = Stripe.SetupIntentConfirmParams.PaymentMethodData.Ideal;
      export type InteracPresent = Stripe.SetupIntentConfirmParams.PaymentMethodData.InteracPresent;
      export type KakaoPay = Stripe.SetupIntentConfirmParams.PaymentMethodData.KakaoPay;
      export type Klarna = Stripe.SetupIntentConfirmParams.PaymentMethodData.Klarna;
      export type Konbini = Stripe.SetupIntentConfirmParams.PaymentMethodData.Konbini;
      export type KrCard = Stripe.SetupIntentConfirmParams.PaymentMethodData.KrCard;
      export type Link = Stripe.SetupIntentConfirmParams.PaymentMethodData.Link;
      export type MbWay = Stripe.SetupIntentConfirmParams.PaymentMethodData.MbWay;
      export type Mobilepay = Stripe.SetupIntentConfirmParams.PaymentMethodData.Mobilepay;
      export type Multibanco = Stripe.SetupIntentConfirmParams.PaymentMethodData.Multibanco;
      export type NaverPay = Stripe.SetupIntentConfirmParams.PaymentMethodData.NaverPay;
      export type NzBankAccount = Stripe.SetupIntentConfirmParams.PaymentMethodData.NzBankAccount;
      export type Oxxo = Stripe.SetupIntentConfirmParams.PaymentMethodData.Oxxo;
      export type P24 = Stripe.SetupIntentConfirmParams.PaymentMethodData.P24;
      export type PayByBank = Stripe.SetupIntentConfirmParams.PaymentMethodData.PayByBank;
      export type Payco = Stripe.SetupIntentConfirmParams.PaymentMethodData.Payco;
      export type Paynow = Stripe.SetupIntentConfirmParams.PaymentMethodData.Paynow;
      export type Paypal = Stripe.SetupIntentConfirmParams.PaymentMethodData.Paypal;
      export type Payto = Stripe.SetupIntentConfirmParams.PaymentMethodData.Payto;
      export type Pix = Stripe.SetupIntentConfirmParams.PaymentMethodData.Pix;
      export type Promptpay = Stripe.SetupIntentConfirmParams.PaymentMethodData.Promptpay;
      export type RadarOptions = Stripe.SetupIntentConfirmParams.PaymentMethodData.RadarOptions;
      export type RevolutPay = Stripe.SetupIntentConfirmParams.PaymentMethodData.RevolutPay;
      export type SamsungPay = Stripe.SetupIntentConfirmParams.PaymentMethodData.SamsungPay;
      export type Satispay = Stripe.SetupIntentConfirmParams.PaymentMethodData.Satispay;
      export type Scalapay = Stripe.SetupIntentConfirmParams.PaymentMethodData.Scalapay;
      export type SepaDebit = Stripe.SetupIntentConfirmParams.PaymentMethodData.SepaDebit;
      export type Sofort = Stripe.SetupIntentConfirmParams.PaymentMethodData.Sofort;
      export type Sunbit = Stripe.SetupIntentConfirmParams.PaymentMethodData.Sunbit;
      export type Swish = Stripe.SetupIntentConfirmParams.PaymentMethodData.Swish;
      export type Twint = Stripe.SetupIntentConfirmParams.PaymentMethodData.Twint;
      export type Type = Stripe.SetupIntentConfirmParams.PaymentMethodData.Type;
      export type Upi = Stripe.SetupIntentConfirmParams.PaymentMethodData.Upi;
      export type UsBankAccount = Stripe.SetupIntentConfirmParams.PaymentMethodData.UsBankAccount;
      export type WechatPay = Stripe.SetupIntentConfirmParams.PaymentMethodData.WechatPay;
      export type Zip = Stripe.SetupIntentConfirmParams.PaymentMethodData.Zip;
      export namespace Eps {
        export type Bank = Stripe.SetupIntentConfirmParams.PaymentMethodData.Eps.Bank;
      }
      export namespace Fpx {
        export type AccountHolderType = Stripe.SetupIntentConfirmParams.PaymentMethodData.Fpx.AccountHolderType;
        export type Bank = Stripe.SetupIntentConfirmParams.PaymentMethodData.Fpx.Bank;
      }
      export namespace Ideal {
        export type Bank = Stripe.SetupIntentConfirmParams.PaymentMethodData.Ideal.Bank;
      }
      export namespace Klarna {
        export type Dob = Stripe.SetupIntentConfirmParams.PaymentMethodData.Klarna.Dob;
      }
      export namespace NaverPay {
        export type Funding = Stripe.SetupIntentConfirmParams.PaymentMethodData.NaverPay.Funding;
      }
      export namespace P24 {
        export type Bank = Stripe.SetupIntentConfirmParams.PaymentMethodData.P24.Bank;
      }
      export namespace Sofort {
        export type Country = Stripe.SetupIntentConfirmParams.PaymentMethodData.Sofort.Country;
      }
      export namespace Upi {
        export type MandateOptions = Stripe.SetupIntentConfirmParams.PaymentMethodData.Upi.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe.SetupIntentConfirmParams.PaymentMethodData.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type AccountHolderType = Stripe.SetupIntentConfirmParams.PaymentMethodData.UsBankAccount.AccountHolderType;
        export type AccountType = Stripe.SetupIntentConfirmParams.PaymentMethodData.UsBankAccount.AccountType;
      }
    }
    export namespace PaymentMethodOptions {
      export type AcssDebit = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.AcssDebit;
      export type AmazonPay = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.AmazonPay;
      export type BacsDebit = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.BacsDebit;
      export type Bizum = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Bizum;
      export type Card = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Card;
      export type CardPresent = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.CardPresent;
      export type Klarna = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Klarna;
      export type Link = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Link;
      export type Paypal = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Paypal;
      export type Payto = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Payto;
      export type Pix = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Pix;
      export type SepaDebit = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.SepaDebit;
      export type Upi = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Upi;
      export type UsBankAccount = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount;
      export namespace AcssDebit {
        export type Currency = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.AcssDebit.Currency;
        export type MandateOptions = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.AcssDebit.MandateOptions;
        export type VerificationMethod = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.AcssDebit.VerificationMethod;
        export namespace MandateOptions {
          export type DefaultFor = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.AcssDebit.MandateOptions.DefaultFor;
          export type PaymentSchedule = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
          export type TransactionType = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
        }
      }
      export namespace BacsDebit {
        export type MandateOptions = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.BacsDebit.MandateOptions;
      }
      export namespace Card {
        export type MandateOptions = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Card.MandateOptions;
        export type Network = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Card.Network;
        export type RequestThreeDSecure = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Card.RequestThreeDSecure;
        export type ThreeDSecure = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure;
        export namespace MandateOptions {
          export type AmountType = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Card.MandateOptions.AmountType;
          export type Interval = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Card.MandateOptions.Interval;
        }
        export namespace ThreeDSecure {
          export type AresTransStatus = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.AresTransStatus;
          export type ElectronicCommerceIndicator = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.ElectronicCommerceIndicator;
          export type NetworkOptions = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions;
          export type Version = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.Version;
          export namespace NetworkOptions {
            export type CartesBancaires = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires;
            export namespace CartesBancaires {
              export type CbAvalgo = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Card.ThreeDSecure.NetworkOptions.CartesBancaires.CbAvalgo;
            }
          }
        }
      }
      export namespace Klarna {
        export type OnDemand = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Klarna.OnDemand;
        export type PreferredLocale = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Klarna.PreferredLocale;
        export type Subscription = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Klarna.Subscription;
        export namespace OnDemand {
          export type PurchaseInterval = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Klarna.OnDemand.PurchaseInterval;
        }
        export namespace Subscription {
          export type Interval = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Klarna.Subscription.Interval;
          export type NextBilling = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Klarna.Subscription.NextBilling;
        }
      }
      export namespace Payto {
        export type MandateOptions = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Payto.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Payto.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
          export type Purpose = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Payto.MandateOptions.Purpose;
        }
      }
      export namespace Pix {
        export type MandateOptions = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Pix.MandateOptions;
        export namespace MandateOptions {
          export type AmountIncludesIof = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
          export type AmountType = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Pix.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
        }
      }
      export namespace SepaDebit {
        export type MandateOptions = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.SepaDebit.MandateOptions;
      }
      export namespace Upi {
        export type MandateOptions = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Upi.MandateOptions;
        export type SetupFutureUsage = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Upi.SetupFutureUsage;
        export namespace MandateOptions {
          export type AmountType = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type FinancialConnections = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections;
        export type MandateOptions = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.MandateOptions;
        export type Networks = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.Networks;
        export type VerificationMethod = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.VerificationMethod;
        export namespace FinancialConnections {
          export type Filters = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
          export type Permission = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
          export type Prefetch = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          export namespace Filters {
            export type AccountSubcategory = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
          }
        }
        export namespace Networks {
          export type Requested = Stripe.SetupIntentConfirmParams.PaymentMethodOptions.UsBankAccount.Networks.Requested;
        }
      }
    }
  }
  export namespace SetupIntent {
    export type AutomaticPaymentMethods = Stripe.SetupIntent.AutomaticPaymentMethods;
    export type CancellationReason = Stripe.SetupIntent.CancellationReason;
    export type ExcludedPaymentMethodType = Stripe.SetupIntent.ExcludedPaymentMethodType;
    export type FlowDirection = Stripe.SetupIntent.FlowDirection;
    export type LastSetupError = Stripe.SetupIntent.LastSetupError;
    export type ManagedPayments = Stripe.SetupIntent.ManagedPayments;
    export type NextAction = Stripe.SetupIntent.NextAction;
    export type PaymentMethodConfigurationDetails = Stripe.SetupIntent.PaymentMethodConfigurationDetails;
    export type PaymentMethodOptions = Stripe.SetupIntent.PaymentMethodOptions;
    export type Status = Stripe.SetupIntent.Status;
    export namespace AutomaticPaymentMethods {
      export type AllowRedirects = Stripe.SetupIntent.AutomaticPaymentMethods.AllowRedirects;
    }
    export namespace LastSetupError {
      export type Code = Stripe.SetupIntent.LastSetupError.Code;
      export type Type = Stripe.SetupIntent.LastSetupError.Type;
    }
    export namespace NextAction {
      export type BlikAuthorize = Stripe.SetupIntent.NextAction.BlikAuthorize;
      export type CashappHandleRedirectOrDisplayQrCode = Stripe.SetupIntent.NextAction.CashappHandleRedirectOrDisplayQrCode;
      export type PixDisplayQrCode = Stripe.SetupIntent.NextAction.PixDisplayQrCode;
      export type RedirectToUrl = Stripe.SetupIntent.NextAction.RedirectToUrl;
      export type UpiHandleRedirectOrDisplayQrCode = Stripe.SetupIntent.NextAction.UpiHandleRedirectOrDisplayQrCode;
      export type UseStripeSdk = Stripe.SetupIntent.NextAction.UseStripeSdk;
      export type VerifyWithMicrodeposits = Stripe.SetupIntent.NextAction.VerifyWithMicrodeposits;
      export namespace CashappHandleRedirectOrDisplayQrCode {
        export type QrCode = Stripe.SetupIntent.NextAction.CashappHandleRedirectOrDisplayQrCode.QrCode;
      }
      export namespace UpiHandleRedirectOrDisplayQrCode {
        export type QrCode = Stripe.SetupIntent.NextAction.UpiHandleRedirectOrDisplayQrCode.QrCode;
      }
      export namespace VerifyWithMicrodeposits {
        export type MicrodepositType = Stripe.SetupIntent.NextAction.VerifyWithMicrodeposits.MicrodepositType;
      }
    }
    export namespace PaymentMethodOptions {
      export type AcssDebit = Stripe.SetupIntent.PaymentMethodOptions.AcssDebit;
      export type AmazonPay = Stripe.SetupIntent.PaymentMethodOptions.AmazonPay;
      export type BacsDebit = Stripe.SetupIntent.PaymentMethodOptions.BacsDebit;
      export type Bizum = Stripe.SetupIntent.PaymentMethodOptions.Bizum;
      export type Card = Stripe.SetupIntent.PaymentMethodOptions.Card;
      export type CardPresent = Stripe.SetupIntent.PaymentMethodOptions.CardPresent;
      export type Klarna = Stripe.SetupIntent.PaymentMethodOptions.Klarna;
      export type Link = Stripe.SetupIntent.PaymentMethodOptions.Link;
      export type Paypal = Stripe.SetupIntent.PaymentMethodOptions.Paypal;
      export type Payto = Stripe.SetupIntent.PaymentMethodOptions.Payto;
      export type Pix = Stripe.SetupIntent.PaymentMethodOptions.Pix;
      export type SepaDebit = Stripe.SetupIntent.PaymentMethodOptions.SepaDebit;
      export type Upi = Stripe.SetupIntent.PaymentMethodOptions.Upi;
      export type UsBankAccount = Stripe.SetupIntent.PaymentMethodOptions.UsBankAccount;
      export namespace AcssDebit {
        export type Currency = Stripe.SetupIntent.PaymentMethodOptions.AcssDebit.Currency;
        export type MandateOptions = Stripe.SetupIntent.PaymentMethodOptions.AcssDebit.MandateOptions;
        export type VerificationMethod = Stripe.SetupIntent.PaymentMethodOptions.AcssDebit.VerificationMethod;
        export namespace MandateOptions {
          export type DefaultFor = Stripe.SetupIntent.PaymentMethodOptions.AcssDebit.MandateOptions.DefaultFor;
          export type PaymentSchedule = Stripe.SetupIntent.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
          export type TransactionType = Stripe.SetupIntent.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
        }
      }
      export namespace BacsDebit {
        export type MandateOptions = Stripe.SetupIntent.PaymentMethodOptions.BacsDebit.MandateOptions;
      }
      export namespace Card {
        export type MandateOptions = Stripe.SetupIntent.PaymentMethodOptions.Card.MandateOptions;
        export type Network = Stripe.SetupIntent.PaymentMethodOptions.Card.Network;
        export type RequestThreeDSecure = Stripe.SetupIntent.PaymentMethodOptions.Card.RequestThreeDSecure;
        export namespace MandateOptions {
          export type AmountType = Stripe.SetupIntent.PaymentMethodOptions.Card.MandateOptions.AmountType;
          export type Interval = Stripe.SetupIntent.PaymentMethodOptions.Card.MandateOptions.Interval;
        }
      }
      export namespace Payto {
        export type MandateOptions = Stripe.SetupIntent.PaymentMethodOptions.Payto.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe.SetupIntent.PaymentMethodOptions.Payto.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe.SetupIntent.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
          export type Purpose = Stripe.SetupIntent.PaymentMethodOptions.Payto.MandateOptions.Purpose;
        }
      }
      export namespace Pix {
        export type MandateOptions = Stripe.SetupIntent.PaymentMethodOptions.Pix.MandateOptions;
        export namespace MandateOptions {
          export type AmountIncludesIof = Stripe.SetupIntent.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
          export type AmountType = Stripe.SetupIntent.PaymentMethodOptions.Pix.MandateOptions.AmountType;
          export type PaymentSchedule = Stripe.SetupIntent.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
        }
      }
      export namespace SepaDebit {
        export type MandateOptions = Stripe.SetupIntent.PaymentMethodOptions.SepaDebit.MandateOptions;
      }
      export namespace Upi {
        export type MandateOptions = Stripe.SetupIntent.PaymentMethodOptions.Upi.MandateOptions;
        export namespace MandateOptions {
          export type AmountType = Stripe.SetupIntent.PaymentMethodOptions.Upi.MandateOptions.AmountType;
        }
      }
      export namespace UsBankAccount {
        export type FinancialConnections = Stripe.SetupIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections;
        export type MandateOptions = Stripe.SetupIntent.PaymentMethodOptions.UsBankAccount.MandateOptions;
        export type VerificationMethod = Stripe.SetupIntent.PaymentMethodOptions.UsBankAccount.VerificationMethod;
        export namespace FinancialConnections {
          export type Filters = Stripe.SetupIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
          export type Permission = Stripe.SetupIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
          export type Prefetch = Stripe.SetupIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          export namespace Filters {
            export type AccountSubcategory = Stripe.SetupIntent.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
          }
        }
      }
    }
  }
  export namespace ShippingRateCreateParams {
    export type DeliveryEstimate = Stripe.ShippingRateCreateParams.DeliveryEstimate;
    export type FixedAmount = Stripe.ShippingRateCreateParams.FixedAmount;
    export type TaxBehavior = Stripe.ShippingRateCreateParams.TaxBehavior;
    export namespace DeliveryEstimate {
      export type Maximum = Stripe.ShippingRateCreateParams.DeliveryEstimate.Maximum;
      export type Minimum = Stripe.ShippingRateCreateParams.DeliveryEstimate.Minimum;
      export namespace Maximum {
        export type Unit = Stripe.ShippingRateCreateParams.DeliveryEstimate.Maximum.Unit;
      }
      export namespace Minimum {
        export type Unit = Stripe.ShippingRateCreateParams.DeliveryEstimate.Minimum.Unit;
      }
    }
    export namespace FixedAmount {
      export type CurrencyOptions = Stripe.ShippingRateCreateParams.FixedAmount.CurrencyOptions;
      export namespace CurrencyOptions {
        export type TaxBehavior = Stripe.ShippingRateCreateParams.FixedAmount.CurrencyOptions.TaxBehavior;
      }
    }
  }
  export namespace ShippingRateUpdateParams {
    export type FixedAmount = Stripe.ShippingRateUpdateParams.FixedAmount;
    export type TaxBehavior = Stripe.ShippingRateUpdateParams.TaxBehavior;
    export namespace FixedAmount {
      export type CurrencyOptions = Stripe.ShippingRateUpdateParams.FixedAmount.CurrencyOptions;
      export namespace CurrencyOptions {
        export type TaxBehavior = Stripe.ShippingRateUpdateParams.FixedAmount.CurrencyOptions.TaxBehavior;
      }
    }
  }
  export namespace ShippingRate {
    export type DeliveryEstimate = Stripe.ShippingRate.DeliveryEstimate;
    export type FixedAmount = Stripe.ShippingRate.FixedAmount;
    export type TaxBehavior = Stripe.ShippingRate.TaxBehavior;
    export namespace DeliveryEstimate {
      export type Maximum = Stripe.ShippingRate.DeliveryEstimate.Maximum;
      export type Minimum = Stripe.ShippingRate.DeliveryEstimate.Minimum;
      export namespace Maximum {
        export type Unit = Stripe.ShippingRate.DeliveryEstimate.Maximum.Unit;
      }
      export namespace Minimum {
        export type Unit = Stripe.ShippingRate.DeliveryEstimate.Minimum.Unit;
      }
    }
    export namespace FixedAmount {
      export type CurrencyOptions = Stripe.ShippingRate.FixedAmount.CurrencyOptions;
      export namespace CurrencyOptions {
        export type TaxBehavior = Stripe.ShippingRate.FixedAmount.CurrencyOptions.TaxBehavior;
      }
    }
  }
  export namespace SourceCreateParams {
    export type Flow = Stripe.SourceCreateParams.Flow;
    export type Mandate = Stripe.SourceCreateParams.Mandate;
    export type Owner = Stripe.SourceCreateParams.Owner;
    export type Receiver = Stripe.SourceCreateParams.Receiver;
    export type Redirect = Stripe.SourceCreateParams.Redirect;
    export type SourceOrder = Stripe.SourceCreateParams.SourceOrder;
    export type Usage = Stripe.SourceCreateParams.Usage;
    export namespace Mandate {
      export type Acceptance = Stripe.SourceCreateParams.Mandate.Acceptance;
      export type Interval = Stripe.SourceCreateParams.Mandate.Interval;
      export type NotificationMethod = Stripe.SourceCreateParams.Mandate.NotificationMethod;
      export namespace Acceptance {
        export type Offline = Stripe.SourceCreateParams.Mandate.Acceptance.Offline;
        export type Online = Stripe.SourceCreateParams.Mandate.Acceptance.Online;
        export type Status = Stripe.SourceCreateParams.Mandate.Acceptance.Status;
        export type Type = Stripe.SourceCreateParams.Mandate.Acceptance.Type;
      }
    }
    export namespace Receiver {
      export type RefundAttributesMethod = Stripe.SourceCreateParams.Receiver.RefundAttributesMethod;
    }
    export namespace SourceOrder {
      export type Item = Stripe.SourceCreateParams.SourceOrder.Item;
      export type Shipping = Stripe.SourceCreateParams.SourceOrder.Shipping;
      export namespace Item {
        export type Type = Stripe.SourceCreateParams.SourceOrder.Item.Type;
      }
    }
  }
  export namespace SourceUpdateParams {
    export type Mandate = Stripe.SourceUpdateParams.Mandate;
    export type Owner = Stripe.SourceUpdateParams.Owner;
    export type SourceOrder = Stripe.SourceUpdateParams.SourceOrder;
    export namespace Mandate {
      export type Acceptance = Stripe.SourceUpdateParams.Mandate.Acceptance;
      export type Interval = Stripe.SourceUpdateParams.Mandate.Interval;
      export type NotificationMethod = Stripe.SourceUpdateParams.Mandate.NotificationMethod;
      export namespace Acceptance {
        export type Offline = Stripe.SourceUpdateParams.Mandate.Acceptance.Offline;
        export type Online = Stripe.SourceUpdateParams.Mandate.Acceptance.Online;
        export type Status = Stripe.SourceUpdateParams.Mandate.Acceptance.Status;
        export type Type = Stripe.SourceUpdateParams.Mandate.Acceptance.Type;
      }
    }
    export namespace SourceOrder {
      export type Item = Stripe.SourceUpdateParams.SourceOrder.Item;
      export type Shipping = Stripe.SourceUpdateParams.SourceOrder.Shipping;
      export namespace Item {
        export type Type = Stripe.SourceUpdateParams.SourceOrder.Item.Type;
      }
    }
  }
  export namespace Source {
    export type AchCreditTransfer = Stripe.Source.AchCreditTransfer;
    export type AchDebit = Stripe.Source.AchDebit;
    export type AcssDebit = Stripe.Source.AcssDebit;
    export type Alipay = Stripe.Source.Alipay;
    export type AllowRedisplay = Stripe.Source.AllowRedisplay;
    export type AuBecsDebit = Stripe.Source.AuBecsDebit;
    export type Bancontact = Stripe.Source.Bancontact;
    export type Card = Stripe.Source.Card;
    export type CardPresent = Stripe.Source.CardPresent;
    export type CodeVerification = Stripe.Source.CodeVerification;
    export type Eps = Stripe.Source.Eps;
    export type Giropay = Stripe.Source.Giropay;
    export type Ideal = Stripe.Source.Ideal;
    export type Klarna = Stripe.Source.Klarna;
    export type Multibanco = Stripe.Source.Multibanco;
    export type Owner = Stripe.Source.Owner;
    export type P24 = Stripe.Source.P24;
    export type Receiver = Stripe.Source.Receiver;
    export type Redirect = Stripe.Source.Redirect;
    export type SepaCreditTransfer = Stripe.Source.SepaCreditTransfer;
    export type SepaDebit = Stripe.Source.SepaDebit;
    export type Sofort = Stripe.Source.Sofort;
    export type SourceOrder = Stripe.Source.SourceOrder;
    export type ThreeDSecure = Stripe.Source.ThreeDSecure;
    export type Type = Stripe.Source.Type;
    export type Wechat = Stripe.Source.Wechat;
    export namespace SourceOrder {
      export type Item = Stripe.Source.SourceOrder.Item;
      export type Shipping = Stripe.Source.SourceOrder.Shipping;
    }
  }
  export namespace SubscriptionCreateParams {
    export type AddInvoiceItem = Stripe.SubscriptionCreateParams.AddInvoiceItem;
    export type AutomaticTax = Stripe.SubscriptionCreateParams.AutomaticTax;
    export type BillingCycleAnchorConfig = Stripe.SubscriptionCreateParams.BillingCycleAnchorConfig;
    export type BillingMode = Stripe.SubscriptionCreateParams.BillingMode;
    export type BillingSchedule = Stripe.SubscriptionCreateParams.BillingSchedule;
    export type BillingThresholds = Stripe.SubscriptionCreateParams.BillingThresholds;
    export type CancelAt = Stripe.SubscriptionCreateParams.CancelAt;
    export type CollectionMethod = Stripe.SubscriptionCreateParams.CollectionMethod;
    export type Discount = Stripe.SubscriptionCreateParams.Discount;
    export type InvoiceSettings = Stripe.SubscriptionCreateParams.InvoiceSettings;
    export type Item = Stripe.SubscriptionCreateParams.Item;
    export type PaymentBehavior = Stripe.SubscriptionCreateParams.PaymentBehavior;
    export type PaymentSettings = Stripe.SubscriptionCreateParams.PaymentSettings;
    export type PendingInvoiceItemInterval = Stripe.SubscriptionCreateParams.PendingInvoiceItemInterval;
    export type ProrationBehavior = Stripe.SubscriptionCreateParams.ProrationBehavior;
    export type TransferData = Stripe.SubscriptionCreateParams.TransferData;
    export type TrialSettings = Stripe.SubscriptionCreateParams.TrialSettings;
    export namespace AddInvoiceItem {
      export type Discount = Stripe.SubscriptionCreateParams.AddInvoiceItem.Discount;
      export type Period = Stripe.SubscriptionCreateParams.AddInvoiceItem.Period;
      export type PriceData = Stripe.SubscriptionCreateParams.AddInvoiceItem.PriceData;
      export namespace Period {
        export type End = Stripe.SubscriptionCreateParams.AddInvoiceItem.Period.End;
        export type Start = Stripe.SubscriptionCreateParams.AddInvoiceItem.Period.Start;
        export namespace End {
          export type Type = Stripe.SubscriptionCreateParams.AddInvoiceItem.Period.End.Type;
        }
        export namespace Start {
          export type Type = Stripe.SubscriptionCreateParams.AddInvoiceItem.Period.Start.Type;
        }
      }
      export namespace PriceData {
        export type TaxBehavior = Stripe.SubscriptionCreateParams.AddInvoiceItem.PriceData.TaxBehavior;
      }
    }
    export namespace AutomaticTax {
      export type Liability = Stripe.SubscriptionCreateParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe.SubscriptionCreateParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace BillingMode {
      export type Flexible = Stripe.SubscriptionCreateParams.BillingMode.Flexible;
      export type Type = Stripe.SubscriptionCreateParams.BillingMode.Type;
      export namespace Flexible {
        export type ProrationDiscounts = Stripe.SubscriptionCreateParams.BillingMode.Flexible.ProrationDiscounts;
      }
    }
    export namespace BillingSchedule {
      export type AppliesTo = Stripe.SubscriptionCreateParams.BillingSchedule.AppliesTo;
      export type BillUntil = Stripe.SubscriptionCreateParams.BillingSchedule.BillUntil;
      export namespace BillUntil {
        export type Duration = Stripe.SubscriptionCreateParams.BillingSchedule.BillUntil.Duration;
        export type Type = Stripe.SubscriptionCreateParams.BillingSchedule.BillUntil.Type;
        export namespace Duration {
          export type Interval = Stripe.SubscriptionCreateParams.BillingSchedule.BillUntil.Duration.Interval;
        }
      }
    }
    export namespace InvoiceSettings {
      export type CustomField = Stripe.SubscriptionCreateParams.InvoiceSettings.CustomField;
      export type Issuer = Stripe.SubscriptionCreateParams.InvoiceSettings.Issuer;
      export namespace Issuer {
        export type Type = Stripe.SubscriptionCreateParams.InvoiceSettings.Issuer.Type;
      }
    }
    export namespace Item {
      export type BillingThresholds = Stripe.SubscriptionCreateParams.Item.BillingThresholds;
      export type Discount = Stripe.SubscriptionCreateParams.Item.Discount;
      export type PriceData = Stripe.SubscriptionCreateParams.Item.PriceData;
      export namespace PriceData {
        export type Recurring = Stripe.SubscriptionCreateParams.Item.PriceData.Recurring;
        export type TaxBehavior = Stripe.SubscriptionCreateParams.Item.PriceData.TaxBehavior;
        export namespace Recurring {
          export type Interval = Stripe.SubscriptionCreateParams.Item.PriceData.Recurring.Interval;
        }
      }
    }
    export namespace PaymentSettings {
      export type PaymentMethodOptions = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions;
      export type PaymentMethodType = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodType;
      export type SaveDefaultPaymentMethod = Stripe.SubscriptionCreateParams.PaymentSettings.SaveDefaultPaymentMethod;
      export namespace PaymentMethodOptions {
        export type AcssDebit = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.AcssDebit;
        export type Bancontact = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Bancontact;
        export type Card = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Card;
        export type CustomerBalance = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance;
        export type Konbini = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Konbini;
        export type Payto = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Payto;
        export type Pix = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Pix;
        export type SepaDebit = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.SepaDebit;
        export type Upi = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Upi;
        export type UsBankAccount = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount;
        export namespace AcssDebit {
          export type MandateOptions = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions;
          export type VerificationMethod = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.VerificationMethod;
          export namespace MandateOptions {
            export type TransactionType = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
          }
        }
        export namespace Bancontact {
          export type PreferredLanguage = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Bancontact.PreferredLanguage;
        }
        export namespace Card {
          export type MandateOptions = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Card.MandateOptions;
          export type Network = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Card.Network;
          export type RequestThreeDSecure = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Card.RequestThreeDSecure;
          export namespace MandateOptions {
            export type AmountType = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Card.MandateOptions.AmountType;
          }
        }
        export namespace CustomerBalance {
          export type BankTransfer = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer;
          export namespace BankTransfer {
            export type EuBankTransfer = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
          }
        }
        export namespace Payto {
          export type MandateOptions = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions;
          export namespace MandateOptions {
            export type Purpose = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions.Purpose;
          }
        }
        export namespace Pix {
          export type MandateOptions = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions;
          export namespace MandateOptions {
            export type AmountIncludesIof = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
            export type PaymentSchedule = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
          }
        }
        export namespace Upi {
          export type MandateOptions = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions;
          export namespace MandateOptions {
            export type AmountType = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions.AmountType;
          }
        }
        export namespace UsBankAccount {
          export type FinancialConnections = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections;
          export type VerificationMethod = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.VerificationMethod;
          export namespace FinancialConnections {
            export type Filters = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
            export type Permission = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
            export type Prefetch = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
            export namespace Filters {
              export type AccountSubcategory = Stripe.SubscriptionCreateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
            }
          }
        }
      }
    }
    export namespace PendingInvoiceItemInterval {
      export type Interval = Stripe.SubscriptionCreateParams.PendingInvoiceItemInterval.Interval;
    }
    export namespace TrialSettings {
      export type EndBehavior = Stripe.SubscriptionCreateParams.TrialSettings.EndBehavior;
      export namespace EndBehavior {
        export type MissingPaymentMethod = Stripe.SubscriptionCreateParams.TrialSettings.EndBehavior.MissingPaymentMethod;
      }
    }
  }
  export namespace SubscriptionUpdateParams {
    export type AddInvoiceItem = Stripe.SubscriptionUpdateParams.AddInvoiceItem;
    export type AutomaticTax = Stripe.SubscriptionUpdateParams.AutomaticTax;
    export type BillingCycleAnchor = Stripe.SubscriptionUpdateParams.BillingCycleAnchor;
    export type BillingSchedule = Stripe.SubscriptionUpdateParams.BillingSchedule;
    export type BillingThresholds = Stripe.SubscriptionUpdateParams.BillingThresholds;
    export type CancelAt = Stripe.SubscriptionUpdateParams.CancelAt;
    export type CancellationDetails = Stripe.SubscriptionUpdateParams.CancellationDetails;
    export type CollectionMethod = Stripe.SubscriptionUpdateParams.CollectionMethod;
    export type Discount = Stripe.SubscriptionUpdateParams.Discount;
    export type InvoiceSettings = Stripe.SubscriptionUpdateParams.InvoiceSettings;
    export type Item = Stripe.SubscriptionUpdateParams.Item;
    export type PauseCollection = Stripe.SubscriptionUpdateParams.PauseCollection;
    export type PaymentBehavior = Stripe.SubscriptionUpdateParams.PaymentBehavior;
    export type PaymentSettings = Stripe.SubscriptionUpdateParams.PaymentSettings;
    export type PendingInvoiceItemInterval = Stripe.SubscriptionUpdateParams.PendingInvoiceItemInterval;
    export type ProrationBehavior = Stripe.SubscriptionUpdateParams.ProrationBehavior;
    export type TransferData = Stripe.SubscriptionUpdateParams.TransferData;
    export type TrialSettings = Stripe.SubscriptionUpdateParams.TrialSettings;
    export namespace AddInvoiceItem {
      export type Discount = Stripe.SubscriptionUpdateParams.AddInvoiceItem.Discount;
      export type Period = Stripe.SubscriptionUpdateParams.AddInvoiceItem.Period;
      export type PriceData = Stripe.SubscriptionUpdateParams.AddInvoiceItem.PriceData;
      export namespace Period {
        export type End = Stripe.SubscriptionUpdateParams.AddInvoiceItem.Period.End;
        export type Start = Stripe.SubscriptionUpdateParams.AddInvoiceItem.Period.Start;
        export namespace End {
          export type Type = Stripe.SubscriptionUpdateParams.AddInvoiceItem.Period.End.Type;
        }
        export namespace Start {
          export type Type = Stripe.SubscriptionUpdateParams.AddInvoiceItem.Period.Start.Type;
        }
      }
      export namespace PriceData {
        export type TaxBehavior = Stripe.SubscriptionUpdateParams.AddInvoiceItem.PriceData.TaxBehavior;
      }
    }
    export namespace AutomaticTax {
      export type Liability = Stripe.SubscriptionUpdateParams.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe.SubscriptionUpdateParams.AutomaticTax.Liability.Type;
      }
    }
    export namespace BillingSchedule {
      export type AppliesTo = Stripe.SubscriptionUpdateParams.BillingSchedule.AppliesTo;
      export type BillUntil = Stripe.SubscriptionUpdateParams.BillingSchedule.BillUntil;
      export namespace BillUntil {
        export type Duration = Stripe.SubscriptionUpdateParams.BillingSchedule.BillUntil.Duration;
        export type Type = Stripe.SubscriptionUpdateParams.BillingSchedule.BillUntil.Type;
        export namespace Duration {
          export type Interval = Stripe.SubscriptionUpdateParams.BillingSchedule.BillUntil.Duration.Interval;
        }
      }
    }
    export namespace CancellationDetails {
      export type Feedback = Stripe.SubscriptionUpdateParams.CancellationDetails.Feedback;
    }
    export namespace InvoiceSettings {
      export type CustomField = Stripe.SubscriptionUpdateParams.InvoiceSettings.CustomField;
      export type Issuer = Stripe.SubscriptionUpdateParams.InvoiceSettings.Issuer;
      export namespace Issuer {
        export type Type = Stripe.SubscriptionUpdateParams.InvoiceSettings.Issuer.Type;
      }
    }
    export namespace Item {
      export type BillingThresholds = Stripe.SubscriptionUpdateParams.Item.BillingThresholds;
      export type Discount = Stripe.SubscriptionUpdateParams.Item.Discount;
      export type PriceData = Stripe.SubscriptionUpdateParams.Item.PriceData;
      export namespace PriceData {
        export type Recurring = Stripe.SubscriptionUpdateParams.Item.PriceData.Recurring;
        export type TaxBehavior = Stripe.SubscriptionUpdateParams.Item.PriceData.TaxBehavior;
        export namespace Recurring {
          export type Interval = Stripe.SubscriptionUpdateParams.Item.PriceData.Recurring.Interval;
        }
      }
    }
    export namespace PauseCollection {
      export type Behavior = Stripe.SubscriptionUpdateParams.PauseCollection.Behavior;
    }
    export namespace PaymentSettings {
      export type PaymentMethodOptions = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions;
      export type PaymentMethodType = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodType;
      export type SaveDefaultPaymentMethod = Stripe.SubscriptionUpdateParams.PaymentSettings.SaveDefaultPaymentMethod;
      export namespace PaymentMethodOptions {
        export type AcssDebit = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.AcssDebit;
        export type Bancontact = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Bancontact;
        export type Card = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Card;
        export type CustomerBalance = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance;
        export type Konbini = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Konbini;
        export type Payto = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Payto;
        export type Pix = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Pix;
        export type SepaDebit = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.SepaDebit;
        export type Upi = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Upi;
        export type UsBankAccount = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount;
        export namespace AcssDebit {
          export type MandateOptions = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions;
          export type VerificationMethod = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.VerificationMethod;
          export namespace MandateOptions {
            export type TransactionType = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
          }
        }
        export namespace Bancontact {
          export type PreferredLanguage = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Bancontact.PreferredLanguage;
        }
        export namespace Card {
          export type MandateOptions = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Card.MandateOptions;
          export type Network = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Card.Network;
          export type RequestThreeDSecure = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Card.RequestThreeDSecure;
          export namespace MandateOptions {
            export type AmountType = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Card.MandateOptions.AmountType;
          }
        }
        export namespace CustomerBalance {
          export type BankTransfer = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer;
          export namespace BankTransfer {
            export type EuBankTransfer = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
          }
        }
        export namespace Payto {
          export type MandateOptions = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions;
          export namespace MandateOptions {
            export type Purpose = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions.Purpose;
          }
        }
        export namespace Pix {
          export type MandateOptions = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions;
          export namespace MandateOptions {
            export type AmountIncludesIof = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
            export type PaymentSchedule = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
          }
        }
        export namespace Upi {
          export type MandateOptions = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions;
          export namespace MandateOptions {
            export type AmountType = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions.AmountType;
          }
        }
        export namespace UsBankAccount {
          export type FinancialConnections = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections;
          export type VerificationMethod = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.VerificationMethod;
          export namespace FinancialConnections {
            export type Filters = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
            export type Permission = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
            export type Prefetch = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
            export namespace Filters {
              export type AccountSubcategory = Stripe.SubscriptionUpdateParams.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
            }
          }
        }
      }
    }
    export namespace PendingInvoiceItemInterval {
      export type Interval = Stripe.SubscriptionUpdateParams.PendingInvoiceItemInterval.Interval;
    }
    export namespace TrialSettings {
      export type EndBehavior = Stripe.SubscriptionUpdateParams.TrialSettings.EndBehavior;
      export namespace EndBehavior {
        export type MissingPaymentMethod = Stripe.SubscriptionUpdateParams.TrialSettings.EndBehavior.MissingPaymentMethod;
      }
    }
  }
  export namespace SubscriptionListParams {
    export type AutomaticTax = Stripe.SubscriptionListParams.AutomaticTax;
    export type CollectionMethod = Stripe.SubscriptionListParams.CollectionMethod;
    export type Status = Stripe.SubscriptionListParams.Status;
  }
  export namespace SubscriptionCancelParams {
    export type CancellationDetails = Stripe.SubscriptionCancelParams.CancellationDetails;
    export namespace CancellationDetails {
      export type Feedback = Stripe.SubscriptionCancelParams.CancellationDetails.Feedback;
    }
  }
  export namespace SubscriptionMigrateParams {
    export type BillingMode = Stripe.SubscriptionMigrateParams.BillingMode;
    export namespace BillingMode {
      export type Flexible = Stripe.SubscriptionMigrateParams.BillingMode.Flexible;
      export namespace Flexible {
        export type ProrationDiscounts = Stripe.SubscriptionMigrateParams.BillingMode.Flexible.ProrationDiscounts;
      }
    }
  }
  export namespace SubscriptionResumeParams {
    export type BillingCycleAnchor = Stripe.SubscriptionResumeParams.BillingCycleAnchor;
    export type ProrationBehavior = Stripe.SubscriptionResumeParams.ProrationBehavior;
  }
  export namespace Subscription {
    export type AutomaticTax = Stripe.Subscription.AutomaticTax;
    export type BillingCycleAnchorConfig = Stripe.Subscription.BillingCycleAnchorConfig;
    export type BillingMode = Stripe.Subscription.BillingMode;
    export type BillingSchedule = Stripe.Subscription.BillingSchedule;
    export type BillingThresholds = Stripe.Subscription.BillingThresholds;
    export type CancellationDetails = Stripe.Subscription.CancellationDetails;
    export type CollectionMethod = Stripe.Subscription.CollectionMethod;
    export type InvoiceSettings = Stripe.Subscription.InvoiceSettings;
    export type ManagedPayments = Stripe.Subscription.ManagedPayments;
    export type PauseCollection = Stripe.Subscription.PauseCollection;
    export type PaymentSettings = Stripe.Subscription.PaymentSettings;
    export type PendingInvoiceItemInterval = Stripe.Subscription.PendingInvoiceItemInterval;
    export type PendingUpdate = Stripe.Subscription.PendingUpdate;
    export type PresentmentDetails = Stripe.Subscription.PresentmentDetails;
    export type Status = Stripe.Subscription.Status;
    export type TransferData = Stripe.Subscription.TransferData;
    export type TrialSettings = Stripe.Subscription.TrialSettings;
    export namespace AutomaticTax {
      export type Liability = Stripe.Subscription.AutomaticTax.Liability;
      export namespace Liability {
        export type Type = Stripe.Subscription.AutomaticTax.Liability.Type;
      }
    }
    export namespace BillingMode {
      export type Flexible = Stripe.Subscription.BillingMode.Flexible;
      export type Type = Stripe.Subscription.BillingMode.Type;
      export namespace Flexible {
        export type ProrationDiscounts = Stripe.Subscription.BillingMode.Flexible.ProrationDiscounts;
      }
    }
    export namespace BillingSchedule {
      export type AppliesTo = Stripe.Subscription.BillingSchedule.AppliesTo;
      export type BillUntil = Stripe.Subscription.BillingSchedule.BillUntil;
      export namespace BillUntil {
        export type Duration = Stripe.Subscription.BillingSchedule.BillUntil.Duration;
        export type Type = Stripe.Subscription.BillingSchedule.BillUntil.Type;
        export namespace Duration {
          export type Interval = Stripe.Subscription.BillingSchedule.BillUntil.Duration.Interval;
        }
      }
    }
    export namespace CancellationDetails {
      export type Feedback = Stripe.Subscription.CancellationDetails.Feedback;
      export type Reason = Stripe.Subscription.CancellationDetails.Reason;
    }
    export namespace InvoiceSettings {
      export type CustomField = Stripe.Subscription.InvoiceSettings.CustomField;
      export type Issuer = Stripe.Subscription.InvoiceSettings.Issuer;
      export namespace Issuer {
        export type Type = Stripe.Subscription.InvoiceSettings.Issuer.Type;
      }
    }
    export namespace PauseCollection {
      export type Behavior = Stripe.Subscription.PauseCollection.Behavior;
    }
    export namespace PaymentSettings {
      export type PaymentMethodOptions = Stripe.Subscription.PaymentSettings.PaymentMethodOptions;
      export type PaymentMethodType = Stripe.Subscription.PaymentSettings.PaymentMethodType;
      export type SaveDefaultPaymentMethod = Stripe.Subscription.PaymentSettings.SaveDefaultPaymentMethod;
      export namespace PaymentMethodOptions {
        export type AcssDebit = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.AcssDebit;
        export type Bancontact = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Bancontact;
        export type Card = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Card;
        export type CustomerBalance = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.CustomerBalance;
        export type Konbini = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Konbini;
        export type Payto = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Payto;
        export type Pix = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Pix;
        export type SepaDebit = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.SepaDebit;
        export type Upi = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Upi;
        export type UsBankAccount = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.UsBankAccount;
        export namespace AcssDebit {
          export type MandateOptions = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions;
          export type VerificationMethod = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.AcssDebit.VerificationMethod;
          export namespace MandateOptions {
            export type TransactionType = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
          }
        }
        export namespace Bancontact {
          export type PreferredLanguage = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Bancontact.PreferredLanguage;
        }
        export namespace Card {
          export type MandateOptions = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Card.MandateOptions;
          export type Network = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Card.Network;
          export type RequestThreeDSecure = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Card.RequestThreeDSecure;
          export namespace MandateOptions {
            export type AmountType = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Card.MandateOptions.AmountType;
          }
        }
        export namespace CustomerBalance {
          export type BankTransfer = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer;
          export namespace BankTransfer {
            export type EuBankTransfer = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
            export namespace EuBankTransfer {
              export type Country = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer.Country;
            }
          }
        }
        export namespace Payto {
          export type MandateOptions = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions;
          export namespace MandateOptions {
            export type AmountType = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions.AmountType;
            export type Purpose = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Payto.MandateOptions.Purpose;
          }
        }
        export namespace Pix {
          export type MandateOptions = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions;
          export namespace MandateOptions {
            export type AmountIncludesIof = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
            export type PaymentSchedule = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
          }
        }
        export namespace Upi {
          export type MandateOptions = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions;
          export namespace MandateOptions {
            export type AmountType = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.Upi.MandateOptions.AmountType;
          }
        }
        export namespace UsBankAccount {
          export type FinancialConnections = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections;
          export type VerificationMethod = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.UsBankAccount.VerificationMethod;
          export namespace FinancialConnections {
            export type Filters = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
            export type Permission = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
            export type Prefetch = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
            export namespace Filters {
              export type AccountSubcategory = Stripe.Subscription.PaymentSettings.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
            }
          }
        }
      }
    }
    export namespace PendingInvoiceItemInterval {
      export type Interval = Stripe.Subscription.PendingInvoiceItemInterval.Interval;
    }
    export namespace TrialSettings {
      export type EndBehavior = Stripe.Subscription.TrialSettings.EndBehavior;
      export namespace EndBehavior {
        export type MissingPaymentMethod = Stripe.Subscription.TrialSettings.EndBehavior.MissingPaymentMethod;
      }
    }
  }
  export namespace SubscriptionItemCreateParams {
    export type BillingThresholds = Stripe.SubscriptionItemCreateParams.BillingThresholds;
    export type Discount = Stripe.SubscriptionItemCreateParams.Discount;
    export type PaymentBehavior = Stripe.SubscriptionItemCreateParams.PaymentBehavior;
    export type PriceData = Stripe.SubscriptionItemCreateParams.PriceData;
    export type ProrationBehavior = Stripe.SubscriptionItemCreateParams.ProrationBehavior;
    export namespace PriceData {
      export type Recurring = Stripe.SubscriptionItemCreateParams.PriceData.Recurring;
      export type TaxBehavior = Stripe.SubscriptionItemCreateParams.PriceData.TaxBehavior;
      export namespace Recurring {
        export type Interval = Stripe.SubscriptionItemCreateParams.PriceData.Recurring.Interval;
      }
    }
  }
  export namespace SubscriptionItemUpdateParams {
    export type BillingThresholds = Stripe.SubscriptionItemUpdateParams.BillingThresholds;
    export type Discount = Stripe.SubscriptionItemUpdateParams.Discount;
    export type PaymentBehavior = Stripe.SubscriptionItemUpdateParams.PaymentBehavior;
    export type PriceData = Stripe.SubscriptionItemUpdateParams.PriceData;
    export type ProrationBehavior = Stripe.SubscriptionItemUpdateParams.ProrationBehavior;
    export namespace PriceData {
      export type Recurring = Stripe.SubscriptionItemUpdateParams.PriceData.Recurring;
      export type TaxBehavior = Stripe.SubscriptionItemUpdateParams.PriceData.TaxBehavior;
      export namespace Recurring {
        export type Interval = Stripe.SubscriptionItemUpdateParams.PriceData.Recurring.Interval;
      }
    }
  }
  export namespace SubscriptionItemDeleteParams {
    export type PaymentBehavior = Stripe.SubscriptionItemDeleteParams.PaymentBehavior;
    export type ProrationBehavior = Stripe.SubscriptionItemDeleteParams.ProrationBehavior;
  }
  export namespace SubscriptionItem {
    export type BillingThresholds = Stripe.SubscriptionItem.BillingThresholds;
  }
  export namespace SubscriptionScheduleCreateParams {
    export type BillingMode = Stripe.SubscriptionScheduleCreateParams.BillingMode;
    export type DefaultSettings = Stripe.SubscriptionScheduleCreateParams.DefaultSettings;
    export type EndBehavior = Stripe.SubscriptionScheduleCreateParams.EndBehavior;
    export type Phase = Stripe.SubscriptionScheduleCreateParams.Phase;
    export namespace BillingMode {
      export type Flexible = Stripe.SubscriptionScheduleCreateParams.BillingMode.Flexible;
      export type Type = Stripe.SubscriptionScheduleCreateParams.BillingMode.Type;
      export namespace Flexible {
        export type ProrationDiscounts = Stripe.SubscriptionScheduleCreateParams.BillingMode.Flexible.ProrationDiscounts;
      }
    }
    export namespace DefaultSettings {
      export type AutomaticTax = Stripe.SubscriptionScheduleCreateParams.DefaultSettings.AutomaticTax;
      export type BillingCycleAnchor = Stripe.SubscriptionScheduleCreateParams.DefaultSettings.BillingCycleAnchor;
      export type BillingThresholds = Stripe.SubscriptionScheduleCreateParams.DefaultSettings.BillingThresholds;
      export type CollectionMethod = Stripe.SubscriptionScheduleCreateParams.DefaultSettings.CollectionMethod;
      export type InvoiceSettings = Stripe.SubscriptionScheduleCreateParams.DefaultSettings.InvoiceSettings;
      export type TransferData = Stripe.SubscriptionScheduleCreateParams.DefaultSettings.TransferData;
      export namespace AutomaticTax {
        export type Liability = Stripe.SubscriptionScheduleCreateParams.DefaultSettings.AutomaticTax.Liability;
        export namespace Liability {
          export type Type = Stripe.SubscriptionScheduleCreateParams.DefaultSettings.AutomaticTax.Liability.Type;
        }
      }
      export namespace InvoiceSettings {
        export type Issuer = Stripe.SubscriptionScheduleCreateParams.DefaultSettings.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe.SubscriptionScheduleCreateParams.DefaultSettings.InvoiceSettings.Issuer.Type;
        }
      }
    }
    export namespace Phase {
      export type AddInvoiceItem = Stripe.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem;
      export type AutomaticTax = Stripe.SubscriptionScheduleCreateParams.Phase.AutomaticTax;
      export type BillingCycleAnchor = Stripe.SubscriptionScheduleCreateParams.Phase.BillingCycleAnchor;
      export type BillingThresholds = Stripe.SubscriptionScheduleCreateParams.Phase.BillingThresholds;
      export type CollectionMethod = Stripe.SubscriptionScheduleCreateParams.Phase.CollectionMethod;
      export type Discount = Stripe.SubscriptionScheduleCreateParams.Phase.Discount;
      export type Duration = Stripe.SubscriptionScheduleCreateParams.Phase.Duration;
      export type InvoiceSettings = Stripe.SubscriptionScheduleCreateParams.Phase.InvoiceSettings;
      export type Item = Stripe.SubscriptionScheduleCreateParams.Phase.Item;
      export type ProrationBehavior = Stripe.SubscriptionScheduleCreateParams.Phase.ProrationBehavior;
      export type TransferData = Stripe.SubscriptionScheduleCreateParams.Phase.TransferData;
      export namespace AddInvoiceItem {
        export type Discount = Stripe.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem.Discount;
        export type Period = Stripe.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem.Period;
        export type PriceData = Stripe.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem.PriceData;
        export namespace Period {
          export type End = Stripe.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem.Period.End;
          export type Start = Stripe.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem.Period.Start;
          export namespace End {
            export type Type = Stripe.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem.Period.End.Type;
          }
          export namespace Start {
            export type Type = Stripe.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem.Period.Start.Type;
          }
        }
        export namespace PriceData {
          export type TaxBehavior = Stripe.SubscriptionScheduleCreateParams.Phase.AddInvoiceItem.PriceData.TaxBehavior;
        }
      }
      export namespace AutomaticTax {
        export type Liability = Stripe.SubscriptionScheduleCreateParams.Phase.AutomaticTax.Liability;
        export namespace Liability {
          export type Type = Stripe.SubscriptionScheduleCreateParams.Phase.AutomaticTax.Liability.Type;
        }
      }
      export namespace Duration {
        export type Interval = Stripe.SubscriptionScheduleCreateParams.Phase.Duration.Interval;
      }
      export namespace InvoiceSettings {
        export type Issuer = Stripe.SubscriptionScheduleCreateParams.Phase.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe.SubscriptionScheduleCreateParams.Phase.InvoiceSettings.Issuer.Type;
        }
      }
      export namespace Item {
        export type BillingThresholds = Stripe.SubscriptionScheduleCreateParams.Phase.Item.BillingThresholds;
        export type Discount = Stripe.SubscriptionScheduleCreateParams.Phase.Item.Discount;
        export type PriceData = Stripe.SubscriptionScheduleCreateParams.Phase.Item.PriceData;
        export namespace PriceData {
          export type Recurring = Stripe.SubscriptionScheduleCreateParams.Phase.Item.PriceData.Recurring;
          export type TaxBehavior = Stripe.SubscriptionScheduleCreateParams.Phase.Item.PriceData.TaxBehavior;
          export namespace Recurring {
            export type Interval = Stripe.SubscriptionScheduleCreateParams.Phase.Item.PriceData.Recurring.Interval;
          }
        }
      }
    }
  }
  export namespace SubscriptionScheduleUpdateParams {
    export type DefaultSettings = Stripe.SubscriptionScheduleUpdateParams.DefaultSettings;
    export type EndBehavior = Stripe.SubscriptionScheduleUpdateParams.EndBehavior;
    export type Phase = Stripe.SubscriptionScheduleUpdateParams.Phase;
    export type ProrationBehavior = Stripe.SubscriptionScheduleUpdateParams.ProrationBehavior;
    export namespace DefaultSettings {
      export type AutomaticTax = Stripe.SubscriptionScheduleUpdateParams.DefaultSettings.AutomaticTax;
      export type BillingCycleAnchor = Stripe.SubscriptionScheduleUpdateParams.DefaultSettings.BillingCycleAnchor;
      export type BillingThresholds = Stripe.SubscriptionScheduleUpdateParams.DefaultSettings.BillingThresholds;
      export type CollectionMethod = Stripe.SubscriptionScheduleUpdateParams.DefaultSettings.CollectionMethod;
      export type InvoiceSettings = Stripe.SubscriptionScheduleUpdateParams.DefaultSettings.InvoiceSettings;
      export type TransferData = Stripe.SubscriptionScheduleUpdateParams.DefaultSettings.TransferData;
      export namespace AutomaticTax {
        export type Liability = Stripe.SubscriptionScheduleUpdateParams.DefaultSettings.AutomaticTax.Liability;
        export namespace Liability {
          export type Type = Stripe.SubscriptionScheduleUpdateParams.DefaultSettings.AutomaticTax.Liability.Type;
        }
      }
      export namespace InvoiceSettings {
        export type Issuer = Stripe.SubscriptionScheduleUpdateParams.DefaultSettings.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe.SubscriptionScheduleUpdateParams.DefaultSettings.InvoiceSettings.Issuer.Type;
        }
      }
    }
    export namespace Phase {
      export type AddInvoiceItem = Stripe.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem;
      export type AutomaticTax = Stripe.SubscriptionScheduleUpdateParams.Phase.AutomaticTax;
      export type BillingCycleAnchor = Stripe.SubscriptionScheduleUpdateParams.Phase.BillingCycleAnchor;
      export type BillingThresholds = Stripe.SubscriptionScheduleUpdateParams.Phase.BillingThresholds;
      export type CollectionMethod = Stripe.SubscriptionScheduleUpdateParams.Phase.CollectionMethod;
      export type Discount = Stripe.SubscriptionScheduleUpdateParams.Phase.Discount;
      export type Duration = Stripe.SubscriptionScheduleUpdateParams.Phase.Duration;
      export type InvoiceSettings = Stripe.SubscriptionScheduleUpdateParams.Phase.InvoiceSettings;
      export type Item = Stripe.SubscriptionScheduleUpdateParams.Phase.Item;
      export type ProrationBehavior = Stripe.SubscriptionScheduleUpdateParams.Phase.ProrationBehavior;
      export type TransferData = Stripe.SubscriptionScheduleUpdateParams.Phase.TransferData;
      export namespace AddInvoiceItem {
        export type Discount = Stripe.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem.Discount;
        export type Period = Stripe.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem.Period;
        export type PriceData = Stripe.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem.PriceData;
        export namespace Period {
          export type End = Stripe.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem.Period.End;
          export type Start = Stripe.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem.Period.Start;
          export namespace End {
            export type Type = Stripe.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem.Period.End.Type;
          }
          export namespace Start {
            export type Type = Stripe.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem.Period.Start.Type;
          }
        }
        export namespace PriceData {
          export type TaxBehavior = Stripe.SubscriptionScheduleUpdateParams.Phase.AddInvoiceItem.PriceData.TaxBehavior;
        }
      }
      export namespace AutomaticTax {
        export type Liability = Stripe.SubscriptionScheduleUpdateParams.Phase.AutomaticTax.Liability;
        export namespace Liability {
          export type Type = Stripe.SubscriptionScheduleUpdateParams.Phase.AutomaticTax.Liability.Type;
        }
      }
      export namespace Duration {
        export type Interval = Stripe.SubscriptionScheduleUpdateParams.Phase.Duration.Interval;
      }
      export namespace InvoiceSettings {
        export type Issuer = Stripe.SubscriptionScheduleUpdateParams.Phase.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe.SubscriptionScheduleUpdateParams.Phase.InvoiceSettings.Issuer.Type;
        }
      }
      export namespace Item {
        export type BillingThresholds = Stripe.SubscriptionScheduleUpdateParams.Phase.Item.BillingThresholds;
        export type Discount = Stripe.SubscriptionScheduleUpdateParams.Phase.Item.Discount;
        export type PriceData = Stripe.SubscriptionScheduleUpdateParams.Phase.Item.PriceData;
        export namespace PriceData {
          export type Recurring = Stripe.SubscriptionScheduleUpdateParams.Phase.Item.PriceData.Recurring;
          export type TaxBehavior = Stripe.SubscriptionScheduleUpdateParams.Phase.Item.PriceData.TaxBehavior;
          export namespace Recurring {
            export type Interval = Stripe.SubscriptionScheduleUpdateParams.Phase.Item.PriceData.Recurring.Interval;
          }
        }
      }
    }
  }
  export namespace SubscriptionSchedule {
    export type BillingMode = Stripe.SubscriptionSchedule.BillingMode;
    export type CurrentPhase = Stripe.SubscriptionSchedule.CurrentPhase;
    export type DefaultSettings = Stripe.SubscriptionSchedule.DefaultSettings;
    export type EndBehavior = Stripe.SubscriptionSchedule.EndBehavior;
    export type Phase = Stripe.SubscriptionSchedule.Phase;
    export type Status = Stripe.SubscriptionSchedule.Status;
    export namespace BillingMode {
      export type Flexible = Stripe.SubscriptionSchedule.BillingMode.Flexible;
      export type Type = Stripe.SubscriptionSchedule.BillingMode.Type;
      export namespace Flexible {
        export type ProrationDiscounts = Stripe.SubscriptionSchedule.BillingMode.Flexible.ProrationDiscounts;
      }
    }
    export namespace DefaultSettings {
      export type AutomaticTax = Stripe.SubscriptionSchedule.DefaultSettings.AutomaticTax;
      export type BillingCycleAnchor = Stripe.SubscriptionSchedule.DefaultSettings.BillingCycleAnchor;
      export type BillingThresholds = Stripe.SubscriptionSchedule.DefaultSettings.BillingThresholds;
      export type CollectionMethod = Stripe.SubscriptionSchedule.DefaultSettings.CollectionMethod;
      export type InvoiceSettings = Stripe.SubscriptionSchedule.DefaultSettings.InvoiceSettings;
      export type TransferData = Stripe.SubscriptionSchedule.DefaultSettings.TransferData;
      export namespace AutomaticTax {
        export type Liability = Stripe.SubscriptionSchedule.DefaultSettings.AutomaticTax.Liability;
        export namespace Liability {
          export type Type = Stripe.SubscriptionSchedule.DefaultSettings.AutomaticTax.Liability.Type;
        }
      }
      export namespace InvoiceSettings {
        export type Issuer = Stripe.SubscriptionSchedule.DefaultSettings.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe.SubscriptionSchedule.DefaultSettings.InvoiceSettings.Issuer.Type;
        }
      }
    }
    export namespace Phase {
      export type AddInvoiceItem = Stripe.SubscriptionSchedule.Phase.AddInvoiceItem;
      export type AutomaticTax = Stripe.SubscriptionSchedule.Phase.AutomaticTax;
      export type BillingCycleAnchor = Stripe.SubscriptionSchedule.Phase.BillingCycleAnchor;
      export type BillingThresholds = Stripe.SubscriptionSchedule.Phase.BillingThresholds;
      export type CollectionMethod = Stripe.SubscriptionSchedule.Phase.CollectionMethod;
      export type Discount = Stripe.SubscriptionSchedule.Phase.Discount;
      export type InvoiceSettings = Stripe.SubscriptionSchedule.Phase.InvoiceSettings;
      export type Item = Stripe.SubscriptionSchedule.Phase.Item;
      export type ProrationBehavior = Stripe.SubscriptionSchedule.Phase.ProrationBehavior;
      export type TransferData = Stripe.SubscriptionSchedule.Phase.TransferData;
      export namespace AddInvoiceItem {
        export type Discount = Stripe.SubscriptionSchedule.Phase.AddInvoiceItem.Discount;
        export type Period = Stripe.SubscriptionSchedule.Phase.AddInvoiceItem.Period;
        export namespace Period {
          export type End = Stripe.SubscriptionSchedule.Phase.AddInvoiceItem.Period.End;
          export type Start = Stripe.SubscriptionSchedule.Phase.AddInvoiceItem.Period.Start;
          export namespace End {
            export type Type = Stripe.SubscriptionSchedule.Phase.AddInvoiceItem.Period.End.Type;
          }
          export namespace Start {
            export type Type = Stripe.SubscriptionSchedule.Phase.AddInvoiceItem.Period.Start.Type;
          }
        }
      }
      export namespace AutomaticTax {
        export type Liability = Stripe.SubscriptionSchedule.Phase.AutomaticTax.Liability;
        export namespace Liability {
          export type Type = Stripe.SubscriptionSchedule.Phase.AutomaticTax.Liability.Type;
        }
      }
      export namespace InvoiceSettings {
        export type Issuer = Stripe.SubscriptionSchedule.Phase.InvoiceSettings.Issuer;
        export namespace Issuer {
          export type Type = Stripe.SubscriptionSchedule.Phase.InvoiceSettings.Issuer.Type;
        }
      }
      export namespace Item {
        export type BillingThresholds = Stripe.SubscriptionSchedule.Phase.Item.BillingThresholds;
        export type Discount = Stripe.SubscriptionSchedule.Phase.Item.Discount;
      }
    }
  }
  export namespace TaxIdCreateParams {
    export type Type = Stripe.TaxIdCreateParams.Type;
    export type Owner = Stripe.TaxIdCreateParams.Owner;
    export namespace Owner {
      export type Type = Stripe.TaxIdCreateParams.Owner.Type;
    }
  }
  export namespace TaxIdListParams {
    export type Owner = Stripe.TaxIdListParams.Owner;
    export namespace Owner {
      export type Type = Stripe.TaxIdListParams.Owner.Type;
    }
  }
  export namespace TaxId {
    export type Owner = Stripe.TaxId.Owner;
    export type Type = Stripe.TaxId.Type;
    export type Verification = Stripe.TaxId.Verification;
    export namespace Owner {
      export type Type = Stripe.TaxId.Owner.Type;
    }
    export namespace Verification {
      export type Status = Stripe.TaxId.Verification.Status;
    }
  }
  export namespace TaxRateCreateParams {
    export type TaxType = Stripe.TaxRateCreateParams.TaxType;
  }
  export namespace TaxRateUpdateParams {
    export type TaxType = Stripe.TaxRateUpdateParams.TaxType;
  }
  export namespace TaxRate {
    export type FlatAmount = Stripe.TaxRate.FlatAmount;
    export type JurisdictionLevel = Stripe.TaxRate.JurisdictionLevel;
    export type RateType = Stripe.TaxRate.RateType;
    export type TaxType = Stripe.TaxRate.TaxType;
  }
  export namespace TokenCreateParams {
    export type Account = Stripe.TokenCreateParams.Account;
    export type BankAccount = Stripe.TokenCreateParams.BankAccount;
    export type Card = Stripe.TokenCreateParams.Card;
    export type CvcUpdate = Stripe.TokenCreateParams.CvcUpdate;
    export type Person = Stripe.TokenCreateParams.Person;
    export type Pii = Stripe.TokenCreateParams.Pii;
    export namespace Account {
      export type BusinessType = Stripe.TokenCreateParams.Account.BusinessType;
      export type Company = Stripe.TokenCreateParams.Account.Company;
      export type Individual = Stripe.TokenCreateParams.Account.Individual;
      export namespace Company {
        export type DirectorshipDeclaration = Stripe.TokenCreateParams.Account.Company.DirectorshipDeclaration;
        export type OwnershipDeclaration = Stripe.TokenCreateParams.Account.Company.OwnershipDeclaration;
        export type OwnershipExemptionReason = Stripe.TokenCreateParams.Account.Company.OwnershipExemptionReason;
        export type RegistrationDate = Stripe.TokenCreateParams.Account.Company.RegistrationDate;
        export type RepresentativeDeclaration = Stripe.TokenCreateParams.Account.Company.RepresentativeDeclaration;
        export type Structure = Stripe.TokenCreateParams.Account.Company.Structure;
        export type Verification = Stripe.TokenCreateParams.Account.Company.Verification;
        export namespace Verification {
          export type Document = Stripe.TokenCreateParams.Account.Company.Verification.Document;
        }
      }
      export namespace Individual {
        export type Dob = Stripe.TokenCreateParams.Account.Individual.Dob;
        export type PoliticalExposure = Stripe.TokenCreateParams.Account.Individual.PoliticalExposure;
        export type Relationship = Stripe.TokenCreateParams.Account.Individual.Relationship;
        export type Verification = Stripe.TokenCreateParams.Account.Individual.Verification;
        export namespace Verification {
          export type AdditionalDocument = Stripe.TokenCreateParams.Account.Individual.Verification.AdditionalDocument;
          export type Document = Stripe.TokenCreateParams.Account.Individual.Verification.Document;
        }
      }
    }
    export namespace BankAccount {
      export type AccountHolderType = Stripe.TokenCreateParams.BankAccount.AccountHolderType;
      export type AccountType = Stripe.TokenCreateParams.BankAccount.AccountType;
    }
    export namespace Card {
      export type Networks = Stripe.TokenCreateParams.Card.Networks;
      export namespace Networks {
        export type Preferred = Stripe.TokenCreateParams.Card.Networks.Preferred;
      }
    }
    export namespace Person {
      export type AdditionalTosAcceptances = Stripe.TokenCreateParams.Person.AdditionalTosAcceptances;
      export type Dob = Stripe.TokenCreateParams.Person.Dob;
      export type Documents = Stripe.TokenCreateParams.Person.Documents;
      export type PoliticalExposure = Stripe.TokenCreateParams.Person.PoliticalExposure;
      export type Relationship = Stripe.TokenCreateParams.Person.Relationship;
      export type UsCfpbData = Stripe.TokenCreateParams.Person.UsCfpbData;
      export type Verification = Stripe.TokenCreateParams.Person.Verification;
      export namespace AdditionalTosAcceptances {
        export type Account = Stripe.TokenCreateParams.Person.AdditionalTosAcceptances.Account;
      }
      export namespace Documents {
        export type CompanyAuthorization = Stripe.TokenCreateParams.Person.Documents.CompanyAuthorization;
        export type Passport = Stripe.TokenCreateParams.Person.Documents.Passport;
        export type Visa = Stripe.TokenCreateParams.Person.Documents.Visa;
      }
      export namespace UsCfpbData {
        export type EthnicityDetails = Stripe.TokenCreateParams.Person.UsCfpbData.EthnicityDetails;
        export type RaceDetails = Stripe.TokenCreateParams.Person.UsCfpbData.RaceDetails;
        export namespace EthnicityDetails {
          export type Ethnicity = Stripe.TokenCreateParams.Person.UsCfpbData.EthnicityDetails.Ethnicity;
        }
        export namespace RaceDetails {
          export type Race = Stripe.TokenCreateParams.Person.UsCfpbData.RaceDetails.Race;
        }
      }
      export namespace Verification {
        export type AdditionalDocument = Stripe.TokenCreateParams.Person.Verification.AdditionalDocument;
        export type Document = Stripe.TokenCreateParams.Person.Verification.Document;
      }
    }
  }
  export namespace TopupCreateParams {
    export type PaymentMethodOptions = Stripe.TopupCreateParams.PaymentMethodOptions;
    export namespace PaymentMethodOptions {
      export type UsBankAccount = Stripe.TopupCreateParams.PaymentMethodOptions.UsBankAccount;
    }
  }
  export namespace TopupListParams {
    export type Status = Stripe.TopupListParams.Status;
  }
  export namespace Topup {
    export type Status = Stripe.Topup.Status;
  }
  export namespace TransferCreateParams {
    export type SourceType = Stripe.TransferCreateParams.SourceType;
  }
  export namespace WebhookEndpointCreateParams {
    export type EnabledEvent = Stripe.WebhookEndpointCreateParams.EnabledEvent;
    export type ApiVersion = Stripe.WebhookEndpointCreateParams.ApiVersion;
  }
  export namespace WebhookEndpointUpdateParams {
    export type EnabledEvent = Stripe.WebhookEndpointUpdateParams.EnabledEvent;
  }
  export namespace BankAccount {
    export type AvailablePayoutMethod = Stripe.BankAccount.AvailablePayoutMethod;
    export type FutureRequirements = Stripe.BankAccount.FutureRequirements;
    export type Requirements = Stripe.BankAccount.Requirements;
    export namespace FutureRequirements {
      export type Error = Stripe.BankAccount.FutureRequirements.Error;
      export namespace Error {
        export type Code = Stripe.BankAccount.FutureRequirements.Error.Code;
      }
    }
    export namespace Requirements {
      export type Error = Stripe.BankAccount.Requirements.Error;
      export namespace Error {
        export type Code = Stripe.BankAccount.Requirements.Error.Code;
      }
    }
  }
  export namespace Card {
    export type AllowRedisplay = Stripe.Card.AllowRedisplay;
    export type AvailablePayoutMethod = Stripe.Card.AvailablePayoutMethod;
    export type Networks = Stripe.Card.Networks;
    export type RegulatedStatus = Stripe.Card.RegulatedStatus;
  }
  export namespace DeletedDiscount {
    export type Source = Stripe.DeletedDiscount.Source;
  }
  export namespace Discount {
    export type Source = Stripe.Discount.Source;
  }
  export namespace FundingInstructions {
    export type BankTransfer = Stripe.FundingInstructions.BankTransfer;
    export namespace BankTransfer {
      export type FinancialAddress = Stripe.FundingInstructions.BankTransfer.FinancialAddress;
      export type Type = Stripe.FundingInstructions.BankTransfer.Type;
      export namespace FinancialAddress {
        export type Aba = Stripe.FundingInstructions.BankTransfer.FinancialAddress.Aba;
        export type Iban = Stripe.FundingInstructions.BankTransfer.FinancialAddress.Iban;
        export type SortCode = Stripe.FundingInstructions.BankTransfer.FinancialAddress.SortCode;
        export type Spei = Stripe.FundingInstructions.BankTransfer.FinancialAddress.Spei;
        export type SupportedNetwork = Stripe.FundingInstructions.BankTransfer.FinancialAddress.SupportedNetwork;
        export type Swift = Stripe.FundingInstructions.BankTransfer.FinancialAddress.Swift;
        export type Type = Stripe.FundingInstructions.BankTransfer.FinancialAddress.Type;
        export type Zengin = Stripe.FundingInstructions.BankTransfer.FinancialAddress.Zengin;
      }
    }
  }
  export namespace LineItem {
    export type AdjustableQuantity = Stripe.LineItem.AdjustableQuantity;
    export type Discount = Stripe.LineItem.Discount;
    export type Tax = Stripe.LineItem.Tax;
    export namespace Tax {
      export type TaxabilityReason = Stripe.LineItem.Tax.TaxabilityReason;
    }
  }
  export namespace SourceMandateNotification {
    export type AcssDebit = Stripe.SourceMandateNotification.AcssDebit;
    export type BacsDebit = Stripe.SourceMandateNotification.BacsDebit;
    export type SepaDebit = Stripe.SourceMandateNotification.SepaDebit;
  }
  export namespace SourceTransaction {
    export type AchCreditTransfer = Stripe.SourceTransaction.AchCreditTransfer;
    export type ChfCreditTransfer = Stripe.SourceTransaction.ChfCreditTransfer;
    export type GbpCreditTransfer = Stripe.SourceTransaction.GbpCreditTransfer;
    export type PaperCheck = Stripe.SourceTransaction.PaperCheck;
    export type SepaCreditTransfer = Stripe.SourceTransaction.SepaCreditTransfer;
    export type Type = Stripe.SourceTransaction.Type;
  }
  export namespace Capability {
    export type FutureRequirements = Stripe.Capability.FutureRequirements;
    export type Requirements = Stripe.Capability.Requirements;
    export type Status = Stripe.Capability.Status;
    export namespace FutureRequirements {
      export type Alternative = Stripe.Capability.FutureRequirements.Alternative;
      export type DisabledReason = Stripe.Capability.FutureRequirements.DisabledReason;
      export type Error = Stripe.Capability.FutureRequirements.Error;
      export namespace Error {
        export type Code = Stripe.Capability.FutureRequirements.Error.Code;
      }
    }
    export namespace Requirements {
      export type Alternative = Stripe.Capability.Requirements.Alternative;
      export type DisabledReason = Stripe.Capability.Requirements.DisabledReason;
      export type Error = Stripe.Capability.Requirements.Error;
      export namespace Error {
        export type Code = Stripe.Capability.Requirements.Error.Code;
      }
    }
  }
  export namespace Person {
    export type AdditionalTosAcceptances = Stripe.Person.AdditionalTosAcceptances;
    export type AddressKana = Stripe.Person.AddressKana;
    export type AddressKanji = Stripe.Person.AddressKanji;
    export type Dob = Stripe.Person.Dob;
    export type FutureRequirements = Stripe.Person.FutureRequirements;
    export type PoliticalExposure = Stripe.Person.PoliticalExposure;
    export type Relationship = Stripe.Person.Relationship;
    export type Requirements = Stripe.Person.Requirements;
    export type UsCfpbData = Stripe.Person.UsCfpbData;
    export type Verification = Stripe.Person.Verification;
    export namespace AdditionalTosAcceptances {
      export type Account = Stripe.Person.AdditionalTosAcceptances.Account;
    }
    export namespace FutureRequirements {
      export type Alternative = Stripe.Person.FutureRequirements.Alternative;
      export type Error = Stripe.Person.FutureRequirements.Error;
      export namespace Error {
        export type Code = Stripe.Person.FutureRequirements.Error.Code;
      }
    }
    export namespace Requirements {
      export type Alternative = Stripe.Person.Requirements.Alternative;
      export type Error = Stripe.Person.Requirements.Error;
      export namespace Error {
        export type Code = Stripe.Person.Requirements.Error.Code;
      }
    }
    export namespace UsCfpbData {
      export type EthnicityDetails = Stripe.Person.UsCfpbData.EthnicityDetails;
      export type RaceDetails = Stripe.Person.UsCfpbData.RaceDetails;
      export namespace EthnicityDetails {
        export type Ethnicity = Stripe.Person.UsCfpbData.EthnicityDetails.Ethnicity;
      }
      export namespace RaceDetails {
        export type Race = Stripe.Person.UsCfpbData.RaceDetails.Race;
      }
    }
    export namespace Verification {
      export type AdditionalDocument = Stripe.Person.Verification.AdditionalDocument;
      export type Document = Stripe.Person.Verification.Document;
    }
  }
  export namespace CreditNoteLineItem {
    export type DiscountAmount = Stripe.CreditNoteLineItem.DiscountAmount;
    export type PretaxCreditAmount = Stripe.CreditNoteLineItem.PretaxCreditAmount;
    export type Tax = Stripe.CreditNoteLineItem.Tax;
    export type Type = Stripe.CreditNoteLineItem.Type;
    export namespace PretaxCreditAmount {
      export type Type = Stripe.CreditNoteLineItem.PretaxCreditAmount.Type;
    }
    export namespace Tax {
      export type TaxBehavior = Stripe.CreditNoteLineItem.Tax.TaxBehavior;
      export type TaxRateDetails = Stripe.CreditNoteLineItem.Tax.TaxRateDetails;
      export type TaxabilityReason = Stripe.CreditNoteLineItem.Tax.TaxabilityReason;
    }
  }
  export namespace CustomerBalanceTransaction {
    export type Type = Stripe.CustomerBalanceTransaction.Type;
  }
  export namespace CashBalance {
    export type Settings = Stripe.CashBalance.Settings;
    export namespace Settings {
      export type ReconciliationMode = Stripe.CashBalance.Settings.ReconciliationMode;
    }
  }
  export namespace CustomerCashBalanceTransaction {
    export type AdjustedForOverdraft = Stripe.CustomerCashBalanceTransaction.AdjustedForOverdraft;
    export type AppliedToPayment = Stripe.CustomerCashBalanceTransaction.AppliedToPayment;
    export type Funded = Stripe.CustomerCashBalanceTransaction.Funded;
    export type RefundedFromPayment = Stripe.CustomerCashBalanceTransaction.RefundedFromPayment;
    export type TransferredToBalance = Stripe.CustomerCashBalanceTransaction.TransferredToBalance;
    export type Type = Stripe.CustomerCashBalanceTransaction.Type;
    export type UnappliedFromPayment = Stripe.CustomerCashBalanceTransaction.UnappliedFromPayment;
    export namespace Funded {
      export type BankTransfer = Stripe.CustomerCashBalanceTransaction.Funded.BankTransfer;
      export namespace BankTransfer {
        export type EuBankTransfer = Stripe.CustomerCashBalanceTransaction.Funded.BankTransfer.EuBankTransfer;
        export type GbBankTransfer = Stripe.CustomerCashBalanceTransaction.Funded.BankTransfer.GbBankTransfer;
        export type JpBankTransfer = Stripe.CustomerCashBalanceTransaction.Funded.BankTransfer.JpBankTransfer;
        export type Type = Stripe.CustomerCashBalanceTransaction.Funded.BankTransfer.Type;
        export type UsBankTransfer = Stripe.CustomerCashBalanceTransaction.Funded.BankTransfer.UsBankTransfer;
        export namespace UsBankTransfer {
          export type Network = Stripe.CustomerCashBalanceTransaction.Funded.BankTransfer.UsBankTransfer.Network;
        }
      }
    }
  }
  export namespace InvoiceLineItem {
    export type DiscountAmount = Stripe.InvoiceLineItem.DiscountAmount;
    export type Parent = Stripe.InvoiceLineItem.Parent;
    export type Period = Stripe.InvoiceLineItem.Period;
    export type PretaxCreditAmount = Stripe.InvoiceLineItem.PretaxCreditAmount;
    export type Pricing = Stripe.InvoiceLineItem.Pricing;
    export type Tax = Stripe.InvoiceLineItem.Tax;
    export namespace Parent {
      export type InvoiceItemDetails = Stripe.InvoiceLineItem.Parent.InvoiceItemDetails;
      export type SubscriptionItemDetails = Stripe.InvoiceLineItem.Parent.SubscriptionItemDetails;
      export type Type = Stripe.InvoiceLineItem.Parent.Type;
      export namespace InvoiceItemDetails {
        export type ProrationDetails = Stripe.InvoiceLineItem.Parent.InvoiceItemDetails.ProrationDetails;
        export namespace ProrationDetails {
          export type CreditedItems = Stripe.InvoiceLineItem.Parent.InvoiceItemDetails.ProrationDetails.CreditedItems;
        }
      }
      export namespace SubscriptionItemDetails {
        export type ProrationDetails = Stripe.InvoiceLineItem.Parent.SubscriptionItemDetails.ProrationDetails;
        export namespace ProrationDetails {
          export type CreditedItems = Stripe.InvoiceLineItem.Parent.SubscriptionItemDetails.ProrationDetails.CreditedItems;
        }
      }
    }
    export namespace PretaxCreditAmount {
      export type Type = Stripe.InvoiceLineItem.PretaxCreditAmount.Type;
    }
    export namespace Pricing {
      export type PriceDetails = Stripe.InvoiceLineItem.Pricing.PriceDetails;
    }
    export namespace Tax {
      export type TaxBehavior = Stripe.InvoiceLineItem.Tax.TaxBehavior;
      export type TaxRateDetails = Stripe.InvoiceLineItem.Tax.TaxRateDetails;
      export type TaxabilityReason = Stripe.InvoiceLineItem.Tax.TaxabilityReason;
    }
  }
  export namespace PaymentIntentAmountDetailsLineItem {
    export type PaymentMethodOptions = Stripe.PaymentIntentAmountDetailsLineItem.PaymentMethodOptions;
    export type Tax = Stripe.PaymentIntentAmountDetailsLineItem.Tax;
    export namespace PaymentMethodOptions {
      export type Card = Stripe.PaymentIntentAmountDetailsLineItem.PaymentMethodOptions.Card;
      export type CardPresent = Stripe.PaymentIntentAmountDetailsLineItem.PaymentMethodOptions.CardPresent;
      export type Klarna = Stripe.PaymentIntentAmountDetailsLineItem.PaymentMethodOptions.Klarna;
      export type Paypal = Stripe.PaymentIntentAmountDetailsLineItem.PaymentMethodOptions.Paypal;
      export namespace Paypal {
        export type Category = Stripe.PaymentIntentAmountDetailsLineItem.PaymentMethodOptions.Paypal.Category;
      }
    }
  }
  export type Apps = Stripe.Apps;
  export type Billing = Stripe.Billing;
  export type BillingPortal = Stripe.BillingPortal;
  export type Checkout = Stripe.Checkout;
  export type Climate = Stripe.Climate;
  export type Entitlements = Stripe.Entitlements;
  export type FinancialConnections = Stripe.FinancialConnections;
  export type Forwarding = Stripe.Forwarding;
  export type Identity = Stripe.Identity;
  export type Issuing = Stripe.Issuing;
  export type Radar = Stripe.Radar;
  export type Reporting = Stripe.Reporting;
  export type Sigma = Stripe.Sigma;
  export type Tax = Stripe.Tax;
  export type Terminal = Stripe.Terminal;
  export type TestHelpers = Stripe.TestHelpers;
  export type Treasury = Stripe.Treasury;
  export type V2 = Stripe.V2;
  export type Reserve = Stripe.Reserve;
  export namespace Apps {
    export type Secret = Stripe.Apps.Secret;
    export type SecretCreateParams = Stripe.Apps.SecretCreateParams;
    export type SecretListParams = Stripe.Apps.SecretListParams;
    export type SecretDeleteWhereParams = Stripe.Apps.SecretDeleteWhereParams;
    export type SecretFindParams = Stripe.Apps.SecretFindParams;
    export type SecretResource = Stripe.Apps.SecretResource;
    export namespace SecretCreateParams {
      export type Scope = Stripe.Apps.SecretCreateParams.Scope;
      export namespace Scope {
        export type Type = Stripe.Apps.SecretCreateParams.Scope.Type;
      }
    }
    export namespace Secret {
      export type Scope = Stripe.Apps.Secret.Scope;
      export namespace Scope {
        export type Type = Stripe.Apps.Secret.Scope.Type;
      }
    }
  }
  export namespace Billing {
    export type Alert = Stripe.Billing.Alert;
    export type AlertCreateParams = Stripe.Billing.AlertCreateParams;
    export type AlertRetrieveParams = Stripe.Billing.AlertRetrieveParams;
    export type AlertListParams = Stripe.Billing.AlertListParams;
    export type AlertActivateParams = Stripe.Billing.AlertActivateParams;
    export type AlertArchiveParams = Stripe.Billing.AlertArchiveParams;
    export type AlertDeactivateParams = Stripe.Billing.AlertDeactivateParams;
    export type AlertResource = Stripe.Billing.AlertResource;
    export type CreditBalanceSummary = Stripe.Billing.CreditBalanceSummary;
    export type CreditBalanceSummaryRetrieveParams = Stripe.Billing.CreditBalanceSummaryRetrieveParams;
    export type CreditBalanceSummaryResource = Stripe.Billing.CreditBalanceSummaryResource;
    export type CreditBalanceTransaction = Stripe.Billing.CreditBalanceTransaction;
    export type CreditBalanceTransactionRetrieveParams = Stripe.Billing.CreditBalanceTransactionRetrieveParams;
    export type CreditBalanceTransactionListParams = Stripe.Billing.CreditBalanceTransactionListParams;
    export type CreditBalanceTransactionResource = Stripe.Billing.CreditBalanceTransactionResource;
    export type CreditGrant = Stripe.Billing.CreditGrant;
    export type CreditGrantCreateParams = Stripe.Billing.CreditGrantCreateParams;
    export type CreditGrantRetrieveParams = Stripe.Billing.CreditGrantRetrieveParams;
    export type CreditGrantUpdateParams = Stripe.Billing.CreditGrantUpdateParams;
    export type CreditGrantListParams = Stripe.Billing.CreditGrantListParams;
    export type CreditGrantExpireParams = Stripe.Billing.CreditGrantExpireParams;
    export type CreditGrantVoidGrantParams = Stripe.Billing.CreditGrantVoidGrantParams;
    export type CreditGrantResource = Stripe.Billing.CreditGrantResource;
    export type Meter = Stripe.Billing.Meter;
    export type MeterCreateParams = Stripe.Billing.MeterCreateParams;
    export type MeterRetrieveParams = Stripe.Billing.MeterRetrieveParams;
    export type MeterUpdateParams = Stripe.Billing.MeterUpdateParams;
    export type MeterListParams = Stripe.Billing.MeterListParams;
    export type MeterDeactivateParams = Stripe.Billing.MeterDeactivateParams;
    export type MeterListEventSummariesParams = Stripe.Billing.MeterListEventSummariesParams;
    export type MeterReactivateParams = Stripe.Billing.MeterReactivateParams;
    export type MeterResource = Stripe.Billing.MeterResource;
    export type MeterEvent = Stripe.Billing.MeterEvent;
    export type MeterEventCreateParams = Stripe.Billing.MeterEventCreateParams;
    export type MeterEventResource = Stripe.Billing.MeterEventResource;
    export type MeterEventAdjustment = Stripe.Billing.MeterEventAdjustment;
    export type MeterEventAdjustmentCreateParams = Stripe.Billing.MeterEventAdjustmentCreateParams;
    export type MeterEventAdjustmentResource = Stripe.Billing.MeterEventAdjustmentResource;
    export type AlertTriggered = Stripe.Billing.AlertTriggered;
    export type MeterEventSummary = Stripe.Billing.MeterEventSummary;
    export namespace AlertCreateParams {
      export type UsageThreshold = Stripe.Billing.AlertCreateParams.UsageThreshold;
      export namespace UsageThreshold {
        export type Filter = Stripe.Billing.AlertCreateParams.UsageThreshold.Filter;
      }
    }
    export namespace Alert {
      export type Status = Stripe.Billing.Alert.Status;
      export type UsageThreshold = Stripe.Billing.Alert.UsageThreshold;
      export namespace UsageThreshold {
        export type Filter = Stripe.Billing.Alert.UsageThreshold.Filter;
      }
    }
    export namespace CreditBalanceSummaryRetrieveParams {
      export type Filter = Stripe.Billing.CreditBalanceSummaryRetrieveParams.Filter;
      export namespace Filter {
        export type ApplicabilityScope = Stripe.Billing.CreditBalanceSummaryRetrieveParams.Filter.ApplicabilityScope;
        export type Type = Stripe.Billing.CreditBalanceSummaryRetrieveParams.Filter.Type;
        export namespace ApplicabilityScope {
          export type Price = Stripe.Billing.CreditBalanceSummaryRetrieveParams.Filter.ApplicabilityScope.Price;
        }
      }
    }
    export namespace CreditBalanceSummary {
      export type Balance = Stripe.Billing.CreditBalanceSummary.Balance;
      export namespace Balance {
        export type AvailableBalance = Stripe.Billing.CreditBalanceSummary.Balance.AvailableBalance;
        export type LedgerBalance = Stripe.Billing.CreditBalanceSummary.Balance.LedgerBalance;
        export namespace AvailableBalance {
          export type Monetary = Stripe.Billing.CreditBalanceSummary.Balance.AvailableBalance.Monetary;
        }
        export namespace LedgerBalance {
          export type Monetary = Stripe.Billing.CreditBalanceSummary.Balance.LedgerBalance.Monetary;
        }
      }
    }
    export namespace CreditBalanceTransaction {
      export type Credit = Stripe.Billing.CreditBalanceTransaction.Credit;
      export type Debit = Stripe.Billing.CreditBalanceTransaction.Debit;
      export type Type = Stripe.Billing.CreditBalanceTransaction.Type;
      export namespace Credit {
        export type Amount = Stripe.Billing.CreditBalanceTransaction.Credit.Amount;
        export type CreditsApplicationInvoiceVoided = Stripe.Billing.CreditBalanceTransaction.Credit.CreditsApplicationInvoiceVoided;
        export type Type = Stripe.Billing.CreditBalanceTransaction.Credit.Type;
        export namespace Amount {
          export type Monetary = Stripe.Billing.CreditBalanceTransaction.Credit.Amount.Monetary;
        }
      }
      export namespace Debit {
        export type Amount = Stripe.Billing.CreditBalanceTransaction.Debit.Amount;
        export type CreditsApplied = Stripe.Billing.CreditBalanceTransaction.Debit.CreditsApplied;
        export type Type = Stripe.Billing.CreditBalanceTransaction.Debit.Type;
        export namespace Amount {
          export type Monetary = Stripe.Billing.CreditBalanceTransaction.Debit.Amount.Monetary;
        }
      }
    }
    export namespace CreditGrantCreateParams {
      export type Amount = Stripe.Billing.CreditGrantCreateParams.Amount;
      export type ApplicabilityConfig = Stripe.Billing.CreditGrantCreateParams.ApplicabilityConfig;
      export type Category = Stripe.Billing.CreditGrantCreateParams.Category;
      export namespace Amount {
        export type Monetary = Stripe.Billing.CreditGrantCreateParams.Amount.Monetary;
      }
      export namespace ApplicabilityConfig {
        export type Scope = Stripe.Billing.CreditGrantCreateParams.ApplicabilityConfig.Scope;
        export namespace Scope {
          export type Price = Stripe.Billing.CreditGrantCreateParams.ApplicabilityConfig.Scope.Price;
        }
      }
    }
    export namespace CreditGrant {
      export type Amount = Stripe.Billing.CreditGrant.Amount;
      export type ApplicabilityConfig = Stripe.Billing.CreditGrant.ApplicabilityConfig;
      export type Category = Stripe.Billing.CreditGrant.Category;
      export namespace Amount {
        export type Monetary = Stripe.Billing.CreditGrant.Amount.Monetary;
      }
      export namespace ApplicabilityConfig {
        export type Scope = Stripe.Billing.CreditGrant.ApplicabilityConfig.Scope;
        export namespace Scope {
          export type Price = Stripe.Billing.CreditGrant.ApplicabilityConfig.Scope.Price;
        }
      }
    }
    export namespace MeterCreateParams {
      export type DefaultAggregation = Stripe.Billing.MeterCreateParams.DefaultAggregation;
      export type CustomerMapping = Stripe.Billing.MeterCreateParams.CustomerMapping;
      export type EventTimeWindow = Stripe.Billing.MeterCreateParams.EventTimeWindow;
      export type ValueSettings = Stripe.Billing.MeterCreateParams.ValueSettings;
      export namespace DefaultAggregation {
        export type Formula = Stripe.Billing.MeterCreateParams.DefaultAggregation.Formula;
      }
    }
    export namespace Meter {
      export type CustomerMapping = Stripe.Billing.Meter.CustomerMapping;
      export type DefaultAggregation = Stripe.Billing.Meter.DefaultAggregation;
      export type EventTimeWindow = Stripe.Billing.Meter.EventTimeWindow;
      export type Status = Stripe.Billing.Meter.Status;
      export type StatusTransitions = Stripe.Billing.Meter.StatusTransitions;
      export type ValueSettings = Stripe.Billing.Meter.ValueSettings;
      export namespace DefaultAggregation {
        export type Formula = Stripe.Billing.Meter.DefaultAggregation.Formula;
      }
    }
    export namespace MeterEventAdjustmentCreateParams {
      export type Cancel = Stripe.Billing.MeterEventAdjustmentCreateParams.Cancel;
    }
    export namespace MeterEventAdjustment {
      export type Cancel = Stripe.Billing.MeterEventAdjustment.Cancel;
      export type Status = Stripe.Billing.MeterEventAdjustment.Status;
    }
  }
  export namespace BillingPortal {
    export type Configuration = Stripe.BillingPortal.Configuration;
    export type ConfigurationCreateParams = Stripe.BillingPortal.ConfigurationCreateParams;
    export type ConfigurationRetrieveParams = Stripe.BillingPortal.ConfigurationRetrieveParams;
    export type ConfigurationUpdateParams = Stripe.BillingPortal.ConfigurationUpdateParams;
    export type ConfigurationListParams = Stripe.BillingPortal.ConfigurationListParams;
    export type ConfigurationResource = Stripe.BillingPortal.ConfigurationResource;
    export type Session = Stripe.BillingPortal.Session;
    export type SessionCreateParams = Stripe.BillingPortal.SessionCreateParams;
    export type SessionResource = Stripe.BillingPortal.SessionResource;
    export namespace ConfigurationCreateParams {
      export type Features = Stripe.BillingPortal.ConfigurationCreateParams.Features;
      export type BusinessProfile = Stripe.BillingPortal.ConfigurationCreateParams.BusinessProfile;
      export type LoginPage = Stripe.BillingPortal.ConfigurationCreateParams.LoginPage;
      export namespace Features {
        export type CustomerUpdate = Stripe.BillingPortal.ConfigurationCreateParams.Features.CustomerUpdate;
        export type InvoiceHistory = Stripe.BillingPortal.ConfigurationCreateParams.Features.InvoiceHistory;
        export type PaymentMethodUpdate = Stripe.BillingPortal.ConfigurationCreateParams.Features.PaymentMethodUpdate;
        export type SubscriptionCancel = Stripe.BillingPortal.ConfigurationCreateParams.Features.SubscriptionCancel;
        export type SubscriptionUpdate = Stripe.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate;
        export namespace CustomerUpdate {
          export type AllowedUpdate = Stripe.BillingPortal.ConfigurationCreateParams.Features.CustomerUpdate.AllowedUpdate;
        }
        export namespace SubscriptionCancel {
          export type CancellationReason = Stripe.BillingPortal.ConfigurationCreateParams.Features.SubscriptionCancel.CancellationReason;
          export type Mode = Stripe.BillingPortal.ConfigurationCreateParams.Features.SubscriptionCancel.Mode;
          export type ProrationBehavior = Stripe.BillingPortal.ConfigurationCreateParams.Features.SubscriptionCancel.ProrationBehavior;
          export namespace CancellationReason {
            export type Option = Stripe.BillingPortal.ConfigurationCreateParams.Features.SubscriptionCancel.CancellationReason.Option;
          }
        }
        export namespace SubscriptionUpdate {
          export type BillingCycleAnchor = Stripe.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.BillingCycleAnchor;
          export type DefaultAllowedUpdate = Stripe.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.DefaultAllowedUpdate;
          export type Product = Stripe.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.Product;
          export type ProrationBehavior = Stripe.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.ProrationBehavior;
          export type ScheduleAtPeriodEnd = Stripe.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.ScheduleAtPeriodEnd;
          export type TrialUpdateBehavior = Stripe.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.TrialUpdateBehavior;
          export namespace Product {
            export type AdjustableQuantity = Stripe.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.Product.AdjustableQuantity;
          }
          export namespace ScheduleAtPeriodEnd {
            export type Condition = Stripe.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.ScheduleAtPeriodEnd.Condition;
            export namespace Condition {
              export type Type = Stripe.BillingPortal.ConfigurationCreateParams.Features.SubscriptionUpdate.ScheduleAtPeriodEnd.Condition.Type;
            }
          }
        }
      }
    }
    export namespace Configuration {
      export type BusinessProfile = Stripe.BillingPortal.Configuration.BusinessProfile;
      export type Features = Stripe.BillingPortal.Configuration.Features;
      export type LoginPage = Stripe.BillingPortal.Configuration.LoginPage;
      export namespace Features {
        export type CustomerUpdate = Stripe.BillingPortal.Configuration.Features.CustomerUpdate;
        export type InvoiceHistory = Stripe.BillingPortal.Configuration.Features.InvoiceHistory;
        export type PaymentMethodUpdate = Stripe.BillingPortal.Configuration.Features.PaymentMethodUpdate;
        export type SubscriptionCancel = Stripe.BillingPortal.Configuration.Features.SubscriptionCancel;
        export type SubscriptionUpdate = Stripe.BillingPortal.Configuration.Features.SubscriptionUpdate;
        export namespace CustomerUpdate {
          export type AllowedUpdate = Stripe.BillingPortal.Configuration.Features.CustomerUpdate.AllowedUpdate;
        }
        export namespace SubscriptionCancel {
          export type CancellationReason = Stripe.BillingPortal.Configuration.Features.SubscriptionCancel.CancellationReason;
          export type Mode = Stripe.BillingPortal.Configuration.Features.SubscriptionCancel.Mode;
          export type ProrationBehavior = Stripe.BillingPortal.Configuration.Features.SubscriptionCancel.ProrationBehavior;
          export namespace CancellationReason {
            export type Option = Stripe.BillingPortal.Configuration.Features.SubscriptionCancel.CancellationReason.Option;
          }
        }
        export namespace SubscriptionUpdate {
          export type BillingCycleAnchor = Stripe.BillingPortal.Configuration.Features.SubscriptionUpdate.BillingCycleAnchor;
          export type DefaultAllowedUpdate = Stripe.BillingPortal.Configuration.Features.SubscriptionUpdate.DefaultAllowedUpdate;
          export type Product = Stripe.BillingPortal.Configuration.Features.SubscriptionUpdate.Product;
          export type ProrationBehavior = Stripe.BillingPortal.Configuration.Features.SubscriptionUpdate.ProrationBehavior;
          export type ScheduleAtPeriodEnd = Stripe.BillingPortal.Configuration.Features.SubscriptionUpdate.ScheduleAtPeriodEnd;
          export type TrialUpdateBehavior = Stripe.BillingPortal.Configuration.Features.SubscriptionUpdate.TrialUpdateBehavior;
          export namespace Product {
            export type AdjustableQuantity = Stripe.BillingPortal.Configuration.Features.SubscriptionUpdate.Product.AdjustableQuantity;
          }
          export namespace ScheduleAtPeriodEnd {
            export type Condition = Stripe.BillingPortal.Configuration.Features.SubscriptionUpdate.ScheduleAtPeriodEnd.Condition;
            export namespace Condition {
              export type Type = Stripe.BillingPortal.Configuration.Features.SubscriptionUpdate.ScheduleAtPeriodEnd.Condition.Type;
            }
          }
        }
      }
    }
    export namespace SessionCreateParams {
      export type FlowData = Stripe.BillingPortal.SessionCreateParams.FlowData;
      export type Locale = Stripe.BillingPortal.SessionCreateParams.Locale;
      export namespace FlowData {
        export type AfterCompletion = Stripe.BillingPortal.SessionCreateParams.FlowData.AfterCompletion;
        export type SubscriptionCancel = Stripe.BillingPortal.SessionCreateParams.FlowData.SubscriptionCancel;
        export type SubscriptionUpdate = Stripe.BillingPortal.SessionCreateParams.FlowData.SubscriptionUpdate;
        export type SubscriptionUpdateConfirm = Stripe.BillingPortal.SessionCreateParams.FlowData.SubscriptionUpdateConfirm;
        export type Type = Stripe.BillingPortal.SessionCreateParams.FlowData.Type;
        export namespace AfterCompletion {
          export type HostedConfirmation = Stripe.BillingPortal.SessionCreateParams.FlowData.AfterCompletion.HostedConfirmation;
          export type Redirect = Stripe.BillingPortal.SessionCreateParams.FlowData.AfterCompletion.Redirect;
          export type Type = Stripe.BillingPortal.SessionCreateParams.FlowData.AfterCompletion.Type;
        }
        export namespace SubscriptionCancel {
          export type Retention = Stripe.BillingPortal.SessionCreateParams.FlowData.SubscriptionCancel.Retention;
          export namespace Retention {
            export type CouponOffer = Stripe.BillingPortal.SessionCreateParams.FlowData.SubscriptionCancel.Retention.CouponOffer;
          }
        }
        export namespace SubscriptionUpdateConfirm {
          export type Discount = Stripe.BillingPortal.SessionCreateParams.FlowData.SubscriptionUpdateConfirm.Discount;
          export type Item = Stripe.BillingPortal.SessionCreateParams.FlowData.SubscriptionUpdateConfirm.Item;
        }
      }
    }
    export namespace Session {
      export type Flow = Stripe.BillingPortal.Session.Flow;
      export type Locale = Stripe.BillingPortal.Session.Locale;
      export namespace Flow {
        export type AfterCompletion = Stripe.BillingPortal.Session.Flow.AfterCompletion;
        export type SubscriptionCancel = Stripe.BillingPortal.Session.Flow.SubscriptionCancel;
        export type SubscriptionUpdate = Stripe.BillingPortal.Session.Flow.SubscriptionUpdate;
        export type SubscriptionUpdateConfirm = Stripe.BillingPortal.Session.Flow.SubscriptionUpdateConfirm;
        export type Type = Stripe.BillingPortal.Session.Flow.Type;
        export namespace AfterCompletion {
          export type HostedConfirmation = Stripe.BillingPortal.Session.Flow.AfterCompletion.HostedConfirmation;
          export type Redirect = Stripe.BillingPortal.Session.Flow.AfterCompletion.Redirect;
          export type Type = Stripe.BillingPortal.Session.Flow.AfterCompletion.Type;
        }
        export namespace SubscriptionCancel {
          export type Retention = Stripe.BillingPortal.Session.Flow.SubscriptionCancel.Retention;
          export namespace Retention {
            export type CouponOffer = Stripe.BillingPortal.Session.Flow.SubscriptionCancel.Retention.CouponOffer;
          }
        }
        export namespace SubscriptionUpdateConfirm {
          export type Discount = Stripe.BillingPortal.Session.Flow.SubscriptionUpdateConfirm.Discount;
          export type Item = Stripe.BillingPortal.Session.Flow.SubscriptionUpdateConfirm.Item;
        }
      }
    }
  }
  export namespace Checkout {
    export type Session = Stripe.Checkout.Session;
    export type SessionCreateParams = Stripe.Checkout.SessionCreateParams;
    export type SessionRetrieveParams = Stripe.Checkout.SessionRetrieveParams;
    export type SessionUpdateParams = Stripe.Checkout.SessionUpdateParams;
    export type SessionListParams = Stripe.Checkout.SessionListParams;
    export type SessionExpireParams = Stripe.Checkout.SessionExpireParams;
    export type SessionListLineItemsParams = Stripe.Checkout.SessionListLineItemsParams;
    export type SessionResource = Stripe.Checkout.SessionResource;
    export namespace SessionCreateParams {
      export type AdaptivePricing = Stripe.Checkout.SessionCreateParams.AdaptivePricing;
      export type AfterExpiration = Stripe.Checkout.SessionCreateParams.AfterExpiration;
      export type AutomaticTax = Stripe.Checkout.SessionCreateParams.AutomaticTax;
      export type BillingAddressCollection = Stripe.Checkout.SessionCreateParams.BillingAddressCollection;
      export type BrandingSettings = Stripe.Checkout.SessionCreateParams.BrandingSettings;
      export type ConsentCollection = Stripe.Checkout.SessionCreateParams.ConsentCollection;
      export type CustomField = Stripe.Checkout.SessionCreateParams.CustomField;
      export type CustomText = Stripe.Checkout.SessionCreateParams.CustomText;
      export type CustomerCreation = Stripe.Checkout.SessionCreateParams.CustomerCreation;
      export type CustomerUpdate = Stripe.Checkout.SessionCreateParams.CustomerUpdate;
      export type Discount = Stripe.Checkout.SessionCreateParams.Discount;
      export type ExcludedPaymentMethodType = Stripe.Checkout.SessionCreateParams.ExcludedPaymentMethodType;
      export type InvoiceCreation = Stripe.Checkout.SessionCreateParams.InvoiceCreation;
      export type LineItem = Stripe.Checkout.SessionCreateParams.LineItem;
      export type Locale = Stripe.Checkout.SessionCreateParams.Locale;
      export type ManagedPayments = Stripe.Checkout.SessionCreateParams.ManagedPayments;
      export type Mode = Stripe.Checkout.SessionCreateParams.Mode;
      export type NameCollection = Stripe.Checkout.SessionCreateParams.NameCollection;
      export type OptionalItem = Stripe.Checkout.SessionCreateParams.OptionalItem;
      export type OriginContext = Stripe.Checkout.SessionCreateParams.OriginContext;
      export type PaymentIntentData = Stripe.Checkout.SessionCreateParams.PaymentIntentData;
      export type PaymentMethodCollection = Stripe.Checkout.SessionCreateParams.PaymentMethodCollection;
      export type PaymentMethodData = Stripe.Checkout.SessionCreateParams.PaymentMethodData;
      export type PaymentMethodOptions = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions;
      export type PaymentMethodType = Stripe.Checkout.SessionCreateParams.PaymentMethodType;
      export type Permissions = Stripe.Checkout.SessionCreateParams.Permissions;
      export type PhoneNumberCollection = Stripe.Checkout.SessionCreateParams.PhoneNumberCollection;
      export type RedirectOnCompletion = Stripe.Checkout.SessionCreateParams.RedirectOnCompletion;
      export type SavedPaymentMethodOptions = Stripe.Checkout.SessionCreateParams.SavedPaymentMethodOptions;
      export type SetupIntentData = Stripe.Checkout.SessionCreateParams.SetupIntentData;
      export type ShippingAddressCollection = Stripe.Checkout.SessionCreateParams.ShippingAddressCollection;
      export type ShippingOption = Stripe.Checkout.SessionCreateParams.ShippingOption;
      export type SubmitType = Stripe.Checkout.SessionCreateParams.SubmitType;
      export type SubscriptionData = Stripe.Checkout.SessionCreateParams.SubscriptionData;
      export type TaxIdCollection = Stripe.Checkout.SessionCreateParams.TaxIdCollection;
      export type UiMode = Stripe.Checkout.SessionCreateParams.UiMode;
      export type WalletOptions = Stripe.Checkout.SessionCreateParams.WalletOptions;
      export namespace AfterExpiration {
        export type Recovery = Stripe.Checkout.SessionCreateParams.AfterExpiration.Recovery;
      }
      export namespace AutomaticTax {
        export type Liability = Stripe.Checkout.SessionCreateParams.AutomaticTax.Liability;
        export namespace Liability {
          export type Type = Stripe.Checkout.SessionCreateParams.AutomaticTax.Liability.Type;
        }
      }
      export namespace BrandingSettings {
        export type BorderStyle = Stripe.Checkout.SessionCreateParams.BrandingSettings.BorderStyle;
        export type FontFamily = Stripe.Checkout.SessionCreateParams.BrandingSettings.FontFamily;
        export type Icon = Stripe.Checkout.SessionCreateParams.BrandingSettings.Icon;
        export type Logo = Stripe.Checkout.SessionCreateParams.BrandingSettings.Logo;
        export namespace Icon {
          export type Type = Stripe.Checkout.SessionCreateParams.BrandingSettings.Icon.Type;
        }
        export namespace Logo {
          export type Type = Stripe.Checkout.SessionCreateParams.BrandingSettings.Logo.Type;
        }
      }
      export namespace ConsentCollection {
        export type PaymentMethodReuseAgreement = Stripe.Checkout.SessionCreateParams.ConsentCollection.PaymentMethodReuseAgreement;
        export type Promotions = Stripe.Checkout.SessionCreateParams.ConsentCollection.Promotions;
        export type TermsOfService = Stripe.Checkout.SessionCreateParams.ConsentCollection.TermsOfService;
        export namespace PaymentMethodReuseAgreement {
          export type Position = Stripe.Checkout.SessionCreateParams.ConsentCollection.PaymentMethodReuseAgreement.Position;
        }
      }
      export namespace CustomerUpdate {
        export type Address = Stripe.Checkout.SessionCreateParams.CustomerUpdate.Address;
        export type Name = Stripe.Checkout.SessionCreateParams.CustomerUpdate.Name;
        export type Shipping = Stripe.Checkout.SessionCreateParams.CustomerUpdate.Shipping;
      }
      export namespace CustomField {
        export type Dropdown = Stripe.Checkout.SessionCreateParams.CustomField.Dropdown;
        export type Label = Stripe.Checkout.SessionCreateParams.CustomField.Label;
        export type Numeric = Stripe.Checkout.SessionCreateParams.CustomField.Numeric;
        export type Text = Stripe.Checkout.SessionCreateParams.CustomField.Text;
        export type Type = Stripe.Checkout.SessionCreateParams.CustomField.Type;
        export namespace Dropdown {
          export type Option = Stripe.Checkout.SessionCreateParams.CustomField.Dropdown.Option;
        }
      }
      export namespace CustomText {
        export type AfterSubmit = Stripe.Checkout.SessionCreateParams.CustomText.AfterSubmit;
        export type ShippingAddress = Stripe.Checkout.SessionCreateParams.CustomText.ShippingAddress;
        export type Submit = Stripe.Checkout.SessionCreateParams.CustomText.Submit;
        export type TermsOfServiceAcceptance = Stripe.Checkout.SessionCreateParams.CustomText.TermsOfServiceAcceptance;
      }
      export namespace InvoiceCreation {
        export type InvoiceData = Stripe.Checkout.SessionCreateParams.InvoiceCreation.InvoiceData;
        export namespace InvoiceData {
          export type CustomField = Stripe.Checkout.SessionCreateParams.InvoiceCreation.InvoiceData.CustomField;
          export type Issuer = Stripe.Checkout.SessionCreateParams.InvoiceCreation.InvoiceData.Issuer;
          export type RenderingOptions = Stripe.Checkout.SessionCreateParams.InvoiceCreation.InvoiceData.RenderingOptions;
          export namespace Issuer {
            export type Type = Stripe.Checkout.SessionCreateParams.InvoiceCreation.InvoiceData.Issuer.Type;
          }
          export namespace RenderingOptions {
            export type AmountTaxDisplay = Stripe.Checkout.SessionCreateParams.InvoiceCreation.InvoiceData.RenderingOptions.AmountTaxDisplay;
          }
        }
      }
      export namespace LineItem {
        export type AdjustableQuantity = Stripe.Checkout.SessionCreateParams.LineItem.AdjustableQuantity;
        export type PriceData = Stripe.Checkout.SessionCreateParams.LineItem.PriceData;
        export namespace PriceData {
          export type ProductData = Stripe.Checkout.SessionCreateParams.LineItem.PriceData.ProductData;
          export type Recurring = Stripe.Checkout.SessionCreateParams.LineItem.PriceData.Recurring;
          export type TaxBehavior = Stripe.Checkout.SessionCreateParams.LineItem.PriceData.TaxBehavior;
          export namespace Recurring {
            export type Interval = Stripe.Checkout.SessionCreateParams.LineItem.PriceData.Recurring.Interval;
          }
        }
      }
      export namespace NameCollection {
        export type Business = Stripe.Checkout.SessionCreateParams.NameCollection.Business;
        export type Individual = Stripe.Checkout.SessionCreateParams.NameCollection.Individual;
      }
      export namespace OptionalItem {
        export type AdjustableQuantity = Stripe.Checkout.SessionCreateParams.OptionalItem.AdjustableQuantity;
      }
      export namespace PaymentIntentData {
        export type CaptureMethod = Stripe.Checkout.SessionCreateParams.PaymentIntentData.CaptureMethod;
        export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentIntentData.SetupFutureUsage;
        export type Shipping = Stripe.Checkout.SessionCreateParams.PaymentIntentData.Shipping;
        export type TransferData = Stripe.Checkout.SessionCreateParams.PaymentIntentData.TransferData;
      }
      export namespace PaymentMethodData {
        export type AllowRedisplay = Stripe.Checkout.SessionCreateParams.PaymentMethodData.AllowRedisplay;
      }
      export namespace PaymentMethodOptions {
        export type AcssDebit = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.AcssDebit;
        export type Affirm = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Affirm;
        export type AfterpayClearpay = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.AfterpayClearpay;
        export type Alipay = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Alipay;
        export type Alma = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Alma;
        export type AmazonPay = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.AmazonPay;
        export type AuBecsDebit = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.AuBecsDebit;
        export type BacsDebit = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.BacsDebit;
        export type Bancontact = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Bancontact;
        export type Billie = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Billie;
        export type Boleto = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Boleto;
        export type Card = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Card;
        export type Cashapp = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Cashapp;
        export type Crypto = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Crypto;
        export type CustomerBalance = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.CustomerBalance;
        export type DemoPay = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.DemoPay;
        export type Eps = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Eps;
        export type Fpx = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Fpx;
        export type Giropay = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Giropay;
        export type Grabpay = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Grabpay;
        export type Ideal = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Ideal;
        export type KakaoPay = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.KakaoPay;
        export type Klarna = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Klarna;
        export type Konbini = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Konbini;
        export type KrCard = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.KrCard;
        export type Link = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Link;
        export type Mobilepay = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Mobilepay;
        export type Multibanco = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Multibanco;
        export type NaverPay = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.NaverPay;
        export type Oxxo = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Oxxo;
        export type P24 = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.P24;
        export type PayByBank = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.PayByBank;
        export type Payco = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Payco;
        export type Paynow = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Paynow;
        export type Paypal = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Paypal;
        export type Payto = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Payto;
        export type Pix = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Pix;
        export type RevolutPay = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.RevolutPay;
        export type SamsungPay = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.SamsungPay;
        export type Satispay = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Satispay;
        export type Scalapay = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Scalapay;
        export type SepaDebit = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.SepaDebit;
        export type Sofort = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Sofort;
        export type Sunbit = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Sunbit;
        export type Swish = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Swish;
        export type Twint = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Twint;
        export type Upi = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Upi;
        export type UsBankAccount = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.UsBankAccount;
        export type WechatPay = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.WechatPay;
        export namespace AcssDebit {
          export type Currency = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.AcssDebit.Currency;
          export type MandateOptions = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions;
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.AcssDebit.SetupFutureUsage;
          export type VerificationMethod = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.AcssDebit.VerificationMethod;
          export namespace MandateOptions {
            export type DefaultFor = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions.DefaultFor;
            export type PaymentSchedule = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
            export type TransactionType = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
          }
        }
        export namespace AmazonPay {
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.AmazonPay.SetupFutureUsage;
        }
        export namespace BacsDebit {
          export type MandateOptions = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.BacsDebit.MandateOptions;
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.BacsDebit.SetupFutureUsage;
        }
        export namespace Boleto {
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Boleto.SetupFutureUsage;
        }
        export namespace Card {
          export type Installments = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Card.Installments;
          export type RequestExtendedAuthorization = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Card.RequestExtendedAuthorization;
          export type RequestIncrementalAuthorization = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Card.RequestIncrementalAuthorization;
          export type RequestMulticapture = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Card.RequestMulticapture;
          export type RequestOvercapture = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Card.RequestOvercapture;
          export type RequestThreeDSecure = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Card.RequestThreeDSecure;
          export type Restrictions = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Card.Restrictions;
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Card.SetupFutureUsage;
          export namespace Restrictions {
            export type BrandsBlocked = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Card.Restrictions.BrandsBlocked;
          }
        }
        export namespace Cashapp {
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Cashapp.SetupFutureUsage;
        }
        export namespace CustomerBalance {
          export type BankTransfer = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.CustomerBalance.BankTransfer;
          export namespace BankTransfer {
            export type EuBankTransfer = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
            export type RequestedAddressType = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.RequestedAddressType;
            export type Type = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.CustomerBalance.BankTransfer.Type;
          }
        }
        export namespace DemoPay {
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.DemoPay.SetupFutureUsage;
        }
        export namespace KakaoPay {
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.KakaoPay.SetupFutureUsage;
        }
        export namespace Klarna {
          export type Subscription = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Klarna.Subscription;
          export namespace Subscription {
            export type Interval = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Klarna.Subscription.Interval;
            export type NextBilling = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Klarna.Subscription.NextBilling;
          }
        }
        export namespace KrCard {
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.KrCard.SetupFutureUsage;
        }
        export namespace Link {
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Link.SetupFutureUsage;
        }
        export namespace NaverPay {
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.NaverPay.SetupFutureUsage;
        }
        export namespace Paypal {
          export type PreferredLocale = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Paypal.PreferredLocale;
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Paypal.SetupFutureUsage;
        }
        export namespace Payto {
          export type MandateOptions = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Payto.MandateOptions;
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Payto.SetupFutureUsage;
          export namespace MandateOptions {
            export type AmountType = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Payto.MandateOptions.AmountType;
            export type PaymentSchedule = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
            export type Purpose = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Payto.MandateOptions.Purpose;
          }
        }
        export namespace Pix {
          export type AmountIncludesIof = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Pix.AmountIncludesIof;
          export type MandateOptions = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Pix.MandateOptions;
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Pix.SetupFutureUsage;
          export namespace MandateOptions {
            export type AmountIncludesIof = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
            export type AmountType = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Pix.MandateOptions.AmountType;
            export type PaymentSchedule = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
          }
        }
        export namespace RevolutPay {
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.RevolutPay.SetupFutureUsage;
        }
        export namespace SepaDebit {
          export type MandateOptions = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.SepaDebit.MandateOptions;
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.SepaDebit.SetupFutureUsage;
        }
        export namespace Twint {
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Twint.SetupFutureUsage;
        }
        export namespace Upi {
          export type MandateOptions = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Upi.MandateOptions;
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Upi.SetupFutureUsage;
          export namespace MandateOptions {
            export type AmountType = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.Upi.MandateOptions.AmountType;
          }
        }
        export namespace UsBankAccount {
          export type FinancialConnections = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections;
          export type SetupFutureUsage = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.UsBankAccount.SetupFutureUsage;
          export type VerificationMethod = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.UsBankAccount.VerificationMethod;
          export namespace FinancialConnections {
            export type Permission = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
            export type Prefetch = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
          }
        }
        export namespace WechatPay {
          export type Client = Stripe.Checkout.SessionCreateParams.PaymentMethodOptions.WechatPay.Client;
        }
      }
      export namespace Permissions {
        export type UpdateShippingDetails = Stripe.Checkout.SessionCreateParams.Permissions.UpdateShippingDetails;
      }
      export namespace SavedPaymentMethodOptions {
        export type AllowRedisplayFilter = Stripe.Checkout.SessionCreateParams.SavedPaymentMethodOptions.AllowRedisplayFilter;
        export type PaymentMethodRemove = Stripe.Checkout.SessionCreateParams.SavedPaymentMethodOptions.PaymentMethodRemove;
        export type PaymentMethodSave = Stripe.Checkout.SessionCreateParams.SavedPaymentMethodOptions.PaymentMethodSave;
      }
      export namespace ShippingAddressCollection {
        export type AllowedCountry = Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry;
      }
      export namespace ShippingOption {
        export type ShippingRateData = Stripe.Checkout.SessionCreateParams.ShippingOption.ShippingRateData;
        export namespace ShippingRateData {
          export type DeliveryEstimate = Stripe.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.DeliveryEstimate;
          export type FixedAmount = Stripe.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.FixedAmount;
          export type TaxBehavior = Stripe.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.TaxBehavior;
          export namespace DeliveryEstimate {
            export type Maximum = Stripe.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.DeliveryEstimate.Maximum;
            export type Minimum = Stripe.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.DeliveryEstimate.Minimum;
            export namespace Maximum {
              export type Unit = Stripe.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.DeliveryEstimate.Maximum.Unit;
            }
            export namespace Minimum {
              export type Unit = Stripe.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.DeliveryEstimate.Minimum.Unit;
            }
          }
          export namespace FixedAmount {
            export type CurrencyOptions = Stripe.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.FixedAmount.CurrencyOptions;
            export namespace CurrencyOptions {
              export type TaxBehavior = Stripe.Checkout.SessionCreateParams.ShippingOption.ShippingRateData.FixedAmount.CurrencyOptions.TaxBehavior;
            }
          }
        }
      }
      export namespace SubscriptionData {
        export type BillingCycleAnchorConfig = Stripe.Checkout.SessionCreateParams.SubscriptionData.BillingCycleAnchorConfig;
        export type BillingMode = Stripe.Checkout.SessionCreateParams.SubscriptionData.BillingMode;
        export type InvoiceSettings = Stripe.Checkout.SessionCreateParams.SubscriptionData.InvoiceSettings;
        export type PendingInvoiceItemInterval = Stripe.Checkout.SessionCreateParams.SubscriptionData.PendingInvoiceItemInterval;
        export type ProrationBehavior = Stripe.Checkout.SessionCreateParams.SubscriptionData.ProrationBehavior;
        export type TransferData = Stripe.Checkout.SessionCreateParams.SubscriptionData.TransferData;
        export type TrialSettings = Stripe.Checkout.SessionCreateParams.SubscriptionData.TrialSettings;
        export namespace BillingMode {
          export type Flexible = Stripe.Checkout.SessionCreateParams.SubscriptionData.BillingMode.Flexible;
          export type Type = Stripe.Checkout.SessionCreateParams.SubscriptionData.BillingMode.Type;
          export namespace Flexible {
            export type ProrationDiscounts = Stripe.Checkout.SessionCreateParams.SubscriptionData.BillingMode.Flexible.ProrationDiscounts;
          }
        }
        export namespace InvoiceSettings {
          export type Issuer = Stripe.Checkout.SessionCreateParams.SubscriptionData.InvoiceSettings.Issuer;
          export namespace Issuer {
            export type Type = Stripe.Checkout.SessionCreateParams.SubscriptionData.InvoiceSettings.Issuer.Type;
          }
        }
        export namespace PendingInvoiceItemInterval {
          export type Interval = Stripe.Checkout.SessionCreateParams.SubscriptionData.PendingInvoiceItemInterval.Interval;
        }
        export namespace TrialSettings {
          export type EndBehavior = Stripe.Checkout.SessionCreateParams.SubscriptionData.TrialSettings.EndBehavior;
          export namespace EndBehavior {
            export type MissingPaymentMethod = Stripe.Checkout.SessionCreateParams.SubscriptionData.TrialSettings.EndBehavior.MissingPaymentMethod;
          }
        }
      }
      export namespace TaxIdCollection {
        export type Required = Stripe.Checkout.SessionCreateParams.TaxIdCollection.Required;
      }
      export namespace WalletOptions {
        export type Link = Stripe.Checkout.SessionCreateParams.WalletOptions.Link;
        export namespace Link {
          export type Display = Stripe.Checkout.SessionCreateParams.WalletOptions.Link.Display;
        }
      }
    }
    export namespace Session {
      export type AdaptivePricing = Stripe.Checkout.Session.AdaptivePricing;
      export type AfterExpiration = Stripe.Checkout.Session.AfterExpiration;
      export type AutomaticTax = Stripe.Checkout.Session.AutomaticTax;
      export type BillingAddressCollection = Stripe.Checkout.Session.BillingAddressCollection;
      export type BrandingSettings = Stripe.Checkout.Session.BrandingSettings;
      export type CollectedInformation = Stripe.Checkout.Session.CollectedInformation;
      export type Consent = Stripe.Checkout.Session.Consent;
      export type ConsentCollection = Stripe.Checkout.Session.ConsentCollection;
      export type CurrencyConversion = Stripe.Checkout.Session.CurrencyConversion;
      export type CustomField = Stripe.Checkout.Session.CustomField;
      export type CustomText = Stripe.Checkout.Session.CustomText;
      export type CustomerCreation = Stripe.Checkout.Session.CustomerCreation;
      export type CustomerDetails = Stripe.Checkout.Session.CustomerDetails;
      export type Discount = Stripe.Checkout.Session.Discount;
      export type InvoiceCreation = Stripe.Checkout.Session.InvoiceCreation;
      export type Locale = Stripe.Checkout.Session.Locale;
      export type ManagedPayments = Stripe.Checkout.Session.ManagedPayments;
      export type Mode = Stripe.Checkout.Session.Mode;
      export type NameCollection = Stripe.Checkout.Session.NameCollection;
      export type OptionalItem = Stripe.Checkout.Session.OptionalItem;
      export type OriginContext = Stripe.Checkout.Session.OriginContext;
      export type PaymentMethodCollection = Stripe.Checkout.Session.PaymentMethodCollection;
      export type PaymentMethodConfigurationDetails = Stripe.Checkout.Session.PaymentMethodConfigurationDetails;
      export type PaymentMethodOptions = Stripe.Checkout.Session.PaymentMethodOptions;
      export type PaymentStatus = Stripe.Checkout.Session.PaymentStatus;
      export type Permissions = Stripe.Checkout.Session.Permissions;
      export type PhoneNumberCollection = Stripe.Checkout.Session.PhoneNumberCollection;
      export type PresentmentDetails = Stripe.Checkout.Session.PresentmentDetails;
      export type RedirectOnCompletion = Stripe.Checkout.Session.RedirectOnCompletion;
      export type SavedPaymentMethodOptions = Stripe.Checkout.Session.SavedPaymentMethodOptions;
      export type ShippingAddressCollection = Stripe.Checkout.Session.ShippingAddressCollection;
      export type ShippingCost = Stripe.Checkout.Session.ShippingCost;
      export type ShippingOption = Stripe.Checkout.Session.ShippingOption;
      export type Status = Stripe.Checkout.Session.Status;
      export type SubmitType = Stripe.Checkout.Session.SubmitType;
      export type TaxIdCollection = Stripe.Checkout.Session.TaxIdCollection;
      export type TotalDetails = Stripe.Checkout.Session.TotalDetails;
      export type UiMode = Stripe.Checkout.Session.UiMode;
      export type WalletOptions = Stripe.Checkout.Session.WalletOptions;
      export namespace AfterExpiration {
        export type Recovery = Stripe.Checkout.Session.AfterExpiration.Recovery;
      }
      export namespace AutomaticTax {
        export type Liability = Stripe.Checkout.Session.AutomaticTax.Liability;
        export type Status = Stripe.Checkout.Session.AutomaticTax.Status;
        export namespace Liability {
          export type Type = Stripe.Checkout.Session.AutomaticTax.Liability.Type;
        }
      }
      export namespace BrandingSettings {
        export type BorderStyle = Stripe.Checkout.Session.BrandingSettings.BorderStyle;
        export type Icon = Stripe.Checkout.Session.BrandingSettings.Icon;
        export type Logo = Stripe.Checkout.Session.BrandingSettings.Logo;
        export namespace Icon {
          export type Type = Stripe.Checkout.Session.BrandingSettings.Icon.Type;
        }
        export namespace Logo {
          export type Type = Stripe.Checkout.Session.BrandingSettings.Logo.Type;
        }
      }
      export namespace CollectedInformation {
        export type ShippingDetails = Stripe.Checkout.Session.CollectedInformation.ShippingDetails;
      }
      export namespace Consent {
        export type Promotions = Stripe.Checkout.Session.Consent.Promotions;
      }
      export namespace ConsentCollection {
        export type PaymentMethodReuseAgreement = Stripe.Checkout.Session.ConsentCollection.PaymentMethodReuseAgreement;
        export type Promotions = Stripe.Checkout.Session.ConsentCollection.Promotions;
        export type TermsOfService = Stripe.Checkout.Session.ConsentCollection.TermsOfService;
        export namespace PaymentMethodReuseAgreement {
          export type Position = Stripe.Checkout.Session.ConsentCollection.PaymentMethodReuseAgreement.Position;
        }
      }
      export namespace CustomerDetails {
        export type TaxExempt = Stripe.Checkout.Session.CustomerDetails.TaxExempt;
        export type TaxId = Stripe.Checkout.Session.CustomerDetails.TaxId;
        export namespace TaxId {
          export type Type = Stripe.Checkout.Session.CustomerDetails.TaxId.Type;
        }
      }
      export namespace CustomField {
        export type Dropdown = Stripe.Checkout.Session.CustomField.Dropdown;
        export type Label = Stripe.Checkout.Session.CustomField.Label;
        export type Numeric = Stripe.Checkout.Session.CustomField.Numeric;
        export type Text = Stripe.Checkout.Session.CustomField.Text;
        export type Type = Stripe.Checkout.Session.CustomField.Type;
        export namespace Dropdown {
          export type Option = Stripe.Checkout.Session.CustomField.Dropdown.Option;
        }
      }
      export namespace CustomText {
        export type AfterSubmit = Stripe.Checkout.Session.CustomText.AfterSubmit;
        export type ShippingAddress = Stripe.Checkout.Session.CustomText.ShippingAddress;
        export type Submit = Stripe.Checkout.Session.CustomText.Submit;
        export type TermsOfServiceAcceptance = Stripe.Checkout.Session.CustomText.TermsOfServiceAcceptance;
      }
      export namespace InvoiceCreation {
        export type InvoiceData = Stripe.Checkout.Session.InvoiceCreation.InvoiceData;
        export namespace InvoiceData {
          export type CustomField = Stripe.Checkout.Session.InvoiceCreation.InvoiceData.CustomField;
          export type Issuer = Stripe.Checkout.Session.InvoiceCreation.InvoiceData.Issuer;
          export type RenderingOptions = Stripe.Checkout.Session.InvoiceCreation.InvoiceData.RenderingOptions;
          export namespace Issuer {
            export type Type = Stripe.Checkout.Session.InvoiceCreation.InvoiceData.Issuer.Type;
          }
        }
      }
      export namespace NameCollection {
        export type Business = Stripe.Checkout.Session.NameCollection.Business;
        export type Individual = Stripe.Checkout.Session.NameCollection.Individual;
      }
      export namespace OptionalItem {
        export type AdjustableQuantity = Stripe.Checkout.Session.OptionalItem.AdjustableQuantity;
      }
      export namespace PaymentMethodOptions {
        export type AcssDebit = Stripe.Checkout.Session.PaymentMethodOptions.AcssDebit;
        export type Affirm = Stripe.Checkout.Session.PaymentMethodOptions.Affirm;
        export type AfterpayClearpay = Stripe.Checkout.Session.PaymentMethodOptions.AfterpayClearpay;
        export type Alipay = Stripe.Checkout.Session.PaymentMethodOptions.Alipay;
        export type Alma = Stripe.Checkout.Session.PaymentMethodOptions.Alma;
        export type AmazonPay = Stripe.Checkout.Session.PaymentMethodOptions.AmazonPay;
        export type AuBecsDebit = Stripe.Checkout.Session.PaymentMethodOptions.AuBecsDebit;
        export type BacsDebit = Stripe.Checkout.Session.PaymentMethodOptions.BacsDebit;
        export type Bancontact = Stripe.Checkout.Session.PaymentMethodOptions.Bancontact;
        export type Billie = Stripe.Checkout.Session.PaymentMethodOptions.Billie;
        export type Boleto = Stripe.Checkout.Session.PaymentMethodOptions.Boleto;
        export type Card = Stripe.Checkout.Session.PaymentMethodOptions.Card;
        export type Cashapp = Stripe.Checkout.Session.PaymentMethodOptions.Cashapp;
        export type CustomerBalance = Stripe.Checkout.Session.PaymentMethodOptions.CustomerBalance;
        export type Eps = Stripe.Checkout.Session.PaymentMethodOptions.Eps;
        export type Fpx = Stripe.Checkout.Session.PaymentMethodOptions.Fpx;
        export type Giropay = Stripe.Checkout.Session.PaymentMethodOptions.Giropay;
        export type Grabpay = Stripe.Checkout.Session.PaymentMethodOptions.Grabpay;
        export type Ideal = Stripe.Checkout.Session.PaymentMethodOptions.Ideal;
        export type KakaoPay = Stripe.Checkout.Session.PaymentMethodOptions.KakaoPay;
        export type Klarna = Stripe.Checkout.Session.PaymentMethodOptions.Klarna;
        export type Konbini = Stripe.Checkout.Session.PaymentMethodOptions.Konbini;
        export type KrCard = Stripe.Checkout.Session.PaymentMethodOptions.KrCard;
        export type Link = Stripe.Checkout.Session.PaymentMethodOptions.Link;
        export type Mobilepay = Stripe.Checkout.Session.PaymentMethodOptions.Mobilepay;
        export type Multibanco = Stripe.Checkout.Session.PaymentMethodOptions.Multibanco;
        export type NaverPay = Stripe.Checkout.Session.PaymentMethodOptions.NaverPay;
        export type Oxxo = Stripe.Checkout.Session.PaymentMethodOptions.Oxxo;
        export type P24 = Stripe.Checkout.Session.PaymentMethodOptions.P24;
        export type Payco = Stripe.Checkout.Session.PaymentMethodOptions.Payco;
        export type Paynow = Stripe.Checkout.Session.PaymentMethodOptions.Paynow;
        export type Paypal = Stripe.Checkout.Session.PaymentMethodOptions.Paypal;
        export type Payto = Stripe.Checkout.Session.PaymentMethodOptions.Payto;
        export type Pix = Stripe.Checkout.Session.PaymentMethodOptions.Pix;
        export type RevolutPay = Stripe.Checkout.Session.PaymentMethodOptions.RevolutPay;
        export type SamsungPay = Stripe.Checkout.Session.PaymentMethodOptions.SamsungPay;
        export type Satispay = Stripe.Checkout.Session.PaymentMethodOptions.Satispay;
        export type Scalapay = Stripe.Checkout.Session.PaymentMethodOptions.Scalapay;
        export type SepaDebit = Stripe.Checkout.Session.PaymentMethodOptions.SepaDebit;
        export type Sofort = Stripe.Checkout.Session.PaymentMethodOptions.Sofort;
        export type Sunbit = Stripe.Checkout.Session.PaymentMethodOptions.Sunbit;
        export type Swish = Stripe.Checkout.Session.PaymentMethodOptions.Swish;
        export type Twint = Stripe.Checkout.Session.PaymentMethodOptions.Twint;
        export type Upi = Stripe.Checkout.Session.PaymentMethodOptions.Upi;
        export type UsBankAccount = Stripe.Checkout.Session.PaymentMethodOptions.UsBankAccount;
        export type WechatPay = Stripe.Checkout.Session.PaymentMethodOptions.WechatPay;
        export namespace AcssDebit {
          export type Currency = Stripe.Checkout.Session.PaymentMethodOptions.AcssDebit.Currency;
          export type MandateOptions = Stripe.Checkout.Session.PaymentMethodOptions.AcssDebit.MandateOptions;
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.AcssDebit.SetupFutureUsage;
          export type VerificationMethod = Stripe.Checkout.Session.PaymentMethodOptions.AcssDebit.VerificationMethod;
          export namespace MandateOptions {
            export type DefaultFor = Stripe.Checkout.Session.PaymentMethodOptions.AcssDebit.MandateOptions.DefaultFor;
            export type PaymentSchedule = Stripe.Checkout.Session.PaymentMethodOptions.AcssDebit.MandateOptions.PaymentSchedule;
            export type TransactionType = Stripe.Checkout.Session.PaymentMethodOptions.AcssDebit.MandateOptions.TransactionType;
          }
        }
        export namespace AmazonPay {
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.AmazonPay.SetupFutureUsage;
        }
        export namespace BacsDebit {
          export type MandateOptions = Stripe.Checkout.Session.PaymentMethodOptions.BacsDebit.MandateOptions;
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.BacsDebit.SetupFutureUsage;
        }
        export namespace Boleto {
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.Boleto.SetupFutureUsage;
        }
        export namespace Card {
          export type Installments = Stripe.Checkout.Session.PaymentMethodOptions.Card.Installments;
          export type RequestExtendedAuthorization = Stripe.Checkout.Session.PaymentMethodOptions.Card.RequestExtendedAuthorization;
          export type RequestIncrementalAuthorization = Stripe.Checkout.Session.PaymentMethodOptions.Card.RequestIncrementalAuthorization;
          export type RequestMulticapture = Stripe.Checkout.Session.PaymentMethodOptions.Card.RequestMulticapture;
          export type RequestOvercapture = Stripe.Checkout.Session.PaymentMethodOptions.Card.RequestOvercapture;
          export type RequestThreeDSecure = Stripe.Checkout.Session.PaymentMethodOptions.Card.RequestThreeDSecure;
          export type Restrictions = Stripe.Checkout.Session.PaymentMethodOptions.Card.Restrictions;
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.Card.SetupFutureUsage;
          export namespace Restrictions {
            export type BrandsBlocked = Stripe.Checkout.Session.PaymentMethodOptions.Card.Restrictions.BrandsBlocked;
          }
        }
        export namespace CustomerBalance {
          export type BankTransfer = Stripe.Checkout.Session.PaymentMethodOptions.CustomerBalance.BankTransfer;
          export namespace BankTransfer {
            export type EuBankTransfer = Stripe.Checkout.Session.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer;
            export type RequestedAddressType = Stripe.Checkout.Session.PaymentMethodOptions.CustomerBalance.BankTransfer.RequestedAddressType;
            export type Type = Stripe.Checkout.Session.PaymentMethodOptions.CustomerBalance.BankTransfer.Type;
            export namespace EuBankTransfer {
              export type Country = Stripe.Checkout.Session.PaymentMethodOptions.CustomerBalance.BankTransfer.EuBankTransfer.Country;
            }
          }
        }
        export namespace KakaoPay {
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.KakaoPay.SetupFutureUsage;
        }
        export namespace Klarna {
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.Klarna.SetupFutureUsage;
        }
        export namespace KrCard {
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.KrCard.SetupFutureUsage;
        }
        export namespace Link {
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.Link.SetupFutureUsage;
        }
        export namespace NaverPay {
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.NaverPay.SetupFutureUsage;
        }
        export namespace Paypal {
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.Paypal.SetupFutureUsage;
        }
        export namespace Payto {
          export type MandateOptions = Stripe.Checkout.Session.PaymentMethodOptions.Payto.MandateOptions;
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.Payto.SetupFutureUsage;
          export namespace MandateOptions {
            export type AmountType = Stripe.Checkout.Session.PaymentMethodOptions.Payto.MandateOptions.AmountType;
            export type PaymentSchedule = Stripe.Checkout.Session.PaymentMethodOptions.Payto.MandateOptions.PaymentSchedule;
            export type Purpose = Stripe.Checkout.Session.PaymentMethodOptions.Payto.MandateOptions.Purpose;
          }
        }
        export namespace Pix {
          export type AmountIncludesIof = Stripe.Checkout.Session.PaymentMethodOptions.Pix.AmountIncludesIof;
          export type MandateOptions = Stripe.Checkout.Session.PaymentMethodOptions.Pix.MandateOptions;
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.Pix.SetupFutureUsage;
          export namespace MandateOptions {
            export type AmountIncludesIof = Stripe.Checkout.Session.PaymentMethodOptions.Pix.MandateOptions.AmountIncludesIof;
            export type AmountType = Stripe.Checkout.Session.PaymentMethodOptions.Pix.MandateOptions.AmountType;
            export type PaymentSchedule = Stripe.Checkout.Session.PaymentMethodOptions.Pix.MandateOptions.PaymentSchedule;
          }
        }
        export namespace RevolutPay {
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.RevolutPay.SetupFutureUsage;
        }
        export namespace SepaDebit {
          export type MandateOptions = Stripe.Checkout.Session.PaymentMethodOptions.SepaDebit.MandateOptions;
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.SepaDebit.SetupFutureUsage;
        }
        export namespace Twint {
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.Twint.SetupFutureUsage;
        }
        export namespace Upi {
          export type MandateOptions = Stripe.Checkout.Session.PaymentMethodOptions.Upi.MandateOptions;
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.Upi.SetupFutureUsage;
          export namespace MandateOptions {
            export type AmountType = Stripe.Checkout.Session.PaymentMethodOptions.Upi.MandateOptions.AmountType;
          }
        }
        export namespace UsBankAccount {
          export type FinancialConnections = Stripe.Checkout.Session.PaymentMethodOptions.UsBankAccount.FinancialConnections;
          export type SetupFutureUsage = Stripe.Checkout.Session.PaymentMethodOptions.UsBankAccount.SetupFutureUsage;
          export type VerificationMethod = Stripe.Checkout.Session.PaymentMethodOptions.UsBankAccount.VerificationMethod;
          export namespace FinancialConnections {
            export type Filters = Stripe.Checkout.Session.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters;
            export type Permission = Stripe.Checkout.Session.PaymentMethodOptions.UsBankAccount.FinancialConnections.Permission;
            export type Prefetch = Stripe.Checkout.Session.PaymentMethodOptions.UsBankAccount.FinancialConnections.Prefetch;
            export namespace Filters {
              export type AccountSubcategory = Stripe.Checkout.Session.PaymentMethodOptions.UsBankAccount.FinancialConnections.Filters.AccountSubcategory;
            }
          }
        }
        export namespace WechatPay {
          export type Client = Stripe.Checkout.Session.PaymentMethodOptions.WechatPay.Client;
        }
      }
      export namespace Permissions {
        export type UpdateShippingDetails = Stripe.Checkout.Session.Permissions.UpdateShippingDetails;
      }
      export namespace SavedPaymentMethodOptions {
        export type AllowRedisplayFilter = Stripe.Checkout.Session.SavedPaymentMethodOptions.AllowRedisplayFilter;
        export type PaymentMethodRemove = Stripe.Checkout.Session.SavedPaymentMethodOptions.PaymentMethodRemove;
        export type PaymentMethodSave = Stripe.Checkout.Session.SavedPaymentMethodOptions.PaymentMethodSave;
      }
      export namespace ShippingAddressCollection {
        export type AllowedCountry = Stripe.Checkout.Session.ShippingAddressCollection.AllowedCountry;
      }
      export namespace ShippingCost {
        export type Tax = Stripe.Checkout.Session.ShippingCost.Tax;
        export namespace Tax {
          export type TaxabilityReason = Stripe.Checkout.Session.ShippingCost.Tax.TaxabilityReason;
        }
      }
      export namespace TaxIdCollection {
        export type Required = Stripe.Checkout.Session.TaxIdCollection.Required;
      }
      export namespace TotalDetails {
        export type Breakdown = Stripe.Checkout.Session.TotalDetails.Breakdown;
        export namespace Breakdown {
          export type Discount = Stripe.Checkout.Session.TotalDetails.Breakdown.Discount;
          export type Tax = Stripe.Checkout.Session.TotalDetails.Breakdown.Tax;
          export namespace Tax {
            export type TaxabilityReason = Stripe.Checkout.Session.TotalDetails.Breakdown.Tax.TaxabilityReason;
          }
        }
      }
      export namespace WalletOptions {
        export type Link = Stripe.Checkout.Session.WalletOptions.Link;
        export namespace Link {
          export type Display = Stripe.Checkout.Session.WalletOptions.Link.Display;
        }
      }
    }
  }
  export namespace Climate {
    export type Order = Stripe.Climate.Order;
    export type OrderCreateParams = Stripe.Climate.OrderCreateParams;
    export type OrderRetrieveParams = Stripe.Climate.OrderRetrieveParams;
    export type OrderUpdateParams = Stripe.Climate.OrderUpdateParams;
    export type OrderListParams = Stripe.Climate.OrderListParams;
    export type OrderCancelParams = Stripe.Climate.OrderCancelParams;
    export type OrderResource = Stripe.Climate.OrderResource;
    export type Product = Stripe.Climate.Product;
    export type ProductRetrieveParams = Stripe.Climate.ProductRetrieveParams;
    export type ProductListParams = Stripe.Climate.ProductListParams;
    export type ProductResource = Stripe.Climate.ProductResource;
    export type Supplier = Stripe.Climate.Supplier;
    export type SupplierRetrieveParams = Stripe.Climate.SupplierRetrieveParams;
    export type SupplierListParams = Stripe.Climate.SupplierListParams;
    export type SupplierResource = Stripe.Climate.SupplierResource;
    export namespace OrderCreateParams {
      export type Beneficiary = Stripe.Climate.OrderCreateParams.Beneficiary;
    }
    export namespace Order {
      export type Beneficiary = Stripe.Climate.Order.Beneficiary;
      export type CancellationReason = Stripe.Climate.Order.CancellationReason;
      export type DeliveryDetail = Stripe.Climate.Order.DeliveryDetail;
      export type Status = Stripe.Climate.Order.Status;
      export namespace DeliveryDetail {
        export type Location = Stripe.Climate.Order.DeliveryDetail.Location;
      }
    }
    export namespace Product {
      export type CurrentPricesPerMetricTon = Stripe.Climate.Product.CurrentPricesPerMetricTon;
    }
    export namespace Supplier {
      export type Location = Stripe.Climate.Supplier.Location;
      export type RemovalPathway = Stripe.Climate.Supplier.RemovalPathway;
    }
  }
  export namespace Entitlements {
    export type ActiveEntitlement = Stripe.Entitlements.ActiveEntitlement;
    export type ActiveEntitlementRetrieveParams = Stripe.Entitlements.ActiveEntitlementRetrieveParams;
    export type ActiveEntitlementListParams = Stripe.Entitlements.ActiveEntitlementListParams;
    export type ActiveEntitlementResource = Stripe.Entitlements.ActiveEntitlementResource;
    export type Feature = Stripe.Entitlements.Feature;
    export type FeatureCreateParams = Stripe.Entitlements.FeatureCreateParams;
    export type FeatureRetrieveParams = Stripe.Entitlements.FeatureRetrieveParams;
    export type FeatureUpdateParams = Stripe.Entitlements.FeatureUpdateParams;
    export type FeatureListParams = Stripe.Entitlements.FeatureListParams;
    export type FeatureResource = Stripe.Entitlements.FeatureResource;
    export type ActiveEntitlementSummary = Stripe.Entitlements.ActiveEntitlementSummary;
  }
  export namespace FinancialConnections {
    export type Account = Stripe.FinancialConnections.Account;
    export type AccountRetrieveParams = Stripe.FinancialConnections.AccountRetrieveParams;
    export type AccountListParams = Stripe.FinancialConnections.AccountListParams;
    export type AccountDisconnectParams = Stripe.FinancialConnections.AccountDisconnectParams;
    export type AccountListOwnersParams = Stripe.FinancialConnections.AccountListOwnersParams;
    export type AccountRefreshParams = Stripe.FinancialConnections.AccountRefreshParams;
    export type AccountSubscribeParams = Stripe.FinancialConnections.AccountSubscribeParams;
    export type AccountUnsubscribeParams = Stripe.FinancialConnections.AccountUnsubscribeParams;
    export type AccountResource = Stripe.FinancialConnections.AccountResource;
    export type Session = Stripe.FinancialConnections.Session;
    export type SessionCreateParams = Stripe.FinancialConnections.SessionCreateParams;
    export type SessionRetrieveParams = Stripe.FinancialConnections.SessionRetrieveParams;
    export type SessionResource = Stripe.FinancialConnections.SessionResource;
    export type Transaction = Stripe.FinancialConnections.Transaction;
    export type TransactionRetrieveParams = Stripe.FinancialConnections.TransactionRetrieveParams;
    export type TransactionListParams = Stripe.FinancialConnections.TransactionListParams;
    export type TransactionResource = Stripe.FinancialConnections.TransactionResource;
    export type AccountOwner = Stripe.FinancialConnections.AccountOwner;
    export type AccountOwnership = Stripe.FinancialConnections.AccountOwnership;
    export namespace Account {
      export type AccountHolder = Stripe.FinancialConnections.Account.AccountHolder;
      export type AccountNumber = Stripe.FinancialConnections.Account.AccountNumber;
      export type Balance = Stripe.FinancialConnections.Account.Balance;
      export type BalanceRefresh = Stripe.FinancialConnections.Account.BalanceRefresh;
      export type Category = Stripe.FinancialConnections.Account.Category;
      export type OwnershipRefresh = Stripe.FinancialConnections.Account.OwnershipRefresh;
      export type Permission = Stripe.FinancialConnections.Account.Permission;
      export type Status = Stripe.FinancialConnections.Account.Status;
      export type StatusDetails = Stripe.FinancialConnections.Account.StatusDetails;
      export type Subcategory = Stripe.FinancialConnections.Account.Subcategory;
      export type SupportedPaymentMethodType = Stripe.FinancialConnections.Account.SupportedPaymentMethodType;
      export type TransactionRefresh = Stripe.FinancialConnections.Account.TransactionRefresh;
      export namespace AccountHolder {
        export type Type = Stripe.FinancialConnections.Account.AccountHolder.Type;
      }
      export namespace AccountNumber {
        export type IdentifierType = Stripe.FinancialConnections.Account.AccountNumber.IdentifierType;
        export type Status = Stripe.FinancialConnections.Account.AccountNumber.Status;
      }
      export namespace Balance {
        export type Cash = Stripe.FinancialConnections.Account.Balance.Cash;
        export type Credit = Stripe.FinancialConnections.Account.Balance.Credit;
        export type Type = Stripe.FinancialConnections.Account.Balance.Type;
      }
      export namespace BalanceRefresh {
        export type Status = Stripe.FinancialConnections.Account.BalanceRefresh.Status;
      }
      export namespace OwnershipRefresh {
        export type Status = Stripe.FinancialConnections.Account.OwnershipRefresh.Status;
      }
      export namespace StatusDetails {
        export type Active = Stripe.FinancialConnections.Account.StatusDetails.Active;
        export namespace Active {
          export type Action = Stripe.FinancialConnections.Account.StatusDetails.Active.Action;
          export type Cause = Stripe.FinancialConnections.Account.StatusDetails.Active.Cause;
        }
      }
      export namespace TransactionRefresh {
        export type Status = Stripe.FinancialConnections.Account.TransactionRefresh.Status;
      }
    }
    export namespace SessionCreateParams {
      export type AccountHolder = Stripe.FinancialConnections.SessionCreateParams.AccountHolder;
      export type Permission = Stripe.FinancialConnections.SessionCreateParams.Permission;
      export type Filters = Stripe.FinancialConnections.SessionCreateParams.Filters;
      export type Prefetch = Stripe.FinancialConnections.SessionCreateParams.Prefetch;
      export namespace AccountHolder {
        export type Type = Stripe.FinancialConnections.SessionCreateParams.AccountHolder.Type;
      }
      export namespace Filters {
        export type AccountSubcategory = Stripe.FinancialConnections.SessionCreateParams.Filters.AccountSubcategory;
      }
    }
    export namespace Session {
      export type AccountHolder = Stripe.FinancialConnections.Session.AccountHolder;
      export type Filters = Stripe.FinancialConnections.Session.Filters;
      export type Permission = Stripe.FinancialConnections.Session.Permission;
      export type Prefetch = Stripe.FinancialConnections.Session.Prefetch;
      export namespace AccountHolder {
        export type Type = Stripe.FinancialConnections.Session.AccountHolder.Type;
      }
      export namespace Filters {
        export type AccountSubcategory = Stripe.FinancialConnections.Session.Filters.AccountSubcategory;
      }
    }
    export namespace Transaction {
      export type Status = Stripe.FinancialConnections.Transaction.Status;
      export type StatusTransitions = Stripe.FinancialConnections.Transaction.StatusTransitions;
    }
  }
  export namespace Forwarding {
    export type Request = Stripe.Forwarding.Request;
    export type RequestCreateParams = Stripe.Forwarding.RequestCreateParams;
    export type RequestRetrieveParams = Stripe.Forwarding.RequestRetrieveParams;
    export type RequestListParams = Stripe.Forwarding.RequestListParams;
    export type RequestResource = Stripe.Forwarding.RequestResource;
    export namespace RequestCreateParams {
      export type Replacement = Stripe.Forwarding.RequestCreateParams.Replacement;
      export type Request = Stripe.Forwarding.RequestCreateParams.Request;
      export namespace Request {
        export type Header = Stripe.Forwarding.RequestCreateParams.Request.Header;
      }
    }
    export namespace Request {
      export type Replacement = Stripe.Forwarding.Request.Replacement;
      export type RequestContext = Stripe.Forwarding.Request.RequestContext;
      export type RequestDetails = Stripe.Forwarding.Request.RequestDetails;
      export type ResponseDetails = Stripe.Forwarding.Request.ResponseDetails;
      export namespace RequestDetails {
        export type Header = Stripe.Forwarding.Request.RequestDetails.Header;
      }
      export namespace ResponseDetails {
        export type Header = Stripe.Forwarding.Request.ResponseDetails.Header;
      }
    }
  }
  export namespace Identity {
    export type VerificationReport = Stripe.Identity.VerificationReport;
    export type VerificationReportRetrieveParams = Stripe.Identity.VerificationReportRetrieveParams;
    export type VerificationReportListParams = Stripe.Identity.VerificationReportListParams;
    export type VerificationReportResource = Stripe.Identity.VerificationReportResource;
    export type VerificationSession = Stripe.Identity.VerificationSession;
    export type VerificationSessionCreateParams = Stripe.Identity.VerificationSessionCreateParams;
    export type VerificationSessionRetrieveParams = Stripe.Identity.VerificationSessionRetrieveParams;
    export type VerificationSessionUpdateParams = Stripe.Identity.VerificationSessionUpdateParams;
    export type VerificationSessionListParams = Stripe.Identity.VerificationSessionListParams;
    export type VerificationSessionCancelParams = Stripe.Identity.VerificationSessionCancelParams;
    export type VerificationSessionRedactParams = Stripe.Identity.VerificationSessionRedactParams;
    export type VerificationSessionResource = Stripe.Identity.VerificationSessionResource;
    export namespace VerificationReport {
      export type Document = Stripe.Identity.VerificationReport.Document;
      export type Email = Stripe.Identity.VerificationReport.Email;
      export type IdNumber = Stripe.Identity.VerificationReport.IdNumber;
      export type Options = Stripe.Identity.VerificationReport.Options;
      export type Phone = Stripe.Identity.VerificationReport.Phone;
      export type Selfie = Stripe.Identity.VerificationReport.Selfie;
      export type Type = Stripe.Identity.VerificationReport.Type;
      export namespace Document {
        export type Dob = Stripe.Identity.VerificationReport.Document.Dob;
        export type Error = Stripe.Identity.VerificationReport.Document.Error;
        export type ExpirationDate = Stripe.Identity.VerificationReport.Document.ExpirationDate;
        export type IssuedDate = Stripe.Identity.VerificationReport.Document.IssuedDate;
        export type Sex = Stripe.Identity.VerificationReport.Document.Sex;
        export type Status = Stripe.Identity.VerificationReport.Document.Status;
        export type Type = Stripe.Identity.VerificationReport.Document.Type;
        export namespace Error {
          export type Code = Stripe.Identity.VerificationReport.Document.Error.Code;
        }
      }
      export namespace Email {
        export type Error = Stripe.Identity.VerificationReport.Email.Error;
        export type Status = Stripe.Identity.VerificationReport.Email.Status;
        export namespace Error {
          export type Code = Stripe.Identity.VerificationReport.Email.Error.Code;
        }
      }
      export namespace IdNumber {
        export type Dob = Stripe.Identity.VerificationReport.IdNumber.Dob;
        export type Error = Stripe.Identity.VerificationReport.IdNumber.Error;
        export type IdNumberType = Stripe.Identity.VerificationReport.IdNumber.IdNumberType;
        export type Status = Stripe.Identity.VerificationReport.IdNumber.Status;
        export namespace Error {
          export type Code = Stripe.Identity.VerificationReport.IdNumber.Error.Code;
        }
      }
      export namespace Options {
        export type Document = Stripe.Identity.VerificationReport.Options.Document;
        export type IdNumber = Stripe.Identity.VerificationReport.Options.IdNumber;
        export namespace Document {
          export type AllowedType = Stripe.Identity.VerificationReport.Options.Document.AllowedType;
        }
      }
      export namespace Phone {
        export type Error = Stripe.Identity.VerificationReport.Phone.Error;
        export type Status = Stripe.Identity.VerificationReport.Phone.Status;
        export namespace Error {
          export type Code = Stripe.Identity.VerificationReport.Phone.Error.Code;
        }
      }
      export namespace Selfie {
        export type Error = Stripe.Identity.VerificationReport.Selfie.Error;
        export type Status = Stripe.Identity.VerificationReport.Selfie.Status;
        export namespace Error {
          export type Code = Stripe.Identity.VerificationReport.Selfie.Error.Code;
        }
      }
    }
    export namespace VerificationSessionCreateParams {
      export type Options = Stripe.Identity.VerificationSessionCreateParams.Options;
      export type ProvidedDetails = Stripe.Identity.VerificationSessionCreateParams.ProvidedDetails;
      export type RelatedPerson = Stripe.Identity.VerificationSessionCreateParams.RelatedPerson;
      export type Type = Stripe.Identity.VerificationSessionCreateParams.Type;
      export namespace Options {
        export type Document = Stripe.Identity.VerificationSessionCreateParams.Options.Document;
        export namespace Document {
          export type AllowedType = Stripe.Identity.VerificationSessionCreateParams.Options.Document.AllowedType;
        }
      }
    }
    export namespace VerificationSession {
      export type LastError = Stripe.Identity.VerificationSession.LastError;
      export type Options = Stripe.Identity.VerificationSession.Options;
      export type ProvidedDetails = Stripe.Identity.VerificationSession.ProvidedDetails;
      export type Redaction = Stripe.Identity.VerificationSession.Redaction;
      export type RelatedPerson = Stripe.Identity.VerificationSession.RelatedPerson;
      export type Status = Stripe.Identity.VerificationSession.Status;
      export type Type = Stripe.Identity.VerificationSession.Type;
      export type VerifiedOutputs = Stripe.Identity.VerificationSession.VerifiedOutputs;
      export namespace LastError {
        export type Code = Stripe.Identity.VerificationSession.LastError.Code;
      }
      export namespace Options {
        export type Document = Stripe.Identity.VerificationSession.Options.Document;
        export type Email = Stripe.Identity.VerificationSession.Options.Email;
        export type IdNumber = Stripe.Identity.VerificationSession.Options.IdNumber;
        export type Matching = Stripe.Identity.VerificationSession.Options.Matching;
        export type Phone = Stripe.Identity.VerificationSession.Options.Phone;
        export namespace Document {
          export type AllowedType = Stripe.Identity.VerificationSession.Options.Document.AllowedType;
        }
        export namespace Matching {
          export type Dob = Stripe.Identity.VerificationSession.Options.Matching.Dob;
          export type Name = Stripe.Identity.VerificationSession.Options.Matching.Name;
        }
      }
      export namespace Redaction {
        export type Status = Stripe.Identity.VerificationSession.Redaction.Status;
      }
      export namespace VerifiedOutputs {
        export type Dob = Stripe.Identity.VerificationSession.VerifiedOutputs.Dob;
        export type IdNumberType = Stripe.Identity.VerificationSession.VerifiedOutputs.IdNumberType;
        export type Sex = Stripe.Identity.VerificationSession.VerifiedOutputs.Sex;
      }
    }
  }
  export namespace Issuing {
    export type Authorization = Stripe.Issuing.Authorization;
    export type AuthorizationRetrieveParams = Stripe.Issuing.AuthorizationRetrieveParams;
    export type AuthorizationUpdateParams = Stripe.Issuing.AuthorizationUpdateParams;
    export type AuthorizationListParams = Stripe.Issuing.AuthorizationListParams;
    export type AuthorizationApproveParams = Stripe.Issuing.AuthorizationApproveParams;
    export type AuthorizationDeclineParams = Stripe.Issuing.AuthorizationDeclineParams;
    export type AuthorizationResource = Stripe.Issuing.AuthorizationResource;
    export type Card = Stripe.Issuing.Card;
    export type CardCreateParams = Stripe.Issuing.CardCreateParams;
    export type CardRetrieveParams = Stripe.Issuing.CardRetrieveParams;
    export type CardUpdateParams = Stripe.Issuing.CardUpdateParams;
    export type CardListParams = Stripe.Issuing.CardListParams;
    export type CardResource = Stripe.Issuing.CardResource;
    export type Cardholder = Stripe.Issuing.Cardholder;
    export type CardholderCreateParams = Stripe.Issuing.CardholderCreateParams;
    export type CardholderRetrieveParams = Stripe.Issuing.CardholderRetrieveParams;
    export type CardholderUpdateParams = Stripe.Issuing.CardholderUpdateParams;
    export type CardholderListParams = Stripe.Issuing.CardholderListParams;
    export type CardholderResource = Stripe.Issuing.CardholderResource;
    export type Dispute = Stripe.Issuing.Dispute;
    export type DisputeCreateParams = Stripe.Issuing.DisputeCreateParams;
    export type DisputeRetrieveParams = Stripe.Issuing.DisputeRetrieveParams;
    export type DisputeUpdateParams = Stripe.Issuing.DisputeUpdateParams;
    export type DisputeListParams = Stripe.Issuing.DisputeListParams;
    export type DisputeSubmitParams = Stripe.Issuing.DisputeSubmitParams;
    export type DisputeResource = Stripe.Issuing.DisputeResource;
    export type PersonalizationDesign = Stripe.Issuing.PersonalizationDesign;
    export type PersonalizationDesignCreateParams = Stripe.Issuing.PersonalizationDesignCreateParams;
    export type PersonalizationDesignRetrieveParams = Stripe.Issuing.PersonalizationDesignRetrieveParams;
    export type PersonalizationDesignUpdateParams = Stripe.Issuing.PersonalizationDesignUpdateParams;
    export type PersonalizationDesignListParams = Stripe.Issuing.PersonalizationDesignListParams;
    export type PersonalizationDesignResource = Stripe.Issuing.PersonalizationDesignResource;
    export type PhysicalBundle = Stripe.Issuing.PhysicalBundle;
    export type PhysicalBundleRetrieveParams = Stripe.Issuing.PhysicalBundleRetrieveParams;
    export type PhysicalBundleListParams = Stripe.Issuing.PhysicalBundleListParams;
    export type PhysicalBundleResource = Stripe.Issuing.PhysicalBundleResource;
    export type Token = Stripe.Issuing.Token;
    export type TokenRetrieveParams = Stripe.Issuing.TokenRetrieveParams;
    export type TokenUpdateParams = Stripe.Issuing.TokenUpdateParams;
    export type TokenListParams = Stripe.Issuing.TokenListParams;
    export type TokenResource = Stripe.Issuing.TokenResource;
    export type Transaction = Stripe.Issuing.Transaction;
    export type TransactionRetrieveParams = Stripe.Issuing.TransactionRetrieveParams;
    export type TransactionUpdateParams = Stripe.Issuing.TransactionUpdateParams;
    export type TransactionListParams = Stripe.Issuing.TransactionListParams;
    export type TransactionResource = Stripe.Issuing.TransactionResource;
    export namespace Authorization {
      export type AmountDetails = Stripe.Issuing.Authorization.AmountDetails;
      export type AuthorizationMethod = Stripe.Issuing.Authorization.AuthorizationMethod;
      export type CardPresence = Stripe.Issuing.Authorization.CardPresence;
      export type Fleet = Stripe.Issuing.Authorization.Fleet;
      export type FraudChallenge = Stripe.Issuing.Authorization.FraudChallenge;
      export type Fuel = Stripe.Issuing.Authorization.Fuel;
      export type MerchantData = Stripe.Issuing.Authorization.MerchantData;
      export type NetworkData = Stripe.Issuing.Authorization.NetworkData;
      export type PendingRequest = Stripe.Issuing.Authorization.PendingRequest;
      export type RequestHistory = Stripe.Issuing.Authorization.RequestHistory;
      export type Status = Stripe.Issuing.Authorization.Status;
      export type Treasury = Stripe.Issuing.Authorization.Treasury;
      export type VerificationData = Stripe.Issuing.Authorization.VerificationData;
      export namespace Fleet {
        export type CardholderPromptData = Stripe.Issuing.Authorization.Fleet.CardholderPromptData;
        export type PurchaseType = Stripe.Issuing.Authorization.Fleet.PurchaseType;
        export type ReportedBreakdown = Stripe.Issuing.Authorization.Fleet.ReportedBreakdown;
        export type ServiceType = Stripe.Issuing.Authorization.Fleet.ServiceType;
        export namespace ReportedBreakdown {
          export type Fuel = Stripe.Issuing.Authorization.Fleet.ReportedBreakdown.Fuel;
          export type NonFuel = Stripe.Issuing.Authorization.Fleet.ReportedBreakdown.NonFuel;
          export type Tax = Stripe.Issuing.Authorization.Fleet.ReportedBreakdown.Tax;
        }
      }
      export namespace FraudChallenge {
        export type Status = Stripe.Issuing.Authorization.FraudChallenge.Status;
        export type UndeliverableReason = Stripe.Issuing.Authorization.FraudChallenge.UndeliverableReason;
      }
      export namespace Fuel {
        export type Type = Stripe.Issuing.Authorization.Fuel.Type;
        export type Unit = Stripe.Issuing.Authorization.Fuel.Unit;
      }
      export namespace PendingRequest {
        export type AmountDetails = Stripe.Issuing.Authorization.PendingRequest.AmountDetails;
      }
      export namespace RequestHistory {
        export type AmountDetails = Stripe.Issuing.Authorization.RequestHistory.AmountDetails;
        export type Reason = Stripe.Issuing.Authorization.RequestHistory.Reason;
      }
      export namespace VerificationData {
        export type AddressLine1Check = Stripe.Issuing.Authorization.VerificationData.AddressLine1Check;
        export type AddressPostalCodeCheck = Stripe.Issuing.Authorization.VerificationData.AddressPostalCodeCheck;
        export type AuthenticationExemption = Stripe.Issuing.Authorization.VerificationData.AuthenticationExemption;
        export type CvcCheck = Stripe.Issuing.Authorization.VerificationData.CvcCheck;
        export type ExpiryCheck = Stripe.Issuing.Authorization.VerificationData.ExpiryCheck;
        export type ThreeDSecure = Stripe.Issuing.Authorization.VerificationData.ThreeDSecure;
        export namespace AuthenticationExemption {
          export type ClaimedBy = Stripe.Issuing.Authorization.VerificationData.AuthenticationExemption.ClaimedBy;
          export type Type = Stripe.Issuing.Authorization.VerificationData.AuthenticationExemption.Type;
        }
        export namespace ThreeDSecure {
          export type Result = Stripe.Issuing.Authorization.VerificationData.ThreeDSecure.Result;
        }
      }
    }
    export namespace CardCreateParams {
      export type Type = Stripe.Issuing.CardCreateParams.Type;
      export type LifecycleControls = Stripe.Issuing.CardCreateParams.LifecycleControls;
      export type Pin = Stripe.Issuing.CardCreateParams.Pin;
      export type ReplacementReason = Stripe.Issuing.CardCreateParams.ReplacementReason;
      export type Shipping = Stripe.Issuing.CardCreateParams.Shipping;
      export type SpendingControls = Stripe.Issuing.CardCreateParams.SpendingControls;
      export type Status = Stripe.Issuing.CardCreateParams.Status;
      export namespace LifecycleControls {
        export type CancelAfter = Stripe.Issuing.CardCreateParams.LifecycleControls.CancelAfter;
      }
      export namespace Shipping {
        export type Address = Stripe.Issuing.CardCreateParams.Shipping.Address;
        export type AddressValidation = Stripe.Issuing.CardCreateParams.Shipping.AddressValidation;
        export type Customs = Stripe.Issuing.CardCreateParams.Shipping.Customs;
        export type Service = Stripe.Issuing.CardCreateParams.Shipping.Service;
        export type Type = Stripe.Issuing.CardCreateParams.Shipping.Type;
        export namespace AddressValidation {
          export type Mode = Stripe.Issuing.CardCreateParams.Shipping.AddressValidation.Mode;
        }
      }
      export namespace SpendingControls {
        export type AllowedCardPresence = Stripe.Issuing.CardCreateParams.SpendingControls.AllowedCardPresence;
        export type AllowedCategory = Stripe.Issuing.CardCreateParams.SpendingControls.AllowedCategory;
        export type BlockedCardPresence = Stripe.Issuing.CardCreateParams.SpendingControls.BlockedCardPresence;
        export type BlockedCategory = Stripe.Issuing.CardCreateParams.SpendingControls.BlockedCategory;
        export type SpendingLimit = Stripe.Issuing.CardCreateParams.SpendingControls.SpendingLimit;
        export namespace SpendingLimit {
          export type Category = Stripe.Issuing.CardCreateParams.SpendingControls.SpendingLimit.Category;
          export type Interval = Stripe.Issuing.CardCreateParams.SpendingControls.SpendingLimit.Interval;
        }
      }
    }
    export namespace Card {
      export type CancellationReason = Stripe.Issuing.Card.CancellationReason;
      export type LatestFraudWarning = Stripe.Issuing.Card.LatestFraudWarning;
      export type LifecycleControls = Stripe.Issuing.Card.LifecycleControls;
      export type ReplacementReason = Stripe.Issuing.Card.ReplacementReason;
      export type Shipping = Stripe.Issuing.Card.Shipping;
      export type SpendingControls = Stripe.Issuing.Card.SpendingControls;
      export type Status = Stripe.Issuing.Card.Status;
      export type Type = Stripe.Issuing.Card.Type;
      export type Wallets = Stripe.Issuing.Card.Wallets;
      export namespace LatestFraudWarning {
        export type Type = Stripe.Issuing.Card.LatestFraudWarning.Type;
      }
      export namespace LifecycleControls {
        export type CancelAfter = Stripe.Issuing.Card.LifecycleControls.CancelAfter;
      }
      export namespace Shipping {
        export type AddressValidation = Stripe.Issuing.Card.Shipping.AddressValidation;
        export type Carrier = Stripe.Issuing.Card.Shipping.Carrier;
        export type Customs = Stripe.Issuing.Card.Shipping.Customs;
        export type Service = Stripe.Issuing.Card.Shipping.Service;
        export type Status = Stripe.Issuing.Card.Shipping.Status;
        export type Type = Stripe.Issuing.Card.Shipping.Type;
        export namespace AddressValidation {
          export type Mode = Stripe.Issuing.Card.Shipping.AddressValidation.Mode;
          export type Result = Stripe.Issuing.Card.Shipping.AddressValidation.Result;
        }
      }
      export namespace SpendingControls {
        export type AllowedCardPresence = Stripe.Issuing.Card.SpendingControls.AllowedCardPresence;
        export type AllowedCategory = Stripe.Issuing.Card.SpendingControls.AllowedCategory;
        export type BlockedCardPresence = Stripe.Issuing.Card.SpendingControls.BlockedCardPresence;
        export type BlockedCategory = Stripe.Issuing.Card.SpendingControls.BlockedCategory;
        export type SpendingLimit = Stripe.Issuing.Card.SpendingControls.SpendingLimit;
        export namespace SpendingLimit {
          export type Category = Stripe.Issuing.Card.SpendingControls.SpendingLimit.Category;
          export type Interval = Stripe.Issuing.Card.SpendingControls.SpendingLimit.Interval;
        }
      }
      export namespace Wallets {
        export type ApplePay = Stripe.Issuing.Card.Wallets.ApplePay;
        export type GooglePay = Stripe.Issuing.Card.Wallets.GooglePay;
        export namespace ApplePay {
          export type IneligibleReason = Stripe.Issuing.Card.Wallets.ApplePay.IneligibleReason;
        }
        export namespace GooglePay {
          export type IneligibleReason = Stripe.Issuing.Card.Wallets.GooglePay.IneligibleReason;
        }
      }
    }
    export namespace CardholderCreateParams {
      export type Billing = Stripe.Issuing.CardholderCreateParams.Billing;
      export type Company = Stripe.Issuing.CardholderCreateParams.Company;
      export type Individual = Stripe.Issuing.CardholderCreateParams.Individual;
      export type PreferredLocale = Stripe.Issuing.CardholderCreateParams.PreferredLocale;
      export type SpendingControls = Stripe.Issuing.CardholderCreateParams.SpendingControls;
      export type Status = Stripe.Issuing.CardholderCreateParams.Status;
      export type Type = Stripe.Issuing.CardholderCreateParams.Type;
      export namespace Billing {
        export type Address = Stripe.Issuing.CardholderCreateParams.Billing.Address;
      }
      export namespace Individual {
        export type CardIssuing = Stripe.Issuing.CardholderCreateParams.Individual.CardIssuing;
        export type Dob = Stripe.Issuing.CardholderCreateParams.Individual.Dob;
        export type Verification = Stripe.Issuing.CardholderCreateParams.Individual.Verification;
        export namespace CardIssuing {
          export type UserTermsAcceptance = Stripe.Issuing.CardholderCreateParams.Individual.CardIssuing.UserTermsAcceptance;
        }
        export namespace Verification {
          export type Document = Stripe.Issuing.CardholderCreateParams.Individual.Verification.Document;
        }
      }
      export namespace SpendingControls {
        export type AllowedCardPresence = Stripe.Issuing.CardholderCreateParams.SpendingControls.AllowedCardPresence;
        export type AllowedCategory = Stripe.Issuing.CardholderCreateParams.SpendingControls.AllowedCategory;
        export type BlockedCardPresence = Stripe.Issuing.CardholderCreateParams.SpendingControls.BlockedCardPresence;
        export type BlockedCategory = Stripe.Issuing.CardholderCreateParams.SpendingControls.BlockedCategory;
        export type SpendingLimit = Stripe.Issuing.CardholderCreateParams.SpendingControls.SpendingLimit;
        export namespace SpendingLimit {
          export type Category = Stripe.Issuing.CardholderCreateParams.SpendingControls.SpendingLimit.Category;
          export type Interval = Stripe.Issuing.CardholderCreateParams.SpendingControls.SpendingLimit.Interval;
        }
      }
    }
    export namespace Cardholder {
      export type Billing = Stripe.Issuing.Cardholder.Billing;
      export type Company = Stripe.Issuing.Cardholder.Company;
      export type Individual = Stripe.Issuing.Cardholder.Individual;
      export type PreferredLocale = Stripe.Issuing.Cardholder.PreferredLocale;
      export type Requirements = Stripe.Issuing.Cardholder.Requirements;
      export type SpendingControls = Stripe.Issuing.Cardholder.SpendingControls;
      export type Status = Stripe.Issuing.Cardholder.Status;
      export type Type = Stripe.Issuing.Cardholder.Type;
      export namespace Individual {
        export type CardIssuing = Stripe.Issuing.Cardholder.Individual.CardIssuing;
        export type Dob = Stripe.Issuing.Cardholder.Individual.Dob;
        export type Verification = Stripe.Issuing.Cardholder.Individual.Verification;
        export namespace CardIssuing {
          export type UserTermsAcceptance = Stripe.Issuing.Cardholder.Individual.CardIssuing.UserTermsAcceptance;
        }
        export namespace Verification {
          export type Document = Stripe.Issuing.Cardholder.Individual.Verification.Document;
        }
      }
      export namespace Requirements {
        export type DisabledReason = Stripe.Issuing.Cardholder.Requirements.DisabledReason;
        export type PastDue = Stripe.Issuing.Cardholder.Requirements.PastDue;
      }
      export namespace SpendingControls {
        export type AllowedCardPresence = Stripe.Issuing.Cardholder.SpendingControls.AllowedCardPresence;
        export type AllowedCategory = Stripe.Issuing.Cardholder.SpendingControls.AllowedCategory;
        export type BlockedCardPresence = Stripe.Issuing.Cardholder.SpendingControls.BlockedCardPresence;
        export type BlockedCategory = Stripe.Issuing.Cardholder.SpendingControls.BlockedCategory;
        export type SpendingLimit = Stripe.Issuing.Cardholder.SpendingControls.SpendingLimit;
        export namespace SpendingLimit {
          export type Category = Stripe.Issuing.Cardholder.SpendingControls.SpendingLimit.Category;
          export type Interval = Stripe.Issuing.Cardholder.SpendingControls.SpendingLimit.Interval;
        }
      }
    }
    export namespace DisputeCreateParams {
      export type Evidence = Stripe.Issuing.DisputeCreateParams.Evidence;
      export type Treasury = Stripe.Issuing.DisputeCreateParams.Treasury;
      export namespace Evidence {
        export type Canceled = Stripe.Issuing.DisputeCreateParams.Evidence.Canceled;
        export type Duplicate = Stripe.Issuing.DisputeCreateParams.Evidence.Duplicate;
        export type Fraudulent = Stripe.Issuing.DisputeCreateParams.Evidence.Fraudulent;
        export type MerchandiseNotAsDescribed = Stripe.Issuing.DisputeCreateParams.Evidence.MerchandiseNotAsDescribed;
        export type NoValidAuthorization = Stripe.Issuing.DisputeCreateParams.Evidence.NoValidAuthorization;
        export type NotReceived = Stripe.Issuing.DisputeCreateParams.Evidence.NotReceived;
        export type Other = Stripe.Issuing.DisputeCreateParams.Evidence.Other;
        export type Reason = Stripe.Issuing.DisputeCreateParams.Evidence.Reason;
        export type ServiceNotAsDescribed = Stripe.Issuing.DisputeCreateParams.Evidence.ServiceNotAsDescribed;
        export namespace Canceled {
          export type ProductType = Stripe.Issuing.DisputeCreateParams.Evidence.Canceled.ProductType;
          export type ReturnStatus = Stripe.Issuing.DisputeCreateParams.Evidence.Canceled.ReturnStatus;
        }
        export namespace MerchandiseNotAsDescribed {
          export type ReturnStatus = Stripe.Issuing.DisputeCreateParams.Evidence.MerchandiseNotAsDescribed.ReturnStatus;
        }
        export namespace NotReceived {
          export type ProductType = Stripe.Issuing.DisputeCreateParams.Evidence.NotReceived.ProductType;
        }
        export namespace Other {
          export type ProductType = Stripe.Issuing.DisputeCreateParams.Evidence.Other.ProductType;
        }
      }
    }
    export namespace Dispute {
      export type Evidence = Stripe.Issuing.Dispute.Evidence;
      export type LossReason = Stripe.Issuing.Dispute.LossReason;
      export type Status = Stripe.Issuing.Dispute.Status;
      export type Treasury = Stripe.Issuing.Dispute.Treasury;
      export namespace Evidence {
        export type Canceled = Stripe.Issuing.Dispute.Evidence.Canceled;
        export type Duplicate = Stripe.Issuing.Dispute.Evidence.Duplicate;
        export type Fraudulent = Stripe.Issuing.Dispute.Evidence.Fraudulent;
        export type MerchandiseNotAsDescribed = Stripe.Issuing.Dispute.Evidence.MerchandiseNotAsDescribed;
        export type NoValidAuthorization = Stripe.Issuing.Dispute.Evidence.NoValidAuthorization;
        export type NotReceived = Stripe.Issuing.Dispute.Evidence.NotReceived;
        export type Other = Stripe.Issuing.Dispute.Evidence.Other;
        export type Reason = Stripe.Issuing.Dispute.Evidence.Reason;
        export type ServiceNotAsDescribed = Stripe.Issuing.Dispute.Evidence.ServiceNotAsDescribed;
        export namespace Canceled {
          export type ProductType = Stripe.Issuing.Dispute.Evidence.Canceled.ProductType;
          export type ReturnStatus = Stripe.Issuing.Dispute.Evidence.Canceled.ReturnStatus;
        }
        export namespace MerchandiseNotAsDescribed {
          export type ReturnStatus = Stripe.Issuing.Dispute.Evidence.MerchandiseNotAsDescribed.ReturnStatus;
        }
        export namespace NotReceived {
          export type ProductType = Stripe.Issuing.Dispute.Evidence.NotReceived.ProductType;
        }
        export namespace Other {
          export type ProductType = Stripe.Issuing.Dispute.Evidence.Other.ProductType;
        }
      }
    }
    export namespace PersonalizationDesignCreateParams {
      export type CarrierText = Stripe.Issuing.PersonalizationDesignCreateParams.CarrierText;
      export type Preferences = Stripe.Issuing.PersonalizationDesignCreateParams.Preferences;
    }
    export namespace PersonalizationDesign {
      export type CarrierText = Stripe.Issuing.PersonalizationDesign.CarrierText;
      export type Preferences = Stripe.Issuing.PersonalizationDesign.Preferences;
      export type RejectionReasons = Stripe.Issuing.PersonalizationDesign.RejectionReasons;
      export type Status = Stripe.Issuing.PersonalizationDesign.Status;
      export namespace RejectionReasons {
        export type CardLogo = Stripe.Issuing.PersonalizationDesign.RejectionReasons.CardLogo;
        export type CarrierText = Stripe.Issuing.PersonalizationDesign.RejectionReasons.CarrierText;
      }
    }
    export namespace PhysicalBundle {
      export type Features = Stripe.Issuing.PhysicalBundle.Features;
      export type Status = Stripe.Issuing.PhysicalBundle.Status;
      export type Type = Stripe.Issuing.PhysicalBundle.Type;
      export namespace Features {
        export type CardLogo = Stripe.Issuing.PhysicalBundle.Features.CardLogo;
        export type CarrierText = Stripe.Issuing.PhysicalBundle.Features.CarrierText;
        export type SecondLine = Stripe.Issuing.PhysicalBundle.Features.SecondLine;
      }
    }
    export namespace Token {
      export type Network = Stripe.Issuing.Token.Network;
      export type NetworkData = Stripe.Issuing.Token.NetworkData;
      export type Status = Stripe.Issuing.Token.Status;
      export type WalletProvider = Stripe.Issuing.Token.WalletProvider;
      export namespace NetworkData {
        export type Device = Stripe.Issuing.Token.NetworkData.Device;
        export type Mastercard = Stripe.Issuing.Token.NetworkData.Mastercard;
        export type Type = Stripe.Issuing.Token.NetworkData.Type;
        export type Visa = Stripe.Issuing.Token.NetworkData.Visa;
        export type WalletProvider = Stripe.Issuing.Token.NetworkData.WalletProvider;
        export namespace Device {
          export type Type = Stripe.Issuing.Token.NetworkData.Device.Type;
        }
        export namespace WalletProvider {
          export type CardNumberSource = Stripe.Issuing.Token.NetworkData.WalletProvider.CardNumberSource;
          export type CardholderAddress = Stripe.Issuing.Token.NetworkData.WalletProvider.CardholderAddress;
          export type ReasonCode = Stripe.Issuing.Token.NetworkData.WalletProvider.ReasonCode;
          export type SuggestedDecision = Stripe.Issuing.Token.NetworkData.WalletProvider.SuggestedDecision;
        }
      }
    }
    export namespace Transaction {
      export type AmountDetails = Stripe.Issuing.Transaction.AmountDetails;
      export type MerchantData = Stripe.Issuing.Transaction.MerchantData;
      export type NetworkData = Stripe.Issuing.Transaction.NetworkData;
      export type PurchaseDetails = Stripe.Issuing.Transaction.PurchaseDetails;
      export type Treasury = Stripe.Issuing.Transaction.Treasury;
      export type Type = Stripe.Issuing.Transaction.Type;
      export type Wallet = Stripe.Issuing.Transaction.Wallet;
      export namespace PurchaseDetails {
        export type Fleet = Stripe.Issuing.Transaction.PurchaseDetails.Fleet;
        export type Flight = Stripe.Issuing.Transaction.PurchaseDetails.Flight;
        export type Fuel = Stripe.Issuing.Transaction.PurchaseDetails.Fuel;
        export type Lodging = Stripe.Issuing.Transaction.PurchaseDetails.Lodging;
        export type Receipt = Stripe.Issuing.Transaction.PurchaseDetails.Receipt;
        export namespace Fleet {
          export type CardholderPromptData = Stripe.Issuing.Transaction.PurchaseDetails.Fleet.CardholderPromptData;
          export type ReportedBreakdown = Stripe.Issuing.Transaction.PurchaseDetails.Fleet.ReportedBreakdown;
          export namespace ReportedBreakdown {
            export type Fuel = Stripe.Issuing.Transaction.PurchaseDetails.Fleet.ReportedBreakdown.Fuel;
            export type NonFuel = Stripe.Issuing.Transaction.PurchaseDetails.Fleet.ReportedBreakdown.NonFuel;
            export type Tax = Stripe.Issuing.Transaction.PurchaseDetails.Fleet.ReportedBreakdown.Tax;
          }
        }
        export namespace Flight {
          export type Segment = Stripe.Issuing.Transaction.PurchaseDetails.Flight.Segment;
        }
      }
    }
  }
  export namespace Radar {
    export type EarlyFraudWarning = Stripe.Radar.EarlyFraudWarning;
    export type EarlyFraudWarningRetrieveParams = Stripe.Radar.EarlyFraudWarningRetrieveParams;
    export type EarlyFraudWarningListParams = Stripe.Radar.EarlyFraudWarningListParams;
    export type EarlyFraudWarningResource = Stripe.Radar.EarlyFraudWarningResource;
    export type PaymentEvaluation = Stripe.Radar.PaymentEvaluation;
    export type PaymentEvaluationCreateParams = Stripe.Radar.PaymentEvaluationCreateParams;
    export type PaymentEvaluationResource = Stripe.Radar.PaymentEvaluationResource;
    export type ValueList = Stripe.Radar.ValueList;
    export type DeletedValueList = Stripe.Radar.DeletedValueList;
    export type ValueListCreateParams = Stripe.Radar.ValueListCreateParams;
    export type ValueListRetrieveParams = Stripe.Radar.ValueListRetrieveParams;
    export type ValueListUpdateParams = Stripe.Radar.ValueListUpdateParams;
    export type ValueListListParams = Stripe.Radar.ValueListListParams;
    export type ValueListDeleteParams = Stripe.Radar.ValueListDeleteParams;
    export type ValueListResource = Stripe.Radar.ValueListResource;
    export type ValueListItem = Stripe.Radar.ValueListItem;
    export type DeletedValueListItem = Stripe.Radar.DeletedValueListItem;
    export type ValueListItemCreateParams = Stripe.Radar.ValueListItemCreateParams;
    export type ValueListItemRetrieveParams = Stripe.Radar.ValueListItemRetrieveParams;
    export type ValueListItemListParams = Stripe.Radar.ValueListItemListParams;
    export type ValueListItemDeleteParams = Stripe.Radar.ValueListItemDeleteParams;
    export type ValueListItemResource = Stripe.Radar.ValueListItemResource;
    export namespace PaymentEvaluationCreateParams {
      export type CustomerDetails = Stripe.Radar.PaymentEvaluationCreateParams.CustomerDetails;
      export type PaymentDetails = Stripe.Radar.PaymentEvaluationCreateParams.PaymentDetails;
      export type ClientDeviceMetadataDetails = Stripe.Radar.PaymentEvaluationCreateParams.ClientDeviceMetadataDetails;
      export namespace PaymentDetails {
        export type MoneyMovementDetails = Stripe.Radar.PaymentEvaluationCreateParams.PaymentDetails.MoneyMovementDetails;
        export type PaymentMethodDetails = Stripe.Radar.PaymentEvaluationCreateParams.PaymentDetails.PaymentMethodDetails;
        export type ShippingDetails = Stripe.Radar.PaymentEvaluationCreateParams.PaymentDetails.ShippingDetails;
        export namespace MoneyMovementDetails {
          export type Card = Stripe.Radar.PaymentEvaluationCreateParams.PaymentDetails.MoneyMovementDetails.Card;
          export namespace Card {
            export type CustomerPresence = Stripe.Radar.PaymentEvaluationCreateParams.PaymentDetails.MoneyMovementDetails.Card.CustomerPresence;
            export type PaymentType = Stripe.Radar.PaymentEvaluationCreateParams.PaymentDetails.MoneyMovementDetails.Card.PaymentType;
          }
        }
        export namespace PaymentMethodDetails {
          export type BillingDetails = Stripe.Radar.PaymentEvaluationCreateParams.PaymentDetails.PaymentMethodDetails.BillingDetails;
        }
      }
    }
    export namespace PaymentEvaluation {
      export type ClientDeviceMetadataDetails = Stripe.Radar.PaymentEvaluation.ClientDeviceMetadataDetails;
      export type CustomerDetails = Stripe.Radar.PaymentEvaluation.CustomerDetails;
      export type Event = Stripe.Radar.PaymentEvaluation.Event;
      export type Outcome = Stripe.Radar.PaymentEvaluation.Outcome;
      export type PaymentDetails = Stripe.Radar.PaymentEvaluation.PaymentDetails;
      export type RecommendedAction = Stripe.Radar.PaymentEvaluation.RecommendedAction;
      export type Signals = Stripe.Radar.PaymentEvaluation.Signals;
      export namespace Event {
        export type DisputeOpened = Stripe.Radar.PaymentEvaluation.Event.DisputeOpened;
        export type EarlyFraudWarningReceived = Stripe.Radar.PaymentEvaluation.Event.EarlyFraudWarningReceived;
        export type Refunded = Stripe.Radar.PaymentEvaluation.Event.Refunded;
        export type Type = Stripe.Radar.PaymentEvaluation.Event.Type;
        export type UserInterventionRaised = Stripe.Radar.PaymentEvaluation.Event.UserInterventionRaised;
        export type UserInterventionResolved = Stripe.Radar.PaymentEvaluation.Event.UserInterventionResolved;
        export namespace DisputeOpened {
          export type Reason = Stripe.Radar.PaymentEvaluation.Event.DisputeOpened.Reason;
        }
        export namespace EarlyFraudWarningReceived {
          export type FraudType = Stripe.Radar.PaymentEvaluation.Event.EarlyFraudWarningReceived.FraudType;
        }
        export namespace Refunded {
          export type Reason = Stripe.Radar.PaymentEvaluation.Event.Refunded.Reason;
        }
        export namespace UserInterventionRaised {
          export type Custom = Stripe.Radar.PaymentEvaluation.Event.UserInterventionRaised.Custom;
          export type Type = Stripe.Radar.PaymentEvaluation.Event.UserInterventionRaised.Type;
        }
        export namespace UserInterventionResolved {
          export type Outcome = Stripe.Radar.PaymentEvaluation.Event.UserInterventionResolved.Outcome;
        }
      }
      export namespace Outcome {
        export type MerchantBlocked = Stripe.Radar.PaymentEvaluation.Outcome.MerchantBlocked;
        export type Rejected = Stripe.Radar.PaymentEvaluation.Outcome.Rejected;
        export type Succeeded = Stripe.Radar.PaymentEvaluation.Outcome.Succeeded;
        export type Type = Stripe.Radar.PaymentEvaluation.Outcome.Type;
        export namespace MerchantBlocked {
          export type Reason = Stripe.Radar.PaymentEvaluation.Outcome.MerchantBlocked.Reason;
        }
        export namespace Rejected {
          export type Card = Stripe.Radar.PaymentEvaluation.Outcome.Rejected.Card;
          export namespace Card {
            export type AddressLine1Check = Stripe.Radar.PaymentEvaluation.Outcome.Rejected.Card.AddressLine1Check;
            export type AddressPostalCodeCheck = Stripe.Radar.PaymentEvaluation.Outcome.Rejected.Card.AddressPostalCodeCheck;
            export type CvcCheck = Stripe.Radar.PaymentEvaluation.Outcome.Rejected.Card.CvcCheck;
            export type Reason = Stripe.Radar.PaymentEvaluation.Outcome.Rejected.Card.Reason;
          }
        }
        export namespace Succeeded {
          export type Card = Stripe.Radar.PaymentEvaluation.Outcome.Succeeded.Card;
          export namespace Card {
            export type AddressLine1Check = Stripe.Radar.PaymentEvaluation.Outcome.Succeeded.Card.AddressLine1Check;
            export type AddressPostalCodeCheck = Stripe.Radar.PaymentEvaluation.Outcome.Succeeded.Card.AddressPostalCodeCheck;
            export type CvcCheck = Stripe.Radar.PaymentEvaluation.Outcome.Succeeded.Card.CvcCheck;
          }
        }
      }
      export namespace PaymentDetails {
        export type MoneyMovementDetails = Stripe.Radar.PaymentEvaluation.PaymentDetails.MoneyMovementDetails;
        export type PaymentMethodDetails = Stripe.Radar.PaymentEvaluation.PaymentDetails.PaymentMethodDetails;
        export type ShippingDetails = Stripe.Radar.PaymentEvaluation.PaymentDetails.ShippingDetails;
        export namespace MoneyMovementDetails {
          export type Card = Stripe.Radar.PaymentEvaluation.PaymentDetails.MoneyMovementDetails.Card;
          export namespace Card {
            export type CustomerPresence = Stripe.Radar.PaymentEvaluation.PaymentDetails.MoneyMovementDetails.Card.CustomerPresence;
            export type PaymentType = Stripe.Radar.PaymentEvaluation.PaymentDetails.MoneyMovementDetails.Card.PaymentType;
          }
        }
        export namespace PaymentMethodDetails {
          export type BillingDetails = Stripe.Radar.PaymentEvaluation.PaymentDetails.PaymentMethodDetails.BillingDetails;
        }
      }
      export namespace Signals {
        export type FraudulentPayment = Stripe.Radar.PaymentEvaluation.Signals.FraudulentPayment;
        export namespace FraudulentPayment {
          export type RiskLevel = Stripe.Radar.PaymentEvaluation.Signals.FraudulentPayment.RiskLevel;
        }
      }
    }
    export namespace ValueListCreateParams {
      export type ItemType = Stripe.Radar.ValueListCreateParams.ItemType;
    }
    export namespace ValueList {
      export type ItemType = Stripe.Radar.ValueList.ItemType;
    }
  }
  export namespace Reporting {
    export type ReportRun = Stripe.Reporting.ReportRun;
    export type ReportRunCreateParams = Stripe.Reporting.ReportRunCreateParams;
    export type ReportRunRetrieveParams = Stripe.Reporting.ReportRunRetrieveParams;
    export type ReportRunListParams = Stripe.Reporting.ReportRunListParams;
    export type ReportRunResource = Stripe.Reporting.ReportRunResource;
    export type ReportType = Stripe.Reporting.ReportType;
    export type ReportTypeRetrieveParams = Stripe.Reporting.ReportTypeRetrieveParams;
    export type ReportTypeListParams = Stripe.Reporting.ReportTypeListParams;
    export type ReportTypeResource = Stripe.Reporting.ReportTypeResource;
    export namespace ReportRunCreateParams {
      export type Parameters = Stripe.Reporting.ReportRunCreateParams.Parameters;
      export namespace Parameters {
        export type ReportingCategory = Stripe.Reporting.ReportRunCreateParams.Parameters.ReportingCategory;
        export type Timezone = Stripe.Reporting.ReportRunCreateParams.Parameters.Timezone;
      }
    }
    export namespace ReportRun {
      export type Parameters = Stripe.Reporting.ReportRun.Parameters;
    }
  }
  export namespace Sigma {
    export type ScheduledQueryRun = Stripe.Sigma.ScheduledQueryRun;
    export type ScheduledQueryRunRetrieveParams = Stripe.Sigma.ScheduledQueryRunRetrieveParams;
    export type ScheduledQueryRunListParams = Stripe.Sigma.ScheduledQueryRunListParams;
    export type ScheduledQueryRunResource = Stripe.Sigma.ScheduledQueryRunResource;
    export namespace ScheduledQueryRun {
      export type Error = Stripe.Sigma.ScheduledQueryRun.Error;
    }
  }
  export namespace Tax {
    export type Association = Stripe.Tax.Association;
    export type AssociationFindParams = Stripe.Tax.AssociationFindParams;
    export type AssociationResource = Stripe.Tax.AssociationResource;
    export type Calculation = Stripe.Tax.Calculation;
    export type CalculationCreateParams = Stripe.Tax.CalculationCreateParams;
    export type CalculationRetrieveParams = Stripe.Tax.CalculationRetrieveParams;
    export type CalculationListLineItemsParams = Stripe.Tax.CalculationListLineItemsParams;
    export type CalculationResource = Stripe.Tax.CalculationResource;
    export type Registration = Stripe.Tax.Registration;
    export type RegistrationCreateParams = Stripe.Tax.RegistrationCreateParams;
    export type RegistrationRetrieveParams = Stripe.Tax.RegistrationRetrieveParams;
    export type RegistrationUpdateParams = Stripe.Tax.RegistrationUpdateParams;
    export type RegistrationListParams = Stripe.Tax.RegistrationListParams;
    export type RegistrationResource = Stripe.Tax.RegistrationResource;
    export type Settings = Stripe.Tax.Settings;
    export type SettingsRetrieveParams = Stripe.Tax.SettingsRetrieveParams;
    export type SettingsUpdateParams = Stripe.Tax.SettingsUpdateParams;
    export type SettingResource = Stripe.Tax.SettingResource;
    export type Transaction = Stripe.Tax.Transaction;
    export type TransactionRetrieveParams = Stripe.Tax.TransactionRetrieveParams;
    export type TransactionCreateFromCalculationParams = Stripe.Tax.TransactionCreateFromCalculationParams;
    export type TransactionCreateReversalParams = Stripe.Tax.TransactionCreateReversalParams;
    export type TransactionListLineItemsParams = Stripe.Tax.TransactionListLineItemsParams;
    export type TransactionResource = Stripe.Tax.TransactionResource;
    export type CalculationLineItem = Stripe.Tax.CalculationLineItem;
    export type TransactionLineItem = Stripe.Tax.TransactionLineItem;
    export namespace Association {
      export type TaxTransactionAttempt = Stripe.Tax.Association.TaxTransactionAttempt;
      export namespace TaxTransactionAttempt {
        export type Committed = Stripe.Tax.Association.TaxTransactionAttempt.Committed;
        export type Errored = Stripe.Tax.Association.TaxTransactionAttempt.Errored;
        export namespace Errored {
          export type Reason = Stripe.Tax.Association.TaxTransactionAttempt.Errored.Reason;
        }
      }
    }
    export namespace CalculationCreateParams {
      export type LineItem = Stripe.Tax.CalculationCreateParams.LineItem;
      export type CustomerDetails = Stripe.Tax.CalculationCreateParams.CustomerDetails;
      export type ShipFromDetails = Stripe.Tax.CalculationCreateParams.ShipFromDetails;
      export type ShippingCost = Stripe.Tax.CalculationCreateParams.ShippingCost;
      export namespace CustomerDetails {
        export type Address = Stripe.Tax.CalculationCreateParams.CustomerDetails.Address;
        export type AddressSource = Stripe.Tax.CalculationCreateParams.CustomerDetails.AddressSource;
        export type TaxId = Stripe.Tax.CalculationCreateParams.CustomerDetails.TaxId;
        export type TaxabilityOverride = Stripe.Tax.CalculationCreateParams.CustomerDetails.TaxabilityOverride;
        export namespace TaxId {
          export type Type = Stripe.Tax.CalculationCreateParams.CustomerDetails.TaxId.Type;
        }
      }
      export namespace LineItem {
        export type TaxBehavior = Stripe.Tax.CalculationCreateParams.LineItem.TaxBehavior;
      }
      export namespace ShipFromDetails {
        export type Address = Stripe.Tax.CalculationCreateParams.ShipFromDetails.Address;
      }
      export namespace ShippingCost {
        export type TaxBehavior = Stripe.Tax.CalculationCreateParams.ShippingCost.TaxBehavior;
      }
    }
    export namespace Calculation {
      export type CustomerDetails = Stripe.Tax.Calculation.CustomerDetails;
      export type ShipFromDetails = Stripe.Tax.Calculation.ShipFromDetails;
      export type ShippingCost = Stripe.Tax.Calculation.ShippingCost;
      export type TaxBreakdown = Stripe.Tax.Calculation.TaxBreakdown;
      export namespace CustomerDetails {
        export type AddressSource = Stripe.Tax.Calculation.CustomerDetails.AddressSource;
        export type TaxId = Stripe.Tax.Calculation.CustomerDetails.TaxId;
        export type TaxabilityOverride = Stripe.Tax.Calculation.CustomerDetails.TaxabilityOverride;
        export namespace TaxId {
          export type Type = Stripe.Tax.Calculation.CustomerDetails.TaxId.Type;
        }
      }
      export namespace ShippingCost {
        export type TaxBehavior = Stripe.Tax.Calculation.ShippingCost.TaxBehavior;
        export type TaxBreakdown = Stripe.Tax.Calculation.ShippingCost.TaxBreakdown;
        export namespace TaxBreakdown {
          export type Jurisdiction = Stripe.Tax.Calculation.ShippingCost.TaxBreakdown.Jurisdiction;
          export type Sourcing = Stripe.Tax.Calculation.ShippingCost.TaxBreakdown.Sourcing;
          export type TaxRateDetails = Stripe.Tax.Calculation.ShippingCost.TaxBreakdown.TaxRateDetails;
          export type TaxabilityReason = Stripe.Tax.Calculation.ShippingCost.TaxBreakdown.TaxabilityReason;
          export namespace Jurisdiction {
            export type Level = Stripe.Tax.Calculation.ShippingCost.TaxBreakdown.Jurisdiction.Level;
          }
          export namespace TaxRateDetails {
            export type TaxType = Stripe.Tax.Calculation.ShippingCost.TaxBreakdown.TaxRateDetails.TaxType;
          }
        }
      }
      export namespace TaxBreakdown {
        export type TaxRateDetails = Stripe.Tax.Calculation.TaxBreakdown.TaxRateDetails;
        export type TaxabilityReason = Stripe.Tax.Calculation.TaxBreakdown.TaxabilityReason;
        export namespace TaxRateDetails {
          export type FlatAmount = Stripe.Tax.Calculation.TaxBreakdown.TaxRateDetails.FlatAmount;
          export type RateType = Stripe.Tax.Calculation.TaxBreakdown.TaxRateDetails.RateType;
          export type TaxType = Stripe.Tax.Calculation.TaxBreakdown.TaxRateDetails.TaxType;
        }
      }
    }
    export namespace RegistrationCreateParams {
      export type CountryOptions = Stripe.Tax.RegistrationCreateParams.CountryOptions;
      export namespace CountryOptions {
        export type Ae = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ae;
        export type Al = Stripe.Tax.RegistrationCreateParams.CountryOptions.Al;
        export type Am = Stripe.Tax.RegistrationCreateParams.CountryOptions.Am;
        export type Ao = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ao;
        export type At = Stripe.Tax.RegistrationCreateParams.CountryOptions.At;
        export type Au = Stripe.Tax.RegistrationCreateParams.CountryOptions.Au;
        export type Aw = Stripe.Tax.RegistrationCreateParams.CountryOptions.Aw;
        export type Az = Stripe.Tax.RegistrationCreateParams.CountryOptions.Az;
        export type Ba = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ba;
        export type Bb = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bb;
        export type Bd = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bd;
        export type Be = Stripe.Tax.RegistrationCreateParams.CountryOptions.Be;
        export type Bf = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bf;
        export type Bg = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bg;
        export type Bh = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bh;
        export type Bj = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bj;
        export type Bs = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bs;
        export type By = Stripe.Tax.RegistrationCreateParams.CountryOptions.By;
        export type Ca = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ca;
        export type Cd = Stripe.Tax.RegistrationCreateParams.CountryOptions.Cd;
        export type Ch = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ch;
        export type Cl = Stripe.Tax.RegistrationCreateParams.CountryOptions.Cl;
        export type Cm = Stripe.Tax.RegistrationCreateParams.CountryOptions.Cm;
        export type Co = Stripe.Tax.RegistrationCreateParams.CountryOptions.Co;
        export type Cr = Stripe.Tax.RegistrationCreateParams.CountryOptions.Cr;
        export type Cv = Stripe.Tax.RegistrationCreateParams.CountryOptions.Cv;
        export type Cy = Stripe.Tax.RegistrationCreateParams.CountryOptions.Cy;
        export type Cz = Stripe.Tax.RegistrationCreateParams.CountryOptions.Cz;
        export type De = Stripe.Tax.RegistrationCreateParams.CountryOptions.De;
        export type Dk = Stripe.Tax.RegistrationCreateParams.CountryOptions.Dk;
        export type Ec = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ec;
        export type Ee = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ee;
        export type Eg = Stripe.Tax.RegistrationCreateParams.CountryOptions.Eg;
        export type Es = Stripe.Tax.RegistrationCreateParams.CountryOptions.Es;
        export type Et = Stripe.Tax.RegistrationCreateParams.CountryOptions.Et;
        export type Fi = Stripe.Tax.RegistrationCreateParams.CountryOptions.Fi;
        export type Fr = Stripe.Tax.RegistrationCreateParams.CountryOptions.Fr;
        export type Gb = Stripe.Tax.RegistrationCreateParams.CountryOptions.Gb;
        export type Ge = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ge;
        export type Gn = Stripe.Tax.RegistrationCreateParams.CountryOptions.Gn;
        export type Gr = Stripe.Tax.RegistrationCreateParams.CountryOptions.Gr;
        export type Hr = Stripe.Tax.RegistrationCreateParams.CountryOptions.Hr;
        export type Hu = Stripe.Tax.RegistrationCreateParams.CountryOptions.Hu;
        export type Id = Stripe.Tax.RegistrationCreateParams.CountryOptions.Id;
        export type Ie = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ie;
        export type In = Stripe.Tax.RegistrationCreateParams.CountryOptions.In;
        export type Is = Stripe.Tax.RegistrationCreateParams.CountryOptions.Is;
        export type It = Stripe.Tax.RegistrationCreateParams.CountryOptions.It;
        export type Jp = Stripe.Tax.RegistrationCreateParams.CountryOptions.Jp;
        export type Ke = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ke;
        export type Kg = Stripe.Tax.RegistrationCreateParams.CountryOptions.Kg;
        export type Kh = Stripe.Tax.RegistrationCreateParams.CountryOptions.Kh;
        export type Kr = Stripe.Tax.RegistrationCreateParams.CountryOptions.Kr;
        export type Kz = Stripe.Tax.RegistrationCreateParams.CountryOptions.Kz;
        export type La = Stripe.Tax.RegistrationCreateParams.CountryOptions.La;
        export type Lk = Stripe.Tax.RegistrationCreateParams.CountryOptions.Lk;
        export type Lt = Stripe.Tax.RegistrationCreateParams.CountryOptions.Lt;
        export type Lu = Stripe.Tax.RegistrationCreateParams.CountryOptions.Lu;
        export type Lv = Stripe.Tax.RegistrationCreateParams.CountryOptions.Lv;
        export type Ma = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ma;
        export type Md = Stripe.Tax.RegistrationCreateParams.CountryOptions.Md;
        export type Me = Stripe.Tax.RegistrationCreateParams.CountryOptions.Me;
        export type Mk = Stripe.Tax.RegistrationCreateParams.CountryOptions.Mk;
        export type Mr = Stripe.Tax.RegistrationCreateParams.CountryOptions.Mr;
        export type Mt = Stripe.Tax.RegistrationCreateParams.CountryOptions.Mt;
        export type Mx = Stripe.Tax.RegistrationCreateParams.CountryOptions.Mx;
        export type My = Stripe.Tax.RegistrationCreateParams.CountryOptions.My;
        export type Ng = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ng;
        export type Nl = Stripe.Tax.RegistrationCreateParams.CountryOptions.Nl;
        export type No = Stripe.Tax.RegistrationCreateParams.CountryOptions.No;
        export type Np = Stripe.Tax.RegistrationCreateParams.CountryOptions.Np;
        export type Nz = Stripe.Tax.RegistrationCreateParams.CountryOptions.Nz;
        export type Om = Stripe.Tax.RegistrationCreateParams.CountryOptions.Om;
        export type Pe = Stripe.Tax.RegistrationCreateParams.CountryOptions.Pe;
        export type Ph = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ph;
        export type Pl = Stripe.Tax.RegistrationCreateParams.CountryOptions.Pl;
        export type Pt = Stripe.Tax.RegistrationCreateParams.CountryOptions.Pt;
        export type Ro = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ro;
        export type Rs = Stripe.Tax.RegistrationCreateParams.CountryOptions.Rs;
        export type Ru = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ru;
        export type Sa = Stripe.Tax.RegistrationCreateParams.CountryOptions.Sa;
        export type Se = Stripe.Tax.RegistrationCreateParams.CountryOptions.Se;
        export type Sg = Stripe.Tax.RegistrationCreateParams.CountryOptions.Sg;
        export type Si = Stripe.Tax.RegistrationCreateParams.CountryOptions.Si;
        export type Sk = Stripe.Tax.RegistrationCreateParams.CountryOptions.Sk;
        export type Sn = Stripe.Tax.RegistrationCreateParams.CountryOptions.Sn;
        export type Sr = Stripe.Tax.RegistrationCreateParams.CountryOptions.Sr;
        export type Th = Stripe.Tax.RegistrationCreateParams.CountryOptions.Th;
        export type Tj = Stripe.Tax.RegistrationCreateParams.CountryOptions.Tj;
        export type Tr = Stripe.Tax.RegistrationCreateParams.CountryOptions.Tr;
        export type Tw = Stripe.Tax.RegistrationCreateParams.CountryOptions.Tw;
        export type Tz = Stripe.Tax.RegistrationCreateParams.CountryOptions.Tz;
        export type Ua = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ua;
        export type Ug = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ug;
        export type Us = Stripe.Tax.RegistrationCreateParams.CountryOptions.Us;
        export type Uy = Stripe.Tax.RegistrationCreateParams.CountryOptions.Uy;
        export type Uz = Stripe.Tax.RegistrationCreateParams.CountryOptions.Uz;
        export type Vn = Stripe.Tax.RegistrationCreateParams.CountryOptions.Vn;
        export type Za = Stripe.Tax.RegistrationCreateParams.CountryOptions.Za;
        export type Zm = Stripe.Tax.RegistrationCreateParams.CountryOptions.Zm;
        export type Zw = Stripe.Tax.RegistrationCreateParams.CountryOptions.Zw;
        export namespace Ae {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ae.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ae.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Al {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Al.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Al.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ao {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ao.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ao.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace At {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.At.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.At.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.At.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Au {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Au.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Au.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Aw {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Aw.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Aw.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ba {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ba.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ba.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Bb {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bb.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bb.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Bd {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bd.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bd.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Be {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Be.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Be.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Be.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Bf {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bf.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bf.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Bg {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bg.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bg.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bg.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Bh {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bh.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bh.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Bs {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bs.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Bs.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ca {
          export type ProvinceStandard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ca.ProvinceStandard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ca.Type;
        }
        export namespace Cd {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Cd.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Cd.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ch {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ch.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ch.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Cy {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Cy.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Cy.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Cy.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Cz {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Cz.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Cz.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Cz.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace De {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.De.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.De.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.De.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Dk {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Dk.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Dk.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Dk.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ee {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ee.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ee.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ee.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Es {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Es.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Es.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Es.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Et {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Et.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Et.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Fi {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Fi.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Fi.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Fi.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Fr {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Fr.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Fr.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Fr.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Gb {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Gb.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Gb.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Gn {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Gn.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Gn.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Gr {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Gr.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Gr.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Gr.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Hr {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Hr.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Hr.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Hr.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Hu {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Hu.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Hu.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Hu.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ie {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ie.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ie.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ie.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Is {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Is.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Is.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace It {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.It.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.It.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.It.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Jp {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Jp.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Jp.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Lt {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Lt.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Lt.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Lt.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Lu {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Lu.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Lu.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Lu.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Lv {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Lv.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Lv.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Lv.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Me {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Me.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Me.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Mk {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Mk.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Mk.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Mr {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Mr.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Mr.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Mt {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Mt.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Mt.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Mt.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Nl {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Nl.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Nl.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Nl.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace No {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.No.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.No.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Nz {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Nz.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Nz.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Om {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Om.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Om.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Pl {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Pl.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Pl.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Pl.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Pt {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Pt.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Pt.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Pt.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ro {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ro.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ro.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Ro.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Rs {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Rs.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Rs.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Se {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Se.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Se.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Se.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Sg {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Sg.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Sg.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Si {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Si.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Si.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Si.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Sk {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Sk.Standard;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Sk.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Sk.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Sr {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Sr.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Sr.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Us {
          export type LocalAmusementTax = Stripe.Tax.RegistrationCreateParams.CountryOptions.Us.LocalAmusementTax;
          export type LocalLeaseTax = Stripe.Tax.RegistrationCreateParams.CountryOptions.Us.LocalLeaseTax;
          export type StateSalesTax = Stripe.Tax.RegistrationCreateParams.CountryOptions.Us.StateSalesTax;
          export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Us.Type;
          export namespace StateSalesTax {
            export type Election = Stripe.Tax.RegistrationCreateParams.CountryOptions.Us.StateSalesTax.Election;
            export namespace Election {
              export type Type = Stripe.Tax.RegistrationCreateParams.CountryOptions.Us.StateSalesTax.Election.Type;
            }
          }
        }
        export namespace Uy {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Uy.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Uy.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Za {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Za.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Za.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Zw {
          export type Standard = Stripe.Tax.RegistrationCreateParams.CountryOptions.Zw.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.RegistrationCreateParams.CountryOptions.Zw.Standard.PlaceOfSupplyScheme;
          }
        }
      }
    }
    export namespace Registration {
      export type CountryOptions = Stripe.Tax.Registration.CountryOptions;
      export type Status = Stripe.Tax.Registration.Status;
      export namespace CountryOptions {
        export type Ae = Stripe.Tax.Registration.CountryOptions.Ae;
        export type Al = Stripe.Tax.Registration.CountryOptions.Al;
        export type Am = Stripe.Tax.Registration.CountryOptions.Am;
        export type Ao = Stripe.Tax.Registration.CountryOptions.Ao;
        export type At = Stripe.Tax.Registration.CountryOptions.At;
        export type Au = Stripe.Tax.Registration.CountryOptions.Au;
        export type Aw = Stripe.Tax.Registration.CountryOptions.Aw;
        export type Az = Stripe.Tax.Registration.CountryOptions.Az;
        export type Ba = Stripe.Tax.Registration.CountryOptions.Ba;
        export type Bb = Stripe.Tax.Registration.CountryOptions.Bb;
        export type Bd = Stripe.Tax.Registration.CountryOptions.Bd;
        export type Be = Stripe.Tax.Registration.CountryOptions.Be;
        export type Bf = Stripe.Tax.Registration.CountryOptions.Bf;
        export type Bg = Stripe.Tax.Registration.CountryOptions.Bg;
        export type Bh = Stripe.Tax.Registration.CountryOptions.Bh;
        export type Bj = Stripe.Tax.Registration.CountryOptions.Bj;
        export type Bs = Stripe.Tax.Registration.CountryOptions.Bs;
        export type By = Stripe.Tax.Registration.CountryOptions.By;
        export type Ca = Stripe.Tax.Registration.CountryOptions.Ca;
        export type Cd = Stripe.Tax.Registration.CountryOptions.Cd;
        export type Ch = Stripe.Tax.Registration.CountryOptions.Ch;
        export type Cl = Stripe.Tax.Registration.CountryOptions.Cl;
        export type Cm = Stripe.Tax.Registration.CountryOptions.Cm;
        export type Co = Stripe.Tax.Registration.CountryOptions.Co;
        export type Cr = Stripe.Tax.Registration.CountryOptions.Cr;
        export type Cv = Stripe.Tax.Registration.CountryOptions.Cv;
        export type Cy = Stripe.Tax.Registration.CountryOptions.Cy;
        export type Cz = Stripe.Tax.Registration.CountryOptions.Cz;
        export type De = Stripe.Tax.Registration.CountryOptions.De;
        export type Dk = Stripe.Tax.Registration.CountryOptions.Dk;
        export type Ec = Stripe.Tax.Registration.CountryOptions.Ec;
        export type Ee = Stripe.Tax.Registration.CountryOptions.Ee;
        export type Eg = Stripe.Tax.Registration.CountryOptions.Eg;
        export type Es = Stripe.Tax.Registration.CountryOptions.Es;
        export type Et = Stripe.Tax.Registration.CountryOptions.Et;
        export type Fi = Stripe.Tax.Registration.CountryOptions.Fi;
        export type Fr = Stripe.Tax.Registration.CountryOptions.Fr;
        export type Gb = Stripe.Tax.Registration.CountryOptions.Gb;
        export type Ge = Stripe.Tax.Registration.CountryOptions.Ge;
        export type Gn = Stripe.Tax.Registration.CountryOptions.Gn;
        export type Gr = Stripe.Tax.Registration.CountryOptions.Gr;
        export type Hr = Stripe.Tax.Registration.CountryOptions.Hr;
        export type Hu = Stripe.Tax.Registration.CountryOptions.Hu;
        export type Id = Stripe.Tax.Registration.CountryOptions.Id;
        export type Ie = Stripe.Tax.Registration.CountryOptions.Ie;
        export type In = Stripe.Tax.Registration.CountryOptions.In;
        export type Is = Stripe.Tax.Registration.CountryOptions.Is;
        export type It = Stripe.Tax.Registration.CountryOptions.It;
        export type Jp = Stripe.Tax.Registration.CountryOptions.Jp;
        export type Ke = Stripe.Tax.Registration.CountryOptions.Ke;
        export type Kg = Stripe.Tax.Registration.CountryOptions.Kg;
        export type Kh = Stripe.Tax.Registration.CountryOptions.Kh;
        export type Kr = Stripe.Tax.Registration.CountryOptions.Kr;
        export type Kz = Stripe.Tax.Registration.CountryOptions.Kz;
        export type La = Stripe.Tax.Registration.CountryOptions.La;
        export type Lk = Stripe.Tax.Registration.CountryOptions.Lk;
        export type Lt = Stripe.Tax.Registration.CountryOptions.Lt;
        export type Lu = Stripe.Tax.Registration.CountryOptions.Lu;
        export type Lv = Stripe.Tax.Registration.CountryOptions.Lv;
        export type Ma = Stripe.Tax.Registration.CountryOptions.Ma;
        export type Md = Stripe.Tax.Registration.CountryOptions.Md;
        export type Me = Stripe.Tax.Registration.CountryOptions.Me;
        export type Mk = Stripe.Tax.Registration.CountryOptions.Mk;
        export type Mr = Stripe.Tax.Registration.CountryOptions.Mr;
        export type Mt = Stripe.Tax.Registration.CountryOptions.Mt;
        export type Mx = Stripe.Tax.Registration.CountryOptions.Mx;
        export type My = Stripe.Tax.Registration.CountryOptions.My;
        export type Ng = Stripe.Tax.Registration.CountryOptions.Ng;
        export type Nl = Stripe.Tax.Registration.CountryOptions.Nl;
        export type No = Stripe.Tax.Registration.CountryOptions.No;
        export type Np = Stripe.Tax.Registration.CountryOptions.Np;
        export type Nz = Stripe.Tax.Registration.CountryOptions.Nz;
        export type Om = Stripe.Tax.Registration.CountryOptions.Om;
        export type Pe = Stripe.Tax.Registration.CountryOptions.Pe;
        export type Ph = Stripe.Tax.Registration.CountryOptions.Ph;
        export type Pl = Stripe.Tax.Registration.CountryOptions.Pl;
        export type Pt = Stripe.Tax.Registration.CountryOptions.Pt;
        export type Ro = Stripe.Tax.Registration.CountryOptions.Ro;
        export type Rs = Stripe.Tax.Registration.CountryOptions.Rs;
        export type Ru = Stripe.Tax.Registration.CountryOptions.Ru;
        export type Sa = Stripe.Tax.Registration.CountryOptions.Sa;
        export type Se = Stripe.Tax.Registration.CountryOptions.Se;
        export type Sg = Stripe.Tax.Registration.CountryOptions.Sg;
        export type Si = Stripe.Tax.Registration.CountryOptions.Si;
        export type Sk = Stripe.Tax.Registration.CountryOptions.Sk;
        export type Sn = Stripe.Tax.Registration.CountryOptions.Sn;
        export type Sr = Stripe.Tax.Registration.CountryOptions.Sr;
        export type Th = Stripe.Tax.Registration.CountryOptions.Th;
        export type Tj = Stripe.Tax.Registration.CountryOptions.Tj;
        export type Tr = Stripe.Tax.Registration.CountryOptions.Tr;
        export type Tw = Stripe.Tax.Registration.CountryOptions.Tw;
        export type Tz = Stripe.Tax.Registration.CountryOptions.Tz;
        export type Ua = Stripe.Tax.Registration.CountryOptions.Ua;
        export type Ug = Stripe.Tax.Registration.CountryOptions.Ug;
        export type Us = Stripe.Tax.Registration.CountryOptions.Us;
        export type Uy = Stripe.Tax.Registration.CountryOptions.Uy;
        export type Uz = Stripe.Tax.Registration.CountryOptions.Uz;
        export type Vn = Stripe.Tax.Registration.CountryOptions.Vn;
        export type Za = Stripe.Tax.Registration.CountryOptions.Za;
        export type Zm = Stripe.Tax.Registration.CountryOptions.Zm;
        export type Zw = Stripe.Tax.Registration.CountryOptions.Zw;
        export namespace Ae {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Ae.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Ae.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace At {
          export type Standard = Stripe.Tax.Registration.CountryOptions.At.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.At.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.At.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Au {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Au.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Au.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Be {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Be.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Be.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Be.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Bg {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Bg.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Bg.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Bg.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ca {
          export type ProvinceStandard = Stripe.Tax.Registration.CountryOptions.Ca.ProvinceStandard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Ca.Type;
        }
        export namespace Ch {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Ch.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Ch.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Cy {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Cy.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Cy.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Cy.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Cz {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Cz.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Cz.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Cz.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace De {
          export type Standard = Stripe.Tax.Registration.CountryOptions.De.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.De.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.De.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Dk {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Dk.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Dk.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Dk.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ee {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Ee.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Ee.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Ee.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Es {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Es.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Es.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Es.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Fi {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Fi.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Fi.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Fi.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Fr {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Fr.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Fr.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Fr.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Gb {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Gb.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Gb.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Gr {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Gr.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Gr.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Gr.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Hr {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Hr.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Hr.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Hr.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Hu {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Hu.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Hu.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Hu.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ie {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Ie.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Ie.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Ie.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace It {
          export type Standard = Stripe.Tax.Registration.CountryOptions.It.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.It.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.It.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Jp {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Jp.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Jp.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Lt {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Lt.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Lt.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Lt.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Lu {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Lu.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Lu.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Lu.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Lv {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Lv.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Lv.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Lv.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Mt {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Mt.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Mt.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Mt.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Nl {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Nl.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Nl.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Nl.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace No {
          export type Standard = Stripe.Tax.Registration.CountryOptions.No.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.No.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Nz {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Nz.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Nz.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Pl {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Pl.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Pl.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Pl.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Pt {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Pt.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Pt.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Pt.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Ro {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Ro.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Ro.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Ro.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Se {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Se.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Se.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Se.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Sg {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Sg.Standard;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Sg.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Si {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Si.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Si.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Si.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Sk {
          export type Standard = Stripe.Tax.Registration.CountryOptions.Sk.Standard;
          export type Type = Stripe.Tax.Registration.CountryOptions.Sk.Type;
          export namespace Standard {
            export type PlaceOfSupplyScheme = Stripe.Tax.Registration.CountryOptions.Sk.Standard.PlaceOfSupplyScheme;
          }
        }
        export namespace Us {
          export type LocalAmusementTax = Stripe.Tax.Registration.CountryOptions.Us.LocalAmusementTax;
          export type LocalLeaseTax = Stripe.Tax.Registration.CountryOptions.Us.LocalLeaseTax;
          export type StateSalesTax = Stripe.Tax.Registration.CountryOptions.Us.StateSalesTax;
          export type Type = Stripe.Tax.Registration.CountryOptions.Us.Type;
          export namespace StateSalesTax {
            export type Election = Stripe.Tax.Registration.CountryOptions.Us.StateSalesTax.Election;
            export namespace Election {
              export type Type = Stripe.Tax.Registration.CountryOptions.Us.StateSalesTax.Election.Type;
            }
          }
        }
      }
    }
    export namespace Settings {
      export type Defaults = Stripe.Tax.Settings.Defaults;
      export type HeadOffice = Stripe.Tax.Settings.HeadOffice;
      export type Status = Stripe.Tax.Settings.Status;
      export type StatusDetails = Stripe.Tax.Settings.StatusDetails;
      export namespace Defaults {
        export type Provider = Stripe.Tax.Settings.Defaults.Provider;
        export type TaxBehavior = Stripe.Tax.Settings.Defaults.TaxBehavior;
      }
      export namespace StatusDetails {
        export type Active = Stripe.Tax.Settings.StatusDetails.Active;
        export type Pending = Stripe.Tax.Settings.StatusDetails.Pending;
      }
    }
    export namespace Transaction {
      export type CustomerDetails = Stripe.Tax.Transaction.CustomerDetails;
      export type Reversal = Stripe.Tax.Transaction.Reversal;
      export type ShipFromDetails = Stripe.Tax.Transaction.ShipFromDetails;
      export type ShippingCost = Stripe.Tax.Transaction.ShippingCost;
      export type Type = Stripe.Tax.Transaction.Type;
      export namespace CustomerDetails {
        export type AddressSource = Stripe.Tax.Transaction.CustomerDetails.AddressSource;
        export type TaxId = Stripe.Tax.Transaction.CustomerDetails.TaxId;
        export type TaxabilityOverride = Stripe.Tax.Transaction.CustomerDetails.TaxabilityOverride;
        export namespace TaxId {
          export type Type = Stripe.Tax.Transaction.CustomerDetails.TaxId.Type;
        }
      }
      export namespace ShippingCost {
        export type TaxBehavior = Stripe.Tax.Transaction.ShippingCost.TaxBehavior;
        export type TaxBreakdown = Stripe.Tax.Transaction.ShippingCost.TaxBreakdown;
        export namespace TaxBreakdown {
          export type Jurisdiction = Stripe.Tax.Transaction.ShippingCost.TaxBreakdown.Jurisdiction;
          export type Sourcing = Stripe.Tax.Transaction.ShippingCost.TaxBreakdown.Sourcing;
          export type TaxRateDetails = Stripe.Tax.Transaction.ShippingCost.TaxBreakdown.TaxRateDetails;
          export type TaxabilityReason = Stripe.Tax.Transaction.ShippingCost.TaxBreakdown.TaxabilityReason;
          export namespace Jurisdiction {
            export type Level = Stripe.Tax.Transaction.ShippingCost.TaxBreakdown.Jurisdiction.Level;
          }
          export namespace TaxRateDetails {
            export type TaxType = Stripe.Tax.Transaction.ShippingCost.TaxBreakdown.TaxRateDetails.TaxType;
          }
        }
      }
    }
    export namespace CalculationLineItem {
      export type TaxBehavior = Stripe.Tax.CalculationLineItem.TaxBehavior;
      export type TaxBreakdown = Stripe.Tax.CalculationLineItem.TaxBreakdown;
      export namespace TaxBreakdown {
        export type Jurisdiction = Stripe.Tax.CalculationLineItem.TaxBreakdown.Jurisdiction;
        export type Sourcing = Stripe.Tax.CalculationLineItem.TaxBreakdown.Sourcing;
        export type TaxRateDetails = Stripe.Tax.CalculationLineItem.TaxBreakdown.TaxRateDetails;
        export type TaxabilityReason = Stripe.Tax.CalculationLineItem.TaxBreakdown.TaxabilityReason;
        export namespace Jurisdiction {
          export type Level = Stripe.Tax.CalculationLineItem.TaxBreakdown.Jurisdiction.Level;
        }
        export namespace TaxRateDetails {
          export type TaxType = Stripe.Tax.CalculationLineItem.TaxBreakdown.TaxRateDetails.TaxType;
        }
      }
    }
    export namespace TransactionLineItem {
      export type Reversal = Stripe.Tax.TransactionLineItem.Reversal;
      export type TaxBehavior = Stripe.Tax.TransactionLineItem.TaxBehavior;
      export type Type = Stripe.Tax.TransactionLineItem.Type;
    }
  }
  export namespace Terminal {
    export type Configuration = Stripe.Terminal.Configuration;
    export type DeletedConfiguration = Stripe.Terminal.DeletedConfiguration;
    export type ConfigurationCreateParams = Stripe.Terminal.ConfigurationCreateParams;
    export type ConfigurationRetrieveParams = Stripe.Terminal.ConfigurationRetrieveParams;
    export type ConfigurationUpdateParams = Stripe.Terminal.ConfigurationUpdateParams;
    export type ConfigurationListParams = Stripe.Terminal.ConfigurationListParams;
    export type ConfigurationDeleteParams = Stripe.Terminal.ConfigurationDeleteParams;
    export type ConfigurationResource = Stripe.Terminal.ConfigurationResource;
    export type ConnectionToken = Stripe.Terminal.ConnectionToken;
    export type ConnectionTokenCreateParams = Stripe.Terminal.ConnectionTokenCreateParams;
    export type ConnectionTokenResource = Stripe.Terminal.ConnectionTokenResource;
    export type Location = Stripe.Terminal.Location;
    export type DeletedLocation = Stripe.Terminal.DeletedLocation;
    export type LocationCreateParams = Stripe.Terminal.LocationCreateParams;
    export type LocationRetrieveParams = Stripe.Terminal.LocationRetrieveParams;
    export type LocationUpdateParams = Stripe.Terminal.LocationUpdateParams;
    export type LocationListParams = Stripe.Terminal.LocationListParams;
    export type LocationDeleteParams = Stripe.Terminal.LocationDeleteParams;
    export type LocationResource = Stripe.Terminal.LocationResource;
    export type OnboardingLink = Stripe.Terminal.OnboardingLink;
    export type OnboardingLinkCreateParams = Stripe.Terminal.OnboardingLinkCreateParams;
    export type OnboardingLinkResource = Stripe.Terminal.OnboardingLinkResource;
    export type Reader = Stripe.Terminal.Reader;
    export type DeletedReader = Stripe.Terminal.DeletedReader;
    export type ReaderCreateParams = Stripe.Terminal.ReaderCreateParams;
    export type ReaderRetrieveParams = Stripe.Terminal.ReaderRetrieveParams;
    export type ReaderUpdateParams = Stripe.Terminal.ReaderUpdateParams;
    export type ReaderListParams = Stripe.Terminal.ReaderListParams;
    export type ReaderDeleteParams = Stripe.Terminal.ReaderDeleteParams;
    export type ReaderCancelActionParams = Stripe.Terminal.ReaderCancelActionParams;
    export type ReaderCollectInputsParams = Stripe.Terminal.ReaderCollectInputsParams;
    export type ReaderCollectPaymentMethodParams = Stripe.Terminal.ReaderCollectPaymentMethodParams;
    export type ReaderConfirmPaymentIntentParams = Stripe.Terminal.ReaderConfirmPaymentIntentParams;
    export type ReaderProcessPaymentIntentParams = Stripe.Terminal.ReaderProcessPaymentIntentParams;
    export type ReaderProcessSetupIntentParams = Stripe.Terminal.ReaderProcessSetupIntentParams;
    export type ReaderRefundPaymentParams = Stripe.Terminal.ReaderRefundPaymentParams;
    export type ReaderSetReaderDisplayParams = Stripe.Terminal.ReaderSetReaderDisplayParams;
    export type ReaderResource = Stripe.Terminal.ReaderResource;
    export namespace ConfigurationCreateParams {
      export type BbposWisepad3 = Stripe.Terminal.ConfigurationCreateParams.BbposWisepad3;
      export type BbposWiseposE = Stripe.Terminal.ConfigurationCreateParams.BbposWiseposE;
      export type Cellular = Stripe.Terminal.ConfigurationCreateParams.Cellular;
      export type Offline = Stripe.Terminal.ConfigurationCreateParams.Offline;
      export type RebootWindow = Stripe.Terminal.ConfigurationCreateParams.RebootWindow;
      export type StripeS700 = Stripe.Terminal.ConfigurationCreateParams.StripeS700;
      export type StripeS710 = Stripe.Terminal.ConfigurationCreateParams.StripeS710;
      export type Tipping = Stripe.Terminal.ConfigurationCreateParams.Tipping;
      export type VerifoneM425 = Stripe.Terminal.ConfigurationCreateParams.VerifoneM425;
      export type VerifoneP400 = Stripe.Terminal.ConfigurationCreateParams.VerifoneP400;
      export type VerifoneP630 = Stripe.Terminal.ConfigurationCreateParams.VerifoneP630;
      export type VerifoneUx700 = Stripe.Terminal.ConfigurationCreateParams.VerifoneUx700;
      export type VerifoneV660p = Stripe.Terminal.ConfigurationCreateParams.VerifoneV660p;
      export type Wifi = Stripe.Terminal.ConfigurationCreateParams.Wifi;
      export namespace Tipping {
        export type Aed = Stripe.Terminal.ConfigurationCreateParams.Tipping.Aed;
        export type Aud = Stripe.Terminal.ConfigurationCreateParams.Tipping.Aud;
        export type Cad = Stripe.Terminal.ConfigurationCreateParams.Tipping.Cad;
        export type Chf = Stripe.Terminal.ConfigurationCreateParams.Tipping.Chf;
        export type Czk = Stripe.Terminal.ConfigurationCreateParams.Tipping.Czk;
        export type Dkk = Stripe.Terminal.ConfigurationCreateParams.Tipping.Dkk;
        export type Eur = Stripe.Terminal.ConfigurationCreateParams.Tipping.Eur;
        export type Gbp = Stripe.Terminal.ConfigurationCreateParams.Tipping.Gbp;
        export type Gip = Stripe.Terminal.ConfigurationCreateParams.Tipping.Gip;
        export type Hkd = Stripe.Terminal.ConfigurationCreateParams.Tipping.Hkd;
        export type Huf = Stripe.Terminal.ConfigurationCreateParams.Tipping.Huf;
        export type Jpy = Stripe.Terminal.ConfigurationCreateParams.Tipping.Jpy;
        export type Mxn = Stripe.Terminal.ConfigurationCreateParams.Tipping.Mxn;
        export type Myr = Stripe.Terminal.ConfigurationCreateParams.Tipping.Myr;
        export type Nok = Stripe.Terminal.ConfigurationCreateParams.Tipping.Nok;
        export type Nzd = Stripe.Terminal.ConfigurationCreateParams.Tipping.Nzd;
        export type Pln = Stripe.Terminal.ConfigurationCreateParams.Tipping.Pln;
        export type Ron = Stripe.Terminal.ConfigurationCreateParams.Tipping.Ron;
        export type Sek = Stripe.Terminal.ConfigurationCreateParams.Tipping.Sek;
        export type Sgd = Stripe.Terminal.ConfigurationCreateParams.Tipping.Sgd;
        export type Usd = Stripe.Terminal.ConfigurationCreateParams.Tipping.Usd;
      }
      export namespace Wifi {
        export type EnterpriseEapPeap = Stripe.Terminal.ConfigurationCreateParams.Wifi.EnterpriseEapPeap;
        export type EnterpriseEapTls = Stripe.Terminal.ConfigurationCreateParams.Wifi.EnterpriseEapTls;
        export type PersonalPsk = Stripe.Terminal.ConfigurationCreateParams.Wifi.PersonalPsk;
        export type Type = Stripe.Terminal.ConfigurationCreateParams.Wifi.Type;
      }
    }
    export namespace Configuration {
      export type BbposWisepad3 = Stripe.Terminal.Configuration.BbposWisepad3;
      export type BbposWiseposE = Stripe.Terminal.Configuration.BbposWiseposE;
      export type Cellular = Stripe.Terminal.Configuration.Cellular;
      export type Offline = Stripe.Terminal.Configuration.Offline;
      export type RebootWindow = Stripe.Terminal.Configuration.RebootWindow;
      export type StripeS700 = Stripe.Terminal.Configuration.StripeS700;
      export type StripeS710 = Stripe.Terminal.Configuration.StripeS710;
      export type Tipping = Stripe.Terminal.Configuration.Tipping;
      export type VerifoneM425 = Stripe.Terminal.Configuration.VerifoneM425;
      export type VerifoneP400 = Stripe.Terminal.Configuration.VerifoneP400;
      export type VerifoneP630 = Stripe.Terminal.Configuration.VerifoneP630;
      export type VerifoneUx700 = Stripe.Terminal.Configuration.VerifoneUx700;
      export type VerifoneV660p = Stripe.Terminal.Configuration.VerifoneV660p;
      export type Wifi = Stripe.Terminal.Configuration.Wifi;
      export namespace Tipping {
        export type Aed = Stripe.Terminal.Configuration.Tipping.Aed;
        export type Aud = Stripe.Terminal.Configuration.Tipping.Aud;
        export type Cad = Stripe.Terminal.Configuration.Tipping.Cad;
        export type Chf = Stripe.Terminal.Configuration.Tipping.Chf;
        export type Czk = Stripe.Terminal.Configuration.Tipping.Czk;
        export type Dkk = Stripe.Terminal.Configuration.Tipping.Dkk;
        export type Eur = Stripe.Terminal.Configuration.Tipping.Eur;
        export type Gbp = Stripe.Terminal.Configuration.Tipping.Gbp;
        export type Gip = Stripe.Terminal.Configuration.Tipping.Gip;
        export type Hkd = Stripe.Terminal.Configuration.Tipping.Hkd;
        export type Huf = Stripe.Terminal.Configuration.Tipping.Huf;
        export type Jpy = Stripe.Terminal.Configuration.Tipping.Jpy;
        export type Mxn = Stripe.Terminal.Configuration.Tipping.Mxn;
        export type Myr = Stripe.Terminal.Configuration.Tipping.Myr;
        export type Nok = Stripe.Terminal.Configuration.Tipping.Nok;
        export type Nzd = Stripe.Terminal.Configuration.Tipping.Nzd;
        export type Pln = Stripe.Terminal.Configuration.Tipping.Pln;
        export type Ron = Stripe.Terminal.Configuration.Tipping.Ron;
        export type Sek = Stripe.Terminal.Configuration.Tipping.Sek;
        export type Sgd = Stripe.Terminal.Configuration.Tipping.Sgd;
        export type Usd = Stripe.Terminal.Configuration.Tipping.Usd;
      }
      export namespace Wifi {
        export type EnterpriseEapPeap = Stripe.Terminal.Configuration.Wifi.EnterpriseEapPeap;
        export type EnterpriseEapTls = Stripe.Terminal.Configuration.Wifi.EnterpriseEapTls;
        export type PersonalPsk = Stripe.Terminal.Configuration.Wifi.PersonalPsk;
        export type Type = Stripe.Terminal.Configuration.Wifi.Type;
      }
    }
    export namespace LocationCreateParams {
      export type Address = Stripe.Terminal.LocationCreateParams.Address;
    }
    export namespace Location {
      export type AddressKana = Stripe.Terminal.Location.AddressKana;
      export type AddressKanji = Stripe.Terminal.Location.AddressKanji;
    }
    export namespace OnboardingLinkCreateParams {
      export type LinkOptions = Stripe.Terminal.OnboardingLinkCreateParams.LinkOptions;
      export namespace LinkOptions {
        export type AppleTermsAndConditions = Stripe.Terminal.OnboardingLinkCreateParams.LinkOptions.AppleTermsAndConditions;
      }
    }
    export namespace OnboardingLink {
      export type LinkOptions = Stripe.Terminal.OnboardingLink.LinkOptions;
      export namespace LinkOptions {
        export type AppleTermsAndConditions = Stripe.Terminal.OnboardingLink.LinkOptions.AppleTermsAndConditions;
      }
    }
    export namespace DeletedReader {
      export type DeviceType = Stripe.Terminal.DeletedReader.DeviceType;
    }
    export namespace Reader {
      export type Action = Stripe.Terminal.Reader.Action;
      export type DeviceType = Stripe.Terminal.Reader.DeviceType;
      export type Status = Stripe.Terminal.Reader.Status;
      export namespace Action {
        export type ApiError = Stripe.Terminal.Reader.Action.ApiError;
        export type CollectInputs = Stripe.Terminal.Reader.Action.CollectInputs;
        export type CollectPaymentMethod = Stripe.Terminal.Reader.Action.CollectPaymentMethod;
        export type ConfirmPaymentIntent = Stripe.Terminal.Reader.Action.ConfirmPaymentIntent;
        export type PrintContent = Stripe.Terminal.Reader.Action.PrintContent;
        export type ProcessPaymentIntent = Stripe.Terminal.Reader.Action.ProcessPaymentIntent;
        export type ProcessSetupIntent = Stripe.Terminal.Reader.Action.ProcessSetupIntent;
        export type RefundPayment = Stripe.Terminal.Reader.Action.RefundPayment;
        export type SetReaderDisplay = Stripe.Terminal.Reader.Action.SetReaderDisplay;
        export type Status = Stripe.Terminal.Reader.Action.Status;
        export type Type = Stripe.Terminal.Reader.Action.Type;
        export namespace ApiError {
          export type Code = Stripe.Terminal.Reader.Action.ApiError.Code;
          export type Type = Stripe.Terminal.Reader.Action.ApiError.Type;
        }
        export namespace CollectInputs {
          export type Input = Stripe.Terminal.Reader.Action.CollectInputs.Input;
          export namespace Input {
            export type CustomText = Stripe.Terminal.Reader.Action.CollectInputs.Input.CustomText;
            export type Email = Stripe.Terminal.Reader.Action.CollectInputs.Input.Email;
            export type Numeric = Stripe.Terminal.Reader.Action.CollectInputs.Input.Numeric;
            export type Phone = Stripe.Terminal.Reader.Action.CollectInputs.Input.Phone;
            export type Selection = Stripe.Terminal.Reader.Action.CollectInputs.Input.Selection;
            export type Signature = Stripe.Terminal.Reader.Action.CollectInputs.Input.Signature;
            export type Text = Stripe.Terminal.Reader.Action.CollectInputs.Input.Text;
            export type Toggle = Stripe.Terminal.Reader.Action.CollectInputs.Input.Toggle;
            export type Type = Stripe.Terminal.Reader.Action.CollectInputs.Input.Type;
            export namespace Selection {
              export type Choice = Stripe.Terminal.Reader.Action.CollectInputs.Input.Selection.Choice;
              export namespace Choice {
                export type Style = Stripe.Terminal.Reader.Action.CollectInputs.Input.Selection.Choice.Style;
              }
            }
            export namespace Toggle {
              export type DefaultValue = Stripe.Terminal.Reader.Action.CollectInputs.Input.Toggle.DefaultValue;
              export type Value = Stripe.Terminal.Reader.Action.CollectInputs.Input.Toggle.Value;
            }
          }
        }
        export namespace CollectPaymentMethod {
          export type CollectConfig = Stripe.Terminal.Reader.Action.CollectPaymentMethod.CollectConfig;
          export namespace CollectConfig {
            export type Tipping = Stripe.Terminal.Reader.Action.CollectPaymentMethod.CollectConfig.Tipping;
          }
        }
        export namespace ConfirmPaymentIntent {
          export type ConfirmConfig = Stripe.Terminal.Reader.Action.ConfirmPaymentIntent.ConfirmConfig;
        }
        export namespace PrintContent {
          export type Image = Stripe.Terminal.Reader.Action.PrintContent.Image;
        }
        export namespace ProcessPaymentIntent {
          export type ProcessConfig = Stripe.Terminal.Reader.Action.ProcessPaymentIntent.ProcessConfig;
          export namespace ProcessConfig {
            export type Tipping = Stripe.Terminal.Reader.Action.ProcessPaymentIntent.ProcessConfig.Tipping;
          }
        }
        export namespace ProcessSetupIntent {
          export type ProcessConfig = Stripe.Terminal.Reader.Action.ProcessSetupIntent.ProcessConfig;
        }
        export namespace RefundPayment {
          export type Reason = Stripe.Terminal.Reader.Action.RefundPayment.Reason;
          export type RefundPaymentConfig = Stripe.Terminal.Reader.Action.RefundPayment.RefundPaymentConfig;
        }
        export namespace SetReaderDisplay {
          export type Cart = Stripe.Terminal.Reader.Action.SetReaderDisplay.Cart;
          export namespace Cart {
            export type LineItem = Stripe.Terminal.Reader.Action.SetReaderDisplay.Cart.LineItem;
          }
        }
      }
    }
  }
  export namespace TestHelpers {
    export type TestClock = Stripe.TestHelpers.TestClock;
    export type DeletedTestClock = Stripe.TestHelpers.DeletedTestClock;
    export type TestClockCreateParams = Stripe.TestHelpers.TestClockCreateParams;
    export type TestClockRetrieveParams = Stripe.TestHelpers.TestClockRetrieveParams;
    export type TestClockListParams = Stripe.TestHelpers.TestClockListParams;
    export type TestClockDeleteParams = Stripe.TestHelpers.TestClockDeleteParams;
    export type TestClockAdvanceParams = Stripe.TestHelpers.TestClockAdvanceParams;
    export type TestClockResource = Stripe.TestHelpers.TestClockResource;
    export namespace TestClock {
      export type Status = Stripe.TestHelpers.TestClock.Status;
      export type StatusDetails = Stripe.TestHelpers.TestClock.StatusDetails;
      export namespace StatusDetails {
        export type Advancing = Stripe.TestHelpers.TestClock.StatusDetails.Advancing;
      }
    }
  }
  export namespace Treasury {
    export type CreditReversal = Stripe.Treasury.CreditReversal;
    export type CreditReversalCreateParams = Stripe.Treasury.CreditReversalCreateParams;
    export type CreditReversalRetrieveParams = Stripe.Treasury.CreditReversalRetrieveParams;
    export type CreditReversalListParams = Stripe.Treasury.CreditReversalListParams;
    export type CreditReversalResource = Stripe.Treasury.CreditReversalResource;
    export type DebitReversal = Stripe.Treasury.DebitReversal;
    export type DebitReversalCreateParams = Stripe.Treasury.DebitReversalCreateParams;
    export type DebitReversalRetrieveParams = Stripe.Treasury.DebitReversalRetrieveParams;
    export type DebitReversalListParams = Stripe.Treasury.DebitReversalListParams;
    export type DebitReversalResource = Stripe.Treasury.DebitReversalResource;
    export type FinancialAccount = Stripe.Treasury.FinancialAccount;
    export type FinancialAccountCreateParams = Stripe.Treasury.FinancialAccountCreateParams;
    export type FinancialAccountRetrieveParams = Stripe.Treasury.FinancialAccountRetrieveParams;
    export type FinancialAccountUpdateParams = Stripe.Treasury.FinancialAccountUpdateParams;
    export type FinancialAccountListParams = Stripe.Treasury.FinancialAccountListParams;
    export type FinancialAccountCloseParams = Stripe.Treasury.FinancialAccountCloseParams;
    export type FinancialAccountRetrieveFeaturesParams = Stripe.Treasury.FinancialAccountRetrieveFeaturesParams;
    export type FinancialAccountUpdateFeaturesParams = Stripe.Treasury.FinancialAccountUpdateFeaturesParams;
    export type FinancialAccountResource = Stripe.Treasury.FinancialAccountResource;
    export type InboundTransfer = Stripe.Treasury.InboundTransfer;
    export type InboundTransferCreateParams = Stripe.Treasury.InboundTransferCreateParams;
    export type InboundTransferRetrieveParams = Stripe.Treasury.InboundTransferRetrieveParams;
    export type InboundTransferListParams = Stripe.Treasury.InboundTransferListParams;
    export type InboundTransferCancelParams = Stripe.Treasury.InboundTransferCancelParams;
    export type InboundTransferResource = Stripe.Treasury.InboundTransferResource;
    export type OutboundPayment = Stripe.Treasury.OutboundPayment;
    export type OutboundPaymentCreateParams = Stripe.Treasury.OutboundPaymentCreateParams;
    export type OutboundPaymentRetrieveParams = Stripe.Treasury.OutboundPaymentRetrieveParams;
    export type OutboundPaymentListParams = Stripe.Treasury.OutboundPaymentListParams;
    export type OutboundPaymentCancelParams = Stripe.Treasury.OutboundPaymentCancelParams;
    export type OutboundPaymentResource = Stripe.Treasury.OutboundPaymentResource;
    export type OutboundTransfer = Stripe.Treasury.OutboundTransfer;
    export type OutboundTransferCreateParams = Stripe.Treasury.OutboundTransferCreateParams;
    export type OutboundTransferRetrieveParams = Stripe.Treasury.OutboundTransferRetrieveParams;
    export type OutboundTransferListParams = Stripe.Treasury.OutboundTransferListParams;
    export type OutboundTransferCancelParams = Stripe.Treasury.OutboundTransferCancelParams;
    export type OutboundTransferResource = Stripe.Treasury.OutboundTransferResource;
    export type ReceivedCredit = Stripe.Treasury.ReceivedCredit;
    export type ReceivedCreditRetrieveParams = Stripe.Treasury.ReceivedCreditRetrieveParams;
    export type ReceivedCreditListParams = Stripe.Treasury.ReceivedCreditListParams;
    export type ReceivedCreditResource = Stripe.Treasury.ReceivedCreditResource;
    export type ReceivedDebit = Stripe.Treasury.ReceivedDebit;
    export type ReceivedDebitRetrieveParams = Stripe.Treasury.ReceivedDebitRetrieveParams;
    export type ReceivedDebitListParams = Stripe.Treasury.ReceivedDebitListParams;
    export type ReceivedDebitResource = Stripe.Treasury.ReceivedDebitResource;
    export type Transaction = Stripe.Treasury.Transaction;
    export type TransactionRetrieveParams = Stripe.Treasury.TransactionRetrieveParams;
    export type TransactionListParams = Stripe.Treasury.TransactionListParams;
    export type TransactionResource = Stripe.Treasury.TransactionResource;
    export type TransactionEntry = Stripe.Treasury.TransactionEntry;
    export type TransactionEntryRetrieveParams = Stripe.Treasury.TransactionEntryRetrieveParams;
    export type TransactionEntryListParams = Stripe.Treasury.TransactionEntryListParams;
    export type TransactionEntryResource = Stripe.Treasury.TransactionEntryResource;
    export type FinancialAccountFeatures = Stripe.Treasury.FinancialAccountFeatures;
    export namespace CreditReversal {
      export type Network = Stripe.Treasury.CreditReversal.Network;
      export type Status = Stripe.Treasury.CreditReversal.Status;
      export type StatusTransitions = Stripe.Treasury.CreditReversal.StatusTransitions;
    }
    export namespace DebitReversal {
      export type LinkedFlows = Stripe.Treasury.DebitReversal.LinkedFlows;
      export type Network = Stripe.Treasury.DebitReversal.Network;
      export type Status = Stripe.Treasury.DebitReversal.Status;
      export type StatusTransitions = Stripe.Treasury.DebitReversal.StatusTransitions;
    }
    export namespace FinancialAccountCreateParams {
      export type Features = Stripe.Treasury.FinancialAccountCreateParams.Features;
      export type PlatformRestrictions = Stripe.Treasury.FinancialAccountCreateParams.PlatformRestrictions;
      export namespace Features {
        export type CardIssuing = Stripe.Treasury.FinancialAccountCreateParams.Features.CardIssuing;
        export type DepositInsurance = Stripe.Treasury.FinancialAccountCreateParams.Features.DepositInsurance;
        export type FinancialAddresses = Stripe.Treasury.FinancialAccountCreateParams.Features.FinancialAddresses;
        export type InboundTransfers = Stripe.Treasury.FinancialAccountCreateParams.Features.InboundTransfers;
        export type IntraStripeFlows = Stripe.Treasury.FinancialAccountCreateParams.Features.IntraStripeFlows;
        export type OutboundPayments = Stripe.Treasury.FinancialAccountCreateParams.Features.OutboundPayments;
        export type OutboundTransfers = Stripe.Treasury.FinancialAccountCreateParams.Features.OutboundTransfers;
        export namespace FinancialAddresses {
          export type Aba = Stripe.Treasury.FinancialAccountCreateParams.Features.FinancialAddresses.Aba;
        }
        export namespace InboundTransfers {
          export type Ach = Stripe.Treasury.FinancialAccountCreateParams.Features.InboundTransfers.Ach;
        }
        export namespace OutboundPayments {
          export type Ach = Stripe.Treasury.FinancialAccountCreateParams.Features.OutboundPayments.Ach;
          export type UsDomesticWire = Stripe.Treasury.FinancialAccountCreateParams.Features.OutboundPayments.UsDomesticWire;
        }
        export namespace OutboundTransfers {
          export type Ach = Stripe.Treasury.FinancialAccountCreateParams.Features.OutboundTransfers.Ach;
          export type UsDomesticWire = Stripe.Treasury.FinancialAccountCreateParams.Features.OutboundTransfers.UsDomesticWire;
        }
      }
      export namespace PlatformRestrictions {
        export type InboundFlows = Stripe.Treasury.FinancialAccountCreateParams.PlatformRestrictions.InboundFlows;
        export type OutboundFlows = Stripe.Treasury.FinancialAccountCreateParams.PlatformRestrictions.OutboundFlows;
      }
    }
    export namespace FinancialAccount {
      export type ActiveFeature = Stripe.Treasury.FinancialAccount.ActiveFeature;
      export type Balance = Stripe.Treasury.FinancialAccount.Balance;
      export type FinancialAddress = Stripe.Treasury.FinancialAccount.FinancialAddress;
      export type PendingFeature = Stripe.Treasury.FinancialAccount.PendingFeature;
      export type PlatformRestrictions = Stripe.Treasury.FinancialAccount.PlatformRestrictions;
      export type RestrictedFeature = Stripe.Treasury.FinancialAccount.RestrictedFeature;
      export type Status = Stripe.Treasury.FinancialAccount.Status;
      export type StatusDetails = Stripe.Treasury.FinancialAccount.StatusDetails;
      export namespace FinancialAddress {
        export type Aba = Stripe.Treasury.FinancialAccount.FinancialAddress.Aba;
        export type SupportedNetwork = Stripe.Treasury.FinancialAccount.FinancialAddress.SupportedNetwork;
      }
      export namespace PlatformRestrictions {
        export type InboundFlows = Stripe.Treasury.FinancialAccount.PlatformRestrictions.InboundFlows;
        export type OutboundFlows = Stripe.Treasury.FinancialAccount.PlatformRestrictions.OutboundFlows;
      }
      export namespace StatusDetails {
        export type Closed = Stripe.Treasury.FinancialAccount.StatusDetails.Closed;
        export namespace Closed {
          export type Reason = Stripe.Treasury.FinancialAccount.StatusDetails.Closed.Reason;
        }
      }
    }
    export namespace InboundTransfer {
      export type FailureDetails = Stripe.Treasury.InboundTransfer.FailureDetails;
      export type LinkedFlows = Stripe.Treasury.InboundTransfer.LinkedFlows;
      export type OriginPaymentMethodDetails = Stripe.Treasury.InboundTransfer.OriginPaymentMethodDetails;
      export type Status = Stripe.Treasury.InboundTransfer.Status;
      export type StatusTransitions = Stripe.Treasury.InboundTransfer.StatusTransitions;
      export namespace FailureDetails {
        export type Code = Stripe.Treasury.InboundTransfer.FailureDetails.Code;
      }
      export namespace OriginPaymentMethodDetails {
        export type BillingDetails = Stripe.Treasury.InboundTransfer.OriginPaymentMethodDetails.BillingDetails;
        export type UsBankAccount = Stripe.Treasury.InboundTransfer.OriginPaymentMethodDetails.UsBankAccount;
        export namespace UsBankAccount {
          export type AccountHolderType = Stripe.Treasury.InboundTransfer.OriginPaymentMethodDetails.UsBankAccount.AccountHolderType;
          export type AccountType = Stripe.Treasury.InboundTransfer.OriginPaymentMethodDetails.UsBankAccount.AccountType;
        }
      }
    }
    export namespace OutboundPaymentCreateParams {
      export type DestinationPaymentMethodData = Stripe.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodData;
      export type DestinationPaymentMethodOptions = Stripe.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodOptions;
      export type EndUserDetails = Stripe.Treasury.OutboundPaymentCreateParams.EndUserDetails;
      export namespace DestinationPaymentMethodData {
        export type BillingDetails = Stripe.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodData.BillingDetails;
        export type Type = Stripe.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodData.Type;
        export type UsBankAccount = Stripe.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodData.UsBankAccount;
        export namespace UsBankAccount {
          export type AccountHolderType = Stripe.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodData.UsBankAccount.AccountHolderType;
          export type AccountType = Stripe.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodData.UsBankAccount.AccountType;
        }
      }
      export namespace DestinationPaymentMethodOptions {
        export type UsBankAccount = Stripe.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodOptions.UsBankAccount;
        export namespace UsBankAccount {
          export type Network = Stripe.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodOptions.UsBankAccount.Network;
        }
      }
    }
    export namespace OutboundPayment {
      export type DestinationPaymentMethodDetails = Stripe.Treasury.OutboundPayment.DestinationPaymentMethodDetails;
      export type EndUserDetails = Stripe.Treasury.OutboundPayment.EndUserDetails;
      export type ReturnedDetails = Stripe.Treasury.OutboundPayment.ReturnedDetails;
      export type Status = Stripe.Treasury.OutboundPayment.Status;
      export type StatusTransitions = Stripe.Treasury.OutboundPayment.StatusTransitions;
      export type TrackingDetails = Stripe.Treasury.OutboundPayment.TrackingDetails;
      export namespace DestinationPaymentMethodDetails {
        export type BillingDetails = Stripe.Treasury.OutboundPayment.DestinationPaymentMethodDetails.BillingDetails;
        export type FinancialAccount = Stripe.Treasury.OutboundPayment.DestinationPaymentMethodDetails.FinancialAccount;
        export type Type = Stripe.Treasury.OutboundPayment.DestinationPaymentMethodDetails.Type;
        export type UsBankAccount = Stripe.Treasury.OutboundPayment.DestinationPaymentMethodDetails.UsBankAccount;
        export namespace UsBankAccount {
          export type AccountHolderType = Stripe.Treasury.OutboundPayment.DestinationPaymentMethodDetails.UsBankAccount.AccountHolderType;
          export type AccountType = Stripe.Treasury.OutboundPayment.DestinationPaymentMethodDetails.UsBankAccount.AccountType;
          export type Network = Stripe.Treasury.OutboundPayment.DestinationPaymentMethodDetails.UsBankAccount.Network;
        }
      }
      export namespace ReturnedDetails {
        export type Code = Stripe.Treasury.OutboundPayment.ReturnedDetails.Code;
      }
      export namespace TrackingDetails {
        export type Ach = Stripe.Treasury.OutboundPayment.TrackingDetails.Ach;
        export type Type = Stripe.Treasury.OutboundPayment.TrackingDetails.Type;
        export type UsDomesticWire = Stripe.Treasury.OutboundPayment.TrackingDetails.UsDomesticWire;
      }
    }
    export namespace OutboundTransferCreateParams {
      export type DestinationPaymentMethodData = Stripe.Treasury.OutboundTransferCreateParams.DestinationPaymentMethodData;
      export type DestinationPaymentMethodOptions = Stripe.Treasury.OutboundTransferCreateParams.DestinationPaymentMethodOptions;
      export namespace DestinationPaymentMethodOptions {
        export type UsBankAccount = Stripe.Treasury.OutboundTransferCreateParams.DestinationPaymentMethodOptions.UsBankAccount;
        export namespace UsBankAccount {
          export type Network = Stripe.Treasury.OutboundTransferCreateParams.DestinationPaymentMethodOptions.UsBankAccount.Network;
        }
      }
    }
    export namespace OutboundTransfer {
      export type DestinationPaymentMethodDetails = Stripe.Treasury.OutboundTransfer.DestinationPaymentMethodDetails;
      export type ReturnedDetails = Stripe.Treasury.OutboundTransfer.ReturnedDetails;
      export type Status = Stripe.Treasury.OutboundTransfer.Status;
      export type StatusTransitions = Stripe.Treasury.OutboundTransfer.StatusTransitions;
      export type TrackingDetails = Stripe.Treasury.OutboundTransfer.TrackingDetails;
      export namespace DestinationPaymentMethodDetails {
        export type BillingDetails = Stripe.Treasury.OutboundTransfer.DestinationPaymentMethodDetails.BillingDetails;
        export type FinancialAccount = Stripe.Treasury.OutboundTransfer.DestinationPaymentMethodDetails.FinancialAccount;
        export type Type = Stripe.Treasury.OutboundTransfer.DestinationPaymentMethodDetails.Type;
        export type UsBankAccount = Stripe.Treasury.OutboundTransfer.DestinationPaymentMethodDetails.UsBankAccount;
        export namespace UsBankAccount {
          export type AccountHolderType = Stripe.Treasury.OutboundTransfer.DestinationPaymentMethodDetails.UsBankAccount.AccountHolderType;
          export type AccountType = Stripe.Treasury.OutboundTransfer.DestinationPaymentMethodDetails.UsBankAccount.AccountType;
          export type Network = Stripe.Treasury.OutboundTransfer.DestinationPaymentMethodDetails.UsBankAccount.Network;
        }
      }
      export namespace ReturnedDetails {
        export type Code = Stripe.Treasury.OutboundTransfer.ReturnedDetails.Code;
      }
      export namespace TrackingDetails {
        export type Ach = Stripe.Treasury.OutboundTransfer.TrackingDetails.Ach;
        export type Type = Stripe.Treasury.OutboundTransfer.TrackingDetails.Type;
        export type UsDomesticWire = Stripe.Treasury.OutboundTransfer.TrackingDetails.UsDomesticWire;
      }
    }
    export namespace ReceivedCredit {
      export type FailureCode = Stripe.Treasury.ReceivedCredit.FailureCode;
      export type InitiatingPaymentMethodDetails = Stripe.Treasury.ReceivedCredit.InitiatingPaymentMethodDetails;
      export type LinkedFlows = Stripe.Treasury.ReceivedCredit.LinkedFlows;
      export type Network = Stripe.Treasury.ReceivedCredit.Network;
      export type ReversalDetails = Stripe.Treasury.ReceivedCredit.ReversalDetails;
      export type Status = Stripe.Treasury.ReceivedCredit.Status;
      export namespace InitiatingPaymentMethodDetails {
        export type BillingDetails = Stripe.Treasury.ReceivedCredit.InitiatingPaymentMethodDetails.BillingDetails;
        export type FinancialAccount = Stripe.Treasury.ReceivedCredit.InitiatingPaymentMethodDetails.FinancialAccount;
        export type Type = Stripe.Treasury.ReceivedCredit.InitiatingPaymentMethodDetails.Type;
        export type UsBankAccount = Stripe.Treasury.ReceivedCredit.InitiatingPaymentMethodDetails.UsBankAccount;
      }
      export namespace LinkedFlows {
        export type SourceFlowDetails = Stripe.Treasury.ReceivedCredit.LinkedFlows.SourceFlowDetails;
        export namespace SourceFlowDetails {
          export type Type = Stripe.Treasury.ReceivedCredit.LinkedFlows.SourceFlowDetails.Type;
        }
      }
      export namespace ReversalDetails {
        export type RestrictedReason = Stripe.Treasury.ReceivedCredit.ReversalDetails.RestrictedReason;
      }
    }
    export namespace ReceivedDebit {
      export type FailureCode = Stripe.Treasury.ReceivedDebit.FailureCode;
      export type InitiatingPaymentMethodDetails = Stripe.Treasury.ReceivedDebit.InitiatingPaymentMethodDetails;
      export type LinkedFlows = Stripe.Treasury.ReceivedDebit.LinkedFlows;
      export type Network = Stripe.Treasury.ReceivedDebit.Network;
      export type ReversalDetails = Stripe.Treasury.ReceivedDebit.ReversalDetails;
      export type Status = Stripe.Treasury.ReceivedDebit.Status;
      export namespace InitiatingPaymentMethodDetails {
        export type BillingDetails = Stripe.Treasury.ReceivedDebit.InitiatingPaymentMethodDetails.BillingDetails;
        export type FinancialAccount = Stripe.Treasury.ReceivedDebit.InitiatingPaymentMethodDetails.FinancialAccount;
        export type Type = Stripe.Treasury.ReceivedDebit.InitiatingPaymentMethodDetails.Type;
        export type UsBankAccount = Stripe.Treasury.ReceivedDebit.InitiatingPaymentMethodDetails.UsBankAccount;
      }
      export namespace ReversalDetails {
        export type RestrictedReason = Stripe.Treasury.ReceivedDebit.ReversalDetails.RestrictedReason;
      }
    }
    export namespace Transaction {
      export type BalanceImpact = Stripe.Treasury.Transaction.BalanceImpact;
      export type FlowDetails = Stripe.Treasury.Transaction.FlowDetails;
      export type FlowType = Stripe.Treasury.Transaction.FlowType;
      export type Status = Stripe.Treasury.Transaction.Status;
      export type StatusTransitions = Stripe.Treasury.Transaction.StatusTransitions;
      export namespace FlowDetails {
        export type Type = Stripe.Treasury.Transaction.FlowDetails.Type;
      }
    }
    export namespace TransactionEntry {
      export type BalanceImpact = Stripe.Treasury.TransactionEntry.BalanceImpact;
      export type FlowDetails = Stripe.Treasury.TransactionEntry.FlowDetails;
      export type FlowType = Stripe.Treasury.TransactionEntry.FlowType;
      export type Type = Stripe.Treasury.TransactionEntry.Type;
      export namespace FlowDetails {
        export type Type = Stripe.Treasury.TransactionEntry.FlowDetails.Type;
      }
    }
    export namespace FinancialAccountFeatures {
      export type CardIssuing = Stripe.Treasury.FinancialAccountFeatures.CardIssuing;
      export type DepositInsurance = Stripe.Treasury.FinancialAccountFeatures.DepositInsurance;
      export type FinancialAddresses = Stripe.Treasury.FinancialAccountFeatures.FinancialAddresses;
      export type InboundTransfers = Stripe.Treasury.FinancialAccountFeatures.InboundTransfers;
      export type IntraStripeFlows = Stripe.Treasury.FinancialAccountFeatures.IntraStripeFlows;
      export type OutboundPayments = Stripe.Treasury.FinancialAccountFeatures.OutboundPayments;
      export type OutboundTransfers = Stripe.Treasury.FinancialAccountFeatures.OutboundTransfers;
      export namespace CardIssuing {
        export type Status = Stripe.Treasury.FinancialAccountFeatures.CardIssuing.Status;
        export type StatusDetail = Stripe.Treasury.FinancialAccountFeatures.CardIssuing.StatusDetail;
        export namespace StatusDetail {
          export type Code = Stripe.Treasury.FinancialAccountFeatures.CardIssuing.StatusDetail.Code;
          export type Resolution = Stripe.Treasury.FinancialAccountFeatures.CardIssuing.StatusDetail.Resolution;
          export type Restriction = Stripe.Treasury.FinancialAccountFeatures.CardIssuing.StatusDetail.Restriction;
        }
      }
      export namespace DepositInsurance {
        export type Status = Stripe.Treasury.FinancialAccountFeatures.DepositInsurance.Status;
        export type StatusDetail = Stripe.Treasury.FinancialAccountFeatures.DepositInsurance.StatusDetail;
        export namespace StatusDetail {
          export type Code = Stripe.Treasury.FinancialAccountFeatures.DepositInsurance.StatusDetail.Code;
          export type Resolution = Stripe.Treasury.FinancialAccountFeatures.DepositInsurance.StatusDetail.Resolution;
          export type Restriction = Stripe.Treasury.FinancialAccountFeatures.DepositInsurance.StatusDetail.Restriction;
        }
      }
      export namespace FinancialAddresses {
        export type Aba = Stripe.Treasury.FinancialAccountFeatures.FinancialAddresses.Aba;
        export namespace Aba {
          export type Status = Stripe.Treasury.FinancialAccountFeatures.FinancialAddresses.Aba.Status;
          export type StatusDetail = Stripe.Treasury.FinancialAccountFeatures.FinancialAddresses.Aba.StatusDetail;
          export namespace StatusDetail {
            export type Code = Stripe.Treasury.FinancialAccountFeatures.FinancialAddresses.Aba.StatusDetail.Code;
            export type Resolution = Stripe.Treasury.FinancialAccountFeatures.FinancialAddresses.Aba.StatusDetail.Resolution;
            export type Restriction = Stripe.Treasury.FinancialAccountFeatures.FinancialAddresses.Aba.StatusDetail.Restriction;
          }
        }
      }
      export namespace InboundTransfers {
        export type Ach = Stripe.Treasury.FinancialAccountFeatures.InboundTransfers.Ach;
        export namespace Ach {
          export type Status = Stripe.Treasury.FinancialAccountFeatures.InboundTransfers.Ach.Status;
          export type StatusDetail = Stripe.Treasury.FinancialAccountFeatures.InboundTransfers.Ach.StatusDetail;
          export namespace StatusDetail {
            export type Code = Stripe.Treasury.FinancialAccountFeatures.InboundTransfers.Ach.StatusDetail.Code;
            export type Resolution = Stripe.Treasury.FinancialAccountFeatures.InboundTransfers.Ach.StatusDetail.Resolution;
            export type Restriction = Stripe.Treasury.FinancialAccountFeatures.InboundTransfers.Ach.StatusDetail.Restriction;
          }
        }
      }
      export namespace IntraStripeFlows {
        export type Status = Stripe.Treasury.FinancialAccountFeatures.IntraStripeFlows.Status;
        export type StatusDetail = Stripe.Treasury.FinancialAccountFeatures.IntraStripeFlows.StatusDetail;
        export namespace StatusDetail {
          export type Code = Stripe.Treasury.FinancialAccountFeatures.IntraStripeFlows.StatusDetail.Code;
          export type Resolution = Stripe.Treasury.FinancialAccountFeatures.IntraStripeFlows.StatusDetail.Resolution;
          export type Restriction = Stripe.Treasury.FinancialAccountFeatures.IntraStripeFlows.StatusDetail.Restriction;
        }
      }
      export namespace OutboundPayments {
        export type Ach = Stripe.Treasury.FinancialAccountFeatures.OutboundPayments.Ach;
        export type UsDomesticWire = Stripe.Treasury.FinancialAccountFeatures.OutboundPayments.UsDomesticWire;
        export namespace Ach {
          export type Status = Stripe.Treasury.FinancialAccountFeatures.OutboundPayments.Ach.Status;
          export type StatusDetail = Stripe.Treasury.FinancialAccountFeatures.OutboundPayments.Ach.StatusDetail;
          export namespace StatusDetail {
            export type Code = Stripe.Treasury.FinancialAccountFeatures.OutboundPayments.Ach.StatusDetail.Code;
            export type Resolution = Stripe.Treasury.FinancialAccountFeatures.OutboundPayments.Ach.StatusDetail.Resolution;
            export type Restriction = Stripe.Treasury.FinancialAccountFeatures.OutboundPayments.Ach.StatusDetail.Restriction;
          }
        }
        export namespace UsDomesticWire {
          export type Status = Stripe.Treasury.FinancialAccountFeatures.OutboundPayments.UsDomesticWire.Status;
          export type StatusDetail = Stripe.Treasury.FinancialAccountFeatures.OutboundPayments.UsDomesticWire.StatusDetail;
          export namespace StatusDetail {
            export type Code = Stripe.Treasury.FinancialAccountFeatures.OutboundPayments.UsDomesticWire.StatusDetail.Code;
            export type Resolution = Stripe.Treasury.FinancialAccountFeatures.OutboundPayments.UsDomesticWire.StatusDetail.Resolution;
            export type Restriction = Stripe.Treasury.FinancialAccountFeatures.OutboundPayments.UsDomesticWire.StatusDetail.Restriction;
          }
        }
      }
      export namespace OutboundTransfers {
        export type Ach = Stripe.Treasury.FinancialAccountFeatures.OutboundTransfers.Ach;
        export type UsDomesticWire = Stripe.Treasury.FinancialAccountFeatures.OutboundTransfers.UsDomesticWire;
        export namespace Ach {
          export type Status = Stripe.Treasury.FinancialAccountFeatures.OutboundTransfers.Ach.Status;
          export type StatusDetail = Stripe.Treasury.FinancialAccountFeatures.OutboundTransfers.Ach.StatusDetail;
          export namespace StatusDetail {
            export type Code = Stripe.Treasury.FinancialAccountFeatures.OutboundTransfers.Ach.StatusDetail.Code;
            export type Resolution = Stripe.Treasury.FinancialAccountFeatures.OutboundTransfers.Ach.StatusDetail.Resolution;
            export type Restriction = Stripe.Treasury.FinancialAccountFeatures.OutboundTransfers.Ach.StatusDetail.Restriction;
          }
        }
        export namespace UsDomesticWire {
          export type Status = Stripe.Treasury.FinancialAccountFeatures.OutboundTransfers.UsDomesticWire.Status;
          export type StatusDetail = Stripe.Treasury.FinancialAccountFeatures.OutboundTransfers.UsDomesticWire.StatusDetail;
          export namespace StatusDetail {
            export type Code = Stripe.Treasury.FinancialAccountFeatures.OutboundTransfers.UsDomesticWire.StatusDetail.Code;
            export type Resolution = Stripe.Treasury.FinancialAccountFeatures.OutboundTransfers.UsDomesticWire.StatusDetail.Resolution;
            export type Restriction = Stripe.Treasury.FinancialAccountFeatures.OutboundTransfers.UsDomesticWire.StatusDetail.Restriction;
          }
        }
      }
    }
  }
  export namespace V2 {
    export type DeletedObject = Stripe.V2.DeletedObject;
    export namespace Billing {
      export type MeterEvent = Stripe.V2.Billing.MeterEvent;
      export type MeterEventCreateParams = Stripe.V2.Billing.MeterEventCreateParams;
      export type MeterEventResource = Stripe.V2.Billing.MeterEventResource;
      export type MeterEventAdjustment = Stripe.V2.Billing.MeterEventAdjustment;
      export type MeterEventAdjustmentCreateParams = Stripe.V2.Billing.MeterEventAdjustmentCreateParams;
      export type MeterEventAdjustmentResource = Stripe.V2.Billing.MeterEventAdjustmentResource;
      export type MeterEventSession = Stripe.V2.Billing.MeterEventSession;
      export type MeterEventSessionCreateParams = Stripe.V2.Billing.MeterEventSessionCreateParams;
      export type MeterEventSessionResource = Stripe.V2.Billing.MeterEventSessionResource;
      export namespace MeterEventAdjustmentCreateParams {
        export type Cancel = Stripe.V2.Billing.MeterEventAdjustmentCreateParams.Cancel;
      }
      export namespace MeterEventAdjustment {
        export type Cancel = Stripe.V2.Billing.MeterEventAdjustment.Cancel;
        export type Status = Stripe.V2.Billing.MeterEventAdjustment.Status;
      }
    }
    export namespace Core {
      export type Account = Stripe.V2.Core.Account;
      export type AccountCreateParams = Stripe.V2.Core.AccountCreateParams;
      export type AccountRetrieveParams = Stripe.V2.Core.AccountRetrieveParams;
      export type AccountUpdateParams = Stripe.V2.Core.AccountUpdateParams;
      export type AccountListParams = Stripe.V2.Core.AccountListParams;
      export type AccountCloseParams = Stripe.V2.Core.AccountCloseParams;
      export type AccountResource = Stripe.V2.Core.AccountResource;
      export type AccountLink = Stripe.V2.Core.AccountLink;
      export type AccountLinkCreateParams = Stripe.V2.Core.AccountLinkCreateParams;
      export type AccountLinkResource = Stripe.V2.Core.AccountLinkResource;
      export type AccountToken = Stripe.V2.Core.AccountToken;
      export type AccountTokenCreateParams = Stripe.V2.Core.AccountTokenCreateParams;
      export type AccountTokenRetrieveParams = Stripe.V2.Core.AccountTokenRetrieveParams;
      export type AccountTokenResource = Stripe.V2.Core.AccountTokenResource;
      export type Event = Stripe.V2.Core.Event;
      export type EventBase = Stripe.V2.Core.EventBase;
      export type EventNotification = Stripe.V2.Core.EventNotification;
      export type EventRetrieveParams = Stripe.V2.Core.EventRetrieveParams;
      export type EventListParams = Stripe.V2.Core.EventListParams;
      export type EventResource = Stripe.V2.Core.EventResource;
      export type EventDestination = Stripe.V2.Core.EventDestination;
      export type EventDestinationCreateParams = Stripe.V2.Core.EventDestinationCreateParams;
      export type EventDestinationRetrieveParams = Stripe.V2.Core.EventDestinationRetrieveParams;
      export type EventDestinationUpdateParams = Stripe.V2.Core.EventDestinationUpdateParams;
      export type EventDestinationListParams = Stripe.V2.Core.EventDestinationListParams;
      export type EventDestinationDeleteParams = Stripe.V2.Core.EventDestinationDeleteParams;
      export type EventDestinationDisableParams = Stripe.V2.Core.EventDestinationDisableParams;
      export type EventDestinationEnableParams = Stripe.V2.Core.EventDestinationEnableParams;
      export type EventDestinationPingParams = Stripe.V2.Core.EventDestinationPingParams;
      export type EventDestinationResource = Stripe.V2.Core.EventDestinationResource;
      export type AccountPersonToken = Stripe.V2.Core.AccountPersonToken;
      export type AccountPerson = Stripe.V2.Core.AccountPerson;
      export namespace AccountCreateParams {
        export type Configuration = Stripe.V2.Core.AccountCreateParams.Configuration;
        export type Dashboard = Stripe.V2.Core.AccountCreateParams.Dashboard;
        export type Defaults = Stripe.V2.Core.AccountCreateParams.Defaults;
        export type Identity = Stripe.V2.Core.AccountCreateParams.Identity;
        export type Include = Stripe.V2.Core.AccountCreateParams.Include;
        export namespace Configuration {
          export type Customer = Stripe.V2.Core.AccountCreateParams.Configuration.Customer;
          export type Merchant = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant;
          export type Recipient = Stripe.V2.Core.AccountCreateParams.Configuration.Recipient;
          export namespace Customer {
            export type AutomaticIndirectTax = Stripe.V2.Core.AccountCreateParams.Configuration.Customer.AutomaticIndirectTax;
            export type Billing = Stripe.V2.Core.AccountCreateParams.Configuration.Customer.Billing;
            export type Capabilities = Stripe.V2.Core.AccountCreateParams.Configuration.Customer.Capabilities;
            export type Shipping = Stripe.V2.Core.AccountCreateParams.Configuration.Customer.Shipping;
            export namespace AutomaticIndirectTax {
              export type Exempt = Stripe.V2.Core.AccountCreateParams.Configuration.Customer.AutomaticIndirectTax.Exempt;
            }
            export namespace Billing {
              export type Invoice = Stripe.V2.Core.AccountCreateParams.Configuration.Customer.Billing.Invoice;
              export namespace Invoice {
                export type CustomField = Stripe.V2.Core.AccountCreateParams.Configuration.Customer.Billing.Invoice.CustomField;
                export type Rendering = Stripe.V2.Core.AccountCreateParams.Configuration.Customer.Billing.Invoice.Rendering;
                export namespace Rendering {
                  export type AmountTaxDisplay = Stripe.V2.Core.AccountCreateParams.Configuration.Customer.Billing.Invoice.Rendering.AmountTaxDisplay;
                }
              }
            }
            export namespace Capabilities {
              export type AutomaticIndirectTax = Stripe.V2.Core.AccountCreateParams.Configuration.Customer.Capabilities.AutomaticIndirectTax;
            }
          }
          export namespace Merchant {
            export type BacsDebitPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.BacsDebitPayments;
            export type Branding = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Branding;
            export type Capabilities = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities;
            export type CardPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.CardPayments;
            export type KonbiniPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.KonbiniPayments;
            export type ScriptStatementDescriptor = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.ScriptStatementDescriptor;
            export type StatementDescriptor = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.StatementDescriptor;
            export type Support = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Support;
            export namespace Capabilities {
              export type AchDebitPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.AchDebitPayments;
              export type AcssDebitPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.AcssDebitPayments;
              export type AffirmPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.AffirmPayments;
              export type AfterpayClearpayPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.AfterpayClearpayPayments;
              export type AlmaPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.AlmaPayments;
              export type AmazonPayPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.AmazonPayPayments;
              export type AuBecsDebitPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.AuBecsDebitPayments;
              export type BacsDebitPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.BacsDebitPayments;
              export type BancontactPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.BancontactPayments;
              export type BlikPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.BlikPayments;
              export type BoletoPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.BoletoPayments;
              export type CardPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.CardPayments;
              export type CartesBancairesPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.CartesBancairesPayments;
              export type CashappPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.CashappPayments;
              export type EpsPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.EpsPayments;
              export type FpxPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.FpxPayments;
              export type GbBankTransferPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.GbBankTransferPayments;
              export type GrabpayPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.GrabpayPayments;
              export type IdealPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.IdealPayments;
              export type JcbPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.JcbPayments;
              export type JpBankTransferPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.JpBankTransferPayments;
              export type KakaoPayPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.KakaoPayPayments;
              export type KlarnaPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.KlarnaPayments;
              export type KonbiniPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.KonbiniPayments;
              export type KrCardPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.KrCardPayments;
              export type LinkPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.LinkPayments;
              export type MobilepayPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.MobilepayPayments;
              export type MultibancoPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.MultibancoPayments;
              export type MxBankTransferPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.MxBankTransferPayments;
              export type NaverPayPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.NaverPayPayments;
              export type OxxoPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.OxxoPayments;
              export type P24Payments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.P24Payments;
              export type PayByBankPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.PayByBankPayments;
              export type PaycoPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.PaycoPayments;
              export type PaynowPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.PaynowPayments;
              export type PromptpayPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.PromptpayPayments;
              export type RevolutPayPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.RevolutPayPayments;
              export type SamsungPayPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.SamsungPayPayments;
              export type SepaBankTransferPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.SepaBankTransferPayments;
              export type SepaDebitPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.SepaDebitPayments;
              export type SunbitPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.SunbitPayments;
              export type SwishPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.SwishPayments;
              export type TwintPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.TwintPayments;
              export type UsBankTransferPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.UsBankTransferPayments;
              export type ZipPayments = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Capabilities.ZipPayments;
            }
            export namespace CardPayments {
              export type DeclineOn = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.CardPayments.DeclineOn;
            }
            export namespace KonbiniPayments {
              export type Support = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.KonbiniPayments.Support;
              export namespace Support {
                export type Hours = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.KonbiniPayments.Support.Hours;
              }
            }
            export namespace ScriptStatementDescriptor {
              export type Kana = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.ScriptStatementDescriptor.Kana;
              export type Kanji = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.ScriptStatementDescriptor.Kanji;
            }
            export namespace Support {
              export type Address = Stripe.V2.Core.AccountCreateParams.Configuration.Merchant.Support.Address;
            }
          }
          export namespace Recipient {
            export type Capabilities = Stripe.V2.Core.AccountCreateParams.Configuration.Recipient.Capabilities;
            export namespace Capabilities {
              export type StripeBalance = Stripe.V2.Core.AccountCreateParams.Configuration.Recipient.Capabilities.StripeBalance;
              export namespace StripeBalance {
                export type StripeTransfers = Stripe.V2.Core.AccountCreateParams.Configuration.Recipient.Capabilities.StripeBalance.StripeTransfers;
              }
            }
          }
        }
        export namespace Defaults {
          export type Locale = Stripe.V2.Core.AccountCreateParams.Defaults.Locale;
          export type Profile = Stripe.V2.Core.AccountCreateParams.Defaults.Profile;
          export type Responsibilities = Stripe.V2.Core.AccountCreateParams.Defaults.Responsibilities;
          export namespace Responsibilities {
            export type FeesCollector = Stripe.V2.Core.AccountCreateParams.Defaults.Responsibilities.FeesCollector;
            export type LossesCollector = Stripe.V2.Core.AccountCreateParams.Defaults.Responsibilities.LossesCollector;
          }
        }
        export namespace Identity {
          export type Attestations = Stripe.V2.Core.AccountCreateParams.Identity.Attestations;
          export type BusinessDetails = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails;
          export type EntityType = Stripe.V2.Core.AccountCreateParams.Identity.EntityType;
          export type Individual = Stripe.V2.Core.AccountCreateParams.Identity.Individual;
          export namespace Attestations {
            export type DirectorshipDeclaration = Stripe.V2.Core.AccountCreateParams.Identity.Attestations.DirectorshipDeclaration;
            export type OwnershipDeclaration = Stripe.V2.Core.AccountCreateParams.Identity.Attestations.OwnershipDeclaration;
            export type PersonsProvided = Stripe.V2.Core.AccountCreateParams.Identity.Attestations.PersonsProvided;
            export type RepresentativeDeclaration = Stripe.V2.Core.AccountCreateParams.Identity.Attestations.RepresentativeDeclaration;
            export type TermsOfService = Stripe.V2.Core.AccountCreateParams.Identity.Attestations.TermsOfService;
            export namespace PersonsProvided {
              export type OwnershipExemptionReason = Stripe.V2.Core.AccountCreateParams.Identity.Attestations.PersonsProvided.OwnershipExemptionReason;
            }
            export namespace TermsOfService {
              export type Account = Stripe.V2.Core.AccountCreateParams.Identity.Attestations.TermsOfService.Account;
            }
          }
          export namespace BusinessDetails {
            export type Address = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.Address;
            export type AnnualRevenue = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.AnnualRevenue;
            export type Documents = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents;
            export type IdNumber = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.IdNumber;
            export type MonthlyEstimatedRevenue = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.MonthlyEstimatedRevenue;
            export type RegistrationDate = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.RegistrationDate;
            export type ScriptAddresses = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.ScriptAddresses;
            export type ScriptNames = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.ScriptNames;
            export type Structure = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.Structure;
            export namespace Documents {
              export type BankAccountOwnershipVerification = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.BankAccountOwnershipVerification;
              export type CompanyLicense = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.CompanyLicense;
              export type CompanyMemorandumOfAssociation = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.CompanyMemorandumOfAssociation;
              export type CompanyMinisterialDecree = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.CompanyMinisterialDecree;
              export type CompanyRegistrationVerification = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.CompanyRegistrationVerification;
              export type CompanyTaxIdVerification = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.CompanyTaxIdVerification;
              export type PrimaryVerification = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.PrimaryVerification;
              export type ProofOfAddress = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.ProofOfAddress;
              export type ProofOfRegistration = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.ProofOfRegistration;
              export type ProofOfUltimateBeneficialOwnership = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.ProofOfUltimateBeneficialOwnership;
              export namespace PrimaryVerification {
                export type FrontBack = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.PrimaryVerification.FrontBack;
              }
              export namespace ProofOfRegistration {
                export type Signer = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.ProofOfRegistration.Signer;
              }
              export namespace ProofOfUltimateBeneficialOwnership {
                export type Signer = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.Documents.ProofOfUltimateBeneficialOwnership.Signer;
              }
            }
            export namespace IdNumber {
              export type Type = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.IdNumber.Type;
            }
            export namespace ScriptAddresses {
              export type Kana = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.ScriptAddresses.Kana;
              export type Kanji = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.ScriptAddresses.Kanji;
            }
            export namespace ScriptNames {
              export type Kana = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.ScriptNames.Kana;
              export type Kanji = Stripe.V2.Core.AccountCreateParams.Identity.BusinessDetails.ScriptNames.Kanji;
            }
          }
          export namespace Individual {
            export type AdditionalAddress = Stripe.V2.Core.AccountCreateParams.Identity.Individual.AdditionalAddress;
            export type AdditionalName = Stripe.V2.Core.AccountCreateParams.Identity.Individual.AdditionalName;
            export type Address = Stripe.V2.Core.AccountCreateParams.Identity.Individual.Address;
            export type DateOfBirth = Stripe.V2.Core.AccountCreateParams.Identity.Individual.DateOfBirth;
            export type Documents = Stripe.V2.Core.AccountCreateParams.Identity.Individual.Documents;
            export type IdNumber = Stripe.V2.Core.AccountCreateParams.Identity.Individual.IdNumber;
            export type LegalGender = Stripe.V2.Core.AccountCreateParams.Identity.Individual.LegalGender;
            export type PoliticalExposure = Stripe.V2.Core.AccountCreateParams.Identity.Individual.PoliticalExposure;
            export type Relationship = Stripe.V2.Core.AccountCreateParams.Identity.Individual.Relationship;
            export type ScriptAddresses = Stripe.V2.Core.AccountCreateParams.Identity.Individual.ScriptAddresses;
            export type ScriptNames = Stripe.V2.Core.AccountCreateParams.Identity.Individual.ScriptNames;
            export namespace AdditionalName {
              export type Purpose = Stripe.V2.Core.AccountCreateParams.Identity.Individual.AdditionalName.Purpose;
            }
            export namespace Documents {
              export type CompanyAuthorization = Stripe.V2.Core.AccountCreateParams.Identity.Individual.Documents.CompanyAuthorization;
              export type Passport = Stripe.V2.Core.AccountCreateParams.Identity.Individual.Documents.Passport;
              export type PrimaryVerification = Stripe.V2.Core.AccountCreateParams.Identity.Individual.Documents.PrimaryVerification;
              export type SecondaryVerification = Stripe.V2.Core.AccountCreateParams.Identity.Individual.Documents.SecondaryVerification;
              export type Visa = Stripe.V2.Core.AccountCreateParams.Identity.Individual.Documents.Visa;
              export namespace PrimaryVerification {
                export type FrontBack = Stripe.V2.Core.AccountCreateParams.Identity.Individual.Documents.PrimaryVerification.FrontBack;
              }
              export namespace SecondaryVerification {
                export type FrontBack = Stripe.V2.Core.AccountCreateParams.Identity.Individual.Documents.SecondaryVerification.FrontBack;
              }
            }
            export namespace IdNumber {
              export type Type = Stripe.V2.Core.AccountCreateParams.Identity.Individual.IdNumber.Type;
            }
            export namespace ScriptAddresses {
              export type Kana = Stripe.V2.Core.AccountCreateParams.Identity.Individual.ScriptAddresses.Kana;
              export type Kanji = Stripe.V2.Core.AccountCreateParams.Identity.Individual.ScriptAddresses.Kanji;
            }
            export namespace ScriptNames {
              export type Kana = Stripe.V2.Core.AccountCreateParams.Identity.Individual.ScriptNames.Kana;
              export type Kanji = Stripe.V2.Core.AccountCreateParams.Identity.Individual.ScriptNames.Kanji;
            }
          }
        }
      }
      export namespace Account {
        export type AppliedConfiguration = Stripe.V2.Core.Account.AppliedConfiguration;
        export type Configuration = Stripe.V2.Core.Account.Configuration;
        export type Dashboard = Stripe.V2.Core.Account.Dashboard;
        export type Defaults = Stripe.V2.Core.Account.Defaults;
        export type FutureRequirements = Stripe.V2.Core.Account.FutureRequirements;
        export type Identity = Stripe.V2.Core.Account.Identity;
        export type Requirements = Stripe.V2.Core.Account.Requirements;
        export namespace Configuration {
          export type Customer = Stripe.V2.Core.Account.Configuration.Customer;
          export type Merchant = Stripe.V2.Core.Account.Configuration.Merchant;
          export type Recipient = Stripe.V2.Core.Account.Configuration.Recipient;
          export namespace Customer {
            export type AutomaticIndirectTax = Stripe.V2.Core.Account.Configuration.Customer.AutomaticIndirectTax;
            export type Billing = Stripe.V2.Core.Account.Configuration.Customer.Billing;
            export type Capabilities = Stripe.V2.Core.Account.Configuration.Customer.Capabilities;
            export type Shipping = Stripe.V2.Core.Account.Configuration.Customer.Shipping;
            export namespace AutomaticIndirectTax {
              export type Exempt = Stripe.V2.Core.Account.Configuration.Customer.AutomaticIndirectTax.Exempt;
              export type Location = Stripe.V2.Core.Account.Configuration.Customer.AutomaticIndirectTax.Location;
              export type LocationSource = Stripe.V2.Core.Account.Configuration.Customer.AutomaticIndirectTax.LocationSource;
            }
            export namespace Billing {
              export type Invoice = Stripe.V2.Core.Account.Configuration.Customer.Billing.Invoice;
              export namespace Invoice {
                export type CustomField = Stripe.V2.Core.Account.Configuration.Customer.Billing.Invoice.CustomField;
                export type Rendering = Stripe.V2.Core.Account.Configuration.Customer.Billing.Invoice.Rendering;
                export namespace Rendering {
                  export type AmountTaxDisplay = Stripe.V2.Core.Account.Configuration.Customer.Billing.Invoice.Rendering.AmountTaxDisplay;
                }
              }
            }
            export namespace Capabilities {
              export type AutomaticIndirectTax = Stripe.V2.Core.Account.Configuration.Customer.Capabilities.AutomaticIndirectTax;
              export namespace AutomaticIndirectTax {
                export type Status = Stripe.V2.Core.Account.Configuration.Customer.Capabilities.AutomaticIndirectTax.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Customer.Capabilities.AutomaticIndirectTax.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Customer.Capabilities.AutomaticIndirectTax.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Customer.Capabilities.AutomaticIndirectTax.StatusDetail.Resolution;
                }
              }
            }
            export namespace Shipping {
              export type Address = Stripe.V2.Core.Account.Configuration.Customer.Shipping.Address;
            }
          }
          export namespace Merchant {
            export type BacsDebitPayments = Stripe.V2.Core.Account.Configuration.Merchant.BacsDebitPayments;
            export type Branding = Stripe.V2.Core.Account.Configuration.Merchant.Branding;
            export type Capabilities = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities;
            export type CardPayments = Stripe.V2.Core.Account.Configuration.Merchant.CardPayments;
            export type KonbiniPayments = Stripe.V2.Core.Account.Configuration.Merchant.KonbiniPayments;
            export type ScriptStatementDescriptor = Stripe.V2.Core.Account.Configuration.Merchant.ScriptStatementDescriptor;
            export type SepaDebitPayments = Stripe.V2.Core.Account.Configuration.Merchant.SepaDebitPayments;
            export type StatementDescriptor = Stripe.V2.Core.Account.Configuration.Merchant.StatementDescriptor;
            export type Support = Stripe.V2.Core.Account.Configuration.Merchant.Support;
            export namespace Capabilities {
              export type AchDebitPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AchDebitPayments;
              export type AcssDebitPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AcssDebitPayments;
              export type AffirmPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AffirmPayments;
              export type AfterpayClearpayPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AfterpayClearpayPayments;
              export type AlmaPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AlmaPayments;
              export type AmazonPayPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AmazonPayPayments;
              export type AuBecsDebitPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AuBecsDebitPayments;
              export type BacsDebitPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BacsDebitPayments;
              export type BancontactPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BancontactPayments;
              export type BlikPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BlikPayments;
              export type BoletoPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BoletoPayments;
              export type CardPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.CardPayments;
              export type CartesBancairesPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.CartesBancairesPayments;
              export type CashappPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.CashappPayments;
              export type EpsPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.EpsPayments;
              export type FpxPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.FpxPayments;
              export type GbBankTransferPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.GbBankTransferPayments;
              export type GrabpayPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.GrabpayPayments;
              export type IdealPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.IdealPayments;
              export type JcbPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.JcbPayments;
              export type JpBankTransferPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.JpBankTransferPayments;
              export type KakaoPayPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KakaoPayPayments;
              export type KlarnaPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KlarnaPayments;
              export type KonbiniPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KonbiniPayments;
              export type KrCardPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KrCardPayments;
              export type LinkPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.LinkPayments;
              export type MobilepayPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.MobilepayPayments;
              export type MultibancoPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.MultibancoPayments;
              export type MxBankTransferPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.MxBankTransferPayments;
              export type NaverPayPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.NaverPayPayments;
              export type OxxoPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.OxxoPayments;
              export type P24Payments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.P24Payments;
              export type PayByBankPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PayByBankPayments;
              export type PaycoPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PaycoPayments;
              export type PaynowPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PaynowPayments;
              export type PromptpayPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PromptpayPayments;
              export type RevolutPayPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.RevolutPayPayments;
              export type SamsungPayPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SamsungPayPayments;
              export type SepaBankTransferPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SepaBankTransferPayments;
              export type SepaDebitPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SepaDebitPayments;
              export type StripeBalance = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.StripeBalance;
              export type SunbitPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SunbitPayments;
              export type SwishPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SwishPayments;
              export type TwintPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.TwintPayments;
              export type UsBankTransferPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.UsBankTransferPayments;
              export type ZipPayments = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.ZipPayments;
              export namespace AchDebitPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AchDebitPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AchDebitPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AchDebitPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AchDebitPayments.StatusDetail.Resolution;
                }
              }
              export namespace AcssDebitPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AcssDebitPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AcssDebitPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AcssDebitPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AcssDebitPayments.StatusDetail.Resolution;
                }
              }
              export namespace AffirmPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AffirmPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AffirmPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AffirmPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AffirmPayments.StatusDetail.Resolution;
                }
              }
              export namespace AfterpayClearpayPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AfterpayClearpayPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AfterpayClearpayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AfterpayClearpayPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AfterpayClearpayPayments.StatusDetail.Resolution;
                }
              }
              export namespace AlmaPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AlmaPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AlmaPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AlmaPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AlmaPayments.StatusDetail.Resolution;
                }
              }
              export namespace AmazonPayPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AmazonPayPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AmazonPayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AmazonPayPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AmazonPayPayments.StatusDetail.Resolution;
                }
              }
              export namespace AuBecsDebitPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AuBecsDebitPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AuBecsDebitPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AuBecsDebitPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.AuBecsDebitPayments.StatusDetail.Resolution;
                }
              }
              export namespace BacsDebitPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BacsDebitPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BacsDebitPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BacsDebitPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BacsDebitPayments.StatusDetail.Resolution;
                }
              }
              export namespace BancontactPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BancontactPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BancontactPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BancontactPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BancontactPayments.StatusDetail.Resolution;
                }
              }
              export namespace BlikPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BlikPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BlikPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BlikPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BlikPayments.StatusDetail.Resolution;
                }
              }
              export namespace BoletoPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BoletoPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BoletoPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BoletoPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.BoletoPayments.StatusDetail.Resolution;
                }
              }
              export namespace CardPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.CardPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.CardPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.CardPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.CardPayments.StatusDetail.Resolution;
                }
              }
              export namespace CartesBancairesPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.CartesBancairesPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.CartesBancairesPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.CartesBancairesPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.CartesBancairesPayments.StatusDetail.Resolution;
                }
              }
              export namespace CashappPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.CashappPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.CashappPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.CashappPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.CashappPayments.StatusDetail.Resolution;
                }
              }
              export namespace EpsPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.EpsPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.EpsPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.EpsPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.EpsPayments.StatusDetail.Resolution;
                }
              }
              export namespace FpxPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.FpxPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.FpxPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.FpxPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.FpxPayments.StatusDetail.Resolution;
                }
              }
              export namespace GbBankTransferPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.GbBankTransferPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.GbBankTransferPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.GbBankTransferPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.GbBankTransferPayments.StatusDetail.Resolution;
                }
              }
              export namespace GrabpayPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.GrabpayPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.GrabpayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.GrabpayPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.GrabpayPayments.StatusDetail.Resolution;
                }
              }
              export namespace IdealPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.IdealPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.IdealPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.IdealPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.IdealPayments.StatusDetail.Resolution;
                }
              }
              export namespace JcbPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.JcbPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.JcbPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.JcbPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.JcbPayments.StatusDetail.Resolution;
                }
              }
              export namespace JpBankTransferPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.JpBankTransferPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.JpBankTransferPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.JpBankTransferPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.JpBankTransferPayments.StatusDetail.Resolution;
                }
              }
              export namespace KakaoPayPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KakaoPayPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KakaoPayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KakaoPayPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KakaoPayPayments.StatusDetail.Resolution;
                }
              }
              export namespace KlarnaPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KlarnaPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KlarnaPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KlarnaPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KlarnaPayments.StatusDetail.Resolution;
                }
              }
              export namespace KonbiniPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KonbiniPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KonbiniPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KonbiniPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KonbiniPayments.StatusDetail.Resolution;
                }
              }
              export namespace KrCardPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KrCardPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KrCardPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KrCardPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.KrCardPayments.StatusDetail.Resolution;
                }
              }
              export namespace LinkPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.LinkPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.LinkPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.LinkPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.LinkPayments.StatusDetail.Resolution;
                }
              }
              export namespace MobilepayPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.MobilepayPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.MobilepayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.MobilepayPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.MobilepayPayments.StatusDetail.Resolution;
                }
              }
              export namespace MultibancoPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.MultibancoPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.MultibancoPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.MultibancoPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.MultibancoPayments.StatusDetail.Resolution;
                }
              }
              export namespace MxBankTransferPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.MxBankTransferPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.MxBankTransferPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.MxBankTransferPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.MxBankTransferPayments.StatusDetail.Resolution;
                }
              }
              export namespace NaverPayPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.NaverPayPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.NaverPayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.NaverPayPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.NaverPayPayments.StatusDetail.Resolution;
                }
              }
              export namespace OxxoPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.OxxoPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.OxxoPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.OxxoPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.OxxoPayments.StatusDetail.Resolution;
                }
              }
              export namespace P24Payments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.P24Payments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.P24Payments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.P24Payments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.P24Payments.StatusDetail.Resolution;
                }
              }
              export namespace PayByBankPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PayByBankPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PayByBankPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PayByBankPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PayByBankPayments.StatusDetail.Resolution;
                }
              }
              export namespace PaycoPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PaycoPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PaycoPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PaycoPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PaycoPayments.StatusDetail.Resolution;
                }
              }
              export namespace PaynowPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PaynowPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PaynowPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PaynowPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PaynowPayments.StatusDetail.Resolution;
                }
              }
              export namespace PromptpayPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PromptpayPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PromptpayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PromptpayPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.PromptpayPayments.StatusDetail.Resolution;
                }
              }
              export namespace RevolutPayPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.RevolutPayPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.RevolutPayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.RevolutPayPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.RevolutPayPayments.StatusDetail.Resolution;
                }
              }
              export namespace SamsungPayPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SamsungPayPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SamsungPayPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SamsungPayPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SamsungPayPayments.StatusDetail.Resolution;
                }
              }
              export namespace SepaBankTransferPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SepaBankTransferPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SepaBankTransferPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SepaBankTransferPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SepaBankTransferPayments.StatusDetail.Resolution;
                }
              }
              export namespace SepaDebitPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SepaDebitPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SepaDebitPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SepaDebitPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SepaDebitPayments.StatusDetail.Resolution;
                }
              }
              export namespace StripeBalance {
                export type Payouts = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.StripeBalance.Payouts;
                export namespace Payouts {
                  export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.StripeBalance.Payouts.Status;
                  export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.StripeBalance.Payouts.StatusDetail;
                  export namespace StatusDetail {
                    export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.StripeBalance.Payouts.StatusDetail.Code;
                    export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.StripeBalance.Payouts.StatusDetail.Resolution;
                  }
                }
              }
              export namespace SunbitPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SunbitPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SunbitPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SunbitPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SunbitPayments.StatusDetail.Resolution;
                }
              }
              export namespace SwishPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SwishPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SwishPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SwishPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.SwishPayments.StatusDetail.Resolution;
                }
              }
              export namespace TwintPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.TwintPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.TwintPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.TwintPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.TwintPayments.StatusDetail.Resolution;
                }
              }
              export namespace UsBankTransferPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.UsBankTransferPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.UsBankTransferPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.UsBankTransferPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.UsBankTransferPayments.StatusDetail.Resolution;
                }
              }
              export namespace ZipPayments {
                export type Status = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.ZipPayments.Status;
                export type StatusDetail = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.ZipPayments.StatusDetail;
                export namespace StatusDetail {
                  export type Code = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.ZipPayments.StatusDetail.Code;
                  export type Resolution = Stripe.V2.Core.Account.Configuration.Merchant.Capabilities.ZipPayments.StatusDetail.Resolution;
                }
              }
            }
            export namespace CardPayments {
              export type DeclineOn = Stripe.V2.Core.Account.Configuration.Merchant.CardPayments.DeclineOn;
            }
            export namespace KonbiniPayments {
              export type Support = Stripe.V2.Core.Account.Configuration.Merchant.KonbiniPayments.Support;
              export namespace Support {
                export type Hours = Stripe.V2.Core.Account.Configuration.Merchant.KonbiniPayments.Support.Hours;
              }
            }
            export namespace ScriptStatementDescriptor {
              export type Kana = Stripe.V2.Core.Account.Configuration.Merchant.ScriptStatementDescriptor.Kana;
              export type Kanji = Stripe.V2.Core.Account.Configuration.Merchant.ScriptStatementDescriptor.Kanji;
            }
            export namespace Support {
              export type Address = Stripe.V2.Core.Account.Configuration.Merchant.Support.Address;
            }
          }
          export namespace Recipient {
            export type Capabilities = Stripe.V2.Core.Account.Configuration.Recipient.Capabilities;
            export namespace Capabilities {
              export type StripeBalance = Stripe.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance;
              export namespace StripeBalance {
                export type Payouts = Stripe.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.Payouts;
                export type StripeTransfers = Stripe.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.StripeTransfers;
                export namespace Payouts {
                  export type Status = Stripe.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.Payouts.Status;
                  export type StatusDetail = Stripe.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.Payouts.StatusDetail;
                  export namespace StatusDetail {
                    export type Code = Stripe.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.Payouts.StatusDetail.Code;
                    export type Resolution = Stripe.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.Payouts.StatusDetail.Resolution;
                  }
                }
                export namespace StripeTransfers {
                  export type Status = Stripe.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.StripeTransfers.Status;
                  export type StatusDetail = Stripe.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.StripeTransfers.StatusDetail;
                  export namespace StatusDetail {
                    export type Code = Stripe.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.StripeTransfers.StatusDetail.Code;
                    export type Resolution = Stripe.V2.Core.Account.Configuration.Recipient.Capabilities.StripeBalance.StripeTransfers.StatusDetail.Resolution;
                  }
                }
              }
            }
          }
        }
        export namespace Defaults {
          export type Locale = Stripe.V2.Core.Account.Defaults.Locale;
          export type Profile = Stripe.V2.Core.Account.Defaults.Profile;
          export type Responsibilities = Stripe.V2.Core.Account.Defaults.Responsibilities;
          export namespace Responsibilities {
            export type FeesCollector = Stripe.V2.Core.Account.Defaults.Responsibilities.FeesCollector;
            export type LossesCollector = Stripe.V2.Core.Account.Defaults.Responsibilities.LossesCollector;
            export type RequirementsCollector = Stripe.V2.Core.Account.Defaults.Responsibilities.RequirementsCollector;
          }
        }
        export namespace FutureRequirements {
          export type Entry = Stripe.V2.Core.Account.FutureRequirements.Entry;
          export type Summary = Stripe.V2.Core.Account.FutureRequirements.Summary;
          export namespace Entry {
            export type AwaitingActionFrom = Stripe.V2.Core.Account.FutureRequirements.Entry.AwaitingActionFrom;
            export type Error = Stripe.V2.Core.Account.FutureRequirements.Entry.Error;
            export type Impact = Stripe.V2.Core.Account.FutureRequirements.Entry.Impact;
            export type MinimumDeadline = Stripe.V2.Core.Account.FutureRequirements.Entry.MinimumDeadline;
            export type Reference = Stripe.V2.Core.Account.FutureRequirements.Entry.Reference;
            export type RequestedReason = Stripe.V2.Core.Account.FutureRequirements.Entry.RequestedReason;
            export namespace Error {
              export type Code = Stripe.V2.Core.Account.FutureRequirements.Entry.Error.Code;
            }
            export namespace Impact {
              export type RestrictsCapability = Stripe.V2.Core.Account.FutureRequirements.Entry.Impact.RestrictsCapability;
              export namespace RestrictsCapability {
                export type Capability = Stripe.V2.Core.Account.FutureRequirements.Entry.Impact.RestrictsCapability.Capability;
                export type Configuration = Stripe.V2.Core.Account.FutureRequirements.Entry.Impact.RestrictsCapability.Configuration;
                export type Deadline = Stripe.V2.Core.Account.FutureRequirements.Entry.Impact.RestrictsCapability.Deadline;
                export namespace Deadline {
                  export type Status = Stripe.V2.Core.Account.FutureRequirements.Entry.Impact.RestrictsCapability.Deadline.Status;
                }
              }
            }
            export namespace MinimumDeadline {
              export type Status = Stripe.V2.Core.Account.FutureRequirements.Entry.MinimumDeadline.Status;
            }
            export namespace Reference {
              export type Type = Stripe.V2.Core.Account.FutureRequirements.Entry.Reference.Type;
            }
            export namespace RequestedReason {
              export type Code = Stripe.V2.Core.Account.FutureRequirements.Entry.RequestedReason.Code;
            }
          }
          export namespace Summary {
            export type MinimumDeadline = Stripe.V2.Core.Account.FutureRequirements.Summary.MinimumDeadline;
            export namespace MinimumDeadline {
              export type Status = Stripe.V2.Core.Account.FutureRequirements.Summary.MinimumDeadline.Status;
            }
          }
        }
        export namespace Identity {
          export type Attestations = Stripe.V2.Core.Account.Identity.Attestations;
          export type BusinessDetails = Stripe.V2.Core.Account.Identity.BusinessDetails;
          export type EntityType = Stripe.V2.Core.Account.Identity.EntityType;
          export type Individual = Stripe.V2.Core.Account.Identity.Individual;
          export namespace Attestations {
            export type DirectorshipDeclaration = Stripe.V2.Core.Account.Identity.Attestations.DirectorshipDeclaration;
            export type OwnershipDeclaration = Stripe.V2.Core.Account.Identity.Attestations.OwnershipDeclaration;
            export type PersonsProvided = Stripe.V2.Core.Account.Identity.Attestations.PersonsProvided;
            export type RepresentativeDeclaration = Stripe.V2.Core.Account.Identity.Attestations.RepresentativeDeclaration;
            export type TermsOfService = Stripe.V2.Core.Account.Identity.Attestations.TermsOfService;
            export namespace PersonsProvided {
              export type OwnershipExemptionReason = Stripe.V2.Core.Account.Identity.Attestations.PersonsProvided.OwnershipExemptionReason;
            }
            export namespace TermsOfService {
              export type Account = Stripe.V2.Core.Account.Identity.Attestations.TermsOfService.Account;
            }
          }
          export namespace BusinessDetails {
            export type Address = Stripe.V2.Core.Account.Identity.BusinessDetails.Address;
            export type AnnualRevenue = Stripe.V2.Core.Account.Identity.BusinessDetails.AnnualRevenue;
            export type Documents = Stripe.V2.Core.Account.Identity.BusinessDetails.Documents;
            export type IdNumber = Stripe.V2.Core.Account.Identity.BusinessDetails.IdNumber;
            export type MonthlyEstimatedRevenue = Stripe.V2.Core.Account.Identity.BusinessDetails.MonthlyEstimatedRevenue;
            export type RegistrationDate = Stripe.V2.Core.Account.Identity.BusinessDetails.RegistrationDate;
            export type ScriptAddresses = Stripe.V2.Core.Account.Identity.BusinessDetails.ScriptAddresses;
            export type ScriptNames = Stripe.V2.Core.Account.Identity.BusinessDetails.ScriptNames;
            export type Structure = Stripe.V2.Core.Account.Identity.BusinessDetails.Structure;
            export namespace Documents {
              export type BankAccountOwnershipVerification = Stripe.V2.Core.Account.Identity.BusinessDetails.Documents.BankAccountOwnershipVerification;
              export type CompanyLicense = Stripe.V2.Core.Account.Identity.BusinessDetails.Documents.CompanyLicense;
              export type CompanyMemorandumOfAssociation = Stripe.V2.Core.Account.Identity.BusinessDetails.Documents.CompanyMemorandumOfAssociation;
              export type CompanyMinisterialDecree = Stripe.V2.Core.Account.Identity.BusinessDetails.Documents.CompanyMinisterialDecree;
              export type CompanyRegistrationVerification = Stripe.V2.Core.Account.Identity.BusinessDetails.Documents.CompanyRegistrationVerification;
              export type CompanyTaxIdVerification = Stripe.V2.Core.Account.Identity.BusinessDetails.Documents.CompanyTaxIdVerification;
              export type PrimaryVerification = Stripe.V2.Core.Account.Identity.BusinessDetails.Documents.PrimaryVerification;
              export type ProofOfAddress = Stripe.V2.Core.Account.Identity.BusinessDetails.Documents.ProofOfAddress;
              export type ProofOfRegistration = Stripe.V2.Core.Account.Identity.BusinessDetails.Documents.ProofOfRegistration;
              export type ProofOfUltimateBeneficialOwnership = Stripe.V2.Core.Account.Identity.BusinessDetails.Documents.ProofOfUltimateBeneficialOwnership;
              export namespace PrimaryVerification {
                export type FrontBack = Stripe.V2.Core.Account.Identity.BusinessDetails.Documents.PrimaryVerification.FrontBack;
              }
              export namespace ProofOfRegistration {
                export type Signer = Stripe.V2.Core.Account.Identity.BusinessDetails.Documents.ProofOfRegistration.Signer;
              }
              export namespace ProofOfUltimateBeneficialOwnership {
                export type Signer = Stripe.V2.Core.Account.Identity.BusinessDetails.Documents.ProofOfUltimateBeneficialOwnership.Signer;
              }
            }
            export namespace IdNumber {
              export type Type = Stripe.V2.Core.Account.Identity.BusinessDetails.IdNumber.Type;
            }
            export namespace ScriptAddresses {
              export type Kana = Stripe.V2.Core.Account.Identity.BusinessDetails.ScriptAddresses.Kana;
              export type Kanji = Stripe.V2.Core.Account.Identity.BusinessDetails.ScriptAddresses.Kanji;
            }
            export namespace ScriptNames {
              export type Kana = Stripe.V2.Core.Account.Identity.BusinessDetails.ScriptNames.Kana;
              export type Kanji = Stripe.V2.Core.Account.Identity.BusinessDetails.ScriptNames.Kanji;
            }
          }
          export namespace Individual {
            export type AdditionalAddress = Stripe.V2.Core.Account.Identity.Individual.AdditionalAddress;
            export type AdditionalName = Stripe.V2.Core.Account.Identity.Individual.AdditionalName;
            export type AdditionalTermsOfService = Stripe.V2.Core.Account.Identity.Individual.AdditionalTermsOfService;
            export type Address = Stripe.V2.Core.Account.Identity.Individual.Address;
            export type DateOfBirth = Stripe.V2.Core.Account.Identity.Individual.DateOfBirth;
            export type Documents = Stripe.V2.Core.Account.Identity.Individual.Documents;
            export type IdNumber = Stripe.V2.Core.Account.Identity.Individual.IdNumber;
            export type LegalGender = Stripe.V2.Core.Account.Identity.Individual.LegalGender;
            export type PoliticalExposure = Stripe.V2.Core.Account.Identity.Individual.PoliticalExposure;
            export type Relationship = Stripe.V2.Core.Account.Identity.Individual.Relationship;
            export type ScriptAddresses = Stripe.V2.Core.Account.Identity.Individual.ScriptAddresses;
            export type ScriptNames = Stripe.V2.Core.Account.Identity.Individual.ScriptNames;
            export namespace AdditionalName {
              export type Purpose = Stripe.V2.Core.Account.Identity.Individual.AdditionalName.Purpose;
            }
            export namespace AdditionalTermsOfService {
              export type Account = Stripe.V2.Core.Account.Identity.Individual.AdditionalTermsOfService.Account;
            }
            export namespace Documents {
              export type CompanyAuthorization = Stripe.V2.Core.Account.Identity.Individual.Documents.CompanyAuthorization;
              export type Passport = Stripe.V2.Core.Account.Identity.Individual.Documents.Passport;
              export type PrimaryVerification = Stripe.V2.Core.Account.Identity.Individual.Documents.PrimaryVerification;
              export type SecondaryVerification = Stripe.V2.Core.Account.Identity.Individual.Documents.SecondaryVerification;
              export type Visa = Stripe.V2.Core.Account.Identity.Individual.Documents.Visa;
              export namespace PrimaryVerification {
                export type FrontBack = Stripe.V2.Core.Account.Identity.Individual.Documents.PrimaryVerification.FrontBack;
              }
              export namespace SecondaryVerification {
                export type FrontBack = Stripe.V2.Core.Account.Identity.Individual.Documents.SecondaryVerification.FrontBack;
              }
            }
            export namespace IdNumber {
              export type Type = Stripe.V2.Core.Account.Identity.Individual.IdNumber.Type;
            }
            export namespace ScriptAddresses {
              export type Kana = Stripe.V2.Core.Account.Identity.Individual.ScriptAddresses.Kana;
              export type Kanji = Stripe.V2.Core.Account.Identity.Individual.ScriptAddresses.Kanji;
            }
            export namespace ScriptNames {
              export type Kana = Stripe.V2.Core.Account.Identity.Individual.ScriptNames.Kana;
              export type Kanji = Stripe.V2.Core.Account.Identity.Individual.ScriptNames.Kanji;
            }
          }
        }
        export namespace Requirements {
          export type Entry = Stripe.V2.Core.Account.Requirements.Entry;
          export type Summary = Stripe.V2.Core.Account.Requirements.Summary;
          export namespace Entry {
            export type AwaitingActionFrom = Stripe.V2.Core.Account.Requirements.Entry.AwaitingActionFrom;
            export type Error = Stripe.V2.Core.Account.Requirements.Entry.Error;
            export type Impact = Stripe.V2.Core.Account.Requirements.Entry.Impact;
            export type MinimumDeadline = Stripe.V2.Core.Account.Requirements.Entry.MinimumDeadline;
            export type Reference = Stripe.V2.Core.Account.Requirements.Entry.Reference;
            export type RequestedReason = Stripe.V2.Core.Account.Requirements.Entry.RequestedReason;
            export namespace Error {
              export type Code = Stripe.V2.Core.Account.Requirements.Entry.Error.Code;
            }
            export namespace Impact {
              export type RestrictsCapability = Stripe.V2.Core.Account.Requirements.Entry.Impact.RestrictsCapability;
              export namespace RestrictsCapability {
                export type Capability = Stripe.V2.Core.Account.Requirements.Entry.Impact.RestrictsCapability.Capability;
                export type Configuration = Stripe.V2.Core.Account.Requirements.Entry.Impact.RestrictsCapability.Configuration;
                export type Deadline = Stripe.V2.Core.Account.Requirements.Entry.Impact.RestrictsCapability.Deadline;
                export namespace Deadline {
                  export type Status = Stripe.V2.Core.Account.Requirements.Entry.Impact.RestrictsCapability.Deadline.Status;
                }
              }
            }
            export namespace MinimumDeadline {
              export type Status = Stripe.V2.Core.Account.Requirements.Entry.MinimumDeadline.Status;
            }
            export namespace Reference {
              export type Type = Stripe.V2.Core.Account.Requirements.Entry.Reference.Type;
            }
            export namespace RequestedReason {
              export type Code = Stripe.V2.Core.Account.Requirements.Entry.RequestedReason.Code;
            }
          }
          export namespace Summary {
            export type MinimumDeadline = Stripe.V2.Core.Account.Requirements.Summary.MinimumDeadline;
            export namespace MinimumDeadline {
              export type Status = Stripe.V2.Core.Account.Requirements.Summary.MinimumDeadline.Status;
            }
          }
        }
      }
      export namespace AccountLinkCreateParams {
        export type UseCase = Stripe.V2.Core.AccountLinkCreateParams.UseCase;
        export namespace UseCase {
          export type AccountOnboarding = Stripe.V2.Core.AccountLinkCreateParams.UseCase.AccountOnboarding;
          export type AccountUpdate = Stripe.V2.Core.AccountLinkCreateParams.UseCase.AccountUpdate;
          export type Type = Stripe.V2.Core.AccountLinkCreateParams.UseCase.Type;
          export namespace AccountOnboarding {
            export type CollectionOptions = Stripe.V2.Core.AccountLinkCreateParams.UseCase.AccountOnboarding.CollectionOptions;
            export type Configuration = Stripe.V2.Core.AccountLinkCreateParams.UseCase.AccountOnboarding.Configuration;
            export namespace CollectionOptions {
              export type Fields = Stripe.V2.Core.AccountLinkCreateParams.UseCase.AccountOnboarding.CollectionOptions.Fields;
              export type FutureRequirements = Stripe.V2.Core.AccountLinkCreateParams.UseCase.AccountOnboarding.CollectionOptions.FutureRequirements;
            }
          }
          export namespace AccountUpdate {
            export type CollectionOptions = Stripe.V2.Core.AccountLinkCreateParams.UseCase.AccountUpdate.CollectionOptions;
            export type Configuration = Stripe.V2.Core.AccountLinkCreateParams.UseCase.AccountUpdate.Configuration;
            export namespace CollectionOptions {
              export type Fields = Stripe.V2.Core.AccountLinkCreateParams.UseCase.AccountUpdate.CollectionOptions.Fields;
              export type FutureRequirements = Stripe.V2.Core.AccountLinkCreateParams.UseCase.AccountUpdate.CollectionOptions.FutureRequirements;
            }
          }
        }
      }
      export namespace AccountLink {
        export type UseCase = Stripe.V2.Core.AccountLink.UseCase;
        export namespace UseCase {
          export type AccountOnboarding = Stripe.V2.Core.AccountLink.UseCase.AccountOnboarding;
          export type AccountUpdate = Stripe.V2.Core.AccountLink.UseCase.AccountUpdate;
          export type Type = Stripe.V2.Core.AccountLink.UseCase.Type;
          export namespace AccountOnboarding {
            export type CollectionOptions = Stripe.V2.Core.AccountLink.UseCase.AccountOnboarding.CollectionOptions;
            export type Configuration = Stripe.V2.Core.AccountLink.UseCase.AccountOnboarding.Configuration;
            export namespace CollectionOptions {
              export type Fields = Stripe.V2.Core.AccountLink.UseCase.AccountOnboarding.CollectionOptions.Fields;
              export type FutureRequirements = Stripe.V2.Core.AccountLink.UseCase.AccountOnboarding.CollectionOptions.FutureRequirements;
            }
          }
          export namespace AccountUpdate {
            export type CollectionOptions = Stripe.V2.Core.AccountLink.UseCase.AccountUpdate.CollectionOptions;
            export type Configuration = Stripe.V2.Core.AccountLink.UseCase.AccountUpdate.Configuration;
            export namespace CollectionOptions {
              export type Fields = Stripe.V2.Core.AccountLink.UseCase.AccountUpdate.CollectionOptions.Fields;
              export type FutureRequirements = Stripe.V2.Core.AccountLink.UseCase.AccountUpdate.CollectionOptions.FutureRequirements;
            }
          }
        }
      }
      export namespace AccountTokenCreateParams {
        export type Identity = Stripe.V2.Core.AccountTokenCreateParams.Identity;
        export namespace Identity {
          export type Attestations = Stripe.V2.Core.AccountTokenCreateParams.Identity.Attestations;
          export type BusinessDetails = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails;
          export type EntityType = Stripe.V2.Core.AccountTokenCreateParams.Identity.EntityType;
          export type Individual = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual;
          export namespace Attestations {
            export type DirectorshipDeclaration = Stripe.V2.Core.AccountTokenCreateParams.Identity.Attestations.DirectorshipDeclaration;
            export type OwnershipDeclaration = Stripe.V2.Core.AccountTokenCreateParams.Identity.Attestations.OwnershipDeclaration;
            export type PersonsProvided = Stripe.V2.Core.AccountTokenCreateParams.Identity.Attestations.PersonsProvided;
            export type RepresentativeDeclaration = Stripe.V2.Core.AccountTokenCreateParams.Identity.Attestations.RepresentativeDeclaration;
            export type TermsOfService = Stripe.V2.Core.AccountTokenCreateParams.Identity.Attestations.TermsOfService;
            export namespace PersonsProvided {
              export type OwnershipExemptionReason = Stripe.V2.Core.AccountTokenCreateParams.Identity.Attestations.PersonsProvided.OwnershipExemptionReason;
            }
            export namespace TermsOfService {
              export type Account = Stripe.V2.Core.AccountTokenCreateParams.Identity.Attestations.TermsOfService.Account;
            }
          }
          export namespace BusinessDetails {
            export type AnnualRevenue = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.AnnualRevenue;
            export type Documents = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents;
            export type IdNumber = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.IdNumber;
            export type MonthlyEstimatedRevenue = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.MonthlyEstimatedRevenue;
            export type RegistrationDate = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.RegistrationDate;
            export type ScriptAddresses = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.ScriptAddresses;
            export type ScriptNames = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.ScriptNames;
            export type Structure = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Structure;
            export namespace Documents {
              export type BankAccountOwnershipVerification = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.BankAccountOwnershipVerification;
              export type CompanyLicense = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.CompanyLicense;
              export type CompanyMemorandumOfAssociation = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.CompanyMemorandumOfAssociation;
              export type CompanyMinisterialDecree = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.CompanyMinisterialDecree;
              export type CompanyRegistrationVerification = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.CompanyRegistrationVerification;
              export type CompanyTaxIdVerification = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.CompanyTaxIdVerification;
              export type PrimaryVerification = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.PrimaryVerification;
              export type ProofOfAddress = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.ProofOfAddress;
              export type ProofOfRegistration = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.ProofOfRegistration;
              export type ProofOfUltimateBeneficialOwnership = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.ProofOfUltimateBeneficialOwnership;
              export namespace PrimaryVerification {
                export type FrontBack = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.PrimaryVerification.FrontBack;
              }
              export namespace ProofOfRegistration {
                export type Signer = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.ProofOfRegistration.Signer;
              }
              export namespace ProofOfUltimateBeneficialOwnership {
                export type Signer = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.Documents.ProofOfUltimateBeneficialOwnership.Signer;
              }
            }
            export namespace IdNumber {
              export type Type = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.IdNumber.Type;
            }
            export namespace ScriptNames {
              export type Kana = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.ScriptNames.Kana;
              export type Kanji = Stripe.V2.Core.AccountTokenCreateParams.Identity.BusinessDetails.ScriptNames.Kanji;
            }
          }
          export namespace Individual {
            export type AdditionalAddress = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.AdditionalAddress;
            export type AdditionalName = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.AdditionalName;
            export type DateOfBirth = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.DateOfBirth;
            export type Documents = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.Documents;
            export type IdNumber = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.IdNumber;
            export type LegalGender = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.LegalGender;
            export type PoliticalExposure = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.PoliticalExposure;
            export type Relationship = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.Relationship;
            export type ScriptAddresses = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.ScriptAddresses;
            export type ScriptNames = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.ScriptNames;
            export namespace AdditionalName {
              export type Purpose = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.AdditionalName.Purpose;
            }
            export namespace Documents {
              export type CompanyAuthorization = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.Documents.CompanyAuthorization;
              export type Passport = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.Documents.Passport;
              export type PrimaryVerification = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.Documents.PrimaryVerification;
              export type SecondaryVerification = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.Documents.SecondaryVerification;
              export type Visa = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.Documents.Visa;
              export namespace PrimaryVerification {
                export type FrontBack = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.Documents.PrimaryVerification.FrontBack;
              }
              export namespace SecondaryVerification {
                export type FrontBack = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.Documents.SecondaryVerification.FrontBack;
              }
            }
            export namespace IdNumber {
              export type Type = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.IdNumber.Type;
            }
            export namespace ScriptNames {
              export type Kana = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.ScriptNames.Kana;
              export type Kanji = Stripe.V2.Core.AccountTokenCreateParams.Identity.Individual.ScriptNames.Kanji;
            }
          }
        }
      }
      export namespace Event {
        export type Changes = Stripe.V2.Core.Event.Changes;
        export type Reason = Stripe.V2.Core.Event.Reason;
        export namespace Reason {
          export type Request = Stripe.V2.Core.Event.Reason.Request;
        }
      }
      export namespace EventDestinationCreateParams {
        export type EventPayload = Stripe.V2.Core.EventDestinationCreateParams.EventPayload;
        export type Type = Stripe.V2.Core.EventDestinationCreateParams.Type;
        export type AmazonEventbridge = Stripe.V2.Core.EventDestinationCreateParams.AmazonEventbridge;
        export type AzureEventGrid = Stripe.V2.Core.EventDestinationCreateParams.AzureEventGrid;
        export type Include = Stripe.V2.Core.EventDestinationCreateParams.Include;
        export type WebhookEndpoint = Stripe.V2.Core.EventDestinationCreateParams.WebhookEndpoint;
      }
      export namespace EventDestination {
        export type AmazonEventbridge = Stripe.V2.Core.EventDestination.AmazonEventbridge;
        export type AzureEventGrid = Stripe.V2.Core.EventDestination.AzureEventGrid;
        export type EventPayload = Stripe.V2.Core.EventDestination.EventPayload;
        export type Status = Stripe.V2.Core.EventDestination.Status;
        export type StatusDetails = Stripe.V2.Core.EventDestination.StatusDetails;
        export type Type = Stripe.V2.Core.EventDestination.Type;
        export type WebhookEndpoint = Stripe.V2.Core.EventDestination.WebhookEndpoint;
        export namespace AmazonEventbridge {
          export type AwsEventSourceStatus = Stripe.V2.Core.EventDestination.AmazonEventbridge.AwsEventSourceStatus;
        }
        export namespace AzureEventGrid {
          export type AzurePartnerTopicStatus = Stripe.V2.Core.EventDestination.AzureEventGrid.AzurePartnerTopicStatus;
        }
        export namespace StatusDetails {
          export type Disabled = Stripe.V2.Core.EventDestination.StatusDetails.Disabled;
          export namespace Disabled {
            export type Reason = Stripe.V2.Core.EventDestination.StatusDetails.Disabled.Reason;
          }
        }
      }
      export namespace AccountPerson {
        export type AdditionalAddress = Stripe.V2.Core.AccountPerson.AdditionalAddress;
        export type AdditionalName = Stripe.V2.Core.AccountPerson.AdditionalName;
        export type AdditionalTermsOfService = Stripe.V2.Core.AccountPerson.AdditionalTermsOfService;
        export type Address = Stripe.V2.Core.AccountPerson.Address;
        export type DateOfBirth = Stripe.V2.Core.AccountPerson.DateOfBirth;
        export type Documents = Stripe.V2.Core.AccountPerson.Documents;
        export type IdNumber = Stripe.V2.Core.AccountPerson.IdNumber;
        export type LegalGender = Stripe.V2.Core.AccountPerson.LegalGender;
        export type PoliticalExposure = Stripe.V2.Core.AccountPerson.PoliticalExposure;
        export type Relationship = Stripe.V2.Core.AccountPerson.Relationship;
        export type ScriptAddresses = Stripe.V2.Core.AccountPerson.ScriptAddresses;
        export type ScriptNames = Stripe.V2.Core.AccountPerson.ScriptNames;
        export namespace AdditionalName {
          export type Purpose = Stripe.V2.Core.AccountPerson.AdditionalName.Purpose;
        }
        export namespace AdditionalTermsOfService {
          export type Account = Stripe.V2.Core.AccountPerson.AdditionalTermsOfService.Account;
        }
        export namespace Documents {
          export type CompanyAuthorization = Stripe.V2.Core.AccountPerson.Documents.CompanyAuthorization;
          export type Passport = Stripe.V2.Core.AccountPerson.Documents.Passport;
          export type PrimaryVerification = Stripe.V2.Core.AccountPerson.Documents.PrimaryVerification;
          export type SecondaryVerification = Stripe.V2.Core.AccountPerson.Documents.SecondaryVerification;
          export type Visa = Stripe.V2.Core.AccountPerson.Documents.Visa;
          export namespace PrimaryVerification {
            export type FrontBack = Stripe.V2.Core.AccountPerson.Documents.PrimaryVerification.FrontBack;
          }
          export namespace SecondaryVerification {
            export type FrontBack = Stripe.V2.Core.AccountPerson.Documents.SecondaryVerification.FrontBack;
          }
        }
        export namespace IdNumber {
          export type Type = Stripe.V2.Core.AccountPerson.IdNumber.Type;
        }
        export namespace ScriptAddresses {
          export type Kana = Stripe.V2.Core.AccountPerson.ScriptAddresses.Kana;
          export type Kanji = Stripe.V2.Core.AccountPerson.ScriptAddresses.Kanji;
        }
        export namespace ScriptNames {
          export type Kana = Stripe.V2.Core.AccountPerson.ScriptNames.Kana;
          export type Kanji = Stripe.V2.Core.AccountPerson.ScriptNames.Kanji;
        }
      }
    }
    export namespace Commerce {
      export type ProductCatalogImport = Stripe.V2.Commerce.ProductCatalogImport;
      export namespace ProductCatalogImport {
        export type FeedType = Stripe.V2.Commerce.ProductCatalogImport.FeedType;
        export type Mode = Stripe.V2.Commerce.ProductCatalogImport.Mode;
        export type Status = Stripe.V2.Commerce.ProductCatalogImport.Status;
        export type StatusDetails = Stripe.V2.Commerce.ProductCatalogImport.StatusDetails;
        export namespace StatusDetails {
          export type AwaitingUpload = Stripe.V2.Commerce.ProductCatalogImport.StatusDetails.AwaitingUpload;
          export type Failed = Stripe.V2.Commerce.ProductCatalogImport.StatusDetails.Failed;
          export type Processing = Stripe.V2.Commerce.ProductCatalogImport.StatusDetails.Processing;
          export type Succeeded = Stripe.V2.Commerce.ProductCatalogImport.StatusDetails.Succeeded;
          export type SucceededWithErrors = Stripe.V2.Commerce.ProductCatalogImport.StatusDetails.SucceededWithErrors;
          export namespace AwaitingUpload {
            export type UploadUrl = Stripe.V2.Commerce.ProductCatalogImport.StatusDetails.AwaitingUpload.UploadUrl;
          }
          export namespace Failed {
            export type Code = Stripe.V2.Commerce.ProductCatalogImport.StatusDetails.Failed.Code;
            export type Type = Stripe.V2.Commerce.ProductCatalogImport.StatusDetails.Failed.Type;
          }
          export namespace SucceededWithErrors {
            export type ErrorFile = Stripe.V2.Commerce.ProductCatalogImport.StatusDetails.SucceededWithErrors.ErrorFile;
            export type Sample = Stripe.V2.Commerce.ProductCatalogImport.StatusDetails.SucceededWithErrors.Sample;
            export namespace ErrorFile {
              export type DownloadUrl = Stripe.V2.Commerce.ProductCatalogImport.StatusDetails.SucceededWithErrors.ErrorFile.DownloadUrl;
            }
          }
        }
      }
    }
  }
  export namespace Reserve {
    export type Hold = Stripe.Reserve.Hold;
    export type Plan = Stripe.Reserve.Plan;
    export type Release = Stripe.Reserve.Release;
    export namespace Hold {
      export type CreatedBy = Stripe.Reserve.Hold.CreatedBy;
      export type Reason = Stripe.Reserve.Hold.Reason;
      export type ReleaseDetail = Stripe.Reserve.Hold.ReleaseDetail;
      export type ReleaseSchedule = Stripe.Reserve.Hold.ReleaseSchedule;
      export type SourceType = Stripe.Reserve.Hold.SourceType;
    }
    export namespace Plan {
      export type CreatedBy = Stripe.Reserve.Plan.CreatedBy;
      export type FixedRelease = Stripe.Reserve.Plan.FixedRelease;
      export type RollingRelease = Stripe.Reserve.Plan.RollingRelease;
      export type Status = Stripe.Reserve.Plan.Status;
      export type Type = Stripe.Reserve.Plan.Type;
    }
    export namespace Release {
      export type CreatedBy = Stripe.Reserve.Release.CreatedBy;
      export type Reason = Stripe.Reserve.Release.Reason;
      export type SourceTransaction = Stripe.Reserve.Release.SourceTransaction;
      export namespace SourceTransaction {
        export type Type = Stripe.Reserve.Release.SourceTransaction.Type;
      }
    }
  }
  export namespace Events {
    export type UnknownEventNotification = Stripe.V2.Core.Events.UnknownEventNotification;
    export type V1BillingMeterErrorReportTriggeredEvent = Stripe.V2.Core.Events.V1BillingMeterErrorReportTriggeredEvent;
    export type V1BillingMeterErrorReportTriggeredEventNotification = Stripe.V2.Core.Events.V1BillingMeterErrorReportTriggeredEventNotification;
    export type V1BillingMeterNoMeterFoundEvent = Stripe.V2.Core.Events.V1BillingMeterNoMeterFoundEvent;
    export type V1BillingMeterNoMeterFoundEventNotification = Stripe.V2.Core.Events.V1BillingMeterNoMeterFoundEventNotification;
    export type V2CommerceProductCatalogImportsFailedEvent = Stripe.V2.Core.Events.V2CommerceProductCatalogImportsFailedEvent;
    export type V2CommerceProductCatalogImportsFailedEventNotification = Stripe.V2.Core.Events.V2CommerceProductCatalogImportsFailedEventNotification;
    export type V2CommerceProductCatalogImportsProcessingEvent = Stripe.V2.Core.Events.V2CommerceProductCatalogImportsProcessingEvent;
    export type V2CommerceProductCatalogImportsProcessingEventNotification = Stripe.V2.Core.Events.V2CommerceProductCatalogImportsProcessingEventNotification;
    export type V2CommerceProductCatalogImportsSucceededEvent = Stripe.V2.Core.Events.V2CommerceProductCatalogImportsSucceededEvent;
    export type V2CommerceProductCatalogImportsSucceededEventNotification = Stripe.V2.Core.Events.V2CommerceProductCatalogImportsSucceededEventNotification;
    export type V2CommerceProductCatalogImportsSucceededWithErrorsEvent = Stripe.V2.Core.Events.V2CommerceProductCatalogImportsSucceededWithErrorsEvent;
    export type V2CommerceProductCatalogImportsSucceededWithErrorsEventNotification = Stripe.V2.Core.Events.V2CommerceProductCatalogImportsSucceededWithErrorsEventNotification;
    export type V2CoreAccountClosedEvent = Stripe.V2.Core.Events.V2CoreAccountClosedEvent;
    export type V2CoreAccountClosedEventNotification = Stripe.V2.Core.Events.V2CoreAccountClosedEventNotification;
    export type V2CoreAccountCreatedEvent = Stripe.V2.Core.Events.V2CoreAccountCreatedEvent;
    export type V2CoreAccountCreatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountCreatedEventNotification;
    export type V2CoreAccountUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountUpdatedEvent;
    export type V2CoreAccountUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountUpdatedEventNotification;
    export type V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEventNotification;
    export type V2CoreAccountIncludingConfigurationCustomerUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationCustomerUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationCustomerUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationCustomerUpdatedEventNotification;
    export type V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEventNotification;
    export type V2CoreAccountIncludingConfigurationMerchantUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationMerchantUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationMerchantUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationMerchantUpdatedEventNotification;
    export type V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEventNotification;
    export type V2CoreAccountIncludingConfigurationRecipientUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationRecipientUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationRecipientUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationRecipientUpdatedEventNotification;
    export type V2CoreAccountIncludingDefaultsUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountIncludingDefaultsUpdatedEvent;
    export type V2CoreAccountIncludingDefaultsUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountIncludingDefaultsUpdatedEventNotification;
    export type V2CoreAccountIncludingFutureRequirementsUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountIncludingFutureRequirementsUpdatedEvent;
    export type V2CoreAccountIncludingFutureRequirementsUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountIncludingFutureRequirementsUpdatedEventNotification;
    export type V2CoreAccountIncludingIdentityUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountIncludingIdentityUpdatedEvent;
    export type V2CoreAccountIncludingIdentityUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountIncludingIdentityUpdatedEventNotification;
    export type V2CoreAccountIncludingRequirementsUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountIncludingRequirementsUpdatedEvent;
    export type V2CoreAccountIncludingRequirementsUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountIncludingRequirementsUpdatedEventNotification;
    export type V2CoreAccountLinkReturnedEvent = Stripe.V2.Core.Events.V2CoreAccountLinkReturnedEvent;
    export type V2CoreAccountLinkReturnedEventNotification = Stripe.V2.Core.Events.V2CoreAccountLinkReturnedEventNotification;
    export type V2CoreAccountPersonCreatedEvent = Stripe.V2.Core.Events.V2CoreAccountPersonCreatedEvent;
    export type V2CoreAccountPersonCreatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountPersonCreatedEventNotification;
    export type V2CoreAccountPersonDeletedEvent = Stripe.V2.Core.Events.V2CoreAccountPersonDeletedEvent;
    export type V2CoreAccountPersonDeletedEventNotification = Stripe.V2.Core.Events.V2CoreAccountPersonDeletedEventNotification;
    export type V2CoreAccountPersonUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountPersonUpdatedEvent;
    export type V2CoreAccountPersonUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountPersonUpdatedEventNotification;
    export type V2CoreEventDestinationPingEvent = Stripe.V2.Core.Events.V2CoreEventDestinationPingEvent;
    export type V2CoreEventDestinationPingEventNotification = Stripe.V2.Core.Events.V2CoreEventDestinationPingEventNotification;
    export namespace V1BillingMeterErrorReportTriggeredEvent {
      export type Data = Stripe.V2.Core.Events.V1BillingMeterErrorReportTriggeredEvent.Data;
    }
    export namespace V1BillingMeterNoMeterFoundEvent {
      export type Data = Stripe.V2.Core.Events.V1BillingMeterNoMeterFoundEvent.Data;
    }
    export namespace V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent.Data;
    }
    export namespace V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent.Data;
    }
    export namespace V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent.Data;
    }
    export namespace V2CoreAccountLinkReturnedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreAccountLinkReturnedEvent.Data;
    }
    export namespace V2CoreAccountPersonCreatedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreAccountPersonCreatedEvent.Data;
    }
    export namespace V2CoreAccountPersonDeletedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreAccountPersonDeletedEvent.Data;
    }
    export namespace V2CoreAccountPersonUpdatedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreAccountPersonUpdatedEvent.Data;
    }
  }
  export type AccountApplicationAuthorizedEvent = Stripe.AccountApplicationAuthorizedEvent;
  export type AccountApplicationDeauthorizedEvent = Stripe.AccountApplicationDeauthorizedEvent;
  export type AccountExternalAccountCreatedEvent = Stripe.AccountExternalAccountCreatedEvent;
  export type AccountExternalAccountDeletedEvent = Stripe.AccountExternalAccountDeletedEvent;
  export type AccountExternalAccountUpdatedEvent = Stripe.AccountExternalAccountUpdatedEvent;
  export type AccountUpdatedEvent = Stripe.AccountUpdatedEvent;
  export type ApplicationFeeCreatedEvent = Stripe.ApplicationFeeCreatedEvent;
  export type ApplicationFeeRefundUpdatedEvent = Stripe.ApplicationFeeRefundUpdatedEvent;
  export type ApplicationFeeRefundedEvent = Stripe.ApplicationFeeRefundedEvent;
  export type BalanceAvailableEvent = Stripe.BalanceAvailableEvent;
  export type BalanceSettingsUpdatedEvent = Stripe.BalanceSettingsUpdatedEvent;
  export type BillingAlertTriggeredEvent = Stripe.BillingAlertTriggeredEvent;
  export type BillingCreditBalanceTransactionCreatedEvent = Stripe.BillingCreditBalanceTransactionCreatedEvent;
  export type BillingCreditGrantCreatedEvent = Stripe.BillingCreditGrantCreatedEvent;
  export type BillingCreditGrantUpdatedEvent = Stripe.BillingCreditGrantUpdatedEvent;
  export type BillingMeterCreatedEvent = Stripe.BillingMeterCreatedEvent;
  export type BillingMeterDeactivatedEvent = Stripe.BillingMeterDeactivatedEvent;
  export type BillingMeterReactivatedEvent = Stripe.BillingMeterReactivatedEvent;
  export type BillingMeterUpdatedEvent = Stripe.BillingMeterUpdatedEvent;
  export type BillingPortalConfigurationCreatedEvent = Stripe.BillingPortalConfigurationCreatedEvent;
  export type BillingPortalConfigurationUpdatedEvent = Stripe.BillingPortalConfigurationUpdatedEvent;
  export type BillingPortalSessionCreatedEvent = Stripe.BillingPortalSessionCreatedEvent;
  export type CapabilityUpdatedEvent = Stripe.CapabilityUpdatedEvent;
  export type CashBalanceFundsAvailableEvent = Stripe.CashBalanceFundsAvailableEvent;
  export type ChargeCapturedEvent = Stripe.ChargeCapturedEvent;
  export type ChargeDisputeClosedEvent = Stripe.ChargeDisputeClosedEvent;
  export type ChargeDisputeCreatedEvent = Stripe.ChargeDisputeCreatedEvent;
  export type ChargeDisputeFundsReinstatedEvent = Stripe.ChargeDisputeFundsReinstatedEvent;
  export type ChargeDisputeFundsWithdrawnEvent = Stripe.ChargeDisputeFundsWithdrawnEvent;
  export type ChargeDisputeUpdatedEvent = Stripe.ChargeDisputeUpdatedEvent;
  export type ChargeExpiredEvent = Stripe.ChargeExpiredEvent;
  export type ChargeFailedEvent = Stripe.ChargeFailedEvent;
  export type ChargePendingEvent = Stripe.ChargePendingEvent;
  export type ChargeRefundUpdatedEvent = Stripe.ChargeRefundUpdatedEvent;
  export type ChargeRefundedEvent = Stripe.ChargeRefundedEvent;
  export type ChargeSucceededEvent = Stripe.ChargeSucceededEvent;
  export type ChargeUpdatedEvent = Stripe.ChargeUpdatedEvent;
  export type CheckoutSessionAsyncPaymentFailedEvent = Stripe.CheckoutSessionAsyncPaymentFailedEvent;
  export type CheckoutSessionAsyncPaymentSucceededEvent = Stripe.CheckoutSessionAsyncPaymentSucceededEvent;
  export type CheckoutSessionCompletedEvent = Stripe.CheckoutSessionCompletedEvent;
  export type CheckoutSessionExpiredEvent = Stripe.CheckoutSessionExpiredEvent;
  export type ClimateOrderCanceledEvent = Stripe.ClimateOrderCanceledEvent;
  export type ClimateOrderCreatedEvent = Stripe.ClimateOrderCreatedEvent;
  export type ClimateOrderDelayedEvent = Stripe.ClimateOrderDelayedEvent;
  export type ClimateOrderDeliveredEvent = Stripe.ClimateOrderDeliveredEvent;
  export type ClimateOrderProductSubstitutedEvent = Stripe.ClimateOrderProductSubstitutedEvent;
  export type ClimateProductCreatedEvent = Stripe.ClimateProductCreatedEvent;
  export type ClimateProductPricingUpdatedEvent = Stripe.ClimateProductPricingUpdatedEvent;
  export type CouponCreatedEvent = Stripe.CouponCreatedEvent;
  export type CouponDeletedEvent = Stripe.CouponDeletedEvent;
  export type CouponUpdatedEvent = Stripe.CouponUpdatedEvent;
  export type CreditNoteCreatedEvent = Stripe.CreditNoteCreatedEvent;
  export type CreditNoteUpdatedEvent = Stripe.CreditNoteUpdatedEvent;
  export type CreditNoteVoidedEvent = Stripe.CreditNoteVoidedEvent;
  export type CustomerCreatedEvent = Stripe.CustomerCreatedEvent;
  export type CustomerDeletedEvent = Stripe.CustomerDeletedEvent;
  export type CustomerDiscountCreatedEvent = Stripe.CustomerDiscountCreatedEvent;
  export type CustomerDiscountDeletedEvent = Stripe.CustomerDiscountDeletedEvent;
  export type CustomerDiscountUpdatedEvent = Stripe.CustomerDiscountUpdatedEvent;
  export type CustomerSourceCreatedEvent = Stripe.CustomerSourceCreatedEvent;
  export type CustomerSourceDeletedEvent = Stripe.CustomerSourceDeletedEvent;
  export type CustomerSourceExpiringEvent = Stripe.CustomerSourceExpiringEvent;
  export type CustomerSourceUpdatedEvent = Stripe.CustomerSourceUpdatedEvent;
  export type CustomerSubscriptionCreatedEvent = Stripe.CustomerSubscriptionCreatedEvent;
  export type CustomerSubscriptionDeletedEvent = Stripe.CustomerSubscriptionDeletedEvent;
  export type CustomerSubscriptionPausedEvent = Stripe.CustomerSubscriptionPausedEvent;
  export type CustomerSubscriptionPendingUpdateAppliedEvent = Stripe.CustomerSubscriptionPendingUpdateAppliedEvent;
  export type CustomerSubscriptionPendingUpdateExpiredEvent = Stripe.CustomerSubscriptionPendingUpdateExpiredEvent;
  export type CustomerSubscriptionResumedEvent = Stripe.CustomerSubscriptionResumedEvent;
  export type CustomerSubscriptionTrialWillEndEvent = Stripe.CustomerSubscriptionTrialWillEndEvent;
  export type CustomerSubscriptionUpdatedEvent = Stripe.CustomerSubscriptionUpdatedEvent;
  export type CustomerTaxIdCreatedEvent = Stripe.CustomerTaxIdCreatedEvent;
  export type CustomerTaxIdDeletedEvent = Stripe.CustomerTaxIdDeletedEvent;
  export type CustomerTaxIdUpdatedEvent = Stripe.CustomerTaxIdUpdatedEvent;
  export type CustomerUpdatedEvent = Stripe.CustomerUpdatedEvent;
  export type CustomerCashBalanceTransactionCreatedEvent = Stripe.CustomerCashBalanceTransactionCreatedEvent;
  export type EntitlementsActiveEntitlementSummaryUpdatedEvent = Stripe.EntitlementsActiveEntitlementSummaryUpdatedEvent;
  export type FileCreatedEvent = Stripe.FileCreatedEvent;
  export type FinancialConnectionsAccountAccountNumbersUpdatedEvent = Stripe.FinancialConnectionsAccountAccountNumbersUpdatedEvent;
  export type FinancialConnectionsAccountCreatedEvent = Stripe.FinancialConnectionsAccountCreatedEvent;
  export type FinancialConnectionsAccountDeactivatedEvent = Stripe.FinancialConnectionsAccountDeactivatedEvent;
  export type FinancialConnectionsAccountDisconnectedEvent = Stripe.FinancialConnectionsAccountDisconnectedEvent;
  export type FinancialConnectionsAccountReactivatedEvent = Stripe.FinancialConnectionsAccountReactivatedEvent;
  export type FinancialConnectionsAccountRefreshedBalanceEvent = Stripe.FinancialConnectionsAccountRefreshedBalanceEvent;
  export type FinancialConnectionsAccountRefreshedOwnershipEvent = Stripe.FinancialConnectionsAccountRefreshedOwnershipEvent;
  export type FinancialConnectionsAccountRefreshedTransactionsEvent = Stripe.FinancialConnectionsAccountRefreshedTransactionsEvent;
  export type FinancialConnectionsAccountUpcomingAccountNumberExpiryEvent = Stripe.FinancialConnectionsAccountUpcomingAccountNumberExpiryEvent;
  export type IdentityVerificationSessionCanceledEvent = Stripe.IdentityVerificationSessionCanceledEvent;
  export type IdentityVerificationSessionCreatedEvent = Stripe.IdentityVerificationSessionCreatedEvent;
  export type IdentityVerificationSessionProcessingEvent = Stripe.IdentityVerificationSessionProcessingEvent;
  export type IdentityVerificationSessionRedactedEvent = Stripe.IdentityVerificationSessionRedactedEvent;
  export type IdentityVerificationSessionRequiresInputEvent = Stripe.IdentityVerificationSessionRequiresInputEvent;
  export type IdentityVerificationSessionVerifiedEvent = Stripe.IdentityVerificationSessionVerifiedEvent;
  export type InvoiceCreatedEvent = Stripe.InvoiceCreatedEvent;
  export type InvoiceDeletedEvent = Stripe.InvoiceDeletedEvent;
  export type InvoiceFinalizationFailedEvent = Stripe.InvoiceFinalizationFailedEvent;
  export type InvoiceFinalizedEvent = Stripe.InvoiceFinalizedEvent;
  export type InvoiceMarkedUncollectibleEvent = Stripe.InvoiceMarkedUncollectibleEvent;
  export type InvoiceOverdueEvent = Stripe.InvoiceOverdueEvent;
  export type InvoiceOverpaidEvent = Stripe.InvoiceOverpaidEvent;
  export type InvoicePaidEvent = Stripe.InvoicePaidEvent;
  export type InvoicePaymentActionRequiredEvent = Stripe.InvoicePaymentActionRequiredEvent;
  export type InvoicePaymentAttemptRequiredEvent = Stripe.InvoicePaymentAttemptRequiredEvent;
  export type InvoicePaymentFailedEvent = Stripe.InvoicePaymentFailedEvent;
  export type InvoicePaymentSucceededEvent = Stripe.InvoicePaymentSucceededEvent;
  export type InvoiceSentEvent = Stripe.InvoiceSentEvent;
  export type InvoiceUpcomingEvent = Stripe.InvoiceUpcomingEvent;
  export type InvoiceUpdatedEvent = Stripe.InvoiceUpdatedEvent;
  export type InvoiceVoidedEvent = Stripe.InvoiceVoidedEvent;
  export type InvoiceWillBeDueEvent = Stripe.InvoiceWillBeDueEvent;
  export type InvoicePaymentPaidEvent = Stripe.InvoicePaymentPaidEvent;
  export type InvoiceItemCreatedEvent = Stripe.InvoiceItemCreatedEvent;
  export type InvoiceItemDeletedEvent = Stripe.InvoiceItemDeletedEvent;
  export type IssuingAuthorizationCreatedEvent = Stripe.IssuingAuthorizationCreatedEvent;
  export type IssuingAuthorizationRequestEvent = Stripe.IssuingAuthorizationRequestEvent;
  export type IssuingAuthorizationUpdatedEvent = Stripe.IssuingAuthorizationUpdatedEvent;
  export type IssuingCardCreatedEvent = Stripe.IssuingCardCreatedEvent;
  export type IssuingCardUpdatedEvent = Stripe.IssuingCardUpdatedEvent;
  export type IssuingCardholderCreatedEvent = Stripe.IssuingCardholderCreatedEvent;
  export type IssuingCardholderUpdatedEvent = Stripe.IssuingCardholderUpdatedEvent;
  export type IssuingDisputeClosedEvent = Stripe.IssuingDisputeClosedEvent;
  export type IssuingDisputeCreatedEvent = Stripe.IssuingDisputeCreatedEvent;
  export type IssuingDisputeFundsReinstatedEvent = Stripe.IssuingDisputeFundsReinstatedEvent;
  export type IssuingDisputeFundsRescindedEvent = Stripe.IssuingDisputeFundsRescindedEvent;
  export type IssuingDisputeSubmittedEvent = Stripe.IssuingDisputeSubmittedEvent;
  export type IssuingDisputeUpdatedEvent = Stripe.IssuingDisputeUpdatedEvent;
  export type IssuingPersonalizationDesignActivatedEvent = Stripe.IssuingPersonalizationDesignActivatedEvent;
  export type IssuingPersonalizationDesignDeactivatedEvent = Stripe.IssuingPersonalizationDesignDeactivatedEvent;
  export type IssuingPersonalizationDesignRejectedEvent = Stripe.IssuingPersonalizationDesignRejectedEvent;
  export type IssuingPersonalizationDesignUpdatedEvent = Stripe.IssuingPersonalizationDesignUpdatedEvent;
  export type IssuingTokenCreatedEvent = Stripe.IssuingTokenCreatedEvent;
  export type IssuingTokenUpdatedEvent = Stripe.IssuingTokenUpdatedEvent;
  export type IssuingTransactionCreatedEvent = Stripe.IssuingTransactionCreatedEvent;
  export type IssuingTransactionPurchaseDetailsReceiptUpdatedEvent = Stripe.IssuingTransactionPurchaseDetailsReceiptUpdatedEvent;
  export type IssuingTransactionUpdatedEvent = Stripe.IssuingTransactionUpdatedEvent;
  export type MandateUpdatedEvent = Stripe.MandateUpdatedEvent;
  export type PaymentIntentAmountCapturableUpdatedEvent = Stripe.PaymentIntentAmountCapturableUpdatedEvent;
  export type PaymentIntentCanceledEvent = Stripe.PaymentIntentCanceledEvent;
  export type PaymentIntentCreatedEvent = Stripe.PaymentIntentCreatedEvent;
  export type PaymentIntentPartiallyFundedEvent = Stripe.PaymentIntentPartiallyFundedEvent;
  export type PaymentIntentPaymentFailedEvent = Stripe.PaymentIntentPaymentFailedEvent;
  export type PaymentIntentProcessingEvent = Stripe.PaymentIntentProcessingEvent;
  export type PaymentIntentRequiresActionEvent = Stripe.PaymentIntentRequiresActionEvent;
  export type PaymentIntentSucceededEvent = Stripe.PaymentIntentSucceededEvent;
  export type PaymentLinkCreatedEvent = Stripe.PaymentLinkCreatedEvent;
  export type PaymentLinkUpdatedEvent = Stripe.PaymentLinkUpdatedEvent;
  export type PaymentMethodAttachedEvent = Stripe.PaymentMethodAttachedEvent;
  export type PaymentMethodAutomaticallyUpdatedEvent = Stripe.PaymentMethodAutomaticallyUpdatedEvent;
  export type PaymentMethodDetachedEvent = Stripe.PaymentMethodDetachedEvent;
  export type PaymentMethodUpdatedEvent = Stripe.PaymentMethodUpdatedEvent;
  export type PayoutCanceledEvent = Stripe.PayoutCanceledEvent;
  export type PayoutCreatedEvent = Stripe.PayoutCreatedEvent;
  export type PayoutFailedEvent = Stripe.PayoutFailedEvent;
  export type PayoutPaidEvent = Stripe.PayoutPaidEvent;
  export type PayoutReconciliationCompletedEvent = Stripe.PayoutReconciliationCompletedEvent;
  export type PayoutUpdatedEvent = Stripe.PayoutUpdatedEvent;
  export type PersonCreatedEvent = Stripe.PersonCreatedEvent;
  export type PersonDeletedEvent = Stripe.PersonDeletedEvent;
  export type PersonUpdatedEvent = Stripe.PersonUpdatedEvent;
  export type PlanCreatedEvent = Stripe.PlanCreatedEvent;
  export type PlanDeletedEvent = Stripe.PlanDeletedEvent;
  export type PlanUpdatedEvent = Stripe.PlanUpdatedEvent;
  export type PriceCreatedEvent = Stripe.PriceCreatedEvent;
  export type PriceDeletedEvent = Stripe.PriceDeletedEvent;
  export type PriceUpdatedEvent = Stripe.PriceUpdatedEvent;
  export type ProductCreatedEvent = Stripe.ProductCreatedEvent;
  export type ProductDeletedEvent = Stripe.ProductDeletedEvent;
  export type ProductUpdatedEvent = Stripe.ProductUpdatedEvent;
  export type PromotionCodeCreatedEvent = Stripe.PromotionCodeCreatedEvent;
  export type PromotionCodeUpdatedEvent = Stripe.PromotionCodeUpdatedEvent;
  export type QuoteAcceptedEvent = Stripe.QuoteAcceptedEvent;
  export type QuoteCanceledEvent = Stripe.QuoteCanceledEvent;
  export type QuoteCreatedEvent = Stripe.QuoteCreatedEvent;
  export type QuoteFinalizedEvent = Stripe.QuoteFinalizedEvent;
  export type RadarEarlyFraudWarningCreatedEvent = Stripe.RadarEarlyFraudWarningCreatedEvent;
  export type RadarEarlyFraudWarningUpdatedEvent = Stripe.RadarEarlyFraudWarningUpdatedEvent;
  export type RefundCreatedEvent = Stripe.RefundCreatedEvent;
  export type RefundFailedEvent = Stripe.RefundFailedEvent;
  export type RefundUpdatedEvent = Stripe.RefundUpdatedEvent;
  export type ReportingReportRunFailedEvent = Stripe.ReportingReportRunFailedEvent;
  export type ReportingReportRunSucceededEvent = Stripe.ReportingReportRunSucceededEvent;
  export type ReportingReportTypeUpdatedEvent = Stripe.ReportingReportTypeUpdatedEvent;
  export type ReserveHoldCreatedEvent = Stripe.ReserveHoldCreatedEvent;
  export type ReserveHoldUpdatedEvent = Stripe.ReserveHoldUpdatedEvent;
  export type ReservePlanCreatedEvent = Stripe.ReservePlanCreatedEvent;
  export type ReservePlanDisabledEvent = Stripe.ReservePlanDisabledEvent;
  export type ReservePlanExpiredEvent = Stripe.ReservePlanExpiredEvent;
  export type ReservePlanUpdatedEvent = Stripe.ReservePlanUpdatedEvent;
  export type ReserveReleaseCreatedEvent = Stripe.ReserveReleaseCreatedEvent;
  export type ReviewClosedEvent = Stripe.ReviewClosedEvent;
  export type ReviewOpenedEvent = Stripe.ReviewOpenedEvent;
  export type SetupIntentCanceledEvent = Stripe.SetupIntentCanceledEvent;
  export type SetupIntentCreatedEvent = Stripe.SetupIntentCreatedEvent;
  export type SetupIntentRequiresActionEvent = Stripe.SetupIntentRequiresActionEvent;
  export type SetupIntentSetupFailedEvent = Stripe.SetupIntentSetupFailedEvent;
  export type SetupIntentSucceededEvent = Stripe.SetupIntentSucceededEvent;
  export type SigmaScheduledQueryRunCreatedEvent = Stripe.SigmaScheduledQueryRunCreatedEvent;
  export type SourceCanceledEvent = Stripe.SourceCanceledEvent;
  export type SourceChargeableEvent = Stripe.SourceChargeableEvent;
  export type SourceFailedEvent = Stripe.SourceFailedEvent;
  export type SourceMandateNotificationEvent = Stripe.SourceMandateNotificationEvent;
  export type SourceRefundAttributesRequiredEvent = Stripe.SourceRefundAttributesRequiredEvent;
  export type SourceTransactionCreatedEvent = Stripe.SourceTransactionCreatedEvent;
  export type SourceTransactionUpdatedEvent = Stripe.SourceTransactionUpdatedEvent;
  export type SubscriptionScheduleAbortedEvent = Stripe.SubscriptionScheduleAbortedEvent;
  export type SubscriptionScheduleCanceledEvent = Stripe.SubscriptionScheduleCanceledEvent;
  export type SubscriptionScheduleCompletedEvent = Stripe.SubscriptionScheduleCompletedEvent;
  export type SubscriptionScheduleCreatedEvent = Stripe.SubscriptionScheduleCreatedEvent;
  export type SubscriptionScheduleExpiringEvent = Stripe.SubscriptionScheduleExpiringEvent;
  export type SubscriptionScheduleReleasedEvent = Stripe.SubscriptionScheduleReleasedEvent;
  export type SubscriptionScheduleUpdatedEvent = Stripe.SubscriptionScheduleUpdatedEvent;
  export type TaxSettingsUpdatedEvent = Stripe.TaxSettingsUpdatedEvent;
  export type TaxRateCreatedEvent = Stripe.TaxRateCreatedEvent;
  export type TaxRateUpdatedEvent = Stripe.TaxRateUpdatedEvent;
  export type TerminalReaderActionFailedEvent = Stripe.TerminalReaderActionFailedEvent;
  export type TerminalReaderActionSucceededEvent = Stripe.TerminalReaderActionSucceededEvent;
  export type TerminalReaderActionUpdatedEvent = Stripe.TerminalReaderActionUpdatedEvent;
  export type TestHelpersTestClockAdvancingEvent = Stripe.TestHelpersTestClockAdvancingEvent;
  export type TestHelpersTestClockCreatedEvent = Stripe.TestHelpersTestClockCreatedEvent;
  export type TestHelpersTestClockDeletedEvent = Stripe.TestHelpersTestClockDeletedEvent;
  export type TestHelpersTestClockInternalFailureEvent = Stripe.TestHelpersTestClockInternalFailureEvent;
  export type TestHelpersTestClockReadyEvent = Stripe.TestHelpersTestClockReadyEvent;
  export type TopupCanceledEvent = Stripe.TopupCanceledEvent;
  export type TopupCreatedEvent = Stripe.TopupCreatedEvent;
  export type TopupFailedEvent = Stripe.TopupFailedEvent;
  export type TopupReversedEvent = Stripe.TopupReversedEvent;
  export type TopupSucceededEvent = Stripe.TopupSucceededEvent;
  export type TransferCreatedEvent = Stripe.TransferCreatedEvent;
  export type TransferReversedEvent = Stripe.TransferReversedEvent;
  export type TransferUpdatedEvent = Stripe.TransferUpdatedEvent;
  export type TreasuryCreditReversalCreatedEvent = Stripe.TreasuryCreditReversalCreatedEvent;
  export type TreasuryCreditReversalPostedEvent = Stripe.TreasuryCreditReversalPostedEvent;
  export type TreasuryDebitReversalCompletedEvent = Stripe.TreasuryDebitReversalCompletedEvent;
  export type TreasuryDebitReversalCreatedEvent = Stripe.TreasuryDebitReversalCreatedEvent;
  export type TreasuryDebitReversalInitialCreditGrantedEvent = Stripe.TreasuryDebitReversalInitialCreditGrantedEvent;
  export type TreasuryFinancialAccountClosedEvent = Stripe.TreasuryFinancialAccountClosedEvent;
  export type TreasuryFinancialAccountCreatedEvent = Stripe.TreasuryFinancialAccountCreatedEvent;
  export type TreasuryFinancialAccountFeaturesStatusUpdatedEvent = Stripe.TreasuryFinancialAccountFeaturesStatusUpdatedEvent;
  export type TreasuryInboundTransferCanceledEvent = Stripe.TreasuryInboundTransferCanceledEvent;
  export type TreasuryInboundTransferCreatedEvent = Stripe.TreasuryInboundTransferCreatedEvent;
  export type TreasuryInboundTransferFailedEvent = Stripe.TreasuryInboundTransferFailedEvent;
  export type TreasuryInboundTransferSucceededEvent = Stripe.TreasuryInboundTransferSucceededEvent;
  export type TreasuryOutboundPaymentCanceledEvent = Stripe.TreasuryOutboundPaymentCanceledEvent;
  export type TreasuryOutboundPaymentCreatedEvent = Stripe.TreasuryOutboundPaymentCreatedEvent;
  export type TreasuryOutboundPaymentExpectedArrivalDateUpdatedEvent = Stripe.TreasuryOutboundPaymentExpectedArrivalDateUpdatedEvent;
  export type TreasuryOutboundPaymentFailedEvent = Stripe.TreasuryOutboundPaymentFailedEvent;
  export type TreasuryOutboundPaymentPostedEvent = Stripe.TreasuryOutboundPaymentPostedEvent;
  export type TreasuryOutboundPaymentReturnedEvent = Stripe.TreasuryOutboundPaymentReturnedEvent;
  export type TreasuryOutboundPaymentTrackingDetailsUpdatedEvent = Stripe.TreasuryOutboundPaymentTrackingDetailsUpdatedEvent;
  export type TreasuryOutboundTransferCanceledEvent = Stripe.TreasuryOutboundTransferCanceledEvent;
  export type TreasuryOutboundTransferCreatedEvent = Stripe.TreasuryOutboundTransferCreatedEvent;
  export type TreasuryOutboundTransferExpectedArrivalDateUpdatedEvent = Stripe.TreasuryOutboundTransferExpectedArrivalDateUpdatedEvent;
  export type TreasuryOutboundTransferFailedEvent = Stripe.TreasuryOutboundTransferFailedEvent;
  export type TreasuryOutboundTransferPostedEvent = Stripe.TreasuryOutboundTransferPostedEvent;
  export type TreasuryOutboundTransferReturnedEvent = Stripe.TreasuryOutboundTransferReturnedEvent;
  export type TreasuryOutboundTransferTrackingDetailsUpdatedEvent = Stripe.TreasuryOutboundTransferTrackingDetailsUpdatedEvent;
  export type TreasuryReceivedCreditCreatedEvent = Stripe.TreasuryReceivedCreditCreatedEvent;
  export type TreasuryReceivedCreditFailedEvent = Stripe.TreasuryReceivedCreditFailedEvent;
  export type TreasuryReceivedCreditSucceededEvent = Stripe.TreasuryReceivedCreditSucceededEvent;
  export type TreasuryReceivedDebitCreatedEvent = Stripe.TreasuryReceivedDebitCreatedEvent;
  export type V2List<T> = Stripe.V2List<T>;
  export type V2ListPromise<T> = Stripe.V2ListPromise<T>;
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
