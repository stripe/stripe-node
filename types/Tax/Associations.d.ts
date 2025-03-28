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
         * Status of the Tax Association.
         */
        status: Association.Status;

        status_details: Association.StatusDetails;
      }

      namespace Association {
        type Status = 'committed' | 'errored';

        interface StatusDetails {
          committed?: StatusDetails.Committed;

          errored?: StatusDetails.Errored;
        }

        namespace StatusDetails {
          interface Committed {
            /**
             * Attempts to create Tax Transaction reversals
             */
            reversals: Array<Committed.Reversal>;

            /**
             * The [Tax Transaction](https://stripe.com/docs/api/tax/transaction/object)
             */
            transaction: string;
          }

          namespace Committed {
            interface Reversal {
              /**
               * Status of the attempted Tax Transaction reversal.
               */
              status: Reversal.Status;

              status_details: Reversal.StatusDetails;
            }

            namespace Reversal {
              type Status = 'committed' | 'errored';

              interface StatusDetails {
                committed?: StatusDetails.Committed;

                errored?: StatusDetails.Errored;
              }

              namespace StatusDetails {
                interface Committed {
                  /**
                   * The [Tax Transaction](https://stripe.com/docs/api/tax/transaction/object)
                   */
                  transaction: string;
                }

                interface Errored {
                  /**
                   * Details on why we could not commit the reversal Tax Transaction
                   */
                  reason: Errored.Reason;

                  /**
                   * The [Refund](https://stripe.com/docs/api/refunds/object) ID that should have created a tax reversal.
                   */
                  refund_id: string;
                }

                namespace Errored {
                  type Reason =
                    | 'original_transaction_voided'
                    | 'unique_reference_violation';
                }
              }
            }
          }

          interface Errored {
            /**
             * Details on why we could not commit the Tax Transaction
             */
            reason: Errored.Reason;
          }

          namespace Errored {
            type Reason =
              | 'another_payment_associated_with_calculation'
              | 'calculation_expired'
              | 'currency_mismatch'
              | 'unique_reference_violation';
          }
        }
      }
    }
  }
}
