// File generated from our OpenAPI spec

import {OtherString} from '../../shared.js';
import {RequestOptions} from '../../lib.js';
export interface CustomerPaymentToken {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'crypto.payment_token';

  /**
   * A `card` PaymentToken, this hash contains details of the card PaymentToken.
   */
  card: CustomerPaymentToken.Card | null;

  /**
   * Type of the Payment Token.
   */
  type: CustomerPaymentToken.Type;

  /**
   * A `us_bank_account` PaymentToken, this hash contains details of the US bank account PaymentToken.
   */
  us_bank_account: CustomerPaymentToken.UsBankAccount | null;
}
export namespace CustomerPaymentToken {
  export interface Card {
    /**
     * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
     */
    brand: string | null;

    /**
     * Two-digit number representing the card's expiration month.
     */
    exp_month: number | null;

    /**
     * Four-digit number representing the card's expiration year.
     */
    exp_year: number | null;

    /**
     * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
     */
    funding: string;

    /**
     * The last four digits of the card.
     */
    last4: string | null;

    /**
     * If this Card is part of a card wallet, this contains the details of the card wallet.
     */
    wallet: Card.Wallet | null;
  }

  export type Type = 'card' | 'us_bank_account' | OtherString;

  export interface UsBankAccount {
    /**
     * Account type: `checkings` or `savings`.
     */
    account_type: UsBankAccount.AccountType | null;

    /**
     * The name of the bank.
     */
    bank_name: string | null;

    /**
     * Last four digits of the bank account number.
     */
    last4: string | null;
  }

  export namespace Card {
    export interface Wallet {
      /**
       * The type of the card wallet, one of `apple_pay` or `google_pay`.
       */
      type: Wallet.Type;
    }

    export namespace Wallet {
      export type Type = 'apple_pay' | 'google_pay' | OtherString;
    }
  }

  export namespace UsBankAccount {
    export type AccountType = 'checking' | 'savings' | OtherString;
  }
}
