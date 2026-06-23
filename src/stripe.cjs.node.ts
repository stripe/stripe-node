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
  export type PaymentAttemptRecordReportEarlyFraudWarningParams = Stripe.PaymentAttemptRecordReportEarlyFraudWarningParams;
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
  export type PaymentRecordSearchParams = Stripe.PaymentRecordSearchParams;
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
    export type SelfReportedIncome = Stripe.AccountCreatePersonParams.SelfReportedIncome;
    export type SelfReportedMonthlyHousingPayment = Stripe.AccountCreatePersonParams.SelfReportedMonthlyHousingPayment;
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
    export type SelfReportedIncome = Stripe.AccountUpdatePersonParams.SelfReportedIncome;
    export type SelfReportedMonthlyHousingPayment = Stripe.AccountUpdatePersonParams.SelfReportedMonthlyHousingPayment;
    export type UsCfpbData = Stripe.AccountUpdatePersonParams.UsCfpbData;
    export type Verification = Stripe.AccountUpdatePersonParams.Verification;
  }
  export namespace AccountLinkCreateParams {
    export type Type = Stripe.AccountLinkCreateParams.Type;
    export type Collect = Stripe.AccountLinkCreateParams.Collect;
    export type CollectionOptions = Stripe.AccountLinkCreateParams.CollectionOptions;
  }
  export namespace AccountNoticeUpdateParams {
    export type Email = Stripe.AccountNoticeUpdateParams.Email;
  }
  export namespace AccountSessionCreateParams {
    export type Components = Stripe.AccountSessionCreateParams.Components;
  }
  export namespace BalanceSettingsUpdateParams {
    export type Payments = Stripe.BalanceSettingsUpdateParams.Payments;
  }
  export namespace BalanceTransferCreateParams {
    export type Currency = Stripe.BalanceTransferCreateParams.Currency;
    export type DestinationBalance = Stripe.BalanceTransferCreateParams.DestinationBalance;
    export type SourceBalance = Stripe.BalanceTransferCreateParams.SourceBalance;
  }
  export namespace ChargeCreateParams {
    export type Destination = Stripe.ChargeCreateParams.Destination;
    export type RadarOptions = Stripe.ChargeCreateParams.RadarOptions;
    export type Shipping = Stripe.ChargeCreateParams.Shipping;
    export type TransferData = Stripe.ChargeCreateParams.TransferData;
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
    export type Purpose = Stripe.FileCreateParams.Purpose;
    export type FileLinkData = Stripe.FileCreateParams.FileLinkData;
  }
  export namespace FileListParams {
    export type Purpose = Stripe.FileListParams.Purpose;
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
    export type CollectionMethod = Stripe.InvoiceListParams.CollectionMethod;
    export type Status = Stripe.InvoiceListParams.Status;
  }
  export namespace InvoiceAddLinesParams {
    export type Line = Stripe.InvoiceAddLinesParams.Line;
  }
  export namespace InvoiceAttachPaymentParams {
    export type PaymentRecordData = Stripe.InvoiceAttachPaymentParams.PaymentRecordData;
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
  export namespace PaymentAttemptRecordReportEarlyFraudWarningParams {
    export type FraudType = Stripe.PaymentAttemptRecordReportEarlyFraudWarningParams.FraudType;
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
    export type ProcessorDetails = Stripe.PaymentAttemptRecordReportRefundParams.ProcessorDetails;
    export type Amount = Stripe.PaymentAttemptRecordReportRefundParams.Amount;
    export type Failed = Stripe.PaymentAttemptRecordReportRefundParams.Failed;
    export type Outcome = Stripe.PaymentAttemptRecordReportRefundParams.Outcome;
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
    export type CancellationReason = Stripe.PaymentIntentCancelParams.CancellationReason;
  }
  export namespace PaymentIntentCaptureParams {
    export type AmountDetails = Stripe.PaymentIntentCaptureParams.AmountDetails;
    export type Hooks = Stripe.PaymentIntentCaptureParams.Hooks;
    export type PaymentDetails = Stripe.PaymentIntentCaptureParams.PaymentDetails;
    export type TransferData = Stripe.PaymentIntentCaptureParams.TransferData;
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
  export namespace PaymentRecordReportPaymentAttemptFailedParams {
    export type FailureCode = Stripe.PaymentRecordReportPaymentAttemptFailedParams.FailureCode;
    export type ProcessorDetails = Stripe.PaymentRecordReportPaymentAttemptFailedParams.ProcessorDetails;
  }
  export namespace PaymentRecordReportPaymentAttemptGuaranteedParams {
    export type PaymentMethodDetails = Stripe.PaymentRecordReportPaymentAttemptGuaranteedParams.PaymentMethodDetails;
    export type ProcessorDetails = Stripe.PaymentRecordReportPaymentAttemptGuaranteedParams.ProcessorDetails;
  }
  export namespace PaymentRecordReportPaymentAttemptInformationalParams {
    export type CustomerDetails = Stripe.PaymentRecordReportPaymentAttemptInformationalParams.CustomerDetails;
    export type ShippingDetails = Stripe.PaymentRecordReportPaymentAttemptInformationalParams.ShippingDetails;
  }
  export namespace PaymentRecordReportRefundParams {
    export type ProcessorDetails = Stripe.PaymentRecordReportRefundParams.ProcessorDetails;
    export type Amount = Stripe.PaymentRecordReportRefundParams.Amount;
    export type Failed = Stripe.PaymentRecordReportRefundParams.Failed;
    export type Outcome = Stripe.PaymentRecordReportRefundParams.Outcome;
    export type Refunded = Stripe.PaymentRecordReportRefundParams.Refunded;
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
    export type MigrateTo = Stripe.PriceUpdateParams.MigrateTo;
    export type TaxBehavior = Stripe.PriceUpdateParams.TaxBehavior;
  }
  export namespace PriceListParams {
    export type Recurring = Stripe.PriceListParams.Recurring;
    export type Type = Stripe.PriceListParams.Type;
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
    export type CancellationReason = Stripe.SetupIntentCancelParams.CancellationReason;
  }
  export namespace SetupIntentConfirmParams {
    export type MandateData = Stripe.SetupIntentConfirmParams.MandateData;
    export type PaymentMethodData = Stripe.SetupIntentConfirmParams.PaymentMethodData;
    export type PaymentMethodOptions = Stripe.SetupIntentConfirmParams.PaymentMethodOptions;
    export type SetupDetails = Stripe.SetupIntentConfirmParams.SetupDetails;
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
    export type PaymentBehavior = Stripe.SubscriptionItemDeleteParams.PaymentBehavior;
    export type ProrationBehavior = Stripe.SubscriptionItemDeleteParams.ProrationBehavior;
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
      export type TenantOperator = Stripe.Billing.MeterListEventSummariesParams.TenantOperator;
      export type ValueGroupingWindow = Stripe.Billing.MeterListEventSummariesParams.ValueGroupingWindow;
    }
    export namespace MeterEventAdjustmentCreateParams {
      export type Cancel = Stripe.Billing.MeterEventAdjustmentCreateParams.Cancel;
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
    export type CreditUnderwritingRecord = Stripe.Issuing.CreditUnderwritingRecord;
    export type CreditUnderwritingRecordRetrieveParams = Stripe.Issuing.CreditUnderwritingRecordRetrieveParams;
    export type CreditUnderwritingRecordListParams = Stripe.Issuing.CreditUnderwritingRecordListParams;
    export type CreditUnderwritingRecordCorrectParams = Stripe.Issuing.CreditUnderwritingRecordCorrectParams;
    export type CreditUnderwritingRecordCreateFromApplicationParams = Stripe.Issuing.CreditUnderwritingRecordCreateFromApplicationParams;
    export type CreditUnderwritingRecordCreateFromProactiveReviewParams = Stripe.Issuing.CreditUnderwritingRecordCreateFromProactiveReviewParams;
    export type CreditUnderwritingRecordReportDecisionParams = Stripe.Issuing.CreditUnderwritingRecordReportDecisionParams;
    export type CreditUnderwritingRecordReportOfferAcceptanceParams = Stripe.Issuing.CreditUnderwritingRecordReportOfferAcceptanceParams;
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
      export type Wallets = Stripe.Issuing.CardListParams.Wallets;
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
      export type Evidence = Stripe.Issuing.DisputeCreateParams.Evidence;
      export type Treasury = Stripe.Issuing.DisputeCreateParams.Treasury;
    }
    export namespace DisputeUpdateParams {
      export type Evidence = Stripe.Issuing.DisputeUpdateParams.Evidence;
      export type ProvisionalCredit = Stripe.Issuing.DisputeUpdateParams.ProvisionalCredit;
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
      export type LineItem = Stripe.Tax.CalculationCreateParams.LineItem;
      export type CustomerDetails = Stripe.Tax.CalculationCreateParams.CustomerDetails;
      export type ShipFromDetails = Stripe.Tax.CalculationCreateParams.ShipFromDetails;
      export type ShippingCost = Stripe.Tax.CalculationCreateParams.ShippingCost;
    }
    export namespace FormListParams {
      export type Payee = Stripe.Tax.FormListParams.Payee;
      export type Type = Stripe.Tax.FormListParams.Type;
    }
    export namespace LocationCreateParams {
      export type Address = Stripe.Tax.LocationCreateParams.Address;
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
      export type NetworkDetails = Stripe.Treasury.OutboundTransferCreateParams.NetworkDetails;
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
      export type ContractDeleteParams = Stripe.V2.Billing.ContractDeleteParams;
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
      export type ContractPricingLineQuantityChange = Stripe.V2.Billing.ContractPricingLineQuantityChange;
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
        export type PricingLine = Stripe.V2.Billing.ContractCreateParams.PricingLine;
        export type BillingCycleAnchor = Stripe.V2.Billing.ContractCreateParams.BillingCycleAnchor;
        export type BillingSettings = Stripe.V2.Billing.ContractCreateParams.BillingSettings;
        export type Include = Stripe.V2.Billing.ContractCreateParams.Include;
        export type OneTimeFee = Stripe.V2.Billing.ContractCreateParams.OneTimeFee;
        export type PricingOverride = Stripe.V2.Billing.ContractCreateParams.PricingOverride;
      }
      export namespace ContractRetrieveParams {
        export type Include = Stripe.V2.Billing.ContractRetrieveParams.Include;
      }
      export namespace ContractUpdateParams {
        export type Include = Stripe.V2.Billing.ContractUpdateParams.Include;
        export type PricingLineAction = Stripe.V2.Billing.ContractUpdateParams.PricingLineAction;
        export type PricingOverrideAction = Stripe.V2.Billing.ContractUpdateParams.PricingOverrideAction;
      }
      export namespace ContractListParams {
        export type Include = Stripe.V2.Billing.ContractListParams.Include;
      }
      export namespace ContractActivateParams {
        export type Include = Stripe.V2.Billing.ContractActivateParams.Include;
      }
      export namespace ContractCancelParams {
        export type CancelPricingLine = Stripe.V2.Billing.ContractCancelParams.CancelPricingLine;
        export type Include = Stripe.V2.Billing.ContractCancelParams.Include;
        export type ProrationBehavior = Stripe.V2.Billing.ContractCancelParams.ProrationBehavior;
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
        export type Cancel = Stripe.V2.Billing.MeterEventAdjustmentCreateParams.Cancel;
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
      export namespace AccountEvaluationCreateParams {
        export type AccountData = Stripe.V2.Core.AccountEvaluationCreateParams.AccountData;
      }
      export namespace AccountLinkCreateParams {
        export type UseCase = Stripe.V2.Core.AccountLinkCreateParams.UseCase;
      }
      export namespace AccountTokenCreateParams {
        export type Identity = Stripe.V2.Core.AccountTokenCreateParams.Identity;
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
      export namespace Health {
        export type Alert = Stripe.V2.Core.Health.Alert;
        export type AlertRetrieveParams = Stripe.V2.Core.Health.AlertRetrieveParams;
        export type AlertListParams = Stripe.V2.Core.Health.AlertListParams;
        export type AlertResource = Stripe.V2.Core.Health.AlertResource;
        export type AlertHistoryEntry = Stripe.V2.Core.Health.AlertHistoryEntry;
        export namespace AlertListParams {
          export type Severity = Stripe.V2.Core.Health.AlertListParams.Severity;
          export type Status = Stripe.V2.Core.Health.AlertListParams.Status;
          export type Type = Stripe.V2.Core.Health.AlertListParams.Type;
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
      export type PayoutIntent = Stripe.V2.MoneyManagement.PayoutIntent;
      export type PayoutIntentCreateParams = Stripe.V2.MoneyManagement.PayoutIntentCreateParams;
      export type PayoutIntentRetrieveParams = Stripe.V2.MoneyManagement.PayoutIntentRetrieveParams;
      export type PayoutIntentUpdateParams = Stripe.V2.MoneyManagement.PayoutIntentUpdateParams;
      export type PayoutIntentListParams = Stripe.V2.MoneyManagement.PayoutIntentListParams;
      export type PayoutIntentCancelParams = Stripe.V2.MoneyManagement.PayoutIntentCancelParams;
      export type PayoutIntentResource = Stripe.V2.MoneyManagement.PayoutIntentResource;
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
      export type FinancialAddressDebitSimulation = Stripe.V2.MoneyManagement.FinancialAddressDebitSimulation;
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
      export namespace PayoutIntentCreateParams {
        export type From = Stripe.V2.MoneyManagement.PayoutIntentCreateParams.From;
        export type To = Stripe.V2.MoneyManagement.PayoutIntentCreateParams.To;
        export type RecipientNotification = Stripe.V2.MoneyManagement.PayoutIntentCreateParams.RecipientNotification;
        export type ScheduleOptions = Stripe.V2.MoneyManagement.PayoutIntentCreateParams.ScheduleOptions;
      }
      export namespace PayoutIntentUpdateParams {
        export type From = Stripe.V2.MoneyManagement.PayoutIntentUpdateParams.From;
        export type RecipientNotification = Stripe.V2.MoneyManagement.PayoutIntentUpdateParams.RecipientNotification;
        export type ScheduleOptions = Stripe.V2.MoneyManagement.PayoutIntentUpdateParams.ScheduleOptions;
        export type To = Stripe.V2.MoneyManagement.PayoutIntentUpdateParams.To;
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
      export type ProductCatalogImport = Stripe.V2.Commerce.ProductCatalogImport;
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
    export type V2CoreAccountIncludingConfigurationMoneyManagerCapabilityStatusUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationMoneyManagerCapabilityStatusUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationMoneyManagerCapabilityStatusUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationMoneyManagerCapabilityStatusUpdatedEventNotification;
    export type V2CoreAccountIncludingConfigurationMoneyManagerUpdatedEvent = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationMoneyManagerUpdatedEvent;
    export type V2CoreAccountIncludingConfigurationMoneyManagerUpdatedEventNotification = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationMoneyManagerUpdatedEventNotification;
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
    export type V2MoneyManagementDebitDisputeFailedEvent = Stripe.V2.Core.Events.V2MoneyManagementDebitDisputeFailedEvent;
    export type V2MoneyManagementDebitDisputeFailedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementDebitDisputeFailedEventNotification;
    export type V2MoneyManagementDebitDisputeSubmittedEvent = Stripe.V2.Core.Events.V2MoneyManagementDebitDisputeSubmittedEvent;
    export type V2MoneyManagementDebitDisputeSubmittedEventNotification = Stripe.V2.Core.Events.V2MoneyManagementDebitDisputeSubmittedEventNotification;
    export type V2MoneyManagementDebitDisputeSucceededEvent = Stripe.V2.Core.Events.V2MoneyManagementDebitDisputeSucceededEvent;
    export type V2MoneyManagementDebitDisputeSucceededEventNotification = Stripe.V2.Core.Events.V2MoneyManagementDebitDisputeSucceededEventNotification;
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
    export type V2MoneyManagementOutboundPaymentUnderReviewEvent = Stripe.V2.Core.Events.V2MoneyManagementOutboundPaymentUnderReviewEvent;
    export type V2MoneyManagementOutboundPaymentUnderReviewEventNotification = Stripe.V2.Core.Events.V2MoneyManagementOutboundPaymentUnderReviewEventNotification;
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
    export type V2MoneyManagementOutboundTransferUnderReviewEvent = Stripe.V2.Core.Events.V2MoneyManagementOutboundTransferUnderReviewEvent;
    export type V2MoneyManagementOutboundTransferUnderReviewEventNotification = Stripe.V2.Core.Events.V2MoneyManagementOutboundTransferUnderReviewEventNotification;
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
      export type Data = Stripe.V2.Core.Events.V1BillingMeterErrorReportTriggeredEvent.Data;
    }
    export namespace V1BillingMeterNoMeterFoundEvent {
      export type Data = Stripe.V2.Core.Events.V1BillingMeterNoMeterFoundEvent.Data;
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
      export type Data = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent.Data;
    }
    export namespace V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent.Data;
    }
    export namespace V2CoreAccountIncludingConfigurationMoneyManagerCapabilityStatusUpdatedEvent {
      export type Data = Stripe.V2.Core.Events.V2CoreAccountIncludingConfigurationMoneyManagerCapabilityStatusUpdatedEvent.Data;
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
