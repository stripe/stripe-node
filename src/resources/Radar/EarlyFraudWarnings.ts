// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Charge} from './../Charges.js';
import {PaymentIntent} from './../PaymentIntents.js';
import {PaginationParams, RangeQueryParam} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class EarlyFraudWarningResource extends StripeResource {
  /**
   * Returns a list of early fraud warnings.
   */
  list(
    params?: Radar.EarlyFraudWarningListParams,
    options?: RequestOptions
  ): ApiListPromise<EarlyFraudWarning> {
    return this._makeRequest(
      'GET',
      '/v1/radar/early_fraud_warnings',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves the details of an early fraud warning that has previously been created.
   *
   * Please refer to the [early fraud warning](https://docs.stripe.com/api#early_fraud_warning_object) object reference for more details.
   */
  retrieve(
    id: string,
    params?: Radar.EarlyFraudWarningRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<EarlyFraudWarning>> {
    return this._makeRequest(
      'GET',
      `/v1/radar/early_fraud_warnings/${id}`,
      params,
      options
    ) as any;
  }
}
export interface EarlyFraudWarning {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'radar.early_fraud_warning';

  /**
   * An EFW is actionable if it has not received a dispute and has not been fully refunded. You may wish to proactively refund a charge that receives an EFW, in order to avoid receiving a dispute later.
   */
  actionable: boolean;

  /**
   * ID of the charge this early fraud warning is for, optionally expanded.
   */
  charge: string | Charge;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The type of fraud labelled by the issuer. One of `card_never_received`, `fraudulent_card_application`, `made_with_counterfeit_card`, `made_with_lost_card`, `made_with_stolen_card`, `misc`, `unauthorized_use_of_card`.
   */
  fraud_type: string;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * ID of the Payment Intent this early fraud warning is for, optionally expanded.
   */
  payment_intent?: string | PaymentIntent;
}
export namespace Radar {
  export interface EarlyFraudWarningRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Radar {
  export interface EarlyFraudWarningListParams extends PaginationParams {
    /**
     * Only return early fraud warnings for the charge specified by this charge ID.
     */
    charge?: string;

    /**
     * Only return early fraud warnings that were created during the given date interval.
     */
    created?: RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return early fraud warnings for charges that were created by the PaymentIntent specified by this PaymentIntent ID.
     */
    payment_intent?: string;
  }
}
