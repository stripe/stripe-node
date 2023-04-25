// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      interface RegistrationCreateParams {
        /**
         * Time at which the Tax Registration becomes active. Measured in seconds since the Unix epoch.
         */
        active_from: number | 'now';

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country: string;

        /**
         * Specific options for a registration in the specified `country`.
         */
        country_options: RegistrationCreateParams.CountryOptions;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * If set, the Tax Registration stops being active at this time. If not set, the Tax Registration will be active indefinitely. Measured in seconds since the Unix epoch.
         */
        expires_at?: number;
      }

      namespace RegistrationCreateParams {
        interface CountryOptions {
          /**
           * Options for the registration in AE.
           */
          ae?: CountryOptions.Ae;

          /**
           * Options for the registration in AT.
           */
          at?: CountryOptions.At;

          /**
           * Options for the registration in AU.
           */
          au?: CountryOptions.Au;

          /**
           * Options for the registration in BE.
           */
          be?: CountryOptions.Be;

          /**
           * Options for the registration in BG.
           */
          bg?: CountryOptions.Bg;

          /**
           * Options for the registration in CA.
           */
          ca?: CountryOptions.Ca;

          /**
           * Options for the registration in CH.
           */
          ch?: CountryOptions.Ch;

          /**
           * Options for the registration in CY.
           */
          cy?: CountryOptions.Cy;

          /**
           * Options for the registration in CZ.
           */
          cz?: CountryOptions.Cz;

          /**
           * Options for the registration in DE.
           */
          de?: CountryOptions.De;

          /**
           * Options for the registration in DK.
           */
          dk?: CountryOptions.Dk;

          /**
           * Options for the registration in EE.
           */
          ee?: CountryOptions.Ee;

          /**
           * Options for the registration in ES.
           */
          es?: CountryOptions.Es;

          /**
           * Options for the registration in FI.
           */
          fi?: CountryOptions.Fi;

          /**
           * Options for the registration in FR.
           */
          fr?: CountryOptions.Fr;

          /**
           * Options for the registration in GB.
           */
          gb?: CountryOptions.Gb;

          /**
           * Options for the registration in GR.
           */
          gr?: CountryOptions.Gr;

          /**
           * Options for the registration in HK.
           */
          hk?: CountryOptions.Hk;

          /**
           * Options for the registration in HR.
           */
          hr?: CountryOptions.Hr;

          /**
           * Options for the registration in HU.
           */
          hu?: CountryOptions.Hu;

          /**
           * Options for the registration in IE.
           */
          ie?: CountryOptions.Ie;

          /**
           * Options for the registration in IS.
           */
          is?: CountryOptions.Is;

          /**
           * Options for the registration in IT.
           */
          it?: CountryOptions.It;

          /**
           * Options for the registration in JP.
           */
          jp?: CountryOptions.Jp;

          /**
           * Options for the registration in LT.
           */
          lt?: CountryOptions.Lt;

          /**
           * Options for the registration in LU.
           */
          lu?: CountryOptions.Lu;

          /**
           * Options for the registration in LV.
           */
          lv?: CountryOptions.Lv;

          /**
           * Options for the registration in MT.
           */
          mt?: CountryOptions.Mt;

          /**
           * Options for the registration in NL.
           */
          nl?: CountryOptions.Nl;

          /**
           * Options for the registration in NO.
           */
          no?: CountryOptions.No;

          /**
           * Options for the registration in NZ.
           */
          nz?: CountryOptions.Nz;

          /**
           * Options for the registration in PL.
           */
          pl?: CountryOptions.Pl;

          /**
           * Options for the registration in PT.
           */
          pt?: CountryOptions.Pt;

          /**
           * Options for the registration in RO.
           */
          ro?: CountryOptions.Ro;

          /**
           * Options for the registration in SE.
           */
          se?: CountryOptions.Se;

          /**
           * Options for the registration in SG.
           */
          sg?: CountryOptions.Sg;

          /**
           * Options for the registration in SI.
           */
          si?: CountryOptions.Si;

          /**
           * Options for the registration in SK.
           */
          sk?: CountryOptions.Sk;

          /**
           * Options for the registration in US.
           */
          us?: CountryOptions.Us;

          /**
           * Options for the registration in ZA.
           */
          za?: CountryOptions.Za;
        }

        namespace CountryOptions {
          interface Ae {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          interface At {
            /**
             * Options for the standard registration.
             */
            standard?: At.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: At.Type;
          }

          namespace At {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Au {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          interface Be {
            /**
             * Options for the standard registration.
             */
            standard?: Be.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Be.Type;
          }

          namespace Be {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Bg {
            /**
             * Options for the standard registration.
             */
            standard?: Bg.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Bg.Type;
          }

          namespace Bg {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Ca {
            /**
             * Options for the provincial tax registration.
             */
            province_standard?: Ca.ProvinceStandard;

            /**
             * Type of registration to be created in Canada.
             */
            type: Ca.Type;
          }

          namespace Ca {
            interface ProvinceStandard {
              /**
               * Two-letter CA province code ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
               */
              province: string;
            }

            type Type = 'province_standard' | 'simplified' | 'standard';
          }

          interface Ch {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          interface Cy {
            /**
             * Options for the standard registration.
             */
            standard?: Cy.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Cy.Type;
          }

          namespace Cy {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Cz {
            /**
             * Options for the standard registration.
             */
            standard?: Cz.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Cz.Type;
          }

          namespace Cz {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface De {
            /**
             * Options for the standard registration.
             */
            standard?: De.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: De.Type;
          }

          namespace De {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Dk {
            /**
             * Options for the standard registration.
             */
            standard?: Dk.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Dk.Type;
          }

          namespace Dk {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Ee {
            /**
             * Options for the standard registration.
             */
            standard?: Ee.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Ee.Type;
          }

          namespace Ee {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Es {
            /**
             * Options for the standard registration.
             */
            standard?: Es.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Es.Type;
          }

          namespace Es {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Fi {
            /**
             * Options for the standard registration.
             */
            standard?: Fi.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Fi.Type;
          }

          namespace Fi {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Fr {
            /**
             * Options for the standard registration.
             */
            standard?: Fr.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Fr.Type;
          }

          namespace Fr {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Gb {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          interface Gr {
            /**
             * Options for the standard registration.
             */
            standard?: Gr.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Gr.Type;
          }

          namespace Gr {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Hk {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          interface Hr {
            /**
             * Options for the standard registration.
             */
            standard?: Hr.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Hr.Type;
          }

          namespace Hr {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Hu {
            /**
             * Options for the standard registration.
             */
            standard?: Hu.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Hu.Type;
          }

          namespace Hu {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Ie {
            /**
             * Options for the standard registration.
             */
            standard?: Ie.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Ie.Type;
          }

          namespace Ie {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Is {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          interface It {
            /**
             * Options for the standard registration.
             */
            standard?: It.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: It.Type;
          }

          namespace It {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Jp {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          interface Lt {
            /**
             * Options for the standard registration.
             */
            standard?: Lt.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Lt.Type;
          }

          namespace Lt {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Lu {
            /**
             * Options for the standard registration.
             */
            standard?: Lu.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Lu.Type;
          }

          namespace Lu {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Lv {
            /**
             * Options for the standard registration.
             */
            standard?: Lv.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Lv.Type;
          }

          namespace Lv {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Mt {
            /**
             * Options for the standard registration.
             */
            standard?: Mt.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Mt.Type;
          }

          namespace Mt {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Nl {
            /**
             * Options for the standard registration.
             */
            standard?: Nl.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Nl.Type;
          }

          namespace Nl {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface No {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          interface Nz {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          interface Pl {
            /**
             * Options for the standard registration.
             */
            standard?: Pl.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Pl.Type;
          }

          namespace Pl {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Pt {
            /**
             * Options for the standard registration.
             */
            standard?: Pt.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Pt.Type;
          }

          namespace Pt {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Ro {
            /**
             * Options for the standard registration.
             */
            standard?: Ro.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Ro.Type;
          }

          namespace Ro {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Se {
            /**
             * Options for the standard registration.
             */
            standard?: Se.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Se.Type;
          }

          namespace Se {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Sg {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          interface Si {
            /**
             * Options for the standard registration.
             */
            standard?: Si.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Si.Type;
          }

          namespace Si {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Sk {
            /**
             * Options for the standard registration.
             */
            standard?: Sk.Standard;

            /**
             * Type of registration to be created in an EU country.
             */
            type: Sk.Type;
          }

          namespace Sk {
            interface Standard {
              /**
               * Place of supply scheme used in an EU standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'small_seller' | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Us {
            /**
             * Options for the local lease tax registration.
             */
            local_lease_tax?: Us.LocalLeaseTax;

            /**
             * Two-letter US state code ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
             */
            state: string;

            /**
             * Type of registration to be created in the US.
             */
            type: 'state_sales_tax';
          }

          namespace Us {
            interface LocalLeaseTax {
              /**
               * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction.
               */
              jurisdiction: string;
            }
          }

          interface Za {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }
        }
      }

      interface RegistrationUpdateParams {
        /**
         * Time at which the registration becomes active. Measured in seconds since the Unix epoch.
         */
        active_from?: number | 'now';

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * If set, the registration stops being active at this time. If not set, the registration will be active indefinitely. Measured in seconds since the Unix epoch.
         */
        expires_at?: Stripe.Emptyable<number | 'now'>;
      }

      interface RegistrationListParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The status of the Tax Registration.
         */
        status?: RegistrationListParams.Status;
      }

      namespace RegistrationListParams {
        type Status = 'active' | 'all' | 'expired' | 'scheduled';
      }

      class RegistrationsResource {
        /**
         * Creates a new Tax Registration object.
         */
        create(
          params: RegistrationCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Registration>>;

        /**
         * Updates an existing Tax Registration object.
         *
         * A registration cannot be deleted after it has been created. If you wish to end a registration you may do so by setting expires_at.
         */
        update(
          id: string,
          params?: RegistrationUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Registration>>;

        /**
         * Returns a list of Tax Registration objects.
         */
        list(
          params?: RegistrationListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Tax.Registration>;
        list(options?: RequestOptions): ApiListPromise<Stripe.Tax.Registration>;
      }
    }
  }
}
