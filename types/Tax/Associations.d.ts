// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      /**
       * A Tax Association exposes the Tax Transactions that Stripe attempted to create on your behalf based on the PaymentIntent input
       */
      interface Association {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'tax.association';

        /**
         * The [Tax Calculation](https://stripe.com/docs/api/tax/calculations/object) that was included in PaymentIntent.
         */
        calculation: string;

        /**
         * The [PaymentIntent](https://stripe.com/docs/api/payment_intents/object) that this Tax Association is tracking.
         */
        payment_intent: string;

        /**
         * Information about the tax transactions linked to this payment intent
         */
        tax_transaction_attempts: Array<
          Association.TaxTransactionAttempt
        > | null;
      }

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
             * The [Tax Transaction](https://stripe.com/docs/api/tax/transaction/object)
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
            type Reason =
              | 'another_payment_associated_with_calculation'
              | 'calculation_expired'
              | 'currency_mismatch'
              | 'original_transaction_voided'
              | 'unique_reference_violation';
          }
        }
      }
    }
  }
}
