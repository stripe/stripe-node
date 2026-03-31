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
   * Metadata associated with the FinancialAccount.
   */
  metadata?: Metadata;

  /**
   * If this is a `other` FinancialAccount, this hash indicates what the actual type is. Upgrade your API version to see it reflected in `type`.
   */
  other?: V2.MoneyManagement.FinancialAccount.Other;

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

      export interface Other {
        /**
         * The type of the FinancialAccount, represented as a string. Upgrade your API version to see the type reflected in `financial_account.type`.
         */
        type: string;
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
         * The currencies that this FinancialAccount can hold.
         */
        holds_currencies: Array<string>;
      }

      export type Type = 'other' | 'storage';

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
         * The currencies that this FinancialAccount can hold.
         */
        holds_currencies: Array<string>;
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAccountRetrieveParams {}
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
       * The page limit.
       */
      limit?: number;

      /**
       * The status of the FinancialAccount to filter by. By default, closed FinancialAccounts are not returned.
       */
      status?: FinancialAccountListParams.Status;
    }

    export namespace FinancialAccountListParams {
      export type Status = 'closed' | 'open' | 'pending';
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
