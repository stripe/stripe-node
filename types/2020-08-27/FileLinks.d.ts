// File generated from our OpenAPI spec
declare module 'stripe' {
  namespace Stripe {
    /**
     * The FileLink object.
     */
    interface FileLink {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'file_link';

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Whether this link is already expired.
       */
      expired: boolean;

      /**
       * Time at which the link expires.
       */
      expires_at: number | null;

      /**
       * The file object this link points to.
       */
      file: string | Stripe.File;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Metadata;

      /**
       * The publicly accessible URL to download the file.
       */
      url: string | null;
    }

    interface FileLinkCreateParams {
      /**
       * The ID of the file. The file's `purpose` must be one of the following: `business_icon`, `business_logo`, `customer_signature`, `dispute_evidence`, `finance_report_run`, `pci_document`, `sigma_scheduled_query`, or `tax_document_user_upload`.
       */
      file: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A future timestamp after which the link will no longer be usable.
       */
      expires_at?: number;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam | null;
    }

    interface FileLinkRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface FileLinkUpdateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A future timestamp after which the link will no longer be usable, or `now` to expire the link immediately.
       */
      expires_at?: 'now' | number | '';

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam | null;
    }

    interface FileLinkListParams extends PaginationParams {
      created?: RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Filter links by their expiration status. By default, all links are returned.
       */
      expired?: boolean;

      /**
       * Only return links for the given file.
       */
      file?: string;
    }

    class FileLinksResource {
      /**
       * Creates a new file link object.
       */
      create(
        params: FileLinkCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.FileLink>>;

      /**
       * Retrieves the file link with the given ID.
       */
      retrieve(
        id: string,
        params?: FileLinkRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.FileLink>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.FileLink>>;

      /**
       * Updates an existing file link object. Expired links can no longer be updated.
       */
      update(
        id: string,
        params?: FileLinkUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.FileLink>>;

      /**
       * Returns a list of file links.
       */
      list(
        params?: FileLinkListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.FileLink>;
      list(options?: RequestOptions): ApiListPromise<Stripe.FileLink>;
    }
  }
}
