// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        interface FinancialAddressCreateParams {
          /**
           * Open Enum. The currency the FinancialAddress should support. Currently, only the `usd` and `gbp` values are supported.
           */
          currency: FinancialAddressCreateParams.Currency;

          /**
           * The ID of the FinancialAccount the new FinancialAddress should be associated with.
           */
          financial_account: string;
        }

        namespace FinancialAddressCreateParams {
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
        }
      }

      namespace MoneyManagement {
        interface FinancialAddressRetrieveParams {
          /**
           * Open Enum. A list of fields to reveal in the FinancialAddresses returned.
           */
          include?: Array<FinancialAddressRetrieveParams.Include>;
        }

        namespace FinancialAddressRetrieveParams {
          type Include =
            | 'credentials.gb_bank_account.account_number'
            | 'credentials.us_bank_account.account_number';
        }
      }

      namespace MoneyManagement {
        interface FinancialAddressListParams {
          /**
           * The ID of the FinancialAccount for which FinancialAddresses are to be returned.
           */
          financial_account?: string;

          /**
           * Open Enum. A list of fields to reveal in the FinancialAddresses returned.
           */
          include?: Array<FinancialAddressListParams.Include>;

          /**
           * The page limit.
           */
          limit?: number;
        }

        namespace FinancialAddressListParams {
          type Include =
            | 'credentials.gb_bank_account.account_number'
            | 'credentials.us_bank_account.account_number';
        }
      }

      namespace MoneyManagement {
        class FinancialAddressesResource {
          /**
           * Create a new FinancialAddress for a FinancialAccount.
           * @throws Stripe.FinancialAccountNotOpenError
           */
          create(
            params: FinancialAddressCreateParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAddress>
          >;

          /**
           * Retrieve a FinancialAddress. By default, the FinancialAddress will be returned in it's unexpanded state, revealing only the last 4 digits of the account number.
           */
          retrieve(
            id: string,
            params?: FinancialAddressRetrieveParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAddress>
          >;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAddress>
          >;

          /**
           * List all FinancialAddresses for a FinancialAccount.
           */
          list(
            params?: FinancialAddressListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.FinancialAddress>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.FinancialAddress>;
        }
      }
    }
  }
}
