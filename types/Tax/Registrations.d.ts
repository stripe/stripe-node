// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      /**
       * A Tax `Registration` lets us know that your business is registered to collect tax on payments within a region, enabling you to [automatically collect tax](https://stripe.com/docs/tax).
       *
       * Stripe doesn't register on your behalf with the relevant authorities when you create a Tax `Registration` object. For more information on how to register to collect tax, see [our guide](https://stripe.com/docs/tax/registering).
       *
       * Related guide: [Using the Registrations API](https://stripe.com/docs/tax/registrations-api)
       */
      interface Registration {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'tax.registration';

        /**
         * Time at which the registration becomes active. Measured in seconds since the Unix epoch.
         */
        active_from: number;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country: string;

        country_options: Registration.CountryOptions;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * If set, the registration stops being active at this time. If not set, the registration will be active indefinitely. Measured in seconds since the Unix epoch.
         */
        expires_at: number | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The status of the registration. This field is present for convenience and can be deduced from `active_from` and `expires_at`.
         */
        status: Registration.Status;
      }

      namespace Registration {
        interface CountryOptions {
          ae?: CountryOptions.Ae;

          al?: CountryOptions.Al;

          am?: CountryOptions.Am;

          ao?: CountryOptions.Ao;

          at?: CountryOptions.At;

          au?: CountryOptions.Au;

          aw?: CountryOptions.Aw;

          az?: CountryOptions.Az;

          ba?: CountryOptions.Ba;

          bb?: CountryOptions.Bb;

          bd?: CountryOptions.Bd;

          be?: CountryOptions.Be;

          bf?: CountryOptions.Bf;

          bg?: CountryOptions.Bg;

          bh?: CountryOptions.Bh;

          bj?: CountryOptions.Bj;

          bs?: CountryOptions.Bs;

          by?: CountryOptions.By;

          ca?: CountryOptions.Ca;

          cd?: CountryOptions.Cd;

          ch?: CountryOptions.Ch;

          cl?: CountryOptions.Cl;

          cm?: CountryOptions.Cm;

          co?: CountryOptions.Co;

          cr?: CountryOptions.Cr;

          cv?: CountryOptions.Cv;

          cy?: CountryOptions.Cy;

          cz?: CountryOptions.Cz;

          de?: CountryOptions.De;

          dk?: CountryOptions.Dk;

          ec?: CountryOptions.Ec;

          ee?: CountryOptions.Ee;

          eg?: CountryOptions.Eg;

          es?: CountryOptions.Es;

          et?: CountryOptions.Et;

          fi?: CountryOptions.Fi;

          fr?: CountryOptions.Fr;

          gb?: CountryOptions.Gb;

          ge?: CountryOptions.Ge;

          gn?: CountryOptions.Gn;

          gr?: CountryOptions.Gr;

          hr?: CountryOptions.Hr;

          hu?: CountryOptions.Hu;

          id?: CountryOptions.Id;

          ie?: CountryOptions.Ie;

          in?: CountryOptions.In;

          is?: CountryOptions.Is;

          it?: CountryOptions.It;

          jp?: CountryOptions.Jp;

          ke?: CountryOptions.Ke;

          kg?: CountryOptions.Kg;

          kh?: CountryOptions.Kh;

          kr?: CountryOptions.Kr;

          kz?: CountryOptions.Kz;

          la?: CountryOptions.La;

          lt?: CountryOptions.Lt;

          lu?: CountryOptions.Lu;

          lv?: CountryOptions.Lv;

          ma?: CountryOptions.Ma;

          md?: CountryOptions.Md;

          me?: CountryOptions.Me;

          mk?: CountryOptions.Mk;

          mr?: CountryOptions.Mr;

          mt?: CountryOptions.Mt;

          mx?: CountryOptions.Mx;

          my?: CountryOptions.My;

          ng?: CountryOptions.Ng;

          nl?: CountryOptions.Nl;

          no?: CountryOptions.No;

          np?: CountryOptions.Np;

          nz?: CountryOptions.Nz;

          om?: CountryOptions.Om;

          pe?: CountryOptions.Pe;

          ph?: CountryOptions.Ph;

          pl?: CountryOptions.Pl;

          pt?: CountryOptions.Pt;

          ro?: CountryOptions.Ro;

          rs?: CountryOptions.Rs;

          ru?: CountryOptions.Ru;

          sa?: CountryOptions.Sa;

          se?: CountryOptions.Se;

          sg?: CountryOptions.Sg;

          si?: CountryOptions.Si;

          sk?: CountryOptions.Sk;

          sn?: CountryOptions.Sn;

          sr?: CountryOptions.Sr;

          th?: CountryOptions.Th;

          tj?: CountryOptions.Tj;

          tr?: CountryOptions.Tr;

          tz?: CountryOptions.Tz;

          ua?: CountryOptions.Ua;

          ug?: CountryOptions.Ug;

          us?: CountryOptions.Us;

          uy?: CountryOptions.Uy;

          uz?: CountryOptions.Uz;

          vn?: CountryOptions.Vn;

          za?: CountryOptions.Za;

          zm?: CountryOptions.Zm;

          zw?: CountryOptions.Zw;
        }

        namespace CountryOptions {
          interface Ae {
            standard?: Ae.Standard;

            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          namespace Ae {
            interface Standard {
              /**
               * Place of supply scheme used in an Default standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Al {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Am {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Ao {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface At {
            standard?: At.Standard;

            /**
             * Type of registration in an EU country.
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
            standard?: Au.Standard;

            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          namespace Au {
            interface Standard {
              /**
               * Place of supply scheme used in an Default standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Aw {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Az {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Ba {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Bb {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Bd {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Be {
            standard?: Be.Standard;

            /**
             * Type of registration in an EU country.
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
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Bg {
            standard?: Bg.Standard;

            /**
             * Type of registration in an EU country.
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
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Bj {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Bs {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface By {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Ca {
            province_standard?: Ca.ProvinceStandard;

            /**
             * Type of registration in Canada.
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
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Ch {
            standard?: Ch.Standard;

            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          namespace Ch {
            interface Standard {
              /**
               * Place of supply scheme used in an Default standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Cl {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Cm {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Co {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Cr {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Cv {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Cy {
            standard?: Cy.Standard;

            /**
             * Type of registration in an EU country.
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
            standard?: Cz.Standard;

            /**
             * Type of registration in an EU country.
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
            standard?: De.Standard;

            /**
             * Type of registration in an EU country.
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
            standard?: Dk.Standard;

            /**
             * Type of registration in an EU country.
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
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Ee {
            standard?: Ee.Standard;

            /**
             * Type of registration in an EU country.
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
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Es {
            standard?: Es.Standard;

            /**
             * Type of registration in an EU country.
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
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Fi {
            standard?: Fi.Standard;

            /**
             * Type of registration in an EU country.
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
            standard?: Fr.Standard;

            /**
             * Type of registration in an EU country.
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
            standard?: Gb.Standard;

            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          namespace Gb {
            interface Standard {
              /**
               * Place of supply scheme used in an Default standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Ge {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Gn {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Gr {
            standard?: Gr.Standard;

            /**
             * Type of registration in an EU country.
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
            standard?: Hr.Standard;

            /**
             * Type of registration in an EU country.
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
            standard?: Hu.Standard;

            /**
             * Type of registration in an EU country.
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
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Ie {
            standard?: Ie.Standard;

            /**
             * Type of registration in an EU country.
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
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Is {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface It {
            standard?: It.Standard;

            /**
             * Type of registration in an EU country.
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
            standard?: Jp.Standard;

            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          namespace Jp {
            interface Standard {
              /**
               * Place of supply scheme used in an Default standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Ke {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Kg {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Kh {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Kr {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Kz {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface La {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Lt {
            standard?: Lt.Standard;

            /**
             * Type of registration in an EU country.
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
            standard?: Lu.Standard;

            /**
             * Type of registration in an EU country.
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
            standard?: Lv.Standard;

            /**
             * Type of registration in an EU country.
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
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Md {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Me {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Mk {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Mr {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Mt {
            standard?: Mt.Standard;

            /**
             * Type of registration in an EU country.
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
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface My {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Ng {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Nl {
            standard?: Nl.Standard;

            /**
             * Type of registration in an EU country.
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
            standard?: No.Standard;

            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          namespace No {
            interface Standard {
              /**
               * Place of supply scheme used in an Default standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Np {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Nz {
            standard?: Nz.Standard;

            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          namespace Nz {
            interface Standard {
              /**
               * Place of supply scheme used in an Default standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Om {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Pe {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Ph {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Pl {
            standard?: Pl.Standard;

            /**
             * Type of registration in an EU country.
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
            standard?: Pt.Standard;

            /**
             * Type of registration in an EU country.
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
            standard?: Ro.Standard;

            /**
             * Type of registration in an EU country.
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
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Ru {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Sa {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Se {
            standard?: Se.Standard;

            /**
             * Type of registration in an EU country.
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
            standard?: Sg.Standard;

            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          namespace Sg {
            interface Standard {
              /**
               * Place of supply scheme used in an Default standard registration.
               */
              place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
            }

            namespace Standard {
              type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
            }
          }

          interface Si {
            standard?: Si.Standard;

            /**
             * Type of registration in an EU country.
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
            standard?: Sk.Standard;

            /**
             * Type of registration in an EU country.
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
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Sr {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Th {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Tj {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Tr {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Tz {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Ua {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Ug {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Us {
            local_amusement_tax?: Us.LocalAmusementTax;

            local_lease_tax?: Us.LocalLeaseTax;

            /**
             * Two-letter US state code ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
             */
            state: string;

            state_sales_tax?: Us.StateSalesTax;

            /**
             * Type of registration in the US.
             */
            type: Us.Type;
          }

          namespace Us {
            interface LocalAmusementTax {
              /**
               * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction.
               */
              jurisdiction: string;
            }

            interface LocalLeaseTax {
              /**
               * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction.
               */
              jurisdiction: string;
            }

            interface StateSalesTax {
              /**
               * Elections for the state sales tax registration.
               */
              elections?: Array<StateSalesTax.Election>;
            }

            namespace StateSalesTax {
              interface Election {
                /**
                 * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction.
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
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Uz {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Vn {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Za {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }

          interface Zm {
            /**
             * Type of registration in `country`.
             */
            type: 'simplified';
          }

          interface Zw {
            /**
             * Type of registration in `country`.
             */
            type: 'standard';
          }
        }

        type Status = 'active' | 'expired' | 'scheduled';
      }
    }
  }
}
