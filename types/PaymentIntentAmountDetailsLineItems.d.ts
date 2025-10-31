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
       * The discount applied on this line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than 0.
       *
       * This field is mutually exclusive with the `amount_details[discount_amount]` field.
       */
      discount_amount: number | null;

      /**
       * Payment method-specific information for line items.
       */
      payment_method_options: PaymentIntentAmountDetailsLineItem.PaymentMethodOptions | null;

      /**
       * The product code of the line item, such as an SKU. Required for L3 rates. At most 12 characters long.
       */
      product_code: string | null;

      /**
       * The product name of the line item. Required for L3 rates. At most 1024 characters long.
       *
       * For Cards, this field is truncated to 26 alphanumeric characters before being sent to the card networks. For Paypal, this field is truncated to 127 characters.
       */
      product_name: string;

      /**
       * The quantity of items. Required for L3 rates. An integer greater than 0.
       */
      quantity: number;

      /**
       * Contains information about the tax on the item.
       */
      tax: PaymentIntentAmountDetailsLineItem.Tax | null;

      /**
       * The unit cost of the line item represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L3 rates. An integer greater than or equal to 0.
       */
      unit_cost: number;

      /**
       * A unit of measure for the line item, such as gallons, feet, meters, etc. Required for L3 rates. At most 12 alphanumeric characters long.
       */
      unit_of_measure: string | null;
    }

    namespace PaymentIntentAmountDetailsLineItem {
      interface PaymentMethodOptions {
        card?: PaymentMethodOptions.Card;

        card_present?: PaymentMethodOptions.CardPresent;

        klarna?: PaymentMethodOptions.Klarna;

        paypal?: PaymentMethodOptions.Paypal;
      }

      namespace PaymentMethodOptions {
        interface Card {
          commodity_code: string | null;
        }

        interface CardPresent {
          commodity_code: string | null;
        }

        interface Klarna {
          image_url: string | null;

          product_url: string | null;

          reference: string | null;

          subscription_reference: string | null;
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
         * The total amount of tax on the transaction represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Required for L2 rates. An integer greater than or equal to 0.
         *
         * This field is mutually exclusive with the `amount_details[line_items][#][tax][total_tax_amount]` field.
         */
        total_tax_amount: number;
      }
    }
  }
}
