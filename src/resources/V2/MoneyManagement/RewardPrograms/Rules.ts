// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {RewardProgramRule} from './../../../V2/MoneyManagement/RewardProgramRules.js';
import {Decimal, OtherString} from '../../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../../lib.js';

export class RuleResource extends StripeResource {
  /**
   * Returns a list of RewardProgramRules for a RewardProgram.
   */
  list(
    rewardProgramId: string,
    params?: V2.MoneyManagement.RewardPrograms.RuleListParams,
    options?: RequestOptions
  ): V2ListPromise<RewardProgramRule> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/reward_programs/${encodeURIComponent(
        rewardProgramId
      )}/rules`,
      params,
      options,
      {
        methodType: 'list',
        responseSchema: {
          kind: 'object',
          fields: {
            data: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {
                  reward: {
                    kind: 'object',
                    fields: {
                      cashback: {
                        kind: 'object',
                        fields: {rate: {kind: 'decimal_string'}},
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
  /**
   * Creates a new RewardProgramRule under the given RewardProgram. RewardProgramRules are inactive by
   * default on creation; use ActivateRewardProgramRule to make them eligible for reward evaluation.
   */
  create(
    rewardProgramId: string,
    params: V2.MoneyManagement.RewardPrograms.RuleCreateParams,
    options?: RequestOptions
  ): Promise<Response<RewardProgramRule>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/reward_programs/${encodeURIComponent(
        rewardProgramId
      )}/rules`,
      params,
      options,
      {
        requestSchema: {
          kind: 'object',
          fields: {
            reward: {
              kind: 'object',
              fields: {
                cashback: {
                  kind: 'object',
                  fields: {rate: {kind: 'decimal_string'}},
                },
              },
            },
          },
        },
        responseSchema: {
          kind: 'object',
          fields: {
            reward: {
              kind: 'object',
              fields: {
                cashback: {
                  kind: 'object',
                  fields: {rate: {kind: 'decimal_string'}},
                },
              },
            },
          },
        },
      }
    ) as any;
  }
  /**
   * Retrieves the details of an existing RewardProgramRule.
   */
  retrieve(
    rewardProgramId: string,
    id: string,
    params?: V2.MoneyManagement.RewardPrograms.RuleRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<RewardProgramRule>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/reward_programs/${encodeURIComponent(
        rewardProgramId
      )}/rules/${encodeURIComponent(id)}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            reward: {
              kind: 'object',
              fields: {
                cashback: {
                  kind: 'object',
                  fields: {rate: {kind: 'decimal_string'}},
                },
              },
            },
          },
        },
      }
    ) as any;
  }
  /**
   * Updates the mutable fields of an existing RewardProgramRule. Use ActivateRewardProgramRule /
   * DeactivateRewardProgramRule to change the RewardProgramRule's status.
   */
  update(
    rewardProgramId: string,
    id: string,
    params?: V2.MoneyManagement.RewardPrograms.RuleUpdateParams,
    options?: RequestOptions
  ): Promise<Response<RewardProgramRule>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/reward_programs/${encodeURIComponent(
        rewardProgramId
      )}/rules/${encodeURIComponent(id)}`,
      params,
      options,
      {
        requestSchema: {
          kind: 'object',
          fields: {
            reward: {
              kind: 'object',
              fields: {
                cashback: {
                  kind: 'object',
                  fields: {rate: {kind: 'decimal_string'}},
                },
              },
            },
          },
        },
        responseSchema: {
          kind: 'object',
          fields: {
            reward: {
              kind: 'object',
              fields: {
                cashback: {
                  kind: 'object',
                  fields: {rate: {kind: 'decimal_string'}},
                },
              },
            },
          },
        },
      }
    ) as any;
  }
  /**
   * Activates a RewardProgramRule. At most one RewardProgramRule may be active per RewardProgram at a
   * time. Idempotent: calling this on a RewardProgramRule that is already active returns 200 with the
   * current object unchanged.
   */
  activate(
    rewardProgramId: string,
    id: string,
    params?: V2.MoneyManagement.RewardPrograms.RuleActivateParams,
    options?: RequestOptions
  ): Promise<Response<RewardProgramRule>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/reward_programs/${encodeURIComponent(
        rewardProgramId
      )}/rules/${encodeURIComponent(id)}/activate`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            reward: {
              kind: 'object',
              fields: {
                cashback: {
                  kind: 'object',
                  fields: {rate: {kind: 'decimal_string'}},
                },
              },
            },
          },
        },
      }
    ) as any;
  }
  /**
   * Deactivates a RewardProgramRule. Idempotent: calling this on a RewardProgramRule that is already
   * inactive returns 200 with the current object unchanged.
   */
  deactivate(
    rewardProgramId: string,
    id: string,
    params?: V2.MoneyManagement.RewardPrograms.RuleDeactivateParams,
    options?: RequestOptions
  ): Promise<Response<RewardProgramRule>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/reward_programs/${encodeURIComponent(
        rewardProgramId
      )}/rules/${encodeURIComponent(id)}/deactivate`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            reward: {
              kind: 'object',
              fields: {
                cashback: {
                  kind: 'object',
                  fields: {rate: {kind: 'decimal_string'}},
                },
              },
            },
          },
        },
      }
    ) as any;
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace RewardPrograms {
      export interface RuleCreateParams {
        /**
         * Human-readable name for this rule. Max 250 characters.
         */
        name: string;

        /**
         * The reward to grant when this rule matches.
         */
        reward: RuleCreateParams.Reward;

        /**
         * Conditions that must be true for this rule to match a card transaction. Omitting this field, or
         * providing an empty condition, means the rule matches all transactions.
         */
        condition?: RuleCreateParams.Condition;
      }

      export namespace RuleCreateParams {
        export interface Reward {
          /**
           * Cashback reward configuration.
           */
          cashback: Reward.Cashback;
        }

        export interface Condition {
          /**
           * Card-spend specific matching condition.
           */
          card_spend?: Condition.CardSpend;
        }

        export namespace Condition {
          export interface CardSpend {
            /**
             * Merchant Category Code include/exclude configuration. Omitted means the rule matches all MCCs.
             */
            merchant_category_codes?: CardSpend.MerchantCategoryCodes;
          }

          export namespace CardSpend {
            export interface MerchantCategoryCodes {
              /**
               * Four-digit Merchant Category Codes to explicitly exclude. Takes precedence over `included`.
               */
              excluded: Array<string>;

              /**
               * Four-digit Merchant Category Codes to include. An empty list matches all MCCs.
               */
              included: Array<string>;
            }
          }
        }

        export namespace Reward {
          export interface Cashback {
            /**
             * Cashback rate as a percentage, represented as a decimal string. For example, `"2"` represents 2% and
             * `"1.5"` represents 1.5%. Must be greater than `"0"` and less than or equal to `"100"`.
             */
            rate: Decimal;
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace RewardPrograms {
      export interface RuleRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace RewardPrograms {
      export interface RuleUpdateParams {
        /**
         * Conditions that must be true for this rule to match a card transaction.
         */
        condition?: RuleUpdateParams.Condition;

        /**
         * Human-readable name for this rule. Max 250 characters.
         */
        name?: string;

        /**
         * The reward to grant when this rule matches.
         */
        reward?: RuleUpdateParams.Reward;
      }

      export namespace RuleUpdateParams {
        export interface Condition {
          /**
           * Card-spend specific matching condition.
           */
          card_spend?: Condition.CardSpend;
        }

        export interface Reward {
          /**
           * Cashback reward configuration.
           */
          cashback: Reward.Cashback;
        }

        export namespace Condition {
          export interface CardSpend {
            /**
             * Merchant Category Code include/exclude configuration. Omitted means the rule matches all MCCs.
             */
            merchant_category_codes?: CardSpend.MerchantCategoryCodes;
          }

          export namespace CardSpend {
            export interface MerchantCategoryCodes {
              /**
               * Four-digit Merchant Category Codes to explicitly exclude. Takes precedence over `included`.
               */
              excluded: Array<string>;

              /**
               * Four-digit Merchant Category Codes to include. An empty list matches all MCCs.
               */
              included: Array<string>;
            }
          }
        }

        export namespace Reward {
          export interface Cashback {
            /**
             * Cashback rate as a percentage, represented as a decimal string. For example, `"2"` represents 2% and
             * `"1.5"` represents 1.5%. Must be greater than `"0"` and less than or equal to `"100"`.
             */
            rate: Decimal;
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace RewardPrograms {
      export interface RuleListParams {
        /**
         * Maximum number of results to return. Default: 10. Valid range: 1-100.
         */
        limit?: number;

        /**
         * Filter by RewardProgramRule status.
         */
        status?: RuleListParams.Status;
      }

      export namespace RuleListParams {
        export type Status = 'active' | 'inactive' | OtherString;
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace RewardPrograms {
      export interface RuleActivateParams {}
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace RewardPrograms {
      export interface RuleDeactivateParams {}
    }
  }
}
