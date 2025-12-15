// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        interface PayoutMethodRetrieveParams {}
      }

      namespace MoneyManagement {
        interface PayoutMethodListParams {
          /**
           * The page size.
           */
          limit?: number;

          /**
           * Usage status filter.
           */
          usage_status?: PayoutMethodListParams.UsageStatus;
        }

        namespace PayoutMethodListParams {
          interface UsageStatus {
            /**
             * List of payments status to filter by.
             */
            payments?: Array<UsageStatus.Payment>;

            /**
             * List of transfers status to filter by.
             */
            transfers?: Array<UsageStatus.Transfer>;
          }

          namespace UsageStatus {
            type Payment = 'eligible' | 'invalid' | 'requires_action';

            type Transfer = 'eligible' | 'invalid' | 'requires_action';
          }
        }
      }

      namespace MoneyManagement {
        interface PayoutMethodArchiveParams {}
      }

      namespace MoneyManagement {
        interface PayoutMethodUnarchiveParams {}
      }

      namespace MoneyManagement {
        class PayoutMethodsResource {
          /**
           * Retrieve a PayoutMethod object.
           * @throws Stripe.InvalidPayoutMethodError
           */
          retrieve(
            id: string,
            params?: PayoutMethodRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.MoneyManagement.PayoutMethod>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.MoneyManagement.PayoutMethod>>;

          /**
           * List objects that adhere to the PayoutMethod interface.
           */
          list(
            params?: PayoutMethodListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.PayoutMethod>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.PayoutMethod>;

          /**
           * Archive a PayoutMethod object. Archived objects cannot be used as payout methods
           * and will not appear in the payout method list.
           * @throws Stripe.ControlledByDashboardError
           * @throws Stripe.InvalidPayoutMethodError
           * @throws Stripe.ControlledByAlternateResourceError
           */
          archive(
            id: string,
            params?: PayoutMethodArchiveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.MoneyManagement.PayoutMethod>>;
          archive(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.MoneyManagement.PayoutMethod>>;

          /**
           * Unarchive an PayoutMethod object.
           * @throws Stripe.ControlledByDashboardError
           * @throws Stripe.InvalidPayoutMethodError
           * @throws Stripe.ControlledByAlternateResourceError
           */
          unarchive(
            id: string,
            params?: PayoutMethodUnarchiveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.MoneyManagement.PayoutMethod>>;
          unarchive(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.MoneyManagement.PayoutMethod>>;
        }
      }
    }
  }
}
