// File generated from our OpenAPI spec
declare module 'stripe' {
  namespace Stripe {
    /**
     * The File object.
     */
    interface File {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'file';

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The time at which the file expires and is no longer available in epoch seconds.
       */
      expires_at: number | null;

      /**
       * A filename for the file, suitable for saving to a filesystem.
       */
      filename: string | null;

      /**
       * A list of [file links](https://stripe.com/docs/api#file_links) that point at this file.
       */
      links?: ApiList<Stripe.FileLink> | null;

      /**
       * The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file.
       */
      purpose: File.Purpose;

      /**
       * The size in bytes of the file object.
       */
      size: number;

      /**
       * A user friendly title for the document.
       */
      title: string | null;

      /**
       * The type of the file returned (e.g., `csv`, `pdf`, `jpg`, or `png`).
       */
      type: string | null;

      /**
       * The URL from which the file can be downloaded using your live secret API key.
       */
      url: string | null;
    }

    namespace File {
      type Purpose =
        | 'additional_verification'
        | 'business_icon'
        | 'business_logo'
        | 'customer_signature'
        | 'dispute_evidence'
        | 'identity_document'
        | 'pci_document'
        | 'tax_document_user_upload';
    }

    interface FileCreateParams {}

    interface FileRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface FileListParams extends PaginationParams {
      created?: RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The file purpose to filter queries by. If none is provided, files will not be filtered by purpose.
       */
      purpose?: FileListParams.Purpose;
    }

    namespace FileListParams {
      type Purpose =
        | 'additional_verification'
        | 'business_icon'
        | 'business_logo'
        | 'customer_signature'
        | 'dispute_evidence'
        | 'document_provider_identity_document'
        | 'finance_report_run'
        | 'identity_document'
        | 'pci_document'
        | 'sigma_scheduled_query'
        | 'tax_document_user_upload';
    }

    class FilesResource {
      /**
       * To upload a file to Stripe, you'll need to send a request of type multipart/form-data. The request should contain the file you would like to upload, as well as the parameters for creating a file.
       *
       * All of Stripe's officially supported Client libraries should have support for sending multipart/form-data.
       */
      create(
        params?: FileCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.File>>;
      create(options?: RequestOptions): Promise<Stripe.Response<Stripe.File>>;

      /**
       * Retrieves the details of an existing file object. Supply the unique file ID from a file, and Stripe will return the corresponding file object. To access file contents, see the [File Upload Guide](https://stripe.com/docs/file-upload#download-file-contents).
       */
      retrieve(
        id: string,
        params?: FileRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.File>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.File>>;

      /**
       * Returns a list of the files that your account has access to. The files are returned sorted by creation date, with the most recently created files appearing first.
       */
      list(
        params?: FileListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.File>;
      list(options?: RequestOptions): ApiListPromise<Stripe.File>;
    }
  }
}
