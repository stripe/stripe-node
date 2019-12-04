declare namespace Stripe {
  /**
   * The FileLink object.
   */
  interface FileLink {
    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'file_link';

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * Whether this link is already expired.
     */
    expired?: boolean;

    /**
     * Time at which the link expires.
     */
    expires_at?: number | null;

    /**
     * The file object this link points to.
     */
    file?: string | File;

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
     * The publicly accessible URL to download the file.
     */
    url?: string | null;
  }

  /**
   * Creates a new file link object.
   */
  interface FileLinkCreateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A future timestamp after which the link will no longer be usable.
     */
    expires_at?: number;

    /**
     * The ID of the file. The file's `purpose` must be one of the following: `business_icon`, `business_logo`, `customer_signature`, `dispute_evidence`, `finance_report_run`, `pci_document`, `sigma_scheduled_query`, or `tax_document_user_upload`.
     */
    file: string;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };
  }

  /**
   * Retrieves the file link with the given ID.
   */
  interface FileLinkRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates an existing file link object. Expired links can no longer be updated.
   */
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
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };
  }

  /**
   * Returns a list of file links.
   */
  interface FileLinkListParams {
    created?: number | FileLinkListParams.Created;

    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

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

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  namespace FileLinkListParams {
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
  }

  class FileLinksResource {
    /**
     * Creates a new file link object.
     */
    create(
      params: FileLinkCreateParams,
      options?: RequestOptions
    ): Promise<FileLink>;

    /**
     * Retrieves the file link with the given ID.
     */
    retrieve(
      id: string,
      params?: FileLinkRetrieveParams,
      options?: RequestOptions
    ): Promise<FileLink>;
    retrieve(id: string, options?: RequestOptions): Promise<FileLink>;

    /**
     * Updates an existing file link object. Expired links can no longer be updated.
     */
    update(
      id: string,
      params?: FileLinkUpdateParams,
      options?: RequestOptions
    ): Promise<FileLink>;

    /**
     * Returns a list of file links.
     */
    list(
      params?: FileLinkListParams,
      options?: RequestOptions
    ): ApiListPromise<FileLink>;
    list(options?: RequestOptions): ApiListPromise<FileLink>;
  }
}