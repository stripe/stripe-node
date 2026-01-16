// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Meter} from './Meters.js';
import {Customer} from './../Customers.js';
import {PaginationParams} from '../../shared.js';
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
  alert_type: 'usage_threshold';

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

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
    alert_type: 'usage_threshold';

    /**
     * The title of the alert.
     */
    title: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The configuration of the usage threshold.
     */
    usage_threshold?: AlertCreateParams.UsageThreshold;
  }

  export namespace AlertCreateParams {
    export interface UsageThreshold {
      /**
       * The filters allows limiting the scope of this usage alert. You can only specify up to one filter at this time.
       */
      filters?: Array<UsageThreshold.Filter>;

      /**
       * Defines at which value the alert will fire.
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
    alert_type?: 'usage_threshold';

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Filter results to only include alerts with the given meter.
     */
    meter?: string;
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
