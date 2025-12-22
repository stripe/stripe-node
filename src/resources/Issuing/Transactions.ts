// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../lib.js';
import {Authorization} from './Authorizations.js';
import {BalanceTransaction} from './../BalanceTransactions.js';
import {Card} from './Cards.js';
import {Cardholder} from './Cardholders.js';
import {Dispute} from './Disputes.js';
import {Token} from './Tokens.js';
import {
  Emptyable,
  MetadataParam,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../../shared.js';
import {ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class TransactionResource extends StripeResource {
  /**
   * Returns a list of Issuing Transaction objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
   */
  list(
    params?: Issuing.TransactionListParams,
    options?: RequestOptions
  ): ApiListPromise<Transaction>;
  list(options?: RequestOptions): ApiListPromise<Transaction>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/issuing/transactions',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieves an Issuing Transaction object.
   */
  retrieve(
    id: string,
    params?: Issuing.TransactionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Transaction>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<Transaction>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/issuing/transactions/{transaction}',
    }).call(this, ...args);
  }

  /**
   * Updates the specified Issuing Transaction object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   */
  update(
    id: string,
    params?: Issuing.TransactionUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Transaction>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/issuing/transactions/{transaction}',
    }).call(this, ...args);
  }
}
export interface Transaction {
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
  amount_details: Issuing.Transaction.AmountDetails | null;

  /**
   * The `Authorization` object that led to this transaction.
   */
  authorization: string | Authorization | null;

  /**
   * ID of the [balance transaction](https://stripe.com/docs/api/balance_transactions) associated with this transaction.
   */
  balance_transaction: string | BalanceTransaction | null;

  /**
   * The card used to make this transaction.
   */
  card: string | Card;

  /**
   * The cardholder to whom this transaction belongs.
   */
  cardholder: string | Cardholder | null;

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
  dispute: string | Dispute | null;

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

  merchant_data: Issuing.Transaction.MerchantData;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  /**
   * Details about the transaction, such as processing dates, set by the card network.
   */
  network_data: Issuing.Transaction.NetworkData | null;

  /**
   * Additional purchase information that is optionally provided by the merchant.
   */
  purchase_details?: Issuing.Transaction.PurchaseDetails | null;

  /**
   * [Token](https://stripe.com/docs/api/issuing/tokens/object) object used for this transaction. If a network token was not used for this transaction, this field will be null.
   */
  token?: string | Token | null;

  /**
   * [Treasury](https://stripe.com/docs/api/treasury) details related to this transaction if it was created on a [FinancialAccount](/docs/api/treasury/financial_accounts
   */
  treasury?: Issuing.Transaction.Treasury | null;

  /**
   * The nature of the transaction.
   */
  type: Issuing.Transaction.Type;

  /**
   * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`.
   */
  wallet: Issuing.Transaction.Wallet | null;
}
export namespace Issuing {
  export namespace Transaction {
    export interface AmountDetails {
      /**
       * The fee charged by the ATM for the cash withdrawal.
       */
      atm_fee: number | null;

      /**
       * The amount of cash requested by the cardholder.
       */
      cashback_amount: number | null;
    }

    export interface MerchantData {
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
       * The seller's tax identification number. Currently populated for French merchants only.
       */
      tax_id: string | null;

      /**
       * An ID assigned by the seller to the location of the sale.
       */
      terminal_id: string | null;

      /**
       * URL provided by the merchant on a 3DS request
       */
      url: string | null;
    }

    export interface NetworkData {
      /**
       * A code created by Stripe which is shared with the merchant to validate the authorization. This field will be populated if the authorization message was approved. The code typically starts with the letter "S", followed by a six-digit number. For example, "S498162". Please note that the code is not guaranteed to be unique across authorizations.
       */
      authorization_code: string | null;

      /**
       * The date the transaction was processed by the card network. This can be different from the date the seller recorded the transaction depending on when the acquirer submits the transaction to the network.
       */
      processing_date: string | null;

      /**
       * Unique identifier for the authorization assigned by the card network used to match subsequent messages, disputes, and transactions.
       */
      transaction_id: string | null;
    }

    export interface PurchaseDetails {
      /**
       * Fleet-specific information for transactions using Fleet cards.
       */
      fleet: PurchaseDetails.Fleet | null;

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

    export interface Treasury {
      /**
       * The Treasury [ReceivedCredit](https://stripe.com/docs/api/treasury/received_credits) representing this Issuing transaction if it is a refund
       */
      received_credit: string | null;

      /**
       * The Treasury [ReceivedDebit](https://stripe.com/docs/api/treasury/received_debits) representing this Issuing transaction if it is a capture
       */
      received_debit: string | null;
    }

