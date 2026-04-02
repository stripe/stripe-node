// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {PaymentMethod} from './../PaymentMethods.js';
import {MetadataParam, AddressParam, Metadata, Address} from '../../shared.js';
import {RequestOptions, Response} from '../../lib.js';

export class PaymentEvaluationResource extends StripeResource {
  /**
   * Request a Radar API fraud risk score from Stripe for a payment before sending it for external processor authorization.
   */
  create(
    params: Radar.PaymentEvaluationCreateParams,
    options?: RequestOptions
  ): Promise<Response<PaymentEvaluation>> {
    return this._makeRequest(
      'POST',
      '/v1/radar/payment_evaluations',
      params,
      options
    );
  }
}
export interface PaymentEvaluation {
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
  client_device_metadata_details?: Radar.PaymentEvaluation.ClientDeviceMetadataDetails;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created_at: number;

  /**
   * Customer details attached to this payment evaluation.
   */
  customer_details?: Radar.PaymentEvaluation.CustomerDetails;

  /**
   * Event information associated with the payment evaluation, such as refunds, dispute, early fraud warnings, or user interventions.
   */
  events?: Array<Radar.PaymentEvaluation.Event>;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * Indicates the final outcome for the payment evaluation.
   */
  outcome?: Radar.PaymentEvaluation.Outcome | null;

  /**
   * Payment details attached to this payment evaluation.
   */
  payment_details?: Radar.PaymentEvaluation.PaymentDetails;

  /**
   * Recommended action based on the score of the fraudulent_payment signal. Possible values are `block` and `continue`.
   */
  recommended_action: Radar.PaymentEvaluation.RecommendedAction;

  /**
   * Collection of signals for this payment evaluation.
   */
  signals: Radar.PaymentEvaluation.Signals;
}
export namespace Radar {
  export namespace PaymentEvaluation {
    export interface ClientDeviceMetadataDetails {
      /**
       * ID for the Radar Session associated with the payment evaluation. A [Radar Session](https://docs.stripe.com/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
       */
      radar_session: string;
    }

    export interface CustomerDetails {
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

    export interface Event {
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

    export interface Outcome {
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

    export interface PaymentDetails {
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

    export type RecommendedAction = 'block' | 'continue';

    export interface Signals {
      /**
       * A payment evaluation signal with evaluated_at, risk_level, and score fields.
       */
      fraudulent_payment: Signals.FraudulentPayment;
    }

    export namespace Event {
      export interface DisputeOpened {
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

      export interface EarlyFraudWarningReceived {
        /**
         * The type of fraud labeled by the issuer.
         */
        fraud_type: EarlyFraudWarningReceived.FraudType;
      }

      export interface Refunded {
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

      export type Type =
        | 'dispute_opened'
        | 'early_fraud_warning_received'
        | 'refunded'
        | 'user_intervention_raised'
        | 'user_intervention_resolved';

      export interface UserInterventionRaised {
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

      export interface UserInterventionResolved {
        /**
         * Unique ID of this intervention. Use this to provide the result.
         */
        key: string;

        /**
         * Result of the intervention if it has been completed.
         */
        outcome: UserInterventionResolved.Outcome | null;
      }

      export namespace DisputeOpened {
        export type Reason =
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

      export namespace EarlyFraudWarningReceived {
        export type FraudType =
          | 'made_with_lost_card'
          | 'made_with_stolen_card'
          | 'other'
          | 'unauthorized_use_of_card';
      }

      export namespace Refunded {
        export type Reason =
          | 'duplicate'
          | 'fraudulent'
          | 'other'
          | 'requested_by_customer';
      }

      export namespace UserInterventionRaised {
        export interface Custom {
          /**
           * Custom type of user intervention raised. The string must use a snake case description for the type of intervention performed.
           */
          type: string;
        }

        export type Type = '3ds' | 'captcha' | 'custom';
      }

      export namespace UserInterventionResolved {
        export type Outcome = 'abandoned' | 'failed' | 'passed';
      }
    }

    export namespace Outcome {
      export interface MerchantBlocked {
        /**
         * The reason the payment was blocked by the merchant.
         */
        reason: MerchantBlocked.Reason;
      }

      export interface Rejected {
        /**
         * Details of an rejected card outcome attached to this payment evaluation.
         */
        card?: Rejected.Card;
      }

      export interface Succeeded {
        /**
         * Details of an succeeded card outcome attached to this payment evaluation.
         */
        card?: Succeeded.Card;
      }

      export type Type =
        | 'failed'
        | 'merchant_blocked'
        | 'rejected'
        | 'succeeded';

      export namespace MerchantBlocked {
        export type Reason =
          | 'authentication_required'
          | 'blocked_for_fraud'
          | 'invalid_payment'
          | 'other';
      }

      export namespace Rejected {
        export interface Card {
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

