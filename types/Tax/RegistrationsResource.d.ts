// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      interface RegistrationCreateParams {
        /**
         * Time at which the Tax Registration becomes active. Measured in seconds since the Unix epoch.
         */
        active_from: number;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country: string;

        /**
         * The type of the Tax Registration. See [our guide](https://stripe.com/docs/tax/registering) for more information about registration types.
         */
        type: RegistrationCreateParams.Type;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * If set, the Tax Registration stops being active at this time. If not set, the Tax Registration will be active indefinitely. Measured in seconds since the Unix epoch.
         */
        expires_at?: number;

        /**
         * State, county, province, or region.
         */
        state?: string;
      }

      namespace RegistrationCreateParams {
        type Type =
          | 'domestic_small_seller'
          | 'simplified'
          | 'standard'
          | 'vat_oss_non_union'
          | 'vat_oss_union';
      }

      interface RegistrationUpdateParams {
        /**
         * Time at which the registration becomes active. Measured in seconds since the Unix epoch.
         */
        active_from?: number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * If set, the registration stops being active at this time. If not set, the registration will be active indefinitely. Measured in seconds since the Unix epoch.
         */
        expires_at?: Stripe.Emptyable<number>;
      }

      interface RegistrationListParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The status of the Tax Registration.
         */
        status?: RegistrationListParams.Status;
      }

      namespace RegistrationListParams {
        type Status = 'active' | 'all' | 'expired' | 'scheduled';
      }

      class RegistrationsResource {
        /**
         * Creates a new Tax Registration object.
         */
        create(
          params: RegistrationCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Registration>>;

        /**
         * Updates an existing Tax Registration object.
         *
         * A registration cannot be deleted after it has been created. If you wish to end a registration you may do so by setting expires_at.
         */
        update(
          id: string,
          params?: RegistrationUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Registration>>;

        /**
         * Returns a list of Tax Registration objects.
         */
        list(
          params?: RegistrationListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Tax.Registration>;
        list(options?: RequestOptions): ApiListPromise<Stripe.Tax.Registration>;
      }
    }
  }
}
