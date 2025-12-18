// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../Types.js';
import {Emptyable, PaginationParams} from '../../shared.js';
import {ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class RegistrationResource extends StripeResource {
  /**
   * Returns a list of Tax Registration objects.
   */
  list(
    params?: Tax.RegistrationListParams,
    options?: RequestOptions
  ): ApiListPromise<Registration>;
  list(options?: RequestOptions): ApiListPromise<Registration>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/tax/registrations',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a new Tax Registration object.
   */
  create(
    params: Tax.RegistrationCreateParams,
    options?: RequestOptions
  ): Promise<Response<Registration>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/tax/registrations',
    }).call(this, ...args);
  }

  /**
   * Returns a Tax Registration object.
   */
  retrieve(
    id: string,
    params?: Tax.RegistrationRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Registration>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<Registration>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/tax/registrations/{id}',
    }).call(this, ...args);
  }

  /**
   * Updates an existing Tax Registration object.
   *
   * A registration cannot be deleted after it has been created. If you wish to end a registration you may do so by setting expires_at.
   */
  update(
    id: string,
    params?: Tax.RegistrationUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Registration>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/tax/registrations/{id}',
    }).call(this, ...args);
  }
}
export /**
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

  country_options: Tax.Registration.CountryOptions;

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
  status: Tax.Registration.Status;
}
export namespace Tax {
  export namespace Registration {
    export interface CountryOptions {
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

      tw?: CountryOptions.Tw;

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

    export type Status = 'active' | 'expired' | 'scheduled';

    export namespace CountryOptions {
      export interface Ae {
        standard?: Ae.Standard;

        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Al {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Am {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Ao {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface At {
        standard?: At.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: At.Type;
      }

      export interface Au {
        standard?: Au.Standard;

        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Aw {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Az {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Ba {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Bb {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Bd {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Be {
        standard?: Be.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Be.Type;
      }

      export interface Bf {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Bg {
        standard?: Bg.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Bg.Type;
      }

      export interface Bh {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Bj {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Bs {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface By {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Ca {
        province_standard?: Ca.ProvinceStandard;

        /**
         * Type of registration in Canada.
         */
        type: Ca.Type;
      }

      export interface Cd {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Ch {
        standard?: Ch.Standard;

        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Cl {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Cm {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Co {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Cr {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Cv {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Cy {
        standard?: Cy.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Cy.Type;
      }

      export interface Cz {
        standard?: Cz.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Cz.Type;
      }

      export interface De {
        standard?: De.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: De.Type;
      }

      export interface Dk {
        standard?: Dk.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Dk.Type;
      }

      export interface Ec {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Ee {
        standard?: Ee.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Ee.Type;
      }

      export interface Eg {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Es {
        standard?: Es.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Es.Type;
      }

      export interface Et {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Fi {
        standard?: Fi.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Fi.Type;
      }

      export interface Fr {
        standard?: Fr.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Fr.Type;
      }

      export interface Gb {
        standard?: Gb.Standard;

        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Ge {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Gn {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Gr {
        standard?: Gr.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Gr.Type;
      }

      export interface Hr {
        standard?: Hr.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Hr.Type;
      }

      export interface Hu {
        standard?: Hu.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Hu.Type;
      }

      export interface Id {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Ie {
        standard?: Ie.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Ie.Type;
      }

      export interface In {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Is {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface It {
        standard?: It.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: It.Type;
      }

      export interface Jp {
        standard?: Jp.Standard;

        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Ke {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Kg {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Kh {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Kr {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Kz {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface La {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Lt {
        standard?: Lt.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Lt.Type;
      }

      export interface Lu {
        standard?: Lu.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Lu.Type;
      }

      export interface Lv {
        standard?: Lv.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Lv.Type;
      }

      export interface Ma {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Md {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Me {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Mk {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Mr {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Mt {
        standard?: Mt.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Mt.Type;
      }

      export interface Mx {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface My {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Ng {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Nl {
        standard?: Nl.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Nl.Type;
      }

      export interface No {
        standard?: No.Standard;

        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Np {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Nz {
        standard?: Nz.Standard;

        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Om {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Pe {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Ph {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Pl {
        standard?: Pl.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Pl.Type;
      }

      export interface Pt {
        standard?: Pt.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Pt.Type;
      }

      export interface Ro {
        standard?: Ro.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Ro.Type;
      }

      export interface Rs {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Ru {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Sa {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Se {
        standard?: Se.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Se.Type;
      }

      export interface Sg {
        standard?: Sg.Standard;

        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Si {
        standard?: Si.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Si.Type;
      }

      export interface Sk {
        standard?: Sk.Standard;

        /**
         * Type of registration in an EU country.
         */
        type: Sk.Type;
      }

      export interface Sn {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Sr {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Th {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Tj {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Tr {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Tw {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Tz {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Ua {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Ug {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Us {
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

      export interface Uy {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Uz {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Vn {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Za {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export interface Zm {
        /**
         * Type of registration in `country`.
         */
        type: 'simplified';
      }

      export interface Zw {
        /**
         * Type of registration in `country`.
         */
        type: 'standard';
      }

      export namespace Ae {
        export interface Standard {
          /**
           * Place of supply scheme used in an Default standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace At {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Au {
        export interface Standard {
          /**
           * Place of supply scheme used in an Default standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Be {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Bg {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Ca {
        export interface ProvinceStandard {
          /**
           * Two-letter CA province code ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
           */
          province: string;
        }

        export type Type = 'province_standard' | 'simplified' | 'standard';
      }

      export namespace Ch {
        export interface Standard {
          /**
           * Place of supply scheme used in an Default standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Cy {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Cz {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace De {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Dk {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Ee {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Es {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Fi {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Fr {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Gb {
        export interface Standard {
          /**
           * Place of supply scheme used in an Default standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Gr {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Hr {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Hu {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Ie {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace It {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Jp {
        export interface Standard {
          /**
           * Place of supply scheme used in an Default standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Lt {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Lu {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Lv {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Mt {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Nl {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace No {
        export interface Standard {
          /**
           * Place of supply scheme used in an Default standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Nz {
        export interface Standard {
          /**
           * Place of supply scheme used in an Default standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Pl {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Pt {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Ro {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Se {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Sg {
        export interface Standard {
          /**
           * Place of supply scheme used in an Default standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Si {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Sk {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Us {
        export interface LocalAmusementTax {
          /**
           * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction.
           */
          jurisdiction: string;
        }

        export interface LocalLeaseTax {
          /**
           * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction.
           */
          jurisdiction: string;
        }

        export interface StateSalesTax {
          /**
           * Elections for the state sales tax registration.
           */
          elections?: Array<StateSalesTax.Election>;
        }

        export type Type =
          | 'local_amusement_tax'
          | 'local_lease_tax'
          | 'state_communications_tax'
          | 'state_retail_delivery_fee'
          | 'state_sales_tax';

        export namespace StateSalesTax {
          export interface Election {
            /**
             * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction.
             */
            jurisdiction?: string;

            /**
             * The type of the election for the state sales tax registration.
             */
            type: Election.Type;
          }

          export namespace Election {
            export type Type =
              | 'local_use_tax'
              | 'simplified_sellers_use_tax'
              | 'single_local_use_tax';
          }
        }
      }
    }
  }
}
export namespace Tax {
  export interface RegistrationCreateParams {
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

  export namespace RegistrationCreateParams {
    export interface CountryOptions {
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

    export namespace CountryOptions {
      export interface Ae {
        /**
         * Options for the standard registration.
         */
        standard?: Ae.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Al {
        /**
         * Options for the standard registration.
         */
        standard?: Al.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Am {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Ao {
        /**
         * Options for the standard registration.
         */
        standard?: Ao.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface At {
        /**
         * Options for the standard registration.
         */
        standard?: At.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: At.Type;
      }

      export interface Au {
        /**
         * Options for the standard registration.
         */
        standard?: Au.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Aw {
        /**
         * Options for the standard registration.
         */
        standard?: Aw.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Az {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Ba {
        /**
         * Options for the standard registration.
         */
        standard?: Ba.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Bb {
        /**
         * Options for the standard registration.
         */
        standard?: Bb.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Bd {
        /**
         * Options for the standard registration.
         */
        standard?: Bd.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Be {
        /**
         * Options for the standard registration.
         */
        standard?: Be.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Be.Type;
      }

      export interface Bf {
        /**
         * Options for the standard registration.
         */
        standard?: Bf.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Bg {
        /**
         * Options for the standard registration.
         */
        standard?: Bg.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Bg.Type;
      }

      export interface Bh {
        /**
         * Options for the standard registration.
         */
        standard?: Bh.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Bj {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Bs {
        /**
         * Options for the standard registration.
         */
        standard?: Bs.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface By {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Ca {
        /**
         * Options for the provincial tax registration.
         */
        province_standard?: Ca.ProvinceStandard;

        /**
         * Type of registration to be created in Canada.
         */
        type: Ca.Type;
      }

      export interface Cd {
        /**
         * Options for the standard registration.
         */
        standard?: Cd.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Ch {
        /**
         * Options for the standard registration.
         */
        standard?: Ch.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Cl {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Cm {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Co {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Cr {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Cv {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Cy {
        /**
         * Options for the standard registration.
         */
        standard?: Cy.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Cy.Type;
      }

      export interface Cz {
        /**
         * Options for the standard registration.
         */
        standard?: Cz.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Cz.Type;
      }

      export interface De {
        /**
         * Options for the standard registration.
         */
        standard?: De.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: De.Type;
      }

      export interface Dk {
        /**
         * Options for the standard registration.
         */
        standard?: Dk.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Dk.Type;
      }

      export interface Ec {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Ee {
        /**
         * Options for the standard registration.
         */
        standard?: Ee.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Ee.Type;
      }

      export interface Eg {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Es {
        /**
         * Options for the standard registration.
         */
        standard?: Es.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Es.Type;
      }

      export interface Et {
        /**
         * Options for the standard registration.
         */
        standard?: Et.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Fi {
        /**
         * Options for the standard registration.
         */
        standard?: Fi.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Fi.Type;
      }

      export interface Fr {
        /**
         * Options for the standard registration.
         */
        standard?: Fr.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Fr.Type;
      }

      export interface Gb {
        /**
         * Options for the standard registration.
         */
        standard?: Gb.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Ge {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Gn {
        /**
         * Options for the standard registration.
         */
        standard?: Gn.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Gr {
        /**
         * Options for the standard registration.
         */
        standard?: Gr.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Gr.Type;
      }

      export interface Hr {
        /**
         * Options for the standard registration.
         */
        standard?: Hr.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Hr.Type;
      }

      export interface Hu {
        /**
         * Options for the standard registration.
         */
        standard?: Hu.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Hu.Type;
      }

      export interface Id {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Ie {
        /**
         * Options for the standard registration.
         */
        standard?: Ie.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Ie.Type;
      }

      export interface In {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Is {
        /**
         * Options for the standard registration.
         */
        standard?: Is.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface It {
        /**
         * Options for the standard registration.
         */
        standard?: It.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: It.Type;
      }

      export interface Jp {
        /**
         * Options for the standard registration.
         */
        standard?: Jp.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Ke {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Kg {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Kh {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Kr {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Kz {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface La {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Lt {
        /**
         * Options for the standard registration.
         */
        standard?: Lt.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Lt.Type;
      }

      export interface Lu {
        /**
         * Options for the standard registration.
         */
        standard?: Lu.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Lu.Type;
      }

      export interface Lv {
        /**
         * Options for the standard registration.
         */
        standard?: Lv.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Lv.Type;
      }

      export interface Ma {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Md {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Me {
        /**
         * Options for the standard registration.
         */
        standard?: Me.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Mk {
        /**
         * Options for the standard registration.
         */
        standard?: Mk.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Mr {
        /**
         * Options for the standard registration.
         */
        standard?: Mr.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Mt {
        /**
         * Options for the standard registration.
         */
        standard?: Mt.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Mt.Type;
      }

      export interface Mx {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface My {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Ng {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Nl {
        /**
         * Options for the standard registration.
         */
        standard?: Nl.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Nl.Type;
      }

      export interface No {
        /**
         * Options for the standard registration.
         */
        standard?: No.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Np {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Nz {
        /**
         * Options for the standard registration.
         */
        standard?: Nz.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Om {
        /**
         * Options for the standard registration.
         */
        standard?: Om.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Pe {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Ph {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Pl {
        /**
         * Options for the standard registration.
         */
        standard?: Pl.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Pl.Type;
      }

      export interface Pt {
        /**
         * Options for the standard registration.
         */
        standard?: Pt.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Pt.Type;
      }

      export interface Ro {
        /**
         * Options for the standard registration.
         */
        standard?: Ro.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Ro.Type;
      }

      export interface Rs {
        /**
         * Options for the standard registration.
         */
        standard?: Rs.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Ru {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Sa {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Se {
        /**
         * Options for the standard registration.
         */
        standard?: Se.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Se.Type;
      }

      export interface Sg {
        /**
         * Options for the standard registration.
         */
        standard?: Sg.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Si {
        /**
         * Options for the standard registration.
         */
        standard?: Si.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Si.Type;
      }

      export interface Sk {
        /**
         * Options for the standard registration.
         */
        standard?: Sk.Standard;

        /**
         * Type of registration to be created in an EU country.
         */
        type: Sk.Type;
      }

      export interface Sn {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Sr {
        /**
         * Options for the standard registration.
         */
        standard?: Sr.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Th {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Tj {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Tr {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Tw {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Tz {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Ua {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Ug {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Us {
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

      export interface Uy {
        /**
         * Options for the standard registration.
         */
        standard?: Uy.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Uz {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Vn {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Za {
        /**
         * Options for the standard registration.
         */
        standard?: Za.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export interface Zm {
        /**
         * Type of registration to be created in `country`.
         */
        type: 'simplified';
      }

      export interface Zw {
        /**
         * Options for the standard registration.
         */
        standard?: Zw.Standard;

        /**
         * Type of registration to be created in `country`.
         */
        type: 'standard';
      }

      export namespace Ae {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Al {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Ao {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace At {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Au {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Aw {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Ba {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Bb {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Bd {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Be {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Bf {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Bg {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Bh {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Bs {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Ca {
        export interface ProvinceStandard {
          /**
           * Two-letter CA province code ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
           */
          province: string;
        }

        export type Type = 'province_standard' | 'simplified' | 'standard';
      }

      export namespace Cd {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Ch {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Cy {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Cz {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace De {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Dk {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Ee {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Es {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Et {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Fi {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Fr {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Gb {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Gn {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Gr {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Hr {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Hu {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Ie {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Is {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace It {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Jp {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Lt {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Lu {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Lv {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Me {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Mk {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Mr {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Mt {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Nl {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace No {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Nz {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Om {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Pl {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Pt {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Ro {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Rs {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Se {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Sg {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Si {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Sk {
        export interface Standard {
          /**
           * Place of supply scheme used in an EU standard registration.
           */
          place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
        }

        export type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';

        export namespace Standard {
          export type PlaceOfSupplyScheme =
            | 'inbound_goods'
            | 'small_seller'
            | 'standard';
        }
      }

      export namespace Sr {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Us {
        export interface LocalAmusementTax {
          /**
           * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction. Supported FIPS codes are: `14000` (Chicago), `06613` (Bloomington), `21696` (East Dundee), `24582` (Evanston), `45421` (Lynwood), `48892` (Midlothian), `64343` (River Grove), and `68081` (Schiller Park).
           */
          jurisdiction: string;
        }

        export interface LocalLeaseTax {
          /**
           * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction. Supported FIPS codes are: `14000` (Chicago).
           */
          jurisdiction: string;
        }

        export interface StateSalesTax {
          /**
           * Elections for the state sales tax registration.
           */
          elections: Array<StateSalesTax.Election>;
        }

        export type Type =
          | 'local_amusement_tax'
          | 'local_lease_tax'
          | 'state_communications_tax'
          | 'state_retail_delivery_fee'
          | 'state_sales_tax';

        export namespace StateSalesTax {
          export interface Election {
            /**
             * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction. Supported FIPS codes are: `003` (Allegheny County) and `60000` (Philadelphia City).
             */
            jurisdiction?: string;

            /**
             * The type of the election for the state sales tax registration.
             */
            type: Election.Type;
          }

          export namespace Election {
            export type Type =
              | 'local_use_tax'
              | 'simplified_sellers_use_tax'
              | 'single_local_use_tax';
          }
        }
      }

      export namespace Uy {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Za {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }

      export namespace Zw {
        export interface Standard {
          /**
           * Place of supply scheme used in an standard registration.
           */
          place_of_supply_scheme?: Standard.PlaceOfSupplyScheme;
        }

        export namespace Standard {
          export type PlaceOfSupplyScheme = 'inbound_goods' | 'standard';
        }
      }
    }
  }
}
export namespace Tax {
  export interface RegistrationRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Tax {
  export interface RegistrationUpdateParams {
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
    expires_at?: Emptyable<'now' | number>;
  }
}
export namespace Tax {
  export interface RegistrationListParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The status of the Tax Registration.
     */
    status?: RegistrationListParams.Status;
  }

  export namespace RegistrationListParams {
    export type Status = 'active' | 'all' | 'expired' | 'scheduled';
  }
}
