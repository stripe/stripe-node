// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {RequestOptions} from '../Types.js';
import {Response} from '../lib.js';
const stripeMethod = StripeResource.method;
export class BalanceResource extends StripeResource {
  /**
   * Retrieves the current account balance, based on the authentication that was used to make the request.
   *  For a sample request, see [Accounting for negative balances](https://docs.stripe.com/docs/connect/account-balances#accounting-for-negative-balances).
   */
  retrieve(
    params?: BalanceRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Balance>>;
  retrieve(options?: RequestOptions): Promise<Response<Balance>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/balance',
    }).call(this, ...args);
  }
}
export /**
 * This is an object representing your Stripe balance. You can retrieve it to see
 * the balance currently on your Stripe account.
 *
 * The top-level `available` and `pending` comprise your "payments balance."
 *
 * Related guide: [Balances and settlement time](https://stripe.com/docs/payments/balances), [Understanding Connect account balances](https://stripe.com/docs/connect/account-balances)
 */
interface Balance {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'balance';

  /**
   * Available funds that you can transfer or pay out automatically by Stripe or explicitly through the [Transfers API](https://stripe.com/docs/api#transfers) or [Payouts API](https://stripe.com/docs/api#payouts). You can find the available balance for each currency and payment type in the `source_types` property.
   */
  available: Array<Balance.Available>;

  /**
   * Funds held due to negative balances on connected accounts where [account.controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. You can find the connect reserve balance for each currency and payment type in the `source_types` property.
   */
  connect_reserved?: Array<Balance.ConnectReserved>;

  /**
   * Funds that you can pay out using Instant Payouts.
   */
  instant_available?: Array<Balance.InstantAvailable>;

  issuing?: Balance.Issuing;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Funds that aren't available in the balance yet. You can find the pending balance for each currency and each payment type in the `source_types` property.
   */
  pending: Array<Balance.Pending>;

  refund_and_dispute_prefunding?: Balance.RefundAndDisputePrefunding;
}
export namespace Balance {
  export interface Available {
    /**
     * Balance amount.
     */
    amount: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    source_types?: Available.SourceTypes;
  }

  export interface ConnectReserved {
    /**
     * Balance amount.
     */
    amount: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    source_types?: ConnectReserved.SourceTypes;
  }

  export interface InstantAvailable {
    /**
     * Balance amount.
     */
    amount: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * Breakdown of balance by destination.
     */
    net_available?: Array<InstantAvailable.NetAvailable>;

    source_types?: InstantAvailable.SourceTypes;
  }

  export interface Issuing {
    /**
     * Funds that are available for use.
     */
    available: Array<Issuing.Available>;
  }

  export interface Pending {
    /**
     * Balance amount.
     */
    amount: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    source_types?: Pending.SourceTypes;
  }

  export interface RefundAndDisputePrefunding {
    /**
     * Funds that are available for use.
     */
    available: Array<RefundAndDisputePrefunding.Available>;

    /**
     * Funds that are pending
     */
    pending: Array<RefundAndDisputePrefunding.Pending>;
  }

  export namespace Available {
    export interface SourceTypes {
      /**
       * Amount coming from [legacy US ACH payments](https://docs.stripe.com/ach-deprecated).
       */
      bank_account?: number;

      /**
       * Amount coming from most payment methods, including cards as well as [non-legacy bank debits](https://docs.stripe.com/payments/bank-debits).
       */
      card?: number;

      /**
       * Amount coming from [FPX](https://docs.stripe.com/payments/fpx), a Malaysian payment method.
       */
      fpx?: number;
    }
  }

  export namespace ConnectReserved {
    export interface SourceTypes {
      /**
       * Amount coming from [legacy US ACH payments](https://docs.stripe.com/ach-deprecated).
       */
      bank_account?: number;

      /**
       * Amount coming from most payment methods, including cards as well as [non-legacy bank debits](https://docs.stripe.com/payments/bank-debits).
       */
      card?: number;

