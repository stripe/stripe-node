// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class AssociationResource extends StripeResource {
  /**
   * Finds a tax association object by PaymentIntent id.
   */
  find(
    params: Tax.AssociationFindParams,
    options?: RequestOptions
  ): Promise<Response<Association>>;
  find(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/tax/associations/find',
    }).call(this, ...args);
  }
}
export interface Association {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'tax.association';

  /**
   * The [Tax Calculation](https://docs.stripe.com/api/tax/calculations/object) that was included in PaymentIntent.
   */
  calculation: string;

  /**
   * The [PaymentIntent](https://docs.stripe.com/api/payment_intents/object) that this Tax Association is tracking.
   */
  payment_intent: string;

  /**
   * Information about the tax transactions linked to this payment intent
   */
  tax_transaction_attempts: Array<Tax.Association.TaxTransactionAttempt> | null;
}
export namespace Tax {
  export namespace Association {
    export interface TaxTransactionAttempt {
      committed?: TaxTransactionAttempt.Committed;

      errored?: TaxTransactionAttempt.Errored;

      /**
       * The source of the tax transaction attempt. This is either a refund or a payment intent.
       */
      source: string;

      /**
       * The status of the transaction attempt. This can be `errored` or `committed`.
       */
      status: string;
    }

    export namespace TaxTransactionAttempt {
      export interface Committed {
        /**
         * The [Tax Transaction](https://docs.stripe.com/api/tax/transaction/object)
         */
        transaction: string;
      }

      export interface Errored {
        /**
         * Details on why we couldn't commit the tax transaction.
         */
        reason: Errored.Reason;
      }

      export namespace Errored {
        export type Reason =
          | 'another_payment_associated_with_calculation'
          | 'calculation_expired'
          | 'currency_mismatch'
          | 'original_transaction_voided'
          | 'unique_reference_violation';
      }
    }
  }
}
export namespace Tax {
  export interface AssociationFindParams {
    /**
     * Valid [PaymentIntent](https://docs.stripe.com/api/payment_intents/object) id
     */
    payment_intent: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
