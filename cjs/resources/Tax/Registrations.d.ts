import { StripeResource } from '../../StripeResource.js';
import { RequestOptions } from '../../Types.js';
import { Emptyable, PaginationParams } from '../../shared.js';
import { ApiListPromise, Response } from '../../lib.js';
export declare class RegistrationResource extends StripeResource {
    /**
     * Returns a list of Tax Registration objects.
     */
    list(params?: Tax.RegistrationListParams, options?: RequestOptions): ApiListPromise<Registration>;
    list(options?: RequestOptions): ApiListPromise<Registration>;
    /**
     * Creates a new Tax Registration object.
     */
    create(params: Tax.RegistrationCreateParams, options?: RequestOptions): Promise<Response<Registration>>;
    /**
     * Returns a Tax Registration object.
     */
    retrieve(id: string, params?: Tax.RegistrationRetrieveParams, options?: RequestOptions): Promise<Response<Registration>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<Registration>>;
    /**
     * Updates an existing Tax Registration object.
     *
     * A registration cannot be deleted after it has been created. If you wish to end a registration you may do so by setting expires_at.
     */
    update(id: string, params?: Tax.RegistrationUpdateParams, options?: RequestOptions): Promise<Response<Registration>>;
}
export /**
 * A Tax `Registration` lets us know that your business is registered to collect tax on payments within a region, enabling you to [automatically collect tax](https://stripe.com/docs/tax).
 *
 * Stripe doesn't register on your behalf with the relevant authorities when you create a Tax `Registration` object. For more information on how to register to collect tax, see [our guide](https://stripe.com/docs/tax/registering).
 *
 * Related guide: [Using the Registrations API](https://stripe.com/docs/tax/registrations-api)
 */ interface Registration {
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
export declare namespace Tax {
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
        type Status = 'active' | 'expired' | 'scheduled';
        namespace CountryOptions {
            interface Ae {
                standard?: Ae.Standard;
                /**
                 * Type of registration in `country`.
                 */
                type: 'standard';
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
            interface Au {
                standard?: Au.Standard;
                /**
                 * Type of registration in `country`.
                 */
                type: 'standard';
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
            interface Cz {
                standard?: Cz.Standard;
                /**
                 * Type of registration in an EU country.
                 */
                type: Cz.Type;
            }
            interface De {
                standard?: De.Standard;
                /**
                 * Type of registration in an EU country.
                 */
                type: De.Type;
            }
            interface Dk {
                standard?: Dk.Standard;
                /**
                 * Type of registration in an EU country.
                 */
                type: Dk.Type;
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
            interface Fr {
                standard?: Fr.Standard;
                /**
                 * Type of registration in an EU country.
                 */
                type: Fr.Type;
            }
            interface Gb {
                standard?: Gb.Standard;
                /**
                 * Type of registration in `country`.
                 */
                type: 'standard';
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
            interface Hr {
                standard?: Hr.Standard;
                /**
                 * Type of registration in an EU country.
                 */
                type: Hr.Type;
            }
            interface Hu {
                standard?: Hu.Standard;
                /**
                 * Type of registration in an EU country.
                 */
                type: Hu.Type;
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
            interface Jp {
                standard?: Jp.Standard;
                /**
                 * Type of registration in `country`.
                 */
                type: 'standard';
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
            interface Lu {
                standard?: Lu.Standard;
                /**
                 * Type of registration in an EU country.
                 */
                type: Lu.Type;
            }
            interface Lv {
                standard?: Lv.Standard;
                /**
                 * Type of registration in an EU country.
                 */
                type: Lv.Type;
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
            interface No {
                standard?: No.Standard;
                /**
                 * Type of registration in `country`.
                 */
                type: 'standard';
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
            interface Pt {
                standard?: Pt.Standard;
                /**
                 * Type of registration in an EU country.
                 */
                type: Pt.Type;
            }
            interface Ro {
                standard?: Ro.Standard;
                /**
                 * Type of registration in an EU country.
                 */
                type: Ro.Type;
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
            interface Sg {
                standard?: Sg.Standard;
                /**
                 * Type of registration in `country`.
                 */
                type: 'standard';
            }
            interface Si {
                standard?: Si.Standard;
                /**
                 * Type of registration in an EU country.
                 */
                type: Si.Type;
            }
            interface Sk {
                standard?: Sk.Standard;
                /**
                 * Type of registration in an EU country.
                 */
                type: Sk.Type;
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
            interface Tw {
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
            namespace At {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace Be {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Bg {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace Cy {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Cz {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace De {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Dk {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Ee {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Es {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Fi {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Fr {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace Gr {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Hr {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Hu {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Ie {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace It {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace Lt {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Lu {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Lv {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Mt {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Nl {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace Pl {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Pt {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Ro {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Se {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace Si {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Sk {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
                type Type = 'local_amusement_tax' | 'local_lease_tax' | 'state_communications_tax' | 'state_retail_delivery_fee' | 'state_sales_tax';
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
                        type Type = 'local_use_tax' | 'simplified_sellers_use_tax' | 'single_local_use_tax';
                    }
                }
            }
        }
    }
}
export declare namespace Tax {
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
            namespace At {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace Be {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace Bg {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace Ca {
                interface ProvinceStandard {
                    /**
                     * Two-letter CA province code ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
                     */
                    province: string;
                }
                type Type = 'province_standard' | 'simplified' | 'standard';
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
            namespace Cy {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Cz {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace De {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Dk {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Ee {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Es {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace Fi {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Fr {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace Gr {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Hr {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Hu {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Ie {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace It {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace Lt {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Lu {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Lv {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace Mt {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Nl {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace Pl {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Pt {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Ro {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace Se {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace Si {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
            }
            namespace Sk {
                interface Standard {
                    /**
                     * Place of supply scheme used in an EU standard registration.
                     */
                    place_of_supply_scheme: Standard.PlaceOfSupplyScheme;
                }
                type Type = 'ioss' | 'oss_non_union' | 'oss_union' | 'standard';
                namespace Standard {
                    type PlaceOfSupplyScheme = 'inbound_goods' | 'small_seller' | 'standard';
                }
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
            namespace Us {
                interface LocalAmusementTax {
                    /**
                     * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction. Supported FIPS codes are: `14000` (Chicago), `06613` (Bloomington), `21696` (East Dundee), `24582` (Evanston), `45421` (Lynwood), `48892` (Midlothian), `64343` (River Grove), and `68081` (Schiller Park).
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
                type Type = 'local_amusement_tax' | 'local_lease_tax' | 'state_communications_tax' | 'state_retail_delivery_fee' | 'state_sales_tax';
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
                        type Type = 'local_use_tax' | 'simplified_sellers_use_tax' | 'single_local_use_tax';
                    }
                }
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
}
export declare namespace Tax {
    interface RegistrationRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Tax {
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
        expires_at?: Emptyable<'now' | number>;
    }
}
export declare namespace Tax {
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
}
