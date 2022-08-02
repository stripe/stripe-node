// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The FundingInstructions object.
     */
    interface FundingInstructions {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'funding_instructions';

      bank_transfer: FundingInstructions.BankTransfer;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * The `funding_type` of the returned instructions
       */
      funding_type: 'bank_transfer';

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;
    }

    namespace FundingInstructions {
      interface BankTransfer {
        /**
         * The country of the bank account to fund
         */
        country: string;

        /**
         * A list of financial addresses that can be used to fund a particular balance
         */
        financial_addresses: Array<BankTransfer.FinancialAddress>;

        /**
         * The bank_transfer type
         */
        type: BankTransfer.Type;
      }

      namespace BankTransfer {
        interface FinancialAddress {
          /**
           * Iban Records contain E.U. bank account details per the SEPA format.
           */
          iban?: FinancialAddress.Iban;

          /**
           * Sort Code Records contain U.K. bank account details per the sort code format.
           */
          sort_code?: FinancialAddress.SortCode;

          /**
           * SPEI Records contain Mexico bank account details per the SPEI format.
           */
          spei?: FinancialAddress.Spei;

          /**
           * The payment networks supported by this FinancialAddress
           */
          supported_networks?: Array<FinancialAddress.SupportedNetwork>;

          /**
           * The type of financial address
           */
          type: FinancialAddress.Type;

          /**
           * Zengin Records contain Japan bank account details per the Zengin format.
           */
          zengin?: FinancialAddress.Zengin;
        }

        namespace FinancialAddress {
          interface Iban {
            /**
             * The name of the person or business that owns the bank account
             */
            account_holder_name: string;

            /**
             * The BIC/SWIFT code of the account.
             */
            bic: string;

            /**
             * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
             */
            country: string;

            /**
             * The IBAN of the account.
             */
            iban: string;
          }

          interface SortCode {
            /**
             * The name of the person or business that owns the bank account
             */
            account_holder_name: string;

            /**
             * The account number
             */
            account_number: string;

            /**
             * The six-digit sort code
             */
            sort_code: string;
          }

          interface Spei {
            /**
             * The three-digit bank code
             */
            bank_code: string;

            /**
             * The short banking institution name
             */
            bank_name: string;

            /**
             * The CLABE number
             */
            clabe: string;
          }

          type SupportedNetwork = 'bacs' | 'fps' | 'sepa' | 'spei' | 'zengin';

          type Type = 'iban' | 'sort_code' | 'spei' | 'zengin';

          interface Zengin {
            /**
             * The account holder name
             */
            account_holder_name: string | null;

            /**
             * The account number
             */
            account_number: string | null;

            /**
             * The bank account type. In Japan, this can only be `futsu` or `toza`.
             */
            account_type: string | null;

            /**
             * The bank code of the account
             */
            bank_code: string | null;

            /**
             * The bank name of the account
             */
            bank_name: string | null;

            /**
             * The branch code of the account
             */
            branch_code: string | null;

            /**
             * The branch name of the account
             */
            branch_name: string | null;
          }
        }

        type Type = 'eu_bank_transfer' | 'jp_bank_transfer';
      }
    }
  }
}
