// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      interface AccountCreateParams {
        /**
         * Configurations applied to this Account in order to allow it to be used in different product flows. Currently only supports the recipient configuration.
         */
        configuration?: AccountCreateParams.Configuration;

        /**
         * The default contact email address for the Account. This field is optional, but must be supplied before the recipient configuration can be populated.
         */
        email?: string;

        /**
         * Closed Enum. Additional fields to include in the response. Currently supports `configuration.recipient_data`, `legal_entity_data`, `requirements`, and `supportable_features.recipient_data`.
         */
        include?: Array<AccountCreateParams.Include>;

        /**
         * Information about the company or individual that this Account represents. Stripe may require Legal Entity information in order to enable Features requested on the Account.
         */
        legal_entity_data?: AccountCreateParams.LegalEntityData;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * A descriptive name for the Account. This name will be surfaced in the Account directory in the dashboard.
         */
        name?: string;
      }

      namespace AccountCreateParams {
        interface Configuration {
          /**
           * Configuration to enable this Account to be used as a recipient of an OutboundPayment via the OutboundPayments API, or via the dashboard.
           */
          recipient_data?: Configuration.RecipientData;
        }

        namespace Configuration {
          interface RecipientData {
            /**
             * Features representing the functionality that should be enabled for when this Account is used as a recipient. Features need to be explicitly requested, and the `status` field indicates if the Feature is `active`, `restricted` or `pending`. Once a Feature is `active`, the Account can be used with the product flow that the Feature enables.
             */
            features: RecipientData.Features;
          }

          namespace RecipientData {
            interface Features {
              /**
               * Features that enable OutboundPayments to a bank account linked to this Account.
               */
              bank_accounts?: Features.BankAccounts;

              /**
               * Feature that enable OutboundPayments to a debit card linked to this Account.
               */
              cards?: Features.Cards;
            }

            namespace Features {
              interface BankAccounts {
                /**
                 * Enables this Account to receive OutboundPayments to linked bank accounts over local networks.
                 */
                local?: BankAccounts.Local;

                /**
                 * Enables this Account to receive OutboundPayments to linked bank accounts over wire.
                 */
                wire?: BankAccounts.Wire;
              }

              namespace BankAccounts {
                interface Local {
                  /**
                   * Whether or not to request the Feature.
                   */
                  requested: boolean;
                }

                interface Wire {
                  /**
                   * Whether or not to request the Feature.
                   */
                  requested: boolean;
                }
              }

              interface Cards {
                /**
                 * Whether or not to request the Feature.
                 */
                requested: boolean;
              }
            }
          }
        }

        type Include =
          | 'configuration.recipient_data'
          | 'legal_entity_data'
          | 'requirements'
          | 'supportable_features.recipient_data';

        interface LegalEntityData {
          /**
           * The address of the Legal Entity.
           */
          address?: LegalEntityData.Address;

          /**
           * Closed Enum. The business type of the Legal Entity.
           */
          business_type?: LegalEntityData.BusinessType;

          /**
           * Open Enum. Two-letter country code (ISO 3166-1 alpha-2) for where the company or individual is located.
           */
          country: LegalEntityData.Country;

          /**
           * The legal name of this Legal Entity. Required unless the business type is `individual`.
           */
          name?: string;

          /**
           * The representative of the Legal Entity. This is the person nominated by the Legal Entity to provide information about themselves, and general information about the account. For legal entities with `individual` business type, this field is required and should contain the individual's information.
           */
          representative?: LegalEntityData.Representative;
        }

        namespace LegalEntityData {
          interface Address {
            /**
             * City.
             */
            city?: string;

            /**
             * Open Enum. Two-letter country code.
             */
            country?: Address.Country;

            /**
             * Address line 1 (e.g., street, PO Box, or company name).
             */
            line1?: string;

            /**
             * Address line 2 (e.g., apartment, suite, unit, or building).
             */
            line2?: string;

            /**
             * ZIP or postal code.
             */
            postal_code?: string;

            /**
             * State, county, province, or region.
             */
            state?: string;

            /**
             * Town.
             */
            town?: string;
          }

          namespace Address {
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
          }

          type BusinessType = 'company' | 'individual';

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

          interface Representative {
            /**
             * The address of the representative.
             */
            address?: Representative.Address;

            /**
             * The date of birth of the representative.
             */
            dob?: Representative.Dob;

            /**
             * The given name of the representative.
             */
            given_name?: string;

            /**
             * The surname of the representative.
             */
            surname?: string;
          }

          namespace Representative {
            interface Address {
              /**
               * City.
               */
              city?: string;

              /**
               * Open Enum. Two-letter country code.
               */
              country?: Address.Country;

              /**
               * Address line 1 (e.g., street, PO Box, or company name).
               */
              line1?: string;

              /**
               * Address line 2 (e.g., apartment, suite, unit, or building).
               */
              line2?: string;

              /**
               * ZIP or postal code.
               */
              postal_code?: string;

              /**
               * State, county, province, or region.
               */
              state?: string;

              /**
               * Town.
               */
              town?: string;
            }

            namespace Address {
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
            }

            interface Dob {
              /**
               * The day of birth of the representative.
               */
              day: number;

              /**
               * The month of birth of the representative.
               */
              month: number;

              /**
               * The year of birth of the representative.
               */
              year: number;
            }
          }
        }
      }

      interface AccountRetrieveParams {
        /**
         * Closed Enum. Additional fields to include in the response. Currently supports `configuration.recipient_data`, `legal_entity_data`, `requirements`, and `supportable_features.recipient_data`.
         */
        include?: Array<AccountRetrieveParams.Include>;
      }

      namespace AccountRetrieveParams {
        type Include =
          | 'configuration.recipient_data'
          | 'legal_entity_data'
          | 'requirements'
          | 'supportable_features.recipient_data';
      }

      interface AccountUpdateParams {
        /**
         * Configurations applied to this Account in order to allow it to be used in different product flows. Currently only supports the recipient configuration.
         */
        configuration?: AccountUpdateParams.Configuration;

        /**
         * The default contact email address for the Account. This field is optional, but must be supplied before the recipient configuration can be populated.
         */
        email?: string;

        /**
         * Closed Enum. Additional fields to include in the response. Currently supports `configuration.recipient_data`, `legal_entity_data`, `requirements`, and `supportable_features.recipient_data`.
         */
        include?: Array<AccountUpdateParams.Include>;

        /**
         * Information about the company or individual that this Account represents. Stripe may require Legal Entity information in order to enable Features requested on the Account.
         */
        legal_entity_data?: AccountUpdateParams.LegalEntityData;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * A descriptive name for the Account. This name will be surfaced in the Account directory in the dashboard.
         */
        name?: string;
      }

      namespace AccountUpdateParams {
        interface Configuration {
          /**
           * Configuration to enable this Account to be used as a recipient of an OutboundPayment via the OutboundPayments API, or via the dashboard.
           */
          recipient_data?: Configuration.RecipientData;
        }

        namespace Configuration {
          interface RecipientData {
            /**
             * The payout method id to be used as a default outbound destination. This will allow the PayoutMethod to be omitted on OutboundPayments made through API or sending payouts via dashboard. Can also be explicitly set to `null` to clear the existing default outbound destination.
             */
            default_outbound_destination?: string | null;

            /**
             * Features representing the functionality that should be enabled for when this Account is used as a recipient. Features need to be explicitly requested, and the `status` field indicates if the Feature is `active`, `restricted` or `pending`. Once a Feature is `active`, the Account can be used with the product flow that the Feature enables.
             */
            features?: RecipientData.Features;
          }

          namespace RecipientData {
            interface Features {
              /**
               * Features that enable OutboundPayments to a bank account linked to this Account.
               */
              bank_accounts?: Features.BankAccounts;

              /**
               * Feature that enable OutboundPayments to a debit card linked to this Account.
               */
              cards?: Features.Cards;
            }

            namespace Features {
              interface BankAccounts {
                /**
                 * Enables this Account to receive OutboundPayments to linked bank accounts over local networks.
                 */
                local?: BankAccounts.Local;

                /**
                 * Enables this Account to receive OutboundPayments to linked bank accounts over wire.
                 */
                wire?: BankAccounts.Wire;
              }

              namespace BankAccounts {
                interface Local {
                  /**
                   * Whether or not to request the Feature.
                   */
                  requested?: boolean;
                }

                interface Wire {
                  /**
                   * Whether or not to request the Feature.
                   */
                  requested?: boolean;
                }
              }

              interface Cards {
                /**
                 * Whether or not to request the Feature.
                 */
                requested?: boolean;
              }
            }
          }
        }

        type Include =
          | 'configuration.recipient_data'
          | 'legal_entity_data'
          | 'requirements'
          | 'supportable_features.recipient_data';

        interface LegalEntityData {
          /**
           * The address of the Legal Entity.
           */
          address?: LegalEntityData.Address | null;

          /**
           * Closed Enum. The business type of the Legal Entity.
           */
          business_type?: LegalEntityData.BusinessType | null;

          /**
           * Open Enum. Two-letter country code (ISO 3166-1 alpha-2) for where the company or individual is located.
           */
          country?: LegalEntityData.Country | null;

          /**
           * The legal name of this Legal Entity. Required unless the business type is `individual`.
           */
          name?: string | null;

          /**
           * The representative of the Legal Entity. This is the person nominated by the Legal Entity to provide information about themselves, and general information about the account. For legal entities with `individual` business type, this field is required and should contain the individual's information.
           */
          representative?: LegalEntityData.Representative | null;
        }

        namespace LegalEntityData {
          interface Address {
            /**
             * City.
             */
            city?: string | null;

            /**
             * Open Enum. Two-letter country code.
             */
            country?: Address.Country | null;

            /**
             * Address line 1 (e.g., street, PO Box, or company name).
             */
            line1?: string | null;

            /**
             * Address line 2 (e.g., apartment, suite, unit, or building).
             */
            line2?: string | null;

            /**
             * ZIP or postal code.
             */
            postal_code?: string | null;

            /**
             * State, county, province, or region.
             */
            state?: string | null;

            /**
             * Town.
             */
            town?: string | null;
          }

          namespace Address {
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
          }

          type BusinessType = 'company' | 'individual';

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

          interface Representative {
            /**
             * The address of the representative.
             */
            address?: Representative.Address | null;

            /**
             * The date of birth of the representative.
             */
            dob?: Representative.Dob | null;

            /**
             * The given name of the representative.
             */
            given_name?: string | null;

            /**
             * The surname of the representative.
             */
            surname?: string | null;
          }

          namespace Representative {
            interface Address {
              /**
               * City.
               */
              city?: string | null;

              /**
               * Open Enum. Two-letter country code.
               */
              country?: Address.Country | null;

              /**
               * Address line 1 (e.g., street, PO Box, or company name).
               */
              line1?: string | null;

              /**
               * Address line 2 (e.g., apartment, suite, unit, or building).
               */
              line2?: string | null;

              /**
               * ZIP or postal code.
               */
              postal_code?: string | null;

              /**
               * State, county, province, or region.
               */
              state?: string | null;

              /**
               * Town.
               */
              town?: string | null;
            }

            namespace Address {
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
            }

            interface Dob {
              /**
               * The day of birth of the representative.
               */
              day: number;

              /**
               * The month of birth of the representative.
               */
              month: number;

              /**
               * The year of birth of the representative.
               */
              year: number;
            }
          }
        }
      }

      interface AccountListParams {
        /**
         * Filter by the configurations that have been applied to the account. If omitted, returns all Accounts regardless of which configurations they have. Currently only supports `recipient`, to filter by Accounts with the recipient configuration set.
         */
        applied_configurations?: Array<string>;

        /**
         * The limit.
         */
        limit?: number;
      }

      interface AccountCloseParams {}

      class AccountsResource {
        /**
         * Creates an Account. You can optionally provide information about the associated Legal Entity, such as name and business type. The Account can also be configured as a recipient of OutboundPayments by requesting Features on the recipient configuration.
         */
        create(
          params?: AccountCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.V2.Account>>;
        create(
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.V2.Account>>;

        /**
         * Retrieves the details of an Account.
         */
        retrieve(
          id: string,
          params?: AccountRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.V2.Account>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.V2.Account>>;

        /**
         * Updates the details of an Account. You can also optionally provide or update the details of the associated Legal Entity and recipient configuration.
         */
        update(
          id: string,
          params?: AccountUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.V2.Account>>;

        /**
         * Returns a list of Accounts. Note that the `include` parameter cannot be passed in on list requests.
         */
        list(
          params?: AccountListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.V2.Account>;
        list(options?: RequestOptions): ApiListPromise<Stripe.V2.Account>;

        /**
         * Closes and removes access to the Account and its associated resources.
         */
        close(
          id: string,
          params?: AccountCloseParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.V2.Account>>;
        close(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.V2.Account>>;
      }
    }
  }
}
