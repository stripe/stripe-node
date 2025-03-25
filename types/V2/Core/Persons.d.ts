// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        /**
         * Person retrieval response schema.
         */
        interface Person {
          /**
           * Unique identifier for the Person.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.core.account_person';

          /**
           * The account ID which the individual belongs to.
           */
          account: string;

          /**
           * Additional addresses associated with the person.
           */
          additional_addresses: Array<Person.AdditionalAddress> | null;

          /**
           * Additional names (e.g. aliases) associated with the person.
           */
          additional_names: Array<Person.AdditionalName> | null;

          /**
           * Attestations of accepted terms of service agreements.
           */
          additional_terms_of_service: Person.AdditionalTermsOfService | null;

          /**
           * The person's residential address.
           */
          address: Person.Address | null;

          /**
           * Time at which the object was created. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
           */
          created: string;

          /**
           * The person's date of birth.
           */
          date_of_birth: Person.DateOfBirth | null;

          /**
           * Documents that may be submitted to satisfy various informational requests.
           */
          documents: Person.Documents | null;

          /**
           * The person's email address.
           */
          email: string | null;

          /**
           * The person's first name.
           */
          given_name: string | null;

          /**
           * The identification numbers (e.g., SSN) associated with the person.
           */
          id_numbers: Array<Person.IdNumber> | null;

          /**
           * The person's gender (International regulations require either "male" or "female").
           */
          legal_gender: Person.LegalGender | null;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata: Stripe.Metadata | null;

          /**
           * The countries where the person is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
           */
          nationalities: Array<Person.Nationality> | null;

          /**
           * The person's phone number.
           */
          phone: string | null;

          /**
           * The person's political exposure.
           */
          political_exposure: Person.PoliticalExposure | null;

          /**
           * The relationship that this person has with the Account's business or legal entity.
           */
          relationship: Person.Relationship | null;

          /**
           * The script addresses (e.g., non-Latin characters) associated with the person.
           */
          script_addresses: Person.ScriptAddresses | null;

          /**
           * The script names (e.g. non-Latin characters) associated with the person.
           */
          script_names: Person.ScriptNames | null;

          /**
           * The person's last name.
           */
          surname: string | null;

          /**
           * Time at which the object was last updated. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
           */
          updated: string;
        }

        namespace Person {
          interface AdditionalAddress {
            /**
             * City, district, suburb, town, or village.
             */
            city: string | null;

            /**
             * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
             */
            country: AdditionalAddress.Country | null;

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
             * Purpose of additional address.
             */
            purpose: 'registered';

            /**
             * State, county, province, or region.
             */
            state: string | null;

            /**
             * Town or cho-me.
             */
            town: string | null;
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
             * The individual's full name.
             */
            full_name: string | null;

            /**
             * The individual's first or given name.
             */
            given_name: string | null;

            /**
             * The purpose or type of the additional name.
             */
            purpose: AdditionalName.Purpose;

            /**
             * The individual's last or family name.
             */
            surname: string | null;
          }

          namespace AdditionalName {
            type Purpose = 'alias' | 'maiden';
          }

          interface AdditionalTermsOfService {
            /**
             * Stripe terms of service agreement.
             */
            account: AdditionalTermsOfService.Account | null;
          }

          namespace AdditionalTermsOfService {
            interface Account {
              /**
               * The time when the Account's representative accepted the terms of service. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
               */
              date: string | null;

              /**
               * The IP address from which the Account's representative accepted the terms of service.
               */
              ip: string | null;

              /**
               * The user agent of the browser from which the Account's representative accepted the terms of service.
               */
              user_agent: string | null;
            }
          }

          interface Address {
            /**
             * City, district, suburb, town, or village.
             */
            city: string | null;

            /**
             * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
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
             * Town or cho-me.
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
              | 'ye'
              | 'yt'
              | 'za'
              | 'zm'
              | 'zw';
          }

          interface DateOfBirth {
            /**
             * The day of birth, between 1 and 31.
             */
            day: number;

            /**
             * The month of birth, between 1 and 12.
             */
            month: number;

            /**
             * The four-digit year of birth.
             */
            year: number;
          }

          interface Documents {
            /**
             * One or more documents that demonstrate proof that this person is authorized to represent the company.
             */
            company_authorization: Documents.CompanyAuthorization | null;

            /**
             * One or more documents showing the person's passport page with photo and personal data.
             */
            passport: Documents.Passport | null;

            /**
             * An identifying document showing the person's name, either a passport or local ID card.
             */
            primary_verification: Documents.PrimaryVerification | null;

            /**
             * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
             */
            secondary_verification: Documents.SecondaryVerification | null;

            /**
             * One or more documents showing the person's visa required for living in the country where they are residing.
             */
            visa: Documents.Visa | null;
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
               * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens for the front and back of the verification document.
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
                back: string | null;

                /**
                 * A [file upload](https://docs.stripe.com/api/persons/update#create_file) token representing the front of the verification document. The purpose of the uploaded file should be 'identity_document'. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
                 */
                front: string;
              }
            }

            interface SecondaryVerification {
              /**
               * The [file upload](https://docs.stripe.com/api/persons/update#create_file) tokens for the front and back of the verification document.
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
                back: string | null;

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
             * Whether the individual is a director of the Account's legal entity. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
             */
            director: boolean | null;

            /**
             * Whether the individual has significant responsibility to control, manage, or direct the organization.
             */
            executive: boolean | null;

            /**
             * Whether the individual is the legal guardian of the Account's representative.
             */
            legal_guardian: boolean | null;

            /**
             * Whether the individual is an owner of the Account's legal entity.
             */
            owner: boolean | null;

            /**
             * The percent owned by the individual of the Account's legal entity.
             */
            percent_ownership: string | null;

            /**
             * Whether the individual is authorized as the primary representative of the Account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
             */
            representative: boolean | null;

            /**
             * The individual's title (e.g., CEO, Support Engineer).
             */
            title: string | null;
          }

          interface ScriptAddresses {
            /**
             * Kana Address.
             */
            kana: ScriptAddresses.Kana | null;

            /**
             * Kanji Address.
             */
            kanji: ScriptAddresses.Kanji | null;
          }

          namespace ScriptAddresses {
            interface Kana {
              /**
               * City, district, suburb, town, or village.
               */
              city: string | null;

              /**
               * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
               */
              country: Kana.Country | null;

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
               * Town or cho-me.
               */
              town: string | null;
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
              city: string | null;

              /**
               * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
               */
              country: Kanji.Country | null;

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
               * Town or cho-me.
               */
              town: string | null;
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
            kana: ScriptNames.Kana | null;

            /**
             * Persons name in kanji script.
             */
            kanji: ScriptNames.Kanji | null;
          }

          namespace ScriptNames {
            interface Kana {
              /**
               * The person's first or given name.
               */
              given_name: string | null;

              /**
               * The person's last or family name.
               */
              surname: string | null;
            }

            interface Kanji {
              /**
               * The person's first or given name.
               */
              given_name: string | null;

              /**
               * The person's last or family name.
               */
              surname: string | null;
            }
          }
        }
      }
    }
  }
}
