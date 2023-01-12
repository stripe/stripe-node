// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      /**
       * A Tax `Registration` lets us know that your business is registered to collect tax on payments within a region, enabling you to [automatically collect tax](https://stripe.com/docs/tax).
       *
       * Stripe will not register on your behalf with the relevant authorities when you create a Tax `Registration` object. For more information on how to register to collect tax, see [our guide](https://stripe.com/docs/tax/registering).
       */
      interface Registration {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'tax.registration';

        /**
         * Time at which the registration becomes active. Measured in seconds since the Unix epoch.
         */
        active_from: number;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country: string;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * If set, the registration stops being active at this time. If not set, the registration will be active indefinitely. Measured in seconds since the Unix epoch.
         */
        expires_at: number | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * State, county, province, or region.
         */
        state: string | null;

        /**
         * The status of the registration. This field is present for convenience and can be deduced from `active_from` and `expires_at`.
         */
        status: Registration.Status;

        /**
         * The type of the registration. See [our guide](https://stripe.com/docs/tax/registering) for more information about registration types.
         */
        type: Registration.Type;
      }

      namespace Registration {
        type Status = 'active' | 'expired' | 'scheduled';

        type Type =
          | 'domestic_small_seller'
          | 'simplified'
          | 'standard'
          | 'vat_oss_non_union'
          | 'vat_oss_union';
      }
    }
  }
}
