// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class PayoutMethodResource extends StripeResource {
  /**
   * List objects that adhere to the PayoutMethod interface.
   */
  list(
    params?: V2.MoneyManagement.PayoutMethodListParams,
    options?: RequestOptions
  ): ApiListPromise<PayoutMethod> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/payout_methods',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieve a PayoutMethod object.
   * @throws Stripe.InvalidPayoutMethodError
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.PayoutMethodRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<PayoutMethod>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/payout_methods/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Archive a PayoutMethod object. Archived objects cannot be used as payout methods
   * and will not appear in the payout method list.
   * @throws Stripe.ControlledByDashboardError
   * @throws Stripe.CannotProceedError
   * @throws Stripe.InvalidPayoutMethodError
   * @throws Stripe.ControlledByAlternateResourceError
   */
  archive(
    id: string,
    params?: V2.MoneyManagement.PayoutMethodArchiveParams,
    options?: RequestOptions
  ): Promise<Response<PayoutMethod>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/payout_methods/${id}/archive`,
      params,
      options
    ) as any;
  }
  /**
   * Unarchive an PayoutMethod object.
   * @throws Stripe.ControlledByDashboardError
   * @throws Stripe.InvalidPayoutMethodError
   * @throws Stripe.ControlledByAlternateResourceError
   */
  unarchive(
    id: string,
    params?: V2.MoneyManagement.PayoutMethodUnarchiveParams,
    options?: RequestOptions
  ): Promise<Response<PayoutMethod>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/payout_methods/${id}/unarchive`,
      params,
      options
    ) as any;
  }
}
export interface PayoutMethod {
  /**
   * ID of the PayoutMethod object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.payout_method';

  /**
   * The alternative reference for this payout method, if it's a projected payout method.
   */
  alternative_reference?: V2.MoneyManagement.PayoutMethod.AlternativeReference;

  /**
   * A set of available payout speeds for this payout method.
   */
  available_payout_speeds: Array<
    V2.MoneyManagement.PayoutMethod.AvailablePayoutSpeed
  >;

  /**
   * The PayoutMethodBankAccount object details.
   */
  bank_account?: V2.MoneyManagement.PayoutMethod.BankAccount;

  /**
   * The PayoutMethodCard object details.
   */
  card?: V2.MoneyManagement.PayoutMethod.Card;

  /**
   * Created timestamp.
   */
  created: string;

  /**
   * ID of the underlying active OutboundSetupIntent object, if any.
   */
  latest_outbound_setup_intent?: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Whether the Payout Method is currently unusable for money movement, despite potentially being correctly set up.
   * Please reach out to Stripe Support for more information.
   */
  restricted: boolean;

  /**
   * Closed Enum. The type of payout method.
   */
  type: V2.MoneyManagement.PayoutMethod.Type;

  /**
   * Indicates whether the payout method has met the necessary requirements for outbound money movement.
   */
  usage_status: V2.MoneyManagement.PayoutMethod.UsageStatus;
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace PayoutMethod {
      export interface AlternativeReference {
        /**
         * The ID of the alternative resource being referenced.
         */
        id: string;

        /**
         * The type of the alternative reference (e.g., external_account for V1 external accounts).
         */
        type: AlternativeReference.Type;
      }

      export type AvailablePayoutSpeed = 'instant' | 'standard';

      export interface BankAccount {
        /**
         * Whether this PayoutMethodBankAccount object was archived. PayoutMethodBankAccount objects can be archived through
         * the /archive API, and they will not be automatically archived by Stripe. Archived PayoutMethodBankAccount objects
         * cannot be used as payout methods and will not appear in the payout method list.
         */
        archived: boolean;

        /**
         * The type of bank account (checking or savings).
         */
        bank_account_type: BankAccount.BankAccountType;

        /**
         * The name of the bank this bank account is in. This field is populated automatically by Stripe.
         */
        bank_name: string;

        /**
         * The branch number of the bank account, if present.
         */
        branch_number?: string;

        /**
         * The country code of the bank account.
         */
        country: string;

        /**
         * List of enabled flows for this bank account (wire or local).
         */
        enabled_delivery_options: Array<string>;

        /**
         * The ID of the Financial Connections Account used to create the bank account.
         */
        financial_connections_account?: string;

        /**
         * The last 4 digits of the account number.
         */
        last4: string;

        /**
         * The routing number of the bank account, if present.
         */
        routing_number?: string;

        /**
         * The list of currencies supported by this bank account.
         */
        supported_currencies: Array<string>;

        /**
         * The swift code of the bank or financial institution.
         */
        swift_code?: string;
      }

      export interface Card {
        /**
         * Whether the PayoutMethodCard object was archived. PayoutMethodCard objects can be archived through
         * the /archive API, and they will not be automatically archived by Stripe. Archived PayoutMethodCard objects
         * cannot be used as payout methods and will not appear in the payout method list.
         */
        archived: boolean;

        /**
         * The month the card expires.
         */
        exp_month: string;

        /**
         * The year the card expires.
         */
        exp_year: string;

        /**
         * Uniquely identifies this particular card number. You can use this attribute to check whether two
         * recipients who've signed up with you are using the same card number, for example.
         */
        fingerprint: string;

        /**
         * The last 4 digits of the card number.
         */
        last4: string;

        /**
         * The list of currencies supported by this bank account.
         */
        supported_currencies: Array<string>;
      }

      export type Type = 'bank_account' | 'card' | 'crypto_wallet';

      export interface UsageStatus {
        /**
         * Payments status - used when sending OutboundPayments (sending funds to recipients).
         */
        payments: UsageStatus.Payments;

        /**
         * Transfers status - used when making an OutboundTransfer (sending funds to yourself).
         */
        transfers: UsageStatus.Transfers;
      }

      export namespace AlternativeReference {
        export type Type = 'external_account' | 'payment_method';
      }

      export namespace BankAccount {
        export type BankAccountType = 'checking' | 'futsu' | 'savings' | 'toza';
      }

      export namespace UsageStatus {
        export type Payments = 'eligible' | 'invalid' | 'requires_action';

        export type Transfers = 'eligible' | 'invalid' | 'requires_action';
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface PayoutMethodRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface PayoutMethodListParams {
      /**
       * The page size.
       */
      limit?: number;

      /**
       * Usage status filter.
       */
      usage_status?: PayoutMethodListParams.UsageStatus;
    }

    export namespace PayoutMethodListParams {
      export interface UsageStatus {
        /**
         * List of payments status to filter by.
         */
        payments?: Array<UsageStatus.Payment>;

        /**
         * List of transfers status to filter by.
         */
        transfers?: Array<UsageStatus.Transfer>;
      }

      export namespace UsageStatus {
        export type Payment = 'eligible' | 'invalid' | 'requires_action';

        export type Transfer = 'eligible' | 'invalid' | 'requires_action';
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface PayoutMethodArchiveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface PayoutMethodUnarchiveParams {}
  }
}
