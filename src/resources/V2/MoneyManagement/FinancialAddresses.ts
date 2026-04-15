// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {JapanAddress} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class FinancialAddressResource extends StripeResource {
  /**
   * List all FinancialAddresses for a FinancialAccount.
   */
  list(
    params?: V2.MoneyManagement.FinancialAddressListParams,
    options?: RequestOptions
  ): ApiListPromise<FinancialAddress> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/financial_addresses',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Create a new FinancialAddress for a FinancialAccount.
   * @throws Stripe.FinancialAccountNotOpenError
   * @throws Stripe.FeatureNotEnabledError
   */
  create(
    params: V2.MoneyManagement.FinancialAddressCreateParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAddress>> {
    return this._makeRequest(
      'POST',
      '/v2/money_management/financial_addresses',
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a FinancialAddress. By default, the FinancialAddress will be returned in its unexpanded state, revealing only the last 4 digits of the account number.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.FinancialAddressRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAddress>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/financial_addresses/${id}`,
      params,
      options
    ) as any;
  }
}
export interface FinancialAddress {
  /**
   * The ID of a FinancialAddress.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.financial_address';

  /**
   * The creation timestamp of the FinancialAddress.
   */
  created: string;

  /**
   * Object indicates the type of credentials that have been allocated and attached to the FinancialAddress.
   * It contains all necessary banking details with which to perform money movements with the FinancialAddress.
   * This field is only available for FinancialAddresses with an active status.
   */
  credentials?: V2.MoneyManagement.FinancialAddress.Credentials;

  /**
   * Open Enum. The currency the FinancialAddress supports.
   */
  currency: string;

  /**
   * A ID of the FinancialAccount this FinancialAddress corresponds to.
   */
  financial_account: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Open Enum. The currency the FinancialAddress settles into the FinancialAccount.
   */
  settlement_currency?: string;

  /**
   * Closed Enum. An enum representing the status of the FinancialAddress. This indicates whether or not the FinancialAddress can be used for any money movement flows.
   */
  status: V2.MoneyManagement.FinancialAddress.Status;
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace FinancialAddress {
      export interface Credentials {
        /**
         * The credentials of the UK Bank Account for the FinancialAddress. This contains unique banking details such as the sort code, account number, etc. of a UK bank account.
         */
        gb_bank_account?: Credentials.GbBankAccount;

        /**
         * The credentials of the SEPA Bank Account for the FinancialAddress. This contains unique banking details such as the IBAN, BIC, etc. of a SEPA bank account.
         */
        sepa_bank_account?: Credentials.SepaBankAccount;

        /**
         * Open Enum. The type of Credentials that are provisioned for the FinancialAddress.
         */
        type: Credentials.Type;

        /**
         * The credentials of the US Bank Account for the FinancialAddress. This contains unique banking details such as the routing number, account number, etc. of a US bank account.
         */
        us_bank_account?: Credentials.UsBankAccount;
      }

      export type Status = 'active' | 'archived' | 'failed' | 'pending';

      export namespace Credentials {
        export interface GbBankAccount {
          /**
           * The account holder name to be used during bank transference.
           */
          account_holder_name: string;

          /**
           * The account number of the UK Bank Account.
           */
          account_number?: string;

          /**
           * The last four digits of the UK Bank Account number. This will always be returned.
           * To view the full account number when retrieving or listing FinancialAddresses, use the `include` request parameter.
           */
          last4: string;

          /**
           * The sort code of the UK Bank Account.
           */
          sort_code: string;
        }

        export interface SepaBankAccount {
          /**
           * The account holder name to be used during bank transfers.
           */
          account_holder_name: string;

          /**
           * The name of the Bank.
           */
          bank_name: string;

          /**
           * The BIC of the SEPA Bank Account.
           */
          bic: string;

          /**
           * The originating country of the SEPA Bank account.
           */
          country: string;

          /**
           * The IBAN of the SEPA Bank Account.
           */
          iban: string;

          /**
           * The last four digits of the SEPA Bank Account number. This will always be returned.
           * To view the full account number when retrieving or listing FinancialAddresses, use the `include` request parameter.
           */
          last4: string;
        }

        export type Type =
          | 'gb_bank_account'
          | 'sepa_bank_account'
          | 'us_bank_account';

        export interface UsBankAccount {
          /**
           * The address of the account holder.
           */
          account_holder_address?: JapanAddress;

          /**
           * The name of the account holder.
           */
          account_holder_name?: string;

          /**
           * The account number of the US Bank Account.
           */
          account_number?: string;

          /**
           * The name of the Bank.
           */
          bank_name?: string;

          /**
           * The last four digits of the US Bank Account number. This will always be returned.
           * To view the full account number when retrieving or listing FinancialAddresses, use the `include` request parameter.
           */
          last4: string;

          /**
           * The routing number of the US Bank Account.
           */
          routing_number: string;

          /**
           * The swift code of the bank or financial institution.
           */
          swift_code?: string;
        }
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAddressCreateParams {
      /**
       * The ID of the FinancialAccount the new FinancialAddress should be associated with.
       */
      financial_account: string;

      /**
       * The type of FinancialAddress details to provision.
       */
      type: FinancialAddressCreateParams.Type;

      /**
       * Optional SEPA Bank account options, used to configure the type of SEPA Bank account to create, such as the originating country.
       */
      sepa_bank_account?: FinancialAddressCreateParams.SepaBankAccount;
    }

    export namespace FinancialAddressCreateParams {
      export type Type =
        | 'gb_bank_account'
        | 'sepa_bank_account'
        | 'us_bank_account';

      export interface SepaBankAccount {
        /**
         * The originating country of the SEPA Bank account.
         */
        country: string;
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAddressRetrieveParams {
      /**
       * Open Enum. A list of fields to reveal in the FinancialAddresses returned.
       */
      include?: Array<FinancialAddressRetrieveParams.Include>;
    }

    export namespace FinancialAddressRetrieveParams {
      export type Include =
        | 'credentials.gb_bank_account.account_number'
        | 'credentials.sepa_bank_account.iban'
        | 'credentials.us_bank_account.account_number';
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface FinancialAddressListParams {
      /**
       * The ID of the FinancialAccount for which FinancialAddresses are to be returned.
       */
      financial_account?: string;

      /**
       * Open Enum. A list of fields to reveal in the FinancialAddresses returned.
       */
      include?: Array<FinancialAddressListParams.Include>;

      /**
       * The page limit.
       */
      limit?: number;
    }

    export namespace FinancialAddressListParams {
      export type Include =
        | 'credentials.gb_bank_account.account_number'
        | 'credentials.sepa_bank_account.iban'
        | 'credentials.us_bank_account.account_number';
    }
  }
}
