// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * This is an object representing a file hosted on Stripe's servers. The
     * file may have been uploaded by yourself using the [create file](https://stripe.com/docs/api#create_file)
     * request (for example, when uploading dispute evidence) or it may have
     * been created by Stripe (for example, the results of a [Sigma scheduled
     * query](https://stripe.com/docs/api#scheduled_queries)).
     *
     * Related guide: [File upload guide](https://stripe.com/docs/file-upload)
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
  }
}
