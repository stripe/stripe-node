// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {RequestOptions} from '../lib.js';
import {Application} from './Applications.js';
import {Customer, DeletedCustomer} from './Customers.js';
import {SetupAttempt} from './SetupAttempts.js';
import {Mandate} from './Mandates.js';
import {Account} from './Accounts.js';
import {PaymentMethod} from './PaymentMethods.js';
import {PaymentIntent} from './PaymentIntents.js';
import {CustomerSource} from './CustomerSources.js';
import {
  Emptyable,
  MetadataParam,
  AddressParam,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../shared.js';
import {ApiListPromise, Response} from '../lib.js';
const stripeMethod = StripeResource.method;
export class SetupIntentResource extends StripeResource {
  /**
   * Returns a list of SetupIntents.
   */
  list(
    params?: SetupIntentListParams,
    options?: RequestOptions
  ): ApiListPromise<SetupIntent>;
  list(options?: RequestOptions): ApiListPromise<SetupIntent>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/setup_intents',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a SetupIntent object.
   *
   * After you create the SetupIntent, attach a payment method and [confirm](https://docs.stripe.com/docs/api/setup_intents/confirm)
   * it to collect any required permissions to charge the payment method later.
   */
  create(
    params?: SetupIntentCreateParams,
    options?: RequestOptions
  ): Promise<Response<SetupIntent>>;
  create(options?: RequestOptions): Promise<Response<SetupIntent>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/setup_intents',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of a SetupIntent that has previously been created.
   *
   * Client-side retrieval using a publishable key is allowed when the client_secret is provided in the query string.
   *
   * When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the [SetupIntent](https://docs.stripe.com/api#setup_intent_object) object reference for more details.
   */
  retrieve(
    id: string,
    params?: SetupIntentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<SetupIntent>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<SetupIntent>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/setup_intents/{intent}',
    }).call(this, ...args);
  }

  /**
   * Updates a SetupIntent object.
   */
  update(
    id: string,
    params?: SetupIntentUpdateParams,
    options?: RequestOptions
  ): Promise<Response<SetupIntent>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/setup_intents/{intent}',
    }).call(this, ...args);
  }

  /**
   * You can cancel a SetupIntent object when it's in one of these statuses: requires_payment_method, requires_confirmation, or requires_action.
   *
   * After you cancel it, setup is abandoned and any operations on the SetupIntent fail with an error. You can't cancel the SetupIntent for a Checkout Session. [Expire the Checkout Session](https://docs.stripe.com/docs/api/checkout/sessions/expire) instead.
   */
  cancel(
    id: string,
    params?: SetupIntentCancelParams,
    options?: RequestOptions
  ): Promise<Response<SetupIntent>>;
  cancel(id: string, options?: RequestOptions): Promise<Response<SetupIntent>>;
  cancel(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/setup_intents/{intent}/cancel',
    }).call(this, ...args);
  }

  /**
   * Confirm that your customer intends to set up the current or
   * provided payment method. For example, you would confirm a SetupIntent
   * when a customer hits the “Save” button on a payment method management
   * page on your website.
   *
   * If the selected payment method does not require any additional
   * steps from the customer, the SetupIntent will transition to the
   * succeeded status.
   *
   * Otherwise, it will transition to the requires_action status and
   * suggest additional actions via next_action. If setup fails,
   * the SetupIntent will transition to the
   * requires_payment_method status or the canceled status if the
   * confirmation limit is reached.
   */
  confirm(
    id: string,
    params?: SetupIntentConfirmParams,
    options?: RequestOptions
  ): Promise<Response<SetupIntent>>;
  confirm(id: string, options?: RequestOptions): Promise<Response<SetupIntent>>;
  confirm(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/setup_intents/{intent}/confirm',
    }).call(this, ...args);
  }

  /**
   * Verifies microdeposits on a SetupIntent object.
   */
  verifyMicrodeposits(
    id: string,
    params?: SetupIntentVerifyMicrodepositsParams,
    options?: RequestOptions
  ): Promise<Response<SetupIntent>>;
  verifyMicrodeposits(
    id: string,
    options?: RequestOptions
  ): Promise<Response<SetupIntent>>;
  verifyMicrodeposits(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/setup_intents/{intent}/verify_microdeposits',
    }).call(this, ...args);
  }
}
export interface SetupIntent {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'setup_intent';

  /**
   * ID of the Connect application that created the SetupIntent.
   */
  application: string | Application | null;

  /**
   * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
   *
   * It can only be used for this Stripe Account's own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
   */
  attach_to_self?: boolean;

  /**
   * Settings for dynamic payment methods compatible with this Setup Intent
   */
  automatic_payment_methods: SetupIntent.AutomaticPaymentMethods | null;

  /**
   * Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`.
   */
  cancellation_reason: SetupIntent.CancellationReason | null;

  /**
   * The client secret of this SetupIntent. Used for client-side retrieval using a publishable key.
   *
   * The client secret can be used to complete payment setup from your frontend. It should not be stored, logged, or exposed to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.
   */
  client_secret: string | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * ID of the Customer this SetupIntent belongs to, if one exists.
   *
   * If present, the SetupIntent's payment method will be attached to the Customer on successful setup. Payment methods attached to other Customers cannot be used with this SetupIntent.
   */
  customer: string | Customer | DeletedCustomer | null;

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description: string | null;

  /**
   * Payment method types that are excluded from this SetupIntent.
   */
  excluded_payment_method_types: Array<
    SetupIntent.ExcludedPaymentMethodType
  > | null;

  /**
   * Indicates the directions of money movement for which this payment method is intended to be used.
   *
   * Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
   */
  flow_directions: Array<SetupIntent.FlowDirection> | null;

  /**
   * The error encountered in the previous SetupIntent confirmation.
   */
  last_setup_error: SetupIntent.LastSetupError | null;

  /**
   * The most recent SetupAttempt for this SetupIntent.
   */
  latest_attempt: string | SetupAttempt | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * ID of the multi use Mandate generated by the SetupIntent.
   */
  mandate: string | Mandate | null;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * If present, this property tells you what actions you need to take in order for your customer to continue payment setup.
   */
  next_action: SetupIntent.NextAction | null;

  /**
   * The account (if any) for which the setup is intended.
   */
  on_behalf_of: string | Account | null;

  /**
   * ID of the payment method used with this SetupIntent. If the payment method is `card_present` and isn't a digital wallet, then the [generated_card](https://docs.stripe.com/api/setup_attempts/object#setup_attempt_object-payment_method_details-card_present-generated_card) associated with the `latest_attempt` is attached to the Customer instead.
   */
  payment_method: string | PaymentMethod | null;

  /**
   * Information about the [payment method configuration](https://stripe.com/docs/api/payment_method_configurations) used for this Setup Intent.
   */
  payment_method_configuration_details: SetupIntent.PaymentMethodConfigurationDetails | null;

  /**
   * Payment method-specific configuration for this SetupIntent.
   */
  payment_method_options: SetupIntent.PaymentMethodOptions | null;

  /**
   * The list of payment method types (e.g. card) that this SetupIntent is allowed to set up. A list of valid payment method types can be found [here](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type).
   */
  payment_method_types: Array<string>;

  /**
   * ID of the single_use Mandate generated by the SetupIntent.
   */
  single_use_mandate: string | Mandate | null;

  /**
   * [Status](https://stripe.com/docs/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`.
   */
  status: SetupIntent.Status;

  /**
   * Indicates how the payment method is intended to be used in the future.
   *
   * Use `on_session` if you intend to only reuse the payment method when the customer is in your checkout flow. Use `off_session` if your customer may or may not be in your checkout flow. If not provided, this value defaults to `off_session`.
   */
  usage: string;
}
export namespace SetupIntent {
  export interface AutomaticPaymentMethods {
    /**
     * Controls whether this SetupIntent will accept redirect-based payment methods.
     *
     * Redirect-based payment methods may require your customer to be redirected to a payment method's app or site for authentication or additional steps. To [confirm](https://stripe.com/docs/api/setup_intents/confirm) this SetupIntent, you may be required to provide a `return_url` to redirect customers back to your site after they authenticate or complete the setup.
     */
    allow_redirects?: AutomaticPaymentMethods.AllowRedirects;

    /**
     * Automatically calculates compatible payment methods
     */
    enabled: boolean | null;
  }

  export type CancellationReason =
    | 'abandoned'
    | 'duplicate'
    | 'requested_by_customer';

  export type ExcludedPaymentMethodType =
    | 'acss_debit'
    | 'affirm'
    | 'afterpay_clearpay'
    | 'alipay'
    | 'alma'
    | 'amazon_pay'
    | 'au_becs_debit'
    | 'bacs_debit'
    | 'bancontact'
    | 'billie'
    | 'blik'
    | 'boleto'
    | 'card'
    | 'cashapp'
    | 'crypto'
    | 'customer_balance'
    | 'eps'
    | 'fpx'
    | 'giropay'
    | 'grabpay'
    | 'ideal'
    | 'kakao_pay'
    | 'klarna'
    | 'konbini'
    | 'kr_card'
    | 'mb_way'
    | 'mobilepay'
    | 'multibanco'
    | 'naver_pay'
    | 'nz_bank_account'
    | 'oxxo'
    | 'p24'
    | 'pay_by_bank'
    | 'payco'
    | 'paynow'
    | 'paypal'
    | 'pix'
    | 'promptpay'
    | 'revolut_pay'
    | 'samsung_pay'
    | 'satispay'
    | 'sepa_debit'
    | 'sofort'
    | 'swish'
    | 'twint'
    | 'us_bank_account'
    | 'wechat_pay'
    | 'zip';

  export type FlowDirection = 'inbound' | 'outbound';

  export interface LastSetupError {
    /**
     * For card errors resulting from a card issuer decline, a short string indicating [how to proceed with an error](https://stripe.com/docs/declines#retrying-issuer-declines) if they provide one.
     */
    advice_code?: string;

    /**
     * For card errors, the ID of the failed charge.
     */
    charge?: string;

    /**
     * For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported.
     */
    code?: LastSetupError.Code;

    /**
     * For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](https://stripe.com/docs/declines#issuer-declines) if they provide one.
     */
    decline_code?: string;

    /**
     * A URL to more information about the [error code](https://stripe.com/docs/error-codes) reported.
     */
    doc_url?: string;

    /**
     * A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
     */
    message?: string;

    /**
     * For card errors resulting from a card issuer decline, a 2 digit code which indicates the advice given to merchant by the card network on how to proceed with an error.
     */
    network_advice_code?: string;

    /**
     * For payments declined by the network, an alphanumeric code which indicates the reason the payment failed.
     */
    network_decline_code?: string;

    /**
     * If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.
     */
    param?: string;

    /**
     * A PaymentIntent guides you through the process of collecting a payment from your customer.
     * We recommend that you create exactly one PaymentIntent for each order or
     * customer session in your system. You can reference the PaymentIntent later to
     * see the history of payment attempts for a particular session.
     *
     * A PaymentIntent transitions through
     * [multiple statuses](https://stripe.com/docs/payments/intents#intent-statuses)
     * throughout its lifetime as it interfaces with Stripe.js to perform
     * authentication flows and ultimately creates at most one successful charge.
     *
     * Related guide: [Payment Intents API](https://stripe.com/docs/payments/payment-intents)
     */
    payment_intent?: PaymentIntent;

    /**
     * PaymentMethod objects represent your customer's payment instruments.
     * You can use them with [PaymentIntents](https://stripe.com/docs/payments/payment-intents) to collect payments or save them to
     * Customer objects to store instrument details for future payments.
     *
     * Related guides: [Payment Methods](https://stripe.com/docs/payments/payment-methods) and [More Payment Scenarios](https://stripe.com/docs/payments/more-payment-scenarios).
     */
    payment_method?: PaymentMethod;

    /**
     * If the error is specific to the type of payment method, the payment method type that had a problem. This field is only populated for invoice-related errors.
     */
    payment_method_type?: string;

    /**
     * A URL to the request log entry in your dashboard.
     */
    request_log_url?: string;

    /**
     * A SetupIntent guides you through the process of setting up and saving a customer's payment credentials for future payments.
     * For example, you can use a SetupIntent to set up and save your customer's card without immediately collecting a payment.
     * Later, you can use [PaymentIntents](https://stripe.com/docs/api#payment_intents) to drive the payment flow.
     *
     * Create a SetupIntent when you're ready to collect your customer's payment credentials.
     * Don't maintain long-lived, unconfirmed SetupIntents because they might not be valid.
     * The SetupIntent transitions through multiple [statuses](https://docs.stripe.com/payments/intents#intent-statuses) as it guides
     * you through the setup process.
     *
     * Successful SetupIntents result in payment credentials that are optimized for future payments.
     * For example, cardholders in [certain regions](https://stripe.com/guides/strong-customer-authentication) might need to be run through
     * [Strong Customer Authentication](https://docs.stripe.com/strong-customer-authentication) during payment method collection
     * to streamline later [off-session payments](https://docs.stripe.com/payments/setup-intents).
     * If you use the SetupIntent with a [Customer](https://stripe.com/docs/api#setup_intent_object-customer),
     * it automatically attaches the resulting payment method to that Customer after successful setup.
     * We recommend using SetupIntents or [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) on
     * PaymentIntents to save payment methods to prevent saving invalid or unoptimized payment methods.
     *
     * By using SetupIntents, you can reduce friction for your customers, even as regulations change over time.
     *
     * Related guide: [Setup Intents API](https://docs.stripe.com/payments/setup-intents)
     */
    setup_intent?: SetupIntent;

    source?: CustomerSource;

    /**
     * The type of error returned. One of `api_error`, `card_error`, `idempotency_error`, or `invalid_request_error`
     */
    type: LastSetupError.Type;
  }

  export interface NextAction {
    cashapp_handle_redirect_or_display_qr_code?: NextAction.CashappHandleRedirectOrDisplayQrCode;

    redirect_to_url?: NextAction.RedirectToUrl;

    /**
     * Type of the next action to perform. Refer to the other child attributes under `next_action` for available values. Examples include: `redirect_to_url`, `use_stripe_sdk`, `alipay_handle_redirect`, `oxxo_display_details`, or `verify_with_microdeposits`.
     */
    type: string;

    /**
     * When confirming a SetupIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js.
     */
    use_stripe_sdk?: NextAction.UseStripeSdk;

    verify_with_microdeposits?: NextAction.VerifyWithMicrodeposits;
  }

  export interface PaymentMethodConfigurationDetails {
    /**
     * ID of the payment method configuration used.
     */
    id: string;

    /**
     * ID of the parent payment method configuration used.
     */
    parent: string | null;
  }

  export interface PaymentMethodOptions {
    acss_debit?: PaymentMethodOptions.AcssDebit;

    amazon_pay?: PaymentMethodOptions.AmazonPay;

    bacs_debit?: PaymentMethodOptions.BacsDebit;

    card?: PaymentMethodOptions.Card;

    card_present?: PaymentMethodOptions.CardPresent;

    klarna?: PaymentMethodOptions.Klarna;

    link?: PaymentMethodOptions.Link;

    paypal?: PaymentMethodOptions.Paypal;

    sepa_debit?: PaymentMethodOptions.SepaDebit;

    us_bank_account?: PaymentMethodOptions.UsBankAccount;
  }

  export type Status =
    | 'canceled'
    | 'processing'
    | 'requires_action'
    | 'requires_confirmation'
    | 'requires_payment_method'
    | 'succeeded';

  export namespace AutomaticPaymentMethods {
    export type AllowRedirects = 'always' | 'never';
  }

