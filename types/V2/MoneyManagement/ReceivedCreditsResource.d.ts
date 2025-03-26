// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        interface ReceivedCreditRetrieveParams {}
      }

      namespace MoneyManagement {
        interface ReceivedCreditListParams {
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
        class ReceivedCreditsResource {
          /**
           * Retrieve a ReceivedCredit by ID.
           */
          retrieve(
            id: string,
            params?: ReceivedCreditRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.MoneyManagement.ReceivedCredit>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.MoneyManagement.ReceivedCredit>>;

          /**
           * Retrieves a list of ReceivedCredits.
           */
          list(
            params?: ReceivedCreditListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.ReceivedCredit>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.ReceivedCredit>;
        }
      }
    }
  }
}
