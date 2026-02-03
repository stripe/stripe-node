// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Terminal {
      /**
       * The DeletedReader object.
       */
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

      /**
       * A Reader represents a physical device for accepting payment details.
       *
       * Related guide: [Connecting to a reader](https://docs.stripe.com/terminal/payments/connect-reader)
       */
      interface Reader {
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
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The location identifier of the reader.
         */
        location: string | Stripe.Terminal.Location | null;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * Serial number of the reader.
         */
        serial_number: string;

        /**
         * The networking status of the reader. We do not recommend using this field in flows that may block taking payments.
         */
        status: Reader.Status | null;
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

        namespace Action {
          interface CollectInputs {
            /**
             * List of inputs to be collected.
             */
            inputs: Array<CollectInputs.Input>;

            /**
             * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata: Stripe.Metadata | null;
          }

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

              namespace Toggle {
                type DefaultValue = 'disabled' | 'enabled';

                type Value = 'disabled' | 'enabled';
              }

              type Type =
                | 'email'
                | 'numeric'
                | 'phone'
                | 'selection'
                | 'signature'
                | 'text';
            }
          }

          interface CollectPaymentMethod {
            /**
             * Represents a per-transaction override of a reader configuration
             */
            collect_config?: CollectPaymentMethod.CollectConfig;

            /**
             * Most recent PaymentIntent processed by the reader.
             */
            payment_intent: string | Stripe.PaymentIntent;

            /**
             * PaymentMethod objects represent your customer's payment instruments.
             * You can use them with [PaymentIntents](https://docs.stripe.com/payments/payment-intents) to collect payments or save them to
             * Customer objects to store instrument details for future payments.
             *
             * Related guides: [Payment Methods](https://docs.stripe.com/payments/payment-methods) and [More Payment Scenarios](https://docs.stripe.com/payments/more-payment-scenarios).
             */
            payment_method?: Stripe.PaymentMethod;
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

          interface ConfirmPaymentIntent {
            /**
             * Represents a per-transaction override of a reader configuration
             */
            confirm_config?: ConfirmPaymentIntent.ConfirmConfig;

            /**
             * Most recent PaymentIntent processed by the reader.
             */
            payment_intent: string | Stripe.PaymentIntent;
          }

          namespace ConfirmPaymentIntent {
            interface ConfirmConfig {
              /**
               * If the customer doesn't abandon authenticating the payment, they're redirected to this URL after completion.
               */
              return_url?: string;
            }
          }

          interface ProcessPaymentIntent {
            /**
             * Most recent PaymentIntent processed by the reader.
             */
            payment_intent: string | Stripe.PaymentIntent;

            /**
             * Represents a per-transaction override of a reader configuration
             */
            process_config?: ProcessPaymentIntent.ProcessConfig;
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
            setup_intent: string | Stripe.SetupIntent;
          }

          namespace ProcessSetupIntent {
            interface ProcessConfig {
              /**
               * Enable customer-initiated cancellation when processing this SetupIntent.
               */
              enable_customer_cancellation?: boolean;
            }
          }

          interface RefundPayment {
            /**
             * The amount being refunded.
             */
            amount?: number;

            /**
             * Charge that is being refunded.
             */
            charge?: string | Stripe.Charge;

            /**
             * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata?: Stripe.Metadata;

            /**
             * Payment intent that is being refunded.
             */
            payment_intent?: string | Stripe.PaymentIntent;

            /**
             * The reason for the refund.
             */
            reason?: RefundPayment.Reason;

            /**
             * Unique identifier for the refund object.
             */
            refund?: string | Stripe.Refund;

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

          namespace RefundPayment {
            type Reason = 'duplicate' | 'fraudulent' | 'requested_by_customer';

            interface RefundPaymentConfig {
              /**
               * Enable customer-initiated cancellation when refunding this payment.
               */
              enable_customer_cancellation?: boolean;
            }
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
               * Tax amount for the entire cart. A positive integer in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
               */
              tax: number | null;

              /**
               * Total amount for the entire cart, including tax. A positive integer in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal).
               */
              total: number;
            }

            namespace Cart {
              interface LineItem {
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

          type Status = 'failed' | 'in_progress' | 'succeeded';

          type Type =
            | 'collect_inputs'
            | 'collect_payment_method'
            | 'confirm_payment_intent'
            | 'process_payment_intent'
            | 'process_setup_intent'
            | 'refund_payment'
            | 'set_reader_display';
        }

        type DeviceType =
          | 'bbpos_chipper2x'
          | 'bbpos_wisepad3'
          | 'bbpos_wisepos_e'
          | 'mobile_phone_reader'
          | 'simulated_stripe_s700'
          | 'simulated_wisepos_e'
          | 'stripe_m2'
          | 'stripe_s700'
          | 'verifone_P400';

        type Status = 'offline' | 'online';
      }
    }
  }
}