  export namespace LastSetupError {
    export type Code =
      | 'account_closed'
      | 'account_country_invalid_address'
      | 'account_error_country_change_requires_additional_steps'
      | 'account_information_mismatch'
      | 'account_invalid'
      | 'account_number_invalid'
      | 'acss_debit_session_incomplete'
      | 'alipay_upgrade_required'
      | 'amount_too_large'
      | 'amount_too_small'
      | 'api_key_expired'
      | 'application_fees_not_allowed'
      | 'authentication_required'
      | 'balance_insufficient'
      | 'balance_invalid_parameter'
      | 'bank_account_bad_routing_numbers'
      | 'bank_account_declined'
      | 'bank_account_exists'
      | 'bank_account_restricted'
      | 'bank_account_unusable'
      | 'bank_account_unverified'
      | 'bank_account_verification_failed'
      | 'billing_invalid_mandate'
      | 'bitcoin_upgrade_required'
      | 'capture_charge_authorization_expired'
      | 'capture_unauthorized_payment'
      | 'card_decline_rate_limit_exceeded'
      | 'card_declined'
      | 'cardholder_phone_number_required'
      | 'charge_already_captured'
      | 'charge_already_refunded'
      | 'charge_disputed'
      | 'charge_exceeds_source_limit'
      | 'charge_exceeds_transaction_limit'
      | 'charge_expired_for_capture'
      | 'charge_invalid_parameter'
      | 'charge_not_refundable'
      | 'clearing_code_unsupported'
      | 'country_code_invalid'
      | 'country_unsupported'
      | 'coupon_expired'
      | 'customer_max_payment_methods'
      | 'customer_max_subscriptions'
      | 'customer_session_expired'
      | 'customer_tax_location_invalid'
      | 'debit_not_authorized'
      | 'email_invalid'
      | 'expired_card'
      | 'financial_connections_account_inactive'
      | 'financial_connections_account_pending_account_numbers'
      | 'financial_connections_account_unavailable_account_numbers'
      | 'financial_connections_no_successful_transaction_refresh'
      | 'forwarding_api_inactive'
      | 'forwarding_api_invalid_parameter'
      | 'forwarding_api_retryable_upstream_error'
      | 'forwarding_api_upstream_connection_error'
      | 'forwarding_api_upstream_connection_timeout'
      | 'forwarding_api_upstream_error'
      | 'idempotency_key_in_use'
      | 'incorrect_address'
      | 'incorrect_cvc'
      | 'incorrect_number'
      | 'incorrect_zip'
      | 'india_recurring_payment_mandate_canceled'
      | 'instant_payouts_config_disabled'
      | 'instant_payouts_currency_disabled'
      | 'instant_payouts_limit_exceeded'
      | 'instant_payouts_unsupported'
      | 'insufficient_funds'
      | 'intent_invalid_state'
      | 'intent_verification_method_missing'
      | 'invalid_card_type'
      | 'invalid_characters'
      | 'invalid_charge_amount'
      | 'invalid_cvc'
      | 'invalid_expiry_month'
      | 'invalid_expiry_year'
      | 'invalid_mandate_reference_prefix_format'
      | 'invalid_number'
      | 'invalid_source_usage'
      | 'invalid_tax_location'
      | 'invoice_no_customer_line_items'
      | 'invoice_no_payment_method_types'
      | 'invoice_no_subscription_line_items'
      | 'invoice_not_editable'
      | 'invoice_on_behalf_of_not_editable'
      | 'invoice_payment_intent_requires_action'
      | 'invoice_upcoming_none'
      | 'livemode_mismatch'
      | 'lock_timeout'
      | 'missing'
      | 'no_account'
      | 'not_allowed_on_standard_account'
      | 'out_of_inventory'
      | 'ownership_declaration_not_allowed'
      | 'parameter_invalid_empty'
      | 'parameter_invalid_integer'
      | 'parameter_invalid_string_blank'
      | 'parameter_invalid_string_empty'
      | 'parameter_missing'
      | 'parameter_unknown'
      | 'parameters_exclusive'
      | 'payment_intent_action_required'
      | 'payment_intent_authentication_failure'
      | 'payment_intent_incompatible_payment_method'
      | 'payment_intent_invalid_parameter'
      | 'payment_intent_konbini_rejected_confirmation_number'
      | 'payment_intent_mandate_invalid'
      | 'payment_intent_payment_attempt_expired'
      | 'payment_intent_payment_attempt_failed'
      | 'payment_intent_rate_limit_exceeded'
      | 'payment_intent_unexpected_state'
      | 'payment_method_bank_account_already_verified'
      | 'payment_method_bank_account_blocked'
      | 'payment_method_billing_details_address_missing'
      | 'payment_method_configuration_failures'
      | 'payment_method_currency_mismatch'
      | 'payment_method_customer_decline'
      | 'payment_method_invalid_parameter'
      | 'payment_method_invalid_parameter_testmode'
      | 'payment_method_microdeposit_failed'
      | 'payment_method_microdeposit_verification_amounts_invalid'
      | 'payment_method_microdeposit_verification_amounts_mismatch'
      | 'payment_method_microdeposit_verification_attempts_exceeded'
      | 'payment_method_microdeposit_verification_descriptor_code_mismatch'
      | 'payment_method_microdeposit_verification_timeout'
      | 'payment_method_not_available'
      | 'payment_method_provider_decline'
      | 'payment_method_provider_timeout'
      | 'payment_method_unactivated'
      | 'payment_method_unexpected_state'
      | 'payment_method_unsupported_type'
      | 'payout_reconciliation_not_ready'
      | 'payouts_limit_exceeded'
      | 'payouts_not_allowed'
      | 'platform_account_required'
      | 'platform_api_key_expired'
      | 'postal_code_invalid'
      | 'processing_error'
      | 'product_inactive'
      | 'progressive_onboarding_limit_exceeded'
      | 'rate_limit'
      | 'refer_to_customer'
      | 'refund_disputed_payment'
      | 'resource_already_exists'
      | 'resource_missing'
      | 'return_intent_already_processed'
      | 'routing_number_invalid'
      | 'secret_key_required'
      | 'sepa_unsupported_account'
      | 'setup_attempt_failed'
      | 'setup_intent_authentication_failure'
      | 'setup_intent_invalid_parameter'
      | 'setup_intent_mandate_invalid'
      | 'setup_intent_mobile_wallet_unsupported'
      | 'setup_intent_setup_attempt_expired'
      | 'setup_intent_unexpected_state'
      | 'shipping_address_invalid'
      | 'shipping_calculation_failed'
      | 'sku_inactive'
      | 'state_unsupported'
      | 'status_transition_invalid'
      | 'stripe_tax_inactive'
      | 'tax_id_invalid'
      | 'tax_id_prohibited'
      | 'taxes_calculation_failed'
      | 'terminal_location_country_unsupported'
      | 'terminal_reader_busy'
      | 'terminal_reader_hardware_fault'
      | 'terminal_reader_invalid_location_for_activation'
      | 'terminal_reader_invalid_location_for_payment'
      | 'terminal_reader_offline'
      | 'terminal_reader_timeout'
      | 'testmode_charges_only'
      | 'tls_version_unsupported'
      | 'token_already_used'
      | 'token_card_network_invalid'
      | 'token_in_use'
      | 'transfer_source_balance_parameters_mismatch'
      | 'transfers_not_allowed'
      | 'url_invalid';

    export type Type =
      | 'api_error'
      | 'card_error'
      | 'idempotency_error'
      | 'invalid_request_error';
  }

  export namespace NextAction {
    export interface CashappHandleRedirectOrDisplayQrCode {
      /**
       * The URL to the hosted Cash App Pay instructions page, which allows customers to view the QR code, and supports QR code refreshing on expiration.
       */
      hosted_instructions_url: string;

      /**
       * The url for mobile redirect based auth
       */
      mobile_auth_url: string;

      qr_code: CashappHandleRedirectOrDisplayQrCode.QrCode;
    }

    export interface RedirectToUrl {
      /**
       * If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
       */
      return_url: string | null;

      /**
       * The URL you must redirect your customer to in order to authenticate.
       */
      url: string | null;
    }

    export type UseStripeSdk = {
      [key: string]: unknown;
    };

    export interface VerifyWithMicrodeposits {
      /**
       * The timestamp when the microdeposits are expected to land.
       */
      arrival_date: number;

      /**
       * The URL for the hosted verification page, which allows customers to verify their bank account.
       */
      hosted_verification_url: string;

      /**
       * The type of the microdeposit sent to the customer. Used to distinguish between different verification methods.
       */
      microdeposit_type: VerifyWithMicrodeposits.MicrodepositType | null;
    }

    export namespace CashappHandleRedirectOrDisplayQrCode {
      export interface QrCode {
        /**
         * The date (unix timestamp) when the QR code expires.
         */
        expires_at: number;

        /**
         * The image_url_png string used to render QR code
         */
        image_url_png: string;

        /**
         * The image_url_svg string used to render QR code
         */
        image_url_svg: string;
      }
    }

    export namespace VerifyWithMicrodeposits {
      export type MicrodepositType = 'amounts' | 'descriptor_code';
    }
  }

  export namespace PaymentMethodOptions {
    export interface AcssDebit {
      /**
       * Currency supported by the bank account
       */
      currency: AcssDebit.Currency | null;

      mandate_options?: AcssDebit.MandateOptions;

      /**
       * Bank account verification method.
       */
      verification_method?: AcssDebit.VerificationMethod;
    }

    export interface AmazonPay {}

    export interface BacsDebit {
      mandate_options?: BacsDebit.MandateOptions;
    }

    export interface Card {
      /**
       * Configuration options for setting up an eMandate for cards issued in India.
       */
      mandate_options: Card.MandateOptions | null;

      /**
       * Selected network to process this SetupIntent on. Depends on the available networks of the card attached to the setup intent. Can be only set confirm-time.
       */
      network: Card.Network | null;

      /**
       * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
       */
      request_three_d_secure: Card.RequestThreeDSecure | null;
    }

    export interface CardPresent {}

    export interface Klarna {
      /**
       * The currency of the setup intent. Three letter ISO currency code.
       */
      currency: string | null;

      /**
       * Preferred locale of the Klarna checkout page that the customer is redirected to.
       */
      preferred_locale: string | null;
    }

    export interface Link {
      /**
       * [Deprecated] This is a legacy parameter that no longer has any function.
       * @deprecated
       */
      persistent_token: string | null;
    }

    export interface Paypal {
      /**
       * The PayPal Billing Agreement ID (BAID). This is an ID generated by PayPal which represents the mandate between the merchant and the customer.
       */
      billing_agreement_id: string | null;
    }

    export interface SepaDebit {
      mandate_options?: SepaDebit.MandateOptions;
    }

    export interface UsBankAccount {
      financial_connections?: UsBankAccount.FinancialConnections;

      mandate_options?: UsBankAccount.MandateOptions;

      /**
       * Bank account verification method.
       */
      verification_method?: UsBankAccount.VerificationMethod;
    }

    export namespace AcssDebit {
      export type Currency = 'cad' | 'usd';

      export interface MandateOptions {
        /**
         * A URL for custom mandate text
         */
        custom_mandate_url?: string;

        /**
         * List of Stripe products where this mandate can be selected automatically.
         */
        default_for?: Array<MandateOptions.DefaultFor>;

        /**
         * Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'.
         */
        interval_description: string | null;

        /**
         * Payment schedule for the mandate.
         */
        payment_schedule: MandateOptions.PaymentSchedule | null;

        /**
         * Transaction type of the mandate.
         */
        transaction_type: MandateOptions.TransactionType | null;
      }

      export type VerificationMethod =
        | 'automatic'
        | 'instant'
        | 'microdeposits';

      export namespace MandateOptions {
        export type DefaultFor = 'invoice' | 'subscription';

        export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

        export type TransactionType = 'business' | 'personal';
      }
    }

    export namespace BacsDebit {
      export interface MandateOptions {
        /**
         * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'DDIC' or 'STRIPE'.
         */
        reference_prefix?: string;
      }
    }

    export namespace Card {
      export interface MandateOptions {
        /**
         * Amount to be charged for future payments.
         */
        amount: number;

        /**
         * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
         */
        amount_type: MandateOptions.AmountType;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A description of the mandate or subscription that is meant to be displayed to the customer.
         */
        description: string | null;

        /**
         * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
         */
        end_date: number | null;

        /**
         * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
         */
        interval: MandateOptions.Interval;

        /**
         * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
         */
        interval_count: number | null;

        /**
         * Unique identifier for the mandate or subscription.
         */
        reference: string;

        /**
         * Start date of the mandate or subscription. Start date should not be lesser than yesterday.
         */
        start_date: number;

        /**
         * Specifies the type of mandates supported. Possible values are `india`.
         */
        supported_types: Array<'india'> | null;
      }

      export type Network =
        | 'amex'
        | 'cartes_bancaires'
        | 'diners'
        | 'discover'
        | 'eftpos_au'
        | 'girocard'
        | 'interac'
        | 'jcb'
        | 'link'
        | 'mastercard'
        | 'unionpay'
        | 'unknown'
        | 'visa';

      export type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';

      export namespace MandateOptions {
        export type AmountType = 'fixed' | 'maximum';

        export type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
      }
    }

    export namespace SepaDebit {
      export interface MandateOptions {
        /**
         * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'.
         */
        reference_prefix?: string;
      }
    }

    export namespace UsBankAccount {
      export interface FinancialConnections {
        filters?: FinancialConnections.Filters;

        /**
         * The list of permissions to request. The `payment_method` permission must be included.
         */
        permissions?: Array<FinancialConnections.Permission>;

        /**
         * Data features requested to be retrieved upon account creation.
         */
        prefetch: Array<FinancialConnections.Prefetch> | null;

        /**
         * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
         */
        return_url?: string;
      }

      export interface MandateOptions {
        /**
         * Mandate collection method
         */
        collection_method?: 'paper';
      }

      export type VerificationMethod =
        | 'automatic'
        | 'instant'
        | 'microdeposits';

      export namespace FinancialConnections {
        export interface Filters {
          /**
           * The account subcategories to use to filter for possible accounts to link. Valid subcategories are `checking` and `savings`.
           */
          account_subcategories?: Array<Filters.AccountSubcategory>;
        }

        export type Permission =
          | 'balances'
          | 'ownership'
          | 'payment_method'
          | 'transactions';

        export type Prefetch = 'balances' | 'ownership' | 'transactions';

        export namespace Filters {
          export type AccountSubcategory = 'checking' | 'savings';
        }
      }
    }
  }
}
export interface SetupIntentCreateParams {
  /**
   * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
   *
   * It can only be used for this Stripe Account's own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
   */
  attach_to_self?: boolean;

  /**
   * When you enable this parameter, this SetupIntent accepts payment methods that you enable in the Dashboard and that are compatible with its other parameters.
   */
  automatic_payment_methods?: SetupIntentCreateParams.AutomaticPaymentMethods;

  /**
   * Set to `true` to attempt to confirm this SetupIntent immediately. This parameter defaults to `false`. If a card is the attached payment method, you can provide a `return_url` in case further authentication is necessary.
   */
  confirm?: boolean;

  /**
   * ID of the ConfirmationToken used to confirm this SetupIntent.
   *
   * If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
   */
  confirmation_token?: string;

  /**
   * ID of the Customer this SetupIntent belongs to, if one exists.
   *
   * If present, the SetupIntent's payment method will be attached to the Customer on successful setup. Payment methods attached to other Customers cannot be used with this SetupIntent.
   */
  customer?: string;

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;

  /**
   * The list of payment method types to exclude from use with this SetupIntent.
   */
  excluded_payment_method_types?: Array<
    SetupIntentCreateParams.ExcludedPaymentMethodType
  >;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Indicates the directions of money movement for which this payment method is intended to be used.
   *
   * Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
   */
  flow_directions?: Array<SetupIntentCreateParams.FlowDirection>;

  /**
   * This hash contains details about the mandate to create. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/setup_intents/create#create_setup_intent-confirm).
   */
  mandate_data?: Emptyable<SetupIntentCreateParams.MandateData>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;

  /**
   * The Stripe account ID created for this SetupIntent.
   */
  on_behalf_of?: string;

  /**
   * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent.
   */
  payment_method?: string;

  /**
   * The ID of the [payment method configuration](https://stripe.com/docs/api/payment_method_configurations) to use with this SetupIntent.
   */
  payment_method_configuration?: string;

  /**
   * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
   * value in the SetupIntent.
   */
  payment_method_data?: SetupIntentCreateParams.PaymentMethodData;

  /**
   * Payment method-specific configuration for this SetupIntent.
   */
  payment_method_options?: SetupIntentCreateParams.PaymentMethodOptions;

  /**
   * The list of payment method types (for example, card) that this SetupIntent can use. If you don't provide this, Stripe will dynamically show relevant payment methods from your [payment method settings](https://dashboard.stripe.com/settings/payment_methods). A list of valid payment method types can be found [here](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type).
   */
  payment_method_types?: Array<string>;

  /**
   * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. To redirect to a mobile application, you can alternatively supply an application URI scheme. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/setup_intents/create#create_setup_intent-confirm).
   */
  return_url?: string;

  /**
   * If you populate this hash, this SetupIntent generates a `single_use` mandate after successful completion.
   *
   * Single-use mandates are only valid for the following payment methods: `acss_debit`, `alipay`, `au_becs_debit`, `bacs_debit`, `bancontact`, `boleto`, `ideal`, `link`, `sepa_debit`, and `us_bank_account`.
   */
  single_use?: SetupIntentCreateParams.SingleUse;

  /**
   * Indicates how the payment method is intended to be used in the future. If not provided, this value defaults to `off_session`.
   */
  usage?: SetupIntentCreateParams.Usage;

  /**
   * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
   */
  use_stripe_sdk?: boolean;
}
export namespace SetupIntentCreateParams {
  export interface AutomaticPaymentMethods {
    /**
     * Controls whether this SetupIntent will accept redirect-based payment methods.
     *
     * Redirect-based payment methods may require your customer to be redirected to a payment method's app or site for authentication or additional steps. To [confirm](https://stripe.com/docs/api/setup_intents/confirm) this SetupIntent, you may be required to provide a `return_url` to redirect customers back to your site after they authenticate or complete the setup.
     */
    allow_redirects?: AutomaticPaymentMethods.AllowRedirects;

    /**
     * Whether this feature is enabled.
     */
    enabled: boolean;
  }

  export type ExcludedPaymentMethodType =
    | 'acss_debit'
    | 'affirm'
    | 'afterpay_clearpay'
    | 'alipay'
    | 'alma'
    | 'amazon_pay'
    | 'au_becs_debit'
    | 'bacs_debit'
    | 'bancontact'
    | 'billie'
    | 'blik'
    | 'boleto'
    | 'card'
    | 'cashapp'
    | 'crypto'
    | 'customer_balance'
    | 'eps'
    | 'fpx'
    | 'giropay'
    | 'grabpay'
    | 'ideal'
    | 'kakao_pay'
    | 'klarna'
    | 'konbini'
    | 'kr_card'
    | 'mb_way'
    | 'mobilepay'
    | 'multibanco'
    | 'naver_pay'
    | 'nz_bank_account'
    | 'oxxo'
    | 'p24'
    | 'pay_by_bank'
    | 'payco'
    | 'paynow'
    | 'paypal'
    | 'pix'
    | 'promptpay'
    | 'revolut_pay'
    | 'samsung_pay'
    | 'satispay'
    | 'sepa_debit'
    | 'sofort'
    | 'swish'
    | 'twint'
    | 'us_bank_account'
    | 'wechat_pay'
    | 'zip';

