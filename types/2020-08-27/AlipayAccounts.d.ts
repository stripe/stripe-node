// File generated from our OpenAPI spec
declare module 'stripe' {
  namespace Stripe {
    /**
     * The AlipayAccount object.
     */
    interface AlipayAccount {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'alipay_account';

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The ID of the customer associated with this Alipay Account.
       */
      customer?: string | Stripe.Customer | DeletedCustomer | null;

      deleted?: void;

      /**
       * Uniquely identifies the account and will be the same across all Alipay account objects that are linked to the same Alipay account.
       */
      fingerprint: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: Stripe.Metadata;

      /**
       * If the Alipay account object is not reusable, the exact amount that you can create a charge for.
       */
      payment_amount: number | null;

      /**
       * If the Alipay account object is not reusable, the exact currency that you can create a charge for.
       */
      payment_currency: string | null;

      /**
       * True if you can create multiple payments using this account. If the account is reusable, then you can freely choose the amount of each payment.
       */
      reusable: boolean;

      /**
       * Whether this Alipay account object has ever been used for a payment.
       */
      used: boolean;

      /**
       * The username for the Alipay account.
       */
      username: string;
    }

    /**
     * The DeletedAlipayAccount object.
     */
    interface DeletedAlipayAccount {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'alipay_account';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }
  }
}
