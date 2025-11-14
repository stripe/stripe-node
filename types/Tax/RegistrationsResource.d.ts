// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      interface RegistrationCreateParams {
        /**
         * Time at which the Tax Registration becomes active. It can be either `now` to indicate the current time, or a future timestamp measured in seconds since the Unix epoch.
         */
        active_from: 'now' | number;

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
         * If set, the Tax Registration stops being active at this time. If not set, the Tax Registration will be active indefinitely. Timestamp measured in seconds since the Unix epoch.
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
           * Options for the registration in AL.
           */
          al?: CountryOptions.Al;

          /**
           * Options for the registration in AM.
           */
          am?: CountryOptions.Am;

          /**
           * Options for the registration in AO.
           */
          ao?: CountryOptions.Ao;

          /**
           * Options for the registration in AT.
           */
          at?: CountryOptions.At;

          /**
           * Options for the registration in AU.
           */
          au?: CountryOptions.Au;

          /**
           * Options for the registration in AW.
           */
          aw?: CountryOptions.Aw;

          /**
           * Options for the registration in AZ.
           */
          az?: CountryOptions.Az;

          /**
           * Options for the registration in BA.
           */
          ba?: CountryOptions.Ba;

          /**
           * Options for the registration in BB.
           */
          bb?: CountryOptions.Bb;

          /**
           * Options for the registration in BD.
           */
          bd?: CountryOptions.Bd;

          /**
           * Options for the registration in BE.
           */
          be?: CountryOptions.Be;

          /**
           * Options for the registration in BF.
           */
          bf?: CountryOptions.Bf;

          /**
           * Options for the registration in BG.
           */
          bg?: CountryOptions.Bg;

          /**
           * Options for the registration in BH.
           */
          bh?: CountryOptions.Bh;

          /**
           * Options for the registration in BJ.
           */
          bj?: CountryOptions.Bj;

          /**
           * Options for the registration in BS.
           */
          bs?: CountryOptions.Bs;

          /**
           * Options for the registration in BY.
           */
          by?: CountryOptions.By;

          /**
           * Options for the registration in CA.
           */
          ca?: CountryOptions.Ca;

          /**
           * Options for the registration in CD.
           */
          cd?: CountryOptions.Cd;

          /**
           * Options for the registration in CH.
           */
          ch?: CountryOptions.Ch;

          /**
           * Options for the registration in CL.
           */
          cl?: CountryOptions.Cl;

          /**
           * Options for the registration in CM.
           */
          cm?: CountryOptions.Cm;

          /**
           * Options for the registration in CO.
           */
          co?: CountryOptions.Co;

          /**
           * Options for the registration in CR.
           */
          cr?: CountryOptions.Cr;

          /**
           * Options for the registration in CV.
           */
          cv?: CountryOptions.Cv;

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
           * Options for the registration in EC.
           */
          ec?: CountryOptions.Ec;

          /**
           * Options for the registration in EE.
           */
          ee?: CountryOptions.Ee;

          /**
           * Options for the registration in EG.
           */
          eg?: CountryOptions.Eg;

          /**
           * Options for the registration in ES.
           */
          es?: CountryOptions.Es;

          /**
           * Options for the registration in ET.
           */
          et?: CountryOptions.Et;

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
           * Options for the registration in GE.
           */
          ge?: CountryOptions.Ge;

          /**
           * Options for the registration in GN.
           */
          gn?: CountryOptions.Gn;

          /**
           * Options for the registration in GR.
           */
          gr?: CountryOptions.Gr;

          /**
           * Options for the registration in HR.
           */
          hr?: CountryOptions.Hr;

          /**
           * Options for the registration in HU.
           */
          hu?: CountryOptions.Hu;

          /**
           * Options for the registration in ID.
           */
          id?: CountryOptions.Id;

          /**
           * Options for the registration in IE.
           */
          ie?: CountryOptions.Ie;

          /**
           * Options for the registration in IN.
           */
          in?: CountryOptions.In;

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
           * Options for the registration in KE.
           */
          ke?: CountryOptions.Ke;

          /**
           * Options for the registration in KG.
           */
          kg?: CountryOptions.Kg;

          /**
           * Options for the registration in KH.
           */
          kh?: CountryOptions.Kh;

          /**
           * Options for the registration in KR.
           */
          kr?: CountryOptions.Kr;

          /**
           * Options for the registration in KZ.
           */
          kz?: CountryOptions.Kz;

          /**
           * Options for the registration in LA.
           */
          la?: CountryOptions.La;

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
           * Options for the registration in MA.
           */
          ma?: CountryOptions.Ma;

          /**
           * Options for the registration in MD.
           */
          md?: CountryOptions.Md;

          /**
           * Options for the registration in ME.
           */
          me?: CountryOptions.Me;

          /**
           * Options for the registration in MK.
           */
          mk?: CountryOptions.Mk;

          /**
           * Options for the registration in MR.
           */
          mr?: CountryOptions.Mr;

          /**
           * Options for the registration in MT.
           */
          mt?: CountryOptions.Mt;

          /**
           * Options for the registration in MX.
           */
          mx?: CountryOptions.Mx;

          /**
           * Options for the registration in MY.
           */
          my?: CountryOptions.My;

          /**
           * Options for the registration in NG.
           */
          ng?: CountryOptions.Ng;

          /**
           * Options for the registration in NL.
           */
          nl?: CountryOptions.Nl;

          /**
           * Options for the registration in NO.
           */
          no?: CountryOptions.No;

          /**
           * Options for the registration in NP.
           */
          np?: CountryOptions.Np;

          /**
           * Options for the registration in NZ.
           */
          nz?: CountryOptions.Nz;

          /**
           * Options for the registration in OM.
           */
          om?: CountryOptions.Om;

          /**
           * Options for the registration in PE.
           */
          pe?: CountryOptions.Pe;

          /**
           * Options for the registration in PH.
           */
          ph?: CountryOptions.Ph;

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
           * Options for the registration in RS.
           */
          rs?: CountryOptions.Rs;

          /**
           * Options for the registration in RU.
           */
          ru?: CountryOptions.Ru;

          /**
           * Options for the registration in SA.
           */
          sa?: CountryOptions.Sa;

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
           * Options for the registration in SN.
           */
          sn?: CountryOptions.Sn;

          /**
           * Options for the registration in SR.
           */
          sr?: CountryOptions.Sr;

          /**
           * Options for the registration in TH.
           */
          th?: CountryOptions.Th;

          /**
           * Options for the registration in TJ.
           */
          tj?: CountryOptions.Tj;

          /**
           * Options for the registration in TR.
           */
          tr?: CountryOptions.Tr;

          /**
           * Options for the registration in TW.
           */
          tw?: CountryOptions.Tw;

          /**
           * Options for the registration in TZ.
           */
          tz?: CountryOptions.Tz;

          /**
           * Options for the registration in UA.
           */
          ua?: CountryOptions.Ua;

          /**
           * Options for the registration in UG.
           */
          ug?: CountryOptions.Ug;

          /**
           * Options for the registration in US.
           */
          us?: CountryOptions.Us;

          /**
           * Options for the registration in UY.
           */
          uy?: CountryOptions.Uy;

          /**
           * Options for the registration in UZ.
           */
          uz?: CountryOptions.Uz;

          /**
           * Options for the registration in VN.
           */
          vn?: CountryOptions.Vn;

          /**
           * Options for the registration in ZA.
           */
          za?: CountryOptions.Za;

          /**
           * Options for the registration in ZM.
           */
          zm?: CountryOptions.Zm;

          /**
           * Options for the registration in ZW.
           */
          zw?: CountryOptions.Zw;
        }

        namespace CountryOptions {
          interface Ae {
            /**
             * Options for the standard registration.
             */
            standard?: Ae.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Ae {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Al {
            /**
             * Options for the standard registration.
             */
            standard?: Al.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Al {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Am {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Ao {
            /**
             * Options for the standard registration.
             */
            standard?: Ao.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Ao {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Au {
            /**
             * Options for the standard registration.
             */
            standard?: Au.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Au {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Aw {
            /**
             * Options for the standard registration.
             */
            standard?: Aw.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Aw {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Az {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Ba {
            /**
             * Options for the standard registration.
             */
            standard?: Ba.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Ba {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Bb {
            /**
             * Options for the standard registration.
             */
            standard?: Bb.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Bb {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Bd {
            /**
             * Options for the standard registration.
             */
            standard?: Bd.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Bd {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Bf {
            /**
             * Options for the standard registration.
             */
            standard?: Bf.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Bf {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Bh {
            /**
             * Options for the standard registration.
             */
            standard?: Bh.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Bh {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Bj {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Bs {
            /**
             * Options for the standard registration.
             */
            standard?: Bs.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Bs {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface By {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
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

          interface Cd {
            /**
             * Options for the standard registration.
             */
            standard?: Cd.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Cd {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Ch {
            /**
             * Options for the standard registration.
             */
            standard?: Ch.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Ch {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Cl {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Cm {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Co {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Cr {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Cv {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Ec {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Eg {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Et {
            /**
             * Options for the standard registration.
             */
            standard?: Et.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Et {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Gb {
            /**
             * Options for the standard registration.
             */
            standard?: Gb.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Gb {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Ge {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Gn {
            /**
             * Options for the standard registration.
             */
            standard?: Gn.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Gn {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Id {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface In {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Is {
            /**
             * Options for the standard registration.
             */
            standard?: Is.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Is {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Jp {
            /**
             * Options for the standard registration.
             */
            standard?: Jp.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Jp {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Ke {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Kg {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Kh {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Kr {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Kz {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface La {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Ma {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Md {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Me {
            /**
             * Options for the standard registration.
             */
            standard?: Me.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Me {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Mk {
            /**
             * Options for the standard registration.
             */
            standard?: Mk.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Mk {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Mr {
            /**
             * Options for the standard registration.
             */
            standard?: Mr.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Mr {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Mx {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface My {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Ng {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface No {
            /**
             * Options for the standard registration.
             */
            standard?: No.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace No {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Np {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Nz {
            /**
             * Options for the standard registration.
             */
            standard?: Nz.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Nz {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Om {
            /**
             * Options for the standard registration.
             */
            standard?: Om.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Om {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Pe {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Ph {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Rs {
            /**
             * Options for the standard registration.
             */
            standard?: Rs.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Rs {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Ru {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Sa {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Sg {
            /**
             * Options for the standard registration.
             */
            standard?: Sg.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Sg {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
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
              type PlaceOfSupplyScheme =
                | 'inbound_goods'
                | 'small_seller'
                | 'standard';
            }

            type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
          }

          interface Sn {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Sr {
            /**
             * Options for the standard registration.
             */
            standard?: Sr.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Sr {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Th {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Tj {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Tr {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Tw {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Tz {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Ua {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Ug {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Us {
            /**
             * Options for the local amusement tax registration.
             */
            local_amusement_tax?: Us.LocalAmusementTax;

            /**
             * Options for the local lease tax registration.
             */
            local_lease_tax?: Us.LocalLeaseTax;

            /**
             * Two-letter US state code ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
             */
            state: string;

            /**
             * Options for the state sales tax registration.
             */
            state_sales_tax?: Us.StateSalesTax;

            /**
             * Type of registration to be created in the US.
             */
            type: Us.Type;
          }

          namespace Us {
            interface LocalAmusementTax {
              /**
               * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction. Supported FIPS codes are: `14000` (Chicago), `02154` (Arlington Heights), `06613` (Bloomington), `10906` (Campton Hills), `21696` (East Dundee), `24582` (Evanston), `45421` (Lynwood), `48892` (Midlothian), `64343` (River Grove), and `68081` (Schiller Park).
               */
              jurisdiction: string;
            }

            interface LocalLeaseTax {
              /**
               * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction. Supported FIPS codes are: `14000` (Chicago).
               */
              jurisdiction: string;
            }

            interface StateSalesTax {
              /**
               * Elections for the state sales tax registration.
               */
              elections: Array<StateSalesTax.Election>;
            }

            namespace StateSalesTax {
              interface Election {
                /**
                 * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction. Supported FIPS codes are: `003` (Allegheny County) and `60000` (Philadelphia City).
                 */
                jurisdiction?: string;

                /**
                 * The type of the election for the state sales tax registration.
                 */
                type: Election.Type;
              }

              namespace Election {
                type Type =
                  | 'local_use_tax'
                  | 'simplified_sellers_use_tax'
                  | 'single_local_use_tax';
              }
            }

            type Type =
              | 'local_amusement_tax'
              | 'local_lease_tax'
              | 'state_communications_tax'
              | 'state_retail_delivery_fee'
              | 'state_sales_tax';
          }

          interface Uy {
            /**
             * Options for the standard registration.
             */
            standard?: Uy.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Uy {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Uz {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Vn {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Za {
            /**
             * Options for the standard registration.
             */
            standard?: Za.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Za {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Zm {
            /**
             * Type of registration to be created in `country`.
             */
            type: 'simplified';
          }

          interface Zw {
            /**
             * Options for the standard registration.
             */
            standard?: Zw.Standard;

            /**
             * Type of registration to be created in `country`.
             */
            type: 'standard';
          }

          namespace Zw {
            interface Standard {
              /**
               * Place of supply scheme used in an standard registration.
               */
              place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }
        }
      }

      interface RegistrationRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface RegistrationUpdateParams {
        /**
         * Time at which the registration becomes active. It can be either `now` to indicate the current time, or a timestamp measured in seconds since the Unix epoch.
         */
        active_from?: 'now' | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * If set, the registration stops being active at this time. If not set, the registration will be active indefinitely. It can be either `now` to indicate the current time, or a timestamp measured in seconds since the Unix epoch.
         */
        expires_at?: Stripe.Emptyable<'now' | number>;
      }

      interface RegistrationListParams extends PaginationParams {
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
         * Returns a Tax Registration object.
         */
        retrieve(
          id: string,
          params?: RegistrationRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Registration>>;
        retrieve(
          id: string,
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
