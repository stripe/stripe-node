// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The PaymentIntentAmountDetailsLineItem object.
     */
    interface PaymentIntentAmountDetailsLineItem {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'payment_intent_amount_details_line_item';

      /**
       * The amount an item was discounted for. Positive integer.
       */
      discount_amount: number | null;

      /**
       * Payment method-specific information for line items.
       */
      payment_method_options: PaymentIntentAmountDetailsLineItem.PaymentMethodOptions | null;

      /**
       * Unique identifier of the product. At most 12 characters long.
       */
      product_code: string | null;

      /**
       * Name of the product. At most 100 characters long.
       */
      product_name: string;

      /**
       * Number of items of the product. Positive integer.
       */
      quantity: number;

      /**
       * Contains information about the tax on the item.
       */
      tax: PaymentIntentAmountDetailsLineItem.Tax | null;

      /**
       * Cost of the product. Non-negative integer.
       */
      unit_cost: number;

      /**
       * A unit of measure for the line item, such as gallons, feet, meters, etc.
       */
      unit_of_measure: string | null;
    }

    namespace PaymentIntentAmountDetailsLineItem {
      interface PaymentMethodOptions {
        card?: PaymentMethodOptions.Card;

        klarna?: PaymentMethodOptions.Klarna;

        paypal?: PaymentMethodOptions.Paypal;
      }

      namespace PaymentMethodOptions {
        interface Card {
          commodity_code: string | null;
        }

        interface Klarna {
          image_url: string | null;

          product_url: string | null;
        }

        interface Paypal {
          /**
           * Type of the line item.
           */
          category?: Paypal.Category;

          /**
           * Description of the line item.
           */
          description?: string;

          /**
           * The Stripe account ID of the connected account that sells the item. This is only needed when using [Separate Charges and Transfers](https://docs.stripe.com/connect/separate-charges-and-transfers).
           */
          sold_by?: string;
        }

        namespace Paypal {
          type Category = 'digital_goods' | 'donation' | 'physical_goods';
        }
      }

      interface Tax {
        /**
         * Total portion of the amount that is for tax.
         */
        total_tax_amount: number;
      }
    }
  }
}
