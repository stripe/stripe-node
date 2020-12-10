// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The LineItem object.
     */
    interface LineItem {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'item';

      /**
       * Total before any discounts or taxes is applied.
       */
      amount_subtotal: number | null;

      /**
       * Total after discounts and taxes.
       */
      amount_total: number | null;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users. Defaults to product name.
       */
      description: string;

      /**
       * The discounts applied to the line item.
       */
      discounts?: Array<LineItem.Discount>;

      /**
       * Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products.
       * [Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and prices help you track payment terms. Different physical goods or levels of service should be represented by products, and pricing options should be represented by prices. This approach lets you change prices without having to change your provisioning scheme.
       *
       * For example, you might have a single "gold" product that has prices for $10/month, $100/year, and €9 once.
       *
       * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription), [create an invoice](https://stripe.com/docs/billing/invoices/create), and more about [products and prices](https://stripe.com/docs/billing/prices-guide).
       */
      price: Stripe.Price;

      /**
       * The quantity of products being purchased.
       */
      quantity: number | null;

      /**
       * The taxes applied to the line item.
       */
      taxes?: Array<LineItem.Tax>;
    }

    namespace LineItem {
      interface Discount {
        /**
         * The amount discounted.
         */
        amount: number;

        /**
         * A discount represents the actual application of a coupon to a particular
         * customer. It contains information about when the discount began and when it
         * will end.
         *
         * Related guide: [Applying Discounts to Subscriptions](https://stripe.com/docs/billing/subscriptions/discounts).
         */
        discount: Stripe.Discount;
      }

      interface Tax {
        /**
         * Amount of tax applied for this rate.
         */
        amount: number;

        /**
         * Tax rates can be applied to [invoices](https://stripe.com/docs/billing/invoices/tax-rates), [subscriptions](https://stripe.com/docs/billing/subscriptions/taxes) and [Checkout Sessions](https://stripe.com/docs/payments/checkout/set-up-a-subscription#tax-rates) to collect tax.
         *
         * Related guide: [Tax Rates](https://stripe.com/docs/billing/taxes/tax-rates).
         */
        rate: Stripe.TaxRate;
      }
    }

    interface LineItemListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
