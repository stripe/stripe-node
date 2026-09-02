// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {
  MetadataParam,
  OtherString,
  AddressParam,
  Metadata,
  Address,
} from '../../shared.js';
import {RequestOptions, Response} from '../../lib.js';

export class BillingEvaluationResource extends StripeResource {
  /**
   * Request Stripe Radar's assessment of the non-payment abuse risk of an upcoming charge, before the payment is attempted.
   */
  create(
    params: Radar.BillingEvaluationCreateParams,
    options?: RequestOptions
  ): Promise<Response<BillingEvaluation>> {
    return this._makeRequest(
      'POST',
      '/v1/radar/billing_evaluations',
      params,
      options
    ) as any;
  }
}
export interface BillingEvaluation {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'radar.billing_evaluation';

  /**
   * Client device metadata attached to this billing evaluation.
   */
  client_device_metadata_details?: BillingEvaluation.ClientDeviceMetadataDetails;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created_at: number;

  /**
   * Details of the customer this billing evaluation assesses.
   */
  customer_details?: BillingEvaluation.CustomerDetails;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * Payment details for the upcoming charge this billing evaluation assesses.
   */
  payment_details?: BillingEvaluation.PaymentDetails;

  /**
   * Stripe Radar's signals for the upcoming charge this billing evaluation assesses.
   */
  signals: BillingEvaluation.Signals;
}
export namespace BillingEvaluation {
  export interface ClientDeviceMetadataDetails {
    /**
     * ID for the Radar Session associated with the billing evaluation. A [Radar Session](https://docs.stripe.com/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
     */
    radar_session: string | null;
  }

  export interface CustomerDetails {
    /**
     * The ID of the customer whose upcoming payment was evaluated.
     */
    customer: string | null;

    /**
     * The ID of the Account representing the customer whose upcoming payment was evaluated.
     */
    customer_account: string | null;

    /**
     * Attributes of the customer being evaluated. These are populated from the `customer` or `customer_account` object when one was supplied, and from the request otherwise.
     */
    data: CustomerDetails.Data | null;
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
     * Details about the payment method that will be charged.
     */
    payment_method_details: PaymentDetails.PaymentMethodDetails | null;

    /**
     * Shipping details for the billing evaluation.
     */
    shipping_details: PaymentDetails.ShippingDetails | null;

    /**
     * Payment statement descriptor.
     */
    statement_descriptor: string | null;
  }

  export interface Signals {
    /**
     * Stripe Radar's assessment of the likelihood that the upcoming charge results in non-payment abuse.
     */
    non_payment_abuse: Signals.NonPaymentAbuse | null;
  }

  export namespace CustomerDetails {
    export interface Data {
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
  }

  export namespace PaymentDetails {
    export interface MoneyMovementDetails {
      /**
       * Describes card money movement details.
       */
      card: MoneyMovementDetails.Card | null;

      /**
       * Describes the type of money movement. Currently only `card` is supported.
       */
      money_movement_type: 'card';
    }

    export interface PaymentMethodDetails {
      /**
       * Billing information associated with the billing evaluation.
       */
      billing_details: PaymentMethodDetails.BillingDetails | null;

      /**
       * The payment method that will be charged.
       */
      payment_method: string | null;
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
        export type CustomerPresence =
          | 'off_session'
          | 'on_session'
          | OtherString;

        export type PaymentType =
          | 'one_off'
          | 'recurring'
          | 'setup_one_off'
          | 'setup_recurring'
          | OtherString;
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
    export interface NonPaymentAbuse {
      /**
       * The time when this signal was evaluated.
       */
      evaluated_at: number;

      /**
       * Risk level.
       */
      risk_level: NonPaymentAbuse.RiskLevel;
    }

    export namespace NonPaymentAbuse {
      export type RiskLevel =
        | 'elevated'
        | 'highest'
        | 'low'
        | 'normal'
        | 'not_assessed'
        | 'unknown'
        | OtherString;
    }
  }
}
export namespace Radar {
  export interface BillingEvaluationCreateParams {
    /**
     * Details about the customer whose upcoming payment is being evaluated.
     */
    customer_details: BillingEvaluationCreateParams.CustomerDetails;

    /**
     * Details about the upcoming payment being evaluated.
     */
    payment_details: BillingEvaluationCreateParams.PaymentDetails;

    /**
     * Details about the client device to associate with the billing evaluation.
     */
    client_device_metadata_details?: BillingEvaluationCreateParams.ClientDeviceMetadataDetails;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;
  }

  export namespace BillingEvaluationCreateParams {
    export interface CustomerDetails {
      /**
       * The ID of the customer whose upcoming payment is being evaluated.
       */
      customer?: string;

      /**
       * The ID of the Account representing the customer whose upcoming payment is being evaluated.
       */
      customer_account?: string;

      /**
       * Attributes of the customer being evaluated. Supply these when the customer isn't represented by a Customer or an Account. If `customer` or `customer_account` is also supplied, the attributes on that object are used and these are ignored.
       */
      data?: CustomerDetails.Data;
    }

    export interface PaymentDetails {
      /**
       * The amount that the upcoming payment collects. A positive integer representing how much is charged in the [smallest currency unit](https://docs.stripe.com/currencies#zero-decimal) (for example, 100 cents to charge 1.00 USD or 100 to charge 100 Yen, a zero-decimal currency).
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * An arbitrary description of the upcoming payment.
       */
      description?: string;

      /**
       * Details about how the money for the upcoming payment moves.
       */
      money_movement_details?: PaymentDetails.MoneyMovementDetails;

      /**
       * Details about the payment method that the upcoming payment is charged to.
       */
      payment_method_details: PaymentDetails.PaymentMethodDetails;

      /**
       * Shipping details for the goods or services covered by the upcoming payment.
       */
      shipping_details?: PaymentDetails.ShippingDetails;

      /**
       * The statement descriptor that appears on the customer's statement for the upcoming payment.
       */
      statement_descriptor?: string;
    }

    export interface ClientDeviceMetadataDetails {
      /**
       * ID for the Radar Session to associate with the billing evaluation. A [Radar Session](https://docs.stripe.com/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions about the customer behind the upcoming payment.
       */
      radar_session: string;
    }

    export namespace CustomerDetails {
      export interface Data {
        /**
         * The email address of the customer being evaluated.
         */
        email?: string;

        /**
         * The full name or business name of the customer being evaluated.
         */
        name?: string;

        /**
         * The phone number of the customer being evaluated.
         */
        phone?: string;
      }
    }

    export namespace PaymentDetails {
      export interface MoneyMovementDetails {
        /**
         * Describes card money movement details.
         */
        card?: MoneyMovementDetails.Card;

        /**
         * Describes the type of money movement. Currently only `card` is supported.
         */
        money_movement_type: 'card';
      }

      export interface PaymentMethodDetails {
        /**
         * Billing information associated with the payment method used for the upcoming payment.
         */
        billing_details?: PaymentMethodDetails.BillingDetails;

        /**
         * ID of the payment method that the upcoming payment is charged to.
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
          export type CustomerPresence =
            | 'off_session'
            | 'on_session'
            | OtherString;

          export type PaymentType =
            | 'one_off'
            | 'recurring'
            | 'setup_one_off'
            | 'setup_recurring'
            | OtherString;
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
