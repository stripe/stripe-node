// File generated from our OpenAPI spec

namespace Billing {
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

  namespace AlertCreateParams {
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

    namespace UsageThreshold {
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
namespace Billing {
  export interface AlertRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Billing {
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
namespace Billing {
  export interface AlertActivateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Billing {
  export interface AlertArchiveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Billing {
  export interface AlertDeactivateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
