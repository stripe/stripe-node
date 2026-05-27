// File generated from our OpenAPI spec

import {V2Amount} from './../V2Amounts.js';
import {RequestOptions} from '../../../lib.js';
export interface FinancialAccountStatement {
  /**
   * Unique identifier for the statement.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.financial_account_statement';

  /**
   * Time at which the statement was created, in ISO 8601 format (UTC).
   */
  created: string;

  /**
   * Available balance at the end of the statement period.
   */
  ending_balance: {
    [key: string]: V2Amount;
  };

  /**
   * Currency-specific files and file metadata. Null by default, populated by specifying include=files_by_currency in the Retrieve endpoint.
   */
  files_by_currency?: {
    [key: string]: V2.MoneyManagement.FinancialAccountStatement.FilesByCurrency;
  };

  /**
   * The Financial Account this statement belongs to.
   */
  financial_account: string;

  /**
   * True if the object exists in live mode, false if in test mode.
   */
  livemode: boolean;

  /**
   * The time period covered by this statement.
   */
  period: V2.MoneyManagement.FinancialAccountStatement.Period;

  /**
   * The ID of the statement that replaced this one. Only present on statements that have been restated.
   */
  restated_by?: string;

  /**
   * The ID of the statement this one replaces. Only present on restatements.
   */
  restated_statement?: string;

  /**
   * Available balance at the start of the statement period.
   */
  starting_balance: {
    [key: string]: V2Amount;
  };

  /**
   * The status of the statement. A statement is "active" by default.
   * When a statement is replaced by a restatement, its status becomes "restated".
   */
  status: V2.MoneyManagement.FinancialAccountStatement.Status;
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace FinancialAccountStatement {
      export interface FilesByCurrency {
        /**
         * The MIME type of the file.
         */
        content_type: string;

        /**
         * The download URL and expiration.
         */
        download_url: FilesByCurrency.DownloadUrl;

        /**
         * The size of the file in bytes.
         */
        size: bigint;
      }

      export interface Period {
        /**
         * The end of the statement period (inclusive), as a UTC-aligned ISO 8601 date
         * (e.g., "2026-05-31"). For example, a May 2026 statement has end_date "2026-05-31",
         * meaning all transactions up to and including May 31st UTC are included.
         */
        end_date: string;

        /**
         * The start of the statement period (inclusive), as a UTC-aligned ISO 8601 date (e.g., "2026-05-01").
         */
        start_date: string;
      }

      export type Status = 'active' | 'restated';

      export namespace FilesByCurrency {
        export interface DownloadUrl {
          /**
           * The time at which the URL expires, in ISO 8601 format (UTC).
           */
          expires_at: string;

          /**
           * The URL to download the file.
           */
          url: string;
        }
      }
    }
  }
}
