// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * OutboundPaymentQuote represents a quote
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
          amount: Amount;

          /**
           * Time at which the OutboundPaymentQuote was created.
           * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
           */
          created: string;

          /**
           * Delivery options to be used to send the OutboundPayment.
           */
          delivery_options: OutboundPaymentQuote.DeliveryOptions | null;

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
           * Details about the recipient of an OutboundPaymentQuote.
           */
          to: OutboundPaymentQuote.To;
        }

        namespace OutboundPaymentQuote {
          interface DeliveryOptions {
            /**
             * Open Enum. Method for bank account.
             */
            bank_account: DeliveryOptions.BankAccount | null;
          }

          namespace DeliveryOptions {
            type BankAccount = 'automatic' | 'local' | 'wire';
          }

          interface EstimatedFee {
            /**
             * The fee amount for corresponding fee type.
             */
            amount: Amount;

            /**
             * The fee type.
             */
            type: EstimatedFee.Type;
          }

          namespace EstimatedFee {
            type Type = 'cross_border_fee' | 'fx_fee' | 'payout_fee';
          }

          interface From {
            /**
             * The monetary amount debited from the sender, only set on responses.
             */
            debited: Amount;

            /**
             * The FinancialAccount that funds were pulled from.
             */
            financial_account: string;
          }

          interface FxQuote {
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
            credited: Amount;

            /**
             * The payout method which the OutboundPayment uses to send payout.
             */
            payout_method: string;

            /**
             * To which account the OutboundPayment is sent.
             */
            recipient: string;
          }
        }
      }
    }
  }
}
