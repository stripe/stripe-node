// File generated from our OpenAPI spec

export interface FileCreateParams {
  /**
   * A file to upload. Make sure that the specifications follow RFC 2388, which defines file transfers for the `multipart/form-data` protocol.
   */
  file: FileData;

  /**
   * The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file.
   */
  purpose: FileCreateParams.Purpose;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Optional parameters that automatically create a [file link](https://stripe.com/docs/api#file_links) for the newly created file.
   */
  file_link_data?: FileCreateParams.FileLinkData;
}
namespace FileCreateParams {
  export type Purpose =
    | 'account_requirement'
    | 'additional_verification'
    | 'business_icon'
    | 'business_logo'
    | 'customer_signature'
    | 'dispute_evidence'
    | 'identity_document'
    | 'issuing_regulatory_reporting'
    | 'pci_document'
    | 'platform_terms_of_service'
    | 'tax_document_user_upload'
    | 'terminal_android_apk'
    | 'terminal_reader_splashscreen';

  export interface FileLinkData {
    /**
     * Set this to `true` to create a file link for the newly created file. Creating a link is only possible when the file's `purpose` is one of the following: `business_icon`, `business_logo`, `customer_signature`, `dispute_evidence`, `issuing_regulatory_reporting`, `pci_document`, `tax_document_user_upload`, `terminal_android_apk`, or `terminal_reader_splashscreen`.
     */
    create: boolean;

    /**
     * The link isn't available after this future timestamp.
     */
    expires_at?: number;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
  }
}
export interface FileRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface FileListParams extends PaginationParams {
  /**
   * Only return files that were created during the given date interval.
   */
  created?: Stripe.RangeQueryParam | number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Filter queries by the file purpose. If you don't provide a purpose, the queries return unfiltered files.
   */
  purpose?: FileListParams.Purpose;
}
namespace FileListParams {
  export type Purpose =
    | 'account_requirement'
    | 'additional_verification'
    | 'business_icon'
    | 'business_logo'
    | 'customer_signature'
    | 'dispute_evidence'
    | 'document_provider_identity_document'
    | 'finance_report_run'
    | 'financial_account_statement'
    | 'identity_document'
    | 'identity_document_downloadable'
    | 'issuing_regulatory_reporting'
    | 'pci_document'
    | 'platform_terms_of_service'
    | 'selfie'
    | 'sigma_scheduled_query'
    | 'tax_document_user_upload'
    | 'terminal_android_apk'
    | 'terminal_reader_splashscreen';
}
