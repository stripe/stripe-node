// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {File} from './Files.js';
import {
  ApplyExpandListItem,
  ApplyExpand,
  Emptyable,
  MetadataParam,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../lib.js';

export class FileLinkResource extends StripeResource {
  /**
   * Returns a list of file links.
   */
  list<E extends string = never>(
    params?: FileLinkListParams<E>,
    options?: RequestOptions
  ): ApiListPromise<ApplyExpandListItem<FileLink, E>> {
    return this._makeRequest('GET', '/v1/file_links', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Creates a new file link object.
   */
  create<E extends string = never>(
    params: FileLinkCreateParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<FileLink, E>>> {
    return this._makeRequest('POST', '/v1/file_links', params, options) as any;
  }
  /**
   * Retrieves the file link with the given ID.
   */
  retrieve<E extends string = never>(
    id: string,
    params?: FileLinkRetrieveParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<FileLink, E>>> {
    return this._makeRequest(
      'GET',
      `/v1/file_links/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates an existing file link object. Expired links can no longer be updated.
   */
  update<E extends string = never>(
    id: string,
    params?: FileLinkUpdateParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<FileLink, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/file_links/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
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
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
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
export interface FileLinkCreateParams<E extends string = string> {
  /**
   * The ID of the file. The file's `purpose` must be one of the following: `business_icon`, `business_logo`, `customer_signature`, `dispute_evidence`, `finance_report_run`, `financial_account_statement`, `identity_document_downloadable`, `issuing_regulatory_reporting`, `pci_document`, `selfie`, `sigma_scheduled_query`, `tax_document_user_upload`, `terminal_android_apk`, or `terminal_reader_splashscreen`.
   */
  file: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<E>;

  /**
   * The link isn't usable after this future timestamp.
   */
  expires_at?: number;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;
}
export interface FileLinkRetrieveParams<E extends string = string> {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<E>;
}
export interface FileLinkUpdateParams<E extends string = string> {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<E>;

  /**
   * A future timestamp after which the link will no longer be usable, or `now` to expire the link immediately.
   */
  expires_at?: Emptyable<'now' | number>;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;
}
export interface FileLinkListParams<E extends string = string>
  extends PaginationParams {
  /**
   * Only return links that were created during the given date interval.
   */
  created?: RangeQueryParam | number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<E>;

  /**
   * Filter links by their expiration status. By default, Stripe returns all links.
   */
  expired?: boolean;

  /**
   * Only return links for the given file.
   */
  file?: string;
}
