// File generated from our OpenAPI spec

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

      future_requirements?: Capability.FutureRequirements;

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
      interface FutureRequirements {
        /**
         * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
         */
        alternatives: Array<FutureRequirements.Alternative> | null;

        /**
         * Date on which `future_requirements` merges with the main `requirements` hash and `future_requirements` becomes empty. After the transition, `currently_due` requirements may immediately become `past_due`, but the account may also be given a grace period depending on the capability's enablement state prior to transitioning.
         */
        current_deadline: number | null;

        /**
         * Fields that need to be collected to keep the capability enabled. If not collected by `future_requirements[current_deadline]`, these fields will transition to the main `requirements` hash.
         */
        currently_due: Array<string>;

        /**
         * This is typed as a string for consistency with `requirements.disabled_reason`, but it safe to assume `future_requirements.disabled_reason` is empty because fields in `future_requirements` will never disable the account.
         */
        disabled_reason: string | null;

        /**
         * Fields that are `currently_due` and need to be collected again because validation or verification failed.
         */
        errors: Array<FutureRequirements.Error>;

        /**
         * Fields that need to be collected assuming all volume thresholds are reached. As they become required, they appear in `currently_due` as well.
         */
        eventually_due: Array<string>;

        /**
         * Fields that weren't collected by `requirements.current_deadline`. These fields need to be collected to enable the capability on the account. New fields will never appear here; `future_requirements.past_due` will always be a subset of `requirements.past_due`.
         */
        past_due: Array<string>;

        /**
         * Fields that may become required depending on the results of verification or review. Will be an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due` or `currently_due`.
         */
        pending_verification: Array<string>;
      }

      namespace FutureRequirements {
        interface Alternative {
          /**
           * Fields that can be provided to satisfy all fields in `original_fields_due`.
           */
          alternative_fields_due: Array<string>;

          /**
           * Fields that are due and can be satisfied by providing all fields in `alternative_fields_due`.
           */
          original_fields_due: Array<string>;
        }

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
            | 'verification_document_issue_or_expiry_date_missing'
            | 'verification_document_manipulated'
            | 'verification_document_missing_back'
            | 'verification_document_missing_front'
            | 'verification_document_name_mismatch'
            | 'verification_document_name_missing'
            | 'verification_document_nationality_mismatch'
            | 'verification_document_not_readable'
            | 'verification_document_not_signed'
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
            | 'verification_failed_other'
            | 'verification_failed_tax_id_match'
            | 'verification_failed_tax_id_not_issued'
            | 'verification_missing_executives'
            | 'verification_missing_owners'
            | 'verification_requires_additional_memorandum_of_associations';
        }
      }

      interface Requirements {
        /**
         * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
         */
        alternatives: Array<Requirements.Alternative> | null;

        /**
         * Date by which the fields in `currently_due` must be collected to keep the capability enabled for the account. These fields may disable the capability sooner if the next threshold is reached before they are collected.
         */
        current_deadline: number | null;

        /**
         * Fields that need to be collected to keep the capability enabled. If not collected by `current_deadline`, these fields appear in `past_due` as well, and the capability is disabled.
         */
        currently_due: Array<string>;

        /**
         * If the capability is disabled, this string describes why. Can be `requirements.past_due`, `requirements.pending_verification`, `listed`, `platform_paused`, `rejected.listed`, `rejected.terms_of_service`, `rejected.card_casher`, `rejected.auto_fraud_shutdown`, `rejected.fraud`, `rejected.dishonest_merchant`, `rejected.identity_fraud`, `rejected.platform_fraud`, `rejected.platform_terms_of_service`, `rejected.other`, `under_review`, or `other`.
         *
         * `rejected.unsupported_business` means that the account's business is not supported by the capability. For example, payment methods may restrict the businesses they support in their terms of service:
         *
         * - [Afterpay Clearpay's terms of service](https://stripe.com/afterpay-clearpay/legal#restricted-businesses)
         *
         * If you believe that the rejection is in error, please contact support@stripe.com for assistance.
         */
        disabled_reason: string | null;

        /**
         * Fields that are `currently_due` and need to be collected again because validation or verification failed.
         */
        errors: Array<Requirements.Error>;

        /**
         * Fields that need to be collected assuming all volume thresholds are reached. As they become required, they appear in `currently_due` as well, and `current_deadline` becomes set.
         */
        eventually_due: Array<string>;

        /**
         * Fields that weren't collected by `current_deadline`. These fields need to be collected to enable the capability on the account.
         */
        past_due: Array<string>;

        /**
         * Fields that may become required depending on the results of verification or review. Will be an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`.
         */
        pending_verification: Array<string>;
      }

      namespace Requirements {
        interface Alternative {
          /**
           * Fields that can be provided to satisfy all fields in `original_fields_due`.
           */
          alternative_fields_due: Array<string>;

          /**
           * Fields that are due and can be satisfied by providing all fields in `alternative_fields_due`.
           */
          original_fields_due: Array<string>;
        }

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
            | 'verification_document_issue_or_expiry_date_missing'
            | 'verification_document_manipulated'
            | 'verification_document_missing_back'
            | 'verification_document_missing_front'
            | 'verification_document_name_mismatch'
            | 'verification_document_name_missing'
            | 'verification_document_nationality_mismatch'
            | 'verification_document_not_readable'
            | 'verification_document_not_signed'
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
            | 'verification_failed_other'
            | 'verification_failed_tax_id_match'
            | 'verification_failed_tax_id_not_issued'
            | 'verification_missing_executives'
            | 'verification_missing_owners'
            | 'verification_requires_additional_memorandum_of_associations';
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
