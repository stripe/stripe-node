// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        interface FinancialAccountCreateParams {
          /**
           * The type of FinancialAccount to create.
           */
          type: 'storage';

          /**
           * A descriptive name for the FinancialAccount, up to 50 characters long. This name will be used in the Stripe Dashboard and embedded components.
           */
          display_name?: string;

          /**
           * Metadata associated with the FinancialAccount.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * Parameters specific to creating `storage` type FinancialAccounts.
           */
          storage?: FinancialAccountCreateParams.Storage;
        }

        namespace FinancialAccountCreateParams {
          interface Storage {
            /**
             * The currencies that this FinancialAccount can hold.
             */
            holds_currencies: Array<Storage.HoldsCurrency>;
          }

          namespace Storage {
            type HoldsCurrency =
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
          }
        }
      }

      namespace MoneyManagement {
        interface FinancialAccountRetrieveParams {}
      }

      namespace MoneyManagement {
        interface FinancialAccountListParams {
          /**
           * The page limit.
           */
          limit?: number;

          /**
           * The status of the FinancialAccount to filter by. By default, closed FinancialAccounts are not returned.
           */
          status?: FinancialAccountListParams.Status;
        }

        namespace FinancialAccountListParams {
          type Status = 'closed' | 'open' | 'pending';
        }
      }

      namespace MoneyManagement {
        interface FinancialAccountCloseParams {
          /**
           * The addresses to forward any incoming transactions to.
           */
          forwarding_settings?: FinancialAccountCloseParams.ForwardingSettings;
        }

        namespace FinancialAccountCloseParams {
          interface ForwardingSettings {
            /**
             * The address to send forwarded payments to.
             */
            payment_method?: string;

            /**
             * The address to send forwarded payouts to.
             */
            payout_method?: string;
          }
        }
      }

      namespace MoneyManagement {
        class FinancialAccountsResource {
          /**
           * Creates a new FinancialAccount.
           * @throws Stripe.AlreadyExistsError
           * @throws Stripe.FeatureNotEnabledError
           */
          create(
            params: FinancialAccountCreateParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAccount>
          >;

          /**
           * Retrieves the details of an existing FinancialAccount.
           */
          retrieve(
            id: string,
            params?: FinancialAccountRetrieveParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAccount>
          >;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAccount>
          >;

          /**
           * Lists FinancialAccounts in this compartment.
           */
          list(
            params?: FinancialAccountListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.FinancialAccount>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.MoneyManagement.FinancialAccount>;

          /**
           * Closes a FinancialAccount with or without forwarding settings.
           * @throws Stripe.NonZeroBalanceError
           */
          close(
            id: string,
            params?: FinancialAccountCloseParams,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAccount>
          >;
          close(
            id: string,
            options?: RequestOptions
          ): Promise<
            Stripe.Response<Stripe.V2.MoneyManagement.FinancialAccount>
          >;
        }
      }
    }
  }
}
