// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        interface OutboundSetupIntentCreateParams {
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

        namespace OutboundSetupIntentCreateParams {
          interface PayoutMethodData {
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

          namespace PayoutMethodData {
            interface BankAccount {
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
               * The routing number of the bank account, if present.
               */
              routing_number?: string;

              /**
               * The swift code of the bank account, if present.
               */
              swift_code?: string;
            }

            namespace BankAccount {
              type BankAccountType = 'checking' | 'savings';
            }

            interface Card {
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

            interface CryptoWallet {
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

            namespace CryptoWallet {
              type Network =
                | 'arbitrum'
                | 'avalanche_c_chain'
                | 'base'
                | 'ethereum'
                | 'optimism'
                | 'polygon'
                | 'solana'
                | 'stellar';
            }

            type Type = 'bank_account' | 'card' | 'crypto_wallet';
          }

          type UsageIntent = 'payment' | 'transfer';
        }
      }

      namespace MoneyManagement {
        interface OutboundSetupIntentRetrieveParams {}
      }

      namespace MoneyManagement {
        interface OutboundSetupIntentUpdateParams {
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

        namespace OutboundSetupIntentUpdateParams {
          interface PayoutMethodData {
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

          namespace PayoutMethodData {
            interface BankAccount {
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
               * The routing number of the bank account, if present.
               */
              routing_number?: string;

              /**
               * The swift code of the bank account, if present.
               */
              swift_code?: string;
            }

            namespace BankAccount {
              type BankAccountType = 'checking' | 'savings';
            }

            interface Card {
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

            type Type = 'bank_account' | 'card' | 'crypto_wallet';
          }
        }
      }

      namespace MoneyManagement {
        interface OutboundSetupIntentListParams {
          /**
           * The page size.
           */
          limit?: number;
        }
      }

      namespace MoneyManagement {
        interface OutboundSetupIntentCancelParams {}
      }

      namespace MoneyManagement {
        class OutboundSetupIntentsResource {
          /**
           * Create an OutboundSetupIntent object.
           * @throws Stripe.BlockedByStripeError
           * @throws Stripe.InvalidPayoutMethodError
           * @throws Stripe.QuotaExceededError
           * @throws Stripe.ControlledByAlternateResourceError
           */
          create(
            params?: OutboundSetupIntentCreateParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.OutboundSetupIntent>
          >;
          create(
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.OutboundSetupIntent>
          >;

          /**
           * Retrieve an OutboundSetupIntent object.
           */
          retrieve(
            id: string,
            params?: OutboundSetupIntentRetrieveParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.OutboundSetupIntent>
          >;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.OutboundSetupIntent>
          >;

          /**
           * Update an OutboundSetupIntent object.
           * @throws Stripe.QuotaExceededError
           * @throws Stripe.BlockedByStripeError
           * @throws Stripe.InvalidPayoutMethodError
           * @throws Stripe.ControlledByAlternateResourceError
           */
          update(
            id: string,
            params?: OutboundSetupIntentUpdateParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.OutboundSetupIntent>
          >;

          /**
           * List the OutboundSetupIntent objects.
           */
          list(
            params?: OutboundSetupIntentListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.OutboundSetupIntent>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.OutboundSetupIntent>;

          /**
           * Cancel an OutboundSetupIntent object.
           */
          cancel(
            id: string,
            params?: OutboundSetupIntentCancelParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.OutboundSetupIntent>
          >;
          cancel(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.OutboundSetupIntent>
          >;
        }
      }
    }
  }
}
