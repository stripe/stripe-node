// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Amount} from './../../V2/Amounts.js';
import {MetadataParam, Metadata} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
import {SplitResource} from './SettlementAllocationIntents/Splits.js';
const stripeMethod = StripeResource.method;
import {Stripe} from '../../../stripe.core.js';
export class SettlementAllocationIntentResource extends StripeResource {
  splits: SplitResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.splits = new SplitResource(stripe);
  }
  /**
   * Lists all SettlementAllocationIntents.
   */
  list(
    params?: V2.Payments.SettlementAllocationIntentListParams,
    options?: RequestOptions
  ): ApiListPromise<SettlementAllocationIntent>;
  list(options?: RequestOptions): ApiListPromise<SettlementAllocationIntent>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/payments/settlement_allocation_intents',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Create a new SettlementAllocationIntent.
   */
  create(
    params: V2.Payments.SettlementAllocationIntentCreateParams,
    options?: RequestOptions
  ): Promise<Response<SettlementAllocationIntent>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/payments/settlement_allocation_intents',
    }).call(this, ...args);
  }

  /**
   * Retrieve an existing SettlementAllocationIntent.
   */
  retrieve(
    id: string,
    params?: V2.Payments.SettlementAllocationIntentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<SettlementAllocationIntent>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<SettlementAllocationIntent>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/payments/settlement_allocation_intents/{id}',
    }).call(this, ...args);
  }

  /**
   * Updates SettlementAllocationIntent. Only SettlementAllocationIntent with status `pending`, `submitted` and `errored` can be updated. Only amount and reference fields can be updated for a SettlementAllocationIntent and at least one must be present. Updating an `amount` moves the SettlementAllocationIntent `pending` status and updating the `reference` for `errored` SettlementAllocationIntent moves it to `submitted`.
   */
  update(
    id: string,
    params?: V2.Payments.SettlementAllocationIntentUpdateParams,
    options?: RequestOptions
  ): Promise<Response<SettlementAllocationIntent>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/payments/settlement_allocation_intents/{id}',
    }).call(this, ...args);
  }

  /**
   * Cancels an existing SettlementAllocationIntent. Only SettlementAllocationIntent with status `pending`, `submitted` and `errored` can be `canceled`.
   */
  cancel(
    id: string,
    params?: V2.Payments.SettlementAllocationIntentCancelParams,
    options?: RequestOptions
  ): Promise<Response<SettlementAllocationIntent>>;
  cancel(
    id: string,
    options?: RequestOptions
  ): Promise<Response<SettlementAllocationIntent>>;
  cancel(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/payments/settlement_allocation_intents/{id}/cancel',
    }).call(this, ...args);
  }

  /**
   * Submits a SettlementAllocationIntent. Only SettlementAllocationIntent with status `pending` can be `submitted`. The net sum of SettlementAllocationIntentSplit amount must be equal to SettlementAllocationIntent amount to be eligible to be submitted.
   */
  submit(
    id: string,
    params?: V2.Payments.SettlementAllocationIntentSubmitParams,
    options?: RequestOptions
  ): Promise<Response<SettlementAllocationIntent>>;
  submit(
    id: string,
    options?: RequestOptions
  ): Promise<Response<SettlementAllocationIntent>>;
  submit(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/payments/settlement_allocation_intents/{id}/submit',
    }).call(this, ...args);
  }
}
export interface SettlementAllocationIntent {
  /**
   * Unique identifier for the SettlementAllocationIntent.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.payments.settlement_allocation_intent';

  /**
   * The amount and currency of the SettlementAllocationIntent.
   */
  amount: Amount;

  /**
   * Timestamp at which SettlementAllocationIntent was created .
   */
  created: string;

  /**
   * Date when we expect to receive the funds.
   */
  expected_settlement_date: string;

  /**
   * FinancialAccount ID where the funds are expected.
   */
  financial_account: string;

  /**
   * List of ReceivedCredits that matched with the SettlementAllocationIntent.
   */
  linked_credits: Array<string>;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Metadata associated with the SettlementAllocationIntent.
   */
  metadata?: Metadata;

