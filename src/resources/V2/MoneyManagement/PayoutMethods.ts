// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class PayoutMethodResource extends StripeResource {
  /**
   * List objects that adhere to the PayoutMethod interface.
   */
  list(
    params?: V2.MoneyManagement.PayoutMethodListParams,
    options?: RequestOptions
  ): V2ListPromise<PayoutMethod> {
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
      `/v2/money_management/payout_methods/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Archive a `PayoutMethod`. Archiving prevents the Payout Method from being used for outbound payments
   * or transfers and omits it from normal list results. To restore list visibility, use the
   * [unarchive endpoint](https://docs.stripe.com/api/v2/money-management/payout-methods/unarchive).
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
      `/v2/money_management/payout_methods/${encodeURIComponent(id)}/archive`,
      params,
      options
    ) as any;
  }
  /**
   * Disable a `PayoutMethod`. Disabling temporarily prevents the Payout Method from being used for outbound
   * payments or transfers while keeping it in normal list results. To re-enable it, complete setup again by
   * [creating an Outbound Setup Intent](https://docs.stripe.com/api/v2/money-management/outbound-setup-intents/create).
   * @throws Stripe.CannotProceedError
   */
  disable(
    id: string,
    params?: V2.MoneyManagement.PayoutMethodDisableParams,
    options?: RequestOptions
  ): Promise<Response<PayoutMethod>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/payout_methods/${encodeURIComponent(id)}/disable`,
      params,
      options
    ) as any;
  }
  /**
   * Unarchive a `PayoutMethod`. Unarchiving restores the Payout Method to normal list results and clears
   * only its archived state. It doesn't guarantee that the Payout Method can be used.
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
      `/v2/money_management/payout_methods/${encodeURIComponent(id)}/unarchive`,
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
  alternative_reference?: PayoutMethod.AlternativeReference;

  /**
   * The PayoutMethodApplePay object details.
   */
  apple_pay?: PayoutMethod.ApplePay;

  /**
   * Whether the payout method was archived. Payout methods can be archived through the /archive API,
   * and they will not be automatically archived by Stripe. Archived payout methods cannot be used
   * for outbound money movement.
   */
  archived: boolean;

  /**
   * A set of available payout speeds for this payout method.
   */
  available_payout_speeds: Array<PayoutMethod.AvailablePayoutSpeed>;

  /**
   * The PayoutMethodBankAccount object details.
   */
  bank_account?: PayoutMethod.BankAccount;

  /**
   * The PayoutMethodCard object details.
   */
  card?: PayoutMethod.Card;

  /**
   * Created timestamp.
   */
  created: string;

  /**
   * The PayoutMethodCryptoWallet object details.
   */
  crypto_wallet?: PayoutMethod.CryptoWallet;

  /**
   * ID of the underlying active OutboundSetupIntent object, if any.
   */
  latest_outbound_setup_intent?: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The PayoutMethodNetworkBusinessProfileWallet object details.
   */
  network_business_profile_wallet?: PayoutMethod.NetworkBusinessProfileWallet;

  /**
   * The PayoutMethodPix object details.
   */
  pix?: PayoutMethod.Pix;

  /**
   * Whether the Payout Method is currently unusable for money movement, despite potentially being correctly set up.
   * Please reach out to Stripe Support for more information.
   */
  restricted: boolean;

  /**
   * Open Enum. The type of payout method.
   */
  type: PayoutMethod.Type;

  /**
   * Indicates whether the payout method has met the necessary requirements for outbound money movement.
   */
  usage_status: PayoutMethod.UsageStatus;
}
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

  export interface ApplePay {
    /**
     * The last four digits of the device account number (DPAN).
     */
    dynamic_last4: string;

    /**
     * The month the card expires.
     */
    exp_month: string;

    /**
     * The year the card expires.
     */
    exp_year: string;

    /**
     * Uniquely identifies this particular Apple-Pay-registered DPAN (Device PAN). Refer to
     * https://support.stripe.com/questions/how-do-card-numbers-work-with-apple-pay-and-google-pay-and-what-is-dynamic-last4 for more info on DPANs.
     */
    fingerprint: string;

    /**
     * The last 4 digits of the card number.
     */
    last4: string;

    /**
     * The list of currencies supported by this card.
     */
    supported_currencies: Array<string>;
  }

  export type AvailablePayoutSpeed = 'instant' | 'standard';

  export interface BankAccount {
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
    enabled_delivery_schemes: Array<string>;

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

  export interface CryptoWallet {
    /**
     * Destination wallet address.
     */
    address: string;

    /**
     * Optional field, required if network supports memos (only "stellar" currently).
     */
    memo?: string;

    /**
     * Which rail is being used to make an outbound money movement to this wallet.
     */
    network: CryptoWallet.Network;
  }

  export interface NetworkBusinessProfileWallet {
    /**
     * The Network ID of the Stripe profile.
     */
    network_business_profile: string;
  }

  export interface Pix {
    /**
     * A static PIX QR code payload generated by the destination bank.
     * Exactly one of pix_key or br_code must be set.
     */
    br_code?: string;

    /**
     * The PIX key for the destination. May be a phone number, email address, CPF, CNPJ, or random key.
     * Exactly one of pix_key or br_code must be set.
     * Annotated as TAX_ID_SECRET because a PIX key can be a CPF or CNPJ (Brazilian tax IDs), which are
     * classified as sensitive under LGPD and consistent with how CPF/CNPJ are annotated elsewhere in the codebase.
     */
    pix_key?: string;
  }

  export type Type =
    | 'apple_pay'
    | 'bank_account'
    | 'card'
    | 'crypto_wallet'
    | 'network_business_profile_wallet'
    | 'pix'
    | OtherString;

  export interface UsageStatus {
    /**
     * Payments status - used when sending OutboundPayments (sending funds to recipients).
     * If disabled, enable the payout method by creating an OutboundSetupIntent using [`POST /v2/money_management/outbound_setup_intents`](https://docs.stripe.com/api/v2/money-management/outbound-setup-intents/create).
     */
    payments: UsageStatus.Payments;

    /**
     * Transfers status - used when making an OutboundTransfer (sending funds to yourself).
     * If disabled, enable the payout method by creating an OutboundSetupIntent using [`POST /v2/money_management/outbound_setup_intents`](https://docs.stripe.com/api/v2/money-management/outbound-setup-intents/create).
     */
    transfers: UsageStatus.Transfers;
  }

  export namespace AlternativeReference {
    export type Type = 'external_account' | 'payment_method' | OtherString;
  }

  export namespace BankAccount {
    export type BankAccountType = 'checking' | 'futsu' | 'savings' | 'toza';
  }

  export namespace CryptoWallet {
    export type Network =
      | 'arbitrum'
      | 'avalanche_c_chain'
      | 'base'
      | 'ethereum'
      | 'optimism'
      | 'polygon'
      | 'solana'
      | 'stellar'
      | 'tempo'
      | OtherString;
  }

  export namespace UsageStatus {
    export type Payments =
      | 'disabled'
      | 'eligible'
      | 'ineligible'
      | 'invalid'
      | 'requires_action';

    export type Transfers =
      | 'disabled'
      | 'eligible'
      | 'ineligible'
      | 'invalid'
      | 'requires_action';
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
        export type Payment =
          | 'disabled'
          | 'eligible'
          | 'ineligible'
          | 'invalid'
          | 'requires_action';

        export type Transfer =
          | 'disabled'
          | 'eligible'
          | 'ineligible'
          | 'invalid'
          | 'requires_action';
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
    export interface PayoutMethodDisableParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface PayoutMethodUnarchiveParams {}
  }
}
