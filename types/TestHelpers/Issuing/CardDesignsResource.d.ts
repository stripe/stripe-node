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
        interface CardDesignRejectTestmodeParams {
          /**
           * The reason(s) the card design was rejected.
           */
          rejection_reasons: CardDesignRejectTestmodeParams.RejectionReasons;

          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;
        }

        namespace CardDesignRejectTestmodeParams {
          interface RejectionReasons {
            /**
             * The reason(s) the card logo was rejected.
             */
            card_logo?: Array<RejectionReasons.CardLogo>;

            /**
             * The reason(s) the carrier text was rejected.
             */
            carrier_text?: Array<RejectionReasons.CarrierText>;
          }

          namespace RejectionReasons {
            type CardLogo =
              | 'geographic_location'
              | 'inappropriate'
              | 'network_name'
              | 'non_binary_image'
              | 'non_fiat_currency'
              | 'other'
              | 'other_entity'
              | 'promotional_material';

            type CarrierText =
              | 'geographic_location'
              | 'inappropriate'
              | 'network_name'
              | 'non_fiat_currency'
              | 'other'
              | 'other_entity'
              | 'promotional_material';
          }
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

          /**
           * Updates the status of the specified testmode card design object to rejected.
           */
          rejectTestmode(
            id: string,
            params: CardDesignRejectTestmodeParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Issuing.CardDesign>>;
        }
      }
    }
  }
}
