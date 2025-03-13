// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
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
       * A list of up to 15 marketing features for this product. These are displayed in [pricing tables](https://stripe.com/docs/payments/checkout/pricing-table).
       */
      marketing_features?: Array<ProductCreateParams.MarketingFeature>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * The dimensions of this product for shipping purposes.
       */
      package_dimensions?: ProductCreateParams.PackageDimensions;

      /**
       * Provisioning configuration for this product.
       */
      provisioning?: ProductCreateParams.Provisioning;

      /**
       * Whether this product is shipped (i.e., physical goods).
       */
      shippable?: boolean;

      /**
       * An arbitrary string to be displayed on your customer's credit card or bank statement. While most banks display this information consistently, some may display it incorrectly or not at all.
       *
       * This may be up to 22 characters. The statement description may not include `<`, `>`, `\`, `"`, `'` characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped.
       *  It must contain at least one letter. Only used for subscription payments.
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
       * A label that represents units of this product. When set, this will be included in customers' receipts, invoices, Checkout, and the customer portal.
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
         * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
         */
        custom_unit_amount?: DefaultPriceData.CustomUnitAmount;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * The recurring components of a price such as `interval` and `interval_count`.
         */
        recurring?: DefaultPriceData.Recurring;

        /**
         * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
         */
        tax_behavior?: DefaultPriceData.TaxBehavior;

        /**
         * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge. One of `unit_amount`, `unit_amount_decimal`, or `custom_unit_amount` is required.
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
           * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
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

        interface Recurring {
          /**
           * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
           */
          interval: Recurring.Interval;

          /**
           * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).
           */
          interval_count?: number;
        }

        namespace Recurring {
          type Interval = 'day' | 'month' | 'week' | 'year';
        }

        type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
      }

      interface MarketingFeature {
        /**
         * The marketing feature name. Up to 80 characters long.
         */
        name: string;
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

      interface Provisioning {
        gift_card?: Provisioning.GiftCard;

        /**
         * The type of provisioning, only `gift_card` currently supported.
         */
        type: 'gift_card';
      }

      namespace Provisioning {
        interface GiftCard {
          fixed_amount?: GiftCard.FixedAmount;

          /**
           * The specific type of gift_card provisioning, only `fixed_amount` currently supported.
           */
          type: 'fixed_amount';
        }

        namespace GiftCard {
          interface FixedAmount {
            /**
             * The initial amount with which the provisioned gift card will be created.
             */
            amount: number;

            currency: string;
          }
        }
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
       * The ID of the [Price](https://stripe.com/docs/api/prices) object that is the default price for this product.
       */
      default_price?: string;

      /**
       * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
       */
      description?: Stripe.Emptyable<string>;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
       */
      images?: Stripe.Emptyable<Array<string>>;

      /**
       * A list of up to 15 marketing features for this product. These are displayed in [pricing tables](https://stripe.com/docs/payments/checkout/pricing-table).
       */
      marketing_features?: Stripe.Emptyable<
        Array<ProductUpdateParams.MarketingFeature>
      >;

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
       *  It must contain at least one letter. May only be set if `type=service`. Only used for subscription payments.
       */
      statement_descriptor?: string;

      /**
       * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
       */
      tax_code?: Stripe.Emptyable<string>;

      /**
       * A label that represents units of this product. When set, this will be included in customers' receipts, invoices, Checkout, and the customer portal. May only be set if `type=service`.
       */
      unit_label?: Stripe.Emptyable<string>;

      /**
       * A URL of a publicly-accessible webpage for this product.
       */
      url?: Stripe.Emptyable<string>;
    }

    namespace ProductUpdateParams {
      interface MarketingFeature {
        /**
         * The marketing feature name. Up to 80 characters long.
         */
        name: string;
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

    interface ProductCreateFeatureParams {
      /**
       * The ID of the [Feature](https://stripe.com/docs/api/entitlements/feature) object attached to this product.
       */
      entitlement_feature: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ProductDeleteFeatureParams {}

    interface ProductListFeaturesParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ProductRetrieveFeatureParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

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
       * Creates a product_feature, which represents a feature attachment to a product
       */
      createFeature(
        id: string,
        params: ProductCreateFeatureParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ProductFeature>>;

      /**
       * Deletes the feature attachment to a product
       */
      deleteFeature(
        productId: string,
        id: string,
        params?: ProductDeleteFeatureParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedProductFeature>>;
      deleteFeature(
        productId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedProductFeature>>;

      /**
       * Retrieve a list of features for a product
       */
      listFeatures(
        id: string,
        params?: ProductListFeaturesParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.ProductFeature>;
      listFeatures(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.ProductFeature>;

      /**
       * Retrieves a product_feature, which represents a feature attachment to a product
       */
      retrieveFeature(
        productId: string,
        id: string,
        params?: ProductRetrieveFeatureParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ProductFeature>>;
      retrieveFeature(
        productId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ProductFeature>>;

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
