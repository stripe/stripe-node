// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface MarginCreateParams {
      /**
       * Percent that will be taken off the subtotal before tax (after all other discounts and promotions) of any invoice to which the margin is applied.
       */
      percent_off: number;

      /**
       * Whether the margin can be applied to invoices, invoice items, or invoice line items or not. Defaults to `true`.
       */
      active?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * Name of the margin, which is displayed to customers, such as on invoices.
       */
      name?: string;
    }

    interface MarginRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface MarginUpdateParams {
      /**
       * Whether the margin can be applied to invoices, invoice items, or invoice line items or not.
       */
      active?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * Name of the margin, which is displayed to customers, such as on invoices.
       */
      name?: string;
    }

    interface MarginListParams extends PaginationParams {
      /**
       * Only return margins that are active or inactive. For example, pass `true` to only list active margins.
       */
      active?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class MarginsResource {
      /**
       * Create a margin object to be used with invoices, invoice items, and invoice line items for a customer to represent a partner discount. A margin has a percent_off which is the percent that will be taken off the subtotal after all items and other discounts and promotions) of any invoices for a customer. Calculation of prorations do not include any partner margins applied on the original invoice item.
       */
      create(
        params: MarginCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Margin>>;

      /**
       * Retrieve a margin object with the given ID.
       */
      retrieve(
        id: string,
        params?: MarginRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Margin>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Margin>>;

      /**
       * Update the specified margin object. Certain fields of the margin object are not editable.
       */
      update(
        id: string,
        params?: MarginUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Margin>>;

      /**
       * Retrieve a list of your margins.
       */
      list(
        params?: MarginListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Margin>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Margin>;
    }
  }
}
