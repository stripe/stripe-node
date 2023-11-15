// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      /**
       * Any use of an [issued card](https://stripe.com/docs/issuing) that results in funds entering or leaving
       * your Stripe account, such as a completed purchase or refund, is represented by an Issuing
       * `Transaction` object.
       *
       * Related guide: [Issued card transactions](https://stripe.com/docs/issuing/purchases/transactions)
       */
      interface Transaction {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'issuing.transaction';

        /**
         * The transaction amount, which will be reflected in your balance. This amount is in your currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
         */
        amount: number;

        /**
         * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
         */
        amount_details: Transaction.AmountDetails | null;

        /**
         * The `Authorization` object that led to this transaction.
         */
        authorization: string | Stripe.Issuing.Authorization | null;

        /**
         * ID of the [balance transaction](https://stripe.com/docs/api/balance_transactions) associated with this transaction.
         */
        balance_transaction: string | Stripe.BalanceTransaction | null;

        /**
         * The card used to make this transaction.
         */
        card: string | Stripe.Issuing.Card;

        /**
         * The cardholder to whom this transaction belongs.
         */
        cardholder: string | Stripe.Issuing.Cardholder | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * If you've disputed the transaction, the ID of the dispute.
         */
        dispute: string | Stripe.Issuing.Dispute | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The amount that the merchant will receive, denominated in `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). It will be different from `amount` if the merchant is taking payment in a different currency.
         */
        merchant_amount: number;

        /**
         * The currency with which the merchant is taking payment.
         */
        merchant_currency: string;

        merchant_data: Transaction.MerchantData;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * Details about the transaction, such as processing dates, set by the card network.
         */
        network_data: Transaction.NetworkData | null;

        /**
         * Additional purchase information that is optionally provided by the merchant.
         */
        purchase_details: Transaction.PurchaseDetails | null;

        /**
         * [Token](https://stripe.com/docs/api/issuing/tokens/object) object used for this transaction. If a network token was not used for this transaction, this field will be null.
         */
        token?: string | Stripe.Issuing.Token | null;

        /**
         * [Treasury](https://stripe.com/docs/api/treasury) details related to this transaction if it was created on a [FinancialAccount](/docs/api/treasury/financial_accounts
         */
        treasury?: Transaction.Treasury | null;

        /**
         * The nature of the transaction.
         */
        type: Transaction.Type;

        /**
         * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`.
         */
        wallet: Transaction.Wallet | null;
      }

      namespace Transaction {
        interface AmountDetails {
          /**
           * The fee charged by the ATM for the cash withdrawal.
           */
          atm_fee: number | null;

          /**
           * The amount of cash requested by the cardholder.
           */
          cashback_amount: number | null;
        }

        interface MerchantData {
          /**
           * A categorization of the seller's type of business. See our [merchant categories guide](https://stripe.com/docs/issuing/merchant-categories) for a list of possible values.
           */
          category: string;

          /**
           * The merchant category code for the seller's business
           */
          category_code: string;

          /**
           * City where the seller is located
           */
          city: string | null;

          /**
           * Country where the seller is located
           */
          country: string | null;

          /**
           * Name of the seller
           */
          name: string | null;

          /**
           * Identifier assigned to the seller by the card network. Different card networks may assign different network_id fields to the same merchant.
           */
          network_id: string;

          /**
           * Postal code where the seller is located
           */
          postal_code: string | null;

          /**
           * State where the seller is located
           */
          state: string | null;

          /**
           * An ID assigned by the seller to the location of the sale.
           */
          terminal_id: string | null;

          /**
           * URL provided by the merchant on a 3DS request
           */
          url: string | null;
        }

        interface NetworkData {
          /**
           * The date the transaction was processed by the card network. This can be different from the date the seller recorded the transaction depending on when the acquirer submits the transaction to the network.
           */
          processing_date: string | null;
        }

        interface PurchaseDetails {
          /**
           * Information about the flight that was purchased with this transaction.
           */
          flight: PurchaseDetails.Flight | null;

          /**
           * Information about fuel that was purchased with this transaction.
           */
          fuel: PurchaseDetails.Fuel | null;

          /**
           * Information about lodging that was purchased with this transaction.
           */
          lodging: PurchaseDetails.Lodging | null;

          /**
           * The line items in the purchase.
           */
          receipt: Array<PurchaseDetails.Receipt> | null;

          /**
           * A merchant-specific order number.
           */
          reference: string | null;
        }

        namespace PurchaseDetails {
          interface Flight {
            /**
             * The time that the flight departed.
             */
            departure_at: number | null;

            /**
             * The name of the passenger.
             */
            passenger_name: string | null;

            /**
             * Whether the ticket is refundable.
             */
            refundable: boolean | null;

            /**
             * The legs of the trip.
             */
            segments: Array<Flight.Segment> | null;

            /**
             * The travel agency that issued the ticket.
             */
            travel_agency: string | null;
          }

          namespace Flight {
            interface Segment {
              /**
               * The three-letter IATA airport code of the flight's destination.
               */
              arrival_airport_code: string | null;

              /**
               * The airline carrier code.
               */
              carrier: string | null;

              /**
               * The three-letter IATA airport code that the flight departed from.
               */
              departure_airport_code: string | null;

              /**
               * The flight number.
               */
              flight_number: string | null;

              /**
               * The flight's service class.
               */
              service_class: string | null;

              /**
               * Whether a stopover is allowed on this flight.
               */
              stopover_allowed: boolean | null;
            }
          }

          interface Fuel {
            /**
             * The type of fuel that was purchased. One of `diesel`, `unleaded_plus`, `unleaded_regular`, `unleaded_super`, or `other`.
             */
            type: string;

            /**
             * The units for `volume_decimal`. One of `us_gallon` or `liter`.
             */
            unit: string;

            /**
             * The cost in cents per each unit of fuel, represented as a decimal string with at most 12 decimal places.
             */
            unit_cost_decimal: string;

            /**
             * The volume of the fuel that was pumped, represented as a decimal string with at most 12 decimal places.
             */
            volume_decimal: string | null;
          }

          interface Lodging {
            /**
             * The time of checking into the lodging.
             */
            check_in_at: number | null;

            /**
             * The number of nights stayed at the lodging.
             */
            nights: number | null;
          }

          interface Receipt {
            /**
             * The description of the item. The maximum length of this field is 26 characters.
             */
            description: string | null;

            /**
             * The quantity of the item.
             */
            quantity: number | null;

            /**
             * The total for this line item in cents.
             */
            total: number | null;

            /**
             * The unit cost of the item in cents.
             */
            unit_cost: number | null;
          }
        }

        interface Treasury {
          /**
           * The Treasury [ReceivedCredit](https://stripe.com/docs/api/treasury/received_credits) representing this Issuing transaction if it is a refund
           */
          received_credit: string | null;

          /**
           * The Treasury [ReceivedDebit](https://stripe.com/docs/api/treasury/received_debits) representing this Issuing transaction if it is a capture
           */
          received_debit: string | null;
        }

        type Type = 'capture' | 'refund';

        type Wallet = 'apple_pay' | 'google_pay' | 'samsung_pay';
      }
    }
  }
}
