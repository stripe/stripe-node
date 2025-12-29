// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {RequestOptions, Response} from '../lib.js';
const stripeMethod = StripeResource.method;
export class AccountSessionResource extends StripeResource {
  /**
   * Creates a AccountSession object that includes a single-use token that the platform can use on their front-end to grant client-side API access.
   */
  create(
    params: AccountSessionCreateParams,
    options?: RequestOptions
  ): Promise<Response<AccountSession>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/account_sessions',
    }).call(this, ...args);
  }
}
export interface AccountSession {
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
export namespace AccountSession {
  export interface Components {
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

  export namespace Components {
    export interface AccountManagement {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: AccountManagement.Features;
    }

    export interface AccountOnboarding {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: AccountOnboarding.Features;
    }

    export interface Balances {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: Balances.Features;
    }

    export interface DisputesList {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: DisputesList.Features;
    }

    export interface Documents {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: Documents.Features;
    }

    export interface FinancialAccount {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: FinancialAccount.Features;
    }

    export interface FinancialAccountTransactions {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: FinancialAccountTransactions.Features;
    }

    export interface InstantPayoutsPromotion {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: InstantPayoutsPromotion.Features;
    }

    export interface IssuingCard {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: IssuingCard.Features;
    }

    export interface IssuingCardsList {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: IssuingCardsList.Features;
    }

    export interface NotificationBanner {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: NotificationBanner.Features;
    }

    export interface PaymentDetails {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: PaymentDetails.Features;
    }

    export interface PaymentDisputes {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: PaymentDisputes.Features;
    }

    export interface Payments {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: Payments.Features;
    }

    export interface PayoutDetails {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: PayoutDetails.Features;
    }

    export interface Payouts {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: Payouts.Features;
    }

    export interface PayoutsList {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: PayoutsList.Features;
    }

    export interface TaxRegistrations {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: TaxRegistrations.Features;
    }

    export interface TaxSettings {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      features: TaxSettings.Features;
    }

    export namespace AccountManagement {
      export interface Features {
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

    export namespace AccountOnboarding {
      export interface Features {
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

    export namespace Balances {
      export interface Features {
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
         * Whether to allow creation of instant payouts. Defaults to `true` when `controller.losses.payments` is set to `stripe` for the account, otherwise `false`.
         */
        instant_payouts: boolean;

        /**
         * Whether to allow creation of standard payouts. Defaults to `true` when `controller.losses.payments` is set to `stripe` for the account, otherwise `false`.
         */
        standard_payouts: boolean;
      }
    }

    export namespace DisputesList {
      export interface Features {
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

    export namespace Documents {
      export interface Features {}
    }

    export namespace FinancialAccount {
      export interface Features {
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

    export namespace FinancialAccountTransactions {
      export interface Features {
        /**
         * Whether to allow card spend dispute management features.
         */
        card_spend_dispute_management: boolean;
      }
    }

    export namespace InstantPayoutsPromotion {
      export interface Features {
        /**
         * Whether Stripe user authentication is disabled. This value can only be `true` for accounts where `controller.requirement_collection` is `application` for the account. The default value is the opposite of the `external_account_collection` value. For example, if you don't set `external_account_collection`, it defaults to `true` and `disable_stripe_user_authentication` defaults to `false`.
         */
        disable_stripe_user_authentication: boolean;

        /**
         * Whether external account collection is enabled. This feature can only be `false` for accounts where you're responsible for collecting updated information when requirements are due or change, like Custom accounts. The default value for this feature is `true`.
         */
        external_account_collection: boolean;

        /**
         * Whether to allow creation of instant payouts. Defaults to `true` when `controller.losses.payments` is set to `stripe` for the account, otherwise `false`.
         */
        instant_payouts: boolean;
      }
    }

    export namespace IssuingCard {
      export interface Features {
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

    export namespace IssuingCardsList {
      export interface Features {
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

    export namespace NotificationBanner {
      export interface Features {
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

    export namespace PaymentDetails {
      export interface Features {
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

    export namespace PaymentDisputes {
      export interface Features {
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

    export namespace Payments {
      export interface Features {
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

    export namespace PayoutDetails {
      export interface Features {}
    }

    export namespace Payouts {
      export interface Features {
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
         * Whether to allow creation of instant payouts. Defaults to `true` when `controller.losses.payments` is set to `stripe` for the account, otherwise `false`.
         */
        instant_payouts: boolean;

        /**
         * Whether to allow creation of standard payouts. Defaults to `true` when `controller.losses.payments` is set to `stripe` for the account, otherwise `false`.
         */
        standard_payouts: boolean;
      }
    }

