// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        namespace Accounts {
          interface PersonCreateParams {
            /**
             * Additional addresses associated with the person.
             */
            additional_addresses?: Array<PersonCreateParams.AdditionalAddress>;

            /**
             * Additional names (e.g. aliases) associated with the person.
             */
            additional_names?: Array<PersonCreateParams.AdditionalName>;

            /**
             * Attestations of accepted terms of service agreements.
             */
            additional_terms_of_service?: PersonCreateParams.AdditionalTermsOfService;

            /**
             * The person's residential address.
             */
            address?: PersonCreateParams.Address;

            /**
             * The person's date of birth.
             */
            date_of_birth?: PersonCreateParams.DateOfBirth;

            /**
             * Documents that may be submitted to satisfy various informational requests.
             */
            documents?: PersonCreateParams.Documents;

            /**
             * Email.
             */
            email?: string;

            /**
             * The person's first name.
             */
            given_name?: string;

            /**
             * The identification numbers (e.g., SSN) associated with the person.
             */
            id_numbers?: Array<PersonCreateParams.IdNumber>;

            /**
             * The person's gender (International regulations require either "male" or "female").
             */
            legal_gender?: PersonCreateParams.LegalGender;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata?: Stripe.MetadataParam;

            /**
             * The nationalities (countries) this person is associated with.
             */
            nationalities?: Array<PersonCreateParams.Nationality>;

            /**
             * The phone number for this person.
             */
            phone?: string;

            /**
             * The person's political exposure.
             */
            political_exposure?: PersonCreateParams.PoliticalExposure;

            /**
             * The relationship that this person has with the Account's business or legal entity.
             */
            relationship?: PersonCreateParams.Relationship;

            /**
             * The script addresses (e.g., non-Latin characters) associated with the person.
             */
            script_addresses?: PersonCreateParams.ScriptAddresses;

            /**
             * The script names (e.g. non-Latin characters) associated with the person.
             */
            script_names?: PersonCreateParams.ScriptNames;

            /**
             * The person's last name.
             */
            surname?: string;
          }

          namespace PersonCreateParams {
            interface AdditionalAddress {
              /**
               * City, district, suburb, town, or village.
               */
              city?: string;

              /**
               * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
               */
              country: AdditionalAddress.Country;

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
               * Purpose of additional address.
               */
              purpose: 'registered';

              /**
               * State, county, province, or region.
               */
              state?: string;

              /**
               * Town or cho-me.
               */
              town?: string;
            }

            namespace AdditionalAddress {
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
                | 'ye'
                | 'yt'
                | 'za'
                | 'zm'
                | 'zw';
            }

            interface AdditionalName {
              /**
               * The person's full name.
               */
              full_name?: string;

              /**
               * The person's first or given name.
               */
              given_name?: string;

              /**
               * The purpose or type of the additional name.
               */
              purpose: AdditionalName.Purpose;

              /**
               * The person's last or family name.
               */
              surname?: string;
            }

            namespace AdditionalName {
              type Purpose = 'alias' | 'maiden';
            }

            interface AdditionalTermsOfService {
              /**
               * Stripe terms of service agreement.
               */
              account?: AdditionalTermsOfService.Account;
            }

            namespace AdditionalTermsOfService {
              interface Account {
                /**
                 * The time when the Account's representative accepted the terms of service. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
                 */
                date: string;

                /**
                 * The IP address from which the Account's representative accepted the terms of service.
                 */
                ip: string;

                /**
                 * The user agent of the browser from which the Account's representative accepted the terms of service.
                 */
                user_agent?: string;
              }
            }

            interface Address {
              /**
               * City, district, suburb, town, or village.
               */
              city?: string;

              /**
               * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
               */
              country: Address.Country;

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
               * Town or cho-me.
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
                | 'ye'
                | 'yt'
                | 'za'
                | 'zm'
                | 'zw';
            }

            interface DateOfBirth {
              /**
               * The day of birth.
               */
              day: number;

              /**
               * The month of birth.
               */
              month: number;

              /**
               * The year of birth.
               */
              year: number;
            }

            interface Documents {
              /**
               * One or more documents that demonstrate proof that this person is authorized to represent the company.
               */
              company_authorization?: Documents.CompanyAuthorization;

              /**
               * One or more documents showing the person's passport page with photo and personal data.
               */
              passport?: Documents.Passport;

              /**
               * An identifying document showing the person's name, either a passport or local ID card.
               */
              primary_verification?: Documents.PrimaryVerification;

              /**
               * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
               */
              secondary_verification?: Documents.SecondaryVerification;

              /**
               * One or more documents showing the person's visa required for living in the country where they are residing.
               */
              visa?: Documents.Visa;
            }

            namespace Documents {
              interface CompanyAuthorization {
                /**
                 * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                 */
                files: Array<string>;

                /**
                 * The format of the document. Currently supports `files` only.
                 */
                type: 'files';
              }

              interface Passport {
                /**
                 * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                 */
                files: Array<string>;

                /**
                 * The format of the document. Currently supports `files` only.
                 */
                type: 'files';
              }

              interface PrimaryVerification {
                /**
                 * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens referring to each side of the document.
                 */
                front_back: PrimaryVerification.FrontBack;

                /**
                 * The format of the verification document. Currently supports `front_back` only.
                 */
                type: 'front_back';
              }

              namespace PrimaryVerification {
                interface FrontBack {
                  /**
                   * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the back of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                   */
                  back?: string;

                  /**
                   * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                   */
                  front: string;
                }
              }

              interface SecondaryVerification {
                /**
                 * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens referring to each side of the document.
                 */
                front_back: SecondaryVerification.FrontBack;

                /**
                 * The format of the verification document. Currently supports `front_back` only.
                 */
                type: 'front_back';
              }

              namespace SecondaryVerification {
                interface FrontBack {
                  /**
                   * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the back of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                   */
                  back?: string;

                  /**
                   * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                   */
                  front: string;
                }
              }

              interface Visa {
                /**
                 * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                 */
                files: Array<string>;

                /**
                 * The format of the document. Currently supports `files` only.
                 */
                type: 'files';
              }
            }

            interface IdNumber {
              /**
               * The ID number type of an individual.
               */
              type: IdNumber.Type;

              /**
               * The value of the ID number.
               */
              value: string;
            }

            namespace IdNumber {
              type Type =
                | 'ae_eid'
                | 'br_cpf'
                | 'de_stn'
                | 'hk_id'
                | 'mx_rfc'
                | 'my_nric'
                | 'nl_bsn'
                | 'sg_fin'
                | 'sg_nric'
                | 'th_lc'
                | 'th_pin'
                | 'us_itin'
                | 'us_itin_last_4'
                | 'us_ssn'
                | 'us_ssn_last_4';
            }

            type LegalGender = 'female' | 'male';

            type Nationality =
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
              | 'ye'
              | 'yt'
              | 'za'
              | 'zm'
              | 'zw';

            type PoliticalExposure = 'existing' | 'none';

            interface Relationship {
              /**
               * Indicates whether the person is a director of the associated legal entity.
               */
              director?: boolean;

              /**
               * Indicates whether the person is an executive of the associated legal entity.
               */
              executive?: boolean;

              /**
               * Indicates whether the person is a legal guardian of the associated legal entity.
               */
              legal_guardian?: boolean;

              /**
               * Indicates whether the person is an owner of the associated legal entity.
               */
              owner?: boolean;

              /**
               * The percentage of ownership the person has in the associated legal entity.
               */
              percent_ownership?: string;

              /**
               * Indicates whether the person is a representative of the associated legal entity.
               */
              representative?: boolean;

              /**
               * The title or position the person holds in the associated legal entity.
               */
              title?: string;
            }

            interface ScriptAddresses {
              /**
               * Kana Address.
               */
              kana?: ScriptAddresses.Kana;

              /**
               * Kanji Address.
               */
              kanji?: ScriptAddresses.Kanji;
            }

            namespace ScriptAddresses {
              interface Kana {
                /**
                 * City, district, suburb, town, or village.
                 */
                city?: string;

                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country: Kana.Country;

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
                 * Town or cho-me.
                 */
                town?: string;
              }

              namespace Kana {
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
                  | 'ye'
                  | 'yt'
                  | 'za'
                  | 'zm'
                  | 'zw';
              }

              interface Kanji {
                /**
                 * City, district, suburb, town, or village.
                 */
                city?: string;

                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country: Kanji.Country;

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
                 * Town or cho-me.
                 */
                town?: string;
              }

              namespace Kanji {
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
                  | 'ye'
                  | 'yt'
                  | 'za'
                  | 'zm'
                  | 'zw';
              }
            }

            interface ScriptNames {
              /**
               * Persons name in kana script.
               */
              kana?: ScriptNames.Kana;

              /**
               * Persons name in kanji script.
               */
              kanji?: ScriptNames.Kanji;
            }

            namespace ScriptNames {
              interface Kana {
                /**
                 * The person's first or given name.
                 */
                given_name?: string;

                /**
                 * The person's last or family name.
                 */
                surname?: string;
              }

              interface Kanji {
                /**
                 * The person's first or given name.
                 */
                given_name?: string;

                /**
                 * The person's last or family name.
                 */
                surname?: string;
              }
            }
          }
        }
      }

      namespace Core {
        namespace Accounts {
          interface PersonRetrieveParams {}
        }
      }

      namespace Core {
        namespace Accounts {
          interface PersonUpdateParams {
            /**
             * Additional addresses associated with the person.
             */
            additional_addresses?: Array<PersonUpdateParams.AdditionalAddress>;

            /**
             * Additional names (e.g. aliases) associated with the person.
             */
            additional_names?: Array<PersonUpdateParams.AdditionalName>;

            /**
             * Attestations of accepted terms of service agreements.
             */
            additional_terms_of_service?: PersonUpdateParams.AdditionalTermsOfService;

            /**
             * The primary address associated with the person.
             */
            address?: PersonUpdateParams.Address;

            /**
             * The person's date of birth.
             */
            date_of_birth?: PersonUpdateParams.DateOfBirth;

            /**
             * Documents that may be submitted to satisfy various informational requests.
             */
            documents?: PersonUpdateParams.Documents;

            /**
             * Email.
             */
            email?: string;

            /**
             * The person's first name.
             */
            given_name?: string;

            /**
             * The identification numbers (e.g., SSN) associated with the person.
             */
            id_numbers?: Array<PersonUpdateParams.IdNumber>;

            /**
             * The person's gender (International regulations require either "male" or "female").
             */
            legal_gender?: PersonUpdateParams.LegalGender;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata?: Stripe.MetadataParam;

            /**
             * The nationalities (countries) this person is associated with.
             */
            nationalities?: Array<PersonUpdateParams.Nationality>;

            /**
             * The phone number for this person.
             */
            phone?: string;

            /**
             * The person's political exposure.
             */
            political_exposure?: PersonUpdateParams.PoliticalExposure;

            /**
             * The relationship that this person has with the Account's business or legal entity.
             */
            relationship?: PersonUpdateParams.Relationship;

            /**
             * The script addresses (e.g., non-Latin characters) associated with the person.
             */
            script_addresses?: PersonUpdateParams.ScriptAddresses | null;

            /**
             * The script names (e.g. non-Latin characters) associated with the person.
             */
            script_names?: PersonUpdateParams.ScriptNames | null;

            /**
             * The person's last name.
             */
            surname?: string;
          }

          namespace PersonUpdateParams {
            interface AdditionalAddress {
              /**
               * City, district, suburb, town, or village.
               */
              city?: string | null;

              /**
               * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
               */
              country?: AdditionalAddress.Country | null;

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
               * Purpose of additional address.
               */
              purpose: 'registered';

              /**
               * State, county, province, or region.
               */
              state?: string | null;

              /**
               * Town or cho-me.
               */
              town?: string | null;
            }

            namespace AdditionalAddress {
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
                | 'ye'
                | 'yt'
                | 'za'
                | 'zm'
                | 'zw';
            }

            interface AdditionalName {
              /**
               * The person's full name.
               */
              full_name?: string;

              /**
               * The person's first or given name.
               */
              given_name?: string;

              /**
               * The purpose or type of the additional name.
               */
              purpose: AdditionalName.Purpose;

              /**
               * The person's last or family name.
               */
              surname?: string;
            }

            namespace AdditionalName {
              type Purpose = 'alias' | 'maiden';
            }

            interface AdditionalTermsOfService {
              /**
               * Stripe terms of service agreement.
               */
              account?: AdditionalTermsOfService.Account;
            }

            namespace AdditionalTermsOfService {
              interface Account {
                /**
                 * The time when the Account's representative accepted the terms of service. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
                 */
                date?: string;

                /**
                 * The IP address from which the Account's representative accepted the terms of service.
                 */
                ip?: string;

                /**
                 * The user agent of the browser from which the Account's representative accepted the terms of service.
                 */
                user_agent?: string;
              }
            }

            interface Address {
              /**
               * City, district, suburb, town, or village.
               */
              city?: string | null;

              /**
               * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
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
               * Town or cho-me.
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
                | 'ye'
                | 'yt'
                | 'za'
                | 'zm'
                | 'zw';
            }

            interface DateOfBirth {
              /**
               * The day of the birth.
               */
              day: number;

              /**
               * The month of birth.
               */
              month: number;

              /**
               * The year of birth.
               */
              year: number;
            }

            interface Documents {
              /**
               * One or more documents that demonstrate proof that this person is authorized to represent the company.
               */
              company_authorization?: Documents.CompanyAuthorization;

              /**
               * One or more documents showing the person's passport page with photo and personal data.
               */
              passport?: Documents.Passport;

              /**
               * An identifying document showing the person's name, either a passport or local ID card.
               */
              primary_verification?: Documents.PrimaryVerification | null;

              /**
               * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
               */
              secondary_verification?: Documents.SecondaryVerification | null;

              /**
               * One or more documents showing the person's visa required for living in the country where they are residing.
               */
              visa?: Documents.Visa;
            }

            namespace Documents {
              interface CompanyAuthorization {
                /**
                 * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                 */
                files: Array<string>;

                /**
                 * The format of the document. Currently supports `files` only.
                 */
                type: 'files';
              }

              interface Passport {
                /**
                 * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                 */
                files: Array<string>;

                /**
                 * The format of the document. Currently supports `files` only.
                 */
                type: 'files';
              }

              interface PrimaryVerification {
                /**
                 * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens referring to each side of the document.
                 */
                front_back: PrimaryVerification.FrontBack;

                /**
                 * The format of the verification document. Currently supports `front_back` only.
                 */
                type: 'front_back';
              }

              namespace PrimaryVerification {
                interface FrontBack {
                  /**
                   * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the back of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                   */
                  back?: string | null;

                  /**
                   * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                   */
                  front?: string;
                }
              }

              interface SecondaryVerification {
                /**
                 * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens referring to each side of the document.
                 */
                front_back: SecondaryVerification.FrontBack;

                /**
                 * The format of the verification document. Currently supports `front_back` only.
                 */
                type: 'front_back';
              }

              namespace SecondaryVerification {
                interface FrontBack {
                  /**
                   * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the back of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                   */
                  back?: string | null;

                  /**
                   * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                   */
                  front?: string;
                }
              }

              interface Visa {
                /**
                 * One or more document IDs returned by a [file upload](https://docs.stripe.com/api/persons/update#create_file) with a purpose value of `account_requirement`.
                 */
                files: Array<string>;

                /**
                 * The format of the document. Currently supports `files` only.
                 */
                type: 'files';
              }
            }

            interface IdNumber {
              /**
               * The ID number type of an individual.
               */
              type: IdNumber.Type;

              /**
               * The value of the ID number.
               */
              value: string;
            }

            namespace IdNumber {
              type Type =
                | 'ae_eid'
                | 'br_cpf'
                | 'de_stn'
                | 'hk_id'
                | 'mx_rfc'
                | 'my_nric'
                | 'nl_bsn'
                | 'sg_fin'
                | 'sg_nric'
                | 'th_lc'
                | 'th_pin'
                | 'us_itin'
                | 'us_itin_last_4'
                | 'us_ssn'
                | 'us_ssn_last_4';
            }

            type LegalGender = 'female' | 'male';

            type Nationality =
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
              | 'ye'
              | 'yt'
              | 'za'
              | 'zm'
              | 'zw';

            type PoliticalExposure = 'existing' | 'none';

            interface Relationship {
              /**
               * Indicates whether the person is a director of the associated legal entity.
               */
              director?: boolean;

              /**
               * Indicates whether the person is an executive of the associated legal entity.
               */
              executive?: boolean;

              /**
               * Indicates whether the person is a legal guardian of the associated legal entity.
               */
              legal_guardian?: boolean;

              /**
               * Indicates whether the person is an owner of the associated legal entity.
               */
              owner?: boolean;

              /**
               * The percentage of ownership the person has in the associated legal entity.
               */
              percent_ownership?: string;

              /**
               * Indicates whether the person is a representative of the associated legal entity.
               */
              representative?: boolean;

              /**
               * The title or position the person holds in the associated legal entity.
               */
              title?: string;
            }

            interface ScriptAddresses {
              /**
               * Kana Address.
               */
              kana?: ScriptAddresses.Kana | null;

              /**
               * Kanji Address.
               */
              kanji?: ScriptAddresses.Kanji | null;
            }

            namespace ScriptAddresses {
              interface Kana {
                /**
                 * City, district, suburb, town, or village.
                 */
                city?: string | null;

                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country?: Kana.Country | null;

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
                 * Town or cho-me.
                 */
                town?: string | null;
              }

              namespace Kana {
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
                  | 'ye'
                  | 'yt'
                  | 'za'
                  | 'zm'
                  | 'zw';
              }

              interface Kanji {
                /**
                 * City, district, suburb, town, or village.
                 */
                city?: string | null;

                /**
                 * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
                 */
                country?: Kanji.Country | null;

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
                 * Town or cho-me.
                 */
                town?: string | null;
              }

              namespace Kanji {
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
                  | 'ye'
                  | 'yt'
                  | 'za'
                  | 'zm'
                  | 'zw';
              }
            }

            interface ScriptNames {
              /**
               * Persons name in kana script.
               */
              kana?: ScriptNames.Kana | null;

              /**
               * Persons name in kanji script.
               */
              kanji?: ScriptNames.Kanji | null;
            }

            namespace ScriptNames {
              interface Kana {
                /**
                 * The person's first or given name.
                 */
                given_name?: string | null;

                /**
                 * The person's last or family name.
                 */
                surname?: string | null;
              }

              interface Kanji {
                /**
                 * The person's first or given name.
                 */
                given_name?: string | null;

                /**
                 * The person's last or family name.
                 */
                surname?: string | null;
              }
            }
          }
        }
      }

      namespace Core {
        namespace Accounts {
          interface PersonListParams {
            /**
             * The upper limit on the number of accounts returned by the List Account request.
             */
            limit?: number;
          }
        }
      }

      namespace Core {
        namespace Accounts {
          interface PersonDeleteParams {}
        }
      }

      namespace Core {
        namespace Accounts {
          class PersonsResource {
            /**
             * Create a Person associated with an Account.
             */
            create(
              id: string,
              params?: PersonCreateParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Person>>;
            create(
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Person>>;

            /**
             * Retrieves a Person associated with an Account.
             */
            retrieve(
              accountId: string,
              id: string,
              params?: PersonRetrieveParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Person>>;
            retrieve(
              accountId: string,
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Person>>;

            /**
             * Updates a Person associated with an Account.
             */
            update(
              accountId: string,
              id: string,
              params?: PersonUpdateParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Person>>;

            /**
             * Returns a list of Persons associated with an Account.
             */
            list(
              id: string,
              params?: PersonListParams,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Core.Person>;
            list(
              id: string,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Core.Person>;

            /**
             * Delete a Person associated with an Account.
             */
            del(
              accountId: string,
              id: string,
              params?: PersonDeleteParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Person>>;
            del(
              accountId: string,
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Core.Person>>;
          }
        }
      }
    }
  }
}
