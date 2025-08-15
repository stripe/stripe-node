// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Tax {
        /**
         * An AutomaticRule holds automatic Tax configuration for a BillableItem.
         */
        interface AutomaticRule {
          /**
           * The ID of the AutomaticRule object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.tax.automatic_rule';

          /**
           * The ID of the BillableItem.
           */
          billable_item: string;

          /**
           * The time at which the AutomaticRule object was created.
           */
          created: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * The status of the AutomaticRule object.
           */
          status: AutomaticRule.Status;

          /**
           * A TaxCode object that will be used for automatic tax calculations.
           */
          tax_code: string;
        }

        namespace AutomaticRule {
          type Status = 'active' | 'inactive';
        }
      }
    }
  }
}
