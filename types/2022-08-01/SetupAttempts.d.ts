// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A SetupAttempt describes one attempted confirmation of a SetupIntent,
     * whether that confirmation was successful or unsuccessful. You can use
     * SetupAttempts to inspect details of a specific attempt at setting up a
     * payment method using a SetupIntent.
     */
    interface SetupAttempt {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'setup_attempt';

      /**
       * The value of [application](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation.
       */
      application: string | Stripe.Application | null;

      /**
       * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
       *
       * It can only be used for this Stripe Account's own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
       */
      attach_to_self?: boolean;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The value of [customer](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      /**
       * Indicates the directions of money movement for which this payment method is intended to be used.
       *
       * Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
       */
      flow_directions: Array<SetupAttempt.FlowDirection> | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The value of [on_behalf_of](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation.
       */
      on_behalf_of: string | Stripe.Account | null;

      /**
       * ID of the payment method used with this SetupAttempt.
       */
      payment_method: string | Stripe.PaymentMethod;

      payment_method_details: SetupAttempt.PaymentMethodDetails;

      /**
       * The error encountered during this attempt to confirm the SetupIntent, if any.
       */
      setup_error: SetupAttempt.SetupError | null;

      /**
       * ID of the SetupIntent that this attempt belongs to.
       */
      setup_intent: string | Stripe.SetupIntent;

      /**
       * Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`.
       */
      status: string;

      /**
       * The value of [usage](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`.
       */
      usage: string;
    }

    namespace SetupAttempt {
      type FlowDirection = 'inbound' | 'outbound';

      interface PaymentMethodDetails {
        acss_debit?: PaymentMethodDetails.AcssDebit;

        au_becs_debit?: PaymentMethodDetails.AuBecsDebit;

        bacs_debit?: PaymentMethodDetails.BacsDebit;

        bancontact?: PaymentMethodDetails.Bancontact;

        blik?: PaymentMethodDetails.Blik;

        boleto?: PaymentMethodDetails.Boleto;

        card?: PaymentMethodDetails.Card;

        card_present?: PaymentMethodDetails.CardPresent;

        ideal?: PaymentMethodDetails.Ideal;

        klarna?: PaymentMethodDetails.Klarna;

        link?: PaymentMethodDetails.Link;

        sepa_debit?: PaymentMethodDetails.SepaDebit;

        sofort?: PaymentMethodDetails.Sofort;

        /**
         * The type of the payment method used in the SetupIntent (e.g., `card`). An additional hash is included on `payment_method_details` with a name matching this value. It contains confirmation-specific information for the payment method.
         */
        type: string;

        us_bank_account?: PaymentMethodDetails.UsBankAccount;
      }

      namespace PaymentMethodDetails {
        interface AcssDebit {}

        interface AuBecsDebit {}

        interface BacsDebit {}

        interface Bancontact {
          /**
           * Bank code of bank associated with the bank account.
           */
          bank_code: string | null;

          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Bank Identifier Code of the bank associated with the bank account.
           */
          bic: string | null;

          /**
           * The ID of the SEPA Direct Debit PaymentMethod which was generated by this SetupAttempt.
           */
          generated_sepa_debit: string | Stripe.PaymentMethod | null;

          /**
           * The mandate for the SEPA Direct Debit PaymentMethod which was generated by this SetupAttempt.
           */
          generated_sepa_debit_mandate: string | Stripe.Mandate | null;

          /**
           * Last four characters of the IBAN.
           */
          iban_last4: string | null;

          /**
           * Preferred language of the Bancontact authorization page that the customer is redirected to.
           * Can be one of `en`, `de`, `fr`, or `nl`
           */
          preferred_language: Bancontact.PreferredLanguage | null;

          /**
           * Owner's verified full name. Values are verified or provided by Bancontact directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_name: string | null;
        }

        namespace Bancontact {
          type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
        }

        interface Blik {}

        interface Boleto {}

        interface Card {
          /**
           * Populated if this authorization used 3D Secure authentication.
           */
          three_d_secure: Card.ThreeDSecure | null;
        }

        namespace Card {
          interface ThreeDSecure {
            /**
             * For authenticated transactions: how the customer was authenticated by
             * the issuing bank.
             */
            authentication_flow: ThreeDSecure.AuthenticationFlow | null;

            /**
             * Indicates the outcome of 3D Secure authentication.
             */
            result: ThreeDSecure.Result | null;

            /**
             * Additional information about why 3D Secure succeeded or failed based
             * on the `result`.
             */
            result_reason: ThreeDSecure.ResultReason | null;

            /**
             * The version of 3D Secure that was used.
             */
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

        interface CardPresent {
          /**
           * The ID of the Card PaymentMethod which was generated by this SetupAttempt.
           */
          generated_card: string | Stripe.PaymentMethod | null;
        }

        interface Ideal {
          /**
           * The customer's bank. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, or `van_lanschot`.
           */
          bank: Ideal.Bank | null;

          /**
           * The Bank Identifier Code of the customer's bank.
           */
          bic: Ideal.Bic | null;

          /**
           * The ID of the SEPA Direct Debit PaymentMethod which was generated by this SetupAttempt.
           */
          generated_sepa_debit: string | Stripe.PaymentMethod | null;

          /**
           * The mandate for the SEPA Direct Debit PaymentMethod which was generated by this SetupAttempt.
           */
          generated_sepa_debit_mandate: string | Stripe.Mandate | null;

          /**
           * Last four characters of the IBAN.
           */
          iban_last4: string | null;

          /**
           * Owner's verified full name. Values are verified or provided by iDEAL directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_name: string | null;
        }

        namespace Ideal {
          type Bank =
            | 'abn_amro'
            | 'asn_bank'
            | 'bunq'
            | 'handelsbanken'
            | 'ing'
            | 'knab'
            | 'moneyou'
            | 'rabobank'
            | 'regiobank'
            | 'revolut'
            | 'sns_bank'
            | 'triodos_bank'
            | 'van_lanschot';

          type Bic =
            | 'ABNANL2A'
            | 'ASNBNL21'
            | 'BUNQNL2A'
            | 'FVLBNL22'
            | 'HANDNL2A'
            | 'INGBNL2A'
            | 'KNABNL2H'
            | 'MOYONL21'
            | 'RABONL2U'
            | 'RBRBNL21'
            | 'REVOLT21'
            | 'SNSBNL2A'
            | 'TRIONL2U';
        }

        interface Klarna {}

        interface Link {}

        interface SepaDebit {}

        interface Sofort {
          /**
           * Bank code of bank associated with the bank account.
           */
          bank_code: string | null;

          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Bank Identifier Code of the bank associated with the bank account.
           */
          bic: string | null;

          /**
           * The ID of the SEPA Direct Debit PaymentMethod which was generated by this SetupAttempt.
           */
          generated_sepa_debit: string | Stripe.PaymentMethod | null;

          /**
           * The mandate for the SEPA Direct Debit PaymentMethod which was generated by this SetupAttempt.
           */
          generated_sepa_debit_mandate: string | Stripe.Mandate | null;

          /**
           * Last four characters of the IBAN.
           */
          iban_last4: string | null;

          /**
           * Preferred language of the Sofort authorization page that the customer is redirected to.
           * Can be one of `en`, `de`, `fr`, or `nl`
           */
          preferred_language: Sofort.PreferredLanguage | null;

          /**
           * Owner's verified full name. Values are verified or provided by Sofort directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_name: string | null;
        }

        namespace Sofort {
          type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
        }

        interface UsBankAccount {}
      }

      interface SetupError {
        /**
         * For card errors, the ID of the failed charge.
         */
        charge?: string;

        /**
         * For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported.
         */
        code?: string;

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
         * Related guide: [Payment Intents API](https://stripe.com/docs/payments/payment-intents).
         */
        payment_intent?: Stripe.PaymentIntent;

        /**
         * PaymentMethod objects represent your customer's payment instruments.
         * You can use them with [PaymentIntents](https://stripe.com/docs/payments/payment-intents) to collect payments or save them to
         * Customer objects to store instrument details for future payments.
         *
         * Related guides: [Payment Methods](https://stripe.com/docs/payments/payment-methods) and [More Payment Scenarios](https://stripe.com/docs/payments/more-payment-scenarios).
         */
        payment_method?: Stripe.PaymentMethod;

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
         * For example, you could use a SetupIntent to set up and save your customer's card without immediately collecting a payment.
         * Later, you can use [PaymentIntents](https://stripe.com/docs/api#payment_intents) to drive the payment flow.
         *
         * Create a SetupIntent as soon as you're ready to collect your customer's payment credentials.
         * Do not maintain long-lived, unconfirmed SetupIntents as they may no longer be valid.
         * The SetupIntent then transitions through multiple [statuses](https://stripe.com/docs/payments/intents#intent-statuses) as it guides
         * you through the setup process.
         *
         * Successful SetupIntents result in payment credentials that are optimized for future payments.
         * For example, cardholders in [certain regions](https://stripe.com/guides/strong-customer-authentication) may need to be run through
         * [Strong Customer Authentication](https://stripe.com/docs/strong-customer-authentication) at the time of payment method collection
         * in order to streamline later [off-session payments](https://stripe.com/docs/payments/setup-intents).
         * If the SetupIntent is used with a [Customer](https://stripe.com/docs/api#setup_intent_object-customer), upon success,
         * it will automatically attach the resulting payment method to that Customer.
         * We recommend using SetupIntents or [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) on
         * PaymentIntents to save payment methods in order to prevent saving invalid or unoptimized payment methods.
         *
         * By using SetupIntents, you ensure that your customers experience the minimum set of required friction,
         * even as regulations change over time.
         *
         * Related guide: [Setup Intents API](https://stripe.com/docs/payments/setup-intents).
         */
        setup_intent?: Stripe.SetupIntent;

        source?: Stripe.CustomerSource;

        /**
         * The type of error returned. One of `api_error`, `card_error`, `idempotency_error`, or `invalid_request_error`
         */
        type: SetupError.Type;
      }

      namespace SetupError {
        type Type =
          | 'api_error'
          | 'card_error'
          | 'idempotency_error'
          | 'invalid_request_error';
      }
    }

    interface SetupAttemptListParams extends PaginationParams {
      /**
       * Only return SetupAttempts created by the SetupIntent specified by
       * this ID.
       */
      setup_intent: string;

      /**
       * A filter on the list, based on the object `created` field. The value
       * can be a string with an integer Unix timestamp, or it can be a
       * dictionary with a number of different query options.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class SetupAttemptsResource {
      /**
       * Returns a list of SetupAttempts associated with a provided SetupIntent.
       */
      list(
        params: SetupAttemptListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.SetupAttempt>;
    }
  }
}
