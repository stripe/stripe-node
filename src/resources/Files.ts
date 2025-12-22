// File generated from our OpenAPI spec

import {multipartRequestDataProcessor} from '../multipart.js';
import {StripeResource} from '../StripeResource.js';
import {RequestOptions} from '../lib.js';
import {FileLink} from './FileLinks.js';
import {
  Emptyable,
  MetadataParam,
  PaginationParams,
  RangeQueryParam,
} from '../shared.js';
import {ApiListPromise, Response, ApiList, FileData} from '../lib.js';
const stripeMethod = StripeResource.method;
export class FileResource extends StripeResource {
  /**
   * Returns a list of the files that your account has access to. Stripe sorts and returns the files by their creation dates, placing the most recently created files at the top.
   */
  list(params?: FileListParams, options?: RequestOptions): ApiListPromise<File>;
  list(options?: RequestOptions): ApiListPromise<File>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/files',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * To upload a file to Stripe, you need to send a request of type multipart/form-data. Include the file you want to upload in the request, and the parameters for creating a file.
   *
   * All of Stripe's officially supported Client libraries support sending multipart/form-data.
   */
  create(
    params: FileCreateParams,
    options?: RequestOptions
  ): Promise<Response<File>>;

  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/files',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      host: 'files.stripe.com',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of an existing file object. After you supply a unique file ID, Stripe returns the corresponding file object. Learn how to [access file contents](https://docs.stripe.com/docs/file-upload#download-file-contents).
   */
  retrieve(
    id: string,
    params?: FileRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<File>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<File>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/files/{file}',
    }).call(this, ...args);
  }
}
export interface File {
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
   * The file expires and isn't available at this time in epoch seconds.
   */
  expires_at: number | null;

  /**
   * The suitable name for saving the file to a filesystem.
   */
  filename: string | null;

  /**
   * A list of [file links](https://stripe.com/docs/api#file_links) that point at this file.
   */
  links?: ApiList<FileLink> | null;

  /**
   * The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file.
   */
  purpose: File.Purpose;

  /**
   * The size of the file object in bytes.
   */
  size: number;

  /**
   * A suitable title for the document.
   */
  title: string | null;

  /**
   * The returned file type (for example, `csv`, `pdf`, `jpg`, or `png`).
   */
  type: string | null;

  /**
   * Use your live secret API key to download the file from this URL.
   */
  url: string | null;
}
export namespace File {
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
export namespace FileCreateParams {
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
    metadata?: Emptyable<MetadataParam>;
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
  created?: RangeQueryParam | number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Filter queries by the file purpose. If you don't provide a purpose, the queries return unfiltered files.
   */
  purpose?: FileListParams.Purpose;
}
export namespace FileListParams {
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