    export type Type = 'capture' | 'refund';

    export type Wallet = 'apple_pay' | 'google_pay' | 'samsung_pay';

    export namespace PurchaseDetails {
      export interface Fleet {
        /**
         * Answers to prompts presented to cardholder at point of sale.
         */
        cardholder_prompt_data: Fleet.CardholderPromptData | null;

        /**
         * The type of purchase. One of `fuel_purchase`, `non_fuel_purchase`, or `fuel_and_non_fuel_purchase`.
         */
        purchase_type: string | null;

        /**
         * More information about the total amount. This information is not guaranteed to be accurate as some merchants may provide unreliable data.
         */
        reported_breakdown: Fleet.ReportedBreakdown | null;

        /**
         * The type of fuel service. One of `non_fuel_transaction`, `full_service`, or `self_service`.
         */
        service_type: string | null;
      }

      export interface Flight {
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

      export interface Fuel {
        /**
         * [Conexxus Payment System Product Code](https://www.conexxus.org/conexxus-payment-system-product-codes) identifying the primary fuel product purchased.
         */
        industry_product_code: string | null;

        /**
         * The quantity of `unit`s of fuel that was dispensed, represented as a decimal string with at most 12 decimal places.
         */
        quantity_decimal: string | null;

        /**
         * The type of fuel that was purchased. One of `diesel`, `unleaded_plus`, `unleaded_regular`, `unleaded_super`, or `other`.
         */
        type: string;

        /**
         * The units for `quantity_decimal`. One of `charging_minute`, `imperial_gallon`, `kilogram`, `kilowatt_hour`, `liter`, `pound`, `us_gallon`, or `other`.
         */
        unit: string;

        /**
         * The cost in cents per each unit of fuel, represented as a decimal string with at most 12 decimal places.
         */
        unit_cost_decimal: string;
      }

      export interface Lodging {
        /**
         * The time of checking into the lodging.
         */
        check_in_at: number | null;

        /**
         * The number of nights stayed at the lodging.
         */
        nights: number | null;
      }

      export interface Receipt {
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

      export namespace Fleet {
        export interface CardholderPromptData {
          /**
           * Driver ID.
           */
          driver_id: string | null;

          /**
           * Odometer reading.
           */
          odometer: number | null;

          /**
           * An alphanumeric ID. This field is used when a vehicle ID, driver ID, or generic ID is entered by the cardholder, but the merchant or card network did not specify the prompt type.
           */
          unspecified_id: string | null;

          /**
           * User ID.
           */
          user_id: string | null;

          /**
           * Vehicle number.
           */
          vehicle_number: string | null;
        }

        export interface ReportedBreakdown {
          /**
           * Breakdown of fuel portion of the purchase.
           */
          fuel: ReportedBreakdown.Fuel | null;

          /**
           * Breakdown of non-fuel portion of the purchase.
           */
          non_fuel: ReportedBreakdown.NonFuel | null;

          /**
           * Information about tax included in this transaction.
           */
          tax: ReportedBreakdown.Tax | null;
        }

        export namespace ReportedBreakdown {
          export interface Fuel {
            /**
             * Gross fuel amount that should equal Fuel Volume multipled by Fuel Unit Cost, inclusive of taxes.
             */
            gross_amount_decimal: string | null;
          }

          export interface NonFuel {
            /**
             * Gross non-fuel amount that should equal the sum of the line items, inclusive of taxes.
             */
            gross_amount_decimal: string | null;
          }

          export interface Tax {
            /**
             * Amount of state or provincial Sales Tax included in the transaction amount. Null if not reported by merchant or not subject to tax.
             */
            local_amount_decimal: string | null;

            /**
             * Amount of national Sales Tax or VAT included in the transaction amount. Null if not reported by merchant or not subject to tax.
             */
            national_amount_decimal: string | null;
          }
        }
      }

      export namespace Flight {
        export interface Segment {
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
    }
  }
}
export namespace Issuing {
  export interface TransactionRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Issuing {
  export interface TransactionUpdateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;
  }
}
export namespace Issuing {
  export interface TransactionListParams extends PaginationParams {
    /**
     * Only return transactions that belong to the given card.
     */
    card?: string;

    /**
     * Only return transactions that belong to the given cardholder.
     */
    cardholder?: string;

    /**
     * Only return transactions that were created during the given date interval.
     */
    created?: RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return transactions that have the given type. One of `capture` or `refund`.
     */
    type?: TransactionListParams.Type;
  }

  export namespace TransactionListParams {
    export type Type = 'capture' | 'refund';
  }
}