  export type FlowDirection = 'inbound' | 'outbound';

  export interface MandateData {
    /**
     * This hash contains details about the customer acceptance of the Mandate.
     */
    customer_acceptance: MandateData.CustomerAcceptance;
  }

  export interface PaymentMethodData {
    /**
     * If this is an `acss_debit` PaymentMethod, this hash contains details about the ACSS Debit payment method.
     */
    acss_debit?: PaymentMethodData.AcssDebit;

    /**
     * If this is an `affirm` PaymentMethod, this hash contains details about the Affirm payment method.
     */
    affirm?: PaymentMethodData.Affirm;

    /**
     * If this is an `AfterpayClearpay` PaymentMethod, this hash contains details about the AfterpayClearpay payment method.
     */
    afterpay_clearpay?: PaymentMethodData.AfterpayClearpay;

    /**
     * If this is an `Alipay` PaymentMethod, this hash contains details about the Alipay payment method.
     */
    alipay?: PaymentMethodData.Alipay;

    /**
     * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to `unspecified`.
     */
    allow_redisplay?: PaymentMethodData.AllowRedisplay;

    /**
     * If this is a Alma PaymentMethod, this hash contains details about the Alma payment method.
     */
    alma?: PaymentMethodData.Alma;

    /**
     * If this is a AmazonPay PaymentMethod, this hash contains details about the AmazonPay payment method.
     */
    amazon_pay?: PaymentMethodData.AmazonPay;

    /**
     * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
     */
    au_becs_debit?: PaymentMethodData.AuBecsDebit;

    /**
     * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
     */
    bacs_debit?: PaymentMethodData.BacsDebit;

    /**
     * If this is a `bancontact` PaymentMethod, this hash contains details about the Bancontact payment method.
     */
    bancontact?: PaymentMethodData.Bancontact;

    /**
     * If this is a `billie` PaymentMethod, this hash contains details about the Billie payment method.
     */
    billie?: PaymentMethodData.Billie;

    /**
     * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
     */
    billing_details?: PaymentMethodData.BillingDetails;

    /**
     * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
     */
    blik?: PaymentMethodData.Blik;

    /**
     * If this is a `boleto` PaymentMethod, this hash contains details about the Boleto payment method.
     */
    boleto?: PaymentMethodData.Boleto;

    /**
     * If this is a `cashapp` PaymentMethod, this hash contains details about the Cash App Pay payment method.
     */
    cashapp?: PaymentMethodData.Cashapp;

    /**
     * If this is a Crypto PaymentMethod, this hash contains details about the Crypto payment method.
     */
    crypto?: PaymentMethodData.Crypto;

    /**
     * If this is a `customer_balance` PaymentMethod, this hash contains details about the CustomerBalance payment method.
     */
    customer_balance?: PaymentMethodData.CustomerBalance;

    /**
     * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
     */
    eps?: PaymentMethodData.Eps;

    /**
     * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
     */
    fpx?: PaymentMethodData.Fpx;

    /**
     * If this is a `giropay` PaymentMethod, this hash contains details about the Giropay payment method.
     */
    giropay?: PaymentMethodData.Giropay;

    /**
     * If this is a `grabpay` PaymentMethod, this hash contains details about the GrabPay payment method.
     */
    grabpay?: PaymentMethodData.Grabpay;

    /**
     * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
     */
    ideal?: PaymentMethodData.Ideal;

    /**
     * If this is an `interac_present` PaymentMethod, this hash contains details about the Interac Present payment method.
     */
    interac_present?: PaymentMethodData.InteracPresent;

    /**
     * If this is a `kakao_pay` PaymentMethod, this hash contains details about the Kakao Pay payment method.
     */
    kakao_pay?: PaymentMethodData.KakaoPay;

    /**
     * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method.
     */
    klarna?: PaymentMethodData.Klarna;

    /**
     * If this is a `konbini` PaymentMethod, this hash contains details about the Konbini payment method.
     */
    konbini?: PaymentMethodData.Konbini;

    /**
     * If this is a `kr_card` PaymentMethod, this hash contains details about the Korean Card payment method.
     */
    kr_card?: PaymentMethodData.KrCard;

    /**
     * If this is an `Link` PaymentMethod, this hash contains details about the Link payment method.
     */
    link?: PaymentMethodData.Link;

    /**
     * If this is a MB WAY PaymentMethod, this hash contains details about the MB WAY payment method.
     */
    mb_way?: PaymentMethodData.MbWay;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;

    /**
     * If this is a `mobilepay` PaymentMethod, this hash contains details about the MobilePay payment method.
     */
    mobilepay?: PaymentMethodData.Mobilepay;

    /**
     * If this is a `multibanco` PaymentMethod, this hash contains details about the Multibanco payment method.
     */
    multibanco?: PaymentMethodData.Multibanco;

    /**
     * If this is a `naver_pay` PaymentMethod, this hash contains details about the Naver Pay payment method.
     */
    naver_pay?: PaymentMethodData.NaverPay;

    /**
     * If this is an nz_bank_account PaymentMethod, this hash contains details about the nz_bank_account payment method.
     */
    nz_bank_account?: PaymentMethodData.NzBankAccount;

    /**
     * If this is an `oxxo` PaymentMethod, this hash contains details about the OXXO payment method.
     */
    oxxo?: PaymentMethodData.Oxxo;

    /**
     * If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
     */
    p24?: PaymentMethodData.P24;

    /**
     * If this is a `pay_by_bank` PaymentMethod, this hash contains details about the PayByBank payment method.
     */
    pay_by_bank?: PaymentMethodData.PayByBank;

    /**
     * If this is a `payco` PaymentMethod, this hash contains details about the PAYCO payment method.
     */
    payco?: PaymentMethodData.Payco;

    /**
     * If this is a `paynow` PaymentMethod, this hash contains details about the PayNow payment method.
     */
    paynow?: PaymentMethodData.Paynow;

    /**
     * If this is a `paypal` PaymentMethod, this hash contains details about the PayPal payment method.
     */
    paypal?: PaymentMethodData.Paypal;

    /**
     * If this is a `pix` PaymentMethod, this hash contains details about the Pix payment method.
     */
    pix?: PaymentMethodData.Pix;

    /**
     * If this is a `promptpay` PaymentMethod, this hash contains details about the PromptPay payment method.
     */
    promptpay?: PaymentMethodData.Promptpay;

    /**
     * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
     */
    radar_options?: PaymentMethodData.RadarOptions;

    /**
     * If this is a `revolut_pay` PaymentMethod, this hash contains details about the Revolut Pay payment method.
     */
    revolut_pay?: PaymentMethodData.RevolutPay;

    /**
     * If this is a `samsung_pay` PaymentMethod, this hash contains details about the SamsungPay payment method.
     */
    samsung_pay?: PaymentMethodData.SamsungPay;

    /**
     * If this is a `satispay` PaymentMethod, this hash contains details about the Satispay payment method.
     */
    satispay?: PaymentMethodData.Satispay;

    /**
     * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
     */
    sepa_debit?: PaymentMethodData.SepaDebit;

    /**
     * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
     */
    sofort?: PaymentMethodData.Sofort;

    /**
     * If this is a `swish` PaymentMethod, this hash contains details about the Swish payment method.
     */
    swish?: PaymentMethodData.Swish;

    /**
     * If this is a TWINT PaymentMethod, this hash contains details about the TWINT payment method.
     */
    twint?: PaymentMethodData.Twint;

    /**
     * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
     */
    type: PaymentMethodData.Type;

    /**
     * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
     */
    us_bank_account?: PaymentMethodData.UsBankAccount;

    /**
     * If this is an `wechat_pay` PaymentMethod, this hash contains details about the wechat_pay payment method.
     */
    wechat_pay?: PaymentMethodData.WechatPay;

    /**
     * If this is a `zip` PaymentMethod, this hash contains details about the Zip payment method.
     */
    zip?: PaymentMethodData.Zip;
  }

  export interface PaymentMethodOptions {
    /**
     * If this is a `acss_debit` SetupIntent, this sub-hash contains details about the ACSS Debit payment method options.
     */
    acss_debit?: PaymentMethodOptions.AcssDebit;

    /**
     * If this is a `amazon_pay` SetupIntent, this sub-hash contains details about the AmazonPay payment method options.
     */
    amazon_pay?: PaymentMethodOptions.AmazonPay;

    /**
     * If this is a `bacs_debit` SetupIntent, this sub-hash contains details about the Bacs Debit payment method options.
     */
    bacs_debit?: PaymentMethodOptions.BacsDebit;

    /**
     * Configuration for any card setup attempted on this SetupIntent.
     */
    card?: PaymentMethodOptions.Card;

    /**
     * If this is a `card_present` PaymentMethod, this sub-hash contains details about the card-present payment method options.
     */
    card_present?: PaymentMethodOptions.CardPresent;

    /**
     * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method options.
     */
    klarna?: PaymentMethodOptions.Klarna;

    /**
     * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
     */
    link?: PaymentMethodOptions.Link;

    /**
     * If this is a `paypal` PaymentMethod, this sub-hash contains details about the PayPal payment method options.
     */
    paypal?: PaymentMethodOptions.Paypal;

    /**
     * If this is a `sepa_debit` SetupIntent, this sub-hash contains details about the SEPA Debit payment method options.
     */
    sepa_debit?: PaymentMethodOptions.SepaDebit;

    /**
     * If this is a `us_bank_account` SetupIntent, this sub-hash contains details about the US bank account payment method options.
     */
    us_bank_account?: PaymentMethodOptions.UsBankAccount;
  }

  export interface SingleUse {
    /**
     * Amount the customer is granting permission to collect later. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
     */
    amount: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
  }

  export type Usage = 'off_session' | 'on_session';

  export namespace AutomaticPaymentMethods {
    export type AllowRedirects = 'always' | 'never';
  }

  export namespace MandateData {
    export interface CustomerAcceptance {
      /**
       * The time at which the customer accepted the Mandate.
       */
      accepted_at?: number;

      /**
       * If this is a Mandate accepted offline, this hash contains details about the offline acceptance.
       */
      offline?: CustomerAcceptance.Offline;

      /**
       * If this is a Mandate accepted online, this hash contains details about the online acceptance.
       */
      online?: CustomerAcceptance.Online;

      /**
       * The type of customer acceptance information included with the Mandate. One of `online` or `offline`.
       */
      type: CustomerAcceptance.Type;
    }

    export namespace CustomerAcceptance {
      export interface Offline {}

      export interface Online {
        /**
         * The IP address from which the Mandate was accepted by the customer.
         */
        ip_address: string;

        /**
         * The user agent of the browser from which the Mandate was accepted by the customer.
         */
        user_agent: string;
      }

      export type Type = 'offline' | 'online';
    }
  }

  export namespace PaymentMethodData {
    export interface AcssDebit {
      /**
       * Customer's bank account number.
       */
      account_number: string;

      /**
       * Institution number of the customer's bank.
       */
      institution_number: string;

      /**
       * Transit number of the customer's bank.
       */
      transit_number: string;
    }

    export interface Affirm {}

    export interface AfterpayClearpay {}

    export interface Alipay {}

    export type AllowRedisplay = 'always' | 'limited' | 'unspecified';

    export interface Alma {}

    export interface AmazonPay {}

    export interface AuBecsDebit {
      /**
       * The account number for the bank account.
       */
      account_number: string;

      /**
       * Bank-State-Branch number of the bank account.
       */
      bsb_number: string;
    }

    export interface BacsDebit {
      /**
       * Account number of the bank account that the funds will be debited from.
       */
      account_number?: string;

      /**
       * Sort code of the bank account. (e.g., `10-20-30`)
       */
      sort_code?: string;
    }

    export interface Bancontact {}

    export interface Billie {}

    export interface BillingDetails {
      /**
       * Billing address.
       */
      address?: Emptyable<AddressParam>;

      /**
       * Email address.
       */
      email?: Emptyable<string>;

      /**
       * Full name.
       */
      name?: Emptyable<string>;

      /**
       * Billing phone number (including extension).
       */
      phone?: Emptyable<string>;

      /**
       * Taxpayer identification number. Used only for transactions between LATAM buyers and non-LATAM sellers.
       */
      tax_id?: string;
    }

    export interface Blik {}

    export interface Boleto {
      /**
       * The tax ID of the customer (CPF for individual consumers or CNPJ for businesses consumers)
       */
      tax_id: string;
    }

    export interface Cashapp {}

    export interface Crypto {}

    export interface CustomerBalance {}

    export interface Eps {
      /**
       * The customer's bank.
       */
      bank?: Eps.Bank;
    }

    export interface Fpx {
      /**
       * Account holder type for FPX transaction
       */
      account_holder_type?: Fpx.AccountHolderType;

      /**
       * The customer's bank.
       */
      bank: Fpx.Bank;
    }

    export interface Giropay {}

    export interface Grabpay {}

    export interface Ideal {
      /**
       * The customer's bank. Only use this parameter for existing customers. Don't use it for new customers.
       */
      bank?: Ideal.Bank;
    }

    export interface InteracPresent {}

    export interface KakaoPay {}

    export interface Klarna {
      /**
       * Customer's date of birth
       */
      dob?: Klarna.Dob;
    }

    export interface Konbini {}

    export interface KrCard {}

    export interface Link {}

    export interface MbWay {}

    export interface Mobilepay {}

    export interface Multibanco {}

    export interface NaverPay {
      /**
       * Whether to use Naver Pay points or a card to fund this transaction. If not provided, this defaults to `card`.
       */
      funding?: NaverPay.Funding;
    }

    export interface NzBankAccount {
      /**
       * The name on the bank account. Only required if the account holder name is different from the name of the authorized signatory collected in the PaymentMethod's billing details.
       */
      account_holder_name?: string;

      /**
       * The account number for the bank account.
       */
      account_number: string;

      /**
       * The numeric code for the bank account's bank.
       */
      bank_code: string;

      /**
       * The numeric code for the bank account's bank branch.
       */
      branch_code: string;

      reference?: string;

      /**
       * The suffix of the bank account number.
       */
      suffix: string;
    }

    export interface Oxxo {}

    export interface P24 {
      /**
       * The customer's bank.
       */
      bank?: P24.Bank;
    }

    export interface PayByBank {}

    export interface Payco {}

    export interface Paynow {}

    export interface Paypal {}

    export interface Pix {}

    export interface Promptpay {}

    export interface RadarOptions {
      /**
       * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
       */
      session?: string;
    }

    export interface RevolutPay {}

    export interface SamsungPay {}

    export interface Satispay {}

    export interface SepaDebit {
      /**
       * IBAN of the bank account.
       */
      iban: string;
    }

    export interface Sofort {
      /**
       * Two-letter ISO code representing the country the bank account is located in.
       */
      country: Sofort.Country;
    }

    export interface Swish {}

    export interface Twint {}

    export type Type =
      | 'acss_debit'
      | 'affirm'
      | 'afterpay_clearpay'
      | 'alipay'
      | 'alma'
      | 'amazon_pay'
      | 'au_becs_debit'
      | 'bacs_debit'
      | 'bancontact'
      | 'billie'
      | 'blik'
      | 'boleto'
      | 'cashapp'
      | 'crypto'
      | 'customer_balance'
      | 'eps'
      | 'fpx'
      | 'giropay'
      | 'grabpay'
      | 'ideal'
      | 'kakao_pay'
      | 'klarna'
      | 'konbini'
      | 'kr_card'
      | 'link'
      | 'mb_way'
      | 'mobilepay'
      | 'multibanco'
      | 'naver_pay'
      | 'nz_bank_account'
      | 'oxxo'
      | 'p24'
      | 'pay_by_bank'
      | 'payco'
      | 'paynow'
      | 'paypal'
      | 'pix'
      | 'promptpay'
      | 'revolut_pay'
      | 'samsung_pay'
      | 'satispay'
      | 'sepa_debit'
      | 'sofort'
      | 'swish'
      | 'twint'
      | 'us_bank_account'
      | 'wechat_pay'
      | 'zip';

    export interface UsBankAccount {
      /**
       * Account holder type: individual or company.
       */
      account_holder_type?: UsBankAccount.AccountHolderType;

      /**
       * Account number of the bank account.
       */
      account_number?: string;

      /**
       * Account type: checkings or savings. Defaults to checking if omitted.
       */
      account_type?: UsBankAccount.AccountType;

      /**
       * The ID of a Financial Connections Account to use as a payment method.
       */
      financial_connections_account?: string;

      /**
       * Routing number of the bank account.
       */
      routing_number?: string;
    }

    export interface WechatPay {}

    export interface Zip {}

