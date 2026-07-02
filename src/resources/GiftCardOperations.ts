// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {GiftCard} from './GiftCards.js';
import {RequestOptions, Response} from '../lib.js';

export class GiftCardOperationResource extends StripeResource {
  /**
   * Retrieves a third-party gift card operation object.
   */
  retrieve(
    id: string,
    params?: GiftCardOperationRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<GiftCardOperation>> {
    return this._makeRequest(
      'GET',
      `/v1/gift_card_operations/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface GiftCardOperation {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'gift_card_operation';

  /**
   * Details about a gift card activation operation.
   */
  activation?: GiftCardOperation.Activation;

  /**
   * Details about a gift card activation void operation.
   */
  activation_void?: GiftCardOperation.ActivationVoid;

  /**
   * Details about a gift card balance check operation.
   */
  balance_check?: GiftCardOperation.BalanceCheck;

  /**
   * Details about a gift card cashout operation.
   */
  cashout?: GiftCardOperation.Cashout;

  /**
   * Details about a gift card cashout void operation.
   */
  cashout_void?: GiftCardOperation.CashoutVoid;

  /**
   * The timestamp of when this operation was completed.
   */
  completed_at: number;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The failure code of the operation. Only present if the status is failed.
   */
  failure_code: GiftCardOperation.FailureCode | null;

  /**
   * The gift card this operation was performed on.
   */
  gift_card: string | GiftCard;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * ID of the location that this transaction's reader is assigned to.
   */
  location?: string;

  /**
   * The connected account whose credentials were used to perform this operation.
   */
  on_behalf_of: string | null;

  /**
   * ID of the reader this transaction was made on.
   */
  reader?: string;

  /**
   * Details about a gift card reload operation.
   */
  reload?: GiftCardOperation.Reload;

  /**
   * Details about a gift card reload void operation.
   */
  reload_void?: GiftCardOperation.ReloadVoid;

  /**
   * The status of the operation.
   */
  status: GiftCardOperation.Status;

  /**
   * The type of operation performed.
   */
  type: GiftCardOperation.Type;
}
export namespace GiftCardOperation {
  export interface Activation {
    /**
     * The balance amount of a gift card, including currency and amount.
     */
    balance: Activation.Balance;
  }

  export interface ActivationVoid {
    /**
     * The operation that was voided.
     */
    voided_operation: string;
  }

  export interface BalanceCheck {
    /**
     * The balance amount of a gift card, including currency and amount.
     */
    balance: BalanceCheck.Balance;
  }

  export interface Cashout {
    /**
     * The balance amount of a gift card, including currency and amount.
     */
    balance: Cashout.Balance;

    /**
     * The balance before the operation.
     */
    previous_balance: Cashout.PreviousBalance | null;
  }

  export interface CashoutVoid {
    /**
     * The balance amount of a gift card, including currency and amount.
     */
    balance: CashoutVoid.Balance;

    /**
     * The operation that was voided.
     */
    voided_operation: string;
  }

  export type FailureCode =
    | 'action_not_supported'
    | 'card_already_activated'
    | 'card_expired'
    | 'card_not_activated'
    | 'do_not_honor'
    | 'generic_failure'
    | 'insufficient_balance'
    | 'invalid_amount'
    | 'invalid_currency'
    | 'invalid_number'
    | 'invalid_pin'
    | 'invalid_track_data'
    | 'lost_card'
    | 'lost_or_stolen_card'
    | 'pin_required'
    | 'pin_tries_exceeded'
    | 'processing_error'
    | 'provider_unavailable'
    | 'stolen_card'
    | 'suspected_fraud'
    | 'timeout';

  export interface Reload {
    /**
     * The balance amount of a gift card, including currency and amount.
     */
    balance: Reload.Balance;

    /**
     * The balance before the operation.
     */
    previous_balance: Reload.PreviousBalance | null;
  }

  export interface ReloadVoid {
    /**
     * The balance amount of a gift card, including currency and amount.
     */
    balance: ReloadVoid.Balance;

    /**
     * The operation that was voided.
     */
    voided_operation: string;
  }

  export type Status = 'failed' | 'succeeded';

  export type Type =
    | 'activation'
    | 'activation_void'
    | 'balance_check'
    | 'cashout'
    | 'cashout_void'
    | 'reload'
    | 'reload_void';

  export namespace Activation {
    export interface Balance {
      /**
       * The balance amount.
       */
      amount: number;

      /**
       * The currency of the balance.
       */
      currency: string;
    }
  }

  export namespace BalanceCheck {
    export interface Balance {
      /**
       * The balance amount.
       */
      amount: number;

      /**
       * The currency of the balance.
       */
      currency: string;
    }
  }

  export namespace Cashout {
    export interface Balance {
      /**
       * The balance amount.
       */
      amount: number;

      /**
       * The currency of the balance.
       */
      currency: string;
    }

    export interface PreviousBalance {
      /**
       * The balance amount.
       */
      amount: number;

      /**
       * The currency of the balance.
       */
      currency: string;
    }
  }

  export namespace CashoutVoid {
    export interface Balance {
      /**
       * The balance amount.
       */
      amount: number;

      /**
       * The currency of the balance.
       */
      currency: string;
    }
  }

  export namespace Reload {
    export interface Balance {
      /**
       * The balance amount.
       */
      amount: number;

      /**
       * The currency of the balance.
       */
      currency: string;
    }

    export interface PreviousBalance {
      /**
       * The balance amount.
       */
      amount: number;

      /**
       * The currency of the balance.
       */
      currency: string;
    }
  }

  export namespace ReloadVoid {
    export interface Balance {
      /**
       * The balance amount.
       */
      amount: number;

      /**
       * The currency of the balance.
       */
      currency: string;
    }
  }
}
export interface GiftCardOperationRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
