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
  export type AccountSerializeBatchUpdateParams = Stripe.AccountSerializeBatchUpdateParams;
  export type AccountUpdateCapabilityParams = Stripe.AccountUpdateCapabilityParams;
  export type AccountUpdateExternalAccountParams = Stripe.AccountUpdateExternalAccountParams;
  export type AccountUpdatePersonParams = Stripe.AccountUpdatePersonParams;
  export type AccountResource = Stripe.AccountResource;
  export type AccountLink = Stripe.AccountLink;
  export type AccountLinkCreateParams = Stripe.AccountLinkCreateParams;
  export type AccountLinkResource = Stripe.AccountLinkResource;
  export type AccountNotice = Stripe.AccountNotice;
  export type AccountNoticeRetrieveParams = Stripe.AccountNoticeRetrieveParams;
  export type AccountNoticeUpdateParams = Stripe.AccountNoticeUpdateParams;
  export type AccountNoticeListParams = Stripe.AccountNoticeListParams;
  export type AccountNoticeResource = Stripe.AccountNoticeResource;
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
  export type CouponSerializeBatchCreateParams = Stripe.CouponSerializeBatchCreateParams;
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
  export type CustomerSerializeBatchUpdateParams = Stripe.CustomerSerializeBatchUpdateParams;
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
  export type ExternalAccount = Stripe.ExternalAccount;
  export type DeletedExternalAccount = Stripe.DeletedExternalAccount;
  export type ExternalAccountCreateParams = Stripe.ExternalAccountCreateParams;
  export type ExternalAccountRetrieveParams = Stripe.ExternalAccountRetrieveParams;
  export type ExternalAccountUpdateParams = Stripe.ExternalAccountUpdateParams;
  export type ExternalAccountListParams = Stripe.ExternalAccountListParams;
  export type ExternalAccountDeleteParams = Stripe.ExternalAccountDeleteParams;
  export type ExternalAccountResource = Stripe.ExternalAccountResource;
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
  export type FxQuote = Stripe.FxQuote;
  export type FxQuoteCreateParams = Stripe.FxQuoteCreateParams;
  export type FxQuoteRetrieveParams = Stripe.FxQuoteRetrieveParams;
  export type FxQuoteListParams = Stripe.FxQuoteListParams;
  export type FxQuoteResource = Stripe.FxQuoteResource;
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
  export type InvoiceDetachPaymentParams = Stripe.InvoiceDetachPaymentParams;
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
  export type MandateListParams = Stripe.MandateListParams;
  export type MandateResource = Stripe.MandateResource;
  export type Margin = Stripe.Margin;
  export type MarginCreateParams = Stripe.MarginCreateParams;
  export type MarginRetrieveParams = Stripe.MarginRetrieveParams;
  export type MarginUpdateParams = Stripe.MarginUpdateParams;
  export type MarginListParams = Stripe.MarginListParams;
  export type MarginResource = Stripe.MarginResource;
  export type Order = Stripe.Order;
  export type OrderCreateParams = Stripe.OrderCreateParams;
  export type OrderRetrieveParams = Stripe.OrderRetrieveParams;
  export type OrderUpdateParams = Stripe.OrderUpdateParams;
  export type OrderListParams = Stripe.OrderListParams;
  export type OrderSubmitParams = Stripe.OrderSubmitParams;
  export type OrderResource = Stripe.OrderResource;
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
  export type PaymentIntentDecrementAuthorizationParams = Stripe.PaymentIntentDecrementAuthorizationParams;
  export type PaymentIntentIncrementAuthorizationParams = Stripe.PaymentIntentIncrementAuthorizationParams;
  export type PaymentIntentListAmountDetailsLineItemsParams = Stripe.PaymentIntentListAmountDetailsLineItemsParams;
  export type PaymentIntentSearchParams = Stripe.PaymentIntentSearchParams;
  export type PaymentIntentTriggerActionParams = Stripe.PaymentIntentTriggerActionParams;
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
  export type PromotionCodeSerializeBatchCreateParams = Stripe.PromotionCodeSerializeBatchCreateParams;
  export type PromotionCodeSerializeBatchUpdateParams = Stripe.PromotionCodeSerializeBatchUpdateParams;
  export type PromotionCodeResource = Stripe.PromotionCodeResource;
  export type Quote = Stripe.Quote;
  export type QuoteCreateParams = Stripe.QuoteCreateParams;
  export type QuoteRetrieveParams = Stripe.QuoteRetrieveParams;
  export type QuoteUpdateParams = Stripe.QuoteUpdateParams;
  export type QuoteListParams = Stripe.QuoteListParams;
  export type QuoteAcceptParams = Stripe.QuoteAcceptParams;
  export type QuoteCancelParams = Stripe.QuoteCancelParams;
  export type QuoteFinalizeQuoteParams = Stripe.QuoteFinalizeQuoteParams;
  export type QuoteListPreviewInvoiceLinesParams = Stripe.QuoteListPreviewInvoiceLinesParams;
  export type QuoteListComputedUpfrontLineItemsParams = Stripe.QuoteListComputedUpfrontLineItemsParams;
  export type QuoteListLineItemsParams = Stripe.QuoteListLineItemsParams;
  export type QuoteListLinesParams = Stripe.QuoteListLinesParams;
  export type QuoteListPreviewInvoicesParams = Stripe.QuoteListPreviewInvoicesParams;
  export type QuoteListPreviewSubscriptionSchedulesParams = Stripe.QuoteListPreviewSubscriptionSchedulesParams;
  export type QuoteMarkDraftParams = Stripe.QuoteMarkDraftParams;
  export type QuoteMarkStaleParams = Stripe.QuoteMarkStaleParams;
  export type QuotePdfParams = Stripe.QuotePdfParams;
  export type QuoteReestimateParams = Stripe.QuoteReestimateParams;
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
  export type SubscriptionPauseParams = Stripe.SubscriptionPauseParams;
  export type SubscriptionResumeParams = Stripe.SubscriptionResumeParams;
  export type SubscriptionSearchParams = Stripe.SubscriptionSearchParams;
  export type SubscriptionSerializeBatchCancelParams = Stripe.SubscriptionSerializeBatchCancelParams;
  export type SubscriptionSerializeBatchMigrateParams = Stripe.SubscriptionSerializeBatchMigrateParams;
  export type SubscriptionSerializeBatchUpdateParams = Stripe.SubscriptionSerializeBatchUpdateParams;
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
  export type SubscriptionScheduleAmendParams = Stripe.SubscriptionScheduleAmendParams;
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
  export type QuoteLine = Stripe.QuoteLine;
  export type ReserveTransaction = Stripe.ReserveTransaction;
  export type SourceMandateNotification = Stripe.SourceMandateNotification;
  export type SourceTransaction = Stripe.SourceTransaction;
  export type TaxDeductedAtSource = Stripe.TaxDeductedAtSource;
  export type Capability = Stripe.Capability;
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
  export type QuotePreviewInvoice = Stripe.QuotePreviewInvoice;
  export type QuotePreviewSubscriptionSchedule = Stripe.QuotePreviewSubscriptionSchedule;
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
    export type RiskControls = Stripe.AccountCreateParams.RiskControls;
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
    export type RiskControls = Stripe.AccountUpdateParams.RiskControls;
    export type Settings = Stripe.AccountUpdateParams.Settings;
    export type TosAcceptance = Stripe.AccountUpdateParams.TosAcceptance;
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
  export namespace AccountNoticeUpdateParams {
    export type Email = Stripe.AccountNoticeUpdateParams.Email;
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
    export type FraudDetails = Stripe.ChargeUpdateParams.FraudDetails;
    export type PaymentDetails = Stripe.ChargeUpdateParams.PaymentDetails;
    export type Shipping = Stripe.ChargeUpdateParams.Shipping;
  }
  export namespace ChargeCaptureParams {
    export type PaymentDetails = Stripe.ChargeCaptureParams.PaymentDetails;
    export type TransferData = Stripe.ChargeCaptureParams.TransferData;
  }
  export namespace CouponCreateParams {
    export type AppliesTo = Stripe.CouponCreateParams.AppliesTo;
    export type CurrencyOptions = Stripe.CouponCreateParams.CurrencyOptions;
    export type Duration = Stripe.CouponCreateParams.Duration;
    export type Script = Stripe.CouponCreateParams.Script;
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
    export type Evidence = Stripe.DisputeUpdateParams.Evidence;
    export type IntendedSubmissionMethod = Stripe.DisputeUpdateParams.IntendedSubmissionMethod;
  }
  export namespace ExternalAccountCreateParams {
    export type Card = Stripe.ExternalAccountCreateParams.Card;
    export type BankAccount = Stripe.ExternalAccountCreateParams.BankAccount;
    export type CardToken = Stripe.ExternalAccountCreateParams.CardToken;
  }
  export namespace ExternalAccountUpdateParams {
    export type AccountHolderType = Stripe.ExternalAccountUpdateParams.AccountHolderType;
    export type AccountType = Stripe.ExternalAccountUpdateParams.AccountType;
    export type Documents = Stripe.ExternalAccountUpdateParams.Documents;
  }
  export namespace ExternalAccountListParams {
    export type Object = Stripe.ExternalAccountListParams.Object;
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
  export namespace FxQuoteCreateParams {
    export type LockDuration = Stripe.FxQuoteCreateParams.LockDuration;
    export type Usage = Stripe.FxQuoteCreateParams.Usage;
  }
  export namespace InvoiceCreateParams {
    export type AmountsDue = Stripe.InvoiceCreateParams.AmountsDue;
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
    export type AmountsDue = Stripe.InvoiceUpdateParams.AmountsDue;
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
  export namespace InvoiceAttachPaymentParams {
    export type PaymentRecordData = Stripe.InvoiceAttachPaymentParams.PaymentRecordData;
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
        export type StoredCredentialUsage = Stripe_.PaymentAttemptRecord.PaymentMethodDetails.Card.StoredCredentialUsage;
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
  export namespace MandateListParams {
    export type Status = Stripe.MandateListParams.Status;
  }
  export namespace OrderCreateParams {
    export type LineItem = Stripe.OrderCreateParams.LineItem;
    export type AutomaticTax = Stripe.OrderCreateParams.AutomaticTax;
    export type BillingDetails = Stripe.OrderCreateParams.BillingDetails;
    export type Discount = Stripe.OrderCreateParams.Discount;
    export type Payment = Stripe.OrderCreateParams.Payment;
    export type ShippingCost = Stripe.OrderCreateParams.ShippingCost;
    export type ShippingDetails = Stripe.OrderCreateParams.ShippingDetails;
    export type TaxDetails = Stripe.OrderCreateParams.TaxDetails;
  }
  export namespace OrderUpdateParams {
    export type AutomaticTax = Stripe.OrderUpdateParams.AutomaticTax;
    export type BillingDetails = Stripe.OrderUpdateParams.BillingDetails;
    export type Discount = Stripe.OrderUpdateParams.Discount;
    export type LineItem = Stripe.OrderUpdateParams.LineItem;
    export type Payment = Stripe.OrderUpdateParams.Payment;
    export type ShippingCost = Stripe.OrderUpdateParams.ShippingCost;
    export type ShippingDetails = Stripe.OrderUpdateParams.ShippingDetails;
    export type TaxDetails = Stripe.OrderUpdateParams.TaxDetails;
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
    export type SecretKeyConfirmation = Stripe.PaymentIntentCreateParams.SecretKeyConfirmation;
    export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.SetupFutureUsage;
    export type Shipping = Stripe.PaymentIntentCreateParams.Shipping;
    export type TransferData = Stripe.PaymentIntentCreateParams.TransferData;
  }
  export namespace PaymentIntentUpdateParams {
    export type AmountDetails = Stripe.PaymentIntentUpdateParams.AmountDetails;
    export type CaptureMethod = Stripe.PaymentIntentUpdateParams.CaptureMethod;
    export type ExcludedPaymentMethodType = Stripe.PaymentIntentUpdateParams.ExcludedPaymentMethodType;
    export type Hooks = Stripe.PaymentIntentUpdateParams.Hooks;
    export type MandateData = Stripe.PaymentIntentUpdateParams.MandateData;
    export type PaymentDetails = Stripe.PaymentIntentUpdateParams.PaymentDetails;
    export type PaymentMethodData = Stripe.PaymentIntentUpdateParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe.PaymentIntentUpdateParams.PaymentMethodOptions;
    export type SetupFutureUsage = Stripe.PaymentIntentUpdateParams.SetupFutureUsage;
    export type Shipping = Stripe.PaymentIntentUpdateParams.Shipping;
    export type TransferData = Stripe.PaymentIntentUpdateParams.TransferData;
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
  export namespace PaymentIntentDecrementAuthorizationParams {
    export type AmountDetails = Stripe.PaymentIntentDecrementAuthorizationParams.AmountDetails;
    export type Hooks = Stripe.PaymentIntentDecrementAuthorizationParams.Hooks;
    export type PaymentDetails = Stripe.PaymentIntentDecrementAuthorizationParams.PaymentDetails;
    export type TransferData = Stripe.PaymentIntentDecrementAuthorizationParams.TransferData;
  }
  export namespace PaymentIntentIncrementAuthorizationParams {
    export type AmountDetails = Stripe.PaymentIntentIncrementAuthorizationParams.AmountDetails;
    export type Hooks = Stripe.PaymentIntentIncrementAuthorizationParams.Hooks;
    export type PaymentDetails = Stripe.PaymentIntentIncrementAuthorizationParams.PaymentDetails;
    export type PaymentMethodOptions = Stripe.PaymentIntentIncrementAuthorizationParams.PaymentMethodOptions;
    export type TransferData = Stripe.PaymentIntentIncrementAuthorizationParams.TransferData;
  }
  export namespace PaymentIntentTriggerActionParams {
    export type Type = Stripe.PaymentIntentTriggerActionParams.Type;
    export type ScanQrCode = Stripe.PaymentIntentTriggerActionParams.ScanQrCode;
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
    export type Gopay = Stripe.PaymentMethodCreateParams.Gopay;
    export type Grabpay = Stripe.PaymentMethodCreateParams.Grabpay;
    export type IdBankTransfer = Stripe.PaymentMethodCreateParams.IdBankTransfer;
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
    export type Paypay = Stripe.PaymentMethodCreateParams.Paypay;
    export type Payto = Stripe.PaymentMethodCreateParams.Payto;
    export type Pix = Stripe.PaymentMethodCreateParams.Pix;
    export type Promptpay = Stripe.PaymentMethodCreateParams.Promptpay;
    export type Qris = Stripe.PaymentMethodCreateParams.Qris;
    export type RadarOptions = Stripe.PaymentMethodCreateParams.RadarOptions;
    export type Rechnung = Stripe.PaymentMethodCreateParams.Rechnung;
    export type RevolutPay = Stripe.PaymentMethodCreateParams.RevolutPay;
    export type SamsungPay = Stripe.PaymentMethodCreateParams.SamsungPay;
    export type Satispay = Stripe.PaymentMethodCreateParams.Satispay;
    export type Scalapay = Stripe.PaymentMethodCreateParams.Scalapay;
    export type SepaDebit = Stripe.PaymentMethodCreateParams.SepaDebit;
    export type Shopeepay = Stripe.PaymentMethodCreateParams.Shopeepay;
    export type Sofort = Stripe.PaymentMethodCreateParams.Sofort;
    export type StripeBalance = Stripe.PaymentMethodCreateParams.StripeBalance;
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
    export type Gopay = Stripe.PaymentMethodConfigurationCreateParams.Gopay;
    export type Grabpay = Stripe.PaymentMethodConfigurationCreateParams.Grabpay;
    export type IdBankTransfer = Stripe.PaymentMethodConfigurationCreateParams.IdBankTransfer;
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
    export type Paypay = Stripe.PaymentMethodConfigurationCreateParams.Paypay;
    export type Payto = Stripe.PaymentMethodConfigurationCreateParams.Payto;
    export type Pix = Stripe.PaymentMethodConfigurationCreateParams.Pix;
    export type Promptpay = Stripe.PaymentMethodConfigurationCreateParams.Promptpay;
    export type Qris = Stripe.PaymentMethodConfigurationCreateParams.Qris;
    export type RevolutPay = Stripe.PaymentMethodConfigurationCreateParams.RevolutPay;
    export type SamsungPay = Stripe.PaymentMethodConfigurationCreateParams.SamsungPay;
    export type Satispay = Stripe.PaymentMethodConfigurationCreateParams.Satispay;
    export type Scalapay = Stripe.PaymentMethodConfigurationCreateParams.Scalapay;
    export type SepaDebit = Stripe.PaymentMethodConfigurationCreateParams.SepaDebit;
    export type Shopeepay = Stripe.PaymentMethodConfigurationCreateParams.Shopeepay;
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
    export type Gopay = Stripe.PaymentMethodConfigurationUpdateParams.Gopay;
    export type Grabpay = Stripe.PaymentMethodConfigurationUpdateParams.Grabpay;
    export type IdBankTransfer = Stripe.PaymentMethodConfigurationUpdateParams.IdBankTransfer;
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
    export type Paypay = Stripe.PaymentMethodConfigurationUpdateParams.Paypay;
    export type Payto = Stripe.PaymentMethodConfigurationUpdateParams.Payto;
    export type Pix = Stripe.PaymentMethodConfigurationUpdateParams.Pix;
    export type Promptpay = Stripe.PaymentMethodConfigurationUpdateParams.Promptpay;
    export type Qris = Stripe.PaymentMethodConfigurationUpdateParams.Qris;
    export type RevolutPay = Stripe.PaymentMethodConfigurationUpdateParams.RevolutPay;
    export type SamsungPay = Stripe.PaymentMethodConfigurationUpdateParams.SamsungPay;
    export type Satispay = Stripe.PaymentMethodConfigurationUpdateParams.Satispay;
    export type Scalapay = Stripe.PaymentMethodConfigurationUpdateParams.Scalapay;
    export type SepaDebit = Stripe.PaymentMethodConfigurationUpdateParams.SepaDebit;
    export type Shopeepay = Stripe.PaymentMethodConfigurationUpdateParams.Shopeepay;
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
    export type Refunded = Stripe_.PaymentRecordReportRefundParams.Refunded;
    export type Amount = Stripe_.PaymentRecordReportRefundParams.Amount;
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
        export type StoredCredentialUsage = Stripe_.PaymentRecord.PaymentMethodDetails.Card.StoredCredentialUsage;
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
    export type CurrencyOptions = Stripe.PriceUpdateParams.CurrencyOptions;
    export type MigrateTo = Stripe.PriceUpdateParams.MigrateTo;
    export type TaxBehavior = Stripe.PriceUpdateParams.TaxBehavior;
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
    export type DefaultPriceData = Stripe.ProductCreateParams.DefaultPriceData;
    export type MarketingFeature = Stripe.ProductCreateParams.MarketingFeature;
    export type PackageDimensions = Stripe.ProductCreateParams.PackageDimensions;
    export type TaxDetails = Stripe.ProductCreateParams.TaxDetails;
    export type Type = Stripe.ProductCreateParams.Type;
  }
  export namespace ProductUpdateParams {
    export type MarketingFeature = Stripe.ProductUpdateParams.MarketingFeature;
    export type PackageDimensions = Stripe.ProductUpdateParams.PackageDimensions;
    export type TaxDetails = Stripe.ProductUpdateParams.TaxDetails;
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
    export type AutomaticTax = Stripe.QuoteCreateParams.AutomaticTax;
    export type CollectionMethod = Stripe.QuoteCreateParams.CollectionMethod;
    export type Discount = Stripe.QuoteCreateParams.Discount;
    export type FromQuote = Stripe.QuoteCreateParams.FromQuote;
    export type InvoiceSettings = Stripe.QuoteCreateParams.InvoiceSettings;
    export type LineItem = Stripe.QuoteCreateParams.LineItem;
    export type Line = Stripe.QuoteCreateParams.Line;
    export type SubscriptionData = Stripe.QuoteCreateParams.SubscriptionData;
    export type SubscriptionDataOverride = Stripe.QuoteCreateParams.SubscriptionDataOverride;
    export type TransferData = Stripe.QuoteCreateParams.TransferData;
  }
  export namespace QuoteUpdateParams {
    export type AutomaticTax = Stripe.QuoteUpdateParams.AutomaticTax;
    export type CollectionMethod = Stripe.QuoteUpdateParams.CollectionMethod;
    export type Discount = Stripe.QuoteUpdateParams.Discount;
    export type InvoiceSettings = Stripe.QuoteUpdateParams.InvoiceSettings;
    export type LineItem = Stripe.QuoteUpdateParams.LineItem;
    export type Line = Stripe.QuoteUpdateParams.Line;
    export type SubscriptionData = Stripe.QuoteUpdateParams.SubscriptionData;
    export type SubscriptionDataOverride = Stripe.QuoteUpdateParams.SubscriptionDataOverride;
    export type TransferData = Stripe.QuoteUpdateParams.TransferData;
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
    export type Prebilling = Stripe.SubscriptionCreateParams.Prebilling;
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
    export type Prebilling = Stripe.SubscriptionUpdateParams.Prebilling;
    export type ProrationBehavior = Stripe.SubscriptionUpdateParams.ProrationBehavior;
    export type TransferData = Stripe.SubscriptionUpdateParams.TransferData;
    export type TrialSettings = Stripe.SubscriptionUpdateParams.TrialSettings;
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
  export namespace SubscriptionPauseParams {
    export type BillFor = Stripe.SubscriptionPauseParams.BillFor;
    export type InvoicingBehavior = Stripe.SubscriptionPauseParams.InvoicingBehavior;
  }
  export namespace SubscriptionResumeParams {
    export type BillingCycleAnchor = Stripe.SubscriptionResumeParams.BillingCycleAnchor;
    export type PaymentBehavior = Stripe.SubscriptionResumeParams.PaymentBehavior;
    export type ProrationBehavior = Stripe.SubscriptionResumeParams.ProrationBehavior;
  }
  export namespace SubscriptionItemCreateParams {
    export type BillingThresholds = Stripe.SubscriptionItemCreateParams.BillingThresholds;
    export type CurrentTrial = Stripe.SubscriptionItemCreateParams.CurrentTrial;
    export type Discount = Stripe.SubscriptionItemCreateParams.Discount;
    export type PaymentBehavior = Stripe.SubscriptionItemCreateParams.PaymentBehavior;
    export type PriceData = Stripe.SubscriptionItemCreateParams.PriceData;
    export type ProrationBehavior = Stripe.SubscriptionItemCreateParams.ProrationBehavior;
    export type Trial = Stripe.SubscriptionItemCreateParams.Trial;
  }
  export namespace SubscriptionItemUpdateParams {
    export type BillingThresholds = Stripe.SubscriptionItemUpdateParams.BillingThresholds;
    export type CurrentTrial = Stripe.SubscriptionItemUpdateParams.CurrentTrial;
    export type Discount = Stripe.SubscriptionItemUpdateParams.Discount;
    export type PaymentBehavior = Stripe.SubscriptionItemUpdateParams.PaymentBehavior;
    export type PriceData = Stripe.SubscriptionItemUpdateParams.PriceData;
    export type ProrationBehavior = Stripe.SubscriptionItemUpdateParams.ProrationBehavior;
  }
  export namespace SubscriptionItemDeleteParams {
    export type PaymentBehavior = Stripe_.SubscriptionItemDeleteParams.PaymentBehavior;
    export type ProrationBehavior = Stripe_.SubscriptionItemDeleteParams.ProrationBehavior;
  }
  export namespace SubscriptionItem {
    export type BillingThresholds = Stripe_.SubscriptionItem.BillingThresholds;
  }
  export namespace SubscriptionScheduleCreateParams {
    export type BillingBehavior = Stripe.SubscriptionScheduleCreateParams.BillingBehavior;
    export type BillingMode = Stripe.SubscriptionScheduleCreateParams.BillingMode;
    export type DefaultSettings = Stripe.SubscriptionScheduleCreateParams.DefaultSettings;
    export type EndBehavior = Stripe.SubscriptionScheduleCreateParams.EndBehavior;
    export type Phase = Stripe.SubscriptionScheduleCreateParams.Phase;
    export type Prebilling = Stripe.SubscriptionScheduleCreateParams.Prebilling;
  }
  export namespace SubscriptionScheduleUpdateParams {
    export type BillingBehavior = Stripe.SubscriptionScheduleUpdateParams.BillingBehavior;
    export type DefaultSettings = Stripe.SubscriptionScheduleUpdateParams.DefaultSettings;
    export type EndBehavior = Stripe.SubscriptionScheduleUpdateParams.EndBehavior;
    export type Phase = Stripe.SubscriptionScheduleUpdateParams.Phase;
    export type Prebilling = Stripe.SubscriptionScheduleUpdateParams.Prebilling;
    export type ProrationBehavior = Stripe.SubscriptionScheduleUpdateParams.ProrationBehavior;
  }
  export namespace SubscriptionScheduleAmendParams {
    export type Amendment = Stripe.SubscriptionScheduleAmendParams.Amendment;
    export type Prebilling = Stripe.SubscriptionScheduleAmendParams.Prebilling;
    export type ProrationBehavior = Stripe.SubscriptionScheduleAmendParams.ProrationBehavior;
    export type ScheduleSettings = Stripe.SubscriptionScheduleAmendParams.ScheduleSettings;
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
  export type Apps = Stripe.Apps;
  export type Billing = Stripe.Billing;
  export type BillingPortal = Stripe.BillingPortal;
  export type Capital = Stripe.Capital;
  export type Checkout = Stripe.Checkout;
  export type Climate = Stripe.Climate;
  export type Entitlements = Stripe.Entitlements;
  export type FinancialConnections = Stripe.FinancialConnections;
  export type Forwarding = Stripe.Forwarding;
  export type Identity = Stripe.Identity;
  export type Issuing = Stripe.Issuing;
  export type Privacy = Stripe.Privacy;
  export type ProductCatalog = Stripe.ProductCatalog;
  export type Radar = Stripe.Radar;
  export type Reporting = Stripe.Reporting;
  export type Reserve = Stripe.Reserve;
  export type SharedPayment = Stripe.SharedPayment;
  export type Sigma = Stripe.Sigma;
  export type Tax = Stripe.Tax;
  export type Terminal = Stripe.Terminal;
  export type TestHelpers = Stripe.TestHelpers;
  export type Treasury = Stripe.Treasury;
  export type V2 = Stripe.V2;
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
    export namespace Analytics {
      export type MeterUsage = Stripe.Billing.Analytics.MeterUsage;
      export type MeterUsageRetrieveParams = Stripe.Billing.Analytics.MeterUsageRetrieveParams;
      export type MeterUsageResource = Stripe.Billing.Analytics.MeterUsageResource;
      export type MeterUsageRow = Stripe.Billing.Analytics.MeterUsageRow;
      export namespace MeterUsageRetrieveParams {
        export type Meter = Stripe.Billing.Analytics.MeterUsageRetrieveParams.Meter;
        export type Timezone = Stripe.Billing.Analytics.MeterUsageRetrieveParams.Timezone;
        export type ValueGroupingWindow = Stripe.Billing.Analytics.MeterUsageRetrieveParams.ValueGroupingWindow;
      }
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
  export namespace Capital {
    export type FinancingOffer = Stripe.Capital.FinancingOffer;
    export type FinancingOfferRetrieveParams = Stripe.Capital.FinancingOfferRetrieveParams;
    export type FinancingOfferListParams = Stripe.Capital.FinancingOfferListParams;
    export type FinancingOfferMarkDeliveredParams = Stripe.Capital.FinancingOfferMarkDeliveredParams;
    export type FinancingOfferResource = Stripe.Capital.FinancingOfferResource;
    export type FinancingSummary = Stripe.Capital.FinancingSummary;
    export type FinancingSummaryRetrieveParams = Stripe.Capital.FinancingSummaryRetrieveParams;
    export type FinancingSummaryResource = Stripe.Capital.FinancingSummaryResource;
    export type FinancingTransaction = Stripe.Capital.FinancingTransaction;
    export type FinancingTransactionRetrieveParams = Stripe.Capital.FinancingTransactionRetrieveParams;
    export type FinancingTransactionListParams = Stripe.Capital.FinancingTransactionListParams;
    export type FinancingTransactionResource = Stripe.Capital.FinancingTransactionResource;
    export namespace FinancingOfferListParams {
      export type Status = Stripe.Capital.FinancingOfferListParams.Status;
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
    export namespace SessionUpdateParams {
      export type AutomaticTax = Stripe.Checkout.SessionUpdateParams.AutomaticTax;
      export type CollectedInformation = Stripe.Checkout.SessionUpdateParams.CollectedInformation;
      export type Discount = Stripe.Checkout.SessionUpdateParams.Discount;
      export type InvoiceCreation = Stripe.Checkout.SessionUpdateParams.InvoiceCreation;
      export type LineItem = Stripe.Checkout.SessionUpdateParams.LineItem;
      export type ShippingOption = Stripe.Checkout.SessionUpdateParams.ShippingOption;
      export type SubscriptionData = Stripe.Checkout.SessionUpdateParams.SubscriptionData;
    }
    export namespace SessionListParams {
      export type CustomerDetails = Stripe.Checkout.SessionListParams.CustomerDetails;
      export type Status = Stripe.Checkout.SessionListParams.Status;
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
    export type Account = Stripe.FinancialConnections.Account;
    export type AccountRetrieveParams = Stripe.FinancialConnections.AccountRetrieveParams;
    export type AccountListParams = Stripe.FinancialConnections.AccountListParams;
    export type AccountDisconnectParams = Stripe.FinancialConnections.AccountDisconnectParams;
    export type AccountListInferredBalancesParams = Stripe.FinancialConnections.AccountListInferredBalancesParams;
    export type AccountListOwnersParams = Stripe.FinancialConnections.AccountListOwnersParams;
    export type AccountRefreshParams = Stripe.FinancialConnections.AccountRefreshParams;
    export type AccountSubscribeParams = Stripe.FinancialConnections.AccountSubscribeParams;
    export type AccountUnsubscribeParams = Stripe.FinancialConnections.AccountUnsubscribeParams;
    export type AccountResource = Stripe.FinancialConnections.AccountResource;
    export type Authorization = Stripe.FinancialConnections.Authorization;
    export type AuthorizationRetrieveParams = Stripe.FinancialConnections.AuthorizationRetrieveParams;
    export type AuthorizationResource = Stripe.FinancialConnections.AuthorizationResource;
    export type Institution = Stripe.FinancialConnections.Institution;
    export type InstitutionRetrieveParams = Stripe.FinancialConnections.InstitutionRetrieveParams;
    export type InstitutionListParams = Stripe.FinancialConnections.InstitutionListParams;
    export type InstitutionResource = Stripe.FinancialConnections.InstitutionResource;
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
    export type AccountInferredBalance = Stripe.FinancialConnections.AccountInferredBalance;
    export namespace AccountListParams {
      export type AccountHolder = Stripe.FinancialConnections.AccountListParams.AccountHolder;
    }
    export namespace AccountRefreshParams {
      export type Feature = Stripe.FinancialConnections.AccountRefreshParams.Feature;
    }
    export namespace AccountSubscribeParams {
      export type Feature = Stripe.FinancialConnections.AccountSubscribeParams.Feature;
    }
    export namespace AccountUnsubscribeParams {
      export type Feature = Stripe.FinancialConnections.AccountUnsubscribeParams.Feature;
    }
    export namespace SessionCreateParams {
      export type Permission = Stripe.FinancialConnections.SessionCreateParams.Permission;
      export type AccountHolder = Stripe.FinancialConnections.SessionCreateParams.AccountHolder;
      export type Filters = Stripe.FinancialConnections.SessionCreateParams.Filters;
      export type Hosted = Stripe.FinancialConnections.SessionCreateParams.Hosted;
      export type Limits = Stripe.FinancialConnections.SessionCreateParams.Limits;
      export type ManualEntry = Stripe.FinancialConnections.SessionCreateParams.ManualEntry;
      export type Prefetch = Stripe.FinancialConnections.SessionCreateParams.Prefetch;
      export type RelinkOptions = Stripe.FinancialConnections.SessionCreateParams.RelinkOptions;
      export type UiMode = Stripe.FinancialConnections.SessionCreateParams.UiMode;
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
    export type CreditUnderwritingRecord = Stripe.Issuing.CreditUnderwritingRecord;
    export type CreditUnderwritingRecordRetrieveParams = Stripe.Issuing.CreditUnderwritingRecordRetrieveParams;
    export type CreditUnderwritingRecordListParams = Stripe.Issuing.CreditUnderwritingRecordListParams;
    export type CreditUnderwritingRecordCorrectParams = Stripe.Issuing.CreditUnderwritingRecordCorrectParams;
    export type CreditUnderwritingRecordCreateFromApplicationParams = Stripe.Issuing.CreditUnderwritingRecordCreateFromApplicationParams;
    export type CreditUnderwritingRecordCreateFromProactiveReviewParams = Stripe.Issuing.CreditUnderwritingRecordCreateFromProactiveReviewParams;
    export type CreditUnderwritingRecordReportDecisionParams = Stripe.Issuing.CreditUnderwritingRecordReportDecisionParams;
    export type CreditUnderwritingRecordResource = Stripe.Issuing.CreditUnderwritingRecordResource;
    export type Dispute = Stripe.Issuing.Dispute;
    export type DisputeCreateParams = Stripe.Issuing.DisputeCreateParams;
    export type DisputeRetrieveParams = Stripe.Issuing.DisputeRetrieveParams;
    export type DisputeUpdateParams = Stripe.Issuing.DisputeUpdateParams;
    export type DisputeListParams = Stripe.Issuing.DisputeListParams;
    export type DisputeSubmitParams = Stripe.Issuing.DisputeSubmitParams;
    export type DisputeResource = Stripe.Issuing.DisputeResource;
    export type DisputeSettlementDetail = Stripe.Issuing.DisputeSettlementDetail;
    export type DisputeSettlementDetailRetrieveParams = Stripe.Issuing.DisputeSettlementDetailRetrieveParams;
    export type DisputeSettlementDetailListParams = Stripe.Issuing.DisputeSettlementDetailListParams;
    export type DisputeSettlementDetailResource = Stripe.Issuing.DisputeSettlementDetailResource;
    export type FraudLiabilityDebit = Stripe.Issuing.FraudLiabilityDebit;
    export type FraudLiabilityDebitRetrieveParams = Stripe.Issuing.FraudLiabilityDebitRetrieveParams;
    export type FraudLiabilityDebitListParams = Stripe.Issuing.FraudLiabilityDebitListParams;
    export type FraudLiabilityDebitResource = Stripe.Issuing.FraudLiabilityDebitResource;
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
    export type Settlement = Stripe.Issuing.Settlement;
    export namespace AuthorizationListParams {
      export type Status = Stripe.Issuing.AuthorizationListParams.Status;
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
    export namespace CreditUnderwritingRecordCorrectParams {
      export type Application = Stripe.Issuing.CreditUnderwritingRecordCorrectParams.Application;
      export type CreditUser = Stripe.Issuing.CreditUnderwritingRecordCorrectParams.CreditUser;
      export type Decision = Stripe.Issuing.CreditUnderwritingRecordCorrectParams.Decision;
      export type UnderwritingException = Stripe.Issuing.CreditUnderwritingRecordCorrectParams.UnderwritingException;
    }
    export namespace CreditUnderwritingRecordCreateFromApplicationParams {
      export type Application = Stripe.Issuing.CreditUnderwritingRecordCreateFromApplicationParams.Application;
      export type CreditUser = Stripe.Issuing.CreditUnderwritingRecordCreateFromApplicationParams.CreditUser;
    }
    export namespace CreditUnderwritingRecordCreateFromProactiveReviewParams {
      export type CreditUser = Stripe.Issuing.CreditUnderwritingRecordCreateFromProactiveReviewParams.CreditUser;
      export type Decision = Stripe.Issuing.CreditUnderwritingRecordCreateFromProactiveReviewParams.Decision;
      export type UnderwritingException = Stripe.Issuing.CreditUnderwritingRecordCreateFromProactiveReviewParams.UnderwritingException;
    }
    export namespace CreditUnderwritingRecordReportDecisionParams {
      export type Decision = Stripe.Issuing.CreditUnderwritingRecordReportDecisionParams.Decision;
      export type UnderwritingException = Stripe.Issuing.CreditUnderwritingRecordReportDecisionParams.UnderwritingException;
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
  export namespace Privacy {
    export type RedactionJob = Stripe.Privacy.RedactionJob;
    export type RedactionJobCreateParams = Stripe.Privacy.RedactionJobCreateParams;
    export type RedactionJobRetrieveParams = Stripe.Privacy.RedactionJobRetrieveParams;
    export type RedactionJobUpdateParams = Stripe.Privacy.RedactionJobUpdateParams;
    export type RedactionJobListParams = Stripe.Privacy.RedactionJobListParams;
    export type RedactionJobCancelParams = Stripe.Privacy.RedactionJobCancelParams;
    export type RedactionJobListValidationErrorsParams = Stripe.Privacy.RedactionJobListValidationErrorsParams;
    export type RedactionJobRunParams = Stripe.Privacy.RedactionJobRunParams;
    export type RedactionJobValidateParams = Stripe.Privacy.RedactionJobValidateParams;
    export type RedactionJobResource = Stripe.Privacy.RedactionJobResource;
    export type RedactionJobValidationError = Stripe.Privacy.RedactionJobValidationError;
    export namespace RedactionJobCreateParams {
      export type Objects = Stripe.Privacy.RedactionJobCreateParams.Objects;
      export type ValidationBehavior = Stripe.Privacy.RedactionJobCreateParams.ValidationBehavior;
    }
    export namespace RedactionJobUpdateParams {
      export type ValidationBehavior = Stripe.Privacy.RedactionJobUpdateParams.ValidationBehavior;
    }
    export namespace RedactionJobListParams {
      export type Status = Stripe.Privacy.RedactionJobListParams.Status;
    }
  }
  export namespace ProductCatalog {
    export type TrialOffer = Stripe.ProductCatalog.TrialOffer;
    export type TrialOfferCreateParams = Stripe.ProductCatalog.TrialOfferCreateParams;
    export type TrialOfferResource = Stripe.ProductCatalog.TrialOfferResource;
    export namespace TrialOfferCreateParams {
      export type Duration = Stripe.ProductCatalog.TrialOfferCreateParams.Duration;
      export type EndBehavior = Stripe.ProductCatalog.TrialOfferCreateParams.EndBehavior;
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
  export namespace Reserve {
    export type Hold = Stripe.Reserve.Hold;
    export type HoldRetrieveParams = Stripe.Reserve.HoldRetrieveParams;
    export type HoldListParams = Stripe.Reserve.HoldListParams;
    export type HoldResource = Stripe.Reserve.HoldResource;
    export type Plan = Stripe.Reserve.Plan;
    export type PlanRetrieveParams = Stripe.Reserve.PlanRetrieveParams;
    export type PlanResource = Stripe.Reserve.PlanResource;
    export type Release = Stripe.Reserve.Release;
    export type ReleaseRetrieveParams = Stripe.Reserve.ReleaseRetrieveParams;
    export type ReleaseListParams = Stripe.Reserve.ReleaseListParams;
    export type ReleaseResource = Stripe.Reserve.ReleaseResource;
    export namespace HoldListParams {
      export type Reason = Stripe.Reserve.HoldListParams.Reason;
    }
  }
  export namespace SharedPayment {
    export type GrantedToken = Stripe.SharedPayment.GrantedToken;
    export type GrantedTokenRetrieveParams = Stripe.SharedPayment.GrantedTokenRetrieveParams;
    export type GrantedTokenResource = Stripe.SharedPayment.GrantedTokenResource;
    export type IssuedToken = Stripe.SharedPayment.IssuedToken;
    export type IssuedTokenCreateParams = Stripe.SharedPayment.IssuedTokenCreateParams;
    export type IssuedTokenRetrieveParams = Stripe.SharedPayment.IssuedTokenRetrieveParams;
    export type IssuedTokenRevokeParams = Stripe.SharedPayment.IssuedTokenRevokeParams;
    export type IssuedTokenResource = Stripe.SharedPayment.IssuedTokenResource;
    export namespace IssuedTokenCreateParams {
      export type SellerDetails = Stripe.SharedPayment.IssuedTokenCreateParams.SellerDetails;
      export type UsageLimits = Stripe.SharedPayment.IssuedTokenCreateParams.UsageLimits;
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
    export type Association = Stripe.Tax.Association;
    export type AssociationFindParams = Stripe.Tax.AssociationFindParams;
    export type AssociationResource = Stripe.Tax.AssociationResource;
    export type Calculation = Stripe.Tax.Calculation;
    export type CalculationCreateParams = Stripe.Tax.CalculationCreateParams;
    export type CalculationRetrieveParams = Stripe.Tax.CalculationRetrieveParams;
    export type CalculationListLineItemsParams = Stripe.Tax.CalculationListLineItemsParams;
    export type CalculationResource = Stripe.Tax.CalculationResource;
    export type Form = Stripe.Tax.Form;
    export type FormRetrieveParams = Stripe.Tax.FormRetrieveParams;
    export type FormListParams = Stripe.Tax.FormListParams;
    export type FormPdfParams = Stripe.Tax.FormPdfParams;
    export type FormResource = Stripe.Tax.FormResource;
    export type Location = Stripe.Tax.Location;
    export type LocationCreateParams = Stripe.Tax.LocationCreateParams;
    export type LocationRetrieveParams = Stripe.Tax.LocationRetrieveParams;
    export type LocationListParams = Stripe.Tax.LocationListParams;
    export type LocationResource = Stripe.Tax.LocationResource;
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
    export namespace FormListParams {
      export type Payee = Stripe.Tax.FormListParams.Payee;
      export type Type = Stripe.Tax.FormListParams.Type;
    }
    export namespace LocationCreateParams {
      export type Address = Stripe.Tax.LocationCreateParams.Address;
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
    export type ReaderCollectedData = Stripe.Terminal.ReaderCollectedData;
    export type ReaderCollectedDataRetrieveParams = Stripe.Terminal.ReaderCollectedDataRetrieveParams;
    export type ReaderCollectedDatumResource = Stripe.Terminal.ReaderCollectedDatumResource;
    export namespace ConfigurationCreateParams {
      export type BbposWisepad3 = Stripe.Terminal.ConfigurationCreateParams.BbposWisepad3;
      export type BbposWiseposE = Stripe.Terminal.ConfigurationCreateParams.BbposWiseposE;
      export type Cellular = Stripe.Terminal.ConfigurationCreateParams.Cellular;
      export type Offline = Stripe.Terminal.ConfigurationCreateParams.Offline;
      export type ReaderSecurity = Stripe.Terminal.ConfigurationCreateParams.ReaderSecurity;
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
      export type ReaderSecurity = Stripe.Terminal.ConfigurationUpdateParams.ReaderSecurity;
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
      export type DestinationPaymentMethodData = Stripe.Treasury.OutboundTransferCreateParams.DestinationPaymentMethodData;
      export type DestinationPaymentMethodOptions = Stripe.Treasury.OutboundTransferCreateParams.DestinationPaymentMethodOptions;
      export type NetworkDetails = Stripe.Treasury.OutboundTransferCreateParams.NetworkDetails;
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
    export type DeletedObject = Stripe.V2.DeletedObject;
    export type FinancialAddressCreditSimulation = Stripe.V2.FinancialAddressCreditSimulation;
    export type FinancialAddressGeneratedMicrodeposits = Stripe.V2.FinancialAddressGeneratedMicrodeposits;
    export namespace Billing {
      export type BillSetting = Stripe.V2.Billing.BillSetting;
      export type BillSettingCreateParams = Stripe.V2.Billing.BillSettingCreateParams;
      export type BillSettingRetrieveParams = Stripe.V2.Billing.BillSettingRetrieveParams;
      export type BillSettingUpdateParams = Stripe.V2.Billing.BillSettingUpdateParams;
      export type BillSettingListParams = Stripe.V2.Billing.BillSettingListParams;
      export type BillSettingResource = Stripe.V2.Billing.BillSettingResource;
      export type Cadence = Stripe.V2.Billing.Cadence;
      export type CadenceCreateParams = Stripe.V2.Billing.CadenceCreateParams;
      export type CadenceRetrieveParams = Stripe.V2.Billing.CadenceRetrieveParams;
      export type CadenceUpdateParams = Stripe.V2.Billing.CadenceUpdateParams;
      export type CadenceListParams = Stripe.V2.Billing.CadenceListParams;
      export type CadenceCancelParams = Stripe.V2.Billing.CadenceCancelParams;
      export type CadenceResource = Stripe.V2.Billing.CadenceResource;
      export type CollectionSetting = Stripe.V2.Billing.CollectionSetting;
      export type CollectionSettingCreateParams = Stripe.V2.Billing.CollectionSettingCreateParams;
      export type CollectionSettingRetrieveParams = Stripe.V2.Billing.CollectionSettingRetrieveParams;
      export type CollectionSettingUpdateParams = Stripe.V2.Billing.CollectionSettingUpdateParams;
      export type CollectionSettingListParams = Stripe.V2.Billing.CollectionSettingListParams;
      export type CollectionSettingResource = Stripe.V2.Billing.CollectionSettingResource;
      export type MeterEvent = Stripe.V2.Billing.MeterEvent;
      export type MeterEventCreateParams = Stripe.V2.Billing.MeterEventCreateParams;
      export type MeterEventResource = Stripe.V2.Billing.MeterEventResource;
      export type MeterEventAdjustment = Stripe.V2.Billing.MeterEventAdjustment;
      export type MeterEventAdjustmentCreateParams = Stripe.V2.Billing.MeterEventAdjustmentCreateParams;
      export type MeterEventAdjustmentResource = Stripe.V2.Billing.MeterEventAdjustmentResource;
      export type MeterEventSession = Stripe.V2.Billing.MeterEventSession;
      export type MeterEventSessionCreateParams = Stripe.V2.Billing.MeterEventSessionCreateParams;
      export type MeterEventSessionResource = Stripe.V2.Billing.MeterEventSessionResource;
      export type Profile = Stripe.V2.Billing.Profile;
      export type ProfileCreateParams = Stripe.V2.Billing.ProfileCreateParams;
      export type ProfileRetrieveParams = Stripe.V2.Billing.ProfileRetrieveParams;
      export type ProfileUpdateParams = Stripe.V2.Billing.ProfileUpdateParams;
      export type ProfileListParams = Stripe.V2.Billing.ProfileListParams;
      export type ProfileResource = Stripe.V2.Billing.ProfileResource;
      export type BillSettingVersion = Stripe.V2.Billing.BillSettingVersion;
      export type CollectionSettingVersion = Stripe.V2.Billing.CollectionSettingVersion;
      export namespace BillSettingCreateParams {
        export type Calculation = Stripe.V2.Billing.BillSettingCreateParams.Calculation;
        export type Invoice = Stripe.V2.Billing.BillSettingCreateParams.Invoice;
      }
      export namespace BillSettingUpdateParams {
        export type Calculation = Stripe.V2.Billing.BillSettingUpdateParams.Calculation;
        export type Invoice = Stripe.V2.Billing.BillSettingUpdateParams.Invoice;
      }
      export namespace CadenceCreateParams {
        export type BillingCycle = Stripe.V2.Billing.CadenceCreateParams.BillingCycle;
        export type Payer = Stripe.V2.Billing.CadenceCreateParams.Payer;
        export type Settings = Stripe.V2.Billing.CadenceCreateParams.Settings;
      }
      export namespace CadenceUpdateParams {
        export type Payer = Stripe.V2.Billing.CadenceUpdateParams.Payer;
        export type Settings = Stripe.V2.Billing.CadenceUpdateParams.Settings;
      }
      export namespace CadenceListParams {
        export type Payer = Stripe.V2.Billing.CadenceListParams.Payer;
      }
      export namespace CollectionSettingCreateParams {
        export type CollectionMethod = Stripe.V2.Billing.CollectionSettingCreateParams.CollectionMethod;
        export type EmailDelivery = Stripe.V2.Billing.CollectionSettingCreateParams.EmailDelivery;
        export type PaymentMethodOptions = Stripe.V2.Billing.CollectionSettingCreateParams.PaymentMethodOptions;
      }
      export namespace CollectionSettingUpdateParams {
        export type CollectionMethod = Stripe.V2.Billing.CollectionSettingUpdateParams.CollectionMethod;
        export type EmailDelivery = Stripe.V2.Billing.CollectionSettingUpdateParams.EmailDelivery;
        export type PaymentMethodOptions = Stripe.V2.Billing.CollectionSettingUpdateParams.PaymentMethodOptions;
      }
      export namespace MeterEventAdjustmentCreateParams {
        export type Cancel = Stripe_.V2.Billing.MeterEventAdjustmentCreateParams.Cancel;
      }
      export namespace MeterEventAdjustment {
        export type Cancel = Stripe_.V2.Billing.MeterEventAdjustment.Cancel;
        export type Status = Stripe_.V2.Billing.MeterEventAdjustment.Status;
      }
      export namespace ProfileListParams {
        export type Status = Stripe.V2.Billing.ProfileListParams.Status;
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
      export type BatchJob = Stripe.V2.Core.BatchJob;
      export type BatchJobCreateParams = Stripe.V2.Core.BatchJobCreateParams;
      export type BatchJobRetrieveParams = Stripe.V2.Core.BatchJobRetrieveParams;
      export type BatchJobCancelParams = Stripe.V2.Core.BatchJobCancelParams;
      export type BatchJobResource = Stripe.V2.Core.BatchJobResource;
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
      export namespace BatchJobCreateParams {
        export type Endpoint = Stripe.V2.Core.BatchJobCreateParams.Endpoint;
        export type NotificationSuppression = Stripe.V2.Core.BatchJobCreateParams.NotificationSuppression;
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
      export namespace Vault {
        export type GbBankAccount = Stripe.V2.Core.Vault.GbBankAccount;
        export type GbBankAccountCreateParams = Stripe.V2.Core.Vault.GbBankAccountCreateParams;
        export type GbBankAccountRetrieveParams = Stripe.V2.Core.Vault.GbBankAccountRetrieveParams;
        export type GbBankAccountListParams = Stripe.V2.Core.Vault.GbBankAccountListParams;
        export type GbBankAccountAcknowledgeConfirmationOfPayeeParams = Stripe.V2.Core.Vault.GbBankAccountAcknowledgeConfirmationOfPayeeParams;
        export type GbBankAccountArchiveParams = Stripe.V2.Core.Vault.GbBankAccountArchiveParams;
        export type GbBankAccountInitiateConfirmationOfPayeeParams = Stripe.V2.Core.Vault.GbBankAccountInitiateConfirmationOfPayeeParams;
        export type GbBankAccountResource = Stripe.V2.Core.Vault.GbBankAccountResource;
        export type UsBankAccount = Stripe.V2.Core.Vault.UsBankAccount;
        export type UsBankAccountCreateParams = Stripe.V2.Core.Vault.UsBankAccountCreateParams;
        export type UsBankAccountRetrieveParams = Stripe.V2.Core.Vault.UsBankAccountRetrieveParams;
        export type UsBankAccountUpdateParams = Stripe.V2.Core.Vault.UsBankAccountUpdateParams;
        export type UsBankAccountListParams = Stripe.V2.Core.Vault.UsBankAccountListParams;
        export type UsBankAccountArchiveParams = Stripe.V2.Core.Vault.UsBankAccountArchiveParams;
        export type UsBankAccountConfirmMicrodepositsParams = Stripe.V2.Core.Vault.UsBankAccountConfirmMicrodepositsParams;
        export type UsBankAccountSendMicrodepositsParams = Stripe.V2.Core.Vault.UsBankAccountSendMicrodepositsParams;
        export type UsBankAccountResource = Stripe.V2.Core.Vault.UsBankAccountResource;
        export namespace GbBankAccountCreateParams {
          export type BankAccountType = Stripe.V2.Core.Vault.GbBankAccountCreateParams.BankAccountType;
          export type ConfirmationOfPayee = Stripe.V2.Core.Vault.GbBankAccountCreateParams.ConfirmationOfPayee;
        }
        export namespace GbBankAccountInitiateConfirmationOfPayeeParams {
          export type BusinessType = Stripe.V2.Core.Vault.GbBankAccountInitiateConfirmationOfPayeeParams.BusinessType;
        }
        export namespace UsBankAccountCreateParams {
          export type BankAccountType = Stripe.V2.Core.Vault.UsBankAccountCreateParams.BankAccountType;
        }
      }
    }
    export namespace Data {
      export namespace Reporting {
        export type QueryRun = Stripe.V2.Data.Reporting.QueryRun;
        export type QueryRunCreateParams = Stripe.V2.Data.Reporting.QueryRunCreateParams;
        export type QueryRunRetrieveParams = Stripe.V2.Data.Reporting.QueryRunRetrieveParams;
        export type QueryRunResource = Stripe.V2.Data.Reporting.QueryRunResource;
        export namespace QueryRunCreateParams {
          export type ResultOptions = Stripe.V2.Data.Reporting.QueryRunCreateParams.ResultOptions;
        }
      }
    }
    export namespace Extend {
      export type Workflow = Stripe.V2.Extend.Workflow;
      export type WorkflowRetrieveParams = Stripe.V2.Extend.WorkflowRetrieveParams;
      export type WorkflowListParams = Stripe.V2.Extend.WorkflowListParams;
      export type WorkflowInvokeParams = Stripe.V2.Extend.WorkflowInvokeParams;
      export type WorkflowResource = Stripe.V2.Extend.WorkflowResource;
      export type WorkflowRun = Stripe.V2.Extend.WorkflowRun;
      export type WorkflowRunRetrieveParams = Stripe.V2.Extend.WorkflowRunRetrieveParams;
      export type WorkflowRunListParams = Stripe.V2.Extend.WorkflowRunListParams;
      export type WorkflowRunResource = Stripe.V2.Extend.WorkflowRunResource;
      export namespace WorkflowListParams {
        export type Status = Stripe.V2.Extend.WorkflowListParams.Status;
      }
      export namespace WorkflowInvokeParams {
        export type InputParameters = Stripe.V2.Extend.WorkflowInvokeParams.InputParameters;
      }
      export namespace WorkflowRunListParams {
        export type Status = Stripe.V2.Extend.WorkflowRunListParams.Status;
      }
    }
    export namespace Iam {
      export type ActivityLog = Stripe.V2.Iam.ActivityLog;
      export type ActivityLogRetrieveParams = Stripe.V2.Iam.ActivityLogRetrieveParams;
      export type ActivityLogListParams = Stripe.V2.Iam.ActivityLogListParams;
      export type ActivityLogResource = Stripe.V2.Iam.ActivityLogResource;
      export namespace ActivityLogListParams {
        export type ActionGroup = Stripe.V2.Iam.ActivityLogListParams.ActionGroup;
        export type Action = Stripe.V2.Iam.ActivityLogListParams.Action;
      }
    }
    export namespace MoneyManagement {
      export type Adjustment = Stripe.V2.MoneyManagement.Adjustment;
      export type AdjustmentRetrieveParams = Stripe.V2.MoneyManagement.AdjustmentRetrieveParams;
      export type AdjustmentListParams = Stripe.V2.MoneyManagement.AdjustmentListParams;
      export type AdjustmentResource = Stripe.V2.MoneyManagement.AdjustmentResource;
      export type FinancialAccount = Stripe.V2.MoneyManagement.FinancialAccount;
      export type FinancialAccountCreateParams = Stripe.V2.MoneyManagement.FinancialAccountCreateParams;
      export type FinancialAccountRetrieveParams = Stripe.V2.MoneyManagement.FinancialAccountRetrieveParams;
      export type FinancialAccountUpdateParams = Stripe.V2.MoneyManagement.FinancialAccountUpdateParams;
      export type FinancialAccountListParams = Stripe.V2.MoneyManagement.FinancialAccountListParams;
      export type FinancialAccountCloseParams = Stripe.V2.MoneyManagement.FinancialAccountCloseParams;
      export type FinancialAccountResource = Stripe.V2.MoneyManagement.FinancialAccountResource;
      export type FinancialAddress = Stripe.V2.MoneyManagement.FinancialAddress;
      export type FinancialAddressCreateParams = Stripe.V2.MoneyManagement.FinancialAddressCreateParams;
      export type FinancialAddressRetrieveParams = Stripe.V2.MoneyManagement.FinancialAddressRetrieveParams;
      export type FinancialAddressListParams = Stripe.V2.MoneyManagement.FinancialAddressListParams;
      export type FinancialAddressResource = Stripe.V2.MoneyManagement.FinancialAddressResource;
      export type InboundTransfer = Stripe.V2.MoneyManagement.InboundTransfer;
      export type InboundTransferCreateParams = Stripe.V2.MoneyManagement.InboundTransferCreateParams;
      export type InboundTransferRetrieveParams = Stripe.V2.MoneyManagement.InboundTransferRetrieveParams;
      export type InboundTransferListParams = Stripe.V2.MoneyManagement.InboundTransferListParams;
      export type InboundTransferResource = Stripe.V2.MoneyManagement.InboundTransferResource;
      export type OutboundPayment = Stripe.V2.MoneyManagement.OutboundPayment;
      export type OutboundPaymentCreateParams = Stripe.V2.MoneyManagement.OutboundPaymentCreateParams;
      export type OutboundPaymentRetrieveParams = Stripe.V2.MoneyManagement.OutboundPaymentRetrieveParams;
      export type OutboundPaymentListParams = Stripe.V2.MoneyManagement.OutboundPaymentListParams;
      export type OutboundPaymentCancelParams = Stripe.V2.MoneyManagement.OutboundPaymentCancelParams;
      export type OutboundPaymentResource = Stripe.V2.MoneyManagement.OutboundPaymentResource;
      export type OutboundPaymentQuote = Stripe.V2.MoneyManagement.OutboundPaymentQuote;
      export type OutboundPaymentQuoteCreateParams = Stripe.V2.MoneyManagement.OutboundPaymentQuoteCreateParams;
      export type OutboundPaymentQuoteRetrieveParams = Stripe.V2.MoneyManagement.OutboundPaymentQuoteRetrieveParams;
      export type OutboundPaymentQuoteResource = Stripe.V2.MoneyManagement.OutboundPaymentQuoteResource;
      export type OutboundSetupIntent = Stripe.V2.MoneyManagement.OutboundSetupIntent;
      export type OutboundSetupIntentCreateParams = Stripe.V2.MoneyManagement.OutboundSetupIntentCreateParams;
      export type OutboundSetupIntentRetrieveParams = Stripe.V2.MoneyManagement.OutboundSetupIntentRetrieveParams;
      export type OutboundSetupIntentUpdateParams = Stripe.V2.MoneyManagement.OutboundSetupIntentUpdateParams;
      export type OutboundSetupIntentListParams = Stripe.V2.MoneyManagement.OutboundSetupIntentListParams;
      export type OutboundSetupIntentCancelParams = Stripe.V2.MoneyManagement.OutboundSetupIntentCancelParams;
      export type OutboundSetupIntentResource = Stripe.V2.MoneyManagement.OutboundSetupIntentResource;
      export type OutboundTransfer = Stripe.V2.MoneyManagement.OutboundTransfer;
      export type OutboundTransferCreateParams = Stripe.V2.MoneyManagement.OutboundTransferCreateParams;
      export type OutboundTransferRetrieveParams = Stripe.V2.MoneyManagement.OutboundTransferRetrieveParams;
      export type OutboundTransferListParams = Stripe.V2.MoneyManagement.OutboundTransferListParams;
      export type OutboundTransferCancelParams = Stripe.V2.MoneyManagement.OutboundTransferCancelParams;
      export type OutboundTransferResource = Stripe.V2.MoneyManagement.OutboundTransferResource;
      export type PayoutMethod = Stripe.V2.MoneyManagement.PayoutMethod;
      export type PayoutMethodRetrieveParams = Stripe.V2.MoneyManagement.PayoutMethodRetrieveParams;
      export type PayoutMethodListParams = Stripe.V2.MoneyManagement.PayoutMethodListParams;
      export type PayoutMethodArchiveParams = Stripe.V2.MoneyManagement.PayoutMethodArchiveParams;
      export type PayoutMethodUnarchiveParams = Stripe.V2.MoneyManagement.PayoutMethodUnarchiveParams;
      export type PayoutMethodResource = Stripe.V2.MoneyManagement.PayoutMethodResource;
      export type PayoutMethodsBankAccountSpec = Stripe.V2.MoneyManagement.PayoutMethodsBankAccountSpec;
      export type PayoutMethodsBankAccountSpecRetrieveParams = Stripe.V2.MoneyManagement.PayoutMethodsBankAccountSpecRetrieveParams;
      export type PayoutMethodsBankAccountSpecResource = Stripe.V2.MoneyManagement.PayoutMethodsBankAccountSpecResource;
      export type ReceivedCredit = Stripe.V2.MoneyManagement.ReceivedCredit;
      export type ReceivedCreditRetrieveParams = Stripe.V2.MoneyManagement.ReceivedCreditRetrieveParams;
      export type ReceivedCreditListParams = Stripe.V2.MoneyManagement.ReceivedCreditListParams;
      export type ReceivedCreditResource = Stripe.V2.MoneyManagement.ReceivedCreditResource;
      export type ReceivedDebit = Stripe.V2.MoneyManagement.ReceivedDebit;
      export type ReceivedDebitRetrieveParams = Stripe.V2.MoneyManagement.ReceivedDebitRetrieveParams;
      export type ReceivedDebitListParams = Stripe.V2.MoneyManagement.ReceivedDebitListParams;
      export type ReceivedDebitResource = Stripe.V2.MoneyManagement.ReceivedDebitResource;
      export type Transaction = Stripe.V2.MoneyManagement.Transaction;
      export type TransactionRetrieveParams = Stripe.V2.MoneyManagement.TransactionRetrieveParams;
      export type TransactionListParams = Stripe.V2.MoneyManagement.TransactionListParams;
      export type TransactionResource = Stripe.V2.MoneyManagement.TransactionResource;
      export type TransactionEntry = Stripe.V2.MoneyManagement.TransactionEntry;
      export type TransactionEntryRetrieveParams = Stripe.V2.MoneyManagement.TransactionEntryRetrieveParams;
      export type TransactionEntryListParams = Stripe.V2.MoneyManagement.TransactionEntryListParams;
      export type TransactionEntryResource = Stripe.V2.MoneyManagement.TransactionEntryResource;
      export namespace FinancialAccountCreateParams {
        export type Storage = Stripe.V2.MoneyManagement.FinancialAccountCreateParams.Storage;
      }
      export namespace FinancialAccountListParams {
        export type Status = Stripe.V2.MoneyManagement.FinancialAccountListParams.Status;
      }
      export namespace FinancialAccountCloseParams {
        export type ForwardingSettings = Stripe.V2.MoneyManagement.FinancialAccountCloseParams.ForwardingSettings;
      }
      export namespace FinancialAddressCreateParams {
        export type Type = Stripe.V2.MoneyManagement.FinancialAddressCreateParams.Type;
      }
      export namespace FinancialAddressRetrieveParams {
        export type Include = Stripe.V2.MoneyManagement.FinancialAddressRetrieveParams.Include;
      }
      export namespace FinancialAddressListParams {
        export type Include = Stripe.V2.MoneyManagement.FinancialAddressListParams.Include;
      }
      export namespace InboundTransferCreateParams {
        export type From = Stripe.V2.MoneyManagement.InboundTransferCreateParams.From;
        export type To = Stripe.V2.MoneyManagement.InboundTransferCreateParams.To;
      }
      export namespace OutboundPaymentCreateParams {
        export type From = Stripe.V2.MoneyManagement.OutboundPaymentCreateParams.From;
        export type To = Stripe.V2.MoneyManagement.OutboundPaymentCreateParams.To;
        export type DeliveryOptions = Stripe.V2.MoneyManagement.OutboundPaymentCreateParams.DeliveryOptions;
        export type RecipientNotification = Stripe.V2.MoneyManagement.OutboundPaymentCreateParams.RecipientNotification;
      }
      export namespace OutboundPaymentListParams {
        export type Status = Stripe.V2.MoneyManagement.OutboundPaymentListParams.Status;
      }
      export namespace OutboundPaymentQuoteCreateParams {
        export type From = Stripe.V2.MoneyManagement.OutboundPaymentQuoteCreateParams.From;
        export type To = Stripe.V2.MoneyManagement.OutboundPaymentQuoteCreateParams.To;
        export type DeliveryOptions = Stripe.V2.MoneyManagement.OutboundPaymentQuoteCreateParams.DeliveryOptions;
      }
      export namespace OutboundSetupIntentCreateParams {
        export type PayoutMethodData = Stripe.V2.MoneyManagement.OutboundSetupIntentCreateParams.PayoutMethodData;
        export type UsageIntent = Stripe.V2.MoneyManagement.OutboundSetupIntentCreateParams.UsageIntent;
      }
      export namespace OutboundSetupIntentUpdateParams {
        export type PayoutMethodData = Stripe.V2.MoneyManagement.OutboundSetupIntentUpdateParams.PayoutMethodData;
      }
      export namespace OutboundTransferCreateParams {
        export type From = Stripe.V2.MoneyManagement.OutboundTransferCreateParams.From;
        export type To = Stripe.V2.MoneyManagement.OutboundTransferCreateParams.To;
        export type DeliveryOptions = Stripe.V2.MoneyManagement.OutboundTransferCreateParams.DeliveryOptions;
      }
      export namespace OutboundTransferListParams {
        export type Status = Stripe.V2.MoneyManagement.OutboundTransferListParams.Status;
      }
      export namespace PayoutMethodListParams {
        export type UsageStatus = Stripe.V2.MoneyManagement.PayoutMethodListParams.UsageStatus;
      }
    }
    export namespace Network {
      export type BusinessProfile = Stripe.V2.Network.BusinessProfile;
      export type BusinessProfileRetrieveParams = Stripe.V2.Network.BusinessProfileRetrieveParams;
      export type BusinessProfileMeParams = Stripe.V2.Network.BusinessProfileMeParams;
      export type BusinessProfileResource = Stripe.V2.Network.BusinessProfileResource;
    }
    export namespace OrchestratedCommerce {
      export type Agreement = Stripe.V2.OrchestratedCommerce.Agreement;
      export type AgreementCreateParams = Stripe.V2.OrchestratedCommerce.AgreementCreateParams;
      export type AgreementRetrieveParams = Stripe.V2.OrchestratedCommerce.AgreementRetrieveParams;
      export type AgreementListParams = Stripe.V2.OrchestratedCommerce.AgreementListParams;
      export type AgreementConfirmParams = Stripe.V2.OrchestratedCommerce.AgreementConfirmParams;
      export type AgreementTerminateParams = Stripe.V2.OrchestratedCommerce.AgreementTerminateParams;
      export type AgreementResource = Stripe.V2.OrchestratedCommerce.AgreementResource;
    }
    export namespace Commerce {
      export type ProductCatalogImport = Stripe_.V2.Commerce.ProductCatalogImport;
      export namespace ProductCatalogImport {
        export type FeedType = Stripe_.V2.Commerce.ProductCatalogImport.FeedType;
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
    export type V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEventNotification;
    export type V2CoreAccountIncludingConfigurationStorerUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationStorerUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationStorerUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationStorerUpdatedEventNotification;
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
    export type V2CoreBatchJobBatchFailedEvent = Stripe.V2.Core.Events.V2CoreBatchJobBatchFailedEvent;
    export type V2CoreBatchJobBatchFailedEventNotification = Stripe.V2.Core.Events.V2CoreBatchJobBatchFailedEventNotification;
    export type V2CoreBatchJobCanceledEvent = Stripe.V2.Core.Events.V2CoreBatchJobCanceledEvent;
    export type V2CoreBatchJobCanceledEventNotification = Stripe.V2.Core.Events.V2CoreBatchJobCanceledEventNotification;
    export type V2CoreBatchJobCompletedEvent = Stripe.V2.Core.Events.V2CoreBatchJobCompletedEvent;
    export type V2CoreBatchJobCompletedEventNotification = Stripe.V2.Core.Events.V2CoreBatchJobCompletedEventNotification;
    export type V2CoreBatchJobCreatedEvent = Stripe.V2.Core.Events.V2CoreBatchJobCreatedEvent;
    export type V2CoreBatchJobCreatedEventNotification = Stripe.V2.Core.Events.V2CoreBatchJobCreatedEventNotification;
    export type V2CoreBatchJobReadyForUploadEvent = Stripe.V2.Core.Events.V2CoreBatchJobReadyForUploadEvent;
    export type V2CoreBatchJobReadyForUploadEventNotification = Stripe.V2.Core.Events.V2CoreBatchJobReadyForUploadEventNotification;
    export type V2CoreBatchJobTimeoutEvent = Stripe.V2.Core.Events.V2CoreBatchJobTimeoutEvent;
    export type V2CoreBatchJobTimeoutEventNotification = Stripe.V2.Core.Events.V2CoreBatchJobTimeoutEventNotification;
    export type V2CoreBatchJobUpdatedEvent = Stripe.V2.Core.Events.V2CoreBatchJobUpdatedEvent;
    export type V2CoreBatchJobUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreBatchJobUpdatedEventNotification;
    export type V2CoreBatchJobUploadTimeoutEvent = Stripe.V2.Core.Events.V2CoreBatchJobUploadTimeoutEvent;
    export type V2CoreBatchJobUploadTimeoutEventNotification = Stripe.V2.Core.Events.V2CoreBatchJobUploadTimeoutEventNotification;
    export type V2CoreBatchJobValidatingEvent = Stripe.V2.Core.Events.V2CoreBatchJobValidatingEvent;
    export type V2CoreBatchJobValidatingEventNotification = Stripe.V2.Core.Events.V2CoreBatchJobValidatingEventNotification;
    export type V2CoreBatchJobValidationFailedEvent = Stripe.V2.Core.Events.V2CoreBatchJobValidationFailedEvent;
    export type V2CoreBatchJobValidationFailedEventNotification = Stripe.V2.Core.Events.V2CoreBatchJobValidationFailedEventNotification;
    export type V2CoreEventDestinationPingEvent = Stripe.V2.Core.Events.V2CoreEventDestinationPingEvent;
    export type V2CoreEventDestinationPingEventNotification = Stripe.V2.Core.Events.V2CoreEventDestinationPingEventNotification;
    export type V2CoreHealthEventGenerationFailureResolvedEvent = Stripe.V2.Core.Events.V2CoreHealthEventGenerationFailureResolvedEvent;
    export type V2CoreHealthEventGenerationFailureResolvedEventNotification = Stripe.V2.Core.Events.V2CoreHealthEventGenerationFailureResolvedEventNotification;
    export type V2DataReportingQueryRunCreatedEvent = Stripe.V2.Core.Events.V2DataReportingQueryRunCreatedEvent;
    export type V2DataReportingQueryRunCreatedEventNotification = Stripe.V2.Core.Events.V2DataReportingQueryRunCreatedEventNotification;
    export type V2DataReportingQueryRunFailedEvent = Stripe.V2.Core.Events.V2DataReportingQueryRunFailedEvent;
    export type V2DataReportingQueryRunFailedEventNotification = Stripe.V2.Core.Events.V2DataReportingQueryRunFailedEventNotification;
    export type V2DataReportingQueryRunSucceededEvent = Stripe.V2.Core.Events.V2DataReportingQueryRunSucceededEvent;
    export type V2DataReportingQueryRunSucceededEventNotification = Stripe.V2.Core.Events.V2DataReportingQueryRunSucceededEventNotification;
    export type V2DataReportingQueryRunUpdatedEvent = Stripe.V2.Core.Events.V2DataReportingQueryRunUpdatedEvent;
    export type V2DataReportingQueryRunUpdatedEventNotification = Stripe.V2.Core.Events.V2DataReportingQueryRunUpdatedEventNotification;
    export type V2ExtendWorkflowRunFailedEvent = Stripe.V2.Core.Events.V2ExtendWorkflowRunFailedEvent;
    export type V2ExtendWorkflowRunFailedEventNotification = Stripe.V2.Core.Events.V2ExtendWorkflowRunFailedEventNotification;
    export type V2ExtendWorkflowRunStartedEvent = Stripe.V2.Core.Events.V2ExtendWorkflowRunStartedEvent;
    export type V2ExtendWorkflowRunStartedEventNotification = Stripe.V2.Core.Events.V2ExtendWorkflowRunStartedEventNotification;
    export type V2ExtendWorkflowRunSucceededEvent = Stripe.V2.Core.Events.V2ExtendWorkflowRunSucceededEvent;
    export type V2ExtendWorkflowRunSucceededEventNotification = Stripe.V2.Core.Events.V2ExtendWorkflowRunSucceededEventNotification;
    export type V2MoneyManagementAdjustmentCreatedEvent = Stripe.V2.Core.Events.V2MoneyManagementAdjustmentCreatedEvent;
    export type V2MoneyManagementAdjustmentCreatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementAdjustmentCreatedEventNotification;
    export type V2MoneyManagementFinancialAccountCreatedEvent = Stripe.V2.Core.Events.V2MoneyManagementFinancialAccountCreatedEvent;
    export type V2MoneyManagementFinancialAccountCreatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementFinancialAccountCreatedEventNotification;
    export type V2MoneyManagementFinancialAccountUpdatedEvent = Stripe.V2.Core.Events.V2MoneyManagementFinancialAccountUpdatedEvent;
    export type V2MoneyManagementFinancialAccountUpdatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementFinancialAccountUpdatedEventNotification;
    export type V2MoneyManagementFinancialAddressActivatedEvent = Stripe.V2.Core.Events.V2MoneyManagementFinancialAddressActivatedEvent;
    export type V2MoneyManagementFinancialAddressActivatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementFinancialAddressActivatedEventNotification;
    export type V2MoneyManagementFinancialAddressFailedEvent = Stripe.V2.Core.Events.V2MoneyManagementFinancialAddressFailedEvent;
    export type V2MoneyManagementFinancialAddressFailedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementFinancialAddressFailedEventNotification;
    export type V2MoneyManagementInboundTransferAvailableEvent = Stripe.V2.Core.Events.V2MoneyManagementInboundTransferAvailableEvent;
    export type V2MoneyManagementInboundTransferAvailableEventNotification = Stripe.V2.Core.Events.V2MoneyManagementInboundTransferAvailableEventNotification;
    export type V2MoneyManagementInboundTransferBankDebitFailedEvent = Stripe.V2.Core.Events.V2MoneyManagementInboundTransferBankDebitFailedEvent;
    export type V2MoneyManagementInboundTransferBankDebitFailedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementInboundTransferBankDebitFailedEventNotification;
    export type V2MoneyManagementInboundTransferBankDebitProcessingEvent = Stripe.V2.Core.Events.V2MoneyManagementInboundTransferBankDebitProcessingEvent;
    export type V2MoneyManagementInboundTransferBankDebitProcessingEventNotification = Stripe.V2.Core.Events.V2MoneyManagementInboundTransferBankDebitProcessingEventNotification;
    export type V2MoneyManagementInboundTransferBankDebitQueuedEvent = Stripe.V2.Core.Events.V2MoneyManagementInboundTransferBankDebitQueuedEvent;
    export type V2MoneyManagementInboundTransferBankDebitQueuedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementInboundTransferBankDebitQueuedEventNotification;
    export type V2MoneyManagementInboundTransferBankDebitReturnedEvent = Stripe.V2.Core.Events.V2MoneyManagementInboundTransferBankDebitReturnedEvent;
    export type V2MoneyManagementInboundTransferBankDebitReturnedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementInboundTransferBankDebitReturnedEventNotification;
    export type V2MoneyManagementInboundTransferBankDebitSucceededEvent = Stripe.V2.Core.Events.V2MoneyManagementInboundTransferBankDebitSucceededEvent;
    export type V2MoneyManagementInboundTransferBankDebitSucceededEventNotification = Stripe.V2.Core.Events.V2MoneyManagementInboundTransferBankDebitSucceededEventNotification;
    export type V2MoneyManagementOutboundPaymentCanceledEvent = Stripe.V2.Core.Events.V2MoneyManagementOutboundPaymentCanceledEvent;
    export type V2MoneyManagementOutboundPaymentCanceledEventNotification = Stripe.V2.Core.Events.V2MoneyManagementOutboundPaymentCanceledEventNotification;
    export type V2MoneyManagementOutboundPaymentCreatedEvent = Stripe.V2.Core.Events.V2MoneyManagementOutboundPaymentCreatedEvent;
    export type V2MoneyManagementOutboundPaymentCreatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementOutboundPaymentCreatedEventNotification;
    export type V2MoneyManagementOutboundPaymentFailedEvent = Stripe.V2.Core.Events.V2MoneyManagementOutboundPaymentFailedEvent;
    export type V2MoneyManagementOutboundPaymentFailedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementOutboundPaymentFailedEventNotification;
    export type V2MoneyManagementOutboundPaymentPostedEvent = Stripe.V2.Core.Events.V2MoneyManagementOutboundPaymentPostedEvent;
    export type V2MoneyManagementOutboundPaymentPostedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementOutboundPaymentPostedEventNotification;
    export type V2MoneyManagementOutboundPaymentReturnedEvent = Stripe.V2.Core.Events.V2MoneyManagementOutboundPaymentReturnedEvent;
    export type V2MoneyManagementOutboundPaymentReturnedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementOutboundPaymentReturnedEventNotification;
    export type V2MoneyManagementOutboundPaymentUpdatedEvent = Stripe.V2.Core.Events.V2MoneyManagementOutboundPaymentUpdatedEvent;
    export type V2MoneyManagementOutboundPaymentUpdatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementOutboundPaymentUpdatedEventNotification;
    export type V2MoneyManagementOutboundTransferCanceledEvent = Stripe.V2.Core.Events.V2MoneyManagementOutboundTransferCanceledEvent;
    export type V2MoneyManagementOutboundTransferCanceledEventNotification = Stripe.V2.Core.Events.V2MoneyManagementOutboundTransferCanceledEventNotification;
    export type V2MoneyManagementOutboundTransferCreatedEvent = Stripe.V2.Core.Events.V2MoneyManagementOutboundTransferCreatedEvent;
    export type V2MoneyManagementOutboundTransferCreatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementOutboundTransferCreatedEventNotification;
    export type V2MoneyManagementOutboundTransferFailedEvent = Stripe.V2.Core.Events.V2MoneyManagementOutboundTransferFailedEvent;
    export type V2MoneyManagementOutboundTransferFailedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementOutboundTransferFailedEventNotification;
    export type V2MoneyManagementOutboundTransferPostedEvent = Stripe.V2.Core.Events.V2MoneyManagementOutboundTransferPostedEvent;
    export type V2MoneyManagementOutboundTransferPostedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementOutboundTransferPostedEventNotification;
    export type V2MoneyManagementOutboundTransferReturnedEvent = Stripe.V2.Core.Events.V2MoneyManagementOutboundTransferReturnedEvent;
    export type V2MoneyManagementOutboundTransferReturnedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementOutboundTransferReturnedEventNotification;
    export type V2MoneyManagementOutboundTransferUpdatedEvent = Stripe.V2.Core.Events.V2MoneyManagementOutboundTransferUpdatedEvent;
    export type V2MoneyManagementOutboundTransferUpdatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementOutboundTransferUpdatedEventNotification;
    export type V2MoneyManagementPayoutMethodCreatedEvent = Stripe.V2.Core.Events.V2MoneyManagementPayoutMethodCreatedEvent;
    export type V2MoneyManagementPayoutMethodCreatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementPayoutMethodCreatedEventNotification;
    export type V2MoneyManagementPayoutMethodUpdatedEvent = Stripe.V2.Core.Events.V2MoneyManagementPayoutMethodUpdatedEvent;
    export type V2MoneyManagementPayoutMethodUpdatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementPayoutMethodUpdatedEventNotification;
    export type V2MoneyManagementReceivedCreditAvailableEvent = Stripe.V2.Core.Events.V2MoneyManagementReceivedCreditAvailableEvent;
    export type V2MoneyManagementReceivedCreditAvailableEventNotification = Stripe.V2.Core.Events.V2MoneyManagementReceivedCreditAvailableEventNotification;
    export type V2MoneyManagementReceivedCreditFailedEvent = Stripe.V2.Core.Events.V2MoneyManagementReceivedCreditFailedEvent;
    export type V2MoneyManagementReceivedCreditFailedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementReceivedCreditFailedEventNotification;
    export type V2MoneyManagementReceivedCreditReturnedEvent = Stripe.V2.Core.Events.V2MoneyManagementReceivedCreditReturnedEvent;
    export type V2MoneyManagementReceivedCreditReturnedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementReceivedCreditReturnedEventNotification;
    export type V2MoneyManagementReceivedCreditSucceededEvent = Stripe.V2.Core.Events.V2MoneyManagementReceivedCreditSucceededEvent;
    export type V2MoneyManagementReceivedCreditSucceededEventNotification = Stripe.V2.Core.Events.V2MoneyManagementReceivedCreditSucceededEventNotification;
    export type V2MoneyManagementReceivedDebitCanceledEvent = Stripe.V2.Core.Events.V2MoneyManagementReceivedDebitCanceledEvent;
    export type V2MoneyManagementReceivedDebitCanceledEventNotification = Stripe.V2.Core.Events.V2MoneyManagementReceivedDebitCanceledEventNotification;
    export type V2MoneyManagementReceivedDebitFailedEvent = Stripe.V2.Core.Events.V2MoneyManagementReceivedDebitFailedEvent;
    export type V2MoneyManagementReceivedDebitFailedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementReceivedDebitFailedEventNotification;
    export type V2MoneyManagementReceivedDebitPendingEvent = Stripe.V2.Core.Events.V2MoneyManagementReceivedDebitPendingEvent;
    export type V2MoneyManagementReceivedDebitPendingEventNotification = Stripe.V2.Core.Events.V2MoneyManagementReceivedDebitPendingEventNotification;
    export type V2MoneyManagementReceivedDebitSucceededEvent = Stripe.V2.Core.Events.V2MoneyManagementReceivedDebitSucceededEvent;
    export type V2MoneyManagementReceivedDebitSucceededEventNotification = Stripe.V2.Core.Events.V2MoneyManagementReceivedDebitSucceededEventNotification;
    export type V2MoneyManagementReceivedDebitUpdatedEvent = Stripe.V2.Core.Events.V2MoneyManagementReceivedDebitUpdatedEvent;
    export type V2MoneyManagementReceivedDebitUpdatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementReceivedDebitUpdatedEventNotification;
    export type V2MoneyManagementTransactionCreatedEvent = Stripe.V2.Core.Events.V2MoneyManagementTransactionCreatedEvent;
    export type V2MoneyManagementTransactionCreatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementTransactionCreatedEventNotification;
    export type V2MoneyManagementTransactionUpdatedEvent = Stripe.V2.Core.Events.V2MoneyManagementTransactionUpdatedEvent;
    export type V2MoneyManagementTransactionUpdatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementTransactionUpdatedEventNotification;
    export type V2OrchestratedCommerceAgreementConfirmedEvent = Stripe.V2.Core.Events.V2OrchestratedCommerceAgreementConfirmedEvent;
    export type V2OrchestratedCommerceAgreementConfirmedEventNotification = Stripe.V2.Core.Events.V2OrchestratedCommerceAgreementConfirmedEventNotification;
    export type V2OrchestratedCommerceAgreementCreatedEvent = Stripe.V2.Core.Events.V2OrchestratedCommerceAgreementCreatedEvent;
    export type V2OrchestratedCommerceAgreementCreatedEventNotification = Stripe.V2.Core.Events.V2OrchestratedCommerceAgreementCreatedEventNotification;
    export type V2OrchestratedCommerceAgreementPartiallyConfirmedEvent = Stripe.V2.Core.Events.V2OrchestratedCommerceAgreementPartiallyConfirmedEvent;
    export type V2OrchestratedCommerceAgreementPartiallyConfirmedEventNotification = Stripe.V2.Core.Events.V2OrchestratedCommerceAgreementPartiallyConfirmedEventNotification;
    export type V2OrchestratedCommerceAgreementTerminatedEvent = Stripe.V2.Core.Events.V2OrchestratedCommerceAgreementTerminatedEvent;
    export type V2OrchestratedCommerceAgreementTerminatedEventNotification = Stripe.V2.Core.Events.V2OrchestratedCommerceAgreementTerminatedEventNotification;
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
    export namespace V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent.Data;
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
    export namespace V2CoreHealthEventGenerationFailureResolvedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthEventGenerationFailureResolvedEvent.Data;
    }
    export namespace V2ExtendWorkflowRunFailedEvent {
      export type Data = Stripe.V2.Core.Events.V2ExtendWorkflowRunFailedEvent.Data;
    }
    export namespace V2MoneyManagementInboundTransferAvailableEvent {
      export type Data = Stripe.V2.Core.Events.V2MoneyManagementInboundTransferAvailableEvent.Data;
    }
    export namespace V2MoneyManagementReceivedCreditAvailableEvent {
      export type Data = Stripe.V2.Core.Events.V2MoneyManagementReceivedCreditAvailableEvent.Data;
    }
    export namespace V2MoneyManagementTransactionCreatedEvent {
      export type Data = Stripe.V2.Core.Events.V2MoneyManagementTransactionCreatedEvent.Data;
    }
    export namespace V2OrchestratedCommerceAgreementConfirmedEvent {
      export type Data = Stripe.V2.Core.Events.V2OrchestratedCommerceAgreementConfirmedEvent.Data;
    }
    export namespace V2OrchestratedCommerceAgreementCreatedEvent {
      export type Data = Stripe.V2.Core.Events.V2OrchestratedCommerceAgreementCreatedEvent.Data;
    }
    export namespace V2OrchestratedCommerceAgreementPartiallyConfirmedEvent {
      export type Data = Stripe.V2.Core.Events.V2OrchestratedCommerceAgreementPartiallyConfirmedEvent.Data;
    }
    export namespace V2OrchestratedCommerceAgreementTerminatedEvent {
      export type Data = Stripe.V2.Core.Events.V2OrchestratedCommerceAgreementTerminatedEvent.Data;
    }
  }
  export type AccountApplicationAuthorizedEvent = Stripe.AccountApplicationAuthorizedEvent;
  export type AccountApplicationDeauthorizedEvent = Stripe.AccountApplicationDeauthorizedEvent;
  export type AccountExternalAccountCreatedEvent = Stripe.AccountExternalAccountCreatedEvent;
  export type AccountExternalAccountDeletedEvent = Stripe.AccountExternalAccountDeletedEvent;
  export type AccountExternalAccountUpdatedEvent = Stripe.AccountExternalAccountUpdatedEvent;
  export type AccountUpdatedEvent = Stripe.AccountUpdatedEvent;
  export type AccountNoticeCreatedEvent = Stripe.AccountNoticeCreatedEvent;
  export type AccountNoticeUpdatedEvent = Stripe.AccountNoticeUpdatedEvent;
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
  export type CapitalFinancingOfferAcceptedEvent = Stripe.CapitalFinancingOfferAcceptedEvent;
  export type CapitalFinancingOfferCanceledEvent = Stripe.CapitalFinancingOfferCanceledEvent;
  export type CapitalFinancingOfferCreatedEvent = Stripe.CapitalFinancingOfferCreatedEvent;
  export type CapitalFinancingOfferExpiredEvent = Stripe.CapitalFinancingOfferExpiredEvent;
  export type CapitalFinancingOfferFullyRepaidEvent = Stripe.CapitalFinancingOfferFullyRepaidEvent;
  export type CapitalFinancingOfferPaidOutEvent = Stripe.CapitalFinancingOfferPaidOutEvent;
  export type CapitalFinancingOfferRejectedEvent = Stripe.CapitalFinancingOfferRejectedEvent;
  export type CapitalFinancingOfferReplacementCreatedEvent = Stripe.CapitalFinancingOfferReplacementCreatedEvent;
  export type CapitalFinancingTransactionCreatedEvent = Stripe.CapitalFinancingTransactionCreatedEvent;
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
  export type CustomerSubscriptionCollectionPausedEvent = Stripe.CustomerSubscriptionCollectionPausedEvent;
  export type CustomerSubscriptionCollectionResumedEvent = Stripe.CustomerSubscriptionCollectionResumedEvent;
  export type CustomerSubscriptionCreatedEvent = Stripe.CustomerSubscriptionCreatedEvent;
  export type CustomerSubscriptionCustomEventEvent = Stripe.CustomerSubscriptionCustomEventEvent;
  export type CustomerSubscriptionDeletedEvent = Stripe.CustomerSubscriptionDeletedEvent;
  export type CustomerSubscriptionPausedEvent = Stripe.CustomerSubscriptionPausedEvent;
  export type CustomerSubscriptionPendingUpdateAppliedEvent = Stripe.CustomerSubscriptionPendingUpdateAppliedEvent;
  export type CustomerSubscriptionPendingUpdateExpiredEvent = Stripe.CustomerSubscriptionPendingUpdateExpiredEvent;
  export type CustomerSubscriptionPriceMigrationFailedEvent = Stripe.CustomerSubscriptionPriceMigrationFailedEvent;
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
  export type FinancialConnectionsAccountRefreshedInferredBalancesEvent = Stripe.FinancialConnectionsAccountRefreshedInferredBalancesEvent;
  export type FinancialConnectionsAccountRefreshedOwnershipEvent = Stripe.FinancialConnectionsAccountRefreshedOwnershipEvent;
  export type FinancialConnectionsAccountRefreshedTransactionsEvent = Stripe.FinancialConnectionsAccountRefreshedTransactionsEvent;
  export type FinancialConnectionsAccountUpcomingAccountNumberExpiryEvent = Stripe.FinancialConnectionsAccountUpcomingAccountNumberExpiryEvent;
  export type FinancialConnectionsSessionUpdatedEvent = Stripe.FinancialConnectionsSessionUpdatedEvent;
  export type FxQuoteExpiredEvent = Stripe.FxQuoteExpiredEvent;
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
  export type InvoicePaymentOverpaidEvent = Stripe.InvoicePaymentOverpaidEvent;
  export type InvoicePaymentActionRequiredEvent = Stripe.InvoicePaymentActionRequiredEvent;
  export type InvoicePaymentAttemptRequiredEvent = Stripe.InvoicePaymentAttemptRequiredEvent;
  export type InvoicePaymentFailedEvent = Stripe.InvoicePaymentFailedEvent;
  export type InvoicePaymentSucceededEvent = Stripe.InvoicePaymentSucceededEvent;
  export type InvoiceSentEvent = Stripe.InvoiceSentEvent;
  export type InvoiceUpcomingEvent = Stripe.InvoiceUpcomingEvent;
  export type InvoiceUpdatedEvent = Stripe.InvoiceUpdatedEvent;
  export type InvoiceVoidedEvent = Stripe.InvoiceVoidedEvent;
  export type InvoiceWillBeDueEvent = Stripe.InvoiceWillBeDueEvent;
  export type InvoicePaymentDetachedEvent = Stripe.InvoicePaymentDetachedEvent;
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
  export type IssuingDisputeSettlementDetailCreatedEvent = Stripe.IssuingDisputeSettlementDetailCreatedEvent;
  export type IssuingDisputeSettlementDetailUpdatedEvent = Stripe.IssuingDisputeSettlementDetailUpdatedEvent;
  export type IssuingFraudLiabilityDebitCreatedEvent = Stripe.IssuingFraudLiabilityDebitCreatedEvent;
  export type IssuingPersonalizationDesignActivatedEvent = Stripe.IssuingPersonalizationDesignActivatedEvent;
  export type IssuingPersonalizationDesignDeactivatedEvent = Stripe.IssuingPersonalizationDesignDeactivatedEvent;
  export type IssuingPersonalizationDesignRejectedEvent = Stripe.IssuingPersonalizationDesignRejectedEvent;
  export type IssuingPersonalizationDesignUpdatedEvent = Stripe.IssuingPersonalizationDesignUpdatedEvent;
  export type IssuingSettlementCreatedEvent = Stripe.IssuingSettlementCreatedEvent;
  export type IssuingSettlementUpdatedEvent = Stripe.IssuingSettlementUpdatedEvent;
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
  export type PrivacyRedactionJobCanceledEvent = Stripe.PrivacyRedactionJobCanceledEvent;
  export type PrivacyRedactionJobCreatedEvent = Stripe.PrivacyRedactionJobCreatedEvent;
  export type PrivacyRedactionJobReadyEvent = Stripe.PrivacyRedactionJobReadyEvent;
  export type PrivacyRedactionJobSucceededEvent = Stripe.PrivacyRedactionJobSucceededEvent;
  export type PrivacyRedactionJobValidationErrorEvent = Stripe.PrivacyRedactionJobValidationErrorEvent;
  export type ProductCreatedEvent = Stripe.ProductCreatedEvent;
  export type ProductDeletedEvent = Stripe.ProductDeletedEvent;
  export type ProductUpdatedEvent = Stripe.ProductUpdatedEvent;
  export type PromotionCodeCreatedEvent = Stripe.PromotionCodeCreatedEvent;
  export type PromotionCodeUpdatedEvent = Stripe.PromotionCodeUpdatedEvent;
  export type QuoteAcceptFailedEvent = Stripe.QuoteAcceptFailedEvent;
  export type QuoteAcceptedEvent = Stripe.QuoteAcceptedEvent;
  export type QuoteAcceptingEvent = Stripe.QuoteAcceptingEvent;
  export type QuoteCanceledEvent = Stripe.QuoteCanceledEvent;
  export type QuoteCreatedEvent = Stripe.QuoteCreatedEvent;
  export type QuoteDraftEvent = Stripe.QuoteDraftEvent;
  export type QuoteFinalizedEvent = Stripe.QuoteFinalizedEvent;
  export type QuoteReestimateFailedEvent = Stripe.QuoteReestimateFailedEvent;
  export type QuoteReestimatedEvent = Stripe.QuoteReestimatedEvent;
  export type QuoteStaleEvent = Stripe.QuoteStaleEvent;
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
  export type SubscriptionSchedulePriceMigrationFailedEvent = Stripe.SubscriptionSchedulePriceMigrationFailedEvent;
  export type SubscriptionScheduleReleasedEvent = Stripe.SubscriptionScheduleReleasedEvent;
  export type SubscriptionScheduleUpdatedEvent = Stripe.SubscriptionScheduleUpdatedEvent;
  export type TaxFormUpdatedEvent = Stripe.TaxFormUpdatedEvent;
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
