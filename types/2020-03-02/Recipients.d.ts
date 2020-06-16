declare module 'stripe' {
  namespace Stripe {
    /**
     * The Recipient object.
     */
    interface Recipient {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'recipient';

      /**
       * Hash describing the current account on the recipient, if there is one.
       */
      active_account: Stripe.BankAccount | null;

      cards: ApiList<Stripe.Card> | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The default card to use for creating transfers to this recipient.
       */
      default_card: string | Stripe.Card | null;

      deleted?: void;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description: string | null;

      email: string | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Metadata;

      /**
       * The ID of the [Custom account](https://stripe.com/docs/connect/custom-accounts) this recipient was migrated to. If set, the recipient can no longer be updated, nor can transfers be made to it: use the Custom account instead.
       */
      migrated_to: string | Stripe.Account | null;

      /**
       * Full, legal name of the recipient.
       */
      name: string | null;

      rolled_back_from?: string | Stripe.Account;

      /**
       * Type of the recipient, one of `individual` or `corporation`.
       */
      type: string;

      /**
       * Whether the recipient has been verified. This field is non-standard, and maybe removed in the future
       */
      verified: boolean;
    }

    /**
     * The DeletedRecipient object.
     */
    interface DeletedRecipient {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'recipient';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }
  }
}
