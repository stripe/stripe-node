declare namespace Stripe {
  /**
   * The File object.
   */
  export interface File {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created?: number;

    /**
     * A filename for the file, suitable for saving to a filesystem.
     */
    filename?: string | null;

    /**
     * Unique identifier for the object.
     */
    id?: string;

    links?: ApiList<FileLink> | null;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'file';

    /**
     * The purpose of the file. Possible values are `business_icon`, `business_logo`, `customer_signature`, `dispute_evidence`, `finance_report_run`, `identity_document`, `pci_document`, `sigma_scheduled_query`, or `tax_document_user_upload`.
     */
    purpose?: string;

    /**
     * The size in bytes of the file object.
     */
    size?: number;

    /**
     * A user friendly title for the document.
     */
    title?: string | null;

    /**
     * The type of the file returned (e.g., `csv`, `pdf`, `jpg`, or `png`).
     */
    type?: string | null;

    /**
     * The URL from which the file can be downloaded using your live secret API key.
     */
    url?: string | null;
  }

  /**
   * Returns a list of the files that your account has access to. The files are returned sorted by creation date, with the most recently created files appearing first.
   */
  export interface FileListParams {
    created?:
      | {
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
      | number;

    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * The file purpose to filter queries by. If none is provided, files will not be filtered by purpose.
     */
    purpose?:
      | 'business_icon'
      | 'business_logo'
      | 'customer_signature'
      | 'dispute_evidence'
      | 'finance_report_run'
      | 'identity_document'
      | 'pci_document'
      | 'sigma_scheduled_query'
      | 'tax_document_user_upload';

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;
  }

  /**
   * Retrieves the details of an existing file object. Supply the unique file ID from a file, and Stripe will return the corresponding file object.
   */
  export interface FileRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * To upload a file to Stripe, you'll need to send a request of type multipart/form-data. The request should contain the file you would like to upload, as well as the parameters for creating a file.
   *
   * All of Stripe's officially supported Client libraries should have support for sending multipart/form-data.
   */
  export interface FileCreateParams {}

  class FileResource {
    /**
     * Returns a list of the files that your account has access to. The files are returned sorted by creation date, with the most recently created files appearing first.
     */
    list(
      params?: FileListParams,
      options?: HeaderOptions
    ): Promise<ApiList<File>>;

    /**
     * Retrieves the details of an existing file object. Supply the unique file ID from a file, and Stripe will return the corresponding file object.
     */
    retrieve(
      id: string,
      params?: FileRetrieveParams,
      options?: HeaderOptions
    ): Promise<File>;

    /**
     * To upload a file to Stripe, you'll need to send a request of type multipart/form-data. The request should contain the file you would like to upload, as well as the parameters for creating a file.
     *
     * All of Stripe's officially supported Client libraries should have support for sending multipart/form-data.
     */
    create(params?: FileCreateParams, options?: HeaderOptions): Promise<File>;
  }
}