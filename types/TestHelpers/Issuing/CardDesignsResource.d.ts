// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      namespace Issuing {
        interface CardDesignActivateTestmodeParams {
          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;
        }
      }

      namespace Issuing {
        interface CardDesignDeactivateTestmodeParams {
          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;
        }
      }

      namespace Issuing {
        class CardDesignsResource {
          /**
           * Updates the status of the specified testmode card design object to active.
           */
          activateTestmode(
            id: string,
            params?: CardDesignActivateTestmodeParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.CardDesign>>;
          activateTestmode(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.CardDesign>>;

          /**
           * Updates the status of the specified testmode card design object to inactive.
           */
          deactivateTestmode(
            id: string,
            params?: CardDesignDeactivateTestmodeParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.CardDesign>>;
          deactivateTestmode(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.CardDesign>>;
        }
      }
    }
  }
}
