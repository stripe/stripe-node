// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions} from '../../../Types.js';
import {ReceivedDebit} from './../../Treasury/ReceivedDebits.js';
import {Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;
export class ReceivedDebitResource extends StripeResource {
  /**
   * Use this endpoint to simulate a test mode ReceivedDebit initiated by a third party. In live mode, you can't directly create ReceivedDebits initiated by third parties.
   */
  create(
    params: TestHelpers.Treasury.ReceivedDebitCreateParams,
    options?: RequestOptions
  ): Promise<Response<ReceivedDebit>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/test_helpers/treasury/received_debits',
    }).call(this, ...args);
  }
}
export namespace TestHelpers {
  export namespace Treasury {
    export interface ReceivedDebitCreateParams {
      /**
       * Amount (in cents) to be transferred.
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * The FinancialAccount to pull funds from.
       */
      financial_account: string;

      /**
       * Specifies the network rails to be used. If not set, will default to the PaymentMethod's preferred network. See the [docs](https://stripe.com/docs/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.
       */
      network: 'ach';

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Initiating payment method details for the object.
       */
      initiating_payment_method_details?: ReceivedDebitCreateParams.InitiatingPaymentMethodDetails;
    }

    export namespace ReceivedDebitCreateParams {
      export interface InitiatingPaymentMethodDetails {
        /**
         * The source type.
         */
        type: 'us_bank_account';

        /**
         * Optional fields for `us_bank_account`.
         */
        us_bank_account?: InitiatingPaymentMethodDetails.UsBankAccount;
      }

      export namespace InitiatingPaymentMethodDetails {
        export interface UsBankAccount {
          /**
           * The bank account holder's name.
           */
          account_holder_name?: string;

          /**
           * The bank account number.
           */
          account_number?: string;

          /**
           * The bank account's routing number.
           */
          routing_number?: string;
        }
      }
    }
  }
}
