// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {RequestOptions} from '../lib.js';
import {PaymentMethod} from './PaymentMethods.js';
import {Response} from '../lib.js';
const stripeMethod = StripeResource.method;
export class MandateResource extends StripeResource {
  /**
   * Retrieves a Mandate object.
   */
  retrieve(
    id: string,
    params?: MandateRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Mandate>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Mandate>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/mandates/{mandate}',
    }).call(this, ...args);
  }
}
export interface Mandate {
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
  payment_method: string | PaymentMethod;

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
export namespace Mandate {
  export interface CustomerAcceptance {
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

  export interface MultiUse {}

  export interface PaymentMethodDetails {
    acss_debit?: PaymentMethodDetails.AcssDebit;

    amazon_pay?: PaymentMethodDetails.AmazonPay;

    au_becs_debit?: PaymentMethodDetails.AuBecsDebit;

    bacs_debit?: PaymentMethodDetails.BacsDebit;

    card?: PaymentMethodDetails.Card;

    cashapp?: PaymentMethodDetails.Cashapp;

    kakao_pay?: PaymentMethodDetails.KakaoPay;

    klarna?: PaymentMethodDetails.Klarna;

    kr_card?: PaymentMethodDetails.KrCard;

    link?: PaymentMethodDetails.Link;

    naver_pay?: PaymentMethodDetails.NaverPay;

    nz_bank_account?: PaymentMethodDetails.NzBankAccount;

    paypal?: PaymentMethodDetails.Paypal;

    revolut_pay?: PaymentMethodDetails.RevolutPay;

    sepa_debit?: PaymentMethodDetails.SepaDebit;

    /**
     * This mandate corresponds with a specific payment method type. The `payment_method_details` includes an additional hash with the same name and contains mandate information that's specific to that payment method.
     */
    type: string;

    us_bank_account?: PaymentMethodDetails.UsBankAccount;
  }

  export interface SingleUse {
    /**
     * The amount of the payment on a single use mandate.
     */
    amount: number;

    /**
     * The currency of the payment on a single use mandate.
     */
    currency: string;
  }

  export type Status = 'active' | 'inactive' | 'pending';

  export type Type = 'multi_use' | 'single_use';

  export namespace CustomerAcceptance {
    export interface Offline {}

    export interface Online {
      /**
       * The customer accepts the mandate from this IP address.
       */
      ip_address: string | null;

      /**
       * The customer accepts the mandate using the user agent of the browser.
       */
      user_agent: string | null;
    }

    export type Type = 'offline' | 'online';
  }

  export namespace PaymentMethodDetails {
    export interface AcssDebit {
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

    export interface AmazonPay {}

    export interface AuBecsDebit {
      /**
       * The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively.
       */
      url: string;
    }

    export interface BacsDebit {
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

    export interface Card {}

    export interface Cashapp {}

    export interface KakaoPay {}

    export interface Klarna {}

    export interface KrCard {}

    export interface Link {}

    export interface NaverPay {}

    export interface NzBankAccount {}

    export interface Paypal {
      /**
       * The PayPal Billing Agreement ID (BAID). This is an ID generated by PayPal which represents the mandate between the merchant and the customer.
       */
      billing_agreement_id: string | null;

      /**
       * PayPal account PayerID. This identifier uniquely identifies the PayPal customer.
       */
      payer_id: string | null;
    }

    export interface RevolutPay {}

    export interface SepaDebit {
      /**
       * The unique reference of the mandate.
       */
      reference: string;

      /**
       * The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively.
       */
      url: string;
    }

    export interface UsBankAccount {
      /**
       * Mandate collection method
       */
      collection_method?: 'paper';
    }

    export namespace AcssDebit {
      export type DefaultFor = 'invoice' | 'subscription';

      export type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

      export type TransactionType = 'business' | 'personal';
    }

    export namespace BacsDebit {
      export type NetworkStatus =
        | 'accepted'
        | 'pending'
        | 'refused'
        | 'revoked';

      export type RevocationReason =
        | 'account_closed'
        | 'bank_account_restricted'
        | 'bank_ownership_changed'
        | 'could_not_process'
        | 'debit_not_authorized';
    }
  }
}
export interface MandateRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
