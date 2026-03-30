// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Amount} from './../../V2/Amounts.js';
import {RequestOptions, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class OutboundPaymentQuoteResource extends StripeResource {
  /**
   * Creates an OutboundPaymentQuote usable in an OutboundPayment.
   * @throws Stripe.FeatureNotEnabledError
   */
  create(
    params: V2.MoneyManagement.OutboundPaymentQuoteCreateParams,
    options?: RequestOptions
  ): Promise<Response<OutboundPaymentQuote>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/money_management/outbound_payment_quotes',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of an existing OutboundPaymentQuote by passing the unique OutboundPaymentQuote ID.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.OutboundPaymentQuoteRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<OutboundPaymentQuote>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<OutboundPaymentQuote>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/money_management/outbound_payment_quotes/{id}',
    }).call(this, ...args);
  }
}
export interface OutboundPaymentQuote {
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
  delivery_options?: V2.MoneyManagement.OutboundPaymentQuote.DeliveryOptions;

  /**
   * The estimated fees for the OutboundPaymentQuote.
   */
  estimated_fees: Array<V2.MoneyManagement.OutboundPaymentQuote.EstimatedFee>;

  /**
   * Details about the sender of an OutboundPaymentQuote.
   */
  from: V2.MoneyManagement.OutboundPaymentQuote.From;

  /**
   * The underlying FXQuote details for the OutboundPaymentQuote.
   */
  fx_quote: V2.MoneyManagement.OutboundPaymentQuote.FxQuote;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Details about the recipient of an OutboundPaymentQuote.
   */
  to: V2.MoneyManagement.OutboundPaymentQuote.To;
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace OutboundPaymentQuote {
      export interface DeliveryOptions {
        /**
         * Open Enum. Speed of the payout.
         */
        speed?: DeliveryOptions.Speed;

        /**
         * Open Enum. Method for bank account.
         */
        bank_account?: DeliveryOptions.BankAccount;
      }

      export interface EstimatedFee {
        /**
         * The fee amount for corresponding fee type.
         */
        amount: Amount;

        /**
         * The fee type.
         */
        type: EstimatedFee.Type;
      }

      export interface From {
        /**
         * The monetary amount debited from the sender, only set on responses.
         */
        debited: Amount;

        /**
         * The FinancialAccount that funds were pulled from.
         */
        financial_account: string;
      }

      export interface FxQuote {
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

      export interface To {
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

      export namespace DeliveryOptions {
        export type Speed = 'instant' | 'next_business_day' | 'standard';

        export type BankAccount = 'automatic' | 'local' | 'wire';
      }

      export namespace EstimatedFee {
        export type Type =
          | 'cross_border_payout_fee'
          | 'foreign_exchange_fee'
          | 'instant_payout_fee'
          | 'next_day_payout_fee'
          | 'real_time_payout_fee'
          | 'standard_payout_fee'
          | 'wire_payout_fee';
      }

      export namespace FxQuote {
        export type LockDuration = 'five_minutes' | 'none';

        export type LockStatus = 'active' | 'expired' | 'none';

        export interface Rates {
          /**
           * The exchange rate going from_currency -> to_currency.
           */
          exchange_rate: string;
        }
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface OutboundPaymentQuoteCreateParams {
      /**
       * The "presentment amount" to be sent to the recipient.
       */
      amount: Amount;

      /**
       * Request details about the sender of an OutboundPaymentQuote.
       */
      from: OutboundPaymentQuoteCreateParams.From;

      /**
       * Request details about the recipient of an OutboundPaymentQuote.
       */
      to: OutboundPaymentQuoteCreateParams.To;

      /**
       * Method to be used to send the OutboundPayment.
       */
      delivery_options?: OutboundPaymentQuoteCreateParams.DeliveryOptions;
    }

    export namespace OutboundPaymentQuoteCreateParams {
      export interface From {
        /**
         * Describes the FinancialAccount's currency drawn from.
         */
        currency: string;

        /**
         * The FinancialAccount that funds were pulled from.
         */
        financial_account: string;
      }

      export interface To {
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

      export interface DeliveryOptions {
        /**
         * Open Enum. Speed of the payout.
         */
        speed?: DeliveryOptions.Speed;

        /**
         * Open Enum. Method for bank account.
         */
        bank_account?: DeliveryOptions.BankAccount;
      }

      export namespace DeliveryOptions {
        export type Speed = 'instant' | 'next_business_day' | 'standard';

        export type BankAccount = 'automatic' | 'local' | 'wire';
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface OutboundPaymentQuoteRetrieveParams {}
  }
}
