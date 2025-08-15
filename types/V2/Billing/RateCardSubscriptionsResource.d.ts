// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface RateCardSubscriptionCreateParams {
          /**
           * The ID of the billing Cadence.
           */
          billing_cadence: string;

          /**
           * The ID of the RateCard.
           */
          rate_card: string;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * The ID of the RateCardVersion. If not specified, defaults to the "live_version" of the RateCard at the time of creation.
           */
          rate_card_version?: string;
        }
      }

      namespace Billing {
        interface RateCardSubscriptionRetrieveParams {}
      }

      namespace Billing {
        interface RateCardSubscriptionUpdateParams {
          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;
        }
      }

      namespace Billing {
        interface RateCardSubscriptionListParams {
          /**
           * Optionally filter by a BillingCadence. Mutually exclusive with `payers`, `rate_card`, and `rate_card_version`.
           */
          billing_cadence?: string;

          /**
           * The page size limit, if not provided the default is 20.
           */
          limit?: number;

          /**
           * Optionally filter by the payer associated with Cadences which the RateCardSubscriptions are subscribed to.
           * Mutually exclusive with `billing_cadence`, `rate_card`, and `rate_card_version`.
           */
          payer?: RateCardSubscriptionListParams.Payer;

          /**
           * Optionally filter by a RateCard. Mutually exclusive with `billing_cadence`, `payers`, and `rate_card_version`.
           */
          rate_card?: string;

          /**
           * Optionally filter by a RateCard version. Mutually exclusive with `billing_cadence`, `payers`, and `rate_card`.
           */
          rate_card_version?: string;

          /**
           * Optionally filter by servicing status.
           */
          servicing_status?: RateCardSubscriptionListParams.ServicingStatus;
        }

        namespace RateCardSubscriptionListParams {
          interface Payer {
            /**
             * The ID of the Customer object. If provided, only RateCardSubscriptions that are subscribed on the Cadences with the specified Payer will be returned.
             */
            customer?: string;

            /**
             * A string identifying the type of the payer. Currently the only supported value is `customer`.
             */
            type: 'customer';
          }

          type ServicingStatus = 'active' | 'canceled' | 'paused' | 'pending';
        }
      }

      namespace Billing {
        interface RateCardSubscriptionCancelParams {}
      }

      namespace Billing {
        class RateCardSubscriptionsResource {
          /**
           * Create a RateCardSubscription to bill a RateCard on a specified billing Cadence.
           */
          create(
            params: RateCardSubscriptionCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.RateCardSubscription>>;

          /**
           * Retrieve a RateCardSubscription by ID.
           */
          retrieve(
            id: string,
            params?: RateCardSubscriptionRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.RateCardSubscription>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.RateCardSubscription>>;

          /**
           * Update fields on an existing, active RateCardSubscription.
           */
          update(
            id: string,
            params?: RateCardSubscriptionUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.RateCardSubscription>>;

          /**
           * List all RateCardSubscription objects.
           */
          list(
            params?: RateCardSubscriptionListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.RateCardSubscription>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Billing.RateCardSubscription>;

          /**
           * Cancel an existing, active RateCardSubscription.
           */
          cancel(
            id: string,
            params?: RateCardSubscriptionCancelParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.RateCardSubscription>>;
          cancel(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.RateCardSubscription>>;
        }
      }
    }
  }
}
