// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A Payment Record is a resource that allows you to represent payments that occur on- or off-Stripe.
     * For example, you can create a Payment Record to model a payment made on a different payment processor,
     * in order to mark an Invoice as paid and a Subscription as active. Payment Records consist of one or
     * more Payment Attempt Records, which represent individual attempts made on a payment network.
     */
    interface PaymentRecord {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'payment_record';

      /**
       * A representation of an amount of money, consisting of an amount and a currency.
       */
      amount: PaymentRecord.Amount;

      /**
       * A representation of an amount of money, consisting of an amount and a currency.
       */
      amount_authorized: PaymentRecord.AmountAuthorized;

      /**
       * A representation of an amount of money, consisting of an amount and a currency.
       */
      amount_canceled: PaymentRecord.AmountCanceled;

      /**
       * A representation of an amount of money, consisting of an amount and a currency.
       */
      amount_failed: PaymentRecord.AmountFailed;

      /**
       * A representation of an amount of money, consisting of an amount and a currency.
       */
      amount_guaranteed: PaymentRecord.AmountGuaranteed;

      /**
       * A representation of an amount of money, consisting of an amount and a currency.
       */
      amount_refunded: PaymentRecord.AmountRefunded;

      /**
       * A representation of an amount of money, consisting of an amount and a currency.
       */
      amount_requested: PaymentRecord.AmountRequested;

      /**
       * ID of the Connect application that created the PaymentRecord.
       */
      application: string | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Customer information for this payment.
       */
      customer_details: PaymentRecord.CustomerDetails | null;

      /**
       * Indicates whether the customer was present in your checkout flow during this payment.
       */
      customer_presence: PaymentRecord.CustomerPresence | null;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description: string | null;

      /**
       * ID of the latest Payment Attempt Record attached to this Payment Record.
       */
      latest_payment_attempt_record: string | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * Information about the Payment Method debited for this payment.
       */
      payment_method_details: PaymentRecord.PaymentMethodDetails | null;

      /**
       * Processor information associated with this payment.
       */
      processor_details: PaymentRecord.ProcessorDetails;

      /**
       * Indicates who reported the payment.
       */
      reported_by: PaymentRecord.ReportedBy;

      /**
       * Shipping information for this payment.
       */
      shipping_details: PaymentRecord.ShippingDetails | null;
    }

    namespace PaymentRecord {
      interface Amount {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A positive integer representing the amount in the currency's [minor unit](https://docs.stripe.com/currencies#zero-decimal). For example, `100` can represent 1 USD or 100 JPY.
         */
        value: number;
      }

      interface AmountAuthorized {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A positive integer representing the amount in the currency's [minor unit](https://docs.stripe.com/currencies#zero-decimal). For example, `100` can represent 1 USD or 100 JPY.
         */
        value: number;
      }

      interface AmountCanceled {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A positive integer representing the amount in the currency's [minor unit](https://docs.stripe.com/currencies#zero-decimal). For example, `100` can represent 1 USD or 100 JPY.
         */
        value: number;
      }

      interface AmountFailed {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A positive integer representing the amount in the currency's [minor unit](https://docs.stripe.com/currencies#zero-decimal). For example, `100` can represent 1 USD or 100 JPY.
         */
        value: number;
      }

      interface AmountGuaranteed {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A positive integer representing the amount in the currency's [minor unit](https://docs.stripe.com/currencies#zero-decimal). For example, `100` can represent 1 USD or 100 JPY.
         */
        value: number;
      }

      interface AmountRefunded {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A positive integer representing the amount in the currency's [minor unit](https://docs.stripe.com/currencies#zero-decimal). For example, `100` can represent 1 USD or 100 JPY.
         */
        value: number;
      }

      interface AmountRequested {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * A positive integer representing the amount in the currency's [minor unit](https://docs.stripe.com/currencies#zero-decimal). For example, `100` can represent 1 USD or 100 JPY.
         */
        value: number;
      }

      interface CustomerDetails {
        /**
         * ID of the Stripe Customer associated with this payment.
         */
        customer: string | null;

        /**
         * The customer's email address.
         */
        email: string | null;

        /**
         * The customer's name.
         */
        name: string | null;

        /**
         * The customer's phone number.
         */
        phone: string | null;
      }

      type CustomerPresence = 'off_session' | 'on_session';

      interface PaymentMethodDetails {
        ach_credit_transfer?: PaymentMethodDetails.AchCreditTransfer;

        ach_debit?: PaymentMethodDetails.AchDebit;

        acss_debit?: PaymentMethodDetails.AcssDebit;

        affirm?: PaymentMethodDetails.Affirm;

        afterpay_clearpay?: PaymentMethodDetails.AfterpayClearpay;

        alipay?: PaymentMethodDetails.Alipay;

        alma?: PaymentMethodDetails.Alma;

        amazon_pay?: PaymentMethodDetails.AmazonPay;

        au_becs_debit?: PaymentMethodDetails.AuBecsDebit;

        bacs_debit?: PaymentMethodDetails.BacsDebit;

        bancontact?: PaymentMethodDetails.Bancontact;

        billie?: PaymentMethodDetails.Billie;

        /**
         * The billing details associated with the method of payment.
         */
        billing_details: PaymentMethodDetails.BillingDetails | null;

        blik?: PaymentMethodDetails.Blik;

        boleto?: PaymentMethodDetails.Boleto;

        /**
         * Details of the card used for this payment attempt.
         */
        card?: PaymentMethodDetails.Card;

        card_present?: PaymentMethodDetails.CardPresent;

        cashapp?: PaymentMethodDetails.Cashapp;

        crypto?: PaymentMethodDetails.Crypto;

        /**
         * Custom Payment Methods represent Payment Method types not modeled directly in
         * the Stripe API. This resource consists of details about the custom payment method
         * used for this payment attempt.
         */
        custom?: PaymentMethodDetails.Custom;

        customer_balance?: PaymentMethodDetails.CustomerBalance;

        eps?: PaymentMethodDetails.Eps;

        fpx?: PaymentMethodDetails.Fpx;

        giropay?: PaymentMethodDetails.Giropay;

        grabpay?: PaymentMethodDetails.Grabpay;

        ideal?: PaymentMethodDetails.Ideal;

        interac_present?: PaymentMethodDetails.InteracPresent;

        kakao_pay?: PaymentMethodDetails.KakaoPay;

        klarna?: PaymentMethodDetails.Klarna;

        konbini?: PaymentMethodDetails.Konbini;

        kr_card?: PaymentMethodDetails.KrCard;

        link?: PaymentMethodDetails.Link;

        mb_way?: PaymentMethodDetails.MbWay;

        mobilepay?: PaymentMethodDetails.Mobilepay;

        multibanco?: PaymentMethodDetails.Multibanco;

        naver_pay?: PaymentMethodDetails.NaverPay;

        nz_bank_account?: PaymentMethodDetails.NzBankAccount;

        oxxo?: PaymentMethodDetails.Oxxo;

        p24?: PaymentMethodDetails.P24;

        pay_by_bank?: PaymentMethodDetails.PayByBank;

        payco?: PaymentMethodDetails.Payco;

        /**
         * ID of the Stripe PaymentMethod used to make this payment.
         */
        payment_method: string | null;

        paynow?: PaymentMethodDetails.Paynow;

        paypal?: PaymentMethodDetails.Paypal;

        payto?: PaymentMethodDetails.Payto;

        pix?: PaymentMethodDetails.Pix;

        promptpay?: PaymentMethodDetails.Promptpay;

        revolut_pay?: PaymentMethodDetails.RevolutPay;

        samsung_pay?: PaymentMethodDetails.SamsungPay;

        satispay?: PaymentMethodDetails.Satispay;

        sepa_credit_transfer?: PaymentMethodDetails.SepaCreditTransfer;

        sepa_debit?: PaymentMethodDetails.SepaDebit;

        sofort?: PaymentMethodDetails.Sofort;

        stripe_account?: PaymentMethodDetails.StripeAccount;

        swish?: PaymentMethodDetails.Swish;

        twint?: PaymentMethodDetails.Twint;

        /**
         * The type of transaction-specific details of the payment method used in the payment. See [PaymentMethod.type](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type) for the full list of possible types.
         * An additional hash is included on `payment_method_details` with a name matching this value.
         * It contains information specific to the payment method.
         */
        type: string;

        us_bank_account?: PaymentMethodDetails.UsBankAccount;

        wechat?: PaymentMethodDetails.Wechat;

        wechat_pay?: PaymentMethodDetails.WechatPay;

        zip?: PaymentMethodDetails.Zip;
      }

      namespace PaymentMethodDetails {
        interface AchCreditTransfer {
          /**
           * Account number to transfer funds to.
           */
          account_number: string | null;

          /**
           * Name of the bank associated with the routing number.
           */
          bank_name: string | null;

          /**
           * Routing transit number for the bank account to transfer funds to.
           */
          routing_number: string | null;

          /**
           * SWIFT code of the bank associated with the routing number.
           */
          swift_code: string | null;
        }

        interface AchDebit {
          /**
           * Type of entity that holds the account. This can be either `individual` or `company`.
           */
          account_holder_type: AchDebit.AccountHolderType | null;

          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Two-letter ISO code representing the country the bank account is located in.
           */
          country: string | null;

          /**
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Last four digits of the bank account number.
           */
          last4: string | null;

          /**
           * Routing transit number of the bank account.
           */
          routing_number: string | null;
        }

        namespace AchDebit {
          type AccountHolderType = 'company' | 'individual';
        }

        interface AcssDebit {
          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Estimated date to debit the customer's bank account. A date string in YYYY-MM-DD format.
           */
          expected_debit_date?: string;

          /**
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Institution number of the bank account
           */
          institution_number: string | null;

          /**
           * Last four digits of the bank account number.
           */
          last4: string | null;

          /**
           * ID of the mandate used to make this payment.
           */
          mandate?: string;

          /**
           * Transit number of the bank account.
           */
          transit_number: string | null;
        }

        interface Affirm {
          /**
           * ID of the [location](https://docs.stripe.com/api/terminal/locations) that this transaction's reader is assigned to.
           */
          location?: string;

          /**
           * ID of the [reader](https://docs.stripe.com/api/terminal/readers) this transaction was made on.
           */
          reader?: string;

          /**
           * The Affirm transaction ID associated with this payment.
           */
          transaction_id: string | null;
        }

        interface AfterpayClearpay {
          /**
           * The Afterpay order ID associated with this payment intent.
           */
          order_id: string | null;

          /**
           * Order identifier shown to the merchant in Afterpay's online portal.
           */
          reference: string | null;
        }

        interface Alipay {
          /**
           * Uniquely identifies this particular Alipay account. You can use this attribute to check whether two Alipay accounts are the same.
           */
          buyer_id?: string;

          /**
           * Uniquely identifies this particular Alipay account. You can use this attribute to check whether two Alipay accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Transaction ID of this particular Alipay transaction.
           */
          transaction_id: string | null;
        }

        interface Alma {
          installments?: Alma.Installments;

          /**
           * The Alma transaction ID associated with this payment.
           */
          transaction_id: string | null;
        }

        namespace Alma {
          interface Installments {
            /**
             * The number of installments.
             */
            count: number;
          }
        }

        interface AmazonPay {
          funding?: AmazonPay.Funding;

          /**
           * The Amazon Pay transaction ID associated with this payment.
           */
          transaction_id: string | null;
        }

        namespace AmazonPay {
          interface Funding {
            card?: Funding.Card;

            /**
             * funding type of the underlying payment method.
             */
            type: 'card' | null;
          }

          namespace Funding {
            interface Card {
              /**
               * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
               */
              brand: string | null;

              /**
               * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
               */
              country: string | null;

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
              funding: string | null;

              /**
               * The last four digits of the card.
               */
              last4: string | null;
            }
          }
        }

        interface AuBecsDebit {
          /**
           * Bank-State-Branch number of the bank account.
           */
          bsb_number: string | null;

          /**
           * Estimated date to debit the customer's bank account. A date string in YYYY-MM-DD format.
           */
          expected_debit_date?: string;

          /**
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Last four digits of the bank account number.
           */
          last4: string | null;

          /**
           * ID of the mandate used to make this payment.
           */
          mandate?: string;
        }

        interface BacsDebit {
          /**
           * Estimated date to debit the customer's bank account. A date string in YYYY-MM-DD format.
           */
          expected_debit_date?: string;

          /**
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Last four digits of the bank account number.
           */
          last4: string | null;

          /**
           * ID of the mandate used to make this payment.
           */
          mandate: string | null;

          /**
           * Sort code of the bank account. (e.g., `10-20-30`)
           */
          sort_code: string | null;
        }

        interface Bancontact {
          /**
           * Bank code of bank associated with the bank account.
           */
          bank_code: string | null;

          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Bank Identifier Code of the bank associated with the bank account.
           */
          bic: string | null;

          /**
           * The ID of the SEPA Direct Debit PaymentMethod which was generated by this Charge.
           */
          generated_sepa_debit: string | Stripe.PaymentMethod | null;

          /**
           * The mandate for the SEPA Direct Debit PaymentMethod which was generated by this Charge.
           */
          generated_sepa_debit_mandate: string | Stripe.Mandate | null;

          /**
           * Last four characters of the IBAN.
           */
          iban_last4: string | null;

          /**
           * Preferred language of the Bancontact authorization page that the customer is redirected to.
           * Can be one of `en`, `de`, `fr`, or `nl`
           */
          preferred_language: Bancontact.PreferredLanguage | null;

          /**
           * Owner's verified full name. Values are verified or provided by Bancontact directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_name: string | null;
        }

        namespace Bancontact {
          type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
        }

        interface Billie {
          /**
           * The Billie transaction ID associated with this payment.
           */
          transaction_id: string | null;
        }

        interface BillingDetails {
          /**
           * A representation of a physical address.
           */
          address: Stripe.Address;

          /**
           * The billing email associated with the method of payment.
           */
          email: string | null;

          /**
           * The billing name associated with the method of payment.
           */
          name: string | null;

          /**
           * The billing phone number associated with the method of payment.
           */
          phone: string | null;
        }

        interface Blik {
          /**
           * A unique and immutable identifier assigned by BLIK to every buyer.
           */
          buyer_id: string | null;
        }

        interface Boleto {
          /**
           * The tax ID of the customer (CPF for individuals consumers or CNPJ for businesses consumers)
           */
          tax_id: string;
        }

        interface Card {
          /**
           * The authorization code of the payment.
           */
          authorization_code: string | null;

          /**
           * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
           */
          brand: Card.Brand;

          /**
           * When using manual capture, a future timestamp at which the charge will be automatically refunded if uncaptured.
           */
          capture_before?: number;

          /**
           * Check results by Card networks on Card address and CVC at time of payment.
           */
          checks: Card.Checks | null;

          /**
           * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
           */
          country: string | null;

          /**
           * A high-level description of the type of cards issued in this range.
           */
          description: string | null;

          /**
           * Two-digit number representing the card's expiration month.
           */
          exp_month: number;

          /**
           * Four-digit number representing the card's expiration year.
           */
          exp_year: number;

          /**
           * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
           *
           * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
           */
          fingerprint?: string | null;

          /**
           * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
           */
          funding: Card.Funding;

          /**
           * Issuer identification number of the card.
           */
          iin: string | null;

          /**
           * Installment details for this payment.
           */
          installments: Card.Installments | null;

          /**
           * The name of the card's issuing bank.
           */
          issuer: string | null;

          /**
           * The last four digits of the card.
           */
          last4: string;

          /**
           * True if this payment was marked as MOTO and out of scope for SCA.
           */
          moto?: boolean;

          /**
           * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          network: Card.Network | null;

          /**
           * Advice code from the card network for the failed payment.
           */
          network_advice_code: string | null;

          /**
           * Decline code from the card network for the failed payment.
           */
          network_decline_code: string | null;

          /**
           * If this card has network token credentials, this contains the details of the network token credentials.
           */
          network_token?: Card.NetworkToken | null;

          /**
           * This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. This value will be present if it is returned by the financial network in the authorization response, and null otherwise.
           */
          network_transaction_id: string | null;

          /**
           * The transaction type that was passed for an off-session, Merchant-Initiated transaction, one of `recurring` or `unscheduled`.
           */
          stored_credential_usage: Card.StoredCredentialUsage | null;

          /**
           * Populated if this transaction used 3D Secure authentication.
           */
          three_d_secure: Card.ThreeDSecure | null;

          /**
           * If this Card is part of a card wallet, this contains the details of the card wallet.
           */
          wallet: Card.Wallet | null;
        }

        namespace Card {
          type Brand =
            | 'amex'
            | 'cartes_bancaires'
            | 'diners'
            | 'discover'
            | 'eftpos_au'
            | 'interac'
            | 'jcb'
            | 'link'
            | 'mastercard'
            | 'unionpay'
            | 'unknown'
            | 'visa';

          interface Checks {
            address_line1_check: Checks.AddressLine1Check | null;

            address_postal_code_check: Checks.AddressPostalCodeCheck | null;

            cvc_check: Checks.CvcCheck | null;
          }

          namespace Checks {
            type AddressLine1Check =
              | 'fail'
              | 'pass'
              | 'unavailable'
              | 'unchecked';

            type AddressPostalCodeCheck =
              | 'fail'
              | 'pass'
              | 'unavailable'
              | 'unchecked';

            type CvcCheck = 'fail' | 'pass' | 'unavailable' | 'unchecked';
          }

          type Funding = 'credit' | 'debit' | 'prepaid' | 'unknown';

          interface Installments {
            plan: Installments.Plan | null;
          }

          namespace Installments {
            interface Plan {
              /**
               * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
               */
              count: number | null;

              /**
               * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card. One of `month`.
               */
              interval: 'month' | null;

              /**
               * Type of installment plan, one of `fixed_count`, `revolving`, or `bonus`.
               */
              type: Plan.Type;
            }

            namespace Plan {
              type Type = 'bonus' | 'fixed_count' | 'revolving';
            }
          }

          type Network =
            | 'amex'
            | 'cartes_bancaires'
            | 'diners'
            | 'discover'
            | 'eftpos_au'
            | 'interac'
            | 'jcb'
            | 'link'
            | 'mastercard'
            | 'unionpay'
            | 'unknown'
            | 'visa';

          interface NetworkToken {
            /**
             * Indicates if Stripe used a network token, either user provided or Stripe managed when processing the transaction.
             */
            used: boolean;
          }

          type StoredCredentialUsage = 'recurring' | 'unscheduled';

          interface ThreeDSecure {
            authentication_flow: ThreeDSecure.AuthenticationFlow | null;

            result: ThreeDSecure.Result | null;

            result_reason: ThreeDSecure.ResultReason | null;

            version: ThreeDSecure.Version | null;
          }

          namespace ThreeDSecure {
            type AuthenticationFlow = 'challenge' | 'frictionless';

            type Result =
              | 'attempt_acknowledged'
              | 'authenticated'
              | 'exempted'
              | 'failed'
              | 'not_supported'
              | 'processing_error';

            type ResultReason =
              | 'abandoned'
              | 'bypassed'
              | 'canceled'
              | 'card_not_enrolled'
              | 'network_not_supported'
              | 'protocol_error'
              | 'rejected';

            type Version = '1.0.2' | '2.1.0' | '2.2.0';
          }

          interface Wallet {
            apple_pay?: Wallet.ApplePay;

            /**
             * (For tokenized numbers only.) The last four digits of the device account number.
             */
            dynamic_last4?: string;

            google_pay?: Wallet.GooglePay;

            /**
             * The type of the card wallet, one of `apple_pay` or `google_pay`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
             */
            type: string;
          }

          namespace Wallet {
            interface ApplePay {
              /**
               * Type of the apple_pay transaction, one of `apple_pay` or `apple_pay_later`.
               */
              type: string;
            }

            interface GooglePay {}
          }
        }

        interface CardPresent {
          /**
           * The authorized amount
           */
          amount_authorized: number | null;

          /**
           * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
           */
          brand: string | null;

          /**
           * The [product code](https://stripe.com/docs/card-product-codes) that identifies the specific program or product associated with a card.
           */
          brand_product: string | null;

          /**
           * When using manual capture, a future timestamp after which the charge will be automatically refunded if uncaptured.
           */
          capture_before?: number;

          /**
           * The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay.
           */
          cardholder_name: string | null;

          /**
           * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
           */
          country: string | null;

          /**
           * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
           */
          description?: string | null;

          /**
           * Authorization response cryptogram.
           */
          emv_auth_data: string | null;

          /**
           * Two-digit number representing the card's expiration month.
           */
          exp_month: number;

          /**
           * Four-digit number representing the card's expiration year.
           */
          exp_year: number;

          /**
           * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
           *
           * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
           */
          fingerprint: string | null;

          /**
           * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
           */
          funding: string | null;

          /**
           * ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
           */
          generated_card: string | null;

          /**
           * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
           */
          iin?: string | null;

          /**
           * Whether this [PaymentIntent](https://docs.stripe.com/api/payment_intents) is eligible for incremental authorizations. Request support using [request_incremental_authorization_support](https://docs.stripe.com/api/payment_intents/create#create_payment_intent-payment_method_options-card_present-request_incremental_authorization_support).
           */
          incremental_authorization_supported: boolean;

          /**
           * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
           */
          issuer?: string | null;

          /**
           * The last four digits of the card.
           */
          last4: string | null;

          /**
           * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          network: string | null;

          /**
           * This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. This value will be present if it is returned by the financial network in the authorization response, and null otherwise.
           */
          network_transaction_id: string | null;

          /**
           * Details about payments collected offline.
           */
          offline: CardPresent.Offline | null;

          /**
           * Defines whether the authorized amount can be over-captured or not
           */
          overcapture_supported: boolean;

          /**
           * The languages that the issuing bank recommends using for localizing any customer-facing text, as read from the card. Referenced from EMV tag 5F2D, data encoded on the card's chip.
           */
          preferred_locales: Array<string> | null;

          /**
           * How card details were read in this transaction.
           */
          read_method: CardPresent.ReadMethod | null;

          /**
           * A collection of fields required to be displayed on receipts. Only required for EMV transactions.
           */
          receipt: CardPresent.Receipt | null;

          wallet?: CardPresent.Wallet;
        }

        namespace CardPresent {
          interface Offline {
            /**
             * Time at which the payment was collected while offline
             */
            stored_at: number | null;

            /**
             * The method used to process this payment method offline. Only deferred is allowed.
             */
            type: 'deferred' | null;
          }

          type ReadMethod =
            | 'contact_emv'
            | 'contactless_emv'
            | 'contactless_magstripe_mode'
            | 'magnetic_stripe_fallback'
            | 'magnetic_stripe_track2';

          interface Receipt {
            /**
             * The type of account being debited or credited
             */
            account_type?: Receipt.AccountType;

            /**
             * The Application Cryptogram, a unique value generated by the card to authenticate the transaction with issuers.
             */
            application_cryptogram: string | null;

            /**
             * The Application Identifier (AID) on the card used to determine which networks are eligible to process the transaction. Referenced from EMV tag 9F12, data encoded on the card's chip.
             */
            application_preferred_name: string | null;

            /**
             * Identifier for this transaction.
             */
            authorization_code: string | null;

            /**
             * EMV tag 8A. A code returned by the card issuer.
             */
            authorization_response_code: string | null;

            /**
             * Describes the method used by the cardholder to verify ownership of the card. One of the following: `approval`, `failure`, `none`, `offline_pin`, `offline_pin_and_signature`, `online_pin`, or `signature`.
             */
            cardholder_verification_method: string | null;

            /**
             * Similar to the application_preferred_name, identifying the applications (AIDs) available on the card. Referenced from EMV tag 84.
             */
            dedicated_file_name: string | null;

            /**
             * A 5-byte string that records the checks and validations that occur between the card and the terminal. These checks determine how the terminal processes the transaction and what risk tolerance is acceptable. Referenced from EMV Tag 95.
             */
            terminal_verification_results: string | null;

            /**
             * An indication of which steps were completed during the card read process. Referenced from EMV Tag 9B.
             */
            transaction_status_information: string | null;
          }

          namespace Receipt {
            type AccountType = 'checking' | 'credit' | 'prepaid' | 'unknown';
          }

          interface Wallet {
            /**
             * The type of mobile wallet, one of `apple_pay`, `google_pay`, `samsung_pay`, or `unknown`.
             */
            type: Wallet.Type;
          }

          namespace Wallet {
            type Type = 'apple_pay' | 'google_pay' | 'samsung_pay' | 'unknown';
          }
        }

        interface Cashapp {
          /**
           * A unique and immutable identifier assigned by Cash App to every buyer.
           */
          buyer_id: string | null;

          /**
           * A public identifier for buyers using Cash App.
           */
          cashtag: string | null;

          /**
           * A unique and immutable identifier of payments assigned by Cash App
           */
          transaction_id: string | null;
        }

        interface Crypto {
          /**
           * The wallet address of the customer.
           */
          buyer_address?: string;

          /**
           * The blockchain network that the transaction was sent on.
           */
          network?: Crypto.Network;

          /**
           * The token currency that the transaction was sent with.
           */
          token_currency?: Crypto.TokenCurrency;

          /**
           * The blockchain transaction hash of the crypto payment.
           */
          transaction_hash?: string;
        }

        namespace Crypto {
          type Network = 'base' | 'ethereum' | 'polygon' | 'solana';

          type TokenCurrency = 'usdc' | 'usdg' | 'usdp';
        }

        interface Custom {
          /**
           * Display name for the custom (user-defined) payment method type used to make this payment.
           */
          display_name: string;

          /**
           * The custom payment method type associated with this payment.
           */
          type: string | null;
        }

        interface CustomerBalance {}

        interface Eps {
          /**
           * The customer's bank. Should be one of `arzte_und_apotheker_bank`, `austrian_anadi_bank_ag`, `bank_austria`, `bankhaus_carl_spangler`, `bankhaus_schelhammer_und_schattera_ag`, `bawag_psk_ag`, `bks_bank_ag`, `brull_kallmus_bank_ag`, `btv_vier_lander_bank`, `capital_bank_grawe_gruppe_ag`, `deutsche_bank_ag`, `dolomitenbank`, `easybank_ag`, `erste_bank_und_sparkassen`, `hypo_alpeadriabank_international_ag`, `hypo_noe_lb_fur_niederosterreich_u_wien`, `hypo_oberosterreich_salzburg_steiermark`, `hypo_tirol_bank_ag`, `hypo_vorarlberg_bank_ag`, `hypo_bank_burgenland_aktiengesellschaft`, `marchfelder_bank`, `oberbank_ag`, `raiffeisen_bankengruppe_osterreich`, `schoellerbank_ag`, `sparda_bank_wien`, `volksbank_gruppe`, `volkskreditbank_ag`, or `vr_bank_braunau`.
           */
          bank: Eps.Bank | null;

          /**
           * Owner's verified full name. Values are verified or provided by EPS directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           * EPS rarely provides this information so the attribute is usually empty.
           */
          verified_name: string | null;
        }

        namespace Eps {
          type Bank =
            | 'arzte_und_apotheker_bank'
            | 'austrian_anadi_bank_ag'
            | 'bank_austria'
            | 'bankhaus_carl_spangler'
            | 'bankhaus_schelhammer_und_schattera_ag'
            | 'bawag_psk_ag'
            | 'bks_bank_ag'
            | 'brull_kallmus_bank_ag'
            | 'btv_vier_lander_bank'
            | 'capital_bank_grawe_gruppe_ag'
            | 'deutsche_bank_ag'
            | 'dolomitenbank'
            | 'easybank_ag'
            | 'erste_bank_und_sparkassen'
            | 'hypo_alpeadriabank_international_ag'
            | 'hypo_bank_burgenland_aktiengesellschaft'
            | 'hypo_noe_lb_fur_niederosterreich_u_wien'
            | 'hypo_oberosterreich_salzburg_steiermark'
            | 'hypo_tirol_bank_ag'
            | 'hypo_vorarlberg_bank_ag'
            | 'marchfelder_bank'
            | 'oberbank_ag'
            | 'raiffeisen_bankengruppe_osterreich'
            | 'schoellerbank_ag'
            | 'sparda_bank_wien'
            | 'volksbank_gruppe'
            | 'volkskreditbank_ag'
            | 'vr_bank_braunau';
        }

        interface Fpx {
          /**
           * Account holder type, if provided. Can be one of `individual` or `company`.
           */
          account_holder_type: Fpx.AccountHolderType | null;

          /**
           * The customer's bank. Can be one of `affin_bank`, `agrobank`, `alliance_bank`, `ambank`, `bank_islam`, `bank_muamalat`, `bank_rakyat`, `bsn`, `cimb`, `hong_leong_bank`, `hsbc`, `kfh`, `maybank2u`, `ocbc`, `public_bank`, `rhb`, `standard_chartered`, `uob`, `deutsche_bank`, `maybank2e`, `pb_enterprise`, or `bank_of_china`.
           */
          bank: Fpx.Bank;

          /**
           * Unique transaction id generated by FPX for every request from the merchant
           */
          transaction_id: string | null;
        }

        namespace Fpx {
          type AccountHolderType = 'company' | 'individual';

          type Bank =
            | 'affin_bank'
            | 'agrobank'
            | 'alliance_bank'
            | 'ambank'
            | 'bank_islam'
            | 'bank_muamalat'
            | 'bank_of_china'
            | 'bank_rakyat'
            | 'bsn'
            | 'cimb'
            | 'deutsche_bank'
            | 'hong_leong_bank'
            | 'hsbc'
            | 'kfh'
            | 'maybank2e'
            | 'maybank2u'
            | 'ocbc'
            | 'pb_enterprise'
            | 'public_bank'
            | 'rhb'
            | 'standard_chartered'
            | 'uob';
        }

        interface Giropay {
          /**
           * Bank code of bank associated with the bank account.
           */
          bank_code: string | null;

          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Bank Identifier Code of the bank associated with the bank account.
           */
          bic: string | null;

          /**
           * Owner's verified full name. Values are verified or provided by Giropay directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           * Giropay rarely provides this information so the attribute is usually empty.
           */
          verified_name: string | null;
        }

        interface Grabpay {
          /**
           * Unique transaction id generated by GrabPay
           */
          transaction_id: string | null;
        }

        interface Ideal {
          /**
           * The customer's bank. Can be one of `abn_amro`, `adyen`, `asn_bank`, `bunq`, `buut`, `finom`, `handelsbanken`, `ing`, `knab`, `mollie`, `moneyou`, `n26`, `nn`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, `van_lanschot`, or `yoursafe`.
           */
          bank: Ideal.Bank | null;

          /**
           * The Bank Identifier Code of the customer's bank.
           */
          bic: Ideal.Bic | null;

          /**
           * The ID of the SEPA Direct Debit PaymentMethod which was generated by this Charge.
           */
          generated_sepa_debit: string | Stripe.PaymentMethod | null;

          /**
           * The mandate for the SEPA Direct Debit PaymentMethod which was generated by this Charge.
           */
          generated_sepa_debit_mandate: string | Stripe.Mandate | null;

          /**
           * Last four characters of the IBAN.
           */
          iban_last4: string | null;

          /**
           * Unique transaction ID generated by iDEAL.
           */
          transaction_id: string | null;

          /**
           * Owner's verified full name. Values are verified or provided by iDEAL directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_name: string | null;
        }

        namespace Ideal {
          type Bank =
            | 'abn_amro'
            | 'adyen'
            | 'asn_bank'
            | 'bunq'
            | 'buut'
            | 'finom'
            | 'handelsbanken'
            | 'ing'
            | 'knab'
            | 'mollie'
            | 'moneyou'
            | 'n26'
            | 'nn'
            | 'rabobank'
            | 'regiobank'
            | 'revolut'
            | 'sns_bank'
            | 'triodos_bank'
            | 'van_lanschot'
            | 'yoursafe';

          type Bic =
            | 'ABNANL2A'
            | 'ADYBNL2A'
            | 'ASNBNL21'
            | 'BITSNL2A'
            | 'BUNQNL2A'
            | 'BUUTNL2A'
            | 'FNOMNL22'
            | 'FVLBNL22'
            | 'HANDNL2A'
            | 'INGBNL2A'
            | 'KNABNL2H'
            | 'MLLENL2A'
            | 'MOYONL21'
            | 'NNBANL2G'
            | 'NTSBDEB1'
            | 'RABONL2U'
            | 'RBRBNL21'
            | 'REVOIE23'
            | 'REVOLT21'
            | 'SNSBNL2A'
            | 'TRIONL2U';
        }

        interface InteracPresent {
          /**
           * Card brand. Can be `interac`, `mastercard` or `visa`.
           */
          brand: string | null;

          /**
           * The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay.
           */
          cardholder_name: string | null;

          /**
           * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
           */
          country: string | null;

          /**
           * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
           */
          description?: string | null;

          /**
           * Authorization response cryptogram.
           */
          emv_auth_data: string | null;

          /**
           * Two-digit number representing the card's expiration month.
           */
          exp_month: number;

          /**
           * Four-digit number representing the card's expiration year.
           */
          exp_year: number;

          /**
           * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
           *
           * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
           */
          fingerprint: string | null;

          /**
           * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
           */
          funding: string | null;

          /**
           * ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
           */
          generated_card: string | null;

          /**
           * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
           */
          iin?: string | null;

          /**
           * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
           */
          issuer?: string | null;

          /**
           * The last four digits of the card.
           */
          last4: string | null;

          /**
           * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          network: string | null;

          /**
           * This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. This value will be present if it is returned by the financial network in the authorization response, and null otherwise.
           */
          network_transaction_id: string | null;

          /**
           * The languages that the issuing bank recommends using for localizing any customer-facing text, as read from the card. Referenced from EMV tag 5F2D, data encoded on the card's chip.
           */
          preferred_locales: Array<string> | null;

          /**
           * How card details were read in this transaction.
           */
          read_method: InteracPresent.ReadMethod | null;

          /**
           * A collection of fields required to be displayed on receipts. Only required for EMV transactions.
           */
          receipt: InteracPresent.Receipt | null;
        }

        namespace InteracPresent {
          type ReadMethod =
            | 'contact_emv'
            | 'contactless_emv'
            | 'contactless_magstripe_mode'
            | 'magnetic_stripe_fallback'
            | 'magnetic_stripe_track2';

          interface Receipt {
            /**
             * The type of account being debited or credited
             */
            account_type?: Receipt.AccountType;

            /**
             * The Application Cryptogram, a unique value generated by the card to authenticate the transaction with issuers.
             */
            application_cryptogram: string | null;

            /**
             * The Application Identifier (AID) on the card used to determine which networks are eligible to process the transaction. Referenced from EMV tag 9F12, data encoded on the card's chip.
             */
            application_preferred_name: string | null;

            /**
             * Identifier for this transaction.
             */
            authorization_code: string | null;

            /**
             * EMV tag 8A. A code returned by the card issuer.
             */
            authorization_response_code: string | null;

            /**
             * Describes the method used by the cardholder to verify ownership of the card. One of the following: `approval`, `failure`, `none`, `offline_pin`, `offline_pin_and_signature`, `online_pin`, or `signature`.
             */
            cardholder_verification_method: string | null;

            /**
             * Similar to the application_preferred_name, identifying the applications (AIDs) available on the card. Referenced from EMV tag 84.
             */
            dedicated_file_name: string | null;

            /**
             * A 5-byte string that records the checks and validations that occur between the card and the terminal. These checks determine how the terminal processes the transaction and what risk tolerance is acceptable. Referenced from EMV Tag 95.
             */
            terminal_verification_results: string | null;

            /**
             * An indication of which steps were completed during the card read process. Referenced from EMV Tag 9B.
             */
            transaction_status_information: string | null;
          }

          namespace Receipt {
            type AccountType = 'checking' | 'savings' | 'unknown';
          }
        }

        interface KakaoPay {
          /**
           * A unique identifier for the buyer as determined by the local payment processor.
           */
          buyer_id: string | null;

          /**
           * The Kakao Pay transaction ID associated with this payment.
           */
          transaction_id: string | null;
        }

        interface Klarna {
          /**
           * The payer details for this transaction.
           */
          payer_details: Klarna.PayerDetails | null;

          /**
           * The Klarna payment method used for this transaction.
           * Can be one of `pay_later`, `pay_now`, `pay_with_financing`, or `pay_in_installments`
           */
          payment_method_category: string | null;

          /**
           * Preferred language of the Klarna authorization page that the customer is redirected to.
           * Can be one of `de-AT`, `en-AT`, `nl-BE`, `fr-BE`, `en-BE`, `de-DE`, `en-DE`, `da-DK`, `en-DK`, `es-ES`, `en-ES`, `fi-FI`, `sv-FI`, `en-FI`, `en-GB`, `en-IE`, `it-IT`, `en-IT`, `nl-NL`, `en-NL`, `nb-NO`, `en-NO`, `sv-SE`, `en-SE`, `en-US`, `es-US`, `fr-FR`, `en-FR`, `cs-CZ`, `en-CZ`, `ro-RO`, `en-RO`, `el-GR`, `en-GR`, `en-AU`, `en-NZ`, `en-CA`, `fr-CA`, `pl-PL`, `en-PL`, `pt-PT`, `en-PT`, `de-CH`, `fr-CH`, `it-CH`, or `en-CH`
           */
          preferred_locale: string | null;
        }

        namespace Klarna {
          interface PayerDetails {
            /**
             * The payer's address
             */
            address: PayerDetails.Address | null;
          }

          namespace PayerDetails {
            interface Address {
              /**
               * The payer address country
               */
              country: string | null;
            }
          }
        }

        interface Konbini {
          /**
           * If the payment succeeded, this contains the details of the convenience store where the payment was completed.
           */
          store: Konbini.Store | null;
        }

        namespace Konbini {
          interface Store {
            /**
             * The name of the convenience store chain where the payment was completed.
             */
            chain: Store.Chain | null;
          }

          namespace Store {
            type Chain = 'familymart' | 'lawson' | 'ministop' | 'seicomart';
          }
        }

        interface KrCard {
          /**
           * The local credit or debit card brand.
           */
          brand: KrCard.Brand | null;

          /**
           * A unique identifier for the buyer as determined by the local payment processor.
           */
          buyer_id: string | null;

          /**
           * The last four digits of the card. This may not be present for American Express cards.
           */
          last4: string | null;

          /**
           * The Korean Card transaction ID associated with this payment.
           */
          transaction_id: string | null;
        }

        namespace KrCard {
          type Brand =
            | 'bc'
            | 'citi'
            | 'hana'
            | 'hyundai'
            | 'jeju'
            | 'jeonbuk'
            | 'kakaobank'
            | 'kbank'
            | 'kdbbank'
            | 'kookmin'
            | 'kwangju'
            | 'lotte'
            | 'mg'
            | 'nh'
            | 'post'
            | 'samsung'
            | 'savingsbank'
            | 'shinhan'
            | 'shinhyup'
            | 'suhyup'
            | 'tossbank'
            | 'woori';
        }

        interface Link {
          /**
           * Two-letter ISO code representing the funding source country beneath the Link payment.
           * You could use this attribute to get a sense of international fees.
           */
          country: string | null;
        }

        interface MbWay {}

        interface Mobilepay {
          /**
           * Internal card details
           */
          card: Mobilepay.Card | null;
        }

        namespace Mobilepay {
          interface Card {
            /**
             * Brand of the card used in the transaction
             */
            brand: string | null;

            /**
             * Two-letter ISO code representing the country of the card
             */
            country: string | null;

            /**
             * Two digit number representing the card's expiration month
             */
            exp_month: number | null;

            /**
             * Two digit number representing the card's expiration year
             */
            exp_year: number | null;

            /**
             * The last 4 digits of the card
             */
            last4: string | null;
          }
        }

        interface Multibanco {
          /**
           * Entity number associated with this Multibanco payment.
           */
          entity: string | null;

          /**
           * Reference number associated with this Multibanco payment.
           */
          reference: string | null;
        }

        interface NaverPay {
          /**
           * A unique identifier for the buyer as determined by the local payment processor.
           */
          buyer_id: string | null;

          /**
           * The Naver Pay transaction ID associated with this payment.
           */
          transaction_id: string | null;
        }

        interface NzBankAccount {
          /**
           * The name on the bank account. Only present if the account holder name is different from the name of the authorized signatory collected in the PaymentMethod's billing details.
           */
          account_holder_name: string | null;

          /**
           * The numeric code for the bank account's bank.
           */
          bank_code: string;

          /**
           * The name of the bank.
           */
          bank_name: string;

          /**
           * The numeric code for the bank account's bank branch.
           */
          branch_code: string;

          /**
           * Estimated date to debit the customer's bank account. A date string in YYYY-MM-DD format.
           */
          expected_debit_date?: string;

          /**
           * Last four digits of the bank account number.
           */
          last4: string;

          /**
           * The suffix of the bank account number.
           */
          suffix: string | null;
        }

        interface Oxxo {
          /**
           * OXXO reference number
           */
          number: string | null;
        }

        interface P24 {
          /**
           * The customer's bank. Can be one of `ing`, `citi_handlowy`, `tmobile_usbugi_bankowe`, `plus_bank`, `etransfer_pocztowy24`, `banki_spbdzielcze`, `bank_nowy_bfg_sa`, `getin_bank`, `velobank`, `blik`, `noble_pay`, `ideabank`, `envelobank`, `santander_przelew24`, `nest_przelew`, `mbank_mtransfer`, `inteligo`, `pbac_z_ipko`, `bnp_paribas`, `credit_agricole`, `toyota_bank`, `bank_pekao_sa`, `volkswagen_bank`, `bank_millennium`, `alior_bank`, or `boz`.
           */
          bank: P24.Bank | null;

          /**
           * Unique reference for this Przelewy24 payment.
           */
          reference: string | null;

          /**
           * Owner's verified full name. Values are verified or provided by Przelewy24 directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           * Przelewy24 rarely provides this information so the attribute is usually empty.
           */
          verified_name: string | null;
        }

        namespace P24 {
          type Bank =
            | 'alior_bank'
            | 'bank_millennium'
            | 'bank_nowy_bfg_sa'
            | 'bank_pekao_sa'
            | 'banki_spbdzielcze'
            | 'blik'
            | 'bnp_paribas'
            | 'boz'
            | 'citi_handlowy'
            | 'credit_agricole'
            | 'envelobank'
            | 'etransfer_pocztowy24'
            | 'getin_bank'
            | 'ideabank'
            | 'ing'
            | 'inteligo'
            | 'mbank_mtransfer'
            | 'nest_przelew'
            | 'noble_pay'
            | 'pbac_z_ipko'
            | 'plus_bank'
            | 'santander_przelew24'
            | 'tmobile_usbugi_bankowe'
            | 'toyota_bank'
            | 'velobank'
            | 'volkswagen_bank';
        }

        interface PayByBank {}

        interface Payco {
          /**
           * A unique identifier for the buyer as determined by the local payment processor.
           */
          buyer_id: string | null;

          /**
           * The Payco transaction ID associated with this payment.
           */
          transaction_id: string | null;
        }

        interface Paynow {
          /**
           * ID of the [location](https://docs.stripe.com/api/terminal/locations) that this transaction's reader is assigned to.
           */
          location?: string;

          /**
           * ID of the [reader](https://docs.stripe.com/api/terminal/readers) this transaction was made on.
           */
          reader?: string;

          /**
           * Reference number associated with this PayNow payment
           */
          reference: string | null;
        }

        interface Paypal {
          /**
           * Two-letter ISO code representing the buyer's country. Values are provided by PayPal directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          country: string | null;

          /**
           * Owner's email. Values are provided by PayPal directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          payer_email: string | null;

          /**
           * PayPal account PayerID. This identifier uniquely identifies the PayPal customer.
           */
          payer_id: string | null;

          /**
           * Owner's full name. Values provided by PayPal directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          payer_name: string | null;

          /**
           * The level of protection offered as defined by PayPal Seller Protection for Merchants, for this transaction.
           */
          seller_protection: Paypal.SellerProtection | null;

          /**
           * A unique ID generated by PayPal for this transaction.
           */
          transaction_id: string | null;
        }

        namespace Paypal {
          interface SellerProtection {
            /**
             * An array of conditions that are covered for the transaction, if applicable.
             */
            dispute_categories: Array<SellerProtection.DisputeCategory> | null;

            /**
             * Indicates whether the transaction is eligible for PayPal's seller protection.
             */
            status: SellerProtection.Status;
          }

          namespace SellerProtection {
            type DisputeCategory = 'fraudulent' | 'product_not_received';

            type Status = 'eligible' | 'not_eligible' | 'partially_eligible';
          }
        }

        interface Payto {
          /**
           * Bank-State-Branch number of the bank account.
           */
          bsb_number: string | null;

          /**
           * Last four digits of the bank account number.
           */
          last4: string | null;

          /**
           * ID of the mandate used to make this payment.
           */
          mandate?: string;

          /**
           * The PayID alias for the bank account.
           */
          pay_id: string | null;
        }

        interface Pix {
          /**
           * Unique transaction id generated by BCB
           */
          bank_transaction_id?: string | null;
        }

        interface Promptpay {
          /**
           * Bill reference generated by PromptPay
           */
          reference: string | null;
        }

        interface RevolutPay {
          funding?: RevolutPay.Funding;

          /**
           * The Revolut Pay transaction ID associated with this payment.
           */
          transaction_id: string | null;
        }

        namespace RevolutPay {
          interface Funding {
            card?: Funding.Card;

            /**
             * funding type of the underlying payment method.
             */
            type: 'card' | null;
          }

          namespace Funding {
            interface Card {
              /**
               * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
               */
              brand: string | null;

              /**
               * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
               */
              country: string | null;

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
              funding: string | null;

              /**
               * The last four digits of the card.
               */
              last4: string | null;
            }
          }
        }

        interface SamsungPay {
          /**
           * A unique identifier for the buyer as determined by the local payment processor.
           */
          buyer_id: string | null;

          /**
           * The Samsung Pay transaction ID associated with this payment.
           */
          transaction_id: string | null;
        }

        interface Satispay {
          /**
           * The Satispay transaction ID associated with this payment.
           */
          transaction_id: string | null;
        }

        interface SepaCreditTransfer {
          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Bank Identifier Code of the bank associated with the bank account.
           */
          bic: string | null;

          /**
           * IBAN of the bank account to transfer funds to.
           */
          iban: string | null;
        }

        interface SepaDebit {
          /**
           * Bank code of bank associated with the bank account.
           */
          bank_code: string | null;

          /**
           * Branch code of bank associated with the bank account.
           */
          branch_code: string | null;

          /**
           * Two-letter ISO code representing the country the bank account is located in.
           */
          country: string | null;

          /**
           * Estimated date to debit the customer's bank account. A date string in YYYY-MM-DD format.
           */
          expected_debit_date?: string;

          /**
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Last four characters of the IBAN.
           */
          last4: string | null;

          /**
           * Find the ID of the mandate used for this payment under the [payment_method_details.sepa_debit.mandate](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-sepa_debit-mandate) property on the Charge. Use this mandate ID to [retrieve the Mandate](https://docs.stripe.com/api/mandates/retrieve).
           */
          mandate: string | null;
        }

        interface Sofort {
          /**
           * Bank code of bank associated with the bank account.
           */
          bank_code: string | null;

          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Bank Identifier Code of the bank associated with the bank account.
           */
          bic: string | null;

          /**
           * Two-letter ISO code representing the country the bank account is located in.
           */
          country: string | null;

          /**
           * The ID of the SEPA Direct Debit PaymentMethod which was generated by this Charge.
           */
          generated_sepa_debit: string | Stripe.PaymentMethod | null;

          /**
           * The mandate for the SEPA Direct Debit PaymentMethod which was generated by this Charge.
           */
          generated_sepa_debit_mandate: string | Stripe.Mandate | null;

          /**
           * Last four characters of the IBAN.
           */
          iban_last4: string | null;

          /**
           * Preferred language of the SOFORT authorization page that the customer is redirected to.
           * Can be one of `de`, `en`, `es`, `fr`, `it`, `nl`, or `pl`
           */
          preferred_language: Sofort.PreferredLanguage | null;

          /**
           * Owner's verified full name. Values are verified or provided by SOFORT directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_name: string | null;
        }

        namespace Sofort {
          type PreferredLanguage =
            | 'de'
            | 'en'
            | 'es'
            | 'fr'
            | 'it'
            | 'nl'
            | 'pl';
        }

        interface StripeAccount {}

        interface Swish {
          /**
           * Uniquely identifies the payer's Swish account. You can use this attribute to check whether two Swish transactions were paid for by the same payer
           */
          fingerprint: string | null;

          /**
           * Payer bank reference number for the payment
           */
          payment_reference: string | null;

          /**
           * The last four digits of the Swish account phone number
           */
          verified_phone_last4: string | null;
        }

        interface Twint {}

        interface UsBankAccount {
          /**
           * The type of entity that holds the account. This can be either 'individual' or 'company'.
           */
          account_holder_type: UsBankAccount.AccountHolderType | null;

          /**
           * The type of the bank account. This can be either 'checking' or 'savings'.
           */
          account_type: UsBankAccount.AccountType | null;

          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Estimated date to debit the customer's bank account. A date string in YYYY-MM-DD format.
           */
          expected_debit_date?: string | null;

          /**
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Last four digits of the bank account number.
           */
          last4: string | null;

          /**
           * ID of the mandate used to make this payment.
           */
          mandate?: string | Stripe.Mandate;

          /**
           * The ACH payment reference for this transaction.
           */
          payment_reference: string | null;

          /**
           * The routing number for the bank account.
           */
          routing_number: string | null;
        }

        namespace UsBankAccount {
          type AccountHolderType = 'company' | 'individual';

          type AccountType = 'checking' | 'savings';
        }

        interface Wechat {}

        interface WechatPay {
          /**
           * Uniquely identifies this particular WeChat Pay account. You can use this attribute to check whether two WeChat accounts are the same.
           */
          fingerprint: string | null;

          /**
           * ID of the [location](https://docs.stripe.com/api/terminal/locations) that this transaction's reader is assigned to.
           */
          location?: string;

          /**
           * ID of the [reader](https://docs.stripe.com/api/terminal/readers) this transaction was made on.
           */
          reader?: string;

          /**
           * Transaction ID of this particular WeChat Pay transaction.
           */
          transaction_id: string | null;
        }

        interface Zip {}
      }

      interface ProcessorDetails {
        /**
         * Custom processors represent payment processors not modeled directly in
         * the Stripe API. This resource consists of details about the custom processor
         * used for this payment attempt.
         */
        custom?: ProcessorDetails.Custom;

        /**
         * The processor used for this payment attempt.
         */
        type: 'custom';
      }

      namespace ProcessorDetails {
        interface Custom {
          /**
           * An opaque string for manual reconciliation of this payment, for example a check number or a payment processor ID.
           */
          payment_reference: string | null;
        }
      }

      type ReportedBy = 'self' | 'stripe';

      interface ShippingDetails {
        /**
         * A representation of a physical address.
         */
        address: Stripe.Address;

        /**
         * The shipping recipient's name.
         */
        name: string | null;

        /**
         * The shipping recipient's phone number.
         */
        phone: string | null;
      }
    }
  }
}
