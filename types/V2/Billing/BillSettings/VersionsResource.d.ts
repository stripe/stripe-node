// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        namespace BillSettings {
          interface VersionRetrieveParams {}
        }
      }

      namespace Billing {
        namespace BillSettings {
          interface VersionListParams {
            /**
             * Optionally set the maximum number of results per page. Defaults to 20.
             */
            limit?: number;
          }
        }
      }

      namespace Billing {
        namespace BillSettings {
          class VersionsResource {
            /**
             * Retrieve a BillSettingVersion by ID.
             */
            retrieve(
              billSettingId: string,
              id: string,
              params?: VersionRetrieveParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.BillSettingVersion>>;
            retrieve(
              billSettingId: string,
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.BillSettingVersion>>;

            /**
             * List all BillSettingVersions by BillSetting ID.
             */
            list(
              id: string,
              params?: VersionListParams,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.BillSettingVersion>;
            list(
              id: string,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.BillSettingVersion>;
          }
        }
      }
    }
  }
}
