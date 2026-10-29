// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
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
      `/v2/money_management/recipient_verifications/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Acknowledges an existing RecipientVerification in the `awaiting_acknowledgement` state.
   */
  acknowledge(
    id: string,
    params?: V2.MoneyManagement.RecipientVerificationAcknowledgeParams,
    options?: RequestOptions
  ): Promise<Response<RecipientVerification>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/recipient_verifications/${encodeURIComponent(
        id
      )}/acknowledge`,
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
   * The resource that consumed this verification.
   */
  consumed_by?: RecipientVerification.ConsumedBy;

  /**
   * Time at which the RecipientVerification was created.
   * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
   */
  created: string;

  /**
   * Time at which the RecipientVerification expires, 5 minutes after the creation. Only applicable for Verification of Payee (VoP) verifications.
   * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
   */
  expires_at?: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Closed Enum. Match level of the RecipientVerification: `match`, `close_match`, `no_match`, `unavailable`.
   */
  match_result: RecipientVerification.MatchResult;

  /**
   * Details for the match result.
   */
  match_result_details: RecipientVerification.MatchResultDetails;

  /**
   * ID of the payout method that was verified.
   */
  payout_method: string;

  /**
   * ID of the recipient account. Omitted for same-entity payouts.
   */
  recipient?: string;

  /**
   * Current status of the recipient verification.
   */
  status: RecipientVerification.Status;

  /**
   * Hash containing timestamps of when the object transitioned to a particular status.
   */
  status_transitions?: RecipientVerification.StatusTransitions;

  /**
   * Open Enum. The type of verification performed: `verification_of_payee`, `confirmation_of_payee`.
   */
  verification_type: RecipientVerification.VerificationType;
}
export namespace RecipientVerification {
  export interface ConsumedBy {
    /**
     * The ID of the OutboundPayment that consumed the RecipientVerification.
     */
    outbound_payment?: string;

    /**
     * The type of resource that consumed the RecipientVerification.
     */
    type: ConsumedBy.Type;
  }

  export type MatchResult =
    | 'close_match'
    | 'match'
    | 'no_match'
    | 'unavailable';

  export interface MatchResultDetails {
    /**
     * The business type matched by the provider. Only present for Confirmation of Payee (CoP) verifications.
     */
    matched_business_type?: MatchResultDetails.MatchedBusinessType;

    /**
     * The account name associated with the bank account as provided by the VoP provider, only present if there is a match or close match.
     */
    matched_name?: string;

    /**
     * A message describing the match result.
     */
    message: string;

    /**
     * The business type provided by the user. Only present for Confirmation of Payee (CoP) verifications.
     */
    provided_business_type?: MatchResultDetails.ProvidedBusinessType;

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

  export type VerificationType =
    | 'confirmation_of_payee'
    | 'verification_of_payee'
    | OtherString;

  export namespace ConsumedBy {
    export type Type = 'outbound_payment' | OtherString;
  }

  export namespace MatchResultDetails {
    export type MatchedBusinessType = 'business' | 'personal';

    export type ProvidedBusinessType = 'business' | 'personal';
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
       * ID of the recipient account. Required if the recipient is different from the sender. Omit for payouts to your own account.
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
