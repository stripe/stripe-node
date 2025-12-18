// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {RequestOptions} from '../Types.js';
import {Customer} from './Customers.js';
import {Response} from '../lib.js';
const stripeMethod = StripeResource.method;
export class CustomerSessionResource extends StripeResource {
  /**
   * Creates a Customer Session object that includes a single-use client secret that you can use on your front-end to grant client-side API access for certain customer resources.
   */
  create(
    params: CustomerSessionCreateParams,
    options?: RequestOptions
  ): Promise<Response<CustomerSession>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/customer_sessions',
    }).call(this, ...args);
  }
}
export /**
 * A Customer Session allows you to grant Stripe's frontend SDKs (like Stripe.js) client-side access
 * control over a Customer.
 *
 * Related guides: [Customer Session with the Payment Element](https://docs.stripe.com/payments/accept-a-payment-deferred?platform=web&type=payment#save-payment-methods),
 * [Customer Session with the Pricing Table](https://docs.stripe.com/payments/checkout/pricing-table#customer-session),
 * [Customer Session with the Buy Button](https://docs.stripe.com/payment-links/buy-button#pass-an-existing-customer).
 */
interface CustomerSession {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'customer_session';

  /**
   * The client secret of this Customer Session. Used on the client to set up secure access to the given `customer`.
   *
   * The client secret can be used to provide access to `customer` from your frontend. It should not be stored, logged, or exposed to anyone other than the relevant customer. Make sure that you have TLS enabled on any page that includes the client secret.
   */
  client_secret: string;

  /**
   * Configuration for the components supported by this Customer Session.
   */
  components?: CustomerSession.Components;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The Customer the Customer Session was created for.
   */
  customer: string | Customer;

  /**
   * The timestamp at which this Customer Session will expire.
   */
  expires_at: number;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
}
export namespace CustomerSession {
  export interface Components {
    /**
     * This hash contains whether the buy button is enabled.
     */
    buy_button: Components.BuyButton;

    /**
     * This hash contains whether the customer sheet is enabled and the features it supports.
     */
    customer_sheet: Components.CustomerSheet;

    /**
     * This hash contains whether the mobile payment element is enabled and the features it supports.
     */
    mobile_payment_element: Components.MobilePaymentElement;

    /**
     * This hash contains whether the Payment Element is enabled and the features it supports.
     */
    payment_element: Components.PaymentElement;

    /**
     * This hash contains whether the pricing table is enabled.
     */
    pricing_table: Components.PricingTable;
  }

  export namespace Components {
    export interface BuyButton {
      /**
       * Whether the buy button is enabled.
       */
      enabled: boolean;
    }

    export interface CustomerSheet {
      /**
       * Whether the customer sheet is enabled.
       */
      enabled: boolean;

      /**
       * This hash defines whether the customer sheet supports certain features.
       */
      features: CustomerSheet.Features | null;
    }

    export interface MobilePaymentElement {
      /**
       * Whether the mobile payment element is enabled.
       */
      enabled: boolean;

      /**
       * This hash defines whether the mobile payment element supports certain features.
       */
      features: MobilePaymentElement.Features | null;
    }

    export interface PaymentElement {
      /**
       * Whether the Payment Element is enabled.
       */
      enabled: boolean;

      /**
       * This hash defines whether the Payment Element supports certain features.
       */
      features: PaymentElement.Features | null;
    }

    export interface PricingTable {
      /**
       * Whether the pricing table is enabled.
       */
      enabled: boolean;
    }

    export namespace CustomerSheet {
      export interface Features {
        /**
         * A list of [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) values that controls which saved payment methods the customer sheet displays by filtering to only show payment methods with an `allow_redisplay` value that is present in this list.
         *
         * If not specified, defaults to ["always"]. In order to display all saved payment methods, specify ["always", "limited", "unspecified"].
         */
        payment_method_allow_redisplay_filters: Array<
          Features.PaymentMethodAllowRedisplayFilter
        > | null;

        /**
         * Controls whether the customer sheet displays the option to remove a saved payment method."
         *
         * Allowing buyers to remove their saved payment methods impacts subscriptions that depend on that payment method. Removing the payment method detaches the [`customer` object](https://docs.stripe.com/api/payment_methods/object#payment_method_object-customer) from that [PaymentMethod](https://docs.stripe.com/api/payment_methods).
         */
        payment_method_remove: Features.PaymentMethodRemove | null;
      }

