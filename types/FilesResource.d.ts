// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface FileCreateParams {}

    interface FileRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface FileListParams extends PaginationParams {
      created?: Stripe.RangeQueryParam | number;

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
        | 'account_requirement'
        | 'additional_verification'
        | 'business_icon'
        | 'business_logo'
        | 'customer_signature'
        | 'dispute_evidence'
        | 'document_provider_identity_document'
        | 'finance_report_run'
        | 'identity_document'
        | 'identity_document_downloadable'
        | 'pci_document'
        | 'selfie'
        | 'sigma_scheduled_query'
        | 'tax_document_user_upload'
        | 'terminal_reader_splashscreen';
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
