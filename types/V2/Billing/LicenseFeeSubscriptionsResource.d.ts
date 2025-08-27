// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface LicenseFeeSubscriptionRetrieveParams {}
      }

      namespace Billing {
        class LicenseFeeSubscriptionsResource {
          /**
           * Retrieve a License Fee Subscription object.
           */
          retrieve(
            id: string,
            params?: LicenseFeeSubscriptionRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.LicenseFeeSubscription>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.LicenseFeeSubscription>>;
        }
      }
    }
  }
}
