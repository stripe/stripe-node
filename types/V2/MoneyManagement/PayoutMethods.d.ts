// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * Use the PayoutMethods API to list and interact with PayoutMethod objects.
         */
        interface PayoutMethod {
          /**
           * ID of the PayoutMethod object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.money_management.payout_method';

          /**
           * A set of available payout speeds for this payout method.
           */
          available_payout_speeds: Array<PayoutMethod.AvailablePayoutSpeed>;

          /**
           * The PayoutMethodBankAccount object details.
           */
          bank_account: PayoutMethod.BankAccount | null;

          /**
           * The PayoutMethodCard object details.
           */
          card: PayoutMethod.Card | null;

          /**
           * Created timestamp.
           */
          created: string;

          /**
           * ID of the underlying active OutboundSetupIntent object, if any.
           */
          latest_outbound_setup_intent: string | null;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Closed Enum. The type of payout method.
           */
          type: PayoutMethod.Type;

          /**
           * Indicates whether the payout method has met the necessary requirements for outbound money movement.
           */
          usage_status: PayoutMethod.UsageStatus;
        }

        namespace PayoutMethod {
          type AvailablePayoutSpeed = 'instant' | 'standard';

          interface BankAccount {
            /**
             * Whether this PayoutMethodBankAccount object was archived. PayoutMethodBankAccount objects can be archived through
             * the /archive API, and they will not be automatically archived by Stripe. Archived PayoutMethodBankAccount objects
             * cannot be used as payout methods and will not appear in the payout method list.
             */
            archived: boolean;

            /**
             * The name of the bank this bank account is in. This field is populated automatically by Stripe.
             */
            bank_name: string;

            /**
             * The country code of the bank account.
             */
            country: string;

            /**
             * List of enabled flows for this bank account (wire or local).
             */
            enabled_delivery_options: Array<string>;

            /**
             * The last 4 digits of the account number.
             */
            last4: string;

            /**
             * The routing number of the bank account, if present.
             */
            routing_number: string | null;

            /**
             * The list of currencies supported by this bank account.
             */
            supported_currencies: Array<string>;
          }

          interface Card {
            /**
             * Whether the PayoutMethodCard object was archived. PayoutMethodCard objects can be archived through
             * the /archive API, and they will not be automatically archived by Stripe. Archived PayoutMethodCard objects
             * cannot be used as payout methods and will not appear in the payout method list.
             */
            archived: boolean;

            /**
             * The month the card expires.
             */
            exp_month: string;

            /**
             * The year the card expires.
             */
            exp_year: string;

            /**
             * The last 4 digits of the card number.
             */
            last4: string;
          }

          type Type = 'bank_account' | 'card';

          interface UsageStatus {
            /**
             * Payments status - used when sending OutboundPayments (sending funds to recipients).
             */
            payments: UsageStatus.Payments;

            /**
             * Transfers status - used when making an OutboundTransfer (sending funds to yourself).
             */
            transfers: UsageStatus.Transfers;
          }

          namespace UsageStatus {
            type Payments = 'eligible' | 'invalid' | 'requires_action';

            type Transfers = 'eligible' | 'invalid' | 'requires_action';
          }
        }
      }
    }
  }
}
