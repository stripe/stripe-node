// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Terminal {
      /**
       * Returns redirect links used for onboarding onto Tap to Pay on iPhone.
       */
      interface OnboardingLink {
        object: 'terminal.onboarding_link';

        /**
         * Link type options associated with the current onboarding link object.
         */
        link_options: OnboardingLink.LinkOptions;

        /**
         * The type of link being generated.
         */
        link_type: 'apple_terms_and_conditions';

        /**
         * Stripe account ID to generate the link for.
         */
        on_behalf_of: string | null;

        /**
         * The link passed back to the user for their onboarding.
         */
        redirect_url: string;
      }

      namespace OnboardingLink {
        interface LinkOptions {
          /**
           * The options associated with the Apple Terms and Conditions link type.
           */
          apple_terms_and_conditions: LinkOptions.AppleTermsAndConditions | null;
        }

        namespace LinkOptions {
          interface AppleTermsAndConditions {
            /**
             * Whether the link should also support users relinking their Apple account.
             */
            allow_relinking: boolean | null;

            /**
             * The business name of the merchant accepting Apple's Terms and Conditions.
             */
            merchant_display_name: string;
          }
        }
      }
    }
  }
}
