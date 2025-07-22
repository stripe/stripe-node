// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * The Financial Account is the container that allows for the configuration of money movement.
         */
        interface FinancialAccount {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.money_management.financial_account';

          /**
           * Multi-currency balance of this FinancialAccount, split by availability state. Each balance is represented as a hash where the key is the three-letter ISO currency code, in lowercase, and the value is the amount for that currency.
           */
          balance: FinancialAccount.Balance;

          /**
           * Open Enum. Two-letter country code that represents the country where the LegalEntity associated with the FinancialAccount is based in.
           */
          country: FinancialAccount.Country;

          /**
           * Time at which the object was created.
           */
          created: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Metadata associated with the FinancialAccount
           */
          metadata: Stripe.Metadata | null;

          /**
           * If this is a `other` FinancialAccount, this hash indicates what the actual type is. Upgrade your API version to see it reflected in `type`.
           */
          other: FinancialAccount.Other | null;

          /**
           * Closed Enum. An enum representing the status of the FinancialAccount. This indicates whether or not the FinancialAccount can be used for any money movement flows.
           */
          status: FinancialAccount.Status;

          status_details: FinancialAccount.StatusDetails | null;

          /**
           * If this is a `storage` FinancialAccount, this hash includes details specific to `storage` FinancialAccounts.
           */
          storage: FinancialAccount.Storage | null;

          /**
           * Type of the FinancialAccount. An additional hash is included on the FinancialAccount with a name matching this value.
           * It contains additional information specific to the FinancialAccount type.
           */
          type: FinancialAccount.Type;
        }

        namespace FinancialAccount {
          interface Balance {
            /**
             * Balance that can be used for money movement.
             */
            available: {
              [key: string]: Amount;
            };

            /**
             * Balance of inbound funds that will later transition to the `available` balance.
             */
            inbound_pending: {
              [key: string]: Amount;
            };

            /**
             * Balance of funds that are being used for a pending outbound money movement.
             */
            outbound_pending: {
              [key: string]: Amount;
            };
          }

          type Country =
            | 'ad'
            | 'ae'
            | 'af'
            | 'ag'
            | 'ai'
            | 'al'
            | 'am'
            | 'ao'
            | 'aq'
            | 'ar'
            | 'as'
            | 'at'
            | 'au'
            | 'aw'
            | 'ax'
            | 'az'
            | 'ba'
            | 'bb'
            | 'bd'
            | 'be'
            | 'bf'
            | 'bg'
            | 'bh'
            | 'bi'
            | 'bj'
            | 'bl'
            | 'bm'
            | 'bn'
            | 'bo'
            | 'bq'
            | 'br'
            | 'bs'
            | 'bt'
            | 'bv'
            | 'bw'
            | 'by'
            | 'bz'
            | 'ca'
            | 'cc'
            | 'cd'
            | 'cf'
            | 'cg'
            | 'ch'
            | 'ci'
            | 'ck'
            | 'cl'
            | 'cm'
            | 'cn'
            | 'co'
            | 'cr'
            | 'cu'
            | 'cv'
            | 'cw'
            | 'cx'
            | 'cy'
            | 'cz'
            | 'de'
            | 'dj'
            | 'dk'
            | 'dm'
            | 'do'
            | 'dz'
            | 'ec'
            | 'ee'
            | 'eg'
            | 'eh'
            | 'er'
            | 'es'
            | 'et'
            | 'fi'
            | 'fj'
            | 'fk'
            | 'fm'
            | 'fo'
            | 'fr'
            | 'ga'
            | 'gb'
            | 'gd'
            | 'ge'
            | 'gf'
            | 'gg'
            | 'gh'
            | 'gi'
            | 'gl'
            | 'gm'
            | 'gn'
            | 'gp'
            | 'gq'
            | 'gr'
            | 'gs'
            | 'gt'
            | 'gu'
            | 'gw'
            | 'gy'
            | 'hk'
            | 'hm'
            | 'hn'
            | 'hr'
            | 'ht'
            | 'hu'
            | 'id'
            | 'ie'
            | 'il'
            | 'im'
            | 'in'
            | 'io'
            | 'iq'
            | 'ir'
            | 'is'
            | 'it'
            | 'je'
            | 'jm'
            | 'jo'
            | 'jp'
            | 'ke'
            | 'kg'
            | 'kh'
            | 'ki'
            | 'km'
            | 'kn'
            | 'kp'
            | 'kr'
            | 'kw'
            | 'ky'
            | 'kz'
            | 'la'
            | 'lb'
            | 'lc'
            | 'li'
            | 'lk'
            | 'lr'
            | 'ls'
            | 'lt'
            | 'lu'
            | 'lv'
            | 'ly'
            | 'ma'
            | 'mc'
            | 'md'
            | 'me'
            | 'mf'
            | 'mg'
            | 'mh'
            | 'mk'
            | 'ml'
            | 'mm'
            | 'mn'
            | 'mo'
            | 'mp'
            | 'mq'
            | 'mr'
            | 'ms'
            | 'mt'
            | 'mu'
            | 'mv'
            | 'mw'
            | 'mx'
            | 'my'
            | 'mz'
            | 'na'
            | 'nc'
            | 'ne'
            | 'nf'
            | 'ng'
            | 'ni'
            | 'nl'
            | 'no'
            | 'np'
            | 'nr'
            | 'nu'
            | 'nz'
            | 'om'
            | 'pa'
            | 'pe'
            | 'pf'
            | 'pg'
            | 'ph'
            | 'pk'
            | 'pl'
            | 'pm'
            | 'pn'
            | 'pr'
            | 'ps'
            | 'pt'
            | 'pw'
            | 'py'
            | 'qa'
            | 'qz'
            | 're'
            | 'ro'
            | 'rs'
            | 'ru'
            | 'rw'
            | 'sa'
            | 'sb'
            | 'sc'
            | 'sd'
            | 'se'
            | 'sg'
            | 'sh'
            | 'si'
            | 'sj'
            | 'sk'
            | 'sl'
            | 'sm'
            | 'sn'
            | 'so'
            | 'sr'
            | 'ss'
            | 'st'
            | 'sv'
            | 'sx'
            | 'sy'
            | 'sz'
            | 'tc'
            | 'td'
            | 'tf'
            | 'tg'
            | 'th'
            | 'tj'
            | 'tk'
            | 'tl'
            | 'tm'
            | 'tn'
            | 'to'
            | 'tr'
            | 'tt'
            | 'tv'
            | 'tw'
            | 'tz'
            | 'ua'
            | 'ug'
            | 'um'
            | 'us'
            | 'uy'
            | 'uz'
            | 'va'
            | 'vc'
            | 've'
            | 'vg'
            | 'vi'
            | 'vn'
            | 'vu'
            | 'wf'
            | 'ws'
            | 'xx'
            | 'ye'
            | 'yt'
            | 'za'
            | 'zm'
            | 'zw';

          interface Other {
            /**
             * The type of the FinancialAccount, represented as a string. Upgrade your API version to see the type reflected in `financial_account.type`.
             */
            type: string;
          }

          type Status = 'closed' | 'open' | 'pending';

          interface StatusDetails {
            closed: StatusDetails.Closed | null;
          }

          namespace StatusDetails {
            interface Closed {
              forwarding_settings: Closed.ForwardingSettings | null;

              reason: Closed.Reason;
            }

            namespace Closed {
              interface ForwardingSettings {
                /**
                 * The address to send forwarded payments to.
                 */
                payment_method: string | null;

                /**
                 * The address to send forwarded payouts to.
                 */
                payout_method: string | null;
              }

              type Reason = 'account_closed' | 'closed_by_platform' | 'other';
            }
          }

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

          type Type = 'other' | 'storage';
        }
      }
    }
  }
}
