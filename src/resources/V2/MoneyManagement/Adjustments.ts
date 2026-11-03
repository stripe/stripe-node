// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class AdjustmentResource extends StripeResource {
  /**
   * Returns a list of Adjustments that match the provided filters.
   */
  list(
    params?: V2.MoneyManagement.AdjustmentListParams,
    options?: RequestOptions
  ): V2ListPromise<Adjustment> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/adjustments',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves the details of an Adjustment by ID.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.AdjustmentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Adjustment>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/adjustments/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
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
   * Details about the original flow object linked to this Adjustment, if applicable.
   * `adjusted_flow.type` identifies the kind of object. The corresponding field contains its ID:
   * for an InboundTransfer, `adjusted_flow.inbound_transfer` contains the InboundTransfer's ID.
   * Pass that ID to the `adjusted_flow` parameter on List Adjustments.
   */
  adjusted_flow?: Adjustment.AdjustedFlow;

  /**
   * The amount of the Adjustment.
   */
  amount: V2Amount;

  /**
   * Time at which the object was created. Represented as an RFC 3339 timestamp in UTC with millisecond precision,
   * for example `2022-09-18T13:22:18.123Z`.
   */
  created: string;

  /**
   * A description of the Adjustment and its purpose.
   */
  description?: string;

  /**
   * The ID of the FinancialAccount whose balance this Adjustment affects.
   */
  financial_account: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
}
export namespace Adjustment {
  export interface AdjustedFlow {
    /**
     * If applicable, the ID of the original Adjustment linked to this Adjustment.
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

    /**
     * Open Enum. If applicable, the type of flow linked to this Adjustment. The field matching this value will contain the ID of the flow.
     */
    type: AdjustedFlow.Type;
  }

  export namespace AdjustedFlow {
    export type Type =
      | 'adjustment'
      | 'inbound_transfer'
      | 'outbound_payment'
      | 'outbound_transfer'
      | 'received_credit'
      | 'received_debit'
      | OtherString;
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
       * Filter for Adjustments linked to a specific flow object. This filter only supports filtering by
       * the flow object's ID, such as `ibt_123` for an InboundTransfer.
       */
      adjusted_flow?: string;

      /**
       * Filter for Adjustments by their creation time using `gt`, `gte`, `lt`, or `lte`.
       */
      created?: AdjustmentListParams.Created;

      /**
       * The page limit.
       */
      limit?: number;
    }

    export namespace AdjustmentListParams {
      export interface Created {
        /**
         * Filter for Adjustments created after the specified timestamp.
         * The timestamp must be in RFC 3339 format, for example `2022-09-18T13:22:00Z`.
         *
         * Numeric values are deprecated and are included only for backwards compatibility. The API does not accept them; use an RFC 3339 string instead.
         */
        gt?: string | number;

        /**
         * Filter for Adjustments created on or after the specified timestamp.
         * The timestamp must be in RFC 3339 format, for example `2022-09-18T13:22:00Z`.
         *
         * Numeric values are deprecated and are included only for backwards compatibility. The API does not accept them; use an RFC 3339 string instead.
         */
        gte?: string | number;

        /**
         * Filter for Adjustments created before the specified timestamp.
         * The timestamp must be in RFC 3339 format, for example `2022-09-18T13:22:00Z`.
         *
         * Numeric values are deprecated and are included only for backwards compatibility. The API does not accept them; use an RFC 3339 string instead.
         */
        lt?: string | number;

        /**
         * Filter for Adjustments created on or before the specified timestamp.
         * The timestamp must be in RFC 3339 format, for example `2022-09-18T13:22:00Z`.
         *
         * Numeric values are deprecated and are included only for backwards compatibility. The API does not accept them; use an RFC 3339 string instead.
         */
        lte?: string | number;
      }
    }
  }
}
