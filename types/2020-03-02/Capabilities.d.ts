declare module 'stripe' {
  namespace Stripe {
    /**
     * The Capability object.
     */
    interface Capability {
      /**
       * The identifier for the capability.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'capability';

      /**
       * The account for which the capability enables functionality.
       */
      account: string | Stripe.Account;

      /**
       * Whether the capability has been requested.
       */
      requested: boolean;

      /**
       * Time at which the capability was requested. Measured in seconds since the Unix epoch.
       */
      requested_at: number | null;

      requirements?: Capability.Requirements;

      /**
       * The status of the capability. Can be `active`, `inactive`, `pending`, or `unrequested`.
       */
      status: Capability.Status;
    }

    namespace Capability {
      interface Requirements {
        /**
         * The date the fields in `currently_due` must be collected by to keep the capability enabled for the account.
         */
        current_deadline: number | null;

        /**
         * The fields that need to be collected to keep the capability enabled. If not collected by the `current_deadline`, these fields appear in `past_due` as well, and the capability is disabled.
         */
        currently_due: Array<string>;

        /**
         * If the capability is disabled, this string describes why. Possible values are `requirement.fields_needed`, `pending.onboarding`, `pending.review`, `rejected_fraud`, or `rejected.other`.
         */
        disabled_reason: string | null;

        /**
         * The fields that need to be collected again because validation or verification failed for some reason.
         */
        errors?: Array<Requirements.Error>;

        /**
         * The fields that need to be collected assuming all volume thresholds are reached. As they become required, these fields appear in `currently_due` as well, and the `current_deadline` is set.
         */
        eventually_due: Array<string>;

        /**
         * The fields that weren't collected by the `current_deadline`. These fields need to be collected to enable the capability for the account.
         */
        past_due: Array<string>;

        /**
         * Fields that may become required depending on the results of verification or review. An empty array unless an asynchronous verification is pending. If verification fails, the fields in this array become required and move to `currently_due` or `past_due`.
         */
        pending_verification: Array<string>;
      }

      namespace Requirements {
        interface Error {
          /**
           * The code for the type of error.
           */
          code: Error.Code;

          /**
           * An informative message that indicates the error type and provides additional details about the error.
           */
          reason: string;

          /**
           * The specific user onboarding requirement field (in the requirements hash) that needs to be resolved.
           */
          requirement: string;
        }

        namespace Error {
          type Code =
            | 'invalid_address_city_state_postal_code'
            | 'invalid_street_address'
            | 'invalid_value_other'
            | 'verification_document_address_mismatch'
            | 'verification_document_address_missing'
            | 'verification_document_corrupt'
            | 'verification_document_country_not_supported'
            | 'verification_document_dob_mismatch'
            | 'verification_document_duplicate_type'
            | 'verification_document_expired'
            | 'verification_document_failed_copy'
            | 'verification_document_failed_greyscale'
            | 'verification_document_failed_other'
            | 'verification_document_failed_test_mode'
            | 'verification_document_fraudulent'
            | 'verification_document_id_number_mismatch'
            | 'verification_document_id_number_missing'
            | 'verification_document_incomplete'
            | 'verification_document_invalid'
            | 'verification_document_manipulated'
            | 'verification_document_missing_back'
            | 'verification_document_missing_front'
            | 'verification_document_name_mismatch'
            | 'verification_document_name_missing'
            | 'verification_document_nationality_mismatch'
            | 'verification_document_not_readable'
            | 'verification_document_not_uploaded'
            | 'verification_document_photo_mismatch'
            | 'verification_document_too_large'
            | 'verification_document_type_not_supported'
            | 'verification_failed_address_match'
            | 'verification_failed_business_iec_number'
            | 'verification_failed_document_match'
            | 'verification_failed_id_number_match'
            | 'verification_failed_keyed_identity'
            | 'verification_failed_keyed_match'
            | 'verification_failed_name_match'
            | 'verification_failed_other';
        }
      }

      type Status =
        | 'active'
        | 'disabled'
        | 'inactive'
        | 'pending'
        | 'unrequested';
    }

    interface CapabilityRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface CapabilityUpdateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
       */
      requested?: boolean;
    }

    interface CapabilityListParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
