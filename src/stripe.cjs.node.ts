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
  export type AccountRetrieveSignalsParams = Stripe.AccountRetrieveSignalsParams;
  export type AccountSerializeBatchCreateParams = Stripe.AccountSerializeBatchCreateParams;
  export type AccountSerializeBatchDeleteParams = Stripe.AccountSerializeBatchDeleteParams;
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
  export type BalanceTransfer = Stripe.BalanceTransfer;
  export type BalanceTransferCreateParams = Stripe.BalanceTransferCreateParams;
  export type BalanceTransferResource = Stripe.BalanceTransferResource;
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
  export type CouponSerializeBatchDeleteParams = Stripe.CouponSerializeBatchDeleteParams;
  export type CouponSerializeBatchUpdateParams = Stripe.CouponSerializeBatchUpdateParams;
  export type CouponResource = Stripe.CouponResource;
  export type CreditNote = Stripe.CreditNote;
  export type CreditNoteCreateParams = Stripe.CreditNoteCreateParams;
  export type CreditNoteRetrieveParams = Stripe.CreditNoteRetrieveParams;
  export type CreditNoteUpdateParams = Stripe.CreditNoteUpdateParams;
  export type CreditNoteListParams = Stripe.CreditNoteListParams;
  export type CreditNoteListLineItemsParams = Stripe.CreditNoteListLineItemsParams;
  export type CreditNoteListPreviewLineItemsParams = Stripe.CreditNoteListPreviewLineItemsParams;
  export type CreditNotePreviewParams = Stripe.CreditNotePreviewParams;
  export type CreditNoteSerializeBatchCreateParams = Stripe.CreditNoteSerializeBatchCreateParams;
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
  export type CustomerSerializeBatchCreateParams = Stripe.CustomerSerializeBatchCreateParams;
  export type CustomerSerializeBatchCreateBalanceTransactionParams = Stripe.CustomerSerializeBatchCreateBalanceTransactionParams;
  export type CustomerSerializeBatchCreateForCustomerTaxIdParams = Stripe.CustomerSerializeBatchCreateForCustomerTaxIdParams;
  export type CustomerSerializeBatchCreateFundingInstructionsFundingInstructionsParams = Stripe.CustomerSerializeBatchCreateFundingInstructionsFundingInstructionsParams;
  export type CustomerSerializeBatchCreateSourceParams = Stripe.CustomerSerializeBatchCreateSourceParams;
  export type CustomerSerializeBatchDeleteParams = Stripe.CustomerSerializeBatchDeleteParams;
  export type CustomerSerializeBatchDeleteDiscountParams = Stripe.CustomerSerializeBatchDeleteDiscountParams;
  export type CustomerSerializeBatchDeleteSourceParams = Stripe.CustomerSerializeBatchDeleteSourceParams;
  export type CustomerSerializeBatchDeleteTaxIdParams = Stripe.CustomerSerializeBatchDeleteTaxIdParams;
  export type CustomerSerializeBatchUpdateParams = Stripe.CustomerSerializeBatchUpdateParams;
  export type CustomerSerializeBatchUpdateBalanceTransactionParams = Stripe.CustomerSerializeBatchUpdateBalanceTransactionParams;
  export type CustomerSerializeBatchUpdateCashBalanceParams = Stripe.CustomerSerializeBatchUpdateCashBalanceParams;
  export type CustomerSerializeBatchUpdateSourceParams = Stripe.CustomerSerializeBatchUpdateSourceParams;
  export type CustomerSerializeBatchVerifySourceParams = Stripe.CustomerSerializeBatchVerifySourceParams;
  export type CustomerUpdateBalanceTransactionParams = Stripe.CustomerUpdateBalanceTransactionParams;
  export type CustomerUpdateCashBalanceParams = Stripe.CustomerUpdateCashBalanceParams;
  export type CustomerUpdateSourceParams = Stripe.CustomerUpdateSourceParams;
  export type CustomerVerifySourceParams = Stripe.CustomerVerifySourceParams;
  export type CustomerResource = Stripe.CustomerResource;
  export type CustomerSession = Stripe.CustomerSession;
  export type CustomerSessionCreateParams = Stripe.CustomerSessionCreateParams;
  export type CustomerSessionSerializeBatchCreateParams = Stripe.CustomerSessionSerializeBatchCreateParams;
  export type CustomerSessionResource = Stripe.CustomerSessionResource;
  export type Dispute = Stripe.Dispute;
  export type DisputeRetrieveParams = Stripe.DisputeRetrieveParams;
  export type DisputeUpdateParams = Stripe.DisputeUpdateParams;
  export type DisputeListParams = Stripe.DisputeListParams;
  export type DisputeCloseParams = Stripe.DisputeCloseParams;
  export type DisputeSerializeBatchCloseParams = Stripe.DisputeSerializeBatchCloseParams;
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
  export type FrMealVouchersOnboarding = Stripe.FrMealVouchersOnboarding;
  export type FrMealVouchersOnboardingCreateParams = Stripe.FrMealVouchersOnboardingCreateParams;
  export type FrMealVouchersOnboardingRetrieveParams = Stripe.FrMealVouchersOnboardingRetrieveParams;
  export type FrMealVouchersOnboardingUpdateParams = Stripe.FrMealVouchersOnboardingUpdateParams;
  export type FrMealVouchersOnboardingListParams = Stripe.FrMealVouchersOnboardingListParams;
  export type FrMealVouchersOnboardingResource = Stripe.FrMealVouchersOnboardingResource;
  export type FxQuote = Stripe.FxQuote;
  export type FxQuoteCreateParams = Stripe.FxQuoteCreateParams;
  export type FxQuoteRetrieveParams = Stripe.FxQuoteRetrieveParams;
  export type FxQuoteListParams = Stripe.FxQuoteListParams;
  export type FxQuoteResource = Stripe.FxQuoteResource;
  export type GiftCard = Stripe.GiftCard;
  export type GiftCardCreateParams = Stripe.GiftCardCreateParams;
  export type GiftCardRetrieveParams = Stripe.GiftCardRetrieveParams;
  export type GiftCardActivateParams = Stripe.GiftCardActivateParams;
  export type GiftCardCashoutParams = Stripe.GiftCardCashoutParams;
  export type GiftCardCheckBalanceParams = Stripe.GiftCardCheckBalanceParams;
  export type GiftCardReloadParams = Stripe.GiftCardReloadParams;
  export type GiftCardVoidOperationParams = Stripe.GiftCardVoidOperationParams;
  export type GiftCardResource = Stripe.GiftCardResource;
  export type GiftCardOperation = Stripe.GiftCardOperation;
  export type GiftCardOperationRetrieveParams = Stripe.GiftCardOperationRetrieveParams;
  export type GiftCardOperationResource = Stripe.GiftCardOperationResource;
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
  export type InvoiceSerializeBatchAddLinesParams = Stripe.InvoiceSerializeBatchAddLinesParams;
  export type InvoiceSerializeBatchCreateParams = Stripe.InvoiceSerializeBatchCreateParams;
  export type InvoiceSerializeBatchCreatePreviewParams = Stripe.InvoiceSerializeBatchCreatePreviewParams;
  export type InvoiceSerializeBatchDeleteParams = Stripe.InvoiceSerializeBatchDeleteParams;
  export type InvoiceSerializeBatchFinalizeInvoiceParams = Stripe.InvoiceSerializeBatchFinalizeInvoiceParams;
  export type InvoiceSerializeBatchMarkUncollectibleParams = Stripe.InvoiceSerializeBatchMarkUncollectibleParams;
  export type InvoiceSerializeBatchPayParams = Stripe.InvoiceSerializeBatchPayParams;
  export type InvoiceSerializeBatchRemoveLinesParams = Stripe.InvoiceSerializeBatchRemoveLinesParams;
  export type InvoiceSerializeBatchSendInvoiceParams = Stripe.InvoiceSerializeBatchSendInvoiceParams;
  export type InvoiceSerializeBatchUpdateParams = Stripe.InvoiceSerializeBatchUpdateParams;
  export type InvoiceSerializeBatchUpdateLineItemParams = Stripe.InvoiceSerializeBatchUpdateLineItemParams;
  export type InvoiceSerializeBatchUpdateLinesParams = Stripe.InvoiceSerializeBatchUpdateLinesParams;
  export type InvoiceSerializeBatchVoidInvoiceParams = Stripe.InvoiceSerializeBatchVoidInvoiceParams;
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
  export type InvoiceItemSerializeBatchCreateParams = Stripe.InvoiceItemSerializeBatchCreateParams;
  export type InvoiceItemSerializeBatchDeleteParams = Stripe.InvoiceItemSerializeBatchDeleteParams;
  export type InvoiceItemSerializeBatchUpdateParams = Stripe.InvoiceItemSerializeBatchUpdateParams;
  export type InvoiceItemResource = Stripe.InvoiceItemResource;
  export type InvoicePayment = Stripe.InvoicePayment;
  export type InvoicePaymentRetrieveParams = Stripe.InvoicePaymentRetrieveParams;
  export type InvoicePaymentListParams = Stripe.InvoicePaymentListParams;
  export type InvoicePaymentResource = Stripe.InvoicePaymentResource;
  export type InvoiceRenderingTemplate = Stripe.InvoiceRenderingTemplate;
  export type InvoiceRenderingTemplateRetrieveParams = Stripe.InvoiceRenderingTemplateRetrieveParams;
  export type InvoiceRenderingTemplateListParams = Stripe.InvoiceRenderingTemplateListParams;
  export type InvoiceRenderingTemplateArchiveParams = Stripe.InvoiceRenderingTemplateArchiveParams;
  export type InvoiceRenderingTemplateSerializeBatchArchiveParams = Stripe.InvoiceRenderingTemplateSerializeBatchArchiveParams;
  export type InvoiceRenderingTemplateSerializeBatchUnarchiveParams = Stripe.InvoiceRenderingTemplateSerializeBatchUnarchiveParams;
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
  export type PaymentAttemptRecordReportAuthenticatedParams = Stripe.PaymentAttemptRecordReportAuthenticatedParams;
  export type PaymentAttemptRecordReportAuthorizedParams = Stripe.PaymentAttemptRecordReportAuthorizedParams;
  export type PaymentAttemptRecordReportCanceledParams = Stripe.PaymentAttemptRecordReportCanceledParams;
  export type PaymentAttemptRecordReportFailedParams = Stripe.PaymentAttemptRecordReportFailedParams;
  export type PaymentAttemptRecordReportGuaranteedParams = Stripe.PaymentAttemptRecordReportGuaranteedParams;
  export type PaymentAttemptRecordReportInformationalParams = Stripe.PaymentAttemptRecordReportInformationalParams;
  export type PaymentAttemptRecordReportRefundParams = Stripe.PaymentAttemptRecordReportRefundParams;
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
  export type PaymentIntentReauthorizeParams = Stripe.PaymentIntentReauthorizeParams;
  export type PaymentIntentSearchParams = Stripe.PaymentIntentSearchParams;
  export type PaymentIntentTriggerActionParams = Stripe.PaymentIntentTriggerActionParams;
  export type PaymentIntentUpdateCryptoRefundAddressParams = Stripe.PaymentIntentUpdateCryptoRefundAddressParams;
  export type PaymentIntentVerifyMicrodepositsParams = Stripe.PaymentIntentVerifyMicrodepositsParams;
  export type PaymentIntentResource = Stripe.PaymentIntentResource;
  export type PaymentLink = Stripe.PaymentLink;
  export type PaymentLinkCreateParams = Stripe.PaymentLinkCreateParams;
  export type PaymentLinkRetrieveParams = Stripe.PaymentLinkRetrieveParams;
  export type PaymentLinkUpdateParams = Stripe.PaymentLinkUpdateParams;
  export type PaymentLinkListParams = Stripe.PaymentLinkListParams;
  export type PaymentLinkListLineItemsParams = Stripe.PaymentLinkListLineItemsParams;
  export type PaymentLinkResource = Stripe.PaymentLinkResource;
  export type PaymentLocation = Stripe.PaymentLocation;
  export type DeletedPaymentLocation = Stripe.DeletedPaymentLocation;
  export type PaymentLocationCreateParams = Stripe.PaymentLocationCreateParams;
  export type PaymentLocationRetrieveParams = Stripe.PaymentLocationRetrieveParams;
  export type PaymentLocationUpdateParams = Stripe.PaymentLocationUpdateParams;
  export type PaymentLocationListParams = Stripe.PaymentLocationListParams;
  export type PaymentLocationDeleteParams = Stripe.PaymentLocationDeleteParams;
  export type PaymentLocationResource = Stripe.PaymentLocationResource;
  export type PaymentLocationCapability = Stripe.PaymentLocationCapability;
  export type PaymentLocationCapabilityRetrieveParams = Stripe.PaymentLocationCapabilityRetrieveParams;
  export type PaymentLocationCapabilityUpdateParams = Stripe.PaymentLocationCapabilityUpdateParams;
  export type PaymentLocationCapabilityListParams = Stripe.PaymentLocationCapabilityListParams;
  export type PaymentLocationCapabilityResource = Stripe.PaymentLocationCapabilityResource;
  export type PaymentMethod = Stripe.PaymentMethod;
  export type PaymentMethodCreateParams = Stripe.PaymentMethodCreateParams;
  export type PaymentMethodRetrieveParams = Stripe.PaymentMethodRetrieveParams;
  export type PaymentMethodUpdateParams = Stripe.PaymentMethodUpdateParams;
  export type PaymentMethodListParams = Stripe.PaymentMethodListParams;
  export type PaymentMethodAttachParams = Stripe.PaymentMethodAttachParams;
  export type PaymentMethodCheckBalanceParams = Stripe.PaymentMethodCheckBalanceParams;
  export type PaymentMethodDetachParams = Stripe.PaymentMethodDetachParams;
  export type PaymentMethodSerializeBatchAttachParams = Stripe.PaymentMethodSerializeBatchAttachParams;
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
  export type PriceSerializeBatchCreateParams = Stripe.PriceSerializeBatchCreateParams;
  export type PriceSerializeBatchUpdateParams = Stripe.PriceSerializeBatchUpdateParams;
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
  export type ProductSerializeBatchCreateParams = Stripe.ProductSerializeBatchCreateParams;
  export type ProductSerializeBatchCreateFeatureParams = Stripe.ProductSerializeBatchCreateFeatureParams;
  export type ProductSerializeBatchDeleteParams = Stripe.ProductSerializeBatchDeleteParams;
  export type ProductSerializeBatchDeleteFeatureParams = Stripe.ProductSerializeBatchDeleteFeatureParams;
  export type ProductSerializeBatchUpdateParams = Stripe.ProductSerializeBatchUpdateParams;
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
  export type RefundSerializeBatchCancelParams = Stripe.RefundSerializeBatchCancelParams;
  export type RefundSerializeBatchCreateParams = Stripe.RefundSerializeBatchCreateParams;
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
  export type SubscriptionAttachCadenceParams = Stripe.SubscriptionAttachCadenceParams;
  export type SubscriptionCancelParams = Stripe.SubscriptionCancelParams;
  export type SubscriptionDeleteDiscountParams = Stripe.SubscriptionDeleteDiscountParams;
  export type SubscriptionMigrateParams = Stripe.SubscriptionMigrateParams;
  export type SubscriptionPauseParams = Stripe.SubscriptionPauseParams;
  export type SubscriptionResumeParams = Stripe.SubscriptionResumeParams;
  export type SubscriptionSearchParams = Stripe.SubscriptionSearchParams;
  export type SubscriptionSerializeBatchCancelParams = Stripe.SubscriptionSerializeBatchCancelParams;
  export type SubscriptionSerializeBatchCreateParams = Stripe.SubscriptionSerializeBatchCreateParams;
  export type SubscriptionSerializeBatchMigrateParams = Stripe.SubscriptionSerializeBatchMigrateParams;
  export type SubscriptionSerializeBatchPauseParams = Stripe.SubscriptionSerializeBatchPauseParams;
  export type SubscriptionSerializeBatchResumeParams = Stripe.SubscriptionSerializeBatchResumeParams;
  export type SubscriptionSerializeBatchUpdateParams = Stripe.SubscriptionSerializeBatchUpdateParams;
  export type SubscriptionResource = Stripe.SubscriptionResource;
  export type SubscriptionItem = Stripe.SubscriptionItem;
  export type DeletedSubscriptionItem = Stripe.DeletedSubscriptionItem;
  export type SubscriptionItemCreateParams = Stripe.SubscriptionItemCreateParams;
  export type SubscriptionItemRetrieveParams = Stripe.SubscriptionItemRetrieveParams;
  export type SubscriptionItemUpdateParams = Stripe.SubscriptionItemUpdateParams;
  export type SubscriptionItemListParams = Stripe.SubscriptionItemListParams;
  export type SubscriptionItemDeleteParams = Stripe.SubscriptionItemDeleteParams;
  export type SubscriptionItemSerializeBatchCreateParams = Stripe.SubscriptionItemSerializeBatchCreateParams;
  export type SubscriptionItemSerializeBatchDeleteParams = Stripe.SubscriptionItemSerializeBatchDeleteParams;
  export type SubscriptionItemSerializeBatchUpdateParams = Stripe.SubscriptionItemSerializeBatchUpdateParams;
  export type SubscriptionItemResource = Stripe.SubscriptionItemResource;
  export type SubscriptionSchedule = Stripe.SubscriptionSchedule;
  export type SubscriptionScheduleCreateParams = Stripe.SubscriptionScheduleCreateParams;
  export type SubscriptionScheduleRetrieveParams = Stripe.SubscriptionScheduleRetrieveParams;
  export type SubscriptionScheduleUpdateParams = Stripe.SubscriptionScheduleUpdateParams;
  export type SubscriptionScheduleListParams = Stripe.SubscriptionScheduleListParams;
  export type SubscriptionScheduleAmendParams = Stripe.SubscriptionScheduleAmendParams;
  export type SubscriptionScheduleCancelParams = Stripe.SubscriptionScheduleCancelParams;
  export type SubscriptionScheduleReleaseParams = Stripe.SubscriptionScheduleReleaseParams;
  export type SubscriptionScheduleSerializeBatchCancelParams = Stripe.SubscriptionScheduleSerializeBatchCancelParams;
  export type SubscriptionScheduleSerializeBatchCreateParams = Stripe.SubscriptionScheduleSerializeBatchCreateParams;
  export type SubscriptionScheduleSerializeBatchReleaseParams = Stripe.SubscriptionScheduleSerializeBatchReleaseParams;
  export type SubscriptionScheduleSerializeBatchUpdateParams = Stripe.SubscriptionScheduleSerializeBatchUpdateParams;
  export type SubscriptionScheduleResource = Stripe.SubscriptionScheduleResource;
  export type TaxCode = Stripe.TaxCode;
  export type TaxCodeRetrieveParams = Stripe.TaxCodeRetrieveParams;
  export type TaxCodeListParams = Stripe.TaxCodeListParams;
  export type TaxCodeResource = Stripe.TaxCodeResource;
  export type TaxFund = Stripe.TaxFund;
  export type TaxFundRetrieveParams = Stripe.TaxFundRetrieveParams;
  export type TaxFundListParams = Stripe.TaxFundListParams;
  export type TaxFundResource = Stripe.TaxFundResource;
  export type TaxId = Stripe.TaxId;
  export type DeletedTaxId = Stripe.DeletedTaxId;
  export type TaxIdCreateParams = Stripe.TaxIdCreateParams;
  export type TaxIdRetrieveParams = Stripe.TaxIdRetrieveParams;
  export type TaxIdListParams = Stripe.TaxIdListParams;
  export type TaxIdDeleteParams = Stripe.TaxIdDeleteParams;
  export type TaxIdSerializeBatchCreateParams = Stripe.TaxIdSerializeBatchCreateParams;
  export type TaxIdResource = Stripe.TaxIdResource;
  export type TaxRate = Stripe.TaxRate;
  export type TaxRateCreateParams = Stripe.TaxRateCreateParams;
  export type TaxRateRetrieveParams = Stripe.TaxRateRetrieveParams;
  export type TaxRateUpdateParams = Stripe.TaxRateUpdateParams;
  export type TaxRateListParams = Stripe.TaxRateListParams;
  export type TaxRateSerializeBatchCreateParams = Stripe.TaxRateSerializeBatchCreateParams;
  export type TaxRateSerializeBatchUpdateParams = Stripe.TaxRateSerializeBatchUpdateParams;
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
  export type PaymentMethodBalance = Stripe.PaymentMethodBalance;
  export type Profile = Stripe.Profile;
  export type QuoteLine = Stripe.QuoteLine;
  export type ReserveTransaction = Stripe.ReserveTransaction;
  export type RiskSignals = Stripe.RiskSignals;
  export type SourceMandateNotification = Stripe.SourceMandateNotification;
  export type SourceTransaction = Stripe.SourceTransaction;
  export type TaxDeductedAtSource = Stripe.TaxDeductedAtSource;
  export type TransitBalance = Stripe.TransitBalance;
  export type AccountSignals = Stripe.AccountSignals;
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
    export type AdditionalTosAcceptances = Stripe.AccountCreatePersonParams.AdditionalTosAcceptances;
    export type Dob = Stripe.AccountCreatePersonParams.Dob;
    export type Documents = Stripe.AccountCreatePersonParams.Documents;
    export type PoliticalExposure = Stripe.AccountCreatePersonParams.PoliticalExposure;
    export type Relationship = Stripe.AccountCreatePersonParams.Relationship;
    export type SelfReportedIncome = Stripe.AccountCreatePersonParams.SelfReportedIncome;
    export type SelfReportedMonthlyHousingPayment = Stripe.AccountCreatePersonParams.SelfReportedMonthlyHousingPayment;
    export type UsCfpbData = Stripe.AccountCreatePersonParams.UsCfpbData;
    export type Verification = Stripe.AccountCreatePersonParams.Verification;
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
    export type AdditionalTosAcceptances = Stripe.AccountUpdatePersonParams.AdditionalTosAcceptances;
    export type Dob = Stripe.AccountUpdatePersonParams.Dob;
    export type Documents = Stripe.AccountUpdatePersonParams.Documents;
    export type PoliticalExposure = Stripe.AccountUpdatePersonParams.PoliticalExposure;
    export type Relationship = Stripe.AccountUpdatePersonParams.Relationship;
    export type SelfReportedIncome = Stripe.AccountUpdatePersonParams.SelfReportedIncome;
    export type SelfReportedMonthlyHousingPayment = Stripe.AccountUpdatePersonParams.SelfReportedMonthlyHousingPayment;
    export type UsCfpbData = Stripe.AccountUpdatePersonParams.UsCfpbData;
    export type Verification = Stripe.AccountUpdatePersonParams.Verification;
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
  export namespace BalanceTransferCreateParams {
    export type Currency = Stripe.BalanceTransferCreateParams.Currency;
    export type DestinationBalance = Stripe.BalanceTransferCreateParams.DestinationBalance;
    export type SourceBalance = Stripe.BalanceTransferCreateParams.SourceBalance;
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
    export type ServicePeriod = Stripe.CouponCreateParams.ServicePeriod;
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
  export namespace GiftCardCreateParams {
    export type Brand = Stripe.GiftCardCreateParams.Brand;
  }
  export namespace GiftCardActivateParams {
    export type Balance = Stripe.GiftCardActivateParams.Balance;
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
  export namespace PaymentAttemptRecordReportAuthorizedParams {
    export type ProcessorDetails = Stripe.PaymentAttemptRecordReportAuthorizedParams.ProcessorDetails;
  }
  export namespace PaymentAttemptRecordReportFailedParams {
    export type FailureCode = Stripe.PaymentAttemptRecordReportFailedParams.FailureCode;
    export type ProcessorDetails = Stripe.PaymentAttemptRecordReportFailedParams.ProcessorDetails;
  }
  export namespace PaymentAttemptRecordReportGuaranteedParams {
    export type PaymentMethodDetails = Stripe.PaymentAttemptRecordReportGuaranteedParams.PaymentMethodDetails;
    export type ProcessorDetails = Stripe.PaymentAttemptRecordReportGuaranteedParams.ProcessorDetails;
  }
  export namespace PaymentAttemptRecordReportInformationalParams {
    export type CustomerDetails = Stripe.PaymentAttemptRecordReportInformationalParams.CustomerDetails;
    export type ShippingDetails = Stripe.PaymentAttemptRecordReportInformationalParams.ShippingDetails;
  }
  export namespace PaymentAttemptRecordReportRefundParams {
    export type Outcome = Stripe.PaymentAttemptRecordReportRefundParams.Outcome;
    export type ProcessorDetails = Stripe.PaymentAttemptRecordReportRefundParams.ProcessorDetails;
    export type Amount = Stripe.PaymentAttemptRecordReportRefundParams.Amount;
    export type Failed = Stripe.PaymentAttemptRecordReportRefundParams.Failed;
    export type Refunded = Stripe.PaymentAttemptRecordReportRefundParams.Refunded;
  }
  export namespace PaymentIntentCreateParams {
    export type AllocatedFunds = Stripe.PaymentIntentCreateParams.AllocatedFunds;
    export type AllowedPaymentMethodType = Stripe.PaymentIntentCreateParams.AllowedPaymentMethodType;
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
    export type PaymentsOrchestration = Stripe.PaymentIntentCreateParams.PaymentsOrchestration;
    export type RadarOptions = Stripe.PaymentIntentCreateParams.RadarOptions;
    export type SecretKeyConfirmation = Stripe.PaymentIntentCreateParams.SecretKeyConfirmation;
    export type SetupFutureUsage = Stripe.PaymentIntentCreateParams.SetupFutureUsage;
    export type Shipping = Stripe.PaymentIntentCreateParams.Shipping;
    export type TransferData = Stripe.PaymentIntentCreateParams.TransferData;
  }
  export namespace PaymentIntentUpdateParams {
    export type AllocatedFunds = Stripe.PaymentIntentUpdateParams.AllocatedFunds;
    export type AllowedPaymentMethodType = Stripe.PaymentIntentUpdateParams.AllowedPaymentMethodType;
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
    export type AllocatedFunds = Stripe.PaymentIntentConfirmParams.AllocatedFunds;
    export type AllowedPaymentMethodType = Stripe.PaymentIntentConfirmParams.AllowedPaymentMethodType;
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
  export namespace PaymentIntentUpdateCryptoRefundAddressParams {
    export type Network = Stripe.PaymentIntentUpdateCryptoRefundAddressParams.Network;
  }
  export namespace PaymentLinkCreateParams {
    export type LineItem = Stripe.PaymentLinkCreateParams.LineItem;
    export type AfterCompletion = Stripe.PaymentLinkCreateParams.AfterCompletion;
    export type AutomaticSurcharge = Stripe.PaymentLinkCreateParams.AutomaticSurcharge;
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
  export namespace PaymentLocationCreateParams {
    export type BusinessRegistration = Stripe.PaymentLocationCreateParams.BusinessRegistration;
  }
  export namespace PaymentLocationUpdateParams {
    export type BusinessRegistration = Stripe.PaymentLocationUpdateParams.BusinessRegistration;
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
    export type GiftCard = Stripe.PaymentMethodCreateParams.GiftCard;
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
    export type Tamara = Stripe.PaymentMethodCreateParams.Tamara;
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
    export type Custom = Stripe.PaymentMethodUpdateParams.Custom;
    export type Payto = Stripe.PaymentMethodUpdateParams.Payto;
    export type UsBankAccount = Stripe.PaymentMethodUpdateParams.UsBankAccount;
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
  export namespace PaymentRecordReportPaymentAttemptFailedParams {
    export type FailureCode = Stripe.PaymentRecordReportPaymentAttemptFailedParams.FailureCode;
    export type ProcessorDetails = Stripe.PaymentRecordReportPaymentAttemptFailedParams.ProcessorDetails;
  }
  export namespace PaymentRecordReportPaymentAttemptGuaranteedParams {
    export type PaymentMethodDetails = Stripe.PaymentRecordReportPaymentAttemptGuaranteedParams.PaymentMethodDetails;
    export type ProcessorDetails = Stripe.PaymentRecordReportPaymentAttemptGuaranteedParams.ProcessorDetails;
  }
  export namespace PaymentRecordReportPaymentAttemptInformationalParams {
    export type CustomerDetails = Stripe_.PaymentRecordReportPaymentAttemptInformationalParams.CustomerDetails;
    export type ShippingDetails = Stripe_.PaymentRecordReportPaymentAttemptInformationalParams.ShippingDetails;
  }
  export namespace PaymentRecordReportRefundParams {
    export type Outcome = Stripe.PaymentRecordReportRefundParams.Outcome;
    export type ProcessorDetails = Stripe.PaymentRecordReportRefundParams.ProcessorDetails;
    export type Amount = Stripe.PaymentRecordReportRefundParams.Amount;
    export type Failed = Stripe.PaymentRecordReportRefundParams.Failed;
    export type Refunded = Stripe.PaymentRecordReportRefundParams.Refunded;
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
    export type Identifiers = Stripe.ProductCreateParams.Identifiers;
    export type MarketingFeature = Stripe.ProductCreateParams.MarketingFeature;
    export type PackageDimensions = Stripe.ProductCreateParams.PackageDimensions;
    export type TaxDetails = Stripe.ProductCreateParams.TaxDetails;
    export type Type = Stripe.ProductCreateParams.Type;
  }
  export namespace ProductUpdateParams {
    export type Identifiers = Stripe.ProductUpdateParams.Identifiers;
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
    export type AutomaticPaymentMethods = Stripe.SetupIntentCreateParams.AutomaticPaymentMethods;
    export type ExcludedPaymentMethodType = Stripe.SetupIntentCreateParams.ExcludedPaymentMethodType;
    export type FlowDirection = Stripe.SetupIntentCreateParams.FlowDirection;
    export type MandateData = Stripe.SetupIntentCreateParams.MandateData;
    export type PaymentMethodData = Stripe.SetupIntentCreateParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe.SetupIntentCreateParams.PaymentMethodOptions;
    export type SetupDetails = Stripe.SetupIntentCreateParams.SetupDetails;
    export type SingleUse = Stripe.SetupIntentCreateParams.SingleUse;
    export type Usage = Stripe.SetupIntentCreateParams.Usage;
  }
  export namespace SetupIntentUpdateParams {
    export type ExcludedPaymentMethodType = Stripe.SetupIntentUpdateParams.ExcludedPaymentMethodType;
    export type FlowDirection = Stripe.SetupIntentUpdateParams.FlowDirection;
    export type PaymentMethodData = Stripe.SetupIntentUpdateParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe.SetupIntentUpdateParams.PaymentMethodOptions;
    export type SetupDetails = Stripe.SetupIntentUpdateParams.SetupDetails;
  }
  export namespace SetupIntentCancelParams {
    export type CancellationReason = Stripe_.SetupIntentCancelParams.CancellationReason;
  }
  export namespace SetupIntentConfirmParams {
    export type MandateData = Stripe.SetupIntentConfirmParams.MandateData;
    export type PaymentMethodData = Stripe.SetupIntentConfirmParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe.SetupIntentConfirmParams.PaymentMethodOptions;
    export type SetupDetails = Stripe.SetupIntentConfirmParams.SetupDetails;
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
    export type BillingSchedule = Stripe.SubscriptionScheduleCreateParams.BillingSchedule;
    export type DefaultSettings = Stripe.SubscriptionScheduleCreateParams.DefaultSettings;
    export type EndBehavior = Stripe.SubscriptionScheduleCreateParams.EndBehavior;
    export type Phase = Stripe.SubscriptionScheduleCreateParams.Phase;
    export type Prebilling = Stripe.SubscriptionScheduleCreateParams.Prebilling;
  }
  export namespace SubscriptionScheduleUpdateParams {
    export type BillingBehavior = Stripe.SubscriptionScheduleUpdateParams.BillingBehavior;
    export type BillingSchedule = Stripe.SubscriptionScheduleUpdateParams.BillingSchedule;
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
  export type DelegatedCheckout = Stripe.DelegatedCheckout;
  export type Entitlements = Stripe.Entitlements;
  export type FinancialConnections = Stripe.FinancialConnections;
  export type Forwarding = Stripe.Forwarding;
  export type Identity = Stripe.Identity;
  export type Issuing = Stripe.Issuing;
  export type Orchestration = Stripe.Orchestration;
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
    export type AlertRecovered = Stripe.Billing.AlertRecovered;
    export type AlertTriggered = Stripe.Billing.AlertTriggered;
    export type MeterEventSummary = Stripe.Billing.MeterEventSummary;
    export namespace AlertCreateParams {
      export type AlertType = Stripe.Billing.AlertCreateParams.AlertType;
      export type CreditBalanceThreshold = Stripe.Billing.AlertCreateParams.CreditBalanceThreshold;
      export type SpendThreshold = Stripe.Billing.AlertCreateParams.SpendThreshold;
      export type UsageThreshold = Stripe.Billing.AlertCreateParams.UsageThreshold;
    }
    export namespace AlertListParams {
      export type AlertType = Stripe.Billing.AlertListParams.AlertType;
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
    export namespace MeterListParams {
      export type Status = Stripe.Billing.MeterListParams.Status;
    }
    export namespace MeterListEventSummariesParams {
      export type TenantOperator = Stripe.Billing.MeterListEventSummariesParams.TenantOperator;
      export type ValueGroupingWindow = Stripe.Billing.MeterListEventSummariesParams.ValueGroupingWindow;
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
    export type Session = Stripe.Checkout.Session;
    export type SessionCreateParams = Stripe.Checkout.SessionCreateParams;
    export type SessionRetrieveParams = Stripe.Checkout.SessionRetrieveParams;
    export type SessionUpdateParams = Stripe.Checkout.SessionUpdateParams;
    export type SessionListParams = Stripe.Checkout.SessionListParams;
    export type SessionApproveParams = Stripe.Checkout.SessionApproveParams;
    export type SessionExpireParams = Stripe.Checkout.SessionExpireParams;
    export type SessionListLineItemsParams = Stripe.Checkout.SessionListLineItemsParams;
    export type SessionResource = Stripe.Checkout.SessionResource;
    export namespace SessionCreateParams {
      export type AdaptivePricing = Stripe.Checkout.SessionCreateParams.AdaptivePricing;
      export type AfterExpiration = Stripe.Checkout.SessionCreateParams.AfterExpiration;
      export type ApprovalMethod = Stripe.Checkout.SessionCreateParams.ApprovalMethod;
      export type AutomaticSurcharge = Stripe.Checkout.SessionCreateParams.AutomaticSurcharge;
      export type AutomaticTax = Stripe.Checkout.SessionCreateParams.AutomaticTax;
      export type BillingAddressCollection = Stripe.Checkout.SessionCreateParams.BillingAddressCollection;
      export type BrandingSettings = Stripe.Checkout.SessionCreateParams.BrandingSettings;
      export type CheckoutItem = Stripe.Checkout.SessionCreateParams.CheckoutItem;
      export type ConsentCollection = Stripe.Checkout.SessionCreateParams.ConsentCollection;
      export type CustomField = Stripe.Checkout.SessionCreateParams.CustomField;
      export type CustomText = Stripe.Checkout.SessionCreateParams.CustomText;
      export type CustomerCreation = Stripe.Checkout.SessionCreateParams.CustomerCreation;
      export type CustomerUpdate = Stripe.Checkout.SessionCreateParams.CustomerUpdate;
      export type Discount = Stripe.Checkout.SessionCreateParams.Discount;
      export type ExcludedPaymentMethodType = Stripe.Checkout.SessionCreateParams.ExcludedPaymentMethodType;
      export type InvoiceCreation = Stripe.Checkout.SessionCreateParams.InvoiceCreation;
      export type Item = Stripe.Checkout.SessionCreateParams.Item;
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
    export namespace SessionApproveParams {
      export type PaymentIntentData = Stripe.Checkout.SessionApproveParams.PaymentIntentData;
      export type SubscriptionData = Stripe.Checkout.SessionApproveParams.SubscriptionData;
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
  export namespace DelegatedCheckout {
    export type Order = Stripe.DelegatedCheckout.Order;
    export type OrderRetrieveParams = Stripe.DelegatedCheckout.OrderRetrieveParams;
    export type OrderResource = Stripe.DelegatedCheckout.OrderResource;
    export type RequestedSession = Stripe.DelegatedCheckout.RequestedSession;
    export type RequestedSessionCreateParams = Stripe.DelegatedCheckout.RequestedSessionCreateParams;
    export type RequestedSessionRetrieveParams = Stripe.DelegatedCheckout.RequestedSessionRetrieveParams;
    export type RequestedSessionUpdateParams = Stripe.DelegatedCheckout.RequestedSessionUpdateParams;
    export type RequestedSessionConfirmParams = Stripe.DelegatedCheckout.RequestedSessionConfirmParams;
    export type RequestedSessionExpireParams = Stripe.DelegatedCheckout.RequestedSessionExpireParams;
    export type RequestedSessionListOrdersParams = Stripe.DelegatedCheckout.RequestedSessionListOrdersParams;
    export type RequestedSessionResource = Stripe.DelegatedCheckout.RequestedSessionResource;
    export type OrderEvent = Stripe.DelegatedCheckout.OrderEvent;
    export namespace RequestedSessionCreateParams {
      export type LineItemDetail = Stripe.DelegatedCheckout.RequestedSessionCreateParams.LineItemDetail;
      export type SellerDetails = Stripe.DelegatedCheckout.RequestedSessionCreateParams.SellerDetails;
      export type AffiliateAttribution = Stripe.DelegatedCheckout.RequestedSessionCreateParams.AffiliateAttribution;
      export type Discounts = Stripe.DelegatedCheckout.RequestedSessionCreateParams.Discounts;
      export type FulfillmentDetails = Stripe.DelegatedCheckout.RequestedSessionCreateParams.FulfillmentDetails;
      export type PaymentMethodOptions = Stripe.DelegatedCheckout.RequestedSessionCreateParams.PaymentMethodOptions;
    }
    export namespace RequestedSessionUpdateParams {
      export type Discounts = Stripe.DelegatedCheckout.RequestedSessionUpdateParams.Discounts;
      export type FulfillmentDetails = Stripe.DelegatedCheckout.RequestedSessionUpdateParams.FulfillmentDetails;
      export type LineItemDetail = Stripe.DelegatedCheckout.RequestedSessionUpdateParams.LineItemDetail;
      export type PaymentMethodOptions = Stripe.DelegatedCheckout.RequestedSessionUpdateParams.PaymentMethodOptions;
    }
    export namespace RequestedSessionConfirmParams {
      export type AffiliateAttribution = Stripe.DelegatedCheckout.RequestedSessionConfirmParams.AffiliateAttribution;
      export type BuyerConsents = Stripe.DelegatedCheckout.RequestedSessionConfirmParams.BuyerConsents;
      export type RiskDetails = Stripe.DelegatedCheckout.RequestedSessionConfirmParams.RiskDetails;
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
    export type BlocklistEntry = Stripe.Identity.BlocklistEntry;
    export type BlocklistEntryCreateParams = Stripe.Identity.BlocklistEntryCreateParams;
    export type BlocklistEntryRetrieveParams = Stripe.Identity.BlocklistEntryRetrieveParams;
    export type BlocklistEntryListParams = Stripe.Identity.BlocklistEntryListParams;
    export type BlocklistEntryDisableParams = Stripe.Identity.BlocklistEntryDisableParams;
    export type BlocklistEntryResource = Stripe.Identity.BlocklistEntryResource;
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
    export namespace BlocklistEntryCreateParams {
      export type EntryType = Stripe.Identity.BlocklistEntryCreateParams.EntryType;
    }
    export namespace BlocklistEntryListParams {
      export type Status = Stripe.Identity.BlocklistEntryListParams.Status;
      export type Type = Stripe.Identity.BlocklistEntryListParams.Type;
    }
    export namespace VerificationReportListParams {
      export type Type = Stripe.Identity.VerificationReportListParams.Type;
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
    export type Program = Stripe.Issuing.Program;
    export type ProgramCreateParams = Stripe.Issuing.ProgramCreateParams;
    export type ProgramRetrieveParams = Stripe.Issuing.ProgramRetrieveParams;
    export type ProgramUpdateParams = Stripe.Issuing.ProgramUpdateParams;
    export type ProgramListParams = Stripe.Issuing.ProgramListParams;
    export type ProgramResource = Stripe.Issuing.ProgramResource;
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
      export type Wallets = Stripe.Issuing.CardListParams.Wallets;
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
    export namespace DisputeUpdateParams {
      export type Evidence = Stripe.Issuing.DisputeUpdateParams.Evidence;
      export type ProvisionalCredit = Stripe.Issuing.DisputeUpdateParams.ProvisionalCredit;
    }
    export namespace DisputeListParams {
      export type Status = Stripe.Issuing.DisputeListParams.Status;
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
  export namespace Orchestration {
    export type PaymentAttempt = Stripe.Orchestration.PaymentAttempt;
    export type PaymentAttemptRetrieveParams = Stripe.Orchestration.PaymentAttemptRetrieveParams;
    export type PaymentAttemptResource = Stripe.Orchestration.PaymentAttemptResource;
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
    export type AccountEvaluation = Stripe.Radar.AccountEvaluation;
    export type AccountEvaluationCreateParams = Stripe.Radar.AccountEvaluationCreateParams;
    export type AccountEvaluationRetrieveParams = Stripe.Radar.AccountEvaluationRetrieveParams;
    export type AccountEvaluationUpdateParams = Stripe.Radar.AccountEvaluationUpdateParams;
    export type AccountEvaluationResource = Stripe.Radar.AccountEvaluationResource;
    export type CustomerEvaluation = Stripe.Radar.CustomerEvaluation;
    export type CustomerEvaluationCreateParams = Stripe.Radar.CustomerEvaluationCreateParams;
    export type CustomerEvaluationRetrieveParams = Stripe.Radar.CustomerEvaluationRetrieveParams;
    export type CustomerEvaluationUpdateParams = Stripe.Radar.CustomerEvaluationUpdateParams;
    export type CustomerEvaluationResource = Stripe.Radar.CustomerEvaluationResource;
    export type EarlyFraudWarning = Stripe.Radar.EarlyFraudWarning;
    export type EarlyFraudWarningRetrieveParams = Stripe.Radar.EarlyFraudWarningRetrieveParams;
    export type EarlyFraudWarningListParams = Stripe.Radar.EarlyFraudWarningListParams;
    export type EarlyFraudWarningResource = Stripe.Radar.EarlyFraudWarningResource;
    export type IssuingAuthorizationEvaluation = Stripe.Radar.IssuingAuthorizationEvaluation;
    export type IssuingAuthorizationEvaluationCreateParams = Stripe.Radar.IssuingAuthorizationEvaluationCreateParams;
    export type IssuingAuthorizationEvaluationResource = Stripe.Radar.IssuingAuthorizationEvaluationResource;
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
    export type ValueListItemSerializeBatchCreateParams = Stripe.Radar.ValueListItemSerializeBatchCreateParams;
    export type ValueListItemResource = Stripe.Radar.ValueListItemResource;
    export namespace AccountEvaluationCreateParams {
      export type Type = Stripe.Radar.AccountEvaluationCreateParams.Type;
      export type LoginInitiated = Stripe.Radar.AccountEvaluationCreateParams.LoginInitiated;
      export type RegistrationInitiated = Stripe.Radar.AccountEvaluationCreateParams.RegistrationInitiated;
    }
    export namespace AccountEvaluationUpdateParams {
      export type Type = Stripe.Radar.AccountEvaluationUpdateParams.Type;
      export type LoginFailed = Stripe.Radar.AccountEvaluationUpdateParams.LoginFailed;
      export type LoginSucceeded = Stripe.Radar.AccountEvaluationUpdateParams.LoginSucceeded;
      export type RegistrationFailed = Stripe.Radar.AccountEvaluationUpdateParams.RegistrationFailed;
      export type RegistrationSucceeded = Stripe.Radar.AccountEvaluationUpdateParams.RegistrationSucceeded;
    }
    export namespace CustomerEvaluationCreateParams {
      export type EvaluationContext = Stripe.Radar.CustomerEvaluationCreateParams.EvaluationContext;
      export type EventType = Stripe.Radar.CustomerEvaluationCreateParams.EventType;
    }
    export namespace CustomerEvaluationUpdateParams {
      export type Status = Stripe.Radar.CustomerEvaluationUpdateParams.Status;
    }
    export namespace IssuingAuthorizationEvaluationCreateParams {
      export type AuthorizationDetails = Stripe.Radar.IssuingAuthorizationEvaluationCreateParams.AuthorizationDetails;
      export type CardDetails = Stripe.Radar.IssuingAuthorizationEvaluationCreateParams.CardDetails;
      export type MerchantDetails = Stripe.Radar.IssuingAuthorizationEvaluationCreateParams.MerchantDetails;
      export type CardholderDetails = Stripe.Radar.IssuingAuthorizationEvaluationCreateParams.CardholderDetails;
      export type NetworkDetails = Stripe.Radar.IssuingAuthorizationEvaluationCreateParams.NetworkDetails;
      export type TokenDetails = Stripe.Radar.IssuingAuthorizationEvaluationCreateParams.TokenDetails;
      export type VerificationDetails = Stripe.Radar.IssuingAuthorizationEvaluationCreateParams.VerificationDetails;
    }
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
    export type RegistrationSerializeBatchCreateParams = Stripe.Tax.RegistrationSerializeBatchCreateParams;
    export type RegistrationSerializeBatchUpdateParams = Stripe.Tax.RegistrationSerializeBatchUpdateParams;
    export type RegistrationResource = Stripe.Tax.RegistrationResource;
    export type Settings = Stripe.Tax.Settings;
    export type SettingsRetrieveParams = Stripe.Tax.SettingsRetrieveParams;
    export type SettingsUpdateParams = Stripe.Tax.SettingsUpdateParams;
    export type SettingsSerializeBatchUpdateParams = Stripe.Tax.SettingsSerializeBatchUpdateParams;
    export type SettingResource = Stripe.Tax.SettingResource;
    export type Transaction = Stripe.Tax.Transaction;
    export type TransactionRetrieveParams = Stripe.Tax.TransactionRetrieveParams;
    export type TransactionCreateFromCalculationParams = Stripe.Tax.TransactionCreateFromCalculationParams;
    export type TransactionCreateReversalParams = Stripe.Tax.TransactionCreateReversalParams;
    export type TransactionListLineItemsParams = Stripe.Tax.TransactionListLineItemsParams;
    export type TransactionSerializeBatchCreateReversalParams = Stripe.Tax.TransactionSerializeBatchCreateReversalParams;
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
      export type Contract = Stripe.V2.Billing.Contract;
      export type ContractCreateParams = Stripe.V2.Billing.ContractCreateParams;
      export type ContractRetrieveParams = Stripe.V2.Billing.ContractRetrieveParams;
      export type ContractUpdateParams = Stripe.V2.Billing.ContractUpdateParams;
      export type ContractListParams = Stripe.V2.Billing.ContractListParams;
      export type ContractActivateParams = Stripe.V2.Billing.ContractActivateParams;
      export type ContractCancelParams = Stripe.V2.Billing.ContractCancelParams;
      export type ContractResource = Stripe.V2.Billing.ContractResource;
      export type CustomPricingUnit = Stripe.V2.Billing.CustomPricingUnit;
      export type CustomPricingUnitCreateParams = Stripe.V2.Billing.CustomPricingUnitCreateParams;
      export type CustomPricingUnitRetrieveParams = Stripe.V2.Billing.CustomPricingUnitRetrieveParams;
      export type CustomPricingUnitUpdateParams = Stripe.V2.Billing.CustomPricingUnitUpdateParams;
      export type CustomPricingUnitListParams = Stripe.V2.Billing.CustomPricingUnitListParams;
      export type CustomPricingUnitResource = Stripe.V2.Billing.CustomPricingUnitResource;
      export type Intent = Stripe.V2.Billing.Intent;
      export type IntentCreateParams = Stripe.V2.Billing.IntentCreateParams;
      export type IntentRetrieveParams = Stripe.V2.Billing.IntentRetrieveParams;
      export type IntentListParams = Stripe.V2.Billing.IntentListParams;
      export type IntentCancelParams = Stripe.V2.Billing.IntentCancelParams;
      export type IntentCommitParams = Stripe.V2.Billing.IntentCommitParams;
      export type IntentReleaseReservationParams = Stripe.V2.Billing.IntentReleaseReservationParams;
      export type IntentReserveParams = Stripe.V2.Billing.IntentReserveParams;
      export type IntentResource = Stripe.V2.Billing.IntentResource;
      export type LicenseFee = Stripe.V2.Billing.LicenseFee;
      export type LicenseFeeCreateParams = Stripe.V2.Billing.LicenseFeeCreateParams;
      export type LicenseFeeRetrieveParams = Stripe.V2.Billing.LicenseFeeRetrieveParams;
      export type LicenseFeeUpdateParams = Stripe.V2.Billing.LicenseFeeUpdateParams;
      export type LicenseFeeListParams = Stripe.V2.Billing.LicenseFeeListParams;
      export type LicenseFeeResource = Stripe.V2.Billing.LicenseFeeResource;
      export type LicensedItem = Stripe.V2.Billing.LicensedItem;
      export type LicensedItemCreateParams = Stripe.V2.Billing.LicensedItemCreateParams;
      export type LicensedItemRetrieveParams = Stripe.V2.Billing.LicensedItemRetrieveParams;
      export type LicensedItemUpdateParams = Stripe.V2.Billing.LicensedItemUpdateParams;
      export type LicensedItemListParams = Stripe.V2.Billing.LicensedItemListParams;
      export type LicensedItemResource = Stripe.V2.Billing.LicensedItemResource;
      export type MeterEvent = Stripe.V2.Billing.MeterEvent;
      export type MeterEventCreateParams = Stripe.V2.Billing.MeterEventCreateParams;
      export type MeterEventResource = Stripe.V2.Billing.MeterEventResource;
      export type MeterEventAdjustment = Stripe.V2.Billing.MeterEventAdjustment;
      export type MeterEventAdjustmentCreateParams = Stripe.V2.Billing.MeterEventAdjustmentCreateParams;
      export type MeterEventAdjustmentResource = Stripe.V2.Billing.MeterEventAdjustmentResource;
      export type MeterEventSession = Stripe.V2.Billing.MeterEventSession;
      export type MeterEventSessionCreateParams = Stripe.V2.Billing.MeterEventSessionCreateParams;
      export type MeterEventSessionResource = Stripe.V2.Billing.MeterEventSessionResource;
      export type MeteredItem = Stripe.V2.Billing.MeteredItem;
      export type MeteredItemCreateParams = Stripe.V2.Billing.MeteredItemCreateParams;
      export type MeteredItemRetrieveParams = Stripe.V2.Billing.MeteredItemRetrieveParams;
      export type MeteredItemUpdateParams = Stripe.V2.Billing.MeteredItemUpdateParams;
      export type MeteredItemListParams = Stripe.V2.Billing.MeteredItemListParams;
      export type MeteredItemResource = Stripe.V2.Billing.MeteredItemResource;
      export type OneTimeItem = Stripe.V2.Billing.OneTimeItem;
      export type OneTimeItemCreateParams = Stripe.V2.Billing.OneTimeItemCreateParams;
      export type OneTimeItemRetrieveParams = Stripe.V2.Billing.OneTimeItemRetrieveParams;
      export type OneTimeItemUpdateParams = Stripe.V2.Billing.OneTimeItemUpdateParams;
      export type OneTimeItemListParams = Stripe.V2.Billing.OneTimeItemListParams;
      export type OneTimeItemResource = Stripe.V2.Billing.OneTimeItemResource;
      export type PricingPlan = Stripe.V2.Billing.PricingPlan;
      export type PricingPlanCreateParams = Stripe.V2.Billing.PricingPlanCreateParams;
      export type PricingPlanRetrieveParams = Stripe.V2.Billing.PricingPlanRetrieveParams;
      export type PricingPlanUpdateParams = Stripe.V2.Billing.PricingPlanUpdateParams;
      export type PricingPlanListParams = Stripe.V2.Billing.PricingPlanListParams;
      export type PricingPlanResource = Stripe.V2.Billing.PricingPlanResource;
      export type PricingPlanSubscription = Stripe.V2.Billing.PricingPlanSubscription;
      export type PricingPlanSubscriptionRetrieveParams = Stripe.V2.Billing.PricingPlanSubscriptionRetrieveParams;
      export type PricingPlanSubscriptionUpdateParams = Stripe.V2.Billing.PricingPlanSubscriptionUpdateParams;
      export type PricingPlanSubscriptionListParams = Stripe.V2.Billing.PricingPlanSubscriptionListParams;
      export type PricingPlanSubscriptionRemoveDiscountsParams = Stripe.V2.Billing.PricingPlanSubscriptionRemoveDiscountsParams;
      export type PricingPlanSubscriptionResource = Stripe.V2.Billing.PricingPlanSubscriptionResource;
      export type Profile = Stripe.V2.Billing.Profile;
      export type ProfileCreateParams = Stripe.V2.Billing.ProfileCreateParams;
      export type ProfileRetrieveParams = Stripe.V2.Billing.ProfileRetrieveParams;
      export type ProfileUpdateParams = Stripe.V2.Billing.ProfileUpdateParams;
      export type ProfileListParams = Stripe.V2.Billing.ProfileListParams;
      export type ProfileResource = Stripe.V2.Billing.ProfileResource;
      export type RateCard = Stripe.V2.Billing.RateCard;
      export type RateCardCreateParams = Stripe.V2.Billing.RateCardCreateParams;
      export type RateCardRetrieveParams = Stripe.V2.Billing.RateCardRetrieveParams;
      export type RateCardUpdateParams = Stripe.V2.Billing.RateCardUpdateParams;
      export type RateCardListParams = Stripe.V2.Billing.RateCardListParams;
      export type RateCardModifyRatesParams = Stripe.V2.Billing.RateCardModifyRatesParams;
      export type RateCardResource = Stripe.V2.Billing.RateCardResource;
      export type RateCardSubscription = Stripe.V2.Billing.RateCardSubscription;
      export type RateCardSubscriptionCreateParams = Stripe.V2.Billing.RateCardSubscriptionCreateParams;
      export type RateCardSubscriptionRetrieveParams = Stripe.V2.Billing.RateCardSubscriptionRetrieveParams;
      export type RateCardSubscriptionUpdateParams = Stripe.V2.Billing.RateCardSubscriptionUpdateParams;
      export type RateCardSubscriptionListParams = Stripe.V2.Billing.RateCardSubscriptionListParams;
      export type RateCardSubscriptionCancelParams = Stripe.V2.Billing.RateCardSubscriptionCancelParams;
      export type RateCardSubscriptionResource = Stripe.V2.Billing.RateCardSubscriptionResource;
      export type ServiceAction = Stripe.V2.Billing.ServiceAction;
      export type ServiceActionCreateParams = Stripe.V2.Billing.ServiceActionCreateParams;
      export type ServiceActionRetrieveParams = Stripe.V2.Billing.ServiceActionRetrieveParams;
      export type ServiceActionUpdateParams = Stripe.V2.Billing.ServiceActionUpdateParams;
      export type ServiceActionResource = Stripe.V2.Billing.ServiceActionResource;
      export type ContractLicensePricingQuantityChange = Stripe.V2.Billing.ContractLicensePricingQuantityChange;
      export type BillSettingVersion = Stripe.V2.Billing.BillSettingVersion;
      export type CadenceSpendModifier = Stripe.V2.Billing.CadenceSpendModifier;
      export type CollectionSettingVersion = Stripe.V2.Billing.CollectionSettingVersion;
      export type IntentAction = Stripe.V2.Billing.IntentAction;
      export type LicenseFeeVersion = Stripe.V2.Billing.LicenseFeeVersion;
      export type PricingPlanComponent = Stripe.V2.Billing.PricingPlanComponent;
      export type PricingPlanVersion = Stripe.V2.Billing.PricingPlanVersion;
      export type RateCardCustomPricingUnitOverageRate = Stripe.V2.Billing.RateCardCustomPricingUnitOverageRate;
      export type RateCardRate = Stripe.V2.Billing.RateCardRate;
      export type RateCardVersion = Stripe.V2.Billing.RateCardVersion;
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
        export type Include = Stripe.V2.Billing.CadenceCreateParams.Include;
        export type Settings = Stripe.V2.Billing.CadenceCreateParams.Settings;
      }
      export namespace CadenceRetrieveParams {
        export type Include = Stripe.V2.Billing.CadenceRetrieveParams.Include;
      }
      export namespace CadenceUpdateParams {
        export type Include = Stripe.V2.Billing.CadenceUpdateParams.Include;
        export type Payer = Stripe.V2.Billing.CadenceUpdateParams.Payer;
        export type Settings = Stripe.V2.Billing.CadenceUpdateParams.Settings;
      }
      export namespace CadenceListParams {
        export type Include = Stripe.V2.Billing.CadenceListParams.Include;
        export type Payer = Stripe.V2.Billing.CadenceListParams.Payer;
      }
      export namespace CadenceCancelParams {
        export type Include = Stripe.V2.Billing.CadenceCancelParams.Include;
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
      export namespace ContractCreateParams {
        export type ContractLine = Stripe.V2.Billing.ContractCreateParams.ContractLine;
        export type LicenseQuantityAction = Stripe.V2.Billing.ContractCreateParams.LicenseQuantityAction;
        export type PricingLine = Stripe.V2.Billing.ContractCreateParams.PricingLine;
        export type PricingOverride = Stripe.V2.Billing.ContractCreateParams.PricingOverride;
        export type BillingSettings = Stripe.V2.Billing.ContractCreateParams.BillingSettings;
        export type Include = Stripe.V2.Billing.ContractCreateParams.Include;
        export type OneTimeFee = Stripe.V2.Billing.ContractCreateParams.OneTimeFee;
      }
      export namespace ContractRetrieveParams {
        export type Include = Stripe.V2.Billing.ContractRetrieveParams.Include;
      }
      export namespace ContractUpdateParams {
        export type Include = Stripe.V2.Billing.ContractUpdateParams.Include;
        export type LicenseQuantityAction = Stripe.V2.Billing.ContractUpdateParams.LicenseQuantityAction;
        export type PricingLineAction = Stripe.V2.Billing.ContractUpdateParams.PricingLineAction;
        export type PricingOverrideAction = Stripe.V2.Billing.ContractUpdateParams.PricingOverrideAction;
      }
      export namespace ContractActivateParams {
        export type Include = Stripe.V2.Billing.ContractActivateParams.Include;
      }
      export namespace ContractCancelParams {
        export type Include = Stripe.V2.Billing.ContractCancelParams.Include;
      }
      export namespace IntentCreateParams {
        export type Action = Stripe.V2.Billing.IntentCreateParams.Action;
        export type CadenceData = Stripe.V2.Billing.IntentCreateParams.CadenceData;
      }
      export namespace LicenseFeeCreateParams {
        export type ServiceInterval = Stripe.V2.Billing.LicenseFeeCreateParams.ServiceInterval;
        export type TaxBehavior = Stripe.V2.Billing.LicenseFeeCreateParams.TaxBehavior;
        export type TieringMode = Stripe.V2.Billing.LicenseFeeCreateParams.TieringMode;
        export type Tier = Stripe.V2.Billing.LicenseFeeCreateParams.Tier;
        export type TransformQuantity = Stripe.V2.Billing.LicenseFeeCreateParams.TransformQuantity;
      }
      export namespace LicenseFeeUpdateParams {
        export type TieringMode = Stripe.V2.Billing.LicenseFeeUpdateParams.TieringMode;
        export type Tier = Stripe.V2.Billing.LicenseFeeUpdateParams.Tier;
        export type TransformQuantity = Stripe.V2.Billing.LicenseFeeUpdateParams.TransformQuantity;
      }
      export namespace LicensedItemCreateParams {
        export type TaxDetails = Stripe.V2.Billing.LicensedItemCreateParams.TaxDetails;
      }
      export namespace LicensedItemUpdateParams {
        export type TaxDetails = Stripe.V2.Billing.LicensedItemUpdateParams.TaxDetails;
      }
      export namespace MeterEventAdjustmentCreateParams {
        export type Cancel = Stripe_.V2.Billing.MeterEventAdjustmentCreateParams.Cancel;
      }
      export namespace MeterEventAdjustment {
        export type Cancel = Stripe_.V2.Billing.MeterEventAdjustment.Cancel;
        export type Status = Stripe_.V2.Billing.MeterEventAdjustment.Status;
      }
      export namespace MeteredItemCreateParams {
        export type MeterSegmentCondition = Stripe.V2.Billing.MeteredItemCreateParams.MeterSegmentCondition;
        export type TaxDetails = Stripe.V2.Billing.MeteredItemCreateParams.TaxDetails;
      }
      export namespace MeteredItemUpdateParams {
        export type TaxDetails = Stripe.V2.Billing.MeteredItemUpdateParams.TaxDetails;
      }
      export namespace OneTimeItemCreateParams {
        export type TaxDetails = Stripe.V2.Billing.OneTimeItemCreateParams.TaxDetails;
      }
      export namespace OneTimeItemUpdateParams {
        export type TaxDetails = Stripe.V2.Billing.OneTimeItemUpdateParams.TaxDetails;
      }
      export namespace PricingPlanCreateParams {
        export type TaxBehavior = Stripe.V2.Billing.PricingPlanCreateParams.TaxBehavior;
      }
      export namespace PricingPlanSubscriptionRetrieveParams {
        export type Include = Stripe.V2.Billing.PricingPlanSubscriptionRetrieveParams.Include;
      }
      export namespace PricingPlanSubscriptionListParams {
        export type Include = Stripe.V2.Billing.PricingPlanSubscriptionListParams.Include;
        export type Payer = Stripe.V2.Billing.PricingPlanSubscriptionListParams.Payer;
        export type ServicingStatus = Stripe.V2.Billing.PricingPlanSubscriptionListParams.ServicingStatus;
      }
      export namespace PricingPlanSubscriptionRemoveDiscountsParams {
        export type Include = Stripe.V2.Billing.PricingPlanSubscriptionRemoveDiscountsParams.Include;
      }
      export namespace ProfileListParams {
        export type Status = Stripe.V2.Billing.ProfileListParams.Status;
      }
      export namespace RateCardCreateParams {
        export type ServiceInterval = Stripe.V2.Billing.RateCardCreateParams.ServiceInterval;
        export type TaxBehavior = Stripe.V2.Billing.RateCardCreateParams.TaxBehavior;
      }
      export namespace RateCardModifyRatesParams {
        export type RatesToCreate = Stripe.V2.Billing.RateCardModifyRatesParams.RatesToCreate;
        export type RatesToDelete = Stripe.V2.Billing.RateCardModifyRatesParams.RatesToDelete;
      }
      export namespace RateCardSubscriptionListParams {
        export type Payer = Stripe.V2.Billing.RateCardSubscriptionListParams.Payer;
        export type ServicingStatus = Stripe.V2.Billing.RateCardSubscriptionListParams.ServicingStatus;
      }
      export namespace ServiceActionCreateParams {
        export type ServiceInterval = Stripe.V2.Billing.ServiceActionCreateParams.ServiceInterval;
        export type Type = Stripe.V2.Billing.ServiceActionCreateParams.Type;
        export type CreditGrant = Stripe.V2.Billing.ServiceActionCreateParams.CreditGrant;
        export type CreditGrantPerTenant = Stripe.V2.Billing.ServiceActionCreateParams.CreditGrantPerTenant;
      }
      export namespace ServiceActionUpdateParams {
        export type CreditGrant = Stripe.V2.Billing.ServiceActionUpdateParams.CreditGrant;
        export type CreditGrantPerTenant = Stripe.V2.Billing.ServiceActionUpdateParams.CreditGrantPerTenant;
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
      export type AccountEvaluation = Stripe.V2.Core.AccountEvaluation;
      export type AccountEvaluationCreateParams = Stripe.V2.Core.AccountEvaluationCreateParams;
      export type AccountEvaluationResource = Stripe.V2.Core.AccountEvaluationResource;
      export type AccountLink = Stripe.V2.Core.AccountLink;
      export type AccountLinkCreateParams = Stripe.V2.Core.AccountLinkCreateParams;
      export type AccountLinkResource = Stripe.V2.Core.AccountLinkResource;
      export type AccountToken = Stripe.V2.Core.AccountToken;
      export type AccountTokenCreateParams = Stripe.V2.Core.AccountTokenCreateParams;
      export type AccountTokenRetrieveParams = Stripe.V2.Core.AccountTokenRetrieveParams;
      export type AccountTokenResource = Stripe.V2.Core.AccountTokenResource;
      export type ApprovalRequest = Stripe.V2.Core.ApprovalRequest;
      export type ApprovalRequestRetrieveParams = Stripe.V2.Core.ApprovalRequestRetrieveParams;
      export type ApprovalRequestListParams = Stripe.V2.Core.ApprovalRequestListParams;
      export type ApprovalRequestCancelParams = Stripe.V2.Core.ApprovalRequestCancelParams;
      export type ApprovalRequestExecuteParams = Stripe.V2.Core.ApprovalRequestExecuteParams;
      export type ApprovalRequestSubmitParams = Stripe.V2.Core.ApprovalRequestSubmitParams;
      export type ApprovalRequestResource = Stripe.V2.Core.ApprovalRequestResource;
      export type BatchJob = Stripe.V2.Core.BatchJob;
      export type BatchJobCreateParams = Stripe.V2.Core.BatchJobCreateParams;
      export type BatchJobRetrieveParams = Stripe.V2.Core.BatchJobRetrieveParams;
      export type BatchJobCancelParams = Stripe.V2.Core.BatchJobCancelParams;
      export type BatchJobResource = Stripe.V2.Core.BatchJobResource;
      export type ClaimableSandbox = Stripe.V2.Core.ClaimableSandbox;
      export type ClaimableSandboxCreateParams = Stripe.V2.Core.ClaimableSandboxCreateParams;
      export type ClaimableSandboxRetrieveParams = Stripe.V2.Core.ClaimableSandboxRetrieveParams;
      export type ClaimableSandboxRenewOnboardingLinkParams = Stripe.V2.Core.ClaimableSandboxRenewOnboardingLinkParams;
      export type ClaimableSandboxResource = Stripe.V2.Core.ClaimableSandboxResource;
      export type ConnectionSession = Stripe.V2.Core.ConnectionSession;
      export type ConnectionSessionCreateParams = Stripe.V2.Core.ConnectionSessionCreateParams;
      export type ConnectionSessionRetrieveParams = Stripe.V2.Core.ConnectionSessionRetrieveParams;
      export type ConnectionSessionResource = Stripe.V2.Core.ConnectionSessionResource;
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
      export type FeeBatch = Stripe.V2.Core.FeeBatch;
      export type FeeBatchRetrieveParams = Stripe.V2.Core.FeeBatchRetrieveParams;
      export type FeeBatchListParams = Stripe.V2.Core.FeeBatchListParams;
      export type FeeBatchResource = Stripe.V2.Core.FeeBatchResource;
      export type FeeEntry = Stripe.V2.Core.FeeEntry;
      export type FeeEntryRetrieveParams = Stripe.V2.Core.FeeEntryRetrieveParams;
      export type FeeEntryListParams = Stripe.V2.Core.FeeEntryListParams;
      export type FeeEntryResource = Stripe.V2.Core.FeeEntryResource;
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
      export namespace AccountEvaluationCreateParams {
        export type AccountData = Stripe.V2.Core.AccountEvaluationCreateParams.AccountData;
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
      export namespace ClaimableSandboxCreateParams {
        export type OnboardingLinkDetails = Stripe.V2.Core.ClaimableSandboxCreateParams.OnboardingLinkDetails;
        export type Prefill = Stripe.V2.Core.ClaimableSandboxCreateParams.Prefill;
        export type AppChannel = Stripe.V2.Core.ClaimableSandboxCreateParams.AppChannel;
      }
      export namespace ClaimableSandboxRenewOnboardingLinkParams {
        export type OnboardingLinkDetails = Stripe.V2.Core.ClaimableSandboxRenewOnboardingLinkParams.OnboardingLinkDetails;
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
      export namespace Analytics {
        export type MetricQueryResult = Stripe.V2.Data.Analytics.MetricQueryResult;
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
      export type ApiKey = Stripe.V2.Iam.ApiKey;
      export type ApiKeyCreateParams = Stripe.V2.Iam.ApiKeyCreateParams;
      export type ApiKeyRetrieveParams = Stripe.V2.Iam.ApiKeyRetrieveParams;
      export type ApiKeyUpdateParams = Stripe.V2.Iam.ApiKeyUpdateParams;
      export type ApiKeyListParams = Stripe.V2.Iam.ApiKeyListParams;
      export type ApiKeyExpireParams = Stripe.V2.Iam.ApiKeyExpireParams;
      export type ApiKeyRotateParams = Stripe.V2.Iam.ApiKeyRotateParams;
      export type ApiKeyResource = Stripe.V2.Iam.ApiKeyResource;
      export namespace ActivityLogListParams {
        export type ActionGroup = Stripe.V2.Iam.ActivityLogListParams.ActionGroup;
        export type Action = Stripe.V2.Iam.ActivityLogListParams.Action;
      }
      export namespace ApiKeyCreateParams {
        export type Type = Stripe.V2.Iam.ApiKeyCreateParams.Type;
        export type PublicKey = Stripe.V2.Iam.ApiKeyCreateParams.PublicKey;
      }
      export namespace ApiKeyRotateParams {
        export type PublicKey = Stripe.V2.Iam.ApiKeyRotateParams.PublicKey;
      }
    }
    export namespace MoneyManagement {
      export type Adjustment = Stripe.V2.MoneyManagement.Adjustment;
      export type AdjustmentRetrieveParams = Stripe.V2.MoneyManagement.AdjustmentRetrieveParams;
      export type AdjustmentListParams = Stripe.V2.MoneyManagement.AdjustmentListParams;
      export type AdjustmentResource = Stripe.V2.MoneyManagement.AdjustmentResource;
      export type CurrencyConversion = Stripe.V2.MoneyManagement.CurrencyConversion;
      export type CurrencyConversionCreateParams = Stripe.V2.MoneyManagement.CurrencyConversionCreateParams;
      export type CurrencyConversionRetrieveParams = Stripe.V2.MoneyManagement.CurrencyConversionRetrieveParams;
      export type CurrencyConversionListParams = Stripe.V2.MoneyManagement.CurrencyConversionListParams;
      export type CurrencyConversionResource = Stripe.V2.MoneyManagement.CurrencyConversionResource;
      export type DebitDispute = Stripe.V2.MoneyManagement.DebitDispute;
      export type DebitDisputeCreateParams = Stripe.V2.MoneyManagement.DebitDisputeCreateParams;
      export type DebitDisputeRetrieveParams = Stripe.V2.MoneyManagement.DebitDisputeRetrieveParams;
      export type DebitDisputeListParams = Stripe.V2.MoneyManagement.DebitDisputeListParams;
      export type DebitDisputeResource = Stripe.V2.MoneyManagement.DebitDisputeResource;
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
      export type RecipientVerification = Stripe.V2.MoneyManagement.RecipientVerification;
      export type RecipientVerificationCreateParams = Stripe.V2.MoneyManagement.RecipientVerificationCreateParams;
      export type RecipientVerificationRetrieveParams = Stripe.V2.MoneyManagement.RecipientVerificationRetrieveParams;
      export type RecipientVerificationAcknowledgeParams = Stripe.V2.MoneyManagement.RecipientVerificationAcknowledgeParams;
      export type RecipientVerificationResource = Stripe.V2.MoneyManagement.RecipientVerificationResource;
      export type Transaction = Stripe.V2.MoneyManagement.Transaction;
      export type TransactionRetrieveParams = Stripe.V2.MoneyManagement.TransactionRetrieveParams;
      export type TransactionListParams = Stripe.V2.MoneyManagement.TransactionListParams;
      export type TransactionResource = Stripe.V2.MoneyManagement.TransactionResource;
      export type TransactionEntry = Stripe.V2.MoneyManagement.TransactionEntry;
      export type TransactionEntryRetrieveParams = Stripe.V2.MoneyManagement.TransactionEntryRetrieveParams;
      export type TransactionEntryListParams = Stripe.V2.MoneyManagement.TransactionEntryListParams;
      export type TransactionEntryResource = Stripe.V2.MoneyManagement.TransactionEntryResource;
      export type FinancialAccountStatement = Stripe.V2.MoneyManagement.FinancialAccountStatement;
      export namespace CurrencyConversionCreateParams {
        export type From = Stripe.V2.MoneyManagement.CurrencyConversionCreateParams.From;
        export type To = Stripe.V2.MoneyManagement.CurrencyConversionCreateParams.To;
      }
      export namespace DebitDisputeCreateParams {
        export type BankTransfer = Stripe.V2.MoneyManagement.DebitDisputeCreateParams.BankTransfer;
      }
      export namespace DebitDisputeListParams {
        export type Status = Stripe.V2.MoneyManagement.DebitDisputeListParams.Status;
      }
      export namespace FinancialAccountCreateParams {
        export type Storage = Stripe.V2.MoneyManagement.FinancialAccountCreateParams.Storage;
      }
      export namespace FinancialAccountUpdateParams {
        export type Storage = Stripe.V2.MoneyManagement.FinancialAccountUpdateParams.Storage;
      }
      export namespace FinancialAccountListParams {
        export type Status = Stripe.V2.MoneyManagement.FinancialAccountListParams.Status;
        export type Type = Stripe.V2.MoneyManagement.FinancialAccountListParams.Type;
      }
      export namespace FinancialAccountCloseParams {
        export type ForwardingSettings = Stripe.V2.MoneyManagement.FinancialAccountCloseParams.ForwardingSettings;
      }
      export namespace FinancialAddressCreateParams {
        export type Type = Stripe.V2.MoneyManagement.FinancialAddressCreateParams.Type;
        export type CryptoProperties = Stripe.V2.MoneyManagement.FinancialAddressCreateParams.CryptoProperties;
        export type SepaBankAccount = Stripe.V2.MoneyManagement.FinancialAddressCreateParams.SepaBankAccount;
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
    export namespace Payments {
      export type OffSessionPayment = Stripe.V2.Payments.OffSessionPayment;
      export type OffSessionPaymentCreateParams = Stripe.V2.Payments.OffSessionPaymentCreateParams;
      export type OffSessionPaymentRetrieveParams = Stripe.V2.Payments.OffSessionPaymentRetrieveParams;
      export type OffSessionPaymentListParams = Stripe.V2.Payments.OffSessionPaymentListParams;
      export type OffSessionPaymentCancelParams = Stripe.V2.Payments.OffSessionPaymentCancelParams;
      export type OffSessionPaymentCaptureParams = Stripe.V2.Payments.OffSessionPaymentCaptureParams;
      export type OffSessionPaymentPauseParams = Stripe.V2.Payments.OffSessionPaymentPauseParams;
      export type OffSessionPaymentResumeParams = Stripe.V2.Payments.OffSessionPaymentResumeParams;
      export type OffSessionPaymentResource = Stripe.V2.Payments.OffSessionPaymentResource;
      export type SettlementAllocationIntent = Stripe.V2.Payments.SettlementAllocationIntent;
      export type SettlementAllocationIntentCreateParams = Stripe.V2.Payments.SettlementAllocationIntentCreateParams;
      export type SettlementAllocationIntentRetrieveParams = Stripe.V2.Payments.SettlementAllocationIntentRetrieveParams;
      export type SettlementAllocationIntentUpdateParams = Stripe.V2.Payments.SettlementAllocationIntentUpdateParams;
      export type SettlementAllocationIntentListParams = Stripe.V2.Payments.SettlementAllocationIntentListParams;
      export type SettlementAllocationIntentCancelParams = Stripe.V2.Payments.SettlementAllocationIntentCancelParams;
      export type SettlementAllocationIntentSubmitParams = Stripe.V2.Payments.SettlementAllocationIntentSubmitParams;
      export type SettlementAllocationIntentResource = Stripe.V2.Payments.SettlementAllocationIntentResource;
      export type SettlementAllocationIntentSplit = Stripe.V2.Payments.SettlementAllocationIntentSplit;
      export namespace OffSessionPaymentCreateParams {
        export type Cadence = Stripe.V2.Payments.OffSessionPaymentCreateParams.Cadence;
        export type AmountDetails = Stripe.V2.Payments.OffSessionPaymentCreateParams.AmountDetails;
        export type Capture = Stripe.V2.Payments.OffSessionPaymentCreateParams.Capture;
        export type PaymentDetails = Stripe.V2.Payments.OffSessionPaymentCreateParams.PaymentDetails;
        export type PaymentMethodData = Stripe.V2.Payments.OffSessionPaymentCreateParams.PaymentMethodData;
        export type PaymentMethodOptions = Stripe.V2.Payments.OffSessionPaymentCreateParams.PaymentMethodOptions;
        export type PaymentsOrchestration = Stripe.V2.Payments.OffSessionPaymentCreateParams.PaymentsOrchestration;
        export type RetryDetails = Stripe.V2.Payments.OffSessionPaymentCreateParams.RetryDetails;
        export type TransferData = Stripe.V2.Payments.OffSessionPaymentCreateParams.TransferData;
      }
      export namespace OffSessionPaymentCaptureParams {
        export type AmountDetails = Stripe.V2.Payments.OffSessionPaymentCaptureParams.AmountDetails;
        export type PaymentDetails = Stripe.V2.Payments.OffSessionPaymentCaptureParams.PaymentDetails;
        export type TransferData = Stripe.V2.Payments.OffSessionPaymentCaptureParams.TransferData;
      }
      export namespace SettlementAllocationIntentListParams {
        export type Status = Stripe.V2.Payments.SettlementAllocationIntentListParams.Status;
      }
    }
    export namespace Reporting {
      export type Report = Stripe.V2.Reporting.Report;
      export type ReportRetrieveParams = Stripe.V2.Reporting.ReportRetrieveParams;
      export type ReportResource = Stripe.V2.Reporting.ReportResource;
      export type ReportRun = Stripe.V2.Reporting.ReportRun;
      export type ReportRunCreateParams = Stripe.V2.Reporting.ReportRunCreateParams;
      export type ReportRunRetrieveParams = Stripe.V2.Reporting.ReportRunRetrieveParams;
      export type ReportRunResource = Stripe.V2.Reporting.ReportRunResource;
      export namespace ReportRunCreateParams {
        export type ReportParameters = Stripe.V2.Reporting.ReportRunCreateParams.ReportParameters;
        export type ResultOptions = Stripe.V2.Reporting.ReportRunCreateParams.ResultOptions;
      }
    }
    export namespace Signals {
      export type AccountSignal = Stripe.V2.Signals.AccountSignal;
      export type AccountSignalRetrieveParams = Stripe.V2.Signals.AccountSignalRetrieveParams;
      export type AccountSignalListParams = Stripe.V2.Signals.AccountSignalListParams;
      export type AccountSignalResource = Stripe.V2.Signals.AccountSignalResource;
      export namespace AccountSignalListParams {
        export type Type = Stripe.V2.Signals.AccountSignalListParams.Type;
        export type AccountDetails = Stripe.V2.Signals.AccountSignalListParams.AccountDetails;
      }
    }
    export namespace Tax {
      export type ManualRule = Stripe.V2.Tax.ManualRule;
      export type ManualRuleCreateParams = Stripe.V2.Tax.ManualRuleCreateParams;
      export type ManualRuleRetrieveParams = Stripe.V2.Tax.ManualRuleRetrieveParams;
      export type ManualRuleUpdateParams = Stripe.V2.Tax.ManualRuleUpdateParams;
      export type ManualRuleListParams = Stripe.V2.Tax.ManualRuleListParams;
      export type ManualRuleDeactivateParams = Stripe.V2.Tax.ManualRuleDeactivateParams;
      export type ManualRuleResource = Stripe.V2.Tax.ManualRuleResource;
      export namespace ManualRuleCreateParams {
        export type ScheduledTaxRate = Stripe.V2.Tax.ManualRuleCreateParams.ScheduledTaxRate;
        export type Location = Stripe.V2.Tax.ManualRuleCreateParams.Location;
        export type Product = Stripe.V2.Tax.ManualRuleCreateParams.Product;
      }
      export namespace ManualRuleUpdateParams {
        export type ScheduledTaxRate = Stripe.V2.Tax.ManualRuleUpdateParams.ScheduledTaxRate;
        export type Location = Stripe.V2.Tax.ManualRuleUpdateParams.Location;
        export type Product = Stripe.V2.Tax.ManualRuleUpdateParams.Product;
      }
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
    export type V1AccountApplicationAuthorizedEvent = Stripe.V2.Core.Events.V1AccountApplicationAuthorizedEvent;
    export type V1AccountApplicationAuthorizedEventNotification = Stripe.V2.Core.Events.V1AccountApplicationAuthorizedEventNotification;
    export type V1AccountApplicationDeauthorizedEvent = Stripe.V2.Core.Events.V1AccountApplicationDeauthorizedEvent;
    export type V1AccountApplicationDeauthorizedEventNotification = Stripe.V2.Core.Events.V1AccountApplicationDeauthorizedEventNotification;
    export type V1AccountExternalAccountCreatedEvent = Stripe.V2.Core.Events.V1AccountExternalAccountCreatedEvent;
    export type V1AccountExternalAccountCreatedEventNotification = Stripe.V2.Core.Events.V1AccountExternalAccountCreatedEventNotification;
    export type V1AccountExternalAccountDeletedEvent = Stripe.V2.Core.Events.V1AccountExternalAccountDeletedEvent;
    export type V1AccountExternalAccountDeletedEventNotification = Stripe.V2.Core.Events.V1AccountExternalAccountDeletedEventNotification;
    export type V1AccountExternalAccountUpdatedEvent = Stripe.V2.Core.Events.V1AccountExternalAccountUpdatedEvent;
    export type V1AccountExternalAccountUpdatedEventNotification = Stripe.V2.Core.Events.V1AccountExternalAccountUpdatedEventNotification;
    export type V1AccountUpdatedEvent = Stripe.V2.Core.Events.V1AccountUpdatedEvent;
    export type V1AccountUpdatedEventNotification = Stripe.V2.Core.Events.V1AccountUpdatedEventNotification;
    export type V1AccountSignalsIncludingDelinquencyCreatedEvent = Stripe.V2.Core.Events.V1AccountSignalsIncludingDelinquencyCreatedEvent;
    export type V1AccountSignalsIncludingDelinquencyCreatedEventNotification = Stripe.V2.Core.Events.V1AccountSignalsIncludingDelinquencyCreatedEventNotification;
    export type V1ApplicationFeeCreatedEvent = Stripe.V2.Core.Events.V1ApplicationFeeCreatedEvent;
    export type V1ApplicationFeeCreatedEventNotification = Stripe.V2.Core.Events.V1ApplicationFeeCreatedEventNotification;
    export type V1ApplicationFeeRefundUpdatedEvent = Stripe.V2.Core.Events.V1ApplicationFeeRefundUpdatedEvent;
    export type V1ApplicationFeeRefundUpdatedEventNotification = Stripe.V2.Core.Events.V1ApplicationFeeRefundUpdatedEventNotification;
    export type V1ApplicationFeeRefundedEvent = Stripe.V2.Core.Events.V1ApplicationFeeRefundedEvent;
    export type V1ApplicationFeeRefundedEventNotification = Stripe.V2.Core.Events.V1ApplicationFeeRefundedEventNotification;
    export type V1BalanceAvailableEvent = Stripe.V2.Core.Events.V1BalanceAvailableEvent;
    export type V1BalanceAvailableEventNotification = Stripe.V2.Core.Events.V1BalanceAvailableEventNotification;
    export type V1BillingAlertTriggeredEvent = Stripe.V2.Core.Events.V1BillingAlertTriggeredEvent;
    export type V1BillingAlertTriggeredEventNotification = Stripe.V2.Core.Events.V1BillingAlertTriggeredEventNotification;
    export type V1BillingMeterErrorReportTriggeredEvent = Stripe.V2.Core.Events.V1BillingMeterErrorReportTriggeredEvent;
    export type V1BillingMeterErrorReportTriggeredEventNotification = Stripe.V2.Core.Events.V1BillingMeterErrorReportTriggeredEventNotification;
    export type V1BillingMeterNoMeterFoundEvent = Stripe.V2.Core.Events.V1BillingMeterNoMeterFoundEvent;
    export type V1BillingMeterNoMeterFoundEventNotification = Stripe.V2.Core.Events.V1BillingMeterNoMeterFoundEventNotification;
    export type V1BillingPortalConfigurationCreatedEvent = Stripe.V2.Core.Events.V1BillingPortalConfigurationCreatedEvent;
    export type V1BillingPortalConfigurationCreatedEventNotification = Stripe.V2.Core.Events.V1BillingPortalConfigurationCreatedEventNotification;
    export type V1BillingPortalConfigurationUpdatedEvent = Stripe.V2.Core.Events.V1BillingPortalConfigurationUpdatedEvent;
    export type V1BillingPortalConfigurationUpdatedEventNotification = Stripe.V2.Core.Events.V1BillingPortalConfigurationUpdatedEventNotification;
    export type V1BillingPortalSessionCreatedEvent = Stripe.V2.Core.Events.V1BillingPortalSessionCreatedEvent;
    export type V1BillingPortalSessionCreatedEventNotification = Stripe.V2.Core.Events.V1BillingPortalSessionCreatedEventNotification;
    export type V1CapabilityUpdatedEvent = Stripe.V2.Core.Events.V1CapabilityUpdatedEvent;
    export type V1CapabilityUpdatedEventNotification = Stripe.V2.Core.Events.V1CapabilityUpdatedEventNotification;
    export type V1CashBalanceFundsAvailableEvent = Stripe.V2.Core.Events.V1CashBalanceFundsAvailableEvent;
    export type V1CashBalanceFundsAvailableEventNotification = Stripe.V2.Core.Events.V1CashBalanceFundsAvailableEventNotification;
    export type V1ChargeCapturedEvent = Stripe.V2.Core.Events.V1ChargeCapturedEvent;
    export type V1ChargeCapturedEventNotification = Stripe.V2.Core.Events.V1ChargeCapturedEventNotification;
    export type V1ChargeDisputeClosedEvent = Stripe.V2.Core.Events.V1ChargeDisputeClosedEvent;
    export type V1ChargeDisputeClosedEventNotification = Stripe.V2.Core.Events.V1ChargeDisputeClosedEventNotification;
    export type V1ChargeDisputeCreatedEvent = Stripe.V2.Core.Events.V1ChargeDisputeCreatedEvent;
    export type V1ChargeDisputeCreatedEventNotification = Stripe.V2.Core.Events.V1ChargeDisputeCreatedEventNotification;
    export type V1ChargeDisputeFundsReinstatedEvent = Stripe.V2.Core.Events.V1ChargeDisputeFundsReinstatedEvent;
    export type V1ChargeDisputeFundsReinstatedEventNotification = Stripe.V2.Core.Events.V1ChargeDisputeFundsReinstatedEventNotification;
    export type V1ChargeDisputeFundsWithdrawnEvent = Stripe.V2.Core.Events.V1ChargeDisputeFundsWithdrawnEvent;
    export type V1ChargeDisputeFundsWithdrawnEventNotification = Stripe.V2.Core.Events.V1ChargeDisputeFundsWithdrawnEventNotification;
    export type V1ChargeDisputeUpdatedEvent = Stripe.V2.Core.Events.V1ChargeDisputeUpdatedEvent;
    export type V1ChargeDisputeUpdatedEventNotification = Stripe.V2.Core.Events.V1ChargeDisputeUpdatedEventNotification;
    export type V1ChargeExpiredEvent = Stripe.V2.Core.Events.V1ChargeExpiredEvent;
    export type V1ChargeExpiredEventNotification = Stripe.V2.Core.Events.V1ChargeExpiredEventNotification;
    export type V1ChargeFailedEvent = Stripe.V2.Core.Events.V1ChargeFailedEvent;
    export type V1ChargeFailedEventNotification = Stripe.V2.Core.Events.V1ChargeFailedEventNotification;
    export type V1ChargePendingEvent = Stripe.V2.Core.Events.V1ChargePendingEvent;
    export type V1ChargePendingEventNotification = Stripe.V2.Core.Events.V1ChargePendingEventNotification;
    export type V1ChargeRefundUpdatedEvent = Stripe.V2.Core.Events.V1ChargeRefundUpdatedEvent;
    export type V1ChargeRefundUpdatedEventNotification = Stripe.V2.Core.Events.V1ChargeRefundUpdatedEventNotification;
    export type V1ChargeRefundedEvent = Stripe.V2.Core.Events.V1ChargeRefundedEvent;
    export type V1ChargeRefundedEventNotification = Stripe.V2.Core.Events.V1ChargeRefundedEventNotification;
    export type V1ChargeSucceededEvent = Stripe.V2.Core.Events.V1ChargeSucceededEvent;
    export type V1ChargeSucceededEventNotification = Stripe.V2.Core.Events.V1ChargeSucceededEventNotification;
    export type V1ChargeUpdatedEvent = Stripe.V2.Core.Events.V1ChargeUpdatedEvent;
    export type V1ChargeUpdatedEventNotification = Stripe.V2.Core.Events.V1ChargeUpdatedEventNotification;
    export type V1CheckoutSessionAsyncPaymentFailedEvent = Stripe.V2.Core.Events.V1CheckoutSessionAsyncPaymentFailedEvent;
    export type V1CheckoutSessionAsyncPaymentFailedEventNotification = Stripe.V2.Core.Events.V1CheckoutSessionAsyncPaymentFailedEventNotification;
    export type V1CheckoutSessionAsyncPaymentSucceededEvent = Stripe.V2.Core.Events.V1CheckoutSessionAsyncPaymentSucceededEvent;
    export type V1CheckoutSessionAsyncPaymentSucceededEventNotification = Stripe.V2.Core.Events.V1CheckoutSessionAsyncPaymentSucceededEventNotification;
    export type V1CheckoutSessionCompletedEvent = Stripe.V2.Core.Events.V1CheckoutSessionCompletedEvent;
    export type V1CheckoutSessionCompletedEventNotification = Stripe.V2.Core.Events.V1CheckoutSessionCompletedEventNotification;
    export type V1CheckoutSessionExpiredEvent = Stripe.V2.Core.Events.V1CheckoutSessionExpiredEvent;
    export type V1CheckoutSessionExpiredEventNotification = Stripe.V2.Core.Events.V1CheckoutSessionExpiredEventNotification;
    export type V1ClimateOrderCanceledEvent = Stripe.V2.Core.Events.V1ClimateOrderCanceledEvent;
    export type V1ClimateOrderCanceledEventNotification = Stripe.V2.Core.Events.V1ClimateOrderCanceledEventNotification;
    export type V1ClimateOrderCreatedEvent = Stripe.V2.Core.Events.V1ClimateOrderCreatedEvent;
    export type V1ClimateOrderCreatedEventNotification = Stripe.V2.Core.Events.V1ClimateOrderCreatedEventNotification;
    export type V1ClimateOrderDelayedEvent = Stripe.V2.Core.Events.V1ClimateOrderDelayedEvent;
    export type V1ClimateOrderDelayedEventNotification = Stripe.V2.Core.Events.V1ClimateOrderDelayedEventNotification;
    export type V1ClimateOrderDeliveredEvent = Stripe.V2.Core.Events.V1ClimateOrderDeliveredEvent;
    export type V1ClimateOrderDeliveredEventNotification = Stripe.V2.Core.Events.V1ClimateOrderDeliveredEventNotification;
    export type V1ClimateOrderProductSubstitutedEvent = Stripe.V2.Core.Events.V1ClimateOrderProductSubstitutedEvent;
    export type V1ClimateOrderProductSubstitutedEventNotification = Stripe.V2.Core.Events.V1ClimateOrderProductSubstitutedEventNotification;
    export type V1ClimateProductCreatedEvent = Stripe.V2.Core.Events.V1ClimateProductCreatedEvent;
    export type V1ClimateProductCreatedEventNotification = Stripe.V2.Core.Events.V1ClimateProductCreatedEventNotification;
    export type V1ClimateProductPricingUpdatedEvent = Stripe.V2.Core.Events.V1ClimateProductPricingUpdatedEvent;
    export type V1ClimateProductPricingUpdatedEventNotification = Stripe.V2.Core.Events.V1ClimateProductPricingUpdatedEventNotification;
    export type V1CouponCreatedEvent = Stripe.V2.Core.Events.V1CouponCreatedEvent;
    export type V1CouponCreatedEventNotification = Stripe.V2.Core.Events.V1CouponCreatedEventNotification;
    export type V1CouponDeletedEvent = Stripe.V2.Core.Events.V1CouponDeletedEvent;
    export type V1CouponDeletedEventNotification = Stripe.V2.Core.Events.V1CouponDeletedEventNotification;
    export type V1CouponUpdatedEvent = Stripe.V2.Core.Events.V1CouponUpdatedEvent;
    export type V1CouponUpdatedEventNotification = Stripe.V2.Core.Events.V1CouponUpdatedEventNotification;
    export type V1CreditNoteCreatedEvent = Stripe.V2.Core.Events.V1CreditNoteCreatedEvent;
    export type V1CreditNoteCreatedEventNotification = Stripe.V2.Core.Events.V1CreditNoteCreatedEventNotification;
    export type V1CreditNoteUpdatedEvent = Stripe.V2.Core.Events.V1CreditNoteUpdatedEvent;
    export type V1CreditNoteUpdatedEventNotification = Stripe.V2.Core.Events.V1CreditNoteUpdatedEventNotification;
    export type V1CreditNoteVoidedEvent = Stripe.V2.Core.Events.V1CreditNoteVoidedEvent;
    export type V1CreditNoteVoidedEventNotification = Stripe.V2.Core.Events.V1CreditNoteVoidedEventNotification;
    export type V1CustomerCreatedEvent = Stripe.V2.Core.Events.V1CustomerCreatedEvent;
    export type V1CustomerCreatedEventNotification = Stripe.V2.Core.Events.V1CustomerCreatedEventNotification;
    export type V1CustomerDeletedEvent = Stripe.V2.Core.Events.V1CustomerDeletedEvent;
    export type V1CustomerDeletedEventNotification = Stripe.V2.Core.Events.V1CustomerDeletedEventNotification;
    export type V1CustomerSubscriptionCreatedEvent = Stripe.V2.Core.Events.V1CustomerSubscriptionCreatedEvent;
    export type V1CustomerSubscriptionCreatedEventNotification = Stripe.V2.Core.Events.V1CustomerSubscriptionCreatedEventNotification;
    export type V1CustomerSubscriptionDeletedEvent = Stripe.V2.Core.Events.V1CustomerSubscriptionDeletedEvent;
    export type V1CustomerSubscriptionDeletedEventNotification = Stripe.V2.Core.Events.V1CustomerSubscriptionDeletedEventNotification;
    export type V1CustomerSubscriptionPausedEvent = Stripe.V2.Core.Events.V1CustomerSubscriptionPausedEvent;
    export type V1CustomerSubscriptionPausedEventNotification = Stripe.V2.Core.Events.V1CustomerSubscriptionPausedEventNotification;
    export type V1CustomerSubscriptionPendingUpdateAppliedEvent = Stripe.V2.Core.Events.V1CustomerSubscriptionPendingUpdateAppliedEvent;
    export type V1CustomerSubscriptionPendingUpdateAppliedEventNotification = Stripe.V2.Core.Events.V1CustomerSubscriptionPendingUpdateAppliedEventNotification;
    export type V1CustomerSubscriptionPendingUpdateExpiredEvent = Stripe.V2.Core.Events.V1CustomerSubscriptionPendingUpdateExpiredEvent;
    export type V1CustomerSubscriptionPendingUpdateExpiredEventNotification = Stripe.V2.Core.Events.V1CustomerSubscriptionPendingUpdateExpiredEventNotification;
    export type V1CustomerSubscriptionResumedEvent = Stripe.V2.Core.Events.V1CustomerSubscriptionResumedEvent;
    export type V1CustomerSubscriptionResumedEventNotification = Stripe.V2.Core.Events.V1CustomerSubscriptionResumedEventNotification;
    export type V1CustomerSubscriptionTrialWillEndEvent = Stripe.V2.Core.Events.V1CustomerSubscriptionTrialWillEndEvent;
    export type V1CustomerSubscriptionTrialWillEndEventNotification = Stripe.V2.Core.Events.V1CustomerSubscriptionTrialWillEndEventNotification;
    export type V1CustomerSubscriptionUpdatedEvent = Stripe.V2.Core.Events.V1CustomerSubscriptionUpdatedEvent;
    export type V1CustomerSubscriptionUpdatedEventNotification = Stripe.V2.Core.Events.V1CustomerSubscriptionUpdatedEventNotification;
    export type V1CustomerTaxIdCreatedEvent = Stripe.V2.Core.Events.V1CustomerTaxIdCreatedEvent;
    export type V1CustomerTaxIdCreatedEventNotification = Stripe.V2.Core.Events.V1CustomerTaxIdCreatedEventNotification;
    export type V1CustomerTaxIdDeletedEvent = Stripe.V2.Core.Events.V1CustomerTaxIdDeletedEvent;
    export type V1CustomerTaxIdDeletedEventNotification = Stripe.V2.Core.Events.V1CustomerTaxIdDeletedEventNotification;
    export type V1CustomerTaxIdUpdatedEvent = Stripe.V2.Core.Events.V1CustomerTaxIdUpdatedEvent;
    export type V1CustomerTaxIdUpdatedEventNotification = Stripe.V2.Core.Events.V1CustomerTaxIdUpdatedEventNotification;
    export type V1CustomerUpdatedEvent = Stripe.V2.Core.Events.V1CustomerUpdatedEvent;
    export type V1CustomerUpdatedEventNotification = Stripe.V2.Core.Events.V1CustomerUpdatedEventNotification;
    export type V1CustomerCashBalanceTransactionCreatedEvent = Stripe.V2.Core.Events.V1CustomerCashBalanceTransactionCreatedEvent;
    export type V1CustomerCashBalanceTransactionCreatedEventNotification = Stripe.V2.Core.Events.V1CustomerCashBalanceTransactionCreatedEventNotification;
    export type V1EntitlementsActiveEntitlementSummaryUpdatedEvent = Stripe.V2.Core.Events.V1EntitlementsActiveEntitlementSummaryUpdatedEvent;
    export type V1EntitlementsActiveEntitlementSummaryUpdatedEventNotification = Stripe.V2.Core.Events.V1EntitlementsActiveEntitlementSummaryUpdatedEventNotification;
    export type V1FileCreatedEvent = Stripe.V2.Core.Events.V1FileCreatedEvent;
    export type V1FileCreatedEventNotification = Stripe.V2.Core.Events.V1FileCreatedEventNotification;
    export type V1FinancialConnectionsAccountCreatedEvent = Stripe.V2.Core.Events.V1FinancialConnectionsAccountCreatedEvent;
    export type V1FinancialConnectionsAccountCreatedEventNotification = Stripe.V2.Core.Events.V1FinancialConnectionsAccountCreatedEventNotification;
    export type V1FinancialConnectionsAccountDeactivatedEvent = Stripe.V2.Core.Events.V1FinancialConnectionsAccountDeactivatedEvent;
    export type V1FinancialConnectionsAccountDeactivatedEventNotification = Stripe.V2.Core.Events.V1FinancialConnectionsAccountDeactivatedEventNotification;
    export type V1FinancialConnectionsAccountDisconnectedEvent = Stripe.V2.Core.Events.V1FinancialConnectionsAccountDisconnectedEvent;
    export type V1FinancialConnectionsAccountDisconnectedEventNotification = Stripe.V2.Core.Events.V1FinancialConnectionsAccountDisconnectedEventNotification;
    export type V1FinancialConnectionsAccountReactivatedEvent = Stripe.V2.Core.Events.V1FinancialConnectionsAccountReactivatedEvent;
    export type V1FinancialConnectionsAccountReactivatedEventNotification = Stripe.V2.Core.Events.V1FinancialConnectionsAccountReactivatedEventNotification;
    export type V1FinancialConnectionsAccountRefreshedBalanceEvent = Stripe.V2.Core.Events.V1FinancialConnectionsAccountRefreshedBalanceEvent;
    export type V1FinancialConnectionsAccountRefreshedBalanceEventNotification = Stripe.V2.Core.Events.V1FinancialConnectionsAccountRefreshedBalanceEventNotification;
    export type V1FinancialConnectionsAccountRefreshedOwnershipEvent = Stripe.V2.Core.Events.V1FinancialConnectionsAccountRefreshedOwnershipEvent;
    export type V1FinancialConnectionsAccountRefreshedOwnershipEventNotification = Stripe.V2.Core.Events.V1FinancialConnectionsAccountRefreshedOwnershipEventNotification;
    export type V1FinancialConnectionsAccountRefreshedTransactionsEvent = Stripe.V2.Core.Events.V1FinancialConnectionsAccountRefreshedTransactionsEvent;
    export type V1FinancialConnectionsAccountRefreshedTransactionsEventNotification = Stripe.V2.Core.Events.V1FinancialConnectionsAccountRefreshedTransactionsEventNotification;
    export type V1IdentityVerificationSessionCanceledEvent = Stripe.V2.Core.Events.V1IdentityVerificationSessionCanceledEvent;
    export type V1IdentityVerificationSessionCanceledEventNotification = Stripe.V2.Core.Events.V1IdentityVerificationSessionCanceledEventNotification;
    export type V1IdentityVerificationSessionCreatedEvent = Stripe.V2.Core.Events.V1IdentityVerificationSessionCreatedEvent;
    export type V1IdentityVerificationSessionCreatedEventNotification = Stripe.V2.Core.Events.V1IdentityVerificationSessionCreatedEventNotification;
    export type V1IdentityVerificationSessionProcessingEvent = Stripe.V2.Core.Events.V1IdentityVerificationSessionProcessingEvent;
    export type V1IdentityVerificationSessionProcessingEventNotification = Stripe.V2.Core.Events.V1IdentityVerificationSessionProcessingEventNotification;
    export type V1IdentityVerificationSessionRedactedEvent = Stripe.V2.Core.Events.V1IdentityVerificationSessionRedactedEvent;
    export type V1IdentityVerificationSessionRedactedEventNotification = Stripe.V2.Core.Events.V1IdentityVerificationSessionRedactedEventNotification;
    export type V1IdentityVerificationSessionRequiresInputEvent = Stripe.V2.Core.Events.V1IdentityVerificationSessionRequiresInputEvent;
    export type V1IdentityVerificationSessionRequiresInputEventNotification = Stripe.V2.Core.Events.V1IdentityVerificationSessionRequiresInputEventNotification;
    export type V1IdentityVerificationSessionVerifiedEvent = Stripe.V2.Core.Events.V1IdentityVerificationSessionVerifiedEvent;
    export type V1IdentityVerificationSessionVerifiedEventNotification = Stripe.V2.Core.Events.V1IdentityVerificationSessionVerifiedEventNotification;
    export type V1InvoiceCreatedEvent = Stripe.V2.Core.Events.V1InvoiceCreatedEvent;
    export type V1InvoiceCreatedEventNotification = Stripe.V2.Core.Events.V1InvoiceCreatedEventNotification;
    export type V1InvoiceDeletedEvent = Stripe.V2.Core.Events.V1InvoiceDeletedEvent;
    export type V1InvoiceDeletedEventNotification = Stripe.V2.Core.Events.V1InvoiceDeletedEventNotification;
    export type V1InvoiceFinalizationFailedEvent = Stripe.V2.Core.Events.V1InvoiceFinalizationFailedEvent;
    export type V1InvoiceFinalizationFailedEventNotification = Stripe.V2.Core.Events.V1InvoiceFinalizationFailedEventNotification;
    export type V1InvoiceFinalizedEvent = Stripe.V2.Core.Events.V1InvoiceFinalizedEvent;
    export type V1InvoiceFinalizedEventNotification = Stripe.V2.Core.Events.V1InvoiceFinalizedEventNotification;
    export type V1InvoiceMarkedUncollectibleEvent = Stripe.V2.Core.Events.V1InvoiceMarkedUncollectibleEvent;
    export type V1InvoiceMarkedUncollectibleEventNotification = Stripe.V2.Core.Events.V1InvoiceMarkedUncollectibleEventNotification;
    export type V1InvoiceOverdueEvent = Stripe.V2.Core.Events.V1InvoiceOverdueEvent;
    export type V1InvoiceOverdueEventNotification = Stripe.V2.Core.Events.V1InvoiceOverdueEventNotification;
    export type V1InvoiceOverpaidEvent = Stripe.V2.Core.Events.V1InvoiceOverpaidEvent;
    export type V1InvoiceOverpaidEventNotification = Stripe.V2.Core.Events.V1InvoiceOverpaidEventNotification;
    export type V1InvoicePaidEvent = Stripe.V2.Core.Events.V1InvoicePaidEvent;
    export type V1InvoicePaidEventNotification = Stripe.V2.Core.Events.V1InvoicePaidEventNotification;
    export type V1InvoicePaymentActionRequiredEvent = Stripe.V2.Core.Events.V1InvoicePaymentActionRequiredEvent;
    export type V1InvoicePaymentActionRequiredEventNotification = Stripe.V2.Core.Events.V1InvoicePaymentActionRequiredEventNotification;
    export type V1InvoicePaymentFailedEvent = Stripe.V2.Core.Events.V1InvoicePaymentFailedEvent;
    export type V1InvoicePaymentFailedEventNotification = Stripe.V2.Core.Events.V1InvoicePaymentFailedEventNotification;
    export type V1InvoicePaymentSucceededEvent = Stripe.V2.Core.Events.V1InvoicePaymentSucceededEvent;
    export type V1InvoicePaymentSucceededEventNotification = Stripe.V2.Core.Events.V1InvoicePaymentSucceededEventNotification;
    export type V1InvoiceSentEvent = Stripe.V2.Core.Events.V1InvoiceSentEvent;
    export type V1InvoiceSentEventNotification = Stripe.V2.Core.Events.V1InvoiceSentEventNotification;
    export type V1InvoiceUpcomingEvent = Stripe.V2.Core.Events.V1InvoiceUpcomingEvent;
    export type V1InvoiceUpcomingEventNotification = Stripe.V2.Core.Events.V1InvoiceUpcomingEventNotification;
    export type V1InvoiceUpdatedEvent = Stripe.V2.Core.Events.V1InvoiceUpdatedEvent;
    export type V1InvoiceUpdatedEventNotification = Stripe.V2.Core.Events.V1InvoiceUpdatedEventNotification;
    export type V1InvoiceVoidedEvent = Stripe.V2.Core.Events.V1InvoiceVoidedEvent;
    export type V1InvoiceVoidedEventNotification = Stripe.V2.Core.Events.V1InvoiceVoidedEventNotification;
    export type V1InvoiceWillBeDueEvent = Stripe.V2.Core.Events.V1InvoiceWillBeDueEvent;
    export type V1InvoiceWillBeDueEventNotification = Stripe.V2.Core.Events.V1InvoiceWillBeDueEventNotification;
    export type V1InvoicePaymentPaidEvent = Stripe.V2.Core.Events.V1InvoicePaymentPaidEvent;
    export type V1InvoicePaymentPaidEventNotification = Stripe.V2.Core.Events.V1InvoicePaymentPaidEventNotification;
    export type V1InvoiceitemCreatedEvent = Stripe.V2.Core.Events.V1InvoiceitemCreatedEvent;
    export type V1InvoiceitemCreatedEventNotification = Stripe.V2.Core.Events.V1InvoiceitemCreatedEventNotification;
    export type V1InvoiceitemDeletedEvent = Stripe.V2.Core.Events.V1InvoiceitemDeletedEvent;
    export type V1InvoiceitemDeletedEventNotification = Stripe.V2.Core.Events.V1InvoiceitemDeletedEventNotification;
    export type V1IssuingAuthorizationCreatedEvent = Stripe.V2.Core.Events.V1IssuingAuthorizationCreatedEvent;
    export type V1IssuingAuthorizationCreatedEventNotification = Stripe.V2.Core.Events.V1IssuingAuthorizationCreatedEventNotification;
    export type V1IssuingAuthorizationRequestEvent = Stripe.V2.Core.Events.V1IssuingAuthorizationRequestEvent;
    export type V1IssuingAuthorizationRequestEventNotification = Stripe.V2.Core.Events.V1IssuingAuthorizationRequestEventNotification;
    export type V1IssuingAuthorizationUpdatedEvent = Stripe.V2.Core.Events.V1IssuingAuthorizationUpdatedEvent;
    export type V1IssuingAuthorizationUpdatedEventNotification = Stripe.V2.Core.Events.V1IssuingAuthorizationUpdatedEventNotification;
    export type V1IssuingCardCreatedEvent = Stripe.V2.Core.Events.V1IssuingCardCreatedEvent;
    export type V1IssuingCardCreatedEventNotification = Stripe.V2.Core.Events.V1IssuingCardCreatedEventNotification;
    export type V1IssuingCardUpdatedEvent = Stripe.V2.Core.Events.V1IssuingCardUpdatedEvent;
    export type V1IssuingCardUpdatedEventNotification = Stripe.V2.Core.Events.V1IssuingCardUpdatedEventNotification;
    export type V1IssuingCardholderCreatedEvent = Stripe.V2.Core.Events.V1IssuingCardholderCreatedEvent;
    export type V1IssuingCardholderCreatedEventNotification = Stripe.V2.Core.Events.V1IssuingCardholderCreatedEventNotification;
    export type V1IssuingCardholderUpdatedEvent = Stripe.V2.Core.Events.V1IssuingCardholderUpdatedEvent;
    export type V1IssuingCardholderUpdatedEventNotification = Stripe.V2.Core.Events.V1IssuingCardholderUpdatedEventNotification;
    export type V1IssuingDisputeClosedEvent = Stripe.V2.Core.Events.V1IssuingDisputeClosedEvent;
    export type V1IssuingDisputeClosedEventNotification = Stripe.V2.Core.Events.V1IssuingDisputeClosedEventNotification;
    export type V1IssuingDisputeCreatedEvent = Stripe.V2.Core.Events.V1IssuingDisputeCreatedEvent;
    export type V1IssuingDisputeCreatedEventNotification = Stripe.V2.Core.Events.V1IssuingDisputeCreatedEventNotification;
    export type V1IssuingDisputeFundsReinstatedEvent = Stripe.V2.Core.Events.V1IssuingDisputeFundsReinstatedEvent;
    export type V1IssuingDisputeFundsReinstatedEventNotification = Stripe.V2.Core.Events.V1IssuingDisputeFundsReinstatedEventNotification;
    export type V1IssuingDisputeFundsRescindedEvent = Stripe.V2.Core.Events.V1IssuingDisputeFundsRescindedEvent;
    export type V1IssuingDisputeFundsRescindedEventNotification = Stripe.V2.Core.Events.V1IssuingDisputeFundsRescindedEventNotification;
    export type V1IssuingDisputeSubmittedEvent = Stripe.V2.Core.Events.V1IssuingDisputeSubmittedEvent;
    export type V1IssuingDisputeSubmittedEventNotification = Stripe.V2.Core.Events.V1IssuingDisputeSubmittedEventNotification;
    export type V1IssuingDisputeUpdatedEvent = Stripe.V2.Core.Events.V1IssuingDisputeUpdatedEvent;
    export type V1IssuingDisputeUpdatedEventNotification = Stripe.V2.Core.Events.V1IssuingDisputeUpdatedEventNotification;
    export type V1IssuingPersonalizationDesignActivatedEvent = Stripe.V2.Core.Events.V1IssuingPersonalizationDesignActivatedEvent;
    export type V1IssuingPersonalizationDesignActivatedEventNotification = Stripe.V2.Core.Events.V1IssuingPersonalizationDesignActivatedEventNotification;
    export type V1IssuingPersonalizationDesignDeactivatedEvent = Stripe.V2.Core.Events.V1IssuingPersonalizationDesignDeactivatedEvent;
    export type V1IssuingPersonalizationDesignDeactivatedEventNotification = Stripe.V2.Core.Events.V1IssuingPersonalizationDesignDeactivatedEventNotification;
    export type V1IssuingPersonalizationDesignRejectedEvent = Stripe.V2.Core.Events.V1IssuingPersonalizationDesignRejectedEvent;
    export type V1IssuingPersonalizationDesignRejectedEventNotification = Stripe.V2.Core.Events.V1IssuingPersonalizationDesignRejectedEventNotification;
    export type V1IssuingPersonalizationDesignUpdatedEvent = Stripe.V2.Core.Events.V1IssuingPersonalizationDesignUpdatedEvent;
    export type V1IssuingPersonalizationDesignUpdatedEventNotification = Stripe.V2.Core.Events.V1IssuingPersonalizationDesignUpdatedEventNotification;
    export type V1IssuingTokenCreatedEvent = Stripe.V2.Core.Events.V1IssuingTokenCreatedEvent;
    export type V1IssuingTokenCreatedEventNotification = Stripe.V2.Core.Events.V1IssuingTokenCreatedEventNotification;
    export type V1IssuingTokenUpdatedEvent = Stripe.V2.Core.Events.V1IssuingTokenUpdatedEvent;
    export type V1IssuingTokenUpdatedEventNotification = Stripe.V2.Core.Events.V1IssuingTokenUpdatedEventNotification;
    export type V1IssuingTransactionCreatedEvent = Stripe.V2.Core.Events.V1IssuingTransactionCreatedEvent;
    export type V1IssuingTransactionCreatedEventNotification = Stripe.V2.Core.Events.V1IssuingTransactionCreatedEventNotification;
    export type V1IssuingTransactionPurchaseDetailsReceiptUpdatedEvent = Stripe.V2.Core.Events.V1IssuingTransactionPurchaseDetailsReceiptUpdatedEvent;
    export type V1IssuingTransactionPurchaseDetailsReceiptUpdatedEventNotification = Stripe.V2.Core.Events.V1IssuingTransactionPurchaseDetailsReceiptUpdatedEventNotification;
    export type V1IssuingTransactionUpdatedEvent = Stripe.V2.Core.Events.V1IssuingTransactionUpdatedEvent;
    export type V1IssuingTransactionUpdatedEventNotification = Stripe.V2.Core.Events.V1IssuingTransactionUpdatedEventNotification;
    export type V1MandateUpdatedEvent = Stripe.V2.Core.Events.V1MandateUpdatedEvent;
    export type V1MandateUpdatedEventNotification = Stripe.V2.Core.Events.V1MandateUpdatedEventNotification;
    export type V1PaymentIntentAmountCapturableUpdatedEvent = Stripe.V2.Core.Events.V1PaymentIntentAmountCapturableUpdatedEvent;
    export type V1PaymentIntentAmountCapturableUpdatedEventNotification = Stripe.V2.Core.Events.V1PaymentIntentAmountCapturableUpdatedEventNotification;
    export type V1PaymentIntentCanceledEvent = Stripe.V2.Core.Events.V1PaymentIntentCanceledEvent;
    export type V1PaymentIntentCanceledEventNotification = Stripe.V2.Core.Events.V1PaymentIntentCanceledEventNotification;
    export type V1PaymentIntentCreatedEvent = Stripe.V2.Core.Events.V1PaymentIntentCreatedEvent;
    export type V1PaymentIntentCreatedEventNotification = Stripe.V2.Core.Events.V1PaymentIntentCreatedEventNotification;
    export type V1PaymentIntentPartiallyFundedEvent = Stripe.V2.Core.Events.V1PaymentIntentPartiallyFundedEvent;
    export type V1PaymentIntentPartiallyFundedEventNotification = Stripe.V2.Core.Events.V1PaymentIntentPartiallyFundedEventNotification;
    export type V1PaymentIntentPaymentFailedEvent = Stripe.V2.Core.Events.V1PaymentIntentPaymentFailedEvent;
    export type V1PaymentIntentPaymentFailedEventNotification = Stripe.V2.Core.Events.V1PaymentIntentPaymentFailedEventNotification;
    export type V1PaymentIntentProcessingEvent = Stripe.V2.Core.Events.V1PaymentIntentProcessingEvent;
    export type V1PaymentIntentProcessingEventNotification = Stripe.V2.Core.Events.V1PaymentIntentProcessingEventNotification;
    export type V1PaymentIntentRequiresActionEvent = Stripe.V2.Core.Events.V1PaymentIntentRequiresActionEvent;
    export type V1PaymentIntentRequiresActionEventNotification = Stripe.V2.Core.Events.V1PaymentIntentRequiresActionEventNotification;
    export type V1PaymentIntentSucceededEvent = Stripe.V2.Core.Events.V1PaymentIntentSucceededEvent;
    export type V1PaymentIntentSucceededEventNotification = Stripe.V2.Core.Events.V1PaymentIntentSucceededEventNotification;
    export type V1PaymentLinkCreatedEvent = Stripe.V2.Core.Events.V1PaymentLinkCreatedEvent;
    export type V1PaymentLinkCreatedEventNotification = Stripe.V2.Core.Events.V1PaymentLinkCreatedEventNotification;
    export type V1PaymentLinkUpdatedEvent = Stripe.V2.Core.Events.V1PaymentLinkUpdatedEvent;
    export type V1PaymentLinkUpdatedEventNotification = Stripe.V2.Core.Events.V1PaymentLinkUpdatedEventNotification;
    export type V1PaymentMethodAttachedEvent = Stripe.V2.Core.Events.V1PaymentMethodAttachedEvent;
    export type V1PaymentMethodAttachedEventNotification = Stripe.V2.Core.Events.V1PaymentMethodAttachedEventNotification;
    export type V1PaymentMethodAutomaticallyUpdatedEvent = Stripe.V2.Core.Events.V1PaymentMethodAutomaticallyUpdatedEvent;
    export type V1PaymentMethodAutomaticallyUpdatedEventNotification = Stripe.V2.Core.Events.V1PaymentMethodAutomaticallyUpdatedEventNotification;
    export type V1PaymentMethodDetachedEvent = Stripe.V2.Core.Events.V1PaymentMethodDetachedEvent;
    export type V1PaymentMethodDetachedEventNotification = Stripe.V2.Core.Events.V1PaymentMethodDetachedEventNotification;
    export type V1PaymentMethodUpdatedEvent = Stripe.V2.Core.Events.V1PaymentMethodUpdatedEvent;
    export type V1PaymentMethodUpdatedEventNotification = Stripe.V2.Core.Events.V1PaymentMethodUpdatedEventNotification;
    export type V1PayoutCanceledEvent = Stripe.V2.Core.Events.V1PayoutCanceledEvent;
    export type V1PayoutCanceledEventNotification = Stripe.V2.Core.Events.V1PayoutCanceledEventNotification;
    export type V1PayoutCreatedEvent = Stripe.V2.Core.Events.V1PayoutCreatedEvent;
    export type V1PayoutCreatedEventNotification = Stripe.V2.Core.Events.V1PayoutCreatedEventNotification;
    export type V1PayoutFailedEvent = Stripe.V2.Core.Events.V1PayoutFailedEvent;
    export type V1PayoutFailedEventNotification = Stripe.V2.Core.Events.V1PayoutFailedEventNotification;
    export type V1PayoutPaidEvent = Stripe.V2.Core.Events.V1PayoutPaidEvent;
    export type V1PayoutPaidEventNotification = Stripe.V2.Core.Events.V1PayoutPaidEventNotification;
    export type V1PayoutReconciliationCompletedEvent = Stripe.V2.Core.Events.V1PayoutReconciliationCompletedEvent;
    export type V1PayoutReconciliationCompletedEventNotification = Stripe.V2.Core.Events.V1PayoutReconciliationCompletedEventNotification;
    export type V1PayoutUpdatedEvent = Stripe.V2.Core.Events.V1PayoutUpdatedEvent;
    export type V1PayoutUpdatedEventNotification = Stripe.V2.Core.Events.V1PayoutUpdatedEventNotification;
    export type V1PersonCreatedEvent = Stripe.V2.Core.Events.V1PersonCreatedEvent;
    export type V1PersonCreatedEventNotification = Stripe.V2.Core.Events.V1PersonCreatedEventNotification;
    export type V1PersonDeletedEvent = Stripe.V2.Core.Events.V1PersonDeletedEvent;
    export type V1PersonDeletedEventNotification = Stripe.V2.Core.Events.V1PersonDeletedEventNotification;
    export type V1PersonUpdatedEvent = Stripe.V2.Core.Events.V1PersonUpdatedEvent;
    export type V1PersonUpdatedEventNotification = Stripe.V2.Core.Events.V1PersonUpdatedEventNotification;
    export type V1PlanCreatedEvent = Stripe.V2.Core.Events.V1PlanCreatedEvent;
    export type V1PlanCreatedEventNotification = Stripe.V2.Core.Events.V1PlanCreatedEventNotification;
    export type V1PlanDeletedEvent = Stripe.V2.Core.Events.V1PlanDeletedEvent;
    export type V1PlanDeletedEventNotification = Stripe.V2.Core.Events.V1PlanDeletedEventNotification;
    export type V1PlanUpdatedEvent = Stripe.V2.Core.Events.V1PlanUpdatedEvent;
    export type V1PlanUpdatedEventNotification = Stripe.V2.Core.Events.V1PlanUpdatedEventNotification;
    export type V1PriceCreatedEvent = Stripe.V2.Core.Events.V1PriceCreatedEvent;
    export type V1PriceCreatedEventNotification = Stripe.V2.Core.Events.V1PriceCreatedEventNotification;
    export type V1PriceDeletedEvent = Stripe.V2.Core.Events.V1PriceDeletedEvent;
    export type V1PriceDeletedEventNotification = Stripe.V2.Core.Events.V1PriceDeletedEventNotification;
    export type V1PriceUpdatedEvent = Stripe.V2.Core.Events.V1PriceUpdatedEvent;
    export type V1PriceUpdatedEventNotification = Stripe.V2.Core.Events.V1PriceUpdatedEventNotification;
    export type V1ProductCreatedEvent = Stripe.V2.Core.Events.V1ProductCreatedEvent;
    export type V1ProductCreatedEventNotification = Stripe.V2.Core.Events.V1ProductCreatedEventNotification;
    export type V1ProductDeletedEvent = Stripe.V2.Core.Events.V1ProductDeletedEvent;
    export type V1ProductDeletedEventNotification = Stripe.V2.Core.Events.V1ProductDeletedEventNotification;
    export type V1ProductUpdatedEvent = Stripe.V2.Core.Events.V1ProductUpdatedEvent;
    export type V1ProductUpdatedEventNotification = Stripe.V2.Core.Events.V1ProductUpdatedEventNotification;
    export type V1PromotionCodeCreatedEvent = Stripe.V2.Core.Events.V1PromotionCodeCreatedEvent;
    export type V1PromotionCodeCreatedEventNotification = Stripe.V2.Core.Events.V1PromotionCodeCreatedEventNotification;
    export type V1PromotionCodeUpdatedEvent = Stripe.V2.Core.Events.V1PromotionCodeUpdatedEvent;
    export type V1PromotionCodeUpdatedEventNotification = Stripe.V2.Core.Events.V1PromotionCodeUpdatedEventNotification;
    export type V1QuoteAcceptedEvent = Stripe.V2.Core.Events.V1QuoteAcceptedEvent;
    export type V1QuoteAcceptedEventNotification = Stripe.V2.Core.Events.V1QuoteAcceptedEventNotification;
    export type V1QuoteCanceledEvent = Stripe.V2.Core.Events.V1QuoteCanceledEvent;
    export type V1QuoteCanceledEventNotification = Stripe.V2.Core.Events.V1QuoteCanceledEventNotification;
    export type V1QuoteCreatedEvent = Stripe.V2.Core.Events.V1QuoteCreatedEvent;
    export type V1QuoteCreatedEventNotification = Stripe.V2.Core.Events.V1QuoteCreatedEventNotification;
    export type V1QuoteFinalizedEvent = Stripe.V2.Core.Events.V1QuoteFinalizedEvent;
    export type V1QuoteFinalizedEventNotification = Stripe.V2.Core.Events.V1QuoteFinalizedEventNotification;
    export type V1RadarEarlyFraudWarningCreatedEvent = Stripe.V2.Core.Events.V1RadarEarlyFraudWarningCreatedEvent;
    export type V1RadarEarlyFraudWarningCreatedEventNotification = Stripe.V2.Core.Events.V1RadarEarlyFraudWarningCreatedEventNotification;
    export type V1RadarEarlyFraudWarningUpdatedEvent = Stripe.V2.Core.Events.V1RadarEarlyFraudWarningUpdatedEvent;
    export type V1RadarEarlyFraudWarningUpdatedEventNotification = Stripe.V2.Core.Events.V1RadarEarlyFraudWarningUpdatedEventNotification;
    export type V1RefundCreatedEvent = Stripe.V2.Core.Events.V1RefundCreatedEvent;
    export type V1RefundCreatedEventNotification = Stripe.V2.Core.Events.V1RefundCreatedEventNotification;
    export type V1RefundFailedEvent = Stripe.V2.Core.Events.V1RefundFailedEvent;
    export type V1RefundFailedEventNotification = Stripe.V2.Core.Events.V1RefundFailedEventNotification;
    export type V1RefundUpdatedEvent = Stripe.V2.Core.Events.V1RefundUpdatedEvent;
    export type V1RefundUpdatedEventNotification = Stripe.V2.Core.Events.V1RefundUpdatedEventNotification;
    export type V1ReviewClosedEvent = Stripe.V2.Core.Events.V1ReviewClosedEvent;
    export type V1ReviewClosedEventNotification = Stripe.V2.Core.Events.V1ReviewClosedEventNotification;
    export type V1ReviewOpenedEvent = Stripe.V2.Core.Events.V1ReviewOpenedEvent;
    export type V1ReviewOpenedEventNotification = Stripe.V2.Core.Events.V1ReviewOpenedEventNotification;
    export type V1SetupIntentCanceledEvent = Stripe.V2.Core.Events.V1SetupIntentCanceledEvent;
    export type V1SetupIntentCanceledEventNotification = Stripe.V2.Core.Events.V1SetupIntentCanceledEventNotification;
    export type V1SetupIntentCreatedEvent = Stripe.V2.Core.Events.V1SetupIntentCreatedEvent;
    export type V1SetupIntentCreatedEventNotification = Stripe.V2.Core.Events.V1SetupIntentCreatedEventNotification;
    export type V1SetupIntentRequiresActionEvent = Stripe.V2.Core.Events.V1SetupIntentRequiresActionEvent;
    export type V1SetupIntentRequiresActionEventNotification = Stripe.V2.Core.Events.V1SetupIntentRequiresActionEventNotification;
    export type V1SetupIntentSetupFailedEvent = Stripe.V2.Core.Events.V1SetupIntentSetupFailedEvent;
    export type V1SetupIntentSetupFailedEventNotification = Stripe.V2.Core.Events.V1SetupIntentSetupFailedEventNotification;
    export type V1SetupIntentSucceededEvent = Stripe.V2.Core.Events.V1SetupIntentSucceededEvent;
    export type V1SetupIntentSucceededEventNotification = Stripe.V2.Core.Events.V1SetupIntentSucceededEventNotification;
    export type V1SigmaScheduledQueryRunCreatedEvent = Stripe.V2.Core.Events.V1SigmaScheduledQueryRunCreatedEvent;
    export type V1SigmaScheduledQueryRunCreatedEventNotification = Stripe.V2.Core.Events.V1SigmaScheduledQueryRunCreatedEventNotification;
    export type V1SourceCanceledEvent = Stripe.V2.Core.Events.V1SourceCanceledEvent;
    export type V1SourceCanceledEventNotification = Stripe.V2.Core.Events.V1SourceCanceledEventNotification;
    export type V1SourceChargeableEvent = Stripe.V2.Core.Events.V1SourceChargeableEvent;
    export type V1SourceChargeableEventNotification = Stripe.V2.Core.Events.V1SourceChargeableEventNotification;
    export type V1SourceFailedEvent = Stripe.V2.Core.Events.V1SourceFailedEvent;
    export type V1SourceFailedEventNotification = Stripe.V2.Core.Events.V1SourceFailedEventNotification;
    export type V1SourceRefundAttributesRequiredEvent = Stripe.V2.Core.Events.V1SourceRefundAttributesRequiredEvent;
    export type V1SourceRefundAttributesRequiredEventNotification = Stripe.V2.Core.Events.V1SourceRefundAttributesRequiredEventNotification;
    export type V1SubscriptionScheduleAbortedEvent = Stripe.V2.Core.Events.V1SubscriptionScheduleAbortedEvent;
    export type V1SubscriptionScheduleAbortedEventNotification = Stripe.V2.Core.Events.V1SubscriptionScheduleAbortedEventNotification;
    export type V1SubscriptionScheduleCanceledEvent = Stripe.V2.Core.Events.V1SubscriptionScheduleCanceledEvent;
    export type V1SubscriptionScheduleCanceledEventNotification = Stripe.V2.Core.Events.V1SubscriptionScheduleCanceledEventNotification;
    export type V1SubscriptionScheduleCompletedEvent = Stripe.V2.Core.Events.V1SubscriptionScheduleCompletedEvent;
    export type V1SubscriptionScheduleCompletedEventNotification = Stripe.V2.Core.Events.V1SubscriptionScheduleCompletedEventNotification;
    export type V1SubscriptionScheduleCreatedEvent = Stripe.V2.Core.Events.V1SubscriptionScheduleCreatedEvent;
    export type V1SubscriptionScheduleCreatedEventNotification = Stripe.V2.Core.Events.V1SubscriptionScheduleCreatedEventNotification;
    export type V1SubscriptionScheduleExpiringEvent = Stripe.V2.Core.Events.V1SubscriptionScheduleExpiringEvent;
    export type V1SubscriptionScheduleExpiringEventNotification = Stripe.V2.Core.Events.V1SubscriptionScheduleExpiringEventNotification;
    export type V1SubscriptionScheduleReleasedEvent = Stripe.V2.Core.Events.V1SubscriptionScheduleReleasedEvent;
    export type V1SubscriptionScheduleReleasedEventNotification = Stripe.V2.Core.Events.V1SubscriptionScheduleReleasedEventNotification;
    export type V1SubscriptionScheduleUpdatedEvent = Stripe.V2.Core.Events.V1SubscriptionScheduleUpdatedEvent;
    export type V1SubscriptionScheduleUpdatedEventNotification = Stripe.V2.Core.Events.V1SubscriptionScheduleUpdatedEventNotification;
    export type V1TaxSettingsUpdatedEvent = Stripe.V2.Core.Events.V1TaxSettingsUpdatedEvent;
    export type V1TaxSettingsUpdatedEventNotification = Stripe.V2.Core.Events.V1TaxSettingsUpdatedEventNotification;
    export type V1TaxRateCreatedEvent = Stripe.V2.Core.Events.V1TaxRateCreatedEvent;
    export type V1TaxRateCreatedEventNotification = Stripe.V2.Core.Events.V1TaxRateCreatedEventNotification;
    export type V1TaxRateUpdatedEvent = Stripe.V2.Core.Events.V1TaxRateUpdatedEvent;
    export type V1TaxRateUpdatedEventNotification = Stripe.V2.Core.Events.V1TaxRateUpdatedEventNotification;
    export type V1TerminalReaderActionFailedEvent = Stripe.V2.Core.Events.V1TerminalReaderActionFailedEvent;
    export type V1TerminalReaderActionFailedEventNotification = Stripe.V2.Core.Events.V1TerminalReaderActionFailedEventNotification;
    export type V1TerminalReaderActionSucceededEvent = Stripe.V2.Core.Events.V1TerminalReaderActionSucceededEvent;
    export type V1TerminalReaderActionSucceededEventNotification = Stripe.V2.Core.Events.V1TerminalReaderActionSucceededEventNotification;
    export type V1TerminalReaderActionUpdatedEvent = Stripe.V2.Core.Events.V1TerminalReaderActionUpdatedEvent;
    export type V1TerminalReaderActionUpdatedEventNotification = Stripe.V2.Core.Events.V1TerminalReaderActionUpdatedEventNotification;
    export type V1TestHelpersTestClockAdvancingEvent = Stripe.V2.Core.Events.V1TestHelpersTestClockAdvancingEvent;
    export type V1TestHelpersTestClockAdvancingEventNotification = Stripe.V2.Core.Events.V1TestHelpersTestClockAdvancingEventNotification;
    export type V1TestHelpersTestClockCreatedEvent = Stripe.V2.Core.Events.V1TestHelpersTestClockCreatedEvent;
    export type V1TestHelpersTestClockCreatedEventNotification = Stripe.V2.Core.Events.V1TestHelpersTestClockCreatedEventNotification;
    export type V1TestHelpersTestClockDeletedEvent = Stripe.V2.Core.Events.V1TestHelpersTestClockDeletedEvent;
    export type V1TestHelpersTestClockDeletedEventNotification = Stripe.V2.Core.Events.V1TestHelpersTestClockDeletedEventNotification;
    export type V1TestHelpersTestClockInternalFailureEvent = Stripe.V2.Core.Events.V1TestHelpersTestClockInternalFailureEvent;
    export type V1TestHelpersTestClockInternalFailureEventNotification = Stripe.V2.Core.Events.V1TestHelpersTestClockInternalFailureEventNotification;
    export type V1TestHelpersTestClockReadyEvent = Stripe.V2.Core.Events.V1TestHelpersTestClockReadyEvent;
    export type V1TestHelpersTestClockReadyEventNotification = Stripe.V2.Core.Events.V1TestHelpersTestClockReadyEventNotification;
    export type V1TopupCanceledEvent = Stripe.V2.Core.Events.V1TopupCanceledEvent;
    export type V1TopupCanceledEventNotification = Stripe.V2.Core.Events.V1TopupCanceledEventNotification;
    export type V1TopupCreatedEvent = Stripe.V2.Core.Events.V1TopupCreatedEvent;
    export type V1TopupCreatedEventNotification = Stripe.V2.Core.Events.V1TopupCreatedEventNotification;
    export type V1TopupFailedEvent = Stripe.V2.Core.Events.V1TopupFailedEvent;
    export type V1TopupFailedEventNotification = Stripe.V2.Core.Events.V1TopupFailedEventNotification;
    export type V1TopupReversedEvent = Stripe.V2.Core.Events.V1TopupReversedEvent;
    export type V1TopupReversedEventNotification = Stripe.V2.Core.Events.V1TopupReversedEventNotification;
    export type V1TopupSucceededEvent = Stripe.V2.Core.Events.V1TopupSucceededEvent;
    export type V1TopupSucceededEventNotification = Stripe.V2.Core.Events.V1TopupSucceededEventNotification;
    export type V1TransferCreatedEvent = Stripe.V2.Core.Events.V1TransferCreatedEvent;
    export type V1TransferCreatedEventNotification = Stripe.V2.Core.Events.V1TransferCreatedEventNotification;
    export type V1TransferReversedEvent = Stripe.V2.Core.Events.V1TransferReversedEvent;
    export type V1TransferReversedEventNotification = Stripe.V2.Core.Events.V1TransferReversedEventNotification;
    export type V1TransferUpdatedEvent = Stripe.V2.Core.Events.V1TransferUpdatedEvent;
    export type V1TransferUpdatedEventNotification = Stripe.V2.Core.Events.V1TransferUpdatedEventNotification;
    export type V2BillingCadenceBilledEvent = Stripe.V2.Core.Events.V2BillingCadenceBilledEvent;
    export type V2BillingCadenceBilledEventNotification = Stripe.V2.Core.Events.V2BillingCadenceBilledEventNotification;
    export type V2BillingCadenceCanceledEvent = Stripe.V2.Core.Events.V2BillingCadenceCanceledEvent;
    export type V2BillingCadenceCanceledEventNotification = Stripe.V2.Core.Events.V2BillingCadenceCanceledEventNotification;
    export type V2BillingCadenceCreatedEvent = Stripe.V2.Core.Events.V2BillingCadenceCreatedEvent;
    export type V2BillingCadenceCreatedEventNotification = Stripe.V2.Core.Events.V2BillingCadenceCreatedEventNotification;
    export type V2BillingLicenseFeeCreatedEvent = Stripe.V2.Core.Events.V2BillingLicenseFeeCreatedEvent;
    export type V2BillingLicenseFeeCreatedEventNotification = Stripe.V2.Core.Events.V2BillingLicenseFeeCreatedEventNotification;
    export type V2BillingLicenseFeeUpdatedEvent = Stripe.V2.Core.Events.V2BillingLicenseFeeUpdatedEvent;
    export type V2BillingLicenseFeeUpdatedEventNotification = Stripe.V2.Core.Events.V2BillingLicenseFeeUpdatedEventNotification;
    export type V2BillingLicenseFeeVersionCreatedEvent = Stripe.V2.Core.Events.V2BillingLicenseFeeVersionCreatedEvent;
    export type V2BillingLicenseFeeVersionCreatedEventNotification = Stripe.V2.Core.Events.V2BillingLicenseFeeVersionCreatedEventNotification;
    export type V2BillingLicensedItemCreatedEvent = Stripe.V2.Core.Events.V2BillingLicensedItemCreatedEvent;
    export type V2BillingLicensedItemCreatedEventNotification = Stripe.V2.Core.Events.V2BillingLicensedItemCreatedEventNotification;
    export type V2BillingLicensedItemUpdatedEvent = Stripe.V2.Core.Events.V2BillingLicensedItemUpdatedEvent;
    export type V2BillingLicensedItemUpdatedEventNotification = Stripe.V2.Core.Events.V2BillingLicensedItemUpdatedEventNotification;
    export type V2BillingMeteredItemCreatedEvent = Stripe.V2.Core.Events.V2BillingMeteredItemCreatedEvent;
    export type V2BillingMeteredItemCreatedEventNotification = Stripe.V2.Core.Events.V2BillingMeteredItemCreatedEventNotification;
    export type V2BillingMeteredItemUpdatedEvent = Stripe.V2.Core.Events.V2BillingMeteredItemUpdatedEvent;
    export type V2BillingMeteredItemUpdatedEventNotification = Stripe.V2.Core.Events.V2BillingMeteredItemUpdatedEventNotification;
    export type V2BillingPricingPlanCreatedEvent = Stripe.V2.Core.Events.V2BillingPricingPlanCreatedEvent;
    export type V2BillingPricingPlanCreatedEventNotification = Stripe.V2.Core.Events.V2BillingPricingPlanCreatedEventNotification;
    export type V2BillingPricingPlanUpdatedEvent = Stripe.V2.Core.Events.V2BillingPricingPlanUpdatedEvent;
    export type V2BillingPricingPlanUpdatedEventNotification = Stripe.V2.Core.Events.V2BillingPricingPlanUpdatedEventNotification;
    export type V2BillingPricingPlanComponentCreatedEvent = Stripe.V2.Core.Events.V2BillingPricingPlanComponentCreatedEvent;
    export type V2BillingPricingPlanComponentCreatedEventNotification = Stripe.V2.Core.Events.V2BillingPricingPlanComponentCreatedEventNotification;
    export type V2BillingPricingPlanComponentUpdatedEvent = Stripe.V2.Core.Events.V2BillingPricingPlanComponentUpdatedEvent;
    export type V2BillingPricingPlanComponentUpdatedEventNotification = Stripe.V2.Core.Events.V2BillingPricingPlanComponentUpdatedEventNotification;
    export type V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEvent = Stripe.V2.Core.Events.V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEvent;
    export type V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEventNotification = Stripe.V2.Core.Events.V2BillingPricingPlanSubscriptionCollectionAwaitingCustomerActionEventNotification;
    export type V2BillingPricingPlanSubscriptionCollectionCurrentEvent = Stripe.V2.Core.Events.V2BillingPricingPlanSubscriptionCollectionCurrentEvent;
    export type V2BillingPricingPlanSubscriptionCollectionCurrentEventNotification = Stripe.V2.Core.Events.V2BillingPricingPlanSubscriptionCollectionCurrentEventNotification;
    export type V2BillingPricingPlanSubscriptionCollectionPastDueEvent = Stripe.V2.Core.Events.V2BillingPricingPlanSubscriptionCollectionPastDueEvent;
    export type V2BillingPricingPlanSubscriptionCollectionPastDueEventNotification = Stripe.V2.Core.Events.V2BillingPricingPlanSubscriptionCollectionPastDueEventNotification;
    export type V2BillingPricingPlanSubscriptionCollectionPausedEvent = Stripe.V2.Core.Events.V2BillingPricingPlanSubscriptionCollectionPausedEvent;
    export type V2BillingPricingPlanSubscriptionCollectionPausedEventNotification = Stripe.V2.Core.Events.V2BillingPricingPlanSubscriptionCollectionPausedEventNotification;
    export type V2BillingPricingPlanSubscriptionCollectionUnpaidEvent = Stripe.V2.Core.Events.V2BillingPricingPlanSubscriptionCollectionUnpaidEvent;
    export type V2BillingPricingPlanSubscriptionCollectionUnpaidEventNotification = Stripe.V2.Core.Events.V2BillingPricingPlanSubscriptionCollectionUnpaidEventNotification;
    export type V2BillingPricingPlanSubscriptionServicingActivatedEvent = Stripe.V2.Core.Events.V2BillingPricingPlanSubscriptionServicingActivatedEvent;
    export type V2BillingPricingPlanSubscriptionServicingActivatedEventNotification = Stripe.V2.Core.Events.V2BillingPricingPlanSubscriptionServicingActivatedEventNotification;
    export type V2BillingPricingPlanSubscriptionServicingCanceledEvent = Stripe.V2.Core.Events.V2BillingPricingPlanSubscriptionServicingCanceledEvent;
    export type V2BillingPricingPlanSubscriptionServicingCanceledEventNotification = Stripe.V2.Core.Events.V2BillingPricingPlanSubscriptionServicingCanceledEventNotification;
    export type V2BillingPricingPlanSubscriptionServicingPausedEvent = Stripe.V2.Core.Events.V2BillingPricingPlanSubscriptionServicingPausedEvent;
    export type V2BillingPricingPlanSubscriptionServicingPausedEventNotification = Stripe.V2.Core.Events.V2BillingPricingPlanSubscriptionServicingPausedEventNotification;
    export type V2BillingPricingPlanVersionCreatedEvent = Stripe.V2.Core.Events.V2BillingPricingPlanVersionCreatedEvent;
    export type V2BillingPricingPlanVersionCreatedEventNotification = Stripe.V2.Core.Events.V2BillingPricingPlanVersionCreatedEventNotification;
    export type V2BillingRateCardCreatedEvent = Stripe.V2.Core.Events.V2BillingRateCardCreatedEvent;
    export type V2BillingRateCardCreatedEventNotification = Stripe.V2.Core.Events.V2BillingRateCardCreatedEventNotification;
    export type V2BillingRateCardUpdatedEvent = Stripe.V2.Core.Events.V2BillingRateCardUpdatedEvent;
    export type V2BillingRateCardUpdatedEventNotification = Stripe.V2.Core.Events.V2BillingRateCardUpdatedEventNotification;
    export type V2BillingRateCardCustomPricingUnitOverageRateCreatedEvent = Stripe.V2.Core.Events.V2BillingRateCardCustomPricingUnitOverageRateCreatedEvent;
    export type V2BillingRateCardCustomPricingUnitOverageRateCreatedEventNotification = Stripe.V2.Core.Events.V2BillingRateCardCustomPricingUnitOverageRateCreatedEventNotification;
    export type V2BillingRateCardRateCreatedEvent = Stripe.V2.Core.Events.V2BillingRateCardRateCreatedEvent;
    export type V2BillingRateCardRateCreatedEventNotification = Stripe.V2.Core.Events.V2BillingRateCardRateCreatedEventNotification;
    export type V2BillingRateCardSubscriptionActivatedEvent = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionActivatedEvent;
    export type V2BillingRateCardSubscriptionActivatedEventNotification = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionActivatedEventNotification;
    export type V2BillingRateCardSubscriptionCanceledEvent = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionCanceledEvent;
    export type V2BillingRateCardSubscriptionCanceledEventNotification = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionCanceledEventNotification;
    export type V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEvent;
    export type V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEventNotification = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionCollectionAwaitingCustomerActionEventNotification;
    export type V2BillingRateCardSubscriptionCollectionCurrentEvent = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionCollectionCurrentEvent;
    export type V2BillingRateCardSubscriptionCollectionCurrentEventNotification = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionCollectionCurrentEventNotification;
    export type V2BillingRateCardSubscriptionCollectionPastDueEvent = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionCollectionPastDueEvent;
    export type V2BillingRateCardSubscriptionCollectionPastDueEventNotification = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionCollectionPastDueEventNotification;
    export type V2BillingRateCardSubscriptionCollectionPausedEvent = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionCollectionPausedEvent;
    export type V2BillingRateCardSubscriptionCollectionPausedEventNotification = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionCollectionPausedEventNotification;
    export type V2BillingRateCardSubscriptionCollectionUnpaidEvent = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionCollectionUnpaidEvent;
    export type V2BillingRateCardSubscriptionCollectionUnpaidEventNotification = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionCollectionUnpaidEventNotification;
    export type V2BillingRateCardSubscriptionServicingActivatedEvent = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionServicingActivatedEvent;
    export type V2BillingRateCardSubscriptionServicingActivatedEventNotification = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionServicingActivatedEventNotification;
    export type V2BillingRateCardSubscriptionServicingCanceledEvent = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionServicingCanceledEvent;
    export type V2BillingRateCardSubscriptionServicingCanceledEventNotification = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionServicingCanceledEventNotification;
    export type V2BillingRateCardSubscriptionServicingPausedEvent = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionServicingPausedEvent;
    export type V2BillingRateCardSubscriptionServicingPausedEventNotification = Stripe.V2.Core.Events.V2BillingRateCardSubscriptionServicingPausedEventNotification;
    export type V2BillingRateCardVersionCreatedEvent = Stripe.V2.Core.Events.V2BillingRateCardVersionCreatedEvent;
    export type V2BillingRateCardVersionCreatedEventNotification = Stripe.V2.Core.Events.V2BillingRateCardVersionCreatedEventNotification;
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
    export type V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEventNotification;
    export type V2CoreAccountIncludingConfigurationCardCreatorUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationCardCreatorUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationCardCreatorUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationCardCreatorUpdatedEventNotification;
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
    export type V2CoreAccountSignalsFraudulentWebsiteReadyEvent = Stripe.V2.Core.Events.V2CoreAccountSignalsFraudulentWebsiteReadyEvent;
    export type V2CoreAccountSignalsFraudulentWebsiteReadyEventNotification = Stripe.V2.Core.Events.V2CoreAccountSignalsFraudulentWebsiteReadyEventNotification;
    export type V2CoreApprovalRequestApprovedEvent = Stripe.V2.Core.Events.V2CoreApprovalRequestApprovedEvent;
    export type V2CoreApprovalRequestApprovedEventNotification = Stripe.V2.Core.Events.V2CoreApprovalRequestApprovedEventNotification;
    export type V2CoreApprovalRequestCanceledEvent = Stripe.V2.Core.Events.V2CoreApprovalRequestCanceledEvent;
    export type V2CoreApprovalRequestCanceledEventNotification = Stripe.V2.Core.Events.V2CoreApprovalRequestCanceledEventNotification;
    export type V2CoreApprovalRequestCreatedEvent = Stripe.V2.Core.Events.V2CoreApprovalRequestCreatedEvent;
    export type V2CoreApprovalRequestCreatedEventNotification = Stripe.V2.Core.Events.V2CoreApprovalRequestCreatedEventNotification;
    export type V2CoreApprovalRequestExpiredEvent = Stripe.V2.Core.Events.V2CoreApprovalRequestExpiredEvent;
    export type V2CoreApprovalRequestExpiredEventNotification = Stripe.V2.Core.Events.V2CoreApprovalRequestExpiredEventNotification;
    export type V2CoreApprovalRequestFailedEvent = Stripe.V2.Core.Events.V2CoreApprovalRequestFailedEvent;
    export type V2CoreApprovalRequestFailedEventNotification = Stripe.V2.Core.Events.V2CoreApprovalRequestFailedEventNotification;
    export type V2CoreApprovalRequestRejectedEvent = Stripe.V2.Core.Events.V2CoreApprovalRequestRejectedEvent;
    export type V2CoreApprovalRequestRejectedEventNotification = Stripe.V2.Core.Events.V2CoreApprovalRequestRejectedEventNotification;
    export type V2CoreApprovalRequestSucceededEvent = Stripe.V2.Core.Events.V2CoreApprovalRequestSucceededEvent;
    export type V2CoreApprovalRequestSucceededEventNotification = Stripe.V2.Core.Events.V2CoreApprovalRequestSucceededEventNotification;
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
    export type V2CoreClaimableSandboxClaimedEvent = Stripe.V2.Core.Events.V2CoreClaimableSandboxClaimedEvent;
    export type V2CoreClaimableSandboxClaimedEventNotification = Stripe.V2.Core.Events.V2CoreClaimableSandboxClaimedEventNotification;
    export type V2CoreClaimableSandboxCreatedEvent = Stripe.V2.Core.Events.V2CoreClaimableSandboxCreatedEvent;
    export type V2CoreClaimableSandboxCreatedEventNotification = Stripe.V2.Core.Events.V2CoreClaimableSandboxCreatedEventNotification;
    export type V2CoreClaimableSandboxExpiredEvent = Stripe.V2.Core.Events.V2CoreClaimableSandboxExpiredEvent;
    export type V2CoreClaimableSandboxExpiredEventNotification = Stripe.V2.Core.Events.V2CoreClaimableSandboxExpiredEventNotification;
    export type V2CoreClaimableSandboxExpiringEvent = Stripe.V2.Core.Events.V2CoreClaimableSandboxExpiringEvent;
    export type V2CoreClaimableSandboxExpiringEventNotification = Stripe.V2.Core.Events.V2CoreClaimableSandboxExpiringEventNotification;
    export type V2CoreClaimableSandboxUpdatedEvent = Stripe.V2.Core.Events.V2CoreClaimableSandboxUpdatedEvent;
    export type V2CoreClaimableSandboxUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreClaimableSandboxUpdatedEventNotification;
    export type V2CoreEventDestinationPingEvent = Stripe.V2.Core.Events.V2CoreEventDestinationPingEvent;
    export type V2CoreEventDestinationPingEventNotification = Stripe.V2.Core.Events.V2CoreEventDestinationPingEventNotification;
    export type V2CoreHealthApiErrorFiringEvent = Stripe.V2.Core.Events.V2CoreHealthApiErrorFiringEvent;
    export type V2CoreHealthApiErrorFiringEventNotification = Stripe.V2.Core.Events.V2CoreHealthApiErrorFiringEventNotification;
    export type V2CoreHealthApiErrorResolvedEvent = Stripe.V2.Core.Events.V2CoreHealthApiErrorResolvedEvent;
    export type V2CoreHealthApiErrorResolvedEventNotification = Stripe.V2.Core.Events.V2CoreHealthApiErrorResolvedEventNotification;
    export type V2CoreHealthApiLatencyFiringEvent = Stripe.V2.Core.Events.V2CoreHealthApiLatencyFiringEvent;
    export type V2CoreHealthApiLatencyFiringEventNotification = Stripe.V2.Core.Events.V2CoreHealthApiLatencyFiringEventNotification;
    export type V2CoreHealthApiLatencyResolvedEvent = Stripe.V2.Core.Events.V2CoreHealthApiLatencyResolvedEvent;
    export type V2CoreHealthApiLatencyResolvedEventNotification = Stripe.V2.Core.Events.V2CoreHealthApiLatencyResolvedEventNotification;
    export type V2CoreHealthAuthorizationRateDropFiringEvent = Stripe.V2.Core.Events.V2CoreHealthAuthorizationRateDropFiringEvent;
    export type V2CoreHealthAuthorizationRateDropFiringEventNotification = Stripe.V2.Core.Events.V2CoreHealthAuthorizationRateDropFiringEventNotification;
    export type V2CoreHealthAuthorizationRateDropResolvedEvent = Stripe.V2.Core.Events.V2CoreHealthAuthorizationRateDropResolvedEvent;
    export type V2CoreHealthAuthorizationRateDropResolvedEventNotification = Stripe.V2.Core.Events.V2CoreHealthAuthorizationRateDropResolvedEventNotification;
    export type V2CoreHealthElementsErrorFiringEvent = Stripe.V2.Core.Events.V2CoreHealthElementsErrorFiringEvent;
    export type V2CoreHealthElementsErrorFiringEventNotification = Stripe.V2.Core.Events.V2CoreHealthElementsErrorFiringEventNotification;
    export type V2CoreHealthElementsErrorResolvedEvent = Stripe.V2.Core.Events.V2CoreHealthElementsErrorResolvedEvent;
    export type V2CoreHealthElementsErrorResolvedEventNotification = Stripe.V2.Core.Events.V2CoreHealthElementsErrorResolvedEventNotification;
    export type V2CoreHealthEventGenerationFailureResolvedEvent = Stripe.V2.Core.Events.V2CoreHealthEventGenerationFailureResolvedEvent;
    export type V2CoreHealthEventGenerationFailureResolvedEventNotification = Stripe.V2.Core.Events.V2CoreHealthEventGenerationFailureResolvedEventNotification;
    export type V2CoreHealthFraudRateIncreasedEvent = Stripe.V2.Core.Events.V2CoreHealthFraudRateIncreasedEvent;
    export type V2CoreHealthFraudRateIncreasedEventNotification = Stripe.V2.Core.Events.V2CoreHealthFraudRateIncreasedEventNotification;
    export type V2CoreHealthInvoiceCountDroppedFiringEvent = Stripe.V2.Core.Events.V2CoreHealthInvoiceCountDroppedFiringEvent;
    export type V2CoreHealthInvoiceCountDroppedFiringEventNotification = Stripe.V2.Core.Events.V2CoreHealthInvoiceCountDroppedFiringEventNotification;
    export type V2CoreHealthInvoiceCountDroppedResolvedEvent = Stripe.V2.Core.Events.V2CoreHealthInvoiceCountDroppedResolvedEvent;
    export type V2CoreHealthInvoiceCountDroppedResolvedEventNotification = Stripe.V2.Core.Events.V2CoreHealthInvoiceCountDroppedResolvedEventNotification;
    export type V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent = Stripe.V2.Core.Events.V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent;
    export type V2CoreHealthIssuingAuthorizationRequestErrorsFiringEventNotification = Stripe.V2.Core.Events.V2CoreHealthIssuingAuthorizationRequestErrorsFiringEventNotification;
    export type V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent = Stripe.V2.Core.Events.V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent;
    export type V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEventNotification = Stripe.V2.Core.Events.V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEventNotification;
    export type V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent = Stripe.V2.Core.Events.V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent;
    export type V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEventNotification = Stripe.V2.Core.Events.V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEventNotification;
    export type V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent = Stripe.V2.Core.Events.V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent;
    export type V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEventNotification = Stripe.V2.Core.Events.V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEventNotification;
    export type V2CoreHealthMeterEventSummariesDelayedFiringEvent = Stripe.V2.Core.Events.V2CoreHealthMeterEventSummariesDelayedFiringEvent;
    export type V2CoreHealthMeterEventSummariesDelayedFiringEventNotification = Stripe.V2.Core.Events.V2CoreHealthMeterEventSummariesDelayedFiringEventNotification;
    export type V2CoreHealthMeterEventSummariesDelayedResolvedEvent = Stripe.V2.Core.Events.V2CoreHealthMeterEventSummariesDelayedResolvedEvent;
    export type V2CoreHealthMeterEventSummariesDelayedResolvedEventNotification = Stripe.V2.Core.Events.V2CoreHealthMeterEventSummariesDelayedResolvedEventNotification;
    export type V2CoreHealthPaymentMethodErrorFiringEvent = Stripe.V2.Core.Events.V2CoreHealthPaymentMethodErrorFiringEvent;
    export type V2CoreHealthPaymentMethodErrorFiringEventNotification = Stripe.V2.Core.Events.V2CoreHealthPaymentMethodErrorFiringEventNotification;
    export type V2CoreHealthPaymentMethodErrorResolvedEvent = Stripe.V2.Core.Events.V2CoreHealthPaymentMethodErrorResolvedEvent;
    export type V2CoreHealthPaymentMethodErrorResolvedEventNotification = Stripe.V2.Core.Events.V2CoreHealthPaymentMethodErrorResolvedEventNotification;
    export type V2CoreHealthSepaDebitDelayedFiringEvent = Stripe.V2.Core.Events.V2CoreHealthSepaDebitDelayedFiringEvent;
    export type V2CoreHealthSepaDebitDelayedFiringEventNotification = Stripe.V2.Core.Events.V2CoreHealthSepaDebitDelayedFiringEventNotification;
    export type V2CoreHealthSepaDebitDelayedResolvedEvent = Stripe.V2.Core.Events.V2CoreHealthSepaDebitDelayedResolvedEvent;
    export type V2CoreHealthSepaDebitDelayedResolvedEventNotification = Stripe.V2.Core.Events.V2CoreHealthSepaDebitDelayedResolvedEventNotification;
    export type V2CoreHealthTrafficVolumeDropFiringEvent = Stripe.V2.Core.Events.V2CoreHealthTrafficVolumeDropFiringEvent;
    export type V2CoreHealthTrafficVolumeDropFiringEventNotification = Stripe.V2.Core.Events.V2CoreHealthTrafficVolumeDropFiringEventNotification;
    export type V2CoreHealthTrafficVolumeDropResolvedEvent = Stripe.V2.Core.Events.V2CoreHealthTrafficVolumeDropResolvedEvent;
    export type V2CoreHealthTrafficVolumeDropResolvedEventNotification = Stripe.V2.Core.Events.V2CoreHealthTrafficVolumeDropResolvedEventNotification;
    export type V2CoreHealthWebhookLatencyFiringEvent = Stripe.V2.Core.Events.V2CoreHealthWebhookLatencyFiringEvent;
    export type V2CoreHealthWebhookLatencyFiringEventNotification = Stripe.V2.Core.Events.V2CoreHealthWebhookLatencyFiringEventNotification;
    export type V2CoreHealthWebhookLatencyResolvedEvent = Stripe.V2.Core.Events.V2CoreHealthWebhookLatencyResolvedEvent;
    export type V2CoreHealthWebhookLatencyResolvedEventNotification = Stripe.V2.Core.Events.V2CoreHealthWebhookLatencyResolvedEventNotification;
    export type V2DataReportingQueryRunCreatedEvent = Stripe.V2.Core.Events.V2DataReportingQueryRunCreatedEvent;
    export type V2DataReportingQueryRunCreatedEventNotification = Stripe.V2.Core.Events.V2DataReportingQueryRunCreatedEventNotification;
    export type V2DataReportingQueryRunFailedEvent = Stripe.V2.Core.Events.V2DataReportingQueryRunFailedEvent;
    export type V2DataReportingQueryRunFailedEventNotification = Stripe.V2.Core.Events.V2DataReportingQueryRunFailedEventNotification;
    export type V2DataReportingQueryRunSucceededEvent = Stripe.V2.Core.Events.V2DataReportingQueryRunSucceededEvent;
    export type V2DataReportingQueryRunSucceededEventNotification = Stripe.V2.Core.Events.V2DataReportingQueryRunSucceededEventNotification;
    export type V2DataReportingQueryRunUpdatedEvent = Stripe.V2.Core.Events.V2DataReportingQueryRunUpdatedEvent;
    export type V2DataReportingQueryRunUpdatedEventNotification = Stripe.V2.Core.Events.V2DataReportingQueryRunUpdatedEventNotification;
    export type V2ExtendExtensionRunFailedEvent = Stripe.V2.Core.Events.V2ExtendExtensionRunFailedEvent;
    export type V2ExtendExtensionRunFailedEventNotification = Stripe.V2.Core.Events.V2ExtendExtensionRunFailedEventNotification;
    export type V2ExtendWorkflowRunFailedEvent = Stripe.V2.Core.Events.V2ExtendWorkflowRunFailedEvent;
    export type V2ExtendWorkflowRunFailedEventNotification = Stripe.V2.Core.Events.V2ExtendWorkflowRunFailedEventNotification;
    export type V2ExtendWorkflowRunStartedEvent = Stripe.V2.Core.Events.V2ExtendWorkflowRunStartedEvent;
    export type V2ExtendWorkflowRunStartedEventNotification = Stripe.V2.Core.Events.V2ExtendWorkflowRunStartedEventNotification;
    export type V2ExtendWorkflowRunSucceededEvent = Stripe.V2.Core.Events.V2ExtendWorkflowRunSucceededEvent;
    export type V2ExtendWorkflowRunSucceededEventNotification = Stripe.V2.Core.Events.V2ExtendWorkflowRunSucceededEventNotification;
    export type V2IamApiKeyCreatedEvent = Stripe.V2.Core.Events.V2IamApiKeyCreatedEvent;
    export type V2IamApiKeyCreatedEventNotification = Stripe.V2.Core.Events.V2IamApiKeyCreatedEventNotification;
    export type V2IamApiKeyDefaultSecretRevealedEvent = Stripe.V2.Core.Events.V2IamApiKeyDefaultSecretRevealedEvent;
    export type V2IamApiKeyDefaultSecretRevealedEventNotification = Stripe.V2.Core.Events.V2IamApiKeyDefaultSecretRevealedEventNotification;
    export type V2IamApiKeyExpiredEvent = Stripe.V2.Core.Events.V2IamApiKeyExpiredEvent;
    export type V2IamApiKeyExpiredEventNotification = Stripe.V2.Core.Events.V2IamApiKeyExpiredEventNotification;
    export type V2IamApiKeyPermissionsUpdatedEvent = Stripe.V2.Core.Events.V2IamApiKeyPermissionsUpdatedEvent;
    export type V2IamApiKeyPermissionsUpdatedEventNotification = Stripe.V2.Core.Events.V2IamApiKeyPermissionsUpdatedEventNotification;
    export type V2IamApiKeyRotatedEvent = Stripe.V2.Core.Events.V2IamApiKeyRotatedEvent;
    export type V2IamApiKeyRotatedEventNotification = Stripe.V2.Core.Events.V2IamApiKeyRotatedEventNotification;
    export type V2IamApiKeyUpdatedEvent = Stripe.V2.Core.Events.V2IamApiKeyUpdatedEvent;
    export type V2IamApiKeyUpdatedEventNotification = Stripe.V2.Core.Events.V2IamApiKeyUpdatedEventNotification;
    export type V2IamStripeAccessGrantApprovedEvent = Stripe.V2.Core.Events.V2IamStripeAccessGrantApprovedEvent;
    export type V2IamStripeAccessGrantApprovedEventNotification = Stripe.V2.Core.Events.V2IamStripeAccessGrantApprovedEventNotification;
    export type V2IamStripeAccessGrantCanceledEvent = Stripe.V2.Core.Events.V2IamStripeAccessGrantCanceledEvent;
    export type V2IamStripeAccessGrantCanceledEventNotification = Stripe.V2.Core.Events.V2IamStripeAccessGrantCanceledEventNotification;
    export type V2IamStripeAccessGrantDeniedEvent = Stripe.V2.Core.Events.V2IamStripeAccessGrantDeniedEvent;
    export type V2IamStripeAccessGrantDeniedEventNotification = Stripe.V2.Core.Events.V2IamStripeAccessGrantDeniedEventNotification;
    export type V2IamStripeAccessGrantRemovedEvent = Stripe.V2.Core.Events.V2IamStripeAccessGrantRemovedEvent;
    export type V2IamStripeAccessGrantRemovedEventNotification = Stripe.V2.Core.Events.V2IamStripeAccessGrantRemovedEventNotification;
    export type V2IamStripeAccessGrantRequestedEvent = Stripe.V2.Core.Events.V2IamStripeAccessGrantRequestedEvent;
    export type V2IamStripeAccessGrantRequestedEventNotification = Stripe.V2.Core.Events.V2IamStripeAccessGrantRequestedEventNotification;
    export type V2IamStripeAccessGrantUpdatedEvent = Stripe.V2.Core.Events.V2IamStripeAccessGrantUpdatedEvent;
    export type V2IamStripeAccessGrantUpdatedEventNotification = Stripe.V2.Core.Events.V2IamStripeAccessGrantUpdatedEventNotification;
    export type V2MoneyManagementAdjustmentCreatedEvent = Stripe.V2.Core.Events.V2MoneyManagementAdjustmentCreatedEvent;
    export type V2MoneyManagementAdjustmentCreatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementAdjustmentCreatedEventNotification;
    export type V2MoneyManagementFinancialAccountCreatedEvent = Stripe.V2.Core.Events.V2MoneyManagementFinancialAccountCreatedEvent;
    export type V2MoneyManagementFinancialAccountCreatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementFinancialAccountCreatedEventNotification;
    export type V2MoneyManagementFinancialAccountUpdatedEvent = Stripe.V2.Core.Events.V2MoneyManagementFinancialAccountUpdatedEvent;
    export type V2MoneyManagementFinancialAccountUpdatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementFinancialAccountUpdatedEventNotification;
    export type V2MoneyManagementFinancialAccountStatementCreatedEvent = Stripe.V2.Core.Events.V2MoneyManagementFinancialAccountStatementCreatedEvent;
    export type V2MoneyManagementFinancialAccountStatementCreatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementFinancialAccountStatementCreatedEventNotification;
    export type V2MoneyManagementFinancialAccountStatementRestatedEvent = Stripe.V2.Core.Events.V2MoneyManagementFinancialAccountStatementRestatedEvent;
    export type V2MoneyManagementFinancialAccountStatementRestatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementFinancialAccountStatementRestatedEventNotification;
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
    export type V2MoneyManagementRecipientVerificationCreatedEvent = Stripe.V2.Core.Events.V2MoneyManagementRecipientVerificationCreatedEvent;
    export type V2MoneyManagementRecipientVerificationCreatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementRecipientVerificationCreatedEventNotification;
    export type V2MoneyManagementRecipientVerificationUpdatedEvent = Stripe.V2.Core.Events.V2MoneyManagementRecipientVerificationUpdatedEvent;
    export type V2MoneyManagementRecipientVerificationUpdatedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementRecipientVerificationUpdatedEventNotification;
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
    export type V2PaymentsOffSessionPaymentAttemptFailedEvent = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentAttemptFailedEvent;
    export type V2PaymentsOffSessionPaymentAttemptFailedEventNotification = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentAttemptFailedEventNotification;
    export type V2PaymentsOffSessionPaymentAttemptStartedEvent = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentAttemptStartedEvent;
    export type V2PaymentsOffSessionPaymentAttemptStartedEventNotification = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentAttemptStartedEventNotification;
    export type V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent;
    export type V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEventNotification = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEventNotification;
    export type V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent;
    export type V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEventNotification = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEventNotification;
    export type V2PaymentsOffSessionPaymentCanceledEvent = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentCanceledEvent;
    export type V2PaymentsOffSessionPaymentCanceledEventNotification = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentCanceledEventNotification;
    export type V2PaymentsOffSessionPaymentCreatedEvent = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentCreatedEvent;
    export type V2PaymentsOffSessionPaymentCreatedEventNotification = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentCreatedEventNotification;
    export type V2PaymentsOffSessionPaymentFailedEvent = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentFailedEvent;
    export type V2PaymentsOffSessionPaymentFailedEventNotification = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentFailedEventNotification;
    export type V2PaymentsOffSessionPaymentPausedEvent = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentPausedEvent;
    export type V2PaymentsOffSessionPaymentPausedEventNotification = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentPausedEventNotification;
    export type V2PaymentsOffSessionPaymentRequiresCaptureEvent = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentRequiresCaptureEvent;
    export type V2PaymentsOffSessionPaymentRequiresCaptureEventNotification = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentRequiresCaptureEventNotification;
    export type V2PaymentsOffSessionPaymentResumedEvent = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentResumedEvent;
    export type V2PaymentsOffSessionPaymentResumedEventNotification = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentResumedEventNotification;
    export type V2PaymentsOffSessionPaymentSucceededEvent = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentSucceededEvent;
    export type V2PaymentsOffSessionPaymentSucceededEventNotification = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentSucceededEventNotification;
    export type V2PaymentsSettlementAllocationIntentCanceledEvent = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentCanceledEvent;
    export type V2PaymentsSettlementAllocationIntentCanceledEventNotification = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentCanceledEventNotification;
    export type V2PaymentsSettlementAllocationIntentCreatedEvent = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentCreatedEvent;
    export type V2PaymentsSettlementAllocationIntentCreatedEventNotification = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentCreatedEventNotification;
    export type V2PaymentsSettlementAllocationIntentErroredEvent = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentErroredEvent;
    export type V2PaymentsSettlementAllocationIntentErroredEventNotification = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentErroredEventNotification;
    export type V2PaymentsSettlementAllocationIntentFundsNotReceivedEvent = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentFundsNotReceivedEvent;
    export type V2PaymentsSettlementAllocationIntentFundsNotReceivedEventNotification = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentFundsNotReceivedEventNotification;
    export type V2PaymentsSettlementAllocationIntentMatchedEvent = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentMatchedEvent;
    export type V2PaymentsSettlementAllocationIntentMatchedEventNotification = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentMatchedEventNotification;
    export type V2PaymentsSettlementAllocationIntentNotFoundEvent = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentNotFoundEvent;
    export type V2PaymentsSettlementAllocationIntentNotFoundEventNotification = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentNotFoundEventNotification;
    export type V2PaymentsSettlementAllocationIntentSettledEvent = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentSettledEvent;
    export type V2PaymentsSettlementAllocationIntentSettledEventNotification = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentSettledEventNotification;
    export type V2PaymentsSettlementAllocationIntentSubmittedEvent = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentSubmittedEvent;
    export type V2PaymentsSettlementAllocationIntentSubmittedEventNotification = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentSubmittedEventNotification;
    export type V2PaymentsSettlementAllocationIntentSplitCanceledEvent = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentSplitCanceledEvent;
    export type V2PaymentsSettlementAllocationIntentSplitCanceledEventNotification = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentSplitCanceledEventNotification;
    export type V2PaymentsSettlementAllocationIntentSplitCreatedEvent = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentSplitCreatedEvent;
    export type V2PaymentsSettlementAllocationIntentSplitCreatedEventNotification = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentSplitCreatedEventNotification;
    export type V2PaymentsSettlementAllocationIntentSplitSettledEvent = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentSplitSettledEvent;
    export type V2PaymentsSettlementAllocationIntentSplitSettledEventNotification = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentSplitSettledEventNotification;
    export type V2ReportingReportRunCreatedEvent = Stripe.V2.Core.Events.V2ReportingReportRunCreatedEvent;
    export type V2ReportingReportRunCreatedEventNotification = Stripe.V2.Core.Events.V2ReportingReportRunCreatedEventNotification;
    export type V2ReportingReportRunFailedEvent = Stripe.V2.Core.Events.V2ReportingReportRunFailedEvent;
    export type V2ReportingReportRunFailedEventNotification = Stripe.V2.Core.Events.V2ReportingReportRunFailedEventNotification;
    export type V2ReportingReportRunSucceededEvent = Stripe.V2.Core.Events.V2ReportingReportRunSucceededEvent;
    export type V2ReportingReportRunSucceededEventNotification = Stripe.V2.Core.Events.V2ReportingReportRunSucceededEventNotification;
    export type V2ReportingReportRunUpdatedEvent = Stripe.V2.Core.Events.V2ReportingReportRunUpdatedEvent;
    export type V2ReportingReportRunUpdatedEventNotification = Stripe.V2.Core.Events.V2ReportingReportRunUpdatedEventNotification;
    export type V2SignalsAccountSignalFraudulentMerchantReadyEvent = Stripe.V2.Core.Events.V2SignalsAccountSignalFraudulentMerchantReadyEvent;
    export type V2SignalsAccountSignalFraudulentMerchantReadyEventNotification = Stripe.V2.Core.Events.V2SignalsAccountSignalFraudulentMerchantReadyEventNotification;
    export type V2SignalsAccountSignalMerchantDelinquencyReadyEvent = Stripe.V2.Core.Events.V2SignalsAccountSignalMerchantDelinquencyReadyEvent;
    export type V2SignalsAccountSignalMerchantDelinquencyReadyEventNotification = Stripe.V2.Core.Events.V2SignalsAccountSignalMerchantDelinquencyReadyEventNotification;
    export namespace V1AccountSignalsIncludingDelinquencyCreatedEvent {
      export type Data = Stripe.V2.Core.Events.V1AccountSignalsIncludingDelinquencyCreatedEvent.Data;
    }
    export namespace V1BillingMeterErrorReportTriggeredEvent {
      export type Data = Stripe_.V2.Core.Events.V1BillingMeterErrorReportTriggeredEvent.Data;
    }
    export namespace V1BillingMeterNoMeterFoundEvent {
      export type Data = Stripe_.V2.Core.Events.V1BillingMeterNoMeterFoundEvent.Data;
    }
    export namespace V2BillingCadenceBilledEvent {
      export type Data = Stripe.V2.Core.Events.V2BillingCadenceBilledEvent.Data;
    }
    export namespace V2BillingCadenceCreatedEvent {
      export type Data = Stripe.V2.Core.Events.V2BillingCadenceCreatedEvent.Data;
    }
    export namespace V2BillingLicenseFeeVersionCreatedEvent {
      export type Data = Stripe.V2.Core.Events.V2BillingLicenseFeeVersionCreatedEvent.Data;
    }
    export namespace V2BillingPricingPlanComponentCreatedEvent {
      export type Data = Stripe.V2.Core.Events.V2BillingPricingPlanComponentCreatedEvent.Data;
    }
    export namespace V2BillingPricingPlanComponentUpdatedEvent {
      export type Data = Stripe.V2.Core.Events.V2BillingPricingPlanComponentUpdatedEvent.Data;
    }
    export namespace V2BillingPricingPlanVersionCreatedEvent {
      export type Data = Stripe.V2.Core.Events.V2BillingPricingPlanVersionCreatedEvent.Data;
    }
    export namespace V2BillingRateCardCreatedEvent {
      export type Data = Stripe.V2.Core.Events.V2BillingRateCardCreatedEvent.Data;
    }
    export namespace V2BillingRateCardCustomPricingUnitOverageRateCreatedEvent {
      export type Data = Stripe.V2.Core.Events.V2BillingRateCardCustomPricingUnitOverageRateCreatedEvent.Data;
    }
    export namespace V2BillingRateCardRateCreatedEvent {
      export type Data = Stripe.V2.Core.Events.V2BillingRateCardRateCreatedEvent.Data;
    }
    export namespace V2BillingRateCardVersionCreatedEvent {
      export type Data = Stripe.V2.Core.Events.V2BillingRateCardVersionCreatedEvent.Data;
    }
    export namespace V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationCardCreatorCapabilityStatusUpdatedEvent.Data;
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
    export namespace V2CoreAccountSignalsFraudulentWebsiteReadyEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreAccountSignalsFraudulentWebsiteReadyEvent.Data;
    }
    export namespace V2CoreHealthApiErrorFiringEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthApiErrorFiringEvent.Data;
    }
    export namespace V2CoreHealthApiErrorResolvedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthApiErrorResolvedEvent.Data;
    }
    export namespace V2CoreHealthApiLatencyFiringEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthApiLatencyFiringEvent.Data;
    }
    export namespace V2CoreHealthApiLatencyResolvedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthApiLatencyResolvedEvent.Data;
    }
    export namespace V2CoreHealthAuthorizationRateDropFiringEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthAuthorizationRateDropFiringEvent.Data;
    }
    export namespace V2CoreHealthAuthorizationRateDropResolvedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthAuthorizationRateDropResolvedEvent.Data;
    }
    export namespace V2CoreHealthElementsErrorFiringEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthElementsErrorFiringEvent.Data;
    }
    export namespace V2CoreHealthElementsErrorResolvedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthElementsErrorResolvedEvent.Data;
    }
    export namespace V2CoreHealthEventGenerationFailureResolvedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthEventGenerationFailureResolvedEvent.Data;
    }
    export namespace V2CoreHealthFraudRateIncreasedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthFraudRateIncreasedEvent.Data;
    }
    export namespace V2CoreHealthInvoiceCountDroppedFiringEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthInvoiceCountDroppedFiringEvent.Data;
    }
    export namespace V2CoreHealthInvoiceCountDroppedResolvedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthInvoiceCountDroppedResolvedEvent.Data;
    }
    export namespace V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent.Data;
    }
    export namespace V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent.Data;
    }
    export namespace V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent.Data;
    }
    export namespace V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent.Data;
    }
    export namespace V2CoreHealthMeterEventSummariesDelayedFiringEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthMeterEventSummariesDelayedFiringEvent.Data;
    }
    export namespace V2CoreHealthMeterEventSummariesDelayedResolvedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthMeterEventSummariesDelayedResolvedEvent.Data;
    }
    export namespace V2CoreHealthPaymentMethodErrorFiringEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthPaymentMethodErrorFiringEvent.Data;
    }
    export namespace V2CoreHealthPaymentMethodErrorResolvedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthPaymentMethodErrorResolvedEvent.Data;
    }
    export namespace V2CoreHealthSepaDebitDelayedFiringEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthSepaDebitDelayedFiringEvent.Data;
    }
    export namespace V2CoreHealthSepaDebitDelayedResolvedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthSepaDebitDelayedResolvedEvent.Data;
    }
    export namespace V2CoreHealthTrafficVolumeDropFiringEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthTrafficVolumeDropFiringEvent.Data;
    }
    export namespace V2CoreHealthTrafficVolumeDropResolvedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthTrafficVolumeDropResolvedEvent.Data;
    }
    export namespace V2CoreHealthWebhookLatencyFiringEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthWebhookLatencyFiringEvent.Data;
    }
    export namespace V2CoreHealthWebhookLatencyResolvedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreHealthWebhookLatencyResolvedEvent.Data;
    }
    export namespace V2ExtendExtensionRunFailedEvent {
      export type Data = Stripe.V2.Core.Events.V2ExtendExtensionRunFailedEvent.Data;
    }
    export namespace V2ExtendWorkflowRunFailedEvent {
      export type Data = Stripe.V2.Core.Events.V2ExtendWorkflowRunFailedEvent.Data;
    }
    export namespace V2IamApiKeyCreatedEvent {
      export type Data = Stripe.V2.Core.Events.V2IamApiKeyCreatedEvent.Data;
    }
    export namespace V2IamApiKeyDefaultSecretRevealedEvent {
      export type Data = Stripe.V2.Core.Events.V2IamApiKeyDefaultSecretRevealedEvent.Data;
    }
    export namespace V2IamApiKeyExpiredEvent {
      export type Data = Stripe.V2.Core.Events.V2IamApiKeyExpiredEvent.Data;
    }
    export namespace V2IamApiKeyPermissionsUpdatedEvent {
      export type Data = Stripe.V2.Core.Events.V2IamApiKeyPermissionsUpdatedEvent.Data;
    }
    export namespace V2IamApiKeyRotatedEvent {
      export type Data = Stripe.V2.Core.Events.V2IamApiKeyRotatedEvent.Data;
    }
    export namespace V2IamApiKeyUpdatedEvent {
      export type Data = Stripe.V2.Core.Events.V2IamApiKeyUpdatedEvent.Data;
    }
    export namespace V2IamStripeAccessGrantApprovedEvent {
      export type Data = Stripe.V2.Core.Events.V2IamStripeAccessGrantApprovedEvent.Data;
    }
    export namespace V2IamStripeAccessGrantCanceledEvent {
      export type Data = Stripe.V2.Core.Events.V2IamStripeAccessGrantCanceledEvent.Data;
    }
    export namespace V2IamStripeAccessGrantDeniedEvent {
      export type Data = Stripe.V2.Core.Events.V2IamStripeAccessGrantDeniedEvent.Data;
    }
    export namespace V2IamStripeAccessGrantRemovedEvent {
      export type Data = Stripe.V2.Core.Events.V2IamStripeAccessGrantRemovedEvent.Data;
    }
    export namespace V2IamStripeAccessGrantRequestedEvent {
      export type Data = Stripe.V2.Core.Events.V2IamStripeAccessGrantRequestedEvent.Data;
    }
    export namespace V2IamStripeAccessGrantUpdatedEvent {
      export type Data = Stripe.V2.Core.Events.V2IamStripeAccessGrantUpdatedEvent.Data;
    }
    export namespace V2MoneyManagementFinancialAccountStatementCreatedEvent {
      export type Data = Stripe.V2.Core.Events.V2MoneyManagementFinancialAccountStatementCreatedEvent.Data;
    }
    export namespace V2MoneyManagementFinancialAccountStatementRestatedEvent {
      export type Data = Stripe.V2.Core.Events.V2MoneyManagementFinancialAccountStatementRestatedEvent.Data;
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
    export namespace V2PaymentsOffSessionPaymentAttemptFailedEvent {
      export type Data = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentAttemptFailedEvent.Data;
    }
    export namespace V2PaymentsOffSessionPaymentFailedEvent {
      export type Data = Stripe.V2.Core.Events.V2PaymentsOffSessionPaymentFailedEvent.Data;
    }
    export namespace V2PaymentsSettlementAllocationIntentErroredEvent {
      export type Data = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentErroredEvent.Data;
    }
    export namespace V2PaymentsSettlementAllocationIntentNotFoundEvent {
      export type Data = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentNotFoundEvent.Data;
    }
    export namespace V2PaymentsSettlementAllocationIntentSplitCanceledEvent {
      export type Data = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentSplitCanceledEvent.Data;
    }
    export namespace V2PaymentsSettlementAllocationIntentSplitCreatedEvent {
      export type Data = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentSplitCreatedEvent.Data;
    }
    export namespace V2PaymentsSettlementAllocationIntentSplitSettledEvent {
      export type Data = Stripe.V2.Core.Events.V2PaymentsSettlementAllocationIntentSplitSettledEvent.Data;
    }
    export namespace V2SignalsAccountSignalFraudulentMerchantReadyEvent {
      export type Data = Stripe.V2.Core.Events.V2SignalsAccountSignalFraudulentMerchantReadyEvent.Data;
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
  export type BillingAlertRecoveredEvent = Stripe.BillingAlertRecoveredEvent;
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
  export type PaymentIntentExpiredEvent = Stripe.PaymentIntentExpiredEvent;
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
