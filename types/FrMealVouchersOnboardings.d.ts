// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The French Meal Vouchers Onboarding resource encapsulates the onboarding status and other related information
     * for a single restaurant (SIRET number) in the context of the French Meal Vouchers program.
     */
    interface FrMealVouchersOnboarding {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'fr_meal_vouchers_onboarding';

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * Name of the restaurant.
       */
      name: string;

      /**
       * Postal code of the restaurant.
       */
      postal_code: string;

      /**
       * This represents the onboarding state of the restaurant on different providers.
       */
      providers: FrMealVouchersOnboarding.Providers;

      /**
       * SIRET number associated with the restaurant.
       */
      siret: string;
    }

    namespace FrMealVouchersOnboarding {
      interface Providers {
        /**
         * This represents the onboarding state of the restaurant on Conecs.
         */
        conecs: Providers.Conecs;
      }

      namespace Providers {
        interface Conecs {
          /**
           * This represents information which issuers are available to this restaurant via Conecs
           */
          issuers: Conecs.Issuers;

          /**
           * This represents information about outstanding requirements for this restaurant to onboard to Conecs
           */
          requirements: Conecs.Requirements;

          /**
           * Status of the restaurant's onboarding to Conecs
           */
          status: Conecs.Status;
        }

        namespace Conecs {
          interface Issuers {
            /**
             * Issuers are available to this restaurant via Conecs, will be blank if the onboarding to Conecs is not complete or unsuccessful
             */
            available: Array<Issuers.Available>;
          }

          namespace Issuers {
            type Available = 'bimpli' | 'edenred' | 'pluxee' | 'up';
          }

          interface Requirements {
            /**
             * Information any errors that are preventing the onboarding to Conecs from being completed.
             */
            errors: Array<Requirements.Error>;

            /**
             * Fields that need to be provided to complete the onboarding to Conecs.
             */
            past_due: Array<Requirements.PastDue>;
          }

          namespace Requirements {
            interface Error {
              /**
               * The code for the type of error.
               */
              code: Error.Code;

              /**
               * An informative message that provides additional details about the error.
               */
              message: string;

              /**
               * The specific onboarding requirement field (in the requirements hash) that needs to be resolved.
               */
              requirement: Error.Requirement | null;
            }

            namespace Error {
              type Code = 'postal_code_invalid' | 'siret_invalid';

              type Requirement = 'postal_code' | 'siret';
            }

            type PastDue = 'postal_code' | 'siret';
          }

          type Status =
            | 'action_required'
            | 'active'
            | 'disentitled'
            | 'pending';
        }
      }
    }
  }
}
