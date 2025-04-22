// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * A FinancialAddress contains information needed to transfer money to a Financial Account. A Financial Account can have more than one Financial Address.
         */
        interface FinancialAddress {
          /**
           * The ID of a FinancialAddress.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.money_management.financial_address';

          /**
           * The creation timestamp of the FinancialAddress.
           */
          created: string;

          /**
           * Object indicates the type of credentials that have been allocated and attached to the FinancialAddress.
           * It contains all necessary banking details with which to perform money movements with the FinancialAddress.
           * This field is only available for FinancialAddresses with an active status.
           */
          credentials: FinancialAddress.Credentials | null;

          /**
           * Open Enum. The currency the FinancialAddress supports.
           */
          currency: FinancialAddress.Currency;

          /**
           * A ID of the FinancialAccount this FinancialAddress corresponds to.
           */
          financial_account: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Open Enum. The currency the FinancialAddress settles into the FinancialAccount.
           */
          settlement_currency: FinancialAddress.SettlementCurrency | null;

          /**
           * Closed Enum. An enum representing the status of the FinancialAddress. This indicates whether or not the FinancialAddress can be used for any money movement flows.
           */
          status: FinancialAddress.Status;
        }

        namespace FinancialAddress {
          interface Credentials {
            /**
             * Open Enum. The type of Credentials that are provisioned for the FinancialAddress.
             */
            type: Credentials.Type;

            /**
             * The credentials of the crypto wallet for the Financial Address. This contains unique details such as the blockchain network, wallet address, and memo of a crypto wallet.
             */
            crypto_wallet: Credentials.CryptoWallet | null;

            /**
             * The credentials of the EU Bank Account for the FinancialAddress. This contains unique banking details such as the IBAN, BIC, etc. of a EU bank account.
             */
            eu_bank_account: Credentials.EuBankAccount | null;

            /**
             * The credentials of the UK Bank Account for the FinancialAddress. This contains unique banking details such as the sort code, account number, etc. of a UK bank account.
             */
            gb_bank_account: Credentials.GbBankAccount | null;

            /**
             * The credentials of the US Bank Account for the FinancialAddress. This contains unique banking details such as the routing number, account number, etc. of a US bank account.
             */
            us_bank_account: Credentials.UsBankAccount | null;
          }

          namespace Credentials {
            interface CryptoWallet {
              /**
               * The blockchain address of the crypto wallet.
               */
              address: string;

              /**
               * Required if the network supports memos (e.g. Stellar).
               */
              memo: string | null;

              /**
               * The blockchain network of the crypto wallet.
               */
              network: CryptoWallet.Network;
            }

            namespace CryptoWallet {
              type Network =
                | 'arbitrum'
                | 'avalanche_c_chain'
                | 'base'
                | 'ethereum'
                | 'optimism'
                | 'polygon'
                | 'solana'
                | 'stellar';
            }

            interface EuBankAccount {
              /**
               * The account holder name to be used during bank transfers.
               */
              account_holder_name: string;

              /**
               * The account number of the EU Bank Account.
               */
              account_number: string | null;

              /**
               * The name of the Bank.
               */
              bank_name: string;

              /**
               * The BIC of the EU Bank Account.
               */
              bic: string;

              /**
               * The last four digits of the EU Bank Account number. This will always be returned.
               * To view the full account number when retrieving or listing FinancialAddresses, use the `include` request parameter.
               */
              last4: string;
            }

            interface GbBankAccount {
              /**
               * The account holder name to be used during bank transference.
               */
              account_holder_name: string;

              /**
               * The account number of the UK Bank Account.
               */
              account_number: string | null;

              /**
               * The last four digits of the UK Bank Account number. This will always be returned.
               * To view the full account number when retrieving or listing FinancialAddresses, use the `include` request parameter.
               */
              last4: string;

              /**
               * The sort code of the UK Bank Account.
               */
              sort_code: string;
            }

            type Type =
              | 'crypto_wallet'
              | 'eu_bank_account'
              | 'gb_bank_account'
              | 'us_bank_account';

            interface UsBankAccount {
              /**
               * The account number of the US Bank Account.
               */
              account_number: string | null;

              /**
               * The name of the Bank.
               */
              bank_name: string | null;

              /**
               * The last four digits of the US Bank Account number. This will always be returned.
               * To view the full account number when retrieving or listing FinancialAddresses, use the `include` request parameter.
               */
              last4: string;

              /**
               * The routing number of the US Bank Account.
               */
              routing_number: string;

              /**
               * The swift code of the bank or financial institution.
               */
              swift_code: string | null;
            }
          }

          type Currency =
            | 'aed'
            | 'afn'
            | 'all'
            | 'amd'
            | 'ang'
            | 'aoa'
            | 'ars'
            | 'aud'
            | 'awg'
            | 'azn'
            | 'bam'
            | 'bbd'
            | 'bdt'
            | 'bgn'
            | 'bhd'
            | 'bif'
            | 'bmd'
            | 'bnd'
            | 'bob'
            | 'bov'
            | 'brl'
            | 'bsd'
            | 'btn'
            | 'bwp'
            | 'byn'
            | 'byr'
            | 'bzd'
            | 'cad'
            | 'cdf'
            | 'che'
            | 'chf'
            | 'chw'
            | 'clf'
            | 'clp'
            | 'cny'
            | 'cop'
            | 'cou'
            | 'crc'
            | 'cuc'
            | 'cup'
            | 'cve'
            | 'czk'
            | 'djf'
            | 'dkk'
            | 'dop'
            | 'dzd'
            | 'eek'
            | 'egp'
            | 'ern'
            | 'etb'
            | 'eur'
            | 'fjd'
            | 'fkp'
            | 'gbp'
            | 'gel'
            | 'ghc'
            | 'ghs'
            | 'gip'
            | 'gmd'
            | 'gnf'
            | 'gtq'
            | 'gyd'
            | 'hkd'
            | 'hnl'
            | 'hrk'
            | 'htg'
            | 'huf'
            | 'idr'
            | 'ils'
            | 'inr'
            | 'iqd'
            | 'irr'
            | 'isk'
            | 'jmd'
            | 'jod'
            | 'jpy'
            | 'kes'
            | 'kgs'
            | 'khr'
            | 'kmf'
            | 'kpw'
            | 'krw'
            | 'kwd'
            | 'kyd'
            | 'kzt'
            | 'lak'
            | 'lbp'
            | 'lkr'
            | 'lrd'
            | 'lsl'
            | 'ltl'
            | 'lvl'
            | 'lyd'
            | 'mad'
            | 'mdl'
            | 'mga'
            | 'mkd'
            | 'mmk'
            | 'mnt'
            | 'mop'
            | 'mro'
            | 'mru'
            | 'mur'
            | 'mvr'
            | 'mwk'
            | 'mxn'
            | 'mxv'
            | 'myr'
            | 'mzn'
            | 'nad'
            | 'ngn'
            | 'nio'
            | 'nok'
            | 'npr'
            | 'nzd'
            | 'omr'
            | 'pab'
            | 'pen'
            | 'pgk'
            | 'php'
            | 'pkr'
            | 'pln'
            | 'pyg'
            | 'qar'
            | 'ron'
            | 'rsd'
            | 'rub'
            | 'rwf'
            | 'sar'
            | 'sbd'
            | 'scr'
            | 'sdg'
            | 'sek'
            | 'sgd'
            | 'shp'
            | 'sle'
            | 'sll'
            | 'sos'
            | 'srd'
            | 'ssp'
            | 'std'
            | 'stn'
            | 'svc'
            | 'syp'
            | 'szl'
            | 'thb'
            | 'tjs'
            | 'tmt'
            | 'tnd'
            | 'top'
            | 'try'
            | 'ttd'
            | 'twd'
            | 'tzs'
            | 'uah'
            | 'ugx'
            | 'usd'
            | 'usdb'
            | 'usdc'
            | 'usn'
            | 'uyi'
            | 'uyu'
            | 'uzs'
            | 'vef'
            | 'ves'
            | 'vnd'
            | 'vuv'
            | 'wst'
            | 'xaf'
            | 'xcd'
            | 'xcg'
            | 'xof'
            | 'xpf'
            | 'yer'
            | 'zar'
            | 'zmk'
            | 'zmw'
            | 'zwd'
            | 'zwg'
            | 'zwl';

          type SettlementCurrency =
            | 'aed'
            | 'afn'
            | 'all'
            | 'amd'
            | 'ang'
            | 'aoa'
            | 'ars'
            | 'aud'
            | 'awg'
            | 'azn'
            | 'bam'
            | 'bbd'
            | 'bdt'
            | 'bgn'
            | 'bhd'
            | 'bif'
            | 'bmd'
            | 'bnd'
            | 'bob'
            | 'bov'
            | 'brl'
            | 'bsd'
            | 'btn'
            | 'bwp'
            | 'byn'
            | 'byr'
            | 'bzd'
            | 'cad'
            | 'cdf'
            | 'che'
            | 'chf'
            | 'chw'
            | 'clf'
            | 'clp'
            | 'cny'
            | 'cop'
            | 'cou'
            | 'crc'
            | 'cuc'
            | 'cup'
            | 'cve'
            | 'czk'
            | 'djf'
            | 'dkk'
            | 'dop'
            | 'dzd'
            | 'eek'
            | 'egp'
            | 'ern'
            | 'etb'
            | 'eur'
            | 'fjd'
            | 'fkp'
            | 'gbp'
            | 'gel'
            | 'ghc'
            | 'ghs'
            | 'gip'
            | 'gmd'
            | 'gnf'
            | 'gtq'
            | 'gyd'
            | 'hkd'
            | 'hnl'
            | 'hrk'
            | 'htg'
            | 'huf'
            | 'idr'
            | 'ils'
            | 'inr'
            | 'iqd'
            | 'irr'
            | 'isk'
            | 'jmd'
            | 'jod'
            | 'jpy'
            | 'kes'
            | 'kgs'
            | 'khr'
            | 'kmf'
            | 'kpw'
            | 'krw'
            | 'kwd'
            | 'kyd'
            | 'kzt'
            | 'lak'
            | 'lbp'
            | 'lkr'
            | 'lrd'
            | 'lsl'
            | 'ltl'
            | 'lvl'
            | 'lyd'
            | 'mad'
            | 'mdl'
            | 'mga'
            | 'mkd'
            | 'mmk'
            | 'mnt'
            | 'mop'
            | 'mro'
            | 'mru'
            | 'mur'
            | 'mvr'
            | 'mwk'
            | 'mxn'
            | 'mxv'
            | 'myr'
            | 'mzn'
            | 'nad'
            | 'ngn'
            | 'nio'
            | 'nok'
            | 'npr'
            | 'nzd'
            | 'omr'
            | 'pab'
            | 'pen'
            | 'pgk'
            | 'php'
            | 'pkr'
            | 'pln'
            | 'pyg'
            | 'qar'
            | 'ron'
            | 'rsd'
            | 'rub'
            | 'rwf'
            | 'sar'
            | 'sbd'
            | 'scr'
            | 'sdg'
            | 'sek'
            | 'sgd'
            | 'shp'
            | 'sle'
            | 'sll'
            | 'sos'
            | 'srd'
            | 'ssp'
            | 'std'
            | 'stn'
            | 'svc'
            | 'syp'
            | 'szl'
            | 'thb'
            | 'tjs'
            | 'tmt'
            | 'tnd'
            | 'top'
            | 'try'
            | 'ttd'
            | 'twd'
            | 'tzs'
            | 'uah'
            | 'ugx'
            | 'usd'
            | 'usdb'
            | 'usdc'
            | 'usn'
            | 'uyi'
            | 'uyu'
            | 'uzs'
            | 'vef'
            | 'ves'
            | 'vnd'
            | 'vuv'
            | 'wst'
            | 'xaf'
            | 'xcd'
            | 'xcg'
            | 'xof'
            | 'xpf'
            | 'yer'
            | 'zar'
            | 'zmk'
            | 'zmw'
            | 'zwd'
            | 'zwg'
            | 'zwl';

          type Status = 'active' | 'archived' | 'failed' | 'pending';
        }
      }
    }
  }
}
