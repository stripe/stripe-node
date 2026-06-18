import {NodePlatformFunctions} from './platform/NodePlatformFunctions.js';
import {Stripe} from './stripe.core.js';
import {StripeConfig} from './lib.js';

// Initialize the Stripe class with Node platform functions
Stripe.initialize(new NodePlatformFunctions());

// Callable constructor: supports both `new Stripe()` and `Stripe()` for CJS consumers.
// typeof Stripe provides the construct signature and static members; the intersection
// adds a call signature for backward compatibility.
type StripeCallableConstructor = typeof Stripe & {
  (key: string, config?: StripeConfig): Stripe;
};

// Function declaration merges with the ambient namespace below (CJS `import type` / nested types).
// eslint-disable-next-line func-style
const StripeConstructor: StripeCallableConstructor = (function(
  this: any,
  key: string,
  config?: StripeConfig
): Stripe {
  // Support calling without `new`
  if (!(this instanceof StripeConstructor)) {
    return new Stripe(key, config);
  }
  return new Stripe(key, config);
} as unknown) as StripeCallableConstructor;

// Copy all static properties from Stripe to the wrapper
Object.setPrototypeOf(StripeConstructor, Stripe);
Object.setPrototypeOf(StripeConstructor.prototype, Stripe.prototype);

