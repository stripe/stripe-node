// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {File} from './Files.js';
import {
  Emptyable,
  MetadataParam,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../lib.js';
const stripeMethod = StripeResource.method;
export class FileLinkResource extends StripeResource {
  /**
   * Returns a list of file links.
   */
  list(
    params?: FileLinkListParams,
    options?: RequestOptions
  ): ApiListPromise<FileLink>;
  list(options?: RequestOptions): ApiListPromise<FileLink>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/file_links',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a new file link object.
   */
  create(
    params: FileLinkCreateParams,
    options?: RequestOptions
  ): Promise<Response<FileLink>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/file_links',
    }).call(this, ...args);
  }

  /**
   * Retrieves the file link with the given ID.
   */
  retrieve(
    id: string,
    params?: FileLinkRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<FileLink>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<FileLink>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/file_links/{link}',
    }).call(this, ...args);
  }

  /**
   * Updates an existing file link object. Expired links can no longer be updated.
   */
  update(
    id: string,
    params?: FileLinkUpdateParams,
    options?: RequestOptions
  ): Promise<Response<FileLink>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/file_links/{link}',
    }).call(this, ...args);
  }
}
export interface FileLink {
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
   * Returns if the link is already expired.
   */
  expired: boolean;

  /**
   * Time that the link expires.
   */
  expires_at: number | null;

  /**
   * The file object this link points to.
   */
  file: string | File;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  /**
   * The publicly accessible URL to download the file.
   */
  url: string | null;
}
export interface FileLinkCreateParams {
  /**
   * The ID of the file. The file's `purpose` must be one of the following: `business_icon`, `business_logo`, `customer_signature`, `dispute_evidence`, `finance_report_run`, `financial_account_statement`, `identity_document_downloadable`, `issuing_regulatory_reporting`, `pci_document`, `selfie`, `sigma_scheduled_query`, `tax_document_user_upload`, `terminal_android_apk`, or `terminal_reader_splashscreen`.
   */
  file: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * The link isn't usable after this future timestamp.
   */
  expires_at?: number;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;
}
export interface FileLinkRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface FileLinkUpdateParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * A future timestamp after which the link will no longer be usable, or `now` to expire the link immediately.
   */
  expires_at?: Emptyable<'now' | number>;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;
}
export interface FileLinkListParams extends PaginationParams {
  /**
   * Only return links that were created during the given date interval.
   */
  created?: RangeQueryParam | number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Filter links by their expiration status. By default, Stripe returns all links.
   */
  expired?: boolean;

  /**
   * Only return links for the given file.
   */
  file?: string;
}
