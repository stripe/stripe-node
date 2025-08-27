// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        namespace LicenseFees {
          interface VersionRetrieveParams {}
        }
      }

      namespace Billing {
        namespace LicenseFees {
          interface VersionListParams {
            /**
             * Optionally set the maximum number of results per page. Defaults to 20.
             */
            limit?: number;
          }
        }
      }

      namespace Billing {
        namespace LicenseFees {
          class VersionsResource {
            /**
             * Retrieve a License Fee Version object.
             */
            retrieve(
              licenseFeeId: string,
              id: string,
              params?: VersionRetrieveParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.LicenseFeeVersion>>;
            retrieve(
              licenseFeeId: string,
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.LicenseFeeVersion>>;

            /**
             * List all versions of a License Fee object.
             */
            list(
              id: string,
              params?: VersionListParams,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.LicenseFeeVersion>;
            list(
              id: string,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.LicenseFeeVersion>;
          }
        }
      }
    }
  }
}
