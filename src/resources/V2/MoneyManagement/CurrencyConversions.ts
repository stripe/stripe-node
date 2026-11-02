// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class CurrencyConversionResource extends StripeResource {
  /**
   * Lists all Currency Conversions that match the provided filters.
   */
  list(
    params?: V2.MoneyManagement.CurrencyConversionListParams,
    options?: RequestOptions
  ): V2ListPromise<CurrencyConversion> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/currency_conversions',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Create a new Currency Conversion in a Financial Account or the payments balance.
   * @throws Stripe.FxQuoteExpiredError
   * @throws Stripe.FeatureNotEnabledError
   */
  create(
    params: V2.MoneyManagement.CurrencyConversionCreateParams,
    options?: RequestOptions
  ): Promise<Response<CurrencyConversion>> {
    return this._makeRequest(
      'POST',
      '/v2/money_management/currency_conversions',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves the details of a Currency Conversion by its ID.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.CurrencyConversionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<CurrencyConversion>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/currency_conversions/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface CurrencyConversion {
  /**
   * The ID of the Currency Conversion.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.currency_conversion';

  /**
   * The time the Currency Conversion was created at.
   */
  created: string;

  /**
   * The exchange rate used, excluding applicable fees.
   */
  exchange_rate: string;

  /**
   * The ID of the Financial Account the Currency Conversion was created in. If `null`, it was created in the payments balance.
   */
  financial_account?: string;

  /**
   * The amount that was debited from the source currency.
   */
  from: CurrencyConversion.From;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The amount that was credited to the destination currency.
   */
  to: CurrencyConversion.To;
}
export namespace CurrencyConversion {
  export interface From {
    /**
     * A specific amount.
     */
    amount: V2Amount;
  }

  export interface To {
    /**
     * A specific amount.
     */
    amount: V2Amount;
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface CurrencyConversionCreateParams {
      /**
       * The source currency to debit, optionally including an amount. Either `from` or `to` must contain a specific amount (but not both).
       */
      from: CurrencyConversionCreateParams.From;

      /**
       * The destination currency to credit, optionally including an amount.
       */
      to: CurrencyConversionCreateParams.To;

      /**
       * The ID of the Financial Account in which the Currency Conversion should be created. If omitted, it will be created in the payments balance.
       */
      financial_account?: string;

      /**
       * The ID of the [FX Quote](https://docs.stripe.com/api/fx_quotes) to use.
       */
      fx_quote?: string;
    }

    export namespace CurrencyConversionCreateParams {
      export interface From {
        /**
         * An amount specified for conversion.
         */
        amount?: V2Amount;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency?: string;
      }

      export interface To {
        /**
         * An amount specified for conversion.
         */
        amount?: V2Amount;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency?: string;
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface CurrencyConversionRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface CurrencyConversionListParams {
      /**
       * The ID of the Financial Account for which conversions should be listed.
       */
      financial_account?: string;

      /**
       * The maximum number of Currency Conversions to return.
       */
      limit?: number;
    }
  }
}