      /**
       * Amount coming from [FPX](https://docs.stripe.com/payments/fpx), a Malaysian payment method.
       */
      fpx?: number;
    }
  }

  export namespace InstantAvailable {
    export interface NetAvailable {
      /**
       * Net balance amount, subtracting fees from platform-set pricing.
       */
      amount: number;

      /**
       * ID of the external account for this net balance (not expandable).
       */
      destination: string;

      source_types?: NetAvailable.SourceTypes;
    }

    export interface SourceTypes {
      /**
       * Amount coming from [legacy US ACH payments](https://docs.stripe.com/ach-deprecated).
       */
      bank_account?: number;

      /**
       * Amount coming from most payment methods, including cards as well as [non-legacy bank debits](https://docs.stripe.com/payments/bank-debits).
       */
      card?: number;

      /**
       * Amount coming from [FPX](https://docs.stripe.com/payments/fpx), a Malaysian payment method.
       */
      fpx?: number;
    }

    export namespace NetAvailable {
      export interface SourceTypes {
        /**
         * Amount coming from [legacy US ACH payments](https://docs.stripe.com/ach-deprecated).
         */
        bank_account?: number;

        /**
         * Amount coming from most payment methods, including cards as well as [non-legacy bank debits](https://docs.stripe.com/payments/bank-debits).
         */
        card?: number;

        /**
         * Amount coming from [FPX](https://docs.stripe.com/payments/fpx), a Malaysian payment method.
         */
        fpx?: number;
      }
    }
  }

  export namespace Issuing {
    export interface Available {
      /**
       * Balance amount.
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      source_types?: Available.SourceTypes;
    }

    export namespace Available {
      export interface SourceTypes {
        /**
         * Amount coming from [legacy US ACH payments](https://docs.stripe.com/ach-deprecated).
         */
        bank_account?: number;

        /**
         * Amount coming from most payment methods, including cards as well as [non-legacy bank debits](https://docs.stripe.com/payments/bank-debits).
         */
        card?: number;

        /**
         * Amount coming from [FPX](https://docs.stripe.com/payments/fpx), a Malaysian payment method.
         */
        fpx?: number;
      }
    }
  }

  export namespace Pending {
    export interface SourceTypes {
      /**
       * Amount coming from [legacy US ACH payments](https://docs.stripe.com/ach-deprecated).
       */
      bank_account?: number;

      /**
       * Amount coming from most payment methods, including cards as well as [non-legacy bank debits](https://docs.stripe.com/payments/bank-debits).
       */
      card?: number;

      /**
       * Amount coming from [FPX](https://docs.stripe.com/payments/fpx), a Malaysian payment method.
       */
      fpx?: number;
    }
  }

  export namespace RefundAndDisputePrefunding {
    export interface Available {
      /**
       * Balance amount.
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      source_types?: Available.SourceTypes;
    }

    export interface Pending {
      /**
       * Balance amount.
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      source_types?: Pending.SourceTypes;
    }

    export namespace Available {
      export interface SourceTypes {
        /**
         * Amount coming from [legacy US ACH payments](https://docs.stripe.com/ach-deprecated).
         */
        bank_account?: number;

        /**
         * Amount coming from most payment methods, including cards as well as [non-legacy bank debits](https://docs.stripe.com/payments/bank-debits).
         */
        card?: number;

        /**
         * Amount coming from [FPX](https://docs.stripe.com/payments/fpx), a Malaysian payment method.
         */
        fpx?: number;
      }
    }

    export namespace Pending {
      export interface SourceTypes {
        /**
         * Amount coming from [legacy US ACH payments](https://docs.stripe.com/ach-deprecated).
         */
        bank_account?: number;

        /**
         * Amount coming from most payment methods, including cards as well as [non-legacy bank debits](https://docs.stripe.com/payments/bank-debits).
         */
        card?: number;

        /**
         * Amount coming from [FPX](https://docs.stripe.com/payments/fpx), a Malaysian payment method.
         */
        fpx?: number;
      }
    }
  }
}
export interface BalanceRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
