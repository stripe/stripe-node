// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {
  MetadataParam,
  OtherString,
  PaginationParams,
  Metadata,
} from '../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../lib.js';

export class PaymentPlanResource extends StripeResource {
  /**
   * Returns a list of payment plans.
   */
  list(
    params?: PaymentPlanListParams,
    options?: RequestOptions
  ): ApiListPromise<PaymentPlan> {
    return this._makeRequest('GET', '/v1/payment_plans', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Creates a payment plan that splits a single invoice obligation into installments with their own due dates and amounts.
   */
  create(
    params: PaymentPlanCreateParams,
    options?: RequestOptions
  ): Promise<Response<PaymentPlan>> {
    return this._makeRequest(
      'POST',
      '/v1/payment_plans',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves the payment plan with the given ID.
   */
  retrieve(
    id: string,
    params?: PaymentPlanRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<PaymentPlan>> {
    return this._makeRequest(
      'GET',
      `/v1/payment_plans/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the schedule or metadata of an existing payment plan. Only unpaid installments can be updated.
   */
  update(
    id: string,
    params?: PaymentPlanUpdateParams,
    options?: RequestOptions
  ): Promise<Response<PaymentPlan>> {
    return this._makeRequest(
      'POST',
      `/v1/payment_plans/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface PaymentPlan {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'payment_plan';

  /**
   * The list of objects this payment plan collects against.
   */
  collects_on: Array<PaymentPlan.CollectsOn>;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The list of installments derived from the schedule. Each installment tracks an individual payment obligation.
   */
  installments: Array<PaymentPlan.Installment>;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  schedule: PaymentPlan.Schedule;
}
export namespace PaymentPlan {
  export interface CollectsOn {
    invoice_details: CollectsOn.InvoiceDetails;

    /**
     * The type of object this plan collects against. Currently always `invoice_details`.
     */
    type: string;
  }

  export interface Installment {
    /**
     * Amount owed for this installment, in the smallest currency unit.
     */
    amount_due: number;

    /**
     * Amount forgiven for this installment, in the smallest currency unit.
     */
    amount_forgiven: number;

    /**
     * Amount already paid toward this installment, in the smallest currency unit.
     */
    amount_paid: number;

    /**
     * Three-letter ISO currency code.
     */
    currency: string;

    /**
     * A description of this installment.
     */
    description: string;

    /**
     * Unix timestamp when this installment is due. Omitted for installments with no due date.
     */
    due_date?: number;

    /**
     * Unique identifier for the installment.
     */
    id?: string;

    /**
     * Unix timestamp when this installment was paid.
     */
    paid_at?: number;

    /**
     * The status of this installment. One of `open`, `paid`, `past_due`, or `canceled`.
     */
    status: string;
  }

  export interface Schedule {
    amounts_due: Schedule.AmountsDue;

    /**
     * The type of schedule. Currently always `amounts_due`.
     */
    type: string;
  }

  export namespace CollectsOn {
    export interface InvoiceDetails {
      /**
       * The ID of the invoice this plan collects against.
       */
      invoice: string;
    }
  }

  export namespace Schedule {
    export interface AmountsDue {
      /**
       * The list of installment schedule entries.
       */
      amounts: Array<AmountsDue.Amount>;
    }

    export namespace AmountsDue {
      export interface Amount {
        /**
         * A description of this schedule entry.
         */
        description: string;

        due_date?: Amount.DueDate;

        fixed_amount?: Amount.FixedAmount;

        /**
         * Unique identifier for this schedule entry.
         */
        id?: string;

        /**
         * Percentage of the invoice total for this entry (0–100). Present when type is `percentage`.
         */
        percentage?: number;

        /**
         * The type of this schedule entry. Either `fixed_amount` or `percentage`.
         */
        type: string;
      }

      export namespace Amount {
        export interface DueDate {
          /**
           * Unix timestamp of the due date. Present when type is `absolute`.
           */
          absolute?: number;

          relative?: DueDate.Relative;

          /**
           * The type of due date. Either `absolute` or `relative`.
           */
          type: string;
        }

        export interface FixedAmount {
          /**
           * Fixed amount for this entry, in the smallest currency unit.
           */
          amount: number;

          /**
           * Three-letter ISO currency code.
           */
          currency: string;
        }

        export namespace DueDate {
          export interface Relative {
            /**
             * The number of intervals after the invoice is finalized that this entry is due.
             */
            count: number;

            /**
             * The interval unit: `day`, `week`, `month`, or `year`.
             */
            interval: string;
          }
        }
      }
    }
  }
}
export interface PaymentPlanCreateParams {
  /**
   * The invoice(s) this payment plan collects on. Currently must contain exactly one invoice entry.
   */
  collects_on: Array<PaymentPlanCreateParams.CollectsOn>;

  /**
   * The schedule defining how to split the invoice total into installments.
   */
  schedule: PaymentPlanCreateParams.Schedule;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;
}
export namespace PaymentPlanCreateParams {
  export interface CollectsOn {
    /**
     * Details of the invoice this payment plan collects on.
     */
    invoice_details: CollectsOn.InvoiceDetails;

    /**
     * The type of object this plan collects on. Currently always `invoice_details`.
     */
    type: 'invoice_details';
  }

  export interface Schedule {
    /**
     * Required when type is 'amounts_due'.
     */
    amounts_due: Schedule.AmountsDue;

    /**
     * The schedule type. Currently only 'amounts_due' is supported.
     */
    type: 'amounts_due';
  }

  export namespace CollectsOn {
    export interface InvoiceDetails {
      /**
       * The ID of the invoice.
       */
      invoice: string;
    }
  }

  export namespace Schedule {
    export interface AmountsDue {
      /**
       * The list of installment entries.
       */
      amounts: Array<AmountsDue.Amount>;
    }

    export namespace AmountsDue {
      export interface Amount {
        /**
         * Optional description for this installment.
         */
        description?: string;

        /**
         * When this installment is due.
         */
        due_date?: Amount.DueDate;

        /**
         * Required when type is 'fixed_amount'.
         */
        fixed_amount?: Amount.FixedAmount;

        /**
         * Optional stable identifier for the installment entry.
         */
        id?: string;

        /**
         * The installment percentage of the total. Required when type is 'percentage'.
         */
        percentage?: number;

        /**
         * Either 'fixed_amount' or 'percentage'.
         */
        type: Amount.Type;
      }

      export namespace Amount {
        export interface DueDate {
          /**
           * Unix timestamp. Required when type is 'absolute'.
           */
          absolute?: number;

          /**
           * Required when type is 'relative'.
           */
          relative?: DueDate.Relative;

          /**
           * Either 'absolute' or 'relative'.
           */
          type: DueDate.Type;
        }

        export interface FixedAmount {
          /**
           * The installment amount in minor units.
           */
          amount: number;

          /**
           * Three-letter ISO currency code.
           */
          currency: string;
        }

        export type Type = 'fixed_amount' | 'percentage' | OtherString;

        export namespace DueDate {
          export interface Relative {
            /**
             * The number of intervals after finalization.
             */
            count: number;

            /**
             * The interval unit.
             */
            interval: Relative.Interval;
          }

          export type Type = 'absolute' | 'relative' | OtherString;

          export namespace Relative {
            export type Interval =
              | 'day'
              | 'month'
              | 'week'
              | 'year'
              | OtherString;
          }
        }
      }
    }
  }
}
export interface PaymentPlanRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface PaymentPlanUpdateParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;

  /**
   * The new schedule for this payment plan.
   */
  schedule?: PaymentPlanUpdateParams.Schedule;
}
export namespace PaymentPlanUpdateParams {
  export interface Schedule {
    /**
     * Required when type is 'amounts_due'.
     */
    amounts_due: Schedule.AmountsDue;

    /**
     * The schedule type. Currently only 'amounts_due' is supported.
     */
    type: 'amounts_due';
  }

  export namespace Schedule {
    export interface AmountsDue {
      /**
       * The list of installment entries.
       */
      amounts: Array<AmountsDue.Amount>;
    }

    export namespace AmountsDue {
      export interface Amount {
        /**
         * Optional description for this installment.
         */
        description?: string;

        /**
         * When this installment is due.
         */
        due_date?: Amount.DueDate;

        /**
         * Required when type is 'fixed_amount'.
         */
        fixed_amount?: Amount.FixedAmount;

        /**
         * Optional stable identifier for the installment entry.
         */
        id?: string;

        /**
         * The installment percentage of the total. Required when type is 'percentage'.
         */
        percentage?: number;

        /**
         * Either 'fixed_amount' or 'percentage'.
         */
        type: Amount.Type;
      }

      export namespace Amount {
        export interface DueDate {
          /**
           * Unix timestamp. Required when type is 'absolute'.
           */
          absolute?: number;

          /**
           * Required when type is 'relative'.
           */
          relative?: DueDate.Relative;

          /**
           * Either 'absolute' or 'relative'.
           */
          type: DueDate.Type;
        }

        export interface FixedAmount {
          /**
           * The installment amount in minor units.
           */
          amount: number;

          /**
           * Three-letter ISO currency code.
           */
          currency: string;
        }

        export type Type = 'fixed_amount' | 'percentage' | OtherString;

        export namespace DueDate {
          export interface Relative {
            /**
             * The number of intervals after finalization.
             */
            count: number;

            /**
             * The interval unit.
             */
            interval: Relative.Interval;
          }

          export type Type = 'absolute' | 'relative' | OtherString;

          export namespace Relative {
            export type Interval =
              | 'day'
              | 'month'
              | 'week'
              | 'year'
              | OtherString;
          }
        }
      }
    }
  }
}
export interface PaymentPlanListParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Only return payment plans associated with the given invoice.
   */
  invoice?: string;
}
