// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, Response} from '../../../lib.js';

export class RecipientVerificationResource extends StripeResource {
  /**
   * Creates a RecipientVerification to verify the recipient you intend to send funds to.
   */
  create(
    params: V2.MoneyManagement.RecipientVerificationCreateParams,
    options?: RequestOptions
  ): Promise<Response<RecipientVerification>> {
    return this._makeRequest(
      'POST',
      '/v2/money_management/recipient_verifications',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves the details of an existing RecipientVerification by passing the unique RecipientVerification ID.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.RecipientVerificationRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<RecipientVerification>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/recipient_verifications/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Acknowledges an existing RecipientVerification. Only RecipientVerification awaiting acknowledgement can be acknowledged.
   */
  acknowledge(
    id: string,
    params?: V2.MoneyManagement.RecipientVerificationAcknowledgeParams,
    options?: RequestOptions
  ): Promise<Response<RecipientVerification>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/recipient_verifications/${id}/acknowledge`,
      params,
      options
    ) as any;
  }
}
export interface RecipientVerification {
  /**
   * The ID of the RecipientVerification.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.recipient_verification';

  /**
   * The OBP/OBT ID that consumed this verification, present if one is successfully created.
   */
  consumed_by?: string;

  /**
   * Time at which the RecipientVerification was created.
   * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
   */
  created: string;

  /**
   * Time at which the RecipientVerification expires, 5 minutes after the creation.
   * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
   */
  expires_at: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Closed Enum. Match level of the RecipientVerification: `match`, `close_match`, `no_match`, `unavailable`.
   */
  match_result: V2.MoneyManagement.RecipientVerification.MatchResult;

  /**
   * Details for the match result.
   */
  match_result_details: V2.MoneyManagement.RecipientVerification.MatchResultDetails;

  /**
   * Closed Enum. Current status of the RecipientVerification: `verified`, `consumed`, `expired`, `awaiting_acknowledgement`, `acknowledged`.
   */
  status: V2.MoneyManagement.RecipientVerification.Status;

  /**
   * Hash containing timestamps of when the object transitioned to a particular status.
   */
  status_transitions?: V2.MoneyManagement.RecipientVerification.StatusTransitions;
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace RecipientVerification {
      export type MatchResult =
        | 'close_match'
        | 'match'
        | 'no_match'
        | 'unavailable';

      export interface MatchResultDetails {
        /**
         * The account name associated with the bank account as provided by the VoP provider, only present if there is a match or close match.
         */
        matched_name?: string;

        /**
         * A message describing the match result.
         */
        message: string;

        /**
         * The name associated with the provided recipient.
         */
        provided_name: string;
      }

      export type Status =
        | 'acknowledged'
        | 'awaiting_acknowledgement'
        | 'consumed'
        | 'expired'
        | 'verified';

      export interface StatusTransitions {
        /**
         * Timestamp describing when a RecipientVerification changed status to `acknowledged`.
         * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
         */
        acknowledged_at?: string;

        /**
         * Timestamp describing when a RecipientVerification changed status to `consumed`.
         * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
         */
        consumed_at?: string;
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface RecipientVerificationCreateParams {
      /**
       * ID of the payout method.
       */
      payout_method: string;

      /**
       * ID of the recipient account. Required if the recipient distinct from the sender. Leave empty if the recipient and sender are the same entity (i.e. for me-to-me payouts).
       */
      recipient?: string;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface RecipientVerificationRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface RecipientVerificationAcknowledgeParams {}
  }
}
