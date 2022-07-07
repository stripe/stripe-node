// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The CashBalance object.
     */
    interface CashBalance {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'cash_balance';

      /**
       * A hash of all cash balances available to this customer. You cannot delete a customer with any cash balances, even if the balance is 0. Amounts are represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
       */
      available: {
        [key: string]: number;
      } | null;

      /**
       * The ID of the customer whose cash balance this object represents.
       */
      customer: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      settings: CashBalance.Settings;
    }

    namespace CashBalance {
      interface Settings {
        /**
         * The configuration for how funds that land in the customer cash balance are reconciled.
         */
        reconciliation_mode: Settings.ReconciliationMode;
      }

      namespace Settings {
        type ReconciliationMode = 'automatic' | 'manual';
      }
    }

    interface CashBalanceRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface CashBalanceUpdateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A hash of settings for this cash balance.
       */
      settings?: CashBalanceUpdateParams.Settings;
    }

    namespace CashBalanceUpdateParams {
      interface Settings {
        /**
         * Controls how funds transferred by the customer are applied to payment intents and invoices. Valid options are `automatic` or `manual`. For more information about these reconciliation modes, see [Reconciliation](https://stripe.com/docs/payments/customer-balance/reconciliation).
         */
        reconciliation_mode?: Settings.ReconciliationMode;
      }

      namespace Settings {
        type ReconciliationMode = 'automatic' | 'manual';
      }
    }
  }
}