  /**
   * Reference for the SettlementAllocationIntent. This is the transaction reference used by payments processor to send funds to Stripe .
   */
  reference: string;

  /**
   * SettlementAllocationIntent status.
   */
  status: V2.Payments.SettlementAllocationIntent.Status;

  /**
   * Status details for a SettlementAllocationIntent in `errored` state.
   */
  status_details?: V2.Payments.SettlementAllocationIntent.StatusDetails;
}
export namespace V2 {
  export namespace Payments {
    export namespace SettlementAllocationIntent {
      export type Status =
        | 'canceled'
        | 'errored'
        | 'matched'
        | 'pending'
        | 'settled'
        | 'submitted';

      export interface StatusDetails {
        /**
         * Hash that provides additional information regarding the reason behind a `errored` SettlementAllocationIntent status. It is only present when the SettlementAllocationIntent status is `errored`.
         */
        errored?: StatusDetails.Errored;
      }

      export namespace StatusDetails {
        export interface Errored {
          /**
           * Stripe doc link to debug the issue.
           */
          doc_url?: string;

          /**
           * User Message detailing the reason code and possible resolution .
           */
          message: string;

          /**
           * Open Enum. The `errored` status reason.
           */
          reason_code: 'amount_mismatch';
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Payments {
    export interface SettlementAllocationIntentCreateParams {
      /**
       * The amount and currency of the SettlementAllocationIntent. Allowed Currencies are `gbp` | `eur`.
       */
      amount: Amount;

      /**
       * Date when we expect to receive the funds. Must be in future .
       */
      expected_settlement_date: string;

      /**
       * Financial Account Id where the funds are expected for this SettlementAllocationIntent.
       */
      financial_account: string;

      /**
       * Reference for the SettlementAllocationIntent. This should be same as the transaction reference used by payments processor to send funds to Stripe. Must have length between 5 and 255 characters and it must be unique among existing SettlementAllocationIntents that have a non-terminal status (`pending`, `submitted`, `matched`, `errored`).
       */
      reference: string;

      /**
       * Metadata associated with the SettlementAllocationIntent.
       */
      metadata?: MetadataParam;
    }
  }
}
export namespace V2 {
  export namespace Payments {
    export interface SettlementAllocationIntentRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Payments {
    export interface SettlementAllocationIntentUpdateParams {
      /**
       * The new amount for the SettlementAllocationIntent. Only amount.value can be updated and currency must remain same.
       */
      amount?: Amount;

      /**
       * The new reference for the SettlementAllocationIntent.
       */
      reference?: string;
    }
  }
}
export namespace V2 {
  export namespace Payments {
    export interface SettlementAllocationIntentListParams {
      /**
       * Filter for objects created after the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2025-10-17T13:22::00Z.
       */
      created_gt?: string;

      /**
       * Filter for objects created on or after the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2025-10-17T13:22::00Z.
       */
      created_gte?: string;

      /**
       * Filter for objects created before the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2025-10-17T13:22::00Z.
       */
      created_lt?: string;

      /**
       * Filter for objects created on or before the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2025-10-17T13:22::00Z.
       */
      created_lte?: string;

      /**
       * Filter the SettlementAllocationIntents by FinancialAccount.
       */
      financial_account?: string;

      /**
       * The page size.
       */
      limit?: number;

      /**
       * Filter the SettlementAllocationIntents by status.
       */
      status?: SettlementAllocationIntentListParams.Status;
    }

    export namespace SettlementAllocationIntentListParams {
      export type Status =
        | 'canceled'
        | 'errored'
        | 'matched'
        | 'pending'
        | 'settled'
        | 'submitted';
    }
  }
}
export namespace V2 {
  export namespace Payments {
    export interface SettlementAllocationIntentCancelParams {}
  }
}
export namespace V2 {
  export namespace Payments {
    export interface SettlementAllocationIntentSubmitParams {}
  }
}
