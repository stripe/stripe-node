declare namespace Stripe {
  /**
   * The TaxRate object.
   */
  interface TaxRate {
    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'tax_rate';

    /**
     * Defaults to `true`. When set to `false`, this tax rate cannot be applied to objects in the API, but will still be applied to subscriptions and invoices that already have it set.
     */
    active?: boolean;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
     */
    description?: string | null;

    /**
     * The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page.
     */
    display_name?: string;

    /**
     * This specifies if the tax rate is inclusive or exclusive.
     */
    inclusive?: boolean;

    /**
     * The jurisdiction for the tax rate.
     */
    jurisdiction?: string | null;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * This represents the tax rate percent out of 100.
     */
    percentage?: number;
  }

  /**
   * Creates a new tax rate.
   */
  interface TaxRateCreateParams {
    /**
     * Flag determining whether the tax rate is active or inactive. Inactive tax rates continue to work where they are currently applied however they cannot be used for new applications.
     */
    active?: boolean;

    /**
     * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
     */
    description?: string;

    /**
     * The display name of the tax rate, which will be shown to users.
     */
    display_name: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * This specifies if the tax rate is inclusive or exclusive.
     */
    inclusive: boolean;

    /**
     * The jurisdiction for the tax rate.
     */
    jurisdiction?: string;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * This represents the tax rate percent out of 100.
     */
    percentage: number;
  }

  /**
   * Retrieves a tax rate with the given ID
   */
  interface TaxRateRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates an existing tax rate.
   */
  interface TaxRateUpdateParams {
    /**
     * Flag determining whether the tax rate is active or inactive. Inactive tax rates continue to work where they are currently applied however they cannot be used for new applications.
     */
    active?: boolean;

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
     * The jurisdiction for the tax rate.
     */
    jurisdiction?: string;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: {
      [key: string]: string;
    };
  }

  /**
   * Returns a list of your tax rates. Tax rates are returned sorted by creation date, with the most recently created tax rates appearing first.
   */
  interface TaxRateListParams {
    /**
     * Optional flag to filter by tax rates that are either active or not active (archived)
     */
    active?: boolean;

    /**
     * Optional range for filtering created date
     */
    created?: number | TaxRateListParams.Created;

    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Optional flag to filter by tax rates that are inclusive (or those that are not inclusive)
     */
    inclusive?: boolean;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * Optional range for tax rate percentage filtering
     */
    percentage?: number | TaxRateListParams.Percentage;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  namespace TaxRateListParams {
    interface Created {
      /**
       * Minimum value to filter by (exclusive)
       */
      gt?: number;

      /**
       * Minimum value to filter by (inclusive)
       */
      gte?: number;

      /**
       * Maximum value to filter by (exclusive)
       */
      lt?: number;

      /**
       * Maximum value to filter by (inclusive)
       */
      lte?: number;
    }

    interface Percentage {
      /**
       * Minimum value to filter by (exclusive)
       */
      gt?: number;

      /**
       * Minimum value to filter by (inclusive)
       */
      gte?: number;

      /**
       * Maximum value to filter by (exclusive)
       */
      lt?: number;

      /**
       * Maximum value to filter by (inclusive)
       */
      lte?: number;
    }
  }

  class TaxRatesResource {
    /**
     * Creates a new tax rate.
     */
    create(
      params: TaxRateCreateParams,
      options?: RequestOptions
    ): Promise<TaxRate>;

    /**
     * Retrieves a tax rate with the given ID
     */
    retrieve(
      id: string,
      params?: TaxRateRetrieveParams,
      options?: RequestOptions
    ): Promise<TaxRate>;
    retrieve(id: string, options?: RequestOptions): Promise<TaxRate>;

    /**
     * Updates an existing tax rate.
     */
    update(
      id: string,
      params?: TaxRateUpdateParams,
      options?: RequestOptions
    ): Promise<TaxRate>;

    /**
     * Returns a list of your tax rates. Tax rates are returned sorted by creation date, with the most recently created tax rates appearing first.
     */
    list(
      params?: TaxRateListParams,
      options?: RequestOptions
    ): ApiListPromise<TaxRate>;
    list(options?: RequestOptions): ApiListPromise<TaxRate>;
  }
}