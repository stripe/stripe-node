// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      /**
       * Indicates the billing credit balance for billing credits granted to a customer.
       */
      interface CreditBalanceSummary {
        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing.credit_balance_summary';

        /**
         * The billing credit balances. One entry per credit grant currency. If a customer only has credit grants in a single currency, then this will have a single balance entry.
         */
        balances: Array<CreditBalanceSummary.Balance>;

        /**
         * The customer the balance is for.
         */
        customer: string | Stripe.Customer | Stripe.DeletedCustomer;

        /**
         * The account the balance is for.
         */
        customer_account: string | null;

        /**
         * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
         */
        livemode: boolean;
      }

      namespace CreditBalanceSummary {
        interface Balance {
          available_balance: Balance.AvailableBalance;

          balance_update_details?: Balance.BalanceUpdateDetails;

          ledger_balance: Balance.LedgerBalance;
        }

        namespace Balance {
          interface AvailableBalance {
            /**
             * The custom pricing unit amount.
             */
            custom_pricing_unit?: AvailableBalance.CustomPricingUnit | null;

            /**
             * The monetary amount.
             */
            monetary: AvailableBalance.Monetary | null;

            /**
             * The type of this amount. We currently only support `monetary` billing credits.
             */
            type: AvailableBalance.Type;
          }

          namespace AvailableBalance {
            interface CustomPricingUnit {
              /**
               * The custom pricing unit object.
               */
              custom_pricing_unit_details: CustomPricingUnit.CustomPricingUnitDetails | null;

              /**
               * Unique identifier for the object.
               */
              id: string;

              /**
               * A positive integer representing the amount.
               */
              value: Decimal;
            }

            namespace CustomPricingUnit {
              interface CustomPricingUnitDetails {
                /**
                 * Time at which the object was created. Measured in seconds since the Unix epoch.
                 */
                created: number;

                /**
                 * The name of the custom pricing unit.
                 */
                display_name: string;

                /**
                 * Unique identifier for the object.
                 */
                id: string;

                /**
                 * A lookup key for the custom pricing unit.
                 */
                lookup_key: string | null;

                /**
                 * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                 */
                metadata: Stripe.Metadata;

                /**
                 * The status of the custom pricing unit.
                 */
                status: string;
              }
            }

            interface Monetary {
              /**
               * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
               */
              currency: string;

              /**
               * A positive integer representing the amount.
               */
              value: number;
            }

            type Type = 'custom_pricing_unit' | 'monetary';
          }

          interface BalanceUpdateDetails {
            /**
             * The details of the most recent meter event included in the balance update.
             */
            latest_meter_event: BalanceUpdateDetails.LatestMeterEvent | null;
          }

          namespace BalanceUpdateDetails {
            interface LatestMeterEvent {
              /**
               * Time at which the object was created. Measured in seconds since the Unix epoch.
               */
              created?: number;

              /**
               * Maximum event time across all meter events that were processed and included in the balance update. Measured in seconds since the Unix epoch.
               */
              timestamp?: number;
            }
          }

          interface LedgerBalance {
            /**
             * The custom pricing unit amount.
             */
            custom_pricing_unit?: LedgerBalance.CustomPricingUnit | null;

            /**
             * The monetary amount.
             */
            monetary: LedgerBalance.Monetary | null;

            /**
             * The type of this amount. We currently only support `monetary` billing credits.
             */
            type: LedgerBalance.Type;
          }

          namespace LedgerBalance {
            interface CustomPricingUnit {
              /**
               * The custom pricing unit object.
               */
              custom_pricing_unit_details: CustomPricingUnit.CustomPricingUnitDetails | null;

              /**
               * Unique identifier for the object.
               */
              id: string;

              /**
               * A positive integer representing the amount.
               */
              value: Decimal;
            }

            namespace CustomPricingUnit {
              interface CustomPricingUnitDetails {
                /**
                 * Time at which the object was created. Measured in seconds since the Unix epoch.
                 */
                created: number;

                /**
                 * The name of the custom pricing unit.
                 */
                display_name: string;

                /**
                 * Unique identifier for the object.
                 */
                id: string;

                /**
                 * A lookup key for the custom pricing unit.
                 */
                lookup_key: string | null;

                /**
                 * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                 */
                metadata: Stripe.Metadata;

                /**
                 * The status of the custom pricing unit.
                 */
                status: string;
              }
            }

            interface Monetary {
              /**
               * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
               */
              currency: string;

              /**
               * A positive integer representing the amount.
               */
              value: number;
            }

            type Type = 'custom_pricing_unit' | 'monetary';
          }
        }
      }
    }
  }
}