    export namespace Eps {
      export type Bank =
        | 'arzte_und_apotheker_bank'
        | 'austrian_anadi_bank_ag'
        | 'bank_austria'
        | 'bankhaus_carl_spangler'
        | 'bankhaus_schelhammer_und_schattera_ag'
        | 'bawag_psk_ag'
        | 'bks_bank_ag'
        | 'brull_kallmus_bank_ag'
        | 'btv_vier_lander_bank'
        | 'capital_bank_grawe_gruppe_ag'
        | 'deutsche_bank_ag'
        | 'dolomitenbank'
        | 'easybank_ag'
        | 'erste_bank_und_sparkassen'
        | 'hypo_alpeadriabank_international_ag'
        | 'hypo_bank_burgenland_aktiengesellschaft'
        | 'hypo_noe_lb_fur_niederosterreich_u_wien'
        | 'hypo_oberosterreich_salzburg_steiermark'
        | 'hypo_tirol_bank_ag'
        | 'hypo_vorarlberg_bank_ag'
        | 'marchfelder_bank'
        | 'oberbank_ag'
        | 'raiffeisen_bankengruppe_osterreich'
        | 'schoellerbank_ag'
        | 'sparda_bank_wien'
        | 'volksbank_gruppe'
        | 'volkskreditbank_ag'
        | 'vr_bank_braunau';
    }

    export namespace Fpx {
      export type AccountHolderType = 'company' | 'individual';

      export type Bank =
        | 'affin_bank'
        | 'agrobank'
        | 'alliance_bank'
        | 'ambank'
        | 'bank_islam'
        | 'bank_muamalat'
        | 'bank_of_china'
        | 'bank_rakyat'
        | 'bsn'
        | 'cimb'
        | 'deutsche_bank'
        | 'hong_leong_bank'
        | 'hsbc'
        | 'kfh'
        | 'maybank2e'
        | 'maybank2u'
        | 'ocbc'
        | 'pb_enterprise'
        | 'public_bank'
        | 'rhb'
        | 'standard_chartered'
        | 'uob';
    }

    export namespace Ideal {
      export type Bank =
        | 'abn_amro'
        | 'asn_bank'
        | 'bunq'
        | 'buut'
        | 'handelsbanken'
        | 'ing'
        | 'knab'
        | 'moneyou'
        | 'n26'
        | 'nn'
        | 'rabobank'
        | 'regiobank'
        | 'revolut'
        | 'sns_bank'
        | 'triodos_bank'
        | 'van_lanschot'
        | 'yoursafe';
    }

    export namespace Klarna {
      export interface Dob {
        /**
         * The day of birth, between 1 and 31.
         */
        day: number;

        /**
         * The month of birth, between 1 and 12.
         */
        month: number;

        /**
         * The four-digit year of birth.
         */
        year: number;
      }
    }

    export namespace NaverPay {
      export type Funding = 'card' | 'points';
    }

    export namespace P24 {
      export type Bank =
        | 'alior_bank'
        | 'bank_millennium'
        | 'bank_nowy_bfg_sa'
        | 'bank_pekao_sa'
        | 'banki_spbdzielcze'
        | 'blik'
        | 'bnp_paribas'
        | 'boz'
        | 'citi_handlowy'
        | 'credit_agricole'
        | 'envelobank'
        | 'etransfer_pocztowy24'
        | 'getin_bank'
        | 'ideabank'
        | 'ing'
        | 'inteligo'
        | 'mbank_mtransfer'
        | 'nest_przelew'
        | 'noble_pay'
        | 'pbac_z_ipko'
        | 'plus_bank'
        | 'santander_przelew24'
        | 'tmobile_usbugi_bankowe'
        | 'toyota_bank'
        | 'velobank'
        | 'volkswagen_bank';
    }

    export namespace Sofort {
      export type Country = 'AT' | 'BE' | 'DE' | 'ES' | 'IT' | 'NL';
    }

    export namespace UsBankAccount {
      export type AccountHolderType = 'company' | 'individual';

      export type AccountType = 'checking' | 'savings';
    }
  }

  export namespace PaymentMethodOptions {
    export interface AcssDebit {
      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: AcssDebit.Currency;

      /**
       * Additional fields for Mandate creation
       */
      mandate_options?: AcssDebit.MandateOptions;

      /**
       * Bank account verification method.
       */
      verification_method?: AcssDebit.VerificationMethod;
    }

    export interface AmazonPay {}

    export interface BacsDebit {
      /**
       * Additional fields for Mandate creation
       */
      mandate_options?: BacsDebit.MandateOptions;
    }

    export interface Card {
      /**
       * Configuration options for setting up an eMandate for cards issued in India.
       */
      mandate_options?: Card.MandateOptions;

      /**
       * When specified, this parameter signals that a card has been collected
       * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
       * parameter can only be provided during confirmation.
       */
      moto?: boolean;

      /**
       * Selected network to process this SetupIntent on. Depends on the available networks of the card attached to the SetupIntent. Can be only set confirm-time.
       */
      network?: Card.Network;

      /**
       * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
       */
      request_three_d_secure?: Card.RequestThreeDSecure;

      /**
       * If 3D Secure authentication was performed with a third-party provider,
       * the authentication details to use for this setup.
       */
      three_d_secure?: Card.ThreeDSecure;
    }

    export interface CardPresent {}

    export interface Klarna {
      /**
       * The currency of the SetupIntent. Three letter ISO currency code.
       */
      currency?: string;

      /**
       * On-demand details if setting up a payment method for on-demand payments.
       */
      on_demand?: Klarna.OnDemand;

      /**
       * Preferred language of the Klarna authorization page that the customer is redirected to
       */
      preferred_locale?: Klarna.PreferredLocale;

      /**
       * Subscription details if setting up or charging a subscription
       */
      subscriptions?: Emptyable<Array<Klarna.Subscription>>;
    }

    export interface Link {
      /**
       * [Deprecated] This is a legacy parameter that no longer has any function.
       * @deprecated
       */
      persistent_token?: string;
    }

    export interface Paypal {
      /**
       * The PayPal Billing Agreement ID (BAID). This is an ID generated by PayPal which represents the mandate between the merchant and the customer.
       */
      billing_agreement_id?: string;
    }

    export interface SepaDebit {
      /**
       * Additional fields for Mandate creation
       */
      mandate_options?: SepaDebit.MandateOptions;
    }

    export interface UsBankAccount {
      /**
       * Additional fields for Financial Connections Session creation
       */
      financial_connections?: UsBankAccount.FinancialConnections;

      /**
       * Additional fields for Mandate creation
       */
      mandate_options?: UsBankAccount.MandateOptions;

      /**
       * Additional fields for network related functions
       */
      networks?: UsBankAccount.Networks;

      /**
       * Bank account verification method.
       */
      verification_method?: UsBankAccount.VerificationMethod;
    }

    export namespace AcssDebit {
      export type Currency = 'cad' | 'usd';

      export interface MandateOptions {
        /**
         * A URL for custom mandate text to render during confirmation step.
         * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
         * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
         */
        custom_mandate_url?: Emptyable<string>;

        /**
         * List of Stripe products where this mandate can be selected automatically.
         */
        default_for?: Array<MandateOptions.DefaultFor>;

        /**
         * Description of the mandate interval. Only required if 'payment_schedule' parameter is 'interval' or 'combined'.
         */
        interval_description?: string;

        /**
         * Payment schedule for the mandate.
         */
        payment_schedule?: MandateOptions.PaymentSchedule;

        /**
         * Transaction type of the mandate.
         */
        transaction_type?: MandateOptions.TransactionType;
      }

      export type VerificationMethod =
        | 'automatic'
        | 'instant'
        | 'microdeposits';

      export namespace MandateOptions {
        export type DefaultFor = 'invoice' | 'subscription';

        export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

        export type TransactionType = 'business' | 'personal';
      }
    }

    export namespace BacsDebit {
      export interface MandateOptions {
        /**
         * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'DDIC' or 'STRIPE'.
         */
        reference_prefix?: Emptyable<string>;
      }
    }

    export namespace Card {
      export interface MandateOptions {
        /**
         * Amount to be charged for future payments.
         */
        amount: number;

        /**
         * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
         */
        amount_type: MandateOptions.AmountType;

        /**
         * Currency in which future payments will be charged. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A description of the mandate or subscription that is meant to be displayed to the customer.
         */
        description?: string;

        /**
         * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
         */
        end_date?: number;

        /**
         * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
         */
        interval: MandateOptions.Interval;

        /**
         * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
         */
        interval_count?: number;

        /**
         * Unique identifier for the mandate or subscription.
         */
        reference: string;

        /**
         * Start date of the mandate or subscription. Start date should not be lesser than yesterday.
         */
        start_date: number;

        /**
         * Specifies the type of mandates supported. Possible values are `india`.
         */
        supported_types?: Array<'india'>;
      }

      export type Network =
        | 'amex'
        | 'cartes_bancaires'
        | 'diners'
        | 'discover'
        | 'eftpos_au'
        | 'girocard'
        | 'interac'
        | 'jcb'
        | 'link'
        | 'mastercard'
        | 'unionpay'
        | 'unknown'
        | 'visa';

      export type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';

      export interface ThreeDSecure {
        /**
         * The `transStatus` returned from the card Issuer's ACS in the ARes.
         */
        ares_trans_status?: ThreeDSecure.AresTransStatus;

        /**
         * The cryptogram, also known as the "authentication value" (AAV, CAVV or
         * AEVV). This value is 20 bytes, base64-encoded into a 28-character string.
         * (Most 3D Secure providers will return the base64-encoded version, which
         * is what you should specify here.)
         */
        cryptogram?: string;

        /**
         * The Electronic Commerce Indicator (ECI) is returned by your 3D Secure
         * provider and indicates what degree of authentication was performed.
         */
        electronic_commerce_indicator?: ThreeDSecure.ElectronicCommerceIndicator;

        /**
         * Network specific 3DS fields. Network specific arguments require an
         * explicit card brand choice. The parameter `payment_method_options.card.network``
         * must be populated accordingly
         */
        network_options?: ThreeDSecure.NetworkOptions;

        /**
         * The challenge indicator (`threeDSRequestorChallengeInd`) which was requested in the
         * AReq sent to the card Issuer's ACS. A string containing 2 digits from 01-99.
         */
        requestor_challenge_indicator?: string;

        /**
         * For 3D Secure 1, the XID. For 3D Secure 2, the Directory Server
         * Transaction ID (dsTransID).
         */
        transaction_id?: string;

        /**
         * The version of 3D Secure that was performed.
         */
        version?: ThreeDSecure.Version;
      }

      export namespace MandateOptions {
        export type AmountType = 'fixed' | 'maximum';

        export type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
      }

      export namespace ThreeDSecure {
        export type AresTransStatus = 'A' | 'C' | 'I' | 'N' | 'R' | 'U' | 'Y';

        export type ElectronicCommerceIndicator =
          | '01'
          | '02'
          | '05'
          | '06'
          | '07';

        export interface NetworkOptions {
          /**
           * Cartes Bancaires-specific 3DS fields.
           */
          cartes_bancaires?: NetworkOptions.CartesBancaires;
        }

        export type Version = '1.0.2' | '2.1.0' | '2.2.0';

        export namespace NetworkOptions {
          export interface CartesBancaires {
            /**
             * The cryptogram calculation algorithm used by the card Issuer's ACS
             * to calculate the Authentication cryptogram. Also known as `cavvAlgorithm`.
             * messageExtension: CB-AVALGO
             */
            cb_avalgo: CartesBancaires.CbAvalgo;

            /**
             * The exemption indicator returned from Cartes Bancaires in the ARes.
             * message extension: CB-EXEMPTION; string (4 characters)
             * This is a 3 byte bitmap (low significant byte first and most significant
             * bit first) that has been Base64 encoded
             */
            cb_exemption?: string;

            /**
             * The risk score returned from Cartes Bancaires in the ARes.
             * message extension: CB-SCORE; numeric value 0-99
             */
            cb_score?: number;
          }

          export namespace CartesBancaires {
            export type CbAvalgo = '0' | '1' | '2' | '3' | '4' | 'A';
          }
        }
      }
    }

    export namespace Klarna {
      export interface OnDemand {
        /**
         * Your average amount value. You can use a value across your customer base, or segment based on customer type, country, etc.
         */
        average_amount?: number;

        /**
         * The maximum value you may charge a customer per purchase. You can use a value across your customer base, or segment based on customer type, country, etc.
         */
        maximum_amount?: number;

        /**
         * The lowest or minimum value you may charge a customer per purchase. You can use a value across your customer base, or segment based on customer type, country, etc.
         */
        minimum_amount?: number;

        /**
         * Interval at which the customer is making purchases
         */
        purchase_interval?: OnDemand.PurchaseInterval;

        /**
         * The number of `purchase_interval` between charges
         */
        purchase_interval_count?: number;
      }

      export type PreferredLocale =
        | 'cs-CZ'
        | 'da-DK'
        | 'de-AT'
        | 'de-CH'
        | 'de-DE'
        | 'el-GR'
        | 'en-AT'
        | 'en-AU'
        | 'en-BE'
        | 'en-CA'
        | 'en-CH'
        | 'en-CZ'
        | 'en-DE'
        | 'en-DK'
        | 'en-ES'
        | 'en-FI'
        | 'en-FR'
        | 'en-GB'
        | 'en-GR'
        | 'en-IE'
        | 'en-IT'
        | 'en-NL'
        | 'en-NO'
        | 'en-NZ'
        | 'en-PL'
        | 'en-PT'
        | 'en-RO'
        | 'en-SE'
        | 'en-US'
        | 'es-ES'
        | 'es-US'
        | 'fi-FI'
        | 'fr-BE'
        | 'fr-CA'
        | 'fr-CH'
        | 'fr-FR'
        | 'it-CH'
        | 'it-IT'
        | 'nb-NO'
        | 'nl-BE'
        | 'nl-NL'
        | 'pl-PL'
        | 'pt-PT'
        | 'ro-RO'
        | 'sv-FI'
        | 'sv-SE';

      export interface Subscription {
        /**
         * Unit of time between subscription charges.
         */
        interval: Subscription.Interval;

        /**
         * The number of intervals (specified in the `interval` attribute) between subscription charges. For example, `interval=month` and `interval_count=3` charges every 3 months.
         */
        interval_count?: number;

        /**
         * Name for subscription.
         */
        name?: string;

        /**
         * Describes the upcoming charge for this subscription.
         */
        next_billing: Subscription.NextBilling;

        /**
         * A non-customer-facing reference to correlate subscription charges in the Klarna app. Use a value that persists across subscription charges.
         */
        reference: string;
      }

      export namespace OnDemand {
        export type PurchaseInterval = 'day' | 'month' | 'week' | 'year';
      }

      export namespace Subscription {
        export type Interval = 'day' | 'month' | 'week' | 'year';

        export interface NextBilling {
          /**
           * The amount of the next charge for the subscription.
           */
          amount: number;

          /**
           * The date of the next charge for the subscription in YYYY-MM-DD format.
           */
          date: string;
        }
      }
    }

    export namespace SepaDebit {
      export interface MandateOptions {
        /**
         * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'.
         */
        reference_prefix?: Emptyable<string>;
      }
    }

    export namespace UsBankAccount {
      export interface FinancialConnections {
        /**
         * Provide filters for the linked accounts that the customer can select for the payment method.
         */
        filters?: FinancialConnections.Filters;

        /**
         * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
         */
        permissions?: Array<FinancialConnections.Permission>;

        /**
         * List of data features that you would like to retrieve upon account creation.
         */
        prefetch?: Array<FinancialConnections.Prefetch>;

        /**
         * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
         */
        return_url?: string;
      }

      export interface MandateOptions {
        /**
         * The method used to collect offline mandate customer acceptance.
         */
        collection_method?: Emptyable<'paper'>;
      }

      export interface Networks {
        /**
         * Triggers validations to run across the selected networks
         */
        requested?: Array<Networks.Requested>;
      }

      export type VerificationMethod =
        | 'automatic'
        | 'instant'
        | 'microdeposits';

      export namespace FinancialConnections {
        export interface Filters {
          /**
           * The account subcategories to use to filter for selectable accounts. Valid subcategories are `checking` and `savings`.
           */
          account_subcategories?: Array<Filters.AccountSubcategory>;
        }

        export type Permission =
          | 'balances'
          | 'ownership'
          | 'payment_method'
          | 'transactions';

        export type Prefetch = 'balances' | 'ownership' | 'transactions';

        export namespace Filters {
          export type AccountSubcategory = 'checking' | 'savings';
        }
      }

