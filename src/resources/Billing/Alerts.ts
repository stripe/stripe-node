// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Customer} from './../Customers.js';
import {Meter} from './Meters.js';
import {Decimal, PaginationParams, Metadata} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;

export class AlertResource extends StripeResource {
  /**
   * Lists billing active and inactive alerts
   */
  list(
    params?: Billing.AlertListParams,
    options?: RequestOptions
  ): ApiListPromise<Alert>;
  list(options?: RequestOptions): ApiListPromise<Alert>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/billing/alerts',
      methodType: 'list',
      responseSchema: {
        kind: 'object',
        fields: {
          data: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                credit_balance_threshold: {
                  kind: 'nullable',
                  inner: {
                    kind: 'object',
                    fields: {
                      lte: {
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
                spend_threshold: {
                  kind: 'nullable',
                  inner: {
                    kind: 'object',
                    fields: {
                      gte: {
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
          },
        },
      },
    }).call(this, ...args);
  }

  /**
   * Creates a billing alert
   */
  create(
    params: Billing.AlertCreateParams,
    options?: RequestOptions
  ): Promise<Response<Alert>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/billing/alerts',
      requestSchema: {
        kind: 'object',
        fields: {
          credit_balance_threshold: {
            kind: 'object',
            fields: {
              lte: {
                kind: 'object',
                fields: {
                  custom_pricing_unit: {
                    kind: 'object',
                    fields: {value: {kind: 'decimal_string'}},
                  },
                },
              },
            },
          },
          spend_threshold: {
            kind: 'object',
            fields: {
              gte: {
                kind: 'object',
                fields: {
                  custom_pricing_unit: {
                    kind: 'object',
                    fields: {value: {kind: 'decimal_string'}},
                  },
                },
              },
            },
          },
        },
      },
      responseSchema: {
        kind: 'object',
        fields: {
          credit_balance_threshold: {
            kind: 'nullable',
            inner: {
              kind: 'object',
              fields: {
                lte: {
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
          spend_threshold: {
            kind: 'nullable',
            inner: {
              kind: 'object',
              fields: {
                gte: {
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
    }).call(this, ...args);
  }

  /**
   * Retrieves a billing alert given an ID
   */
  retrieve(
    id: string,
    params?: Billing.AlertRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Alert>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Alert>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/billing/alerts/{id}',
      responseSchema: {
        kind: 'object',
        fields: {
          credit_balance_threshold: {
            kind: 'nullable',
            inner: {
              kind: 'object',
              fields: {
                lte: {
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
          spend_threshold: {
            kind: 'nullable',
            inner: {
              kind: 'object',
              fields: {
                gte: {
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
    }).call(this, ...args);
  }

  /**
   * Reactivates this alert, allowing it to trigger again.
   */
  activate(
    id: string,
    params?: Billing.AlertActivateParams,
    options?: RequestOptions
  ): Promise<Response<Alert>>;
  activate(id: string, options?: RequestOptions): Promise<Response<Alert>>;
  activate(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/billing/alerts/{id}/activate',
      responseSchema: {
        kind: 'object',
        fields: {
          credit_balance_threshold: {
            kind: 'nullable',
            inner: {
              kind: 'object',
              fields: {
                lte: {
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
          spend_threshold: {
            kind: 'nullable',
            inner: {
              kind: 'object',
              fields: {
                gte: {
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
    }).call(this, ...args);
  }

  /**
   * Archives this alert, removing it from the list view and APIs. This is non-reversible.
   */
  archive(
    id: string,
    params?: Billing.AlertArchiveParams,
    options?: RequestOptions
  ): Promise<Response<Alert>>;
  archive(id: string, options?: RequestOptions): Promise<Response<Alert>>;
  archive(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/billing/alerts/{id}/archive',
      responseSchema: {
        kind: 'object',
        fields: {
          credit_balance_threshold: {
            kind: 'nullable',
            inner: {
              kind: 'object',
              fields: {
                lte: {
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
          spend_threshold: {
            kind: 'nullable',
            inner: {
              kind: 'object',
              fields: {
                gte: {
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
    }).call(this, ...args);
  }

  /**
   * Deactivates this alert, preventing it from triggering.
   */
  deactivate(
    id: string,
    params?: Billing.AlertDeactivateParams,
    options?: RequestOptions
  ): Promise<Response<Alert>>;
  deactivate(id: string, options?: RequestOptions): Promise<Response<Alert>>;
  deactivate(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/billing/alerts/{id}/deactivate',
      responseSchema: {
        kind: 'object',
        fields: {
          credit_balance_threshold: {
            kind: 'nullable',
            inner: {
              kind: 'object',
              fields: {
                lte: {
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
          spend_threshold: {
            kind: 'nullable',
            inner: {
              kind: 'object',
              fields: {
                gte: {
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
    }).call(this, ...args);
  }
}
export interface Alert {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'billing.alert';

  /**
   * Defines the type of the alert.
   */
  alert_type: Billing.Alert.AlertType;

  /**
   * Encapsulates configuration of the alert to monitor billing credit balance.
   */
  credit_balance_threshold?: Billing.Alert.CreditBalanceThreshold | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Encapsulates the alert's configuration to monitor spend on pricing plan subscriptions.
   */
  spend_threshold?: Billing.Alert.SpendThreshold | null;

  /**
   * Status of the alert. This can be active, inactive or archived.
   */
  status: Billing.Alert.Status | null;

  /**
   * Title of the alert.
   */
  title: string;

  /**
   * Encapsulates configuration of the alert to monitor usage on a specific [Billing Meter](https://docs.stripe.com/api/billing/meter).
   */
  usage_threshold: Billing.Alert.UsageThreshold | null;
}
export namespace Billing {
  export namespace Alert {
    export type AlertType =
      | 'credit_balance_threshold'
      | 'spend_threshold'
      | 'usage_threshold';

    export interface CreditBalanceThreshold {
      /**
       * The filters allow limiting the scope of this credit balance alert. You must specify only a customer filter at this time.
       */
      filters: Array<CreditBalanceThreshold.Filter> | null;

      lte: CreditBalanceThreshold.Lte;
    }

    export interface SpendThreshold {
      /**
       * Defines the period over which spend is aggregated.
       */
      aggregation_period: 'billing';

      /**
       * Filters to scope the spend calculation.
       */
      filters: SpendThreshold.Filters | null;

      /**
       * Defines the granularity of spend aggregation.
       */
      group_by: 'pricing_plan_subscription' | null;

      /**
       * The threshold value configuration for a spend threshold alert.
       */
      gte: SpendThreshold.Gte;
    }

    export type Status = 'active' | 'archived' | 'inactive';

    export interface UsageThreshold {
      /**
       * The filters allow limiting the scope of this usage alert. You can only specify up to one filter at this time.
       */
      filters: Array<UsageThreshold.Filter> | null;

      /**
       * The value at which this alert will trigger.
       */
      gte: number;

      /**
       * The [Billing Meter](https://docs.stripe.com/api/billing/meter) ID whose usage is monitored.
       */
      meter: string | Meter;

      /**
       * Defines how the alert will behave.
       */
      recurrence: 'one_time';
    }

    export namespace CreditBalanceThreshold {
      export interface Filter {
        /**
         * Limit the scope of the alert to this customer ID
         */
        customer: string | Customer | null;

        type: Filter.Type;
      }

      export interface Lte {
        /**
         * The type of this balance. We currently only support `monetary` amounts.
         */
        balance_type: Lte.BalanceType;

        /**
         * The custom pricing unit amount.
         */
        custom_pricing_unit?: Lte.CustomPricingUnit | null;

        /**
         * The monetary amount.
         */
        monetary: Lte.Monetary | null;
      }

      export namespace Filter {
        export type Type = 'customer' | 'tenant';
      }

      export namespace Lte {
        export type BalanceType = 'custom_pricing_unit' | 'monetary';

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
           * A positive decimal string representing the amount.
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

    export namespace SpendThreshold {
      export interface Filters {
        /**
         * Filter by billing cadence ID.
         */
        billing_cadence: string | null;

        /**
         * Filter by pricing plan ID.
         */
        pricing_plan: string | null;

        /**
         * Filter by pricing plan subscription ID.
         */
        pricing_plan_subscription: string | null;
      }

      export interface Gte {
        /**
         * The monetary amount. Present when type is `amount`.
         */
        amount: Gte.Amount | null;

        /**
         * The custom pricing unit amount. Present when type is `custom_pricing_unit`.
         */
        custom_pricing_unit: Gte.CustomPricingUnit | null;

        /**
         * The type of the threshold amount.
         */
        type: Gte.Type;
      }

      export namespace Gte {
        export interface Amount {
          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * A positive integer representing the amount.
           */
          value: number;
        }

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
           * A positive decimal string representing the amount.
           */
          value: Decimal;
        }

        export type Type = 'amount' | 'custom_pricing_unit';

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

    export namespace UsageThreshold {
      export interface Filter {
        /**
         * Limit the scope of the alert to this customer ID
         */
        customer: string | Customer | null;

        type: 'customer';
      }
    }
  }
}
export namespace Billing {
  export interface AlertCreateParams {
    /**
     * The type of alert to create.
     */
    alert_type: AlertCreateParams.AlertType;

    /**
     * The title of the alert.
     */
    title: string;

    /**
     * The configuration of the credit balance threshold.
     */
    credit_balance_threshold?: AlertCreateParams.CreditBalanceThreshold;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The configuration of the spend threshold. An event fires when the amount consumed exceeds the threshold, after all credits and discounts are applied but before tax is applied.
     */
    spend_threshold?: AlertCreateParams.SpendThreshold;

    /**
     * The configuration of the usage threshold.
     */
    usage_threshold?: AlertCreateParams.UsageThreshold;
  }

  export namespace AlertCreateParams {
    export type AlertType =
      | 'credit_balance_threshold'
      | 'spend_threshold'
      | 'usage_threshold';

    export interface CreditBalanceThreshold {
      /**
       * The filters allows limiting the scope of this credit balance alert. You must specify a customer filter at this time.
       */
      filters?: Array<CreditBalanceThreshold.Filter>;

      /**
       * Defines at which value the alert will fire.
       */
      lte: CreditBalanceThreshold.Lte;
    }

    export interface SpendThreshold {
      /**
       * Defines the period over which spend is aggregated.
       */
      aggregation_period: 'billing';

      /**
       * Filters to scope the spend calculation.
       */
      filters?: SpendThreshold.Filters;

      /**
       * Defines the granularity of spend aggregation. Defaults to `pricing_plan_subscription`.
       */
      group_by?: 'pricing_plan_subscription';

      /**
       * Defines at which value the alert will fire.
       */
      gte: SpendThreshold.Gte;
    }

    export interface UsageThreshold {
      /**
       * The filters allows limiting the scope of this usage alert. You can only specify up to one filter at this time.
       */
      filters?: Array<UsageThreshold.Filter>;

      /**
       * Defines the threshold value that triggers the alert.
       */
      gte: number;

      /**
       * The [Billing Meter](https://docs.stripe.com/api/billing/meter) ID whose usage is monitored.
       */
      meter: string;

      /**
       * Defines how the alert will behave.
       */
      recurrence: 'one_time';
    }

    export namespace CreditBalanceThreshold {
      export interface Filter {
        /**
         * The credit grants for which to configure the credit balance alert.
         */
        credit_grants?: Filter.CreditGrants;

        /**
         * Limit the scope to this credit balance alert only to this customer.
         */
        customer?: string;

        /**
         * What type of filter is being applied to this credit balance alert.
         */
        type: Filter.Type;
      }

      export interface Lte {
        /**
         * Specify the type of this balance. We currently only support `monetary` billing credits.
         */
        balance_type: Lte.BalanceType;

        /**
         * The custom pricing unit amount.
         */
        custom_pricing_unit?: Lte.CustomPricingUnit;

        /**
         * The monetary amount.
         */
        monetary?: Lte.Monetary;
      }

      export namespace Filter {
        export interface CreditGrants {
          /**
           * The applicability configuration for this credit grants filter.
           */
          applicability_config: CreditGrants.ApplicabilityConfig;
        }

        export type Type = 'customer' | 'tenant';

        export namespace CreditGrants {
          export interface ApplicabilityConfig {
            /**
             * Specify the scope of this applicability config.
             */
            scope: ApplicabilityConfig.Scope;
          }

          export namespace ApplicabilityConfig {
            export interface Scope {
              /**
               * A list of billable items that the credit grant can apply to. We currently only support metered billable items. Cannot be used in combination with `price_type` or `prices`.
               */
              billable_items?: Array<Scope.BillableItem>;

              /**
               * The price type that credit grants can apply to. We currently only support the `metered` price type. Cannot be used in combination with `prices`.
               */
              price_type?: 'metered';

              /**
               * A list of prices that the credit grant can apply to. We currently only support the `metered` prices. Cannot be used in combination with `price_type`.
               */
              prices?: Array<Scope.Price>;
            }

            export namespace Scope {
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

      export namespace Lte {
        export type BalanceType = 'custom_pricing_unit' | 'monetary';

        export interface CustomPricingUnit {
          /**
           * The ID of the custom pricing unit.
           */
          id: string;

          /**
           * A positive decimal string representing the amount of the custom pricing unit threshold.
           */
          value: Decimal;
        }

        export interface Monetary {
          /**
           * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the `value` parameter.
           */
          currency: string;

          /**
           * An integer representing the amount of the threshold.
           */
          value: number;
        }
      }
    }

    export namespace SpendThreshold {
      export interface Filters {
        /**
         * Filter by billable item IDs. Maximum of 20 billable items.
         */
        billable_items?: Array<string>;

        /**
         * Filter by billing cadence ID.
         */
        billing_cadence?: string;

        /**
         * Filter by pricing plan ID.
         */
        pricing_plan?: string;

        /**
         * Filter by pricing plan subscription ID.
         */
        pricing_plan_subscription?: string;
      }

      export interface Gte {
        /**
         * The monetary amount. Required when type is `amount`. The threshold is the total_before_tax, the amount consumed after all credits and discounts are applied, but before tax is applied.
         */
        amount?: Gte.Amount;

        /**
         * The custom pricing unit amount. Required when type is `custom_pricing_unit`.
         */
        custom_pricing_unit?: Gte.CustomPricingUnit;

        /**
         * The type of the threshold amount.
         */
        type: Gte.Type;
      }

      export namespace Gte {
        export interface Amount {
          /**
           * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the `value` parameter.
           */
          currency: string;

          /**
           * An integer representing the amount of the threshold.
           */
          value: number;
        }

        export interface CustomPricingUnit {
          /**
           * The ID of the custom pricing unit.
           */
          id: string;

          /**
           * A positive decimal string representing the amount of the custom pricing unit threshold.
           */
          value: Decimal;
        }

        export type Type = 'amount' | 'custom_pricing_unit';
      }
    }

    export namespace UsageThreshold {
      export interface Filter {
        /**
         * Limit the scope to this usage alert only to this customer.
         */
        customer?: string;

        /**
         * What type of filter is being applied to this usage alert.
         */
        type: 'customer';
      }
    }
  }
}
export namespace Billing {
  export interface AlertRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Billing {
  export interface AlertListParams extends PaginationParams {
    /**
     * Filter results to only include this type of alert.
     */
    alert_type?: AlertListParams.AlertType;

    /**
     * Filter results to only include alerts for the given customer.
     */
    customer?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Filter results to only include alerts with the given meter.
     */
    meter?: string;
  }

  export namespace AlertListParams {
    export type AlertType =
      | 'credit_balance_threshold'
      | 'spend_threshold'
      | 'usage_threshold';
  }
}
export namespace Billing {
  export interface AlertActivateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Billing {
  export interface AlertArchiveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Billing {
  export interface AlertDeactivateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
