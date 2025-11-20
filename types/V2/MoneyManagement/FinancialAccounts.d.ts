// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * A FinancialAccount represents a balance and can be used as the source or destination for the money management (`/v2/money_management`) APIs.
         */
        interface FinancialAccount {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.money_management.financial_account';

          /**
           * Multi-currency balance of this FinancialAccount, split by availability state. Each balance is represented as a hash where the key is the three-letter ISO currency code, in lowercase, and the value is the amount for that currency.
           */
          balance: FinancialAccount.Balance;

          /**
           * Open Enum. Two-letter country code that represents the country where the LegalEntity associated with the FinancialAccount is based in.
           */
          country: string;

          /**
           * Time at which the object was created.
           */
          created: string;

          /**
           * A descriptive name for the FinancialAccount, up to 50 characters long. This name will be used in the Stripe Dashboard and embedded components.
           */
          display_name?: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Metadata associated with the FinancialAccount.
           */
          metadata?: Stripe.Metadata;

          /**
           * If this is a `other` FinancialAccount, this hash indicates what the actual type is. Upgrade your API version to see it reflected in `type`.
           */
          other?: FinancialAccount.Other;

          /**
           * Closed Enum. An enum representing the status of the FinancialAccount. This indicates whether or not the FinancialAccount can be used for any money movement flows.
           */
          status: FinancialAccount.Status;

          status_details?: FinancialAccount.StatusDetails;

          /**
           * If this is a `storage` FinancialAccount, this hash includes details specific to `storage` FinancialAccounts.
           */
          storage?: FinancialAccount.Storage;

          /**
           * Type of the FinancialAccount. An additional hash is included on the FinancialAccount with a name matching this value.
           * It contains additional information specific to the FinancialAccount type.
           */
          type: FinancialAccount.Type;
        }

        namespace FinancialAccount {
          interface Balance {
            /**
             * Balance that can be used for money movement.
             */
            available: {
              [key: string]: Balance.Available;
            };

            /**
             * Balance of inbound funds that will later transition to the `available` balance.
             */
            inbound_pending: {
              [key: string]: Balance.InboundPending;
            };

            /**
             * Balance of funds that are being used for a pending outbound money movement.
             */
            outbound_pending: {
              [key: string]: Balance.OutboundPending;
            };
          }

          namespace Balance {
            interface Available {
              /**
               * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
               */
              value?: number;

              /**
               * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
               */
              currency?: string;
            }

            interface InboundPending {
              /**
               * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
               */
              value?: number;

              /**
               * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
               */
              currency?: string;
            }

            interface OutboundPending {
              /**
               * A non-negative integer representing how much to charge in the [smallest currency unit](https://docs.stripe.com/currencies#minor-units).
               */
              value?: number;

              /**
               * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
               */
              currency?: string;
            }
          }

          interface Other {
            /**
             * The type of the FinancialAccount, represented as a string. Upgrade your API version to see the type reflected in `financial_account.type`.
             */
            type: string;
          }

          type Status = 'closed' | 'open' | 'pending';

          interface StatusDetails {
            closed?: StatusDetails.Closed;
          }

          namespace StatusDetails {
            interface Closed {
              forwarding_settings?: Closed.ForwardingSettings;

              reason: Closed.Reason;
            }

            namespace Closed {
              interface ForwardingSettings {
                /**
                 * The address to send forwarded payments to.
                 */
                payment_method?: string;

                /**
                 * The address to send forwarded payouts to.
                 */
                payout_method?: string;
              }

              type Reason = 'account_closed' | 'closed_by_platform' | 'other';
            }
          }

          interface Storage {
            /**
             * The currencies that this FinancialAccount can hold.
             */
            holds_currencies: Array<string>;
          }

          type Type = 'other' | 'storage';
        }
      }
    }
  }
}
