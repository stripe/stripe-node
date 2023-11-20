// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface CustomerSessionCreateParams {
      /**
       * Configuration for each component.
       */
      components: CustomerSessionCreateParams.Components;

      /**
       * The ID of an existing customer for which to create the customer session.
       */
      customer: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace CustomerSessionCreateParams {
      interface Components {
        /**
         * Configuration for the payment element.
         */
        payment_element?: Components.PaymentElement;

        /**
         * Configuration for the pricing table.
         */
        pricing_table?: Components.PricingTable;
      }

      namespace Components {
        interface PaymentElement {
          /**
           * Whether the payment element is enabled.
           */
          enabled: boolean;

          /**
           * This hash defines whether the payment element supports certain features.
           */
          features?: PaymentElement.Features;
        }

        namespace PaymentElement {
          interface Features {
            /**
             * Whether the payment element supports detaching a payment method.
             */
            payment_method_detach?: Features.PaymentMethodDetach;

            /**
             * Whether the payment element supports setting a payment method as the customer's default.
             */
            payment_method_set_as_customer_default?: Features.PaymentMethodSetAsCustomerDefault;

            /**
             * Whether the payment element supports updating a payment method.
             */
            payment_method_update?: Features.PaymentMethodUpdate;
          }

          namespace Features {
            type PaymentMethodDetach = 'auto' | 'never';

            type PaymentMethodSetAsCustomerDefault = 'auto' | 'never';

            type PaymentMethodUpdate = 'auto' | 'never';
          }
        }

        interface PricingTable {
          /**
           * Whether pricing table is enabled.
           */
          enabled: boolean;
        }
      }
    }

    class CustomerSessionsResource {
      /**
       * Creates a customer session object that includes a single-use client secret that you can use on your front-end to grant client-side API access for certain customer resources.
       */
      create(
        params: CustomerSessionCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.CustomerSession>>;
    }
  }
}
