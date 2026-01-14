// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace ProductCatalog {
      interface TrialOfferCreateParams {
        /**
         * Duration of one service period of the trial.
         */
        duration: TrialOfferCreateParams.Duration;

        /**
         * Define behavior that occurs at the end of the trial.
         */
        end_behavior: TrialOfferCreateParams.EndBehavior;

        /**
         * Price configuration during the trial period (amount, billing scheme, etc).
         */
        price: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * A brief, user-friendly name for the trial offer-for identification purposes.
         */
        name?: string;
      }

      namespace TrialOfferCreateParams {
        interface Duration {
          /**
           * The relative duration of the trial period computed as the number of recurring price intervals.
           */
          relative?: Duration.Relative;

          /**
           * Specifies how the trial offer duration is determined.
           */
          type: Duration.Type;
        }

        namespace Duration {
          interface Relative {
            /**
             * The number of recurring price's interval to apply for the trial period.
             */
            iterations: number;
          }

          type Type = 'relative' | 'timestamp';
        }

        interface EndBehavior {
          /**
           * The transition to apply when the trial offer ends.
           */
          transition: EndBehavior.Transition;
        }

        namespace EndBehavior {
          interface Transition {
            /**
             * The price to transition the recurring item to when the trial offer ends.
             */
            price: string;
          }
        }
      }

      class TrialOffersResource {
        /**
         * Creates a trial offer.
         */
        create(
          params: TrialOfferCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.ProductCatalog.TrialOffer>>;
      }
    }
  }
}
