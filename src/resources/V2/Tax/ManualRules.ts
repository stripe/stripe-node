// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Decimal} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class ManualRuleResource extends StripeResource {
  /**
   * List all ManualRule objects.
   */
  list(
    params?: V2.Tax.ManualRuleListParams,
    options?: RequestOptions
  ): ApiListPromise<ManualRule> {
    return this._makeRequest('GET', '/v2/tax/manual_rules', params, options, {
      methodType: 'list',
      responseSchema: {
        kind: 'object',
        fields: {
          data: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                scheduled_tax_rates: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {
                      rates: {
                        kind: 'array',
                        element: {
                          kind: 'object',
                          fields: {percentage: {kind: 'decimal_string'}},
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
    }) as any;
  }
  /**
   * Creates a ManualRule object.
   */
  create(
    params: V2.Tax.ManualRuleCreateParams,
    options?: RequestOptions
  ): Promise<Response<ManualRule>> {
    return this._makeRequest('POST', '/v2/tax/manual_rules', params, options, {
      requestSchema: {
        kind: 'object',
        fields: {
          scheduled_tax_rates: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                rates: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {percentage: {kind: 'decimal_string'}},
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
          scheduled_tax_rates: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                rates: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {percentage: {kind: 'decimal_string'}},
                  },
                },
              },
            },
          },
        },
      },
    }) as any;
  }
  /**
   * Retrieves a ManualRule object by ID.
   */
  retrieve(
    id: string,
    params?: V2.Tax.ManualRuleRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ManualRule>> {
    return this._makeRequest(
      'GET',
      `/v2/tax/manual_rules/${id}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            scheduled_tax_rates: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  rates: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {percentage: {kind: 'decimal_string'}},
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
  /**
   * Updates the Tax configuration for a ManualRule object.
   */
  update(
    id: string,
    params: V2.Tax.ManualRuleUpdateParams,
    options?: RequestOptions
  ): Promise<Response<ManualRule>> {
    return this._makeRequest(
      'POST',
      `/v2/tax/manual_rules/${id}`,
      params,
      options,
      {
        requestSchema: {
          kind: 'object',
          fields: {
            scheduled_tax_rates: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  rates: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {percentage: {kind: 'decimal_string'}},
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
            scheduled_tax_rates: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  rates: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {percentage: {kind: 'decimal_string'}},
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
  /**
   * Deactivates a ManualRule object.
   */
  deactivate(
    id: string,
    params?: V2.Tax.ManualRuleDeactivateParams,
    options?: RequestOptions
  ): Promise<Response<ManualRule>> {
    return this._makeRequest(
      'POST',
      `/v2/tax/manual_rules/${id}/deactivate`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            scheduled_tax_rates: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  rates: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {percentage: {kind: 'decimal_string'}},
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
export interface ManualRule {
  /**
   * The ID of the ManualRule object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.tax.manual_rule';

  /**
   * The time at which the ManualRule object was created.
   */
  created: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Location where the rule applies.
   */
  location?: V2.Tax.ManualRule.Location;

  /**
   * Products associated with the rule.
   */
  products: Array<V2.Tax.ManualRule.Product>;

  /**
   * Tax rates to be applied.
   */
  scheduled_tax_rates: Array<V2.Tax.ManualRule.ScheduledTaxRate>;

  /**
   * The status of the ManualRule object.
   */
  status: V2.Tax.ManualRule.Status;
}
export namespace V2 {
  export namespace Tax {
    export namespace ManualRule {
      export interface Location {
        /**
         * Country ISO-3166.
         */
        country: string;

        /**
         * State ISO-3166.
         */
        state?: string;
      }

      export interface Product {
        /**
         * The licensed item identifier.
         */
        licensed_item?: string;

        /**
         * The metered item identifier.
         */
        metered_item?: string;

        /**
         * The tax code for the product.
         */
        tax_code?: string;

        /**
         * The type of the product.
         */
        type: Product.Type;
      }

      export interface ScheduledTaxRate {
        /**
         * The tax rates to be applied.
         */
        rates: Array<ScheduledTaxRate.Rate>;

        /**
         * The start time for the tax rate.
         */
        starts_at?: string;
      }

      export type Status = 'active' | 'inactive';

      export namespace Product {
        export type Type = 'licensed_item' | 'metered_item' | 'tax_code';
      }

      export namespace ScheduledTaxRate {
        export interface Rate {
          /**
           * Country of the tax rate.
           */
          country?: string;

          /**
           * Description of the tax rate.
           */
          description?: string;

          /**
           * Display name of the tax rate as it will be shown on the invoice.
           */
          display_name: string;

          /**
           * Jurisdiction of the tax rate should apply as it will be shown on the invoice.
           */
          jurisdiction?: string;

          /**
           * Percentage of the tax rate. Must be positive and maximum of 4 decimal points.
           */
          percentage: Decimal;

          /**
           * State of the tax rate.
           */
          state?: string;
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Tax {
    export interface ManualRuleCreateParams {
      /**
       * Tax rates to be applied.
       */
      scheduled_tax_rates: Array<ManualRuleCreateParams.ScheduledTaxRate>;

      /**
       * Location where the rule applies.
       */
      location?: ManualRuleCreateParams.Location;

      /**
       * Products associated with the rule.
       */
      products?: Array<ManualRuleCreateParams.Product>;
    }

    export namespace ManualRuleCreateParams {
      export interface ScheduledTaxRate {
        /**
         * The tax rates to be applied.
         */
        rates: Array<ScheduledTaxRate.Rate>;

        /**
         * The start time for the tax rate.
         */
        starts_at?: string;
      }

      export interface Location {
        /**
         * Country ISO-3166.
         */
        country: string;

        /**
         * State ISO-3166.
         */
        state?: string;
      }

      export interface Product {
        /**
         * The licensed item identifier.
         */
        licensed_item?: string;

        /**
         * The metered item identifier.
         */
        metered_item?: string;

        /**
         * The tax code for the product.
         */
        tax_code?: string;

        /**
         * The type of the product.
         */
        type: Product.Type;
      }

      export namespace Product {
        export type Type = 'licensed_item' | 'metered_item' | 'tax_code';
      }

      export namespace ScheduledTaxRate {
        export interface Rate {
          /**
           * Country of the tax rate.
           */
          country?: string;

          /**
           * Description of the tax rate.
           */
          description?: string;

          /**
           * Display name of the tax rate as it will be shown on the invoice.
           */
          display_name: string;

          /**
           * Jurisdiction of the tax rate should apply as it will be shown on the invoice.
           */
          jurisdiction?: string;

          /**
           * Percentage of the tax rate. Must be positive and maximum of 4 decimal points.
           */
          percentage: Decimal;

          /**
           * State of the tax rate.
           */
          state?: string;
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Tax {
    export interface ManualRuleRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Tax {
    export interface ManualRuleUpdateParams {
      /**
       * Tax rates to be applied.
       */
      scheduled_tax_rates: Array<ManualRuleUpdateParams.ScheduledTaxRate>;

      /**
       * Location where the rule applies.
       */
      location?: ManualRuleUpdateParams.Location;

      /**
       * Products associated with the rule.
       */
      products?: Array<ManualRuleUpdateParams.Product>;
    }

    export namespace ManualRuleUpdateParams {
      export interface ScheduledTaxRate {
        /**
         * The tax rates to be applied.
         */
        rates: Array<ScheduledTaxRate.Rate>;

        /**
         * The start time for the tax rate.
         */
        starts_at?: string;
      }

      export interface Location {
        /**
         * Country ISO-3166.
         */
        country: string;

        /**
         * State ISO-3166.
         */
        state?: string;
      }

      export interface Product {
        /**
         * The licensed item identifier.
         */
        licensed_item?: string;

        /**
         * The metered item identifier.
         */
        metered_item?: string;

        /**
         * The tax code for the product.
         */
        tax_code?: string;

        /**
         * The type of the product.
         */
        type: Product.Type;
      }

      export namespace Product {
        export type Type = 'licensed_item' | 'metered_item' | 'tax_code';
      }

      export namespace ScheduledTaxRate {
        export interface Rate {
          /**
           * Country of the tax rate.
           */
          country?: string;

          /**
           * Description of the tax rate.
           */
          description?: string;

          /**
           * Display name of the tax rate as it will be shown on the invoice.
           */
          display_name: string;

          /**
           * Jurisdiction of the tax rate should apply as it will be shown on the invoice.
           */
          jurisdiction?: string;

          /**
           * Percentage of the tax rate. Must be positive and maximum of 4 decimal points.
           */
          percentage: Decimal;

          /**
           * State of the tax rate.
           */
          state?: string;
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Tax {
    export interface ManualRuleListParams {
      /**
       * Optionally set the maximum number of results per page. Defaults to 20.
       */
      limit?: number;
    }
  }
}
export namespace V2 {
  export namespace Tax {
    export interface ManualRuleDeactivateParams {}
  }
}
