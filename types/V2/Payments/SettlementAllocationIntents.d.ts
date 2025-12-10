// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Payments {
        /**
         * SettlementAllocationIntent resource.
         */
        interface SettlementAllocationIntent {
          /**
           * Unique identifier for the SettlementAllocationIntent.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.payments.settlement_allocation_intent';

          /**
           * The amount and currency of the SettlementAllocationIntent.
           */
          amount: SettlementAllocationIntent.Amount;

          /**
           * Timestamp at which Settlement Intent was created .
           */
          created: string;

          /**
           * Expected date when we expect to receive the funds.
           */
          expected_settlement_date: string;

          /**
           * Financial Account Id where the funds are expected.
           */
          financial_account: string;

          /**
           * List of ReceivedCredits that matched with the SettlementAllocationIntent.
           */
          linked_credits: Array<string>;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Metadata associated with the SettlementAllocationIntent.
           */
          metadata?: Stripe.Metadata;

          /**
           * Reference for the settlement intent . The reference used by PSP to send funds to Stripe .
           */
          reference: string;

          /**
           * Settlement Intent status.
           */
          status: SettlementAllocationIntent.Status;

          /**
           * This hash contains detailed information that elaborates on the specific status of the SettlementAllocationIntent. e.g the reason behind the error failure if the status is marked as `errored`.
           */
          status_details?: SettlementAllocationIntent.StatusDetails;
        }

        namespace SettlementAllocationIntent {
          interface Amount {
            /**
             * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
             */
            value?: number;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency?: string;
          }

          type Status =
            | 'canceled'
            | 'errored'
            | 'matched'
            | 'pending'
            | 'settled'
            | 'submitted';

          interface StatusDetails {
            /**
             * Hash that provides additional information regarding the reason behind a `errored` SettlementAllocationIntent status. It is only present when the SettlementAllocationIntent status is `errored`.
             */
            errored?: StatusDetails.Errored;
          }

          namespace StatusDetails {
            interface Errored {
              /**
               * Stripe doc link to debug the issue.
               */
              doc_url?: string;

              /**
               * User Message detailing the reason code and possible resolution .
               */
              message: string;

              /**
               * Open Enum. The `errored` status reason.
               */
              reason_code: 'amount_mismatch';
            }
          }
        }
      }
    }
  }
}