      export namespace Networks {
        export type Requested = 'ach' | 'us_domestic_wire';
      }
    }
  }
}
export interface SetupIntentRetrieveParams {
  /**
   * The client secret of the SetupIntent. We require this string if you use a publishable key to retrieve the SetupIntent.
   */
  client_secret?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface SetupIntentUpdateParams {
  /**
   * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
   *
   * It can only be used for this Stripe Account's own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
   */
  attach_to_self?: boolean;

  /**
   * ID of the Customer this SetupIntent belongs to, if one exists.
   *
   * If present, the SetupIntent's payment method will be attached to the Customer on successful setup. Payment methods attached to other Customers cannot be used with this SetupIntent.
   */
  customer?: string;

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;

  /**
   * The list of payment method types to exclude from use with this SetupIntent.
   */
  excluded_payment_method_types?: Emptyable<
    Array<SetupIntentUpdateParams.ExcludedPaymentMethodType>
  >;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Indicates the directions of money movement for which this payment method is intended to be used.
   *
   * Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
   */
  flow_directions?: Array<SetupIntentUpdateParams.FlowDirection>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;

  /**
   * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent. To unset this field to null, pass in an empty string.
   */
  payment_method?: string;

  /**
   * The ID of the [payment method configuration](https://stripe.com/docs/api/payment_method_configurations) to use with this SetupIntent.
   */
  payment_method_configuration?: string;

  /**
   * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
   * value in the SetupIntent.
   */
  payment_method_data?: SetupIntentUpdateParams.PaymentMethodData;

  /**
   * Payment method-specific configuration for this SetupIntent.
   */
  payment_method_options?: SetupIntentUpdateParams.PaymentMethodOptions;

  /**
   * The list of payment method types (for example, card) that this SetupIntent can set up. If you don't provide this, Stripe will dynamically show relevant payment methods from your [payment method settings](https://dashboard.stripe.com/settings/payment_methods). A list of valid payment method types can be found [here](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type).
   */
  payment_method_types?: Array<string>;
}
export namespace SetupIntentUpdateParams {
  export type ExcludedPaymentMethodType =
    | 'acss_debit'
    | 'affirm'
    | 'afterpay_clearpay'
    | 'alipay'
    | 'alma'
    | 'amazon_pay'
    | 'au_becs_debit'
    | 'bacs_debit'
    | 'bancontact'
    | 'billie'
    | 'blik'
    | 'boleto'
    | 'card'
    | 'cashapp'
    | 'crypto'
    | 'customer_balance'
    | 'eps'
    | 'fpx'
    | 'giropay'
    | 'grabpay'
    | 'ideal'
    | 'kakao_pay'
    | 'klarna'
    | 'konbini'
    | 'kr_card'
    | 'mb_way'
    | 'mobilepay'
    | 'multibanco'
    | 'naver_pay'
    | 'nz_bank_account'
    | 'oxxo'
    | 'p24'
    | 'pay_by_bank'
    | 'payco'
    | 'paynow'
    | 'paypal'
    | 'pix'
    | 'promptpay'
    | 'revolut_pay'
    | 'samsung_pay'
    | 'satispay'
    | 'sepa_debit'
    | 'sofort'
    | 'swish'
    | 'twint'
    | 'us_bank_account'
    | 'wechat_pay'
    | 'zip';

  export type FlowDirection = 'inbound' | 'outbound';

  export interface PaymentMethodData {
    /**
     * If this is an `acss_debit` PaymentMethod, this hash contains details about the ACSS Debit payment method.
     */
    acss_debit?: PaymentMethodData.AcssDebit;

    /**
     * If this is an `affirm` PaymentMethod, this hash contains details about the Affirm payment method.
     */
    affirm?: PaymentMethodData.Affirm;

    /**
     * If this is an `AfterpayClearpay` PaymentMethod, this hash contains details about the AfterpayClearpay payment method.
     */
    afterpay_clearpay?: PaymentMethodData.AfterpayClearpay;

    /**
     * If this is an `Alipay` PaymentMethod, this hash contains details about the Alipay payment method.
     */
    alipay?: PaymentMethodData.Alipay;

    /**
     * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to `unspecified`.
     */
    allow_redisplay?: PaymentMethodData.AllowRedisplay;

    /**
     * If this is a Alma PaymentMethod, this hash contains details about the Alma payment method.
     */
    alma?: PaymentMethodData.Alma;

    /**
     * If this is a AmazonPay PaymentMethod, this hash contains details about the AmazonPay payment method.
     */
    amazon_pay?: PaymentMethodData.AmazonPay;

    /**
     * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
     */
    au_becs_debit?: PaymentMethodData.AuBecsDebit;

    /**
     * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
     */
    bacs_debit?: PaymentMethodData.BacsDebit;

    /**
     * If this is a `bancontact` PaymentMethod, this hash contains details about the Bancontact payment method.
     */
    bancontact?: PaymentMethodData.Bancontact;

    /**
     * If this is a `billie` PaymentMethod, this hash contains details about the Billie payment method.
     */
    billie?: PaymentMethodData.Billie;

    /**
     * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
     */
    billing_details?: PaymentMethodData.BillingDetails;

    /**
     * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
     */
    blik?: PaymentMethodData.Blik;

    /**
     * If this is a `boleto` PaymentMethod, this hash contains details about the Boleto payment method.
     */
    boleto?: PaymentMethodData.Boleto;

    /**
     * If this is a `cashapp` PaymentMethod, this hash contains details about the Cash App Pay payment method.
     */
    cashapp?: PaymentMethodData.Cashapp;

    /**
     * If this is a Crypto PaymentMethod, this hash contains details about the Crypto payment method.
     */
    crypto?: PaymentMethodData.Crypto;

    /**
     * If this is a `customer_balance` PaymentMethod, this hash contains details about the CustomerBalance payment method.
     */
    customer_balance?: PaymentMethodData.CustomerBalance;

    /**
     * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
     */
    eps?: PaymentMethodData.Eps;

    /**
     * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
     */
    fpx?: PaymentMethodData.Fpx;

    /**
     * If this is a `giropay` PaymentMethod, this hash contains details about the Giropay payment method.
     */
    giropay?: PaymentMethodData.Giropay;

    /**
     * If this is a `grabpay` PaymentMethod, this hash contains details about the GrabPay payment method.
     */
    grabpay?: PaymentMethodData.Grabpay;

    /**
     * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
     */
    ideal?: PaymentMethodData.Ideal;

    /**
     * If this is an `interac_present` PaymentMethod, this hash contains details about the Interac Present payment method.
     */
    interac_present?: PaymentMethodData.InteracPresent;

    /**
     * If this is a `kakao_pay` PaymentMethod, this hash contains details about the Kakao Pay payment method.
     */
    kakao_pay?: PaymentMethodData.KakaoPay;

    /**
     * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method.
     */
    klarna?: PaymentMethodData.Klarna;

    /**
     * If this is a `konbini` PaymentMethod, this hash contains details about the Konbini payment method.
     */
    konbini?: PaymentMethodData.Konbini;

    /**
     * If this is a `kr_card` PaymentMethod, this hash contains details about the Korean Card payment method.
     */
    kr_card?: PaymentMethodData.KrCard;

    /**
     * If this is an `Link` PaymentMethod, this hash contains details about the Link payment method.
     */
    link?: PaymentMethodData.Link;

    /**
     * If this is a MB WAY PaymentMethod, this hash contains details about the MB WAY payment method.
     */
    mb_way?: PaymentMethodData.MbWay;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;

    /**
     * If this is a `mobilepay` PaymentMethod, this hash contains details about the MobilePay payment method.
     */
    mobilepay?: PaymentMethodData.Mobilepay;

    /**
     * If this is a `multibanco` PaymentMethod, this hash contains details about the Multibanco payment method.
     */
    multibanco?: PaymentMethodData.Multibanco;

    /**
     * If this is a `naver_pay` PaymentMethod, this hash contains details about the Naver Pay payment method.
     */
    naver_pay?: PaymentMethodData.NaverPay;

    /**
     * If this is an nz_bank_account PaymentMethod, this hash contains details about the nz_bank_account payment method.
     */
    nz_bank_account?: PaymentMethodData.NzBankAccount;

    /**
     * If this is an `oxxo` PaymentMethod, this hash contains details about the OXXO payment method.
     */
    oxxo?: PaymentMethodData.Oxxo;

    /**
     * If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
     */
    p24?: PaymentMethodData.P24;

    /**
     * If this is a `pay_by_bank` PaymentMethod, this hash contains details about the PayByBank payment method.
     */
    pay_by_bank?: PaymentMethodData.PayByBank;

    /**
     * If this is a `payco` PaymentMethod, this hash contains details about the PAYCO payment method.
     */
    payco?: PaymentMethodData.Payco;

    /**
     * If this is a `paynow` PaymentMethod, this hash contains details about the PayNow payment method.
     */
    paynow?: PaymentMethodData.Paynow;

    /**
     * If this is a `paypal` PaymentMethod, this hash contains details about the PayPal payment method.
     */
    paypal?: PaymentMethodData.Paypal;

    /**
     * If this is a `pix` PaymentMethod, this hash contains details about the Pix payment method.
     */
    pix?: PaymentMethodData.Pix;

    /**
     * If this is a `promptpay` PaymentMethod, this hash contains details about the PromptPay payment method.
     */
    promptpay?: PaymentMethodData.Promptpay;

    /**
     * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
     */
    radar_options?: PaymentMethodData.RadarOptions;

    /**
     * If this is a `revolut_pay` PaymentMethod, this hash contains details about the Revolut Pay payment method.
     */
    revolut_pay?: PaymentMethodData.RevolutPay;

    /**
     * If this is a `samsung_pay` PaymentMethod, this hash contains details about the SamsungPay payment method.
     */
    samsung_pay?: PaymentMethodData.SamsungPay;

    /**
     * If this is a `satispay` PaymentMethod, this hash contains details about the Satispay payment method.
     */
    satispay?: PaymentMethodData.Satispay;

    /**
     * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
     */
    sepa_debit?: PaymentMethodData.SepaDebit;

    /**
     * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
     */
    sofort?: PaymentMethodData.Sofort;

    /**
     * If this is a `swish` PaymentMethod, this hash contains details about the Swish payment method.
     */
    swish?: PaymentMethodData.Swish;

    /**
     * If this is a TWINT PaymentMethod, this hash contains details about the TWINT payment method.
     */
    twint?: PaymentMethodData.Twint;

    /**
     * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
     */
    type: PaymentMethodData.Type;

    /**
     * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
     */
    us_bank_account?: PaymentMethodData.UsBankAccount;

    /**
     * If this is an `wechat_pay` PaymentMethod, this hash contains details about the wechat_pay payment method.
     */
    wechat_pay?: PaymentMethodData.WechatPay;

    /**
     * If this is a `zip` PaymentMethod, this hash contains details about the Zip payment method.
     */
    zip?: PaymentMethodData.Zip;
  }

  export interface PaymentMethodOptions {
    /**
     * If this is a `acss_debit` SetupIntent, this sub-hash contains details about the ACSS Debit payment method options.
     */
    acss_debit?: PaymentMethodOptions.AcssDebit;

    /**
     * If this is a `amazon_pay` SetupIntent, this sub-hash contains details about the AmazonPay payment method options.
     */
    amazon_pay?: PaymentMethodOptions.AmazonPay;

    /**
     * If this is a `bacs_debit` SetupIntent, this sub-hash contains details about the Bacs Debit payment method options.
     */
    bacs_debit?: PaymentMethodOptions.BacsDebit;

    /**
     * Configuration for any card setup attempted on this SetupIntent.
     */
    card?: PaymentMethodOptions.Card;

    /**
     * If this is a `card_present` PaymentMethod, this sub-hash contains details about the card-present payment method options.
     */
    card_present?: PaymentMethodOptions.CardPresent;

    /**
     * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method options.
     */
    klarna?: PaymentMethodOptions.Klarna;

    /**
     * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
     */
    link?: PaymentMethodOptions.Link;

    /**
     * If this is a `paypal` PaymentMethod, this sub-hash contains details about the PayPal payment method options.
     */
    paypal?: PaymentMethodOptions.Paypal;

    /**
     * If this is a `sepa_debit` SetupIntent, this sub-hash contains details about the SEPA Debit payment method options.
     */
    sepa_debit?: PaymentMethodOptions.SepaDebit;

    /**
     * If this is a `us_bank_account` SetupIntent, this sub-hash contains details about the US bank account payment method options.
     */
    us_bank_account?: PaymentMethodOptions.UsBankAccount;
  }

  export namespace PaymentMethodData {
    export interface AcssDebit {
      /**
       * Customer's bank account number.
       */
      account_number: string;

      /**
       * Institution number of the customer's bank.
       */
      institution_number: string;

      /**
       * Transit number of the customer's bank.
       */
      transit_number: string;
    }

    export interface Affirm {}

    export interface AfterpayClearpay {}

    export interface Alipay {}

    export type AllowRedisplay = 'always' | 'limited' | 'unspecified';

    export interface Alma {}

    export interface AmazonPay {}

    export interface AuBecsDebit {
      /**
       * The account number for the bank account.
       */
      account_number: string;

      /**
       * Bank-State-Branch number of the bank account.
       */
      bsb_number: string;
    }

    export interface BacsDebit {
      /**
       * Account number of the bank account that the funds will be debited from.
       */
      account_number?: string;

      /**
       * Sort code of the bank account. (e.g., `10-20-30`)
       */
      sort_code?: string;
    }

    export interface Bancontact {}

    export interface Billie {}

    export interface BillingDetails {
      /**
       * Billing address.
       */
      address?: Emptyable<AddressParam>;

      /**
       * Email address.
       */
      email?: Emptyable<string>;

      /**
       * Full name.
       */
      name?: Emptyable<string>;

      /**
       * Billing phone number (including extension).
       */
      phone?: Emptyable<string>;

      /**
       * Taxpayer identification number. Used only for transactions between LATAM buyers and non-LATAM sellers.
       */
      tax_id?: string;
    }

    export interface Blik {}

    export interface Boleto {
      /**
       * The tax ID of the customer (CPF for individual consumers or CNPJ for businesses consumers)
       */
      tax_id: string;
    }

    export interface Cashapp {}

    export interface Crypto {}

    export interface CustomerBalance {}

    export interface Eps {
      /**
       * The customer's bank.
       */
      bank?: Eps.Bank;
    }

    export interface Fpx {
      /**
       * Account holder type for FPX transaction
       */
      account_holder_type?: Fpx.AccountHolderType;

      /**
       * The customer's bank.
       */
      bank: Fpx.Bank;
    }

    export interface Giropay {}

    export interface Grabpay {}

    export interface Ideal {
      /**
       * The customer's bank. Only use this parameter for existing customers. Don't use it for new customers.
       */
      bank?: Ideal.Bank;
    }

    export interface InteracPresent {}

    export interface KakaoPay {}

    export interface Klarna {
      /**
       * Customer's date of birth
       */
      dob?: Klarna.Dob;
    }

    export interface Konbini {}

    export interface KrCard {}

    export interface Link {}

    export interface MbWay {}

    export interface Mobilepay {}

    export interface Multibanco {}

    export interface NaverPay {
      /**
       * Whether to use Naver Pay points or a card to fund this transaction. If not provided, this defaults to `card`.
       */
      funding?: NaverPay.Funding;
    }

    export interface NzBankAccount {
      /**
       * The name on the bank account. Only required if the account holder name is different from the name of the authorized signatory collected in the PaymentMethod's billing details.
       */
      account_holder_name?: string;

      /**
       * The account number for the bank account.
       */
      account_number: string;

      /**
       * The numeric code for the bank account's bank.
       */
      bank_code: string;

      /**
       * The numeric code for the bank account's bank branch.
       */
      branch_code: string;

      reference?: string;

      /**
       * The suffix of the bank account number.
       */
      suffix: string;
    }

    export interface Oxxo {}

    export interface P24 {
      /**
       * The customer's bank.
       */
      bank?: P24.Bank;
    }

    export interface PayByBank {}

    export interface Payco {}

    export interface Paynow {}

    export interface Paypal {}

    export interface Pix {}

    export interface Promptpay {}

    export interface RadarOptions {
      /**
       * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
       */
      session?: string;
    }

    export interface RevolutPay {}

    export interface SamsungPay {}

    export interface Satispay {}

    export interface SepaDebit {
      /**
       * IBAN of the bank account.
       */
      iban: string;
    }

    export interface Sofort {
      /**
       * Two-letter ISO code representing the country the bank account is located in.
       */
      country: Sofort.Country;
    }

    export interface Swish {}

    export interface Twint {}

    export type Type =
      | 'acss_debit'
      | 'affirm'
      | 'afterpay_clearpay'
      | 'alipay'
      | 'alma'
      | 'amazon_pay'
      | 'au_becs_debit'
      | 'bacs_debit'
      | 'bancontact'
      | 'billie'
      | 'blik'
      | 'boleto'
      | 'cashapp'
      | 'crypto'
      | 'customer_balance'
      | 'eps'
      | 'fpx'
      | 'giropay'
      | 'grabpay'
      | 'ideal'
      | 'kakao_pay'
      | 'klarna'
      | 'konbini'
      | 'kr_card'
      | 'link'
      | 'mb_way'
      | 'mobilepay'
      | 'multibanco'
      | 'naver_pay'
      | 'nz_bank_account'
      | 'oxxo'
      | 'p24'
      | 'pay_by_bank'
      | 'payco'
      | 'paynow'
      | 'paypal'
      | 'pix'
      | 'promptpay'
      | 'revolut_pay'
      | 'samsung_pay'
      | 'satispay'
      | 'sepa_debit'
      | 'sofort'
      | 'swish'
      | 'twint'
      | 'us_bank_account'
      | 'wechat_pay'
      | 'zip';

    export interface UsBankAccount {
      /**
       * Account holder type: individual or company.
       */
      account_holder_type?: UsBankAccount.AccountHolderType;

      /**
       * Account number of the bank account.
       */
      account_number?: string;

      /**
       * Account type: checkings or savings. Defaults to checking if omitted.
       */
      account_type?: UsBankAccount.AccountType;

