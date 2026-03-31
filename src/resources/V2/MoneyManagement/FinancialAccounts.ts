// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {MetadataParam, Metadata} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class FinancialAccountResource extends StripeResource {
  /**
   * Lists FinancialAccounts in this compartment.
   */
  list(
    params?: V2.MoneyManagement.FinancialAccountListParams,
    options?: RequestOptions
  ): ApiListPromise<FinancialAccount>;
  list(options?: RequestOptions): ApiListPromise<FinancialAccount>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/money_management/financial_accounts',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a new FinancialAccount.
   * @throws Stripe.AlreadyExistsError
   * @throws Stripe.FeatureNotEnabledError
   */
  create(
    params: V2.MoneyManagement.FinancialAccountCreateParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAccount>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/money_management/financial_accounts',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of an existing FinancialAccount.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.FinancialAccountRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAccount>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<FinancialAccount>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/money_management/financial_accounts/{id}',
    }).call(this, ...args);
  }

  /**
   * Updates an existing FinancialAccount.
   */
  update(
    id: string,
    params?: V2.MoneyManagement.FinancialAccountUpdateParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAccount>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/money_management/financial_accounts/{id}',
    }).call(this, ...args);
  }

  /**
   * Closes a FinancialAccount with or without forwarding settings.
   * @throws Stripe.NonZeroBalanceError
   */
  close(
    id: string,
    params?: V2.MoneyManagement.FinancialAccountCloseParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAccount>>;
  close(
    id: string,
    options?: RequestOptions
  ): Promise<Response<FinancialAccount>>;
  close(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/money_management/financial_accounts/{id}/close',
    }).call(this, ...args);
  }
}
export interface FinancialAccount {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.financial_account';

  /**
   * If this is a `accrued_fees` FinancialAccount, this hash include details specific to `accrued_fees` FinancialAccount.
   */
  accrued_fees?: V2.MoneyManagement.FinancialAccount.AccruedFees;

  /**
   * Multi-currency balance of this FinancialAccount, split by availability state. Each balance is represented as a hash where the key is the three-letter ISO currency code, in lowercase, and the value is the amount for that currency.
   */
  balance: V2.MoneyManagement.FinancialAccount.Balance;

  /**
   * Open Enum. Two-letter country code that represents the country where the LegalEntity associated with the FinancialAccount is based in.
   */
  country: string;

  /**
   * Time at which the object was created.
   */
  created: string;

  /**
   * A descriptive name for the FinancialAccount, up to 50 characters long. This name will be used in the Stripe Dashboard and embedded components.
   */
  display_name?: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * If this is a managed FinancialAccount, `managed_by` indicates the product that created and manages this FinancialAccount. For managed FinancialAccounts,
   * creation of money management resources can only be orchestrated by the managing product.
   */
  managed_by?: V2.MoneyManagement.FinancialAccount.ManagedBy;

  /**
   * Metadata associated with the FinancialAccount.
   */
  metadata?: Metadata;

  /**
   * If this is a `other` FinancialAccount, this hash indicates what the actual type is. Upgrade your API version to see it reflected in `type`.
   */
  other?: V2.MoneyManagement.FinancialAccount.Other;

  /**
   * If this is a `payments` FinancialAccount, this hash include details specific to `payments` FinancialAccount.
   */
  payments?: V2.MoneyManagement.FinancialAccount.Payments;

  /**
   * Closed Enum. An enum representing the status of the FinancialAccount. This indicates whether or not the FinancialAccount can be used for any money movement flows.
   */
  status: V2.MoneyManagement.FinancialAccount.Status;

  /**
   * Additional details related to the status of the FinancialAccount.
   */
  status_details?: V2.MoneyManagement.FinancialAccount.StatusDetails;

  /**
   * If this is a `storage` FinancialAccount, this hash includes details specific to `storage` FinancialAccounts.
   */
  storage?: V2.MoneyManagement.FinancialAccount.Storage;

