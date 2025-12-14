// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * OutboundPaymentQuote represents a quote that provides fee and amount estimates for OutboundPayment.
         */
        interface OutboundPaymentQuote {
          /**
           * Unique identifier for the OutboundPaymentQuote.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.money_management.outbound_payment_quote';

          /**
           * The "presentment amount" for the OutboundPaymentQuote.
           */
          amount: OutboundPaymentQuote.Amount;

          /**
           * Time at which the OutboundPaymentQuote was created.
           * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
           */
          created: string;

          /**
           * Delivery options to be used to send the OutboundPayment.
           */
          delivery_options?: OutboundPaymentQuote.DeliveryOptions;

          /**
           * The estimated fees for the OutboundPaymentQuote.
           */
          estimated_fees: Array<OutboundPaymentQuote.EstimatedFee>;

          /**
           * Details about the sender of an OutboundPaymentQuote.
           */
          from: OutboundPaymentQuote.From;

          /**
           * The underlying FXQuote details for the OutboundPaymentQuote.
           */
          fx_quote: OutboundPaymentQuote.FxQuote;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Details about the recipient of an OutboundPaymentQuote.
           */
          to: OutboundPaymentQuote.To;
        }

        namespace OutboundPaymentQuote {
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

          interface DeliveryOptions {
            /**
             * Open Enum. Method for bank account.
             */
            bank_account?: DeliveryOptions.BankAccount;

            /**
             * Open Enum. Speed of the payout.
             */
            speed?: DeliveryOptions.Speed;
          }

          namespace DeliveryOptions {
            type BankAccount = 'automatic' | 'local' | 'wire';

            type Speed = 'instant' | 'next_business_day' | 'standard';
          }

          interface EstimatedFee {
            /**
             * The fee amount for corresponding fee type.
             */
            amount: EstimatedFee.Amount;

            /**
             * The fee type.
             */
            type: EstimatedFee.Type;
          }

          namespace EstimatedFee {
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

            type Type =
              | 'cross_border_payout_fee'
              | 'foreign_exchange_fee'
              | 'instant_payout_fee'
              | 'real_time_payout_fee'
              | 'standard_payout_fee'
              | 'wire_payout_fee';
          }

          interface From {
            /**
             * The monetary amount debited from the sender, only set on responses.
             */
            debited: From.Debited;

            /**
             * The FinancialAccount that funds were pulled from.
             */
            financial_account: string;
          }

          namespace From {
            interface Debited {
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

          interface FxQuote {
            /**
             * The duration the exchange rate lock remains valid from creation time. Allowed value is five_minutes or none.
             */
            lock_duration: FxQuote.LockDuration;

            /**
             * Time at which the rate lock will expire, measured in seconds since the Unix epoch. Null when rate locking is not supported.
             */
            lock_expires_at?: string;

            /**
             * Lock status of the quote. Transitions from active to expired once past the lock_expires_at timestamp. Value can be active, expired or none.
             */
            lock_status: FxQuote.LockStatus;

            /**
             * Key pair: from currency Value: exchange rate going from_currency -> to_currency.
             */
            rates: {
              [key: string]: FxQuote.Rates;
            };

            /**
             * The currency that the transaction is exchanging to.
             */
            to_currency: string;
          }

          namespace FxQuote {
            type LockDuration = 'five_minutes' | 'none';

            type LockStatus = 'active' | 'expired' | 'none';

            interface Rates {
              /**
               * The exchange rate going from_currency -> to_currency.
               */
              exchange_rate: string;
            }
          }

          interface To {
            /**
             * The monetary amount being credited to the destination.
             */
            credited: To.Credited;

            /**
             * The payout method which the OutboundPayment uses to send payout.
             */
            payout_method: string;

            /**
             * To which account the OutboundPayment is sent.
             */
            recipient: string;
          }

          namespace To {
            interface Credited {
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
        }
      }
    }
  }
}
