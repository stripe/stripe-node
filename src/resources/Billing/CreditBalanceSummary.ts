// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Customer, DeletedCustomer} from './../Customers.js';
import {Decimal, Metadata} from '../../shared.js';
import {RequestOptions, Response} from '../../lib.js';

export class CreditBalanceSummaryResource extends StripeResource {
  /**
   * Retrieves the credit balance summary for a customer.
   */
  retrieve(
    params: Billing.CreditBalanceSummaryRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<CreditBalanceSummary>> {
    return this._makeRequest(
      'GET',
      '/v1/billing/credit_balance_summary',
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            balances: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  available_balance: {
                    kind: 'object',
                    fields: {
                      custom_pricing_unit: {
                        kind: 'nullable',
                        inner: {
                          kind: 'object',
                          fields: {value: {kind: 'decimal_string'}},
                        },
                      },
                    },
                  },
                  ledger_balance: {
                    kind: 'object',
                    fields: {
                      custom_pricing_unit: {
                        kind: 'nullable',
                        inner: {
                          kind: 'object',
                          fields: {value: {kind: 'decimal_string'}},
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }
    ) as any;
  }
}
export interface CreditBalanceSummary {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'billing.credit_balance_summary';

  /**
   * The billing credit balances. One entry per credit grant currency. If a customer only has credit grants in a single currency, then this will have a single balance entry.
   */
  balances: Array<Billing.CreditBalanceSummary.Balance>;

  /**
   * The customer the balance is for.
   */
  customer: string | Customer | DeletedCustomer;

  /**
   * The account the balance is for.
   */
  customer_account: string | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;
}
export namespace Billing {
  export namespace CreditBalanceSummary {
    export interface Balance {
      available_balance: Balance.AvailableBalance;

      balance_update_details?: Balance.BalanceUpdateDetails;

      ledger_balance: Balance.LedgerBalance;
    }

    export namespace Balance {
      export interface AvailableBalance {
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

      export interface BalanceUpdateDetails {
        /**
         * The details of the most recent meter event included in the balance update.
         */
        latest_meter_event: BalanceUpdateDetails.LatestMeterEvent | null;
      }

      export interface LedgerBalance {
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

      export namespace AvailableBalance {
        export interface CustomPricingUnit {
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

        export interface Monetary {
          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * A positive integer representing the amount.
           */
          value: number;
        }

        export type Type = 'custom_pricing_unit' | 'monetary';

        export namespace CustomPricingUnit {
          export interface CustomPricingUnitDetails {
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
            metadata: Metadata;

            /**
             * The status of the custom pricing unit.
             */
            status: string;
          }
        }
      }

      export namespace BalanceUpdateDetails {
        export interface LatestMeterEvent {
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

      export namespace LedgerBalance {
        export interface CustomPricingUnit {
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

        export interface Monetary {
          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * A positive integer representing the amount.
           */
          value: number;
        }

        export type Type = 'custom_pricing_unit' | 'monetary';

        export namespace CustomPricingUnit {
          export interface CustomPricingUnitDetails {
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
            metadata: Metadata;

            /**
             * The status of the custom pricing unit.
             */
            status: string;
          }
        }
      }
    }
  }
}
export namespace Billing {
  export interface CreditBalanceSummaryRetrieveParams {
    /**
     * The filter criteria for the credit balance summary.
     */
    filter: CreditBalanceSummaryRetrieveParams.Filter;

    /**
     * The customer whose credit balance summary you're retrieving.
     */
    customer?: string;

    /**
     * The account representing the customer whose credit balance summary you're retrieving.
     */
    customer_account?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export namespace CreditBalanceSummaryRetrieveParams {
    export interface Filter {
      /**
       * The billing credit applicability scope for which to fetch credit balance summary.
       */
      applicability_scope?: Filter.ApplicabilityScope;

      /**
       * The credit grant for which to fetch credit balance summary.
       */
      credit_grant?: string;

      /**
       * Specify the type of this filter.
       */
      type: Filter.Type;
    }

    export namespace Filter {
      export interface ApplicabilityScope {
        /**
         * A list of billable items that the credit grant can apply to. We currently only support metered billable items. Cannot be used in combination with `price_type` or `prices`.
         */
        billable_items?: Array<ApplicabilityScope.BillableItem>;

        /**
         * The price type that credit grants can apply to. We currently only support the `metered` price type. Cannot be used in combination with `prices`.
         */
        price_type?: 'metered';

        /**
         * A list of prices that the credit grant can apply to. We currently only support the `metered` prices. Cannot be used in combination with `price_type`.
         */
        prices?: Array<ApplicabilityScope.Price>;
      }

      export type Type = 'applicability_scope' | 'credit_grant';

      export namespace ApplicabilityScope {
        export interface BillableItem {
          /**
           * The billable item ID this credit grant should apply to.
           */
          id: string;
        }

        export interface Price {
          /**
           * The price ID this credit grant should apply to.
           */
          id: string;
        }
      }
    }
  }
}
