// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace ProductCatalog {
      /**
       * Resource for the TrialOffer API, used to describe a subscription item's trial period settings.
       * Renders a TrialOffer object that describes the price, duration, end_behavior of a trial offer.
       */
      interface TrialOffer {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'product_catalog.trial_offer';

        duration: TrialOffer.Duration;

        end_behavior: TrialOffer.EndBehavior;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The price during the trial offer.
         */
        price: string | Stripe.Price;
      }

      namespace TrialOffer {
        interface Duration {
          relative?: Duration.Relative;

          /**
           * The type of trial offer duration.
           */
          type: Duration.Type;
        }

        namespace Duration {
          interface Relative {
            /**
             * The number of iterations of the price's interval for this trial offer.
             */
            iterations: number;
          }

          type Type = 'relative' | 'timestamp';
        }

        interface EndBehavior {
          transition: EndBehavior.Transition;

          /**
           * The type of behavior when the trial offer ends.
           */
          type: 'transition';
        }

        namespace EndBehavior {
          interface Transition {
            /**
             * The new price to use at the end of the trial offer period.
             */
            price: string;
          }
        }
      }
    }
  }
}
