// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Radar {
      interface PaymentEvaluationCreateParams {
        /**
         * Details about the customer associated with the payment evaluation.
         */
        customer_details: PaymentEvaluationCreateParams.CustomerDetails;

        /**
         * Details about the payment.
         */
        payment_details: PaymentEvaluationCreateParams.PaymentDetails;

        /**
         * Details about the Client Device Metadata to associate with the payment evaluation.
         */
        client_device_metadata_details?: PaymentEvaluationCreateParams.ClientDeviceMetadataDetails;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;
      }

      namespace PaymentEvaluationCreateParams {
        interface ClientDeviceMetadataDetails {
          /**
           * ID for the Radar Session to associate with the payment evaluation. A [Radar Session](https://docs.stripe.com/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
           */
          radar_session: string;
        }

        interface CustomerDetails {
          /**
           * The ID of the customer associated with the payment evaluation.
           */
          customer?: string;

          /**
           * The ID of the Account representing the customer associated with the payment evaluation.
           */
          customer_account?: string;

          /**
           * The customer's email address.
           */
          email?: string;

          /**
           * The customer's full name or business name.
           */
          name?: string;

          /**
           * The customer's phone number.
           */
          phone?: string;
        }

        interface PaymentDetails {
          /**
           * The intended amount to collect with this payment. A positive integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal) (for example, 100 cents to charge 1.00 USD or 100 to charge 100 Yen, a zero-decimal currency).
           */
          amount: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * An arbitrary string attached to the object. Often useful for displaying to users.
           */
          description?: string;

          /**
           * Details about the payment's customer presence and type.
           */
          money_movement_details?: PaymentDetails.MoneyMovementDetails;

          /**
           * Details about the payment method to use for the payment.
           */
          payment_method_details: PaymentDetails.PaymentMethodDetails;

          /**
           * Shipping details for the payment evaluation.
           */
          shipping_details?: PaymentDetails.ShippingDetails;

          /**
           * Payment statement descriptor.
           */
          statement_descriptor?: string;
        }

        namespace PaymentDetails {
          interface MoneyMovementDetails {
            /**
             * Describes card money movement details for the payment evaluation.
             */
            card?: MoneyMovementDetails.Card;

            /**
             * Describes the type of money movement. Currently only `card` is supported.
             */
            money_movement_type: 'card';
          }

          namespace MoneyMovementDetails {
            interface Card {
              /**
               * Describes the presence of the customer during the payment.
               */
              customer_presence?: Card.CustomerPresence;

              /**
               * Describes the type of payment.
               */
              payment_type?: Card.PaymentType;
            }

            namespace Card {
              type CustomerPresence = 'off_session' | 'on_session';

              type PaymentType =
                | 'one_off'
                | 'recurring'
                | 'setup_one_off'
                | 'setup_recurring';
            }
          }

          interface PaymentMethodDetails {
            /**
             * Billing information associated with the payment evaluation.
             */
            billing_details?: PaymentMethodDetails.BillingDetails;

            /**
             * ID of the payment method used in this payment evaluation.
             */
            payment_method: string;
          }

          namespace PaymentMethodDetails {
            interface BillingDetails {
              /**
               * Billing address.
               */
              address?: Stripe.AddressParam;

              /**
               * Email address.
               */
              email?: string;

              /**
               * Full name.
               */
              name?: string;

              /**
               * Billing phone number (including extension).
               */
              phone?: string;
            }
          }

          interface ShippingDetails {
            /**
             * Shipping address.
             */
            address?: Stripe.AddressParam;

            /**
             * Shipping name.
             */
            name?: string;

            /**
             * Shipping phone number.
             */
            phone?: string;
          }
        }
      }

      class PaymentEvaluationsResource {
        /**
         * Request a Radar API fraud risk score from Stripe for a payment before sending it for external processor authorization.
         */
        create(
          params: PaymentEvaluationCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.PaymentEvaluation>>;
      }
    }
  }
}