    export namespace PayoutsList {
      export interface Features {}
    }

    export namespace TaxRegistrations {
      export interface Features {}
    }

    export namespace TaxSettings {
      export interface Features {}
    }
  }
}
export interface AccountSessionCreateParams {
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
export namespace AccountSessionCreateParams {
  export interface Components {
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
     * Configuration for the [payments](https://docs.stripe.com/connect/supported-embedded-components/payments/) embedded component.
     */
    payments?: Components.Payments;

    /**
     * Configuration for the [payout details](https://docs.stripe.com/connect/supported-embedded-components/payout-details/) embedded component.
     */
    payout_details?: Components.PayoutDetails;

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

  export namespace Components {
    export interface AccountManagement {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * The list of features enabled in the embedded component.
       */
      features?: AccountManagement.Features;
    }

    export interface AccountOnboarding {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * The list of features enabled in the embedded component.
       */
      features?: AccountOnboarding.Features;
    }

    export interface Balances {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * The list of features enabled in the embedded component.
       */
      features?: Balances.Features;
    }

    export interface DisputesList {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * The list of features enabled in the embedded component.
       */
      features?: DisputesList.Features;
    }

    export interface Documents {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * An empty list, because this embedded component has no features.
       */
      features?: Documents.Features;
    }

    export interface FinancialAccount {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * The list of features enabled in the embedded component.
       */
      features?: FinancialAccount.Features;
    }

    export interface FinancialAccountTransactions {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * The list of features enabled in the embedded component.
       */
      features?: FinancialAccountTransactions.Features;
    }

    export interface InstantPayoutsPromotion {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * The list of features enabled in the embedded component.
       */
      features?: InstantPayoutsPromotion.Features;
    }

    export interface IssuingCard {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * The list of features enabled in the embedded component.
       */
      features?: IssuingCard.Features;
    }

    export interface IssuingCardsList {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * The list of features enabled in the embedded component.
       */
      features?: IssuingCardsList.Features;
    }

    export interface NotificationBanner {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * The list of features enabled in the embedded component.
       */
      features?: NotificationBanner.Features;
    }

    export interface PaymentDetails {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * The list of features enabled in the embedded component.
       */
      features?: PaymentDetails.Features;
    }

    export interface PaymentDisputes {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * The list of features enabled in the embedded component.
       */
      features?: PaymentDisputes.Features;
    }

    export interface Payments {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * The list of features enabled in the embedded component.
       */
      features?: Payments.Features;
    }

    export interface PayoutDetails {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * An empty list, because this embedded component has no features.
       */
      features?: PayoutDetails.Features;
    }

    export interface Payouts {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * The list of features enabled in the embedded component.
       */
      features?: Payouts.Features;
    }

    export interface PayoutsList {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * An empty list, because this embedded component has no features.
       */
      features?: PayoutsList.Features;
    }

    export interface TaxRegistrations {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * An empty list, because this embedded component has no features.
       */
      features?: TaxRegistrations.Features;
    }

    export interface TaxSettings {
      /**
       * Whether the embedded component is enabled.
       */
      enabled: boolean;

      /**
       * An empty list, because this embedded component has no features.
       */
      features?: TaxSettings.Features;
    }

    export namespace AccountManagement {
      export interface Features {
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

    export namespace AccountOnboarding {
      export interface Features {
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

    export namespace Balances {
      export interface Features {
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

    export namespace DisputesList {
      export interface Features {
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

    export namespace Documents {
      export interface Features {}
    }

    export namespace FinancialAccount {
      export interface Features {
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

    export namespace FinancialAccountTransactions {
      export interface Features {
        /**
         * Whether to allow card spend dispute management features.
         */
        card_spend_dispute_management?: boolean;
      }
    }

    export namespace InstantPayoutsPromotion {
      export interface Features {
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

    export namespace IssuingCard {
      export interface Features {
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

    export namespace IssuingCardsList {
      export interface Features {
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

    export namespace NotificationBanner {
      export interface Features {
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

    export namespace PaymentDetails {
      export interface Features {
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

    export namespace PaymentDisputes {
      export interface Features {
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

    export namespace Payments {
      export interface Features {
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

    export namespace PayoutDetails {
      export interface Features {}
    }

    export namespace Payouts {
      export interface Features {
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

    export namespace PayoutsList {
      export interface Features {}
    }

    export namespace TaxRegistrations {
      export interface Features {}
    }

    export namespace TaxSettings {
      export interface Features {}
    }
  }
}
