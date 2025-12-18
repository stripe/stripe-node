import { StripeResource } from '../../StripeResource.js';
import { RequestOptions } from '../../Types.js';
import { Location } from './Locations.js';
import { PaymentIntent } from './../PaymentIntents.js';
import { PaymentMethod } from './../PaymentMethods.js';
import { SetupIntent } from './../SetupIntents.js';
import { Charge } from './../Charges.js';
import { Refund } from './../Refunds.js';
import { Emptyable, MetadataParam, PaginationParams, Metadata } from '../../shared.js';
import { Response, ApiListPromise } from '../../lib.js';
export declare class ReaderResource extends StripeResource {
    /**
     * Deletes a Reader object.
     */
    del(id: string, params?: Terminal.ReaderDeleteParams, options?: RequestOptions): Promise<Response<Terminal.DeletedReader>>;
    del(id: string, options?: RequestOptions): Promise<Response<Terminal.DeletedReader>>;
    /**
     * Retrieves a Reader object.
     */
    retrieve(id: string, params?: Terminal.ReaderRetrieveParams, options?: RequestOptions): Promise<Response<Reader | Terminal.DeletedReader>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<Reader | Terminal.DeletedReader>>;
    /**
     * Updates a Reader object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
    update(id: string, params?: Terminal.ReaderUpdateParams, options?: RequestOptions): Promise<Response<Reader | Terminal.DeletedReader>>;
    /**
     * Returns a list of Reader objects.
     */
    list(params?: Terminal.ReaderListParams, options?: RequestOptions): ApiListPromise<Reader>;
    list(options?: RequestOptions): ApiListPromise<Reader>;
    /**
     * Creates a new Reader object.
     */
    create(params: Terminal.ReaderCreateParams, options?: RequestOptions): Promise<Response<Reader>>;
    /**
     * Cancels the current reader action. See [Programmatic Cancellation](https://docs.stripe.com/docs/terminal/payments/collect-card-payment?terminal-sdk-platform=server-driven#programmatic-cancellation) for more details.
     */
    cancelAction(id: string, params?: Terminal.ReaderCancelActionParams, options?: RequestOptions): Promise<Response<Reader>>;
    cancelAction(id: string, options?: RequestOptions): Promise<Response<Reader>>;
    /**
     * Initiates an [input collection flow](https://docs.stripe.com/docs/terminal/features/collect-inputs) on a Reader to display input forms and collect information from your customers.
     */
    collectInputs(id: string, params: Terminal.ReaderCollectInputsParams, options?: RequestOptions): Promise<Response<Reader>>;
    /**
     * Initiates a payment flow on a Reader and updates the PaymentIntent with card details before manual confirmation. See [Collecting a Payment method](https://docs.stripe.com/docs/terminal/payments/collect-card-payment?terminal-sdk-platform=server-driven&process=inspect#collect-a-paymentmethod) for more details.
     */
    collectPaymentMethod(id: string, params: Terminal.ReaderCollectPaymentMethodParams, options?: RequestOptions): Promise<Response<Reader>>;
    /**
     * Finalizes a payment on a Reader. See [Confirming a Payment](https://docs.stripe.com/docs/terminal/payments/collect-card-payment?terminal-sdk-platform=server-driven&process=inspect#confirm-the-paymentintent) for more details.
     */
    confirmPaymentIntent(id: string, params: Terminal.ReaderConfirmPaymentIntentParams, options?: RequestOptions): Promise<Response<Reader>>;
    /**
     * Initiates a payment flow on a Reader. See [process the payment](https://docs.stripe.com/docs/terminal/payments/collect-card-payment?terminal-sdk-platform=server-driven&process=immediately#process-payment) for more details.
     */
    processPaymentIntent(id: string, params: Terminal.ReaderProcessPaymentIntentParams, options?: RequestOptions): Promise<Response<Reader>>;
    /**
     * Initiates a SetupIntent flow on a Reader. See [Save directly without charging](https://docs.stripe.com/docs/terminal/features/saving-payment-details/save-directly) for more details.
     */
    processSetupIntent(id: string, params: Terminal.ReaderProcessSetupIntentParams, options?: RequestOptions): Promise<Response<Reader>>;
    /**
     * Initiates an in-person refund on a Reader. See [Refund an Interac Payment](https://docs.stripe.com/docs/terminal/payments/regional?integration-country=CA#refund-an-interac-payment) for more details.
     */
    refundPayment(id: string, params?: Terminal.ReaderRefundPaymentParams, options?: RequestOptions): Promise<Response<Reader>>;
    refundPayment(id: string, options?: RequestOptions): Promise<Response<Reader>>;
    /**
     * Sets the reader display to show [cart details](https://docs.stripe.com/docs/terminal/features/display).
     */
    setReaderDisplay(id: string, params: Terminal.ReaderSetReaderDisplayParams, options?: RequestOptions): Promise<Response<Reader>>;
}
export /**
 * A Reader represents a physical device for accepting payment details.
 *
 * Related guide: [Connecting to a reader](https://stripe.com/docs/terminal/payments/connect-reader)
 */ interface Reader {
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
    action: Terminal.Reader.Action | null;
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
    device_type: Terminal.Reader.DeviceType;
    /**
     * The local IP address of the reader.
     */
    ip_address: string | null;
    /**
     * Custom label given to the reader for easier identification.
     */
    label: string;
    /**
     * The last time this reader reported to Stripe backend.
     */
    last_seen_at: number | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The location identifier of the reader.
     */
    location: string | Location | null;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Metadata;
    /**
     * Serial number of the reader.
     */
    serial_number: string;
    /**
     * The networking status of the reader. We do not recommend using this field in flows that may block taking payments.
     */
    status: Terminal.Reader.Status | null;
}
export declare namespace Terminal {
    interface DeletedReader {
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
    }
    namespace Reader {
        interface Action {
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
        type DeviceType = 'bbpos_chipper2x' | 'bbpos_wisepad3' | 'bbpos_wisepos_e' | 'mobile_phone_reader' | 'simulated_stripe_s700' | 'simulated_wisepos_e' | 'stripe_m2' | 'stripe_s700' | 'verifone_P400';
        type Status = 'offline' | 'online';
        namespace Action {
            interface CollectInputs {
                /**
                 * List of inputs to be collected.
                 */
                inputs: Array<CollectInputs.Input>;
                /**
                 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                 */
                metadata: Metadata | null;
            }
            interface CollectPaymentMethod {
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
                 * You can use them with [PaymentIntents](https://stripe.com/docs/payments/payment-intents) to collect payments or save them to
                 * Customer objects to store instrument details for future payments.
                 *
                 * Related guides: [Payment Methods](https://stripe.com/docs/payments/payment-methods) and [More Payment Scenarios](https://stripe.com/docs/payments/more-payment-scenarios).
                 */
                payment_method?: PaymentMethod;
            }
            interface ConfirmPaymentIntent {
                /**
                 * Represents a per-transaction override of a reader configuration
                 */
                confirm_config?: ConfirmPaymentIntent.ConfirmConfig;
                /**
                 * Most recent PaymentIntent processed by the reader.
                 */
                payment_intent: string | PaymentIntent;
            }
            interface ProcessPaymentIntent {
                /**
                 * Most recent PaymentIntent processed by the reader.
                 */
                payment_intent: string | PaymentIntent;
                /**
                 * Represents a per-transaction override of a reader configuration
                 */
                process_config?: ProcessPaymentIntent.ProcessConfig;
            }
            interface ProcessSetupIntent {
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
            interface RefundPayment {
                /**
                 * The amount being refunded.
                 */
                amount?: number;
                /**
                 * Charge that is being refunded.
                 */
                charge?: string | Charge;
                /**
                 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
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
            interface SetReaderDisplay {
                /**
                 * Cart object to be displayed by the reader, including line items, amounts, and currency.
                 */
                cart: SetReaderDisplay.Cart | null;
                /**
                 * Type of information to be displayed by the reader. Only `cart` is currently supported.
                 */
                type: 'cart';
            }
            type Status = 'failed' | 'in_progress' | 'succeeded';
            type Type = 'collect_inputs' | 'collect_payment_method' | 'confirm_payment_intent' | 'process_payment_intent' | 'process_setup_intent' | 'refund_payment' | 'set_reader_display';
            namespace CollectInputs {
                interface Input {
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
                namespace Input {
                    interface CustomText {
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
                    interface Email {
                        /**
                         * The collected email address
                         */
                        value: string | null;
                    }
                    interface Numeric {
                        /**
                         * The collected number
                         */
                        value: string | null;
                    }
                    interface Phone {
                        /**
                         * The collected phone number
                         */
                        value: string | null;
                    }
                    interface Selection {
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
                    interface Signature {
                        /**
                         * The File ID of a collected signature image
                         */
                        value: string | null;
                    }
                    interface Text {
                        /**
                         * The collected text value
                         */
                        value: string | null;
                    }
                    interface Toggle {
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
                    type Type = 'email' | 'numeric' | 'phone' | 'selection' | 'signature' | 'text';
                    namespace Selection {
                        interface Choice {
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
                        namespace Choice {
                            type Style = 'primary' | 'secondary';
                        }
                    }
                    namespace Toggle {
                        type DefaultValue = 'disabled' | 'enabled';
                        type Value = 'disabled' | 'enabled';
                    }
                }
            }
            namespace CollectPaymentMethod {
                interface CollectConfig {
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
                namespace CollectConfig {
                    interface Tipping {
                        /**
                         * Amount used to calculate tip suggestions on tipping selection screen for this transaction. Must be a positive integer in the smallest currency unit (e.g., 100 cents to represent $1.00 or 100 to represent ¥100, a zero-decimal currency).
                         */
                        amount_eligible?: number;
                    }
                }
            }
            namespace ConfirmPaymentIntent {
                interface ConfirmConfig {
                    /**
                     * If the customer doesn't abandon authenticating the payment, they're redirected to this URL after completion.
                     */
                    return_url?: string;
                }
            }
            namespace ProcessPaymentIntent {
                interface ProcessConfig {
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
                namespace ProcessConfig {
                    interface Tipping {
                        /**
                         * Amount used to calculate tip suggestions on tipping selection screen for this transaction. Must be a positive integer in the smallest currency unit (e.g., 100 cents to represent $1.00 or 100 to represent ¥100, a zero-decimal currency).
                         */
                        amount_eligible?: number;
                    }
                }
            }
            namespace ProcessSetupIntent {
                interface ProcessConfig {
                    /**
                     * Enable customer-initiated cancellation when processing this SetupIntent.
                     */
                    enable_customer_cancellation?: boolean;
                }
            }
            namespace RefundPayment {
                type Reason = 'duplicate' | 'fraudulent' | 'requested_by_customer';
                interface RefundPaymentConfig {
                    /**
                     * Enable customer-initiated cancellation when refunding this payment.
                     */
                    enable_customer_cancellation?: boolean;
                }
            }
            namespace SetReaderDisplay {
                interface Cart {
                    /**
                     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
                     */
                    currency: string;
                    /**
                     * List of line items in the cart.
                     */
                    line_items: Array<Cart.LineItem>;
                    /**
                     * Tax amount for the entire cart. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
                     */
                    tax: number | null;
                    /**
                     * Total amount for the entire cart, including tax. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
                     */
                    total: number;
                }
                namespace Cart {
                    interface LineItem {
                        /**
                         * The amount of the line item. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
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
}
export declare namespace Terminal {
    interface ReaderCreateParams {
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
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Emptyable<MetadataParam>;
    }
}
export declare namespace Terminal {
    interface ReaderRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Terminal {
    interface ReaderUpdateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * The new label of the reader.
         */
        label?: Emptyable<string>;
        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Emptyable<MetadataParam>;
    }
}
export declare namespace Terminal {
    interface ReaderListParams extends PaginationParams {
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
    namespace ReaderListParams {
        type DeviceType = 'bbpos_chipper2x' | 'bbpos_wisepad3' | 'bbpos_wisepos_e' | 'mobile_phone_reader' | 'simulated_stripe_s700' | 'simulated_wisepos_e' | 'stripe_m2' | 'stripe_s700' | 'verifone_P400';
        type Status = 'offline' | 'online';
    }
}
export declare namespace Terminal {
    interface ReaderDeleteParams {
    }
}
export declare namespace Terminal {
    interface ReaderCancelActionParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Terminal {
    interface ReaderCollectInputsParams {
        /**
         * List of inputs to be collected from the customer using the Reader. Maximum 5 inputs.
         */
        inputs: Array<ReaderCollectInputsParams.Input>;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;
    }
    namespace ReaderCollectInputsParams {
        interface Input {
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
        namespace Input {
            interface CustomText {
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
            interface Selection {
                /**
                 * List of choices for the `selection` input
                 */
                choices: Array<Selection.Choice>;
            }
            interface Toggle {
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
            type Type = 'email' | 'numeric' | 'phone' | 'selection' | 'signature' | 'text';
            namespace Selection {
                interface Choice {
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
                namespace Choice {
                    type Style = 'primary' | 'secondary';
                }
            }
            namespace Toggle {
                type DefaultValue = 'disabled' | 'enabled';
            }
        }
    }
}
export declare namespace Terminal {
    interface ReaderCollectPaymentMethodParams {
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
    namespace ReaderCollectPaymentMethodParams {
        interface CollectConfig {
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
        namespace CollectConfig {
            type AllowRedisplay = 'always' | 'limited' | 'unspecified';
            interface Tipping {
                /**
                 * Amount used to calculate tip suggestions on tipping selection screen for this transaction. Must be a positive integer in the smallest currency unit (e.g., 100 cents to represent $1.00 or 100 to represent ¥100, a zero-decimal currency).
                 */
                amount_eligible?: number;
            }
        }
    }
}
export declare namespace Terminal {
    interface ReaderConfirmPaymentIntentParams {
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
    namespace ReaderConfirmPaymentIntentParams {
        interface ConfirmConfig {
            /**
             * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme.
             */
            return_url?: string;
        }
    }
}
export declare namespace Terminal {
    interface ReaderProcessPaymentIntentParams {
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
    namespace ReaderProcessPaymentIntentParams {
        interface ProcessConfig {
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
        namespace ProcessConfig {
            type AllowRedisplay = 'always' | 'limited' | 'unspecified';
            interface Tipping {
                /**
                 * Amount used to calculate tip suggestions on tipping selection screen for this transaction. Must be a positive integer in the smallest currency unit (e.g., 100 cents to represent $1.00 or 100 to represent ¥100, a zero-decimal currency).
                 */
                amount_eligible?: number;
            }
        }
    }
}
export declare namespace Terminal {
    interface ReaderProcessSetupIntentParams {
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
    namespace ReaderProcessSetupIntentParams {
        type AllowRedisplay = 'always' | 'limited' | 'unspecified';
        interface ProcessConfig {
            /**
             * Enables cancel button on transaction screens.
             */
            enable_customer_cancellation?: boolean;
        }
    }
}
export declare namespace Terminal {
    interface ReaderRefundPaymentParams {
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
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
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
    namespace ReaderRefundPaymentParams {
        interface RefundPaymentConfig {
            /**
             * Enables cancel button on transaction screens.
             */
            enable_customer_cancellation?: boolean;
        }
    }
}
export declare namespace Terminal {
    interface ReaderSetReaderDisplayParams {
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
    namespace ReaderSetReaderDisplayParams {
        interface Cart {
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;
            /**
             * Array of line items to display.
             */
            line_items: Array<Cart.LineItem>;
            /**
             * The amount of tax in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
             */
            tax?: number;
            /**
             * Total balance of cart due in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
             */
            total: number;
        }
        namespace Cart {
            interface LineItem {
                /**
                 * The price of the item in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
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
