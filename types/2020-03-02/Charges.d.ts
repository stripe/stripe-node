declare module 'stripe' {
  namespace Stripe {
    /**
     * The Charge object.
     */
    interface Charge {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'charge';

      alternate_statement_descriptors?: Charge.AlternateStatementDescriptors;

      /**
       * Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
       */
      amount: number;

      /**
       * Amount in %s refunded (can be less than the amount attribute on the charge if a partial refund was issued).
       */
      amount_refunded: number;

      /**
       * ID of the Connect application that created the charge.
       */
      application: string | Stripe.Application | null;

      /**
       * The application fee (if any) for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees) for details.
       */
      application_fee: string | Stripe.ApplicationFee | null;

      /**
       * The amount of the application fee (if any) for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees) for details.
       */
      application_fee_amount: number | null;

      /**
       * Authorization code on the charge.
       */
      authorization_code?: string;

      /**
       * ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes).
       */
      balance_transaction: string | Stripe.BalanceTransaction | null;

      billing_details: Charge.BillingDetails;

      /**
       * The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. Allows you to see what the statement descriptor looks like after the static and dynamic portions are combined.
       */
      calculated_statement_descriptor: string | null;

      /**
       * If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured.
       */
      captured: boolean;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * ID of the customer this charge is for if one exists.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description: string | null;

      /**
       * ID of an existing, connected Stripe account to transfer funds to if `transfer_data` was specified in the charge request.
       */
      destination: string | Stripe.Account | null;

      /**
       * Details about the dispute if the charge has been disputed.
       */
      dispute: string | Stripe.Dispute | null;

      /**
       * Whether the charge has been disputed.
       */
      disputed: boolean;

      /**
       * Error code explaining reason for charge failure if available (see [the errors section](https://stripe.com/docs/api#errors) for a list of codes).
       */
      failure_code: string | null;

      /**
       * Message to user further explaining reason for charge failure if available.
       */
      failure_message: string | null;

      /**
       * Information on fraud assessments for the charge.
       */
      fraud_details: Charge.FraudDetails | null;

      /**
       * ID of the invoice this charge is for if one exists.
       */
      invoice: string | Stripe.Invoice | null;

      level3?: Charge.Level3;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Metadata;

      /**
       * The account (if any) the charge was made on behalf of without triggering an automatic transfer. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers) for details.
       */
      on_behalf_of: string | Stripe.Account | null;

      /**
       * ID of the order this charge is for if one exists.
       */
      order: string | Stripe.Order | null;

      /**
       * Details about whether the payment was accepted, and why. See [understanding declines](https://stripe.com/docs/declines) for details.
       */
      outcome: Charge.Outcome | null;

      /**
       * `true` if the charge succeeded, or was successfully authorized for later capture.
       */
      paid: boolean;

      /**
       * ID of the PaymentIntent associated with this charge, if one exists.
       */
      payment_intent: string | Stripe.PaymentIntent | null;

      /**
       * ID of the payment method used in this charge.
       */
      payment_method: string | null;

      /**
       * Details about the payment method at the time of the transaction.
       */
      payment_method_details: Charge.PaymentMethodDetails | null;

      /**
       * This is the email address that the receipt for this charge was sent to.
       */
      receipt_email: string | null;

      /**
       * This is the transaction number that appears on email receipts sent for this charge. This attribute will be `null` until a receipt has been sent.
       */
      receipt_number: string | null;

      /**
       * This is the URL to view the receipt for this charge. The receipt is kept up-to-date to the latest state of the charge, including any refunds. If the charge is for an Invoice, the receipt will be stylized as an Invoice receipt.
       */
      receipt_url: string | null;

      /**
       * Whether the charge has been fully refunded. If the charge is only partially refunded, this attribute will still be false.
       */
      refunded: boolean;

      /**
       * A list of refunds that have been applied to the charge.
       */
      refunds: ApiList<Stripe.Refund>;

      /**
       * ID of the review associated with this charge if one exists.
       */
      review: string | Stripe.Review | null;

      /**
       * Shipping information for the charge.
       */
      shipping: Charge.Shipping | null;

      /**
       * This is a legacy field that will be removed in the future. It contains the Source, Card, or BankAccount object used for the charge. For details about the payment method used for this charge, refer to `payment_method` or `payment_method_details` instead.
       */
      source: CustomerSource | null;

      /**
       * The transfer ID which created this charge. Only present if the charge came from another Stripe account. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
       */
      source_transfer: string | Stripe.Transfer | null;

      /**
       * For card charges, use `statement_descriptor_suffix` instead. Otherwise, you can use this value as the complete description of a charge on your customers' statements. Must contain at least one letter, maximum 22 characters.
       */
      statement_descriptor: string | null;

      /**
       * Provides information about the charge that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
       */
      statement_descriptor_suffix: string | null;

      /**
       * The status of the payment is either `succeeded`, `pending`, or `failed`.
       */
      status: string;

      /**
       * ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter).
       */
      transfer?: string | Stripe.Transfer;

      /**
       * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
       */
      transfer_data: Charge.TransferData | null;

      /**
       * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-options) for details.
       */
      transfer_group: string | null;
    }

    namespace Charge {
      interface AlternateStatementDescriptors {
        /**
         * The Kana variation of the descriptor.
         */
        kana?: string;

        /**
         * The Kanji variation of the descriptor.
         */
        kanji?: string;
      }

      interface BillingDetails {
        /**
         * Billing address.
         */
        address: Address | null;

        /**
         * Email address.
         */
        email: string | null;

        /**
         * Full name.
         */
        name: string | null;

        /**
         * Billing phone number (including extension).
         */
        phone: string | null;
      }

      interface FraudDetails {
        /**
         * Assessments from Stripe. If set, the value is `fraudulent`.
         */
        stripe_report?: string;

        /**
         * Assessments reported by you. If set, possible values of are `safe` and `fraudulent`.
         */
        user_report?: string;
      }

      interface Level3 {
        customer_reference?: string;

        line_items: Array<Level3.LineItem>;

        merchant_reference: string;

        shipping_address_zip?: string;

        shipping_amount?: number;

        shipping_from_zip?: string;
      }

      namespace Level3 {
        interface LineItem {
          discount_amount: number | null;

          product_code: string;

          product_description: string;

          quantity: number | null;

          tax_amount: number | null;

          unit_cost: number | null;
        }
      }

      interface Outcome {
        /**
         * Possible values are `approved_by_network`, `declined_by_network`, `not_sent_to_network`, and `reversed_after_approval`. The value `reversed_after_approval` indicates the payment was [blocked by Stripe](https://stripe.com/docs/declines#blocked-payments) after bank authorization, and may temporarily appear as "pending" on a cardholder's statement.
         */
        network_status: string | null;

        /**
         * An enumerated value providing a more detailed explanation of the outcome's `type`. Charges blocked by Radar's default block rule have the value `highest_risk_level`. Charges placed in review by Radar's default review rule have the value `elevated_risk_level`. Charges authorized, blocked, or placed in review by custom rules have the value `rule`. See [understanding declines](https://stripe.com/docs/declines) for more details.
         */
        reason: string | null;

        /**
         * Stripe's evaluation of the riskiness of the payment. Possible values for evaluated payments are `normal`, `elevated`, `highest`. For non-card payments, and card-based payments predating the public assignment of risk levels, this field will have the value `not_assessed`. In the event of an error in the evaluation, this field will have the value `unknown`.
         */
        risk_level?: string;

        /**
         * Stripe's evaluation of the riskiness of the payment. Possible values for evaluated payments are between 0 and 100. For non-card payments, card-based payments predating the public assignment of risk scores, or in the event of an error during evaluation, this field will not be present. This field is only available with Radar for Fraud Teams.
         */
        risk_score?: number;

        /**
         * The ID of the Radar rule that matched the payment, if applicable.
         */
        rule?: string | Outcome.Rule;

        /**
         * A human-readable description of the outcome type and reason, designed for you (the recipient of the payment), not your customer.
         */
        seller_message: string | null;

        /**
         * Possible values are `authorized`, `manual_review`, `issuer_declined`, `blocked`, and `invalid`. See [understanding declines](https://stripe.com/docs/declines) and [Radar reviews](https://stripe.com/docs/radar/reviews) for details.
         */
        type: string;
      }

      namespace Outcome {
        interface Rule {
          /**
           * The action taken on the payment.
           */
          action: string;

          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * The predicate to evaluate the payment against.
           */
          predicate: string;
        }
      }

      interface PaymentMethodDetails {
        ach_credit_transfer?: PaymentMethodDetails.AchCreditTransfer;

        ach_debit?: PaymentMethodDetails.AchDebit;

        acss_debit?: PaymentMethodDetails.AcssDebit;

        alipay?: PaymentMethodDetails.Alipay;

        au_becs_debit?: PaymentMethodDetails.AuBecsDebit;

        bancontact?: PaymentMethodDetails.Bancontact;

        bitcoin?: PaymentMethodDetails.Bitcoin;

        card?: PaymentMethodDetails.Card;

        card_present?: PaymentMethodDetails.CardPresent;

        eps?: PaymentMethodDetails.Eps;

        fpx?: PaymentMethodDetails.Fpx;

        giropay?: PaymentMethodDetails.Giropay;

        ideal?: PaymentMethodDetails.Ideal;

        klarna?: PaymentMethodDetails.Klarna;

        multibanco?: PaymentMethodDetails.Multibanco;

        p24?: PaymentMethodDetails.P24;

        sepa_credit_transfer?: PaymentMethodDetails.SepaCreditTransfer;

        sepa_debit?: PaymentMethodDetails.SepaDebit;

        sofort?: PaymentMethodDetails.Sofort;

        stripe_account?: PaymentMethodDetails.StripeAccount;

        /**
         * The type of transaction-specific details of the payment method used in the payment, one of `ach_credit_transfer`, `ach_debit`, `alipay`, `au_becs_debit`, `bancontact`, `card`, `card_present`, `eps`, `giropay`, `ideal`, `klarna`, `multibanco`, `p24`, `sepa_debit`, `sofort`, `stripe_account`, or `wechat`.
         * An additional hash is included on `payment_method_details` with a name matching this value.
         * It contains information specific to the payment method.
         */
        type: string;

        wechat?: PaymentMethodDetails.Wechat;
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
           * Transit number of the bank account.
           */
          transit_number: string | null;
        }

        interface Alipay {
          /**
           * Uniquely identifies this particular Alipay account. You can use this attribute to check whether two Alipay accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Transaction ID of this particular Alipay transaction.
           */
          transaction_id: string | null;
        }

        interface AuBecsDebit {
          /**
           * Bank-State-Branch number of the bank account.
           */
          bsb_number: string | null;

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

        interface Bitcoin {
          address: string | null;

          amount: number | null;

          amount_charged: number | null;

          amount_received: number | null;

          amount_returned: number | null;

          refund_address: string | null;
        }

        interface Card {
          /**
           * Card brand. Can be `amex`, `diners`, `discover`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          brand: string | null;

          /**
           * Check results by Card networks on Card address and CVC at time of payment.
           */
          checks: Card.Checks | null;

          /**
           * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
           */
          country: string | null;

          /**
           * Card description. (Only for internal use only and not typically available in standard API requests.)
           */
          description?: string | null;

          /**
           * Two-digit number representing the card's expiration month.
           */
          exp_month: number | null;

          /**
           * Four-digit number representing the card's expiration year.
           */
          exp_year: number | null;

          /**
           * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number,for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
           */
          fingerprint?: string | null;

          /**
           * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
           */
          funding: string | null;

          /**
           * Issuer identification number of the card. (Only for internal use only and not typically available in standard API requests.)
           */
          iin?: string | null;

          /**
           * Installment details for this payment (Mexico only).
           *
           * For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
           */
          installments: Card.Installments | null;

          /**
           * Issuer bank name of the card. (Only for internal use only and not typically available in standard API requests.)
           */
          issuer?: string | null;

          /**
           * The last four digits of the card.
           */
          last4: string | null;

          /**
           * True if this payment was marked as MOTO and out of scope for SCA.
           */
          moto?: boolean | null;

          /**
           * Identifies which network this charge was processed on. Can be `amex`, `diners`, `discover`, `interac`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          network: string | null;

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
          interface Checks {
            /**
             * If a address line1 was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
             */
            address_line1_check: string | null;

            /**
             * If a address postal code was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
             */
            address_postal_code_check: string | null;

            /**
             * If a CVC was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
             */
            cvc_check: string | null;
          }

          interface Installments {
            /**
             * Installment plan selected for the payment.
             */
            plan: Installments.Plan | null;
          }

          namespace Installments {
            interface Plan {
              /**
               * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
               */
              count: number | null;

              /**
               * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
               * One of `month`.
               */
              interval: 'month' | null;

              /**
               * Type of installment plan, one of `fixed_count`.
               */
              type: 'fixed_count';
            }
          }

          interface ThreeDSecure {
            /**
             * Whether or not authentication was performed. 3D Secure will succeed without authentication when the card is not enrolled.
             */
            authenticated?: boolean;

            /**
             * Whether or not 3D Secure succeeded.
             */
            succeeded?: boolean;

            /**
             * The version of 3D Secure that was used for this payment.
             */
            version: ThreeDSecure.Version;
          }

          namespace ThreeDSecure {
            type Version = '1.0.2' | '2.1.0' | '2.2.0';
          }

          interface Wallet {
            amex_express_checkout?: Wallet.AmexExpressCheckout;

            apple_pay?: Wallet.ApplePay;

            /**
             * (For tokenized numbers only.) The last four digits of the device account number.
             */
            dynamic_last4: string | null;

            google_pay?: Wallet.GooglePay;

            masterpass?: Wallet.Masterpass;

            samsung_pay?: Wallet.SamsungPay;

            /**
             * The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, or `visa_checkout`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
             */
            type: Wallet.Type;

            visa_checkout?: Wallet.VisaCheckout;
          }

          namespace Wallet {
            interface AmexExpressCheckout {}

            interface ApplePay {}

            interface GooglePay {}

            interface Masterpass {
              /**
               * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              billing_address: Address | null;

              /**
               * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              email: string | null;

              /**
               * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              name: string | null;

              /**
               * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              shipping_address: Address | null;
            }

            interface SamsungPay {}

            type Type =
              | 'amex_express_checkout'
              | 'apple_pay'
              | 'google_pay'
              | 'masterpass'
              | 'samsung_pay'
              | 'visa_checkout';

            interface VisaCheckout {
              /**
               * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              billing_address: Address | null;

              /**
               * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              email: string | null;

              /**
               * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              name: string | null;

              /**
               * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
               */
              shipping_address: Address | null;
            }
          }
        }

        interface CardPresent {
          /**
           * Card brand. Can be `amex`, `diners`, `discover`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          brand: string | null;

          /**
           * The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`).
           */
          cardholder_name: string | null;

          /**
           * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
           */
          country: string | null;

          /**
           * Authorization response cryptogram.
           */
          emv_auth_data: string | null;

          /**
           * Two-digit number representing the card's expiration month.
           */
          exp_month: number | null;

          /**
           * Four-digit number representing the card's expiration year.
           */
          exp_year: number | null;

          /**
           * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number,for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
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
           * The last four digits of the card.
           */
          last4: string | null;

          /**
           * Identifies which network this charge was processed on. Can be `amex`, `diners`, `discover`, `interac`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          network: string | null;

          /**
           * How were card details read in this transaction. Can be contact_emv, contactless_emv, magnetic_stripe_fallback, magnetic_stripe_track2, or contactless_magstripe_mode
           */
          read_method: string | null;

          /**
           * A collection of fields required to be displayed on receipts. Only required for EMV transactions.
           */
          receipt: CardPresent.Receipt | null;
        }

        namespace CardPresent {
          interface Receipt {
            /**
             * EMV tag 9F26, cryptogram generated by the integrated circuit chip.
             */
            application_cryptogram: string | null;

            /**
             * Mnenomic of the Application Identifier.
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
             * How the cardholder verified ownership of the card.
             */
            cardholder_verification_method: string | null;

            /**
             * EMV tag 84. Similar to the application identifier stored on the integrated circuit chip.
             */
            dedicated_file_name: string | null;

            /**
             * The outcome of a series of EMV functions performed by the card reader.
             */
            terminal_verification_results: string | null;

            /**
             * An indication of various EMV functions performed during the transaction.
             */
            transaction_status_information: string | null;
          }
        }

        interface Eps {
          /**
           * Owner's verified full name. Values are verified or provided by EPS directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_name: string | null;
        }

        interface Fpx {
          /**
           * Account holder type, if provided. Can be one of `individual` or `company`.
           */
          account_holder_type: Fpx.AccountHolderType | null;

          /**
           * The customer's bank. Can be one of `affin_bank`, `alliance_bank`, `ambank`, `bank_islam`, `bank_muamalat`, `bank_rakyat`, `bsn`, `cimb`, `hong_leong_bank`, `hsbc`, `kfh`, `maybank2u`, `ocbc`, `public_bank`, `rhb`, `standard_chartered`, `uob`, `deutsche_bank`, `maybank2e`, or `pb_enterprise`.
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
            | 'alliance_bank'
            | 'ambank'
            | 'bank_islam'
            | 'bank_muamalat'
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
           */
          verified_name: string | null;
        }

        interface Ideal {
          /**
           * The customer's bank. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `rabobank`, `regiobank`, `sns_bank`, `triodos_bank`, or `van_lanschot`.
           */
          bank: Ideal.Bank | null;

          /**
           * The Bank Identifier Code of the customer's bank.
           */
          bic: Ideal.Bic | null;

          /**
           * Last four characters of the IBAN.
           */
          iban_last4: string | null;

          /**
           * Owner's verified full name. Values are verified or provided by iDEAL directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_name: string | null;
        }

        namespace Ideal {
          type Bank =
            | 'abn_amro'
            | 'asn_bank'
            | 'bunq'
            | 'handelsbanken'
            | 'ing'
            | 'knab'
            | 'moneyou'
            | 'rabobank'
            | 'regiobank'
            | 'sns_bank'
            | 'triodos_bank'
            | 'van_lanschot';

          type Bic =
            | 'ABNANL2A'
            | 'ASNBNL21'
            | 'BUNQNL2A'
            | 'FVLBNL22'
            | 'HANDNL2A'
            | 'INGBNL2A'
            | 'KNABNL2H'
            | 'MOYONL21'
            | 'RABONL2U'
            | 'RBRBNL21'
            | 'SNSBNL2A'
            | 'TRIONL2U';
        }

        interface Klarna {}

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

        interface P24 {
          /**
           * Unique reference for this Przelewy24 payment.
           */
          reference: string | null;

          /**
           * Owner's verified full name. Values are verified or provided by Przelewy24 directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_name: string | null;
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
           * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
           */
          fingerprint: string | null;

          /**
           * Last four characters of the IBAN.
           */
          last4: string | null;

          /**
           * ID of the mandate used to make this payment.
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
           * Last four characters of the IBAN.
           */
          iban_last4: string | null;

          /**
           * Owner's verified full name. Values are verified or provided by SOFORT directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_name: string | null;
        }

        interface StripeAccount {}

        interface Wechat {}
      }

      interface Shipping {
        address?: Address;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string | null;

        /**
         * Recipient name.
         */
        name?: string | null;

        /**
         * Recipient phone (including extension).
         */
        phone?: string | null;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string | null;
      }

      interface TransferData {
        /**
         * The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account.
         */
        amount: number | null;

        /**
         * ID of an existing, connected Stripe account to transfer funds to if `transfer_data` was specified in the charge request.
         */
        destination: string | Stripe.Account;
      }
    }

    interface ChargeCreateParams {
      /**
       * Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
       */
      amount?: number;

      application_fee?: number;

      /**
       * A fee in %s that will be applied to the charge and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the `Stripe-Account` header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees).
       */
      application_fee_amount?: number;

      /**
       * Whether to immediately capture the charge. Defaults to `true`. When `false`, the charge issues an authorization (or pre-authorization), and will need to be [captured](https://stripe.com/docs/api#capture_charge) later. Uncaptured charges expire in _seven days_. For more information, see the [authorizing charges and settling later](https://stripe.com/docs/charges/placing-a-hold) documentation.
       */
      capture?: boolean;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: string;

      /**
       * The ID of an existing customer that will be charged in this request.
       */
      customer?: string;

      /**
       * An arbitrary string which you can attach to a `Charge` object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
       */
      description?: string;

      destination?: ChargeCreateParams.Destination;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam | null;

      /**
       * The Stripe account ID for which these funds are intended. Automatically set if you use the `destination` parameter. For details, see [Creating Separate Charges and Transfers](https://stripe.com/docs/connect/charges-transfers#on-behalf-of).
       */
      on_behalf_of?: string;

      /**
       * The email address to which this charge's [receipt](https://stripe.com/docs/dashboard/receipts) will be sent. The receipt will not be sent until the charge is paid, and no receipts will be sent for test mode charges. If this charge is for a [Customer](https://stripe.com/docs/api/customers/object), the email address specified here will override the customer's email address. If `receipt_email` is specified for a charge in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
       */
      receipt_email?: string;

      /**
       * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
       */
      shipping?: ChargeCreateParams.Shipping;

      /**
       * A payment source to be charged. This can be the ID of a [card](https://stripe.com/docs/api#cards) (i.e., credit or debit card), a [bank account](https://stripe.com/docs/api#bank_accounts), a [source](https://stripe.com/docs/api#sources), a [token](https://stripe.com/docs/api#tokens), or a [connected account](https://stripe.com/docs/connect/account-debits#charging-a-connected-account). For certain sources---namely, [cards](https://stripe.com/docs/api#cards), [bank accounts](https://stripe.com/docs/api#bank_accounts), and attached [sources](https://stripe.com/docs/api#sources)---you must also pass the ID of the associated customer.
       */
      source?: string;

      /**
       * For card charges, use `statement_descriptor_suffix` instead. Otherwise, you can use this value as the complete description of a charge on your customers' statements. Must contain at least one letter, maximum 22 characters.
       */
      statement_descriptor?: string;

      /**
       * Provides information about the charge that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
       */
      statement_descriptor_suffix?: string;

      /**
       * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
       */
      transfer_data?: ChargeCreateParams.TransferData;

      /**
       * A string that identifies this transaction as part of a group. For details, see [Grouping transactions](https://stripe.com/docs/connect/charges-transfers#transfer-options).
       */
      transfer_group?: string;
    }

    namespace ChargeCreateParams {
      interface Destination {
        /**
         * ID of an existing, connected Stripe account.
         */
        account: string;

        /**
         * The amount to transfer to the destination account without creating an `Application Fee` object. Cannot be combined with the `application_fee` parameter. Must be less than or equal to the charge amount.
         */
        amount?: number;
      }

      interface Shipping {
        /**
         * Shipping address.
         */
        address: AddressParam;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string;

        /**
         * Recipient name.
         */
        name: string;

        /**
         * Recipient phone (including extension).
         */
        phone?: string;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string;
      }

      interface TransferData {
        /**
         * The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account.
         */
        amount?: number;

        /**
         * ID of an existing, connected Stripe account.
         */
        destination: string;
      }
    }

    interface ChargeRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ChargeUpdateParams {
      /**
       * The ID of an existing customer that will be associated with this request. This field may only be updated if there is no existing associated customer with this charge.
       */
      customer?: string;

      /**
       * An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A set of key-value pairs you can attach to a charge giving information about its riskiness. If you believe a charge is fraudulent, include a `user_report` key with a value of `fraudulent`. If you believe a charge is safe, include a `user_report` key with a value of `safe`. Stripe will use the information you send to improve our fraud detection algorithms.
       */
      fraud_details?: ChargeUpdateParams.FraudDetails;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam | null;

      /**
       * This is the email address that the receipt for this charge will be sent to. If this field is updated, then a new email receipt will be sent to the updated address.
       */
      receipt_email?: string;

      /**
       * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
       */
      shipping?: ChargeUpdateParams.Shipping;

      /**
       * A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-options) for details.
       */
      transfer_group?: string;
    }

    namespace ChargeUpdateParams {
      interface FraudDetails {
        /**
         * Either `safe` or `fraudulent`.
         */
        user_report: FraudDetails.UserReport | null;
      }

      namespace FraudDetails {
        type UserReport = 'fraudulent' | 'safe';
      }

      interface Shipping {
        /**
         * Shipping address.
         */
        address: AddressParam;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string;

        /**
         * Recipient name.
         */
        name: string;

        /**
         * Recipient phone (including extension).
         */
        phone?: string;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string;
      }
    }

    interface ChargeListParams extends PaginationParams {
      created?: RangeQueryParam | number;

      /**
       * Only return charges for the customer specified by this customer ID.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return charges that were created by the PaymentIntent specified by this PaymentIntent ID.
       */
      payment_intent?: string;

      /**
       * Only return charges for this transfer group.
       */
      transfer_group?: string;
    }

    interface ChargeCaptureParams {
      /**
       * The amount to capture, which must be less than or equal to the original amount. Any additional amount will be automatically refunded.
       */
      amount?: number;

      /**
       * An application fee to add on to this charge.
       */
      application_fee?: number;

      /**
       * An application fee amount to add on to this charge, which must be less than or equal to the original amount.
       */
      application_fee_amount?: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The email address to send this charge's receipt to. This will override the previously-specified email address for this charge, if one was set. Receipts will not be sent in test mode.
       */
      receipt_email?: string;

      /**
       * For card charges, use `statement_descriptor_suffix` instead. Otherwise, you can use this value as the complete description of a charge on your customers' statements. Must contain at least one letter, maximum 22 characters.
       */
      statement_descriptor?: string;

      /**
       * Provides information about the charge that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
       */
      statement_descriptor_suffix?: string;

      /**
       * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
       */
      transfer_data?: ChargeCaptureParams.TransferData;

      /**
       * A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-options) for details.
       */
      transfer_group?: string;
    }

    namespace ChargeCaptureParams {
      interface TransferData {
        /**
         * The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account.
         */
        amount?: number;
      }
    }

    class ChargesResource {
      /**
       * To charge a credit card or other payment source, you create a Charge object. If your API key is in test mode, the supplied payment source (e.g., card) won't actually be charged, although everything else will occur as if in live mode. (Stripe assumes that the charge would have completed successfully).
       */
      create(
        params?: ChargeCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Charge>;
      create(options?: RequestOptions): Promise<Stripe.Charge>;

      /**
       * Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.
       */
      retrieve(
        id: string,
        params?: ChargeRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Charge>;
      retrieve(id: string, options?: RequestOptions): Promise<Stripe.Charge>;

      /**
       * Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: ChargeUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Charge>;

      /**
       * Returns a list of charges you've previously created. The charges are returned in sorted order, with the most recent charges appearing first.
       */
      list(
        params?: ChargeListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Charge>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Charge>;

      /**
       * Capture the payment of an existing, uncaptured, charge. This is the second half of the two-step payment flow, where first you [created a charge](https://stripe.com/docs/api#create_charge) with the capture option set to false.
       *
       * Uncaptured payments expire exactly seven days after they are created. If they are not captured by that point in time, they will be marked as refunded and will no longer be capturable.
       */
      capture(
        id: string,
        params?: ChargeCaptureParams,
        options?: RequestOptions
      ): Promise<Stripe.Charge>;
      capture(id: string, options?: RequestOptions): Promise<Stripe.Charge>;
    }
  }
}
