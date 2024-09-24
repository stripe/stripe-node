// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface MeterEventSessionCreateParams {}
      }

      namespace Billing {
        class MeterEventSessionResource {
          /**
           * Creates a meter event session to send usage on the high-throughput meter event stream.
           */
          create(
            params?: MeterEventSessionCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.MeterEventSession>>;
          create(
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.MeterEventSession>>;
        }
      }
    }
  }
}
