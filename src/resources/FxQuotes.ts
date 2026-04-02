// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {PaginationParams} from '../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../lib.js';

export class FxQuoteResource extends StripeResource {
  /**
   * Returns a list of FX quotes that have been issued. The FX quotes are returned in sorted order, with the most recent FX quotes appearing first.
   */
  list(
    params?: FxQuoteListParams,
    options?: RequestOptions
  ): ApiListPromise<FxQuote> {
    return this._makeRequest('GET', '/v1/fx_quotes', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Creates an FX Quote object
   */
  create(
    params: FxQuoteCreateParams,
    options?: RequestOptions
  ): Promise<Response<FxQuote>> {
    return this._makeRequest('POST', '/v1/fx_quotes', params, options) as any;
  }
  /**
   * Retrieve an FX Quote object
   */
  retrieve(
    id: string,
    params?: FxQuoteRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<FxQuote>> {
    return this._makeRequest(
      'GET',
      `/v1/fx_quotes/${id}`,
      params,
      options
    ) as any;
  }
}
export interface FxQuote {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'fx_quote';

  /**
   * Time at which the quote was created, measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The duration the exchange rate quote remains valid from creation time. Allowed values are none, hour, and day. Note that for the test mode API available in alpha, you can request an extended quote, but it won't be usable for any transactions.
   */
  lock_duration: FxQuote.LockDuration;

  /**
   * Time at which the quote will expire, measured in seconds since the Unix epoch.
   *
   * If lock_duration is set to ‘none' this field will be set to null.
   */
  lock_expires_at: number | null;

  /**
   * Lock status of the quote. Transitions from active to expired once past the lock_expires_at timestamp.
   *
   * Can return value none, active, or expired.
   */
  lock_status: FxQuote.LockStatus;

  /**
   * Information about the rates.
   */
  rates: {
    [key: string]: FxQuote.Rates;
  };

  /**
   * The currency to convert into, typically this is the currency that you want to settle to your Stripe balance. Three-letter ISO currency code, in lowercase. Must be a supported currency.
   */
  to_currency: string;

  usage: FxQuote.Usage;
}
export namespace FxQuote {
  export type LockDuration = 'day' | 'five_minutes' | 'hour' | 'none';

  export type LockStatus = 'active' | 'expired' | 'none';

  export interface Rates {
    /**
     * The rate that includes the FX fee rate.
     */
    exchange_rate: number;

    rate_details: Rates.RateDetails;
  }

  export interface Usage {
    /**
     * The details required to use an FX Quote for a payment
     */
    payment: Usage.Payment | null;

    /**
     * The details required to use an FX Quote for a transfer
     */
    transfer: Usage.Transfer | null;

    /**
     * The transaction type for which the FX Quote will be used.
     *
     * Can be 'payment' or 'transfer'.
     */
    type: Usage.Type;
  }

  export namespace Rates {
    export interface RateDetails {
      /**
       * The rate for the currency pair.
       */
      base_rate: number;

      /**
       * The fee for locking the conversion rates.
       */
      duration_premium: number;

      /**
       * The FX fee for the currency pair.
       */
      fx_fee_rate: number;

      /**
       * A reference rate for the currency pair provided by the reference rate provider.
       */
      reference_rate: number | null;

      /**
       * The reference rate provider.
       */
      reference_rate_provider: 'ecb' | null;
    }
  }

  export namespace Usage {
    export interface Payment {
      /**
       * The Stripe account ID that the funds will be transferred to.
       *
       * This field should match the account ID that would be used in the PaymentIntent's transfer_data[destination] field.
       */
      destination: string | null;

      /**
       * The Stripe account ID that these funds are intended for.
       *
       * This field must match the account ID that would be used in the PaymentIntent's on_behalf_of field.
       */
      on_behalf_of: string | null;
    }

    export interface Transfer {
      /**
       * The Stripe account ID that the funds will be transferred to.
       *
       * This field should match the account ID that would be used in the Transfer's destination field.
       */
      destination: string;
    }

    export type Type = 'payment' | 'transfer';
  }
}
export interface FxQuoteCreateParams {
  /**
   * A list of three letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be [supported currencies](https://stripe.com/docs/currencies).
   */
  from_currencies: Array<string>;

  /**
   * The duration that you wish the quote to be locked for. The quote will be usable for the duration specified. The default is `none`. The maximum is 1 day.
   */
  lock_duration: FxQuoteCreateParams.LockDuration;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  to_currency: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * The usage specific information for the quote.
   */
  usage?: FxQuoteCreateParams.Usage;
}
export namespace FxQuoteCreateParams {
  export type LockDuration = 'day' | 'five_minutes' | 'hour' | 'none';

  export interface Usage {
    /**
     * The payment transaction details that are intended for the FX Quote.
     */
    payment?: Usage.Payment;

    /**
     * The transfer transaction details that are intended for the FX Quote.
     */
    transfer?: Usage.Transfer;

    /**
     * Which transaction the FX Quote will be used for
     *
     * Can be “payment” | “transfer”
     */
    type: Usage.Type;
  }

  export namespace Usage {
    export interface Payment {
      /**
       * The Stripe account ID that the funds will be transferred to.
       *
       * This field should match the account ID that would be used in the PaymentIntent's transfer_data[destination] field.
       */
      destination?: string;

      /**
       * The Stripe account ID that these funds are intended for.
       *
       * This field should match the account ID that would be used in the PaymentIntent's on_behalf_of field.
       */
      on_behalf_of?: string;
    }

    export interface Transfer {
      /**
       * The Stripe account ID that the funds will be transferred to.
       *
       * This field should match the account ID that would be used in the Transfer's destination field.
       */
      destination: string;
    }

    export type Type = 'payment' | 'transfer';
  }
}
export interface FxQuoteRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface FxQuoteListParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
