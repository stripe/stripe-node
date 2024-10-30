// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A PaymentRecord represents a payment that happened on or off Stripe.
     */
    interface PaymentRecord {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'payment_record';

      /**
       * Amount object
       */
      amount_canceled: PaymentRecord.AmountCanceled;

      /**
       * Amount object
       */
      amount_failed: PaymentRecord.AmountFailed;

      /**
       * Amount object
       */
      amount_guaranteed: PaymentRecord.AmountGuaranteed;

      /**
       * Amount object
       */
      amount_refunded: PaymentRecord.AmountRefunded;

      /**
       * Amount object
       */
      amount_requested: PaymentRecord.AmountRequested;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Customer information for this payment.
       */
      customer_details: PaymentRecord.CustomerDetails | null;

      /**
       * Whether the customer was present during the transaction.
       */
      customer_presence: PaymentRecord.CustomerPresence | null;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description: string | null;

      /**
       * ID of the latest PaymentAttemptRecord attached to this PaymentRecord.
       */
      latest_payment_attempt_record: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * Information about the method used to make this payment.
       */
      payment_method_details: PaymentRecord.PaymentMethodDetails | null;

      /**
       * An opaque string for manual reconciliation of this payment, for example a check number.
       */
      payment_reference: string | null;

      /**
       * Shipping information for this payment.
       */
      shipping_details: PaymentRecord.ShippingDetails | null;
    }

    namespace PaymentRecord {
      interface AmountCanceled {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A positive integer representing the amount in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) e.g., 100 cents for $1.00 or 100 for ¥100, a zero-decimal currency).
         */
        value: number;
      }

      interface AmountFailed {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A positive integer representing the amount in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) e.g., 100 cents for $1.00 or 100 for ¥100, a zero-decimal currency).
         */
        value: number;
      }

      interface AmountGuaranteed {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A positive integer representing the amount in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) e.g., 100 cents for $1.00 or 100 for ¥100, a zero-decimal currency).
         */
        value: number;
      }

      interface AmountRefunded {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A positive integer representing the amount in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) e.g., 100 cents for $1.00 or 100 for ¥100, a zero-decimal currency).
         */
        value: number;
      }

      interface AmountRequested {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A positive integer representing the amount in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) e.g., 100 cents for $1.00 or 100 for ¥100, a zero-decimal currency).
         */
        value: number;
      }

      interface CustomerDetails {
        /**
         * ID of the Stripe customer for this payment.
         */
        customer: string | null;

        /**
         * The customer's email address.
         */
        email: string | null;

        /**
         * The customer's name.
         */
        name: string | null;

        /**
         * The customer's phone number.
         */
        phone: string | null;
      }

      type CustomerPresence = 'off_session' | 'on_session';

      interface PaymentMethodDetails {
        /**
         * The billing details associated with the method of payment.
         */
        billing_details: PaymentMethodDetails.BillingDetails | null;

        /**
         * Information about the custom (user-defined) payment method used to make this payment.
         */
        custom: PaymentMethodDetails.Custom | null;

        /**
         * ID of the Stripe PaymentMethod used to make this payment.
         */
        payment_method: string | null;

        /**
         * The type of payment method used for this payment attempt.
         */
        type: 'custom';
      }

      namespace PaymentMethodDetails {
        interface BillingDetails {
          /**
           * Address data
           */
          address: Stripe.Address;

          /**
           * The billing email associated with the method of payment.
           */
          email: string | null;

          /**
           * The billing name associated with the method of payment.
           */
          name: string | null;

          /**
           * The billing phone number associated with the method of payment.
           */
          phone: string | null;
        }

        interface Custom {
          /**
           * Display name for the custom (user-defined) payment method type used to make this payment.
           */
          display_name: string;

          /**
           * The Custom Payment Method Type associated with this payment.
           */
          type: string | null;
        }
      }

      interface ShippingDetails {
        /**
         * Address data
         */
        address: Stripe.Address;

        /**
         * The recipient's name.
         */
        name: string | null;

        /**
         * The recipient's phone number.
         */
        phone: string | null;
      }
    }
  }
}
