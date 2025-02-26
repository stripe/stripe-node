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
      payment_record: string | null;

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
         * Details of the card used for this payment attempt.
         */
        card?: PaymentMethodDetails.Card;

        /**
         * Custom Payment Methods represent Payment Method types not modeled directly in
         * the Stripe API. This resource consists of details about the custom payment method
         * used for this payment attempt.
         */
        custom?: PaymentMethodDetails.Custom;

        /**
         * ID of the Stripe PaymentMethod used to make this payment.
         */
        payment_method: string | null;

        /**
         * The type of Payment Method used for this payment attempt.
         */
        type: string;
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

        interface Card {
          /**
           * Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          brand: Card.Brand;

          /**
           * When using manual capture, a future timestamp at which the charge will be automatically refunded if uncaptured.
           */
          capture_before?: number;

          /**
           * Check results by Card networks on Card address and CVC at time of payment.
           */
          checks: Card.Checks | null;

          /**
           * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
           */
          country: string | null;

          /**
           * Two-digit number representing the card's expiration month.
           */
          exp_month: number;

          /**
           * Four-digit number representing the card's expiration year.
           */
          exp_year: number;

          /**
           * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
           *
           * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
           */
          fingerprint?: string | null;

          /**
           * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
           */
          funding: Card.Funding;

          /**
           * The last four digits of the card.
           */
          last4: string;

          /**
           * True if this payment was marked as MOTO and out of scope for SCA.
           */
          moto?: boolean;

          /**
           * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          network: Card.Network | null;

          /**
           * If this card has network token credentials, this contains the details of the network token credentials.
           */
          network_token?: Card.NetworkToken | null;

          /**
           * This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. This value will be present if it is returned by the financial network in the authorization response, and null otherwise.
           */
          network_transaction_id: string | null;

          /**
           * Populated if this transaction used 3D Secure authentication.
           */
          three_d_secure: Card.ThreeDSecure | null;
        }

        namespace Card {
          type Brand =
            | 'amex'
            | 'cartes_bancaires'
            | 'diners'
            | 'discover'
            | 'eftpos_au'
            | 'interac'
            | 'jcb'
            | 'link'
            | 'mastercard'
            | 'unionpay'
            | 'unknown'
            | 'visa';

          interface Checks {
            address_line1_check: Checks.AddressLine1Check | null;

            address_postal_code_check: Checks.AddressPostalCodeCheck | null;

            cvc_check: Checks.CvcCheck | null;
          }

          namespace Checks {
            type AddressLine1Check =
              | 'fail'
              | 'pass'
              | 'unavailable'
              | 'unchecked';

            type AddressPostalCodeCheck =
              | 'fail'
              | 'pass'
              | 'unavailable'
              | 'unchecked';

            type CvcCheck = 'fail' | 'pass' | 'unavailable' | 'unchecked';
          }

          type Funding = 'credit' | 'debit' | 'prepaid' | 'unknown';

          type Network =
            | 'amex'
            | 'cartes_bancaires'
            | 'diners'
            | 'discover'
            | 'eftpos_au'
            | 'interac'
            | 'jcb'
            | 'link'
            | 'mastercard'
            | 'unionpay'
            | 'unknown'
            | 'visa';

          interface NetworkToken {
            used: boolean;
          }

          interface ThreeDSecure {
            authentication_flow: ThreeDSecure.AuthenticationFlow | null;

            result: ThreeDSecure.Result | null;

            result_reason: ThreeDSecure.ResultReason | null;

            version: ThreeDSecure.Version | null;
          }

          namespace ThreeDSecure {
            type AuthenticationFlow = 'challenge' | 'frictionless';

            type Result =
              | 'attempt_acknowledged'
              | 'authenticated'
              | 'exempted'
              | 'failed'
              | 'not_supported'
              | 'processing_error';

            type ResultReason =
              | 'abandoned'
              | 'bypassed'
              | 'canceled'
              | 'card_not_enrolled'
              | 'network_not_supported'
              | 'protocol_error'
              | 'rejected';

            type Version = '1.0.2' | '2.1.0' | '2.2.0';
          }
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
