// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        interface AdjustmentRetrieveParams {}
      }

      namespace MoneyManagement {
        interface AdjustmentListParams {
          /**
           * Filter for Adjustments linked to a Flow.
           */
          adjusted_flow?: string;

          /**
           * Filter for objects created at the specified timestamp.
           * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
           */
          created?: string;

          /**
           * Filter for objects created after the specified timestamp.
           * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
           */
          created_gt?: string;

          /**
           * Filter for objects created on or after the specified timestamp.
           * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
           */
          created_gte?: string;

          /**
           * Filter for objects created before the specified timestamp.
           * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
           */
          created_lt?: string;

          /**
           * Filter for objects created on or before the specified timestamp.
           * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
           */
          created_lte?: string;

          /**
           * The page limit.
           */
          limit?: number;
        }
      }

      namespace MoneyManagement {
        class AdjustmentsResource {
          /**
           * Retrieves the details of an Adjustment by ID.
           */
          retrieve(
            id: string,
            params?: AdjustmentRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.MoneyManagement.Adjustment>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.MoneyManagement.Adjustment>>;

          /**
           * Returns a list of Adjustments that match the provided filters.
           */
          list(
            params?: AdjustmentListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.Adjustment>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.Adjustment>;
        }
      }
    }
  }
}
