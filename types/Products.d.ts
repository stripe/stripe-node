// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Products describe the specific goods or services you offer to your customers.
     * For example, you might offer a Standard and Premium version of your goods or service; each version would be a separate Product.
     * They can be used in conjunction with [Prices](https://stripe.com/docs/api#prices) to configure pricing in Payment Links, Checkout, and Subscriptions.
     *
     * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription),
     * [share a Payment Link](https://stripe.com/docs/payments/payment-links/overview),
     * [accept payments with Checkout](https://stripe.com/docs/payments/accept-a-payment#create-product-prices-upfront),
     * and more about [Products and Prices](https://stripe.com/docs/products-prices/overview)
     */
    interface Product {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'product';

      /**
       * Whether the product is currently available for purchase.
       */
      active: boolean;

      /**
       * A list of up to 5 attributes that each SKU can provide values for (e.g., `["color", "size"]`).
       */
      attributes: Array<string> | null;

      /**
       * A short one-line description of the product, meant to be displayable to the customer. Only applicable to products of `type=good`.
       */
      caption?: string | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * An array of connect application identifiers that cannot purchase this product. Only applicable to products of `type=good`.
       */
      deactivate_on?: Array<string>;

      /**
       * The ID of the [Price](https://stripe.com/docs/api/prices) object that is the default price for this product.
       */
      default_price?: string | Stripe.Price | null;

      deleted?: void;

      /**
       * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
       */
      description: string | null;

      /**
       * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
       */
      images: Array<string>;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * The product's name, meant to be displayable to the customer.
       */
      name: string;

      /**
       * The dimensions of this product for shipping purposes.
       */
      package_dimensions: Product.PackageDimensions | null;

      /**
       * Whether this product is shipped (i.e., physical goods).
       */
      shippable: boolean | null;

      /**
       * Extra information about a product which will appear on your customer's credit card statement. In the case that multiple products are billed at once, the first statement descriptor will be used.
       */
      statement_descriptor?: string | null;

      /**
       * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
       */
      tax_code: string | Stripe.TaxCode | null;

      /**
       * The type of the product. The product is either of type `good`, which is eligible for use with Orders and SKUs, or `service`, which is eligible for use with Subscriptions and Plans.
       */
      type: Product.Type;

      /**
       * A label that represents units of this product in Stripe and on customers' receipts and invoices. When set, this will be included in associated invoice line item descriptions.
       */
      unit_label?: string | null;

      /**
       * Time at which the object was last updated. Measured in seconds since the Unix epoch.
       */
      updated: number;

      /**
       * A URL of a publicly-accessible webpage for this product.
       */
      url: string | null;
    }

    namespace Product {
      interface PackageDimensions {
        /**
         * Height, in inches.
         */
        height: number;

        /**
         * Length, in inches.
         */
        length: number;

        /**
         * Weight, in ounces.
         */
        weight: number;

        /**
         * Width, in inches.
         */
        width: number;
      }

      type Type = 'good' | 'service';
    }

    /**
     * The DeletedProduct object.
     */
    interface DeletedProduct {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'product';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }
  }
}
