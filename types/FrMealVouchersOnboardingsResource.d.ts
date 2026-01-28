// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface FrMealVouchersOnboardingCreateParams {
      /**
       * Name of the restaurant. This cannot be changed after creation of this object.
       */
      name: string;

      /**
       * Postal code of the restaurant.
       */
      postal_code: string;

      /**
       * SIRET number associated with the restaurant. This cannot be changed after creation of this object.
       */
      siret: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. This cannot be changed after creation of this object.
       */
      metadata?: Stripe.MetadataParam;
    }

    interface FrMealVouchersOnboardingRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface FrMealVouchersOnboardingUpdateParams {
      /**
       * Corrected Postal code of the restaurant.
       */
      postal_code: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface FrMealVouchersOnboardingListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class FrMealVouchersOnboardingsResource {
      /**
       * Creates a French Meal Vouchers Onboarding object that represents a restaurant's onboarding status and starts the onboarding process.
       */
      create(
        params: FrMealVouchersOnboardingCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.FrMealVouchersOnboarding>>;

      /**
       * Retrieves the details of a French Meal Vouchers Onboarding object
       */
      retrieve(
        id: string,
        params?: FrMealVouchersOnboardingRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.FrMealVouchersOnboarding>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.FrMealVouchersOnboarding>>;

      /**
       * Updates the details of a restaurant's French Meal Vouchers Onboarding object
       */
      update(
        id: string,
        params: FrMealVouchersOnboardingUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.FrMealVouchersOnboarding>>;

      /**
       * Lists French Meal Vouchers Onboarding objects
       */
      list(
        params?: FrMealVouchersOnboardingListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.FrMealVouchersOnboarding>;
      list(
        options?: RequestOptions
      ): ApiListPromise<Stripe.FrMealVouchersOnboarding>;
    }
  }
}
