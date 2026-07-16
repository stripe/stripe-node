// File generated from our OpenAPI spec

import {OtherString} from '../../../shared.js';
import {RequestOptions} from '../../../lib.js';
export interface BillSettingVersion {
  /**
   * The ID of the BillSettingVersion object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.bill_setting_version';

  /**
   * Settings related to calculating a bill.
   */
  calculation?: BillSettingVersion.Calculation;

  /**
   * Timestamp of when the object was created.
   */
  created: string;

  /**
   * Settings related to invoice behavior.
   */
  invoice?: BillSettingVersion.Invoice;

  /**
   * The ID of the invoice rendering template to be used when generating invoices.
   */
  invoice_rendering_template?: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
}
export namespace BillSettingVersion {
  export interface Calculation {
    /**
     * Settings for calculating tax.
     */
    tax?: Calculation.Tax;
  }

  export interface Invoice {
    /**
     * The amount of time until the invoice is overdue for payment.
     */
    time_until_due?: Invoice.TimeUntilDue;
  }

  export namespace Calculation {
    export interface Tax {
      /**
       * Determines if tax is calculated automatically based on a PTC or manually based on rules defined by the business. Defaults to "manual".
       */
      type: Tax.Type;
    }

    export namespace Tax {
      export type Type = 'automatic' | 'manual' | OtherString;
    }
  }

  export namespace Invoice {
    export interface TimeUntilDue {
      /**
       * The interval unit for the time until due.
       */
      interval: TimeUntilDue.Interval;

      /**
       * The number of interval units. For example, if interval=day and interval_count=30,
       * the invoice is due in 30 days.
       */
      interval_count: number;
    }

    export namespace TimeUntilDue {
      export type Interval = 'day' | 'month' | 'week' | 'year';
    }
  }
}
