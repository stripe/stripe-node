// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A customer session allows you to grant client access to Stripe's frontend SDKs (like StripeJs)
     * control over a customer.
     */
    interface CustomerSession {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'customer_session';

      /**
       * The client secret of this customer session. Used on the client to set up secure access to the given `customer`.
       *
       * The client secret can be used to provide access to `customer` from your frontend. It should not be stored, logged, or exposed to anyone other than the relevant customer. Make sure that you have TLS enabled on any page that includes the client secret.
       */
      client_secret: string;

      /**
       * Configuration for the components supported by this customer session.
       */
      components?: CustomerSession.Components;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The customer the customer session was created for.
       */
      customer: string | Stripe.Customer;

      /**
       * The timestamp at which this customer session will expire.
       */
      expires_at: number;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;
    }

    namespace CustomerSession {
      interface Components {
        /**
         * This hash contains whether the buy button is enabled.
         */
        buy_button?: Components.BuyButton;

        /**
         * This hash contains whether the payment element is enabled and the features it supports.
         */
        payment_element?: Components.PaymentElement;

        /**
         * This hash contains whether the pricing table is enabled.
         */
        pricing_table?: Components.PricingTable;
      }

      namespace Components {
        interface BuyButton {
          /**
           * Whether the buy button is enabled.
           */
          enabled: boolean;
        }

        interface PaymentElement {
          /**
           * Whether the payment element is enabled.
           */
          enabled: boolean;

          /**
           * This hash defines whether the payment element supports certain features.
           */
          features: PaymentElement.Features | null;
        }

        namespace PaymentElement {
          interface Features {
            /**
             * Controls whether the Payment Element allows the removal of a saved payment method.
             */
            payment_method_remove: Features.PaymentMethodRemove;

            /**
             * Controls whether the Payment Element offers to save a new payment method.
             */
            payment_method_save: Features.PaymentMethodSave;

            /**
             * Controls whether the Payment Element offers to set a payment method as the default.
             */
            payment_method_set_as_default: Features.PaymentMethodSetAsDefault;

            /**
             * Controls whether the Payment Element allows the updating of a saved payment method.
             */
            payment_method_update: Features.PaymentMethodUpdate;
          }

          namespace Features {
            type PaymentMethodRemove = 'auto' | 'never';

            type PaymentMethodSave = 'auto' | 'never';

            type PaymentMethodSetAsDefault = 'auto' | 'never';

            type PaymentMethodUpdate = 'auto' | 'never';
          }
        }

        interface PricingTable {
          /**
           * Whether the pricing table is enabled.
           */
          enabled: boolean;
        }
      }
    }
  }
}