      export namespace Features {
        export type PaymentMethodAllowRedisplayFilter =
          | 'always'
          | 'limited'
          | 'unspecified';

        export type PaymentMethodRemove = 'disabled' | 'enabled';
      }
    }

    export namespace MobilePaymentElement {
      export interface Features {
        /**
         * A list of [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) values that controls which saved payment methods the mobile payment element displays by filtering to only show payment methods with an `allow_redisplay` value that is present in this list.
         *
         * If not specified, defaults to ["always"]. In order to display all saved payment methods, specify ["always", "limited", "unspecified"].
         */
        payment_method_allow_redisplay_filters: Array<
          Features.PaymentMethodAllowRedisplayFilter
        > | null;

        /**
         * Controls whether or not the mobile payment element shows saved payment methods.
         */
        payment_method_redisplay: Features.PaymentMethodRedisplay | null;

        /**
         * Controls whether the mobile payment element displays the option to remove a saved payment method."
         *
         * Allowing buyers to remove their saved payment methods impacts subscriptions that depend on that payment method. Removing the payment method detaches the [`customer` object](https://docs.stripe.com/api/payment_methods/object#payment_method_object-customer) from that [PaymentMethod](https://docs.stripe.com/api/payment_methods).
         */
        payment_method_remove: Features.PaymentMethodRemove | null;

        /**
         * Controls whether the mobile payment element displays a checkbox offering to save a new payment method.
         *
         * If a customer checks the box, the [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) value on the PaymentMethod is set to `'always'` at confirmation time. For PaymentIntents, the [`setup_future_usage`](https://docs.stripe.com/api/payment_intents/object#payment_intent_object-setup_future_usage) value is also set to the value defined in `payment_method_save_usage`.
         */
        payment_method_save: Features.PaymentMethodSave | null;

        /**
         * Allows overriding the value of allow_override when saving a new payment method when payment_method_save is set to disabled. Use values: "always", "limited", or "unspecified".
         *
         * If not specified, defaults to `nil` (no override value).
         */
        payment_method_save_allow_redisplay_override: Features.PaymentMethodSaveAllowRedisplayOverride | null;
      }

      export namespace Features {
        export type PaymentMethodAllowRedisplayFilter =
          | 'always'
          | 'limited'
          | 'unspecified';

        export type PaymentMethodRedisplay = 'disabled' | 'enabled';

        export type PaymentMethodRemove = 'disabled' | 'enabled';

        export type PaymentMethodSave = 'disabled' | 'enabled';

        export type PaymentMethodSaveAllowRedisplayOverride =
          | 'always'
          | 'limited'
          | 'unspecified';
      }
    }

    export namespace PaymentElement {
      export interface Features {
        /**
         * A list of [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) values that controls which saved payment methods the Payment Element displays by filtering to only show payment methods with an `allow_redisplay` value that is present in this list.
         *
         * If not specified, defaults to ["always"]. In order to display all saved payment methods, specify ["always", "limited", "unspecified"].
         */
        payment_method_allow_redisplay_filters: Array<
          Features.PaymentMethodAllowRedisplayFilter
        >;

        /**
         * Controls whether or not the Payment Element shows saved payment methods. This parameter defaults to `disabled`.
         */
        payment_method_redisplay: Features.PaymentMethodRedisplay;

        /**
         * Determines the max number of saved payment methods for the Payment Element to display. This parameter defaults to `3`. The maximum redisplay limit is `10`.
         */
        payment_method_redisplay_limit: number | null;

        /**
         * Controls whether the Payment Element displays the option to remove a saved payment method. This parameter defaults to `disabled`.
         *
         * Allowing buyers to remove their saved payment methods impacts subscriptions that depend on that payment method. Removing the payment method detaches the [`customer` object](https://docs.stripe.com/api/payment_methods/object#payment_method_object-customer) from that [PaymentMethod](https://docs.stripe.com/api/payment_methods).
         */
        payment_method_remove: Features.PaymentMethodRemove;

        /**
         * Controls whether the Payment Element displays a checkbox offering to save a new payment method. This parameter defaults to `disabled`.
         *
         * If a customer checks the box, the [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) value on the PaymentMethod is set to `'always'` at confirmation time. For PaymentIntents, the [`setup_future_usage`](https://docs.stripe.com/api/payment_intents/object#payment_intent_object-setup_future_usage) value is also set to the value defined in `payment_method_save_usage`.
         */
        payment_method_save: Features.PaymentMethodSave;

