// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      interface AlertCreateParams {
        /**
         * The type of alert to create.
         */
        alert_type: AlertCreateParams.AlertType;

        /**
         * The title of the alert.
         */
        title: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Filters to limit the scope of an alert.
         */
        filter?: AlertCreateParams.Filter;

        /**
         * The configuration of the spend threshold.
         */
        spend_threshold_config?: AlertCreateParams.SpendThresholdConfig;

        /**
         * The configuration of the usage threshold.
         */
        usage_threshold_config?: AlertCreateParams.UsageThresholdConfig;
      }

      namespace AlertCreateParams {
        type AlertType = 'spend_threshold' | 'usage_threshold';

        interface Filter {
          /**
           * Limit the scope to this alert only to this customer.
           */
          customer?: string;
        }

        interface SpendThresholdConfig {
          /**
           * Whether the spend should be aggregated across items in a subscription or whether each subscription item is considered alone.
           */
          aggregation: SpendThresholdConfig.Aggregation;

          /**
           * Currency for which this spend alert is configured. This alert will only trigger for subscriptions matching this currency.
           */
          currency: string;

          /**
           * Defines at which value the alert will fire.
           */
          gte: number;

          /**
           * Whether the alert should only fire only once, or once per billing cycle.
           */
          recurrence: 'one_time';
        }

        namespace SpendThresholdConfig {
          type Aggregation = 'subscription' | 'subscription_item';
        }

        interface UsageThresholdConfig {
          /**
           * Defines at which value the alert will fire.
           */
          gte: number;

          /**
           * The [Billing Meter](https://stripe.com/api/billing/meter) ID whose usage is monitored.
           */
          meter?: string;

          /**
           * Whether the alert should only fire only once, or once per billing cycle.
           */
          recurrence: 'one_time';
        }
      }

      interface AlertRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface AlertListParams extends PaginationParams {
        /**
         * Filter results to only include this type of alert.
         */
        alert_type?: AlertListParams.AlertType;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Filter results to only include alerts with the given meter.
         */
        meter?: string;
      }

      namespace AlertListParams {
        type AlertType = 'spend_threshold' | 'usage_threshold';
      }

      interface AlertActivateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface AlertArchiveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface AlertDeactivateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class AlertsResource {
        /**
         * Creates a billing alert
         */
        create(
          params: AlertCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;

        /**
         * Retrieves a billing alert given an ID
         */
        retrieve(
          id: string,
          params?: AlertRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;

        /**
         * Lists billing active and inactive alerts
         */
        list(
          params?: AlertListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Billing.Alert>;
        list(options?: RequestOptions): ApiListPromise<Stripe.Billing.Alert>;

        /**
         * Reactivates this alert, allowing it to trigger again.
         */
        activate(
          id: string,
          params?: AlertActivateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;
        activate(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;

        /**
         * Archives this alert, removing it from the list view and APIs. This is non-reversible.
         */
        archive(
          id: string,
          params?: AlertArchiveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;
        archive(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;

        /**
         * Deactivates this alert, preventing it from triggering.
         */
        deactivate(
          id: string,
          params?: AlertDeactivateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;
        deactivate(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;
      }
    }
  }
}
