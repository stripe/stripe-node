// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      /**
       * You can use Tax `Settings` to manage configurations used by Stripe Tax calculations.
       *
       * Related guide: [Account settings](https://stripe.com/docs/tax/connect/settings).
       */
      interface Settings {
        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'tax.settings';

        defaults: Settings.Defaults;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The places where your business is located.
         */
        locations: Array<Settings.Location>;
      }

      namespace Settings {
        interface Defaults {
          /**
           * Default [tax code](https://stripe.com/docs/tax/tax-categories) used to classify your products and prices.
           */
          tax_code: string | null;
        }

        interface Location {
          address: Stripe.Address;

          /**
           * The role of this location address.
           */
          role: 'head_office';
        }
      }
    }
  }
}
