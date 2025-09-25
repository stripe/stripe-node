// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * RecipientVerification represents a verification of recipient you intend to send funds to.
         */
        interface RecipientVerification {
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
          match_result: RecipientVerification.MatchResult;

          /**
           * Details for the match result.
           */
          match_result_details: RecipientVerification.MatchResultDetails;

          /**
           * Closed Enum. Current status of the RecipientVerification: `verified`, `consumed`, `expired`, `awaiting_acknowledgement`, `acknowledged`.
           */
          status: RecipientVerification.Status;

          /**
           * Hash containing timestamps of when the object transitioned to a particular status.
           */
          status_transitions?: RecipientVerification.StatusTransitions;
        }

        namespace RecipientVerification {
          type MatchResult =
            | 'close_match'
            | 'match'
            | 'no_match'
            | 'unavailable';

          interface MatchResultDetails {
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

          type Status =
            | 'acknowledged'
            | 'awaiting_acknowledgement'
            | 'consumed'
            | 'expired'
            | 'verified';

          interface StatusTransitions {
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
  }
}
