// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class CurrencyConversionResource extends StripeResource {
  /**
   * List all CurrencyConversion on an account with the option to filter by FinancialAccount.
   */
  list(
    params?: V2.MoneyManagement.CurrencyConversionListParams,
    options?: RequestOptions
  ): ApiListPromise<CurrencyConversion> {
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
   * Create a CurrencyConversion.
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
   * Retrieve details of a CurrencyConversion by id.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.CurrencyConversionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<CurrencyConversion>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/currency_conversions/${id}`,
      params,
      options
    ) as any;
  }
}
export interface CurrencyConversion {
  /**
   * The id of the CurrencyConversion.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.currency_conversion';

  /**
   * The time the CurrencyConversion was created at.
   */
  created: string;

  /**
   * The exchange rate used when processing the CurrencyConversion.
   */
  exchange_rate: string;

  /**
   * The FinancialAccount the CurrencyConversion was performed on.
   */
  financial_account: string;

  /**
   * The from block containing what was debited.
   */
  from: V2.MoneyManagement.CurrencyConversion.From;

  /**
   * If the CurrencyConversion was performed in livemode or not.
   */
  livemode: boolean;

  /**
   * The to block containing what was credited.
   */
  to: V2.MoneyManagement.CurrencyConversion.To;
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace CurrencyConversion {
      export interface From {
        /**
         * Amount object.
         */
        amount: V2Amount;
      }

      export interface To {
        /**
         * Amount object.
         */
        amount: V2Amount;
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface CurrencyConversionCreateParams {
      /**
       * The FinancialAccount id to create the CurrencyConversion on.
       */
      financial_account: string;

      /**
       * From amount object indicating the from currency or optional amount.
       */
      from: CurrencyConversionCreateParams.From;

      /**
       * To amount object indicating the to currency or optional amount.
       */
      to: CurrencyConversionCreateParams.To;
    }

    export namespace CurrencyConversionCreateParams {
      export interface From {
        /**
         * Amount object.
         */
        amount?: V2Amount;

        /**
         * A lowercase alpha3 currency code like "usd".
         */
        currency?: string;
      }

      export interface To {
        /**
         * Amount object.
         */
        amount?: V2Amount;

        /**
         * A lowercase alpha3 currency code like "usd".
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
       * The ID of the FinancialAccount to filter by.
       */
      financial_account?: string;

      /**
       * The page limit.
       */
      limit?: number;
    }
  }
}
