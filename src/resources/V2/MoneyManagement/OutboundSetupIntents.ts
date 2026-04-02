// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {PayoutMethod} from './PayoutMethods.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class OutboundSetupIntentResource extends StripeResource {
  /**
   * List the OutboundSetupIntent objects.
   */
  list(
    params?: V2.MoneyManagement.OutboundSetupIntentListParams,
    options?: RequestOptions
  ): ApiListPromise<OutboundSetupIntent> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/outbound_setup_intents',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Create an OutboundSetupIntent object.
   * @throws Stripe.BlockedByStripeError
   * @throws Stripe.InvalidPayoutMethodError
   * @throws Stripe.QuotaExceededError
   * @throws Stripe.ControlledByAlternateResourceError
   */
  create(
    params?: V2.MoneyManagement.OutboundSetupIntentCreateParams,
    options?: RequestOptions
  ): Promise<Response<OutboundSetupIntent>> {
    return this._makeRequest(
      'POST',
      '/v2/money_management/outbound_setup_intents',
      params,
      options
    ) as any;
  }
  /**
   * Retrieve an OutboundSetupIntent object.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.OutboundSetupIntentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<OutboundSetupIntent>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/outbound_setup_intents/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Update an OutboundSetupIntent object.
   * @throws Stripe.QuotaExceededError
   * @throws Stripe.BlockedByStripeError
   * @throws Stripe.InvalidPayoutMethodError
   * @throws Stripe.ControlledByAlternateResourceError
   */
  update(
    id: string,
    params?: V2.MoneyManagement.OutboundSetupIntentUpdateParams,
    options?: RequestOptions
  ): Promise<Response<OutboundSetupIntent>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/outbound_setup_intents/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Cancel an OutboundSetupIntent object.
   */
  cancel(
    id: string,
    params?: V2.MoneyManagement.OutboundSetupIntentCancelParams,
    options?: RequestOptions
  ): Promise<Response<OutboundSetupIntent>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/outbound_setup_intents/${id}/cancel`,
      params,
      options
    ) as any;
  }
}
export interface OutboundSetupIntent {
  /**
   * ID of the outbound setup intent.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.outbound_setup_intent';

  /**
   * Created timestamp.
   */
  created: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Specifies which actions needs to be taken next to continue setup of the credential.
   */
  next_action?: V2.MoneyManagement.OutboundSetupIntent.NextAction;

  /**
   * Use the PayoutMethods API to list and interact with PayoutMethod objects.
   */
  payout_method: PayoutMethod;

  /**
   * Closed Enum. Status of the outbound setup intent.
   */
  status: V2.MoneyManagement.OutboundSetupIntent.Status;

  /**
   * The intended money movement flow this payout method should be set up for, specified in params.
   */
  usage_intent: V2.MoneyManagement.OutboundSetupIntent.UsageIntent;
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace OutboundSetupIntent {
      export interface NextAction {
        /**
         * The type of next action.
         */
        type: 'confirmation_of_payee';

        /**
         * Confirmation of Payee details.
         */
        confirmation_of_payee?: NextAction.ConfirmationOfPayee;
      }

      export type Status =
        | 'canceled'
        | 'requires_action'
        | 'requires_payout_method'
        | 'succeeded';

      export type UsageIntent = 'payment' | 'transfer';

      export namespace NextAction {
        export interface ConfirmationOfPayee {
          /**
           * The type of the credential.
           */
          object: string;

          /**
           * The Confirmation of Payee status.
           */
          status: ConfirmationOfPayee.Status;
        }

        export namespace ConfirmationOfPayee {
          export type Status =
            | 'awaiting_acknowledgement'
            | 'confirmed'
            | 'uninitiated';
        }
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface OutboundSetupIntentCreateParams {
      /**
       * If provided, the existing payout method resource to link to this setup intent.
       * Any payout_method_data provided is used to update information on this linked payout method resource.
       */
      payout_method?: string;

      /**
       * If no payout_method provided, used to create the underlying credential that is set up for outbound money movement.
       * If a payout_method provided, used to update data on the credential linked to this setup intent.
       */
      payout_method_data?: OutboundSetupIntentCreateParams.PayoutMethodData;

      /**
       * Specify which type of outbound money movement this credential should be set up for (payment | transfer).
       * If not provided, defaults to payment.
       */
      usage_intent?: OutboundSetupIntentCreateParams.UsageIntent;
    }

    export namespace OutboundSetupIntentCreateParams {
      export interface PayoutMethodData {
        /**
         * Closed Enum. The type of payout method to be created.
         */
        type: PayoutMethodData.Type;

        /**
         * The type specific details of the bank account payout method.
         */
        bank_account?: PayoutMethodData.BankAccount;

        /**
         * The type specific details of the card payout method.
         */
        card?: PayoutMethodData.Card;

        /**
         * The type specific details of the crypto wallet payout method.
         */
        crypto_wallet?: PayoutMethodData.CryptoWallet;
      }

      export type UsageIntent = 'payment' | 'transfer';

      export namespace PayoutMethodData {
        export type Type = 'bank_account' | 'card' | 'crypto_wallet';

        export interface BankAccount {
          /**
           * The account number or IBAN of the bank account.
           */
          account_number: string;

          /**
           * Closed Enum. The type of the bank account (checking or savings).
           */
          bank_account_type?: BankAccount.BankAccountType;

          /**
           * The branch number of the bank account, if present.
           */
          branch_number?: string;

          /**
           * The country code of the bank account.
           */
          country: string;

          /**
           * The currency of the bank account.
           */
          currency: string;

          /**
           * The routing number of the bank account, if present.
           */
          routing_number?: string;

          /**
           * The swift code of the bank account, if present.
           */
          swift_code?: string;
        }

        export interface Card {
          /**
           * The currency of the card.
           */
          currency: string;

          /**
           * The expiration month of the card.
           */
          exp_month: string;

          /**
           * The expiration year of the card.
           */
          exp_year: string;

          /**
           * The card number.
           */
          number: string;
        }

        export interface CryptoWallet {
          /**
           * Crypto wallet address.
           */
          address: string;

          /**
           * Optional field, required if network supports memos (only "stellar" currently).
           */
          memo?: string;

          /**
           * Which rail we should use to make an Outbound money movement to this wallet.
           */
          network: CryptoWallet.Network;
        }

        export namespace BankAccount {
          export type BankAccountType = 'checking' | 'savings';
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
            | 'stellar';
        }
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface OutboundSetupIntentRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface OutboundSetupIntentUpdateParams {
      /**
       * If provided, the existing payout method resource to link to this outbound setup intent.
       */
      payout_method?: string;

      /**
       * If no payout_method provided, used to create the underlying credential that is set up for outbound money movement.
       * If a payout_method provided, used to update data on the credential linked to this setup intent.
       */
      payout_method_data?: OutboundSetupIntentUpdateParams.PayoutMethodData;
    }

    export namespace OutboundSetupIntentUpdateParams {
      export interface PayoutMethodData {
        /**
         * Closed Enum. The type of payout method to be created/updated.
         */
        type: PayoutMethodData.Type;

        /**
         * The type specific details of the bank account payout method.
         */
        bank_account?: PayoutMethodData.BankAccount;

        /**
         * The type specific details of the card payout method.
         */
        card?: PayoutMethodData.Card;
      }

      export namespace PayoutMethodData {
        export type Type = 'bank_account' | 'card' | 'crypto_wallet';

        export interface BankAccount {
          /**
           * The account number or IBAN of the bank account.
           */
          account_number: string;

          /**
           * Closed Enum. The type of the bank account (checking or savings).
           */
          bank_account_type?: BankAccount.BankAccountType;

          /**
           * The branch number of the bank account, if present.
           */
          branch_number?: string;

          /**
           * The country code of the bank account.
           */
          country: string;

          /**
           * The currency of the bank account.
           */
          currency: string;

          /**
           * The routing number of the bank account, if present.
           */
          routing_number?: string;

          /**
           * The swift code of the bank account, if present.
           */
          swift_code?: string;
        }

        export interface Card {
          /**
           * The currency of the card.
           */
          currency?: string;

          /**
           * The expiration month of the card.
           */
          exp_month?: string;

          /**
           * The expiration year of the card.
           */
          exp_year?: string;

          /**
           * The card number. This can only be passed when creating a new credential on an outbound setup intent in the requires_payout_method state.
           */
          number?: string;
        }

        export namespace BankAccount {
          export type BankAccountType = 'checking' | 'savings';
        }
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface OutboundSetupIntentListParams {
      /**
       * The page size.
       */
      limit?: number;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface OutboundSetupIntentCancelParams {}
  }
}
