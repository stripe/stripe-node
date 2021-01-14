// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The TaxRate object.
     */
    interface TaxRate {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'tax_rate';

      /**
       * Defaults to `true`. When set to `false`, this tax rate cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
       */
      active: boolean;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country: string | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
       */
      description: string | null;

      /**
       * The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page.
       */
      display_name: string;

      /**
       * This specifies if the tax rate is inclusive or exclusive.
       */
      inclusive: boolean;

      /**
       * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer's invoice.
       */
      jurisdiction: string | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * This represents the tax rate percent out of 100.
       */
      percentage: number;

      /**
       * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country prefix. For example, "NY" for New York, United States.
       */
      state: string | null;
    }

    interface TaxRateCreateParams {
      /**
       * The display name of the tax rate, which will be shown to users.
       */
      display_name: string;

      /**
       * This specifies if the tax rate is inclusive or exclusive.
       */
      inclusive: boolean;

      /**
       * This represents the tax rate percent out of 100.
       */
      percentage: number;

      /**
       * Flag determining whether the tax rate is active or inactive (archived). Inactive tax rates cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
       */
      active?: boolean;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country?: string;

      /**
       * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer's invoice.
       */
      jurisdiction?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country prefix. For example, "NY" for New York, United States.
       */
      state?: string;
    }

    interface TaxRateRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface TaxRateUpdateParams {
      /**
       * Flag determining whether the tax rate is active or inactive (archived). Inactive tax rates cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
       */
      active?: boolean;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country?: string;

      /**
       * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
       */
      description?: string;

      /**
       * The display name of the tax rate, which will be shown to users.
       */
      display_name?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer's invoice.
       */
      jurisdiction?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country prefix. For example, "NY" for New York, United States.
       */
      state?: string;
    }

    interface TaxRateListParams extends PaginationParams {
      /**
       * Optional flag to filter by tax rates that are either active or inactive (archived).
       */
      active?: boolean;

      /**
       * Optional range for filtering created date.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Optional flag to filter by tax rates that are inclusive (or those that are not inclusive).
       */
      inclusive?: boolean;
    }

    class TaxRatesResource {
      /**
       * Creates a new tax rate.
       */
      create(
        params: TaxRateCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.TaxRate>>;

      /**
       * Retrieves a tax rate with the given ID
       */
      retrieve(
        id: string,
        params?: TaxRateRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.TaxRate>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.TaxRate>>;

      /**
       * Updates an existing tax rate.
       */
      update(
        id: string,
        params?: TaxRateUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.TaxRate>>;

      /**
       * Returns a list of your tax rates. Tax rates are returned sorted by creation date, with the most recently created tax rates appearing first.
       */
      list(
        params?: TaxRateListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.TaxRate>;
      list(options?: RequestOptions): ApiListPromise<Stripe.TaxRate>;
    }
  }
}
