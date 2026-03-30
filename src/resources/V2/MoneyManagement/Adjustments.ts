// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Amount} from './../../V2/Amounts.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class AdjustmentResource extends StripeResource {
  /**
   * Returns a list of Adjustments that match the provided filters.
   */
  list(
    params?: V2.MoneyManagement.AdjustmentListParams,
    options?: RequestOptions
  ): ApiListPromise<Adjustment>;
  list(options?: RequestOptions): ApiListPromise<Adjustment>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/money_management/adjustments',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of an Adjustment by ID.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.AdjustmentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Adjustment>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Adjustment>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/money_management/adjustments/{id}',
    }).call(this, ...args);
  }
}
export interface Adjustment {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.adjustment';

  /**
   * If applicable, contains information about the original flow linked to this Adjustment.
   */
  adjusted_flow?: V2.MoneyManagement.Adjustment.AdjustedFlow;

  /**
   * The amount of the Adjustment.
   */
  amount: Amount;

  /**
   * Time at which the object was created. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
   */
  created: string;

  /**
   * Description of the Adjustment and what it was used for.
   */
  description?: string;

  /**
   * The FinancialAccount that this adjustment is for.
   */
  financial_account: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * A link to the Stripe-hosted receipt that is provided when money movement is considered regulated under Stripe's money transmission licenses. The receipt link remains active for 60 days from the Adjustment creation date. After this period, the link will expire and the receipt url value will be null.
   */
  receipt_url?: string;

  /**
   * A reference for the Adjustment that associates it with related records or operations.
   */
  reference?: string;
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace Adjustment {
      export interface AdjustedFlow {
        /**
         * Closed Enum. If applicable, the type of flow linked to this Adjustment. The field matching this value will contain the ID of the flow.
         */
        type: AdjustedFlow.Type;

        /**
         * If applicable, the ID of the Adjustment linked to this Adjustment.
         */
        adjustment?: string;

        /**
         * If applicable, the ID of the InboundTransfer linked to this Adjustment.
         */
        inbound_transfer?: string;

        /**
         * If applicable, the ID of the OutboundPayment linked to this Adjustment.
         */
        outbound_payment?: string;

        /**
         * If applicable, the ID of the OutboundTransfer linked to this Adjustment.
         */
        outbound_transfer?: string;

        /**
         * If applicable, the ID of the ReceivedCredit linked to this Adjustment.
         */
        received_credit?: string;

        /**
         * If applicable, the ID of the ReceivedDebit linked to this Adjustment.
         */
        received_debit?: string;
      }

      export namespace AdjustedFlow {
        export type Type =
          | 'adjustment'
          | 'balance_exchange'
          | 'inbound_payment'
          | 'inbound_transfer'
          | 'outbound_payment'
          | 'outbound_transfer'
          | 'received_credit'
          | 'received_debit';
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface AdjustmentRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface AdjustmentListParams {
      /**
       * Filter for Adjustments linked to a Flow.
       */
      adjusted_flow?: string;

      /**
       * Filter for objects created at the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created?: string;

      /**
       * Filter for objects created after the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_gt?: string;

      /**
       * Filter for objects created on or after the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_gte?: string;

      /**
       * Filter for objects created before the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_lt?: string;

      /**
       * Filter for objects created on or before the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_lte?: string;

      /**
       * The page limit.
       */
      limit?: number;
    }
  }
}
