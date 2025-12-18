import { StripeResource } from '../StripeResource.js';
import { RequestOptions } from '../Types.js';
import { PaymentIntentAmountDetailsLineItem } from './PaymentIntentAmountDetailsLineItems.js';
import { Application } from './Applications.js';
import { Customer, DeletedCustomer } from './Customers.js';
import { Charge } from './Charges.js';
import { Account } from './Accounts.js';
import { PaymentMethod } from './PaymentMethods.js';
import { Review } from './Reviews.js';
import { CustomerSource, DeletedCustomerSource } from './CustomerSources.js';
import { SetupIntent } from './SetupIntents.js';
import { Emptyable, MetadataParam, AddressParam, PaginationParams, RangeQueryParam, Metadata, Address } from '../shared.js';
import { ApiListPromise, Response, ApiList, ApiSearchResultPromise } from '../lib.js';
export declare class PaymentIntentResource extends StripeResource {
    /**
     * Returns a list of PaymentIntents.
     */
    list(params?: PaymentIntentListParams, options?: RequestOptions): ApiListPromise<PaymentIntent>;
    list(options?: RequestOptions): ApiListPromise<PaymentIntent>;
    /**
     * Creates a PaymentIntent object.
     *
     * After the PaymentIntent is created, attach a payment method and [confirm](https://docs.stripe.com/docs/api/payment_intents/confirm)
     * to continue the payment. Learn more about <a href="/docs/payments/payment-intents">the available payment flows
     * with the Payment Intents API.
     *
     * When you use confirm=true during creation, it's equivalent to creating
     * and confirming the PaymentIntent in the same call. You can use any parameters
     * available in the [confirm API](https://docs.stripe.com/docs/api/payment_intents/confirm) when you supply
     * confirm=true.
     */
    create(params: PaymentIntentCreateParams, options?: RequestOptions): Promise<Response<PaymentIntent>>;
    /**
     * Retrieves the details of a PaymentIntent that has previously been created.
     *
     * You can retrieve a PaymentIntent client-side using a publishable key when the client_secret is in the query string.
     *
     * If you retrieve a PaymentIntent with a publishable key, it only returns a subset of properties. Refer to the [payment intent](https://docs.stripe.com/api#payment_intent_object) object reference for more details.
     */
    retrieve(id: string, params?: PaymentIntentRetrieveParams, options?: RequestOptions): Promise<Response<PaymentIntent>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<PaymentIntent>>;
    /**
     * Updates properties on a PaymentIntent object without confirming.
     *
     * Depending on which properties you update, you might need to confirm the
     * PaymentIntent again. For example, updating the payment_method
     * always requires you to confirm the PaymentIntent again. If you prefer to
     * update and confirm at the same time, we recommend updating properties through
     * the [confirm API](https://docs.stripe.com/docs/api/payment_intents/confirm) instead.
     */
    update(id: string, params?: PaymentIntentUpdateParams, options?: RequestOptions): Promise<Response<PaymentIntent>>;
    /**
     * Search for PaymentIntents you've previously created using Stripe's [Search Query Language](https://docs.stripe.com/docs/search#search-query-language).
     * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
     * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
     * to an hour behind during outages. Search functionality is not available to merchants in India.
     */
    search(params: PaymentIntentSearchParams, options?: RequestOptions): ApiSearchResultPromise<PaymentIntent>;
    /**
     * Manually reconcile the remaining amount for a customer_balance PaymentIntent.
     */
    applyCustomerBalance(id: string, params?: PaymentIntentApplyCustomerBalanceParams, options?: RequestOptions): Promise<Response<PaymentIntent>>;
    applyCustomerBalance(id: string, options?: RequestOptions): Promise<Response<PaymentIntent>>;
    /**
     * You can cancel a PaymentIntent object when it's in one of these statuses: requires_payment_method, requires_capture, requires_confirmation, requires_action or, [in rare cases](https://docs.stripe.com/docs/payments/intents), processing.
     *
     * After it's canceled, no additional charges are made by the PaymentIntent and any operations on the PaymentIntent fail with an error. For PaymentIntents with a status of requires_capture, the remaining amount_capturable is automatically refunded.
     *
     * You can't cancel the PaymentIntent for a Checkout Session. [Expire the Checkout Session](https://docs.stripe.com/docs/api/checkout/sessions/expire) instead.
     */
    cancel(id: string, params?: PaymentIntentCancelParams, options?: RequestOptions): Promise<Response<PaymentIntent>>;
    cancel(id: string, options?: RequestOptions): Promise<Response<PaymentIntent>>;
    /**
     * Capture the funds of an existing uncaptured PaymentIntent when its status is requires_capture.
     *
     * Uncaptured PaymentIntents are cancelled a set number of days (7 by default) after their creation.
     *
     * Learn more about [separate authorization and capture](https://docs.stripe.com/docs/payments/capture-later).
     */
    capture(id: string, params?: PaymentIntentCaptureParams, options?: RequestOptions): Promise<Response<PaymentIntent>>;
    capture(id: string, options?: RequestOptions): Promise<Response<PaymentIntent>>;
    /**
     * Confirm that your customer intends to pay with current or provided
     * payment method. Upon confirmation, the PaymentIntent will attempt to initiate
     * a payment.
     *
     * If the selected payment method requires additional authentication steps, the
     * PaymentIntent will transition to the requires_action status and
     * suggest additional actions via next_action. If payment fails,
     * the PaymentIntent transitions to the requires_payment_method status or the
     * canceled status if the confirmation limit is reached. If
     * payment succeeds, the PaymentIntent will transition to the succeeded
     * status (or requires_capture, if capture_method is set to manual).
     *
     * If the confirmation_method is automatic, payment may be attempted
     * using our [client SDKs](https://docs.stripe.com/docs/stripe-js/reference#stripe-handle-card-payment)
     * and the PaymentIntent's [client_secret](https://docs.stripe.com/api#payment_intent_object-client_secret).
     * After next_actions are handled by the client, no additional
     * confirmation is required to complete the payment.
     *
     * If the confirmation_method is manual, all payment attempts must be
     * initiated using a secret key.
     *
     * If any actions are required for the payment, the PaymentIntent will
     * return to the requires_confirmation state
     * after those actions are completed. Your server needs to then
     * explicitly re-confirm the PaymentIntent to initiate the next payment
     * attempt.
     *
     * There is a variable upper limit on how many times a PaymentIntent can be confirmed.
     * After this limit is reached, any further calls to this endpoint will
     * transition the PaymentIntent to the canceled state.
     */
    confirm(id: string, params?: PaymentIntentConfirmParams, options?: RequestOptions): Promise<Response<PaymentIntent>>;
    confirm(id: string, options?: RequestOptions): Promise<Response<PaymentIntent>>;
    /**
     * Perform an incremental authorization on an eligible
     * [PaymentIntent](https://docs.stripe.com/docs/api/payment_intents/object). To be eligible, the
     * PaymentIntent's status must be requires_capture and
     * [incremental_authorization_supported](https://docs.stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported)
     * must be true.
     *
     * Incremental authorizations attempt to increase the authorized amount on
     * your customer's card to the new, higher amount provided. Similar to the
     * initial authorization, incremental authorizations can be declined. A
     * single PaymentIntent can call this endpoint multiple times to further
     * increase the authorized amount.
     *
     * If the incremental authorization succeeds, the PaymentIntent object
     * returns with the updated
     * [amount](https://docs.stripe.com/docs/api/payment_intents/object#payment_intent_object-amount).
     * If the incremental authorization fails, a
     * [card_declined](https://docs.stripe.com/docs/error-codes#card-declined) error returns, and no other
     * fields on the PaymentIntent or Charge update. The PaymentIntent
     * object remains capturable for the previously authorized amount.
     *
     * Each PaymentIntent can have a maximum of 10 incremental authorization attempts, including declines.
     * After it's captured, a PaymentIntent can no longer be incremented.
     *
     * Learn more about [incremental authorizations](https://docs.stripe.com/docs/terminal/features/incremental-authorizations).
     */
    incrementAuthorization(id: string, params: PaymentIntentIncrementAuthorizationParams, options?: RequestOptions): Promise<Response<PaymentIntent>>;
    /**
     * Verifies microdeposits on a PaymentIntent object.
     */
    verifyMicrodeposits(id: string, params?: PaymentIntentVerifyMicrodepositsParams, options?: RequestOptions): Promise<Response<PaymentIntent>>;
    verifyMicrodeposits(id: string, options?: RequestOptions): Promise<Response<PaymentIntent>>;
    /**
     * Lists all LineItems of a given PaymentIntent.
     */
    listAmountDetailsLineItems(id: string, params?: PaymentIntentListAmountDetailsLineItemsParams, options?: RequestOptions): ApiListPromise<PaymentIntentAmountDetailsLineItem>;
    listAmountDetailsLineItems(id: string, options?: RequestOptions): ApiListPromise<PaymentIntentAmountDetailsLineItem>;
}
export /**
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
 */ interface PaymentIntent {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'payment_intent';
    /**
     * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
     */
    amount: number;
    /**
     * Amount that can be captured from this PaymentIntent.
     */
    amount_capturable: number;
    amount_details?: PaymentIntent.AmountDetails;
    /**
     * Amount that this PaymentIntent collects.
     */
    amount_received: number;
    /**
     * ID of the Connect application that created the PaymentIntent.
     */
    application: string | Application | null;
    /**
     * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    application_fee_amount: number | null;
    /**
     * Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods)
     */
    automatic_payment_methods: PaymentIntent.AutomaticPaymentMethods | null;
    /**
     * Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. Measured in seconds since the Unix epoch.
     */
    canceled_at: number | null;
    /**
     * Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`).
     */
    cancellation_reason: PaymentIntent.CancellationReason | null;
    /**
     * Controls when the funds will be captured from the customer's account.
     */
    capture_method: PaymentIntent.CaptureMethod;
    /**
     * The client secret of this PaymentIntent. Used for client-side retrieval using a publishable key.
     *
     * The client secret can be used to complete a payment from your frontend. It should not be stored, logged, or exposed to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.
     *
     * Refer to our docs to [accept a payment](https://stripe.com/docs/payments/accept-a-payment?ui=elements) and learn about how `client_secret` should be handled.
     */
    client_secret: string | null;
    /**
     * Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment.
     */
    confirmation_method: PaymentIntent.ConfirmationMethod;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * ID of the Customer this PaymentIntent belongs to, if one exists.
     *
     * Payment methods attached to other Customers cannot be used with this PaymentIntent.
     *
     * If [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) is set and this PaymentIntent's payment method is not `card_present`, then the payment method attaches to the Customer after the PaymentIntent has been confirmed and any required actions from the user are complete. If the payment method is `card_present` and isn't a digital wallet, then a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card is created and attached to the Customer instead.
     */
    customer: string | Customer | DeletedCustomer | null;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description: string | null;
    /**
     * The list of payment method types to exclude from use with this payment.
     */
    excluded_payment_method_types: Array<PaymentIntent.ExcludedPaymentMethodType> | null;
    /**
     * The payment error encountered in the previous PaymentIntent confirmation. It will be cleared if the PaymentIntent is later updated for any reason.
     */
    last_payment_error: PaymentIntent.LastPaymentError | null;
    /**
     * ID of the latest [Charge object](https://stripe.com/docs/api/charges) created by this PaymentIntent. This property is `null` until PaymentIntent confirmation is attempted.
     */
    latest_charge: string | Charge | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Learn more about [storing information in metadata](https://stripe.com/docs/payments/payment-intents/creating-payment-intents#storing-information-in-metadata).
     */
    metadata: Metadata;
    /**
     * If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source.
     */
    next_action: PaymentIntent.NextAction | null;
    /**
     * The account (if any) for which the funds of the PaymentIntent are intended. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts) for details.
     */
    on_behalf_of: string | Account | null;
    payment_details?: PaymentIntent.PaymentDetails;
    /**
     * ID of the payment method used in this PaymentIntent.
     */
    payment_method: string | PaymentMethod | null;
    /**
     * Information about the [payment method configuration](https://stripe.com/docs/api/payment_method_configurations) used for this PaymentIntent.
     */
    payment_method_configuration_details: PaymentIntent.PaymentMethodConfigurationDetails | null;
    /**
     * Payment-method-specific configuration for this PaymentIntent.
     */
    payment_method_options: PaymentIntent.PaymentMethodOptions | null;
    /**
     * The list of payment method types (e.g. card) that this PaymentIntent is allowed to use. A comprehensive list of valid payment method types can be found [here](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type).
     */
    payment_method_types: Array<string>;
    presentment_details?: PaymentIntent.PresentmentDetails;
    /**
     * If present, this property tells you about the processing state of the payment.
     */
    processing: PaymentIntent.Processing | null;
    /**
     * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
     */
    receipt_email: string | null;
    /**
     * ID of the review associated with this PaymentIntent, if any.
     */
    review: string | Review | null;
    /**
     * Indicates that you intend to make future payments with this PaymentIntent's payment method.
     *
     * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
     *
     * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
     *
     * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
     */
    setup_future_usage: PaymentIntent.SetupFutureUsage | null;
    /**
     * Shipping information for this PaymentIntent.
     */
    shipping: PaymentIntent.Shipping | null;
    /**
     * This is a legacy field that will be removed in the future. It is the ID of the Source object that is associated with this PaymentIntent, if one was supplied.
     */
    source: string | CustomerSource | DeletedCustomerSource | null;
    /**
     * Text that appears on the customer's statement as the statement descriptor for a non-card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
     *
     * Setting this value for a card charge returns an error. For card charges, set the [statement_descriptor_suffix](https://docs.stripe.com/get-started/account/statement-descriptors#dynamic) instead.
     */
    statement_descriptor: string | null;
    /**
     * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement.
     */
    statement_descriptor_suffix: string | null;
    /**
     * Status of this PaymentIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `requires_capture`, `canceled`, or `succeeded`. Read more about each PaymentIntent [status](https://stripe.com/docs/payments/intents#intent-statuses).
     */
    status: PaymentIntent.Status;
    /**
     * The data that automatically creates a Transfer after the payment finalizes. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    transfer_data: PaymentIntent.TransferData | null;
    /**
     * A string that identifies the resulting payment as part of a group. Learn more about the [use case for connected accounts](https://stripe.com/docs/connect/separate-charges-and-transfers).
     */
    transfer_group: string | null;
}
export declare namespace PaymentIntent {
    interface AmountDetails {
        /**
         * The total discount applied on the transaction represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than 0.
         *
         * This field is mutually exclusive with the `amount_details[line_items][#][discount_amount]` field.
         */
        discount_amount?: number;
        /**
         * A list of line items, each containing information about a product in the PaymentIntent. There is a maximum of 100 line items.
         */
        line_items?: ApiList<PaymentIntentAmountDetailsLineItem>;
        shipping?: AmountDetails.Shipping;
        tax?: AmountDetails.Tax;
        tip?: AmountDetails.Tip;
    }
    interface AutomaticPaymentMethods {
        /**
         * Controls whether this PaymentIntent will accept redirect-based payment methods.
         *
         * Redirect-based payment methods may require your customer to be redirected to a payment method's app or site for authentication or additional steps. To [confirm](https://stripe.com/docs/api/payment_intents/confirm) this PaymentIntent, you may be required to provide a `return_url` to redirect customers back to your site after they authenticate or complete the payment.
         */
        allow_redirects?: AutomaticPaymentMethods.AllowRedirects;
        /**
         * Automatically calculates compatible payment methods
         */
        enabled: boolean;
    }
    type CancellationReason = 'abandoned' | 'automatic' | 'duplicate' | 'expired' | 'failed_invoice' | 'fraudulent' | 'requested_by_customer' | 'void_invoice';
    type CaptureMethod = 'automatic' | 'automatic_async' | 'manual';
    type ConfirmationMethod = 'automatic' | 'manual';
    type ExcludedPaymentMethodType = 'acss_debit' | 'affirm' | 'afterpay_clearpay' | 'alipay' | 'alma' | 'amazon_pay' | 'au_becs_debit' | 'bacs_debit' | 'bancontact' | 'billie' | 'blik' | 'boleto' | 'card' | 'cashapp' | 'crypto' | 'customer_balance' | 'eps' | 'fpx' | 'giropay' | 'grabpay' | 'ideal' | 'kakao_pay' | 'klarna' | 'konbini' | 'kr_card' | 'mb_way' | 'mobilepay' | 'multibanco' | 'naver_pay' | 'nz_bank_account' | 'oxxo' | 'p24' | 'pay_by_bank' | 'payco' | 'paynow' | 'paypal' | 'pix' | 'promptpay' | 'revolut_pay' | 'samsung_pay' | 'satispay' | 'sepa_debit' | 'sofort' | 'swish' | 'twint' | 'us_bank_account' | 'wechat_pay' | 'zip';
    interface LastPaymentError {
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
        code?: LastPaymentError.Code;
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
        type: LastPaymentError.Type;
    }
    interface NextAction {
        alipay_handle_redirect?: NextAction.AlipayHandleRedirect;
        boleto_display_details?: NextAction.BoletoDisplayDetails;
        card_await_notification?: NextAction.CardAwaitNotification;
        cashapp_handle_redirect_or_display_qr_code?: NextAction.CashappHandleRedirectOrDisplayQrCode;
        display_bank_transfer_instructions?: NextAction.DisplayBankTransferInstructions;
        konbini_display_details?: NextAction.KonbiniDisplayDetails;
        multibanco_display_details?: NextAction.MultibancoDisplayDetails;
        oxxo_display_details?: NextAction.OxxoDisplayDetails;
        paynow_display_qr_code?: NextAction.PaynowDisplayQrCode;
        pix_display_qr_code?: NextAction.PixDisplayQrCode;
        promptpay_display_qr_code?: NextAction.PromptpayDisplayQrCode;
        redirect_to_url?: NextAction.RedirectToUrl;
        swish_handle_redirect_or_display_qr_code?: NextAction.SwishHandleRedirectOrDisplayQrCode;
        /**
         * Type of the next action to perform. Refer to the other child attributes under `next_action` for available values. Examples include: `redirect_to_url`, `use_stripe_sdk`, `alipay_handle_redirect`, `oxxo_display_details`, or `verify_with_microdeposits`.
         */
        type: string;
        /**
         * When confirming a PaymentIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js.
         */
        use_stripe_sdk?: NextAction.UseStripeSdk;
        verify_with_microdeposits?: NextAction.VerifyWithMicrodeposits;
        wechat_pay_display_qr_code?: NextAction.WechatPayDisplayQrCode;
        wechat_pay_redirect_to_android_app?: NextAction.WechatPayRedirectToAndroidApp;
        wechat_pay_redirect_to_ios_app?: NextAction.WechatPayRedirectToIosApp;
    }
    interface PaymentDetails {
        /**
         * A unique value to identify the customer. This field is available only for card payments.
         *
         * This field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks.
         */
        customer_reference: string | null;
        /**
         * A unique value assigned by the business to identify the transaction. Required for L2 and L3 rates.
         *
         * Required when the Payment Method Types array contains `card`, including when [automatic_payment_methods.enabled](https://docs.stripe.com/api/payment_intents/create#create_payment_intent-automatic_payment_methods-enabled) is set to `true`.
         *
         * For Cards, this field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks. For Klarna, this field is truncated to 255 characters and is visible to customers when they view the order in the Klarna app.
         */
        order_reference: string | null;
    }
    interface PaymentMethodConfigurationDetails {
        /**
         * ID of the payment method configuration used.
         */
        id: string;
        /**
         * ID of the parent payment method configuration used.
         */
        parent: string | null;
    }
    interface PaymentMethodOptions {
        acss_debit?: PaymentMethodOptions.AcssDebit;
        affirm?: PaymentMethodOptions.Affirm;
        afterpay_clearpay?: PaymentMethodOptions.AfterpayClearpay;
        alipay?: PaymentMethodOptions.Alipay;
        alma?: PaymentMethodOptions.Alma;
        amazon_pay?: PaymentMethodOptions.AmazonPay;
        au_becs_debit?: PaymentMethodOptions.AuBecsDebit;
        bacs_debit?: PaymentMethodOptions.BacsDebit;
        bancontact?: PaymentMethodOptions.Bancontact;
        billie?: PaymentMethodOptions.Billie;
        blik?: PaymentMethodOptions.Blik;
        boleto?: PaymentMethodOptions.Boleto;
        card?: PaymentMethodOptions.Card;
        card_present?: PaymentMethodOptions.CardPresent;
        cashapp?: PaymentMethodOptions.Cashapp;
        crypto?: PaymentMethodOptions.Crypto;
        customer_balance?: PaymentMethodOptions.CustomerBalance;
        eps?: PaymentMethodOptions.Eps;
        fpx?: PaymentMethodOptions.Fpx;
        giropay?: PaymentMethodOptions.Giropay;
        grabpay?: PaymentMethodOptions.Grabpay;
        ideal?: PaymentMethodOptions.Ideal;
        interac_present?: PaymentMethodOptions.InteracPresent;
        kakao_pay?: PaymentMethodOptions.KakaoPay;
        klarna?: PaymentMethodOptions.Klarna;
        konbini?: PaymentMethodOptions.Konbini;
        kr_card?: PaymentMethodOptions.KrCard;
        link?: PaymentMethodOptions.Link;
        mb_way?: PaymentMethodOptions.MbWay;
        mobilepay?: PaymentMethodOptions.Mobilepay;
        multibanco?: PaymentMethodOptions.Multibanco;
        naver_pay?: PaymentMethodOptions.NaverPay;
        nz_bank_account?: PaymentMethodOptions.NzBankAccount;
        oxxo?: PaymentMethodOptions.Oxxo;
        p24?: PaymentMethodOptions.P24;
        pay_by_bank?: PaymentMethodOptions.PayByBank;
        payco?: PaymentMethodOptions.Payco;
        paynow?: PaymentMethodOptions.Paynow;
        paypal?: PaymentMethodOptions.Paypal;
        pix?: PaymentMethodOptions.Pix;
        promptpay?: PaymentMethodOptions.Promptpay;
        revolut_pay?: PaymentMethodOptions.RevolutPay;
        samsung_pay?: PaymentMethodOptions.SamsungPay;
        satispay?: PaymentMethodOptions.Satispay;
        sepa_debit?: PaymentMethodOptions.SepaDebit;
        sofort?: PaymentMethodOptions.Sofort;
        swish?: PaymentMethodOptions.Swish;
        twint?: PaymentMethodOptions.Twint;
        us_bank_account?: PaymentMethodOptions.UsBankAccount;
        wechat_pay?: PaymentMethodOptions.WechatPay;
        zip?: PaymentMethodOptions.Zip;
    }
    interface PresentmentDetails {
        /**
         * Amount intended to be collected by this payment, denominated in `presentment_currency`.
         */
        presentment_amount: number;
        /**
         * Currency presented to the customer during payment.
         */
        presentment_currency: string;
    }
    interface Processing {
        card?: Processing.Card;
        /**
         * Type of the payment method for which payment is in `processing` state, one of `card`.
         */
        type: 'card';
    }
    type SetupFutureUsage = 'off_session' | 'on_session';
    interface Shipping {
        address?: Address;
        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string | null;
        /**
         * Recipient name.
         */
        name?: string;
        /**
         * Recipient phone (including extension).
         */
        phone?: string | null;
        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string | null;
    }
    type Status = 'canceled' | 'processing' | 'requires_action' | 'requires_capture' | 'requires_confirmation' | 'requires_payment_method' | 'succeeded';
    interface TransferData {
        /**
         * The amount transferred to the destination account. This transfer will occur automatically after the payment succeeds. If no amount is specified, by default the entire payment amount is transferred to the destination account.
         *  The amount must be less than or equal to the [amount](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-amount), and must be a positive integer
         *  representing how much to transfer in the smallest currency unit (e.g., 100 cents to charge $1.00).
         */
        amount?: number;
        /**
         * The account (if any) that the payment is attributed to for tax reporting, and where funds from the payment are transferred to after payment success.
         */
        destination: string | Account;
    }
    namespace AmountDetails {
        interface Shipping {
            /**
             * If a physical good is being shipped, the cost of shipping represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than or equal to 0.
             */
            amount: number | null;
            /**
             * If a physical good is being shipped, the postal code of where it is being shipped from. At most 10 alphanumeric characters long, hyphens are allowed.
             */
            from_postal_code: string | null;
            /**
             * If a physical good is being shipped, the postal code of where it is being shipped to. At most 10 alphanumeric characters long, hyphens are allowed.
             */
            to_postal_code: string | null;
        }
        interface Tax {
            /**
             * The total amount of tax on the transaction represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L2 rates. An integer greater than or equal to 0.
             *
             * This field is mutually exclusive with the `amount_details[line_items][#][tax][total_tax_amount]` field.
             */
            total_tax_amount: number | null;
        }
        interface Tip {
            /**
             * Portion of the amount that corresponds to a tip.
             */
            amount?: number;
        }
    }
    namespace AutomaticPaymentMethods {
        type AllowRedirects = 'always' | 'never';
    }
    namespace LastPaymentError {
        type Code = 'account_closed' | 'account_country_invalid_address' | 'account_error_country_change_requires_additional_steps' | 'account_information_mismatch' | 'account_invalid' | 'account_number_invalid' | 'acss_debit_session_incomplete' | 'alipay_upgrade_required' | 'amount_too_large' | 'amount_too_small' | 'api_key_expired' | 'application_fees_not_allowed' | 'authentication_required' | 'balance_insufficient' | 'balance_invalid_parameter' | 'bank_account_bad_routing_numbers' | 'bank_account_declined' | 'bank_account_exists' | 'bank_account_restricted' | 'bank_account_unusable' | 'bank_account_unverified' | 'bank_account_verification_failed' | 'billing_invalid_mandate' | 'bitcoin_upgrade_required' | 'capture_charge_authorization_expired' | 'capture_unauthorized_payment' | 'card_decline_rate_limit_exceeded' | 'card_declined' | 'cardholder_phone_number_required' | 'charge_already_captured' | 'charge_already_refunded' | 'charge_disputed' | 'charge_exceeds_source_limit' | 'charge_exceeds_transaction_limit' | 'charge_expired_for_capture' | 'charge_invalid_parameter' | 'charge_not_refundable' | 'clearing_code_unsupported' | 'country_code_invalid' | 'country_unsupported' | 'coupon_expired' | 'customer_max_payment_methods' | 'customer_max_subscriptions' | 'customer_session_expired' | 'customer_tax_location_invalid' | 'debit_not_authorized' | 'email_invalid' | 'expired_card' | 'financial_connections_account_inactive' | 'financial_connections_account_pending_account_numbers' | 'financial_connections_account_unavailable_account_numbers' | 'financial_connections_no_successful_transaction_refresh' | 'forwarding_api_inactive' | 'forwarding_api_invalid_parameter' | 'forwarding_api_retryable_upstream_error' | 'forwarding_api_upstream_connection_error' | 'forwarding_api_upstream_connection_timeout' | 'forwarding_api_upstream_error' | 'idempotency_key_in_use' | 'incorrect_address' | 'incorrect_cvc' | 'incorrect_number' | 'incorrect_zip' | 'india_recurring_payment_mandate_canceled' | 'instant_payouts_config_disabled' | 'instant_payouts_currency_disabled' | 'instant_payouts_limit_exceeded' | 'instant_payouts_unsupported' | 'insufficient_funds' | 'intent_invalid_state' | 'intent_verification_method_missing' | 'invalid_card_type' | 'invalid_characters' | 'invalid_charge_amount' | 'invalid_cvc' | 'invalid_expiry_month' | 'invalid_expiry_year' | 'invalid_mandate_reference_prefix_format' | 'invalid_number' | 'invalid_source_usage' | 'invalid_tax_location' | 'invoice_no_customer_line_items' | 'invoice_no_payment_method_types' | 'invoice_no_subscription_line_items' | 'invoice_not_editable' | 'invoice_on_behalf_of_not_editable' | 'invoice_payment_intent_requires_action' | 'invoice_upcoming_none' | 'livemode_mismatch' | 'lock_timeout' | 'missing' | 'no_account' | 'not_allowed_on_standard_account' | 'out_of_inventory' | 'ownership_declaration_not_allowed' | 'parameter_invalid_empty' | 'parameter_invalid_integer' | 'parameter_invalid_string_blank' | 'parameter_invalid_string_empty' | 'parameter_missing' | 'parameter_unknown' | 'parameters_exclusive' | 'payment_intent_action_required' | 'payment_intent_authentication_failure' | 'payment_intent_incompatible_payment_method' | 'payment_intent_invalid_parameter' | 'payment_intent_konbini_rejected_confirmation_number' | 'payment_intent_mandate_invalid' | 'payment_intent_payment_attempt_expired' | 'payment_intent_payment_attempt_failed' | 'payment_intent_rate_limit_exceeded' | 'payment_intent_unexpected_state' | 'payment_method_bank_account_already_verified' | 'payment_method_bank_account_blocked' | 'payment_method_billing_details_address_missing' | 'payment_method_configuration_failures' | 'payment_method_currency_mismatch' | 'payment_method_customer_decline' | 'payment_method_invalid_parameter' | 'payment_method_invalid_parameter_testmode' | 'payment_method_microdeposit_failed' | 'payment_method_microdeposit_verification_amounts_invalid' | 'payment_method_microdeposit_verification_amounts_mismatch' | 'payment_method_microdeposit_verification_attempts_exceeded' | 'payment_method_microdeposit_verification_descriptor_code_mismatch' | 'payment_method_microdeposit_verification_timeout' | 'payment_method_not_available' | 'payment_method_provider_decline' | 'payment_method_provider_timeout' | 'payment_method_unactivated' | 'payment_method_unexpected_state' | 'payment_method_unsupported_type' | 'payout_reconciliation_not_ready' | 'payouts_limit_exceeded' | 'payouts_not_allowed' | 'platform_account_required' | 'platform_api_key_expired' | 'postal_code_invalid' | 'processing_error' | 'product_inactive' | 'progressive_onboarding_limit_exceeded' | 'rate_limit' | 'refer_to_customer' | 'refund_disputed_payment' | 'resource_already_exists' | 'resource_missing' | 'return_intent_already_processed' | 'routing_number_invalid' | 'secret_key_required' | 'sepa_unsupported_account' | 'setup_attempt_failed' | 'setup_intent_authentication_failure' | 'setup_intent_invalid_parameter' | 'setup_intent_mandate_invalid' | 'setup_intent_mobile_wallet_unsupported' | 'setup_intent_setup_attempt_expired' | 'setup_intent_unexpected_state' | 'shipping_address_invalid' | 'shipping_calculation_failed' | 'sku_inactive' | 'state_unsupported' | 'status_transition_invalid' | 'stripe_tax_inactive' | 'tax_id_invalid' | 'tax_id_prohibited' | 'taxes_calculation_failed' | 'terminal_location_country_unsupported' | 'terminal_reader_busy' | 'terminal_reader_hardware_fault' | 'terminal_reader_invalid_location_for_activation' | 'terminal_reader_invalid_location_for_payment' | 'terminal_reader_offline' | 'terminal_reader_timeout' | 'testmode_charges_only' | 'tls_version_unsupported' | 'token_already_used' | 'token_card_network_invalid' | 'token_in_use' | 'transfer_source_balance_parameters_mismatch' | 'transfers_not_allowed' | 'url_invalid';
        type Type = 'api_error' | 'card_error' | 'idempotency_error' | 'invalid_request_error';
    }
    namespace NextAction {
        interface AlipayHandleRedirect {
            /**
             * The native data to be used with Alipay SDK you must redirect your customer to in order to authenticate the payment in an Android App.
             */
            native_data: string | null;
            /**
             * The native URL you must redirect your customer to in order to authenticate the payment in an iOS App.
             */
            native_url: string | null;
            /**
             * If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
             */
            return_url: string | null;
            /**
             * The URL you must redirect your customer to in order to authenticate the payment.
             */
            url: string | null;
        }
        interface BoletoDisplayDetails {
            /**
             * The timestamp after which the boleto expires.
             */
            expires_at: number | null;
            /**
             * The URL to the hosted boleto voucher page, which allows customers to view the boleto voucher.
             */
            hosted_voucher_url: string | null;
            /**
             * The boleto number.
             */
            number: string | null;
            /**
             * The URL to the downloadable boleto voucher PDF.
             */
            pdf: string | null;
        }
        interface CardAwaitNotification {
            /**
             * The time that payment will be attempted. If customer approval is required, they need to provide approval before this time.
             */
            charge_attempt_at: number | null;
            /**
             * For payments greater than INR 15000, the customer must provide explicit approval of the payment with their bank. For payments of lower amount, no customer action is required.
             */
            customer_approval_required: boolean | null;
        }
        interface CashappHandleRedirectOrDisplayQrCode {
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
        interface DisplayBankTransferInstructions {
            /**
             * The remaining amount that needs to be transferred to complete the payment.
             */
            amount_remaining: number | null;
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string | null;
            /**
             * A list of financial addresses that can be used to fund the customer balance
             */
            financial_addresses?: Array<DisplayBankTransferInstructions.FinancialAddress>;
            /**
             * A link to a hosted page that guides your customer through completing the transfer.
             */
            hosted_instructions_url: string | null;
            /**
             * A string identifying this payment. Instruct your customer to include this code in the reference or memo field of their bank transfer.
             */
            reference: string | null;
            /**
             * Type of bank transfer
             */
            type: DisplayBankTransferInstructions.Type;
        }
        interface KonbiniDisplayDetails {
            /**
             * The timestamp at which the pending Konbini payment expires.
             */
            expires_at: number;
            /**
             * The URL for the Konbini payment instructions page, which allows customers to view and print a Konbini voucher.
             */
            hosted_voucher_url: string | null;
            stores: KonbiniDisplayDetails.Stores;
        }
        interface MultibancoDisplayDetails {
            /**
             * Entity number associated with this Multibanco payment.
             */
            entity: string | null;
            /**
             * The timestamp at which the Multibanco voucher expires.
             */
            expires_at: number | null;
            /**
             * The URL for the hosted Multibanco voucher page, which allows customers to view a Multibanco voucher.
             */
            hosted_voucher_url: string | null;
            /**
             * Reference number associated with this Multibanco payment.
             */
            reference: string | null;
        }
        interface OxxoDisplayDetails {
            /**
             * The timestamp after which the OXXO voucher expires.
             */
            expires_after: number | null;
            /**
             * The URL for the hosted OXXO voucher page, which allows customers to view and print an OXXO voucher.
             */
            hosted_voucher_url: string | null;
            /**
             * OXXO reference number.
             */
            number: string | null;
        }
        interface PaynowDisplayQrCode {
            /**
             * The raw data string used to generate QR code, it should be used together with QR code library.
             */
            data: string;
            /**
             * The URL to the hosted PayNow instructions page, which allows customers to view the PayNow QR code.
             */
            hosted_instructions_url: string | null;
            /**
             * The image_url_png string used to render QR code
             */
            image_url_png: string;
            /**
             * The image_url_svg string used to render QR code
             */
            image_url_svg: string;
        }
        interface PixDisplayQrCode {
            /**
             * The raw data string used to generate QR code, it should be used together with QR code library.
             */
            data?: string;
            /**
             * The date (unix timestamp) when the PIX expires.
             */
            expires_at?: number;
            /**
             * The URL to the hosted pix instructions page, which allows customers to view the pix QR code.
             */
            hosted_instructions_url?: string;
            /**
             * The image_url_png string used to render png QR code
             */
            image_url_png?: string;
            /**
             * The image_url_svg string used to render svg QR code
             */
            image_url_svg?: string;
        }
        interface PromptpayDisplayQrCode {
            /**
             * The raw data string used to generate QR code, it should be used together with QR code library.
             */
            data: string;
            /**
             * The URL to the hosted PromptPay instructions page, which allows customers to view the PromptPay QR code.
             */
            hosted_instructions_url: string;
            /**
             * The PNG path used to render the QR code, can be used as the source in an HTML img tag
             */
            image_url_png: string;
            /**
             * The SVG path used to render the QR code, can be used as the source in an HTML img tag
             */
            image_url_svg: string;
        }
        interface RedirectToUrl {
            /**
             * If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
             */
            return_url: string | null;
            /**
             * The URL you must redirect your customer to in order to authenticate the payment.
             */
            url: string | null;
        }
        interface SwishHandleRedirectOrDisplayQrCode {
            /**
             * The URL to the hosted Swish instructions page, which allows customers to view the QR code.
             */
            hosted_instructions_url: string;
            /**
             * The url for mobile redirect based auth (for internal use only and not typically available in standard API requests).
             */
            mobile_auth_url: string;
            qr_code: SwishHandleRedirectOrDisplayQrCode.QrCode;
        }
        type UseStripeSdk = {
            [key: string]: unknown;
        };
        interface VerifyWithMicrodeposits {
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
        interface WechatPayDisplayQrCode {
            /**
             * The data being used to generate QR code
             */
            data: string;
            /**
             * The URL to the hosted WeChat Pay instructions page, which allows customers to view the WeChat Pay QR code.
             */
            hosted_instructions_url: string;
            /**
             * The base64 image data for a pre-generated QR code
             */
            image_data_url: string;
            /**
             * The image_url_png string used to render QR code
             */
            image_url_png: string;
            /**
             * The image_url_svg string used to render QR code
             */
            image_url_svg: string;
        }
        interface WechatPayRedirectToAndroidApp {
            /**
             * app_id is the APP ID registered on WeChat open platform
             */
            app_id: string;
            /**
             * nonce_str is a random string
             */
            nonce_str: string;
            /**
             * package is static value
             */
            package: string;
            /**
             * an unique merchant ID assigned by WeChat Pay
             */
            partner_id: string;
            /**
             * an unique trading ID assigned by WeChat Pay
             */
            prepay_id: string;
            /**
             * A signature
             */
            sign: string;
            /**
             * Specifies the current time in epoch format
             */
            timestamp: string;
        }
        interface WechatPayRedirectToIosApp {
            /**
             * An universal link that redirect to WeChat Pay app
             */
            native_url: string;
        }
        namespace CashappHandleRedirectOrDisplayQrCode {
            interface QrCode {
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
        namespace DisplayBankTransferInstructions {
            interface FinancialAddress {
                /**
                 * ABA Records contain U.S. bank account details per the ABA format.
                 */
                aba?: FinancialAddress.Aba;
                /**
                 * Iban Records contain E.U. bank account details per the SEPA format.
                 */
                iban?: FinancialAddress.Iban;
                /**
                 * Sort Code Records contain U.K. bank account details per the sort code format.
                 */
                sort_code?: FinancialAddress.SortCode;
                /**
                 * SPEI Records contain Mexico bank account details per the SPEI format.
                 */
                spei?: FinancialAddress.Spei;
                /**
                 * The payment networks supported by this FinancialAddress
                 */
                supported_networks?: Array<FinancialAddress.SupportedNetwork>;
                /**
                 * SWIFT Records contain U.S. bank account details per the SWIFT format.
                 */
                swift?: FinancialAddress.Swift;
                /**
                 * The type of financial address
                 */
                type: FinancialAddress.Type;
                /**
                 * Zengin Records contain Japan bank account details per the Zengin format.
                 */
                zengin?: FinancialAddress.Zengin;
            }
            type Type = 'eu_bank_transfer' | 'gb_bank_transfer' | 'jp_bank_transfer' | 'mx_bank_transfer' | 'us_bank_transfer';
            namespace FinancialAddress {
                interface Aba {
                    account_holder_address: Address;
                    /**
                     * The account holder name
                     */
                    account_holder_name: string;
                    /**
                     * The ABA account number
                     */
                    account_number: string;
                    /**
                     * The account type
                     */
                    account_type: string;
                    bank_address: Address;
                    /**
                     * The bank name
                     */
                    bank_name: string;
                    /**
                     * The ABA routing number
                     */
                    routing_number: string;
                }
                interface Iban {
                    account_holder_address: Address;
                    /**
                     * The name of the person or business that owns the bank account
                     */
                    account_holder_name: string;
                    bank_address: Address;
                    /**
                     * The BIC/SWIFT code of the account.
                     */
                    bic: string;
                    /**
                     * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                     */
                    country: string;
                    /**
                     * The IBAN of the account.
                     */
                    iban: string;
                }
                interface SortCode {
                    account_holder_address: Address;
                    /**
                     * The name of the person or business that owns the bank account
                     */
                    account_holder_name: string;
                    /**
                     * The account number
                     */
                    account_number: string;
                    bank_address: Address;
                    /**
                     * The six-digit sort code
                     */
                    sort_code: string;
                }
                interface Spei {
                    account_holder_address: Address;
                    /**
                     * The account holder name
                     */
                    account_holder_name: string;
                    bank_address: Address;
                    /**
                     * The three-digit bank code
                     */
                    bank_code: string;
                    /**
                     * The short banking institution name
                     */
                    bank_name: string;
                    /**
                     * The CLABE number
                     */
                    clabe: string;
                }
                type SupportedNetwork = 'ach' | 'bacs' | 'domestic_wire_us' | 'fps' | 'sepa' | 'spei' | 'swift' | 'zengin';
                interface Swift {
                    account_holder_address: Address;
                    /**
                     * The account holder name
                     */
                    account_holder_name: string;
                    /**
                     * The account number
                     */
                    account_number: string;
                    /**
                     * The account type
                     */
                    account_type: string;
                    bank_address: Address;
                    /**
                     * The bank name
                     */
                    bank_name: string;
                    /**
                     * The SWIFT code
                     */
                    swift_code: string;
                }
                type Type = 'aba' | 'iban' | 'sort_code' | 'spei' | 'swift' | 'zengin';
                interface Zengin {
                    account_holder_address: Address;
                    /**
                     * The account holder name
                     */
                    account_holder_name: string | null;
                    /**
                     * The account number
                     */
                    account_number: string | null;
                    /**
                     * The bank account type. In Japan, this can only be `futsu` or `toza`.
                     */
                    account_type: string | null;
                    bank_address: Address;
                    /**
                     * The bank code of the account
                     */
                    bank_code: string | null;
                    /**
                     * The bank name of the account
                     */
                    bank_name: string | null;
                    /**
                     * The branch code of the account
                     */
                    branch_code: string | null;
                    /**
                     * The branch name of the account
                     */
                    branch_name: string | null;
                }
            }
        }
        namespace KonbiniDisplayDetails {
            interface Stores {
                /**
                 * FamilyMart instruction details.
                 */
                familymart: Stores.Familymart | null;
                /**
                 * Lawson instruction details.
                 */
                lawson: Stores.Lawson | null;
                /**
                 * Ministop instruction details.
                 */
                ministop: Stores.Ministop | null;
                /**
                 * Seicomart instruction details.
                 */
                seicomart: Stores.Seicomart | null;
            }
            namespace Stores {
                interface Familymart {
                    /**
                     * The confirmation number.
                     */
                    confirmation_number?: string;
                    /**
                     * The payment code.
                     */
                    payment_code: string;
                }
                interface Lawson {
                    /**
                     * The confirmation number.
                     */
                    confirmation_number?: string;
                    /**
                     * The payment code.
                     */
                    payment_code: string;
                }
                interface Ministop {
                    /**
                     * The confirmation number.
                     */
                    confirmation_number?: string;
                    /**
                     * The payment code.
                     */
                    payment_code: string;
                }
                interface Seicomart {
                    /**
                     * The confirmation number.
                     */
                    confirmation_number?: string;
                    /**
                     * The payment code.
                     */
                    payment_code: string;
                }
            }
        }
        namespace SwishHandleRedirectOrDisplayQrCode {
            interface QrCode {
                /**
                 * The raw data string used to generate QR code, it should be used together with QR code library.
                 */
                data: string;
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
        namespace VerifyWithMicrodeposits {
            type MicrodepositType = 'amounts' | 'descriptor_code';
        }
    }
    namespace PaymentMethodOptions {
        interface AcssDebit {
            mandate_options?: AcssDebit.MandateOptions;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: AcssDebit.SetupFutureUsage;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
            /**
             * Bank account verification method.
             */
            verification_method?: AcssDebit.VerificationMethod;
        }
        interface Affirm {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
            /**
             * Preferred language of the Affirm authorization page that the customer is redirected to.
             */
            preferred_locale?: string;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface AfterpayClearpay {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
            /**
             * An internal identifier or reference that this payment corresponds to. You must limit the identifier to 128 characters, and it can only contain letters, numbers, underscores, backslashes, and dashes.
             * This field differs from the statement descriptor and item name.
             */
            reference: string | null;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface Alipay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Alipay.SetupFutureUsage;
        }
        interface Alma {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
        }
        interface AmazonPay {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: AmazonPay.SetupFutureUsage;
        }
        interface AuBecsDebit {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: AuBecsDebit.SetupFutureUsage;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
        }
        interface BacsDebit {
            mandate_options?: BacsDebit.MandateOptions;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: BacsDebit.SetupFutureUsage;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
        }
        interface Bancontact {
            /**
             * Preferred language of the Bancontact authorization page that the customer is redirected to.
             */
            preferred_language: Bancontact.PreferredLanguage;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Bancontact.SetupFutureUsage;
        }
        interface Billie {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
        }
        interface Blik {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface Boleto {
            /**
             * The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto voucher will expire on Wednesday at 23:59 America/Sao_Paulo time.
             */
            expires_after_days: number;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Boleto.SetupFutureUsage;
        }
        interface Card {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
            /**
             * Installment details for this payment.
             *
             * For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
             */
            installments: Card.Installments | null;
            /**
             * Configuration options for setting up an eMandate for cards issued in India.
             */
            mandate_options: Card.MandateOptions | null;
            /**
             * Selected network to process this payment intent on. Depends on the available networks of the card attached to the payment intent. Can be only set confirm-time.
             */
            network: Card.Network | null;
            /**
             * Request ability to [capture beyond the standard authorization validity window](https://stripe.com/docs/payments/extended-authorization) for this PaymentIntent.
             */
            request_extended_authorization?: Card.RequestExtendedAuthorization;
            /**
             * Request ability to [increment the authorization](https://stripe.com/docs/payments/incremental-authorization) for this PaymentIntent.
             */
            request_incremental_authorization?: Card.RequestIncrementalAuthorization;
            /**
             * Request ability to make [multiple captures](https://stripe.com/docs/payments/multicapture) for this PaymentIntent.
             */
            request_multicapture?: Card.RequestMulticapture;
            /**
             * Request ability to [overcapture](https://stripe.com/docs/payments/overcapture) for this PaymentIntent.
             */
            request_overcapture?: Card.RequestOvercapture;
            /**
             * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
             */
            request_three_d_secure: Card.RequestThreeDSecure | null;
            /**
             * When enabled, using a card that is attached to a customer will require the CVC to be provided again (i.e. using the cvc_token parameter).
             */
            require_cvc_recollection?: boolean;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Card.SetupFutureUsage;
            /**
             * Provides information about a card payment that customers see on their statements. Concatenated with the Kana prefix (shortened Kana descriptor) or Kana statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 22 characters.
             */
            statement_descriptor_suffix_kana?: string;
            /**
             * Provides information about a card payment that customers see on their statements. Concatenated with the Kanji prefix (shortened Kanji descriptor) or Kanji statement descriptor that's set on the account to form the complete statement descriptor. Maximum 17 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 17 characters.
             */
            statement_descriptor_suffix_kanji?: string;
        }
        interface CardPresent {
            /**
             * Request ability to capture this payment beyond the standard [authorization validity window](https://stripe.com/docs/terminal/features/extended-authorizations#authorization-validity)
             */
            request_extended_authorization: boolean | null;
            /**
             * Request ability to [increment](https://stripe.com/docs/terminal/features/incremental-authorizations) this PaymentIntent if the combination of MCC and card brand is eligible. Check [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported) in the [Confirm](https://stripe.com/docs/api/payment_intents/confirm) response to verify support.
             */
            request_incremental_authorization_support: boolean | null;
            routing?: CardPresent.Routing;
        }
        interface Cashapp {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Cashapp.SetupFutureUsage;
        }
        interface Crypto {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface CustomerBalance {
            bank_transfer?: CustomerBalance.BankTransfer;
            /**
             * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
             */
            funding_type: 'bank_transfer' | null;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface Eps {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface Fpx {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface Giropay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface Grabpay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface Ideal {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Ideal.SetupFutureUsage;
        }
        interface InteracPresent {
        }
        interface KakaoPay {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: KakaoPay.SetupFutureUsage;
        }
        interface Klarna {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
            /**
             * Preferred locale of the Klarna checkout page that the customer is redirected to.
             */
            preferred_locale: string | null;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Klarna.SetupFutureUsage;
        }
        interface Konbini {
            /**
             * An optional 10 to 11 digit numeric-only string determining the confirmation code at applicable convenience stores.
             */
            confirmation_number: string | null;
            /**
             * The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST.
             */
            expires_after_days: number | null;
            /**
             * The timestamp at which the Konbini payment instructions will expire. Only one of `expires_after_days` or `expires_at` may be set.
             */
            expires_at: number | null;
            /**
             * A product descriptor of up to 22 characters, which will appear to customers at the convenience store.
             */
            product_description: string | null;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface KrCard {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: KrCard.SetupFutureUsage;
        }
        interface Link {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
            /**
             * [Deprecated] This is a legacy parameter that no longer has any function.
             * @deprecated
             */
            persistent_token: string | null;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Link.SetupFutureUsage;
        }
        interface MbWay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface Mobilepay {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface Multibanco {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface NaverPay {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: NaverPay.SetupFutureUsage;
        }
        interface NzBankAccount {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: NzBankAccount.SetupFutureUsage;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
        }
        interface Oxxo {
            /**
             * The number of calendar days before an OXXO invoice expires. For example, if you create an OXXO invoice on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
             */
            expires_after_days: number;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface P24 {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface PayByBank {
        }
        interface Payco {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
        }
        interface Paynow {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface Paypal {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
            /**
             * Preferred locale of the PayPal checkout page that the customer is redirected to.
             */
            preferred_locale: string | null;
            /**
             * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
             */
            reference: string | null;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Paypal.SetupFutureUsage;
        }
        interface Pix {
            /**
             * Determines if the amount includes the IOF tax.
             */
            amount_includes_iof?: Pix.AmountIncludesIof;
            /**
             * The number of seconds (between 10 and 1209600) after which Pix payment will expire.
             */
            expires_after_seconds: number | null;
            /**
             * The timestamp at which the Pix expires.
             */
            expires_at: number | null;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface Promptpay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface RevolutPay {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: RevolutPay.SetupFutureUsage;
        }
        interface SamsungPay {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
        }
        interface Satispay {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: 'manual';
        }
        interface SepaDebit {
            mandate_options?: SepaDebit.MandateOptions;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: SepaDebit.SetupFutureUsage;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
        }
        interface Sofort {
            /**
             * Preferred language of the SOFORT authorization page that the customer is redirected to.
             */
            preferred_language: Sofort.PreferredLanguage | null;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Sofort.SetupFutureUsage;
        }
        interface Swish {
            /**
             * A reference for this payment to be displayed in the Swish app.
             */
            reference: string | null;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface Twint {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface UsBankAccount {
            financial_connections?: UsBankAccount.FinancialConnections;
            mandate_options?: UsBankAccount.MandateOptions;
            /**
             * Preferred transaction settlement speed
             */
            preferred_settlement_speed?: UsBankAccount.PreferredSettlementSpeed;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: UsBankAccount.SetupFutureUsage;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
            /**
             * Bank account verification method.
             */
            verification_method?: UsBankAccount.VerificationMethod;
        }
        interface WechatPay {
            /**
             * The app ID registered with WeChat Pay. Only required when client is ios or android.
             */
            app_id: string | null;
            /**
             * The client type that the end customer will pay from
             */
            client: WechatPay.Client | null;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        interface Zip {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: 'none';
        }
        namespace AcssDebit {
            interface MandateOptions {
                /**
                 * A URL for custom mandate text
                 */
                custom_mandate_url?: string;
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
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
            namespace MandateOptions {
                type PaymentSchedule = 'combined' | 'interval' | 'sporadic';
                type TransactionType = 'business' | 'personal';
            }
        }
        namespace Alipay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace AmazonPay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace AuBecsDebit {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace BacsDebit {
            interface MandateOptions {
                /**
                 * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'DDIC' or 'STRIPE'.
                 */
                reference_prefix?: string;
            }
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace Bancontact {
            type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace Boleto {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace Card {
            interface Installments {
                /**
                 * Installment plans that may be selected for this PaymentIntent.
                 */
                available_plans: Array<Installments.AvailablePlan> | null;
                /**
                 * Whether Installments are enabled for this PaymentIntent.
                 */
                enabled: boolean;
                /**
                 * Installment plan selected for this PaymentIntent.
                 */
                plan: Installments.Plan | null;
            }
            interface MandateOptions {
                /**
                 * Amount to be charged for future payments.
                 */
                amount: number;
                /**
                 * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
                 */
                amount_type: MandateOptions.AmountType;
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
            type Network = 'amex' | 'cartes_bancaires' | 'diners' | 'discover' | 'eftpos_au' | 'girocard' | 'interac' | 'jcb' | 'link' | 'mastercard' | 'unionpay' | 'unknown' | 'visa';
            type RequestExtendedAuthorization = 'if_available' | 'never';
            type RequestIncrementalAuthorization = 'if_available' | 'never';
            type RequestMulticapture = 'if_available' | 'never';
            type RequestOvercapture = 'if_available' | 'never';
            type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            namespace Installments {
                interface AvailablePlan {
                    /**
                     * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
                     */
                    count: number | null;
                    /**
                     * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
                     * One of `month`.
                     */
                    interval: 'month' | null;
                    /**
                     * Type of installment plan, one of `fixed_count`, `bonus`, or `revolving`.
                     */
                    type: AvailablePlan.Type;
                }
                interface Plan {
                    /**
                     * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
                     */
                    count: number | null;
                    /**
                     * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
                     * One of `month`.
                     */
                    interval: 'month' | null;
                    /**
                     * Type of installment plan, one of `fixed_count`, `bonus`, or `revolving`.
                     */
                    type: Plan.Type;
                }
                namespace AvailablePlan {
                    type Type = 'bonus' | 'fixed_count' | 'revolving';
                }
                namespace Plan {
                    type Type = 'bonus' | 'fixed_count' | 'revolving';
                }
            }
            namespace MandateOptions {
                type AmountType = 'fixed' | 'maximum';
                type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
            }
        }
        namespace CardPresent {
            interface Routing {
                /**
                 * Requested routing priority
                 */
                requested_priority: Routing.RequestedPriority | null;
            }
            namespace Routing {
                type RequestedPriority = 'domestic' | 'international';
            }
        }
        namespace Cashapp {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace CustomerBalance {
            interface BankTransfer {
                eu_bank_transfer?: BankTransfer.EuBankTransfer;
                /**
                 * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
                 *
                 * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
                 */
                requested_address_types?: Array<BankTransfer.RequestedAddressType>;
                /**
                 * The bank transfer type that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
                 */
                type: BankTransfer.Type | null;
            }
            namespace BankTransfer {
                interface EuBankTransfer {
                    /**
                     * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
                     */
                    country: EuBankTransfer.Country;
                }
                type RequestedAddressType = 'aba' | 'iban' | 'sepa' | 'sort_code' | 'spei' | 'swift' | 'zengin';
                type Type = 'eu_bank_transfer' | 'gb_bank_transfer' | 'jp_bank_transfer' | 'mx_bank_transfer' | 'us_bank_transfer';
                namespace EuBankTransfer {
                    type Country = 'BE' | 'DE' | 'ES' | 'FR' | 'IE' | 'NL';
                }
            }
        }
        namespace Ideal {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace KakaoPay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace Klarna {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace KrCard {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace Link {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace NaverPay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace NzBankAccount {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace Paypal {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace Pix {
            type AmountIncludesIof = 'always' | 'never';
        }
        namespace RevolutPay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace SepaDebit {
            interface MandateOptions {
                /**
                 * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'.
                 */
                reference_prefix?: string;
            }
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace Sofort {
            type PreferredLanguage = 'de' | 'en' | 'es' | 'fr' | 'it' | 'nl' | 'pl';
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace UsBankAccount {
            interface FinancialConnections {
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
            interface MandateOptions {
                /**
                 * Mandate collection method
                 */
                collection_method?: 'paper';
            }
            type PreferredSettlementSpeed = 'fastest' | 'standard';
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
            namespace FinancialConnections {
                interface Filters {
                    /**
                     * The account subcategories to use to filter for possible accounts to link. Valid subcategories are `checking` and `savings`.
                     */
                    account_subcategories?: Array<Filters.AccountSubcategory>;
                }
                type Permission = 'balances' | 'ownership' | 'payment_method' | 'transactions';
                type Prefetch = 'balances' | 'ownership' | 'transactions';
                namespace Filters {
                    type AccountSubcategory = 'checking' | 'savings';
                }
            }
        }
        namespace WechatPay {
            type Client = 'android' | 'ios' | 'web';
        }
    }
    namespace Processing {
        interface Card {
            customer_notification?: Card.CustomerNotification;
        }
        namespace Card {
            interface CustomerNotification {
                /**
                 * Whether customer approval has been requested for this payment. For payments greater than INR 15000 or mandate amount, the customer must provide explicit approval of the payment with their bank.
                 */
                approval_requested: boolean | null;
                /**
                 * If customer approval is required, they need to provide approval before this time.
                 */
                completes_at: number | null;
            }
        }
    }
}
export interface PaymentIntentCreateParams {
    /**
     * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
     */
    amount: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * Provides industry-specific information about the amount.
     */
    amount_details?: PaymentIntentCreateParams.AmountDetails;
    /**
     * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    application_fee_amount?: number;
    /**
     * When you enable this parameter, this PaymentIntent accepts payment methods that you enable in the Dashboard and that are compatible with this PaymentIntent's other parameters.
     */
    automatic_payment_methods?: PaymentIntentCreateParams.AutomaticPaymentMethods;
    /**
     * Controls when the funds will be captured from the customer's account.
     */
    capture_method?: PaymentIntentCreateParams.CaptureMethod;
    /**
     * Set to `true` to attempt to [confirm this PaymentIntent](https://stripe.com/docs/api/payment_intents/confirm) immediately. This parameter defaults to `false`. When creating and confirming a PaymentIntent at the same time, you can also provide the parameters available in the [Confirm API](https://stripe.com/docs/api/payment_intents/confirm).
     */
    confirm?: boolean;
    /**
     * Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment.
     */
    confirmation_method?: PaymentIntentCreateParams.ConfirmationMethod;
    /**
     * ID of the ConfirmationToken used to confirm this PaymentIntent.
     *
     * If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
     */
    confirmation_token?: string;
    /**
     * ID of the Customer this PaymentIntent belongs to, if one exists.
     *
     * Payment methods attached to other Customers cannot be used with this PaymentIntent.
     *
     * If [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) is set and this PaymentIntent's payment method is not `card_present`, then the payment method attaches to the Customer after the PaymentIntent has been confirmed and any required actions from the user are complete. If the payment method is `card_present` and isn't a digital wallet, then a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card is created and attached to the Customer instead.
     */
    customer?: string;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;
    /**
     * Set to `true` to fail the payment attempt if the PaymentIntent transitions into `requires_action`. Use this parameter for simpler integrations that don't handle customer actions, such as [saving cards without authentication](https://stripe.com/docs/payments/save-card-without-authentication). This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
     */
    error_on_requires_action?: boolean;
    /**
     * The list of payment method types to exclude from use with this payment.
     */
    excluded_payment_method_types?: Array<PaymentIntentCreateParams.ExcludedPaymentMethodType>;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * ID of the mandate that's used for this payment. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
     */
    mandate?: string;
    /**
     * This hash contains details about the Mandate to create. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
     */
    mandate_data?: Emptyable<PaymentIntentCreateParams.MandateData>;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;
    /**
     * Set to `true` to indicate that the customer isn't in your checkout flow during this payment attempt and can't authenticate. Use this parameter in scenarios where you collect card details and [charge them later](https://stripe.com/docs/payments/cards/charging-saved-cards). This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
     */
    off_session?: boolean | PaymentIntentCreateParams.OffSession;
    /**
     * The Stripe account ID that these funds are intended for. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    on_behalf_of?: string;
    /**
     * Provides industry-specific information about the charge.
     */
    payment_details?: PaymentIntentCreateParams.PaymentDetails;
    /**
     * ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods#compatibility) object) to attach to this PaymentIntent.
     *
     * If you don't provide the `payment_method` parameter or the `source` parameter with `confirm=true`, `source` automatically populates with `customer.default_source` to improve migration for users of the Charges API. We recommend that you explicitly provide the `payment_method` moving forward.
     * If the payment method is attached to a Customer, you must also provide the ID of that Customer as the [customer](https://stripe.com/docs/api#create_payment_intent-customer) parameter of this PaymentIntent.
     * end
     */
    payment_method?: string;
    /**
     * The ID of the [payment method configuration](https://stripe.com/docs/api/payment_method_configurations) to use with this PaymentIntent.
     */
    payment_method_configuration?: string;
    /**
     * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
     * in the [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)
     * property on the PaymentIntent.
     */
    payment_method_data?: PaymentIntentCreateParams.PaymentMethodData;
    /**
     * Payment method-specific configuration for this PaymentIntent.
     */
    payment_method_options?: PaymentIntentCreateParams.PaymentMethodOptions;
    /**
     * The list of payment method types (for example, a card) that this PaymentIntent can use. If you don't provide this, Stripe will dynamically show relevant payment methods from your [payment method settings](https://dashboard.stripe.com/settings/payment_methods). A list of valid payment method types can be found [here](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type).
     */
    payment_method_types?: Array<string>;
    /**
     * Options to configure Radar. Learn more about [Radar Sessions](https://stripe.com/docs/radar/radar-session).
     */
    radar_options?: PaymentIntentCreateParams.RadarOptions;
    /**
     * Email address to send the receipt to. If you specify `receipt_email` for a payment in live mode, you send a receipt regardless of your [email settings](https://dashboard.stripe.com/account/emails).
     */
    receipt_email?: string;
    /**
     * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
     */
    return_url?: string;
    /**
     * Indicates that you intend to make future payments with this PaymentIntent's payment method.
     *
     * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
     *
     * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
     *
     * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
     */
    setup_future_usage?: PaymentIntentCreateParams.SetupFutureUsage;
    /**
     * Shipping information for this PaymentIntent.
     */
    shipping?: PaymentIntentCreateParams.Shipping;
    /**
     * Text that appears on the customer's statement as the statement descriptor for a non-card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
     *
     * Setting this value for a card charge returns an error. For card charges, set the [statement_descriptor_suffix](https://docs.stripe.com/get-started/account/statement-descriptors#dynamic) instead.
     */
    statement_descriptor?: string;
    /**
     * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement.
     */
    statement_descriptor_suffix?: string;
    /**
     * The parameters that you can use to automatically create a Transfer.
     * Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    transfer_data?: PaymentIntentCreateParams.TransferData;
    /**
     * A string that identifies the resulting payment as part of a group. Learn more about the [use case for connected accounts](https://stripe.com/docs/connect/separate-charges-and-transfers).
     */
    transfer_group?: string;
    /**
     * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
     */
    use_stripe_sdk?: boolean;
}
export declare namespace PaymentIntentCreateParams {
    interface AmountDetails {
        /**
         * The total discount applied on the transaction represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than 0.
         *
         * This field is mutually exclusive with the `amount_details[line_items][#][discount_amount]` field.
         */
        discount_amount?: Emptyable<number>;
        /**
         * A list of line items, each containing information about a product in the PaymentIntent. There is a maximum of 100 line items.
         */
        line_items?: Emptyable<Array<AmountDetails.LineItem>>;
        /**
         * Contains information about the shipping portion of the amount.
         */
        shipping?: Emptyable<AmountDetails.Shipping>;
        /**
         * Contains information about the tax portion of the amount.
         */
        tax?: Emptyable<AmountDetails.Tax>;
    }
    interface AutomaticPaymentMethods {
        /**
         * Controls whether this PaymentIntent will accept redirect-based payment methods.
         *
         * Redirect-based payment methods may require your customer to be redirected to a payment method's app or site for authentication or additional steps. To [confirm](https://stripe.com/docs/api/payment_intents/confirm) this PaymentIntent, you may be required to provide a `return_url` to redirect customers back to your site after they authenticate or complete the payment.
         */
        allow_redirects?: AutomaticPaymentMethods.AllowRedirects;
        /**
         * Whether this feature is enabled.
         */
        enabled: boolean;
    }
    type CaptureMethod = 'automatic' | 'automatic_async' | 'manual';
    type ConfirmationMethod = 'automatic' | 'manual';
    type ExcludedPaymentMethodType = 'acss_debit' | 'affirm' | 'afterpay_clearpay' | 'alipay' | 'alma' | 'amazon_pay' | 'au_becs_debit' | 'bacs_debit' | 'bancontact' | 'billie' | 'blik' | 'boleto' | 'card' | 'cashapp' | 'crypto' | 'customer_balance' | 'eps' | 'fpx' | 'giropay' | 'grabpay' | 'ideal' | 'kakao_pay' | 'klarna' | 'konbini' | 'kr_card' | 'mb_way' | 'mobilepay' | 'multibanco' | 'naver_pay' | 'nz_bank_account' | 'oxxo' | 'p24' | 'pay_by_bank' | 'payco' | 'paynow' | 'paypal' | 'pix' | 'promptpay' | 'revolut_pay' | 'samsung_pay' | 'satispay' | 'sepa_debit' | 'sofort' | 'swish' | 'twint' | 'us_bank_account' | 'wechat_pay' | 'zip';
    interface MandateData {
        /**
         * This hash contains details about the customer acceptance of the Mandate.
         */
        customer_acceptance: MandateData.CustomerAcceptance;
    }
    type OffSession = 'one_off' | 'recurring';
    interface PaymentDetails {
        /**
         * A unique value to identify the customer. This field is available only for card payments.
         *
         * This field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks.
         */
        customer_reference?: Emptyable<string>;
        /**
         * A unique value assigned by the business to identify the transaction. Required for L2 and L3 rates.
         *
         * Required when the Payment Method Types array contains `card`, including when [automatic_payment_methods.enabled](https://docs.stripe.com/api/payment_intents/create#create_payment_intent-automatic_payment_methods-enabled) is set to `true`.
         *
         * For Cards, this field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks. For Klarna, this field is truncated to 255 characters and is visible to customers when they view the order in the Klarna app.
         */
        order_reference?: Emptyable<string>;
    }
    interface PaymentMethodData {
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
    interface PaymentMethodOptions {
        /**
         * If this is a `acss_debit` PaymentMethod, this sub-hash contains details about the ACSS Debit payment method options.
         */
        acss_debit?: Emptyable<PaymentMethodOptions.AcssDebit>;
        /**
         * If this is an `affirm` PaymentMethod, this sub-hash contains details about the Affirm payment method options.
         */
        affirm?: Emptyable<PaymentMethodOptions.Affirm>;
        /**
         * If this is a `afterpay_clearpay` PaymentMethod, this sub-hash contains details about the Afterpay Clearpay payment method options.
         */
        afterpay_clearpay?: Emptyable<PaymentMethodOptions.AfterpayClearpay>;
        /**
         * If this is a `alipay` PaymentMethod, this sub-hash contains details about the Alipay payment method options.
         */
        alipay?: Emptyable<PaymentMethodOptions.Alipay>;
        /**
         * If this is a `alma` PaymentMethod, this sub-hash contains details about the Alma payment method options.
         */
        alma?: Emptyable<PaymentMethodOptions.Alma>;
        /**
         * If this is a `amazon_pay` PaymentMethod, this sub-hash contains details about the Amazon Pay payment method options.
         */
        amazon_pay?: Emptyable<PaymentMethodOptions.AmazonPay>;
        /**
         * If this is a `au_becs_debit` PaymentMethod, this sub-hash contains details about the AU BECS Direct Debit payment method options.
         */
        au_becs_debit?: Emptyable<PaymentMethodOptions.AuBecsDebit>;
        /**
         * If this is a `bacs_debit` PaymentMethod, this sub-hash contains details about the BACS Debit payment method options.
         */
        bacs_debit?: Emptyable<PaymentMethodOptions.BacsDebit>;
        /**
         * If this is a `bancontact` PaymentMethod, this sub-hash contains details about the Bancontact payment method options.
         */
        bancontact?: Emptyable<PaymentMethodOptions.Bancontact>;
        /**
         * If this is a `billie` PaymentMethod, this sub-hash contains details about the Billie payment method options.
         */
        billie?: Emptyable<PaymentMethodOptions.Billie>;
        /**
         * If this is a `blik` PaymentMethod, this sub-hash contains details about the BLIK payment method options.
         */
        blik?: Emptyable<PaymentMethodOptions.Blik>;
        /**
         * If this is a `boleto` PaymentMethod, this sub-hash contains details about the Boleto payment method options.
         */
        boleto?: Emptyable<PaymentMethodOptions.Boleto>;
        /**
         * Configuration for any card payments attempted on this PaymentIntent.
         */
        card?: Emptyable<PaymentMethodOptions.Card>;
        /**
         * If this is a `card_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
         */
        card_present?: Emptyable<PaymentMethodOptions.CardPresent>;
        /**
         * If this is a `cashapp` PaymentMethod, this sub-hash contains details about the Cash App Pay payment method options.
         */
        cashapp?: Emptyable<PaymentMethodOptions.Cashapp>;
        /**
         * If this is a `crypto` PaymentMethod, this sub-hash contains details about the Crypto payment method options.
         */
        crypto?: Emptyable<PaymentMethodOptions.Crypto>;
        /**
         * If this is a `customer balance` PaymentMethod, this sub-hash contains details about the customer balance payment method options.
         */
        customer_balance?: Emptyable<PaymentMethodOptions.CustomerBalance>;
        /**
         * If this is a `eps` PaymentMethod, this sub-hash contains details about the EPS payment method options.
         */
        eps?: Emptyable<PaymentMethodOptions.Eps>;
        /**
         * If this is a `fpx` PaymentMethod, this sub-hash contains details about the FPX payment method options.
         */
        fpx?: Emptyable<PaymentMethodOptions.Fpx>;
        /**
         * If this is a `giropay` PaymentMethod, this sub-hash contains details about the Giropay payment method options.
         */
        giropay?: Emptyable<PaymentMethodOptions.Giropay>;
        /**
         * If this is a `grabpay` PaymentMethod, this sub-hash contains details about the Grabpay payment method options.
         */
        grabpay?: Emptyable<PaymentMethodOptions.Grabpay>;
        /**
         * If this is a `ideal` PaymentMethod, this sub-hash contains details about the Ideal payment method options.
         */
        ideal?: Emptyable<PaymentMethodOptions.Ideal>;
        /**
         * If this is a `interac_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
         */
        interac_present?: Emptyable<PaymentMethodOptions.InteracPresent>;
        /**
         * If this is a `kakao_pay` PaymentMethod, this sub-hash contains details about the Kakao Pay payment method options.
         */
        kakao_pay?: Emptyable<PaymentMethodOptions.KakaoPay>;
        /**
         * If this is a `klarna` PaymentMethod, this sub-hash contains details about the Klarna payment method options.
         */
        klarna?: Emptyable<PaymentMethodOptions.Klarna>;
        /**
         * If this is a `konbini` PaymentMethod, this sub-hash contains details about the Konbini payment method options.
         */
        konbini?: Emptyable<PaymentMethodOptions.Konbini>;
        /**
         * If this is a `kr_card` PaymentMethod, this sub-hash contains details about the KR Card payment method options.
         */
        kr_card?: Emptyable<PaymentMethodOptions.KrCard>;
        /**
         * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
         */
        link?: Emptyable<PaymentMethodOptions.Link>;
        /**
         * If this is a `mb_way` PaymentMethod, this sub-hash contains details about the MB WAY payment method options.
         */
        mb_way?: Emptyable<PaymentMethodOptions.MbWay>;
        /**
         * If this is a `MobilePay` PaymentMethod, this sub-hash contains details about the MobilePay payment method options.
         */
        mobilepay?: Emptyable<PaymentMethodOptions.Mobilepay>;
        /**
         * If this is a `multibanco` PaymentMethod, this sub-hash contains details about the Multibanco payment method options.
         */
        multibanco?: Emptyable<PaymentMethodOptions.Multibanco>;
        /**
         * If this is a `naver_pay` PaymentMethod, this sub-hash contains details about the Naver Pay payment method options.
         */
        naver_pay?: Emptyable<PaymentMethodOptions.NaverPay>;
        /**
         * If this is a `nz_bank_account` PaymentMethod, this sub-hash contains details about the NZ BECS Direct Debit payment method options.
         */
        nz_bank_account?: Emptyable<PaymentMethodOptions.NzBankAccount>;
        /**
         * If this is a `oxxo` PaymentMethod, this sub-hash contains details about the OXXO payment method options.
         */
        oxxo?: Emptyable<PaymentMethodOptions.Oxxo>;
        /**
         * If this is a `p24` PaymentMethod, this sub-hash contains details about the Przelewy24 payment method options.
         */
        p24?: Emptyable<PaymentMethodOptions.P24>;
        /**
         * If this is a `pay_by_bank` PaymentMethod, this sub-hash contains details about the PayByBank payment method options.
         */
        pay_by_bank?: Emptyable<PaymentMethodOptions.PayByBank>;
        /**
         * If this is a `payco` PaymentMethod, this sub-hash contains details about the PAYCO payment method options.
         */
        payco?: Emptyable<PaymentMethodOptions.Payco>;
        /**
         * If this is a `paynow` PaymentMethod, this sub-hash contains details about the PayNow payment method options.
         */
        paynow?: Emptyable<PaymentMethodOptions.Paynow>;
        /**
         * If this is a `paypal` PaymentMethod, this sub-hash contains details about the PayPal payment method options.
         */
        paypal?: Emptyable<PaymentMethodOptions.Paypal>;
        /**
         * If this is a `pix` PaymentMethod, this sub-hash contains details about the Pix payment method options.
         */
        pix?: Emptyable<PaymentMethodOptions.Pix>;
        /**
         * If this is a `promptpay` PaymentMethod, this sub-hash contains details about the PromptPay payment method options.
         */
        promptpay?: Emptyable<PaymentMethodOptions.Promptpay>;
        /**
         * If this is a `revolut_pay` PaymentMethod, this sub-hash contains details about the Revolut Pay payment method options.
         */
        revolut_pay?: Emptyable<PaymentMethodOptions.RevolutPay>;
        /**
         * If this is a `samsung_pay` PaymentMethod, this sub-hash contains details about the Samsung Pay payment method options.
         */
        samsung_pay?: Emptyable<PaymentMethodOptions.SamsungPay>;
        /**
         * If this is a `satispay` PaymentMethod, this sub-hash contains details about the Satispay payment method options.
         */
        satispay?: Emptyable<PaymentMethodOptions.Satispay>;
        /**
         * If this is a `sepa_debit` PaymentIntent, this sub-hash contains details about the SEPA Debit payment method options.
         */
        sepa_debit?: Emptyable<PaymentMethodOptions.SepaDebit>;
        /**
         * If this is a `sofort` PaymentMethod, this sub-hash contains details about the SOFORT payment method options.
         */
        sofort?: Emptyable<PaymentMethodOptions.Sofort>;
        /**
         * If this is a `Swish` PaymentMethod, this sub-hash contains details about the Swish payment method options.
         */
        swish?: Emptyable<PaymentMethodOptions.Swish>;
        /**
         * If this is a `twint` PaymentMethod, this sub-hash contains details about the TWINT payment method options.
         */
        twint?: Emptyable<PaymentMethodOptions.Twint>;
        /**
         * If this is a `us_bank_account` PaymentMethod, this sub-hash contains details about the US bank account payment method options.
         */
        us_bank_account?: Emptyable<PaymentMethodOptions.UsBankAccount>;
        /**
         * If this is a `wechat_pay` PaymentMethod, this sub-hash contains details about the WeChat Pay payment method options.
         */
        wechat_pay?: Emptyable<PaymentMethodOptions.WechatPay>;
        /**
         * If this is a `zip` PaymentMethod, this sub-hash contains details about the Zip payment method options.
         */
        zip?: Emptyable<PaymentMethodOptions.Zip>;
    }
    interface RadarOptions {
        /**
         * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
         */
        session?: string;
    }
    type SetupFutureUsage = 'off_session' | 'on_session';
    interface Shipping {
        /**
         * Shipping address.
         */
        address: AddressParam;
        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string;
        /**
         * Recipient name.
         */
        name: string;
        /**
         * Recipient phone (including extension).
         */
        phone?: string;
        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string;
    }
    interface TransferData {
        /**
         * The amount that will be transferred automatically when a charge succeeds.
         * The amount is capped at the total transaction amount and if no amount is set,
         * the full amount is transferred.
         *
         * If you intend to collect a fee and you need a more robust reporting experience, using
         * [application_fee_amount](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-application_fee_amount)
         * might be a better fit for your integration.
         */
        amount?: number;
        /**
         * If specified, successful charges will be attributed to the destination
         * account for tax reporting, and the funds from charges will be transferred
         * to the destination account. The ID of the resulting transfer will be
         * returned on the successful charge's `transfer` field.
         */
        destination: string;
    }
    namespace AmountDetails {
        interface LineItem {
            /**
             * The discount applied on this line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than 0.
             *
             * This field is mutually exclusive with the `amount_details[discount_amount]` field.
             */
            discount_amount?: number;
            /**
             * Payment method-specific information for line items.
             */
            payment_method_options?: LineItem.PaymentMethodOptions;
            /**
             * The product code of the line item, such as an SKU. Required for L3 rates. At most 12 characters long.
             */
            product_code?: string;
            /**
             * The product name of the line item. Required for L3 rates. At most 1024 characters long.
             *
             * For Cards, this field is truncated to 26 alphanumeric characters before being sent to the card networks. For Paypal, this field is truncated to 127 characters.
             */
            product_name: string;
            /**
             * The quantity of items. Required for L3 rates. An integer greater than 0.
             */
            quantity: number;
            /**
             * Contains information about the tax on the item.
             */
            tax?: LineItem.Tax;
            /**
             * The unit cost of the line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L3 rates. An integer greater than or equal to 0.
             */
            unit_cost: number;
            /**
             * A unit of measure for the line item, such as gallons, feet, meters, etc.
             */
            unit_of_measure?: string;
        }
        interface Shipping {
            /**
             * If a physical good is being shipped, the cost of shipping represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than or equal to 0.
             */
            amount?: Emptyable<number>;
            /**
             * If a physical good is being shipped, the postal code of where it is being shipped from. At most 10 alphanumeric characters long, hyphens are allowed.
             */
            from_postal_code?: Emptyable<string>;
            /**
             * If a physical good is being shipped, the postal code of where it is being shipped to. At most 10 alphanumeric characters long, hyphens are allowed.
             */
            to_postal_code?: Emptyable<string>;
        }
        interface Tax {
            /**
             * The total amount of tax on the transaction represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L2 rates. An integer greater than or equal to 0.
             *
             * This field is mutually exclusive with the `amount_details[line_items][#][tax][total_tax_amount]` field.
             */
            total_tax_amount: number;
        }
        namespace LineItem {
            interface PaymentMethodOptions {
                /**
                 * This sub-hash contains line item details that are specific to `card` payment method."
                 */
                card?: PaymentMethodOptions.Card;
                /**
                 * This sub-hash contains line item details that are specific to `card_present` payment method."
                 */
                card_present?: PaymentMethodOptions.CardPresent;
                /**
                 * This sub-hash contains line item details that are specific to `klarna` payment method."
                 */
                klarna?: PaymentMethodOptions.Klarna;
                /**
                 * This sub-hash contains line item details that are specific to `paypal` payment method."
                 */
                paypal?: PaymentMethodOptions.Paypal;
            }
            interface Tax {
                /**
                 * The total amount of tax on a single line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L3 rates. An integer greater than or equal to 0.
                 *
                 * This field is mutually exclusive with the `amount_details[tax][total_tax_amount]` field.
                 */
                total_tax_amount: number;
            }
            namespace PaymentMethodOptions {
                interface Card {
                    /**
                     * Identifier that categorizes the items being purchased using a standardized commodity scheme such as (but not limited to) UNSPSC, NAICS, NAPCS, etc.
                     */
                    commodity_code?: string;
                }
                interface CardPresent {
                    /**
                     * Identifier that categorizes the items being purchased using a standardized commodity scheme such as (but not limited to) UNSPSC, NAICS, NAPCS, etc.
                     */
                    commodity_code?: string;
                }
                interface Klarna {
                    /**
                     * URL to an image for the product. Max length, 4096 characters.
                     */
                    image_url?: string;
                    /**
                     * URL to the product page. Max length, 4096 characters.
                     */
                    product_url?: string;
                    /**
                     * Unique reference for this line item to correlate it with your system's internal records. The field is displayed in the Klarna Consumer App if passed.
                     */
                    reference?: string;
                    /**
                     * Reference for the subscription this line item is for.
                     */
                    subscription_reference?: string;
                }
                interface Paypal {
                    /**
                     * Type of the line item.
                     */
                    category?: Paypal.Category;
                    /**
                     * Description of the line item.
                     */
                    description?: string;
                    /**
                     * The Stripe account ID of the connected account that sells the item.
                     */
                    sold_by?: string;
                }
                namespace Paypal {
                    type Category = 'digital_goods' | 'donation' | 'physical_goods';
                }
            }
        }
    }
    namespace AutomaticPaymentMethods {
        type AllowRedirects = 'always' | 'never';
    }
    namespace MandateData {
        interface CustomerAcceptance {
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
        namespace CustomerAcceptance {
            interface Offline {
            }
            interface Online {
                /**
                 * The IP address from which the Mandate was accepted by the customer.
                 */
                ip_address: string;
                /**
                 * The user agent of the browser from which the Mandate was accepted by the customer.
                 */
                user_agent: string;
            }
            type Type = 'offline' | 'online';
        }
    }
    namespace PaymentMethodData {
        interface AcssDebit {
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
        interface Affirm {
        }
        interface AfterpayClearpay {
        }
        interface Alipay {
        }
        type AllowRedisplay = 'always' | 'limited' | 'unspecified';
        interface Alma {
        }
        interface AmazonPay {
        }
        interface AuBecsDebit {
            /**
             * The account number for the bank account.
             */
            account_number: string;
            /**
             * Bank-State-Branch number of the bank account.
             */
            bsb_number: string;
        }
        interface BacsDebit {
            /**
             * Account number of the bank account that the funds will be debited from.
             */
            account_number?: string;
            /**
             * Sort code of the bank account. (e.g., `10-20-30`)
             */
            sort_code?: string;
        }
        interface Bancontact {
        }
        interface Billie {
        }
        interface BillingDetails {
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
        interface Blik {
        }
        interface Boleto {
            /**
             * The tax ID of the customer (CPF for individual consumers or CNPJ for businesses consumers)
             */
            tax_id: string;
        }
        interface Cashapp {
        }
        interface Crypto {
        }
        interface CustomerBalance {
        }
        interface Eps {
            /**
             * The customer's bank.
             */
            bank?: Eps.Bank;
        }
        interface Fpx {
            /**
             * Account holder type for FPX transaction
             */
            account_holder_type?: Fpx.AccountHolderType;
            /**
             * The customer's bank.
             */
            bank: Fpx.Bank;
        }
        interface Giropay {
        }
        interface Grabpay {
        }
        interface Ideal {
            /**
             * The customer's bank. Only use this parameter for existing customers. Don't use it for new customers.
             */
            bank?: Ideal.Bank;
        }
        interface InteracPresent {
        }
        interface KakaoPay {
        }
        interface Klarna {
            /**
             * Customer's date of birth
             */
            dob?: Klarna.Dob;
        }
        interface Konbini {
        }
        interface KrCard {
        }
        interface Link {
        }
        interface MbWay {
        }
        interface Mobilepay {
        }
        interface Multibanco {
        }
        interface NaverPay {
            /**
             * Whether to use Naver Pay points or a card to fund this transaction. If not provided, this defaults to `card`.
             */
            funding?: NaverPay.Funding;
        }
        interface NzBankAccount {
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
        interface Oxxo {
        }
        interface P24 {
            /**
             * The customer's bank.
             */
            bank?: P24.Bank;
        }
        interface PayByBank {
        }
        interface Payco {
        }
        interface Paynow {
        }
        interface Paypal {
        }
        interface Pix {
        }
        interface Promptpay {
        }
        interface RadarOptions {
            /**
             * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
             */
            session?: string;
        }
        interface RevolutPay {
        }
        interface SamsungPay {
        }
        interface Satispay {
        }
        interface SepaDebit {
            /**
             * IBAN of the bank account.
             */
            iban: string;
        }
        interface Sofort {
            /**
             * Two-letter ISO code representing the country the bank account is located in.
             */
            country: Sofort.Country;
        }
        interface Swish {
        }
        interface Twint {
        }
        type Type = 'acss_debit' | 'affirm' | 'afterpay_clearpay' | 'alipay' | 'alma' | 'amazon_pay' | 'au_becs_debit' | 'bacs_debit' | 'bancontact' | 'billie' | 'blik' | 'boleto' | 'cashapp' | 'crypto' | 'customer_balance' | 'eps' | 'fpx' | 'giropay' | 'grabpay' | 'ideal' | 'kakao_pay' | 'klarna' | 'konbini' | 'kr_card' | 'link' | 'mb_way' | 'mobilepay' | 'multibanco' | 'naver_pay' | 'nz_bank_account' | 'oxxo' | 'p24' | 'pay_by_bank' | 'payco' | 'paynow' | 'paypal' | 'pix' | 'promptpay' | 'revolut_pay' | 'samsung_pay' | 'satispay' | 'sepa_debit' | 'sofort' | 'swish' | 'twint' | 'us_bank_account' | 'wechat_pay' | 'zip';
        interface UsBankAccount {
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
        interface WechatPay {
        }
        interface Zip {
        }
        namespace Eps {
            type Bank = 'arzte_und_apotheker_bank' | 'austrian_anadi_bank_ag' | 'bank_austria' | 'bankhaus_carl_spangler' | 'bankhaus_schelhammer_und_schattera_ag' | 'bawag_psk_ag' | 'bks_bank_ag' | 'brull_kallmus_bank_ag' | 'btv_vier_lander_bank' | 'capital_bank_grawe_gruppe_ag' | 'deutsche_bank_ag' | 'dolomitenbank' | 'easybank_ag' | 'erste_bank_und_sparkassen' | 'hypo_alpeadriabank_international_ag' | 'hypo_bank_burgenland_aktiengesellschaft' | 'hypo_noe_lb_fur_niederosterreich_u_wien' | 'hypo_oberosterreich_salzburg_steiermark' | 'hypo_tirol_bank_ag' | 'hypo_vorarlberg_bank_ag' | 'marchfelder_bank' | 'oberbank_ag' | 'raiffeisen_bankengruppe_osterreich' | 'schoellerbank_ag' | 'sparda_bank_wien' | 'volksbank_gruppe' | 'volkskreditbank_ag' | 'vr_bank_braunau';
        }
        namespace Fpx {
            type AccountHolderType = 'company' | 'individual';
            type Bank = 'affin_bank' | 'agrobank' | 'alliance_bank' | 'ambank' | 'bank_islam' | 'bank_muamalat' | 'bank_of_china' | 'bank_rakyat' | 'bsn' | 'cimb' | 'deutsche_bank' | 'hong_leong_bank' | 'hsbc' | 'kfh' | 'maybank2e' | 'maybank2u' | 'ocbc' | 'pb_enterprise' | 'public_bank' | 'rhb' | 'standard_chartered' | 'uob';
        }
        namespace Ideal {
            type Bank = 'abn_amro' | 'asn_bank' | 'bunq' | 'buut' | 'handelsbanken' | 'ing' | 'knab' | 'moneyou' | 'n26' | 'nn' | 'rabobank' | 'regiobank' | 'revolut' | 'sns_bank' | 'triodos_bank' | 'van_lanschot' | 'yoursafe';
        }
        namespace Klarna {
            interface Dob {
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
        namespace NaverPay {
            type Funding = 'card' | 'points';
        }
        namespace P24 {
            type Bank = 'alior_bank' | 'bank_millennium' | 'bank_nowy_bfg_sa' | 'bank_pekao_sa' | 'banki_spbdzielcze' | 'blik' | 'bnp_paribas' | 'boz' | 'citi_handlowy' | 'credit_agricole' | 'envelobank' | 'etransfer_pocztowy24' | 'getin_bank' | 'ideabank' | 'ing' | 'inteligo' | 'mbank_mtransfer' | 'nest_przelew' | 'noble_pay' | 'pbac_z_ipko' | 'plus_bank' | 'santander_przelew24' | 'tmobile_usbugi_bankowe' | 'toyota_bank' | 'velobank' | 'volkswagen_bank';
        }
        namespace Sofort {
            type Country = 'AT' | 'BE' | 'DE' | 'ES' | 'IT' | 'NL';
        }
        namespace UsBankAccount {
            type AccountHolderType = 'company' | 'individual';
            type AccountType = 'checking' | 'savings';
        }
    }
    namespace PaymentMethodOptions {
        interface AcssDebit {
            /**
             * Additional fields for Mandate creation
             */
            mandate_options?: AcssDebit.MandateOptions;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<AcssDebit.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
            /**
             * Bank account verification method.
             */
            verification_method?: AcssDebit.VerificationMethod;
        }
        interface Affirm {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Preferred language of the Affirm authorization page that the customer is redirected to.
             */
            preferred_locale?: string;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface AfterpayClearpay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * An internal identifier or reference that this payment corresponds to. You must limit the identifier to 128 characters, and it can only contain letters, numbers, underscores, backslashes, and dashes.
             * This field differs from the statement descriptor and item name.
             */
            reference?: string;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Alipay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Alipay.SetupFutureUsage>;
        }
        interface Alma {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
        }
        interface AmazonPay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Emptyable<AmazonPay.SetupFutureUsage>;
        }
        interface AuBecsDebit {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<AuBecsDebit.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
        }
        interface BacsDebit {
            /**
             * Additional fields for Mandate creation
             */
            mandate_options?: BacsDebit.MandateOptions;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<BacsDebit.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
        }
        interface Bancontact {
            /**
             * Preferred language of the Bancontact authorization page that the customer is redirected to.
             */
            preferred_language?: Bancontact.PreferredLanguage;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Bancontact.SetupFutureUsage>;
        }
        interface Billie {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
        }
        interface Blik {
            /**
             * The 6-digit BLIK code that a customer has generated using their banking application. Can only be set on confirmation.
             */
            code?: string;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<'none'>;
        }
        interface Boleto {
            /**
             * The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto invoice will expire on Wednesday at 23:59 America/Sao_Paulo time.
             */
            expires_after_days?: number;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Boleto.SetupFutureUsage>;
        }
        interface Card {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * A single-use `cvc_update` Token that represents a card CVC value. When provided, the CVC value will be verified during the card payment attempt. This parameter can only be provided during confirmation.
             */
            cvc_token?: string;
            /**
             * Installment configuration for payments attempted on this PaymentIntent.
             *
             * For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
             */
            installments?: Card.Installments;
            /**
             * Configuration options for setting up an eMandate for cards issued in India.
             */
            mandate_options?: Card.MandateOptions;
            /**
             * When specified, this parameter indicates that a transaction will be marked
             * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
             * parameter can only be provided during confirmation.
             */
            moto?: boolean;
            /**
             * Selected network to process this PaymentIntent on. Depends on the available networks of the card attached to the PaymentIntent. Can be only set confirm-time.
             */
            network?: Card.Network;
            /**
             * Request ability to [capture beyond the standard authorization validity window](https://stripe.com/docs/payments/extended-authorization) for this PaymentIntent.
             */
            request_extended_authorization?: Card.RequestExtendedAuthorization;
            /**
             * Request ability to [increment the authorization](https://stripe.com/docs/payments/incremental-authorization) for this PaymentIntent.
             */
            request_incremental_authorization?: Card.RequestIncrementalAuthorization;
            /**
             * Request ability to make [multiple captures](https://stripe.com/docs/payments/multicapture) for this PaymentIntent.
             */
            request_multicapture?: Card.RequestMulticapture;
            /**
             * Request ability to [overcapture](https://stripe.com/docs/payments/overcapture) for this PaymentIntent.
             */
            request_overcapture?: Card.RequestOvercapture;
            /**
             * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
             */
            request_three_d_secure?: Card.RequestThreeDSecure;
            /**
             * When enabled, using a card that is attached to a customer will require the CVC to be provided again (i.e. using the cvc_token parameter).
             */
            require_cvc_recollection?: boolean;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Card.SetupFutureUsage>;
            /**
             * Provides information about a card payment that customers see on their statements. Concatenated with the Kana prefix (shortened Kana descriptor) or Kana statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 22 characters.
             */
            statement_descriptor_suffix_kana?: Emptyable<string>;
            /**
             * Provides information about a card payment that customers see on their statements. Concatenated with the Kanji prefix (shortened Kanji descriptor) or Kanji statement descriptor that's set on the account to form the complete statement descriptor. Maximum 17 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 17 characters.
             */
            statement_descriptor_suffix_kanji?: Emptyable<string>;
            /**
             * If 3D Secure authentication was performed with a third-party provider,
             * the authentication details to use for this payment.
             */
            three_d_secure?: Card.ThreeDSecure;
        }
        interface CardPresent {
            /**
             * Request ability to capture this payment beyond the standard [authorization validity window](https://stripe.com/docs/terminal/features/extended-authorizations#authorization-validity)
             */
            request_extended_authorization?: boolean;
            /**
             * Request ability to [increment](https://stripe.com/docs/terminal/features/incremental-authorizations) this PaymentIntent if the combination of MCC and card brand is eligible. Check [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported) in the [Confirm](https://stripe.com/docs/api/payment_intents/confirm) response to verify support.
             */
            request_incremental_authorization_support?: boolean;
            /**
             * Network routing priority on co-branded EMV cards supporting domestic debit and international card schemes.
             */
            routing?: CardPresent.Routing;
        }
        interface Cashapp {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Cashapp.SetupFutureUsage>;
        }
        interface Crypto {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface CustomerBalance {
            /**
             * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
             */
            bank_transfer?: CustomerBalance.BankTransfer;
            /**
             * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
             */
            funding_type?: 'bank_transfer';
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Eps {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Fpx {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Giropay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Grabpay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Ideal {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Ideal.SetupFutureUsage>;
        }
        interface InteracPresent {
        }
        interface KakaoPay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Emptyable<KakaoPay.SetupFutureUsage>;
        }
        interface Klarna {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * On-demand details if setting up or charging an on-demand payment.
             */
            on_demand?: Klarna.OnDemand;
            /**
             * Preferred language of the Klarna authorization page that the customer is redirected to
             */
            preferred_locale?: Klarna.PreferredLocale;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Klarna.SetupFutureUsage;
            /**
             * Subscription details if setting up or charging a subscription.
             */
            subscriptions?: Emptyable<Array<Klarna.Subscription>>;
        }
        interface Konbini {
            /**
             * An optional 10 to 11 digit numeric-only string determining the confirmation code at applicable convenience stores. Must not consist of only zeroes and could be rejected in case of insufficient uniqueness. We recommend to use the customer's phone number.
             */
            confirmation_number?: Emptyable<string>;
            /**
             * The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST. Defaults to 3 days.
             */
            expires_after_days?: Emptyable<number>;
            /**
             * The timestamp at which the Konbini payment instructions will expire. Only one of `expires_after_days` or `expires_at` may be set.
             */
            expires_at?: Emptyable<number>;
            /**
             * A product descriptor of up to 22 characters, which will appear to customers at the convenience store.
             */
            product_description?: Emptyable<string>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface KrCard {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Emptyable<KrCard.SetupFutureUsage>;
        }
        interface Link {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * [Deprecated] This is a legacy parameter that no longer has any function.
             * @deprecated
             */
            persistent_token?: string;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Link.SetupFutureUsage>;
        }
        interface MbWay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Mobilepay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Multibanco {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface NaverPay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Emptyable<NaverPay.SetupFutureUsage>;
        }
        interface NzBankAccount {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<NzBankAccount.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
        }
        interface Oxxo {
            /**
             * The number of calendar days before an OXXO voucher expires. For example, if you create an OXXO voucher on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
             */
            expires_after_days?: number;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface P24 {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
            /**
             * Confirm that the payer has accepted the P24 terms and conditions.
             */
            tos_shown_and_accepted?: boolean;
        }
        interface PayByBank {
        }
        interface Payco {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
        }
        interface Paynow {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Paypal {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * [Preferred locale](https://stripe.com/docs/payments/paypal/supported-locales) of the PayPal checkout page that the customer is redirected to.
             */
            preferred_locale?: Paypal.PreferredLocale;
            /**
             * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
             */
            reference?: string;
            /**
             * The risk correlation ID for an on-session payment using a saved PayPal payment method.
             */
            risk_correlation_id?: string;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Paypal.SetupFutureUsage>;
        }
        interface Pix {
            /**
             * Determines if the amount includes the IOF tax. Defaults to `never`.
             */
            amount_includes_iof?: Pix.AmountIncludesIof;
            /**
             * The number of seconds (between 10 and 1209600) after which Pix payment will expire. Defaults to 86400 seconds.
             */
            expires_after_seconds?: number;
            /**
             * The timestamp at which the Pix expires (between 10 and 1209600 seconds in the future). Defaults to 1 day in the future.
             */
            expires_at?: number;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Promptpay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface RevolutPay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Emptyable<RevolutPay.SetupFutureUsage>;
        }
        interface SamsungPay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
        }
        interface Satispay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
        }
        interface SepaDebit {
            /**
             * Additional fields for Mandate creation
             */
            mandate_options?: SepaDebit.MandateOptions;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<SepaDebit.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
        }
        interface Sofort {
            /**
             * Language shown to the payer on redirect.
             */
            preferred_language?: Emptyable<Sofort.PreferredLanguage>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Sofort.SetupFutureUsage>;
        }
        interface Swish {
            /**
             * A reference for this payment to be displayed in the Swish app.
             */
            reference?: Emptyable<string>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Twint {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface UsBankAccount {
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
             * Preferred transaction settlement speed
             */
            preferred_settlement_speed?: Emptyable<UsBankAccount.PreferredSettlementSpeed>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<UsBankAccount.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
            /**
             * Bank account verification method.
             */
            verification_method?: UsBankAccount.VerificationMethod;
        }
        interface WechatPay {
            /**
             * The app ID registered with WeChat Pay. Only required when client is ios or android.
             */
            app_id?: string;
            /**
             * The client type that the end customer will pay from
             */
            client?: WechatPay.Client;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Zip {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        namespace AcssDebit {
            interface MandateOptions {
                /**
                 * A URL for custom mandate text to render during confirmation step.
                 * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
                 * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
                 */
                custom_mandate_url?: Emptyable<string>;
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
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
            namespace MandateOptions {
                type PaymentSchedule = 'combined' | 'interval' | 'sporadic';
                type TransactionType = 'business' | 'personal';
            }
        }
        namespace Alipay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace AmazonPay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace AuBecsDebit {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace BacsDebit {
            interface MandateOptions {
                /**
                 * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'DDIC' or 'STRIPE'.
                 */
                reference_prefix?: Emptyable<string>;
            }
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace Bancontact {
            type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace Boleto {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace Card {
            interface Installments {
                /**
                 * Setting to true enables installments for this PaymentIntent.
                 * This will cause the response to contain a list of available installment plans.
                 * Setting to false will prevent any selected plan from applying to a charge.
                 */
                enabled?: boolean;
                /**
                 * The selected installment plan to use for this payment attempt.
                 * This parameter can only be provided during confirmation.
                 */
                plan?: Emptyable<Installments.Plan>;
            }
            interface MandateOptions {
                /**
                 * Amount to be charged for future payments.
                 */
                amount: number;
                /**
                 * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
                 */
                amount_type: MandateOptions.AmountType;
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
            type Network = 'amex' | 'cartes_bancaires' | 'diners' | 'discover' | 'eftpos_au' | 'girocard' | 'interac' | 'jcb' | 'link' | 'mastercard' | 'unionpay' | 'unknown' | 'visa';
            type RequestExtendedAuthorization = 'if_available' | 'never';
            type RequestIncrementalAuthorization = 'if_available' | 'never';
            type RequestMulticapture = 'if_available' | 'never';
            type RequestOvercapture = 'if_available' | 'never';
            type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            interface ThreeDSecure {
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
                cryptogram: string;
                /**
                 * The Electronic Commerce Indicator (ECI) is returned by your 3D Secure
                 * provider and indicates what degree of authentication was performed.
                 */
                electronic_commerce_indicator?: ThreeDSecure.ElectronicCommerceIndicator;
                /**
                 * The exemption requested via 3DS and accepted by the issuer at authentication time.
                 */
                exemption_indicator?: ThreeDSecure.ExemptionIndicator;
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
                transaction_id: string;
                /**
                 * The version of 3D Secure that was performed.
                 */
                version: ThreeDSecure.Version;
            }
            namespace Installments {
                interface Plan {
                    /**
                     * For `fixed_count` installment plans, this is required. It represents the number of installment payments your customer will make to their credit card.
                     */
                    count?: number;
                    /**
                     * For `fixed_count` installment plans, this is required. It represents the interval between installment payments your customer will make to their credit card.
                     * One of `month`.
                     */
                    interval?: 'month';
                    /**
                     * Type of installment plan, one of `fixed_count`, `bonus`, or `revolving`.
                     */
                    type: Plan.Type;
                }
                namespace Plan {
                    type Type = 'bonus' | 'fixed_count' | 'revolving';
                }
            }
            namespace MandateOptions {
                type AmountType = 'fixed' | 'maximum';
                type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
            }
            namespace ThreeDSecure {
                type AresTransStatus = 'A' | 'C' | 'I' | 'N' | 'R' | 'U' | 'Y';
                type ElectronicCommerceIndicator = '01' | '02' | '05' | '06' | '07';
                type ExemptionIndicator = 'low_risk' | 'none';
                interface NetworkOptions {
                    /**
                     * Cartes Bancaires-specific 3DS fields.
                     */
                    cartes_bancaires?: NetworkOptions.CartesBancaires;
                }
                type Version = '1.0.2' | '2.1.0' | '2.2.0';
                namespace NetworkOptions {
                    interface CartesBancaires {
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
                    namespace CartesBancaires {
                        type CbAvalgo = '0' | '1' | '2' | '3' | '4' | 'A';
                    }
                }
            }
        }
        namespace CardPresent {
            interface Routing {
                /**
                 * Routing requested priority
                 */
                requested_priority?: Routing.RequestedPriority;
            }
            namespace Routing {
                type RequestedPriority = 'domestic' | 'international';
            }
        }
        namespace Cashapp {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace CustomerBalance {
            interface BankTransfer {
                /**
                 * Configuration for the eu_bank_transfer funding type.
                 */
                eu_bank_transfer?: BankTransfer.EuBankTransfer;
                /**
                 * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
                 *
                 * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
                 */
                requested_address_types?: Array<BankTransfer.RequestedAddressType>;
                /**
                 * The list of bank transfer types that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
                 */
                type: BankTransfer.Type;
            }
            namespace BankTransfer {
                interface EuBankTransfer {
                    /**
                     * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
                     */
                    country: string;
                }
                type RequestedAddressType = 'aba' | 'iban' | 'sepa' | 'sort_code' | 'spei' | 'swift' | 'zengin';
                type Type = 'eu_bank_transfer' | 'gb_bank_transfer' | 'jp_bank_transfer' | 'mx_bank_transfer' | 'us_bank_transfer';
            }
        }
        namespace Ideal {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace KakaoPay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace Klarna {
            interface OnDemand {
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
            type PreferredLocale = 'cs-CZ' | 'da-DK' | 'de-AT' | 'de-CH' | 'de-DE' | 'el-GR' | 'en-AT' | 'en-AU' | 'en-BE' | 'en-CA' | 'en-CH' | 'en-CZ' | 'en-DE' | 'en-DK' | 'en-ES' | 'en-FI' | 'en-FR' | 'en-GB' | 'en-GR' | 'en-IE' | 'en-IT' | 'en-NL' | 'en-NO' | 'en-NZ' | 'en-PL' | 'en-PT' | 'en-RO' | 'en-SE' | 'en-US' | 'es-ES' | 'es-US' | 'fi-FI' | 'fr-BE' | 'fr-CA' | 'fr-CH' | 'fr-FR' | 'it-CH' | 'it-IT' | 'nb-NO' | 'nl-BE' | 'nl-NL' | 'pl-PL' | 'pt-PT' | 'ro-RO' | 'sv-FI' | 'sv-SE';
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            interface Subscription {
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
                next_billing?: Subscription.NextBilling;
                /**
                 * A non-customer-facing reference to correlate subscription charges in the Klarna app. Use a value that persists across subscription charges.
                 */
                reference: string;
            }
            namespace OnDemand {
                type PurchaseInterval = 'day' | 'month' | 'week' | 'year';
            }
            namespace Subscription {
                type Interval = 'day' | 'month' | 'week' | 'year';
                interface NextBilling {
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
        namespace KrCard {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace Link {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace NaverPay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace NzBankAccount {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace Paypal {
            type PreferredLocale = 'cs-CZ' | 'da-DK' | 'de-AT' | 'de-DE' | 'de-LU' | 'el-GR' | 'en-GB' | 'en-US' | 'es-ES' | 'fi-FI' | 'fr-BE' | 'fr-FR' | 'fr-LU' | 'hu-HU' | 'it-IT' | 'nl-BE' | 'nl-NL' | 'pl-PL' | 'pt-PT' | 'sk-SK' | 'sv-SE';
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace Pix {
            type AmountIncludesIof = 'always' | 'never';
        }
        namespace RevolutPay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace SepaDebit {
            interface MandateOptions {
                /**
                 * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'.
                 */
                reference_prefix?: Emptyable<string>;
            }
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace Sofort {
            type PreferredLanguage = 'de' | 'en' | 'es' | 'fr' | 'it' | 'nl' | 'pl';
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace UsBankAccount {
            interface FinancialConnections {
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
            interface MandateOptions {
                /**
                 * The method used to collect offline mandate customer acceptance.
                 */
                collection_method?: Emptyable<'paper'>;
            }
            interface Networks {
                /**
                 * Triggers validations to run across the selected networks
                 */
                requested?: Array<Networks.Requested>;
            }
            type PreferredSettlementSpeed = 'fastest' | 'standard';
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
            namespace FinancialConnections {
                interface Filters {
                    /**
                     * The account subcategories to use to filter for selectable accounts. Valid subcategories are `checking` and `savings`.
                     */
                    account_subcategories?: Array<Filters.AccountSubcategory>;
                }
                type Permission = 'balances' | 'ownership' | 'payment_method' | 'transactions';
                type Prefetch = 'balances' | 'ownership' | 'transactions';
                namespace Filters {
                    type AccountSubcategory = 'checking' | 'savings';
                }
            }
            namespace Networks {
                type Requested = 'ach' | 'us_domestic_wire';
            }
        }
        namespace WechatPay {
            type Client = 'android' | 'ios' | 'web';
        }
    }
}
export interface PaymentIntentRetrieveParams {
    /**
     * The client secret of the PaymentIntent. We require it if you use a publishable key to retrieve the source.
     */
    client_secret?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface PaymentIntentUpdateParams {
    /**
     * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
     */
    amount?: number;
    /**
     * Provides industry-specific information about the amount.
     */
    amount_details?: Emptyable<PaymentIntentUpdateParams.AmountDetails>;
    /**
     * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    application_fee_amount?: Emptyable<number>;
    /**
     * Controls when the funds will be captured from the customer's account.
     */
    capture_method?: PaymentIntentUpdateParams.CaptureMethod;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;
    /**
     * ID of the Customer this PaymentIntent belongs to, if one exists.
     *
     * Payment methods attached to other Customers cannot be used with this PaymentIntent.
     *
     * If [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) is set and this PaymentIntent's payment method is not `card_present`, then the payment method attaches to the Customer after the PaymentIntent has been confirmed and any required actions from the user are complete. If the payment method is `card_present` and isn't a digital wallet, then a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card is created and attached to the Customer instead.
     */
    customer?: string;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;
    /**
     * The list of payment method types to exclude from use with this payment.
     */
    excluded_payment_method_types?: Emptyable<Array<PaymentIntentUpdateParams.ExcludedPaymentMethodType>>;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
    /**
     * Provides industry-specific information about the charge.
     */
    payment_details?: Emptyable<PaymentIntentUpdateParams.PaymentDetails>;
    /**
     * ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods/transitioning#compatibility) object) to attach to this PaymentIntent. To unset this field to null, pass in an empty string.
     */
    payment_method?: string;
    /**
     * The ID of the [payment method configuration](https://stripe.com/docs/api/payment_method_configurations) to use with this PaymentIntent.
     */
    payment_method_configuration?: string;
    /**
     * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
     * in the [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)
     * property on the PaymentIntent.
     */
    payment_method_data?: PaymentIntentUpdateParams.PaymentMethodData;
    /**
     * Payment-method-specific configuration for this PaymentIntent.
     */
    payment_method_options?: PaymentIntentUpdateParams.PaymentMethodOptions;
    /**
     * The list of payment method types (for example, card) that this PaymentIntent can use. Use `automatic_payment_methods` to manage payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods). A list of valid payment method types can be found [here](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type).
     */
    payment_method_types?: Array<string>;
    /**
     * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
     */
    receipt_email?: Emptyable<string>;
    /**
     * Indicates that you intend to make future payments with this PaymentIntent's payment method.
     *
     * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
     *
     * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
     *
     * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
     *
     * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
     */
    setup_future_usage?: Emptyable<PaymentIntentUpdateParams.SetupFutureUsage>;
    /**
     * Shipping information for this PaymentIntent.
     */
    shipping?: Emptyable<PaymentIntentUpdateParams.Shipping>;
    /**
     * Text that appears on the customer's statement as the statement descriptor for a non-card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
     *
     * Setting this value for a card charge returns an error. For card charges, set the [statement_descriptor_suffix](https://docs.stripe.com/get-started/account/statement-descriptors#dynamic) instead.
     */
    statement_descriptor?: string;
    /**
     * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement.
     */
    statement_descriptor_suffix?: string;
    /**
     * Use this parameter to automatically create a Transfer when the payment succeeds. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    transfer_data?: PaymentIntentUpdateParams.TransferData;
    /**
     * A string that identifies the resulting payment as part of a group. You can only provide `transfer_group` if it hasn't been set. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    transfer_group?: string;
}
export declare namespace PaymentIntentUpdateParams {
    interface AmountDetails {
        /**
         * The total discount applied on the transaction represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than 0.
         *
         * This field is mutually exclusive with the `amount_details[line_items][#][discount_amount]` field.
         */
        discount_amount?: Emptyable<number>;
        /**
         * A list of line items, each containing information about a product in the PaymentIntent. There is a maximum of 100 line items.
         */
        line_items?: Emptyable<Array<AmountDetails.LineItem>>;
        /**
         * Contains information about the shipping portion of the amount.
         */
        shipping?: Emptyable<AmountDetails.Shipping>;
        /**
         * Contains information about the tax portion of the amount.
         */
        tax?: Emptyable<AmountDetails.Tax>;
    }
    type CaptureMethod = 'automatic' | 'automatic_async' | 'manual';
    type ExcludedPaymentMethodType = 'acss_debit' | 'affirm' | 'afterpay_clearpay' | 'alipay' | 'alma' | 'amazon_pay' | 'au_becs_debit' | 'bacs_debit' | 'bancontact' | 'billie' | 'blik' | 'boleto' | 'card' | 'cashapp' | 'crypto' | 'customer_balance' | 'eps' | 'fpx' | 'giropay' | 'grabpay' | 'ideal' | 'kakao_pay' | 'klarna' | 'konbini' | 'kr_card' | 'mb_way' | 'mobilepay' | 'multibanco' | 'naver_pay' | 'nz_bank_account' | 'oxxo' | 'p24' | 'pay_by_bank' | 'payco' | 'paynow' | 'paypal' | 'pix' | 'promptpay' | 'revolut_pay' | 'samsung_pay' | 'satispay' | 'sepa_debit' | 'sofort' | 'swish' | 'twint' | 'us_bank_account' | 'wechat_pay' | 'zip';
    interface PaymentDetails {
        /**
         * A unique value to identify the customer. This field is available only for card payments.
         *
         * This field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks.
         */
        customer_reference?: Emptyable<string>;
        /**
         * A unique value assigned by the business to identify the transaction. Required for L2 and L3 rates.
         *
         * Required when the Payment Method Types array contains `card`, including when [automatic_payment_methods.enabled](https://docs.stripe.com/api/payment_intents/create#create_payment_intent-automatic_payment_methods-enabled) is set to `true`.
         *
         * For Cards, this field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks. For Klarna, this field is truncated to 255 characters and is visible to customers when they view the order in the Klarna app.
         */
        order_reference?: Emptyable<string>;
    }
    interface PaymentMethodData {
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
    interface PaymentMethodOptions {
        /**
         * If this is a `acss_debit` PaymentMethod, this sub-hash contains details about the ACSS Debit payment method options.
         */
        acss_debit?: Emptyable<PaymentMethodOptions.AcssDebit>;
        /**
         * If this is an `affirm` PaymentMethod, this sub-hash contains details about the Affirm payment method options.
         */
        affirm?: Emptyable<PaymentMethodOptions.Affirm>;
        /**
         * If this is a `afterpay_clearpay` PaymentMethod, this sub-hash contains details about the Afterpay Clearpay payment method options.
         */
        afterpay_clearpay?: Emptyable<PaymentMethodOptions.AfterpayClearpay>;
        /**
         * If this is a `alipay` PaymentMethod, this sub-hash contains details about the Alipay payment method options.
         */
        alipay?: Emptyable<PaymentMethodOptions.Alipay>;
        /**
         * If this is a `alma` PaymentMethod, this sub-hash contains details about the Alma payment method options.
         */
        alma?: Emptyable<PaymentMethodOptions.Alma>;
        /**
         * If this is a `amazon_pay` PaymentMethod, this sub-hash contains details about the Amazon Pay payment method options.
         */
        amazon_pay?: Emptyable<PaymentMethodOptions.AmazonPay>;
        /**
         * If this is a `au_becs_debit` PaymentMethod, this sub-hash contains details about the AU BECS Direct Debit payment method options.
         */
        au_becs_debit?: Emptyable<PaymentMethodOptions.AuBecsDebit>;
        /**
         * If this is a `bacs_debit` PaymentMethod, this sub-hash contains details about the BACS Debit payment method options.
         */
        bacs_debit?: Emptyable<PaymentMethodOptions.BacsDebit>;
        /**
         * If this is a `bancontact` PaymentMethod, this sub-hash contains details about the Bancontact payment method options.
         */
        bancontact?: Emptyable<PaymentMethodOptions.Bancontact>;
        /**
         * If this is a `billie` PaymentMethod, this sub-hash contains details about the Billie payment method options.
         */
        billie?: Emptyable<PaymentMethodOptions.Billie>;
        /**
         * If this is a `blik` PaymentMethod, this sub-hash contains details about the BLIK payment method options.
         */
        blik?: Emptyable<PaymentMethodOptions.Blik>;
        /**
         * If this is a `boleto` PaymentMethod, this sub-hash contains details about the Boleto payment method options.
         */
        boleto?: Emptyable<PaymentMethodOptions.Boleto>;
        /**
         * Configuration for any card payments attempted on this PaymentIntent.
         */
        card?: Emptyable<PaymentMethodOptions.Card>;
        /**
         * If this is a `card_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
         */
        card_present?: Emptyable<PaymentMethodOptions.CardPresent>;
        /**
         * If this is a `cashapp` PaymentMethod, this sub-hash contains details about the Cash App Pay payment method options.
         */
        cashapp?: Emptyable<PaymentMethodOptions.Cashapp>;
        /**
         * If this is a `crypto` PaymentMethod, this sub-hash contains details about the Crypto payment method options.
         */
        crypto?: Emptyable<PaymentMethodOptions.Crypto>;
        /**
         * If this is a `customer balance` PaymentMethod, this sub-hash contains details about the customer balance payment method options.
         */
        customer_balance?: Emptyable<PaymentMethodOptions.CustomerBalance>;
        /**
         * If this is a `eps` PaymentMethod, this sub-hash contains details about the EPS payment method options.
         */
        eps?: Emptyable<PaymentMethodOptions.Eps>;
        /**
         * If this is a `fpx` PaymentMethod, this sub-hash contains details about the FPX payment method options.
         */
        fpx?: Emptyable<PaymentMethodOptions.Fpx>;
        /**
         * If this is a `giropay` PaymentMethod, this sub-hash contains details about the Giropay payment method options.
         */
        giropay?: Emptyable<PaymentMethodOptions.Giropay>;
        /**
         * If this is a `grabpay` PaymentMethod, this sub-hash contains details about the Grabpay payment method options.
         */
        grabpay?: Emptyable<PaymentMethodOptions.Grabpay>;
        /**
         * If this is a `ideal` PaymentMethod, this sub-hash contains details about the Ideal payment method options.
         */
        ideal?: Emptyable<PaymentMethodOptions.Ideal>;
        /**
         * If this is a `interac_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
         */
        interac_present?: Emptyable<PaymentMethodOptions.InteracPresent>;
        /**
         * If this is a `kakao_pay` PaymentMethod, this sub-hash contains details about the Kakao Pay payment method options.
         */
        kakao_pay?: Emptyable<PaymentMethodOptions.KakaoPay>;
        /**
         * If this is a `klarna` PaymentMethod, this sub-hash contains details about the Klarna payment method options.
         */
        klarna?: Emptyable<PaymentMethodOptions.Klarna>;
        /**
         * If this is a `konbini` PaymentMethod, this sub-hash contains details about the Konbini payment method options.
         */
        konbini?: Emptyable<PaymentMethodOptions.Konbini>;
        /**
         * If this is a `kr_card` PaymentMethod, this sub-hash contains details about the KR Card payment method options.
         */
        kr_card?: Emptyable<PaymentMethodOptions.KrCard>;
        /**
         * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
         */
        link?: Emptyable<PaymentMethodOptions.Link>;
        /**
         * If this is a `mb_way` PaymentMethod, this sub-hash contains details about the MB WAY payment method options.
         */
        mb_way?: Emptyable<PaymentMethodOptions.MbWay>;
        /**
         * If this is a `MobilePay` PaymentMethod, this sub-hash contains details about the MobilePay payment method options.
         */
        mobilepay?: Emptyable<PaymentMethodOptions.Mobilepay>;
        /**
         * If this is a `multibanco` PaymentMethod, this sub-hash contains details about the Multibanco payment method options.
         */
        multibanco?: Emptyable<PaymentMethodOptions.Multibanco>;
        /**
         * If this is a `naver_pay` PaymentMethod, this sub-hash contains details about the Naver Pay payment method options.
         */
        naver_pay?: Emptyable<PaymentMethodOptions.NaverPay>;
        /**
         * If this is a `nz_bank_account` PaymentMethod, this sub-hash contains details about the NZ BECS Direct Debit payment method options.
         */
        nz_bank_account?: Emptyable<PaymentMethodOptions.NzBankAccount>;
        /**
         * If this is a `oxxo` PaymentMethod, this sub-hash contains details about the OXXO payment method options.
         */
        oxxo?: Emptyable<PaymentMethodOptions.Oxxo>;
        /**
         * If this is a `p24` PaymentMethod, this sub-hash contains details about the Przelewy24 payment method options.
         */
        p24?: Emptyable<PaymentMethodOptions.P24>;
        /**
         * If this is a `pay_by_bank` PaymentMethod, this sub-hash contains details about the PayByBank payment method options.
         */
        pay_by_bank?: Emptyable<PaymentMethodOptions.PayByBank>;
        /**
         * If this is a `payco` PaymentMethod, this sub-hash contains details about the PAYCO payment method options.
         */
        payco?: Emptyable<PaymentMethodOptions.Payco>;
        /**
         * If this is a `paynow` PaymentMethod, this sub-hash contains details about the PayNow payment method options.
         */
        paynow?: Emptyable<PaymentMethodOptions.Paynow>;
        /**
         * If this is a `paypal` PaymentMethod, this sub-hash contains details about the PayPal payment method options.
         */
        paypal?: Emptyable<PaymentMethodOptions.Paypal>;
        /**
         * If this is a `pix` PaymentMethod, this sub-hash contains details about the Pix payment method options.
         */
        pix?: Emptyable<PaymentMethodOptions.Pix>;
        /**
         * If this is a `promptpay` PaymentMethod, this sub-hash contains details about the PromptPay payment method options.
         */
        promptpay?: Emptyable<PaymentMethodOptions.Promptpay>;
        /**
         * If this is a `revolut_pay` PaymentMethod, this sub-hash contains details about the Revolut Pay payment method options.
         */
        revolut_pay?: Emptyable<PaymentMethodOptions.RevolutPay>;
        /**
         * If this is a `samsung_pay` PaymentMethod, this sub-hash contains details about the Samsung Pay payment method options.
         */
        samsung_pay?: Emptyable<PaymentMethodOptions.SamsungPay>;
        /**
         * If this is a `satispay` PaymentMethod, this sub-hash contains details about the Satispay payment method options.
         */
        satispay?: Emptyable<PaymentMethodOptions.Satispay>;
        /**
         * If this is a `sepa_debit` PaymentIntent, this sub-hash contains details about the SEPA Debit payment method options.
         */
        sepa_debit?: Emptyable<PaymentMethodOptions.SepaDebit>;
        /**
         * If this is a `sofort` PaymentMethod, this sub-hash contains details about the SOFORT payment method options.
         */
        sofort?: Emptyable<PaymentMethodOptions.Sofort>;
        /**
         * If this is a `Swish` PaymentMethod, this sub-hash contains details about the Swish payment method options.
         */
        swish?: Emptyable<PaymentMethodOptions.Swish>;
        /**
         * If this is a `twint` PaymentMethod, this sub-hash contains details about the TWINT payment method options.
         */
        twint?: Emptyable<PaymentMethodOptions.Twint>;
        /**
         * If this is a `us_bank_account` PaymentMethod, this sub-hash contains details about the US bank account payment method options.
         */
        us_bank_account?: Emptyable<PaymentMethodOptions.UsBankAccount>;
        /**
         * If this is a `wechat_pay` PaymentMethod, this sub-hash contains details about the WeChat Pay payment method options.
         */
        wechat_pay?: Emptyable<PaymentMethodOptions.WechatPay>;
        /**
         * If this is a `zip` PaymentMethod, this sub-hash contains details about the Zip payment method options.
         */
        zip?: Emptyable<PaymentMethodOptions.Zip>;
    }
    type SetupFutureUsage = 'off_session' | 'on_session';
    interface Shipping {
        /**
         * Shipping address.
         */
        address: AddressParam;
        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string;
        /**
         * Recipient name.
         */
        name: string;
        /**
         * Recipient phone (including extension).
         */
        phone?: string;
        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string;
    }
    interface TransferData {
        /**
         * The amount that will be transferred automatically when a charge succeeds.
         */
        amount?: number;
    }
    namespace AmountDetails {
        interface LineItem {
            /**
             * The discount applied on this line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than 0.
             *
             * This field is mutually exclusive with the `amount_details[discount_amount]` field.
             */
            discount_amount?: number;
            /**
             * Payment method-specific information for line items.
             */
            payment_method_options?: LineItem.PaymentMethodOptions;
            /**
             * The product code of the line item, such as an SKU. Required for L3 rates. At most 12 characters long.
             */
            product_code?: string;
            /**
             * The product name of the line item. Required for L3 rates. At most 1024 characters long.
             *
             * For Cards, this field is truncated to 26 alphanumeric characters before being sent to the card networks. For Paypal, this field is truncated to 127 characters.
             */
            product_name: string;
            /**
             * The quantity of items. Required for L3 rates. An integer greater than 0.
             */
            quantity: number;
            /**
             * Contains information about the tax on the item.
             */
            tax?: LineItem.Tax;
            /**
             * The unit cost of the line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L3 rates. An integer greater than or equal to 0.
             */
            unit_cost: number;
            /**
             * A unit of measure for the line item, such as gallons, feet, meters, etc.
             */
            unit_of_measure?: string;
        }
        interface Shipping {
            /**
             * If a physical good is being shipped, the cost of shipping represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than or equal to 0.
             */
            amount?: Emptyable<number>;
            /**
             * If a physical good is being shipped, the postal code of where it is being shipped from. At most 10 alphanumeric characters long, hyphens are allowed.
             */
            from_postal_code?: Emptyable<string>;
            /**
             * If a physical good is being shipped, the postal code of where it is being shipped to. At most 10 alphanumeric characters long, hyphens are allowed.
             */
            to_postal_code?: Emptyable<string>;
        }
        interface Tax {
            /**
             * The total amount of tax on the transaction represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L2 rates. An integer greater than or equal to 0.
             *
             * This field is mutually exclusive with the `amount_details[line_items][#][tax][total_tax_amount]` field.
             */
            total_tax_amount: number;
        }
        namespace LineItem {
            interface PaymentMethodOptions {
                /**
                 * This sub-hash contains line item details that are specific to `card` payment method."
                 */
                card?: PaymentMethodOptions.Card;
                /**
                 * This sub-hash contains line item details that are specific to `card_present` payment method."
                 */
                card_present?: PaymentMethodOptions.CardPresent;
                /**
                 * This sub-hash contains line item details that are specific to `klarna` payment method."
                 */
                klarna?: PaymentMethodOptions.Klarna;
                /**
                 * This sub-hash contains line item details that are specific to `paypal` payment method."
                 */
                paypal?: PaymentMethodOptions.Paypal;
            }
            interface Tax {
                /**
                 * The total amount of tax on a single line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L3 rates. An integer greater than or equal to 0.
                 *
                 * This field is mutually exclusive with the `amount_details[tax][total_tax_amount]` field.
                 */
                total_tax_amount: number;
            }
            namespace PaymentMethodOptions {
                interface Card {
                    /**
                     * Identifier that categorizes the items being purchased using a standardized commodity scheme such as (but not limited to) UNSPSC, NAICS, NAPCS, etc.
                     */
                    commodity_code?: string;
                }
                interface CardPresent {
                    /**
                     * Identifier that categorizes the items being purchased using a standardized commodity scheme such as (but not limited to) UNSPSC, NAICS, NAPCS, etc.
                     */
                    commodity_code?: string;
                }
                interface Klarna {
                    /**
                     * URL to an image for the product. Max length, 4096 characters.
                     */
                    image_url?: string;
                    /**
                     * URL to the product page. Max length, 4096 characters.
                     */
                    product_url?: string;
                    /**
                     * Unique reference for this line item to correlate it with your system's internal records. The field is displayed in the Klarna Consumer App if passed.
                     */
                    reference?: string;
                    /**
                     * Reference for the subscription this line item is for.
                     */
                    subscription_reference?: string;
                }
                interface Paypal {
                    /**
                     * Type of the line item.
                     */
                    category?: Paypal.Category;
                    /**
                     * Description of the line item.
                     */
                    description?: string;
                    /**
                     * The Stripe account ID of the connected account that sells the item.
                     */
                    sold_by?: string;
                }
                namespace Paypal {
                    type Category = 'digital_goods' | 'donation' | 'physical_goods';
                }
            }
        }
    }
    namespace PaymentMethodData {
        interface AcssDebit {
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
        interface Affirm {
        }
        interface AfterpayClearpay {
        }
        interface Alipay {
        }
        type AllowRedisplay = 'always' | 'limited' | 'unspecified';
        interface Alma {
        }
        interface AmazonPay {
        }
        interface AuBecsDebit {
            /**
             * The account number for the bank account.
             */
            account_number: string;
            /**
             * Bank-State-Branch number of the bank account.
             */
            bsb_number: string;
        }
        interface BacsDebit {
            /**
             * Account number of the bank account that the funds will be debited from.
             */
            account_number?: string;
            /**
             * Sort code of the bank account. (e.g., `10-20-30`)
             */
            sort_code?: string;
        }
        interface Bancontact {
        }
        interface Billie {
        }
        interface BillingDetails {
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
        interface Blik {
        }
        interface Boleto {
            /**
             * The tax ID of the customer (CPF for individual consumers or CNPJ for businesses consumers)
             */
            tax_id: string;
        }
        interface Cashapp {
        }
        interface Crypto {
        }
        interface CustomerBalance {
        }
        interface Eps {
            /**
             * The customer's bank.
             */
            bank?: Eps.Bank;
        }
        interface Fpx {
            /**
             * Account holder type for FPX transaction
             */
            account_holder_type?: Fpx.AccountHolderType;
            /**
             * The customer's bank.
             */
            bank: Fpx.Bank;
        }
        interface Giropay {
        }
        interface Grabpay {
        }
        interface Ideal {
            /**
             * The customer's bank. Only use this parameter for existing customers. Don't use it for new customers.
             */
            bank?: Ideal.Bank;
        }
        interface InteracPresent {
        }
        interface KakaoPay {
        }
        interface Klarna {
            /**
             * Customer's date of birth
             */
            dob?: Klarna.Dob;
        }
        interface Konbini {
        }
        interface KrCard {
        }
        interface Link {
        }
        interface MbWay {
        }
        interface Mobilepay {
        }
        interface Multibanco {
        }
        interface NaverPay {
            /**
             * Whether to use Naver Pay points or a card to fund this transaction. If not provided, this defaults to `card`.
             */
            funding?: NaverPay.Funding;
        }
        interface NzBankAccount {
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
        interface Oxxo {
        }
        interface P24 {
            /**
             * The customer's bank.
             */
            bank?: P24.Bank;
        }
        interface PayByBank {
        }
        interface Payco {
        }
        interface Paynow {
        }
        interface Paypal {
        }
        interface Pix {
        }
        interface Promptpay {
        }
        interface RadarOptions {
            /**
             * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
             */
            session?: string;
        }
        interface RevolutPay {
        }
        interface SamsungPay {
        }
        interface Satispay {
        }
        interface SepaDebit {
            /**
             * IBAN of the bank account.
             */
            iban: string;
        }
        interface Sofort {
            /**
             * Two-letter ISO code representing the country the bank account is located in.
             */
            country: Sofort.Country;
        }
        interface Swish {
        }
        interface Twint {
        }
        type Type = 'acss_debit' | 'affirm' | 'afterpay_clearpay' | 'alipay' | 'alma' | 'amazon_pay' | 'au_becs_debit' | 'bacs_debit' | 'bancontact' | 'billie' | 'blik' | 'boleto' | 'cashapp' | 'crypto' | 'customer_balance' | 'eps' | 'fpx' | 'giropay' | 'grabpay' | 'ideal' | 'kakao_pay' | 'klarna' | 'konbini' | 'kr_card' | 'link' | 'mb_way' | 'mobilepay' | 'multibanco' | 'naver_pay' | 'nz_bank_account' | 'oxxo' | 'p24' | 'pay_by_bank' | 'payco' | 'paynow' | 'paypal' | 'pix' | 'promptpay' | 'revolut_pay' | 'samsung_pay' | 'satispay' | 'sepa_debit' | 'sofort' | 'swish' | 'twint' | 'us_bank_account' | 'wechat_pay' | 'zip';
        interface UsBankAccount {
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
        interface WechatPay {
        }
        interface Zip {
        }
        namespace Eps {
            type Bank = 'arzte_und_apotheker_bank' | 'austrian_anadi_bank_ag' | 'bank_austria' | 'bankhaus_carl_spangler' | 'bankhaus_schelhammer_und_schattera_ag' | 'bawag_psk_ag' | 'bks_bank_ag' | 'brull_kallmus_bank_ag' | 'btv_vier_lander_bank' | 'capital_bank_grawe_gruppe_ag' | 'deutsche_bank_ag' | 'dolomitenbank' | 'easybank_ag' | 'erste_bank_und_sparkassen' | 'hypo_alpeadriabank_international_ag' | 'hypo_bank_burgenland_aktiengesellschaft' | 'hypo_noe_lb_fur_niederosterreich_u_wien' | 'hypo_oberosterreich_salzburg_steiermark' | 'hypo_tirol_bank_ag' | 'hypo_vorarlberg_bank_ag' | 'marchfelder_bank' | 'oberbank_ag' | 'raiffeisen_bankengruppe_osterreich' | 'schoellerbank_ag' | 'sparda_bank_wien' | 'volksbank_gruppe' | 'volkskreditbank_ag' | 'vr_bank_braunau';
        }
        namespace Fpx {
            type AccountHolderType = 'company' | 'individual';
            type Bank = 'affin_bank' | 'agrobank' | 'alliance_bank' | 'ambank' | 'bank_islam' | 'bank_muamalat' | 'bank_of_china' | 'bank_rakyat' | 'bsn' | 'cimb' | 'deutsche_bank' | 'hong_leong_bank' | 'hsbc' | 'kfh' | 'maybank2e' | 'maybank2u' | 'ocbc' | 'pb_enterprise' | 'public_bank' | 'rhb' | 'standard_chartered' | 'uob';
        }
        namespace Ideal {
            type Bank = 'abn_amro' | 'asn_bank' | 'bunq' | 'buut' | 'handelsbanken' | 'ing' | 'knab' | 'moneyou' | 'n26' | 'nn' | 'rabobank' | 'regiobank' | 'revolut' | 'sns_bank' | 'triodos_bank' | 'van_lanschot' | 'yoursafe';
        }
        namespace Klarna {
            interface Dob {
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
        namespace NaverPay {
            type Funding = 'card' | 'points';
        }
        namespace P24 {
            type Bank = 'alior_bank' | 'bank_millennium' | 'bank_nowy_bfg_sa' | 'bank_pekao_sa' | 'banki_spbdzielcze' | 'blik' | 'bnp_paribas' | 'boz' | 'citi_handlowy' | 'credit_agricole' | 'envelobank' | 'etransfer_pocztowy24' | 'getin_bank' | 'ideabank' | 'ing' | 'inteligo' | 'mbank_mtransfer' | 'nest_przelew' | 'noble_pay' | 'pbac_z_ipko' | 'plus_bank' | 'santander_przelew24' | 'tmobile_usbugi_bankowe' | 'toyota_bank' | 'velobank' | 'volkswagen_bank';
        }
        namespace Sofort {
            type Country = 'AT' | 'BE' | 'DE' | 'ES' | 'IT' | 'NL';
        }
        namespace UsBankAccount {
            type AccountHolderType = 'company' | 'individual';
            type AccountType = 'checking' | 'savings';
        }
    }
    namespace PaymentMethodOptions {
        interface AcssDebit {
            /**
             * Additional fields for Mandate creation
             */
            mandate_options?: AcssDebit.MandateOptions;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<AcssDebit.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
            /**
             * Bank account verification method.
             */
            verification_method?: AcssDebit.VerificationMethod;
        }
        interface Affirm {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Preferred language of the Affirm authorization page that the customer is redirected to.
             */
            preferred_locale?: string;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface AfterpayClearpay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * An internal identifier or reference that this payment corresponds to. You must limit the identifier to 128 characters, and it can only contain letters, numbers, underscores, backslashes, and dashes.
             * This field differs from the statement descriptor and item name.
             */
            reference?: string;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Alipay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Alipay.SetupFutureUsage>;
        }
        interface Alma {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
        }
        interface AmazonPay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Emptyable<AmazonPay.SetupFutureUsage>;
        }
        interface AuBecsDebit {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<AuBecsDebit.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
        }
        interface BacsDebit {
            /**
             * Additional fields for Mandate creation
             */
            mandate_options?: BacsDebit.MandateOptions;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<BacsDebit.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
        }
        interface Bancontact {
            /**
             * Preferred language of the Bancontact authorization page that the customer is redirected to.
             */
            preferred_language?: Bancontact.PreferredLanguage;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Bancontact.SetupFutureUsage>;
        }
        interface Billie {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
        }
        interface Blik {
            /**
             * The 6-digit BLIK code that a customer has generated using their banking application. Can only be set on confirmation.
             */
            code?: string;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<'none'>;
        }
        interface Boleto {
            /**
             * The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto invoice will expire on Wednesday at 23:59 America/Sao_Paulo time.
             */
            expires_after_days?: number;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Boleto.SetupFutureUsage>;
        }
        interface Card {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * A single-use `cvc_update` Token that represents a card CVC value. When provided, the CVC value will be verified during the card payment attempt. This parameter can only be provided during confirmation.
             */
            cvc_token?: string;
            /**
             * Installment configuration for payments attempted on this PaymentIntent.
             *
             * For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
             */
            installments?: Card.Installments;
            /**
             * Configuration options for setting up an eMandate for cards issued in India.
             */
            mandate_options?: Card.MandateOptions;
            /**
             * When specified, this parameter indicates that a transaction will be marked
             * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
             * parameter can only be provided during confirmation.
             */
            moto?: boolean;
            /**
             * Selected network to process this PaymentIntent on. Depends on the available networks of the card attached to the PaymentIntent. Can be only set confirm-time.
             */
            network?: Card.Network;
            /**
             * Request ability to [capture beyond the standard authorization validity window](https://stripe.com/docs/payments/extended-authorization) for this PaymentIntent.
             */
            request_extended_authorization?: Card.RequestExtendedAuthorization;
            /**
             * Request ability to [increment the authorization](https://stripe.com/docs/payments/incremental-authorization) for this PaymentIntent.
             */
            request_incremental_authorization?: Card.RequestIncrementalAuthorization;
            /**
             * Request ability to make [multiple captures](https://stripe.com/docs/payments/multicapture) for this PaymentIntent.
             */
            request_multicapture?: Card.RequestMulticapture;
            /**
             * Request ability to [overcapture](https://stripe.com/docs/payments/overcapture) for this PaymentIntent.
             */
            request_overcapture?: Card.RequestOvercapture;
            /**
             * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
             */
            request_three_d_secure?: Card.RequestThreeDSecure;
            /**
             * When enabled, using a card that is attached to a customer will require the CVC to be provided again (i.e. using the cvc_token parameter).
             */
            require_cvc_recollection?: boolean;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Card.SetupFutureUsage>;
            /**
             * Provides information about a card payment that customers see on their statements. Concatenated with the Kana prefix (shortened Kana descriptor) or Kana statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 22 characters.
             */
            statement_descriptor_suffix_kana?: Emptyable<string>;
            /**
             * Provides information about a card payment that customers see on their statements. Concatenated with the Kanji prefix (shortened Kanji descriptor) or Kanji statement descriptor that's set on the account to form the complete statement descriptor. Maximum 17 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 17 characters.
             */
            statement_descriptor_suffix_kanji?: Emptyable<string>;
            /**
             * If 3D Secure authentication was performed with a third-party provider,
             * the authentication details to use for this payment.
             */
            three_d_secure?: Card.ThreeDSecure;
        }
        interface CardPresent {
            /**
             * Request ability to capture this payment beyond the standard [authorization validity window](https://stripe.com/docs/terminal/features/extended-authorizations#authorization-validity)
             */
            request_extended_authorization?: boolean;
            /**
             * Request ability to [increment](https://stripe.com/docs/terminal/features/incremental-authorizations) this PaymentIntent if the combination of MCC and card brand is eligible. Check [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported) in the [Confirm](https://stripe.com/docs/api/payment_intents/confirm) response to verify support.
             */
            request_incremental_authorization_support?: boolean;
            /**
             * Network routing priority on co-branded EMV cards supporting domestic debit and international card schemes.
             */
            routing?: CardPresent.Routing;
        }
        interface Cashapp {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Cashapp.SetupFutureUsage>;
        }
        interface Crypto {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface CustomerBalance {
            /**
             * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
             */
            bank_transfer?: CustomerBalance.BankTransfer;
            /**
             * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
             */
            funding_type?: 'bank_transfer';
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Eps {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Fpx {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Giropay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Grabpay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Ideal {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Ideal.SetupFutureUsage>;
        }
        interface InteracPresent {
        }
        interface KakaoPay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Emptyable<KakaoPay.SetupFutureUsage>;
        }
        interface Klarna {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * On-demand details if setting up or charging an on-demand payment.
             */
            on_demand?: Klarna.OnDemand;
            /**
             * Preferred language of the Klarna authorization page that the customer is redirected to
             */
            preferred_locale?: Klarna.PreferredLocale;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Klarna.SetupFutureUsage;
            /**
             * Subscription details if setting up or charging a subscription.
             */
            subscriptions?: Emptyable<Array<Klarna.Subscription>>;
        }
        interface Konbini {
            /**
             * An optional 10 to 11 digit numeric-only string determining the confirmation code at applicable convenience stores. Must not consist of only zeroes and could be rejected in case of insufficient uniqueness. We recommend to use the customer's phone number.
             */
            confirmation_number?: Emptyable<string>;
            /**
             * The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST. Defaults to 3 days.
             */
            expires_after_days?: Emptyable<number>;
            /**
             * The timestamp at which the Konbini payment instructions will expire. Only one of `expires_after_days` or `expires_at` may be set.
             */
            expires_at?: Emptyable<number>;
            /**
             * A product descriptor of up to 22 characters, which will appear to customers at the convenience store.
             */
            product_description?: Emptyable<string>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface KrCard {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Emptyable<KrCard.SetupFutureUsage>;
        }
        interface Link {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * [Deprecated] This is a legacy parameter that no longer has any function.
             * @deprecated
             */
            persistent_token?: string;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Link.SetupFutureUsage>;
        }
        interface MbWay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Mobilepay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Multibanco {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface NaverPay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Emptyable<NaverPay.SetupFutureUsage>;
        }
        interface NzBankAccount {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<NzBankAccount.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
        }
        interface Oxxo {
            /**
             * The number of calendar days before an OXXO voucher expires. For example, if you create an OXXO voucher on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
             */
            expires_after_days?: number;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface P24 {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
            /**
             * Confirm that the payer has accepted the P24 terms and conditions.
             */
            tos_shown_and_accepted?: boolean;
        }
        interface PayByBank {
        }
        interface Payco {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
        }
        interface Paynow {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Paypal {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * [Preferred locale](https://stripe.com/docs/payments/paypal/supported-locales) of the PayPal checkout page that the customer is redirected to.
             */
            preferred_locale?: Paypal.PreferredLocale;
            /**
             * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
             */
            reference?: string;
            /**
             * The risk correlation ID for an on-session payment using a saved PayPal payment method.
             */
            risk_correlation_id?: string;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Paypal.SetupFutureUsage>;
        }
        interface Pix {
            /**
             * Determines if the amount includes the IOF tax. Defaults to `never`.
             */
            amount_includes_iof?: Pix.AmountIncludesIof;
            /**
             * The number of seconds (between 10 and 1209600) after which Pix payment will expire. Defaults to 86400 seconds.
             */
            expires_after_seconds?: number;
            /**
             * The timestamp at which the Pix expires (between 10 and 1209600 seconds in the future). Defaults to 1 day in the future.
             */
            expires_at?: number;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Promptpay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface RevolutPay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Emptyable<RevolutPay.SetupFutureUsage>;
        }
        interface SamsungPay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
        }
        interface Satispay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
        }
        interface SepaDebit {
            /**
             * Additional fields for Mandate creation
             */
            mandate_options?: SepaDebit.MandateOptions;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<SepaDebit.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
        }
        interface Sofort {
            /**
             * Language shown to the payer on redirect.
             */
            preferred_language?: Emptyable<Sofort.PreferredLanguage>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Sofort.SetupFutureUsage>;
        }
        interface Swish {
            /**
             * A reference for this payment to be displayed in the Swish app.
             */
            reference?: Emptyable<string>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Twint {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface UsBankAccount {
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
             * Preferred transaction settlement speed
             */
            preferred_settlement_speed?: Emptyable<UsBankAccount.PreferredSettlementSpeed>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<UsBankAccount.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
            /**
             * Bank account verification method.
             */
            verification_method?: UsBankAccount.VerificationMethod;
        }
        interface WechatPay {
            /**
             * The app ID registered with WeChat Pay. Only required when client is ios or android.
             */
            app_id?: string;
            /**
             * The client type that the end customer will pay from
             */
            client?: WechatPay.Client;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Zip {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        namespace AcssDebit {
            interface MandateOptions {
                /**
                 * A URL for custom mandate text to render during confirmation step.
                 * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
                 * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
                 */
                custom_mandate_url?: Emptyable<string>;
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
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
            namespace MandateOptions {
                type PaymentSchedule = 'combined' | 'interval' | 'sporadic';
                type TransactionType = 'business' | 'personal';
            }
        }
        namespace Alipay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace AmazonPay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace AuBecsDebit {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace BacsDebit {
            interface MandateOptions {
                /**
                 * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'DDIC' or 'STRIPE'.
                 */
                reference_prefix?: Emptyable<string>;
            }
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace Bancontact {
            type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace Boleto {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace Card {
            interface Installments {
                /**
                 * Setting to true enables installments for this PaymentIntent.
                 * This will cause the response to contain a list of available installment plans.
                 * Setting to false will prevent any selected plan from applying to a charge.
                 */
                enabled?: boolean;
                /**
                 * The selected installment plan to use for this payment attempt.
                 * This parameter can only be provided during confirmation.
                 */
                plan?: Emptyable<Installments.Plan>;
            }
            interface MandateOptions {
                /**
                 * Amount to be charged for future payments.
                 */
                amount: number;
                /**
                 * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
                 */
                amount_type: MandateOptions.AmountType;
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
            type Network = 'amex' | 'cartes_bancaires' | 'diners' | 'discover' | 'eftpos_au' | 'girocard' | 'interac' | 'jcb' | 'link' | 'mastercard' | 'unionpay' | 'unknown' | 'visa';
            type RequestExtendedAuthorization = 'if_available' | 'never';
            type RequestIncrementalAuthorization = 'if_available' | 'never';
            type RequestMulticapture = 'if_available' | 'never';
            type RequestOvercapture = 'if_available' | 'never';
            type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            interface ThreeDSecure {
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
                cryptogram: string;
                /**
                 * The Electronic Commerce Indicator (ECI) is returned by your 3D Secure
                 * provider and indicates what degree of authentication was performed.
                 */
                electronic_commerce_indicator?: ThreeDSecure.ElectronicCommerceIndicator;
                /**
                 * The exemption requested via 3DS and accepted by the issuer at authentication time.
                 */
                exemption_indicator?: ThreeDSecure.ExemptionIndicator;
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
                transaction_id: string;
                /**
                 * The version of 3D Secure that was performed.
                 */
                version: ThreeDSecure.Version;
            }
            namespace Installments {
                interface Plan {
                    /**
                     * For `fixed_count` installment plans, this is required. It represents the number of installment payments your customer will make to their credit card.
                     */
                    count?: number;
                    /**
                     * For `fixed_count` installment plans, this is required. It represents the interval between installment payments your customer will make to their credit card.
                     * One of `month`.
                     */
                    interval?: 'month';
                    /**
                     * Type of installment plan, one of `fixed_count`, `bonus`, or `revolving`.
                     */
                    type: Plan.Type;
                }
                namespace Plan {
                    type Type = 'bonus' | 'fixed_count' | 'revolving';
                }
            }
            namespace MandateOptions {
                type AmountType = 'fixed' | 'maximum';
                type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
            }
            namespace ThreeDSecure {
                type AresTransStatus = 'A' | 'C' | 'I' | 'N' | 'R' | 'U' | 'Y';
                type ElectronicCommerceIndicator = '01' | '02' | '05' | '06' | '07';
                type ExemptionIndicator = 'low_risk' | 'none';
                interface NetworkOptions {
                    /**
                     * Cartes Bancaires-specific 3DS fields.
                     */
                    cartes_bancaires?: NetworkOptions.CartesBancaires;
                }
                type Version = '1.0.2' | '2.1.0' | '2.2.0';
                namespace NetworkOptions {
                    interface CartesBancaires {
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
                    namespace CartesBancaires {
                        type CbAvalgo = '0' | '1' | '2' | '3' | '4' | 'A';
                    }
                }
            }
        }
        namespace CardPresent {
            interface Routing {
                /**
                 * Routing requested priority
                 */
                requested_priority?: Routing.RequestedPriority;
            }
            namespace Routing {
                type RequestedPriority = 'domestic' | 'international';
            }
        }
        namespace Cashapp {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace CustomerBalance {
            interface BankTransfer {
                /**
                 * Configuration for the eu_bank_transfer funding type.
                 */
                eu_bank_transfer?: BankTransfer.EuBankTransfer;
                /**
                 * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
                 *
                 * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
                 */
                requested_address_types?: Array<BankTransfer.RequestedAddressType>;
                /**
                 * The list of bank transfer types that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
                 */
                type: BankTransfer.Type;
            }
            namespace BankTransfer {
                interface EuBankTransfer {
                    /**
                     * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
                     */
                    country: string;
                }
                type RequestedAddressType = 'aba' | 'iban' | 'sepa' | 'sort_code' | 'spei' | 'swift' | 'zengin';
                type Type = 'eu_bank_transfer' | 'gb_bank_transfer' | 'jp_bank_transfer' | 'mx_bank_transfer' | 'us_bank_transfer';
            }
        }
        namespace Ideal {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace KakaoPay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace Klarna {
            interface OnDemand {
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
            type PreferredLocale = 'cs-CZ' | 'da-DK' | 'de-AT' | 'de-CH' | 'de-DE' | 'el-GR' | 'en-AT' | 'en-AU' | 'en-BE' | 'en-CA' | 'en-CH' | 'en-CZ' | 'en-DE' | 'en-DK' | 'en-ES' | 'en-FI' | 'en-FR' | 'en-GB' | 'en-GR' | 'en-IE' | 'en-IT' | 'en-NL' | 'en-NO' | 'en-NZ' | 'en-PL' | 'en-PT' | 'en-RO' | 'en-SE' | 'en-US' | 'es-ES' | 'es-US' | 'fi-FI' | 'fr-BE' | 'fr-CA' | 'fr-CH' | 'fr-FR' | 'it-CH' | 'it-IT' | 'nb-NO' | 'nl-BE' | 'nl-NL' | 'pl-PL' | 'pt-PT' | 'ro-RO' | 'sv-FI' | 'sv-SE';
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            interface Subscription {
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
                next_billing?: Subscription.NextBilling;
                /**
                 * A non-customer-facing reference to correlate subscription charges in the Klarna app. Use a value that persists across subscription charges.
                 */
                reference: string;
            }
            namespace OnDemand {
                type PurchaseInterval = 'day' | 'month' | 'week' | 'year';
            }
            namespace Subscription {
                type Interval = 'day' | 'month' | 'week' | 'year';
                interface NextBilling {
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
        namespace KrCard {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace Link {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace NaverPay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace NzBankAccount {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace Paypal {
            type PreferredLocale = 'cs-CZ' | 'da-DK' | 'de-AT' | 'de-DE' | 'de-LU' | 'el-GR' | 'en-GB' | 'en-US' | 'es-ES' | 'fi-FI' | 'fr-BE' | 'fr-FR' | 'fr-LU' | 'hu-HU' | 'it-IT' | 'nl-BE' | 'nl-NL' | 'pl-PL' | 'pt-PT' | 'sk-SK' | 'sv-SE';
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace Pix {
            type AmountIncludesIof = 'always' | 'never';
        }
        namespace RevolutPay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace SepaDebit {
            interface MandateOptions {
                /**
                 * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'.
                 */
                reference_prefix?: Emptyable<string>;
            }
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace Sofort {
            type PreferredLanguage = 'de' | 'en' | 'es' | 'fr' | 'it' | 'nl' | 'pl';
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace UsBankAccount {
            interface FinancialConnections {
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
            interface MandateOptions {
                /**
                 * The method used to collect offline mandate customer acceptance.
                 */
                collection_method?: Emptyable<'paper'>;
            }
            interface Networks {
                /**
                 * Triggers validations to run across the selected networks
                 */
                requested?: Array<Networks.Requested>;
            }
            type PreferredSettlementSpeed = 'fastest' | 'standard';
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
            namespace FinancialConnections {
                interface Filters {
                    /**
                     * The account subcategories to use to filter for selectable accounts. Valid subcategories are `checking` and `savings`.
                     */
                    account_subcategories?: Array<Filters.AccountSubcategory>;
                }
                type Permission = 'balances' | 'ownership' | 'payment_method' | 'transactions';
                type Prefetch = 'balances' | 'ownership' | 'transactions';
                namespace Filters {
                    type AccountSubcategory = 'checking' | 'savings';
                }
            }
            namespace Networks {
                type Requested = 'ach' | 'us_domestic_wire';
            }
        }
        namespace WechatPay {
            type Client = 'android' | 'ios' | 'web';
        }
    }
}
export interface PaymentIntentListParams extends PaginationParams {
    /**
     * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp or a dictionary with a number of different query options.
     */
    created?: RangeQueryParam | number;
    /**
     * Only return PaymentIntents for the customer that this customer ID specifies.
     */
    customer?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface PaymentIntentApplyCustomerBalanceParams {
    /**
     * Amount that you intend to apply to this PaymentIntent from the customer's cash balance. If the PaymentIntent was created by an Invoice, the full amount of the PaymentIntent is applied regardless of this parameter.
     *
     * A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (for example, 100 cents to charge 1 USD or 100 to charge 100 JPY, a zero-decimal currency). The maximum amount is the amount of the PaymentIntent.
     *
     * When you omit the amount, it defaults to the remaining amount requested on the PaymentIntent.
     */
    amount?: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface PaymentIntentCancelParams {
    /**
     * Reason for canceling this PaymentIntent. Possible values are: `duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`
     */
    cancellation_reason?: PaymentIntentCancelParams.CancellationReason;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export declare namespace PaymentIntentCancelParams {
    type CancellationReason = 'abandoned' | 'duplicate' | 'fraudulent' | 'requested_by_customer';
}
export interface PaymentIntentCaptureParams {
    /**
     * Provides industry-specific information about the amount.
     */
    amount_details?: PaymentIntentCaptureParams.AmountDetails;
    /**
     * The amount to capture from the PaymentIntent, which must be less than or equal to the original amount. Defaults to the full `amount_capturable` if it's not provided.
     */
    amount_to_capture?: number;
    /**
     * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    application_fee_amount?: number;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Defaults to `true`. When capturing a PaymentIntent, setting `final_capture` to `false` notifies Stripe to not release the remaining uncaptured funds to make sure that they're captured in future requests. You can only use this setting when [multicapture](https://stripe.com/docs/payments/multicapture) is available for PaymentIntents.
     */
    final_capture?: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
    /**
     * Provides industry-specific information about the charge.
     */
    payment_details?: Emptyable<PaymentIntentCaptureParams.PaymentDetails>;
    /**
     * Text that appears on the customer's statement as the statement descriptor for a non-card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
     *
     * Setting this value for a card charge returns an error. For card charges, set the [statement_descriptor_suffix](https://docs.stripe.com/get-started/account/statement-descriptors#dynamic) instead.
     */
    statement_descriptor?: string;
    /**
     * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement.
     */
    statement_descriptor_suffix?: string;
    /**
     * The parameters that you can use to automatically create a transfer after the payment
     * is captured. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    transfer_data?: PaymentIntentCaptureParams.TransferData;
}
export declare namespace PaymentIntentCaptureParams {
    interface AmountDetails {
        /**
         * The total discount applied on the transaction represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than 0.
         *
         * This field is mutually exclusive with the `amount_details[line_items][#][discount_amount]` field.
         */
        discount_amount?: Emptyable<number>;
        /**
         * A list of line items, each containing information about a product in the PaymentIntent. There is a maximum of 100 line items.
         */
        line_items?: Emptyable<Array<AmountDetails.LineItem>>;
        /**
         * Contains information about the shipping portion of the amount.
         */
        shipping?: Emptyable<AmountDetails.Shipping>;
        /**
         * Contains information about the tax portion of the amount.
         */
        tax?: Emptyable<AmountDetails.Tax>;
    }
    interface PaymentDetails {
        /**
         * A unique value to identify the customer. This field is available only for card payments.
         *
         * This field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks.
         */
        customer_reference?: Emptyable<string>;
        /**
         * A unique value assigned by the business to identify the transaction. Required for L2 and L3 rates.
         *
         * Required when the Payment Method Types array contains `card`, including when [automatic_payment_methods.enabled](https://docs.stripe.com/api/payment_intents/create#create_payment_intent-automatic_payment_methods-enabled) is set to `true`.
         *
         * For Cards, this field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks. For Klarna, this field is truncated to 255 characters and is visible to customers when they view the order in the Klarna app.
         */
        order_reference?: Emptyable<string>;
    }
    interface TransferData {
        /**
         * The amount that will be transferred automatically when a charge succeeds.
         */
        amount?: number;
    }
    namespace AmountDetails {
        interface LineItem {
            /**
             * The discount applied on this line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than 0.
             *
             * This field is mutually exclusive with the `amount_details[discount_amount]` field.
             */
            discount_amount?: number;
            /**
             * Payment method-specific information for line items.
             */
            payment_method_options?: LineItem.PaymentMethodOptions;
            /**
             * The product code of the line item, such as an SKU. Required for L3 rates. At most 12 characters long.
             */
            product_code?: string;
            /**
             * The product name of the line item. Required for L3 rates. At most 1024 characters long.
             *
             * For Cards, this field is truncated to 26 alphanumeric characters before being sent to the card networks. For Paypal, this field is truncated to 127 characters.
             */
            product_name: string;
            /**
             * The quantity of items. Required for L3 rates. An integer greater than 0.
             */
            quantity: number;
            /**
             * Contains information about the tax on the item.
             */
            tax?: LineItem.Tax;
            /**
             * The unit cost of the line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L3 rates. An integer greater than or equal to 0.
             */
            unit_cost: number;
            /**
             * A unit of measure for the line item, such as gallons, feet, meters, etc.
             */
            unit_of_measure?: string;
        }
        interface Shipping {
            /**
             * If a physical good is being shipped, the cost of shipping represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than or equal to 0.
             */
            amount?: Emptyable<number>;
            /**
             * If a physical good is being shipped, the postal code of where it is being shipped from. At most 10 alphanumeric characters long, hyphens are allowed.
             */
            from_postal_code?: Emptyable<string>;
            /**
             * If a physical good is being shipped, the postal code of where it is being shipped to. At most 10 alphanumeric characters long, hyphens are allowed.
             */
            to_postal_code?: Emptyable<string>;
        }
        interface Tax {
            /**
             * The total amount of tax on the transaction represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L2 rates. An integer greater than or equal to 0.
             *
             * This field is mutually exclusive with the `amount_details[line_items][#][tax][total_tax_amount]` field.
             */
            total_tax_amount: number;
        }
        namespace LineItem {
            interface PaymentMethodOptions {
                /**
                 * This sub-hash contains line item details that are specific to `card` payment method."
                 */
                card?: PaymentMethodOptions.Card;
                /**
                 * This sub-hash contains line item details that are specific to `card_present` payment method."
                 */
                card_present?: PaymentMethodOptions.CardPresent;
                /**
                 * This sub-hash contains line item details that are specific to `klarna` payment method."
                 */
                klarna?: PaymentMethodOptions.Klarna;
                /**
                 * This sub-hash contains line item details that are specific to `paypal` payment method."
                 */
                paypal?: PaymentMethodOptions.Paypal;
            }
            interface Tax {
                /**
                 * The total amount of tax on a single line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L3 rates. An integer greater than or equal to 0.
                 *
                 * This field is mutually exclusive with the `amount_details[tax][total_tax_amount]` field.
                 */
                total_tax_amount: number;
            }
            namespace PaymentMethodOptions {
                interface Card {
                    /**
                     * Identifier that categorizes the items being purchased using a standardized commodity scheme such as (but not limited to) UNSPSC, NAICS, NAPCS, etc.
                     */
                    commodity_code?: string;
                }
                interface CardPresent {
                    /**
                     * Identifier that categorizes the items being purchased using a standardized commodity scheme such as (but not limited to) UNSPSC, NAICS, NAPCS, etc.
                     */
                    commodity_code?: string;
                }
                interface Klarna {
                    /**
                     * URL to an image for the product. Max length, 4096 characters.
                     */
                    image_url?: string;
                    /**
                     * URL to the product page. Max length, 4096 characters.
                     */
                    product_url?: string;
                    /**
                     * Unique reference for this line item to correlate it with your system's internal records. The field is displayed in the Klarna Consumer App if passed.
                     */
                    reference?: string;
                    /**
                     * Reference for the subscription this line item is for.
                     */
                    subscription_reference?: string;
                }
                interface Paypal {
                    /**
                     * Type of the line item.
                     */
                    category?: Paypal.Category;
                    /**
                     * Description of the line item.
                     */
                    description?: string;
                    /**
                     * The Stripe account ID of the connected account that sells the item.
                     */
                    sold_by?: string;
                }
                namespace Paypal {
                    type Category = 'digital_goods' | 'donation' | 'physical_goods';
                }
            }
        }
    }
}
export interface PaymentIntentConfirmParams {
    /**
     * Provides industry-specific information about the amount.
     */
    amount_details?: Emptyable<PaymentIntentConfirmParams.AmountDetails>;
    /**
     * Controls when the funds will be captured from the customer's account.
     */
    capture_method?: PaymentIntentConfirmParams.CaptureMethod;
    /**
     * ID of the ConfirmationToken used to confirm this PaymentIntent.
     *
     * If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
     */
    confirmation_token?: string;
    /**
     * Set to `true` to fail the payment attempt if the PaymentIntent transitions into `requires_action`. This parameter is intended for simpler integrations that do not handle customer actions, like [saving cards without authentication](https://stripe.com/docs/payments/save-card-without-authentication).
     */
    error_on_requires_action?: boolean;
    /**
     * The list of payment method types to exclude from use with this payment.
     */
    excluded_payment_method_types?: Emptyable<Array<PaymentIntentConfirmParams.ExcludedPaymentMethodType>>;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * ID of the mandate that's used for this payment.
     */
    mandate?: string;
    mandate_data?: Emptyable<PaymentIntentConfirmParams.MandateData>;
    /**
     * Set to `true` to indicate that the customer isn't in your checkout flow during this payment attempt and can't authenticate. Use this parameter in scenarios where you collect card details and [charge them later](https://stripe.com/docs/payments/cards/charging-saved-cards).
     */
    off_session?: boolean | PaymentIntentConfirmParams.OffSession;
    /**
     * Provides industry-specific information about the charge.
     */
    payment_details?: Emptyable<PaymentIntentConfirmParams.PaymentDetails>;
    /**
     * ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods/transitioning#compatibility) object) to attach to this PaymentIntent.
     * If the payment method is attached to a Customer, it must match the [customer](https://stripe.com/docs/api#create_payment_intent-customer) that is set on this PaymentIntent.
     */
    payment_method?: string;
    /**
     * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
     * in the [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)
     * property on the PaymentIntent.
     */
    payment_method_data?: PaymentIntentConfirmParams.PaymentMethodData;
    /**
     * Payment method-specific configuration for this PaymentIntent.
     */
    payment_method_options?: PaymentIntentConfirmParams.PaymentMethodOptions;
    /**
     * The list of payment method types (for example, a card) that this PaymentIntent can use. Use `automatic_payment_methods` to manage payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods). A list of valid payment method types can be found [here](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type).
     */
    payment_method_types?: Array<string>;
    /**
     * Options to configure Radar. Learn more about [Radar Sessions](https://stripe.com/docs/radar/radar-session).
     */
    radar_options?: PaymentIntentConfirmParams.RadarOptions;
    /**
     * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
     */
    receipt_email?: Emptyable<string>;
    /**
     * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site.
     * If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme.
     * This parameter is only used for cards and other redirect-based payment methods.
     */
    return_url?: string;
    /**
     * Indicates that you intend to make future payments with this PaymentIntent's payment method.
     *
     * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
     *
     * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
     *
     * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
     *
     * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
     */
    setup_future_usage?: Emptyable<PaymentIntentConfirmParams.SetupFutureUsage>;
    /**
     * Shipping information for this PaymentIntent.
     */
    shipping?: Emptyable<PaymentIntentConfirmParams.Shipping>;
    /**
     * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
     */
    use_stripe_sdk?: boolean;
}
export declare namespace PaymentIntentConfirmParams {
    interface AmountDetails {
        /**
         * The total discount applied on the transaction represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than 0.
         *
         * This field is mutually exclusive with the `amount_details[line_items][#][discount_amount]` field.
         */
        discount_amount?: Emptyable<number>;
        /**
         * A list of line items, each containing information about a product in the PaymentIntent. There is a maximum of 100 line items.
         */
        line_items?: Emptyable<Array<AmountDetails.LineItem>>;
        /**
         * Contains information about the shipping portion of the amount.
         */
        shipping?: Emptyable<AmountDetails.Shipping>;
        /**
         * Contains information about the tax portion of the amount.
         */
        tax?: Emptyable<AmountDetails.Tax>;
    }
    type CaptureMethod = 'automatic' | 'automatic_async' | 'manual';
    type ExcludedPaymentMethodType = 'acss_debit' | 'affirm' | 'afterpay_clearpay' | 'alipay' | 'alma' | 'amazon_pay' | 'au_becs_debit' | 'bacs_debit' | 'bancontact' | 'billie' | 'blik' | 'boleto' | 'card' | 'cashapp' | 'crypto' | 'customer_balance' | 'eps' | 'fpx' | 'giropay' | 'grabpay' | 'ideal' | 'kakao_pay' | 'klarna' | 'konbini' | 'kr_card' | 'mb_way' | 'mobilepay' | 'multibanco' | 'naver_pay' | 'nz_bank_account' | 'oxxo' | 'p24' | 'pay_by_bank' | 'payco' | 'paynow' | 'paypal' | 'pix' | 'promptpay' | 'revolut_pay' | 'samsung_pay' | 'satispay' | 'sepa_debit' | 'sofort' | 'swish' | 'twint' | 'us_bank_account' | 'wechat_pay' | 'zip';
    interface MandateData {
        /**
         * This hash contains details about the customer acceptance of the Mandate.
         */
        customer_acceptance?: MandateData.CustomerAcceptance;
    }
    type OffSession = 'one_off' | 'recurring';
    interface PaymentDetails {
        /**
         * A unique value to identify the customer. This field is available only for card payments.
         *
         * This field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks.
         */
        customer_reference?: Emptyable<string>;
        /**
         * A unique value assigned by the business to identify the transaction. Required for L2 and L3 rates.
         *
         * Required when the Payment Method Types array contains `card`, including when [automatic_payment_methods.enabled](https://docs.stripe.com/api/payment_intents/create#create_payment_intent-automatic_payment_methods-enabled) is set to `true`.
         *
         * For Cards, this field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks. For Klarna, this field is truncated to 255 characters and is visible to customers when they view the order in the Klarna app.
         */
        order_reference?: Emptyable<string>;
    }
    interface PaymentMethodData {
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
    interface PaymentMethodOptions {
        /**
         * If this is a `acss_debit` PaymentMethod, this sub-hash contains details about the ACSS Debit payment method options.
         */
        acss_debit?: Emptyable<PaymentMethodOptions.AcssDebit>;
        /**
         * If this is an `affirm` PaymentMethod, this sub-hash contains details about the Affirm payment method options.
         */
        affirm?: Emptyable<PaymentMethodOptions.Affirm>;
        /**
         * If this is a `afterpay_clearpay` PaymentMethod, this sub-hash contains details about the Afterpay Clearpay payment method options.
         */
        afterpay_clearpay?: Emptyable<PaymentMethodOptions.AfterpayClearpay>;
        /**
         * If this is a `alipay` PaymentMethod, this sub-hash contains details about the Alipay payment method options.
         */
        alipay?: Emptyable<PaymentMethodOptions.Alipay>;
        /**
         * If this is a `alma` PaymentMethod, this sub-hash contains details about the Alma payment method options.
         */
        alma?: Emptyable<PaymentMethodOptions.Alma>;
        /**
         * If this is a `amazon_pay` PaymentMethod, this sub-hash contains details about the Amazon Pay payment method options.
         */
        amazon_pay?: Emptyable<PaymentMethodOptions.AmazonPay>;
        /**
         * If this is a `au_becs_debit` PaymentMethod, this sub-hash contains details about the AU BECS Direct Debit payment method options.
         */
        au_becs_debit?: Emptyable<PaymentMethodOptions.AuBecsDebit>;
        /**
         * If this is a `bacs_debit` PaymentMethod, this sub-hash contains details about the BACS Debit payment method options.
         */
        bacs_debit?: Emptyable<PaymentMethodOptions.BacsDebit>;
        /**
         * If this is a `bancontact` PaymentMethod, this sub-hash contains details about the Bancontact payment method options.
         */
        bancontact?: Emptyable<PaymentMethodOptions.Bancontact>;
        /**
         * If this is a `billie` PaymentMethod, this sub-hash contains details about the Billie payment method options.
         */
        billie?: Emptyable<PaymentMethodOptions.Billie>;
        /**
         * If this is a `blik` PaymentMethod, this sub-hash contains details about the BLIK payment method options.
         */
        blik?: Emptyable<PaymentMethodOptions.Blik>;
        /**
         * If this is a `boleto` PaymentMethod, this sub-hash contains details about the Boleto payment method options.
         */
        boleto?: Emptyable<PaymentMethodOptions.Boleto>;
        /**
         * Configuration for any card payments attempted on this PaymentIntent.
         */
        card?: Emptyable<PaymentMethodOptions.Card>;
        /**
         * If this is a `card_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
         */
        card_present?: Emptyable<PaymentMethodOptions.CardPresent>;
        /**
         * If this is a `cashapp` PaymentMethod, this sub-hash contains details about the Cash App Pay payment method options.
         */
        cashapp?: Emptyable<PaymentMethodOptions.Cashapp>;
        /**
         * If this is a `crypto` PaymentMethod, this sub-hash contains details about the Crypto payment method options.
         */
        crypto?: Emptyable<PaymentMethodOptions.Crypto>;
        /**
         * If this is a `customer balance` PaymentMethod, this sub-hash contains details about the customer balance payment method options.
         */
        customer_balance?: Emptyable<PaymentMethodOptions.CustomerBalance>;
        /**
         * If this is a `eps` PaymentMethod, this sub-hash contains details about the EPS payment method options.
         */
        eps?: Emptyable<PaymentMethodOptions.Eps>;
        /**
         * If this is a `fpx` PaymentMethod, this sub-hash contains details about the FPX payment method options.
         */
        fpx?: Emptyable<PaymentMethodOptions.Fpx>;
        /**
         * If this is a `giropay` PaymentMethod, this sub-hash contains details about the Giropay payment method options.
         */
        giropay?: Emptyable<PaymentMethodOptions.Giropay>;
        /**
         * If this is a `grabpay` PaymentMethod, this sub-hash contains details about the Grabpay payment method options.
         */
        grabpay?: Emptyable<PaymentMethodOptions.Grabpay>;
        /**
         * If this is a `ideal` PaymentMethod, this sub-hash contains details about the Ideal payment method options.
         */
        ideal?: Emptyable<PaymentMethodOptions.Ideal>;
        /**
         * If this is a `interac_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
         */
        interac_present?: Emptyable<PaymentMethodOptions.InteracPresent>;
        /**
         * If this is a `kakao_pay` PaymentMethod, this sub-hash contains details about the Kakao Pay payment method options.
         */
        kakao_pay?: Emptyable<PaymentMethodOptions.KakaoPay>;
        /**
         * If this is a `klarna` PaymentMethod, this sub-hash contains details about the Klarna payment method options.
         */
        klarna?: Emptyable<PaymentMethodOptions.Klarna>;
        /**
         * If this is a `konbini` PaymentMethod, this sub-hash contains details about the Konbini payment method options.
         */
        konbini?: Emptyable<PaymentMethodOptions.Konbini>;
        /**
         * If this is a `kr_card` PaymentMethod, this sub-hash contains details about the KR Card payment method options.
         */
        kr_card?: Emptyable<PaymentMethodOptions.KrCard>;
        /**
         * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
         */
        link?: Emptyable<PaymentMethodOptions.Link>;
        /**
         * If this is a `mb_way` PaymentMethod, this sub-hash contains details about the MB WAY payment method options.
         */
        mb_way?: Emptyable<PaymentMethodOptions.MbWay>;
        /**
         * If this is a `MobilePay` PaymentMethod, this sub-hash contains details about the MobilePay payment method options.
         */
        mobilepay?: Emptyable<PaymentMethodOptions.Mobilepay>;
        /**
         * If this is a `multibanco` PaymentMethod, this sub-hash contains details about the Multibanco payment method options.
         */
        multibanco?: Emptyable<PaymentMethodOptions.Multibanco>;
        /**
         * If this is a `naver_pay` PaymentMethod, this sub-hash contains details about the Naver Pay payment method options.
         */
        naver_pay?: Emptyable<PaymentMethodOptions.NaverPay>;
        /**
         * If this is a `nz_bank_account` PaymentMethod, this sub-hash contains details about the NZ BECS Direct Debit payment method options.
         */
        nz_bank_account?: Emptyable<PaymentMethodOptions.NzBankAccount>;
        /**
         * If this is a `oxxo` PaymentMethod, this sub-hash contains details about the OXXO payment method options.
         */
        oxxo?: Emptyable<PaymentMethodOptions.Oxxo>;
        /**
         * If this is a `p24` PaymentMethod, this sub-hash contains details about the Przelewy24 payment method options.
         */
        p24?: Emptyable<PaymentMethodOptions.P24>;
        /**
         * If this is a `pay_by_bank` PaymentMethod, this sub-hash contains details about the PayByBank payment method options.
         */
        pay_by_bank?: Emptyable<PaymentMethodOptions.PayByBank>;
        /**
         * If this is a `payco` PaymentMethod, this sub-hash contains details about the PAYCO payment method options.
         */
        payco?: Emptyable<PaymentMethodOptions.Payco>;
        /**
         * If this is a `paynow` PaymentMethod, this sub-hash contains details about the PayNow payment method options.
         */
        paynow?: Emptyable<PaymentMethodOptions.Paynow>;
        /**
         * If this is a `paypal` PaymentMethod, this sub-hash contains details about the PayPal payment method options.
         */
        paypal?: Emptyable<PaymentMethodOptions.Paypal>;
        /**
         * If this is a `pix` PaymentMethod, this sub-hash contains details about the Pix payment method options.
         */
        pix?: Emptyable<PaymentMethodOptions.Pix>;
        /**
         * If this is a `promptpay` PaymentMethod, this sub-hash contains details about the PromptPay payment method options.
         */
        promptpay?: Emptyable<PaymentMethodOptions.Promptpay>;
        /**
         * If this is a `revolut_pay` PaymentMethod, this sub-hash contains details about the Revolut Pay payment method options.
         */
        revolut_pay?: Emptyable<PaymentMethodOptions.RevolutPay>;
        /**
         * If this is a `samsung_pay` PaymentMethod, this sub-hash contains details about the Samsung Pay payment method options.
         */
        samsung_pay?: Emptyable<PaymentMethodOptions.SamsungPay>;
        /**
         * If this is a `satispay` PaymentMethod, this sub-hash contains details about the Satispay payment method options.
         */
        satispay?: Emptyable<PaymentMethodOptions.Satispay>;
        /**
         * If this is a `sepa_debit` PaymentIntent, this sub-hash contains details about the SEPA Debit payment method options.
         */
        sepa_debit?: Emptyable<PaymentMethodOptions.SepaDebit>;
        /**
         * If this is a `sofort` PaymentMethod, this sub-hash contains details about the SOFORT payment method options.
         */
        sofort?: Emptyable<PaymentMethodOptions.Sofort>;
        /**
         * If this is a `Swish` PaymentMethod, this sub-hash contains details about the Swish payment method options.
         */
        swish?: Emptyable<PaymentMethodOptions.Swish>;
        /**
         * If this is a `twint` PaymentMethod, this sub-hash contains details about the TWINT payment method options.
         */
        twint?: Emptyable<PaymentMethodOptions.Twint>;
        /**
         * If this is a `us_bank_account` PaymentMethod, this sub-hash contains details about the US bank account payment method options.
         */
        us_bank_account?: Emptyable<PaymentMethodOptions.UsBankAccount>;
        /**
         * If this is a `wechat_pay` PaymentMethod, this sub-hash contains details about the WeChat Pay payment method options.
         */
        wechat_pay?: Emptyable<PaymentMethodOptions.WechatPay>;
        /**
         * If this is a `zip` PaymentMethod, this sub-hash contains details about the Zip payment method options.
         */
        zip?: Emptyable<PaymentMethodOptions.Zip>;
    }
    interface RadarOptions {
        /**
         * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
         */
        session?: string;
    }
    type SetupFutureUsage = 'off_session' | 'on_session';
    interface Shipping {
        /**
         * Shipping address.
         */
        address: AddressParam;
        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string;
        /**
         * Recipient name.
         */
        name: string;
        /**
         * Recipient phone (including extension).
         */
        phone?: string;
        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string;
    }
    namespace AmountDetails {
        interface LineItem {
            /**
             * The discount applied on this line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than 0.
             *
             * This field is mutually exclusive with the `amount_details[discount_amount]` field.
             */
            discount_amount?: number;
            /**
             * Payment method-specific information for line items.
             */
            payment_method_options?: LineItem.PaymentMethodOptions;
            /**
             * The product code of the line item, such as an SKU. Required for L3 rates. At most 12 characters long.
             */
            product_code?: string;
            /**
             * The product name of the line item. Required for L3 rates. At most 1024 characters long.
             *
             * For Cards, this field is truncated to 26 alphanumeric characters before being sent to the card networks. For Paypal, this field is truncated to 127 characters.
             */
            product_name: string;
            /**
             * The quantity of items. Required for L3 rates. An integer greater than 0.
             */
            quantity: number;
            /**
             * Contains information about the tax on the item.
             */
            tax?: LineItem.Tax;
            /**
             * The unit cost of the line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L3 rates. An integer greater than or equal to 0.
             */
            unit_cost: number;
            /**
             * A unit of measure for the line item, such as gallons, feet, meters, etc.
             */
            unit_of_measure?: string;
        }
        interface Shipping {
            /**
             * If a physical good is being shipped, the cost of shipping represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than or equal to 0.
             */
            amount?: Emptyable<number>;
            /**
             * If a physical good is being shipped, the postal code of where it is being shipped from. At most 10 alphanumeric characters long, hyphens are allowed.
             */
            from_postal_code?: Emptyable<string>;
            /**
             * If a physical good is being shipped, the postal code of where it is being shipped to. At most 10 alphanumeric characters long, hyphens are allowed.
             */
            to_postal_code?: Emptyable<string>;
        }
        interface Tax {
            /**
             * The total amount of tax on the transaction represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L2 rates. An integer greater than or equal to 0.
             *
             * This field is mutually exclusive with the `amount_details[line_items][#][tax][total_tax_amount]` field.
             */
            total_tax_amount: number;
        }
        namespace LineItem {
            interface PaymentMethodOptions {
                /**
                 * This sub-hash contains line item details that are specific to `card` payment method."
                 */
                card?: PaymentMethodOptions.Card;
                /**
                 * This sub-hash contains line item details that are specific to `card_present` payment method."
                 */
                card_present?: PaymentMethodOptions.CardPresent;
                /**
                 * This sub-hash contains line item details that are specific to `klarna` payment method."
                 */
                klarna?: PaymentMethodOptions.Klarna;
                /**
                 * This sub-hash contains line item details that are specific to `paypal` payment method."
                 */
                paypal?: PaymentMethodOptions.Paypal;
            }
            interface Tax {
                /**
                 * The total amount of tax on a single line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L3 rates. An integer greater than or equal to 0.
                 *
                 * This field is mutually exclusive with the `amount_details[tax][total_tax_amount]` field.
                 */
                total_tax_amount: number;
            }
            namespace PaymentMethodOptions {
                interface Card {
                    /**
                     * Identifier that categorizes the items being purchased using a standardized commodity scheme such as (but not limited to) UNSPSC, NAICS, NAPCS, etc.
                     */
                    commodity_code?: string;
                }
                interface CardPresent {
                    /**
                     * Identifier that categorizes the items being purchased using a standardized commodity scheme such as (but not limited to) UNSPSC, NAICS, NAPCS, etc.
                     */
                    commodity_code?: string;
                }
                interface Klarna {
                    /**
                     * URL to an image for the product. Max length, 4096 characters.
                     */
                    image_url?: string;
                    /**
                     * URL to the product page. Max length, 4096 characters.
                     */
                    product_url?: string;
                    /**
                     * Unique reference for this line item to correlate it with your system's internal records. The field is displayed in the Klarna Consumer App if passed.
                     */
                    reference?: string;
                    /**
                     * Reference for the subscription this line item is for.
                     */
                    subscription_reference?: string;
                }
                interface Paypal {
                    /**
                     * Type of the line item.
                     */
                    category?: Paypal.Category;
                    /**
                     * Description of the line item.
                     */
                    description?: string;
                    /**
                     * The Stripe account ID of the connected account that sells the item.
                     */
                    sold_by?: string;
                }
                namespace Paypal {
                    type Category = 'digital_goods' | 'donation' | 'physical_goods';
                }
            }
        }
    }
    namespace MandateData {
        interface CustomerAcceptance {
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
        namespace CustomerAcceptance {
            interface Offline {
            }
            interface Online {
                /**
                 * The IP address from which the Mandate was accepted by the customer.
                 */
                ip_address?: string;
                /**
                 * The user agent of the browser from which the Mandate was accepted by the customer.
                 */
                user_agent?: string;
            }
            type Type = 'offline' | 'online';
        }
    }
    namespace PaymentMethodData {
        interface AcssDebit {
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
        interface Affirm {
        }
        interface AfterpayClearpay {
        }
        interface Alipay {
        }
        type AllowRedisplay = 'always' | 'limited' | 'unspecified';
        interface Alma {
        }
        interface AmazonPay {
        }
        interface AuBecsDebit {
            /**
             * The account number for the bank account.
             */
            account_number: string;
            /**
             * Bank-State-Branch number of the bank account.
             */
            bsb_number: string;
        }
        interface BacsDebit {
            /**
             * Account number of the bank account that the funds will be debited from.
             */
            account_number?: string;
            /**
             * Sort code of the bank account. (e.g., `10-20-30`)
             */
            sort_code?: string;
        }
        interface Bancontact {
        }
        interface Billie {
        }
        interface BillingDetails {
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
        interface Blik {
        }
        interface Boleto {
            /**
             * The tax ID of the customer (CPF for individual consumers or CNPJ for businesses consumers)
             */
            tax_id: string;
        }
        interface Cashapp {
        }
        interface Crypto {
        }
        interface CustomerBalance {
        }
        interface Eps {
            /**
             * The customer's bank.
             */
            bank?: Eps.Bank;
        }
        interface Fpx {
            /**
             * Account holder type for FPX transaction
             */
            account_holder_type?: Fpx.AccountHolderType;
            /**
             * The customer's bank.
             */
            bank: Fpx.Bank;
        }
        interface Giropay {
        }
        interface Grabpay {
        }
        interface Ideal {
            /**
             * The customer's bank. Only use this parameter for existing customers. Don't use it for new customers.
             */
            bank?: Ideal.Bank;
        }
        interface InteracPresent {
        }
        interface KakaoPay {
        }
        interface Klarna {
            /**
             * Customer's date of birth
             */
            dob?: Klarna.Dob;
        }
        interface Konbini {
        }
        interface KrCard {
        }
        interface Link {
        }
        interface MbWay {
        }
        interface Mobilepay {
        }
        interface Multibanco {
        }
        interface NaverPay {
            /**
             * Whether to use Naver Pay points or a card to fund this transaction. If not provided, this defaults to `card`.
             */
            funding?: NaverPay.Funding;
        }
        interface NzBankAccount {
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
        interface Oxxo {
        }
        interface P24 {
            /**
             * The customer's bank.
             */
            bank?: P24.Bank;
        }
        interface PayByBank {
        }
        interface Payco {
        }
        interface Paynow {
        }
        interface Paypal {
        }
        interface Pix {
        }
        interface Promptpay {
        }
        interface RadarOptions {
            /**
             * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
             */
            session?: string;
        }
        interface RevolutPay {
        }
        interface SamsungPay {
        }
        interface Satispay {
        }
        interface SepaDebit {
            /**
             * IBAN of the bank account.
             */
            iban: string;
        }
        interface Sofort {
            /**
             * Two-letter ISO code representing the country the bank account is located in.
             */
            country: Sofort.Country;
        }
        interface Swish {
        }
        interface Twint {
        }
        type Type = 'acss_debit' | 'affirm' | 'afterpay_clearpay' | 'alipay' | 'alma' | 'amazon_pay' | 'au_becs_debit' | 'bacs_debit' | 'bancontact' | 'billie' | 'blik' | 'boleto' | 'cashapp' | 'crypto' | 'customer_balance' | 'eps' | 'fpx' | 'giropay' | 'grabpay' | 'ideal' | 'kakao_pay' | 'klarna' | 'konbini' | 'kr_card' | 'link' | 'mb_way' | 'mobilepay' | 'multibanco' | 'naver_pay' | 'nz_bank_account' | 'oxxo' | 'p24' | 'pay_by_bank' | 'payco' | 'paynow' | 'paypal' | 'pix' | 'promptpay' | 'revolut_pay' | 'samsung_pay' | 'satispay' | 'sepa_debit' | 'sofort' | 'swish' | 'twint' | 'us_bank_account' | 'wechat_pay' | 'zip';
        interface UsBankAccount {
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
        interface WechatPay {
        }
        interface Zip {
        }
        namespace Eps {
            type Bank = 'arzte_und_apotheker_bank' | 'austrian_anadi_bank_ag' | 'bank_austria' | 'bankhaus_carl_spangler' | 'bankhaus_schelhammer_und_schattera_ag' | 'bawag_psk_ag' | 'bks_bank_ag' | 'brull_kallmus_bank_ag' | 'btv_vier_lander_bank' | 'capital_bank_grawe_gruppe_ag' | 'deutsche_bank_ag' | 'dolomitenbank' | 'easybank_ag' | 'erste_bank_und_sparkassen' | 'hypo_alpeadriabank_international_ag' | 'hypo_bank_burgenland_aktiengesellschaft' | 'hypo_noe_lb_fur_niederosterreich_u_wien' | 'hypo_oberosterreich_salzburg_steiermark' | 'hypo_tirol_bank_ag' | 'hypo_vorarlberg_bank_ag' | 'marchfelder_bank' | 'oberbank_ag' | 'raiffeisen_bankengruppe_osterreich' | 'schoellerbank_ag' | 'sparda_bank_wien' | 'volksbank_gruppe' | 'volkskreditbank_ag' | 'vr_bank_braunau';
        }
        namespace Fpx {
            type AccountHolderType = 'company' | 'individual';
            type Bank = 'affin_bank' | 'agrobank' | 'alliance_bank' | 'ambank' | 'bank_islam' | 'bank_muamalat' | 'bank_of_china' | 'bank_rakyat' | 'bsn' | 'cimb' | 'deutsche_bank' | 'hong_leong_bank' | 'hsbc' | 'kfh' | 'maybank2e' | 'maybank2u' | 'ocbc' | 'pb_enterprise' | 'public_bank' | 'rhb' | 'standard_chartered' | 'uob';
        }
        namespace Ideal {
            type Bank = 'abn_amro' | 'asn_bank' | 'bunq' | 'buut' | 'handelsbanken' | 'ing' | 'knab' | 'moneyou' | 'n26' | 'nn' | 'rabobank' | 'regiobank' | 'revolut' | 'sns_bank' | 'triodos_bank' | 'van_lanschot' | 'yoursafe';
        }
        namespace Klarna {
            interface Dob {
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
        namespace NaverPay {
            type Funding = 'card' | 'points';
        }
        namespace P24 {
            type Bank = 'alior_bank' | 'bank_millennium' | 'bank_nowy_bfg_sa' | 'bank_pekao_sa' | 'banki_spbdzielcze' | 'blik' | 'bnp_paribas' | 'boz' | 'citi_handlowy' | 'credit_agricole' | 'envelobank' | 'etransfer_pocztowy24' | 'getin_bank' | 'ideabank' | 'ing' | 'inteligo' | 'mbank_mtransfer' | 'nest_przelew' | 'noble_pay' | 'pbac_z_ipko' | 'plus_bank' | 'santander_przelew24' | 'tmobile_usbugi_bankowe' | 'toyota_bank' | 'velobank' | 'volkswagen_bank';
        }
        namespace Sofort {
            type Country = 'AT' | 'BE' | 'DE' | 'ES' | 'IT' | 'NL';
        }
        namespace UsBankAccount {
            type AccountHolderType = 'company' | 'individual';
            type AccountType = 'checking' | 'savings';
        }
    }
    namespace PaymentMethodOptions {
        interface AcssDebit {
            /**
             * Additional fields for Mandate creation
             */
            mandate_options?: AcssDebit.MandateOptions;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<AcssDebit.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
            /**
             * Bank account verification method.
             */
            verification_method?: AcssDebit.VerificationMethod;
        }
        interface Affirm {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Preferred language of the Affirm authorization page that the customer is redirected to.
             */
            preferred_locale?: string;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface AfterpayClearpay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * An internal identifier or reference that this payment corresponds to. You must limit the identifier to 128 characters, and it can only contain letters, numbers, underscores, backslashes, and dashes.
             * This field differs from the statement descriptor and item name.
             */
            reference?: string;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Alipay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Alipay.SetupFutureUsage>;
        }
        interface Alma {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
        }
        interface AmazonPay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Emptyable<AmazonPay.SetupFutureUsage>;
        }
        interface AuBecsDebit {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<AuBecsDebit.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
        }
        interface BacsDebit {
            /**
             * Additional fields for Mandate creation
             */
            mandate_options?: BacsDebit.MandateOptions;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<BacsDebit.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
        }
        interface Bancontact {
            /**
             * Preferred language of the Bancontact authorization page that the customer is redirected to.
             */
            preferred_language?: Bancontact.PreferredLanguage;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Bancontact.SetupFutureUsage>;
        }
        interface Billie {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
        }
        interface Blik {
            /**
             * The 6-digit BLIK code that a customer has generated using their banking application. Can only be set on confirmation.
             */
            code?: string;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<'none'>;
        }
        interface Boleto {
            /**
             * The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto invoice will expire on Wednesday at 23:59 America/Sao_Paulo time.
             */
            expires_after_days?: number;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Boleto.SetupFutureUsage>;
        }
        interface Card {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * A single-use `cvc_update` Token that represents a card CVC value. When provided, the CVC value will be verified during the card payment attempt. This parameter can only be provided during confirmation.
             */
            cvc_token?: string;
            /**
             * Installment configuration for payments attempted on this PaymentIntent.
             *
             * For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
             */
            installments?: Card.Installments;
            /**
             * Configuration options for setting up an eMandate for cards issued in India.
             */
            mandate_options?: Card.MandateOptions;
            /**
             * When specified, this parameter indicates that a transaction will be marked
             * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
             * parameter can only be provided during confirmation.
             */
            moto?: boolean;
            /**
             * Selected network to process this PaymentIntent on. Depends on the available networks of the card attached to the PaymentIntent. Can be only set confirm-time.
             */
            network?: Card.Network;
            /**
             * Request ability to [capture beyond the standard authorization validity window](https://stripe.com/docs/payments/extended-authorization) for this PaymentIntent.
             */
            request_extended_authorization?: Card.RequestExtendedAuthorization;
            /**
             * Request ability to [increment the authorization](https://stripe.com/docs/payments/incremental-authorization) for this PaymentIntent.
             */
            request_incremental_authorization?: Card.RequestIncrementalAuthorization;
            /**
             * Request ability to make [multiple captures](https://stripe.com/docs/payments/multicapture) for this PaymentIntent.
             */
            request_multicapture?: Card.RequestMulticapture;
            /**
             * Request ability to [overcapture](https://stripe.com/docs/payments/overcapture) for this PaymentIntent.
             */
            request_overcapture?: Card.RequestOvercapture;
            /**
             * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
             */
            request_three_d_secure?: Card.RequestThreeDSecure;
            /**
             * When enabled, using a card that is attached to a customer will require the CVC to be provided again (i.e. using the cvc_token parameter).
             */
            require_cvc_recollection?: boolean;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Card.SetupFutureUsage>;
            /**
             * Provides information about a card payment that customers see on their statements. Concatenated with the Kana prefix (shortened Kana descriptor) or Kana statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 22 characters.
             */
            statement_descriptor_suffix_kana?: Emptyable<string>;
            /**
             * Provides information about a card payment that customers see on their statements. Concatenated with the Kanji prefix (shortened Kanji descriptor) or Kanji statement descriptor that's set on the account to form the complete statement descriptor. Maximum 17 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 17 characters.
             */
            statement_descriptor_suffix_kanji?: Emptyable<string>;
            /**
             * If 3D Secure authentication was performed with a third-party provider,
             * the authentication details to use for this payment.
             */
            three_d_secure?: Card.ThreeDSecure;
        }
        interface CardPresent {
            /**
             * Request ability to capture this payment beyond the standard [authorization validity window](https://stripe.com/docs/terminal/features/extended-authorizations#authorization-validity)
             */
            request_extended_authorization?: boolean;
            /**
             * Request ability to [increment](https://stripe.com/docs/terminal/features/incremental-authorizations) this PaymentIntent if the combination of MCC and card brand is eligible. Check [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported) in the [Confirm](https://stripe.com/docs/api/payment_intents/confirm) response to verify support.
             */
            request_incremental_authorization_support?: boolean;
            /**
             * Network routing priority on co-branded EMV cards supporting domestic debit and international card schemes.
             */
            routing?: CardPresent.Routing;
        }
        interface Cashapp {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Cashapp.SetupFutureUsage>;
        }
        interface Crypto {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface CustomerBalance {
            /**
             * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
             */
            bank_transfer?: CustomerBalance.BankTransfer;
            /**
             * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
             */
            funding_type?: 'bank_transfer';
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Eps {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Fpx {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Giropay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Grabpay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Ideal {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Ideal.SetupFutureUsage>;
        }
        interface InteracPresent {
        }
        interface KakaoPay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Emptyable<KakaoPay.SetupFutureUsage>;
        }
        interface Klarna {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * On-demand details if setting up or charging an on-demand payment.
             */
            on_demand?: Klarna.OnDemand;
            /**
             * Preferred language of the Klarna authorization page that the customer is redirected to
             */
            preferred_locale?: Klarna.PreferredLocale;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Klarna.SetupFutureUsage;
            /**
             * Subscription details if setting up or charging a subscription.
             */
            subscriptions?: Emptyable<Array<Klarna.Subscription>>;
        }
        interface Konbini {
            /**
             * An optional 10 to 11 digit numeric-only string determining the confirmation code at applicable convenience stores. Must not consist of only zeroes and could be rejected in case of insufficient uniqueness. We recommend to use the customer's phone number.
             */
            confirmation_number?: Emptyable<string>;
            /**
             * The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST. Defaults to 3 days.
             */
            expires_after_days?: Emptyable<number>;
            /**
             * The timestamp at which the Konbini payment instructions will expire. Only one of `expires_after_days` or `expires_at` may be set.
             */
            expires_at?: Emptyable<number>;
            /**
             * A product descriptor of up to 22 characters, which will appear to customers at the convenience store.
             */
            product_description?: Emptyable<string>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface KrCard {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Emptyable<KrCard.SetupFutureUsage>;
        }
        interface Link {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * [Deprecated] This is a legacy parameter that no longer has any function.
             * @deprecated
             */
            persistent_token?: string;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Link.SetupFutureUsage>;
        }
        interface MbWay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Mobilepay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Multibanco {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface NaverPay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Emptyable<NaverPay.SetupFutureUsage>;
        }
        interface NzBankAccount {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<NzBankAccount.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
        }
        interface Oxxo {
            /**
             * The number of calendar days before an OXXO voucher expires. For example, if you create an OXXO voucher on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
             */
            expires_after_days?: number;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface P24 {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
            /**
             * Confirm that the payer has accepted the P24 terms and conditions.
             */
            tos_shown_and_accepted?: boolean;
        }
        interface PayByBank {
        }
        interface Payco {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
        }
        interface Paynow {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Paypal {
            /**
             * Controls when the funds will be captured from the customer's account.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * [Preferred locale](https://stripe.com/docs/payments/paypal/supported-locales) of the PayPal checkout page that the customer is redirected to.
             */
            preferred_locale?: Paypal.PreferredLocale;
            /**
             * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
             */
            reference?: string;
            /**
             * The risk correlation ID for an on-session payment using a saved PayPal payment method.
             */
            risk_correlation_id?: string;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Paypal.SetupFutureUsage>;
        }
        interface Pix {
            /**
             * Determines if the amount includes the IOF tax. Defaults to `never`.
             */
            amount_includes_iof?: Pix.AmountIncludesIof;
            /**
             * The number of seconds (between 10 and 1209600) after which Pix payment will expire. Defaults to 86400 seconds.
             */
            expires_after_seconds?: number;
            /**
             * The timestamp at which the Pix expires (between 10 and 1209600 seconds in the future). Defaults to 1 day in the future.
             */
            expires_at?: number;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Promptpay {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface RevolutPay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             */
            setup_future_usage?: Emptyable<RevolutPay.SetupFutureUsage>;
        }
        interface SamsungPay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
        }
        interface Satispay {
            /**
             * Controls when the funds are captured from the customer's account.
             *
             * If provided, this parameter overrides the behavior of the top-level [capture_method](https://docs.stripe.com/api/payment_intents/update#update_payment_intent-capture_method) for this payment method type when finalizing the payment with this payment method type.
             *
             * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter unsets the stored value for this payment method type.
             */
            capture_method?: Emptyable<'manual'>;
        }
        interface SepaDebit {
            /**
             * Additional fields for Mandate creation
             */
            mandate_options?: SepaDebit.MandateOptions;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<SepaDebit.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
        }
        interface Sofort {
            /**
             * Language shown to the payer on redirect.
             */
            preferred_language?: Emptyable<Sofort.PreferredLanguage>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<Sofort.SetupFutureUsage>;
        }
        interface Swish {
            /**
             * A reference for this payment to be displayed in the Swish app.
             */
            reference?: Emptyable<string>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Twint {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface UsBankAccount {
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
             * Preferred transaction settlement speed
             */
            preferred_settlement_speed?: Emptyable<UsBankAccount.PreferredSettlementSpeed>;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: Emptyable<UsBankAccount.SetupFutureUsage>;
            /**
             * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
             */
            target_date?: string;
            /**
             * Bank account verification method.
             */
            verification_method?: UsBankAccount.VerificationMethod;
        }
        interface WechatPay {
            /**
             * The app ID registered with WeChat Pay. Only required when client is ios or android.
             */
            app_id?: string;
            /**
             * The client type that the end customer will pay from
             */
            client?: WechatPay.Client;
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        interface Zip {
            /**
             * Indicates that you intend to make future payments with this PaymentIntent's payment method.
             *
             * If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](https://docs.stripe.com/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](https://docs.stripe.com/api/payment_methods/attach) the payment method to a Customer after the transaction completes.
             *
             * If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.
             *
             * When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](https://docs.stripe.com/strong-customer-authentication).
             *
             * If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
             */
            setup_future_usage?: 'none';
        }
        namespace AcssDebit {
            interface MandateOptions {
                /**
                 * A URL for custom mandate text to render during confirmation step.
                 * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
                 * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
                 */
                custom_mandate_url?: Emptyable<string>;
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
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
            namespace MandateOptions {
                type PaymentSchedule = 'combined' | 'interval' | 'sporadic';
                type TransactionType = 'business' | 'personal';
            }
        }
        namespace Alipay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace AmazonPay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace AuBecsDebit {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace BacsDebit {
            interface MandateOptions {
                /**
                 * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'DDIC' or 'STRIPE'.
                 */
                reference_prefix?: Emptyable<string>;
            }
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace Bancontact {
            type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace Boleto {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace Card {
            interface Installments {
                /**
                 * Setting to true enables installments for this PaymentIntent.
                 * This will cause the response to contain a list of available installment plans.
                 * Setting to false will prevent any selected plan from applying to a charge.
                 */
                enabled?: boolean;
                /**
                 * The selected installment plan to use for this payment attempt.
                 * This parameter can only be provided during confirmation.
                 */
                plan?: Emptyable<Installments.Plan>;
            }
            interface MandateOptions {
                /**
                 * Amount to be charged for future payments.
                 */
                amount: number;
                /**
                 * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
                 */
                amount_type: MandateOptions.AmountType;
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
            type Network = 'amex' | 'cartes_bancaires' | 'diners' | 'discover' | 'eftpos_au' | 'girocard' | 'interac' | 'jcb' | 'link' | 'mastercard' | 'unionpay' | 'unknown' | 'visa';
            type RequestExtendedAuthorization = 'if_available' | 'never';
            type RequestIncrementalAuthorization = 'if_available' | 'never';
            type RequestMulticapture = 'if_available' | 'never';
            type RequestOvercapture = 'if_available' | 'never';
            type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            interface ThreeDSecure {
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
                cryptogram: string;
                /**
                 * The Electronic Commerce Indicator (ECI) is returned by your 3D Secure
                 * provider and indicates what degree of authentication was performed.
                 */
                electronic_commerce_indicator?: ThreeDSecure.ElectronicCommerceIndicator;
                /**
                 * The exemption requested via 3DS and accepted by the issuer at authentication time.
                 */
                exemption_indicator?: ThreeDSecure.ExemptionIndicator;
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
                transaction_id: string;
                /**
                 * The version of 3D Secure that was performed.
                 */
                version: ThreeDSecure.Version;
            }
            namespace Installments {
                interface Plan {
                    /**
                     * For `fixed_count` installment plans, this is required. It represents the number of installment payments your customer will make to their credit card.
                     */
                    count?: number;
                    /**
                     * For `fixed_count` installment plans, this is required. It represents the interval between installment payments your customer will make to their credit card.
                     * One of `month`.
                     */
                    interval?: 'month';
                    /**
                     * Type of installment plan, one of `fixed_count`, `bonus`, or `revolving`.
                     */
                    type: Plan.Type;
                }
                namespace Plan {
                    type Type = 'bonus' | 'fixed_count' | 'revolving';
                }
            }
            namespace MandateOptions {
                type AmountType = 'fixed' | 'maximum';
                type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
            }
            namespace ThreeDSecure {
                type AresTransStatus = 'A' | 'C' | 'I' | 'N' | 'R' | 'U' | 'Y';
                type ElectronicCommerceIndicator = '01' | '02' | '05' | '06' | '07';
                type ExemptionIndicator = 'low_risk' | 'none';
                interface NetworkOptions {
                    /**
                     * Cartes Bancaires-specific 3DS fields.
                     */
                    cartes_bancaires?: NetworkOptions.CartesBancaires;
                }
                type Version = '1.0.2' | '2.1.0' | '2.2.0';
                namespace NetworkOptions {
                    interface CartesBancaires {
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
                    namespace CartesBancaires {
                        type CbAvalgo = '0' | '1' | '2' | '3' | '4' | 'A';
                    }
                }
            }
        }
        namespace CardPresent {
            interface Routing {
                /**
                 * Routing requested priority
                 */
                requested_priority?: Routing.RequestedPriority;
            }
            namespace Routing {
                type RequestedPriority = 'domestic' | 'international';
            }
        }
        namespace Cashapp {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace CustomerBalance {
            interface BankTransfer {
                /**
                 * Configuration for the eu_bank_transfer funding type.
                 */
                eu_bank_transfer?: BankTransfer.EuBankTransfer;
                /**
                 * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
                 *
                 * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
                 */
                requested_address_types?: Array<BankTransfer.RequestedAddressType>;
                /**
                 * The list of bank transfer types that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
                 */
                type: BankTransfer.Type;
            }
            namespace BankTransfer {
                interface EuBankTransfer {
                    /**
                     * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
                     */
                    country: string;
                }
                type RequestedAddressType = 'aba' | 'iban' | 'sepa' | 'sort_code' | 'spei' | 'swift' | 'zengin';
                type Type = 'eu_bank_transfer' | 'gb_bank_transfer' | 'jp_bank_transfer' | 'mx_bank_transfer' | 'us_bank_transfer';
            }
        }
        namespace Ideal {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace KakaoPay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace Klarna {
            interface OnDemand {
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
            type PreferredLocale = 'cs-CZ' | 'da-DK' | 'de-AT' | 'de-CH' | 'de-DE' | 'el-GR' | 'en-AT' | 'en-AU' | 'en-BE' | 'en-CA' | 'en-CH' | 'en-CZ' | 'en-DE' | 'en-DK' | 'en-ES' | 'en-FI' | 'en-FR' | 'en-GB' | 'en-GR' | 'en-IE' | 'en-IT' | 'en-NL' | 'en-NO' | 'en-NZ' | 'en-PL' | 'en-PT' | 'en-RO' | 'en-SE' | 'en-US' | 'es-ES' | 'es-US' | 'fi-FI' | 'fr-BE' | 'fr-CA' | 'fr-CH' | 'fr-FR' | 'it-CH' | 'it-IT' | 'nb-NO' | 'nl-BE' | 'nl-NL' | 'pl-PL' | 'pt-PT' | 'ro-RO' | 'sv-FI' | 'sv-SE';
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            interface Subscription {
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
                next_billing?: Subscription.NextBilling;
                /**
                 * A non-customer-facing reference to correlate subscription charges in the Klarna app. Use a value that persists across subscription charges.
                 */
                reference: string;
            }
            namespace OnDemand {
                type PurchaseInterval = 'day' | 'month' | 'week' | 'year';
            }
            namespace Subscription {
                type Interval = 'day' | 'month' | 'week' | 'year';
                interface NextBilling {
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
        namespace KrCard {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace Link {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace NaverPay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace NzBankAccount {
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace Paypal {
            type PreferredLocale = 'cs-CZ' | 'da-DK' | 'de-AT' | 'de-DE' | 'de-LU' | 'el-GR' | 'en-GB' | 'en-US' | 'es-ES' | 'fi-FI' | 'fr-BE' | 'fr-FR' | 'fr-LU' | 'hu-HU' | 'it-IT' | 'nl-BE' | 'nl-NL' | 'pl-PL' | 'pt-PT' | 'sk-SK' | 'sv-SE';
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace Pix {
            type AmountIncludesIof = 'always' | 'never';
        }
        namespace RevolutPay {
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace SepaDebit {
            interface MandateOptions {
                /**
                 * Prefix used to generate the Mandate reference. Must be at most 12 characters long. Must consist of only uppercase letters, numbers, spaces, or the following special characters: '/', '_', '-', '&', '.'. Cannot begin with 'STRIPE'.
                 */
                reference_prefix?: Emptyable<string>;
            }
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }
        namespace Sofort {
            type PreferredLanguage = 'de' | 'en' | 'es' | 'fr' | 'it' | 'nl' | 'pl';
            type SetupFutureUsage = 'none' | 'off_session';
        }
        namespace UsBankAccount {
            interface FinancialConnections {
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
            interface MandateOptions {
                /**
                 * The method used to collect offline mandate customer acceptance.
                 */
                collection_method?: Emptyable<'paper'>;
            }
            interface Networks {
                /**
                 * Triggers validations to run across the selected networks
                 */
                requested?: Array<Networks.Requested>;
            }
            type PreferredSettlementSpeed = 'fastest' | 'standard';
            type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
            type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
            namespace FinancialConnections {
                interface Filters {
                    /**
                     * The account subcategories to use to filter for selectable accounts. Valid subcategories are `checking` and `savings`.
                     */
                    account_subcategories?: Array<Filters.AccountSubcategory>;
                }
                type Permission = 'balances' | 'ownership' | 'payment_method' | 'transactions';
                type Prefetch = 'balances' | 'ownership' | 'transactions';
                namespace Filters {
                    type AccountSubcategory = 'checking' | 'savings';
                }
            }
            namespace Networks {
                type Requested = 'ach' | 'us_domestic_wire';
            }
        }
        namespace WechatPay {
            type Client = 'android' | 'ios' | 'web';
        }
    }
}
export interface PaymentIntentIncrementAuthorizationParams {
    /**
     * The updated total amount that you intend to collect from the cardholder. This amount must be greater than the currently authorized amount.
     */
    amount: number;
    /**
     * Provides industry-specific information about the amount.
     */
    amount_details?: PaymentIntentIncrementAuthorizationParams.AmountDetails;
    /**
     * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    application_fee_amount?: number;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;
    /**
     * Provides industry-specific information about the charge.
     */
    payment_details?: PaymentIntentIncrementAuthorizationParams.PaymentDetails;
    /**
     * Text that appears on the customer's statement as the statement descriptor for a non-card or card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
     */
    statement_descriptor?: string;
    /**
     * The parameters used to automatically create a transfer after the payment is captured.
     * Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
     */
    transfer_data?: PaymentIntentIncrementAuthorizationParams.TransferData;
}
export declare namespace PaymentIntentIncrementAuthorizationParams {
    interface AmountDetails {
        /**
         * The total discount applied on the transaction represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than 0.
         *
         * This field is mutually exclusive with the `amount_details[line_items][#][discount_amount]` field.
         */
        discount_amount?: Emptyable<number>;
        /**
         * A list of line items, each containing information about a product in the PaymentIntent. There is a maximum of 100 line items.
         */
        line_items?: Emptyable<Array<AmountDetails.LineItem>>;
        /**
         * Contains information about the shipping portion of the amount.
         */
        shipping?: Emptyable<AmountDetails.Shipping>;
        /**
         * Contains information about the tax portion of the amount.
         */
        tax?: Emptyable<AmountDetails.Tax>;
    }
    interface PaymentDetails {
        /**
         * A unique value to identify the customer. This field is available only for card payments.
         *
         * This field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks.
         */
        customer_reference?: Emptyable<string>;
        /**
         * A unique value assigned by the business to identify the transaction. Required for L2 and L3 rates.
         *
         * Required when the Payment Method Types array contains `card`, including when [automatic_payment_methods.enabled](https://docs.stripe.com/api/payment_intents/create#create_payment_intent-automatic_payment_methods-enabled) is set to `true`.
         *
         * For Cards, this field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks. For Klarna, this field is truncated to 255 characters and is visible to customers when they view the order in the Klarna app.
         */
        order_reference?: Emptyable<string>;
    }
    interface TransferData {
        /**
         * The amount that will be transferred automatically when a charge succeeds.
         */
        amount?: number;
    }
    namespace AmountDetails {
        interface LineItem {
            /**
             * The discount applied on this line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than 0.
             *
             * This field is mutually exclusive with the `amount_details[discount_amount]` field.
             */
            discount_amount?: number;
            /**
             * Payment method-specific information for line items.
             */
            payment_method_options?: LineItem.PaymentMethodOptions;
            /**
             * The product code of the line item, such as an SKU. Required for L3 rates. At most 12 characters long.
             */
            product_code?: string;
            /**
             * The product name of the line item. Required for L3 rates. At most 1024 characters long.
             *
             * For Cards, this field is truncated to 26 alphanumeric characters before being sent to the card networks. For Paypal, this field is truncated to 127 characters.
             */
            product_name: string;
            /**
             * The quantity of items. Required for L3 rates. An integer greater than 0.
             */
            quantity: number;
            /**
             * Contains information about the tax on the item.
             */
            tax?: LineItem.Tax;
            /**
             * The unit cost of the line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L3 rates. An integer greater than or equal to 0.
             */
            unit_cost: number;
            /**
             * A unit of measure for the line item, such as gallons, feet, meters, etc.
             */
            unit_of_measure?: string;
        }
        interface Shipping {
            /**
             * If a physical good is being shipped, the cost of shipping represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than or equal to 0.
             */
            amount?: Emptyable<number>;
            /**
             * If a physical good is being shipped, the postal code of where it is being shipped from. At most 10 alphanumeric characters long, hyphens are allowed.
             */
            from_postal_code?: Emptyable<string>;
            /**
             * If a physical good is being shipped, the postal code of where it is being shipped to. At most 10 alphanumeric characters long, hyphens are allowed.
             */
            to_postal_code?: Emptyable<string>;
        }
        interface Tax {
            /**
             * The total amount of tax on the transaction represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L2 rates. An integer greater than or equal to 0.
             *
             * This field is mutually exclusive with the `amount_details[line_items][#][tax][total_tax_amount]` field.
             */
            total_tax_amount: number;
        }
        namespace LineItem {
            interface PaymentMethodOptions {
                /**
                 * This sub-hash contains line item details that are specific to `card` payment method."
                 */
                card?: PaymentMethodOptions.Card;
                /**
                 * This sub-hash contains line item details that are specific to `card_present` payment method."
                 */
                card_present?: PaymentMethodOptions.CardPresent;
                /**
                 * This sub-hash contains line item details that are specific to `klarna` payment method."
                 */
                klarna?: PaymentMethodOptions.Klarna;
                /**
                 * This sub-hash contains line item details that are specific to `paypal` payment method."
                 */
                paypal?: PaymentMethodOptions.Paypal;
            }
            interface Tax {
                /**
                 * The total amount of tax on a single line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L3 rates. An integer greater than or equal to 0.
                 *
                 * This field is mutually exclusive with the `amount_details[tax][total_tax_amount]` field.
                 */
                total_tax_amount: number;
            }
            namespace PaymentMethodOptions {
                interface Card {
                    /**
                     * Identifier that categorizes the items being purchased using a standardized commodity scheme such as (but not limited to) UNSPSC, NAICS, NAPCS, etc.
                     */
                    commodity_code?: string;
                }
                interface CardPresent {
                    /**
                     * Identifier that categorizes the items being purchased using a standardized commodity scheme such as (but not limited to) UNSPSC, NAICS, NAPCS, etc.
                     */
                    commodity_code?: string;
                }
                interface Klarna {
                    /**
                     * URL to an image for the product. Max length, 4096 characters.
                     */
                    image_url?: string;
                    /**
                     * URL to the product page. Max length, 4096 characters.
                     */
                    product_url?: string;
                    /**
                     * Unique reference for this line item to correlate it with your system's internal records. The field is displayed in the Klarna Consumer App if passed.
                     */
                    reference?: string;
                    /**
                     * Reference for the subscription this line item is for.
                     */
                    subscription_reference?: string;
                }
                interface Paypal {
                    /**
                     * Type of the line item.
                     */
                    category?: Paypal.Category;
                    /**
                     * Description of the line item.
                     */
                    description?: string;
                    /**
                     * The Stripe account ID of the connected account that sells the item.
                     */
                    sold_by?: string;
                }
                namespace Paypal {
                    type Category = 'digital_goods' | 'donation' | 'physical_goods';
                }
            }
        }
    }
}
export interface PaymentIntentListAmountDetailsLineItemsParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
}
export interface PaymentIntentSearchParams {
    /**
     * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for payment intents](https://stripe.com/docs/search#query-fields-for-payment-intents).
     */
    query: string;
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;
    /**
     * A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
     */
    page?: string;
}
export interface PaymentIntentVerifyMicrodepositsParams {
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
