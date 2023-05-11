// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      /**
       * You can use Tax `Settings` to manage configurations used by Stripe Tax calculations.
       *
       * Related guide: [Using the Settings API](https://stripe.com/docs/tax/settings-api).
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
        locations?: Array<Settings.Location>;
      }

      namespace Settings {
        interface Defaults {
          /**
           * Default [tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#tax-behavior) used to specify whether the price is considered inclusive of taxes or exclusive of taxes. If the item's price has a tax behavior set, it will take precedence over the default tax behavior.
           */
          tax_behavior: Defaults.TaxBehavior | null;

          /**
           * Default [tax code](https://stripe.com/docs/tax/tax-categories) used to classify your products and prices.
           */
          tax_code: string | null;
        }

        namespace Defaults {
          type TaxBehavior = 'exclusive' | 'inclusive' | 'inferred_by_currency';
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
