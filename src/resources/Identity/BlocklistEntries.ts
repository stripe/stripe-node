// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {VerificationReport} from './VerificationReports.js';
import {VerificationSession} from './VerificationSessions.js';
import {PaginationParams, RangeQueryParam} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;

export class BlocklistEntryResource extends StripeResource {
  /**
   * Returns a list of BlocklistEntry objects associated with your account.
   *
   * The blocklist entries are returned sorted by creation date, with the most recently created
   * entries appearing first.
   *
   * Related guide: [Identity Verification Blocklist](https://docs.stripe.com/docs/identity/review-tools#block-list)
   */
  list(
    params?: Identity.BlocklistEntryListParams,
    options?: RequestOptions
  ): ApiListPromise<BlocklistEntry>;
  list(options?: RequestOptions): ApiListPromise<BlocklistEntry>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/identity/blocklist_entries',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a BlocklistEntry object from a verification report.
   *
   * A blocklist entry prevents future identity verifications that match the same identity information.
   * You can create blocklist entries from verification reports that contain document extracted data
   * or a selfie.
   *
   * Related guide: [Identity Verification Blocklist](https://docs.stripe.com/docs/identity/review-tools#add-a-blocklist-entry)
   */
  create(
    params: Identity.BlocklistEntryCreateParams,
    options?: RequestOptions
  ): Promise<Response<BlocklistEntry>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/identity/blocklist_entries',
    }).call(this, ...args);
  }

  /**
   * Retrieves a BlocklistEntry object by its identifier.
   *
   * Related guide: [Identity Verification Blocklist](https://docs.stripe.com/docs/identity/review-tools#block-list)
   */
  retrieve(
    id: string,
    params?: Identity.BlocklistEntryRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<BlocklistEntry>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<BlocklistEntry>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/identity/blocklist_entries/{id}',
    }).call(this, ...args);
  }

  /**
   * Disables a BlocklistEntry object.
   *
   * After a BlocklistEntry is disabled, it will no longer block future verifications that match
   * the same information. This action is irreversible. To re-enable it, a new BlocklistEntry
   * must be created using the same verification report.
   *
   * Related guide: [Identity Verification Blocklist](https://docs.stripe.com/docs/identity/review-tools#disable-a-blocklist-entry)
   */
  disable(
    id: string,
    params?: Identity.BlocklistEntryDisableParams,
    options?: RequestOptions
  ): Promise<Response<BlocklistEntry>>;
  disable(
    id: string,
    options?: RequestOptions
  ): Promise<Response<BlocklistEntry>>;
  disable(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/identity/blocklist_entries/{id}/disable',
    }).call(this, ...args);
  }
}
export interface BlocklistEntry {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'identity.blocklist_entry';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Time at which you disabled the BlocklistEntry. Measured in seconds since the Unix epoch.
   */
  disabled_at: number | null;

  /**
   * Time at which the BlocklistEntry expires. Measured in seconds since the Unix epoch.
   */
  expires_at: number | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The current status of the BlocklistEntry.
   */
  status: Identity.BlocklistEntry.Status;

  /**
   * The type of BlocklistEntry.
   */
  type: Identity.BlocklistEntry.Type;

  /**
   * The verification report the BlocklistEntry was created from.
   */
  verification_report: string | VerificationReport | null;

  /**
   * The verification session the BlocklistEntry was created from.
   */
  verification_session: string | VerificationSession | null;
}
export namespace Identity {
  export namespace BlocklistEntry {
    export type Status = 'active' | 'disabled' | 'redacted';

    export type Type = 'document' | 'selfie';
  }
}
export namespace Identity {
  export interface BlocklistEntryCreateParams {
    /**
     * The type of blocklist entry to be created.
     */
    entry_type: BlocklistEntryCreateParams.EntryType;

    /**
     * The identifier of the VerificationReport to create the BlocklistEntry from.
     */
    verification_report: string;

    /**
     * When true, the created BlocklistEntry will be used to retroactively unverify matching verifications.
     */
    check_existing_verifications?: boolean;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export namespace BlocklistEntryCreateParams {
    export type EntryType = 'document' | 'selfie';
  }
}
export namespace Identity {
  export interface BlocklistEntryRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Identity {
  export interface BlocklistEntryListParams extends PaginationParams {
    /**
     * Only return BlocklistEntries that were created during the given date interval.
     */
    created?: RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return blocklist entries with the specified status.
     */
    status?: BlocklistEntryListParams.Status;

    /**
     * Only return blocklist entries of the specified type.
     */
    type?: BlocklistEntryListParams.Type;

    /**
     * Only return blocklist entries created from this verification report.
     */
    verification_report?: string;
  }

  export namespace BlocklistEntryListParams {
    export type Status = 'active' | 'disabled' | 'redacted';

    export type Type = 'document' | 'selfie';
  }
}
export namespace Identity {
  export interface BlocklistEntryDisableParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
