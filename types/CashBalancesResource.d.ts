// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
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
