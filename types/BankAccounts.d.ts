// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * These bank accounts are payment methods on `Customer` objects.
     *
     * On the other hand [External Accounts](https://stripe.com/docs/api#external_accounts) are transfer
     * destinations on `Account` objects for [Custom accounts](https://stripe.com/docs/connect/custom-accounts).
     * They can be bank accounts or debit cards as well, and are documented in the links above.
     *
     * Related guide: [Bank debits and transfers](https://stripe.com/docs/payments/bank-debits-transfers)
     */
    interface BankAccount {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'bank_account';

      /**
       * The ID of the account that the bank account is associated with.
       */
      account?: string | Stripe.Account | null;

      /**
       * The name of the person or business that owns the bank account.
       */
      account_holder_name: string | null;

      /**
       * The type of entity that holds the account. This can be either `individual` or `company`.
       */
      account_holder_type: string | null;

      /**
       * The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.
       */
      account_type: string | null;

      /**
       * A set of available payout methods for this bank account. Only values from this set should be passed as the `method` when creating a payout.
       */
      available_payout_methods?: Array<
        BankAccount.AvailablePayoutMethod
      > | null;

      /**
       * Name of the bank associated with the routing number (e.g., `WELLS FARGO`).
       */
      bank_name: string | null;

      /**
       * Two-letter ISO code representing the country the bank account is located in.
       */
      country: string;

      /**
       * Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
       */
      currency: string;

      /**
       * The ID of the customer that the bank account is associated with.
       */
      customer?: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      /**
       * Whether this bank account is the default external account for its currency.
       */
      default_for_currency?: boolean | null;

      deleted?: void;

      /**
       * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
       */
      fingerprint: string | null;

      /**
       * Information about upcoming new requirements for the bank account, including what information needs to be collected.
       */
      future_requirements?: BankAccount.FutureRequirements | null;

      /**
       * The last four digits of the bank account number.
       */
      last4: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: Stripe.Metadata | null;

      /**
       * Information about the requirements for the bank account, including what information needs to be collected.
       */
      requirements?: BankAccount.Requirements | null;

      /**
       * The routing transit number for the bank account.
       */
      routing_number: string | null;

      /**
       * For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, or `errored`. A bank account that hasn't had any activity or validation performed is `new`. If Stripe can determine that the bank account exists, its status will be `validated`. Note that there often isn't enough information to know (e.g., for smaller credit unions), and the validation is not always run. If customer bank account verification has succeeded, the bank account status will be `verified`. If the verification failed for any reason, such as microdeposit failure, the status will be `verification_failed`. If a transfer sent to this bank account fails, we'll set the status to `errored` and will not continue to send transfers until the bank details are updated.
       *
       * For external accounts, possible values are `new`, `errored` and `verification_failed`. If a transfer fails, the status is set to `errored` and transfers are stopped until account details are updated. In India, if we can't [verify the owner of the bank account](https://support.stripe.com/questions/bank-account-ownership-verification), we'll set the status to `verification_failed`. Other validations aren't run against external accounts because they're only used for payouts. This means the other statuses don't apply.
       */
      status: string;
    }

    namespace BankAccount {
      type AvailablePayoutMethod = 'instant' | 'standard';

      interface FutureRequirements {
        /**
         * Fields that need to be collected to keep the external account enabled. If not collected by `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
         */
        currently_due: Array<string> | null;

        /**
         * Fields that are `currently_due` and need to be collected again because validation or verification failed.
         */
        errors: Array<FutureRequirements.Error> | null;

        /**
         * Fields that weren't collected by `current_deadline`. These fields need to be collected to enable the external account.
         */
        past_due: Array<string> | null;

        /**
         * Fields that may become required depending on the results of verification or review. Will be an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`.
         */
        pending_verification: Array<string> | null;
      }

      namespace FutureRequirements {
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
            | 'invalid_dob_age_under_18'
            | 'invalid_representative_country'
            | 'invalid_street_address'
            | 'invalid_tos_acceptance'
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
            | 'verification_failed_residential_address'
            | 'verification_failed_tax_id_match'
            | 'verification_failed_tax_id_not_issued'
            | 'verification_missing_executives'
            | 'verification_missing_owners'
            | 'verification_requires_additional_memorandum_of_associations';
        }
      }

      interface Requirements {
        /**
         * Fields that need to be collected to keep the external account enabled. If not collected by `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
         */
        currently_due: Array<string> | null;

        /**
         * Fields that are `currently_due` and need to be collected again because validation or verification failed.
         */
        errors: Array<Requirements.Error> | null;

        /**
         * Fields that weren't collected by `current_deadline`. These fields need to be collected to enable the external account.
         */
        past_due: Array<string> | null;

        /**
         * Fields that may become required depending on the results of verification or review. Will be an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`.
         */
        pending_verification: Array<string> | null;
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
            | 'invalid_dob_age_under_18'
            | 'invalid_representative_country'
            | 'invalid_street_address'
            | 'invalid_tos_acceptance'
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
            | 'verification_failed_residential_address'
            | 'verification_failed_tax_id_match'
            | 'verification_failed_tax_id_not_issued'
            | 'verification_missing_executives'
            | 'verification_missing_owners'
            | 'verification_requires_additional_memorandum_of_associations';
        }
      }
    }

    /**
     * The DeletedBankAccount object.
     */
    interface DeletedBankAccount {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'bank_account';

      /**
       * Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
       */
      currency?: string | null;

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }
  }
}
