// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {RateCardRate} from './../../../V2/Billing/RateCardRates.js';
import {MetadataParam, Decimal} from '../../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';
import {DeletedObject} from './../../../V2/DeletedObject.js';

export class RateResource extends StripeResource {
  /**
   * List all Rates associated with a Rate Card for a specific version. Defaults to latest. Rates remain active for all subsequent versions until a new rate is created for the same Metered Item.
   */
  list(
    id: string,
    params?: V2.Billing.RateCards.RateListParams,
    options?: RequestOptions
  ): ApiListPromise<RateCardRate> {
    return this._makeRequest(
      'GET',
      `/v2/billing/rate_cards/${id}/rates`,
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
                  tiers: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {up_to_decimal: {kind: 'decimal_string'}},
                    },
                  },
                  transform_quantity: {
                    kind: 'object',
                    fields: {divide_by: {kind: 'int64_string'}},
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
   * Set the Rate for a Metered Item on the latest version of a Rate Card object. This will create a new Rate Card version
   * if the Metered Item already has a rate on the Rate Card.
   */
  create(
    id: string,
    params: V2.Billing.RateCards.RateCreateParams,
    options?: RequestOptions
  ): Promise<Response<RateCardRate>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/rate_cards/${id}/rates`,
      params,
      options,
      {
        requestSchema: {
          kind: 'object',
          fields: {
            tiers: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {up_to_decimal: {kind: 'decimal_string'}},
              },
            },
            transform_quantity: {
              kind: 'object',
              fields: {divide_by: {kind: 'int64_string'}},
            },
          },
        },
        responseSchema: {
          kind: 'object',
          fields: {
            tiers: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {up_to_decimal: {kind: 'decimal_string'}},
              },
            },
            transform_quantity: {
              kind: 'object',
              fields: {divide_by: {kind: 'int64_string'}},
            },
          },
        },
      }
    ) as any;
  }
  /**
   * Remove an existing Rate from a Rate Card. This will create a new Rate Card Version without that Rate.
   */
  del(
    rateCardId: string,
    id: string,
    params?: V2.Billing.RateCards.RateDeleteParams,
    options?: RequestOptions
  ): Promise<Response<DeletedObject>> {
    return this._makeRequest(
      'DELETE',
      `/v2/billing/rate_cards/${rateCardId}/rates/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a Rate object.
   */
  retrieve(
    rateCardId: string,
    id: string,
    params?: V2.Billing.RateCards.RateRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<RateCardRate>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/rate_cards/${rateCardId}/rates/${id}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            tiers: {
              kind: 'array',
              element: {
                kind: 'object',
                fields: {up_to_decimal: {kind: 'decimal_string'}},
              },
            },
            transform_quantity: {
              kind: 'object',
              fields: {divide_by: {kind: 'int64_string'}},
            },
          },
        },
      }
    ) as any;
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace RateCards {
      export interface RateCreateParams {
        /**
         * The Metered Item that this rate binds to.
         */
        metered_item: string;

        /**
         * The custom pricing unit that this rate binds to. One of `unit_amount`, `tiers`, or `custom_pricing_unit_amount` is required.
         */
        custom_pricing_unit_amount?: RateCreateParams.CustomPricingUnitAmount;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: MetadataParam;

        /**
         * Defines whether the tiered price should be graduated or volume-based. In volume-based tiering, the maximum
         * quantity within a period determines the per-unit price. In graduated tiering, the pricing changes as the quantity
         * grows into new tiers. One of `unit_amount`, `tiers`, or `custom_pricing_unit_amount` is required.
         */
        tiering_mode?: RateCreateParams.TieringMode;

        /**
         * Each element represents a pricing tier. One of `unit_amount`, `tiers`, or `custom_pricing_unit_amount` is required.
         */
        tiers?: Array<RateCreateParams.Tier>;

        /**
         * Apply a transformation to the reported usage or set quantity before computing the amount billed.
         */
        transform_quantity?: RateCreateParams.TransformQuantity;

        /**
         * The per-unit amount to be charged, represented as a decimal string in minor currency units with at most 12 decimal
         * places. One of `unit_amount`, `tiers`, or `custom_pricing_unit_amount` is required.
         */
        unit_amount?: string;
      }

      export namespace RateCreateParams {
        export interface CustomPricingUnitAmount {
          /**
           * The id of the custom pricing unit.
           */
          id: string;

          /**
           * The unit value for the custom pricing unit, as a string.
           */
          value: string;
        }

        export type TieringMode = 'graduated' | 'volume';

        export interface Tier {
          /**
           * Price for the entire tier, represented as a decimal string in minor currency units with at most 12 decimal places.
           */
          flat_amount?: string;

          /**
           * Per-unit price for units included in this tier, represented as a decimal string in minor currency units with at
           * most 12 decimal places.
           */
          unit_amount?: string;

          /**
           * Up to and including this quantity will be contained in the tier. Only one of `up_to_decimal` and `up_to_inf` may
           * be set.
           */
          up_to_decimal?: Decimal;

          /**
           * No upper bound to this tier. Only one of `up_to_decimal` and `up_to_inf` may be set.
           */
          up_to_inf?: 'inf';
        }

        export interface TransformQuantity {
          /**
           * Divide usage by this number.
           */
          divide_by: bigint;

          /**
           * After division, round the result up or down.
           */
          round: TransformQuantity.Round;
        }

        export namespace TransformQuantity {
          export type Round = 'down' | 'up';
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace RateCards {
      export interface RateRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace RateCards {
      export interface RateListParams {
        /**
         * Optionally set the maximum number of results per page. Defaults to 20.
         */
        limit?: number;

        /**
         * Optionally filter by a Metered Item.
         */
        metered_item?: string;

        /**
         * Optionally filter by a RateCard version. If not specified, defaults to the latest version.
         */
        rate_card_version?: string;
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace RateCards {
      export interface RateDeleteParams {}
    }
  }
}
