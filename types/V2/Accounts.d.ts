// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      /**
       * A V2 Account is a representation of a company or individual that a Stripe user does business with. Accounts contain the contact details, Legal Entity information, and configuration required to enable the Account for use across Stripe products.
       */
      interface Account {
        /**
         * Unique identifier for the Account.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value of the object field.
         */
        object: 'account';

        /**
         * Closed Enum. A list of the configurations which have been applied to the Account to allow Accounts to be filtered by the products they have been configured for. Currently can only contain `recipient`, which will be present if a recipient configuration is set.
         */
        applied_configurations: Array<Account.AppliedConfiguration>;

        /**
         * Configuration to enable this Account to be used as a recipient of an OutboundPayment via the OutboundPayments API, or via the dashboard.
         */
        configuration: Account.Configuration | null;

        /**
         * Time at which the object was created. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
         */
        created: string;

        /**
         * The default contact email address for the Account. This field is optional, but must be supplied before the recipient configuration can be populated.
         */
        email: string | null;

        /**
         * The default set of verification information for the Account. Currently, this only includes a single Legal Entity which must be set as the default.
         */
        legal_entity_data: Account.LegalEntityData | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata | null;

        /**
         * A descriptive name for the Account. This name will be surfaced in the Account directory in the dashboard.
         */
        name: string | null;

        /**
         * A list of outstanding tasks users must complete before Stripe allows the Account's Features to be activated.
         */
        requirements: Array<Account.Requirement> | null;
      }

      namespace Account {
        type AppliedConfiguration = 'recipient' | 'storer';

        interface Configuration {
          /**
           * Configuration to enable this Account to be used as a recipient of an OutboundPayment via the OutboundPayments API, or via the dashboard. This field will only be returned if `configuration.recipient_data` is passed in the `include` parameter. Note that you cannot pass the `include` parameter on list requests so this field cannot be populated for lists.
           */
          recipient_data: Configuration.RecipientData | null;

          /**
           * Supported features that can be requested for the Account's configurations. This field will only be returned if `supportable_features.recipient_data` is passed in the `include` parameter. Note that you cannot pass the `include` parameter on list requests so this field cannot be populated for lists.
           */
          supportable_features: Configuration.SupportableFeatures | null;
        }

        namespace Configuration {
          interface RecipientData {
            /**
             * The payout method id to be used as a default outbound destination. This will allow the PayoutMethod to be omitted on OutboundPayments made through API or sending payouts via dashboard.
             */
            default_outbound_destination: RecipientData.DefaultOutboundDestination | null;

            /**
             * Features representing the functionality that should be enabled for when this Account is used as a recipient. Features need to be explicitly requested, and the `status` field indicates if the Feature is `active`, `restricted` or `pending`. Once a Feature is `active`, the Account can be used with the product flow that the Feature enables.
             */
            features: RecipientData.Features;
          }

          namespace RecipientData {
            interface DefaultOutboundDestination {
              /**
               * The payout method ID of the default outbound destination.
               */
              id: string;

              /**
               * Closed Enum. The payout method type of the default outbound destination.
               */
              type: DefaultOutboundDestination.Type;
            }

            namespace DefaultOutboundDestination {
              type Type =
                | 'at_bank_account'
                | 'au_bank_account'
                | 'ba_bank_account'
                | 'be_bank_account'
                | 'bg_bank_account'
                | 'bj_bank_account'
                | 'bs_bank_account'
                | 'card'
                | 'ca_bank_account'
                | 'ch_bank_account'
                | 'ci_bank_account'
                | 'cy_bank_account'
                | 'cz_bank_account'
                | 'de_bank_account'
                | 'dk_bank_account'
                | 'ec_bank_account'
                | 'ee_bank_account'
                | 'es_bank_account'
                | 'et_bank_account'
                | 'fi_bank_account'
                | 'fr_bank_account'
                | 'gb_bank_account'
                | 'gr_bank_account'
                | 'hr_bank_account'
                | 'hu_bank_account'
                | 'id_bank_account'
                | 'ie_bank_account'
                | 'il_bank_account'
                | 'in_bank_account'
                | 'is_bank_account'
                | 'it_bank_account'
                | 'ke_bank_account'
                | 'li_bank_account'
                | 'lt_bank_account'
                | 'lu_bank_account'
                | 'lv_bank_account'
                | 'mn_bank_account'
                | 'mt_bank_account'
                | 'mu_bank_account'
                | 'mx_bank_account'
                | 'na_bank_account'
                | 'nl_bank_account'
                | 'no_bank_account'
                | 'nz_bank_account'
                | 'pa_bank_account'
                | 'ph_bank_account'
                | 'pl_bank_account'
                | 'pt_bank_account'
                | 'ro_bank_account'
                | 'rs_bank_account'
                | 'se_bank_account'
                | 'sg_bank_account'
                | 'si_bank_account'
                | 'sk_bank_account'
                | 'sn_bank_account'
                | 'sv_bank_account'
                | 'tn_bank_account'
                | 'tr_bank_account'
                | 'us_bank_account'
                | 'za_bank_account';
            }

            interface Features {
              /**
               * Features that enable OutboundPayments to a bank account linked to this Account.
               */
              bank_accounts: Features.BankAccounts;

              /**
               * Features that enable OutboundPayments to a card linked to this Account.
               */
              cards: Features.Cards | null;
            }

            namespace Features {
              interface BankAccounts {
                /**
                 * Enables this Account to receive OutboundPayments to linked bank accounts over local networks.
                 */
                local: BankAccounts.Local | null;

                /**
                 * Enables this Account to receive OutboundPayments to linked bank accounts over wire.
                 */
                wire: BankAccounts.Wire | null;
              }

              namespace BankAccounts {
                interface Local {
                  /**
                   * Whether or not the Feature has been requested.
                   */
                  requested: boolean;

                  /**
                   * Closed Enum. The current status of the Feature. Once the status is `active`, the Account is ready to be used in the product flow that the Feature represents.
                   */
                  status: Local.Status;

                  /**
                   * Additional details regarding the status of the Feature - will be empty if status is `active`.
                   */
                  status_details: Array<Local.StatusDetail>;
                }

                namespace Local {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Closed Enum. Status code, explaining why the Feature has a given status, if it is not `active`.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Closed Enum. Additional information about how to resolve the Feature status, if it is not `active`.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }

                interface Wire {
                  /**
                   * Whether or not the Feature has been requested.
                   */
                  requested: boolean;

                  /**
                   * Closed Enum. The current status of the Feature. Once the status is `active`, the Account is ready to be used in the product flow that the Feature represents.
                   */
                  status: Wire.Status;

                  /**
                   * Additional details regarding the status of the Feature - will be empty if status is `active`.
                   */
                  status_details: Array<Wire.StatusDetail>;
                }

                namespace Wire {
                  type Status =
                    | 'active'
                    | 'pending'
                    | 'restricted'
                    | 'unsupported';

                  interface StatusDetail {
                    /**
                     * Closed Enum. Status code, explaining why the Feature has a given status, if it is not `active`.
                     */
                    code: StatusDetail.Code;

                    /**
                     * Closed Enum. Additional information about how to resolve the Feature status, if it is not `active`.
                     */
                    resolution: StatusDetail.Resolution;
                  }

                  namespace StatusDetail {
                    type Code =
                      | 'determining_status'
                      | 'requirements_past_due'
                      | 'requirements_pending_verification'
                      | 'restricted_other'
                      | 'unsupported_country';

                    type Resolution =
                      | 'contact_stripe'
                      | 'no_resolution'
                      | 'provide_info';
                  }
                }
              }

              interface Cards {
                /**
                 * Whether or not the Feature has been requested.
                 */
                requested: boolean;

                /**
                 * Closed Enum. The current status of the Feature. Once the status is `active`, the Account is ready to be used in the product flow that the Feature represents.
                 */
                status: Cards.Status;

                /**
                 * Additional details regarding the status of the Feature - will be empty if status is `active`.
                 */
                status_details: Array<Cards.StatusDetail>;
              }

              namespace Cards {
                type Status =
                  | 'active'
                  | 'pending'
                  | 'restricted'
                  | 'unsupported';

                interface StatusDetail {
                  /**
                   * Closed Enum. Status code, explaining why the Feature has a given status, if it is not `active`.
                   */
                  code: StatusDetail.Code;

                  /**
                   * Closed Enum. Additional information about how to resolve the Feature status, if it is not `active`.
                   */
                  resolution: StatusDetail.Resolution;
                }

                namespace StatusDetail {
                  type Code =
                    | 'determining_status'
                    | 'requirements_past_due'
                    | 'requirements_pending_verification'
                    | 'restricted_other'
                    | 'unsupported_country';

                  type Resolution =
                    | 'contact_stripe'
                    | 'no_resolution'
                    | 'provide_info';
                }
              }
            }
          }

          interface SupportableFeatures {
            /**
             * Closed Enum. A list of supported features that can be requested when the Account is configured as a recipient. Will be unset unless Legal Entity country has been provided for this Account.
             */
            recipient_data: Array<SupportableFeatures.RecipientDatum> | null;
          }

          namespace SupportableFeatures {
            type RecipientDatum =
              | 'bank_accounts.local'
              | 'bank_accounts.wire'
              | 'cards';
          }
        }

        interface LegalEntityData {
          /**
           * The address of the Legal Entity.
           */
          address: LegalEntityData.Address | null;

          /**
           * Closed Enum. The business type of the Legal Entity.
           */
          business_type: LegalEntityData.BusinessType | null;

          /**
           * Open Enum. Two-letter country code (ISO 3166-1 alpha-2) for where the company or individual is located.
           */
          country: LegalEntityData.Country;

          /**
           * The legal name of this Legal Entity. Required unless the business type is `individual`.
           */
          name: string | null;

          /**
           * The representative of the Legal Entity. This is the person nominated by the Legal Entity to provide information about themselves, and general information about the account. For legal entities with `individual` business type, this field is required and should contain the individual's information.
           */
          representative: LegalEntityData.Representative | null;
        }

        namespace LegalEntityData {
          interface Address {
            /**
             * City.
             */
            city: string | null;

            /**
             * Open Enum. Two-letter country code.
             */
            country: Address.Country | null;

            /**
             * Address line 1 (e.g., street, PO Box, or company name).
             */
            line1: string | null;

            /**
             * Address line 2 (e.g., apartment, suite, unit, or building).
             */
            line2: string | null;

            /**
             * ZIP or postal code.
             */
            postal_code: string | null;

            /**
             * State, county, province, or region.
             */
            state: string | null;

            /**
             * Town.
             */
            town: string | null;
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
            address: Representative.Address | null;

            /**
             * The date of birth of the representative.
             */
            dob: Representative.Dob | null;

            /**
             * The given name of the representative.
             */
            given_name: string | null;

            /**
             * The surname of the representative.
             */
            surname: string | null;
          }

          namespace Representative {
            interface Address {
              /**
               * City.
               */
              city: string | null;

              /**
               * Open Enum. Two-letter country code.
               */
              country: Address.Country | null;

              /**
               * Address line 1 (e.g., street, PO Box, or company name).
               */
              line1: string | null;

              /**
               * Address line 2 (e.g., apartment, suite, unit, or building).
               */
              line2: string | null;

              /**
               * ZIP or postal code.
               */
              postal_code: string | null;

              /**
               * State, county, province, or region.
               */
              state: string | null;

              /**
               * Town.
               */
              town: string | null;
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

        interface Requirement {
          /**
           * Closed Enum. Whether the responsibility is with the integrator to action, or with Stripe (to review info, to wait for some condition, etc.).
           */
          awaiting_action_from: Requirement.AwaitingActionFrom;

          /**
           * When the requirement is due.
           */
          deadline: Requirement.Deadline;

          /**
           * Open Enum. The unique identifier describing the data to be collected for this requirement.
           */
          description: Requirement.Description;

          /**
           * Communicate remediation steps with users if data previously submitted by user is not acceptable by Stripe.
           */
          errors: Array<Requirement.Error>;

          /**
           * Consequence of not completing this entry on time and in a Stripe-accepted manner.
           */
          impact: Requirement.Impact;

          /**
           * Open Enum. Why Stripe wants this information.
           */
          requested_reasons: Array<Requirement.RequestedReason>;
        }

        namespace Requirement {
          type AwaitingActionFrom = 'stripe' | 'user';

          interface Deadline {
            /**
             * Machine-readable version of the deadline.
             */
            due_at: string | null;

            /**
             * Closed Enum. Human-readable description of the deadline.
             */
            status: Deadline.Status;
          }

          namespace Deadline {
            type Status =
              | 'conditionally_due'
              | 'currently_due'
              | 'deadline_past_due';
          }

          type Description =
            | 'legal_entity.addresses.business_registration.city'
            | 'legal_entity.addresses.business_registration.country'
            | 'legal_entity.addresses.business_registration.line1'
            | 'legal_entity.addresses.business_registration.postal_code'
            | 'legal_entity.addresses.business_registration.state'
            | 'legal_entity.business_type'
            | 'legal_entity.documents.primary_identification'
            | 'legal_entity.name'
            | 'recipient_config.recipient_verification'
            | 'representative.addresses.residential.city'
            | 'representative.addresses.residential.country'
            | 'representative.addresses.residential.line1'
            | 'representative.addresses.residential.postal_code'
            | 'representative.addresses.residential.state'
            | 'representative.dob'
            | 'representative.documents.primary_identification'
            | 'representative.given_name'
            | 'representative.surname';

          interface Error {
            /**
             * Open Enum. Machine-readable error codes.
             */
            code: 'po_box_address_not_allowed';

            /**
             * Human-readable error messages.
             */
            message: string;
          }

          interface Impact {
            /**
             * Open Enum. The set of Features that are restricted by this requirement.
             */
            required_for_features: Array<Impact.RequiredForFeature>;
          }

          namespace Impact {
            type RequiredForFeature =
              | 'bank_accounts.local'
              | 'bank_accounts.wire'
              | 'cards';
          }

          type RequestedReason = 'routine_onboarding' | 'routine_verification';
        }
      }
    }
  }
}
