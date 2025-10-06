// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * PaymentMethodBalance objects represent balances available on a payment method.
     * You can use v1/payment_methods/:id/check_balance to check the balance of a payment method.
     */
    interface PaymentMethodBalance {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'payment_method_balance';

      /**
       * The time at which the balance was calculated. Measured in seconds since the Unix epoch.
       */
      as_of: number;

      /**
       * BalanceEntry contain information about every individual balance type of a card.
       */
      balance: PaymentMethodBalance.Balance;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;
    }

    namespace PaymentMethodBalance {
      interface Balance {
        /**
         * The available FR Meal Voucher balances.
         */
        fr_meal_voucher: Balance.FrMealVoucher | null;
      }

      namespace Balance {
        interface FrMealVoucher {
          /**
           * The hashes of balances and amounts for available balances.
           */
          available: Array<FrMealVoucher.Available> | null;
        }

        namespace FrMealVoucher {
          interface Available {
            /**
             * The amount of the balance.
             */
            amount: number;

            /**
             * The currency of the balance.
             */
            currency: string;
          }
        }
      }
    }
  }
}