      /**
       * The ID of a Financial Connections Account to use as a payment method.
       */
      financial_connections_account?: string;

      /**
       * Routing number of the bank account.
       */
      routing_number?: string;
    }

    export interface WechatPay {}

    export interface Zip {}

    export namespace Eps {
      export type Bank =
        | 'arzte_und_apotheker_bank'
        | 'austrian_anadi_bank_ag'
        | 'bank_austria'
        | 'bankhaus_carl_spangler'
        | 'bankhaus_schelhammer_und_schattera_ag'
        | 'bawag_psk_ag'
        | 'bks_bank_ag'
        | 'brull_kallmus_bank_ag'
        | 'btv_vier_lander_bank'
        | 'capital_bank_grawe_gruppe_ag'
        | 'deutsche_bank_ag'
        | 'dolomitenbank'
        | 'easybank_ag'
        | 'erste_bank_und_sparkassen'
        | 'hypo_alpeadriabank_international_ag'
        | 'hypo_bank_burgenland_aktiengesellschaft'
        | 'hypo_noe_lb_fur_niederosterreich_u_wien'
        | 'hypo_oberosterreich_salzburg_steiermark'
        | 'hypo_tirol_bank_ag'
        | 'hypo_vorarlberg_bank_ag'
        | 'marchfelder_bank'
        | 'oberbank_ag'
        | 'raiffeisen_bankengruppe_osterreich'
        | 'schoellerbank_ag'
        | 'sparda_bank_wien'
        | 'volksbank_gruppe'
        | 'volkskreditbank_ag'
        | 'vr_bank_braunau';
    }

    export namespace Fpx {
      export type AccountHolderType = 'company' | 'individual';

      export type Bank =
        | 'affin_bank'
        | 'agrobank'
        | 'alliance_bank'
        | 'ambank'
        | 'bank_islam'
        | 'bank_muamalat'
        | 'bank_of_china'
        | 'bank_rakyat'
        | 'bsn'
        | 'cimb'
        | 'deutsche_bank'
        | 'hong_leong_bank'
        | 'hsbc'
        | 'kfh'
        | 'maybank2e'
        | 'maybank2u'
        | 'ocbc'
        | 'pb_enterprise'
        | 'public_bank'
        | 'rhb'
        | 'standard_chartered'
        | 'uob';
    }

    export namespace Ideal {
      export type Bank =
        | 'abn_amro'
        | 'asn_bank'
        | 'bunq'
        | 'buut'
        | 'handelsbanken'
        | 'ing'
        | 'knab'
        | 'moneyou'
        | 'n26'
        | 'nn'
        | 'rabobank'
        | 'regiobank'
        | 'revolut'
        | 'sns_bank'
        | 'triodos_bank'
        | 'van_lanschot'
        | 'yoursafe';
    }

    export namespace Klarna {
      export interface Dob {
        /**
         * The day of birth, between 1 and 31.
         */
        day: number;

        /**
         * The month of birth, between 1 and 12.
         */
        month: number;

        /**
         * The four-digit year of birth.
         */
        year: number;
      }
    }

    export namespace NaverPay {
      export type Funding = 'card' | 'points';
    }

    export namespace P24 {
      export type Bank =
        | 'alior_bank'
        | 'bank_millennium'
        | 'bank_nowy_bfg_sa'
        | 'bank_pekao_sa'
        | 'banki_spbdzielcze'
        | 'blik'
        | 'bnp_paribas'
        | 'boz'
        | 'citi_handlowy'
        | 'credit_agricole'
        | 'envelobank'
        | 'etransfer_pocztowy24'
        | 'getin_bank'
        | 'ideabank'
        | 'ing'
        | 'inteligo'
        | 'mbank_mtransfer'
        | 'nest_przelew'
        | 'noble_pay'
        | 'pbac_z_ipko'
        | 'plus_bank'
        | 'santander_przelew24'
        | 'tmobile_usbugi_bankowe'
        | 'toyota_bank'
        | 'velobank'
        | 'volkswagen_bank';
    }

    export namespace Sofort {
      export type Country = 'AT' | 'BE' | 'DE' | 'ES' | 'IT' | 'NL';
    }

    export namespace UsBankAccount {
      export type AccountHolderType = 'company' | 'individual';

      export type AccountType = 'checking' | 'savings';
    }
  }

  export namespace PaymentMethodOptions {
    export interface AcssDebit {
      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: AcssDebit.Currency;

      /**
       * Additional fields for Mandate creation
       */
      mandate_options?: AcssDebit.MandateOptions;

      /**
       * Bank account verification method.
       */
      verification_method?: AcssDebit.VerificationMethod;
    }

    export interface AmazonPay {}

    export interface BacsDebit {
      /**
       * Additional fields for Mandate creation
       */
      mandate_options?: BacsDebit.MandateOptions;
    }

    export interface Card {
      /**
       * Configuration options for setting up an eMandate for cards issued in India.
       */
      mandate_options?: Card.MandateOptions;

      /**
       * When specified, this parameter signals that a card has been collected
       * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
       * parameter can only be provided during confirmation.
       */
      moto?: boolean;

      /**
       * Selected network to process this SetupIntent on. Depends on the available networks of the card attached to the SetupIntent. Can be only set confirm-time.
       */
      network?: Card.Network;

      /**
       * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
       */
      request_three_d_secure?: Card.RequestThreeDSecure;

      /**
       * If 3D Secure authentication was performed with a third-party provider,
       * the authentication details to use for this setup.
       */
      three_d_secure?: Card.ThreeDSecure;
    }

    export interface CardPresent {}

    export interface Klarna {
      /**
       * The currency of the SetupIntent. Three letter ISO currency code.
       */
      currency?: string;

      /**
       * On-demand details if setting up a payment method for on-demand payments.
       */
      on_demand?: Klarna.OnDemand;

      /**
       * Preferred language of the Klarna authorization page that the customer is redirected to
       */
      preferred_locale?: Klarna.PreferredLocale;

      /**
       * Subscription details if setting up or charging a subscription
       */
      subscriptions?: Emptyable<Array<Klarna.Subscription>>;
    }

    export interface Link {
      /**
       * [Deprecated] This is a legacy parameter that no longer has any function.
       * @deprecated
       */
      persistent_token?: string;
    }

    export interface Paypal {
      /**
       * The PayPal Billing Agreement ID (BAID). This is an ID generated by PayPal which represents the mandate between the merchant and the customer.
       */
      billing_agreement_id?: string;
    }

    export interface SepaDebit {
      /**
       * Additional fields for Mandate creation
       */
      mandate_options?: SepaDebit.MandateOptions;
    }

    export interface UsBankAccount {
      /**
       * Additional fields for Financial Connections Session creation
       */
      financial_connections?: UsBankAccount.FinancialConnections;

      /**
       * Additional fields for Mandate creation
       */
      mandate_options?: UsBankAccount.MandateOptions;

      /**
       * Additional fields for network related functions
       */
      networks?: UsBankAccount.Networks;

      /**
       * Bank account verification method.
       */
      verification_method?: UsBankAccount.VerificationMethod;
    }

    export namespace AcssDebit {
      export type Currency = 'cad' | 'usd';

      export interface MandateOptions {
        /**
         * A URL for custom mandate text to render during confirmation step.
         * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
         * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
         */
        custom_mandate_url?: Emptyable<string>;

        /**
         * List of Stripe products where this mandate can be selected automatically.
         */
        default_for?: Array<MandateOptions.DefaultFor>;

        /**
         * Description of the mandate interval. Only required if 'payment_schedule' parameter is 'interval' or 'combined'.
         */
        interval_description?: string;

        /**
         * Payment schedule for the mandate.
         */
        payment_schedule?: MandateOptions.PaymentSchedule;

        /**
         * Transaction type of the mandate.
         */
        transaction_type?: MandateOptions.TransactionType;
      }

      export type VerificationMethod =
        | 'automatic'
        | 'instant'
        | 'microdeposits';

      export namespace MandateOptions {
        export type DefaultFor = 'invoice' | 'subscription';

        export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

        export type TransactionType = 'business' | 'personal';
      }
    }

    export namespace BacsDebit {
      export interface MandateOptions {
        /**
         * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'DDIC' or 'STRIPE'.
         */
        reference_prefix?: Emptyable<string>;
      }
    }

    export namespace Card {
      export interface MandateOptions {
        /**
         * Amount to be charged for future payments.
         */
        amount: number;

        /**
         * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
         */
        amount_type: MandateOptions.AmountType;

        /**
         * Currency in which future payments will be charged. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A description of the mandate or subscription that is meant to be displayed to the customer.
         */
        description?: string;

        /**
         * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
         */
        end_date?: number;

        /**
         * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
         */
        interval: MandateOptions.Interval;

        /**
         * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
         */
        interval_count?: number;

        /**
         * Unique identifier for the mandate or subscription.
         */
        reference: string;

        /**
         * Start date of the mandate or subscription. Start date should not be lesser than yesterday.
         */
        start_date: number;

        /**
         * Specifies the type of mandates supported. Possible values are `india`.
         */
        supported_types?: Array<'india'>;
      }

      export type Network =
        | 'amex'
        | 'cartes_bancaires'
        | 'diners'
        | 'discover'
        | 'eftpos_au'
        | 'girocard'
        | 'interac'
        | 'jcb'
        | 'link'
        | 'mastercard'
        | 'unionpay'
        | 'unknown'
        | 'visa';

      export type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';

      export interface ThreeDSecure {
        /**
         * The `transStatus` returned from the card Issuer's ACS in the ARes.
         */
        ares_trans_status?: ThreeDSecure.AresTransStatus;

        /**
         * The cryptogram, also known as the "authentication value" (AAV, CAVV or
         * AEVV). This value is 20 bytes, base64-encoded into a 28-character string.
         * (Most 3D Secure providers will return the base64-encoded version, which
         * is what you should specify here.)
         */
        cryptogram?: string;

        /**
         * The Electronic Commerce Indicator (ECI) is returned by your 3D Secure
         * provider and indicates what degree of authentication was performed.
         */
        electronic_commerce_indicator?: ThreeDSecure.ElectronicCommerceIndicator;

        /**
         * Network specific 3DS fields. Network specific arguments require an
         * explicit card brand choice. The parameter `payment_method_options.card.network``
         * must be populated accordingly
         */
        network_options?: ThreeDSecure.NetworkOptions;

        /**
         * The challenge indicator (`threeDSRequestorChallengeInd`) which was requested in the
         * AReq sent to the card Issuer's ACS. A string containing 2 digits from 01-99.
         */
        requestor_challenge_indicator?: string;

        /**
         * For 3D Secure 1, the XID. For 3D Secure 2, the Directory Server
         * Transaction ID (dsTransID).
         */
        transaction_id?: string;

        /**
         * The version of 3D Secure that was performed.
         */
        version?: ThreeDSecure.Version;
      }

      export namespace MandateOptions {
        export type AmountType = 'fixed' | 'maximum';

        export type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
      }

      export namespace ThreeDSecure {
        export type AresTransStatus = 'A' | 'C' | 'I' | 'N' | 'R' | 'U' | 'Y';

        export type ElectronicCommerceIndicator =
          | '01'
          | '02'
          | '05'
          | '06'
          | '07';

        export interface NetworkOptions {
          /**
           * Cartes Bancaires-specific 3DS fields.
           */
          cartes_bancaires?: NetworkOptions.CartesBancaires;
        }

        export type Version = '1.0.2' | '2.1.0' | '2.2.0';

        export namespace NetworkOptions {
          export interface CartesBancaires {
            /**
             * The cryptogram calculation algorithm used by the card Issuer's ACS
             * to calculate the Authentication cryptogram. Also known as `cavvAlgorithm`.
             * messageExtension: CB-AVALGO
             */
            cb_avalgo: CartesBancaires.CbAvalgo;

            /**
             * The exemption indicator returned from Cartes Bancaires in the ARes.
             * message extension: CB-EXEMPTION; string (4 characters)
             * This is a 3 byte bitmap (low significant byte first and most significant
             * bit first) that has been Base64 encoded
             */
            cb_exemption?: string;

            /**
             * The risk score returned from Cartes Bancaires in the ARes.
             * message extension: CB-SCORE; numeric value 0-99
             */
            cb_score?: number;
          }

          export namespace CartesBancaires {
            export type CbAvalgo = '0' | '1' | '2' | '3' | '4' | 'A';
          }
        }
      }
    }

    export namespace Klarna {
      export interface OnDemand {
        /**
         * Your average amount value. You can use a value across your customer base, or segment based on customer type, country, etc.
         */
        average_amount?: number;

        /**
         * The maximum value you may charge a customer per purchase. You can use a value across your customer base, or segment based on customer type, country, etc.
         */
        maximum_amount?: number;

        /**
         * The lowest or minimum value you may charge a customer per purchase. You can use a value across your customer base, or segment based on customer type, country, etc.
         */
        minimum_amount?: number;

        /**
         * Interval at which the customer is making purchases
         */
        purchase_interval?: OnDemand.PurchaseInterval;

        /**
         * The number of `purchase_interval` between charges
         */
        purchase_interval_count?: number;
      }

      export type PreferredLocale =
        | 'cs-CZ'
        | 'da-DK'
        | 'de-AT'
        | 'de-CH'
        | 'de-DE'
        | 'el-GR'
        | 'en-AT'
        | 'en-AU'
        | 'en-BE'
        | 'en-CA'
        | 'en-CH'
        | 'en-CZ'
        | 'en-DE'
        | 'en-DK'
        | 'en-ES'
        | 'en-FI'
        | 'en-FR'
        | 'en-GB'
        | 'en-GR'
        | 'en-IE'
        | 'en-IT'
        | 'en-NL'
        | 'en-NO'
        | 'en-NZ'
        | 'en-PL'
        | 'en-PT'
        | 'en-RO'
        | 'en-SE'
        | 'en-US'
        | 'es-ES'
        | 'es-US'
        | 'fi-FI'
        | 'fr-BE'
        | 'fr-CA'
        | 'fr-CH'
        | 'fr-FR'
        | 'it-CH'
        | 'it-IT'
        | 'nb-NO'
        | 'nl-BE'
        | 'nl-NL'
        | 'pl-PL'
        | 'pt-PT'
        | 'ro-RO'
        | 'sv-FI'
        | 'sv-SE';

      export interface Subscription {
        /**
         * Unit of time between subscription charges.
         */
        interval: Subscription.Interval;

        /**
         * The number of intervals (specified in the `interval` attribute) between subscription charges. For example, `interval=month` and `interval_count=3` charges every 3 months.
         */
        interval_count?: number;

        /**
         * Name for subscription.
         */
        name?: string;

        /**
         * Describes the upcoming charge for this subscription.
         */
        next_billing: Subscription.NextBilling;

        /**
         * A non-customer-facing reference to correlate subscription charges in the Klarna app. Use a value that persists across subscription charges.
         */
        reference: string;
      }

      export namespace OnDemand {
        export type PurchaseInterval = 'day' | 'month' | 'week' | 'year';
      }

      export namespace Subscription {
        export type Interval = 'day' | 'month' | 'week' | 'year';

        export interface NextBilling {
          /**
           * The amount of the next charge for the subscription.
           */
          amount: number;

          /**
           * The date of the next charge for the subscription in YYYY-MM-DD format.
           */
          date: string;
        }
      }
    }

    export namespace SepaDebit {
      export interface MandateOptions {
        /**
         * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'.
         */
        reference_prefix?: Emptyable<string>;
      }
    }

    export namespace UsBankAccount {
      export interface FinancialConnections {
        /**
         * Provide filters for the linked accounts that the customer can select for the payment method.
         */
        filters?: FinancialConnections.Filters;

        /**
         * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
         */
        permissions?: Array<FinancialConnections.Permission>;

        /**
         * List of data features that you would like to retrieve upon account creation.
         */
        prefetch?: Array<FinancialConnections.Prefetch>;

        /**
         * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
         */
        return_url?: string;
      }

      export interface MandateOptions {
        /**
         * The method used to collect offline mandate customer acceptance.
         */
        collection_method?: Emptyable<'paper'>;
      }

      export interface Networks {
        /**
         * Triggers validations to run across the selected networks
         */
        requested?: Array<Networks.Requested>;
      }

      export type VerificationMethod =
        | 'automatic'
        | 'instant'
        | 'microdeposits';

      export namespace FinancialConnections {
        export interface Filters {
          /**
           * The account subcategories to use to filter for selectable accounts. Valid subcategories are `checking` and `savings`.
           */
          account_subcategories?: Array<Filters.AccountSubcategory>;
        }

        export type Permission =
          | 'balances'
          | 'ownership'
          | 'payment_method'
          | 'transactions';

        export type Prefetch = 'balances' | 'ownership' | 'transactions';

        export namespace Filters {
          export type AccountSubcategory = 'checking' | 'savings';
        }
      }

      export namespace Networks {
        export type Requested = 'ach' | 'us_domestic_wire';
      }
    }
  }
}
export interface SetupIntentListParams extends PaginationParams {
  /**
   * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
   *
   * It can only be used for this Stripe Account's own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
   */
  attach_to_self?: boolean;

  /**
   * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
   */
  created?: RangeQueryParam | number;