        /**
         * When using PaymentIntents and the customer checks the save checkbox, this field determines the [`setup_future_usage`](https://docs.stripe.com/api/payment_intents/object#payment_intent_object-setup_future_usage) value used to confirm the PaymentIntent.
         *
         * When using SetupIntents, directly configure the [`usage`](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-usage) value on SetupIntent creation.
         */
        payment_method_save_usage: Features.PaymentMethodSaveUsage | null;
      }

      export namespace Features {
        export type PaymentMethodAllowRedisplayFilter =
          | 'always'
          | 'limited'
          | 'unspecified';

        export type PaymentMethodRedisplay = 'disabled' | 'enabled';

        export type PaymentMethodRemove = 'disabled' | 'enabled';

        export type PaymentMethodSave = 'disabled' | 'enabled';

        export type PaymentMethodSaveUsage = 'off_session' | 'on_session';
      }
    }
  }
}
export interface CustomerSessionCreateParams {
  /**
   * Configuration for each component. Exactly 1 component must be enabled.
   */
  components: CustomerSessionCreateParams.Components;

  /**
   * The ID of an existing customer for which to create the Customer Session.
   */
  customer: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export namespace CustomerSessionCreateParams {
  export interface Components {
    /**
     * Configuration for buy button.
     */
    buy_button?: Components.BuyButton;

    /**
     * Configuration for the customer sheet.
     */
    customer_sheet?: Components.CustomerSheet;

    /**
     * Configuration for the mobile payment element.
     */
    mobile_payment_element?: Components.MobilePaymentElement;

    /**
     * Configuration for the Payment Element.
     */
    payment_element?: Components.PaymentElement;

    /**
     * Configuration for the pricing table.
     */
    pricing_table?: Components.PricingTable;
  }

  export namespace Components {
    export interface BuyButton {
      /**
       * Whether the buy button is enabled.
       */
      enabled: boolean;
    }

    export interface CustomerSheet {
      /**
       * Whether the customer sheet is enabled.
       */
      enabled: boolean;

      /**
       * This hash defines whether the customer sheet supports certain features.
       */
      features?: CustomerSheet.Features;
    }

    export interface MobilePaymentElement {
      /**
       * Whether the mobile payment element is enabled.
       */
      enabled: boolean;

      /**
       * This hash defines whether the mobile payment element supports certain features.
       */
      features?: MobilePaymentElement.Features;
    }

    export interface PaymentElement {
      /**
       * Whether the Payment Element is enabled.
       */
      enabled: boolean;

      /**
       * This hash defines whether the Payment Element supports certain features.
       */
      features?: PaymentElement.Features;
    }

    export interface PricingTable {
      /**
       * Whether the pricing table is enabled.
       */
      enabled: boolean;
    }

    export namespace CustomerSheet {
      export interface Features {
        /**
         * A list of [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) values that controls which saved payment methods the customer sheet displays by filtering to only show payment methods with an `allow_redisplay` value that is present in this list.
         *
         * If not specified, defaults to ["always"]. In order to display all saved payment methods, specify ["always", "limited", "unspecified"].
         */
        payment_method_allow_redisplay_filters?: Array<
          Features.PaymentMethodAllowRedisplayFilter
        >;

        /**
         * Controls whether the customer sheet displays the option to remove a saved payment method."
         *
         * Allowing buyers to remove their saved payment methods impacts subscriptions that depend on that payment method. Removing the payment method detaches the [`customer` object](https://docs.stripe.com/api/payment_methods/object#payment_method_object-customer) from that [PaymentMethod](https://docs.stripe.com/api/payment_methods).
         */
        payment_method_remove?: Features.PaymentMethodRemove;
      }

      export namespace Features {
        export type PaymentMethodAllowRedisplayFilter =
          | 'always'
          | 'limited'
          | 'unspecified';

        export type PaymentMethodRemove = 'disabled' | 'enabled';
      }
    }

    export namespace MobilePaymentElement {
      export interface Features {
        /**
         * A list of [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) values that controls which saved payment methods the mobile payment element displays by filtering to only show payment methods with an `allow_redisplay` value that is present in this list.
         *
         * If not specified, defaults to ["always"]. In order to display all saved payment methods, specify ["always", "limited", "unspecified"].
         */
        payment_method_allow_redisplay_filters?: Array<
          Features.PaymentMethodAllowRedisplayFilter
        >;

        /**
         * Controls whether or not the mobile payment element shows saved payment methods.
         */
        payment_method_redisplay?: Features.PaymentMethodRedisplay;

        /**
         * Controls whether the mobile payment element displays the option to remove a saved payment method."
         *
         * Allowing buyers to remove their saved payment methods impacts subscriptions that depend on that payment method. Removing the payment method detaches the [`customer` object](https://docs.stripe.com/api/payment_methods/object#payment_method_object-customer) from that [PaymentMethod](https://docs.stripe.com/api/payment_methods).
         */
        payment_method_remove?: Features.PaymentMethodRemove;

        /**
         * Controls whether the mobile payment element displays a checkbox offering to save a new payment method.
         *
         * If a customer checks the box, the [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) value on the PaymentMethod is set to `'always'` at confirmation time. For PaymentIntents, the [`setup_future_usage`](https://docs.stripe.com/api/payment_intents/object#payment_intent_object-setup_future_usage) value is also set to the value defined in `payment_method_save_usage`.
         */
        payment_method_save?: Features.PaymentMethodSave;

        /**
         * Allows overriding the value of allow_override when saving a new payment method when payment_method_save is set to disabled. Use values: "always", "limited", or "unspecified".
         *
         * If not specified, defaults to `nil` (no override value).
         */
        payment_method_save_allow_redisplay_override?: Features.PaymentMethodSaveAllowRedisplayOverride;
      }

      export namespace Features {
        export type PaymentMethodAllowRedisplayFilter =
          | 'always'
          | 'limited'
          | 'unspecified';

        export type PaymentMethodRedisplay = 'disabled' | 'enabled';

        export type PaymentMethodRemove = 'disabled' | 'enabled';

        export type PaymentMethodSave = 'disabled' | 'enabled';

        export type PaymentMethodSaveAllowRedisplayOverride =
          | 'always'
          | 'limited'
          | 'unspecified';
      }
    }

    export namespace PaymentElement {
      export interface Features {
        /**
         * A list of [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) values that controls which saved payment methods the Payment Element displays by filtering to only show payment methods with an `allow_redisplay` value that is present in this list.
         *
         * If not specified, defaults to ["always"]. In order to display all saved payment methods, specify ["always", "limited", "unspecified"].
         */
        payment_method_allow_redisplay_filters?: Array<
          Features.PaymentMethodAllowRedisplayFilter
        >;

        /**
         * Controls whether or not the Payment Element shows saved payment methods. This parameter defaults to `disabled`.
         */
        payment_method_redisplay?: Features.PaymentMethodRedisplay;

        /**
         * Determines the max number of saved payment methods for the Payment Element to display. This parameter defaults to `3`. The maximum redisplay limit is `10`.
         */
        payment_method_redisplay_limit?: number;

        /**
         * Controls whether the Payment Element displays the option to remove a saved payment method. This parameter defaults to `disabled`.
         *
         * Allowing buyers to remove their saved payment methods impacts subscriptions that depend on that payment method. Removing the payment method detaches the [`customer` object](https://docs.stripe.com/api/payment_methods/object#payment_method_object-customer) from that [PaymentMethod](https://docs.stripe.com/api/payment_methods).
         */
        payment_method_remove?: Features.PaymentMethodRemove;

        /**
         * Controls whether the Payment Element displays a checkbox offering to save a new payment method. This parameter defaults to `disabled`.
         *
         * If a customer checks the box, the [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) value on the PaymentMethod is set to `'always'` at confirmation time. For PaymentIntents, the [`setup_future_usage`](https://docs.stripe.com/api/payment_intents/object#payment_intent_object-setup_future_usage) value is also set to the value defined in `payment_method_save_usage`.
         */
        payment_method_save?: Features.PaymentMethodSave;

        /**
         * When using PaymentIntents and the customer checks the save checkbox, this field determines the [`setup_future_usage`](https://docs.stripe.com/api/payment_intents/object#payment_intent_object-setup_future_usage) value used to confirm the PaymentIntent.
         *
         * When using SetupIntents, directly configure the [`usage`](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-usage) value on SetupIntent creation.
         */
        payment_method_save_usage?: Features.PaymentMethodSaveUsage;
      }

      export namespace Features {
        export type PaymentMethodAllowRedisplayFilter =
          | 'always'
          | 'limited'
          | 'unspecified';

        export type PaymentMethodRedisplay = 'disabled' | 'enabled';

        export type PaymentMethodRemove = 'disabled' | 'enabled';

        export type PaymentMethodSave = 'disabled' | 'enabled';

        export type PaymentMethodSaveUsage = 'off_session' | 'on_session';
      }
    }
  }
}
