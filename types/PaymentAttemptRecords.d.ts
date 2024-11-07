// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A Payment Attempt Record represents an individual attempt at making a payment, on or off Stripe.
     * Each payment attempt tries to collect a fixed amount of money from a fixed customer and payment
     * method. Payment Attempt Records are attached to Payment Records. Only one attempt per Payment Record
     * can have guaranteed funds.
     */
    interface PaymentAttemptRecord {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'payment_attempt_record';

      /**
       * A representation of an amount of money, consisting of an amount and a currency.
       */
      amount_canceled: PaymentAttemptRecord.AmountCanceled;

      /**
       * A representation of an amount of money, consisting of an amount and a currency.
       */
      amount_failed: PaymentAttemptRecord.AmountFailed;

      /**
       * A representation of an amount of money, consisting of an amount and a currency.
       */
      amount_guaranteed: PaymentAttemptRecord.AmountGuaranteed;

      /**
       * A representation of an amount of money, consisting of an amount and a currency.
       */
      amount_requested: PaymentAttemptRecord.AmountRequested;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Customer information for this payment.
       */
      customer_details: PaymentAttemptRecord.CustomerDetails | null;

      /**
       * Indicates whether the customer was present in your checkout flow during this payment.
       */
      customer_presence: PaymentAttemptRecord.CustomerPresence | null;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description: string | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * Information about the Payment Method debited for this payment.
       */
      payment_method_details: PaymentAttemptRecord.PaymentMethodDetails | null;

      /**
       * ID of the Payment Record this Payment Attempt Record belongs to.
       */
      payment_record: string;

      /**
       * An opaque string for manual reconciliation of this payment, for example a check number or a payment processor ID.
       */
      payment_reference: string | null;

      /**
       * Shipping information for this payment.
       */
      shipping_details: PaymentAttemptRecord.ShippingDetails | null;
    }

    namespace PaymentAttemptRecord {
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
         * ID of the Stripe Customer associated with this payment.
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
         * The type of Payment Method used for this payment attempt.
         */
        type: 'custom';
      }

      namespace PaymentMethodDetails {
        interface BillingDetails {
          /**
           * A representation of a physical address.
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
           * The custom payment method type associated with this payment.
           */
          type: string | null;
        }
      }

      interface ShippingDetails {
        /**
         * A representation of a physical address.
         */
        address: Stripe.Address;

        /**
         * The shipping recipient's name.
         */
        name: string | null;

        /**
         * The shipping recipient's phone number.
         */
        phone: string | null;
      }
    }
  }
}