  /**
   * Only return SetupIntents for the customer specified by this customer ID.
   */
  customer?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Only return SetupIntents that associate with the specified payment method.
   */
  payment_method?: string;
}
export interface SetupIntentCancelParams {
  /**
   * Reason for canceling this SetupIntent. Possible values are: `abandoned`, `requested_by_customer`, or `duplicate`
   */
  cancellation_reason?: SetupIntentCancelParams.CancellationReason;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export namespace SetupIntentCancelParams {
  export type CancellationReason =
    | 'abandoned'
    | 'duplicate'
    | 'requested_by_customer';
}
export interface SetupIntentConfirmParams {
  /**
   * ID of the ConfirmationToken used to confirm this SetupIntent.
   *
   * If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
   */
  confirmation_token?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  mandate_data?: Emptyable<SetupIntentConfirmParams.MandateData>;

  /**
   * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent.
   */
  payment_method?: string;

  /**
   * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
   * value in the SetupIntent.
   */
  payment_method_data?: SetupIntentConfirmParams.PaymentMethodData;

  /**
   * Payment method-specific configuration for this SetupIntent.
   */
  payment_method_options?: SetupIntentConfirmParams.PaymentMethodOptions;

  /**
   * The URL to redirect your customer back to after they authenticate on the payment method's app or site.
   * If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme.
   * This parameter is only used for cards and other redirect-based payment methods.
   */
  return_url?: string;

  /**
   * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
   */
  use_stripe_sdk?: boolean;
}
export namespace SetupIntentConfirmParams {
  export interface MandateData {
    /**
     * This hash contains details about the customer acceptance of the Mandate.
     */
    customer_acceptance?: MandateData.CustomerAcceptance;
  }

  export interface PaymentMethodData {
    /**
     * If this is an `acss_debit` PaymentMethod, this hash contains details about the ACSS Debit payment method.
     */
    acss_debit?: PaymentMethodData.AcssDebit;

    /**
     * If this is an `affirm` PaymentMethod, this hash contains details about the Affirm payment method.
     */
    affirm?: PaymentMethodData.Affirm;

    /**
     * If this is an `AfterpayClearpay` PaymentMethod, this hash contains details about the AfterpayClearpay payment method.
     */
    afterpay_clearpay?: PaymentMethodData.AfterpayClearpay;

    /**
     * If this is an `Alipay` PaymentMethod, this hash contains details about the Alipay payment method.
     */
    alipay?: PaymentMethodData.Alipay;

    /**
     * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to `unspecified`.
     */
    allow_redisplay?: PaymentMethodData.AllowRedisplay;

    /**
     * If this is a Alma PaymentMethod, this hash contains details about the Alma payment method.
     */
    alma?: PaymentMethodData.Alma;

    /**
     * If this is a AmazonPay PaymentMethod, this hash contains details about the AmazonPay payment method.
     */
    amazon_pay?: PaymentMethodData.AmazonPay;

    /**
     * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
     */
    au_becs_debit?: PaymentMethodData.AuBecsDebit;

    /**
     * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
     */
    bacs_debit?: PaymentMethodData.BacsDebit;

    /**
     * If this is a `bancontact` PaymentMethod, this hash contains details about the Bancontact payment method.
     */
    bancontact?: PaymentMethodData.Bancontact;

    /**
     * If this is a `billie` PaymentMethod, this hash contains details about the Billie payment method.
     */
    billie?: PaymentMethodData.Billie;

    /**
     * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
     */
    billing_details?: PaymentMethodData.BillingDetails;

    /**
     * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
     */
    blik?: PaymentMethodData.Blik;

    /**
     * If this is a `boleto` PaymentMethod, this hash contains details about the Boleto payment method.
     */
    boleto?: PaymentMethodData.Boleto;

    /**
     * If this is a `cashapp` PaymentMethod, this hash contains details about the Cash App Pay payment method.
     */
    cashapp?: PaymentMethodData.Cashapp;

    /**
     * If this is a Crypto PaymentMethod, this hash contains details about the Crypto payment method.
     */
    crypto?: PaymentMethodData.Crypto;

    /**
     * If this is a `customer_balance` PaymentMethod, this hash contains details about the CustomerBalance payment method.
     */
    customer_balance?: PaymentMethodData.CustomerBalance;

    /**
     * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
     */
    eps?: PaymentMethodData.Eps;

    /**
     * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
     */
    fpx?: PaymentMethodData.Fpx;

    /**
     * If this is a `giropay` PaymentMethod, this hash contains details about the Giropay payment method.
     */
    giropay?: PaymentMethodData.Giropay;

    /**
     * If this is a `grabpay` PaymentMethod, this hash contains details about the GrabPay payment method.
     */
    grabpay?: PaymentMethodData.Grabpay;

    /**
     * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
     */
    ideal?: PaymentMethodData.Ideal;

    /**
     * If this is an `interac_present` PaymentMethod, this hash contains details about the Interac Present payment method.
     */
    interac_present?: PaymentMethodData.InteracPresent;

    /**
     * If this is a `kakao_pay` PaymentMethod, this hash contains details about the Kakao Pay payment method.
     */
    kakao_pay?: PaymentMethodData.KakaoPay;

    /**
     * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method.
     */
    klarna?: PaymentMethodData.Klarna;

    /**
     * If this is a `konbini` PaymentMethod, this hash contains details about the Konbini payment method.
     */
    konbini?: PaymentMethodData.Konbini;

    /**
     * If this is a `kr_card` PaymentMethod, this hash contains details about the Korean Card payment method.
     */
    kr_card?: PaymentMethodData.KrCard;

    /**
     * If this is an `Link` PaymentMethod, this hash contains details about the Link payment method.
     */
    link?: PaymentMethodData.Link;

    /**
     * If this is a MB WAY PaymentMethod, this hash contains details about the MB WAY payment method.
     */
    mb_way?: PaymentMethodData.MbWay;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;

    /**
     * If this is a `mobilepay` PaymentMethod, this hash contains details about the MobilePay payment method.
     */
    mobilepay?: PaymentMethodData.Mobilepay;

    /**
     * If this is a `multibanco` PaymentMethod, this hash contains details about the Multibanco payment method.
     */
    multibanco?: PaymentMethodData.Multibanco;

    /**
     * If this is a `naver_pay` PaymentMethod, this hash contains details about the Naver Pay payment method.
     */
    naver_pay?: PaymentMethodData.NaverPay;

    /**
     * If this is an nz_bank_account PaymentMethod, this hash contains details about the nz_bank_account payment method.
     */
    nz_bank_account?: PaymentMethodData.NzBankAccount;

    /**
     * If this is an `oxxo` PaymentMethod, this hash contains details about the OXXO payment method.
     */
    oxxo?: PaymentMethodData.Oxxo;

    /**
     * If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
     */
    p24?: PaymentMethodData.P24;

    /**
     * If this is a `pay_by_bank` PaymentMethod, this hash contains details about the PayByBank payment method.
     */
    pay_by_bank?: PaymentMethodData.PayByBank;

    /**
     * If this is a `payco` PaymentMethod, this hash contains details about the PAYCO payment method.
     */
    payco?: PaymentMethodData.Payco;

    /**
     * If this is a `paynow` PaymentMethod, this hash contains details about the PayNow payment method.
     */
    paynow?: PaymentMethodData.Paynow;

    /**
     * If this is a `paypal` PaymentMethod, this hash contains details about the PayPal payment method.
     */
    paypal?: PaymentMethodData.Paypal;

    /**
     * If this is a `pix` PaymentMethod, this hash contains details about the Pix payment method.
     */
    pix?: PaymentMethodData.Pix;

    /**
     * If this is a `promptpay` PaymentMethod, this hash contains details about the PromptPay payment method.
     */
    promptpay?: PaymentMethodData.Promptpay;

    /**
     * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
     */
    radar_options?: PaymentMethodData.RadarOptions;

    /**
     * If this is a `revolut_pay` PaymentMethod, this hash contains details about the Revolut Pay payment method.
     */
    revolut_pay?: PaymentMethodData.RevolutPay;

    /**
     * If this is a `samsung_pay` PaymentMethod, this hash contains details about the SamsungPay payment method.
     */
    samsung_pay?: PaymentMethodData.SamsungPay;

    /**
     * If this is a `satispay` PaymentMethod, this hash contains details about the Satispay payment method.
     */
    satispay?: PaymentMethodData.Satispay;

    /**
     * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
     */
    sepa_debit?: PaymentMethodData.SepaDebit;

    /**
     * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
     */
    sofort?: PaymentMethodData.Sofort;

    /**
     * If this is a `swish` PaymentMethod, this hash contains details about the Swish payment method.
     */
    swish?: PaymentMethodData.Swish;

    /**
     * If this is a TWINT PaymentMethod, this hash contains details about the TWINT payment method.
     */
    twint?: PaymentMethodData.Twint;

    /**
     * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
     */
    type: PaymentMethodData.Type;

    /**
     * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
     */
    us_bank_account?: PaymentMethodData.UsBankAccount;

    /**
     * If this is an `wechat_pay` PaymentMethod, this hash contains details about the wechat_pay payment method.
     */
    wechat_pay?: PaymentMethodData.WechatPay;

    /**
     * If this is a `zip` PaymentMethod, this hash contains details about the Zip payment method.
     */
    zip?: PaymentMethodData.Zip;
  }

  export interface PaymentMethodOptions {
    /**
     * If this is a `acss_debit` SetupIntent, this sub-hash contains details about the ACSS Debit payment method options.
     */
    acss_debit?: PaymentMethodOptions.AcssDebit;

    /**
     * If this is a `amazon_pay` SetupIntent, this sub-hash contains details about the AmazonPay payment method options.
     */
    amazon_pay?: PaymentMethodOptions.AmazonPay;

    /**
     * If this is a `bacs_debit` SetupIntent, this sub-hash contains details about the Bacs Debit payment method options.
     */
    bacs_debit?: PaymentMethodOptions.BacsDebit;

    /**
     * Configuration for any card setup attempted on this SetupIntent.
     */
    card?: PaymentMethodOptions.Card;

    /**
     * If this is a `card_present` PaymentMethod, this sub-hash contains details about the card-present payment method options.
     */
    card_present?: PaymentMethodOptions.CardPresent;

    /**
     * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method options.
     */
    klarna?: PaymentMethodOptions.Klarna;

    /**
     * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
     */
    link?: PaymentMethodOptions.Link;

    /**
     * If this is a `paypal` PaymentMethod, this sub-hash contains details about the PayPal payment method options.
     */
    paypal?: PaymentMethodOptions.Paypal;

    /**
     * If this is a `sepa_debit` SetupIntent, this sub-hash contains details about the SEPA Debit payment method options.
     */
    sepa_debit?: PaymentMethodOptions.SepaDebit;

    /**
     * If this is a `us_bank_account` SetupIntent, this sub-hash contains details about the US bank account payment method options.
     */
    us_bank_account?: PaymentMethodOptions.UsBankAccount;
  }

  export namespace MandateData {
    export interface CustomerAcceptance {
      /**
       * The time at which the customer accepted the Mandate.
       */
      accepted_at?: number;

      /**
       * If this is a Mandate accepted offline, this hash contains details about the offline acceptance.
       */
      offline?: CustomerAcceptance.Offline;

      /**
       * If this is a Mandate accepted online, this hash contains details about the online acceptance.
       */
      online?: CustomerAcceptance.Online;

      /**
       * The type of customer acceptance information included with the Mandate. One of `online` or `offline`.
       */
      type: CustomerAcceptance.Type;
    }

    export namespace CustomerAcceptance {
      export interface Offline {}

      export interface Online {
        /**
         * The IP address from which the Mandate was accepted by the customer.
         */
        ip_address?: string;

        /**
         * The user agent of the browser from which the Mandate was accepted by the customer.
         */
        user_agent?: string;
      }

      export type Type = 'offline' | 'online';
    }
  }

  export namespace PaymentMethodData {
    export interface AcssDebit {
      /**
       * Customer's bank account number.
       */
      account_number: string;

      /**
       * Institution number of the customer's bank.
       */
      institution_number: string;

      /**
       * Transit number of the customer's bank.
       */
      transit_number: string;
    }

    export interface Affirm {}

    export interface AfterpayClearpay {}

    export interface Alipay {}

    export type AllowRedisplay = 'always' | 'limited' | 'unspecified';

    export interface Alma {}

    export interface AmazonPay {}

    export interface AuBecsDebit {
      /**
       * The account number for the bank account.
       */
      account_number: string;

      /**
       * Bank-State-Branch number of the bank account.
       */
      bsb_number: string;
    }

    export interface BacsDebit {
      /**
       * Account number of the bank account that the funds will be debited from.
       */
      account_number?: string;

      /**
       * Sort code of the bank account. (e.g., `10-20-30`)
       */
      sort_code?: string;
    }

    export interface Bancontact {}

    export interface Billie {}

    export interface BillingDetails {
      /**
       * Billing address.
       */
      address?: Emptyable<AddressParam>;

      /**
       * Email address.
       */
      email?: Emptyable<string>;

      /**
       * Full name.
       */
      name?: Emptyable<string>;

      /**
       * Billing phone number (including extension).
       */
      phone?: Emptyable<string>;

      /**
       * Taxpayer identification number. Used only for transactions between LATAM buyers and non-LATAM sellers.
       */
      tax_id?: string;
    }

    export interface Blik {}

    export interface Boleto {
      /**
       * The tax ID of the customer (CPF for individual consumers or CNPJ for businesses consumers)
       */
      tax_id: string;
    }

    export interface Cashapp {}

    export interface Crypto {}

    export interface CustomerBalance {}

    export interface Eps {
      /**
       * The customer's bank.
       */
      bank?: Eps.Bank;
    }

    export interface Fpx {
      /**
       * Account holder type for FPX transaction
       */
      account_holder_type?: Fpx.AccountHolderType;

      /**
       * The customer's bank.
       */
      bank: Fpx.Bank;
    }

    export interface Giropay {}

    export interface Grabpay {}

    export interface Ideal {
      /**
       * The customer's bank. Only use this parameter for existing customers. Don't use it for new customers.
       */
      bank?: Ideal.Bank;
    }

    export interface InteracPresent {}

    export interface KakaoPay {}

    export interface Klarna {
      /**
       * Customer's date of birth
       */
      dob?: Klarna.Dob;
    }

    export interface Konbini {}

    export interface KrCard {}

    export interface Link {}

    export interface MbWay {}

    export interface Mobilepay {}

    export interface Multibanco {}

    export interface NaverPay {
      /**
       * Whether to use Naver Pay points or a card to fund this transaction. If not provided, this defaults to `card`.
       */
      funding?: NaverPay.Funding;
    }

    export interface NzBankAccount {
      /**
       * The name on the bank account. Only required if the account holder name is different from the name of the authorized signatory collected in the PaymentMethod's billing details.
       */
      account_holder_name?: string;

      /**
       * The account number for the bank account.
       */
      account_number: string;

      /**
       * The numeric code for the bank account's bank.
       */
      bank_code: string;

      /**
       * The numeric code for the bank account's bank branch.
       */
      branch_code: string;

      reference?: string;

      /**
       * The suffix of the bank account number.
       */
      suffix: string;
    }

    export interface Oxxo {}

    export interface P24 {
      /**
       * The customer's bank.
       */
      bank?: P24.Bank;
    }

    export interface PayByBank {}

    export interface Payco {}

    export interface Paynow {}

    export interface Paypal {}

    export interface Pix {}

    export interface Promptpay {}

    export interface RadarOptions {
      /**
       * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
       */
      session?: string;
    }

    export interface RevolutPay {}

    export interface SamsungPay {}

    export interface Satispay {}

    export interface SepaDebit {
      /**
       * IBAN of the bank account.
       */
      iban: string;
    }

    export interface Sofort {
      /**
       * Two-letter ISO code representing the country the bank account is located in.
       */
      country: Sofort.Country;
    }

    export interface Swish {}

    export interface Twint {}

    export type Type =
      | 'acss_debit'
      | 'affirm'
      | 'afterpay_clearpay'
      | 'alipay'
      | 'alma'
      | 'amazon_pay'
      | 'au_becs_debit'
      | 'bacs_debit'
      | 'bancontact'
      | 'billie'
      | 'blik'
      | 'boleto'
      | 'cashapp'
      | 'crypto'
      | 'customer_balance'
      | 'eps'
      | 'fpx'
      | 'giropay'
      | 'grabpay'
      | 'ideal'
      | 'kakao_pay'
      | 'klarna'
      | 'konbini'
      | 'kr_card'
      | 'link'
      | 'mb_way'
      | 'mobilepay'
      | 'multibanco'
      | 'naver_pay'
      | 'nz_bank_account'
      | 'oxxo'
      | 'p24'
      | 'pay_by_bank'
      | 'payco'
      | 'paynow'
      | 'paypal'
      | 'pix'
      | 'promptpay'
      | 'revolut_pay'
      | 'samsung_pay'
      | 'satispay'
      | 'sepa_debit'
      | 'sofort'
      | 'swish'
      | 'twint'
      | 'us_bank_account'
      | 'wechat_pay'
      | 'zip';

    export interface UsBankAccount {
      /**
       * Account holder type: individual or company.
       */
      account_holder_type?: UsBankAccount.AccountHolderType;

      /**
       * Account number of the bank account.
       */
      account_number?: string;

