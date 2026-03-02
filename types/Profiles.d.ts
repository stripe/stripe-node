// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A Stripe profile
     */
    interface Profile {
      id: string;

      object: 'profile';

      branding: Profile.Branding | null;

      description: string | null;

      display_name: string;

      livemode: boolean;

      url: string | null;

      username: string;
    }

    namespace Profile {
      interface Branding {
        icon: Branding.Icon | null;

        logo: Branding.Logo | null;

        primary_color: string | null;

        secondary_color: string | null;
      }

      namespace Branding {
        interface Icon {
          original: string;
        }

        interface Logo {
          original: string;
        }
      }
    }
  }
}
