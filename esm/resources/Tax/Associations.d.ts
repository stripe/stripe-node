import { StripeResource } from '../../StripeResource.js';
import { RequestOptions, Response } from '../../lib.js';
export declare class AssociationResource extends StripeResource {
    /**
     * Finds a tax association object by PaymentIntent id.
     */
    find(params: Tax.AssociationFindParams, options?: RequestOptions): Promise<Response<Association>>;
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
export declare namespace Tax {
    namespace Association {
        interface TaxTransactionAttempt {
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
        namespace TaxTransactionAttempt {
            interface Committed {
                /**
                 * The [Tax Transaction](https://docs.stripe.com/api/tax/transaction/object)
                 */
                transaction: string;
            }
            interface Errored {
                /**
                 * Details on why we couldn't commit the tax transaction.
                 */
                reason: Errored.Reason;
            }
            namespace Errored {
                type Reason = 'another_payment_associated_with_calculation' | 'calculation_expired' | 'currency_mismatch' | 'original_transaction_voided' | 'unique_reference_violation';
            }
        }
    }
}
export declare namespace Tax {
    interface AssociationFindParams {
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
