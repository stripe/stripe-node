// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * An AccountSession allows a Connect platform to grant access to a connected account in Connect embedded components.
     *
     * We recommend that you create an AccountSession each time you need to display an embedded component
     * to your user. Do not save AccountSessions to your database as they expire relatively
     * quickly, and cannot be used more than once.
     *
     * Related guide: [Connect embedded components](https://docs.stripe.com/connect/get-started-connect-embedded-components)
     */
    interface AccountSession {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'account_session';

      /**
       * The ID of the account the AccountSession was created for
       */
      account: string;

      /**
       * The client secret of this AccountSession. Used on the client to set up secure access to the given `account`.
       *
       * The client secret can be used to provide access to `account` from your frontend. It should not be stored, logged, or exposed to anyone other than the connected account. Make sure that you have TLS enabled on any page that includes the client secret.
       *
       * Refer to our docs to [setup Connect embedded components](https://docs.stripe.com/connect/get-started-connect-embedded-components) and learn about how `client_secret` should be handled.
       */
      client_secret: string;

      components: AccountSession.Components;

      /**
       * The timestamp at which this AccountSession will expire.
       */
      expires_at: number;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;
    }

    namespace AccountSession {
      interface Components {
        account_management: Components.AccountManagement;

        account_onboarding: Components.AccountOnboarding;

        balances: Components.Balances;

        disputes_list: Components.DisputesList;

        documents: Components.Documents;

        financial_account: Components.FinancialAccount;

        financial_account_transactions: Components.FinancialAccountTransactions;

        instant_payouts_promotion: Components.InstantPayoutsPromotion;

        issuing_card: Components.IssuingCard;

        issuing_cards_list: Components.IssuingCardsList;

        notification_banner: Components.NotificationBanner;

        payment_details: Components.PaymentDetails;

        payment_disputes: Components.PaymentDisputes;

        payments: Components.Payments;

        payout_details: Components.PayoutDetails;

        payouts: Components.Payouts;

        payouts_list: Components.PayoutsList;

        tax_registrations: Components.TaxRegistrations;

        tax_settings: Components.TaxSettings;
      }

      namespace Components {
        interface AccountManagement {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: AccountManagement.Features;
        }

        namespace AccountManagement {
          interface Features {
            /**
             * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
             */
            disable_stripe_user_authentication: boolean;

            /**
             * Whether external account collection is enabled. This feature can only be `false` for accounts where you're responsible for collecting updated information when requirements are due or change, like Custom accounts. The default value for this feature is `true`.
             */
            external_account_collection: boolean;
          }
        }

        interface AccountOnboarding {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: AccountOnboarding.Features;
        }

        namespace AccountOnboarding {
          interface Features {
            /**
             * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
             */
            disable_stripe_user_authentication: boolean;

            /**
             * Whether external account collection is enabled. This feature can only be `false` for accounts where you're responsible for collecting updated information when requirements are due or change, like Custom accounts. The default value for this feature is `true`.
             */
            external_account_collection: boolean;
          }
        }

        interface Balances {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: Balances.Features;
        }

        namespace Balances {
          interface Features {
            /**
             * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
             */
            disable_stripe_user_authentication: boolean;

            /**
             * Whether to allow payout schedule to be changed. Defaults to `true` when `controller.losses.payments` is set to `stripe` for the account, otherwise `false`.
             */
            edit_payout_schedule: boolean;

            /**
             * Whether external account collection is enabled. This feature can only be `false` for accounts where you're responsible for collecting updated information when requirements are due or change, like Custom accounts. The default value for this feature is `true`.
             */
            external_account_collection: boolean;

            /**
             * Whether to allow creation of instant payouts. The default value is `enabled` when Stripe is responsible for negative account balances, and `use_dashboard_rules` otherwise.
             */
            instant_payouts: boolean;

            /**
             * Whether to allow creation of standard payouts. Defaults to `true` when `controller.losses.payments` is set to `stripe` for the account, otherwise `false`.
             */
            standard_payouts: boolean;
          }
        }

        interface DisputesList {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: DisputesList.Features;
        }

        namespace DisputesList {
          interface Features {
            /**
             * Whether to allow capturing and cancelling payment intents. This is `true` by default.
             */
            capture_payments: boolean;

            /**
             * Whether connected accounts can manage destination charges that are created on behalf of them. This is `false` by default.
             */
            destination_on_behalf_of_charge_management: boolean;

            /**
             * Whether responding to disputes is enabled, including submitting evidence and accepting disputes. This is `true` by default.
             */
            dispute_management: boolean;

            /**
             * Whether sending refunds is enabled. This is `true` by default.
             */
            refund_management: boolean;
          }
        }

        interface Documents {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: Documents.Features;
        }

        namespace Documents {
          interface Features {}
        }

        interface FinancialAccount {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: FinancialAccount.Features;
        }

        namespace FinancialAccount {
          interface Features {
            /**
             * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
             */
            disable_stripe_user_authentication: boolean;

            /**
             * Whether external account collection is enabled. This feature can only be `false` for accounts where you're responsible for collecting updated information when requirements are due or change, like Custom accounts. The default value for this feature is `true`.
             */
            external_account_collection: boolean;

            /**
             * Whether to allow sending money.
             */
            send_money: boolean;

            /**
             * Whether to allow transferring balance.
             */
            transfer_balance: boolean;
          }
        }

        interface FinancialAccountTransactions {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: FinancialAccountTransactions.Features;
        }

        namespace FinancialAccountTransactions {
          interface Features {
            /**
             * Whether to allow card spend dispute management features.
             */
            card_spend_dispute_management: boolean;
          }
        }

        interface InstantPayoutsPromotion {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: InstantPayoutsPromotion.Features;
        }

        namespace InstantPayoutsPromotion {
          interface Features {
            /**
             * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
             */
            disable_stripe_user_authentication: boolean;

            /**
             * Whether external account collection is enabled. This feature can only be `false` for accounts where you're responsible for collecting updated information when requirements are due or change, like Custom accounts. The default value for this feature is `true`.
             */
            external_account_collection: boolean;

            /**
             * Whether to allow creation of instant payouts. The default value is `enabled` when Stripe is responsible for negative account balances, and `use_dashboard_rules` otherwise.
             */
            instant_payouts: boolean;
          }
        }

        interface IssuingCard {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: IssuingCard.Features;
        }

        namespace IssuingCard {
          interface Features {
            /**
             * Whether to allow card management features.
             */
            card_management: boolean;

            /**
             * Whether to allow card spend dispute management features.
             */
            card_spend_dispute_management: boolean;

            /**
             * Whether to allow cardholder management features.
             */
            cardholder_management: boolean;

            /**
             * Whether to allow spend control management features.
             */
            spend_control_management: boolean;
          }
        }

        interface IssuingCardsList {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: IssuingCardsList.Features;
        }

        namespace IssuingCardsList {
          interface Features {
            /**
             * Whether to allow card management features.
             */
            card_management: boolean;

            /**
             * Whether to allow card spend dispute management features.
             */
            card_spend_dispute_management: boolean;

            /**
             * Whether to allow cardholder management features.
             */
            cardholder_management: boolean;

            /**
             * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
             */
            disable_stripe_user_authentication: boolean;

            /**
             * Whether to allow spend control management features.
             */
            spend_control_management: boolean;
          }
        }

        interface NotificationBanner {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: NotificationBanner.Features;
        }

        namespace NotificationBanner {
          interface Features {
            /**
             * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
             */
            disable_stripe_user_authentication: boolean;

            /**
             * Whether external account collection is enabled. This feature can only be `false` for accounts where you're responsible for collecting updated information when requirements are due or change, like Custom accounts. The default value for this feature is `true`.
             */
            external_account_collection: boolean;
          }
        }

        interface PaymentDetails {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: PaymentDetails.Features;
        }

        namespace PaymentDetails {
          interface Features {
            /**
             * Whether to allow capturing and cancelling payment intents. This is `true` by default.
             */
            capture_payments: boolean;

            /**
             * Whether connected accounts can manage destination charges that are created on behalf of them. This is `false` by default.
             */
            destination_on_behalf_of_charge_management: boolean;

            /**
             * Whether responding to disputes is enabled, including submitting evidence and accepting disputes. This is `true` by default.
             */
            dispute_management: boolean;

            /**
             * Whether sending refunds is enabled. This is `true` by default.
             */
            refund_management: boolean;
          }
        }

        interface PaymentDisputes {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: PaymentDisputes.Features;
        }

        namespace PaymentDisputes {
          interface Features {
            /**
             * Whether connected accounts can manage destination charges that are created on behalf of them. This is `false` by default.
             */
            destination_on_behalf_of_charge_management: boolean;

            /**
             * Whether responding to disputes is enabled, including submitting evidence and accepting disputes. This is `true` by default.
             */
            dispute_management: boolean;

            /**
             * Whether sending refunds is enabled. This is `true` by default.
             */
            refund_management: boolean;
          }
        }

        interface Payments {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: Payments.Features;
        }

        namespace Payments {
          interface Features {
            /**
             * Whether to allow capturing and cancelling payment intents. This is `true` by default.
             */
            capture_payments: boolean;

            /**
             * Whether connected accounts can manage destination charges that are created on behalf of them. This is `false` by default.
             */
            destination_on_behalf_of_charge_management: boolean;

            /**
             * Whether responding to disputes is enabled, including submitting evidence and accepting disputes. This is `true` by default.
             */
            dispute_management: boolean;

            /**
             * Whether sending refunds is enabled. This is `true` by default.
             */
            refund_management: boolean;
          }
        }

        interface PayoutDetails {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: PayoutDetails.Features;
        }

        namespace PayoutDetails {
          interface Features {}
        }

        interface Payouts {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: Payouts.Features;
        }

        namespace Payouts {
          interface Features {
            /**
             * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
             */
            disable_stripe_user_authentication: boolean;

            /**
             * Whether to allow payout schedule to be changed. Defaults to `true` when `controller.losses.payments` is set to `stripe` for the account, otherwise `false`.
             */
            edit_payout_schedule: boolean;

            /**
             * Whether external account collection is enabled. This feature can only be `false` for accounts where you're responsible for collecting updated information when requirements are due or change, like Custom accounts. The default value for this feature is `true`.
             */
            external_account_collection: boolean;

            /**
             * Whether to allow creation of instant payouts. The default value is `enabled` when Stripe is responsible for negative account balances, and `use_dashboard_rules` otherwise.
             */
            instant_payouts: boolean;

            /**
             * Whether to allow creation of standard payouts. Defaults to `true` when `controller.losses.payments` is set to `stripe` for the account, otherwise `false`.
             */
            standard_payouts: boolean;
          }
        }

        interface PayoutsList {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: PayoutsList.Features;
        }

        namespace PayoutsList {
          interface Features {}
        }

        interface TaxRegistrations {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: TaxRegistrations.Features;
        }

        namespace TaxRegistrations {
          interface Features {}
        }

        interface TaxSettings {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features: TaxSettings.Features;
        }

        namespace TaxSettings {
          interface Features {}
        }
      }
    }
  }
}
