// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Location} from './Locations.js';
import {PaymentIntent} from './../PaymentIntents.js';
import {PaymentMethod} from './../PaymentMethods.js';
import {SetupIntent} from './../SetupIntents.js';
import {CustomerSource} from './../CustomerSources.js';
import {Charge} from './../Charges.js';
import {Refund} from './../Refunds.js';
import {
  Emptyable,
  MetadataParam,
  PaginationParams,
  Metadata,
} from '../../shared.js';
import {RequestOptions, Response, ApiListPromise} from '../../lib.js';

export class ReaderResource extends StripeResource {
  /**
   * Deletes a Reader object.
   */
  del(
    id: string,
    params?: Terminal.ReaderDeleteParams,
    options?: RequestOptions
  ): Promise<Response<DeletedReader>> {
    return this._makeRequest(
      'DELETE',
      `/v1/terminal/readers/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Retrieves a Reader object.
   */
  retrieve(
    id: string,
    params?: Terminal.ReaderRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Reader | DeletedReader>> {
    return this._makeRequest(
      'GET',
      `/v1/terminal/readers/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates a Reader object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   */
  update(
    id: string,
    params?: Terminal.ReaderUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Reader | DeletedReader>> {
    return this._makeRequest(
      'POST',
      `/v1/terminal/readers/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Returns a list of Reader objects.
   */
  list(
    params?: Terminal.ReaderListParams,
    options?: RequestOptions
  ): ApiListPromise<Reader> {
    return this._makeRequest('GET', '/v1/terminal/readers', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Creates a new Reader object.
   */
  create(
    params: Terminal.ReaderCreateParams,
    options?: RequestOptions
  ): Promise<Response<Reader>> {
    return this._makeRequest(
      'POST',
      '/v1/terminal/readers',
      params,
      options
    ) as any;
  }
  /**
   * Cancels the current reader action. See [Programmatic Cancellation](https://docs.stripe.com/docs/terminal/payments/collect-card-payment?terminal-sdk-platform=server-driven#programmatic-cancellation) for more details.
   */
  cancelAction(
    id: string,
    params?: Terminal.ReaderCancelActionParams,
    options?: RequestOptions
  ): Promise<Response<Reader>> {
    return this._makeRequest(
      'POST',
      `/v1/terminal/readers/${encodeURIComponent(id)}/cancel_action`,
      params,
      options
    ) as any;
  }
  /**
   * Initiates an [input collection flow](https://docs.stripe.com/docs/terminal/features/collect-inputs) on a Reader to display input forms and collect information from your customers.
   */
  collectInputs(
    id: string,
    params: Terminal.ReaderCollectInputsParams,
    options?: RequestOptions
  ): Promise<Response<Reader>> {
    return this._makeRequest(
      'POST',
      `/v1/terminal/readers/${encodeURIComponent(id)}/collect_inputs`,
      params,
      options
    ) as any;
  }
  /**
   * Initiates a payment flow on a Reader and updates the PaymentIntent with card details before manual confirmation. See [Collecting a Payment method](https://docs.stripe.com/docs/terminal/payments/collect-card-payment?terminal-sdk-platform=server-driven&process=inspect#collect-a-paymentmethod) for more details.
   */
  collectPaymentMethod(
    id: string,
    params: Terminal.ReaderCollectPaymentMethodParams,
    options?: RequestOptions
  ): Promise<Response<Reader>> {
    return this._makeRequest(
      'POST',
      `/v1/terminal/readers/${encodeURIComponent(id)}/collect_payment_method`,
      params,
      options
    ) as any;
  }
  /**
   * Finalizes a payment on a Reader. See [Confirming a Payment](https://docs.stripe.com/docs/terminal/payments/collect-card-payment?terminal-sdk-platform=server-driven&process=inspect#confirm-the-paymentintent) for more details.
   */
  confirmPaymentIntent(
    id: string,
    params: Terminal.ReaderConfirmPaymentIntentParams,
    options?: RequestOptions
  ): Promise<Response<Reader>> {
    return this._makeRequest(
      'POST',
      `/v1/terminal/readers/${encodeURIComponent(id)}/confirm_payment_intent`,
      params,
      options
    ) as any;
  }
  /**
   * Initiates a payment flow on a Reader. See [process the payment](https://docs.stripe.com/docs/terminal/payments/collect-card-payment?terminal-sdk-platform=server-driven&process=immediately#process-payment) for more details.
   */
  processPaymentIntent(
    id: string,
    params: Terminal.ReaderProcessPaymentIntentParams,
    options?: RequestOptions
  ): Promise<Response<Reader>> {
    return this._makeRequest(
      'POST',
      `/v1/terminal/readers/${encodeURIComponent(id)}/process_payment_intent`,
      params,
      options
    ) as any;
  }
  /**
   * Initiates a SetupIntent flow on a Reader. See [Save directly without charging](https://docs.stripe.com/docs/terminal/features/saving-payment-details/save-directly) for more details.
   */
  processSetupIntent(
    id: string,
    params: Terminal.ReaderProcessSetupIntentParams,
    options?: RequestOptions
  ): Promise<Response<Reader>> {
    return this._makeRequest(
      'POST',
      `/v1/terminal/readers/${encodeURIComponent(id)}/process_setup_intent`,
      params,
      options
    ) as any;
  }
  /**
   * Initiates an in-person refund on a Reader. See [Refund an Interac Payment](https://docs.stripe.com/docs/terminal/payments/regional?integration-country=CA#refund-an-interac-payment) for more details.
   */
  refundPayment(
    id: string,
    params?: Terminal.ReaderRefundPaymentParams,
    options?: RequestOptions
  ): Promise<Response<Reader>> {
    return this._makeRequest(
      'POST',
      `/v1/terminal/readers/${encodeURIComponent(id)}/refund_payment`,
      params,
      options
    ) as any;
  }
  /**
   * Sets the reader display to show [cart details](https://docs.stripe.com/docs/terminal/features/display).
   */
  setReaderDisplay(
    id: string,
    params: Terminal.ReaderSetReaderDisplayParams,
    options?: RequestOptions
  ): Promise<Response<Reader>> {
    return this._makeRequest(
      'POST',
      `/v1/terminal/readers/${encodeURIComponent(id)}/set_reader_display`,
      params,
      options
    ) as any;
  }
}
export interface Reader {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'terminal.reader';

  /**
   * The most recent action performed by the reader.
   */
  action: Reader.Action | null;

  /**
   * Always true for a deleted object
   */
  deleted?: void;

  /**
   * The current software version of the reader.
   */
  device_sw_version: string | null;

  /**
   * Device type of the reader.
   */
  device_type: Reader.DeviceType;

  /**
   * The local IP address of the reader.
   */
  ip_address: string | null;

  /**
   * Custom label given to the reader for easier identification.
   */
  label: string;

  /**
   * The last time this reader reported to Stripe backend. Timestamp is measured in milliseconds since the Unix epoch. Unlike most other Stripe timestamp fields which use seconds, this field uses milliseconds.
   */
  last_seen_at: number | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The location identifier of the reader.
   */
  location: string | Location | null;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  /**
   * Serial number of the reader.
   */
  serial_number: string;

  /**
   * The networking status of the reader. We do not recommend using this field in flows that may block taking payments.
   */
  status: Reader.Status | null;
}
export interface DeletedReader {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'terminal.reader';

  /**
   * Always true for a deleted object
   */
  deleted: true;

  /**
   * Device type of the reader.
   */
  device_type: DeletedReader.DeviceType;

  /**
   * Serial number of the reader.
   */
  serial_number: string;
}
export namespace DeletedReader {
  export type DeviceType =
    | 'bbpos_chipper2x'
    | 'bbpos_wisepad3'
    | 'bbpos_wisepos_e'
    | 'mobile_phone_reader'
    | 'simulated_stripe_s700'
    | 'simulated_stripe_s710'
    | 'simulated_verifone_m425'
    | 'simulated_verifone_p630'
    | 'simulated_verifone_ux700'
    | 'simulated_verifone_v660p'
    | 'simulated_wisepos_e'
    | 'stripe_m2'
    | 'stripe_s700'
    | 'stripe_s710'
    | 'verifone_P400'
    | 'verifone_m425'
    | 'verifone_p630'
    | 'verifone_ux700'
    | 'verifone_v660p';
}
export namespace Reader {
  export interface Action {
    /**
     * The reader action failed due to an [API error](https://docs.stripe.com/api/errors). Only present when `status` is `failed` and the underlying failure was an API error. Avoid parsing the `message` field for programmatic logic; use `type` or `code` instead. The `message` field is for display to humans only and may be updated at anytime. Requires [reader version](https://docs.stripe.com/terminal/readers/stripe-reader-s700-s710#reader-software-version) 2.42 or later. Readers on older versions always return null.
     */
    api_error: Action.ApiError | null;

    /**
     * Represents a reader action to collect customer inputs
     */
    collect_inputs?: Action.CollectInputs;

    /**
     * Represents a reader action to collect a payment method
     */
    collect_payment_method?: Action.CollectPaymentMethod;

    /**
     * Represents a reader action to confirm a payment
     */
    confirm_payment_intent?: Action.ConfirmPaymentIntent;

    /**
     * Failure code, only set if status is `failed`.
     */
    failure_code: string | null;

    /**
     * Detailed failure message, only set if status is `failed`.
     */
    failure_message: string | null;

    /**
     * Represents a reader action to print content
     */
    print_content?: Action.PrintContent;

    /**
     * Represents a reader action to process a payment intent
     */
    process_payment_intent?: Action.ProcessPaymentIntent;

    /**
     * Represents a reader action to process a setup intent
     */
    process_setup_intent?: Action.ProcessSetupIntent;

    /**
     * Represents a reader action to refund a payment
     */
    refund_payment?: Action.RefundPayment;

    /**
     * Represents a reader action to set the reader display
     */
    set_reader_display?: Action.SetReaderDisplay;

    /**
     * Status of the action performed by the reader.
     */
    status: Action.Status;

    /**
     * Type of action performed by the reader.
     */
    type: Action.Type;
  }

  export type DeviceType =
    | 'bbpos_chipper2x'
    | 'bbpos_wisepad3'
    | 'bbpos_wisepos_e'
    | 'mobile_phone_reader'
    | 'simulated_stripe_s700'
    | 'simulated_stripe_s710'
    | 'simulated_verifone_m425'
    | 'simulated_verifone_p630'
    | 'simulated_verifone_ux700'
    | 'simulated_verifone_v660p'
    | 'simulated_wisepos_e'
    | 'stripe_m2'
    | 'stripe_s700'
    | 'stripe_s710'
    | 'verifone_P400'
    | 'verifone_m425'
    | 'verifone_p630'
    | 'verifone_ux700'
    | 'verifone_v660p';

  export type Status = 'offline' | 'online';

  export namespace Action {
    export interface ApiError {
      /**
       * For card errors resulting from a card issuer decline, a short string indicating [how to proceed with an error](https://docs.stripe.com/declines#retrying-issuer-declines) if they provide one.
       */
      advice_code?: string;

      /**
       * For card errors, the ID of the failed charge.
       */
      charge?: string;

      /**
       * For some errors that could be handled programmatically, a short string indicating the [error code](https://docs.stripe.com/error-codes) reported.
       */
      code?: ApiError.Code;

      /**
       * For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](https://docs.stripe.com/declines#issuer-declines) if they provide one.
       */
      decline_code?: string;

      /**
       * A URL to more information about the [error code](https://docs.stripe.com/error-codes) reported.
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
       * [multiple statuses](https://docs.stripe.com/payments/paymentintents/lifecycle)
       * throughout its lifetime as it interfaces with Stripe.js to perform
       * authentication flows and ultimately creates at most one successful charge.
       *
       * Related guide: [Payment Intents API](https://docs.stripe.com/payments/payment-intents)
       */
      payment_intent?: PaymentIntent;

      /**
       * PaymentMethod objects represent your customer's payment instruments.
       * You can use them with [PaymentIntents](https://docs.stripe.com/payments/payment-intents) to collect payments or save them to
       * Customer objects to store instrument details for future payments.
       *
       * Related guides: [Payment Methods](https://docs.stripe.com/payments/payment-methods) and [More Payment Scenarios](https://docs.stripe.com/payments/more-payment-scenarios).
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
       * Later, you can use [PaymentIntents](https://api.stripe.com#payment_intents) to drive the payment flow.
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
       * If you use the SetupIntent with a [Customer](https://api.stripe.com#setup_intent_object-customer),
       * it automatically attaches the resulting payment method to that Customer after successful setup.
       * We recommend using SetupIntents or [setup_future_usage](https://api.stripe.com#payment_intent_object-setup_future_usage) on
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
      type: ApiError.Type;
    }

    export interface CollectInputs {
      /**
       * List of inputs to be collected.
       */
      inputs: Array<CollectInputs.Input>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Metadata | null;
    }

    export interface CollectPaymentMethod {
      /**
       * Represents a per-transaction override of a reader configuration
       */
      collect_config?: CollectPaymentMethod.CollectConfig;

      /**
       * Most recent PaymentIntent processed by the reader.
       */
      payment_intent: string | PaymentIntent;

      /**
       * PaymentMethod objects represent your customer's payment instruments.
       * You can use them with [PaymentIntents](https://docs.stripe.com/payments/payment-intents) to collect payments or save them to
       * Customer objects to store instrument details for future payments.
       *
       * Related guides: [Payment Methods](https://docs.stripe.com/payments/payment-methods) and [More Payment Scenarios](https://docs.stripe.com/payments/more-payment-scenarios).
       */
      payment_method?: PaymentMethod;
    }

    export interface ConfirmPaymentIntent {
      /**
       * Represents a per-transaction override of a reader configuration
       */
      confirm_config?: ConfirmPaymentIntent.ConfirmConfig;

      /**
       * Most recent PaymentIntent processed by the reader.
       */
      payment_intent: string | PaymentIntent;
    }

    export interface PrintContent {
      /**
       * Metadata of an uploaded file
       */
      image?: PrintContent.Image;

      /**
       * The type of content to print. Currently supports `image`.
       */
      type: 'image';
    }

    export interface ProcessPaymentIntent {
      /**
       * Most recent PaymentIntent processed by the reader.
       */
      payment_intent: string | PaymentIntent;

      /**
       * Represents a per-transaction override of a reader configuration
       */
      process_config?: ProcessPaymentIntent.ProcessConfig;
    }

    export interface ProcessSetupIntent {
      /**
       * ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
       */
      generated_card?: string;

      /**
       * Represents a per-setup override of a reader configuration
       */
      process_config?: ProcessSetupIntent.ProcessConfig;

      /**
       * Most recent SetupIntent processed by the reader.
       */
      setup_intent: string | SetupIntent;
    }

    export interface RefundPayment {
      /**
       * The amount being refunded.
       */
      amount?: number;

      /**
       * Charge that is being refunded.
       */
      charge?: string | Charge;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: Metadata;

      /**
       * Payment intent that is being refunded.
       */
      payment_intent?: string | PaymentIntent;

      /**
       * The reason for the refund.
       */
      reason?: RefundPayment.Reason;

      /**
       * Unique identifier for the refund object.
       */
      refund?: string | Refund;

      /**
       * Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge refunded. An application fee can be refunded only by the application that created the charge.
       */
      refund_application_fee?: boolean;

      /**
       * Represents a per-transaction override of a reader configuration
       */
      refund_payment_config?: RefundPayment.RefundPaymentConfig;

      /**
       * Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the entire or partial amount). A transfer can be reversed only by the application that created the charge.
       */
      reverse_transfer?: boolean;
    }

    export interface SetReaderDisplay {
      /**
       * Cart object to be displayed by the reader, including line items, amounts, and currency.
       */
      cart: SetReaderDisplay.Cart | null;

      /**
       * Type of information to be displayed by the reader. Only `cart` is currently supported.
       */
      type: 'cart';
    }

    export type Status = 'failed' | 'in_progress' | 'succeeded';

    export type Type =
      | 'collect_inputs'
      | 'collect_payment_method'
      | 'confirm_payment_intent'
      | 'print_content'
      | 'process_payment_intent'
      | 'process_setup_intent'
      | 'refund_payment'
      | 'set_reader_display';

    export namespace ApiError {
      export type Code =
        | 'account_closed'
        | 'account_country_invalid_address'
        | 'account_error_country_change_requires_additional_steps'
        | 'account_information_mismatch'
        | 'account_invalid'
        | 'account_number_invalid'
        | 'account_token_required_for_v2_account'
        | 'acss_debit_session_incomplete'
        | 'action_blocked'
        | 'alipay_upgrade_required'
        | 'amount_too_large'
        | 'amount_too_small'
        | 'api_key_expired'
        | 'application_fees_not_allowed'
        | 'approval_required'
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
        | 'payment_method_microdeposit_processing_error'
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
        | 'request_blocked'
        | 'resource_already_exists'
        | 'resource_missing'
        | 'return_intent_already_processed'
        | 'routing_number_invalid'
        | 'secret_key_required'
        | 'sepa_unsupported_account'
        | 'service_period_coupon_with_metered_tiered_item_unsupported'
        | 'setup_attempt_failed'
        | 'setup_intent_authentication_failure'
        | 'setup_intent_invalid_parameter'
        | 'setup_intent_mandate_invalid'
        | 'setup_intent_mobile_wallet_unsupported'
        | 'setup_intent_setup_attempt_expired'
        | 'setup_intent_unexpected_state'
        | 'shipping_address_invalid'
        | 'shipping_calculation_failed'
        | 'siret_invalid'
        | 'sku_inactive'
        | 'state_unsupported'
        | 'status_transition_invalid'
        | 'storer_capability_missing'
        | 'storer_capability_not_active'
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

    export namespace CollectInputs {
      export interface Input {
        /**
         * Default text of input being collected.
         */
        custom_text: Input.CustomText | null;

        /**
         * Information about a email being collected using a reader
         */
        email?: Input.Email;

        /**
         * Information about a number being collected using a reader
         */
        numeric?: Input.Numeric;

        /**
         * Information about a phone number being collected using a reader
         */
        phone?: Input.Phone;

        /**
         * Indicate that this input is required, disabling the skip button.
         */
        required: boolean | null;

        /**
         * Information about a selection being collected using a reader
         */
        selection?: Input.Selection;

        /**
         * Information about a signature being collected using a reader
         */
        signature?: Input.Signature;

        /**
         * Indicate that this input was skipped by the user.
         */
        skipped?: boolean;

        /**
         * Information about text being collected using a reader
         */
        text?: Input.Text;

        /**
         * List of toggles being collected. Values are present if collection is complete.
         */
        toggles: Array<Input.Toggle> | null;

        /**
         * Type of input being collected.
         */
        type: Input.Type;
      }

      export namespace Input {
        export interface CustomText {
          /**
           * Customize the default description for this input
           */
          description: string | null;

          /**
           * Customize the default label for this input's skip button
           */
          skip_button: string | null;

          /**
           * Customize the default label for this input's submit button
           */
          submit_button: string | null;

          /**
           * Customize the default title for this input
           */
          title: string | null;
        }

        export interface Email {
          /**
           * The collected email address
           */
          value: string | null;
        }

        export interface Numeric {
          /**
           * The collected number
           */
          value: string | null;
        }

        export interface Phone {
          /**
           * The collected phone number
           */
          value: string | null;
        }

        export interface Selection {
          /**
           * List of possible choices to be selected
           */
          choices: Array<Selection.Choice>;

          /**
           * The id of the selected choice
           */
          id: string | null;

          /**
           * The text of the selected choice
           */
          text: string | null;
        }

        export interface Signature {
          /**
           * The File ID of a collected signature image
           */
          value: string | null;
        }

        export interface Text {
          /**
           * The collected text value
           */
          value: string | null;
        }

        export interface Toggle {
          /**
           * The toggle's default value. Can be `enabled` or `disabled`.
           */
          default_value: Toggle.DefaultValue | null;

          /**
           * The toggle's description text. Maximum 50 characters.
           */
          description: string | null;

          /**
           * The toggle's title text. Maximum 50 characters.
           */
          title: string | null;

          /**
           * The toggle's collected value. Can be `enabled` or `disabled`.
           */
          value: Toggle.Value | null;
        }

        export type Type =
          | 'email'
          | 'numeric'
          | 'phone'
          | 'selection'
          | 'signature'
          | 'text';

        export namespace Selection {
          export interface Choice {
            /**
             * The identifier for the selected choice. Maximum 50 characters.
             */
            id: string | null;

            /**
             * The button style for the choice. Can be `primary` or `secondary`.
             */
            style: Choice.Style | null;

            /**
             * The text to be selected. Maximum 30 characters.
             */
            text: string;
          }

          export namespace Choice {
            export type Style = 'primary' | 'secondary';
          }
        }

        export namespace Toggle {
          export type DefaultValue = 'disabled' | 'enabled';

          export type Value = 'disabled' | 'enabled';
        }
      }
    }

    export namespace CollectPaymentMethod {
      export interface CollectConfig {
        /**
         * Enable customer-initiated cancellation when processing this payment.
         */
        enable_customer_cancellation?: boolean;

        /**
         * Override showing a tipping selection screen on this transaction.
         */
        skip_tipping?: boolean;

        /**
         * Represents a per-transaction tipping configuration
         */
        tipping?: CollectConfig.Tipping;
      }

      export namespace CollectConfig {
        export interface Tipping {
          /**
           * Amount used to calculate tip suggestions on tipping selection screen for this transaction. Must be a positive integer in the smallest currency unit (e.g., 100 cents to represent $1.00 or 100 to represent ¥100, a zero-decimal currency).
           */
          amount_eligible?: number;
        }
      }
    }

    export namespace ConfirmPaymentIntent {
      export interface ConfirmConfig {
        /**
         * If the customer doesn't abandon authenticating the payment, they're redirected to this URL after completion.
         */
        return_url?: string;
      }
    }

    export namespace PrintContent {
      export interface Image {
        /**
         * Creation time of the object (in seconds since the Unix epoch).
         */
        created_at: number;

        /**
         * The original name of the uploaded file (e.g. `receipt.png`).
         */
        filename: string;

        /**
         * The size (in bytes) of the uploaded file.
         */
        size: number;

        /**
         * The format of the uploaded file.
         */
        type: string;
      }
    }

    export namespace ProcessPaymentIntent {
      export interface ProcessConfig {
        /**
         * Enable customer-initiated cancellation when processing this payment.
         */
        enable_customer_cancellation?: boolean;

        /**
         * If the customer doesn't abandon authenticating the payment, they're redirected to this URL after completion.
         */
        return_url?: string;

        /**
         * Override showing a tipping selection screen on this transaction.
         */
        skip_tipping?: boolean;

        /**
         * Represents a per-transaction tipping configuration
         */
        tipping?: ProcessConfig.Tipping;
      }

      export namespace ProcessConfig {
        export interface Tipping {
          /**
           * Amount used to calculate tip suggestions on tipping selection screen for this transaction. Must be a positive integer in the smallest currency unit (e.g., 100 cents to represent $1.00 or 100 to represent ¥100, a zero-decimal currency).
           */
          amount_eligible?: number;
        }
      }
    }

    export namespace ProcessSetupIntent {
      export interface ProcessConfig {
        /**
         * Enable customer-initiated cancellation when processing this SetupIntent.
         */
        enable_customer_cancellation?: boolean;
      }
    }

    export namespace RefundPayment {
      export type Reason = 'duplicate' | 'fraudulent' | 'requested_by_customer';

      export interface RefundPaymentConfig {
        /**
         * Enable customer-initiated cancellation when refunding this payment.
         */
        enable_customer_cancellation?: boolean;
      }
    }

    export namespace SetReaderDisplay {
      export interface Cart {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * List of line items in the cart.
         */
        line_items: Array<Cart.LineItem>;

        /**
         * Tax amount for the entire cart. A positive integer in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
         */
        tax: number | null;

        /**
         * Total amount for the entire cart, including tax. A positive integer in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
         */
        total: number;
      }

      export namespace Cart {
        export interface LineItem {
          /**
           * The amount of the line item. A positive integer in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
           */
          amount: number;

          /**
           * Description of the line item.
           */
          description: string;

          /**
           * The quantity of the line item.
           */
          quantity: number;
        }
      }
    }
  }
}
export namespace Terminal {
  export interface ReaderCreateParams {
    /**
     * A code generated by the reader used for registering to an account.
     */
    registration_code: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Custom label given to the reader for easier identification. If no label is specified, the registration code will be used.
     */
    label?: string;

    /**
     * The location to assign the reader to.
     */
    location?: string;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
  }
}
export namespace Terminal {
  export interface ReaderRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Terminal {
  export interface ReaderUpdateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The new label of the reader.
     */
    label?: Emptyable<string>;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
  }
}
export namespace Terminal {
  export interface ReaderListParams extends PaginationParams {
    /**
     * Filters readers by device type
     */
    device_type?: ReaderListParams.DeviceType;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A location ID to filter the response list to only readers at the specific location
     */
    location?: string;

    /**
     * Filters readers by serial number
     */
    serial_number?: string;

    /**
     * A status filter to filter readers to only offline or online readers
     */
    status?: ReaderListParams.Status;
  }

  export namespace ReaderListParams {
    export type DeviceType =
      | 'bbpos_chipper2x'
      | 'bbpos_wisepad3'
      | 'bbpos_wisepos_e'
      | 'mobile_phone_reader'
      | 'simulated_stripe_s700'
      | 'simulated_stripe_s710'
      | 'simulated_verifone_m425'
      | 'simulated_verifone_p630'
      | 'simulated_verifone_ux700'
      | 'simulated_verifone_v660p'
      | 'simulated_wisepos_e'
      | 'stripe_m2'
      | 'stripe_s700'
      | 'stripe_s710'
      | 'verifone_P400'
      | 'verifone_m425'
      | 'verifone_p630'
      | 'verifone_ux700'
      | 'verifone_v660p';

    export type Status = 'offline' | 'online';
  }
}
export namespace Terminal {
  export interface ReaderDeleteParams {}
}
export namespace Terminal {
  export interface ReaderCancelActionParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Terminal {
  export interface ReaderCollectInputsParams {
    /**
     * List of inputs to be collected from the customer using the Reader. Maximum 5 inputs.
     */
    inputs: Array<ReaderCollectInputsParams.Input>;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;
  }

  export namespace ReaderCollectInputsParams {
    export interface Input {
      /**
       * Customize the text which will be displayed while collecting this input
       */
      custom_text: Input.CustomText;

      /**
       * Indicate that this input is required, disabling the skip button
       */
      required?: boolean;

      /**
       * Options for the `selection` input
       */
      selection?: Input.Selection;

      /**
       * List of toggles to be displayed and customization for the toggles
       */
      toggles?: Array<Input.Toggle>;

      /**
       * The type of input to collect
       */
      type: Input.Type;
    }

    export namespace Input {
      export interface CustomText {
        /**
         * The description which will be displayed when collecting this input
         */
        description?: string;

        /**
         * Custom text for the skip button. Maximum 14 characters.
         */
        skip_button?: string;

        /**
         * Custom text for the submit button. Maximum 30 characters.
         */
        submit_button?: string;

        /**
         * The title which will be displayed when collecting this input
         */
        title: string;
      }

      export interface Selection {
        /**
         * List of choices for the `selection` input
         */
        choices: Array<Selection.Choice>;
      }

      export interface Toggle {
        /**
         * The default value of the toggle. Can be `enabled` or `disabled`.
         */
        default_value?: Toggle.DefaultValue;

        /**
         * The description which will be displayed for the toggle. Maximum 50 characters. At least one of title or description must be provided.
         */
        description?: string;

        /**
         * The title which will be displayed for the toggle. Maximum 50 characters. At least one of title or description must be provided.
         */
        title?: string;
      }

      export type Type =
        | 'email'
        | 'numeric'
        | 'phone'
        | 'selection'
        | 'signature'
        | 'text';

      export namespace Selection {
        export interface Choice {
          /**
           * The unique identifier for this choice
           */
          id: string;

          /**
           * The style of the button which will be shown for this choice. Can be `primary` or `secondary`.
           */
          style?: Choice.Style;

          /**
           * The text which will be shown on the button for this choice
           */
          text: string;
        }

        export namespace Choice {
          export type Style = 'primary' | 'secondary';
        }
      }

      export namespace Toggle {
        export type DefaultValue = 'disabled' | 'enabled';
      }
    }
  }
}
export namespace Terminal {
  export interface ReaderCollectPaymentMethodParams {
    /**
     * The ID of the PaymentIntent to collect a payment method for.
     */
    payment_intent: string;

    /**
     * Configuration overrides for this collection, such as tipping, surcharging, and customer cancellation settings.
     */
    collect_config?: ReaderCollectPaymentMethodParams.CollectConfig;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export namespace ReaderCollectPaymentMethodParams {
    export interface CollectConfig {
      /**
       * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow.
       */
      allow_redisplay?: CollectConfig.AllowRedisplay;

      /**
       * Enables cancel button on transaction screens.
       */
      enable_customer_cancellation?: boolean;

      /**
       * Override showing a tipping selection screen on this transaction.
       */
      skip_tipping?: boolean;

      /**
       * Tipping configuration for this transaction.
       */
      tipping?: CollectConfig.Tipping;
    }

    export namespace CollectConfig {
      export type AllowRedisplay = 'always' | 'limited' | 'unspecified';

      export interface Tipping {
        /**
         * Amount used to calculate tip suggestions on tipping selection screen for this transaction. Must be a positive integer in the smallest currency unit (e.g., 100 cents to represent $1.00 or 100 to represent ¥100, a zero-decimal currency).
         */
        amount_eligible?: number;
      }
    }
  }
}
export namespace Terminal {
  export interface ReaderConfirmPaymentIntentParams {
    /**
     * The ID of the PaymentIntent to confirm.
     */
    payment_intent: string;

    /**
     * Configuration overrides for this confirmation, such as surcharge settings and return URL.
     */
    confirm_config?: ReaderConfirmPaymentIntentParams.ConfirmConfig;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export namespace ReaderConfirmPaymentIntentParams {
    export interface ConfirmConfig {
      /**
       * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme.
       */
      return_url?: string;
    }
  }
}
export namespace Terminal {
  export interface ReaderProcessPaymentIntentParams {
    /**
     * The ID of the PaymentIntent to process on the reader.
     */
    payment_intent: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Configuration overrides for this transaction, such as tipping and customer cancellation settings.
     */
    process_config?: ReaderProcessPaymentIntentParams.ProcessConfig;
  }

  export namespace ReaderProcessPaymentIntentParams {
    export interface ProcessConfig {
      /**
       * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow.
       */
      allow_redisplay?: ProcessConfig.AllowRedisplay;

      /**
       * Enables cancel button on transaction screens.
       */
      enable_customer_cancellation?: boolean;

      /**
       * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme.
       */
      return_url?: string;

      /**
       * Override showing a tipping selection screen on this transaction.
       */
      skip_tipping?: boolean;

      /**
       * Tipping configuration for this transaction.
       */
      tipping?: ProcessConfig.Tipping;
    }

    export namespace ProcessConfig {
      export type AllowRedisplay = 'always' | 'limited' | 'unspecified';

      export interface Tipping {
        /**
         * Amount used to calculate tip suggestions on tipping selection screen for this transaction. Must be a positive integer in the smallest currency unit (e.g., 100 cents to represent $1.00 or 100 to represent ¥100, a zero-decimal currency).
         */
        amount_eligible?: number;
      }
    }
  }
}
export namespace Terminal {
  export interface ReaderProcessSetupIntentParams {
    /**
     * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow.
     */
    allow_redisplay: ReaderProcessSetupIntentParams.AllowRedisplay;

    /**
     * The ID of the SetupIntent to process on the reader.
     */
    setup_intent: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Configuration overrides for this setup, such as MOTO and customer cancellation settings.
     */
    process_config?: ReaderProcessSetupIntentParams.ProcessConfig;
  }

  export namespace ReaderProcessSetupIntentParams {
    export type AllowRedisplay = 'always' | 'limited' | 'unspecified';

    export interface ProcessConfig {
      /**
       * Enables cancel button on transaction screens.
       */
      enable_customer_cancellation?: boolean;
    }
  }
}
export namespace Terminal {
  export interface ReaderRefundPaymentParams {
    /**
     * A positive integer in __cents__ representing how much of this charge to refund.
     */
    amount?: number;

    /**
     * ID of the Charge to refund.
     */
    charge?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;

    /**
     * ID of the PaymentIntent to refund.
     */
    payment_intent?: string;

    /**
     * Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge refunded. An application fee can be refunded only by the application that created the charge.
     */
    refund_application_fee?: boolean;

    /**
     * Configuration overrides for this refund, such as customer cancellation settings.
     */
    refund_payment_config?: ReaderRefundPaymentParams.RefundPaymentConfig;

    /**
     * Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the entire or partial amount). A transfer can be reversed only by the application that created the charge.
     */
    reverse_transfer?: boolean;
  }

  export namespace ReaderRefundPaymentParams {
    export interface RefundPaymentConfig {
      /**
       * Enables cancel button on transaction screens.
       */
      enable_customer_cancellation?: boolean;
    }
  }
}
export namespace Terminal {
  export interface ReaderSetReaderDisplayParams {
    /**
     * Type of information to display. Only `cart` is currently supported.
     */
    type: 'cart';

    /**
     * Cart details to display on the reader screen, including line items, amounts, and currency.
     */
    cart?: ReaderSetReaderDisplayParams.Cart;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export namespace ReaderSetReaderDisplayParams {
    export interface Cart {
      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * Array of line items to display.
       */
      line_items: Array<Cart.LineItem>;

      /**
       * The amount of tax in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
       */
      tax?: number;

      /**
       * Total balance of cart due in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
       */
      total: number;
    }

    export namespace Cart {
      export interface LineItem {
        /**
         * The price of the item in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
         */
        amount: number;

        /**
         * The description or name of the item.
         */
        description: string;

        /**
         * The quantity of the line item being purchased.
         */
        quantity: number;
      }
    }
  }
}
