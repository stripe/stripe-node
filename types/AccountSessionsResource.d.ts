// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface AccountSessionCreateParams {
      /**
       * The identifier of the account to create an Account Session for.
       */
      account: string;

      /**
       * Each key of the dictionary represents an embedded component, and each embedded component maps to its configuration (e.g. whether it has been enabled or not).
       */
      components: AccountSessionCreateParams.Components;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace AccountSessionCreateParams {
      interface Components {
        /**
         * Configuration for the [account management](https://docs.stripe.com/connect/supported-embedded-components/account-management/) embedded component.
         */
        account_management?: Components.AccountManagement;

        /**
         * Configuration for the [account onboarding](https://docs.stripe.com/connect/supported-embedded-components/account-onboarding/) embedded component.
         */
        account_onboarding?: Components.AccountOnboarding;

        /**
         * Configuration for the [balances](https://docs.stripe.com/connect/supported-embedded-components/balances/) embedded component.
         */
        balances?: Components.Balances;

        /**
         * Configuration for the [disputes list](https://docs.stripe.com/connect/supported-embedded-components/disputes-list/) embedded component.
         */
        disputes_list?: Components.DisputesList;

        /**
         * Configuration for the [documents](https://docs.stripe.com/connect/supported-embedded-components/documents/) embedded component.
         */
        documents?: Components.Documents;

        /**
         * Configuration for the [financial account](https://docs.stripe.com/connect/supported-embedded-components/financial-account/) embedded component.
         */
        financial_account?: Components.FinancialAccount;

        /**
         * Configuration for the [financial account transactions](https://docs.stripe.com/connect/supported-embedded-components/financial-account-transactions/) embedded component.
         */
        financial_account_transactions?: Components.FinancialAccountTransactions;

        /**
         * Configuration for the [issuing card](https://docs.stripe.com/connect/supported-embedded-components/issuing-card/) embedded component.
         */
        issuing_card?: Components.IssuingCard;

        /**
         * Configuration for the [issuing cards list](https://docs.stripe.com/connect/supported-embedded-components/issuing-cards-list/) embedded component.
         */
        issuing_cards_list?: Components.IssuingCardsList;

        /**
         * Configuration for the [notification banner](https://docs.stripe.com/connect/supported-embedded-components/notification-banner/) embedded component.
         */
        notification_banner?: Components.NotificationBanner;

        /**
         * Configuration for the [payment details](https://docs.stripe.com/connect/supported-embedded-components/payment-details/) embedded component.
         */
        payment_details?: Components.PaymentDetails;

        /**
         * Configuration for the [payment disputes](https://docs.stripe.com/connect/supported-embedded-components/payment-disputes/) embedded component.
         */
        payment_disputes?: Components.PaymentDisputes;

        /**
         * Configuration for the [payments](https://docs.stripe.com/connect/supported-embedded-components/payments/) embedded component.
         */
        payments?: Components.Payments;

        /**
         * Configuration for the [payouts](https://docs.stripe.com/connect/supported-embedded-components/payouts/) embedded component.
         */
        payouts?: Components.Payouts;

        /**
         * Configuration for the [payouts list](https://docs.stripe.com/connect/supported-embedded-components/payouts-list/) embedded component.
         */
        payouts_list?: Components.PayoutsList;

        /**
         * Configuration for the [tax registrations](https://docs.stripe.com/connect/supported-embedded-components/tax-registrations/) embedded component.
         */
        tax_registrations?: Components.TaxRegistrations;

        /**
         * Configuration for the [tax settings](https://docs.stripe.com/connect/supported-embedded-components/tax-settings/) embedded component.
         */
        tax_settings?: Components.TaxSettings;
      }

      namespace Components {
        interface AccountManagement {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: AccountManagement.Features;
        }

        namespace AccountManagement {
          interface Features {
            /**
             * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
             */
            disable_stripe_user_authentication?: boolean;

            /**
             * Whether external account collection is enabled. This feature can only be `false` for accounts where you're responsible for collecting updated information when requirements are due or change, like Custom accounts. The default value for this feature is `true`.
             */
            external_account_collection?: boolean;
          }
        }

        interface AccountOnboarding {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: AccountOnboarding.Features;
        }

        namespace AccountOnboarding {
          interface Features {
            /**
             * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
             */
            disable_stripe_user_authentication?: boolean;

            /**
             * Whether external account collection is enabled. This feature can only be `false` for accounts where you're responsible for collecting updated information when requirements are due or change, like Custom accounts. The default value for this feature is `true`.
             */
            external_account_collection?: boolean;
          }
        }

        interface Balances {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: Balances.Features;
        }

        namespace Balances {
          interface Features {
            /**
             * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
             */
            disable_stripe_user_authentication?: boolean;

            /**
             * Whether to allow payout schedule to be changed. Defaults to `true` when `controller.losses.payments` is set to `stripe` for the account, otherwise `false`.
             */
            edit_payout_schedule?: boolean;

            /**
             * Whether external account collection is enabled. This feature can only be `false` for accounts where you're responsible for collecting updated information when requirements are due or change, like Custom accounts. The default value for this feature is `true`.
             */
            external_account_collection?: boolean;

            /**
             * Whether to allow creation of instant payouts. Defaults to `true` when `controller.losses.payments` is set to `stripe` for the account, otherwise `false`.
             */
            instant_payouts?: boolean;

            /**
             * Whether to allow creation of standard payouts. Defaults to `true` when `controller.losses.payments` is set to `stripe` for the account, otherwise `false`.
             */
            standard_payouts?: boolean;
          }
        }

        interface DisputesList {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: DisputesList.Features;
        }

        namespace DisputesList {
          interface Features {
            /**
             * Whether to allow capturing and cancelling payment intents. This is `true` by default.
             */
            capture_payments?: boolean;

            /**
             * Whether connected accounts can manage destination charges that are created on behalf of them. This is `false` by default.
             */
            destination_on_behalf_of_charge_management?: boolean;

            /**
             * Whether responding to disputes is enabled, including submitting evidence and accepting disputes. This is `true` by default.
             */
            dispute_management?: boolean;

            /**
             * Whether sending refunds is enabled. This is `true` by default.
             */
            refund_management?: boolean;
          }
        }

        interface Documents {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: Documents.Features;
        }

        namespace Documents {
          interface Features {}
        }

        interface FinancialAccount {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: FinancialAccount.Features;
        }

        namespace FinancialAccount {
          interface Features {
            /**
             * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
             */
            disable_stripe_user_authentication?: boolean;

            /**
             * Whether external account collection is enabled. This feature can only be `false` for accounts where you're responsible for collecting updated information when requirements are due or change, like Custom accounts. The default value for this feature is `true`.
             */
            external_account_collection?: boolean;

            /**
             * Whether to allow sending money.
             */
            send_money?: boolean;

            /**
             * Whether to allow transferring balance.
             */
            transfer_balance?: boolean;
          }
        }

        interface FinancialAccountTransactions {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: FinancialAccountTransactions.Features;
        }

        namespace FinancialAccountTransactions {
          interface Features {
            /**
             * Whether to allow card spend dispute management features.
             */
            card_spend_dispute_management?: boolean;
          }
        }

        interface IssuingCard {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: IssuingCard.Features;
        }

        namespace IssuingCard {
          interface Features {
            /**
             * Whether to allow card management features.
             */
            card_management?: boolean;

            /**
             * Whether to allow card spend dispute management features.
             */
            card_spend_dispute_management?: boolean;

            /**
             * Whether to allow cardholder management features.
             */
            cardholder_management?: boolean;

            /**
             * Whether to allow spend control management features.
             */
            spend_control_management?: boolean;
          }
        }

        interface IssuingCardsList {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: IssuingCardsList.Features;
        }

        namespace IssuingCardsList {
          interface Features {
            /**
             * Whether to allow card management features.
             */
            card_management?: boolean;

            /**
             * Whether to allow card spend dispute management features.
             */
            card_spend_dispute_management?: boolean;

            /**
             * Whether to allow cardholder management features.
             */
            cardholder_management?: boolean;

            /**
             * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
             */
            disable_stripe_user_authentication?: boolean;

            /**
             * Whether to allow spend control management features.
             */
            spend_control_management?: boolean;
          }
        }

        interface NotificationBanner {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: NotificationBanner.Features;
        }

        namespace NotificationBanner {
          interface Features {
            /**
             * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
             */
            disable_stripe_user_authentication?: boolean;

            /**
             * Whether external account collection is enabled. This feature can only be `false` for accounts where you're responsible for collecting updated information when requirements are due or change, like Custom accounts. The default value for this feature is `true`.
             */
            external_account_collection?: boolean;
          }
        }

        interface PaymentDetails {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: PaymentDetails.Features;
        }

        namespace PaymentDetails {
          interface Features {
            /**
             * Whether to allow capturing and cancelling payment intents. This is `true` by default.
             */
            capture_payments?: boolean;

            /**
             * Whether connected accounts can manage destination charges that are created on behalf of them. This is `false` by default.
             */
            destination_on_behalf_of_charge_management?: boolean;

            /**
             * Whether responding to disputes is enabled, including submitting evidence and accepting disputes. This is `true` by default.
             */
            dispute_management?: boolean;

            /**
             * Whether sending refunds is enabled. This is `true` by default.
             */
            refund_management?: boolean;
          }
        }

        interface PaymentDisputes {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: PaymentDisputes.Features;
        }

        namespace PaymentDisputes {
          interface Features {
            /**
             * Whether connected accounts can manage destination charges that are created on behalf of them. This is `false` by default.
             */
            destination_on_behalf_of_charge_management?: boolean;

            /**
             * Whether responding to disputes is enabled, including submitting evidence and accepting disputes. This is `true` by default.
             */
            dispute_management?: boolean;

            /**
             * Whether sending refunds is enabled. This is `true` by default.
             */
            refund_management?: boolean;
          }
        }

        interface Payments {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: Payments.Features;
        }

        namespace Payments {
          interface Features {
            /**
             * Whether to allow capturing and cancelling payment intents. This is `true` by default.
             */
            capture_payments?: boolean;

            /**
             * Whether connected accounts can manage destination charges that are created on behalf of them. This is `false` by default.
             */
            destination_on_behalf_of_charge_management?: boolean;

            /**
             * Whether responding to disputes is enabled, including submitting evidence and accepting disputes. This is `true` by default.
             */
            dispute_management?: boolean;

            /**
             * Whether sending refunds is enabled. This is `true` by default.
             */
            refund_management?: boolean;
          }
        }

        interface Payouts {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: Payouts.Features;
        }

        namespace Payouts {
          interface Features {
            /**
             * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
             */
            disable_stripe_user_authentication?: boolean;

            /**
             * Whether to allow payout schedule to be changed. Defaults to `true` when `controller.losses.payments` is set to `stripe` for the account, otherwise `false`.
             */
            edit_payout_schedule?: boolean;

            /**
             * Whether external account collection is enabled. This feature can only be `false` for accounts where you're responsible for collecting updated information when requirements are due or change, like Custom accounts. The default value for this feature is `true`.
             */
            external_account_collection?: boolean;

            /**
             * Whether to allow creation of instant payouts. Defaults to `true` when `controller.losses.payments` is set to `stripe` for the account, otherwise `false`.
             */
            instant_payouts?: boolean;

            /**
             * Whether to allow creation of standard payouts. Defaults to `true` when `controller.losses.payments` is set to `stripe` for the account, otherwise `false`.
             */
            standard_payouts?: boolean;
          }
        }

        interface PayoutsList {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: PayoutsList.Features;
        }

        namespace PayoutsList {
          interface Features {}
        }

        interface TaxRegistrations {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: TaxRegistrations.Features;
        }

        namespace TaxRegistrations {
          interface Features {}
        }

        interface TaxSettings {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: TaxSettings.Features;
        }

        namespace TaxSettings {
          interface Features {}
        }
      }
    }

    class AccountSessionsResource {
      /**
       * Creates a AccountSession object that includes a single-use token that the platform can use on their front-end to grant client-side API access.
       */
      create(
        params: AccountSessionCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.AccountSession>>;
    }
  }
}
