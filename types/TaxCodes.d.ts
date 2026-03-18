// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * [Tax codes](https://stripe.com/docs/tax/tax-categories) classify goods and services for tax purposes.
     */
    interface TaxCode {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'tax_code';

      /**
       * A detailed description of which types of products the tax code represents.
       */
      description: string;

      /**
       * A short name for the tax code.
       */
      name: string;

      /**
       * An object that describes more information about the tax location required for this tax code. Some [tax codes](https://docs.stripe.com/tax/tax-for-tickets/integration-guide#types-of-products) require a tax location of type `performance` to calculate tax correctly.
       */
      requirements?: TaxCode.Requirements | null;
    }

    namespace TaxCode {
      interface Requirements {
        /**
         * Describes whether a performance location is required for a successful tax calculation with a tax code.
         */
        performance_location?: Requirements.PerformanceLocation;
      }

      namespace Requirements {
        type PerformanceLocation = 'optional' | 'required';
      }
    }
  }
}
