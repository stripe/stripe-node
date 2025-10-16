// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Identity {
      /**
       * A BlocklistEntry represents an entry in our identity verification blocklist.
       * It helps prevent fraudulent users from repeatedly attempting verification with similar information.
       * When you create a BlocklistEntry, we store data from a specified VerificationReport,
       * such as document details or facial biometrics.
       * This allows us to compare future verification attempts against these entries.
       * If a match is found, we categorize the new verification as unverified.
       *
       * To learn more, see [Identity Verification Blocklist](https://stripe.com/docs/identity/review-tools#block-list)
       */
      interface BlocklistEntry {
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
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The current status of the BlocklistEntry.
         */
        status: BlocklistEntry.Status;

        /**
         * The type of BlocklistEntry.
         */
        type: BlocklistEntry.Type;

        /**
         * The verification report the BlocklistEntry was created from.
         */
        verification_report: string | Stripe.Identity.VerificationReport | null;

        /**
         * The verification session the BlocklistEntry was created from.
         */
        verification_session:
          | string
          | Stripe.Identity.VerificationSession
          | null;
      }

      namespace BlocklistEntry {
        type Status = 'active' | 'disabled' | 'redacted';

        type Type = 'document' | 'selfie';
      }
    }
  }
}
