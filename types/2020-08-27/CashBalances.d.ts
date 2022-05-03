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
       * A hash of all cash balances available to this customer. You cannot delete a customer with any cash balances, even if the balance is 0.
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

      settings?: CashBalanceUpdateParams.Settings;
    }

    namespace CashBalanceUpdateParams {
      interface Settings {
        /**
         * Method for using the customer balance to pay outstanding
         * `customer_balance` PaymentIntents. If set to `automatic`, all available
         * funds will automatically be used to pay any outstanding PaymentIntent.
         * If set to `manual`, only customer balance funds from bank transfers
         * with a reference code matching
         * `payment_intent.next_action.display_bank_transfer_intructions.reference_code` will
         * automatically be used to pay the corresponding outstanding
         * PaymentIntent.
         */
        reconciliation_mode?: Settings.ReconciliationMode;
      }

      namespace Settings {
        type ReconciliationMode = 'automatic' | 'manual';
      }
    }
  }
}
