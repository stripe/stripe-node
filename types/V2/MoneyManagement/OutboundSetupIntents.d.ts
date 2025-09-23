// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * Use the OutboundSetupIntent API to create and setup usable payout methods.
         */
        interface OutboundSetupIntent {
          /**
           * ID of the outbound setup intent.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.money_management.outbound_setup_intent';

          /**
           * Created timestamp.
           */
          created: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Specifies which actions needs to be taken next to continue setup of the credential.
           */
          next_action?: OutboundSetupIntent.NextAction;

          /**
           * Use the PayoutMethods API to list and interact with PayoutMethod objects.
           */
          payout_method: Stripe.V2.MoneyManagement.PayoutMethod;

          /**
           * Closed Enum. Status of the outbound setup intent.
           */
          status: OutboundSetupIntent.Status;

          /**
           * The intended money movement flow this payout method should be set up for, specified in params.
           */
          usage_intent: OutboundSetupIntent.UsageIntent;
        }

        namespace OutboundSetupIntent {
          interface NextAction {
            /**
             * The type of next action.
             */
            type: 'confirmation_of_payee';

            /**
             * Confirmation of Payee details.
             */
            confirmation_of_payee?: NextAction.ConfirmationOfPayee;
          }

          namespace NextAction {
            interface ConfirmationOfPayee {
              /**
               * The type of the credential.
               */
              object: string;

              /**
               * The Confirmation of Payee status.
               */
              status: ConfirmationOfPayee.Status;
            }

            namespace ConfirmationOfPayee {
              type Status =
                | 'awaiting_acknowledgement'
                | 'confirmed'
                | 'uninitiated';
            }
          }

          type Status =
            | 'canceled'
            | 'requires_action'
            | 'requires_payout_method'
            | 'succeeded';

          type UsageIntent = 'payment' | 'transfer';
        }
      }
    }
  }
}