        export namespace Card {
          export type AddressLine1Check =
            | 'fail'
            | 'pass'
            | 'unavailable'
            | 'unchecked';

          export type AddressPostalCodeCheck =
            | 'fail'
            | 'pass'
            | 'unavailable'
            | 'unchecked';

          export type CvcCheck = 'fail' | 'pass' | 'unavailable' | 'unchecked';

          export type Reason =
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

      export namespace Succeeded {
        export interface Card {
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

        export namespace Card {
          export type AddressLine1Check =
            | 'fail'
            | 'pass'
            | 'unavailable'
            | 'unchecked';

          export type AddressPostalCodeCheck =
            | 'fail'
            | 'pass'
            | 'unavailable'
            | 'unchecked';

          export type CvcCheck = 'fail' | 'pass' | 'unavailable' | 'unchecked';
        }
      }
    }

    export namespace PaymentDetails {
      export interface MoneyMovementDetails {
        /**
         * Describes card money movement details for the payment evaluation.
         */
        card: MoneyMovementDetails.Card | null;

        /**
         * Describes the type of money movement. Currently only `card` is supported.
         */
        money_movement_type: 'card';
      }

      export interface PaymentMethodDetails {
        /**
         * Billing information associated with the payment evaluation.
         */
        billing_details: PaymentMethodDetails.BillingDetails | null;

        /**
         * The payment method used in this payment evaluation.
         */
        payment_method: string | PaymentMethod;
      }

      export interface ShippingDetails {
        /**
         * Address data.
         */
        address: Address;

        /**
         * Shipping name.
         */
        name: string | null;

        /**
         * Shipping phone number.
         */
        phone: string | null;
      }

      export namespace MoneyMovementDetails {
        export interface Card {
          /**
           * Describes the presence of the customer during the payment.
           */
          customer_presence: Card.CustomerPresence | null;

          /**
           * Describes the type of payment.
           */
          payment_type: Card.PaymentType | null;
        }

        export namespace Card {
          export type CustomerPresence = 'off_session' | 'on_session';

          export type PaymentType =
            | 'one_off'
            | 'recurring'
            | 'setup_one_off'
            | 'setup_recurring';
        }
      }

      export namespace PaymentMethodDetails {
        export interface BillingDetails {
          /**
           * Address data.
           */
          address: Address;

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
    }

    export namespace Signals {
      export interface FraudulentPayment {
        /**
         * The time when this signal was evaluated.
         */
        evaluated_at: number;

        /**
         * Risk level of this signal, based on the score.
         */
        risk_level: FraudulentPayment.RiskLevel;

        /**
         * Score for this insight. Possible values for evaluated payments are -1 and any value between 0 and 100. The value is returned with two decimal places. A score of -1 indicates a test integration and higher scores indicate a higher likelihood of the signal being true.
         */
        score: number;
      }

      export namespace FraudulentPayment {
        export type RiskLevel = 'elevated' | 'highest' | 'normal';
      }
    }
  }
}
export namespace Radar {
  export interface PaymentEvaluationCreateParams {
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
    metadata?: MetadataParam;
  }

  export namespace PaymentEvaluationCreateParams {
    export interface CustomerDetails {
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

    export interface PaymentDetails {
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

    export interface ClientDeviceMetadataDetails {
      /**
       * ID for the Radar Session to associate with the payment evaluation. A [Radar Session](https://docs.stripe.com/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
       */
      radar_session: string;
    }

    export namespace PaymentDetails {
      export interface MoneyMovementDetails {
        /**
         * Describes card money movement details for the payment evaluation.
         */
        card?: MoneyMovementDetails.Card;

        /**
         * Describes the type of money movement. Currently only `card` is supported.
         */
        money_movement_type: 'card';
      }

      export interface PaymentMethodDetails {
        /**
         * Billing information associated with the payment evaluation.
         */
        billing_details?: PaymentMethodDetails.BillingDetails;

        /**
         * ID of the payment method used in this payment evaluation.
         */
        payment_method: string;
      }

      export interface ShippingDetails {
        /**
         * Shipping address.
         */
        address?: AddressParam;

        /**
         * Shipping name.
         */
        name?: string;

        /**
         * Shipping phone number.
         */
        phone?: string;
      }

      export namespace MoneyMovementDetails {
        export interface Card {
          /**
           * Describes the presence of the customer during the payment.
           */
          customer_presence?: Card.CustomerPresence;

          /**
           * Describes the type of payment.
           */
          payment_type?: Card.PaymentType;
        }

        export namespace Card {
          export type CustomerPresence = 'off_session' | 'on_session';

          export type PaymentType =
            | 'one_off'
            | 'recurring'
            | 'setup_one_off'
            | 'setup_recurring';
        }
      }

      export namespace PaymentMethodDetails {
        export interface BillingDetails {
          /**
           * Billing address.
           */
          address?: AddressParam;

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
    }
  }
}
