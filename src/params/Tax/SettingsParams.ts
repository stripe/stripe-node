// File generated from our OpenAPI spec

namespace Tax {
  export interface SettingsRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
namespace Tax {
  export interface SettingsUpdateParams {
    /**
     * Default configuration to be used on Stripe Tax calculations.
     */
    defaults?: SettingsUpdateParams.Defaults;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The place where your business is located.
     */
    head_office?: SettingsUpdateParams.HeadOffice;
  }

  namespace SettingsUpdateParams {
    export interface Defaults {
      /**
       * Specifies the default [tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#tax-behavior) to be used when the item's price has unspecified tax behavior. One of inclusive, exclusive, or inferred_by_currency. Once specified, it cannot be changed back to null.
       */
      tax_behavior?: Defaults.TaxBehavior;

      /**
       * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
       */
      tax_code?: string;
    }

    export interface HeadOffice {
      /**
       * The location of the business for tax purposes.
       */
      address: Stripe.AddressParam;
    }

    namespace Defaults {
      export type TaxBehavior =
        | 'exclusive'
        | 'inclusive'
        | 'inferred_by_currency';
    }
  }
}
