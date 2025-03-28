// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A Mandate is a record of the permission that your customer gives you to debit their payment method.
     */
    interface Mandate {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'mandate';

      customer_acceptance: Mandate.CustomerAcceptance;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      multi_use?: Mandate.MultiUse;

      /**
       * The account (if any) that the mandate is intended for.
       */
      on_behalf_of?: string;

      /**
       * ID of the payment method associated with this mandate.
       */
      payment_method: string | Stripe.PaymentMethod;

      payment_method_details: Mandate.PaymentMethodDetails;

      single_use?: Mandate.SingleUse;

      /**
       * The mandate status indicates whether or not you can use it to initiate a payment.
       */
      status: Mandate.Status;

      /**
       * The type of the mandate.
       */
      type: Mandate.Type;
    }

    namespace Mandate {
      interface CustomerAcceptance {
        /**
         * The time that the customer accepts the mandate.
         */
        accepted_at: number | null;

        offline?: CustomerAcceptance.Offline;

        online?: CustomerAcceptance.Online;

        /**
         * The mandate includes the type of customer acceptance information, such as: `online` or `offline`.
         */
        type: CustomerAcceptance.Type;
      }

      namespace CustomerAcceptance {
        interface Offline {}

        interface Online {
          /**
           * The customer accepts the mandate from this IP address.
           */
          ip_address: string | null;

          /**
           * The customer accepts the mandate using the user agent of the browser.
           */
          user_agent: string | null;
        }

        type Type = 'offline' | 'online';
      }

      interface MultiUse {}

      interface PaymentMethodDetails {
        acss_debit?: PaymentMethodDetails.AcssDebit;

        amazon_pay?: PaymentMethodDetails.AmazonPay;

        au_becs_debit?: PaymentMethodDetails.AuBecsDebit;

        bacs_debit?: PaymentMethodDetails.BacsDebit;

        card?: PaymentMethodDetails.Card;

        cashapp?: PaymentMethodDetails.Cashapp;

        kakao_pay?: PaymentMethodDetails.KakaoPay;

        kr_card?: PaymentMethodDetails.KrCard;

        link?: PaymentMethodDetails.Link;

        naver_pay?: PaymentMethodDetails.NaverPay;

        nz_bank_account?: PaymentMethodDetails.NzBankAccount;

        paypal?: PaymentMethodDetails.Paypal;

        payto?: PaymentMethodDetails.Payto;

        revolut_pay?: PaymentMethodDetails.RevolutPay;

        sepa_debit?: PaymentMethodDetails.SepaDebit;

        /**
         * This mandate corresponds with a specific payment method type. The `payment_method_details` includes an additional hash with the same name and contains mandate information that's specific to that payment method.
         */
        type: string;

        us_bank_account?: PaymentMethodDetails.UsBankAccount;
      }

      namespace PaymentMethodDetails {
        interface AcssDebit {
          /**
           * List of Stripe products where this mandate can be selected automatically.
           */
          default_for?: Array<AcssDebit.DefaultFor>;

          /**
           * Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'.
           */
          interval_description: string | null;

          /**
           * Payment schedule for the mandate.
           */
          payment_schedule: AcssDebit.PaymentSchedule;

          /**
           * Transaction type of the mandate.
           */
          transaction_type: AcssDebit.TransactionType;
        }

        namespace AcssDebit {
          type DefaultFor = 'invoice' | 'subscription';

          type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

          type TransactionType = 'business' | 'personal';
        }

        interface AmazonPay {}

        interface AuBecsDebit {
          /**
           * The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively.
           */
          url: string;
        }

        interface BacsDebit {
          /**
           * The status of the mandate on the Bacs network. Can be one of `pending`, `revoked`, `refused`, or `accepted`.
           */
          network_status: BacsDebit.NetworkStatus;

          /**
           * The unique reference identifying the mandate on the Bacs network.
           */
          reference: string;

          /**
           * When the mandate is revoked on the Bacs network this field displays the reason for the revocation.
           */
          revocation_reason: BacsDebit.RevocationReason | null;

          /**
           * The URL that will contain the mandate that the customer has signed.
           */
          url: string;
        }

        namespace BacsDebit {
          type NetworkStatus = 'accepted' | 'pending' | 'refused' | 'revoked';

          type RevocationReason =
            | 'account_closed'
            | 'bank_account_restricted'
            | 'bank_ownership_changed'
            | 'could_not_process'
            | 'debit_not_authorized';
        }

        interface Card {}

        interface Cashapp {}

        interface KakaoPay {}

        interface KrCard {}

        interface Link {}

        interface NaverPay {}

        interface NzBankAccount {}

        interface Paypal {
          /**
           * The PayPal Billing Agreement ID (BAID). This is an ID generated by PayPal which represents the mandate between the merchant and the customer.
           */
          billing_agreement_id: string | null;

          /**
           * Uniquely identifies this particular PayPal account. You can use this attribute to check whether two PayPal accounts are the same.
           */
          fingerprint?: string | null;

          /**
           * PayPal account PayerID. This identifier uniquely identifies the PayPal customer.
           */
          payer_id: string | null;

          /**
           * Owner's verified email. Values are verified or provided by PayPal directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_email?: string | null;
        }

        interface Payto {
          /**
           * Amount that will be collected. It is required when `amount_type` is `fixed`.
           */
          amount: number | null;

          /**
           * The type of amount that will be collected. The amount charged must be exact or up to the value of `amount` param for `fixed` or `maximum` type respectively.
           */
          amount_type: Payto.AmountType;

          /**
           * Date, in YYYY-MM-DD format, after which payments will not be collected. Defaults to no end date.
           */
          end_date: string | null;

          /**
           * The periodicity at which payments will be collected.
           */
          payment_schedule: Payto.PaymentSchedule;

          /**
           * The number of payments that will be made during a payment period. Defaults to 1 except for when `payment_schedule` is `adhoc`. In that case, it defaults to no limit.
           */
          payments_per_period: number | null;

          /**
           * The purpose for which payments are made. Defaults to retail.
           */
          purpose: Payto.Purpose | null;

          /**
           * Date, in YYYY-MM-DD format, from which payments will be collected. Defaults to confirmation time.
           */
          start_date: string | null;
        }

        namespace Payto {
          type AmountType = 'fixed' | 'maximum';

          type PaymentSchedule =
            | 'adhoc'
            | 'annual'
            | 'daily'
            | 'fortnightly'
            | 'monthly'
            | 'quarterly'
            | 'semi_annual'
            | 'weekly';

          type Purpose =
            | 'dependant_support'
            | 'government'
            | 'loan'
            | 'mortgage'
            | 'other'
            | 'pension'
            | 'personal'
            | 'retail'
            | 'salary'
            | 'tax'
            | 'utility';
        }

        interface RevolutPay {}

        interface SepaDebit {
          /**
           * The unique reference of the mandate.
           */
          reference: string;

          /**
           * The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively.
           */
          url: string;
        }

        interface UsBankAccount {
          /**
           * Mandate collection method
           */
          collection_method?: 'paper';
        }
      }

      interface SingleUse {
        /**
         * The amount of the payment on a single use mandate.
         */
        amount: number;

        /**
         * The currency of the payment on a single use mandate.
         */
        currency: string;
      }

      type Status = 'active' | 'inactive' | 'pending';

      type Type = 'multi_use' | 'single_use';
    }
  }
}
