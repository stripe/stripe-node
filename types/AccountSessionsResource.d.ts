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
         * Configuration for the [app install](https://docs.stripe.com/connect/supported-embedded-components/app-install/) embedded component.
         */
        app_install?: Components.AppInstall;

        /**
         * Configuration for the [app viewport](https://docs.stripe.com/connect/supported-embedded-components/app-viewport/) embedded component.
         */
        app_viewport?: Components.AppViewport;

        /**
         * Configuration for the [balances](https://docs.stripe.com/connect/supported-embedded-components/balances/) embedded component.
         */
        balances?: Components.Balances;

        /**
         * Configuration for the [Capital financing](https://docs.stripe.com/connect/supported-embedded-components/capital-financing/) embedded component.
         */
        capital_financing?: Components.CapitalFinancing;

        /**
         * Configuration for the [Capital financing application](https://docs.stripe.com/connect/supported-embedded-components/capital-financing-application/) embedded component.
         */
        capital_financing_application?: Components.CapitalFinancingApplication;

        /**
         * Configuration for the [Capital financing promotion](https://docs.stripe.com/connect/supported-embedded-components/capital-financing-promotion/) embedded component.
         */
        capital_financing_promotion?: Components.CapitalFinancingPromotion;

        /**
         * Configuration for the [Capital overview](https://docs.stripe.com/connect/supported-embedded-components/capital-overview/) embedded component.
         */
        capital_overview?: Components.CapitalOverview;

        /**
         * Configuration for the [disputes list](https://docs.stripe.com/connect/supported-embedded-components/disputes-list/) embedded component.
         */
        disputes_list?: Components.DisputesList;

        /**
         * Configuration for the [documents](https://docs.stripe.com/connect/supported-embedded-components/documents/) embedded component.
         */
        documents?: Components.Documents;

        /**
         * Configuration for the [export tax transactions](https://docs.stripe.com/connect/supported-embedded-components/export-tax-transactions/) embedded component.
         */
        export_tax_transactions?: Components.ExportTaxTransactions;

        /**
         * Configuration for the [financial account](https://docs.stripe.com/connect/supported-embedded-components/financial-account/) embedded component.
         */
        financial_account?: Components.FinancialAccount;

        /**
         * Configuration for the [financial account transactions](https://docs.stripe.com/connect/supported-embedded-components/financial-account-transactions/) embedded component.
         */
        financial_account_transactions?: Components.FinancialAccountTransactions;

        /**
         * Configuration for the [instant payouts promotion](https://docs.stripe.com/connect/supported-embedded-components/instant-payouts-promotion/) embedded component.
         */
        instant_payouts_promotion?: Components.InstantPayoutsPromotion;

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
         * Configuration for the [payment method settings](https://docs.stripe.com/connect/supported-embedded-components/payment-method-settings/) embedded component.
         */
        payment_method_settings?: Components.PaymentMethodSettings;

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
         * Configuration for the [product tax code selector](https://docs.stripe.com/connect/supported-embedded-components/product-tax-code-selector/) embedded component.
         */
        product_tax_code_selector?: Components.ProductTaxCodeSelector;

        /**
         * Configuration for the [recipients](https://docs.stripe.com/connect/supported-embedded-components/recipients/) embedded component.
         */
        recipients?: Components.Recipients;

        /**
         * Configuration for the [reporting chart](https://docs.stripe.com/connect/supported-embedded-components/reporting-chart/) embedded component.
         */
        reporting_chart?: Components.ReportingChart;

        /**
         * Configuration for the [tax registrations](https://docs.stripe.com/connect/supported-embedded-components/tax-registrations/) embedded component.
         */
        tax_registrations?: Components.TaxRegistrations;

        /**
         * Configuration for the [tax settings](https://docs.stripe.com/connect/supported-embedded-components/tax-settings/) embedded component.
         */
        tax_settings?: Components.TaxSettings;

        /**
         * Configuration for the [tax threshold monitoring](https://docs.stripe.com/connect/supported-embedded-components/tax-threshold-monitoring/) embedded component.
         */
        tax_threshold_monitoring?: Components.TaxThresholdMonitoring;
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

        interface AppInstall {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: AppInstall.Features;
        }

        namespace AppInstall {
          interface Features {
            /**
             * The list of apps allowed to be enabled in the embedded component.
             */
            allowed_apps?: Stripe.Emptyable<Array<string>>;
          }
        }

        interface AppViewport {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: AppViewport.Features;
        }

        namespace AppViewport {
          interface Features {
            /**
             * The list of apps allowed to be enabled in the embedded component.
             */
            allowed_apps?: Stripe.Emptyable<Array<string>>;
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

        interface CapitalFinancing {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * An empty list, because this embedded component has no features.
           */
          features?: CapitalFinancing.Features;
        }

        namespace CapitalFinancing {
          interface Features {}
        }

        interface CapitalFinancingApplication {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * An empty list, because this embedded component has no features.
           */
          features?: CapitalFinancingApplication.Features;
        }

        namespace CapitalFinancingApplication {
          interface Features {}
        }

        interface CapitalFinancingPromotion {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * An empty list, because this embedded component has no features.
           */
          features?: CapitalFinancingPromotion.Features;
        }

        namespace CapitalFinancingPromotion {
          interface Features {}
        }

        interface CapitalOverview {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * An empty list, because this embedded component has no features.
           */
          features?: CapitalOverview.Features;
        }

        namespace CapitalOverview {
          interface Features {}
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
           * An empty list, because this embedded component has no features.
           */
          features?: Documents.Features;
        }

        namespace Documents {
          interface Features {}
        }

        interface ExportTaxTransactions {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * An empty list, because this embedded component has no features.
           */
          features?: ExportTaxTransactions.Features;
        }

        namespace ExportTaxTransactions {
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

        interface InstantPayoutsPromotion {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * The list of features enabled in the embedded component.
           */
          features?: InstantPayoutsPromotion.Features;
        }

        namespace InstantPayoutsPromotion {
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
             * Whether to allow creation of instant payouts. Defaults to `true` when `controller.losses.payments` is set to `stripe` for the account, otherwise `false`.
             */
            instant_payouts?: boolean;
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

        interface PaymentMethodSettings {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * An empty list, because this embedded component has no features.
           */
          features?: PaymentMethodSettings.Features;
        }

        namespace PaymentMethodSettings {
          interface Features {}
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
           * An empty list, because this embedded component has no features.
           */
          features?: PayoutsList.Features;
        }

        namespace PayoutsList {
          interface Features {}
        }

        interface ProductTaxCodeSelector {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * An empty list, because this embedded component has no features.
           */
          features?: ProductTaxCodeSelector.Features;
        }

        namespace ProductTaxCodeSelector {
          interface Features {}
        }

        interface Recipients {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          features?: Recipients.Features;
        }

        namespace Recipients {
          interface Features {
            /**
             * Whether to allow sending money.
             */
            send_money?: boolean;
          }
        }

        interface ReportingChart {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * An empty list, because this embedded component has no features.
           */
          features?: ReportingChart.Features;
        }

        namespace ReportingChart {
          interface Features {}
        }

        interface TaxRegistrations {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * An empty list, because this embedded component has no features.
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
           * An empty list, because this embedded component has no features.
           */
          features?: TaxSettings.Features;
        }

        namespace TaxSettings {
          interface Features {}
        }

        interface TaxThresholdMonitoring {
          /**
           * Whether the embedded component is enabled.
           */
          enabled: boolean;

          /**
           * An empty list, because this embedded component has no features.
           */
          features?: TaxThresholdMonitoring.Features;
        }

        namespace TaxThresholdMonitoring {
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
