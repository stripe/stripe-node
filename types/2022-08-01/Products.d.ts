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
      caption: string | null;

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
      statement_descriptor: string | null;

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
      unit_label: string | null;

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

    interface ProductCreateParams {
      /**
       * The product's name, meant to be displayable to the customer.
       */
      name: string;

      /**
       * Whether the product is currently available for purchase. Defaults to `true`.
       */
      active?: boolean;

      /**
       * A list of up to 5 alphanumeric attributes. Should only be set if type=`good`.
       */
      attributes?: Array<string>;

      /**
       * A short one-line description of the product, meant to be displayable to the customer. May only be set if type=`good`.
       */
      caption?: string;

      /**
       * An array of Connect application names or identifiers that should not be able to order the SKUs for this product. May only be set if type=`good`.
       */
      deactivate_on?: Array<string>;

      /**
       * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object. This Price will be set as the default price for this product.
       */
      default_price_data?: ProductCreateParams.DefaultPriceData;

      /**
       * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * An identifier will be randomly generated by Stripe. You can optionally override this ID, but the ID must be unique across all products in your Stripe account.
       */
      id?: string;

      /**
       * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
       */
      images?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * The dimensions of this product for shipping purposes.
       */
      package_dimensions?: ProductCreateParams.PackageDimensions;

      /**
       * Whether this product is shipped (i.e., physical goods).
       */
      shippable?: boolean;

      /**
       * An arbitrary string to be displayed on your customer's credit card or bank statement. While most banks display this information consistently, some may display it incorrectly or not at all.
       *
       * This may be up to 22 characters. The statement description may not include `<`, `>`, `\`, `"`, `'` characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped.
       *  It must contain at least one letter.
       */
      statement_descriptor?: string;

      /**
       * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
       */
      tax_code?: string;

      /**
       * The type of the product. Defaults to `service` if not explicitly specified, enabling use of this product with Subscriptions and Plans. Set this parameter to `good` to use this product with Orders and SKUs. On API versions before `2018-02-05`, this field defaults to `good` for compatibility reasons.
       */
      type?: ProductCreateParams.Type;

      /**
       * A label that represents units of this product in Stripe and on customers' receipts and invoices. When set, this will be included in associated invoice line item descriptions.
       */
      unit_label?: string;

      /**
       * A URL of a publicly-accessible webpage for this product.
       */
      url?: string;
    }

    namespace ProductCreateParams {
      interface DefaultPriceData {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
         */
        currency_options?: {
          [key: string]: DefaultPriceData.CurrencyOptions;
        };

        /**
         * The recurring components of a price such as `interval` and `interval_count`.
         */
        recurring?: DefaultPriceData.Recurring;

        /**
         * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
         */
        tax_behavior?: DefaultPriceData.TaxBehavior;

        /**
         * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge. One of `unit_amount` or `unit_amount_decimal` is required.
         */
        unit_amount?: number;

        /**
         * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
         */
        unit_amount_decimal?: string;
      }

      namespace DefaultPriceData {
        interface CurrencyOptions {
          /**
           * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
           */
          custom_unit_amount?: CurrencyOptions.CustomUnitAmount;

          /**
           * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
           */
          tax_behavior?: CurrencyOptions.TaxBehavior;

          /**
           * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
           */
          tiers?: Array<CurrencyOptions.Tier>;

          /**
           * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
           */
          unit_amount?: number;

          /**
           * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
           */
          unit_amount_decimal?: string;
        }

        namespace CurrencyOptions {
          interface CustomUnitAmount {
            /**
             * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
             */
            enabled: boolean;

            /**
             * The maximum unit amount the customer can specify for this item.
             */
            maximum?: number;

            /**
             * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
             */
            minimum?: number;

            /**
             * The starting unit amount which can be updated by the customer.
             */
            preset?: number;
          }

          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

          interface Tier {
            /**
             * The flat billing amount for an entire tier, regardless of the number of units in the tier.
             */
            flat_amount?: number;

            /**
             * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
             */
            flat_amount_decimal?: string;

            /**
             * The per unit billing amount for each individual unit for which this tier applies.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;

            /**
             * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
             */
            up_to: 'inf' | number;
          }
        }

        interface Recurring {
          /**
           * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
           */
          interval: Recurring.Interval;

          /**
           * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
           */
          interval_count?: number;
        }

        namespace Recurring {
          type Interval = 'day' | 'month' | 'week' | 'year';
        }

        type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
      }

      interface PackageDimensions {
        /**
         * Height, in inches. Maximum precision is 2 decimal places.
         */
        height: number;

        /**
         * Length, in inches. Maximum precision is 2 decimal places.
         */
        length: number;

        /**
         * Weight, in ounces. Maximum precision is 2 decimal places.
         */
        weight: number;

        /**
         * Width, in inches. Maximum precision is 2 decimal places.
         */
        width: number;
      }

      type Type = 'good' | 'service';
    }

    interface ProductRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ProductUpdateParams {
      /**
       * Whether the product is available for purchase.
       */
      active?: boolean;

      /**
       * A list of up to 5 alphanumeric attributes that each SKU can provide values for (e.g., `["color", "size"]`). If a value for `attributes` is specified, the list specified will replace the existing attributes list on this product. Any attributes not present after the update will be deleted from the SKUs for this product.
       */
      attributes?: Stripe.Emptyable<Array<string>>;

      /**
       * A short one-line description of the product, meant to be displayable to the customer. May only be set if `type=good`.
       */
      caption?: string;

      /**
       * An array of Connect application names or identifiers that should not be able to order the SKUs for this product. May only be set if `type=good`.
       */
      deactivate_on?: Array<string>;

      /**
       * The ID of the [Price](https://stripe.com/docs/api/prices) object that is the default price for this product.
       */
      default_price?: string;

      /**
       * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
       */
      images?: Stripe.Emptyable<Array<string>>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * The product's name, meant to be displayable to the customer.
       */
      name?: string;

      /**
       * The dimensions of this product for shipping purposes.
       */
      package_dimensions?: Stripe.Emptyable<
        ProductUpdateParams.PackageDimensions
      >;

      /**
       * Whether this product is shipped (i.e., physical goods).
       */
      shippable?: boolean;

      /**
       * An arbitrary string to be displayed on your customer's credit card or bank statement. While most banks display this information consistently, some may display it incorrectly or not at all.
       *
       * This may be up to 22 characters. The statement description may not include `<`, `>`, `\`, `"`, `'` characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped.
       *  It must contain at least one letter. May only be set if `type=service`.
       */
      statement_descriptor?: string;

      /**
       * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
       */
      tax_code?: Stripe.Emptyable<string>;

      /**
       * A label that represents units of this product in Stripe and on customers' receipts and invoices. When set, this will be included in associated invoice line item descriptions. May only be set if `type=service`.
       */
      unit_label?: string;

      /**
       * A URL of a publicly-accessible webpage for this product.
       */
      url?: Stripe.Emptyable<string>;
    }

    namespace ProductUpdateParams {
      interface PackageDimensions {
        /**
         * Height, in inches. Maximum precision is 2 decimal places.
         */
        height: number;

        /**
         * Length, in inches. Maximum precision is 2 decimal places.
         */
        length: number;

        /**
         * Weight, in ounces. Maximum precision is 2 decimal places.
         */
        weight: number;

        /**
         * Width, in inches. Maximum precision is 2 decimal places.
         */
        width: number;
      }
    }

    interface ProductListParams extends PaginationParams {
      /**
       * Only return products that are active or inactive (e.g., pass `false` to list all inactive products).
       */
      active?: boolean;

      /**
       * Only return products that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return products with the given IDs. Cannot be used with [starting_after](https://stripe.com/docs/api#list_products-starting_after) or [ending_before](https://stripe.com/docs/api#list_products-ending_before).
       */
      ids?: Array<string>;

      /**
       * Only return products that can be shipped (i.e., physical, not digital products).
       */
      shippable?: boolean;

      /**
       * Only return products of this type.
       */
      type?: ProductListParams.Type;

      /**
       * Only return products with the given url.
       */
      url?: string;
    }

    namespace ProductListParams {
      type Type = 'good' | 'service';
    }

    interface ProductDeleteParams {}

    interface ProductSearchParams {
      /**
       * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for products](https://stripe.com/docs/search#query-fields-for-products).
       */
      query: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
       */
      limit?: number;

      /**
       * A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
       */
      page?: string;
    }

    class ProductsResource {
      /**
       * Creates a new product object.
       */
      create(
        params: ProductCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Product>>;

      /**
       * Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.
       */
      retrieve(
        id: string,
        params?: ProductRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Product>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Product>>;

      /**
       * Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: ProductUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Product>>;

      /**
       * Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.
       */
      list(
        params?: ProductListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Product>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Product>;

      /**
       * Delete a product. Deleting a product is only possible if it has no prices associated with it. Additionally, deleting a product with type=good is only possible if it has no SKUs associated with it.
       */
      del(
        id: string,
        params?: ProductDeleteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedProduct>>;
      del(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedProduct>>;

      /**
       * Search for products you've previously created using Stripe's [Search Query Language](https://stripe.com/docs/search#search-query-language).
       * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
       * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
       * to an hour behind during outages. Search functionality is not available to merchants in India.
       */
      search(
        params: ProductSearchParams,
        options?: RequestOptions
      ): ApiSearchResultPromise<Stripe.Product>;
    }
  }
}
