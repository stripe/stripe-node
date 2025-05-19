// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Payments {
        /**
         * Off-session payment resource.
         */
        interface OffSessionPayment {
          /**
           * ID of the OSP.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.payments.off_session_payment';

          /**
           * The amount you requested to be collected on the OSP upon creation.
           */
          amount_requested: Amount;

          /**
           * Number of authorization attempts.
           */
          attempts: number;

          /**
           * The frequency of the underlying payment that this OSP represents.
           */
          cadence: OffSessionPayment.Cadence;

          /**
           * ID of owning compartment.
           */
          compartment_id: string;

          /**
           * Timestamp of creation.
           */
          created: string;

          /**
           * Customer owning the supplied payment method.
           */
          customer: string;

          /**
           * Reason why the OSP failed.
           */
          failure_reason: OffSessionPayment.FailureReason | null;

          /**
           * Last error returned by the financial partner for a failed authorization.
           */
          last_authorization_attempt_error: string | null;

          /**
           * Payment attempt record for the latest attempt, if one exists.
           */
          latest_payment_attempt_record: string | null;

          /**
           * True if the txn is livemode, false otherwise.
           */
          livemode: boolean;

          /**
           * Metadata you provided.
           */
          metadata: Stripe.Metadata;

          /**
           * OBO, same as on the PI.
           */
          on_behalf_of: string | null;

          /**
           * ID of payment method.
           */
          payment_method: string;

          /**
           * Payment record associated with the OSP. consistent across attempts.
           */
          payment_record: string | null;

          /**
           * Details about the OSP retries.
           */
          retry_details: OffSessionPayment.RetryDetails;

          /**
           * Statement descriptor you provided.
           */
          statement_descriptor: string | null;

          /**
           * Statement descriptor suffix you provided, similar to that on the PI.
           */
          statement_descriptor_suffix: string | null;

          /**
           * Status of the OSP.
           */
          status: OffSessionPayment.Status;

          /**
           * Test clock to be used to advance the retry attempts.
           */
          test_clock: string | null;

          /**
           * Instructions for the transfer to be made with this OSP after successful money movement.
           */
          transfer_data: OffSessionPayment.TransferData | null;
        }

        namespace OffSessionPayment {
          type Cadence = 'recurring' | 'unscheduled';

          type FailureReason = 'rejected_by_partner' | 'retries_exhausted';

          interface RetryDetails {
            /**
             * Number of authorization attempts so far.
             */
            attempts: number;

            /**
             * How you want Stripe to retry the payment.
             */
            retry_strategy: RetryDetails.RetryStrategy;
          }

          namespace RetryDetails {
            type RetryStrategy = 'none' | 'smart';
          }

          type Status =
            | 'canceled'
            | 'failed'
            | 'pending'
            | 'pending_retry'
            | 'processing'
            | 'requires_capture'
            | 'succeeded';

          interface TransferData {
            /**
             * Amount in minor units that you want to transfer.
             */
            amount: number;

            /**
             * ID of the connected account where you want money to go.
             */
            destination: string;
          }
        }
      }
    }
  }
}
