// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        namespace CollectionSettings {
          interface VersionRetrieveParams {}
        }
      }

      namespace Billing {
        namespace CollectionSettings {
          interface VersionListParams {
            /**
             * Optionally set the maximum number of results per page. Defaults to 20.
             */
            limit?: number;
          }
        }
      }

      namespace Billing {
        namespace CollectionSettings {
          class VersionsResource {
            /**
             * Retrieve a CollectionSetting Version by ID.
             */
            retrieve(
              collectionSettingId: string,
              id: string,
              params?: VersionRetrieveParams,
              options?: RequestOptions
            ): Promise<
              Stripe.Response<Stripe.V2.Billing.CollectionSettingVersion>
            >;
            retrieve(
              collectionSettingId: string,
              id: string,
              options?: RequestOptions
            ): Promise<
              Stripe.Response<Stripe.V2.Billing.CollectionSettingVersion>
            >;

            /**
             * List all CollectionSettingVersions by CollectionSetting ID.
             */
            list(
              id: string,
              params?: VersionListParams,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.CollectionSettingVersion>;
            list(
              id: string,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.CollectionSettingVersion>;
          }
        }
      }
    }
  }
}
