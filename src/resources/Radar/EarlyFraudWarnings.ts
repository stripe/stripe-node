// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../Types.js';
import {Charge} from './../Charges.js';
import {PaymentIntent} from './../PaymentIntents.js';
import {PaginationParams, RangeQueryParam} from '../../shared.js';
import {ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class EarlyFraudWarningResource extends StripeResource {
  /**
   * Returns a list of early fraud warnings.
   */
  list(
    params?: Radar.EarlyFraudWarningListParams,
    options?: RequestOptions
  ): ApiListPromise<EarlyFraudWarning>;
  list(options?: RequestOptions): ApiListPromise<EarlyFraudWarning>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/radar/early_fraud_warnings',
      methodType: 'list',
    }).call(this, ...args);
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
  ): Promise<Response<EarlyFraudWarning>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<EarlyFraudWarning>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/radar/early_fraud_warnings/{early_fraud_warning}',
    }).call(this, ...args);
  }
}
export /**
 * An early fraud warning indicates that the card issuer has notified us that a
 * charge may be fraudulent.
 *
 * Related guide: [Early fraud warnings](https://stripe.com/docs/disputes/measuring#early-fraud-warnings)
 */
interface EarlyFraudWarning {
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
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
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
