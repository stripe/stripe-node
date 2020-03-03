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