  /**
   * Type of the FinancialAccount. An additional hash is included on the FinancialAccount with a name matching this value.
   * It contains additional information specific to the FinancialAccount type.
   */
  type: V2.MoneyManagement.FinancialAccount.Type;
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace FinancialAccount {
      export interface AccruedFees {
        /**
         * The currencies enabled for fee accrual on this FinancialAccount.
         */
        currencies: Array<string>;

        /**
         * Direction of fee accrual for this FinancialAccount.
         */
        direction: AccruedFees.Direction;
      }

      export interface Balance {
        /**
         * Balance that can be used for money movement.
         */
        available: {
          [key: string]: V2Amount;
        };

        /**
         * Balance of inbound funds that will later transition to the `available` balance.
         */
        inbound_pending: {
          [key: string]: V2Amount;
        };

        /**
         * Balance of funds that are being used for a pending outbound money movement.
         */
        outbound_pending: {
          [key: string]: V2Amount;
        };
      }

      export interface ManagedBy {
        /**
         * Enum describing the Stripe product that is managing this FinancialAccount.
         */
        type: 'multiprocessor_settlement';
      }

      export interface Other {
        /**
         * The type of the FinancialAccount, represented as a string. Upgrade your API version to see the type reflected in `financial_account.type`.
         */
        type: string;
      }

      export interface Payments {
        /**
         * The balance of the `payments` FinancialAccount is a mix of payment processing and stored value funds, and this field
         * describes the breakdown between the two. The sum will match the balance of the FinancialAccount.
         */
        balance_by_funds_type?: Payments.BalanceByFundsType;

        /**
         * The currency that non-settlement currency payments will be converted to.
         */
        default_currency: string;

        /**
         * Settlement currencies enabled for this FinancialAccount. Payments in other currencies will be automatically converted to `default_currency`.
         */
        settlement_currencies: Array<string>;

        /**
         * Describes the available balance when it was projected.
         */
        starting_balance?: Payments.StartingBalance;
      }

      export type Status = 'closed' | 'open' | 'pending';

      export interface StatusDetails {
        /**
         * Details related to the closed state of the FinancialAccount.
         */
        closed?: StatusDetails.Closed;
      }

      export interface Storage {
        /**
         * The usage type for funds in this FinancialAccount. Can be used to specify that the funds are for Consumer activity.
         */
        funds_usage_type?: Storage.FundsUsageType;

        /**
         * The currencies that this FinancialAccount can hold.
         */
        holds_currencies: Array<string>;
      }

      export type Type = 'accrued_fees' | 'other' | 'payments' | 'storage';

      export namespace AccruedFees {
        export type Direction = 'payable' | 'receivable';
      }

      export namespace Payments {
        export interface BalanceByFundsType {
          /**
           * Payment processing funds are those that are received for goods or services and may only be used for payouts to self. These funds may be converted to stored value funds.
           */
          payment_processing: BalanceByFundsType.PaymentProcessing;

          /**
           * Stored value funds may be used for either payouts to self or payments to others.
           */
          stored_value: BalanceByFundsType.StoredValue;
        }

        export interface StartingBalance {
          /**
           * When the balance was projected.
           */
          at: string;

          /**
           * The available balance at the time when the balance was projected.
           */
          available: {
            [key: string]: V2Amount;
          };
        }

        export namespace BalanceByFundsType {
          export interface PaymentProcessing {
            /**
             * Balance that can be used for money movement.
             */
            available: {
              [key: string]: V2Amount;
            };

            /**
             * Balance of inbound funds that will later transition to the `available` balance.
             */
            inbound_pending: {
              [key: string]: V2Amount;
            };

            /**
             * Balance of funds that are being used for a pending outbound money movement.
             */
            outbound_pending: {
              [key: string]: V2Amount;
            };
          }

          export interface StoredValue {
            /**
             * Balance that can be used for money movement.
             */
            available: {
              [key: string]: V2Amount;
            };

            /**
             * Balance of inbound funds that will later transition to the `available` balance.
             */
            inbound_pending: {
              [key: string]: V2Amount;
            };

            /**
             * Balance of funds that are being used for a pending outbound money movement.
             */
            outbound_pending: {
              [key: string]: V2Amount;
            };
          }
        }
      }

      export namespace StatusDetails {
        export interface Closed {
          /**
           * The forwarding settings for the closed FinancialAccount.
           */
          forwarding_settings?: Closed.ForwardingSettings;

          /**
           * The reason the FinancialAccount was closed.
           */
          reason: Closed.Reason;
        }

        export namespace Closed {
          export interface ForwardingSettings {
            /**
             * The address to send forwarded payments to.
             */
            payment_method?: string;

            /**
             * The address to send forwarded payouts to.
             */
            payout_method?: string;
          }

          export type Reason =
            | 'account_closed'
            | 'closed_by_platform'
            | 'other';
        }
      }

      export namespace Storage {
        export type FundsUsageType = 'business' | 'consumer';
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAccountCreateParams {
      /**
       * The type of FinancialAccount to create.
       */
      type: 'storage';

      /**
       * A descriptive name for the FinancialAccount, up to 50 characters long. This name will be used in the Stripe Dashboard and embedded components.
       */
      display_name?: string;

      /**
       * Metadata associated with the FinancialAccount.
       */
      metadata?: MetadataParam;

      /**
       * Parameters specific to creating `storage` type FinancialAccounts.
       */
      storage?: FinancialAccountCreateParams.Storage;
    }

    export namespace FinancialAccountCreateParams {
      export interface Storage {
        /**
         * The usage type for funds in this FinancialAccount. Can be used to specify that the funds are for Consumer activity.
         */
        funds_usage_type?: Storage.FundsUsageType;

        /**
         * The currencies that this FinancialAccount can hold.
         */
        holds_currencies: Array<string>;
      }

      export namespace Storage {
        export type FundsUsageType = 'business' | 'consumer';
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAccountRetrieveParams {
      /**
       * Additional fields to include in the response.
       */
      include?: Array<'payments.balance_by_funds_type'>;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAccountUpdateParams {
      /**
       * A descriptive name for the FinancialAccount, up to 50 characters long. This name will be used in the Stripe Dashboard and embedded components.
       */
      display_name?: string;

      /**
       * Metadata associated with the FinancialAccount.
       */
      metadata?: MetadataParam;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAccountListParams {
      /**
       * Additional fields to include in the response.
       */
      include?: Array<'payments.balance_by_funds_type'>;

      /**
       * The page limit.
       */
      limit?: number;

      /**
       * The status of the FinancialAccount to filter by. By default, closed FinancialAccounts are not returned.
       */
      status?: FinancialAccountListParams.Status;

      /**
       * Filter for FinancialAccount `type`. By default, FinancialAccounts of any `type` are returned.
       */
      types?: Array<FinancialAccountListParams.Type>;
    }

    export namespace FinancialAccountListParams {
      export type Status = 'closed' | 'open' | 'pending';

      export type Type = 'accrued_fees' | 'payments' | 'storage';
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAccountCloseParams {
      /**
       * The addresses to forward any incoming transactions to.
       */
      forwarding_settings?: FinancialAccountCloseParams.ForwardingSettings;
    }

    export namespace FinancialAccountCloseParams {
      export interface ForwardingSettings {
        /**
         * The address to send forwarded payments to.
         */
        payment_method?: string;

        /**
         * The address to send forwarded payouts to.
         */
        payout_method?: string;
      }
    }
  }
}
