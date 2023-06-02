// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Tokenization is the process Stripe uses to collect sensitive card or bank
     * account details, or personally identifiable information (PII), directly from
     * your customers in a secure manner. A token representing this information is
     * returned to your server to use. You should use our
     * [recommended payments integrations](https://stripe.com/docs/payments) to perform this process
     * client-side. This ensures that no sensitive card data touches your server,
     * and allows your integration to operate in a PCI-compliant way.
     *
     * If you cannot use client-side tokenization, you can also create tokens using
     * the API with either your publishable or secret API key. Keep in mind that if
     * your integration uses this method, you are responsible for any PCI compliance
     * that may be required, and you must keep your secret API key safe. Unlike with
     * client-side tokenization, your customer's information is not sent directly to
     * Stripe, so we cannot determine how it is handled or stored.
     *
     * Tokens cannot be stored or used more than once. To store card or bank account
     * information for later use, you can create [Customer](https://stripe.com/docs/api#customers)
     * objects or [Custom accounts](https://stripe.com/docs/api#external_accounts). Note that
     * [Radar](https://stripe.com/docs/radar), our integrated solution for automatic fraud protection,
     * performs best with integrations that use client-side tokenization.
     */
    interface Token {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'token';

      /**
       * These bank accounts are payment methods on `Customer` objects.
       *
       * On the other hand [External Accounts](https://stripe.com/docs/api#external_accounts) are transfer
       * destinations on `Account` objects for [Custom accounts](https://stripe.com/docs/connect/custom-accounts).
       * They can be bank accounts or debit cards as well, and are documented in the links above.
       *
       * Related guide: [Bank debits and transfers](https://stripe.com/docs/payments/bank-debits-transfers)
       */
      bank_account?: Stripe.BankAccount;

      /**
       * You can store multiple cards on a customer in order to charge the customer
       * later. You can also store multiple debit cards on a recipient in order to
       * transfer to those cards later.
       *
       * Related guide: [Card payments with Sources](https://stripe.com/docs/sources/cards)
       */
      card?: Stripe.Card;

      /**
       * IP address of the client that generated the token.
       */
      client_ip: string | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Type of the token: `account`, `bank_account`, `card`, or `pii`.
       */
      type: string;

      /**
       * Whether this token has already been used (tokens can be used only once).
       */
      used: boolean;
    }
  }
}
