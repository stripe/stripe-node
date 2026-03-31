// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {RateCardCustomPricingUnitOverageRate} from './../../../V2/Billing/RateCardCustomPricingUnitOverageRates.js';
import {MetadataParam} from '../../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';
import {DeletedObject} from './../../../V2/DeletedObject.js';
const stripeMethod = StripeResource.method;

export class CustomPricingUnitOverageRateResource extends StripeResource {
  /**
   * List all Rate Card Custom Pricing Unit Overage Rates on a Rate Card.
   */
  list(
    id: string,
    params?: V2.Billing.RateCards.CustomPricingUnitOverageRateListParams,
    options?: RequestOptions
  ): ApiListPromise<RateCardCustomPricingUnitOverageRate>;
  list(
    id: string,
    options?: RequestOptions
  ): ApiListPromise<RateCardCustomPricingUnitOverageRate>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath:
        '/v2/billing/rate_cards/{rate_card_id}/custom_pricing_unit_overage_rates',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Create a Rate Card Custom Pricing Unit Overage Rate on a Rate Card.
   */
  create(
    id: string,
    params: V2.Billing.RateCards.CustomPricingUnitOverageRateCreateParams,
    options?: RequestOptions
  ): Promise<Response<RateCardCustomPricingUnitOverageRate>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath:
        '/v2/billing/rate_cards/{rate_card_id}/custom_pricing_unit_overage_rates',
    }).call(this, ...args);
  }

  /**
   * Delete a Rate Card Custom Pricing Unit Overage Rate from a Rate Card.
   */
  del(
    rateCardId: string,
    id: string,
    params?: V2.Billing.RateCards.CustomPricingUnitOverageRateDeleteParams,
    options?: RequestOptions
  ): Promise<Response<DeletedObject>>;
  del(
    rateCardId: string,
    id: string,
    options?: RequestOptions
  ): Promise<Response<DeletedObject>>;
  del(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'DELETE',
      fullPath:
        '/v2/billing/rate_cards/{rate_card_id}/custom_pricing_unit_overage_rates/{id}',
    }).call(this, ...args);
  }

  /**
   * Retrieve a Rate Card Custom Pricing Unit Overage Rate from a Rate Card.
   */
  retrieve(
    rateCardId: string,
    id: string,
    params?: V2.Billing.RateCards.CustomPricingUnitOverageRateRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<RateCardCustomPricingUnitOverageRate>>;
  retrieve(
    rateCardId: string,
    id: string,
    options?: RequestOptions
  ): Promise<Response<RateCardCustomPricingUnitOverageRate>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath:
        '/v2/billing/rate_cards/{rate_card_id}/custom_pricing_unit_overage_rates/{id}',
    }).call(this, ...args);
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace RateCards {
      export interface CustomPricingUnitOverageRateCreateParams {
        /**
         * The ID of the custom pricing unit this overage rate applies to.
         */
        custom_pricing_unit: string;

        /**
         * The ID of the one-time item to use for overage line items.
         */
        one_time_item: string;

        /**
         * The per-unit amount to charge for overages, represented as a decimal string in minor currency units with at most 12 decimal places.
         */
        unit_amount: string;

        /**
         * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: MetadataParam;
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace RateCards {
      export interface CustomPricingUnitOverageRateRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace RateCards {
      export interface CustomPricingUnitOverageRateListParams {
        /**
         * Optionally set the maximum number of results per page. Defaults to 20.
         */
        limit?: number;

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
      export interface CustomPricingUnitOverageRateDeleteParams {}
    }
  }
}
