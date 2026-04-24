// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
import {VersionResource} from './BillSettings/Versions.js';
import {Stripe} from '../../../stripe.core.js';
export class BillSettingResource extends StripeResource {
  versions: VersionResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.versions = new VersionResource(stripe);
  }
  /**
   * List all BillSetting objects.
   */
  list(
    params?: V2.Billing.BillSettingListParams,
    options?: RequestOptions
  ): ApiListPromise<BillSetting> {
    return this._makeRequest(
      'GET',
      '/v2/billing/bill_settings',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Create a BillSetting object.
   */
  create(
    params?: V2.Billing.BillSettingCreateParams,
    options?: RequestOptions
  ): Promise<Response<BillSetting>> {
    return this._makeRequest(
      'POST',
      '/v2/billing/bill_settings',
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a BillSetting object by ID.
   */
  retrieve(
    id: string,
    params?: V2.Billing.BillSettingRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<BillSetting>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/bill_settings/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Update fields on an existing BillSetting object.
   */
  update(
    id: string,
    params?: V2.Billing.BillSettingUpdateParams,
    options?: RequestOptions
  ): Promise<Response<BillSetting>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/bill_settings/${id}`,
      params,
      options
    ) as any;
  }
}
export interface BillSetting {
  /**
   * The ID of the BillSetting object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.bill_setting';

  /**
   * Settings related to calculating a bill.
   */
  calculation?: V2.Billing.BillSetting.Calculation;

  /**
   * Timestamp of when the object was created.
   */
  created: string;

  /**
   * An optional field for adding a display name for the BillSetting object.
   */
  display_name?: string;

  /**
   * Settings related to invoice behavior.
   */
  invoice?: V2.Billing.BillSetting.Invoice;

  /**
   * The ID of the invoice rendering template to be used when generating invoices.
   */
  invoice_rendering_template?: string;

  /**
   * The latest version of the current settings object. This is
   * updated every time an attribute of the settings is updated.
   */
  latest_version: string;

  /**
   * The current live version of the settings object. This can be different from
   * latest_version if settings are updated without setting live_version='latest'.
   */
  live_version: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * A lookup key used to retrieve settings dynamically from a static string.
   * This may be up to 200 characters.
   */
  lookup_key?: string;
}
export namespace V2 {
  export namespace Billing {
    export namespace BillSetting {
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
          export type Type = 'automatic' | 'manual';
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
  }
}
export namespace V2 {
  export namespace Billing {
    export interface BillSettingCreateParams {
      /**
       * Settings related to calculating a bill.
       */
      calculation?: BillSettingCreateParams.Calculation;

      /**
       * An optional customer-facing display name for the CollectionSetting object.
       * Maximum length of 250 characters.
       */
      display_name?: string;

      /**
       * Settings related to invoice behavior.
       */
      invoice?: BillSettingCreateParams.Invoice;

      /**
       * The ID of the invoice rendering template to be used when generating invoices.
       */
      invoice_rendering_template?: string;

      /**
       * A lookup key used to retrieve settings dynamically from a static string.
       * This may be up to 200 characters.
       */
      lookup_key?: string;
    }

    export namespace BillSettingCreateParams {
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
          export type Type = 'automatic' | 'manual';
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
  }
}
export namespace V2 {
  export namespace Billing {
    export interface BillSettingRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Billing {
    export interface BillSettingUpdateParams {
      /**
       * Settings related to calculating a bill.
       */
      calculation?: BillSettingUpdateParams.Calculation;

      /**
       * An optional customer-facing display name for the BillSetting object.
       * To remove the display name, set it to an empty string in the request.
       * Maximum length of 250 characters.
       */
      display_name?: string;

      /**
       * Settings related to invoice behavior.
       */
      invoice?: BillSettingUpdateParams.Invoice;

      /**
       * The ID of the invoice rendering template to be used when generating invoices.
       */
      invoice_rendering_template?: string;

      /**
       * Optionally change the live version of the BillSetting. Providing `live_version = "latest"` sets the
       * BillSetting' `live_version` to its latest version.
       */
      live_version?: string;

      /**
       * A lookup key used to retrieve settings dynamically from a static string.
       * This may be up to 200 characters.
       */
      lookup_key?: string;
    }

    export namespace BillSettingUpdateParams {
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
          export type Type = 'automatic' | 'manual';
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
  }
}
export namespace V2 {
  export namespace Billing {
    export interface BillSettingListParams {
      /**
       * Optionally set the maximum number of results per page. Defaults to 20.
       */
      limit?: number;

      /**
       * Only return the settings with these lookup_keys, if any exist.
       * You can specify up to 10 lookup_keys.
       */
      lookup_keys?: Array<string>;
    }
  }
}