// Copy static properties explicitly
for (const key of Object.getOwnPropertyNames(Stripe)) {
  if (key !== 'length' && key !== 'prototype' && key !== 'name') {
    Object.defineProperty(StripeConstructor, key, {
      value: (Stripe as any)[key],
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }
}

// `new Stripe()` plus `Stripe()` call compat: the implementation is a function, so we merge
// callable + construct signatures here (see https://github.com/stripe/stripe-node/issues/2683).

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StripeConstructor extends Stripe {}
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
  }
  export namespace AccountCreateExternalAccountParams {
    export type Card = Stripe.AccountCreateExternalAccountParams.Card;
    export type BankAccount = Stripe.AccountCreateExternalAccountParams.BankAccount;
    export type CardToken = Stripe.AccountCreateExternalAccountParams.CardToken;
  }
  export namespace AccountCreatePersonParams {
    export type AdditionalTosAcceptances = Stripe.AccountCreatePersonParams.AdditionalTosAcceptances;
    export type Dob = Stripe.AccountCreatePersonParams.Dob;
    export type Documents = Stripe.AccountCreatePersonParams.Documents;
    export type PoliticalExposure = Stripe.AccountCreatePersonParams.PoliticalExposure;
    export type Relationship = Stripe.AccountCreatePersonParams.Relationship;
    export type UsCfpbData = Stripe.AccountCreatePersonParams.UsCfpbData;
    export type Verification = Stripe.AccountCreatePersonParams.Verification;
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
  }
  export namespace AccountUpdatePersonParams {
    export type AdditionalTosAcceptances = Stripe.AccountUpdatePersonParams.AdditionalTosAcceptances;
    export type Dob = Stripe.AccountUpdatePersonParams.Dob;
    export type Documents = Stripe.AccountUpdatePersonParams.Documents;
    export type PoliticalExposure = Stripe.AccountUpdatePersonParams.PoliticalExposure;
    export type Relationship = Stripe.AccountUpdatePersonParams.Relationship;
    export type UsCfpbData = Stripe.AccountUpdatePersonParams.UsCfpbData;
    export type Verification = Stripe.AccountUpdatePersonParams.Verification;
  }
  export namespace AccountLinkCreateParams {
    export type Type = Stripe.AccountLinkCreateParams.Type;
    export type Collect = Stripe.AccountLinkCreateParams.Collect;
    export type CollectionOptions = Stripe.AccountLinkCreateParams.CollectionOptions;
  }
  export namespace AccountSessionCreateParams {
    export type Components = Stripe.AccountSessionCreateParams.Components;
  }
  export namespace BalanceSettingsUpdateParams {
    export type Payments = Stripe.BalanceSettingsUpdateParams.Payments;
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
  }
  export namespace ChargeCaptureParams {
    export type TransferData = Stripe.ChargeCaptureParams.TransferData;
  }
  export namespace CouponCreateParams {
    export type AppliesTo = Stripe.CouponCreateParams.AppliesTo;
    export type CurrencyOptions = Stripe.CouponCreateParams.CurrencyOptions;
    export type Duration = Stripe.CouponCreateParams.Duration;
  }
  export namespace CouponUpdateParams {
    export type CurrencyOptions = Stripe.CouponUpdateParams.CurrencyOptions;
  }
  export namespace CreditNoteCreateParams {
    export type EmailType = Stripe.CreditNoteCreateParams.EmailType;
    export type Line = Stripe.CreditNoteCreateParams.Line;
    export type Reason = Stripe.CreditNoteCreateParams.Reason;
    export type Refund = Stripe.CreditNoteCreateParams.Refund;
    export type ShippingCost = Stripe.CreditNoteCreateParams.ShippingCost;
  }
  export namespace CreditNoteListPreviewLineItemsParams {
    export type EmailType = Stripe.CreditNoteListPreviewLineItemsParams.EmailType;
    export type Line = Stripe.CreditNoteListPreviewLineItemsParams.Line;
    export type Reason = Stripe.CreditNoteListPreviewLineItemsParams.Reason;
    export type Refund = Stripe.CreditNoteListPreviewLineItemsParams.Refund;
    export type ShippingCost = Stripe.CreditNoteListPreviewLineItemsParams.ShippingCost;
  }
  export namespace CreditNotePreviewParams {
    export type EmailType = Stripe.CreditNotePreviewParams.EmailType;
    export type Line = Stripe.CreditNotePreviewParams.Line;
    export type Reason = Stripe.CreditNotePreviewParams.Reason;
    export type Refund = Stripe.CreditNotePreviewParams.Refund;
    export type ShippingCost = Stripe.CreditNotePreviewParams.ShippingCost;
  }
  export namespace CustomerCreateParams {
    export type CashBalance = Stripe.CustomerCreateParams.CashBalance;
    export type InvoiceSettings = Stripe.CustomerCreateParams.InvoiceSettings;
    export type Shipping = Stripe.CustomerCreateParams.Shipping;
    export type Tax = Stripe.CustomerCreateParams.Tax;
    export type TaxExempt = Stripe.CustomerCreateParams.TaxExempt;
    export type TaxIdDatum = Stripe.CustomerCreateParams.TaxIdDatum;
  }
  export namespace CustomerUpdateParams {
    export type CashBalance = Stripe.CustomerUpdateParams.CashBalance;
    export type InvoiceSettings = Stripe.CustomerUpdateParams.InvoiceSettings;
    export type Shipping = Stripe.CustomerUpdateParams.Shipping;
    export type Tax = Stripe.CustomerUpdateParams.Tax;
    export type TaxExempt = Stripe.CustomerUpdateParams.TaxExempt;
  }
  export namespace CustomerCreateFundingInstructionsParams {
    export type BankTransfer = Stripe.CustomerCreateFundingInstructionsParams.BankTransfer;
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
  }
  export namespace CustomerUpdateSourceParams {
    export type AccountHolderType = Stripe.CustomerUpdateSourceParams.AccountHolderType;
    export type Owner = Stripe.CustomerUpdateSourceParams.Owner;
  }
  export namespace CustomerSessionCreateParams {
    export type Components = Stripe.CustomerSessionCreateParams.Components;
  }
  export namespace DisputeUpdateParams {
    export type Evidence = Stripe.DisputeUpdateParams.Evidence;
  }
  export namespace FileCreateParams {
    export type Purpose = Stripe.FileCreateParams.Purpose;
    export type FileLinkData = Stripe.FileCreateParams.FileLinkData;
  }
  export namespace FileListParams {
    export type Purpose = Stripe.FileListParams.Purpose;
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
  }
  export namespace InvoiceListParams {
    export type CollectionMethod = Stripe.InvoiceListParams.CollectionMethod;
    export type Status = Stripe.InvoiceListParams.Status;
  }
  export namespace InvoiceAddLinesParams {
    export type Line = Stripe.InvoiceAddLinesParams.Line;
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
  }
  export namespace InvoiceRemoveLinesParams {
    export type Line = Stripe.InvoiceRemoveLinesParams.Line;
  }
  export namespace InvoiceUpdateLinesParams {
    export type Line = Stripe.InvoiceUpdateLinesParams.Line;
  }
  export namespace InvoiceUpdateLineItemParams {
    export type Discount = Stripe.InvoiceUpdateLineItemParams.Discount;
    export type Period = Stripe.InvoiceUpdateLineItemParams.Period;
    export type PriceData = Stripe.InvoiceUpdateLineItemParams.PriceData;
    export type Pricing = Stripe.InvoiceUpdateLineItemParams.Pricing;
    export type TaxAmount = Stripe.InvoiceUpdateLineItemParams.TaxAmount;
  }
  export namespace InvoiceItemCreateParams {
    export type Discount = Stripe.InvoiceItemCreateParams.Discount;
    export type Period = Stripe.InvoiceItemCreateParams.Period;
    export type PriceData = Stripe.InvoiceItemCreateParams.PriceData;
    export type Pricing = Stripe.InvoiceItemCreateParams.Pricing;
    export type TaxBehavior = Stripe.InvoiceItemCreateParams.TaxBehavior;
  }
  export namespace InvoiceItemUpdateParams {
    export type Discount = Stripe.InvoiceItemUpdateParams.Discount;
    export type Period = Stripe.InvoiceItemUpdateParams.Period;
    export type PriceData = Stripe.InvoiceItemUpdateParams.PriceData;
    export type Pricing = Stripe.InvoiceItemUpdateParams.Pricing;
    export type TaxBehavior = Stripe.InvoiceItemUpdateParams.TaxBehavior;
  }
  export namespace InvoicePaymentListParams {
    export type Payment = Stripe.InvoicePaymentListParams.Payment;
    export type Status = Stripe.InvoicePaymentListParams.Status;
  }
  export namespace InvoiceRenderingTemplateListParams {
    export type Status = Stripe.InvoiceRenderingTemplateListParams.Status;
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
  }
  export namespace PaymentIntentCancelParams {
    export type CancellationReason = Stripe.PaymentIntentCancelParams.CancellationReason;
  }
  export namespace PaymentIntentCaptureParams {
    export type AmountDetails = Stripe.PaymentIntentCaptureParams.AmountDetails;
    export type Hooks = Stripe.PaymentIntentCaptureParams.Hooks;
    export type PaymentDetails = Stripe.PaymentIntentCaptureParams.PaymentDetails;
    export type TransferData = Stripe.PaymentIntentCaptureParams.TransferData;
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
  }
  export namespace PaymentIntentIncrementAuthorizationParams {
    export type AmountDetails = Stripe.PaymentIntentIncrementAuthorizationParams.AmountDetails;
    export type Hooks = Stripe.PaymentIntentIncrementAuthorizationParams.Hooks;
    export type PaymentDetails = Stripe.PaymentIntentIncrementAuthorizationParams.PaymentDetails;
    export type TransferData = Stripe.PaymentIntentIncrementAuthorizationParams.TransferData;
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
  }
  export namespace PaymentMethodUpdateParams {
    export type AllowRedisplay = Stripe.PaymentMethodUpdateParams.AllowRedisplay;
    export type BillingDetails = Stripe.PaymentMethodUpdateParams.BillingDetails;
    export type Card = Stripe.PaymentMethodUpdateParams.Card;
    export type Payto = Stripe.PaymentMethodUpdateParams.Payto;
    export type UsBankAccount = Stripe.PaymentMethodUpdateParams.UsBankAccount;
  }
  export namespace PaymentMethodListParams {
    export type AllowRedisplay = Stripe.PaymentMethodListParams.AllowRedisplay;
    export type Type = Stripe.PaymentMethodListParams.Type;
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
  }
  export namespace PaymentRecordReportPaymentAttemptParams {
    export type Failed = Stripe.PaymentRecordReportPaymentAttemptParams.Failed;
    export type Guaranteed = Stripe.PaymentRecordReportPaymentAttemptParams.Guaranteed;
    export type Outcome = Stripe.PaymentRecordReportPaymentAttemptParams.Outcome;
    export type PaymentMethodDetails = Stripe.PaymentRecordReportPaymentAttemptParams.PaymentMethodDetails;
    export type ShippingDetails = Stripe.PaymentRecordReportPaymentAttemptParams.ShippingDetails;
  }
  export namespace PaymentRecordReportPaymentAttemptInformationalParams {
    export type CustomerDetails = Stripe.PaymentRecordReportPaymentAttemptInformationalParams.CustomerDetails;
    export type ShippingDetails = Stripe.PaymentRecordReportPaymentAttemptInformationalParams.ShippingDetails;
  }
  export namespace PaymentRecordReportRefundParams {
    export type ProcessorDetails = Stripe.PaymentRecordReportRefundParams.ProcessorDetails;
    export type Refunded = Stripe.PaymentRecordReportRefundParams.Refunded;
    export type Amount = Stripe.PaymentRecordReportRefundParams.Amount;
  }
  export namespace PayoutCreateParams {
    export type Method = Stripe.PayoutCreateParams.Method;
    export type SourceType = Stripe.PayoutCreateParams.SourceType;
  }
  export namespace PlanCreateParams {
    export type Interval = Stripe.PlanCreateParams.Interval;
    export type BillingScheme = Stripe.PlanCreateParams.BillingScheme;
    export type Product = Stripe.PlanCreateParams.Product;
    export type Tier = Stripe.PlanCreateParams.Tier;
    export type TiersMode = Stripe.PlanCreateParams.TiersMode;
    export type TransformUsage = Stripe.PlanCreateParams.TransformUsage;
    export type UsageType = Stripe.PlanCreateParams.UsageType;
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
  }
  export namespace PriceUpdateParams {
    export type CurrencyOptions = Stripe.PriceUpdateParams.CurrencyOptions;
    export type TaxBehavior = Stripe.PriceUpdateParams.TaxBehavior;
  }
  export namespace PriceListParams {
    export type Recurring = Stripe.PriceListParams.Recurring;
    export type Type = Stripe.PriceListParams.Type;
  }
  export namespace ProductCreateParams {
    export type DefaultPriceData = Stripe.ProductCreateParams.DefaultPriceData;
    export type MarketingFeature = Stripe.ProductCreateParams.MarketingFeature;
    export type PackageDimensions = Stripe.ProductCreateParams.PackageDimensions;
    export type Type = Stripe.ProductCreateParams.Type;
  }
  export namespace ProductUpdateParams {
    export type MarketingFeature = Stripe.ProductUpdateParams.MarketingFeature;
    export type PackageDimensions = Stripe.ProductUpdateParams.PackageDimensions;
  }
  export namespace ProductListParams {
    export type Type = Stripe.ProductListParams.Type;
  }
  export namespace PromotionCodeCreateParams {
    export type Promotion = Stripe.PromotionCodeCreateParams.Promotion;
    export type Restrictions = Stripe.PromotionCodeCreateParams.Restrictions;
  }
  export namespace PromotionCodeUpdateParams {
    export type Restrictions = Stripe.PromotionCodeUpdateParams.Restrictions;
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
  }
  export namespace QuoteUpdateParams {
    export type AutomaticTax = Stripe.QuoteUpdateParams.AutomaticTax;
    export type CollectionMethod = Stripe.QuoteUpdateParams.CollectionMethod;
    export type Discount = Stripe.QuoteUpdateParams.Discount;
    export type InvoiceSettings = Stripe.QuoteUpdateParams.InvoiceSettings;
    export type LineItem = Stripe.QuoteUpdateParams.LineItem;
    export type SubscriptionData = Stripe.QuoteUpdateParams.SubscriptionData;
    export type TransferData = Stripe.QuoteUpdateParams.TransferData;
  }
  export namespace QuoteListParams {
    export type Status = Stripe.QuoteListParams.Status;
  }
  export namespace RefundCreateParams {
    export type Reason = Stripe.RefundCreateParams.Reason;
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
  }
  export namespace SetupIntentUpdateParams {
    export type ExcludedPaymentMethodType = Stripe.SetupIntentUpdateParams.ExcludedPaymentMethodType;
    export type FlowDirection = Stripe.SetupIntentUpdateParams.FlowDirection;
    export type PaymentMethodData = Stripe.SetupIntentUpdateParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe.SetupIntentUpdateParams.PaymentMethodOptions;
  }
  export namespace SetupIntentCancelParams {
    export type CancellationReason = Stripe.SetupIntentCancelParams.CancellationReason;
  }
  export namespace SetupIntentConfirmParams {
    export type MandateData = Stripe.SetupIntentConfirmParams.MandateData;
    export type PaymentMethodData = Stripe.SetupIntentConfirmParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe.SetupIntentConfirmParams.PaymentMethodOptions;
  }
  export namespace ShippingRateCreateParams {
    export type DeliveryEstimate = Stripe.ShippingRateCreateParams.DeliveryEstimate;
    export type FixedAmount = Stripe.ShippingRateCreateParams.FixedAmount;
    export type TaxBehavior = Stripe.ShippingRateCreateParams.TaxBehavior;
  }
  export namespace ShippingRateUpdateParams {
    export type FixedAmount = Stripe.ShippingRateUpdateParams.FixedAmount;
    export type TaxBehavior = Stripe.ShippingRateUpdateParams.TaxBehavior;
  }
  export namespace SourceCreateParams {
    export type Flow = Stripe.SourceCreateParams.Flow;
    export type Mandate = Stripe.SourceCreateParams.Mandate;
    export type Owner = Stripe.SourceCreateParams.Owner;
    export type Receiver = Stripe.SourceCreateParams.Receiver;
    export type Redirect = Stripe.SourceCreateParams.Redirect;
    export type SourceOrder = Stripe.SourceCreateParams.SourceOrder;
    export type Usage = Stripe.SourceCreateParams.Usage;
  }
  export namespace SourceUpdateParams {
    export type Mandate = Stripe.SourceUpdateParams.Mandate;
    export type Owner = Stripe.SourceUpdateParams.Owner;
    export type SourceOrder = Stripe.SourceUpdateParams.SourceOrder;
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
  }
  export namespace SubscriptionListParams {
    export type AutomaticTax = Stripe.SubscriptionListParams.AutomaticTax;
    export type CollectionMethod = Stripe.SubscriptionListParams.CollectionMethod;
    export type Status = Stripe.SubscriptionListParams.Status;
  }
  export namespace SubscriptionCancelParams {
    export type CancellationDetails = Stripe.SubscriptionCancelParams.CancellationDetails;
  }
  export namespace SubscriptionMigrateParams {
    export type BillingMode = Stripe.SubscriptionMigrateParams.BillingMode;
  }
  export namespace SubscriptionResumeParams {
    export type BillingCycleAnchor = Stripe.SubscriptionResumeParams.BillingCycleAnchor;
    export type ProrationBehavior = Stripe.SubscriptionResumeParams.ProrationBehavior;
  }
  export namespace SubscriptionItemCreateParams {
    export type BillingThresholds = Stripe.SubscriptionItemCreateParams.BillingThresholds;
    export type Discount = Stripe.SubscriptionItemCreateParams.Discount;
    export type PaymentBehavior = Stripe.SubscriptionItemCreateParams.PaymentBehavior;
    export type PriceData = Stripe.SubscriptionItemCreateParams.PriceData;
    export type ProrationBehavior = Stripe.SubscriptionItemCreateParams.ProrationBehavior;
  }
  export namespace SubscriptionItemUpdateParams {
    export type BillingThresholds = Stripe.SubscriptionItemUpdateParams.BillingThresholds;
    export type Discount = Stripe.SubscriptionItemUpdateParams.Discount;
    export type PaymentBehavior = Stripe.SubscriptionItemUpdateParams.PaymentBehavior;
    export type PriceData = Stripe.SubscriptionItemUpdateParams.PriceData;
    export type ProrationBehavior = Stripe.SubscriptionItemUpdateParams.ProrationBehavior;
  }
  export namespace SubscriptionItemDeleteParams {
    export type PaymentBehavior = Stripe.SubscriptionItemDeleteParams.PaymentBehavior;
    export type ProrationBehavior = Stripe.SubscriptionItemDeleteParams.ProrationBehavior;
  }
  export namespace SubscriptionScheduleCreateParams {
    export type BillingMode = Stripe.SubscriptionScheduleCreateParams.BillingMode;
    export type DefaultSettings = Stripe.SubscriptionScheduleCreateParams.DefaultSettings;
    export type EndBehavior = Stripe.SubscriptionScheduleCreateParams.EndBehavior;
    export type Phase = Stripe.SubscriptionScheduleCreateParams.Phase;
  }
  export namespace SubscriptionScheduleUpdateParams {
    export type DefaultSettings = Stripe.SubscriptionScheduleUpdateParams.DefaultSettings;
    export type EndBehavior = Stripe.SubscriptionScheduleUpdateParams.EndBehavior;
    export type Phase = Stripe.SubscriptionScheduleUpdateParams.Phase;
    export type ProrationBehavior = Stripe.SubscriptionScheduleUpdateParams.ProrationBehavior;
  }
  export namespace TaxIdCreateParams {
    export type Type = Stripe.TaxIdCreateParams.Type;
    export type Owner = Stripe.TaxIdCreateParams.Owner;
  }
  export namespace TaxIdListParams {
    export type Owner = Stripe.TaxIdListParams.Owner;
  }
  export namespace TaxRateCreateParams {
    export type TaxType = Stripe.TaxRateCreateParams.TaxType;
  }
  export namespace TaxRateUpdateParams {
    export type TaxType = Stripe.TaxRateUpdateParams.TaxType;
  }
  export namespace TokenCreateParams {
    export type Account = Stripe.TokenCreateParams.Account;
    export type BankAccount = Stripe.TokenCreateParams.BankAccount;
    export type Card = Stripe.TokenCreateParams.Card;
    export type CvcUpdate = Stripe.TokenCreateParams.CvcUpdate;
    export type Person = Stripe.TokenCreateParams.Person;
    export type Pii = Stripe.TokenCreateParams.Pii;
  }
  export namespace TopupListParams {
    export type Status = Stripe.TopupListParams.Status;
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
    }
    export namespace SecretListParams {
      export type Scope = Stripe.Apps.SecretListParams.Scope;
    }
    export namespace SecretDeleteWhereParams {
      export type Scope = Stripe.Apps.SecretDeleteWhereParams.Scope;
    }
    export namespace SecretFindParams {
      export type Scope = Stripe.Apps.SecretFindParams.Scope;
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
    }
    export namespace CreditBalanceSummaryRetrieveParams {
      export type Filter = Stripe.Billing.CreditBalanceSummaryRetrieveParams.Filter;
    }
    export namespace CreditGrantCreateParams {
      export type Amount = Stripe.Billing.CreditGrantCreateParams.Amount;
      export type ApplicabilityConfig = Stripe.Billing.CreditGrantCreateParams.ApplicabilityConfig;
      export type Category = Stripe.Billing.CreditGrantCreateParams.Category;
    }
    export namespace MeterCreateParams {
      export type DefaultAggregation = Stripe.Billing.MeterCreateParams.DefaultAggregation;
      export type CustomerMapping = Stripe.Billing.MeterCreateParams.CustomerMapping;
      export type EventTimeWindow = Stripe.Billing.MeterCreateParams.EventTimeWindow;
      export type ValueSettings = Stripe.Billing.MeterCreateParams.ValueSettings;
    }
    export namespace MeterListParams {
      export type Status = Stripe.Billing.MeterListParams.Status;
    }
    export namespace MeterListEventSummariesParams {
      export type ValueGroupingWindow = Stripe.Billing.MeterListEventSummariesParams.ValueGroupingWindow;
    }
    export namespace MeterEventAdjustmentCreateParams {
      export type Cancel = Stripe.Billing.MeterEventAdjustmentCreateParams.Cancel;
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
    }
    export namespace ConfigurationUpdateParams {
      export type BusinessProfile = Stripe.BillingPortal.ConfigurationUpdateParams.BusinessProfile;
      export type Features = Stripe.BillingPortal.ConfigurationUpdateParams.Features;
      export type LoginPage = Stripe.BillingPortal.ConfigurationUpdateParams.LoginPage;
    }
    export namespace SessionCreateParams {
      export type FlowData = Stripe.BillingPortal.SessionCreateParams.FlowData;
      export type Locale = Stripe.BillingPortal.SessionCreateParams.Locale;
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
    }
    export namespace SessionUpdateParams {
      export type CollectedInformation = Stripe.Checkout.SessionUpdateParams.CollectedInformation;
      export type LineItem = Stripe.Checkout.SessionUpdateParams.LineItem;
      export type ShippingOption = Stripe.Checkout.SessionUpdateParams.ShippingOption;
    }
    export namespace SessionListParams {
      export type CustomerDetails = Stripe.Checkout.SessionListParams.CustomerDetails;
      export type Status = Stripe.Checkout.SessionListParams.Status;
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
    export namespace OrderUpdateParams {
      export type Beneficiary = Stripe.Climate.OrderUpdateParams.Beneficiary;
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
    export namespace AccountListParams {
      export type AccountHolder = Stripe.FinancialConnections.AccountListParams.AccountHolder;
    }
    export namespace AccountRefreshParams {
      export type Feature = Stripe.FinancialConnections.AccountRefreshParams.Feature;
    }
    export namespace SessionCreateParams {
      export type AccountHolder = Stripe.FinancialConnections.SessionCreateParams.AccountHolder;
      export type Permission = Stripe.FinancialConnections.SessionCreateParams.Permission;
      export type Filters = Stripe.FinancialConnections.SessionCreateParams.Filters;
      export type Prefetch = Stripe.FinancialConnections.SessionCreateParams.Prefetch;
    }
    export namespace TransactionListParams {
      export type TransactionRefresh = Stripe.FinancialConnections.TransactionListParams.TransactionRefresh;
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
    export namespace VerificationReportListParams {
      export type Type = Stripe.Identity.VerificationReportListParams.Type;
    }
    export namespace VerificationSessionCreateParams {
      export type Options = Stripe.Identity.VerificationSessionCreateParams.Options;
      export type ProvidedDetails = Stripe.Identity.VerificationSessionCreateParams.ProvidedDetails;
      export type RelatedPerson = Stripe.Identity.VerificationSessionCreateParams.RelatedPerson;
      export type Type = Stripe.Identity.VerificationSessionCreateParams.Type;
    }
    export namespace VerificationSessionUpdateParams {
      export type Options = Stripe.Identity.VerificationSessionUpdateParams.Options;
      export type ProvidedDetails = Stripe.Identity.VerificationSessionUpdateParams.ProvidedDetails;
      export type Type = Stripe.Identity.VerificationSessionUpdateParams.Type;
    }
    export namespace VerificationSessionListParams {
      export type Status = Stripe.Identity.VerificationSessionListParams.Status;
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
    export namespace AuthorizationListParams {
      export type Status = Stripe.Issuing.AuthorizationListParams.Status;
    }
    export namespace CardCreateParams {
      export type Type = Stripe.Issuing.CardCreateParams.Type;
      export type LifecycleControls = Stripe.Issuing.CardCreateParams.LifecycleControls;
      export type Pin = Stripe.Issuing.CardCreateParams.Pin;
      export type ReplacementReason = Stripe.Issuing.CardCreateParams.ReplacementReason;
      export type Shipping = Stripe.Issuing.CardCreateParams.Shipping;
      export type SpendingControls = Stripe.Issuing.CardCreateParams.SpendingControls;
      export type Status = Stripe.Issuing.CardCreateParams.Status;
    }
    export namespace CardUpdateParams {
      export type CancellationReason = Stripe.Issuing.CardUpdateParams.CancellationReason;
      export type Pin = Stripe.Issuing.CardUpdateParams.Pin;
      export type Shipping = Stripe.Issuing.CardUpdateParams.Shipping;
      export type SpendingControls = Stripe.Issuing.CardUpdateParams.SpendingControls;
      export type Status = Stripe.Issuing.CardUpdateParams.Status;
    }
    export namespace CardListParams {
      export type Status = Stripe.Issuing.CardListParams.Status;
      export type Type = Stripe.Issuing.CardListParams.Type;
    }
    export namespace CardholderCreateParams {
      export type Billing = Stripe.Issuing.CardholderCreateParams.Billing;
      export type Company = Stripe.Issuing.CardholderCreateParams.Company;
      export type Individual = Stripe.Issuing.CardholderCreateParams.Individual;
      export type PreferredLocale = Stripe.Issuing.CardholderCreateParams.PreferredLocale;
      export type SpendingControls = Stripe.Issuing.CardholderCreateParams.SpendingControls;
      export type Status = Stripe.Issuing.CardholderCreateParams.Status;
      export type Type = Stripe.Issuing.CardholderCreateParams.Type;
    }
    export namespace CardholderUpdateParams {
      export type Billing = Stripe.Issuing.CardholderUpdateParams.Billing;
      export type Company = Stripe.Issuing.CardholderUpdateParams.Company;
      export type Individual = Stripe.Issuing.CardholderUpdateParams.Individual;
      export type PreferredLocale = Stripe.Issuing.CardholderUpdateParams.PreferredLocale;
      export type SpendingControls = Stripe.Issuing.CardholderUpdateParams.SpendingControls;
      export type Status = Stripe.Issuing.CardholderUpdateParams.Status;
    }
    export namespace CardholderListParams {
      export type Status = Stripe.Issuing.CardholderListParams.Status;
      export type Type = Stripe.Issuing.CardholderListParams.Type;
    }
    export namespace DisputeCreateParams {
      export type Evidence = Stripe.Issuing.DisputeCreateParams.Evidence;
      export type Treasury = Stripe.Issuing.DisputeCreateParams.Treasury;
    }
    export namespace DisputeUpdateParams {
      export type Evidence = Stripe.Issuing.DisputeUpdateParams.Evidence;
    }
    export namespace DisputeListParams {
      export type Status = Stripe.Issuing.DisputeListParams.Status;
    }
    export namespace PersonalizationDesignCreateParams {
      export type CarrierText = Stripe.Issuing.PersonalizationDesignCreateParams.CarrierText;
      export type Preferences = Stripe.Issuing.PersonalizationDesignCreateParams.Preferences;
    }
    export namespace PersonalizationDesignUpdateParams {
      export type CarrierText = Stripe.Issuing.PersonalizationDesignUpdateParams.CarrierText;
      export type Preferences = Stripe.Issuing.PersonalizationDesignUpdateParams.Preferences;
    }
    export namespace PersonalizationDesignListParams {
      export type Preferences = Stripe.Issuing.PersonalizationDesignListParams.Preferences;
      export type Status = Stripe.Issuing.PersonalizationDesignListParams.Status;
    }
    export namespace PhysicalBundleListParams {
      export type Status = Stripe.Issuing.PhysicalBundleListParams.Status;
      export type Type = Stripe.Issuing.PhysicalBundleListParams.Type;
    }
    export namespace TokenUpdateParams {
      export type Status = Stripe.Issuing.TokenUpdateParams.Status;
    }
    export namespace TokenListParams {
      export type Status = Stripe.Issuing.TokenListParams.Status;
    }
    export namespace TransactionListParams {
      export type Type = Stripe.Issuing.TransactionListParams.Type;
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
    }
    export namespace ValueListCreateParams {
      export type ItemType = Stripe.Radar.ValueListCreateParams.ItemType;
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
    }
  }
  export namespace Sigma {
    export type ScheduledQueryRun = Stripe.Sigma.ScheduledQueryRun;
    export type ScheduledQueryRunRetrieveParams = Stripe.Sigma.ScheduledQueryRunRetrieveParams;
    export type ScheduledQueryRunListParams = Stripe.Sigma.ScheduledQueryRunListParams;
    export type ScheduledQueryRunResource = Stripe.Sigma.ScheduledQueryRunResource;
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
    export namespace CalculationCreateParams {
      export type LineItem = Stripe.Tax.CalculationCreateParams.LineItem;
      export type CustomerDetails = Stripe.Tax.CalculationCreateParams.CustomerDetails;
      export type ShipFromDetails = Stripe.Tax.CalculationCreateParams.ShipFromDetails;
      export type ShippingCost = Stripe.Tax.CalculationCreateParams.ShippingCost;
    }
    export namespace RegistrationCreateParams {
      export type CountryOptions = Stripe.Tax.RegistrationCreateParams.CountryOptions;
    }
    export namespace RegistrationListParams {
      export type Status = Stripe.Tax.RegistrationListParams.Status;
    }
    export namespace SettingsUpdateParams {
      export type Defaults = Stripe.Tax.SettingsUpdateParams.Defaults;
      export type HeadOffice = Stripe.Tax.SettingsUpdateParams.HeadOffice;
    }
    export namespace TransactionCreateReversalParams {
      export type Mode = Stripe.Tax.TransactionCreateReversalParams.Mode;
      export type LineItem = Stripe.Tax.TransactionCreateReversalParams.LineItem;
      export type ShippingCost = Stripe.Tax.TransactionCreateReversalParams.ShippingCost;
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
    }
    export namespace ConfigurationUpdateParams {
      export type BbposWisepad3 = Stripe.Terminal.ConfigurationUpdateParams.BbposWisepad3;
      export type BbposWiseposE = Stripe.Terminal.ConfigurationUpdateParams.BbposWiseposE;
      export type Cellular = Stripe.Terminal.ConfigurationUpdateParams.Cellular;
      export type Offline = Stripe.Terminal.ConfigurationUpdateParams.Offline;
      export type RebootWindow = Stripe.Terminal.ConfigurationUpdateParams.RebootWindow;
      export type StripeS700 = Stripe.Terminal.ConfigurationUpdateParams.StripeS700;
      export type StripeS710 = Stripe.Terminal.ConfigurationUpdateParams.StripeS710;
      export type Tipping = Stripe.Terminal.ConfigurationUpdateParams.Tipping;
      export type VerifoneM425 = Stripe.Terminal.ConfigurationUpdateParams.VerifoneM425;
      export type VerifoneP400 = Stripe.Terminal.ConfigurationUpdateParams.VerifoneP400;
      export type VerifoneP630 = Stripe.Terminal.ConfigurationUpdateParams.VerifoneP630;
      export type VerifoneUx700 = Stripe.Terminal.ConfigurationUpdateParams.VerifoneUx700;
      export type VerifoneV660p = Stripe.Terminal.ConfigurationUpdateParams.VerifoneV660p;
      export type Wifi = Stripe.Terminal.ConfigurationUpdateParams.Wifi;
    }
    export namespace LocationCreateParams {
      export type Address = Stripe.Terminal.LocationCreateParams.Address;
    }
    export namespace OnboardingLinkCreateParams {
      export type LinkOptions = Stripe.Terminal.OnboardingLinkCreateParams.LinkOptions;
    }
    export namespace ReaderListParams {
      export type DeviceType = Stripe.Terminal.ReaderListParams.DeviceType;
      export type Status = Stripe.Terminal.ReaderListParams.Status;
    }
    export namespace ReaderCollectInputsParams {
      export type Input = Stripe.Terminal.ReaderCollectInputsParams.Input;
    }
    export namespace ReaderCollectPaymentMethodParams {
      export type CollectConfig = Stripe.Terminal.ReaderCollectPaymentMethodParams.CollectConfig;
    }
    export namespace ReaderConfirmPaymentIntentParams {
      export type ConfirmConfig = Stripe.Terminal.ReaderConfirmPaymentIntentParams.ConfirmConfig;
    }
    export namespace ReaderProcessPaymentIntentParams {
      export type ProcessConfig = Stripe.Terminal.ReaderProcessPaymentIntentParams.ProcessConfig;
    }
    export namespace ReaderProcessSetupIntentParams {
      export type AllowRedisplay = Stripe.Terminal.ReaderProcessSetupIntentParams.AllowRedisplay;
      export type ProcessConfig = Stripe.Terminal.ReaderProcessSetupIntentParams.ProcessConfig;
    }
    export namespace ReaderRefundPaymentParams {
      export type RefundPaymentConfig = Stripe.Terminal.ReaderRefundPaymentParams.RefundPaymentConfig;
    }
    export namespace ReaderSetReaderDisplayParams {
      export type Cart = Stripe.Terminal.ReaderSetReaderDisplayParams.Cart;
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
    export namespace CreditReversalListParams {
      export type Status = Stripe.Treasury.CreditReversalListParams.Status;
    }
    export namespace DebitReversalListParams {
      export type Resolution = Stripe.Treasury.DebitReversalListParams.Resolution;
      export type Status = Stripe.Treasury.DebitReversalListParams.Status;
    }
    export namespace FinancialAccountCreateParams {
      export type Features = Stripe.Treasury.FinancialAccountCreateParams.Features;
      export type PlatformRestrictions = Stripe.Treasury.FinancialAccountCreateParams.PlatformRestrictions;
    }
    export namespace FinancialAccountUpdateParams {
      export type Features = Stripe.Treasury.FinancialAccountUpdateParams.Features;
      export type ForwardingSettings = Stripe.Treasury.FinancialAccountUpdateParams.ForwardingSettings;
      export type PlatformRestrictions = Stripe.Treasury.FinancialAccountUpdateParams.PlatformRestrictions;
    }
    export namespace FinancialAccountListParams {
      export type Status = Stripe.Treasury.FinancialAccountListParams.Status;
    }
    export namespace FinancialAccountCloseParams {
      export type ForwardingSettings = Stripe.Treasury.FinancialAccountCloseParams.ForwardingSettings;
    }
    export namespace FinancialAccountUpdateFeaturesParams {
      export type CardIssuing = Stripe.Treasury.FinancialAccountUpdateFeaturesParams.CardIssuing;
      export type DepositInsurance = Stripe.Treasury.FinancialAccountUpdateFeaturesParams.DepositInsurance;
      export type FinancialAddresses = Stripe.Treasury.FinancialAccountUpdateFeaturesParams.FinancialAddresses;
      export type InboundTransfers = Stripe.Treasury.FinancialAccountUpdateFeaturesParams.InboundTransfers;
      export type IntraStripeFlows = Stripe.Treasury.FinancialAccountUpdateFeaturesParams.IntraStripeFlows;
      export type OutboundPayments = Stripe.Treasury.FinancialAccountUpdateFeaturesParams.OutboundPayments;
      export type OutboundTransfers = Stripe.Treasury.FinancialAccountUpdateFeaturesParams.OutboundTransfers;
    }
    export namespace InboundTransferListParams {
      export type Status = Stripe.Treasury.InboundTransferListParams.Status;
    }
    export namespace OutboundPaymentCreateParams {
      export type DestinationPaymentMethodData = Stripe.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodData;
      export type DestinationPaymentMethodOptions = Stripe.Treasury.OutboundPaymentCreateParams.DestinationPaymentMethodOptions;
      export type EndUserDetails = Stripe.Treasury.OutboundPaymentCreateParams.EndUserDetails;
    }
    export namespace OutboundPaymentListParams {
      export type Status = Stripe.Treasury.OutboundPaymentListParams.Status;
    }
    export namespace OutboundTransferCreateParams {
      export type DestinationPaymentMethodData = Stripe.Treasury.OutboundTransferCreateParams.DestinationPaymentMethodData;
      export type DestinationPaymentMethodOptions = Stripe.Treasury.OutboundTransferCreateParams.DestinationPaymentMethodOptions;
    }
    export namespace OutboundTransferListParams {
      export type Status = Stripe.Treasury.OutboundTransferListParams.Status;
    }
    export namespace ReceivedCreditListParams {
      export type LinkedFlows = Stripe.Treasury.ReceivedCreditListParams.LinkedFlows;
      export type Status = Stripe.Treasury.ReceivedCreditListParams.Status;
    }
    export namespace ReceivedDebitListParams {
      export type Status = Stripe.Treasury.ReceivedDebitListParams.Status;
    }
    export namespace TransactionListParams {
      export type OrderBy = Stripe.Treasury.TransactionListParams.OrderBy;
      export type Status = Stripe.Treasury.TransactionListParams.Status;
      export type StatusTransitions = Stripe.Treasury.TransactionListParams.StatusTransitions;
    }
    export namespace TransactionEntryListParams {
      export type OrderBy = Stripe.Treasury.TransactionEntryListParams.OrderBy;
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
      }
      export namespace AccountRetrieveParams {
        export type Include = Stripe.V2.Core.AccountRetrieveParams.Include;
      }
      export namespace AccountUpdateParams {
        export type Configuration = Stripe.V2.Core.AccountUpdateParams.Configuration;
        export type Dashboard = Stripe.V2.Core.AccountUpdateParams.Dashboard;
        export type Defaults = Stripe.V2.Core.AccountUpdateParams.Defaults;
        export type Identity = Stripe.V2.Core.AccountUpdateParams.Identity;
        export type Include = Stripe.V2.Core.AccountUpdateParams.Include;
      }
      export namespace AccountListParams {
        export type AppliedConfiguration = Stripe.V2.Core.AccountListParams.AppliedConfiguration;
      }
      export namespace AccountCloseParams {
        export type AppliedConfiguration = Stripe.V2.Core.AccountCloseParams.AppliedConfiguration;
      }
      export namespace AccountLinkCreateParams {
        export type UseCase = Stripe.V2.Core.AccountLinkCreateParams.UseCase;
      }
      export namespace AccountTokenCreateParams {
        export type Identity = Stripe.V2.Core.AccountTokenCreateParams.Identity;
      }
      export namespace EventDestinationCreateParams {
        export type EventPayload = Stripe.V2.Core.EventDestinationCreateParams.EventPayload;
        export type Type = Stripe.V2.Core.EventDestinationCreateParams.Type;
        export type AmazonEventbridge = Stripe.V2.Core.EventDestinationCreateParams.AmazonEventbridge;
        export type AzureEventGrid = Stripe.V2.Core.EventDestinationCreateParams.AzureEventGrid;
        export type Include = Stripe.V2.Core.EventDestinationCreateParams.Include;
        export type WebhookEndpoint = Stripe.V2.Core.EventDestinationCreateParams.WebhookEndpoint;
      }
      export namespace EventDestinationUpdateParams {
        export type WebhookEndpoint = Stripe.V2.Core.EventDestinationUpdateParams.WebhookEndpoint;
      }
    }
    export namespace Commerce {
      export type ProductCatalogImport = Stripe.V2.Commerce.ProductCatalogImport;
    }
  }
  export namespace Reserve {
    export type Hold = Stripe.Reserve.Hold;
    export type Plan = Stripe.Reserve.Plan;
    export type Release = Stripe.Reserve.Release;
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

  export type Response<T> = Stripe.Response<T>;
  export type RequestOptions = Stripe.RequestOptions;
  export type RawRequestOptions = Stripe.RawRequestOptions;
  export type ApiList<T> = Stripe.ApiList<T>;
  export type ApiListPromise<T> = Stripe.ApiListPromise<T>;
  export type ApiSearchResultPromise<T> = Stripe.ApiSearchResultPromise<T>;
  export type ApiSearchResult<T> = Stripe.ApiSearchResult<T>;
  export type StripeStreamResponse = Stripe.StripeStreamResponse;
  export type RequestEvent = Stripe.RequestEvent;
  export type ResponseEvent = Stripe.ResponseEvent;
  export type AppInfo = Stripe.AppInfo;
  export type FileData = Stripe.FileData;
  export type Metadata = Stripe.Metadata;
  export type MetadataParam = Stripe.MetadataParam;
  export type Address = Stripe.Address;
  export type JapanAddress = Stripe.JapanAddress;
  export type AddressParam = Stripe.AddressParam;
  export type ShippingAddressParam = Stripe.ShippingAddressParam;
  export type JapanAddressParam = Stripe.JapanAddressParam;
  export type RangeQueryParam = Stripe.RangeQueryParam;
  export type PaginationParams = Stripe.PaginationParams;
  export type Emptyable<T> = Stripe.Emptyable<T>;
  export type OAuthResource = Stripe.OAuthResource;
  export type OAuthToken = Stripe.OAuthToken;
  export type OAuthTokenParams = Stripe.OAuthTokenParams;
  export type OAuthAuthorizeUrlOptions = Stripe.OAuthAuthorizeUrlOptions;
  export type OAuthAuthorizeUrlParams = Stripe.OAuthAuthorizeUrlParams;
  export type OAuthDeauthorization = Stripe.OAuthDeauthorization;
  export type OAuthDeauthorizeParams = Stripe.OAuthDeauthorizeParams;
  export type StripeContextType = Stripe.StripeContextType;
  export type StripeRawError = Stripe.StripeRawError;
  export type Decimal = Stripe.Decimal;
  export namespace errors {
    export type StripeError = InstanceType<typeof Stripe.errors.StripeError>;
    export type StripeCardError = InstanceType<
      typeof Stripe.errors.StripeCardError
    >;
    export type StripeInvalidRequestError = InstanceType<
      typeof Stripe.errors.StripeInvalidRequestError
    >;
    export type StripeAPIError = InstanceType<
      typeof Stripe.errors.StripeAPIError
    >;
    export type StripeAuthenticationError = InstanceType<
      typeof Stripe.errors.StripeAuthenticationError
    >;
    export type StripePermissionError = InstanceType<
      typeof Stripe.errors.StripePermissionError
    >;
    export type StripeRateLimitError = InstanceType<
      typeof Stripe.errors.StripeRateLimitError
    >;
    export type StripeConnectionError = InstanceType<
      typeof Stripe.errors.StripeConnectionError
    >;
    export type StripeSignatureVerificationError = InstanceType<
      typeof Stripe.errors.StripeSignatureVerificationError
    >;
    export type StripeIdempotencyError = InstanceType<
      typeof Stripe.errors.StripeIdempotencyError
    >;
    export type StripeInvalidGrantError = InstanceType<
      typeof Stripe.errors.StripeInvalidGrantError
    >;
  }
}
export = StripeConstructor;
