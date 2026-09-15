// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Reader} from './../../Terminal/Readers.js';
import {ApplyExpand, OtherString} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';

export class ReaderResource extends StripeResource {
  /**
   * Presents a payment method on a simulated reader. Can be used to simulate accepting a payment, saving a card or refunding a transaction.
   */
  presentPaymentMethod<E extends string = never>(
    id: string,
    params?: TestHelpers.Terminal.ReaderPresentPaymentMethodParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Reader, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/terminal/readers/${encodeURIComponent(
        id
      )}/present_payment_method`,
      params,
      options
    ) as any;
  }
  /**
   * Use this endpoint to trigger a successful input collection on a simulated reader.
   */
  succeedInputCollection<E extends string = never>(
    id: string,
    params?: TestHelpers.Terminal.ReaderSucceedInputCollectionParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Reader, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/terminal/readers/${encodeURIComponent(
        id
      )}/succeed_input_collection`,
      params,
      options
    ) as any;
  }
  /**
   * Use this endpoint to complete an input collection with a timeout error on a simulated reader.
   */
  timeoutInputCollection<E extends string = never>(
    id: string,
    params?: TestHelpers.Terminal.ReaderTimeoutInputCollectionParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Reader, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/terminal/readers/${encodeURIComponent(
        id
      )}/timeout_input_collection`,
      params,
      options
    ) as any;
  }
}
export namespace TestHelpers {
  export namespace Terminal {
    export interface ReaderPresentPaymentMethodParams<
      E extends string = string
    > {
      /**
       * Simulated on-reader tip amount.
       */
      amount_tip?: number;

      /**
       * Simulated data for the card payment method.
       */
      card?: ReaderPresentPaymentMethodParams.Card;

      /**
       * Simulated data for the card_present payment method.
       */
      card_present?: ReaderPresentPaymentMethodParams.CardPresent;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<E>;

      /**
       * Simulated data for the interac_present payment method.
       */
      interac_present?: ReaderPresentPaymentMethodParams.InteracPresent;

      /**
       * Simulated payment type.
       */
      type?: ReaderPresentPaymentMethodParams.Type;
    }

    export namespace ReaderPresentPaymentMethodParams {
      export interface Card {
        /**
         * Card security code.
         */
        cvc?: string;

        /**
         * Two-digit number representing the card's expiration month.
         */
        exp_month: number;

        /**
         * Two- or four-digit number representing the card's expiration year.
         */
        exp_year: number;

        /**
         * The card number, as a string without any separators.
         */
        number: string;
      }

      export interface CardPresent {
        /**
         * The card number, as a string without any separators.
         */
        number?: string;
      }

      export interface InteracPresent {
        /**
         * The Interac card number.
         */
        number?: string;
      }

      export type Type =
        | 'card'
        | 'card_present'
        | 'interac_present'
        | OtherString;
    }
  }
}
export namespace TestHelpers {
  export namespace Terminal {
    export interface ReaderSucceedInputCollectionParams<
      E extends string = string
    > {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<E>;

      /**
       * This parameter defines the skip behavior for input collection.
       */
      skip_non_required_inputs?: ReaderSucceedInputCollectionParams.SkipNonRequiredInputs;
    }

    export namespace ReaderSucceedInputCollectionParams {
      export type SkipNonRequiredInputs = 'all' | 'none' | OtherString;
    }
  }
}
export namespace TestHelpers {
  export namespace Terminal {
    export interface ReaderTimeoutInputCollectionParams<
      E extends string = string
    > {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<E>;
    }
  }
}