      /**
       * Account type: checkings or savings. Defaults to checking if omitted.
       */
      account_type?: UsBankAccount.AccountType;

      /**
       * The ID of a Financial Connections Account to use as a payment method.
       */
      financial_connections_account?: string;

      /**
       * Routing number of the bank account.
       */
      routing_number?: string;
    }

    export interface WechatPay {}

    export interface Zip {}

    export namespace Eps {
      export type Bank =
        | 'arzte_und_apotheker_bank'
        | 'austrian_anadi_bank_ag'
        | 'bank_austria'
        | 'bankhaus_carl_spangler'
        | 'bankhaus_schelhammer_und_schattera_ag'
        | 'bawag_psk_ag'
        | 'bks_bank_ag'
        | 'brull_kallmus_bank_ag'
        | 'btv_vier_lander_bank'
        | 'capital_bank_grawe_gruppe_ag'
        | 'deutsche_bank_ag'
        | 'dolomitenbank'
        | 'easybank_ag'
        | 'erste_bank_und_sparkassen'
        | 'hypo_alpeadriabank_international_ag'
        | 'hypo_bank_burgenland_aktiengesellschaft'
        | 'hypo_noe_lb_fur_niederosterreich_u_wien'
        | 'hypo_oberosterreich_salzburg_steiermark'
        | 'hypo_tirol_bank_ag'
        | 'hypo_vorarlberg_bank_ag'
        | 'marchfelder_bank'
        | 'oberbank_ag'
        | 'raiffeisen_bankengruppe_osterreich'
        | 'schoellerbank_ag'
        | 'sparda_bank_wien'
        | 'volksbank_gruppe'
        | 'volkskreditbank_ag'
        | 'vr_bank_braunau';
    }

    export namespace Fpx {
      export type AccountHolderType = 'company' | 'individual';

      export type Bank =
        | 'affin_bank'
        | 'agrobank'
        | 'alliance_bank'
        | 'ambank'
        | 'bank_islam'
        | 'bank_muamalat'
        | 'bank_of_china'
        | 'bank_rakyat'
        | 'bsn'
        | 'cimb'
        | 'deutsche_bank'
        | 'hong_leong_bank'
        | 'hsbc'
        | 'kfh'
        | 'maybank2e'
        | 'maybank2u'
        | 'ocbc'
        | 'pb_enterprise'
        | 'public_bank'
        | 'rhb'
        | 'standard_chartered'
        | 'uob';
    }

    export namespace Ideal {
      export type Bank =
        | 'abn_amro'
        | 'asn_bank'
        | 'bunq'
        | 'buut'
        | 'handelsbanken'
        | 'ing'
        | 'knab'
        | 'moneyou'
        | 'n26'
        | 'nn'
        | 'rabobank'
        | 'regiobank'
        | 'revolut'
        | 'sns_bank'
        | 'triodos_bank'
        | 'van_lanschot'
        | 'yoursafe';
    }

    export namespace Klarna {
      export interface Dob {
        /**
         * The day of birth, between 1 and 31.
         */
        day: number;

        /**
         * The month of birth, between 1 and 12.
         */
        month: number;

        /**
         * The four-digit year of birth.
         */
        year: number;
      }
    }

    export namespace NaverPay {
      export type Funding = 'card' | 'points';
    }

    export namespace P24 {
      export type Bank =
        | 'alior_bank'
        | 'bank_millennium'
        | 'bank_nowy_bfg_sa'
        | 'bank_pekao_sa'
        | 'banki_spbdzielcze'
        | 'blik'
        | 'bnp_paribas'
        | 'boz'
        | 'citi_handlowy'
        | 'credit_agricole'
        | 'envelobank'
        | 'etransfer_pocztowy24'
        | 'getin_bank'
        | 'ideabank'
        | 'ing'
        | 'inteligo'
        | 'mbank_mtransfer'
        | 'nest_przelew'
        | 'noble_pay'
        | 'pbac_z_ipko'
        | 'plus_bank'
        | 'santander_przelew24'
        | 'tmobile_usbugi_bankowe'
        | 'toyota_bank'
        | 'velobank'
        | 'volkswagen_bank';
    }

    export namespace Sofort {
      export type Country = 'AT' | 'BE' | 'DE' | 'ES' | 'IT' | 'NL';
    }

    export namespace UsBankAccount {
      export type AccountHolderType = 'company' | 'individual';

      export type AccountType = 'checking' | 'savings';
    }
  }

  export namespace PaymentMethodOptions {
    export interface AcssDebit {
      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: AcssDebit.Currency;

      /**
       * Additional fields for Mandate creation
       */
      mandate_options?: AcssDebit.MandateOptions;

      /**
       * Bank account verification method.
       */
      verification_method?: AcssDebit.VerificationMethod;
    }

    export interface AmazonPay {}

    export interface BacsDebit {
      /**
       * Additional fields for Mandate creation
       */
      mandate_options?: BacsDebit.MandateOptions;
    }

    export interface Card {
      /**
       * Configuration options for setting up an eMandate for cards issued in India.
       */
      mandate_options?: Card.MandateOptions;

      /**
       * When specified, this parameter signals that a card has been collected
       * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
       * parameter can only be provided during confirmation.
       */
      moto?: boolean;

      /**
       * Selected network to process this SetupIntent on. Depends on the available networks of the card attached to the SetupIntent. Can be only set confirm-time.
       */
      network?: Card.Network;

      /**
       * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
       */
      request_three_d_secure?: Card.RequestThreeDSecure;

      /**
       * If 3D Secure authentication was performed with a third-party provider,
       * the authentication details to use for this setup.
       */
      three_d_secure?: Card.ThreeDSecure;
    }

    export interface CardPresent {}

    export interface Klarna {
      /**
       * The currency of the SetupIntent. Three letter ISO currency code.
       */
      currency?: string;

      /**
       * On-demand details if setting up a payment method for on-demand payments.
       */
      on_demand?: Klarna.OnDemand;

      /**
       * Preferred language of the Klarna authorization page that the customer is redirected to
       */
      preferred_locale?: Klarna.PreferredLocale;

      /**
       * Subscription details if setting up or charging a subscription
       */
      subscriptions?: Emptyable<Array<Klarna.Subscription>>;
    }

    export interface Link {
      /**
       * [Deprecated] This is a legacy parameter that no longer has any function.
       * @deprecated
       */
      persistent_token?: string;
    }

    export interface Paypal {
      /**
       * The PayPal Billing Agreement ID (BAID). This is an ID generated by PayPal which represents the mandate between the merchant and the customer.
       */
      billing_agreement_id?: string;
    }

    export interface SepaDebit {
      /**
       * Additional fields for Mandate creation
       */
      mandate_options?: SepaDebit.MandateOptions;
    }

    export interface UsBankAccount {
      /**
       * Additional fields for Financial Connections Session creation
       */
      financial_connections?: UsBankAccount.FinancialConnections;

      /**
       * Additional fields for Mandate creation
       */
      mandate_options?: UsBankAccount.MandateOptions;

      /**
       * Additional fields for network related functions
       */
      networks?: UsBankAccount.Networks;

      /**
       * Bank account verification method.
       */
      verification_method?: UsBankAccount.VerificationMethod;
    }

    export namespace AcssDebit {
      export type Currency = 'cad' | 'usd';

      export interface MandateOptions {
        /**
         * A URL for custom mandate text to render during confirmation step.
         * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
         * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
         */
        custom_mandate_url?: Emptyable<string>;

        /**
         * List of Stripe products where this mandate can be selected automatically.
         */
        default_for?: Array<MandateOptions.DefaultFor>;

        /**
         * Description of the mandate interval. Only required if 'payment_schedule' parameter is 'interval' or 'combined'.
         */
        interval_description?: string;

        /**
         * Payment schedule for the mandate.
         */
        payment_schedule?: MandateOptions.PaymentSchedule;

        /**
         * Transaction type of the mandate.
         */
        transaction_type?: MandateOptions.TransactionType;
      }

      export type VerificationMethod =
        | 'automatic'
        | 'instant'
        | 'microdeposits';

      export namespace MandateOptions {
        export type DefaultFor = 'invoice' | 'subscription';

        export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

        export type TransactionType = 'business' | 'personal';
      }
    }

    export namespace BacsDebit {
      export interface MandateOptions {
        /**
         * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'DDIC' or 'STRIPE'.
         */
        reference_prefix?: Emptyable<string>;
      }
    }

    export namespace Card {
      export interface MandateOptions {
        /**
         * Amount to be charged for future payments.
         */
        amount: number;

        /**
         * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
         */
        amount_type: MandateOptions.AmountType;

        /**
         * Currency in which future payments will be charged. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A description of the mandate or subscription that is meant to be displayed to the customer.
         */
        description?: string;

        /**
         * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
         */
        end_date?: number;

        /**
         * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
         */
        interval: MandateOptions.Interval;

        /**
         * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
         */
        interval_count?: number;

        /**
         * Unique identifier for the mandate or subscription.
         */
        reference: string;

        /**
         * Start date of the mandate or subscription. Start date should not be lesser than yesterday.
         */
        start_date: number;

        /**
         * Specifies the type of mandates supported. Possible values are `india`.
         */
        supported_types?: Array<'india'>;
      }

      export type Network =
        | 'amex'
        | 'cartes_bancaires'
        | 'diners'
        | 'discover'
        | 'eftpos_au'
        | 'girocard'
        | 'interac'
        | 'jcb'
        | 'link'
        | 'mastercard'
        | 'unionpay'
        | 'unknown'
        | 'visa';

      export type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';

      export interface ThreeDSecure {
        /**
         * The `transStatus` returned from the card Issuer's ACS in the ARes.
         */
        ares_trans_status?: ThreeDSecure.AresTransStatus;

        /**
         * The cryptogram, also known as the "authentication value" (AAV, CAVV or
         * AEVV). This value is 20 bytes, base64-encoded into a 28-character string.
         * (Most 3D Secure providers will return the base64-encoded version, which
         * is what you should specify here.)
         */
        cryptogram?: string;

        /**
         * The Electronic Commerce Indicator (ECI) is returned by your 3D Secure
         * provider and indicates what degree of authentication was performed.
         */
        electronic_commerce_indicator?: ThreeDSecure.ElectronicCommerceIndicator;

        /**
         * Network specific 3DS fields. Network specific arguments require an
         * explicit card brand choice. The parameter `payment_method_options.card.network``
         * must be populated accordingly
         */
        network_options?: ThreeDSecure.NetworkOptions;

        /**
         * The challenge indicator (`threeDSRequestorChallengeInd`) which was requested in the
         * AReq sent to the card Issuer's ACS. A string containing 2 digits from 01-99.
         */
        requestor_challenge_indicator?: string;

        /**
         * For 3D Secure 1, the XID. For 3D Secure 2, the Directory Server
         * Transaction ID (dsTransID).
         */
        transaction_id?: string;

        /**
         * The version of 3D Secure that was performed.
         */
        version?: ThreeDSecure.Version;
      }

      export namespace MandateOptions {
        export type AmountType = 'fixed' | 'maximum';

        export type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
      }

      export namespace ThreeDSecure {
        export type AresTransStatus = 'A' | 'C' | 'I' | 'N' | 'R' | 'U' | 'Y';

        export type ElectronicCommerceIndicator =
          | '01'
          | '02'
          | '05'
          | '06'
          | '07';

        export interface NetworkOptions {
          /**
           * Cartes Bancaires-specific 3DS fields.
           */
          cartes_bancaires?: NetworkOptions.CartesBancaires;
        }

        export type Version = '1.0.2' | '2.1.0' | '2.2.0';

        export namespace NetworkOptions {
          export interface CartesBancaires {
            /**
             * The cryptogram calculation algorithm used by the card Issuer's ACS
             * to calculate the Authentication cryptogram. Also known as `cavvAlgorithm`.
             * messageExtension: CB-AVALGO
             */
            cb_avalgo: CartesBancaires.CbAvalgo;

            /**
             * The exemption indicator returned from Cartes Bancaires in the ARes.
             * message extension: CB-EXEMPTION; string (4 characters)
             * This is a 3 byte bitmap (low significant byte first and most significant
             * bit first) that has been Base64 encoded
             */
            cb_exemption?: string;

            /**
             * The risk score returned from Cartes Bancaires in the ARes.
             * message extension: CB-SCORE; numeric value 0-99
             */
            cb_score?: number;
          }

          export namespace CartesBancaires {
            export type CbAvalgo = '0' | '1' | '2' | '3' | '4' | 'A';
          }
        }
      }
    }

    export namespace Klarna {
      export interface OnDemand {
        /**
         * Your average amount value. You can use a value across your customer base, or segment based on customer type, country, etc.
         */
        average_amount?: number;

        /**
         * The maximum value you may charge a customer per purchase. You can use a value across your customer base, or segment based on customer type, country, etc.
         */
        maximum_amount?: number;

        /**
         * The lowest or minimum value you may charge a customer per purchase. You can use a value across your customer base, or segment based on customer type, country, etc.
         */
        minimum_amount?: number;

        /**
         * Interval at which the customer is making purchases
         */
        purchase_interval?: OnDemand.PurchaseInterval;

        /**
         * The number of `purchase_interval` between charges
         */
        purchase_interval_count?: number;
      }

      export type PreferredLocale =
        | 'cs-CZ'
        | 'da-DK'
        | 'de-AT'
        | 'de-CH'
        | 'de-DE'
        | 'el-GR'
        | 'en-AT'
        | 'en-AU'
        | 'en-BE'
        | 'en-CA'
        | 'en-CH'
        | 'en-CZ'
        | 'en-DE'
        | 'en-DK'
        | 'en-ES'
        | 'en-FI'
        | 'en-FR'
        | 'en-GB'
        | 'en-GR'
        | 'en-IE'
        | 'en-IT'
        | 'en-NL'
        | 'en-NO'
        | 'en-NZ'
        | 'en-PL'
        | 'en-PT'
        | 'en-RO'
        | 'en-SE'
        | 'en-US'
        | 'es-ES'
        | 'es-US'
        | 'fi-FI'
        | 'fr-BE'
        | 'fr-CA'
        | 'fr-CH'
        | 'fr-FR'
        | 'it-CH'
        | 'it-IT'
        | 'nb-NO'
        | 'nl-BE'
        | 'nl-NL'
        | 'pl-PL'
        | 'pt-PT'
        | 'ro-RO'
        | 'sv-FI'
        | 'sv-SE';

      export interface Subscription {
        /**
         * Unit of time between subscription charges.
         */
        interval: Subscription.Interval;

        /**
         * The number of intervals (specified in the `interval` attribute) between subscription charges. For example, `interval=month` and `interval_count=3` charges every 3 months.
         */
        interval_count?: number;

        /**
         * Name for subscription.
         */
        name?: string;

        /**
         * Describes the upcoming charge for this subscription.
         */
        next_billing: Subscription.NextBilling;

        /**
         * A non-customer-facing reference to correlate subscription charges in the Klarna app. Use a value that persists across subscription charges.
         */
        reference: string;
      }

      export namespace OnDemand {
        export type PurchaseInterval = 'day' | 'month' | 'week' | 'year';
      }

      export namespace Subscription {
        export type Interval = 'day' | 'month' | 'week' | 'year';

        export interface NextBilling {
          /**
           * The amount of the next charge for the subscription.
           */
          amount: number;

          /**
           * The date of the next charge for the subscription in YYYY-MM-DD format.
           */
          date: string;
        }
      }
    }

    export namespace SepaDebit {
      export interface MandateOptions {
        /**
         * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'.
         */
        reference_prefix?: Emptyable<string>;
      }
    }

    export namespace UsBankAccount {
      export interface FinancialConnections {
        /**
         * Provide filters for the linked accounts that the customer can select for the payment method.
         */
        filters?: FinancialConnections.Filters;

        /**
         * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
         */
        permissions?: Array<FinancialConnections.Permission>;

        /**
         * List of data features that you would like to retrieve upon account creation.
         */
        prefetch?: Array<FinancialConnections.Prefetch>;

        /**
         * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
         */
        return_url?: string;
      }

      export interface MandateOptions {
        /**
         * The method used to collect offline mandate customer acceptance.
         */
        collection_method?: Emptyable<'paper'>;
      }

      export interface Networks {
        /**
         * Triggers validations to run across the selected networks
         */
        requested?: Array<Networks.Requested>;
      }

      export type VerificationMethod =
        | 'automatic'
        | 'instant'
        | 'microdeposits';

      export namespace FinancialConnections {
        export interface Filters {
          /**
           * The account subcategories to use to filter for selectable accounts. Valid subcategories are `checking` and `savings`.
           */
          account_subcategories?: Array<Filters.AccountSubcategory>;
        }

        export type Permission =
          | 'balances'
          | 'ownership'
          | 'payment_method'
          | 'transactions';

        export type Prefetch = 'balances' | 'ownership' | 'transactions';

        export namespace Filters {
          export type AccountSubcategory = 'checking' | 'savings';
        }
      }

      export namespace Networks {
        export type Requested = 'ach' | 'us_domestic_wire';
      }
    }
  }
}
export interface SetupIntentVerifyMicrodepositsParams {
  /**
   * Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.
   */
  amounts?: Array<number>;

  /**
   * A six-character code starting with SM present in the microdeposit sent to the bank account.
   */
  descriptor_code?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
