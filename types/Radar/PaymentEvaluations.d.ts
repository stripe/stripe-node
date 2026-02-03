// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Radar {
      /**
       * Payment Evaluations represent the risk lifecycle of an externally processed payment. It includes the Radar risk score from Stripe, payment outcome taken by the merchant or processor, and any post transaction events, such as refunds or disputes. See the [Radar API guide](https://docs.stripe.com/radar/multiprocessor) for integration steps.
       */
      interface PaymentEvaluation {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'radar.payment_evaluation';

        /**
         * Client device metadata attached to this payment evaluation.
         */
        client_device_metadata_details?: PaymentEvaluation.ClientDeviceMetadataDetails;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created_at: number;

        /**
         * Customer details attached to this payment evaluation.
         */
        customer_details?: PaymentEvaluation.CustomerDetails;

        /**
         * Event information associated with the payment evaluation, such as refunds, dispute, early fraud warnings, or user interventions.
         */
        events?: Array<PaymentEvaluation.Event>;

        /**
         * Collection of scores and insights for this payment evaluation.
         */
        insights: PaymentEvaluation.Insights;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata | null;

        /**
         * Indicates the final outcome for the payment evaluation.
         */
        outcome?: PaymentEvaluation.Outcome | null;

        /**
         * Payment details attached to this payment evaluation.
         */
        payment_details?: PaymentEvaluation.PaymentDetails;
      }

      namespace PaymentEvaluation {
        interface ClientDeviceMetadataDetails {
          /**
           * ID for the Radar Session associated with the payment evaluation. A [Radar Session](https://docs.stripe.com/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
           */
          radar_session: string;
        }

        interface CustomerDetails {
          /**
           * The ID of the customer associated with the payment evaluation.
           */
          customer: string | null;

          /**
           * The ID of the Account representing the customer associated with the payment evaluation.
           */
          customer_account: string | null;

          /**
           * The customer's email address.
           */
          email: string | null;

          /**
           * The customer's full name or business name.
           */
          name: string | null;

          /**
           * The customer's phone number.
           */
          phone: string | null;
        }

        interface Event {
          /**
           * Dispute opened event details attached to this payment evaluation.
           */
          dispute_opened?: Event.DisputeOpened;

          /**
           * Early Fraud Warning Received event details attached to this payment evaluation.
           */
          early_fraud_warning_received?: Event.EarlyFraudWarningReceived;

          /**
           * Timestamp when the event occurred.
           */
          occurred_at: number;

          /**
           * Refunded Event details attached to this payment evaluation.
           */
          refunded?: Event.Refunded;

          /**
           * Indicates the type of event attached to the payment evaluation.
           */
          type: Event.Type;

          /**
           * User intervention raised event details attached to this payment evaluation
           */
          user_intervention_raised?: Event.UserInterventionRaised;

          /**
           * User Intervention Resolved Event details attached to this payment evaluation
           */
          user_intervention_resolved?: Event.UserInterventionResolved;
        }

        namespace Event {
          interface DisputeOpened {
            /**
             * Amount to dispute for this payment. A positive integer representing how much to charge in [the smallest currency unit](https://docs.stripe.com/currencies#zero-decimal) (for example, 100 cents to charge 1.00 USD or 100 to charge 100 Yen, a zero-decimal currency).
             */
            amount: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;

            /**
             * Reason given by cardholder for dispute.
             */
            reason: DisputeOpened.Reason;
          }

          namespace DisputeOpened {
            type Reason =
              | 'account_not_available'
              | 'credit_not_processed'
              | 'customer_initiated'
              | 'duplicate'
              | 'fraudulent'
              | 'general'
              | 'noncompliant'
              | 'product_not_received'
              | 'product_unacceptable'
              | 'subscription_canceled'
              | 'unrecognized';
          }

          interface EarlyFraudWarningReceived {
            /**
             * The type of fraud labeled by the issuer.
             */
            fraud_type: EarlyFraudWarningReceived.FraudType;
          }

          namespace EarlyFraudWarningReceived {
            type FraudType =
              | 'made_with_lost_card'
              | 'made_with_stolen_card'
              | 'other'
              | 'unauthorized_use_of_card';
          }

          interface Refunded {
            /**
             * Amount refunded for this payment. A positive integer representing how much to charge in [the smallest currency unit](https://docs.stripe.com/currencies#zero-decimal) (for example, 100 cents to charge 1.00 USD or 100 to charge 100 Yen, a zero-decimal currency).
             */
            amount: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;

            /**
             * Indicates the reason for the refund.
             */
            reason: Refunded.Reason;
          }

          namespace Refunded {
            type Reason =
              | 'duplicate'
              | 'fraudulent'
              | 'other'
              | 'requested_by_customer';
          }

          type Type =
            | 'dispute_opened'
            | 'early_fraud_warning_received'
            | 'refunded'
            | 'user_intervention_raised'
            | 'user_intervention_resolved';

          interface UserInterventionRaised {
            /**
             * User intervention raised custom event details attached to this payment evaluation
             */
            custom?: UserInterventionRaised.Custom;

            /**
             * Unique identifier for the user intervention event.
             */
            key: string;

            /**
             * Type of user intervention raised.
             */
            type: UserInterventionRaised.Type;
          }

          namespace UserInterventionRaised {
            interface Custom {
              /**
               * Custom type of user intervention raised. The string must use a snake case description for the type of intervention performed.
               */
              type: string;
            }

            type Type = '3ds' | 'captcha' | 'custom';
          }

          interface UserInterventionResolved {
            /**
             * Unique ID of this intervention. Use this to provide the result.
             */
            key: string;

            /**
             * Result of the intervention if it has been completed.
             */
            outcome: UserInterventionResolved.Outcome | null;
          }

          namespace UserInterventionResolved {
            type Outcome = 'abandoned' | 'failed' | 'passed';
          }
        }

        interface Insights {
          /**
           * Stripe Radar's evaluation of the likelihood of a card issuer decline on this payment.
           */
          card_issuer_decline: Insights.CardIssuerDecline | null;

          /**
           * The timestamp when the evaluation was performed.
           */
          evaluated_at: number;

          /**
           * Scores, insights and recommended action for one scorer for this PaymentEvaluation.
           */
          fraudulent_dispute: Insights.FraudulentDispute;
        }

        namespace Insights {
          interface CardIssuerDecline {
            /**
             * Stripe Radar's evaluation of the likelihood that the payment will be declined by the card issuer. Scores range from 0 to 100, with higher values indicating a higher likelihood of decline.
             */
            model_score: number;

            /**
             * Recommended action based on the model score. Possible values are `block` and `continue`.
             */
            recommended_action: CardIssuerDecline.RecommendedAction;
          }

          namespace CardIssuerDecline {
            type RecommendedAction = 'block' | 'continue';
          }

          interface FraudulentDispute {
            /**
             * Recommended action based on the risk score. Possible values are `block` and `continue`.
             */
            recommended_action: FraudulentDispute.RecommendedAction;

            /**
             * Stripe Radar's evaluation of the risk level of the payment. Possible values for evaluated payments are between 0 and 100, with higher scores indicating higher risk.
             */
            risk_score: number;
          }

          namespace FraudulentDispute {
            type RecommendedAction = 'block' | 'continue';
          }
        }

        interface Outcome {
          /**
           * Details of a merchant_blocked outcome attached to this payment evaluation.
           */
          merchant_blocked?: Outcome.MerchantBlocked;

          /**
           * The PaymentIntent ID associated with the payment evaluation.
           */
          payment_intent_id?: string;

          /**
           * Details of an rejected outcome attached to this payment evaluation.
           */
          rejected?: Outcome.Rejected;

          /**
           * Details of a succeeded outcome attached to this payment evaluation.
           */
          succeeded?: Outcome.Succeeded;

          /**
           * Indicates the outcome of the payment evaluation.
           */
          type: Outcome.Type;
        }

        namespace Outcome {
          interface MerchantBlocked {
            /**
             * The reason the payment was blocked by the merchant.
             */
            reason: MerchantBlocked.Reason;
          }

          namespace MerchantBlocked {
            type Reason =
              | 'authentication_required'
              | 'blocked_for_fraud'
              | 'invalid_payment'
              | 'other';
          }

          interface Rejected {
            /**
             * Details of an rejected card outcome attached to this payment evaluation.
             */
            card?: Rejected.Card;
          }

          namespace Rejected {
            interface Card {
              /**
               * Result of the address line 1 check.
               */
              address_line1_check: Card.AddressLine1Check;

              /**
               * Indicates whether the cardholder provided a postal code and if it matched the cardholder's billing address.
               */
              address_postal_code_check: Card.AddressPostalCodeCheck;

              /**
               * Result of the CVC check.
               */
              cvc_check: Card.CvcCheck;

              /**
               * Card issuer's reason for the network decline.
               */
              reason: Card.Reason;
            }

            namespace Card {
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

              type Reason =
                | 'authentication_failed'
                | 'do_not_honor'
                | 'expired'
                | 'incorrect_cvc'
                | 'incorrect_number'
                | 'incorrect_postal_code'
                | 'insufficient_funds'
                | 'invalid_account'
                | 'lost_card'
                | 'other'
                | 'processing_error'
                | 'reported_stolen'
                | 'try_again_later';
            }
          }

          interface Succeeded {
            /**
             * Details of an succeeded card outcome attached to this payment evaluation.
             */
            card?: Succeeded.Card;
          }

          namespace Succeeded {
            interface Card {
              /**
               * Result of the address line 1 check.
               */
              address_line1_check: Card.AddressLine1Check;

              /**
               * Indicates whether the cardholder provided a postal code and if it matched the cardholder's billing address.
               */
              address_postal_code_check: Card.AddressPostalCodeCheck;

              /**
               * Result of the CVC check.
               */
              cvc_check: Card.CvcCheck;
            }

            namespace Card {
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
          }

          type Type = 'failed' | 'merchant_blocked' | 'rejected' | 'succeeded';
        }

        interface PaymentDetails {
          /**
           * Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://docs.stripe.com/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
           */
          amount: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * An arbitrary string attached to the object. Often useful for displaying to users.
           */
          description: string | null;

          /**
           * Details about the payment's customer presence and type.
           */
          money_movement_details: PaymentDetails.MoneyMovementDetails | null;

          /**
           * Details about the payment method used for the payment.
           */
          payment_method_details: PaymentDetails.PaymentMethodDetails | null;

          /**
           * Shipping details for the payment evaluation.
           */
          shipping_details: PaymentDetails.ShippingDetails | null;

          /**
           * Payment statement descriptor.
           */
          statement_descriptor: string | null;
        }

        namespace PaymentDetails {
          interface MoneyMovementDetails {
            /**
             * Describes card money movement details for the payment evaluation.
             */
            card: MoneyMovementDetails.Card | null;

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
              customer_presence: Card.CustomerPresence | null;

              /**
               * Describes the type of payment.
               */
              payment_type: Card.PaymentType | null;
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
            billing_details: PaymentMethodDetails.BillingDetails | null;

            /**
             * The payment method used in this payment evaluation.
             */
            payment_method: string | Stripe.PaymentMethod;
          }

          namespace PaymentMethodDetails {
            interface BillingDetails {
              /**
               * Address data.
               */
              address: Stripe.Address;

              /**
               * Email address.
               */
              email: string | null;

              /**
               * Full name.
               */
              name: string | null;

              /**
               * Billing phone number (including extension).
               */
              phone: string | null;
            }
          }

          interface ShippingDetails {
            /**
             * Address data.
             */
            address: Stripe.Address;

            /**
             * Shipping name.
             */
            name: string | null;

            /**
             * Shipping phone number.
             */
            phone: string | null;
          }
        }
      }
    }
  }
}
