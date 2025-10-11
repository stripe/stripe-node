// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Identity {
      interface BlocklistEntryCreateParams {
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

      namespace BlocklistEntryCreateParams {
        type EntryType = 'document' | 'selfie';
      }

      interface BlocklistEntryRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface BlocklistEntryListParams extends PaginationParams {
        /**
         * Only return BlocklistEntries that were created during the given date interval.
         */
        created?: Stripe.RangeQueryParam | number;

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

      namespace BlocklistEntryListParams {
        type Status = 'active' | 'disabled' | 'redacted';

        type Type = 'document' | 'selfie';
      }

      interface BlocklistEntryDisableParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class BlocklistEntriesResource {
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
          params: BlocklistEntryCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.BlocklistEntry>>;

        /**
         * Retrieves a BlocklistEntry object by its identifier.
         *
         * Related guide: [Identity Verification Blocklist](https://docs.stripe.com/docs/identity/review-tools#block-list)
         */
        retrieve(
          id: string,
          params?: BlocklistEntryRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.BlocklistEntry>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.BlocklistEntry>>;

        /**
         * Returns a list of BlocklistEntry objects associated with your account.
         *
         * The blocklist entries are returned sorted by creation date, with the most recently created
         * entries appearing first.
         *
         * Related guide: [Identity Verification Blocklist](https://docs.stripe.com/docs/identity/review-tools#block-list)
         */
        list(
          params?: BlocklistEntryListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Identity.BlocklistEntry>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Identity.BlocklistEntry>;

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
          params?: BlocklistEntryDisableParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.BlocklistEntry>>;
        disable(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Identity.BlocklistEntry>>;
      }
    }
  }
}
