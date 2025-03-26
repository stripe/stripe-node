// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        namespace OutboundPayments {
          interface QuoteCreateParams {
            /**
             * The "presentment amount" to be sent to the recipient.
             */
            amount: Amount;

            /**
             * Request details about the sender of an OutboundPaymentQuote.
             */
            from: QuoteCreateParams.From;

            /**
             * Request details about the recipient of an OutboundPaymentQuote.
             */
            to: QuoteCreateParams.To;

            /**
             * Method to be used to send the OutboundPayment.
             */
            delivery_options?: QuoteCreateParams.DeliveryOptions;
          }

          namespace QuoteCreateParams {
            interface DeliveryOptions {
              /**
               * Open Enum. Method for bank account.
               */
              bank_account?: DeliveryOptions.BankAccount;
            }

            namespace DeliveryOptions {
              type BankAccount = 'automatic' | 'local' | 'wire';
            }

            interface From {
              /**
               * Describes the FinancialAccount's currency drawn from.
               */
              currency: string;

              /**
               * The FinancialAccount that funds were pulled from.
               */
              financial_account: string;
            }

            interface To {
              /**
               * Describes the currency to send to the recipient.
               * If included, this currency must match a currency supported by the destination.
               * Can be omitted in the following cases:
               * - destination only supports one currency
               * - destination supports multiple currencies and one of the currencies matches the FA currency
               * - destination supports multiple currencies and one of the currencies matches the presentment currency
               * Note - when both FA currency and presentment currency are supported, we pick the FA currency to minimize FX.
               */
              currency?: string;

              /**
               * The payout method which the OutboundPayment uses to send payout.
               */
              payout_method?: string;

              /**
               * To which account the OutboundPayment is sent.
               */
              recipient: string;
            }
          }
        }
      }

      namespace MoneyManagement {
        namespace OutboundPayments {
          class QuotesResource {
            /**
             * Creates an OutboundPaymentQuote usable in an OutboundPayment.
             */
            create(
              params: QuoteCreateParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.OutboundPaymentQuote>>;
          }
        }
      }
    }
  }
}
